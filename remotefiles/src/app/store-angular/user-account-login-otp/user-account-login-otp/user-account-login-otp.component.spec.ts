import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAccountLoginOtpComponent } from './user-account-login-otp.component';

describe('UserAccountLoginOtpComponent', () => {
  let component: UserAccountLoginOtpComponent;
  let fixture: ComponentFixture<UserAccountLoginOtpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserAccountLoginOtpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserAccountLoginOtpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
