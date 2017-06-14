import { Component, OnInit,ElementRef} from '@angular/core';

import {Http,Response,Headers} from '@angular/http'
import {Observable} from 'rxjs/Rx'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/filter'
import {subscribeOn} from "rxjs/operator/subscribeOn";
@Component({
  selector: 'app-github-search',
  templateUrl: './github-search.component.html',
  styleUrls: ['./github-search.component.css']
})
export class GithubSearchComponent implements OnInit {

  private base_api = 'https://api.github.com/search/repositories?sort=stars&order=desc&q=';
  private searchText : String = '';
  private repos : any;


  constructor(
    private http: Http,
    private el: ElementRef
  ) {

  }

  ngOnInit() {
    // this.moveDemo()

    this.getSuggestList();
  }

  getRepo(item):Observable<any> {
    const url = `${this.base_api}${item}`
    return this.http.get(url)
      .map(res => res.json())
  }

    getSuggestList():void {
    let searchInput = document.querySelector('#inputSearch');
    let click$ = Observable.fromEvent<KeyboardEvent>(searchInput,'click');

    click$.map((e:any)=>this.searchText)


    let input$ = Observable.fromEvent(searchInput,'keypress')
    // 为 fromEvent 指定 <KeyboardEvent> 范型
      .debounceTime(400)
      // 去除抖动，若 100ms 内连续触发 keyup 事件，则不会继续往下处理

      /*
       * 不断打字时会连续不断触发异步请求，占用资源影响体验
       * */

      .distinctUntilChanged()
      // 对于相邻事件，如果它们的返回值一样，则只要取一个（重复事件中的第一个）

      /*如果相邻的 keyup 事件触发时 input 的值一样，
       *也就是说按下了不改变 value 的按键（比如方向键），
       *会重复触发一样的异步事件
       */

      .map((ev:any) => this.searchText.trim())
      // 将 map 的输入参数的类型指定的 any
      .filter(text => !!text)
      // 通过 map 和 filter 筛选出合法的输入值
      // .do(value => console.log(value))
      // do 暂停一下，输出获得的值
      .switch()
        // switchMap,当 Observable 触发某个事件，返回新的 Observable 时，将取消之前触发的事件，并且不再关心返回结果的处理，只监视当前这一个。
        /*
         * 发出多个异步事件之后，每个事件所耗费的时间不一定相同。
         * 如果前一个异步所用时间较后一个长，
         * 那么当它最终返回结果时，有可能把后面的异步率先返回的结果覆盖
         *
         * */
      // .subscribe(value=>console.log(value))
  }
}
