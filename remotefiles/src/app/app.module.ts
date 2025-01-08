import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PublicFilesModule } from './public-files/public-files.module';
import { MyusersFilesModule } from './myusers-files/myusers-files.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    PublicFilesModule,
    MyusersFilesModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
