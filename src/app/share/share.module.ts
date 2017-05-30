import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
/*
* 所有在浏览器中运行的应用，都需要从
 * '@angular/platform-browser' 中导入
  * BrowserModule
   * 模块，并且只导入一次,其他任何地方都应该使用
    * CommonModule替代。CommModule
   * 提供了应用程序中常用的指令，比如 NgIf，NgFor等。
* */
import {FormsModule} from '@angular/forms'
import { MdlModule} from '@angular-mdl/core'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MdlModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    MdlModule
  ],
  declarations: []
})
export class ShareModule { }
