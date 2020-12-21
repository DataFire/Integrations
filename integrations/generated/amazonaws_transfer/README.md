# @datafire/amazonaws_transfer

Client library for AWS Transfer Family

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_transfer
```
```js
let amazonaws_transfer = require('@datafire/amazonaws_transfer').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

.then(data => {
  console.log(data);
});
```

## Description

AWS Transfer Family is a fully managed service that enables the transfer of files over the File Transfer Protocol (FTP), File Transfer Protocol over SSL (FTPS), or Secure Shell (SSH) File Transfer Protocol (SFTP) directly into and out of Amazon Simple Storage Service (Amazon S3). AWS helps you seamlessly migrate your file transfer workflows to AWS Transfer Family by integrating with existing authentication systems, and providing DNS routing with Amazon Route 53 so nothing changes for your customers and partners, or their applications. With your data in Amazon S3, you can use it with AWS services for processing, analytics, machine learning, and archiving. Getting started with AWS Transfer Family is easy since there is no infrastructure to buy and set up.

## Actions

### CreateServer



```js
amazonaws_transfer.CreateServer({}, context)
```

#### Input
* input `object`
  * Certificate
  * EndpointDetails
    * AddressAllocationIds
      * items [AddressAllocationId](#addressallocationid)
    * SecurityGroupIds
      * items [SecurityGroupId](#securitygroupid)
    * SubnetIds
      * items [SubnetId](#subnetid)
    * VpcEndpointId
    * VpcId
  * EndpointType
  * HostKey
  * IdentityProviderDetails
    * InvocationRole
    * Url
  * IdentityProviderType
  * LoggingRole
  * Protocols
    * items [Protocol](#protocol)
  * SecurityPolicyName
  * Tags
    * items [Tag](#tag)

#### Output
* output [CreateServerResponse](#createserverresponse)

### CreateUser



```js
amazonaws_transfer.CreateUser({
  "Role": null,
  "ServerId": null,
  "UserName": null
}, context)
```

#### Input
* input `object`
  * HomeDirectory
  * HomeDirectoryMappings
    * items [HomeDirectoryMapEntry](#homedirectorymapentry)
  * HomeDirectoryType
  * Policy
  * Role **required**
  * ServerId **required**
  * SshPublicKeyBody
  * Tags
    * items [Tag](#tag)
  * UserName **required**

#### Output
* output [CreateUserResponse](#createuserresponse)

### DeleteServer



```js
amazonaws_transfer.DeleteServer({
  "ServerId": null
}, context)
```

#### Input
* input `object`
  * ServerId **required**

#### Output
*Output schema unknown*

### DeleteSshPublicKey



```js
amazonaws_transfer.DeleteSshPublicKey({
  "ServerId": null,
  "SshPublicKeyId": null,
  "UserName": null
}, context)
```

#### Input
* input `object`
  * ServerId **required**
  * SshPublicKeyId **required**
  * UserName **required**

#### Output
*Output schema unknown*

### DeleteUser



```js
amazonaws_transfer.DeleteUser({
  "ServerId": null,
  "UserName": null
}, context)
```

#### Input
* input `object`
  * ServerId **required**
  * UserName **required**

#### Output
*Output schema unknown*

### DescribeSecurityPolicy



```js
amazonaws_transfer.DescribeSecurityPolicy({
  "SecurityPolicyName": null
}, context)
```

#### Input
* input `object`
  * SecurityPolicyName **required**

#### Output
* output [DescribeSecurityPolicyResponse](#describesecuritypolicyresponse)

### DescribeServer



```js
amazonaws_transfer.DescribeServer({
  "ServerId": null
}, context)
```

#### Input
* input `object`
  * ServerId **required**

#### Output
* output [DescribeServerResponse](#describeserverresponse)

### DescribeUser



```js
amazonaws_transfer.DescribeUser({
  "ServerId": null,
  "UserName": null
}, context)
```

#### Input
* input `object`
  * ServerId **required**
  * UserName **required**

#### Output
* output [DescribeUserResponse](#describeuserresponse)

### ImportSshPublicKey



```js
amazonaws_transfer.ImportSshPublicKey({
  "ServerId": null,
  "SshPublicKeyBody": null,
  "UserName": null
}, context)
```

#### Input
* input `object`
  * ServerId **required**
  * SshPublicKeyBody **required**
  * UserName **required**

#### Output
* output [ImportSshPublicKeyResponse](#importsshpublickeyresponse)

### ListSecurityPolicies



```js
amazonaws_transfer.ListSecurityPolicies({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults
  * NextToken

#### Output
* output [ListSecurityPoliciesResponse](#listsecuritypoliciesresponse)

### ListServers



```js
amazonaws_transfer.ListServers({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults
  * NextToken

#### Output
* output [ListServersResponse](#listserversresponse)

### ListTagsForResource



```js
amazonaws_transfer.ListTagsForResource({
  "Arn": null
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * Arn **required**
  * MaxResults
  * NextToken

#### Output
* output [ListTagsForResourceResponse](#listtagsforresourceresponse)

### ListUsers



```js
amazonaws_transfer.ListUsers({
  "ServerId": null
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults
  * NextToken
  * ServerId **required**

#### Output
* output [ListUsersResponse](#listusersresponse)

### StartServer



```js
amazonaws_transfer.StartServer({
  "ServerId": null
}, context)
```

#### Input
* input `object`
  * ServerId **required**

#### Output
*Output schema unknown*

### StopServer



```js
amazonaws_transfer.StopServer({
  "ServerId": null
}, context)
```

#### Input
* input `object`
  * ServerId **required**

#### Output
*Output schema unknown*

### TagResource



```js
amazonaws_transfer.TagResource({
  "Arn": null,
  "Tags": null
}, context)
```

#### Input
* input `object`
  * Arn **required**
  * Tags **required**
    * items [Tag](#tag)

#### Output
*Output schema unknown*

### TestIdentityProvider



```js
amazonaws_transfer.TestIdentityProvider({
  "ServerId": null,
  "UserName": null
}, context)
```

#### Input
* input `object`
  * ServerId **required**
  * ServerProtocol
  * SourceIp
  * UserName **required**
  * UserPassword

#### Output
* output [TestIdentityProviderResponse](#testidentityproviderresponse)

### UntagResource



```js
amazonaws_transfer.UntagResource({
  "Arn": null,
  "TagKeys": null
}, context)
```

#### Input
* input `object`
  * Arn **required**
  * TagKeys **required**
    * items [TagKey](#tagkey)

#### Output
*Output schema unknown*

### UpdateServer



```js
amazonaws_transfer.UpdateServer({
  "ServerId": null
}, context)
```

#### Input
* input `object`
  * Certificate
  * EndpointDetails
    * AddressAllocationIds
      * items [AddressAllocationId](#addressallocationid)
    * SecurityGroupIds
      * items [SecurityGroupId](#securitygroupid)
    * SubnetIds
      * items [SubnetId](#subnetid)
    * VpcEndpointId
    * VpcId
  * EndpointType
  * HostKey
  * IdentityProviderDetails
    * InvocationRole
    * Url
  * LoggingRole
  * Protocols
    * items [Protocol](#protocol)
  * SecurityPolicyName
  * ServerId **required**

#### Output
* output [UpdateServerResponse](#updateserverresponse)

### UpdateUser



```js
amazonaws_transfer.UpdateUser({
  "ServerId": null,
  "UserName": null
}, context)
```

#### Input
* input `object`
  * HomeDirectory
  * HomeDirectoryMappings
    * items [HomeDirectoryMapEntry](#homedirectorymapentry)
  * HomeDirectoryType
  * Policy
  * Role
  * ServerId **required**
  * UserName **required**

#### Output
* output [UpdateUserResponse](#updateuserresponse)



## Definitions

### AccessDeniedException


### AddressAllocationId
* AddressAllocationId `string`

### AddressAllocationIds
* AddressAllocationIds `array`
  * items [AddressAllocationId](#addressallocationid)

### Arn
* Arn `string`

### Certificate
* Certificate `string`

### ConflictException


### CreateServerRequest
* CreateServerRequest `object`
  * Certificate
  * EndpointDetails
    * AddressAllocationIds
      * items [AddressAllocationId](#addressallocationid)
    * SecurityGroupIds
      * items [SecurityGroupId](#securitygroupid)
    * SubnetIds
      * items [SubnetId](#subnetid)
    * VpcEndpointId
    * VpcId
  * EndpointType
  * HostKey
  * IdentityProviderDetails
    * InvocationRole
    * Url
  * IdentityProviderType
  * LoggingRole
  * Protocols
    * items [Protocol](#protocol)
  * SecurityPolicyName
  * Tags
    * items [Tag](#tag)

### CreateServerResponse
* CreateServerResponse `object`
  * ServerId **required**

### CreateUserRequest
* CreateUserRequest `object`
  * HomeDirectory
  * HomeDirectoryMappings
    * items [HomeDirectoryMapEntry](#homedirectorymapentry)
  * HomeDirectoryType
  * Policy
  * Role **required**
  * ServerId **required**
  * SshPublicKeyBody
  * Tags
    * items [Tag](#tag)
  * UserName **required**

### CreateUserResponse
* CreateUserResponse `object`
  * ServerId **required**
  * UserName **required**

### DateImported
* DateImported `string`

### DeleteServerRequest
* DeleteServerRequest `object`
  * ServerId **required**

### DeleteSshPublicKeyRequest
* DeleteSshPublicKeyRequest `object`
  * ServerId **required**
  * SshPublicKeyId **required**
  * UserName **required**

### DeleteUserRequest
* DeleteUserRequest `object`
  * ServerId **required**
  * UserName **required**

### DescribeSecurityPolicyRequest
* DescribeSecurityPolicyRequest `object`
  * SecurityPolicyName **required**

### DescribeSecurityPolicyResponse
* DescribeSecurityPolicyResponse `object`
  * SecurityPolicy **required**
    * Fips
    * SecurityPolicyName **required**
    * SshCiphers
      * items [SecurityPolicyOption](#securitypolicyoption)
    * SshKexs
      * items [SecurityPolicyOption](#securitypolicyoption)
    * SshMacs
      * items [SecurityPolicyOption](#securitypolicyoption)
    * TlsCiphers
      * items [SecurityPolicyOption](#securitypolicyoption)

### DescribeServerRequest
* DescribeServerRequest `object`
  * ServerId **required**

### DescribeServerResponse
* DescribeServerResponse `object`
  * Server **required**
    * Arn **required**
    * Certificate
    * EndpointDetails
      * AddressAllocationIds
        * items [AddressAllocationId](#addressallocationid)
      * SecurityGroupIds
        * items [SecurityGroupId](#securitygroupid)
      * SubnetIds
        * items [SubnetId](#subnetid)
      * VpcEndpointId
      * VpcId
    * EndpointType
    * HostKeyFingerprint
    * IdentityProviderDetails
      * InvocationRole
      * Url
    * IdentityProviderType
    * LoggingRole
    * Protocols
      * items [Protocol](#protocol)
    * SecurityPolicyName
    * ServerId
    * State
    * Tags
      * items [Tag](#tag)
    * UserCount

### DescribeUserRequest
* DescribeUserRequest `object`
  * ServerId **required**
  * UserName **required**

### DescribeUserResponse
* DescribeUserResponse `object`
  * ServerId **required**
  * User **required**
    * Arn **required**
    * HomeDirectory
    * HomeDirectoryMappings
      * items [HomeDirectoryMapEntry](#homedirectorymapentry)
    * HomeDirectoryType
    * Policy
    * Role
    * SshPublicKeys
      * items [SshPublicKey](#sshpublickey)
    * Tags
      * items [Tag](#tag)
    * UserName

### DescribedSecurityPolicy
* DescribedSecurityPolicy `object`: Describes the properties of a security policy that was specified. For more information about security policies, see <a href="https://docs.aws.amazon.com/transfer/latest/userguide/security-policies.html">Working with security policies</a>.
  * Fips
  * SecurityPolicyName **required**
  * SshCiphers
    * items [SecurityPolicyOption](#securitypolicyoption)
  * SshKexs
    * items [SecurityPolicyOption](#securitypolicyoption)
  * SshMacs
    * items [SecurityPolicyOption](#securitypolicyoption)
  * TlsCiphers
    * items [SecurityPolicyOption](#securitypolicyoption)

### DescribedServer
* DescribedServer `object`: Describes the properties of a file transfer protocol-enabled server that was specified.
  * Arn **required**
  * Certificate
  * EndpointDetails
    * AddressAllocationIds
      * items [AddressAllocationId](#addressallocationid)
    * SecurityGroupIds
      * items [SecurityGroupId](#securitygroupid)
    * SubnetIds
      * items [SubnetId](#subnetid)
    * VpcEndpointId
    * VpcId
  * EndpointType
  * HostKeyFingerprint
  * IdentityProviderDetails
    * InvocationRole
    * Url
  * IdentityProviderType
  * LoggingRole
  * Protocols
    * items [Protocol](#protocol)
  * SecurityPolicyName
  * ServerId
  * State
  * Tags
    * items [Tag](#tag)
  * UserCount

### DescribedUser
* DescribedUser `object`: Describes the properties of a user that was specified.
  * Arn **required**
  * HomeDirectory
  * HomeDirectoryMappings
    * items [HomeDirectoryMapEntry](#homedirectorymapentry)
  * HomeDirectoryType
  * Policy
  * Role
  * SshPublicKeys
    * items [SshPublicKey](#sshpublickey)
  * Tags
    * items [Tag](#tag)
  * UserName

### EndpointDetails
* EndpointDetails `object`: The virtual private cloud (VPC) endpoint settings that are configured for your file transfer protocol-enabled server. With a VPC endpoint, you can restrict access to your server and resources only within your VPC. To control incoming internet traffic, invoke the <code>UpdateServer</code> API and attach an Elastic IP to your server's endpoint.
  * AddressAllocationIds
    * items [AddressAllocationId](#addressallocationid)
  * SecurityGroupIds
    * items [SecurityGroupId](#securitygroupid)
  * SubnetIds
    * items [SubnetId](#subnetid)
  * VpcEndpointId
  * VpcId

### EndpointType
* EndpointType `string` (values: PUBLIC, VPC, VPC_ENDPOINT)

### Fips
* Fips `boolean`

### HomeDirectory
* HomeDirectory `string`

### HomeDirectoryMapEntry
* HomeDirectoryMapEntry `object`: Represents an object that contains entries and targets for <code>HomeDirectoryMappings</code>.
  * Entry **required**
  * Target **required**

### HomeDirectoryMappings
* HomeDirectoryMappings `array`
  * items [HomeDirectoryMapEntry](#homedirectorymapentry)

### HomeDirectoryType
* HomeDirectoryType `string` (values: PATH, LOGICAL)

### HostKey
* HostKey `string`

### HostKeyFingerprint
* HostKeyFingerprint `string`

### IdentityProviderDetails
* IdentityProviderDetails `object`: Returns information related to the type of user authentication that is in use for a file transfer protocol-enabled server's users. A server can have only one method of authentication.
  * InvocationRole
  * Url

### IdentityProviderType
* IdentityProviderType `string` (values: SERVICE_MANAGED, API_GATEWAY): Returns information related to the type of user authentication that is in use for a file transfer protocol-enabled server's users. For <code>SERVICE_MANAGED</code> authentication, the Secure Shell (SSH) public keys are stored with a user on the server instance. For <code>API_GATEWAY</code> authentication, your custom authentication method is implemented by using an API call. The server can have only one method of authentication.

### ImportSshPublicKeyRequest
* ImportSshPublicKeyRequest `object`
  * ServerId **required**
  * SshPublicKeyBody **required**
  * UserName **required**

### ImportSshPublicKeyResponse
* ImportSshPublicKeyResponse `object`: Identifies the user, the server they belong to, and the identifier of the SSH public key associated with that user. A user can have more than one key on each server that they are associated with.
  * ServerId **required**
  * SshPublicKeyId **required**
  * UserName **required**

### InternalServiceError


### InvalidNextTokenException


### InvalidRequestException


### ListSecurityPoliciesRequest
* ListSecurityPoliciesRequest `object`
  * MaxResults
  * NextToken

### ListSecurityPoliciesResponse
* ListSecurityPoliciesResponse `object`
  * NextToken
  * SecurityPolicyNames **required**
    * items [SecurityPolicyName](#securitypolicyname)

### ListServersRequest
* ListServersRequest `object`
  * MaxResults
  * NextToken

### ListServersResponse
* ListServersResponse `object`
  * NextToken
  * Servers **required**
    * items [ListedServer](#listedserver)

### ListTagsForResourceRequest
* ListTagsForResourceRequest `object`
  * Arn **required**
  * MaxResults
  * NextToken

### ListTagsForResourceResponse
* ListTagsForResourceResponse `object`
  * Arn
  * NextToken
  * Tags
    * items [Tag](#tag)

### ListUsersRequest
* ListUsersRequest `object`
  * MaxResults
  * NextToken
  * ServerId **required**

### ListUsersResponse
* ListUsersResponse `object`
  * NextToken
  * ServerId **required**
  * Users **required**
    * items [ListedUser](#listeduser)

### ListedServer
* ListedServer `object`: Returns properties of a file transfer protocol-enabled server that was specified.
  * Arn **required**
  * EndpointType
  * IdentityProviderType
  * LoggingRole
  * ServerId
  * State
  * UserCount

### ListedServers
* ListedServers `array`
  * items [ListedServer](#listedserver)

### ListedUser
* ListedUser `object`: Returns properties of the user that you specify.
  * Arn **required**
  * HomeDirectory
  * HomeDirectoryType
  * Role
  * SshPublicKeyCount
  * UserName

### ListedUsers
* ListedUsers `array`
  * items [ListedUser](#listeduser)

### MapEntry
* MapEntry `string`

### MapTarget
* MapTarget `string`

### MaxResults
* MaxResults `integer`

### Message
* Message `string`

### NextToken
* NextToken `string`

### NullableRole
* NullableRole `string`

### Policy
* Policy `string`

### Protocol
* Protocol `string` (values: SFTP, FTP, FTPS)

### Protocols
* Protocols `array`
  * items [Protocol](#protocol)

### ResourceExistsException


### ResourceNotFoundException


### Response
* Response `string`

### Role
* Role `string`

### SecurityGroupId
* SecurityGroupId `string`

### SecurityGroupIds
* SecurityGroupIds `array`
  * items [SecurityGroupId](#securitygroupid)

### SecurityPolicyName
* SecurityPolicyName `string`

### SecurityPolicyNames
* SecurityPolicyNames `array`
  * items [SecurityPolicyName](#securitypolicyname)

### SecurityPolicyOption
* SecurityPolicyOption `string`

### SecurityPolicyOptions
* SecurityPolicyOptions `array`
  * items [SecurityPolicyOption](#securitypolicyoption)

### ServerId
* ServerId `string`

### ServiceUnavailableException


### SourceIp
* SourceIp `string`

### SshPublicKey
* SshPublicKey `object`: Provides information about the public Secure Shell (SSH) key that is associated with a user account for the specific file transfer protocol-enabled server (as identified by <code>ServerId</code>). The information returned includes the date the key was imported, the public key contents, and the public key ID. A user can store more than one SSH public key associated with their user name on a specific server.
  * DateImported **required**
  * SshPublicKeyBody **required**
  * SshPublicKeyId **required**

### SshPublicKeyBody
* SshPublicKeyBody `string`

### SshPublicKeyCount
* SshPublicKeyCount `integer`

### SshPublicKeyId
* SshPublicKeyId `string`

### SshPublicKeys
* SshPublicKeys `array`
  * items [SshPublicKey](#sshpublickey)

### StartServerRequest
* StartServerRequest `object`
  * ServerId **required**

### State
* State `string` (values: OFFLINE, ONLINE, STARTING, STOPPING, START_FAILED, STOP_FAILED): <p>Describes the condition of a file transfer protocol-enabled server with respect to its ability to perform file operations. There are six possible states: <code>OFFLINE</code>, <code>ONLINE</code>, <code>STARTING</code>, <code>STOPPING</code>, <code>START_FAILED</code>, and <code>STOP_FAILED</code>.</p> <p> <code>OFFLINE</code> indicates that the server exists, but that it is not available for file operations. <code>ONLINE</code> indicates that the server is available to perform file operations. <code>STARTING</code> indicates that the server's was instantiated, but the server is not yet available to perform file operations. Under normal conditions, it can take a couple of minutes for the server to be completely operational. Both <code>START_FAILED</code> and <code>STOP_FAILED</code> are error conditions.</p>

### StatusCode
* StatusCode `integer`

### StopServerRequest
* StopServerRequest `object`
  * ServerId **required**

### SubnetId
* SubnetId `string`

### SubnetIds
* SubnetIds `array`
  * items [SubnetId](#subnetid)

### Tag
* Tag `object`: Creates a key-value pair for a specific resource. Tags are metadata that you can use to search for and group a resource for various purposes. You can apply tags to servers, users, and roles. A tag key can take more than one value. For example, to group servers for accounting purposes, you might create a tag called <code>Group</code> and assign the values <code>Research</code> and <code>Accounting</code> to that group.
  * Key **required**
  * Value **required**

### TagKey
* TagKey `string`

### TagKeys
* TagKeys `array`
  * items [TagKey](#tagkey)

### TagResourceRequest
* TagResourceRequest `object`
  * Arn **required**
  * Tags **required**
    * items [Tag](#tag)

### TagValue
* TagValue `string`

### Tags
* Tags `array`
  * items [Tag](#tag)

### TestIdentityProviderRequest
* TestIdentityProviderRequest `object`
  * ServerId **required**
  * ServerProtocol
  * SourceIp
  * UserName **required**
  * UserPassword

### TestIdentityProviderResponse
* TestIdentityProviderResponse `object`
  * Message
  * Response
  * StatusCode **required**
  * Url **required**

### ThrottlingException


### UntagResourceRequest
* UntagResourceRequest `object`
  * Arn **required**
  * TagKeys **required**
    * items [TagKey](#tagkey)

### UpdateServerRequest
* UpdateServerRequest `object`
  * Certificate
  * EndpointDetails
    * AddressAllocationIds
      * items [AddressAllocationId](#addressallocationid)
    * SecurityGroupIds
      * items [SecurityGroupId](#securitygroupid)
    * SubnetIds
      * items [SubnetId](#subnetid)
    * VpcEndpointId
    * VpcId
  * EndpointType
  * HostKey
  * IdentityProviderDetails
    * InvocationRole
    * Url
  * LoggingRole
  * Protocols
    * items [Protocol](#protocol)
  * SecurityPolicyName
  * ServerId **required**

### UpdateServerResponse
* UpdateServerResponse `object`
  * ServerId **required**

### UpdateUserRequest
* UpdateUserRequest `object`
  * HomeDirectory
  * HomeDirectoryMappings
    * items [HomeDirectoryMapEntry](#homedirectorymapentry)
  * HomeDirectoryType
  * Policy
  * Role
  * ServerId **required**
  * UserName **required**

### UpdateUserResponse
* UpdateUserResponse `object`:  <code>UpdateUserResponse</code> returns the user name and identifier for the request to update a user's properties.
  * ServerId **required**
  * UserName **required**

### Url
* Url `string`

### UserCount
* UserCount `integer`

### UserName
* UserName `string`

### UserPassword
* UserPassword `string`

### VpcEndpointId
* VpcEndpointId `string`

### VpcId
* VpcId `string`


