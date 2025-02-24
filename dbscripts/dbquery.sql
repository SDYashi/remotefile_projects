CREATE TABLE remotefilesdb.filetransfer_PCPCID_mfd (
    ProcessId_SeqNo SERIAL PRIMARY KEY,
    User_Id VARCHAR(255) NOT NULL,
    User_Name VARCHAR(255) NOT NULL,
    User_Type VARCHAR(255) NOT NULL,
    User_DeviceMacAddrss VARCHAR(255) NOT NULL,
    User_DeviceIPAddrssLocal VARCHAR(255) NOT NULL,
    User_DeviceIPAddrssPublic VARCHAR(255) NOT NULL,
    User_DeviceName VARCHAR(255) NOT NULL,
    User_PC_to_PC_TransferId VARCHAR(255) NOT NULL,
    User_PC_to_PC_TransferStatus VARCHAR(255) NOT NULL,
    UserActiveDateTime VARCHAR(255) NOT NULL,
    UserStatus VARCHAR(255) NOT NULL,
    UserDeActiveDateTime VARCHAR(255) NOT NULL,
    UserFileTransferId VARCHAR(255) NOT NULL,
    UNIQUE (User_PC_to_PC_TransferId)
);

CREATE TABLE remotefilesdb.FileTransfer_UploadGuest_mfd (
    FileGenerate_Id SERIAL PRIMARY KEY,
    FileName VARCHAR(255) NOT NULL,
    FileSize VARCHAR(255) NOT NULL,
    FileURL VARCHAR(255) NOT NULL,
    FileURLCode VARCHAR(255) NOT NULL,
    FileUpload_UserName VARCHAR(255) NOT NULL,
    FileUpload_UserType VARCHAR(255) NOT NULL,
    FileUpload_SessionTime VARCHAR(255) NOT NULL,
    FileSender VARCHAR(255) NOT NULL,
    FileReciever VARCHAR(255) NOT NULL,
    FileMessage VARCHAR(255) NOT NULL,
    FileStatus VARCHAR(255) NOT NULL,
    User_DeviceMacAddrss VARCHAR(255) NOT NULL,
    User_DeviceIPAddrssLocal VARCHAR(255) NOT NULL,
    User_DeviceIPAddrssPublic VARCHAR(255) NOT NULL,
    User_DeviceName VARCHAR(255) NOT NULL
);

CREATE TABLE remotefilesdb.FileTransfer_ViaEmailRecord_mfd (
    FileGenerate_Id SERIAL PRIMARY KEY,
    FileName VARCHAR(255) NOT NULL,
    FileSize VARCHAR(255) NOT NULL,
    FileURL VARCHAR(255) NOT NULL,
    FileStatus VARCHAR(255) NOT NULL,
    FileTransfer_Type VARCHAR(255) NOT NULL,
    FileSender_Email VARCHAR(255) NOT NULL,
    FileReciever_Email VARCHAR(255) NOT NULL,
    FileSubject_Email VARCHAR(255) NOT NULL,
    FileDownloadCount_Email VARCHAR(255) NOT NULL,
    User_Type VARCHAR(255) NOT NULL,
    User_DeviceMacAddrss VARCHAR(255) NOT NULL,
    User_DeviceIPAddrssLocal VARCHAR(255) NOT NULL,
    User_DeviceIPAddrssPublic VARCHAR(255) NOT NULL,
    User_DeviceName VARCHAR(255) NOT NULL,
    User_EventDateTime VARCHAR(255) NOT NULL
);

CREATE TABLE remotefilesdb.FileTransfer_ViaFileSerialRecord_mfd (
    FileGenerate_Id SERIAL PRIMARY KEY,
    FileName VARCHAR(255) NOT NULL,
    FileSize VARCHAR(255) NOT NULL,
    FileURL VARCHAR(255) NOT NULL,
    FileStatus VARCHAR(255) NOT NULL,
    FileTransfer_Type VARCHAR(255) NOT NULL,
    FileSender_FileNo VARCHAR(255) NOT NULL,
    FileReciever_FileNo VARCHAR(255) NOT NULL,
    FileSerialCode_FileNo VARCHAR(255) NOT NULL,
    FileEncryptNo_FileNo VARCHAR(255) NOT NULL,
    FileDownloadCount_FileNo VARCHAR(255) NOT NULL,
    FileSMSStatus_FileNo VARCHAR(255) NOT NULL,
    User_Type VARCHAR(255) NOT NULL,
    User_DeviceMacAddrss VARCHAR(255) NOT NULL,
    User_DeviceIPAddrssLocal VARCHAR(255) NOT NULL,
    User_DeviceIPAddrssPublic VARCHAR(255) NOT NULL,
    User_DeviceName VARCHAR(255) NOT NULL,
    User_EventDateTime VARCHAR(255) NOT NULL
);

CREATE TABLE remotefilesdb.FileTransferRecord_Guest_mfd (
    FileGenerate_Id SERIAL PRIMARY KEY,
    FileName VARCHAR(255) NOT NULL,
    FileSize VARCHAR(255) NOT NULL,
    FileURL VARCHAR(255) NOT NULL,
    FileStatus VARCHAR(255) NOT NULL,
    FileTransfer_Type VARCHAR(255) NOT NULL,
    FileSender_Email VARCHAR(255) NOT NULL,
    FileReciever_Email VARCHAR(255) NOT NULL,
    FileSubject_Email VARCHAR(255) NOT NULL,
    FileDownloadCount_Email VARCHAR(255) NOT NULL,
    FileSender_PCPC VARCHAR(255) NOT NULL,
    FileReciever_PCPC VARCHAR(255) NOT NULL,
    FileSubject_PCPC VARCHAR(255) NOT NULL,
    FileDownloadCount_PCPC VARCHAR(255) NOT NULL,
    FileSender_FileNo VARCHAR(255) NOT NULL,
    FileReciever_FileNo VARCHAR(255) NOT NULL,
    FileSerialCode_FileNo VARCHAR(255) NOT NULL,
    FileEncryptNo_FileNo VARCHAR(255) NOT NULL,
    FileDownloadCount_FileNo VARCHAR(255) NOT NULL,
    FileSMSStatus_FileNo VARCHAR(255) NOT NULL,
    FileSender_SMSLink VARCHAR(255) NOT NULL,
    FileReciever_SMSLink VARCHAR(255) NOT NULL,
    FileSubject_SMSLink VARCHAR(255) NOT NULL,
    FileDownloadCount_SMSLink VARCHAR(255) NOT NULL,
    FileSMSStatus_SMSLink VARCHAR(255) NOT NULL,
    FileSender_MyStore VARCHAR(255) NOT NULL,
    FileReciever_MyStore VARCHAR(255) NOT NULL,
    FileSubject_MyStore VARCHAR(255) NOT NULL,
    FileDownloadCount_MyStore VARCHAR(255) NOT NULL,
    FileSMSStatus_MyStore VARCHAR(255) NOT NULL,
    User_Type VARCHAR(255) NOT NULL,
    User_DeviceMacAddrss VARCHAR(255) NOT NULL,
    User_DeviceIPAddrssLocal VARCHAR(255) NOT NULL,
    User_DeviceIPAddrssPublic VARCHAR(255) NOT NULL,
    User_DeviceName VARCHAR(255) NOT NULL,
    User_EventDateTime VARCHAR(255) NOT NULL
);

CREATE TABLE remotefilesdb.FileTransfer_viapcpcrecord_mfd (
    FileGenerate_Id SERIAL PRIMARY KEY,
    FileName VARCHAR(255) NOT NULL,
    FileSize VARCHAR(255) NOT NULL,
    FileURL VARCHAR(255) NOT NULL,
    FileURLCode VARCHAR(255) NOT NULL,
    FileUpload_UserType VARCHAR(255) NOT NULL,
    FileUpload_SessionTime VARCHAR(255) NOT NULL,
    FileSender VARCHAR(255) NOT NULL,
    FileReciever VARCHAR(255) NOT NULL,
    FileMessage VARCHAR(255) NOT NULL,
    FileStatus VARCHAR(255) NOT NULL,
    User_DeviceMacAddrss VARCHAR(255) NOT NULL,
    User_DeviceIPAddrssLocal VARCHAR(255) NOT NULL,
    User_DeviceIPAddrssPublic VARCHAR(255) NOT NULL,
    User_DeviceName VARCHAR(255) NOT NULL
);

CREATE TABLE remotefilesdb.FileTransfer_ViaSMSLinkRecord_mfd (
    FileGenerate_Id SERIAL PRIMARY KEY,
    FileName VARCHAR(255) NOT NULL,
    FileSize VARCHAR(255) NOT NULL,
    FileURL VARCHAR(255) NOT NULL,
    FileStatus VARCHAR(255) NOT NULL,
    FileTransfer_Type VARCHAR(255) NOT NULL,
    FileSender_SMSLink VARCHAR(255) NOT NULL,
    FileReciever_SMSLink VARCHAR(255) NOT NULL,
    FileSubject_SMSLink VARCHAR(255) NOT NULL,
    FileDownloadCount_SMSLink VARCHAR(255) NOT NULL,
    FileSMSStatus_SMSLink VARCHAR(255) NOT NULL,
    FileSMSStatus_FileNo VARCHAR(255) NOT NULL,
    User_Type VARCHAR(255) NOT NULL,
    User_DeviceMacAddrss VARCHAR(255) NOT NULL,
    User_DeviceIPAddrssLocal VARCHAR(255) NOT NULL,
    User_DeviceIPAddrssPublic VARCHAR(255) NOT NULL,
    User_DeviceName VARCHAR(255) NOT NULL,
    User_EventDateTime VARCHAR(255) NOT NULL
);

CREATE TABLE remotefilesdb.listdrive_forstore_mfd (
    Drive_id SERIAL PRIMARY KEY,
    Drive_Name VARCHAR(255) NOT NULL,
    Drive_Total VARCHAR(255) NOT NULL,
    Drive_Used VARCHAR(255) NOT NULL,
    Drive_Free VARCHAR(255) NOT NULL,
    Drive_Status VARCHAR(255) NOT NULL,
    Drive_FreeSize VARCHAR(255) NOT NULL,
    Drive_StoreStatus VARCHAR(255) NOT NULL
);

CREATE TABLE remotefilesdb.listsoft_guest_mfd (
    Soft_id SERIAL PRIMARY KEY,
    Soft_name VARCHAR(255) NOT NULL,
    Soft_Url VARCHAR(255) NOT NULL,
    Soft_UploadCode VARCHAR(255) NOT NULL,
    Soft_logo_name VARCHAR(255) NOT NULL,
    Soft_logo_url VARCHAR(255) NOT NULL,
    Soft_OSType VARCHAR(255) NOT NULL,
    Soft_Category VARCHAR(255) NOT NULL,
    Soft_Title VARCHAR(255) NOT NULL,
    Soft_Details VARCHAR(255) NOT NULL,
    Soft_UploadUser_Type VARCHAR(255) NOT NULL,
    Soft_Upload_DateTime VARCHAR(255) NOT NULL,
    Soft_Size VARCHAR(255) NOT NULL,
    Soft_LicenseType VARCHAR(255) NOT NULL,
    Soft_DownloadCount VARCHAR(255) NOT NULL
);

CREATE TABLE remotefilesdb.listsoft_webclients_mfd (
    Soft_id SERIAL PRIMARY KEY,
    Soft_name VARCHAR(255) NOT NULL,
    Soft_Url VARCHAR(255) NOT NULL,
    Soft_UploadCode VARCHAR(255) NOT NULL,
    Soft_logo_name VARCHAR(255) NOT NULL,
    Soft_logo_url VARCHAR(255) NOT NULL,
    Soft_OSType VARCHAR(255) NOT NULL,
    Soft_Category VARCHAR(255) NOT NULL,
    Soft_Title VARCHAR(255) NOT NULL,
    Soft_Details VARCHAR(255) NOT NULL,
    Soft_UploadUser_Type VARCHAR(255) NOT NULL,
    Soft_Upload_DateTime VARCHAR(255) NOT NULL,
    Soft_Size VARCHAR(255) NOT NULL,
    Soft_LicenseType VARCHAR(255) NOT NULL,
    Soft_DownloadCount VARCHAR(255) NOT NULL
);

CREATE TABLE remotefilesdb.user_blogcomments (
    comments_id SERIAL PRIMARY KEY,
    comments_blog_postid VARCHAR(255) NOT NULL,
    comments_user VARCHAR(255) NOT NULL,
    comments_email VARCHAR(255) NOT NULL,
    comments_body TEXT NOT NULL,
    comments_likecount VARCHAR(255) NOT NULL,
    comments_commentcount VARCHAR(255) NOT NULL,
    comments_createat VARCHAR(255) NOT NULL
);

CREATE TABLE remotefilesdb.user_blogcomments_reply (
    reply_id SERIAL PRIMARY KEY,
    reply_comments_id VARCHAR(255) NOT NULL,
    reply_user VARCHAR(255) NOT NULL,
    reply_email VARCHAR(255) NOT NULL,
    reply_body TEXT NOT NULL,
    reply_likecount VARCHAR(255) NOT NULL,
    reply_commentcount VARCHAR(255) NOT NULL,
    reply_createat VARCHAR(255) NOT NULL
);

CREATE TABLE remotefilesdb.user_blogcomments_reply_reply (
    reply_reply_id SERIAL PRIMARY KEY,
    reply_reply_comments_id VARCHAR(255) NOT NULL,
    reply_reply_user VARCHAR(255) NOT NULL,
    reply_reply_email VARCHAR(255) NOT NULL,
    reply_reply_body TEXT NOT NULL,
    reply_reply_likecount VARCHAR(255) NOT NULL,
    reply_reply_commentcount VARCHAR(255) NOT NULL,
    reply_reply_createat VARCHAR(255) NOT NULL
);

CREATE TABLE remotefilesdb.user_blogcomments_reply_reply_reply (
    reply_reply_reply_id SERIAL PRIMARY KEY,
    reply_reply_reply_comments_id VARCHAR(255) NOT NULL,
    reply_reply_reply_user VARCHAR(255) NOT NULL,
    reply_reply_reply_email VARCHAR(255) NOT NULL,
    reply_reply_reply_body TEXT NOT NULL,
    reply_reply_reply_likecount VARCHAR(255) NOT NULL,
    reply_reply_reply_commentcount VARCHAR(255) NOT NULL,
    reply_reply_reply_createat VARCHAR(255) NOT NULL
);

CREATE TABLE remotefilesdb.user_bloglist (
    blog_postId SERIAL PRIMARY KEY,
    blog_userName VARCHAR(255) NOT NULL,
    blog_rmail VARCHAR(255) NOT NULL,
    blog_subject VARCHAR(255) NOT NULL,
    blog_bodytext TEXT NOT NULL,
    blog_likecounts VARCHAR(255) NOT NULL,
    blog_commentcounts VARCHAR(255) NOT NULL,
    blog_createAt VARCHAR(255) NOT NULL
);

CREATE TABLE remotefilesdb.user_loginverifyotp_db (
    Verify_SeqNo SERIAL PRIMARY KEY,
    User_MobileNo VARCHAR(255) NOT NULL,
    User_GenerateOTP VARCHAR(255) NOT NULL,
    User_GenerateOTP_Status VARCHAR(255) NOT NULL,
    User_MobileNo_Status VARCHAR(255) NOT NULL,
    User_MobileNo_History VARCHAR(255) NOT NULL
);

CREATE TABLE remotefilesdb.user_logs_mfd (
    Login_SeqNo SERIAL PRIMARY KEY,
    User_Id VARCHAR(255) NOT NULL,
    User_Name VARCHAR(255) NOT NULL,
    User_Type VARCHAR(255) NOT NULL,
    User_DeviceMacAddress VARCHAR(255) NOT NULL,
    User_DeviceIPAddressLocal VARCHAR(255) NOT NULL,
    User_DeviceIPAddressPublic VARCHAR(255) NOT NULL,
    User_DeviceName VARCHAR(255) NOT NULL,
    User_LoginDateTime VARCHAR(255) NOT NULL,
    User_LoginStatus VARCHAR(255) NOT NULL,
    User_LoginOutTime VARCHAR(255) NOT NULL
);

CREATE TABLE remotefilesdb.user_newsletter (
    Customer_SeqNo SERIAL PRIMARY KEY,
    Customer_Email_NewLetters VARCHAR(255) NOT NULL
);

CREATE TABLE remotefilesdb.user_profiles_sharemydesk (
    Customer_Id_SeqNo SERIAL PRIMARY KEY,
    Customer_EmailId VARCHAR(255) NOT NULL,
    Customer_MobileNo VARCHAR(255) NOT NULL,
    Customer_Pwd VARCHAR(255) NOT NULL,
    Customer_Name VARCHAR(255) NOT NULL,
    Customer_EmailVerified VARCHAR(255) NOT NULL,
    Customer_MobileNoVerified VARCHAR(255) NOT NULL,
    Customer_Status VARCHAR(255) NOT NULL
);

CREATE TABLE remotefilesdb.usershared_experiences_mfd (
    Exp_Post_ID SERIAL PRIMARY KEY,
    Exp_User_ID VARCHAR(100) NOT NULL,
    Exp_User_Name VARCHAR(100) NOT NULL,
    Exp_User_Prof_Details VARCHAR(150) NOT NULL,
    Exp_User_Email VARCHAR(150) NOT NULL,
    Exp_User_Message VARCHAR(250) NOT NULL,
    Exp_User_Type VARCHAR(150) NOT NULL,
    Exp_User_PostLogs VARCHAR(150) NOT NULL
);

CREATE TABLE remotefilesdb.usershared_contactus_mfd (
    Contactus_Post_ID SERIAL PRIMARY KEY,
    Contactus_User_ID VARCHAR(100) NOT NULL,
    Contactus_User_Name VARCHAR(100) NOT NULL,
    Contactus_User_Email VARCHAR(150) NOT NULL,
    Contactus_User_ContactUs_Type VARCHAR(150) NOT NULL,
    Contactus_User_Prof_Details VARCHAR(150) NOT NULL,
    Contactus_User_Message VARCHAR(250) NOT NULL,
    Contactus_User_Type VARCHAR(150) NOT NULL,
    Contactus_User_PostLogs VARCHAR(150) NOT NULL
);

CREATE TABLE remotefilesdb.usershared_feedback_mfd (
    Feedbackus_Post_ID SERIAL PRIMARY KEY,
    Feedbackus_User_ID VARCHAR(100) NOT NULL,
    Feedbackus_User_Name VARCHAR(100) NOT NULL,
    Feedbackus_User_Email VARCHAR(150) NOT NULL,
    Feedbackus_User_Message VARCHAR(250) NOT NULL,
    Feedbackus_User_RatingStar VARCHAR(150) NOT NULL,
    Feedbackus_User_Type VARCHAR(150) NOT NULL,
    Feedbackus_User_PostLogs VARCHAR(150) NOT NULL
);

-- Full-text search index for user_bloglist
CREATE INDEX idx_user_bloglist ON remotefilesdb.user_bloglist USING gin(to_tsvector('english', blog_userName || ' ' || blog_rmail || ' ' || blog_subject || ' ' || blog_bodytext));

-- Indexes for filetransfer_PCPCID_mfd
CREATE INDEX idx_filetransfer_user_id ON remotefilesdb.filetransfer_PCPCID_mfd (User_Id);
CREATE INDEX idx_filetransfer_user_pc_to_pc_transfer_id ON remotefilesdb.filetransfer_PCPCID_mfd (User_PC_to_PC_TransferId);

-- Indexes for FileTransfer_UploadGuest_mfd
CREATE INDEX idx_uploadguest_filename ON remotefilesdb.FileTransfer_UploadGuest_mfd (FileName);
CREATE INDEX idx_uploadguest_filesender ON remotefilesdb.FileTransfer_UploadGuest_mfd (FileUpload_UserName);

-- Indexes for FileTransfer_ViaEmailRecord_mfd
CREATE INDEX idx_emailrecord_filesender ON remotefilesdb.FileTransfer_ViaEmailRecord_mfd (FileSender_Email);
CREATE INDEX idx_emailrecord_filestatus ON remotefilesdb.FileTransfer_ViaEmailRecord_mfd (FileStatus);

-- Indexes for FileTransfer_ViaFileSerialRecord_mfd
CREATE INDEX idx_fileserialrecord_filesender ON remotefilesdb.FileTransfer_ViaFileSerialRecord_mfd (FileSender_FileNo);
CREATE INDEX idx_fileserialrecord_filestatus ON remotefilesdb.FileTransfer_ViaFileSerialRecord_mfd (FileStatus);

-- Indexes for FileTransferRecord_Guest_mfd
CREATE INDEX idx_transferrecord_guest_filesender ON remotefilesdb.FileTransferRecord_Guest_mfd (FileSender_Email);
CREATE INDEX idx_transferrecord_guest_filestatus ON remotefilesdb.FileTransferRecord_Guest_mfd (FileStatus);

-- Indexes for FileTransfer_viapcpcrecord_mfd
CREATE INDEX idx_viapcpcrecord_filesender ON remotefilesdb.FileTransfer_viapcpcrecord_mfd (FileSender);
CREATE INDEX idx_viapcpcrecord_filestatus ON remotefilesdb.FileTransfer_viapcpcrecord_mfd (FileStatus);

-- Indexes for FileTransfer_ViaSMSLinkRecord_mfd
CREATE INDEX idx_smslinkrecord_filesender ON remotefilesdb.FileTransfer_ViaSMSLinkRecord_mfd (FileSender_SMSLink);
CREATE INDEX idx_smslinkrecord_filestatus ON remotefilesdb.FileTransfer_ViaSMSLinkRecord_mfd (FileStatus);

-- Indexes for listdrive_forstore_mfd
CREATE INDEX idx_listdrive_drive_name ON remotefilesdb.listdrive_forstore_mfd (Drive_Name);
CREATE INDEX idx_listdrive_drive_status ON remotefilesdb.listdrive_forstore_mfd (Drive_Status);

-- Indexes for listsoft_guest_mfd
CREATE INDEX idx_listsoft_guest_soft_name ON remotefilesdb.listsoft_guest_mfd (Soft_name);
CREATE INDEX idx_listsoft_guest_soft_category ON remotefilesdb.listsoft_guest_mfd (Soft_Category);

-- Indexes for listsoft_webclients_mfd
CREATE INDEX idx_listsoft_webclients_soft_name ON remotefilesdb.listsoft_webclients_mfd (Soft_name);
CREATE INDEX idx_listsoft_webclients_soft_category ON remotefilesdb.listsoft_webclients_mfd (Soft_Category);

-- Indexes for user_blogcomments
CREATE INDEX idx_blogcomments_user ON remotefilesdb.user_blogcomments (comments_user);
CREATE INDEX idx_blogcomments_blog_postid ON remotefilesdb.user_blogcomments (comments_blog_postid);

-- Indexes for user_bloglist
CREATE INDEX idx_bloglist_username ON remotefilesdb.user_bloglist (blog_userName);
CREATE INDEX idx_bloglist_subject ON remotefilesdb.user_bloglist (blog_subject);

-- Indexes for user_loginverifyotp_db
CREATE INDEX idx_loginverify_user_mobile ON remotefilesdb.user_loginverifyotp_db (User_MobileNo);

-- Indexes for user_logs_mfd
CREATE INDEX idx_userlogs_user_id ON remotefilesdb.user_logs_mfd (User _Id);
CREATE INDEX idx_userlogs_user_name ON remotefilesdb.user_logs_mfd (User_Name);

-- Indexes for user_newsletter
CREATE INDEX idx_newsletter_email ON remotefilesdb.user_newsletter (Customer_Email_NewLetters);

-- Indexes for user_profiles_sharemydesk
CREATE INDEX idx_userprofiles_email ON remotefilesdb.user_profiles_sharemydesk (Customer_EmailId);
CREATE INDEX idx_userprofiles_mobile ON remotefilesdb.user_profiles_sharemydesk (Customer_MobileNo);

-- Indexes for usershared_experiences_mfd
CREATE INDEX idx_experiences_user_id ON remotefilesdb.usershared_experiences_mfd (Exp_User_ID);
CREATE INDEX idx_experiences_user_email ON remotefilesdb.usershared_experiences_mfd (Exp_User_Email);

-- Indexes for usershared_contactus_mfd
CREATE INDEX idx_contactus_user_id ON remotefilesdb.usershared_contactus_mfd (Contactus_User_ID);
CREATE INDEX idx_contactus_user_email ON remotefilesdb.usershared_contactus_mfd (Contactus_User_Email);

-- Indexes for usershared_feedback_mfd
CREATE INDEX idx_feedback_user_id ON remotefilesdb.usershared_feedback_mfd (Feedbackus_User_ID);
CREATE INDEX idx_feedback_user_email ON remotefilesdb.usershared_feedback_mfd (Feedbackus_User_Email);