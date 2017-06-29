/**
 * Created by root on 17-6-17.
 */
import {Injectable} from '@angular/core'
import {Http,Request,
  BaseRequestOptions,
  RequestMethod,
  Headers,} from '@angular/http'

import {Observable} from 'rxjs'
import {Router} from '@angular/router'

@Injectable()
export class IHttpService{
  constructor(
    private http: Http,
    private router: Router
  ){}

  private options = new BaseRequestOptions();

  httpServer(url, params,type:RequestMethod){
    let headers = new Headers();
    headers.append("token",window.localStorage.getItem("token"))
    headers.append("Content-Type","application/json;charset=UTF-8");
    let req = new Request(this.options.merge({
      url:url,
      method: type,
      body:params
  }));
    return this.http.request(req)
      .map(res => res.json() || {},
          error => this.handleError(error))
      .map(this.preProcessRes.bind(this))
      .catch(this.handleError.bind(this));
  }

  private preProcessRes(res){
    return res || {};
  }

  private handleError(res){
    if (res.status === 401) {
      window.localStorage.removeItem('token');
      this.router.navigate(['/login'])
    }
    return Observable.throw(res);
  }





}
