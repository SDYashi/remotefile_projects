import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogSearchingTitlesComponent } from './blog-searching-titles.component';

describe('BlogSearchingTitlesComponent', () => {
  let component: BlogSearchingTitlesComponent;
  let fixture: ComponentFixture<BlogSearchingTitlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogSearchingTitlesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogSearchingTitlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
