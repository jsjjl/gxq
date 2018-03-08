const app = getApp();

const loginByWX = require('../../config').loginByWX;
const findSalesmanInfo = require('../../config').findSalesmanInfo;
const findTaskList = require('../../config').findTaskList;


var code; 
var nickName;
var avatarUrl;
var zhuce;
var wx_id;
var shengfeng;
var dengji;
var sfzc = 0;
Page({
  data: {
    myou: false,
    you: false,
    wu_rw: false,
    sf: '未知',
    dj: 'T0',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    list:[]
  },
  onLoad: function () {

    var that = this;

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
 
  //点击进去我的页面
  gotomy: function() {

    if(sfzc == 1){
    wx.navigateTo({
      url: '../my/my?wx_id='+ wx_id + '&nickName=' + nickName + '&avatarUrl=' + avatarUrl +  '&shengfeng=' + shengfeng + '&dengji=' + dengji 
    })
  }


  },
  
  //点击进入注册页面
  zhuce: function() {
    wx.navigateTo({
      url: '../home/home?wx_id='+ wx_id
    })
  },

//获取用户信息
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
                        url: loginByWX,
                        
                        data: {
                          code: code,
                          nickName:nickName,
                          avatarUrl:avatarUrl
                        },
                        
                        success:function(res){

                              console.log("获取id的url：" + loginByWX + '?code=' + code+ '&nickName=' + nickName + '&avatarUrl=' + avatarUrl);

                              wx_id = res.data.data.token;
                              console.log("后台给出的id：" + wx_id);
                              shengfeng = res.data.data.post;
                              dengji = res.data.data.level;
                              that.setData({
                                         sf: res.data.data.post,
                                         dj: res.data.data.level
                              })

                              wx.request({
                                url: findSalesmanInfo,
                                
                                data: {
                                  authorization: wx_id
                                },
                                
                                success:function(res){
                                  console.log(res.data);
                                     console.log("是否有数值findSalesmanInfo：",res.data.data.longOrderPrice);

                                     if(res.data.data.longOrderPrice == undefined){
                                      

                                      sfzc = 0;
                                      that.setData({
                                        myou: true,
                                        you: false
                                      })


                                      
                                     }else{

                                      sfzc = 1;
                                      that.setData({
                                        myou: false,
                                        you: true,
                                      })


                                      wx.request({
                                        url: findTaskList,
                                        
                                        data: {
                                          authorization: wx_id
                                        },
                                        
                                        success:function(res){ 
                                          console.log("是否有任务findTaskList:",res.data.data);

                                          var date = res.data.data;
                                          
                                          if(res.data.data == undefined){
                                            that.setData({
                                              wu_rw: true
                                            })
                                            
                                          }else{
                                            that.setData({
                                              　　　　　 list: date
                                            })

                                          }

                                          

                                          },
                                          fail:function(res){
                                            wx.showToast({
                                              icon: 'loading',
                                              title: res.data.msg,
                                            });
                                              console.log(res.data.msg)
                                        }
                                      });


                                    



                                     }
                                      
        
                                  },
                                  fail:function(res){
                                    wx.showToast({
                                      icon: 'loading',
                                      title: res.data.msg,
                                    });
                                      console.log(res.data.msg)
                                }
                              });




                          },
                          fail:function(res){
                            wx.showToast({
                              icon: 'loading',
                              title: res.data.msg,
                            });
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

  },
  rwxq: function(e){
    var $data = e.currentTarget.dataset;
    console.log($data.id);
    console.log(wx_id);
    wx.navigateTo({
      url: '../rwxq/rwxq?taskId='+ $data.id + "&wx_id=" + wx_id //传参跳转即可
    })


  }  


})
