/**
 * Created by onejustone on 2017/5/23.
 */
import {NgModule} from '@angular/core'

import {RouterModule,Routes} from '@angular/router'
import {TodoComponent} from './todo.component'

import {AuthGuardService} from '../core/auth-guard.service'
const routes: Routes = [
  {
    path: 'todo/:filter',
    component: TodoComponent,
    canActivate: [AuthGuardService]
    // 使用路由守卫，显示用户未登录前不能访问 todo,并且返回原来的路径
  }
]

// 路由守卫
/*
* CanActivate 处理导航到某路由的情况
* CanActivateChild 处理导航到子路由的情况
* CanDeactivate 处理从当前路由离开的情况
* Resolve 在路由激活前获取路由数据
* CanLoad 处理异步导航到某特性模块的情况
*
* */

/*路由器会先按照从最深的子路由由下往上检查的顺序来检查 CanDeactivate 守护条件
* 然后它会按照从上往下的顺序检查 CanActivate 守卫。
* 如果任何守卫返回 false ，那么其它未完成的守卫会被取消*/
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class TodoRoutingModule {}

