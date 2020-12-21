# @datafire/amazonaws_schemas

Client library for Schemas

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_schemas
```
```js
let amazonaws_schemas = require('@datafire/amazonaws_schemas').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

.then(data => {
  console.log(data);
});
```

## Description

Amazon EventBridge Schema Registry

## Actions

### ListTagsForResource



```js
amazonaws_schemas.ListTagsForResource({
  "resource-arn": ""
}, context)
```

#### Input
* input `object`
  * resource-arn **required** `string`

#### Output
* output [ListTagsForResourceResponse](#listtagsforresourceresponse)

### TagResource



```js
amazonaws_schemas.TagResource({
  "resource-arn": "",
  "tags": {}
}, context)
```

#### Input
* input `object`
  * resource-arn **required** `string`
  * tags **required** `object`: Key-value pairs associated with a resource.

#### Output
*Output schema unknown*

### UntagResource



```js
amazonaws_schemas.UntagResource({
  "resource-arn": "",
  "tagKeys": []
}, context)
```

#### Input
* input `object`
  * resource-arn **required** `string`
  * tagKeys **required** `array`

#### Output
*Output schema unknown*

### GetDiscoveredSchema



```js
amazonaws_schemas.GetDiscoveredSchema({
  "Events": [],
  "Type": ""
}, context)
```

#### Input
* input `object`
  * Events **required** `array`: An array of strings where each string is a JSON event. These are the events that were used to generate the schema. The array includes a single type of event and has a maximum size of 10 events.
    * items [GetDiscoveredSchemaVersionItemInput](#getdiscoveredschemaversioniteminput)
  * Type **required** `string` (values: OpenApi3, JSONSchemaDraft4): The type of event.

#### Output
* output [GetDiscoveredSchemaResponse](#getdiscoveredschemaresponse)

### ListDiscoverers



```js
amazonaws_schemas.ListDiscoverers({}, context)
```

#### Input
* input `object`
  * discovererIdPrefix `string`
  * limit `integer`
  * nextToken `string`
  * sourceArnPrefix `string`
  * Limit `string`
  * NextToken `string`

#### Output
* output [ListDiscoverersResponse](#listdiscoverersresponse)

### CreateDiscoverer



```js
amazonaws_schemas.CreateDiscoverer({
  "SourceArn": ""
}, context)
```

#### Input
* input `object`
  * tags `object`: Key-value pairs associated with a resource.
  * Description `string`: A description for the discoverer.
  * SourceArn **required** `string`: The ARN of the event bus.

#### Output
*Output schema unknown*

### DeleteDiscoverer



```js
amazonaws_schemas.DeleteDiscoverer({
  "discovererId": ""
}, context)
```

#### Input
* input `object`
  * discovererId **required** `string`

#### Output
*Output schema unknown*

### DescribeDiscoverer



```js
amazonaws_schemas.DescribeDiscoverer({
  "discovererId": ""
}, context)
```

#### Input
* input `object`
  * discovererId **required** `string`

#### Output
* output [DescribeDiscovererResponse](#describediscovererresponse)

### UpdateDiscoverer



```js
amazonaws_schemas.UpdateDiscoverer({
  "discovererId": ""
}, context)
```

#### Input
* input `object`
  * discovererId **required** `string`
  * Description `string`: The description of the discoverer to update.

#### Output
* output [UpdateDiscovererResponse](#updatediscovererresponse)

### StartDiscoverer



```js
amazonaws_schemas.StartDiscoverer({
  "discovererId": ""
}, context)
```

#### Input
* input `object`
  * discovererId **required** `string`

#### Output
* output [StartDiscovererResponse](#startdiscovererresponse)

### StopDiscoverer



```js
amazonaws_schemas.StopDiscoverer({
  "discovererId": ""
}, context)
```

#### Input
* input `object`
  * discovererId **required** `string`

#### Output
* output [StopDiscovererResponse](#stopdiscovererresponse)

### DeleteResourcePolicy



```js
amazonaws_schemas.DeleteResourcePolicy({}, context)
```

#### Input
* input `object`
  * registryName `string`

#### Output
*Output schema unknown*

### GetResourcePolicy



```js
amazonaws_schemas.GetResourcePolicy({}, context)
```

#### Input
* input `object`
  * registryName `string`

#### Output
* output [GetResourcePolicyResponse](#getresourcepolicyresponse)

### PutResourcePolicy



```js
amazonaws_schemas.PutResourcePolicy({
  "Policy": ""
}, context)
```

#### Input
* input `object`
  * registryName `string`
  * Policy **required** `string`: The resource-based policy.
  * RevisionId `string`: The revision ID of the policy.

#### Output
* output [PutResourcePolicyResponse](#putresourcepolicyresponse)

### ListRegistries



```js
amazonaws_schemas.ListRegistries({}, context)
```

#### Input
* input `object`
  * limit `integer`
  * nextToken `string`
  * registryNamePrefix `string`
  * scope `string`
  * Limit `string`
  * NextToken `string`

#### Output
* output [ListRegistriesResponse](#listregistriesresponse)

### DeleteRegistry



```js
amazonaws_schemas.DeleteRegistry({
  "registryName": ""
}, context)
```

#### Input
* input `object`
  * registryName **required** `string`

#### Output
*Output schema unknown*

### DescribeRegistry



```js
amazonaws_schemas.DescribeRegistry({
  "registryName": ""
}, context)
```

#### Input
* input `object`
  * registryName **required** `string`

#### Output
* output [DescribeRegistryResponse](#describeregistryresponse)

### CreateRegistry



```js
amazonaws_schemas.CreateRegistry({
  "registryName": ""
}, context)
```

#### Input
* input `object`
  * registryName **required** `string`
  * tags `object`: Key-value pairs associated with a resource.
  * Description `string`: A description of the registry to be created.

#### Output
*Output schema unknown*

### UpdateRegistry



```js
amazonaws_schemas.UpdateRegistry({
  "registryName": ""
}, context)
```

#### Input
* input `object`
  * registryName **required** `string`
  * Description `string`: The description of the registry to update.

#### Output
* output [UpdateRegistryResponse](#updateregistryresponse)

### ListSchemas



```js
amazonaws_schemas.ListSchemas({
  "registryName": ""
}, context)
```

#### Input
* input `object`
  * limit `integer`
  * nextToken `string`
  * registryName **required** `string`
  * schemaNamePrefix `string`
  * Limit `string`
  * NextToken `string`

#### Output
* output [ListSchemasResponse](#listschemasresponse)

### DeleteSchema



```js
amazonaws_schemas.DeleteSchema({
  "registryName": "",
  "schemaName": ""
}, context)
```

#### Input
* input `object`
  * registryName **required** `string`
  * schemaName **required** `string`

#### Output
*Output schema unknown*

### DescribeSchema



```js
amazonaws_schemas.DescribeSchema({
  "registryName": "",
  "schemaName": ""
}, context)
```

#### Input
* input `object`
  * registryName **required** `string`
  * schemaName **required** `string`
  * schemaVersion `string`

#### Output
* output [DescribeSchemaResponse](#describeschemaresponse)

### CreateSchema



```js
amazonaws_schemas.CreateSchema({
  "registryName": "",
  "schemaName": "",
  "Content": "",
  "Type": ""
}, context)
```

#### Input
* input `object`
  * registryName **required** `string`
  * schemaName **required** `string`
  * tags `object`: Key-value pairs associated with a resource.
  * Content **required** `string`: The source of the schema definition.
  * Description `string`: A description of the schema.
  * Type **required** `string` (values: OpenApi3, JSONSchemaDraft4): The type of schema.

#### Output
*Output schema unknown*

### UpdateSchema



```js
amazonaws_schemas.UpdateSchema({
  "registryName": "",
  "schemaName": ""
}, context)
```

#### Input
* input `object`
  * registryName **required** `string`
  * schemaName **required** `string`
  * ClientTokenId `string`: The ID of the client token.
  * Content `string`: The source of the schema definition.
  * Description `string`: The description of the schema.
  * Type `string` (values: OpenApi3, JSONSchemaDraft4): The schema type for the events schema.

#### Output
* output [UpdateSchemaResponse](#updateschemaresponse)

### ExportSchema



```js
amazonaws_schemas.ExportSchema({
  "registryName": "",
  "schemaName": "",
  "type": ""
}, context)
```

#### Input
* input `object`
  * registryName **required** `string`
  * schemaName **required** `string`
  * schemaVersion `string`
  * type **required** `string`

#### Output
* output [ExportSchemaResponse](#exportschemaresponse)

### DescribeCodeBinding



```js
amazonaws_schemas.DescribeCodeBinding({
  "language": "",
  "registryName": "",
  "schemaName": ""
}, context)
```

#### Input
* input `object`
  * language **required** `string`
  * registryName **required** `string`
  * schemaName **required** `string`
  * schemaVersion `string`

#### Output
* output [DescribeCodeBindingResponse](#describecodebindingresponse)

### PutCodeBinding



```js
amazonaws_schemas.PutCodeBinding({
  "language": "",
  "registryName": "",
  "schemaName": ""
}, context)
```

#### Input
* input `object`
  * language **required** `string`
  * registryName **required** `string`
  * schemaName **required** `string`
  * schemaVersion `string`

#### Output
*Output schema unknown*

### GetCodeBindingSource



```js
amazonaws_schemas.GetCodeBindingSource({
  "language": "",
  "registryName": "",
  "schemaName": ""
}, context)
```

#### Input
* input `object`
  * language **required** `string`
  * registryName **required** `string`
  * schemaName **required** `string`
  * schemaVersion `string`

#### Output
* output [GetCodeBindingSourceResponse](#getcodebindingsourceresponse)

### DeleteSchemaVersion



```js
amazonaws_schemas.DeleteSchemaVersion({
  "registryName": "",
  "schemaName": "",
  "schemaVersion": ""
}, context)
```

#### Input
* input `object`
  * registryName **required** `string`
  * schemaName **required** `string`
  * schemaVersion **required** `string`

#### Output
*Output schema unknown*

### ListSchemaVersions



```js
amazonaws_schemas.ListSchemaVersions({
  "registryName": "",
  "schemaName": ""
}, context)
```

#### Input
* input `object`
  * limit `integer`
  * nextToken `string`
  * registryName **required** `string`
  * schemaName **required** `string`
  * Limit `string`
  * NextToken `string`

#### Output
* output [ListSchemaVersionsResponse](#listschemaversionsresponse)

### SearchSchemas



```js
amazonaws_schemas.SearchSchemas({
  "keywords": "",
  "registryName": ""
}, context)
```

#### Input
* input `object`
  * keywords **required** `string`
  * limit `integer`
  * nextToken `string`
  * registryName **required** `string`
  * Limit `string`
  * NextToken `string`

#### Output
* output [SearchSchemasResponse](#searchschemasresponse)



## Definitions

### BadRequestException


### Body
* Body `string`

### CodeGenerationStatus
* CodeGenerationStatus `string` (values: CREATE_IN_PROGRESS, CREATE_COMPLETE, CREATE_FAILED)

### ConflictException


### CreateDiscovererRequest
* CreateDiscovererRequest `object`
  * Description
  * SourceArn **required**
  * Tags

### CreateDiscovererResponse
* CreateDiscovererResponse `object`
  * Description
  * DiscovererArn
  * DiscovererId
  * SourceArn
  * State
  * Tags

### CreateRegistryRequest
* CreateRegistryRequest `object`
  * Description
  * Tags

### CreateRegistryResponse
* CreateRegistryResponse `object`
  * Description
  * RegistryArn
  * RegistryName
  * Tags

### CreateSchemaRequest
* CreateSchemaRequest `object`
  * Content **required**
  * Description
  * Tags
  * Type **required**

### CreateSchemaResponse
* CreateSchemaResponse `object`
  * Description
  * LastModified
  * SchemaArn
  * SchemaName
  * SchemaVersion
  * Tags
  * Type
  * VersionCreatedDate

### DeleteDiscovererRequest
* DeleteDiscovererRequest `object`

### DeleteRegistryRequest
* DeleteRegistryRequest `object`

### DeleteResourcePolicyRequest
* DeleteResourcePolicyRequest `object`

### DeleteSchemaRequest
* DeleteSchemaRequest `object`

### DeleteSchemaVersionRequest
* DeleteSchemaVersionRequest `object`

### DescribeCodeBindingRequest
* DescribeCodeBindingRequest `object`

### DescribeCodeBindingResponse
* DescribeCodeBindingResponse `object`
  * CreationDate
  * LastModified
  * SchemaVersion
  * Status

### DescribeDiscovererRequest
* DescribeDiscovererRequest `object`

### DescribeDiscovererResponse
* DescribeDiscovererResponse `object`
  * Description
  * DiscovererArn
  * DiscovererId
  * SourceArn
  * State
  * Tags

### DescribeRegistryRequest
* DescribeRegistryRequest `object`

### DescribeRegistryResponse
* DescribeRegistryResponse `object`
  * Description
  * RegistryArn
  * RegistryName
  * Tags

### DescribeSchemaRequest
* DescribeSchemaRequest `object`

### DescribeSchemaResponse
* DescribeSchemaResponse `object`
  * Content
  * Description
  * LastModified
  * SchemaArn
  * SchemaName
  * SchemaVersion
  * Tags
  * Type
  * VersionCreatedDate

### DiscovererState
* DiscovererState `string` (values: STARTED, STOPPED)

### DiscovererSummary
* DiscovererSummary `object`
  * DiscovererArn
  * DiscovererId
  * SourceArn
  * State
  * Tags

### ExportSchemaRequest
* ExportSchemaRequest `object`

### ExportSchemaResponse
* ExportSchemaResponse `object`
  * Content [__string](#__string)
  * SchemaArn [__string](#__string)
  * SchemaName [__string](#__string)
  * SchemaVersion [__string](#__string)
  * Type [__string](#__string)

### ForbiddenException


### GetCodeBindingSourceRequest
* GetCodeBindingSourceRequest `object`

### GetCodeBindingSourceResponse
* GetCodeBindingSourceResponse `object`
  * Body [Body](#body)

### GetDiscoveredSchemaRequest
* GetDiscoveredSchemaRequest `object`
  * Events **required**
    * items [GetDiscoveredSchemaVersionItemInput](#getdiscoveredschemaversioniteminput)
  * Type **required**

### GetDiscoveredSchemaResponse
* GetDiscoveredSchemaResponse `object`
  * Content

### GetDiscoveredSchemaVersionItemInput
* GetDiscoveredSchemaVersionItemInput `string`

### GetResourcePolicyRequest
* GetResourcePolicyRequest `object`

### GetResourcePolicyResponse
* GetResourcePolicyResponse `object`
  * Policy
  * RevisionId

### GoneException


### InternalServerErrorException


### ListDiscoverersRequest
* ListDiscoverersRequest `object`

### ListDiscoverersResponse
* ListDiscoverersResponse `object`
  * Discoverers
    * items [DiscovererSummary](#discoverersummary)
  * NextToken

### ListRegistriesRequest
* ListRegistriesRequest `object`

### ListRegistriesResponse
* ListRegistriesResponse `object`
  * NextToken
  * Registries
    * items [RegistrySummary](#registrysummary)

### ListSchemaVersionsRequest
* ListSchemaVersionsRequest `object`

### ListSchemaVersionsResponse
* ListSchemaVersionsResponse `object`
  * NextToken
  * SchemaVersions
    * items [SchemaVersionSummary](#schemaversionsummary)

### ListSchemasRequest
* ListSchemasRequest `object`

### ListSchemasResponse
* ListSchemasResponse `object`
  * NextToken
  * Schemas
    * items [SchemaSummary](#schemasummary)

### ListTagsForResourceRequest
* ListTagsForResourceRequest `object`

### ListTagsForResourceResponse
* ListTagsForResourceResponse `object`
  * Tags

### NotFoundException


### PreconditionFailedException


### PutCodeBindingRequest
* PutCodeBindingRequest `object`

### PutCodeBindingResponse
* PutCodeBindingResponse `object`
  * CreationDate
  * LastModified
  * SchemaVersion
  * Status

### PutResourcePolicyRequest
* PutResourcePolicyRequest `object`: The name of the policy.
  * Policy **required**
  * RevisionId

### PutResourcePolicyResponse
* PutResourcePolicyResponse `object`
  * Policy
  * RevisionId

### RegistrySummary
* RegistrySummary `object`
  * RegistryArn
  * RegistryName
  * Tags

### SchemaSummary
* SchemaSummary `object`: A summary of schema details.
  * LastModified
  * SchemaArn
  * SchemaName
  * Tags
  * VersionCount

### SchemaVersionSummary
* SchemaVersionSummary `object`
  * SchemaArn
  * SchemaName
  * SchemaVersion
  * Type

### SearchSchemaSummary
* SearchSchemaSummary `object`
  * RegistryName
  * SchemaArn
  * SchemaName
  * SchemaVersions
    * items [SearchSchemaVersionSummary](#searchschemaversionsummary)

### SearchSchemaVersionSummary
* SearchSchemaVersionSummary `object`
  * CreatedDate
  * SchemaVersion
  * Type

### SearchSchemasRequest
* SearchSchemasRequest `object`

### SearchSchemasResponse
* SearchSchemasResponse `object`
  * NextToken
  * Schemas
    * items [SearchSchemaSummary](#searchschemasummary)

### ServiceUnavailableException


### StartDiscovererRequest
* StartDiscovererRequest `object`

### StartDiscovererResponse
* StartDiscovererResponse `object`
  * DiscovererId
  * State

### StopDiscovererRequest
* StopDiscovererRequest `object`

### StopDiscovererResponse
* StopDiscovererResponse `object`
  * DiscovererId
  * State

### TagResourceRequest
* TagResourceRequest `object`
  * Tags **required**

### Tags
* Tags `object`: Key-value pairs associated with a resource.

### TooManyRequestsException


### Type
* Type `string` (values: OpenApi3, JSONSchemaDraft4)

### UnauthorizedException


### UntagResourceRequest
* UntagResourceRequest `object`

### UpdateDiscovererRequest
* UpdateDiscovererRequest `object`
  * Description

### UpdateDiscovererResponse
* UpdateDiscovererResponse `object`
  * Description
  * DiscovererArn
  * DiscovererId
  * SourceArn
  * State
  * Tags

### UpdateRegistryRequest
* UpdateRegistryRequest `object`: Updates the registry.
  * Description

### UpdateRegistryResponse
* UpdateRegistryResponse `object`
  * Description
  * RegistryArn
  * RegistryName
  * Tags

### UpdateSchemaRequest
* UpdateSchemaRequest `object`
  * ClientTokenId
  * Content
  * Description
  * Type

### UpdateSchemaResponse
* UpdateSchemaResponse `object`
  * Description
  * LastModified
  * SchemaArn
  * SchemaName
  * SchemaVersion
  * Tags
  * Type
  * VersionCreatedDate

### __integer
* __integer `integer`

### __listOfDiscovererSummary
* __listOfDiscovererSummary `array`
  * items [DiscovererSummary](#discoverersummary)

### __listOfGetDiscoveredSchemaVersionItemInput
* __listOfGetDiscoveredSchemaVersionItemInput `array`
  * items [GetDiscoveredSchemaVersionItemInput](#getdiscoveredschemaversioniteminput)

### __listOfRegistrySummary
* __listOfRegistrySummary `array`
  * items [RegistrySummary](#registrysummary)

### __listOfSchemaSummary
* __listOfSchemaSummary `array`
  * items [SchemaSummary](#schemasummary)

### __listOfSchemaVersionSummary
* __listOfSchemaVersionSummary `array`
  * items [SchemaVersionSummary](#schemaversionsummary)

### __listOfSearchSchemaSummary
* __listOfSearchSchemaSummary `array`
  * items [SearchSchemaSummary](#searchschemasummary)

### __listOfSearchSchemaVersionSummary
* __listOfSearchSchemaVersionSummary `array`
  * items [SearchSchemaVersionSummary](#searchschemaversionsummary)

### __listOf__string
* __listOf__string `array`
  * items [__string](#__string)

### __long
* __long `integer`

### __string
* __string `string`

### __stringMin0Max256
* __stringMin0Max256 `string`

### __stringMin0Max36
* __stringMin0Max36 `string`

### __stringMin1Max100000
* __stringMin1Max100000 `string`

### __stringMin20Max1600
* __stringMin20Max1600 `string`

### __timestampIso8601
* __timestampIso8601 `string`


