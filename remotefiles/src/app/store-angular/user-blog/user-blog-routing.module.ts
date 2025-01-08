import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserBlogsComponent } from './user-blogs/user-blogs.component';

const routes: Routes = [
  {
    path: '',
    component: UserBlogsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserBlogRoutingModule { }
