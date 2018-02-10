//logs.js
const util = require('../../utils/util.js')

Page({
  data: {

  },
  gotomy: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  }
})
