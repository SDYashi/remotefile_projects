import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelfareAchievementsComponent } from './welfare-achievements.component';

describe('WelfareAchievementsComponent', () => {
  let component: WelfareAchievementsComponent;
  let fixture: ComponentFixture<WelfareAchievementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WelfareAchievementsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WelfareAchievementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
