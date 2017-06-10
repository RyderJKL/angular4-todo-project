import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsPlaygroundComponent } from './rxjs-playground.component';

describe('RxjsPlaygroundComponent', () => {
  let component: RxjsPlaygroundComponent;
  let fixture: ComponentFixture<RxjsPlaygroundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxjsPlaygroundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsPlaygroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
