import { InjectionKey } from 'vue'
import { createStore, Store, useStore as baseUseStore } from 'vuex'
import { RootState, UserState } from './interfaces'
import user from './module/user'

const store = createStore<RootState>({
  modules: {
    user: user
  }
})
export default store

type Modules = {
  user: UserState
}

export const key: InjectionKey<Store<Modules>> = Symbol()

export function useStore() {
  return baseUseStore(key)
}