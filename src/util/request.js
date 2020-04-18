import axios from 'axios'
import config from '../config'

const instance = axios.create({
  baseURL: config.api,
})

const request = {
  post: function (url, data) {
    return new Promise((resolve, reject) => {
      instance.post(url, data).then(res => {
        resolve(res.data)
      }).catch(error => {
        reject(error)
      })
    })
  },
  upload: function (url, formdata) {
    return new Promise((resolve, reject) => {
      instance({
        url,
        method: 'post',
        data: formdata,
        headers: { 'Content-Type': 'multipart/form-data' },
      }).then(res => {
        resolve(res.data)
      }).catch(error => {
        reject(error)
      })
    })
  },
}
export default request
