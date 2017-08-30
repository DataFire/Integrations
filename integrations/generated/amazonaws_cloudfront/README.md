# @datafire/amazonaws_cloudfront

Client library for Amazon CloudFront

## Installation and Usage
```bash
npm install --save datafire @datafire/amazonaws_cloudfront
```

```js
let datafire = require('datafire');
let amazonaws_cloudfront = require('@datafire/amazonaws_cloudfront').create();

amazonaws_cloudfront.ListDistributions({}).then(data => {
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
  "Id": "",
  "DistributionConfig": {
    "CallerReference": "",
    "Origins": {
      "Quantity": 0
    },
    "DefaultCacheBehavior": {
      "TargetOriginId": "",
      "ForwardedValues": {
        "QueryString": true,
        "Cookies": {
          "Forward": ""
        }
      },
      "TrustedSigners": {
        "Enabled": true,
        "Quantity": 0
      },
      "ViewerProtocolPolicy": "",
      "MinTTL": 0
    },
    "Comment": "",
    "Enabled": true
  }
}, context)
```

#### Parameters
* Id (string) **required**
* DistributionConfig (object) **required** - A distribution configuration.

### CreateDistributionWithTags



```js
amazonaws_cloudfront.CreateDistributionWithTags({
  "DistributionConfigWithTags": {
    "DistributionConfig": {
      "CallerReference": "",
      "Origins": {
        "Quantity": 0
      },
      "DefaultCacheBehavior": {
        "TargetOriginId": "",
        "ForwardedValues": {
          "QueryString": true,
          "Cookies": {
            "Forward": ""
          }
        },
        "TrustedSigners": {
          "Enabled": true,
          "Quantity": 0
        },
        "ViewerProtocolPolicy": "",
        "MinTTL": 0
      },
      "Comment": "",
      "Enabled": true
    },
    "Tags": {}
  }
}, context)
```

#### Parameters
* DistributionConfigWithTags (object) **required** - A distribution Configuration and a list of tags to be associated with the distribution.

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
  "Id": "",
  "CloudFrontOriginAccessIdentityConfig": {
    "CallerReference": "",
    "Comment": ""
  }
}, context)
```

#### Parameters
* Id (string) **required**
* CloudFrontOriginAccessIdentityConfig (object) **required** - Origin access identity configuration. Send a <code>GET</code> request to the <code>/<i>CloudFront API version</i>/CloudFront/identity ID/config</code> resource. 

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
  "Id": "",
  "StreamingDistributionConfig": {
    "CallerReference": "",
    "S3Origin": {
      "DomainName": "",
      "OriginAccessIdentity": ""
    },
    "Comment": "",
    "TrustedSigners": {
      "Enabled": true,
      "Quantity": 0
    },
    "Enabled": true
  }
}, context)
```

#### Parameters
* Id (string) **required**
* StreamingDistributionConfig (object) **required** - The RTMP distribution's configuration information.

### CreateStreamingDistributionWithTags



```js
amazonaws_cloudfront.CreateStreamingDistributionWithTags({
  "StreamingDistributionConfigWithTags": {
    "StreamingDistributionConfig": {
      "CallerReference": "",
      "S3Origin": {
        "DomainName": "",
        "OriginAccessIdentity": ""
      },
      "Comment": "",
      "TrustedSigners": {
        "Enabled": true,
        "Quantity": 0
      },
      "Enabled": true
    },
    "Tags": {}
  }
}, context)
```

#### Parameters
* StreamingDistributionConfigWithTags (object) **required** - A streaming distribution Configuration and a list of tags to be associated with the streaming distribution.

### ListTagsForResource



```js
amazonaws_cloudfront.ListTagsForResource({}, context)
```

#### Parameters
*This action has no parameters*

### TagResource



```js
amazonaws_cloudfront.TagResource({
  "Tags": {}
}, context)
```

#### Parameters
* Tags (object) **required** -  A complex type that contains zero or more <code>Tag</code> elements.

### UntagResource



```js
amazonaws_cloudfront.UntagResource({
  "TagKeys": {}
}, context)
```

#### Parameters
* TagKeys (object) **required** -  A complex type that contains zero or more <code>Tag</code> elements.

