import {
  Box,
  Button,
  ListItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Skeleton,
  SkeletonText,
  Text,
  useBreakpointValue,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';
import createDOMPurify from 'dompurify';
import parse from 'html-react-parser';
import {
  SearchResultFragment,
  useGetSecContractQuery,
} from 'lib/generated/graphql/apollo-schema';
import { FC, HTMLAttributes, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { RemoveScroll } from 'react-remove-scroll';

const isSSR = typeof window === 'undefined';
let domPurify: createDOMPurify.DOMPurifyI | null;

if (!isSSR) {
  domPurify = createDOMPurify(window);
  domPurify.addHook('afterSanitizeAttributes', (node) => {
    // remove negative margins
    const style = node.getAttribute('style') || '';
    const negMarginsRegex = /(margin-\w+)\s*:\s*-[\d.]*\s*\w*/gim;
    node.setAttribute('style', style.replaceAll(negMarginsRegex, '$1: 0'));
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
}

export const FunctionalIFrameComponent: FC<IFrameProps> = ({
  children,
  title,
  propagationTargetId,
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

        p, font, span, tr, td {
          color: ${color} !important;
          border-color: ${color} !important;
          background-color: transparent !important;
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
  dom: JSX.Element[];
}

export const ContractIFrame: FC<ContractIFrameProps> = ({
  dom,
  accession_number,
  sequence,
}) => {
  const fontSize =
    useBreakpointValue(['90%', '100%', '110%', '120%']) || '100%';
  const color = useColorModeValue('black', 'white');

  return (
    <FunctionalIFrameComponent
      title={`contract-${accession_number}-${sequence}`}
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

export const ContractModal: FC<SearchResultFragment> = (contract) => {
  const { accession_number, sequence } = contract;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { data, loading } = useGetSecContractQuery({
    variables: { accession_number, sequence },
    skip: isSSR || !isOpen,
  });

  const { description, sec_filing, attachment_type } =
    data?.sec_filing_attachment_by_pk || {};
  const { filing_date, filing_type, sec_company } = sec_filing || {};
  const { name: companyName } = sec_company || {};
  const dom = stringToDOM(data?.sec_filing_attachment_by_pk?.contents);

  return (
    <>
      <Button onClick={onOpen}>View</Button>
      <Modal isOpen={isOpen} onClose={onClose} blockScrollOnMount={false}>
        <ModalOverlay />
        <ModalContent width="95vw" maxWidth="900px">
          <ModalHeader>
            {loading ? (
              <Skeleton>{'x'.repeat(20)}</Skeleton>
            ) : (
              description && (
                <Text as="span" mr={3}>
                  {description}
                </Text>
              )
            )}
            <Text as="span" fontSize="80%" fontWeight="normal">
              ({filing_type} - {attachment_type})
            </Text>
            <Text fontSize="80%" fontWeight="normal">
              Filed by {companyName} on {filing_date?.toString()}
            </Text>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody
            px={[2, 4, 6]}
            id={`contract-modal-${accession_number}-${sequence}`}
          >
            <SkeletonText isLoaded={!loading} noOfLines={30}>
              <ContractIFrame {...{ dom, ...contract }} />
            </SkeletonText>
          </ModalBody>
          <ModalFooter>
            <Button mr={3} onClick={onClose}>
              Close
            </Button>
            {/* <Button variant="ghost">Secondary Action</Button> */}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export const ContractSnippet: FC<SearchResultFragment> = (contractProps) => {
  const {
    company_name,
    filing_type,
    description,
    attachment_type,
    filing_date,
  } = contractProps;
  return (
    <ListItem>
      <Box>
        {filing_date}
        {company_name}
        {filing_type}
        {attachment_type}
        {description}
        <ContractModal {...contractProps} />
      </Box>
    </ListItem>
  );
};
