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

### CreateGraphqlApi



```js
amazonaws_appsync.CreateGraphqlApi({
  "name": "",
  "authenticationType": ""
}, context)
```

#### Input
* input `object`
  * authenticationType **required** [AuthenticationType](#authenticationtype)
  * logConfig [LogConfig](#logconfig)
  * name **required** [String](#string)
  * openIDConnectConfig [OpenIDConnectConfig](#openidconnectconfig)
  * userPoolConfig [UserPoolConfig](#userpoolconfig)

#### Output
* output [CreateGraphqlApiResponse](#creategraphqlapiresponse)

### DeleteGraphqlApi



```js
amazonaws_appsync.DeleteGraphqlApi({
  "apiId": ""
}, context)
```

#### Input
* input `object`
  * apiId **required** `string`

#### Output
* output [DeleteGraphqlApiResponse](#deletegraphqlapiresponse)

### GetGraphqlApi



```js
amazonaws_appsync.GetGraphqlApi({
  "apiId": ""
}, context)
```

#### Input
* input `object`
  * apiId **required** `string`

#### Output
* output [GetGraphqlApiResponse](#getgraphqlapiresponse)

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
  * logConfig [LogConfig](#logconfig)
  * name **required** [String](#string)
  * openIDConnectConfig [OpenIDConnectConfig](#openidconnectconfig)
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

### CreateApiKey



```js
amazonaws_appsync.CreateApiKey({
  "apiId": ""
}, context)
```

#### Input
* input `object`
  * apiId **required** `string`
  * description [String](#string)
  * expires [Long](#long)

#### Output
* output [CreateApiKeyResponse](#createapikeyresponse)

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

### UpdateApiKey



```js
amazonaws_appsync.UpdateApiKey({
  "apiId": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * apiId **required** `string`
  * id **required** `string`
  * description [String](#string)
  * expires [Long](#long)

#### Output
* output [UpdateApiKeyResponse](#updateapikeyresponse)

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

### CreateDataSource



```js
amazonaws_appsync.CreateDataSource({
  "apiId": "",
  "name": "",
  "type": ""
}, context)
```

#### Input
* input `object`
  * apiId **required** `string`
  * description [String](#string)
  * dynamodbConfig [DynamodbDataSourceConfig](#dynamodbdatasourceconfig)
  * elasticsearchConfig [ElasticsearchDataSourceConfig](#elasticsearchdatasourceconfig)
  * lambdaConfig [LambdaDataSourceConfig](#lambdadatasourceconfig)
  * name **required** [ResourceName](#resourcename)
  * serviceRoleArn [String](#string)
  * type **required** [DataSourceType](#datasourcetype)

#### Output
* output [CreateDataSourceResponse](#createdatasourceresponse)

### DeleteDataSource



```js
amazonaws_appsync.DeleteDataSource({
  "apiId": "",
  "name": ""
}, context)
```

#### Input
* input `object`
  * apiId **required** `string`
  * name **required** `string`

#### Output
* output [DeleteDataSourceResponse](#deletedatasourceresponse)

### GetDataSource



```js
amazonaws_appsync.GetDataSource({
  "apiId": "",
  "name": ""
}, context)
```

#### Input
* input `object`
  * apiId **required** `string`
  * name **required** `string`

#### Output
* output [GetDataSourceResponse](#getdatasourceresponse)

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

### GetSchemaCreationStatus



```js
amazonaws_appsync.GetSchemaCreationStatus({
  "apiId": ""
}, context)
```

#### Input
* input `object`
  * apiId **required** `string`

#### Output
* output [GetSchemaCreationStatusResponse](#getschemacreationstatusresponse)

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

### CreateType



```js
amazonaws_appsync.CreateType({
  "apiId": "",
  "definition": "",
  "format": ""
}, context)
```

#### Input
* input `object`
  * apiId **required** `string`
  * definition **required** [String](#string)
  * format **required** [TypeDefinitionFormat](#typedefinitionformat)

#### Output
* output [CreateTypeResponse](#createtyperesponse)

### DeleteType



```js
amazonaws_appsync.DeleteType({
  "apiId": "",
  "typeName": ""
}, context)
```

#### Input
* input `object`
  * apiId **required** `string`
  * typeName **required** `string`

#### Output
* output [DeleteTypeResponse](#deletetyperesponse)

### GetType



```js
amazonaws_appsync.GetType({
  "apiId": "",
  "typeName": ""
}, context)
```

#### Input
* input `object`
  * apiId **required** `string`
  * typeName **required** `string`

#### Output
* output [GetTypeResponse](#gettyperesponse)

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

### CreateResolver



```js
amazonaws_appsync.CreateResolver({
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
  * dataSourceName **required** [ResourceName](#resourcename)
  * fieldName **required** [ResourceName](#resourcename)
  * requestMappingTemplate **required** [MappingTemplate](#mappingtemplate)
  * responseMappingTemplate [MappingTemplate](#mappingtemplate)

#### Output
* output [CreateResolverResponse](#createresolverresponse)

### DeleteResolver



```js
amazonaws_appsync.DeleteResolver({
  "apiId": "",
  "typeName": "",
  "fieldName": ""
}, context)
```

#### Input
* input `object`
  * apiId **required** `string`
  * typeName **required** `string`
  * fieldName **required** `string`

#### Output
* output [DeleteResolverResponse](#deleteresolverresponse)

### GetResolver



```js
amazonaws_appsync.GetResolver({
  "apiId": "",
  "typeName": "",
  "fieldName": ""
}, context)
```

#### Input
* input `object`
  * apiId **required** `string`
  * typeName **required** `string`
  * fieldName **required** `string`

#### Output
* output [GetResolverResponse](#getresolverresponse)

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
* ApiKey `object`: <p>Describes an API key.</p> <p>Customers invoke AWS AppSync GraphQL APIs with API keys as an identity mechanism. There are two key versions:</p> <p> <b>da1</b>: This version was introduced at launch in November 2017. These keys always expire after 7 days. Key expiration is managed by DynamoDB TTL. The keys will cease to be valid after Feb 21, 2018 and should not be used after that date.</p> <ul> <li> <p> <code>ListApiKeys</code> returns the expiration time in milliseconds.</p> </li> <li> <p> <code>CreateApiKey</code> returns the expiration time in milliseconds.</p> </li> <li> <p> <code>UpdateApiKey</code> is not available for this key version.</p> </li> <li> <p> <code>DeleteApiKey</code> deletes the item from the table.</p> </li> <li> <p>Expiration is stored in DynamoDB as milliseconds. This results in a bug where keys are not automatically deleted because DynamoDB expects the TTL to be stored in seconds. As a one-time action, we will delete these keys from the table after Feb 21, 2018.</p> </li> </ul> <p> <b>da2</b>: This version was introduced in February 2018 when AppSync added support to extend key expiration.</p> <ul> <li> <p> <code>ListApiKeys</code> returns the expiration time in seconds.</p> </li> <li> <p> <code>CreateApiKey</code> returns the expiration time in seconds and accepts a user-provided expiration time in seconds.</p> </li> <li> <p> <code>UpdateApiKey</code> returns the expiration time in seconds and accepts a user-provided expiration time in seconds. Key expiration can only be updated while the key has not expired.</p> </li> <li> <p> <code>DeleteApiKey</code> deletes the item from the table.</p> </li> <li> <p>Expiration is stored in DynamoDB as seconds.</p> </li> </ul>
  * description [String](#string)
  * expires [Long](#long)
  * id [String](#string)

### ApiKeyLimitExceededException
* ApiKeyLimitExceededException `object`: The API key exceeded a limit. Try your request again.
  * message [String](#string)

### ApiKeyValidityOutOfBoundsException
* ApiKeyValidityOutOfBoundsException `object`: The API key expiration must be set to a value between 1 and 365 days from creation (for <code>CreateApiKey</code>) or from update (for <code>UpdateApiKey</code>).
  * message [String](#string)

### ApiKeys
* ApiKeys `array`
  * items [ApiKey](#apikey)

### ApiLimitExceededException
* ApiLimitExceededException `object`: The GraphQL API exceeded a limit. Try your request again.
  * message [String](#string)

### AuthenticationType
* AuthenticationType `string` (values: API_KEY, AWS_IAM, AMAZON_COGNITO_USER_POOLS, OPENID_CONNECT)

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
  * expires [Long](#long)

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
  * logConfig [LogConfig](#logconfig)
  * name **required** [String](#string)
  * openIDConnectConfig [OpenIDConnectConfig](#openidconnectconfig)
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
* DataSourceType `string` (values: AWS_LAMBDA, AMAZON_DYNAMODB, AMAZON_ELASTICSEARCH, NONE)

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

### FieldLogLevel
* FieldLogLevel `string` (values: NONE, ERROR, ALL)

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
  * logConfig [LogConfig](#logconfig)
  * name [ResourceName](#resourcename)
  * openIDConnectConfig [OpenIDConnectConfig](#openidconnectconfig)
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

### LogConfig
* LogConfig `object`: The CloudWatch Logs configuration.
  * cloudWatchLogsRoleArn **required** [String](#string)
  * fieldLogLevel **required** [FieldLogLevel](#fieldloglevel)

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

### OpenIDConnectConfig
* OpenIDConnectConfig `object`: Describes an Open Id Connect configuration.
  * authTTL [Long](#long)
  * clientId [String](#string)
  * iatTTL [Long](#long)
  * issuer **required** [String](#string)

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

### UpdateApiKeyRequest
* UpdateApiKeyRequest `object`
  * description [String](#string)
  * expires [Long](#long)

### UpdateApiKeyResponse
* UpdateApiKeyResponse `object`
  * apiKey [ApiKey](#apikey)

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
  * logConfig [LogConfig](#logconfig)
  * name **required** [String](#string)
  * openIDConnectConfig [OpenIDConnectConfig](#openidconnectconfig)
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


