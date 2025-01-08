import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserBlogsListComponent } from './user-blogs-list/user-blogs-list.component';

const routes: Routes = [
  {
    path: '',
    component: UserBlogsListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserBlogListsRoutingModule { }
