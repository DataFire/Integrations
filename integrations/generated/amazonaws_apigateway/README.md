# @datafire/amazonaws_apigateway

Client library for Amazon API Gateway

## Installation and Usage
```bash
npm install --save datafire @datafire/amazonaws_apigateway
```

```js
let datafire = require('datafire');
let amazonaws_apigateway = require('@datafire/amazonaws_apigateway').create();

amazonaws_apigateway.UpdateAccount({}).then(data => {
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


### GetApiKeys



```js
amazonaws_apigateway.GetApiKeys({}, context)
```

#### Parameters
* limit (string)
* position (string)

### UpdateApiKey



```js
amazonaws_apigateway.UpdateApiKey({}, context)
```

#### Parameters
* apiKey (string)

### ImportApiKeys



```js
amazonaws_apigateway.ImportApiKeys({}, context)
```


### GetClientCertificates



```js
amazonaws_apigateway.GetClientCertificates({}, context)
```

#### Parameters
* limit (string)
* position (string)

### UpdateClientCertificate



```js
amazonaws_apigateway.UpdateClientCertificate({}, context)
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
amazonaws_apigateway.UpdateDomainName({}, context)
```

#### Parameters
* domainName (string)

### GetBasePathMappings



```js
amazonaws_apigateway.GetBasePathMappings({}, context)
```

#### Parameters
* limit (string)
* position (string)
* domainName (string)

### UpdateBasePathMapping



```js
amazonaws_apigateway.UpdateBasePathMapping({}, context)
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
amazonaws_apigateway.UpdateRestApi({}, context)
```

#### Parameters
* restapiId (string)

### GetAuthorizers



```js
amazonaws_apigateway.GetAuthorizers({}, context)
```

#### Parameters
* restapiId (string)

### UpdateAuthorizer



```js
amazonaws_apigateway.UpdateAuthorizer({}, context)
```

#### Parameters
* restapiId (string)
* authorizerId (string)

### GetDeployments



```js
amazonaws_apigateway.GetDeployments({}, context)
```

#### Parameters
* limit (string)
* position (string)
* restapiId (string)

### UpdateDeployment



```js
amazonaws_apigateway.UpdateDeployment({}, context)
```

#### Parameters
* restapiId (string)
* deploymentId (string)

### ImportDocumentationParts



```js
amazonaws_apigateway.ImportDocumentationParts({}, context)
```

#### Parameters
* restapiId (string)

### UpdateDocumentationPart



```js
amazonaws_apigateway.UpdateDocumentationPart({}, context)
```

#### Parameters
* restapiId (string)
* partId (string)

### GetDocumentationVersions



```js
amazonaws_apigateway.GetDocumentationVersions({}, context)
```

#### Parameters
* restapiId (string)

### UpdateDocumentationVersion



```js
amazonaws_apigateway.UpdateDocumentationVersion({}, context)
```

#### Parameters
* restapiId (string)
* docVersion (string)

### GetModels



```js
amazonaws_apigateway.GetModels({}, context)
```

#### Parameters
* limit (string)
* position (string)
* restapiId (string)

### UpdateModel



```js
amazonaws_apigateway.UpdateModel({}, context)
```

#### Parameters
* restapiId (string)
* modelName (string)

### GetModelTemplate



```js
amazonaws_apigateway.GetModelTemplate({}, context)
```

#### Parameters
* restapiId (string)
* modelName (string)

### GetRequestValidators



```js
amazonaws_apigateway.GetRequestValidators({}, context)
```

#### Parameters
* restapiId (string)

### UpdateRequestValidator



```js
amazonaws_apigateway.UpdateRequestValidator({}, context)
```

#### Parameters
* restapiId (string)
* requestvalidatorId (string)

### GetResources



```js
amazonaws_apigateway.GetResources({}, context)
```

#### Parameters
* limit (string)
* position (string)
* restapiId (string)

### CreateResource



```js
amazonaws_apigateway.CreateResource({}, context)
```

#### Parameters
* restapiId (string)
* parentId (string)

### UpdateResource



```js
amazonaws_apigateway.UpdateResource({}, context)
```

#### Parameters
* restapiId (string)
* resourceId (string)

### UpdateMethod



```js
amazonaws_apigateway.UpdateMethod({}, context)
```

#### Parameters
* restapiId (string)
* resourceId (string)
* httpMethod (string)

### UpdateIntegration



```js
amazonaws_apigateway.UpdateIntegration({}, context)
```

#### Parameters
* restapiId (string)
* resourceId (string)
* httpMethod (string)

### UpdateIntegrationResponse



```js
amazonaws_apigateway.UpdateIntegrationResponse({}, context)
```

#### Parameters
* restapiId (string)
* resourceId (string)
* httpMethod (string)
* statusCode (string)

### UpdateMethodResponse



```js
amazonaws_apigateway.UpdateMethodResponse({}, context)
```

#### Parameters
* restapiId (string)
* resourceId (string)
* httpMethod (string)
* statusCode (string)

### GetStages



```js
amazonaws_apigateway.GetStages({}, context)
```

#### Parameters
* restapiId (string)

### UpdateStage



```js
amazonaws_apigateway.UpdateStage({}, context)
```

#### Parameters
* restapiId (string)
* stageName (string)

### FlushStageAuthorizersCache



```js
amazonaws_apigateway.FlushStageAuthorizersCache({}, context)
```

#### Parameters
* restapiId (string)
* stageName (string)

### FlushStageCache



```js
amazonaws_apigateway.FlushStageCache({}, context)
```

#### Parameters
* restapiId (string)
* stageName (string)

### GetExport



```js
amazonaws_apigateway.GetExport({}, context)
```

#### Parameters
* restapiId (string)
* stageName (string)
* exportType (string)

### GetSdk



```js
amazonaws_apigateway.GetSdk({}, context)
```

#### Parameters
* restapiId (string)
* stageName (string)
* sdkType (string)

### ImportRestApi



```js
amazonaws_apigateway.ImportRestApi({}, context)
```


### GetSdkTypes



```js
amazonaws_apigateway.GetSdkTypes({}, context)
```


### GetSdkType



```js
amazonaws_apigateway.GetSdkType({}, context)
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

