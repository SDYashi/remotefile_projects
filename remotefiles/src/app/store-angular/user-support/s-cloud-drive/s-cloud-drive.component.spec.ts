import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SCloudDriveComponent } from './s-cloud-drive.component';

describe('SCloudDriveComponent', () => {
  let component: SCloudDriveComponent;
  let fixture: ComponentFixture<SCloudDriveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SCloudDriveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SCloudDriveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
