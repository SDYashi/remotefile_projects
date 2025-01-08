import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserServicesChatTextComponent } from './user-services-chat-text/user-services-chat-text.component';

const routes: Routes = [
  {
    path:'',
    component:UserServicesChatTextComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserServicesChatTextRoutingModule { }
