//index.js
//获取应用实例
const app = getApp()

const updateSalesman = require('../../config').updateSalesman;
var code; 
var nickName;
var avatarUrl;

var authorization,
    saleName,
    salePost = "总经理",
    saleClass = "政府客户", //销售类型
    saleLevel = "", //销售等级
    saleIndustry = "软件系统", //销售行业
    headUrl,
    birthday = "1990-01-01", //出生日期
    gender = 2, //姓名
    phone = "", //
    city = "", //城市
    employmentTime = "半年以内", //就业时间
    minOrderPrice = "1万以下", //最小订单金额
    maxOrderPrice = "10万以下", //最大订单金额
    fastOrderPrice = "一周", //最快订单金额
    longOrderPrice = "一个月";

Page({

      data: {
        showView00: false,
        showView01: false,
        showView02: true,
        showView03: false,
        showView04: false,
        showView05: false,
        showView06: false,
        showView07: false,
        showView08: false,
        showView09: false,
        radioItems: [
          {name: '男', value: '1'},
          {name: '女', value: '2', checked: true}
        ],
        date: "1990-01-01",
        currentCity: '获取当前所在城市',
        radioItems_lb: [
          {name: '政府客户', value: '政府客户', checked: true},
          {name: '企业客户', value: '企业客户'},
          {name: '个人客户', value: '个人客户'}
        ],
        radioItems_hy: [
          {name: '软件系统', value: '软件系统', checked: true},
          {name: '电子设备', value: '电子设备'},
          {name: '工程类', value: '工程类'},
          {name: '服务类', value: '服务类'},
          {name: '其他', value: '其他'}
        ],
        radioItems_sj: [
          {name: '半年以内', value: '半年以内', checked: true},
          {name: '1年', value: '1年'},
          {name: '2-3年', value: '2-3年'},
          {name: '4-5年', value: '4-5年'},
          {name: '6-9年', value: '6-9年'},
          {name: '10年以上', value: '10年以上'}
        ],
        accounts: ["总经理", "销售副总", "销售总监", "销售经理", "销售助理", "技术支持"],
        accountIndex: 0,
        radioItems_zxjr: [
          {name: '1万以下', value: '1万以下', checked: true},
          {name: '1-5万', value: '1-5万'},
          {name: '6-10万', value: '6-10万'},
          {name: '11-20万', value: '11-20万'},
          {name: '21-30万', value: '21-30万'},
          {name: '30万以上', value: '30万以上'}
        ],
        radioItems_zdjr: [
          {name: '10万以下', value: '10万以下', checked: true},
          {name: '11-30万', value: '11-30万'},
          {name: '31-50万', value: '31-50万'},
          {name: '51-100万', value: '51-100万'},
          {name: '101-200万', value: '101-200万'},
          {name: '200万以上', value: '200万以上'}
        ],
        radioItems_zkdd: [
          {name: '一周', value: '一周', checked: true},
          {name: '半个月', value: '半个月'},
          {name: '一个月', value: '一个月'},
          {name: '三个月', value: '三个月'},
          {name: '半年', value: '半年'},
          {name: '一年及以上', value: '一年及以上'}
        ],
        radioItems_zcdd: [
          {name: '一个月', value: '一个月', checked: true},
          {name: '三个月', value: '三个月'},
          {name: '半年', value: '半年'},
          {name: '一年', value: '一年'},
          {name: '两年', value: '两年'},
          {name: '两年及以上', value: '两年及以上'}
        ],
      },
      goto00: function () {
        var that = this;
        that.setData({
            showView00: false,
            showView01: true,
        })
      },
      goto01: function () {
        var that = this;
        that.setData({
            showView01: false,
            showView02: true,
        })
      },
      goto02: function(){
        var that = this;
        that.setData({
            showView02: false,
            showView03: true,
        })
      },
      goto03: function(){
        var that = this;
        that.setData({
            showView03: false,
            showView04: true,
        })
      },
      goto04: function(){
        var that = this;
        that.setData({
            showView04: false,
            showView05: true,
        })
      },
      goto05: function(){
        var that = this;
        that.setData({
            showView05: false,
            showView06: true,
        })
      },
      goto06: function(){
        var that = this;
        that.setData({
            showView06: false,
            showView07: true,
        })
      },
      goto07: function(){
        var that = this;
        that.setData({
            showView07: false,
            showView08: true,
        })
      },
      fh_goto03: function(){
        var that = this;
        that.setData({
            showView03: false,
            showView02: true,

        })
      },
      fh_goto04: function(){
        var that = this;
        that.setData({
            showView04: false,
            showView03: true,

        })
      },
      fh_goto05: function(){
        var that = this;
        that.setData({
            showView05: false,
            showView04: true,

        })
      },
      fh_goto06: function(){
        var that = this;
        that.setData({
            showView06: false,
            showView05: true,

        })
      },
      fh_goto07: function(){
        var that = this;
        that.setData({
            showView07: false,
            showView06: true,

        })
      },


      radioChange: function (e) {
        gender = e.detail.value;
        console.log('性别：', gender);

        var radioItems = this.data.radioItems;
        for (var i = 0, len = radioItems.length; i < len; ++i) {
            radioItems[i].checked = radioItems[i].value == e.detail.value;
        }

        this.setData({
            radioItems: radioItems
        });
      },
      bindDateChange: function (e) {
          this.setData({
              date: e.detail.value,
          })
          birthday = e.detail.value;
          console.log('出生日期：', birthday);
          
      },
      hqcs: function(e) {
        this.getLocation();
        
      },
      radioChange_lb: function (e) {
        saleClass = e.detail.value;
        console.log('销售类别：', saleClass);

        var radioItems_lb = this.data.radioItems_lb;
        for (var i = 0, len = radioItems_lb.length; i < len; ++i) {
          radioItems_lb[i].checked = radioItems_lb[i].value == e.detail.value;
        }

        this.setData({
          radioItems_lb: radioItems_lb
        });
      },
      radioChange_hy: function (e) {
        saleIndustry = e.detail.value;
        console.log('销售行业：', saleIndustry);

        var radioItems_hy = this.data.radioItems_hy;
        for (var i = 0, len = radioItems_hy.length; i < len; ++i) {
          radioItems_hy[i].checked = radioItems_hy[i].value == e.detail.value;
        }

        this.setData({
          radioItems_hy: radioItems_hy
        });
      },
      radioChange_sj: function (e) {
        employmentTime = e.detail.value;
        console.log('就业时间：', employmentTime);

        var radioItems_sj = this.data.radioItems_sj;
        for (var i = 0, len = radioItems_sj.length; i < len; ++i) {
          radioItems_sj[i].checked = radioItems_sj[i].value == e.detail.value;
        }

        this.setData({
          radioItems_sj: radioItems_sj
        });
      },
      bindAccountChange: function(e) {
        salePost = this.data.accounts[e.detail.value];
        console.log('销售岗位：', salePost);

        this.setData({
            accountIndex: e.detail.value
        })
      },
      radioChange_zxjr: function (e) {

        minOrderPrice = e.detail.value;
        console.log('最小订单金额：', minOrderPrice);

        var radioItems_zxjr = this.data.radioItems_zxjr;
        for (var i = 0, len = radioItems_zxjr.length; i < len; ++i) {
          radioItems_zxjr[i].checked = radioItems_zxjr[i].value == e.detail.value;
        }

        this.setData({
          radioItems_zxjr: radioItems_zxjr
        });
      },
      radioChange_zdjr: function (e) {

        maxOrderPrice = e.detail.value;
        console.log('最大订单金额：', maxOrderPrice);

        console.log('radio发生change事件，携带value值为：', e.detail.value);

        var radioItems_zdjr = this.data.radioItems_zdjr;
        for (var i = 0, len = radioItems_zdjr.length; i < len; ++i) {
          radioItems_zdjr[i].checked = radioItems_zdjr[i].value == e.detail.value;
        }

        this.setData({
          radioItems_zdjr: radioItems_zdjr
        });
      },
      radioChange_zkdd: function (e) {

        fastOrderPrice = e.detail.value;
        console.log('最快订单金额：', fastOrderPrice);

        var radioItems_zkdd = this.data.radioItems_zkdd;
        for (var i = 0, len = radioItems_zkdd.length; i < len; ++i) {
          radioItems_zkdd[i].checked = radioItems_zkdd[i].value == e.detail.value;
        }

        this.setData({
          radioItems_zkdd: radioItems_zkdd
        });
      },
      radioChange_zcdd: function (e) {

        longOrderPrice = e.detail.value;
        console.log('最长订单金额：', longOrderPrice);

        var radioItems_zcdd = this.data.radioItems_zcdd;
        for (var i = 0, len = radioItems_zcdd.length; i < len; ++i) {
          radioItems_zcdd[i].checked = radioItems_zcdd[i].value == e.detail.value;
        }

        this.setData({
          radioItems_zcdd: radioItems_zcdd
        });
      },

      goto08: function(){
        // wx.setNavigationBarColor({
        //   backgroundColor: '#3286D4',
        //   frontColor:'#ffffff'
        //  });

//ajax提交信息
         wx.request({
          url: updateSalesman,
          
          data: {
            authorization: authorization,
            saleName: saleName,
            salePost: salePost,
            saleClass: saleClass,
            saleLevel: saleLevel,
            saleIndustry: saleIndustry,
            headUrl: headUrl,
            birthday: birthday,
            gender: gender,
            city: city,
            employmentTime: employmentTime,
            minOrderPrice: minOrderPrice,
            maxOrderPrice: maxOrderPrice,
            fastOrderPrice: fastOrderPrice,
            longOrderPrice: longOrderPrice
          },
          header:{'content-type': 'application/x-www-form-urlencoded;charset=utf-8',},
          success:function(res){
           
               if(res.data.state == 200){
              
                wx.navigateTo({
                  url: '../rw/rw'
                })


               }else{
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
              })
          }
        });
       

      },

      /**
       * 生命周期函数--监听页面加载
       */
      onLoad: function (options) { 
        authorization = options.wx_id;
        console.log("接收到的参数是wx_id:", authorization); 
        var that = this;
        //that.getHomeConfigMethod();

        //调用应用实例的方法获取全局数据  
        that.getUserInfo();
      },

      getLocation: function () {  
        var page = this  
        wx.getLocation({  
          type: 'wgs84',   //<span class="comment" style="margin: 0px; padding: 0px; border: none;">默认为 wgs84 返回 gps 坐标，gcj02 返回可用于 wx.openLocation 的坐标</span><span style="margin: 0px; padding: 0px; border: none;"> </span>  
          success: function (res) {  
            // success    
            var longitude = res.longitude  
            var latitude = res.latitude  
            page.loadCity(longitude, latitude)  
          }  
        })  
      },  
      loadCity: function (longitude, latitude) {  
        var page = this;
        page.setData({ currentCity: "定位中" });    
        wx.request({  
          url: 'https://api.map.baidu.com/geocoder/v2/?ak=qCRNVGumLaK3e4wyTi6za5UhX99KhjiO&location=' + latitude + ',' + longitude + '&output=json',  
          data: {},  
          header: {  
            'Content-Type': 'application/json'  
          },  
          success: function (res) {  
            // success    
            console.log(res);  
            city = res.data.result.addressComponent.city;  
            page.setData({ currentCity: city });
            console.log("城市：", city);
          },  
          fail: function () {  
            page.setData({ currentCity: "获取定位失败" });  
          },  
            
        })  
      },
      
      

      // getHomeConfigMethod:function(){
      //   var that = this;
      //   wx.request({
      //     url: home_config+"?token=toekn", 
      //     success:function(res){
      //         console.log(res.data.datas.user_openid);
      //     },
      //     fail:function(res){
      //         console.log(res.data.msg)
      //     }
      //  })
      // },

      
     
      getUserInfo:function(){ 
        var that = this;  

        wx.login({
          success: function(res) {
            if (res.code) {
                code = res.code
                console.log(code);
                wx.getUserInfo({  
                   success: function (res) {
                          saleName = res.userInfo.nickName;
                          headUrl = res.userInfo.avatarUrl;
                          console.log(saleName);
                          console.log(headUrl);
                        }  
                   });
                
                  

            } else {
              console.log('获取用户登录态失败！' + res.errMsg)
            }
          }
        });

   
          // //调用登录接口  
          // wx.login({  
          //   success: function () {  
          //     wx.getUserInfo({  
          //       success: function (res) {
          //         nickName = res.userInfo.nickName;
          //         avatarUrl = res.userInfo.avatarUrl;
          //         console.log(res.userInfo.code);
          //         console.log(nickName);
          //         console.log(avatarUrl);
          //       }  
          //     })  
          //   }  
          // }); 
          
          
      
      },  
      globalData:{  
        userInfo:null  
      }


  
 })

