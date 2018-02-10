Page({
  data: {
        date: "1990-09-01",
        accounts: ["男", "女"],
        accountIndex: 0,

        cs: ["北京", "上海"],
        csIndex: 0,

        lb: ["B2B", "B2C"],
        lbIndex: 0,

        hy: ["电子产品", "母婴产品"],
        hyIndex: 0,

        gw: ["销售经理", "销售助理"],
        gwIndex: 0,

        sj: ["1-2年", "2-3年"],
        sjIndex: 0,

        zx: ["10万", "30万"],
        zxIndex: 0,

        zd: ["50万", "100万"],
        zdIndex: 0,

        zk: ["1个月", "2个月"],
        zkIndex: 0,

        zc: ["2个月", "3个月"],
        zcIndex: 0,
  },
    bindAccountChange: function(e) {
        console.log('picker account 发生选择改变，携带值为', e.detail.value);

        this.setData({
            accountIndex: e.detail.value
        })
    },
    bindDateChange: function (e) {
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
    bindlb: function(e) {
        console.log('picker account 发生选择改变，携带值为', e.detail.value);
        this.setData({
            lbIndex: e.detail.value
        })
    },
    hybind: function(e) {
        console.log('picker account 发生选择改变，携带值为', e.detail.value);
        this.setData({
            hyIndex: e.detail.value
        })
    },
    gwbind: function(e) {
        console.log('picker account 发生选择改变，携带值为', e.detail.value);
        this.setData({
            gwIndex: e.detail.value
        })
    },
    sjbind: function(e) {
        console.log('picker account 发生选择改变，携带值为', e.detail.value);
        this.setData({
            sjIndex: e.detail.value
        })
    },
    zxbind: function(e) {
        console.log('picker account 发生选择改变，携带值为', e.detail.value);
        this.setData({
            zxIndex: e.detail.value
        })
    },
    bind: function(e) {
        console.log('picker account 发生选择改变，携带值为', e.detail.value);
        this.setData({
            Index: e.detail.value
        })
    },
    zdbind: function(e) {
        console.log('picker account 发生选择改变，携带值为', e.detail.value);
        this.setData({
            zdIndex: e.detail.value
        })
    },
    zkbind: function(e) {
        console.log('picker account 发生选择改变，携带值为', e.detail.value);
        this.setData({
            zkIndex: e.detail.value
        })
    },
    zcbind: function(e) {
        console.log('picker account 发生选择改变，携带值为', e.detail.value);
        this.setData({
            zcIndex: e.detail.value
        })
    },
  gotomyedit: function() {
    wx.navigateTo({
      url: '../myedit/myedit'
    })
  }
})
