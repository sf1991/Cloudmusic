const API = require('../../api/api');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hotsongs: [],//获取热门搜索
    inputValue: null,//输入框输入的值
    history: [], //搜索历史存放数组
    searchsuggest: [], //搜索建议
    showView: true,//组件的显示与隐藏
    showsongresult: true,
    searchresult: [],//搜索结果
    searchKey: []
  }, 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  searchSuggest() {
    API.searchSuggest({ keywords: this.data.searchKey, type: 'mobile' }).then(res => {
      if (res.code === 200) {
        this.setData({
          searchsuggest: res.result.allMatch
        })
      }
    })
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  //关闭所有页面，返回首页
  cancel: function() {
    wx.switchTab({
      url: '/pages/index/index'
    })
  },
  
  clearInput: function() {
    this.setData({
      inputValue: ""
    });
  },
  getsearchKey: function (e) {
    console.log(e.detail.value) //打印出输入框的值
    let that = this;
    if (e.detail.cursor != that.data.cursor) { //实时获取输入框的值
      that.setData({
        searchKey: e.detail.value
      })
    }
    if (e.value != "") { //组件的显示与隐藏
      that.setData({
        showView: false
      })
    } else {
      that.setData({
        showView: ""
      })
    }
    if (e.detail.value != "") { //解决 如果输入框的值为空时，传值给搜索建议，会报错的bug
      that.searchSuggest();
    }
  },
})