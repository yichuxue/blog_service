'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }

  // jwt
  jwt: {
    enable: true,
    package: "egg-jwt"
  },
  
  // cors
  cors: {
    enable: true,
    package: 'egg-cors',
  },

  // mongoose
  mongoose: {
    enable: true,
    package: 'egg-mongoose',
  },
};
