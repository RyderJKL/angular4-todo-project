import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginByWechatComponent } from './login-by-wechat.component';

describe('LoginByWechatComponent', () => {
  let component: LoginByWechatComponent;
  let fixture: ComponentFixture<LoginByWechatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginByWechatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginByWechatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
