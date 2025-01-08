import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesFilesCloudDriveComponent } from './services-files-cloud-drive.component';

describe('ServicesFilesCloudDriveComponent', () => {
  let component: ServicesFilesCloudDriveComponent;
  let fixture: ComponentFixture<ServicesFilesCloudDriveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicesFilesCloudDriveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicesFilesCloudDriveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
