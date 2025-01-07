import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserServicesRoutingModule } from './user-services-routing.module';
import { FilesPcPcComponent } from './files-pc-pc/files-pc-pc.component';
import { FilesViaEmailComponent } from './files-via-email/files-via-email.component';
import { FilesViaFileNoComponent } from './files-via-file-no/files-via-file-no.component';
import { FilesViaCloudDriveComponent } from './files-via-cloud-drive/files-via-cloud-drive.component';
import { FilesViaSmsLinkComponent } from './files-via-sms-link/files-via-sms-link.component';
import { DocConvertorsComponent } from './doc-convertors/doc-convertors.component';
import { DocCompressionComponent } from './doc-compression/doc-compression.component';
import { ChatRoomComponent } from './chat-room/chat-room.component';
import { CallAudioComponent } from './call-audio/call-audio.component';
import { CallVideoComponent } from './call-video/call-video.component';


@NgModule({
  declarations: [
    FilesPcPcComponent,
    FilesViaEmailComponent,
    FilesViaFileNoComponent,
    FilesViaCloudDriveComponent,
    FilesViaSmsLinkComponent,
    DocConvertorsComponent,
    DocCompressionComponent,
    ChatRoomComponent,
    CallAudioComponent,
    CallVideoComponent,
  ],
  imports: [
    CommonModule,
    UserServicesRoutingModule
  ]
})
export class UserServicesModule { }
