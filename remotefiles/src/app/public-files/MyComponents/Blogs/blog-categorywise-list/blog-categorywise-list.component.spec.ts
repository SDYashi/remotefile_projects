import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogCategorywiseListComponent } from './blog-categorywise-list.component';

describe('BlogCategorywiseListComponent', () => {
  let component: BlogCategorywiseListComponent;
  let fixture: ComponentFixture<BlogCategorywiseListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogCategorywiseListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogCategorywiseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
