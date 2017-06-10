/**
 * Created by onejustone on 2017/5/24.
 */
import { NgModule} from '@angular/core'
import {Routes, RouterModule} from '@angular/router'
import {AuthGuardService} from './core/auth-guard.service'
// 路由模块，首先在 index.html 中引入基路径 <base href="/">
const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
    // pathMatch 路由的字符匹配策略,
    // 子路由数组
  },
  {
    path: 'todo',
    redirectTo: 'todo/ALL',
    // canLoad: [AuthGuardService]
    // 当没有登录的时候，
  },
  {
    path: 'playground',
    canActivate: [AuthGuardService],
    // canLoad: [AuthGuardService],canLoad
    // canLoad 决定是否加载某个 url 对应的模块
    loadChildren: 'app/playground/playground.module#PlaygroundModule',
    // 路由器用 loadChildren
    // 属性链映射惰性加载的模块文件，playgroundModule，该表达式的规则是:模块路径 # 模块名称
  },
  {
    path: 'rxjs',
    redirectTo: 'rxjs'
  },
  {
    path: 'github',
    redirectTo: 'github'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {}
