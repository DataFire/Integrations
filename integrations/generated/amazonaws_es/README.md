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

amazonaws_es.ListDomainNames({}).then(data => {
  console.log(data);
});
```

## Description

<fullname>Amazon Elasticsearch Configuration Service</fullname> <p>Use the Amazon Elasticsearch configuration API to create, configure, and manage Elasticsearch domains.</p> <p>The endpoint for configuration service requests is region-specific: es.<i>region</i>.amazonaws.com. For example, es.us-east-1.amazonaws.com. For a current list of supported regions and endpoints, see <a href="http://docs.aws.amazon.com/general/latest/gr/rande.html#elasticsearch-service-regions" target="_blank">Regions and Endpoints</a>.</p>

## Actions

### ListDomainNames



```js
amazonaws_es.ListDomainNames({}, context)
```

#### Input
* input `object`

#### Output
* output [ListDomainNamesResponse](#listdomainnamesresponse)

### CreateElasticsearchDomain



```js
amazonaws_es.CreateElasticsearchDomain({
  "DomainName": ""
}, context)
```

#### Input
* input `object`
  * AccessPolicies [PolicyDocument](#policydocument)
  * AdvancedOptions [AdvancedOptions](#advancedoptions)
  * DomainName **required** [DomainName](#domainname)
  * EBSOptions [EBSOptions](#ebsoptions)
  * ElasticsearchClusterConfig [ElasticsearchClusterConfig](#elasticsearchclusterconfig)
  * ElasticsearchVersion [ElasticsearchVersionString](#elasticsearchversionstring)
  * LogPublishingOptions [LogPublishingOptions](#logpublishingoptions)
  * SnapshotOptions [SnapshotOptions](#snapshotoptions)
  * VPCOptions [VPCOptions](#vpcoptions)

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
  * DomainNames **required** [DomainNameList](#domainnamelist)

#### Output
* output [DescribeElasticsearchDomainsResponse](#describeelasticsearchdomainsresponse)

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

### UpdateElasticsearchDomainConfig



```js
amazonaws_es.UpdateElasticsearchDomainConfig({
  "DomainName": ""
}, context)
```

#### Input
* input `object`
  * DomainName **required** `string`
  * AccessPolicies [PolicyDocument](#policydocument)
  * AdvancedOptions [AdvancedOptions](#advancedoptions)
  * EBSOptions [EBSOptions](#ebsoptions)
  * ElasticsearchClusterConfig [ElasticsearchClusterConfig](#elasticsearchclusterconfig)
  * LogPublishingOptions [LogPublishingOptions](#logpublishingoptions)
  * SnapshotOptions [SnapshotOptions](#snapshotoptions)
  * VPCOptions [VPCOptions](#vpcoptions)

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
  * MaxResults `string`
  * NextToken `string`
  * ElasticsearchVersion **required** `string`

#### Output
* output [ListElasticsearchInstanceTypesResponse](#listelasticsearchinstancetypesresponse)

### DeleteElasticsearchServiceRole



```js
amazonaws_es.DeleteElasticsearchServiceRole({}, context)
```

#### Input
* input `object`

#### Output
*Output schema unknown*

### ListElasticsearchVersions



```js
amazonaws_es.ListElasticsearchVersions({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`

#### Output
* output [ListElasticsearchVersionsResponse](#listelasticsearchversionsresponse)

### AddTags



```js
amazonaws_es.AddTags({
  "ARN": "",
  "TagList": []
}, context)
```

#### Input
* input `object`
  * ARN **required** [ARN](#arn)
  * TagList **required** [TagList](#taglist)

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
  * ARN **required** [ARN](#arn)
  * TagKeys **required** [StringList](#stringlist)

#### Output
*Output schema unknown*

### ListTags



```js
amazonaws_es.ListTags({}, context)
```

#### Input
* input `object`

#### Output
* output [ListTagsResponse](#listtagsresponse)



## Definitions

### ARN
* ARN `string`: The Amazon Resource Name (ARN) of the Elasticsearch domain. See <a href="http://docs.aws.amazon.com/IAM/latest/UserGuide/index.html?Using_Identifiers.html" target="_blank">Identifiers for IAM Entities</a> in <i>Using AWS Identity and Access Management</i> for more information.

### AccessPoliciesStatus
* AccessPoliciesStatus `object`: The configured access rules for the domain's document and search endpoints, and the current status of those rules.
  * Options **required** [PolicyDocument](#policydocument)
  * Status **required** [OptionStatus](#optionstatus)

### AddTagsRequest
* AddTagsRequest `object`: Container for the parameters to the <code><a>AddTags</a></code> operation. Specify the tags that you want to attach to the Elasticsearch domain.
  * ARN **required** [ARN](#arn)
  * TagList **required** [TagList](#taglist)

### AdditionalLimit
* AdditionalLimit `object`:  List of limits that are specific to a given InstanceType and for each of it's <code> <a>InstanceRole</a> </code> . 
  * LimitName [LimitName](#limitname)
  * LimitValues [LimitValueList](#limitvaluelist)

### AdditionalLimitList
* AdditionalLimitList `array`
  * items [AdditionalLimit](#additionallimit)

### AdvancedOptions
* AdvancedOptions `array`: <p> Exposes select native Elasticsearch configuration values from <code>elasticsearch.yml</code>. Currently, the following advanced options are available:</p> <ul> <li>Option to allow references to indices in an HTTP request body. Must be <code>false</code> when configuring access to individual sub-resources. By default, the value is <code>true</code>. See <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-advanced-options" target="_blank">Configuration Advanced Options</a> for more information.</li> <li>Option to specify the percentage of heap space that is allocated to field data. By default, this setting is unbounded.</li> </ul> <p>For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-advanced-options">Configuring Advanced Options</a>.</p>
  * items `object`
    * key [String](#string)
    * value [String](#string)

### AdvancedOptionsStatus
* AdvancedOptionsStatus `object`: <p> Status of the advanced options for the specified Elasticsearch domain. Currently, the following advanced options are available:</p> <ul> <li>Option to allow references to indices in an HTTP request body. Must be <code>false</code> when configuring access to individual sub-resources. By default, the value is <code>true</code>. See <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-advanced-options" target="_blank">Configuration Advanced Options</a> for more information.</li> <li>Option to specify the percentage of heap space that is allocated to field data. By default, this setting is unbounded.</li> </ul> <p>For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-advanced-options">Configuring Advanced Options</a>.</p>
  * Options **required** [AdvancedOptions](#advancedoptions)
  * Status **required** [OptionStatus](#optionstatus)

### BaseException
* BaseException `object`: An error occurred while processing the request.
  * message [ErrorMessage](#errormessage)

### Boolean
* Boolean `boolean`

### CloudWatchLogsLogGroupArn
* CloudWatchLogsLogGroupArn `string`: ARN of the Cloudwatch log group to which log needs to be published.

### CreateElasticsearchDomainRequest
* CreateElasticsearchDomainRequest `object`
  * AccessPolicies [PolicyDocument](#policydocument)
  * AdvancedOptions [AdvancedOptions](#advancedoptions)
  * DomainName **required** [DomainName](#domainname)
  * EBSOptions [EBSOptions](#ebsoptions)
  * ElasticsearchClusterConfig [ElasticsearchClusterConfig](#elasticsearchclusterconfig)
  * ElasticsearchVersion [ElasticsearchVersionString](#elasticsearchversionstring)
  * LogPublishingOptions [LogPublishingOptions](#logpublishingoptions)
  * SnapshotOptions [SnapshotOptions](#snapshotoptions)
  * VPCOptions [VPCOptions](#vpcoptions)

### CreateElasticsearchDomainResponse
* CreateElasticsearchDomainResponse `object`: The result of a <code>CreateElasticsearchDomain</code> operation. Contains the status of the newly created Elasticsearch domain.
  * DomainStatus [ElasticsearchDomainStatus](#elasticsearchdomainstatus)

### DeleteElasticsearchDomainRequest
* DeleteElasticsearchDomainRequest `object`: Container for the parameters to the <code><a>DeleteElasticsearchDomain</a></code> operation. Specifies the name of the Elasticsearch domain that you want to delete.

### DeleteElasticsearchDomainResponse
* DeleteElasticsearchDomainResponse `object`: The result of a <code>DeleteElasticsearchDomain</code> request. Contains the status of the pending deletion, or no status if the domain and all of its resources have been deleted.
  * DomainStatus [ElasticsearchDomainStatus](#elasticsearchdomainstatus)

### DescribeElasticsearchDomainConfigRequest
* DescribeElasticsearchDomainConfigRequest `object`:  Container for the parameters to the <code>DescribeElasticsearchDomainConfig</code> operation. Specifies the domain name for which you want configuration information.

### DescribeElasticsearchDomainConfigResponse
* DescribeElasticsearchDomainConfigResponse `object`: The result of a <code>DescribeElasticsearchDomainConfig</code> request. Contains the configuration information of the requested domain.
  * DomainConfig **required** [ElasticsearchDomainConfig](#elasticsearchdomainconfig)

### DescribeElasticsearchDomainRequest
* DescribeElasticsearchDomainRequest `object`: Container for the parameters to the <code><a>DescribeElasticsearchDomain</a></code> operation.

### DescribeElasticsearchDomainResponse
* DescribeElasticsearchDomainResponse `object`: The result of a <code>DescribeElasticsearchDomain</code> request. Contains the status of the domain specified in the request.
  * DomainStatus **required** [ElasticsearchDomainStatus](#elasticsearchdomainstatus)

### DescribeElasticsearchDomainsRequest
* DescribeElasticsearchDomainsRequest `object`: Container for the parameters to the <code><a>DescribeElasticsearchDomains</a></code> operation. By default, the API returns the status of all Elasticsearch domains.
  * DomainNames **required** [DomainNameList](#domainnamelist)

### DescribeElasticsearchDomainsResponse
* DescribeElasticsearchDomainsResponse `object`: The result of a <code>DescribeElasticsearchDomains</code> request. Contains the status of the specified domains or all domains owned by the account.
  * DomainStatusList **required** [ElasticsearchDomainStatusList](#elasticsearchdomainstatuslist)

### DescribeElasticsearchInstanceTypeLimitsRequest
* DescribeElasticsearchInstanceTypeLimitsRequest `object`:  Container for the parameters to <code> <a>DescribeElasticsearchInstanceTypeLimits</a> </code> operation. 

### DescribeElasticsearchInstanceTypeLimitsResponse
* DescribeElasticsearchInstanceTypeLimitsResponse `object`:  Container for the parameters received from <code> <a>DescribeElasticsearchInstanceTypeLimits</a> </code> operation. 
  * LimitsByRole [LimitsByRole](#limitsbyrole)

### DisabledOperationException
* DisabledOperationException `object`: An error occured because the client wanted to access a not supported operation. Gives http status code of 409.

### DomainId
* DomainId `string`: Unique identifier for an Elasticsearch domain.

### DomainInfo
* DomainInfo `object`
  * DomainName [DomainName](#domainname)

### DomainInfoList
* DomainInfoList `array`:  Contains the list of Elasticsearch domain information.
  * items [DomainInfo](#domaininfo)

### DomainName
* DomainName `string`: The name of an Elasticsearch domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).

### DomainNameList
* DomainNameList `array`: A list of Elasticsearch domain names.
  * items [DomainName](#domainname)

### EBSOptions
* EBSOptions `object`: Options to enable, disable, and specify the properties of EBS storage volumes. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-ebs" target="_blank"> Configuring EBS-based Storage</a>.
  * EBSEnabled [Boolean](#boolean)
  * Iops [IntegerClass](#integerclass)
  * VolumeSize [IntegerClass](#integerclass)
  * VolumeType [VolumeType](#volumetype)

### EBSOptionsStatus
* EBSOptionsStatus `object`:  Status of the EBS options for the specified Elasticsearch domain.
  * Options **required** [EBSOptions](#ebsoptions)
  * Status **required** [OptionStatus](#optionstatus)

### ESPartitionInstanceType
* ESPartitionInstanceType `string` (values: m3.medium.elasticsearch, m3.large.elasticsearch, m3.xlarge.elasticsearch, m3.2xlarge.elasticsearch, m4.large.elasticsearch, m4.xlarge.elasticsearch, m4.2xlarge.elasticsearch, m4.4xlarge.elasticsearch, m4.10xlarge.elasticsearch, t2.micro.elasticsearch, t2.small.elasticsearch, t2.medium.elasticsearch, r3.large.elasticsearch, r3.xlarge.elasticsearch, r3.2xlarge.elasticsearch, r3.4xlarge.elasticsearch, r3.8xlarge.elasticsearch, i2.xlarge.elasticsearch, i2.2xlarge.elasticsearch, d2.xlarge.elasticsearch, d2.2xlarge.elasticsearch, d2.4xlarge.elasticsearch, d2.8xlarge.elasticsearch, c4.large.elasticsearch, c4.xlarge.elasticsearch, c4.2xlarge.elasticsearch, c4.4xlarge.elasticsearch, c4.8xlarge.elasticsearch, r4.large.elasticsearch, r4.xlarge.elasticsearch, r4.2xlarge.elasticsearch, r4.4xlarge.elasticsearch, r4.8xlarge.elasticsearch, r4.16xlarge.elasticsearch, i3.large.elasticsearch, i3.xlarge.elasticsearch, i3.2xlarge.elasticsearch, i3.4xlarge.elasticsearch, i3.8xlarge.elasticsearch, i3.16xlarge.elasticsearch)

### ElasticsearchClusterConfig
* ElasticsearchClusterConfig `object`: Specifies the configuration for the domain cluster, such as the type and number of instances.
  * DedicatedMasterCount [IntegerClass](#integerclass)
  * DedicatedMasterEnabled [Boolean](#boolean)
  * DedicatedMasterType [ESPartitionInstanceType](#espartitioninstancetype)
  * InstanceCount [IntegerClass](#integerclass)
  * InstanceType [ESPartitionInstanceType](#espartitioninstancetype)
  * ZoneAwarenessEnabled [Boolean](#boolean)

### ElasticsearchClusterConfigStatus
* ElasticsearchClusterConfigStatus `object`:  Specifies the configuration status for the specified Elasticsearch domain.
  * Options **required** [ElasticsearchClusterConfig](#elasticsearchclusterconfig)
  * Status **required** [OptionStatus](#optionstatus)

### ElasticsearchDomainConfig
* ElasticsearchDomainConfig `object`: The configuration of an Elasticsearch domain.
  * AccessPolicies [AccessPoliciesStatus](#accesspoliciesstatus)
  * AdvancedOptions [AdvancedOptionsStatus](#advancedoptionsstatus)
  * EBSOptions [EBSOptionsStatus](#ebsoptionsstatus)
  * ElasticsearchClusterConfig [ElasticsearchClusterConfigStatus](#elasticsearchclusterconfigstatus)
  * ElasticsearchVersion [ElasticsearchVersionStatus](#elasticsearchversionstatus)
  * LogPublishingOptions [LogPublishingOptionsStatus](#logpublishingoptionsstatus)
  * SnapshotOptions [SnapshotOptionsStatus](#snapshotoptionsstatus)
  * VPCOptions [VPCDerivedInfoStatus](#vpcderivedinfostatus)

### ElasticsearchDomainStatus
* ElasticsearchDomainStatus `object`: The current status of an Elasticsearch domain.
  * ARN **required** [ARN](#arn)
  * AccessPolicies [PolicyDocument](#policydocument)
  * AdvancedOptions [AdvancedOptions](#advancedoptions)
  * Created [Boolean](#boolean)
  * Deleted [Boolean](#boolean)
  * DomainId **required** [DomainId](#domainid)
  * DomainName **required** [DomainName](#domainname)
  * EBSOptions [EBSOptions](#ebsoptions)
  * ElasticsearchClusterConfig **required** [ElasticsearchClusterConfig](#elasticsearchclusterconfig)
  * ElasticsearchVersion [ElasticsearchVersionString](#elasticsearchversionstring)
  * Endpoint [ServiceUrl](#serviceurl)
  * Endpoints [EndpointsMap](#endpointsmap)
  * LogPublishingOptions [LogPublishingOptions](#logpublishingoptions)
  * Processing [Boolean](#boolean)
  * SnapshotOptions [SnapshotOptions](#snapshotoptions)
  * VPCOptions [VPCDerivedInfo](#vpcderivedinfo)

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
  * Options **required** [ElasticsearchVersionString](#elasticsearchversionstring)
  * Status **required** [OptionStatus](#optionstatus)

### ElasticsearchVersionString
* ElasticsearchVersionString `string`

### EndpointsMap
* EndpointsMap `array`
  * items `object`
    * key [String](#string)
    * value [ServiceUrl](#serviceurl)

### ErrorMessage
* ErrorMessage `string`

### InstanceCountLimits
* InstanceCountLimits `object`:  InstanceCountLimits represents the limits on number of instances that be created in Amazon Elasticsearch for given InstanceType. 
  * MaximumInstanceCount [MaximumInstanceCount](#maximuminstancecount)
  * MinimumInstanceCount [MinimumInstanceCount](#minimuminstancecount)

### InstanceLimits
* InstanceLimits `object`: InstanceLimits represents the list of instance related attributes that are available for given InstanceType. 
  * InstanceCountLimits [InstanceCountLimits](#instancecountlimits)

### InstanceRole
* InstanceRole `string`

### IntegerClass
* IntegerClass `integer`

### InternalException
* InternalException `object`: The request processing has failed because of an unknown error, exception or failure (the failure is internal to the service) . Gives http status code of 500.

### InvalidTypeException
* InvalidTypeException `object`: An exception for trying to create or access sub-resource that is either invalid or not supported. Gives http status code of 409.

### LimitExceededException
* LimitExceededException `object`: An exception for trying to create more than allowed resources or sub-resources. Gives http status code of 409.

### LimitName
* LimitName `string`

### LimitValue
* LimitValue `string`

### LimitValueList
* LimitValueList `array`
  * items [LimitValue](#limitvalue)

### Limits
* Limits `object`:  Limits for given InstanceType and for each of it's role. <br/> Limits contains following <code> <a>StorageTypes,</a> </code> <code> <a>InstanceLimits</a> </code> and <code> <a>AdditionalLimits</a> </code> 
  * AdditionalLimits [AdditionalLimitList](#additionallimitlist)
  * InstanceLimits [InstanceLimits](#instancelimits)
  * StorageTypes [StorageTypeList](#storagetypelist)

### LimitsByRole
* LimitsByRole `array`:  Map of Role of the Instance and Limits that are applicable. Role performed by given Instance in Elasticsearch can be one of the following: <ul> <li>Data: If the given InstanceType is used as Data node</li> <li>Master: If the given InstanceType is used as Master node</li> </ul> 
  * items `object`
    * key [InstanceRole](#instancerole)
    * value [Limits](#limits)

### ListDomainNamesResponse
* ListDomainNamesResponse `object`: The result of a <code>ListDomainNames</code> operation. Contains the names of all Elasticsearch domains owned by this account.
  * DomainNames [DomainInfoList](#domaininfolist)

### ListElasticsearchInstanceTypesRequest
* ListElasticsearchInstanceTypesRequest `object`:  Container for the parameters to the <code> <a>ListElasticsearchInstanceTypes</a> </code> operation. 

### ListElasticsearchInstanceTypesResponse
* ListElasticsearchInstanceTypesResponse `object`:  Container for the parameters returned by <code> <a>ListElasticsearchInstanceTypes</a> </code> operation. 
  * ElasticsearchInstanceTypes [ElasticsearchInstanceTypeList](#elasticsearchinstancetypelist)
  * NextToken [NextToken](#nexttoken)

### ListElasticsearchVersionsRequest
* ListElasticsearchVersionsRequest `object`: <p> Container for the parameters to the <code> <a>ListElasticsearchVersions</a> </code> operation. <p> Use <code> <a>MaxResults</a> </code> to control the maximum number of results to retrieve in a single call. </p> <p> Use <code> <a>NextToken</a> </code> in response to retrieve more results. If the received response does not contain a NextToken, then there are no more results to retrieve. </p> </p>

### ListElasticsearchVersionsResponse
* ListElasticsearchVersionsResponse `object`:  Container for the parameters for response received from <code> <a>ListElasticsearchVersions</a> </code> operation. 
  * ElasticsearchVersions [ElasticsearchVersionList](#elasticsearchversionlist)
  * NextToken [NextToken](#nexttoken)

### ListTagsRequest
* ListTagsRequest `object`: Container for the parameters to the <code><a>ListTags</a></code> operation. Specify the <code>ARN</code> for the Elasticsearch domain to which the tags are attached that you want to view are attached.

### ListTagsResponse
* ListTagsResponse `object`: The result of a <code>ListTags</code> operation. Contains tags for all requested Elasticsearch domains.
  * TagList [TagList](#taglist)

### LogPublishingOption
* LogPublishingOption `object`: Log Publishing option that is set for given domain. <br/>Attributes and their details: <ul> <li>CloudWatchLogsLogGroupArn: ARN of the Cloudwatch log group to which log needs to be published.</li> <li>Enabled: Whether the log publishing for given log type is enabled or not</li> </ul> 
  * CloudWatchLogsLogGroupArn [CloudWatchLogsLogGroupArn](#cloudwatchlogsloggrouparn)
  * Enabled [Boolean](#boolean)

### LogPublishingOptions
* LogPublishingOptions `array`
  * items `object`
    * key [LogType](#logtype)
    * value [LogPublishingOption](#logpublishingoption)

### LogPublishingOptionsStatus
* LogPublishingOptionsStatus `object`: The configured log publishing options for the domain and their current status.
  * Options [LogPublishingOptions](#logpublishingoptions)
  * Status [OptionStatus](#optionstatus)

### LogType
* LogType `string` (values: INDEX_SLOW_LOGS, SEARCH_SLOW_LOGS): Type of Log File, it can be one of the following: <ul> <li>INDEX_SLOW_LOGS: Index slow logs contains insert requests that took more time than configured index query log threshold to execute.</li> <li>SEARCH_SLOW_LOGS: Search slow logs contains search queries that took more time than configured search query log threshold to execute.</li> </ul> 

### MaxResults
* MaxResults `integer`:  Set this value to limit the number of results returned. 

### MaximumInstanceCount
* MaximumInstanceCount `integer`:  Maximum number of Instances that can be instantiated for given InstanceType. 

### MinimumInstanceCount
* MinimumInstanceCount `integer`:  Minimum number of Instances that can be instantiated for given InstanceType. 

### NextToken
* NextToken `string`:  Paginated APIs accepts NextToken input to returns next page results and provides a NextToken output in the response which can be used by the client to retrieve more results. 

### OptionState
* OptionState `string` (values: RequiresIndexDocuments, Processing, Active): <p>The state of a requested change. One of the following:</p> <ul> <li>Processing: The request change is still in-process.</li> <li>Active: The request change is processed and deployed to the Elasticsearch domain.</li> </ul>

### OptionStatus
* OptionStatus `object`: Provides the current status of the entity.
  * CreationDate **required** [UpdateTimestamp](#updatetimestamp)
  * PendingDeletion [Boolean](#boolean)
  * State **required** [OptionState](#optionstate)
  * UpdateDate **required** [UpdateTimestamp](#updatetimestamp)
  * UpdateVersion [UIntValue](#uintvalue)

### PolicyDocument
* PolicyDocument `string`: Access policy rules for an Elasticsearch domain service endpoints. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-access-policies" target="_blank">Configuring Access Policies</a> in the <i>Amazon Elasticsearch Service Developer Guide</i>. The maximum size of a policy document is 100 KB.

### RemoveTagsRequest
* RemoveTagsRequest `object`: Container for the parameters to the <code><a>RemoveTags</a></code> operation. Specify the <code>ARN</code> for the Elasticsearch domain from which you want to remove the specified <code>TagKey</code>.
  * ARN **required** [ARN](#arn)
  * TagKeys **required** [StringList](#stringlist)

### ResourceAlreadyExistsException
* ResourceAlreadyExistsException `object`: An exception for creating a resource that already exists. Gives http status code of 400.

### ResourceNotFoundException
* ResourceNotFoundException `object`: An exception for accessing or deleting a resource that does not exist. Gives http status code of 400.

### ServiceUrl
* ServiceUrl `string`: The endpoint to which service requests are submitted. For example, <code>search-imdb-movies-oopcnjfn6ugofer3zx5iadxxca.eu-west-1.es.amazonaws.com</code> or <code>doc-imdb-movies-oopcnjfn6ugofer3zx5iadxxca.eu-west-1.es.amazonaws.com</code>.

### SnapshotOptions
* SnapshotOptions `object`: Specifies the time, in UTC format, when the service takes a daily automated snapshot of the specified Elasticsearch domain. Default value is <code>0</code> hours.
  * AutomatedSnapshotStartHour [IntegerClass](#integerclass)

### SnapshotOptionsStatus
* SnapshotOptionsStatus `object`: Status of a daily automated snapshot.
  * Options **required** [SnapshotOptions](#snapshotoptions)
  * Status **required** [OptionStatus](#optionstatus)

### StorageSubTypeName
* StorageSubTypeName `string`:  SubType of the given storage type. List of available sub-storage options: For "instance" storageType we wont have any storageSubType, in case of "ebs" storageType we will have following valid storageSubTypes <ol> <li>standard</li> <li>gp2</li> <li>io1</li> </ol> Refer <code><a>VolumeType</a></code> for more information regarding above EBS storage options. 

### StorageType
* StorageType `object`: StorageTypes represents the list of storage related types and their attributes that are available for given InstanceType. 
  * StorageSubTypeName [StorageSubTypeName](#storagesubtypename)
  * StorageTypeLimits [StorageTypeLimitList](#storagetypelimitlist)
  * StorageTypeName [StorageTypeName](#storagetypename)

### StorageTypeLimit
* StorageTypeLimit `object`: Limits that are applicable for given storage type. 
  * LimitName [LimitName](#limitname)
  * LimitValues [LimitValueList](#limitvaluelist)

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

### Tag
* Tag `object`: Specifies a key value pair for a resource tag.
  * Key **required** [TagKey](#tagkey)
  * Value **required** [TagValue](#tagvalue)

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
  * AccessPolicies [PolicyDocument](#policydocument)
  * AdvancedOptions [AdvancedOptions](#advancedoptions)
  * EBSOptions [EBSOptions](#ebsoptions)
  * ElasticsearchClusterConfig [ElasticsearchClusterConfig](#elasticsearchclusterconfig)
  * LogPublishingOptions [LogPublishingOptions](#logpublishingoptions)
  * SnapshotOptions [SnapshotOptions](#snapshotoptions)
  * VPCOptions [VPCOptions](#vpcoptions)

### UpdateElasticsearchDomainConfigResponse
* UpdateElasticsearchDomainConfigResponse `object`: The result of an <code>UpdateElasticsearchDomain</code> request. Contains the status of the Elasticsearch domain being updated.
  * DomainConfig **required** [ElasticsearchDomainConfig](#elasticsearchdomainconfig)

### UpdateTimestamp
* UpdateTimestamp `string`

### VPCDerivedInfo
* VPCDerivedInfo `object`: Options to specify the subnets and security groups for VPC endpoint. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-vpc.html" target="_blank"> VPC Endpoints for Amazon Elasticsearch Service Domains</a>.
  * AvailabilityZones [StringList](#stringlist)
  * SecurityGroupIds [StringList](#stringlist)
  * SubnetIds [StringList](#stringlist)
  * VPCId [String](#string)

### VPCDerivedInfoStatus
* VPCDerivedInfoStatus `object`:  Status of the VPC options for the specified Elasticsearch domain.
  * Options **required** [VPCDerivedInfo](#vpcderivedinfo)
  * Status **required** [OptionStatus](#optionstatus)

### VPCOptions
* VPCOptions `object`: Options to specify the subnets and security groups for VPC endpoint. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-vpc.html" target="_blank"> VPC Endpoints for Amazon Elasticsearch Service Domains</a>.
  * SecurityGroupIds [StringList](#stringlist)
  * SubnetIds [StringList](#stringlist)

### ValidationException
* ValidationException `object`: An exception for missing / invalid input fields. Gives http status code of 400.

### VolumeType
* VolumeType `string` (values: standard, gp2, io1):  The type of EBS volume, standard, gp2, or io1. See <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-ebs" target="_blank">Configuring EBS-based Storage</a>for more information.


