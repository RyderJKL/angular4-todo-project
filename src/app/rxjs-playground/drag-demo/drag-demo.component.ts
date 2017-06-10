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
    let dragDom = this.el.nativeElement.querySelector('.move-demo');
    let githubBox = this.el.nativeElement.querySelector('.github-box');
    let mouseDown$ = Observable.fromEvent<KeyboardEvent>(dragDom,'mousedown');
    let mouseMove$ = Observable.fromEvent<KeyboardEvent>(githubBox,'mousemove');
    let mouseUp$ = Observable.fromEvent<KeyboardEvent>(githubBox,'mouseup')

    mouseDown$.map(
      // 鼠标按下时开始监听 mousemove 事件
      (event:any) =>
        mouseMove$.takeUntil(mouseUp$)
      // mousemove 要在 mouseup 之后立刻结束，使用 takeUntil
      // #！ 在 mouseup 没有来到之前，返回的流，都是 mousemove 的流
    ).concatAll(/*使用 concatAll 将所有的 mousemove Observable 合并成一个*/)
      .map((event:any) => ({
        x: event.clientX,
        y: event.clientY
      })).subscribe(pos => {
      dragDom.style.left = pos.x + 'px';
      dragDom.style.top = pos.y + 'px'
    })
  }

}
