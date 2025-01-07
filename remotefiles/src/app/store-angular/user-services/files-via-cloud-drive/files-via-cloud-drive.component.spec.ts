import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilesViaCloudDriveComponent } from './files-via-cloud-drive.component';

describe('FilesViaCloudDriveComponent', () => {
  let component: FilesViaCloudDriveComponent;
  let fixture: ComponentFixture<FilesViaCloudDriveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilesViaCloudDriveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilesViaCloudDriveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
