'use strict';

module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const UserGroupSchema = new Schema({
    power_id: {type: Number, unique: true, required: true},
    desc: {type: String, required: true},
  });
  return mongoose.model('UserGroup', UserGroupSchema, 'user_group');
};