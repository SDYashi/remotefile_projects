import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicfilesLoadersComponent } from './publicfiles-loaders.component';
import { PublicHomeComponent } from './MyComponents/home/public-home/public-home.component';
import { AboutUsComponent } from './MyComponents/About/about-us/about-us.component';
import { AboutMissionComponent } from './MyComponents/About/about-mission/about-mission.component';
import { AboutDonnersComponent } from './MyComponents/About/about-donners/about-donners.component';
import { AboutCharityComponent } from './MyComponents/About/about-charity/about-charity.component';
import { AboutAchievementsComponent } from './MyComponents/About/about-achievements/about-achievements.component';
import { BlogHomeComponent } from './MyComponents/Blogs/blog-home/blog-home.component';
import { BlogDashboardComponent } from './MyComponents/Blogs/blog-dashboard/blog-dashboard.component';
import { BlogAddNewTopicsComponent } from './MyComponents/Blogs/blog-add-new-topics/blog-add-new-topics.component';
import { BlogSearchingTitlesComponent } from './MyComponents/Blogs/blog-searching-titles/blog-searching-titles.component';
import { BlogCategorywiseListComponent } from './MyComponents/Blogs/blog-categorywise-list/blog-categorywise-list.component';
import { ContactUsComponent } from './MyComponents/Contact/contact-us/contact-us.component';
import { ShareFeedbackComponent } from './MyComponents/Contact/share-feedback/share-feedback.component';
import { PublicDownloadComponent } from './MyComponents/download/public-download/public-download.component';
import { PublicDownloadGetfilesComponent } from './MyComponents/download/public-download-getfiles/public-download-getfiles.component';
import { PublicStoreComponent } from './MyComponents/Store/public-store/public-store.component';
import { SupportHomeComponent } from './MyComponents/support/support-home/support-home.component';
import { SupportFAQComponent } from './MyComponents/support/support-faq/support-faq.component';
import { UserLoginComponent } from './MyComponents/UserAccount/user-login/user-login.component';
import { UserRegisterComponent } from './MyComponents/UserAccount/user-register/user-register.component';
import { UserPasswordResetComponent } from './MyComponents/UserAccount/user-password-reset/user-password-reset.component';
import { ServicesHomeComponent } from './MyComponents/services/services-home/services-home.component';
import { CharityHomeComponent } from './MyComponents/charity/charity-home/charity-home.component';
import { MakedonationForUsComponent } from './MyComponents/charity/makedonation-for-us/makedonation-for-us.component';

const routes: Routes = [
  {
    path: 'public',
    component: PublicfilesLoadersComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: PublicHomeComponent },
      { path: 'about-us', component: AboutUsComponent },
      { path: 'contacts-us', component: ContactUsComponent },
      { path: 'blogs', component: BlogHomeComponent },
      { path: 'downloads', component: PublicDownloadComponent },
      { path: 'join-us', component: UserRegisterComponent },
      { path: 'login', component: UserLoginComponent },
      { path: 'about-mission', component: AboutMissionComponent },
      { path: 'about-donners', component: AboutDonnersComponent },
      { path: 'about-charity', component: AboutCharityComponent },
      { path: 'about-achievements', component: AboutAchievementsComponent },
      { path: 'blogs-dashboard', component: BlogDashboardComponent },
      { path: 'blogs-add-new-topics', component: BlogAddNewTopicsComponent },
      { path: 'blogs-searching-titles', component: BlogSearchingTitlesComponent },
      { path: 'blogs-category-wise-list', component: BlogCategorywiseListComponent },
      { path: 'contacts-share-feedback', component: ShareFeedbackComponent },
      { path: 'downloads', component: PublicDownloadComponent },
      { path: 'downloads-getfiles', component: PublicDownloadGetfilesComponent },
      { path: 'public-store', component: PublicStoreComponent },
      { path: 'support', component: SupportHomeComponent },
      { path: 'support-faq', component: SupportFAQComponent },
      { path: 'login', component: UserLoginComponent },
      { path: 'join-us', component: UserRegisterComponent },
      { path: 'password-reset', component: UserPasswordResetComponent },
      { path: 'services', component: ServicesHomeComponent },
      { path: 'services-chatroom', component: ServicesHomeComponent },
      { path: 'services-files-drive', component: ServicesHomeComponent },
      { path: 'services-files-email', component: ServicesHomeComponent },
      { path: 'services-files-sms', component: ServicesHomeComponent },
      { path: 'services-files-key-no', component: ServicesHomeComponent },
      { path: 'services-files-pc2pc', component: ServicesHomeComponent },
      { path: 'charity', component: CharityHomeComponent },
      { path: 'charity-makedonation-forus', component: MakedonationForUsComponent },
      { path: 'charity-makedonation-forcharity', component: ServicesHomeComponent },
      { path: 'charity-welfaire-donner-list', component: ServicesHomeComponent },
      { path: 'charity-welfaire-acheivements', component: ServicesHomeComponent },
      { path: 'charity-welfaire-photo-gallary', component: ServicesHomeComponent },
    ],
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicFilesRoutingModule { }
