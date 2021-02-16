const Service = require('egg').Service;

const path = require('path');
const puppeteer = require('puppeteer-core');
const os = require('os');


class PuppeteerService extends Service {
  /**
   * @param {String} htmlFileName - 要转换的htmlFile路径
   */
  async dealA4(htmlFileName) {
    const res = await this.generateA4(htmlFileName);
    const pdfBuffer = res.pdfBuffer;

    return pdfBuffer;
  }
  async generateA4(htmlFileName) {
    if (!htmlFileName) return {};

    // 判断系统版本，通过不同系统用不同路径打开浏览器
    const osType = os.type();
    let chromePath = '';
    if (osType === 'Windows_NT') {
      chromePath = path.join(__dirname, '../../chrome-win/chrome.exe');
    } else if (osType === 'Linux') {
      chromePath = '/usr/bin/chromium-browser';
    }
    const browser = await puppeteer.launch({
      defaultViewport: {
        width: 1800,
        height: 1040,
      },
      executablePath: chromePath,
      headless: true,
      args: [
        '--window-size=1920,1040',
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '–-disable-gpu',
        '–-disable-dev-shm-usage',
        '–-no-first-run',
        '–-no-zygote',
        '–-single-process',
      ],
    });

    const page = await browser.newPage();
    const htmlUrl = `http://127.0.0.1:80/${htmlFileName}`;
    // console.log(htmlUrl);
    const gotoPromise = new Promise(resolve => {
      page.goto(htmlUrl, {
        waitUntil: 'load',
        timeout: 10000,
      }).then(() => {
        resolve(true);
      }).catch(err => {
        console.log(err);
        resolve(false);
      });
    });
    const gotoRes = await gotoPromise;

    if (!gotoRes) {
      await browser.close();
      return {};
    }
    await page.emulateMediaType('print');


    // 3、生成pdf
    const pdfBuffer = await page.pdf({
      format: 'A4',
      scale: 1,
      margin: {
        top: '0',
        bottom: '0',
        left: '0',
        right: '0',
      },
      landscape: false,
      displayHeaderFooter: false,
    });


    await browser.close();

    return {
      pdfBuffer,
    };
  }
}


module.exports = PuppeteerService;
