import { Injectable } from '@angular/core';

import {Http} from '@angular/http'
import { Store} from '@ngrx/store'
import {Observable}  from 'rxjs/Observable'

import {AppState,Auth} from '../domain/state'

import {UserService} from './user.service'

import {Router} from '@angular/router'

import {
  LOGIN,
  LOGIN_FAILED_NOT_EXISTED,
  LOGIN_FAILED_NOT_MATCH,
  LOGOUT,
  REGISTER,
  REGISTER_FAILED_EXISTED
} from '../actions/auth.action'


@Injectable()
export class AuthService {

  constructor(
    private http: Http,
    private userService: UserService,
    private store$: Store<AppState>,
    private router: Router
  ) { }

  getAuth(): Observable<Auth> {
    return this.store$.select(appState => appState.auth)
  }

  unAuth(): void {
    this.store$.dispatch({
      type: LOGOUT
    })
  }

  register(username:string,password:string): void {

    let todoAddUser = {
      username: username,
      password: password,
    }

    console.log(todoAddUser)
    this.userService.findUser(username)
    .subscribe(user => {
      if(user !== null) {
        this.store$.dispatch({type: REGISTER_FAILED_EXISTED})
      } else {
        this.userService.addUser(todoAddUser).subscribe(user => {
          this.store$.dispatch({type: REGISTER, payload: {
            user: todoAddUser,
            hasError: false,
            errMsg: null,
            redirectUrl: null
          }})
        })

      }
    })
  }
}
