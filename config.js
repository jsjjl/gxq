// config.js
/**
 * 小程序后端接口配置文件
 */
var host = "http://101.132.105.206:18080/yj_gxq/WX/"  //域名要在小程序的管理平台配置好，如果出现调用时报错，无效的域名，可在微信开发工具左边点项目-》配置信息-》看一下配置的域名【request合法域名】有没有刷新下来，没有的话就点下面的刷新

var config = {

  // 下面的地址配合 Server 工作
  host,

  //获取id
  loginByWX: `${host}/loginByWX`,
  //销售员详情接口
  findSalesmanInfo: `${host}/findSalesmanInfo`,
  //修改销售员信息接口
  updateSalesman: `${host}/updateSalesman`,
  //任务列表
  findTaskList: `${host}/findTaskList`,
  //任务详情接口
  findTaskDetail: `${host}/findTaskDetail`,
  //产品目录价详情
  findProductDetail: `${host}/findProductDetail`,
  //Pass客户列表
  findPassClientList: `${host}/findPassClientList`,
  //佣金记录列表
  findSalePayoffList: `${host}/findSalePayoffList`,
  //发送消息
  SendMessage: `${host}/SendMessage`,
  //消息列表
  findMessageList: `${host}/findMessageList`,
  
  
  
  

};
  //对外把对象config返回
module.exports = config