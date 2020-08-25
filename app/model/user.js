'use strict';

module.exports = app => {
  const mongoose = app.mongoose;
  // mongoose.set('useCreateIndex', true)
  const Schema = mongoose.Schema;
  const UserSchema = new Schema({
    username: {type: String, unique: true,required: true},
    password: {type: String, required: true},
    sex: {type: Number, default: 0},
    github: {type: String, default: ''},
    description: {type: String, default: ''},
    avatar: {type: String, default: '//gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png'},
    register_time: {type: String, default: String(Date())},
    last_login_time: {type: String, default: String(Date())},
    lock: {type: Number, default: 0},
    user_group: {type: mongoose.SchemaTypes.ObjectId, ref: 'UserGroup'},
  });
  return mongoose.model('User', UserSchema, 'user');
};
