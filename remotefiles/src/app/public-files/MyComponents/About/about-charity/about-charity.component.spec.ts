import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutCharityComponent } from './about-charity.component';

describe('AboutCharityComponent', () => {
  let component: AboutCharityComponent;
  let fixture: ComponentFixture<AboutCharityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutCharityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutCharityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
