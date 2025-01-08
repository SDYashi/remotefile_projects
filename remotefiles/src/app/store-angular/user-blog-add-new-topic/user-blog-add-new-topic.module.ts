import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserBlogAddNewTopicRoutingModule } from './user-blog-add-new-topic-routing.module';
import { UserBlogAddNewTopicComponent } from './user-blog-add-new-topic/user-blog-add-new-topic.component';


@NgModule({
  declarations: [
    UserBlogAddNewTopicComponent
  ],
  imports: [
    CommonModule,
    UserBlogAddNewTopicRoutingModule
  ]
})
export class UserBlogAddNewTopicModule { }
