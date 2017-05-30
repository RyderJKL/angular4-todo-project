import {
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';

import {Todo} from '../../domain/entities'

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {

  _todos: Todo [] = [];

  @Input()
  // 如果将 todos 当作变量给出的话，在设置以后如果父组件中的 todos
  // 数组发生了变化，子组件并不会知道这个变化。
  // 通过 get 和 set 修饰符将 todos

  set todos(todos:Todo[]){
    // 通过标记 set todos() 为 @Input 可以监听父组件的数据变化
    if(todos !== null)
      this._todos = [...todos];
  }
  get todos() {
    // 修饰成属性方法，而在模块中也可以通过 {{todos}} 的形式进行引用
    return this._todos;
  }
  @Output() onRemoveTodo = new EventEmitter<Todo>();
  @Output() onToggleTodo = new EventEmitter<Todo>();
  @Output() onToggleAll = new EventEmitter<boolean>();

  onRemoveTriggered(todo: Todo) {
    this.onRemoveTodo.emit(todo);
  }
  onToggleTriggered(todo: Todo) {
    this.onToggleTodo.emit(todo);
  }
  onToggleAllTriggered() {
    this.onToggleAll.emit(true);
  }



}
