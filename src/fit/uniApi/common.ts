function getStorageSync(key: string) {
  return uni.getStorageSync(key)
}

function setStorageSync(key: string, value: any) {
  uni.setStorageSync(key, value)
}

function navigateTo(option: UniApp.NavigateToOptions) {
  uni.navigateTo(option)
}

function showToast(option: UniApp.ShowToastOptions) {
  uni.showToast(option)
}

const commonUniApi = {
  getStorageSync,
  setStorageSync,
  navigateTo,
  showToast
}

export default commonUniApi