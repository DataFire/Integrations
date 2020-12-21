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

.then(data => {
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
  * patchOperations `array`: A list of operations describing the updates to apply to the specified resource. The patches are applied in the order specified in the list.
    * items [PatchOperation](#patchoperation)

#### Output
* output [Account](#account)

### GetApiKeys



```js
amazonaws_apigateway.GetApiKeys({}, context)
```

#### Input
* input `object`
  * position `string`
  * limit `integer`
  * name `string`
  * customerId `string`
  * includeValues `boolean`

#### Output
* output [ApiKeys](#apikeys)

### CreateApiKey



```js
amazonaws_apigateway.CreateApiKey({}, context)
```

#### Input
* input `object`
  * tags `object`: The key-value map of strings. The valid character set is [a-zA-Z+-=._:/]. The tag key can be up to 128 characters and must not start with <code>aws:</code>. The tag value can be up to 256 characters.
  * customerId `string`: An AWS Marketplace customer identifier , when integrating with the AWS SaaS Marketplace.
  * description `string`: The description of the <a>ApiKey</a>.
  * enabled `boolean`: Specifies whether the <a>ApiKey</a> can be used by callers.
  * generateDistinctId `boolean`: Specifies whether (<code>true</code>) or not (<code>false</code>) the key identifier is distinct from the created API key value. This parameter is deprecated and should not be used.
  * name `string`: The name of the <a>ApiKey</a>.
  * stageKeys `array`: DEPRECATED FOR USAGE PLANS - Specifies stages associated with the API key.
    * items [StageKey](#stagekey)
  * value `string`: Specifies a value of the API key.

#### Output
*Output schema unknown*

### ImportApiKeys



```js
amazonaws_apigateway.ImportApiKeys({
  "format": "",
  "mode": "",
  "body": ""
}, context)
```

#### Input
* input `object`
  * format **required** `string`
  * failonwarnings `boolean`
  * mode **required** `string`
  * body **required** `string`: The payload of the POST request to import API keys. For the payload format, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/api-key-file-format.html">API Key File Format</a>.

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
  * includeValue `boolean`

#### Output
* output [ApiKey](#apikey)

### UpdateApiKey



```js
amazonaws_apigateway.UpdateApiKey({}, context)
```

#### Input
* input `object`
  * apiKey `string`
  * patchOperations `array`: A list of operations describing the updates to apply to the specified resource. The patches are applied in the order specified in the list.
    * items [PatchOperation](#patchoperation)

#### Output
* output [ApiKey](#apikey)

### GetClientCertificates



```js
amazonaws_apigateway.GetClientCertificates({}, context)
```

#### Input
* input `object`
  * position `string`
  * limit `integer`

#### Output
* output [ClientCertificates](#clientcertificates)

### GenerateClientCertificate



```js
amazonaws_apigateway.GenerateClientCertificate({}, context)
```

#### Input
* input `object`
  * tags `object`: The key-value map of strings. The valid character set is [a-zA-Z+-=._:/]. The tag key can be up to 128 characters and must not start with <code>aws:</code>. The tag value can be up to 256 characters.
  * description `string`: The description of the <a>ClientCertificate</a>.

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
  * patchOperations `array`: A list of operations describing the updates to apply to the specified resource. The patches are applied in the order specified in the list.
    * items [PatchOperation](#patchoperation)

#### Output
* output [ClientCertificate](#clientcertificate)

### GetDomainNames



```js
amazonaws_apigateway.GetDomainNames({}, context)
```

#### Input
* input `object`
  * position `string`
  * limit `integer`

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
  * tags `object`: The key-value map of strings. The valid character set is [a-zA-Z+-=._:/]. The tag key can be up to 128 characters and must not start with <code>aws:</code>. The tag value can be up to 256 characters.
  * certificateArn `string`: The reference to an AWS-managed certificate that will be used by edge-optimized endpoint for this domain name. AWS Certificate Manager is the only supported source.
  * certificateBody `string`: [Deprecated] The body of the server certificate that will be used by edge-optimized endpoint for this domain name provided by your certificate authority.
  * certificateChain `string`: [Deprecated] The intermediate certificates and optionally the root certificate, one after the other without any blank lines, used by an edge-optimized endpoint for this domain name. If you include the root certificate, your certificate chain must start with intermediate certificates and end with the root certificate. Use the intermediate certificates that were provided by your certificate authority. Do not include any intermediaries that are not in the chain of trust path.
  * certificateName `string`: The user-friendly name of the certificate that will be used by edge-optimized endpoint for this domain name.
  * certificatePrivateKey `string`: [Deprecated] Your edge-optimized endpoint's domain name certificate's private key.
  * domainName **required** `string`: [Required] The name of the <a>DomainName</a> resource.
  * endpointConfiguration `object`: The endpoint configuration to indicate the types of endpoints an API (<a>RestApi</a>) or its custom domain name (<a>DomainName</a>) has. 
    * types
      * items [EndpointType](#endpointtype)
    * vpcEndpointIds
      * items [String](#string)
  * mutualTlsAuthentication `object`: If specified, API Gateway performs two-way authentication between the client and the server. Clients must present a trusted certificate to access your custom domain name.
    * truststoreUri
    * truststoreVersion
  * regionalCertificateArn `string`: The reference to an AWS-managed certificate that will be used by regional endpoint for this domain name. AWS Certificate Manager is the only supported source.
  * regionalCertificateName `string`: The user-friendly name of the certificate that will be used by regional endpoint for this domain name.
  * securityPolicy `string` (values: TLS_1_0, TLS_1_2): The Transport Layer Security (TLS) version + cipher suite for this <a>DomainName</a>. The valid values are <code>TLS_1_0</code> and <code>TLS_1_2</code>.

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
  * patchOperations `array`: A list of operations describing the updates to apply to the specified resource. The patches are applied in the order specified in the list.
    * items [PatchOperation](#patchoperation)

#### Output
* output [DomainName](#domainname)

### GetBasePathMappings



```js
amazonaws_apigateway.GetBasePathMappings({}, context)
```

#### Input
* input `object`
  * domainName `string`
  * position `string`
  * limit `integer`

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
  * basePath `string`: The base path name that callers of the API must provide as part of the URL after the domain name. This value must be unique for all of the mappings across a single API. Specify '(none)' if you do not want callers to specify a base path name after the domain name.
  * restApiId **required** `string`: [Required] The string identifier of the associated <a>RestApi</a>.
  * stage `string`: The name of the API's stage that you want to use for this mapping. Specify '(none)' if you want callers to explicitly specify the stage name after any base path name.

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
  * patchOperations `array`: A list of operations describing the updates to apply to the specified resource. The patches are applied in the order specified in the list.
    * items [PatchOperation](#patchoperation)

#### Output
* output [BasePathMapping](#basepathmapping)

### GetRestApis



```js
amazonaws_apigateway.GetRestApis({}, context)
```

#### Input
* input `object`
  * position `string`
  * limit `integer`

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
  * tags `object`: The key-value map of strings. The valid character set is [a-zA-Z+-=._:/]. The tag key can be up to 128 characters and must not start with <code>aws:</code>. The tag value can be up to 256 characters.
  * apiKeySource `string` (values: HEADER, AUTHORIZER): The source of the API key for metering requests according to a usage plan. Valid values are: <ul><li><code>HEADER</code> to read the API key from the <code>X-API-Key</code> header of a request. </li><li><code>AUTHORIZER</code> to read the API key from the <code>UsageIdentifierKey</code> from a custom authorizer.</li></ul>
  * binaryMediaTypes `array`: The list of binary media types supported by the <a>RestApi</a>. By default, the <a>RestApi</a> supports only UTF-8-encoded text payloads.
    * items [String](#string)
  * cloneFrom `string`: The ID of the <a>RestApi</a> that you want to clone from.
  * description `string`: The description of the <a>RestApi</a>.
  * disableExecuteApiEndpoint `boolean`: Specifies whether clients can invoke your API by using the default <code>execute-api</code> endpoint. By default, clients can invoke your API with the default https://{api_id}.execute-api.{region}.amazonaws.com endpoint. To require that clients use a custom domain name to invoke your API, disable the default endpoint.
  * endpointConfiguration `object`: The endpoint configuration to indicate the types of endpoints an API (<a>RestApi</a>) or its custom domain name (<a>DomainName</a>) has. 
    * types
      * items [EndpointType](#endpointtype)
    * vpcEndpointIds
      * items [String](#string)
  * minimumCompressionSize `integer`: A nullable integer that is used to enable compression (with non-negative between 0 and 10485760 (10M) bytes, inclusive) or disable compression (with a null value) on an API. When compression is enabled, compression or decompression is not applied on the payload if the payload size is smaller than this value. Setting it to zero allows compression for any payload size.
  * name **required** `string`: [Required] The name of the <a>RestApi</a>.
  * policy `string`: A stringified JSON policy document that applies to this RestApi regardless of the caller and <a>Method</a> configuration.
  * version `string`: A version identifier for the API.

#### Output
*Output schema unknown*

### ImportRestApi



```js
amazonaws_apigateway.ImportRestApi({
  "mode": "",
  "body": ""
}, context)
```

#### Input
* input `object`
  * failonwarnings `boolean`
  * parameters `object`
  * mode **required** `string`
  * body **required** `string`: [Required] The POST request body containing external API definitions. Currently, only OpenAPI definition JSON/YAML files are supported. The maximum size of the API definition file is 6MB.

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
  * patchOperations `array`: A list of operations describing the updates to apply to the specified resource. The patches are applied in the order specified in the list.
    * items [PatchOperation](#patchoperation)

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
  * mode `string`
  * failonwarnings `boolean`
  * parameters `object`
  * body **required** `string`: [Required] The PUT request body containing external API definitions. Currently, only OpenAPI definition JSON/YAML files are supported. The maximum size of the API definition file is 6MB.

#### Output
* output [RestApi](#restapi)

### GetAuthorizers



```js
amazonaws_apigateway.GetAuthorizers({}, context)
```

#### Input
* input `object`
  * restapiId `string`
  * position `string`
  * limit `integer`

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
  * authType `string`: Optional customer-defined field, used in OpenAPI imports and exports without functional impact.
  * authorizerCredentials `string`: Specifies the required credentials as an IAM role for API Gateway to invoke the authorizer. To specify an IAM role for API Gateway to assume, use the role's Amazon Resource Name (ARN). To use resource-based permissions on the Lambda function, specify null.
  * authorizerResultTtlInSeconds `integer`: The TTL in seconds of cached authorizer results. If it equals 0, authorization caching is disabled. If it is greater than 0, API Gateway will cache authorizer responses. If this field is not set, the default value is 300. The maximum value is 3600, or 1 hour.
  * authorizerUri `string`: Specifies the authorizer's Uniform Resource Identifier (URI). For <code>TOKEN</code> or <code>REQUEST</code> authorizers, this must be a well-formed Lambda function URI, for example, <code>arn:aws:apigateway:us-west-2:lambda:path/2015-03-31/functions/arn:aws:lambda:us-west-2:{account_id}:function:{lambda_function_name}/invocations</code>. In general, the URI has this form <code>arn:aws:apigateway:{region}:lambda:path/{service_api}</code>, where <code>{region}</code> is the same as the region hosting the Lambda function, <code>path</code> indicates that the remaining substring in the URI should be treated as the path to the resource, including the initial <code>/</code>. For Lambda functions, this is usually of the form <code>/2015-03-31/functions/[FunctionARN]/invocations</code>.
  * identitySource `string`: The identity source for which authorization is requested. <ul><li>For a <code>TOKEN</code> or <code>COGNITO_USER_POOLS</code> authorizer, this is required and specifies the request header mapping expression for the custom header holding the authorization token submitted by the client. For example, if the token header name is <code>Auth</code>, the header mapping expression is <code>method.request.header.Auth</code>.</li><li>For the <code>REQUEST</code> authorizer, this is required when authorization caching is enabled. The value is a comma-separated string of one or more mapping expressions of the specified request parameters. For example, if an <code>Auth</code> header, a <code>Name</code> query string parameter are defined as identity sources, this value is <code>method.request.header.Auth, method.request.querystring.Name</code>. These parameters will be used to derive the authorization caching key and to perform runtime validation of the <code>REQUEST</code> authorizer by verifying all of the identity-related request parameters are present, not null and non-empty. Only when this is true does the authorizer invoke the authorizer Lambda function, otherwise, it returns a 401 Unauthorized response without calling the Lambda function. The valid value is a string of comma-separated mapping expressions of the specified request parameters. When the authorization caching is not enabled, this property is optional.</li></ul>
  * identityValidationExpression `string`: A validation expression for the incoming identity token. For <code>TOKEN</code> authorizers, this value is a regular expression. For <code>COGNITO_USER_POOLS</code> authorizers, API Gateway will match the <code>aud</code> field of the incoming token from the client against the specified regular expression. It will invoke the authorizer's Lambda function when there is a match. Otherwise, it will return a 401 Unauthorized response without calling the Lambda function. The validation expression does not apply to the <code>REQUEST</code> authorizer.
  * name **required** `string`: [Required] The name of the authorizer.
  * providerARNs `array`: A list of the Amazon Cognito user pool ARNs for the <code>COGNITO_USER_POOLS</code> authorizer. Each element is of this format: <code>arn:aws:cognito-idp:{region}:{account_id}:userpool/{user_pool_id}</code>. For a <code>TOKEN</code> or <code>REQUEST</code> authorizer, this is not defined.
    * items [ProviderARN](#providerarn)
  * type **required** `string` (values: TOKEN, REQUEST, COGNITO_USER_POOLS): The authorizer type. Valid values are <code>TOKEN</code> for a Lambda function using a single authorization token submitted in a custom header, <code>REQUEST</code> for a Lambda function using incoming request parameters, and <code>COGNITO_USER_POOLS</code> for using an Amazon Cognito user pool.

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
  * patchOperations `array`: A list of operations describing the updates to apply to the specified resource. The patches are applied in the order specified in the list.
    * items [PatchOperation](#patchoperation)

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
  * additionalContext `object`: [Optional] A key-value map of additional context variables.
  * body `string`: [Optional] The simulated request body of an incoming invocation request.
  * headers `object`: [Required] A key-value map of headers to simulate an incoming invocation request. This is where the incoming authorization token, or identity source, should be specified.
  * multiValueHeaders `object`: [Optional] The headers as a map from string to list of values to simulate an incoming invocation request. This is where the incoming authorization token, or identity source, may be specified.
  * pathWithQueryString `string`: [Optional] The URI path, including query string, of the simulated invocation request. Use this to specify path parameters and query string parameters.
  * stageVariables `object`: A key-value map of stage variables to simulate an invocation on a deployed <a>Stage</a>.

#### Output
* output [TestInvokeAuthorizerResponse](#testinvokeauthorizerresponse)

### GetDeployments



```js
amazonaws_apigateway.GetDeployments({}, context)
```

#### Input
* input `object`
  * restapiId `string`
  * position `string`
  * limit `integer`

#### Output
* output [Deployments](#deployments)

### CreateDeployment



```js
amazonaws_apigateway.CreateDeployment({}, context)
```

#### Input
* input `object`
  * restapiId `string`
  * cacheClusterEnabled `boolean`: Enables a cache cluster for the <a>Stage</a> resource specified in the input.
  * cacheClusterSize `string` (values: 0.5, 1.6, 6.1, 13.5, 28.4, 58.2, 118, 237): Returns the size of the <b>CacheCluster</b>.
  * canarySettings `object`: The input configuration for a canary deployment.
    * percentTraffic
    * stageVariableOverrides
    * useStageCache
  * description `string`: The description for the <a>Deployment</a> resource to create.
  * stageDescription `string`: The description of the <a>Stage</a> resource for the <a>Deployment</a> resource to create.
  * stageName `string`: The name of the <a>Stage</a> resource for the <a>Deployment</a> resource to create.
  * tracingEnabled `boolean`: Specifies whether active tracing with X-ray is enabled for the <a>Stage</a>.
  * variables `object`: A map that defines the stage variables for the <a>Stage</a> resource that is associated with the new deployment. Variable names can have alphanumeric and underscore characters, and the values must match <code>[A-Za-z0-9-._~:/?#&amp;=,]+</code>.

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
  * embed `array`

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
  * patchOperations `array`: A list of operations describing the updates to apply to the specified resource. The patches are applied in the order specified in the list.
    * items [PatchOperation](#patchoperation)

#### Output
* output [Deployment](#deployment)

### GetDocumentationParts



```js
amazonaws_apigateway.GetDocumentationParts({}, context)
```

#### Input
* input `object`
  * restapiId `string`
  * type `string`
  * name `string`
  * path `string`
  * position `string`
  * limit `integer`
  * locationStatus `string`

#### Output
* output [DocumentationParts](#documentationparts)

### CreateDocumentationPart



```js
amazonaws_apigateway.CreateDocumentationPart({
  "location": {},
  "properties": ""
}, context)
```

#### Input
* input `object`
  * restapiId `string`
  * location **required** `object`: Specifies the target API entity to which the documentation applies.
    * method
    * name
    * path
    * statusCode
    * type
  * properties **required** `string`: [Required] The new documentation content map of the targeted API entity. Enclosed key-value pairs are API-specific, but only OpenAPI-compliant key-value pairs can be exported and, hence, published.

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
  * mode `string`
  * failonwarnings `boolean`
  * body **required** `string`: [Required] Raw byte array representing the to-be-imported documentation parts. To import from an OpenAPI file, this is a JSON object.

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
  * patchOperations `array`: A list of operations describing the updates to apply to the specified resource. The patches are applied in the order specified in the list.
    * items [PatchOperation](#patchoperation)

#### Output
* output [DocumentationPart](#documentationpart)

### GetDocumentationVersions



```js
amazonaws_apigateway.GetDocumentationVersions({}, context)
```

#### Input
* input `object`
  * restapiId `string`
  * position `string`
  * limit `integer`

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
  * description `string`: A description about the new documentation snapshot.
  * documentationVersion **required** `string`: [Required] The version identifier of the new snapshot.
  * stageName `string`: The stage name to be associated with the new documentation snapshot.

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
  * patchOperations `array`: A list of operations describing the updates to apply to the specified resource. The patches are applied in the order specified in the list.
    * items [PatchOperation](#patchoperation)

#### Output
* output [DocumentationVersion](#documentationversion)

### GetGatewayResponses



```js
amazonaws_apigateway.GetGatewayResponses({}, context)
```

#### Input
* input `object`
  * restapiId `string`
  * position `string`
  * limit `integer`

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
  * patchOperations `array`: A list of operations describing the updates to apply to the specified resource. The patches are applied in the order specified in the list.
    * items [PatchOperation](#patchoperation)

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
  * responseParameters `object`: <p><p>Response parameters (paths, query strings and headers) of the <a>GatewayResponse</a> as a string-to-string map of key-value pairs.</p></p>
  * responseTemplates `object`: <p><p>Response templates of the <a>GatewayResponse</a> as a string-to-string map of key-value pairs.</p></p>
  * statusCode `string`: The status code.

#### Output
*Output schema unknown*

### GetModels



```js
amazonaws_apigateway.GetModels({}, context)
```

#### Input
* input `object`
  * restapiId `string`
  * position `string`
  * limit `integer`

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
  * contentType **required** `string`: [Required] The content-type for the model.
  * description `string`: The description of the model.
  * name **required** `string`: [Required] The name of the model. Must be alphanumeric.
  * schema `string`: The schema for the model. For <code>application/json</code> models, this should be <a href="https://tools.ietf.org/html/draft-zyp-json-schema-04" target="_blank">JSON schema draft 4</a> model.

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
  * flatten `boolean`

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
  * patchOperations `array`: A list of operations describing the updates to apply to the specified resource. The patches are applied in the order specified in the list.
    * items [PatchOperation](#patchoperation)

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
  * position `string`
  * limit `integer`

#### Output
* output [RequestValidators](#requestvalidators)

### CreateRequestValidator



```js
amazonaws_apigateway.CreateRequestValidator({}, context)
```

#### Input
* input `object`
  * restapiId `string`
  * name `string`: The name of the to-be-created <a>RequestValidator</a>.
  * validateRequestBody `boolean`: A Boolean flag to indicate whether to validate request body according to the configured model schema for the method (<code>true</code>) or not (<code>false</code>).
  * validateRequestParameters `boolean`: A Boolean flag to indicate whether to validate request parameters, <code>true</code>, or not <code>false</code>.

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
  * patchOperations `array`: A list of operations describing the updates to apply to the specified resource. The patches are applied in the order specified in the list.
    * items [PatchOperation](#patchoperation)

#### Output
* output [RequestValidator](#requestvalidator)

### GetResources



```js
amazonaws_apigateway.GetResources({}, context)
```

#### Input
* input `object`
  * restapiId `string`
  * position `string`
  * limit `integer`
  * embed `array`

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
  * pathPart **required** `string`: The last path segment for this resource.

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
  * embed `array`

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
  * patchOperations `array`: A list of operations describing the updates to apply to the specified resource. The patches are applied in the order specified in the list.
    * items [PatchOperation](#patchoperation)

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
  * patchOperations `array`: A list of operations describing the updates to apply to the specified resource. The patches are applied in the order specified in the list.
    * items [PatchOperation](#patchoperation)

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
  * body `string`: The simulated request body of an incoming invocation request.
  * clientCertificateId `string`: A <a>ClientCertificate</a> identifier to use in the test invocation. API Gateway will use the certificate when making the HTTPS request to the defined back-end endpoint.
  * headers `object`: A key-value map of headers to simulate an incoming invocation request.
  * multiValueHeaders `object`: The headers as a map from string to list of values to simulate an incoming invocation request.
  * pathWithQueryString `string`: The URI path, including query string, of the simulated invocation request. Use this to specify path parameters and query string parameters.
  * stageVariables `object`: A key-value map of stage variables to simulate an invocation on a deployed <a>Stage</a>.

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
  * apiKeyRequired `boolean`: Specifies whether the method required a valid <a>ApiKey</a>.
  * authorizationScopes `array`: A list of authorization scopes configured on the method. The scopes are used with a <code>COGNITO_USER_POOLS</code> authorizer to authorize the method invocation. The authorization works by matching the method scopes against the scopes parsed from the access token in the incoming request. The method invocation is authorized if any method scopes matches a claimed scope in the access token. Otherwise, the invocation is not authorized. When the method scope is configured, the client must provide an access token instead of an identity token for authorization purposes.
    * items [String](#string)
  * authorizationType **required** `string`: [Required] The method's authorization type. Valid values are <code>NONE</code> for open access, <code>AWS_IAM</code> for using AWS IAM permissions, <code>CUSTOM</code> for using a custom authorizer, or <code>COGNITO_USER_POOLS</code> for using a Cognito user pool.
  * authorizerId `string`: Specifies the identifier of an <a>Authorizer</a> to use on this Method, if the type is CUSTOM or COGNITO_USER_POOLS. The authorizer identifier is generated by API Gateway when you created the authorizer.
  * operationName `string`: A human-friendly operation identifier for the method. For example, you can assign the <code>operationName</code> of <code>ListPets</code> for the <code>GET /pets</code> method in the <code>PetStore</code> example.
  * requestModels `object`: Specifies the <a>Model</a> resources used for the request's content type. Request models are represented as a key/value map, with a content type as the key and a <a>Model</a> name as the value.
  * requestParameters `object`: A key-value map defining required or optional method request parameters that can be accepted by API Gateway. A key defines a method request parameter name matching the pattern of <code>method.request.{location}.{name}</code>, where <code>location</code> is <code>querystring</code>, <code>path</code>, or <code>header</code> and <code>name</code> is a valid and unique parameter name. The value associated with the key is a Boolean flag indicating whether the parameter is required (<code>true</code>) or optional (<code>false</code>). The method request parameter names defined here are available in <a>Integration</a> to be mapped to integration request parameters or body-mapping templates.
  * requestValidatorId `string`: The identifier of a <a>RequestValidator</a> for validating the method request.

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
  * patchOperations `array`: A list of operations describing the updates to apply to the specified resource. The patches are applied in the order specified in the list.
    * items [PatchOperation](#patchoperation)

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
  * cacheKeyParameters `array`: A list of request parameters whose values API Gateway caches. To be valid values for <code>cacheKeyParameters</code>, these parameters must also be specified for <a>Method</a> <code>requestParameters</code>.
    * items [String](#string)
  * cacheNamespace `string`: Specifies a group of related cached parameters. By default, API Gateway uses the resource ID as the <code>cacheNamespace</code>. You can specify the same <code>cacheNamespace</code> across resources to return the same cached data for requests to different resources.
  * connectionId `string`: The (<a href="https://docs.aws.amazon.com/apigateway/api-reference/resource/vpc-link/#id"><code>id</code></a>) of the <a>VpcLink</a> used for the integration when <code>connectionType=VPC_LINK</code> and undefined, otherwise.
  * connectionType `string` (values: INTERNET, VPC_LINK): The type of the network connection to the integration endpoint. The valid value is <code>INTERNET</code> for connections through the public routable internet or <code>VPC_LINK</code> for private connections between API Gateway and a network load balancer in a VPC. The default value is <code>INTERNET</code>.
  * contentHandling `string` (values: CONVERT_TO_BINARY, CONVERT_TO_TEXT): <p>Specifies how to handle request payload content type conversions. Supported values are <code>CONVERT_TO_BINARY</code> and <code>CONVERT_TO_TEXT</code>, with the following behaviors:</p> <ul> <li><p><code>CONVERT_TO_BINARY</code>: Converts a request payload from a Base64-encoded string to the corresponding binary blob.</p></li> <li><p><code>CONVERT_TO_TEXT</code>: Converts a request payload from a binary blob to a Base64-encoded string.</p></li> </ul> <p>If this property is not defined, the request payload will be passed through from the method request to integration request without modification, provided that the <code>passthroughBehavior</code> is configured to support payload pass-through.</p>
  * credentials `string`: Specifies whether credentials are required for a put integration.
  * httpMethod `string`: Specifies a put integration HTTP method. When the integration type is HTTP or AWS, this field is required.
  * passthroughBehavior `string`: <p>Specifies the pass-through behavior for incoming requests based on the Content-Type header in the request, and the available mapping templates specified as the <code>requestTemplates</code> property on the Integration resource. There are three valid values: <code>WHEN_NO_MATCH</code>, <code>WHEN_NO_TEMPLATES</code>, and <code>NEVER</code>. </p> <ul> <li><p><code>WHEN_NO_MATCH</code> passes the request body for unmapped content types through to the integration back end without transformation.</p></li> <li><p><code>NEVER</code> rejects unmapped content types with an HTTP 415 'Unsupported Media Type' response.</p></li> <li><p><code>WHEN_NO_TEMPLATES</code> allows pass-through when the integration has NO content types mapped to templates. However if there is at least one content type defined, unmapped content types will be rejected with the same 415 response.</p></li> </ul>
  * requestParameters `object`: A key-value map specifying request parameters that are passed from the method request to the back end. The key is an integration request parameter name and the associated value is a method request parameter value or static value that must be enclosed within single quotes and pre-encoded as required by the back end. The method request parameter value must match the pattern of <code>method.request.{location}.{name}</code>, where <code>location</code> is <code>querystring</code>, <code>path</code>, or <code>header</code> and <code>name</code> must be a valid and unique method request parameter name.
  * requestTemplates `object`: Represents a map of Velocity templates that are applied on the request payload based on the value of the Content-Type header sent by the client. The content type value is the key in this map, and the template (as a String) is the value.
  * timeoutInMillis `integer`: Custom timeout between 50 and 29,000 milliseconds. The default value is 29,000 milliseconds or 29 seconds.
  * tlsConfig `object`
    * insecureSkipVerification
  * type **required** `string` (values: HTTP, AWS, MOCK, HTTP_PROXY, AWS_PROXY): The integration type. The valid value is <code>HTTP</code> for integrating an API method with an HTTP backend; <code>AWS</code> with any AWS service endpoints; <code>MOCK</code> for testing without actually invoking the backend; <code>HTTP_PROXY</code> for integrating with the HTTP proxy integration; <code>AWS_PROXY</code> for integrating with the Lambda proxy integration. 
  * uri `string`: <p>Specifies Uniform Resource Identifier (URI) of the integration endpoint.</p> <ul> <li><p> For <code>HTTP</code> or <code>HTTP_PROXY</code> integrations, the URI must be a fully formed, encoded HTTP(S) URL according to the <a href="https://en.wikipedia.org/wiki/Uniform_Resource_Identifier" target="_blank">RFC-3986 specification</a>, for either standard integration, where <code>connectionType</code> is not <code>VPC_LINK</code>, or private integration, where <code>connectionType</code> is <code>VPC_LINK</code>. For a private HTTP integration, the URI is not used for routing. </p> </li> <li><p> For <code>AWS</code> or <code>AWS_PROXY</code> integrations, the URI is of the form <code>arn:aws:apigateway:{region}:{subdomain.service|service}:path|action/{service_api}</code>. Here, <code>{Region}</code> is the API Gateway region (e.g., <code>us-east-1</code>); <code>{service}</code> is the name of the integrated AWS service (e.g., <code>s3</code>); and <code>{subdomain}</code> is a designated subdomain supported by certain AWS service for fast host-name lookup. <code>action</code> can be used for an AWS service action-based API, using an <code>Action={name}&amp;{p1}={v1}&amp;p2={v2}...</code> query string. The ensuing <code>{service_api}</code> refers to a supported action <code>{name}</code> plus any required input parameters. Alternatively, <code>path</code> can be used for an AWS service path-based API. The ensuing <code>service_api</code> refers to the path to an AWS service resource, including the region of the integrated AWS service, if applicable. For example, for integration with the S3 API of <code><a href="https://docs.aws.amazon.com/AmazonS3/latest/API/RESTObjectGET.html">GetObject</a></code>, the <code>uri</code> can be either <code>arn:aws:apigateway:us-west-2:s3:action/GetObject&amp;Bucket={bucket}&amp;Key={key}</code> or <code>arn:aws:apigateway:us-west-2:s3:path/{bucket}/{key}</code></p> </li></ul>

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
  * patchOperations `array`: A list of operations describing the updates to apply to the specified resource. The patches are applied in the order specified in the list.
    * items [PatchOperation](#patchoperation)

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
  * contentHandling `string` (values: CONVERT_TO_BINARY, CONVERT_TO_TEXT): <p>Specifies how to handle response payload content type conversions. Supported values are <code>CONVERT_TO_BINARY</code> and <code>CONVERT_TO_TEXT</code>, with the following behaviors:</p> <ul> <li><p><code>CONVERT_TO_BINARY</code>: Converts a response payload from a Base64-encoded string to the corresponding binary blob.</p></li> <li><p><code>CONVERT_TO_TEXT</code>: Converts a response payload from a binary blob to a Base64-encoded string.</p></li> </ul> <p>If this property is not defined, the response payload will be passed through from the integration response to the method response without modification.</p>
  * responseParameters `object`: A key-value map specifying response parameters that are passed to the method response from the back end. The key is a method response header parameter name and the mapped value is an integration response header value, a static value enclosed within a pair of single quotes, or a JSON expression from the integration response body. The mapping key must match the pattern of <code>method.response.header.{name}</code>, where <code>name</code> is a valid and unique header name. The mapped non-static value must match the pattern of <code>integration.response.header.{name}</code> or <code>integration.response.body.{JSON-expression}</code>, where <code>name</code> must be a valid and unique response header name and <code>JSON-expression</code> a valid JSON expression without the <code>$</code> prefix.
  * responseTemplates `object`: Specifies a put integration response's templates.
  * selectionPattern `string`: Specifies the selection pattern of a put integration response.

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
  * patchOperations `array`: A list of operations describing the updates to apply to the specified resource. The patches are applied in the order specified in the list.
    * items [PatchOperation](#patchoperation)

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
  * responseModels `object`: Specifies the <a>Model</a> resources used for the response's content type. Response models are represented as a key/value map, with a content type as the key and a <a>Model</a> name as the value.
  * responseParameters `object`: A key-value map specifying required or optional response parameters that API Gateway can send back to the caller. A key defines a method response header name and the associated value is a Boolean flag indicating whether the method response parameter is required or not. The method response header names must match the pattern of <code>method.response.header.{name}</code>, where <code>name</code> is a valid and unique header name. The response parameter names defined here are available in the integration response to be mapped from an integration response header expressed in <code>integration.response.header.{name}</code>, a static value enclosed within a pair of single quotes (e.g., <code>'application/json'</code>), or a JSON expression from the back-end response payload in the form of <code>integration.response.body.{JSON-expression}</code>, where <code>JSON-expression</code> is a valid JSON expression without the <code>$</code> prefix.)

#### Output
*Output schema unknown*

### GetStages



```js
amazonaws_apigateway.GetStages({}, context)
```

#### Input
* input `object`
  * restapiId `string`
  * deploymentId `string`

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
  * tags `object`: The key-value map of strings. The valid character set is [a-zA-Z+-=._:/]. The tag key can be up to 128 characters and must not start with <code>aws:</code>. The tag value can be up to 256 characters.
  * cacheClusterEnabled `boolean`: Whether cache clustering is enabled for the stage.
  * cacheClusterSize `string` (values: 0.5, 1.6, 6.1, 13.5, 28.4, 58.2, 118, 237): Returns the size of the <b>CacheCluster</b>.
  * canarySettings `object`: Configuration settings of a canary deployment.
    * deploymentId
    * percentTraffic
    * stageVariableOverrides
    * useStageCache
  * deploymentId **required** `string`: [Required] The identifier of the <a>Deployment</a> resource for the <a>Stage</a> resource.
  * description `string`: The description of the <a>Stage</a> resource.
  * documentationVersion `string`: The version of the associated API documentation.
  * stageName **required** `string`: [Required] The name for the <a>Stage</a> resource. Stage names can only contain alphanumeric characters, hyphens, and underscores. Maximum length is 128 characters.
  * tracingEnabled `boolean`: Specifies whether active tracing with X-ray is enabled for the <a>Stage</a>.
  * variables `object`: A map that defines the stage variables for the new <a>Stage</a> resource. Variable names can have alphanumeric and underscore characters, and the values must match <code>[A-Za-z0-9-._~:/?#&amp;=,]+</code>.

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
  * patchOperations `array`: A list of operations describing the updates to apply to the specified resource. The patches are applied in the order specified in the list.
    * items [PatchOperation](#patchoperation)

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
  * parameters `object`
  * Accept `string`

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
  * parameters `object`

#### Output
* output [SdkResponse](#sdkresponse)

### GetSdkTypes



```js
amazonaws_apigateway.GetSdkTypes({}, context)
```

#### Input
* input `object`
  * position `string`
  * limit `integer`

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

### GetTags



```js
amazonaws_apigateway.GetTags({}, context)
```

#### Input
* input `object`
  * resourceArn `string`
  * position `string`
  * limit `integer`

#### Output
* output [Tags](#tags)

### TagResource



```js
amazonaws_apigateway.TagResource({
  "tags": {}
}, context)
```

#### Input
* input `object`
  * resourceArn `string`
  * tags **required** `object`: [Required] The key-value map of strings. The valid character set is [a-zA-Z+-=._:/]. The tag key can be up to 128 characters and must not start with <code>aws:</code>. The tag value can be up to 256 characters.

#### Output
*Output schema unknown*

### UntagResource



```js
amazonaws_apigateway.UntagResource({
  "tagKeys": []
}, context)
```

#### Input
* input `object`
  * resourceArn `string`
  * tagKeys **required** `array`

#### Output
*Output schema unknown*

### GetUsagePlans



```js
amazonaws_apigateway.GetUsagePlans({}, context)
```

#### Input
* input `object`
  * position `string`
  * keyId `string`
  * limit `integer`

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
  * tags `object`: The key-value map of strings. The valid character set is [a-zA-Z+-=._:/]. The tag key can be up to 128 characters and must not start with <code>aws:</code>. The tag value can be up to 256 characters.
  * apiStages `array`: The associated API stages of the usage plan.
    * items [ApiStage](#apistage)
  * description `string`: The description of the usage plan.
  * name **required** `string`: [Required] The name of the usage plan.
  * quota `object`: Quotas configured for a usage plan.
    * limit
    * offset
    * period
  * throttle `object`:  The API request rate limits.
    * burstLimit
    * rateLimit

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
  * patchOperations `array`: A list of operations describing the updates to apply to the specified resource. The patches are applied in the order specified in the list.
    * items [PatchOperation](#patchoperation)

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
  * usageplanId **required** `string`
  * position `string`
  * limit `integer`
  * name `string`

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
  * keyId **required** `string`: [Required] The identifier of a <a>UsagePlanKey</a> resource for a plan customer.
  * keyType **required** `string`: [Required] The type of a <a>UsagePlanKey</a> resource for a plan customer.

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
  * patchOperations `array`: A list of operations describing the updates to apply to the specified resource. The patches are applied in the order specified in the list.
    * items [PatchOperation](#patchoperation)

#### Output
* output [Usage](#usage)

### GetUsage



```js
amazonaws_apigateway.GetUsage({
  "usageplanId": "",
  "startDate": "",
  "endDate": ""
}, context)
```

#### Input
* input `object`
  * usageplanId **required** `string`
  * keyId `string`
  * startDate **required** `string`
  * endDate **required** `string`
  * position `string`
  * limit `integer`

#### Output
* output [Usage](#usage)

### GetVpcLinks



```js
amazonaws_apigateway.GetVpcLinks({}, context)
```

#### Input
* input `object`
  * position `string`
  * limit `integer`

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
  * tags `object`: The key-value map of strings. The valid character set is [a-zA-Z+-=._:/]. The tag key can be up to 128 characters and must not start with <code>aws:</code>. The tag value can be up to 256 characters.
  * description `string`: The description of the VPC link.
  * name **required** `string`: [Required] The name used to label and identify the VPC link.
  * targetArns **required** `array`: [Required] The ARN of the network load balancer of the VPC targeted by the VPC link. The network load balancer must be owned by the same AWS account of the API owner.
    * items [String](#string)

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
  * patchOperations `array`: A list of operations describing the updates to apply to the specified resource. The patches are applied in the order specified in the list.
    * items [PatchOperation](#patchoperation)

#### Output
* output [VpcLink](#vpclink)



## Definitions

### AccessLogSettings
* AccessLogSettings `object`: Access log settings, including the access log format and access log destination ARN.
  * destinationArn
  * format

### Account
* Account `object`: <p>Represents an AWS account that is associated with API Gateway.</p> <div class="remarks"> <p>To view the account info, call <code>GET</code> on this resource.</p> <h4>Error Codes</h4> <p>The following exception may be thrown when the request fails.</p> <ul> <li>UnauthorizedException</li> <li>NotFoundException</li> <li>TooManyRequestsException</li> </ul> <p>For detailed error code information, including the corresponding HTTP Status Codes, see <a href="https://docs.aws.amazon.com/apigateway/api-reference/handling-errors/#api-error-codes">API Gateway Error Codes</a></p> <h4>Example: Get the information about an account.</h4> <h5>Request</h5> <pre><code>GET /account HTTP/1.1 Content-Type: application/json Host: apigateway.us-east-1.amazonaws.com X-Amz-Date: 20160531T184618Z Authorization: AWS4-HMAC-SHA256 Credential={access_key_ID}/us-east-1/apigateway/aws4_request, SignedHeaders=content-type;host;x-amz-date, Signature={sig4_hash} </code></pre> <h5>Response</h5> <p>The successful response returns a <code>200 OK</code> status code and a payload similar to the following:</p> <pre><code>{ "_links": { "curies": { "href": "https://docs.aws.amazon.com/apigateway/latest/developerguide/account-apigateway-{rel}.html", "name": "account", "templated": true }, "self": { "href": "/account" }, "account:update": { "href": "/account" } }, "cloudwatchRoleArn": "arn:aws:iam::123456789012:role/apigAwsProxyRole", "throttleSettings": { "rateLimit": 500, "burstLimit": 1000 } } </code></pre> <p>In addition to making the REST API call directly, you can use the AWS CLI and an AWS SDK to access this resource.</p> </div> <div class="seeAlso"> <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-limits.html">API Gateway Limits</a> <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/welcome.html">Developer Guide</a>, <a href="https://docs.aws.amazon.com/cli/latest/reference/apigateway/get-account.html">AWS CLI</a> </div>
  * apiKeyVersion
  * cloudwatchRoleArn
  * features
    * items [String](#string)
  * throttleSettings
    * burstLimit
    * rateLimit

### ApiKey
* ApiKey `object`: <p>A resource that can be distributed to callers for executing <a>Method</a> resources that require an API key. API keys can be mapped to any <a>Stage</a> on any <a>RestApi</a>, which indicates that the callers with the API key can make requests to that stage.</p> <div class="seeAlso"> <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-api-keys.html">Use API Keys</a> </div>
  * tags
  * createdDate
  * customerId
  * description
  * enabled
  * id
  * lastUpdatedDate
  * name
  * stageKeys
    * items [String](#string)
  * value

### ApiKeyIds
* ApiKeyIds `object`: The identifier of an <a>ApiKey</a> used in a <a>UsagePlan</a>.
  * ids
    * items [String](#string)
  * warnings
    * items [String](#string)

### ApiKeySourceType
* ApiKeySourceType `string` (values: HEADER, AUTHORIZER)

### ApiKeys
* ApiKeys `object`: <p>Represents a collection of API keys as represented by an <a>ApiKeys</a> resource.</p> <div class="seeAlso"> <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-api-keys.html">Use API Keys</a> </div>
  * items
    * items [ApiKey](#apikey)
  * position [String](#string)
  * warnings
    * items [String](#string)

### ApiKeysFormat
* ApiKeysFormat `string` (values: csv)

### ApiStage
* ApiStage `object`: API stage name of the associated API stage in a usage plan.
  * apiId
  * stage
  * throttle

### Authorizer
* Authorizer `object`: <p>Represents an authorization layer for methods. If enabled on a method, API Gateway will activate the authorizer when a client calls the method.</p> <div class="seeAlso"> <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-use-lambda-authorizer.html">Use Lambda Function as Authorizer</a> <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-integrate-with-cognito.html">Use Cognito User Pool as Authorizer</a> </div>
  * authType
  * authorizerCredentials
  * authorizerResultTtlInSeconds
  * authorizerUri
  * id
  * identitySource
  * identityValidationExpression
  * name
  * providerARNs
    * items [ProviderARN](#providerarn)
  * type

### AuthorizerType
* AuthorizerType `string` (values: TOKEN, REQUEST, COGNITO_USER_POOLS): The authorizer type. Valid values are <code>TOKEN</code> for a Lambda function using a single authorization token submitted in a custom header, <code>REQUEST</code> for a Lambda function using incoming request parameters, and <code>COGNITO_USER_POOLS</code> for using an Amazon Cognito user pool.

### Authorizers
* Authorizers `object`: <p>Represents a collection of <a>Authorizer</a> resources.</p> <div class="seeAlso"> <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-use-lambda-authorizer.html">Use Lambda Function as Authorizer</a> <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-integrate-with-cognito.html">Use Cognito User Pool as Authorizer</a> </div>
  * items
    * items [Authorizer](#authorizer)
  * position [String](#string)

### BadRequestException


### BasePathMapping
* BasePathMapping `object`: <p>Represents the base path that callers of the API must provide as part of the URL after the domain name.</p> <div class="remarks">A custom domain name plus a <code>BasePathMapping</code> specification identifies a deployed <a>RestApi</a> in a given stage of the owner <a>Account</a>.</div> <div class="seeAlso"> <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-custom-domains.html">Use Custom Domain Names</a> </div>
  * basePath
  * restApiId
  * stage

### BasePathMappings
* BasePathMappings `object`: <p>Represents a collection of <a>BasePathMapping</a> resources.</p> <div class="seeAlso"> <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-custom-domains.html">Use Custom Domain Names</a> </div>
  * items
    * items [BasePathMapping](#basepathmapping)
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
  * deploymentId
  * percentTraffic
  * stageVariableOverrides
  * useStageCache

### ClientCertificate
* ClientCertificate `object`: <p>Represents a client certificate used to configure client-side SSL authentication while sending requests to the integration endpoint.</p> <div class="remarks">Client certificates are used to authenticate an API by the backend server. To authenticate an API client (or user), use IAM roles and policies, a custom <a>Authorizer</a> or an Amazon Cognito user pool.</div> <div class="seeAlso"> <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/getting-started-client-side-ssl-authentication.html">Use Client-Side Certificate</a> </div>
  * tags
  * clientCertificateId
  * createdDate
  * description
  * expirationDate
  * pemEncodedCertificate

### ClientCertificates
* ClientCertificates `object`: <p>Represents a collection of <a>ClientCertificate</a> resources.</p> <div class="seeAlso"> <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/getting-started-client-side-ssl-authentication.html">Use Client-Side Certificate</a> </div>
  * items
    * items [ClientCertificate](#clientcertificate)
  * position [String](#string)

### ConflictException


### ConnectionType
* ConnectionType `string` (values: INTERNET, VPC_LINK)

### ContentHandlingStrategy
* ContentHandlingStrategy `string` (values: CONVERT_TO_BINARY, CONVERT_TO_TEXT)

### CreateApiKeyRequest
* CreateApiKeyRequest `object`: Request to create an <a>ApiKey</a> resource.
  * tags
  * customerId
  * description
  * enabled
  * generateDistinctId
  * name
  * stageKeys
    * items [StageKey](#stagekey)
  * value

### CreateAuthorizerRequest
* CreateAuthorizerRequest `object`: Request to add a new <a>Authorizer</a> to an existing <a>RestApi</a> resource.
  * authType
  * authorizerCredentials
  * authorizerResultTtlInSeconds
  * authorizerUri
  * identitySource
  * identityValidationExpression
  * name **required**
  * providerARNs
    * items [ProviderARN](#providerarn)
  * type **required**

### CreateBasePathMappingRequest
* CreateBasePathMappingRequest `object`: Requests API Gateway to create a new <a>BasePathMapping</a> resource.
  * basePath
  * restApiId **required**
  * stage

### CreateDeploymentRequest
* CreateDeploymentRequest `object`: Requests API Gateway to create a <a>Deployment</a> resource.
  * cacheClusterEnabled
  * cacheClusterSize
  * canarySettings
    * percentTraffic
    * stageVariableOverrides
    * useStageCache
  * description
  * stageDescription
  * stageName
  * tracingEnabled
  * variables

### CreateDocumentationPartRequest
* CreateDocumentationPartRequest `object`: Creates a new documentation part of a given API.
  * location **required**
    * method
    * name
    * path
    * statusCode
    * type **required**
  * properties **required**

### CreateDocumentationVersionRequest
* CreateDocumentationVersionRequest `object`: Creates a new documentation version of a given API.
  * description
  * documentationVersion **required**
  * stageName

### CreateDomainNameRequest
* CreateDomainNameRequest `object`: A request to create a new domain name.
  * tags
  * certificateArn
  * certificateBody
  * certificateChain
  * certificateName
  * certificatePrivateKey
  * domainName **required**
  * endpointConfiguration
    * types
      * items [EndpointType](#endpointtype)
    * vpcEndpointIds
      * items [String](#string)
  * mutualTlsAuthentication [MutualTlsAuthenticationInput](#mutualtlsauthenticationinput)
  * regionalCertificateArn
  * regionalCertificateName
  * securityPolicy

### CreateModelRequest
* CreateModelRequest `object`: Request to add a new <a>Model</a> to an existing <a>RestApi</a> resource.
  * contentType **required**
  * description
  * name **required**
  * schema

### CreateRequestValidatorRequest
* CreateRequestValidatorRequest `object`: Creates a <a>RequestValidator</a> of a given <a>RestApi</a>.
  * name
  * validateRequestBody
  * validateRequestParameters

### CreateResourceRequest
* CreateResourceRequest `object`: Requests API Gateway to create a <a>Resource</a> resource.
  * pathPart **required**

### CreateRestApiRequest
* CreateRestApiRequest `object`: The POST Request to add a new <a>RestApi</a> resource to your collection.
  * tags
  * apiKeySource
  * binaryMediaTypes
    * items [String](#string)
  * cloneFrom
  * description
  * disableExecuteApiEndpoint
  * endpointConfiguration
    * types
      * items [EndpointType](#endpointtype)
    * vpcEndpointIds
      * items [String](#string)
  * minimumCompressionSize
  * name **required**
  * policy
  * version

### CreateStageRequest
* CreateStageRequest `object`: Requests API Gateway to create a <a>Stage</a> resource.
  * tags
  * cacheClusterEnabled
  * cacheClusterSize
  * canarySettings
    * deploymentId
    * percentTraffic
    * stageVariableOverrides
    * useStageCache
  * deploymentId **required**
  * description
  * documentationVersion
  * stageName **required**
  * tracingEnabled
  * variables

### CreateUsagePlanKeyRequest
* CreateUsagePlanKeyRequest `object`: The POST request to create a usage plan key for adding an existing API key to a usage plan.
  * keyId **required**
  * keyType **required**

### CreateUsagePlanRequest
* CreateUsagePlanRequest `object`: The POST request to create a usage plan with the name, description, throttle limits and quota limits, as well as the associated API stages, specified in the payload.
  * tags
  * apiStages
    * items [ApiStage](#apistage)
  * description
  * name **required**
  * quota
    * limit
    * offset
    * period
  * throttle
    * burstLimit
    * rateLimit

### CreateVpcLinkRequest
* CreateVpcLinkRequest `object`: Creates a VPC link, under the caller's account in a selected region, in an asynchronous operation that typically takes 2-4 minutes to complete and become operational. The caller must have permissions to create and update VPC Endpoint services.
  * tags
  * description
  * name **required**
  * targetArns **required**
    * items [String](#string)

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
* Deployment `object`: <p>An immutable representation of a <a>RestApi</a> resource that can be called by users using <a>Stages</a>. A deployment must be associated with a <a>Stage</a> for it to be callable over the Internet.</p> <div class="remarks">To create a deployment, call <code>POST</code> on the <a>Deployments</a> resource of a <a>RestApi</a>. To view, update, or delete a deployment, call <code>GET</code>, <code>PATCH</code>, or <code>DELETE</code> on the specified deployment resource (<code>/restapis/{restapi_id}/deployments/{deployment_id}</code>).</div> <div class="seeAlso"><a>RestApi</a>, <a>Deployments</a>, <a>Stage</a>, <a href="https://docs.aws.amazon.com/cli/latest/reference/apigateway/get-deployment.html">AWS CLI</a>, <a href="https://aws.amazon.com/tools/">AWS SDKs</a> </div>
  * apiSummary
  * createdDate
  * description
  * id

### DeploymentCanarySettings
* DeploymentCanarySettings `object`: The input configuration for a canary deployment.
  * percentTraffic
  * stageVariableOverrides
  * useStageCache

### Deployments
* Deployments `object`: <p>Represents a collection resource that contains zero or more references to your existing deployments, and links that guide you on how to interact with your collection. The collection offers a paginated view of the contained deployments.</p> <div class="remarks">To create a new deployment of a <a>RestApi</a>, make a <code>POST</code> request against this resource. To view, update, or delete an existing deployment, make a <code>GET</code>, <code>PATCH</code>, or <code>DELETE</code> request, respectively, on a specified <a>Deployment</a> resource.</div> <div class="seeAlso"> <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-deploy-api.html">Deploying an API</a>, <a href="https://docs.aws.amazon.com/cli/latest/reference/apigateway/get-deployment.html">AWS CLI</a>, <a href="https://aws.amazon.com/tools/">AWS SDKs</a> </div>
  * items
    * items [Deployment](#deployment)
  * position [String](#string)

### DocumentationPart
* DocumentationPart `object`: <p>A documentation part for a targeted API entity.</p> <div class="remarks"> <p>A documentation part consists of a content map (<code>properties</code>) and a target (<code>location</code>). The target specifies an API entity to which the documentation content applies. The supported API entity types are <code>API</code>, <code>AUTHORIZER</code>, <code>MODEL</code>, <code>RESOURCE</code>, <code>METHOD</code>, <code>PATH_PARAMETER</code>, <code>QUERY_PARAMETER</code>, <code>REQUEST_HEADER</code>, <code>REQUEST_BODY</code>, <code>RESPONSE</code>, <code>RESPONSE_HEADER</code>, and <code>RESPONSE_BODY</code>. Valid <code>location</code> fields depend on the API entity type. All valid fields are not required.</p> <p>The content map is a JSON string of API-specific key-value pairs. Although an API can use any shape for the content map, only the OpenAPI-compliant documentation fields will be injected into the associated API entity definition in the exported OpenAPI definition file.</p></div> <div class="seeAlso"> <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-documenting-api.html">Documenting an API</a>, <a>DocumentationParts</a> </div>
  * id
  * location
    * method
    * name
    * path
    * statusCode
    * type **required**
  * properties

### DocumentationPartIds
* DocumentationPartIds `object`: <p>A collection of the imported <a>DocumentationPart</a> identifiers.</p> <div class="remarks">This is used to return the result when documentation parts in an external (e.g., OpenAPI) file are imported into API Gateway</div> <div class="seeAlso"> <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-documenting-api.html">Documenting an API</a>, <a href="https://docs.aws.amazon.com/apigateway/api-reference/link-relation/documentationpart-import/">documentationpart:import</a>, <a>DocumentationPart</a> </div>
  * ids
    * items [String](#string)
  * warnings
    * items [String](#string)

### DocumentationPartLocation
* DocumentationPartLocation `object`: Specifies the target API entity to which the documentation applies.
  * method
  * name
  * path
  * statusCode
  * type **required**

### DocumentationPartLocationStatusCode
* DocumentationPartLocationStatusCode `string`

### DocumentationPartType
* DocumentationPartType `string` (values: API, AUTHORIZER, MODEL, RESOURCE, METHOD, PATH_PARAMETER, QUERY_PARAMETER, REQUEST_HEADER, REQUEST_BODY, RESPONSE, RESPONSE_HEADER, RESPONSE_BODY)

### DocumentationParts
* DocumentationParts `object`: <p>The collection of documentation parts of an API.</p> <div class="remarks"/> <div class="seeAlso"> <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-documenting-api.html">Documenting an API</a>, <a>DocumentationPart</a> </div>
  * items
    * items [DocumentationPart](#documentationpart)
  * position [String](#string)

### DocumentationVersion
* DocumentationVersion `object`: <p>A snapshot of the documentation of an API.</p> <div class="remarks"><p>Publishing API documentation involves creating a documentation version associated with an API stage and exporting the versioned documentation to an external (e.g., OpenAPI) file.</p></div> <div class="seeAlso"> <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-documenting-api.html">Documenting an API</a>, <a>DocumentationPart</a>, <a>DocumentationVersions</a> </div>
  * createdDate
  * description
  * version

### DocumentationVersions
* DocumentationVersions `object`: <p>The collection of documentation snapshots of an API. </p> <div class="remarks"><p>Use the <a>DocumentationVersions</a> to manage documentation snapshots associated with various API stages.</p></div> <div class="seeAlso"> <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-documenting-api.html">Documenting an API</a>, <a>DocumentationPart</a>, <a>DocumentationVersion</a> </div>
  * items
    * items [DocumentationVersion](#documentationversion)
  * position [String](#string)

### DomainName
* DomainName `object`: <p>Represents a custom domain name as a user-friendly host name of an API (<a>RestApi</a>).</p> <div class="Remarks"> <p>When you deploy an API, API Gateway creates a default host name for the API. This default API host name is of the <code>{restapi-id}.execute-api.{region}.amazonaws.com</code> format. With the default host name, you can access the API's root resource with the URL of <code>https://{restapi-id}.execute-api.{region}.amazonaws.com/{stage}/</code>. When you set up a custom domain name of <code>apis.example.com</code> for this API, you can then access the same resource using the URL of the <code>https://apis.examples.com/myApi</code>, where <code>myApi</code> is the base path mapping (<a>BasePathMapping</a>) of your API under the custom domain name. </p> </div> <div class="seeAlso"> <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-custom-domains.html">Set a Custom Host Name for an API</a> </div>
  * tags
  * certificateArn
  * certificateName
  * certificateUploadDate
  * distributionDomainName
  * distributionHostedZoneId
  * domainName
  * domainNameStatus
  * domainNameStatusMessage
  * endpointConfiguration
    * types
      * items [EndpointType](#endpointtype)
    * vpcEndpointIds
      * items [String](#string)
  * mutualTlsAuthentication
    * truststoreUri
    * truststoreVersion
    * truststoreWarnings
      * items [String](#string)
  * regionalCertificateArn
  * regionalCertificateName
  * regionalDomainName
  * regionalHostedZoneId
  * securityPolicy

### DomainNameStatus
* DomainNameStatus `string` (values: AVAILABLE, UPDATING, PENDING)

### DomainNames
* DomainNames `object`: <p>Represents a collection of <a>DomainName</a> resources.</p> <div class="seeAlso"> <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-custom-domains.html">Use Client-Side Certificate</a> </div>
  * items
    * items [DomainName](#domainname)
  * position [String](#string)

### Double
* Double `number`

### EndpointConfiguration
* EndpointConfiguration `object`: The endpoint configuration to indicate the types of endpoints an API (<a>RestApi</a>) or its custom domain name (<a>DomainName</a>) has. 
  * types
    * items [EndpointType](#endpointtype)
  * vpcEndpointIds
    * items [String](#string)

### EndpointType
* EndpointType `string` (values: REGIONAL, EDGE, PRIVATE): The endpoint type. The valid values are <code>EDGE</code> for edge-optimized API setup, most suitable for mobile applications; <code>REGIONAL</code> for regional API endpoint setup, most suitable for calling from AWS Region; and <code>PRIVATE</code> for private APIs.

### ExportResponse
* ExportResponse `object`: The binary blob response to <a>GetExport</a>, which contains the generated SDK.
  * body

### FlushStageAuthorizersCacheRequest
* FlushStageAuthorizersCacheRequest `object`: Request to flush authorizer cache entries on a specified stage.

### FlushStageCacheRequest
* FlushStageCacheRequest `object`: Requests API Gateway to flush a stage's cache.

### GatewayResponse
* GatewayResponse `object`: <p>A gateway response of a given response type and status code, with optional response parameters and mapping templates.</p> <div class="remarks"> For more information about valid gateway response types, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/supported-gateway-response-types.html">Gateway Response Types Supported by API Gateway</a> <div class="example"> <h4>Example: Get a Gateway Response of a given response type</h4> <h5>Request</h5> <p>This example shows how to get a gateway response of the <code>MISSING_AUTHENTICATION_TOKEN</code> type.</p> <pre><code>GET /restapis/o81lxisefl/gatewayresponses/MISSING_AUTHENTICATION_TOKEN HTTP/1.1 Host: beta-apigateway.us-east-1.amazonaws.com Content-Type: application/json X-Amz-Date: 20170503T202516Z Authorization: AWS4-HMAC-SHA256 Credential={access-key-id}/20170503/us-east-1/apigateway/aws4_request, SignedHeaders=content-type;host;x-amz-date, Signature=1b52460e3159c1a26cff29093855d50ea141c1c5b937528fecaf60f51129697a Cache-Control: no-cache Postman-Token: 3b2a1ce9-c848-2e26-2e2f-9c2caefbed45 </code></pre> <p>The response type is specified as a URL path.</p> <h5>Response</h5> <p>The successful operation returns the <code>200 OK</code> status code and a payload similar to the following:</p> <pre><code>{ "_links": { "curies": { "href": "http://docs.aws.amazon.com/apigateway/latest/developerguide/restapi-gatewayresponse-{rel}.html", "name": "gatewayresponse", "templated": true }, "self": { "href": "/restapis/o81lxisefl/gatewayresponses/MISSING_AUTHENTICATION_TOKEN" }, "gatewayresponse:delete": { "href": "/restapis/o81lxisefl/gatewayresponses/MISSING_AUTHENTICATION_TOKEN" }, "gatewayresponse:put": { "href": "/restapis/o81lxisefl/gatewayresponses/{response_type}", "templated": true }, "gatewayresponse:update": { "href": "/restapis/o81lxisefl/gatewayresponses/MISSING_AUTHENTICATION_TOKEN" } }, "defaultResponse": false, "responseParameters": { "gatewayresponse.header.x-request-path": "method.request.path.petId", "gatewayresponse.header.Access-Control-Allow-Origin": "&apos;a.b.c&apos;", "gatewayresponse.header.x-request-query": "method.request.querystring.q", "gatewayresponse.header.x-request-header": "method.request.header.Accept" }, "responseTemplates": { "application/json": "{\n \"message\": $context.error.messageString,\n \"type\": \"$context.error.responseType\",\n \"stage\": \"$context.stage\",\n \"resourcePath\": \"$context.resourcePath\",\n \"stageVariables.a\": \"$stageVariables.a\",\n \"statusCode\": \"&apos;404&apos;\"\n}" }, "responseType": "MISSING_AUTHENTICATION_TOKEN", "statusCode": "404" }</code></pre> <p/> </div> </div> <div class="seeAlso"> <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/customize-gateway-responses.html">Customize Gateway Responses</a> </div>
  * defaultResponse
  * responseParameters
  * responseTemplates
  * responseType
  * statusCode

### GatewayResponseType
* GatewayResponseType `string` (values: DEFAULT_4XX, DEFAULT_5XX, RESOURCE_NOT_FOUND, UNAUTHORIZED, INVALID_API_KEY, ACCESS_DENIED, AUTHORIZER_FAILURE, AUTHORIZER_CONFIGURATION_ERROR, INVALID_SIGNATURE, EXPIRED_TOKEN, MISSING_AUTHENTICATION_TOKEN, INTEGRATION_FAILURE, INTEGRATION_TIMEOUT, API_CONFIGURATION_ERROR, UNSUPPORTED_MEDIA_TYPE, BAD_REQUEST_PARAMETERS, BAD_REQUEST_BODY, REQUEST_TOO_LARGE, THROTTLED, QUOTA_EXCEEDED)

### GatewayResponses
* GatewayResponses `object`: <p>The collection of the <a>GatewayResponse</a> instances of a <a>RestApi</a> as a <code>responseType</code>-to-<a>GatewayResponse</a> object map of key-value pairs. As such, pagination is not supported for querying this collection.</p> <div class="remarks"> For more information about valid gateway response types, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/supported-gateway-response-types.html">Gateway Response Types Supported by API Gateway</a> <div class="example"> <h4>Example: Get the collection of gateway responses of an API</h4> <h5>Request</h5> <p>This example request shows how to retrieve the <a>GatewayResponses</a> collection from an API.</p> <pre><code>GET /restapis/o81lxisefl/gatewayresponses HTTP/1.1 Host: beta-apigateway.us-east-1.amazonaws.com Content-Type: application/json X-Amz-Date: 20170503T220604Z Authorization: AWS4-HMAC-SHA256 Credential={access-key-id}/20170503/us-east-1/apigateway/aws4_request, SignedHeaders=content-type;host;x-amz-date, Signature=59b42fe54a76a5de8adf2c67baa6d39206f8e9ad49a1d77ccc6a5da3103a398a Cache-Control: no-cache Postman-Token: 5637af27-dc29-fc5c-9dfe-0645d52cb515 </code></pre> <p/> <h5>Response</h5> <p>The successful operation returns the <code>200 OK</code> status code and a payload similar to the following:</p> <pre><code>{ "_links": { "curies": { "href": "http://docs.aws.amazon.com/apigateway/latest/developerguide/restapi-gatewayresponse-{rel}.html", "name": "gatewayresponse", "templated": true }, "self": { "href": "/restapis/o81lxisefl/gatewayresponses" }, "first": { "href": "/restapis/o81lxisefl/gatewayresponses" }, "gatewayresponse:by-type": { "href": "/restapis/o81lxisefl/gatewayresponses/{response_type}", "templated": true }, "item": [ { "href": "/restapis/o81lxisefl/gatewayresponses/INTEGRATION_FAILURE" }, { "href": "/restapis/o81lxisefl/gatewayresponses/RESOURCE_NOT_FOUND" }, { "href": "/restapis/o81lxisefl/gatewayresponses/REQUEST_TOO_LARGE" }, { "href": "/restapis/o81lxisefl/gatewayresponses/THROTTLED" }, { "href": "/restapis/o81lxisefl/gatewayresponses/UNSUPPORTED_MEDIA_TYPE" }, { "href": "/restapis/o81lxisefl/gatewayresponses/AUTHORIZER_CONFIGURATION_ERROR" }, { "href": "/restapis/o81lxisefl/gatewayresponses/DEFAULT_5XX" }, { "href": "/restapis/o81lxisefl/gatewayresponses/DEFAULT_4XX" }, { "href": "/restapis/o81lxisefl/gatewayresponses/BAD_REQUEST_PARAMETERS" }, { "href": "/restapis/o81lxisefl/gatewayresponses/BAD_REQUEST_BODY" }, { "href": "/restapis/o81lxisefl/gatewayresponses/EXPIRED_TOKEN" }, { "href": "/restapis/o81lxisefl/gatewayresponses/ACCESS_DENIED" }, { "href": "/restapis/o81lxisefl/gatewayresponses/INVALID_API_KEY" }, { "href": "/restapis/o81lxisefl/gatewayresponses/UNAUTHORIZED" }, { "href": "/restapis/o81lxisefl/gatewayresponses/API_CONFIGURATION_ERROR" }, { "href": "/restapis/o81lxisefl/gatewayresponses/QUOTA_EXCEEDED" }, { "href": "/restapis/o81lxisefl/gatewayresponses/INTEGRATION_TIMEOUT" }, { "href": "/restapis/o81lxisefl/gatewayresponses/MISSING_AUTHENTICATION_TOKEN" }, { "href": "/restapis/o81lxisefl/gatewayresponses/INVALID_SIGNATURE" }, { "href": "/restapis/o81lxisefl/gatewayresponses/AUTHORIZER_FAILURE" } ] }, "_embedded": { "item": [ { "_links": { "self": { "href": "/restapis/o81lxisefl/gatewayresponses/INTEGRATION_FAILURE" }, "gatewayresponse:put": { "href": "/restapis/o81lxisefl/gatewayresponses/{response_type}", "templated": true }, "gatewayresponse:update": { "href": "/restapis/o81lxisefl/gatewayresponses/INTEGRATION_FAILURE" } }, "defaultResponse": true, "responseParameters": {}, "responseTemplates": { "application/json": "{\"message\":$context.error.messageString}" }, "responseType": "INTEGRATION_FAILURE", "statusCode": "504" }, { "_links": { "self": { "href": "/restapis/o81lxisefl/gatewayresponses/RESOURCE_NOT_FOUND" }, "gatewayresponse:put": { "href": "/restapis/o81lxisefl/gatewayresponses/{response_type}", "templated": true }, "gatewayresponse:update": { "href": "/restapis/o81lxisefl/gatewayresponses/RESOURCE_NOT_FOUND" } }, "defaultResponse": true, "responseParameters": {}, "responseTemplates": { "application/json": "{\"message\":$context.error.messageString}" }, "responseType": "RESOURCE_NOT_FOUND", "statusCode": "404" }, { "_links": { "self": { "href": "/restapis/o81lxisefl/gatewayresponses/REQUEST_TOO_LARGE" }, "gatewayresponse:put": { "href": "/restapis/o81lxisefl/gatewayresponses/{response_type}", "templated": true }, "gatewayresponse:update": { "href": "/restapis/o81lxisefl/gatewayresponses/REQUEST_TOO_LARGE" } }, "defaultResponse": true, "responseParameters": {}, "responseTemplates": { "application/json": "{\"message\":$context.error.messageString}" }, "responseType": "REQUEST_TOO_LARGE", "statusCode": "413" }, { "_links": { "self": { "href": "/restapis/o81lxisefl/gatewayresponses/THROTTLED" }, "gatewayresponse:put": { "href": "/restapis/o81lxisefl/gatewayresponses/{response_type}", "templated": true }, "gatewayresponse:update": { "href": "/restapis/o81lxisefl/gatewayresponses/THROTTLED" } }, "defaultResponse": true, "responseParameters": {}, "responseTemplates": { "application/json": "{\"message\":$context.error.messageString}" }, "responseType": "THROTTLED", "statusCode": "429" }, { "_links": { "self": { "href": "/restapis/o81lxisefl/gatewayresponses/UNSUPPORTED_MEDIA_TYPE" }, "gatewayresponse:put": { "href": "/restapis/o81lxisefl/gatewayresponses/{response_type}", "templated": true }, "gatewayresponse:update": { "href": "/restapis/o81lxisefl/gatewayresponses/UNSUPPORTED_MEDIA_TYPE" } }, "defaultResponse": true, "responseParameters": {}, "responseTemplates": { "application/json": "{\"message\":$context.error.messageString}" }, "responseType": "UNSUPPORTED_MEDIA_TYPE", "statusCode": "415" }, { "_links": { "self": { "href": "/restapis/o81lxisefl/gatewayresponses/AUTHORIZER_CONFIGURATION_ERROR" }, "gatewayresponse:put": { "href": "/restapis/o81lxisefl/gatewayresponses/{response_type}", "templated": true }, "gatewayresponse:update": { "href": "/restapis/o81lxisefl/gatewayresponses/AUTHORIZER_CONFIGURATION_ERROR" } }, "defaultResponse": true, "responseParameters": {}, "responseTemplates": { "application/json": "{\"message\":$context.error.messageString}" }, "responseType": "AUTHORIZER_CONFIGURATION_ERROR", "statusCode": "500" }, { "_links": { "self": { "href": "/restapis/o81lxisefl/gatewayresponses/DEFAULT_5XX" }, "gatewayresponse:put": { "href": "/restapis/o81lxisefl/gatewayresponses/{response_type}", "templated": true }, "gatewayresponse:update": { "href": "/restapis/o81lxisefl/gatewayresponses/DEFAULT_5XX" } }, "defaultResponse": true, "responseParameters": {}, "responseTemplates": { "application/json": "{\"message\":$context.error.messageString}" }, "responseType": "DEFAULT_5XX" }, { "_links": { "self": { "href": "/restapis/o81lxisefl/gatewayresponses/DEFAULT_4XX" }, "gatewayresponse:put": { "href": "/restapis/o81lxisefl/gatewayresponses/{response_type}", "templated": true }, "gatewayresponse:update": { "href": "/restapis/o81lxisefl/gatewayresponses/DEFAULT_4XX" } }, "defaultResponse": true, "responseParameters": {}, "responseTemplates": { "application/json": "{\"message\":$context.error.messageString}" }, "responseType": "DEFAULT_4XX" }, { "_links": { "self": { "href": "/restapis/o81lxisefl/gatewayresponses/BAD_REQUEST_PARAMETERS" }, "gatewayresponse:put": { "href": "/restapis/o81lxisefl/gatewayresponses/{response_type}", "templated": true }, "gatewayresponse:update": { "href": "/restapis/o81lxisefl/gatewayresponses/BAD_REQUEST_PARAMETERS" } }, "defaultResponse": true, "responseParameters": {}, "responseTemplates": { "application/json": "{\"message\":$context.error.messageString}" }, "responseType": "BAD_REQUEST_PARAMETERS", "statusCode": "400" }, { "_links": { "self": { "href": "/restapis/o81lxisefl/gatewayresponses/BAD_REQUEST_BODY" }, "gatewayresponse:put": { "href": "/restapis/o81lxisefl/gatewayresponses/{response_type}", "templated": true }, "gatewayresponse:update": { "href": "/restapis/o81lxisefl/gatewayresponses/BAD_REQUEST_BODY" } }, "defaultResponse": true, "responseParameters": {}, "responseTemplates": { "application/json": "{\"message\":$context.error.messageString}" }, "responseType": "BAD_REQUEST_BODY", "statusCode": "400" }, { "_links": { "self": { "href": "/restapis/o81lxisefl/gatewayresponses/EXPIRED_TOKEN" }, "gatewayresponse:put": { "href": "/restapis/o81lxisefl/gatewayresponses/{response_type}", "templated": true }, "gatewayresponse:update": { "href": "/restapis/o81lxisefl/gatewayresponses/EXPIRED_TOKEN" } }, "defaultResponse": true, "responseParameters": {}, "responseTemplates": { "application/json": "{\"message\":$context.error.messageString}" }, "responseType": "EXPIRED_TOKEN", "statusCode": "403" }, { "_links": { "self": { "href": "/restapis/o81lxisefl/gatewayresponses/ACCESS_DENIED" }, "gatewayresponse:put": { "href": "/restapis/o81lxisefl/gatewayresponses/{response_type}", "templated": true }, "gatewayresponse:update": { "href": "/restapis/o81lxisefl/gatewayresponses/ACCESS_DENIED" } }, "defaultResponse": true, "responseParameters": {}, "responseTemplates": { "application/json": "{\"message\":$context.error.messageString}" }, "responseType": "ACCESS_DENIED", "statusCode": "403" }, { "_links": { "self": { "href": "/restapis/o81lxisefl/gatewayresponses/INVALID_API_KEY" }, "gatewayresponse:put": { "href": "/restapis/o81lxisefl/gatewayresponses/{response_type}", "templated": true }, "gatewayresponse:update": { "href": "/restapis/o81lxisefl/gatewayresponses/INVALID_API_KEY" } }, "defaultResponse": true, "responseParameters": {}, "responseTemplates": { "application/json": "{\"message\":$context.error.messageString}" }, "responseType": "INVALID_API_KEY", "statusCode": "403" }, { "_links": { "self": { "href": "/restapis/o81lxisefl/gatewayresponses/UNAUTHORIZED" }, "gatewayresponse:put": { "href": "/restapis/o81lxisefl/gatewayresponses/{response_type}", "templated": true }, "gatewayresponse:update": { "href": "/restapis/o81lxisefl/gatewayresponses/UNAUTHORIZED" } }, "defaultResponse": true, "responseParameters": {}, "responseTemplates": { "application/json": "{\"message\":$context.error.messageString}" }, "responseType": "UNAUTHORIZED", "statusCode": "401" }, { "_links": { "self": { "href": "/restapis/o81lxisefl/gatewayresponses/API_CONFIGURATION_ERROR" }, "gatewayresponse:put": { "href": "/restapis/o81lxisefl/gatewayresponses/{response_type}", "templated": true }, "gatewayresponse:update": { "href": "/restapis/o81lxisefl/gatewayresponses/API_CONFIGURATION_ERROR" } }, "defaultResponse": true, "responseParameters": {}, "responseTemplates": { "application/json": "{\"message\":$context.error.messageString}" }, "responseType": "API_CONFIGURATION_ERROR", "statusCode": "500" }, { "_links": { "self": { "href": "/restapis/o81lxisefl/gatewayresponses/QUOTA_EXCEEDED" }, "gatewayresponse:put": { "href": "/restapis/o81lxisefl/gatewayresponses/{response_type}", "templated": true }, "gatewayresponse:update": { "href": "/restapis/o81lxisefl/gatewayresponses/QUOTA_EXCEEDED" } }, "defaultResponse": true, "responseParameters": {}, "responseTemplates": { "application/json": "{\"message\":$context.error.messageString}" }, "responseType": "QUOTA_EXCEEDED", "statusCode": "429" }, { "_links": { "self": { "href": "/restapis/o81lxisefl/gatewayresponses/INTEGRATION_TIMEOUT" }, "gatewayresponse:put": { "href": "/restapis/o81lxisefl/gatewayresponses/{response_type}", "templated": true }, "gatewayresponse:update": { "href": "/restapis/o81lxisefl/gatewayresponses/INTEGRATION_TIMEOUT" } }, "defaultResponse": true, "responseParameters": {}, "responseTemplates": { "application/json": "{\"message\":$context.error.messageString}" }, "responseType": "INTEGRATION_TIMEOUT", "statusCode": "504" }, { "_links": { "self": { "href": "/restapis/o81lxisefl/gatewayresponses/MISSING_AUTHENTICATION_TOKEN" }, "gatewayresponse:put": { "href": "/restapis/o81lxisefl/gatewayresponses/{response_type}", "templated": true }, "gatewayresponse:update": { "href": "/restapis/o81lxisefl/gatewayresponses/MISSING_AUTHENTICATION_TOKEN" } }, "defaultResponse": true, "responseParameters": {}, "responseTemplates": { "application/json": "{\"message\":$context.error.messageString}" }, "responseType": "MISSING_AUTHENTICATION_TOKEN", "statusCode": "403" }, { "_links": { "self": { "href": "/restapis/o81lxisefl/gatewayresponses/INVALID_SIGNATURE" }, "gatewayresponse:put": { "href": "/restapis/o81lxisefl/gatewayresponses/{response_type}", "templated": true }, "gatewayresponse:update": { "href": "/restapis/o81lxisefl/gatewayresponses/INVALID_SIGNATURE" } }, "defaultResponse": true, "responseParameters": {}, "responseTemplates": { "application/json": "{\"message\":$context.error.messageString}" }, "responseType": "INVALID_SIGNATURE", "statusCode": "403" }, { "_links": { "self": { "href": "/restapis/o81lxisefl/gatewayresponses/AUTHORIZER_FAILURE" }, "gatewayresponse:put": { "href": "/restapis/o81lxisefl/gatewayresponses/{response_type}", "templated": true }, "gatewayresponse:update": { "href": "/restapis/o81lxisefl/gatewayresponses/AUTHORIZER_FAILURE" } }, "defaultResponse": true, "responseParameters": {}, "responseTemplates": { "application/json": "{\"message\":$context.error.messageString}" }, "responseType": "AUTHORIZER_FAILURE", "statusCode": "500" } ] } }</code></pre> <p/> </div> </div> <div class="seeAlso"> <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/customize-gateway-responses.html">Customize Gateway Responses</a> </div>
  * items
    * items [GatewayResponse](#gatewayresponse)
  * position [String](#string)

### GenerateClientCertificateRequest
* GenerateClientCertificateRequest `object`: A request to generate a <a>ClientCertificate</a> resource.
  * tags
  * description

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
* GetTagsRequest `object`: Gets the <a>Tags</a> collection for a given resource.

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
  * body **required**

### ImportDocumentationPartsRequest
* ImportDocumentationPartsRequest `object`: Import documentation parts from an external (e.g., OpenAPI) definition file. 
  * body **required**

### ImportRestApiRequest
* ImportRestApiRequest `object`: A POST request to import an API to API Gateway using an input of an API definition file.
  * body **required**

### Integer
* Integer `integer`

### Integration
* Integration `object`: <p>Represents an HTTP, HTTP_PROXY, AWS, AWS_PROXY, or Mock integration.</p> <div class="remarks">In the API Gateway console, the built-in Lambda integration is an AWS integration.</div> <div class="seeAlso"> <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-create-api.html">Creating an API</a> </div>
  * cacheKeyParameters
    * items [String](#string)
  * cacheNamespace
  * connectionId
  * connectionType
  * contentHandling
  * credentials
  * httpMethod
  * integrationResponses
  * passthroughBehavior
  * requestParameters
  * requestTemplates
  * timeoutInMillis
  * tlsConfig
    * insecureSkipVerification
  * type
  * uri

### IntegrationResponse
* IntegrationResponse `object`: <p>Represents an integration response. The status code must map to an existing <a>MethodResponse</a>, and parameters and templates can be used to transform the back-end response.</p> <div class="seeAlso"> <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-create-api.html">Creating an API</a> </div>
  * contentHandling
  * responseParameters
  * responseTemplates
  * selectionPattern
  * statusCode

### IntegrationType
* IntegrationType `string` (values: HTTP, AWS, MOCK, HTTP_PROXY, AWS_PROXY): The integration type. The valid value is <code>HTTP</code> for integrating an API method with an HTTP backend; <code>AWS</code> with any AWS service endpoints; <code>MOCK</code> for testing without actually invoking the backend; <code>HTTP_PROXY</code> for integrating with the HTTP proxy integration; <code>AWS_PROXY</code> for integrating with the Lambda proxy integration. 

### LimitExceededException


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

### MapOfApiStageThrottleSettings
* MapOfApiStageThrottleSettings `object`

### MapOfIntegrationResponse
* MapOfIntegrationResponse `object`

### MapOfKeyUsages
* MapOfKeyUsages `object`

### MapOfMethod
* MapOfMethod `object`

### MapOfMethodResponse
* MapOfMethodResponse `object`

### MapOfMethodSettings
* MapOfMethodSettings `object`

### MapOfMethodSnapshot
* MapOfMethodSnapshot `object`

### MapOfStringToBoolean
* MapOfStringToBoolean `object`

### MapOfStringToList
* MapOfStringToList `object`

### MapOfStringToString
* MapOfStringToString `object`

### Method
* Method `object`: <p> Represents a client-facing interface by which the client calls the API to access back-end resources. A <b>Method</b> resource is integrated with an <a>Integration</a> resource. Both consist of a request and one or more responses. The method request takes the client input that is passed to the back end through the integration request. A method response returns the output from the back end to the client through an integration response. A method request is embodied in a <b>Method</b> resource, whereas an integration request is embodied in an <a>Integration</a> resource. On the other hand, a method response is represented by a <a>MethodResponse</a> resource, whereas an integration response is represented by an <a>IntegrationResponse</a> resource. </p> <div class="remarks"> <p/> <h4>Example: Retrive the GET method on a specified resource</h4> <h5>Request</h5> <p>The following example request retrieves the information about the GET method on an API resource (<code>3kzxbg5sa2</code>) of an API (<code>fugvjdxtri</code>). </p> <pre><code>GET /restapis/fugvjdxtri/resources/3kzxbg5sa2/methods/GET HTTP/1.1 Content-Type: application/json Host: apigateway.us-east-1.amazonaws.com X-Amz-Date: 20160603T210259Z Authorization: AWS4-HMAC-SHA256 Credential={access_key_ID}/20160603/us-east-1/apigateway/aws4_request, SignedHeaders=content-type;host;x-amz-date, Signature={sig4_hash}</code></pre> <h5>Response</h5> <p>The successful response returns a <code>200 OK</code> status code and a payload similar to the following:</p> <pre><code>{ "_links": { "curies": [ { "href": "https://docs.aws.amazon.com/apigateway/latest/developerguide/restapi-integration-{rel}.html", "name": "integration", "templated": true }, { "href": "https://docs.aws.amazon.com/apigateway/latest/developerguide/restapi-integration-response-{rel}.html", "name": "integrationresponse", "templated": true }, { "href": "https://docs.aws.amazon.com/apigateway/latest/developerguide/restapi-method-{rel}.html", "name": "method", "templated": true }, { "href": "https://docs.aws.amazon.com/apigateway/latest/developerguide/restapi-method-response-{rel}.html", "name": "methodresponse", "templated": true } ], "self": { "href": "/restapis/fugvjdxtri/resources/3kzxbg5sa2/methods/GET", "name": "GET", "title": "GET" }, "integration:put": { "href": "/restapis/fugvjdxtri/resources/3kzxbg5sa2/methods/GET/integration" }, "method:delete": { "href": "/restapis/fugvjdxtri/resources/3kzxbg5sa2/methods/GET" }, "method:integration": { "href": "/restapis/fugvjdxtri/resources/3kzxbg5sa2/methods/GET/integration" }, "method:responses": { "href": "/restapis/fugvjdxtri/resources/3kzxbg5sa2/methods/GET/responses/200", "name": "200", "title": "200" }, "method:update": { "href": "/restapis/fugvjdxtri/resources/3kzxbg5sa2/methods/GET" }, "methodresponse:put": { "href": "/restapis/fugvjdxtri/resources/3kzxbg5sa2/methods/GET/responses/{status_code}", "templated": true } }, "apiKeyRequired": true, "authorizationType": "NONE", "httpMethod": "GET", "_embedded": { "method:integration": { "_links": { "self": { "href": "/restapis/fugvjdxtri/resources/3kzxbg5sa2/methods/GET/integration" }, "integration:delete": { "href": "/restapis/fugvjdxtri/resources/3kzxbg5sa2/methods/GET/integration" }, "integration:responses": { "href": "/restapis/fugvjdxtri/resources/3kzxbg5sa2/methods/GET/integration/responses/200", "name": "200", "title": "200" }, "integration:update": { "href": "/restapis/fugvjdxtri/resources/3kzxbg5sa2/methods/GET/integration" }, "integrationresponse:put": { "href": "/restapis/fugvjdxtri/resources/3kzxbg5sa2/methods/GET/integration/responses/{status_code}", "templated": true } }, "cacheKeyParameters": [], "cacheNamespace": "3kzxbg5sa2", "credentials": "arn:aws:iam::123456789012:role/apigAwsProxyRole", "httpMethod": "POST", "passthroughBehavior": "WHEN_NO_MATCH", "requestParameters": { "integration.request.header.Content-Type": "'application/x-amz-json-1.1'" }, "requestTemplates": { "application/json": "{\n}" }, "type": "AWS", "uri": "arn:aws:apigateway:us-east-1:kinesis:action/ListStreams", "_embedded": { "integration:responses": { "_links": { "self": { "href": "/restapis/fugvjdxtri/resources/3kzxbg5sa2/methods/GET/integration/responses/200", "name": "200", "title": "200" }, "integrationresponse:delete": { "href": "/restapis/fugvjdxtri/resources/3kzxbg5sa2/methods/GET/integration/responses/200" }, "integrationresponse:update": { "href": "/restapis/fugvjdxtri/resources/3kzxbg5sa2/methods/GET/integration/responses/200" } }, "responseParameters": { "method.response.header.Content-Type": "'application/xml'" }, "responseTemplates": { "application/json": "$util.urlDecode(\"%3CkinesisStreams%3E%23foreach(%24stream%20in%20%24input.path(%27%24.StreamNames%27))%3Cstream%3E%3Cname%3E%24stream%3C%2Fname%3E%3C%2Fstream%3E%23end%3C%2FkinesisStreams%3E\")" }, "statusCode": "200" } } }, "method:responses": { "_links": { "self": { "href": "/restapis/fugvjdxtri/resources/3kzxbg5sa2/methods/GET/responses/200", "name": "200", "title": "200" }, "methodresponse:delete": { "href": "/restapis/fugvjdxtri/resources/3kzxbg5sa2/methods/GET/responses/200" }, "methodresponse:update": { "href": "/restapis/fugvjdxtri/resources/3kzxbg5sa2/methods/GET/responses/200" } }, "responseModels": { "application/json": "Empty" }, "responseParameters": { "method.response.header.Content-Type": false }, "statusCode": "200" } } }</code></pre> <p>In the example above, the response template for the <code>200 OK</code> response maps the JSON output from the <code>ListStreams</code> action in the back end to an XML output. The mapping template is URL-encoded as <code>%3CkinesisStreams%3E%23foreach(%24stream%20in%20%24input.path(%27%24.StreamNames%27))%3Cstream%3E%3Cname%3E%24stream%3C%2Fname%3E%3C%2Fstream%3E%23end%3C%2FkinesisStreams%3E</code> and the output is decoded using the <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-mapping-template-reference.html#util-templat-reference">$util.urlDecode()</a> helper function.</p> </div> <div class="seeAlso"> <a>MethodResponse</a>, <a>Integration</a>, <a>IntegrationResponse</a>, <a>Resource</a>, <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-method-settings.html">Set up an API's method</a> </div>
  * apiKeyRequired
  * authorizationScopes
    * items [String](#string)
  * authorizationType
  * authorizerId
  * httpMethod
  * methodIntegration
    * cacheKeyParameters
      * items [String](#string)
    * cacheNamespace
    * connectionId
    * connectionType
    * contentHandling
    * credentials
    * httpMethod
    * integrationResponses
    * passthroughBehavior
    * requestParameters
    * requestTemplates
    * timeoutInMillis
    * tlsConfig
      * insecureSkipVerification
    * type
    * uri
  * methodResponses
  * operationName
  * requestModels
  * requestParameters
  * requestValidatorId

### MethodResponse
* MethodResponse `object`: <p>Represents a method response of a given HTTP status code returned to the client. The method response is passed from the back end through the associated integration response that can be transformed using a mapping template. </p> <div class="remarks"> <p/> <h4>Example: A <b>MethodResponse</b> instance of an API</h4> <h5>Request</h5> <p>The example request retrieves a <b>MethodResponse</b> of the 200 status code.</p> <pre><code>GET /restapis/fugvjdxtri/resources/3kzxbg5sa2/methods/GET/responses/200 HTTP/1.1 Content-Type: application/json Host: apigateway.us-east-1.amazonaws.com X-Amz-Date: 20160603T222952Z Authorization: AWS4-HMAC-SHA256 Credential={access_key_ID}/20160603/us-east-1/apigateway/aws4_request, SignedHeaders=content-type;host;x-amz-date, Signature={sig4_hash}</code></pre> <h5>Response</h5> <p>The successful response returns <code>200 OK</code> status and a payload as follows:</p> <pre><code>{ "_links": { "curies": { "href": "https://docs.aws.amazon.com/apigateway/latest/developerguide/restapi-method-response-{rel}.html", "name": "methodresponse", "templated": true }, "self": { "href": "/restapis/fugvjdxtri/resources/3kzxbg5sa2/methods/GET/responses/200", "title": "200" }, "methodresponse:delete": { "href": "/restapis/fugvjdxtri/resources/3kzxbg5sa2/methods/GET/responses/200" }, "methodresponse:update": { "href": "/restapis/fugvjdxtri/resources/3kzxbg5sa2/methods/GET/responses/200" } }, "responseModels": { "application/json": "Empty" }, "responseParameters": { "method.response.header.Content-Type": false }, "statusCode": "200" }</code></pre> <p/> </div> <div class="seeAlso"> <a>Method</a>, <a>IntegrationResponse</a>, <a>Integration</a> <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-create-api.html">Creating an API</a> </div>
  * responseModels
  * responseParameters
  * statusCode

### MethodSetting
* MethodSetting `object`: Specifies the method setting properties.
  * cacheDataEncrypted
  * cacheTtlInSeconds
  * cachingEnabled
  * dataTraceEnabled
  * loggingLevel
  * metricsEnabled
  * requireAuthorizationForCacheControl
  * throttlingBurstLimit
  * throttlingRateLimit
  * unauthorizedCacheControlHeaderStrategy

### MethodSnapshot
* MethodSnapshot `object`: Represents a summary of a <a>Method</a> resource, given a particular date and time.
  * apiKeyRequired
  * authorizationType

### Model
* Model `object`: <p>Represents the data structure of a method's request or response payload.</p> <div class="remarks"> <p>A request model defines the data structure of the client-supplied request payload. A response model defines the data structure of the response payload returned by the back end. Although not required, models are useful for mapping payloads between the front end and back end.</p> <p>A model is used for generating an API's SDK, validating the input request body, and creating a skeletal mapping template.</p> </div> <div class="seeAlso"> <a>Method</a>, <a>MethodResponse</a>, <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/models-mappings.html">Models and Mappings</a> </div>
  * contentType
  * description
  * id
  * name
  * schema

### Models
* Models `object`: <p>Represents a collection of <a>Model</a> resources.</p> <div class="seeAlso"> <a>Method</a>, <a>MethodResponse</a>, <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/models-mappings.html">Models and Mappings</a> </div>
  * items
    * items [Model](#model)
  * position [String](#string)

### MutualTlsAuthentication
* MutualTlsAuthentication `object`: If specified, API Gateway performs two-way authentication between the client and the server. Clients must present a trusted certificate to access your custom domain name.
  * truststoreUri
  * truststoreVersion
  * truststoreWarnings
    * items [String](#string)

### MutualTlsAuthenticationInput
* MutualTlsAuthenticationInput `object`: If specified, API Gateway performs two-way authentication between the client and the server. Clients must present a trusted certificate to access your custom domain name.
  * truststoreUri
  * truststoreVersion

### NotFoundException


### NullableBoolean
* NullableBoolean `boolean`

### NullableInteger
* NullableInteger `integer`

### Op
* Op `string` (values: add, remove, replace, move, copy, test)

### PatchOperation
* PatchOperation `object`: A single patch operation to apply to the specified resource. Please refer to http://tools.ietf.org/html/rfc6902#section-4 for an explanation of how each operation is used.
  * from
  * op
  * path
  * value

### PathToMapOfMethodSnapshot
* PathToMapOfMethodSnapshot `object`

### ProviderARN
* ProviderARN `string`

### PutGatewayResponseRequest
* PutGatewayResponseRequest `object`: Creates a customization of a <a>GatewayResponse</a> of a specified response type and status code on the given <a>RestApi</a>.
  * responseParameters
  * responseTemplates
  * statusCode

### PutIntegrationRequest
* PutIntegrationRequest `object`: Sets up a method's integration.
  * cacheKeyParameters
    * items [String](#string)
  * cacheNamespace
  * connectionId
  * connectionType
  * contentHandling
  * credentials
  * integrationHttpMethod
  * passthroughBehavior
  * requestParameters
  * requestTemplates
  * timeoutInMillis
  * tlsConfig [TlsConfig](#tlsconfig)
  * type **required**
  * uri

### PutIntegrationResponseRequest
* PutIntegrationResponseRequest `object`: Represents a put integration response request.
  * contentHandling
  * responseParameters
  * responseTemplates
  * selectionPattern

### PutMethodRequest
* PutMethodRequest `object`: Request to add a method to an existing <a>Resource</a> resource.
  * apiKeyRequired
  * authorizationScopes
    * items [String](#string)
  * authorizationType **required**
  * authorizerId
  * operationName
  * requestModels
  * requestParameters
  * requestValidatorId

### PutMethodResponseRequest
* PutMethodResponseRequest `object`: Request to add a <a>MethodResponse</a> to an existing <a>Method</a> resource.
  * responseModels
  * responseParameters

### PutMode
* PutMode `string` (values: merge, overwrite)

### PutRestApiRequest
* PutRestApiRequest `object`: A PUT request to update an existing API, with external API definitions specified as the request body.
  * body **required**

### QuotaPeriodType
* QuotaPeriodType `string` (values: DAY, WEEK, MONTH)

### QuotaSettings
* QuotaSettings `object`: Quotas configured for a usage plan.
  * limit
  * offset
  * period

### RequestValidator
* RequestValidator `object`: <p>A set of validation rules for incoming <a>Method</a> requests.</p> <div class="remarks"> <p>In OpenAPI, a <a>RequestValidator</a> of an API is defined by the <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-swagger-extensions.html#api-gateway-swagger-extensions-request-validators.requestValidator.html">x-amazon-apigateway-request-validators.requestValidator</a> object. It the referenced using the <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-swagger-extensions.html#api-gateway-swagger-extensions-request-validator">x-amazon-apigateway-request-validator</a> property.</p> </div> <div class="seeAlso"><a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-method-request-validation.html">Enable Basic Request Validation in API Gateway</a></div>
  * id
  * name
  * validateRequestBody
  * validateRequestParameters

### RequestValidators
* RequestValidators `object`: <p>A collection of <a>RequestValidator</a> resources of a given <a>RestApi</a>.</p> <div class="remarks"> <p>In OpenAPI, the <a>RequestValidators</a> of an API is defined by the <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-swagger-extensions.html#api-gateway-swagger-extensions-request-validators.html">x-amazon-apigateway-request-validators</a> extension.</p> </div> <div class="seeAlso"><a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-method-request-validation.html">Enable Basic Request Validation in API Gateway</a></div>
  * items
    * items [RequestValidator](#requestvalidator)
  * position [String](#string)

### Resource
* Resource `object`: <p>Represents an API resource.</p> <div class="seeAlso"> <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-create-api.html">Create an API</a> </div>
  * id
  * parentId
  * path
  * pathPart
  * resourceMethods

### Resources
* Resources `object`: <p>Represents a collection of <a>Resource</a> resources.</p> <div class="seeAlso"> <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-create-api.html">Create an API</a> </div>
  * items
    * items [Resource](#resource)
  * position [String](#string)

### RestApi
* RestApi `object`: <p>Represents a REST API.</p> <div class="seeAlso"> <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-create-api.html">Create an API</a> </div>
  * tags
  * apiKeySource
  * binaryMediaTypes
    * items [String](#string)
  * createdDate
  * description
  * disableExecuteApiEndpoint
  * endpointConfiguration
    * types
      * items [EndpointType](#endpointtype)
    * vpcEndpointIds
      * items [String](#string)
  * id
  * minimumCompressionSize
  * name
  * policy
  * version
  * warnings
    * items [String](#string)

### RestApis
* RestApis `object`: <p>Contains references to your APIs and links that guide you in how to interact with your collection. A collection offers a paginated view of your APIs.</p> <div class="seeAlso"> <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-create-api.html">Create an API</a> </div>
  * items
    * items [RestApi](#restapi)
  * position [String](#string)

### SdkConfigurationProperty
* SdkConfigurationProperty `object`: A configuration property of an SDK type.
  * defaultValue
  * description
  * friendlyName
  * name
  * required

### SdkResponse
* SdkResponse `object`: The binary blob response to <a>GetSdk</a>, which contains the generated SDK.
  * body

### SdkType
* SdkType `object`: A type of SDK that API Gateway can generate.
  * configurationProperties
    * items [SdkConfigurationProperty](#sdkconfigurationproperty)
  * description
  * friendlyName
  * id

### SdkTypes
* SdkTypes `object`: The collection of <a>SdkType</a> instances.
  * items
    * items [SdkType](#sdktype)
  * position [String](#string)

### SecurityPolicy
* SecurityPolicy `string` (values: TLS_1_0, TLS_1_2)

### ServiceUnavailableException


### Stage
* Stage `object`: <p>Represents a unique identifier for a version of a deployed <a>RestApi</a> that is callable by users.</p> <div class="seeAlso"> <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-deploy-api.html">Deploy an API</a> </div>
  * tags
  * accessLogSettings
    * destinationArn
    * format
  * cacheClusterEnabled
  * cacheClusterSize
  * cacheClusterStatus
  * canarySettings
    * deploymentId
    * percentTraffic
    * stageVariableOverrides
    * useStageCache
  * clientCertificateId
  * createdDate
  * deploymentId
  * description
  * documentationVersion
  * lastUpdatedDate
  * methodSettings
  * stageName
  * tracingEnabled
  * variables
  * webAclArn

### StageKey
* StageKey `object`: A reference to a unique stage identified in the format <code>{restApiId}/{stage}</code>.
  * restApiId
  * stageName

### Stages
* Stages `object`: <p>A list of <a>Stage</a> resources that are associated with the <a>ApiKey</a> resource.</p> <div class="seeAlso"><a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/stages.html">Deploying API in Stages</a></div>
  * item
    * items [Stage](#stage)

### StatusCode
* StatusCode `string`: The status code.

### String
* String `string`

### TagResourceRequest
* TagResourceRequest `object`: Adds or updates a tag on a given resource.
  * tags **required**

### Tags
* Tags `object`: The collection of tags. Each tag element is associated with a given resource.
  * tags

### Template
* Template `object`: <p>Represents a mapping template used to transform a payload.</p> <div class="seeAlso"> <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/models-mappings.html#models-mappings-mappings">Mapping Templates</a> </div>
  * value

### TestInvokeAuthorizerRequest
* TestInvokeAuthorizerRequest `object`: Make a request to simulate the execution of an <a>Authorizer</a>.
  * additionalContext
  * body
  * headers
  * multiValueHeaders
  * pathWithQueryString
  * stageVariables

### TestInvokeAuthorizerResponse
* TestInvokeAuthorizerResponse `object`: Represents the response of the test invoke request for a custom <a>Authorizer</a>
  * authorization [MapOfStringToList](#mapofstringtolist)
  * claims
  * clientStatus
  * latency
  * log
  * policy
  * principalId

### TestInvokeMethodRequest
* TestInvokeMethodRequest `object`: Make a request to simulate the execution of a <a>Method</a>.
  * body
  * clientCertificateId
  * headers
  * multiValueHeaders
  * pathWithQueryString
  * stageVariables

### TestInvokeMethodResponse
* TestInvokeMethodResponse `object`: <p>Represents the response of the test invoke request in the HTTP method.</p> <div class="seeAlso"> <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-test-method.html#how-to-test-method-console">Test API using the API Gateway console</a> </div>
  * body
  * headers
  * latency
  * log
  * multiValueHeaders
  * status

### ThrottleSettings
* ThrottleSettings `object`:  The API request rate limits.
  * burstLimit
  * rateLimit

### Timestamp
* Timestamp `string`

### TlsConfig
* TlsConfig `object`
  * insecureSkipVerification

### TooManyRequestsException


### UnauthorizedCacheControlHeaderStrategy
* UnauthorizedCacheControlHeaderStrategy `string` (values: FAIL_WITH_403, SUCCEED_WITH_RESPONSE_HEADER, SUCCEED_WITHOUT_RESPONSE_HEADER)

### UnauthorizedException


### UntagResourceRequest
* UntagResourceRequest `object`: Removes a tag from a given resource.

### UpdateAccountRequest
* UpdateAccountRequest `object`: Requests API Gateway to change information about the current <a>Account</a> resource.
  * patchOperations
    * items [PatchOperation](#patchoperation)

### UpdateApiKeyRequest
* UpdateApiKeyRequest `object`: A request to change information about an <a>ApiKey</a> resource.
  * patchOperations
    * items [PatchOperation](#patchoperation)

### UpdateAuthorizerRequest
* UpdateAuthorizerRequest `object`: Request to update an existing <a>Authorizer</a> resource.
  * patchOperations
    * items [PatchOperation](#patchoperation)

### UpdateBasePathMappingRequest
* UpdateBasePathMappingRequest `object`: A request to change information about the <a>BasePathMapping</a> resource.
  * patchOperations
    * items [PatchOperation](#patchoperation)

### UpdateClientCertificateRequest
* UpdateClientCertificateRequest `object`: A request to change information about an <a>ClientCertificate</a> resource.
  * patchOperations
    * items [PatchOperation](#patchoperation)

### UpdateDeploymentRequest
* UpdateDeploymentRequest `object`: Requests API Gateway to change information about a <a>Deployment</a> resource.
  * patchOperations
    * items [PatchOperation](#patchoperation)

### UpdateDocumentationPartRequest
* UpdateDocumentationPartRequest `object`: Updates an existing documentation part of a given API.
  * patchOperations
    * items [PatchOperation](#patchoperation)

### UpdateDocumentationVersionRequest
* UpdateDocumentationVersionRequest `object`: Updates an existing documentation version of an API.
  * patchOperations
    * items [PatchOperation](#patchoperation)

### UpdateDomainNameRequest
* UpdateDomainNameRequest `object`: A request to change information about the <a>DomainName</a> resource.
  * patchOperations
    * items [PatchOperation](#patchoperation)

### UpdateGatewayResponseRequest
* UpdateGatewayResponseRequest `object`: Updates a <a>GatewayResponse</a> of a specified response type on the given <a>RestApi</a>.
  * patchOperations
    * items [PatchOperation](#patchoperation)

### UpdateIntegrationRequest
* UpdateIntegrationRequest `object`: Represents an update integration request.
  * patchOperations
    * items [PatchOperation](#patchoperation)

### UpdateIntegrationResponseRequest
* UpdateIntegrationResponseRequest `object`: Represents an update integration response request.
  * patchOperations
    * items [PatchOperation](#patchoperation)

### UpdateMethodRequest
* UpdateMethodRequest `object`: Request to update an existing <a>Method</a> resource.
  * patchOperations
    * items [PatchOperation](#patchoperation)

### UpdateMethodResponseRequest
* UpdateMethodResponseRequest `object`: A request to update an existing <a>MethodResponse</a> resource.
  * patchOperations
    * items [PatchOperation](#patchoperation)

### UpdateModelRequest
* UpdateModelRequest `object`: Request to update an existing model in an existing <a>RestApi</a> resource.
  * patchOperations
    * items [PatchOperation](#patchoperation)

### UpdateRequestValidatorRequest
* UpdateRequestValidatorRequest `object`: Updates a <a>RequestValidator</a> of a given <a>RestApi</a>.
  * patchOperations
    * items [PatchOperation](#patchoperation)

### UpdateResourceRequest
* UpdateResourceRequest `object`: Request to change information about a <a>Resource</a> resource.
  * patchOperations
    * items [PatchOperation](#patchoperation)

### UpdateRestApiRequest
* UpdateRestApiRequest `object`: Request to update an existing <a>RestApi</a> resource in your collection.
  * patchOperations
    * items [PatchOperation](#patchoperation)

### UpdateStageRequest
* UpdateStageRequest `object`: Requests API Gateway to change information about a <a>Stage</a> resource.
  * patchOperations
    * items [PatchOperation](#patchoperation)

### UpdateUsagePlanRequest
* UpdateUsagePlanRequest `object`: The PATCH request to update a usage plan of a given plan Id.
  * patchOperations
    * items [PatchOperation](#patchoperation)

### UpdateUsageRequest
* UpdateUsageRequest `object`: The PATCH request to grant a temporary extension to the remaining quota of a usage plan associated with a specified API key.
  * patchOperations
    * items [PatchOperation](#patchoperation)

### UpdateVpcLinkRequest
* UpdateVpcLinkRequest `object`: Updates an existing <a>VpcLink</a> of a specified identifier.
  * patchOperations
    * items [PatchOperation](#patchoperation)

### Usage
* Usage `object`: <p>Represents the usage data of a usage plan.</p> <div class="remarks"/> <div class="seeAlso"> <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-api-usage-plans.html">Create and Use Usage Plans</a>, <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-create-usage-plans-with-console.html#api-gateway-usage-plan-manage-usage">Manage Usage in a Usage Plan</a> </div>
  * endDate
  * items
  * position [String](#string)
  * startDate
  * usagePlanId

### UsagePlan
* UsagePlan `object`: <p>Represents a usage plan than can specify who can assess associated API stages with specified request limits and quotas.</p> <div class="remarks"> <p>In a usage plan, you associate an API by specifying the API's Id and a stage name of the specified API. You add plan customers by adding API keys to the plan. </p> </div> <div class="seeAlso"> <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-api-usage-plans.html">Create and Use Usage Plans</a> </div>
  * tags
  * apiStages
    * items [ApiStage](#apistage)
  * description
  * id
  * name
  * productCode
  * quota
    * limit
    * offset
    * period
  * throttle
    * burstLimit
    * rateLimit

### UsagePlanKey
* UsagePlanKey `object`: <p>Represents a usage plan key to identify a plan customer.</p> <div class="remarks"> <p>To associate an API stage with a selected API key in a usage plan, you must create a UsagePlanKey resource to represent the selected <a>ApiKey</a>.</p> </div>" <div class="seeAlso"> <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-api-usage-plans.html">Create and Use Usage Plans</a> </div>
  * id
  * name
  * type
  * value

### UsagePlanKeys
* UsagePlanKeys `object`: <p>Represents the collection of usage plan keys added to usage plans for the associated API keys and, possibly, other types of keys.</p> <div class="seeAlso"> <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-api-usage-plans.html">Create and Use Usage Plans</a> </div>
  * items
    * items [UsagePlanKey](#usageplankey)
  * position [String](#string)

### UsagePlans
* UsagePlans `object`: <p>Represents a collection of usage plans for an AWS account.</p> <div class="seeAlso"> <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-api-usage-plans.html">Create and Use Usage Plans</a> </div>
  * items
    * items [UsagePlan](#usageplan)
  * position [String](#string)

### VpcLink
* VpcLink `object`: <p>An API Gateway VPC link for a <a>RestApi</a> to access resources in an Amazon Virtual Private Cloud (VPC).</p> <div class="remarks"> <p><p>To enable access to a resource in an Amazon Virtual Private Cloud through Amazon API Gateway, you, as an API developer, create a <a>VpcLink</a> resource targeted for one or more network load balancers of the VPC and then integrate an API method with a private integration that uses the <a>VpcLink</a>. The private integration has an integration type of <code>HTTP</code> or <code>HTTP_PROXY</code> and has a connection type of <code>VPC_LINK</code>. The integration uses the <code>connectionId</code> property to identify the <a>VpcLink</a> used.</p></p> </div>
  * tags
  * description
  * id
  * name
  * status
  * statusMessage
  * targetArns
    * items [String](#string)

### VpcLinkStatus
* VpcLinkStatus `string` (values: AVAILABLE, PENDING, DELETING, FAILED)

### VpcLinks
* VpcLinks `object`: <p>The collection of VPC links under the caller's account in a region.</p> <div class="seeAlso"> <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/getting-started-with-private-integration.html">Getting Started with Private Integrations</a>, <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-private-integration.html">Set up Private Integrations</a> </div>
  * items
    * items [VpcLink](#vpclink)
  * position [String](#string)


