import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilesPcPcComponent } from './files-pc-pc.component';

describe('FilesPcPcComponent', () => {
  let component: FilesPcPcComponent;
  let fixture: ComponentFixture<FilesPcPcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilesPcPcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilesPcPcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
