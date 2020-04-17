/**
 * Created by 朱颜辞镜花辞树 on 2020/4/1.
 */
import './waves.css'

const context = '@@wavesContext'

function waveFun(el,binding) {
  function handle(e){
    const customOpts = {
      type: binding.arg.type,                  // 波纹起始位置 center (中心扩散) hit (点击位置扩散)
      element: el,                   // 作用元素
      color: 'rgba(0, 0, 0, 0.10)'   // 波纹颜色
    }
    const target = customOpts.element;
    if( target ){
      target.style.position = 'relative'
      target.style.overflow = 'hidden'
      const rect = target.getBoundingClientRect();
      let ripple = target.querySelector('.waves-ripple');
      if( !ripple ){
          ripple = document.createElement('span');
          ripple.className = 'waves-ripple';
          ripple.style.height = ripple.style.width = Math.max(rect.width, rect.height) + 'px'
          target.appendChild( ripple )
      }else {
        ripple.className = 'waves-ripple'
      }
      switch ( customOpts.type ) {
        case 'center':
          ripple.style.top = rect.height / 2 - ripple.offsetHeight / 2 + 'px'
          ripple.style.left = rect.width / 2 - ripple.offsetWidth / 2 + 'px'
          break
        default:
          ripple.style.top =
            (e.pageY - rect.top - ripple.offsetHeight / 2 - document.documentElement.scrollTop ||
            document.body.scrollTop) + 'px'
          ripple.style.left =
            (e.pageX - rect.left - ripple.offsetWidth / 2 - document.documentElement.scrollLeft ||
            document.body.scrollLeft) + 'px'
      }
      ripple.style.backgroundColor = customOpts.color
      ripple.className = 'waves-ripple z-active'
      return false
    }
  }
  if (!el[context]) {
    el[context] = {
      removeHandle: handle
    }
  } else {
    el[context].removeHandle = handle
  }
  return handle;
}
export default {
  bind (el, binding ) {
    el.addEventListener("click",waveFun( el,binding ),false);
  },
  update (el, binding, vnode , oldVnode) {
    el.addEventListener("click",el[context].removeHandle,false);
    el.addEventListener("click",waveFun( el,binding ),false);
  },
  unbind (el, binding, vnode , oldVnode) {
    el.removeEventListener('click', el[context].removeHandle, false)
    el[context] = null
    delete el[context]
  },
}
