'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async register() {
    const { ctx, service } = this;
    const req_data = ctx.request.body
    ctx.body = {msg: '', status: ''}

    if (req_data.password != req_data.confirm) {
      ctx.body.msg = '密码与确认密码不相同'
      ctx.body.status = 'error'
      return
    }

    // search user
    let get_user_result = await service.user.get({username: req_data.username})
    if (get_user_result != 0) {
      ctx.body.msg = '账号已经存在'
      ctx.body.status = 'error'
      return
    }

    // add user
    let result = await service.user.add({...req_data})
    if (result == 0) return ctx.body = {msg: '注册失败', status: 'error'}
    ctx.body.msg = '注册成功'
    ctx.body.status = 'ok'
  }
  
  async login() {
    const { ctx, service } = this;
    const req_data = ctx.request.body
    ctx.body = {msg: '', status: '', type: 'account', authority: ''}

    let {status, authority, token, msg} = await service.user.check_login(req_data)
    console.log("login result: ", status)
    console.log("authority: ", authority)
    if (!status) {
      ctx.body.status = 'ok'
      ctx.body.msg = msg
      ctx.body.token = token
      ctx.body.currentAuthority = authority
      return
    }
    
    ctx.body.status = 'error'
    ctx.body.msg = msg
  }

  async info() {
    const { ctx } = this;
    console.log("user info")
    ctx.body = {
      msg: 'get',
      status: 'ok',
      name: 'lex'
    }
  }
}

module.exports = UserController