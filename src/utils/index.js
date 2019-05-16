import axios from 'axios'
import store from '../store/store'
import router from '../router/index'
let CryptoJS = require('crypto-js/crypto-js')
import md5 from 'crypto-js/md5'

export default {
  Fatch (options) {
    store.commit('setLoading', true)
    const newOptions = Object.assign({}, {
      url: '',
      data: {},
      headers: {
        'Cache-Control': 'no-cache',
        'Pragma': 'no-cache'
      }
    }, options)
    return new Promise((resolve, reject) => {
      axios(newOptions).then((Response) => {
        const resData = Response.data
        resolve(resData)
        store.commit('setLoading', false)
      }).catch((error) => {
        reject(error)
        store.commit('setLoading', false)
      })
    })
  },
  gatewayFatch (options) {
    store.commit('setLoading', true)

    if (options && options.url) {
      if(localStorage.getItem('token')) {
        var tk = JSON.parse(localStorage.getItem('token'))
      } else {
        var tk =''
      }
      var t = (new Date()).valueOf();
      var sign = md5('curefunPc'+t.toString(16) + options.url)
      if (options.url.indexOf('?') == -1) {
        options.url = options.url + '?sign=' + sign + '&t=' + t + '&token=' + tk + '&device_type=2'
      } else {
        options.url = options.url + '&sign=' + sign + '&t=' + t + '&token=' + tk + '&device_type=2'
      }
    }

    const newOptions = Object.assign({}, {
      url: '',
      data: {},
      headers: {
        'Cache-Control': 'no-cache',
        'Pragma': 'no-cache'
      }
    }, options)

    return new Promise((resolve, reject) => {
      axios(newOptions).then((Response) => {
        store.commit('setLoading', false)
        const resData = Response.data
        if (resData.responseCode == '0001' || resData.responseCode == '0002' || resData.responseCode == '0003' || resData.responseCode == '0004') {
          router.push('/Login')
        } else {
          resolve(resData)
        }
      }).catch((error) => {
        reject(error)
        store.commit('setLoading', false)
      })
    })
  },
  encode (string) { /*加密*/
    var words = CryptoJS.enc.Utf8.parse(string)
    return CryptoJS.enc.Base64.stringify(words)
  },
  decode:function (string) { /*解码*/
    var base64 = CryptoJS.enc.Base64.parse(string)
    return base64.toString(CryptoJS.enc.Utf8)
  }
}