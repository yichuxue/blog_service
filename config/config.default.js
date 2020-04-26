/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1586071883355_2281';

  // add your middleware config here
  config.middleware = [];

  // add jwt
  config.jwt = {
    secret: "yichuxue"//自定义 token 的加密条件字符串
  };

  // add csrf
  config.security = {
    csrf: {
      enable: false,
      ignoreJSON: true
    },
    domainWhiteList: ['http://localhost:8000'],//允许访问接口的白名单
  };

  // add cors
  config.cors = {
    origin: ['http://localhost:8000'],
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
    credentials: true,
  };

  // add mongoose
  config.mongoose = {
    url: 'mongodb://localhost:27017/blog',
    options: {
      useUnifiedTopology: true,
      useCreateIndex: true
    },
  };

  // add crypto
  config.crypto = {
    secret: 'yichuxue'
  }

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
