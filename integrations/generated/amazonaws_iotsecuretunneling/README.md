# @datafire/amazonaws_iotsecuretunneling

Client library for AWS IoT Secure Tunneling

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_iotsecuretunneling
```
```js
let amazonaws_iotsecuretunneling = require('@datafire/amazonaws_iotsecuretunneling').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

.then(data => {
  console.log(data);
});
```

## Description

<fullname>AWS IoT Secure Tunneling</fullname> <p>AWS IoT Secure Tunnling enables you to create remote connections to devices deployed in the field.</p> <p>For more information about how AWS IoT Secure Tunneling works, see <a href="https://docs.aws.amazon.com/iot/latest/developerguide/secure-tunneling.html">AWS IoT Secure Tunneling</a>.</p>

## Actions

### CloseTunnel



```js
amazonaws_iotsecuretunneling.CloseTunnel({
  "tunnelId": null
}, context)
```

#### Input
* input `object`
  * delete
  * tunnelId **required**

#### Output
* output [CloseTunnelResponse](#closetunnelresponse)

### DescribeTunnel



```js
amazonaws_iotsecuretunneling.DescribeTunnel({
  "tunnelId": null
}, context)
```

#### Input
* input `object`
  * tunnelId **required**

#### Output
* output [DescribeTunnelResponse](#describetunnelresponse)

### ListTagsForResource



```js
amazonaws_iotsecuretunneling.ListTagsForResource({
  "resourceArn": null
}, context)
```

#### Input
* input `object`
  * resourceArn **required**

#### Output
* output [ListTagsForResourceResponse](#listtagsforresourceresponse)

### ListTunnels



```js
amazonaws_iotsecuretunneling.ListTunnels({}, context)
```

#### Input
* input `object`
  * maxResults `string`
  * nextToken `string`
  * maxResults
  * nextToken
  * thingName

#### Output
* output [ListTunnelsResponse](#listtunnelsresponse)

### OpenTunnel



```js
amazonaws_iotsecuretunneling.OpenTunnel({}, context)
```

#### Input
* input `object`
  * tags
    * items [Tag](#tag)
  * description
  * destinationConfig
    * services **required**
      * items [Service](#service)
    * thingName
  * timeoutConfig
    * maxLifetimeTimeoutMinutes

#### Output
* output [OpenTunnelResponse](#opentunnelresponse)

### TagResource



```js
amazonaws_iotsecuretunneling.TagResource({
  "resourceArn": null,
  "tags": null
}, context)
```

#### Input
* input `object`
  * tags **required**
    * items [Tag](#tag)
  * resourceArn **required**

#### Output
* output [TagResourceResponse](#tagresourceresponse)

### UntagResource



```js
amazonaws_iotsecuretunneling.UntagResource({
  "resourceArn": null,
  "tagKeys": null
}, context)
```

#### Input
* input `object`
  * resourceArn **required**
  * tagKeys **required**
    * items [TagKey](#tagkey)

#### Output
* output [UntagResourceResponse](#untagresourceresponse)



## Definitions

### AmazonResourceName
* AmazonResourceName `string`

### ClientAccessToken
* ClientAccessToken `string`

### CloseTunnelRequest
* CloseTunnelRequest `object`
  * delete
  * tunnelId **required**

### CloseTunnelResponse
* CloseTunnelResponse `object`

### ConnectionState
* ConnectionState `object`: The state of a connection.
  * lastUpdatedAt
  * status

### ConnectionStatus
* ConnectionStatus `string` (values: CONNECTED, DISCONNECTED)

### DateType
* DateType `string`

### DeleteFlag
* DeleteFlag `boolean`

### DescribeTunnelRequest
* DescribeTunnelRequest `object`
  * tunnelId **required**

### DescribeTunnelResponse
* DescribeTunnelResponse `object`
  * tunnel
    * tags
      * items [Tag](#tag)
    * createdAt
    * description
    * destinationConfig
      * services **required**
        * items [Service](#service)
      * thingName
    * destinationConnectionState
      * lastUpdatedAt
      * status
    * lastUpdatedAt
    * sourceConnectionState
      * lastUpdatedAt
      * status
    * status
    * timeoutConfig
      * maxLifetimeTimeoutMinutes
    * tunnelArn
    * tunnelId

### Description
* Description `string`

### DestinationConfig
* DestinationConfig `object`: The destination configuration.
  * services **required**
    * items [Service](#service)
  * thingName

### LimitExceededException


### ListTagsForResourceRequest
* ListTagsForResourceRequest `object`
  * resourceArn **required**

### ListTagsForResourceResponse
* ListTagsForResourceResponse `object`
  * tags
    * items [Tag](#tag)

### ListTunnelsRequest
* ListTunnelsRequest `object`
  * maxResults
  * nextToken
  * thingName

### ListTunnelsResponse
* ListTunnelsResponse `object`
  * nextToken
  * tunnelSummaries
    * items [TunnelSummary](#tunnelsummary)

### MaxResults
* MaxResults `integer`

### NextToken
* NextToken `string`

### OpenTunnelRequest
* OpenTunnelRequest `object`
  * tags
    * items [Tag](#tag)
  * description
  * destinationConfig
    * services **required**
      * items [Service](#service)
    * thingName
  * timeoutConfig
    * maxLifetimeTimeoutMinutes

### OpenTunnelResponse
* OpenTunnelResponse `object`
  * destinationAccessToken
  * sourceAccessToken
  * tunnelArn
  * tunnelId

### ResourceNotFoundException


### Service
* Service `string`

### ServiceList
* ServiceList `array`
  * items [Service](#service)

### Tag
* Tag `object`: An arbitary key/value pair used to add searchable metadata to secure tunnel resources.
  * key **required**
  * value **required**

### TagKey
* TagKey `string`

### TagKeyList
* TagKeyList `array`
  * items [TagKey](#tagkey)

### TagList
* TagList `array`
  * items [Tag](#tag)

### TagResourceRequest
* TagResourceRequest `object`
  * tags **required**
    * items [Tag](#tag)
  * resourceArn **required**

### TagResourceResponse
* TagResourceResponse `object`

### TagValue
* TagValue `string`

### ThingName
* ThingName `string`

### TimeoutConfig
* TimeoutConfig `object`: Tunnel timeout configuration.
  * maxLifetimeTimeoutMinutes

### TimeoutInMin
* TimeoutInMin `integer`

### Tunnel
* Tunnel `object`: A connection between a source computer and a destination device.
  * tags
    * items [Tag](#tag)
  * createdAt
  * description
  * destinationConfig
    * services **required**
      * items [Service](#service)
    * thingName
  * destinationConnectionState
    * lastUpdatedAt
    * status
  * lastUpdatedAt
  * sourceConnectionState
    * lastUpdatedAt
    * status
  * status
  * timeoutConfig
    * maxLifetimeTimeoutMinutes
  * tunnelArn
  * tunnelId

### TunnelArn
* TunnelArn `string`

### TunnelId
* TunnelId `string`

### TunnelStatus
* TunnelStatus `string` (values: OPEN, CLOSED)

### TunnelSummary
* TunnelSummary `object`: Information about the tunnel.
  * createdAt
  * description
  * lastUpdatedAt
  * status
  * tunnelArn
  * tunnelId

### TunnelSummaryList
* TunnelSummaryList `array`
  * items [TunnelSummary](#tunnelsummary)

### UntagResourceRequest
* UntagResourceRequest `object`
  * resourceArn **required**
  * tagKeys **required**
    * items [TagKey](#tagkey)

### UntagResourceResponse
* UntagResourceResponse `object`


