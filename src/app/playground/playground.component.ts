import { Component, OnInit,AfterViewInit,Inject,AfterContentInit,ElementRef,ViewChild} from '@angular/core';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/scan'
import 'rxjs/add/operator/filter'
import 'rxjs/add/operator/throttleTime'


@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css']
})
export class PlaygroundComponent implements OnInit {

  // @ViewChild('myname') input;

  constructor(
    private el: ElementRef,
  ) {


  }

  ngAfterViewInit() {
    let input$ = Observable.fromEvent<KeyboardEvent>(this.el.nativeElement.querySelector('#play-jack'),'input')
      .map((e:any) => e.target.value)
      .filter(value => value.length >=1)
      .throttleTime(100)
      .distinctUntilChanged()
    input$.subscribe(next =>
      console.log(next),
        error => console.log(error)
    )
  }

  ngAfterContentInit(){
    console.log('content')
  }

  ngOnInit() {
    // console.log()


  }


}
