# @datafire/azure_security_applicationwhitelistings

Client library for Security Center

## Installation and Usage
```bash
npm install --save @datafire/azure_security_applicationwhitelistings
```
```js
let azure_security_applicationwhitelistings = require('@datafire/azure_security_applicationwhitelistings').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

.then(data => {
  console.log(data);
});
```

## Description

API spec for Microsoft.Security (Azure Security Center) resource provider

## Actions

### AdaptiveApplicationControls_List
Gets a list of application control VM/server groups for the subscription.


```js
azure_security_applicationwhitelistings.AdaptiveApplicationControls_List({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure subscription ID
  * api-version **required** `string`: API version for the operation
  * includePathRecommendations `boolean` (values: false, true): Include the policy rules
  * summary `boolean` (values: false, true): Return output in a summarized form

#### Output
* output [AppWhitelistingGroups](#appwhitelistinggroups)

### AdaptiveApplicationControls_Get
Gets an application control VM/server group.


```js
azure_security_applicationwhitelistings.AdaptiveApplicationControls_Get({
  "subscriptionId": "",
  "ascLocation": "",
  "groupName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure subscription ID
  * ascLocation **required** `string`: The location where ASC stores the data of the subscription. can be retrieved from Get locations
  * groupName **required** `string`: Name of an application control VM/server group
  * api-version **required** `string`: API version for the operation

#### Output
* output [AppWhitelistingGroup](#appwhitelistinggroup)

### AdaptiveApplicationControls_Put
Update an application control VM/server group


```js
azure_security_applicationwhitelistings.AdaptiveApplicationControls_Put({
  "subscriptionId": "",
  "ascLocation": "",
  "groupName": "",
  "api-version": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure subscription ID
  * ascLocation **required** `string`: The location where ASC stores the data of the subscription. can be retrieved from Get locations
  * groupName **required** `string`: Name of an application control VM/server group
  * api-version **required** `string`: API version for the operation
  * body **required** [AppWhitelistingPutGroupData](#appwhitelistingputgroupdata)

#### Output
* output [AppWhitelistingGroup](#appwhitelistinggroup)



## Definitions

### AppWhitelistingGroup
* AppWhitelistingGroup `object`
  * properties **required** [AppWhitelistingGroupData](#appwhitelistinggroupdata)
  * id `string`: Resource Id
  * name `string`: Resource name
  * type `string`: Resource type
  * location `string`: Location where the resource is stored

### AppWhitelistingGroupData
* AppWhitelistingGroupData `object`: Represents a VM/server group and set of rules that are Recommended by Azure Security Center to be allowed
  * configurationStatus [ConfigurationStatus](#configurationstatus)
  * enforcementMode [EnforcementMode](#enforcementmode)
  * issues [AppWhitelistingIssuesSummaries](#appwhitelistingissuessummaries)
  * pathRecommendations [PathRecommendations](#pathrecommendations)
  * protectionMode [ProtectionMode](#protectionmode)
  * recommendationStatus [RecommendationStatus](#recommendationstatus)
  * sourceSystem [SourceSystem](#sourcesystem)
  * vmRecommendations [VmRecommendations](#vmrecommendations)

### AppWhitelistingGroups
* AppWhitelistingGroups `object`: Represents a list of VM/server groups and set of rules that are Recommended by Azure Security Center to be allowed
  * value `array`
    * items [AppWhitelistingGroup](#appwhitelistinggroup)

### AppWhitelistingIssue
* AppWhitelistingIssue `string` (values: ViolationsAudited, ViolationsBlocked, MsiAndScriptViolationsAudited, MsiAndScriptViolationsBlocked, ExecutableViolationsAudited, RulesViolatedManually): An alert that VMs/servers within a group can have

### AppWhitelistingIssueSummary
* AppWhitelistingIssueSummary `object`: Represents a summary of the alerts of the VM/server group
  * issue [AppWhitelistingIssue](#appwhitelistingissue)
  * numberOfVms `number`: The number of machines in the VM/server group that have this alert

### AppWhitelistingIssuesSummaries
* AppWhitelistingIssuesSummaries `array`
  * items [AppWhitelistingIssueSummary](#appwhitelistingissuesummary)

### AppWhitelistingPutGroupData
* AppWhitelistingPutGroupData `object`: The altered data of the recommended VM/server group policy
  * enforcementMode [EnforcementMode](#enforcementmode)
  * pathRecommendations [PathRecommendations](#pathrecommendations)
  * protectionMode [ProtectionMode](#protectionmode)
  * vmRecommendations [VmRecommendations](#vmrecommendations)

### AppWhitelistingResourceType
* AppWhitelistingResourceType `string`: The resource type of the application control resources

### ConfigurationStatus
* ConfigurationStatus `string` (values: Configured, NotConfigured, InProgress, Failed, NoStatus): The configuration status of the VM/server group or machine or rule on the machine

### EnforcementMode
* EnforcementMode `string` (values: Audit, Enforce, None): The application control policy enforcement/protection mode of the VM/server group

### FileType
* FileType `string` (values: Exe, Dll, Msi, Script, Executable, Unknown): The type of the file (for Linux files - Executable is used)

### GroupResourceId
* GroupResourceId `string`: The azure resource id of the application control VM/server group

### PathRecommendation
* PathRecommendation `object`: Represents a path that is recommended to be allowed and its properties
  * action [RecommendationAction](#recommendationaction)
  * common `boolean`: Whether the path is commonly run on the machine
  * configurationStatus [ConfigurationStatus](#configurationstatus)
  * fileType [FileType](#filetype)
  * path `string`: The full path to whitelist
  * publisherInfo [PublisherInfo](#publisherinfo)
  * type [RecommendationType](#recommendationtype)
  * userSids `array`
    * items `string`: A security identifier
  * usernames `array`
    * items [UserRecommendation](#userrecommendation)

### PathRecommendations
* PathRecommendations `array`
  * items [PathRecommendation](#pathrecommendation)

### ProtectionMode
* ProtectionMode `object`: The protection mode of the collection/file types. Exe/Msi/Script are used for Windows, Executable is used for Linux.
  * exe [EnforcementMode](#enforcementmode)
  * executable [EnforcementMode](#enforcementmode)
  * msi [EnforcementMode](#enforcementmode)
  * script [EnforcementMode](#enforcementmode)

### PublisherInfo
* PublisherInfo `object`: Represents the publisher information of a process/rule
  * binaryName `string`: The "OriginalName" field taken from the file's version resource
  * productName `string`: The product name taken from the file's version resource
  * publisherName `string`: The Subject field of the x.509 certificate used to sign the code, using the following fields -  O = Organization, L = Locality, S = State or Province, and C = Country
  * version `string`: The binary file version taken from the file's version resource

### RecommendationAction
* RecommendationAction `string` (values: Recommended, Add, Remove): The recommendation action of the VM/server or rule

### RecommendationStatus
* RecommendationStatus `string` (values: Recommended, NotRecommended, NotAvailable, NoStatus): The recommendation status of the VM/server group or VM/server

### RecommendationType
* RecommendationType `string` (values: File, FileHash, PublisherSignature, ProductSignature, BinarySignature, VersionAndAboveSignature): The type of the rule to be allowed

### SourceSystem
* SourceSystem `string` (values: Azure_AppLocker, Azure_AuditD, NonAzure_AppLocker, NonAzure_AuditD, None): The source type of the VM/server group

### UserRecommendation
* UserRecommendation `object`: Represents a user that is recommended to be allowed for a certain rule
  * recommendationAction [RecommendationAction](#recommendationaction)
  * username `string`: Represents a user that is recommended to be allowed for a certain rule

### VmRecommendation
* VmRecommendation `object`: Represents a machine that is part of a VM/server group
  * configurationStatus [ConfigurationStatus](#configurationstatus)
  * recommendationAction [RecommendationAction](#recommendationaction)
  * resourceId [VmResourceId](#vmresourceid)

### VmRecommendations
* VmRecommendations `array`
  * items [VmRecommendation](#vmrecommendation)

### VmResourceId
* VmResourceId `string`: The full azure resource id of the machine


