'use strict';

const Controller = require('egg').Controller;

class UserGroupController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'user_group index';
  }

  // 新建
  async new() {
    const { ctx, service } = this;
    const req_data = ctx.request.body
    ctx.body = {status: 'error', msg: '新建失败'}

    // 验证上传数据
    if (!req_data.power_id || typeof req_data.power_id != Number || !req_data.desc || typeof req_data.desc != String) return
    

    
  }
}

module.exports = UserGroupController;