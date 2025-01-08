import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicfilesLoadersComponent } from './publicfiles-loaders.component';
import { PublicHomeComponent } from './MyComponents/home/public-home/public-home.component';
import { AboutUsComponent } from './MyComponents/About/about-us/about-us.component';
import { AboutMissionComponent } from './MyComponents/About/about-mission/about-mission.component';

const routes: Routes = [
  {
    path:'public-files',component:PublicfilesLoadersComponent,children: [
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path:'home', component:PublicHomeComponent},
      { path:'about-us', component:AboutUsComponent},
      { path: 'about-mission', component: AboutMissionComponent },  
    ]
  },



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicFilesRoutingModule { }
