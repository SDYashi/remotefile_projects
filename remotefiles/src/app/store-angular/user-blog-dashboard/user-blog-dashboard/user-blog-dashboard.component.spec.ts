import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserBlogDashboardComponent } from './user-blog-dashboard.component';

describe('UserBlogDashboardComponent', () => {
  let component: UserBlogDashboardComponent;
  let fixture: ComponentFixture<UserBlogDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserBlogDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserBlogDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
