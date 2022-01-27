'use strict';

const wkhtmltopdf = require('wkhtmltopdf');

module.exports.generate_pdf = async (event) => {
  const html = event.html || JSON.parse(event.body).html;
  return new Promise((resolve, reject) => {
    if (!html) {
      reject("missing 'html' attribute in body");
      return;
    }
    const chunks = [];
    // minimumFontSize is in pixels relative to page dpi
    wkhtmltopdf(html, { minimumFontSize: 24 }, (err, stream) => {
      if (err) {
        reject(`wkhtmltopdf error: ${err.message}`);
      }
      stream
        .on('data', (chunk) => {
          console.log(chunk);
          chunks.push(chunk);
        })
        .on('end', () => {
          resolve({
            statusCode: 200,
            headers: {
              'Content-Type': 'application/pdf',
            },
            body: Buffer.concat(chunks).toString('base64'),
            isBase64Encoded: true,
          });
        });
    });
  });
};
