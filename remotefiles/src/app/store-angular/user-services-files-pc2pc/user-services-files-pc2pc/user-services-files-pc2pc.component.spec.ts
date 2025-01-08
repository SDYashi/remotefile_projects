import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserServicesFilesPc2pcComponent } from './user-services-files-pc2pc.component';

describe('UserServicesFilesPc2pcComponent', () => {
  let component: UserServicesFilesPc2pcComponent;
  let fixture: ComponentFixture<UserServicesFilesPc2pcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserServicesFilesPc2pcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserServicesFilesPc2pcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
