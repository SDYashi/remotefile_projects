import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserBlogRoutingModule } from './user-blog-routing.module';
import { UserBlogsComponent } from './user-blogs/user-blogs.component';


@NgModule({
  declarations: [
  
    UserBlogsComponent
  ],
  imports: [
    CommonModule,
    UserBlogRoutingModule
  ]
})
export class UserBlogModule { }
