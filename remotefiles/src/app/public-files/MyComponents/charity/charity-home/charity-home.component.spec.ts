import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharityHomeComponent } from './charity-home.component';

describe('CharityHomeComponent', () => {
  let component: CharityHomeComponent;
  let fixture: ComponentFixture<CharityHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharityHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharityHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
