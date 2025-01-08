import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoreComponentsLoadersComponent } from './store-components-loaders.component';;

const routes: Routes = [
  {
    path: '',component:StoreComponentsLoadersComponent,
    children: [
      { path: 'aboutus', loadChildren: () => import('../store-angular/user-aboutus/user-aboutus-routing.module').then(m => m.UserAboutusRoutingModule) },
      { path: 'account', loadChildren: () => import('../store-angular/user-account/user-account-routing.module').then(m => m.UserAccountRoutingModule) },
      { path: 'blogs', loadChildren: () => import('../store-angular/user-blog/user-blog-routing.module').then(m => m.UserBlogRoutingModule) },
      { path: 'contactus', loadChildren: () => import('../store-angular/user-contacts/user-contacts-routing.module').then(m => m.UserContactsRoutingModule) },
      { path: 'download', loadChildren: () => import('../store-angular/user-downloads/user-downloads-routing.module').then(m => m.UserDownloadsRoutingModule) },
      { path: 'mystore', loadChildren: () => import('../store-angular/user-mystore/user-mystore-routing.module').then(m => m.UserMystoreRoutingModule) },
      { path: 'paymentgateway', loadChildren: () => import('../store-angular/user-payment-gateway/user-payment-gateway-routing.module').then(m => m.UserPaymentGatewayRoutingModule) },
      { path: 'support', loadChildren: () => import('../store-angular/user-support/user-support-routing.module').then(m => m.UserSupportRoutingModule) },
      { path: 'services', loadChildren: () => import('../store-angular/user-services/user-services.module').then(m => m.UserServicesModule) },
    ]
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoreAngularRoutingModule { }
