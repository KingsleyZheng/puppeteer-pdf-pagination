const Controller = require('egg').Controller;

class PrintController extends Controller {
  async index() {
    const { ctx } = this;

    const requestBody = ctx.request.body;

    console.log('print:', requestBody);

    await ctx.service.print.generateA4(
      requestBody
    );

    ctx.status = 200;
    ctx.body = {
      message: '成功',
    };
    return;
  }
}

module.exports = PrintController;
