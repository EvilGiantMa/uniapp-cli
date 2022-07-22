import commonUniApi from './common'

function updateApp () {
  const updateManager = uni.getUpdateManager()
  updateManager.onCheckForUpdate(function (res) {
    if (res.hasUpdate) {
      updateManager.onUpdateReady(function () {
        uni.showModal({
          title: '更新提示',
          content: '新版本已经准备好，点击确定重新启动',
          showCancel: false,
          success: function (res) {
            if (res.confirm) {
              updateManager.applyUpdate()
            }
          }
        })
      })
      updateManager.onUpdateFailed(function () {
        // 新版本下载失败
        uni.showModal({
          title: '更新提示',
          content: '检测到新版本，但是下载失败，请检查网络设置',
          showCancel: false
        })
      })
    }
  })
}

const uniApi = {
  ...commonUniApi,
  updateApp
}

export default uniApi