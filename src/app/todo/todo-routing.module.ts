/**
 * Created by onejustone on 2017/5/23.
 */
import {NgModule} from '@angular/core'

import {RouterModule,Routes} from '@angular/router'
import {TodoComponent} from './todo.component'
const routes: Routes = [
  {
    path: 'todo',
    component: TodoComponent
  }
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class TodoRoutingModule {}

