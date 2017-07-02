import { Component, OnInit } from '@angular/core';
import {LoginService} from  '../login.service'
import {Router} from '@angular/router'
import {environment} from '../../../environments/environment'
declare const WxLogin: any;
@Component({
  selector: 'app-login-by-wechat',
  templateUrl: './login-by-wechat.component.html',
  styleUrls: ['./login-by-wechat.component.css']
})
export class LoginByWechatComponent implements OnInit {

  private url :string = 'http://localhost:4200/login'
  private showPasswordBtn: boolean = false;

  constructor(
    private loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit() {
    this.loginService.getQRCode().subscribe(res => {
      const result = res.result;
      console.log(res)
      new WxLogin({
        id: 'login_container',
        appid: result.appid,
        scope: result.scope,
        redirect_uri: encodeURIComponent(environment.WX_LOGIN_BACK+'/#/login/wechatcallback'),
        // 用户允许授权后，将会重定向到redirect_uri的网址上，并且带上code和state参数
        state: result.state,
        style: 'black',
        href: ''
      })
      setTimeout(_=>{
        this.showPasswordBtn = true
      },300)
    })
  }

  loginPassword(){
    this.router.navigate(['/login'])
  }

}
