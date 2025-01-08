import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserBlogListsRoutingModule } from './user-blog-lists-routing.module';
import { UserBlogsListComponent } from './user-blogs-list/user-blogs-list.component';


@NgModule({
  declarations: [
    UserBlogsListComponent
  ],
  imports: [
    CommonModule,
    UserBlogListsRoutingModule
  ]
})
export class UserBlogListsModule { }
