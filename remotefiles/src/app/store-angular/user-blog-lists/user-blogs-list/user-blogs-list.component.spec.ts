import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserBlogsListComponent } from './user-blogs-list.component';

describe('UserBlogsListComponent', () => {
  let component: UserBlogsListComponent;
  let fixture: ComponentFixture<UserBlogsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserBlogsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserBlogsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
