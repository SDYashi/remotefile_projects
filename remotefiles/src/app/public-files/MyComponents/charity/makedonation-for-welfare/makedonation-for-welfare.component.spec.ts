import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakedonationForWelfareComponent } from './makedonation-for-welfare.component';

describe('MakedonationForWelfareComponent', () => {
  let component: MakedonationForWelfareComponent;
  let fixture: ComponentFixture<MakedonationForWelfareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MakedonationForWelfareComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MakedonationForWelfareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
