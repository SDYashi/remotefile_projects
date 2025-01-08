import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDownloadComponent } from './user-download/user-download.component';

const routes: Routes = [
  {
    path:'',
    component:UserDownloadComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserDownloadsRoutingModule { }
