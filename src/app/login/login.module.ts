import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { LoginByWechatComponent } from './login-by-wechat/login-by-wechat.component';
import { LoginWxlogincallbackComponent } from './login-wxlogincallback/login-wxlogincallback.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LoginComponent,LoginByWechatComponent, LoginWxlogincallbackComponent]
})
export class LoginModule { }
