const app = getApp();

const home_config = require('../../config').home_config;
var code; 
var nickName;
var avatarUrl;
Page({
  data: {
    sf: '未知',
    dj: 'T0',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  onLoad: function () {

    var that = this;
    //that.getHomeConfigMethod();

    //调用应用实例的方法获取全局数据  
    that.getUserInfo();
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  gotomy: function() {
    wx.navigateTo({
      url: '../my/my'
    })
  },
  getUserInfo:function(){ 
    var that = this;  

    wx.login({
      success: function(res) {
        if (res.code) {
            code = res.code
            console.log(code);
            wx.getUserInfo({  
               success: function (res) {
                      nickName = res.userInfo.nickName;
                      avatarUrl = res.userInfo.avatarUrl;
                      console.log(nickName);
                      console.log(avatarUrl);

                      wx.request({
                        url: 'http://101.132.105.206:18080/yj_gxq/WX/loginByWX',
                        
                        data: {
                          code: code,
                          nickName:nickName,
                          avatarUrl:avatarUrl
                        },
                        
                        success:function(res){
                          
                              console.log(res.data);
                          },
                          fail:function(res){
                              console.log(res.data.msg)
                        }
                      });

                    }  
               });
            
              

        } else {
          console.log('获取用户登录态失败！' + res.errMsg)
        }
      }
    });


      // //调用登录接口  
      // wx.login({  
      //   success: function () {  
      //     wx.getUserInfo({  
      //       success: function (res) {
      //         nickName = res.userInfo.nickName;
      //         avatarUrl = res.userInfo.avatarUrl;
      //         console.log(res.userInfo.code);
      //         console.log(nickName);
      //         console.log(avatarUrl);
      //       }  
      //     })  
      //   }  
      // }); 
      
      
  
  },  
  globalData:{  
    userInfo:null  
  }


})
