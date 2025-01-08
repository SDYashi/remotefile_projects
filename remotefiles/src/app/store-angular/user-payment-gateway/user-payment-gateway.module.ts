import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserPaymentGatewayRoutingModule } from './user-payment-gateway-routing.module';
import { UserPaymentGatewayComponent } from './user-payment-gateway/user-payment-gateway.component';


@NgModule({
  declarations: [
    UserPaymentGatewayComponent
  ],
  imports: [
    CommonModule,
    UserPaymentGatewayRoutingModule
  ]
})
export class UserPaymentGatewayModule { }
