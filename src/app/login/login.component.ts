import { Component, OnInit} from '@angular/core';
import {Router} from '@angular/router'
import {LoginService} from './login.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private loginService: LoginService,
    private router:Router
  ) { }

  private username: string = '';
  private password: string = '';
  private loading: boolean = false;
  ngOnInit() {

  }

  passwordLogin():void {
    this.loading = true;
    this.loginService.loginByPassword(this.username,this.password)
      .subscribe(data => {
        if(data.resultMess == "") {
          this.loginService.setSession(data)
          setTimeout(_=> this.router.navigate(['/playground']),300)
        }else {
          console.log(data.resultMess)
        }
        setTimeout(_ => this.loading = false,400);
      })
  }
  wechatLogin(): any{
    this.router.navigate(['/login/wechat'])
  }
}
