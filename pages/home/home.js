//index.js
//获取应用实例
const app = getApp()


Page({

      data: {
        showView00: true,
        showView01: false,
        showView02: false,
        showView03: false,
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
      fh_goto03: function(){
        console.log(1)
        var that = this;
        that.setData({
            showView03: false,
            showView02: true,

        })
      }
  
 })

