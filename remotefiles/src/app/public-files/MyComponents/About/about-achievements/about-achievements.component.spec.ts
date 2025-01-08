import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutAchievementsComponent } from './about-achievements.component';

describe('AboutAchievementsComponent', () => {
  let component: AboutAchievementsComponent;
  let fixture: ComponentFixture<AboutAchievementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutAchievementsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutAchievementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
