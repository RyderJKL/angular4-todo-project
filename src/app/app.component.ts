import { Component } from '@angular/core';
import { Router} from '@angular/router'
import {Store} from '@ngrx/store'
import {AppState,Auth} from './domain/state'
import {Observable} from 'rxjs/Observable'

import {
  LOGOUT
} from './actions/auth.action'

import {MdlDialogService} from '@angular-mdl/core'
import {LoginDialogComponent} from './sign/login-dialog/login-dialog.component'
import {RegisterDialogComponent} from './sign/register-dialog/register-dialog.component'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  auth$: Observable<Auth>;

  constructor(
    private dialog: MdlDialogService,
    private store$: Store<AppState>,
    private router: Router
  ) {
    this.auth$ = this.store$.select('auth')
  }

  login() {
    let lDialog = this.dialog.showCustomDialog({
      component: LoginDialogComponent,
      styles: {'width':'350px'},
      isModal: true,
      clickOutsideToClose: true,
      enterTransitionDuration: 400,
      leaveTransitionDuration: 400
    })
  }

  register() {
    let rDialog = this.dialog.showCustomDialog({
      component: RegisterDialogComponent,
      isModal: true,
      clickOutsideToClose: true,
      enterTransitionDuration: 400,
      leaveTransitionDuration: 400
    })
  }

  logout() {
    this.store$.dispatch({type:LOGOUT});
    this.router.navigate(['login'])
  }
}
