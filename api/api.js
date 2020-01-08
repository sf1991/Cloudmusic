// api.js
import request from '../utils/request'



module.exports ={
  // searchDefault: (data) => {
  //   return request('/search/default')//默认搜索
  // },
  gethotsongs:(data) =>{
    return request('/search/hot',data)//热搜接口
  },
  searchHot: (data) => {
    return request('/search/hot/detail')//热搜榜
  },
  searchSuggest:(data)=>{
    return request('/search/suggest',data)//搜索建议接口
  },
  searchResult:(data)=>{
    return request('/search',data)//搜索结果接口
  },
  getBanner:(data)=>{
    return request('/banner',data)//个性推荐轮播
  },
  getsongsheet:(data)=>{
    return request('/top/playlist',data)//热门歌单接口
  },
  getNewSong:(data)=>{
    return request('/personalized/newsong',data)//最新音乐接口
  },
  getDjRadios:(data)=>{
    return request('/dj/recommend',data)//电台推荐接口
  },
  // getTopComments:(data)=>{
  //   return request('/comment/hot',data)
  // },
  getProgramRecommend:(data)=>{
    return request('/program/recommend',data)//推荐节目接口
  },
  getRecommendType:(data)=>{
    return request('/dj/recommend/type',data)//所有电台分类推荐
  },
  getRecommendMV:(data)=>{
    return request('/personalized/mv',data)//推荐MV
  },
  getNewMv:(data)=>{
    return request('/mv/first',data)//最新MV
  },
  getNewEst:(data)=>{
    return request('/album/newest',data)//最新专辑
  },
  getTopList:(data)=>{
    return request('/top/list',data)//排行榜
  },
  getDjList:(data)=>{
    return request('/dj/catelist',data) //电台分类
  },
  getPay:(data)=>{
    return request('/dj/paygift',data)//付费精品
  },
  getSonger:(data)=>{
    return request('/toplist/artist',data)//歌手排行
  },
 
}