const findSalesmanInfo = require('../../config').findSalesmanInfo;

const updateSalesman = require('../../config').updateSalesman;


var authorization;



Page({
  data: {
   
        phone:"",
        city:"",
        date: "1990-09-01",

        accounts: ["男", "女"],
        accountIndex: 0,

        lb: ["政府客户", "企业客户", "个人客户"],
        lbIndex: 0,

        hy: ["软件系统", "电子设备","工程类","服务类","其它"],
        hyIndex: 0,

        gw: ["总经理", "销售副总", "销售总监", "销售经理", "销售助理", "技术支持"],
        gwIndex: 0,

        
        sj: ["半年以内", "1年","2-3年","4-5年","6-9年","10年以上"],
        sjIndex: 0,


        zx: ["1万以下", "1-5万","6-10万","11-20万","21-30万","30万以上"],
        zxIndex: 0,

        zd: ["10万以下", "11-30万","31-50万","51-100万","101-200万","200万以上"],
        zdIndex: 0,

        zk: ["一周", "半个月","一个月","三个月","半年","一年及以上"],
        zkIndex: 0,

        zc: ["一个月", "三个月","半年","一年","两年","两年及以上"],
        zcIndex: 0,
  },
    onLoad: function (options) {
        var that = this;
        
        authorization = options.wx_id;
        console.log("接收到的参数是wx_id:", authorization);
         


        wx.request({
            url: findSalesmanInfo,
            
            data: {
                 authorization: authorization,
            },
            
            success:function(res){

             if(res.data.state == 200){
                var grxx =  res.data.data;
                
                
                
                console.log("aaaa:",that.data.accounts.indexOf(grxx.gender));
                var xb = parseInt(grxx.gender)-1;
                that.setData({
                    
                    phone:grxx.phone,
                    city:grxx.city,
                    accountIndex:xb,
                    date:grxx.birthday,
                    lbIndex:that.data.lb.indexOf(grxx.saleClass),
                    hyIndex:that.data.hy.indexOf(grxx.saleIndustry),
                    gwIndex:that.data.gw.indexOf(grxx.salePost),
                    sjIndex:that.data.sj.indexOf(grxx.employmentTime),
                    zxIndex:that.data.zx.indexOf(grxx.minOrderPrice),
                    zdIndex:that.data.zd.indexOf(grxx.maxOrderPrice),
                    zkIndex:that.data.zk.indexOf(grxx.fastOrderPrice),
                    zcIndex:that.data.zc.indexOf(grxx.longOrderPrice),

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
    bindAccountChange: function(e) {
        console.log('picker account 发生选择改变，携带值为', e.detail.value);
        var xbsz = parseInt(e.detail.value) + 1;
        var xinxi = {gender : xbsz,authorization: authorization};
        this.baocu(xinxi)

        this.setData({
            accountIndex: e.detail.value
        })
    },
    bindDateChange: function (e) {

       
        var xinxi = {birthday : e.detail.value,authorization: authorization};

        this.baocu(xinxi)

        this.setData({
            date: e.detail.value
        })
    },
    bindcs: function(e) {

        console.log('picker account 发生选择改变，携带值为', e.detail.value);
        this.setData({
            csIndex: e.detail.value
        })
    },


    lbbind: function(e) {
        console.log('picker account 发生选择改变，携带值为', this.data.lb[e.detail.value]);

        var xinxi = {saleClass : this.data.lb[e.detail.value],authorization: authorization};
        console.log('123213', xinxi);
        this.baocu(xinxi)


        this.setData({
            lbIndex: e.detail.value
        })
    },
    hybind: function(e) {
        console.log('picker account 发生选择改变，携带值为', e.detail.value);

        var xinxi = {saleIndustry : this.data.hy[e.detail.value],authorization: authorization};
        console.log('123213', xinxi);
        this.baocu(xinxi)


        this.setData({
            hyIndex: e.detail.value
        })
    },
    gwbind: function(e) {
        console.log('picker account 发生选择改变，携带值为', e.detail.value);

        var xinxi = {salePost : this.data.gw[e.detail.value],authorization: authorization};
        console.log('123213', xinxi);
        this.baocu(xinxi)

        this.setData({
            gwIndex: e.detail.value
        })
    },
    sjbind: function(e) {
        console.log('picker account 发生选择改变，携带值为', e.detail.value);
        
        var xinxi = {employmentTime : this.data.sj[e.detail.value],authorization: authorization};
        console.log('123213', xinxi);
        this.baocu(xinxi)

        this.setData({
            sjIndex: e.detail.value
        })
    },
    zxbind: function(e) {
        console.log('picker account 发生选择改变，携带值为', e.detail.value);

        var xinxi = {minOrderPrice : this.data.zx[e.detail.value],authorization: authorization};
        console.log('123213', xinxi);
        this.baocu(xinxi)

        this.setData({
            zxIndex: e.detail.value
        })
    },
    zdbind: function(e) {
        console.log('picker account 发生选择改变，携带值为', e.detail.value);

        var xinxi = {maxOrderPrice : this.data.zd[e.detail.value],authorization: authorization};
        console.log('123213', xinxi);
        this.baocu(xinxi)


        this.setData({
            zdIndex: e.detail.value
        })
    },
    zkbind: function(e) {
        console.log('picker account 发生选择改变，携带值为', e.detail.value);
        var xinxi = {fastOrderPrice : this.data.zk[e.detail.value],authorization: authorization};
        console.log('123213', xinxi);
        this.baocu(xinxi)
        this.setData({
            zkIndex: e.detail.value
        })
    },
    zcbind: function(e) {
        console.log('picker account 发生选择改变，携带值为', e.detail.value);
        var xinxi = {longOrderPrice : this.data.zc[e.detail.value],authorization: authorization};
        console.log('123213', xinxi);
        this.baocu(xinxi)
        this.setData({
            zcIndex: e.detail.value
        })
    },
    csInput:function(e) {
        console.log('picker account 发生选择改变，携带值为', e.detail.value);
        var xinxi = {city : e.detail.value,authorization: authorization};
        console.log('123213', xinxi);
        this.baocu(xinxi)
       
    },
    sjInput:function(e) {
        console.log('picker account 发生选择改变，携带值为', e.detail.value);
        var xinxi = {phone : e.detail.value,authorization: authorization};
        console.log('123213', xinxi);
        this.baocu(xinxi)
       
    },
    baocu: function(xinxi){
        wx.request({
            url: updateSalesman,

            data:xinxi,
            
            
            
            success:function(res){

                
             
                 if(res.data.msg == "成功"){
                
                  console.log(res.data.msg);
  
                 }else{
                      wx.showToast({
                        icon: 'loading',
                        title: res.data.msg,
                      });

                  console.log(res.data.msg)
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
})
