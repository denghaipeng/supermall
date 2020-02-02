import { request } from "./request"

export function getHomeMultidata() {
  return request({
    baseURL: 'http://123.207.32.32:8000',
    url: '/home/multidata'
  })
}

export function getHomeGoods(type, page) {
  return request({
    url: '/home/data',
    params: {
      type,
      page
    }
  })
}