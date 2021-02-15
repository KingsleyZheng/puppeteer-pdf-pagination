const Service = require('egg').Service;

const path = require('path');
const fs = require('fs');
const resolve = file => path.resolve(__dirname, file);
const { createBundleRenderer } = require('vue-server-renderer');
const print_bundle = require('../../fe/dist/vue-ssr-server-bundle.json');
const print_clientManifest = require('../../fe/dist/vue-ssr-client-manifest.json');
const print_template = fs.readFileSync(resolve('../../fe/index.temp.html'), 'utf-8');

const FE_BUILD = {
  PRINT: {
    SERVER: print_bundle,
    CLIENT: print_clientManifest,
    TEMPLATE: print_template,
  },
};

class SSRService extends Service {
  async index(params = {}) {
    // 得到一个渲染器实例
    const renderer = createBundleRenderer(FE_BUILD.PRINT.SERVER, {
      runInNewContext: false,
      template: FE_BUILD.PRINT.TEMPLATE,
      clientManifest: FE_BUILD.PRINT.CLIENT,
    });
    // url是vue路由路径，传入根目录即可
    const htmlString = await renderer.renderToString({
      url: '',
      params,
    });

    return { htmlString };
  }

}

module.exports = SSRService;
