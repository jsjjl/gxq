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

        lb: ["B2B", "B2C"],
        lbIndex: 0,

        hy: ["电子产品", "母婴产品","女性用品","商品行业","其他"],
        hyIndex: 0,

        gw: ["销售总监","销售经理", "销售助理"],
        gwIndex: 0,

        sj: ["1-2年", "2-3年","3-5年","5-6年","6-8年","10年及以上"],
        sjIndex: 0,

        zx: ["10万", "15万","20万","25万","30万","35万"],
        zxIndex: 0,

        zd: ["10万", "15万","20万","25万","30万","35万"],
        zdIndex: 0,

        zk: ["一周", "两周","一个月","二个月","三个月","三月及以上"],
        zkIndex: 0,

        zc: ["一周", "两周","一个月","二个月","三个月","三月及以上"],
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
              

              },
              fail:function(res){
                  console.log(res.data.msg)
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
                  console.log(res.data.msg)
                 }
                  
  
              },
              fail:function(res){
                  console.log(res.data.msg)
            }
          });

    }
})
