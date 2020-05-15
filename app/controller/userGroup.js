'use strict';

const Controller = require('egg').Controller;

class UserGroupController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'user_group index';
  }

  // 新建
  async create() {
    const { ctx, service } = this;
    const req_data = ctx.request.body
    ctx.body = {status: 'error', msg: 'data validation error'}
    console.log("req_data: ", req_data, req_data.desc)
    // 验证上传数据
    if (!req_data.power_id || !req_data.desc || req_data.power_id.length < 1 || req_data.desc.length < 1 || isNaN(req_data.power_id)) return
    // 创建用户组
    let result = await service.userGroup.create(req_data)
    console.log("result: ", result)
    if (!result) return ctx.body = {status: 'ok', msg: 'already exists'}
    ctx.body = {status: 'ok', msg: 'create success'}
  }

  // 更新
  async update() {
    const { ctx, service } = this;
    const req_data = ctx.request.body
    const power_id = ctx.params.id
    ctx.body = {status: 'error', msg: 'data validation error'}
    if (!power_id || power_id.length < 1 || isNaN(power_id)) return
    if (!req_data.desc || req_data.desc.length < 1) return
    req_data.id = power_id
    let result = await service.userGroup.update(req_data)
    if (result == 0) return ctx.body.msg = 'no data found'
    if (result == 2) return ctx.body.msg = 'update error'
    ctx.body = {status: 'ok', msg: 'update success'}
  }

  // 删除
  async destroy() {
    const { ctx, service } = this;
    const power_id = ctx.params.id
    ctx.body = {status: 'error', msg: 'data validation error'}
    // 数据验证
    if (!power_id || power_id.length < 1 || isNaN(power_id)) return
    let result = await service.userGroup.delete(power_id)
    if (result == null) return ctx.body.msg = 'no data found'
    ctx.body = {status: 'ok', msg: 'delete success'}
  }
}

module.exports = UserGroupController;