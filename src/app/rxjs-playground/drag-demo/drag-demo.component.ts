import { Component, OnInit,ElementRef } from '@angular/core';

import {Observable} from 'rxjs/Observable'

@Component({
  selector: 'app-drag-demo',
  templateUrl: './drag-demo.component.html',
  styleUrls: ['./drag-demo.component.css']
})
export class DragDemoComponent implements OnInit {

  constructor(
    private el:ElementRef
  ) { }

  ngOnInit(){
    let dragDom = this.el.nativeElement.querySelector('#video');
    let doc = document.getElementsByTagName("body");
    let container1 = document.getElementById('container')
    let scroll$ = Observable.fromEvent<KeyboardEvent>(doc,'mousewheel');
    let mouseDown$ = Observable.fromEvent<KeyboardEvent>(dragDom,'mousedown');
    let mouseMove$ = Observable.fromEvent<KeyboardEvent>(doc,'mousemove');
    let mouseUp$ = Observable.fromEvent<KeyboardEvent>(doc,'mouseup')


    scroll$
      .throttleTime(100)
      .map((e:any) => container1.getBoundingClientRect().bottom<0)
      .subscribe((bool)=> {
      if(bool) {
        console.log('yes')
        dragDom.classList.add('video-box-fixed')
      } else {
        if(dragDom.classList.contains('video-box-fixed')) {
          dragDom.classList.remove('video-box-fixed')
        }
      }
    })

    let validateValue = (value,min,max) => Math.min(Math.max(value,min),max);
    // 解释下： 在拖拽的时候，不希望目标元素超出可视区域之外。这段代码的意思是，先取最小值中的最大值，再取最大值中的最小值。那么最后的结果就是在[min,max]。



    mouseDown$
      .filter((e:any) => dragDom.classList.contains('video-box-fixed'))
      .map(
      // 鼠标按下时开始监听 mousemove 事件
      (event:any) =>{
        console.log(event)
        console.log(dragDom.getBoundingClientRect().left)
        return mouseMove$.takeUntil(mouseUp$)}
      // mousemove 要在 mouseup 之后立刻结束，使用 takeUntil
    ).concatAll(/*
    因为 observable(mouseDown) 发射出来的是 observable(mouseMove)，所以需要使用 concatAll 将所有的 mousemove Observable 转换为 mouse move 事件*/)
      .withLatestFrom(
        mouseDown$.map((e:any)=>({
          rect: e.target.getBoundingClientRect(),
          x: e.clientX,
          y: e.clientY,
          height: e.target.clientHeight,
          width: e.target.clientWidth
        })),
        (move:any,down:any) => {
        return {
          x: validateValue(move.clientX - (down.x-down.rect.left),0,window.innerWidth-down.width),
          y:validateValue(move.clientY - (down.y-down.rect.top),0, window.innerHeight-down.height)
        }
      })
      .subscribe(pos => {
      dragDom.style.left = pos.x + 'px';
      dragDom.style.top = pos.y + 'px'
    })
  }

}
