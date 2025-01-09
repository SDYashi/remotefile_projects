import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelfareDonnerListComponent } from './welfare-donner-list.component';

describe('WelfareDonnerListComponent', () => {
  let component: WelfareDonnerListComponent;
  let fixture: ComponentFixture<WelfareDonnerListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WelfareDonnerListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WelfareDonnerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
