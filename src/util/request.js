import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://127.0.0.1:7001',
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
}

export default request
