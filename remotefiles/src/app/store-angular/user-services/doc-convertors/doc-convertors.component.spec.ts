import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocConvertorsComponent } from './doc-convertors.component';

describe('DocConvertorsComponent', () => {
  let component: DocConvertorsComponent;
  let fixture: ComponentFixture<DocConvertorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocConvertorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocConvertorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
