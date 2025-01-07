import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPwdResetComponent } from './user-pwd-reset.component';

describe('UserPwdResetComponent', () => {
  let component: UserPwdResetComponent;
  let fixture: ComponentFixture<UserPwdResetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserPwdResetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserPwdResetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
