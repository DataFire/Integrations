# @datafire/salesforce
Explore the beta Salesforce REST API to integrate CRM.

## Operation: oauthCallback


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "code": {
      "title": "code",
      "type": "string"
    }
  },
  "required": [
    "code"
  ]
}
```
### Output Schema
```json
{
  "properties": {
    "access_token": {
      "type": "string"
    },
    "refresh_token": {
      "type": "string"
    },
    "token_type": {
      "type": "string"
    },
    "scope": {
      "type": "string"
    },
    "expiration": {
      "type": "string"
    }
  }
}
```
## Operation: oauthRefresh


### Input Schema
```json
{}
```
### Output Schema
```json
{
  "properties": {
    "access_token": {
      "type": "string"
    },
    "refresh_token": {
      "type": "string"
    },
    "token_type": {
      "type": "string"
    },
    "scope": {
      "type": "string"
    },
    "expiration": {
      "type": "string"
    }
  }
}
```
## Operation: .get
Lists summary information about each Salesforce version currently available, including the version, label, and a link to each version's root.

### Input Schema
```json
{}
```
### Output Schema
```json
{}
```
## Operation: version.get
Lists available resources for the specified API version, including resource name and URI.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "version": {
      "type": "string",
      "description": "An API version.",
      "enum": [
        "v20.0",
        "v21.0",
        "v22.0",
        "v23.0",
        "v24.0"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "version"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: version.sobjects.get
Lists the available objects and their metadata for your organization's data. In addition, it provides the organization encoding, as well as maximum batch size permitted in queries. For more information, see Internationalization and Character Sets (http://www.salesforce.com/us/developer/docs/api/Content/implementation_considerations.htm#sforce_api_other_internationalization).

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "version": {
      "type": "string",
      "description": "An API version.",
      "enum": [
        "v20.0",
        "v21.0",
        "v22.0",
        "v23.0",
        "v24.0"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "version"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: version.sobjects.sobject.get
Retrieves the metadata for an object.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "version": {
      "type": "string",
      "description": "An API version.",
      "enum": [
        "v20.0",
        "v21.0",
        "v22.0",
        "v23.0",
        "v24.0"
      ]
    },
    "sobject": {
      "type": "string",
      "description": "A Salesforce's object.",
      "enum": [
        "Account",
        "AccountContactRole",
        "AccountFeed",
        "AccountHistory",
        "AccountPartner",
        "AccountShare",
        "ActivityHistory",
        "AdditionalNumber",
        "AggregateResult",
        "ApexClass",
        "ApexComponent",
        "ApexLog",
        "ApexPage",
        "ApexTestQueueItem",
        "ApexTestResult",
        "ApexTrigger",
        "Approval",
        "Asset",
        "AssetFeed",
        "AssignmentRule",
        "AsyncApexJob",
        "Attachment",
        "BrandTemplate",
        "BusinessHours",
        "BusinessProcess",
        "CallCenter",
        "Campaign",
        "CampaignFeed",
        "CampaignMember",
        "CampaignMemberStatus",
        "CampaignShare",
        "Case",
        "CaseComment",
        "CaseContactRole",
        "CaseFeed",
        "CaseHistory",
        "CaseShare",
        "CaseSolution",
        "CaseStatus",
        "CaseTeamMember",
        "CaseTeamRole",
        "CaseTeamTemplate",
        "CaseTeamTemplateMember",
        "CaseTeamTemplateRecord",
        "CategoryData",
        "CategoryNode",
        "ChatterActivity",
        "CollaborationGroup",
        "CollaborationGroupFeed",
        "CollaborationGroupMember",
        "CollaborationGroupMemberRequest",
        "CollaborationInvitation",
        "Community",
        "Contact",
        "ContactFeed",
        "ContactHistory",
        "ContactShare",
        "ContentDocument",
        "ContentDocumentFeed",
        "ContentDocumentHistory",
        "ContentDocumentLink",
        "ContentVersion",
        "ContentVersionHistory",
        "Contract",
        "ContractContactRole",
        "ContractFeed",
        "ContractHistory",
        "ContractStatus",
        "CronTrigger",
        "Dashboard",
        "DashboardComponent",
        "DashboardComponentFeed",
        "DashboardFeed",
        "Document",
        "DocumentAttachmentMap",
        "EmailServicesAddress",
        "EmailServicesFunction",
        "EmailStatus",
        "EmailTemplate",
        "EntitySubscription",
        "Event",
        "EventAttendee",
        "EventFeed",
        "FeedComment",
        "FeedItem",
        "FeedLike",
        "FeedTrackedChange",
        "FieldPermissions",
        "FiscalYearSettings",
        "Folder",
        "ForecastShare",
        "Group",
        "GroupMember",
        "Holiday",
        "Idea",
        "IdeaComment",
        "Lead",
        "LeadFeed",
        "LeadHistory",
        "LeadShare",
        "LeadStatus",
        "LoginHistory",
        "MailmergeTemplate",
        "Name",
        "NewsFeed",
        "Note",
        "NoteAndAttachment",
        "ObjectPermissions",
        "OpenActivity",
        "Opportunity",
        "OpportunityCompetitor",
        "OpportunityContactRole",
        "OpportunityFeed",
        "OpportunityFieldHistory",
        "OpportunityHistory",
        "OpportunityLineItem",
        "OpportunityPartner",
        "OpportunityShare",
        "OpportunityStage",
        "OrgWideEmailAddress",
        "Organization",
        "Partner",
        "PartnerRole",
        "Period",
        "PermissionSet",
        "PermissionSetAssignment",
        "Position__Feed",
        "Position__c",
        "Pricebook2",
        "PricebookEntry",
        "ProcessInstance",
        "ProcessInstanceHistory",
        "ProcessInstanceStep",
        "ProcessInstanceWorkitem",
        "Product2",
        "Product2Feed",
        "Profile",
        "PushTopic",
        "QueueSobject",
        "RecordType",
        "Report",
        "ReportFeed",
        "SelfServiceUser",
        "Site",
        "SiteDomain",
        "SiteFeed",
        "SiteHistory",
        "Solution",
        "SolutionFeed",
        "SolutionHistory",
        "SolutionStatus",
        "StaticResource",
        "Task",
        "TaskFeed",
        "TaskPriority",
        "TaskStatus",
        "User",
        "UserFeed",
        "UserLicense",
        "UserPreference",
        "UserProfileFeed",
        "UserRecordAccess",
        "UserRole",
        "Vote",
        "WebLink"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "version",
    "sobject"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: version.sobjects.sobject.post
Creates a new object.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "version": {
      "type": "string",
      "description": "An API version.",
      "enum": [
        "v20.0",
        "v21.0",
        "v22.0",
        "v23.0",
        "v24.0"
      ]
    },
    "sobject": {
      "type": "string",
      "description": "A Salesforce's object.",
      "enum": [
        "Account",
        "AccountContactRole",
        "AccountFeed",
        "AccountHistory",
        "AccountPartner",
        "AccountShare",
        "ActivityHistory",
        "AdditionalNumber",
        "AggregateResult",
        "ApexClass",
        "ApexComponent",
        "ApexLog",
        "ApexPage",
        "ApexTestQueueItem",
        "ApexTestResult",
        "ApexTrigger",
        "Approval",
        "Asset",
        "AssetFeed",
        "AssignmentRule",
        "AsyncApexJob",
        "Attachment",
        "BrandTemplate",
        "BusinessHours",
        "BusinessProcess",
        "CallCenter",
        "Campaign",
        "CampaignFeed",
        "CampaignMember",
        "CampaignMemberStatus",
        "CampaignShare",
        "Case",
        "CaseComment",
        "CaseContactRole",
        "CaseFeed",
        "CaseHistory",
        "CaseShare",
        "CaseSolution",
        "CaseStatus",
        "CaseTeamMember",
        "CaseTeamRole",
        "CaseTeamTemplate",
        "CaseTeamTemplateMember",
        "CaseTeamTemplateRecord",
        "CategoryData",
        "CategoryNode",
        "ChatterActivity",
        "CollaborationGroup",
        "CollaborationGroupFeed",
        "CollaborationGroupMember",
        "CollaborationGroupMemberRequest",
        "CollaborationInvitation",
        "Community",
        "Contact",
        "ContactFeed",
        "ContactHistory",
        "ContactShare",
        "ContentDocument",
        "ContentDocumentFeed",
        "ContentDocumentHistory",
        "ContentDocumentLink",
        "ContentVersion",
        "ContentVersionHistory",
        "Contract",
        "ContractContactRole",
        "ContractFeed",
        "ContractHistory",
        "ContractStatus",
        "CronTrigger",
        "Dashboard",
        "DashboardComponent",
        "DashboardComponentFeed",
        "DashboardFeed",
        "Document",
        "DocumentAttachmentMap",
        "EmailServicesAddress",
        "EmailServicesFunction",
        "EmailStatus",
        "EmailTemplate",
        "EntitySubscription",
        "Event",
        "EventAttendee",
        "EventFeed",
        "FeedComment",
        "FeedItem",
        "FeedLike",
        "FeedTrackedChange",
        "FieldPermissions",
        "FiscalYearSettings",
        "Folder",
        "ForecastShare",
        "Group",
        "GroupMember",
        "Holiday",
        "Idea",
        "IdeaComment",
        "Lead",
        "LeadFeed",
        "LeadHistory",
        "LeadShare",
        "LeadStatus",
        "LoginHistory",
        "MailmergeTemplate",
        "Name",
        "NewsFeed",
        "Note",
        "NoteAndAttachment",
        "ObjectPermissions",
        "OpenActivity",
        "Opportunity",
        "OpportunityCompetitor",
        "OpportunityContactRole",
        "OpportunityFeed",
        "OpportunityFieldHistory",
        "OpportunityHistory",
        "OpportunityLineItem",
        "OpportunityPartner",
        "OpportunityShare",
        "OpportunityStage",
        "OrgWideEmailAddress",
        "Organization",
        "Partner",
        "PartnerRole",
        "Period",
        "PermissionSet",
        "PermissionSetAssignment",
        "Position__Feed",
        "Position__c",
        "Pricebook2",
        "PricebookEntry",
        "ProcessInstance",
        "ProcessInstanceHistory",
        "ProcessInstanceStep",
        "ProcessInstanceWorkitem",
        "Product2",
        "Product2Feed",
        "Profile",
        "PushTopic",
        "QueueSobject",
        "RecordType",
        "Report",
        "ReportFeed",
        "SelfServiceUser",
        "Site",
        "SiteDomain",
        "SiteFeed",
        "SiteHistory",
        "Solution",
        "SolutionFeed",
        "SolutionHistory",
        "SolutionStatus",
        "StaticResource",
        "Task",
        "TaskFeed",
        "TaskPriority",
        "TaskStatus",
        "User",
        "UserFeed",
        "UserLicense",
        "UserPreference",
        "UserProfileFeed",
        "UserRecordAccess",
        "UserRole",
        "Vote",
        "WebLink"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "version",
    "sobject"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: version.sobjects.sobject.describe.get
Completely describes the individual metadata at all levels for the specified object. For example, this can be used to retrieve the fields, URLs, and child relationships for the Account object.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "version": {
      "type": "string",
      "description": "An API version.",
      "enum": [
        "v20.0",
        "v21.0",
        "v22.0",
        "v23.0",
        "v24.0"
      ]
    },
    "sobject": {
      "type": "string",
      "description": "A Salesforce's object.",
      "enum": [
        "Account",
        "AccountContactRole",
        "AccountFeed",
        "AccountHistory",
        "AccountPartner",
        "AccountShare",
        "ActivityHistory",
        "AdditionalNumber",
        "AggregateResult",
        "ApexClass",
        "ApexComponent",
        "ApexLog",
        "ApexPage",
        "ApexTestQueueItem",
        "ApexTestResult",
        "ApexTrigger",
        "Approval",
        "Asset",
        "AssetFeed",
        "AssignmentRule",
        "AsyncApexJob",
        "Attachment",
        "BrandTemplate",
        "BusinessHours",
        "BusinessProcess",
        "CallCenter",
        "Campaign",
        "CampaignFeed",
        "CampaignMember",
        "CampaignMemberStatus",
        "CampaignShare",
        "Case",
        "CaseComment",
        "CaseContactRole",
        "CaseFeed",
        "CaseHistory",
        "CaseShare",
        "CaseSolution",
        "CaseStatus",
        "CaseTeamMember",
        "CaseTeamRole",
        "CaseTeamTemplate",
        "CaseTeamTemplateMember",
        "CaseTeamTemplateRecord",
        "CategoryData",
        "CategoryNode",
        "ChatterActivity",
        "CollaborationGroup",
        "CollaborationGroupFeed",
        "CollaborationGroupMember",
        "CollaborationGroupMemberRequest",
        "CollaborationInvitation",
        "Community",
        "Contact",
        "ContactFeed",
        "ContactHistory",
        "ContactShare",
        "ContentDocument",
        "ContentDocumentFeed",
        "ContentDocumentHistory",
        "ContentDocumentLink",
        "ContentVersion",
        "ContentVersionHistory",
        "Contract",
        "ContractContactRole",
        "ContractFeed",
        "ContractHistory",
        "ContractStatus",
        "CronTrigger",
        "Dashboard",
        "DashboardComponent",
        "DashboardComponentFeed",
        "DashboardFeed",
        "Document",
        "DocumentAttachmentMap",
        "EmailServicesAddress",
        "EmailServicesFunction",
        "EmailStatus",
        "EmailTemplate",
        "EntitySubscription",
        "Event",
        "EventAttendee",
        "EventFeed",
        "FeedComment",
        "FeedItem",
        "FeedLike",
        "FeedTrackedChange",
        "FieldPermissions",
        "FiscalYearSettings",
        "Folder",
        "ForecastShare",
        "Group",
        "GroupMember",
        "Holiday",
        "Idea",
        "IdeaComment",
        "Lead",
        "LeadFeed",
        "LeadHistory",
        "LeadShare",
        "LeadStatus",
        "LoginHistory",
        "MailmergeTemplate",
        "Name",
        "NewsFeed",
        "Note",
        "NoteAndAttachment",
        "ObjectPermissions",
        "OpenActivity",
        "Opportunity",
        "OpportunityCompetitor",
        "OpportunityContactRole",
        "OpportunityFeed",
        "OpportunityFieldHistory",
        "OpportunityHistory",
        "OpportunityLineItem",
        "OpportunityPartner",
        "OpportunityShare",
        "OpportunityStage",
        "OrgWideEmailAddress",
        "Organization",
        "Partner",
        "PartnerRole",
        "Period",
        "PermissionSet",
        "PermissionSetAssignment",
        "Position__Feed",
        "Position__c",
        "Pricebook2",
        "PricebookEntry",
        "ProcessInstance",
        "ProcessInstanceHistory",
        "ProcessInstanceStep",
        "ProcessInstanceWorkitem",
        "Product2",
        "Product2Feed",
        "Profile",
        "PushTopic",
        "QueueSobject",
        "RecordType",
        "Report",
        "ReportFeed",
        "SelfServiceUser",
        "Site",
        "SiteDomain",
        "SiteFeed",
        "SiteHistory",
        "Solution",
        "SolutionFeed",
        "SolutionHistory",
        "SolutionStatus",
        "StaticResource",
        "Task",
        "TaskFeed",
        "TaskPriority",
        "TaskStatus",
        "User",
        "UserFeed",
        "UserLicense",
        "UserPreference",
        "UserProfileFeed",
        "UserRecordAccess",
        "UserRole",
        "Vote",
        "WebLink"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "version",
    "sobject"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: version.sobjects.sobject.id.get
Retrieves individual records for an object.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "fields": {
      "type": "string",
      "description": "Optional list of fields used to return values for."
    },
    "version": {
      "type": "string",
      "description": "An API version.",
      "enum": [
        "v20.0",
        "v21.0",
        "v22.0",
        "v23.0",
        "v24.0"
      ]
    },
    "sobject": {
      "type": "string",
      "description": "A Salesforce's object.",
      "enum": [
        "Account",
        "AccountContactRole",
        "AccountFeed",
        "AccountHistory",
        "AccountPartner",
        "AccountShare",
        "ActivityHistory",
        "AdditionalNumber",
        "AggregateResult",
        "ApexClass",
        "ApexComponent",
        "ApexLog",
        "ApexPage",
        "ApexTestQueueItem",
        "ApexTestResult",
        "ApexTrigger",
        "Approval",
        "Asset",
        "AssetFeed",
        "AssignmentRule",
        "AsyncApexJob",
        "Attachment",
        "BrandTemplate",
        "BusinessHours",
        "BusinessProcess",
        "CallCenter",
        "Campaign",
        "CampaignFeed",
        "CampaignMember",
        "CampaignMemberStatus",
        "CampaignShare",
        "Case",
        "CaseComment",
        "CaseContactRole",
        "CaseFeed",
        "CaseHistory",
        "CaseShare",
        "CaseSolution",
        "CaseStatus",
        "CaseTeamMember",
        "CaseTeamRole",
        "CaseTeamTemplate",
        "CaseTeamTemplateMember",
        "CaseTeamTemplateRecord",
        "CategoryData",
        "CategoryNode",
        "ChatterActivity",
        "CollaborationGroup",
        "CollaborationGroupFeed",
        "CollaborationGroupMember",
        "CollaborationGroupMemberRequest",
        "CollaborationInvitation",
        "Community",
        "Contact",
        "ContactFeed",
        "ContactHistory",
        "ContactShare",
        "ContentDocument",
        "ContentDocumentFeed",
        "ContentDocumentHistory",
        "ContentDocumentLink",
        "ContentVersion",
        "ContentVersionHistory",
        "Contract",
        "ContractContactRole",
        "ContractFeed",
        "ContractHistory",
        "ContractStatus",
        "CronTrigger",
        "Dashboard",
        "DashboardComponent",
        "DashboardComponentFeed",
        "DashboardFeed",
        "Document",
        "DocumentAttachmentMap",
        "EmailServicesAddress",
        "EmailServicesFunction",
        "EmailStatus",
        "EmailTemplate",
        "EntitySubscription",
        "Event",
        "EventAttendee",
        "EventFeed",
        "FeedComment",
        "FeedItem",
        "FeedLike",
        "FeedTrackedChange",
        "FieldPermissions",
        "FiscalYearSettings",
        "Folder",
        "ForecastShare",
        "Group",
        "GroupMember",
        "Holiday",
        "Idea",
        "IdeaComment",
        "Lead",
        "LeadFeed",
        "LeadHistory",
        "LeadShare",
        "LeadStatus",
        "LoginHistory",
        "MailmergeTemplate",
        "Name",
        "NewsFeed",
        "Note",
        "NoteAndAttachment",
        "ObjectPermissions",
        "OpenActivity",
        "Opportunity",
        "OpportunityCompetitor",
        "OpportunityContactRole",
        "OpportunityFeed",
        "OpportunityFieldHistory",
        "OpportunityHistory",
        "OpportunityLineItem",
        "OpportunityPartner",
        "OpportunityShare",
        "OpportunityStage",
        "OrgWideEmailAddress",
        "Organization",
        "Partner",
        "PartnerRole",
        "Period",
        "PermissionSet",
        "PermissionSetAssignment",
        "Position__Feed",
        "Position__c",
        "Pricebook2",
        "PricebookEntry",
        "ProcessInstance",
        "ProcessInstanceHistory",
        "ProcessInstanceStep",
        "ProcessInstanceWorkitem",
        "Product2",
        "Product2Feed",
        "Profile",
        "PushTopic",
        "QueueSobject",
        "RecordType",
        "Report",
        "ReportFeed",
        "SelfServiceUser",
        "Site",
        "SiteDomain",
        "SiteFeed",
        "SiteHistory",
        "Solution",
        "SolutionFeed",
        "SolutionHistory",
        "SolutionStatus",
        "StaticResource",
        "Task",
        "TaskFeed",
        "TaskPriority",
        "TaskStatus",
        "User",
        "UserFeed",
        "UserLicense",
        "UserPreference",
        "UserProfileFeed",
        "UserRecordAccess",
        "UserRole",
        "Vote",
        "WebLink"
      ]
    },
    "id": {
      "type": "string",
      "description": "A Salesforce's object ID."
    }
  },
  "additionalProperties": false,
  "required": [
    "version",
    "sobject",
    "id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: version.sobjects.sobject.id.delete
Deletes a record.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "version": {
      "type": "string",
      "description": "An API version.",
      "enum": [
        "v20.0",
        "v21.0",
        "v22.0",
        "v23.0",
        "v24.0"
      ]
    },
    "sobject": {
      "type": "string",
      "description": "A Salesforce's object.",
      "enum": [
        "Account",
        "AccountContactRole",
        "AccountFeed",
        "AccountHistory",
        "AccountPartner",
        "AccountShare",
        "ActivityHistory",
        "AdditionalNumber",
        "AggregateResult",
        "ApexClass",
        "ApexComponent",
        "ApexLog",
        "ApexPage",
        "ApexTestQueueItem",
        "ApexTestResult",
        "ApexTrigger",
        "Approval",
        "Asset",
        "AssetFeed",
        "AssignmentRule",
        "AsyncApexJob",
        "Attachment",
        "BrandTemplate",
        "BusinessHours",
        "BusinessProcess",
        "CallCenter",
        "Campaign",
        "CampaignFeed",
        "CampaignMember",
        "CampaignMemberStatus",
        "CampaignShare",
        "Case",
        "CaseComment",
        "CaseContactRole",
        "CaseFeed",
        "CaseHistory",
        "CaseShare",
        "CaseSolution",
        "CaseStatus",
        "CaseTeamMember",
        "CaseTeamRole",
        "CaseTeamTemplate",
        "CaseTeamTemplateMember",
        "CaseTeamTemplateRecord",
        "CategoryData",
        "CategoryNode",
        "ChatterActivity",
        "CollaborationGroup",
        "CollaborationGroupFeed",
        "CollaborationGroupMember",
        "CollaborationGroupMemberRequest",
        "CollaborationInvitation",
        "Community",
        "Contact",
        "ContactFeed",
        "ContactHistory",
        "ContactShare",
        "ContentDocument",
        "ContentDocumentFeed",
        "ContentDocumentHistory",
        "ContentDocumentLink",
        "ContentVersion",
        "ContentVersionHistory",
        "Contract",
        "ContractContactRole",
        "ContractFeed",
        "ContractHistory",
        "ContractStatus",
        "CronTrigger",
        "Dashboard",
        "DashboardComponent",
        "DashboardComponentFeed",
        "DashboardFeed",
        "Document",
        "DocumentAttachmentMap",
        "EmailServicesAddress",
        "EmailServicesFunction",
        "EmailStatus",
        "EmailTemplate",
        "EntitySubscription",
        "Event",
        "EventAttendee",
        "EventFeed",
        "FeedComment",
        "FeedItem",
        "FeedLike",
        "FeedTrackedChange",
        "FieldPermissions",
        "FiscalYearSettings",
        "Folder",
        "ForecastShare",
        "Group",
        "GroupMember",
        "Holiday",
        "Idea",
        "IdeaComment",
        "Lead",
        "LeadFeed",
        "LeadHistory",
        "LeadShare",
        "LeadStatus",
        "LoginHistory",
        "MailmergeTemplate",
        "Name",
        "NewsFeed",
        "Note",
        "NoteAndAttachment",
        "ObjectPermissions",
        "OpenActivity",
        "Opportunity",
        "OpportunityCompetitor",
        "OpportunityContactRole",
        "OpportunityFeed",
        "OpportunityFieldHistory",
        "OpportunityHistory",
        "OpportunityLineItem",
        "OpportunityPartner",
        "OpportunityShare",
        "OpportunityStage",
        "OrgWideEmailAddress",
        "Organization",
        "Partner",
        "PartnerRole",
        "Period",
        "PermissionSet",
        "PermissionSetAssignment",
        "Position__Feed",
        "Position__c",
        "Pricebook2",
        "PricebookEntry",
        "ProcessInstance",
        "ProcessInstanceHistory",
        "ProcessInstanceStep",
        "ProcessInstanceWorkitem",
        "Product2",
        "Product2Feed",
        "Profile",
        "PushTopic",
        "QueueSobject",
        "RecordType",
        "Report",
        "ReportFeed",
        "SelfServiceUser",
        "Site",
        "SiteDomain",
        "SiteFeed",
        "SiteHistory",
        "Solution",
        "SolutionFeed",
        "SolutionHistory",
        "SolutionStatus",
        "StaticResource",
        "Task",
        "TaskFeed",
        "TaskPriority",
        "TaskStatus",
        "User",
        "UserFeed",
        "UserLicense",
        "UserPreference",
        "UserProfileFeed",
        "UserRecordAccess",
        "UserRole",
        "Vote",
        "WebLink"
      ]
    },
    "id": {
      "type": "string",
      "description": "A Salesforce's object ID."
    }
  },
  "additionalProperties": false,
  "required": [
    "version",
    "sobject",
    "id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: version.sobjects.sobject.id.blobField.get
Retrieves the specified blob field from an individual record. Because blob fields contain binary data, you can't use JSON or XML to retrieve this data.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "fields": {
      "type": "string",
      "description": "Optional list of fields used to return values for."
    },
    "version": {
      "type": "string",
      "description": "An API version.",
      "enum": [
        "v20.0",
        "v21.0",
        "v22.0",
        "v23.0",
        "v24.0"
      ]
    },
    "sobject": {
      "type": "string",
      "description": "A Salesforce's object.",
      "enum": [
        "Account",
        "AccountContactRole",
        "AccountFeed",
        "AccountHistory",
        "AccountPartner",
        "AccountShare",
        "ActivityHistory",
        "AdditionalNumber",
        "AggregateResult",
        "ApexClass",
        "ApexComponent",
        "ApexLog",
        "ApexPage",
        "ApexTestQueueItem",
        "ApexTestResult",
        "ApexTrigger",
        "Approval",
        "Asset",
        "AssetFeed",
        "AssignmentRule",
        "AsyncApexJob",
        "Attachment",
        "BrandTemplate",
        "BusinessHours",
        "BusinessProcess",
        "CallCenter",
        "Campaign",
        "CampaignFeed",
        "CampaignMember",
        "CampaignMemberStatus",
        "CampaignShare",
        "Case",
        "CaseComment",
        "CaseContactRole",
        "CaseFeed",
        "CaseHistory",
        "CaseShare",
        "CaseSolution",
        "CaseStatus",
        "CaseTeamMember",
        "CaseTeamRole",
        "CaseTeamTemplate",
        "CaseTeamTemplateMember",
        "CaseTeamTemplateRecord",
        "CategoryData",
        "CategoryNode",
        "ChatterActivity",
        "CollaborationGroup",
        "CollaborationGroupFeed",
        "CollaborationGroupMember",
        "CollaborationGroupMemberRequest",
        "CollaborationInvitation",
        "Community",
        "Contact",
        "ContactFeed",
        "ContactHistory",
        "ContactShare",
        "ContentDocument",
        "ContentDocumentFeed",
        "ContentDocumentHistory",
        "ContentDocumentLink",
        "ContentVersion",
        "ContentVersionHistory",
        "Contract",
        "ContractContactRole",
        "ContractFeed",
        "ContractHistory",
        "ContractStatus",
        "CronTrigger",
        "Dashboard",
        "DashboardComponent",
        "DashboardComponentFeed",
        "DashboardFeed",
        "Document",
        "DocumentAttachmentMap",
        "EmailServicesAddress",
        "EmailServicesFunction",
        "EmailStatus",
        "EmailTemplate",
        "EntitySubscription",
        "Event",
        "EventAttendee",
        "EventFeed",
        "FeedComment",
        "FeedItem",
        "FeedLike",
        "FeedTrackedChange",
        "FieldPermissions",
        "FiscalYearSettings",
        "Folder",
        "ForecastShare",
        "Group",
        "GroupMember",
        "Holiday",
        "Idea",
        "IdeaComment",
        "Lead",
        "LeadFeed",
        "LeadHistory",
        "LeadShare",
        "LeadStatus",
        "LoginHistory",
        "MailmergeTemplate",
        "Name",
        "NewsFeed",
        "Note",
        "NoteAndAttachment",
        "ObjectPermissions",
        "OpenActivity",
        "Opportunity",
        "OpportunityCompetitor",
        "OpportunityContactRole",
        "OpportunityFeed",
        "OpportunityFieldHistory",
        "OpportunityHistory",
        "OpportunityLineItem",
        "OpportunityPartner",
        "OpportunityShare",
        "OpportunityStage",
        "OrgWideEmailAddress",
        "Organization",
        "Partner",
        "PartnerRole",
        "Period",
        "PermissionSet",
        "PermissionSetAssignment",
        "Position__Feed",
        "Position__c",
        "Pricebook2",
        "PricebookEntry",
        "ProcessInstance",
        "ProcessInstanceHistory",
        "ProcessInstanceStep",
        "ProcessInstanceWorkitem",
        "Product2",
        "Product2Feed",
        "Profile",
        "PushTopic",
        "QueueSobject",
        "RecordType",
        "Report",
        "ReportFeed",
        "SelfServiceUser",
        "Site",
        "SiteDomain",
        "SiteFeed",
        "SiteHistory",
        "Solution",
        "SolutionFeed",
        "SolutionHistory",
        "SolutionStatus",
        "StaticResource",
        "Task",
        "TaskFeed",
        "TaskPriority",
        "TaskStatus",
        "User",
        "UserFeed",
        "UserLicense",
        "UserPreference",
        "UserProfileFeed",
        "UserRecordAccess",
        "UserRole",
        "Vote",
        "WebLink"
      ]
    },
    "id": {
      "type": "string",
      "description": "A Salesforce's object ID."
    },
    "blobField": {
      "type": "string",
      "description": "A Salesforce's object blob field."
    }
  },
  "additionalProperties": false,
  "required": [
    "version",
    "sobject",
    "id",
    "blobField"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: version.sobjects.User.id.password.get
Gets password expiration status for a given user. The session must have permission to access the given user password information, otherwise an error response is returned.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "version": {
      "type": "string",
      "description": "An API version.",
      "enum": [
        "v20.0",
        "v21.0",
        "v22.0",
        "v23.0",
        "v24.0"
      ]
    },
    "id": {
      "type": "string",
      "description": "A Salesforce's user ID."
    }
  },
  "additionalProperties": false,
  "required": [
    "version",
    "id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: version.sobjects.User.id.password.post
Changes the password for a given user ID. The new password must conform to the password policies for the organization, otherwise you will get an error response. You can only change one password per request.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "version": {
      "type": "string",
      "description": "An API version.",
      "enum": [
        "v20.0",
        "v21.0",
        "v22.0",
        "v23.0",
        "v24.0"
      ]
    },
    "id": {
      "type": "string",
      "description": "A Salesforce's user ID."
    }
  },
  "additionalProperties": false,
  "required": [
    "version",
    "id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: version.sobjects.User.id.password.delete
Resets an user password. Salesforce will reset the user password to an auto-generated password, which will be returned in the response.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "version": {
      "type": "string",
      "description": "An API version.",
      "enum": [
        "v20.0",
        "v21.0",
        "v22.0",
        "v23.0",
        "v24.0"
      ]
    },
    "id": {
      "type": "string",
      "description": "A Salesforce's user ID."
    }
  },
  "additionalProperties": false,
  "required": [
    "version",
    "id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: version.query.get
Executes the specified SOQL query. If the initial query returns only part of the results, the end of the response will contain a field called nextRecordsUrl. In such cases, use the resource {version}/query/{id} to request the next batch of records and repeat until all records have been retrieved.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "version": {
      "type": "string",
      "description": "An API version.",
      "enum": [
        "v20.0",
        "v21.0",
        "v22.0",
        "v23.0",
        "v24.0"
      ]
    },
    "q": {
      "type": "string",
      "description": "A SOQL query."
    }
  },
  "additionalProperties": false,
  "required": [
    "version",
    "q"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: version.query.id.get
Retrieves the remaining SOQL query results using the identifier within the field "nextRecordsUrl" value (i.e. "nextRecordsUrl" : "/services/data/v24.0/query/01gD0000002HU6KIAW-2000") located at the end of the initial query results. Requests the next batch of records and you could repeat (using the corresponding identifier) until all records have been retrieved.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "version": {
      "type": "string",
      "description": "An API version.",
      "enum": [
        "v20.0",
        "v21.0",
        "v22.0",
        "v23.0",
        "v24.0"
      ]
    },
    "id": {
      "type": "string",
      "description": "An identifier used to retrieve the remaining results."
    }
  },
  "additionalProperties": false,
  "required": [
    "version",
    "id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: version.search.get
Executes the specified SOSL search. The search string must be URL-encoded.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "version": {
      "type": "string",
      "description": "An API version.",
      "enum": [
        "v20.0",
        "v21.0",
        "v22.0",
        "v23.0",
        "v24.0"
      ]
    },
    "q": {
      "type": "string",
      "description": "A SOSL statement."
    }
  },
  "additionalProperties": false,
  "required": [
    "version",
    "q"
  ]
}
```
### Output Schema
```json
{}
```
