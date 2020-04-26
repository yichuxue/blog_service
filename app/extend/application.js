const jwt = require('jsonwebtoken');
const crypto = require('crypto');
module.exports = {
  get jwt() {
    return jwt;
  },

  cryptoHmac(param) {
    const hmac = crypto.createHash("sha256", this.config.crypto.secret);
    hmac.update(param);
    return hmac.digest("hex");
  },

  getTime() {
    let timezone = 8; //目标时区时间，东八区
    let offset_GMT = new Date().getTimezoneOffset(); // 本地时间和格林威治的时间差，单位为分钟
    let nowDate = new Date().getTime(); // 本地时间距 1970 年 1 月 1 日午夜（GMT 时间）之间的毫秒数
    let targetDate = new Date(nowDate + offset_GMT * 60 * 1000 + timezone * 60 * 60 * 1000);
    console.log("东8区现在是：" + targetDate);
    return targetDate
  }
}