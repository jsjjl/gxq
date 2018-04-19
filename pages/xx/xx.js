const SendMessage = require('../../config').SendMessage;
const findMessageList = require('../../config').findMessageList;


var message = '';
var text = '';
var user = {};
var length;
var zx_info_id;
var openid_talk;
var authorization;
var groupId;
var khid;
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
    tabdata: '',
    khbtxs: false
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
            authorization: authorization,
            content: message,
            groupId: groupId
        },
        
        success:function(res){ 
          console.log(res.data.state)
                if (res.data.state == 200) {
                    var a = true;
                    that.loaddata(a);
                    that.setData({
                      news_input_val:''
                    })
                    message = ''
                  } else {
                    wx.showToast({
                      icon: 'loading',
                      title: res.data.msg,
                    })
                  }

          },
          fail:function(res){
              wx.showToast({
                icon: 'loading',
               title: '网络错误,请稍后再试',
              })
        }
      });
       


 
  },

  onLoad: function (options) {

      
      authorization = options.wx_id;
        groupId = options.groupId;

      
      if(options.kh_id){
        this.setData({
          khbtxs:true
        })
        khid = options.kh_id;
      }
      console.log("接收到的参数是wx_id:", authorization);
      console.log("接收到的参数是groupId:", groupId);  

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



    console.log(findMessageList+"?authorization="+authorization+"&groupId="+groupId)
    wx.request({
        url: findMessageList,
      
        data: {
            authorization: authorization,
            groupId:groupId,
        },
        
        success:function(res){ 

          console.log("聊天列表123:",res.data);

                if (res.data.state == 200) {
                    
                  if(groupId == -1){
                    var date = res.data.data.contentVo;
                  }else{
                    var date = res.data.data;
                  }
                    that.setData({
                      　　　　　 centendata: date
                    });
                     if (!a) {  
                      setTimeout(function () {  
                          that.bottom()  
                      }, 500);  
                     }
                   
                    console.log("聊天列表:",date);

                   
                  } else {
                    wx.showToast({
                      icon: 'loading',
                      title: res.data.msg,
                    })
                  }

          },
          fail:function(res){
              wx.showToast({
                icon: 'loading',
               title: '网络错误,请稍后再试',
              })
        }
      });





    
  },
  // 获取hei的id节点然后屏幕焦点调转到这个节点
  bottom: function () {

    wx.createSelectorQuery().select('.historycon').boundingClientRect(function(rect){
      // 使页面滚动到底部
      console.log("使页面滚动到底部:"+rect.bottom)
      wx.pageScrollTo({
        scrollTop: rect.bottom
      })
    }).exec()

    // var query = wx.createSelectorQuery()
    // query.select('#hei').boundingClientRect()
    // query.selectViewport().scrollOffset()
    // query.exec(function (res) {
    //   wx.pageScrollTo({
    //     scrollTop: res.bottom  // #the-id节点的下边界坐标
    //   })
    //    // 显示区域的竖直滚动位置
    // })
  },


khbt: function(e){
      wx.navigateTo({
        url: '../khxq/khxq?clientId='+ khid + "&wx_id=" + authorization //传参跳转即可
      })
  
  
    } 

})