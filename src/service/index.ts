import request from '../util/request';

export function queryArticleList (data: any): Promise<any[]> {
  return request.post('/article/list', data);
}

export function queryArticleDetail (data: {
  id: number;
}): Promise<any[]> {
  return request.post('/article/detail', data);
}
