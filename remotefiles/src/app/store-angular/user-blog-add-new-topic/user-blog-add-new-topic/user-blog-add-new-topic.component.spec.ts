import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserBlogAddNewTopicComponent } from './user-blog-add-new-topic.component';

describe('UserBlogAddNewTopicComponent', () => {
  let component: UserBlogAddNewTopicComponent;
  let fixture: ComponentFixture<UserBlogAddNewTopicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserBlogAddNewTopicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserBlogAddNewTopicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
