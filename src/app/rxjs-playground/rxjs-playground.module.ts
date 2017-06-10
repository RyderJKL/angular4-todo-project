import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDemoComponent } from './drag-demo/drag-demo.component';
import {RxjsPlayGroundRoutingModule} from './rxjs-playground-routing.module';
import { RxjsPlaygroundComponent } from './rxjs-playground.component'

@NgModule({
  imports: [
    CommonModule,
    RxjsPlayGroundRoutingModule
  ],
  declarations: [DragDemoComponent, RxjsPlaygroundComponent]
})
export class RxjsPlaygroundModule { }
