# @datafire/amazonaws_cloudfront

Client library for Amazon CloudFront

## Installation and Usage
```bash
npm install --save datafire @datafire/amazonaws_cloudfront
```

```js
let datafire = require('datafire');
let amazonaws_cloudfront = require('@datafire/amazonaws_cloudfront').actions;

let account = {
  hmac: "",
}
let context = new datafire.Context({
  accounts: {
    amazonaws_cloudfront: account,
  }
})


amazonaws_cloudfront.ListDistributions({}, context).then(data => {
  console.log(data);
})
```

## Description
<fullname>Amazon CloudFront</fullname> <p>This is the <i>Amazon CloudFront API Reference</i>. This guide is for developers who need detailed information about the CloudFront API actions, data types, and errors. For detailed information about CloudFront features and their associated API calls, see the <i>Amazon CloudFront Developer Guide</i>.</p>

## Actions
### ListDistributions
List distributions. 


```js
amazonaws_cloudfront.ListDistributions({
  "body": {},
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - The request to list your distributions. 
* MaxItems (string) - Pagination limit
* Marker (string) - Pagination token
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### ListInvalidations
Lists invalidation batches. 


```js
amazonaws_cloudfront.ListInvalidations({
  "body": {},
  "DistributionId": "",
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - The request to list invalidations. 
* MaxItems (string) - Pagination limit
* Marker (string) - Pagination token
* DistributionId (string) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### GetInvalidation
Get the information about an invalidation. 


```js
amazonaws_cloudfront.GetInvalidation({
  "body": {},
  "DistributionId": "",
  "Id": "",
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - The request to get an invalidation's information. 
* DistributionId (string) **required**
* Id (string) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### GetDistribution
Get the information about a distribution. 


```js
amazonaws_cloudfront.GetDistribution({
  "body": {},
  "Id": "",
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - The request to get a distribution's information.
* Id (string) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### UpdateDistribution
Update a distribution. 


```js
amazonaws_cloudfront.UpdateDistribution({
  "body": {
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
  },
  "Id": "",
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - The request to update a distribution.
* Id (string) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### CreateDistributionWithTags
Create a new distribution with tags.


```js
amazonaws_cloudfront.CreateDistributionWithTags({
  "body": {
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
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - The request to create a new distribution with tags. 
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### ListDistributionsByWebACLId
List the distributions that are associated with a specified AWS WAF web ACL. 


```js
amazonaws_cloudfront.ListDistributionsByWebACLId({
  "body": {},
  "WebACLId": "",
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - The request to list distributions that are associated with a specified AWS WAF web ACL. 
* WebACLId (string) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### ListCloudFrontOriginAccessIdentities
Lists origin access identities.


```js
amazonaws_cloudfront.ListCloudFrontOriginAccessIdentities({
  "body": {},
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - The request to list origin access identities. 
* MaxItems (string) - Pagination limit
* Marker (string) - Pagination token
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### GetCloudFrontOriginAccessIdentity
Get the information about an origin access identity. 


```js
amazonaws_cloudfront.GetCloudFrontOriginAccessIdentity({
  "body": {},
  "Id": "",
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - The request to get an origin access identity's information.
* Id (string) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### UpdateCloudFrontOriginAccessIdentity
Update an origin access identity. 


```js
amazonaws_cloudfront.UpdateCloudFrontOriginAccessIdentity({
  "body": {
    "CloudFrontOriginAccessIdentityConfig": {
      "CallerReference": "",
      "Comment": ""
    }
  },
  "Id": "",
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - The request to update an origin access identity.
* Id (string) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### ListStreamingDistributions
List streaming distributions. 


```js
amazonaws_cloudfront.ListStreamingDistributions({
  "body": {},
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - The request to list your streaming distributions. 
* MaxItems (string) - Pagination limit
* Marker (string) - Pagination token
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### GetStreamingDistribution
Gets information about a specified RTMP distribution, including the distribution configuration.


```js
amazonaws_cloudfront.GetStreamingDistribution({
  "body": {},
  "Id": "",
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - The request to get a streaming distribution's information.
* Id (string) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### UpdateStreamingDistribution
Update a streaming distribution. 


```js
amazonaws_cloudfront.UpdateStreamingDistribution({
  "body": {
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
  },
  "Id": "",
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - The request to update a streaming distribution.
* Id (string) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### CreateStreamingDistributionWithTags
Create a new streaming distribution with tags.


```js
amazonaws_cloudfront.CreateStreamingDistributionWithTags({
  "body": {
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
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - The request to create a new streaming distribution with tags.
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### ListTagsForResource
List tags for a CloudFront resource.


```js
amazonaws_cloudfront.ListTagsForResource({
  "body": {},
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** -  The request to list tags for a CloudFront resource.
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### TagResource
Add tags to a CloudFront resource.


```js
amazonaws_cloudfront.TagResource({
  "body": {
    "Tags": {}
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** -  The request to add tags to a CloudFront resource.
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### UntagResource
Remove tags from a CloudFront resource.


```js
amazonaws_cloudfront.UntagResource({
  "body": {
    "TagKeys": {}
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** -  The request to remove tags from a CloudFront resource.
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

