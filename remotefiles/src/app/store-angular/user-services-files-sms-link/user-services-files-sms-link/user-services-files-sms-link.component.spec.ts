import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserServicesFilesSmsLinkComponent } from './user-services-files-sms-link.component';

describe('UserServicesFilesSmsLinkComponent', () => {
  let component: UserServicesFilesSmsLinkComponent;
  let fixture: ComponentFixture<UserServicesFilesSmsLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserServicesFilesSmsLinkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserServicesFilesSmsLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
