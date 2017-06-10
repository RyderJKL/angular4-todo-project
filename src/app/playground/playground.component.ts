import { Component, OnInit,AfterViewInit,Inject,AfterContentInit,ElementRef,ViewChild} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Subscription} from 'rxjs/Subscription'

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css']
})
export class PlaygroundComponent implements OnInit {

  // @ViewChild('myname') input;

  private subscription:Subscription;

  constructor(
    private el: ElementRef,
  ) {


  }

  ngAfterViewInit() {


  }

  ngAfterContentInit(){
    console.log('content')
  }

  ngOnInit() {
    let input$ = Observable.fromEvent<KeyboardEvent>(this.el.nativeElement.querySelector('#play-jack'),'input')
      .map((e:any) => e.target.value)
      .filter(value => value.length >=1)
      .throttleTime(100)
      .distinctUntilChanged()

    this.subscription = input$.subscribe(next =>
        console.log(next),
      error => console.log(error)
    )

  }


}
