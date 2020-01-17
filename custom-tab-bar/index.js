Component({
  data: {
    selected: 0,
    color: "#999",
    selectedColor: "#EA353A",
    list: [{
      pagePath: "/index/index",
      iconPath: "/images/find.png",
      selectedIconPath: "/images/find-selected.png",
      text: "发现"
    }, {
      pagePath: "/user/user",
      iconPath: "/images/selected-playing.png",
      selectedIconPath: "/images/playing.png",
      text: "我的"
    }]
  },
  attached() {},
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({
        url
      })
      this.setData({
        selected: data.index
      })
    }
  }
})