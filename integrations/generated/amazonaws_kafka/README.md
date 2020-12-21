# @datafire/amazonaws_kafka

Client library for Managed Streaming for Kafka

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_kafka
```
```js
let amazonaws_kafka = require('@datafire/amazonaws_kafka').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

.then(data => {
  console.log(data);
});
```

## Description


               <p>The operations for managing an Amazon MSK cluster.</p>
            

## Actions

### ListClusters



```js
amazonaws_kafka.ListClusters({}, context)
```

#### Input
* input `object`
  * clusterNameFilter `string`
  * maxResults `integer`
  * nextToken `string`
  * MaxResults `string`
  * NextToken `string`

#### Output
* output [ListClustersResponse](#listclustersresponse)

### CreateCluster



```js
amazonaws_kafka.CreateCluster({
  "brokerNodeGroupInfo": {},
  "clusterName": "",
  "kafkaVersion": "",
  "numberOfBrokerNodes": 0
}, context)
```

#### Input
* input `object`
  * tags `object`: 
  * brokerNodeGroupInfo **required** `object`: 
    * BrokerAZDistribution
    * ClientSubnets
      * items [__string](#__string)
    * InstanceType
    * SecurityGroups
      * items [__string](#__string)
    * StorageInfo
      * EbsStorageInfo
        * VolumeSize
  * clientAuthentication `object`: 
    * Sasl
      * Scram
        * Enabled
    * Tls
      * CertificateAuthorityArnList
        * items [__string](#__string)
  * clusterName **required** `string`: 
  * configurationInfo `object`: 
    * Arn
    * Revision
  * encryptionInfo `object`: 
    * EncryptionAtRest
      * DataVolumeKMSKeyId **required**
    * EncryptionInTransit
      * ClientBroker
      * InCluster
  * enhancedMonitoring `string` (values: DEFAULT, PER_BROKER, PER_TOPIC_PER_BROKER, PER_TOPIC_PER_PARTITION): 
  * kafkaVersion **required** `string`: 
  * loggingInfo `object`
    * BrokerLogs
      * CloudWatchLogs
        * Enabled **required**
        * LogGroup
      * Firehose
        * DeliveryStream
        * Enabled **required**
      * S3
        * Bucket
        * Enabled **required**
        * Prefix
  * numberOfBrokerNodes **required** `integer`: 
  * openMonitoring `object`: 
    * Prometheus
      * JmxExporter
        * EnabledInBroker **required**
      * NodeExporter
        * EnabledInBroker **required**

#### Output
* output [CreateClusterResponse](#createclusterresponse)

### DeleteCluster



```js
amazonaws_kafka.DeleteCluster({
  "clusterArn": ""
}, context)
```

#### Input
* input `object`
  * clusterArn **required** `string`
  * currentVersion `string`

#### Output
* output [DeleteClusterResponse](#deleteclusterresponse)

### DescribeCluster



```js
amazonaws_kafka.DescribeCluster({
  "clusterArn": ""
}, context)
```

#### Input
* input `object`
  * clusterArn **required** `string`

#### Output
* output [DescribeClusterResponse](#describeclusterresponse)

### GetBootstrapBrokers



```js
amazonaws_kafka.GetBootstrapBrokers({
  "clusterArn": ""
}, context)
```

#### Input
* input `object`
  * clusterArn **required** `string`

#### Output
* output [GetBootstrapBrokersResponse](#getbootstrapbrokersresponse)

### UpdateClusterConfiguration



```js
amazonaws_kafka.UpdateClusterConfiguration({
  "clusterArn": "",
  "configurationInfo": {},
  "currentVersion": ""
}, context)
```

#### Input
* input `object`
  * clusterArn **required** `string`
  * configurationInfo **required** `object`: 
    * Arn
    * Revision
  * currentVersion **required** `string`: 

#### Output
* output [UpdateClusterConfigurationResponse](#updateclusterconfigurationresponse)

### UpdateMonitoring



```js
amazonaws_kafka.UpdateMonitoring({
  "clusterArn": "",
  "currentVersion": ""
}, context)
```

#### Input
* input `object`
  * clusterArn **required** `string`
  * currentVersion **required** `string`: 
  * enhancedMonitoring `string` (values: DEFAULT, PER_BROKER, PER_TOPIC_PER_BROKER, PER_TOPIC_PER_PARTITION): 
  * loggingInfo `object`
    * BrokerLogs
      * CloudWatchLogs
        * Enabled **required**
        * LogGroup
      * Firehose
        * DeliveryStream
        * Enabled **required**
      * S3
        * Bucket
        * Enabled **required**
        * Prefix
  * openMonitoring `object`: 
    * Prometheus
      * JmxExporter
        * EnabledInBroker **required**
      * NodeExporter
        * EnabledInBroker **required**

#### Output
* output [UpdateMonitoringResponse](#updatemonitoringresponse)

### ListNodes



```js
amazonaws_kafka.ListNodes({
  "clusterArn": ""
}, context)
```

#### Input
* input `object`
  * clusterArn **required** `string`
  * maxResults `integer`
  * nextToken `string`
  * MaxResults `string`
  * NextToken `string`

#### Output
* output [ListNodesResponse](#listnodesresponse)

### UpdateBrokerCount



```js
amazonaws_kafka.UpdateBrokerCount({
  "clusterArn": "",
  "currentVersion": "",
  "targetNumberOfBrokerNodes": 0
}, context)
```

#### Input
* input `object`
  * clusterArn **required** `string`
  * currentVersion **required** `string`: 
  * targetNumberOfBrokerNodes **required** `integer`: 

#### Output
* output [UpdateBrokerCountResponse](#updatebrokercountresponse)

### UpdateBrokerStorage



```js
amazonaws_kafka.UpdateBrokerStorage({
  "clusterArn": "",
  "currentVersion": "",
  "targetBrokerEBSVolumeInfo": []
}, context)
```

#### Input
* input `object`
  * clusterArn **required** `string`
  * currentVersion **required** `string`: 
  * targetBrokerEBSVolumeInfo **required** `array`: 
    * items [BrokerEBSVolumeInfo](#brokerebsvolumeinfo)

#### Output
* output [UpdateBrokerStorageResponse](#updatebrokerstorageresponse)

### ListClusterOperations



```js
amazonaws_kafka.ListClusterOperations({
  "clusterArn": ""
}, context)
```

#### Input
* input `object`
  * clusterArn **required** `string`
  * maxResults `integer`
  * nextToken `string`
  * MaxResults `string`
  * NextToken `string`

#### Output
* output [ListClusterOperationsResponse](#listclusteroperationsresponse)

### RebootBroker



```js
amazonaws_kafka.RebootBroker({
  "clusterArn": "",
  "brokerIds": []
}, context)
```

#### Input
* input `object`
  * clusterArn **required** `string`
  * brokerIds **required** `array`: 
    * items [__string](#__string)

#### Output
* output [RebootBrokerResponse](#rebootbrokerresponse)

### ListScramSecrets



```js
amazonaws_kafka.ListScramSecrets({
  "clusterArn": ""
}, context)
```

#### Input
* input `object`
  * clusterArn **required** `string`
  * maxResults `integer`
  * nextToken `string`
  * MaxResults `string`
  * NextToken `string`

#### Output
* output [ListScramSecretsResponse](#listscramsecretsresponse)

### BatchDisassociateScramSecret



```js
amazonaws_kafka.BatchDisassociateScramSecret({
  "clusterArn": "",
  "secretArnList": []
}, context)
```

#### Input
* input `object`
  * clusterArn **required** `string`
  * secretArnList **required** `array`: 
    * items [__string](#__string)

#### Output
* output [BatchDisassociateScramSecretResponse](#batchdisassociatescramsecretresponse)

### BatchAssociateScramSecret



```js
amazonaws_kafka.BatchAssociateScramSecret({
  "clusterArn": "",
  "secretArnList": []
}, context)
```

#### Input
* input `object`
  * clusterArn **required** `string`
  * secretArnList **required** `array`: 
    * items [__string](#__string)

#### Output
* output [BatchAssociateScramSecretResponse](#batchassociatescramsecretresponse)

### UpdateClusterKafkaVersion



```js
amazonaws_kafka.UpdateClusterKafkaVersion({
  "clusterArn": "",
  "currentVersion": "",
  "targetKafkaVersion": ""
}, context)
```

#### Input
* input `object`
  * clusterArn **required** `string`
  * configurationInfo `object`: 
    * Arn
    * Revision
  * currentVersion **required** `string`: 
  * targetKafkaVersion **required** `string`: 

#### Output
* output [UpdateClusterKafkaVersionResponse](#updateclusterkafkaversionresponse)

### GetCompatibleKafkaVersions



```js
amazonaws_kafka.GetCompatibleKafkaVersions({}, context)
```

#### Input
* input `object`
  * clusterArn `string`

#### Output
* output [GetCompatibleKafkaVersionsResponse](#getcompatiblekafkaversionsresponse)

### ListConfigurations



```js
amazonaws_kafka.ListConfigurations({}, context)
```

#### Input
* input `object`
  * maxResults `integer`
  * nextToken `string`
  * MaxResults `string`
  * NextToken `string`

#### Output
* output [ListConfigurationsResponse](#listconfigurationsresponse)

### CreateConfiguration



```js
amazonaws_kafka.CreateConfiguration({
  "name": "",
  "serverProperties": ""
}, context)
```

#### Input
* input `object`
  * description `string`: 
  * kafkaVersions `array`: 
    * items [__string](#__string)
  * name **required** `string`: 
  * serverProperties **required** `string`: 

#### Output
* output [CreateConfigurationResponse](#createconfigurationresponse)

### DeleteConfiguration



```js
amazonaws_kafka.DeleteConfiguration({
  "arn": ""
}, context)
```

#### Input
* input `object`
  * arn **required** `string`

#### Output
* output [DeleteConfigurationResponse](#deleteconfigurationresponse)

### DescribeConfiguration



```js
amazonaws_kafka.DescribeConfiguration({
  "arn": ""
}, context)
```

#### Input
* input `object`
  * arn **required** `string`

#### Output
* output [DescribeConfigurationResponse](#describeconfigurationresponse)

### UpdateConfiguration



```js
amazonaws_kafka.UpdateConfiguration({
  "arn": "",
  "serverProperties": ""
}, context)
```

#### Input
* input `object`
  * arn **required** `string`
  * description `string`: 
  * serverProperties **required** `string`: 

#### Output
* output [UpdateConfigurationResponse](#updateconfigurationresponse)

### ListConfigurationRevisions



```js
amazonaws_kafka.ListConfigurationRevisions({
  "arn": ""
}, context)
```

#### Input
* input `object`
  * arn **required** `string`
  * maxResults `integer`
  * nextToken `string`
  * MaxResults `string`
  * NextToken `string`

#### Output
* output [ListConfigurationRevisionsResponse](#listconfigurationrevisionsresponse)

### DescribeConfigurationRevision



```js
amazonaws_kafka.DescribeConfigurationRevision({
  "arn": "",
  "revision": 0
}, context)
```

#### Input
* input `object`
  * arn **required** `string`
  * revision **required** `integer`

#### Output
* output [DescribeConfigurationRevisionResponse](#describeconfigurationrevisionresponse)

### ListKafkaVersions



```js
amazonaws_kafka.ListKafkaVersions({}, context)
```

#### Input
* input `object`
  * maxResults `integer`
  * nextToken `string`
  * MaxResults `string`
  * NextToken `string`

#### Output
* output [ListKafkaVersionsResponse](#listkafkaversionsresponse)

### DescribeClusterOperation



```js
amazonaws_kafka.DescribeClusterOperation({
  "clusterOperationArn": ""
}, context)
```

#### Input
* input `object`
  * clusterOperationArn **required** `string`

#### Output
* output [DescribeClusterOperationResponse](#describeclusteroperationresponse)

### ListTagsForResource



```js
amazonaws_kafka.ListTagsForResource({
  "resourceArn": ""
}, context)
```

#### Input
* input `object`
  * resourceArn **required** `string`

#### Output
* output [ListTagsForResourceResponse](#listtagsforresourceresponse)

### TagResource



```js
amazonaws_kafka.TagResource({
  "resourceArn": "",
  "tags": {}
}, context)
```

#### Input
* input `object`
  * resourceArn **required** `string`
  * tags **required** `object`: 

#### Output
*Output schema unknown*

### UntagResource



```js
amazonaws_kafka.UntagResource({
  "resourceArn": "",
  "tagKeys": []
}, context)
```

#### Input
* input `object`
  * resourceArn **required** `string`
  * tagKeys **required** `array`

#### Output
*Output schema unknown*



## Definitions

### BadRequestException


### BatchAssociateScramSecretRequest
* BatchAssociateScramSecretRequest `object`: 
  * SecretArnList **required**
    * items [__string](#__string)

### BatchAssociateScramSecretResponse
* BatchAssociateScramSecretResponse `object`
  * ClusterArn
  * UnprocessedScramSecrets
    * items [UnprocessedScramSecret](#unprocessedscramsecret)

### BatchDisassociateScramSecretRequest
* BatchDisassociateScramSecretRequest `object`: 
  * SecretArnList **required**
    * items [__string](#__string)

### BatchDisassociateScramSecretResponse
* BatchDisassociateScramSecretResponse `object`
  * ClusterArn
  * UnprocessedScramSecrets
    * items [UnprocessedScramSecret](#unprocessedscramsecret)

### BrokerAZDistribution
* BrokerAZDistribution `string` (values: DEFAULT): 

### BrokerEBSVolumeInfo
* BrokerEBSVolumeInfo `object`: 
  * KafkaBrokerNodeId **required**
  * VolumeSizeGB **required**

### BrokerLogs
* BrokerLogs `object`
  * CloudWatchLogs
    * Enabled **required**
    * LogGroup
  * Firehose
    * DeliveryStream
    * Enabled **required**
  * S3
    * Bucket
    * Enabled **required**
    * Prefix

### BrokerNodeGroupInfo
* BrokerNodeGroupInfo `object`: 
  * BrokerAZDistribution
  * ClientSubnets **required**
    * items [__string](#__string)
  * InstanceType **required**
  * SecurityGroups
    * items [__string](#__string)
  * StorageInfo
    * EbsStorageInfo
      * VolumeSize

### BrokerNodeInfo
* BrokerNodeInfo `object`: 
  * AttachedENIId
  * BrokerId
  * ClientSubnet
  * ClientVpcIpAddress
  * CurrentBrokerSoftwareInfo
    * ConfigurationArn
    * ConfigurationRevision
    * KafkaVersion
  * Endpoints
    * items [__string](#__string)

### BrokerSoftwareInfo
* BrokerSoftwareInfo `object`: 
  * ConfigurationArn
  * ConfigurationRevision
  * KafkaVersion

### ClientAuthentication
* ClientAuthentication `object`: 
  * Sasl
    * Scram
      * Enabled
  * Tls
    * CertificateAuthorityArnList
      * items [__string](#__string)

### ClientBroker
* ClientBroker `string` (values: TLS, TLS_PLAINTEXT, PLAINTEXT): 

### CloudWatchLogs
* CloudWatchLogs `object`
  * Enabled **required**
  * LogGroup

### ClusterInfo
* ClusterInfo `object`: 
  * ActiveOperationArn
  * BrokerNodeGroupInfo
    * BrokerAZDistribution
    * ClientSubnets **required**
      * items [__string](#__string)
    * InstanceType **required**
    * SecurityGroups
      * items [__string](#__string)
    * StorageInfo
      * EbsStorageInfo
        * VolumeSize
  * ClientAuthentication
    * Sasl
      * Scram
        * Enabled
    * Tls
      * CertificateAuthorityArnList
        * items [__string](#__string)
  * ClusterArn
  * ClusterName
  * CreationTime
  * CurrentBrokerSoftwareInfo
    * ConfigurationArn
    * ConfigurationRevision
    * KafkaVersion
  * CurrentVersion
  * EncryptionInfo
    * EncryptionAtRest
      * DataVolumeKMSKeyId **required**
    * EncryptionInTransit
      * ClientBroker
      * InCluster
  * EnhancedMonitoring
  * LoggingInfo
    * BrokerLogs **required**
      * CloudWatchLogs
        * Enabled **required**
        * LogGroup
      * Firehose
        * DeliveryStream
        * Enabled **required**
      * S3
        * Bucket
        * Enabled **required**
        * Prefix
  * NumberOfBrokerNodes
  * OpenMonitoring
    * Prometheus **required**
      * JmxExporter
        * EnabledInBroker **required**
      * NodeExporter
        * EnabledInBroker **required**
  * State
  * StateInfo
    * Code
    * Message
  * Tags
  * ZookeeperConnectString
  * ZookeeperConnectStringTls

### ClusterOperationInfo
* ClusterOperationInfo `object`: 
  * ClientRequestId
  * ClusterArn
  * CreationTime
  * EndTime
  * ErrorInfo
    * ErrorCode
    * ErrorString
  * OperationArn
  * OperationState
  * OperationSteps
    * items [ClusterOperationStep](#clusteroperationstep)
  * OperationType
  * SourceClusterInfo
    * BrokerEBSVolumeInfo
      * items [BrokerEBSVolumeInfo](#brokerebsvolumeinfo)
    * ConfigurationInfo
      * Arn **required**
      * Revision **required**
    * EnhancedMonitoring
    * KafkaVersion
    * LoggingInfo
      * BrokerLogs **required**
        * CloudWatchLogs
          * Enabled **required**
          * LogGroup
        * Firehose
          * DeliveryStream
          * Enabled **required**
        * S3
          * Bucket
          * Enabled **required**
          * Prefix
    * NumberOfBrokerNodes
    * OpenMonitoring
      * Prometheus **required**
        * JmxExporter
          * EnabledInBroker **required**
        * NodeExporter
          * EnabledInBroker **required**
  * TargetClusterInfo
    * BrokerEBSVolumeInfo
      * items [BrokerEBSVolumeInfo](#brokerebsvolumeinfo)
    * ConfigurationInfo
      * Arn **required**
      * Revision **required**
    * EnhancedMonitoring
    * KafkaVersion
    * LoggingInfo
      * BrokerLogs **required**
        * CloudWatchLogs
          * Enabled **required**
          * LogGroup
        * Firehose
          * DeliveryStream
          * Enabled **required**
        * S3
          * Bucket
          * Enabled **required**
          * Prefix
    * NumberOfBrokerNodes
    * OpenMonitoring
      * Prometheus **required**
        * JmxExporter
          * EnabledInBroker **required**
        * NodeExporter
          * EnabledInBroker **required**

### ClusterOperationStep
* ClusterOperationStep `object`: 
  * StepInfo
    * StepStatus
  * StepName

### ClusterOperationStepInfo
* ClusterOperationStepInfo `object`: 
  * StepStatus

### ClusterState
* ClusterState `string` (values: ACTIVE, CREATING, DELETING, FAILED, HEALING, MAINTENANCE, REBOOTING_BROKER, UPDATING): 

### CompatibleKafkaVersion
* CompatibleKafkaVersion `object`: 
  * SourceVersion
  * TargetVersions
    * items [__string](#__string)

### Configuration
* Configuration `object`: 
  * Arn **required**
  * CreationTime **required**
  * Description **required**
  * KafkaVersions **required**
    * items [__string](#__string)
  * LatestRevision **required**
    * CreationTime **required**
    * Description
    * Revision **required**
  * Name **required**
  * State **required**

### ConfigurationInfo
* ConfigurationInfo `object`: 
  * Arn **required**
  * Revision **required**

### ConfigurationRevision
* ConfigurationRevision `object`: 
  * CreationTime **required**
  * Description
  * Revision **required**

### ConfigurationState
* ConfigurationState `string` (values: ACTIVE, DELETING, DELETE_FAILED): 

### ConflictException


### CreateClusterRequest
* CreateClusterRequest `object`
  * BrokerNodeGroupInfo **required**
    * BrokerAZDistribution
    * ClientSubnets **required**
      * items [__string](#__string)
    * InstanceType **required**
    * SecurityGroups
      * items [__string](#__string)
    * StorageInfo
      * EbsStorageInfo
        * VolumeSize
  * ClientAuthentication
    * Sasl
      * Scram
        * Enabled
    * Tls
      * CertificateAuthorityArnList
        * items [__string](#__string)
  * ClusterName **required**
  * ConfigurationInfo
    * Arn **required**
    * Revision **required**
  * EncryptionInfo
    * EncryptionAtRest
      * DataVolumeKMSKeyId **required**
    * EncryptionInTransit
      * ClientBroker
      * InCluster
  * EnhancedMonitoring
  * KafkaVersion **required**
  * LoggingInfo
    * BrokerLogs **required**
      * CloudWatchLogs
        * Enabled **required**
        * LogGroup
      * Firehose
        * DeliveryStream
        * Enabled **required**
      * S3
        * Bucket
        * Enabled **required**
        * Prefix
  * NumberOfBrokerNodes **required**
  * OpenMonitoring
    * Prometheus **required**
      * JmxExporter
        * EnabledInBroker **required**
      * NodeExporter
        * EnabledInBroker **required**
  * Tags

### CreateClusterResponse
* CreateClusterResponse `object`
  * ClusterArn
  * ClusterName
  * State

### CreateConfigurationRequest
* CreateConfigurationRequest `object`
  * Description
  * KafkaVersions
    * items [__string](#__string)
  * Name **required**
  * ServerProperties **required**

### CreateConfigurationResponse
* CreateConfigurationResponse `object`
  * Arn
  * CreationTime
  * LatestRevision
    * CreationTime **required**
    * Description
    * Revision **required**
  * Name
  * State

### DeleteClusterRequest
* DeleteClusterRequest `object`

### DeleteClusterResponse
* DeleteClusterResponse `object`
  * ClusterArn
  * State

### DeleteConfigurationRequest
* DeleteConfigurationRequest `object`

### DeleteConfigurationResponse
* DeleteConfigurationResponse `object`
  * Arn
  * State

### DescribeClusterOperationRequest
* DescribeClusterOperationRequest `object`

### DescribeClusterOperationResponse
* DescribeClusterOperationResponse `object`
  * ClusterOperationInfo
    * ClientRequestId
    * ClusterArn
    * CreationTime
    * EndTime
    * ErrorInfo
      * ErrorCode
      * ErrorString
    * OperationArn
    * OperationState
    * OperationSteps
      * items [ClusterOperationStep](#clusteroperationstep)
    * OperationType
    * SourceClusterInfo
      * BrokerEBSVolumeInfo
        * items [BrokerEBSVolumeInfo](#brokerebsvolumeinfo)
      * ConfigurationInfo
        * Arn **required**
        * Revision **required**
      * EnhancedMonitoring
      * KafkaVersion
      * LoggingInfo
        * BrokerLogs **required**
          * CloudWatchLogs
          * Firehose
          * S3
      * NumberOfBrokerNodes
      * OpenMonitoring
        * Prometheus **required**
          * JmxExporter
          * NodeExporter
    * TargetClusterInfo
      * BrokerEBSVolumeInfo
        * items [BrokerEBSVolumeInfo](#brokerebsvolumeinfo)
      * ConfigurationInfo
        * Arn **required**
        * Revision **required**
      * EnhancedMonitoring
      * KafkaVersion
      * LoggingInfo
        * BrokerLogs **required**
          * CloudWatchLogs
          * Firehose
          * S3
      * NumberOfBrokerNodes
      * OpenMonitoring
        * Prometheus **required**
          * JmxExporter
          * NodeExporter

### DescribeClusterRequest
* DescribeClusterRequest `object`

### DescribeClusterResponse
* DescribeClusterResponse `object`
  * ClusterInfo
    * ActiveOperationArn
    * BrokerNodeGroupInfo
      * BrokerAZDistribution
      * ClientSubnets **required**
        * items [__string](#__string)
      * InstanceType **required**
      * SecurityGroups
        * items [__string](#__string)
      * StorageInfo
        * EbsStorageInfo
          * VolumeSize
    * ClientAuthentication
      * Sasl
        * Scram
          * Enabled
      * Tls
        * CertificateAuthorityArnList
          * items [__string](#__string)
    * ClusterArn
    * ClusterName
    * CreationTime
    * CurrentBrokerSoftwareInfo
      * ConfigurationArn
      * ConfigurationRevision
      * KafkaVersion
    * CurrentVersion
    * EncryptionInfo
      * EncryptionAtRest
        * DataVolumeKMSKeyId **required**
      * EncryptionInTransit
        * ClientBroker
        * InCluster
    * EnhancedMonitoring
    * LoggingInfo
      * BrokerLogs **required**
        * CloudWatchLogs
          * Enabled **required**
          * LogGroup
        * Firehose
          * DeliveryStream
          * Enabled **required**
        * S3
          * Bucket
          * Enabled **required**
          * Prefix
    * NumberOfBrokerNodes
    * OpenMonitoring
      * Prometheus **required**
        * JmxExporter
          * EnabledInBroker **required**
        * NodeExporter
          * EnabledInBroker **required**
    * State
    * StateInfo
      * Code
      * Message
    * Tags
    * ZookeeperConnectString
    * ZookeeperConnectStringTls

### DescribeConfigurationRequest
* DescribeConfigurationRequest `object`

### DescribeConfigurationResponse
* DescribeConfigurationResponse `object`
  * Arn
  * CreationTime
  * Description
  * KafkaVersions
    * items [__string](#__string)
  * LatestRevision
    * CreationTime **required**
    * Description
    * Revision **required**
  * Name
  * State

### DescribeConfigurationRevisionRequest
* DescribeConfigurationRevisionRequest `object`

### DescribeConfigurationRevisionResponse
* DescribeConfigurationRevisionResponse `object`
  * Arn
  * CreationTime
  * Description
  * Revision
  * ServerProperties

### EBSStorageInfo
* EBSStorageInfo `object`: 
  * VolumeSize

### EncryptionAtRest
* EncryptionAtRest `object`: 
  * DataVolumeKMSKeyId **required**

### EncryptionInTransit
* EncryptionInTransit `object`: 
  * ClientBroker
  * InCluster

### EncryptionInfo
* EncryptionInfo `object`: 
  * EncryptionAtRest
    * DataVolumeKMSKeyId **required**
  * EncryptionInTransit
    * ClientBroker
    * InCluster

### EnhancedMonitoring
* EnhancedMonitoring `string` (values: DEFAULT, PER_BROKER, PER_TOPIC_PER_BROKER, PER_TOPIC_PER_PARTITION): 

### ErrorInfo
* ErrorInfo `object`: 
  * ErrorCode
  * ErrorString

### Firehose
* Firehose `object`
  * DeliveryStream
  * Enabled **required**

### ForbiddenException


### GetBootstrapBrokersRequest
* GetBootstrapBrokersRequest `object`

### GetBootstrapBrokersResponse
* GetBootstrapBrokersResponse `object`
  * BootstrapBrokerString
  * BootstrapBrokerStringSaslScram
  * BootstrapBrokerStringTls

### GetCompatibleKafkaVersionsRequest
* GetCompatibleKafkaVersionsRequest `object`

### GetCompatibleKafkaVersionsResponse
* GetCompatibleKafkaVersionsResponse `object`
  * CompatibleKafkaVersions
    * items [CompatibleKafkaVersion](#compatiblekafkaversion)

### InternalServerErrorException


### JmxExporter
* JmxExporter `object`: 
  * EnabledInBroker **required**

### JmxExporterInfo
* JmxExporterInfo `object`: 
  * EnabledInBroker **required**

### KafkaVersion
* KafkaVersion `object`
  * Status
  * Version

### KafkaVersionStatus
* KafkaVersionStatus `string` (values: ACTIVE, DEPRECATED)

### ListClusterOperationsRequest
* ListClusterOperationsRequest `object`

### ListClusterOperationsResponse
* ListClusterOperationsResponse `object`
  * ClusterOperationInfoList
    * items [ClusterOperationInfo](#clusteroperationinfo)
  * NextToken

### ListClustersRequest
* ListClustersRequest `object`

### ListClustersResponse
* ListClustersResponse `object`
  * ClusterInfoList
    * items [ClusterInfo](#clusterinfo)
  * NextToken

### ListConfigurationRevisionsRequest
* ListConfigurationRevisionsRequest `object`

### ListConfigurationRevisionsResponse
* ListConfigurationRevisionsResponse `object`
  * NextToken
  * Revisions
    * items [ConfigurationRevision](#configurationrevision)

### ListConfigurationsRequest
* ListConfigurationsRequest `object`

### ListConfigurationsResponse
* ListConfigurationsResponse `object`
  * Configurations
    * items [Configuration](#configuration)
  * NextToken

### ListKafkaVersionsRequest
* ListKafkaVersionsRequest `object`

### ListKafkaVersionsResponse
* ListKafkaVersionsResponse `object`
  * KafkaVersions
    * items [KafkaVersion](#kafkaversion)
  * NextToken

### ListNodesRequest
* ListNodesRequest `object`

### ListNodesResponse
* ListNodesResponse `object`
  * NextToken
  * NodeInfoList
    * items [NodeInfo](#nodeinfo)

### ListScramSecretsRequest
* ListScramSecretsRequest `object`

### ListScramSecretsResponse
* ListScramSecretsResponse `object`
  * NextToken
  * SecretArnList
    * items [__string](#__string)

### ListTagsForResourceRequest
* ListTagsForResourceRequest `object`

### ListTagsForResourceResponse
* ListTagsForResourceResponse `object`
  * Tags

### LoggingInfo
* LoggingInfo `object`
  * BrokerLogs **required**
    * CloudWatchLogs
      * Enabled **required**
      * LogGroup
    * Firehose
      * DeliveryStream
      * Enabled **required**
    * S3
      * Bucket
      * Enabled **required**
      * Prefix

### MaxResults
* MaxResults `integer`

### MutableClusterInfo
* MutableClusterInfo `object`: 
  * BrokerEBSVolumeInfo
    * items [BrokerEBSVolumeInfo](#brokerebsvolumeinfo)
  * ConfigurationInfo
    * Arn **required**
    * Revision **required**
  * EnhancedMonitoring
  * KafkaVersion
  * LoggingInfo
    * BrokerLogs **required**
      * CloudWatchLogs
        * Enabled **required**
        * LogGroup
      * Firehose
        * DeliveryStream
        * Enabled **required**
      * S3
        * Bucket
        * Enabled **required**
        * Prefix
  * NumberOfBrokerNodes
  * OpenMonitoring
    * Prometheus **required**
      * JmxExporter
        * EnabledInBroker **required**
      * NodeExporter
        * EnabledInBroker **required**

### NodeExporter
* NodeExporter `object`: 
  * EnabledInBroker **required**

### NodeExporterInfo
* NodeExporterInfo `object`: 
  * EnabledInBroker **required**

### NodeInfo
* NodeInfo `object`: 
  * AddedToClusterTime
  * BrokerNodeInfo
    * AttachedENIId
    * BrokerId
    * ClientSubnet
    * ClientVpcIpAddress
    * CurrentBrokerSoftwareInfo
      * ConfigurationArn
      * ConfigurationRevision
      * KafkaVersion
    * Endpoints
      * items [__string](#__string)
  * InstanceType
  * NodeARN
  * NodeType
  * ZookeeperNodeInfo
    * AttachedENIId
    * ClientVpcIpAddress
    * Endpoints
      * items [__string](#__string)
    * ZookeeperId
    * ZookeeperVersion

### NodeType
* NodeType `string` (values: BROKER): 

### NotFoundException


### OpenMonitoring
* OpenMonitoring `object`: 
  * Prometheus **required**
    * JmxExporter
      * EnabledInBroker **required**
    * NodeExporter
      * EnabledInBroker **required**

### OpenMonitoringInfo
* OpenMonitoringInfo `object`: 
  * Prometheus **required**
    * JmxExporter
      * EnabledInBroker **required**
    * NodeExporter
      * EnabledInBroker **required**

### Prometheus
* Prometheus `object`: 
  * JmxExporter
    * EnabledInBroker **required**
  * NodeExporter
    * EnabledInBroker **required**

### PrometheusInfo
* PrometheusInfo `object`: 
  * JmxExporter
    * EnabledInBroker **required**
  * NodeExporter
    * EnabledInBroker **required**

### RebootBrokerRequest
* RebootBrokerRequest `object`: Reboots a node.
  * BrokerIds **required**
    * items [__string](#__string)

### RebootBrokerResponse
* RebootBrokerResponse `object`
  * ClusterArn
  * ClusterOperationArn

### S3
* S3 `object`
  * Bucket
  * Enabled **required**
  * Prefix

### Sasl
* Sasl `object`: 
  * Scram
    * Enabled

### Scram
* Scram `object`: 
  * Enabled

### ServiceUnavailableException


### StateInfo
* StateInfo `object`
  * Code
  * Message

### StorageInfo
* StorageInfo `object`: 
  * EbsStorageInfo
    * VolumeSize

### TagResourceRequest
* TagResourceRequest `object`
  * Tags **required**

### Tls
* Tls `object`: 
  * CertificateAuthorityArnList
    * items [__string](#__string)

### TooManyRequestsException


### UnauthorizedException


### UnprocessedScramSecret
* UnprocessedScramSecret `object`: 
  * ErrorCode
  * ErrorMessage
  * SecretArn

### UntagResourceRequest
* UntagResourceRequest `object`

### UpdateBrokerCountRequest
* UpdateBrokerCountRequest `object`
  * CurrentVersion **required**
  * TargetNumberOfBrokerNodes **required**

### UpdateBrokerCountResponse
* UpdateBrokerCountResponse `object`
  * ClusterArn
  * ClusterOperationArn

### UpdateBrokerStorageRequest
* UpdateBrokerStorageRequest `object`
  * CurrentVersion **required**
  * TargetBrokerEBSVolumeInfo **required**
    * items [BrokerEBSVolumeInfo](#brokerebsvolumeinfo)

### UpdateBrokerStorageResponse
* UpdateBrokerStorageResponse `object`
  * ClusterArn
  * ClusterOperationArn

### UpdateClusterConfigurationRequest
* UpdateClusterConfigurationRequest `object`
  * ConfigurationInfo **required**
    * Arn **required**
    * Revision **required**
  * CurrentVersion **required**

### UpdateClusterConfigurationResponse
* UpdateClusterConfigurationResponse `object`
  * ClusterArn
  * ClusterOperationArn

### UpdateClusterKafkaVersionRequest
* UpdateClusterKafkaVersionRequest `object`
  * ConfigurationInfo
    * Arn **required**
    * Revision **required**
  * CurrentVersion **required**
  * TargetKafkaVersion **required**

### UpdateClusterKafkaVersionResponse
* UpdateClusterKafkaVersionResponse `object`
  * ClusterArn
  * ClusterOperationArn

### UpdateConfigurationRequest
* UpdateConfigurationRequest `object`
  * Description
  * ServerProperties **required**

### UpdateConfigurationResponse
* UpdateConfigurationResponse `object`
  * Arn
  * LatestRevision
    * CreationTime **required**
    * Description
    * Revision **required**

### UpdateMonitoringRequest
* UpdateMonitoringRequest `object`: Request body for UpdateMonitoring.
  * CurrentVersion **required**
  * EnhancedMonitoring
  * LoggingInfo
    * BrokerLogs **required**
      * CloudWatchLogs
        * Enabled **required**
        * LogGroup
      * Firehose
        * DeliveryStream
        * Enabled **required**
      * S3
        * Bucket
        * Enabled **required**
        * Prefix
  * OpenMonitoring
    * Prometheus **required**
      * JmxExporter
        * EnabledInBroker **required**
      * NodeExporter
        * EnabledInBroker **required**

### UpdateMonitoringResponse
* UpdateMonitoringResponse `object`
  * ClusterArn
  * ClusterOperationArn

### ZookeeperNodeInfo
* ZookeeperNodeInfo `object`: 
  * AttachedENIId
  * ClientVpcIpAddress
  * Endpoints
    * items [__string](#__string)
  * ZookeeperId
  * ZookeeperVersion

### __blob
* __blob `string`

### __boolean
* __boolean `boolean`

### __double
* __double `number`

### __integer
* __integer `integer`

### __integerMin1Max15
* __integerMin1Max15 `integer`

### __integerMin1Max16384
* __integerMin1Max16384 `integer`

### __listOfBrokerEBSVolumeInfo
* __listOfBrokerEBSVolumeInfo `array`
  * items [BrokerEBSVolumeInfo](#brokerebsvolumeinfo)

### __listOfClusterInfo
* __listOfClusterInfo `array`
  * items [ClusterInfo](#clusterinfo)

### __listOfClusterOperationInfo
* __listOfClusterOperationInfo `array`
  * items [ClusterOperationInfo](#clusteroperationinfo)

### __listOfClusterOperationStep
* __listOfClusterOperationStep `array`
  * items [ClusterOperationStep](#clusteroperationstep)

### __listOfCompatibleKafkaVersion
* __listOfCompatibleKafkaVersion `array`
  * items [CompatibleKafkaVersion](#compatiblekafkaversion)

### __listOfConfiguration
* __listOfConfiguration `array`
  * items [Configuration](#configuration)

### __listOfConfigurationRevision
* __listOfConfigurationRevision `array`
  * items [ConfigurationRevision](#configurationrevision)

### __listOfKafkaVersion
* __listOfKafkaVersion `array`
  * items [KafkaVersion](#kafkaversion)

### __listOfNodeInfo
* __listOfNodeInfo `array`
  * items [NodeInfo](#nodeinfo)

### __listOfUnprocessedScramSecret
* __listOfUnprocessedScramSecret `array`
  * items [UnprocessedScramSecret](#unprocessedscramsecret)

### __listOf__string
* __listOf__string `array`
  * items [__string](#__string)

### __long
* __long `integer`

### __mapOf__string
* __mapOf__string `object`

### __string
* __string `string`

### __stringMin1Max128
* __stringMin1Max128 `string`

### __stringMin1Max64
* __stringMin1Max64 `string`

### __stringMin5Max32
* __stringMin5Max32 `string`

### __timestampIso8601
* __timestampIso8601 `string`


