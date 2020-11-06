import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1603703712228_8233';

  // add your egg config in here
  config.middleware = [];

  // add your special config in here
  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
  };

  config.security = {
    csrf: false
  }

  config.mongoose = {
    client: {
      url: 'mongodb://127.0.0.1/ts-demo',
      options: {
        useFindAndModify: false,
        useUnifiedTopology: true
      }
    }
  }

  config.console = {
    // local 环境下默认值均为 true，prod 环境下均为 false
    debug: true,
    error: true
  }

  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig,
  };
};
