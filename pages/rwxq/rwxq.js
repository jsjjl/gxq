const findTaskDetail = require('../../config').findTaskDetail;

var sliderWidth = 144; // 需要设置slider的宽度，用于计算中间位置
var authorization,
    taskId,
    type = 1;

Page({
    data: {
        tabs: ["任务详情", "客户CRM"],
        activeIndex: 0,
        sliderOffset: 0,
        sliderLeft: 0,
        basePrice:"",
        premiumPrice:"",
        averageUnitPrice:"",
        averagePeriod:"",
        averagePrice:"",
        clue:"",
        order:"",
        sale:"",
        tail:"",
        touch:"",
        cluelist:[],
        order:[],
        sale:[],
        tail:[],
        touch:[]

    },
    onLoad: function (options) {
        var that = this;
        
        authorization = options.wx_id;
        console.log("接收到的参数是wx_id:", authorization); 
        taskId = options.taskId;
        console.log("接收到的参数是taskId:", taskId); 

        wx.request({
            url: findTaskDetail,
            
            data: {
                authorization: authorization,
                taskId: taskId
            },
            
            success:function(res){ 
              console.log(res.data.task);

               wx.setNavigationBarTitle({
                title: res.data.task.taskName,
               });

               var cs = res.data.task;
                that.setData({
                basePrice:cs.basePrice,
                premiumPrice:cs.premiumPrice,
                averageUnitPrice:cs.averageUnitPrice,
                averagePeriod:cs.averagePeriod,
                averagePrice:cs.averagePrice
                });




             
              },
              fail:function(res){
                  console.log(res.data.msg)
            },complete:function(){
                wx.request({
                    url: findTaskDetail,
                    
                    data: {
                        authorization: authorization,
                        taskId: taskId,
                        type: type
                    },
                    
                    success:function(res){ 
                      console.log("crm:",res.data);
                      that.setData({
                        clue:res.data.clue.length,
                        order:res.data.order.length,
                        sale:res.data.sale.length,
                        tail:res.data.tail.length,
                        touch:res.data.touch.length,

                        cluelist:res.data.clue,
                        orderlist:res.data.order,
                        salelist:res.data.sale,
                        taillist:res.data.tail,
                        touchlist:res.data.touch
                      })
        

                      },
                      fail:function(res){
                          console.log(res.data.msg)
                    }
                  });
            }
          });
           

        
        
        
          wx.getSystemInfo({
            success: function(res) {
                that.setData({
                    sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 2,
                    sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex
                });
            }
        });
    },
    tabClick: function (e) {
        this.setData({
            sliderOffset: e.currentTarget.offsetLeft,
            activeIndex: e.currentTarget.id
        });
    },
    cpml: function() {
       
        wx.navigateTo({
          url: '../cpml/cpml?taskId='+taskId+"&wx_id="+authorization,
        })
    },
    gotokh: function(){
        wx.navigateTo({
            url: '../khxq/khxq?taskId='+taskId+"&wx_id="+authorization,
          })
    },
    pass: function(){
        wx.navigateTo({
            url: '../pass/pass?taskId='+taskId+"&wx_id="+authorization,
        })
    },
    xxbt: function(){
        wx.navigateTo({
            url: '../xx/xx?wx_id='+authorization,
        })
    },
    khxq_bt: function(e){
      var $data = e.currentTarget.dataset;
      console.log($data.id);
      wx.navigateTo({
        url: '../khxq/khxq?clientId='+ $data.id + "&wx_id=" + authorization //传参跳转即可
      })
  
  
    }  
    
});