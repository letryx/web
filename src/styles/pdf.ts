export const pdfMonoFontUrl =
  'http://fonts.googleapis.com/css?family=Space+Mono';

// "Courier 10 Pitch" is the fixed-width font installed on the lamdba image
export const pdfCss = `
  pre {
    font-family: "Space Mono", "Courier 10 Pitch", monospace !important;
    white-space: pre-wrap;
    width: 100%;
  }

  p, font, span, tr, td, table {
    background-color: transparent !important;
    line-height: 1.2;
  }

  img {
    height: auto !important;
    width: auto !important;
  }

  * {
    text-indent: 0 !important;
    max-width: 100% !important;
  }
`;
