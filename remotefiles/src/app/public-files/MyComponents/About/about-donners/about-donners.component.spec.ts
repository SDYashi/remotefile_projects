import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutDonnersComponent } from './about-donners.component';

describe('AboutDonnersComponent', () => {
  let component: AboutDonnersComponent;
  let fixture: ComponentFixture<AboutDonnersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutDonnersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutDonnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
