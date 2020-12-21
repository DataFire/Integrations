# @datafire/amazonaws_amp

Client library for Amazon Prometheus Service

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_amp
```
```js
let amazonaws_amp = require('@datafire/amazonaws_amp').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

.then(data => {
  console.log(data);
});
```

## Description

Amazon Managed Service for Prometheus

## Actions

### ListWorkspaces



```js
amazonaws_amp.ListWorkspaces({}, context)
```

#### Input
* input `object`
  * alias `string`
  * maxResults `integer`
  * nextToken `string`

#### Output
* output [ListWorkspacesResponse](#listworkspacesresponse)

### CreateWorkspace



```js
amazonaws_amp.CreateWorkspace({}, context)
```

#### Input
* input `object`
  * alias `string`: A user-assigned workspace alias.
  * clientToken `string`: An identifier used to ensure the idempotency of a write request.

#### Output
*Output schema unknown*

### DeleteWorkspace



```js
amazonaws_amp.DeleteWorkspace({
  "workspaceId": ""
}, context)
```

#### Input
* input `object`
  * clientToken `string`
  * workspaceId **required** `string`

#### Output
*Output schema unknown*

### DescribeWorkspace



```js
amazonaws_amp.DescribeWorkspace({
  "workspaceId": ""
}, context)
```

#### Input
* input `object`
  * workspaceId **required** `string`

#### Output
* output [DescribeWorkspaceResponse](#describeworkspaceresponse)

### UpdateWorkspaceAlias



```js
amazonaws_amp.UpdateWorkspaceAlias({
  "workspaceId": ""
}, context)
```

#### Input
* input `object`
  * workspaceId **required** `string`
  * alias `string`: A user-assigned workspace alias.
  * clientToken `string`: An identifier used to ensure the idempotency of a write request.

#### Output
*Output schema unknown*



## Definitions

### AccessDeniedException


### ConflictException


### CreateWorkspaceRequest
* CreateWorkspaceRequest `object`: Represents the input of a CreateWorkspace operation.
  * alias
  * clientToken

### CreateWorkspaceResponse
* CreateWorkspaceResponse `object`: Represents the output of a CreateWorkspace operation.
  * arn **required**
  * status **required**
    * statusCode **required**
  * workspaceId **required**

### DeleteWorkspaceRequest
* DeleteWorkspaceRequest `object`: Represents the input of a DeleteWorkspace operation.

### DescribeWorkspaceRequest
* DescribeWorkspaceRequest `object`: Represents the input of a DescribeWorkspace operation.

### DescribeWorkspaceResponse
* DescribeWorkspaceResponse `object`: Represents the output of a DescribeWorkspace operation.
  * workspace **required**
    * alias
    * arn **required**
    * createdAt **required**
    * prometheusEndpoint
    * status **required**
      * statusCode **required**
    * workspaceId **required**

### IdempotencyToken
* IdempotencyToken `string`: An identifier used to ensure the idempotency of a write request.

### InternalServerException


### ListWorkspacesRequest
* ListWorkspacesRequest `object`: Represents the input of a ListWorkspaces operation.

### ListWorkspacesRequestMaxResultsInteger
* ListWorkspacesRequestMaxResultsInteger `integer`

### ListWorkspacesResponse
* ListWorkspacesResponse `object`: Represents the output of a ListWorkspaces operation.
  * nextToken
  * workspaces **required**
    * items [WorkspaceSummary](#workspacesummary)

### PaginationToken
* PaginationToken `string`: A token used to access the next page in a paginated result set.

### ResourceNotFoundException


### ServiceQuotaExceededException


### ThrottlingException


### Timestamp
* Timestamp `string`

### UpdateWorkspaceAliasRequest
* UpdateWorkspaceAliasRequest `object`: Represents the input of an UpdateWorkspaceAlias operation.
  * alias
  * clientToken

### Uri
* Uri `string`

### ValidationException


### WorkspaceAlias
* WorkspaceAlias `string`: A user-assigned workspace alias.

### WorkspaceArn
* WorkspaceArn `string`: An ARN identifying a Workspace.

### WorkspaceDescription
* WorkspaceDescription `object`: Represents the properties of a workspace.
  * alias
  * arn **required**
  * createdAt **required**
  * prometheusEndpoint
  * status **required**
    * statusCode **required**
  * workspaceId **required**

### WorkspaceId
* WorkspaceId `string`: A workspace ID.

### WorkspaceStatus
* WorkspaceStatus `object`: Represents the status of a workspace.
  * statusCode **required**

### WorkspaceStatusCode
* WorkspaceStatusCode `string` (values: CREATING, ACTIVE, UPDATING, DELETING, CREATION_FAILED): State of a workspace.

### WorkspaceSummary
* WorkspaceSummary `object`: Represents a summary of the properties of a workspace.
  * alias
  * arn **required**
  * createdAt **required**
  * status **required**
    * statusCode **required**
  * workspaceId **required**

### WorkspaceSummaryList
* WorkspaceSummaryList `array`: A list of workspace summaries.
  * items [WorkspaceSummary](#workspacesummary)


