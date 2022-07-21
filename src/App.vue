<script setup lang='ts'>
// import { getCurrentInstance } from 'vue'
import { onLaunch, onShow, onHide } from '@dcloudio/uni-app'
onLaunch(() => {
  // const { $UniApi } = getCurrentInstance()!.appContext.config.globalProperties
  // $UniApi.getStorageSync('xx')
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
