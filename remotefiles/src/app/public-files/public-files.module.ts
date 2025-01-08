import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicFilesRoutingModule } from './public-files-routing.module';
import { UserRegisterComponent } from './MyComponents/UserAccount/user-register/user-register.component';
import { UserLoginComponent } from './MyComponents/UserAccount/user-login/user-login.component';
import { UserPasswordResetComponent } from './MyComponents/UserAccount/user-password-reset/user-password-reset.component';
import { AboutUsComponent } from './MyComponents/About/about-us/about-us.component';
import { AboutMissionComponent } from './MyComponents/About/about-mission/about-mission.component';
import { AboutCharityComponent } from './MyComponents/About/about-charity/about-charity.component';
import { AboutDonnersComponent } from './MyComponents/About/about-donners/about-donners.component';
import { AboutAchievementsComponent } from './MyComponents/About/about-achievements/about-achievements.component';
import { BlogDashboardComponent } from './MyComponents/Blogs/blog-dashboard/blog-dashboard.component';
import { BlogAddNewTopicsComponent } from './MyComponents/Blogs/blog-add-new-topics/blog-add-new-topics.component';
import { BlogCategorywiseListComponent } from './MyComponents/Blogs/blog-categorywise-list/blog-categorywise-list.component';
import { BlogSearchingTitlesComponent } from './MyComponents/Blogs/blog-searching-titles/blog-searching-titles.component';
import { BlogHomeComponent } from './MyComponents/Blogs/blog-home/blog-home.component';
import { ContactUsComponent } from './MyComponents/Contact/contact-us/contact-us.component';
import { ShareExperienceComponent } from './MyComponents/Contact/share-experience/share-experience.component';
import { ShareFeedbackComponent } from './MyComponents/Contact/share-feedback/share-feedback.component';
import { PublicStoreComponent } from './MyComponents/Store/public-store/public-store.component';
import { PublicHomeComponent } from './MyComponents/home/public-home/public-home.component';
import { PublicDownloadComponent } from './MyComponents/download/public-download/public-download.component';
import { ServicesHomeComponent } from './MyComponents/services/services-home/services-home.component';
import { ServicesChatTextComponent } from './MyComponents/services/services-chat-text/services-chat-text.component';
import { ServicesFilesCloudDriveComponent } from './MyComponents/services/services-files-cloud-drive/services-files-cloud-drive.component';
import { ServicesFilesViaEmailComponent } from './MyComponents/services/services-files-via-email/services-files-via-email.component';
import { ServicesFilesViaKeyNoComponent } from './MyComponents/services/services-files-via-key-no/services-files-via-key-no.component';
import { ServicesFilesViaPc2pcComponent } from './MyComponents/services/services-files-via-pc2pc/services-files-via-pc2pc.component';
import { ServicesFilesViaSmsLinkComponent } from './MyComponents/services/services-files-via-sms-link/services-files-via-sms-link.component';
import { SupportHomeComponent } from './MyComponents/support/support-home/support-home.component';
import { SupportFAQComponent } from './MyComponents/support/support-faq/support-faq.component';
import { PublicfilesLoadersComponent } from './publicfiles-loaders.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    UserRegisterComponent,
    UserLoginComponent,
    UserPasswordResetComponent,
    AboutUsComponent,
    AboutMissionComponent,
    AboutCharityComponent,
    AboutDonnersComponent,
    AboutAchievementsComponent,
    BlogDashboardComponent,
    BlogAddNewTopicsComponent,
    BlogCategorywiseListComponent,
    BlogSearchingTitlesComponent,
    BlogHomeComponent,
    ContactUsComponent,
    ShareExperienceComponent,
    ShareFeedbackComponent,
    PublicStoreComponent,
    PublicHomeComponent,
    PublicDownloadComponent,
    ServicesHomeComponent,
    ServicesChatTextComponent,
    ServicesFilesCloudDriveComponent,
    ServicesFilesViaEmailComponent,
    ServicesFilesViaKeyNoComponent,
    ServicesFilesViaPc2pcComponent,
    ServicesFilesViaSmsLinkComponent,
    SupportHomeComponent,
    SupportFAQComponent,
    PublicfilesLoadersComponent
  ],
  imports: [
    CommonModule,
    PublicFilesRoutingModule,
    FormsModule,
    RouterModule,
  ]
})
export class PublicFilesModule { }
