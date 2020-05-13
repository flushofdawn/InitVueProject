// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import NProgress from 'nprogress' // progress bar

router.beforeEach(async(to, from, next) => {
  NProgress.start();
  document.title = '';

  if( to.path == "/login"  ){
    next();
  }else{
    const { roles } = await store.dispatch('user/getInfo')


  }
});
router.afterEach(() => {
  NProgress.done()
})
