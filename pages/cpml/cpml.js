const findProductDetail = require('../../config').findProductDetail;


var authorization,
    taskId,
    type = 1;

Page({
    data: {
        list:[],
        wu_cpml: false
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

                if(res.data.state == 200){
               
                 
              console.log(res.data.productList);
              if(res.data.productList == ""){
                that.setData({
                    wu_cpml:true
                })
              }else{
                that.setData({
                    list:res.data.productList
                })
              }
            }
              else{
                wx.showToast({
                  icon: 'loading',
                  title: res.data.msg,
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
    
});