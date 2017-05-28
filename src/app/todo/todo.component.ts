import { Component, OnInit } from '@angular/core';

import {ActivatedRoute} from '@angular/router'

import {Store} from '@ngrx/store'
import {AppState,Todo} from '../domain/state'

import {TodoService} from './todo.service'

import {FETCH_FROM_API} from  '../actions/todo.action'

import {Observable} from 'rxjs/Observable'


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {

  todos: Observable<Todo[]>;

  constructor(
    private service: TodoService,
    private route: ActivatedRoute,
    private store$: Store<AppState>
  ) {
    const fetchData$ = this.service.getTodos()
    .flatMap(todos => {
      this.store$.dispatch({
        type: FETCH_FROM_API,
        payload: todos
      });
      return this.store$.selecte('todos');
    })
    .startWith([]);

    const filterDate$ = this.route.plunk('filter')
    .do(value => {
      const filter = value as string;
      this.store$.dispatch({
        type:filter
      })
      .flatMap(_ => {
        this.store$.select('todoFilter')
      })
    });

    this.todos = Observable.combineLatest(
      fetchData$,
      filterDate$,
      (todos: Todo[], filter:any) => todos.filter(filter)
    )

  }

  ngOnInit() {

  }

  addTodo(desc: string){
    this.service.addTodo(desc);
  }

  toggleTodo(todo:Todo) {
    this.service.toggleTodo(todo);
  }

  removerTodo(todo: Todo){
    this.service.removeTodo(todo)
  }

  toggleAll(){
    this.service.toggleAll()
  }

  clearCompleted(){
    this.service.clearCompleted()
  }

}
