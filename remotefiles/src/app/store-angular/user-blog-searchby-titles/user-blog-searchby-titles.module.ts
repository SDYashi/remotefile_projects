import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserBlogSearchbyTitlesRoutingModule } from './user-blog-searchby-titles-routing.module';
import { UserBlogSearchbyTitlesComponent } from './user-blog-searchby-titles/user-blog-searchby-titles.component';


@NgModule({
  declarations: [
    UserBlogSearchbyTitlesComponent
  ],
  imports: [
    CommonModule,
    UserBlogSearchbyTitlesRoutingModule
  ]
})
export class UserBlogSearchbyTitlesModule { }
