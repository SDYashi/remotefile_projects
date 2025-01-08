import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserPaymentGatewayComponent } from './user-payment-gateway/user-payment-gateway.component';

const routes: Routes = [
  {
    path: '',
    component:UserPaymentGatewayComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserPaymentGatewayRoutingModule { }
