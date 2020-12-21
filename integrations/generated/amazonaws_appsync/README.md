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

.then(data => {
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
  * nextToken `string`
  * maxResults `integer`

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
  * tags `object`: A map with keys of <code>TagKey</code> objects and values of <code>TagValue</code> objects.
  * additionalAuthenticationProviders `array`: A list of additional authentication providers for the <code>GraphqlApi</code> API.
    * items [AdditionalAuthenticationProvider](#additionalauthenticationprovider)
  * authenticationType **required** `string` (values: API_KEY, AWS_IAM, AMAZON_COGNITO_USER_POOLS, OPENID_CONNECT): The authentication type: API key, AWS IAM, OIDC, or Amazon Cognito user pools.
  * logConfig `object`: The CloudWatch Logs configuration.
    * cloudWatchLogsRoleArn
    * excludeVerboseContent
    * fieldLogLevel
  * name **required** `string`: A user-supplied name for the <code>GraphqlApi</code>.
  * openIDConnectConfig `object`: Describes an OpenID Connect configuration.
    * authTTL
    * clientId
    * iatTTL
    * issuer
  * userPoolConfig `object`: Describes an Amazon Cognito user pool configuration.
    * appIdClientRegex
    * awsRegion
    * defaultAction
    * userPoolId
  * xrayEnabled `boolean`: A flag indicating whether to enable X-Ray tracing for the <code>GraphqlApi</code>.

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
  * additionalAuthenticationProviders `array`: A list of additional authentication providers for the <code>GraphqlApi</code> API.
    * items [AdditionalAuthenticationProvider](#additionalauthenticationprovider)
  * authenticationType `string` (values: API_KEY, AWS_IAM, AMAZON_COGNITO_USER_POOLS, OPENID_CONNECT): The new authentication type for the <code>GraphqlApi</code> object.
  * logConfig `object`: The CloudWatch Logs configuration.
    * cloudWatchLogsRoleArn
    * excludeVerboseContent
    * fieldLogLevel
  * name **required** `string`: The new name for the <code>GraphqlApi</code> object.
  * openIDConnectConfig `object`: Describes an OpenID Connect configuration.
    * authTTL
    * clientId
    * iatTTL
    * issuer
  * userPoolConfig `object`: Describes an Amazon Cognito user pool configuration.
    * appIdClientRegex
    * awsRegion
    * defaultAction
    * userPoolId
  * xrayEnabled `boolean`: A flag indicating whether to enable X-Ray tracing for the <code>GraphqlApi</code>.

#### Output
* output [UpdateGraphqlApiResponse](#updategraphqlapiresponse)

### DeleteApiCache



```js
amazonaws_appsync.DeleteApiCache({
  "apiId": ""
}, context)
```

#### Input
* input `object`
  * apiId **required** `string`

#### Output
* output [DeleteApiCacheResponse](#deleteapicacheresponse)

### GetApiCache



```js
amazonaws_appsync.GetApiCache({
  "apiId": ""
}, context)
```

#### Input
* input `object`
  * apiId **required** `string`

#### Output
* output [GetApiCacheResponse](#getapicacheresponse)

### CreateApiCache



```js
amazonaws_appsync.CreateApiCache({
  "apiId": "",
  "ttl": 0,
  "apiCachingBehavior": "",
  "type": ""
}, context)
```

#### Input
* input `object`
  * apiId **required** `string`
  * apiCachingBehavior **required** `string` (values: FULL_REQUEST_CACHING, PER_RESOLVER_CACHING): <p>Caching behavior.</p> <ul> <li> <p> <b>FULL_REQUEST_CACHING</b>: All requests are fully cached.</p> </li> <li> <p> <b>PER_RESOLVER_CACHING</b>: Individual resolvers that you specify are cached.</p> </li> </ul>
  * atRestEncryptionEnabled `boolean`: At rest encryption flag for cache. This setting cannot be updated after creation.
  * transitEncryptionEnabled `boolean`: Transit encryption flag when connecting to cache. This setting cannot be updated after creation.
  * ttl **required** `integer`: <p>TTL in seconds for cache entries.</p> <p>Valid values are between 1 and 3600 seconds.</p>
  * type **required** `string` (values: T2_SMALL, T2_MEDIUM, R4_LARGE, R4_XLARGE, R4_2XLARGE, R4_4XLARGE, R4_8XLARGE, SMALL, MEDIUM, LARGE, XLARGE, LARGE_2X, LARGE_4X, LARGE_8X, LARGE_12X): <p>The cache instance type. Valid values are </p> <ul> <li> <p> <code>SMALL</code> </p> </li> <li> <p> <code>MEDIUM</code> </p> </li> <li> <p> <code>LARGE</code> </p> </li> <li> <p> <code>XLARGE</code> </p> </li> <li> <p> <code>LARGE_2X</code> </p> </li> <li> <p> <code>LARGE_4X</code> </p> </li> <li> <p> <code>LARGE_8X</code> (not available in all regions)</p> </li> <li> <p> <code>LARGE_12X</code> </p> </li> </ul> <p>Historically, instance types were identified by an EC2-style value. As of July 2020, this is deprecated, and the generic identifiers above should be used.</p> <p>The following legacy instance types are available, but their use is discouraged:</p> <ul> <li> <p> <b>T2_SMALL</b>: A t2.small instance type.</p> </li> <li> <p> <b>T2_MEDIUM</b>: A t2.medium instance type.</p> </li> <li> <p> <b>R4_LARGE</b>: A r4.large instance type.</p> </li> <li> <p> <b>R4_XLARGE</b>: A r4.xlarge instance type.</p> </li> <li> <p> <b>R4_2XLARGE</b>: A r4.2xlarge instance type.</p> </li> <li> <p> <b>R4_4XLARGE</b>: A r4.4xlarge instance type.</p> </li> <li> <p> <b>R4_8XLARGE</b>: A r4.8xlarge instance type.</p> </li> </ul>

#### Output
* output [CreateApiCacheResponse](#createapicacheresponse)

### UpdateApiCache



```js
amazonaws_appsync.UpdateApiCache({
  "apiId": "",
  "ttl": 0,
  "apiCachingBehavior": "",
  "type": ""
}, context)
```

#### Input
* input `object`
  * apiId **required** `string`
  * apiCachingBehavior **required** `string` (values: FULL_REQUEST_CACHING, PER_RESOLVER_CACHING): <p>Caching behavior.</p> <ul> <li> <p> <b>FULL_REQUEST_CACHING</b>: All requests are fully cached.</p> </li> <li> <p> <b>PER_RESOLVER_CACHING</b>: Individual resolvers that you specify are cached.</p> </li> </ul>
  * ttl **required** `integer`: <p>TTL in seconds for cache entries.</p> <p>Valid values are between 1 and 3600 seconds.</p>
  * type **required** `string` (values: T2_SMALL, T2_MEDIUM, R4_LARGE, R4_XLARGE, R4_2XLARGE, R4_4XLARGE, R4_8XLARGE, SMALL, MEDIUM, LARGE, XLARGE, LARGE_2X, LARGE_4X, LARGE_8X, LARGE_12X): <p>The cache instance type. Valid values are </p> <ul> <li> <p> <code>SMALL</code> </p> </li> <li> <p> <code>MEDIUM</code> </p> </li> <li> <p> <code>LARGE</code> </p> </li> <li> <p> <code>XLARGE</code> </p> </li> <li> <p> <code>LARGE_2X</code> </p> </li> <li> <p> <code>LARGE_4X</code> </p> </li> <li> <p> <code>LARGE_8X</code> (not available in all regions)</p> </li> <li> <p> <code>LARGE_12X</code> </p> </li> </ul> <p>Historically, instance types were identified by an EC2-style value. As of July 2020, this is deprecated, and the generic identifiers above should be used.</p> <p>The following legacy instance types are available, but their use is discouraged:</p> <ul> <li> <p> <b>T2_SMALL</b>: A t2.small instance type.</p> </li> <li> <p> <b>T2_MEDIUM</b>: A t2.medium instance type.</p> </li> <li> <p> <b>R4_LARGE</b>: A r4.large instance type.</p> </li> <li> <p> <b>R4_XLARGE</b>: A r4.xlarge instance type.</p> </li> <li> <p> <b>R4_2XLARGE</b>: A r4.2xlarge instance type.</p> </li> <li> <p> <b>R4_4XLARGE</b>: A r4.4xlarge instance type.</p> </li> <li> <p> <b>R4_8XLARGE</b>: A r4.8xlarge instance type.</p> </li> </ul>

#### Output
* output [UpdateApiCacheResponse](#updateapicacheresponse)

### FlushApiCache



```js
amazonaws_appsync.FlushApiCache({
  "apiId": ""
}, context)
```

#### Input
* input `object`
  * apiId **required** `string`

#### Output
* output [FlushApiCacheResponse](#flushapicacheresponse)

### ListApiKeys



```js
amazonaws_appsync.ListApiKeys({
  "apiId": ""
}, context)
```

#### Input
* input `object`
  * apiId **required** `string`
  * nextToken `string`
  * maxResults `integer`

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
  * description `string`: A description of the purpose of the API key.
  * expires `integer`: The time from creation time after which the API key expires. The date is represented as seconds since the epoch, rounded down to the nearest hour. The default value for this parameter is 7 days from creation time. For more information, see .

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
  * description `string`: A description of the purpose of the API key.
  * expires `integer`: The time from update time after which the API key expires. The date is represented as seconds since the epoch. For more information, see .

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
  * nextToken `string`
  * maxResults `integer`

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
  * description `string`: A description of the <code>DataSource</code>.
  * dynamodbConfig `object`: Describes an Amazon DynamoDB data source configuration.
    * awsRegion
    * deltaSyncConfig
      * baseTableTTL
      * deltaSyncTableName
      * deltaSyncTableTTL
    * tableName
    * useCallerCredentials
    * versioned
  * elasticsearchConfig `object`: Describes an Elasticsearch data source configuration.
    * awsRegion
    * endpoint
  * httpConfig `object`: Describes an HTTP data source configuration.
    * authorizationConfig
      * authorizationType **required**
      * awsIamConfig
        * signingRegion
        * signingServiceName
    * endpoint
  * lambdaConfig `object`: Describes an AWS Lambda data source configuration.
    * lambdaFunctionArn
  * name **required** `string`: A user-supplied name for the <code>DataSource</code>.
  * relationalDatabaseConfig `object`: Describes a relational database data source configuration.
    * rdsHttpEndpointConfig
      * awsRegion
      * awsSecretStoreArn
      * databaseName
      * dbClusterIdentifier
      * schema
    * relationalDatabaseSourceType
  * serviceRoleArn `string`: The AWS IAM service role ARN for the data source. The system assumes this role when accessing the data source.
  * type **required** `string` (values: AWS_LAMBDA, AMAZON_DYNAMODB, AMAZON_ELASTICSEARCH, NONE, HTTP, RELATIONAL_DATABASE): The type of the <code>DataSource</code>.

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
  * description `string`: The new description for the data source.
  * dynamodbConfig `object`: Describes an Amazon DynamoDB data source configuration.
    * awsRegion
    * deltaSyncConfig
      * baseTableTTL
      * deltaSyncTableName
      * deltaSyncTableTTL
    * tableName
    * useCallerCredentials
    * versioned
  * elasticsearchConfig `object`: Describes an Elasticsearch data source configuration.
    * awsRegion
    * endpoint
  * httpConfig `object`: Describes an HTTP data source configuration.
    * authorizationConfig
      * authorizationType **required**
      * awsIamConfig
        * signingRegion
        * signingServiceName
    * endpoint
  * lambdaConfig `object`: Describes an AWS Lambda data source configuration.
    * lambdaFunctionArn
  * relationalDatabaseConfig `object`: Describes a relational database data source configuration.
    * rdsHttpEndpointConfig
      * awsRegion
      * awsSecretStoreArn
      * databaseName
      * dbClusterIdentifier
      * schema
    * relationalDatabaseSourceType
  * serviceRoleArn `string`: The new service role ARN for the data source.
  * type **required** `string` (values: AWS_LAMBDA, AMAZON_DYNAMODB, AMAZON_ELASTICSEARCH, NONE, HTTP, RELATIONAL_DATABASE): The new data source type.

#### Output
* output [UpdateDataSourceResponse](#updatedatasourceresponse)

### ListFunctions



```js
amazonaws_appsync.ListFunctions({
  "apiId": ""
}, context)
```

#### Input
* input `object`
  * apiId **required** `string`
  * nextToken `string`
  * maxResults `integer`

#### Output
* output [ListFunctionsResponse](#listfunctionsresponse)

### CreateFunction



```js
amazonaws_appsync.CreateFunction({
  "apiId": "",
  "name": "",
  "dataSourceName": "",
  "functionVersion": ""
}, context)
```

#### Input
* input `object`
  * apiId **required** `string`
  * dataSourceName **required** `string`: The <code>Function</code> <code>DataSource</code> name.
  * description `string`: The <code>Function</code> description.
  * functionVersion **required** `string`: The <code>version</code> of the request mapping template. Currently the supported value is 2018-05-29. 
  * name **required** `string`: The <code>Function</code> name. The function name does not have to be unique.
  * requestMappingTemplate `string`: The <code>Function</code> request mapping template. Functions support only the 2018-05-29 version of the request mapping template.
  * responseMappingTemplate `string`: The <code>Function</code> response mapping template. 

#### Output
* output [CreateFunctionResponse](#createfunctionresponse)

### DeleteFunction



```js
amazonaws_appsync.DeleteFunction({
  "apiId": "",
  "functionId": ""
}, context)
```

#### Input
* input `object`
  * apiId **required** `string`
  * functionId **required** `string`

#### Output
* output [DeleteFunctionResponse](#deletefunctionresponse)

### GetFunction



```js
amazonaws_appsync.GetFunction({
  "apiId": "",
  "functionId": ""
}, context)
```

#### Input
* input `object`
  * apiId **required** `string`
  * functionId **required** `string`

#### Output
* output [GetFunctionResponse](#getfunctionresponse)

### UpdateFunction



```js
amazonaws_appsync.UpdateFunction({
  "apiId": "",
  "functionId": "",
  "name": "",
  "dataSourceName": "",
  "functionVersion": ""
}, context)
```

#### Input
* input `object`
  * apiId **required** `string`
  * functionId **required** `string`
  * dataSourceName **required** `string`: The <code>Function</code> <code>DataSource</code> name.
  * description `string`: The <code>Function</code> description.
  * functionVersion **required** `string`: The <code>version</code> of the request mapping template. Currently the supported value is 2018-05-29. 
  * name **required** `string`: The <code>Function</code> name.
  * requestMappingTemplate `string`: The <code>Function</code> request mapping template. Functions support only the 2018-05-29 version of the request mapping template.
  * responseMappingTemplate `string`: The <code>Function</code> request mapping template. 

#### Output
* output [UpdateFunctionResponse](#updatefunctionresponse)

### ListResolversByFunction



```js
amazonaws_appsync.ListResolversByFunction({
  "apiId": "",
  "functionId": ""
}, context)
```

#### Input
* input `object`
  * apiId **required** `string`
  * functionId **required** `string`
  * nextToken `string`
  * maxResults `integer`

#### Output
* output [ListResolversByFunctionResponse](#listresolversbyfunctionresponse)

### GetIntrospectionSchema



```js
amazonaws_appsync.GetIntrospectionSchema({
  "apiId": "",
  "format": ""
}, context)
```

#### Input
* input `object`
  * apiId **required** `string`
  * format **required** `string`
  * includeDirectives `boolean`

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
  * definition **required** `string`: The schema definition, in GraphQL schema language format.

#### Output
* output [StartSchemaCreationResponse](#startschemacreationresponse)

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
  * definition **required** `string`: <p>The type definition, in GraphQL Schema Definition Language (SDL) format.</p> <p>For more information, see the <a href="http://graphql.org/learn/schema/">GraphQL SDL documentation</a>.</p>
  * format **required** `string` (values: SDL, JSON): The type format: SDL or JSON.

#### Output
* output [CreateTypeResponse](#createtyperesponse)

### ListTypes



```js
amazonaws_appsync.ListTypes({
  "apiId": "",
  "format": ""
}, context)
```

#### Input
* input `object`
  * apiId **required** `string`
  * format **required** `string`
  * nextToken `string`
  * maxResults `integer`

#### Output
* output [ListTypesResponse](#listtypesresponse)

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
  * definition `string`: The new definition.
  * format **required** `string` (values: SDL, JSON): The new type format: SDL or JSON.

#### Output
* output [UpdateTypeResponse](#updatetyperesponse)

### GetType



```js
amazonaws_appsync.GetType({
  "apiId": "",
  "typeName": "",
  "format": ""
}, context)
```

#### Input
* input `object`
  * apiId **required** `string`
  * typeName **required** `string`
  * format **required** `string`

#### Output
* output [GetTypeResponse](#gettyperesponse)

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
  * nextToken `string`
  * maxResults `integer`

#### Output
* output [ListResolversResponse](#listresolversresponse)

### CreateResolver



```js
amazonaws_appsync.CreateResolver({
  "apiId": "",
  "typeName": "",
  "fieldName": ""
}, context)
```

#### Input
* input `object`
  * apiId **required** `string`
  * typeName **required** `string`
  * cachingConfig `object`: The caching configuration for a resolver that has caching enabled.
    * cachingKeys
      * items [String](#string)
    * ttl
  * dataSourceName `string`: The name of the data source for which the resolver is being created.
  * fieldName **required** `string`: The name of the field to attach the resolver to.
  * kind `string` (values: UNIT, PIPELINE): <p>The resolver type.</p> <ul> <li> <p> <b>UNIT</b>: A UNIT resolver type. A UNIT resolver is the default resolver type. A UNIT resolver enables you to execute a GraphQL query against a single data source.</p> </li> <li> <p> <b>PIPELINE</b>: A PIPELINE resolver type. A PIPELINE resolver enables you to execute a series of <code>Function</code> in a serial manner. You can use a pipeline resolver to execute a GraphQL query against multiple data sources.</p> </li> </ul>
  * pipelineConfig `object`: The pipeline configuration for a resolver of kind <code>PIPELINE</code>.
    * functions
      * items [String](#string)
  * requestMappingTemplate `string`: <p>The mapping template to be used for requests.</p> <p>A resolver uses a request mapping template to convert a GraphQL expression into a format that a data source can understand. Mapping templates are written in Apache Velocity Template Language (VTL).</p> <p>VTL request mapping templates are optional when using a Lambda data source. For all other data sources, VTL request and response mapping templates are required.</p>
  * responseMappingTemplate `string`: The mapping template to be used for responses from the data source.
  * syncConfig `object`: <p>Describes a Sync configuration for a resolver.</p> <p>Contains information on which Conflict Detection as well as Resolution strategy should be performed when the resolver is invoked.</p>
    * conflictDetection
    * conflictHandler
    * lambdaConflictHandlerConfig
      * lambdaConflictHandlerArn

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
  "fieldName": ""
}, context)
```

#### Input
* input `object`
  * apiId **required** `string`
  * typeName **required** `string`
  * fieldName **required** `string`
  * cachingConfig `object`: The caching configuration for a resolver that has caching enabled.
    * cachingKeys
      * items [String](#string)
    * ttl
  * dataSourceName `string`: The new data source name.
  * kind `string` (values: UNIT, PIPELINE): <p>The resolver type.</p> <ul> <li> <p> <b>UNIT</b>: A UNIT resolver type. A UNIT resolver is the default resolver type. A UNIT resolver enables you to execute a GraphQL query against a single data source.</p> </li> <li> <p> <b>PIPELINE</b>: A PIPELINE resolver type. A PIPELINE resolver enables you to execute a series of <code>Function</code> in a serial manner. You can use a pipeline resolver to execute a GraphQL query against multiple data sources.</p> </li> </ul>
  * pipelineConfig `object`: The pipeline configuration for a resolver of kind <code>PIPELINE</code>.
    * functions
      * items [String](#string)
  * requestMappingTemplate `string`: <p>The new request mapping template.</p> <p>A resolver uses a request mapping template to convert a GraphQL expression into a format that a data source can understand. Mapping templates are written in Apache Velocity Template Language (VTL).</p> <p>VTL request mapping templates are optional when using a Lambda data source. For all other data sources, VTL request and response mapping templates are required.</p>
  * responseMappingTemplate `string`: The new response mapping template.
  * syncConfig `object`: <p>Describes a Sync configuration for a resolver.</p> <p>Contains information on which Conflict Detection as well as Resolution strategy should be performed when the resolver is invoked.</p>
    * conflictDetection
    * conflictHandler
    * lambdaConflictHandlerConfig
      * lambdaConflictHandlerArn

#### Output
* output [UpdateResolverResponse](#updateresolverresponse)

### ListTagsForResource



```js
amazonaws_appsync.ListTagsForResource({
  "resourceArn": ""
}, context)
```

#### Input
* input `object`
  * resourceArn **required** `string`

#### Output
* output [ListTagsForResourceResponse](#listtagsforresourceresponse)

### TagResource



```js
amazonaws_appsync.TagResource({
  "resourceArn": "",
  "tags": {}
}, context)
```

#### Input
* input `object`
  * resourceArn **required** `string`
  * tags **required** `object`: A map with keys of <code>TagKey</code> objects and values of <code>TagValue</code> objects.

#### Output
* output [TagResourceResponse](#tagresourceresponse)

### UntagResource



```js
amazonaws_appsync.UntagResource({
  "resourceArn": "",
  "tagKeys": []
}, context)
```

#### Input
* input `object`
  * resourceArn **required** `string`
  * tagKeys **required** `array`

#### Output
* output [UntagResourceResponse](#untagresourceresponse)



## Definitions

### AccessDeniedException


### AdditionalAuthenticationProvider
* AdditionalAuthenticationProvider `object`: Describes an additional authentication provider.
  * authenticationType
  * openIDConnectConfig
    * authTTL
    * clientId
    * iatTTL
    * issuer **required**
  * userPoolConfig
    * appIdClientRegex
    * awsRegion **required**
    * userPoolId **required**

### AdditionalAuthenticationProviders
* AdditionalAuthenticationProviders `array`
  * items [AdditionalAuthenticationProvider](#additionalauthenticationprovider)

### ApiCache
* ApiCache `object`: The <code>ApiCache</code> object.
  * apiCachingBehavior
  * atRestEncryptionEnabled
  * status
  * transitEncryptionEnabled
  * ttl
  * type

### ApiCacheStatus
* ApiCacheStatus `string` (values: AVAILABLE, CREATING, DELETING, MODIFYING, FAILED)

### ApiCacheType
* ApiCacheType `string` (values: T2_SMALL, T2_MEDIUM, R4_LARGE, R4_XLARGE, R4_2XLARGE, R4_4XLARGE, R4_8XLARGE, SMALL, MEDIUM, LARGE, XLARGE, LARGE_2X, LARGE_4X, LARGE_8X, LARGE_12X)

### ApiCachingBehavior
* ApiCachingBehavior `string` (values: FULL_REQUEST_CACHING, PER_RESOLVER_CACHING)

### ApiKey
* ApiKey `object`: <p>Describes an API key.</p> <p>Customers invoke AWS AppSync GraphQL API operations with API keys as an identity mechanism. There are two key versions:</p> <p> <b>da1</b>: This version was introduced at launch in November 2017. These keys always expire after 7 days. Key expiration is managed by Amazon DynamoDB TTL. The keys ceased to be valid after February 21, 2018 and should not be used after that date.</p> <ul> <li> <p> <code>ListApiKeys</code> returns the expiration time in milliseconds.</p> </li> <li> <p> <code>CreateApiKey</code> returns the expiration time in milliseconds.</p> </li> <li> <p> <code>UpdateApiKey</code> is not available for this key version.</p> </li> <li> <p> <code>DeleteApiKey</code> deletes the item from the table.</p> </li> <li> <p>Expiration is stored in Amazon DynamoDB as milliseconds. This results in a bug where keys are not automatically deleted because DynamoDB expects the TTL to be stored in seconds. As a one-time action, we will delete these keys from the table after February 21, 2018.</p> </li> </ul> <p> <b>da2</b>: This version was introduced in February 2018 when AppSync added support to extend key expiration.</p> <ul> <li> <p> <code>ListApiKeys</code> returns the expiration time and deletion time in seconds.</p> </li> <li> <p> <code>CreateApiKey</code> returns the expiration time and deletion time in seconds and accepts a user-provided expiration time in seconds.</p> </li> <li> <p> <code>UpdateApiKey</code> returns the expiration time and and deletion time in seconds and accepts a user-provided expiration time in seconds. Expired API keys are kept for 60 days after the expiration time. Key expiration time can be updated while the key is not deleted. </p> </li> <li> <p> <code>DeleteApiKey</code> deletes the item from the table.</p> </li> <li> <p>Expiration is stored in Amazon DynamoDB as seconds. After the expiration time, using the key to authenticate will fail. But the key can be reinstated before deletion.</p> </li> <li> <p>Deletion is stored in Amazon DynamoDB as seconds. The key will be deleted after deletion time. </p> </li> </ul>
  * deletes
  * description
  * expires
  * id

### ApiKeyLimitExceededException


### ApiKeyValidityOutOfBoundsException


### ApiKeys
* ApiKeys `array`
  * items [ApiKey](#apikey)

### ApiLimitExceededException


### AuthenticationType
* AuthenticationType `string` (values: API_KEY, AWS_IAM, AMAZON_COGNITO_USER_POOLS, OPENID_CONNECT)

### AuthorizationConfig
* AuthorizationConfig `object`: The authorization config in case the HTTP endpoint requires authorization.
  * authorizationType **required**
  * awsIamConfig
    * signingRegion
    * signingServiceName

### AuthorizationType
* AuthorizationType `string` (values: AWS_IAM)

### AwsIamConfig
* AwsIamConfig `object`: The AWS IAM configuration.
  * signingRegion
  * signingServiceName

### BadRequestException


### Blob
* Blob `string`

### Boolean
* Boolean `boolean`

### BooleanValue
* BooleanValue `boolean`

### CachingConfig
* CachingConfig `object`: The caching configuration for a resolver that has caching enabled.
  * cachingKeys
    * items [String](#string)
  * ttl

### CachingKeys
* CachingKeys `array`
  * items [String](#string)

### CognitoUserPoolConfig
* CognitoUserPoolConfig `object`: Describes an Amazon Cognito user pool configuration.
  * appIdClientRegex
  * awsRegion **required**
  * userPoolId **required**

### ConcurrentModificationException


### ConflictDetectionType
* ConflictDetectionType `string` (values: VERSION, NONE)

### ConflictHandlerType
* ConflictHandlerType `string` (values: OPTIMISTIC_CONCURRENCY, LAMBDA, AUTOMERGE, NONE)

### CreateApiCacheRequest
* CreateApiCacheRequest `object`: Represents the input of a <code>CreateApiCache</code> operation.
  * apiCachingBehavior **required**
  * atRestEncryptionEnabled
  * transitEncryptionEnabled
  * ttl **required**
  * type **required**

### CreateApiCacheResponse
* CreateApiCacheResponse `object`: Represents the output of a <code>CreateApiCache</code> operation.
  * apiCache
    * apiCachingBehavior
    * atRestEncryptionEnabled
    * status
    * transitEncryptionEnabled
    * ttl
    * type

### CreateApiKeyRequest
* CreateApiKeyRequest `object`
  * description
  * expires

### CreateApiKeyResponse
* CreateApiKeyResponse `object`
  * apiKey
    * deletes
    * description
    * expires
    * id

### CreateDataSourceRequest
* CreateDataSourceRequest `object`
  * description
  * dynamodbConfig
    * awsRegion **required**
    * deltaSyncConfig
      * baseTableTTL
      * deltaSyncTableName
      * deltaSyncTableTTL
    * tableName **required**
    * useCallerCredentials
    * versioned
  * elasticsearchConfig
    * awsRegion **required**
    * endpoint **required**
  * httpConfig
    * authorizationConfig
      * authorizationType **required**
      * awsIamConfig
        * signingRegion
        * signingServiceName
    * endpoint
  * lambdaConfig
    * lambdaFunctionArn **required**
  * name **required**
  * relationalDatabaseConfig
    * rdsHttpEndpointConfig
      * awsRegion
      * awsSecretStoreArn
      * databaseName
      * dbClusterIdentifier
      * schema
    * relationalDatabaseSourceType
  * serviceRoleArn
  * type **required**

### CreateDataSourceResponse
* CreateDataSourceResponse `object`
  * dataSource
    * dataSourceArn
    * description
    * dynamodbConfig
      * awsRegion **required**
      * deltaSyncConfig
        * baseTableTTL
        * deltaSyncTableName
        * deltaSyncTableTTL
      * tableName **required**
      * useCallerCredentials
      * versioned
    * elasticsearchConfig
      * awsRegion **required**
      * endpoint **required**
    * httpConfig
      * authorizationConfig
        * authorizationType **required**
        * awsIamConfig
          * signingRegion
          * signingServiceName
      * endpoint
    * lambdaConfig
      * lambdaFunctionArn **required**
    * name
    * relationalDatabaseConfig
      * rdsHttpEndpointConfig
        * awsRegion
        * awsSecretStoreArn
        * databaseName
        * dbClusterIdentifier
        * schema
      * relationalDatabaseSourceType
    * serviceRoleArn
    * type

### CreateFunctionRequest
* CreateFunctionRequest `object`
  * dataSourceName **required**
  * description
  * functionVersion **required**
  * name **required**
  * requestMappingTemplate
  * responseMappingTemplate

### CreateFunctionResponse
* CreateFunctionResponse `object`
  * functionConfiguration
    * dataSourceName
    * description
    * functionArn
    * functionId
    * functionVersion
    * name
    * requestMappingTemplate
    * responseMappingTemplate

### CreateGraphqlApiRequest
* CreateGraphqlApiRequest `object`
  * tags
  * additionalAuthenticationProviders
    * items [AdditionalAuthenticationProvider](#additionalauthenticationprovider)
  * authenticationType **required**
  * logConfig
    * cloudWatchLogsRoleArn **required**
    * excludeVerboseContent
    * fieldLogLevel **required**
  * name **required**
  * openIDConnectConfig
    * authTTL
    * clientId
    * iatTTL
    * issuer **required**
  * userPoolConfig
    * appIdClientRegex
    * awsRegion **required**
    * defaultAction **required**
    * userPoolId **required**
  * xrayEnabled

### CreateGraphqlApiResponse
* CreateGraphqlApiResponse `object`
  * graphqlApi
    * tags
    * additionalAuthenticationProviders
      * items [AdditionalAuthenticationProvider](#additionalauthenticationprovider)
    * apiId
    * arn
    * authenticationType
    * logConfig
      * cloudWatchLogsRoleArn **required**
      * excludeVerboseContent
      * fieldLogLevel **required**
    * name
    * openIDConnectConfig
      * authTTL
      * clientId
      * iatTTL
      * issuer **required**
    * uris
    * userPoolConfig
      * appIdClientRegex
      * awsRegion **required**
      * defaultAction **required**
      * userPoolId **required**
    * wafWebAclArn
    * xrayEnabled

### CreateResolverRequest
* CreateResolverRequest `object`
  * cachingConfig
    * cachingKeys
      * items [String](#string)
    * ttl
  * dataSourceName
  * fieldName **required**
  * kind
  * pipelineConfig
    * functions
      * items [String](#string)
  * requestMappingTemplate
  * responseMappingTemplate
  * syncConfig
    * conflictDetection
    * conflictHandler
    * lambdaConflictHandlerConfig
      * lambdaConflictHandlerArn

### CreateResolverResponse
* CreateResolverResponse `object`
  * resolver
    * cachingConfig
      * cachingKeys
        * items [String](#string)
      * ttl
    * dataSourceName
    * fieldName
    * kind
    * pipelineConfig
      * functions
        * items [String](#string)
    * requestMappingTemplate
    * resolverArn
    * responseMappingTemplate
    * syncConfig
      * conflictDetection
      * conflictHandler
      * lambdaConflictHandlerConfig
        * lambdaConflictHandlerArn
    * typeName

### CreateTypeRequest
* CreateTypeRequest `object`
  * definition **required**
  * format **required**

### CreateTypeResponse
* CreateTypeResponse `object`
  * type
    * arn
    * definition
    * description
    * format
    * name

### DataSource
* DataSource `object`: Describes a data source.
  * dataSourceArn
  * description
  * dynamodbConfig
    * awsRegion **required**
    * deltaSyncConfig
      * baseTableTTL
      * deltaSyncTableName
      * deltaSyncTableTTL
    * tableName **required**
    * useCallerCredentials
    * versioned
  * elasticsearchConfig
    * awsRegion **required**
    * endpoint **required**
  * httpConfig
    * authorizationConfig
      * authorizationType **required**
      * awsIamConfig
        * signingRegion
        * signingServiceName
    * endpoint
  * lambdaConfig
    * lambdaFunctionArn **required**
  * name
  * relationalDatabaseConfig
    * rdsHttpEndpointConfig
      * awsRegion
      * awsSecretStoreArn
      * databaseName
      * dbClusterIdentifier
      * schema
    * relationalDatabaseSourceType
  * serviceRoleArn
  * type

### DataSourceType
* DataSourceType `string` (values: AWS_LAMBDA, AMAZON_DYNAMODB, AMAZON_ELASTICSEARCH, NONE, HTTP, RELATIONAL_DATABASE)

### DataSources
* DataSources `array`
  * items [DataSource](#datasource)

### DefaultAction
* DefaultAction `string` (values: ALLOW, DENY)

### DeleteApiCacheRequest
* DeleteApiCacheRequest `object`: Represents the input of a <code>DeleteApiCache</code> operation.

### DeleteApiCacheResponse
* DeleteApiCacheResponse `object`: Represents the output of a <code>DeleteApiCache</code> operation.

### DeleteApiKeyRequest
* DeleteApiKeyRequest `object`

### DeleteApiKeyResponse
* DeleteApiKeyResponse `object`

### DeleteDataSourceRequest
* DeleteDataSourceRequest `object`

### DeleteDataSourceResponse
* DeleteDataSourceResponse `object`

### DeleteFunctionRequest
* DeleteFunctionRequest `object`

### DeleteFunctionResponse
* DeleteFunctionResponse `object`

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

### DeltaSyncConfig
* DeltaSyncConfig `object`: Describes a Delta Sync configuration.
  * baseTableTTL
  * deltaSyncTableName
  * deltaSyncTableTTL

### DynamodbDataSourceConfig
* DynamodbDataSourceConfig `object`: Describes an Amazon DynamoDB data source configuration.
  * awsRegion **required**
  * deltaSyncConfig
    * baseTableTTL
    * deltaSyncTableName
    * deltaSyncTableTTL
  * tableName **required**
  * useCallerCredentials
  * versioned

### ElasticsearchDataSourceConfig
* ElasticsearchDataSourceConfig `object`: Describes an Elasticsearch data source configuration.
  * awsRegion **required**
  * endpoint **required**

### FieldLogLevel
* FieldLogLevel `string` (values: NONE, ERROR, ALL)

### FlushApiCacheRequest
* FlushApiCacheRequest `object`: Represents the input of a <code>FlushApiCache</code> operation.

### FlushApiCacheResponse
* FlushApiCacheResponse `object`: Represents the output of a <code>FlushApiCache</code> operation.

### FunctionConfiguration
* FunctionConfiguration `object`: A function is a reusable entity. Multiple functions can be used to compose the resolver logic.
  * dataSourceName
  * description
  * functionArn
  * functionId
  * functionVersion
  * name
  * requestMappingTemplate
  * responseMappingTemplate

### Functions
* Functions `array`
  * items [FunctionConfiguration](#functionconfiguration)

### FunctionsIds
* FunctionsIds `array`
  * items [String](#string)

### GetApiCacheRequest
* GetApiCacheRequest `object`: Represents the input of a <code>GetApiCache</code> operation.

### GetApiCacheResponse
* GetApiCacheResponse `object`: Represents the output of a <code>GetApiCache</code> operation.
  * apiCache
    * apiCachingBehavior
    * atRestEncryptionEnabled
    * status
    * transitEncryptionEnabled
    * ttl
    * type

### GetDataSourceRequest
* GetDataSourceRequest `object`

### GetDataSourceResponse
* GetDataSourceResponse `object`
  * dataSource
    * dataSourceArn
    * description
    * dynamodbConfig
      * awsRegion **required**
      * deltaSyncConfig
        * baseTableTTL
        * deltaSyncTableName
        * deltaSyncTableTTL
      * tableName **required**
      * useCallerCredentials
      * versioned
    * elasticsearchConfig
      * awsRegion **required**
      * endpoint **required**
    * httpConfig
      * authorizationConfig
        * authorizationType **required**
        * awsIamConfig
          * signingRegion
          * signingServiceName
      * endpoint
    * lambdaConfig
      * lambdaFunctionArn **required**
    * name
    * relationalDatabaseConfig
      * rdsHttpEndpointConfig
        * awsRegion
        * awsSecretStoreArn
        * databaseName
        * dbClusterIdentifier
        * schema
      * relationalDatabaseSourceType
    * serviceRoleArn
    * type

### GetFunctionRequest
* GetFunctionRequest `object`

### GetFunctionResponse
* GetFunctionResponse `object`
  * functionConfiguration
    * dataSourceName
    * description
    * functionArn
    * functionId
    * functionVersion
    * name
    * requestMappingTemplate
    * responseMappingTemplate

### GetGraphqlApiRequest
* GetGraphqlApiRequest `object`

### GetGraphqlApiResponse
* GetGraphqlApiResponse `object`
  * graphqlApi
    * tags
    * additionalAuthenticationProviders
      * items [AdditionalAuthenticationProvider](#additionalauthenticationprovider)
    * apiId
    * arn
    * authenticationType
    * logConfig
      * cloudWatchLogsRoleArn **required**
      * excludeVerboseContent
      * fieldLogLevel **required**
    * name
    * openIDConnectConfig
      * authTTL
      * clientId
      * iatTTL
      * issuer **required**
    * uris
    * userPoolConfig
      * appIdClientRegex
      * awsRegion **required**
      * defaultAction **required**
      * userPoolId **required**
    * wafWebAclArn
    * xrayEnabled

### GetIntrospectionSchemaRequest
* GetIntrospectionSchemaRequest `object`

### GetIntrospectionSchemaResponse
* GetIntrospectionSchemaResponse `object`
  * schema

### GetResolverRequest
* GetResolverRequest `object`

### GetResolverResponse
* GetResolverResponse `object`
  * resolver
    * cachingConfig
      * cachingKeys
        * items [String](#string)
      * ttl
    * dataSourceName
    * fieldName
    * kind
    * pipelineConfig
      * functions
        * items [String](#string)
    * requestMappingTemplate
    * resolverArn
    * responseMappingTemplate
    * syncConfig
      * conflictDetection
      * conflictHandler
      * lambdaConflictHandlerConfig
        * lambdaConflictHandlerArn
    * typeName

### GetSchemaCreationStatusRequest
* GetSchemaCreationStatusRequest `object`

### GetSchemaCreationStatusResponse
* GetSchemaCreationStatusResponse `object`
  * details
  * status

### GetTypeRequest
* GetTypeRequest `object`

### GetTypeResponse
* GetTypeResponse `object`
  * type
    * arn
    * definition
    * description
    * format
    * name

### GraphQLSchemaException


### GraphqlApi
* GraphqlApi `object`: Describes a GraphQL API.
  * tags
  * additionalAuthenticationProviders
    * items [AdditionalAuthenticationProvider](#additionalauthenticationprovider)
  * apiId
  * arn
  * authenticationType
  * logConfig
    * cloudWatchLogsRoleArn **required**
    * excludeVerboseContent
    * fieldLogLevel **required**
  * name
  * openIDConnectConfig
    * authTTL
    * clientId
    * iatTTL
    * issuer **required**
  * uris
  * userPoolConfig
    * appIdClientRegex
    * awsRegion **required**
    * defaultAction **required**
    * userPoolId **required**
  * wafWebAclArn
  * xrayEnabled

### GraphqlApis
* GraphqlApis `array`
  * items [GraphqlApi](#graphqlapi)

### HttpDataSourceConfig
* HttpDataSourceConfig `object`: Describes an HTTP data source configuration.
  * authorizationConfig
    * authorizationType **required**
    * awsIamConfig
      * signingRegion
      * signingServiceName
  * endpoint

### InternalFailureException


### LambdaConflictHandlerConfig
* LambdaConflictHandlerConfig `object`: The <code>LambdaConflictHandlerConfig</code> object when configuring LAMBDA as the Conflict Handler.
  * lambdaConflictHandlerArn

### LambdaDataSourceConfig
* LambdaDataSourceConfig `object`: Describes an AWS Lambda data source configuration.
  * lambdaFunctionArn **required**

### LimitExceededException


### ListApiKeysRequest
* ListApiKeysRequest `object`

### ListApiKeysResponse
* ListApiKeysResponse `object`
  * apiKeys
    * items [ApiKey](#apikey)
  * nextToken

### ListDataSourcesRequest
* ListDataSourcesRequest `object`

### ListDataSourcesResponse
* ListDataSourcesResponse `object`
  * dataSources
    * items [DataSource](#datasource)
  * nextToken

### ListFunctionsRequest
* ListFunctionsRequest `object`

### ListFunctionsResponse
* ListFunctionsResponse `object`
  * functions
    * items [FunctionConfiguration](#functionconfiguration)
  * nextToken

### ListGraphqlApisRequest
* ListGraphqlApisRequest `object`

### ListGraphqlApisResponse
* ListGraphqlApisResponse `object`
  * graphqlApis
    * items [GraphqlApi](#graphqlapi)
  * nextToken

### ListResolversByFunctionRequest
* ListResolversByFunctionRequest `object`

### ListResolversByFunctionResponse
* ListResolversByFunctionResponse `object`
  * nextToken
  * resolvers
    * items [Resolver](#resolver)

### ListResolversRequest
* ListResolversRequest `object`

### ListResolversResponse
* ListResolversResponse `object`
  * nextToken
  * resolvers
    * items [Resolver](#resolver)

### ListTagsForResourceRequest
* ListTagsForResourceRequest `object`

### ListTagsForResourceResponse
* ListTagsForResourceResponse `object`
  * tags

### ListTypesRequest
* ListTypesRequest `object`

### ListTypesResponse
* ListTypesResponse `object`
  * nextToken
  * types
    * items [Type](#type)

### LogConfig
* LogConfig `object`: The CloudWatch Logs configuration.
  * cloudWatchLogsRoleArn **required**
  * excludeVerboseContent
  * fieldLogLevel **required**

### Long
* Long `integer`

### MapOfStringToString
* MapOfStringToString `object`

### MappingTemplate
* MappingTemplate `string`

### MaxResults
* MaxResults `integer`

### NotFoundException


### OpenIDConnectConfig
* OpenIDConnectConfig `object`: Describes an OpenID Connect configuration.
  * authTTL
  * clientId
  * iatTTL
  * issuer **required**

### OutputType
* OutputType `string` (values: SDL, JSON)

### PaginationToken
* PaginationToken `string`

### PipelineConfig
* PipelineConfig `object`: The pipeline configuration for a resolver of kind <code>PIPELINE</code>.
  * functions
    * items [String](#string)

### RdsHttpEndpointConfig
* RdsHttpEndpointConfig `object`: The Amazon RDS HTTP endpoint configuration.
  * awsRegion
  * awsSecretStoreArn
  * databaseName
  * dbClusterIdentifier
  * schema

### RelationalDatabaseDataSourceConfig
* RelationalDatabaseDataSourceConfig `object`: Describes a relational database data source configuration.
  * rdsHttpEndpointConfig
    * awsRegion
    * awsSecretStoreArn
    * databaseName
    * dbClusterIdentifier
    * schema
  * relationalDatabaseSourceType

### RelationalDatabaseSourceType
* RelationalDatabaseSourceType `string` (values: RDS_HTTP_ENDPOINT)

### Resolver
* Resolver `object`: Describes a resolver.
  * cachingConfig
    * cachingKeys
      * items [String](#string)
    * ttl
  * dataSourceName
  * fieldName
  * kind
  * pipelineConfig
    * functions
      * items [String](#string)
  * requestMappingTemplate
  * resolverArn
  * responseMappingTemplate
  * syncConfig
    * conflictDetection
    * conflictHandler
    * lambdaConflictHandlerConfig
      * lambdaConflictHandlerArn
  * typeName

### ResolverKind
* ResolverKind `string` (values: UNIT, PIPELINE)

### Resolvers
* Resolvers `array`
  * items [Resolver](#resolver)

### ResourceArn
* ResourceArn `string`

### ResourceName
* ResourceName `string`

### SchemaStatus
* SchemaStatus `string` (values: PROCESSING, ACTIVE, DELETING, FAILED, SUCCESS, NOT_APPLICABLE)

### StartSchemaCreationRequest
* StartSchemaCreationRequest `object`
  * definition **required**

### StartSchemaCreationResponse
* StartSchemaCreationResponse `object`
  * status

### String
* String `string`

### SyncConfig
* SyncConfig `object`: <p>Describes a Sync configuration for a resolver.</p> <p>Contains information on which Conflict Detection as well as Resolution strategy should be performed when the resolver is invoked.</p>
  * conflictDetection
  * conflictHandler
  * lambdaConflictHandlerConfig
    * lambdaConflictHandlerArn

### TagKey
* TagKey `string`: The key for the tag.

### TagKeyList
* TagKeyList `array`
  * items [TagKey](#tagkey)

### TagMap
* TagMap `object`: A map with keys of <code>TagKey</code> objects and values of <code>TagValue</code> objects.

### TagResourceRequest
* TagResourceRequest `object`
  * tags **required**

### TagResourceResponse
* TagResourceResponse `object`

### TagValue
* TagValue `string`: The value for the tag.

### Type
* Type `object`: Describes a type.
  * arn
  * definition
  * description
  * format
  * name

### TypeDefinitionFormat
* TypeDefinitionFormat `string` (values: SDL, JSON)

### TypeList
* TypeList `array`
  * items [Type](#type)

### UnauthorizedException


### UntagResourceRequest
* UntagResourceRequest `object`

### UntagResourceResponse
* UntagResourceResponse `object`

### UpdateApiCacheRequest
* UpdateApiCacheRequest `object`: Represents the input of a <code>UpdateApiCache</code> operation.
  * apiCachingBehavior **required**
  * ttl **required**
  * type **required**

### UpdateApiCacheResponse
* UpdateApiCacheResponse `object`: Represents the output of a <code>UpdateApiCache</code> operation.
  * apiCache
    * apiCachingBehavior
    * atRestEncryptionEnabled
    * status
    * transitEncryptionEnabled
    * ttl
    * type

### UpdateApiKeyRequest
* UpdateApiKeyRequest `object`
  * description
  * expires

### UpdateApiKeyResponse
* UpdateApiKeyResponse `object`
  * apiKey
    * deletes
    * description
    * expires
    * id

### UpdateDataSourceRequest
* UpdateDataSourceRequest `object`
  * description
  * dynamodbConfig
    * awsRegion **required**
    * deltaSyncConfig
      * baseTableTTL
      * deltaSyncTableName
      * deltaSyncTableTTL
    * tableName **required**
    * useCallerCredentials
    * versioned
  * elasticsearchConfig
    * awsRegion **required**
    * endpoint **required**
  * httpConfig
    * authorizationConfig
      * authorizationType **required**
      * awsIamConfig
        * signingRegion
        * signingServiceName
    * endpoint
  * lambdaConfig
    * lambdaFunctionArn **required**
  * relationalDatabaseConfig
    * rdsHttpEndpointConfig
      * awsRegion
      * awsSecretStoreArn
      * databaseName
      * dbClusterIdentifier
      * schema
    * relationalDatabaseSourceType
  * serviceRoleArn
  * type **required**

### UpdateDataSourceResponse
* UpdateDataSourceResponse `object`
  * dataSource
    * dataSourceArn
    * description
    * dynamodbConfig
      * awsRegion **required**
      * deltaSyncConfig
        * baseTableTTL
        * deltaSyncTableName
        * deltaSyncTableTTL
      * tableName **required**
      * useCallerCredentials
      * versioned
    * elasticsearchConfig
      * awsRegion **required**
      * endpoint **required**
    * httpConfig
      * authorizationConfig
        * authorizationType **required**
        * awsIamConfig
          * signingRegion
          * signingServiceName
      * endpoint
    * lambdaConfig
      * lambdaFunctionArn **required**
    * name
    * relationalDatabaseConfig
      * rdsHttpEndpointConfig
        * awsRegion
        * awsSecretStoreArn
        * databaseName
        * dbClusterIdentifier
        * schema
      * relationalDatabaseSourceType
    * serviceRoleArn
    * type

### UpdateFunctionRequest
* UpdateFunctionRequest `object`
  * dataSourceName **required**
  * description
  * functionVersion **required**
  * name **required**
  * requestMappingTemplate
  * responseMappingTemplate

### UpdateFunctionResponse
* UpdateFunctionResponse `object`
  * functionConfiguration
    * dataSourceName
    * description
    * functionArn
    * functionId
    * functionVersion
    * name
    * requestMappingTemplate
    * responseMappingTemplate

### UpdateGraphqlApiRequest
* UpdateGraphqlApiRequest `object`
  * additionalAuthenticationProviders
    * items [AdditionalAuthenticationProvider](#additionalauthenticationprovider)
  * authenticationType
  * logConfig
    * cloudWatchLogsRoleArn **required**
    * excludeVerboseContent
    * fieldLogLevel **required**
  * name **required**
  * openIDConnectConfig
    * authTTL
    * clientId
    * iatTTL
    * issuer **required**
  * userPoolConfig
    * appIdClientRegex
    * awsRegion **required**
    * defaultAction **required**
    * userPoolId **required**
  * xrayEnabled

### UpdateGraphqlApiResponse
* UpdateGraphqlApiResponse `object`
  * graphqlApi
    * tags
    * additionalAuthenticationProviders
      * items [AdditionalAuthenticationProvider](#additionalauthenticationprovider)
    * apiId
    * arn
    * authenticationType
    * logConfig
      * cloudWatchLogsRoleArn **required**
      * excludeVerboseContent
      * fieldLogLevel **required**
    * name
    * openIDConnectConfig
      * authTTL
      * clientId
      * iatTTL
      * issuer **required**
    * uris
    * userPoolConfig
      * appIdClientRegex
      * awsRegion **required**
      * defaultAction **required**
      * userPoolId **required**
    * wafWebAclArn
    * xrayEnabled

### UpdateResolverRequest
* UpdateResolverRequest `object`
  * cachingConfig
    * cachingKeys
      * items [String](#string)
    * ttl
  * dataSourceName
  * kind
  * pipelineConfig
    * functions
      * items [String](#string)
  * requestMappingTemplate
  * responseMappingTemplate
  * syncConfig
    * conflictDetection
    * conflictHandler
    * lambdaConflictHandlerConfig
      * lambdaConflictHandlerArn

### UpdateResolverResponse
* UpdateResolverResponse `object`
  * resolver
    * cachingConfig
      * cachingKeys
        * items [String](#string)
      * ttl
    * dataSourceName
    * fieldName
    * kind
    * pipelineConfig
      * functions
        * items [String](#string)
    * requestMappingTemplate
    * resolverArn
    * responseMappingTemplate
    * syncConfig
      * conflictDetection
      * conflictHandler
      * lambdaConflictHandlerConfig
        * lambdaConflictHandlerArn
    * typeName

### UpdateTypeRequest
* UpdateTypeRequest `object`
  * definition
  * format **required**

### UpdateTypeResponse
* UpdateTypeResponse `object`
  * type
    * arn
    * definition
    * description
    * format
    * name

### UserPoolConfig
* UserPoolConfig `object`: Describes an Amazon Cognito user pool configuration.
  * appIdClientRegex
  * awsRegion **required**
  * defaultAction **required**
  * userPoolId **required**


