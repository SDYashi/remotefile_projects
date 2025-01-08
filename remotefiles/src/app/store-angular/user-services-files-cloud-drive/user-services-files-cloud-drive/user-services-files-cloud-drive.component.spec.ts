import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserServicesFilesCloudDriveComponent } from './user-services-files-cloud-drive.component';

describe('UserServicesFilesCloudDriveComponent', () => {
  let component: UserServicesFilesCloudDriveComponent;
  let fixture: ComponentFixture<UserServicesFilesCloudDriveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserServicesFilesCloudDriveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserServicesFilesCloudDriveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
