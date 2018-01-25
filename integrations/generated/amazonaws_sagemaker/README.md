# @datafire/amazonaws_sagemaker

Client library for Amazon SageMaker Service

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_sagemaker
```
```js
let amazonaws_sagemaker = require('@datafire/amazonaws_sagemaker').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

amazonaws_sagemaker.AddTags({
  "ResourceArn": "",
  "Tags": []
}).then(data => {
  console.log(data);
});
```

## Description

Definition of the public APIs exposed by SageMaker

## Actions

### AddTags



```js
amazonaws_sagemaker.AddTags({
  "ResourceArn": "",
  "Tags": []
}, context)
```

#### Input
* input `object`
  * ResourceArn **required** [ResourceArn](#resourcearn)
  * Tags **required** [TagList](#taglist)

#### Output
* output [AddTagsOutput](#addtagsoutput)

### CreateEndpoint



```js
amazonaws_sagemaker.CreateEndpoint({
  "EndpointName": "",
  "EndpointConfigName": ""
}, context)
```

#### Input
* input `object`
  * EndpointConfigName **required** [EndpointConfigName](#endpointconfigname)
  * EndpointName **required** [EndpointName](#endpointname)
  * Tags [TagList](#taglist)

#### Output
* output [CreateEndpointOutput](#createendpointoutput)

### CreateEndpointConfig



```js
amazonaws_sagemaker.CreateEndpointConfig({
  "EndpointConfigName": "",
  "ProductionVariants": []
}, context)
```

#### Input
* input `object`
  * EndpointConfigName **required** [EndpointConfigName](#endpointconfigname)
  * ProductionVariants **required** [ProductionVariantList](#productionvariantlist)
  * Tags [TagList](#taglist)

#### Output
* output [CreateEndpointConfigOutput](#createendpointconfigoutput)

### CreateModel



```js
amazonaws_sagemaker.CreateModel({
  "ModelName": "",
  "PrimaryContainer": {
    "Image": ""
  }
}, context)
```

#### Input
* input `object`
  * ExecutionRoleArn [RoleArn](#rolearn)
  * ModelName **required** [ModelName](#modelname)
  * PrimaryContainer **required** [ContainerDefinition](#containerdefinition)
  * SupplementalContainers [ContainerDefinitionList](#containerdefinitionlist)
  * Tags [TagList](#taglist)

#### Output
* output [CreateModelOutput](#createmodeloutput)

### CreateNotebookInstance



```js
amazonaws_sagemaker.CreateNotebookInstance({
  "NotebookInstanceName": "",
  "InstanceType": "",
  "RoleArn": ""
}, context)
```

#### Input
* input `object`
  * InstanceType **required** [InstanceType](#instancetype)
  * KmsKeyId [KmsKeyId](#kmskeyid)
  * NotebookInstanceName **required** [NotebookInstanceName](#notebookinstancename)
  * RoleArn **required** [RoleArn](#rolearn)
  * SecurityGroupIds [SecurityGroupIds](#securitygroupids)
  * SubnetId [SubnetId](#subnetid)
  * Tags [TagList](#taglist)

#### Output
* output [CreateNotebookInstanceOutput](#createnotebookinstanceoutput)

### CreatePresignedNotebookInstanceUrl



```js
amazonaws_sagemaker.CreatePresignedNotebookInstanceUrl({
  "NotebookInstanceName": ""
}, context)
```

#### Input
* input `object`
  * NotebookInstanceName **required** [NotebookInstanceName](#notebookinstancename)
  * SessionExpirationDurationInSeconds [SessionExpirationDurationInSeconds](#sessionexpirationdurationinseconds)

#### Output
* output [CreatePresignedNotebookInstanceUrlOutput](#createpresignednotebookinstanceurloutput)

### CreateTrainingJob



```js
amazonaws_sagemaker.CreateTrainingJob({
  "TrainingJobName": "",
  "AlgorithmSpecification": {
    "TrainingImage": "",
    "TrainingInputMode": ""
  },
  "RoleArn": "",
  "InputDataConfig": [],
  "OutputDataConfig": {
    "S3OutputPath": ""
  },
  "ResourceConfig": {
    "InstanceType": "",
    "InstanceCount": 0,
    "VolumeSizeInGB": 0
  },
  "StoppingCondition": {}
}, context)
```

#### Input
* input `object`
  * AlgorithmSpecification **required** [AlgorithmSpecification](#algorithmspecification)
  * HyperParameters [HyperParameters](#hyperparameters)
  * InputDataConfig **required** [InputDataConfig](#inputdataconfig)
  * OutputDataConfig **required** [OutputDataConfig](#outputdataconfig)
  * ResourceConfig **required** [ResourceConfig](#resourceconfig)
  * RoleArn **required** [RoleArn](#rolearn)
  * StoppingCondition **required** [StoppingCondition](#stoppingcondition)
  * Tags [TagList](#taglist)
  * TrainingJobName **required** [TrainingJobName](#trainingjobname)

#### Output
* output [CreateTrainingJobResponse](#createtrainingjobresponse)

### DeleteEndpoint



```js
amazonaws_sagemaker.DeleteEndpoint({
  "EndpointName": ""
}, context)
```

#### Input
* input `object`
  * EndpointName **required** [EndpointName](#endpointname)

#### Output
*Output schema unknown*

### DeleteEndpointConfig



```js
amazonaws_sagemaker.DeleteEndpointConfig({
  "EndpointConfigName": ""
}, context)
```

#### Input
* input `object`
  * EndpointConfigName **required** [EndpointConfigName](#endpointconfigname)

#### Output
*Output schema unknown*

### DeleteModel



```js
amazonaws_sagemaker.DeleteModel({
  "ModelName": ""
}, context)
```

#### Input
* input `object`
  * ModelName **required** [ModelName](#modelname)

#### Output
*Output schema unknown*

### DeleteNotebookInstance



```js
amazonaws_sagemaker.DeleteNotebookInstance({
  "NotebookInstanceName": ""
}, context)
```

#### Input
* input `object`
  * NotebookInstanceName **required** [NotebookInstanceName](#notebookinstancename)

#### Output
*Output schema unknown*

### DeleteTags



```js
amazonaws_sagemaker.DeleteTags({
  "ResourceArn": "",
  "TagKeys": []
}, context)
```

#### Input
* input `object`
  * ResourceArn **required** [ResourceArn](#resourcearn)
  * TagKeys **required** [TagKeyList](#tagkeylist)

#### Output
* output [DeleteTagsOutput](#deletetagsoutput)

### DescribeEndpoint



```js
amazonaws_sagemaker.DescribeEndpoint({
  "EndpointName": ""
}, context)
```

#### Input
* input `object`
  * EndpointName **required** [EndpointName](#endpointname)

#### Output
* output [DescribeEndpointOutput](#describeendpointoutput)

### DescribeEndpointConfig



```js
amazonaws_sagemaker.DescribeEndpointConfig({
  "EndpointConfigName": ""
}, context)
```

#### Input
* input `object`
  * EndpointConfigName **required** [EndpointConfigName](#endpointconfigname)

#### Output
* output [DescribeEndpointConfigOutput](#describeendpointconfigoutput)

### DescribeModel



```js
amazonaws_sagemaker.DescribeModel({
  "ModelName": ""
}, context)
```

#### Input
* input `object`
  * ModelName **required** [ModelName](#modelname)

#### Output
* output [DescribeModelOutput](#describemodeloutput)

### DescribeNotebookInstance



```js
amazonaws_sagemaker.DescribeNotebookInstance({
  "NotebookInstanceName": ""
}, context)
```

#### Input
* input `object`
  * NotebookInstanceName **required** [NotebookInstanceName](#notebookinstancename)

#### Output
* output [DescribeNotebookInstanceOutput](#describenotebookinstanceoutput)

### DescribeTrainingJob



```js
amazonaws_sagemaker.DescribeTrainingJob({
  "TrainingJobName": ""
}, context)
```

#### Input
* input `object`
  * TrainingJobName **required** [TrainingJobName](#trainingjobname)

#### Output
* output [DescribeTrainingJobResponse](#describetrainingjobresponse)

### ListEndpointConfigs



```js
amazonaws_sagemaker.ListEndpointConfigs({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * CreationTimeAfter [Timestamp](#timestamp)
  * CreationTimeBefore [Timestamp](#timestamp)
  * MaxResults [MaxResults](#maxresults)
  * NameContains [EndpointConfigNameContains](#endpointconfignamecontains)
  * NextToken [PaginationToken](#paginationtoken)
  * SortBy [EndpointConfigSortKey](#endpointconfigsortkey)
  * SortOrder [OrderKey](#orderkey)

#### Output
* output [ListEndpointConfigsOutput](#listendpointconfigsoutput)

### ListEndpoints



```js
amazonaws_sagemaker.ListEndpoints({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * CreationTimeAfter [Timestamp](#timestamp)
  * CreationTimeBefore [Timestamp](#timestamp)
  * LastModifiedTimeAfter [Timestamp](#timestamp)
  * LastModifiedTimeBefore [Timestamp](#timestamp)
  * MaxResults [MaxResults](#maxresults)
  * NameContains [EndpointNameContains](#endpointnamecontains)
  * NextToken [PaginationToken](#paginationtoken)
  * SortBy [EndpointSortKey](#endpointsortkey)
  * SortOrder [OrderKey](#orderkey)
  * StatusEquals [EndpointStatus](#endpointstatus)

#### Output
* output [ListEndpointsOutput](#listendpointsoutput)

### ListModels



```js
amazonaws_sagemaker.ListModels({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * CreationTimeAfter [Timestamp](#timestamp)
  * CreationTimeBefore [Timestamp](#timestamp)
  * MaxResults [MaxResults](#maxresults)
  * NameContains [ModelNameContains](#modelnamecontains)
  * NextToken [PaginationToken](#paginationtoken)
  * SortBy [ModelSortKey](#modelsortkey)
  * SortOrder [OrderKey](#orderkey)

#### Output
* output [ListModelsOutput](#listmodelsoutput)

### ListNotebookInstances



```js
amazonaws_sagemaker.ListNotebookInstances({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * CreationTimeAfter [CreationTime](#creationtime)
  * CreationTimeBefore [CreationTime](#creationtime)
  * LastModifiedTimeAfter [LastModifiedTime](#lastmodifiedtime)
  * LastModifiedTimeBefore [LastModifiedTime](#lastmodifiedtime)
  * MaxResults [MaxResults](#maxresults)
  * NameContains [NotebookInstanceNameContains](#notebookinstancenamecontains)
  * NextToken [NextToken](#nexttoken)
  * SortBy [NotebookInstanceSortKey](#notebookinstancesortkey)
  * SortOrder [NotebookInstanceSortOrder](#notebookinstancesortorder)
  * StatusEquals [NotebookInstanceStatus](#notebookinstancestatus)

#### Output
* output [ListNotebookInstancesOutput](#listnotebookinstancesoutput)

### ListTags



```js
amazonaws_sagemaker.ListTags({
  "ResourceArn": ""
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults [ListTagsMaxResults](#listtagsmaxresults)
  * NextToken [NextToken](#nexttoken)
  * ResourceArn **required** [ResourceArn](#resourcearn)

#### Output
* output [ListTagsOutput](#listtagsoutput)

### ListTrainingJobs



```js
amazonaws_sagemaker.ListTrainingJobs({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * CreationTimeAfter [Timestamp](#timestamp)
  * CreationTimeBefore [Timestamp](#timestamp)
  * LastModifiedTimeAfter [Timestamp](#timestamp)
  * LastModifiedTimeBefore [Timestamp](#timestamp)
  * MaxResults [MaxResults](#maxresults)
  * NameContains [NameContains](#namecontains)
  * NextToken [NextToken](#nexttoken)
  * SortBy [SortBy](#sortby)
  * SortOrder [SortOrder](#sortorder)
  * StatusEquals [TrainingJobStatus](#trainingjobstatus)

#### Output
* output [ListTrainingJobsResponse](#listtrainingjobsresponse)

### StartNotebookInstance



```js
amazonaws_sagemaker.StartNotebookInstance({
  "NotebookInstanceName": ""
}, context)
```

#### Input
* input `object`
  * NotebookInstanceName **required** [NotebookInstanceName](#notebookinstancename)

#### Output
*Output schema unknown*

### StopNotebookInstance



```js
amazonaws_sagemaker.StopNotebookInstance({
  "NotebookInstanceName": ""
}, context)
```

#### Input
* input `object`
  * NotebookInstanceName **required** [NotebookInstanceName](#notebookinstancename)

#### Output
*Output schema unknown*

### StopTrainingJob



```js
amazonaws_sagemaker.StopTrainingJob({
  "TrainingJobName": ""
}, context)
```

#### Input
* input `object`
  * TrainingJobName **required** [TrainingJobName](#trainingjobname)

#### Output
*Output schema unknown*

### UpdateEndpoint



```js
amazonaws_sagemaker.UpdateEndpoint({
  "EndpointName": "",
  "EndpointConfigName": ""
}, context)
```

#### Input
* input `object`
  * EndpointConfigName **required** [EndpointConfigName](#endpointconfigname)
  * EndpointName **required** [EndpointName](#endpointname)

#### Output
* output [UpdateEndpointOutput](#updateendpointoutput)

### UpdateEndpointWeightsAndCapacities



```js
amazonaws_sagemaker.UpdateEndpointWeightsAndCapacities({
  "EndpointName": "",
  "DesiredWeightsAndCapacities": []
}, context)
```

#### Input
* input `object`
  * DesiredWeightsAndCapacities **required** [DesiredWeightAndCapacityList](#desiredweightandcapacitylist)
  * EndpointName **required** [EndpointName](#endpointname)

#### Output
* output [UpdateEndpointWeightsAndCapacitiesOutput](#updateendpointweightsandcapacitiesoutput)

### UpdateNotebookInstance



```js
amazonaws_sagemaker.UpdateNotebookInstance({
  "NotebookInstanceName": ""
}, context)
```

#### Input
* input `object`
  * InstanceType [InstanceType](#instancetype)
  * NotebookInstanceName **required** [NotebookInstanceName](#notebookinstancename)
  * RoleArn [RoleArn](#rolearn)

#### Output
* output [UpdateNotebookInstanceOutput](#updatenotebookinstanceoutput)



## Definitions

### AddTagsInput
* AddTagsInput `object`
  * ResourceArn **required** [ResourceArn](#resourcearn)
  * Tags **required** [TagList](#taglist)

### AddTagsOutput
* AddTagsOutput `object`
  * Tags [TagList](#taglist)

### AlgorithmImage
* AlgorithmImage `string`

### AlgorithmSpecification
* AlgorithmSpecification `object`: <p>Specifies the training algorithm to use in a <a href="http://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateTrainingJob.html">CreateTrainingJob</a> request. </p> <p>For more information about algorithms provided by Amazon SageMaker, see <a href="http://docs.aws.amazon.com/sagemaker/latest/dg/algos.html">Algorithms</a>. For information about using your own algorithms, see <a href="http://docs.aws.amazon.com/sagemaker/latest/dg/adv-topics-own-algo.html">Bring Your Own Algorithms </a>. </p>
  * TrainingImage **required** [AlgorithmImage](#algorithmimage)
  * TrainingInputMode **required** [TrainingInputMode](#traininginputmode)

### Channel
* Channel `object`: A channel is a named input source that training algorithms can consume. 
  * ChannelName **required** [ChannelName](#channelname)
  * CompressionType [CompressionType](#compressiontype)
  * ContentType [ContentType](#contenttype)
  * DataSource **required** [DataSource](#datasource)
  * RecordWrapperType [RecordWrapper](#recordwrapper)

### ChannelName
* ChannelName `string`

### CompressionType
* CompressionType `string` (values: None, Gzip)

### ContainerDefinition
* ContainerDefinition `object`: Describes the container, as part of model definition.
  * ContainerHostname [ContainerHostname](#containerhostname)
  * Environment [EnvironmentMap](#environmentmap)
  * Image **required** [Image](#image)
  * ModelDataUrl [Url](#url)

### ContainerDefinitionList
* ContainerDefinitionList `array`
  * items [ContainerDefinition](#containerdefinition)

### ContainerHostname
* ContainerHostname `string`

### ContentType
* ContentType `string`

### CreateEndpointConfigInput
* CreateEndpointConfigInput `object`
  * EndpointConfigName **required** [EndpointConfigName](#endpointconfigname)
  * ProductionVariants **required** [ProductionVariantList](#productionvariantlist)
  * Tags [TagList](#taglist)

### CreateEndpointConfigOutput
* CreateEndpointConfigOutput `object`
  * EndpointConfigArn **required** [EndpointConfigArn](#endpointconfigarn)

### CreateEndpointInput
* CreateEndpointInput `object`
  * EndpointConfigName **required** [EndpointConfigName](#endpointconfigname)
  * EndpointName **required** [EndpointName](#endpointname)
  * Tags [TagList](#taglist)

### CreateEndpointOutput
* CreateEndpointOutput `object`
  * EndpointArn **required** [EndpointArn](#endpointarn)

### CreateModelInput
* CreateModelInput `object`
  * ExecutionRoleArn [RoleArn](#rolearn)
  * ModelName **required** [ModelName](#modelname)
  * PrimaryContainer **required** [ContainerDefinition](#containerdefinition)
  * SupplementalContainers [ContainerDefinitionList](#containerdefinitionlist)
  * Tags [TagList](#taglist)

### CreateModelOutput
* CreateModelOutput `object`
  * ModelArn **required** [ModelArn](#modelarn)

### CreateNotebookInstanceInput
* CreateNotebookInstanceInput `object`
  * InstanceType **required** [InstanceType](#instancetype)
  * KmsKeyId [KmsKeyId](#kmskeyid)
  * NotebookInstanceName **required** [NotebookInstanceName](#notebookinstancename)
  * RoleArn **required** [RoleArn](#rolearn)
  * SecurityGroupIds [SecurityGroupIds](#securitygroupids)
  * SubnetId [SubnetId](#subnetid)
  * Tags [TagList](#taglist)

### CreateNotebookInstanceOutput
* CreateNotebookInstanceOutput `object`
  * NotebookInstanceArn [NotebookInstanceArn](#notebookinstancearn)

### CreatePresignedNotebookInstanceUrlInput
* CreatePresignedNotebookInstanceUrlInput `object`
  * NotebookInstanceName **required** [NotebookInstanceName](#notebookinstancename)
  * SessionExpirationDurationInSeconds [SessionExpirationDurationInSeconds](#sessionexpirationdurationinseconds)

### CreatePresignedNotebookInstanceUrlOutput
* CreatePresignedNotebookInstanceUrlOutput `object`
  * AuthorizedUrl [NotebookInstanceUrl](#notebookinstanceurl)

### CreateTrainingJobRequest
* CreateTrainingJobRequest `object`
  * AlgorithmSpecification **required** [AlgorithmSpecification](#algorithmspecification)
  * HyperParameters [HyperParameters](#hyperparameters)
  * InputDataConfig **required** [InputDataConfig](#inputdataconfig)
  * OutputDataConfig **required** [OutputDataConfig](#outputdataconfig)
  * ResourceConfig **required** [ResourceConfig](#resourceconfig)
  * RoleArn **required** [RoleArn](#rolearn)
  * StoppingCondition **required** [StoppingCondition](#stoppingcondition)
  * Tags [TagList](#taglist)
  * TrainingJobName **required** [TrainingJobName](#trainingjobname)

### CreateTrainingJobResponse
* CreateTrainingJobResponse `object`
  * TrainingJobArn **required** [TrainingJobArn](#trainingjobarn)

### CreationTime
* CreationTime `string`

### DataSource
* DataSource `object`: Describes the location of the channel data.
  * S3DataSource **required** [S3DataSource](#s3datasource)

### DeleteEndpointConfigInput
* DeleteEndpointConfigInput `object`
  * EndpointConfigName **required** [EndpointConfigName](#endpointconfigname)

### DeleteEndpointInput
* DeleteEndpointInput `object`
  * EndpointName **required** [EndpointName](#endpointname)

### DeleteModelInput
* DeleteModelInput `object`
  * ModelName **required** [ModelName](#modelname)

### DeleteNotebookInstanceInput
* DeleteNotebookInstanceInput `object`
  * NotebookInstanceName **required** [NotebookInstanceName](#notebookinstancename)

### DeleteTagsInput
* DeleteTagsInput `object`
  * ResourceArn **required** [ResourceArn](#resourcearn)
  * TagKeys **required** [TagKeyList](#tagkeylist)

### DeleteTagsOutput
* DeleteTagsOutput `object`

### DescribeEndpointConfigInput
* DescribeEndpointConfigInput `object`
  * EndpointConfigName **required** [EndpointConfigName](#endpointconfigname)

### DescribeEndpointConfigOutput
* DescribeEndpointConfigOutput `object`
  * CreationTime **required** [Timestamp](#timestamp)
  * EndpointConfigArn **required** [EndpointConfigArn](#endpointconfigarn)
  * EndpointConfigName **required** [EndpointConfigName](#endpointconfigname)
  * ProductionVariants **required** [ProductionVariantList](#productionvariantlist)

### DescribeEndpointInput
* DescribeEndpointInput `object`
  * EndpointName **required** [EndpointName](#endpointname)

### DescribeEndpointOutput
* DescribeEndpointOutput `object`
  * CreationTime **required** [Timestamp](#timestamp)
  * EndpointArn **required** [EndpointArn](#endpointarn)
  * EndpointConfigName **required** [EndpointConfigName](#endpointconfigname)
  * EndpointName **required** [EndpointName](#endpointname)
  * EndpointStatus **required** [EndpointStatus](#endpointstatus)
  * FailureReason [FailureReason](#failurereason)
  * LastModifiedTime **required** [Timestamp](#timestamp)
  * ProductionVariants [ProductionVariantSummaryList](#productionvariantsummarylist)

### DescribeModelInput
* DescribeModelInput `object`
  * ModelName **required** [ModelName](#modelname)

### DescribeModelOutput
* DescribeModelOutput `object`
  * CreationTime **required** [Timestamp](#timestamp)
  * ExecutionRoleArn **required** [RoleArn](#rolearn)
  * ModelArn **required** [ModelArn](#modelarn)
  * ModelName **required** [ModelName](#modelname)
  * PrimaryContainer **required** [ContainerDefinition](#containerdefinition)
  * SupplementalContainers **required** [ContainerDefinitionList](#containerdefinitionlist)

### DescribeNotebookInstanceInput
* DescribeNotebookInstanceInput `object`
  * NotebookInstanceName **required** [NotebookInstanceName](#notebookinstancename)

### DescribeNotebookInstanceOutput
* DescribeNotebookInstanceOutput `object`
  * CreationTime [CreationTime](#creationtime)
  * FailureReason [FailureReason](#failurereason)
  * InstanceType [InstanceType](#instancetype)
  * KmsKeyId [KmsKeyId](#kmskeyid)
  * LastModifiedTime [LastModifiedTime](#lastmodifiedtime)
  * NetworkInterfaceId [NetworkInterfaceId](#networkinterfaceid)
  * NotebookInstanceArn [NotebookInstanceArn](#notebookinstancearn)
  * NotebookInstanceName [NotebookInstanceName](#notebookinstancename)
  * NotebookInstanceStatus [NotebookInstanceStatus](#notebookinstancestatus)
  * RoleArn [RoleArn](#rolearn)
  * SecurityGroups [SecurityGroupIds](#securitygroupids)
  * SubnetId [SubnetId](#subnetid)
  * Url [NotebookInstanceUrl](#notebookinstanceurl)

### DescribeTrainingJobRequest
* DescribeTrainingJobRequest `object`
  * TrainingJobName **required** [TrainingJobName](#trainingjobname)

### DescribeTrainingJobResponse
* DescribeTrainingJobResponse `object`
  * AlgorithmSpecification **required** [AlgorithmSpecification](#algorithmspecification)
  * CreationTime **required** [Timestamp](#timestamp)
  * FailureReason [FailureReason](#failurereason)
  * HyperParameters [HyperParameters](#hyperparameters)
  * InputDataConfig **required** [InputDataConfig](#inputdataconfig)
  * LastModifiedTime [Timestamp](#timestamp)
  * ModelArtifacts **required** [ModelArtifacts](#modelartifacts)
  * OutputDataConfig [OutputDataConfig](#outputdataconfig)
  * ResourceConfig **required** [ResourceConfig](#resourceconfig)
  * RoleArn [RoleArn](#rolearn)
  * SecondaryStatus **required** [SecondaryStatus](#secondarystatus)
  * StoppingCondition **required** [StoppingCondition](#stoppingcondition)
  * TrainingEndTime [Timestamp](#timestamp)
  * TrainingJobArn **required** [TrainingJobArn](#trainingjobarn)
  * TrainingJobName **required** [TrainingJobName](#trainingjobname)
  * TrainingJobStatus **required** [TrainingJobStatus](#trainingjobstatus)
  * TrainingStartTime [Timestamp](#timestamp)

### DesiredWeightAndCapacity
* DesiredWeightAndCapacity `object`: Specifies weight and capacity values for a production variant.
  * DesiredInstanceCount [TaskCount](#taskcount)
  * DesiredWeight [VariantWeight](#variantweight)
  * VariantName **required** [VariantName](#variantname)

### DesiredWeightAndCapacityList
* DesiredWeightAndCapacityList `array`
  * items [DesiredWeightAndCapacity](#desiredweightandcapacity)

### EndpointArn
* EndpointArn `string`

### EndpointConfigArn
* EndpointConfigArn `string`

### EndpointConfigName
* EndpointConfigName `string`

### EndpointConfigNameContains
* EndpointConfigNameContains `string`

### EndpointConfigSortKey
* EndpointConfigSortKey `string` (values: Name, CreationTime)

### EndpointConfigSummary
* EndpointConfigSummary `object`: Provides summary information for an endpoint configuration.
  * CreationTime **required** [Timestamp](#timestamp)
  * EndpointConfigArn **required** [EndpointConfigArn](#endpointconfigarn)
  * EndpointConfigName **required** [EndpointConfigName](#endpointconfigname)

### EndpointConfigSummaryList
* EndpointConfigSummaryList `array`
  * items [EndpointConfigSummary](#endpointconfigsummary)

### EndpointName
* EndpointName `string`

### EndpointNameContains
* EndpointNameContains `string`

### EndpointSortKey
* EndpointSortKey `string` (values: Name, CreationTime, Status)

### EndpointStatus
* EndpointStatus `string` (values: OutOfService, Creating, Updating, RollingBack, InService, Deleting, Failed)

### EndpointSummary
* EndpointSummary `object`: Provides summary information for an endpoint.
  * CreationTime **required** [Timestamp](#timestamp)
  * EndpointArn **required** [EndpointArn](#endpointarn)
  * EndpointName **required** [EndpointName](#endpointname)
  * EndpointStatus **required** [EndpointStatus](#endpointstatus)
  * LastModifiedTime **required** [Timestamp](#timestamp)

### EndpointSummaryList
* EndpointSummaryList `array`
  * items [EndpointSummary](#endpointsummary)

### EnvironmentKey
* EnvironmentKey `string`

### EnvironmentMap
* EnvironmentMap `array`
  * items `object`
    * key [EnvironmentKey](#environmentkey)
    * value [EnvironmentValue](#environmentvalue)

### EnvironmentValue
* EnvironmentValue `string`

### FailureReason
* FailureReason `string`

### HyperParameters
* HyperParameters `array`
  * items `object`
    * key [ParameterKey](#parameterkey)
    * value [ParameterValue](#parametervalue)

### Image
* Image `string`

### InputDataConfig
* InputDataConfig `array`
  * items [Channel](#channel)

### InstanceType
* InstanceType `string` (values: ml.t2.medium, ml.m4.xlarge, ml.p2.xlarge)

### KmsKeyId
* KmsKeyId `string`

### LastModifiedTime
* LastModifiedTime `string`

### ListEndpointConfigsInput
* ListEndpointConfigsInput `object`
  * CreationTimeAfter [Timestamp](#timestamp)
  * CreationTimeBefore [Timestamp](#timestamp)
  * MaxResults [MaxResults](#maxresults)
  * NameContains [EndpointConfigNameContains](#endpointconfignamecontains)
  * NextToken [PaginationToken](#paginationtoken)
  * SortBy [EndpointConfigSortKey](#endpointconfigsortkey)
  * SortOrder [OrderKey](#orderkey)

### ListEndpointConfigsOutput
* ListEndpointConfigsOutput `object`
  * EndpointConfigs **required** [EndpointConfigSummaryList](#endpointconfigsummarylist)
  * NextToken [PaginationToken](#paginationtoken)

### ListEndpointsInput
* ListEndpointsInput `object`
  * CreationTimeAfter [Timestamp](#timestamp)
  * CreationTimeBefore [Timestamp](#timestamp)
  * LastModifiedTimeAfter [Timestamp](#timestamp)
  * LastModifiedTimeBefore [Timestamp](#timestamp)
  * MaxResults [MaxResults](#maxresults)
  * NameContains [EndpointNameContains](#endpointnamecontains)
  * NextToken [PaginationToken](#paginationtoken)
  * SortBy [EndpointSortKey](#endpointsortkey)
  * SortOrder [OrderKey](#orderkey)
  * StatusEquals [EndpointStatus](#endpointstatus)

### ListEndpointsOutput
* ListEndpointsOutput `object`
  * Endpoints **required** [EndpointSummaryList](#endpointsummarylist)
  * NextToken [PaginationToken](#paginationtoken)

### ListModelsInput
* ListModelsInput `object`
  * CreationTimeAfter [Timestamp](#timestamp)
  * CreationTimeBefore [Timestamp](#timestamp)
  * MaxResults [MaxResults](#maxresults)
  * NameContains [ModelNameContains](#modelnamecontains)
  * NextToken [PaginationToken](#paginationtoken)
  * SortBy [ModelSortKey](#modelsortkey)
  * SortOrder [OrderKey](#orderkey)

### ListModelsOutput
* ListModelsOutput `object`
  * Models **required** [ModelSummaryList](#modelsummarylist)
  * NextToken [PaginationToken](#paginationtoken)

### ListNotebookInstancesInput
* ListNotebookInstancesInput `object`
  * CreationTimeAfter [CreationTime](#creationtime)
  * CreationTimeBefore [CreationTime](#creationtime)
  * LastModifiedTimeAfter [LastModifiedTime](#lastmodifiedtime)
  * LastModifiedTimeBefore [LastModifiedTime](#lastmodifiedtime)
  * MaxResults [MaxResults](#maxresults)
  * NameContains [NotebookInstanceNameContains](#notebookinstancenamecontains)
  * NextToken [NextToken](#nexttoken)
  * SortBy [NotebookInstanceSortKey](#notebookinstancesortkey)
  * SortOrder [NotebookInstanceSortOrder](#notebookinstancesortorder)
  * StatusEquals [NotebookInstanceStatus](#notebookinstancestatus)

### ListNotebookInstancesOutput
* ListNotebookInstancesOutput `object`
  * NextToken [NextToken](#nexttoken)
  * NotebookInstances [NotebookInstanceSummaryList](#notebookinstancesummarylist)

### ListTagsInput
* ListTagsInput `object`
  * MaxResults [ListTagsMaxResults](#listtagsmaxresults)
  * NextToken [NextToken](#nexttoken)
  * ResourceArn **required** [ResourceArn](#resourcearn)

### ListTagsMaxResults
* ListTagsMaxResults `integer`

### ListTagsOutput
* ListTagsOutput `object`
  * NextToken [NextToken](#nexttoken)
  * Tags [TagList](#taglist)

### ListTrainingJobsRequest
* ListTrainingJobsRequest `object`
  * CreationTimeAfter [Timestamp](#timestamp)
  * CreationTimeBefore [Timestamp](#timestamp)
  * LastModifiedTimeAfter [Timestamp](#timestamp)
  * LastModifiedTimeBefore [Timestamp](#timestamp)
  * MaxResults [MaxResults](#maxresults)
  * NameContains [NameContains](#namecontains)
  * NextToken [NextToken](#nexttoken)
  * SortBy [SortBy](#sortby)
  * SortOrder [SortOrder](#sortorder)
  * StatusEquals [TrainingJobStatus](#trainingjobstatus)

### ListTrainingJobsResponse
* ListTrainingJobsResponse `object`
  * NextToken [NextToken](#nexttoken)
  * TrainingJobSummaries **required** [TrainingJobSummaries](#trainingjobsummaries)

### MaxResults
* MaxResults `integer`

### MaxRuntimeInSeconds
* MaxRuntimeInSeconds `integer`

### ModelArn
* ModelArn `string`

### ModelArtifacts
* ModelArtifacts `object`: Provides information about the location that is configured for storing model artifacts. 
  * S3ModelArtifacts **required** [S3Uri](#s3uri)

### ModelName
* ModelName `string`

### ModelNameContains
* ModelNameContains `string`

### ModelSortKey
* ModelSortKey `string` (values: Name, CreationTime)

### ModelSummary
* ModelSummary `object`: Provides summary information about a model.
  * CreationTime **required** [Timestamp](#timestamp)
  * ModelArn **required** [ModelArn](#modelarn)
  * ModelName **required** [ModelName](#modelname)

### ModelSummaryList
* ModelSummaryList `array`
  * items [ModelSummary](#modelsummary)

### NameContains
* NameContains `string`

### NetworkInterfaceId
* NetworkInterfaceId `string`

### NextToken
* NextToken `string`

### NotebookInstanceArn
* NotebookInstanceArn `string`

### NotebookInstanceName
* NotebookInstanceName `string`

### NotebookInstanceNameContains
* NotebookInstanceNameContains `string`

### NotebookInstanceSortKey
* NotebookInstanceSortKey `string` (values: Name, CreationTime, Status)

### NotebookInstanceSortOrder
* NotebookInstanceSortOrder `string` (values: Ascending, Descending)

### NotebookInstanceStatus
* NotebookInstanceStatus `string` (values: Pending, InService, Stopping, Stopped, Failed, Deleting)

### NotebookInstanceSummary
* NotebookInstanceSummary `object`: Provides summary information for an Amazon SageMaker notebook instance.
  * CreationTime [CreationTime](#creationtime)
  * InstanceType [InstanceType](#instancetype)
  * LastModifiedTime [LastModifiedTime](#lastmodifiedtime)
  * NotebookInstanceArn **required** [NotebookInstanceArn](#notebookinstancearn)
  * NotebookInstanceName **required** [NotebookInstanceName](#notebookinstancename)
  * NotebookInstanceStatus [NotebookInstanceStatus](#notebookinstancestatus)
  * Url [NotebookInstanceUrl](#notebookinstanceurl)

### NotebookInstanceSummaryList
* NotebookInstanceSummaryList `array`
  * items [NotebookInstanceSummary](#notebookinstancesummary)

### NotebookInstanceUrl
* NotebookInstanceUrl `string`

### OrderKey
* OrderKey `string` (values: Ascending, Descending)

### OutputDataConfig
* OutputDataConfig `object`: Provides information about how to store model training results (model artifacts).
  * KmsKeyId [KmsKeyId](#kmskeyid)
  * S3OutputPath **required** [S3Uri](#s3uri)

### PaginationToken
* PaginationToken `string`

### ParameterKey
* ParameterKey `string`

### ParameterValue
* ParameterValue `string`

### ProductionVariant
* ProductionVariant `object`: Identifies a model that you want to host and the resources to deploy for hosting it. If you are deploying multiple models, tell Amazon SageMaker how to distribute traffic among the models by specifying variant weights. 
  * InitialInstanceCount **required** [TaskCount](#taskcount)
  * InitialVariantWeight [VariantWeight](#variantweight)
  * InstanceType **required** [ProductionVariantInstanceType](#productionvariantinstancetype)
  * ModelName **required** [ModelName](#modelname)
  * VariantName **required** [VariantName](#variantname)

### ProductionVariantInstanceType
* ProductionVariantInstanceType `string` (values: ml.c4.2xlarge, ml.c4.8xlarge, ml.c4.xlarge, ml.c5.2xlarge, ml.c5.9xlarge, ml.c5.xlarge, ml.m4.xlarge, ml.p2.xlarge, ml.p3.2xlarge, ml.t2.medium)

### ProductionVariantList
* ProductionVariantList `array`
  * items [ProductionVariant](#productionvariant)

### ProductionVariantSummary
* ProductionVariantSummary `object`: Describes weight and capacities for a production variant associated with an endpoint. If you sent a request to the <code>UpdateWeightAndCapacities</code> API and the endpoint status is <code>Updating</code>, you get different desired and current values. 
  * CurrentInstanceCount [TaskCount](#taskcount)
  * CurrentWeight [VariantWeight](#variantweight)
  * DesiredInstanceCount [TaskCount](#taskcount)
  * DesiredWeight [VariantWeight](#variantweight)
  * VariantName **required** [VariantName](#variantname)

### ProductionVariantSummaryList
* ProductionVariantSummaryList `array`
  * items [ProductionVariantSummary](#productionvariantsummary)

### RecordWrapper
* RecordWrapper `string` (values: None, RecordIO)

### ResourceArn
* ResourceArn `string`

### ResourceConfig
* ResourceConfig `object`: Describes the resources, including ML compute instances and ML storage volumes, to use for model training. 
  * InstanceCount **required** [TrainingInstanceCount](#traininginstancecount)
  * InstanceType **required** [TrainingInstanceType](#traininginstancetype)
  * VolumeSizeInGB **required** [VolumeSizeInGB](#volumesizeingb)

### ResourceInUse
* ResourceInUse `object`: Resource being accessed is in use.
  * Message [FailureReason](#failurereason)

### ResourceLimitExceeded
* ResourceLimitExceeded `object`:  You have exceeded an Amazon SageMaker resource limit. For example, you might have too many training jobs created. 
  * Message [FailureReason](#failurereason)

### ResourceNotFound
* ResourceNotFound `object`: Resource being access is not found.
  * Message [FailureReason](#failurereason)

### RoleArn
* RoleArn `string`

### S3DataDistribution
* S3DataDistribution `string` (values: FullyReplicated, ShardedByS3Key)

### S3DataSource
* S3DataSource `object`: Describes the S3 data source.
  * S3DataDistributionType [S3DataDistribution](#s3datadistribution)
  * S3DataType **required** [S3DataType](#s3datatype)
  * S3Uri **required** [S3Uri](#s3uri)

### S3DataType
* S3DataType `string` (values: ManifestFile, S3Prefix)

### S3Uri
* S3Uri `string`

### SecondaryStatus
* SecondaryStatus `string` (values: Starting, Downloading, Training, Uploading, Stopping, Stopped, MaxRuntimeExceeded, Completed, Failed)

### SecurityGroupId
* SecurityGroupId `string`

### SecurityGroupIds
* SecurityGroupIds `array`
  * items [SecurityGroupId](#securitygroupid)

### SessionExpirationDurationInSeconds
* SessionExpirationDurationInSeconds `integer`

### SortBy
* SortBy `string` (values: Name, CreationTime, Status)

### SortOrder
* SortOrder `string` (values: Ascending, Descending)

### StartNotebookInstanceInput
* StartNotebookInstanceInput `object`
  * NotebookInstanceName **required** [NotebookInstanceName](#notebookinstancename)

### StopNotebookInstanceInput
* StopNotebookInstanceInput `object`
  * NotebookInstanceName **required** [NotebookInstanceName](#notebookinstancename)

### StopTrainingJobRequest
* StopTrainingJobRequest `object`
  * TrainingJobName **required** [TrainingJobName](#trainingjobname)

### StoppingCondition
* StoppingCondition `object`: <p>Specifies how long model training can run. When model training reaches the limit, Amazon SageMaker ends the training job. Use this API to cap model training cost.</p> <p>To stop a job, Amazon SageMaker sends the algorithm the <code>SIGTERM</code> signal, which delays job termination for120 seconds. Algorithms might use this 120-second window to save the model artifacts, so the results of training is not lost. </p> <p>Training algorithms provided by Amazon SageMaker automatically saves the intermediate results of a model training job (it is best effort case, as model might not be ready to save as some stages, for example training just started). This intermediate data is a valid model artifact. You can use it to create a model (<code>CreateModel</code>). </p>
  * MaxRuntimeInSeconds [MaxRuntimeInSeconds](#maxruntimeinseconds)

### SubnetId
* SubnetId `string`

### Tag
* Tag `object`: Describes a tag. 
  * Key **required** [TagKey](#tagkey)
  * Value **required** [TagValue](#tagvalue)

### TagKey
* TagKey `string`

### TagKeyList
* TagKeyList `array`
  * items [TagKey](#tagkey)

### TagList
* TagList `array`
  * items [Tag](#tag)

### TagValue
* TagValue `string`

### TaskCount
* TaskCount `integer`

### Timestamp
* Timestamp `string`

### TrainingInputMode
* TrainingInputMode `string` (values: Pipe, File)

### TrainingInstanceCount
* TrainingInstanceCount `integer`

### TrainingInstanceType
* TrainingInstanceType `string` (values: ml.m4.xlarge, ml.m4.4xlarge, ml.m4.10xlarge, ml.c4.xlarge, ml.c4.2xlarge, ml.c4.8xlarge, ml.p2.xlarge, ml.p2.8xlarge, ml.p2.16xlarge, ml.p3.2xlarge, ml.p3.8xlarge, ml.p3.16xlarge, ml.c5.xlarge, ml.c5.2xlarge, ml.c5.4xlarge, ml.c5.9xlarge, ml.c5.18xlarge)

### TrainingJobArn
* TrainingJobArn `string`

### TrainingJobName
* TrainingJobName `string`

### TrainingJobStatus
* TrainingJobStatus `string` (values: InProgress, Completed, Failed, Stopping, Stopped)

### TrainingJobSummaries
* TrainingJobSummaries `array`
  * items [TrainingJobSummary](#trainingjobsummary)

### TrainingJobSummary
* TrainingJobSummary `object`: Provides summary information about a training job.
  * CreationTime **required** [Timestamp](#timestamp)
  * LastModifiedTime [Timestamp](#timestamp)
  * TrainingEndTime [Timestamp](#timestamp)
  * TrainingJobArn **required** [TrainingJobArn](#trainingjobarn)
  * TrainingJobName **required** [TrainingJobName](#trainingjobname)
  * TrainingJobStatus **required** [TrainingJobStatus](#trainingjobstatus)

### UpdateEndpointInput
* UpdateEndpointInput `object`
  * EndpointConfigName **required** [EndpointConfigName](#endpointconfigname)
  * EndpointName **required** [EndpointName](#endpointname)

### UpdateEndpointOutput
* UpdateEndpointOutput `object`
  * EndpointArn **required** [EndpointArn](#endpointarn)

### UpdateEndpointWeightsAndCapacitiesInput
* UpdateEndpointWeightsAndCapacitiesInput `object`
  * DesiredWeightsAndCapacities **required** [DesiredWeightAndCapacityList](#desiredweightandcapacitylist)
  * EndpointName **required** [EndpointName](#endpointname)

### UpdateEndpointWeightsAndCapacitiesOutput
* UpdateEndpointWeightsAndCapacitiesOutput `object`
  * EndpointArn **required** [EndpointArn](#endpointarn)

### UpdateNotebookInstanceInput
* UpdateNotebookInstanceInput `object`
  * InstanceType [InstanceType](#instancetype)
  * NotebookInstanceName **required** [NotebookInstanceName](#notebookinstancename)
  * RoleArn [RoleArn](#rolearn)

### UpdateNotebookInstanceOutput
* UpdateNotebookInstanceOutput `object`

### Url
* Url `string`

### VariantName
* VariantName `string`

### VariantWeight
* VariantWeight `number`

### VolumeSizeInGB
* VolumeSizeInGB `integer`


