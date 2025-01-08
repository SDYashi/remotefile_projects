import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesFilesViaKeyNoComponent } from './services-files-via-key-no.component';

describe('ServicesFilesViaKeyNoComponent', () => {
  let component: ServicesFilesViaKeyNoComponent;
  let fixture: ComponentFixture<ServicesFilesViaKeyNoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicesFilesViaKeyNoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicesFilesViaKeyNoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
