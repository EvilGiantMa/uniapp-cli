<script setup lang='ts'>
import { onLaunch, onShow, onHide } from '@dcloudio/uni-app'
import { getCurrentInstance } from 'vue'

const { $UniApi } = getCurrentInstance()!.appContext.config.globalProperties
onLaunch(() => {
  // 检测应用是否需要更新
  $UniApi.updateApp()
  console.log('App Launch');
});
onShow(() => {
  console.log('App Show');
});
onHide(() => {
  console.log('App Hide');
});
</script>
<style></style>
