//封装request请求
const API_BASE_URL = 'http://neteasecloudmusicapi.zhaoboy.com';
const request = (url, data) => {
  let _url = API_BASE_URL + url;
  return new Promise((resolve, reject) => {
    wx.request({
      url: _url,
      method: "get",
      data: data,
      header: {
        // 'content-type': 'application/json' 默认值
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      success(request) {
        resolve(request.data)

      },
      fail(error) {
        reject(error)
      }
    })
  });
}
export default request
// const instance = axios.create()
// options = Object.assign(this.getInsideConfig(), options)
// this.interceptors(instance, options.url)
// return instance(options)