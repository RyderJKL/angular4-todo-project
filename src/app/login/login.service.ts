import { Injectable } from '@angular/core';
import {IHttpService} from '../core/iHttp.service'
import {RequestMethod} from '@angular/http'
import {Router} from '@angular/router'
import {environment} from '../../environments/environment'
@Injectable()
export class LoginService {

  constructor(
    private iHttpService: IHttpService,
    private router: Router
  ) { }

  /*
  * 获取展示二维码需要的 state，appid 参数
  * @returns {Observable<R|T>}
  * */
  getQRCode():any {
    const url = environment.PROJECT_NAME + "/v2/weixinlogin/getAppIdNew";
    return this.iHttpService.httpServer(url,{},RequestMethod.Post);
  }

  /**
   * 管理微信用户和系统用户
   * 发送微信返回的state和code给后台进行用户验证，
   * 如果是已绑定用户，则直接跳转到默认页面；
   * 如果是未绑定的用户，则需要输入用户输入验证码绑定；
   */
  linkWXandProject(_code, _state): any {
    const url = environment.PROJECT_NAME + "/v2/weixinlogin/weixinLoginCallBackNew";
    this.iHttpService.httpServer(url,{code:_code, state:_state},RequestMethod.Post)
  }


  /*
  * 首次登录需要输入验证信息
  * */
  verification(_code,_openid):any{
    const url = environment.PROJECT_NAME + "/v2/weixinlogin/verificationNew";
    return this.iHttpService.httpServer(url,{code:_code,openid:_openid},RequestMethod.Post)
  }

  setSession(_session):void {
    window.localStorage.setItem('projectLogined','true');
    window.localStorage.token = _session.token;
  }

  /**
   * 密码帐号登录
   * @param _username
   * @param _password
   * @return {Observerable<R|T>}
   */

  loginByPassword(_username:string,_password:string):any{
    console.log(environment.PROJECT_NAME)
    let url = environment.PROJECT_NAME + "api/v1/auth/login";
    return this.iHttpService.httpServer(url,{user:_username,password:_password,deviceType:'web'},RequestMethod.Post);
  }

  loginOut():void{
    window.localStorage.removeItem('token')
    this.router.navigate(['/login'])
  }
}
