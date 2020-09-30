import request from '../util/request';

export function queryArticleList (data:any) {
  return request.post('/article/list', data);
}
