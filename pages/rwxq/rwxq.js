var sliderWidth = 144; // 需要设置slider的宽度，用于计算中间位置

Page({
    data: {
        tabs: ["产品", "客户"],
        activeIndex: 0,
        sliderOffset: 0,
        sliderLeft: 0
    },
    onLoad: function () {
        var that = this;
        wx.getSystemInfo({
            success: function(res) {
                that.setData({
                    sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 2,
                    sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex
                });
            }
        });
    },
    tabClick: function (e) {
        this.setData({
            sliderOffset: e.currentTarget.offsetLeft,
            activeIndex: e.currentTarget.id
        });
    },
    gotokh: function() {
        wx.navigateTo({
          url: '../khxq/khxq'
        })
      }
    
});