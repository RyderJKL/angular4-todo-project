import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {PlaygroundRoutingModule} from './playground-routing.module'
import { PlaygroundComponent } from './playground.component';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { ThreeComponent } from './three/three.component';
// 路由懒加载，不需要提前在 app.module.ts 中引入该模块
@NgModule({
  imports: [
    CommonModule,
    PlaygroundRoutingModule
  ],
  declarations: [PlaygroundComponent, OneComponent, TwoComponent, ThreeComponent]
})
export class PlaygroundModule { }
