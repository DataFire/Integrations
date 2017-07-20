# @datafire/amazonaws_apigateway

Client library for Amazon API Gateway

## Installation and Usage
```bash
npm install --save datafire @datafire/amazonaws_apigateway
```

```js
let datafire = require('datafire');
let amazonaws_apigateway = require('@datafire/amazonaws_apigateway').actions;

let account = {
  hmac: "",
}
let context = new datafire.Context({
  accounts: {
    amazonaws_apigateway: account,
  }
})


amazonaws_apigateway.UpdateAccount({}, context).then(data => {
  console.log(data);
})
```

## Description
<fullname>Amazon API Gateway</fullname> <p>Amazon API Gateway helps developers deliver robust, secure, and scalable mobile and web application back ends. Amazon API Gateway allows developers to securely connect mobile and web applications to APIs that run on AWS Lambda, Amazon EC2, or other publicly addressable web services that are hosted outside of AWS.</p>

## Actions
### UpdateAccount
Changes information about the current <a>Account</a> resource.


```js
amazonaws_apigateway.UpdateAccount({
  "body": {},
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - Requests Amazon API Gateway to change information about the current <a>Account</a> resource.
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### GetApiKeys
Gets information about the current <a>ApiKeys</a> resource.


```js
amazonaws_apigateway.GetApiKeys({
  "body": {},
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - A request to get information about the current <a>ApiKeys</a> resource.
* limit (string) - Pagination limit
* position (string) - Pagination token
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### UpdateApiKey
Changes information about an <a>ApiKey</a> resource.


```js
amazonaws_apigateway.UpdateApiKey({
  "body": {},
  "api_Key": "",
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - A request to change information about an <a>ApiKey</a> resource.
* api_Key (string) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### ImportApiKeys
Import API keys from an external source, such as a CSV-formatted file.


```js
amazonaws_apigateway.ImportApiKeys({
  "body": {
    "body": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - The POST request to import API keys from an external source, such as a CSV-formatted file.
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### GetClientCertificates
Gets a collection of <a>ClientCertificate</a> resources.


```js
amazonaws_apigateway.GetClientCertificates({
  "body": {},
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - A request to get information about a collection of <a>ClientCertificate</a> resources.
* limit (string) - Pagination limit
* position (string) - Pagination token
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### UpdateClientCertificate
Changes information about an <a>ClientCertificate</a> resource.


```js
amazonaws_apigateway.UpdateClientCertificate({
  "body": {},
  "clientcertificate_id": "",
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - A request to change information about an <a>ClientCertificate</a> resource.
* clientcertificate_id (string) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### GetDomainNames
Represents a collection of <a>DomainName</a> resources.


```js
amazonaws_apigateway.GetDomainNames({
  "body": {},
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - Request to describe a collection of <a>DomainName</a> resources.
* limit (string) - Pagination limit
* position (string) - Pagination token
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### UpdateDomainName
Changes information about the <a>DomainName</a> resource.


```js
amazonaws_apigateway.UpdateDomainName({
  "body": {},
  "domain_name": "",
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - A request to change information about the <a>DomainName</a> resource.
* domain_name (string) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### GetBasePathMappings
Represents a collection of <a>BasePathMapping</a> resources.


```js
amazonaws_apigateway.GetBasePathMappings({
  "body": {},
  "domain_name": "",
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - A request to get information about a collection of <a>BasePathMapping</a> resources.
* limit (string) - Pagination limit
* position (string) - Pagination token
* domain_name (string) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### UpdateBasePathMapping
Changes information about the <a>BasePathMapping</a> resource.


```js
amazonaws_apigateway.UpdateBasePathMapping({
  "body": {},
  "domain_name": "",
  "base_path": "",
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - A request to change information about the <a>BasePathMapping</a> resource.
* domain_name (string) **required**
* base_path (string) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### GetRestApis
Lists the <a>RestApis</a> resources for your collection.


```js
amazonaws_apigateway.GetRestApis({
  "body": {},
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - The GET request to list existing <a>RestApis</a> defined for your collection.
* limit (string) - Pagination limit
* position (string) - Pagination token
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### UpdateRestApi
Changes information about the specified API.


```js
amazonaws_apigateway.UpdateRestApi({
  "body": {},
  "restapi_id": "",
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - Request to update an existing <a>RestApi</a> resource in your collection.
* restapi_id (string) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### GetAuthorizers
<p>Describe an existing <a>Authorizers</a> resource.</p> <div class="seeAlso"><a href="http://docs.aws.amazon.com/cli/latest/reference/apigateway/get-authorizers.html">AWS CLI</a></div>


```js
amazonaws_apigateway.GetAuthorizers({
  "body": {},
  "restapi_id": "",
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - Request to describe an existing <a>Authorizers</a> resource.
* restapi_id (string) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### UpdateAuthorizer
<p>Updates an existing <a>Authorizer</a> resource.</p> <div class="seeAlso"><a href="http://docs.aws.amazon.com/cli/latest/reference/apigateway/update-authorizer.html">AWS CLI</a></div>


```js
amazonaws_apigateway.UpdateAuthorizer({
  "body": {},
  "restapi_id": "",
  "authorizer_id": "",
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - Request to update an existing <a>Authorizer</a> resource.
* restapi_id (string) **required**
* authorizer_id (string) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### GetDeployments
Gets information about a <a>Deployments</a> collection.


```js
amazonaws_apigateway.GetDeployments({
  "body": {},
  "restapi_id": "",
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - Requests Amazon API Gateway to get information about a <a>Deployments</a> collection.
* limit (string) - Pagination limit
* position (string) - Pagination token
* restapi_id (string) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### UpdateDeployment
Changes information about a <a>Deployment</a> resource.


```js
amazonaws_apigateway.UpdateDeployment({
  "body": {},
  "restapi_id": "",
  "deployment_id": "",
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - Requests Amazon API Gateway to change information about a <a>Deployment</a> resource.
* restapi_id (string) **required**
* deployment_id (string) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### ImportDocumentationParts



```js
amazonaws_apigateway.ImportDocumentationParts({
  "body": {
    "body": ""
  },
  "restapi_id": "",
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - Import documentation parts from an external (e.g., Swagger) definition file. 
* restapi_id (string) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### UpdateDocumentationPart



```js
amazonaws_apigateway.UpdateDocumentationPart({
  "body": {},
  "restapi_id": "",
  "part_id": "",
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - Updates an existing documentation part of a given API.
* restapi_id (string) **required**
* part_id (string) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### GetDocumentationVersions



```js
amazonaws_apigateway.GetDocumentationVersions({
  "body": {},
  "restapi_id": "",
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - Gets the documentation versions of an API.
* restapi_id (string) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### UpdateDocumentationVersion



```js
amazonaws_apigateway.UpdateDocumentationVersion({
  "body": {},
  "restapi_id": "",
  "doc_version": "",
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - Updates an existing documentation version of an API.
* restapi_id (string) **required**
* doc_version (string) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### GetModels
Describes existing <a>Models</a> defined for a <a>RestApi</a> resource.


```js
amazonaws_apigateway.GetModels({
  "body": {},
  "restapi_id": "",
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - Request to list existing <a>Models</a> defined for a <a>RestApi</a> resource.
* limit (string) - Pagination limit
* position (string) - Pagination token
* restapi_id (string) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### UpdateModel
Changes information about a model.


```js
amazonaws_apigateway.UpdateModel({
  "body": {},
  "restapi_id": "",
  "model_name": "",
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - Request to update an existing model in an existing <a>RestApi</a> resource.
* restapi_id (string) **required**
* model_name (string) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### GetModelTemplate
Generates a sample mapping template that can be used to transform a payload into the structure of a model.


```js
amazonaws_apigateway.GetModelTemplate({
  "body": {},
  "restapi_id": "",
  "model_name": "",
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - Request to generate a sample mapping template used to transform the payload.
* restapi_id (string) **required**
* model_name (string) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### GetRequestValidators
Gets the <a>RequestValidators</a> collection of a given <a>RestApi</a>.


```js
amazonaws_apigateway.GetRequestValidators({
  "body": {},
  "restapi_id": "",
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - Gets the <a>RequestValidators</a> collection of a given <a>RestApi</a>.
* restapi_id (string) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### UpdateRequestValidator
Updates a <a>RequestValidator</a> of a given <a>RestApi</a>.


```js
amazonaws_apigateway.UpdateRequestValidator({
  "body": {},
  "restapi_id": "",
  "requestvalidator_id": "",
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - Updates a <a>RequestValidator</a> of a given <a>RestApi</a>.
* restapi_id (string) **required**
* requestvalidator_id (string) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### GetResources
Lists information about a collection of <a>Resource</a> resources.


```js
amazonaws_apigateway.GetResources({
  "body": {},
  "restapi_id": "",
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - Request to list information about a collection of resources.
* limit (string) - Pagination limit
* position (string) - Pagination token
* restapi_id (string) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### CreateResource
Creates a <a>Resource</a> resource.


```js
amazonaws_apigateway.CreateResource({
  "body": {
    "pathPart": ""
  },
  "restapi_id": "",
  "parent_id": "",
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - Requests Amazon API Gateway to create a <a>Resource</a> resource.
* restapi_id (string) **required**
* parent_id (string) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### UpdateResource
Changes information about a <a>Resource</a> resource.


```js
amazonaws_apigateway.UpdateResource({
  "body": {},
  "restapi_id": "",
  "resource_id": "",
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - Request to change information about a <a>Resource</a> resource.
* restapi_id (string) **required**
* resource_id (string) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### UpdateMethod
Updates an existing <a>Method</a> resource.


```js
amazonaws_apigateway.UpdateMethod({
  "body": {},
  "restapi_id": "",
  "resource_id": "",
  "http_method": "",
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - Request to update an existing <a>Method</a> resource.
* restapi_id (string) **required**
* resource_id (string) **required**
* http_method (string) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### UpdateIntegration
Represents an update integration.


```js
amazonaws_apigateway.UpdateIntegration({
  "body": {},
  "restapi_id": "",
  "resource_id": "",
  "http_method": "",
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - Represents an update integration request.
* restapi_id (string) **required**
* resource_id (string) **required**
* http_method (string) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### UpdateIntegrationResponse
Represents an update integration response.


```js
amazonaws_apigateway.UpdateIntegrationResponse({
  "body": {},
  "restapi_id": "",
  "resource_id": "",
  "http_method": "",
  "status_code": "",
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - Represents an update integration response request.
* restapi_id (string) **required**
* resource_id (string) **required**
* http_method (string) **required**
* status_code (string) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### UpdateMethodResponse
Updates an existing <a>MethodResponse</a> resource.


```js
amazonaws_apigateway.UpdateMethodResponse({
  "body": {},
  "restapi_id": "",
  "resource_id": "",
  "http_method": "",
  "status_code": "",
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - A request to update an existing <a>MethodResponse</a> resource.
* restapi_id (string) **required**
* resource_id (string) **required**
* http_method (string) **required**
* status_code (string) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### GetStages
Gets information about one or more <a>Stage</a> resources.


```js
amazonaws_apigateway.GetStages({
  "body": {},
  "restapi_id": "",
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - Requests Amazon API Gateway to get information about one or more <a>Stage</a> resources.
* restapi_id (string) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### UpdateStage
Changes information about a <a>Stage</a> resource.


```js
amazonaws_apigateway.UpdateStage({
  "body": {},
  "restapi_id": "",
  "stage_name": "",
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - Requests Amazon API Gateway to change information about a <a>Stage</a> resource.
* restapi_id (string) **required**
* stage_name (string) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### FlushStageAuthorizersCache
Flushes all authorizer cache entries on a stage.


```js
amazonaws_apigateway.FlushStageAuthorizersCache({
  "body": {},
  "restapi_id": "",
  "stage_name": "",
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - Request to flush authorizer cache entries on a specified stage.
* restapi_id (string) **required**
* stage_name (string) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### FlushStageCache
Flushes a stage's cache.


```js
amazonaws_apigateway.FlushStageCache({
  "body": {},
  "restapi_id": "",
  "stage_name": "",
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - Requests Amazon API Gateway to flush a stage's cache.
* restapi_id (string) **required**
* stage_name (string) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### GetExport
Exports a deployed version of a <a>RestApi</a> in a specified format.


```js
amazonaws_apigateway.GetExport({
  "body": {},
  "restapi_id": "",
  "stage_name": "",
  "export_type": "",
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - Request a new export of a <a>RestApi</a> for a particular <a>Stage</a>.
* restapi_id (string) **required**
* stage_name (string) **required**
* export_type (string) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### GetSdk
Generates a client SDK for a <a>RestApi</a> and <a>Stage</a>.


```js
amazonaws_apigateway.GetSdk({
  "body": {},
  "restapi_id": "",
  "stage_name": "",
  "sdk_type": "",
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - Request a new generated client SDK for a <a>RestApi</a> and <a>Stage</a>.
* restapi_id (string) **required**
* stage_name (string) **required**
* sdk_type (string) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### ImportRestApi
A feature of the Amazon API Gateway control service for creating a new API from an external API definition file.


```js
amazonaws_apigateway.ImportRestApi({
  "body": {
    "body": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - A POST request to import an API to Amazon API Gateway using an input of an API definition file.
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### GetSdkTypes



```js
amazonaws_apigateway.GetSdkTypes({
  "body": {},
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - Get the <a>SdkTypes</a> collection.
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### GetSdkType



```js
amazonaws_apigateway.GetSdkType({
  "body": {},
  "sdktype_id": "",
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - Get an <a>SdkType</a> instance.
* sdktype_id (string) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### GetUsagePlans
Gets all the usage plans of the caller's account.


```js
amazonaws_apigateway.GetUsagePlans({
  "body": {},
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - The GET request to get all the usage plans of the caller's account.
* limit (string) - Pagination limit
* position (string) - Pagination token
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### UpdateUsagePlan
Updates a usage plan of a given plan Id.


```js
amazonaws_apigateway.UpdateUsagePlan({
  "body": {},
  "usageplanId": "",
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - The PATCH request to update a usage plan of a given plan Id.
* usageplanId (string) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### GetUsagePlanKeys
Gets all the usage plan keys representing the API keys added to a specified usage plan.


```js
amazonaws_apigateway.GetUsagePlanKeys({
  "body": {},
  "usageplanId": "",
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - The GET request to get all the usage plan keys representing the API keys added to a specified usage plan.
* limit (string) - Pagination limit
* position (string) - Pagination token
* usageplanId (string) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### GetUsagePlanKey
Gets a usage plan key of a given key identifier.


```js
amazonaws_apigateway.GetUsagePlanKey({
  "body": {},
  "usageplanId": "",
  "keyId": "",
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - The GET request to get a usage plan key of a given key identifier.
* usageplanId (string) **required**
* keyId (string) **required**
* keyId_query (string)
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### UpdateUsage
Grants a temporary extension to the reamining quota of a usage plan associated with a specified API key.


```js
amazonaws_apigateway.UpdateUsage({
  "body": {},
  "usageplanId": "",
  "keyId": "",
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - The PATCH request to grant a temporary extension to the reamining quota of a usage plan associated with a specified API key.
* usageplanId (string) **required**
* keyId (string) **required**
* keyId_query (string)
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### GetUsage
Gets the usage data of a usage plan in a specified time interval.


```js
amazonaws_apigateway.GetUsage({
  "body": {},
  "usageplanId": "",
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - The GET request to get the usage data of a usage plan in a specified time interval.
* limit (string) - Pagination limit
* position (string) - Pagination token
* usageplanId (string) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

