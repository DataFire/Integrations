# @datafire/amazonaws_cloudfront

Client library for Amazon CloudFront

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_cloudfront
```
```js
let amazonaws_cloudfront = require('@datafire/amazonaws_cloudfront').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

amazonaws_cloudfront.ListDistributions({}).then(data => {
  console.log(data);
});
```

## Description

<fullname>Amazon CloudFront</fullname> <p>This is the <i>Amazon CloudFront API Reference</i>. This guide is for developers who need detailed information about CloudFront API actions, data types, and errors. For detailed information about CloudFront features, see the <i>Amazon CloudFront Developer Guide</i>.</p>

## Actions

### ListDistributions



```js
amazonaws_cloudfront.ListDistributions({}, context)
```

#### Input
* input `object`
  * MaxItems `string`
  * Marker `string`

#### Output
* output [ListDistributionsResult](#listdistributionsresult)

### CreateDistribution



```js
amazonaws_cloudfront.CreateDistribution({
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

#### Input
* input `object`
  * DistributionConfig **required** [DistributionConfig](#distributionconfig)

#### Output
*Output schema unknown*

### ListInvalidations



```js
amazonaws_cloudfront.ListInvalidations({
  "DistributionId": ""
}, context)
```

#### Input
* input `object`
  * MaxItems `string`
  * Marker `string`
  * DistributionId **required** `string`

#### Output
* output [ListInvalidationsResult](#listinvalidationsresult)

### CreateInvalidation



```js
amazonaws_cloudfront.CreateInvalidation({
  "DistributionId": "",
  "InvalidationBatch": {
    "Paths": {
      "Quantity": 0
    },
    "CallerReference": ""
  }
}, context)
```

#### Input
* input `object`
  * DistributionId **required** `string`
  * InvalidationBatch **required** [InvalidationBatch](#invalidationbatch)

#### Output
*Output schema unknown*

### GetInvalidation



```js
amazonaws_cloudfront.GetInvalidation({
  "DistributionId": "",
  "Id": ""
}, context)
```

#### Input
* input `object`
  * DistributionId **required** `string`
  * Id **required** `string`

#### Output
* output [GetInvalidationResult](#getinvalidationresult)

### DeleteDistribution



```js
amazonaws_cloudfront.DeleteDistribution({
  "Id": ""
}, context)
```

#### Input
* input `object`
  * Id **required** `string`

#### Output
*Output schema unknown*

### GetDistribution



```js
amazonaws_cloudfront.GetDistribution({
  "Id": ""
}, context)
```

#### Input
* input `object`
  * Id **required** `string`

#### Output
* output [GetDistributionResult](#getdistributionresult)

### GetDistributionConfig



```js
amazonaws_cloudfront.GetDistributionConfig({
  "Id": ""
}, context)
```

#### Input
* input `object`
  * Id **required** `string`

#### Output
* output [GetDistributionConfigResult](#getdistributionconfigresult)

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

#### Input
* input `object`
  * Id **required** `string`
  * DistributionConfig **required** [DistributionConfig](#distributionconfig)

#### Output
* output [UpdateDistributionResult](#updatedistributionresult)

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

#### Input
* input `object`
  * DistributionConfigWithTags **required** [DistributionConfigWithTags](#distributionconfigwithtags)

#### Output
*Output schema unknown*

### ListDistributionsByWebACLId



```js
amazonaws_cloudfront.ListDistributionsByWebACLId({
  "WebACLId": ""
}, context)
```

#### Input
* input `object`
  * WebACLId **required** `string`

#### Output
* output [ListDistributionsByWebACLIdResult](#listdistributionsbywebaclidresult)

### ListCloudFrontOriginAccessIdentities



```js
amazonaws_cloudfront.ListCloudFrontOriginAccessIdentities({}, context)
```

#### Input
* input `object`
  * MaxItems `string`
  * Marker `string`

#### Output
* output [ListCloudFrontOriginAccessIdentitiesResult](#listcloudfrontoriginaccessidentitiesresult)

### CreateCloudFrontOriginAccessIdentity



```js
amazonaws_cloudfront.CreateCloudFrontOriginAccessIdentity({
  "CloudFrontOriginAccessIdentityConfig": {
    "CallerReference": "",
    "Comment": ""
  }
}, context)
```

#### Input
* input `object`
  * CloudFrontOriginAccessIdentityConfig **required** [CloudFrontOriginAccessIdentityConfig](#cloudfrontoriginaccessidentityconfig)

#### Output
*Output schema unknown*

### DeleteCloudFrontOriginAccessIdentity



```js
amazonaws_cloudfront.DeleteCloudFrontOriginAccessIdentity({
  "Id": ""
}, context)
```

#### Input
* input `object`
  * Id **required** `string`

#### Output
*Output schema unknown*

### GetCloudFrontOriginAccessIdentity



```js
amazonaws_cloudfront.GetCloudFrontOriginAccessIdentity({
  "Id": ""
}, context)
```

#### Input
* input `object`
  * Id **required** `string`

#### Output
* output [GetCloudFrontOriginAccessIdentityResult](#getcloudfrontoriginaccessidentityresult)

### GetCloudFrontOriginAccessIdentityConfig



```js
amazonaws_cloudfront.GetCloudFrontOriginAccessIdentityConfig({
  "Id": ""
}, context)
```

#### Input
* input `object`
  * Id **required** `string`

#### Output
* output [GetCloudFrontOriginAccessIdentityConfigResult](#getcloudfrontoriginaccessidentityconfigresult)

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

#### Input
* input `object`
  * Id **required** `string`
  * CloudFrontOriginAccessIdentityConfig **required** [CloudFrontOriginAccessIdentityConfig](#cloudfrontoriginaccessidentityconfig)

#### Output
* output [UpdateCloudFrontOriginAccessIdentityResult](#updatecloudfrontoriginaccessidentityresult)

### DeleteServiceLinkedRole



```js
amazonaws_cloudfront.DeleteServiceLinkedRole({
  "RoleName": ""
}, context)
```

#### Input
* input `object`
  * RoleName **required** `string`

#### Output
*Output schema unknown*

### ListStreamingDistributions



```js
amazonaws_cloudfront.ListStreamingDistributions({}, context)
```

#### Input
* input `object`
  * MaxItems `string`
  * Marker `string`

#### Output
* output [ListStreamingDistributionsResult](#liststreamingdistributionsresult)

### CreateStreamingDistribution



```js
amazonaws_cloudfront.CreateStreamingDistribution({
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

#### Input
* input `object`
  * StreamingDistributionConfig **required** [StreamingDistributionConfig](#streamingdistributionconfig)

#### Output
*Output schema unknown*

### DeleteStreamingDistribution



```js
amazonaws_cloudfront.DeleteStreamingDistribution({
  "Id": ""
}, context)
```

#### Input
* input `object`
  * Id **required** `string`

#### Output
*Output schema unknown*

### GetStreamingDistribution



```js
amazonaws_cloudfront.GetStreamingDistribution({
  "Id": ""
}, context)
```

#### Input
* input `object`
  * Id **required** `string`

#### Output
* output [GetStreamingDistributionResult](#getstreamingdistributionresult)

### GetStreamingDistributionConfig



```js
amazonaws_cloudfront.GetStreamingDistributionConfig({
  "Id": ""
}, context)
```

#### Input
* input `object`
  * Id **required** `string`

#### Output
* output [GetStreamingDistributionConfigResult](#getstreamingdistributionconfigresult)

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

#### Input
* input `object`
  * Id **required** `string`
  * StreamingDistributionConfig **required** [StreamingDistributionConfig](#streamingdistributionconfig)

#### Output
* output [UpdateStreamingDistributionResult](#updatestreamingdistributionresult)

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

#### Input
* input `object`
  * StreamingDistributionConfigWithTags **required** [StreamingDistributionConfigWithTags](#streamingdistributionconfigwithtags)

#### Output
*Output schema unknown*

### ListTagsForResource



```js
amazonaws_cloudfront.ListTagsForResource({}, context)
```

#### Input
* input `object`

#### Output
* output [ListTagsForResourceResult](#listtagsforresourceresult)

### TagResource



```js
amazonaws_cloudfront.TagResource({
  "Tags": {}
}, context)
```

#### Input
* input `object`
  * Tags **required** [Tags](#tags)

#### Output
*Output schema unknown*

### UntagResource



```js
amazonaws_cloudfront.UntagResource({
  "TagKeys": {}
}, context)
```

#### Input
* input `object`
  * TagKeys **required** [TagKeys](#tagkeys)

#### Output
*Output schema unknown*



## Definitions

### AccessDenied
* AccessDenied `object`: Access denied.
  * Message [string](#string)

### ActiveTrustedSigners
* ActiveTrustedSigners `object`: <p>A complex type that lists the AWS accounts, if any, that you included in the <code>TrustedSigners</code> complex type for this distribution. These are the accounts that you want to allow to create signed URLs for private content.</p> <p>The <code>Signer</code> complex type lists the AWS account number of the trusted signer or <code>self</code> if the signer is the AWS account that created the distribution. The <code>Signer</code> element also includes the IDs of any active CloudFront key pairs that are associated with the trusted signer's AWS account. If no <code>KeyPairId</code> element appears for a <code>Signer</code>, that signer can't create signed URLs. </p> <p>For more information, see <a href="http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">Serving Private Content through CloudFront</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
  * Enabled **required** [boolean](#boolean)
  * Items [SignerList](#signerlist)
  * Quantity **required** [integer](#integer)

### AliasList
* AliasList `array`
  * items [string](#string)

### Aliases
* Aliases `object`: A complex type that contains information about CNAMEs (alternate domain names), if any, for this distribution. 
  * Items [AliasList](#aliaslist)
  * Quantity **required** [integer](#integer)

### AllowedMethods
* AllowedMethods `object`: <p>A complex type that controls which HTTP methods CloudFront processes and forwards to your Amazon S3 bucket or your custom origin. There are three choices:</p> <ul> <li> <p>CloudFront forwards only <code>GET</code> and <code>HEAD</code> requests.</p> </li> <li> <p>CloudFront forwards only <code>GET</code>, <code>HEAD</code>, and <code>OPTIONS</code> requests.</p> </li> <li> <p>CloudFront forwards <code>GET, HEAD, OPTIONS, PUT, PATCH, POST</code>, and <code>DELETE</code> requests.</p> </li> </ul> <p>If you pick the third choice, you may need to restrict access to your Amazon S3 bucket or to your custom origin so users can't perform operations that you don't want them to. For example, you might not want users to have permissions to delete objects from your origin.</p>
  * CachedMethods [CachedMethods](#cachedmethods)
  * Items **required** [MethodsList](#methodslist)
  * Quantity **required** [integer](#integer)

### AwsAccountNumberList
* AwsAccountNumberList `array`
  * items [string](#string)

### BatchTooLarge
* BatchTooLarge `object`
  * Message [string](#string)

### CNAMEAlreadyExists
* CNAMEAlreadyExists `object`
  * Message [string](#string)

### CacheBehavior
* CacheBehavior `object`: <p>A complex type that describes how CloudFront processes requests.</p> <p>You must create at least as many cache behaviors (including the default cache behavior) as you have origins if you want CloudFront to distribute objects from all of the origins. Each cache behavior specifies the one origin from which you want CloudFront to get objects. If you have two origins and only the default cache behavior, the default cache behavior will cause CloudFront to get objects from one of the origins, but the other origin is never used.</p> <p>For the current limit on the number of cache behaviors that you can add to a distribution, see <a href="http://docs.aws.amazon.com/general/latest/gr/aws_service_limits.html#limits_cloudfront">Amazon CloudFront Limits</a> in the <i>AWS General Reference</i>.</p> <p>If you don't want to specify any cache behaviors, include only an empty <code>CacheBehaviors</code> element. Don't include an empty <code>CacheBehavior</code> element, or CloudFront returns a <code>MalformedXML</code> error.</p> <p>To delete all cache behaviors in an existing distribution, update the distribution configuration and include only an empty <code>CacheBehaviors</code> element.</p> <p>To add, change, or remove one or more cache behaviors, update the distribution configuration and specify all of the cache behaviors that you want to include in the updated distribution.</p> <p>For more information about cache behaviors, see <a href="http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-web-values-specify.html#DownloadDistValuesCacheBehavior">Cache Behaviors</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
  * AllowedMethods [AllowedMethods](#allowedmethods)
  * Compress [boolean](#boolean)
  * DefaultTTL [long](#long)
  * ForwardedValues **required** [ForwardedValues](#forwardedvalues)
  * LambdaFunctionAssociations [LambdaFunctionAssociations](#lambdafunctionassociations)
  * MaxTTL [long](#long)
  * MinTTL **required** [long](#long)
  * PathPattern **required** [string](#string)
  * SmoothStreaming [boolean](#boolean)
  * TargetOriginId **required** [string](#string)
  * TrustedSigners **required** [TrustedSigners](#trustedsigners)
  * ViewerProtocolPolicy **required** [ViewerProtocolPolicy](#viewerprotocolpolicy)

### CacheBehaviorList
* CacheBehaviorList `array`
  * items [CacheBehavior](#cachebehavior)

### CacheBehaviors
* CacheBehaviors `object`: A complex type that contains zero or more <code>CacheBehavior</code> elements. 
  * Items [CacheBehaviorList](#cachebehaviorlist)
  * Quantity **required** [integer](#integer)

### CachedMethods
* CachedMethods `object`: <p>A complex type that controls whether CloudFront caches the response to requests using the specified HTTP methods. There are two choices:</p> <ul> <li> <p>CloudFront caches responses to <code>GET</code> and <code>HEAD</code> requests.</p> </li> <li> <p>CloudFront caches responses to <code>GET</code>, <code>HEAD</code>, and <code>OPTIONS</code> requests.</p> </li> </ul> <p>If you pick the second choice for your Amazon S3 Origin, you may need to forward Access-Control-Request-Method, Access-Control-Request-Headers, and Origin headers for the responses to be cached correctly. </p>
  * Items **required** [MethodsList](#methodslist)
  * Quantity **required** [integer](#integer)

### CertificateSource
* CertificateSource `string` (values: cloudfront, iam, acm)

### CloudFrontOriginAccessIdentity
* CloudFrontOriginAccessIdentity `object`: CloudFront origin access identity.
  * CloudFrontOriginAccessIdentityConfig [CloudFrontOriginAccessIdentityConfig](#cloudfrontoriginaccessidentityconfig)
  * Id **required** [string](#string)
  * S3CanonicalUserId **required** [string](#string)

### CloudFrontOriginAccessIdentityAlreadyExists
* CloudFrontOriginAccessIdentityAlreadyExists `object`: If the <code>CallerReference</code> is a value you already sent in a previous request to create an identity but the content of the <code>CloudFrontOriginAccessIdentityConfig</code> is different from the original request, CloudFront returns a <code>CloudFrontOriginAccessIdentityAlreadyExists</code> error. 
  * Message [string](#string)

### CloudFrontOriginAccessIdentityConfig
* CloudFrontOriginAccessIdentityConfig `object`: Origin access identity configuration. Send a <code>GET</code> request to the <code>/<i>CloudFront API version</i>/CloudFront/identity ID/config</code> resource. 
  * CallerReference **required** [string](#string)
  * Comment **required** [string](#string)

### CloudFrontOriginAccessIdentityInUse
* CloudFrontOriginAccessIdentityInUse `object`
  * Message [string](#string)

### CloudFrontOriginAccessIdentityList
* CloudFrontOriginAccessIdentityList `object`: Lists the origin access identities for CloudFront.Send a <code>GET</code> request to the <code>/<i>CloudFront API version</i>/origin-access-identity/cloudfront</code> resource. The response includes a <code>CloudFrontOriginAccessIdentityList</code> element with zero or more <code>CloudFrontOriginAccessIdentitySummary</code> child elements. By default, your entire list of origin access identities is returned in one single page. If the list is long, you can paginate it using the <code>MaxItems</code> and <code>Marker</code> parameters.
  * IsTruncated **required** [boolean](#boolean)
  * Items [CloudFrontOriginAccessIdentitySummaryList](#cloudfrontoriginaccessidentitysummarylist)
  * Marker **required** [string](#string)
  * MaxItems **required** [integer](#integer)
  * NextMarker [string](#string)
  * Quantity **required** [integer](#integer)

### CloudFrontOriginAccessIdentitySummary
* CloudFrontOriginAccessIdentitySummary `object`: Summary of the information about a CloudFront origin access identity.
  * Comment **required** [string](#string)
  * Id **required** [string](#string)
  * S3CanonicalUserId **required** [string](#string)

### CloudFrontOriginAccessIdentitySummaryList
* CloudFrontOriginAccessIdentitySummaryList `array`
  * items [CloudFrontOriginAccessIdentitySummary](#cloudfrontoriginaccessidentitysummary)

### CookieNameList
* CookieNameList `array`
  * items [string](#string)

### CookieNames
* CookieNames `object`: A complex type that specifies whether you want CloudFront to forward cookies to the origin and, if so, which ones. For more information about forwarding cookies to the origin, see <a href="http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Cookies.html">How CloudFront Forwards, Caches, and Logs Cookies</a> in the <i>Amazon CloudFront Developer Guide</i>.
  * Items [CookieNameList](#cookienamelist)
  * Quantity **required** [integer](#integer)

### CookiePreference
* CookiePreference `object`: A complex type that specifies whether you want CloudFront to forward cookies to the origin and, if so, which ones. For more information about forwarding cookies to the origin, see <a href="http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Cookies.html">How CloudFront Forwards, Caches, and Logs Cookies</a> in the <i>Amazon CloudFront Developer Guide</i>.
  * Forward **required** [ItemSelection](#itemselection)
  * WhitelistedNames [CookieNames](#cookienames)

### CreateCloudFrontOriginAccessIdentityRequest
* CreateCloudFrontOriginAccessIdentityRequest `object`: The request to create a new origin access identity.
  * CloudFrontOriginAccessIdentityConfig **required** [CloudFrontOriginAccessIdentityConfig](#cloudfrontoriginaccessidentityconfig)

### CreateCloudFrontOriginAccessIdentityResult
* CreateCloudFrontOriginAccessIdentityResult `object`: The returned result of the corresponding request.
  * CloudFrontOriginAccessIdentity [CloudFrontOriginAccessIdentity](#cloudfrontoriginaccessidentity)

### CreateDistributionRequest
* CreateDistributionRequest `object`: The request to create a new distribution.
  * DistributionConfig **required** [DistributionConfig](#distributionconfig)

### CreateDistributionResult
* CreateDistributionResult `object`: The returned result of the corresponding request.
  * Distribution [Distribution](#distribution)

### CreateDistributionWithTagsRequest
* CreateDistributionWithTagsRequest `object`: The request to create a new distribution with tags. 
  * DistributionConfigWithTags **required** [DistributionConfigWithTags](#distributionconfigwithtags)

### CreateDistributionWithTagsResult
* CreateDistributionWithTagsResult `object`: The returned result of the corresponding request. 
  * Distribution [Distribution](#distribution)

### CreateInvalidationRequest
* CreateInvalidationRequest `object`: The request to create an invalidation.
  * InvalidationBatch **required** [InvalidationBatch](#invalidationbatch)

### CreateInvalidationResult
* CreateInvalidationResult `object`: The returned result of the corresponding request.
  * Invalidation [Invalidation](#invalidation)

### CreateStreamingDistributionRequest
* CreateStreamingDistributionRequest `object`: The request to create a new streaming distribution.
  * StreamingDistributionConfig **required** [StreamingDistributionConfig](#streamingdistributionconfig)

### CreateStreamingDistributionResult
* CreateStreamingDistributionResult `object`: The returned result of the corresponding request.
  * StreamingDistribution [StreamingDistribution](#streamingdistribution)

### CreateStreamingDistributionWithTagsRequest
* CreateStreamingDistributionWithTagsRequest `object`: The request to create a new streaming distribution with tags.
  * StreamingDistributionConfigWithTags **required** [StreamingDistributionConfigWithTags](#streamingdistributionconfigwithtags)

### CreateStreamingDistributionWithTagsResult
* CreateStreamingDistributionWithTagsResult `object`: The returned result of the corresponding request. 
  * StreamingDistribution [StreamingDistribution](#streamingdistribution)

### CustomErrorResponse
* CustomErrorResponse `object`: <p>A complex type that controls:</p> <ul> <li> <p>Whether CloudFront replaces HTTP status codes in the 4xx and 5xx range with custom error messages before returning the response to the viewer. </p> </li> <li> <p>How long CloudFront caches HTTP status codes in the 4xx and 5xx range.</p> </li> </ul> <p>For more information about custom error pages, see <a href="http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/custom-error-pages.html">Customizing Error Responses</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
  * ErrorCachingMinTTL [long](#long)
  * ErrorCode **required** [integer](#integer)
  * ResponseCode [string](#string)
  * ResponsePagePath [string](#string)

### CustomErrorResponseList
* CustomErrorResponseList `array`
  * items [CustomErrorResponse](#customerrorresponse)

### CustomErrorResponses
* CustomErrorResponses `object`: <p>A complex type that controls:</p> <ul> <li> <p>Whether CloudFront replaces HTTP status codes in the 4xx and 5xx range with custom error messages before returning the response to the viewer.</p> </li> <li> <p>How long CloudFront caches HTTP status codes in the 4xx and 5xx range.</p> </li> </ul> <p>For more information about custom error pages, see <a href="http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/custom-error-pages.html">Customizing Error Responses</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
  * Items [CustomErrorResponseList](#customerrorresponselist)
  * Quantity **required** [integer](#integer)

### CustomHeaders
* CustomHeaders `object`: A complex type that contains the list of Custom Headers for each origin. 
  * Items [OriginCustomHeadersList](#origincustomheaderslist)
  * Quantity **required** [integer](#integer)

### CustomOriginConfig
* CustomOriginConfig `object`: A customer origin.
  * HTTPPort **required** [integer](#integer)
  * HTTPSPort **required** [integer](#integer)
  * OriginKeepaliveTimeout [integer](#integer)
  * OriginProtocolPolicy **required** [OriginProtocolPolicy](#originprotocolpolicy)
  * OriginReadTimeout [integer](#integer)
  * OriginSslProtocols [OriginSslProtocols](#originsslprotocols)

### DefaultCacheBehavior
* DefaultCacheBehavior `object`: A complex type that describes the default cache behavior if you don't specify a <code>CacheBehavior</code> element or if files don't match any of the values of <code>PathPattern</code> in <code>CacheBehavior</code> elements. You must create exactly one default cache behavior.
  * AllowedMethods [AllowedMethods](#allowedmethods)
  * Compress [boolean](#boolean)
  * DefaultTTL [long](#long)
  * ForwardedValues **required** [ForwardedValues](#forwardedvalues)
  * LambdaFunctionAssociations [LambdaFunctionAssociations](#lambdafunctionassociations)
  * MaxTTL [long](#long)
  * MinTTL **required** [long](#long)
  * SmoothStreaming [boolean](#boolean)
  * TargetOriginId **required** [string](#string)
  * TrustedSigners **required** [TrustedSigners](#trustedsigners)
  * ViewerProtocolPolicy **required** [ViewerProtocolPolicy](#viewerprotocolpolicy)

### DeleteCloudFrontOriginAccessIdentityRequest
* DeleteCloudFrontOriginAccessIdentityRequest `object`: Deletes a origin access identity.

### DeleteDistributionRequest
* DeleteDistributionRequest `object`: <p>This action deletes a web distribution. To delete a web distribution using the CloudFront API, perform the following steps.</p> <p> <b>To delete a web distribution using the CloudFront API:</b> </p> <ol> <li> <p>Disable the web distribution </p> </li> <li> <p>Submit a <code>GET Distribution Config</code> request to get the current configuration and the <code>Etag</code> header for the distribution.</p> </li> <li> <p>Update the XML document that was returned in the response to your <code>GET Distribution Config</code> request to change the value of <code>Enabled</code> to <code>false</code>.</p> </li> <li> <p>Submit a <code>PUT Distribution Config</code> request to update the configuration for your distribution. In the request body, include the XML document that you updated in Step 3. Set the value of the HTTP <code>If-Match</code> header to the value of the <code>ETag</code> header that CloudFront returned when you submitted the <code>GET Distribution Config</code> request in Step 2.</p> </li> <li> <p>Review the response to the <code>PUT Distribution Config</code> request to confirm that the distribution was successfully disabled.</p> </li> <li> <p>Submit a <code>GET Distribution</code> request to confirm that your changes have propagated. When propagation is complete, the value of <code>Status</code> is <code>Deployed</code>.</p> </li> <li> <p>Submit a <code>DELETE Distribution</code> request. Set the value of the HTTP <code>If-Match</code> header to the value of the <code>ETag</code> header that CloudFront returned when you submitted the <code>GET Distribution Config</code> request in Step 6.</p> </li> <li> <p>Review the response to your <code>DELETE Distribution</code> request to confirm that the distribution was successfully deleted.</p> </li> </ol> <p>For information about deleting a distribution using the CloudFront console, see <a href="http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/HowToDeleteDistribution.html">Deleting a Distribution</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>

### DeleteServiceLinkedRoleRequest
* DeleteServiceLinkedRoleRequest `object`

### DeleteStreamingDistributionRequest
* DeleteStreamingDistributionRequest `object`: The request to delete a streaming distribution.

### Distribution
* Distribution `object`: The distribution's information.
  * ARN **required** [string](#string)
  * ActiveTrustedSigners **required** [ActiveTrustedSigners](#activetrustedsigners)
  * DistributionConfig **required** [DistributionConfig](#distributionconfig)
  * DomainName **required** [string](#string)
  * Id **required** [string](#string)
  * InProgressInvalidationBatches **required** [integer](#integer)
  * LastModifiedTime **required** [timestamp](#timestamp)
  * Status **required** [string](#string)

### DistributionAlreadyExists
* DistributionAlreadyExists `object`: The caller reference you attempted to create the distribution with is associated with another distribution.
  * Message [string](#string)

### DistributionConfig
* DistributionConfig `object`: A distribution configuration.
  * Aliases [Aliases](#aliases)
  * CacheBehaviors [CacheBehaviors](#cachebehaviors)
  * CallerReference **required** [string](#string)
  * Comment **required** [string](#string)
  * CustomErrorResponses [CustomErrorResponses](#customerrorresponses)
  * DefaultCacheBehavior **required** [DefaultCacheBehavior](#defaultcachebehavior)
  * DefaultRootObject [string](#string)
  * Enabled **required** [boolean](#boolean)
  * HttpVersion [HttpVersion](#httpversion)
  * IsIPV6Enabled [boolean](#boolean)
  * Logging [LoggingConfig](#loggingconfig)
  * Origins **required** [Origins](#origins)
  * PriceClass [PriceClass](#priceclass)
  * Restrictions [Restrictions](#restrictions)
  * ViewerCertificate [ViewerCertificate](#viewercertificate)
  * WebACLId [string](#string)

### DistributionConfigWithTags
* DistributionConfigWithTags `object`: A distribution Configuration and a list of tags to be associated with the distribution.
  * DistributionConfig **required** [DistributionConfig](#distributionconfig)
  * Tags **required** [Tags](#tags)

### DistributionList
* DistributionList `object`: A distribution list.
  * IsTruncated **required** [boolean](#boolean)
  * Items [DistributionSummaryList](#distributionsummarylist)
  * Marker **required** [string](#string)
  * MaxItems **required** [integer](#integer)
  * NextMarker [string](#string)
  * Quantity **required** [integer](#integer)

### DistributionNotDisabled
* DistributionNotDisabled `object`
  * Message [string](#string)

### DistributionSummary
* DistributionSummary `object`: A summary of the information about a CloudFront distribution.
  * ARN **required** [string](#string)
  * Aliases **required** [Aliases](#aliases)
  * CacheBehaviors **required** [CacheBehaviors](#cachebehaviors)
  * Comment **required** [string](#string)
  * CustomErrorResponses **required** [CustomErrorResponses](#customerrorresponses)
  * DefaultCacheBehavior **required** [DefaultCacheBehavior](#defaultcachebehavior)
  * DomainName **required** [string](#string)
  * Enabled **required** [boolean](#boolean)
  * HttpVersion **required** [HttpVersion](#httpversion)
  * Id **required** [string](#string)
  * IsIPV6Enabled **required** [boolean](#boolean)
  * LastModifiedTime **required** [timestamp](#timestamp)
  * Origins **required** [Origins](#origins)
  * PriceClass **required** [PriceClass](#priceclass)
  * Restrictions **required** [Restrictions](#restrictions)
  * Status **required** [string](#string)
  * ViewerCertificate **required** [ViewerCertificate](#viewercertificate)
  * WebACLId **required** [string](#string)

### DistributionSummaryList
* DistributionSummaryList `array`
  * items [DistributionSummary](#distributionsummary)

### EventType
* EventType `string` (values: viewer-request, viewer-response, origin-request, origin-response)

### ForwardedValues
* ForwardedValues `object`: A complex type that specifies how CloudFront handles query strings and cookies.
  * Cookies **required** [CookiePreference](#cookiepreference)
  * Headers [Headers](#headers)
  * QueryString **required** [boolean](#boolean)
  * QueryStringCacheKeys [QueryStringCacheKeys](#querystringcachekeys)

### GeoRestriction
* GeoRestriction `object`: A complex type that controls the countries in which your content is distributed. CloudFront determines the location of your users using <code>MaxMind</code> GeoIP databases. 
  * Items [LocationList](#locationlist)
  * Quantity **required** [integer](#integer)
  * RestrictionType **required** [GeoRestrictionType](#georestrictiontype)

### GeoRestrictionType
* GeoRestrictionType `string` (values: blacklist, whitelist, none)

### GetCloudFrontOriginAccessIdentityConfigRequest
* GetCloudFrontOriginAccessIdentityConfigRequest `object`: The origin access identity's configuration information. For more information, see <a>CloudFrontOriginAccessIdentityConfigComplexType</a>.

### GetCloudFrontOriginAccessIdentityConfigResult
* GetCloudFrontOriginAccessIdentityConfigResult `object`: The returned result of the corresponding request.
  * CloudFrontOriginAccessIdentityConfig [CloudFrontOriginAccessIdentityConfig](#cloudfrontoriginaccessidentityconfig)

### GetCloudFrontOriginAccessIdentityRequest
* GetCloudFrontOriginAccessIdentityRequest `object`: The request to get an origin access identity's information.

### GetCloudFrontOriginAccessIdentityResult
* GetCloudFrontOriginAccessIdentityResult `object`: The returned result of the corresponding request.
  * CloudFrontOriginAccessIdentity [CloudFrontOriginAccessIdentity](#cloudfrontoriginaccessidentity)

### GetDistributionConfigRequest
* GetDistributionConfigRequest `object`: The request to get a distribution configuration.

### GetDistributionConfigResult
* GetDistributionConfigResult `object`: The returned result of the corresponding request.
  * DistributionConfig [DistributionConfig](#distributionconfig)

### GetDistributionRequest
* GetDistributionRequest `object`: The request to get a distribution's information.

### GetDistributionResult
* GetDistributionResult `object`: The returned result of the corresponding request.
  * Distribution [Distribution](#distribution)

### GetInvalidationRequest
* GetInvalidationRequest `object`: The request to get an invalidation's information. 

### GetInvalidationResult
* GetInvalidationResult `object`: The returned result of the corresponding request.
  * Invalidation [Invalidation](#invalidation)

### GetStreamingDistributionConfigRequest
* GetStreamingDistributionConfigRequest `object`: To request to get a streaming distribution configuration.

### GetStreamingDistributionConfigResult
* GetStreamingDistributionConfigResult `object`: The returned result of the corresponding request.
  * StreamingDistributionConfig [StreamingDistributionConfig](#streamingdistributionconfig)

### GetStreamingDistributionRequest
* GetStreamingDistributionRequest `object`: The request to get a streaming distribution's information.

### GetStreamingDistributionResult
* GetStreamingDistributionResult `object`: The returned result of the corresponding request.
  * StreamingDistribution [StreamingDistribution](#streamingdistribution)

### HeaderList
* HeaderList `array`
  * items [string](#string)

### Headers
* Headers `object`: <p>A complex type that specifies the request headers, if any, that you want CloudFront to base caching on for this cache behavior. </p> <p>For the headers that you specify, CloudFront caches separate versions of a specified object based on the header values in viewer requests. For example, suppose viewer requests for <code>logo.jpg</code> contain a custom <code>product</code> header that has a value of either <code>acme</code> or <code>apex</code>, and you configure CloudFront to cache your content based on values in the <code>product</code> header. CloudFront forwards the <code>product</code> header to the origin and caches the response from the origin once for each header value. For more information about caching based on header values, see <a href="http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/header-caching.html">How CloudFront Forwards and Caches Headers</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
  * Items [HeaderList](#headerlist)
  * Quantity **required** [integer](#integer)

### HttpVersion
* HttpVersion `string` (values: http1.1, http2)

### IllegalUpdate
* IllegalUpdate `object`: Origin and <code>CallerReference</code> cannot be updated. 
  * Message [string](#string)

### InconsistentQuantities
* InconsistentQuantities `object`: The value of <code>Quantity</code> and the size of <code>Items</code> don't match.
  * Message [string](#string)

### InvalidArgument
* InvalidArgument `object`: The argument is invalid.
  * Message [string](#string)

### InvalidDefaultRootObject
* InvalidDefaultRootObject `object`: The default root object file name is too big or contains an invalid character.
  * Message [string](#string)

### InvalidErrorCode
* InvalidErrorCode `object`
  * Message [string](#string)

### InvalidForwardCookies
* InvalidForwardCookies `object`: Your request contains forward cookies option which doesn't match with the expectation for the <code>whitelisted</code> list of cookie names. Either list of cookie names has been specified when not allowed or list of cookie names is missing when expected.
  * Message [string](#string)

### InvalidGeoRestrictionParameter
* InvalidGeoRestrictionParameter `object`
  * Message [string](#string)

### InvalidHeadersForS3Origin
* InvalidHeadersForS3Origin `object`
  * Message [string](#string)

### InvalidIfMatchVersion
* InvalidIfMatchVersion `object`: The <code>If-Match</code> version is missing or not valid for the distribution.
  * Message [string](#string)

### InvalidLambdaFunctionAssociation
* InvalidLambdaFunctionAssociation `object`: The specified Lambda function association is invalid.
  * Message [string](#string)

### InvalidLocationCode
* InvalidLocationCode `object`
  * Message [string](#string)

### InvalidMinimumProtocolVersion
* InvalidMinimumProtocolVersion `object`
  * Message [string](#string)

### InvalidOrigin
* InvalidOrigin `object`: The Amazon S3 origin server specified does not refer to a valid Amazon S3 bucket.
  * Message [string](#string)

### InvalidOriginAccessIdentity
* InvalidOriginAccessIdentity `object`: The origin access identity is not valid or doesn't exist.
  * Message [string](#string)

### InvalidOriginKeepaliveTimeout
* InvalidOriginKeepaliveTimeout `object`
  * Message [string](#string)

### InvalidOriginReadTimeout
* InvalidOriginReadTimeout `object`
  * Message [string](#string)

### InvalidProtocolSettings
* InvalidProtocolSettings `object`: You cannot specify SSLv3 as the minimum protocol version if you only want to support only clients that support Server Name Indication (SNI).
  * Message [string](#string)

### InvalidQueryStringParameters
* InvalidQueryStringParameters `object`
  * Message [string](#string)

### InvalidRelativePath
* InvalidRelativePath `object`: The relative path is too big, is not URL-encoded, or does not begin with a slash (/).
  * Message [string](#string)

### InvalidRequiredProtocol
* InvalidRequiredProtocol `object`: This operation requires the HTTPS protocol. Ensure that you specify the HTTPS protocol in your request, or omit the <code>RequiredProtocols</code> element from your distribution configuration.
  * Message [string](#string)

### InvalidResponseCode
* InvalidResponseCode `object`
  * Message [string](#string)

### InvalidTTLOrder
* InvalidTTLOrder `object`
  * Message [string](#string)

### InvalidTagging
* InvalidTagging `object`
  * Message [string](#string)

### InvalidViewerCertificate
* InvalidViewerCertificate `object`
  * Message [string](#string)

### InvalidWebACLId
* InvalidWebACLId `object`
  * Message [string](#string)

### Invalidation
* Invalidation `object`: An invalidation. 
  * CreateTime **required** [timestamp](#timestamp)
  * Id **required** [string](#string)
  * InvalidationBatch **required** [InvalidationBatch](#invalidationbatch)
  * Status **required** [string](#string)

### InvalidationBatch
* InvalidationBatch `object`: An invalidation batch.
  * CallerReference **required** [string](#string)
  * Paths **required** [Paths](#paths)

### InvalidationList
* InvalidationList `object`: The <code>InvalidationList</code> complex type describes the list of invalidation objects. For more information about invalidation, see <a href="http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Invalidation.html">Invalidating Objects (Web Distributions Only)</a> in the <i>Amazon CloudFront Developer Guide</i>.
  * IsTruncated **required** [boolean](#boolean)
  * Items [InvalidationSummaryList](#invalidationsummarylist)
  * Marker **required** [string](#string)
  * MaxItems **required** [integer](#integer)
  * NextMarker [string](#string)
  * Quantity **required** [integer](#integer)

### InvalidationSummary
* InvalidationSummary `object`: A summary of an invalidation request.
  * CreateTime **required** [timestamp](#timestamp)
  * Id **required** [string](#string)
  * Status **required** [string](#string)

### InvalidationSummaryList
* InvalidationSummaryList `array`
  * items [InvalidationSummary](#invalidationsummary)

### ItemSelection
* ItemSelection `string` (values: none, whitelist, all)

### KeyPairIdList
* KeyPairIdList `array`
  * items [string](#string)

### KeyPairIds
* KeyPairIds `object`: <p>A complex type that lists the active CloudFront key pairs, if any, that are associated with <code>AwsAccountNumber</code>. </p> <p>For more information, see <a>ActiveTrustedSigners</a>.</p>
  * Items [KeyPairIdList](#keypairidlist)
  * Quantity **required** [integer](#integer)

### LambdaFunctionAssociation
* LambdaFunctionAssociation `object`: A complex type that contains a Lambda function association.
  * EventType [EventType](#eventtype)
  * LambdaFunctionARN [string](#string)

### LambdaFunctionAssociationList
* LambdaFunctionAssociationList `array`
  * items [LambdaFunctionAssociation](#lambdafunctionassociation)

### LambdaFunctionAssociations
* LambdaFunctionAssociations `object`: <p>A complex type that specifies a list of Lambda functions associations for a cache behavior.</p> <p>If you want to invoke one or more Lambda functions triggered by requests that match the <code>PathPattern</code> of the cache behavior, specify the applicable values for <code>Quantity</code> and <code>Items</code>. Note that there can be up to 4 <code>LambdaFunctionAssociation</code> items in this list (one for each possible value of <code>EventType</code>) and each <code>EventType</code> can be associated with the Lambda function only once.</p> <p>If you don't want to invoke any Lambda functions for the requests that match <code>PathPattern</code>, specify <code>0</code> for <code>Quantity</code> and omit <code>Items</code>. </p>
  * Items [LambdaFunctionAssociationList](#lambdafunctionassociationlist)
  * Quantity **required** [integer](#integer)

### ListCloudFrontOriginAccessIdentitiesRequest
* ListCloudFrontOriginAccessIdentitiesRequest `object`: The request to list origin access identities. 

### ListCloudFrontOriginAccessIdentitiesResult
* ListCloudFrontOriginAccessIdentitiesResult `object`: The returned result of the corresponding request. 
  * CloudFrontOriginAccessIdentityList [CloudFrontOriginAccessIdentityList](#cloudfrontoriginaccessidentitylist)

### ListDistributionsByWebACLIdRequest
* ListDistributionsByWebACLIdRequest `object`: The request to list distributions that are associated with a specified AWS WAF web ACL. 

### ListDistributionsByWebACLIdResult
* ListDistributionsByWebACLIdResult `object`: The response to a request to list the distributions that are associated with a specified AWS WAF web ACL. 
  * DistributionList [DistributionList](#distributionlist)

### ListDistributionsRequest
* ListDistributionsRequest `object`: The request to list your distributions. 

### ListDistributionsResult
* ListDistributionsResult `object`: The returned result of the corresponding request. 
  * DistributionList [DistributionList](#distributionlist)

### ListInvalidationsRequest
* ListInvalidationsRequest `object`: The request to list invalidations. 

### ListInvalidationsResult
* ListInvalidationsResult `object`: The returned result of the corresponding request. 
  * InvalidationList [InvalidationList](#invalidationlist)

### ListStreamingDistributionsRequest
* ListStreamingDistributionsRequest `object`: The request to list your streaming distributions. 

### ListStreamingDistributionsResult
* ListStreamingDistributionsResult `object`: The returned result of the corresponding request. 
  * StreamingDistributionList [StreamingDistributionList](#streamingdistributionlist)

### ListTagsForResourceRequest
* ListTagsForResourceRequest `object`:  The request to list tags for a CloudFront resource.

### ListTagsForResourceResult
* ListTagsForResourceResult `object`:  The returned result of the corresponding request.
  * Tags **required** [Tags](#tags)

### LocationList
* LocationList `array`
  * items [string](#string)

### LoggingConfig
* LoggingConfig `object`: A complex type that controls whether access logs are written for the distribution.
  * Bucket **required** [string](#string)
  * Enabled **required** [boolean](#boolean)
  * IncludeCookies **required** [boolean](#boolean)
  * Prefix **required** [string](#string)

### Method
* Method `string` (values: GET, HEAD, POST, PUT, PATCH, OPTIONS, DELETE)

### MethodsList
* MethodsList `array`
  * items [Method](#method)

### MinimumProtocolVersion
* MinimumProtocolVersion `string` (values: SSLv3, TLSv1, TLSv1_2016, TLSv1.1_2016, TLSv1.2_2018)

### MissingBody
* MissingBody `object`: This operation requires a body. Ensure that the body is present and the <code>Content-Type</code> header is set.
  * Message [string](#string)

### NoSuchCloudFrontOriginAccessIdentity
* NoSuchCloudFrontOriginAccessIdentity `object`: The specified origin access identity does not exist.
  * Message [string](#string)

### NoSuchDistribution
* NoSuchDistribution `object`: The specified distribution does not exist.
  * Message [string](#string)

### NoSuchInvalidation
* NoSuchInvalidation `object`: The specified invalidation does not exist.
  * Message [string](#string)

### NoSuchOrigin
* NoSuchOrigin `object`: No origin exists with the specified <code>Origin Id</code>. 
  * Message [string](#string)

### NoSuchResource
* NoSuchResource `object`
  * Message [string](#string)

### NoSuchStreamingDistribution
* NoSuchStreamingDistribution `object`: The specified streaming distribution does not exist.
  * Message [string](#string)

### Origin
* Origin `object`: <p>A complex type that describes the Amazon S3 bucket or the HTTP server (for example, a web server) from which CloudFront gets your files. You must create at least one origin.</p> <p>For the current limit on the number of origins that you can create for a distribution, see <a href="http://docs.aws.amazon.com/general/latest/gr/aws_service_limits.html#limits_cloudfront">Amazon CloudFront Limits</a> in the <i>AWS General Reference</i>.</p>
  * CustomHeaders [CustomHeaders](#customheaders)
  * CustomOriginConfig [CustomOriginConfig](#customoriginconfig)
  * DomainName **required** [string](#string)
  * Id **required** [string](#string)
  * OriginPath [string](#string)
  * S3OriginConfig [S3OriginConfig](#s3originconfig)

### OriginCustomHeader
* OriginCustomHeader `object`: A complex type that contains <code>HeaderName</code> and <code>HeaderValue</code> elements, if any, for this distribution. 
  * HeaderName **required** [string](#string)
  * HeaderValue **required** [string](#string)

### OriginCustomHeadersList
* OriginCustomHeadersList `array`
  * items [OriginCustomHeader](#origincustomheader)

### OriginList
* OriginList `array`
  * items [Origin](#origin)

### OriginProtocolPolicy
* OriginProtocolPolicy `string` (values: http-only, match-viewer, https-only)

### OriginSslProtocols
* OriginSslProtocols `object`: A complex type that contains information about the SSL/TLS protocols that CloudFront can use when establishing an HTTPS connection with your origin. 
  * Items **required** [SslProtocolsList](#sslprotocolslist)
  * Quantity **required** [integer](#integer)

### Origins
* Origins `object`: A complex type that contains information about origins for this distribution. 
  * Items [OriginList](#originlist)
  * Quantity **required** [integer](#integer)

### PathList
* PathList `array`
  * items [string](#string)

### Paths
* Paths `object`: A complex type that contains information about the objects that you want to invalidate. For more information, see <a href="http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Invalidation.html#invalidation-specifying-objects">Specifying the Objects to Invalidate</a> in the <i>Amazon CloudFront Developer Guide</i>. 
  * Items [PathList](#pathlist)
  * Quantity **required** [integer](#integer)

### PreconditionFailed
* PreconditionFailed `object`: The precondition given in one or more of the request-header fields evaluated to <code>false</code>. 
  * Message [string](#string)

### PriceClass
* PriceClass `string` (values: PriceClass_100, PriceClass_200, PriceClass_All)

### QueryStringCacheKeys
* QueryStringCacheKeys `object`
  * Items [QueryStringCacheKeysList](#querystringcachekeyslist)
  * Quantity **required** [integer](#integer)

### QueryStringCacheKeysList
* QueryStringCacheKeysList `array`
  * items [string](#string)

### ResourceARN
* ResourceARN `string`

### ResourceInUse
* ResourceInUse `object`
  * Message [string](#string)

### Restrictions
* Restrictions `object`: A complex type that identifies ways in which you want to restrict distribution of your content.
  * GeoRestriction **required** [GeoRestriction](#georestriction)

### S3Origin
* S3Origin `object`: A complex type that contains information about the Amazon S3 bucket from which you want CloudFront to get your media files for distribution.
  * DomainName **required** [string](#string)
  * OriginAccessIdentity **required** [string](#string)

### S3OriginConfig
* S3OriginConfig `object`: A complex type that contains information about the Amazon S3 origin. If the origin is a custom origin, use the <code>CustomOriginConfig</code> element instead.
  * OriginAccessIdentity **required** [string](#string)

### SSLSupportMethod
* SSLSupportMethod `string` (values: sni-only, vip)

### Signer
* Signer `object`: A complex type that lists the AWS accounts that were included in the <code>TrustedSigners</code> complex type, as well as their active CloudFront key pair IDs, if any. 
  * AwsAccountNumber [string](#string)
  * KeyPairIds [KeyPairIds](#keypairids)

### SignerList
* SignerList `array`
  * items [Signer](#signer)

### SslProtocol
* SslProtocol `string` (values: SSLv3, TLSv1, TLSv1.1, TLSv1.2)

### SslProtocolsList
* SslProtocolsList `array`
  * items [SslProtocol](#sslprotocol)

### StreamingDistribution
* StreamingDistribution `object`: A streaming distribution. 
  * ARN **required** [string](#string)
  * ActiveTrustedSigners **required** [ActiveTrustedSigners](#activetrustedsigners)
  * DomainName **required** [string](#string)
  * Id **required** [string](#string)
  * LastModifiedTime [timestamp](#timestamp)
  * Status **required** [string](#string)
  * StreamingDistributionConfig **required** [StreamingDistributionConfig](#streamingdistributionconfig)

### StreamingDistributionAlreadyExists
* StreamingDistributionAlreadyExists `object`
  * Message [string](#string)

### StreamingDistributionConfig
* StreamingDistributionConfig `object`: The RTMP distribution's configuration information.
  * Aliases [Aliases](#aliases)
  * CallerReference **required** [string](#string)
  * Comment **required** [string](#string)
  * Enabled **required** [boolean](#boolean)
  * Logging [StreamingLoggingConfig](#streamingloggingconfig)
  * PriceClass [PriceClass](#priceclass)
  * S3Origin **required** [S3Origin](#s3origin)
  * TrustedSigners **required** [TrustedSigners](#trustedsigners)

### StreamingDistributionConfigWithTags
* StreamingDistributionConfigWithTags `object`: A streaming distribution Configuration and a list of tags to be associated with the streaming distribution.
  * StreamingDistributionConfig **required** [StreamingDistributionConfig](#streamingdistributionconfig)
  * Tags **required** [Tags](#tags)

### StreamingDistributionList
* StreamingDistributionList `object`: A streaming distribution list. 
  * IsTruncated **required** [boolean](#boolean)
  * Items [StreamingDistributionSummaryList](#streamingdistributionsummarylist)
  * Marker **required** [string](#string)
  * MaxItems **required** [integer](#integer)
  * NextMarker [string](#string)
  * Quantity **required** [integer](#integer)

### StreamingDistributionNotDisabled
* StreamingDistributionNotDisabled `object`
  * Message [string](#string)

### StreamingDistributionSummary
* StreamingDistributionSummary `object`:  A summary of the information for an Amazon CloudFront streaming distribution.
  * ARN **required** [string](#string)
  * Aliases **required** [Aliases](#aliases)
  * Comment **required** [string](#string)
  * DomainName **required** [string](#string)
  * Enabled **required** [boolean](#boolean)
  * Id **required** [string](#string)
  * LastModifiedTime **required** [timestamp](#timestamp)
  * PriceClass **required** [PriceClass](#priceclass)
  * S3Origin **required** [S3Origin](#s3origin)
  * Status **required** [string](#string)
  * TrustedSigners **required** [TrustedSigners](#trustedsigners)

### StreamingDistributionSummaryList
* StreamingDistributionSummaryList `array`
  * items [StreamingDistributionSummary](#streamingdistributionsummary)

### StreamingLoggingConfig
* StreamingLoggingConfig `object`: A complex type that controls whether access logs are written for this streaming distribution.
  * Bucket **required** [string](#string)
  * Enabled **required** [boolean](#boolean)
  * Prefix **required** [string](#string)

### Tag
* Tag `object`:  A complex type that contains <code>Tag</code> key and <code>Tag</code> value.
  * Key **required** [TagKey](#tagkey)
  * Value [TagValue](#tagvalue)

### TagKey
* TagKey `string`: <p> A string that contains <code>Tag</code> key.</p> <p>The string length should be between 1 and 128 characters. Valid characters include <code>a-z</code>, <code>A-Z</code>, <code>0-9</code>, space, and the special characters <code>_ - . : / = + @</code>.</p>

### TagKeyList
* TagKeyList `array`
  * items [TagKey](#tagkey)

### TagKeys
* TagKeys `object`:  A complex type that contains zero or more <code>Tag</code> elements.
  * Items [TagKeyList](#tagkeylist)

### TagList
* TagList `array`
  * items [Tag](#tag)

### TagResourceRequest
* TagResourceRequest `object`:  The request to add tags to a CloudFront resource.
  * Tags **required** [Tags](#tags)

### TagValue
* TagValue `string`

### Tags
* Tags `object`:  A complex type that contains zero or more <code>Tag</code> elements.
  * Items [TagList](#taglist)

### TooManyCacheBehaviors
* TooManyCacheBehaviors `object`: You cannot create more cache behaviors for the distribution.
  * Message [string](#string)

### TooManyCertificates
* TooManyCertificates `object`: You cannot create anymore custom SSL/TLS certificates.
  * Message [string](#string)

### TooManyCloudFrontOriginAccessIdentities
* TooManyCloudFrontOriginAccessIdentities `object`: Processing your request would cause you to exceed the maximum number of origin access identities allowed.
  * Message [string](#string)

### TooManyCookieNamesInWhiteList
* TooManyCookieNamesInWhiteList `object`: Your request contains more cookie names in the whitelist than are allowed per cache behavior.
  * Message [string](#string)

### TooManyDistributionCNAMEs
* TooManyDistributionCNAMEs `object`: Your request contains more CNAMEs than are allowed per distribution.
  * Message [string](#string)

### TooManyDistributions
* TooManyDistributions `object`: Processing your request would cause you to exceed the maximum number of distributions allowed.
  * Message [string](#string)

### TooManyDistributionsWithLambdaAssociations
* TooManyDistributionsWithLambdaAssociations `object`: Processing your request would cause the maximum number of distributions with Lambda function associations per owner to be exceeded.
  * Message [string](#string)

### TooManyHeadersInForwardedValues
* TooManyHeadersInForwardedValues `object`
  * Message [string](#string)

### TooManyInvalidationsInProgress
* TooManyInvalidationsInProgress `object`: You have exceeded the maximum number of allowable InProgress invalidation batch requests, or invalidation objects.
  * Message [string](#string)

### TooManyLambdaFunctionAssociations
* TooManyLambdaFunctionAssociations `object`: Your request contains more Lambda function associations than are allowed per distribution.
  * Message [string](#string)

### TooManyOriginCustomHeaders
* TooManyOriginCustomHeaders `object`
  * Message [string](#string)

### TooManyOrigins
* TooManyOrigins `object`: You cannot create more origins for the distribution.
  * Message [string](#string)

### TooManyQueryStringParameters
* TooManyQueryStringParameters `object`
  * Message [string](#string)

### TooManyStreamingDistributionCNAMEs
* TooManyStreamingDistributionCNAMEs `object`
  * Message [string](#string)

### TooManyStreamingDistributions
* TooManyStreamingDistributions `object`: Processing your request would cause you to exceed the maximum number of streaming distributions allowed.
  * Message [string](#string)

### TooManyTrustedSigners
* TooManyTrustedSigners `object`: Your request contains more trusted signers than are allowed per distribution.
  * Message [string](#string)

### TrustedSignerDoesNotExist
* TrustedSignerDoesNotExist `object`: One or more of your trusted signers don't exist.
  * Message [string](#string)

### TrustedSigners
* TrustedSigners `object`: <p>A complex type that specifies the AWS accounts, if any, that you want to allow to create signed URLs for private content.</p> <p>If you want to require signed URLs in requests for objects in the target origin that match the <code>PathPattern</code> for this cache behavior, specify <code>true</code> for <code>Enabled</code>, and specify the applicable values for <code>Quantity</code> and <code>Items</code>. For more information, see <a href="http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">Serving Private Content through CloudFront</a> in the <i>Amazon Amazon CloudFront Developer Guide</i>.</p> <p>If you don't want to require signed URLs in requests for objects that match <code>PathPattern</code>, specify <code>false</code> for <code>Enabled</code> and <code>0</code> for <code>Quantity</code>. Omit <code>Items</code>.</p> <p>To add, change, or remove one or more trusted signers, change <code>Enabled</code> to <code>true</code> (if it's currently <code>false</code>), change <code>Quantity</code> as applicable, and specify all of the trusted signers that you want to include in the updated distribution.</p> <p>For more information about updating the distribution configuration, see <a>DistributionConfig</a> .</p>
  * Enabled **required** [boolean](#boolean)
  * Items [AwsAccountNumberList](#awsaccountnumberlist)
  * Quantity **required** [integer](#integer)

### UntagResourceRequest
* UntagResourceRequest `object`:  The request to remove tags from a CloudFront resource.
  * TagKeys **required** [TagKeys](#tagkeys)

### UpdateCloudFrontOriginAccessIdentityRequest
* UpdateCloudFrontOriginAccessIdentityRequest `object`: The request to update an origin access identity.
  * CloudFrontOriginAccessIdentityConfig **required** [CloudFrontOriginAccessIdentityConfig](#cloudfrontoriginaccessidentityconfig)

### UpdateCloudFrontOriginAccessIdentityResult
* UpdateCloudFrontOriginAccessIdentityResult `object`: The returned result of the corresponding request.
  * CloudFrontOriginAccessIdentity [CloudFrontOriginAccessIdentity](#cloudfrontoriginaccessidentity)

### UpdateDistributionRequest
* UpdateDistributionRequest `object`: The request to update a distribution.
  * DistributionConfig **required** [DistributionConfig](#distributionconfig)

### UpdateDistributionResult
* UpdateDistributionResult `object`: The returned result of the corresponding request.
  * Distribution [Distribution](#distribution)

### UpdateStreamingDistributionRequest
* UpdateStreamingDistributionRequest `object`: The request to update a streaming distribution.
  * StreamingDistributionConfig **required** [StreamingDistributionConfig](#streamingdistributionconfig)

### UpdateStreamingDistributionResult
* UpdateStreamingDistributionResult `object`: The returned result of the corresponding request.
  * StreamingDistribution [StreamingDistribution](#streamingdistribution)

### ViewerCertificate
* ViewerCertificate `object`: <p>A complex type that specifies the following:</p> <ul> <li> <p>Whether you want viewers to use HTTP or HTTPS to request your objects.</p> </li> <li> <p>If you want viewers to use HTTPS, whether you're using an alternate domain name such as <code>example.com</code> or the CloudFront domain name for your distribution, such as <code>d111111abcdef8.cloudfront.net</code>.</p> </li> <li> <p>If you're using an alternate domain name, whether AWS Certificate Manager (ACM) provided the certificate, or you purchased a certificate from a third-party certificate authority and imported it into ACM or uploaded it to the IAM certificate store.</p> </li> </ul> <p>You must specify only one of the following values: </p> <ul> <li> <p> <a>ViewerCertificate$ACMCertificateArn</a> </p> </li> <li> <p> <a>ViewerCertificate$IAMCertificateId</a> </p> </li> <li> <p> <a>ViewerCertificate$CloudFrontDefaultCertificate</a> </p> </li> </ul> <p>Don't specify <code>false</code> for <code>CloudFrontDefaultCertificate</code>.</p> <p> <b>If you want viewers to use HTTP instead of HTTPS to request your objects</b>: Specify the following value:</p> <p> <code>&lt;CloudFrontDefaultCertificate&gt;true&lt;CloudFrontDefaultCertificate&gt;</code> </p> <p>In addition, specify <code>allow-all</code> for <code>ViewerProtocolPolicy</code> for all of your cache behaviors.</p> <p> <b>If you want viewers to use HTTPS to request your objects</b>: Choose the type of certificate that you want to use based on whether you're using an alternate domain name for your objects or the CloudFront domain name:</p> <ul> <li> <p> <b>If you're using an alternate domain name, such as example.com</b>: Specify one of the following values, depending on whether ACM provided your certificate or you purchased your certificate from third-party certificate authority:</p> <ul> <li> <p> <code>&lt;ACMCertificateArn&gt;<i>ARN for ACM SSL/TLS certificate</i>&lt;ACMCertificateArn&gt;</code> where <code> <i>ARN for ACM SSL/TLS certificate</i> </code> is the ARN for the ACM SSL/TLS certificate that you want to use for this distribution.</p> </li> <li> <p> <code>&lt;IAMCertificateId&gt;<i>IAM certificate ID</i>&lt;IAMCertificateId&gt;</code> where <code> <i>IAM certificate ID</i> </code> is the ID that IAM returned when you added the certificate to the IAM certificate store.</p> </li> </ul> <p>If you specify <code>ACMCertificateArn</code> or <code>IAMCertificateId</code>, you must also specify a value for <code>SSLSupportMethod</code>.</p> <p>If you choose to use an ACM certificate or a certificate in the IAM certificate store, we recommend that you use only an alternate domain name in your object URLs (<code>https://example.com/logo.jpg</code>). If you use the domain name that is associated with your CloudFront distribution (such as <code>https://d111111abcdef8.cloudfront.net/logo.jpg</code>) and the viewer supports <code>SNI</code>, then CloudFront behaves normally. However, if the browser does not support SNI, the user's experience depends on the value that you choose for <code>SSLSupportMethod</code>:</p> <ul> <li> <p> <code>vip</code>: The viewer displays a warning because there is a mismatch between the CloudFront domain name and the domain name in your SSL/TLS certificate.</p> </li> <li> <p> <code>sni-only</code>: CloudFront drops the connection with the browser without returning the object.</p> </li> </ul> </li> <li> <p> <b>If you're using the CloudFront domain name for your distribution, such as <code>d111111abcdef8.cloudfront.net</code> </b>: Specify the following value:</p> <p> <code>&lt;CloudFrontDefaultCertificate&gt;true&lt;CloudFrontDefaultCertificate&gt; </code> </p> </li> </ul> <p>If you want viewers to use HTTPS, you must also specify one of the following values in your cache behaviors:</p> <ul> <li> <p> <code> &lt;ViewerProtocolPolicy&gt;https-only&lt;ViewerProtocolPolicy&gt;</code> </p> </li> <li> <p> <code>&lt;ViewerProtocolPolicy&gt;redirect-to-https&lt;ViewerProtocolPolicy&gt;</code> </p> </li> </ul> <p>You can also optionally require that CloudFront use HTTPS to communicate with your origin by specifying one of the following values for the applicable origins:</p> <ul> <li> <p> <code>&lt;OriginProtocolPolicy&gt;https-only&lt;OriginProtocolPolicy&gt; </code> </p> </li> <li> <p> <code>&lt;OriginProtocolPolicy&gt;match-viewer&lt;OriginProtocolPolicy&gt; </code> </p> </li> </ul> <p>For more information, see <a href="http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/SecureConnections.html#CNAMEsAndHTTPS">Using Alternate Domain Names and HTTPS</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
  * ACMCertificateArn [string](#string)
  * Certificate [string](#string)
  * CertificateSource [CertificateSource](#certificatesource)
  * CloudFrontDefaultCertificate [boolean](#boolean)
  * IAMCertificateId [string](#string)
  * MinimumProtocolVersion [MinimumProtocolVersion](#minimumprotocolversion)
  * SSLSupportMethod [SSLSupportMethod](#sslsupportmethod)

### ViewerProtocolPolicy
* ViewerProtocolPolicy `string` (values: allow-all, https-only, redirect-to-https)

### boolean
* boolean `boolean`

### integer
* integer `integer`

### long
* long `integer`

### string
* string `string`

### timestamp
* timestamp `string`


