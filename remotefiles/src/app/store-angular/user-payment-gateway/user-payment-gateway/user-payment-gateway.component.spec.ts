import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPaymentGatewayComponent } from './user-payment-gateway.component';

describe('UserPaymentGatewayComponent', () => {
  let component: UserPaymentGatewayComponent;
  let fixture: ComponentFixture<UserPaymentGatewayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserPaymentGatewayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserPaymentGatewayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
