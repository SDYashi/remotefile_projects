import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SBlogsComponent } from './s-blogs.component';

describe('SBlogsComponent', () => {
  let component: SBlogsComponent;
  let fixture: ComponentFixture<SBlogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SBlogsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SBlogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
