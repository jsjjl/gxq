var authorization;
const findSalePayoffList = require('../../config').findSalePayoffList;


Page({
  data: {
    page: 1,
    pageSize: 10,
    hasMoreData: true,
    contentlist: [],
    jiazai:true,
    wu:false
  },
  onLoad: function (options) {
    var that = this;
    authorization = options.wx_id;
    console.log("接收到的参数是wx_id:", authorization); 
    that.getMusicInfo('正在加载数据...')
   
  },
  getMusicInfo: function (message) {
    var that = this
 

    wx.request({
        url: findSalePayoffList,
        
        data: {
            authorization: authorization,
            pageNum: that.data.page,
            pageSize: that.data.pageSize
        },
        

        

        success:function(res){ 
          console.log(findSalePayoffList+"?authorization="+authorization+"&pageNum="+that.data.page+"&pageSize="+that.data.pageSize);
          console.log("shuju:",res.data.data);
         
          if(res.data.data == undefined){

            that.setData({
              wu: true,
              jiazai: false
            })

          }else{

            console.log(res)
            var contentlistTem = that.data.contentlist
            if (res.data.state == 200) {
              if (that.data.page == 1) {
                contentlistTem = []
              }
              
              
              console.log("wer:",res.data.data)
              
              var contentlist = res.data.data;
              
  
              if (contentlist.length < that.data.pageSize) {
                that.setData({
                  contentlist: contentlistTem.concat(contentlist),
                  hasMoreData: false
                })
              } else {
                that.setData({
                  contentlist: contentlistTem.concat(contentlist),
                  hasMoreData: true,
                  page: that.data.page + 1
                })
              }
            } else {
              wx.showToast({
                icon: 'loading',
                title: res.data.msg,
              })
            }


          }

          
         


        },
          fail:function(res){
            wx.showToast({
                title: '加载数据失败',
              })
        }
      });
       


    

  },
  /**
   * 
 * 页面相关事件处理函数--监听用户下拉动作
 */
onPullDownRefresh: function () {
    this.data.page = 1
    this.getMusicInfo('正在刷新数据');
    wx.showToast({
        icon: 'loading',  //图标，支持"success"、"loading"  
        title: '正在刷新数据',
        duration: 2700, 
    //   image: '../image/img.png',  //自定义图标的本地路径，image 的优先级高于 icon  
    //   duration: 2000000, //提示的延迟时间，单位毫秒，默认：1500  
    //   mask: false,  //是否显示透明蒙层，防止触摸穿透，默认：false  
    //   success: function () { }, //接口调用成功的回调函数  
    //   fail: function () { },  //接口调用失败的回调函数  
    //   complete: function () { } //接口调用结束的回调函数  

      })
},

/**
 * 页面上拉触底事件的处理函数
 */
onReachBottom: function () {
    if (this.data.hasMoreData) {
        this.getMusicInfo('加载更多数据')
      } else {
          this.setData({
            jiazai:false,
          });

        wx.showToast({
          title: '没有更多数据',
        })
      }
},


})
