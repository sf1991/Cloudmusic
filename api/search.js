import request from '../utils/request'

export function getHotList() {
  return request('/search/hot')
}

