import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/rfiles', pathMatch: 'full' },
  { path: '**', redirectTo: '/rfiles' }, 
  {
    path: 'rfiles',
    loadChildren: () => import('./store-angular/store-angular.module').then(m => m.StoreAngularModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
