# @datafire/salesforce

Client library for Salesforce

## Installation and Usage
```bash
npm install --save @datafire/salesforce
```
```js
let salesforce = require('@datafire/salesforce').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

salesforce..get({}).then(data => {
  console.log(data);
})
```

## Description

Explore the beta Salesforce REST API to integrate CRM.

## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
salesforce.oauthCallback({
  "code": ""
}, context)
```

#### Input
* input `object`
  * code **required** `string`

#### Output
* output `object`
  * access_token `string`
  * refresh_token `string`
  * token_type `string`
  * scope `string`
  * expiration `string`

### oauthRefresh
Exchange a refresh_token for an access_token


```js
salesforce.oauthRefresh(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * access_token `string`
  * refresh_token `string`
  * token_type `string`
  * scope `string`
  * expiration `string`

### .get
Lists summary information about each Salesforce version currently available, including the version, label, and a link to each version's root.


```js
salesforce..get(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### version.get
Lists available resources for the specified API version, including resource name and URI.


```js
salesforce.version.get({
  "version": ""
}, context)
```

#### Input
* input `object`
  * version **required** `string` (values: v20.0, v21.0, v22.0, v23.0, v24.0): An API version.

#### Output
*Output schema unknown*

### version.sobjects.get
Lists the available objects and their metadata for your organization's data. In addition, it provides the organization encoding, as well as maximum batch size permitted in queries. For more information, see Internationalization and Character Sets (http://www.salesforce.com/us/developer/docs/api/Content/implementation_considerations.htm#sforce_api_other_internationalization).


```js
salesforce.version.sobjects.get({
  "version": ""
}, context)
```

#### Input
* input `object`
  * version **required** `string` (values: v20.0, v21.0, v22.0, v23.0, v24.0): An API version.

#### Output
*Output schema unknown*

### version.sobjects.sobject.get
Retrieves the metadata for an object.


```js
salesforce.version.sobjects.sobject.get({
  "version": "",
  "sobject": ""
}, context)
```

#### Input
* input `object`
  * version **required** `string` (values: v20.0, v21.0, v22.0, v23.0, v24.0): An API version.
  * sobject **required** `string` (values: Account, AccountContactRole, AccountFeed, AccountHistory, AccountPartner, AccountShare, ActivityHistory, AdditionalNumber, AggregateResult, ApexClass, ApexComponent, ApexLog, ApexPage, ApexTestQueueItem, ApexTestResult, ApexTrigger, Approval, Asset, AssetFeed, AssignmentRule, AsyncApexJob, Attachment, BrandTemplate, BusinessHours, BusinessProcess, CallCenter, Campaign, CampaignFeed, CampaignMember, CampaignMemberStatus, CampaignShare, Case, CaseComment, CaseContactRole, CaseFeed, CaseHistory, CaseShare, CaseSolution, CaseStatus, CaseTeamMember, CaseTeamRole, CaseTeamTemplate, CaseTeamTemplateMember, CaseTeamTemplateRecord, CategoryData, CategoryNode, ChatterActivity, CollaborationGroup, CollaborationGroupFeed, CollaborationGroupMember, CollaborationGroupMemberRequest, CollaborationInvitation, Community, Contact, ContactFeed, ContactHistory, ContactShare, ContentDocument, ContentDocumentFeed, ContentDocumentHistory, ContentDocumentLink, ContentVersion, ContentVersionHistory, Contract, ContractContactRole, ContractFeed, ContractHistory, ContractStatus, CronTrigger, Dashboard, DashboardComponent, DashboardComponentFeed, DashboardFeed, Document, DocumentAttachmentMap, EmailServicesAddress, EmailServicesFunction, EmailStatus, EmailTemplate, EntitySubscription, Event, EventAttendee, EventFeed, FeedComment, FeedItem, FeedLike, FeedTrackedChange, FieldPermissions, FiscalYearSettings, Folder, ForecastShare, Group, GroupMember, Holiday, Idea, IdeaComment, Lead, LeadFeed, LeadHistory, LeadShare, LeadStatus, LoginHistory, MailmergeTemplate, Name, NewsFeed, Note, NoteAndAttachment, ObjectPermissions, OpenActivity, Opportunity, OpportunityCompetitor, OpportunityContactRole, OpportunityFeed, OpportunityFieldHistory, OpportunityHistory, OpportunityLineItem, OpportunityPartner, OpportunityShare, OpportunityStage, OrgWideEmailAddress, Organization, Partner, PartnerRole, Period, PermissionSet, PermissionSetAssignment, Position__Feed, Position__c, Pricebook2, PricebookEntry, ProcessInstance, ProcessInstanceHistory, ProcessInstanceStep, ProcessInstanceWorkitem, Product2, Product2Feed, Profile, PushTopic, QueueSobject, RecordType, Report, ReportFeed, SelfServiceUser, Site, SiteDomain, SiteFeed, SiteHistory, Solution, SolutionFeed, SolutionHistory, SolutionStatus, StaticResource, Task, TaskFeed, TaskPriority, TaskStatus, User, UserFeed, UserLicense, UserPreference, UserProfileFeed, UserRecordAccess, UserRole, Vote, WebLink): A Salesforce's object.

#### Output
*Output schema unknown*

### version.sobjects.sobject.post
Creates a new object.


```js
salesforce.version.sobjects.sobject.post({
  "version": "",
  "sobject": ""
}, context)
```

#### Input
* input `object`
  * version **required** `string` (values: v20.0, v21.0, v22.0, v23.0, v24.0): An API version.
  * sobject **required** `string` (values: Account, AccountContactRole, AccountFeed, AccountHistory, AccountPartner, AccountShare, ActivityHistory, AdditionalNumber, AggregateResult, ApexClass, ApexComponent, ApexLog, ApexPage, ApexTestQueueItem, ApexTestResult, ApexTrigger, Approval, Asset, AssetFeed, AssignmentRule, AsyncApexJob, Attachment, BrandTemplate, BusinessHours, BusinessProcess, CallCenter, Campaign, CampaignFeed, CampaignMember, CampaignMemberStatus, CampaignShare, Case, CaseComment, CaseContactRole, CaseFeed, CaseHistory, CaseShare, CaseSolution, CaseStatus, CaseTeamMember, CaseTeamRole, CaseTeamTemplate, CaseTeamTemplateMember, CaseTeamTemplateRecord, CategoryData, CategoryNode, ChatterActivity, CollaborationGroup, CollaborationGroupFeed, CollaborationGroupMember, CollaborationGroupMemberRequest, CollaborationInvitation, Community, Contact, ContactFeed, ContactHistory, ContactShare, ContentDocument, ContentDocumentFeed, ContentDocumentHistory, ContentDocumentLink, ContentVersion, ContentVersionHistory, Contract, ContractContactRole, ContractFeed, ContractHistory, ContractStatus, CronTrigger, Dashboard, DashboardComponent, DashboardComponentFeed, DashboardFeed, Document, DocumentAttachmentMap, EmailServicesAddress, EmailServicesFunction, EmailStatus, EmailTemplate, EntitySubscription, Event, EventAttendee, EventFeed, FeedComment, FeedItem, FeedLike, FeedTrackedChange, FieldPermissions, FiscalYearSettings, Folder, ForecastShare, Group, GroupMember, Holiday, Idea, IdeaComment, Lead, LeadFeed, LeadHistory, LeadShare, LeadStatus, LoginHistory, MailmergeTemplate, Name, NewsFeed, Note, NoteAndAttachment, ObjectPermissions, OpenActivity, Opportunity, OpportunityCompetitor, OpportunityContactRole, OpportunityFeed, OpportunityFieldHistory, OpportunityHistory, OpportunityLineItem, OpportunityPartner, OpportunityShare, OpportunityStage, OrgWideEmailAddress, Organization, Partner, PartnerRole, Period, PermissionSet, PermissionSetAssignment, Position__Feed, Position__c, Pricebook2, PricebookEntry, ProcessInstance, ProcessInstanceHistory, ProcessInstanceStep, ProcessInstanceWorkitem, Product2, Product2Feed, Profile, PushTopic, QueueSobject, RecordType, Report, ReportFeed, SelfServiceUser, Site, SiteDomain, SiteFeed, SiteHistory, Solution, SolutionFeed, SolutionHistory, SolutionStatus, StaticResource, Task, TaskFeed, TaskPriority, TaskStatus, User, UserFeed, UserLicense, UserPreference, UserProfileFeed, UserRecordAccess, UserRole, Vote, WebLink): A Salesforce's object.

#### Output
*Output schema unknown*

### version.sobjects.sobject.describe.get
Completely describes the individual metadata at all levels for the specified object. For example, this can be used to retrieve the fields, URLs, and child relationships for the Account object.


```js
salesforce.version.sobjects.sobject.describe.get({
  "version": "",
  "sobject": ""
}, context)
```

#### Input
* input `object`
  * version **required** `string` (values: v20.0, v21.0, v22.0, v23.0, v24.0): An API version.
  * sobject **required** `string` (values: Account, AccountContactRole, AccountFeed, AccountHistory, AccountPartner, AccountShare, ActivityHistory, AdditionalNumber, AggregateResult, ApexClass, ApexComponent, ApexLog, ApexPage, ApexTestQueueItem, ApexTestResult, ApexTrigger, Approval, Asset, AssetFeed, AssignmentRule, AsyncApexJob, Attachment, BrandTemplate, BusinessHours, BusinessProcess, CallCenter, Campaign, CampaignFeed, CampaignMember, CampaignMemberStatus, CampaignShare, Case, CaseComment, CaseContactRole, CaseFeed, CaseHistory, CaseShare, CaseSolution, CaseStatus, CaseTeamMember, CaseTeamRole, CaseTeamTemplate, CaseTeamTemplateMember, CaseTeamTemplateRecord, CategoryData, CategoryNode, ChatterActivity, CollaborationGroup, CollaborationGroupFeed, CollaborationGroupMember, CollaborationGroupMemberRequest, CollaborationInvitation, Community, Contact, ContactFeed, ContactHistory, ContactShare, ContentDocument, ContentDocumentFeed, ContentDocumentHistory, ContentDocumentLink, ContentVersion, ContentVersionHistory, Contract, ContractContactRole, ContractFeed, ContractHistory, ContractStatus, CronTrigger, Dashboard, DashboardComponent, DashboardComponentFeed, DashboardFeed, Document, DocumentAttachmentMap, EmailServicesAddress, EmailServicesFunction, EmailStatus, EmailTemplate, EntitySubscription, Event, EventAttendee, EventFeed, FeedComment, FeedItem, FeedLike, FeedTrackedChange, FieldPermissions, FiscalYearSettings, Folder, ForecastShare, Group, GroupMember, Holiday, Idea, IdeaComment, Lead, LeadFeed, LeadHistory, LeadShare, LeadStatus, LoginHistory, MailmergeTemplate, Name, NewsFeed, Note, NoteAndAttachment, ObjectPermissions, OpenActivity, Opportunity, OpportunityCompetitor, OpportunityContactRole, OpportunityFeed, OpportunityFieldHistory, OpportunityHistory, OpportunityLineItem, OpportunityPartner, OpportunityShare, OpportunityStage, OrgWideEmailAddress, Organization, Partner, PartnerRole, Period, PermissionSet, PermissionSetAssignment, Position__Feed, Position__c, Pricebook2, PricebookEntry, ProcessInstance, ProcessInstanceHistory, ProcessInstanceStep, ProcessInstanceWorkitem, Product2, Product2Feed, Profile, PushTopic, QueueSobject, RecordType, Report, ReportFeed, SelfServiceUser, Site, SiteDomain, SiteFeed, SiteHistory, Solution, SolutionFeed, SolutionHistory, SolutionStatus, StaticResource, Task, TaskFeed, TaskPriority, TaskStatus, User, UserFeed, UserLicense, UserPreference, UserProfileFeed, UserRecordAccess, UserRole, Vote, WebLink): A Salesforce's object.

#### Output
*Output schema unknown*

### version.sobjects.sobject.id.get
Retrieves individual records for an object.


```js
salesforce.version.sobjects.sobject.id.get({
  "version": "",
  "sobject": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * fields `string`: Optional list of fields used to return values for.
  * version **required** `string` (values: v20.0, v21.0, v22.0, v23.0, v24.0): An API version.
  * sobject **required** `string` (values: Account, AccountContactRole, AccountFeed, AccountHistory, AccountPartner, AccountShare, ActivityHistory, AdditionalNumber, AggregateResult, ApexClass, ApexComponent, ApexLog, ApexPage, ApexTestQueueItem, ApexTestResult, ApexTrigger, Approval, Asset, AssetFeed, AssignmentRule, AsyncApexJob, Attachment, BrandTemplate, BusinessHours, BusinessProcess, CallCenter, Campaign, CampaignFeed, CampaignMember, CampaignMemberStatus, CampaignShare, Case, CaseComment, CaseContactRole, CaseFeed, CaseHistory, CaseShare, CaseSolution, CaseStatus, CaseTeamMember, CaseTeamRole, CaseTeamTemplate, CaseTeamTemplateMember, CaseTeamTemplateRecord, CategoryData, CategoryNode, ChatterActivity, CollaborationGroup, CollaborationGroupFeed, CollaborationGroupMember, CollaborationGroupMemberRequest, CollaborationInvitation, Community, Contact, ContactFeed, ContactHistory, ContactShare, ContentDocument, ContentDocumentFeed, ContentDocumentHistory, ContentDocumentLink, ContentVersion, ContentVersionHistory, Contract, ContractContactRole, ContractFeed, ContractHistory, ContractStatus, CronTrigger, Dashboard, DashboardComponent, DashboardComponentFeed, DashboardFeed, Document, DocumentAttachmentMap, EmailServicesAddress, EmailServicesFunction, EmailStatus, EmailTemplate, EntitySubscription, Event, EventAttendee, EventFeed, FeedComment, FeedItem, FeedLike, FeedTrackedChange, FieldPermissions, FiscalYearSettings, Folder, ForecastShare, Group, GroupMember, Holiday, Idea, IdeaComment, Lead, LeadFeed, LeadHistory, LeadShare, LeadStatus, LoginHistory, MailmergeTemplate, Name, NewsFeed, Note, NoteAndAttachment, ObjectPermissions, OpenActivity, Opportunity, OpportunityCompetitor, OpportunityContactRole, OpportunityFeed, OpportunityFieldHistory, OpportunityHistory, OpportunityLineItem, OpportunityPartner, OpportunityShare, OpportunityStage, OrgWideEmailAddress, Organization, Partner, PartnerRole, Period, PermissionSet, PermissionSetAssignment, Position__Feed, Position__c, Pricebook2, PricebookEntry, ProcessInstance, ProcessInstanceHistory, ProcessInstanceStep, ProcessInstanceWorkitem, Product2, Product2Feed, Profile, PushTopic, QueueSobject, RecordType, Report, ReportFeed, SelfServiceUser, Site, SiteDomain, SiteFeed, SiteHistory, Solution, SolutionFeed, SolutionHistory, SolutionStatus, StaticResource, Task, TaskFeed, TaskPriority, TaskStatus, User, UserFeed, UserLicense, UserPreference, UserProfileFeed, UserRecordAccess, UserRole, Vote, WebLink): A Salesforce's object.
  * id **required** `string`: A Salesforce's object ID.

#### Output
*Output schema unknown*

### version.sobjects.sobject.id.delete
Deletes a record.


```js
salesforce.version.sobjects.sobject.id.delete({
  "version": "",
  "sobject": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * version **required** `string` (values: v20.0, v21.0, v22.0, v23.0, v24.0): An API version.
  * sobject **required** `string` (values: Account, AccountContactRole, AccountFeed, AccountHistory, AccountPartner, AccountShare, ActivityHistory, AdditionalNumber, AggregateResult, ApexClass, ApexComponent, ApexLog, ApexPage, ApexTestQueueItem, ApexTestResult, ApexTrigger, Approval, Asset, AssetFeed, AssignmentRule, AsyncApexJob, Attachment, BrandTemplate, BusinessHours, BusinessProcess, CallCenter, Campaign, CampaignFeed, CampaignMember, CampaignMemberStatus, CampaignShare, Case, CaseComment, CaseContactRole, CaseFeed, CaseHistory, CaseShare, CaseSolution, CaseStatus, CaseTeamMember, CaseTeamRole, CaseTeamTemplate, CaseTeamTemplateMember, CaseTeamTemplateRecord, CategoryData, CategoryNode, ChatterActivity, CollaborationGroup, CollaborationGroupFeed, CollaborationGroupMember, CollaborationGroupMemberRequest, CollaborationInvitation, Community, Contact, ContactFeed, ContactHistory, ContactShare, ContentDocument, ContentDocumentFeed, ContentDocumentHistory, ContentDocumentLink, ContentVersion, ContentVersionHistory, Contract, ContractContactRole, ContractFeed, ContractHistory, ContractStatus, CronTrigger, Dashboard, DashboardComponent, DashboardComponentFeed, DashboardFeed, Document, DocumentAttachmentMap, EmailServicesAddress, EmailServicesFunction, EmailStatus, EmailTemplate, EntitySubscription, Event, EventAttendee, EventFeed, FeedComment, FeedItem, FeedLike, FeedTrackedChange, FieldPermissions, FiscalYearSettings, Folder, ForecastShare, Group, GroupMember, Holiday, Idea, IdeaComment, Lead, LeadFeed, LeadHistory, LeadShare, LeadStatus, LoginHistory, MailmergeTemplate, Name, NewsFeed, Note, NoteAndAttachment, ObjectPermissions, OpenActivity, Opportunity, OpportunityCompetitor, OpportunityContactRole, OpportunityFeed, OpportunityFieldHistory, OpportunityHistory, OpportunityLineItem, OpportunityPartner, OpportunityShare, OpportunityStage, OrgWideEmailAddress, Organization, Partner, PartnerRole, Period, PermissionSet, PermissionSetAssignment, Position__Feed, Position__c, Pricebook2, PricebookEntry, ProcessInstance, ProcessInstanceHistory, ProcessInstanceStep, ProcessInstanceWorkitem, Product2, Product2Feed, Profile, PushTopic, QueueSobject, RecordType, Report, ReportFeed, SelfServiceUser, Site, SiteDomain, SiteFeed, SiteHistory, Solution, SolutionFeed, SolutionHistory, SolutionStatus, StaticResource, Task, TaskFeed, TaskPriority, TaskStatus, User, UserFeed, UserLicense, UserPreference, UserProfileFeed, UserRecordAccess, UserRole, Vote, WebLink): A Salesforce's object.
  * id **required** `string`: A Salesforce's object ID.

#### Output
*Output schema unknown*

### version.sobjects.sobject.id.blobField.get
Retrieves the specified blob field from an individual record. Because blob fields contain binary data, you can't use JSON or XML to retrieve this data.


```js
salesforce.version.sobjects.sobject.id.blobField.get({
  "version": "",
  "sobject": "",
  "id": "",
  "blobField": ""
}, context)
```

#### Input
* input `object`
  * fields `string`: Optional list of fields used to return values for.
  * version **required** `string` (values: v20.0, v21.0, v22.0, v23.0, v24.0): An API version.
  * sobject **required** `string` (values: Account, AccountContactRole, AccountFeed, AccountHistory, AccountPartner, AccountShare, ActivityHistory, AdditionalNumber, AggregateResult, ApexClass, ApexComponent, ApexLog, ApexPage, ApexTestQueueItem, ApexTestResult, ApexTrigger, Approval, Asset, AssetFeed, AssignmentRule, AsyncApexJob, Attachment, BrandTemplate, BusinessHours, BusinessProcess, CallCenter, Campaign, CampaignFeed, CampaignMember, CampaignMemberStatus, CampaignShare, Case, CaseComment, CaseContactRole, CaseFeed, CaseHistory, CaseShare, CaseSolution, CaseStatus, CaseTeamMember, CaseTeamRole, CaseTeamTemplate, CaseTeamTemplateMember, CaseTeamTemplateRecord, CategoryData, CategoryNode, ChatterActivity, CollaborationGroup, CollaborationGroupFeed, CollaborationGroupMember, CollaborationGroupMemberRequest, CollaborationInvitation, Community, Contact, ContactFeed, ContactHistory, ContactShare, ContentDocument, ContentDocumentFeed, ContentDocumentHistory, ContentDocumentLink, ContentVersion, ContentVersionHistory, Contract, ContractContactRole, ContractFeed, ContractHistory, ContractStatus, CronTrigger, Dashboard, DashboardComponent, DashboardComponentFeed, DashboardFeed, Document, DocumentAttachmentMap, EmailServicesAddress, EmailServicesFunction, EmailStatus, EmailTemplate, EntitySubscription, Event, EventAttendee, EventFeed, FeedComment, FeedItem, FeedLike, FeedTrackedChange, FieldPermissions, FiscalYearSettings, Folder, ForecastShare, Group, GroupMember, Holiday, Idea, IdeaComment, Lead, LeadFeed, LeadHistory, LeadShare, LeadStatus, LoginHistory, MailmergeTemplate, Name, NewsFeed, Note, NoteAndAttachment, ObjectPermissions, OpenActivity, Opportunity, OpportunityCompetitor, OpportunityContactRole, OpportunityFeed, OpportunityFieldHistory, OpportunityHistory, OpportunityLineItem, OpportunityPartner, OpportunityShare, OpportunityStage, OrgWideEmailAddress, Organization, Partner, PartnerRole, Period, PermissionSet, PermissionSetAssignment, Position__Feed, Position__c, Pricebook2, PricebookEntry, ProcessInstance, ProcessInstanceHistory, ProcessInstanceStep, ProcessInstanceWorkitem, Product2, Product2Feed, Profile, PushTopic, QueueSobject, RecordType, Report, ReportFeed, SelfServiceUser, Site, SiteDomain, SiteFeed, SiteHistory, Solution, SolutionFeed, SolutionHistory, SolutionStatus, StaticResource, Task, TaskFeed, TaskPriority, TaskStatus, User, UserFeed, UserLicense, UserPreference, UserProfileFeed, UserRecordAccess, UserRole, Vote, WebLink): A Salesforce's object.
  * id **required** `string`: A Salesforce's object ID.
  * blobField **required** `string`: A Salesforce's object blob field.

#### Output
*Output schema unknown*

### version.sobjects.User.id.password.get
Gets password expiration status for a given user. The session must have permission to access the given user password information, otherwise an error response is returned.


```js
salesforce.version.sobjects.User.id.password.get({
  "version": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * version **required** `string` (values: v20.0, v21.0, v22.0, v23.0, v24.0): An API version.
  * id **required** `string`: A Salesforce's user ID.

#### Output
*Output schema unknown*

### version.sobjects.User.id.password.post
Changes the password for a given user ID. The new password must conform to the password policies for the organization, otherwise you will get an error response. You can only change one password per request.


```js
salesforce.version.sobjects.User.id.password.post({
  "version": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * version **required** `string` (values: v20.0, v21.0, v22.0, v23.0, v24.0): An API version.
  * id **required** `string`: A Salesforce's user ID.

#### Output
*Output schema unknown*

### version.sobjects.User.id.password.delete
Resets an user password. Salesforce will reset the user password to an auto-generated password, which will be returned in the response.


```js
salesforce.version.sobjects.User.id.password.delete({
  "version": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * version **required** `string` (values: v20.0, v21.0, v22.0, v23.0, v24.0): An API version.
  * id **required** `string`: A Salesforce's user ID.

#### Output
*Output schema unknown*

### version.query.get
Executes the specified SOQL query. If the initial query returns only part of the results, the end of the response will contain a field called nextRecordsUrl. In such cases, use the resource {version}/query/{id} to request the next batch of records and repeat until all records have been retrieved.


```js
salesforce.version.query.get({
  "version": "",
  "q": ""
}, context)
```

#### Input
* input `object`
  * version **required** `string` (values: v20.0, v21.0, v22.0, v23.0, v24.0): An API version.
  * q **required** `string`: A SOQL query.

#### Output
*Output schema unknown*

### version.query.id.get
Retrieves the remaining SOQL query results using the identifier within the field "nextRecordsUrl" value (i.e. "nextRecordsUrl" : "/services/data/v24.0/query/01gD0000002HU6KIAW-2000") located at the end of the initial query results. Requests the next batch of records and you could repeat (using the corresponding identifier) until all records have been retrieved.


```js
salesforce.version.query.id.get({
  "version": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * version **required** `string` (values: v20.0, v21.0, v22.0, v23.0, v24.0): An API version.
  * id **required** `string`: An identifier used to retrieve the remaining results.

#### Output
*Output schema unknown*

### version.search.get
Executes the specified SOSL search. The search string must be URL-encoded.


```js
salesforce.version.search.get({
  "version": "",
  "q": ""
}, context)
```

#### Input
* input `object`
  * version **required** `string` (values: v20.0, v21.0, v22.0, v23.0, v24.0): An API version.
  * q **required** `string`: A SOSL statement.

#### Output
*Output schema unknown*



## Definitions

**This integration has no definitions**
