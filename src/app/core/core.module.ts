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
// import {AuthGuardService} from './auth-guard.service'


@NgModule({
  imports: [
    BrowserAnimationsModule,
    StoreModule.provideStore({
      auth: authReducer,
      todos: todoReducer,
      todoFilter: todoFilterReducer
    })
  ],
  providers: [
    AuthService,
    UserService,
    // AuthGuardService
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule){
    if (parentModule) {
      throw new Error (
        'CoreModule is already loaded. Import is in AppModule only'
      )
    }
  }
}
