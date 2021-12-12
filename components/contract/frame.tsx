import { Box, useBreakpointValue, useColorModeValue } from '@chakra-ui/react';
import createDOMPurify from 'dompurify';
import parse from 'html-react-parser';
import { SearchResultFragment } from 'lib/generated/graphql/apollo-schema';
import { FC, HTMLAttributes, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { RemoveScroll } from 'react-remove-scroll';

const SEC_BASE_URL = 'https://www.sec.gov/Archives/edgar/data';

const isSSR = typeof window === 'undefined';
let domPurify: createDOMPurify.DOMPurifyI | null;

if (!isSSR) {
  domPurify = createDOMPurify(window);
  domPurify.addHook('afterSanitizeAttributes', (node) => {
    // remove negative margins
    const style = node.getAttribute('style') || '';
    const negMarginsRegex = /(margin-\w+)\s*:\s*-[\d.]*\s*\w*/gim;
    node.setAttribute('style', style.replaceAll(negMarginsRegex, '$1: 4'));
    if (
      node.tagName === 'DIV' &&
      node.getAttribute('align')?.toLowerCase() === 'justify'
    ) {
      const alignCenterRegex = /(.*)text-align\w*:\s*center\s*;?(.*)/gim;
      node.setAttribute(
        'style',
        node.getAttribute('style')?.replaceAll(alignCenterRegex, '$1 $2') || ''
      );
    }
  });
}

interface IFrameProps extends HTMLAttributes<HTMLElement> {
  allow?: string;
  allowFullScreen?: boolean;
  allowTransparency?: boolean;
  frameBorder?: number | string;
  height?: number | string;
  marginHeight?: number;
  marginWidth?: number;
  name?: string;
  sandbox?: string;
  scrolling?: string;
  seamless?: boolean;
  src?: string;
  srcDoc?: string;
  width?: number | string;
  propagationTargetId?: string;
  baseUrl?: string;
}

export const FunctionalIFrameComponent: FC<IFrameProps> = ({
  children,
  title,
  propagationTargetId,
  baseUrl,
  ...props
}) => {
  const [contentRef, setContentRef] = useState<HTMLIFrameElement | null>(null);
  const [paddingRight, setPaddingRight] = useState(0);
  const [height, setHeight] = useState(500);
  const contentWindow = contentRef?.contentWindow;
  const domBody = contentWindow?.document?.body;
  const domHead = contentWindow?.document?.head;
  const { scrollHeight, clientHeight, scrollWidth, clientWidth } =
    domBody || {};
  const color = useColorModeValue('black', 'white');

  // handle negative margin in docs
  useEffect(() => {
    if (!domBody) return;
    if (domBody.scrollWidth > domBody.clientWidth) {
      setPaddingRight(domBody.scrollWidth - domBody.clientWidth);
    }
    setHeight(domBody.scrollHeight);
  }, [domBody, scrollHeight, clientHeight, scrollWidth, clientWidth]);

  useEffect(() => {
    if (!propagationTargetId) return;
    ['keyup', 'keydown'].forEach((eventType) =>
      contentWindow?.addEventListener(eventType, (e) => {
        const el = document.getElementById(propagationTargetId);
        el?.dispatchEvent(new KeyboardEvent(eventType, e));
      })
    );
  }, [contentWindow, propagationTargetId]);

  if (baseUrl && domHead?.firstElementChild?.tagName !== 'BASE') {
    // set base url
    const baseTag = document.createElement('base');
    baseTag.setAttribute('href', baseUrl);
    // baseTag.
    domHead?.prepend(baseTag);
  }

  domBody?.setAttribute(
    'style',
    `padding-right: ${paddingRight}px; overflow-y: hidden;`
  );

  // idempotently set css
  if (domHead) {
    if (domHead.lastElementChild?.tagName?.toLowerCase() !== 'style') {
      domHead.appendChild(document.createElement('style'));
    }
    if (domHead.lastElementChild) {
      domHead.lastElementChild.innerHTML = `
        body {
          overflow-y: hidden;
        }

        pre {
          width: 100%;
          white-space: pre-wrap;
          margin-right: -${paddingRight}px;
        }

        p, font, span, tr, td, table {
          color: ${color} !important;
          border-color: ${color} !important;
          background-color: transparent !important;
          line-height: 1.2;
        }`;
    }
  }

  return (
    <>
      <iframe
        height={`${height}px`}
        title={title}
        {...{ ...props }}
        ref={setContentRef}
      >
        {domBody && createPortal(children, domBody)}
      </iframe>
    </>
  );
};

const stringToDOM = (rawHtml: string | undefined): JSX.Element[] => {
  if (!domPurify || !rawHtml) return [];

  const html = domPurify.sanitize(rawHtml, {
    // KEEP_CONTENT: false,
    IN_PLACE: true,
  });
  const parsedHtml = parse(html.replaceAll(/\bPAGEBREAK\b/gi, ''));
  return (Array.isArray(parsedHtml) ? parsedHtml : [parsedHtml]).map((el) =>
    typeof el === 'string' && el.trim() ? <pre>{el}</pre> : <>{el}</>
  );
};

interface ContractIFrameProps extends SearchResultFragment {
  htmlString: string;
}

export const ContractIFrame: FC<ContractIFrameProps> = ({
  htmlString,
  company_cik,
  accession_number,
  sequence,
}) => {
  const fontSize =
    useBreakpointValue(['90%', '100%', '110%', '120%']) || '100%';
  const color = useColorModeValue('black', 'white');
  const dom = stringToDOM(htmlString);

  const baseUrl = `${[
    SEC_BASE_URL,
    // remove leading 0's
    Number(company_cik).toString(),
    // strip out hyphens
    accession_number.replace(/[^\d]/g, ''),
    // requires trailing /
  ].join('/')}/`;

  return (
    <FunctionalIFrameComponent
      title={`contract-${accession_number}-${sequence}`}
      baseUrl={baseUrl}
      width="100%"
      propagationTargetId={`contract-modal-${accession_number}-${sequence}`}
    >
      <RemoveScroll forwardProps noIsolation>
        <>
          <Box className="iframe-contents" style={{ color, fontSize }}>
            {dom}
          </Box>
        </>
      </RemoveScroll>
    </FunctionalIFrameComponent>
  );
};
