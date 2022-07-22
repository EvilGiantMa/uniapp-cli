import { defineStore } from 'pinia'

const userStore = defineStore({
  id: 'user',
  state: () => {
    return {
      name: '测试用户',
      age: 18,
      userFunction: ['userInfo'] as Array<string>
    }
  },
  getters: {
    // 获取用户信息
    getUserInfo (state) {
      return '姓名：' + state.name + ', 年龄：' + state.age
    },
    // 判断用户是否有该功能的权限
    getFunctionAuthority (state) {
      return (functionName: string) => {
        let show:boolean
        if (state.userFunction.includes(functionName)) {
          show = true
        } else {
          show = false
        }
        return show
      }
    }
  },
  actions: {
    incrementAge () {
      this.age++
    },
  }
})

export default userStore