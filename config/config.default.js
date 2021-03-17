/* eslint valid-jsdoc: "off" */

"use strict";

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = (appInfo) => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = (exports = {});

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + "_1615989249831_1826";

  // add your middleware config here
  config.middleware = [];

  config.logger = {
    appLogName: `${appInfo.name}-web.log`,
    coreLogName: "egg-web.log",
    agentLogName: "egg-agent.log",
    errorLogName: "common-error.log",
  };

  config.security = {
    csrf: {
      enable: false,
    },
  };

  config.cors = {
    origin: "*",
    allowMethods: "*",
    allowHeaders: "*",
    credentials: true,
  };

  config.multipart = {
    whitelist: [".doc", ".docx"],
  };

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
