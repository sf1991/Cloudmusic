const app = getApp();
const {
  getBanner
} = require('../../api/index');
Page({
  data: {
    banner: [], //轮播
    inputShowed: false,
    inputVal: "11",
    background: ['demo-text-1', 'demo-text-2', 'demo-text-3'],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 500
  },

  onLoad: function() {
    //0:pc 1:android 2:iphone 3:ipad
    getBanner({
      type: 2
    }).then(res => {
      if (res.code === 200) { //更加严谨
        this.setData({
          banner: res.banners
        })
      }
    })
  },

  go_search: function() {
    wx.navigateTo({
      url: '../search/search',
    });

  },

  showInput: function() {
    this.setData({
      inputShowed: true
    });
  },
  hideInput: function() {
    this.setData({
      inputVal: "",
      inputShowed: false
    });
  },
  clearInput: function() {
    this.setData({
      inputVal: ""
    });
  },
  inputTyping: function(e) {
    this.setData({
      inputVal: e.detail.value
    });
  }
});