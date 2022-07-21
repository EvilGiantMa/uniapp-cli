<template>
  <view class='content'>
    <slot></slot>
  </view>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import './layout.scss'

export default defineComponent({
  name: 'layout'
})
</script>