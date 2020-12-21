# @datafire/amazonaws_codestar_connections

Client library for AWS CodeStar connections

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_codestar_connections
```
```js
let amazonaws_codestar_connections = require('@datafire/amazonaws_codestar_connections').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

.then(data => {
  console.log(data);
});
```

## Description

<fullname>AWS CodeStar Connections</fullname> <p>This AWS CodeStar Connections API Reference provides descriptions and usage examples of the operations and data types for the AWS CodeStar Connections API. You can use the connections API to work with connections and installations.</p> <p> <i>Connections</i> are configurations that you use to connect AWS resources to external code repositories. Each connection is a resource that can be given to services such as CodePipeline to connect to a third-party repository such as Bitbucket. For example, you can add the connection in CodePipeline so that it triggers your pipeline when a code change is made to your third-party code repository. Each connection is named and associated with a unique ARN that is used to reference the connection.</p> <p>When you create a connection, the console initiates a third-party connection handshake. <i>Installations</i> are the apps that are used to conduct this handshake. For example, the installation for the Bitbucket provider type is the Bitbucket app. When you create a connection, you can choose an existing installation or create one.</p> <p>When you want to create a connection to an installed provider type such as GitHub Enterprise Server, you create a <i>host</i> for your connections.</p> <p>You can work with connections by calling:</p> <ul> <li> <p> <a>CreateConnection</a>, which creates a uniquely named connection that can be referenced by services such as CodePipeline.</p> </li> <li> <p> <a>DeleteConnection</a>, which deletes the specified connection.</p> </li> <li> <p> <a>GetConnection</a>, which returns information about the connection, including the connection status.</p> </li> <li> <p> <a>ListConnections</a>, which lists the connections associated with your account.</p> </li> </ul> <p>You can work with hosts by calling:</p> <ul> <li> <p> <a>CreateHost</a>, which creates a host that represents the infrastructure where your provider is installed.</p> </li> <li> <p> <a>DeleteHost</a>, which deletes the specified host.</p> </li> <li> <p> <a>GetHost</a>, which returns information about the host, including the setup status.</p> </li> <li> <p> <a>ListHosts</a>, which lists the hosts associated with your account.</p> </li> </ul> <p>You can work with tags in AWS CodeStar Connections by calling the following:</p> <ul> <li> <p> <a>ListTagsForResource</a>, which gets information about AWS tags for a specified Amazon Resource Name (ARN) in AWS CodeStar Connections.</p> </li> <li> <p> <a>TagResource</a>, which adds or updates tags for a resource in AWS CodeStar Connections.</p> </li> <li> <p> <a>UntagResource</a>, which removes tags for a resource in AWS CodeStar Connections.</p> </li> </ul> <p>For information about how to use AWS CodeStar Connections, see the <a href="https://docs.aws.amazon.com/dtconsole/latest/userguide/welcome-connections.html">Developer Tools User Guide</a>.</p>

## Actions

### CreateConnection



```js
amazonaws_codestar_connections.CreateConnection({
  "ConnectionName": null
}, context)
```

#### Input
* input `object`
  * ConnectionName **required**
  * HostArn
  * ProviderType
  * Tags
    * items [Tag](#tag)

#### Output
* output [CreateConnectionOutput](#createconnectionoutput)

### CreateHost



```js
amazonaws_codestar_connections.CreateHost({
  "Name": null,
  "ProviderType": null,
  "ProviderEndpoint": null
}, context)
```

#### Input
* input `object`
  * Name **required**
  * ProviderEndpoint **required**
  * ProviderType **required**
  * VpcConfiguration
    * SecurityGroupIds **required**
      * items [SecurityGroupId](#securitygroupid)
    * SubnetIds **required**
      * items [SubnetId](#subnetid)
    * TlsCertificate
    * VpcId **required**

#### Output
* output [CreateHostOutput](#createhostoutput)

### DeleteConnection



```js
amazonaws_codestar_connections.DeleteConnection({
  "ConnectionArn": null
}, context)
```

#### Input
* input `object`
  * ConnectionArn **required**

#### Output
* output [DeleteConnectionOutput](#deleteconnectionoutput)

### DeleteHost



```js
amazonaws_codestar_connections.DeleteHost({
  "HostArn": null
}, context)
```

#### Input
* input `object`
  * HostArn **required**

#### Output
* output [DeleteHostOutput](#deletehostoutput)

### GetConnection



```js
amazonaws_codestar_connections.GetConnection({
  "ConnectionArn": null
}, context)
```

#### Input
* input `object`
  * ConnectionArn **required**

#### Output
* output [GetConnectionOutput](#getconnectionoutput)

### GetHost



```js
amazonaws_codestar_connections.GetHost({
  "HostArn": null
}, context)
```

#### Input
* input `object`
  * HostArn **required**

#### Output
* output [GetHostOutput](#gethostoutput)

### ListConnections



```js
amazonaws_codestar_connections.ListConnections({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * HostArnFilter
  * MaxResults
  * NextToken
  * ProviderTypeFilter

#### Output
* output [ListConnectionsOutput](#listconnectionsoutput)

### ListHosts



```js
amazonaws_codestar_connections.ListHosts({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults
  * NextToken

#### Output
* output [ListHostsOutput](#listhostsoutput)

### ListTagsForResource



```js
amazonaws_codestar_connections.ListTagsForResource({
  "ResourceArn": null
}, context)
```

#### Input
* input `object`
  * ResourceArn **required**

#### Output
* output [ListTagsForResourceOutput](#listtagsforresourceoutput)

### TagResource



```js
amazonaws_codestar_connections.TagResource({
  "ResourceArn": null,
  "Tags": null
}, context)
```

#### Input
* input `object`
  * ResourceArn **required**
  * Tags **required**
    * items [Tag](#tag)

#### Output
* output [TagResourceOutput](#tagresourceoutput)

### UntagResource



```js
amazonaws_codestar_connections.UntagResource({
  "ResourceArn": null,
  "TagKeys": null
}, context)
```

#### Input
* input `object`
  * ResourceArn **required**
  * TagKeys **required**
    * items [TagKey](#tagkey)

#### Output
* output [UntagResourceOutput](#untagresourceoutput)

### UpdateHost



```js
amazonaws_codestar_connections.UpdateHost({
  "HostArn": null
}, context)
```

#### Input
* input `object`
  * HostArn **required**
  * ProviderEndpoint
  * VpcConfiguration
    * SecurityGroupIds **required**
      * items [SecurityGroupId](#securitygroupid)
    * SubnetIds **required**
      * items [SubnetId](#subnetid)
    * TlsCertificate
    * VpcId **required**

#### Output
* output [UpdateHostOutput](#updatehostoutput)



## Definitions

### AccountId
* AccountId `string`

### AmazonResourceName
* AmazonResourceName `string`

### ConflictException


### Connection
* Connection `object`: <p>A resource that is used to connect third-party source providers with services like AWS CodePipeline.</p> <p>Note: A connection created through CloudFormation, the CLI, or the SDK is in `PENDING` status by default. You can make its status `AVAILABLE` by updating the connection in the console.</p>
  * ConnectionArn
  * ConnectionName
  * ConnectionStatus
  * HostArn
  * OwnerAccountId
  * ProviderType

### ConnectionArn
* ConnectionArn `string`

### ConnectionList
* ConnectionList `array`
  * items [Connection](#connection)

### ConnectionName
* ConnectionName `string`

### ConnectionStatus
* ConnectionStatus `string` (values: PENDING, AVAILABLE, ERROR)

### CreateConnectionInput
* CreateConnectionInput `object`
  * ConnectionName **required**
  * HostArn
  * ProviderType
  * Tags
    * items [Tag](#tag)

### CreateConnectionOutput
* CreateConnectionOutput `object`
  * ConnectionArn **required**
  * Tags
    * items [Tag](#tag)

### CreateHostInput
* CreateHostInput `object`
  * Name **required**
  * ProviderEndpoint **required**
  * ProviderType **required**
  * VpcConfiguration
    * SecurityGroupIds **required**
      * items [SecurityGroupId](#securitygroupid)
    * SubnetIds **required**
      * items [SubnetId](#subnetid)
    * TlsCertificate
    * VpcId **required**

### CreateHostOutput
* CreateHostOutput `object`
  * HostArn

### DeleteConnectionInput
* DeleteConnectionInput `object`
  * ConnectionArn **required**

### DeleteConnectionOutput
* DeleteConnectionOutput `object`

### DeleteHostInput
* DeleteHostInput `object`
  * HostArn **required**

### DeleteHostOutput
* DeleteHostOutput `object`

### GetConnectionInput
* GetConnectionInput `object`
  * ConnectionArn **required**

### GetConnectionOutput
* GetConnectionOutput `object`
  * Connection
    * ConnectionArn
    * ConnectionName
    * ConnectionStatus
    * HostArn
    * OwnerAccountId
    * ProviderType

### GetHostInput
* GetHostInput `object`
  * HostArn **required**

### GetHostOutput
* GetHostOutput `object`
  * Name
  * ProviderEndpoint
  * ProviderType
  * Status
  * VpcConfiguration
    * SecurityGroupIds **required**
      * items [SecurityGroupId](#securitygroupid)
    * SubnetIds **required**
      * items [SubnetId](#subnetid)
    * TlsCertificate
    * VpcId **required**

### Host
* Host `object`: <p>A resource that represents the infrastructure where a third-party provider is installed. The host is used when you create connections to an installed third-party provider type, such as GitHub Enterprise Server. You create one host for all connections to that provider.</p> <note> <p>A host created through the CLI or the SDK is in `PENDING` status by default. You can make its status `AVAILABLE` by setting up the host in the console.</p> </note>
  * HostArn
  * Name
  * ProviderEndpoint
  * ProviderType
  * Status
  * StatusMessage
  * VpcConfiguration
    * SecurityGroupIds **required**
      * items [SecurityGroupId](#securitygroupid)
    * SubnetIds **required**
      * items [SubnetId](#subnetid)
    * TlsCertificate
    * VpcId **required**

### HostArn
* HostArn `string`

### HostList
* HostList `array`
  * items [Host](#host)

### HostName
* HostName `string`

### HostStatus
* HostStatus `string`

### HostStatusMessage
* HostStatusMessage `string`

### LimitExceededException


### ListConnectionsInput
* ListConnectionsInput `object`
  * HostArnFilter
  * MaxResults
  * NextToken
  * ProviderTypeFilter

### ListConnectionsOutput
* ListConnectionsOutput `object`
  * Connections
    * items [Connection](#connection)
  * NextToken

### ListHostsInput
* ListHostsInput `object`
  * MaxResults
  * NextToken

### ListHostsOutput
* ListHostsOutput `object`
  * Hosts
    * items [Host](#host)
  * NextToken

### ListTagsForResourceInput
* ListTagsForResourceInput `object`
  * ResourceArn **required**

### ListTagsForResourceOutput
* ListTagsForResourceOutput `object`
  * Tags
    * items [Tag](#tag)

### MaxResults
* MaxResults `integer`

### NextToken
* NextToken `string`

### ProviderType
* ProviderType `string` (values: Bitbucket, GitHub, GitHubEnterpriseServer)

### ResourceNotFoundException


### ResourceUnavailableException


### SecurityGroupId
* SecurityGroupId `string`

### SecurityGroupIds
* SecurityGroupIds `array`
  * items [SecurityGroupId](#securitygroupid)

### SubnetId
* SubnetId `string`

### SubnetIds
* SubnetIds `array`
  * items [SubnetId](#subnetid)

### Tag
* Tag `object`: <p>A tag is a key-value pair that is used to manage the resource.</p> <p>This tag is available for use by AWS services that support tags.</p>
  * Key **required**
  * Value **required**

### TagKey
* TagKey `string`

### TagKeyList
* TagKeyList `array`
  * items [TagKey](#tagkey)

### TagList
* TagList `array`
  * items [Tag](#tag)

### TagResourceInput
* TagResourceInput `object`
  * ResourceArn **required**
  * Tags **required**
    * items [Tag](#tag)

### TagResourceOutput
* TagResourceOutput `object`

### TagValue
* TagValue `string`

### TlsCertificate
* TlsCertificate `string`

### UnsupportedOperationException


### UntagResourceInput
* UntagResourceInput `object`
  * ResourceArn **required**
  * TagKeys **required**
    * items [TagKey](#tagkey)

### UntagResourceOutput
* UntagResourceOutput `object`

### UpdateHostInput
* UpdateHostInput `object`
  * HostArn **required**
  * ProviderEndpoint
  * VpcConfiguration
    * SecurityGroupIds **required**
      * items [SecurityGroupId](#securitygroupid)
    * SubnetIds **required**
      * items [SubnetId](#subnetid)
    * TlsCertificate
    * VpcId **required**

### UpdateHostOutput
* UpdateHostOutput `object`

### Url
* Url `string`

### VpcConfiguration
* VpcConfiguration `object`: The VPC configuration provisioned for the host.
  * SecurityGroupIds **required**
    * items [SecurityGroupId](#securitygroupid)
  * SubnetIds **required**
    * items [SubnetId](#subnetid)
  * TlsCertificate
  * VpcId **required**

### VpcId
* VpcId `string`


