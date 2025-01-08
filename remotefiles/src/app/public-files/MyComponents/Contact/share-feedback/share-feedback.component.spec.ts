import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareFeedbackComponent } from './share-feedback.component';

describe('ShareFeedbackComponent', () => {
  let component: ShareFeedbackComponent;
  let fixture: ComponentFixture<ShareFeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShareFeedbackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShareFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
