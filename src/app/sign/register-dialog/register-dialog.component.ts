import {
  Component,
  ViewChild,
  HostListener,
  OnInit
} from '@angular/core';

import {
  FormBuilder,
  FormGroup,
  Validators, FormControl,
} from '@angular/forms'

import {Router} from '@angular/router'

import {Store} from '@ngrx/store'
import {AppState,Auth} from  '../../domain/state'
import {AuthService} from '../../core/auth.service'

import {Observable} from 'rxjs/Observable'

import {Subscription} from 'rxjs/Subscription'


import {
  MdlTextFieldComponent,
  MdlDialogReference
} from "@angular-mdl/core";
@Component({
  selector: 'app-register-dialog',
  templateUrl: './register-dialog.component.html',
  styleUrls: ['./register-dialog.component.css']
})
export class RegisterDialogComponent implements OnInit {
  @ViewChild('firstElement') private inputElement: MdlTextFieldComponent;

  public registerForm: FormGroup;
  public processingRegister: boolean = true;
  private auth$: Observable<Auth>;
  public statusMessage: string = null;

  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private dialog: MdlDialogReference,
              private store$: Store<AppState>
  ) {
    this.auth$ = this.store$.select(appState => appState.auth);
    this.createForm();
    this.dialog.onVisible().subscribe(() => {
      this.inputElement.setFocus()
    })
  }


  ngOnInit() {

  }

  private  createForm() {
    this.registerForm = this.fb.group({
      'username': ['', Validators.required],
      'passwords': this.fb.group({
        'password':['',
          Validators.required,
        ],
        'repeatPassword':['', Validators.required]
      })
    })


  }

  private register(): void {
    this.processingRegister = true;
    this.statusMessage = 'processing your registration ...';
    this.authService.register(
      this.registerForm.get('username').value,
      this.registerForm.get('passwords').get('password').value
    )

    setTimeout(() => {
      this.processingRegister = false;
      this.statusMessage = 'reigstering ...'
      this.dialog.hide()
      console.log('fuck')
    }, 5000)

  }


  get ifShowStatusBar(): boolean {
    return this.statusMessage !== null;
  }
}


