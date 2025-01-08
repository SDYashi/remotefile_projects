import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogAddNewTopicsComponent } from './blog-add-new-topics.component';

describe('BlogAddNewTopicsComponent', () => {
  let component: BlogAddNewTopicsComponent;
  let fixture: ComponentFixture<BlogAddNewTopicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogAddNewTopicsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogAddNewTopicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
