import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimationBallComponent } from './animation-ball.component';

describe('AnimationBallComponent', () => {
  let component: AnimationBallComponent;
  let fixture: ComponentFixture<AnimationBallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimationBallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimationBallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
