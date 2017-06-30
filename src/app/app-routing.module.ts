/**
 * Created by onejustone on 2017/5/24.
 */
import { NgModule} from '@angular/core'
import {Routes, RouterModule} from '@angular/router'
import {AuthGuardService} from './core/auth-guard.service'

import {LoginComponent} from './login/login.component'
import {LoginByWechatComponent} from './login/login-by-wechat/login-by-wechat.component'
import {LoginWxlogincallbackComponent} from './login/login-wxlogincallback/login-wxlogincallback.component'
// 路由模块，首先在 index.html 中引入基路径 <base href="/">
const routes: Routes = [
  {
    path: 'login',
    children: [
      {
        path: '',
        component: LoginComponent,
      },

      {
        path:'wechat',
        component: LoginByWechatComponent
      },
      {
        path: 'wechatcallback/:code/:state',
        component: LoginWxlogincallbackComponent
      }
    ]
  },
  {
    path: 'todo',
    redirectTo: 'todo/ALL',
    // canLoad: [AuthGuardService]
    // 当没有登录的时候，
  },
  {
    path: 'playground',
    // canActivate: [AuthGuardService],
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
  },
  {
    path: 'register',
    loadChildren: 'app/register/register.module#RegisterModule',
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
