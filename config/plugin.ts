import { EggPlugin } from 'egg';

const plugin: EggPlugin = {
  mongoose: {
    enable: true,
    package: 'egg-mongoose'
  },
  console: {
    enable: true,
    package: 'egg-console'
  }
};

export default plugin;
