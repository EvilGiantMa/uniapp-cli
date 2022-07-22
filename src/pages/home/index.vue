<template>
  <auto-layout>
    <view class='text-area'>
      <view class='title'>首页</view>
      <view v-if="getFunctionAuthority('userInfo')" class='title'>{{ user.getUserInfo }}</view>
    </view>
  </auto-layout>
</template>

<script lang='ts' setup>
import { getCurrentInstance } from 'vue'
import { userStore } from '@/store'
import { getFunctionAuthority } from '@/utils/utils'
import './index.scss'

const user = userStore()
const { $UniApi } = getCurrentInstance()!.appContext.config.globalProperties
</script>
