import { userStore } from '@/store'
/**
 * @description 判断当前平台
 */
function getPlatform () {
  let platform
  // #ifndef H5
  platform = 'H5'
  // #endif
  // #ifndef H5
  platform = 'MP-WEIXIN'
  // #endif
  return platform
}

/**
 * @description 获取基础url
 */
function getBaseUrl () {
  let BASE_URL: string = ''
  if (process.env.NODE_ENV === 'development') {
    // 开发环境
    // 根据不同的终端选择不同的url
    if (getPlatform() === 'h5') {
      BASE_URL = 'http://localhost:8080'
    } else if (getPlatform() === 'MP-WEIXIN') {
      BASE_URL = 'http://xxxxx'
    }
  } else {
    // 生产环境
    BASE_URL = 'https://xxx'
  }
  return BASE_URL
}

/**
 * @description 判断用户是否有该功能的权限
 * @param {string} functionName 功能名称
 */
function getFunctionAuthority(functionName: string) {
  const user = userStore()
  return user.getFunctionAuthority(functionName)
}

export {
  getPlatform,
  getBaseUrl,
  getFunctionAuthority
}