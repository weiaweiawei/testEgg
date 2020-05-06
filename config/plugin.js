'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
  ejs: {         //ejs配置
    enable: true,
    package: 'egg-view-ejs'
  }
};
