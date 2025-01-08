import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesFilesViaSmsLinkComponent } from './services-files-via-sms-link.component';

describe('ServicesFilesViaSmsLinkComponent', () => {
  let component: ServicesFilesViaSmsLinkComponent;
  let fixture: ComponentFixture<ServicesFilesViaSmsLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicesFilesViaSmsLinkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicesFilesViaSmsLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
