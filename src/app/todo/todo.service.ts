import { Injectable } from '@angular/core';

import {Http,Headers,Response} from '@angular/http'

import {Observable} from 'rxjs/Observable'
import {Todo} from '../domain/entities'
import {UUID} from 'angular2-uuid'
import {Store} from '@ngrx/store'
import {AppState} from "../domain/state";

import {
  ADD_TODO,
  TOGGLE_TODO,
  REMOVE_TODO,
  TOGGLE_ALL,
  CLEAR_COMPLETED,
} from '../actions/todo.action'


@Injectable()
export class TodoService {

  private api_url = 'http://localhost:3000/todos'
  private headers = new Headers({'Content-Type':'application/json'})
  private auth$: Observable<number>
  constructor(
    private http: Http,
    private store$: Store<AppState>,
  ) {
    this.auth$ = this.store$.select(appState => appState.auth)
    .filter(auth => auth.user !== null)
    .map(auth => auth.user.id)
  }

  addTodo(desc:string):void {
    this.auth$.flatMap(userId => {
      let todoToAdd = {
        id: UUID.UUID,
        desc: desc,
        completed: false,
        userId: this.userId
      }
      return this.http.post(this.api_url,JSON.stringify(todoToAdd
      ),{headers: this.headers})
      .map(res => res.json() as Todo)
    }).subscribe(todo => {
      this.store$.dispatch({
        type: ADD_TODO,
        payload: todo
      })
    })
  }

  toggleTodo(todo: Todo):void {
    const url = `${this.api_url}/${todo.id}`
    let updatedTodo = Object.assign({},todo,{completed: !todo.completed});
    this.http.patch(url,JSON.stringify({completed: !todo.completed}), {headers:this.headers})
      .mapTo(updatedTodo)
      .subscribe(todo => {
      this.store$.dispatch({
        type: TOGGLE_TODO,
        payload: updatedTodo
      })
    })
  }

  removeTodo(todo: Todo):void {
    const url = `${this.api_url}/${todo.id}`;
    this.http.delete(url,{headers:this.headers})
    .mapTo(Object.assign({},todo))
    .subscribe(todo => {
      this.store$.dispatch({
        type: REMOVE_TODO,
        payload: todo
      })
    })
  }

  getTodos(): Observable<Todo[]>{
    return this.auth$.flatMap(userId =>
      this.http.get(`${this.api_url}?userId=${userId}`))
      .map(res => res.json() as Todo[]);
  }

  toggleAll(): void{
    this.getTodos()
    .flatMap(todos => Observable.from(todos))
    .flatMap(todo => {
      const url = `${this.api_url}/${todo.id}`
      let updateTodo = Object.assign({},todo,{completed: !todo.competed})
      return this.http.patch(url,JSON.stringify({completed:!todo.comleted}),{
        heades: this.headers
      })
    }).subscribe(() =>{
        this.store$.dispatch({
          type: TOGGLE_ALL
        })
      })
  }

  clearCompleted():void {
    this.getTodos()
    .flatMap(todos => Oberservable.from(todos))
    .flatMat(todo => {
      const  url = `${this.api_url}/${todo.id}`;
      return this.http.delete(url,{headers: this.headers})
    }).subscribe(() => {
      this.store$.dispatch({
        type: CLEAR_COMPLETED
      })
    })
  }

}
