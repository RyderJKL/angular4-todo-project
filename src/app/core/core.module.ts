import { NgModule, Optional, SkipSelf} from '@angular/core';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations'

import {StoreModule} from '@ngrx/store'
/**
 * 记得安装相关包 npm install @ngrx/core @ngrx/store
 *
 */
import { authReducer } from '../reducer/auth.reducer'
import {todoReducer,todoFilterReducer} from '../reducer/todo.reducer'
import {AuthService} from './auth.service'
import {UserService} from './user.service'
import {AuthGuardService} from './auth-guard.service'
import {IHttpService} from './iHttp.service'
import {StoreDevtoolsModule} from '@ngrx/store-devtools'

@NgModule({
  imports: [
    BrowserAnimationsModule,
    StoreModule.provideStore({
      auth: authReducer,
      todos: todoReducer,
      todoFilter: todoFilterReducer
    }),
    StoreDevtoolsModule.instrumentOnlyWithExtension()
  ],
  providers: [
    AuthService,
    UserService,
    AuthGuardService,
    IHttpService
  ]
})
export class CoreModule {
  // 关于 CoreModule ，我们只希望其在应用启动时导入它一次，而不会在其他地方再次导入。
  // @SkipSelf装饰器意味着在当前注入器的所有祖先注入器中寻找CoreModule。如果该构造函数在我们所期望的AppModule中运行，就没有任何祖先注入器能够提供CoreModule的实例，于是注入器会放弃查找。默认情况下，当注入器找不到想找的提供商时，会抛出一个错误。 但@Optional装饰器表示找不到该服务也无所谓。 于是注入器会返回null，parentModule参数也就被赋成了空值，而构造函数没有任何异常。
  /*
  CoreModule 中的适用场景:
  * (1) 一些单例的模块，比如 UserService，这样的服务在整个系统中的各个地方都需要，但我们不希望它被创建多次。
  * (2) 只应用于 AppComponent 模板的一次性组件，没有必要共享它们，但如果把它们留在根目录，又会显定太乱了。
  */
  constructor(@Optional() @SkipSelf() parentModule: CoreModule){

    if (parentModule) {
      throw new Error (
        'CoreModule is already loaded. Import is in AppModule only'
      )
    }
  }
}
