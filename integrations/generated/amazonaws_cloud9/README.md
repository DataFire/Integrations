# @datafire/amazonaws_cloud9

Client library for AWS Cloud9

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_cloud9
```
```js
let amazonaws_cloud9 = require('@datafire/amazonaws_cloud9').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

amazonaws_cloud9.CreateEnvironmentEC2({}).then(data => {
  console.log(data);
})
```

## Description

<fullname>AWS Cloud9</fullname> <p>AWS Cloud9 is a collection of tools that you can use to code, build, run, test, debug, and release software in the cloud.</p> <p>In the background, these tools are available through development environments running on Amazon Elastic Compute Cloud (Amazon EC2) instances (known as <i>Amazon EC2 environments</i>), your own servers (known as <i>SSH environments</i>), or a combination. This enables you to create and switch between multiple environments, with each environment set up for a specific development project.</p> <p>For more information about AWS Cloud9, see the <i>AWS Cloud9 User Guide</i>.</p> <p>AWS Cloud9 supports these operations:</p> <ul> <li> <p> <code>CreateEnvironmentEC2</code>: Creates an AWS Cloud9 development environment, launches an Amazon EC2 instance, and then hosts the environment on the instance.</p> </li> <li> <p> <code>CreateEnvironmentMembership</code>: Adds an environment member to an environment.</p> </li> <li> <p> <code>DeleteEnvironment</code>: Deletes an environment. If the environment is hosted on an Amazon EC2 instance, also terminates the instance.</p> </li> <li> <p> <code>DeleteEnvironmentMembership</code>: Deletes an environment member from an environment.</p> </li> <li> <p> <code>DescribeEnvironmentMemberships</code>: Gets information about environment members for an environment.</p> </li> <li> <p> <code>DescribeEnvironments</code>: Gets information about environments.</p> </li> <li> <p> <code>DescribeEnvironmentStatus</code>: Gets status information for an environment.</p> </li> <li> <p> <code>ListEnvironments</code>: Gets a list of environment identifiers.</p> </li> <li> <p> <code>UpdateEnvironment</code>: Changes the settings of an existing environment.</p> </li> <li> <p> <code>UpdateEnvironmentMembership</code>: Changes the settings of an existing environment member for an environment.</p> </li> </ul>

## Actions

### CreateEnvironmentEC2



```js
amazonaws_cloud9.CreateEnvironmentEC2({
  "name": "",
  "instanceType": ""
}, context)
```

#### Input
* input `object`
  * automaticStopTimeMinutes [AutomaticStopTimeMinutes](#automaticstoptimeminutes)
  * clientRequestToken [ClientRequestToken](#clientrequesttoken)
  * description [EnvironmentDescription](#environmentdescription)
  * instanceType **required** [InstanceType](#instancetype)
  * name **required** [EnvironmentName](#environmentname)
  * ownerArn [UserArn](#userarn)
  * subnetId [SubnetId](#subnetid)

#### Output
* output [CreateEnvironmentEC2Result](#createenvironmentec2result)

### CreateEnvironmentMembership



```js
amazonaws_cloud9.CreateEnvironmentMembership({
  "environmentId": "",
  "userArn": "",
  "permissions": ""
}, context)
```

#### Input
* input `object`
  * environmentId **required** [EnvironmentId](#environmentid)
  * permissions **required** [MemberPermissions](#memberpermissions)
  * userArn **required** [UserArn](#userarn)

#### Output
* output [CreateEnvironmentMembershipResult](#createenvironmentmembershipresult)

### DeleteEnvironment



```js
amazonaws_cloud9.DeleteEnvironment({
  "environmentId": ""
}, context)
```

#### Input
* input `object`
  * environmentId **required** [EnvironmentId](#environmentid)

#### Output
* output [DeleteEnvironmentResult](#deleteenvironmentresult)

### DeleteEnvironmentMembership



```js
amazonaws_cloud9.DeleteEnvironmentMembership({
  "environmentId": "",
  "userArn": ""
}, context)
```

#### Input
* input `object`
  * environmentId **required** [EnvironmentId](#environmentid)
  * userArn **required** [UserArn](#userarn)

#### Output
* output [DeleteEnvironmentMembershipResult](#deleteenvironmentmembershipresult)

### DescribeEnvironmentMemberships



```js
amazonaws_cloud9.DescribeEnvironmentMemberships({}, context)
```

#### Input
* input `object`
  * maxResults `string`
  * nextToken `string`
  * environmentId [EnvironmentId](#environmentid)
  * maxResults [MaxResults](#maxresults)
  * nextToken [String](#string)
  * permissions [PermissionsList](#permissionslist)
  * userArn [UserArn](#userarn)

#### Output
* output [DescribeEnvironmentMembershipsResult](#describeenvironmentmembershipsresult)

### DescribeEnvironmentStatus



```js
amazonaws_cloud9.DescribeEnvironmentStatus({
  "environmentId": ""
}, context)
```

#### Input
* input `object`
  * environmentId **required** [EnvironmentId](#environmentid)

#### Output
* output [DescribeEnvironmentStatusResult](#describeenvironmentstatusresult)

### DescribeEnvironments



```js
amazonaws_cloud9.DescribeEnvironments({
  "environmentIds": []
}, context)
```

#### Input
* input `object`
  * environmentIds **required** [BoundedEnvironmentIdList](#boundedenvironmentidlist)

#### Output
* output [DescribeEnvironmentsResult](#describeenvironmentsresult)

### ListEnvironments



```js
amazonaws_cloud9.ListEnvironments({}, context)
```

#### Input
* input `object`
  * maxResults `string`
  * nextToken `string`
  * maxResults [MaxResults](#maxresults)
  * nextToken [String](#string)

#### Output
* output [ListEnvironmentsResult](#listenvironmentsresult)

### UpdateEnvironment



```js
amazonaws_cloud9.UpdateEnvironment({
  "environmentId": ""
}, context)
```

#### Input
* input `object`
  * description [EnvironmentDescription](#environmentdescription)
  * environmentId **required** [EnvironmentId](#environmentid)
  * name [EnvironmentName](#environmentname)

#### Output
* output [UpdateEnvironmentResult](#updateenvironmentresult)

### UpdateEnvironmentMembership



```js
amazonaws_cloud9.UpdateEnvironmentMembership({
  "environmentId": "",
  "userArn": "",
  "permissions": ""
}, context)
```

#### Input
* input `object`
  * environmentId **required** [EnvironmentId](#environmentid)
  * permissions **required** [MemberPermissions](#memberpermissions)
  * userArn **required** [UserArn](#userarn)

#### Output
* output [UpdateEnvironmentMembershipResult](#updateenvironmentmembershipresult)



## Definitions

### AutomaticStopTimeMinutes
* AutomaticStopTimeMinutes `integer`

### BadRequestException
* BadRequestException `object`: The target request is invalid.

### BoundedEnvironmentIdList
* BoundedEnvironmentIdList `array`
  * items [EnvironmentId](#environmentid)

### ClientRequestToken
* ClientRequestToken `string`

### ConflictException
* ConflictException `object`: A conflict occurred.

### CreateEnvironmentEC2Request
* CreateEnvironmentEC2Request `object`
  * automaticStopTimeMinutes [AutomaticStopTimeMinutes](#automaticstoptimeminutes)
  * clientRequestToken [ClientRequestToken](#clientrequesttoken)
  * description [EnvironmentDescription](#environmentdescription)
  * instanceType **required** [InstanceType](#instancetype)
  * name **required** [EnvironmentName](#environmentname)
  * ownerArn [UserArn](#userarn)
  * subnetId [SubnetId](#subnetid)

### CreateEnvironmentEC2Result
* CreateEnvironmentEC2Result `object`
  * environmentId [EnvironmentId](#environmentid)

### CreateEnvironmentMembershipRequest
* CreateEnvironmentMembershipRequest `object`
  * environmentId **required** [EnvironmentId](#environmentid)
  * permissions **required** [MemberPermissions](#memberpermissions)
  * userArn **required** [UserArn](#userarn)

### CreateEnvironmentMembershipResult
* CreateEnvironmentMembershipResult `object`
  * membership [EnvironmentMember](#environmentmember)

### DeleteEnvironmentMembershipRequest
* DeleteEnvironmentMembershipRequest `object`
  * environmentId **required** [EnvironmentId](#environmentid)
  * userArn **required** [UserArn](#userarn)

### DeleteEnvironmentMembershipResult
* DeleteEnvironmentMembershipResult `object`

### DeleteEnvironmentRequest
* DeleteEnvironmentRequest `object`
  * environmentId **required** [EnvironmentId](#environmentid)

### DeleteEnvironmentResult
* DeleteEnvironmentResult `object`

### DescribeEnvironmentMembershipsRequest
* DescribeEnvironmentMembershipsRequest `object`
  * environmentId [EnvironmentId](#environmentid)
  * maxResults [MaxResults](#maxresults)
  * nextToken [String](#string)
  * permissions [PermissionsList](#permissionslist)
  * userArn [UserArn](#userarn)

### DescribeEnvironmentMembershipsResult
* DescribeEnvironmentMembershipsResult `object`
  * memberships [EnvironmentMembersList](#environmentmemberslist)
  * nextToken [String](#string)

### DescribeEnvironmentStatusRequest
* DescribeEnvironmentStatusRequest `object`
  * environmentId **required** [EnvironmentId](#environmentid)

### DescribeEnvironmentStatusResult
* DescribeEnvironmentStatusResult `object`
  * message [String](#string)
  * status [EnvironmentStatus](#environmentstatus)

### DescribeEnvironmentsRequest
* DescribeEnvironmentsRequest `object`
  * environmentIds **required** [BoundedEnvironmentIdList](#boundedenvironmentidlist)

### DescribeEnvironmentsResult
* DescribeEnvironmentsResult `object`
  * environments [EnvironmentList](#environmentlist)

### Environment
* Environment `object`: Information about an AWS Cloud9 development environment.
  * arn [String](#string)
  * description [EnvironmentDescription](#environmentdescription)
  * id [EnvironmentId](#environmentid)
  * name [EnvironmentName](#environmentname)
  * ownerArn [String](#string)
  * type [EnvironmentType](#environmenttype)

### EnvironmentDescription
* EnvironmentDescription `string`

### EnvironmentId
* EnvironmentId `string`

### EnvironmentIdList
* EnvironmentIdList `array`
  * items [EnvironmentId](#environmentid)

### EnvironmentList
* EnvironmentList `array`
  * items [Environment](#environment)

### EnvironmentMember
* EnvironmentMember `object`: Information about an environment member for an AWS Cloud9 development environment.
  * environmentId [EnvironmentId](#environmentid)
  * lastAccess [Timestamp](#timestamp)
  * permissions [Permissions](#permissions)
  * userArn [UserArn](#userarn)
  * userId [String](#string)

### EnvironmentMembersList
* EnvironmentMembersList `array`
  * items [EnvironmentMember](#environmentmember)

### EnvironmentName
* EnvironmentName `string`

### EnvironmentStatus
* EnvironmentStatus `string` (values: error, creating, connecting, ready, stopping, stopped, deleting)

### EnvironmentType
* EnvironmentType `string` (values: ssh, ec2)

### ForbiddenException
* ForbiddenException `object`: An access permissions issue occurred.

### InstanceType
* InstanceType `string`

### InternalServerErrorException
* InternalServerErrorException `object`: An internal server error occurred.

### LimitExceededException
* LimitExceededException `object`: A service limit was exceeded.

### ListEnvironmentsRequest
* ListEnvironmentsRequest `object`
  * maxResults [MaxResults](#maxresults)
  * nextToken [String](#string)

### ListEnvironmentsResult
* ListEnvironmentsResult `object`
  * environmentIds [EnvironmentIdList](#environmentidlist)
  * nextToken [String](#string)

### MaxResults
* MaxResults `integer`

### MemberPermissions
* MemberPermissions `string` (values: read-write, read-only)

### NotFoundException
* NotFoundException `object`: The target resource cannot be found.

### Permissions
* Permissions `string` (values: owner, read-write, read-only)

### PermissionsList
* PermissionsList `array`
  * items [Permissions](#permissions)

### String
* String `string`

### SubnetId
* SubnetId `string`

### Timestamp
* Timestamp `string`

### TooManyRequestsException
* TooManyRequestsException `object`: Too many service requests were made over the given time period.

### UpdateEnvironmentMembershipRequest
* UpdateEnvironmentMembershipRequest `object`
  * environmentId **required** [EnvironmentId](#environmentid)
  * permissions **required** [MemberPermissions](#memberpermissions)
  * userArn **required** [UserArn](#userarn)

### UpdateEnvironmentMembershipResult
* UpdateEnvironmentMembershipResult `object`
  * membership [EnvironmentMember](#environmentmember)

### UpdateEnvironmentRequest
* UpdateEnvironmentRequest `object`
  * description [EnvironmentDescription](#environmentdescription)
  * environmentId **required** [EnvironmentId](#environmentid)
  * name [EnvironmentName](#environmentname)

### UpdateEnvironmentResult
* UpdateEnvironmentResult `object`

### UserArn
* UserArn `string`


