<template>
  <auto-layout>
    <uni-notice-bar scrollable text="这是开箱即用的Vue3+Ts版本的UniApp脚手架"></uni-notice-bar>
    <view class='text-area'>
      <text class='title'>我的</text>
    </view>
    <button type="button" @click="navigateToAboutUs()">关于我们</button>
  </auto-layout>
</template>
<script lang='ts' setup>
import { getCurrentInstance } from 'vue'
import './index.scss'

const UniApi = getCurrentInstance()?.appContext.config.globalProperties.$UniApi

/**
 * @description 跳转至关于我们页面
 */
function navigateToAboutUs() {
  UniApi.navigateTo({ url: '/subpages/my/aboutUs/index' })
}

</script>
