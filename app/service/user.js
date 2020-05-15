'use strict';

const Service = require('egg').Service;
class UserService extends Service {
  // get
  async get(data) {
    const { ctx } = this;
    const result = await ctx.model.User.find(data).populate('user_group');
    if (result.length == 0) return 0
    return result[0];
  }

  // 添加用户信息
  async add(user_data) {
    const { ctx } = this;
    let user_group = await ctx.model.UserGroup.findOne({power_id: 0})
    console.log("user_group: ", user_group)
    if (user_group == null) return 0
    user_data.user_group = user_group
    // 加密
    user_data.password = ctx.app.cryptoHmac(user_data.password)
    const result = await ctx.model.User.create(user_data);
    return result;
  }

  // 检查密码与确认密码是否一样
  async check(data) {
    const { ctx } = this
    const result = await ctx.model.User.findOne(data);
    console.log("result: ", result)
  }

  /**
   * 
   * @param {Object} data # 登陆对象
   * @returns {Number}
   * 0 登陆成功 
   * 1 用户不存在
   * 2 账号或密码错误
   * 
   */
  async check_login(data) {
    const { ctx } = this
    let token = ''
    let user_data = await this.get({username: data.username})
    console.log('user_data: ', user_data)
    // 用户不存在
    if (user_data == 0) return {status: 1, msg: '用户不存在'}
    let password = ctx.app.cryptoHmac(data.password)
    // jwt加密
    token = await this.jwt_sign(user_data)
    if (user_data.username == data.username && user_data.password == password) {
      return {status: 0, authority: user_data.desc, token: token, msg: '登陆成功'}
    }
    return {status: 2, token: '', msg: '账号或密码错误'}
  }

  // 加密
  async jwt_sign(user_data) {
    const { app } = this
    const token = app.jwt.sign({
      id: user_data._id
    }, app.config.jwt.secret)
    return token
  }

  // 删除文档
  async del(data) {
    const { ctx } = this
    const result = await ctx.model.User.deleteMany(data);
    console.log("del result: ", result)
  }
}

module.exports = UserService;