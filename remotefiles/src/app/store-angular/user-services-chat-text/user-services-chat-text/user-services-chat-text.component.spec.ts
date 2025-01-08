import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserServicesChatTextComponent } from './user-services-chat-text.component';

describe('UserServicesChatTextComponent', () => {
  let component: UserServicesChatTextComponent;
  let fixture: ComponentFixture<UserServicesChatTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserServicesChatTextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserServicesChatTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
