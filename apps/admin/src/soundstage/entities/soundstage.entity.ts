import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tblUsers', { schema: 'dbo' })
export class tblUsers {
  @PrimaryGeneratedColumn({ type: 'int', name: 'UserID' })
  userId: number;

  @Column('nvarchar', { name: 'Username', nullable: true, length: 50 })
  username: string | null;

  @Column('nvarchar', { name: 'Password', nullable: true, length: 50 })
  password: string | null;

  @Column('int', { name: 'ClientID', nullable: true })
  clientId: number | null;

  @Column('varchar', { name: 'FirstName', nullable: true, length: 50 })
  firstName: string | null;

  @Column('varchar', {
    name: 'LastName',
    nullable: true,
    length: 50,
    default: () => "''",
  })
  lastName: string | null;

  @Column('varchar', { name: 'Email', nullable: true, length: 50 })
  email: string | null;

  @Column('int', { name: 'ProjectID', nullable: true })
  projectId: number | null;

  @Column('int', { name: 'AccessLevel', nullable: true })
  accessLevel: number | null;

  @Column('int', { name: 'RoleID', nullable: true })
  roleId: number | null;

  @Column('int', { name: 'VideoID', nullable: true })
  videoId: number | null;

  @Column('int', { name: 'AgencyID', nullable: true })
  agencyId: number | null;

  @Column('int', { name: 'UserTypeID', nullable: true })
  userTypeId: number | null;

  @Column('varchar', { name: 'MsgSent', nullable: true, length: 10 })
  msgSent: string | null;

  @Column('varchar', { name: 'Confirmed', nullable: true, length: 10 })
  confirmed: string | null;

  @Column('varchar', { name: 'Phone1', nullable: true, length: 25 })
  phone1: string | null;

  @Column('varchar', { name: 'Phone2', nullable: true, length: 25 })
  phone2: string | null;

  @Column('int', { name: 'LocationID', nullable: true })
  locationId: number | null;

  @Column('smallint', { name: 'FORUM_LEVEL', nullable: true })
  forumLevel: number | null;

  @Column('datetime', { name: 'Email_Confirmed', nullable: true })
  emailConfirmed: Date | null;

  @Column('datetime', {
    name: 'DateTime',
    nullable: true,
    default: () => 'getdate()',
  })
  dateTime: Date | null;

  @Column('datetime', { name: 'LastUpdated', nullable: true })
  lastUpdated: Date | null;

  @Column('uniqueidentifier', {
    name: 'UserGUID',
    nullable: true,
    default: () => 'newid()',
  })
  userGuid: string | null;

  @Column('varchar', { name: 'AssistantEmail', nullable: true, length: 100 })
  assistantEmail: string | null;

  @Column('int', {
    name: 'SubmissionEmails',
    nullable: true,
    default: () => '(0)',
  })
  submissionEmails: number | null;

  @Column('int', {
    name: 'MessageAccess',
    nullable: true,
    default: () => '(0)',
  })
  messageAccess: number | null;

  @Column('int', {
    name: 'ScriptAccess',
    nullable: true,
    default: () => 'NULL',
  })
  scriptAccess: number | null;

  @Column('int', { name: 'ScriptiPad', nullable: true, default: () => '(0)' })
  scriptiPad: number | null;

  @Column('int', { name: 'HasAsst', nullable: true, default: () => '(0)' })
  hasAsst: number | null;

  @Column('int', {
    name: 'ScriptIpadForceReload',
    nullable: true,
    default: () => '(1)',
  })
  scriptIpadForceReload: number | null;

  @Column('datetime', { name: 'ScriptIpadLastLogin', nullable: true })
  scriptIpadLastLogin: Date | null;

  @Column('varchar', { name: 'TempPassword', nullable: true, length: 250 })
  tempPassword: string | null;

  @Column('int', {
    name: 'ScriptAccountTypeID',
    nullable: true,
    default: () => '(0)',
  })
  scriptAccountTypeId: number | null;

  @Column('int', { name: 'ScriptAdminUserAcctID', nullable: true })
  scriptAdminUserAcctId: number | null;

  @Column('int', {
    name: 'InboxNotifications',
    nullable: true,
    default: () => '(1)',
  })
  inboxNotifications: number | null;

  @Column('varbinary', { name: 'EncPassword', nullable: true })
  encPassword: Buffer | null;

  @Column('varchar', {
    name: 'ScriptPaypalProfileID',
    nullable: true,
    length: 50,
  })
  scriptPaypalProfileId: string | null;

  @Column('int', {
    name: 'ScriptPaypalSubscription',
    nullable: true,
    default: () => '(0)',
  })
  scriptPaypalSubscription: number | null;

  @Column('datetime', { name: 'ScriptPaypalStartdate', nullable: true })
  scriptPaypalStartdate: Date | null;

  @Column('int', {
    name: 'ScriptPaypalActive',
    nullable: true,
    default: () => '(0)',
  })
  scriptPaypalActive: number | null;

  @Column('int', { name: 'TextMessageCode', nullable: true })
  textMessageCode: number | null;

  @Column('uniqueidentifier', { name: 'RememberMe', nullable: true })
  rememberMe: string | null;

  @Column('int', { name: 'Notify', nullable: true, default: () => '(1)' })
  notify: number | null;

  @Column('varchar', { name: 'MD5Hash', nullable: true, length: 34 })
  md5Hash: string | null;

  @Column('varchar', { name: 'Department', nullable: true, length: 250 })
  department: string | null;

  @Column('int', {
    name: 'ProjectActivationNotification',
    nullable: true,
    default: () => '(1)',
  })
  projectActivationNotification: number | null;

  @Column('varchar', { name: 'Fullname', nullable: true, length: 500 })
  fullname: string | null;

  @Column('datetime', {
    name: 'TempPasswordDate',
    nullable: true,
    default: () => 'getdate()',
  })
  tempPasswordDate: Date | null;

  @Column('varchar', { name: 'OldUsername', nullable: true, length: 50 })
  oldUsername: string | null;

  @Column('int', { name: 'ChangeUserID', nullable: true })
  changeUserId: number | null;

  @Column('varchar', { name: 'PaypalEmail', nullable: true, length: 250 })
  paypalEmail: string | null;

  @Column('datetime', { name: 'FeedbackNDADate', nullable: true })
  feedbackNdaDate: Date | null;

  @Column('int', { name: 'TalentReport', nullable: true, default: () => '(0)' })
  talentReport: number | null;

  @Column('uniqueidentifier', {
    name: 'PasswordSalt',
    nullable: true,
    default: () => 'newid()',
  })
  passwordSalt: string | null;

  @Column('varchar', { name: 'SaltedHash', nullable: true, length: 34 })
  saltedHash: string | null;

  @Column('int', {
    name: 'CastItSuggestions',
    nullable: true,
    default: () => '(0)',
  })
  castItSuggestions: number | null;

  @Column('datetime', { name: 'ScriptUserTermsAccepted', nullable: true })
  scriptUserTermsAccepted: Date | null;

  @Column('nvarchar', { name: 'EmailSignatureBlock', nullable: true })
  emailSignatureBlock: string | null;

  @Column('datetime', { name: 'NextMostRecentLogin', nullable: true })
  nextMostRecentLogin: Date | null;

  @Column('varchar', {
    name: 'PasswordHash',
    nullable: true,
    length: 100,
    default: () => 'NULL',
  })
  passwordHash: string | null;

  @Column('bit', { name: 'IsPasswordMigrated', default: () => '(0)' })
  isPasswordMigrated: boolean;

  @Column('bit', { name: 'PasswordMigratedFromMD5', default: () => '(0)' })
  passwordMigratedFromMd5: boolean;

  @Column('int', { name: 'CreatedBy', nullable: true })
  createdBy: number | null;

  @Column('varchar', { name: 'IpAddress', nullable: true, length: 100 })
  ipAddress: string | null;

  @Column('datetime', { name: 'LastAuditDate', nullable: true })
  lastAuditDate: Date | null;

  @Column('int', { name: 'LastAuditByUserId', nullable: true })
  lastAuditByUserId: number | null;
}
