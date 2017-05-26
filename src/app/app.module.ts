import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CoreModule} from './core/core.module'
import { ShareModule} from './share/share.module'
import { ReactiveFormsModule} from '@angular/forms'
import {AppRoutingModule} from './app-routing.module'
import { AppComponent } from './app.component';
import {TodoModule} from './todo/todo.module'
import {LoginDialogComponent} from "./sign/login-dialog/login-dialog.component";
import {RegisterDialogComponent} from "./sign/register-dialog/register-dialog.component";

@NgModule({
  declarations: [
    AppComponent,
    LoginDialogComponent,
    RegisterDialogComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    CoreModule,
    ShareModule,
    TodoModule,
    AppRoutingModule
  ],
  entryComponents: [LoginDialogComponent,RegisterDialogComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
