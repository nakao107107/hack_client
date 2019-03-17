import axios from 'axios'

const onSuccess = (resp) => {
  return Promise.resolve(resp)
}
const onError = (error) => { 
  return Promise.reject(error)
}

export default {
  get: (url, params, headers) => {
    return axios.get(url, { params: params, headers: headers }).then(onSuccess).catch(onError)
  },
  post: (url, params, headers) => {
    return axios.post(url, params, {headers: headers}).then(onSuccess).catch(onError)
  },
  put: (url, params, headers) => {
    return axios.put(url, params, {headers: headers}).then(onSuccess).catch(onError)
  },
  delete: (url, params = {}, headers) => {
    return axios.delete(url, { params: params, headers: headers }).then(onSuccess).catch(onError)
  }
}