//index.js
//获取应用实例
const app = getApp()


Page({

      data: {
        showView00: false,
        showView01: false,
        showView02: false,
        showView03: false,
        showView04: false,
        showView05: false,
        showView06: false,
        showView07: false,
        showView08: false,
        showView09: true,
        radioItems: [
          {name: '男', value: '男'},
          {name: '女', value: '女', checked: true}
        ],
        date: "1990-01-01",
        radioItems_lb: [
          {name: 'B2B', value: 'B2B'},
          {name: 'B2C', value: 'B2C'}
        ],
        radioItems_hy: [
          {name: '电子产品', value: '电子产品'},
          {name: '母婴行业', value: '母婴行业'},
          {name: '女性用品', value: '女性用品'},
          {name: '商品行业', value: '商品行业'},
          {name: '其他', value: '其他'}
        ],
        radioItems_sj: [
          {name: '1-2年', value: '1-2年'},
          {name: '2-3年', value: '2-3年'},
          {name: '3-5年', value: '3-5年'},
          {name: '5-6年', value: '5-6年'},
          {name: '6-8年', value: '6-8年'},
          {name: '10年及以上', value: '10年及以上'}
        ],
        accounts: ["销售总监", "销售副总", "销售助理"],
        accountIndex: 1,
        radioItems_zxjr: [
          {name: '10万', value: '10万'},
          {name: '15万', value: '15万'},
          {name: '20万', value: '20万'},
          {name: '25万', value: '25万'},
          {name: '30万', value: '30万'},
          {name: '35万', value: '35万'}
        ],
        radioItems_zdjr: [
          {name: '10万', value: '10万'},
          {name: '15万', value: '15万'},
          {name: '20万', value: '20万'},
          {name: '25万', value: '25万'},
          {name: '30万', value: '30万'},
          {name: '35万', value: '35万'}
        ],
        radioItems_zkdd: [
          {name: '一周', value: '一周'},
          {name: '两周', value: '两周'},
          {name: '一个月', value: '一个月'},
          {name: '二个月', value: '二个月'},
          {name: '三个月', value: '三个月'},
          {name: '三月及以上', value: '三月及以上'}
        ],
        radioItems_zcdd: [
          {name: '一周', value: '一周'},
          {name: '两周', value: '两周'},
          {name: '一个月', value: '一个月'},
          {name: '二个月', value: '二个月'},
          {name: '三个月', value: '三个月'},
          {name: '三月及以上', value: '三月及以上'}
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
        console.log('radio发生change事件，携带value值为：', e.detail.value);

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
              date: e.detail.value
          })
      },
      radioChange_lb: function (e) {
        console.log('radio发生change事件，携带value值为：', e.detail.value);

        var radioItems_lb = this.data.radioItems_lb;
        for (var i = 0, len = radioItems_lb.length; i < len; ++i) {
          radioItems_lb[i].checked = radioItems_lb[i].value == e.detail.value;
        }

        this.setData({
          radioItems_lb: radioItems_lb
        });
      },
      radioChange_hy: function (e) {
        console.log('radio发生change事件，携带value值为：', e.detail.value);

        var radioItems_hy = this.data.radioItems_hy;
        for (var i = 0, len = radioItems_hy.length; i < len; ++i) {
          radioItems_hy[i].checked = radioItems_hy[i].value == e.detail.value;
        }

        this.setData({
          radioItems_hy: radioItems_hy
        });
      },
      radioChange_sj: function (e) {
        console.log('radio发生change事件，携带value值为：', e.detail.value);

        var radioItems_sj = this.data.radioItems_sj;
        for (var i = 0, len = radioItems_sj.length; i < len; ++i) {
          radioItems_sj[i].checked = radioItems_sj[i].value == e.detail.value;
        }

        this.setData({
          radioItems_sj: radioItems_sj
        });
      },
      bindAccountChange: function(e) {
        console.log('picker account 发生选择改变，携带值为', e.detail.value);

        this.setData({
            accountIndex: e.detail.value
        })
      },
      radioChange_zxjr: function (e) {
        console.log('radio发生change事件，携带value值为：', e.detail.value);

        var radioItems_zxjr = this.data.radioItems_zxjr;
        for (var i = 0, len = radioItems_zxjr.length; i < len; ++i) {
          radioItems_zxjr[i].checked = radioItems_zxjr[i].value == e.detail.value;
        }

        this.setData({
          radioItems_zxjr: radioItems_zxjr
        });
      },
      radioChange_zdjr: function (e) {
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
        console.log('radio发生change事件，携带value值为：', e.detail.value);

        var radioItems_zkdd = this.data.radioItems_zkdd;
        for (var i = 0, len = radioItems_zkdd.length; i < len; ++i) {
          radioItems_zkdd[i].checked = radioItems_zkdd[i].value == e.detail.value;
        }

        this.setData({
          radioItems_zkdd: radioItems_zkdd
        });
      },
      radioChange_zcdd: function (e) {
        console.log('radio发生change事件，携带value值为：', e.detail.value);

        var radioItems_zcdd = this.data.radioItems_zcdd;
        for (var i = 0, len = radioItems_zcdd.length; i < len; ++i) {
          radioItems_zcdd[i].checked = radioItems_zcdd[i].value == e.detail.value;
        }

        this.setData({
          radioItems_zcdd: radioItems_zcdd
        });
      },
      goto08: function(){
        wx.setNavigationBarColor({
          backgroundColor: '#3286D4',
          frontColor:'#ffffff'
         });


        var that = this;
        that.setData({
            showView08: false,
            showView09: true,
        });
      },
      gotomy: function() {
        wx.navigateTo({
          url: '../my/my'
        })
      }


  
 })

