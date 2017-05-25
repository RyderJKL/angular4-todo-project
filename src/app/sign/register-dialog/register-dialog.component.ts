import {
  Component,
  ViewChild,
  HostListener,
  OnInit } from '@angular/core';

import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms'

import { Subscription } from 'rxjs/Subscription'
import {MdlTextFieldComponent, MdlDialogReference} from "@angular-mdl/core";

@Component({
  selector: 'app-register-dialog',
  templateUrl: './register-dialog.component.html',
  styleUrls: ['./register-dialog.component.css']
})
export class RegisterDialogComponent implements OnInit {
  @ViewChild('firstElement') private inputElement : MdlTextFieldComponent;

  public registerFrom : FormGroup;
  public processingRegister : boolean = true;
  public subscription : Subscription;
  public statusMessage : string = 'fsadfa';

  constructor(
    private fb: FormBuilder,
    private dialog: MdlDialogReference
  ) {
    this.createForm();
    this.dialog.onVisible().subscribe(() =>{
      this.inputElement.setFocus()
    })
  }


  ngOnInit() {

  }

  createForm() {
    this.registerFrom = this.fb.group({
     username: ['', Validators.required],
      passwords: this.fb.group({
        password: [
          '',
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(10)
        ],
        repeatPassword: ['', Validators.required]
      })
    })
  }

  private register():void {
    console.log('dsfd')
  }

  @HostListener('keydown.esc')
  public onEsc(): void {
    console.log('dfsfsdfs')
    this.dialog.hide()
  }
}


