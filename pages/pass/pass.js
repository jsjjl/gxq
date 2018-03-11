const findPassClientList = require('../../config').findPassClientList;


var authorization,
    taskId,
    pageSize = 500,
    pageNum = 1;

Page({
    data: {
        list:[],
        wu_pass: false
    },
    onLoad: function (options) {
        var that = this;
        
        authorization = options.wx_id;
        console.log("接收到的参数是wx_id:", authorization); 
        taskId = options.taskId;
        console.log("接收到的参数是taskId:", taskId); 


        wx.request({
            url: findPassClientList,
            
            data: {
                authorization: authorization,
                taskId: taskId,
                pageSize: pageSize,
                pageNum: pageNum
            },
            
            success:function(res){ 

                     
                if(res.data.state == 200){
              

              console.log(res.data.data);
              if(res.data.data == undefined){

                that.setData({
                    wu_pass: true
                })

              }else{
                that.setData({
                    list:res.data.data
                })
              }

            }else{
                wx.showToast({
                  icon: 'loading',
                  title: res.data.msg,
                })
                
               }
              

              },
              fail:function(res){
                  console.log(res.data.msg)
            }
          });
           


    }
    
});