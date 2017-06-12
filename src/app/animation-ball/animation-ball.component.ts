import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable'


@Component({
  selector: 'app-animation-ball',
  templateUrl: './animation-ball.component.html',
  styleUrls: ['./animation-ball.component.css']
})
export class AnimationBallComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    let balls = document.querySelectorAll(".ball");
    let body = document.querySelector('body');
    let mouseMove$ = Observable.fromEvent<KeyboardEvent>(body,'mousemove')
      .map((event:any)=> ({x:event.clientX,y:event.clientY}));


    function ballsMove(domArr){
      let delayTime = 600;
      domArr.forEach((item,index) =>
        mouseMove$
          .delay(delayTime * (Math.pow(0.65, index) + Math.cos(index / 4)) / 2)
        .subscribe((pos)=>{
            item.style.transform = 'translate3d(' + pos.x +'px,'+pos.y+'px,0)'
        }))
    }

    ballsMove(Array.from(balls))


  }

}
