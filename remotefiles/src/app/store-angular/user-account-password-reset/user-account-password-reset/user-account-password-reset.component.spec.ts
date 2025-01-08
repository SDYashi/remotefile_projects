import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAccountPasswordResetComponent } from './user-account-password-reset.component';

describe('UserAccountPasswordResetComponent', () => {
  let component: UserAccountPasswordResetComponent;
  let fixture: ComponentFixture<UserAccountPasswordResetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserAccountPasswordResetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserAccountPasswordResetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
