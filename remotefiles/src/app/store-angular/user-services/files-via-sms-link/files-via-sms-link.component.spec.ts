import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilesViaSmsLinkComponent } from './files-via-sms-link.component';

describe('FilesViaSmsLinkComponent', () => {
  let component: FilesViaSmsLinkComponent;
  let fixture: ComponentFixture<FilesViaSmsLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilesViaSmsLinkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilesViaSmsLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
