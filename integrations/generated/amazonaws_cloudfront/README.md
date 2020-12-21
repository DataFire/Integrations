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

.then(data => {
  console.log(data);
});
```

## Description

<fullname>Amazon CloudFront</fullname> <p>This is the <i>Amazon CloudFront API Reference</i>. This guide is for developers who need detailed information about CloudFront API actions, data types, and errors. For detailed information about CloudFront features, see the <i>Amazon CloudFront Developer Guide</i>.</p>

## Actions

### ListCachePolicies



```js
amazonaws_cloudfront.ListCachePolicies({}, context)
```

#### Input
* input `object`
  * Type `string`
  * Marker `string`
  * MaxItems `string`

#### Output
* output [ListCachePoliciesResult](#listcachepoliciesresult)

### CreateCachePolicy



```js
amazonaws_cloudfront.CreateCachePolicy({
  "CachePolicyConfig": {}
}, context)
```

#### Input
* input `object`
  * CachePolicyConfig **required** `object`: <p>A cache policy configuration.</p> <p>This configuration determines the following:</p> <ul> <li> <p>The values that CloudFront includes in the cache key. These values can include HTTP headers, cookies, and URL query strings. CloudFront uses the cache key to find an object in its cache that it can return to the viewer.</p> </li> <li> <p>The default, minimum, and maximum time to live (TTL) values that you want objects to stay in the CloudFront cache.</p> </li> </ul> <p>The headers, cookies, and query strings that are included in the cache key are automatically included in requests that CloudFront sends to the origin. CloudFront sends a request when it can’t find a valid object in its cache that matches the request’s cache key. If you want to send values to the origin but <i>not</i> include them in the cache key, use <code>OriginRequestPolicy</code>.</p>
    * Comment
    * DefaultTTL
    * MaxTTL
    * MinTTL
    * Name
    * ParametersInCacheKeyAndForwardedToOrigin
      * CookiesConfig **required**
        * CookieBehavior **required**
        * Cookies [CookieNames](#cookienames)
      * EnableAcceptEncodingBrotli
      * EnableAcceptEncodingGzip **required**
      * HeadersConfig **required**
        * HeaderBehavior **required**
        * Headers [Headers](#headers)
      * QueryStringsConfig **required**
        * QueryStringBehavior **required**
        * QueryStrings
          * Items
          * Quantity **required**

#### Output
*Output schema unknown*

### DeleteCachePolicy



```js
amazonaws_cloudfront.DeleteCachePolicy({
  "Id": ""
}, context)
```

#### Input
* input `object`
  * Id **required** `string`
  * If-Match `string`

#### Output
*Output schema unknown*

### GetCachePolicy



```js
amazonaws_cloudfront.GetCachePolicy({
  "Id": ""
}, context)
```

#### Input
* input `object`
  * Id **required** `string`

#### Output
* output [GetCachePolicyResult](#getcachepolicyresult)

### UpdateCachePolicy



```js
amazonaws_cloudfront.UpdateCachePolicy({
  "Id": "",
  "CachePolicyConfig": {}
}, context)
```

#### Input
* input `object`
  * Id **required** `string`
  * If-Match `string`
  * CachePolicyConfig **required** `object`: <p>A cache policy configuration.</p> <p>This configuration determines the following:</p> <ul> <li> <p>The values that CloudFront includes in the cache key. These values can include HTTP headers, cookies, and URL query strings. CloudFront uses the cache key to find an object in its cache that it can return to the viewer.</p> </li> <li> <p>The default, minimum, and maximum time to live (TTL) values that you want objects to stay in the CloudFront cache.</p> </li> </ul> <p>The headers, cookies, and query strings that are included in the cache key are automatically included in requests that CloudFront sends to the origin. CloudFront sends a request when it can’t find a valid object in its cache that matches the request’s cache key. If you want to send values to the origin but <i>not</i> include them in the cache key, use <code>OriginRequestPolicy</code>.</p>
    * Comment
    * DefaultTTL
    * MaxTTL
    * MinTTL
    * Name
    * ParametersInCacheKeyAndForwardedToOrigin
      * CookiesConfig **required**
        * CookieBehavior **required**
        * Cookies [CookieNames](#cookienames)
      * EnableAcceptEncodingBrotli
      * EnableAcceptEncodingGzip **required**
      * HeadersConfig **required**
        * HeaderBehavior **required**
        * Headers [Headers](#headers)
      * QueryStringsConfig **required**
        * QueryStringBehavior **required**
        * QueryStrings
          * Items
          * Quantity **required**

#### Output
* output [UpdateCachePolicyResult](#updatecachepolicyresult)

### GetCachePolicyConfig



```js
amazonaws_cloudfront.GetCachePolicyConfig({
  "Id": ""
}, context)
```

#### Input
* input `object`
  * Id **required** `string`

#### Output
* output [GetCachePolicyConfigResult](#getcachepolicyconfigresult)

### DeleteRealtimeLogConfig



```js
amazonaws_cloudfront.DeleteRealtimeLogConfig({}, context)
```

#### Input
* input `object`
  * ARN `string`: The Amazon Resource Name (ARN) of the real-time log configuration to delete.
  * Name `string`: The name of the real-time log configuration to delete.

#### Output
*Output schema unknown*

### ListDistributions



```js
amazonaws_cloudfront.ListDistributions({}, context)
```

#### Input
* input `object`
  * Marker `string`
  * MaxItems `string`

#### Output
* output [ListDistributionsResult](#listdistributionsresult)

### CreateDistribution



```js
amazonaws_cloudfront.CreateDistribution({
  "DistributionConfig": {}
}, context)
```

#### Input
* input `object`
  * DistributionConfig **required** `object`: A distribution configuration.
    * Aliases
      * Items
        * items
      * Quantity **required**
    * CacheBehaviors
      * Items
        * items
          * AllowedMethods [AllowedMethods](#allowedmethods)
          * CachePolicyId
          * Compress
          * DefaultTTL
          * FieldLevelEncryptionId
          * ForwardedValues
          * LambdaFunctionAssociations
          * MaxTTL
          * MinTTL
          * OriginRequestPolicyId
          * PathPattern **required**
          * RealtimeLogConfigArn
          * SmoothStreaming
          * TargetOriginId **required**
          * TrustedKeyGroups
          * TrustedSigners
          * ViewerProtocolPolicy **required**
      * Quantity **required**
    * CallerReference
    * Comment
    * CustomErrorResponses
      * Items
        * items
          * ErrorCachingMinTTL
          * ErrorCode **required**
          * ResponseCode
          * ResponsePagePath
      * Quantity **required**
    * DefaultCacheBehavior
      * AllowedMethods [AllowedMethods](#allowedmethods)
      * CachePolicyId
      * Compress
      * DefaultTTL
      * FieldLevelEncryptionId
      * ForwardedValues
        * Cookies **required**
          * Forward **required**
          * WhitelistedNames
        * Headers
          * Items
          * Quantity **required**
        * QueryString **required**
        * QueryStringCacheKeys
          * Items
          * Quantity **required**
      * LambdaFunctionAssociations
        * Items
          * items
        * Quantity **required**
      * MaxTTL
      * MinTTL
      * OriginRequestPolicyId
      * RealtimeLogConfigArn
      * SmoothStreaming
      * TargetOriginId **required**
      * TrustedKeyGroups
        * Enabled **required**
        * Items
          * items
        * Quantity **required**
      * TrustedSigners
        * Enabled **required**
        * Items
          * items
        * Quantity **required**
      * ViewerProtocolPolicy **required**
    * DefaultRootObject
    * Enabled
    * HttpVersion
    * IsIPV6Enabled
    * Logging
      * Bucket **required**
      * Enabled **required**
      * IncludeCookies **required**
      * Prefix **required**
    * OriginGroups
      * Items
        * items
          * FailoverCriteria **required**
          * Id **required**
          * Members **required**
      * Quantity **required**
    * Origins
      * Items **required**
        * items
          * ConnectionAttempts
          * ConnectionTimeout
          * CustomHeaders
          * CustomOriginConfig
          * DomainName **required**
          * Id **required**
          * OriginPath
          * OriginShield
          * S3OriginConfig
      * Quantity **required**
    * PriceClass
    * Restrictions
      * GeoRestriction **required**
        * Items
          * items
        * Quantity **required**
        * RestrictionType **required**
    * ViewerCertificate
      * ACMCertificateArn
      * Certificate
      * CertificateSource
      * CloudFrontDefaultCertificate
      * IAMCertificateId
      * MinimumProtocolVersion
      * SSLSupportMethod
    * WebACLId

#### Output
*Output schema unknown*

### CreateDistributionWithTags



```js
amazonaws_cloudfront.CreateDistributionWithTags({
  "WithTags": true,
  "DistributionConfigWithTags": {}
}, context)
```

#### Input
* input `object`
  * WithTags **required** `boolean`
  * DistributionConfigWithTags **required** `object`: A distribution Configuration and a list of tags to be associated with the distribution.
    * DistributionConfig
      * Aliases
        * Items
          * items
        * Quantity **required**
      * CacheBehaviors
        * Items
          * items
        * Quantity **required**
      * CallerReference **required**
      * Comment **required**
      * CustomErrorResponses
        * Items
          * items
        * Quantity **required**
      * DefaultCacheBehavior **required**
        * AllowedMethods [AllowedMethods](#allowedmethods)
        * CachePolicyId
        * Compress
        * DefaultTTL
        * FieldLevelEncryptionId
        * ForwardedValues
          * Cookies **required**
          * Headers
          * QueryString **required**
          * QueryStringCacheKeys
        * LambdaFunctionAssociations
          * Items
          * Quantity **required**
        * MaxTTL
        * MinTTL
        * OriginRequestPolicyId
        * RealtimeLogConfigArn
        * SmoothStreaming
        * TargetOriginId **required**
        * TrustedKeyGroups
          * Enabled **required**
          * Items
          * Quantity **required**
        * TrustedSigners
          * Enabled **required**
          * Items
          * Quantity **required**
        * ViewerProtocolPolicy **required**
      * DefaultRootObject
      * Enabled **required**
      * HttpVersion
      * IsIPV6Enabled
      * Logging
        * Bucket **required**
        * Enabled **required**
        * IncludeCookies **required**
        * Prefix **required**
      * OriginGroups
        * Items
          * items
        * Quantity **required**
      * Origins **required**
        * Items **required**
          * items
        * Quantity **required**
      * PriceClass
      * Restrictions
        * GeoRestriction **required**
          * Items
          * Quantity **required**
          * RestrictionType **required**
      * ViewerCertificate
        * ACMCertificateArn
        * Certificate
        * CertificateSource
        * CloudFrontDefaultCertificate
        * IAMCertificateId
        * MinimumProtocolVersion
        * SSLSupportMethod
      * WebACLId
    * Tags
      * Items
        * items
          * Key **required**
          * Value

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
  * DistributionId **required** `string`
  * Marker `string`
  * MaxItems `string`

#### Output
* output [ListInvalidationsResult](#listinvalidationsresult)

### CreateInvalidation



```js
amazonaws_cloudfront.CreateInvalidation({
  "DistributionId": "",
  "InvalidationBatch": {}
}, context)
```

#### Input
* input `object`
  * DistributionId **required** `string`
  * InvalidationBatch **required** `object`: An invalidation batch.
    * CallerReference
    * Paths
      * Items
        * items
      * Quantity **required**

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
  * If-Match `string`

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
  "DistributionConfig": {}
}, context)
```

#### Input
* input `object`
  * Id **required** `string`
  * If-Match `string`
  * DistributionConfig **required** `object`: A distribution configuration.
    * Aliases
      * Items
        * items
      * Quantity **required**
    * CacheBehaviors
      * Items
        * items
          * AllowedMethods [AllowedMethods](#allowedmethods)
          * CachePolicyId
          * Compress
          * DefaultTTL
          * FieldLevelEncryptionId
          * ForwardedValues
          * LambdaFunctionAssociations
          * MaxTTL
          * MinTTL
          * OriginRequestPolicyId
          * PathPattern **required**
          * RealtimeLogConfigArn
          * SmoothStreaming
          * TargetOriginId **required**
          * TrustedKeyGroups
          * TrustedSigners
          * ViewerProtocolPolicy **required**
      * Quantity **required**
    * CallerReference
    * Comment
    * CustomErrorResponses
      * Items
        * items
          * ErrorCachingMinTTL
          * ErrorCode **required**
          * ResponseCode
          * ResponsePagePath
      * Quantity **required**
    * DefaultCacheBehavior
      * AllowedMethods [AllowedMethods](#allowedmethods)
      * CachePolicyId
      * Compress
      * DefaultTTL
      * FieldLevelEncryptionId
      * ForwardedValues
        * Cookies **required**
          * Forward **required**
          * WhitelistedNames
        * Headers
          * Items
          * Quantity **required**
        * QueryString **required**
        * QueryStringCacheKeys
          * Items
          * Quantity **required**
      * LambdaFunctionAssociations
        * Items
          * items
        * Quantity **required**
      * MaxTTL
      * MinTTL
      * OriginRequestPolicyId
      * RealtimeLogConfigArn
      * SmoothStreaming
      * TargetOriginId **required**
      * TrustedKeyGroups
        * Enabled **required**
        * Items
          * items
        * Quantity **required**
      * TrustedSigners
        * Enabled **required**
        * Items
          * items
        * Quantity **required**
      * ViewerProtocolPolicy **required**
    * DefaultRootObject
    * Enabled
    * HttpVersion
    * IsIPV6Enabled
    * Logging
      * Bucket **required**
      * Enabled **required**
      * IncludeCookies **required**
      * Prefix **required**
    * OriginGroups
      * Items
        * items
          * FailoverCriteria **required**
          * Id **required**
          * Members **required**
      * Quantity **required**
    * Origins
      * Items **required**
        * items
          * ConnectionAttempts
          * ConnectionTimeout
          * CustomHeaders
          * CustomOriginConfig
          * DomainName **required**
          * Id **required**
          * OriginPath
          * OriginShield
          * S3OriginConfig
      * Quantity **required**
    * PriceClass
    * Restrictions
      * GeoRestriction **required**
        * Items
          * items
        * Quantity **required**
        * RestrictionType **required**
    * ViewerCertificate
      * ACMCertificateArn
      * Certificate
      * CertificateSource
      * CloudFrontDefaultCertificate
      * IAMCertificateId
      * MinimumProtocolVersion
      * SSLSupportMethod
    * WebACLId

#### Output
* output [UpdateDistributionResult](#updatedistributionresult)

### DeleteMonitoringSubscription



```js
amazonaws_cloudfront.DeleteMonitoringSubscription({
  "DistributionId": ""
}, context)
```

#### Input
* input `object`
  * DistributionId **required** `string`

#### Output
* output [DeleteMonitoringSubscriptionResult](#deletemonitoringsubscriptionresult)

### GetMonitoringSubscription



```js
amazonaws_cloudfront.GetMonitoringSubscription({
  "DistributionId": ""
}, context)
```

#### Input
* input `object`
  * DistributionId **required** `string`

#### Output
* output [GetMonitoringSubscriptionResult](#getmonitoringsubscriptionresult)

### CreateMonitoringSubscription



```js
amazonaws_cloudfront.CreateMonitoringSubscription({
  "DistributionId": "",
  "MonitoringSubscription": {}
}, context)
```

#### Input
* input `object`
  * DistributionId **required** `string`
  * MonitoringSubscription **required** `object`: A monitoring subscription. This structure contains information about whether additional CloudWatch metrics are enabled for a given CloudFront distribution.
    * RealtimeMetricsSubscriptionConfig
      * RealtimeMetricsSubscriptionStatus **required**

#### Output
* output [CreateMonitoringSubscriptionResult](#createmonitoringsubscriptionresult)

### ListDistributionsByCachePolicyId



```js
amazonaws_cloudfront.ListDistributionsByCachePolicyId({
  "CachePolicyId": ""
}, context)
```

#### Input
* input `object`
  * Marker `string`
  * MaxItems `string`
  * CachePolicyId **required** `string`

#### Output
* output [ListDistributionsByCachePolicyIdResult](#listdistributionsbycachepolicyidresult)

### ListDistributionsByKeyGroup



```js
amazonaws_cloudfront.ListDistributionsByKeyGroup({
  "KeyGroupId": ""
}, context)
```

#### Input
* input `object`
  * Marker `string`
  * MaxItems `string`
  * KeyGroupId **required** `string`

#### Output
* output [ListDistributionsByKeyGroupResult](#listdistributionsbykeygroupresult)

### ListDistributionsByOriginRequestPolicyId



```js
amazonaws_cloudfront.ListDistributionsByOriginRequestPolicyId({
  "OriginRequestPolicyId": ""
}, context)
```

#### Input
* input `object`
  * Marker `string`
  * MaxItems `string`
  * OriginRequestPolicyId **required** `string`

#### Output
* output [ListDistributionsByOriginRequestPolicyIdResult](#listdistributionsbyoriginrequestpolicyidresult)

### ListDistributionsByRealtimeLogConfig



```js
amazonaws_cloudfront.ListDistributionsByRealtimeLogConfig({}, context)
```

#### Input
* input `object`
  * Marker `string`: Use this field when paginating results to indicate where to begin in your list of distributions. The response includes distributions in the list that occur after the marker. To get the next page of the list, set this field’s value to the value of <code>NextMarker</code> from the current page’s response.
  * MaxItems `string`: The maximum number of distributions that you want in the response.
  * RealtimeLogConfigArn `string`: The Amazon Resource Name (ARN) of the real-time log configuration whose associated distributions you want to list.
  * RealtimeLogConfigName `string`: The name of the real-time log configuration whose associated distributions you want to list.

#### Output
* output [ListDistributionsByRealtimeLogConfigResult](#listdistributionsbyrealtimelogconfigresult)

### ListDistributionsByWebACLId



```js
amazonaws_cloudfront.ListDistributionsByWebACLId({
  "WebACLId": ""
}, context)
```

#### Input
* input `object`
  * Marker `string`
  * MaxItems `string`
  * WebACLId **required** `string`

#### Output
* output [ListDistributionsByWebACLIdResult](#listdistributionsbywebaclidresult)

### ListFieldLevelEncryptionConfigs



```js
amazonaws_cloudfront.ListFieldLevelEncryptionConfigs({}, context)
```

#### Input
* input `object`
  * Marker `string`
  * MaxItems `string`

#### Output
* output [ListFieldLevelEncryptionConfigsResult](#listfieldlevelencryptionconfigsresult)

### CreateFieldLevelEncryptionConfig



```js
amazonaws_cloudfront.CreateFieldLevelEncryptionConfig({
  "FieldLevelEncryptionConfig": {}
}, context)
```

#### Input
* input `object`
  * FieldLevelEncryptionConfig **required** `object`: A complex data type that includes the profile configurations specified for field-level encryption. 
    * CallerReference
    * Comment
    * ContentTypeProfileConfig
      * ContentTypeProfiles
        * Items
          * items
        * Quantity **required**
      * ForwardWhenContentTypeIsUnknown **required**
    * QueryArgProfileConfig
      * ForwardWhenQueryArgProfileIsUnknown **required**
      * QueryArgProfiles
        * Items
          * items
        * Quantity **required**

#### Output
*Output schema unknown*

### ListFieldLevelEncryptionProfiles



```js
amazonaws_cloudfront.ListFieldLevelEncryptionProfiles({}, context)
```

#### Input
* input `object`
  * Marker `string`
  * MaxItems `string`

#### Output
* output [ListFieldLevelEncryptionProfilesResult](#listfieldlevelencryptionprofilesresult)

### CreateFieldLevelEncryptionProfile



```js
amazonaws_cloudfront.CreateFieldLevelEncryptionProfile({
  "FieldLevelEncryptionProfileConfig": {}
}, context)
```

#### Input
* input `object`
  * FieldLevelEncryptionProfileConfig **required** `object`: A complex data type of profiles for the field-level encryption.
    * CallerReference
    * Comment
    * EncryptionEntities
      * Items
        * items
          * FieldPatterns **required**
          * ProviderId **required**
          * PublicKeyId **required**
      * Quantity **required**
    * Name

#### Output
*Output schema unknown*

### DeleteFieldLevelEncryptionProfile



```js
amazonaws_cloudfront.DeleteFieldLevelEncryptionProfile({
  "Id": ""
}, context)
```

#### Input
* input `object`
  * Id **required** `string`
  * If-Match `string`

#### Output
*Output schema unknown*

### GetFieldLevelEncryptionProfile



```js
amazonaws_cloudfront.GetFieldLevelEncryptionProfile({
  "Id": ""
}, context)
```

#### Input
* input `object`
  * Id **required** `string`

#### Output
* output [GetFieldLevelEncryptionProfileResult](#getfieldlevelencryptionprofileresult)

### GetFieldLevelEncryptionProfileConfig



```js
amazonaws_cloudfront.GetFieldLevelEncryptionProfileConfig({
  "Id": ""
}, context)
```

#### Input
* input `object`
  * Id **required** `string`

#### Output
* output [GetFieldLevelEncryptionProfileConfigResult](#getfieldlevelencryptionprofileconfigresult)

### UpdateFieldLevelEncryptionProfile



```js
amazonaws_cloudfront.UpdateFieldLevelEncryptionProfile({
  "Id": "",
  "FieldLevelEncryptionProfileConfig": {}
}, context)
```

#### Input
* input `object`
  * Id **required** `string`
  * If-Match `string`
  * FieldLevelEncryptionProfileConfig **required** `object`: A complex data type of profiles for the field-level encryption.
    * CallerReference
    * Comment
    * EncryptionEntities
      * Items
        * items
          * FieldPatterns **required**
          * ProviderId **required**
          * PublicKeyId **required**
      * Quantity **required**
    * Name

#### Output
* output [UpdateFieldLevelEncryptionProfileResult](#updatefieldlevelencryptionprofileresult)

### DeleteFieldLevelEncryptionConfig



```js
amazonaws_cloudfront.DeleteFieldLevelEncryptionConfig({
  "Id": ""
}, context)
```

#### Input
* input `object`
  * Id **required** `string`
  * If-Match `string`

#### Output
*Output schema unknown*

### GetFieldLevelEncryption



```js
amazonaws_cloudfront.GetFieldLevelEncryption({
  "Id": ""
}, context)
```

#### Input
* input `object`
  * Id **required** `string`

#### Output
* output [GetFieldLevelEncryptionResult](#getfieldlevelencryptionresult)

### GetFieldLevelEncryptionConfig



```js
amazonaws_cloudfront.GetFieldLevelEncryptionConfig({
  "Id": ""
}, context)
```

#### Input
* input `object`
  * Id **required** `string`

#### Output
* output [GetFieldLevelEncryptionConfigResult](#getfieldlevelencryptionconfigresult)

### UpdateFieldLevelEncryptionConfig



```js
amazonaws_cloudfront.UpdateFieldLevelEncryptionConfig({
  "Id": "",
  "FieldLevelEncryptionConfig": {}
}, context)
```

#### Input
* input `object`
  * Id **required** `string`
  * If-Match `string`
  * FieldLevelEncryptionConfig **required** `object`: A complex data type that includes the profile configurations specified for field-level encryption. 
    * CallerReference
    * Comment
    * ContentTypeProfileConfig
      * ContentTypeProfiles
        * Items
          * items
        * Quantity **required**
      * ForwardWhenContentTypeIsUnknown **required**
    * QueryArgProfileConfig
      * ForwardWhenQueryArgProfileIsUnknown **required**
      * QueryArgProfiles
        * Items
          * items
        * Quantity **required**

#### Output
* output [UpdateFieldLevelEncryptionConfigResult](#updatefieldlevelencryptionconfigresult)

### GetRealtimeLogConfig



```js
amazonaws_cloudfront.GetRealtimeLogConfig({}, context)
```

#### Input
* input `object`
  * ARN `string`: The Amazon Resource Name (ARN) of the real-time log configuration to get.
  * Name `string`: The name of the real-time log configuration to get.

#### Output
* output [GetRealtimeLogConfigResult](#getrealtimelogconfigresult)

### ListKeyGroups



```js
amazonaws_cloudfront.ListKeyGroups({}, context)
```

#### Input
* input `object`
  * Marker `string`
  * MaxItems `string`

#### Output
* output [ListKeyGroupsResult](#listkeygroupsresult)

### CreateKeyGroup



```js
amazonaws_cloudfront.CreateKeyGroup({
  "KeyGroupConfig": {}
}, context)
```

#### Input
* input `object`
  * KeyGroupConfig **required** `object`: <p>A key group configuration.</p> <p>A key group contains a list of public keys that you can use with <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">CloudFront signed URLs and signed cookies</a>.</p>
    * Comment
    * Items
      * items
    * Name

#### Output
*Output schema unknown*

### DeleteKeyGroup



```js
amazonaws_cloudfront.DeleteKeyGroup({
  "Id": ""
}, context)
```

#### Input
* input `object`
  * Id **required** `string`
  * If-Match `string`

#### Output
*Output schema unknown*

### GetKeyGroup



```js
amazonaws_cloudfront.GetKeyGroup({
  "Id": ""
}, context)
```

#### Input
* input `object`
  * Id **required** `string`

#### Output
* output [GetKeyGroupResult](#getkeygroupresult)

### UpdateKeyGroup



```js
amazonaws_cloudfront.UpdateKeyGroup({
  "Id": "",
  "KeyGroupConfig": {}
}, context)
```

#### Input
* input `object`
  * Id **required** `string`
  * If-Match `string`
  * KeyGroupConfig **required** `object`: <p>A key group configuration.</p> <p>A key group contains a list of public keys that you can use with <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">CloudFront signed URLs and signed cookies</a>.</p>
    * Comment
    * Items
      * items
    * Name

#### Output
* output [UpdateKeyGroupResult](#updatekeygroupresult)

### GetKeyGroupConfig



```js
amazonaws_cloudfront.GetKeyGroupConfig({
  "Id": ""
}, context)
```

#### Input
* input `object`
  * Id **required** `string`

#### Output
* output [GetKeyGroupConfigResult](#getkeygroupconfigresult)

### ListCloudFrontOriginAccessIdentities



```js
amazonaws_cloudfront.ListCloudFrontOriginAccessIdentities({}, context)
```

#### Input
* input `object`
  * Marker `string`
  * MaxItems `string`

#### Output
* output [ListCloudFrontOriginAccessIdentitiesResult](#listcloudfrontoriginaccessidentitiesresult)

### CreateCloudFrontOriginAccessIdentity



```js
amazonaws_cloudfront.CreateCloudFrontOriginAccessIdentity({
  "CloudFrontOriginAccessIdentityConfig": {}
}, context)
```

#### Input
* input `object`
  * CloudFrontOriginAccessIdentityConfig **required** `object`: Origin access identity configuration. Send a <code>GET</code> request to the <code>/<i>CloudFront API version</i>/CloudFront/identity ID/config</code> resource. 
    * CallerReference
    * Comment

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
  * If-Match `string`

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
  "CloudFrontOriginAccessIdentityConfig": {}
}, context)
```

#### Input
* input `object`
  * Id **required** `string`
  * If-Match `string`
  * CloudFrontOriginAccessIdentityConfig **required** `object`: Origin access identity configuration. Send a <code>GET</code> request to the <code>/<i>CloudFront API version</i>/CloudFront/identity ID/config</code> resource. 
    * CallerReference
    * Comment

#### Output
* output [UpdateCloudFrontOriginAccessIdentityResult](#updatecloudfrontoriginaccessidentityresult)

### ListOriginRequestPolicies



```js
amazonaws_cloudfront.ListOriginRequestPolicies({}, context)
```

#### Input
* input `object`
  * Type `string`
  * Marker `string`
  * MaxItems `string`

#### Output
* output [ListOriginRequestPoliciesResult](#listoriginrequestpoliciesresult)

### CreateOriginRequestPolicy



```js
amazonaws_cloudfront.CreateOriginRequestPolicy({
  "OriginRequestPolicyConfig": {}
}, context)
```

#### Input
* input `object`
  * OriginRequestPolicyConfig **required** `object`: <p>An origin request policy configuration.</p> <p>This configuration determines the values that CloudFront includes in requests that it sends to the origin. Each request that CloudFront sends to the origin includes the following:</p> <ul> <li> <p>The request body and the URL path (without the domain name) from the viewer request.</p> </li> <li> <p>The headers that CloudFront automatically includes in every origin request, including <code>Host</code>, <code>User-Agent</code>, and <code>X-Amz-Cf-Id</code>.</p> </li> <li> <p>All HTTP headers, cookies, and URL query strings that are specified in the cache policy or the origin request policy. These can include items from the viewer request and, in the case of headers, additional ones that are added by CloudFront.</p> </li> </ul> <p>CloudFront sends a request when it can’t find an object in its cache that matches the request. If you want to send values to the origin and also include them in the cache key, use <code>CachePolicy</code>.</p>
    * Comment
    * CookiesConfig
      * CookieBehavior **required**
      * Cookies [CookieNames](#cookienames)
    * HeadersConfig
      * HeaderBehavior **required**
      * Headers [Headers](#headers)
    * Name
    * QueryStringsConfig
      * QueryStringBehavior **required**
      * QueryStrings
        * Items
          * items
        * Quantity **required**

#### Output
*Output schema unknown*

### DeleteOriginRequestPolicy



```js
amazonaws_cloudfront.DeleteOriginRequestPolicy({
  "Id": ""
}, context)
```

#### Input
* input `object`
  * Id **required** `string`
  * If-Match `string`

#### Output
*Output schema unknown*

### GetOriginRequestPolicy



```js
amazonaws_cloudfront.GetOriginRequestPolicy({
  "Id": ""
}, context)
```

#### Input
* input `object`
  * Id **required** `string`

#### Output
* output [GetOriginRequestPolicyResult](#getoriginrequestpolicyresult)

### UpdateOriginRequestPolicy



```js
amazonaws_cloudfront.UpdateOriginRequestPolicy({
  "Id": "",
  "OriginRequestPolicyConfig": {}
}, context)
```

#### Input
* input `object`
  * Id **required** `string`
  * If-Match `string`
  * OriginRequestPolicyConfig **required** `object`: <p>An origin request policy configuration.</p> <p>This configuration determines the values that CloudFront includes in requests that it sends to the origin. Each request that CloudFront sends to the origin includes the following:</p> <ul> <li> <p>The request body and the URL path (without the domain name) from the viewer request.</p> </li> <li> <p>The headers that CloudFront automatically includes in every origin request, including <code>Host</code>, <code>User-Agent</code>, and <code>X-Amz-Cf-Id</code>.</p> </li> <li> <p>All HTTP headers, cookies, and URL query strings that are specified in the cache policy or the origin request policy. These can include items from the viewer request and, in the case of headers, additional ones that are added by CloudFront.</p> </li> </ul> <p>CloudFront sends a request when it can’t find an object in its cache that matches the request. If you want to send values to the origin and also include them in the cache key, use <code>CachePolicy</code>.</p>
    * Comment
    * CookiesConfig
      * CookieBehavior **required**
      * Cookies [CookieNames](#cookienames)
    * HeadersConfig
      * HeaderBehavior **required**
      * Headers [Headers](#headers)
    * Name
    * QueryStringsConfig
      * QueryStringBehavior **required**
      * QueryStrings
        * Items
          * items
        * Quantity **required**

#### Output
* output [UpdateOriginRequestPolicyResult](#updateoriginrequestpolicyresult)

### GetOriginRequestPolicyConfig



```js
amazonaws_cloudfront.GetOriginRequestPolicyConfig({
  "Id": ""
}, context)
```

#### Input
* input `object`
  * Id **required** `string`

#### Output
* output [GetOriginRequestPolicyConfigResult](#getoriginrequestpolicyconfigresult)

### ListPublicKeys



```js
amazonaws_cloudfront.ListPublicKeys({}, context)
```

#### Input
* input `object`
  * Marker `string`
  * MaxItems `string`

#### Output
* output [ListPublicKeysResult](#listpublickeysresult)

### CreatePublicKey



```js
amazonaws_cloudfront.CreatePublicKey({
  "PublicKeyConfig": {}
}, context)
```

#### Input
* input `object`
  * PublicKeyConfig **required** `object`: Configuration information about a public key that you can use with <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">signed URLs and signed cookies</a>, or with <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/field-level-encryption.html">field-level encryption</a>.
    * CallerReference
    * Comment
    * EncodedKey
    * Name

#### Output
*Output schema unknown*

### DeletePublicKey



```js
amazonaws_cloudfront.DeletePublicKey({
  "Id": ""
}, context)
```

#### Input
* input `object`
  * Id **required** `string`
  * If-Match `string`

#### Output
*Output schema unknown*

### GetPublicKey



```js
amazonaws_cloudfront.GetPublicKey({
  "Id": ""
}, context)
```

#### Input
* input `object`
  * Id **required** `string`

#### Output
* output [GetPublicKeyResult](#getpublickeyresult)

### GetPublicKeyConfig



```js
amazonaws_cloudfront.GetPublicKeyConfig({
  "Id": ""
}, context)
```

#### Input
* input `object`
  * Id **required** `string`

#### Output
* output [GetPublicKeyConfigResult](#getpublickeyconfigresult)

### UpdatePublicKey



```js
amazonaws_cloudfront.UpdatePublicKey({
  "Id": "",
  "PublicKeyConfig": {}
}, context)
```

#### Input
* input `object`
  * Id **required** `string`
  * If-Match `string`
  * PublicKeyConfig **required** `object`: Configuration information about a public key that you can use with <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">signed URLs and signed cookies</a>, or with <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/field-level-encryption.html">field-level encryption</a>.
    * CallerReference
    * Comment
    * EncodedKey
    * Name

#### Output
* output [UpdatePublicKeyResult](#updatepublickeyresult)

### ListRealtimeLogConfigs



```js
amazonaws_cloudfront.ListRealtimeLogConfigs({}, context)
```

#### Input
* input `object`
  * MaxItems `string`
  * Marker `string`

#### Output
* output [ListRealtimeLogConfigsResult](#listrealtimelogconfigsresult)

### CreateRealtimeLogConfig



```js
amazonaws_cloudfront.CreateRealtimeLogConfig({
  "EndPoints": [],
  "Fields": [],
  "Name": "",
  "SamplingRate": 0
}, context)
```

#### Input
* input `object`
  * EndPoints **required** `array`: Contains information about the Amazon Kinesis data stream where you are sending real-time log data.
    * items [EndPoint](#endpoint)
  * Fields **required** `array`: <p>A list of fields to include in each real-time log record.</p> <p>For more information about fields, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/real-time-logs.html#understand-real-time-log-config-fields">Real-time log configuration fields</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
    * items
  * Name **required** `string`: A unique name to identify this real-time log configuration.
  * SamplingRate **required** `integer`: The sampling rate for this real-time log configuration. The sampling rate determines the percentage of viewer requests that are represented in the real-time log data. You must provide an integer between 1 and 100, inclusive.

#### Output
*Output schema unknown*

### UpdateRealtimeLogConfig



```js
amazonaws_cloudfront.UpdateRealtimeLogConfig({}, context)
```

#### Input
* input `object`
  * ARN `string`: The Amazon Resource Name (ARN) for this real-time log configuration.
  * EndPoints `array`: Contains information about the Amazon Kinesis data stream where you are sending real-time log data.
    * items [EndPoint](#endpoint)
  * Fields `array`: <p>A list of fields to include in each real-time log record.</p> <p>For more information about fields, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/real-time-logs.html#understand-real-time-log-config-fields">Real-time log configuration fields</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
    * items
  * Name `string`: The name for this real-time log configuration.
  * SamplingRate `integer`: The sampling rate for this real-time log configuration. The sampling rate determines the percentage of viewer requests that are represented in the real-time log data. You must provide an integer between 1 and 100, inclusive.

#### Output
* output [UpdateRealtimeLogConfigResult](#updaterealtimelogconfigresult)

### ListStreamingDistributions



```js
amazonaws_cloudfront.ListStreamingDistributions({}, context)
```

#### Input
* input `object`
  * Marker `string`
  * MaxItems `string`

#### Output
* output [ListStreamingDistributionsResult](#liststreamingdistributionsresult)

### CreateStreamingDistribution



```js
amazonaws_cloudfront.CreateStreamingDistribution({
  "StreamingDistributionConfig": {}
}, context)
```

#### Input
* input `object`
  * StreamingDistributionConfig **required** `object`: The RTMP distribution's configuration information.
    * Aliases
      * Items
        * items
      * Quantity **required**
    * CallerReference
    * Comment
    * Enabled
    * Logging
      * Bucket **required**
      * Enabled **required**
      * Prefix **required**
    * PriceClass
    * S3Origin
      * DomainName **required**
      * OriginAccessIdentity **required**
    * TrustedSigners
      * Enabled **required**
      * Items
        * items
      * Quantity **required**

#### Output
*Output schema unknown*

### CreateStreamingDistributionWithTags



```js
amazonaws_cloudfront.CreateStreamingDistributionWithTags({
  "WithTags": true,
  "StreamingDistributionConfigWithTags": {}
}, context)
```

#### Input
* input `object`
  * WithTags **required** `boolean`
  * StreamingDistributionConfigWithTags **required** `object`: A streaming distribution Configuration and a list of tags to be associated with the streaming distribution.
    * StreamingDistributionConfig
      * Aliases
        * Items
          * items
        * Quantity **required**
      * CallerReference **required**
      * Comment **required**
      * Enabled **required**
      * Logging
        * Bucket **required**
        * Enabled **required**
        * Prefix **required**
      * PriceClass
      * S3Origin **required**
        * DomainName **required**
        * OriginAccessIdentity **required**
      * TrustedSigners **required**
        * Enabled **required**
        * Items
          * items
        * Quantity **required**
    * Tags
      * Items
        * items
          * Key **required**
          * Value

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
  * If-Match `string`

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
  "StreamingDistributionConfig": {}
}, context)
```

#### Input
* input `object`
  * Id **required** `string`
  * If-Match `string`
  * StreamingDistributionConfig **required** `object`: The RTMP distribution's configuration information.
    * Aliases
      * Items
        * items
      * Quantity **required**
    * CallerReference
    * Comment
    * Enabled
    * Logging
      * Bucket **required**
      * Enabled **required**
      * Prefix **required**
    * PriceClass
    * S3Origin
      * DomainName **required**
      * OriginAccessIdentity **required**
    * TrustedSigners
      * Enabled **required**
      * Items
        * items
      * Quantity **required**

#### Output
* output [UpdateStreamingDistributionResult](#updatestreamingdistributionresult)

### TagResource



```js
amazonaws_cloudfront.TagResource({
  "Resource": "",
  "Operation": "",
  "Tags": {}
}, context)
```

#### Input
* input `object`
  * Resource **required** `string`
  * Operation **required** `string`
  * Tags **required** `object`:  A complex type that contains zero or more <code>Tag</code> elements.
    * Items
      * items
        * Key **required**
        * Value

#### Output
*Output schema unknown*

### UntagResource



```js
amazonaws_cloudfront.UntagResource({
  "Resource": "",
  "Operation": "",
  "TagKeys": {}
}, context)
```

#### Input
* input `object`
  * Resource **required** `string`
  * Operation **required** `string`
  * TagKeys **required** `object`:  A complex type that contains zero or more <code>Tag</code> elements.
    * Items
      * items

#### Output
*Output schema unknown*

### ListTagsForResource



```js
amazonaws_cloudfront.ListTagsForResource({
  "Resource": ""
}, context)
```

#### Input
* input `object`
  * Resource **required** `string`

#### Output
* output [ListTagsForResourceResult](#listtagsforresourceresult)



## Definitions

### AccessDenied


### ActiveTrustedKeyGroups
* ActiveTrustedKeyGroups `object`: A list of key groups, and the public keys in each key group, that CloudFront can use to verify the signatures of signed URLs and signed cookies.
  * Enabled **required**
  * Items
    * items
      * KeyGroupId
      * KeyPairIds [KeyPairIds](#keypairids)
  * Quantity **required**

### ActiveTrustedSigners
* ActiveTrustedSigners `object`: A list of AWS accounts and the active CloudFront key pairs in each account that CloudFront can use to verify the signatures of signed URLs and signed cookies.
  * Enabled **required**
  * Items
    * items
      * AwsAccountNumber
      * KeyPairIds
        * Items
          * items
        * Quantity **required**
  * Quantity **required**

### AliasICPRecordal
* AliasICPRecordal `object`: <p>AWS services in China customers must file for an Internet Content Provider (ICP) recordal if they want to serve content publicly on an alternate domain name, also known as a CNAME, that they've added to CloudFront. AliasICPRecordal provides the ICP recordal status for CNAMEs associated with distributions. The status is returned in the CloudFront response; you can't configure it yourself.</p> <p>For more information about ICP recordals, see <a href="https://docs.amazonaws.cn/en_us/aws/latest/userguide/accounts-and-credentials.html"> Signup, Accounts, and Credentials</a> in <i>Getting Started with AWS services in China</i>.</p>
  * CNAME
  * ICPRecordalStatus

### AliasICPRecordals
* AliasICPRecordals `array`
  * items
    * CNAME
    * ICPRecordalStatus

### AliasList
* AliasList `array`
  * items

### Aliases
* Aliases `object`: A complex type that contains information about CNAMEs (alternate domain names), if any, for this distribution. 
  * Items
    * items
  * Quantity **required**

### AllowedMethods
* AllowedMethods `object`: <p>A complex type that controls which HTTP methods CloudFront processes and forwards to your Amazon S3 bucket or your custom origin. There are three choices:</p> <ul> <li> <p>CloudFront forwards only <code>GET</code> and <code>HEAD</code> requests.</p> </li> <li> <p>CloudFront forwards only <code>GET</code>, <code>HEAD</code>, and <code>OPTIONS</code> requests.</p> </li> <li> <p>CloudFront forwards <code>GET, HEAD, OPTIONS, PUT, PATCH, POST</code>, and <code>DELETE</code> requests.</p> </li> </ul> <p>If you pick the third choice, you may need to restrict access to your Amazon S3 bucket or to your custom origin so users can't perform operations that you don't want them to. For example, you might not want users to have permissions to delete objects from your origin.</p>
  * CachedMethods [CachedMethods](#cachedmethods)
  * Items **required**
    * items
  * Quantity **required**

### AwsAccountNumberList
* AwsAccountNumberList `array`
  * items

### BatchTooLarge


### CNAMEAlreadyExists


### CacheBehavior
* CacheBehavior `object`: <p>A complex type that describes how CloudFront processes requests.</p> <p>You must create at least as many cache behaviors (including the default cache behavior) as you have origins if you want CloudFront to serve objects from all of the origins. Each cache behavior specifies the one origin from which you want CloudFront to get objects. If you have two origins and only the default cache behavior, the default cache behavior will cause CloudFront to get objects from one of the origins, but the other origin is never used.</p> <p>For the current quota (formerly known as limit) on the number of cache behaviors that you can add to a distribution, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-limits.html">Quotas</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> <p>If you don’t want to specify any cache behaviors, include only an empty <code>CacheBehaviors</code> element. Don’t include an empty <code>CacheBehavior</code> element because this is invalid.</p> <p>To delete all cache behaviors in an existing distribution, update the distribution configuration and include only an empty <code>CacheBehaviors</code> element.</p> <p>To add, change, or remove one or more cache behaviors, update the distribution configuration and specify all of the cache behaviors that you want to include in the updated distribution.</p> <p>For more information about cache behaviors, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-web-values-specify.html#DownloadDistValuesCacheBehavior">Cache Behavior Settings</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
  * AllowedMethods [AllowedMethods](#allowedmethods)
  * CachePolicyId
  * Compress
  * DefaultTTL
  * FieldLevelEncryptionId
  * ForwardedValues
    * Cookies **required**
      * Forward **required**
      * WhitelistedNames
        * Items
          * items
        * Quantity **required**
    * Headers
      * Items
        * items
      * Quantity **required**
    * QueryString **required**
    * QueryStringCacheKeys
      * Items
        * items
      * Quantity **required**
  * LambdaFunctionAssociations
    * Items
      * items
        * EventType **required**
        * IncludeBody
        * LambdaFunctionARN **required**
    * Quantity **required**
  * MaxTTL
  * MinTTL
  * OriginRequestPolicyId
  * PathPattern **required**
  * RealtimeLogConfigArn
  * SmoothStreaming
  * TargetOriginId **required**
  * TrustedKeyGroups
    * Enabled **required**
    * Items
      * items
    * Quantity **required**
  * TrustedSigners
    * Enabled **required**
    * Items
      * items
    * Quantity **required**
  * ViewerProtocolPolicy **required**

### CacheBehaviorList
* CacheBehaviorList `array`
  * items
    * AllowedMethods [AllowedMethods](#allowedmethods)
    * CachePolicyId
    * Compress
    * DefaultTTL
    * FieldLevelEncryptionId
    * ForwardedValues
      * Cookies **required**
        * Forward **required**
        * WhitelistedNames
          * Items
          * Quantity **required**
      * Headers
        * Items
          * items
        * Quantity **required**
      * QueryString **required**
      * QueryStringCacheKeys
        * Items
          * items
        * Quantity **required**
    * LambdaFunctionAssociations
      * Items
        * items
          * EventType **required**
          * IncludeBody
          * LambdaFunctionARN **required**
      * Quantity **required**
    * MaxTTL
    * MinTTL
    * OriginRequestPolicyId
    * PathPattern **required**
    * RealtimeLogConfigArn
    * SmoothStreaming
    * TargetOriginId **required**
    * TrustedKeyGroups
      * Enabled **required**
      * Items
        * items
      * Quantity **required**
    * TrustedSigners
      * Enabled **required**
      * Items
        * items
      * Quantity **required**
    * ViewerProtocolPolicy **required**

### CacheBehaviors
* CacheBehaviors `object`: A complex type that contains zero or more <code>CacheBehavior</code> elements. 
  * Items
    * items
      * AllowedMethods [AllowedMethods](#allowedmethods)
      * CachePolicyId
      * Compress
      * DefaultTTL
      * FieldLevelEncryptionId
      * ForwardedValues
        * Cookies **required**
          * Forward **required**
          * WhitelistedNames
        * Headers
          * Items
          * Quantity **required**
        * QueryString **required**
        * QueryStringCacheKeys
          * Items
          * Quantity **required**
      * LambdaFunctionAssociations
        * Items
          * items
        * Quantity **required**
      * MaxTTL
      * MinTTL
      * OriginRequestPolicyId
      * PathPattern **required**
      * RealtimeLogConfigArn
      * SmoothStreaming
      * TargetOriginId **required**
      * TrustedKeyGroups
        * Enabled **required**
        * Items
          * items
        * Quantity **required**
      * TrustedSigners
        * Enabled **required**
        * Items
          * items
        * Quantity **required**
      * ViewerProtocolPolicy **required**
  * Quantity **required**

### CachePolicy
* CachePolicy `object`: <p>A cache policy.</p> <p>When it’s attached to a cache behavior, the cache policy determines the following:</p> <ul> <li> <p>The values that CloudFront includes in the cache key. These values can include HTTP headers, cookies, and URL query strings. CloudFront uses the cache key to find an object in its cache that it can return to the viewer.</p> </li> <li> <p>The default, minimum, and maximum time to live (TTL) values that you want objects to stay in the CloudFront cache.</p> </li> </ul> <p>The headers, cookies, and query strings that are included in the cache key are automatically included in requests that CloudFront sends to the origin. CloudFront sends a request when it can’t find a valid object in its cache that matches the request’s cache key. If you want to send values to the origin but <i>not</i> include them in the cache key, use <code>OriginRequestPolicy</code>.</p>
  * CachePolicyConfig **required**
    * Comment
    * DefaultTTL
    * MaxTTL
    * MinTTL **required**
    * Name **required**
    * ParametersInCacheKeyAndForwardedToOrigin
      * CookiesConfig **required**
        * CookieBehavior **required**
        * Cookies [CookieNames](#cookienames)
      * EnableAcceptEncodingBrotli
      * EnableAcceptEncodingGzip **required**
      * HeadersConfig **required**
        * HeaderBehavior **required**
        * Headers [Headers](#headers)
      * QueryStringsConfig **required**
        * QueryStringBehavior **required**
        * QueryStrings
          * Items
          * Quantity **required**
  * Id **required**
  * LastModifiedTime **required**

### CachePolicyAlreadyExists


### CachePolicyConfig
* CachePolicyConfig `object`: <p>A cache policy configuration.</p> <p>This configuration determines the following:</p> <ul> <li> <p>The values that CloudFront includes in the cache key. These values can include HTTP headers, cookies, and URL query strings. CloudFront uses the cache key to find an object in its cache that it can return to the viewer.</p> </li> <li> <p>The default, minimum, and maximum time to live (TTL) values that you want objects to stay in the CloudFront cache.</p> </li> </ul> <p>The headers, cookies, and query strings that are included in the cache key are automatically included in requests that CloudFront sends to the origin. CloudFront sends a request when it can’t find a valid object in its cache that matches the request’s cache key. If you want to send values to the origin but <i>not</i> include them in the cache key, use <code>OriginRequestPolicy</code>.</p>
  * Comment
  * DefaultTTL
  * MaxTTL
  * MinTTL **required**
  * Name **required**
  * ParametersInCacheKeyAndForwardedToOrigin
    * CookiesConfig **required**
      * CookieBehavior **required**
      * Cookies [CookieNames](#cookienames)
    * EnableAcceptEncodingBrotli
    * EnableAcceptEncodingGzip **required**
    * HeadersConfig **required**
      * HeaderBehavior **required**
      * Headers [Headers](#headers)
    * QueryStringsConfig **required**
      * QueryStringBehavior **required**
      * QueryStrings
        * Items
          * items
        * Quantity **required**

### CachePolicyCookieBehavior
* CachePolicyCookieBehavior `string` (values: none, whitelist, allExcept, all)

### CachePolicyCookiesConfig
* CachePolicyCookiesConfig `object`: An object that determines whether any cookies in viewer requests (and if so, which cookies) are included in the cache key and automatically included in requests that CloudFront sends to the origin.
  * CookieBehavior **required**
  * Cookies [CookieNames](#cookienames)

### CachePolicyHeaderBehavior
* CachePolicyHeaderBehavior `string` (values: none, whitelist)

### CachePolicyHeadersConfig
* CachePolicyHeadersConfig `object`: An object that determines whether any HTTP headers (and if so, which headers) are included in the cache key and automatically included in requests that CloudFront sends to the origin.
  * HeaderBehavior **required**
  * Headers [Headers](#headers)

### CachePolicyInUse


### CachePolicyList
* CachePolicyList `object`: A list of cache policies.
  * Items
    * items
      * CachePolicy **required**
        * CachePolicyConfig **required**
          * Comment
          * DefaultTTL
          * MaxTTL
          * MinTTL **required**
          * Name **required**
          * ParametersInCacheKeyAndForwardedToOrigin
        * Id **required**
        * LastModifiedTime **required**
      * Type **required**
  * MaxItems **required**
  * NextMarker
  * Quantity **required**

### CachePolicyQueryStringBehavior
* CachePolicyQueryStringBehavior `string` (values: none, whitelist, allExcept, all)

### CachePolicyQueryStringsConfig
* CachePolicyQueryStringsConfig `object`: An object that determines whether any URL query strings in viewer requests (and if so, which query strings) are included in the cache key and automatically included in requests that CloudFront sends to the origin.
  * QueryStringBehavior **required**
  * QueryStrings
    * Items
      * items
    * Quantity **required**

### CachePolicySummary
* CachePolicySummary `object`: Contains a cache policy.
  * CachePolicy **required**
    * CachePolicyConfig **required**
      * Comment
      * DefaultTTL
      * MaxTTL
      * MinTTL **required**
      * Name **required**
      * ParametersInCacheKeyAndForwardedToOrigin
        * CookiesConfig **required**
          * CookieBehavior **required**
          * Cookies [CookieNames](#cookienames)
        * EnableAcceptEncodingBrotli
        * EnableAcceptEncodingGzip **required**
        * HeadersConfig **required**
          * HeaderBehavior **required**
          * Headers [Headers](#headers)
        * QueryStringsConfig **required**
          * QueryStringBehavior **required**
          * QueryStrings
    * Id **required**
    * LastModifiedTime **required**
  * Type **required**

### CachePolicySummaryList
* CachePolicySummaryList `array`
  * items
    * CachePolicy **required**
      * CachePolicyConfig **required**
        * Comment
        * DefaultTTL
        * MaxTTL
        * MinTTL **required**
        * Name **required**
        * ParametersInCacheKeyAndForwardedToOrigin
          * CookiesConfig **required**
          * EnableAcceptEncodingBrotli
          * EnableAcceptEncodingGzip **required**
          * HeadersConfig **required**
          * QueryStringsConfig **required**
      * Id **required**
      * LastModifiedTime **required**
    * Type **required**

### CachePolicyType
* CachePolicyType `string` (values: managed, custom)

### CachedMethods
* CachedMethods `object`: <p>A complex type that controls whether CloudFront caches the response to requests using the specified HTTP methods. There are two choices:</p> <ul> <li> <p>CloudFront caches responses to <code>GET</code> and <code>HEAD</code> requests.</p> </li> <li> <p>CloudFront caches responses to <code>GET</code>, <code>HEAD</code>, and <code>OPTIONS</code> requests.</p> </li> </ul> <p>If you pick the second choice for your Amazon S3 Origin, you may need to forward Access-Control-Request-Method, Access-Control-Request-Headers, and Origin headers for the responses to be cached correctly. </p>
  * Items **required**
    * items
  * Quantity **required**

### CannotChangeImmutablePublicKeyFields


### CertificateSource
* CertificateSource `string` (values: cloudfront, iam, acm)

### CloudFrontOriginAccessIdentity
* CloudFrontOriginAccessIdentity `object`: CloudFront origin access identity.
  * CloudFrontOriginAccessIdentityConfig
    * CallerReference **required**
    * Comment **required**
  * Id **required**
  * S3CanonicalUserId **required**

### CloudFrontOriginAccessIdentityAlreadyExists


### CloudFrontOriginAccessIdentityConfig
* CloudFrontOriginAccessIdentityConfig `object`: Origin access identity configuration. Send a <code>GET</code> request to the <code>/<i>CloudFront API version</i>/CloudFront/identity ID/config</code> resource. 
  * CallerReference **required**
  * Comment **required**

### CloudFrontOriginAccessIdentityInUse


### CloudFrontOriginAccessIdentityList
* CloudFrontOriginAccessIdentityList `object`: Lists the origin access identities for CloudFront.Send a <code>GET</code> request to the <code>/<i>CloudFront API version</i>/origin-access-identity/cloudfront</code> resource. The response includes a <code>CloudFrontOriginAccessIdentityList</code> element with zero or more <code>CloudFrontOriginAccessIdentitySummary</code> child elements. By default, your entire list of origin access identities is returned in one single page. If the list is long, you can paginate it using the <code>MaxItems</code> and <code>Marker</code> parameters.
  * IsTruncated **required**
  * Items
    * items
      * Comment **required**
      * Id **required**
      * S3CanonicalUserId **required**
  * Marker **required**
  * MaxItems **required**
  * NextMarker
  * Quantity **required**

### CloudFrontOriginAccessIdentitySummary
* CloudFrontOriginAccessIdentitySummary `object`: Summary of the information about a CloudFront origin access identity.
  * Comment **required**
  * Id **required**
  * S3CanonicalUserId **required**

### CloudFrontOriginAccessIdentitySummaryList
* CloudFrontOriginAccessIdentitySummaryList `array`
  * items
    * Comment **required**
    * Id **required**
    * S3CanonicalUserId **required**

### CommentType
* CommentType `string`

### ContentTypeProfile
* ContentTypeProfile `object`: A field-level encryption content type profile. 
  * ContentType **required**
  * Format **required**
  * ProfileId

### ContentTypeProfileConfig
* ContentTypeProfileConfig `object`: The configuration for a field-level encryption content type-profile mapping. 
  * ContentTypeProfiles
    * Items
      * items
        * ContentType **required**
        * Format **required**
        * ProfileId
    * Quantity **required**
  * ForwardWhenContentTypeIsUnknown **required**

### ContentTypeProfileList
* ContentTypeProfileList `array`
  * items
    * ContentType **required**
    * Format **required**
    * ProfileId

### ContentTypeProfiles
* ContentTypeProfiles `object`: Field-level encryption content type-profile. 
  * Items
    * items
      * ContentType **required**
      * Format **required**
      * ProfileId
  * Quantity **required**

### CookieNameList
* CookieNameList `array`
  * items

### CookieNames
* CookieNames `object`: Contains a list of cookie names.
  * Items
    * items
  * Quantity **required**

### CookiePreference
* CookiePreference `object`: <p>This field is deprecated. We recommend that you use a cache policy or an origin request policy instead of this field.</p> <p>If you want to include cookies in the cache key, use <code>CookiesConfig</code> in a cache policy. See <code>CachePolicy</code>.</p> <p>If you want to send cookies to the origin but not include them in the cache key, use <code>CookiesConfig</code> in an origin request policy. See <code>OriginRequestPolicy</code>.</p> <p>A complex type that specifies whether you want CloudFront to forward cookies to the origin and, if so, which ones. For more information about forwarding cookies to the origin, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Cookies.html">Caching Content Based on Cookies</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
  * Forward **required**
  * WhitelistedNames
    * Items
      * items
    * Quantity **required**

### CreateCachePolicyRequest
* CreateCachePolicyRequest `object`
  * CachePolicyConfig **required**
    * Comment
    * DefaultTTL
    * MaxTTL
    * MinTTL **required**
    * Name **required**
    * ParametersInCacheKeyAndForwardedToOrigin
      * CookiesConfig **required**
        * CookieBehavior **required**
        * Cookies [CookieNames](#cookienames)
      * EnableAcceptEncodingBrotli
      * EnableAcceptEncodingGzip **required**
      * HeadersConfig **required**
        * HeaderBehavior **required**
        * Headers [Headers](#headers)
      * QueryStringsConfig **required**
        * QueryStringBehavior **required**
        * QueryStrings
          * Items
          * Quantity **required**

### CreateCachePolicyResult
* CreateCachePolicyResult `object`
  * CachePolicy
    * CachePolicyConfig **required**
      * Comment
      * DefaultTTL
      * MaxTTL
      * MinTTL **required**
      * Name **required**
      * ParametersInCacheKeyAndForwardedToOrigin
        * CookiesConfig **required**
          * CookieBehavior **required**
          * Cookies [CookieNames](#cookienames)
        * EnableAcceptEncodingBrotli
        * EnableAcceptEncodingGzip **required**
        * HeadersConfig **required**
          * HeaderBehavior **required**
          * Headers [Headers](#headers)
        * QueryStringsConfig **required**
          * QueryStringBehavior **required**
          * QueryStrings
    * Id **required**
    * LastModifiedTime **required**

### CreateCloudFrontOriginAccessIdentityRequest
* CreateCloudFrontOriginAccessIdentityRequest `object`: The request to create a new origin access identity (OAI). An origin access identity is a special CloudFront user that you can associate with Amazon S3 origins, so that you can secure all or just some of your Amazon S3 content. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-restricting-access-to-s3.html"> Restricting Access to Amazon S3 Content by Using an Origin Access Identity</a> in the <i>Amazon CloudFront Developer Guide</i>. 
  * CloudFrontOriginAccessIdentityConfig **required**
    * CallerReference **required**
    * Comment **required**

### CreateCloudFrontOriginAccessIdentityResult
* CreateCloudFrontOriginAccessIdentityResult `object`: The returned result of the corresponding request.
  * CloudFrontOriginAccessIdentity
    * CloudFrontOriginAccessIdentityConfig
      * CallerReference **required**
      * Comment **required**
    * Id **required**
    * S3CanonicalUserId **required**

### CreateDistributionRequest
* CreateDistributionRequest `object`: The request to create a new distribution.
  * DistributionConfig **required**
    * Aliases
      * Items
        * items
      * Quantity **required**
    * CacheBehaviors
      * Items
        * items
          * AllowedMethods [AllowedMethods](#allowedmethods)
          * CachePolicyId
          * Compress
          * DefaultTTL
          * FieldLevelEncryptionId
          * ForwardedValues
          * LambdaFunctionAssociations
          * MaxTTL
          * MinTTL
          * OriginRequestPolicyId
          * PathPattern **required**
          * RealtimeLogConfigArn
          * SmoothStreaming
          * TargetOriginId **required**
          * TrustedKeyGroups
          * TrustedSigners
          * ViewerProtocolPolicy **required**
      * Quantity **required**
    * CallerReference **required**
    * Comment **required**
    * CustomErrorResponses
      * Items
        * items
          * ErrorCachingMinTTL
          * ErrorCode **required**
          * ResponseCode
          * ResponsePagePath
      * Quantity **required**
    * DefaultCacheBehavior **required**
      * AllowedMethods [AllowedMethods](#allowedmethods)
      * CachePolicyId
      * Compress
      * DefaultTTL
      * FieldLevelEncryptionId
      * ForwardedValues
        * Cookies **required**
          * Forward **required**
          * WhitelistedNames
        * Headers
          * Items
          * Quantity **required**
        * QueryString **required**
        * QueryStringCacheKeys
          * Items
          * Quantity **required**
      * LambdaFunctionAssociations
        * Items
          * items
        * Quantity **required**
      * MaxTTL
      * MinTTL
      * OriginRequestPolicyId
      * RealtimeLogConfigArn
      * SmoothStreaming
      * TargetOriginId **required**
      * TrustedKeyGroups
        * Enabled **required**
        * Items
          * items
        * Quantity **required**
      * TrustedSigners
        * Enabled **required**
        * Items
          * items
        * Quantity **required**
      * ViewerProtocolPolicy **required**
    * DefaultRootObject
    * Enabled **required**
    * HttpVersion
    * IsIPV6Enabled
    * Logging
      * Bucket **required**
      * Enabled **required**
      * IncludeCookies **required**
      * Prefix **required**
    * OriginGroups
      * Items
        * items
          * FailoverCriteria **required**
          * Id **required**
          * Members **required**
      * Quantity **required**
    * Origins **required**
      * Items **required**
        * items
          * ConnectionAttempts
          * ConnectionTimeout
          * CustomHeaders
          * CustomOriginConfig
          * DomainName **required**
          * Id **required**
          * OriginPath
          * OriginShield
          * S3OriginConfig
      * Quantity **required**
    * PriceClass
    * Restrictions
      * GeoRestriction **required**
        * Items
          * items
        * Quantity **required**
        * RestrictionType **required**
    * ViewerCertificate
      * ACMCertificateArn
      * Certificate
      * CertificateSource
      * CloudFrontDefaultCertificate
      * IAMCertificateId
      * MinimumProtocolVersion
      * SSLSupportMethod
    * WebACLId

### CreateDistributionResult
* CreateDistributionResult `object`: The returned result of the corresponding request.
  * Distribution
    * ARN **required**
    * ActiveTrustedKeyGroups
      * Enabled **required**
      * Items
        * items
          * KeyGroupId
          * KeyPairIds [KeyPairIds](#keypairids)
      * Quantity **required**
    * ActiveTrustedSigners
      * Enabled **required**
      * Items
        * items
          * AwsAccountNumber
          * KeyPairIds
      * Quantity **required**
    * AliasICPRecordals
      * items
        * CNAME
        * ICPRecordalStatus
    * DistributionConfig **required**
      * Aliases
        * Items
          * items
        * Quantity **required**
      * CacheBehaviors
        * Items
          * items
        * Quantity **required**
      * CallerReference **required**
      * Comment **required**
      * CustomErrorResponses
        * Items
          * items
        * Quantity **required**
      * DefaultCacheBehavior **required**
        * AllowedMethods [AllowedMethods](#allowedmethods)
        * CachePolicyId
        * Compress
        * DefaultTTL
        * FieldLevelEncryptionId
        * ForwardedValues
          * Cookies **required**
          * Headers
          * QueryString **required**
          * QueryStringCacheKeys
        * LambdaFunctionAssociations
          * Items
          * Quantity **required**
        * MaxTTL
        * MinTTL
        * OriginRequestPolicyId
        * RealtimeLogConfigArn
        * SmoothStreaming
        * TargetOriginId **required**
        * TrustedKeyGroups
          * Enabled **required**
          * Items
          * Quantity **required**
        * TrustedSigners
          * Enabled **required**
          * Items
          * Quantity **required**
        * ViewerProtocolPolicy **required**
      * DefaultRootObject
      * Enabled **required**
      * HttpVersion
      * IsIPV6Enabled
      * Logging
        * Bucket **required**
        * Enabled **required**
        * IncludeCookies **required**
        * Prefix **required**
      * OriginGroups
        * Items
          * items
        * Quantity **required**
      * Origins **required**
        * Items **required**
          * items
        * Quantity **required**
      * PriceClass
      * Restrictions
        * GeoRestriction **required**
          * Items
          * Quantity **required**
          * RestrictionType **required**
      * ViewerCertificate
        * ACMCertificateArn
        * Certificate
        * CertificateSource
        * CloudFrontDefaultCertificate
        * IAMCertificateId
        * MinimumProtocolVersion
        * SSLSupportMethod
      * WebACLId
    * DomainName **required**
    * Id **required**
    * InProgressInvalidationBatches **required**
    * LastModifiedTime **required**
    * Status **required**

### CreateDistributionWithTagsRequest
* CreateDistributionWithTagsRequest `object`: The request to create a new distribution with tags. 
  * DistributionConfigWithTags **required**
    * DistributionConfig **required**
      * Aliases
        * Items
          * items
        * Quantity **required**
      * CacheBehaviors
        * Items
          * items
        * Quantity **required**
      * CallerReference **required**
      * Comment **required**
      * CustomErrorResponses
        * Items
          * items
        * Quantity **required**
      * DefaultCacheBehavior **required**
        * AllowedMethods [AllowedMethods](#allowedmethods)
        * CachePolicyId
        * Compress
        * DefaultTTL
        * FieldLevelEncryptionId
        * ForwardedValues
          * Cookies **required**
          * Headers
          * QueryString **required**
          * QueryStringCacheKeys
        * LambdaFunctionAssociations
          * Items
          * Quantity **required**
        * MaxTTL
        * MinTTL
        * OriginRequestPolicyId
        * RealtimeLogConfigArn
        * SmoothStreaming
        * TargetOriginId **required**
        * TrustedKeyGroups
          * Enabled **required**
          * Items
          * Quantity **required**
        * TrustedSigners
          * Enabled **required**
          * Items
          * Quantity **required**
        * ViewerProtocolPolicy **required**
      * DefaultRootObject
      * Enabled **required**
      * HttpVersion
      * IsIPV6Enabled
      * Logging
        * Bucket **required**
        * Enabled **required**
        * IncludeCookies **required**
        * Prefix **required**
      * OriginGroups
        * Items
          * items
        * Quantity **required**
      * Origins **required**
        * Items **required**
          * items
        * Quantity **required**
      * PriceClass
      * Restrictions
        * GeoRestriction **required**
          * Items
          * Quantity **required**
          * RestrictionType **required**
      * ViewerCertificate
        * ACMCertificateArn
        * Certificate
        * CertificateSource
        * CloudFrontDefaultCertificate
        * IAMCertificateId
        * MinimumProtocolVersion
        * SSLSupportMethod
      * WebACLId
    * Tags **required**
      * Items
        * items
          * Key **required**
          * Value

### CreateDistributionWithTagsResult
* CreateDistributionWithTagsResult `object`: The returned result of the corresponding request. 
  * Distribution
    * ARN **required**
    * ActiveTrustedKeyGroups
      * Enabled **required**
      * Items
        * items
          * KeyGroupId
          * KeyPairIds [KeyPairIds](#keypairids)
      * Quantity **required**
    * ActiveTrustedSigners
      * Enabled **required**
      * Items
        * items
          * AwsAccountNumber
          * KeyPairIds
      * Quantity **required**
    * AliasICPRecordals
      * items
        * CNAME
        * ICPRecordalStatus
    * DistributionConfig **required**
      * Aliases
        * Items
          * items
        * Quantity **required**
      * CacheBehaviors
        * Items
          * items
        * Quantity **required**
      * CallerReference **required**
      * Comment **required**
      * CustomErrorResponses
        * Items
          * items
        * Quantity **required**
      * DefaultCacheBehavior **required**
        * AllowedMethods [AllowedMethods](#allowedmethods)
        * CachePolicyId
        * Compress
        * DefaultTTL
        * FieldLevelEncryptionId
        * ForwardedValues
          * Cookies **required**
          * Headers
          * QueryString **required**
          * QueryStringCacheKeys
        * LambdaFunctionAssociations
          * Items
          * Quantity **required**
        * MaxTTL
        * MinTTL
        * OriginRequestPolicyId
        * RealtimeLogConfigArn
        * SmoothStreaming
        * TargetOriginId **required**
        * TrustedKeyGroups
          * Enabled **required**
          * Items
          * Quantity **required**
        * TrustedSigners
          * Enabled **required**
          * Items
          * Quantity **required**
        * ViewerProtocolPolicy **required**
      * DefaultRootObject
      * Enabled **required**
      * HttpVersion
      * IsIPV6Enabled
      * Logging
        * Bucket **required**
        * Enabled **required**
        * IncludeCookies **required**
        * Prefix **required**
      * OriginGroups
        * Items
          * items
        * Quantity **required**
      * Origins **required**
        * Items **required**
          * items
        * Quantity **required**
      * PriceClass
      * Restrictions
        * GeoRestriction **required**
          * Items
          * Quantity **required**
          * RestrictionType **required**
      * ViewerCertificate
        * ACMCertificateArn
        * Certificate
        * CertificateSource
        * CloudFrontDefaultCertificate
        * IAMCertificateId
        * MinimumProtocolVersion
        * SSLSupportMethod
      * WebACLId
    * DomainName **required**
    * Id **required**
    * InProgressInvalidationBatches **required**
    * LastModifiedTime **required**
    * Status **required**

### CreateFieldLevelEncryptionConfigRequest
* CreateFieldLevelEncryptionConfigRequest `object`
  * FieldLevelEncryptionConfig **required**
    * CallerReference **required**
    * Comment
    * ContentTypeProfileConfig
      * ContentTypeProfiles
        * Items
          * items
        * Quantity **required**
      * ForwardWhenContentTypeIsUnknown **required**
    * QueryArgProfileConfig
      * ForwardWhenQueryArgProfileIsUnknown **required**
      * QueryArgProfiles
        * Items
          * items
        * Quantity **required**

### CreateFieldLevelEncryptionConfigResult
* CreateFieldLevelEncryptionConfigResult `object`
  * FieldLevelEncryption
    * FieldLevelEncryptionConfig **required**
      * CallerReference **required**
      * Comment
      * ContentTypeProfileConfig
        * ContentTypeProfiles
          * Items
          * Quantity **required**
        * ForwardWhenContentTypeIsUnknown **required**
      * QueryArgProfileConfig
        * ForwardWhenQueryArgProfileIsUnknown **required**
        * QueryArgProfiles
          * Items
          * Quantity **required**
    * Id **required**
    * LastModifiedTime **required**

### CreateFieldLevelEncryptionProfileRequest
* CreateFieldLevelEncryptionProfileRequest `object`
  * FieldLevelEncryptionProfileConfig **required**
    * CallerReference **required**
    * Comment
    * EncryptionEntities **required**
      * Items
        * items
          * FieldPatterns **required**
          * ProviderId **required**
          * PublicKeyId **required**
      * Quantity **required**
    * Name **required**

### CreateFieldLevelEncryptionProfileResult
* CreateFieldLevelEncryptionProfileResult `object`
  * FieldLevelEncryptionProfile
    * FieldLevelEncryptionProfileConfig **required**
      * CallerReference **required**
      * Comment
      * EncryptionEntities **required**
        * Items
          * items
        * Quantity **required**
      * Name **required**
    * Id **required**
    * LastModifiedTime **required**

### CreateInvalidationRequest
* CreateInvalidationRequest `object`: The request to create an invalidation.
  * InvalidationBatch **required**
    * CallerReference **required**
    * Paths **required**
      * Items
        * items
      * Quantity **required**

### CreateInvalidationResult
* CreateInvalidationResult `object`: The returned result of the corresponding request.
  * Invalidation
    * CreateTime **required**
    * Id **required**
    * InvalidationBatch **required**
      * CallerReference **required**
      * Paths **required**
        * Items
          * items
        * Quantity **required**
    * Status **required**

### CreateKeyGroupRequest
* CreateKeyGroupRequest `object`
  * KeyGroupConfig **required**
    * Comment
    * Items **required**
      * items
    * Name **required**

### CreateKeyGroupResult
* CreateKeyGroupResult `object`
  * KeyGroup
    * Id **required**
    * KeyGroupConfig **required**
      * Comment
      * Items **required**
        * items
      * Name **required**
    * LastModifiedTime **required**

### CreateMonitoringSubscriptionRequest
* CreateMonitoringSubscriptionRequest `object`
  * MonitoringSubscription **required**
    * RealtimeMetricsSubscriptionConfig
      * RealtimeMetricsSubscriptionStatus **required**

### CreateMonitoringSubscriptionResult
* CreateMonitoringSubscriptionResult `object`
  * MonitoringSubscription
    * RealtimeMetricsSubscriptionConfig
      * RealtimeMetricsSubscriptionStatus **required**

### CreateOriginRequestPolicyRequest
* CreateOriginRequestPolicyRequest `object`
  * OriginRequestPolicyConfig **required**
    * Comment
    * CookiesConfig **required**
      * CookieBehavior **required**
      * Cookies [CookieNames](#cookienames)
    * HeadersConfig **required**
      * HeaderBehavior **required**
      * Headers [Headers](#headers)
    * Name **required**
    * QueryStringsConfig **required**
      * QueryStringBehavior **required**
      * QueryStrings
        * Items
          * items
        * Quantity **required**

### CreateOriginRequestPolicyResult
* CreateOriginRequestPolicyResult `object`
  * OriginRequestPolicy
    * Id **required**
    * LastModifiedTime **required**
    * OriginRequestPolicyConfig **required**
      * Comment
      * CookiesConfig **required**
        * CookieBehavior **required**
        * Cookies [CookieNames](#cookienames)
      * HeadersConfig **required**
        * HeaderBehavior **required**
        * Headers [Headers](#headers)
      * Name **required**
      * QueryStringsConfig **required**
        * QueryStringBehavior **required**
        * QueryStrings
          * Items
          * Quantity **required**

### CreatePublicKeyRequest
* CreatePublicKeyRequest `object`
  * PublicKeyConfig **required**
    * CallerReference **required**
    * Comment
    * EncodedKey **required**
    * Name **required**

### CreatePublicKeyResult
* CreatePublicKeyResult `object`
  * PublicKey
    * CreatedTime **required**
    * Id **required**
    * PublicKeyConfig **required**
      * CallerReference **required**
      * Comment
      * EncodedKey **required**
      * Name **required**

### CreateRealtimeLogConfigRequest
* CreateRealtimeLogConfigRequest `object`
  * EndPoints **required**
    * items [EndPoint](#endpoint)
  * Fields **required**
    * items
  * Name **required**
  * SamplingRate **required**

### CreateRealtimeLogConfigResult
* CreateRealtimeLogConfigResult `object`
  * RealtimeLogConfig
    * ARN **required**
    * EndPoints **required**
      * items [EndPoint](#endpoint)
    * Fields **required**
      * items
    * Name **required**
    * SamplingRate **required**

### CreateStreamingDistributionRequest
* CreateStreamingDistributionRequest `object`: The request to create a new streaming distribution.
  * StreamingDistributionConfig **required**
    * Aliases
      * Items
        * items
      * Quantity **required**
    * CallerReference **required**
    * Comment **required**
    * Enabled **required**
    * Logging
      * Bucket **required**
      * Enabled **required**
      * Prefix **required**
    * PriceClass
    * S3Origin **required**
      * DomainName **required**
      * OriginAccessIdentity **required**
    * TrustedSigners **required**
      * Enabled **required**
      * Items
        * items
      * Quantity **required**

### CreateStreamingDistributionResult
* CreateStreamingDistributionResult `object`: The returned result of the corresponding request.
  * StreamingDistribution
    * ARN **required**
    * ActiveTrustedSigners **required**
      * Enabled **required**
      * Items
        * items
          * AwsAccountNumber
          * KeyPairIds
      * Quantity **required**
    * DomainName **required**
    * Id **required**
    * LastModifiedTime
    * Status **required**
    * StreamingDistributionConfig **required**
      * Aliases
        * Items
          * items
        * Quantity **required**
      * CallerReference **required**
      * Comment **required**
      * Enabled **required**
      * Logging
        * Bucket **required**
        * Enabled **required**
        * Prefix **required**
      * PriceClass
      * S3Origin **required**
        * DomainName **required**
        * OriginAccessIdentity **required**
      * TrustedSigners **required**
        * Enabled **required**
        * Items
          * items
        * Quantity **required**

### CreateStreamingDistributionWithTagsRequest
* CreateStreamingDistributionWithTagsRequest `object`: The request to create a new streaming distribution with tags.
  * StreamingDistributionConfigWithTags **required**
    * StreamingDistributionConfig **required**
      * Aliases
        * Items
          * items
        * Quantity **required**
      * CallerReference **required**
      * Comment **required**
      * Enabled **required**
      * Logging
        * Bucket **required**
        * Enabled **required**
        * Prefix **required**
      * PriceClass
      * S3Origin **required**
        * DomainName **required**
        * OriginAccessIdentity **required**
      * TrustedSigners **required**
        * Enabled **required**
        * Items
          * items
        * Quantity **required**
    * Tags **required**
      * Items
        * items
          * Key **required**
          * Value

### CreateStreamingDistributionWithTagsResult
* CreateStreamingDistributionWithTagsResult `object`: The returned result of the corresponding request. 
  * StreamingDistribution
    * ARN **required**
    * ActiveTrustedSigners **required**
      * Enabled **required**
      * Items
        * items
          * AwsAccountNumber
          * KeyPairIds
      * Quantity **required**
    * DomainName **required**
    * Id **required**
    * LastModifiedTime
    * Status **required**
    * StreamingDistributionConfig **required**
      * Aliases
        * Items
          * items
        * Quantity **required**
      * CallerReference **required**
      * Comment **required**
      * Enabled **required**
      * Logging
        * Bucket **required**
        * Enabled **required**
        * Prefix **required**
      * PriceClass
      * S3Origin **required**
        * DomainName **required**
        * OriginAccessIdentity **required**
      * TrustedSigners **required**
        * Enabled **required**
        * Items
          * items
        * Quantity **required**

### CustomErrorResponse
* CustomErrorResponse `object`: <p>A complex type that controls:</p> <ul> <li> <p>Whether CloudFront replaces HTTP status codes in the 4xx and 5xx range with custom error messages before returning the response to the viewer. </p> </li> <li> <p>How long CloudFront caches HTTP status codes in the 4xx and 5xx range.</p> </li> </ul> <p>For more information about custom error pages, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/custom-error-pages.html">Customizing Error Responses</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
  * ErrorCachingMinTTL
  * ErrorCode **required**
  * ResponseCode
  * ResponsePagePath

### CustomErrorResponseList
* CustomErrorResponseList `array`
  * items
    * ErrorCachingMinTTL
    * ErrorCode **required**
    * ResponseCode
    * ResponsePagePath

### CustomErrorResponses
* CustomErrorResponses `object`: <p>A complex type that controls:</p> <ul> <li> <p>Whether CloudFront replaces HTTP status codes in the 4xx and 5xx range with custom error messages before returning the response to the viewer.</p> </li> <li> <p>How long CloudFront caches HTTP status codes in the 4xx and 5xx range.</p> </li> </ul> <p>For more information about custom error pages, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/custom-error-pages.html">Customizing Error Responses</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
  * Items
    * items
      * ErrorCachingMinTTL
      * ErrorCode **required**
      * ResponseCode
      * ResponsePagePath
  * Quantity **required**

### CustomHeaders
* CustomHeaders `object`: A complex type that contains the list of Custom Headers for each origin. 
  * Items
    * items
      * HeaderName **required**
      * HeaderValue **required**
  * Quantity **required**

### CustomOriginConfig
* CustomOriginConfig `object`: A custom origin. A custom origin is any origin that is <i>not</i> an Amazon S3 bucket, with one exception. An Amazon S3 bucket that is <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/WebsiteHosting.html">configured with static website hosting</a> <i>is</i> a custom origin.
  * HTTPPort **required**
  * HTTPSPort **required**
  * OriginKeepaliveTimeout
  * OriginProtocolPolicy **required**
  * OriginReadTimeout
  * OriginSslProtocols
    * Items **required**
      * items
    * Quantity **required**

### DefaultCacheBehavior
* DefaultCacheBehavior `object`: A complex type that describes the default cache behavior if you don’t specify a <code>CacheBehavior</code> element or if request URLs don’t match any of the values of <code>PathPattern</code> in <code>CacheBehavior</code> elements. You must create exactly one default cache behavior.
  * AllowedMethods [AllowedMethods](#allowedmethods)
  * CachePolicyId
  * Compress
  * DefaultTTL
  * FieldLevelEncryptionId
  * ForwardedValues
    * Cookies **required**
      * Forward **required**
      * WhitelistedNames
        * Items
          * items
        * Quantity **required**
    * Headers
      * Items
        * items
      * Quantity **required**
    * QueryString **required**
    * QueryStringCacheKeys
      * Items
        * items
      * Quantity **required**
  * LambdaFunctionAssociations
    * Items
      * items
        * EventType **required**
        * IncludeBody
        * LambdaFunctionARN **required**
    * Quantity **required**
  * MaxTTL
  * MinTTL
  * OriginRequestPolicyId
  * RealtimeLogConfigArn
  * SmoothStreaming
  * TargetOriginId **required**
  * TrustedKeyGroups
    * Enabled **required**
    * Items
      * items
    * Quantity **required**
  * TrustedSigners
    * Enabled **required**
    * Items
      * items
    * Quantity **required**
  * ViewerProtocolPolicy **required**

### DeleteCachePolicyRequest
* DeleteCachePolicyRequest `object`

### DeleteCloudFrontOriginAccessIdentityRequest
* DeleteCloudFrontOriginAccessIdentityRequest `object`: Deletes a origin access identity.

### DeleteDistributionRequest
* DeleteDistributionRequest `object`: <p>This action deletes a web distribution. To delete a web distribution using the CloudFront API, perform the following steps.</p> <p> <b>To delete a web distribution using the CloudFront API:</b> </p> <ol> <li> <p>Disable the web distribution </p> </li> <li> <p>Submit a <code>GET Distribution Config</code> request to get the current configuration and the <code>Etag</code> header for the distribution.</p> </li> <li> <p>Update the XML document that was returned in the response to your <code>GET Distribution Config</code> request to change the value of <code>Enabled</code> to <code>false</code>.</p> </li> <li> <p>Submit a <code>PUT Distribution Config</code> request to update the configuration for your distribution. In the request body, include the XML document that you updated in Step 3. Set the value of the HTTP <code>If-Match</code> header to the value of the <code>ETag</code> header that CloudFront returned when you submitted the <code>GET Distribution Config</code> request in Step 2.</p> </li> <li> <p>Review the response to the <code>PUT Distribution Config</code> request to confirm that the distribution was successfully disabled.</p> </li> <li> <p>Submit a <code>GET Distribution</code> request to confirm that your changes have propagated. When propagation is complete, the value of <code>Status</code> is <code>Deployed</code>.</p> </li> <li> <p>Submit a <code>DELETE Distribution</code> request. Set the value of the HTTP <code>If-Match</code> header to the value of the <code>ETag</code> header that CloudFront returned when you submitted the <code>GET Distribution Config</code> request in Step 6.</p> </li> <li> <p>Review the response to your <code>DELETE Distribution</code> request to confirm that the distribution was successfully deleted.</p> </li> </ol> <p>For information about deleting a distribution using the CloudFront console, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/HowToDeleteDistribution.html">Deleting a Distribution</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>

### DeleteFieldLevelEncryptionConfigRequest
* DeleteFieldLevelEncryptionConfigRequest `object`

### DeleteFieldLevelEncryptionProfileRequest
* DeleteFieldLevelEncryptionProfileRequest `object`

### DeleteKeyGroupRequest
* DeleteKeyGroupRequest `object`

### DeleteMonitoringSubscriptionRequest
* DeleteMonitoringSubscriptionRequest `object`

### DeleteMonitoringSubscriptionResult
* DeleteMonitoringSubscriptionResult `object`

### DeleteOriginRequestPolicyRequest
* DeleteOriginRequestPolicyRequest `object`

### DeletePublicKeyRequest
* DeletePublicKeyRequest `object`

### DeleteRealtimeLogConfigRequest
* DeleteRealtimeLogConfigRequest `object`
  * ARN
  * Name

### DeleteStreamingDistributionRequest
* DeleteStreamingDistributionRequest `object`: The request to delete a streaming distribution.

### Distribution
* Distribution `object`: A distribution tells CloudFront where you want content to be delivered from, and the details about how to track and manage content delivery.
  * ARN **required**
  * ActiveTrustedKeyGroups
    * Enabled **required**
    * Items
      * items
        * KeyGroupId
        * KeyPairIds [KeyPairIds](#keypairids)
    * Quantity **required**
  * ActiveTrustedSigners
    * Enabled **required**
    * Items
      * items
        * AwsAccountNumber
        * KeyPairIds
          * Items
          * Quantity **required**
    * Quantity **required**
  * AliasICPRecordals
    * items
      * CNAME
      * ICPRecordalStatus
  * DistributionConfig **required**
    * Aliases
      * Items
        * items
      * Quantity **required**
    * CacheBehaviors
      * Items
        * items
          * AllowedMethods [AllowedMethods](#allowedmethods)
          * CachePolicyId
          * Compress
          * DefaultTTL
          * FieldLevelEncryptionId
          * ForwardedValues
          * LambdaFunctionAssociations
          * MaxTTL
          * MinTTL
          * OriginRequestPolicyId
          * PathPattern **required**
          * RealtimeLogConfigArn
          * SmoothStreaming
          * TargetOriginId **required**
          * TrustedKeyGroups
          * TrustedSigners
          * ViewerProtocolPolicy **required**
      * Quantity **required**
    * CallerReference **required**
    * Comment **required**
    * CustomErrorResponses
      * Items
        * items
          * ErrorCachingMinTTL
          * ErrorCode **required**
          * ResponseCode
          * ResponsePagePath
      * Quantity **required**
    * DefaultCacheBehavior **required**
      * AllowedMethods [AllowedMethods](#allowedmethods)
      * CachePolicyId
      * Compress
      * DefaultTTL
      * FieldLevelEncryptionId
      * ForwardedValues
        * Cookies **required**
          * Forward **required**
          * WhitelistedNames
        * Headers
          * Items
          * Quantity **required**
        * QueryString **required**
        * QueryStringCacheKeys
          * Items
          * Quantity **required**
      * LambdaFunctionAssociations
        * Items
          * items
        * Quantity **required**
      * MaxTTL
      * MinTTL
      * OriginRequestPolicyId
      * RealtimeLogConfigArn
      * SmoothStreaming
      * TargetOriginId **required**
      * TrustedKeyGroups
        * Enabled **required**
        * Items
          * items
        * Quantity **required**
      * TrustedSigners
        * Enabled **required**
        * Items
          * items
        * Quantity **required**
      * ViewerProtocolPolicy **required**
    * DefaultRootObject
    * Enabled **required**
    * HttpVersion
    * IsIPV6Enabled
    * Logging
      * Bucket **required**
      * Enabled **required**
      * IncludeCookies **required**
      * Prefix **required**
    * OriginGroups
      * Items
        * items
          * FailoverCriteria **required**
          * Id **required**
          * Members **required**
      * Quantity **required**
    * Origins **required**
      * Items **required**
        * items
          * ConnectionAttempts
          * ConnectionTimeout
          * CustomHeaders
          * CustomOriginConfig
          * DomainName **required**
          * Id **required**
          * OriginPath
          * OriginShield
          * S3OriginConfig
      * Quantity **required**
    * PriceClass
    * Restrictions
      * GeoRestriction **required**
        * Items
          * items
        * Quantity **required**
        * RestrictionType **required**
    * ViewerCertificate
      * ACMCertificateArn
      * Certificate
      * CertificateSource
      * CloudFrontDefaultCertificate
      * IAMCertificateId
      * MinimumProtocolVersion
      * SSLSupportMethod
    * WebACLId
  * DomainName **required**
  * Id **required**
  * InProgressInvalidationBatches **required**
  * LastModifiedTime **required**
  * Status **required**

### DistributionAlreadyExists


### DistributionConfig
* DistributionConfig `object`: A distribution configuration.
  * Aliases
    * Items
      * items
    * Quantity **required**
  * CacheBehaviors
    * Items
      * items
        * AllowedMethods [AllowedMethods](#allowedmethods)
        * CachePolicyId
        * Compress
        * DefaultTTL
        * FieldLevelEncryptionId
        * ForwardedValues
          * Cookies **required**
          * Headers
          * QueryString **required**
          * QueryStringCacheKeys
        * LambdaFunctionAssociations
          * Items
          * Quantity **required**
        * MaxTTL
        * MinTTL
        * OriginRequestPolicyId
        * PathPattern **required**
        * RealtimeLogConfigArn
        * SmoothStreaming
        * TargetOriginId **required**
        * TrustedKeyGroups
          * Enabled **required**
          * Items
          * Quantity **required**
        * TrustedSigners
          * Enabled **required**
          * Items
          * Quantity **required**
        * ViewerProtocolPolicy **required**
    * Quantity **required**
  * CallerReference **required**
  * Comment **required**
  * CustomErrorResponses
    * Items
      * items
        * ErrorCachingMinTTL
        * ErrorCode **required**
        * ResponseCode
        * ResponsePagePath
    * Quantity **required**
  * DefaultCacheBehavior **required**
    * AllowedMethods [AllowedMethods](#allowedmethods)
    * CachePolicyId
    * Compress
    * DefaultTTL
    * FieldLevelEncryptionId
    * ForwardedValues
      * Cookies **required**
        * Forward **required**
        * WhitelistedNames
          * Items
          * Quantity **required**
      * Headers
        * Items
          * items
        * Quantity **required**
      * QueryString **required**
      * QueryStringCacheKeys
        * Items
          * items
        * Quantity **required**
    * LambdaFunctionAssociations
      * Items
        * items
          * EventType **required**
          * IncludeBody
          * LambdaFunctionARN **required**
      * Quantity **required**
    * MaxTTL
    * MinTTL
    * OriginRequestPolicyId
    * RealtimeLogConfigArn
    * SmoothStreaming
    * TargetOriginId **required**
    * TrustedKeyGroups
      * Enabled **required**
      * Items
        * items
      * Quantity **required**
    * TrustedSigners
      * Enabled **required**
      * Items
        * items
      * Quantity **required**
    * ViewerProtocolPolicy **required**
  * DefaultRootObject
  * Enabled **required**
  * HttpVersion
  * IsIPV6Enabled
  * Logging
    * Bucket **required**
    * Enabled **required**
    * IncludeCookies **required**
    * Prefix **required**
  * OriginGroups
    * Items
      * items
        * FailoverCriteria **required**
          * StatusCodes **required**
        * Id **required**
        * Members **required**
          * Items **required**
          * Quantity **required**
    * Quantity **required**
  * Origins **required**
    * Items **required**
      * items
        * ConnectionAttempts
        * ConnectionTimeout
        * CustomHeaders
          * Items
          * Quantity **required**
        * CustomOriginConfig
          * HTTPPort **required**
          * HTTPSPort **required**
          * OriginKeepaliveTimeout
          * OriginProtocolPolicy **required**
          * OriginReadTimeout
          * OriginSslProtocols
        * DomainName **required**
        * Id **required**
        * OriginPath
        * OriginShield
          * Enabled **required**
          * OriginShieldRegion
        * S3OriginConfig
          * OriginAccessIdentity **required**
    * Quantity **required**
  * PriceClass
  * Restrictions
    * GeoRestriction **required**
      * Items
        * items
      * Quantity **required**
      * RestrictionType **required**
  * ViewerCertificate
    * ACMCertificateArn
    * Certificate
    * CertificateSource
    * CloudFrontDefaultCertificate
    * IAMCertificateId
    * MinimumProtocolVersion
    * SSLSupportMethod
  * WebACLId

### DistributionConfigWithTags
* DistributionConfigWithTags `object`: A distribution Configuration and a list of tags to be associated with the distribution.
  * DistributionConfig **required**
    * Aliases
      * Items
        * items
      * Quantity **required**
    * CacheBehaviors
      * Items
        * items
          * AllowedMethods [AllowedMethods](#allowedmethods)
          * CachePolicyId
          * Compress
          * DefaultTTL
          * FieldLevelEncryptionId
          * ForwardedValues
          * LambdaFunctionAssociations
          * MaxTTL
          * MinTTL
          * OriginRequestPolicyId
          * PathPattern **required**
          * RealtimeLogConfigArn
          * SmoothStreaming
          * TargetOriginId **required**
          * TrustedKeyGroups
          * TrustedSigners
          * ViewerProtocolPolicy **required**
      * Quantity **required**
    * CallerReference **required**
    * Comment **required**
    * CustomErrorResponses
      * Items
        * items
          * ErrorCachingMinTTL
          * ErrorCode **required**
          * ResponseCode
          * ResponsePagePath
      * Quantity **required**
    * DefaultCacheBehavior **required**
      * AllowedMethods [AllowedMethods](#allowedmethods)
      * CachePolicyId
      * Compress
      * DefaultTTL
      * FieldLevelEncryptionId
      * ForwardedValues
        * Cookies **required**
          * Forward **required**
          * WhitelistedNames
        * Headers
          * Items
          * Quantity **required**
        * QueryString **required**
        * QueryStringCacheKeys
          * Items
          * Quantity **required**
      * LambdaFunctionAssociations
        * Items
          * items
        * Quantity **required**
      * MaxTTL
      * MinTTL
      * OriginRequestPolicyId
      * RealtimeLogConfigArn
      * SmoothStreaming
      * TargetOriginId **required**
      * TrustedKeyGroups
        * Enabled **required**
        * Items
          * items
        * Quantity **required**
      * TrustedSigners
        * Enabled **required**
        * Items
          * items
        * Quantity **required**
      * ViewerProtocolPolicy **required**
    * DefaultRootObject
    * Enabled **required**
    * HttpVersion
    * IsIPV6Enabled
    * Logging
      * Bucket **required**
      * Enabled **required**
      * IncludeCookies **required**
      * Prefix **required**
    * OriginGroups
      * Items
        * items
          * FailoverCriteria **required**
          * Id **required**
          * Members **required**
      * Quantity **required**
    * Origins **required**
      * Items **required**
        * items
          * ConnectionAttempts
          * ConnectionTimeout
          * CustomHeaders
          * CustomOriginConfig
          * DomainName **required**
          * Id **required**
          * OriginPath
          * OriginShield
          * S3OriginConfig
      * Quantity **required**
    * PriceClass
    * Restrictions
      * GeoRestriction **required**
        * Items
          * items
        * Quantity **required**
        * RestrictionType **required**
    * ViewerCertificate
      * ACMCertificateArn
      * Certificate
      * CertificateSource
      * CloudFrontDefaultCertificate
      * IAMCertificateId
      * MinimumProtocolVersion
      * SSLSupportMethod
    * WebACLId
  * Tags **required**
    * Items
      * items
        * Key **required**
        * Value

### DistributionIdList
* DistributionIdList `object`: A list of distribution IDs.
  * IsTruncated **required**
  * Items
    * items
  * Marker **required**
  * MaxItems **required**
  * NextMarker
  * Quantity **required**

### DistributionIdListSummary
* DistributionIdListSummary `array`
  * items

### DistributionList
* DistributionList `object`: A distribution list.
  * IsTruncated **required**
  * Items
    * items
      * ARN **required**
      * AliasICPRecordals
        * items
          * CNAME
          * ICPRecordalStatus
      * Aliases **required**
        * Items
          * items
        * Quantity **required**
      * CacheBehaviors **required**
        * Items
          * items
        * Quantity **required**
      * Comment **required**
      * CustomErrorResponses **required**
        * Items
          * items
        * Quantity **required**
      * DefaultCacheBehavior **required**
        * AllowedMethods [AllowedMethods](#allowedmethods)
        * CachePolicyId
        * Compress
        * DefaultTTL
        * FieldLevelEncryptionId
        * ForwardedValues
          * Cookies **required**
          * Headers
          * QueryString **required**
          * QueryStringCacheKeys
        * LambdaFunctionAssociations
          * Items
          * Quantity **required**
        * MaxTTL
        * MinTTL
        * OriginRequestPolicyId
        * RealtimeLogConfigArn
        * SmoothStreaming
        * TargetOriginId **required**
        * TrustedKeyGroups
          * Enabled **required**
          * Items
          * Quantity **required**
        * TrustedSigners
          * Enabled **required**
          * Items
          * Quantity **required**
        * ViewerProtocolPolicy **required**
      * DomainName **required**
      * Enabled **required**
      * HttpVersion **required**
      * Id **required**
      * IsIPV6Enabled **required**
      * LastModifiedTime **required**
      * OriginGroups
        * Items
          * items
        * Quantity **required**
      * Origins **required**
        * Items **required**
          * items
        * Quantity **required**
      * PriceClass **required**
      * Restrictions **required**
        * GeoRestriction **required**
          * Items
          * Quantity **required**
          * RestrictionType **required**
      * Status **required**
      * ViewerCertificate **required**
        * ACMCertificateArn
        * Certificate
        * CertificateSource
        * CloudFrontDefaultCertificate
        * IAMCertificateId
        * MinimumProtocolVersion
        * SSLSupportMethod
      * WebACLId **required**
  * Marker **required**
  * MaxItems **required**
  * NextMarker
  * Quantity **required**

### DistributionNotDisabled


### DistributionSummary
* DistributionSummary `object`: A summary of the information about a CloudFront distribution.
  * ARN **required**
  * AliasICPRecordals
    * items
      * CNAME
      * ICPRecordalStatus
  * Aliases **required**
    * Items
      * items
    * Quantity **required**
  * CacheBehaviors **required**
    * Items
      * items
        * AllowedMethods [AllowedMethods](#allowedmethods)
        * CachePolicyId
        * Compress
        * DefaultTTL
        * FieldLevelEncryptionId
        * ForwardedValues
          * Cookies **required**
          * Headers
          * QueryString **required**
          * QueryStringCacheKeys
        * LambdaFunctionAssociations
          * Items
          * Quantity **required**
        * MaxTTL
        * MinTTL
        * OriginRequestPolicyId
        * PathPattern **required**
        * RealtimeLogConfigArn
        * SmoothStreaming
        * TargetOriginId **required**
        * TrustedKeyGroups
          * Enabled **required**
          * Items
          * Quantity **required**
        * TrustedSigners
          * Enabled **required**
          * Items
          * Quantity **required**
        * ViewerProtocolPolicy **required**
    * Quantity **required**
  * Comment **required**
  * CustomErrorResponses **required**
    * Items
      * items
        * ErrorCachingMinTTL
        * ErrorCode **required**
        * ResponseCode
        * ResponsePagePath
    * Quantity **required**
  * DefaultCacheBehavior **required**
    * AllowedMethods [AllowedMethods](#allowedmethods)
    * CachePolicyId
    * Compress
    * DefaultTTL
    * FieldLevelEncryptionId
    * ForwardedValues
      * Cookies **required**
        * Forward **required**
        * WhitelistedNames
          * Items
          * Quantity **required**
      * Headers
        * Items
          * items
        * Quantity **required**
      * QueryString **required**
      * QueryStringCacheKeys
        * Items
          * items
        * Quantity **required**
    * LambdaFunctionAssociations
      * Items
        * items
          * EventType **required**
          * IncludeBody
          * LambdaFunctionARN **required**
      * Quantity **required**
    * MaxTTL
    * MinTTL
    * OriginRequestPolicyId
    * RealtimeLogConfigArn
    * SmoothStreaming
    * TargetOriginId **required**
    * TrustedKeyGroups
      * Enabled **required**
      * Items
        * items
      * Quantity **required**
    * TrustedSigners
      * Enabled **required**
      * Items
        * items
      * Quantity **required**
    * ViewerProtocolPolicy **required**
  * DomainName **required**
  * Enabled **required**
  * HttpVersion **required**
  * Id **required**
  * IsIPV6Enabled **required**
  * LastModifiedTime **required**
  * OriginGroups
    * Items
      * items
        * FailoverCriteria **required**
          * StatusCodes **required**
        * Id **required**
        * Members **required**
          * Items **required**
          * Quantity **required**
    * Quantity **required**
  * Origins **required**
    * Items **required**
      * items
        * ConnectionAttempts
        * ConnectionTimeout
        * CustomHeaders
          * Items
          * Quantity **required**
        * CustomOriginConfig
          * HTTPPort **required**
          * HTTPSPort **required**
          * OriginKeepaliveTimeout
          * OriginProtocolPolicy **required**
          * OriginReadTimeout
          * OriginSslProtocols
        * DomainName **required**
        * Id **required**
        * OriginPath
        * OriginShield
          * Enabled **required**
          * OriginShieldRegion
        * S3OriginConfig
          * OriginAccessIdentity **required**
    * Quantity **required**
  * PriceClass **required**
  * Restrictions **required**
    * GeoRestriction **required**
      * Items
        * items
      * Quantity **required**
      * RestrictionType **required**
  * Status **required**
  * ViewerCertificate **required**
    * ACMCertificateArn
    * Certificate
    * CertificateSource
    * CloudFrontDefaultCertificate
    * IAMCertificateId
    * MinimumProtocolVersion
    * SSLSupportMethod
  * WebACLId **required**

### DistributionSummaryList
* DistributionSummaryList `array`
  * items
    * ARN **required**
    * AliasICPRecordals
      * items
        * CNAME
        * ICPRecordalStatus
    * Aliases **required**
      * Items
        * items
      * Quantity **required**
    * CacheBehaviors **required**
      * Items
        * items
          * AllowedMethods [AllowedMethods](#allowedmethods)
          * CachePolicyId
          * Compress
          * DefaultTTL
          * FieldLevelEncryptionId
          * ForwardedValues
          * LambdaFunctionAssociations
          * MaxTTL
          * MinTTL
          * OriginRequestPolicyId
          * PathPattern **required**
          * RealtimeLogConfigArn
          * SmoothStreaming
          * TargetOriginId **required**
          * TrustedKeyGroups
          * TrustedSigners
          * ViewerProtocolPolicy **required**
      * Quantity **required**
    * Comment **required**
    * CustomErrorResponses **required**
      * Items
        * items
          * ErrorCachingMinTTL
          * ErrorCode **required**
          * ResponseCode
          * ResponsePagePath
      * Quantity **required**
    * DefaultCacheBehavior **required**
      * AllowedMethods [AllowedMethods](#allowedmethods)
      * CachePolicyId
      * Compress
      * DefaultTTL
      * FieldLevelEncryptionId
      * ForwardedValues
        * Cookies **required**
          * Forward **required**
          * WhitelistedNames
        * Headers
          * Items
          * Quantity **required**
        * QueryString **required**
        * QueryStringCacheKeys
          * Items
          * Quantity **required**
      * LambdaFunctionAssociations
        * Items
          * items
        * Quantity **required**
      * MaxTTL
      * MinTTL
      * OriginRequestPolicyId
      * RealtimeLogConfigArn
      * SmoothStreaming
      * TargetOriginId **required**
      * TrustedKeyGroups
        * Enabled **required**
        * Items
          * items
        * Quantity **required**
      * TrustedSigners
        * Enabled **required**
        * Items
          * items
        * Quantity **required**
      * ViewerProtocolPolicy **required**
    * DomainName **required**
    * Enabled **required**
    * HttpVersion **required**
    * Id **required**
    * IsIPV6Enabled **required**
    * LastModifiedTime **required**
    * OriginGroups
      * Items
        * items
          * FailoverCriteria **required**
          * Id **required**
          * Members **required**
      * Quantity **required**
    * Origins **required**
      * Items **required**
        * items
          * ConnectionAttempts
          * ConnectionTimeout
          * CustomHeaders
          * CustomOriginConfig
          * DomainName **required**
          * Id **required**
          * OriginPath
          * OriginShield
          * S3OriginConfig
      * Quantity **required**
    * PriceClass **required**
    * Restrictions **required**
      * GeoRestriction **required**
        * Items
          * items
        * Quantity **required**
        * RestrictionType **required**
    * Status **required**
    * ViewerCertificate **required**
      * ACMCertificateArn
      * Certificate
      * CertificateSource
      * CloudFrontDefaultCertificate
      * IAMCertificateId
      * MinimumProtocolVersion
      * SSLSupportMethod
    * WebACLId **required**

### EncryptionEntities
* EncryptionEntities `object`: Complex data type for field-level encryption profiles that includes all of the encryption entities. 
  * Items
    * items
      * FieldPatterns **required**
        * Items
          * items
        * Quantity **required**
      * ProviderId **required**
      * PublicKeyId **required**
  * Quantity **required**

### EncryptionEntity
* EncryptionEntity `object`: Complex data type for field-level encryption profiles that includes the encryption key and field pattern specifications. 
  * FieldPatterns **required**
    * Items
      * items
    * Quantity **required**
  * ProviderId **required**
  * PublicKeyId **required**

### EncryptionEntityList
* EncryptionEntityList `array`
  * items
    * FieldPatterns **required**
      * Items
        * items
      * Quantity **required**
    * ProviderId **required**
    * PublicKeyId **required**

### EndPoint
* EndPoint `object`: Contains information about the Amazon Kinesis data stream where you are sending real-time log data in a real-time log configuration.
  * KinesisStreamConfig
    * RoleARN **required**
    * StreamARN **required**
  * StreamType **required**

### EndPointList
* EndPointList `array`
  * items [EndPoint](#endpoint)

### EventType
* EventType `string` (values: viewer-request, viewer-response, origin-request, origin-response)

### FieldLevelEncryption
* FieldLevelEncryption `object`: A complex data type that includes the profile configurations and other options specified for field-level encryption. 
  * FieldLevelEncryptionConfig **required**
    * CallerReference **required**
    * Comment
    * ContentTypeProfileConfig
      * ContentTypeProfiles
        * Items
          * items
        * Quantity **required**
      * ForwardWhenContentTypeIsUnknown **required**
    * QueryArgProfileConfig
      * ForwardWhenQueryArgProfileIsUnknown **required**
      * QueryArgProfiles
        * Items
          * items
        * Quantity **required**
  * Id **required**
  * LastModifiedTime **required**

### FieldLevelEncryptionConfig
* FieldLevelEncryptionConfig `object`: A complex data type that includes the profile configurations specified for field-level encryption. 
  * CallerReference **required**
  * Comment
  * ContentTypeProfileConfig
    * ContentTypeProfiles
      * Items
        * items
          * ContentType **required**
          * Format **required**
          * ProfileId
      * Quantity **required**
    * ForwardWhenContentTypeIsUnknown **required**
  * QueryArgProfileConfig
    * ForwardWhenQueryArgProfileIsUnknown **required**
    * QueryArgProfiles
      * Items
        * items
          * ProfileId **required**
          * QueryArg **required**
      * Quantity **required**

### FieldLevelEncryptionConfigAlreadyExists


### FieldLevelEncryptionConfigInUse


### FieldLevelEncryptionList
* FieldLevelEncryptionList `object`: List of field-level encrpytion configurations.
  * Items
    * items
      * Comment
      * ContentTypeProfileConfig
        * ContentTypeProfiles
          * Items
          * Quantity **required**
        * ForwardWhenContentTypeIsUnknown **required**
      * Id **required**
      * LastModifiedTime **required**
      * QueryArgProfileConfig
        * ForwardWhenQueryArgProfileIsUnknown **required**
        * QueryArgProfiles
          * Items
          * Quantity **required**
  * MaxItems **required**
  * NextMarker
  * Quantity **required**

### FieldLevelEncryptionProfile
* FieldLevelEncryptionProfile `object`: A complex data type for field-level encryption profiles.
  * FieldLevelEncryptionProfileConfig **required**
    * CallerReference **required**
    * Comment
    * EncryptionEntities **required**
      * Items
        * items
          * FieldPatterns **required**
          * ProviderId **required**
          * PublicKeyId **required**
      * Quantity **required**
    * Name **required**
  * Id **required**
  * LastModifiedTime **required**

### FieldLevelEncryptionProfileAlreadyExists


### FieldLevelEncryptionProfileConfig
* FieldLevelEncryptionProfileConfig `object`: A complex data type of profiles for the field-level encryption.
  * CallerReference **required**
  * Comment
  * EncryptionEntities **required**
    * Items
      * items
        * FieldPatterns **required**
          * Items
          * Quantity **required**
        * ProviderId **required**
        * PublicKeyId **required**
    * Quantity **required**
  * Name **required**

### FieldLevelEncryptionProfileInUse


### FieldLevelEncryptionProfileList
* FieldLevelEncryptionProfileList `object`: List of field-level encryption profiles.
  * Items
    * items
      * Comment
      * EncryptionEntities **required**
        * Items
          * items
        * Quantity **required**
      * Id **required**
      * LastModifiedTime **required**
      * Name **required**
  * MaxItems **required**
  * NextMarker
  * Quantity **required**

### FieldLevelEncryptionProfileSizeExceeded


### FieldLevelEncryptionProfileSummary
* FieldLevelEncryptionProfileSummary `object`: The field-level encryption profile summary.
  * Comment
  * EncryptionEntities **required**
    * Items
      * items
        * FieldPatterns **required**
          * Items
          * Quantity **required**
        * ProviderId **required**
        * PublicKeyId **required**
    * Quantity **required**
  * Id **required**
  * LastModifiedTime **required**
  * Name **required**

### FieldLevelEncryptionProfileSummaryList
* FieldLevelEncryptionProfileSummaryList `array`
  * items
    * Comment
    * EncryptionEntities **required**
      * Items
        * items
          * FieldPatterns **required**
          * ProviderId **required**
          * PublicKeyId **required**
      * Quantity **required**
    * Id **required**
    * LastModifiedTime **required**
    * Name **required**

### FieldLevelEncryptionSummary
* FieldLevelEncryptionSummary `object`: A summary of a field-level encryption item.
  * Comment
  * ContentTypeProfileConfig
    * ContentTypeProfiles
      * Items
        * items
          * ContentType **required**
          * Format **required**
          * ProfileId
      * Quantity **required**
    * ForwardWhenContentTypeIsUnknown **required**
  * Id **required**
  * LastModifiedTime **required**
  * QueryArgProfileConfig
    * ForwardWhenQueryArgProfileIsUnknown **required**
    * QueryArgProfiles
      * Items
        * items
          * ProfileId **required**
          * QueryArg **required**
      * Quantity **required**

### FieldLevelEncryptionSummaryList
* FieldLevelEncryptionSummaryList `array`
  * items
    * Comment
    * ContentTypeProfileConfig
      * ContentTypeProfiles
        * Items
          * items
        * Quantity **required**
      * ForwardWhenContentTypeIsUnknown **required**
    * Id **required**
    * LastModifiedTime **required**
    * QueryArgProfileConfig
      * ForwardWhenQueryArgProfileIsUnknown **required**
      * QueryArgProfiles
        * Items
          * items
        * Quantity **required**

### FieldList
* FieldList `array`
  * items

### FieldPatternList
* FieldPatternList `array`
  * items

### FieldPatterns
* FieldPatterns `object`: A complex data type that includes the field patterns to match for field-level encryption.
  * Items
    * items
  * Quantity **required**

### Format
* Format `string` (values: URLEncoded)

### ForwardedValues
* ForwardedValues `object`: <p>This field is deprecated. We recommend that you use a cache policy or an origin request policy instead of this field.</p> <p>If you want to include values in the cache key, use a cache policy. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-key-create-cache-policy">Creating cache policies</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> <p>If you want to send values to the origin but not include them in the cache key, use an origin request policy. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-origin-requests.html#origin-request-create-origin-request-policy">Creating origin request policies</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> <p>A complex type that specifies how CloudFront handles query strings, cookies, and HTTP headers.</p>
  * Cookies **required**
    * Forward **required**
    * WhitelistedNames
      * Items
        * items
      * Quantity **required**
  * Headers
    * Items
      * items
    * Quantity **required**
  * QueryString **required**
  * QueryStringCacheKeys
    * Items
      * items
    * Quantity **required**

### GeoRestriction
* GeoRestriction `object`: A complex type that controls the countries in which your content is distributed. CloudFront determines the location of your users using <code>MaxMind</code> GeoIP databases. 
  * Items
    * items
  * Quantity **required**
  * RestrictionType **required**

### GeoRestrictionType
* GeoRestrictionType `string` (values: blacklist, whitelist, none)

### GetCachePolicyConfigRequest
* GetCachePolicyConfigRequest `object`

### GetCachePolicyConfigResult
* GetCachePolicyConfigResult `object`
  * CachePolicyConfig
    * Comment
    * DefaultTTL
    * MaxTTL
    * MinTTL **required**
    * Name **required**
    * ParametersInCacheKeyAndForwardedToOrigin
      * CookiesConfig **required**
        * CookieBehavior **required**
        * Cookies [CookieNames](#cookienames)
      * EnableAcceptEncodingBrotli
      * EnableAcceptEncodingGzip **required**
      * HeadersConfig **required**
        * HeaderBehavior **required**
        * Headers [Headers](#headers)
      * QueryStringsConfig **required**
        * QueryStringBehavior **required**
        * QueryStrings
          * Items
          * Quantity **required**

### GetCachePolicyRequest
* GetCachePolicyRequest `object`

### GetCachePolicyResult
* GetCachePolicyResult `object`
  * CachePolicy
    * CachePolicyConfig **required**
      * Comment
      * DefaultTTL
      * MaxTTL
      * MinTTL **required**
      * Name **required**
      * ParametersInCacheKeyAndForwardedToOrigin
        * CookiesConfig **required**
          * CookieBehavior **required**
          * Cookies [CookieNames](#cookienames)
        * EnableAcceptEncodingBrotli
        * EnableAcceptEncodingGzip **required**
        * HeadersConfig **required**
          * HeaderBehavior **required**
          * Headers [Headers](#headers)
        * QueryStringsConfig **required**
          * QueryStringBehavior **required**
          * QueryStrings
    * Id **required**
    * LastModifiedTime **required**

### GetCloudFrontOriginAccessIdentityConfigRequest
* GetCloudFrontOriginAccessIdentityConfigRequest `object`: The origin access identity's configuration information. For more information, see <a href="https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_CloudFrontOriginAccessIdentityConfig.html">CloudFrontOriginAccessIdentityConfig</a>.

### GetCloudFrontOriginAccessIdentityConfigResult
* GetCloudFrontOriginAccessIdentityConfigResult `object`: The returned result of the corresponding request.
  * CloudFrontOriginAccessIdentityConfig
    * CallerReference **required**
    * Comment **required**

### GetCloudFrontOriginAccessIdentityRequest
* GetCloudFrontOriginAccessIdentityRequest `object`: The request to get an origin access identity's information.

### GetCloudFrontOriginAccessIdentityResult
* GetCloudFrontOriginAccessIdentityResult `object`: The returned result of the corresponding request.
  * CloudFrontOriginAccessIdentity
    * CloudFrontOriginAccessIdentityConfig
      * CallerReference **required**
      * Comment **required**
    * Id **required**
    * S3CanonicalUserId **required**

### GetDistributionConfigRequest
* GetDistributionConfigRequest `object`: The request to get a distribution configuration.

### GetDistributionConfigResult
* GetDistributionConfigResult `object`: The returned result of the corresponding request.
  * DistributionConfig
    * Aliases
      * Items
        * items
      * Quantity **required**
    * CacheBehaviors
      * Items
        * items
          * AllowedMethods [AllowedMethods](#allowedmethods)
          * CachePolicyId
          * Compress
          * DefaultTTL
          * FieldLevelEncryptionId
          * ForwardedValues
          * LambdaFunctionAssociations
          * MaxTTL
          * MinTTL
          * OriginRequestPolicyId
          * PathPattern **required**
          * RealtimeLogConfigArn
          * SmoothStreaming
          * TargetOriginId **required**
          * TrustedKeyGroups
          * TrustedSigners
          * ViewerProtocolPolicy **required**
      * Quantity **required**
    * CallerReference **required**
    * Comment **required**
    * CustomErrorResponses
      * Items
        * items
          * ErrorCachingMinTTL
          * ErrorCode **required**
          * ResponseCode
          * ResponsePagePath
      * Quantity **required**
    * DefaultCacheBehavior **required**
      * AllowedMethods [AllowedMethods](#allowedmethods)
      * CachePolicyId
      * Compress
      * DefaultTTL
      * FieldLevelEncryptionId
      * ForwardedValues
        * Cookies **required**
          * Forward **required**
          * WhitelistedNames
        * Headers
          * Items
          * Quantity **required**
        * QueryString **required**
        * QueryStringCacheKeys
          * Items
          * Quantity **required**
      * LambdaFunctionAssociations
        * Items
          * items
        * Quantity **required**
      * MaxTTL
      * MinTTL
      * OriginRequestPolicyId
      * RealtimeLogConfigArn
      * SmoothStreaming
      * TargetOriginId **required**
      * TrustedKeyGroups
        * Enabled **required**
        * Items
          * items
        * Quantity **required**
      * TrustedSigners
        * Enabled **required**
        * Items
          * items
        * Quantity **required**
      * ViewerProtocolPolicy **required**
    * DefaultRootObject
    * Enabled **required**
    * HttpVersion
    * IsIPV6Enabled
    * Logging
      * Bucket **required**
      * Enabled **required**
      * IncludeCookies **required**
      * Prefix **required**
    * OriginGroups
      * Items
        * items
          * FailoverCriteria **required**
          * Id **required**
          * Members **required**
      * Quantity **required**
    * Origins **required**
      * Items **required**
        * items
          * ConnectionAttempts
          * ConnectionTimeout
          * CustomHeaders
          * CustomOriginConfig
          * DomainName **required**
          * Id **required**
          * OriginPath
          * OriginShield
          * S3OriginConfig
      * Quantity **required**
    * PriceClass
    * Restrictions
      * GeoRestriction **required**
        * Items
          * items
        * Quantity **required**
        * RestrictionType **required**
    * ViewerCertificate
      * ACMCertificateArn
      * Certificate
      * CertificateSource
      * CloudFrontDefaultCertificate
      * IAMCertificateId
      * MinimumProtocolVersion
      * SSLSupportMethod
    * WebACLId

### GetDistributionRequest
* GetDistributionRequest `object`: The request to get a distribution's information.

### GetDistributionResult
* GetDistributionResult `object`: The returned result of the corresponding request.
  * Distribution
    * ARN **required**
    * ActiveTrustedKeyGroups
      * Enabled **required**
      * Items
        * items
          * KeyGroupId
          * KeyPairIds [KeyPairIds](#keypairids)
      * Quantity **required**
    * ActiveTrustedSigners
      * Enabled **required**
      * Items
        * items
          * AwsAccountNumber
          * KeyPairIds
      * Quantity **required**
    * AliasICPRecordals
      * items
        * CNAME
        * ICPRecordalStatus
    * DistributionConfig **required**
      * Aliases
        * Items
          * items
        * Quantity **required**
      * CacheBehaviors
        * Items
          * items
        * Quantity **required**
      * CallerReference **required**
      * Comment **required**
      * CustomErrorResponses
        * Items
          * items
        * Quantity **required**
      * DefaultCacheBehavior **required**
        * AllowedMethods [AllowedMethods](#allowedmethods)
        * CachePolicyId
        * Compress
        * DefaultTTL
        * FieldLevelEncryptionId
        * ForwardedValues
          * Cookies **required**
          * Headers
          * QueryString **required**
          * QueryStringCacheKeys
        * LambdaFunctionAssociations
          * Items
          * Quantity **required**
        * MaxTTL
        * MinTTL
        * OriginRequestPolicyId
        * RealtimeLogConfigArn
        * SmoothStreaming
        * TargetOriginId **required**
        * TrustedKeyGroups
          * Enabled **required**
          * Items
          * Quantity **required**
        * TrustedSigners
          * Enabled **required**
          * Items
          * Quantity **required**
        * ViewerProtocolPolicy **required**
      * DefaultRootObject
      * Enabled **required**
      * HttpVersion
      * IsIPV6Enabled
      * Logging
        * Bucket **required**
        * Enabled **required**
        * IncludeCookies **required**
        * Prefix **required**
      * OriginGroups
        * Items
          * items
        * Quantity **required**
      * Origins **required**
        * Items **required**
          * items
        * Quantity **required**
      * PriceClass
      * Restrictions
        * GeoRestriction **required**
          * Items
          * Quantity **required**
          * RestrictionType **required**
      * ViewerCertificate
        * ACMCertificateArn
        * Certificate
        * CertificateSource
        * CloudFrontDefaultCertificate
        * IAMCertificateId
        * MinimumProtocolVersion
        * SSLSupportMethod
      * WebACLId
    * DomainName **required**
    * Id **required**
    * InProgressInvalidationBatches **required**
    * LastModifiedTime **required**
    * Status **required**

### GetFieldLevelEncryptionConfigRequest
* GetFieldLevelEncryptionConfigRequest `object`

### GetFieldLevelEncryptionConfigResult
* GetFieldLevelEncryptionConfigResult `object`
  * FieldLevelEncryptionConfig
    * CallerReference **required**
    * Comment
    * ContentTypeProfileConfig
      * ContentTypeProfiles
        * Items
          * items
        * Quantity **required**
      * ForwardWhenContentTypeIsUnknown **required**
    * QueryArgProfileConfig
      * ForwardWhenQueryArgProfileIsUnknown **required**
      * QueryArgProfiles
        * Items
          * items
        * Quantity **required**

### GetFieldLevelEncryptionProfileConfigRequest
* GetFieldLevelEncryptionProfileConfigRequest `object`

### GetFieldLevelEncryptionProfileConfigResult
* GetFieldLevelEncryptionProfileConfigResult `object`
  * FieldLevelEncryptionProfileConfig
    * CallerReference **required**
    * Comment
    * EncryptionEntities **required**
      * Items
        * items
          * FieldPatterns **required**
          * ProviderId **required**
          * PublicKeyId **required**
      * Quantity **required**
    * Name **required**

### GetFieldLevelEncryptionProfileRequest
* GetFieldLevelEncryptionProfileRequest `object`

### GetFieldLevelEncryptionProfileResult
* GetFieldLevelEncryptionProfileResult `object`
  * FieldLevelEncryptionProfile
    * FieldLevelEncryptionProfileConfig **required**
      * CallerReference **required**
      * Comment
      * EncryptionEntities **required**
        * Items
          * items
        * Quantity **required**
      * Name **required**
    * Id **required**
    * LastModifiedTime **required**

### GetFieldLevelEncryptionRequest
* GetFieldLevelEncryptionRequest `object`

### GetFieldLevelEncryptionResult
* GetFieldLevelEncryptionResult `object`
  * FieldLevelEncryption
    * FieldLevelEncryptionConfig **required**
      * CallerReference **required**
      * Comment
      * ContentTypeProfileConfig
        * ContentTypeProfiles
          * Items
          * Quantity **required**
        * ForwardWhenContentTypeIsUnknown **required**
      * QueryArgProfileConfig
        * ForwardWhenQueryArgProfileIsUnknown **required**
        * QueryArgProfiles
          * Items
          * Quantity **required**
    * Id **required**
    * LastModifiedTime **required**

### GetInvalidationRequest
* GetInvalidationRequest `object`: The request to get an invalidation's information. 

### GetInvalidationResult
* GetInvalidationResult `object`: The returned result of the corresponding request.
  * Invalidation
    * CreateTime **required**
    * Id **required**
    * InvalidationBatch **required**
      * CallerReference **required**
      * Paths **required**
        * Items
          * items
        * Quantity **required**
    * Status **required**

### GetKeyGroupConfigRequest
* GetKeyGroupConfigRequest `object`

### GetKeyGroupConfigResult
* GetKeyGroupConfigResult `object`
  * KeyGroupConfig
    * Comment
    * Items **required**
      * items
    * Name **required**

### GetKeyGroupRequest
* GetKeyGroupRequest `object`

### GetKeyGroupResult
* GetKeyGroupResult `object`
  * KeyGroup
    * Id **required**
    * KeyGroupConfig **required**
      * Comment
      * Items **required**
        * items
      * Name **required**
    * LastModifiedTime **required**

### GetMonitoringSubscriptionRequest
* GetMonitoringSubscriptionRequest `object`

### GetMonitoringSubscriptionResult
* GetMonitoringSubscriptionResult `object`
  * MonitoringSubscription
    * RealtimeMetricsSubscriptionConfig
      * RealtimeMetricsSubscriptionStatus **required**

### GetOriginRequestPolicyConfigRequest
* GetOriginRequestPolicyConfigRequest `object`

### GetOriginRequestPolicyConfigResult
* GetOriginRequestPolicyConfigResult `object`
  * OriginRequestPolicyConfig
    * Comment
    * CookiesConfig **required**
      * CookieBehavior **required**
      * Cookies [CookieNames](#cookienames)
    * HeadersConfig **required**
      * HeaderBehavior **required**
      * Headers [Headers](#headers)
    * Name **required**
    * QueryStringsConfig **required**
      * QueryStringBehavior **required**
      * QueryStrings
        * Items
          * items
        * Quantity **required**

### GetOriginRequestPolicyRequest
* GetOriginRequestPolicyRequest `object`

### GetOriginRequestPolicyResult
* GetOriginRequestPolicyResult `object`
  * OriginRequestPolicy
    * Id **required**
    * LastModifiedTime **required**
    * OriginRequestPolicyConfig **required**
      * Comment
      * CookiesConfig **required**
        * CookieBehavior **required**
        * Cookies [CookieNames](#cookienames)
      * HeadersConfig **required**
        * HeaderBehavior **required**
        * Headers [Headers](#headers)
      * Name **required**
      * QueryStringsConfig **required**
        * QueryStringBehavior **required**
        * QueryStrings
          * Items
          * Quantity **required**

### GetPublicKeyConfigRequest
* GetPublicKeyConfigRequest `object`

### GetPublicKeyConfigResult
* GetPublicKeyConfigResult `object`
  * PublicKeyConfig
    * CallerReference **required**
    * Comment
    * EncodedKey **required**
    * Name **required**

### GetPublicKeyRequest
* GetPublicKeyRequest `object`

### GetPublicKeyResult
* GetPublicKeyResult `object`
  * PublicKey
    * CreatedTime **required**
    * Id **required**
    * PublicKeyConfig **required**
      * CallerReference **required**
      * Comment
      * EncodedKey **required**
      * Name **required**

### GetRealtimeLogConfigRequest
* GetRealtimeLogConfigRequest `object`
  * ARN
  * Name

### GetRealtimeLogConfigResult
* GetRealtimeLogConfigResult `object`
  * RealtimeLogConfig
    * ARN **required**
    * EndPoints **required**
      * items [EndPoint](#endpoint)
    * Fields **required**
      * items
    * Name **required**
    * SamplingRate **required**

### GetStreamingDistributionConfigRequest
* GetStreamingDistributionConfigRequest `object`: To request to get a streaming distribution configuration.

### GetStreamingDistributionConfigResult
* GetStreamingDistributionConfigResult `object`: The returned result of the corresponding request.
  * StreamingDistributionConfig
    * Aliases
      * Items
        * items
      * Quantity **required**
    * CallerReference **required**
    * Comment **required**
    * Enabled **required**
    * Logging
      * Bucket **required**
      * Enabled **required**
      * Prefix **required**
    * PriceClass
    * S3Origin **required**
      * DomainName **required**
      * OriginAccessIdentity **required**
    * TrustedSigners **required**
      * Enabled **required**
      * Items
        * items
      * Quantity **required**

### GetStreamingDistributionRequest
* GetStreamingDistributionRequest `object`: The request to get a streaming distribution's information.

### GetStreamingDistributionResult
* GetStreamingDistributionResult `object`: The returned result of the corresponding request.
  * StreamingDistribution
    * ARN **required**
    * ActiveTrustedSigners **required**
      * Enabled **required**
      * Items
        * items
          * AwsAccountNumber
          * KeyPairIds
      * Quantity **required**
    * DomainName **required**
    * Id **required**
    * LastModifiedTime
    * Status **required**
    * StreamingDistributionConfig **required**
      * Aliases
        * Items
          * items
        * Quantity **required**
      * CallerReference **required**
      * Comment **required**
      * Enabled **required**
      * Logging
        * Bucket **required**
        * Enabled **required**
        * Prefix **required**
      * PriceClass
      * S3Origin **required**
        * DomainName **required**
        * OriginAccessIdentity **required**
      * TrustedSigners **required**
        * Enabled **required**
        * Items
          * items
        * Quantity **required**

### HeaderList
* HeaderList `array`
  * items

### Headers
* Headers `object`: Contains a list of HTTP header names.
  * Items
    * items
  * Quantity **required**

### HttpVersion
* HttpVersion `string` (values: http1.1, http2)

### ICPRecordalStatus
* ICPRecordalStatus `string` (values: APPROVED, SUSPENDED, PENDING)

### IllegalDelete


### IllegalFieldLevelEncryptionConfigAssociationWithCacheBehavior


### IllegalUpdate


### InconsistentQuantities


### InvalidArgument


### InvalidDefaultRootObject


### InvalidErrorCode


### InvalidForwardCookies


### InvalidGeoRestrictionParameter


### InvalidHeadersForS3Origin


### InvalidIfMatchVersion


### InvalidLambdaFunctionAssociation


### InvalidLocationCode


### InvalidMinimumProtocolVersion


### InvalidOrigin


### InvalidOriginAccessIdentity


### InvalidOriginKeepaliveTimeout


### InvalidOriginReadTimeout


### InvalidProtocolSettings


### InvalidQueryStringParameters


### InvalidRelativePath


### InvalidRequiredProtocol


### InvalidResponseCode


### InvalidTTLOrder


### InvalidTagging


### InvalidViewerCertificate


### InvalidWebACLId


### Invalidation
* Invalidation `object`: An invalidation. 
  * CreateTime **required**
  * Id **required**
  * InvalidationBatch **required**
    * CallerReference **required**
    * Paths **required**
      * Items
        * items
      * Quantity **required**
  * Status **required**

### InvalidationBatch
* InvalidationBatch `object`: An invalidation batch.
  * CallerReference **required**
  * Paths **required**
    * Items
      * items
    * Quantity **required**

### InvalidationList
* InvalidationList `object`: The <code>InvalidationList</code> complex type describes the list of invalidation objects. For more information about invalidation, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Invalidation.html">Invalidating Objects (Web Distributions Only)</a> in the <i>Amazon CloudFront Developer Guide</i>.
  * IsTruncated **required**
  * Items
    * items
      * CreateTime **required**
      * Id **required**
      * Status **required**
  * Marker **required**
  * MaxItems **required**
  * NextMarker
  * Quantity **required**

### InvalidationSummary
* InvalidationSummary `object`: A summary of an invalidation request.
  * CreateTime **required**
  * Id **required**
  * Status **required**

### InvalidationSummaryList
* InvalidationSummaryList `array`
  * items
    * CreateTime **required**
    * Id **required**
    * Status **required**

### ItemSelection
* ItemSelection `string` (values: none, whitelist, all)

### KGKeyPairIds
* KGKeyPairIds `object`: A list of identifiers for the public keys that CloudFront can use to verify the signatures of signed URLs and signed cookies.
  * KeyGroupId
  * KeyPairIds [KeyPairIds](#keypairids)

### KGKeyPairIdsList
* KGKeyPairIdsList `array`
  * items
    * KeyGroupId
    * KeyPairIds [KeyPairIds](#keypairids)

### KeyGroup
* KeyGroup `object`: <p>A key group.</p> <p>A key group contains a list of public keys that you can use with <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">CloudFront signed URLs and signed cookies</a>.</p>
  * Id **required**
  * KeyGroupConfig **required**
    * Comment
    * Items **required**
      * items
    * Name **required**
  * LastModifiedTime **required**

### KeyGroupAlreadyExists


### KeyGroupConfig
* KeyGroupConfig `object`: <p>A key group configuration.</p> <p>A key group contains a list of public keys that you can use with <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">CloudFront signed URLs and signed cookies</a>.</p>
  * Comment
  * Items **required**
    * items
  * Name **required**

### KeyGroupList
* KeyGroupList `object`: A list of key groups.
  * Items
    * items
      * KeyGroup **required**
        * Id **required**
        * KeyGroupConfig **required**
          * Comment
          * Items **required**
          * Name **required**
        * LastModifiedTime **required**
  * MaxItems **required**
  * NextMarker
  * Quantity **required**

### KeyGroupSummary
* KeyGroupSummary `object`: Contains information about a key group.
  * KeyGroup **required**
    * Id **required**
    * KeyGroupConfig **required**
      * Comment
      * Items **required**
        * items
      * Name **required**
    * LastModifiedTime **required**

### KeyGroupSummaryList
* KeyGroupSummaryList `array`
  * items
    * KeyGroup **required**
      * Id **required**
      * KeyGroupConfig **required**
        * Comment
        * Items **required**
          * items
        * Name **required**
      * LastModifiedTime **required**

### KeyPairIdList
* KeyPairIdList `array`
  * items

### KeyPairIds
* KeyPairIds `object`: A list of CloudFront key pair identifiers.
  * Items
    * items
  * Quantity **required**

### KinesisStreamConfig
* KinesisStreamConfig `object`: Contains information about the Amazon Kinesis data stream where you are sending real-time log data.
  * RoleARN **required**
  * StreamARN **required**

### LambdaFunctionARN
* LambdaFunctionARN `string`

### LambdaFunctionAssociation
* LambdaFunctionAssociation `object`: A complex type that contains a Lambda function association.
  * EventType **required**
  * IncludeBody
  * LambdaFunctionARN **required**

### LambdaFunctionAssociationList
* LambdaFunctionAssociationList `array`
  * items
    * EventType **required**
    * IncludeBody
    * LambdaFunctionARN **required**

### LambdaFunctionAssociations
* LambdaFunctionAssociations `object`: <p>A complex type that specifies a list of Lambda functions associations for a cache behavior.</p> <p>If you want to invoke one or more Lambda functions triggered by requests that match the <code>PathPattern</code> of the cache behavior, specify the applicable values for <code>Quantity</code> and <code>Items</code>. Note that there can be up to 4 <code>LambdaFunctionAssociation</code> items in this list (one for each possible value of <code>EventType</code>) and each <code>EventType</code> can be associated with the Lambda function only once.</p> <p>If you don't want to invoke any Lambda functions for the requests that match <code>PathPattern</code>, specify <code>0</code> for <code>Quantity</code> and omit <code>Items</code>. </p>
  * Items
    * items
      * EventType **required**
      * IncludeBody
      * LambdaFunctionARN **required**
  * Quantity **required**

### ListCachePoliciesRequest
* ListCachePoliciesRequest `object`

### ListCachePoliciesResult
* ListCachePoliciesResult `object`
  * CachePolicyList
    * Items
      * items
        * CachePolicy **required**
          * CachePolicyConfig **required**
          * Id **required**
          * LastModifiedTime **required**
        * Type **required**
    * MaxItems **required**
    * NextMarker
    * Quantity **required**

### ListCloudFrontOriginAccessIdentitiesRequest
* ListCloudFrontOriginAccessIdentitiesRequest `object`: The request to list origin access identities. 

### ListCloudFrontOriginAccessIdentitiesResult
* ListCloudFrontOriginAccessIdentitiesResult `object`: The returned result of the corresponding request. 
  * CloudFrontOriginAccessIdentityList
    * IsTruncated **required**
    * Items
      * items
        * Comment **required**
        * Id **required**
        * S3CanonicalUserId **required**
    * Marker **required**
    * MaxItems **required**
    * NextMarker
    * Quantity **required**

### ListDistributionsByCachePolicyIdRequest
* ListDistributionsByCachePolicyIdRequest `object`

### ListDistributionsByCachePolicyIdResult
* ListDistributionsByCachePolicyIdResult `object`
  * DistributionIdList
    * IsTruncated **required**
    * Items
      * items
    * Marker **required**
    * MaxItems **required**
    * NextMarker
    * Quantity **required**

### ListDistributionsByKeyGroupRequest
* ListDistributionsByKeyGroupRequest `object`

### ListDistributionsByKeyGroupResult
* ListDistributionsByKeyGroupResult `object`
  * DistributionIdList [DistributionIdList](#distributionidlist)

### ListDistributionsByOriginRequestPolicyIdRequest
* ListDistributionsByOriginRequestPolicyIdRequest `object`

### ListDistributionsByOriginRequestPolicyIdResult
* ListDistributionsByOriginRequestPolicyIdResult `object`
  * DistributionIdList
    * IsTruncated **required**
    * Items
      * items
    * Marker **required**
    * MaxItems **required**
    * NextMarker
    * Quantity **required**

### ListDistributionsByRealtimeLogConfigRequest
* ListDistributionsByRealtimeLogConfigRequest `object`
  * Marker
  * MaxItems
  * RealtimeLogConfigArn
  * RealtimeLogConfigName

### ListDistributionsByRealtimeLogConfigResult
* ListDistributionsByRealtimeLogConfigResult `object`
  * DistributionList [DistributionList](#distributionlist)

### ListDistributionsByWebACLIdRequest
* ListDistributionsByWebACLIdRequest `object`: The request to list distributions that are associated with a specified AWS WAF web ACL. 

### ListDistributionsByWebACLIdResult
* ListDistributionsByWebACLIdResult `object`: The response to a request to list the distributions that are associated with a specified AWS WAF web ACL. 
  * DistributionList
    * IsTruncated **required**
    * Items
      * items
        * ARN **required**
        * AliasICPRecordals
          * items
        * Aliases **required**
          * Items
          * Quantity **required**
        * CacheBehaviors **required**
          * Items
          * Quantity **required**
        * Comment **required**
        * CustomErrorResponses **required**
          * Items
          * Quantity **required**
        * DefaultCacheBehavior **required**
          * AllowedMethods [AllowedMethods](#allowedmethods)
          * CachePolicyId
          * Compress
          * DefaultTTL
          * FieldLevelEncryptionId
          * ForwardedValues
          * LambdaFunctionAssociations
          * MaxTTL
          * MinTTL
          * OriginRequestPolicyId
          * RealtimeLogConfigArn
          * SmoothStreaming
          * TargetOriginId **required**
          * TrustedKeyGroups
          * TrustedSigners
          * ViewerProtocolPolicy **required**
        * DomainName **required**
        * Enabled **required**
        * HttpVersion **required**
        * Id **required**
        * IsIPV6Enabled **required**
        * LastModifiedTime **required**
        * OriginGroups
          * Items
          * Quantity **required**
        * Origins **required**
          * Items **required**
          * Quantity **required**
        * PriceClass **required**
        * Restrictions **required**
          * GeoRestriction **required**
        * Status **required**
        * ViewerCertificate **required**
          * ACMCertificateArn
          * Certificate
          * CertificateSource
          * CloudFrontDefaultCertificate
          * IAMCertificateId
          * MinimumProtocolVersion
          * SSLSupportMethod
        * WebACLId **required**
    * Marker **required**
    * MaxItems **required**
    * NextMarker
    * Quantity **required**

### ListDistributionsRequest
* ListDistributionsRequest `object`: The request to list your distributions. 

### ListDistributionsResult
* ListDistributionsResult `object`: The returned result of the corresponding request. 
  * DistributionList
    * IsTruncated **required**
    * Items
      * items
        * ARN **required**
        * AliasICPRecordals
          * items
        * Aliases **required**
          * Items
          * Quantity **required**
        * CacheBehaviors **required**
          * Items
          * Quantity **required**
        * Comment **required**
        * CustomErrorResponses **required**
          * Items
          * Quantity **required**
        * DefaultCacheBehavior **required**
          * AllowedMethods [AllowedMethods](#allowedmethods)
          * CachePolicyId
          * Compress
          * DefaultTTL
          * FieldLevelEncryptionId
          * ForwardedValues
          * LambdaFunctionAssociations
          * MaxTTL
          * MinTTL
          * OriginRequestPolicyId
          * RealtimeLogConfigArn
          * SmoothStreaming
          * TargetOriginId **required**
          * TrustedKeyGroups
          * TrustedSigners
          * ViewerProtocolPolicy **required**
        * DomainName **required**
        * Enabled **required**
        * HttpVersion **required**
        * Id **required**
        * IsIPV6Enabled **required**
        * LastModifiedTime **required**
        * OriginGroups
          * Items
          * Quantity **required**
        * Origins **required**
          * Items **required**
          * Quantity **required**
        * PriceClass **required**
        * Restrictions **required**
          * GeoRestriction **required**
        * Status **required**
        * ViewerCertificate **required**
          * ACMCertificateArn
          * Certificate
          * CertificateSource
          * CloudFrontDefaultCertificate
          * IAMCertificateId
          * MinimumProtocolVersion
          * SSLSupportMethod
        * WebACLId **required**
    * Marker **required**
    * MaxItems **required**
    * NextMarker
    * Quantity **required**

### ListFieldLevelEncryptionConfigsRequest
* ListFieldLevelEncryptionConfigsRequest `object`

### ListFieldLevelEncryptionConfigsResult
* ListFieldLevelEncryptionConfigsResult `object`
  * FieldLevelEncryptionList
    * Items
      * items
        * Comment
        * ContentTypeProfileConfig
          * ContentTypeProfiles
          * ForwardWhenContentTypeIsUnknown **required**
        * Id **required**
        * LastModifiedTime **required**
        * QueryArgProfileConfig
          * ForwardWhenQueryArgProfileIsUnknown **required**
          * QueryArgProfiles
    * MaxItems **required**
    * NextMarker
    * Quantity **required**

### ListFieldLevelEncryptionProfilesRequest
* ListFieldLevelEncryptionProfilesRequest `object`

### ListFieldLevelEncryptionProfilesResult
* ListFieldLevelEncryptionProfilesResult `object`
  * FieldLevelEncryptionProfileList
    * Items
      * items
        * Comment
        * EncryptionEntities **required**
          * Items
          * Quantity **required**
        * Id **required**
        * LastModifiedTime **required**
        * Name **required**
    * MaxItems **required**
    * NextMarker
    * Quantity **required**

### ListInvalidationsRequest
* ListInvalidationsRequest `object`: The request to list invalidations. 

### ListInvalidationsResult
* ListInvalidationsResult `object`: The returned result of the corresponding request. 
  * InvalidationList
    * IsTruncated **required**
    * Items
      * items
        * CreateTime **required**
        * Id **required**
        * Status **required**
    * Marker **required**
    * MaxItems **required**
    * NextMarker
    * Quantity **required**

### ListKeyGroupsRequest
* ListKeyGroupsRequest `object`

### ListKeyGroupsResult
* ListKeyGroupsResult `object`
  * KeyGroupList
    * Items
      * items
        * KeyGroup **required**
          * Id **required**
          * KeyGroupConfig **required**
          * LastModifiedTime **required**
    * MaxItems **required**
    * NextMarker
    * Quantity **required**

### ListOriginRequestPoliciesRequest
* ListOriginRequestPoliciesRequest `object`

### ListOriginRequestPoliciesResult
* ListOriginRequestPoliciesResult `object`
  * OriginRequestPolicyList
    * Items
      * items
        * OriginRequestPolicy **required**
          * Id **required**
          * LastModifiedTime **required**
          * OriginRequestPolicyConfig **required**
        * Type **required**
    * MaxItems **required**
    * NextMarker
    * Quantity **required**

### ListPublicKeysRequest
* ListPublicKeysRequest `object`

### ListPublicKeysResult
* ListPublicKeysResult `object`
  * PublicKeyList
    * Items
      * items
        * Comment
        * CreatedTime **required**
        * EncodedKey **required**
        * Id **required**
        * Name **required**
    * MaxItems **required**
    * NextMarker
    * Quantity **required**

### ListRealtimeLogConfigsRequest
* ListRealtimeLogConfigsRequest `object`

### ListRealtimeLogConfigsResult
* ListRealtimeLogConfigsResult `object`
  * RealtimeLogConfigs
    * IsTruncated **required**
    * Items
      * items [RealtimeLogConfig](#realtimelogconfig)
    * Marker **required**
    * MaxItems **required**
    * NextMarker

### ListStreamingDistributionsRequest
* ListStreamingDistributionsRequest `object`: The request to list your streaming distributions. 

### ListStreamingDistributionsResult
* ListStreamingDistributionsResult `object`: The returned result of the corresponding request. 
  * StreamingDistributionList
    * IsTruncated **required**
    * Items
      * items
        * ARN **required**
        * Aliases **required**
          * Items
          * Quantity **required**
        * Comment **required**
        * DomainName **required**
        * Enabled **required**
        * Id **required**
        * LastModifiedTime **required**
        * PriceClass **required**
        * S3Origin **required**
          * DomainName **required**
          * OriginAccessIdentity **required**
        * Status **required**
        * TrustedSigners **required**
          * Enabled **required**
          * Items
          * Quantity **required**
    * Marker **required**
    * MaxItems **required**
    * NextMarker
    * Quantity **required**

### ListTagsForResourceRequest
* ListTagsForResourceRequest `object`:  The request to list tags for a CloudFront resource.

### ListTagsForResourceResult
* ListTagsForResourceResult `object`:  The returned result of the corresponding request.
  * Tags **required**
    * Items
      * items
        * Key **required**
        * Value

### LocationList
* LocationList `array`
  * items

### LoggingConfig
* LoggingConfig `object`: A complex type that controls whether access logs are written for the distribution.
  * Bucket **required**
  * Enabled **required**
  * IncludeCookies **required**
  * Prefix **required**

### Method
* Method `string` (values: GET, HEAD, POST, PUT, PATCH, OPTIONS, DELETE)

### MethodsList
* MethodsList `array`
  * items

### MinimumProtocolVersion
* MinimumProtocolVersion `string` (values: SSLv3, TLSv1, TLSv1_2016, TLSv1.1_2016, TLSv1.2_2018, TLSv1.2_2019)

### MissingBody


### MonitoringSubscription
* MonitoringSubscription `object`: A monitoring subscription. This structure contains information about whether additional CloudWatch metrics are enabled for a given CloudFront distribution.
  * RealtimeMetricsSubscriptionConfig
    * RealtimeMetricsSubscriptionStatus **required**

### NoSuchCachePolicy


### NoSuchCloudFrontOriginAccessIdentity


### NoSuchDistribution


### NoSuchFieldLevelEncryptionConfig


### NoSuchFieldLevelEncryptionProfile


### NoSuchInvalidation


### NoSuchOrigin


### NoSuchOriginRequestPolicy


### NoSuchPublicKey


### NoSuchRealtimeLogConfig


### NoSuchResource


### NoSuchStreamingDistribution


### Origin
* Origin `object`: <p>An origin.</p> <p>An origin is the location where content is stored, and from which CloudFront gets content to serve to viewers. To specify an origin:</p> <ul> <li> <p>Use <code>S3OriginConfig</code> to specify an Amazon S3 bucket that is not configured with static website hosting.</p> </li> <li> <p>Use <code>CustomOriginConfig</code> to specify all other kinds of origins, including:</p> <ul> <li> <p>An Amazon S3 bucket that is configured with static website hosting</p> </li> <li> <p>An Elastic Load Balancing load balancer</p> </li> <li> <p>An AWS Elemental MediaPackage endpoint</p> </li> <li> <p>An AWS Elemental MediaStore container</p> </li> <li> <p>Any other HTTP server, running on an Amazon EC2 instance or any other kind of host</p> </li> </ul> </li> </ul> <p>For the current maximum number of origins that you can specify per distribution, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-limits.html#limits-web-distributions">General Quotas on Web Distributions</a> in the <i>Amazon CloudFront Developer Guide</i> (quotas were formerly referred to as limits).</p>
  * ConnectionAttempts
  * ConnectionTimeout
  * CustomHeaders
    * Items
      * items
        * HeaderName **required**
        * HeaderValue **required**
    * Quantity **required**
  * CustomOriginConfig
    * HTTPPort **required**
    * HTTPSPort **required**
    * OriginKeepaliveTimeout
    * OriginProtocolPolicy **required**
    * OriginReadTimeout
    * OriginSslProtocols
      * Items **required**
        * items
      * Quantity **required**
  * DomainName **required**
  * Id **required**
  * OriginPath
  * OriginShield
    * Enabled **required**
    * OriginShieldRegion
  * S3OriginConfig
    * OriginAccessIdentity **required**

### OriginCustomHeader
* OriginCustomHeader `object`: A complex type that contains <code>HeaderName</code> and <code>HeaderValue</code> elements, if any, for this distribution. 
  * HeaderName **required**
  * HeaderValue **required**

### OriginCustomHeadersList
* OriginCustomHeadersList `array`
  * items
    * HeaderName **required**
    * HeaderValue **required**

### OriginGroup
* OriginGroup `object`: An origin group includes two origins (a primary origin and a second origin to failover to) and a failover criteria that you specify. You create an origin group to support origin failover in CloudFront. When you create or update a distribution, you can specifiy the origin group instead of a single origin, and CloudFront will failover from the primary origin to the second origin under the failover conditions that you've chosen.
  * FailoverCriteria **required**
    * StatusCodes **required**
      * Items **required**
        * items
      * Quantity **required**
  * Id **required**
  * Members **required**
    * Items **required**
      * items
        * OriginId **required**
    * Quantity **required**

### OriginGroupFailoverCriteria
* OriginGroupFailoverCriteria `object`: A complex data type that includes information about the failover criteria for an origin group, including the status codes for which CloudFront will failover from the primary origin to the second origin.
  * StatusCodes **required**
    * Items **required**
      * items
    * Quantity **required**

### OriginGroupList
* OriginGroupList `array`: List of origin groups for a distribution.
  * items
    * FailoverCriteria **required**
      * StatusCodes **required**
        * Items **required**
          * items
        * Quantity **required**
    * Id **required**
    * Members **required**
      * Items **required**
        * items
          * OriginId **required**
      * Quantity **required**

### OriginGroupMember
* OriginGroupMember `object`: An origin in an origin group.
  * OriginId **required**

### OriginGroupMemberList
* OriginGroupMemberList `array`: List of origins in an origin group.
  * items
    * OriginId **required**

### OriginGroupMembers
* OriginGroupMembers `object`: A complex data type for the origins included in an origin group.
  * Items **required**
    * items
      * OriginId **required**
  * Quantity **required**

### OriginGroups
* OriginGroups `object`: A complex data type for the origin groups specified for a distribution.
  * Items
    * items
      * FailoverCriteria **required**
        * StatusCodes **required**
          * Items **required**
          * Quantity **required**
      * Id **required**
      * Members **required**
        * Items **required**
          * items
        * Quantity **required**
  * Quantity **required**

### OriginList
* OriginList `array`
  * items
    * ConnectionAttempts
    * ConnectionTimeout
    * CustomHeaders
      * Items
        * items
          * HeaderName **required**
          * HeaderValue **required**
      * Quantity **required**
    * CustomOriginConfig
      * HTTPPort **required**
      * HTTPSPort **required**
      * OriginKeepaliveTimeout
      * OriginProtocolPolicy **required**
      * OriginReadTimeout
      * OriginSslProtocols
        * Items **required**
          * items
        * Quantity **required**
    * DomainName **required**
    * Id **required**
    * OriginPath
    * OriginShield
      * Enabled **required**
      * OriginShieldRegion
    * S3OriginConfig
      * OriginAccessIdentity **required**

### OriginProtocolPolicy
* OriginProtocolPolicy `string` (values: http-only, match-viewer, https-only)

### OriginRequestPolicy
* OriginRequestPolicy `object`: <p>An origin request policy.</p> <p>When it’s attached to a cache behavior, the origin request policy determines the values that CloudFront includes in requests that it sends to the origin. Each request that CloudFront sends to the origin includes the following:</p> <ul> <li> <p>The request body and the URL path (without the domain name) from the viewer request.</p> </li> <li> <p>The headers that CloudFront automatically includes in every origin request, including <code>Host</code>, <code>User-Agent</code>, and <code>X-Amz-Cf-Id</code>.</p> </li> <li> <p>All HTTP headers, cookies, and URL query strings that are specified in the cache policy or the origin request policy. These can include items from the viewer request and, in the case of headers, additional ones that are added by CloudFront.</p> </li> </ul> <p>CloudFront sends a request when it can’t find an object in its cache that matches the request. If you want to send values to the origin and also include them in the cache key, use <code>CachePolicy</code>.</p>
  * Id **required**
  * LastModifiedTime **required**
  * OriginRequestPolicyConfig **required**
    * Comment
    * CookiesConfig **required**
      * CookieBehavior **required**
      * Cookies [CookieNames](#cookienames)
    * HeadersConfig **required**
      * HeaderBehavior **required**
      * Headers [Headers](#headers)
    * Name **required**
    * QueryStringsConfig **required**
      * QueryStringBehavior **required**
      * QueryStrings
        * Items
          * items
        * Quantity **required**

### OriginRequestPolicyAlreadyExists


### OriginRequestPolicyConfig
* OriginRequestPolicyConfig `object`: <p>An origin request policy configuration.</p> <p>This configuration determines the values that CloudFront includes in requests that it sends to the origin. Each request that CloudFront sends to the origin includes the following:</p> <ul> <li> <p>The request body and the URL path (without the domain name) from the viewer request.</p> </li> <li> <p>The headers that CloudFront automatically includes in every origin request, including <code>Host</code>, <code>User-Agent</code>, and <code>X-Amz-Cf-Id</code>.</p> </li> <li> <p>All HTTP headers, cookies, and URL query strings that are specified in the cache policy or the origin request policy. These can include items from the viewer request and, in the case of headers, additional ones that are added by CloudFront.</p> </li> </ul> <p>CloudFront sends a request when it can’t find an object in its cache that matches the request. If you want to send values to the origin and also include them in the cache key, use <code>CachePolicy</code>.</p>
  * Comment
  * CookiesConfig **required**
    * CookieBehavior **required**
    * Cookies [CookieNames](#cookienames)
  * HeadersConfig **required**
    * HeaderBehavior **required**
    * Headers [Headers](#headers)
  * Name **required**
  * QueryStringsConfig **required**
    * QueryStringBehavior **required**
    * QueryStrings
      * Items
        * items
      * Quantity **required**

### OriginRequestPolicyCookieBehavior
* OriginRequestPolicyCookieBehavior `string` (values: none, whitelist, all)

### OriginRequestPolicyCookiesConfig
* OriginRequestPolicyCookiesConfig `object`: An object that determines whether any cookies in viewer requests (and if so, which cookies) are included in requests that CloudFront sends to the origin.
  * CookieBehavior **required**
  * Cookies [CookieNames](#cookienames)

### OriginRequestPolicyHeaderBehavior
* OriginRequestPolicyHeaderBehavior `string` (values: none, whitelist, allViewer, allViewerAndWhitelistCloudFront)

### OriginRequestPolicyHeadersConfig
* OriginRequestPolicyHeadersConfig `object`: An object that determines whether any HTTP headers (and if so, which headers) are included in requests that CloudFront sends to the origin.
  * HeaderBehavior **required**
  * Headers [Headers](#headers)

### OriginRequestPolicyInUse


### OriginRequestPolicyList
* OriginRequestPolicyList `object`: A list of origin request policies.
  * Items
    * items
      * OriginRequestPolicy **required**
        * Id **required**
        * LastModifiedTime **required**
        * OriginRequestPolicyConfig **required**
          * Comment
          * CookiesConfig **required**
          * HeadersConfig **required**
          * Name **required**
          * QueryStringsConfig **required**
      * Type **required**
  * MaxItems **required**
  * NextMarker
  * Quantity **required**

### OriginRequestPolicyQueryStringBehavior
* OriginRequestPolicyQueryStringBehavior `string` (values: none, whitelist, all)

### OriginRequestPolicyQueryStringsConfig
* OriginRequestPolicyQueryStringsConfig `object`: An object that determines whether any URL query strings in viewer requests (and if so, which query strings) are included in requests that CloudFront sends to the origin.
  * QueryStringBehavior **required**
  * QueryStrings
    * Items
      * items
    * Quantity **required**

### OriginRequestPolicySummary
* OriginRequestPolicySummary `object`: Contains an origin request policy.
  * OriginRequestPolicy **required**
    * Id **required**
    * LastModifiedTime **required**
    * OriginRequestPolicyConfig **required**
      * Comment
      * CookiesConfig **required**
        * CookieBehavior **required**
        * Cookies [CookieNames](#cookienames)
      * HeadersConfig **required**
        * HeaderBehavior **required**
        * Headers [Headers](#headers)
      * Name **required**
      * QueryStringsConfig **required**
        * QueryStringBehavior **required**
        * QueryStrings
          * Items
          * Quantity **required**
  * Type **required**

### OriginRequestPolicySummaryList
* OriginRequestPolicySummaryList `array`
  * items
    * OriginRequestPolicy **required**
      * Id **required**
      * LastModifiedTime **required**
      * OriginRequestPolicyConfig **required**
        * Comment
        * CookiesConfig **required**
          * CookieBehavior **required**
          * Cookies [CookieNames](#cookienames)
        * HeadersConfig **required**
          * HeaderBehavior **required**
          * Headers [Headers](#headers)
        * Name **required**
        * QueryStringsConfig **required**
          * QueryStringBehavior **required**
          * QueryStrings
    * Type **required**

### OriginRequestPolicyType
* OriginRequestPolicyType `string` (values: managed, custom)

### OriginShield
* OriginShield `object`: <p>CloudFront Origin Shield.</p> <p>Using Origin Shield can help reduce the load on your origin. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/origin-shield.html">Using Origin Shield</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
  * Enabled **required**
  * OriginShieldRegion

### OriginShieldRegion
* OriginShieldRegion `string`

### OriginSslProtocols
* OriginSslProtocols `object`: A complex type that contains information about the SSL/TLS protocols that CloudFront can use when establishing an HTTPS connection with your origin. 
  * Items **required**
    * items
  * Quantity **required**

### Origins
* Origins `object`: Contains information about the origins for this distribution.
  * Items **required**
    * items
      * ConnectionAttempts
      * ConnectionTimeout
      * CustomHeaders
        * Items
          * items
        * Quantity **required**
      * CustomOriginConfig
        * HTTPPort **required**
        * HTTPSPort **required**
        * OriginKeepaliveTimeout
        * OriginProtocolPolicy **required**
        * OriginReadTimeout
        * OriginSslProtocols
          * Items **required**
          * Quantity **required**
      * DomainName **required**
      * Id **required**
      * OriginPath
      * OriginShield
        * Enabled **required**
        * OriginShieldRegion
      * S3OriginConfig
        * OriginAccessIdentity **required**
  * Quantity **required**

### ParametersInCacheKeyAndForwardedToOrigin
* ParametersInCacheKeyAndForwardedToOrigin `object`: <p>This object determines the values that CloudFront includes in the cache key. These values can include HTTP headers, cookies, and URL query strings. CloudFront uses the cache key to find an object in its cache that it can return to the viewer.</p> <p>The headers, cookies, and query strings that are included in the cache key are automatically included in requests that CloudFront sends to the origin. CloudFront sends a request when it can’t find an object in its cache that matches the request’s cache key. If you want to send values to the origin but <i>not</i> include them in the cache key, use <code>OriginRequestPolicy</code>.</p>
  * CookiesConfig **required**
    * CookieBehavior **required**
    * Cookies [CookieNames](#cookienames)
  * EnableAcceptEncodingBrotli
  * EnableAcceptEncodingGzip **required**
  * HeadersConfig **required**
    * HeaderBehavior **required**
    * Headers [Headers](#headers)
  * QueryStringsConfig **required**
    * QueryStringBehavior **required**
    * QueryStrings
      * Items
        * items
      * Quantity **required**

### PathList
* PathList `array`
  * items

### Paths
* Paths `object`: A complex type that contains information about the objects that you want to invalidate. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Invalidation.html#invalidation-specifying-objects">Specifying the Objects to Invalidate</a> in the <i>Amazon CloudFront Developer Guide</i>. 
  * Items
    * items
  * Quantity **required**

### PreconditionFailed


### PriceClass
* PriceClass `string` (values: PriceClass_100, PriceClass_200, PriceClass_All)

### PublicKey
* PublicKey `object`: A public key that you can use with <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">signed URLs and signed cookies</a>, or with <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/field-level-encryption.html">field-level encryption</a>.
  * CreatedTime **required**
  * Id **required**
  * PublicKeyConfig **required**
    * CallerReference **required**
    * Comment
    * EncodedKey **required**
    * Name **required**

### PublicKeyAlreadyExists


### PublicKeyConfig
* PublicKeyConfig `object`: Configuration information about a public key that you can use with <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">signed URLs and signed cookies</a>, or with <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/field-level-encryption.html">field-level encryption</a>.
  * CallerReference **required**
  * Comment
  * EncodedKey **required**
  * Name **required**

### PublicKeyIdList
* PublicKeyIdList `array`
  * items

### PublicKeyInUse


### PublicKeyList
* PublicKeyList `object`: A list of public keys that you can use with <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">signed URLs and signed cookies</a>, or with <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/field-level-encryption.html">field-level encryption</a>.
  * Items
    * items
      * Comment
      * CreatedTime **required**
      * EncodedKey **required**
      * Id **required**
      * Name **required**
  * MaxItems **required**
  * NextMarker
  * Quantity **required**

### PublicKeySummary
* PublicKeySummary `object`: Contains information about a public key.
  * Comment
  * CreatedTime **required**
  * EncodedKey **required**
  * Id **required**
  * Name **required**

### PublicKeySummaryList
* PublicKeySummaryList `array`
  * items
    * Comment
    * CreatedTime **required**
    * EncodedKey **required**
    * Id **required**
    * Name **required**

### QueryArgProfile
* QueryArgProfile `object`: Query argument-profile mapping for field-level encryption.
  * ProfileId **required**
  * QueryArg **required**

### QueryArgProfileConfig
* QueryArgProfileConfig `object`: Configuration for query argument-profile mapping for field-level encryption.
  * ForwardWhenQueryArgProfileIsUnknown **required**
  * QueryArgProfiles
    * Items
      * items
        * ProfileId **required**
        * QueryArg **required**
    * Quantity **required**

### QueryArgProfileEmpty


### QueryArgProfileList
* QueryArgProfileList `array`
  * items
    * ProfileId **required**
    * QueryArg **required**

### QueryArgProfiles
* QueryArgProfiles `object`: Query argument-profile mapping for field-level encryption.
  * Items
    * items
      * ProfileId **required**
      * QueryArg **required**
  * Quantity **required**

### QueryStringCacheKeys
* QueryStringCacheKeys `object`: <p>This field is deprecated. We recommend that you use a cache policy or an origin request policy instead of this field.</p> <p>If you want to include query strings in the cache key, use <code>QueryStringsConfig</code> in a cache policy. See <code>CachePolicy</code>.</p> <p>If you want to send query strings to the origin but not include them in the cache key, use <code>QueryStringsConfig</code> in an origin request policy. See <code>OriginRequestPolicy</code>.</p> <p>A complex type that contains information about the query string parameters that you want CloudFront to use for caching for a cache behavior. </p>
  * Items
    * items
  * Quantity **required**

### QueryStringCacheKeysList
* QueryStringCacheKeysList `array`
  * items

### QueryStringNames
* QueryStringNames `object`: Contains a list of query string names.
  * Items
    * items
  * Quantity **required**

### QueryStringNamesList
* QueryStringNamesList `array`
  * items

### RealtimeLogConfig
* RealtimeLogConfig `object`: A real-time log configuration.
  * ARN **required**
  * EndPoints **required**
    * items [EndPoint](#endpoint)
  * Fields **required**
    * items
  * Name **required**
  * SamplingRate **required**

### RealtimeLogConfigAlreadyExists


### RealtimeLogConfigInUse


### RealtimeLogConfigList
* RealtimeLogConfigList `array`
  * items [RealtimeLogConfig](#realtimelogconfig)

### RealtimeLogConfigs
* RealtimeLogConfigs `object`: A list of real-time log configurations.
  * IsTruncated **required**
  * Items
    * items [RealtimeLogConfig](#realtimelogconfig)
  * Marker **required**
  * MaxItems **required**
  * NextMarker

### RealtimeMetricsSubscriptionConfig
* RealtimeMetricsSubscriptionConfig `object`: A subscription configuration for additional CloudWatch metrics.
  * RealtimeMetricsSubscriptionStatus **required**

### RealtimeMetricsSubscriptionStatus
* RealtimeMetricsSubscriptionStatus `string` (values: Enabled, Disabled)

### ResourceARN
* ResourceARN `string`

### ResourceInUse


### Restrictions
* Restrictions `object`: A complex type that identifies ways in which you want to restrict distribution of your content.
  * GeoRestriction **required**
    * Items
      * items
    * Quantity **required**
    * RestrictionType **required**

### S3Origin
* S3Origin `object`: A complex type that contains information about the Amazon S3 bucket from which you want CloudFront to get your media files for distribution.
  * DomainName **required**
  * OriginAccessIdentity **required**

### S3OriginConfig
* S3OriginConfig `object`: A complex type that contains information about the Amazon S3 origin. If the origin is a custom origin or an S3 bucket that is configured as a website endpoint, use the <code>CustomOriginConfig</code> element instead.
  * OriginAccessIdentity **required**

### SSLSupportMethod
* SSLSupportMethod `string` (values: sni-only, vip, static-ip)

### Signer
* Signer `object`: A list of AWS accounts and the active CloudFront key pairs in each account that CloudFront can use to verify the signatures of signed URLs and signed cookies.
  * AwsAccountNumber
  * KeyPairIds
    * Items
      * items
    * Quantity **required**

### SignerList
* SignerList `array`
  * items
    * AwsAccountNumber
    * KeyPairIds
      * Items
        * items
      * Quantity **required**

### SslProtocol
* SslProtocol `string` (values: SSLv3, TLSv1, TLSv1.1, TLSv1.2)

### SslProtocolsList
* SslProtocolsList `array`
  * items

### StatusCodeList
* StatusCodeList `array`: List of status codes for origin failover.
  * items

### StatusCodes
* StatusCodes `object`: A complex data type for the status codes that you specify that, when returned by a primary origin, trigger CloudFront to failover to a second origin.
  * Items **required**
    * items
  * Quantity **required**

### StreamingDistribution
* StreamingDistribution `object`: A streaming distribution tells CloudFront where you want RTMP content to be delivered from, and the details about how to track and manage content delivery.
  * ARN **required**
  * ActiveTrustedSigners **required**
    * Enabled **required**
    * Items
      * items
        * AwsAccountNumber
        * KeyPairIds
          * Items
          * Quantity **required**
    * Quantity **required**
  * DomainName **required**
  * Id **required**
  * LastModifiedTime
  * Status **required**
  * StreamingDistributionConfig **required**
    * Aliases
      * Items
        * items
      * Quantity **required**
    * CallerReference **required**
    * Comment **required**
    * Enabled **required**
    * Logging
      * Bucket **required**
      * Enabled **required**
      * Prefix **required**
    * PriceClass
    * S3Origin **required**
      * DomainName **required**
      * OriginAccessIdentity **required**
    * TrustedSigners **required**
      * Enabled **required**
      * Items
        * items
      * Quantity **required**

### StreamingDistributionAlreadyExists


### StreamingDistributionConfig
* StreamingDistributionConfig `object`: The RTMP distribution's configuration information.
  * Aliases
    * Items
      * items
    * Quantity **required**
  * CallerReference **required**
  * Comment **required**
  * Enabled **required**
  * Logging
    * Bucket **required**
    * Enabled **required**
    * Prefix **required**
  * PriceClass
  * S3Origin **required**
    * DomainName **required**
    * OriginAccessIdentity **required**
  * TrustedSigners **required**
    * Enabled **required**
    * Items
      * items
    * Quantity **required**

### StreamingDistributionConfigWithTags
* StreamingDistributionConfigWithTags `object`: A streaming distribution Configuration and a list of tags to be associated with the streaming distribution.
  * StreamingDistributionConfig **required**
    * Aliases
      * Items
        * items
      * Quantity **required**
    * CallerReference **required**
    * Comment **required**
    * Enabled **required**
    * Logging
      * Bucket **required**
      * Enabled **required**
      * Prefix **required**
    * PriceClass
    * S3Origin **required**
      * DomainName **required**
      * OriginAccessIdentity **required**
    * TrustedSigners **required**
      * Enabled **required**
      * Items
        * items
      * Quantity **required**
  * Tags **required**
    * Items
      * items
        * Key **required**
        * Value

### StreamingDistributionList
* StreamingDistributionList `object`: A streaming distribution list. 
  * IsTruncated **required**
  * Items
    * items
      * ARN **required**
      * Aliases **required**
        * Items
          * items
        * Quantity **required**
      * Comment **required**
      * DomainName **required**
      * Enabled **required**
      * Id **required**
      * LastModifiedTime **required**
      * PriceClass **required**
      * S3Origin **required**
        * DomainName **required**
        * OriginAccessIdentity **required**
      * Status **required**
      * TrustedSigners **required**
        * Enabled **required**
        * Items
          * items
        * Quantity **required**
  * Marker **required**
  * MaxItems **required**
  * NextMarker
  * Quantity **required**

### StreamingDistributionNotDisabled


### StreamingDistributionSummary
* StreamingDistributionSummary `object`:  A summary of the information for a CloudFront streaming distribution.
  * ARN **required**
  * Aliases **required**
    * Items
      * items
    * Quantity **required**
  * Comment **required**
  * DomainName **required**
  * Enabled **required**
  * Id **required**
  * LastModifiedTime **required**
  * PriceClass **required**
  * S3Origin **required**
    * DomainName **required**
    * OriginAccessIdentity **required**
  * Status **required**
  * TrustedSigners **required**
    * Enabled **required**
    * Items
      * items
    * Quantity **required**

### StreamingDistributionSummaryList
* StreamingDistributionSummaryList `array`
  * items
    * ARN **required**
    * Aliases **required**
      * Items
        * items
      * Quantity **required**
    * Comment **required**
    * DomainName **required**
    * Enabled **required**
    * Id **required**
    * LastModifiedTime **required**
    * PriceClass **required**
    * S3Origin **required**
      * DomainName **required**
      * OriginAccessIdentity **required**
    * Status **required**
    * TrustedSigners **required**
      * Enabled **required**
      * Items
        * items
      * Quantity **required**

### StreamingLoggingConfig
* StreamingLoggingConfig `object`: A complex type that controls whether access logs are written for this streaming distribution.
  * Bucket **required**
  * Enabled **required**
  * Prefix **required**

### Tag
* Tag `object`:  A complex type that contains <code>Tag</code> key and <code>Tag</code> value.
  * Key **required**
  * Value

### TagKey
* TagKey `string`: <p> A string that contains <code>Tag</code> key.</p> <p>The string length should be between 1 and 128 characters. Valid characters include <code>a-z</code>, <code>A-Z</code>, <code>0-9</code>, space, and the special characters <code>_ - . : / = + @</code>.</p>

### TagKeyList
* TagKeyList `array`
  * items

### TagKeys
* TagKeys `object`:  A complex type that contains zero or more <code>Tag</code> elements.
  * Items
    * items

### TagList
* TagList `array`
  * items
    * Key **required**
    * Value

### TagResourceRequest
* TagResourceRequest `object`:  The request to add tags to a CloudFront resource.
  * Tags **required**
    * Items
      * items
        * Key **required**
        * Value

### TagValue
* TagValue `string`

### Tags
* Tags `object`:  A complex type that contains zero or more <code>Tag</code> elements.
  * Items
    * items
      * Key **required**
      * Value

### TooManyCacheBehaviors


### TooManyCachePolicies


### TooManyCertificates


### TooManyCloudFrontOriginAccessIdentities


### TooManyCookieNamesInWhiteList


### TooManyCookiesInCachePolicy


### TooManyCookiesInOriginRequestPolicy


### TooManyDistributionCNAMEs


### TooManyDistributions


### TooManyDistributionsAssociatedToCachePolicy


### TooManyDistributionsAssociatedToFieldLevelEncryptionConfig


### TooManyDistributionsAssociatedToKeyGroup


### TooManyDistributionsAssociatedToOriginRequestPolicy


### TooManyDistributionsWithLambdaAssociations


### TooManyDistributionsWithSingleFunctionARN


### TooManyFieldLevelEncryptionConfigs


### TooManyFieldLevelEncryptionContentTypeProfiles


### TooManyFieldLevelEncryptionEncryptionEntities


### TooManyFieldLevelEncryptionFieldPatterns


### TooManyFieldLevelEncryptionProfiles


### TooManyFieldLevelEncryptionQueryArgProfiles


### TooManyHeadersInCachePolicy


### TooManyHeadersInForwardedValues


### TooManyHeadersInOriginRequestPolicy


### TooManyInvalidationsInProgress


### TooManyKeyGroups


### TooManyKeyGroupsAssociatedToDistribution


### TooManyLambdaFunctionAssociations


### TooManyOriginCustomHeaders


### TooManyOriginGroupsPerDistribution


### TooManyOriginRequestPolicies


### TooManyOrigins


### TooManyPublicKeys


### TooManyPublicKeysInKeyGroup


### TooManyQueryStringParameters


### TooManyQueryStringsInCachePolicy


### TooManyQueryStringsInOriginRequestPolicy


### TooManyRealtimeLogConfigs


### TooManyStreamingDistributionCNAMEs


### TooManyStreamingDistributions


### TooManyTrustedSigners


### TrustedKeyGroupDoesNotExist


### TrustedKeyGroupIdList
* TrustedKeyGroupIdList `array`
  * items

### TrustedKeyGroups
* TrustedKeyGroups `object`: A list of key groups whose public keys CloudFront can use to verify the signatures of signed URLs and signed cookies.
  * Enabled **required**
  * Items
    * items
  * Quantity **required**

### TrustedSignerDoesNotExist


### TrustedSigners
* TrustedSigners `object`: A list of AWS accounts whose public keys CloudFront can use to verify the signatures of signed URLs and signed cookies.
  * Enabled **required**
  * Items
    * items
  * Quantity **required**

### UntagResourceRequest
* UntagResourceRequest `object`:  The request to remove tags from a CloudFront resource.
  * TagKeys **required**
    * Items
      * items

### UpdateCachePolicyRequest
* UpdateCachePolicyRequest `object`
  * CachePolicyConfig **required**
    * Comment
    * DefaultTTL
    * MaxTTL
    * MinTTL **required**
    * Name **required**
    * ParametersInCacheKeyAndForwardedToOrigin
      * CookiesConfig **required**
        * CookieBehavior **required**
        * Cookies [CookieNames](#cookienames)
      * EnableAcceptEncodingBrotli
      * EnableAcceptEncodingGzip **required**
      * HeadersConfig **required**
        * HeaderBehavior **required**
        * Headers [Headers](#headers)
      * QueryStringsConfig **required**
        * QueryStringBehavior **required**
        * QueryStrings
          * Items
          * Quantity **required**

### UpdateCachePolicyResult
* UpdateCachePolicyResult `object`
  * CachePolicy
    * CachePolicyConfig **required**
      * Comment
      * DefaultTTL
      * MaxTTL
      * MinTTL **required**
      * Name **required**
      * ParametersInCacheKeyAndForwardedToOrigin
        * CookiesConfig **required**
          * CookieBehavior **required**
          * Cookies [CookieNames](#cookienames)
        * EnableAcceptEncodingBrotli
        * EnableAcceptEncodingGzip **required**
        * HeadersConfig **required**
          * HeaderBehavior **required**
          * Headers [Headers](#headers)
        * QueryStringsConfig **required**
          * QueryStringBehavior **required**
          * QueryStrings
    * Id **required**
    * LastModifiedTime **required**

### UpdateCloudFrontOriginAccessIdentityRequest
* UpdateCloudFrontOriginAccessIdentityRequest `object`: The request to update an origin access identity.
  * CloudFrontOriginAccessIdentityConfig **required**
    * CallerReference **required**
    * Comment **required**

### UpdateCloudFrontOriginAccessIdentityResult
* UpdateCloudFrontOriginAccessIdentityResult `object`: The returned result of the corresponding request.
  * CloudFrontOriginAccessIdentity
    * CloudFrontOriginAccessIdentityConfig
      * CallerReference **required**
      * Comment **required**
    * Id **required**
    * S3CanonicalUserId **required**

### UpdateDistributionRequest
* UpdateDistributionRequest `object`: The request to update a distribution.
  * DistributionConfig **required**
    * Aliases
      * Items
        * items
      * Quantity **required**
    * CacheBehaviors
      * Items
        * items
          * AllowedMethods [AllowedMethods](#allowedmethods)
          * CachePolicyId
          * Compress
          * DefaultTTL
          * FieldLevelEncryptionId
          * ForwardedValues
          * LambdaFunctionAssociations
          * MaxTTL
          * MinTTL
          * OriginRequestPolicyId
          * PathPattern **required**
          * RealtimeLogConfigArn
          * SmoothStreaming
          * TargetOriginId **required**
          * TrustedKeyGroups
          * TrustedSigners
          * ViewerProtocolPolicy **required**
      * Quantity **required**
    * CallerReference **required**
    * Comment **required**
    * CustomErrorResponses
      * Items
        * items
          * ErrorCachingMinTTL
          * ErrorCode **required**
          * ResponseCode
          * ResponsePagePath
      * Quantity **required**
    * DefaultCacheBehavior **required**
      * AllowedMethods [AllowedMethods](#allowedmethods)
      * CachePolicyId
      * Compress
      * DefaultTTL
      * FieldLevelEncryptionId
      * ForwardedValues
        * Cookies **required**
          * Forward **required**
          * WhitelistedNames
        * Headers
          * Items
          * Quantity **required**
        * QueryString **required**
        * QueryStringCacheKeys
          * Items
          * Quantity **required**
      * LambdaFunctionAssociations
        * Items
          * items
        * Quantity **required**
      * MaxTTL
      * MinTTL
      * OriginRequestPolicyId
      * RealtimeLogConfigArn
      * SmoothStreaming
      * TargetOriginId **required**
      * TrustedKeyGroups
        * Enabled **required**
        * Items
          * items
        * Quantity **required**
      * TrustedSigners
        * Enabled **required**
        * Items
          * items
        * Quantity **required**
      * ViewerProtocolPolicy **required**
    * DefaultRootObject
    * Enabled **required**
    * HttpVersion
    * IsIPV6Enabled
    * Logging
      * Bucket **required**
      * Enabled **required**
      * IncludeCookies **required**
      * Prefix **required**
    * OriginGroups
      * Items
        * items
          * FailoverCriteria **required**
          * Id **required**
          * Members **required**
      * Quantity **required**
    * Origins **required**
      * Items **required**
        * items
          * ConnectionAttempts
          * ConnectionTimeout
          * CustomHeaders
          * CustomOriginConfig
          * DomainName **required**
          * Id **required**
          * OriginPath
          * OriginShield
          * S3OriginConfig
      * Quantity **required**
    * PriceClass
    * Restrictions
      * GeoRestriction **required**
        * Items
          * items
        * Quantity **required**
        * RestrictionType **required**
    * ViewerCertificate
      * ACMCertificateArn
      * Certificate
      * CertificateSource
      * CloudFrontDefaultCertificate
      * IAMCertificateId
      * MinimumProtocolVersion
      * SSLSupportMethod
    * WebACLId

### UpdateDistributionResult
* UpdateDistributionResult `object`: The returned result of the corresponding request.
  * Distribution
    * ARN **required**
    * ActiveTrustedKeyGroups
      * Enabled **required**
      * Items
        * items
          * KeyGroupId
          * KeyPairIds [KeyPairIds](#keypairids)
      * Quantity **required**
    * ActiveTrustedSigners
      * Enabled **required**
      * Items
        * items
          * AwsAccountNumber
          * KeyPairIds
      * Quantity **required**
    * AliasICPRecordals
      * items
        * CNAME
        * ICPRecordalStatus
    * DistributionConfig **required**
      * Aliases
        * Items
          * items
        * Quantity **required**
      * CacheBehaviors
        * Items
          * items
        * Quantity **required**
      * CallerReference **required**
      * Comment **required**
      * CustomErrorResponses
        * Items
          * items
        * Quantity **required**
      * DefaultCacheBehavior **required**
        * AllowedMethods [AllowedMethods](#allowedmethods)
        * CachePolicyId
        * Compress
        * DefaultTTL
        * FieldLevelEncryptionId
        * ForwardedValues
          * Cookies **required**
          * Headers
          * QueryString **required**
          * QueryStringCacheKeys
        * LambdaFunctionAssociations
          * Items
          * Quantity **required**
        * MaxTTL
        * MinTTL
        * OriginRequestPolicyId
        * RealtimeLogConfigArn
        * SmoothStreaming
        * TargetOriginId **required**
        * TrustedKeyGroups
          * Enabled **required**
          * Items
          * Quantity **required**
        * TrustedSigners
          * Enabled **required**
          * Items
          * Quantity **required**
        * ViewerProtocolPolicy **required**
      * DefaultRootObject
      * Enabled **required**
      * HttpVersion
      * IsIPV6Enabled
      * Logging
        * Bucket **required**
        * Enabled **required**
        * IncludeCookies **required**
        * Prefix **required**
      * OriginGroups
        * Items
          * items
        * Quantity **required**
      * Origins **required**
        * Items **required**
          * items
        * Quantity **required**
      * PriceClass
      * Restrictions
        * GeoRestriction **required**
          * Items
          * Quantity **required**
          * RestrictionType **required**
      * ViewerCertificate
        * ACMCertificateArn
        * Certificate
        * CertificateSource
        * CloudFrontDefaultCertificate
        * IAMCertificateId
        * MinimumProtocolVersion
        * SSLSupportMethod
      * WebACLId
    * DomainName **required**
    * Id **required**
    * InProgressInvalidationBatches **required**
    * LastModifiedTime **required**
    * Status **required**

### UpdateFieldLevelEncryptionConfigRequest
* UpdateFieldLevelEncryptionConfigRequest `object`
  * FieldLevelEncryptionConfig **required**
    * CallerReference **required**
    * Comment
    * ContentTypeProfileConfig
      * ContentTypeProfiles
        * Items
          * items
        * Quantity **required**
      * ForwardWhenContentTypeIsUnknown **required**
    * QueryArgProfileConfig
      * ForwardWhenQueryArgProfileIsUnknown **required**
      * QueryArgProfiles
        * Items
          * items
        * Quantity **required**

### UpdateFieldLevelEncryptionConfigResult
* UpdateFieldLevelEncryptionConfigResult `object`
  * FieldLevelEncryption
    * FieldLevelEncryptionConfig **required**
      * CallerReference **required**
      * Comment
      * ContentTypeProfileConfig
        * ContentTypeProfiles
          * Items
          * Quantity **required**
        * ForwardWhenContentTypeIsUnknown **required**
      * QueryArgProfileConfig
        * ForwardWhenQueryArgProfileIsUnknown **required**
        * QueryArgProfiles
          * Items
          * Quantity **required**
    * Id **required**
    * LastModifiedTime **required**

### UpdateFieldLevelEncryptionProfileRequest
* UpdateFieldLevelEncryptionProfileRequest `object`
  * FieldLevelEncryptionProfileConfig **required**
    * CallerReference **required**
    * Comment
    * EncryptionEntities **required**
      * Items
        * items
          * FieldPatterns **required**
          * ProviderId **required**
          * PublicKeyId **required**
      * Quantity **required**
    * Name **required**

### UpdateFieldLevelEncryptionProfileResult
* UpdateFieldLevelEncryptionProfileResult `object`
  * FieldLevelEncryptionProfile
    * FieldLevelEncryptionProfileConfig **required**
      * CallerReference **required**
      * Comment
      * EncryptionEntities **required**
        * Items
          * items
        * Quantity **required**
      * Name **required**
    * Id **required**
    * LastModifiedTime **required**

### UpdateKeyGroupRequest
* UpdateKeyGroupRequest `object`
  * KeyGroupConfig **required**
    * Comment
    * Items **required**
      * items
    * Name **required**

### UpdateKeyGroupResult
* UpdateKeyGroupResult `object`
  * KeyGroup
    * Id **required**
    * KeyGroupConfig **required**
      * Comment
      * Items **required**
        * items
      * Name **required**
    * LastModifiedTime **required**

### UpdateOriginRequestPolicyRequest
* UpdateOriginRequestPolicyRequest `object`
  * OriginRequestPolicyConfig **required**
    * Comment
    * CookiesConfig **required**
      * CookieBehavior **required**
      * Cookies [CookieNames](#cookienames)
    * HeadersConfig **required**
      * HeaderBehavior **required**
      * Headers [Headers](#headers)
    * Name **required**
    * QueryStringsConfig **required**
      * QueryStringBehavior **required**
      * QueryStrings
        * Items
          * items
        * Quantity **required**

### UpdateOriginRequestPolicyResult
* UpdateOriginRequestPolicyResult `object`
  * OriginRequestPolicy
    * Id **required**
    * LastModifiedTime **required**
    * OriginRequestPolicyConfig **required**
      * Comment
      * CookiesConfig **required**
        * CookieBehavior **required**
        * Cookies [CookieNames](#cookienames)
      * HeadersConfig **required**
        * HeaderBehavior **required**
        * Headers [Headers](#headers)
      * Name **required**
      * QueryStringsConfig **required**
        * QueryStringBehavior **required**
        * QueryStrings
          * Items
          * Quantity **required**

### UpdatePublicKeyRequest
* UpdatePublicKeyRequest `object`
  * PublicKeyConfig **required**
    * CallerReference **required**
    * Comment
    * EncodedKey **required**
    * Name **required**

### UpdatePublicKeyResult
* UpdatePublicKeyResult `object`
  * PublicKey
    * CreatedTime **required**
    * Id **required**
    * PublicKeyConfig **required**
      * CallerReference **required**
      * Comment
      * EncodedKey **required**
      * Name **required**

### UpdateRealtimeLogConfigRequest
* UpdateRealtimeLogConfigRequest `object`
  * ARN
  * EndPoints
    * items [EndPoint](#endpoint)
  * Fields
    * items
  * Name
  * SamplingRate

### UpdateRealtimeLogConfigResult
* UpdateRealtimeLogConfigResult `object`
  * RealtimeLogConfig
    * ARN **required**
    * EndPoints **required**
      * items [EndPoint](#endpoint)
    * Fields **required**
      * items
    * Name **required**
    * SamplingRate **required**

### UpdateStreamingDistributionRequest
* UpdateStreamingDistributionRequest `object`: The request to update a streaming distribution.
  * StreamingDistributionConfig **required**
    * Aliases
      * Items
        * items
      * Quantity **required**
    * CallerReference **required**
    * Comment **required**
    * Enabled **required**
    * Logging
      * Bucket **required**
      * Enabled **required**
      * Prefix **required**
    * PriceClass
    * S3Origin **required**
      * DomainName **required**
      * OriginAccessIdentity **required**
    * TrustedSigners **required**
      * Enabled **required**
      * Items
        * items
      * Quantity **required**

### UpdateStreamingDistributionResult
* UpdateStreamingDistributionResult `object`: The returned result of the corresponding request.
  * StreamingDistribution
    * ARN **required**
    * ActiveTrustedSigners **required**
      * Enabled **required**
      * Items
        * items
          * AwsAccountNumber
          * KeyPairIds
      * Quantity **required**
    * DomainName **required**
    * Id **required**
    * LastModifiedTime
    * Status **required**
    * StreamingDistributionConfig **required**
      * Aliases
        * Items
          * items
        * Quantity **required**
      * CallerReference **required**
      * Comment **required**
      * Enabled **required**
      * Logging
        * Bucket **required**
        * Enabled **required**
        * Prefix **required**
      * PriceClass
      * S3Origin **required**
        * DomainName **required**
        * OriginAccessIdentity **required**
      * TrustedSigners **required**
        * Enabled **required**
        * Items
          * items
        * Quantity **required**

### ViewerCertificate
* ViewerCertificate `object`: <p>A complex type that determines the distribution’s SSL/TLS configuration for communicating with viewers.</p> <p>If the distribution doesn’t use <code>Aliases</code> (also known as alternate domain names or CNAMEs)—that is, if the distribution uses the CloudFront domain name such as <code>d111111abcdef8.cloudfront.net</code>—set <code>CloudFrontDefaultCertificate</code> to <code>true</code> and leave all other fields empty.</p> <p>If the distribution uses <code>Aliases</code> (alternate domain names or CNAMEs), use the fields in this type to specify the following settings:</p> <ul> <li> <p>Which viewers the distribution accepts HTTPS connections from: only viewers that support <a href="https://en.wikipedia.org/wiki/Server_Name_Indication">server name indication (SNI)</a> (recommended), or all viewers including those that don’t support SNI.</p> <ul> <li> <p>To accept HTTPS connections from only viewers that support SNI, set <code>SSLSupportMethod</code> to <code>sni-only</code>. This is recommended. Most browsers and clients support SNI. </p> </li> <li> <p>To accept HTTPS connections from all viewers, including those that don’t support SNI, set <code>SSLSupportMethod</code> to <code>vip</code>. This is not recommended, and results in additional monthly charges from CloudFront. </p> </li> </ul> </li> <li> <p>The minimum SSL/TLS protocol version that the distribution can use to communicate with viewers. To specify a minimum version, choose a value for <code>MinimumProtocolVersion</code>. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-web-values-specify.html#DownloadDistValues-security-policy">Security Policy</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> </li> <li> <p>The location of the SSL/TLS certificate, <a href="https://docs.aws.amazon.com/acm/latest/userguide/acm-overview.html">AWS Certificate Manager (ACM)</a> (recommended) or <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_server-certs.html">AWS Identity and Access Management (AWS IAM)</a>. You specify the location by setting a value in one of the following fields (not both):</p> <ul> <li> <p> <code>ACMCertificateArn</code> </p> </li> <li> <p> <code>IAMCertificateId</code> </p> </li> </ul> </li> </ul> <p>All distributions support HTTPS connections from viewers. To require viewers to use HTTPS only, or to redirect them from HTTP to HTTPS, use <code>ViewerProtocolPolicy</code> in the <code>CacheBehavior</code> or <code>DefaultCacheBehavior</code>. To specify how CloudFront should use SSL/TLS to communicate with your custom origin, use <code>CustomOriginConfig</code>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-https.html">Using HTTPS with CloudFront</a> and <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-https-alternate-domain-names.html"> Using Alternate Domain Names and HTTPS</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
  * ACMCertificateArn
  * Certificate
  * CertificateSource
  * CloudFrontDefaultCertificate
  * IAMCertificateId
  * MinimumProtocolVersion
  * SSLSupportMethod

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


