import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http'
import {Observable} from 'rxjs/Observable'
import {Subject} from 'rxjs/Subject'
import {BehaviorSubject} from 'rxjs/BehaviorSubject'
import {ReplaySubject} from 'rxjs/ReplaySubject'
import {AsyncSubject} from 'rxjs/AsyncSubject';
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

    let source = Observable.interval(1000).take(4);
    let observerA = {
      next:value => console.log('A'+value),
      error:error => console.log(error),
      complete: () => console.log('completeA')
    }

    let observerB = {
      next:value => console.log('B'+value),
      error: error => console.log(error),
      complete: () => console.log('completeB')
    }
   // let subject = {
   //   observers: [],
   //   subscribe: (observer) => subject.observers.push(observer),
   //   next:(value)=>subject.observers.forEach(o => o.next(value)),
   //   error:(error) => subject.observers.forEach((o => o.error(error))),
   //   complete:() => subject.observers.forEach(o => o.complete())
   //
   // }
   //  let subject = new BehaviorSubject(0);
   //  let subject = new Subject();
   //  let subject = new ReplaySubject(2);// 重复发送最后两个元素
    let subject = new AsyncSubject();
    subject.subscribe(observerA);

    subject.next(1)
    subject.next(2)
    subject.next(3)
    subject.complete();
    setTimeout(() => subject.subscribe(observerB),4000)
  }



}
