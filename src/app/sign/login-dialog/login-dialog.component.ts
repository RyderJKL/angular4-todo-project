import { Component, OnDestroy,ViewChild } from '@angular/core';

import {trigger,
  state,
  style,
  animate,
  transition} from '@angular/animations'

import {FormBuilder,FormGroup,Validators} from '@angular/forms'
import {MdlTextFieldComponent,MdlDialogReference} from '@angular-mdl/core'

import {AuthService} from '../../core/auth.service'

import {Image} from '../../domain/entities'
import {BingBackGroundService} from '../bing-background.service'

import {Subscription} from 'rxjs/Subscription'

import {Store} from '@ngrx/store'
import {AppState,Auth} from '../../domain/state'

import {Observable} from 'rxjs/Observable'

import 'rxjs/add/operator/filter'

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.css'],
  providers: [BingBackGroundService],
  animations: [
    trigger('loginState', [
      state('inactive', style({
        transform: 'scale(1)'
      })),
      state('active', style({
        transform: 'scale(1.1)'
      })),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out'))
    ])
  ]
})
export class LoginDialogComponent implements OnDestroy{

  @ViewChild('firstElement') private inputElement: MdlTextFieldComponent;
  public processingLogin : boolean = false;
  public loginBtnState = 'inactive';
  public loginForm : FormGroup;
  public slides : Image [] = [];
  public photo = '';
  public subscription : Subscription;
  private loading: boolean = false;
  private auth$: Observable<Auth>;
  constructor(
    private fb: FormBuilder,
    private dialog: MdlDialogReference,
    private authService: AuthService,
    private bingService: BingBackGroundService,
    private store$: Store<AppState>
  ) {
    this.auth$ = this.store$.select('auth')
    this.subscription = this.bingService.getImageUrl()
    .subscribe( (images: Image []) => {
      this.slides = [...images];
      this.rotateImages(this.slides)
    })

    this.createForm()
    this.dialog.onVisible().subscribe(() => this.inputElement.setFocus())
  }

  ngOnDestroy() {

  }

  rotateImages(arr: Image[]) {
    let len = arr.length;
    let  i = 0;
    setInterval(()=>{
      i = (i + 1) % len;
      this.photo = this.slides[i].contentUrl;
    },2000)
  }

  private  createForm() {
    this.loginForm = this.fb.group({
      username: [
        '',
      ],
      password: [
        '',
      ]
    })
  }
  private  toggleLoginBtnState(state:boolean) {
    this.loginBtnState = state? 'active' : 'inactive'
  }

  private login() {
    // this.auth$.map(auth => {
    //   this.loading = auth.loading
    // });
    this.loading = true;
    let username : string = this.loginForm.get('username').value.trim();
    let password : string = this.loginForm.get('password').value.trim();
    this.authService.loginWithCredentials(username,password);
    // this.dialog.hide()
  }
}
