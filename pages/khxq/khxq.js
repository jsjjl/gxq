const findProductDetail = require('../../config').findProductDetail;


var authorization,
    taskId,
    type = 1;

Page({
    data: {
    },
    onLoad: function (options) {
        var that = this;
        
        authorization = options.wx_id;
        console.log("接收到的参数是wx_id:", authorization); 
        taskId = options.taskId;
        console.log("接收到的参数是taskId:", taskId); 
    }
    
});