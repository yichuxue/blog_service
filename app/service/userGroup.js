'use strict';

const Service = require('egg').Service;

class UserGroupService extends Service {
  // 创建
  async create(user_data) {
    const { ctx } = this
    let user_group = await this.get({power_id: user_data.power_id})
    if (user_group.length != 0) return 0
    ctx.model.UserGroup.create({
      power_id: user_data.power_id,
      desc: user_data.desc
    })
    return 1
    // let result = ctx.model.user_group.create(user_group)
    // console.log('result: ', result)
  }

  // 查询
  async get(power_id) {
    const { ctx } = this
    let result = await ctx.model.UserGroup.find(power_id)
    return result
  }

  // 更新
  async update(user_data) {
    const { ctx } = this
    let get_result = await this.get({power_id: user_data.id})
    // 数据不存在
    if (get_result.length == 0) return 0
    get_result = get_result[0]
    try {
      await ctx.model.UserGroup.updateOne({_id: get_result._id}, {power_id: user_data.power_id, desc: user_data.desc})
      return 1
    } catch (error) {
      return 2
    }
  }

  // 删除
  async delete(power_id) {
    const { ctx } = this
    let result = await ctx.model.UserGroup.findOneAndRemove({power_id})
    return result
  }
}

module.exports = UserGroupService;