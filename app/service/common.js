const Service = require('egg').Service;
const { PDFDocument, rgb } = require('pdf-lib');
const fontkit = require('@pdf-lib/fontkit');
const path = require('path');
const fs = require('fs');
const motto = require('../../config/motto.json');
const SimSun = fs.readFileSync(
  path.resolve(__dirname, '../../fonts/sy-subset.otf')
);


class CommonService extends Service {

  getRandom(m, n) {
    const num = Math.floor(Math.random() * (m - n) + n);
    return num;
  }
  logTime(timeZero, timeName) {
    const now = new Date().getTime();
    console.log(`${timeName}: ${now - timeZero}`);
  }
  replaceTableTag(str) {
    return str
      .replace(/<table.+?>/g, '')
      .replace(/<\/table>/g, '')
      .replace(/<tr.+?>/g, '')
      .replace(/<\/tr>/g, '')
      .replace(/<td.+?>/g, '')
      .replace(/<\/td>/g, '')
      .replace(/<tbody.+?>/g, '')
      .replace(/<\/tbody>/g, '')
      .replace(/<thead.+?>/g, '')
      .replace(/<\/thead>/g, '')
      .replace(/<th.+?>/g, '')
      .replace(/<\/th>/g, '');
  }

  async editPdf(pdfBuffer) {
    const pdfDoc = await PDFDocument.load(pdfBuffer);
    pdfDoc.registerFontkit(fontkit);
    const customFont = await pdfDoc.embedFont(SimSun);
    const pages = pdfDoc.getPages();
    const firstPage = pages[0];
    const { width: pageWidth } = firstPage.getSize();
    pages.forEach((page, index) => {
      const text = motto[this.getRandom(motto.length, 0)];
      page.drawText(text, {
        x: 41,
        y: 23,
        size: 11,
        font: customFont,
        color: rgb(0.302, 0.302, 0.302),
      });
      page.drawText(`第${index + 1}页/共${pages.length}页`, {
        x: pageWidth - 100,
        y: 23,
        size: 11,
        font: customFont,
        color: rgb(0.302, 0.302, 0.302),
      });
      page.drawRectangle({
        x: 41,
        y: 45,
        width: pageWidth - 82,
        height: 0.6,
        borderColor: rgb(0.941, 0.941, 0.941),
        borderWidth: 0.6,
      });
    });
    const editedPdfBuffer = await pdfDoc.save();
    return editedPdfBuffer;
  }

}

module.exports = CommonService;
