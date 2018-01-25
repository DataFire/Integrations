# @datafire/amazonaws_appsync

Client library for AWS AppSync

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_appsync
```
```js
let amazonaws_appsync = require('@datafire/amazonaws_appsync').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

amazonaws_appsync.ListGraphqlApis({}).then(data => {
  console.log(data);
});
```

## Description

AWS AppSync provides API actions for creating and interacting with data sources using GraphQL from your application.

## Actions

### ListGraphqlApis



```js
amazonaws_appsync.ListGraphqlApis({}, context)
```

#### Input
* input `object`

#### Output
* output [ListGraphqlApisResponse](#listgraphqlapisresponse)

### UpdateGraphqlApi



```js
amazonaws_appsync.UpdateGraphqlApi({
  "apiId": "",
  "name": ""
}, context)
```

#### Input
* input `object`
  * apiId **required** `string`
  * authenticationType [AuthenticationType](#authenticationtype)
  * name **required** [ResourceName](#resourcename)
  * userPoolConfig [UserPoolConfig](#userpoolconfig)

#### Output
* output [UpdateGraphqlApiResponse](#updategraphqlapiresponse)

### ListApiKeys



```js
amazonaws_appsync.ListApiKeys({
  "apiId": ""
}, context)
```

#### Input
* input `object`
  * apiId **required** `string`

#### Output
* output [ListApiKeysResponse](#listapikeysresponse)

### DeleteApiKey



```js
amazonaws_appsync.DeleteApiKey({
  "apiId": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * apiId **required** `string`
  * id **required** `string`

#### Output
* output [DeleteApiKeyResponse](#deleteapikeyresponse)

### ListDataSources



```js
amazonaws_appsync.ListDataSources({
  "apiId": ""
}, context)
```

#### Input
* input `object`
  * apiId **required** `string`

#### Output
* output [ListDataSourcesResponse](#listdatasourcesresponse)

### UpdateDataSource



```js
amazonaws_appsync.UpdateDataSource({
  "apiId": "",
  "name": "",
  "type": ""
}, context)
```

#### Input
* input `object`
  * apiId **required** `string`
  * name **required** `string`
  * description [String](#string)
  * dynamodbConfig [DynamodbDataSourceConfig](#dynamodbdatasourceconfig)
  * elasticsearchConfig [ElasticsearchDataSourceConfig](#elasticsearchdatasourceconfig)
  * lambdaConfig [LambdaDataSourceConfig](#lambdadatasourceconfig)
  * serviceRoleArn [String](#string)
  * type **required** [DataSourceType](#datasourcetype)

#### Output
* output [UpdateDataSourceResponse](#updatedatasourceresponse)

### GetIntrospectionSchema



```js
amazonaws_appsync.GetIntrospectionSchema({
  "apiId": ""
}, context)
```

#### Input
* input `object`
  * apiId **required** `string`

#### Output
* output [GetIntrospectionSchemaResponse](#getintrospectionschemaresponse)

### StartSchemaCreation



```js
amazonaws_appsync.StartSchemaCreation({
  "apiId": "",
  "definition": ""
}, context)
```

#### Input
* input `object`
  * apiId **required** `string`
  * definition **required** [Blob](#blob)

#### Output
* output [StartSchemaCreationResponse](#startschemacreationresponse)

### ListTypes



```js
amazonaws_appsync.ListTypes({
  "apiId": ""
}, context)
```

#### Input
* input `object`
  * apiId **required** `string`

#### Output
* output [ListTypesResponse](#listtypesresponse)

### UpdateType



```js
amazonaws_appsync.UpdateType({
  "apiId": "",
  "typeName": "",
  "format": ""
}, context)
```

#### Input
* input `object`
  * apiId **required** `string`
  * typeName **required** `string`
  * definition [String](#string)
  * format **required** [TypeDefinitionFormat](#typedefinitionformat)

#### Output
* output [UpdateTypeResponse](#updatetyperesponse)

### ListResolvers



```js
amazonaws_appsync.ListResolvers({
  "apiId": "",
  "typeName": ""
}, context)
```

#### Input
* input `object`
  * apiId **required** `string`
  * typeName **required** `string`

#### Output
* output [ListResolversResponse](#listresolversresponse)

### UpdateResolver



```js
amazonaws_appsync.UpdateResolver({
  "apiId": "",
  "typeName": "",
  "fieldName": "",
  "dataSourceName": "",
  "requestMappingTemplate": ""
}, context)
```

#### Input
* input `object`
  * apiId **required** `string`
  * typeName **required** `string`
  * fieldName **required** `string`
  * dataSourceName **required** [ResourceName](#resourcename)
  * requestMappingTemplate **required** [MappingTemplate](#mappingtemplate)
  * responseMappingTemplate [MappingTemplate](#mappingtemplate)

#### Output
* output [UpdateResolverResponse](#updateresolverresponse)



## Definitions

### ApiKey
* ApiKey `object`: Describes an API key.
  * description [String](#string)
  * expires [Long](#long)
  * id [String](#string)

### ApiKeyLimitExceededException
* ApiKeyLimitExceededException `object`: The API key exceeded a limit. Try your request again.
  * message [String](#string)

### ApiKeys
* ApiKeys `array`
  * items [ApiKey](#apikey)

### ApiLimitExceededException
* ApiLimitExceededException `object`: The GraphQL API exceeded a limit. Try your request again.
  * message [String](#string)

### AuthenticationType
* AuthenticationType `string` (values: API_KEY, AWS_IAM, AMAZON_COGNITO_USER_POOLS)

### BadRequestException
* BadRequestException `object`: The request is not well formed. For example, a value is invalid or a required field is missing. Check the field values, and try again. 
  * message [ErrorMessage](#errormessage)

### Blob
* Blob `string`

### Boolean
* Boolean `boolean`

### ConcurrentModificationException
* ConcurrentModificationException `object`: Another modification is being made. That modification must complete before you can make your change. 
  * message [ErrorMessage](#errormessage)

### CreateApiKeyRequest
* CreateApiKeyRequest `object`
  * description [String](#string)

### CreateApiKeyResponse
* CreateApiKeyResponse `object`
  * apiKey [ApiKey](#apikey)

### CreateDataSourceRequest
* CreateDataSourceRequest `object`
  * description [String](#string)
  * dynamodbConfig [DynamodbDataSourceConfig](#dynamodbdatasourceconfig)
  * elasticsearchConfig [ElasticsearchDataSourceConfig](#elasticsearchdatasourceconfig)
  * lambdaConfig [LambdaDataSourceConfig](#lambdadatasourceconfig)
  * name **required** [ResourceName](#resourcename)
  * serviceRoleArn [String](#string)
  * type **required** [DataSourceType](#datasourcetype)

### CreateDataSourceResponse
* CreateDataSourceResponse `object`
  * dataSource [DataSource](#datasource)

### CreateGraphqlApiRequest
* CreateGraphqlApiRequest `object`
  * authenticationType **required** [AuthenticationType](#authenticationtype)
  * name **required** [ResourceName](#resourcename)
  * userPoolConfig [UserPoolConfig](#userpoolconfig)

### CreateGraphqlApiResponse
* CreateGraphqlApiResponse `object`
  * graphqlApi [GraphqlApi](#graphqlapi)

### CreateResolverRequest
* CreateResolverRequest `object`
  * dataSourceName **required** [ResourceName](#resourcename)
  * fieldName **required** [ResourceName](#resourcename)
  * requestMappingTemplate **required** [MappingTemplate](#mappingtemplate)
  * responseMappingTemplate [MappingTemplate](#mappingtemplate)

### CreateResolverResponse
* CreateResolverResponse `object`
  * resolver [Resolver](#resolver)

### CreateTypeRequest
* CreateTypeRequest `object`
  * definition **required** [String](#string)
  * format **required** [TypeDefinitionFormat](#typedefinitionformat)

### CreateTypeResponse
* CreateTypeResponse `object`
  * type [Type](#type)

### DataSource
* DataSource `object`: Describes a data source.
  * dataSourceArn [String](#string)
  * description [String](#string)
  * dynamodbConfig [DynamodbDataSourceConfig](#dynamodbdatasourceconfig)
  * elasticsearchConfig [ElasticsearchDataSourceConfig](#elasticsearchdatasourceconfig)
  * lambdaConfig [LambdaDataSourceConfig](#lambdadatasourceconfig)
  * name [ResourceName](#resourcename)
  * serviceRoleArn [String](#string)
  * type [DataSourceType](#datasourcetype)

### DataSourceType
* DataSourceType `string` (values: AWS_LAMBDA, AMAZON_DYNAMODB, AMAZON_ELASTICSEARCH)

### DataSources
* DataSources `array`
  * items [DataSource](#datasource)

### DefaultAction
* DefaultAction `string` (values: ALLOW, DENY)

### DeleteApiKeyRequest
* DeleteApiKeyRequest `object`

### DeleteApiKeyResponse
* DeleteApiKeyResponse `object`

### DeleteDataSourceRequest
* DeleteDataSourceRequest `object`

### DeleteDataSourceResponse
* DeleteDataSourceResponse `object`

### DeleteGraphqlApiRequest
* DeleteGraphqlApiRequest `object`

### DeleteGraphqlApiResponse
* DeleteGraphqlApiResponse `object`

### DeleteResolverRequest
* DeleteResolverRequest `object`

### DeleteResolverResponse
* DeleteResolverResponse `object`

### DeleteTypeRequest
* DeleteTypeRequest `object`

### DeleteTypeResponse
* DeleteTypeResponse `object`

### DynamodbDataSourceConfig
* DynamodbDataSourceConfig `object`: Describes a DynamoDB data source configuration.
  * awsRegion **required** [String](#string)
  * tableName **required** [String](#string)
  * useCallerCredentials [Boolean](#boolean)

### ElasticsearchDataSourceConfig
* ElasticsearchDataSourceConfig `object`: Describes an Elasticsearch data source configuration.
  * awsRegion **required** [String](#string)
  * endpoint **required** [String](#string)

### ErrorMessage
* ErrorMessage `string`

### GetDataSourceRequest
* GetDataSourceRequest `object`

### GetDataSourceResponse
* GetDataSourceResponse `object`
  * dataSource [DataSource](#datasource)

### GetGraphqlApiRequest
* GetGraphqlApiRequest `object`

### GetGraphqlApiResponse
* GetGraphqlApiResponse `object`
  * graphqlApi [GraphqlApi](#graphqlapi)

### GetIntrospectionSchemaRequest
* GetIntrospectionSchemaRequest `object`

### GetIntrospectionSchemaResponse
* GetIntrospectionSchemaResponse `object`
  * schema [Blob](#blob)

### GetResolverRequest
* GetResolverRequest `object`

### GetResolverResponse
* GetResolverResponse `object`
  * resolver [Resolver](#resolver)

### GetSchemaCreationStatusRequest
* GetSchemaCreationStatusRequest `object`

### GetSchemaCreationStatusResponse
* GetSchemaCreationStatusResponse `object`
  * details [String](#string)
  * status [SchemaStatus](#schemastatus)

### GetTypeRequest
* GetTypeRequest `object`

### GetTypeResponse
* GetTypeResponse `object`
  * type [Type](#type)

### GraphQLSchemaException
* GraphQLSchemaException `object`: The GraphQL schema is not valid.
  * message [ErrorMessage](#errormessage)

### GraphqlApi
* GraphqlApi `object`: Describes a GraphQL API.
  * apiId [String](#string)
  * arn [String](#string)
  * authenticationType [AuthenticationType](#authenticationtype)
  * name [ResourceName](#resourcename)
  * uris [MapOfStringToString](#mapofstringtostring)
  * userPoolConfig [UserPoolConfig](#userpoolconfig)

### GraphqlApis
* GraphqlApis `array`
  * items [GraphqlApi](#graphqlapi)

### InternalFailureException
* InternalFailureException `object`: An internal AWS AppSync error occurred. Try your request again.
  * message [String](#string)

### LambdaDataSourceConfig
* LambdaDataSourceConfig `object`: Describes a Lambda data source configuration.
  * lambdaFunctionArn **required** [String](#string)

### LimitExceededException
* LimitExceededException `object`: The request exceeded a limit. Try your request again.
  * message [String](#string)

### ListApiKeysRequest
* ListApiKeysRequest `object`

### ListApiKeysResponse
* ListApiKeysResponse `object`
  * apiKeys [ApiKeys](#apikeys)
  * nextToken [PaginationToken](#paginationtoken)

### ListDataSourcesRequest
* ListDataSourcesRequest `object`

### ListDataSourcesResponse
* ListDataSourcesResponse `object`
  * dataSources [DataSources](#datasources)
  * nextToken [PaginationToken](#paginationtoken)

### ListGraphqlApisRequest
* ListGraphqlApisRequest `object`

### ListGraphqlApisResponse
* ListGraphqlApisResponse `object`
  * graphqlApis [GraphqlApis](#graphqlapis)
  * nextToken [PaginationToken](#paginationtoken)

### ListResolversRequest
* ListResolversRequest `object`

### ListResolversResponse
* ListResolversResponse `object`
  * nextToken [PaginationToken](#paginationtoken)
  * resolvers [Resolvers](#resolvers)

### ListTypesRequest
* ListTypesRequest `object`

### ListTypesResponse
* ListTypesResponse `object`
  * nextToken [PaginationToken](#paginationtoken)
  * types [TypeList](#typelist)

### Long
* Long `integer`

### MapOfStringToString
* MapOfStringToString `array`
  * items `object`
    * key [String](#string)
    * value [String](#string)

### MappingTemplate
* MappingTemplate `string`

### MaxResults
* MaxResults `integer`

### NotFoundException
* NotFoundException `object`: The resource specified in the request was not found. Check the resource and try again.
  * message [String](#string)

### OutputType
* OutputType `string` (values: SDL, JSON)

### PaginationToken
* PaginationToken `string`

### Resolver
* Resolver `object`: Describes a resolver.
  * dataSourceName [ResourceName](#resourcename)
  * fieldName [ResourceName](#resourcename)
  * requestMappingTemplate [MappingTemplate](#mappingtemplate)
  * resolverArn [String](#string)
  * responseMappingTemplate [MappingTemplate](#mappingtemplate)
  * typeName [ResourceName](#resourcename)

### Resolvers
* Resolvers `array`
  * items [Resolver](#resolver)

### ResourceName
* ResourceName `string`

### SchemaStatus
* SchemaStatus `string` (values: PROCESSING, ACTIVE, DELETING)

### StartSchemaCreationRequest
* StartSchemaCreationRequest `object`
  * definition **required** [Blob](#blob)

### StartSchemaCreationResponse
* StartSchemaCreationResponse `object`
  * status [SchemaStatus](#schemastatus)

### String
* String `string`

### Type
* Type `object`: Describes a type.
  * arn [String](#string)
  * definition [String](#string)
  * description [String](#string)
  * format [TypeDefinitionFormat](#typedefinitionformat)
  * name [ResourceName](#resourcename)

### TypeDefinitionFormat
* TypeDefinitionFormat `string` (values: SDL, JSON)

### TypeList
* TypeList `array`
  * items [Type](#type)

### UnauthorizedException
* UnauthorizedException `object`: You are not authorized to perform this operation.
  * message [String](#string)

### UpdateDataSourceRequest
* UpdateDataSourceRequest `object`
  * description [String](#string)
  * dynamodbConfig [DynamodbDataSourceConfig](#dynamodbdatasourceconfig)
  * elasticsearchConfig [ElasticsearchDataSourceConfig](#elasticsearchdatasourceconfig)
  * lambdaConfig [LambdaDataSourceConfig](#lambdadatasourceconfig)
  * serviceRoleArn [String](#string)
  * type **required** [DataSourceType](#datasourcetype)

### UpdateDataSourceResponse
* UpdateDataSourceResponse `object`
  * dataSource [DataSource](#datasource)

### UpdateGraphqlApiRequest
* UpdateGraphqlApiRequest `object`
  * authenticationType [AuthenticationType](#authenticationtype)
  * name **required** [ResourceName](#resourcename)
  * userPoolConfig [UserPoolConfig](#userpoolconfig)

### UpdateGraphqlApiResponse
* UpdateGraphqlApiResponse `object`
  * graphqlApi [GraphqlApi](#graphqlapi)

### UpdateResolverRequest
* UpdateResolverRequest `object`
  * dataSourceName **required** [ResourceName](#resourcename)
  * requestMappingTemplate **required** [MappingTemplate](#mappingtemplate)
  * responseMappingTemplate [MappingTemplate](#mappingtemplate)

### UpdateResolverResponse
* UpdateResolverResponse `object`
  * resolver [Resolver](#resolver)

### UpdateTypeRequest
* UpdateTypeRequest `object`
  * definition [String](#string)
  * format **required** [TypeDefinitionFormat](#typedefinitionformat)

### UpdateTypeResponse
* UpdateTypeResponse `object`
  * type [Type](#type)

### UserPoolConfig
* UserPoolConfig `object`: Describes an Amazon Cognito User Pool configuration.
  * appIdClientRegex [String](#string)
  * awsRegion **required** [String](#string)
  * defaultAction **required** [DefaultAction](#defaultaction)
  * userPoolId **required** [String](#string)


