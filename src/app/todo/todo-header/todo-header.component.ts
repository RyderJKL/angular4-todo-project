import {
  Component, OnInit, Input,EventEmitter,
  ElementRef, Output
} from '@angular/core';

import {Observable} from 'rxjs/Rx'

@Component({
  selector: 'app-todo-header',
  templateUrl: './todo-header.component.html',
  styleUrls: ['./todo-header.component.css']
})
export class TodoHeaderComponent implements OnInit {

  inputValue : string = '';

  @Input() placeholder: string = 'add todo?'
  @Input() delay: number = 300;

  @Output() textChanges = new EventEmitter<string>();
  @Output() onEnterUp = new EventEmitter<string>();

  constructor(
    private elementRef: ElementRef
  ) {

    const event$ = Observable.fromEvent(elementRef.nativeElement, 'input')
    .map(() => this.inputValue)
    .filter(input => input.trim().length > 0)
    .debounceTime(this.delay)
    .distinctUntilChanged();
    event$.subscribe(input => {
      console.log(input);
      this.textChanges.emit(input)})
  }

  ngOnInit() {
  }

  enterUp(){
    if(this.inputValue.trim().length === 0) return;
    console.log(this.inputValue + 'jack')
    this.onEnterUp.emit(this.inputValue)
    this.inputValue = '';
  }
}
