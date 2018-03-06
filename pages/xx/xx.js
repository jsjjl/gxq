var app = getApp();
var util = require("../../utils/util.js");

const SendMessage = require('../../config').SendMessage;
const findMessageList = require('../../config').findMessageList;


var message = '';
var text = '';
var user = {};
var length;
var zx_info_id;
var openid_talk;
Page({
  data: {
    news: '',
    scrollTop: 0,
    message: '',
    text: text,
    centendata: [],
    nickName: '',
    avatarUrl: '',
    news_input_val:'',
    tabdata: ''
  },
  bindChange: function (e) {
    message = e.detail.value
  },
  //事件处理函数
  add: function (e) {
   
    var that = this


    wx.request({
        url: SendMessage,
        
        data: {
            authorization: "7CEA7FE925694779AE2C9A15B3B8AA86",
            content: message
        },
        
        success:function(res){ 
                if (res.data.state == 0) {
                    var a = true;
                    that.loaddata(a);
                    that.setData({
                      news_input_val:''
                    })
                    message = ''
                  } else {
                    wx.showToast({
                      title: res.data.msg,
                    })
                  }

          },
          fail:function(res){
              wx.showToast({
               title: '网络错误,请稍后再试',
              })
        }
      });
       


      
    // var data = {
    //   program_id: app.jtappid,
    //   openid: app._openid,
    //   zx_info_id: zx_info_id,
    //   content: message,
    //   openid_talk:openid_talk
    // }
    // util.request('/session_submit', 'post', data, '正在加载数据', function (res) {
    //   if (res.data.state == 1) {
    //     var a = true;
    //     that.loaddata(a);
    //     that.setData({
    //       news_input_val:''
    //     })
    //     message = ''
    //   } else {
    //     wx.showToast({
    //       title: '网络错误,请稍后',
    //     })
    //   }
    // })
  },

  onLoad: function (options) {
    // openid_talk = options.openid_talk;
    // zx_info_id = options.zx_info_id;
    // console.log(openid_talk)
    //调用应用实例的方法获取全局数据
    // this.setData({
    //   zx_info_id: zx_info_id,
    //   nickName: app.nickName,
    //   avatarUrl: app.avatarUrl,
    // });
    this.loaddata()
  },
  // 页面加载
  loaddata: function (a) {
    var that = this;
    var is_img = true;



    
    wx.request({
        url: findMessageList,
        
        data: {
            authorization: "7CEA7FE925694779AE2C9A15B3B8AA86",
        },
        
        success:function(res){ 
                if (res.data.state == 0) {
                    

                    var date = res.data.data[0].contentVo;

                    that.setData({

                      　　　　　 centendata: date
                       
                    })
                    console.log("12323:",date);

                   
                  } else {
                    wx.showToast({
                      title: res.data.msg,
                    })
                  }

          },
          fail:function(res){
              wx.showToast({
               title: '网络错误,请稍后再试',
              })
        }
      });

    // util.request('/session_page', 'post', data, '', function (res) {
    //   if (res.data.k1) {
    //     res.data.k1.time_agree = util.js_date_time(res.data.k1.time_agree)
    //   }
    //   for (var i = 0; i < res.data.k2.length; i++) {
    //     res.data.k2[i].time = util.js_date_time(res.data.k2[i].time)
    //     var n = res.data.k2[i].content.charAt(res.data.k2[i].content.length - 1);
    //     switch (n) {
    //       case 'g':
    //         res.data.k2[i].is_img = is_img
    //         break;
    //       default:
    //     }
    //   }
    //   that.setData({
    //     tabdata: res.data.k1,
    //     centendata: res.data.k2.reverse()
    //   })
    //   wx.setNavigationBarTitle({ title: that.data.tabdata.nickname });
    //   if (a) {
    //     setTimeout(function () {
    //         that.bottom()
    //     }, 500);
    //   }
    // })
    // setTimeout(function () {
    //   if (that.data.centendata.length != length) {
    //     length = that.data.centendata.length
    //   }
    //   that.loaddata()
    // }, 3000);
    
  },
  // 获取hei的id节点然后屏幕焦点调转到这个节点
  bottom: function () {
    var query = wx.createSelectorQuery()
    query.select('#hei').boundingClientRect()
    query.selectViewport().scrollOffset()
    query.exec(function (res) {
      wx.pageScrollTo({
        scrollTop: res[0].bottom  // #the-id节点的下边界坐标
      })
      res[1].scrollTop // 显示区域的竖直滚动位置
    })
  },
  // 选择图片并把图片保存  
  
//   upimg1: function () {
//     var that = this;
//     wx.chooseImage({
//       success: function (res) {
//         var data = {
//           program_id: app.jtappid,
//           openid: app._openid,
//           zx_info_id: zx_info_id,
//         }
//         var tempFilePaths = res.tempFilePaths
//         wx.uploadFile({
//           url: '/session_submit', //提交信息至后台
//           filePath: tempFilePaths[0],
//           name: 'content', //文件对应的参数名字(key)
//           formData: data,  //其它的表单信息
//           success: function (res) {
//             var a = true;
//             that.loaddata(a);
//             message = ''
//           }
//         })
//       }
//     })
//   }


})