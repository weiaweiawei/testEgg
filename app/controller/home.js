'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this; //当前上下文就是this
    ctx.body = 'hi, egg';
  }
  async news() {
    const { ctx } = this;
    ctx.body = '你好，世界';
  }

}

module.exports = HomeController;
