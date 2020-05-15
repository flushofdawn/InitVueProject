// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import router from './router'
import store from './store'
import { Message } from 'element-ui'
import NProgress from 'nprogress' // progress bar
import { getToken } from "@/utils/tokenOpt"

//白名单 不用token可以直接访问的页面
const whiteList = ['/login']

router.beforeEach(async(to, from, next) => {
  NProgress.start();
  console.log( to.meta )

  const hasToken = getToken()
  console.log( hasToken )
  if(hasToken){
    if( to.path == "/login"  ){
      next()
    }else{
      const { roles } = await store.dispatch('user/getInfo')
    }
  }else{
    if( whiteList.indexOf( to.path ) === -1  ){
      next({ path: '/login' })
    }else{
      next()
      NProgress.done()
    }
  }
});
router.afterEach(() => {
  NProgress.done()
})
