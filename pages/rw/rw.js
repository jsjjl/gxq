const app = getApp();

Page({
  data: {

  },

  gotomy: function() {
    wx.navigateTo({
      url: '../my/my'
    })
  }
})