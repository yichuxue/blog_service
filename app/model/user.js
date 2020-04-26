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
    image_url: {type: String, default: ''},
    register_time: {type: String, default: String(Date())},
    last_login_time: {type: String, default: String(Date())},
    lock: {type: Number, default: 0},
    user_group: {type: mongoose.Types.ObjectId, ref: 'user_group'},
  });
  return mongoose.model('User', UserSchema, 'user');
};