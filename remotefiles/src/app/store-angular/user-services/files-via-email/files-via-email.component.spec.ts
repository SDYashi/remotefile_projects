import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilesViaEmailComponent } from './files-via-email.component';

describe('FilesViaEmailComponent', () => {
  let component: FilesViaEmailComponent;
  let fixture: ComponentFixture<FilesViaEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilesViaEmailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilesViaEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
