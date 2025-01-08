import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserBlogSearchbyTitlesComponent } from './user-blog-searchby-titles/user-blog-searchby-titles.component';

const routes: Routes = [
  {
    path: '',
    component: UserBlogSearchbyTitlesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserBlogSearchbyTitlesRoutingModule { }
