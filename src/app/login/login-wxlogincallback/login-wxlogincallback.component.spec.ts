import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginWxlogincallbackComponent } from './login-wxlogincallback.component';

describe('LoginWxlogincallbackComponent', () => {
  let component: LoginWxlogincallbackComponent;
  let fixture: ComponentFixture<LoginWxlogincallbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginWxlogincallbackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginWxlogincallbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
