import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocCompressionComponent } from './doc-compression.component';

describe('DocCompressionComponent', () => {
  let component: DocCompressionComponent;
  let fixture: ComponentFixture<DocCompressionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocCompressionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocCompressionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
