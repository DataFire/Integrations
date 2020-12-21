# @datafire/amazonaws_outposts

Client library for AWS Outposts

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_outposts
```
```js
let amazonaws_outposts = require('@datafire/amazonaws_outposts').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

.then(data => {
  console.log(data);
});
```

## Description

AWS Outposts is a fully-managed service that extends AWS infrastructure, APIs, and tools to customer premises. By providing local access to AWS-managed infrastructure, AWS Outposts enables customers to build and run applications on premises using the same programming interfaces as in AWS Regions, while using local compute and storage resources for lower latency and local data processing needs.

## Actions

### ListOutposts



```js
amazonaws_outposts.ListOutposts({}, context)
```

#### Input
* input `object`
  * NextToken `string`
  * MaxResults `integer`

#### Output
* output [ListOutpostsOutput](#listoutpostsoutput)

### CreateOutpost



```js
amazonaws_outposts.CreateOutpost({
  "Name": "",
  "SiteId": ""
}, context)
```

#### Input
* input `object`
  * AvailabilityZone `string`: <p>The Availability Zone.</p> <p>You must specify <code>AvailabilityZone</code> or <code>AvailabilityZoneId</code>.</p>
  * AvailabilityZoneId `string`: <p>The ID of the Availability Zone.</p> <p>You must specify <code>AvailabilityZone</code> or <code>AvailabilityZoneId</code>.</p>
  * Description `string`: The Outpost description.
  * Name **required** `string`: The name of the Outpost.
  * SiteId **required** `string`: The ID of the site.
  * Tags `object`: The tags to apply to the Outpost.

#### Output
* output [CreateOutpostOutput](#createoutpostoutput)

### DeleteOutpost



```js
amazonaws_outposts.DeleteOutpost({
  "OutpostId": ""
}, context)
```

#### Input
* input `object`
  * OutpostId **required** `string`

#### Output
* output [DeleteOutpostOutput](#deleteoutpostoutput)

### GetOutpost



```js
amazonaws_outposts.GetOutpost({
  "OutpostId": ""
}, context)
```

#### Input
* input `object`
  * OutpostId **required** `string`

#### Output
* output [GetOutpostOutput](#getoutpostoutput)

### GetOutpostInstanceTypes



```js
amazonaws_outposts.GetOutpostInstanceTypes({
  "OutpostId": ""
}, context)
```

#### Input
* input `object`
  * OutpostId **required** `string`
  * NextToken `string`
  * MaxResults `integer`

#### Output
* output [GetOutpostInstanceTypesOutput](#getoutpostinstancetypesoutput)

### ListSites



```js
amazonaws_outposts.ListSites({}, context)
```

#### Input
* input `object`
  * NextToken `string`
  * MaxResults `integer`

#### Output
* output [ListSitesOutput](#listsitesoutput)

### DeleteSite



```js
amazonaws_outposts.DeleteSite({
  "SiteId": ""
}, context)
```

#### Input
* input `object`
  * SiteId **required** `string`

#### Output
* output [DeleteSiteOutput](#deletesiteoutput)



## Definitions

### AccessDeniedException


### AccountId
* AccountId `string`: The ID of the AWS account.

### AvailabilityZone
* AvailabilityZone `string`: <p>The Availability Zone.</p> <p>You must specify <code>AvailabilityZone</code> or <code>AvailabilityZoneId</code>.</p>

### AvailabilityZoneId
* AvailabilityZoneId `string`: <p>The ID of the Availability Zone.</p> <p>You must specify <code>AvailabilityZone</code> or <code>AvailabilityZoneId</code>.</p>

### CreateOutpostInput
* CreateOutpostInput `object`
  * AvailabilityZone [AvailabilityZone](#availabilityzone)
  * AvailabilityZoneId [AvailabilityZoneId](#availabilityzoneid)
  * Description [OutpostDescription](#outpostdescription)
  * Name **required** [OutpostName](#outpostname)
  * SiteId **required** [SiteId](#siteid)
  * Tags

### CreateOutpostOutput
* CreateOutpostOutput `object`
  * Outpost [Outpost](#outpost)

### DeleteOutpostInput
* DeleteOutpostInput `object`

### DeleteOutpostOutput
* DeleteOutpostOutput `object`

### DeleteSiteInput
* DeleteSiteInput `object`

### DeleteSiteOutput
* DeleteSiteOutput `object`

### GetOutpostInput
* GetOutpostInput `object`

### GetOutpostInstanceTypesInput
* GetOutpostInstanceTypesInput `object`

### GetOutpostInstanceTypesOutput
* GetOutpostInstanceTypesOutput `object`
  * InstanceTypes [InstanceTypeListDefinition](#instancetypelistdefinition)
  * NextToken [Token](#token)
  * OutpostArn [OutpostArn](#outpostarn)
  * OutpostId [OutpostId](#outpostid)

### GetOutpostOutput
* GetOutpostOutput `object`
  * Outpost [Outpost](#outpost)

### InstanceType
* InstanceType `string`: The instance type.

### InstanceTypeItem
* InstanceTypeItem `object`: Information about an instance type.
  * InstanceType [InstanceType](#instancetype)

### InstanceTypeListDefinition
* InstanceTypeListDefinition `array`: Information about the instance types.
  * items [InstanceTypeItem](#instancetypeitem)

### InternalServerException


### LifeCycleStatus
* LifeCycleStatus `string`: The life cycle status.

### ListOutpostsInput
* ListOutpostsInput `object`

### ListOutpostsOutput
* ListOutpostsOutput `object`
  * NextToken [Token](#token)
  * Outposts [outpostListDefinition](#outpostlistdefinition)

### ListSitesInput
* ListSitesInput `object`

### ListSitesOutput
* ListSitesOutput `object`
  * NextToken [Token](#token)
  * Sites [siteListDefinition](#sitelistdefinition)

### MaxResults1000
* MaxResults1000 `integer`: The maximum page size.

### NotFoundException


### Outpost
* Outpost `object`: Information about an Outpost.
  * AvailabilityZone [AvailabilityZone](#availabilityzone)
  * AvailabilityZoneId [AvailabilityZoneId](#availabilityzoneid)
  * Description [OutpostDescription](#outpostdescription)
  * LifeCycleStatus [LifeCycleStatus](#lifecyclestatus)
  * Name [OutpostName](#outpostname)
  * OutpostArn [OutpostArn](#outpostarn)
  * OutpostId [OutpostId](#outpostid)
  * OwnerId [OwnerId](#ownerid)
  * SiteId [SiteId](#siteid)
  * Tags

### OutpostArn
* OutpostArn `string`: The Amazon Resource Name (ARN) of the Outpost.

### OutpostDescription
* OutpostDescription `string`: The Outpost description.

### OutpostId
* OutpostId `string`: The ID of the Outpost.

### OutpostName
* OutpostName `string`: The name of the Outpost.

### OwnerId
* OwnerId `string`: The AWS account ID of the Outpost owner.

### ServiceQuotaExceededException


### Site
* Site `object`: Information about a site.
  * AccountId [AccountId](#accountid)
  * Description [SiteDescription](#sitedescription)
  * Name [SiteName](#sitename)
  * SiteId [SiteId](#siteid)
  * Tags

### SiteDescription
* SiteDescription `string`: The description of the site.

### SiteId
* SiteId `string`: The ID of the site.

### SiteName
* SiteName `string`: The name of the site.

### TagKey
* TagKey `string`

### TagMap
* TagMap `object`

### TagValue
* TagValue `string`

### Token
* Token `string`: The pagination token.

### ValidationException


### outpostListDefinition
* outpostListDefinition `array`: Information about the Outposts.
  * items [Outpost](#outpost)

### siteListDefinition
* siteListDefinition `array`: Information about the sites.
  * items [Site](#site)


