# @datafire/amazonaws_apigateway

Client library for Amazon API Gateway

## Installation and Usage
```bash
npm install --save datafire @datafire/amazonaws_apigateway
```

```js
let datafire = require('datafire');
let amazonaws_apigateway = require('@datafire/amazonaws_apigateway').actions;
let context = new datafire.Context();

amazonaws_apigateway.UpdateAccount({}, context).then(data => {
  console.log(data);
})
```

## Description
<fullname>Amazon API Gateway</fullname> <p>Amazon API Gateway helps developers deliver robust, secure, and scalable mobile and web application back ends. Amazon API Gateway allows developers to securely connect mobile and web applications to APIs that run on AWS Lambda, Amazon EC2, or other publicly addressable web services that are hosted outside of AWS.</p>

## Actions
### UpdateAccount



```js
amazonaws_apigateway.UpdateAccount({}, context)
```

#### Parameters

### GetApiKeys



```js
amazonaws_apigateway.GetApiKeys({}, context)
```

#### Parameters
* limit (string)
* position (string)

### UpdateApiKey



```js
amazonaws_apigateway.UpdateApiKey({
  "api_Key": null
}, context)
```

#### Parameters
* apiKey (string)

### ImportApiKeys



```js
amazonaws_apigateway.ImportApiKeys({}, context)
```

#### Parameters

### GetClientCertificates



```js
amazonaws_apigateway.GetClientCertificates({}, context)
```

#### Parameters
* limit (string)
* position (string)

### UpdateClientCertificate



```js
amazonaws_apigateway.UpdateClientCertificate({
  "clientcertificate_id": null
}, context)
```

#### Parameters
* clientcertificateId (string)

### GetDomainNames



```js
amazonaws_apigateway.GetDomainNames({}, context)
```

#### Parameters
* limit (string)
* position (string)

### UpdateDomainName



```js
amazonaws_apigateway.UpdateDomainName({
  "domain_name": null
}, context)
```

#### Parameters
* domainName (string)

### GetBasePathMappings



```js
amazonaws_apigateway.GetBasePathMappings({
  "domain_name": null
}, context)
```

#### Parameters
* limit (string)
* position (string)
* domainName (string)

### UpdateBasePathMapping



```js
amazonaws_apigateway.UpdateBasePathMapping({
  "domain_name": null,
  "base_path": null
}, context)
```

#### Parameters
* domainName (string)
* basePath (string)

### GetRestApis



```js
amazonaws_apigateway.GetRestApis({}, context)
```

#### Parameters
* limit (string)
* position (string)

### UpdateRestApi



```js
amazonaws_apigateway.UpdateRestApi({
  "restapi_id": null
}, context)
```

#### Parameters
* restapiId (string)

### GetAuthorizers



```js
amazonaws_apigateway.GetAuthorizers({
  "restapi_id": null
}, context)
```

#### Parameters
* restapiId (string)

### UpdateAuthorizer



```js
amazonaws_apigateway.UpdateAuthorizer({
  "restapi_id": null,
  "authorizer_id": null
}, context)
```

#### Parameters
* restapiId (string)
* authorizerId (string)

### GetDeployments



```js
amazonaws_apigateway.GetDeployments({
  "restapi_id": null
}, context)
```

#### Parameters
* limit (string)
* position (string)
* restapiId (string)

### UpdateDeployment



```js
amazonaws_apigateway.UpdateDeployment({
  "restapi_id": null,
  "deployment_id": null
}, context)
```

#### Parameters
* restapiId (string)
* deploymentId (string)

### ImportDocumentationParts



```js
amazonaws_apigateway.ImportDocumentationParts({
  "restapi_id": null
}, context)
```

#### Parameters
* restapiId (string)

### UpdateDocumentationPart



```js
amazonaws_apigateway.UpdateDocumentationPart({
  "restapi_id": null,
  "part_id": null
}, context)
```

#### Parameters
* restapiId (string)
* partId (string)

### GetDocumentationVersions



```js
amazonaws_apigateway.GetDocumentationVersions({
  "restapi_id": null
}, context)
```

#### Parameters
* restapiId (string)

### UpdateDocumentationVersion



```js
amazonaws_apigateway.UpdateDocumentationVersion({
  "restapi_id": null,
  "doc_version": null
}, context)
```

#### Parameters
* restapiId (string)
* docVersion (string)

### GetModels



```js
amazonaws_apigateway.GetModels({
  "restapi_id": null
}, context)
```

#### Parameters
* limit (string)
* position (string)
* restapiId (string)

### UpdateModel



```js
amazonaws_apigateway.UpdateModel({
  "restapi_id": null,
  "model_name": null
}, context)
```

#### Parameters
* restapiId (string)
* modelName (string)

### GetModelTemplate



```js
amazonaws_apigateway.GetModelTemplate({
  "restapi_id": null,
  "model_name": null
}, context)
```

#### Parameters
* restapiId (string)
* modelName (string)

### GetRequestValidators



```js
amazonaws_apigateway.GetRequestValidators({
  "restapi_id": null
}, context)
```

#### Parameters
* restapiId (string)

### UpdateRequestValidator



```js
amazonaws_apigateway.UpdateRequestValidator({
  "restapi_id": null,
  "requestvalidator_id": null
}, context)
```

#### Parameters
* restapiId (string)
* requestvalidatorId (string)

### GetResources



```js
amazonaws_apigateway.GetResources({
  "restapi_id": null
}, context)
```

#### Parameters
* limit (string)
* position (string)
* restapiId (string)

### CreateResource



```js
amazonaws_apigateway.CreateResource({
  "restapi_id": null,
  "parent_id": null
}, context)
```

#### Parameters
* restapiId (string)
* parentId (string)

### UpdateResource



```js
amazonaws_apigateway.UpdateResource({
  "restapi_id": null,
  "resource_id": null
}, context)
```

#### Parameters
* restapiId (string)
* resourceId (string)

### UpdateMethod



```js
amazonaws_apigateway.UpdateMethod({
  "restapi_id": null,
  "resource_id": null,
  "http_method": null
}, context)
```

#### Parameters
* restapiId (string)
* resourceId (string)
* httpMethod (string)

### UpdateIntegration



```js
amazonaws_apigateway.UpdateIntegration({
  "restapi_id": null,
  "resource_id": null,
  "http_method": null
}, context)
```

#### Parameters
* restapiId (string)
* resourceId (string)
* httpMethod (string)

### UpdateIntegrationResponse



```js
amazonaws_apigateway.UpdateIntegrationResponse({
  "restapi_id": null,
  "resource_id": null,
  "http_method": null,
  "status_code": null
}, context)
```

#### Parameters
* restapiId (string)
* resourceId (string)
* httpMethod (string)
* statusCode (string)

### UpdateMethodResponse



```js
amazonaws_apigateway.UpdateMethodResponse({
  "restapi_id": null,
  "resource_id": null,
  "http_method": null,
  "status_code": null
}, context)
```

#### Parameters
* restapiId (string)
* resourceId (string)
* httpMethod (string)
* statusCode (string)

### GetStages



```js
amazonaws_apigateway.GetStages({
  "restapi_id": null
}, context)
```

#### Parameters
* restapiId (string)

### UpdateStage



```js
amazonaws_apigateway.UpdateStage({
  "restapi_id": null,
  "stage_name": null
}, context)
```

#### Parameters
* restapiId (string)
* stageName (string)

### FlushStageAuthorizersCache



```js
amazonaws_apigateway.FlushStageAuthorizersCache({
  "restapi_id": null,
  "stage_name": null
}, context)
```

#### Parameters
* restapiId (string)
* stageName (string)

### FlushStageCache



```js
amazonaws_apigateway.FlushStageCache({
  "restapi_id": null,
  "stage_name": null
}, context)
```

#### Parameters
* restapiId (string)
* stageName (string)

### GetExport



```js
amazonaws_apigateway.GetExport({
  "restapi_id": null,
  "stage_name": null,
  "export_type": null
}, context)
```

#### Parameters
* restapiId (string)
* stageName (string)
* exportType (string)

### GetSdk



```js
amazonaws_apigateway.GetSdk({
  "restapi_id": null,
  "stage_name": null,
  "sdk_type": null
}, context)
```

#### Parameters
* restapiId (string)
* stageName (string)
* sdkType (string)

### ImportRestApi



```js
amazonaws_apigateway.ImportRestApi({}, context)
```

#### Parameters

### GetSdkTypes



```js
amazonaws_apigateway.GetSdkTypes({}, context)
```

#### Parameters

### GetSdkType



```js
amazonaws_apigateway.GetSdkType({
  "sdktype_id": null
}, context)
```

#### Parameters
* sdktypeId (string)

### GetUsagePlans



```js
amazonaws_apigateway.GetUsagePlans({}, context)
```

#### Parameters
* limit (string)
* position (string)

### UpdateUsagePlan



```js
amazonaws_apigateway.UpdateUsagePlan({
  "usageplanId": ""
}, context)
```

#### Parameters
* usageplanId (string) **required**

### GetUsagePlanKeys



```js
amazonaws_apigateway.GetUsagePlanKeys({
  "usageplanId": ""
}, context)
```

#### Parameters
* limit (string)
* position (string)
* usageplanId (string) **required**

### GetUsagePlanKey



```js
amazonaws_apigateway.GetUsagePlanKey({
  "usageplanId": "",
  "keyId": ""
}, context)
```

#### Parameters
* usageplanId (string) **required**
* keyId (string) **required**

### UpdateUsage



```js
amazonaws_apigateway.UpdateUsage({
  "usageplanId": "",
  "keyId": ""
}, context)
```

#### Parameters
* usageplanId (string) **required**
* keyId (string) **required**

### GetUsage



```js
amazonaws_apigateway.GetUsage({
  "usageplanId": ""
}, context)
```

#### Parameters
* limit (string)
* position (string)
* usageplanId (string) **required**

