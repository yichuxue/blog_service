'use strict';

const Service = require('egg').Service;

class UserGroupService extends Service {
  // 创建
  async create(user_group) {
    const { ctx } = this
    let user_group = await this.get({power_id: user_group.user_group})
    // let result = ctx.model.user_group.create(user_group)
    // console.log('result: ', result)
  }

  // 查询
  async get(power_id) {
    const { ctx } = this
    let result = ctx.model.user_group.find(power_id)
    console.log("get result: ", result)
  }
}

module.exports = UserGroupService;