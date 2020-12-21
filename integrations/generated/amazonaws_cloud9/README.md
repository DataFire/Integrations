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

.then(data => {
  console.log(data);
});
```

## Description

<fullname>AWS Cloud9</fullname> <p>AWS Cloud9 is a collection of tools that you can use to code, build, run, test, debug, and release software in the cloud.</p> <p>For more information about AWS Cloud9, see the <a href="https://docs.aws.amazon.com/cloud9/latest/user-guide">AWS Cloud9 User Guide</a>.</p> <p>AWS Cloud9 supports these operations:</p> <ul> <li> <p> <code>CreateEnvironmentEC2</code>: Creates an AWS Cloud9 development environment, launches an Amazon EC2 instance, and then connects from the instance to the environment.</p> </li> <li> <p> <code>CreateEnvironmentMembership</code>: Adds an environment member to an environment.</p> </li> <li> <p> <code>DeleteEnvironment</code>: Deletes an environment. If an Amazon EC2 instance is connected to the environment, also terminates the instance.</p> </li> <li> <p> <code>DeleteEnvironmentMembership</code>: Deletes an environment member from an environment.</p> </li> <li> <p> <code>DescribeEnvironmentMemberships</code>: Gets information about environment members for an environment.</p> </li> <li> <p> <code>DescribeEnvironments</code>: Gets information about environments.</p> </li> <li> <p> <code>DescribeEnvironmentStatus</code>: Gets status information for an environment.</p> </li> <li> <p> <code>ListEnvironments</code>: Gets a list of environment identifiers.</p> </li> <li> <p> <code>ListTagsForResource</code>: Gets the tags for an environment.</p> </li> <li> <p> <code>TagResource</code>: Adds tags to an environment.</p> </li> <li> <p> <code>UntagResource</code>: Removes tags from an environment.</p> </li> <li> <p> <code>UpdateEnvironment</code>: Changes the settings of an existing environment.</p> </li> <li> <p> <code>UpdateEnvironmentMembership</code>: Changes the settings of an existing environment member for an environment.</p> </li> </ul>

## Actions

### CreateEnvironmentEC2



```js
amazonaws_cloud9.CreateEnvironmentEC2({
  "name": null,
  "instanceType": null
}, context)
```

#### Input
* input `object`
  * tags
    * items [Tag](#tag)
  * automaticStopTimeMinutes
  * clientRequestToken
  * connectionType
  * description
  * instanceType **required**
  * name **required**
  * ownerArn
  * subnetId

#### Output
* output [CreateEnvironmentEC2Result](#createenvironmentec2result)

### CreateEnvironmentMembership



```js
amazonaws_cloud9.CreateEnvironmentMembership({
  "environmentId": null,
  "userArn": null,
  "permissions": null
}, context)
```

#### Input
* input `object`
  * environmentId **required**
  * permissions **required**
  * userArn **required**

#### Output
* output [CreateEnvironmentMembershipResult](#createenvironmentmembershipresult)

### DeleteEnvironment



```js
amazonaws_cloud9.DeleteEnvironment({
  "environmentId": null
}, context)
```

#### Input
* input `object`
  * environmentId **required**

#### Output
* output [DeleteEnvironmentResult](#deleteenvironmentresult)

### DeleteEnvironmentMembership



```js
amazonaws_cloud9.DeleteEnvironmentMembership({
  "environmentId": null,
  "userArn": null
}, context)
```

#### Input
* input `object`
  * environmentId **required**
  * userArn **required**

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
  * environmentId
  * maxResults
  * nextToken
  * permissions
    * items [Permissions](#permissions)
  * userArn

#### Output
* output [DescribeEnvironmentMembershipsResult](#describeenvironmentmembershipsresult)

### DescribeEnvironmentStatus



```js
amazonaws_cloud9.DescribeEnvironmentStatus({
  "environmentId": null
}, context)
```

#### Input
* input `object`
  * environmentId **required**

#### Output
* output [DescribeEnvironmentStatusResult](#describeenvironmentstatusresult)

### DescribeEnvironments



```js
amazonaws_cloud9.DescribeEnvironments({
  "environmentIds": null
}, context)
```

#### Input
* input `object`
  * environmentIds **required**
    * items [EnvironmentId](#environmentid)

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
  * maxResults
  * nextToken

#### Output
* output [ListEnvironmentsResult](#listenvironmentsresult)

### ListTagsForResource



```js
amazonaws_cloud9.ListTagsForResource({
  "ResourceARN": null
}, context)
```

#### Input
* input `object`
  * ResourceARN **required**

#### Output
* output [ListTagsForResourceResponse](#listtagsforresourceresponse)

### TagResource



```js
amazonaws_cloud9.TagResource({
  "ResourceARN": null,
  "Tags": null
}, context)
```

#### Input
* input `object`
  * ResourceARN **required**
  * Tags **required**
    * items [Tag](#tag)

#### Output
* output [TagResourceResponse](#tagresourceresponse)

### UntagResource



```js
amazonaws_cloud9.UntagResource({
  "ResourceARN": null,
  "TagKeys": null
}, context)
```

#### Input
* input `object`
  * ResourceARN **required**
  * TagKeys **required**
    * items [TagKey](#tagkey)

#### Output
* output [UntagResourceResponse](#untagresourceresponse)

### UpdateEnvironment



```js
amazonaws_cloud9.UpdateEnvironment({
  "environmentId": null
}, context)
```

#### Input
* input `object`
  * description
  * environmentId **required**
  * name

#### Output
* output [UpdateEnvironmentResult](#updateenvironmentresult)

### UpdateEnvironmentMembership



```js
amazonaws_cloud9.UpdateEnvironmentMembership({
  "environmentId": null,
  "userArn": null,
  "permissions": null
}, context)
```

#### Input
* input `object`
  * environmentId **required**
  * permissions **required**
  * userArn **required**

#### Output
* output [UpdateEnvironmentMembershipResult](#updateenvironmentmembershipresult)



## Definitions

### AutomaticStopTimeMinutes
* AutomaticStopTimeMinutes `integer`

### BadRequestException


### BoundedEnvironmentIdList
* BoundedEnvironmentIdList `array`
  * items [EnvironmentId](#environmentid)

### ClientRequestToken
* ClientRequestToken `string`

### ConcurrentAccessException


### ConflictException


### ConnectionType
* ConnectionType `string` (values: CONNECT_SSH, CONNECT_SSM)

### CreateEnvironmentEC2Request
* CreateEnvironmentEC2Request `object`
  * tags
    * items [Tag](#tag)
  * automaticStopTimeMinutes
  * clientRequestToken
  * connectionType
  * description
  * instanceType **required**
  * name **required**
  * ownerArn
  * subnetId

### CreateEnvironmentEC2Result
* CreateEnvironmentEC2Result `object`
  * environmentId

### CreateEnvironmentMembershipRequest
* CreateEnvironmentMembershipRequest `object`
  * environmentId **required**
  * permissions **required**
  * userArn **required**

### CreateEnvironmentMembershipResult
* CreateEnvironmentMembershipResult `object`
  * membership
    * environmentId
    * lastAccess
    * permissions
    * userArn
    * userId

### DeleteEnvironmentMembershipRequest
* DeleteEnvironmentMembershipRequest `object`
  * environmentId **required**
  * userArn **required**

### DeleteEnvironmentMembershipResult
* DeleteEnvironmentMembershipResult `object`

### DeleteEnvironmentRequest
* DeleteEnvironmentRequest `object`
  * environmentId **required**

### DeleteEnvironmentResult
* DeleteEnvironmentResult `object`

### DescribeEnvironmentMembershipsRequest
* DescribeEnvironmentMembershipsRequest `object`
  * environmentId
  * maxResults
  * nextToken
  * permissions
    * items [Permissions](#permissions)
  * userArn

### DescribeEnvironmentMembershipsResult
* DescribeEnvironmentMembershipsResult `object`
  * memberships
    * items [EnvironmentMember](#environmentmember)
  * nextToken

### DescribeEnvironmentStatusRequest
* DescribeEnvironmentStatusRequest `object`
  * environmentId **required**

### DescribeEnvironmentStatusResult
* DescribeEnvironmentStatusResult `object`
  * message
  * status

### DescribeEnvironmentsRequest
* DescribeEnvironmentsRequest `object`
  * environmentIds **required**
    * items [EnvironmentId](#environmentid)

### DescribeEnvironmentsResult
* DescribeEnvironmentsResult `object`
  * environments
    * items [Environment](#environment)

### Environment
* Environment `object`: Information about an AWS Cloud9 development environment.
  * arn
  * connectionType
  * description
  * id
  * lifecycle
    * failureResource
    * reason
    * status
  * name
  * ownerArn
  * type

### EnvironmentArn
* EnvironmentArn `string`

### EnvironmentDescription
* EnvironmentDescription `string`

### EnvironmentId
* EnvironmentId `string`

### EnvironmentIdList
* EnvironmentIdList `array`
  * items [EnvironmentId](#environmentid)

### EnvironmentLifecycle
* EnvironmentLifecycle `object`: Information about the current creation or deletion lifecycle state of an AWS Cloud9 development environment.
  * failureResource
  * reason
  * status

### EnvironmentLifecycleStatus
* EnvironmentLifecycleStatus `string` (values: CREATING, CREATED, CREATE_FAILED, DELETING, DELETE_FAILED)

### EnvironmentList
* EnvironmentList `array`
  * items [Environment](#environment)

### EnvironmentMember
* EnvironmentMember `object`: Information about an environment member for an AWS Cloud9 development environment.
  * environmentId
  * lastAccess
  * permissions
  * userArn
  * userId

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


### InstanceType
* InstanceType `string`

### InternalServerErrorException


### LimitExceededException


### ListEnvironmentsRequest
* ListEnvironmentsRequest `object`
  * maxResults
  * nextToken

### ListEnvironmentsResult
* ListEnvironmentsResult `object`
  * environmentIds
    * items [EnvironmentId](#environmentid)
  * nextToken

### ListTagsForResourceRequest
* ListTagsForResourceRequest `object`
  * ResourceARN **required**

### ListTagsForResourceResponse
* ListTagsForResourceResponse `object`
  * Tags
    * items [Tag](#tag)

### MaxResults
* MaxResults `integer`

### MemberPermissions
* MemberPermissions `string` (values: read-write, read-only)

### NotFoundException


### Permissions
* Permissions `string` (values: owner, read-write, read-only)

### PermissionsList
* PermissionsList `array`
  * items [Permissions](#permissions)

### String
* String `string`

### SubnetId
* SubnetId `string`

### Tag
* Tag `object`: Metadata that is associated with AWS resources. In particular, a name-value pair that can be associated with an AWS Cloud9 development environment. There are two types of tags: <i>user tags</i> and <i>system tags</i>. A user tag is created by the user. A system tag is automatically created by AWS services. A system tag is prefixed with "aws:" and cannot be modified by the user.
  * Key **required**
  * Value **required**

### TagKey
* TagKey `string`

### TagKeyList
* TagKeyList `array`
  * items [TagKey](#tagkey)

### TagList
* TagList `array`
  * items [Tag](#tag)

### TagResourceRequest
* TagResourceRequest `object`
  * ResourceARN **required**
  * Tags **required**
    * items [Tag](#tag)

### TagResourceResponse
* TagResourceResponse `object`

### TagValue
* TagValue `string`

### Timestamp
* Timestamp `string`

### TooManyRequestsException


### UntagResourceRequest
* UntagResourceRequest `object`
  * ResourceARN **required**
  * TagKeys **required**
    * items [TagKey](#tagkey)

### UntagResourceResponse
* UntagResourceResponse `object`

### UpdateEnvironmentMembershipRequest
* UpdateEnvironmentMembershipRequest `object`
  * environmentId **required**
  * permissions **required**
  * userArn **required**

### UpdateEnvironmentMembershipResult
* UpdateEnvironmentMembershipResult `object`
  * membership
    * environmentId
    * lastAccess
    * permissions
    * userArn
    * userId

### UpdateEnvironmentRequest
* UpdateEnvironmentRequest `object`
  * description
  * environmentId **required**
  * name

### UpdateEnvironmentResult
* UpdateEnvironmentResult `object`

### UserArn
* UserArn `string`


