import {
  Component,
  ViewChild,
  HostListener,
  OnInit
} from '@angular/core';

import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms'

import {Router} from '@angular/router'
import {AuthService} from '../../core/auth.service'
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
  public processingRegister: boolean = false;
  public subscription: Subscription;
  public statusMessage: string = 'fsadfa';

  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private router: Router,
              private dialog: MdlDialogReference) {
    this.createForm();
    this.dialog.onVisible().subscribe(() => {
      this.inputElement.setFocus()
    })
  }


  ngOnInit() {

  }

  createForm() {
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      passwords: this.fb.group({
        password: [
          '',
          Validators.required
        ],
        repeatPassword: ['', Validators.required]
      })
    })
  }

  private register(): void {
    this.processingRegister = true;
    this.authService.register(
      this.registerForm.get('username').value,
      this.registerForm.get('passwords').get('password').value
    )

    this.processingRegister = false;
    this.statusMessage = 'reigstering ...'
    setTimeout(() => {
      this.dialog.hide()
      console.log('fuck')
      // this.router.navigate(['todo']);
    }, 500)

  }

  @HostListener('keydown.esc')
  public onEsc(): void {
    console.log('dfsfsdfs')
    this.dialog.hide()
  }
}


