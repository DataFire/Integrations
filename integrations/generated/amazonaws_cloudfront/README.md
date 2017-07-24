# @datafire/amazonaws_cloudfront

Client library for Amazon CloudFront

## Installation and Usage
```bash
npm install --save datafire @datafire/amazonaws_cloudfront
```

```js
let datafire = require('datafire');
let amazonaws_cloudfront = require('@datafire/amazonaws_cloudfront').actions;
let context = new datafire.Context();

amazonaws_cloudfront.ListDistributions({}, context).then(data => {
  console.log(data);
})
```

## Description
<fullname>Amazon CloudFront</fullname> <p>This is the <i>Amazon CloudFront API Reference</i>. This guide is for developers who need detailed information about the CloudFront API actions, data types, and errors. For detailed information about CloudFront features and their associated API calls, see the <i>Amazon CloudFront Developer Guide</i>.</p>

## Actions
### ListDistributions



```js
amazonaws_cloudfront.ListDistributions({}, context)
```

#### Parameters
* MaxItems (string)
* Marker (string)

### ListInvalidations



```js
amazonaws_cloudfront.ListInvalidations({
  "DistributionId": ""
}, context)
```

#### Parameters
* MaxItems (string)
* Marker (string)
* DistributionId (string) **required**

### GetInvalidation



```js
amazonaws_cloudfront.GetInvalidation({
  "DistributionId": "",
  "Id": ""
}, context)
```

#### Parameters
* DistributionId (string) **required**
* Id (string) **required**

### GetDistribution



```js
amazonaws_cloudfront.GetDistribution({
  "Id": ""
}, context)
```

#### Parameters
* Id (string) **required**

### UpdateDistribution



```js
amazonaws_cloudfront.UpdateDistribution({
  "Id": ""
}, context)
```

#### Parameters
* Id (string) **required**

### CreateDistributionWithTags



```js
amazonaws_cloudfront.CreateDistributionWithTags({}, context)
```


### ListDistributionsByWebACLId



```js
amazonaws_cloudfront.ListDistributionsByWebACLId({
  "WebACLId": ""
}, context)
```

#### Parameters
* WebACLId (string) **required**

### ListCloudFrontOriginAccessIdentities



```js
amazonaws_cloudfront.ListCloudFrontOriginAccessIdentities({}, context)
```

#### Parameters
* MaxItems (string)
* Marker (string)

### GetCloudFrontOriginAccessIdentity



```js
amazonaws_cloudfront.GetCloudFrontOriginAccessIdentity({
  "Id": ""
}, context)
```

#### Parameters
* Id (string) **required**

### UpdateCloudFrontOriginAccessIdentity



```js
amazonaws_cloudfront.UpdateCloudFrontOriginAccessIdentity({
  "Id": ""
}, context)
```

#### Parameters
* Id (string) **required**

### ListStreamingDistributions



```js
amazonaws_cloudfront.ListStreamingDistributions({}, context)
```

#### Parameters
* MaxItems (string)
* Marker (string)

### GetStreamingDistribution



```js
amazonaws_cloudfront.GetStreamingDistribution({
  "Id": ""
}, context)
```

#### Parameters
* Id (string) **required**

### UpdateStreamingDistribution



```js
amazonaws_cloudfront.UpdateStreamingDistribution({
  "Id": ""
}, context)
```

#### Parameters
* Id (string) **required**

### CreateStreamingDistributionWithTags



```js
amazonaws_cloudfront.CreateStreamingDistributionWithTags({}, context)
```


### ListTagsForResource



```js
amazonaws_cloudfront.ListTagsForResource({}, context)
```


### TagResource



```js
amazonaws_cloudfront.TagResource({}, context)
```


### UntagResource



```js
amazonaws_cloudfront.UntagResource({}, context)
```


