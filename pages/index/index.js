const app = getApp();
Page({
  data: {
    inputShowed: false,
    inputVal: "11"
  },



  go_search: function () {
   
    wx.navigateTo({
      url: '../search/search',
      
    });
  },

  showInput: function () {
    this.setData({
      inputShowed: true
    });
  },
  hideInput: function () {
    this.setData({
      inputVal: "",
      inputShowed: false
    });
  },
  clearInput: function () {
    this.setData({
      inputVal: ""
    });
  },
  inputTyping: function (e) {
    this.setData({
      inputVal: e.detail.value
    });
  }
});