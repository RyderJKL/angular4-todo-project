/**
 * Created by onejustone on 2017/5/27.
 */
import {Injectable} from '@angular/core'
import {Http,Headers,Response} from '@angular/http'
import {Observable} from 'rxjs/Observable'
import {Image} from '../domain/entities'

@Injectable()
export class BingBackGroundService {
  imageUrl = '';

  headers = new Headers({
    'Content-Type': 'application/json',
    'Ocp-Apim-Subscription-Key': '103ee07bf85a413e8212d556b011bf13'
  })

  constructor(
    private http:Http
  ){
    const q = '美女+墙纸+高清';
    const baseUrl: string = `https://api.cognitive.microsoft.com/bing/v5.0/images/search`;
    this.imageUrl = baseUrl + `?q=${q}&count=5&mkt=zh-CN&imageType=Photo&size=Large`;
  }

  getImageUrl():Observable<Image[]>{
    return this.http.get(this.imageUrl,{headers:this.headers})
    .map(res => res.json().value as Image[])
  }

  private handleError(error:Response){
      console.error(error);
      return Observable.throw(error.json().error || 'Server error');
  }
}
