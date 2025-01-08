import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLoginComponent } from './store-angular/user-account/user-login/user-login.component';
import { UserAddComponent } from './store-angular/user-account/user-add/user-add.component';

const routes: Routes = [
  { path: '', redirectTo: '/rfiles', pathMatch: 'full' },
  { path: '**', redirectTo: '/rfiles' }, 
  {
    path: 'rfiles',
    loadChildren: () => import('./store-angular/store-angular.module').then(m => m.StoreAngularModule)
  },
  {
    path: 'sfiles',
    loadChildren: () => import('./mystore-users/mystore-users-routing.module').then(m => m.MystoreUsersRoutingModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
