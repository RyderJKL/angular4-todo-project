import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
/*
* BrowserModule 提供运行在浏览器中的应用所需要的关键服务和指令
* */

/*
* FormsModule 提供模板驱动表单和双向绑定等服务和指令
*/


import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { CoreModule} from './core/core.module'
import { ShareModule} from './share/share.module'

import {AppRoutingModule} from './app-routing.module'

import { AppComponent } from './app.component';
import {TodoModule} from './todo/todo.module'
import {RxjsPlaygroundModule} from './rxjs-playground/rxjs-playground.module'
import {GithubSearchModule} from './github-search/github-search.module'
import {FormDemoModule} from './form-demo/form-demo.module'

import {LoginDialogComponent} from "./sign/login-dialog/login-dialog.component";
import {RegisterDialogComponent} from "./sign/register-dialog/register-dialog.component";
import {LoginComponent} from './login/login.component'
import {LoginByWechatComponent} from './login/login-by-wechat/login-by-wechat.component'
import {LoginWxlogincallbackComponent} from './login/login-wxlogincallback/login-wxlogincallback.component'
import { AnimationBallComponent } from './animation-ball/animation-ball.component';

import {LoginService} from './login/login.service'



@NgModule({
  /*
  * @NgModule 为模块定义元数据其中:
  *
  * declarations: 声明本模块中拥有的视图。Angular
   * 中有三种视图:组件，视图，指令。记住在 module 中声明的组件在
    * module 范围内全局可用。
  * */

  /*
  * exports：declarations 的子集，声明可用于其他模块的组件模板
  * */

  /**
   * providers: 服务创建者，便加入到全局服务列表。
   */

  /*
  * bootstrap：指定应用的主视图（根组件），只有根模块才能设置 bootstrap
  * */


  /*如果组件、指令或管道出现在模块的imports数组中，不要把它声明在declarations数组中。 如果它是你自己写的，并且属于当前模块，就要把它声明在declarations数组中。
  */
declarations: [
    AppComponent,
    LoginDialogComponent,
    RegisterDialogComponent,
    LoginComponent,
    LoginByWechatComponent,
    LoginWxlogincallbackComponent,
    AnimationBallComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    ShareModule,
    HttpModule,
    TodoModule,
    RxjsPlaygroundModule,
    GithubSearchModule,
    FormDemoModule,
    AppRoutingModule,
  ],
  entryComponents: [LoginDialogComponent,RegisterDialogComponent],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }

// 关于依赖注入
/*
* 依赖注入(Dependency Injection)
* 这种机制可以让应用中的组件，服务等松耦合，使得应用模块化，可维护性更佳。
*  依赖注入是将所依赖的传递给将使用的从属对象(客户端），而不是从客户端什么和构造，这种模式通常也叫反转控制(IoC-Inverse of Control)
* */
