
import cloneDeep from 'lodash/cloneDeep'
import uniApi from '@/fit/uniApi'
import { getPlatform } from '@/utils/utils'
import { HTTP_STATUS } from '@/config/index'

type responseType = {
  data?: any
}

/**
 * @description http请求
 * @param {string} url 请求路径
 * @param {any} data 请求数据
 * @param {string} contentType 请求数据类型
 */
const baseRequest = (params: { url: string, data: any, contentType?: string }, method: UniApp.RequestOptions['method']) => {
  const { url, data } = params
  const contentType = params.contentType ?? 'application/json'
  return new Promise<responseType>((resolve, reject) => {
    if (contentType === 'multipart/form-data') {
      const { filePath, name } = data
      const formData = cloneDeep(data)
      delete formData.name
      delete formData.filePath
      const header = getPlatform() === 'H5'
        ? { sign: uniApi.getStorageSync('sign') ?? null } : { 'content-type': contentType, sign: uniApi.getStorageSync('sign') ?? null }
      uni.uploadFile({
        url,
        filePath,
        name,
        formData,
        header,
        timeout: 90000,
        success(res) {
          const processResult = requestInterceptor(res)
          if (processResult.requestState) {
            resolve(processResult.requestData)
          } else {
            reject(processResult.requestMessage)
          }
        },
        fail(result) {
          reject(result)
        }
      })
    } else {
      uni.request({
        url,
        data,
        method,
        header: {
          'content-type': contentType,
          sign: uniApi.getStorageSync('sign') ?? null
        },
        timeout: 90000,
        success(res) {
          const processResult = requestInterceptor(res)
          if (processResult.requestState) {
            resolve(processResult.requestData)
          } else {
            reject(processResult.requestMessage)
          }
        },
        fail() {
          reject('网络错误')
        }
      })
    }
  })
}

/**
 * @description 请求回复拦截器
 * @param { any } result 回复数据
 */
function requestInterceptor(result: any) {
  let requestState = true, requestMessage = '', requestData
  if (result.statusCode === HTTP_STATUS.NOT_FOUND) {
    requestState = false
    requestMessage = '请求资源不存在'
  } else if ([HTTP_STATUS.BAD_GATEWAY, HTTP_STATUS.SERVER_ERROR, HTTP_STATUS.SERVICE_UNAVAILABLE].includes(result.statusCode)) {
    requestState = false
    requestMessage = '服务端出现了问题'
  } else if (result.statusCode === HTTP_STATUS.FORBIDDEN) {
    requestState = false
    requestMessage = '没有权限访问'
  } else if ([HTTP_STATUS.AUTHENTICATE, HTTP_STATUS.AUTHORITY_FAILURE].includes(result.statusCode)) {
    requestState = false
    requestMessage = '需要鉴权'
  } else if (result.statusCode === HTTP_STATUS.BAD_REQUEST) {
    requestState = false
    requestMessage = '请求校验异常'
  } else if (result.statusCode === HTTP_STATUS.SUCCESS) {
    if (result.data.status != 0) {
      requestState = false
      requestMessage = result.data.message
    } else {
      requestData = result.data.result
    }
  }
  if (requestMessage !== '') {
    uniApi.showToast({ title: requestMessage, icon: 'error', duration: 2000})
  }
  return { requestState, requestMessage, requestData }
}

const request = {
  get,
  post
}

/**
 * @description get请求
 * @param { string } url 请求路径
 * @param { UniApp.RequestOptions['data'] } data 请求数据
 */
function get(url: string, data?: UniApp.RequestOptions['data']) {
  const requestOption = { url, data }
  return baseRequest(requestOption, 'GET')
}

/**
 * @description post请求
 * @param { string } url 请求路径
 * @param { UniApp.RequestOptions['data'] } data 请求数据
 * @param { string } contentType 请求数据格式
 */
function post(url: string, data: UniApp.RequestOptions['data'], contentType?: string) {
  const requestOption = { url, data, contentType }
  return baseRequest(requestOption, 'POST')
}

export default request
