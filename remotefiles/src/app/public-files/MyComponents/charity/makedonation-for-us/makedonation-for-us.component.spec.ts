import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakedonationForUsComponent } from './makedonation-for-us.component';

describe('MakedonationForUsComponent', () => {
  let component: MakedonationForUsComponent;
  let fixture: ComponentFixture<MakedonationForUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MakedonationForUsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MakedonationForUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
