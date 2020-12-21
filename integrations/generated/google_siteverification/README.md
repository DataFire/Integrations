# @datafire/google_siteverification

Client library for Google Site Verification API

## Installation and Usage
```bash
npm install --save @datafire/google_siteverification
```
```js
let google_siteverification = require('@datafire/google_siteverification').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

.then(data => {
  console.log(data);
});
```

## Description

Verifies ownership of websites or domains with Google.

## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_siteverification.oauthCallback({
  "code": ""
}, context)
```

#### Input
* input `object`
  * code **required** `string`

#### Output
* output `object`
  * access_token `string`
  * refresh_token `string`
  * token_type `string`
  * scope `string`
  * expiration `string`

### oauthRefresh
Exchange a refresh_token for an access_token


```js
google_siteverification.oauthRefresh(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * access_token `string`
  * refresh_token `string`
  * token_type `string`
  * scope `string`
  * expiration `string`

### siteVerification.webResource.getToken
Get a verification token for placing on a website or domain.


```js
google_siteverification.siteVerification.webResource.getToken({}, context)
```

#### Input
* input `object`
  * body [SiteVerificationWebResourceGettokenRequest](#siteverificationwebresourcegettokenrequest)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [SiteVerificationWebResourceGettokenResponse](#siteverificationwebresourcegettokenresponse)

### siteVerification.webResource.list
Get the list of your verified websites and domains.


```js
google_siteverification.siteVerification.webResource.list({}, context)
```

#### Input
* input `object`
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [SiteVerificationWebResourceListResponse](#siteverificationwebresourcelistresponse)

### siteVerification.webResource.insert
Attempt verification of a website or domain.


```js
google_siteverification.siteVerification.webResource.insert({
  "verificationMethod": ""
}, context)
```

#### Input
* input `object`
  * verificationMethod **required** `string`: The method to use for verifying a site or domain.
  * body [SiteVerificationWebResourceResource](#siteverificationwebresourceresource)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [SiteVerificationWebResourceResource](#siteverificationwebresourceresource)

### siteVerification.webResource.delete
Relinquish ownership of a website or domain.


```js
google_siteverification.siteVerification.webResource.delete({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The id of a verified site or domain.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
*Output schema unknown*

### siteVerification.webResource.get
Get the most current data for a website or domain.


```js
google_siteverification.siteVerification.webResource.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The id of a verified site or domain.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [SiteVerificationWebResourceResource](#siteverificationwebresourceresource)

### siteVerification.webResource.patch
Modify the list of owners for your website or domain. This method supports patch semantics.


```js
google_siteverification.siteVerification.webResource.patch({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The id of a verified site or domain.
  * body [SiteVerificationWebResourceResource](#siteverificationwebresourceresource)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [SiteVerificationWebResourceResource](#siteverificationwebresourceresource)

### siteVerification.webResource.update
Modify the list of owners for your website or domain.


```js
google_siteverification.siteVerification.webResource.update({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The id of a verified site or domain.
  * body [SiteVerificationWebResourceResource](#siteverificationwebresourceresource)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [SiteVerificationWebResourceResource](#siteverificationwebresourceresource)



## Definitions

### SiteVerificationWebResourceGettokenRequest
* SiteVerificationWebResourceGettokenRequest `object`
  * site `object`: The site for which a verification token will be generated.
    * identifier `string`: The site identifier. If the type is set to SITE, the identifier is a URL. If the type is set to INET_DOMAIN, the site identifier is a domain name.
    * type `string`: The type of resource to be verified. Can be SITE or INET_DOMAIN (domain name).
  * verificationMethod `string`: The verification method that will be used to verify this site. For sites, 'FILE' or 'META' methods may be used. For domains, only 'DNS' may be used.

### SiteVerificationWebResourceGettokenResponse
* SiteVerificationWebResourceGettokenResponse `object`
  * method `string`: The verification method to use in conjunction with this token. For FILE, the token should be placed in the top-level directory of the site, stored inside a file of the same name. For META, the token should be placed in the HEAD tag of the default page that is loaded for the site. For DNS, the token should be placed in a TXT record of the domain.
  * token `string`: The verification token. The token must be placed appropriately in order for verification to succeed.

### SiteVerificationWebResourceListResponse
* SiteVerificationWebResourceListResponse `object`
  * items `array`: The list of sites that are owned by the authenticated user.
    * items [SiteVerificationWebResourceResource](#siteverificationwebresourceresource)

### SiteVerificationWebResourceResource
* SiteVerificationWebResourceResource `object`
  * id `string`: The string used to identify this site. This value should be used in the "id" portion of the REST URL for the Get, Update, and Delete operations.
  * owners `array`: The email addresses of all verified owners.
    * items `string`
  * site `object`: The address and type of a site that is verified or will be verified.
    * identifier `string`: The site identifier. If the type is set to SITE, the identifier is a URL. If the type is set to INET_DOMAIN, the site identifier is a domain name.
    * type `string`: The site type. Can be SITE or INET_DOMAIN (domain name).


