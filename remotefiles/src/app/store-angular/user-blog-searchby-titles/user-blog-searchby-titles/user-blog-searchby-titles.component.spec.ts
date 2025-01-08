import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserBlogSearchbyTitlesComponent } from './user-blog-searchby-titles.component';

describe('UserBlogSearchbyTitlesComponent', () => {
  let component: UserBlogSearchbyTitlesComponent;
  let fixture: ComponentFixture<UserBlogSearchbyTitlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserBlogSearchbyTitlesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserBlogSearchbyTitlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
