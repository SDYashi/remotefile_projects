import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserBlogDashboardComponent } from './user-blog-dashboard/user-blog-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: UserBlogDashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserBlogDashboardRoutingModule { }
