# @datafire/amazonaws_appintegrations

Client library for Amazon AppIntegrations Service

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_appintegrations
```
```js
let amazonaws_appintegrations = require('@datafire/amazonaws_appintegrations').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

.then(data => {
  console.log(data);
});
```

## Description

<p>The Amazon AppIntegrations APIs are in preview release and are subject to change.</p> <p>The Amazon AppIntegrations service enables you to configure and reuse connections to external applications.</p> <p>For information about how you can use external applications with Amazon Connect, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/crm.html">Set up pre-built integrations</a> in the <i>Amazon Connect Administrator Guide</i>.</p>

## Actions

### ListEventIntegrations



```js
amazonaws_appintegrations.ListEventIntegrations({}, context)
```

#### Input
* input `object`
  * nextToken `string`
  * maxResults `integer`

#### Output
* output [ListEventIntegrationsResponse](#listeventintegrationsresponse)

### CreateEventIntegration



```js
amazonaws_appintegrations.CreateEventIntegration({
  "Name": "",
  "EventFilter": {},
  "EventBridgeBus": ""
}, context)
```

#### Input
* input `object`
  * ClientToken `string`: A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
  * Description `string`: The description of the event integration.
  * EventBridgeBus **required** `string`: The Eventbridge bus.
  * EventFilter **required** `object`: <p>The Amazon AppIntegrations APIs are in preview release and are subject to change.</p> <p>The event filter.</p>
    * Source
  * Name **required** `string`: The name of the event integration.
  * Tags `object`: One or more tags.

#### Output
* output [CreateEventIntegrationResponse](#createeventintegrationresponse)

### DeleteEventIntegration



```js
amazonaws_appintegrations.DeleteEventIntegration({
  "Name": ""
}, context)
```

#### Input
* input `object`
  * Name **required** `string`

#### Output
* output [DeleteEventIntegrationResponse](#deleteeventintegrationresponse)

### GetEventIntegration



```js
amazonaws_appintegrations.GetEventIntegration({
  "Name": ""
}, context)
```

#### Input
* input `object`
  * Name **required** `string`

#### Output
* output [GetEventIntegrationResponse](#geteventintegrationresponse)

### UpdateEventIntegration



```js
amazonaws_appintegrations.UpdateEventIntegration({
  "Name": ""
}, context)
```

#### Input
* input `object`
  * Name **required** `string`
  * Description `string`: The description of the event inegration.

#### Output
* output [UpdateEventIntegrationResponse](#updateeventintegrationresponse)

### ListEventIntegrationAssociations



```js
amazonaws_appintegrations.ListEventIntegrationAssociations({
  "Name": ""
}, context)
```

#### Input
* input `object`
  * Name **required** `string`
  * nextToken `string`
  * maxResults `integer`

#### Output
* output [ListEventIntegrationAssociationsResponse](#listeventintegrationassociationsresponse)

### ListTagsForResource



```js
amazonaws_appintegrations.ListTagsForResource({
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
amazonaws_appintegrations.TagResource({
  "resourceArn": "",
  "tags": {}
}, context)
```

#### Input
* input `object`
  * resourceArn **required** `string`
  * tags **required** `object`: One or more tags. 

#### Output
* output [TagResourceResponse](#tagresourceresponse)

### UntagResource



```js
amazonaws_appintegrations.UntagResource({
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


### Arn
* Arn `string`

### ClientAssociationMetadata
* ClientAssociationMetadata `object`

### ClientId
* ClientId `string`

### CreateEventIntegrationRequest
* CreateEventIntegrationRequest `object`
  * ClientToken
  * Description
  * EventBridgeBus **required**
  * EventFilter **required**
    * Source **required**
  * Name **required**
  * Tags

### CreateEventIntegrationResponse
* CreateEventIntegrationResponse `object`
  * EventIntegrationArn

### DeleteEventIntegrationRequest
* DeleteEventIntegrationRequest `object`

### DeleteEventIntegrationResponse
* DeleteEventIntegrationResponse `object`

### Description
* Description `string`

### DuplicateResourceException


### EventBridgeBus
* EventBridgeBus `string`

### EventBridgeRuleName
* EventBridgeRuleName `string`

### EventFilter
* EventFilter `object`: <p>The Amazon AppIntegrations APIs are in preview release and are subject to change.</p> <p>The event filter.</p>
  * Source **required**

### EventIntegration
* EventIntegration `object`: <p>The Amazon AppIntegrations APIs are in preview release and are subject to change.</p> <p>The event integration.</p>
  * Description
  * EventBridgeBus
  * EventFilter
    * Source **required**
  * EventIntegrationArn
  * Name
  * Tags

### EventIntegrationAssociation
* EventIntegrationAssociation `object`: <p>The Amazon AppIntegrations APIs are in preview release and are subject to change.</p> <p>The event integration association.</p>
  * ClientAssociationMetadata
  * ClientId
  * EventBridgeRuleName
  * EventIntegrationAssociationArn
  * EventIntegrationAssociationId
  * EventIntegrationName

### EventIntegrationAssociationsList
* EventIntegrationAssociationsList `array`
  * items [EventIntegrationAssociation](#eventintegrationassociation)

### EventIntegrationsList
* EventIntegrationsList `array`
  * items [EventIntegration](#eventintegration)

### GetEventIntegrationRequest
* GetEventIntegrationRequest `object`

### GetEventIntegrationResponse
* GetEventIntegrationResponse `object`
  * Description
  * EventBridgeBus
  * EventFilter
    * Source **required**
  * EventIntegrationArn
  * Name
  * Tags

### IdempotencyToken
* IdempotencyToken `string`

### InternalServiceError


### InvalidRequestException


### ListEventIntegrationAssociationsRequest
* ListEventIntegrationAssociationsRequest `object`

### ListEventIntegrationAssociationsResponse
* ListEventIntegrationAssociationsResponse `object`
  * EventIntegrationAssociations
    * items [EventIntegrationAssociation](#eventintegrationassociation)
  * NextToken

### ListEventIntegrationsRequest
* ListEventIntegrationsRequest `object`

### ListEventIntegrationsResponse
* ListEventIntegrationsResponse `object`
  * EventIntegrations
    * items [EventIntegration](#eventintegration)
  * NextToken

### ListTagsForResourceRequest
* ListTagsForResourceRequest `object`

### ListTagsForResourceResponse
* ListTagsForResourceResponse `object`
  * tags

### MaxResults
* MaxResults `integer`

### Name
* Name `string`

### NextToken
* NextToken `string`

### NonBlankString
* NonBlankString `string`

### ResourceNotFoundException


### ResourceQuotaExceededException


### Source
* Source `string`

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

### ThrottlingException


### UUID
* UUID `string`

### UntagResourceRequest
* UntagResourceRequest `object`

### UntagResourceResponse
* UntagResourceResponse `object`

### UpdateEventIntegrationRequest
* UpdateEventIntegrationRequest `object`
  * Description

### UpdateEventIntegrationResponse
* UpdateEventIntegrationResponse `object`


