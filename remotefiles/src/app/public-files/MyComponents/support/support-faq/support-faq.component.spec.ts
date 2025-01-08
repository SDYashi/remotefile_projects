import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportFAQComponent } from './support-faq.component';

describe('SupportFAQComponent', () => {
  let component: SupportFAQComponent;
  let fixture: ComponentFixture<SupportFAQComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupportFAQComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupportFAQComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
