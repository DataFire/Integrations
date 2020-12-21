# @datafire/amazonaws_appflow

Client library for Amazon Appflow

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_appflow
```
```js
let amazonaws_appflow = require('@datafire/amazonaws_appflow').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

.then(data => {
  console.log(data);
});
```

## Description

<p>Welcome to the Amazon AppFlow API reference. This guide is for developers who need detailed information about the Amazon AppFlow API operations, data types, and errors. </p> <p>Amazon AppFlow is a fully managed integration service that enables you to securely transfer data between software as a service (SaaS) applications like Salesforce, Marketo, Slack, and ServiceNow, and AWS services like Amazon S3 and Amazon Redshift. </p> <p>Use the following links to get started on the Amazon AppFlow API:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/appflow/1.0/APIReference/API_Operations.html">Actions</a>: An alphabetical list of all Amazon AppFlow API operations.</p> </li> <li> <p> <a href="https://docs.aws.amazon.com/appflow/1.0/APIReference/API_Types.html">Data types</a>: An alphabetical list of all Amazon AppFlow data types.</p> </li> <li> <p> <a href="https://docs.aws.amazon.com/appflow/1.0/APIReference/CommonParameters.html">Common parameters</a>: Parameters that all Query operations can use.</p> </li> <li> <p> <a href="https://docs.aws.amazon.com/appflow/1.0/APIReference/CommonErrors.html">Common errors</a>: Client and server errors that all operations can return.</p> </li> </ul> <p>If you're new to Amazon AppFlow, we recommend that you review the <a href="https://docs.aws.amazon.com/appflow/latest/userguide/what-is-appflow.html">Amazon AppFlow User Guide</a>.</p> <p>Amazon AppFlow API users can use vendor-specific mechanisms for OAuth, and include applicable OAuth attributes (such as <code>auth-code</code> and <code>redirecturi</code>) with the connector-specific <code>ConnectorProfileProperties</code> when creating a new connector profile using Amazon AppFlow API operations. For example, Salesforce users can refer to the <a href="https://help.salesforce.com/articleView?id=remoteaccess_authenticate.htm"> <i>Authorize Apps with OAuth</i> </a> documentation.</p>

## Actions

### CreateConnectorProfile



```js
amazonaws_appflow.CreateConnectorProfile({
  "connectorProfileName": "",
  "connectorType": "",
  "connectionMode": "",
  "connectorProfileConfig": {}
}, context)
```

#### Input
* input `object`
  * connectionMode **required** `string` (values: Public, Private):  Indicates the connection mode and specifies whether it is public or private. Private flows use AWS PrivateLink to route data over AWS infrastructure without exposing it to the public internet. 
  * connectorProfileConfig **required** `object`:  Defines the connector-specific configuration and credentials for the connector profile. 
    * connectorProfileCredentials
      * Amplitude
        * apiKey **required**
        * secretKey **required**
      * Datadog
        * apiKey **required**
        * applicationKey **required**
      * Dynatrace
        * apiToken **required**
      * GoogleAnalytics
        * accessToken
        * clientId **required**
        * clientSecret **required**
        * oAuthRequest
          * authCode
          * redirectUri
        * refreshToken
      * InforNexus
        * accessKeyId **required**
        * datakey **required**
        * secretAccessKey **required**
        * userId **required**
      * Marketo
        * accessToken
        * clientId **required**
        * clientSecret **required**
        * oAuthRequest
          * authCode
          * redirectUri
      * Redshift
        * password **required**
        * username **required**
      * Salesforce
        * accessToken
        * clientCredentialsArn
        * oAuthRequest
          * authCode
          * redirectUri
        * refreshToken
      * ServiceNow
        * password **required**
        * username **required**
      * Singular
        * apiKey **required**
      * Slack
        * accessToken
        * clientId **required**
        * clientSecret **required**
        * oAuthRequest
          * authCode
          * redirectUri
      * Snowflake
        * password **required**
        * username **required**
      * Trendmicro
        * apiSecretKey **required**
      * Veeva
        * password **required**
        * username **required**
      * Zendesk
        * accessToken
        * clientId **required**
        * clientSecret **required**
        * oAuthRequest
          * authCode
          * redirectUri
    * connectorProfileProperties
      * Amplitude
      * Datadog
        * instanceUrl **required**
      * Dynatrace
        * instanceUrl **required**
      * GoogleAnalytics
      * InforNexus
        * instanceUrl **required**
      * Marketo
        * instanceUrl **required**
      * Redshift
        * bucketName **required**
        * bucketPrefix
        * databaseUrl **required**
        * roleArn **required**
      * Salesforce
        * instanceUrl
        * isSandboxEnvironment
      * ServiceNow
        * instanceUrl **required**
      * Singular
      * Slack
        * instanceUrl **required**
      * Snowflake
        * accountName
        * bucketName **required**
        * bucketPrefix
        * privateLinkServiceName
        * region
        * stage **required**
        * warehouse **required**
      * Trendmicro
      * Veeva
        * instanceUrl **required**
      * Zendesk
        * instanceUrl **required**
  * connectorProfileName **required** `string`:  The name of the connector profile. The name is unique for each <code>ConnectorProfile</code> in your AWS account. 
  * connectorType **required** `string` (values: Salesforce, Singular, Slack, Redshift, S3, Marketo, Googleanalytics, Zendesk, Servicenow, Datadog, Trendmicro, Snowflake, Dynatrace, Infornexus, Amplitude, Veeva, EventBridge, Upsolver):  The type of connector, such as Salesforce, Amplitude, and so on. 
  * kmsArn `string`:  The ARN (Amazon Resource Name) of the Key Management Service (KMS) key you provide for encryption. This is required if you do not want to use the Amazon AppFlow-managed KMS key. If you don't provide anything here, Amazon AppFlow uses the Amazon AppFlow-managed KMS key. 

#### Output
* output [CreateConnectorProfileResponse](#createconnectorprofileresponse)

### CreateFlow



```js
amazonaws_appflow.CreateFlow({
  "flowName": "",
  "triggerConfig": {},
  "sourceFlowConfig": {},
  "destinationFlowConfigList": [],
  "tasks": []
}, context)
```

#### Input
* input `object`
  * tags `object`:  The tags used to organize, track, or control access for your flow. 
  * description `string`:  A description of the flow you want to create. 
  * destinationFlowConfigList **required** `array`:  The configuration that controls how Amazon AppFlow places data in the destination connector. 
    * items [DestinationFlowConfig](#destinationflowconfig)
  * flowName **required** `string`:  The specified name of the flow. Spaces are not allowed. Use underscores (_) or hyphens (-) only. 
  * kmsArn `string`:  The ARN (Amazon Resource Name) of the Key Management Service (KMS) key you provide for encryption. This is required if you do not want to use the Amazon AppFlow-managed KMS key. If you don't provide anything here, Amazon AppFlow uses the Amazon AppFlow-managed KMS key. 
  * sourceFlowConfig **required** `object`:  Contains information about the configuration of the source connector used in the flow. 
    * connectorProfileName
    * connectorType
    * incrementalPullConfig
      * datetimeTypeFieldName
    * sourceConnectorProperties
      * Amplitude
        * object **required**
      * Datadog
        * object **required**
      * Dynatrace
        * object **required**
      * GoogleAnalytics
        * object **required**
      * InforNexus
        * object **required**
      * Marketo
        * object **required**
      * S3
        * bucketName **required**
        * bucketPrefix
      * Salesforce
        * enableDynamicFieldUpdate
        * includeDeletedRecords
        * object **required**
      * ServiceNow
        * object **required**
      * Singular
        * object **required**
      * Slack
        * object **required**
      * Trendmicro
        * object **required**
      * Veeva
        * object **required**
      * Zendesk
        * object **required**
  * tasks **required** `array`:  A list of tasks that Amazon AppFlow performs while transferring the data in the flow run. 
    * items [Task](#task)
  * triggerConfig **required** `object`:  The trigger settings that determine how and when Amazon AppFlow runs the specified flow. 
    * triggerProperties
      * Scheduled
        * dataPullMode
        * scheduleEndTime
        * scheduleExpression **required**
        * scheduleStartTime
        * timezone
    * triggerType

#### Output
* output [CreateFlowResponse](#createflowresponse)

### DeleteConnectorProfile



```js
amazonaws_appflow.DeleteConnectorProfile({
  "connectorProfileName": ""
}, context)
```

#### Input
* input `object`
  * connectorProfileName **required** `string`:  The name of the connector profile. The name is unique for each <code>ConnectorProfile</code> in your account. 
  * forceDelete `boolean`:  Indicates whether Amazon AppFlow should delete the profile, even if it is currently in use in one or more flows. 

#### Output
* output [DeleteConnectorProfileResponse](#deleteconnectorprofileresponse)

### DeleteFlow



```js
amazonaws_appflow.DeleteFlow({
  "flowName": ""
}, context)
```

#### Input
* input `object`
  * flowName **required** `string`:  The specified name of the flow. Spaces are not allowed. Use underscores (_) or hyphens (-) only. 
  * forceDelete `boolean`:  Indicates whether Amazon AppFlow should delete the flow, even if it is currently in use. 

#### Output
* output [DeleteFlowResponse](#deleteflowresponse)

### DescribeConnectorEntity



```js
amazonaws_appflow.DescribeConnectorEntity({
  "connectorEntityName": ""
}, context)
```

#### Input
* input `object`
  * connectorEntityName **required** `string`:  The entity name for that connector. 
  * connectorProfileName `string`:  The name of the connector profile. The name is unique for each <code>ConnectorProfile</code> in the AWS account. 
  * connectorType `string` (values: Salesforce, Singular, Slack, Redshift, S3, Marketo, Googleanalytics, Zendesk, Servicenow, Datadog, Trendmicro, Snowflake, Dynatrace, Infornexus, Amplitude, Veeva, EventBridge, Upsolver):  The type of connector application, such as Salesforce, Amplitude, and so on. 

#### Output
* output [DescribeConnectorEntityResponse](#describeconnectorentityresponse)

### DescribeConnectorProfiles



```js
amazonaws_appflow.DescribeConnectorProfiles({}, context)
```

#### Input
* input `object`
  * maxResults `string`
  * nextToken `string`
  * connectorProfileNames `array`:  The name of the connector profile. The name is unique for each <code>ConnectorProfile</code> in the AWS account. 
    * items [ConnectorProfileName](#connectorprofilename)
  * connectorType `string` (values: Salesforce, Singular, Slack, Redshift, S3, Marketo, Googleanalytics, Zendesk, Servicenow, Datadog, Trendmicro, Snowflake, Dynatrace, Infornexus, Amplitude, Veeva, EventBridge, Upsolver):  The type of connector, such as Salesforce, Amplitude, and so on. 
  * maxResults `integer`:  Specifies the maximum number of items that should be returned in the result set. The default for <code>maxResults</code> is 20 (for all paginated API operations). 
  * nextToken `string`:  The pagination token for the next page of data. 

#### Output
* output [DescribeConnectorProfilesResponse](#describeconnectorprofilesresponse)

### DescribeConnectors



```js
amazonaws_appflow.DescribeConnectors({}, context)
```

#### Input
* input `object`
  * nextToken `string`
  * connectorTypes `array`:  The type of connector, such as Salesforce, Amplitude, and so on. 
    * items [ConnectorType](#connectortype)
  * nextToken `string`:  The pagination token for the next page of data. 

#### Output
* output [DescribeConnectorsResponse](#describeconnectorsresponse)

### DescribeFlow



```js
amazonaws_appflow.DescribeFlow({
  "flowName": ""
}, context)
```

#### Input
* input `object`
  * flowName **required** `string`:  The specified name of the flow. Spaces are not allowed. Use underscores (_) or hyphens (-) only. 

#### Output
* output [DescribeFlowResponse](#describeflowresponse)

### DescribeFlowExecutionRecords



```js
amazonaws_appflow.DescribeFlowExecutionRecords({
  "flowName": ""
}, context)
```

#### Input
* input `object`
  * maxResults `string`
  * nextToken `string`
  * flowName **required** `string`:  The specified name of the flow. Spaces are not allowed. Use underscores (_) or hyphens (-) only. 
  * maxResults `integer`:  Specifies the maximum number of items that should be returned in the result set. The default for <code>maxResults</code> is 20 (for all paginated API operations). 
  * nextToken `string`:  The pagination token for the next page of data. 

#### Output
* output [DescribeFlowExecutionRecordsResponse](#describeflowexecutionrecordsresponse)

### ListConnectorEntities



```js
amazonaws_appflow.ListConnectorEntities({}, context)
```

#### Input
* input `object`
  * connectorProfileName `string`:  The name of the connector profile. The name is unique for each <code>ConnectorProfile</code> in the AWS account, and is used to query the downstream connector. 
  * connectorType `string` (values: Salesforce, Singular, Slack, Redshift, S3, Marketo, Googleanalytics, Zendesk, Servicenow, Datadog, Trendmicro, Snowflake, Dynatrace, Infornexus, Amplitude, Veeva, EventBridge, Upsolver):  The type of connector, such as Salesforce, Amplitude, and so on. 
  * entitiesPath `string`:  This optional parameter is specific to connector implementation. Some connectors support multiple levels or categories of entities. You can find out the list of roots for such providers by sending a request without the <code>entitiesPath</code> parameter. If the connector supports entities at different roots, this initial request returns the list of roots. Otherwise, this request returns all entities supported by the provider. 

#### Output
* output [ListConnectorEntitiesResponse](#listconnectorentitiesresponse)

### ListFlows



```js
amazonaws_appflow.ListFlows({}, context)
```

#### Input
* input `object`
  * maxResults `string`
  * nextToken `string`
  * maxResults `integer`:  Specifies the maximum number of items that should be returned in the result set. 
  * nextToken `string`:  The pagination token for next page of data. 

#### Output
* output [ListFlowsResponse](#listflowsresponse)

### StartFlow



```js
amazonaws_appflow.StartFlow({
  "flowName": ""
}, context)
```

#### Input
* input `object`
  * flowName **required** `string`:  The specified name of the flow. Spaces are not allowed. Use underscores (_) or hyphens (-) only. 

#### Output
* output [StartFlowResponse](#startflowresponse)

### StopFlow



```js
amazonaws_appflow.StopFlow({
  "flowName": ""
}, context)
```

#### Input
* input `object`
  * flowName **required** `string`:  The specified name of the flow. Spaces are not allowed. Use underscores (_) or hyphens (-) only. 

#### Output
* output [StopFlowResponse](#stopflowresponse)

### ListTagsForResource



```js
amazonaws_appflow.ListTagsForResource({
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
amazonaws_appflow.TagResource({
  "resourceArn": "",
  "tags": {}
}, context)
```

#### Input
* input `object`
  * resourceArn **required** `string`
  * tags **required** `object`:  The tags used to organize, track, or control access for your flow. 

#### Output
* output [TagResourceResponse](#tagresourceresponse)

### UntagResource



```js
amazonaws_appflow.UntagResource({
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

### UpdateConnectorProfile



```js
amazonaws_appflow.UpdateConnectorProfile({
  "connectorProfileName": "",
  "connectionMode": "",
  "connectorProfileConfig": {}
}, context)
```

#### Input
* input `object`
  * connectionMode **required** `string` (values: Public, Private):  Indicates the connection mode and if it is public or private. 
  * connectorProfileConfig **required** `object`:  Defines the connector-specific configuration and credentials for the connector profile. 
    * connectorProfileCredentials
      * Amplitude
        * apiKey **required**
        * secretKey **required**
      * Datadog
        * apiKey **required**
        * applicationKey **required**
      * Dynatrace
        * apiToken **required**
      * GoogleAnalytics
        * accessToken
        * clientId **required**
        * clientSecret **required**
        * oAuthRequest
          * authCode
          * redirectUri
        * refreshToken
      * InforNexus
        * accessKeyId **required**
        * datakey **required**
        * secretAccessKey **required**
        * userId **required**
      * Marketo
        * accessToken
        * clientId **required**
        * clientSecret **required**
        * oAuthRequest
          * authCode
          * redirectUri
      * Redshift
        * password **required**
        * username **required**
      * Salesforce
        * accessToken
        * clientCredentialsArn
        * oAuthRequest
          * authCode
          * redirectUri
        * refreshToken
      * ServiceNow
        * password **required**
        * username **required**
      * Singular
        * apiKey **required**
      * Slack
        * accessToken
        * clientId **required**
        * clientSecret **required**
        * oAuthRequest
          * authCode
          * redirectUri
      * Snowflake
        * password **required**
        * username **required**
      * Trendmicro
        * apiSecretKey **required**
      * Veeva
        * password **required**
        * username **required**
      * Zendesk
        * accessToken
        * clientId **required**
        * clientSecret **required**
        * oAuthRequest
          * authCode
          * redirectUri
    * connectorProfileProperties
      * Amplitude
      * Datadog
        * instanceUrl **required**
      * Dynatrace
        * instanceUrl **required**
      * GoogleAnalytics
      * InforNexus
        * instanceUrl **required**
      * Marketo
        * instanceUrl **required**
      * Redshift
        * bucketName **required**
        * bucketPrefix
        * databaseUrl **required**
        * roleArn **required**
      * Salesforce
        * instanceUrl
        * isSandboxEnvironment
      * ServiceNow
        * instanceUrl **required**
      * Singular
      * Slack
        * instanceUrl **required**
      * Snowflake
        * accountName
        * bucketName **required**
        * bucketPrefix
        * privateLinkServiceName
        * region
        * stage **required**
        * warehouse **required**
      * Trendmicro
      * Veeva
        * instanceUrl **required**
      * Zendesk
        * instanceUrl **required**
  * connectorProfileName **required** `string`:  The name of the connector profile and is unique for each <code>ConnectorProfile</code> in the AWS Account. 

#### Output
* output [UpdateConnectorProfileResponse](#updateconnectorprofileresponse)

### UpdateFlow



```js
amazonaws_appflow.UpdateFlow({
  "flowName": "",
  "triggerConfig": {},
  "destinationFlowConfigList": [],
  "tasks": []
}, context)
```

#### Input
* input `object`
  * description `string`:  A description of the flow. 
  * destinationFlowConfigList **required** `array`:  The configuration that controls how Amazon AppFlow transfers data to the destination connector. 
    * items [DestinationFlowConfig](#destinationflowconfig)
  * flowName **required** `string`:  The specified name of the flow. Spaces are not allowed. Use underscores (_) or hyphens (-) only. 
  * sourceFlowConfig `object`:  Contains information about the configuration of the source connector used in the flow. 
    * connectorProfileName
    * connectorType
    * incrementalPullConfig
      * datetimeTypeFieldName
    * sourceConnectorProperties
      * Amplitude
        * object **required**
      * Datadog
        * object **required**
      * Dynatrace
        * object **required**
      * GoogleAnalytics
        * object **required**
      * InforNexus
        * object **required**
      * Marketo
        * object **required**
      * S3
        * bucketName **required**
        * bucketPrefix
      * Salesforce
        * enableDynamicFieldUpdate
        * includeDeletedRecords
        * object **required**
      * ServiceNow
        * object **required**
      * Singular
        * object **required**
      * Slack
        * object **required**
      * Trendmicro
        * object **required**
      * Veeva
        * object **required**
      * Zendesk
        * object **required**
  * tasks **required** `array`:  A list of tasks that Amazon AppFlow performs while transferring the data in the flow run. 
    * items [Task](#task)
  * triggerConfig **required** `object`:  The trigger settings that determine how and when Amazon AppFlow runs the specified flow. 
    * triggerProperties
      * Scheduled
        * dataPullMode
        * scheduleEndTime
        * scheduleExpression **required**
        * scheduleStartTime
        * timezone
    * triggerType

#### Output
* output [UpdateFlowResponse](#updateflowresponse)



## Definitions

### ARN
* ARN `string`

### AccessKeyId
* AccessKeyId `string`

### AccessToken
* AccessToken `string`

### AccountName
* AccountName `string`

### AggregationConfig
* AggregationConfig `object`:  The aggregation settings that you can use to customize the output format of your flow data. 
  * aggregationType

### AggregationType
* AggregationType `string` (values: None, SingleFile)

### AmplitudeConnectorOperator
* AmplitudeConnectorOperator `string` (values: BETWEEN)

### AmplitudeConnectorProfileCredentials
* AmplitudeConnectorProfileCredentials `object`:  The connector-specific credentials required when using Amplitude. 
  * apiKey **required**
  * secretKey **required**

### AmplitudeConnectorProfileProperties
* AmplitudeConnectorProfileProperties `object`:  The connector-specific profile properties required when using Amplitude. 

### AmplitudeMetadata
* AmplitudeMetadata `object`:  The connector metadata specific to Amplitude. 

### AmplitudeSourceProperties
* AmplitudeSourceProperties `object`:  The properties that are applied when Amplitude is being used as a source. 
  * object **required**

### ApiKey
* ApiKey `string`

### ApiSecretKey
* ApiSecretKey `string`

### ApiToken
* ApiToken `string`

### ApplicationKey
* ApplicationKey `string`

### AuthCode
* AuthCode `string`

### Boolean
* Boolean `boolean`

### BucketName
* BucketName `string`

### BucketPrefix
* BucketPrefix `string`

### ClientCredentialsArn
* ClientCredentialsArn `string`

### ClientId
* ClientId `string`

### ClientSecret
* ClientSecret `string`

### ConflictException


### ConnectionMode
* ConnectionMode `string` (values: Public, Private)

### ConnectorAuthenticationException


### ConnectorConfiguration
* ConnectorConfiguration `object`:  The configuration settings related to a given connector. 
  * canUseAsDestination
  * canUseAsSource
  * connectorMetadata
    * Amplitude
    * Datadog
    * Dynatrace
    * EventBridge
    * GoogleAnalytics
      * oAuthScopes
        * items [OAuthScope](#oauthscope)
    * InforNexus
    * Marketo
    * Redshift
    * S3
    * Salesforce
      * oAuthScopes
        * items [OAuthScope](#oauthscope)
    * ServiceNow
    * Singular
    * Slack
      * oAuthScopes
        * items [OAuthScope](#oauthscope)
    * Snowflake
      * supportedRegions
        * items [Region](#region)
    * Trendmicro
    * Upsolver
    * Veeva
    * Zendesk
      * oAuthScopes
        * items [OAuthScope](#oauthscope)
  * isPrivateLinkEnabled
  * isPrivateLinkEndpointUrlRequired
  * supportedDestinationConnectors
    * items [ConnectorType](#connectortype)
  * supportedSchedulingFrequencies
    * items [ScheduleFrequencyType](#schedulefrequencytype)
  * supportedTriggerTypes
    * items [TriggerType](#triggertype)

### ConnectorConfigurationsMap
* ConnectorConfigurationsMap `object`

### ConnectorEntity
* ConnectorEntity `object`:  The high-level entity that can be queried in Amazon AppFlow. For example, a Salesforce entity might be an <i>Account</i> or <i>Opportunity</i>, whereas a ServiceNow entity might be an <i>Incident</i>. 
  * hasNestedEntities
  * label
  * name **required**

### ConnectorEntityField
* ConnectorEntityField `object`:  Describes the data model of a connector field. For example, for an <i>account</i> entity, the fields would be <i>account name</i>, <i>account ID</i>, and so on. 
  * description
  * destinationProperties
    * isCreatable
    * isNullable
    * isUpdatable
    * isUpsertable
    * supportedWriteOperations
      * items [WriteOperationType](#writeoperationtype)
  * identifier **required**
  * label
  * sourceProperties
    * isQueryable
    * isRetrievable
  * supportedFieldTypeDetails
    * v1 **required**
      * fieldType **required**
      * filterOperators **required**
        * items [Operator](#operator)
      * supportedValues
        * items [Value](#value)

### ConnectorEntityFieldList
* ConnectorEntityFieldList `array`
  * items [ConnectorEntityField](#connectorentityfield)

### ConnectorEntityList
* ConnectorEntityList `array`
  * items [ConnectorEntity](#connectorentity)

### ConnectorEntityMap
* ConnectorEntityMap `object`

### ConnectorMetadata
* ConnectorMetadata `object`:  A structure to specify connector-specific metadata such as <code>oAuthScopes</code>, <code>supportedRegions</code>, <code>privateLinkServiceUrl</code>, and so on. 
  * Amplitude
  * Datadog
  * Dynatrace
  * EventBridge
  * GoogleAnalytics
    * oAuthScopes
      * items [OAuthScope](#oauthscope)
  * InforNexus
  * Marketo
  * Redshift
  * S3
  * Salesforce
    * oAuthScopes
      * items [OAuthScope](#oauthscope)
  * ServiceNow
  * Singular
  * Slack
    * oAuthScopes
      * items [OAuthScope](#oauthscope)
  * Snowflake
    * supportedRegions
      * items [Region](#region)
  * Trendmicro
  * Upsolver
  * Veeva
  * Zendesk
    * oAuthScopes
      * items [OAuthScope](#oauthscope)

### ConnectorOAuthRequest
* ConnectorOAuthRequest `object`:  Used by select connectors for which the OAuth workflow is supported, such as Salesforce, Google Analytics, Marketo, Zendesk, and Slack. 
  * authCode
  * redirectUri

### ConnectorOperator
* ConnectorOperator `object`:  The operation to be performed on the provided source fields. 
  * Amplitude
  * Datadog
  * Dynatrace
  * GoogleAnalytics
  * InforNexus
  * Marketo
  * S3
  * Salesforce
  * ServiceNow
  * Singular
  * Slack
  * Trendmicro
  * Veeva
  * Zendesk

### ConnectorProfile
* ConnectorProfile `object`:  Describes an instance of a connector. This includes the provided name, credentials ARN, connection-mode, and so on. To keep the API intuitive and extensible, the fields that are common to all types of connector profiles are explicitly specified at the top level. The rest of the connector-specific properties are available via the <code>connectorProfileProperties</code> field. 
  * connectionMode
  * connectorProfileArn
  * connectorProfileName
  * connectorProfileProperties
    * Amplitude
    * Datadog
      * instanceUrl **required**
    * Dynatrace
      * instanceUrl **required**
    * GoogleAnalytics
    * InforNexus
      * instanceUrl **required**
    * Marketo
      * instanceUrl **required**
    * Redshift
      * bucketName **required**
      * bucketPrefix
      * databaseUrl **required**
      * roleArn **required**
    * Salesforce
      * instanceUrl
      * isSandboxEnvironment
    * ServiceNow
      * instanceUrl **required**
    * Singular
    * Slack
      * instanceUrl **required**
    * Snowflake
      * accountName
      * bucketName **required**
      * bucketPrefix
      * privateLinkServiceName
      * region
      * stage **required**
      * warehouse **required**
    * Trendmicro
    * Veeva
      * instanceUrl **required**
    * Zendesk
      * instanceUrl **required**
  * connectorType
  * createdAt
  * credentialsArn
  * lastUpdatedAt

### ConnectorProfileArn
* ConnectorProfileArn `string`

### ConnectorProfileConfig
* ConnectorProfileConfig `object`:  Defines the connector-specific configuration and credentials for the connector profile. 
  * connectorProfileCredentials **required**
    * Amplitude
      * apiKey **required**
      * secretKey **required**
    * Datadog
      * apiKey **required**
      * applicationKey **required**
    * Dynatrace
      * apiToken **required**
    * GoogleAnalytics
      * accessToken
      * clientId **required**
      * clientSecret **required**
      * oAuthRequest
        * authCode
        * redirectUri
      * refreshToken
    * InforNexus
      * accessKeyId **required**
      * datakey **required**
      * secretAccessKey **required**
      * userId **required**
    * Marketo
      * accessToken
      * clientId **required**
      * clientSecret **required**
      * oAuthRequest
        * authCode
        * redirectUri
    * Redshift
      * password **required**
      * username **required**
    * Salesforce
      * accessToken
      * clientCredentialsArn
      * oAuthRequest
        * authCode
        * redirectUri
      * refreshToken
    * ServiceNow
      * password **required**
      * username **required**
    * Singular
      * apiKey **required**
    * Slack
      * accessToken
      * clientId **required**
      * clientSecret **required**
      * oAuthRequest
        * authCode
        * redirectUri
    * Snowflake
      * password **required**
      * username **required**
    * Trendmicro
      * apiSecretKey **required**
    * Veeva
      * password **required**
      * username **required**
    * Zendesk
      * accessToken
      * clientId **required**
      * clientSecret **required**
      * oAuthRequest
        * authCode
        * redirectUri
  * connectorProfileProperties **required**
    * Amplitude
    * Datadog
      * instanceUrl **required**
    * Dynatrace
      * instanceUrl **required**
    * GoogleAnalytics
    * InforNexus
      * instanceUrl **required**
    * Marketo
      * instanceUrl **required**
    * Redshift
      * bucketName **required**
      * bucketPrefix
      * databaseUrl **required**
      * roleArn **required**
    * Salesforce
      * instanceUrl
      * isSandboxEnvironment
    * ServiceNow
      * instanceUrl **required**
    * Singular
    * Slack
      * instanceUrl **required**
    * Snowflake
      * accountName
      * bucketName **required**
      * bucketPrefix
      * privateLinkServiceName
      * region
      * stage **required**
      * warehouse **required**
    * Trendmicro
    * Veeva
      * instanceUrl **required**
    * Zendesk
      * instanceUrl **required**

### ConnectorProfileCredentials
* ConnectorProfileCredentials `object`:  The connector-specific credentials required by a connector. 
  * Amplitude
    * apiKey **required**
    * secretKey **required**
  * Datadog
    * apiKey **required**
    * applicationKey **required**
  * Dynatrace
    * apiToken **required**
  * GoogleAnalytics
    * accessToken
    * clientId **required**
    * clientSecret **required**
    * oAuthRequest
      * authCode
      * redirectUri
    * refreshToken
  * InforNexus
    * accessKeyId **required**
    * datakey **required**
    * secretAccessKey **required**
    * userId **required**
  * Marketo
    * accessToken
    * clientId **required**
    * clientSecret **required**
    * oAuthRequest
      * authCode
      * redirectUri
  * Redshift
    * password **required**
    * username **required**
  * Salesforce
    * accessToken
    * clientCredentialsArn
    * oAuthRequest
      * authCode
      * redirectUri
    * refreshToken
  * ServiceNow
    * password **required**
    * username **required**
  * Singular
    * apiKey **required**
  * Slack
    * accessToken
    * clientId **required**
    * clientSecret **required**
    * oAuthRequest
      * authCode
      * redirectUri
  * Snowflake
    * password **required**
    * username **required**
  * Trendmicro
    * apiSecretKey **required**
  * Veeva
    * password **required**
    * username **required**
  * Zendesk
    * accessToken
    * clientId **required**
    * clientSecret **required**
    * oAuthRequest
      * authCode
      * redirectUri

### ConnectorProfileDetailList
* ConnectorProfileDetailList `array`
  * items [ConnectorProfile](#connectorprofile)

### ConnectorProfileName
* ConnectorProfileName `string`

### ConnectorProfileNameList
* ConnectorProfileNameList `array`
  * items [ConnectorProfileName](#connectorprofilename)

### ConnectorProfileProperties
* ConnectorProfileProperties `object`:  The connector-specific profile properties required by each connector. 
  * Amplitude
  * Datadog
    * instanceUrl **required**
  * Dynatrace
    * instanceUrl **required**
  * GoogleAnalytics
  * InforNexus
    * instanceUrl **required**
  * Marketo
    * instanceUrl **required**
  * Redshift
    * bucketName **required**
    * bucketPrefix
    * databaseUrl **required**
    * roleArn **required**
  * Salesforce
    * instanceUrl
    * isSandboxEnvironment
  * ServiceNow
    * instanceUrl **required**
  * Singular
  * Slack
    * instanceUrl **required**
  * Snowflake
    * accountName
    * bucketName **required**
    * bucketPrefix
    * privateLinkServiceName
    * region
    * stage **required**
    * warehouse **required**
  * Trendmicro
  * Veeva
    * instanceUrl **required**
  * Zendesk
    * instanceUrl **required**

### ConnectorServerException


### ConnectorType
* ConnectorType `string` (values: Salesforce, Singular, Slack, Redshift, S3, Marketo, Googleanalytics, Zendesk, Servicenow, Datadog, Trendmicro, Snowflake, Dynatrace, Infornexus, Amplitude, Veeva, EventBridge, Upsolver)

### ConnectorTypeList
* ConnectorTypeList `array`
  * items [ConnectorType](#connectortype)

### CreateConnectorProfileRequest
* CreateConnectorProfileRequest `object`
  * connectionMode **required**
  * connectorProfileConfig **required**
    * connectorProfileCredentials **required**
      * Amplitude
        * apiKey **required**
        * secretKey **required**
      * Datadog
        * apiKey **required**
        * applicationKey **required**
      * Dynatrace
        * apiToken **required**
      * GoogleAnalytics
        * accessToken
        * clientId **required**
        * clientSecret **required**
        * oAuthRequest
          * authCode
          * redirectUri
        * refreshToken
      * InforNexus
        * accessKeyId **required**
        * datakey **required**
        * secretAccessKey **required**
        * userId **required**
      * Marketo
        * accessToken
        * clientId **required**
        * clientSecret **required**
        * oAuthRequest
          * authCode
          * redirectUri
      * Redshift
        * password **required**
        * username **required**
      * Salesforce
        * accessToken
        * clientCredentialsArn
        * oAuthRequest
          * authCode
          * redirectUri
        * refreshToken
      * ServiceNow
        * password **required**
        * username **required**
      * Singular
        * apiKey **required**
      * Slack
        * accessToken
        * clientId **required**
        * clientSecret **required**
        * oAuthRequest
          * authCode
          * redirectUri
      * Snowflake
        * password **required**
        * username **required**
      * Trendmicro
        * apiSecretKey **required**
      * Veeva
        * password **required**
        * username **required**
      * Zendesk
        * accessToken
        * clientId **required**
        * clientSecret **required**
        * oAuthRequest
          * authCode
          * redirectUri
    * connectorProfileProperties **required**
      * Amplitude
      * Datadog
        * instanceUrl **required**
      * Dynatrace
        * instanceUrl **required**
      * GoogleAnalytics
      * InforNexus
        * instanceUrl **required**
      * Marketo
        * instanceUrl **required**
      * Redshift
        * bucketName **required**
        * bucketPrefix
        * databaseUrl **required**
        * roleArn **required**
      * Salesforce
        * instanceUrl
        * isSandboxEnvironment
      * ServiceNow
        * instanceUrl **required**
      * Singular
      * Slack
        * instanceUrl **required**
      * Snowflake
        * accountName
        * bucketName **required**
        * bucketPrefix
        * privateLinkServiceName
        * region
        * stage **required**
        * warehouse **required**
      * Trendmicro
      * Veeva
        * instanceUrl **required**
      * Zendesk
        * instanceUrl **required**
  * connectorProfileName **required**
  * connectorType **required**
  * kmsArn

### CreateConnectorProfileResponse
* CreateConnectorProfileResponse `object`
  * connectorProfileArn

### CreateFlowRequest
* CreateFlowRequest `object`
  * tags
  * description
  * destinationFlowConfigList **required**
    * items [DestinationFlowConfig](#destinationflowconfig)
  * flowName **required**
  * kmsArn
  * sourceFlowConfig **required**
    * connectorProfileName
    * connectorType **required**
    * incrementalPullConfig
      * datetimeTypeFieldName
    * sourceConnectorProperties **required**
      * Amplitude
        * object **required**
      * Datadog
        * object **required**
      * Dynatrace
        * object **required**
      * GoogleAnalytics
        * object **required**
      * InforNexus
        * object **required**
      * Marketo
        * object **required**
      * S3
        * bucketName **required**
        * bucketPrefix
      * Salesforce
        * enableDynamicFieldUpdate
        * includeDeletedRecords
        * object **required**
      * ServiceNow
        * object **required**
      * Singular
        * object **required**
      * Slack
        * object **required**
      * Trendmicro
        * object **required**
      * Veeva
        * object **required**
      * Zendesk
        * object **required**
  * tasks **required**
    * items [Task](#task)
  * triggerConfig **required**
    * triggerProperties
      * Scheduled
        * dataPullMode
        * scheduleEndTime
        * scheduleExpression **required**
        * scheduleStartTime
        * timezone
    * triggerType **required**

### CreateFlowResponse
* CreateFlowResponse `object`
  * flowArn
  * flowStatus

### CreatedBy
* CreatedBy `string`

### DataPullMode
* DataPullMode `string` (values: Incremental, Complete)

### DatabaseUrl
* DatabaseUrl `string`

### DatadogConnectorOperator
* DatadogConnectorOperator `string` (values: PROJECTION, BETWEEN, EQUAL_TO, ADDITION, MULTIPLICATION, DIVISION, SUBTRACTION, MASK_ALL, MASK_FIRST_N, MASK_LAST_N, VALIDATE_NON_NULL, VALIDATE_NON_ZERO, VALIDATE_NON_NEGATIVE, VALIDATE_NUMERIC, NO_OP)

### DatadogConnectorProfileCredentials
* DatadogConnectorProfileCredentials `object`:  The connector-specific credentials required by Datadog. 
  * apiKey **required**
  * applicationKey **required**

### DatadogConnectorProfileProperties
* DatadogConnectorProfileProperties `object`:  The connector-specific profile properties required by Datadog. 
  * instanceUrl **required**

### DatadogMetadata
* DatadogMetadata `object`:  The connector metadata specific to Datadog. 

### DatadogSourceProperties
* DatadogSourceProperties `object`:  The properties that are applied when Datadog is being used as a source. 
  * object **required**

### Date
* Date `string`

### DatetimeTypeFieldName
* DatetimeTypeFieldName `string`

### DeleteConnectorProfileRequest
* DeleteConnectorProfileRequest `object`
  * connectorProfileName **required**
  * forceDelete

### DeleteConnectorProfileResponse
* DeleteConnectorProfileResponse `object`

### DeleteFlowRequest
* DeleteFlowRequest `object`
  * flowName **required**
  * forceDelete

### DeleteFlowResponse
* DeleteFlowResponse `object`

### DescribeConnectorEntityRequest
* DescribeConnectorEntityRequest `object`
  * connectorEntityName **required**
  * connectorProfileName
  * connectorType

### DescribeConnectorEntityResponse
* DescribeConnectorEntityResponse `object`
  * connectorEntityFields **required**
    * items [ConnectorEntityField](#connectorentityfield)

### DescribeConnectorProfilesRequest
* DescribeConnectorProfilesRequest `object`
  * connectorProfileNames
    * items [ConnectorProfileName](#connectorprofilename)
  * connectorType
  * maxResults
  * nextToken

### DescribeConnectorProfilesResponse
* DescribeConnectorProfilesResponse `object`
  * connectorProfileDetails
    * items [ConnectorProfile](#connectorprofile)
  * nextToken

### DescribeConnectorsRequest
* DescribeConnectorsRequest `object`
  * connectorTypes
    * items [ConnectorType](#connectortype)
  * nextToken

### DescribeConnectorsResponse
* DescribeConnectorsResponse `object`
  * connectorConfigurations
  * nextToken

### DescribeFlowExecutionRecordsRequest
* DescribeFlowExecutionRecordsRequest `object`
  * flowName **required**
  * maxResults
  * nextToken

### DescribeFlowExecutionRecordsResponse
* DescribeFlowExecutionRecordsResponse `object`
  * flowExecutions
    * items [ExecutionRecord](#executionrecord)
  * nextToken

### DescribeFlowRequest
* DescribeFlowRequest `object`
  * flowName **required**

### DescribeFlowResponse
* DescribeFlowResponse `object`
  * tags
  * createdAt
  * createdBy
  * description
  * destinationFlowConfigList
    * items [DestinationFlowConfig](#destinationflowconfig)
  * flowArn
  * flowName
  * flowStatus
  * flowStatusMessage
  * kmsArn
  * lastRunExecutionDetails
    * mostRecentExecutionMessage
    * mostRecentExecutionStatus
    * mostRecentExecutionTime
  * lastUpdatedAt
  * lastUpdatedBy
  * sourceFlowConfig
    * connectorProfileName
    * connectorType **required**
    * incrementalPullConfig
      * datetimeTypeFieldName
    * sourceConnectorProperties **required**
      * Amplitude
        * object **required**
      * Datadog
        * object **required**
      * Dynatrace
        * object **required**
      * GoogleAnalytics
        * object **required**
      * InforNexus
        * object **required**
      * Marketo
        * object **required**
      * S3
        * bucketName **required**
        * bucketPrefix
      * Salesforce
        * enableDynamicFieldUpdate
        * includeDeletedRecords
        * object **required**
      * ServiceNow
        * object **required**
      * Singular
        * object **required**
      * Slack
        * object **required**
      * Trendmicro
        * object **required**
      * Veeva
        * object **required**
      * Zendesk
        * object **required**
  * tasks
    * items [Task](#task)
  * triggerConfig
    * triggerProperties
      * Scheduled
        * dataPullMode
        * scheduleEndTime
        * scheduleExpression **required**
        * scheduleStartTime
        * timezone
    * triggerType **required**

### Description
* Description `string`

### DestinationConnectorProperties
* DestinationConnectorProperties `object`:  This stores the information that is required to query a particular connector. 
  * EventBridge
    * errorHandlingConfig [ErrorHandlingConfig](#errorhandlingconfig)
    * object **required**
  * Redshift
    * bucketPrefix
    * errorHandlingConfig
      * bucketName
      * bucketPrefix
      * failOnFirstDestinationError
    * intermediateBucketName **required**
    * object **required**
  * S3
    * bucketName **required**
    * bucketPrefix
    * s3OutputFormatConfig [S3OutputFormatConfig](#s3outputformatconfig)
  * Salesforce
    * errorHandlingConfig
      * bucketName
      * bucketPrefix
      * failOnFirstDestinationError
    * idFieldNames
      * items [Name](#name)
    * object **required**
    * writeOperationType
  * Snowflake
    * bucketPrefix
    * errorHandlingConfig
      * bucketName
      * bucketPrefix
      * failOnFirstDestinationError
    * intermediateBucketName **required**
    * object **required**
  * Upsolver
    * bucketName **required**
    * bucketPrefix
    * s3OutputFormatConfig **required**
      * aggregationConfig [AggregationConfig](#aggregationconfig)
      * fileType
      * prefixConfig **required** [PrefixConfig](#prefixconfig)

### DestinationField
* DestinationField `string`

### DestinationFieldProperties
* DestinationFieldProperties `object`:  The properties that can be applied to a field when connector is being used as a destination. 
  * isCreatable
  * isNullable
  * isUpdatable
  * isUpsertable
  * supportedWriteOperations
    * items [WriteOperationType](#writeoperationtype)

### DestinationFlowConfig
* DestinationFlowConfig `object`:  Contains information about the configuration of destination connectors present in the flow. 
  * connectorProfileName
  * connectorType **required**
  * destinationConnectorProperties **required**
    * EventBridge
      * errorHandlingConfig [ErrorHandlingConfig](#errorhandlingconfig)
      * object **required**
    * Redshift
      * bucketPrefix
      * errorHandlingConfig
        * bucketName
        * bucketPrefix
        * failOnFirstDestinationError
      * intermediateBucketName **required**
      * object **required**
    * S3
      * bucketName **required**
      * bucketPrefix
      * s3OutputFormatConfig [S3OutputFormatConfig](#s3outputformatconfig)
    * Salesforce
      * errorHandlingConfig
        * bucketName
        * bucketPrefix
        * failOnFirstDestinationError
      * idFieldNames
        * items [Name](#name)
      * object **required**
      * writeOperationType
    * Snowflake
      * bucketPrefix
      * errorHandlingConfig
        * bucketName
        * bucketPrefix
        * failOnFirstDestinationError
      * intermediateBucketName **required**
      * object **required**
    * Upsolver
      * bucketName **required**
      * bucketPrefix
      * s3OutputFormatConfig **required**
        * aggregationConfig [AggregationConfig](#aggregationconfig)
        * fileType
        * prefixConfig **required** [PrefixConfig](#prefixconfig)

### DestinationFlowConfigList
* DestinationFlowConfigList `array`
  * items [DestinationFlowConfig](#destinationflowconfig)

### DynatraceConnectorOperator
* DynatraceConnectorOperator `string` (values: PROJECTION, BETWEEN, EQUAL_TO, ADDITION, MULTIPLICATION, DIVISION, SUBTRACTION, MASK_ALL, MASK_FIRST_N, MASK_LAST_N, VALIDATE_NON_NULL, VALIDATE_NON_ZERO, VALIDATE_NON_NEGATIVE, VALIDATE_NUMERIC, NO_OP)

### DynatraceConnectorProfileCredentials
* DynatraceConnectorProfileCredentials `object`:  The connector-specific profile credentials required by Dynatrace. 
  * apiToken **required**

### DynatraceConnectorProfileProperties
* DynatraceConnectorProfileProperties `object`:  The connector-specific profile properties required by Dynatrace. 
  * instanceUrl **required**

### DynatraceMetadata
* DynatraceMetadata `object`:  The connector metadata specific to Dynatrace. 

### DynatraceSourceProperties
* DynatraceSourceProperties `object`:  The properties that are applied when Dynatrace is being used as a source. 
  * object **required**

### EntitiesPath
* EntitiesPath `string`

### ErrorHandlingConfig
* ErrorHandlingConfig `object`:  The settings that determine how Amazon AppFlow handles an error when placing data in the destination. For example, this setting would determine if the flow should fail after one insertion error, or continue and attempt to insert every record regardless of the initial failure. <code>ErrorHandlingConfig</code> is a part of the destination connector details. 
  * bucketName
  * bucketPrefix
  * failOnFirstDestinationError

### ErrorInfo
* ErrorInfo `object`:  Provides details in the event of a failed flow, including the failure count and the related error messages. 
  * executionMessage
  * putFailuresCount

### EventBridgeDestinationProperties
* EventBridgeDestinationProperties `object`:  The properties that are applied when Amazon EventBridge is being used as a destination. 
  * errorHandlingConfig [ErrorHandlingConfig](#errorhandlingconfig)
  * object **required**

### EventBridgeMetadata
* EventBridgeMetadata `object`:  The connector metadata specific to Amazon EventBridge. 

### ExecutionDetails
* ExecutionDetails `object`:  Describes the details of the flow run, including the timestamp, status, and message. 
  * mostRecentExecutionMessage
  * mostRecentExecutionStatus
  * mostRecentExecutionTime

### ExecutionId
* ExecutionId `string`

### ExecutionMessage
* ExecutionMessage `string`

### ExecutionRecord
* ExecutionRecord `object`:  Specifies information about the past flow run instances for a given flow. 
  * executionId
  * executionResult
    * bytesProcessed
    * bytesWritten
    * errorInfo
      * executionMessage
      * putFailuresCount
    * recordsProcessed
  * executionStatus
  * lastUpdatedAt
  * startedAt

### ExecutionResult
* ExecutionResult `object`:  Specifies the end result of the flow run. 
  * bytesProcessed
  * bytesWritten
  * errorInfo
    * executionMessage
    * putFailuresCount
  * recordsProcessed

### ExecutionStatus
* ExecutionStatus `string` (values: InProgress, Successful, Error)

### FieldType
* FieldType `string`

### FieldTypeDetails
* FieldTypeDetails `object`:  Contains details regarding the supported field type and the operators that can be applied for filtering. 
  * fieldType **required**
  * filterOperators **required**
    * items [Operator](#operator)
  * supportedValues
    * items [Value](#value)

### FileType
* FileType `string` (values: CSV, JSON, PARQUET)

### FilterOperatorList
* FilterOperatorList `array`
  * items [Operator](#operator)

### FlowArn
* FlowArn `string`

### FlowDefinition
* FlowDefinition `object`:  The properties of the flow, such as its source, destination, trigger type, and so on. 
  * tags
  * createdAt
  * createdBy
  * description
  * destinationConnectorType
  * flowArn
  * flowName
  * flowStatus
  * lastRunExecutionDetails
    * mostRecentExecutionMessage
    * mostRecentExecutionStatus
    * mostRecentExecutionTime
  * lastUpdatedAt
  * lastUpdatedBy
  * sourceConnectorType
  * triggerType

### FlowDescription
* FlowDescription `string`

### FlowExecutionList
* FlowExecutionList `array`
  * items [ExecutionRecord](#executionrecord)

### FlowList
* FlowList `array`
  * items [FlowDefinition](#flowdefinition)

### FlowName
* FlowName `string`

### FlowStatus
* FlowStatus `string` (values: Active, Deprecated, Deleted, Draft, Errored, Suspended)

### FlowStatusMessage
* FlowStatusMessage `string`

### GoogleAnalyticsConnectorOperator
* GoogleAnalyticsConnectorOperator `string` (values: PROJECTION, BETWEEN)

### GoogleAnalyticsConnectorProfileCredentials
* GoogleAnalyticsConnectorProfileCredentials `object`:  The connector-specific profile credentials required by Google Analytics. 
  * accessToken
  * clientId **required**
  * clientSecret **required**
  * oAuthRequest
    * authCode
    * redirectUri
  * refreshToken

### GoogleAnalyticsConnectorProfileProperties
* GoogleAnalyticsConnectorProfileProperties `object`:  The connector-specific profile properties required by Google Analytics. 

### GoogleAnalyticsMetadata
* GoogleAnalyticsMetadata `object`:  The connector metadata specific to Google Analytics. 
  * oAuthScopes
    * items [OAuthScope](#oauthscope)

### GoogleAnalyticsSourceProperties
* GoogleAnalyticsSourceProperties `object`:  The properties that are applied when Google Analytics is being used as a source. 
  * object **required**

### Group
* Group `string`

### IdFieldNameList
* IdFieldNameList `array`:  A list of field names that can be used as an ID field when performing a write operation. 
  * items [Name](#name)

### Identifier
* Identifier `string`

### IncrementalPullConfig
* IncrementalPullConfig `object`:  Specifies the configuration used when importing incremental records from the source. 
  * datetimeTypeFieldName

### InforNexusConnectorOperator
* InforNexusConnectorOperator `string` (values: PROJECTION, BETWEEN, EQUAL_TO, ADDITION, MULTIPLICATION, DIVISION, SUBTRACTION, MASK_ALL, MASK_FIRST_N, MASK_LAST_N, VALIDATE_NON_NULL, VALIDATE_NON_ZERO, VALIDATE_NON_NEGATIVE, VALIDATE_NUMERIC, NO_OP)

### InforNexusConnectorProfileCredentials
* InforNexusConnectorProfileCredentials `object`:  The connector-specific profile credentials required by Infor Nexus. 
  * accessKeyId **required**
  * datakey **required**
  * secretAccessKey **required**
  * userId **required**

### InforNexusConnectorProfileProperties
* InforNexusConnectorProfileProperties `object`:  The connector-specific profile properties required by Infor Nexus. 
  * instanceUrl **required**

### InforNexusMetadata
* InforNexusMetadata `object`:  The connector metadata specific to Infor Nexus. 

### InforNexusSourceProperties
* InforNexusSourceProperties `object`:  The properties that are applied when Infor Nexus is being used as a source. 
  * object **required**

### InstanceUrl
* InstanceUrl `string`

### InternalServerException


### KMSArn
* KMSArn `string`

### Key
* Key `string`

### Label
* Label `string`

### ListConnectorEntitiesRequest
* ListConnectorEntitiesRequest `object`
  * connectorProfileName
  * connectorType
  * entitiesPath

### ListConnectorEntitiesResponse
* ListConnectorEntitiesResponse `object`
  * connectorEntityMap **required**

### ListFlowsRequest
* ListFlowsRequest `object`
  * maxResults
  * nextToken

### ListFlowsResponse
* ListFlowsResponse `object`
  * flows
    * items [FlowDefinition](#flowdefinition)
  * nextToken

### ListTagsForResourceRequest
* ListTagsForResourceRequest `object`

### ListTagsForResourceResponse
* ListTagsForResourceResponse `object`
  * tags

### Long
* Long `integer`

### MarketoConnectorOperator
* MarketoConnectorOperator `string` (values: PROJECTION, LESS_THAN, GREATER_THAN, BETWEEN, ADDITION, MULTIPLICATION, DIVISION, SUBTRACTION, MASK_ALL, MASK_FIRST_N, MASK_LAST_N, VALIDATE_NON_NULL, VALIDATE_NON_ZERO, VALIDATE_NON_NEGATIVE, VALIDATE_NUMERIC, NO_OP)

### MarketoConnectorProfileCredentials
* MarketoConnectorProfileCredentials `object`:  The connector-specific profile credentials required by Marketo. 
  * accessToken
  * clientId **required**
  * clientSecret **required**
  * oAuthRequest
    * authCode
    * redirectUri

### MarketoConnectorProfileProperties
* MarketoConnectorProfileProperties `object`:  The connector-specific profile properties required when using Marketo. 
  * instanceUrl **required**

### MarketoMetadata
* MarketoMetadata `object`:  The connector metadata specific to Marketo. 

### MarketoSourceProperties
* MarketoSourceProperties `object`:  The properties that are applied when Marketo is being used as a source. 
  * object **required**

### MaxResults
* MaxResults `integer`

### MostRecentExecutionMessage
* MostRecentExecutionMessage `string`

### Name
* Name `string`

### NextToken
* NextToken `string`

### OAuthScope
* OAuthScope `string`

### OAuthScopeList
* OAuthScopeList `array`
  * items [OAuthScope](#oauthscope)

### Object
* Object `string`

### Operator
* Operator `string` (values: PROJECTION, LESS_THAN, GREATER_THAN, CONTAINS, BETWEEN, LESS_THAN_OR_EQUAL_TO, GREATER_THAN_OR_EQUAL_TO, EQUAL_TO, NOT_EQUAL_TO, ADDITION, MULTIPLICATION, DIVISION, SUBTRACTION, MASK_ALL, MASK_FIRST_N, MASK_LAST_N, VALIDATE_NON_NULL, VALIDATE_NON_ZERO, VALIDATE_NON_NEGATIVE, VALIDATE_NUMERIC, NO_OP)

### OperatorPropertiesKeys
* OperatorPropertiesKeys `string` (values: VALUE, VALUES, DATA_TYPE, UPPER_BOUND, LOWER_BOUND, SOURCE_DATA_TYPE, DESTINATION_DATA_TYPE, VALIDATION_ACTION, MASK_VALUE, MASK_LENGTH, TRUNCATE_LENGTH, MATH_OPERATION_FIELDS_ORDER, CONCAT_FORMAT, SUBFIELD_CATEGORY_MAP)

### Password
* Password `string`

### PrefixConfig
* PrefixConfig `object`:  Determines the prefix that Amazon AppFlow applies to the destination folder name. You can name your destination folders according to the flow frequency and date. 
  * prefixFormat
  * prefixType

### PrefixFormat
* PrefixFormat `string` (values: YEAR, MONTH, DAY, HOUR, MINUTE)

### PrefixType
* PrefixType `string` (values: FILENAME, PATH, PATH_AND_FILENAME)

### PrivateLinkServiceName
* PrivateLinkServiceName `string`

### Property
* Property `string`

### RedirectUri
* RedirectUri `string`

### RedshiftConnectorProfileCredentials
* RedshiftConnectorProfileCredentials `object`:  The connector-specific profile credentials required when using Amazon Redshift. 
  * password **required**
  * username **required**

### RedshiftConnectorProfileProperties
* RedshiftConnectorProfileProperties `object`:  The connector-specific profile properties when using Amazon Redshift. 
  * bucketName **required**
  * bucketPrefix
  * databaseUrl **required**
  * roleArn **required**

### RedshiftDestinationProperties
* RedshiftDestinationProperties `object`:  The properties that are applied when Amazon Redshift is being used as a destination. 
  * bucketPrefix
  * errorHandlingConfig
    * bucketName
    * bucketPrefix
    * failOnFirstDestinationError
  * intermediateBucketName **required**
  * object **required**

### RedshiftMetadata
* RedshiftMetadata `object`:  The connector metadata specific to Amazon Redshift. 

### RefreshToken
* RefreshToken `string`

### Region
* Region `string`

### RegionList
* RegionList `array`
  * items [Region](#region)

### ResourceNotFoundException


### RoleArn
* RoleArn `string`

### S3ConnectorOperator
* S3ConnectorOperator `string` (values: PROJECTION, LESS_THAN, GREATER_THAN, BETWEEN, LESS_THAN_OR_EQUAL_TO, GREATER_THAN_OR_EQUAL_TO, EQUAL_TO, NOT_EQUAL_TO, ADDITION, MULTIPLICATION, DIVISION, SUBTRACTION, MASK_ALL, MASK_FIRST_N, MASK_LAST_N, VALIDATE_NON_NULL, VALIDATE_NON_ZERO, VALIDATE_NON_NEGATIVE, VALIDATE_NUMERIC, NO_OP)

### S3DestinationProperties
* S3DestinationProperties `object`:  The properties that are applied when Amazon S3 is used as a destination. 
  * bucketName **required**
  * bucketPrefix
  * s3OutputFormatConfig [S3OutputFormatConfig](#s3outputformatconfig)

### S3Metadata
* S3Metadata `object`:  The connector metadata specific to Amazon S3. 

### S3OutputFormatConfig
* S3OutputFormatConfig `object`:  The configuration that determines how Amazon AppFlow should format the flow output data when Amazon S3 is used as the destination. 
  * aggregationConfig [AggregationConfig](#aggregationconfig)
  * fileType
  * prefixConfig
    * prefixFormat
    * prefixType

### S3SourceProperties
* S3SourceProperties `object`:  The properties that are applied when Amazon S3 is being used as the flow source. 
  * bucketName **required**
  * bucketPrefix

### SalesforceConnectorOperator
* SalesforceConnectorOperator `string` (values: PROJECTION, LESS_THAN, CONTAINS, GREATER_THAN, BETWEEN, LESS_THAN_OR_EQUAL_TO, GREATER_THAN_OR_EQUAL_TO, EQUAL_TO, NOT_EQUAL_TO, ADDITION, MULTIPLICATION, DIVISION, SUBTRACTION, MASK_ALL, MASK_FIRST_N, MASK_LAST_N, VALIDATE_NON_NULL, VALIDATE_NON_ZERO, VALIDATE_NON_NEGATIVE, VALIDATE_NUMERIC, NO_OP)

### SalesforceConnectorProfileCredentials
* SalesforceConnectorProfileCredentials `object`:  The connector-specific profile credentials required when using Salesforce. 
  * accessToken
  * clientCredentialsArn
  * oAuthRequest
    * authCode
    * redirectUri
  * refreshToken

### SalesforceConnectorProfileProperties
* SalesforceConnectorProfileProperties `object`:  The connector-specific profile properties required when using Salesforce. 
  * instanceUrl
  * isSandboxEnvironment

### SalesforceDestinationProperties
* SalesforceDestinationProperties `object`:  The properties that are applied when Salesforce is being used as a destination. 
  * errorHandlingConfig
    * bucketName
    * bucketPrefix
    * failOnFirstDestinationError
  * idFieldNames
    * items [Name](#name)
  * object **required**
  * writeOperationType

### SalesforceMetadata
* SalesforceMetadata `object`:  The connector metadata specific to Salesforce. 
  * oAuthScopes
    * items [OAuthScope](#oauthscope)

### SalesforceSourceProperties
* SalesforceSourceProperties `object`:  The properties that are applied when Salesforce is being used as a source. 
  * enableDynamicFieldUpdate
  * includeDeletedRecords
  * object **required**

### ScheduleExpression
* ScheduleExpression `string`

### ScheduleFrequencyType
* ScheduleFrequencyType `string` (values: BYMINUTE, HOURLY, DAILY, WEEKLY, MONTHLY, ONCE)

### ScheduledTriggerProperties
* ScheduledTriggerProperties `object`:  Specifies the configuration details of a schedule-triggered flow as defined by the user. Currently, these settings only apply to the <code>Scheduled</code> trigger type. 
  * dataPullMode
  * scheduleEndTime
  * scheduleExpression **required**
  * scheduleStartTime
  * timezone

### SchedulingFrequencyTypeList
* SchedulingFrequencyTypeList `array`
  * items [ScheduleFrequencyType](#schedulefrequencytype)

### SecretKey
* SecretKey `string`

### ServiceNowConnectorOperator
* ServiceNowConnectorOperator `string` (values: PROJECTION, CONTAINS, LESS_THAN, GREATER_THAN, BETWEEN, LESS_THAN_OR_EQUAL_TO, GREATER_THAN_OR_EQUAL_TO, EQUAL_TO, NOT_EQUAL_TO, ADDITION, MULTIPLICATION, DIVISION, SUBTRACTION, MASK_ALL, MASK_FIRST_N, MASK_LAST_N, VALIDATE_NON_NULL, VALIDATE_NON_ZERO, VALIDATE_NON_NEGATIVE, VALIDATE_NUMERIC, NO_OP)

### ServiceNowConnectorProfileCredentials
* ServiceNowConnectorProfileCredentials `object`:  The connector-specific profile credentials required when using ServiceNow. 
  * password **required**
  * username **required**

### ServiceNowConnectorProfileProperties
* ServiceNowConnectorProfileProperties `object`:  The connector-specific profile properties required when using ServiceNow. 
  * instanceUrl **required**

### ServiceNowMetadata
* ServiceNowMetadata `object`:  The connector metadata specific to ServiceNow. 

### ServiceNowSourceProperties
* ServiceNowSourceProperties `object`:  The properties that are applied when ServiceNow is being used as a source. 
  * object **required**

### ServiceQuotaExceededException


### SingularConnectorOperator
* SingularConnectorOperator `string` (values: PROJECTION, EQUAL_TO, ADDITION, MULTIPLICATION, DIVISION, SUBTRACTION, MASK_ALL, MASK_FIRST_N, MASK_LAST_N, VALIDATE_NON_NULL, VALIDATE_NON_ZERO, VALIDATE_NON_NEGATIVE, VALIDATE_NUMERIC, NO_OP)

### SingularConnectorProfileCredentials
* SingularConnectorProfileCredentials `object`:  The connector-specific profile credentials required when using Singular. 
  * apiKey **required**

### SingularConnectorProfileProperties
* SingularConnectorProfileProperties `object`:  The connector-specific profile properties required when using Singular. 

### SingularMetadata
* SingularMetadata `object`:  The connector metadata specific to Singular. 

### SingularSourceProperties
* SingularSourceProperties `object`:  The properties that are applied when Singular is being used as a source. 
  * object **required**

### SlackConnectorOperator
* SlackConnectorOperator `string` (values: PROJECTION, LESS_THAN, GREATER_THAN, BETWEEN, LESS_THAN_OR_EQUAL_TO, GREATER_THAN_OR_EQUAL_TO, EQUAL_TO, ADDITION, MULTIPLICATION, DIVISION, SUBTRACTION, MASK_ALL, MASK_FIRST_N, MASK_LAST_N, VALIDATE_NON_NULL, VALIDATE_NON_ZERO, VALIDATE_NON_NEGATIVE, VALIDATE_NUMERIC, NO_OP)

### SlackConnectorProfileCredentials
* SlackConnectorProfileCredentials `object`:  The connector-specific profile credentials required when using Slack. 
  * accessToken
  * clientId **required**
  * clientSecret **required**
  * oAuthRequest
    * authCode
    * redirectUri

### SlackConnectorProfileProperties
* SlackConnectorProfileProperties `object`:  The connector-specific profile properties required when using Slack. 
  * instanceUrl **required**

### SlackMetadata
* SlackMetadata `object`:  The connector metadata specific to Slack. 
  * oAuthScopes
    * items [OAuthScope](#oauthscope)

### SlackSourceProperties
* SlackSourceProperties `object`:  The properties that are applied when Slack is being used as a source. 
  * object **required**

### SnowflakeConnectorProfileCredentials
* SnowflakeConnectorProfileCredentials `object`:  The connector-specific profile credentials required when using Snowflake. 
  * password **required**
  * username **required**

### SnowflakeConnectorProfileProperties
* SnowflakeConnectorProfileProperties `object`:  The connector-specific profile properties required when using Snowflake. 
  * accountName
  * bucketName **required**
  * bucketPrefix
  * privateLinkServiceName
  * region
  * stage **required**
  * warehouse **required**

### SnowflakeDestinationProperties
* SnowflakeDestinationProperties `object`:  The properties that are applied when Snowflake is being used as a destination. 
  * bucketPrefix
  * errorHandlingConfig
    * bucketName
    * bucketPrefix
    * failOnFirstDestinationError
  * intermediateBucketName **required**
  * object **required**

### SnowflakeMetadata
* SnowflakeMetadata `object`:  The connector metadata specific to Snowflake. 
  * supportedRegions
    * items [Region](#region)

### SourceConnectorProperties
* SourceConnectorProperties `object`:  Specifies the information that is required to query a particular connector. 
  * Amplitude
    * object **required**
  * Datadog
    * object **required**
  * Dynatrace
    * object **required**
  * GoogleAnalytics
    * object **required**
  * InforNexus
    * object **required**
  * Marketo
    * object **required**
  * S3
    * bucketName **required**
    * bucketPrefix
  * Salesforce
    * enableDynamicFieldUpdate
    * includeDeletedRecords
    * object **required**
  * ServiceNow
    * object **required**
  * Singular
    * object **required**
  * Slack
    * object **required**
  * Trendmicro
    * object **required**
  * Veeva
    * object **required**
  * Zendesk
    * object **required**

### SourceFieldProperties
* SourceFieldProperties `object`:  The properties that can be applied to a field when the connector is being used as a source. 
  * isQueryable
  * isRetrievable

### SourceFields
* SourceFields `array`
  * items [String](#string)

### SourceFlowConfig
* SourceFlowConfig `object`:  Contains information about the configuration of the source connector used in the flow. 
  * connectorProfileName
  * connectorType **required**
  * incrementalPullConfig
    * datetimeTypeFieldName
  * sourceConnectorProperties **required**
    * Amplitude
      * object **required**
    * Datadog
      * object **required**
    * Dynatrace
      * object **required**
    * GoogleAnalytics
      * object **required**
    * InforNexus
      * object **required**
    * Marketo
      * object **required**
    * S3
      * bucketName **required**
      * bucketPrefix
    * Salesforce
      * enableDynamicFieldUpdate
      * includeDeletedRecords
      * object **required**
    * ServiceNow
      * object **required**
    * Singular
      * object **required**
    * Slack
      * object **required**
    * Trendmicro
      * object **required**
    * Veeva
      * object **required**
    * Zendesk
      * object **required**

### Stage
* Stage `string`

### StartFlowRequest
* StartFlowRequest `object`
  * flowName **required**

### StartFlowResponse
* StartFlowResponse `object`
  * executionId
  * flowArn
  * flowStatus

### StopFlowRequest
* StopFlowRequest `object`
  * flowName **required**

### StopFlowResponse
* StopFlowResponse `object`
  * flowArn
  * flowStatus

### String
* String `string`

### SupportedFieldTypeDetails
* SupportedFieldTypeDetails `object`:  Contains details regarding all the supported <code>FieldTypes</code> and their corresponding <code>filterOperators</code> and <code>supportedValues</code>. 
  * v1 **required**
    * fieldType **required**
    * filterOperators **required**
      * items [Operator](#operator)
    * supportedValues
      * items [Value](#value)

### SupportedValueList
* SupportedValueList `array`
  * items [Value](#value)

### SupportedWriteOperationList
* SupportedWriteOperationList `array`
  * items [WriteOperationType](#writeoperationtype)

### TagKey
* TagKey `string`

### TagKeyList
* TagKeyList `array`
  * items [TagKey](#tagkey)

### TagMap
* TagMap `object`

### TagResourceRequest
* TagResourceRequest `object`
  * tags **required**

### TagResourceResponse
* TagResourceResponse `object`

### TagValue
* TagValue `string`

### Task
* Task `object`:  A class for modeling different type of tasks. Task implementation varies based on the <code>TaskType</code>. 
  * connectorOperator
    * Amplitude
    * Datadog
    * Dynatrace
    * GoogleAnalytics
    * InforNexus
    * Marketo
    * S3
    * Salesforce
    * ServiceNow
    * Singular
    * Slack
    * Trendmicro
    * Veeva
    * Zendesk
  * destinationField
  * sourceFields **required**
    * items [String](#string)
  * taskProperties
  * taskType **required**

### TaskPropertiesMap
* TaskPropertiesMap `object`

### TaskType
* TaskType `string` (values: Arithmetic, Filter, Map, Mask, Merge, Truncate, Validate)

### Tasks
* Tasks `array`
  * items [Task](#task)

### Timezone
* Timezone `string`

### TrendmicroConnectorOperator
* TrendmicroConnectorOperator `string` (values: PROJECTION, EQUAL_TO, ADDITION, MULTIPLICATION, DIVISION, SUBTRACTION, MASK_ALL, MASK_FIRST_N, MASK_LAST_N, VALIDATE_NON_NULL, VALIDATE_NON_ZERO, VALIDATE_NON_NEGATIVE, VALIDATE_NUMERIC, NO_OP)

### TrendmicroConnectorProfileCredentials
* TrendmicroConnectorProfileCredentials `object`:  The connector-specific profile credentials required when using Trend Micro. 
  * apiSecretKey **required**

### TrendmicroConnectorProfileProperties
* TrendmicroConnectorProfileProperties `object`:  The connector-specific profile properties required when using Trend Micro. 

### TrendmicroMetadata
* TrendmicroMetadata `object`:  The connector metadata specific to Trend Micro. 

### TrendmicroSourceProperties
* TrendmicroSourceProperties `object`:  The properties that are applied when using Trend Micro as a flow source. 
  * object **required**

### TriggerConfig
* TriggerConfig `object`:  The trigger settings that determine how and when Amazon AppFlow runs the specified flow. 
  * triggerProperties
    * Scheduled
      * dataPullMode
      * scheduleEndTime
      * scheduleExpression **required**
      * scheduleStartTime
      * timezone
  * triggerType **required**

### TriggerProperties
* TriggerProperties `object`:  Specifies the configuration details that control the trigger for a flow. Currently, these settings only apply to the <code>Scheduled</code> trigger type. 
  * Scheduled
    * dataPullMode
    * scheduleEndTime
    * scheduleExpression **required**
    * scheduleStartTime
    * timezone

### TriggerType
* TriggerType `string` (values: Scheduled, Event, OnDemand)

### TriggerTypeList
* TriggerTypeList `array`
  * items [TriggerType](#triggertype)

### UnsupportedOperationException


### UntagResourceRequest
* UntagResourceRequest `object`

### UntagResourceResponse
* UntagResourceResponse `object`

### UpdateConnectorProfileRequest
* UpdateConnectorProfileRequest `object`
  * connectionMode **required**
  * connectorProfileConfig **required**
    * connectorProfileCredentials **required**
      * Amplitude
        * apiKey **required**
        * secretKey **required**
      * Datadog
        * apiKey **required**
        * applicationKey **required**
      * Dynatrace
        * apiToken **required**
      * GoogleAnalytics
        * accessToken
        * clientId **required**
        * clientSecret **required**
        * oAuthRequest
          * authCode
          * redirectUri
        * refreshToken
      * InforNexus
        * accessKeyId **required**
        * datakey **required**
        * secretAccessKey **required**
        * userId **required**
      * Marketo
        * accessToken
        * clientId **required**
        * clientSecret **required**
        * oAuthRequest
          * authCode
          * redirectUri
      * Redshift
        * password **required**
        * username **required**
      * Salesforce
        * accessToken
        * clientCredentialsArn
        * oAuthRequest
          * authCode
          * redirectUri
        * refreshToken
      * ServiceNow
        * password **required**
        * username **required**
      * Singular
        * apiKey **required**
      * Slack
        * accessToken
        * clientId **required**
        * clientSecret **required**
        * oAuthRequest
          * authCode
          * redirectUri
      * Snowflake
        * password **required**
        * username **required**
      * Trendmicro
        * apiSecretKey **required**
      * Veeva
        * password **required**
        * username **required**
      * Zendesk
        * accessToken
        * clientId **required**
        * clientSecret **required**
        * oAuthRequest
          * authCode
          * redirectUri
    * connectorProfileProperties **required**
      * Amplitude
      * Datadog
        * instanceUrl **required**
      * Dynatrace
        * instanceUrl **required**
      * GoogleAnalytics
      * InforNexus
        * instanceUrl **required**
      * Marketo
        * instanceUrl **required**
      * Redshift
        * bucketName **required**
        * bucketPrefix
        * databaseUrl **required**
        * roleArn **required**
      * Salesforce
        * instanceUrl
        * isSandboxEnvironment
      * ServiceNow
        * instanceUrl **required**
      * Singular
      * Slack
        * instanceUrl **required**
      * Snowflake
        * accountName
        * bucketName **required**
        * bucketPrefix
        * privateLinkServiceName
        * region
        * stage **required**
        * warehouse **required**
      * Trendmicro
      * Veeva
        * instanceUrl **required**
      * Zendesk
        * instanceUrl **required**
  * connectorProfileName **required**

### UpdateConnectorProfileResponse
* UpdateConnectorProfileResponse `object`
  * connectorProfileArn

### UpdateFlowRequest
* UpdateFlowRequest `object`
  * description
  * destinationFlowConfigList **required**
    * items [DestinationFlowConfig](#destinationflowconfig)
  * flowName **required**
  * sourceFlowConfig [SourceFlowConfig](#sourceflowconfig)
  * tasks **required**
    * items [Task](#task)
  * triggerConfig **required**
    * triggerProperties
      * Scheduled
        * dataPullMode
        * scheduleEndTime
        * scheduleExpression **required**
        * scheduleStartTime
        * timezone
    * triggerType **required**

### UpdateFlowResponse
* UpdateFlowResponse `object`
  * flowStatus

### UpdatedBy
* UpdatedBy `string`

### UpsolverBucketName
* UpsolverBucketName `string`

### UpsolverDestinationProperties
* UpsolverDestinationProperties `object`:  The properties that are applied when Upsolver is used as a destination. 
  * bucketName **required**
  * bucketPrefix
  * s3OutputFormatConfig **required**
    * aggregationConfig [AggregationConfig](#aggregationconfig)
    * fileType
    * prefixConfig **required** [PrefixConfig](#prefixconfig)

### UpsolverMetadata
* UpsolverMetadata `object`:  The connector metadata specific to Upsolver. 

### UpsolverS3OutputFormatConfig
* UpsolverS3OutputFormatConfig `object`:  The configuration that determines how Amazon AppFlow formats the flow output data when Upsolver is used as the destination. 
  * aggregationConfig [AggregationConfig](#aggregationconfig)
  * fileType
  * prefixConfig **required** [PrefixConfig](#prefixconfig)

### Username
* Username `string`

### ValidationException


### Value
* Value `string`

### VeevaConnectorOperator
* VeevaConnectorOperator `string` (values: PROJECTION, LESS_THAN, GREATER_THAN, CONTAINS, BETWEEN, LESS_THAN_OR_EQUAL_TO, GREATER_THAN_OR_EQUAL_TO, EQUAL_TO, NOT_EQUAL_TO, ADDITION, MULTIPLICATION, DIVISION, SUBTRACTION, MASK_ALL, MASK_FIRST_N, MASK_LAST_N, VALIDATE_NON_NULL, VALIDATE_NON_ZERO, VALIDATE_NON_NEGATIVE, VALIDATE_NUMERIC, NO_OP)

### VeevaConnectorProfileCredentials
* VeevaConnectorProfileCredentials `object`:  The connector-specific profile credentials required when using Veeva. 
  * password **required**
  * username **required**

### VeevaConnectorProfileProperties
* VeevaConnectorProfileProperties `object`:  The connector-specific profile properties required when using Veeva. 
  * instanceUrl **required**

### VeevaMetadata
* VeevaMetadata `object`:  The connector metadata specific to Veeva. 

### VeevaSourceProperties
* VeevaSourceProperties `object`:  The properties that are applied when using Veeva as a flow source. 
  * object **required**

### Warehouse
* Warehouse `string`

### WriteOperationType
* WriteOperationType `string` (values: INSERT, UPSERT, UPDATE):  The possible write operations in the destination connector. When this value is not provided, this defaults to the <code>INSERT</code> operation. 

### ZendeskConnectorOperator
* ZendeskConnectorOperator `string` (values: PROJECTION, GREATER_THAN, ADDITION, MULTIPLICATION, DIVISION, SUBTRACTION, MASK_ALL, MASK_FIRST_N, MASK_LAST_N, VALIDATE_NON_NULL, VALIDATE_NON_ZERO, VALIDATE_NON_NEGATIVE, VALIDATE_NUMERIC, NO_OP)

### ZendeskConnectorProfileCredentials
* ZendeskConnectorProfileCredentials `object`:  The connector-specific profile credentials required when using Zendesk. 
  * accessToken
  * clientId **required**
  * clientSecret **required**
  * oAuthRequest
    * authCode
    * redirectUri

### ZendeskConnectorProfileProperties
* ZendeskConnectorProfileProperties `object`:  The connector-specific profile properties required when using Zendesk. 
  * instanceUrl **required**

### ZendeskMetadata
* ZendeskMetadata `object`:  The connector metadata specific to Zendesk. 
  * oAuthScopes
    * items [OAuthScope](#oauthscope)

### ZendeskSourceProperties
* ZendeskSourceProperties `object`:  The properties that are applied when using Zendesk as a flow source. 
  * object **required**


