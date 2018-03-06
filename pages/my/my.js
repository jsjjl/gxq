var authorization;

Page({
  data: {
    nickName:'',
    avatarUrl:'',
    shengfeng:'',
    dengji:'',
  },
  onLoad: function (options) {
    var that = this;

    authorization = options.wx_id;
    console.log("接收到的参数是wx_id:", authorization); 
    that.setData({
      nickName:options.nickName,
      avatarUrl:options.avatarUrl,
      shengfeng:options.shengfeng,
      dengji:options.dengji
    });
  },
  gotomyedit: function() {
    wx.navigateTo({
      url: '../myedit/myedit?wx_id=' + authorization
    })
  },
  yjbt: function(){
    wx.navigateTo({
      url: '../yj/yj?wx_id=' + authorization
    })
  }
})
