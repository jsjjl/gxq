const findClientDetail = require('../../config').findClientDetail;


var authorization,
    taskId,
    clientId;

Page({
    data: {
        clientName:"",
        clientDemand:"",
        businessLimit:"",
        rival:"",
        clientSource:"",
        city:"",
        status:"",
        period:"",
        winRate:"",
        clientName:"",
        qk_clientName:"",
        qk_clientPhone:"",
        qk_clientPost:"",
        qk_clientLevel:"",
        qk_saleName:"",
        qk_salePhone:"",
        qk_salePost:"",
        qk_saleLevel:""
    },
    onLoad: function (options) {
        var that = this;
        
        authorization = options.wx_id;
        console.log("接收到的参数是wx_id:", authorization); 
        clientId = options.clientId;
        console.log("接收到的参数是taskId:", clientId);


        
        wx.request({
            url: findClientDetail,
            
            data: {
                authorization: authorization,
                clientId: clientId
            },
            
            success:function(res){ 

                if(res.data.state == 200){
              


              console.log("data:",res.data.clientInfo);
              
              var lxnr = ["线索","触及","跟踪","成单","售后"];
              var lx = lxnr[res.data.clientInfo.status];
              that.setData({
                clientName:res.data.clientInfo.clientName,
                clientDemand:res.data.clientInfo.clientDemand,
                businessLimit:res.data.clientInfo.businessLimit,
                rival:res.data.clientInfo.rival,
                clientSource:res.data.clientInfo.clientSource,
                city:res.data.clientInfo.city,
                status:lx,
                period:res.data.clientInfo.period,
                winRate:res.data.clientInfo.winRate,
                qk_clientName:res.data.clientInfo.clientJoin[0].clientName,
                qk_clientPhone:res.data.clientInfo.clientJoin[0].clientPhone,
                qk_clientPost:res.data.clientInfo.clientJoin[0].clientPost,
                qk_clientLevel:res.data.clientInfo.clientJoin[0].clientLevel,
                qk_saleName:res.data.clientInfo.clientJoin[0].saleName,
                qk_salePhone:res.data.clientInfo.clientJoin[0].salePhone,
                qk_salePost:res.data.clientInfo.clientJoin[0].salePost,
                qk_saleLevel:res.data.clientInfo.clientJoin[0].saleLevel
              })  }else{
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