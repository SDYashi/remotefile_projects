import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserBlogRoutingModule } from './user-blog-routing.module';
import { UserBlogsComponent } from './user-blogs/user-blogs.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
  
    UserBlogsComponent
  ],
  imports: [
    CommonModule,
    UserBlogRoutingModule,
        RouterModule,
        FormsModule,
  ]
})
export class UserBlogModule { }
