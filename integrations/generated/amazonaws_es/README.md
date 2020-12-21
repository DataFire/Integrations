# @datafire/amazonaws_es

Client library for Amazon Elasticsearch Service

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_es
```
```js
let amazonaws_es = require('@datafire/amazonaws_es').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

.then(data => {
  console.log(data);
});
```

## Description

<fullname>Amazon Elasticsearch Configuration Service</fullname> <p>Use the Amazon Elasticsearch Configuration API to create, configure, and manage Elasticsearch domains.</p> <p>For sample code that uses the Configuration API, see the <a href="https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-configuration-samples.html">Amazon Elasticsearch Service Developer Guide</a>. The guide also contains <a href="https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-request-signing.html">sample code for sending signed HTTP requests to the Elasticsearch APIs</a>.</p> <p>The endpoint for configuration service requests is region-specific: es.<i>region</i>.amazonaws.com. For example, es.us-east-1.amazonaws.com. For a current list of supported regions and endpoints, see <a href="http://docs.aws.amazon.com/general/latest/gr/rande.html#elasticsearch-service-regions" target="_blank">Regions and Endpoints</a>.</p>

## Actions

### ListDomainNames



```js
amazonaws_es.ListDomainNames({}, context)
```

#### Input
* input `object`

#### Output
* output [ListDomainNamesResponse](#listdomainnamesresponse)

### ListPackagesForDomain



```js
amazonaws_es.ListPackagesForDomain({
  "DomainName": ""
}, context)
```

#### Input
* input `object`
  * DomainName **required** `string`
  * maxResults `integer`
  * nextToken `string`
  * MaxResults `string`
  * NextToken `string`

#### Output
* output [ListPackagesForDomainResponse](#listpackagesfordomainresponse)

### DescribeInboundCrossClusterSearchConnections



```js
amazonaws_es.DescribeInboundCrossClusterSearchConnections({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * Filters `array`:  A list of filters used to match properties for inbound cross-cluster search connection. Available <code><a>Filter</a></code> names for this operation are: <ul> <li>cross-cluster-search-connection-id</li> <li>source-domain-info.domain-name</li> <li>source-domain-info.owner-id</li> <li>source-domain-info.region</li> <li>destination-domain-info.domain-name</li> </ul> 
    * items [Filter](#filter)
  * MaxResults `integer`:  Set this value to limit the number of results returned. 
  * NextToken `string`:  Paginated APIs accepts NextToken input to returns next page results and provides a NextToken output in the response which can be used by the client to retrieve more results. 

#### Output
* output [DescribeInboundCrossClusterSearchConnectionsResponse](#describeinboundcrossclustersearchconnectionsresponse)

### DeleteInboundCrossClusterSearchConnection



```js
amazonaws_es.DeleteInboundCrossClusterSearchConnection({
  "ConnectionId": ""
}, context)
```

#### Input
* input `object`
  * ConnectionId **required** `string`

#### Output
* output [DeleteInboundCrossClusterSearchConnectionResponse](#deleteinboundcrossclustersearchconnectionresponse)

### AcceptInboundCrossClusterSearchConnection



```js
amazonaws_es.AcceptInboundCrossClusterSearchConnection({
  "ConnectionId": ""
}, context)
```

#### Input
* input `object`
  * ConnectionId **required** `string`

#### Output
* output [AcceptInboundCrossClusterSearchConnectionResponse](#acceptinboundcrossclustersearchconnectionresponse)

### RejectInboundCrossClusterSearchConnection



```js
amazonaws_es.RejectInboundCrossClusterSearchConnection({
  "ConnectionId": ""
}, context)
```

#### Input
* input `object`
  * ConnectionId **required** `string`

#### Output
* output [RejectInboundCrossClusterSearchConnectionResponse](#rejectinboundcrossclustersearchconnectionresponse)

### CreateOutboundCrossClusterSearchConnection



```js
amazonaws_es.CreateOutboundCrossClusterSearchConnection({
  "SourceDomainInfo": {},
  "DestinationDomainInfo": {},
  "ConnectionAlias": ""
}, context)
```

#### Input
* input `object`
  * ConnectionAlias **required** `string`: Specifies the connection alias that will be used by the customer for this connection.
  * DestinationDomainInfo **required** `object`: Specifies the <code><a>DomainInformation</a></code> for the destination Elasticsearch domain.
    * DomainName [DomainName](#domainname)
    * OwnerId [OwnerId](#ownerid)
    * Region [Region](#region)
  * SourceDomainInfo **required** `object`: Specifies the <code><a>DomainInformation</a></code> for the source Elasticsearch domain.
    * DomainName [DomainName](#domainname)
    * OwnerId [OwnerId](#ownerid)
    * Region [Region](#region)

#### Output
* output [CreateOutboundCrossClusterSearchConnectionResponse](#createoutboundcrossclustersearchconnectionresponse)

### DescribeOutboundCrossClusterSearchConnections



```js
amazonaws_es.DescribeOutboundCrossClusterSearchConnections({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * Filters `array`:  A list of filters used to match properties for outbound cross-cluster search connection. Available <code><a>Filter</a></code> names for this operation are: <ul> <li>cross-cluster-search-connection-id</li> <li>destination-domain-info.domain-name</li> <li>destination-domain-info.owner-id</li> <li>destination-domain-info.region</li> <li>source-domain-info.domain-name</li> </ul> 
    * items [Filter](#filter)
  * MaxResults `integer`:  Set this value to limit the number of results returned. 
  * NextToken `string`:  Paginated APIs accepts NextToken input to returns next page results and provides a NextToken output in the response which can be used by the client to retrieve more results. 

#### Output
* output [DescribeOutboundCrossClusterSearchConnectionsResponse](#describeoutboundcrossclustersearchconnectionsresponse)

### DeleteOutboundCrossClusterSearchConnection



```js
amazonaws_es.DeleteOutboundCrossClusterSearchConnection({
  "ConnectionId": ""
}, context)
```

#### Input
* input `object`
  * ConnectionId **required** `string`

#### Output
* output [DeleteOutboundCrossClusterSearchConnectionResponse](#deleteoutboundcrossclustersearchconnectionresponse)

### GetCompatibleElasticsearchVersions



```js
amazonaws_es.GetCompatibleElasticsearchVersions({}, context)
```

#### Input
* input `object`
  * domainName `string`

#### Output
* output [GetCompatibleElasticsearchVersionsResponse](#getcompatibleelasticsearchversionsresponse)

### CreateElasticsearchDomain



```js
amazonaws_es.CreateElasticsearchDomain({
  "DomainName": ""
}, context)
```

#### Input
* input `object`
  * AccessPolicies `string`: Access policy rules for an Elasticsearch domain service endpoints. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-access-policies" target="_blank">Configuring Access Policies</a> in the <i>Amazon Elasticsearch Service Developer Guide</i>. The maximum size of a policy document is 100 KB.
  * AdvancedOptions `object`: <p> Exposes select native Elasticsearch configuration values from <code>elasticsearch.yml</code>. Currently, the following advanced options are available:</p> <ul> <li>Option to allow references to indices in an HTTP request body. Must be <code>false</code> when configuring access to individual sub-resources. By default, the value is <code>true</code>. See <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-advanced-options" target="_blank">Configuration Advanced Options</a> for more information.</li> <li>Option to specify the percentage of heap space that is allocated to field data. By default, this setting is unbounded.</li> </ul> <p>For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-advanced-options">Configuring Advanced Options</a>.</p>
  * AdvancedSecurityOptions `object`: Specifies the advanced security configuration: whether advanced security is enabled, whether the internal database option is enabled, master username and password (if internal database is enabled), and master user ARN (if IAM is enabled).
    * Enabled
    * InternalUserDatabaseEnabled
    * MasterUserOptions
      * MasterUserARN
      * MasterUserName
      * MasterUserPassword
    * SAMLOptions
      * Enabled
      * Idp
        * EntityId **required**
        * MetadataContent **required**
      * MasterBackendRole
      * MasterUserName
      * RolesKey
      * SessionTimeoutMinutes
      * SubjectKey
  * CognitoOptions `object`: Options to specify the Cognito user and identity pools for Kibana authentication. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-cognito-auth.html" target="_blank">Amazon Cognito Authentication for Kibana</a>.
    * Enabled
    * IdentityPoolId
    * RoleArn
    * UserPoolId
  * DomainEndpointOptions `object`: Options to configure endpoint for the Elasticsearch domain.
    * CustomEndpoint
    * CustomEndpointCertificateArn
    * CustomEndpointEnabled
    * EnforceHTTPS
    * TLSSecurityPolicy
  * DomainName **required** `string`: The name of an Elasticsearch domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).
  * EBSOptions `object`: Options to enable, disable, and specify the properties of EBS storage volumes. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-ebs" target="_blank"> Configuring EBS-based Storage</a>.
    * EBSEnabled
    * Iops
    * VolumeSize
    * VolumeType
  * ElasticsearchClusterConfig `object`: Specifies the configuration for the domain cluster, such as the type and number of instances.
    * DedicatedMasterCount
    * DedicatedMasterEnabled
    * DedicatedMasterType
    * InstanceCount
    * InstanceType
    * WarmCount
    * WarmEnabled
    * WarmType
    * ZoneAwarenessConfig
      * AvailabilityZoneCount
    * ZoneAwarenessEnabled
  * ElasticsearchVersion `string`: String of format X.Y to specify version for the Elasticsearch domain eg. "1.5" or "2.3". For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomains" target="_blank">Creating Elasticsearch Domains</a> in the <i>Amazon Elasticsearch Service Developer Guide</i>.
  * EncryptionAtRestOptions `object`: Specifies the Encryption At Rest Options.
    * Enabled
    * KmsKeyId
  * LogPublishingOptions `object`: Map of <code>LogType</code> and <code>LogPublishingOption</code>, each containing options to publish a given type of Elasticsearch log.
  * NodeToNodeEncryptionOptions `object`: Specifies the node-to-node encryption options.
    * Enabled
  * SnapshotOptions `object`: Specifies the time, in UTC format, when the service takes a daily automated snapshot of the specified Elasticsearch domain. Default value is <code>0</code> hours.
    * AutomatedSnapshotStartHour
  * VPCOptions `object`: Options to specify the subnets and security groups for VPC endpoint. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-vpc.html" target="_blank"> VPC Endpoints for Amazon Elasticsearch Service Domains</a>.
    * SecurityGroupIds
      * items [String](#string)
    * SubnetIds
      * items [String](#string)

#### Output
* output [CreateElasticsearchDomainResponse](#createelasticsearchdomainresponse)

### DescribeElasticsearchDomains



```js
amazonaws_es.DescribeElasticsearchDomains({
  "DomainNames": []
}, context)
```

#### Input
* input `object`
  * DomainNames **required** `array`: A list of Elasticsearch domain names.
    * items [DomainName](#domainname)

#### Output
* output [DescribeElasticsearchDomainsResponse](#describeelasticsearchdomainsresponse)

### DeleteElasticsearchDomain



```js
amazonaws_es.DeleteElasticsearchDomain({
  "DomainName": ""
}, context)
```

#### Input
* input `object`
  * DomainName **required** `string`

#### Output
* output [DeleteElasticsearchDomainResponse](#deleteelasticsearchdomainresponse)

### DescribeElasticsearchDomain



```js
amazonaws_es.DescribeElasticsearchDomain({
  "DomainName": ""
}, context)
```

#### Input
* input `object`
  * DomainName **required** `string`

#### Output
* output [DescribeElasticsearchDomainResponse](#describeelasticsearchdomainresponse)

### DescribeElasticsearchDomainConfig



```js
amazonaws_es.DescribeElasticsearchDomainConfig({
  "DomainName": ""
}, context)
```

#### Input
* input `object`
  * DomainName **required** `string`

#### Output
* output [DescribeElasticsearchDomainConfigResponse](#describeelasticsearchdomainconfigresponse)

### UpdateElasticsearchDomainConfig



```js
amazonaws_es.UpdateElasticsearchDomainConfig({
  "DomainName": ""
}, context)
```

#### Input
* input `object`
  * DomainName **required** `string`
  * AccessPolicies `string`: Access policy rules for an Elasticsearch domain service endpoints. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-access-policies" target="_blank">Configuring Access Policies</a> in the <i>Amazon Elasticsearch Service Developer Guide</i>. The maximum size of a policy document is 100 KB.
  * AdvancedOptions `object`: <p> Exposes select native Elasticsearch configuration values from <code>elasticsearch.yml</code>. Currently, the following advanced options are available:</p> <ul> <li>Option to allow references to indices in an HTTP request body. Must be <code>false</code> when configuring access to individual sub-resources. By default, the value is <code>true</code>. See <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-advanced-options" target="_blank">Configuration Advanced Options</a> for more information.</li> <li>Option to specify the percentage of heap space that is allocated to field data. By default, this setting is unbounded.</li> </ul> <p>For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-advanced-options">Configuring Advanced Options</a>.</p>
  * AdvancedSecurityOptions `object`: Specifies the advanced security configuration: whether advanced security is enabled, whether the internal database option is enabled, master username and password (if internal database is enabled), and master user ARN (if IAM is enabled).
    * Enabled
    * InternalUserDatabaseEnabled
    * MasterUserOptions
      * MasterUserARN
      * MasterUserName
      * MasterUserPassword
    * SAMLOptions
      * Enabled
      * Idp
        * EntityId **required**
        * MetadataContent **required**
      * MasterBackendRole
      * MasterUserName
      * RolesKey
      * SessionTimeoutMinutes
      * SubjectKey
  * CognitoOptions `object`: Options to specify the Cognito user and identity pools for Kibana authentication. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-cognito-auth.html" target="_blank">Amazon Cognito Authentication for Kibana</a>.
    * Enabled
    * IdentityPoolId
    * RoleArn
    * UserPoolId
  * DomainEndpointOptions `object`: Options to configure endpoint for the Elasticsearch domain.
    * CustomEndpoint
    * CustomEndpointCertificateArn
    * CustomEndpointEnabled
    * EnforceHTTPS
    * TLSSecurityPolicy
  * EBSOptions `object`: Options to enable, disable, and specify the properties of EBS storage volumes. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-ebs" target="_blank"> Configuring EBS-based Storage</a>.
    * EBSEnabled
    * Iops
    * VolumeSize
    * VolumeType
  * ElasticsearchClusterConfig `object`: Specifies the configuration for the domain cluster, such as the type and number of instances.
    * DedicatedMasterCount
    * DedicatedMasterEnabled
    * DedicatedMasterType
    * InstanceCount
    * InstanceType
    * WarmCount
    * WarmEnabled
    * WarmType
    * ZoneAwarenessConfig
      * AvailabilityZoneCount
    * ZoneAwarenessEnabled
  * LogPublishingOptions `object`: Map of <code>LogType</code> and <code>LogPublishingOption</code>, each containing options to publish a given type of Elasticsearch log.
  * SnapshotOptions `object`: Specifies the time, in UTC format, when the service takes a daily automated snapshot of the specified Elasticsearch domain. Default value is <code>0</code> hours.
    * AutomatedSnapshotStartHour
  * VPCOptions `object`: Options to specify the subnets and security groups for VPC endpoint. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-vpc.html" target="_blank"> VPC Endpoints for Amazon Elasticsearch Service Domains</a>.
    * SecurityGroupIds
      * items [String](#string)
    * SubnetIds
      * items [String](#string)

#### Output
* output [UpdateElasticsearchDomainConfigResponse](#updateelasticsearchdomainconfigresponse)

### DescribeElasticsearchInstanceTypeLimits



```js
amazonaws_es.DescribeElasticsearchInstanceTypeLimits({
  "InstanceType": "",
  "ElasticsearchVersion": ""
}, context)
```

#### Input
* input `object`
  * domainName `string`
  * InstanceType **required** `string`
  * ElasticsearchVersion **required** `string`

#### Output
* output [DescribeElasticsearchInstanceTypeLimitsResponse](#describeelasticsearchinstancetypelimitsresponse)

### ListElasticsearchInstanceTypes



```js
amazonaws_es.ListElasticsearchInstanceTypes({
  "ElasticsearchVersion": ""
}, context)
```

#### Input
* input `object`
  * ElasticsearchVersion **required** `string`
  * domainName `string`
  * maxResults `integer`
  * nextToken `string`
  * MaxResults `string`
  * NextToken `string`

#### Output
* output [ListElasticsearchInstanceTypesResponse](#listelasticsearchinstancetypesresponse)

### PurchaseReservedElasticsearchInstanceOffering



```js
amazonaws_es.PurchaseReservedElasticsearchInstanceOffering({
  "ReservedElasticsearchInstanceOfferingId": "",
  "ReservationName": ""
}, context)
```

#### Input
* input `object`
  * InstanceCount `integer`: Specifies the number of EC2 instances in the Elasticsearch domain.
  * ReservationName **required** `string`: A customer-specified identifier to track this reservation.
  * ReservedElasticsearchInstanceOfferingId **required** `string`: The ID of the reserved Elasticsearch instance offering to purchase.

#### Output
* output [PurchaseReservedElasticsearchInstanceOfferingResponse](#purchasereservedelasticsearchinstanceofferingresponse)

### DescribeReservedElasticsearchInstanceOfferings



```js
amazonaws_es.DescribeReservedElasticsearchInstanceOfferings({}, context)
```

#### Input
* input `object`
  * offeringId `string`
  * maxResults `integer`
  * nextToken `string`
  * MaxResults `string`
  * NextToken `string`

#### Output
* output [DescribeReservedElasticsearchInstanceOfferingsResponse](#describereservedelasticsearchinstanceofferingsresponse)

### DescribeReservedElasticsearchInstances



```js
amazonaws_es.DescribeReservedElasticsearchInstances({}, context)
```

#### Input
* input `object`
  * reservationId `string`
  * maxResults `integer`
  * nextToken `string`
  * MaxResults `string`
  * NextToken `string`

#### Output
* output [DescribeReservedElasticsearchInstancesResponse](#describereservedelasticsearchinstancesresponse)

### DeleteElasticsearchServiceRole



```js
amazonaws_es.DeleteElasticsearchServiceRole({}, context)
```

#### Input
* input `object`

#### Output
*Output schema unknown*

### CancelElasticsearchServiceSoftwareUpdate



```js
amazonaws_es.CancelElasticsearchServiceSoftwareUpdate({
  "DomainName": ""
}, context)
```

#### Input
* input `object`
  * DomainName **required** `string`: The name of an Elasticsearch domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).

#### Output
* output [CancelElasticsearchServiceSoftwareUpdateResponse](#cancelelasticsearchservicesoftwareupdateresponse)

### StartElasticsearchServiceSoftwareUpdate



```js
amazonaws_es.StartElasticsearchServiceSoftwareUpdate({
  "DomainName": ""
}, context)
```

#### Input
* input `object`
  * DomainName **required** `string`: The name of an Elasticsearch domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).

#### Output
* output [StartElasticsearchServiceSoftwareUpdateResponse](#startelasticsearchservicesoftwareupdateresponse)

### UpgradeElasticsearchDomain



```js
amazonaws_es.UpgradeElasticsearchDomain({
  "DomainName": "",
  "TargetVersion": ""
}, context)
```

#### Input
* input `object`
  * DomainName **required** `string`: The name of an Elasticsearch domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).
  * PerformCheckOnly `boolean`:  This flag, when set to True, indicates that an Upgrade Eligibility Check needs to be performed. This will not actually perform the Upgrade. 
  * TargetVersion **required** `string`: The version of Elasticsearch that you intend to upgrade the domain to.

#### Output
* output [UpgradeElasticsearchDomainResponse](#upgradeelasticsearchdomainresponse)

### GetUpgradeHistory



```js
amazonaws_es.GetUpgradeHistory({
  "DomainName": ""
}, context)
```

#### Input
* input `object`
  * DomainName **required** `string`
  * maxResults `integer`
  * nextToken `string`
  * MaxResults `string`
  * NextToken `string`

#### Output
* output [GetUpgradeHistoryResponse](#getupgradehistoryresponse)

### GetUpgradeStatus



```js
amazonaws_es.GetUpgradeStatus({
  "DomainName": ""
}, context)
```

#### Input
* input `object`
  * DomainName **required** `string`

#### Output
* output [GetUpgradeStatusResponse](#getupgradestatusresponse)

### ListElasticsearchVersions



```js
amazonaws_es.ListElasticsearchVersions({}, context)
```

#### Input
* input `object`
  * maxResults `integer`
  * nextToken `string`
  * MaxResults `string`
  * NextToken `string`

#### Output
* output [ListElasticsearchVersionsResponse](#listelasticsearchversionsresponse)

### CreatePackage



```js
amazonaws_es.CreatePackage({
  "PackageName": "",
  "PackageType": "",
  "PackageSource": {}
}, context)
```

#### Input
* input `object`
  * PackageDescription `string`: Description of the package.
  * PackageName **required** `string`: Unique identifier for the package.
  * PackageSource **required** `object`: The S3 location for importing the package specified as <code>S3BucketName</code> and <code>S3Key</code>
    * S3BucketName
    * S3Key
  * PackageType **required** `string` (values: TXT-DICTIONARY): Type of package. Currently supports only TXT-DICTIONARY.

#### Output
* output [CreatePackageResponse](#createpackageresponse)

### AssociatePackage



```js
amazonaws_es.AssociatePackage({
  "PackageID": "",
  "DomainName": ""
}, context)
```

#### Input
* input `object`
  * PackageID **required** `string`
  * DomainName **required** `string`

#### Output
* output [AssociatePackageResponse](#associatepackageresponse)

### DescribePackages



```js
amazonaws_es.DescribePackages({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * Filters `array`: A list of <code>DescribePackagesFilter</code> to filter the packages included in a <code>DescribePackages</code> response.
    * items [DescribePackagesFilter](#describepackagesfilter)
  * MaxResults `integer`:  Set this value to limit the number of results returned. 
  * NextToken `string`:  Paginated APIs accepts NextToken input to returns next page results and provides a NextToken output in the response which can be used by the client to retrieve more results. 

#### Output
* output [DescribePackagesResponse](#describepackagesresponse)

### DissociatePackage



```js
amazonaws_es.DissociatePackage({
  "PackageID": "",
  "DomainName": ""
}, context)
```

#### Input
* input `object`
  * PackageID **required** `string`
  * DomainName **required** `string`

#### Output
* output [DissociatePackageResponse](#dissociatepackageresponse)

### UpdatePackage



```js
amazonaws_es.UpdatePackage({
  "PackageID": "",
  "PackageSource": {}
}, context)
```

#### Input
* input `object`
  * CommitMessage `string`: An info message for the new version which will be shown as part of <code>GetPackageVersionHistoryResponse</code>.
  * PackageDescription `string`: New description of the package.
  * PackageID **required** `string`: Unique identifier for the package.
  * PackageSource **required** `object`: The S3 location for importing the package specified as <code>S3BucketName</code> and <code>S3Key</code>
    * S3BucketName
    * S3Key

#### Output
* output [UpdatePackageResponse](#updatepackageresponse)

### DeletePackage



```js
amazonaws_es.DeletePackage({
  "PackageID": ""
}, context)
```

#### Input
* input `object`
  * PackageID **required** `string`

#### Output
* output [DeletePackageResponse](#deletepackageresponse)

### ListDomainsForPackage



```js
amazonaws_es.ListDomainsForPackage({
  "PackageID": ""
}, context)
```

#### Input
* input `object`
  * PackageID **required** `string`
  * maxResults `integer`
  * nextToken `string`
  * MaxResults `string`
  * NextToken `string`

#### Output
* output [ListDomainsForPackageResponse](#listdomainsforpackageresponse)

### GetPackageVersionHistory



```js
amazonaws_es.GetPackageVersionHistory({
  "PackageID": ""
}, context)
```

#### Input
* input `object`
  * PackageID **required** `string`
  * maxResults `integer`
  * nextToken `string`
  * MaxResults `string`
  * NextToken `string`

#### Output
* output [GetPackageVersionHistoryResponse](#getpackageversionhistoryresponse)

### AddTags



```js
amazonaws_es.AddTags({
  "ARN": "",
  "TagList": []
}, context)
```

#### Input
* input `object`
  * ARN **required** `string`: The Amazon Resource Name (ARN) of the Elasticsearch domain. See <a href="http://docs.aws.amazon.com/IAM/latest/UserGuide/index.html?Using_Identifiers.html" target="_blank">Identifiers for IAM Entities</a> in <i>Using AWS Identity and Access Management</i> for more information.
  * TagList **required** `array`: A list of <code>Tag</code> 
    * items [Tag](#tag)

#### Output
*Output schema unknown*

### RemoveTags



```js
amazonaws_es.RemoveTags({
  "ARN": "",
  "TagKeys": []
}, context)
```

#### Input
* input `object`
  * ARN **required** `string`: The Amazon Resource Name (ARN) of the Elasticsearch domain. See <a href="http://docs.aws.amazon.com/IAM/latest/UserGuide/index.html?Using_Identifiers.html" target="_blank">Identifiers for IAM Entities</a> in <i>Using AWS Identity and Access Management</i> for more information.
  * TagKeys **required** `array`: Specifies the <code>TagKey</code> list which you want to remove from the Elasticsearch domain.
    * items [String](#string)

#### Output
*Output schema unknown*

### ListTags



```js
amazonaws_es.ListTags({
  "arn": ""
}, context)
```

#### Input
* input `object`
  * arn **required** `string`

#### Output
* output [ListTagsResponse](#listtagsresponse)



## Definitions

### ARN
* ARN `string`: The Amazon Resource Name (ARN) of the Elasticsearch domain. See <a href="http://docs.aws.amazon.com/IAM/latest/UserGuide/index.html?Using_Identifiers.html" target="_blank">Identifiers for IAM Entities</a> in <i>Using AWS Identity and Access Management</i> for more information.

### AcceptInboundCrossClusterSearchConnectionRequest
* AcceptInboundCrossClusterSearchConnectionRequest `object`: Container for the parameters to the <code><a>AcceptInboundCrossClusterSearchConnection</a></code> operation.

### AcceptInboundCrossClusterSearchConnectionResponse
* AcceptInboundCrossClusterSearchConnectionResponse `object`: The result of a <code><a>AcceptInboundCrossClusterSearchConnection</a></code> operation. Contains details of accepted inbound connection.
  * CrossClusterSearchConnection
    * ConnectionStatus
      * Message
      * StatusCode
    * CrossClusterSearchConnectionId
    * DestinationDomainInfo
      * DomainName **required** [DomainName](#domainname)
      * OwnerId [OwnerId](#ownerid)
      * Region [Region](#region)
    * SourceDomainInfo
      * DomainName **required** [DomainName](#domainname)
      * OwnerId [OwnerId](#ownerid)
      * Region [Region](#region)

### AccessDeniedException


### AccessPoliciesStatus
* AccessPoliciesStatus `object`: The configured access rules for the domain's document and search endpoints, and the current status of those rules.
  * Options **required**
  * Status **required**
    * CreationDate **required**
    * PendingDeletion
    * State **required**
    * UpdateDate **required**
    * UpdateVersion

### AddTagsRequest
* AddTagsRequest `object`: Container for the parameters to the <code><a>AddTags</a></code> operation. Specify the tags that you want to attach to the Elasticsearch domain.
  * ARN **required**
  * TagList **required**
    * items [Tag](#tag)

### AdditionalLimit
* AdditionalLimit `object`:  List of limits that are specific to a given InstanceType and for each of it's <code> <a>InstanceRole</a> </code> . 
  * LimitName
  * LimitValues
    * items [LimitValue](#limitvalue)

### AdditionalLimitList
* AdditionalLimitList `array`
  * items [AdditionalLimit](#additionallimit)

### AdvancedOptions
* AdvancedOptions `object`: <p> Exposes select native Elasticsearch configuration values from <code>elasticsearch.yml</code>. Currently, the following advanced options are available:</p> <ul> <li>Option to allow references to indices in an HTTP request body. Must be <code>false</code> when configuring access to individual sub-resources. By default, the value is <code>true</code>. See <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-advanced-options" target="_blank">Configuration Advanced Options</a> for more information.</li> <li>Option to specify the percentage of heap space that is allocated to field data. By default, this setting is unbounded.</li> </ul> <p>For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-advanced-options">Configuring Advanced Options</a>.</p>

### AdvancedOptionsStatus
* AdvancedOptionsStatus `object`: <p> Status of the advanced options for the specified Elasticsearch domain. Currently, the following advanced options are available:</p> <ul> <li>Option to allow references to indices in an HTTP request body. Must be <code>false</code> when configuring access to individual sub-resources. By default, the value is <code>true</code>. See <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-advanced-options" target="_blank">Configuration Advanced Options</a> for more information.</li> <li>Option to specify the percentage of heap space that is allocated to field data. By default, this setting is unbounded.</li> </ul> <p>For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-advanced-options">Configuring Advanced Options</a>.</p>
  * Options **required**
  * Status **required**
    * CreationDate **required**
    * PendingDeletion
    * State **required**
    * UpdateDate **required**
    * UpdateVersion

### AdvancedSecurityOptions
* AdvancedSecurityOptions `object`: Specifies the advanced security configuration: whether advanced security is enabled, whether the internal database option is enabled.
  * Enabled
  * InternalUserDatabaseEnabled
  * SAMLOptions
    * Enabled
    * Idp
      * EntityId **required**
      * MetadataContent **required**
    * RolesKey
    * SessionTimeoutMinutes
    * SubjectKey

### AdvancedSecurityOptionsInput
* AdvancedSecurityOptionsInput `object`: Specifies the advanced security configuration: whether advanced security is enabled, whether the internal database option is enabled, master username and password (if internal database is enabled), and master user ARN (if IAM is enabled).
  * Enabled
  * InternalUserDatabaseEnabled
  * MasterUserOptions
    * MasterUserARN
    * MasterUserName
    * MasterUserPassword
  * SAMLOptions
    * Enabled
    * Idp
      * EntityId **required**
      * MetadataContent **required**
    * MasterBackendRole
    * MasterUserName
    * RolesKey
    * SessionTimeoutMinutes
    * SubjectKey

### AdvancedSecurityOptionsStatus
* AdvancedSecurityOptionsStatus `object`:  Specifies the status of advanced security options for the specified Elasticsearch domain.
  * Options **required**
    * Enabled
    * InternalUserDatabaseEnabled
    * SAMLOptions
      * Enabled
      * Idp
        * EntityId **required**
        * MetadataContent **required**
      * RolesKey
      * SessionTimeoutMinutes
      * SubjectKey
  * Status **required**
    * CreationDate **required**
    * PendingDeletion
    * State **required**
    * UpdateDate **required**
    * UpdateVersion

### AssociatePackageRequest
* AssociatePackageRequest `object`:  Container for request parameters to <code> <a>AssociatePackage</a> </code> operation. 

### AssociatePackageResponse
* AssociatePackageResponse `object`:  Container for response returned by <code> <a>AssociatePackage</a> </code> operation. 
  * DomainPackageDetails
    * DomainName
    * DomainPackageStatus
    * ErrorDetails
      * ErrorMessage [ErrorMessage](#errormessage)
      * ErrorType [ErrorType](#errortype)
    * LastUpdated
    * PackageID
    * PackageName
    * PackageType
    * PackageVersion [PackageVersion](#packageversion)
    * ReferencePath

### BackendRole
* BackendRole `string`

### BaseException


### Boolean
* Boolean `boolean`

### CancelElasticsearchServiceSoftwareUpdateRequest
* CancelElasticsearchServiceSoftwareUpdateRequest `object`: Container for the parameters to the <code><a>CancelElasticsearchServiceSoftwareUpdate</a></code> operation. Specifies the name of the Elasticsearch domain that you wish to cancel a service software update on.
  * DomainName **required**

### CancelElasticsearchServiceSoftwareUpdateResponse
* CancelElasticsearchServiceSoftwareUpdateResponse `object`: The result of a <code>CancelElasticsearchServiceSoftwareUpdate</code> operation. Contains the status of the update.
  * ServiceSoftwareOptions
    * AutomatedUpdateDate
    * Cancellable
    * CurrentVersion
    * Description
    * NewVersion
    * OptionalDeployment
    * UpdateAvailable
    * UpdateStatus

### CloudWatchLogsLogGroupArn
* CloudWatchLogsLogGroupArn `string`: ARN of the Cloudwatch log group to which log needs to be published.

### CognitoOptions
* CognitoOptions `object`: Options to specify the Cognito user and identity pools for Kibana authentication. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-cognito-auth.html" target="_blank">Amazon Cognito Authentication for Kibana</a>.
  * Enabled
  * IdentityPoolId
  * RoleArn
  * UserPoolId

### CognitoOptionsStatus
* CognitoOptionsStatus `object`: Status of the Cognito options for the specified Elasticsearch domain.
  * Options **required**
    * Enabled
    * IdentityPoolId
    * RoleArn
    * UserPoolId
  * Status **required**
    * CreationDate **required**
    * PendingDeletion
    * State **required**
    * UpdateDate **required**
    * UpdateVersion

### CommitMessage
* CommitMessage `string`

### CompatibleElasticsearchVersionsList
* CompatibleElasticsearchVersionsList `array`
  * items [CompatibleVersionsMap](#compatibleversionsmap)

### CompatibleVersionsMap
* CompatibleVersionsMap `object`:  A map from an <code> <a>ElasticsearchVersion</a> </code> to a list of compatible <code> <a>ElasticsearchVersion</a> </code> s to which the domain can be upgraded. 
  * SourceVersion
  * TargetVersions [ElasticsearchVersionList](#elasticsearchversionlist)

### ConflictException


### ConnectionAlias
* ConnectionAlias `string`

### CreateElasticsearchDomainRequest
* CreateElasticsearchDomainRequest `object`
  * AccessPolicies
  * AdvancedOptions
  * AdvancedSecurityOptions
    * Enabled
    * InternalUserDatabaseEnabled
    * MasterUserOptions
      * MasterUserARN
      * MasterUserName
      * MasterUserPassword
    * SAMLOptions
      * Enabled
      * Idp
        * EntityId **required**
        * MetadataContent **required**
      * MasterBackendRole
      * MasterUserName
      * RolesKey
      * SessionTimeoutMinutes
      * SubjectKey
  * CognitoOptions
    * Enabled
    * IdentityPoolId
    * RoleArn
    * UserPoolId
  * DomainEndpointOptions
    * CustomEndpoint
    * CustomEndpointCertificateArn
    * CustomEndpointEnabled
    * EnforceHTTPS
    * TLSSecurityPolicy
  * DomainName **required**
  * EBSOptions
    * EBSEnabled
    * Iops
    * VolumeSize
    * VolumeType
  * ElasticsearchClusterConfig
    * DedicatedMasterCount
    * DedicatedMasterEnabled
    * DedicatedMasterType
    * InstanceCount
    * InstanceType
    * WarmCount
    * WarmEnabled
    * WarmType
    * ZoneAwarenessConfig
      * AvailabilityZoneCount
    * ZoneAwarenessEnabled
  * ElasticsearchVersion
  * EncryptionAtRestOptions
    * Enabled
    * KmsKeyId
  * LogPublishingOptions
  * NodeToNodeEncryptionOptions
    * Enabled
  * SnapshotOptions
    * AutomatedSnapshotStartHour
  * VPCOptions
    * SecurityGroupIds
      * items [String](#string)
    * SubnetIds
      * items [String](#string)

### CreateElasticsearchDomainResponse
* CreateElasticsearchDomainResponse `object`: The result of a <code>CreateElasticsearchDomain</code> operation. Contains the status of the newly created Elasticsearch domain.
  * DomainStatus
    * ARN **required**
    * AccessPolicies
    * AdvancedOptions
    * AdvancedSecurityOptions
      * Enabled
      * InternalUserDatabaseEnabled
      * SAMLOptions
        * Enabled
        * Idp
          * EntityId **required**
          * MetadataContent **required**
        * RolesKey
        * SessionTimeoutMinutes
        * SubjectKey
    * CognitoOptions
      * Enabled
      * IdentityPoolId
      * RoleArn
      * UserPoolId
    * Created
    * Deleted
    * DomainEndpointOptions
      * CustomEndpoint
      * CustomEndpointCertificateArn
      * CustomEndpointEnabled
      * EnforceHTTPS
      * TLSSecurityPolicy
    * DomainId **required**
    * DomainName **required**
    * EBSOptions
      * EBSEnabled
      * Iops
      * VolumeSize
      * VolumeType
    * ElasticsearchClusterConfig **required**
      * DedicatedMasterCount
      * DedicatedMasterEnabled
      * DedicatedMasterType
      * InstanceCount
      * InstanceType
      * WarmCount
      * WarmEnabled
      * WarmType
      * ZoneAwarenessConfig
        * AvailabilityZoneCount
      * ZoneAwarenessEnabled
    * ElasticsearchVersion [ElasticsearchVersionString](#elasticsearchversionstring)
    * EncryptionAtRestOptions
      * Enabled
      * KmsKeyId
    * Endpoint
    * Endpoints
    * LogPublishingOptions
    * NodeToNodeEncryptionOptions
      * Enabled
    * Processing
    * ServiceSoftwareOptions
      * AutomatedUpdateDate
      * Cancellable
      * CurrentVersion
      * Description
      * NewVersion
      * OptionalDeployment
      * UpdateAvailable
      * UpdateStatus
    * SnapshotOptions
      * AutomatedSnapshotStartHour
    * UpgradeProcessing
    * VPCOptions
      * AvailabilityZones
        * items [String](#string)
      * SecurityGroupIds
        * items [String](#string)
      * SubnetIds
        * items [String](#string)
      * VPCId

### CreateOutboundCrossClusterSearchConnectionRequest
* CreateOutboundCrossClusterSearchConnectionRequest `object`: Container for the parameters to the <code><a>CreateOutboundCrossClusterSearchConnection</a></code> operation.
  * ConnectionAlias **required**
  * DestinationDomainInfo **required**
    * DomainName **required** [DomainName](#domainname)
    * OwnerId [OwnerId](#ownerid)
    * Region [Region](#region)
  * SourceDomainInfo **required**
    * DomainName **required** [DomainName](#domainname)
    * OwnerId [OwnerId](#ownerid)
    * Region [Region](#region)

### CreateOutboundCrossClusterSearchConnectionResponse
* CreateOutboundCrossClusterSearchConnectionResponse `object`: The result of a <code><a>CreateOutboundCrossClusterSearchConnection</a></code> request. Contains the details of the newly created cross-cluster search connection.
  * ConnectionAlias
  * ConnectionStatus
    * Message
    * StatusCode
  * CrossClusterSearchConnectionId
  * DestinationDomainInfo
    * DomainName **required** [DomainName](#domainname)
    * OwnerId [OwnerId](#ownerid)
    * Region [Region](#region)
  * SourceDomainInfo
    * DomainName **required** [DomainName](#domainname)
    * OwnerId [OwnerId](#ownerid)
    * Region [Region](#region)

### CreatePackageRequest
* CreatePackageRequest `object`:  Container for request parameters to <code> <a>CreatePackage</a> </code> operation. 
  * PackageDescription
  * PackageName **required**
  * PackageSource **required**
    * S3BucketName
    * S3Key
  * PackageType **required**

### CreatePackageResponse
* CreatePackageResponse `object`:  Container for response returned by <code> <a>CreatePackage</a> </code> operation. 
  * PackageDetails
    * AvailablePackageVersion [PackageVersion](#packageversion)
    * CreatedAt
    * ErrorDetails
      * ErrorMessage [ErrorMessage](#errormessage)
      * ErrorType [ErrorType](#errortype)
    * LastUpdatedAt [LastUpdated](#lastupdated)
    * PackageDescription
    * PackageID
    * PackageName
    * PackageStatus
    * PackageType

### CreatedAt
* CreatedAt `string`

### CrossClusterSearchConnectionId
* CrossClusterSearchConnectionId `string`

### CrossClusterSearchConnectionStatusMessage
* CrossClusterSearchConnectionStatusMessage `string`

### DeleteElasticsearchDomainRequest
* DeleteElasticsearchDomainRequest `object`: Container for the parameters to the <code><a>DeleteElasticsearchDomain</a></code> operation. Specifies the name of the Elasticsearch domain that you want to delete.

### DeleteElasticsearchDomainResponse
* DeleteElasticsearchDomainResponse `object`: The result of a <code>DeleteElasticsearchDomain</code> request. Contains the status of the pending deletion, or no status if the domain and all of its resources have been deleted.
  * DomainStatus
    * ARN **required**
    * AccessPolicies
    * AdvancedOptions
    * AdvancedSecurityOptions
      * Enabled
      * InternalUserDatabaseEnabled
      * SAMLOptions
        * Enabled
        * Idp
          * EntityId **required**
          * MetadataContent **required**
        * RolesKey
        * SessionTimeoutMinutes
        * SubjectKey
    * CognitoOptions
      * Enabled
      * IdentityPoolId
      * RoleArn
      * UserPoolId
    * Created
    * Deleted
    * DomainEndpointOptions
      * CustomEndpoint
      * CustomEndpointCertificateArn
      * CustomEndpointEnabled
      * EnforceHTTPS
      * TLSSecurityPolicy
    * DomainId **required**
    * DomainName **required**
    * EBSOptions
      * EBSEnabled
      * Iops
      * VolumeSize
      * VolumeType
    * ElasticsearchClusterConfig **required**
      * DedicatedMasterCount
      * DedicatedMasterEnabled
      * DedicatedMasterType
      * InstanceCount
      * InstanceType
      * WarmCount
      * WarmEnabled
      * WarmType
      * ZoneAwarenessConfig
        * AvailabilityZoneCount
      * ZoneAwarenessEnabled
    * ElasticsearchVersion [ElasticsearchVersionString](#elasticsearchversionstring)
    * EncryptionAtRestOptions
      * Enabled
      * KmsKeyId
    * Endpoint
    * Endpoints
    * LogPublishingOptions
    * NodeToNodeEncryptionOptions
      * Enabled
    * Processing
    * ServiceSoftwareOptions
      * AutomatedUpdateDate
      * Cancellable
      * CurrentVersion
      * Description
      * NewVersion
      * OptionalDeployment
      * UpdateAvailable
      * UpdateStatus
    * SnapshotOptions
      * AutomatedSnapshotStartHour
    * UpgradeProcessing
    * VPCOptions
      * AvailabilityZones
        * items [String](#string)
      * SecurityGroupIds
        * items [String](#string)
      * SubnetIds
        * items [String](#string)
      * VPCId

### DeleteInboundCrossClusterSearchConnectionRequest
* DeleteInboundCrossClusterSearchConnectionRequest `object`: Container for the parameters to the <code><a>DeleteInboundCrossClusterSearchConnection</a></code> operation.

### DeleteInboundCrossClusterSearchConnectionResponse
* DeleteInboundCrossClusterSearchConnectionResponse `object`: The result of a <code><a>DeleteInboundCrossClusterSearchConnection</a></code> operation. Contains details of deleted inbound connection.
  * CrossClusterSearchConnection
    * ConnectionStatus
      * Message
      * StatusCode
    * CrossClusterSearchConnectionId
    * DestinationDomainInfo
      * DomainName **required** [DomainName](#domainname)
      * OwnerId [OwnerId](#ownerid)
      * Region [Region](#region)
    * SourceDomainInfo
      * DomainName **required** [DomainName](#domainname)
      * OwnerId [OwnerId](#ownerid)
      * Region [Region](#region)

### DeleteOutboundCrossClusterSearchConnectionRequest
* DeleteOutboundCrossClusterSearchConnectionRequest `object`: Container for the parameters to the <code><a>DeleteOutboundCrossClusterSearchConnection</a></code> operation.

### DeleteOutboundCrossClusterSearchConnectionResponse
* DeleteOutboundCrossClusterSearchConnectionResponse `object`: The result of a <code><a>DeleteOutboundCrossClusterSearchConnection</a></code> operation. Contains details of deleted outbound connection.
  * CrossClusterSearchConnection
    * ConnectionAlias
    * ConnectionStatus
      * Message
      * StatusCode
    * CrossClusterSearchConnectionId
    * DestinationDomainInfo
      * DomainName **required** [DomainName](#domainname)
      * OwnerId [OwnerId](#ownerid)
      * Region [Region](#region)
    * SourceDomainInfo
      * DomainName **required** [DomainName](#domainname)
      * OwnerId [OwnerId](#ownerid)
      * Region [Region](#region)

### DeletePackageRequest
* DeletePackageRequest `object`:  Container for request parameters to <code> <a>DeletePackage</a> </code> operation. 

### DeletePackageResponse
* DeletePackageResponse `object`:  Container for response parameters to <code> <a>DeletePackage</a> </code> operation. 
  * PackageDetails
    * AvailablePackageVersion [PackageVersion](#packageversion)
    * CreatedAt
    * ErrorDetails
      * ErrorMessage [ErrorMessage](#errormessage)
      * ErrorType [ErrorType](#errortype)
    * LastUpdatedAt [LastUpdated](#lastupdated)
    * PackageDescription
    * PackageID
    * PackageName
    * PackageStatus
    * PackageType

### DeploymentCloseDateTimeStamp
* DeploymentCloseDateTimeStamp `string`

### DeploymentStatus
* DeploymentStatus `string` (values: PENDING_UPDATE, IN_PROGRESS, COMPLETED, NOT_ELIGIBLE, ELIGIBLE)

### DescribeElasticsearchDomainConfigRequest
* DescribeElasticsearchDomainConfigRequest `object`:  Container for the parameters to the <code>DescribeElasticsearchDomainConfig</code> operation. Specifies the domain name for which you want configuration information.

### DescribeElasticsearchDomainConfigResponse
* DescribeElasticsearchDomainConfigResponse `object`: The result of a <code>DescribeElasticsearchDomainConfig</code> request. Contains the configuration information of the requested domain.
  * DomainConfig **required**
    * AccessPolicies
      * Options **required**
      * Status **required**
        * CreationDate **required**
        * PendingDeletion
        * State **required**
        * UpdateDate **required**
        * UpdateVersion
    * AdvancedOptions
      * Options **required**
      * Status **required**
        * CreationDate **required**
        * PendingDeletion
        * State **required**
        * UpdateDate **required**
        * UpdateVersion
    * AdvancedSecurityOptions
      * Options **required**
        * Enabled
        * InternalUserDatabaseEnabled
        * SAMLOptions
          * Enabled
          * Idp
          * RolesKey
          * SessionTimeoutMinutes
          * SubjectKey
      * Status **required**
        * CreationDate **required**
        * PendingDeletion
        * State **required**
        * UpdateDate **required**
        * UpdateVersion
    * CognitoOptions
      * Options **required**
        * Enabled
        * IdentityPoolId
        * RoleArn
        * UserPoolId
      * Status **required**
        * CreationDate **required**
        * PendingDeletion
        * State **required**
        * UpdateDate **required**
        * UpdateVersion
    * DomainEndpointOptions
      * Options **required**
        * CustomEndpoint
        * CustomEndpointCertificateArn
        * CustomEndpointEnabled
        * EnforceHTTPS
        * TLSSecurityPolicy
      * Status **required**
        * CreationDate **required**
        * PendingDeletion
        * State **required**
        * UpdateDate **required**
        * UpdateVersion
    * EBSOptions
      * Options **required**
        * EBSEnabled
        * Iops
        * VolumeSize
        * VolumeType
      * Status **required**
        * CreationDate **required**
        * PendingDeletion
        * State **required**
        * UpdateDate **required**
        * UpdateVersion
    * ElasticsearchClusterConfig
      * Options **required**
        * DedicatedMasterCount
        * DedicatedMasterEnabled
        * DedicatedMasterType
        * InstanceCount
        * InstanceType
        * WarmCount
        * WarmEnabled
        * WarmType
        * ZoneAwarenessConfig
          * AvailabilityZoneCount
        * ZoneAwarenessEnabled
      * Status **required**
        * CreationDate **required**
        * PendingDeletion
        * State **required**
        * UpdateDate **required**
        * UpdateVersion
    * ElasticsearchVersion
      * Options **required**
      * Status **required**
        * CreationDate **required**
        * PendingDeletion
        * State **required**
        * UpdateDate **required**
        * UpdateVersion
    * EncryptionAtRestOptions
      * Options **required**
        * Enabled
        * KmsKeyId
      * Status **required**
        * CreationDate **required**
        * PendingDeletion
        * State **required**
        * UpdateDate **required**
        * UpdateVersion
    * LogPublishingOptions
      * Options
      * Status
        * CreationDate **required**
        * PendingDeletion
        * State **required**
        * UpdateDate **required**
        * UpdateVersion
    * NodeToNodeEncryptionOptions
      * Options **required**
        * Enabled
      * Status **required**
        * CreationDate **required**
        * PendingDeletion
        * State **required**
        * UpdateDate **required**
        * UpdateVersion
    * SnapshotOptions
      * Options **required**
        * AutomatedSnapshotStartHour
      * Status **required**
        * CreationDate **required**
        * PendingDeletion
        * State **required**
        * UpdateDate **required**
        * UpdateVersion
    * VPCOptions
      * Options **required**
        * AvailabilityZones
          * items [String](#string)
        * SecurityGroupIds
          * items [String](#string)
        * SubnetIds
          * items [String](#string)
        * VPCId
      * Status **required**
        * CreationDate **required**
        * PendingDeletion
        * State **required**
        * UpdateDate **required**
        * UpdateVersion

### DescribeElasticsearchDomainRequest
* DescribeElasticsearchDomainRequest `object`: Container for the parameters to the <code><a>DescribeElasticsearchDomain</a></code> operation.

### DescribeElasticsearchDomainResponse
* DescribeElasticsearchDomainResponse `object`: The result of a <code>DescribeElasticsearchDomain</code> request. Contains the status of the domain specified in the request.
  * DomainStatus **required**
    * ARN **required**
    * AccessPolicies
    * AdvancedOptions
    * AdvancedSecurityOptions
      * Enabled
      * InternalUserDatabaseEnabled
      * SAMLOptions
        * Enabled
        * Idp
          * EntityId **required**
          * MetadataContent **required**
        * RolesKey
        * SessionTimeoutMinutes
        * SubjectKey
    * CognitoOptions
      * Enabled
      * IdentityPoolId
      * RoleArn
      * UserPoolId
    * Created
    * Deleted
    * DomainEndpointOptions
      * CustomEndpoint
      * CustomEndpointCertificateArn
      * CustomEndpointEnabled
      * EnforceHTTPS
      * TLSSecurityPolicy
    * DomainId **required**
    * DomainName **required**
    * EBSOptions
      * EBSEnabled
      * Iops
      * VolumeSize
      * VolumeType
    * ElasticsearchClusterConfig **required**
      * DedicatedMasterCount
      * DedicatedMasterEnabled
      * DedicatedMasterType
      * InstanceCount
      * InstanceType
      * WarmCount
      * WarmEnabled
      * WarmType
      * ZoneAwarenessConfig
        * AvailabilityZoneCount
      * ZoneAwarenessEnabled
    * ElasticsearchVersion [ElasticsearchVersionString](#elasticsearchversionstring)
    * EncryptionAtRestOptions
      * Enabled
      * KmsKeyId
    * Endpoint
    * Endpoints
    * LogPublishingOptions
    * NodeToNodeEncryptionOptions
      * Enabled
    * Processing
    * ServiceSoftwareOptions
      * AutomatedUpdateDate
      * Cancellable
      * CurrentVersion
      * Description
      * NewVersion
      * OptionalDeployment
      * UpdateAvailable
      * UpdateStatus
    * SnapshotOptions
      * AutomatedSnapshotStartHour
    * UpgradeProcessing
    * VPCOptions
      * AvailabilityZones
        * items [String](#string)
      * SecurityGroupIds
        * items [String](#string)
      * SubnetIds
        * items [String](#string)
      * VPCId

### DescribeElasticsearchDomainsRequest
* DescribeElasticsearchDomainsRequest `object`: Container for the parameters to the <code><a>DescribeElasticsearchDomains</a></code> operation. By default, the API returns the status of all Elasticsearch domains.
  * DomainNames **required**
    * items [DomainName](#domainname)

### DescribeElasticsearchDomainsResponse
* DescribeElasticsearchDomainsResponse `object`: The result of a <code>DescribeElasticsearchDomains</code> request. Contains the status of the specified domains or all domains owned by the account.
  * DomainStatusList **required**
    * items [ElasticsearchDomainStatus](#elasticsearchdomainstatus)

### DescribeElasticsearchInstanceTypeLimitsRequest
* DescribeElasticsearchInstanceTypeLimitsRequest `object`:  Container for the parameters to <code> <a>DescribeElasticsearchInstanceTypeLimits</a> </code> operation. 

### DescribeElasticsearchInstanceTypeLimitsResponse
* DescribeElasticsearchInstanceTypeLimitsResponse `object`:  Container for the parameters received from <code> <a>DescribeElasticsearchInstanceTypeLimits</a> </code> operation. 
  * LimitsByRole [LimitsByRole](#limitsbyrole)

### DescribeInboundCrossClusterSearchConnectionsRequest
* DescribeInboundCrossClusterSearchConnectionsRequest `object`: Container for the parameters to the <code><a>DescribeInboundCrossClusterSearchConnections</a></code> operation.
  * Filters
    * items [Filter](#filter)
  * MaxResults
  * NextToken

### DescribeInboundCrossClusterSearchConnectionsResponse
* DescribeInboundCrossClusterSearchConnectionsResponse `object`: The result of a <code><a>DescribeInboundCrossClusterSearchConnections</a></code> request. Contains the list of connections matching the filter criteria.
  * CrossClusterSearchConnections
    * items [InboundCrossClusterSearchConnection](#inboundcrossclustersearchconnection)
  * NextToken

### DescribeOutboundCrossClusterSearchConnectionsRequest
* DescribeOutboundCrossClusterSearchConnectionsRequest `object`: Container for the parameters to the <code><a>DescribeOutboundCrossClusterSearchConnections</a></code> operation.
  * Filters
    * items [Filter](#filter)
  * MaxResults
  * NextToken

### DescribeOutboundCrossClusterSearchConnectionsResponse
* DescribeOutboundCrossClusterSearchConnectionsResponse `object`: The result of a <code><a>DescribeOutboundCrossClusterSearchConnections</a></code> request. Contains the list of connections matching the filter criteria.
  * CrossClusterSearchConnections
    * items [OutboundCrossClusterSearchConnection](#outboundcrossclustersearchconnection)
  * NextToken

### DescribePackagesFilter
* DescribePackagesFilter `object`: Filter to apply in <code>DescribePackage</code> response.
  * Name
  * Value
    * items [DescribePackagesFilterValue](#describepackagesfiltervalue)

### DescribePackagesFilterList
* DescribePackagesFilterList `array`: A list of <code>DescribePackagesFilter</code> to filter the packages included in a <code>DescribePackages</code> response.
  * items [DescribePackagesFilter](#describepackagesfilter)

### DescribePackagesFilterName
* DescribePackagesFilterName `string` (values: PackageID, PackageName, PackageStatus)

### DescribePackagesFilterValue
* DescribePackagesFilterValue `string`

### DescribePackagesFilterValues
* DescribePackagesFilterValues `array`
  * items [DescribePackagesFilterValue](#describepackagesfiltervalue)

### DescribePackagesRequest
* DescribePackagesRequest `object`:  Container for request parameters to <code> <a>DescribePackage</a> </code> operation. 
  * Filters
    * items [DescribePackagesFilter](#describepackagesfilter)
  * MaxResults
  * NextToken

### DescribePackagesResponse
* DescribePackagesResponse `object`:  Container for response returned by <code> <a>DescribePackages</a> </code> operation. 
  * NextToken [String](#string)
  * PackageDetailsList
    * items [PackageDetails](#packagedetails)

### DescribeReservedElasticsearchInstanceOfferingsRequest
* DescribeReservedElasticsearchInstanceOfferingsRequest `object`: Container for parameters to <code>DescribeReservedElasticsearchInstanceOfferings</code>

### DescribeReservedElasticsearchInstanceOfferingsResponse
* DescribeReservedElasticsearchInstanceOfferingsResponse `object`: Container for results from <code>DescribeReservedElasticsearchInstanceOfferings</code>
  * NextToken
  * ReservedElasticsearchInstanceOfferings
    * items [ReservedElasticsearchInstanceOffering](#reservedelasticsearchinstanceoffering)

### DescribeReservedElasticsearchInstancesRequest
* DescribeReservedElasticsearchInstancesRequest `object`: Container for parameters to <code>DescribeReservedElasticsearchInstances</code>

### DescribeReservedElasticsearchInstancesResponse
* DescribeReservedElasticsearchInstancesResponse `object`: Container for results from <code>DescribeReservedElasticsearchInstances</code>
  * NextToken
  * ReservedElasticsearchInstances
    * items [ReservedElasticsearchInstance](#reservedelasticsearchinstance)

### DisabledOperationException


### DissociatePackageRequest
* DissociatePackageRequest `object`:  Container for request parameters to <code> <a>DissociatePackage</a> </code> operation. 

### DissociatePackageResponse
* DissociatePackageResponse `object`:  Container for response returned by <code> <a>DissociatePackage</a> </code> operation. 
  * DomainPackageDetails
    * DomainName
    * DomainPackageStatus
    * ErrorDetails
      * ErrorMessage [ErrorMessage](#errormessage)
      * ErrorType [ErrorType](#errortype)
    * LastUpdated
    * PackageID
    * PackageName
    * PackageType
    * PackageVersion [PackageVersion](#packageversion)
    * ReferencePath

### DomainEndpointOptions
* DomainEndpointOptions `object`: Options to configure endpoint for the Elasticsearch domain.
  * CustomEndpoint
  * CustomEndpointCertificateArn
  * CustomEndpointEnabled
  * EnforceHTTPS
  * TLSSecurityPolicy

### DomainEndpointOptionsStatus
* DomainEndpointOptionsStatus `object`: The configured endpoint options for the domain and their current status.
  * Options **required**
    * CustomEndpoint
    * CustomEndpointCertificateArn
    * CustomEndpointEnabled
    * EnforceHTTPS
    * TLSSecurityPolicy
  * Status **required**
    * CreationDate **required**
    * PendingDeletion
    * State **required**
    * UpdateDate **required**
    * UpdateVersion

### DomainId
* DomainId `string`: Unique identifier for an Elasticsearch domain.

### DomainInfo
* DomainInfo `object`
  * DomainName

### DomainInfoList
* DomainInfoList `array`:  Contains the list of Elasticsearch domain information.
  * items [DomainInfo](#domaininfo)

### DomainInformation
* DomainInformation `object`
  * DomainName **required** [DomainName](#domainname)
  * OwnerId [OwnerId](#ownerid)
  * Region [Region](#region)

### DomainName
* DomainName `string`: The name of an Elasticsearch domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).

### DomainNameFqdn
* DomainNameFqdn `string`

### DomainNameList
* DomainNameList `array`: A list of Elasticsearch domain names.
  * items [DomainName](#domainname)

### DomainPackageDetails
* DomainPackageDetails `object`: Information on a package that is associated with a domain.
  * DomainName
  * DomainPackageStatus
  * ErrorDetails
    * ErrorMessage [ErrorMessage](#errormessage)
    * ErrorType [ErrorType](#errortype)
  * LastUpdated
  * PackageID
  * PackageName
  * PackageType
  * PackageVersion [PackageVersion](#packageversion)
  * ReferencePath

### DomainPackageDetailsList
* DomainPackageDetailsList `array`
  * items [DomainPackageDetails](#domainpackagedetails)

### DomainPackageStatus
* DomainPackageStatus `string` (values: ASSOCIATING, ASSOCIATION_FAILED, ACTIVE, DISSOCIATING, DISSOCIATION_FAILED)

### Double
* Double `number`

### EBSOptions
* EBSOptions `object`: Options to enable, disable, and specify the properties of EBS storage volumes. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-ebs" target="_blank"> Configuring EBS-based Storage</a>.
  * EBSEnabled
  * Iops
  * VolumeSize
  * VolumeType

### EBSOptionsStatus
* EBSOptionsStatus `object`:  Status of the EBS options for the specified Elasticsearch domain.
  * Options **required**
    * EBSEnabled
    * Iops
    * VolumeSize
    * VolumeType
  * Status **required**
    * CreationDate **required**
    * PendingDeletion
    * State **required**
    * UpdateDate **required**
    * UpdateVersion

### ESPartitionInstanceType
* ESPartitionInstanceType `string` (values: m3.medium.elasticsearch, m3.large.elasticsearch, m3.xlarge.elasticsearch, m3.2xlarge.elasticsearch, m4.large.elasticsearch, m4.xlarge.elasticsearch, m4.2xlarge.elasticsearch, m4.4xlarge.elasticsearch, m4.10xlarge.elasticsearch, m5.large.elasticsearch, m5.xlarge.elasticsearch, m5.2xlarge.elasticsearch, m5.4xlarge.elasticsearch, m5.12xlarge.elasticsearch, r5.large.elasticsearch, r5.xlarge.elasticsearch, r5.2xlarge.elasticsearch, r5.4xlarge.elasticsearch, r5.12xlarge.elasticsearch, c5.large.elasticsearch, c5.xlarge.elasticsearch, c5.2xlarge.elasticsearch, c5.4xlarge.elasticsearch, c5.9xlarge.elasticsearch, c5.18xlarge.elasticsearch, ultrawarm1.medium.elasticsearch, ultrawarm1.large.elasticsearch, t2.micro.elasticsearch, t2.small.elasticsearch, t2.medium.elasticsearch, r3.large.elasticsearch, r3.xlarge.elasticsearch, r3.2xlarge.elasticsearch, r3.4xlarge.elasticsearch, r3.8xlarge.elasticsearch, i2.xlarge.elasticsearch, i2.2xlarge.elasticsearch, d2.xlarge.elasticsearch, d2.2xlarge.elasticsearch, d2.4xlarge.elasticsearch, d2.8xlarge.elasticsearch, c4.large.elasticsearch, c4.xlarge.elasticsearch, c4.2xlarge.elasticsearch, c4.4xlarge.elasticsearch, c4.8xlarge.elasticsearch, r4.large.elasticsearch, r4.xlarge.elasticsearch, r4.2xlarge.elasticsearch, r4.4xlarge.elasticsearch, r4.8xlarge.elasticsearch, r4.16xlarge.elasticsearch, i3.large.elasticsearch, i3.xlarge.elasticsearch, i3.2xlarge.elasticsearch, i3.4xlarge.elasticsearch, i3.8xlarge.elasticsearch, i3.16xlarge.elasticsearch)

### ESWarmPartitionInstanceType
* ESWarmPartitionInstanceType `string` (values: ultrawarm1.medium.elasticsearch, ultrawarm1.large.elasticsearch)

### ElasticsearchClusterConfig
* ElasticsearchClusterConfig `object`: Specifies the configuration for the domain cluster, such as the type and number of instances.
  * DedicatedMasterCount
  * DedicatedMasterEnabled
  * DedicatedMasterType
  * InstanceCount
  * InstanceType
  * WarmCount
  * WarmEnabled
  * WarmType
  * ZoneAwarenessConfig
    * AvailabilityZoneCount
  * ZoneAwarenessEnabled

### ElasticsearchClusterConfigStatus
* ElasticsearchClusterConfigStatus `object`:  Specifies the configuration status for the specified Elasticsearch domain.
  * Options **required**
    * DedicatedMasterCount
    * DedicatedMasterEnabled
    * DedicatedMasterType
    * InstanceCount
    * InstanceType
    * WarmCount
    * WarmEnabled
    * WarmType
    * ZoneAwarenessConfig
      * AvailabilityZoneCount
    * ZoneAwarenessEnabled
  * Status **required**
    * CreationDate **required**
    * PendingDeletion
    * State **required**
    * UpdateDate **required**
    * UpdateVersion

### ElasticsearchDomainConfig
* ElasticsearchDomainConfig `object`: The configuration of an Elasticsearch domain.
  * AccessPolicies
    * Options **required**
    * Status **required**
      * CreationDate **required**
      * PendingDeletion
      * State **required**
      * UpdateDate **required**
      * UpdateVersion
  * AdvancedOptions
    * Options **required**
    * Status **required**
      * CreationDate **required**
      * PendingDeletion
      * State **required**
      * UpdateDate **required**
      * UpdateVersion
  * AdvancedSecurityOptions
    * Options **required**
      * Enabled
      * InternalUserDatabaseEnabled
      * SAMLOptions
        * Enabled
        * Idp
          * EntityId **required**
          * MetadataContent **required**
        * RolesKey
        * SessionTimeoutMinutes
        * SubjectKey
    * Status **required**
      * CreationDate **required**
      * PendingDeletion
      * State **required**
      * UpdateDate **required**
      * UpdateVersion
  * CognitoOptions
    * Options **required**
      * Enabled
      * IdentityPoolId
      * RoleArn
      * UserPoolId
    * Status **required**
      * CreationDate **required**
      * PendingDeletion
      * State **required**
      * UpdateDate **required**
      * UpdateVersion
  * DomainEndpointOptions
    * Options **required**
      * CustomEndpoint
      * CustomEndpointCertificateArn
      * CustomEndpointEnabled
      * EnforceHTTPS
      * TLSSecurityPolicy
    * Status **required**
      * CreationDate **required**
      * PendingDeletion
      * State **required**
      * UpdateDate **required**
      * UpdateVersion
  * EBSOptions
    * Options **required**
      * EBSEnabled
      * Iops
      * VolumeSize
      * VolumeType
    * Status **required**
      * CreationDate **required**
      * PendingDeletion
      * State **required**
      * UpdateDate **required**
      * UpdateVersion
  * ElasticsearchClusterConfig
    * Options **required**
      * DedicatedMasterCount
      * DedicatedMasterEnabled
      * DedicatedMasterType
      * InstanceCount
      * InstanceType
      * WarmCount
      * WarmEnabled
      * WarmType
      * ZoneAwarenessConfig
        * AvailabilityZoneCount
      * ZoneAwarenessEnabled
    * Status **required**
      * CreationDate **required**
      * PendingDeletion
      * State **required**
      * UpdateDate **required**
      * UpdateVersion
  * ElasticsearchVersion
    * Options **required**
    * Status **required**
      * CreationDate **required**
      * PendingDeletion
      * State **required**
      * UpdateDate **required**
      * UpdateVersion
  * EncryptionAtRestOptions
    * Options **required**
      * Enabled
      * KmsKeyId
    * Status **required**
      * CreationDate **required**
      * PendingDeletion
      * State **required**
      * UpdateDate **required**
      * UpdateVersion
  * LogPublishingOptions
    * Options
    * Status
      * CreationDate **required**
      * PendingDeletion
      * State **required**
      * UpdateDate **required**
      * UpdateVersion
  * NodeToNodeEncryptionOptions
    * Options **required**
      * Enabled
    * Status **required**
      * CreationDate **required**
      * PendingDeletion
      * State **required**
      * UpdateDate **required**
      * UpdateVersion
  * SnapshotOptions
    * Options **required**
      * AutomatedSnapshotStartHour
    * Status **required**
      * CreationDate **required**
      * PendingDeletion
      * State **required**
      * UpdateDate **required**
      * UpdateVersion
  * VPCOptions
    * Options **required**
      * AvailabilityZones
        * items [String](#string)
      * SecurityGroupIds
        * items [String](#string)
      * SubnetIds
        * items [String](#string)
      * VPCId
    * Status **required**
      * CreationDate **required**
      * PendingDeletion
      * State **required**
      * UpdateDate **required**
      * UpdateVersion

### ElasticsearchDomainStatus
* ElasticsearchDomainStatus `object`: The current status of an Elasticsearch domain.
  * ARN **required**
  * AccessPolicies
  * AdvancedOptions
  * AdvancedSecurityOptions
    * Enabled
    * InternalUserDatabaseEnabled
    * SAMLOptions
      * Enabled
      * Idp
        * EntityId **required**
        * MetadataContent **required**
      * RolesKey
      * SessionTimeoutMinutes
      * SubjectKey
  * CognitoOptions
    * Enabled
    * IdentityPoolId
    * RoleArn
    * UserPoolId
  * Created
  * Deleted
  * DomainEndpointOptions
    * CustomEndpoint
    * CustomEndpointCertificateArn
    * CustomEndpointEnabled
    * EnforceHTTPS
    * TLSSecurityPolicy
  * DomainId **required**
  * DomainName **required**
  * EBSOptions
    * EBSEnabled
    * Iops
    * VolumeSize
    * VolumeType
  * ElasticsearchClusterConfig **required**
    * DedicatedMasterCount
    * DedicatedMasterEnabled
    * DedicatedMasterType
    * InstanceCount
    * InstanceType
    * WarmCount
    * WarmEnabled
    * WarmType
    * ZoneAwarenessConfig
      * AvailabilityZoneCount
    * ZoneAwarenessEnabled
  * ElasticsearchVersion [ElasticsearchVersionString](#elasticsearchversionstring)
  * EncryptionAtRestOptions
    * Enabled
    * KmsKeyId
  * Endpoint
  * Endpoints
  * LogPublishingOptions
  * NodeToNodeEncryptionOptions
    * Enabled
  * Processing
  * ServiceSoftwareOptions
    * AutomatedUpdateDate
    * Cancellable
    * CurrentVersion
    * Description
    * NewVersion
    * OptionalDeployment
    * UpdateAvailable
    * UpdateStatus
  * SnapshotOptions
    * AutomatedSnapshotStartHour
  * UpgradeProcessing
  * VPCOptions
    * AvailabilityZones
      * items [String](#string)
    * SecurityGroupIds
      * items [String](#string)
    * SubnetIds
      * items [String](#string)
    * VPCId

### ElasticsearchDomainStatusList
* ElasticsearchDomainStatusList `array`: A list that contains the status of each requested Elasticsearch domain.
  * items [ElasticsearchDomainStatus](#elasticsearchdomainstatus)

### ElasticsearchInstanceTypeList
* ElasticsearchInstanceTypeList `array`:  List of instance types supported by Amazon Elasticsearch service. 
  * items [ESPartitionInstanceType](#espartitioninstancetype)

### ElasticsearchVersionList
* ElasticsearchVersionList `array`: List of supported elastic search versions. 
  * items [ElasticsearchVersionString](#elasticsearchversionstring)

### ElasticsearchVersionStatus
* ElasticsearchVersionStatus `object`:  Status of the Elasticsearch version options for the specified Elasticsearch domain.
  * Options **required**
  * Status **required**
    * CreationDate **required**
    * PendingDeletion
    * State **required**
    * UpdateDate **required**
    * UpdateVersion

### ElasticsearchVersionString
* ElasticsearchVersionString `string`

### EncryptionAtRestOptions
* EncryptionAtRestOptions `object`: Specifies the Encryption At Rest Options.
  * Enabled
  * KmsKeyId

### EncryptionAtRestOptionsStatus
* EncryptionAtRestOptionsStatus `object`:  Status of the Encryption At Rest options for the specified Elasticsearch domain.
  * Options **required**
    * Enabled
    * KmsKeyId
  * Status **required**
    * CreationDate **required**
    * PendingDeletion
    * State **required**
    * UpdateDate **required**
    * UpdateVersion

### EndpointsMap
* EndpointsMap `object`

### ErrorDetails
* ErrorDetails `object`
  * ErrorMessage [ErrorMessage](#errormessage)
  * ErrorType [ErrorType](#errortype)

### ErrorMessage
* ErrorMessage `string`

### ErrorType
* ErrorType `string`

### Filter
* Filter `object`:  A filter used to limit results when describing inbound or outbound cross-cluster search connections. Multiple values can be specified per filter. A cross-cluster search connection must match at least one of the specified values for it to be returned from an operation. 
  * Name
  * Values
    * items [NonEmptyString](#nonemptystring)

### FilterList
* FilterList `array`
  * items [Filter](#filter)

### GUID
* GUID `string`

### GetCompatibleElasticsearchVersionsRequest
* GetCompatibleElasticsearchVersionsRequest `object`:  Container for request parameters to <code> <a>GetCompatibleElasticsearchVersions</a> </code> operation. 

### GetCompatibleElasticsearchVersionsResponse
* GetCompatibleElasticsearchVersionsResponse `object`:  Container for response returned by <code> <a>GetCompatibleElasticsearchVersions</a> </code> operation. 
  * CompatibleElasticsearchVersions
    * items [CompatibleVersionsMap](#compatibleversionsmap)

### GetPackageVersionHistoryRequest
* GetPackageVersionHistoryRequest `object`:  Container for request parameters to <code> <a>GetPackageVersionHistory</a> </code> operation. 

### GetPackageVersionHistoryResponse
* GetPackageVersionHistoryResponse `object`:  Container for response returned by <code> <a>GetPackageVersionHistory</a> </code> operation. 
  * NextToken [String](#string)
  * PackageID [PackageID](#packageid)
  * PackageVersionHistoryList
    * items [PackageVersionHistory](#packageversionhistory)

### GetUpgradeHistoryRequest
* GetUpgradeHistoryRequest `object`:  Container for request parameters to <code> <a>GetUpgradeHistory</a> </code> operation. 

### GetUpgradeHistoryResponse
* GetUpgradeHistoryResponse `object`:  Container for response returned by <code> <a>GetUpgradeHistory</a> </code> operation. 
  * NextToken
  * UpgradeHistories
    * items [UpgradeHistory](#upgradehistory)

### GetUpgradeStatusRequest
* GetUpgradeStatusRequest `object`:  Container for request parameters to <code> <a>GetUpgradeStatus</a> </code> operation. 

### GetUpgradeStatusResponse
* GetUpgradeStatusResponse `object`:  Container for response returned by <code> <a>GetUpgradeStatus</a> </code> operation. 
  * StepStatus
  * UpgradeName
  * UpgradeStep

### IdentityPoolId
* IdentityPoolId `string`

### InboundCrossClusterSearchConnection
* InboundCrossClusterSearchConnection `object`: Specifies details of an inbound connection.
  * ConnectionStatus
    * Message
    * StatusCode
  * CrossClusterSearchConnectionId
  * DestinationDomainInfo
    * DomainName **required** [DomainName](#domainname)
    * OwnerId [OwnerId](#ownerid)
    * Region [Region](#region)
  * SourceDomainInfo
    * DomainName **required** [DomainName](#domainname)
    * OwnerId [OwnerId](#ownerid)
    * Region [Region](#region)

### InboundCrossClusterSearchConnectionStatus
* InboundCrossClusterSearchConnectionStatus `object`: Specifies the coonection status of an inbound cross-cluster search connection.
  * Message
  * StatusCode

### InboundCrossClusterSearchConnectionStatusCode
* InboundCrossClusterSearchConnectionStatusCode `string` (values: PENDING_ACCEPTANCE, APPROVED, REJECTING, REJECTED, DELETING, DELETED)

### InboundCrossClusterSearchConnections
* InboundCrossClusterSearchConnections `array`
  * items [InboundCrossClusterSearchConnection](#inboundcrossclustersearchconnection)

### InstanceCount
* InstanceCount `integer`: Specifies the number of EC2 instances in the Elasticsearch domain.

### InstanceCountLimits
* InstanceCountLimits `object`:  InstanceCountLimits represents the limits on number of instances that be created in Amazon Elasticsearch for given InstanceType. 
  * MaximumInstanceCount [MaximumInstanceCount](#maximuminstancecount)
  * MinimumInstanceCount [MinimumInstanceCount](#minimuminstancecount)

### InstanceLimits
* InstanceLimits `object`: InstanceLimits represents the list of instance related attributes that are available for given InstanceType. 
  * InstanceCountLimits [InstanceCountLimits](#instancecountlimits)

### InstanceRole
* InstanceRole `string`

### Integer
* Integer `integer`

### IntegerClass
* IntegerClass `integer`

### InternalException


### InvalidPaginationTokenException


### InvalidTypeException


### Issue
* Issue `string`

### Issues
* Issues `array`
  * items [Issue](#issue)

### KmsKeyId
* KmsKeyId `string`

### LastUpdated
* LastUpdated `string`

### LimitExceededException


### LimitName
* LimitName `string`

### LimitValue
* LimitValue `string`

### LimitValueList
* LimitValueList `array`
  * items [LimitValue](#limitvalue)

### Limits
* Limits `object`:  Limits for given InstanceType and for each of it's role. <br/> Limits contains following <code> <a>StorageTypes,</a> </code> <code> <a>InstanceLimits</a> </code> and <code> <a>AdditionalLimits</a> </code> 
  * AdditionalLimits
    * items [AdditionalLimit](#additionallimit)
  * InstanceLimits [InstanceLimits](#instancelimits)
  * StorageTypes
    * items [StorageType](#storagetype)

### LimitsByRole
* LimitsByRole `object`:  Map of Role of the Instance and Limits that are applicable. Role performed by given Instance in Elasticsearch can be one of the following: <ul> <li>data: If the given InstanceType is used as data node</li> <li>master: If the given InstanceType is used as master node</li> <li>ultra_warm: If the given InstanceType is used as warm node</li> </ul> 

### ListDomainNamesResponse
* ListDomainNamesResponse `object`: The result of a <code>ListDomainNames</code> operation. Contains the names of all Elasticsearch domains owned by this account.
  * DomainNames
    * items [DomainInfo](#domaininfo)

### ListDomainsForPackageRequest
* ListDomainsForPackageRequest `object`:  Container for request parameters to <code> <a>ListDomainsForPackage</a> </code> operation. 

### ListDomainsForPackageResponse
* ListDomainsForPackageResponse `object`:  Container for response parameters to <code> <a>ListDomainsForPackage</a> </code> operation. 
  * DomainPackageDetailsList
    * items [DomainPackageDetails](#domainpackagedetails)
  * NextToken [String](#string)

### ListElasticsearchInstanceTypesRequest
* ListElasticsearchInstanceTypesRequest `object`:  Container for the parameters to the <code> <a>ListElasticsearchInstanceTypes</a> </code> operation. 

### ListElasticsearchInstanceTypesResponse
* ListElasticsearchInstanceTypesResponse `object`:  Container for the parameters returned by <code> <a>ListElasticsearchInstanceTypes</a> </code> operation. 
  * ElasticsearchInstanceTypes
    * items [ESPartitionInstanceType](#espartitioninstancetype)
  * NextToken

### ListElasticsearchVersionsRequest
* ListElasticsearchVersionsRequest `object`: <p> Container for the parameters to the <code> <a>ListElasticsearchVersions</a> </code> operation. <p> Use <code> <a>MaxResults</a> </code> to control the maximum number of results to retrieve in a single call. </p> <p> Use <code> <a>NextToken</a> </code> in response to retrieve more results. If the received response does not contain a NextToken, then there are no more results to retrieve. </p> </p>

### ListElasticsearchVersionsResponse
* ListElasticsearchVersionsResponse `object`:  Container for the parameters for response received from <code> <a>ListElasticsearchVersions</a> </code> operation. 
  * ElasticsearchVersions [ElasticsearchVersionList](#elasticsearchversionlist)
  * NextToken [NextToken](#nexttoken)

### ListPackagesForDomainRequest
* ListPackagesForDomainRequest `object`:  Container for request parameters to <code> <a>ListPackagesForDomain</a> </code> operation. 

### ListPackagesForDomainResponse
* ListPackagesForDomainResponse `object`:  Container for response parameters to <code> <a>ListPackagesForDomain</a> </code> operation. 
  * DomainPackageDetailsList
    * items [DomainPackageDetails](#domainpackagedetails)
  * NextToken

### ListTagsRequest
* ListTagsRequest `object`: Container for the parameters to the <code><a>ListTags</a></code> operation. Specify the <code>ARN</code> for the Elasticsearch domain to which the tags are attached that you want to view are attached.

### ListTagsResponse
* ListTagsResponse `object`: The result of a <code>ListTags</code> operation. Contains tags for all requested Elasticsearch domains.
  * TagList
    * items [Tag](#tag)

### LogPublishingOption
* LogPublishingOption `object`: Log Publishing option that is set for given domain. <br/>Attributes and their details: <ul> <li>CloudWatchLogsLogGroupArn: ARN of the Cloudwatch log group to which log needs to be published.</li> <li>Enabled: Whether the log publishing for given log type is enabled or not</li> </ul> 
  * CloudWatchLogsLogGroupArn [CloudWatchLogsLogGroupArn](#cloudwatchlogsloggrouparn)
  * Enabled

### LogPublishingOptions
* LogPublishingOptions `object`

### LogPublishingOptionsStatus
* LogPublishingOptionsStatus `object`: The configured log publishing options for the domain and their current status.
  * Options
  * Status
    * CreationDate **required**
    * PendingDeletion
    * State **required**
    * UpdateDate **required**
    * UpdateVersion

### LogType
* LogType `string` (values: INDEX_SLOW_LOGS, SEARCH_SLOW_LOGS, ES_APPLICATION_LOGS, AUDIT_LOGS): Type of Log File, it can be one of the following: <ul> <li>INDEX_SLOW_LOGS: Index slow logs contain insert requests that took more time than configured index query log threshold to execute.</li> <li>SEARCH_SLOW_LOGS: Search slow logs contain search queries that took more time than configured search query log threshold to execute.</li> <li>ES_APPLICATION_LOGS: Elasticsearch application logs contain information about errors and warnings raised during the operation of the service and can be useful for troubleshooting.</li> <li>AUDIT_LOGS: Audit logs contain records of user requests for access from the domain.</li> </ul> 

### MasterUserOptions
* MasterUserOptions `object`: Credentials for the master user: username and password, ARN, or both.
  * MasterUserARN
  * MasterUserName
  * MasterUserPassword

### MaxResults
* MaxResults `integer`:  Set this value to limit the number of results returned. 

### MaximumInstanceCount
* MaximumInstanceCount `integer`:  Maximum number of Instances that can be instantiated for given InstanceType. 

### MinimumInstanceCount
* MinimumInstanceCount `integer`:  Minimum number of Instances that can be instantiated for given InstanceType. 

### NextToken
* NextToken `string`:  Paginated APIs accepts NextToken input to returns next page results and provides a NextToken output in the response which can be used by the client to retrieve more results. 

### NodeToNodeEncryptionOptions
* NodeToNodeEncryptionOptions `object`: Specifies the node-to-node encryption options.
  * Enabled

### NodeToNodeEncryptionOptionsStatus
* NodeToNodeEncryptionOptionsStatus `object`: Status of the node-to-node encryption options for the specified Elasticsearch domain.
  * Options **required**
    * Enabled
  * Status **required**
    * CreationDate **required**
    * PendingDeletion
    * State **required**
    * UpdateDate **required**
    * UpdateVersion

### NonEmptyString
* NonEmptyString `string`

### OptionState
* OptionState `string` (values: RequiresIndexDocuments, Processing, Active): <p>The state of a requested change. One of the following:</p> <ul> <li>Processing: The request change is still in-process.</li> <li>Active: The request change is processed and deployed to the Elasticsearch domain.</li> </ul>

### OptionStatus
* OptionStatus `object`: Provides the current status of the entity.
  * CreationDate **required**
  * PendingDeletion
  * State **required**
  * UpdateDate **required**
  * UpdateVersion

### OutboundCrossClusterSearchConnection
* OutboundCrossClusterSearchConnection `object`: Specifies details of an outbound connection.
  * ConnectionAlias
  * ConnectionStatus
    * Message
    * StatusCode
  * CrossClusterSearchConnectionId
  * DestinationDomainInfo
    * DomainName **required** [DomainName](#domainname)
    * OwnerId [OwnerId](#ownerid)
    * Region [Region](#region)
  * SourceDomainInfo
    * DomainName **required** [DomainName](#domainname)
    * OwnerId [OwnerId](#ownerid)
    * Region [Region](#region)

### OutboundCrossClusterSearchConnectionStatus
* OutboundCrossClusterSearchConnectionStatus `object`: Specifies the connection status of an outbound cross-cluster search connection.
  * Message
  * StatusCode

### OutboundCrossClusterSearchConnectionStatusCode
* OutboundCrossClusterSearchConnectionStatusCode `string` (values: PENDING_ACCEPTANCE, VALIDATING, VALIDATION_FAILED, PROVISIONING, ACTIVE, REJECTED, DELETING, DELETED)

### OutboundCrossClusterSearchConnections
* OutboundCrossClusterSearchConnections `array`
  * items [OutboundCrossClusterSearchConnection](#outboundcrossclustersearchconnection)

### OwnerId
* OwnerId `string`

### PackageDescription
* PackageDescription `string`

### PackageDetails
* PackageDetails `object`: Basic information about a package.
  * AvailablePackageVersion [PackageVersion](#packageversion)
  * CreatedAt
  * ErrorDetails
    * ErrorMessage [ErrorMessage](#errormessage)
    * ErrorType [ErrorType](#errortype)
  * LastUpdatedAt [LastUpdated](#lastupdated)
  * PackageDescription
  * PackageID
  * PackageName
  * PackageStatus
  * PackageType

### PackageDetailsList
* PackageDetailsList `array`
  * items [PackageDetails](#packagedetails)

### PackageID
* PackageID `string`

### PackageName
* PackageName `string`

### PackageSource
* PackageSource `object`: The S3 location for importing the package specified as <code>S3BucketName</code> and <code>S3Key</code>
  * S3BucketName
  * S3Key

### PackageStatus
* PackageStatus `string` (values: COPYING, COPY_FAILED, VALIDATING, VALIDATION_FAILED, AVAILABLE, DELETING, DELETED, DELETE_FAILED)

### PackageType
* PackageType `string` (values: TXT-DICTIONARY)

### PackageVersion
* PackageVersion `string`

### PackageVersionHistory
* PackageVersionHistory `object`: Details of a package version.
  * CommitMessage
  * CreatedAt
  * PackageVersion

### PackageVersionHistoryList
* PackageVersionHistoryList `array`
  * items [PackageVersionHistory](#packageversionhistory)

### Password
* Password `string`

### PolicyDocument
* PolicyDocument `string`: Access policy rules for an Elasticsearch domain service endpoints. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-access-policies" target="_blank">Configuring Access Policies</a> in the <i>Amazon Elasticsearch Service Developer Guide</i>. The maximum size of a policy document is 100 KB.

### PurchaseReservedElasticsearchInstanceOfferingRequest
* PurchaseReservedElasticsearchInstanceOfferingRequest `object`: Container for parameters to <code>PurchaseReservedElasticsearchInstanceOffering</code>
  * InstanceCount
  * ReservationName **required**
  * ReservedElasticsearchInstanceOfferingId **required**

### PurchaseReservedElasticsearchInstanceOfferingResponse
* PurchaseReservedElasticsearchInstanceOfferingResponse `object`: Represents the output of a <code>PurchaseReservedElasticsearchInstanceOffering</code> operation.
  * ReservationName
  * ReservedElasticsearchInstanceId

### RecurringCharge
* RecurringCharge `object`: Contains the specific price and frequency of a recurring charges for a reserved Elasticsearch instance, or for a reserved Elasticsearch instance offering.
  * RecurringChargeAmount
  * RecurringChargeFrequency

### RecurringChargeList
* RecurringChargeList `array`
  * items [RecurringCharge](#recurringcharge)

### ReferencePath
* ReferencePath `string`

### Region
* Region `string`

### RejectInboundCrossClusterSearchConnectionRequest
* RejectInboundCrossClusterSearchConnectionRequest `object`: Container for the parameters to the <code><a>RejectInboundCrossClusterSearchConnection</a></code> operation.

### RejectInboundCrossClusterSearchConnectionResponse
* RejectInboundCrossClusterSearchConnectionResponse `object`: The result of a <code><a>RejectInboundCrossClusterSearchConnection</a></code> operation. Contains details of rejected inbound connection.
  * CrossClusterSearchConnection
    * ConnectionStatus
      * Message
      * StatusCode
    * CrossClusterSearchConnectionId
    * DestinationDomainInfo
      * DomainName **required** [DomainName](#domainname)
      * OwnerId [OwnerId](#ownerid)
      * Region [Region](#region)
    * SourceDomainInfo
      * DomainName **required** [DomainName](#domainname)
      * OwnerId [OwnerId](#ownerid)
      * Region [Region](#region)

### RemoveTagsRequest
* RemoveTagsRequest `object`: Container for the parameters to the <code><a>RemoveTags</a></code> operation. Specify the <code>ARN</code> for the Elasticsearch domain from which you want to remove the specified <code>TagKey</code>.
  * ARN **required**
  * TagKeys **required**
    * items [String](#string)

### ReservationToken
* ReservationToken `string`

### ReservedElasticsearchInstance
* ReservedElasticsearchInstance `object`: Details of a reserved Elasticsearch instance.
  * CurrencyCode
  * Duration
  * ElasticsearchInstanceCount
  * ElasticsearchInstanceType
  * FixedPrice
  * PaymentOption
  * RecurringCharges
    * items [RecurringCharge](#recurringcharge)
  * ReservationName
  * ReservedElasticsearchInstanceId
  * ReservedElasticsearchInstanceOfferingId
  * StartTime
  * State
  * UsagePrice

### ReservedElasticsearchInstanceList
* ReservedElasticsearchInstanceList `array`
  * items [ReservedElasticsearchInstance](#reservedelasticsearchinstance)

### ReservedElasticsearchInstanceOffering
* ReservedElasticsearchInstanceOffering `object`: Details of a reserved Elasticsearch instance offering.
  * CurrencyCode
  * Duration
  * ElasticsearchInstanceType
  * FixedPrice
  * PaymentOption
  * RecurringCharges
    * items [RecurringCharge](#recurringcharge)
  * ReservedElasticsearchInstanceOfferingId
  * UsagePrice

### ReservedElasticsearchInstanceOfferingList
* ReservedElasticsearchInstanceOfferingList `array`
  * items [ReservedElasticsearchInstanceOffering](#reservedelasticsearchinstanceoffering)

### ReservedElasticsearchInstancePaymentOption
* ReservedElasticsearchInstancePaymentOption `string` (values: ALL_UPFRONT, PARTIAL_UPFRONT, NO_UPFRONT)

### ResourceAlreadyExistsException


### ResourceNotFoundException


### RoleArn
* RoleArn `string`

### S3BucketName
* S3BucketName `string`

### S3Key
* S3Key `string`

### SAMLEntityId
* SAMLEntityId `string`

### SAMLIdp
* SAMLIdp `object`: Specifies the SAML Identity Provider's information.
  * EntityId **required**
  * MetadataContent **required**

### SAMLMetadata
* SAMLMetadata `string`

### SAMLOptionsInput
* SAMLOptionsInput `object`: Specifies the SAML application configuration for the domain.
  * Enabled
  * Idp
    * EntityId **required**
    * MetadataContent **required**
  * MasterBackendRole
  * MasterUserName
  * RolesKey
  * SessionTimeoutMinutes
  * SubjectKey

### SAMLOptionsOutput
* SAMLOptionsOutput `object`: Describes the SAML application configured for the domain.
  * Enabled
  * Idp
    * EntityId **required**
    * MetadataContent **required**
  * RolesKey
  * SessionTimeoutMinutes
  * SubjectKey

### ServiceSoftwareOptions
* ServiceSoftwareOptions `object`: The current options of an Elasticsearch domain service software options.
  * AutomatedUpdateDate
  * Cancellable
  * CurrentVersion
  * Description
  * NewVersion
  * OptionalDeployment
  * UpdateAvailable
  * UpdateStatus

### ServiceUrl
* ServiceUrl `string`: The endpoint to which service requests are submitted. For example, <code>search-imdb-movies-oopcnjfn6ugofer3zx5iadxxca.eu-west-1.es.amazonaws.com</code> or <code>doc-imdb-movies-oopcnjfn6ugofer3zx5iadxxca.eu-west-1.es.amazonaws.com</code>.

### SnapshotOptions
* SnapshotOptions `object`: Specifies the time, in UTC format, when the service takes a daily automated snapshot of the specified Elasticsearch domain. Default value is <code>0</code> hours.
  * AutomatedSnapshotStartHour

### SnapshotOptionsStatus
* SnapshotOptionsStatus `object`: Status of a daily automated snapshot.
  * Options **required**
    * AutomatedSnapshotStartHour
  * Status **required**
    * CreationDate **required**
    * PendingDeletion
    * State **required**
    * UpdateDate **required**
    * UpdateVersion

### StartElasticsearchServiceSoftwareUpdateRequest
* StartElasticsearchServiceSoftwareUpdateRequest `object`: Container for the parameters to the <code><a>StartElasticsearchServiceSoftwareUpdate</a></code> operation. Specifies the name of the Elasticsearch domain that you wish to schedule a service software update on.
  * DomainName **required**

### StartElasticsearchServiceSoftwareUpdateResponse
* StartElasticsearchServiceSoftwareUpdateResponse `object`: The result of a <code>StartElasticsearchServiceSoftwareUpdate</code> operation. Contains the status of the update.
  * ServiceSoftwareOptions
    * AutomatedUpdateDate
    * Cancellable
    * CurrentVersion
    * Description
    * NewVersion
    * OptionalDeployment
    * UpdateAvailable
    * UpdateStatus

### StartTimestamp
* StartTimestamp `string`

### StorageSubTypeName
* StorageSubTypeName `string`:  SubType of the given storage type. List of available sub-storage options: For "instance" storageType we wont have any storageSubType, in case of "ebs" storageType we will have following valid storageSubTypes <ol> <li>standard</li> <li>gp2</li> <li>io1</li> </ol> Refer <code><a>VolumeType</a></code> for more information regarding above EBS storage options. 

### StorageType
* StorageType `object`: StorageTypes represents the list of storage related types and their attributes that are available for given InstanceType. 
  * StorageSubTypeName [StorageSubTypeName](#storagesubtypename)
  * StorageTypeLimits
    * items [StorageTypeLimit](#storagetypelimit)
  * StorageTypeName [StorageTypeName](#storagetypename)

### StorageTypeLimit
* StorageTypeLimit `object`: Limits that are applicable for given storage type. 
  * LimitName
  * LimitValues
    * items [LimitValue](#limitvalue)

### StorageTypeLimitList
* StorageTypeLimitList `array`
  * items [StorageTypeLimit](#storagetypelimit)

### StorageTypeList
* StorageTypeList `array`
  * items [StorageType](#storagetype)

### StorageTypeName
* StorageTypeName `string`:  Type of the storage. List of available storage options: <ol> <li>instance</li> Inbuilt storage available for the given Instance <li>ebs</li> Elastic block storage that would be attached to the given Instance </ol> 

### String
* String `string`

### StringList
* StringList `array`
  * items [String](#string)

### TLSSecurityPolicy
* TLSSecurityPolicy `string` (values: Policy-Min-TLS-1-0-2019-07, Policy-Min-TLS-1-2-2019-07)

### Tag
* Tag `object`: Specifies a key value pair for a resource tag.
  * Key **required**
  * Value **required**

### TagKey
* TagKey `string`: A string of length from 1 to 128 characters that specifies the key for a Tag. Tag keys must be unique for the Elasticsearch domain to which they are attached.

### TagList
* TagList `array`: A list of <code>Tag</code> 
  * items [Tag](#tag)

### TagValue
* TagValue `string`: A string of length from 0 to 256 characters that specifies the value for a Tag. Tag values can be null and do not have to be unique in a tag set.

### UIntValue
* UIntValue `integer`

### UpdateElasticsearchDomainConfigRequest
* UpdateElasticsearchDomainConfigRequest `object`: Container for the parameters to the <code><a>UpdateElasticsearchDomain</a></code> operation. Specifies the type and number of instances in the domain cluster.
  * AccessPolicies
  * AdvancedOptions
  * AdvancedSecurityOptions
    * Enabled
    * InternalUserDatabaseEnabled
    * MasterUserOptions
      * MasterUserARN
      * MasterUserName
      * MasterUserPassword
    * SAMLOptions
      * Enabled
      * Idp
        * EntityId **required**
        * MetadataContent **required**
      * MasterBackendRole
      * MasterUserName
      * RolesKey
      * SessionTimeoutMinutes
      * SubjectKey
  * CognitoOptions
    * Enabled
    * IdentityPoolId
    * RoleArn
    * UserPoolId
  * DomainEndpointOptions
    * CustomEndpoint
    * CustomEndpointCertificateArn
    * CustomEndpointEnabled
    * EnforceHTTPS
    * TLSSecurityPolicy
  * EBSOptions
    * EBSEnabled
    * Iops
    * VolumeSize
    * VolumeType
  * ElasticsearchClusterConfig
    * DedicatedMasterCount
    * DedicatedMasterEnabled
    * DedicatedMasterType
    * InstanceCount
    * InstanceType
    * WarmCount
    * WarmEnabled
    * WarmType
    * ZoneAwarenessConfig
      * AvailabilityZoneCount
    * ZoneAwarenessEnabled
  * LogPublishingOptions
  * SnapshotOptions
    * AutomatedSnapshotStartHour
  * VPCOptions
    * SecurityGroupIds
      * items [String](#string)
    * SubnetIds
      * items [String](#string)

### UpdateElasticsearchDomainConfigResponse
* UpdateElasticsearchDomainConfigResponse `object`: The result of an <code>UpdateElasticsearchDomain</code> request. Contains the status of the Elasticsearch domain being updated.
  * DomainConfig **required**
    * AccessPolicies
      * Options **required**
      * Status **required**
        * CreationDate **required**
        * PendingDeletion
        * State **required**
        * UpdateDate **required**
        * UpdateVersion
    * AdvancedOptions
      * Options **required**
      * Status **required**
        * CreationDate **required**
        * PendingDeletion
        * State **required**
        * UpdateDate **required**
        * UpdateVersion
    * AdvancedSecurityOptions
      * Options **required**
        * Enabled
        * InternalUserDatabaseEnabled
        * SAMLOptions
          * Enabled
          * Idp
          * RolesKey
          * SessionTimeoutMinutes
          * SubjectKey
      * Status **required**
        * CreationDate **required**
        * PendingDeletion
        * State **required**
        * UpdateDate **required**
        * UpdateVersion
    * CognitoOptions
      * Options **required**
        * Enabled
        * IdentityPoolId
        * RoleArn
        * UserPoolId
      * Status **required**
        * CreationDate **required**
        * PendingDeletion
        * State **required**
        * UpdateDate **required**
        * UpdateVersion
    * DomainEndpointOptions
      * Options **required**
        * CustomEndpoint
        * CustomEndpointCertificateArn
        * CustomEndpointEnabled
        * EnforceHTTPS
        * TLSSecurityPolicy
      * Status **required**
        * CreationDate **required**
        * PendingDeletion
        * State **required**
        * UpdateDate **required**
        * UpdateVersion
    * EBSOptions
      * Options **required**
        * EBSEnabled
        * Iops
        * VolumeSize
        * VolumeType
      * Status **required**
        * CreationDate **required**
        * PendingDeletion
        * State **required**
        * UpdateDate **required**
        * UpdateVersion
    * ElasticsearchClusterConfig
      * Options **required**
        * DedicatedMasterCount
        * DedicatedMasterEnabled
        * DedicatedMasterType
        * InstanceCount
        * InstanceType
        * WarmCount
        * WarmEnabled
        * WarmType
        * ZoneAwarenessConfig
          * AvailabilityZoneCount
        * ZoneAwarenessEnabled
      * Status **required**
        * CreationDate **required**
        * PendingDeletion
        * State **required**
        * UpdateDate **required**
        * UpdateVersion
    * ElasticsearchVersion
      * Options **required**
      * Status **required**
        * CreationDate **required**
        * PendingDeletion
        * State **required**
        * UpdateDate **required**
        * UpdateVersion
    * EncryptionAtRestOptions
      * Options **required**
        * Enabled
        * KmsKeyId
      * Status **required**
        * CreationDate **required**
        * PendingDeletion
        * State **required**
        * UpdateDate **required**
        * UpdateVersion
    * LogPublishingOptions
      * Options
      * Status
        * CreationDate **required**
        * PendingDeletion
        * State **required**
        * UpdateDate **required**
        * UpdateVersion
    * NodeToNodeEncryptionOptions
      * Options **required**
        * Enabled
      * Status **required**
        * CreationDate **required**
        * PendingDeletion
        * State **required**
        * UpdateDate **required**
        * UpdateVersion
    * SnapshotOptions
      * Options **required**
        * AutomatedSnapshotStartHour
      * Status **required**
        * CreationDate **required**
        * PendingDeletion
        * State **required**
        * UpdateDate **required**
        * UpdateVersion
    * VPCOptions
      * Options **required**
        * AvailabilityZones
          * items [String](#string)
        * SecurityGroupIds
          * items [String](#string)
        * SubnetIds
          * items [String](#string)
        * VPCId
      * Status **required**
        * CreationDate **required**
        * PendingDeletion
        * State **required**
        * UpdateDate **required**
        * UpdateVersion

### UpdatePackageRequest
* UpdatePackageRequest `object`:  Container for request parameters to <code> <a>UpdatePackage</a> </code> operation. 
  * CommitMessage
  * PackageDescription
  * PackageID **required**
  * PackageSource **required** [PackageSource](#packagesource)

### UpdatePackageResponse
* UpdatePackageResponse `object`:  Container for response returned by <code> <a>UpdatePackage</a> </code> operation. 
  * PackageDetails
    * AvailablePackageVersion [PackageVersion](#packageversion)
    * CreatedAt
    * ErrorDetails
      * ErrorMessage [ErrorMessage](#errormessage)
      * ErrorType [ErrorType](#errortype)
    * LastUpdatedAt [LastUpdated](#lastupdated)
    * PackageDescription
    * PackageID
    * PackageName
    * PackageStatus
    * PackageType

### UpdateTimestamp
* UpdateTimestamp `string`

### UpgradeElasticsearchDomainRequest
* UpgradeElasticsearchDomainRequest `object`:  Container for request parameters to <code> <a>UpgradeElasticsearchDomain</a> </code> operation. 
  * DomainName **required** [DomainName](#domainname)
  * PerformCheckOnly
  * TargetVersion **required**

### UpgradeElasticsearchDomainResponse
* UpgradeElasticsearchDomainResponse `object`:  Container for response returned by <code> <a>UpgradeElasticsearchDomain</a> </code> operation. 
  * DomainName [DomainName](#domainname)
  * PerformCheckOnly
  * TargetVersion

### UpgradeHistory
* UpgradeHistory `object`: History of the last 10 Upgrades and Upgrade Eligibility Checks.
  * StartTimestamp
  * StepsList
    * items [UpgradeStepItem](#upgradestepitem)
  * UpgradeName
  * UpgradeStatus

### UpgradeHistoryList
* UpgradeHistoryList `array`
  * items [UpgradeHistory](#upgradehistory)

### UpgradeName
* UpgradeName `string`

### UpgradeStatus
* UpgradeStatus `string` (values: IN_PROGRESS, SUCCEEDED, SUCCEEDED_WITH_ISSUES, FAILED)

### UpgradeStep
* UpgradeStep `string` (values: PRE_UPGRADE_CHECK, SNAPSHOT, UPGRADE)

### UpgradeStepItem
* UpgradeStepItem `object`: Represents a single step of the Upgrade or Upgrade Eligibility Check workflow.
  * Issues
    * items [Issue](#issue)
  * ProgressPercent
  * UpgradeStep
  * UpgradeStepStatus

### UpgradeStepsList
* UpgradeStepsList `array`
  * items [UpgradeStepItem](#upgradestepitem)

### UserPoolId
* UserPoolId `string`

### Username
* Username `string`

### VPCDerivedInfo
* VPCDerivedInfo `object`: Options to specify the subnets and security groups for VPC endpoint. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-vpc.html" target="_blank"> VPC Endpoints for Amazon Elasticsearch Service Domains</a>.
  * AvailabilityZones
    * items [String](#string)
  * SecurityGroupIds
    * items [String](#string)
  * SubnetIds
    * items [String](#string)
  * VPCId

### VPCDerivedInfoStatus
* VPCDerivedInfoStatus `object`:  Status of the VPC options for the specified Elasticsearch domain.
  * Options **required**
    * AvailabilityZones
      * items [String](#string)
    * SecurityGroupIds
      * items [String](#string)
    * SubnetIds
      * items [String](#string)
    * VPCId
  * Status **required**
    * CreationDate **required**
    * PendingDeletion
    * State **required**
    * UpdateDate **required**
    * UpdateVersion

### VPCOptions
* VPCOptions `object`: Options to specify the subnets and security groups for VPC endpoint. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-vpc.html" target="_blank"> VPC Endpoints for Amazon Elasticsearch Service Domains</a>.
  * SecurityGroupIds
    * items [String](#string)
  * SubnetIds
    * items [String](#string)

### ValidationException


### ValueStringList
* ValueStringList `array`
  * items [NonEmptyString](#nonemptystring)

### VolumeType
* VolumeType `string` (values: standard, gp2, io1):  The type of EBS volume, standard, gp2, or io1. See <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-ebs" target="_blank">Configuring EBS-based Storage</a>for more information.

### ZoneAwarenessConfig
* ZoneAwarenessConfig `object`: Specifies the zone awareness configuration for the domain cluster, such as the number of availability zones.
  * AvailabilityZoneCount


