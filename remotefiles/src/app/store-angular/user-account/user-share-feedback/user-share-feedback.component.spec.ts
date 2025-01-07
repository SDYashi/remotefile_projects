import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserShareFeedbackComponent } from './user-share-feedback.component';

describe('UserShareFeedbackComponent', () => {
  let component: UserShareFeedbackComponent;
  let fixture: ComponentFixture<UserShareFeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserShareFeedbackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserShareFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
