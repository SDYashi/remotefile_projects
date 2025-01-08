import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserServicecsFilesKeyNoComponent } from './user-servicecs-files-key-no.component';

describe('UserServicecsFilesKeyNoComponent', () => {
  let component: UserServicecsFilesKeyNoComponent;
  let fixture: ComponentFixture<UserServicecsFilesKeyNoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserServicecsFilesKeyNoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserServicecsFilesKeyNoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
