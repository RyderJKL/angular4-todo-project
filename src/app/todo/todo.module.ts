import { NgModule } from '@angular/core';
import { ShareModule} from '../share/share.module'
import { TodoComponent } from './todo.component';
import { TodoRoutingModule } from './todo-routing.module';
import { TodoFooterComponent } from './todo-footer/todo-footer.component';
import { TodoHeaderComponent } from './todo-header/todo-header.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoItemComponent } from './todo-item/todo-item.component'
import { TodoService } from './todo.service'
@NgModule({
  imports: [
    ShareModule,
    TodoRoutingModule
  ],
  declarations: [TodoComponent, TodoFooterComponent, TodoHeaderComponent, TodoListComponent, TodoItemComponent],
  providers:[TodoService]
})
export class TodoModule { }
