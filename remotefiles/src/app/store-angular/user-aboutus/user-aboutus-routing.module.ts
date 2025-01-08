import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserAboutUsComponent } from './user-about-us/user-about-us.component';

const routes: Routes = [
  {
    path: '',
    component: UserAboutUsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserAboutusRoutingModule { }
