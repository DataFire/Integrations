# @datafire/amazonaws_mobile

Client library for AWS Mobile

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_mobile
```
```js
let amazonaws_mobile = require('@datafire/amazonaws_mobile').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

.then(data => {
  console.log(data);
});
```

## Description

 AWS Mobile Service provides mobile app and website developers with capabilities required to configure AWS resources and bootstrap their developer desktop projects with the necessary SDKs, constants, tools and samples to make use of those resources. 

## Actions

### ListBundles



```js
amazonaws_mobile.ListBundles({}, context)
```

#### Input
* input `object`
  * maxResults `integer`
  * nextToken `string`

#### Output
* output [ListBundlesResult](#listbundlesresult)

### DescribeBundle



```js
amazonaws_mobile.DescribeBundle({
  "bundleId": ""
}, context)
```

#### Input
* input `object`
  * bundleId **required** `string`

#### Output
* output [DescribeBundleResult](#describebundleresult)

### ExportBundle



```js
amazonaws_mobile.ExportBundle({
  "bundleId": ""
}, context)
```

#### Input
* input `object`
  * bundleId **required** `string`
  * projectId `string`
  * platform `string`

#### Output
* output [ExportBundleResult](#exportbundleresult)

### ExportProject



```js
amazonaws_mobile.ExportProject({
  "projectId": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`

#### Output
* output [ExportProjectResult](#exportprojectresult)

### DescribeProject



```js
amazonaws_mobile.DescribeProject({
  "projectId": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`
  * syncFromResources `boolean`

#### Output
* output [DescribeProjectResult](#describeprojectresult)

### ListProjects



```js
amazonaws_mobile.ListProjects({}, context)
```

#### Input
* input `object`
  * maxResults `integer`
  * nextToken `string`

#### Output
* output [ListProjectsResult](#listprojectsresult)

### CreateProject



```js
amazonaws_mobile.CreateProject({}, context)
```

#### Input
* input `object`
  * name `string`
  * region `string`
  * snapshotId `string`
  * contents `string`:  Binary file data. 

#### Output
* output [CreateProjectResult](#createprojectresult)

### DeleteProject



```js
amazonaws_mobile.DeleteProject({
  "projectId": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`

#### Output
* output [DeleteProjectResult](#deleteprojectresult)

### UpdateProject



```js
amazonaws_mobile.UpdateProject({
  "projectId": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`
  * contents `string`:  Binary file data. 

#### Output
* output [UpdateProjectResult](#updateprojectresult)



## Definitions

### AccountActionRequiredException
* AccountActionRequiredException `object`:  Account Action is required in order to continue the request. 
  * message [ErrorMessage](#errormessage)

### AttributeKey
* AttributeKey `string`:  Key part of key-value attribute pairs. 

### AttributeValue
* AttributeValue `string`:  Value part of key-value attribute pairs. 

### Attributes
* Attributes `object`:  Key-value attribute pairs. 

### BadRequestException
* BadRequestException `object`:  The request cannot be processed because some parameter is not valid or the project state prevents the operation from being performed. 
  * message [ErrorMessage](#errormessage)

### Boolean
* Boolean `boolean`

### BundleDescription
* BundleDescription `string`:  Description of the download bundle. 

### BundleDetails
* BundleDetails `object`:  The details of the bundle. 
  * availablePlatforms [Platforms](#platforms)
  * bundleId [BundleId](#bundleid)
  * description [BundleDescription](#bundledescription)
  * iconUrl [IconUrl](#iconurl)
  * title [BundleTitle](#bundletitle)
  * version [BundleVersion](#bundleversion)

### BundleId
* BundleId `string`:  Unique bundle identifier. 

### BundleList
* BundleList `array`:  A list of bundles. 
  * items [BundleDetails](#bundledetails)

### BundleTitle
* BundleTitle `string`:  Title of the download bundle. 

### BundleVersion
* BundleVersion `string`:  Version of the download bundle. 

### ConsoleUrl
* ConsoleUrl `string`

### Contents
* Contents `string`:  Binary file data. 

### CreateProjectRequest
* CreateProjectRequest `object`:  Request structure used to request a project be created. 
  * contents

### CreateProjectResult
* CreateProjectResult `object`:  Result structure used in response to a request to create a project. 
  * details
    * consoleUrl
    * createdDate
    * lastUpdatedDate
    * name [ProjectName](#projectname)
    * projectId [ProjectId](#projectid)
    * region [ProjectRegion](#projectregion)
    * resources [Resources](#resources)
    * state [ProjectState](#projectstate)

### Date
* Date `string`

### DeleteProjectRequest
* DeleteProjectRequest `object`:  Request structure used to request a project be deleted. 

### DeleteProjectResult
* DeleteProjectResult `object`:  Result structure used in response to request to delete a project. 
  * deletedResources
    * items [Resource](#resource)
  * orphanedResources
    * items [Resource](#resource)

### DescribeBundleRequest
* DescribeBundleRequest `object`:  Request structure to request the details of a specific bundle. 

### DescribeBundleResult
* DescribeBundleResult `object`:  Result structure contains the details of the bundle. 
  * details
    * availablePlatforms [Platforms](#platforms)
    * bundleId [BundleId](#bundleid)
    * description [BundleDescription](#bundledescription)
    * iconUrl [IconUrl](#iconurl)
    * title [BundleTitle](#bundletitle)
    * version [BundleVersion](#bundleversion)

### DescribeProjectRequest
* DescribeProjectRequest `object`:  Request structure used to request details about a project. 

### DescribeProjectResult
* DescribeProjectResult `object`:  Result structure used for requests of project details. 
  * details [ProjectDetails](#projectdetails)

### DownloadUrl
* DownloadUrl `string`:  The download Url. 

### ErrorMessage
* ErrorMessage `string`:  The Exception Error Message. 

### ExportBundleRequest
* ExportBundleRequest `object`:  Request structure used to request generation of custom SDK and tool packages required to integrate mobile web or app clients with backed AWS resources. 

### ExportBundleResult
* ExportBundleResult `object`:  Result structure which contains link to download custom-generated SDK and tool packages used to integrate mobile web or app clients with backed AWS resources. 
  * downloadUrl

### ExportProjectRequest
* ExportProjectRequest `object`:  Request structure used in requests to export project configuration details. 

### ExportProjectResult
* ExportProjectResult `object`:  Result structure used for requests to export project configuration details. 
  * downloadUrl
  * shareUrl
  * snapshotId

### Feature
* Feature `string`:  Identifies which feature in AWS Mobile Hub is associated with this AWS resource. 

### IconUrl
* IconUrl `string`:  Icon for the download bundle. 

### InternalFailureException
* InternalFailureException `object`:  The service has encountered an unexpected error condition which prevents it from servicing the request. 
  * message [ErrorMessage](#errormessage)

### LimitExceededException
* LimitExceededException `object`:  There are too many AWS Mobile Hub projects in the account or the account has exceeded the maximum number of resources in some AWS service. You should create another sub-account using AWS Organizations or remove some resources and retry your request. 
  * message [ErrorMessage](#errormessage)

### ListBundlesRequest
* ListBundlesRequest `object`:  Request structure to request all available bundles. 

### ListBundlesResult
* ListBundlesResult `object`:  Result structure contains a list of all available bundles with details. 
  * bundleList
    * items [BundleDetails](#bundledetails)
  * nextToken

### ListProjectsRequest
* ListProjectsRequest `object`:  Request structure used to request projects list in AWS Mobile Hub. 

### ListProjectsResult
* ListProjectsResult `object`:  Result structure used for requests to list projects in AWS Mobile Hub. 
  * nextToken [NextToken](#nexttoken)
  * projects [ProjectSummaries](#projectsummaries)

### MaxResults
* MaxResults `integer`:  Maximum number of records to list in a single response. 

### NextToken
* NextToken `string`:  Pagination token. Set to null to start listing records from start. If non-null pagination token is returned in a result, then pass its value in here in another request to list more entries. 

### NotFoundException
* NotFoundException `object`:  No entity can be found with the specified identifier. 
  * message [ErrorMessage](#errormessage)

### Platform
* Platform `string` (values: OSX, WINDOWS, LINUX, OBJC, SWIFT, ANDROID, JAVASCRIPT):  Developer desktop or target mobile app or website platform. 

### Platforms
* Platforms `array`:  Developer desktop or mobile app or website platforms. 
  * items [Platform](#platform)

### ProjectDetails
* ProjectDetails `object`:  Detailed information about an AWS Mobile Hub project. 
  * consoleUrl
  * createdDate
  * lastUpdatedDate
  * name [ProjectName](#projectname)
  * projectId [ProjectId](#projectid)
  * region [ProjectRegion](#projectregion)
  * resources [Resources](#resources)
  * state [ProjectState](#projectstate)

### ProjectId
* ProjectId `string`:  Unique project identifier. 

### ProjectName
* ProjectName `string`:  Name of the project. 

### ProjectRegion
* ProjectRegion `string`:  Default region to use for AWS resource creation in the AWS Mobile Hub project. 

### ProjectState
* ProjectState `string` (values: NORMAL, SYNCING, IMPORTING):  Synchronization state for a project. 

### ProjectSummaries
* ProjectSummaries `array`:  List of projects. 
  * items [ProjectSummary](#projectsummary)

### ProjectSummary
* ProjectSummary `object`:  Summary information about an AWS Mobile Hub project. 
  * name
  * projectId

### Resource
* Resource `object`:  Information about an instance of an AWS resource associated with a project. 
  * arn [ResourceArn](#resourcearn)
  * attributes [Attributes](#attributes)
  * feature [Feature](#feature)
  * name [ResourceName](#resourcename)
  * type [ResourceType](#resourcetype)

### ResourceArn
* ResourceArn `string`:  AWS resource name which uniquely identifies the resource in AWS systems. 

### ResourceName
* ResourceName `string`:  Name of the AWS resource (e.g., for an Amazon S3 bucket this is the name of the bucket). 

### ResourceType
* ResourceType `string`:  Simplified name for type of AWS resource (e.g., bucket is an Amazon S3 bucket). 

### Resources
* Resources `array`:  List of AWS resources associated with a project. 
  * items [Resource](#resource)

### ServiceUnavailableException
* ServiceUnavailableException `object`:  The service is temporarily unavailable. The request should be retried after some time delay. 
  * message [ErrorMessage](#errormessage)

### ShareUrl
* ShareUrl `string`:  URL which can be shared to allow other AWS users to create their own project in AWS Mobile Hub with the same configuration as the specified project. This URL pertains to a snapshot in time of the project configuration that is created when this API is called. If you want to share additional changes to your project configuration, then you will need to create and share a new snapshot by calling this method again. 

### SnapshotId
* SnapshotId `string`:  Unique identifier for the exported snapshot of the project configuration. This snapshot identifier is included in the share URL. 

### TooManyRequestsException
* TooManyRequestsException `object`:  Too many requests have been received for this AWS account in too short a time. The request should be retried after some time delay. 
  * message [ErrorMessage](#errormessage)

### UnauthorizedException
* UnauthorizedException `object`:  Credentials of the caller are insufficient to authorize the request. 
  * message [ErrorMessage](#errormessage)

### UpdateProjectRequest
* UpdateProjectRequest `object`:  Request structure used for requests to update project configuration. 
  * contents

### UpdateProjectResult
* UpdateProjectResult `object`:  Result structure used for requests to updated project configuration. 
  * details
    * consoleUrl
    * createdDate
    * lastUpdatedDate
    * name [ProjectName](#projectname)
    * projectId [ProjectId](#projectid)
    * region [ProjectRegion](#projectregion)
    * resources [Resources](#resources)
    * state [ProjectState](#projectstate)


