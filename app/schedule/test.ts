'use strict'

import { Application } from 'egg'

module.exports = (app: Application) => {
  return {
    schedule: {
      // cron: '0 0 1 * * *', // 每天凌晨1点
      interval: '10m', // 每十分钟执行一次
      type: 'worker',
      disable: false
    },
    async task (ctx) {
      console.log('------------')
    }
  }
}
