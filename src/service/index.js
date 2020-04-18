
import request from '../util/request'

export function createArticle (data) {
  return request.post('/article/create', data)
}

export function articleList (data) {
  return request.post('/article/list', data)
}

export function changeStatus (data) {
  return request.post('/article/changeStatus', data)
}

export function articleDetail (data) {
  return request.post('/article/detail', data)
}

export function modifyArticle (data) {
  return request.post('/article/modify', data)
}

export function upload (formData) {
  return request.post('/common/file/upload', formData)
}
