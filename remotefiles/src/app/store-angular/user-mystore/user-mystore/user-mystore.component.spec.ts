import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMystoreComponent } from './user-mystore.component';

describe('UserMystoreComponent', () => {
  let component: UserMystoreComponent;
  let fixture: ComponentFixture<UserMystoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserMystoreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserMystoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
