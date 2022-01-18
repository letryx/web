import createDOMPurify from 'dompurify';
import { JSDOM } from 'jsdom';

// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const theWindow =
  typeof window === 'undefined' ? (new JSDOM('').window as any) : window;
// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
const domPurify: createDOMPurify.DOMPurifyI = createDOMPurify(theWindow);
domPurify.addHook('afterSanitizeAttributes', (node) => {
  // remove negative margins
  const style = node.getAttribute('style') || '';
  const negMarginsRegex = /(margin-\w+)\s*:\s*-[\d.]*\s*\w*/gim;
  node.setAttribute('style', style.replace(negMarginsRegex, '$1: 4'));
  if (node.tagName === 'DIV') {
    if (node.getAttribute('align')?.toLowerCase() === 'justify') {
      const alignCenterRegex = /(.*)text-align\w*:\s*center\s*;?(.*)/gim;
      node.setAttribute(
        'style',
        node.getAttribute('style')?.replace(alignCenterRegex, '$1 $2') || ''
      );
    }
  }
});

export function sanitizeHtml(rawHtml: string | undefined): string {
  if (!domPurify || !rawHtml) {
    return '';
  }

  return domPurify.sanitize(rawHtml, {
    // KEEP_CONTENT: false,
    IN_PLACE: true,
  });
}
