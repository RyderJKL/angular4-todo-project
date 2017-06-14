import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http'
import {Observable} from 'rxjs/Observable'



@Component({
  selector: 'app-rxjs-playground',
  templateUrl: './rxjs-playground.component.html',
  styleUrls: ['./rxjs-playground.component.css']
})
export class RxjsPlaygroundComponent implements OnInit {


  constructor(
    private http: Http,
  ) { }

  ngOnInit() {
    let base_api = 'https://api.github.com/search/repositories?sort=stars&order=desc&q=123';
    let  demo = document.querySelector('.demo')
    let source = Observable.fromEvent<KeyboardEvent>(demo,'click')
    let getData = this.http.get(base_api).map((res:any)=>res.json());
    let example = source.mergeMap(
      (e:any)=>getData,
      (e,res,eIndex,resIndex)=>res.total_count,
      3
    );
    example.subscribe((value)=>console.log(value));

  }


}
