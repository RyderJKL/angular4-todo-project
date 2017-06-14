import { Component,OnInit} from '@angular/core';
import { Router} from '@angular/router'

import {MdlDialogService} from '@angular-mdl/core'
import {LoginDialogComponent} from './sign/login-dialog/login-dialog.component'
import {RegisterDialogComponent} from './sign/register-dialog/register-dialog.component'

import {AnimationBallComponent} from  './animation-ball/animation-ball.component'
import {Store} from '@ngrx/store'
import {AppState,Auth} from './domain/state'
import {Observable} from 'rxjs/Observable'
import {Subscription} from 'rxjs/Rx'
import 'rxjs/add/operator/timeInterval'
import 'rxjs/add/observable/timer'
import {LOGOUT} from './actions/auth.action'

/*
 * 命令别名: ng g c some -it -is 代表: ng generator
 * component some --inline-template --inline-style
 *
 * */

/*
* @ 符号定义一个对象，表示后面的数据是一个元数据
* */
@Component({
  // @Component 代表组件的装饰器
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app works!';
  auth$: Observable<Auth>;
  subscription: Subscription;
  constructor(
    private dialog: MdlDialogService,
    private router: Router,
    private store$: Store<AppState>
  ) {
    this.auth$ = this.store$.select('auth');
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

  ngOnInit(){

  }

  logout() {
    this.store$.dispatch({type:LOGOUT})
    this.router.navigate(['/'])
  }



}
