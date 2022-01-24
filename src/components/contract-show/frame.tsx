import { Box, useBreakpointValue, useColorModeValue } from '@chakra-ui/react';
import parse from 'html-react-parser';
import { SecContractFragment } from 'lib/generated/graphql/apollo-schema';
import { sanitizeHtml } from 'lib/sanitize';
import { FC, HTMLAttributes, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import ScrollLock from 'react-scrolllock';

const SEC_BASE_URL = 'https://www.sec.gov/Archives/edgar/data';

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

const stringToDOM = (rawHtml: string | undefined): JSX.Element[] => {
  const html = sanitizeHtml(rawHtml);
  const parsedHtml = parse(html.replaceAll(/\bPAGEBREAK\b/gi, ''));
  return (Array.isArray(parsedHtml) ? parsedHtml : [parsedHtml]).map((el) =>
    typeof el === 'string' && el.trim() ? <pre>{el}</pre> : <>{el}</>
  );
};

export const FunctionalIFrameComponent: FC<IFrameProps> = ({
  children,
  title,
  propagationTargetId,
  baseUrl,
  ...props
}) => {
  const [contentRef, setContentRef] = useState<HTMLIFrameElement | null>(null);
  const [height, setHeight] = useState(1000);
  const contentWindow = contentRef?.contentWindow;
  const domBody = contentWindow?.document?.body;
  const domHead = contentWindow?.document?.head;
  const color = useColorModeValue('black', 'white');

  // handle negative margin in docs
  useEffect(() => {
    if (domBody?.scrollHeight) {
      setHeight(domBody.scrollHeight);
    }
  }, [domBody?.scrollHeight]);

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

        * {
          text-indent: 0 !important;
          max-width: 100% !important;
        }

        img {
          height: auto !important;
          width: auto !important;
        }

        pre {
          width: 100%;
          white-space: pre-wrap;
        }

        p, font, span, tr, td, table {
          color: ${color} !important;
          border-color: ${color} !important;
          background-color: transparent !important;
          line-height: 1.2;
        }
        `;
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

interface ContractIFrameProps extends SecContractFragment {
  removeScroll?: boolean;
}

export const ContractIFrame: FC<ContractIFrameProps> = ({
  contents,
  uid,
  sec_filing,
  removeScroll = false,
}) => {
  const fontSize =
    useBreakpointValue(['90%', '100%', '110%', '120%']) || '100%';
  const color = useColorModeValue('black', 'white');
  const dom = stringToDOM(contents);

  const { sec_company, accession_number } = sec_filing || {};

  const baseUrl = `${[
    SEC_BASE_URL,
    // remove leading 0's
    Number(sec_company.cik).toString(),
    // strip out hyphens
    accession_number.replace(/[^\d]/g, ''),
    // requires trailing /
  ].join('/')}/`;

  const iframeContent = (
    <Box className="iframe-contents" style={{ color, fontSize }}>
      {dom}
    </Box>
  );

  return (
    <FunctionalIFrameComponent
      title={`contract-${uid}`}
      baseUrl={baseUrl}
      width="100%"
      propagationTargetId={`contract-modal-${uid}`}
    >
      {removeScroll ? (
        <ScrollLock>
          {iframeContent}
        </ScrollLock>
      ) : (
        iframeContent
      )}
    </FunctionalIFrameComponent>
  );
};
