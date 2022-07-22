/***************************设备API**********************************/
function getSystemInfo () {
  return new Promise((resolve, reject) => {
    uni.getSystemInfo({
      success: (res) => {
        resolve(res)
      },
      fail: (err) => {
        reject(err)
      }
    })
  })
}

/***************************数据缓存API**********************************/
function getStorageSync (key: string) {
  return uni.getStorageSync(key)
}

function setStorageSync (key: string, value: any) {
  uni.setStorageSync(key, value)
}

function removeStorageSync (key: string) {
  uni.removeStorageSync(key)
}

/***************************界面API**********************************/
function showToast (option: UniApp.ShowToastOptions) {
  uni.showToast(option)
}

function showTabBar (option: UniApp.ShowTabBarOptions) {
  uni.showTabBar(option)
}

function hideTabBar (option: UniApp.HideTabBarOptions) {
  uni.hideTabBar(option)
}

function showLoading (option: UniApp.ShowLoadingOptions) {
  uni.showLoading(option)
}

function hideLoading () {
  uni.hideLoading()
}

/***************************媒体API**********************************/
function getImageInfo (src: string) {
  return new Promise((resolve, reject) => {
    uni.getImageInfo({
      src,
      success: (res) => {
        resolve(res)
      },
      fail: (err) => {
        reject(err)
      }
    })
  })
}

function chooseImage (option: UniApp.ChooseImageOptions) {
  return uni.chooseImage(option)
}

function previewImage (option: UniApp.PreviewImageOptions) {
  uni.previewImage(option)
}

/***************************路由API**********************************/
function navigateTo (option: UniApp.NavigateToOptions) {
  uni.navigateTo(option)
}

function navigateBack (option?: UniApp.NavigateBackOptions) {
  if (typeof option === 'undefined') {
    uni.navigateBack()
  } else {
    uni.navigateBack(option)
  }
}

function switchTab (option: UniApp.SwitchTabOptions) {
  uni.switchTab(option)
}

const commonUniApi = {
  getSystemInfo,
  getStorageSync,
  setStorageSync,
  removeStorageSync,
  showToast,
  showTabBar,
  hideTabBar,
  showLoading,
  hideLoading,
  getImageInfo,
  chooseImage,
  previewImage,
  navigateTo,
  navigateBack,
  switchTab
}

export default commonUniApi