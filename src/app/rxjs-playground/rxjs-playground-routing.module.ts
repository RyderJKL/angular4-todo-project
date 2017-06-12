/**
 * Created by root on 17-6-10.
 */
import {NgModule} from '@angular/core'

import {RouterModule,Routes} from '@angular/router'
import {RxjsPlaygroundComponent} from './rxjs-playground.component'
import {DragDemoComponent} from './drag-demo/drag-demo.component'
const routes: Routes = [
  {
    path: 'rxjs',
    component: RxjsPlaygroundComponent,
    children: [
      {
        path: 'drage',
        component: DragDemoComponent
      }
    ]
  },

]

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})

export class RxjsPlayGroundRoutingModule {}
