import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoreComponentsLoadersComponent } from './store-components-loaders.component';;

const routes: Routes = [
  {
    path: '',component:StoreComponentsLoadersComponent,
    children: [
      { path: 'home', loadChildren: () => import('../store-angular/user-home/user-home.module').then(m => m.UserHomeModule) },
      { path: 'aboutus', loadChildren: () => import('../store-angular/user-aboutus/user-aboutus.module').then(m => m.UserAboutusModule) },
      { path: 'blogs', loadChildren: () => import('../store-angular/user-blog/user-blog.module').then(m => m.UserBlogModule) },
      { path: 'contactus', loadChildren: () => import('../store-angular/user-contacts/user-contacts.module').then(m => m.UserContactsModule) },
      { path: 'download', loadChildren: () => import('../store-angular/user-downloads/user-downloads.module').then(m => m.UserDownloadsModule) },
      { path: 'cloudstore', loadChildren: () => import('../store-angular/user-mystore/user-mystore.module').then(m => m.UserMystoreModule) },
      { path: 'paygo', loadChildren: () => import('../store-angular/user-payment-gateway/user-payment-gateway.module').then(m => m.UserPaymentGatewayModule) },
      { path: 'support', loadChildren: () => import('../store-angular/user-support/user-support.module').then(m => m.UserSupportModule) },
      { path: 'services', loadChildren: () => import('../store-angular/user-services/user-services.module').then(m => m.UserServicesModule) },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoreAngularRoutingModule { }
