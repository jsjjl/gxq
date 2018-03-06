const findProductDetail = require('../../config').findProductDetail;


var authorization,
    taskId,
    type = 1;

Page({
    data: {
        list:[]
    },
    onLoad: function (options) {
        var that = this;
        
        authorization = options.wx_id;
        console.log("接收到的参数是wx_id:", authorization); 
        taskId = options.taskId;
        console.log("接收到的参数是taskId:", taskId); 


        wx.request({
            url: findProductDetail,
            
            data: {
                authorization: authorization,
                taskId: taskId
            },
            
            success:function(res){ 
              console.log(res.data.productList);
              that.setData({
                  list:res.data.productList
              })

              },
              fail:function(res){
                  console.log(res.data.msg)
            }
          });
           


    }
    
});