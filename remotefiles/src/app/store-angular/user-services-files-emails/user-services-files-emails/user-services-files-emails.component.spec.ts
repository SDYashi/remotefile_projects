import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserServicesFilesEmailsComponent } from './user-services-files-emails.component';

describe('UserServicesFilesEmailsComponent', () => {
  let component: UserServicesFilesEmailsComponent;
  let fixture: ComponentFixture<UserServicesFilesEmailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserServicesFilesEmailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserServicesFilesEmailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
