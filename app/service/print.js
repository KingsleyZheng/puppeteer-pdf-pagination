const Service = require('egg').Service;

const path = require('path');
const moment = require('moment');
const fs = require('fs');

class PrintService extends Service {
  constructor(params) {
    super(params);
    this.BASE_DIR = 'fe';
  }

  /**
   * 生成a4纸的pdf
   * @param {object} params 参数
   */
  async generateA4(params = {}) {
    // 定义一些常量
    const paperTitle = '测试';

    const pdfFileName = `${paperTitle}_${moment(new Date()).format(
      'YYYYMMDDHHmmss'
    )}.pdf`;


    // 服务端渲染出html
    const { htmlString } = await this.ctx.service.ssr.index(params);
    const htmlFileName = `${this.BASE_DIR}/dist/${params.title}${moment(new Date()).format(
      'YYYYMMDDHHmmss'
    )}.html`;
    const htmlFile = path.resolve(__dirname, `../../${htmlFileName}`);
    fs.writeFileSync(htmlFile, htmlString);
    console.log('服务器渲染成功 ');

    // 生成pdf，删除HTML文件
    const pdfBuffer = await this.ctx.service.puppeteer.dealA4(htmlFileName);
    fs.unlinkSync(htmlFile);
    if (!pdfBuffer) {
      return '';
    }
    console.log('pdf成功 ');

    // 编辑pdf加上页脚
    const editedPdfBuffer = await this.ctx.service.common.editPdf(pdfBuffer);
    console.log('编辑成功 ');

    // 写到本地
    fs.writeFileSync(path.resolve(__dirname, `../../${pdfFileName}`), editedPdfBuffer, {
      encoding: 'binary',
    });
    return true;

  }
}

module.exports = PrintService;
