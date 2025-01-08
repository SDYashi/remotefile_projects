import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserContactUsComponent } from './user-contact-us/user-contact-us.component';

const routes: Routes = [
  {
    path: '',
    component: UserContactUsComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserContactsRoutingModule { }
