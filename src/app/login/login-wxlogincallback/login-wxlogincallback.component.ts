import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router'
import {LoginService} from '../login.service'
@Component({
  selector: 'app-login-wxlogincallback',
  templateUrl: 'login-wxlogincallback.component.html',
  styleUrls: ['login-wxlogincallback.component.css']
})
export class LoginWxlogincallbackComponent implements OnInit {

  private result: any = '';
  constructor(
    private router: Router,
    private activeRouter: ActivatedRoute,
    private loginService: LoginService
  ) { }

  ngOnInit() {
    let code = this.activeRouter.params.pluck('code');
    let state = this.activeRouter.params.pluck('state');

    if(code && state) {
       this.loginService.linkWXandProject(code, state)
         .subscribe(res => {
           this.result = res.result;
           if(res.result.first == false) {
             this.loginService.setSession(res.result.token)
             this.router.navigate(['/index'])
           }
         })
    }

  }

  verification(_authcode,_openid):void{
    this.loginService.verification(_authcode,this.result.oppenid)
      .subscribe(res => {
        if(res.success) {
          this.loginService.setSession(this.result.session);
          this.router.navigate(['/index'])
        }
      })
  }

}
