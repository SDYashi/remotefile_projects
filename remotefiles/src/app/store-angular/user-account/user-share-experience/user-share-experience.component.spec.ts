import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserShareExperienceComponent } from './user-share-experience.component';

describe('UserShareExperienceComponent', () => {
  let component: UserShareExperienceComponent;
  let fixture: ComponentFixture<UserShareExperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserShareExperienceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserShareExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
