import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserServicecsFilesKeyNoComponent } from './user-servicecs-files-key-no/user-servicecs-files-key-no.component';

const routes: Routes = [
  {
    path: '',
    component: UserServicecsFilesKeyNoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserServicesFilesKeyNoRoutingModule { }
