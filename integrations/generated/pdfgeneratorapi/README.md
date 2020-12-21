# @datafire/pdfgeneratorapi

Client library for PDF Generator API

## Installation and Usage
```bash
npm install --save @datafire/pdfgeneratorapi
```
```js
let pdfgeneratorapi = require('@datafire/pdfgeneratorapi').create({
  JSONWebTokenAuth: ""
});

.then(data => {
  console.log(data);
});
```

## Description

# Introduction
PDF Generator API allows you easily generate transactional PDF documents and reduce the development and support costs by enabling your users to create and manage their document templates using a browser-based drag-and-drop document editor.

The PDF Generator API features a web API architecture, allowing you to code in the language of your choice. This API supports the JSON media type, and uses UTF-8 character encoding.

You can find our previous API documentation page with references to Simple and Signature authentication [here](https://docs.pdfgeneratorapi.com/legacy).

## Base URL
The base URL for all the API endpoints is `https://us1.pdfgeneratorapi.com/api/v3`

For example
* `https://us1.pdfgeneratorapi.com/api/v3/templates`
* `https://us1.pdfgeneratorapi.com/api/v3/workspaces`
* `https://us1.pdfgeneratorapi.com/api/v3/templates/123123`

## Editor
PDF Generator API comes with a powerful drag & drop editor that allows to create any kind of document templates, from barcode labels to invoices, quotes and reports. You can find tutorials and videos from our [Support Portal](https://support.pdfgeneratorapi.com).
* [Component specification](https://support.pdfgeneratorapi.com/en/category/components-1ffseaj/)
* [Expression Language documentation](https://support.pdfgeneratorapi.com/en/category/expression-language-q203pa/)
* [Frequently asked questions and answers](https://support.pdfgeneratorapi.com/en/category/qanda-1ov519d/)

## Definitions

### Organization
Organization is a group of workspaces owned by your account.

### Workspace
Workspace contains templates. Each workspace has access to their own templates and organization default templates.

### Master Workspace
Master Workspace is the main/default workspace of your Organization. The Master Workspace identifier is the email you signed up with.

### Default Template
Default template is a template that is available for all workspaces by default. You can set the template access type under Page Setup. If template has "Organization" access then your users can use them from the "New" menu in the Editor.

### Data Field
Data Field is a placeholder for the specific data in your JSON data set. In this example JSON you can access the buyer name using Data Field `{paymentDetails::buyerName}`. The separator between depth levels is :: (two colons). When designing the template you don’t have to know every Data Field, our editor automatically extracts all the available fields from your data set and provides an easy way to insert them into the template.
```
{
    "documentNumber": 1,
    "paymentDetails": {
        "method": "Credit Card",
        "buyerName": "John Smith"
    },
    "items": [
        {
            "id": 1,
            "name": "Item one"
        }
    ]
}
```

*  *  *  *  *
# Authentication
The PDF Generator API uses __JSON Web Tokens (JWT)__ to authenticate all API requests. These tokens offer a method to establish secure server-to-server authentication by transferring a compact JSON object with a signed payload of your account’s API Key and Secret.
When authenticating to the PDF Generator API, a JWT should be generated uniquely by a __server-side application__ and included as a __Bearer Token__ in the header of each request.

## Legacy Simple and Signature authentication
You can find our legacy documentation for Simple and Signature authentication [here](https://docs.pdfgeneratorapi.com/legacy).

<SecurityDefinitions />

## Accessing your API Key and Secret
You can find your __API Key__ and __API Secret__ from the __Account Settings__ page after you login to PDF Generator API [here](https://pdfgeneratorapi.com/login).

## Creating a JWT
JSON Web Tokens are composed of three sections: a header, a payload (containing a claim set), and a signature. The header and payload are JSON objects, which are serialized to UTF-8 bytes, then encoded using base64url encoding.

The JWT's header, payload, and signature are concatenated with periods (.). As a result, a JWT typically takes the following form:
```
{Base64url encoded header}.{Base64url encoded payload}.{Base64url encoded signature}
```

We recommend and support libraries provided on [jwt.io](https://jwt.io/). While other libraries can create JWT, these recommended libraries are the most robust.

### Header
Property `alg` defines which signing algorithm is being used. PDF Generator API users HS256.
Property `typ` defines the type of token and it is always JWT.
```
{
  "alg": "HS256",
  "typ": "JWT"
}
```

### Payload
The second part of the token is the payload, which contains the claims  or the pieces of information being passed about the user and any metadata required.
It is mandatory to specify the following claims:
* issuer (`iss`): Your API key
* subject (`sub`): Workspace identifier
* expiration time (`exp`): Timestamp (unix epoch time) until the token is valid. It is highly recommended to set the exp timestamp for a short period, i.e. a matter of seconds. This way, if a token is intercepted or shared, the token will only be valid for a short period of time.

```
{
  "iss": "ad54aaff89ffdfeff178bb8a8f359b29fcb20edb56250b9f584aa2cb0162ed4a",
  "sub": "demo.example@actualreports.com",
  "exp": 1586112639
}
```

### Signature
To create the signature part you have to take the encoded header, the encoded payload, a secret, the algorithm specified in the header, and sign that. The signature is used to verify the message wasn't changed along the way, and, in the case of tokens signed with a private key, it can also verify that the sender of the JWT is who it says it is.
```
HMACSHA256(
    base64UrlEncode(header) + "." +
    base64UrlEncode(payload),
    API_SECRET)
```

### Putting all together
The output is three Base64-URL strings separated by dots. The following shows a JWT that has the previous header and payload encoded, and it is signed with a secret.
```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJhZDU0YWFmZjg5ZmZkZmVmZjE3OGJiOGE4ZjM1OWIyOWZjYjIwZWRiNTYyNTBiOWY1ODRhYTJjYjAxNjJlZDRhIiwic3ViIjoiZGVtby5leGFtcGxlQGFjdHVhbHJlcG9ydHMuY29tIn0.SxO-H7UYYYsclS8RGWO1qf0z1cB1m73wF9FLl9RCc1Q

// Base64 encoded header: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
// Base64 encoded payload: eyJpc3MiOiJhZDU0YWFmZjg5ZmZkZmVmZjE3OGJiOGE4ZjM1OWIyOWZjYjIwZWRiNTYyNTBiOWY1ODRhYTJjYjAxNjJlZDRhIiwic3ViIjoiZGVtby5leGFtcGxlQGFjdHVhbHJlcG9ydHMuY29tIn0
// Signature: SxO-H7UYYYsclS8RGWO1qf0z1cB1m73wF9FLl9RCc1Q
```

## Testing with JWTs
You can create a temporary token in [Account Settings](https://pdfgeneratorapi.com/account/organization) page after you login to PDF Generator API. The generated token uses your email address as the subject (`sub`) value and is valid for __5 minutes__.
You can also use [jwt.io](https://jwt.io/) to generate test tokens for your API calls. These test tokens should never be used in production applications.
*  *  *  *  *

# Libraries and SDKs
## Postman Collection
We have created a [Postman](https://www.postman.com) Collection so you can easily test all the API endpoints wihtout developing and code. You can download the collection [here](https://app.getpostman.com/run-collection/329f09618ec8a957dbc4) or just click the button below.

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/329f09618ec8a957dbc4)

## Client Libraries
All our Client Libraries are auto-generated using [OpenAPI Generator](https://openapi-generator.tech/) which uses the OpenAPI v3 specification to automatically generate a client library in specific programming language.

* [PHP Client](https://github.com/pdfgeneratorapi/php-client)
* [Java Client](https://github.com/pdfgeneratorapi/java-client)
* [Ruby Client](https://github.com/pdfgeneratorapi/ruby-client)
* [Python Client](https://github.com/pdfgeneratorapi/python-client)
* [Javascript Client](https://github.com/pdfgeneratorapi/javascript-client)

We have validated the generated libraries, but let us know if you find any anomalies in the client code.
*  *  *  *  *


## Actions

### getTemplates
Returns a list of templates available for the authenticated workspace


```js
pdfgeneratorapi.getTemplates(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * response `array`
    * items [Template](#template)

### createTemplate
Creates a new template. If template configuration is not specified in the request body then an empty template is created. Template is placed to the workspace specified in authentication params. Template configuration must be sent in the request body.


```js
pdfgeneratorapi.createTemplate({
  "body": {
    "name": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** [TemplateDefinitionNew](#templatedefinitionnew)

#### Output
* output `object`
  * response [TemplateDefinition](#templatedefinition)

### mergeTemplates
Allows to merge multiples template with data and returns base64 encoded document or public url to a document.


```js
pdfgeneratorapi.mergeTemplates({
  "body": []
}, context)
```

#### Input
* input `object`
  * name `string`: Document name, returned in the meta data.
  * format `string` (values: pdf, html, zip, xlsx): Document format. The zip option will return a ZIP file with PDF files.
  * output `string` (values: base64, url, I): Response format.
  * body **required** [BatchData](#batchdata)

#### Output
* output `object`
  * meta `object`
    * content-type `string`: Document content type.
    * display_name `string`: Document name without the file extension.
    * encoding `string`: Document encoding
    * name `string`: Document name. This value is automatically generated if name attribute is not defined in request.
  * response `string`: Base64 encoded document if the output=base64 is used or URL to the document when the output=url is used.

### deleteTemplate
Deletes the template from workspace


```js
pdfgeneratorapi.deleteTemplate({
  "templateId": 0
}, context)
```

#### Input
* input `object`
  * templateId **required** `integer`: Template unique identifier

#### Output
* output `object`
  * response `object`
    * success `boolean`

### getTemplate
Returns template configuration


```js
pdfgeneratorapi.getTemplate({
  "templateId": 0
}, context)
```

#### Input
* input `object`
  * templateId **required** `integer`: Template unique identifier

#### Output
* output `object`
  * response [TemplateDefinition](#templatedefinition)

### updateTemplate
Updates template configuration. The template configuration for pages and layout must be complete as the entire configuration is replaced and not merged.


```js
pdfgeneratorapi.updateTemplate({
  "templateId": 0,
  "body": {
    "name": ""
  }
}, context)
```

#### Input
* input `object`
  * templateId **required** `integer`: Template unique identifier
  * body **required** [TemplateDefinitionNew](#templatedefinitionnew)

#### Output
* output `object`
  * response [TemplateDefinition](#templatedefinition)

### copyTemplate
Creates a copy of a template to the workspace specified in authentication parameters.


```js
pdfgeneratorapi.copyTemplate({
  "templateId": 0
}, context)
```

#### Input
* input `object`
  * templateId **required** `integer`: Template unique identifier
  * name `string`: Name for the copied template. If name is not specified then the original name is used.

#### Output
* output `object`
  * response [TemplateDefinition](#templatedefinition)

### getEditorUrl
Returns an unique URL which you can use to redirect your user to the editor form your application or use the generated URL as iframe source to show the editor within your application.



```js
pdfgeneratorapi.getEditorUrl({
  "templateId": 0,
  "body": {}
}, context)
```

#### Input
* input `object`
  * templateId **required** `integer`: Template unique identifier
  * language `string` (values: en, et, cs, sk, ru): Specify the editor UI language. Defaults to organization editor language.
  * body **required** `object`

#### Output
* output `object`
  * response `string`

### mergeTemplate
Merges template with data and returns base64 encoded document or a public URL to a document. You can send json encoded data in request body or a public URL to your json file as the data parameter.


```js
pdfgeneratorapi.mergeTemplate({
  "templateId": 0,
  "body": {}
}, context)
```

#### Input
* input `object`
  * templateId **required** `integer`: Template unique identifier
  * name `string`: Document name, returned in the meta data.
  * format `string` (values: pdf, html, zip, xlsx): Document format. The zip option will return a ZIP file with PDF files.
  * output `string` (values: base64, url, I): Response format.
  * body **required** [Data](#data)

#### Output
* output `object`
  * meta `object`
    * content-type `string`: Document content type.
    * display_name `string`: Document name without the file extension.
    * encoding `string`: Document encoding
    * name `string`: Document name. This value is automatically generated if name attribute is not defined in request.
  * response `string`: Base64 encoded document if the output=base64 is used or URL to the document when the output=url is used.

### deleteWorkspace
Deletes the workspace


```js
pdfgeneratorapi.deleteWorkspace({
  "workspaceId": ""
}, context)
```

#### Input
* input `object`
  * workspaceId **required** `string`: Workspace identifier

#### Output
* output `object`
  * response `object`
    * success `boolean`

### getWorkspace
Returns workspace information


```js
pdfgeneratorapi.getWorkspace({
  "workspaceId": ""
}, context)
```

#### Input
* input `object`
  * workspaceId **required** `string`: Workspace identifier

#### Output
* output `object`
  * response [Workspace](#workspace)



## Definitions

### BatchData
* BatchData `array`
  * items `object`
    * data [Data](#data)
    * template `integer`: Template id

### Component
* Component `object`: Template component definition
  * cls `string` (values: labelComponent, numberComponent, textComponent, imageComponent, dateComponent, hlineComponent, vlineComponent, tableComponent, compositeComponent, barcodeComponent, qrcodeComponent, chartComponent, rectangleComponent, headerComponent, footerComponent, checkboxComponent, radioComponent): Defines component class/type
  * dataIndex `string`: Defines data field for Table and Container components which are used to iterate over list of items
  * height `number`: Height in units
  * id `string`: Component id
  * left `number`: Position from the page left in units
  * top `number`: Position from the page top in units
  * value `string`: Component value
  * width `number`: Width in units
  * zindex `integer`: Defines the rendering order on page. Components with smaller zindex are rendered before

### Data
* Data `object`
  * id `integer`
  * name `string`

### Template
* Template `object`: Template object
  * tags `array`: A list of tags assigned to a template
    * items `string`
  * id `integer`: Unique identifier
  * modified `string`: Timestamp when the template was modified
  * name `string`: Template name
  * owner `boolean`: Indicates if the workspace is the owner of the template

### TemplateDefinition
* TemplateDefinition `object`
  * tags `array`: A list of tags assigned to a template
    * items `string`
  * dataSettings `object`: Defines filter and sort option for root data set.
    * filterBy `array`
      * items `object`
    * sortBy `array`
      * items `object`
  * editor `object`: Configuration preferences for the editor
    * heightMultiplier `number`
  * id `integer`: Unique identifier
  * isDraft `boolean`: Indicates if the template is a draft or published.
  * layout `object`: Defines template layout (e.g page format, margins).
    * emptyLabels `integer`: Defines how many pages or labels should be empty
    * format `string` (values: A4, letter, custom): Defines template page size
    * height `number`: Page height in units
    * margins `object`: Page margins in units
      * bottom `number`
      * left `number`
      * right `number`
      * top `number`
    * orientation `string` (values: portrait, landscape): Page orientation
    * repeatLayout `object`: Defines page size if layout is repeated on the page e.g sheet labels
      * format `string` (values: A4, letter, custom): Defines template page size
      * height `number`: Page height in units
      * width `number`: Page width in units
    * rotation `integer` (values: 0, 90, 180, 270): Page rotation in degrees
    * unit `string` (values: cm, in): Measure unit
    * width `number`: Page width in units
  * name `string`: Template name
  * pages `array`: Defines page or label size, margins and components on page or label
    * items `object`
      * components `array`
        * items [Component](#component)
      * height `number`: Page height in units
      * margins `object`
        * bottom `number`: Page or label margin from bottom
        * right `number`: Page or label margin from right
      * width `number`: Page width in units

### TemplateDefinitionNew
* TemplateDefinitionNew `object`: Template configuration
  * tags `array`: A list of tags assigned to a template
    * items `string`
  * isDraft `boolean`: Indicates if the template is a draft or published.
  * layout `object`: Defines template layout (e.g page format, margins).
    * emptyLabels `integer`: Defines how many pages or labels should be empty
    * format `string` (values: A4, letter, custom): Defines template page size
    * height `number`: Page height in units
    * margins `object`: Page margins in units
      * bottom `number`
      * left `number`
      * right `number`
      * top `number`
    * orientation `string` (values: portrait, landscape): Page orientation
    * repeatLayout `object`: Defines page size if layout is repeated on the page e.g sheet labels
      * format `string` (values: A4, letter, custom): Defines template page size
      * height `number`: Page height in units
      * width `number`: Page width in units
    * rotaion `integer` (values: 0, 90, 180, 270): Page rotation in degrees
    * unit `string` (values: cm, in): Measure unit
    * width `number`: Page width in units
  * name **required** `string`: Template name
  * pages `array`: Defines page or label size, margins and components on page or label
    * items `object`
      * components `array`
        * items [Component](#component)
      * height `number`: Page height in units
      * margins `object`
        * bottom `number`: Page or label margin from bottom
        * right `number`: Page or label margin from right
      * width `number`: Page width in units

### Workspace
* Workspace `object`
  * created_at `string`
  * id `integer`: Internal workspace id
  * identifier `string`: The unique workspace idenfitifer specified by your application
  * is_master_workspace `boolean`: True if a master workspace


