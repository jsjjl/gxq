// config.js
/**
 * 小程序后端接口配置文件
 */
var host = "https://www.easy-mock.com/mock/5a61aec341d8910ea886ec76/iope"  //域名要在小程序的管理平台配置好，如果出现调用时报错，无效的域名，可在微信开发工具左边点项目-》配置信息-》看一下配置的域名【request合法域名】有没有刷新下来，没有的话就点下面的刷新

var config = {

  // 下面的地址配合 Server 工作
  host,

  //配置
  home_config: `${host}/prizesList`,

};
  //对外把对象config返回
module.exports = config