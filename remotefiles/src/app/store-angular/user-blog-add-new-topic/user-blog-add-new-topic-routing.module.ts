import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserBlogAddNewTopicComponent } from './user-blog-add-new-topic/user-blog-add-new-topic.component';

const routes: Routes = [
  {
    path: '',
    component:UserBlogAddNewTopicComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserBlogAddNewTopicRoutingModule { }
