# @datafire/amazonaws_sso

Client library for AWS Single Sign-On

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_sso
```
```js
let amazonaws_sso = require('@datafire/amazonaws_sso').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

.then(data => {
  console.log(data);
});
```

## Description

<p>AWS Single Sign-On Portal is a web service that makes it easy for you to assign user access to AWS SSO resources such as the user portal. Users can get AWS account applications and roles assigned to them and get federated into the application.</p> <p>For general information about AWS SSO, see <a href="https://docs.aws.amazon.com/singlesignon/latest/userguide/what-is.html">What is AWS Single Sign-On?</a> in the <i>AWS SSO User Guide</i>.</p> <p>This API reference guide describes the AWS SSO Portal operations that you can call programatically and includes detailed information on data types and errors.</p> <note> <p>AWS provides SDKs that consist of libraries and sample code for various programming languages and platforms, such as Java, Ruby, .Net, iOS, or Android. The SDKs provide a convenient way to create programmatic access to AWS SSO and other AWS services. For more information about the AWS SDKs, including how to download and install them, see <a href="http://aws.amazon.com/tools/">Tools for Amazon Web Services</a>.</p> </note>

## Actions

### ListAccounts



```js
amazonaws_sso.ListAccounts({}, context)
```

#### Input
* input `object`
  * nextToken `string`
  * maxResult `integer`
  * x-amz-ssoBearerToken `string`
  * maxResults `string`

#### Output
* output [ListAccountsResponse](#listaccountsresponse)

### ListAccountRoles



```js
amazonaws_sso.ListAccountRoles({}, context)
```

#### Input
* input `object`
  * nextToken `string`
  * maxResult `integer`
  * x-amz-ssoBearerToken `string`
  * accountId `string`
  * maxResults `string`

#### Output
* output [ListAccountRolesResponse](#listaccountrolesresponse)

### GetRoleCredentials



```js
amazonaws_sso.GetRoleCredentials({}, context)
```

#### Input
* input `object`
  * roleName `string`
  * accountId `string`
  * x-amz-ssoBearerToken `string`

#### Output
* output [GetRoleCredentialsResponse](#getrolecredentialsresponse)

### Logout



```js
amazonaws_sso.Logout({}, context)
```

#### Input
* input `object`
  * x-amz-ssoBearerToken `string`

#### Output
*Output schema unknown*



## Definitions

### AccessKeyType
* AccessKeyType `string`

### AccessTokenType
* AccessTokenType `string`

### AccountIdType
* AccountIdType `string`

### AccountInfo
* AccountInfo `object`: Provides information about your AWS account.
  * accountId
  * accountName
  * emailAddress

### AccountListType
* AccountListType `array`
  * items [AccountInfo](#accountinfo)

### AccountNameType
* AccountNameType `string`

### EmailAddressType
* EmailAddressType `string`

### ExpirationTimestampType
* ExpirationTimestampType `integer`

### GetRoleCredentialsRequest
* GetRoleCredentialsRequest `object`

### GetRoleCredentialsResponse
* GetRoleCredentialsResponse `object`
  * roleCredentials
    * accessKeyId
    * expiration
    * secretAccessKey
    * sessionToken

### InvalidRequestException


### ListAccountRolesRequest
* ListAccountRolesRequest `object`

### ListAccountRolesResponse
* ListAccountRolesResponse `object`
  * nextToken
  * roleList
    * items [RoleInfo](#roleinfo)

### ListAccountsRequest
* ListAccountsRequest `object`

### ListAccountsResponse
* ListAccountsResponse `object`
  * accountList
    * items [AccountInfo](#accountinfo)
  * nextToken

### LogoutRequest
* LogoutRequest `object`

### MaxResultType
* MaxResultType `integer`

### NextTokenType
* NextTokenType `string`

### ResourceNotFoundException


### RoleCredentials
* RoleCredentials `object`: Provides information about the role credentials that are assigned to the user.
  * accessKeyId
  * expiration
  * secretAccessKey
  * sessionToken

### RoleInfo
* RoleInfo `object`: Provides information about the role that is assigned to the user.
  * accountId
  * roleName

### RoleListType
* RoleListType `array`
  * items [RoleInfo](#roleinfo)

### RoleNameType
* RoleNameType `string`

### SecretAccessKeyType
* SecretAccessKeyType `string`

### SessionTokenType
* SessionTokenType `string`

### TooManyRequestsException


### UnauthorizedException



