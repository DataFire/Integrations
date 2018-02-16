# @datafire/amazonaws_apigateway

Client library for Amazon API Gateway

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_apigateway
```
```js
let amazonaws_apigateway = require('@datafire/amazonaws_apigateway').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

amazonaws_apigateway.GetAccount({}).then(data => {
  console.log(data);
});
```

## Description

<fullname>Amazon API Gateway</fullname> <p>Amazon API Gateway helps developers deliver robust, secure, and scalable mobile and web application back ends. API Gateway allows developers to securely connect mobile and web applications to APIs that run on AWS Lambda, Amazon EC2, or other publicly addressable web services that are hosted outside of AWS.</p>

## Actions

### GetAccount



```js
amazonaws_apigateway.GetAccount({}, context)
```

#### Input
* input `object`

#### Output
* output [Account](#account)

### UpdateAccount



```js
amazonaws_apigateway.UpdateAccount({}, context)
```

#### Input
* input `object`
  * patchOperations [ListOfPatchOperation](#listofpatchoperation)

#### Output
* output [Account](#account)

### GetApiKeys



```js
amazonaws_apigateway.GetApiKeys({}, context)
```

#### Input
* input `object`
  * limit `string`
  * position `string`

#### Output
* output [ApiKeys](#apikeys)

### CreateApiKey



```js
amazonaws_apigateway.CreateApiKey({}, context)
```

#### Input
* input `object`
  * customerId [String](#string)
  * description [String](#string)
  * enabled [Boolean](#boolean)
  * generateDistinctId [Boolean](#boolean)
  * name [String](#string)
  * stageKeys [ListOfStageKeys](#listofstagekeys)
  * value [String](#string)

#### Output
*Output schema unknown*

### DeleteApiKey



```js
amazonaws_apigateway.DeleteApiKey({}, context)
```

#### Input
* input `object`
  * apiKey `string`

#### Output
*Output schema unknown*

### GetApiKey



```js
amazonaws_apigateway.GetApiKey({}, context)
```

#### Input
* input `object`
  * apiKey `string`

#### Output
* output [ApiKey](#apikey)

### UpdateApiKey



```js
amazonaws_apigateway.UpdateApiKey({}, context)
```

#### Input
* input `object`
  * apiKey `string`
  * patchOperations [ListOfPatchOperation](#listofpatchoperation)

#### Output
* output [ApiKey](#apikey)

### ImportApiKeys



```js
amazonaws_apigateway.ImportApiKeys({
  "body": ""
}, context)
```

#### Input
* input `object`
  * body **required** [Blob](#blob)

#### Output
*Output schema unknown*

### GetClientCertificates



```js
amazonaws_apigateway.GetClientCertificates({}, context)
```

#### Input
* input `object`
  * limit `string`
  * position `string`

#### Output
* output [ClientCertificates](#clientcertificates)

### GenerateClientCertificate



```js
amazonaws_apigateway.GenerateClientCertificate({}, context)
```

#### Input
* input `object`
  * description [String](#string)

#### Output
*Output schema unknown*

### DeleteClientCertificate



```js
amazonaws_apigateway.DeleteClientCertificate({}, context)
```

#### Input
* input `object`
  * clientcertificateId `string`

#### Output
*Output schema unknown*

### GetClientCertificate



```js
amazonaws_apigateway.GetClientCertificate({}, context)
```

#### Input
* input `object`
  * clientcertificateId `string`

#### Output
* output [ClientCertificate](#clientcertificate)

### UpdateClientCertificate



```js
amazonaws_apigateway.UpdateClientCertificate({}, context)
```

#### Input
* input `object`
  * clientcertificateId `string`
  * patchOperations [ListOfPatchOperation](#listofpatchoperation)

#### Output
* output [ClientCertificate](#clientcertificate)

### GetDomainNames



```js
amazonaws_apigateway.GetDomainNames({}, context)
```

#### Input
* input `object`
  * limit `string`
  * position `string`

#### Output
* output [DomainNames](#domainnames)

### CreateDomainName



```js
amazonaws_apigateway.CreateDomainName({
  "domainName": ""
}, context)
```

#### Input
* input `object`
  * certificateArn [String](#string)
  * certificateBody [String](#string)
  * certificateChain [String](#string)
  * certificateName [String](#string)
  * certificatePrivateKey [String](#string)
  * domainName **required** [String](#string)
  * endpointConfiguration [EndpointConfiguration](#endpointconfiguration)
  * regionalCertificateArn [String](#string)
  * regionalCertificateName [String](#string)

#### Output
*Output schema unknown*

### DeleteDomainName



```js
amazonaws_apigateway.DeleteDomainName({}, context)
```

#### Input
* input `object`
  * domainName `string`

#### Output
*Output schema unknown*

### GetDomainName



```js
amazonaws_apigateway.GetDomainName({}, context)
```

#### Input
* input `object`
  * domainName `string`

#### Output
* output [DomainName](#domainname)

### UpdateDomainName



```js
amazonaws_apigateway.UpdateDomainName({}, context)
```

#### Input
* input `object`
  * domainName `string`
  * patchOperations [ListOfPatchOperation](#listofpatchoperation)

#### Output
* output [DomainName](#domainname)

### GetBasePathMappings



```js
amazonaws_apigateway.GetBasePathMappings({}, context)
```

#### Input
* input `object`
  * limit `string`
  * position `string`
  * domainName `string`

#### Output
* output [BasePathMappings](#basepathmappings)

### CreateBasePathMapping



```js
amazonaws_apigateway.CreateBasePathMapping({
  "restApiId": ""
}, context)
```

#### Input
* input `object`
  * domainName `string`
  * basePath [String](#string)
  * restApiId **required** [String](#string)
  * stage [String](#string)

#### Output
*Output schema unknown*

### DeleteBasePathMapping



```js
amazonaws_apigateway.DeleteBasePathMapping({}, context)
```

#### Input
* input `object`
  * domainName `string`
  * basePath `string`

#### Output
*Output schema unknown*

### GetBasePathMapping



```js
amazonaws_apigateway.GetBasePathMapping({}, context)
```

#### Input
* input `object`
  * domainName `string`
  * basePath `string`

#### Output
* output [BasePathMapping](#basepathmapping)

### UpdateBasePathMapping



```js
amazonaws_apigateway.UpdateBasePathMapping({}, context)
```

#### Input
* input `object`
  * domainName `string`
  * basePath `string`
  * patchOperations [ListOfPatchOperation](#listofpatchoperation)

#### Output
* output [BasePathMapping](#basepathmapping)

### GetRestApis



```js
amazonaws_apigateway.GetRestApis({}, context)
```

#### Input
* input `object`
  * limit `string`
  * position `string`

#### Output
* output [RestApis](#restapis)

### CreateRestApi



```js
amazonaws_apigateway.CreateRestApi({
  "name": ""
}, context)
```

#### Input
* input `object`
  * apiKeySource [ApiKeySourceType](#apikeysourcetype)
  * binaryMediaTypes [ListOfString](#listofstring)
  * cloneFrom [String](#string)
  * description [String](#string)
  * endpointConfiguration [EndpointConfiguration](#endpointconfiguration)
  * minimumCompressionSize [NullableInteger](#nullableinteger)
  * name **required** [String](#string)
  * version [String](#string)

#### Output
*Output schema unknown*

### DeleteRestApi



```js
amazonaws_apigateway.DeleteRestApi({}, context)
```

#### Input
* input `object`
  * restapiId `string`

#### Output
*Output schema unknown*

### GetRestApi



```js
amazonaws_apigateway.GetRestApi({}, context)
```

#### Input
* input `object`
  * restapiId `string`

#### Output
* output [RestApi](#restapi)

### UpdateRestApi



```js
amazonaws_apigateway.UpdateRestApi({}, context)
```

#### Input
* input `object`
  * restapiId `string`
  * patchOperations [ListOfPatchOperation](#listofpatchoperation)

#### Output
* output [RestApi](#restapi)

### PutRestApi



```js
amazonaws_apigateway.PutRestApi({
  "body": ""
}, context)
```

#### Input
* input `object`
  * restapiId `string`
  * body **required** [Blob](#blob)

#### Output
* output [RestApi](#restapi)

### GetAuthorizers



```js
amazonaws_apigateway.GetAuthorizers({}, context)
```

#### Input
* input `object`
  * restapiId `string`

#### Output
* output [Authorizers](#authorizers)

### CreateAuthorizer



```js
amazonaws_apigateway.CreateAuthorizer({
  "name": "",
  "type": ""
}, context)
```

#### Input
* input `object`
  * restapiId `string`
  * authType [String](#string)
  * authorizerCredentials [String](#string)
  * authorizerResultTtlInSeconds [NullableInteger](#nullableinteger)
  * authorizerUri [String](#string)
  * identitySource [String](#string)
  * identityValidationExpression [String](#string)
  * name **required** [String](#string)
  * providerARNs [ListOfARNs](#listofarns)
  * type **required** [AuthorizerType](#authorizertype)

#### Output
*Output schema unknown*

### DeleteAuthorizer



```js
amazonaws_apigateway.DeleteAuthorizer({}, context)
```

#### Input
* input `object`
  * restapiId `string`
  * authorizerId `string`

#### Output
*Output schema unknown*

### GetAuthorizer



```js
amazonaws_apigateway.GetAuthorizer({}, context)
```

#### Input
* input `object`
  * restapiId `string`
  * authorizerId `string`

#### Output
* output [Authorizer](#authorizer)

### UpdateAuthorizer



```js
amazonaws_apigateway.UpdateAuthorizer({}, context)
```

#### Input
* input `object`
  * restapiId `string`
  * authorizerId `string`
  * patchOperations [ListOfPatchOperation](#listofpatchoperation)

#### Output
* output [Authorizer](#authorizer)

### TestInvokeAuthorizer



```js
amazonaws_apigateway.TestInvokeAuthorizer({}, context)
```

#### Input
* input `object`
  * restapiId `string`
  * authorizerId `string`
  * additionalContext [MapOfStringToString](#mapofstringtostring)
  * body [String](#string)
  * headers [MapOfHeaderValues](#mapofheadervalues)
  * pathWithQueryString [String](#string)
  * stageVariables [MapOfStringToString](#mapofstringtostring)

#### Output
* output [TestInvokeAuthorizerResponse](#testinvokeauthorizerresponse)

### GetDeployments



```js
amazonaws_apigateway.GetDeployments({}, context)
```

#### Input
* input `object`
  * limit `string`
  * position `string`
  * restapiId `string`

#### Output
* output [Deployments](#deployments)

### CreateDeployment



```js
amazonaws_apigateway.CreateDeployment({}, context)
```

#### Input
* input `object`
  * restapiId `string`
  * cacheClusterEnabled [NullableBoolean](#nullableboolean)
  * cacheClusterSize [CacheClusterSize](#cacheclustersize)
  * canarySettings [DeploymentCanarySettings](#deploymentcanarysettings)
  * description [String](#string)
  * stageDescription [String](#string)
  * stageName [String](#string)
  * variables [MapOfStringToString](#mapofstringtostring)

#### Output
*Output schema unknown*

### DeleteDeployment



```js
amazonaws_apigateway.DeleteDeployment({}, context)
```

#### Input
* input `object`
  * restapiId `string`
  * deploymentId `string`

#### Output
*Output schema unknown*

### GetDeployment



```js
amazonaws_apigateway.GetDeployment({}, context)
```

#### Input
* input `object`
  * restapiId `string`
  * deploymentId `string`

#### Output
* output [Deployment](#deployment)

### UpdateDeployment



```js
amazonaws_apigateway.UpdateDeployment({}, context)
```

#### Input
* input `object`
  * restapiId `string`
  * deploymentId `string`
  * patchOperations [ListOfPatchOperation](#listofpatchoperation)

#### Output
* output [Deployment](#deployment)

### GetDocumentationParts



```js
amazonaws_apigateway.GetDocumentationParts({}, context)
```

#### Input
* input `object`
  * restapiId `string`

#### Output
* output [DocumentationParts](#documentationparts)

### CreateDocumentationPart



```js
amazonaws_apigateway.CreateDocumentationPart({
  "location": {
    "type": ""
  },
  "properties": ""
}, context)
```

#### Input
* input `object`
  * restapiId `string`
  * location **required** [DocumentationPartLocation](#documentationpartlocation)
  * properties **required** [String](#string)

#### Output
*Output schema unknown*

### ImportDocumentationParts



```js
amazonaws_apigateway.ImportDocumentationParts({
  "body": ""
}, context)
```

#### Input
* input `object`
  * restapiId `string`
  * body **required** [Blob](#blob)

#### Output
* output [DocumentationPartIds](#documentationpartids)

### DeleteDocumentationPart



```js
amazonaws_apigateway.DeleteDocumentationPart({}, context)
```

#### Input
* input `object`
  * restapiId `string`
  * partId `string`

#### Output
*Output schema unknown*

### GetDocumentationPart



```js
amazonaws_apigateway.GetDocumentationPart({}, context)
```

#### Input
* input `object`
  * restapiId `string`
  * partId `string`

#### Output
* output [DocumentationPart](#documentationpart)

### UpdateDocumentationPart



```js
amazonaws_apigateway.UpdateDocumentationPart({}, context)
```

#### Input
* input `object`
  * restapiId `string`
  * partId `string`
  * patchOperations [ListOfPatchOperation](#listofpatchoperation)

#### Output
* output [DocumentationPart](#documentationpart)

### GetDocumentationVersions



```js
amazonaws_apigateway.GetDocumentationVersions({}, context)
```

#### Input
* input `object`
  * restapiId `string`

#### Output
* output [DocumentationVersions](#documentationversions)

### CreateDocumentationVersion



```js
amazonaws_apigateway.CreateDocumentationVersion({
  "documentationVersion": ""
}, context)
```

#### Input
* input `object`
  * restapiId `string`
  * description [String](#string)
  * documentationVersion **required** [String](#string)
  * stageName [String](#string)

#### Output
*Output schema unknown*

### DeleteDocumentationVersion



```js
amazonaws_apigateway.DeleteDocumentationVersion({}, context)
```

#### Input
* input `object`
  * restapiId `string`
  * docVersion `string`

#### Output
*Output schema unknown*

### GetDocumentationVersion



```js
amazonaws_apigateway.GetDocumentationVersion({}, context)
```

#### Input
* input `object`
  * restapiId `string`
  * docVersion `string`

#### Output
* output [DocumentationVersion](#documentationversion)

### UpdateDocumentationVersion



```js
amazonaws_apigateway.UpdateDocumentationVersion({}, context)
```

#### Input
* input `object`
  * restapiId `string`
  * docVersion `string`
  * patchOperations [ListOfPatchOperation](#listofpatchoperation)

#### Output
* output [DocumentationVersion](#documentationversion)

### GetGatewayResponses



```js
amazonaws_apigateway.GetGatewayResponses({}, context)
```

#### Input
* input `object`
  * restapiId `string`

#### Output
* output [GatewayResponses](#gatewayresponses)

### DeleteGatewayResponse



```js
amazonaws_apigateway.DeleteGatewayResponse({}, context)
```

#### Input
* input `object`
  * restapiId `string`
  * responseType `string`

#### Output
*Output schema unknown*

### GetGatewayResponse



```js
amazonaws_apigateway.GetGatewayResponse({}, context)
```

#### Input
* input `object`
  * restapiId `string`
  * responseType `string`

#### Output
* output [GatewayResponse](#gatewayresponse)

### UpdateGatewayResponse



```js
amazonaws_apigateway.UpdateGatewayResponse({}, context)
```

#### Input
* input `object`
  * restapiId `string`
  * responseType `string`
  * patchOperations [ListOfPatchOperation](#listofpatchoperation)

#### Output
* output [GatewayResponse](#gatewayresponse)

### PutGatewayResponse



```js
amazonaws_apigateway.PutGatewayResponse({}, context)
```

#### Input
* input `object`
  * restapiId `string`
  * responseType `string`
  * responseParameters [MapOfStringToString](#mapofstringtostring)
  * responseTemplates [MapOfStringToString](#mapofstringtostring)
  * statusCode [StatusCode](#statuscode)

#### Output
*Output schema unknown*

### GetModels



```js
amazonaws_apigateway.GetModels({}, context)
```

#### Input
* input `object`
  * limit `string`
  * position `string`
  * restapiId `string`

#### Output
* output [Models](#models)

### CreateModel



```js
amazonaws_apigateway.CreateModel({
  "name": "",
  "contentType": ""
}, context)
```

#### Input
* input `object`
  * restapiId `string`
  * contentType **required** [String](#string)
  * description [String](#string)
  * name **required** [String](#string)
  * schema [String](#string)

#### Output
*Output schema unknown*

### DeleteModel



```js
amazonaws_apigateway.DeleteModel({}, context)
```

#### Input
* input `object`
  * restapiId `string`
  * modelName `string`

#### Output
*Output schema unknown*

### GetModel



```js
amazonaws_apigateway.GetModel({}, context)
```

#### Input
* input `object`
  * restapiId `string`
  * modelName `string`

#### Output
* output [Model](#model)

### UpdateModel



```js
amazonaws_apigateway.UpdateModel({}, context)
```

#### Input
* input `object`
  * restapiId `string`
  * modelName `string`
  * patchOperations [ListOfPatchOperation](#listofpatchoperation)

#### Output
* output [Model](#model)

### GetModelTemplate



```js
amazonaws_apigateway.GetModelTemplate({}, context)
```

#### Input
* input `object`
  * restapiId `string`
  * modelName `string`

#### Output
* output [Template](#template)

### GetRequestValidators



```js
amazonaws_apigateway.GetRequestValidators({}, context)
```

#### Input
* input `object`
  * restapiId `string`

#### Output
* output [RequestValidators](#requestvalidators)

### CreateRequestValidator



```js
amazonaws_apigateway.CreateRequestValidator({}, context)
```

#### Input
* input `object`
  * restapiId `string`
  * name [String](#string)
  * validateRequestBody [Boolean](#boolean)
  * validateRequestParameters [Boolean](#boolean)

#### Output
*Output schema unknown*

### DeleteRequestValidator



```js
amazonaws_apigateway.DeleteRequestValidator({}, context)
```

#### Input
* input `object`
  * restapiId `string`
  * requestvalidatorId `string`

#### Output
*Output schema unknown*

### GetRequestValidator



```js
amazonaws_apigateway.GetRequestValidator({}, context)
```

#### Input
* input `object`
  * restapiId `string`
  * requestvalidatorId `string`

#### Output
* output [RequestValidator](#requestvalidator)

### UpdateRequestValidator



```js
amazonaws_apigateway.UpdateRequestValidator({}, context)
```

#### Input
* input `object`
  * restapiId `string`
  * requestvalidatorId `string`
  * patchOperations [ListOfPatchOperation](#listofpatchoperation)

#### Output
* output [RequestValidator](#requestvalidator)

### GetResources



```js
amazonaws_apigateway.GetResources({}, context)
```

#### Input
* input `object`
  * limit `string`
  * position `string`
  * restapiId `string`

#### Output
* output [Resources](#resources)

### CreateResource



```js
amazonaws_apigateway.CreateResource({
  "pathPart": ""
}, context)
```

#### Input
* input `object`
  * restapiId `string`
  * parentId `string`
  * pathPart **required** [String](#string)

#### Output
*Output schema unknown*

### DeleteResource



```js
amazonaws_apigateway.DeleteResource({}, context)
```

#### Input
* input `object`
  * restapiId `string`
  * resourceId `string`

#### Output
*Output schema unknown*

### GetResource



```js
amazonaws_apigateway.GetResource({}, context)
```

#### Input
* input `object`
  * restapiId `string`
  * resourceId `string`

#### Output
* output [Resource](#resource)

### UpdateResource



```js
amazonaws_apigateway.UpdateResource({}, context)
```

#### Input
* input `object`
  * restapiId `string`
  * resourceId `string`
  * patchOperations [ListOfPatchOperation](#listofpatchoperation)

#### Output
* output [Resource](#resource)

### DeleteMethod



```js
amazonaws_apigateway.DeleteMethod({}, context)
```

#### Input
* input `object`
  * restapiId `string`
  * resourceId `string`
  * httpMethod `string`

#### Output
*Output schema unknown*

### GetMethod



```js
amazonaws_apigateway.GetMethod({}, context)
```

#### Input
* input `object`
  * restapiId `string`
  * resourceId `string`
  * httpMethod `string`

#### Output
* output [Method](#method)

### UpdateMethod



```js
amazonaws_apigateway.UpdateMethod({}, context)
```

#### Input
* input `object`
  * restapiId `string`
  * resourceId `string`
  * httpMethod `string`
  * patchOperations [ListOfPatchOperation](#listofpatchoperation)

#### Output
* output [Method](#method)

### TestInvokeMethod



```js
amazonaws_apigateway.TestInvokeMethod({}, context)
```

#### Input
* input `object`
  * restapiId `string`
  * resourceId `string`
  * httpMethod `string`
  * body [String](#string)
  * clientCertificateId [String](#string)
  * headers [MapOfHeaderValues](#mapofheadervalues)
  * pathWithQueryString [String](#string)
  * stageVariables [MapOfStringToString](#mapofstringtostring)

#### Output
* output [TestInvokeMethodResponse](#testinvokemethodresponse)

### PutMethod



```js
amazonaws_apigateway.PutMethod({
  "authorizationType": ""
}, context)
```

#### Input
* input `object`
  * restapiId `string`
  * resourceId `string`
  * httpMethod `string`
  * apiKeyRequired [Boolean](#boolean)
  * authorizationScopes [ListOfString](#listofstring)
  * authorizationType **required** [String](#string)
  * authorizerId [String](#string)
  * operationName [String](#string)
  * requestModels [MapOfStringToString](#mapofstringtostring)
  * requestParameters [MapOfStringToBoolean](#mapofstringtoboolean)
  * requestValidatorId [String](#string)

#### Output
*Output schema unknown*

### DeleteIntegration



```js
amazonaws_apigateway.DeleteIntegration({}, context)
```

#### Input
* input `object`
  * restapiId `string`
  * resourceId `string`
  * httpMethod `string`

#### Output
*Output schema unknown*

### GetIntegration



```js
amazonaws_apigateway.GetIntegration({}, context)
```

#### Input
* input `object`
  * restapiId `string`
  * resourceId `string`
  * httpMethod `string`

#### Output
* output [Integration](#integration)

### UpdateIntegration



```js
amazonaws_apigateway.UpdateIntegration({}, context)
```

#### Input
* input `object`
  * restapiId `string`
  * resourceId `string`
  * httpMethod `string`
  * patchOperations [ListOfPatchOperation](#listofpatchoperation)

#### Output
* output [Integration](#integration)

### PutIntegration



```js
amazonaws_apigateway.PutIntegration({
  "type": ""
}, context)
```

#### Input
* input `object`
  * restapiId `string`
  * resourceId `string`
  * httpMethod `string`
  * cacheKeyParameters [ListOfString](#listofstring)
  * cacheNamespace [String](#string)
  * connectionId [String](#string)
  * connectionType [ConnectionType](#connectiontype)
  * contentHandling [ContentHandlingStrategy](#contenthandlingstrategy)
  * credentials [String](#string)
  * integrationHttpMethod [String](#string)
  * passthroughBehavior [String](#string)
  * requestParameters [MapOfStringToString](#mapofstringtostring)
  * requestTemplates [MapOfStringToString](#mapofstringtostring)
  * timeoutInMillis [NullableInteger](#nullableinteger)
  * type **required** [IntegrationType](#integrationtype)
  * uri [String](#string)

#### Output
*Output schema unknown*

### DeleteIntegrationResponse



```js
amazonaws_apigateway.DeleteIntegrationResponse({}, context)
```

#### Input
* input `object`
  * restapiId `string`
  * resourceId `string`
  * httpMethod `string`
  * statusCode `string`

#### Output
*Output schema unknown*

### GetIntegrationResponse



```js
amazonaws_apigateway.GetIntegrationResponse({}, context)
```

#### Input
* input `object`
  * restapiId `string`
  * resourceId `string`
  * httpMethod `string`
  * statusCode `string`

#### Output
* output [IntegrationResponse](#integrationresponse)

### UpdateIntegrationResponse



```js
amazonaws_apigateway.UpdateIntegrationResponse({}, context)
```

#### Input
* input `object`
  * restapiId `string`
  * resourceId `string`
  * httpMethod `string`
  * statusCode `string`
  * patchOperations [ListOfPatchOperation](#listofpatchoperation)

#### Output
* output [IntegrationResponse](#integrationresponse)

### PutIntegrationResponse



```js
amazonaws_apigateway.PutIntegrationResponse({}, context)
```

#### Input
* input `object`
  * restapiId `string`
  * resourceId `string`
  * httpMethod `string`
  * statusCode `string`
  * contentHandling [ContentHandlingStrategy](#contenthandlingstrategy)
  * responseParameters [MapOfStringToString](#mapofstringtostring)
  * responseTemplates [MapOfStringToString](#mapofstringtostring)
  * selectionPattern [String](#string)

#### Output
*Output schema unknown*

### DeleteMethodResponse



```js
amazonaws_apigateway.DeleteMethodResponse({}, context)
```

#### Input
* input `object`
  * restapiId `string`
  * resourceId `string`
  * httpMethod `string`
  * statusCode `string`

#### Output
*Output schema unknown*

### GetMethodResponse



```js
amazonaws_apigateway.GetMethodResponse({}, context)
```

#### Input
* input `object`
  * restapiId `string`
  * resourceId `string`
  * httpMethod `string`
  * statusCode `string`

#### Output
* output [MethodResponse](#methodresponse)

### UpdateMethodResponse



```js
amazonaws_apigateway.UpdateMethodResponse({}, context)
```

#### Input
* input `object`
  * restapiId `string`
  * resourceId `string`
  * httpMethod `string`
  * statusCode `string`
  * patchOperations [ListOfPatchOperation](#listofpatchoperation)

#### Output
*Output schema unknown*

### PutMethodResponse



```js
amazonaws_apigateway.PutMethodResponse({}, context)
```

#### Input
* input `object`
  * restapiId `string`
  * resourceId `string`
  * httpMethod `string`
  * statusCode `string`
  * responseModels [MapOfStringToString](#mapofstringtostring)
  * responseParameters [MapOfStringToBoolean](#mapofstringtoboolean)

#### Output
*Output schema unknown*

### GetStages



```js
amazonaws_apigateway.GetStages({}, context)
```

#### Input
* input `object`
  * restapiId `string`

#### Output
* output [Stages](#stages)

### CreateStage



```js
amazonaws_apigateway.CreateStage({
  "stageName": "",
  "deploymentId": ""
}, context)
```

#### Input
* input `object`
  * restapiId `string`
  * cacheClusterEnabled [Boolean](#boolean)
  * cacheClusterSize [CacheClusterSize](#cacheclustersize)
  * canarySettings [CanarySettings](#canarysettings)
  * deploymentId **required** [String](#string)
  * description [String](#string)
  * documentationVersion [String](#string)
  * stageName **required** [String](#string)
  * tags [MapOfStringToString](#mapofstringtostring)
  * variables [MapOfStringToString](#mapofstringtostring)

#### Output
*Output schema unknown*

### DeleteStage



```js
amazonaws_apigateway.DeleteStage({}, context)
```

#### Input
* input `object`
  * restapiId `string`
  * stageName `string`

#### Output
*Output schema unknown*

### GetStage



```js
amazonaws_apigateway.GetStage({}, context)
```

#### Input
* input `object`
  * restapiId `string`
  * stageName `string`

#### Output
* output [Stage](#stage)

### UpdateStage



```js
amazonaws_apigateway.UpdateStage({}, context)
```

#### Input
* input `object`
  * restapiId `string`
  * stageName `string`
  * patchOperations [ListOfPatchOperation](#listofpatchoperation)

#### Output
* output [Stage](#stage)

### FlushStageAuthorizersCache



```js
amazonaws_apigateway.FlushStageAuthorizersCache({}, context)
```

#### Input
* input `object`
  * restapiId `string`
  * stageName `string`

#### Output
*Output schema unknown*

### FlushStageCache



```js
amazonaws_apigateway.FlushStageCache({}, context)
```

#### Input
* input `object`
  * restapiId `string`
  * stageName `string`

#### Output
*Output schema unknown*

### GetExport



```js
amazonaws_apigateway.GetExport({}, context)
```

#### Input
* input `object`
  * restapiId `string`
  * stageName `string`
  * exportType `string`

#### Output
* output [ExportResponse](#exportresponse)

### GetSdk



```js
amazonaws_apigateway.GetSdk({}, context)
```

#### Input
* input `object`
  * restapiId `string`
  * stageName `string`
  * sdkType `string`

#### Output
* output [SdkResponse](#sdkresponse)

### ImportRestApi



```js
amazonaws_apigateway.ImportRestApi({
  "body": ""
}, context)
```

#### Input
* input `object`
  * body **required** [Blob](#blob)

#### Output
*Output schema unknown*

### GetSdkTypes



```js
amazonaws_apigateway.GetSdkTypes({}, context)
```

#### Input
* input `object`

#### Output
* output [SdkTypes](#sdktypes)

### GetSdkType



```js
amazonaws_apigateway.GetSdkType({}, context)
```

#### Input
* input `object`
  * sdktypeId `string`

#### Output
* output [SdkType](#sdktype)

### UntagResource



```js
amazonaws_apigateway.UntagResource({}, context)
```

#### Input
* input `object`
  * resourceArn `string`

#### Output
*Output schema unknown*

### GetTags



```js
amazonaws_apigateway.GetTags({}, context)
```

#### Input
* input `object`
  * resourceArn `string`

#### Output
* output [Tags](#tags)

### TagResource



```js
amazonaws_apigateway.TagResource({
  "tags": []
}, context)
```

#### Input
* input `object`
  * resourceArn `string`
  * tags **required** [MapOfStringToString](#mapofstringtostring)

#### Output
*Output schema unknown*

### GetUsagePlans



```js
amazonaws_apigateway.GetUsagePlans({}, context)
```

#### Input
* input `object`
  * limit `string`
  * position `string`

#### Output
* output [UsagePlans](#usageplans)

### CreateUsagePlan



```js
amazonaws_apigateway.CreateUsagePlan({
  "name": ""
}, context)
```

#### Input
* input `object`
  * apiStages [ListOfApiStage](#listofapistage)
  * description [String](#string)
  * name **required** [String](#string)
  * quota [QuotaSettings](#quotasettings)
  * throttle [ThrottleSettings](#throttlesettings)

#### Output
*Output schema unknown*

### DeleteUsagePlan



```js
amazonaws_apigateway.DeleteUsagePlan({
  "usageplanId": ""
}, context)
```

#### Input
* input `object`
  * usageplanId **required** `string`

#### Output
*Output schema unknown*

### GetUsagePlan



```js
amazonaws_apigateway.GetUsagePlan({
  "usageplanId": ""
}, context)
```

#### Input
* input `object`
  * usageplanId **required** `string`

#### Output
* output [UsagePlan](#usageplan)

### UpdateUsagePlan



```js
amazonaws_apigateway.UpdateUsagePlan({
  "usageplanId": ""
}, context)
```

#### Input
* input `object`
  * usageplanId **required** `string`
  * patchOperations [ListOfPatchOperation](#listofpatchoperation)

#### Output
* output [UsagePlan](#usageplan)

### GetUsagePlanKeys



```js
amazonaws_apigateway.GetUsagePlanKeys({
  "usageplanId": ""
}, context)
```

#### Input
* input `object`
  * limit `string`
  * position `string`
  * usageplanId **required** `string`

#### Output
* output [UsagePlanKeys](#usageplankeys)

### CreateUsagePlanKey



```js
amazonaws_apigateway.CreateUsagePlanKey({
  "usageplanId": "",
  "keyId": "",
  "keyType": ""
}, context)
```

#### Input
* input `object`
  * usageplanId **required** `string`
  * keyId **required** [String](#string)
  * keyType **required** [String](#string)

#### Output
*Output schema unknown*

### DeleteUsagePlanKey



```js
amazonaws_apigateway.DeleteUsagePlanKey({
  "usageplanId": "",
  "keyId": ""
}, context)
```

#### Input
* input `object`
  * usageplanId **required** `string`
  * keyId **required** `string`

#### Output
*Output schema unknown*

### GetUsagePlanKey



```js
amazonaws_apigateway.GetUsagePlanKey({
  "usageplanId": "",
  "keyId": ""
}, context)
```

#### Input
* input `object`
  * usageplanId **required** `string`
  * keyId **required** `string`

#### Output
* output [UsagePlanKey](#usageplankey)

### UpdateUsage



```js
amazonaws_apigateway.UpdateUsage({
  "usageplanId": "",
  "keyId": ""
}, context)
```

#### Input
* input `object`
  * usageplanId **required** `string`
  * keyId **required** `string`
  * patchOperations [ListOfPatchOperation](#listofpatchoperation)

#### Output
* output [Usage](#usage)

### GetUsage



```js
amazonaws_apigateway.GetUsage({
  "usageplanId": ""
}, context)
```

#### Input
* input `object`
  * limit `string`
  * position `string`
  * usageplanId **required** `string`

#### Output
* output [Usage](#usage)

### GetVpcLinks



```js
amazonaws_apigateway.GetVpcLinks({}, context)
```

#### Input
* input `object`
  * limit `string`
  * position `string`

#### Output
* output [VpcLinks](#vpclinks)

### CreateVpcLink



```js
amazonaws_apigateway.CreateVpcLink({
  "name": "",
  "targetArns": []
}, context)
```

#### Input
* input `object`
  * description [String](#string)
  * name **required** [String](#string)
  * targetArns **required** [ListOfString](#listofstring)

#### Output
*Output schema unknown*

### DeleteVpcLink



```js
amazonaws_apigateway.DeleteVpcLink({}, context)
```

#### Input
* input `object`
  * vpclinkId `string`

#### Output
*Output schema unknown*

### GetVpcLink



```js
amazonaws_apigateway.GetVpcLink({}, context)
```

#### Input
* input `object`
  * vpclinkId `string`

#### Output
* output [VpcLink](#vpclink)

### UpdateVpcLink



```js
amazonaws_apigateway.UpdateVpcLink({}, context)
```

#### Input
* input `object`
  * vpclinkId `string`
  * patchOperations [ListOfPatchOperation](#listofpatchoperation)

#### Output
* output [VpcLink](#vpclink)



## Definitions

### AccessLogSettings
* AccessLogSettings `object`: Access log settings, including the access log format and access log destination ARN.
  * destinationArn [String](#string)
  * format [String](#string)

### Account
* Account `object`: <p>Represents an AWS account that is associated with API Gateway.</p> <div class="remarks"> <p>To view the account info, call <code>GET</code> on this resource.</p> <h4>Error Codes</h4> <p>The following exception may be thrown when the request fails.</p> <ul> <li>UnauthorizedException</li> <li>NotFoundException</li> <li>TooManyRequestsException</li> </ul> <p>For detailed error code information, including the corresponding HTTP Status Codes, see <a href="http://docs.aws.amazon.com/apigateway/api-reference/handling-errors/#api-error-codes">API Gateway Error Codes</a></p> <h4>Example: Get the information about an account.</h4> <h5>Request</h5> <pre><code>GET /account HTTP/1.1 Content-Type: application/json Host: apigateway.us-east-1.amazonaws.com X-Amz-Date: 20160531T184618Z Authorization: AWS4-HMAC-SHA256 Credential={access_key_ID}/us-east-1/apigateway/aws4_request, SignedHeaders=content-type;host;x-amz-date, Signature={sig4_hash} </code></pre> <h5>Response</h5> <p>The successful response returns a <code>200 OK</code> status code and a payload similar to the following:</p> <pre><code>{ "_links": { "curies": { "href": "http://docs.aws.amazon.com/apigateway/latest/developerguide/account-apigateway-{rel}.html", "name": "account", "templated": true }, "self": { "href": "/account" }, "account:update": { "href": "/account" } }, "cloudwatchRoleArn": "arn:aws:iam::123456789012:role/apigAwsProxyRole", "throttleSettings": { "rateLimit": 500, "burstLimit": 1000 } } </code></pre> <p>In addition to making the REST API call directly, you can use the AWS CLI and an AWS SDK to access this resource.</p> </div> <div class="seeAlso"> <a href="http://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-limits.html">API Gateway Limits</a> <a href="http://docs.aws.amazon.com/apigateway/latest/developerguide/welcome.html">Developer Guide</a>, <a href="http://docs.aws.amazon.com/cli/latest/reference/apigateway/get-account.html">AWS CLI</a> </div>
  * apiKeyVersion [String](#string)
  * cloudwatchRoleArn [String](#string)
  * features [ListOfString](#listofstring)
  * throttleSettings [ThrottleSettings](#throttlesettings)

### ApiKey
* ApiKey `object`: <p>A resource that can be distributed to callers for executing <a>Method</a> resources that require an API key. API keys can be mapped to any <a>Stage</a> on any <a>RestApi</a>, which indicates that the callers with the API key can make requests to that stage.</p> <div class="seeAlso"> <a href="http://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-api-keys.html">Use API Keys</a> </div>
  * createdDate [Timestamp](#timestamp)
  * customerId [String](#string)
  * description [String](#string)
  * enabled [Boolean](#boolean)
  * id [String](#string)
  * lastUpdatedDate [Timestamp](#timestamp)
  * name [String](#string)
  * stageKeys [ListOfString](#listofstring)
  * value [String](#string)

### ApiKeyIds
* ApiKeyIds `object`: The identifier of an <a>ApiKey</a> used in a <a>UsagePlan</a>.
  * ids [ListOfString](#listofstring)
  * warnings [ListOfString](#listofstring)

### ApiKeySourceType
* ApiKeySourceType `string` (values: HEADER, AUTHORIZER)

### ApiKeys
* ApiKeys `object`: <p>Represents a collection of API keys as represented by an <a>ApiKeys</a> resource.</p> <div class="seeAlso"> <a href="http://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-api-keys.html">Use API Keys</a> </div>
  * items [ListOfApiKey](#listofapikey)
  * position [String](#string)
  * warnings [ListOfString](#listofstring)

### ApiKeysFormat
* ApiKeysFormat `string` (values: csv)

### ApiStage
* ApiStage `object`: API stage name of the associated API stage in a usage plan.
  * apiId [String](#string)
  * stage [String](#string)

### Authorizer
* Authorizer `object`: <p>Represents an authorization layer for methods. If enabled on a method, API Gateway will activate the authorizer when a client calls the method.</p> <div class="seeAlso"> <a href="http://docs.aws.amazon.com/apigateway/latest/developerguide/use-custom-authorizer.html">Enable custom authorization</a> </div>
  * authType [String](#string)
  * authorizerCredentials [String](#string)
  * authorizerResultTtlInSeconds [NullableInteger](#nullableinteger)
  * authorizerUri [String](#string)
  * id [String](#string)
  * identitySource [String](#string)
  * identityValidationExpression [String](#string)
  * name [String](#string)
  * providerARNs [ListOfARNs](#listofarns)
  * type [AuthorizerType](#authorizertype)

### AuthorizerType
* AuthorizerType `string` (values: TOKEN, REQUEST, COGNITO_USER_POOLS): [Required] The authorizer type. Valid values are <code>TOKEN</code> for a Lambda function using a single authorization token submitted in a custom header, <code>REQUEST</code> for a Lambda function using incoming request parameters, and <code>COGNITO_USER_POOLS</code> for using an Amazon Cognito user pool.

### Authorizers
* Authorizers `object`: <p>Represents a collection of <a>Authorizer</a> resources.</p> <div class="seeAlso"> <a href="http://docs.aws.amazon.com/apigateway/latest/developerguide/use-custom-authorizer.html">Enable custom authorization</a> </div>
  * items [ListOfAuthorizer](#listofauthorizer)
  * position [String](#string)

### BadRequestException
* BadRequestException `object`: The submitted request is not valid, for example, the input is incomplete or incorrect. See the accompanying error message for details.
  * message [String](#string)

### BasePathMapping
* BasePathMapping `object`: <p>Represents the base path that callers of the API must provide as part of the URL after the domain name.</p> <div class="remarks">A custom domain name plus a <code>BasePathMapping</code> specification identifies a deployed <a>RestApi</a> in a given stage of the owner <a>Account</a>.</div> <div class="seeAlso"> <a href="http://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-custom-domains.html">Use Custom Domain Names</a> </div>
  * basePath [String](#string)
  * restApiId [String](#string)
  * stage [String](#string)

### BasePathMappings
* BasePathMappings `object`: <p>Represents a collection of <a>BasePathMapping</a> resources.</p> <div class="seeAlso"> <a href="http://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-custom-domains.html">Use Custom Domain Names</a> </div>
  * items [ListOfBasePathMapping](#listofbasepathmapping)
  * position [String](#string)

### Blob
* Blob `string`

### Boolean
* Boolean `boolean`

### CacheClusterSize
* CacheClusterSize `string` (values: 0.5, 1.6, 6.1, 13.5, 28.4, 58.2, 118, 237): Returns the size of the <b>CacheCluster</b>.

### CacheClusterStatus
* CacheClusterStatus `string` (values: CREATE_IN_PROGRESS, AVAILABLE, DELETE_IN_PROGRESS, NOT_AVAILABLE, FLUSH_IN_PROGRESS): Returns the status of the <b>CacheCluster</b>.

### CanarySettings
* CanarySettings `object`: Configuration settings of a canary deployment.
  * deploymentId [String](#string)
  * percentTraffic [Double](#double)
  * stageVariableOverrides [MapOfStringToString](#mapofstringtostring)
  * useStageCache [Boolean](#boolean)

### ClientCertificate
* ClientCertificate `object`: <p>Represents a client certificate used to configure client-side SSL authentication while sending requests to the integration endpoint.</p> <div class="remarks">Client certificates are used to authenticate an API by the backend server. To authenticate an API client (or user), use IAM roles and policies, a custom <a>Authorizer</a> or an Amazon Cognito user pool.</div> <div class="seeAlso"> <a href="http://docs.aws.amazon.com/apigateway/latest/developerguide/getting-started-client-side-ssl-authentication.html">Use Client-Side Certificate</a> </div>
  * clientCertificateId [String](#string)
  * createdDate [Timestamp](#timestamp)
  * description [String](#string)
  * expirationDate [Timestamp](#timestamp)
  * pemEncodedCertificate [String](#string)

### ClientCertificates
* ClientCertificates `object`: <p>Represents a collection of <a>ClientCertificate</a> resources.</p> <div class="seeAlso"> <a href="http://docs.aws.amazon.com/apigateway/latest/developerguide/getting-started-client-side-ssl-authentication.html">Use Client-Side Certificate</a> </div>
  * items [ListOfClientCertificate](#listofclientcertificate)
  * position [String](#string)

### ConflictException
* ConflictException `object`: The request configuration has conflicts. For details, see the accompanying error message.
  * message [String](#string)

### ConnectionType
* ConnectionType `string` (values: INTERNET, VPC_LINK)

### ContentHandlingStrategy
* ContentHandlingStrategy `string` (values: CONVERT_TO_BINARY, CONVERT_TO_TEXT)

### CreateApiKeyRequest
* CreateApiKeyRequest `object`: Request to create an <a>ApiKey</a> resource.
  * customerId [String](#string)
  * description [String](#string)
  * enabled [Boolean](#boolean)
  * generateDistinctId [Boolean](#boolean)
  * name [String](#string)
  * stageKeys [ListOfStageKeys](#listofstagekeys)
  * value [String](#string)

### CreateAuthorizerRequest
* CreateAuthorizerRequest `object`: Request to add a new <a>Authorizer</a> to an existing <a>RestApi</a> resource.
  * authType [String](#string)
  * authorizerCredentials [String](#string)
  * authorizerResultTtlInSeconds [NullableInteger](#nullableinteger)
  * authorizerUri [String](#string)
  * identitySource [String](#string)
  * identityValidationExpression [String](#string)
  * name **required** [String](#string)
  * providerARNs [ListOfARNs](#listofarns)
  * type **required** [AuthorizerType](#authorizertype)

### CreateBasePathMappingRequest
* CreateBasePathMappingRequest `object`: Requests API Gateway to create a new <a>BasePathMapping</a> resource.
  * basePath [String](#string)
  * restApiId **required** [String](#string)
  * stage [String](#string)

### CreateDeploymentRequest
* CreateDeploymentRequest `object`: Requests API Gateway to create a <a>Deployment</a> resource.
  * cacheClusterEnabled [NullableBoolean](#nullableboolean)
  * cacheClusterSize [CacheClusterSize](#cacheclustersize)
  * canarySettings [DeploymentCanarySettings](#deploymentcanarysettings)
  * description [String](#string)
  * stageDescription [String](#string)
  * stageName [String](#string)
  * variables [MapOfStringToString](#mapofstringtostring)

### CreateDocumentationPartRequest
* CreateDocumentationPartRequest `object`: Creates a new documentation part of a given API.
  * location **required** [DocumentationPartLocation](#documentationpartlocation)
  * properties **required** [String](#string)

### CreateDocumentationVersionRequest
* CreateDocumentationVersionRequest `object`: Creates a new documentation version of a given API.
  * description [String](#string)
  * documentationVersion **required** [String](#string)
  * stageName [String](#string)

### CreateDomainNameRequest
* CreateDomainNameRequest `object`: A request to create a new domain name.
  * certificateArn [String](#string)
  * certificateBody [String](#string)
  * certificateChain [String](#string)
  * certificateName [String](#string)
  * certificatePrivateKey [String](#string)
  * domainName **required** [String](#string)
  * endpointConfiguration [EndpointConfiguration](#endpointconfiguration)
  * regionalCertificateArn [String](#string)
  * regionalCertificateName [String](#string)

### CreateModelRequest
* CreateModelRequest `object`: Request to add a new <a>Model</a> to an existing <a>RestApi</a> resource.
  * contentType **required** [String](#string)
  * description [String](#string)
  * name **required** [String](#string)
  * schema [String](#string)

### CreateRequestValidatorRequest
* CreateRequestValidatorRequest `object`: Creates a <a>RequestValidator</a> of a given <a>RestApi</a>.
  * name [String](#string)
  * validateRequestBody [Boolean](#boolean)
  * validateRequestParameters [Boolean](#boolean)

### CreateResourceRequest
* CreateResourceRequest `object`: Requests API Gateway to create a <a>Resource</a> resource.
  * pathPart **required** [String](#string)

### CreateRestApiRequest
* CreateRestApiRequest `object`: The POST Request to add a new <a>RestApi</a> resource to your collection.
  * apiKeySource [ApiKeySourceType](#apikeysourcetype)
  * binaryMediaTypes [ListOfString](#listofstring)
  * cloneFrom [String](#string)
  * description [String](#string)
  * endpointConfiguration [EndpointConfiguration](#endpointconfiguration)
  * minimumCompressionSize [NullableInteger](#nullableinteger)
  * name **required** [String](#string)
  * version [String](#string)

### CreateStageRequest
* CreateStageRequest `object`: Requests API Gateway to create a <a>Stage</a> resource.
  * cacheClusterEnabled [Boolean](#boolean)
  * cacheClusterSize [CacheClusterSize](#cacheclustersize)
  * canarySettings [CanarySettings](#canarysettings)
  * deploymentId **required** [String](#string)
  * description [String](#string)
  * documentationVersion [String](#string)
  * stageName **required** [String](#string)
  * tags [MapOfStringToString](#mapofstringtostring)
  * variables [MapOfStringToString](#mapofstringtostring)

### CreateUsagePlanKeyRequest
* CreateUsagePlanKeyRequest `object`: The POST request to create a usage plan key for adding an existing API key to a usage plan.
  * keyId **required** [String](#string)
  * keyType **required** [String](#string)

### CreateUsagePlanRequest
* CreateUsagePlanRequest `object`: The POST request to create a usage plan with the name, description, throttle limits and quota limits, as well as the associated API stages, specified in the payload.
  * apiStages [ListOfApiStage](#listofapistage)
  * description [String](#string)
  * name **required** [String](#string)
  * quota [QuotaSettings](#quotasettings)
  * throttle [ThrottleSettings](#throttlesettings)

### CreateVpcLinkRequest
* CreateVpcLinkRequest `object`: Creates a VPC link, under the caller's account in a selected region, in an asynchronous operation that typically takes 2-4 minutes to complete and become operational. The caller must have permissions to create and update VPC Endpoint services.
  * description [String](#string)
  * name **required** [String](#string)
  * targetArns **required** [ListOfString](#listofstring)

### DeleteApiKeyRequest
* DeleteApiKeyRequest `object`: A request to delete the <a>ApiKey</a> resource.

### DeleteAuthorizerRequest
* DeleteAuthorizerRequest `object`: Request to delete an existing <a>Authorizer</a> resource.

### DeleteBasePathMappingRequest
* DeleteBasePathMappingRequest `object`: A request to delete the <a>BasePathMapping</a> resource.

### DeleteClientCertificateRequest
* DeleteClientCertificateRequest `object`: A request to delete the <a>ClientCertificate</a> resource.

### DeleteDeploymentRequest
* DeleteDeploymentRequest `object`: Requests API Gateway to delete a <a>Deployment</a> resource.

### DeleteDocumentationPartRequest
* DeleteDocumentationPartRequest `object`: Deletes an existing documentation part of an API.

### DeleteDocumentationVersionRequest
* DeleteDocumentationVersionRequest `object`: Deletes an existing documentation version of an API.

### DeleteDomainNameRequest
* DeleteDomainNameRequest `object`: A request to delete the <a>DomainName</a> resource.

### DeleteGatewayResponseRequest
* DeleteGatewayResponseRequest `object`: Clears any customization of a <a>GatewayResponse</a> of a specified response type on the given <a>RestApi</a> and resets it with the default settings.

### DeleteIntegrationRequest
* DeleteIntegrationRequest `object`: Represents a delete integration request.

### DeleteIntegrationResponseRequest
* DeleteIntegrationResponseRequest `object`: Represents a delete integration response request.

### DeleteMethodRequest
* DeleteMethodRequest `object`: Request to delete an existing <a>Method</a> resource.

### DeleteMethodResponseRequest
* DeleteMethodResponseRequest `object`: A request to delete an existing <a>MethodResponse</a> resource.

### DeleteModelRequest
* DeleteModelRequest `object`: Request to delete an existing model in an existing <a>RestApi</a> resource.

### DeleteRequestValidatorRequest
* DeleteRequestValidatorRequest `object`: Deletes a specified <a>RequestValidator</a> of a given <a>RestApi</a>.

### DeleteResourceRequest
* DeleteResourceRequest `object`: Request to delete a <a>Resource</a>.

### DeleteRestApiRequest
* DeleteRestApiRequest `object`: Request to delete the specified API from your collection.

### DeleteStageRequest
* DeleteStageRequest `object`: Requests API Gateway to delete a <a>Stage</a> resource.

### DeleteUsagePlanKeyRequest
* DeleteUsagePlanKeyRequest `object`: The DELETE request to delete a usage plan key and remove the underlying API key from the associated usage plan.

### DeleteUsagePlanRequest
* DeleteUsagePlanRequest `object`: The DELETE request to delete a usage plan of a given plan Id.

### DeleteVpcLinkRequest
* DeleteVpcLinkRequest `object`: Deletes an existing <a>VpcLink</a> of a specified identifier.

### Deployment
* Deployment `object`: <p>An immutable representation of a <a>RestApi</a> resource that can be called by users using <a>Stages</a>. A deployment must be associated with a <a>Stage</a> for it to be callable over the Internet.</p> <div class="remarks">To create a deployment, call <code>POST</code> on the <a>Deployments</a> resource of a <a>RestApi</a>. To view, update, or delete a deployment, call <code>GET</code>, <code>PATCH</code>, or <code>DELETE</code> on the specified deployment resource (<code>/restapis/{restapi_id}/deployments/{deployment_id}</code>).</div> <div class="seeAlso"><a>RestApi</a>, <a>Deployments</a>, <a>Stage</a>, <a href="http://docs.aws.amazon.com/cli/latest/reference/apigateway/get-deployment.html">AWS CLI</a>, <a href="https://aws.amazon.com/tools/">AWS SDKs</a> </div>
  * apiSummary [PathToMapOfMethodSnapshot](#pathtomapofmethodsnapshot)
  * createdDate [Timestamp](#timestamp)
  * description [String](#string)
  * id [String](#string)

### DeploymentCanarySettings
* DeploymentCanarySettings `object`: The input configuration for a canary deployment.
  * percentTraffic [Double](#double)
  * stageVariableOverrides [MapOfStringToString](#mapofstringtostring)
  * useStageCache [Boolean](#boolean)

### Deployments
* Deployments `object`: <p>Represents a collection resource that contains zero or more references to your existing deployments, and links that guide you on how to interact with your collection. The collection offers a paginated view of the contained deployments.</p> <div class="remarks">To create a new deployment of a <a>RestApi</a>, make a <code>POST</code> request against this resource. To view, update, or delete an existing deployment, make a <code>GET</code>, <code>PATCH</code>, or <code>DELETE</code> request, respectively, on a specified <a>Deployment</a> resource.</div> <div class="seeAlso"> <a href="http://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-deploy-api.html">Deploying an API</a>, <a href="http://docs.aws.amazon.com/cli/latest/reference/apigateway/get-deployment.html">AWS CLI</a>, <a href="https://aws.amazon.com/tools/">AWS SDKs</a> </div>
  * items [ListOfDeployment](#listofdeployment)
  * position [String](#string)

### DocumentationPart
* DocumentationPart `object`: <p>A documentation part for a targeted API entity.</p> <div class="remarks"> <p>A documentation part consists of a content map (<code>properties</code>) and a target (<code>location</code>). The target specifies an API entity to which the documentation content applies. The supported API entity types are <code>API</code>, <code>AUTHORIZER</code>, <code>MODEL</code>, <code>RESOURCE</code>, <code>METHOD</code>, <code>PATH_PARAMETER</code>, <code>QUERY_PARAMETER</code>, <code>REQUEST_HEADER</code>, <code>REQUEST_BODY</code>, <code>RESPONSE</code>, <code>RESPONSE_HEADER</code>, and <code>RESPONSE_BODY</code>. Valid <code>location</code> fields depend on the API entity type. All valid fields are not required.</p> <p>The content map is a JSON string of API-specific key-value pairs. Although an API can use any shape for the content map, only the Swagger-compliant documentation fields will be injected into the associated API entity definition in the exported Swagger definition file.</p></div> <div class="seeAlso"> <a href="http://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-documenting-api.html">Documenting an API</a>, <a>DocumentationParts</a> </div>
  * id [String](#string)
  * location [DocumentationPartLocation](#documentationpartlocation)
  * properties [String](#string)

### DocumentationPartIds
* DocumentationPartIds `object`: <p>A collection of the imported <a>DocumentationPart</a> identifiers.</p> <div class="remarks">This is used to return the result when documentation parts in an external (e.g., Swagger) file are imported into API Gateway</div> <div class="seeAlso"> <a href="http://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-documenting-api.html">Documenting an API</a>, <a href="http://docs.aws.amazon.com/apigateway/api-reference/link-relation/documentationpart-import/">documentationpart:import</a>, <a>DocumentationPart</a> </div>
  * ids [ListOfString](#listofstring)
  * warnings [ListOfString](#listofstring)

### DocumentationPartLocation
* DocumentationPartLocation `object`: Specifies the target API entity to which the documentation applies.
  * method [String](#string)
  * name [String](#string)
  * path [String](#string)
  * statusCode [DocumentationPartLocationStatusCode](#documentationpartlocationstatuscode)
  * type **required** [DocumentationPartType](#documentationparttype)

### DocumentationPartLocationStatusCode
* DocumentationPartLocationStatusCode `string`

### DocumentationPartType
* DocumentationPartType `string` (values: API, AUTHORIZER, MODEL, RESOURCE, METHOD, PATH_PARAMETER, QUERY_PARAMETER, REQUEST_HEADER, REQUEST_BODY, RESPONSE, RESPONSE_HEADER, RESPONSE_BODY)

### DocumentationParts
* DocumentationParts `object`: <p>The collection of documentation parts of an API.</p> <div class="remarks"/> <div class="seeAlso"> <a href="http://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-documenting-api.html">Documenting an API</a>, <a>DocumentationPart</a> </div>
  * items [ListOfDocumentationPart](#listofdocumentationpart)
  * position [String](#string)

### DocumentationVersion
* DocumentationVersion `object`: <p>A snapshot of the documentation of an API.</p> <div class="remarks"><p>Publishing API documentation involves creating a documentation version associated with an API stage and exporting the versioned documentation to an external (e.g., Swagger) file.</p></div> <div class="seeAlso"> <a href="http://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-documenting-api.html">Documenting an API</a>, <a>DocumentationPart</a>, <a>DocumentationVersions</a> </div>
  * createdDate [Timestamp](#timestamp)
  * description [String](#string)
  * version [String](#string)

### DocumentationVersions
* DocumentationVersions `object`: <p>The collection of documentation snapshots of an API. </p> <div class="remarks"><p>Use the <a>DocumentationVersions</a> to manage documentation snapshots associated with various API stages.</p></div> <div class="seeAlso"> <a href="http://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-documenting-api.html">Documenting an API</a>, <a>DocumentationPart</a>, <a>DocumentationVersion</a> </div>
  * items [ListOfDocumentationVersion](#listofdocumentationversion)
  * position [String](#string)

### DomainName
* DomainName `object`: <p>Represents a custom domain name as a user-friendly host name of an API (<a>RestApi</a>).</p> <div class="Remarks"> <p>When you deploy an API, API Gateway creates a default host name for the API. This default API host name is of the <code>{restapi-id}.execute-api.{region}.amazonaws.com</code> format. With the default host name, you can access the API's root resource with the URL of <code>https://{restapi-id}.execute-api.{region}.amazonaws.com/{stage}/</code>. When you set up a custom domain name of <code>apis.example.com</code> for this API, you can then access the same resource using the URL of the <code>https://apis.examples.com/myApi</code>, where <code>myApi</code> is the base path mapping (<a>BasePathMapping</a>) of your API under the custom domain name. </p> </div> <div class="seeAlso"> <a href="http://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-custom-domains.html">Set a Custom Host Name for an API</a> </div>
  * certificateArn [String](#string)
  * certificateName [String](#string)
  * certificateUploadDate [Timestamp](#timestamp)
  * distributionDomainName [String](#string)
  * distributionHostedZoneId [String](#string)
  * domainName [String](#string)
  * endpointConfiguration [EndpointConfiguration](#endpointconfiguration)
  * regionalCertificateArn [String](#string)
  * regionalCertificateName [String](#string)
  * regionalDomainName [String](#string)
  * regionalHostedZoneId [String](#string)

### DomainNames
* DomainNames `object`: <p>Represents a collection of <a>DomainName</a> resources.</p> <div class="seeAlso"> <a href="http://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-custom-domains.html">Use Client-Side Certificate</a> </div>
  * items [ListOfDomainName](#listofdomainname)
  * position [String](#string)

### Double
* Double `number`

### EndpointConfiguration
* EndpointConfiguration `object`: The endpoint configuration to indicate the types of endpoints an API (<a>RestApi</a>) or its custom domain name (<a>DomainName</a>) has. 
  * types [ListOfEndpointType](#listofendpointtype)

### EndpointType
* EndpointType `string` (values: REGIONAL, EDGE): The endpoint type. The valid value is <code>EDGE</code> for edge-optimized API setup, most suitable for mobile applications, <code>REGIONAL</code> for regional API endpoint setup, most suitable for calling from AWS Region

### ExportResponse
* ExportResponse `object`: The binary blob response to <a>GetExport</a>, which contains the generated SDK.
  * body [Blob](#blob)

### FlushStageAuthorizersCacheRequest
* FlushStageAuthorizersCacheRequest `object`: Request to flush authorizer cache entries on a specified stage.

### FlushStageCacheRequest
* FlushStageCacheRequest `object`: Requests API Gateway to flush a stage's cache.

### GatewayResponse
* GatewayResponse `object`: <p>A gateway response of a given response type and status code, with optional response parameters and mapping templates.</p> <div class="remarks"> For more information about valid gateway response types, see <a href="http://docs.aws.amazon.com/apigateway/latest/developerguide/supported-gateway-response-types.html">Gateway Response Types Supported by API Gateway</a> <div class="example"> <h4>Example: Get a Gateway Response of a given response type</h4> <h5>Request</h5> <p>This example shows how to get a gateway response of the <code>MISSING_AUTHENTICATION_TOKEN</code> type.</p> <pre><code>GET /restapis/o81lxisefl/gatewayresponses/MISSING_AUTHENTICATION_TOKEN HTTP/1.1 Host: beta-apigateway.us-east-1.amazonaws.com Content-Type: application/json X-Amz-Date: 20170503T202516Z Authorization: AWS4-HMAC-SHA256 Credential={access-key-id}/20170503/us-east-1/apigateway/aws4_request, SignedHeaders=content-type;host;x-amz-date, Signature=1b52460e3159c1a26cff29093855d50ea141c1c5b937528fecaf60f51129697a Cache-Control: no-cache Postman-Token: 3b2a1ce9-c848-2e26-2e2f-9c2caefbed45 </code></pre> <p>The response type is specified as a URL path.</p> <h5>Response</h5> <p>The successful operation returns the <code>200 OK</code> status code and a payload similar to the following:</p> <pre><code>{ "_links": { "curies": { "href": "http://docs.aws.amazon.com/apigateway/latest/developerguide/restapi-gatewayresponse-{rel}.html", "name": "gatewayresponse", "templated": true }, "self": { "href": "/restapis/o81lxisefl/gatewayresponses/MISSING_AUTHENTICATION_TOKEN" }, "gatewayresponse:delete": { "href": "/restapis/o81lxisefl/gatewayresponses/MISSING_AUTHENTICATION_TOKEN" }, "gatewayresponse:put": { "href": "/restapis/o81lxisefl/gatewayresponses/{response_type}", "templated": true }, "gatewayresponse:update": { "href": "/restapis/o81lxisefl/gatewayresponses/MISSING_AUTHENTICATION_TOKEN" } }, "defaultResponse": false, "responseParameters": { "gatewayresponse.header.x-request-path": "method.request.path.petId", "gatewayresponse.header.Access-Control-Allow-Origin": "&apos;a.b.c&apos;", "gatewayresponse.header.x-request-query": "method.request.querystring.q", "gatewayresponse.header.x-request-header": "method.request.header.Accept" }, "responseTemplates": { "application/json": "{\n \"message\": $context.error.messageString,\n \"type\": \"$context.error.responseType\",\n \"stage\": \"$context.stage\",\n \"resourcePath\": \"$context.resourcePath\",\n \"stageVariables.a\": \"$stageVariables.a\",\n \"statusCode\": \"&apos;404&apos;\"\n}" }, "responseType": "MISSING_AUTHENTICATION_TOKEN", "statusCode": "404" }</code></pre> <p></p> </div> </div> <div class="seeAlso"> <a href="http://docs.aws.amazon.com/apigateway/latest/developerguide/customize-gateway-responses.html">Customize Gateway Responses</a> </div>
  * defaultResponse [Boolean](#boolean)
  * responseParameters [MapOfStringToString](#mapofstringtostring)
  * responseTemplates [MapOfStringToString](#mapofstringtostring)
  * responseType [GatewayResponseType](#gatewayresponsetype)
  * statusCode [StatusCode](#statuscode)

### GatewayResponseType
* GatewayResponseType `string` (values: DEFAULT_4XX, DEFAULT_5XX, RESOURCE_NOT_FOUND, UNAUTHORIZED, INVALID_API_KEY, ACCESS_DENIED, AUTHORIZER_FAILURE, AUTHORIZER_CONFIGURATION_ERROR, INVALID_SIGNATURE, EXPIRED_TOKEN, MISSING_AUTHENTICATION_TOKEN, INTEGRATION_FAILURE, INTEGRATION_TIMEOUT, API_CONFIGURATION_ERROR, UNSUPPORTED_MEDIA_TYPE, BAD_REQUEST_PARAMETERS, BAD_REQUEST_BODY, REQUEST_TOO_LARGE, THROTTLED, QUOTA_EXCEEDED)

### GatewayResponses
* GatewayResponses `object`: <p>The collection of the <a>GatewayResponse</a> instances of a <a>RestApi</a> as a <code>responseType</code>-to-<a>GatewayResponse</a> object map of key-value pairs. As such, pagination is not supported for querying this collection.</p> <div class="remarks"> For more information about valid gateway response types, see <a href="http://docs.aws.amazon.com/apigateway/latest/developerguide/supported-gateway-response-types.html">Gateway Response Types Supported by API Gateway</a> <div class="example"> <h4>Example: Get the collection of gateway responses of an API</h4> <h5>Request</h5> <p>This example request shows how to retrieve the <a>GatewayResponses</a> collection from an API.</p> <pre><code>GET /restapis/o81lxisefl/gatewayresponses HTTP/1.1 Host: beta-apigateway.us-east-1.amazonaws.com Content-Type: application/json X-Amz-Date: 20170503T220604Z Authorization: AWS4-HMAC-SHA256 Credential={access-key-id}/20170503/us-east-1/apigateway/aws4_request, SignedHeaders=content-type;host;x-amz-date, Signature=59b42fe54a76a5de8adf2c67baa6d39206f8e9ad49a1d77ccc6a5da3103a398a Cache-Control: no-cache Postman-Token: 5637af27-dc29-fc5c-9dfe-0645d52cb515 </code></pre> <p></p> <h5>Response</h5> <p>The successful operation returns the <code>200 OK</code> status code and a payload similar to the following:</p> <pre><code>{ "_links": { "curies": { "href": "http://docs.aws.amazon.com/apigateway/latest/developerguide/restapi-gatewayresponse-{rel}.html", "name": "gatewayresponse", "templated": true }, "self": { "href": "/restapis/o81lxisefl/gatewayresponses" }, "first": { "href": "/restapis/o81lxisefl/gatewayresponses" }, "gatewayresponse:by-type": { "href": "/restapis/o81lxisefl/gatewayresponses/{response_type}", "templated": true }, "item": [ { "href": "/restapis/o81lxisefl/gatewayresponses/INTEGRATION_FAILURE" }, { "href": "/restapis/o81lxisefl/gatewayresponses/RESOURCE_NOT_FOUND" }, { "href": "/restapis/o81lxisefl/gatewayresponses/REQUEST_TOO_LARGE" }, { "href": "/restapis/o81lxisefl/gatewayresponses/THROTTLED" }, { "href": "/restapis/o81lxisefl/gatewayresponses/UNSUPPORTED_MEDIA_TYPE" }, { "href": "/restapis/o81lxisefl/gatewayresponses/AUTHORIZER_CONFIGURATION_ERROR" }, { "href": "/restapis/o81lxisefl/gatewayresponses/DEFAULT_5XX" }, { "href": "/restapis/o81lxisefl/gatewayresponses/DEFAULT_4XX" }, { "href": "/restapis/o81lxisefl/gatewayresponses/BAD_REQUEST_PARAMETERS" }, { "href": "/restapis/o81lxisefl/gatewayresponses/BAD_REQUEST_BODY" }, { "href": "/restapis/o81lxisefl/gatewayresponses/EXPIRED_TOKEN" }, { "href": "/restapis/o81lxisefl/gatewayresponses/ACCESS_DENIED" }, { "href": "/restapis/o81lxisefl/gatewayresponses/INVALID_API_KEY" }, { "href": "/restapis/o81lxisefl/gatewayresponses/UNAUTHORIZED" }, { "href": "/restapis/o81lxisefl/gatewayresponses/API_CONFIGURATION_ERROR" }, { "href": "/restapis/o81lxisefl/gatewayresponses/QUOTA_EXCEEDED" }, { "href": "/restapis/o81lxisefl/gatewayresponses/INTEGRATION_TIMEOUT" }, { "href": "/restapis/o81lxisefl/gatewayresponses/MISSING_AUTHENTICATION_TOKEN" }, { "href": "/restapis/o81lxisefl/gatewayresponses/INVALID_SIGNATURE" }, { "href": "/restapis/o81lxisefl/gatewayresponses/AUTHORIZER_FAILURE" } ] }, "_embedded": { "item": [ { "_links": { "self": { "href": "/restapis/o81lxisefl/gatewayresponses/INTEGRATION_FAILURE" }, "gatewayresponse:put": { "href": "/restapis/o81lxisefl/gatewayresponses/{response_type}", "templated": true }, "gatewayresponse:update": { "href": "/restapis/o81lxisefl/gatewayresponses/INTEGRATION_FAILURE" } }, "defaultResponse": true, "responseParameters": {}, "responseTemplates": { "application/json": "{\"message\":$context.error.messageString}" }, "responseType": "INTEGRATION_FAILURE", "statusCode": "504" }, { "_links": { "self": { "href": "/restapis/o81lxisefl/gatewayresponses/RESOURCE_NOT_FOUND" }, "gatewayresponse:put": { "href": "/restapis/o81lxisefl/gatewayresponses/{response_type}", "templated": true }, "gatewayresponse:update": { "href": "/restapis/o81lxisefl/gatewayresponses/RESOURCE_NOT_FOUND" } }, "defaultResponse": true, "responseParameters": {}, "responseTemplates": { "application/json": "{\"message\":$context.error.messageString}" }, "responseType": "RESOURCE_NOT_FOUND", "statusCode": "404" }, { "_links": { "self": { "href": "/restapis/o81lxisefl/gatewayresponses/REQUEST_TOO_LARGE" }, "gatewayresponse:put": { "href": "/restapis/o81lxisefl/gatewayresponses/{response_type}", "templated": true }, "gatewayresponse:update": { "href": "/restapis/o81lxisefl/gatewayresponses/REQUEST_TOO_LARGE" } }, "defaultResponse": true, "responseParameters": {}, "responseTemplates": { "application/json": "{\"message\":$context.error.messageString}" }, "responseType": "REQUEST_TOO_LARGE", "statusCode": "413" }, { "_links": { "self": { "href": "/restapis/o81lxisefl/gatewayresponses/THROTTLED" }, "gatewayresponse:put": { "href": "/restapis/o81lxisefl/gatewayresponses/{response_type}", "templated": true }, "gatewayresponse:update": { "href": "/restapis/o81lxisefl/gatewayresponses/THROTTLED" } }, "defaultResponse": true, "responseParameters": {}, "responseTemplates": { "application/json": "{\"message\":$context.error.messageString}" }, "responseType": "THROTTLED", "statusCode": "429" }, { "_links": { "self": { "href": "/restapis/o81lxisefl/gatewayresponses/UNSUPPORTED_MEDIA_TYPE" }, "gatewayresponse:put": { "href": "/restapis/o81lxisefl/gatewayresponses/{response_type}", "templated": true }, "gatewayresponse:update": { "href": "/restapis/o81lxisefl/gatewayresponses/UNSUPPORTED_MEDIA_TYPE" } }, "defaultResponse": true, "responseParameters": {}, "responseTemplates": { "application/json": "{\"message\":$context.error.messageString}" }, "responseType": "UNSUPPORTED_MEDIA_TYPE", "statusCode": "415" }, { "_links": { "self": { "href": "/restapis/o81lxisefl/gatewayresponses/AUTHORIZER_CONFIGURATION_ERROR" }, "gatewayresponse:put": { "href": "/restapis/o81lxisefl/gatewayresponses/{response_type}", "templated": true }, "gatewayresponse:update": { "href": "/restapis/o81lxisefl/gatewayresponses/AUTHORIZER_CONFIGURATION_ERROR" } }, "defaultResponse": true, "responseParameters": {}, "responseTemplates": { "application/json": "{\"message\":$context.error.messageString}" }, "responseType": "AUTHORIZER_CONFIGURATION_ERROR", "statusCode": "500" }, { "_links": { "self": { "href": "/restapis/o81lxisefl/gatewayresponses/DEFAULT_5XX" }, "gatewayresponse:put": { "href": "/restapis/o81lxisefl/gatewayresponses/{response_type}", "templated": true }, "gatewayresponse:update": { "href": "/restapis/o81lxisefl/gatewayresponses/DEFAULT_5XX" } }, "defaultResponse": true, "responseParameters": {}, "responseTemplates": { "application/json": "{\"message\":$context.error.messageString}" }, "responseType": "DEFAULT_5XX" }, { "_links": { "self": { "href": "/restapis/o81lxisefl/gatewayresponses/DEFAULT_4XX" }, "gatewayresponse:put": { "href": "/restapis/o81lxisefl/gatewayresponses/{response_type}", "templated": true }, "gatewayresponse:update": { "href": "/restapis/o81lxisefl/gatewayresponses/DEFAULT_4XX" } }, "defaultResponse": true, "responseParameters": {}, "responseTemplates": { "application/json": "{\"message\":$context.error.messageString}" }, "responseType": "DEFAULT_4XX" }, { "_links": { "self": { "href": "/restapis/o81lxisefl/gatewayresponses/BAD_REQUEST_PARAMETERS" }, "gatewayresponse:put": { "href": "/restapis/o81lxisefl/gatewayresponses/{response_type}", "templated": true }, "gatewayresponse:update": { "href": "/restapis/o81lxisefl/gatewayresponses/BAD_REQUEST_PARAMETERS" } }, "defaultResponse": true, "responseParameters": {}, "responseTemplates": { "application/json": "{\"message\":$context.error.messageString}" }, "responseType": "BAD_REQUEST_PARAMETERS", "statusCode": "400" }, { "_links": { "self": { "href": "/restapis/o81lxisefl/gatewayresponses/BAD_REQUEST_BODY" }, "gatewayresponse:put": { "href": "/restapis/o81lxisefl/gatewayresponses/{response_type}", "templated": true }, "gatewayresponse:update": { "href": "/restapis/o81lxisefl/gatewayresponses/BAD_REQUEST_BODY" } }, "defaultResponse": true, "responseParameters": {}, "responseTemplates": { "application/json": "{\"message\":$context.error.messageString}" }, "responseType": "BAD_REQUEST_BODY", "statusCode": "400" }, { "_links": { "self": { "href": "/restapis/o81lxisefl/gatewayresponses/EXPIRED_TOKEN" }, "gatewayresponse:put": { "href": "/restapis/o81lxisefl/gatewayresponses/{response_type}", "templated": true }, "gatewayresponse:update": { "href": "/restapis/o81lxisefl/gatewayresponses/EXPIRED_TOKEN" } }, "defaultResponse": true, "responseParameters": {}, "responseTemplates": { "application/json": "{\"message\":$context.error.messageString}" }, "responseType": "EXPIRED_TOKEN", "statusCode": "403" }, { "_links": { "self": { "href": "/restapis/o81lxisefl/gatewayresponses/ACCESS_DENIED" }, "gatewayresponse:put": { "href": "/restapis/o81lxisefl/gatewayresponses/{response_type}", "templated": true }, "gatewayresponse:update": { "href": "/restapis/o81lxisefl/gatewayresponses/ACCESS_DENIED" } }, "defaultResponse": true, "responseParameters": {}, "responseTemplates": { "application/json": "{\"message\":$context.error.messageString}" }, "responseType": "ACCESS_DENIED", "statusCode": "403" }, { "_links": { "self": { "href": "/restapis/o81lxisefl/gatewayresponses/INVALID_API_KEY" }, "gatewayresponse:put": { "href": "/restapis/o81lxisefl/gatewayresponses/{response_type}", "templated": true }, "gatewayresponse:update": { "href": "/restapis/o81lxisefl/gatewayresponses/INVALID_API_KEY" } }, "defaultResponse": true, "responseParameters": {}, "responseTemplates": { "application/json": "{\"message\":$context.error.messageString}" }, "responseType": "INVALID_API_KEY", "statusCode": "403" }, { "_links": { "self": { "href": "/restapis/o81lxisefl/gatewayresponses/UNAUTHORIZED" }, "gatewayresponse:put": { "href": "/restapis/o81lxisefl/gatewayresponses/{response_type}", "templated": true }, "gatewayresponse:update": { "href": "/restapis/o81lxisefl/gatewayresponses/UNAUTHORIZED" } }, "defaultResponse": true, "responseParameters": {}, "responseTemplates": { "application/json": "{\"message\":$context.error.messageString}" }, "responseType": "UNAUTHORIZED", "statusCode": "401" }, { "_links": { "self": { "href": "/restapis/o81lxisefl/gatewayresponses/API_CONFIGURATION_ERROR" }, "gatewayresponse:put": { "href": "/restapis/o81lxisefl/gatewayresponses/{response_type}", "templated": true }, "gatewayresponse:update": { "href": "/restapis/o81lxisefl/gatewayresponses/API_CONFIGURATION_ERROR" } }, "defaultResponse": true, "responseParameters": {}, "responseTemplates": { "application/json": "{\"message\":$context.error.messageString}" }, "responseType": "API_CONFIGURATION_ERROR", "statusCode": "500" }, { "_links": { "self": { "href": "/restapis/o81lxisefl/gatewayresponses/QUOTA_EXCEEDED" }, "gatewayresponse:put": { "href": "/restapis/o81lxisefl/gatewayresponses/{response_type}", "templated": true }, "gatewayresponse:update": { "href": "/restapis/o81lxisefl/gatewayresponses/QUOTA_EXCEEDED" } }, "defaultResponse": true, "responseParameters": {}, "responseTemplates": { "application/json": "{\"message\":$context.error.messageString}" }, "responseType": "QUOTA_EXCEEDED", "statusCode": "429" }, { "_links": { "self": { "href": "/restapis/o81lxisefl/gatewayresponses/INTEGRATION_TIMEOUT" }, "gatewayresponse:put": { "href": "/restapis/o81lxisefl/gatewayresponses/{response_type}", "templated": true }, "gatewayresponse:update": { "href": "/restapis/o81lxisefl/gatewayresponses/INTEGRATION_TIMEOUT" } }, "defaultResponse": true, "responseParameters": {}, "responseTemplates": { "application/json": "{\"message\":$context.error.messageString}" }, "responseType": "INTEGRATION_TIMEOUT", "statusCode": "504" }, { "_links": { "self": { "href": "/restapis/o81lxisefl/gatewayresponses/MISSING_AUTHENTICATION_TOKEN" }, "gatewayresponse:put": { "href": "/restapis/o81lxisefl/gatewayresponses/{response_type}", "templated": true }, "gatewayresponse:update": { "href": "/restapis/o81lxisefl/gatewayresponses/MISSING_AUTHENTICATION_TOKEN" } }, "defaultResponse": true, "responseParameters": {}, "responseTemplates": { "application/json": "{\"message\":$context.error.messageString}" }, "responseType": "MISSING_AUTHENTICATION_TOKEN", "statusCode": "403" }, { "_links": { "self": { "href": "/restapis/o81lxisefl/gatewayresponses/INVALID_SIGNATURE" }, "gatewayresponse:put": { "href": "/restapis/o81lxisefl/gatewayresponses/{response_type}", "templated": true }, "gatewayresponse:update": { "href": "/restapis/o81lxisefl/gatewayresponses/INVALID_SIGNATURE" } }, "defaultResponse": true, "responseParameters": {}, "responseTemplates": { "application/json": "{\"message\":$context.error.messageString}" }, "responseType": "INVALID_SIGNATURE", "statusCode": "403" }, { "_links": { "self": { "href": "/restapis/o81lxisefl/gatewayresponses/AUTHORIZER_FAILURE" }, "gatewayresponse:put": { "href": "/restapis/o81lxisefl/gatewayresponses/{response_type}", "templated": true }, "gatewayresponse:update": { "href": "/restapis/o81lxisefl/gatewayresponses/AUTHORIZER_FAILURE" } }, "defaultResponse": true, "responseParameters": {}, "responseTemplates": { "application/json": "{\"message\":$context.error.messageString}" }, "responseType": "AUTHORIZER_FAILURE", "statusCode": "500" } ] } }</code></pre> <p></p> </div> </div> <div class="seeAlso"> <a href="http://docs.aws.amazon.com/apigateway/latest/developerguide/customize-gateway-responses.html">Customize Gateway Responses</a> </div>
  * items [ListOfGatewayResponse](#listofgatewayresponse)
  * position [String](#string)

### GenerateClientCertificateRequest
* GenerateClientCertificateRequest `object`: A request to generate a <a>ClientCertificate</a> resource.
  * description [String](#string)

### GetAccountRequest
* GetAccountRequest `object`: Requests API Gateway to get information about the current <a>Account</a> resource.

### GetApiKeyRequest
* GetApiKeyRequest `object`: A request to get information about the current <a>ApiKey</a> resource.

### GetApiKeysRequest
* GetApiKeysRequest `object`: A request to get information about the current <a>ApiKeys</a> resource.

### GetAuthorizerRequest
* GetAuthorizerRequest `object`: Request to describe an existing <a>Authorizer</a> resource.

### GetAuthorizersRequest
* GetAuthorizersRequest `object`: Request to describe an existing <a>Authorizers</a> resource.

### GetBasePathMappingRequest
* GetBasePathMappingRequest `object`: Request to describe a <a>BasePathMapping</a> resource.

### GetBasePathMappingsRequest
* GetBasePathMappingsRequest `object`: A request to get information about a collection of <a>BasePathMapping</a> resources.

### GetClientCertificateRequest
* GetClientCertificateRequest `object`: A request to get information about the current <a>ClientCertificate</a> resource.

### GetClientCertificatesRequest
* GetClientCertificatesRequest `object`: A request to get information about a collection of <a>ClientCertificate</a> resources.

### GetDeploymentRequest
* GetDeploymentRequest `object`: Requests API Gateway to get information about a <a>Deployment</a> resource.

### GetDeploymentsRequest
* GetDeploymentsRequest `object`: Requests API Gateway to get information about a <a>Deployments</a> collection.

### GetDocumentationPartRequest
* GetDocumentationPartRequest `object`: Gets a specified documentation part of a given API.

### GetDocumentationPartsRequest
* GetDocumentationPartsRequest `object`: Gets the documentation parts of an API. The result may be filtered by the type, name, or path of API entities (targets).

### GetDocumentationVersionRequest
* GetDocumentationVersionRequest `object`: Gets a documentation snapshot of an API.

### GetDocumentationVersionsRequest
* GetDocumentationVersionsRequest `object`: Gets the documentation versions of an API.

### GetDomainNameRequest
* GetDomainNameRequest `object`: Request to get the name of a <a>DomainName</a> resource.

### GetDomainNamesRequest
* GetDomainNamesRequest `object`: Request to describe a collection of <a>DomainName</a> resources.

### GetExportRequest
* GetExportRequest `object`: Request a new export of a <a>RestApi</a> for a particular <a>Stage</a>.

### GetGatewayResponseRequest
* GetGatewayResponseRequest `object`: Gets a <a>GatewayResponse</a> of a specified response type on the given <a>RestApi</a>.

### GetGatewayResponsesRequest
* GetGatewayResponsesRequest `object`: Gets the <a>GatewayResponses</a> collection on the given <a>RestApi</a>. If an API developer has not added any definitions for gateway responses, the result will be the API Gateway-generated default <a>GatewayResponses</a> collection for the supported response types.

### GetIntegrationRequest
* GetIntegrationRequest `object`: Represents a request to get the integration configuration.

### GetIntegrationResponseRequest
* GetIntegrationResponseRequest `object`: Represents a get integration response request.

### GetMethodRequest
* GetMethodRequest `object`: Request to describe an existing <a>Method</a> resource.

### GetMethodResponseRequest
* GetMethodResponseRequest `object`: Request to describe a <a>MethodResponse</a> resource.

### GetModelRequest
* GetModelRequest `object`: Request to list information about a model in an existing <a>RestApi</a> resource.

### GetModelTemplateRequest
* GetModelTemplateRequest `object`: Request to generate a sample mapping template used to transform the payload.

### GetModelsRequest
* GetModelsRequest `object`: Request to list existing <a>Models</a> defined for a <a>RestApi</a> resource.

### GetRequestValidatorRequest
* GetRequestValidatorRequest `object`: Gets a <a>RequestValidator</a> of a given <a>RestApi</a>.

### GetRequestValidatorsRequest
* GetRequestValidatorsRequest `object`: Gets the <a>RequestValidators</a> collection of a given <a>RestApi</a>.

### GetResourceRequest
* GetResourceRequest `object`: Request to list information about a resource.

### GetResourcesRequest
* GetResourcesRequest `object`: Request to list information about a collection of resources.

### GetRestApiRequest
* GetRestApiRequest `object`: The GET request to list an existing <a>RestApi</a> defined for your collection. 

### GetRestApisRequest
* GetRestApisRequest `object`: The GET request to list existing <a>RestApis</a> defined for your collection.

### GetSdkRequest
* GetSdkRequest `object`: Request a new generated client SDK for a <a>RestApi</a> and <a>Stage</a>.

### GetSdkTypeRequest
* GetSdkTypeRequest `object`: Get an <a>SdkType</a> instance.

### GetSdkTypesRequest
* GetSdkTypesRequest `object`: Get the <a>SdkTypes</a> collection.

### GetStageRequest
* GetStageRequest `object`: Requests API Gateway to get information about a <a>Stage</a> resource.

### GetStagesRequest
* GetStagesRequest `object`: Requests API Gateway to get information about one or more <a>Stage</a> resources.

### GetTagsRequest
* GetTagsRequest `object`: Gets the Tags collection for a given resource.

### GetUsagePlanKeyRequest
* GetUsagePlanKeyRequest `object`: The GET request to get a usage plan key of a given key identifier.

### GetUsagePlanKeysRequest
* GetUsagePlanKeysRequest `object`: The GET request to get all the usage plan keys representing the API keys added to a specified usage plan.

### GetUsagePlanRequest
* GetUsagePlanRequest `object`: The GET request to get a usage plan of a given plan identifier.

### GetUsagePlansRequest
* GetUsagePlansRequest `object`: The GET request to get all the usage plans of the caller's account.

### GetUsageRequest
* GetUsageRequest `object`: The GET request to get the usage data of a usage plan in a specified time interval.

### GetVpcLinkRequest
* GetVpcLinkRequest `object`: Gets a specified VPC link under the caller's account in a region.

### GetVpcLinksRequest
* GetVpcLinksRequest `object`: Gets the <a>VpcLinks</a> collection under the caller's account in a selected region.

### ImportApiKeysRequest
* ImportApiKeysRequest `object`: The POST request to import API keys from an external source, such as a CSV-formatted file.
  * body **required** [Blob](#blob)

### ImportDocumentationPartsRequest
* ImportDocumentationPartsRequest `object`: Import documentation parts from an external (e.g., Swagger) definition file. 
  * body **required** [Blob](#blob)

### ImportRestApiRequest
* ImportRestApiRequest `object`: A POST request to import an API to API Gateway using an input of an API definition file.
  * body **required** [Blob](#blob)

### Integer
* Integer `integer`

### Integration
* Integration `object`: <p>Represents an HTTP, HTTP_PROXY, AWS, AWS_PROXY, or Mock integration.</p> <div class="remarks">In the API Gateway console, the built-in Lambda integration is an AWS integration.</div> <div class="seeAlso"> <a href="http://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-create-api.html">Creating an API</a> </div>
  * cacheKeyParameters [ListOfString](#listofstring)
  * cacheNamespace [String](#string)
  * connectionId [String](#string)
  * connectionType [ConnectionType](#connectiontype)
  * contentHandling [ContentHandlingStrategy](#contenthandlingstrategy)
  * credentials [String](#string)
  * httpMethod [String](#string)
  * integrationResponses [MapOfIntegrationResponse](#mapofintegrationresponse)
  * passthroughBehavior [String](#string)
  * requestParameters [MapOfStringToString](#mapofstringtostring)
  * requestTemplates [MapOfStringToString](#mapofstringtostring)
  * timeoutInMillis [Integer](#integer)
  * type [IntegrationType](#integrationtype)
  * uri [String](#string)

### IntegrationResponse
* IntegrationResponse `object`: <p>Represents an integration response. The status code must map to an existing <a>MethodResponse</a>, and parameters and templates can be used to transform the back-end response.</p> <div class="seeAlso"> <a href="http://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-create-api.html">Creating an API</a> </div>
  * contentHandling [ContentHandlingStrategy](#contenthandlingstrategy)
  * responseParameters [MapOfStringToString](#mapofstringtostring)
  * responseTemplates [MapOfStringToString](#mapofstringtostring)
  * selectionPattern [String](#string)
  * statusCode [StatusCode](#statuscode)

### IntegrationType
* IntegrationType `string` (values: HTTP, AWS, MOCK, HTTP_PROXY, AWS_PROXY): The integration type. The valid value is <code>HTTP</code> for integrating an API method with an HTTP backend; <code>AWS</code> with any AWS service endpoints; <code>MOCK</code> for testing without actually invoking the backend; <code>HTTP_PROXY</code> for integrating with the HTTP proxy integration; <code>AWS_PROXY</code> for integrating with the Lambda proxy integration. 

### LimitExceededException
* LimitExceededException `object`: The request exceeded the rate limit. Retry after the specified time period.
  * message [String](#string)

### ListOfARNs
* ListOfARNs `array`
  * items [ProviderARN](#providerarn)

### ListOfApiKey
* ListOfApiKey `array`
  * items [ApiKey](#apikey)

### ListOfApiStage
* ListOfApiStage `array`
  * items [ApiStage](#apistage)

### ListOfAuthorizer
* ListOfAuthorizer `array`
  * items [Authorizer](#authorizer)

### ListOfBasePathMapping
* ListOfBasePathMapping `array`
  * items [BasePathMapping](#basepathmapping)

### ListOfClientCertificate
* ListOfClientCertificate `array`
  * items [ClientCertificate](#clientcertificate)

### ListOfDeployment
* ListOfDeployment `array`
  * items [Deployment](#deployment)

### ListOfDocumentationPart
* ListOfDocumentationPart `array`
  * items [DocumentationPart](#documentationpart)

### ListOfDocumentationVersion
* ListOfDocumentationVersion `array`
  * items [DocumentationVersion](#documentationversion)

### ListOfDomainName
* ListOfDomainName `array`
  * items [DomainName](#domainname)

### ListOfEndpointType
* ListOfEndpointType `array`
  * items [EndpointType](#endpointtype)

### ListOfGatewayResponse
* ListOfGatewayResponse `array`
  * items [GatewayResponse](#gatewayresponse)

### ListOfLong
* ListOfLong `array`
  * items [Long](#long)

### ListOfModel
* ListOfModel `array`
  * items [Model](#model)

### ListOfPatchOperation
* ListOfPatchOperation `array`: A list of operations describing the updates to apply to the specified resource. The patches are applied in the order specified in the list.
  * items [PatchOperation](#patchoperation)

### ListOfRequestValidator
* ListOfRequestValidator `array`
  * items [RequestValidator](#requestvalidator)

### ListOfResource
* ListOfResource `array`
  * items [Resource](#resource)

### ListOfRestApi
* ListOfRestApi `array`
  * items [RestApi](#restapi)

### ListOfSdkConfigurationProperty
* ListOfSdkConfigurationProperty `array`
  * items [SdkConfigurationProperty](#sdkconfigurationproperty)

### ListOfSdkType
* ListOfSdkType `array`
  * items [SdkType](#sdktype)

### ListOfStage
* ListOfStage `array`
  * items [Stage](#stage)

### ListOfStageKeys
* ListOfStageKeys `array`
  * items [StageKey](#stagekey)

### ListOfString
* ListOfString `array`
  * items [String](#string)

### ListOfUsage
* ListOfUsage `array`
  * items [ListOfLong](#listoflong)

### ListOfUsagePlan
* ListOfUsagePlan `array`
  * items [UsagePlan](#usageplan)

### ListOfUsagePlanKey
* ListOfUsagePlanKey `array`
  * items [UsagePlanKey](#usageplankey)

### ListOfVpcLink
* ListOfVpcLink `array`
  * items [VpcLink](#vpclink)

### LocationStatusType
* LocationStatusType `string` (values: DOCUMENTED, UNDOCUMENTED)

### Long
* Long `integer`

### MapOfHeaderValues
* MapOfHeaderValues `array`
  * items `object`
    * key [String](#string)
    * value [String](#string)

### MapOfIntegrationResponse
* MapOfIntegrationResponse `array`
  * items `object`
    * key [String](#string)
    * value [IntegrationResponse](#integrationresponse)

### MapOfKeyUsages
* MapOfKeyUsages `array`
  * items `object`
    * key [String](#string)
    * value [ListOfUsage](#listofusage)

### MapOfMethod
* MapOfMethod `array`
  * items `object`
    * key [String](#string)
    * value [Method](#method)

### MapOfMethodResponse
* MapOfMethodResponse `array`
  * items `object`
    * key [String](#string)
    * value [MethodResponse](#methodresponse)

### MapOfMethodSettings
* MapOfMethodSettings `array`
  * items `object`
    * key [String](#string)
    * value [MethodSetting](#methodsetting)

### MapOfMethodSnapshot
* MapOfMethodSnapshot `array`
  * items `object`
    * key [String](#string)
    * value [MethodSnapshot](#methodsnapshot)

### MapOfStringToBoolean
* MapOfStringToBoolean `array`
  * items `object`
    * key [String](#string)
    * value [NullableBoolean](#nullableboolean)

### MapOfStringToList
* MapOfStringToList `array`
  * items `object`
    * key [String](#string)
    * value [ListOfString](#listofstring)

### MapOfStringToString
* MapOfStringToString `array`
  * items `object`
    * key [String](#string)
    * value [String](#string)

### Method
* Method `object`: <p> Represents a client-facing interface by which the client calls the API to access back-end resources. A <b>Method</b> resource is integrated with an <a>Integration</a> resource. Both consist of a request and one or more responses. The method request takes the client input that is passed to the back end through the integration request. A method response returns the output from the back end to the client through an integration response. A method request is embodied in a <b>Method</b> resource, whereas an integration request is embodied in an <a>Integration</a> resource. On the other hand, a method response is represented by a <a>MethodResponse</a> resource, whereas an integration response is represented by an <a>IntegrationResponse</a> resource. </p> <div class="remarks"> <p/> <h4>Example: Retrive the GET method on a specified resource</h4> <h5>Request</h5> <p>The following example request retrieves the information about the GET method on an API resource (<code>3kzxbg5sa2</code>) of an API (<code>fugvjdxtri</code>). </p> <pre><code>GET /restapis/fugvjdxtri/resources/3kzxbg5sa2/methods/GET HTTP/1.1 Content-Type: application/json Host: apigateway.us-east-1.amazonaws.com X-Amz-Date: 20160603T210259Z Authorization: AWS4-HMAC-SHA256 Credential={access_key_ID}/20160603/us-east-1/apigateway/aws4_request, SignedHeaders=content-type;host;x-amz-date, Signature={sig4_hash}</code></pre> <h5>Response</h5> <p>The successful response returns a <code>200 OK</code> status code and a payload similar to the following:</p> <pre><code>{ "_links": { "curies": [ { "href": "http://docs.aws.amazon.com/apigateway/latest/developerguide/restapi-integration-{rel}.html", "name": "integration", "templated": true }, { "href": "http://docs.aws.amazon.com/apigateway/latest/developerguide/restapi-integration-response-{rel}.html", "name": "integrationresponse", "templated": true }, { "href": "http://docs.aws.amazon.com/apigateway/latest/developerguide/restapi-method-{rel}.html", "name": "method", "templated": true }, { "href": "http://docs.aws.amazon.com/apigateway/latest/developerguide/restapi-method-response-{rel}.html", "name": "methodresponse", "templated": true } ], "self": { "href": "/restapis/fugvjdxtri/resources/3kzxbg5sa2/methods/GET", "name": "GET", "title": "GET" }, "integration:put": { "href": "/restapis/fugvjdxtri/resources/3kzxbg5sa2/methods/GET/integration" }, "method:delete": { "href": "/restapis/fugvjdxtri/resources/3kzxbg5sa2/methods/GET" }, "method:integration": { "href": "/restapis/fugvjdxtri/resources/3kzxbg5sa2/methods/GET/integration" }, "method:responses": { "href": "/restapis/fugvjdxtri/resources/3kzxbg5sa2/methods/GET/responses/200", "name": "200", "title": "200" }, "method:update": { "href": "/restapis/fugvjdxtri/resources/3kzxbg5sa2/methods/GET" }, "methodresponse:put": { "href": "/restapis/fugvjdxtri/resources/3kzxbg5sa2/methods/GET/responses/{status_code}", "templated": true } }, "apiKeyRequired": true, "authorizationType": "NONE", "httpMethod": "GET", "_embedded": { "method:integration": { "_links": { "self": { "href": "/restapis/fugvjdxtri/resources/3kzxbg5sa2/methods/GET/integration" }, "integration:delete": { "href": "/restapis/fugvjdxtri/resources/3kzxbg5sa2/methods/GET/integration" }, "integration:responses": { "href": "/restapis/fugvjdxtri/resources/3kzxbg5sa2/methods/GET/integration/responses/200", "name": "200", "title": "200" }, "integration:update": { "href": "/restapis/fugvjdxtri/resources/3kzxbg5sa2/methods/GET/integration" }, "integrationresponse:put": { "href": "/restapis/fugvjdxtri/resources/3kzxbg5sa2/methods/GET/integration/responses/{status_code}", "templated": true } }, "cacheKeyParameters": [], "cacheNamespace": "3kzxbg5sa2", "credentials": "arn:aws:iam::123456789012:role/apigAwsProxyRole", "httpMethod": "POST", "passthroughBehavior": "WHEN_NO_MATCH", "requestParameters": { "integration.request.header.Content-Type": "'application/x-amz-json-1.1'" }, "requestTemplates": { "application/json": "{\n}" }, "type": "AWS", "uri": "arn:aws:apigateway:us-east-1:kinesis:action/ListStreams", "_embedded": { "integration:responses": { "_links": { "self": { "href": "/restapis/fugvjdxtri/resources/3kzxbg5sa2/methods/GET/integration/responses/200", "name": "200", "title": "200" }, "integrationresponse:delete": { "href": "/restapis/fugvjdxtri/resources/3kzxbg5sa2/methods/GET/integration/responses/200" }, "integrationresponse:update": { "href": "/restapis/fugvjdxtri/resources/3kzxbg5sa2/methods/GET/integration/responses/200" } }, "responseParameters": { "method.response.header.Content-Type": "'application/xml'" }, "responseTemplates": { "application/json": "$util.urlDecode(\"%3CkinesisStreams%3E%23foreach(%24stream%20in%20%24input.path(%27%24.StreamNames%27))%3Cstream%3E%3Cname%3E%24stream%3C%2Fname%3E%3C%2Fstream%3E%23end%3C%2FkinesisStreams%3E\")" }, "statusCode": "200" } } }, "method:responses": { "_links": { "self": { "href": "/restapis/fugvjdxtri/resources/3kzxbg5sa2/methods/GET/responses/200", "name": "200", "title": "200" }, "methodresponse:delete": { "href": "/restapis/fugvjdxtri/resources/3kzxbg5sa2/methods/GET/responses/200" }, "methodresponse:update": { "href": "/restapis/fugvjdxtri/resources/3kzxbg5sa2/methods/GET/responses/200" } }, "responseModels": { "application/json": "Empty" }, "responseParameters": { "method.response.header.Content-Type": false }, "statusCode": "200" } } }</code></pre> <p>In the example above, the response template for the <code>200 OK</code> response maps the JSON output from the <code>ListStreams</code> action in the back end to an XML output. The mapping template is URL-encoded as <code>%3CkinesisStreams%3E%23foreach(%24stream%20in%20%24input.path(%27%24.StreamNames%27))%3Cstream%3E%3Cname%3E%24stream%3C%2Fname%3E%3C%2Fstream%3E%23end%3C%2FkinesisStreams%3E</code> and the output is decoded using the <a href="http://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-mapping-template-reference.html#util-templat-reference">$util.urlDecode()</a> helper function.</p> </div> <div class="seeAlso"> <a>MethodResponse</a>, <a>Integration</a>, <a>IntegrationResponse</a>, <a>Resource</a>, <a href="http://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-method-settings.html">Set up an API's method</a> </div>
  * apiKeyRequired [NullableBoolean](#nullableboolean)
  * authorizationScopes [ListOfString](#listofstring)
  * authorizationType [String](#string)
  * authorizerId [String](#string)
  * httpMethod [String](#string)
  * methodIntegration [Integration](#integration)
  * methodResponses [MapOfMethodResponse](#mapofmethodresponse)
  * operationName [String](#string)
  * requestModels [MapOfStringToString](#mapofstringtostring)
  * requestParameters [MapOfStringToBoolean](#mapofstringtoboolean)
  * requestValidatorId [String](#string)

### MethodResponse
* MethodResponse `object`: <p>Represents a method response of a given HTTP status code returned to the client. The method response is passed from the back end through the associated integration response that can be transformed using a mapping template. </p> <div class="remarks"> <p/> <h4>Example: A <b>MethodResponse</b> instance of an API</h4> <h5>Request</h5> <p>The example request retrieves a <b>MethodResponse</b> of the 200 status code.</p> <pre><code>GET /restapis/fugvjdxtri/resources/3kzxbg5sa2/methods/GET/responses/200 HTTP/1.1 Content-Type: application/json Host: apigateway.us-east-1.amazonaws.com X-Amz-Date: 20160603T222952Z Authorization: AWS4-HMAC-SHA256 Credential={access_key_ID}/20160603/us-east-1/apigateway/aws4_request, SignedHeaders=content-type;host;x-amz-date, Signature={sig4_hash}</code></pre> <h5>Response</h5> <p>The successful response returns <code>200 OK</code> status and a payload as follows:</p> <pre><code>{ "_links": { "curies": { "href": "http://docs.aws.amazon.com/apigateway/latest/developerguide/restapi-method-response-{rel}.html", "name": "methodresponse", "templated": true }, "self": { "href": "/restapis/fugvjdxtri/resources/3kzxbg5sa2/methods/GET/responses/200", "title": "200" }, "methodresponse:delete": { "href": "/restapis/fugvjdxtri/resources/3kzxbg5sa2/methods/GET/responses/200" }, "methodresponse:update": { "href": "/restapis/fugvjdxtri/resources/3kzxbg5sa2/methods/GET/responses/200" } }, "responseModels": { "application/json": "Empty" }, "responseParameters": { "method.response.header.Content-Type": false }, "statusCode": "200" }</code></pre> <p/> </div> <div class="seeAlso"> <a>Method</a>, <a>IntegrationResponse</a>, <a>Integration</a> <a href="http://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-create-api.html">Creating an API</a> </div>
  * responseModels [MapOfStringToString](#mapofstringtostring)
  * responseParameters [MapOfStringToBoolean](#mapofstringtoboolean)
  * statusCode [StatusCode](#statuscode)

### MethodSetting
* MethodSetting `object`: Specifies the method setting properties.
  * cacheDataEncrypted [Boolean](#boolean)
  * cacheTtlInSeconds [Integer](#integer)
  * cachingEnabled [Boolean](#boolean)
  * dataTraceEnabled [Boolean](#boolean)
  * loggingLevel [String](#string)
  * metricsEnabled [Boolean](#boolean)
  * requireAuthorizationForCacheControl [Boolean](#boolean)
  * throttlingBurstLimit [Integer](#integer)
  * throttlingRateLimit [Double](#double)
  * unauthorizedCacheControlHeaderStrategy [UnauthorizedCacheControlHeaderStrategy](#unauthorizedcachecontrolheaderstrategy)

### MethodSnapshot
* MethodSnapshot `object`: Represents a summary of a <a>Method</a> resource, given a particular date and time.
  * apiKeyRequired [Boolean](#boolean)
  * authorizationType [String](#string)

### Model
* Model `object`: <p>Represents the data structure of a method's request or response payload.</p> <div class="remarks"> <p>A request model defines the data structure of the client-supplied request payload. A response model defines the data structure of the response payload returned by the back end. Although not required, models are useful for mapping payloads between the front end and back end.</p> <p>A model is used for generating an API's SDK, validating the input request body, and creating a skeletal mapping template.</p> </div> <div class="seeAlso"> <a>Method</a>, <a>MethodResponse</a>, <a href="http://docs.aws.amazon.com/apigateway/latest/developerguide/models-mappings.html">Models and Mappings</a> </div>
  * contentType [String](#string)
  * description [String](#string)
  * id [String](#string)
  * name [String](#string)
  * schema [String](#string)

### Models
* Models `object`: <p>Represents a collection of <a>Model</a> resources.</p> <div class="seeAlso"> <a>Method</a>, <a>MethodResponse</a>, <a href="http://docs.aws.amazon.com/apigateway/latest/developerguide/models-mappings.html">Models and Mappings</a> </div>
  * items [ListOfModel](#listofmodel)
  * position [String](#string)

### NotFoundException
* NotFoundException `object`: The requested resource is not found. Make sure that the request URI is correct.
  * message [String](#string)

### NullableBoolean
* NullableBoolean `boolean`

### NullableInteger
* NullableInteger `integer`

### Op
* Op `string` (values: add, remove, replace, move, copy, test)

### PatchOperation
* PatchOperation `object`: A single patch operation to apply to the specified resource. Please refer to http://tools.ietf.org/html/rfc6902#section-4 for an explanation of how each operation is used.
  * from [String](#string)
  * op [Op](#op)
  * path [String](#string)
  * value [String](#string)

### PathToMapOfMethodSnapshot
* PathToMapOfMethodSnapshot `array`
  * items `object`
    * key [String](#string)
    * value [MapOfMethodSnapshot](#mapofmethodsnapshot)

### ProviderARN
* ProviderARN `string`

### PutGatewayResponseRequest
* PutGatewayResponseRequest `object`: Creates a customization of a <a>GatewayResponse</a> of a specified response type and status code on the given <a>RestApi</a>.
  * responseParameters [MapOfStringToString](#mapofstringtostring)
  * responseTemplates [MapOfStringToString](#mapofstringtostring)
  * statusCode [StatusCode](#statuscode)

### PutIntegrationRequest
* PutIntegrationRequest `object`: Sets up a method's integration.
  * cacheKeyParameters [ListOfString](#listofstring)
  * cacheNamespace [String](#string)
  * connectionId [String](#string)
  * connectionType [ConnectionType](#connectiontype)
  * contentHandling [ContentHandlingStrategy](#contenthandlingstrategy)
  * credentials [String](#string)
  * integrationHttpMethod [String](#string)
  * passthroughBehavior [String](#string)
  * requestParameters [MapOfStringToString](#mapofstringtostring)
  * requestTemplates [MapOfStringToString](#mapofstringtostring)
  * timeoutInMillis [NullableInteger](#nullableinteger)
  * type **required** [IntegrationType](#integrationtype)
  * uri [String](#string)

### PutIntegrationResponseRequest
* PutIntegrationResponseRequest `object`: Represents a put integration response request.
  * contentHandling [ContentHandlingStrategy](#contenthandlingstrategy)
  * responseParameters [MapOfStringToString](#mapofstringtostring)
  * responseTemplates [MapOfStringToString](#mapofstringtostring)
  * selectionPattern [String](#string)

### PutMethodRequest
* PutMethodRequest `object`: Request to add a method to an existing <a>Resource</a> resource.
  * apiKeyRequired [Boolean](#boolean)
  * authorizationScopes [ListOfString](#listofstring)
  * authorizationType **required** [String](#string)
  * authorizerId [String](#string)
  * operationName [String](#string)
  * requestModels [MapOfStringToString](#mapofstringtostring)
  * requestParameters [MapOfStringToBoolean](#mapofstringtoboolean)
  * requestValidatorId [String](#string)

### PutMethodResponseRequest
* PutMethodResponseRequest `object`: Request to add a <a>MethodResponse</a> to an existing <a>Method</a> resource.
  * responseModels [MapOfStringToString](#mapofstringtostring)
  * responseParameters [MapOfStringToBoolean](#mapofstringtoboolean)

### PutMode
* PutMode `string` (values: merge, overwrite)

### PutRestApiRequest
* PutRestApiRequest `object`: A PUT request to update an existing API, with external API definitions specified as the request body.
  * body **required** [Blob](#blob)

### QuotaPeriodType
* QuotaPeriodType `string` (values: DAY, WEEK, MONTH)

### QuotaSettings
* QuotaSettings `object`: Quotas configured for a usage plan.
  * limit [Integer](#integer)
  * offset [Integer](#integer)
  * period [QuotaPeriodType](#quotaperiodtype)

### RequestValidator
* RequestValidator `object`: <p>A set of validation rules for incoming <a>Method</a> requests.</p> <div class="remarks"> <p>In Swagger, a <a>RequestValidator</a> of an API is defined by the <a href="http://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-swagger-extensions.html#api-gateway-swagger-extensions-request-validators.requestValidator.html">x-amazon-apigateway-request-validators.requestValidator</a> object. It the referenced using the <a href="http://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-swagger-extensions.html#api-gateway-swagger-extensions-request-validator">x-amazon-apigateway-request-validator</a> property.</p> </div> <div class="seeAlso"><a href="http://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-method-request-validation.html">Enable Basic Request Validation in API Gateway</a></div>
  * id [String](#string)
  * name [String](#string)
  * validateRequestBody [Boolean](#boolean)
  * validateRequestParameters [Boolean](#boolean)

### RequestValidators
* RequestValidators `object`: <p>A collection of <a>RequestValidator</a> resources of a given <a>RestApi</a>.</p> <div class="remarks"> <p>In Swagger, the <a>RequestValidators</a> of an API is defined by the <a href="http://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-swagger-extensions.html#api-gateway-swagger-extensions-request-validators.html">x-amazon-apigateway-request-validators</a> extension.</p> </div> <div class="seeAlso"><a href="http://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-method-request-validation.html">Enable Basic Request Validation in API Gateway</a></div>
  * items [ListOfRequestValidator](#listofrequestvalidator)
  * position [String](#string)

### Resource
* Resource `object`: <p>Represents an API resource.</p> <div class="seeAlso"> <a href="http://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-create-api.html">Create an API</a> </div>
  * id [String](#string)
  * parentId [String](#string)
  * path [String](#string)
  * pathPart [String](#string)
  * resourceMethods [MapOfMethod](#mapofmethod)

### Resources
* Resources `object`: <p>Represents a collection of <a>Resource</a> resources.</p> <div class="seeAlso"> <a href="http://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-create-api.html">Create an API</a> </div>
  * items [ListOfResource](#listofresource)
  * position [String](#string)

### RestApi
* RestApi `object`: <p>Represents a REST API.</p> <div class="seeAlso"> <a href="http://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-create-api.html">Create an API</a> </div>
  * apiKeySource [ApiKeySourceType](#apikeysourcetype)
  * binaryMediaTypes [ListOfString](#listofstring)
  * createdDate [Timestamp](#timestamp)
  * description [String](#string)
  * endpointConfiguration [EndpointConfiguration](#endpointconfiguration)
  * id [String](#string)
  * minimumCompressionSize [NullableInteger](#nullableinteger)
  * name [String](#string)
  * version [String](#string)
  * warnings [ListOfString](#listofstring)

### RestApis
* RestApis `object`: <p>Contains references to your APIs and links that guide you in how to interact with your collection. A collection offers a paginated view of your APIs.</p> <div class="seeAlso"> <a href="http://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-create-api.html">Create an API</a> </div>
  * items [ListOfRestApi](#listofrestapi)
  * position [String](#string)

### SdkConfigurationProperty
* SdkConfigurationProperty `object`: A configuration property of an SDK type.
  * defaultValue [String](#string)
  * description [String](#string)
  * friendlyName [String](#string)
  * name [String](#string)
  * required [Boolean](#boolean)

### SdkResponse
* SdkResponse `object`: The binary blob response to <a>GetSdk</a>, which contains the generated SDK.
  * body [Blob](#blob)

### SdkType
* SdkType `object`: A type of SDK that API Gateway can generate.
  * configurationProperties [ListOfSdkConfigurationProperty](#listofsdkconfigurationproperty)
  * description [String](#string)
  * friendlyName [String](#string)
  * id [String](#string)

### SdkTypes
* SdkTypes `object`: The collection of <a>SdkType</a> instances.
  * items [ListOfSdkType](#listofsdktype)
  * position [String](#string)

### ServiceUnavailableException
* ServiceUnavailableException `object`: The requested service is not available. For details see the accompanying error message. Retry after the specified time period.
  * message [String](#string)

### Stage
* Stage `object`: <p>Represents a unique identifier for a version of a deployed <a>RestApi</a> that is callable by users.</p> <div class="seeAlso"> <a href="http://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-deploy-api.html">Deploy an API</a> </div>
  * accessLogSettings [AccessLogSettings](#accesslogsettings)
  * cacheClusterEnabled [Boolean](#boolean)
  * cacheClusterSize [CacheClusterSize](#cacheclustersize)
  * cacheClusterStatus [CacheClusterStatus](#cacheclusterstatus)
  * canarySettings [CanarySettings](#canarysettings)
  * clientCertificateId [String](#string)
  * createdDate [Timestamp](#timestamp)
  * deploymentId [String](#string)
  * description [String](#string)
  * documentationVersion [String](#string)
  * lastUpdatedDate [Timestamp](#timestamp)
  * methodSettings [MapOfMethodSettings](#mapofmethodsettings)
  * stageName [String](#string)
  * tags [MapOfStringToString](#mapofstringtostring)
  * variables [MapOfStringToString](#mapofstringtostring)

### StageKey
* StageKey `object`: A reference to a unique stage identified in the format <code>{restApiId}/{stage}</code>.
  * restApiId [String](#string)
  * stageName [String](#string)

### Stages
* Stages `object`: <p>A list of <a>Stage</a> resources that are associated with the <a>ApiKey</a> resource.</p> <div class="seeAlso"><a href="http://docs.aws.amazon.com/apigateway/latest/developerguide/stages.html">Deploying API in Stages</a></div>
  * item [ListOfStage](#listofstage)

### StatusCode
* StatusCode `string`: The status code.

### String
* String `string`

### TagResourceRequest
* TagResourceRequest `object`: Adds or updates Tags on a gievn resource.
  * tags **required** [MapOfStringToString](#mapofstringtostring)

### Tags
* Tags `object`: A collection of Tags associated with a given resource.
  * tags [MapOfStringToString](#mapofstringtostring)

### Template
* Template `object`: <p>Represents a mapping template used to transform a payload.</p> <div class="seeAlso"> <a href="http://docs.aws.amazon.com/apigateway/latest/developerguide/models-mappings.html#models-mappings-mappings">Mapping Templates</a> </div>
  * value [String](#string)

### TestInvokeAuthorizerRequest
* TestInvokeAuthorizerRequest `object`: Make a request to simulate the execution of an <a>Authorizer</a>.
  * additionalContext [MapOfStringToString](#mapofstringtostring)
  * body [String](#string)
  * headers [MapOfHeaderValues](#mapofheadervalues)
  * pathWithQueryString [String](#string)
  * stageVariables [MapOfStringToString](#mapofstringtostring)

### TestInvokeAuthorizerResponse
* TestInvokeAuthorizerResponse `object`: Represents the response of the test invoke request for a custom <a>Authorizer</a>
  * authorization [MapOfStringToList](#mapofstringtolist)
  * claims [MapOfStringToString](#mapofstringtostring)
  * clientStatus [Integer](#integer)
  * latency [Long](#long)
  * log [String](#string)
  * policy [String](#string)
  * principalId [String](#string)

### TestInvokeMethodRequest
* TestInvokeMethodRequest `object`: Make a request to simulate the execution of a <a>Method</a>.
  * body [String](#string)
  * clientCertificateId [String](#string)
  * headers [MapOfHeaderValues](#mapofheadervalues)
  * pathWithQueryString [String](#string)
  * stageVariables [MapOfStringToString](#mapofstringtostring)

### TestInvokeMethodResponse
* TestInvokeMethodResponse `object`: <p>Represents the response of the test invoke request in the HTTP method.</p> <div class="seeAlso"> <a href="http://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-test-method.html#how-to-test-method-console">Test API using the API Gateway console</a> </div>
  * body [String](#string)
  * headers [MapOfHeaderValues](#mapofheadervalues)
  * latency [Long](#long)
  * log [String](#string)
  * status [Integer](#integer)

### ThrottleSettings
* ThrottleSettings `object`:  The API request rate limits.
  * burstLimit [Integer](#integer)
  * rateLimit [Double](#double)

### Timestamp
* Timestamp `string`

### TooManyRequestsException
* TooManyRequestsException `object`: The request has reached its throttling limit. Retry after the specified time period.
  * message [String](#string)

### UnauthorizedCacheControlHeaderStrategy
* UnauthorizedCacheControlHeaderStrategy `string` (values: FAIL_WITH_403, SUCCEED_WITH_RESPONSE_HEADER, SUCCEED_WITHOUT_RESPONSE_HEADER)

### UnauthorizedException
* UnauthorizedException `object`: The request is denied because the caller has insufficient permissions.
  * message [String](#string)

### UntagResourceRequest
* UntagResourceRequest `object`: Removes Tags from a given resource.

### UpdateAccountRequest
* UpdateAccountRequest `object`: Requests API Gateway to change information about the current <a>Account</a> resource.
  * patchOperations [ListOfPatchOperation](#listofpatchoperation)

### UpdateApiKeyRequest
* UpdateApiKeyRequest `object`: A request to change information about an <a>ApiKey</a> resource.
  * patchOperations [ListOfPatchOperation](#listofpatchoperation)

### UpdateAuthorizerRequest
* UpdateAuthorizerRequest `object`: Request to update an existing <a>Authorizer</a> resource.
  * patchOperations [ListOfPatchOperation](#listofpatchoperation)

### UpdateBasePathMappingRequest
* UpdateBasePathMappingRequest `object`: A request to change information about the <a>BasePathMapping</a> resource.
  * patchOperations [ListOfPatchOperation](#listofpatchoperation)

### UpdateClientCertificateRequest
* UpdateClientCertificateRequest `object`: A request to change information about an <a>ClientCertificate</a> resource.
  * patchOperations [ListOfPatchOperation](#listofpatchoperation)

### UpdateDeploymentRequest
* UpdateDeploymentRequest `object`: Requests API Gateway to change information about a <a>Deployment</a> resource.
  * patchOperations [ListOfPatchOperation](#listofpatchoperation)

### UpdateDocumentationPartRequest
* UpdateDocumentationPartRequest `object`: Updates an existing documentation part of a given API.
  * patchOperations [ListOfPatchOperation](#listofpatchoperation)

### UpdateDocumentationVersionRequest
* UpdateDocumentationVersionRequest `object`: Updates an existing documentation version of an API.
  * patchOperations [ListOfPatchOperation](#listofpatchoperation)

### UpdateDomainNameRequest
* UpdateDomainNameRequest `object`: A request to change information about the <a>DomainName</a> resource.
  * patchOperations [ListOfPatchOperation](#listofpatchoperation)

### UpdateGatewayResponseRequest
* UpdateGatewayResponseRequest `object`: Updates a <a>GatewayResponse</a> of a specified response type on the given <a>RestApi</a>.
  * patchOperations [ListOfPatchOperation](#listofpatchoperation)

### UpdateIntegrationRequest
* UpdateIntegrationRequest `object`: Represents an update integration request.
  * patchOperations [ListOfPatchOperation](#listofpatchoperation)

### UpdateIntegrationResponseRequest
* UpdateIntegrationResponseRequest `object`: Represents an update integration response request.
  * patchOperations [ListOfPatchOperation](#listofpatchoperation)

### UpdateMethodRequest
* UpdateMethodRequest `object`: Request to update an existing <a>Method</a> resource.
  * patchOperations [ListOfPatchOperation](#listofpatchoperation)

### UpdateMethodResponseRequest
* UpdateMethodResponseRequest `object`: A request to update an existing <a>MethodResponse</a> resource.
  * patchOperations [ListOfPatchOperation](#listofpatchoperation)

### UpdateModelRequest
* UpdateModelRequest `object`: Request to update an existing model in an existing <a>RestApi</a> resource.
  * patchOperations [ListOfPatchOperation](#listofpatchoperation)

### UpdateRequestValidatorRequest
* UpdateRequestValidatorRequest `object`: Updates a <a>RequestValidator</a> of a given <a>RestApi</a>.
  * patchOperations [ListOfPatchOperation](#listofpatchoperation)

### UpdateResourceRequest
* UpdateResourceRequest `object`: Request to change information about a <a>Resource</a> resource.
  * patchOperations [ListOfPatchOperation](#listofpatchoperation)

### UpdateRestApiRequest
* UpdateRestApiRequest `object`: Request to update an existing <a>RestApi</a> resource in your collection.
  * patchOperations [ListOfPatchOperation](#listofpatchoperation)

### UpdateStageRequest
* UpdateStageRequest `object`: Requests API Gateway to change information about a <a>Stage</a> resource.
  * patchOperations [ListOfPatchOperation](#listofpatchoperation)

### UpdateUsagePlanRequest
* UpdateUsagePlanRequest `object`: The PATCH request to update a usage plan of a given plan Id.
  * patchOperations [ListOfPatchOperation](#listofpatchoperation)

### UpdateUsageRequest
* UpdateUsageRequest `object`: The PATCH request to grant a temporary extension to the remaining quota of a usage plan associated with a specified API key.
  * patchOperations [ListOfPatchOperation](#listofpatchoperation)

### UpdateVpcLinkRequest
* UpdateVpcLinkRequest `object`: Updates an existing <a>VpcLink</a> of a specified identifier.
  * patchOperations [ListOfPatchOperation](#listofpatchoperation)

### Usage
* Usage `object`: <p>Represents the usage data of a usage plan.</p> <div class="remarks"/> <div class="seeAlso"> <a href="http://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-api-usage-plans.html">Create and Use Usage Plans</a>, <a href="http://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-create-usage-plans-with-console.html#api-gateway-usage-plan-manage-usage">Manage Usage in a Usage Plan</a> </div>
  * endDate [String](#string)
  * items [MapOfKeyUsages](#mapofkeyusages)
  * position [String](#string)
  * startDate [String](#string)
  * usagePlanId [String](#string)

### UsagePlan
* UsagePlan `object`: <p>Represents a usage plan than can specify who can assess associated API stages with specified request limits and quotas.</p> <div class="remarks"> <p>In a usage plan, you associate an API by specifying the API's Id and a stage name of the specified API. You add plan customers by adding API keys to the plan. </p> </div> <div class="seeAlso"> <a href="http://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-api-usage-plans.html">Create and Use Usage Plans</a> </div>
  * apiStages [ListOfApiStage](#listofapistage)
  * description [String](#string)
  * id [String](#string)
  * name [String](#string)
  * productCode [String](#string)
  * quota [QuotaSettings](#quotasettings)
  * throttle [ThrottleSettings](#throttlesettings)

### UsagePlanKey
* UsagePlanKey `object`: <p>Represents a usage plan key to identify a plan customer.</p> <div class="remarks"> <p>To associate an API stage with a selected API key in a usage plan, you must create a UsagePlanKey resource to represent the selected <a>ApiKey</a>.</p> </div>" <div class="seeAlso"> <a href="http://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-api-usage-plans.html">Create and Use Usage Plans</a> </div>
  * id [String](#string)
  * name [String](#string)
  * type [String](#string)
  * value [String](#string)

### UsagePlanKeys
* UsagePlanKeys `object`: <p>Represents the collection of usage plan keys added to usage plans for the associated API keys and, possibly, other types of keys.</p> <div class="seeAlso"> <a href="http://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-api-usage-plans.html">Create and Use Usage Plans</a> </div>
  * items [ListOfUsagePlanKey](#listofusageplankey)
  * position [String](#string)

### UsagePlans
* UsagePlans `object`: <p>Represents a collection of usage plans for an AWS account.</p> <div class="seeAlso"> <a href="http://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-api-usage-plans.html">Create and Use Usage Plans</a> </div>
  * items [ListOfUsagePlan](#listofusageplan)
  * position [String](#string)

### VpcLink
* VpcLink `object`: <p>A API Gateway VPC link for a <a>RestApi</a> to access resources in an Amazon Virtual Private Cloud (VPC).</p> <div class="remarks"> <p><p>To enable access to a resource in an Amazon Virtual Private Cloud through Amazon API Gateway, you, as an API developer, create a <a>VpcLink</a> resource targeted for one or more network load balancers of the VPC and then integrate an API method with a private integration that uses the <a>VpcLink</a>. The private integration has an integration type of <code>HTTP</code> or <code>HTTP_PROXY</code> and has a connection type of <code>VPC_LINK</code>. The integration uses the <code>connectionId</code> property to identify the <a>VpcLink</a> used.</p> </p> </div>
  * description [String](#string)
  * id [String](#string)
  * name [String](#string)
  * status [VpcLinkStatus](#vpclinkstatus)
  * statusMessage [String](#string)
  * targetArns [ListOfString](#listofstring)

### VpcLinkStatus
* VpcLinkStatus `string` (values: AVAILABLE, PENDING, DELETING, FAILED)

### VpcLinks
* VpcLinks `object`: <p>The collection of VPC links under the caller's account in a region.</p> <div class="seeAlso"> <a href="http://docs.aws.amazon.com/apigateway/latest/developerguide/getting-started-with-private-integration.html">Getting Started with Private Integrations</a>, <a href="http://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-private-integration.html">Set up Private Integrations</a> </div>
  * items [ListOfVpcLink](#listofvpclink)
  * position [String](#string)


