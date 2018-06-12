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
  * KmsKeyId [KmsKeyId](#kmskeyid)
  * ProductionVariants **required** [ProductionVariantList](#productionvariantlist)
  * Tags [TagList](#taglist)

#### Output
* output [CreateEndpointConfigOutput](#createendpointconfigoutput)

### CreateHyperParameterTuningJob



```js
amazonaws_sagemaker.CreateHyperParameterTuningJob({
  "HyperParameterTuningJobName": "",
  "HyperParameterTuningJobConfig": {
    "Strategy": "",
    "HyperParameterTuningJobObjective": {
      "Type": "",
      "MetricName": ""
    },
    "ResourceLimits": {
      "MaxNumberOfTrainingJobs": 0,
      "MaxParallelTrainingJobs": 0
    },
    "ParameterRanges": {}
  },
  "TrainingJobDefinition": {
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
  }
}, context)
```

#### Input
* input `object`
  * HyperParameterTuningJobConfig **required** [HyperParameterTuningJobConfig](#hyperparametertuningjobconfig)
  * HyperParameterTuningJobName **required** [HyperParameterTuningJobName](#hyperparametertuningjobname)
  * Tags [TagList](#taglist)
  * TrainingJobDefinition **required** [HyperParameterTrainingJobDefinition](#hyperparametertrainingjobdefinition)

#### Output
* output [CreateHyperParameterTuningJobResponse](#createhyperparametertuningjobresponse)

### CreateModel



```js
amazonaws_sagemaker.CreateModel({
  "ModelName": "",
  "PrimaryContainer": {
    "Image": ""
  },
  "ExecutionRoleArn": ""
}, context)
```

#### Input
* input `object`
  * ExecutionRoleArn **required** [RoleArn](#rolearn)
  * ModelName **required** [ModelName](#modelname)
  * PrimaryContainer **required** [ContainerDefinition](#containerdefinition)
  * Tags [TagList](#taglist)
  * VpcConfig [VpcConfig](#vpcconfig)

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
  * DirectInternetAccess [DirectInternetAccess](#directinternetaccess)
  * InstanceType **required** [InstanceType](#instancetype)
  * KmsKeyId [KmsKeyId](#kmskeyid)
  * LifecycleConfigName [NotebookInstanceLifecycleConfigName](#notebookinstancelifecycleconfigname)
  * NotebookInstanceName **required** [NotebookInstanceName](#notebookinstancename)
  * RoleArn **required** [RoleArn](#rolearn)
  * SecurityGroupIds [SecurityGroupIds](#securitygroupids)
  * SubnetId [SubnetId](#subnetid)
  * Tags [TagList](#taglist)

#### Output
* output [CreateNotebookInstanceOutput](#createnotebookinstanceoutput)

### CreateNotebookInstanceLifecycleConfig



```js
amazonaws_sagemaker.CreateNotebookInstanceLifecycleConfig({
  "NotebookInstanceLifecycleConfigName": ""
}, context)
```

#### Input
* input `object`
  * NotebookInstanceLifecycleConfigName **required** [NotebookInstanceLifecycleConfigName](#notebookinstancelifecycleconfigname)
  * OnCreate [NotebookInstanceLifecycleConfigList](#notebookinstancelifecycleconfiglist)
  * OnStart [NotebookInstanceLifecycleConfigList](#notebookinstancelifecycleconfiglist)

#### Output
* output [CreateNotebookInstanceLifecycleConfigOutput](#createnotebookinstancelifecycleconfigoutput)

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
  * VpcConfig [VpcConfig](#vpcconfig)

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

### DeleteNotebookInstanceLifecycleConfig



```js
amazonaws_sagemaker.DeleteNotebookInstanceLifecycleConfig({
  "NotebookInstanceLifecycleConfigName": ""
}, context)
```

#### Input
* input `object`
  * NotebookInstanceLifecycleConfigName **required** [NotebookInstanceLifecycleConfigName](#notebookinstancelifecycleconfigname)

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

### DescribeHyperParameterTuningJob



```js
amazonaws_sagemaker.DescribeHyperParameterTuningJob({
  "HyperParameterTuningJobName": ""
}, context)
```

#### Input
* input `object`
  * HyperParameterTuningJobName **required** [HyperParameterTuningJobName](#hyperparametertuningjobname)

#### Output
* output [DescribeHyperParameterTuningJobResponse](#describehyperparametertuningjobresponse)

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

### DescribeNotebookInstanceLifecycleConfig



```js
amazonaws_sagemaker.DescribeNotebookInstanceLifecycleConfig({
  "NotebookInstanceLifecycleConfigName": ""
}, context)
```

#### Input
* input `object`
  * NotebookInstanceLifecycleConfigName **required** [NotebookInstanceLifecycleConfigName](#notebookinstancelifecycleconfigname)

#### Output
* output [DescribeNotebookInstanceLifecycleConfigOutput](#describenotebookinstancelifecycleconfigoutput)

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

### ListHyperParameterTuningJobs



```js
amazonaws_sagemaker.ListHyperParameterTuningJobs({}, context)
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
  * SortBy [HyperParameterTuningJobSortByOptions](#hyperparametertuningjobsortbyoptions)
  * SortOrder [SortOrder](#sortorder)
  * StatusEquals [HyperParameterTuningJobStatus](#hyperparametertuningjobstatus)

#### Output
* output [ListHyperParameterTuningJobsResponse](#listhyperparametertuningjobsresponse)

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

### ListNotebookInstanceLifecycleConfigs



```js
amazonaws_sagemaker.ListNotebookInstanceLifecycleConfigs({}, context)
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
  * NameContains [NotebookInstanceLifecycleConfigNameContains](#notebookinstancelifecycleconfignamecontains)
  * NextToken [NextToken](#nexttoken)
  * SortBy [NotebookInstanceLifecycleConfigSortKey](#notebookinstancelifecycleconfigsortkey)
  * SortOrder [NotebookInstanceLifecycleConfigSortOrder](#notebookinstancelifecycleconfigsortorder)

#### Output
* output [ListNotebookInstanceLifecycleConfigsOutput](#listnotebookinstancelifecycleconfigsoutput)

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
  * NotebookInstanceLifecycleConfigNameContains [NotebookInstanceLifecycleConfigName](#notebookinstancelifecycleconfigname)
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

### ListTrainingJobsForHyperParameterTuningJob



```js
amazonaws_sagemaker.ListTrainingJobsForHyperParameterTuningJob({
  "HyperParameterTuningJobName": ""
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * HyperParameterTuningJobName **required** [HyperParameterTuningJobName](#hyperparametertuningjobname)
  * MaxResults [MaxResults](#maxresults)
  * NextToken [NextToken](#nexttoken)
  * SortBy [TrainingJobSortByOptions](#trainingjobsortbyoptions)
  * SortOrder [SortOrder](#sortorder)
  * StatusEquals [TrainingJobStatus](#trainingjobstatus)

#### Output
* output [ListTrainingJobsForHyperParameterTuningJobResponse](#listtrainingjobsforhyperparametertuningjobresponse)

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

### StopHyperParameterTuningJob



```js
amazonaws_sagemaker.StopHyperParameterTuningJob({
  "HyperParameterTuningJobName": ""
}, context)
```

#### Input
* input `object`
  * HyperParameterTuningJobName **required** [HyperParameterTuningJobName](#hyperparametertuningjobname)

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

### UpdateNotebookInstanceLifecycleConfig



```js
amazonaws_sagemaker.UpdateNotebookInstanceLifecycleConfig({
  "NotebookInstanceLifecycleConfigName": ""
}, context)
```

#### Input
* input `object`
  * NotebookInstanceLifecycleConfigName **required** [NotebookInstanceLifecycleConfigName](#notebookinstancelifecycleconfigname)
  * OnCreate [NotebookInstanceLifecycleConfigList](#notebookinstancelifecycleconfiglist)
  * OnStart [NotebookInstanceLifecycleConfigList](#notebookinstancelifecycleconfiglist)

#### Output
* output [UpdateNotebookInstanceLifecycleConfigOutput](#updatenotebookinstancelifecycleconfigoutput)



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
* AlgorithmSpecification `object`: <p>Specifies the training algorithm to use in a <a href="http://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateTrainingJob.html">CreateTrainingJob</a> request.</p> <p>For more information about algorithms provided by Amazon SageMaker, see <a href="http://docs.aws.amazon.com/sagemaker/latest/dg/algos.html">Algorithms</a>. For information about using your own algorithms, see <a>your-algorithms</a>. </p>
  * TrainingImage **required** [AlgorithmImage](#algorithmimage)
  * TrainingInputMode **required** [TrainingInputMode](#traininginputmode)

### CategoricalParameterRange
* CategoricalParameterRange `object`: A list of categorical hyperparameters to tune.
  * Name **required** [ParameterKey](#parameterkey)
  * Values **required** [ParameterValues](#parametervalues)

### CategoricalParameterRanges
* CategoricalParameterRanges `array`
  * items [CategoricalParameterRange](#categoricalparameterrange)

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

### ContainerHostname
* ContainerHostname `string`

### ContentType
* ContentType `string`

### ContinuousParameterRange
* ContinuousParameterRange `object`: A list of continuous hyperparameters to tune.
  * MaxValue **required** [ParameterValue](#parametervalue)
  * MinValue **required** [ParameterValue](#parametervalue)
  * Name **required** [ParameterKey](#parameterkey)

### ContinuousParameterRanges
* ContinuousParameterRanges `array`
  * items [ContinuousParameterRange](#continuousparameterrange)

### CreateEndpointConfigInput
* CreateEndpointConfigInput `object`
  * EndpointConfigName **required** [EndpointConfigName](#endpointconfigname)
  * KmsKeyId [KmsKeyId](#kmskeyid)
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

### CreateHyperParameterTuningJobRequest
* CreateHyperParameterTuningJobRequest `object`
  * HyperParameterTuningJobConfig **required** [HyperParameterTuningJobConfig](#hyperparametertuningjobconfig)
  * HyperParameterTuningJobName **required** [HyperParameterTuningJobName](#hyperparametertuningjobname)
  * Tags [TagList](#taglist)
  * TrainingJobDefinition **required** [HyperParameterTrainingJobDefinition](#hyperparametertrainingjobdefinition)

### CreateHyperParameterTuningJobResponse
* CreateHyperParameterTuningJobResponse `object`
  * HyperParameterTuningJobArn **required** [HyperParameterTuningJobArn](#hyperparametertuningjobarn)

### CreateModelInput
* CreateModelInput `object`
  * ExecutionRoleArn **required** [RoleArn](#rolearn)
  * ModelName **required** [ModelName](#modelname)
  * PrimaryContainer **required** [ContainerDefinition](#containerdefinition)
  * Tags [TagList](#taglist)
  * VpcConfig [VpcConfig](#vpcconfig)

### CreateModelOutput
* CreateModelOutput `object`
  * ModelArn **required** [ModelArn](#modelarn)

### CreateNotebookInstanceInput
* CreateNotebookInstanceInput `object`
  * DirectInternetAccess [DirectInternetAccess](#directinternetaccess)
  * InstanceType **required** [InstanceType](#instancetype)
  * KmsKeyId [KmsKeyId](#kmskeyid)
  * LifecycleConfigName [NotebookInstanceLifecycleConfigName](#notebookinstancelifecycleconfigname)
  * NotebookInstanceName **required** [NotebookInstanceName](#notebookinstancename)
  * RoleArn **required** [RoleArn](#rolearn)
  * SecurityGroupIds [SecurityGroupIds](#securitygroupids)
  * SubnetId [SubnetId](#subnetid)
  * Tags [TagList](#taglist)

### CreateNotebookInstanceLifecycleConfigInput
* CreateNotebookInstanceLifecycleConfigInput `object`
  * NotebookInstanceLifecycleConfigName **required** [NotebookInstanceLifecycleConfigName](#notebookinstancelifecycleconfigname)
  * OnCreate [NotebookInstanceLifecycleConfigList](#notebookinstancelifecycleconfiglist)
  * OnStart [NotebookInstanceLifecycleConfigList](#notebookinstancelifecycleconfiglist)

### CreateNotebookInstanceLifecycleConfigOutput
* CreateNotebookInstanceLifecycleConfigOutput `object`
  * NotebookInstanceLifecycleConfigArn [NotebookInstanceLifecycleConfigArn](#notebookinstancelifecycleconfigarn)

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
  * VpcConfig [VpcConfig](#vpcconfig)

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

### DeleteNotebookInstanceLifecycleConfigInput
* DeleteNotebookInstanceLifecycleConfigInput `object`
  * NotebookInstanceLifecycleConfigName **required** [NotebookInstanceLifecycleConfigName](#notebookinstancelifecycleconfigname)

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
  * KmsKeyId [KmsKeyId](#kmskeyid)
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

### DescribeHyperParameterTuningJobRequest
* DescribeHyperParameterTuningJobRequest `object`
  * HyperParameterTuningJobName **required** [HyperParameterTuningJobName](#hyperparametertuningjobname)

### DescribeHyperParameterTuningJobResponse
* DescribeHyperParameterTuningJobResponse `object`
  * BestTrainingJob [HyperParameterTrainingJobSummary](#hyperparametertrainingjobsummary)
  * CreationTime **required** [Timestamp](#timestamp)
  * FailureReason [FailureReason](#failurereason)
  * HyperParameterTuningEndTime [Timestamp](#timestamp)
  * HyperParameterTuningJobArn **required** [HyperParameterTuningJobArn](#hyperparametertuningjobarn)
  * HyperParameterTuningJobConfig **required** [HyperParameterTuningJobConfig](#hyperparametertuningjobconfig)
  * HyperParameterTuningJobName **required** [HyperParameterTuningJobName](#hyperparametertuningjobname)
  * HyperParameterTuningJobStatus **required** [HyperParameterTuningJobStatus](#hyperparametertuningjobstatus)
  * LastModifiedTime [Timestamp](#timestamp)
  * ObjectiveStatusCounters **required** [ObjectiveStatusCounters](#objectivestatuscounters)
  * TrainingJobDefinition **required** [HyperParameterTrainingJobDefinition](#hyperparametertrainingjobdefinition)
  * TrainingJobStatusCounters **required** [TrainingJobStatusCounters](#trainingjobstatuscounters)

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
  * VpcConfig [VpcConfig](#vpcconfig)

### DescribeNotebookInstanceInput
* DescribeNotebookInstanceInput `object`
  * NotebookInstanceName **required** [NotebookInstanceName](#notebookinstancename)

### DescribeNotebookInstanceLifecycleConfigInput
* DescribeNotebookInstanceLifecycleConfigInput `object`
  * NotebookInstanceLifecycleConfigName **required** [NotebookInstanceLifecycleConfigName](#notebookinstancelifecycleconfigname)

### DescribeNotebookInstanceLifecycleConfigOutput
* DescribeNotebookInstanceLifecycleConfigOutput `object`
  * CreationTime [CreationTime](#creationtime)
  * LastModifiedTime [LastModifiedTime](#lastmodifiedtime)
  * NotebookInstanceLifecycleConfigArn [NotebookInstanceLifecycleConfigArn](#notebookinstancelifecycleconfigarn)
  * NotebookInstanceLifecycleConfigName [NotebookInstanceLifecycleConfigName](#notebookinstancelifecycleconfigname)
  * OnCreate [NotebookInstanceLifecycleConfigList](#notebookinstancelifecycleconfiglist)
  * OnStart [NotebookInstanceLifecycleConfigList](#notebookinstancelifecycleconfiglist)

### DescribeNotebookInstanceOutput
* DescribeNotebookInstanceOutput `object`
  * CreationTime [CreationTime](#creationtime)
  * DirectInternetAccess [DirectInternetAccess](#directinternetaccess)
  * FailureReason [FailureReason](#failurereason)
  * InstanceType [InstanceType](#instancetype)
  * KmsKeyId [KmsKeyId](#kmskeyid)
  * LastModifiedTime [LastModifiedTime](#lastmodifiedtime)
  * NetworkInterfaceId [NetworkInterfaceId](#networkinterfaceid)
  * NotebookInstanceArn [NotebookInstanceArn](#notebookinstancearn)
  * NotebookInstanceLifecycleConfigName [NotebookInstanceLifecycleConfigName](#notebookinstancelifecycleconfigname)
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
  * TuningJobArn [HyperParameterTuningJobArn](#hyperparametertuningjobarn)
  * VpcConfig [VpcConfig](#vpcconfig)

### DesiredWeightAndCapacity
* DesiredWeightAndCapacity `object`: Specifies weight and capacity values for a production variant.
  * DesiredInstanceCount [TaskCount](#taskcount)
  * DesiredWeight [VariantWeight](#variantweight)
  * VariantName **required** [VariantName](#variantname)

### DesiredWeightAndCapacityList
* DesiredWeightAndCapacityList `array`
  * items [DesiredWeightAndCapacity](#desiredweightandcapacity)

### DirectInternetAccess
* DirectInternetAccess `string` (values: Enabled, Disabled)

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

### FinalHyperParameterTuningJobObjectiveMetric
* FinalHyperParameterTuningJobObjectiveMetric `object`: Shows the final value for the objective metric for a training job that was launched by a hyperparameter tuning job. You define the objective metric in the <code>HyperParameterTuningJobObjective</code> parameter of <a>HyperParameterTuningJobConfig</a>.
  * MetricName **required** [MetricName](#metricname)
  * Type [HyperParameterTuningJobObjectiveType](#hyperparametertuningjobobjectivetype)
  * Value **required** [MetricValue](#metricvalue)

### HyperParameterAlgorithmSpecification
* HyperParameterAlgorithmSpecification `object`: Specifies which training algorithm to use for training jobs that a hyperparameter tuning job launches and the metrics to monitor.
  * MetricDefinitions [MetricDefinitionList](#metricdefinitionlist)
  * TrainingImage **required** [AlgorithmImage](#algorithmimage)
  * TrainingInputMode **required** [TrainingInputMode](#traininginputmode)

### HyperParameterTrainingJobDefinition
* HyperParameterTrainingJobDefinition `object`: Defines the training jobs launched by a hyperparameter tuning job.
  * AlgorithmSpecification **required** [HyperParameterAlgorithmSpecification](#hyperparameteralgorithmspecification)
  * InputDataConfig **required** [InputDataConfig](#inputdataconfig)
  * OutputDataConfig **required** [OutputDataConfig](#outputdataconfig)
  * ResourceConfig **required** [ResourceConfig](#resourceconfig)
  * RoleArn **required** [RoleArn](#rolearn)
  * StaticHyperParameters [HyperParameters](#hyperparameters)
  * StoppingCondition **required** [StoppingCondition](#stoppingcondition)
  * VpcConfig [VpcConfig](#vpcconfig)

### HyperParameterTrainingJobSummaries
* HyperParameterTrainingJobSummaries `array`
  * items [HyperParameterTrainingJobSummary](#hyperparametertrainingjobsummary)

### HyperParameterTrainingJobSummary
* HyperParameterTrainingJobSummary `object`: Specifies summary information about a training job.
  * CreationTime **required** [Timestamp](#timestamp)
  * FailureReason [FailureReason](#failurereason)
  * FinalHyperParameterTuningJobObjectiveMetric [FinalHyperParameterTuningJobObjectiveMetric](#finalhyperparametertuningjobobjectivemetric)
  * ObjectiveStatus [ObjectiveStatus](#objectivestatus)
  * TrainingEndTime [Timestamp](#timestamp)
  * TrainingJobArn **required** [TrainingJobArn](#trainingjobarn)
  * TrainingJobName **required** [TrainingJobName](#trainingjobname)
  * TrainingJobStatus **required** [TrainingJobStatus](#trainingjobstatus)
  * TrainingStartTime [Timestamp](#timestamp)
  * TunedHyperParameters **required** [HyperParameters](#hyperparameters)

### HyperParameterTuningJobArn
* HyperParameterTuningJobArn `string`

### HyperParameterTuningJobConfig
* HyperParameterTuningJobConfig `object`: Configures a hyperparameter tuning job.
  * HyperParameterTuningJobObjective **required** [HyperParameterTuningJobObjective](#hyperparametertuningjobobjective)
  * ParameterRanges **required** [ParameterRanges](#parameterranges)
  * ResourceLimits **required** [ResourceLimits](#resourcelimits)
  * Strategy **required** [HyperParameterTuningJobStrategyType](#hyperparametertuningjobstrategytype)

### HyperParameterTuningJobName
* HyperParameterTuningJobName `string`

### HyperParameterTuningJobObjective
* HyperParameterTuningJobObjective `object`: Defines the objective metric for a hyperparameter tuning job. Hyperparameter tuning uses the value of this metric to evaluate the training jobs it launches, and returns the training job that results in either the highest or lowest value for this metric, depending on the value you specify for the <code>Type</code> parameter.
  * MetricName **required** [MetricName](#metricname)
  * Type **required** [HyperParameterTuningJobObjectiveType](#hyperparametertuningjobobjectivetype)

### HyperParameterTuningJobObjectiveType
* HyperParameterTuningJobObjectiveType `string` (values: Maximize, Minimize)

### HyperParameterTuningJobSortByOptions
* HyperParameterTuningJobSortByOptions `string` (values: Name, Status, CreationTime)

### HyperParameterTuningJobStatus
* HyperParameterTuningJobStatus `string` (values: Completed, InProgress, Failed, Stopped, Stopping)

### HyperParameterTuningJobStrategyType
* HyperParameterTuningJobStrategyType `string` (values: Bayesian): The strategy hyperparameter tuning uses to find the best combination of hyperparameters for your model. Currently, the only supported value is <code>Bayesian</code>.

### HyperParameterTuningJobSummaries
* HyperParameterTuningJobSummaries `array`
  * items [HyperParameterTuningJobSummary](#hyperparametertuningjobsummary)

### HyperParameterTuningJobSummary
* HyperParameterTuningJobSummary `object`: Provides summary information about a hyperparameter tuning job.
  * CreationTime **required** [Timestamp](#timestamp)
  * HyperParameterTuningEndTime [Timestamp](#timestamp)
  * HyperParameterTuningJobArn **required** [HyperParameterTuningJobArn](#hyperparametertuningjobarn)
  * HyperParameterTuningJobName **required** [HyperParameterTuningJobName](#hyperparametertuningjobname)
  * HyperParameterTuningJobStatus **required** [HyperParameterTuningJobStatus](#hyperparametertuningjobstatus)
  * LastModifiedTime [Timestamp](#timestamp)
  * ObjectiveStatusCounters **required** [ObjectiveStatusCounters](#objectivestatuscounters)
  * ResourceLimits [ResourceLimits](#resourcelimits)
  * Strategy **required** [HyperParameterTuningJobStrategyType](#hyperparametertuningjobstrategytype)
  * TrainingJobStatusCounters **required** [TrainingJobStatusCounters](#trainingjobstatuscounters)

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
* InstanceType `string` (values: ml.t2.medium, ml.t2.large, ml.t2.xlarge, ml.t2.2xlarge, ml.m4.xlarge, ml.m4.2xlarge, ml.m4.4xlarge, ml.m4.10xlarge, ml.m4.16xlarge, ml.p2.xlarge, ml.p2.8xlarge, ml.p2.16xlarge, ml.p3.2xlarge, ml.p3.8xlarge, ml.p3.16xlarge)

### IntegerParameterRange
* IntegerParameterRange `object`: For a hyperparameter of the integer type, specifies the range that a hyperparameter tuning job searches.
  * MaxValue **required** [ParameterValue](#parametervalue)
  * MinValue **required** [ParameterValue](#parametervalue)
  * Name **required** [ParameterKey](#parameterkey)

### IntegerParameterRanges
* IntegerParameterRanges `array`
  * items [IntegerParameterRange](#integerparameterrange)

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

### ListHyperParameterTuningJobsRequest
* ListHyperParameterTuningJobsRequest `object`
  * CreationTimeAfter [Timestamp](#timestamp)
  * CreationTimeBefore [Timestamp](#timestamp)
  * LastModifiedTimeAfter [Timestamp](#timestamp)
  * LastModifiedTimeBefore [Timestamp](#timestamp)
  * MaxResults [MaxResults](#maxresults)
  * NameContains [NameContains](#namecontains)
  * NextToken [NextToken](#nexttoken)
  * SortBy [HyperParameterTuningJobSortByOptions](#hyperparametertuningjobsortbyoptions)
  * SortOrder [SortOrder](#sortorder)
  * StatusEquals [HyperParameterTuningJobStatus](#hyperparametertuningjobstatus)

### ListHyperParameterTuningJobsResponse
* ListHyperParameterTuningJobsResponse `object`
  * HyperParameterTuningJobSummaries **required** [HyperParameterTuningJobSummaries](#hyperparametertuningjobsummaries)
  * NextToken [NextToken](#nexttoken)

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

### ListNotebookInstanceLifecycleConfigsInput
* ListNotebookInstanceLifecycleConfigsInput `object`
  * CreationTimeAfter [CreationTime](#creationtime)
  * CreationTimeBefore [CreationTime](#creationtime)
  * LastModifiedTimeAfter [LastModifiedTime](#lastmodifiedtime)
  * LastModifiedTimeBefore [LastModifiedTime](#lastmodifiedtime)
  * MaxResults [MaxResults](#maxresults)
  * NameContains [NotebookInstanceLifecycleConfigNameContains](#notebookinstancelifecycleconfignamecontains)
  * NextToken [NextToken](#nexttoken)
  * SortBy [NotebookInstanceLifecycleConfigSortKey](#notebookinstancelifecycleconfigsortkey)
  * SortOrder [NotebookInstanceLifecycleConfigSortOrder](#notebookinstancelifecycleconfigsortorder)

### ListNotebookInstanceLifecycleConfigsOutput
* ListNotebookInstanceLifecycleConfigsOutput `object`
  * NextToken [NextToken](#nexttoken)
  * NotebookInstanceLifecycleConfigs [NotebookInstanceLifecycleConfigSummaryList](#notebookinstancelifecycleconfigsummarylist)

### ListNotebookInstancesInput
* ListNotebookInstancesInput `object`
  * CreationTimeAfter [CreationTime](#creationtime)
  * CreationTimeBefore [CreationTime](#creationtime)
  * LastModifiedTimeAfter [LastModifiedTime](#lastmodifiedtime)
  * LastModifiedTimeBefore [LastModifiedTime](#lastmodifiedtime)
  * MaxResults [MaxResults](#maxresults)
  * NameContains [NotebookInstanceNameContains](#notebookinstancenamecontains)
  * NextToken [NextToken](#nexttoken)
  * NotebookInstanceLifecycleConfigNameContains [NotebookInstanceLifecycleConfigName](#notebookinstancelifecycleconfigname)
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

### ListTrainingJobsForHyperParameterTuningJobRequest
* ListTrainingJobsForHyperParameterTuningJobRequest `object`
  * HyperParameterTuningJobName **required** [HyperParameterTuningJobName](#hyperparametertuningjobname)
  * MaxResults [MaxResults](#maxresults)
  * NextToken [NextToken](#nexttoken)
  * SortBy [TrainingJobSortByOptions](#trainingjobsortbyoptions)
  * SortOrder [SortOrder](#sortorder)
  * StatusEquals [TrainingJobStatus](#trainingjobstatus)

### ListTrainingJobsForHyperParameterTuningJobResponse
* ListTrainingJobsForHyperParameterTuningJobResponse `object`
  * NextToken [NextToken](#nexttoken)
  * TrainingJobSummaries **required** [HyperParameterTrainingJobSummaries](#hyperparametertrainingjobsummaries)

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

### MaxNumberOfTrainingJobs
* MaxNumberOfTrainingJobs `integer`

### MaxParallelTrainingJobs
* MaxParallelTrainingJobs `integer`

### MaxResults
* MaxResults `integer`

### MaxRuntimeInSeconds
* MaxRuntimeInSeconds `integer`

### MetricDefinition
* MetricDefinition `object`: Specifies a metric that the training algorithm writes to <code>stderr</code> or <code>stdout</code>. Amazon SageMakerHyperparamter tuning captures all defined metrics. You specify one metric that a hyperparameter tuning job uses as its objective metric to choose the best training job.
  * Name **required** [MetricName](#metricname)
  * Regex **required** [MetricRegex](#metricregex)

### MetricDefinitionList
* MetricDefinitionList `array`
  * items [MetricDefinition](#metricdefinition)

### MetricName
* MetricName `string`

### MetricRegex
* MetricRegex `string`

### MetricValue
* MetricValue `number`

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

### NotebookInstanceLifecycleConfigArn
* NotebookInstanceLifecycleConfigArn `string`

### NotebookInstanceLifecycleConfigContent
* NotebookInstanceLifecycleConfigContent `string`

### NotebookInstanceLifecycleConfigList
* NotebookInstanceLifecycleConfigList `array`
  * items [NotebookInstanceLifecycleHook](#notebookinstancelifecyclehook)

### NotebookInstanceLifecycleConfigName
* NotebookInstanceLifecycleConfigName `string`

### NotebookInstanceLifecycleConfigNameContains
* NotebookInstanceLifecycleConfigNameContains `string`

### NotebookInstanceLifecycleConfigSortKey
* NotebookInstanceLifecycleConfigSortKey `string` (values: Name, CreationTime, LastModifiedTime)

### NotebookInstanceLifecycleConfigSortOrder
* NotebookInstanceLifecycleConfigSortOrder `string` (values: Ascending, Descending)

### NotebookInstanceLifecycleConfigSummary
* NotebookInstanceLifecycleConfigSummary `object`: Provides a summary of a notebook instance lifecycle configuration.
  * CreationTime [CreationTime](#creationtime)
  * LastModifiedTime [LastModifiedTime](#lastmodifiedtime)
  * NotebookInstanceLifecycleConfigArn **required** [NotebookInstanceLifecycleConfigArn](#notebookinstancelifecycleconfigarn)
  * NotebookInstanceLifecycleConfigName **required** [NotebookInstanceLifecycleConfigName](#notebookinstancelifecycleconfigname)

### NotebookInstanceLifecycleConfigSummaryList
* NotebookInstanceLifecycleConfigSummaryList `array`
  * items [NotebookInstanceLifecycleConfigSummary](#notebookinstancelifecycleconfigsummary)

### NotebookInstanceLifecycleHook
* NotebookInstanceLifecycleHook `object`: <p>Contains the notebook instance lifecycle configuration script.</p> <p>Each lifecycle configuration script has a limit of 16384 characters.</p> <p>The value of the <code>$PATH</code> environment variable that is available to both scripts is <code>/sbin:bin:/usr/sbin:/usr/bin</code>.</p> <p>View CloudWatch Logs for notebook instance lifecycle configurations in log group <code>/aws/sagemaker/NotebookInstances</code> in log stream <code>[notebook-instance-name]/[LifecycleConfigHook]</code>.</p> <p>Lifecycle configuration scripts cannot run for longer than 5 minutes. If a script runs for longer than 5 minutes, it fails and the notebook instance is not created or started.</p> <p>For information about notebook instance lifestyle configurations, see <a>notebook-lifecycle-config</a>.</p>
  * Content [NotebookInstanceLifecycleConfigContent](#notebookinstancelifecycleconfigcontent)

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
  * NotebookInstanceLifecycleConfigName [NotebookInstanceLifecycleConfigName](#notebookinstancelifecycleconfigname)
  * NotebookInstanceName **required** [NotebookInstanceName](#notebookinstancename)
  * NotebookInstanceStatus [NotebookInstanceStatus](#notebookinstancestatus)
  * Url [NotebookInstanceUrl](#notebookinstanceurl)

### NotebookInstanceSummaryList
* NotebookInstanceSummaryList `array`
  * items [NotebookInstanceSummary](#notebookinstancesummary)

### NotebookInstanceUrl
* NotebookInstanceUrl `string`

### ObjectiveStatus
* ObjectiveStatus `string` (values: Succeeded, Pending, Failed)

### ObjectiveStatusCounter
* ObjectiveStatusCounter `integer`

### ObjectiveStatusCounters
* ObjectiveStatusCounters `object`: Specifies the number of training jobs that this hyperparameter tuning job launched, categorized by the status of their objective metric. The objective metric status shows whether the final objective metric for the training job has been evaluated by the tuning job and used in the hyperparameter tuning process.
  * Failed [ObjectiveStatusCounter](#objectivestatuscounter)
  * Pending [ObjectiveStatusCounter](#objectivestatuscounter)
  * Succeeded [ObjectiveStatusCounter](#objectivestatuscounter)

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

### ParameterRanges
* ParameterRanges `object`: Specifies ranges of integer, continuous, and categorical hyperparameters that a hyperparameter tuning job searches.
  * CategoricalParameterRanges [CategoricalParameterRanges](#categoricalparameterranges)
  * ContinuousParameterRanges [ContinuousParameterRanges](#continuousparameterranges)
  * IntegerParameterRanges [IntegerParameterRanges](#integerparameterranges)

### ParameterValue
* ParameterValue `string`

### ParameterValues
* ParameterValues `array`
  * items [ParameterValue](#parametervalue)

### ProductionVariant
* ProductionVariant `object`: Identifies a model that you want to host and the resources to deploy for hosting it. If you are deploying multiple models, tell Amazon SageMaker how to distribute traffic among the models by specifying variant weights. 
  * InitialInstanceCount **required** [TaskCount](#taskcount)
  * InitialVariantWeight [VariantWeight](#variantweight)
  * InstanceType **required** [ProductionVariantInstanceType](#productionvariantinstancetype)
  * ModelName **required** [ModelName](#modelname)
  * VariantName **required** [VariantName](#variantname)

### ProductionVariantInstanceType
* ProductionVariantInstanceType `string` (values: ml.t2.medium, ml.t2.large, ml.t2.xlarge, ml.t2.2xlarge, ml.m4.xlarge, ml.m4.2xlarge, ml.m4.4xlarge, ml.m4.10xlarge, ml.m4.16xlarge, ml.m5.large, ml.m5.xlarge, ml.m5.2xlarge, ml.m5.4xlarge, ml.m5.12xlarge, ml.m5.24xlarge, ml.c4.large, ml.c4.xlarge, ml.c4.2xlarge, ml.c4.4xlarge, ml.c4.8xlarge, ml.p2.xlarge, ml.p2.8xlarge, ml.p2.16xlarge, ml.p3.2xlarge, ml.p3.8xlarge, ml.p3.16xlarge, ml.c5.large, ml.c5.xlarge, ml.c5.2xlarge, ml.c5.4xlarge, ml.c5.9xlarge, ml.c5.18xlarge)

### ProductionVariantList
* ProductionVariantList `array`
  * items [ProductionVariant](#productionvariant)

### ProductionVariantSummary
* ProductionVariantSummary `object`: Describes weight and capacities for a production variant associated with an endpoint. If you sent a request to the <code>UpdateEndpointWeightsAndCapacities</code> API and the endpoint status is <code>Updating</code>, you get different desired and current values. 
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
  * VolumeKmsKeyId [KmsKeyId](#kmskeyid)
  * VolumeSizeInGB **required** [VolumeSizeInGB](#volumesizeingb)

### ResourceInUse
* ResourceInUse `object`: Resource being accessed is in use.
  * Message [FailureReason](#failurereason)

### ResourceLimitExceeded
* ResourceLimitExceeded `object`:  You have exceeded an Amazon SageMaker resource limit. For example, you might have too many training jobs created. 
  * Message [FailureReason](#failurereason)

### ResourceLimits
* ResourceLimits `object`: Specifies the maximum number of training jobs and parallel training jobs that a hyperparameter tuning job can launch.
  * MaxNumberOfTrainingJobs **required** [MaxNumberOfTrainingJobs](#maxnumberoftrainingjobs)
  * MaxParallelTrainingJobs **required** [MaxParallelTrainingJobs](#maxparalleltrainingjobs)

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

### StopHyperParameterTuningJobRequest
* StopHyperParameterTuningJobRequest `object`
  * HyperParameterTuningJobName **required** [HyperParameterTuningJobName](#hyperparametertuningjobname)

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

### Subnets
* Subnets `array`
  * items [SubnetId](#subnetid)

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
* TrainingInstanceType `string` (values: ml.m4.xlarge, ml.m4.2xlarge, ml.m4.4xlarge, ml.m4.10xlarge, ml.m4.16xlarge, ml.m5.large, ml.m5.xlarge, ml.m5.2xlarge, ml.m5.4xlarge, ml.m5.12xlarge, ml.m5.24xlarge, ml.c4.xlarge, ml.c4.2xlarge, ml.c4.4xlarge, ml.c4.8xlarge, ml.p2.xlarge, ml.p2.8xlarge, ml.p2.16xlarge, ml.p3.2xlarge, ml.p3.8xlarge, ml.p3.16xlarge, ml.c5.xlarge, ml.c5.2xlarge, ml.c5.4xlarge, ml.c5.9xlarge, ml.c5.18xlarge)

### TrainingJobArn
* TrainingJobArn `string`

### TrainingJobName
* TrainingJobName `string`

### TrainingJobSortByOptions
* TrainingJobSortByOptions `string` (values: Name, CreationTime, Status, FinalObjectiveMetricValue)

### TrainingJobStatus
* TrainingJobStatus `string` (values: InProgress, Completed, Failed, Stopping, Stopped)

### TrainingJobStatusCounter
* TrainingJobStatusCounter `integer`

### TrainingJobStatusCounters
* TrainingJobStatusCounters `object`: The numbers of training jobs launched by a hyperparameter tuning job, categorized by status.
  * Completed [TrainingJobStatusCounter](#trainingjobstatuscounter)
  * InProgress [TrainingJobStatusCounter](#trainingjobstatuscounter)
  * NonRetryableError [TrainingJobStatusCounter](#trainingjobstatuscounter)
  * RetryableError [TrainingJobStatusCounter](#trainingjobstatuscounter)
  * Stopped [TrainingJobStatusCounter](#trainingjobstatuscounter)

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

### UpdateNotebookInstanceLifecycleConfigInput
* UpdateNotebookInstanceLifecycleConfigInput `object`
  * NotebookInstanceLifecycleConfigName **required** [NotebookInstanceLifecycleConfigName](#notebookinstancelifecycleconfigname)
  * OnCreate [NotebookInstanceLifecycleConfigList](#notebookinstancelifecycleconfiglist)
  * OnStart [NotebookInstanceLifecycleConfigList](#notebookinstancelifecycleconfiglist)

### UpdateNotebookInstanceLifecycleConfigOutput
* UpdateNotebookInstanceLifecycleConfigOutput `object`

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

### VpcConfig
* VpcConfig `object`: Specifies a VPC that your training jobs and hosted models have access to. Control access to and from your training and model containers by configuring the VPC. For more information, see <a>host-vpc</a> and <a>train-vpc</a>.
  * SecurityGroupIds **required** [VpcSecurityGroupIds](#vpcsecuritygroupids)
  * Subnets **required** [Subnets](#subnets)

### VpcSecurityGroupIds
* VpcSecurityGroupIds `array`
  * items [SecurityGroupId](#securitygroupid)


