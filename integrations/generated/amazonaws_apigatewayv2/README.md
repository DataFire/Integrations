# @datafire/amazonaws_apigatewayv2

Client library for AmazonApiGatewayV2

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_apigatewayv2
```
```js
let amazonaws_apigatewayv2 = require('@datafire/amazonaws_apigatewayv2').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

.then(data => {
  console.log(data);
});
```

## Description

Amazon API Gateway V2

## Actions

### GetApis



```js
amazonaws_apigatewayv2.GetApis({}, context)
```

#### Input
* input `object`
  * maxResults `string`
  * nextToken `string`

#### Output
* output [GetApisResponse](#getapisresponse)

### CreateApi



```js
amazonaws_apigatewayv2.CreateApi({
  "name": "",
  "protocolType": ""
}, context)
```

#### Input
* input `object`
  * tags `object`: Represents a collection of tags associated with the resource.
  * apiKeySelectionExpression `string`: An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information.
  * corsConfiguration `object`: Represents a CORS configuration. Supported only for HTTP APIs. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-cors.html">Configuring CORS</a> for more information.
    * AllowCredentials
    * AllowHeaders
      * items [__string](#__string)
    * AllowMethods
      * items [StringWithLengthBetween1And64](#stringwithlengthbetween1and64)
    * AllowOrigins
      * items [__string](#__string)
    * ExposeHeaders
      * items [__string](#__string)
    * MaxAge
  * credentialsArn `string`: Represents an Amazon Resource Name (ARN).
  * description `string`: A string with a length between [0-1024].
  * disableExecuteApiEndpoint `boolean`: Specifies whether clients can invoke your API by using the default execute-api endpoint. By default, clients can invoke your API with the default https://{api_id}.execute-api.{region}.amazonaws.com endpoint. To require that clients use a custom domain name to invoke your API, disable the default endpoint.
  * disableSchemaValidation `boolean`: Avoid validating models when creating a deployment. Supported only for WebSocket APIs.
  * name **required** `string`: A string with a length between [1-128].
  * protocolType **required** `string` (values: WEBSOCKET, HTTP): Represents a protocol type.
  * routeKey `string`: After evaluating a selection expression, the result is compared against one or more selection keys to find a matching key. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for a list of expressions and each expression's associated selection key type.
  * routeSelectionExpression `string`: An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information.
  * target `string`: A string representation of a URI with a length between [1-2048].
  * version `string`: A string with a length between [1-64].

#### Output
*Output schema unknown*

### ImportApi



```js
amazonaws_apigatewayv2.ImportApi({
  "body": ""
}, context)
```

#### Input
* input `object`
  * basepath `string`
  * failOnWarnings `boolean`
  * body **required** `string`: The OpenAPI definition. Supported only for HTTP APIs.

#### Output
*Output schema unknown*

### DeleteApi



```js
amazonaws_apigatewayv2.DeleteApi({
  "apiId": ""
}, context)
```

#### Input
* input `object`
  * apiId **required** `string`

#### Output
*Output schema unknown*

### GetApi



```js
amazonaws_apigatewayv2.GetApi({
  "apiId": ""
}, context)
```

#### Input
* input `object`
  * apiId **required** `string`

#### Output
* output [GetApiResponse](#getapiresponse)

### UpdateApi



```js
amazonaws_apigatewayv2.UpdateApi({
  "apiId": ""
}, context)
```

#### Input
* input `object`
  * apiId **required** `string`
  * apiKeySelectionExpression `string`: An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information.
  * corsConfiguration `object`: Represents a CORS configuration. Supported only for HTTP APIs. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-cors.html">Configuring CORS</a> for more information.
    * AllowCredentials
    * AllowHeaders
      * items [__string](#__string)
    * AllowMethods
      * items [StringWithLengthBetween1And64](#stringwithlengthbetween1and64)
    * AllowOrigins
      * items [__string](#__string)
    * ExposeHeaders
      * items [__string](#__string)
    * MaxAge
  * credentialsArn `string`: Represents an Amazon Resource Name (ARN).
  * description `string`: A string with a length between [0-1024].
  * disableExecuteApiEndpoint `boolean`: Specifies whether clients can invoke your API by using the default execute-api endpoint. By default, clients can invoke your API with the default https://{api_id}.execute-api.{region}.amazonaws.com endpoint. To require that clients use a custom domain name to invoke your API, disable the default endpoint.
  * disableSchemaValidation `boolean`: Avoid validating models when creating a deployment. Supported only for WebSocket APIs.
  * name `string`: A string with a length between [1-128].
  * routeKey `string`: After evaluating a selection expression, the result is compared against one or more selection keys to find a matching key. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for a list of expressions and each expression's associated selection key type.
  * routeSelectionExpression `string`: An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information.
  * target `string`: A string representation of a URI with a length between [1-2048].
  * version `string`: A string with a length between [1-64].

#### Output
* output [UpdateApiResponse](#updateapiresponse)

### ReimportApi



```js
amazonaws_apigatewayv2.ReimportApi({
  "apiId": "",
  "body": ""
}, context)
```

#### Input
* input `object`
  * apiId **required** `string`
  * basepath `string`
  * failOnWarnings `boolean`
  * body **required** `string`: The OpenAPI definition. Supported only for HTTP APIs.

#### Output
*Output schema unknown*

### GetAuthorizers



```js
amazonaws_apigatewayv2.GetAuthorizers({
  "apiId": ""
}, context)
```

#### Input
* input `object`
  * apiId **required** `string`
  * maxResults `string`
  * nextToken `string`

#### Output
* output [GetAuthorizersResponse](#getauthorizersresponse)

### CreateAuthorizer



```js
amazonaws_apigatewayv2.CreateAuthorizer({
  "apiId": "",
  "authorizerType": "",
  "identitySource": [],
  "name": ""
}, context)
```

#### Input
* input `object`
  * apiId **required** `string`
  * authorizerCredentialsArn `string`: Represents an Amazon Resource Name (ARN).
  * authorizerPayloadFormatVersion `string`: A string with a length between [1-64].
  * authorizerResultTtlInSeconds `integer`: An integer with a value between [0-3600].
  * authorizerType **required** `string` (values: REQUEST, JWT): The authorizer type. Specify REQUEST for a Lambda function using incoming request parameters. Specify JWT to use JSON Web Tokens (supported only for HTTP APIs).
  * authorizerUri `string`: A string representation of a URI with a length between [1-2048].
  * enableSimpleResponses `boolean`: Specifies whether a Lambda authorizer returns a response in a simple format. By default, a Lambda authorizer must return an IAM policy. If enabled, the Lambda authorizer can return a boolean value instead of an IAM policy. Supported only for HTTP APIs. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-lambda-authorizer.html">Working with AWS Lambda authorizers for HTTP APIs</a>
  * identitySource **required** `array`: The identity source for which authorization is requested. For the REQUEST authorizer, this is required when authorization caching is enabled. The value is a comma-separated string of one or more mapping expressions of the specified request parameters. For example, if an Auth header, a Name query string parameter are defined as identity sources, this value is $method.request.header.Auth, $method.request.querystring.Name. These parameters will be used to derive the authorization caching key and to perform runtime validation of the REQUEST authorizer by verifying all of the identity-related request parameters are present, not null and non-empty. Only when this is true does the authorizer invoke the authorizer Lambda function, otherwise, it returns a 401 Unauthorized response without calling the Lambda function. The valid value is a string of comma-separated mapping expressions of the specified request parameters. When the authorization caching is not enabled, this property is optional.
    * items [__string](#__string)
  * identityValidationExpression `string`: A string with a length between [0-1024].
  * jwtConfiguration `object`: Represents the configuration of a JWT authorizer. Required for the JWT authorizer type. Supported only for HTTP APIs.
    * Audience
      * items [__string](#__string)
    * Issuer
  * name **required** `string`: A string with a length between [1-128].

#### Output
*Output schema unknown*

### DeleteAuthorizer



```js
amazonaws_apigatewayv2.DeleteAuthorizer({
  "apiId": "",
  "authorizerId": ""
}, context)
```

#### Input
* input `object`
  * apiId **required** `string`
  * authorizerId **required** `string`

#### Output
*Output schema unknown*

### GetAuthorizer



```js
amazonaws_apigatewayv2.GetAuthorizer({
  "apiId": "",
  "authorizerId": ""
}, context)
```

#### Input
* input `object`
  * apiId **required** `string`
  * authorizerId **required** `string`

#### Output
* output [GetAuthorizerResponse](#getauthorizerresponse)

### UpdateAuthorizer



```js
amazonaws_apigatewayv2.UpdateAuthorizer({
  "apiId": "",
  "authorizerId": ""
}, context)
```

#### Input
* input `object`
  * apiId **required** `string`
  * authorizerId **required** `string`
  * authorizerCredentialsArn `string`: Represents an Amazon Resource Name (ARN).
  * authorizerPayloadFormatVersion `string`: A string with a length between [1-64].
  * authorizerResultTtlInSeconds `integer`: An integer with a value between [0-3600].
  * authorizerType `string` (values: REQUEST, JWT): The authorizer type. Specify REQUEST for a Lambda function using incoming request parameters. Specify JWT to use JSON Web Tokens (supported only for HTTP APIs).
  * authorizerUri `string`: A string representation of a URI with a length between [1-2048].
  * enableSimpleResponses `boolean`: Specifies whether a Lambda authorizer returns a response in a simple format. By default, a Lambda authorizer must return an IAM policy. If enabled, the Lambda authorizer can return a boolean value instead of an IAM policy. Supported only for HTTP APIs. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-lambda-authorizer.html">Working with AWS Lambda authorizers for HTTP APIs</a>
  * identitySource `array`: The identity source for which authorization is requested. For the REQUEST authorizer, this is required when authorization caching is enabled. The value is a comma-separated string of one or more mapping expressions of the specified request parameters. For example, if an Auth header, a Name query string parameter are defined as identity sources, this value is $method.request.header.Auth, $method.request.querystring.Name. These parameters will be used to derive the authorization caching key and to perform runtime validation of the REQUEST authorizer by verifying all of the identity-related request parameters are present, not null and non-empty. Only when this is true does the authorizer invoke the authorizer Lambda function, otherwise, it returns a 401 Unauthorized response without calling the Lambda function. The valid value is a string of comma-separated mapping expressions of the specified request parameters. When the authorization caching is not enabled, this property is optional.
    * items [__string](#__string)
  * identityValidationExpression `string`: A string with a length between [0-1024].
  * jwtConfiguration `object`: Represents the configuration of a JWT authorizer. Required for the JWT authorizer type. Supported only for HTTP APIs.
    * Audience
      * items [__string](#__string)
    * Issuer
  * name `string`: A string with a length between [1-128].

#### Output
* output [UpdateAuthorizerResponse](#updateauthorizerresponse)

### DeleteCorsConfiguration



```js
amazonaws_apigatewayv2.DeleteCorsConfiguration({
  "apiId": ""
}, context)
```

#### Input
* input `object`
  * apiId **required** `string`

#### Output
*Output schema unknown*

### GetDeployments



```js
amazonaws_apigatewayv2.GetDeployments({
  "apiId": ""
}, context)
```

#### Input
* input `object`
  * apiId **required** `string`
  * maxResults `string`
  * nextToken `string`

#### Output
* output [GetDeploymentsResponse](#getdeploymentsresponse)

### CreateDeployment



```js
amazonaws_apigatewayv2.CreateDeployment({
  "apiId": ""
}, context)
```

#### Input
* input `object`
  * apiId **required** `string`
  * description `string`: A string with a length between [0-1024].
  * stageName `string`: A string with a length between [1-128].

#### Output
*Output schema unknown*

### DeleteDeployment



```js
amazonaws_apigatewayv2.DeleteDeployment({
  "apiId": "",
  "deploymentId": ""
}, context)
```

#### Input
* input `object`
  * apiId **required** `string`
  * deploymentId **required** `string`

#### Output
*Output schema unknown*

### GetDeployment



```js
amazonaws_apigatewayv2.GetDeployment({
  "apiId": "",
  "deploymentId": ""
}, context)
```

#### Input
* input `object`
  * apiId **required** `string`
  * deploymentId **required** `string`

#### Output
* output [GetDeploymentResponse](#getdeploymentresponse)

### UpdateDeployment



```js
amazonaws_apigatewayv2.UpdateDeployment({
  "apiId": "",
  "deploymentId": ""
}, context)
```

#### Input
* input `object`
  * apiId **required** `string`
  * deploymentId **required** `string`
  * description `string`: A string with a length between [0-1024].

#### Output
* output [UpdateDeploymentResponse](#updatedeploymentresponse)

### ExportApi



```js
amazonaws_apigatewayv2.ExportApi({
  "apiId": "",
  "outputType": "",
  "specification": ""
}, context)
```

#### Input
* input `object`
  * apiId **required** `string`
  * exportVersion `string`
  * includeExtensions `boolean`
  * outputType **required** `string`
  * specification **required** `string`
  * stageName `string`

#### Output
* output [ExportApiResponse](#exportapiresponse)

### GetIntegrations



```js
amazonaws_apigatewayv2.GetIntegrations({
  "apiId": ""
}, context)
```

#### Input
* input `object`
  * apiId **required** `string`
  * maxResults `string`
  * nextToken `string`

#### Output
* output [GetIntegrationsResponse](#getintegrationsresponse)

### CreateIntegration



```js
amazonaws_apigatewayv2.CreateIntegration({
  "apiId": "",
  "integrationType": ""
}, context)
```

#### Input
* input `object`
  * apiId **required** `string`
  * connectionId `string`: A string with a length between [1-1024].
  * connectionType `string` (values: INTERNET, VPC_LINK): Represents a connection type.
  * contentHandlingStrategy `string` (values: CONVERT_TO_BINARY, CONVERT_TO_TEXT): Specifies how to handle response payload content type conversions. Supported only for WebSocket APIs.
  * credentialsArn `string`: Represents an Amazon Resource Name (ARN).
  * description `string`: A string with a length between [0-1024].
  * integrationMethod `string`: A string with a length between [1-64].
  * integrationSubtype `string`: A string with a length between [1-128].
  * integrationType **required** `string` (values: AWS, HTTP, MOCK, HTTP_PROXY, AWS_PROXY): Represents an API method integration type.
  * integrationUri `string`: A string representation of a URI with a length between [1-2048].
  * passthroughBehavior `string` (values: WHEN_NO_MATCH, NEVER, WHEN_NO_TEMPLATES): Represents passthrough behavior for an integration response. Supported only for WebSocket APIs.
  * payloadFormatVersion `string`: A string with a length between [1-64].
  * requestParameters `object`: A key-value map specifying response parameters that are passed to the method response from the backend. The key is a method response header parameter name and the mapped value is an integration response header value, a static value enclosed within a pair of single quotes, or a JSON expression from the integration response body. The mapping key must match the pattern of method.response.header.{name}, where name is a valid and unique header name. The mapped non-static value must match the pattern of integration.response.header.{name} or integration.response.body.{JSON-expression}, where name is a valid and unique response header name and JSON-expression is a valid JSON expression without the $ prefix.
  * requestTemplates `object`: A mapping of identifier keys to templates. The value is an actual template script. The key is typically a SelectionKey which is chosen based on evaluating a selection expression.
  * templateSelectionExpression `string`: An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information.
  * timeoutInMillis `integer`: An integer with a value between [50-30000].
  * tlsConfig `object`: The TLS configuration for a private integration. If you specify a TLS configuration, private integration traffic uses the HTTPS protocol. Supported only for HTTP APIs.
    * ServerNameToVerify

#### Output
*Output schema unknown*

### DeleteIntegration



```js
amazonaws_apigatewayv2.DeleteIntegration({
  "apiId": "",
  "integrationId": ""
}, context)
```

#### Input
* input `object`
  * apiId **required** `string`
  * integrationId **required** `string`

#### Output
*Output schema unknown*

### GetIntegration



```js
amazonaws_apigatewayv2.GetIntegration({
  "apiId": "",
  "integrationId": ""
}, context)
```

#### Input
* input `object`
  * apiId **required** `string`
  * integrationId **required** `string`

#### Output
* output [GetIntegrationResult](#getintegrationresult)

### UpdateIntegration



```js
amazonaws_apigatewayv2.UpdateIntegration({
  "apiId": "",
  "integrationId": ""
}, context)
```

#### Input
* input `object`
  * apiId **required** `string`
  * integrationId **required** `string`
  * connectionId `string`: A string with a length between [1-1024].
  * connectionType `string` (values: INTERNET, VPC_LINK): Represents a connection type.
  * contentHandlingStrategy `string` (values: CONVERT_TO_BINARY, CONVERT_TO_TEXT): Specifies how to handle response payload content type conversions. Supported only for WebSocket APIs.
  * credentialsArn `string`: Represents an Amazon Resource Name (ARN).
  * description `string`: A string with a length between [0-1024].
  * integrationMethod `string`: A string with a length between [1-64].
  * integrationSubtype `string`: A string with a length between [1-128].
  * integrationType `string` (values: AWS, HTTP, MOCK, HTTP_PROXY, AWS_PROXY): Represents an API method integration type.
  * integrationUri `string`: A string representation of a URI with a length between [1-2048].
  * passthroughBehavior `string` (values: WHEN_NO_MATCH, NEVER, WHEN_NO_TEMPLATES): Represents passthrough behavior for an integration response. Supported only for WebSocket APIs.
  * payloadFormatVersion `string`: A string with a length between [1-64].
  * requestParameters `object`: A key-value map specifying response parameters that are passed to the method response from the backend. The key is a method response header parameter name and the mapped value is an integration response header value, a static value enclosed within a pair of single quotes, or a JSON expression from the integration response body. The mapping key must match the pattern of method.response.header.{name}, where name is a valid and unique header name. The mapped non-static value must match the pattern of integration.response.header.{name} or integration.response.body.{JSON-expression}, where name is a valid and unique response header name and JSON-expression is a valid JSON expression without the $ prefix.
  * requestTemplates `object`: A mapping of identifier keys to templates. The value is an actual template script. The key is typically a SelectionKey which is chosen based on evaluating a selection expression.
  * templateSelectionExpression `string`: An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information.
  * timeoutInMillis `integer`: An integer with a value between [50-30000].
  * tlsConfig `object`: The TLS configuration for a private integration. If you specify a TLS configuration, private integration traffic uses the HTTPS protocol. Supported only for HTTP APIs.
    * ServerNameToVerify

#### Output
* output [UpdateIntegrationResult](#updateintegrationresult)

### GetIntegrationResponses



```js
amazonaws_apigatewayv2.GetIntegrationResponses({
  "apiId": "",
  "integrationId": ""
}, context)
```

#### Input
* input `object`
  * apiId **required** `string`
  * integrationId **required** `string`
  * maxResults `string`
  * nextToken `string`

#### Output
* output [GetIntegrationResponsesResponse](#getintegrationresponsesresponse)

### CreateIntegrationResponse



```js
amazonaws_apigatewayv2.CreateIntegrationResponse({
  "apiId": "",
  "integrationId": "",
  "integrationResponseKey": ""
}, context)
```

#### Input
* input `object`
  * apiId **required** `string`
  * integrationId **required** `string`
  * contentHandlingStrategy `string` (values: CONVERT_TO_BINARY, CONVERT_TO_TEXT): Specifies how to handle response payload content type conversions. Supported only for WebSocket APIs.
  * integrationResponseKey **required** `string`: After evaluating a selection expression, the result is compared against one or more selection keys to find a matching key. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for a list of expressions and each expression's associated selection key type.
  * responseParameters `object`: A key-value map specifying response parameters that are passed to the method response from the backend. The key is a method response header parameter name and the mapped value is an integration response header value, a static value enclosed within a pair of single quotes, or a JSON expression from the integration response body. The mapping key must match the pattern of method.response.header.{name}, where name is a valid and unique header name. The mapped non-static value must match the pattern of integration.response.header.{name} or integration.response.body.{JSON-expression}, where name is a valid and unique response header name and JSON-expression is a valid JSON expression without the $ prefix.
  * responseTemplates `object`: A mapping of identifier keys to templates. The value is an actual template script. The key is typically a SelectionKey which is chosen based on evaluating a selection expression.
  * templateSelectionExpression `string`: An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information.

#### Output
*Output schema unknown*

### DeleteIntegrationResponse



```js
amazonaws_apigatewayv2.DeleteIntegrationResponse({
  "apiId": "",
  "integrationId": "",
  "integrationResponseId": ""
}, context)
```

#### Input
* input `object`
  * apiId **required** `string`
  * integrationId **required** `string`
  * integrationResponseId **required** `string`

#### Output
*Output schema unknown*

### GetIntegrationResponse



```js
amazonaws_apigatewayv2.GetIntegrationResponse({
  "apiId": "",
  "integrationId": "",
  "integrationResponseId": ""
}, context)
```

#### Input
* input `object`
  * apiId **required** `string`
  * integrationId **required** `string`
  * integrationResponseId **required** `string`

#### Output
* output [GetIntegrationResponseResponse](#getintegrationresponseresponse)

### UpdateIntegrationResponse



```js
amazonaws_apigatewayv2.UpdateIntegrationResponse({
  "apiId": "",
  "integrationId": "",
  "integrationResponseId": ""
}, context)
```

#### Input
* input `object`
  * apiId **required** `string`
  * integrationId **required** `string`
  * integrationResponseId **required** `string`
  * contentHandlingStrategy `string` (values: CONVERT_TO_BINARY, CONVERT_TO_TEXT): Specifies how to handle response payload content type conversions. Supported only for WebSocket APIs.
  * integrationResponseKey `string`: After evaluating a selection expression, the result is compared against one or more selection keys to find a matching key. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for a list of expressions and each expression's associated selection key type.
  * responseParameters `object`: A key-value map specifying response parameters that are passed to the method response from the backend. The key is a method response header parameter name and the mapped value is an integration response header value, a static value enclosed within a pair of single quotes, or a JSON expression from the integration response body. The mapping key must match the pattern of method.response.header.{name}, where name is a valid and unique header name. The mapped non-static value must match the pattern of integration.response.header.{name} or integration.response.body.{JSON-expression}, where name is a valid and unique response header name and JSON-expression is a valid JSON expression without the $ prefix.
  * responseTemplates `object`: A mapping of identifier keys to templates. The value is an actual template script. The key is typically a SelectionKey which is chosen based on evaluating a selection expression.
  * templateSelectionExpression `string`: An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information.

#### Output
* output [UpdateIntegrationResponseResponse](#updateintegrationresponseresponse)

### GetModels



```js
amazonaws_apigatewayv2.GetModels({
  "apiId": ""
}, context)
```

#### Input
* input `object`
  * apiId **required** `string`
  * maxResults `string`
  * nextToken `string`

#### Output
* output [GetModelsResponse](#getmodelsresponse)

### CreateModel



```js
amazonaws_apigatewayv2.CreateModel({
  "apiId": "",
  "name": "",
  "schema": ""
}, context)
```

#### Input
* input `object`
  * apiId **required** `string`
  * contentType `string`: A string with a length between [1-256].
  * description `string`: A string with a length between [0-1024].
  * name **required** `string`: A string with a length between [1-128].
  * schema **required** `string`: A string with a length between [0-32768].

#### Output
*Output schema unknown*

### DeleteModel



```js
amazonaws_apigatewayv2.DeleteModel({
  "apiId": "",
  "modelId": ""
}, context)
```

#### Input
* input `object`
  * apiId **required** `string`
  * modelId **required** `string`

#### Output
*Output schema unknown*

### GetModel



```js
amazonaws_apigatewayv2.GetModel({
  "apiId": "",
  "modelId": ""
}, context)
```

#### Input
* input `object`
  * apiId **required** `string`
  * modelId **required** `string`

#### Output
* output [GetModelResponse](#getmodelresponse)

### UpdateModel



```js
amazonaws_apigatewayv2.UpdateModel({
  "apiId": "",
  "modelId": ""
}, context)
```

#### Input
* input `object`
  * apiId **required** `string`
  * modelId **required** `string`
  * contentType `string`: A string with a length between [1-256].
  * description `string`: A string with a length between [0-1024].
  * name `string`: A string with a length between [1-128].
  * schema `string`: A string with a length between [0-32768].

#### Output
* output [UpdateModelResponse](#updatemodelresponse)

### GetModelTemplate



```js
amazonaws_apigatewayv2.GetModelTemplate({
  "apiId": "",
  "modelId": ""
}, context)
```

#### Input
* input `object`
  * apiId **required** `string`
  * modelId **required** `string`

#### Output
* output [GetModelTemplateResponse](#getmodeltemplateresponse)

### GetRoutes



```js
amazonaws_apigatewayv2.GetRoutes({
  "apiId": ""
}, context)
```

#### Input
* input `object`
  * apiId **required** `string`
  * maxResults `string`
  * nextToken `string`

#### Output
* output [GetRoutesResponse](#getroutesresponse)

### CreateRoute



```js
amazonaws_apigatewayv2.CreateRoute({
  "apiId": "",
  "routeKey": ""
}, context)
```

#### Input
* input `object`
  * apiId **required** `string`
  * apiKeyRequired `boolean`: Specifies whether an API key is required for the route. Supported only for WebSocket APIs.
  * authorizationScopes `array`: A list of authorization scopes configured on a route. The scopes are used with a JWT authorizer to authorize the method invocation. The authorization works by matching the route scopes against the scopes parsed from the access token in the incoming request. The method invocation is authorized if any route scope matches a claimed scope in the access token. Otherwise, the invocation is not authorized. When the route scope is configured, the client must provide an access token instead of an identity token for authorization purposes.
    * items [StringWithLengthBetween1And64](#stringwithlengthbetween1and64)
  * authorizationType `string` (values: NONE, AWS_IAM, CUSTOM, JWT): The authorization type. For WebSocket APIs, valid values are NONE for open access, AWS_IAM for using AWS IAM permissions, and CUSTOM for using a Lambda authorizer. For HTTP APIs, valid values are NONE for open access, JWT for using JSON Web Tokens, AWS_IAM for using AWS IAM permissions, and CUSTOM for using a Lambda authorizer.
  * authorizerId `string`: The identifier.
  * modelSelectionExpression `string`: An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information.
  * operationName `string`: A string with a length between [1-64].
  * requestModels `object`: The route models.
  * requestParameters `object`: The route parameters.
  * routeKey **required** `string`: After evaluating a selection expression, the result is compared against one or more selection keys to find a matching key. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for a list of expressions and each expression's associated selection key type.
  * routeResponseSelectionExpression `string`: An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information.
  * target `string`: A string with a length between [1-128].

#### Output
*Output schema unknown*

### DeleteRoute



```js
amazonaws_apigatewayv2.DeleteRoute({
  "apiId": "",
  "routeId": ""
}, context)
```

#### Input
* input `object`
  * apiId **required** `string`
  * routeId **required** `string`

#### Output
*Output schema unknown*

### GetRoute



```js
amazonaws_apigatewayv2.GetRoute({
  "apiId": "",
  "routeId": ""
}, context)
```

#### Input
* input `object`
  * apiId **required** `string`
  * routeId **required** `string`

#### Output
* output [GetRouteResult](#getrouteresult)

### UpdateRoute



```js
amazonaws_apigatewayv2.UpdateRoute({
  "apiId": "",
  "routeId": ""
}, context)
```

#### Input
* input `object`
  * apiId **required** `string`
  * routeId **required** `string`
  * apiKeyRequired `boolean`: Specifies whether an API key is required for the route. Supported only for WebSocket APIs.
  * authorizationScopes `array`: A list of authorization scopes configured on a route. The scopes are used with a JWT authorizer to authorize the method invocation. The authorization works by matching the route scopes against the scopes parsed from the access token in the incoming request. The method invocation is authorized if any route scope matches a claimed scope in the access token. Otherwise, the invocation is not authorized. When the route scope is configured, the client must provide an access token instead of an identity token for authorization purposes.
    * items [StringWithLengthBetween1And64](#stringwithlengthbetween1and64)
  * authorizationType `string` (values: NONE, AWS_IAM, CUSTOM, JWT): The authorization type. For WebSocket APIs, valid values are NONE for open access, AWS_IAM for using AWS IAM permissions, and CUSTOM for using a Lambda authorizer. For HTTP APIs, valid values are NONE for open access, JWT for using JSON Web Tokens, AWS_IAM for using AWS IAM permissions, and CUSTOM for using a Lambda authorizer.
  * authorizerId `string`: The identifier.
  * modelSelectionExpression `string`: An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information.
  * operationName `string`: A string with a length between [1-64].
  * requestModels `object`: The route models.
  * requestParameters `object`: The route parameters.
  * routeKey `string`: After evaluating a selection expression, the result is compared against one or more selection keys to find a matching key. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for a list of expressions and each expression's associated selection key type.
  * routeResponseSelectionExpression `string`: An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information.
  * target `string`: A string with a length between [1-128].

#### Output
* output [UpdateRouteResult](#updaterouteresult)

### DeleteRouteRequestParameter



```js
amazonaws_apigatewayv2.DeleteRouteRequestParameter({
  "apiId": "",
  "requestParameterKey": "",
  "routeId": ""
}, context)
```

#### Input
* input `object`
  * apiId **required** `string`
  * requestParameterKey **required** `string`
  * routeId **required** `string`

#### Output
*Output schema unknown*

### GetRouteResponses



```js
amazonaws_apigatewayv2.GetRouteResponses({
  "apiId": "",
  "routeId": ""
}, context)
```

#### Input
* input `object`
  * apiId **required** `string`
  * maxResults `string`
  * nextToken `string`
  * routeId **required** `string`

#### Output
* output [GetRouteResponsesResponse](#getrouteresponsesresponse)

### CreateRouteResponse



```js
amazonaws_apigatewayv2.CreateRouteResponse({
  "apiId": "",
  "routeId": "",
  "routeResponseKey": ""
}, context)
```

#### Input
* input `object`
  * apiId **required** `string`
  * routeId **required** `string`
  * modelSelectionExpression `string`: An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information.
  * responseModels `object`: The route models.
  * responseParameters `object`: The route parameters.
  * routeResponseKey **required** `string`: After evaluating a selection expression, the result is compared against one or more selection keys to find a matching key. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for a list of expressions and each expression's associated selection key type.

#### Output
*Output schema unknown*

### DeleteRouteResponse



```js
amazonaws_apigatewayv2.DeleteRouteResponse({
  "apiId": "",
  "routeId": "",
  "routeResponseId": ""
}, context)
```

#### Input
* input `object`
  * apiId **required** `string`
  * routeId **required** `string`
  * routeResponseId **required** `string`

#### Output
*Output schema unknown*

### GetRouteResponse



```js
amazonaws_apigatewayv2.GetRouteResponse({
  "apiId": "",
  "routeId": "",
  "routeResponseId": ""
}, context)
```

#### Input
* input `object`
  * apiId **required** `string`
  * routeId **required** `string`
  * routeResponseId **required** `string`

#### Output
* output [GetRouteResponseResponse](#getrouteresponseresponse)

### UpdateRouteResponse



```js
amazonaws_apigatewayv2.UpdateRouteResponse({
  "apiId": "",
  "routeId": "",
  "routeResponseId": ""
}, context)
```

#### Input
* input `object`
  * apiId **required** `string`
  * routeId **required** `string`
  * routeResponseId **required** `string`
  * modelSelectionExpression `string`: An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information.
  * responseModels `object`: The route models.
  * responseParameters `object`: The route parameters.
  * routeResponseKey `string`: After evaluating a selection expression, the result is compared against one or more selection keys to find a matching key. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for a list of expressions and each expression's associated selection key type.

#### Output
* output [UpdateRouteResponseResponse](#updaterouteresponseresponse)

### GetStages



```js
amazonaws_apigatewayv2.GetStages({
  "apiId": ""
}, context)
```

#### Input
* input `object`
  * apiId **required** `string`
  * maxResults `string`
  * nextToken `string`

#### Output
* output [GetStagesResponse](#getstagesresponse)

### CreateStage



```js
amazonaws_apigatewayv2.CreateStage({
  "apiId": "",
  "stageName": ""
}, context)
```

#### Input
* input `object`
  * apiId **required** `string`
  * tags `object`: Represents a collection of tags associated with the resource.
  * accessLogSettings `object`: Settings for logging access in a stage.
    * DestinationArn
    * Format
  * autoDeploy `boolean`: Specifies whether updates to an API automatically trigger a new deployment. The default value is false.
  * clientCertificateId `string`: The identifier.
  * defaultRouteSettings `object`: Represents a collection of route settings.
    * DataTraceEnabled
    * DetailedMetricsEnabled
    * LoggingLevel
    * ThrottlingBurstLimit
    * ThrottlingRateLimit
  * deploymentId `string`: The identifier.
  * description `string`: A string with a length between [0-1024].
  * routeSettings `object`: The route settings map.
  * stageName **required** `string`: A string with a length between [1-128].
  * stageVariables `object`: The stage variable map.

#### Output
*Output schema unknown*

### DeleteStage



```js
amazonaws_apigatewayv2.DeleteStage({
  "apiId": "",
  "stageName": ""
}, context)
```

#### Input
* input `object`
  * apiId **required** `string`
  * stageName **required** `string`

#### Output
*Output schema unknown*

### GetStage



```js
amazonaws_apigatewayv2.GetStage({
  "apiId": "",
  "stageName": ""
}, context)
```

#### Input
* input `object`
  * apiId **required** `string`
  * stageName **required** `string`

#### Output
* output [GetStageResponse](#getstageresponse)

### UpdateStage



```js
amazonaws_apigatewayv2.UpdateStage({
  "apiId": "",
  "stageName": ""
}, context)
```

#### Input
* input `object`
  * apiId **required** `string`
  * stageName **required** `string`
  * accessLogSettings `object`: Settings for logging access in a stage.
    * DestinationArn
    * Format
  * autoDeploy `boolean`: Specifies whether updates to an API automatically trigger a new deployment. The default value is false.
  * clientCertificateId `string`: The identifier.
  * defaultRouteSettings `object`: Represents a collection of route settings.
    * DataTraceEnabled
    * DetailedMetricsEnabled
    * LoggingLevel
    * ThrottlingBurstLimit
    * ThrottlingRateLimit
  * deploymentId `string`: The identifier.
  * description `string`: A string with a length between [0-1024].
  * routeSettings `object`: The route settings map.
  * stageVariables `object`: The stage variable map.

#### Output
* output [UpdateStageResponse](#updatestageresponse)

### DeleteAccessLogSettings



```js
amazonaws_apigatewayv2.DeleteAccessLogSettings({
  "apiId": "",
  "stageName": ""
}, context)
```

#### Input
* input `object`
  * apiId **required** `string`
  * stageName **required** `string`

#### Output
*Output schema unknown*

### ResetAuthorizersCache



```js
amazonaws_apigatewayv2.ResetAuthorizersCache({
  "apiId": "",
  "stageName": ""
}, context)
```

#### Input
* input `object`
  * apiId **required** `string`
  * stageName **required** `string`

#### Output
*Output schema unknown*

### DeleteRouteSettings



```js
amazonaws_apigatewayv2.DeleteRouteSettings({
  "apiId": "",
  "routeKey": "",
  "stageName": ""
}, context)
```

#### Input
* input `object`
  * apiId **required** `string`
  * routeKey **required** `string`
  * stageName **required** `string`

#### Output
*Output schema unknown*

### GetDomainNames



```js
amazonaws_apigatewayv2.GetDomainNames({}, context)
```

#### Input
* input `object`
  * maxResults `string`
  * nextToken `string`

#### Output
* output [GetDomainNamesResponse](#getdomainnamesresponse)

### CreateDomainName



```js
amazonaws_apigatewayv2.CreateDomainName({
  "domainName": ""
}, context)
```

#### Input
* input `object`
  * tags `object`: Represents a collection of tags associated with the resource.
  * domainName **required** `string`: A string with a length between [1-512].
  * domainNameConfigurations `array`: The domain name configurations.
    * items [DomainNameConfiguration](#domainnameconfiguration)
  * mutualTlsAuthentication `object`: The mutual TLS authentication configuration for a custom domain name.
    * TruststoreUri
    * TruststoreVersion

#### Output
*Output schema unknown*

### DeleteDomainName



```js
amazonaws_apigatewayv2.DeleteDomainName({
  "domainName": ""
}, context)
```

#### Input
* input `object`
  * domainName **required** `string`

#### Output
*Output schema unknown*

### GetDomainName



```js
amazonaws_apigatewayv2.GetDomainName({
  "domainName": ""
}, context)
```

#### Input
* input `object`
  * domainName **required** `string`

#### Output
* output [GetDomainNameResponse](#getdomainnameresponse)

### UpdateDomainName



```js
amazonaws_apigatewayv2.UpdateDomainName({
  "domainName": ""
}, context)
```

#### Input
* input `object`
  * domainName **required** `string`
  * domainNameConfigurations `array`: The domain name configurations.
    * items [DomainNameConfiguration](#domainnameconfiguration)
  * mutualTlsAuthentication `object`: The mutual TLS authentication configuration for a custom domain name.
    * TruststoreUri
    * TruststoreVersion

#### Output
* output [UpdateDomainNameResponse](#updatedomainnameresponse)

### GetApiMappings



```js
amazonaws_apigatewayv2.GetApiMappings({
  "domainName": ""
}, context)
```

#### Input
* input `object`
  * domainName **required** `string`
  * maxResults `string`
  * nextToken `string`

#### Output
* output [GetApiMappingsResponse](#getapimappingsresponse)

### CreateApiMapping



```js
amazonaws_apigatewayv2.CreateApiMapping({
  "domainName": "",
  "apiId": "",
  "stage": ""
}, context)
```

#### Input
* input `object`
  * domainName **required** `string`
  * apiId **required** `string`: The identifier.
  * apiMappingKey `string`: After evaluating a selection expression, the result is compared against one or more selection keys to find a matching key. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for a list of expressions and each expression's associated selection key type.
  * stage **required** `string`: A string with a length between [1-128].

#### Output
*Output schema unknown*

### DeleteApiMapping



```js
amazonaws_apigatewayv2.DeleteApiMapping({
  "apiMappingId": "",
  "domainName": ""
}, context)
```

#### Input
* input `object`
  * apiMappingId **required** `string`
  * domainName **required** `string`

#### Output
*Output schema unknown*

### GetApiMapping



```js
amazonaws_apigatewayv2.GetApiMapping({
  "apiMappingId": "",
  "domainName": ""
}, context)
```

#### Input
* input `object`
  * apiMappingId **required** `string`
  * domainName **required** `string`

#### Output
* output [GetApiMappingResponse](#getapimappingresponse)

### UpdateApiMapping



```js
amazonaws_apigatewayv2.UpdateApiMapping({
  "apiMappingId": "",
  "domainName": "",
  "apiId": ""
}, context)
```

#### Input
* input `object`
  * apiMappingId **required** `string`
  * domainName **required** `string`
  * apiId **required** `string`: The identifier.
  * apiMappingKey `string`: After evaluating a selection expression, the result is compared against one or more selection keys to find a matching key. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for a list of expressions and each expression's associated selection key type.
  * stage `string`: A string with a length between [1-128].

#### Output
* output [UpdateApiMappingResponse](#updateapimappingresponse)

### GetTags



```js
amazonaws_apigatewayv2.GetTags({
  "resource-arn": ""
}, context)
```

#### Input
* input `object`
  * resource-arn **required** `string`

#### Output
* output [GetTagsResponse](#gettagsresponse)

### TagResource



```js
amazonaws_apigatewayv2.TagResource({
  "resource-arn": ""
}, context)
```

#### Input
* input `object`
  * resource-arn **required** `string`
  * tags `object`: Represents a collection of tags associated with the resource.

#### Output
*Output schema unknown*

### UntagResource



```js
amazonaws_apigatewayv2.UntagResource({
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

### GetVpcLinks



```js
amazonaws_apigatewayv2.GetVpcLinks({}, context)
```

#### Input
* input `object`
  * maxResults `string`
  * nextToken `string`

#### Output
* output [GetVpcLinksResponse](#getvpclinksresponse)

### CreateVpcLink



```js
amazonaws_apigatewayv2.CreateVpcLink({
  "name": "",
  "subnetIds": []
}, context)
```

#### Input
* input `object`
  * tags `object`: Represents a collection of tags associated with the resource.
  * name **required** `string`: A string with a length between [1-128].
  * securityGroupIds `array`: A list of security group IDs for the VPC link.
    * items [__string](#__string)
  * subnetIds **required** `array`: A list of subnet IDs to include in the VPC link.
    * items [__string](#__string)

#### Output
*Output schema unknown*

### DeleteVpcLink



```js
amazonaws_apigatewayv2.DeleteVpcLink({
  "vpcLinkId": ""
}, context)
```

#### Input
* input `object`
  * vpcLinkId **required** `string`

#### Output
*Output schema unknown*

### GetVpcLink



```js
amazonaws_apigatewayv2.GetVpcLink({
  "vpcLinkId": ""
}, context)
```

#### Input
* input `object`
  * vpcLinkId **required** `string`

#### Output
* output [GetVpcLinkResponse](#getvpclinkresponse)

### UpdateVpcLink



```js
amazonaws_apigatewayv2.UpdateVpcLink({
  "vpcLinkId": ""
}, context)
```

#### Input
* input `object`
  * vpcLinkId **required** `string`
  * name `string`: A string with a length between [1-128].

#### Output
* output [UpdateVpcLinkResponse](#updatevpclinkresponse)



## Definitions

### AccessDeniedException


### AccessLogSettings
* AccessLogSettings `object`: Settings for logging access in a stage.
  * DestinationArn
  * Format

### Api
* Api `object`: Represents an API.
  * ApiEndpoint
  * ApiGatewayManaged
  * ApiId
  * ApiKeySelectionExpression
  * CorsConfiguration
    * AllowCredentials
    * AllowHeaders
      * items [__string](#__string)
    * AllowMethods
      * items [StringWithLengthBetween1And64](#stringwithlengthbetween1and64)
    * AllowOrigins
      * items [__string](#__string)
    * ExposeHeaders
      * items [__string](#__string)
    * MaxAge
  * CreatedDate
  * Description
  * DisableExecuteApiEndpoint
  * DisableSchemaValidation
  * ImportInfo
    * items [__string](#__string)
  * Name **required**
  * ProtocolType **required**
  * RouteSelectionExpression **required**
  * Tags
  * Version
  * Warnings
    * items [__string](#__string)

### ApiMapping
* ApiMapping `object`: Represents an API mapping.
  * ApiId **required**
  * ApiMappingId
  * ApiMappingKey
  * Stage **required**

### Arn
* Arn `string`: Represents an Amazon Resource Name (ARN).

### AuthorizationScopes
* AuthorizationScopes `array`: A list of authorization scopes configured on a route. The scopes are used with a JWT authorizer to authorize the method invocation. The authorization works by matching the route scopes against the scopes parsed from the access token in the incoming request. The method invocation is authorized if any route scope matches a claimed scope in the access token. Otherwise, the invocation is not authorized. When the route scope is configured, the client must provide an access token instead of an identity token for authorization purposes.
  * items [StringWithLengthBetween1And64](#stringwithlengthbetween1and64)

### AuthorizationType
* AuthorizationType `string` (values: NONE, AWS_IAM, CUSTOM, JWT): The authorization type. For WebSocket APIs, valid values are NONE for open access, AWS_IAM for using AWS IAM permissions, and CUSTOM for using a Lambda authorizer. For HTTP APIs, valid values are NONE for open access, JWT for using JSON Web Tokens, AWS_IAM for using AWS IAM permissions, and CUSTOM for using a Lambda authorizer.

### Authorizer
* Authorizer `object`: Represents an authorizer.
  * AuthorizerCredentialsArn
  * AuthorizerId
  * AuthorizerPayloadFormatVersion
  * AuthorizerResultTtlInSeconds
  * AuthorizerType
  * AuthorizerUri
  * EnableSimpleResponses
  * IdentitySource
    * items [__string](#__string)
  * IdentityValidationExpression
  * JwtConfiguration
    * Audience
      * items [__string](#__string)
    * Issuer
  * Name **required**

### AuthorizerType
* AuthorizerType `string` (values: REQUEST, JWT): The authorizer type. Specify REQUEST for a Lambda function using incoming request parameters. Specify JWT to use JSON Web Tokens (supported only for HTTP APIs).

### BadRequestException


### ConflictException


### ConnectionType
* ConnectionType `string` (values: INTERNET, VPC_LINK): Represents a connection type.

### ContentHandlingStrategy
* ContentHandlingStrategy `string` (values: CONVERT_TO_BINARY, CONVERT_TO_TEXT): Specifies how to handle response payload content type conversions. Supported only for WebSocket APIs.

### Cors
* Cors `object`: Represents a CORS configuration. Supported only for HTTP APIs. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-cors.html">Configuring CORS</a> for more information.
  * AllowCredentials
  * AllowHeaders
    * items [__string](#__string)
  * AllowMethods
    * items [StringWithLengthBetween1And64](#stringwithlengthbetween1and64)
  * AllowOrigins
    * items [__string](#__string)
  * ExposeHeaders
    * items [__string](#__string)
  * MaxAge

### CorsHeaderList
* CorsHeaderList `array`: Represents a collection of allowed headers. Supported only for HTTP APIs.
  * items [__string](#__string)

### CorsMethodList
* CorsMethodList `array`: Represents a collection of methods. Supported only for HTTP APIs.
  * items [StringWithLengthBetween1And64](#stringwithlengthbetween1and64)

### CorsOriginList
* CorsOriginList `array`: Represents a collection of origins. Supported only for HTTP APIs.
  * items [__string](#__string)

### CreateApiMappingRequest
* CreateApiMappingRequest `object`: Creates a new ApiMapping resource to represent an API mapping.
  * ApiId **required**
  * ApiMappingKey
  * Stage **required**

### CreateApiMappingResponse
* CreateApiMappingResponse `object`
  * ApiId
  * ApiMappingId
  * ApiMappingKey
  * Stage

### CreateApiRequest
* CreateApiRequest `object`: Creates a new Api resource to represent an API.
  * ApiKeySelectionExpression
  * CorsConfiguration
    * AllowCredentials
    * AllowHeaders
      * items [__string](#__string)
    * AllowMethods
      * items [StringWithLengthBetween1And64](#stringwithlengthbetween1and64)
    * AllowOrigins
      * items [__string](#__string)
    * ExposeHeaders
      * items [__string](#__string)
    * MaxAge
  * CredentialsArn
  * Description
  * DisableExecuteApiEndpoint
  * DisableSchemaValidation
  * Name **required**
  * ProtocolType **required**
  * RouteKey
  * RouteSelectionExpression
  * Tags
  * Target
  * Version

### CreateApiResponse
* CreateApiResponse `object`
  * ApiEndpoint
  * ApiGatewayManaged
  * ApiId
  * ApiKeySelectionExpression
  * CorsConfiguration
    * AllowCredentials
    * AllowHeaders
      * items [__string](#__string)
    * AllowMethods
      * items [StringWithLengthBetween1And64](#stringwithlengthbetween1and64)
    * AllowOrigins
      * items [__string](#__string)
    * ExposeHeaders
      * items [__string](#__string)
    * MaxAge
  * CreatedDate
  * Description
  * DisableExecuteApiEndpoint
  * DisableSchemaValidation
  * ImportInfo
    * items [__string](#__string)
  * Name
  * ProtocolType
  * RouteSelectionExpression
  * Tags
  * Version
  * Warnings
    * items [__string](#__string)

### CreateAuthorizerRequest
* CreateAuthorizerRequest `object`: Creates a new Authorizer resource to represent an authorizer.
  * AuthorizerCredentialsArn
  * AuthorizerPayloadFormatVersion
  * AuthorizerResultTtlInSeconds
  * AuthorizerType **required**
  * AuthorizerUri
  * EnableSimpleResponses
  * IdentitySource **required**
    * items [__string](#__string)
  * IdentityValidationExpression
  * JwtConfiguration
    * Audience
      * items [__string](#__string)
    * Issuer
  * Name **required**

### CreateAuthorizerResponse
* CreateAuthorizerResponse `object`
  * AuthorizerCredentialsArn
  * AuthorizerId
  * AuthorizerPayloadFormatVersion
  * AuthorizerResultTtlInSeconds
  * AuthorizerType
  * AuthorizerUri
  * EnableSimpleResponses
  * IdentitySource
    * items [__string](#__string)
  * IdentityValidationExpression
  * JwtConfiguration
    * Audience
      * items [__string](#__string)
    * Issuer
  * Name

### CreateDeploymentRequest
* CreateDeploymentRequest `object`: Creates a new Deployment resource to represent a deployment.
  * Description
  * StageName

### CreateDeploymentResponse
* CreateDeploymentResponse `object`
  * AutoDeployed
  * CreatedDate
  * DeploymentId
  * DeploymentStatus
  * DeploymentStatusMessage
  * Description

### CreateDomainNameRequest
* CreateDomainNameRequest `object`: Creates a new DomainName resource to represent a domain name.
  * DomainName **required**
  * DomainNameConfigurations
    * items [DomainNameConfiguration](#domainnameconfiguration)
  * MutualTlsAuthentication
    * TruststoreUri
    * TruststoreVersion
  * Tags

### CreateDomainNameResponse
* CreateDomainNameResponse `object`
  * ApiMappingSelectionExpression
  * DomainName
  * DomainNameConfigurations
    * items [DomainNameConfiguration](#domainnameconfiguration)
  * MutualTlsAuthentication
    * TruststoreUri
    * TruststoreVersion
    * TruststoreWarnings
      * items [__string](#__string)
  * Tags

### CreateIntegrationRequest
* CreateIntegrationRequest `object`: Creates a new Integration resource to represent an integration.
  * ConnectionId
  * ConnectionType
  * ContentHandlingStrategy
  * CredentialsArn
  * Description
  * IntegrationMethod
  * IntegrationSubtype
  * IntegrationType **required**
  * IntegrationUri
  * PassthroughBehavior
  * PayloadFormatVersion
  * RequestParameters
  * RequestTemplates
  * TemplateSelectionExpression
  * TimeoutInMillis
  * TlsConfig
    * ServerNameToVerify

### CreateIntegrationResponseRequest
* CreateIntegrationResponseRequest `object`: Creates a new IntegrationResponse resource to represent an integration response.
  * ContentHandlingStrategy
  * IntegrationResponseKey **required**
  * ResponseParameters
  * ResponseTemplates
  * TemplateSelectionExpression

### CreateIntegrationResponseResponse
* CreateIntegrationResponseResponse `object`
  * ContentHandlingStrategy
  * IntegrationResponseId
  * IntegrationResponseKey
  * ResponseParameters
  * ResponseTemplates
  * TemplateSelectionExpression

### CreateIntegrationResult
* CreateIntegrationResult `object`
  * ApiGatewayManaged
  * ConnectionId
  * ConnectionType
  * ContentHandlingStrategy
  * CredentialsArn
  * Description
  * IntegrationId
  * IntegrationMethod
  * IntegrationResponseSelectionExpression
  * IntegrationSubtype
  * IntegrationType
  * IntegrationUri
  * PassthroughBehavior
  * PayloadFormatVersion
  * RequestParameters
  * RequestTemplates
  * TemplateSelectionExpression
  * TimeoutInMillis
  * TlsConfig
    * ServerNameToVerify

### CreateModelRequest
* CreateModelRequest `object`: Creates a new Model.
  * ContentType
  * Description
  * Name **required**
  * Schema **required**

### CreateModelResponse
* CreateModelResponse `object`
  * ContentType
  * Description
  * ModelId
  * Name
  * Schema

### CreateRouteRequest
* CreateRouteRequest `object`: Creates a new Route resource to represent a route.
  * ApiKeyRequired
  * AuthorizationScopes
    * items [StringWithLengthBetween1And64](#stringwithlengthbetween1and64)
  * AuthorizationType
  * AuthorizerId
  * ModelSelectionExpression
  * OperationName
  * RequestModels
  * RequestParameters
  * RouteKey **required**
  * RouteResponseSelectionExpression
  * Target

### CreateRouteResponseRequest
* CreateRouteResponseRequest `object`: Creates a new RouteResponse resource to represent a route response.
  * ModelSelectionExpression
  * ResponseModels
  * ResponseParameters
  * RouteResponseKey **required**

### CreateRouteResponseResponse
* CreateRouteResponseResponse `object`
  * ModelSelectionExpression
  * ResponseModels
  * ResponseParameters
  * RouteResponseId
  * RouteResponseKey

### CreateRouteResult
* CreateRouteResult `object`
  * ApiGatewayManaged
  * ApiKeyRequired
  * AuthorizationScopes
    * items [StringWithLengthBetween1And64](#stringwithlengthbetween1and64)
  * AuthorizationType
  * AuthorizerId
  * ModelSelectionExpression
  * OperationName
  * RequestModels
  * RequestParameters
  * RouteId
  * RouteKey
  * RouteResponseSelectionExpression
  * Target

### CreateStageRequest
* CreateStageRequest `object`: Creates a new Stage resource to represent a stage.
  * AccessLogSettings
    * DestinationArn
    * Format
  * AutoDeploy
  * ClientCertificateId
  * DefaultRouteSettings
    * DataTraceEnabled
    * DetailedMetricsEnabled
    * LoggingLevel
    * ThrottlingBurstLimit
    * ThrottlingRateLimit
  * DeploymentId
  * Description
  * RouteSettings
  * StageName **required**
  * StageVariables
  * Tags

### CreateStageResponse
* CreateStageResponse `object`
  * AccessLogSettings
    * DestinationArn
    * Format
  * ApiGatewayManaged
  * AutoDeploy
  * ClientCertificateId
  * CreatedDate
  * DefaultRouteSettings
    * DataTraceEnabled
    * DetailedMetricsEnabled
    * LoggingLevel
    * ThrottlingBurstLimit
    * ThrottlingRateLimit
  * DeploymentId
  * Description
  * LastDeploymentStatusMessage
  * LastUpdatedDate
  * RouteSettings
  * StageName
  * StageVariables
  * Tags

### CreateVpcLinkRequest
* CreateVpcLinkRequest `object`: Creates a VPC link
  * Name **required**
  * SecurityGroupIds
    * items [__string](#__string)
  * SubnetIds **required**
    * items [__string](#__string)
  * Tags

### CreateVpcLinkResponse
* CreateVpcLinkResponse `object`
  * CreatedDate
  * Name
  * SecurityGroupIds
    * items [__string](#__string)
  * SubnetIds
    * items [__string](#__string)
  * Tags
  * VpcLinkId
  * VpcLinkStatus
  * VpcLinkStatusMessage
  * VpcLinkVersion

### DeleteAccessLogSettingsRequest
* DeleteAccessLogSettingsRequest `object`

### DeleteApiMappingRequest
* DeleteApiMappingRequest `object`

### DeleteApiRequest
* DeleteApiRequest `object`

### DeleteAuthorizerRequest
* DeleteAuthorizerRequest `object`

### DeleteCorsConfigurationRequest
* DeleteCorsConfigurationRequest `object`

### DeleteDeploymentRequest
* DeleteDeploymentRequest `object`

### DeleteDomainNameRequest
* DeleteDomainNameRequest `object`

### DeleteIntegrationRequest
* DeleteIntegrationRequest `object`

### DeleteIntegrationResponseRequest
* DeleteIntegrationResponseRequest `object`

### DeleteModelRequest
* DeleteModelRequest `object`

### DeleteRouteRequest
* DeleteRouteRequest `object`

### DeleteRouteRequestParameterRequest
* DeleteRouteRequestParameterRequest `object`

### DeleteRouteResponseRequest
* DeleteRouteResponseRequest `object`

### DeleteRouteSettingsRequest
* DeleteRouteSettingsRequest `object`

### DeleteStageRequest
* DeleteStageRequest `object`

### DeleteVpcLinkRequest
* DeleteVpcLinkRequest `object`

### DeleteVpcLinkResponse
* DeleteVpcLinkResponse `object`

### Deployment
* Deployment `object`: An immutable representation of an API that can be called by users. A Deployment must be associated with a Stage for it to be callable over the internet.
  * AutoDeployed
  * CreatedDate
  * DeploymentId
  * DeploymentStatus
  * DeploymentStatusMessage
  * Description

### DeploymentStatus
* DeploymentStatus `string` (values: PENDING, FAILED, DEPLOYED): Represents a deployment status.

### DomainName
* DomainName `object`: Represents a domain name.
  * ApiMappingSelectionExpression
  * DomainName **required**
  * DomainNameConfigurations
    * items [DomainNameConfiguration](#domainnameconfiguration)
  * MutualTlsAuthentication
    * TruststoreUri
    * TruststoreVersion
    * TruststoreWarnings
      * items [__string](#__string)
  * Tags

### DomainNameConfiguration
* DomainNameConfiguration `object`: The domain name configuration.
  * ApiGatewayDomainName
  * CertificateArn
  * CertificateName
  * CertificateUploadDate
  * DomainNameStatus
  * DomainNameStatusMessage
  * EndpointType
  * HostedZoneId
  * SecurityPolicy

### DomainNameConfigurations
* DomainNameConfigurations `array`: The domain name configurations.
  * items [DomainNameConfiguration](#domainnameconfiguration)

### DomainNameStatus
* DomainNameStatus `string` (values: AVAILABLE, UPDATING): The status of the domain name migration. The valid values are AVAILABLE and UPDATING. If the status is UPDATING, the domain cannot be modified further until the existing operation is complete. If it is AVAILABLE, the domain can be updated.

### EndpointType
* EndpointType `string` (values: REGIONAL, EDGE): Represents an endpoint type.

### ExportApiRequest
* ExportApiRequest `object`

### ExportApiResponse
* ExportApiResponse `object`
  * body [ExportedApi](#exportedapi)

### ExportedApi
* ExportedApi `string`: Represents an exported definition of an API in a particular output format, for example, YAML. The API is serialized to the requested specification, for example, OpenAPI 3.0.

### GetApiMappingRequest
* GetApiMappingRequest `object`

### GetApiMappingResponse
* GetApiMappingResponse `object`
  * ApiId
  * ApiMappingId
  * ApiMappingKey
  * Stage

### GetApiMappingsRequest
* GetApiMappingsRequest `object`

### GetApiMappingsResponse
* GetApiMappingsResponse `object`
  * Items
    * items [ApiMapping](#apimapping)
  * NextToken

### GetApiRequest
* GetApiRequest `object`

### GetApiResponse
* GetApiResponse `object`
  * ApiEndpoint
  * ApiGatewayManaged
  * ApiId
  * ApiKeySelectionExpression
  * CorsConfiguration
    * AllowCredentials
    * AllowHeaders
      * items [__string](#__string)
    * AllowMethods
      * items [StringWithLengthBetween1And64](#stringwithlengthbetween1and64)
    * AllowOrigins
      * items [__string](#__string)
    * ExposeHeaders
      * items [__string](#__string)
    * MaxAge
  * CreatedDate
  * Description
  * DisableExecuteApiEndpoint
  * DisableSchemaValidation
  * ImportInfo
    * items [__string](#__string)
  * Name
  * ProtocolType
  * RouteSelectionExpression
  * Tags
  * Version
  * Warnings
    * items [__string](#__string)

### GetApisRequest
* GetApisRequest `object`

### GetApisResponse
* GetApisResponse `object`
  * Items
    * items [Api](#api)
  * NextToken

### GetAuthorizerRequest
* GetAuthorizerRequest `object`

### GetAuthorizerResponse
* GetAuthorizerResponse `object`
  * AuthorizerCredentialsArn
  * AuthorizerId
  * AuthorizerPayloadFormatVersion
  * AuthorizerResultTtlInSeconds
  * AuthorizerType
  * AuthorizerUri
  * EnableSimpleResponses
  * IdentitySource
    * items [__string](#__string)
  * IdentityValidationExpression
  * JwtConfiguration
    * Audience
      * items [__string](#__string)
    * Issuer
  * Name

### GetAuthorizersRequest
* GetAuthorizersRequest `object`

### GetAuthorizersResponse
* GetAuthorizersResponse `object`
  * Items
    * items [Authorizer](#authorizer)
  * NextToken

### GetDeploymentRequest
* GetDeploymentRequest `object`

### GetDeploymentResponse
* GetDeploymentResponse `object`
  * AutoDeployed
  * CreatedDate
  * DeploymentId
  * DeploymentStatus
  * DeploymentStatusMessage
  * Description

### GetDeploymentsRequest
* GetDeploymentsRequest `object`

### GetDeploymentsResponse
* GetDeploymentsResponse `object`
  * Items
    * items [Deployment](#deployment)
  * NextToken

### GetDomainNameRequest
* GetDomainNameRequest `object`

### GetDomainNameResponse
* GetDomainNameResponse `object`
  * ApiMappingSelectionExpression
  * DomainName
  * DomainNameConfigurations
    * items [DomainNameConfiguration](#domainnameconfiguration)
  * MutualTlsAuthentication
    * TruststoreUri
    * TruststoreVersion
    * TruststoreWarnings
      * items [__string](#__string)
  * Tags

### GetDomainNamesRequest
* GetDomainNamesRequest `object`

### GetDomainNamesResponse
* GetDomainNamesResponse `object`
  * Items
    * items [DomainName](#domainname)
  * NextToken

### GetIntegrationRequest
* GetIntegrationRequest `object`

### GetIntegrationResponseRequest
* GetIntegrationResponseRequest `object`

### GetIntegrationResponseResponse
* GetIntegrationResponseResponse `object`
  * ContentHandlingStrategy
  * IntegrationResponseId
  * IntegrationResponseKey
  * ResponseParameters
  * ResponseTemplates
  * TemplateSelectionExpression

### GetIntegrationResponsesRequest
* GetIntegrationResponsesRequest `object`

### GetIntegrationResponsesResponse
* GetIntegrationResponsesResponse `object`
  * Items
    * items [IntegrationResponse](#integrationresponse)
  * NextToken

### GetIntegrationResult
* GetIntegrationResult `object`
  * ApiGatewayManaged
  * ConnectionId
  * ConnectionType
  * ContentHandlingStrategy
  * CredentialsArn
  * Description
  * IntegrationId
  * IntegrationMethod
  * IntegrationResponseSelectionExpression
  * IntegrationSubtype
  * IntegrationType
  * IntegrationUri
  * PassthroughBehavior
  * PayloadFormatVersion
  * RequestParameters
  * RequestTemplates
  * TemplateSelectionExpression
  * TimeoutInMillis
  * TlsConfig
    * ServerNameToVerify

### GetIntegrationsRequest
* GetIntegrationsRequest `object`

### GetIntegrationsResponse
* GetIntegrationsResponse `object`
  * Items
    * items [Integration](#integration)
  * NextToken

### GetModelRequest
* GetModelRequest `object`

### GetModelResponse
* GetModelResponse `object`
  * ContentType
  * Description
  * ModelId
  * Name
  * Schema

### GetModelTemplateRequest
* GetModelTemplateRequest `object`

### GetModelTemplateResponse
* GetModelTemplateResponse `object`
  * Value

### GetModelsRequest
* GetModelsRequest `object`

### GetModelsResponse
* GetModelsResponse `object`
  * Items
    * items [Model](#model)
  * NextToken

### GetRouteRequest
* GetRouteRequest `object`

### GetRouteResponseRequest
* GetRouteResponseRequest `object`

### GetRouteResponseResponse
* GetRouteResponseResponse `object`
  * ModelSelectionExpression
  * ResponseModels
  * ResponseParameters
  * RouteResponseId
  * RouteResponseKey

### GetRouteResponsesRequest
* GetRouteResponsesRequest `object`

### GetRouteResponsesResponse
* GetRouteResponsesResponse `object`
  * Items
    * items [RouteResponse](#routeresponse)
  * NextToken

### GetRouteResult
* GetRouteResult `object`
  * ApiGatewayManaged
  * ApiKeyRequired
  * AuthorizationScopes
    * items [StringWithLengthBetween1And64](#stringwithlengthbetween1and64)
  * AuthorizationType
  * AuthorizerId
  * ModelSelectionExpression
  * OperationName
  * RequestModels
  * RequestParameters
  * RouteId
  * RouteKey
  * RouteResponseSelectionExpression
  * Target

### GetRoutesRequest
* GetRoutesRequest `object`

### GetRoutesResponse
* GetRoutesResponse `object`
  * Items
    * items [Route](#route)
  * NextToken

### GetStageRequest
* GetStageRequest `object`

### GetStageResponse
* GetStageResponse `object`
  * AccessLogSettings
    * DestinationArn
    * Format
  * ApiGatewayManaged
  * AutoDeploy
  * ClientCertificateId
  * CreatedDate
  * DefaultRouteSettings
    * DataTraceEnabled
    * DetailedMetricsEnabled
    * LoggingLevel
    * ThrottlingBurstLimit
    * ThrottlingRateLimit
  * DeploymentId
  * Description
  * LastDeploymentStatusMessage
  * LastUpdatedDate
  * RouteSettings
  * StageName
  * StageVariables
  * Tags

### GetStagesRequest
* GetStagesRequest `object`

### GetStagesResponse
* GetStagesResponse `object`
  * Items
    * items [Stage](#stage)
  * NextToken

### GetTagsRequest
* GetTagsRequest `object`

### GetTagsResponse
* GetTagsResponse `object`
  * Tags

### GetVpcLinkRequest
* GetVpcLinkRequest `object`

### GetVpcLinkResponse
* GetVpcLinkResponse `object`
  * CreatedDate
  * Name
  * SecurityGroupIds
    * items [__string](#__string)
  * SubnetIds
    * items [__string](#__string)
  * Tags
  * VpcLinkId
  * VpcLinkStatus
  * VpcLinkStatusMessage
  * VpcLinkVersion

### GetVpcLinksRequest
* GetVpcLinksRequest `object`

### GetVpcLinksResponse
* GetVpcLinksResponse `object`
  * Items
    * items [VpcLink](#vpclink)
  * NextToken

### Id
* Id `string`: The identifier.

### IdentitySourceList
* IdentitySourceList `array`: The identity source for which authorization is requested. For the REQUEST authorizer, this is required when authorization caching is enabled. The value is a comma-separated string of one or more mapping expressions of the specified request parameters. For example, if an Auth header, a Name query string parameter are defined as identity sources, this value is $method.request.header.Auth, $method.request.querystring.Name. These parameters will be used to derive the authorization caching key and to perform runtime validation of the REQUEST authorizer by verifying all of the identity-related request parameters are present, not null and non-empty. Only when this is true does the authorizer invoke the authorizer Lambda function, otherwise, it returns a 401 Unauthorized response without calling the Lambda function. The valid value is a string of comma-separated mapping expressions of the specified request parameters. When the authorization caching is not enabled, this property is optional.
  * items [__string](#__string)

### ImportApiRequest
* ImportApiRequest `object`
  * Body **required**

### ImportApiResponse
* ImportApiResponse `object`
  * ApiEndpoint
  * ApiGatewayManaged
  * ApiId
  * ApiKeySelectionExpression
  * CorsConfiguration
    * AllowCredentials
    * AllowHeaders
      * items [__string](#__string)
    * AllowMethods
      * items [StringWithLengthBetween1And64](#stringwithlengthbetween1and64)
    * AllowOrigins
      * items [__string](#__string)
    * ExposeHeaders
      * items [__string](#__string)
    * MaxAge
  * CreatedDate
  * Description
  * DisableExecuteApiEndpoint
  * DisableSchemaValidation
  * ImportInfo
    * items [__string](#__string)
  * Name
  * ProtocolType
  * RouteSelectionExpression
  * Tags
  * Version
  * Warnings
    * items [__string](#__string)

### IntegerWithLengthBetween0And3600
* IntegerWithLengthBetween0And3600 `integer`: An integer with a value between [0-3600].

### IntegerWithLengthBetween50And30000
* IntegerWithLengthBetween50And30000 `integer`: An integer with a value between [50-30000].

### IntegerWithLengthBetweenMinus1And86400
* IntegerWithLengthBetweenMinus1And86400 `integer`: An integer with a value between -1 and 86400. Supported only for HTTP APIs.

### Integration
* Integration `object`: Represents an integration.
  * ApiGatewayManaged
  * ConnectionId
  * ConnectionType
  * ContentHandlingStrategy
  * CredentialsArn
  * Description
  * IntegrationId
  * IntegrationMethod
  * IntegrationResponseSelectionExpression
  * IntegrationSubtype
  * IntegrationType
  * IntegrationUri
  * PassthroughBehavior
  * PayloadFormatVersion
  * RequestParameters
  * RequestTemplates
  * TemplateSelectionExpression
  * TimeoutInMillis
  * TlsConfig
    * ServerNameToVerify

### IntegrationParameters
* IntegrationParameters `object`: A key-value map specifying response parameters that are passed to the method response from the backend. The key is a method response header parameter name and the mapped value is an integration response header value, a static value enclosed within a pair of single quotes, or a JSON expression from the integration response body. The mapping key must match the pattern of method.response.header.{name}, where name is a valid and unique header name. The mapped non-static value must match the pattern of integration.response.header.{name} or integration.response.body.{JSON-expression}, where name is a valid and unique response header name and JSON-expression is a valid JSON expression without the $ prefix.

### IntegrationResponse
* IntegrationResponse `object`: Represents an integration response.
  * ContentHandlingStrategy
  * IntegrationResponseId
  * IntegrationResponseKey **required**
  * ResponseParameters
  * ResponseTemplates
  * TemplateSelectionExpression

### IntegrationType
* IntegrationType `string` (values: AWS, HTTP, MOCK, HTTP_PROXY, AWS_PROXY): Represents an API method integration type.

### JWTConfiguration
* JWTConfiguration `object`: Represents the configuration of a JWT authorizer. Required for the JWT authorizer type. Supported only for HTTP APIs.
  * Audience
    * items [__string](#__string)
  * Issuer

### LoggingLevel
* LoggingLevel `string` (values: ERROR, INFO, OFF): The logging level.

### Model
* Model `object`: Represents a data model for an API. Supported only for WebSocket APIs. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/models-mappings.html">Create Models and Mapping Templates for Request and Response Mappings</a>.
  * ContentType
  * Description
  * ModelId
  * Name **required**
  * Schema

### MutualTlsAuthentication
* MutualTlsAuthentication `object`
  * TruststoreUri
  * TruststoreVersion
  * TruststoreWarnings
    * items [__string](#__string)

### MutualTlsAuthenticationInput
* MutualTlsAuthenticationInput `object`
  * TruststoreUri
  * TruststoreVersion

### NextToken
* NextToken `string`: The next page of elements from this collection. Not valid for the last element of the collection.

### NotFoundException


### ParameterConstraints
* ParameterConstraints `object`: Validation constraints imposed on parameters of a request (path, query string, headers).
  * Required

### PassthroughBehavior
* PassthroughBehavior `string` (values: WHEN_NO_MATCH, NEVER, WHEN_NO_TEMPLATES): Represents passthrough behavior for an integration response. Supported only for WebSocket APIs.

### ProtocolType
* ProtocolType `string` (values: WEBSOCKET, HTTP): Represents a protocol type.

### ReimportApiRequest
* ReimportApiRequest `object`
  * Body **required**

### ReimportApiResponse
* ReimportApiResponse `object`
  * ApiEndpoint
  * ApiGatewayManaged
  * ApiId
  * ApiKeySelectionExpression
  * CorsConfiguration
    * AllowCredentials
    * AllowHeaders
      * items [__string](#__string)
    * AllowMethods
      * items [StringWithLengthBetween1And64](#stringwithlengthbetween1and64)
    * AllowOrigins
      * items [__string](#__string)
    * ExposeHeaders
      * items [__string](#__string)
    * MaxAge
  * CreatedDate
  * Description
  * DisableExecuteApiEndpoint
  * DisableSchemaValidation
  * ImportInfo
    * items [__string](#__string)
  * Name
  * ProtocolType
  * RouteSelectionExpression
  * Tags
  * Version
  * Warnings
    * items [__string](#__string)

### ResetAuthorizersCacheRequest
* ResetAuthorizersCacheRequest `object`

### Route
* Route `object`: Represents a route.
  * ApiGatewayManaged
  * ApiKeyRequired
  * AuthorizationScopes
    * items [StringWithLengthBetween1And64](#stringwithlengthbetween1and64)
  * AuthorizationType
  * AuthorizerId
  * ModelSelectionExpression
  * OperationName
  * RequestModels
  * RequestParameters
  * RouteId
  * RouteKey **required**
  * RouteResponseSelectionExpression
  * Target

### RouteModels
* RouteModels `object`: The route models.

### RouteParameters
* RouteParameters `object`: The route parameters.

### RouteResponse
* RouteResponse `object`: Represents a route response.
  * ModelSelectionExpression
  * ResponseModels
  * ResponseParameters
  * RouteResponseId
  * RouteResponseKey **required**

### RouteSettings
* RouteSettings `object`: Represents a collection of route settings.
  * DataTraceEnabled
  * DetailedMetricsEnabled
  * LoggingLevel
  * ThrottlingBurstLimit
  * ThrottlingRateLimit

### RouteSettingsMap
* RouteSettingsMap `object`: The route settings map.

### SecurityGroupIdList
* SecurityGroupIdList `array`: A list of security group IDs for the VPC link.
  * items [__string](#__string)

### SecurityPolicy
* SecurityPolicy `string` (values: TLS_1_0, TLS_1_2): The Transport Layer Security (TLS) version of the security policy for this domain name. The valid values are TLS_1_0 and TLS_1_2.

### SelectionExpression
* SelectionExpression `string`: An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information.

### SelectionKey
* SelectionKey `string`: After evaluating a selection expression, the result is compared against one or more selection keys to find a matching key. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for a list of expressions and each expression's associated selection key type.

### Stage
* Stage `object`: Represents an API stage.
  * AccessLogSettings
    * DestinationArn
    * Format
  * ApiGatewayManaged
  * AutoDeploy
  * ClientCertificateId
  * CreatedDate
  * DefaultRouteSettings
    * DataTraceEnabled
    * DetailedMetricsEnabled
    * LoggingLevel
    * ThrottlingBurstLimit
    * ThrottlingRateLimit
  * DeploymentId
  * Description
  * LastDeploymentStatusMessage
  * LastUpdatedDate
  * RouteSettings
  * StageName **required**
  * StageVariables
  * Tags

### StageVariablesMap
* StageVariablesMap `object`: The stage variable map.

### StringWithLengthBetween0And1024
* StringWithLengthBetween0And1024 `string`: A string with a length between [0-1024].

### StringWithLengthBetween0And2048
* StringWithLengthBetween0And2048 `string`: A string with a length between [0-2048].

### StringWithLengthBetween0And32K
* StringWithLengthBetween0And32K `string`: A string with a length between [0-32768].

### StringWithLengthBetween1And1024
* StringWithLengthBetween1And1024 `string`: A string with a length between [1-1024].

### StringWithLengthBetween1And128
* StringWithLengthBetween1And128 `string`: A string with a length between [1-128].

### StringWithLengthBetween1And1600
* StringWithLengthBetween1And1600 `string`: A string with a length between [0-1600].

### StringWithLengthBetween1And256
* StringWithLengthBetween1And256 `string`: A string with a length between [1-256].

### StringWithLengthBetween1And512
* StringWithLengthBetween1And512 `string`: A string with a length between [1-512].

### StringWithLengthBetween1And64
* StringWithLengthBetween1And64 `string`: A string with a length between [1-64].

### SubnetIdList
* SubnetIdList `array`: A list of subnet IDs to include in the VPC link.
  * items [__string](#__string)

### TagResourceRequest
* TagResourceRequest `object`: Creates a new Tag resource to represent a tag.
  * Tags

### TagResourceResponse
* TagResourceResponse `object`

### Tags
* Tags `object`: Represents a collection of tags associated with the resource.

### TemplateMap
* TemplateMap `object`: A mapping of identifier keys to templates. The value is an actual template script. The key is typically a SelectionKey which is chosen based on evaluating a selection expression.

### TlsConfig
* TlsConfig `object`: The TLS configuration for a private integration. If you specify a TLS configuration, private integration traffic uses the HTTPS protocol. Supported only for HTTP APIs.
  * ServerNameToVerify

### TlsConfigInput
* TlsConfigInput `object`: The TLS configuration for a private integration. If you specify a TLS configuration, private integration traffic uses the HTTPS protocol. Supported only for HTTP APIs.
  * ServerNameToVerify

### TooManyRequestsException


### UntagResourceRequest
* UntagResourceRequest `object`

### UpdateApiMappingRequest
* UpdateApiMappingRequest `object`: Updates an ApiMapping.
  * ApiId **required**
  * ApiMappingKey
  * Stage

### UpdateApiMappingResponse
* UpdateApiMappingResponse `object`
  * ApiId
  * ApiMappingId
  * ApiMappingKey
  * Stage

### UpdateApiRequest
* UpdateApiRequest `object`: Updates an Api.
  * ApiKeySelectionExpression
  * CorsConfiguration
    * AllowCredentials
    * AllowHeaders
      * items [__string](#__string)
    * AllowMethods
      * items [StringWithLengthBetween1And64](#stringwithlengthbetween1and64)
    * AllowOrigins
      * items [__string](#__string)
    * ExposeHeaders
      * items [__string](#__string)
    * MaxAge
  * CredentialsArn
  * Description
  * DisableExecuteApiEndpoint
  * DisableSchemaValidation
  * Name
  * RouteKey
  * RouteSelectionExpression
  * Target
  * Version

### UpdateApiResponse
* UpdateApiResponse `object`
  * ApiEndpoint
  * ApiGatewayManaged
  * ApiId
  * ApiKeySelectionExpression
  * CorsConfiguration
    * AllowCredentials
    * AllowHeaders
      * items [__string](#__string)
    * AllowMethods
      * items [StringWithLengthBetween1And64](#stringwithlengthbetween1and64)
    * AllowOrigins
      * items [__string](#__string)
    * ExposeHeaders
      * items [__string](#__string)
    * MaxAge
  * CreatedDate
  * Description
  * DisableExecuteApiEndpoint
  * DisableSchemaValidation
  * ImportInfo
    * items [__string](#__string)
  * Name
  * ProtocolType
  * RouteSelectionExpression
  * Tags
  * Version
  * Warnings
    * items [__string](#__string)

### UpdateAuthorizerRequest
* UpdateAuthorizerRequest `object`: Updates an Authorizer.
  * AuthorizerCredentialsArn
  * AuthorizerPayloadFormatVersion
  * AuthorizerResultTtlInSeconds
  * AuthorizerType
  * AuthorizerUri
  * EnableSimpleResponses
  * IdentitySource
    * items [__string](#__string)
  * IdentityValidationExpression
  * JwtConfiguration
    * Audience
      * items [__string](#__string)
    * Issuer
  * Name

### UpdateAuthorizerResponse
* UpdateAuthorizerResponse `object`
  * AuthorizerCredentialsArn
  * AuthorizerId
  * AuthorizerPayloadFormatVersion
  * AuthorizerResultTtlInSeconds
  * AuthorizerType
  * AuthorizerUri
  * EnableSimpleResponses
  * IdentitySource
    * items [__string](#__string)
  * IdentityValidationExpression
  * JwtConfiguration
    * Audience
      * items [__string](#__string)
    * Issuer
  * Name

### UpdateDeploymentRequest
* UpdateDeploymentRequest `object`: Updates a Deployment.
  * Description

### UpdateDeploymentResponse
* UpdateDeploymentResponse `object`
  * AutoDeployed
  * CreatedDate
  * DeploymentId
  * DeploymentStatus
  * DeploymentStatusMessage
  * Description

### UpdateDomainNameRequest
* UpdateDomainNameRequest `object`: Updates a DomainName.
  * DomainNameConfigurations
    * items [DomainNameConfiguration](#domainnameconfiguration)
  * MutualTlsAuthentication
    * TruststoreUri
    * TruststoreVersion

### UpdateDomainNameResponse
* UpdateDomainNameResponse `object`
  * ApiMappingSelectionExpression
  * DomainName
  * DomainNameConfigurations
    * items [DomainNameConfiguration](#domainnameconfiguration)
  * MutualTlsAuthentication
    * TruststoreUri
    * TruststoreVersion
    * TruststoreWarnings
      * items [__string](#__string)
  * Tags

### UpdateIntegrationRequest
* UpdateIntegrationRequest `object`: Updates an Integration.
  * ConnectionId
  * ConnectionType
  * ContentHandlingStrategy
  * CredentialsArn
  * Description
  * IntegrationMethod
  * IntegrationSubtype
  * IntegrationType
  * IntegrationUri
  * PassthroughBehavior
  * PayloadFormatVersion
  * RequestParameters
  * RequestTemplates
  * TemplateSelectionExpression
  * TimeoutInMillis
  * TlsConfig
    * ServerNameToVerify

### UpdateIntegrationResponseRequest
* UpdateIntegrationResponseRequest `object`: Updates an IntegrationResponses.
  * ContentHandlingStrategy
  * IntegrationResponseKey
  * ResponseParameters
  * ResponseTemplates
  * TemplateSelectionExpression

### UpdateIntegrationResponseResponse
* UpdateIntegrationResponseResponse `object`
  * ContentHandlingStrategy
  * IntegrationResponseId
  * IntegrationResponseKey
  * ResponseParameters
  * ResponseTemplates
  * TemplateSelectionExpression

### UpdateIntegrationResult
* UpdateIntegrationResult `object`
  * ApiGatewayManaged
  * ConnectionId
  * ConnectionType
  * ContentHandlingStrategy
  * CredentialsArn
  * Description
  * IntegrationId
  * IntegrationMethod
  * IntegrationResponseSelectionExpression
  * IntegrationSubtype
  * IntegrationType
  * IntegrationUri
  * PassthroughBehavior
  * PayloadFormatVersion
  * RequestParameters
  * RequestTemplates
  * TemplateSelectionExpression
  * TimeoutInMillis
  * TlsConfig
    * ServerNameToVerify

### UpdateModelRequest
* UpdateModelRequest `object`: Updates a Model.
  * ContentType
  * Description
  * Name
  * Schema

### UpdateModelResponse
* UpdateModelResponse `object`
  * ContentType
  * Description
  * ModelId
  * Name
  * Schema

### UpdateRouteRequest
* UpdateRouteRequest `object`: Updates a Route.
  * ApiKeyRequired
  * AuthorizationScopes
    * items [StringWithLengthBetween1And64](#stringwithlengthbetween1and64)
  * AuthorizationType
  * AuthorizerId
  * ModelSelectionExpression
  * OperationName
  * RequestModels
  * RequestParameters
  * RouteKey
  * RouteResponseSelectionExpression
  * Target

### UpdateRouteResponseRequest
* UpdateRouteResponseRequest `object`: Updates a RouteResponse.
  * ModelSelectionExpression
  * ResponseModels
  * ResponseParameters
  * RouteResponseKey

### UpdateRouteResponseResponse
* UpdateRouteResponseResponse `object`
  * ModelSelectionExpression
  * ResponseModels
  * ResponseParameters
  * RouteResponseId
  * RouteResponseKey

### UpdateRouteResult
* UpdateRouteResult `object`
  * ApiGatewayManaged
  * ApiKeyRequired
  * AuthorizationScopes
    * items [StringWithLengthBetween1And64](#stringwithlengthbetween1and64)
  * AuthorizationType
  * AuthorizerId
  * ModelSelectionExpression
  * OperationName
  * RequestModels
  * RequestParameters
  * RouteId
  * RouteKey
  * RouteResponseSelectionExpression
  * Target

### UpdateStageRequest
* UpdateStageRequest `object`: Updates a Stage.
  * AccessLogSettings
    * DestinationArn
    * Format
  * AutoDeploy
  * ClientCertificateId
  * DefaultRouteSettings
    * DataTraceEnabled
    * DetailedMetricsEnabled
    * LoggingLevel
    * ThrottlingBurstLimit
    * ThrottlingRateLimit
  * DeploymentId
  * Description
  * RouteSettings
  * StageVariables

### UpdateStageResponse
* UpdateStageResponse `object`
  * AccessLogSettings
    * DestinationArn
    * Format
  * ApiGatewayManaged
  * AutoDeploy
  * ClientCertificateId
  * CreatedDate
  * DefaultRouteSettings
    * DataTraceEnabled
    * DetailedMetricsEnabled
    * LoggingLevel
    * ThrottlingBurstLimit
    * ThrottlingRateLimit
  * DeploymentId
  * Description
  * LastDeploymentStatusMessage
  * LastUpdatedDate
  * RouteSettings
  * StageName
  * StageVariables
  * Tags

### UpdateVpcLinkRequest
* UpdateVpcLinkRequest `object`: Updates a VPC link.
  * Name

### UpdateVpcLinkResponse
* UpdateVpcLinkResponse `object`
  * CreatedDate
  * Name
  * SecurityGroupIds
    * items [__string](#__string)
  * SubnetIds
    * items [__string](#__string)
  * Tags
  * VpcLinkId
  * VpcLinkStatus
  * VpcLinkStatusMessage
  * VpcLinkVersion

### UriWithLengthBetween1And2048
* UriWithLengthBetween1And2048 `string`: A string representation of a URI with a length between [1-2048].

### VpcLink
* VpcLink `object`: Represents a VPC link.
  * CreatedDate
  * Name **required**
  * SecurityGroupIds **required**
    * items [__string](#__string)
  * SubnetIds **required**
    * items [__string](#__string)
  * Tags
  * VpcLinkId **required**
  * VpcLinkStatus
  * VpcLinkStatusMessage
  * VpcLinkVersion

### VpcLinkStatus
* VpcLinkStatus `string` (values: PENDING, AVAILABLE, DELETING, FAILED, INACTIVE): The status of the VPC link.

### VpcLinkVersion
* VpcLinkVersion `string` (values: V2): The version of the VPC link.

### __boolean
* __boolean `boolean`

### __double
* __double `number`

### __integer
* __integer `integer`

### __listOfApi
* __listOfApi `array`
  * items [Api](#api)

### __listOfApiMapping
* __listOfApiMapping `array`
  * items [ApiMapping](#apimapping)

### __listOfAuthorizer
* __listOfAuthorizer `array`
  * items [Authorizer](#authorizer)

### __listOfDeployment
* __listOfDeployment `array`
  * items [Deployment](#deployment)

### __listOfDomainName
* __listOfDomainName `array`
  * items [DomainName](#domainname)

### __listOfIntegration
* __listOfIntegration `array`
  * items [Integration](#integration)

### __listOfIntegrationResponse
* __listOfIntegrationResponse `array`
  * items [IntegrationResponse](#integrationresponse)

### __listOfModel
* __listOfModel `array`
  * items [Model](#model)

### __listOfRoute
* __listOfRoute `array`
  * items [Route](#route)

### __listOfRouteResponse
* __listOfRouteResponse `array`
  * items [RouteResponse](#routeresponse)

### __listOfStage
* __listOfStage `array`
  * items [Stage](#stage)

### __listOfVpcLink
* __listOfVpcLink `array`
  * items [VpcLink](#vpclink)

### __listOf__string
* __listOf__string `array`
  * items [__string](#__string)

### __string
* __string `string`

### __timestampIso8601
* __timestampIso8601 `string`


