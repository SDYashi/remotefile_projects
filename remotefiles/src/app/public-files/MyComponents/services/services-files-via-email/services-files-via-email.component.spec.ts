import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesFilesViaEmailComponent } from './services-files-via-email.component';

describe('ServicesFilesViaEmailComponent', () => {
  let component: ServicesFilesViaEmailComponent;
  let fixture: ComponentFixture<ServicesFilesViaEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicesFilesViaEmailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicesFilesViaEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
