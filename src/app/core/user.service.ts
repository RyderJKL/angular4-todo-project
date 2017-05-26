import { Injectable } from '@angular/core';

import {Http, Headers, Response} from '@angular/http'
import {Observable} from 'rxjs/Observable'

import {User} from '../domain/entities'
import 'rxjs/add/operator/map'

@Injectable()
export class UserService {
  private api_url = 'http://localhost:3000/users'
  private headers = new Headers(
    {'Content-Type':'application/json'}
  );
  constructor(
    private http: Http
  ) { }

  findUser(username: string): Observable<User> {
    const url = `${this.api_url}/?username=${username}`
    return this.http.get(url)
    .map(res => {
      let  users = res.json() as User[];
      console.log(users)
      return (users.length > 0 ? users[0] : null)
    })
  }

  addUser(user:User): Observable<User>{
    console.log(user)
    return this.http.post(this.api_url,JSON.stringify(user), {headers: this.headers})
    .map(res => res.json() as User)
  }

  private handleError (error: Response) {
    console.error(error)
    return Observable.throw(error.json().errot || 'Server Error')
  }

}
