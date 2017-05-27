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
    return this.store$.dispatch({
      type: LOGOUT
    })
  }

  loginWithCredentials(username:string,password:string) {
    this.userService.findUser(username).subscribe(user => {
      if(user === null) {
        this.store$.dispatch({type: LOGIN_FAILED_NOT_EXISTED});
      } else if ( password !== user.password) {
        this.store$.dispatch({type: LOGIN_FAILED_NOT_MATCH});
      } else {
        this.store$.dispatch({type:LOGIN,payload: {
          user: user,
          hasError: false,
          errMsg: null,
          loading: false,
          redirectUrl: null
        }});
        this.router.navigate(['todo']);
      }
    })
  };


  register(username:string,password:string){

    let todoAddUser = {
      username: username,
      password: password,
    };

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
            loading: false,
            redirectUrl: null
          }});
          this.router.navigate(['todo']);
        })

      }
    })
  }
}
