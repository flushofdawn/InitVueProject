/**
 * Created by 朱颜辞镜花辞树 on 2020/4/28.
 */
import { constantRoutes,asyncRoutes } from "./routes"
import { deepClone } from '../../../utils/index.js'

// constantRoutes 公共路由   不需要判断 角色权限
// asyncRoutes 路由       需要判断 角色权限
const routes =  deepClone([...constantRoutes, ...asyncRoutes])

export default [
  // user login
  {
    url: '/routes',
    type: 'get',
    response: config => {
      return {
        code: 20000,
        data: routes
      }
    }
  }
]
