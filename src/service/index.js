
import request from '../util/request'

export function createArticle (data) {
  return request.post('/article/create', data)
}

export function articleList (data) {
  return request.post('/article/list', data)
}
