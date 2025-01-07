import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilesViaFileNoComponent } from './files-via-file-no.component';

describe('FilesViaFileNoComponent', () => {
  let component: FilesViaFileNoComponent;
  let fixture: ComponentFixture<FilesViaFileNoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilesViaFileNoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilesViaFileNoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
