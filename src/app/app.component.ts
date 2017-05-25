import { Component } from '@angular/core';
import { Router} from '@angular/router'
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

  constructor(
    private dialog: MdlDialogService,
    private router: Router
  ) {}

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
}
