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

.then(data => {
  console.log(data);
});
```

## Description

<p>Provides APIs for creating and managing Amazon SageMaker resources. </p> <p>Other Resources:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/whatis.html#first-time-user">Amazon SageMaker Developer Guide</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/augmented-ai/2019-11-07/APIReference/Welcome.html">Amazon Augmented AI Runtime API Reference</a> </p> </li> </ul>

## Actions

### AddAssociation



```js
amazonaws_sagemaker.AddAssociation({
  "SourceArn": null,
  "DestinationArn": null
}, context)
```

#### Input
* input `object`
  * AssociationType
  * DestinationArn **required**
  * SourceArn **required**

#### Output
* output [AddAssociationResponse](#addassociationresponse)

### AddTags



```js
amazonaws_sagemaker.AddTags({
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
* output [AddTagsOutput](#addtagsoutput)

### AssociateTrialComponent



```js
amazonaws_sagemaker.AssociateTrialComponent({
  "TrialComponentName": null,
  "TrialName": null
}, context)
```

#### Input
* input `object`
  * TrialComponentName **required**
  * TrialName **required**

#### Output
* output [AssociateTrialComponentResponse](#associatetrialcomponentresponse)

### CreateAction



```js
amazonaws_sagemaker.CreateAction({
  "ActionName": null,
  "Source": null,
  "ActionType": null
}, context)
```

#### Input
* input `object`
  * ActionName **required**
  * ActionType **required**
  * Description
  * MetadataProperties [MetadataProperties](#metadataproperties)
  * Properties
  * Source **required**
    * SourceId
    * SourceType
    * SourceUri **required**
  * Status
  * Tags
    * items [Tag](#tag)

#### Output
* output [CreateActionResponse](#createactionresponse)

### CreateAlgorithm



```js
amazonaws_sagemaker.CreateAlgorithm({
  "AlgorithmName": null,
  "TrainingSpecification": null
}, context)
```

#### Input
* input `object`
  * AlgorithmDescription
  * AlgorithmName **required**
  * CertifyForMarketplace
  * InferenceSpecification
    * Containers **required**
      * items [ModelPackageContainerDefinition](#modelpackagecontainerdefinition)
    * SupportedContentTypes **required**
      * items [ContentType](#contenttype)
    * SupportedRealtimeInferenceInstanceTypes
      * items [ProductionVariantInstanceType](#productionvariantinstancetype)
    * SupportedResponseMIMETypes **required**
      * items [ResponseMIMEType](#responsemimetype)
    * SupportedTransformInstanceTypes
      * items [TransformInstanceType](#transforminstancetype)
  * Tags
    * items [Tag](#tag)
  * TrainingSpecification **required**
    * MetricDefinitions
      * items [MetricDefinition](#metricdefinition)
    * SupportedHyperParameters
      * items [HyperParameterSpecification](#hyperparameterspecification)
    * SupportedTrainingInstanceTypes **required**
      * items [TrainingInstanceType](#traininginstancetype)
    * SupportedTuningJobObjectiveMetrics
      * items [HyperParameterTuningJobObjective](#hyperparametertuningjobobjective)
    * SupportsDistributedTraining
    * TrainingChannels **required**
      * items [ChannelSpecification](#channelspecification)
    * TrainingImage **required**
    * TrainingImageDigest
  * ValidationSpecification
    * ValidationProfiles **required**
      * items [AlgorithmValidationProfile](#algorithmvalidationprofile)
    * ValidationRole **required**

#### Output
* output [CreateAlgorithmOutput](#createalgorithmoutput)

### CreateApp



```js
amazonaws_sagemaker.CreateApp({
  "DomainId": null,
  "UserProfileName": null,
  "AppType": null,
  "AppName": null
}, context)
```

#### Input
* input `object`
  * AppName **required**
  * AppType **required**
  * DomainId **required**
  * ResourceSpec
    * InstanceType
    * SageMakerImageArn
    * SageMakerImageVersionArn
  * Tags
    * items [Tag](#tag)
  * UserProfileName **required**

#### Output
* output [CreateAppResponse](#createappresponse)

### CreateAppImageConfig



```js
amazonaws_sagemaker.CreateAppImageConfig({
  "AppImageConfigName": null
}, context)
```

#### Input
* input `object`
  * AppImageConfigName **required**
  * KernelGatewayImageConfig
    * FileSystemConfig
      * DefaultGid
      * DefaultUid
      * MountPath
    * KernelSpecs **required**
      * items [KernelSpec](#kernelspec)
  * Tags
    * items [Tag](#tag)

#### Output
* output [CreateAppImageConfigResponse](#createappimageconfigresponse)

### CreateArtifact



```js
amazonaws_sagemaker.CreateArtifact({
  "Source": null,
  "ArtifactType": null
}, context)
```

#### Input
* input `object`
  * ArtifactName
  * ArtifactType **required**
  * MetadataProperties [MetadataProperties](#metadataproperties)
  * Properties
  * Source **required**
    * SourceTypes
      * items [ArtifactSourceType](#artifactsourcetype)
    * SourceUri **required**
  * Tags
    * items [Tag](#tag)

#### Output
* output [CreateArtifactResponse](#createartifactresponse)

### CreateAutoMLJob



```js
amazonaws_sagemaker.CreateAutoMLJob({
  "AutoMLJobName": null,
  "InputDataConfig": null,
  "OutputDataConfig": null,
  "RoleArn": null
}, context)
```

#### Input
* input `object`
  * AutoMLJobConfig
    * CompletionCriteria
      * MaxAutoMLJobRuntimeInSeconds
      * MaxCandidates
      * MaxRuntimePerTrainingJobInSeconds
    * SecurityConfig
      * EnableInterContainerTrafficEncryption
      * VolumeKmsKeyId
      * VpcConfig
        * SecurityGroupIds **required**
          * items [SecurityGroupId](#securitygroupid)
        * Subnets **required**
          * items [SubnetId](#subnetid)
  * AutoMLJobName **required**
  * AutoMLJobObjective
    * MetricName **required**
  * GenerateCandidateDefinitionsOnly
  * InputDataConfig **required**
    * items [AutoMLChannel](#automlchannel)
  * OutputDataConfig **required**
    * KmsKeyId
    * S3OutputPath **required**
  * ProblemType
  * RoleArn **required**
  * Tags
    * items [Tag](#tag)

#### Output
* output [CreateAutoMLJobResponse](#createautomljobresponse)

### CreateCodeRepository



```js
amazonaws_sagemaker.CreateCodeRepository({
  "CodeRepositoryName": null,
  "GitConfig": null
}, context)
```

#### Input
* input `object`
  * CodeRepositoryName **required**
  * GitConfig **required**
    * Branch
    * RepositoryUrl **required**
    * SecretArn
  * Tags
    * items [Tag](#tag)

#### Output
* output [CreateCodeRepositoryOutput](#createcoderepositoryoutput)

### CreateCompilationJob



```js
amazonaws_sagemaker.CreateCompilationJob({
  "CompilationJobName": null,
  "RoleArn": null,
  "InputConfig": null,
  "OutputConfig": null,
  "StoppingCondition": null
}, context)
```

#### Input
* input `object`
  * CompilationJobName **required**
  * InputConfig **required**
    * DataInputConfig **required**
    * Framework **required**
    * S3Uri **required**
  * OutputConfig **required**
    * CompilerOptions
    * KmsKeyId
    * S3OutputLocation **required**
    * TargetDevice
    * TargetPlatform
      * Accelerator
      * Arch **required**
      * Os **required**
  * RoleArn **required**
  * StoppingCondition **required**
    * MaxRuntimeInSeconds
    * MaxWaitTimeInSeconds
  * Tags
    * items [Tag](#tag)

#### Output
* output [CreateCompilationJobResponse](#createcompilationjobresponse)

### CreateContext



```js
amazonaws_sagemaker.CreateContext({
  "ContextName": null,
  "Source": null,
  "ContextType": null
}, context)
```

#### Input
* input `object`
  * ContextName **required**
  * ContextType **required**
  * Description
  * Properties
  * Source **required**
    * SourceId
    * SourceType
    * SourceUri **required**
  * Tags
    * items [Tag](#tag)

#### Output
* output [CreateContextResponse](#createcontextresponse)

### CreateDataQualityJobDefinition



```js
amazonaws_sagemaker.CreateDataQualityJobDefinition({
  "JobDefinitionName": null,
  "DataQualityAppSpecification": null,
  "DataQualityJobInput": null,
  "DataQualityJobOutputConfig": {
    "MonitoringOutputs": null
  },
  "JobResources": {
    "ClusterConfig": null
  },
  "RoleArn": null
}, context)
```

#### Input
* input `object`
  * DataQualityAppSpecification **required**
    * ContainerArguments
      * items [ContainerArgument](#containerargument)
    * ContainerEntrypoint
      * items [ContainerEntrypointString](#containerentrypointstring)
    * Environment
    * ImageUri **required**
    * PostAnalyticsProcessorSourceUri
    * RecordPreprocessorSourceUri
  * DataQualityBaselineConfig
    * BaseliningJobName
    * ConstraintsResource [MonitoringConstraintsResource](#monitoringconstraintsresource)
    * StatisticsResource [MonitoringStatisticsResource](#monitoringstatisticsresource)
  * DataQualityJobInput **required**
    * EndpointInput **required** [EndpointInput](#endpointinput)
  * DataQualityJobOutputConfig **required** [MonitoringOutputConfig](#monitoringoutputconfig)
  * JobDefinitionName **required**
  * JobResources **required** [MonitoringResources](#monitoringresources)
  * NetworkConfig
    * EnableInterContainerTrafficEncryption
    * EnableNetworkIsolation
    * VpcConfig [VpcConfig](#vpcconfig)
  * RoleArn **required**
  * StoppingCondition [MonitoringStoppingCondition](#monitoringstoppingcondition)
  * Tags
    * items [Tag](#tag)

#### Output
* output [CreateDataQualityJobDefinitionResponse](#createdataqualityjobdefinitionresponse)

### CreateDeviceFleet



```js
amazonaws_sagemaker.CreateDeviceFleet({
  "DeviceFleetName": null,
  "OutputConfig": null
}, context)
```

#### Input
* input `object`
  * Description
  * DeviceFleetName **required**
  * OutputConfig **required**
    * KmsKeyId
    * S3OutputLocation **required**
  * RoleArn
  * Tags
    * items [Tag](#tag)

#### Output
*Output schema unknown*

### CreateDomain



```js
amazonaws_sagemaker.CreateDomain({
  "DomainName": null,
  "AuthMode": null,
  "DefaultUserSettings": null,
  "SubnetIds": null,
  "VpcId": null
}, context)
```

#### Input
* input `object`
  * AppNetworkAccessType
  * AuthMode **required**
  * DefaultUserSettings **required**
    * ExecutionRole
    * JupyterServerAppSettings
      * DefaultResourceSpec
        * InstanceType
        * SageMakerImageArn
        * SageMakerImageVersionArn
    * KernelGatewayAppSettings
      * CustomImages
        * items [CustomImage](#customimage)
      * DefaultResourceSpec
        * InstanceType
        * SageMakerImageArn
        * SageMakerImageVersionArn
    * SecurityGroups
      * items [SecurityGroupId](#securitygroupid)
    * SharingSettings
      * NotebookOutputOption
      * S3KmsKeyId
      * S3OutputPath
    * TensorBoardAppSettings
      * DefaultResourceSpec
        * InstanceType
        * SageMakerImageArn
        * SageMakerImageVersionArn
  * DomainName **required**
  * HomeEfsFileSystemKmsKeyId
  * KmsKeyId
  * SubnetIds **required**
    * items [SubnetId](#subnetid)
  * Tags
    * items [Tag](#tag)
  * VpcId **required**

#### Output
* output [CreateDomainResponse](#createdomainresponse)

### CreateEdgePackagingJob



```js
amazonaws_sagemaker.CreateEdgePackagingJob({
  "EdgePackagingJobName": null,
  "CompilationJobName": null,
  "ModelName": null,
  "ModelVersion": null,
  "RoleArn": null,
  "OutputConfig": null
}, context)
```

#### Input
* input `object`
  * CompilationJobName **required**
  * EdgePackagingJobName **required**
  * ModelName **required**
  * ModelVersion **required**
  * OutputConfig **required**
    * KmsKeyId
    * S3OutputLocation **required**
  * ResourceKey
  * RoleArn **required**
  * Tags
    * items [Tag](#tag)

#### Output
*Output schema unknown*

### CreateEndpoint



```js
amazonaws_sagemaker.CreateEndpoint({
  "EndpointName": null,
  "EndpointConfigName": null
}, context)
```

#### Input
* input `object`
  * EndpointConfigName **required**
  * EndpointName **required**
  * Tags
    * items [Tag](#tag)

#### Output
* output [CreateEndpointOutput](#createendpointoutput)

### CreateEndpointConfig



```js
amazonaws_sagemaker.CreateEndpointConfig({
  "EndpointConfigName": null,
  "ProductionVariants": null
}, context)
```

#### Input
* input `object`
  * DataCaptureConfig [DataCaptureConfig](#datacaptureconfig)
  * EndpointConfigName **required**
  * KmsKeyId
  * ProductionVariants **required**
    * items [ProductionVariant](#productionvariant)
  * Tags
    * items [Tag](#tag)

#### Output
* output [CreateEndpointConfigOutput](#createendpointconfigoutput)

### CreateExperiment



```js
amazonaws_sagemaker.CreateExperiment({
  "ExperimentName": null
}, context)
```

#### Input
* input `object`
  * Description
  * DisplayName
  * ExperimentName **required**
  * Tags
    * items [Tag](#tag)

#### Output
* output [CreateExperimentResponse](#createexperimentresponse)

### CreateFeatureGroup



```js
amazonaws_sagemaker.CreateFeatureGroup({
  "FeatureGroupName": null,
  "RecordIdentifierFeatureName": null,
  "EventTimeFeatureName": null,
  "FeatureDefinitions": null
}, context)
```

#### Input
* input `object`
  * Description
  * EventTimeFeatureName **required**
  * FeatureDefinitions **required**
    * items [FeatureDefinition](#featuredefinition)
  * FeatureGroupName **required**
  * OfflineStoreConfig
    * DataCatalogConfig
      * Catalog **required**
      * Database **required**
      * TableName **required**
    * DisableGlueTableCreation
    * S3StorageConfig **required**
      * KmsKeyId
      * S3Uri **required**
  * OnlineStoreConfig
    * EnableOnlineStore
    * SecurityConfig
      * KmsKeyId
  * RecordIdentifierFeatureName **required**
  * RoleArn
  * Tags
    * items [Tag](#tag)

#### Output
* output [CreateFeatureGroupResponse](#createfeaturegroupresponse)

### CreateFlowDefinition



```js
amazonaws_sagemaker.CreateFlowDefinition({
  "FlowDefinitionName": null,
  "HumanLoopConfig": null,
  "OutputConfig": null,
  "RoleArn": null
}, context)
```

#### Input
* input `object`
  * FlowDefinitionName **required**
  * HumanLoopActivationConfig
    * HumanLoopActivationConditionsConfig **required**
      * HumanLoopActivationConditions **required**
  * HumanLoopConfig **required**
    * HumanTaskUiArn **required**
    * PublicWorkforceTaskPrice [PublicWorkforceTaskPrice](#publicworkforcetaskprice)
    * TaskAvailabilityLifetimeInSeconds
    * TaskCount **required**
    * TaskDescription **required**
    * TaskKeywords
      * items [FlowDefinitionTaskKeyword](#flowdefinitiontaskkeyword)
    * TaskTimeLimitInSeconds
    * TaskTitle **required**
    * WorkteamArn **required**
  * HumanLoopRequestSource
    * AwsManagedHumanLoopRequestSource **required**
  * OutputConfig **required**
    * KmsKeyId
    * S3OutputPath **required**
  * RoleArn **required**
  * Tags
    * items [Tag](#tag)

#### Output
* output [CreateFlowDefinitionResponse](#createflowdefinitionresponse)

### CreateHumanTaskUi



```js
amazonaws_sagemaker.CreateHumanTaskUi({
  "HumanTaskUiName": null,
  "UiTemplate": {
    "Content": null
  }
}, context)
```

#### Input
* input `object`
  * HumanTaskUiName **required**
  * Tags
    * items [Tag](#tag)
  * UiTemplate **required** [UiTemplate](#uitemplate)

#### Output
* output [CreateHumanTaskUiResponse](#createhumantaskuiresponse)

### CreateHyperParameterTuningJob



```js
amazonaws_sagemaker.CreateHyperParameterTuningJob({
  "HyperParameterTuningJobName": null,
  "HyperParameterTuningJobConfig": null
}, context)
```

#### Input
* input `object`
  * HyperParameterTuningJobConfig **required**
    * HyperParameterTuningJobObjective
      * MetricName **required**
      * Type **required**
    * ParameterRanges
      * CategoricalParameterRanges
        * items [CategoricalParameterRange](#categoricalparameterrange)
      * ContinuousParameterRanges
        * items [ContinuousParameterRange](#continuousparameterrange)
      * IntegerParameterRanges
        * items [IntegerParameterRange](#integerparameterrange)
    * ResourceLimits **required**
      * MaxNumberOfTrainingJobs **required**
      * MaxParallelTrainingJobs **required**
    * Strategy **required**
    * TrainingJobEarlyStoppingType
    * TuningJobCompletionCriteria
      * TargetObjectiveMetricValue **required**
  * HyperParameterTuningJobName **required**
  * Tags
    * items [Tag](#tag)
  * TrainingJobDefinition
    * AlgorithmSpecification **required**
      * AlgorithmName
      * MetricDefinitions
        * items [MetricDefinition](#metricdefinition)
      * TrainingImage
      * TrainingInputMode **required**
    * CheckpointConfig [CheckpointConfig](#checkpointconfig)
    * DefinitionName
    * EnableInterContainerTrafficEncryption
    * EnableManagedSpotTraining
    * EnableNetworkIsolation
    * HyperParameterRanges [ParameterRanges](#parameterranges)
    * InputDataConfig
      * items [Channel](#channel)
    * OutputDataConfig **required**
      * KmsKeyId
      * S3OutputPath **required**
    * ResourceConfig **required**
      * InstanceCount **required**
      * InstanceType **required**
      * VolumeKmsKeyId
      * VolumeSizeInGB **required**
    * RoleArn **required**
    * StaticHyperParameters
    * StoppingCondition **required**
      * MaxRuntimeInSeconds
      * MaxWaitTimeInSeconds
    * TuningObjective [HyperParameterTuningJobObjective](#hyperparametertuningjobobjective)
    * VpcConfig
      * SecurityGroupIds **required**
        * items [SecurityGroupId](#securitygroupid)
      * Subnets **required**
        * items [SubnetId](#subnetid)
  * TrainingJobDefinitions
    * items [HyperParameterTrainingJobDefinition](#hyperparametertrainingjobdefinition)
  * WarmStartConfig
    * ParentHyperParameterTuningJobs **required**
      * items [ParentHyperParameterTuningJob](#parenthyperparametertuningjob)
    * WarmStartType **required**

#### Output
* output [CreateHyperParameterTuningJobResponse](#createhyperparametertuningjobresponse)

### CreateImage



```js
amazonaws_sagemaker.CreateImage({
  "ImageName": null,
  "RoleArn": null
}, context)
```

#### Input
* input `object`
  * Description
  * DisplayName
  * ImageName **required**
  * RoleArn **required**
  * Tags
    * items [Tag](#tag)

#### Output
* output [CreateImageResponse](#createimageresponse)

### CreateImageVersion



```js
amazonaws_sagemaker.CreateImageVersion({
  "BaseImage": null,
  "ClientToken": null,
  "ImageName": null
}, context)
```

#### Input
* input `object`
  * BaseImage **required**
  * ClientToken **required**
  * ImageName **required**

#### Output
* output [CreateImageVersionResponse](#createimageversionresponse)

### CreateLabelingJob



```js
amazonaws_sagemaker.CreateLabelingJob({
  "LabelingJobName": null,
  "LabelAttributeName": null,
  "InputConfig": null,
  "OutputConfig": null,
  "RoleArn": null,
  "HumanTaskConfig": null
}, context)
```

#### Input
* input `object`
  * HumanTaskConfig **required**
    * AnnotationConsolidationConfig **required**
      * AnnotationConsolidationLambdaArn **required**
    * MaxConcurrentTaskCount
    * NumberOfHumanWorkersPerDataObject **required**
    * PreHumanTaskLambdaArn **required**
    * PublicWorkforceTaskPrice
      * AmountInUsd
        * Cents
        * Dollars
        * TenthFractionsOfACent
    * TaskAvailabilityLifetimeInSeconds
    * TaskDescription **required**
    * TaskKeywords
      * items [TaskKeyword](#taskkeyword)
    * TaskTimeLimitInSeconds **required**
    * TaskTitle **required**
    * UiConfig **required**
      * HumanTaskUiArn
      * UiTemplateS3Uri
    * WorkteamArn **required**
  * InputConfig **required**
    * DataAttributes
      * ContentClassifiers
        * items [ContentClassifier](#contentclassifier)
    * DataSource **required**
      * S3DataSource
        * ManifestS3Uri **required**
      * SnsDataSource
        * SnsTopicArn **required**
  * LabelAttributeName **required**
  * LabelCategoryConfigS3Uri
  * LabelingJobAlgorithmsConfig
    * InitialActiveLearningModelArn
    * LabelingJobAlgorithmSpecificationArn **required**
    * LabelingJobResourceConfig
      * VolumeKmsKeyId
  * LabelingJobName **required**
  * OutputConfig **required**
    * KmsKeyId
    * S3OutputPath **required**
    * SnsTopicArn
  * RoleArn **required**
  * StoppingConditions
    * MaxHumanLabeledObjectCount
    * MaxPercentageOfInputDatasetLabeled
  * Tags
    * items [Tag](#tag)

#### Output
* output [CreateLabelingJobResponse](#createlabelingjobresponse)

### CreateModel



```js
amazonaws_sagemaker.CreateModel({
  "ModelName": null,
  "ExecutionRoleArn": null
}, context)
```

#### Input
* input `object`
  * Containers
    * items [ContainerDefinition](#containerdefinition)
  * EnableNetworkIsolation
  * ExecutionRoleArn **required**
  * ModelName **required**
  * PrimaryContainer
    * ContainerHostname
    * Environment
    * Image
    * ImageConfig
      * RepositoryAccessMode **required**
    * Mode
    * ModelDataUrl
    * ModelPackageName
  * Tags
    * items [Tag](#tag)
  * VpcConfig
    * SecurityGroupIds **required**
      * items [SecurityGroupId](#securitygroupid)
    * Subnets **required**
      * items [SubnetId](#subnetid)

#### Output
* output [CreateModelOutput](#createmodeloutput)

### CreateModelBiasJobDefinition



```js
amazonaws_sagemaker.CreateModelBiasJobDefinition({
  "JobDefinitionName": null,
  "ModelBiasAppSpecification": null,
  "ModelBiasJobInput": null,
  "ModelBiasJobOutputConfig": {
    "MonitoringOutputs": null
  },
  "JobResources": {
    "ClusterConfig": null
  },
  "RoleArn": null
}, context)
```

#### Input
* input `object`
  * JobDefinitionName **required**
  * JobResources **required** [MonitoringResources](#monitoringresources)
  * ModelBiasAppSpecification **required**
    * ConfigUri **required**
    * Environment
    * ImageUri **required**
  * ModelBiasBaselineConfig
    * BaseliningJobName
    * ConstraintsResource [MonitoringConstraintsResource](#monitoringconstraintsresource)
  * ModelBiasJobInput **required**
    * EndpointInput **required** [EndpointInput](#endpointinput)
    * GroundTruthS3Input **required**
      * S3Uri
  * ModelBiasJobOutputConfig **required** [MonitoringOutputConfig](#monitoringoutputconfig)
  * NetworkConfig
    * EnableInterContainerTrafficEncryption
    * EnableNetworkIsolation
    * VpcConfig [VpcConfig](#vpcconfig)
  * RoleArn **required**
  * StoppingCondition [MonitoringStoppingCondition](#monitoringstoppingcondition)
  * Tags
    * items [Tag](#tag)

#### Output
* output [CreateModelBiasJobDefinitionResponse](#createmodelbiasjobdefinitionresponse)

### CreateModelExplainabilityJobDefinition



```js
amazonaws_sagemaker.CreateModelExplainabilityJobDefinition({
  "JobDefinitionName": null,
  "ModelExplainabilityAppSpecification": null,
  "ModelExplainabilityJobInput": null,
  "ModelExplainabilityJobOutputConfig": {
    "MonitoringOutputs": null
  },
  "JobResources": {
    "ClusterConfig": null
  },
  "RoleArn": null
}, context)
```

#### Input
* input `object`
  * JobDefinitionName **required**
  * JobResources **required** [MonitoringResources](#monitoringresources)
  * ModelExplainabilityAppSpecification **required**
    * ConfigUri **required**
    * Environment
    * ImageUri **required**
  * ModelExplainabilityBaselineConfig
    * BaseliningJobName
    * ConstraintsResource [MonitoringConstraintsResource](#monitoringconstraintsresource)
  * ModelExplainabilityJobInput **required**
    * EndpointInput **required** [EndpointInput](#endpointinput)
  * ModelExplainabilityJobOutputConfig **required** [MonitoringOutputConfig](#monitoringoutputconfig)
  * NetworkConfig
    * EnableInterContainerTrafficEncryption
    * EnableNetworkIsolation
    * VpcConfig [VpcConfig](#vpcconfig)
  * RoleArn **required**
  * StoppingCondition [MonitoringStoppingCondition](#monitoringstoppingcondition)
  * Tags
    * items [Tag](#tag)

#### Output
* output [CreateModelExplainabilityJobDefinitionResponse](#createmodelexplainabilityjobdefinitionresponse)

### CreateModelPackage



```js
amazonaws_sagemaker.CreateModelPackage({}, context)
```

#### Input
* input `object`
  * CertifyForMarketplace
  * ClientToken
  * InferenceSpecification
    * Containers **required**
      * items [ModelPackageContainerDefinition](#modelpackagecontainerdefinition)
    * SupportedContentTypes **required**
      * items [ContentType](#contenttype)
    * SupportedRealtimeInferenceInstanceTypes
      * items [ProductionVariantInstanceType](#productionvariantinstancetype)
    * SupportedResponseMIMETypes **required**
      * items [ResponseMIMEType](#responsemimetype)
    * SupportedTransformInstanceTypes
      * items [TransformInstanceType](#transforminstancetype)
  * MetadataProperties [MetadataProperties](#metadataproperties)
  * ModelApprovalStatus
  * ModelMetrics
    * Bias
      * Report
        * ContentDigest
        * ContentType **required**
        * S3Uri **required**
    * Explainability
      * Report
        * ContentDigest
        * ContentType **required**
        * S3Uri **required**
    * ModelDataQuality
      * Constraints
        * ContentDigest
        * ContentType **required**
        * S3Uri **required**
      * Statistics
        * ContentDigest
        * ContentType **required**
        * S3Uri **required**
    * ModelQuality
      * Constraints
        * ContentDigest
        * ContentType **required**
        * S3Uri **required**
      * Statistics
        * ContentDigest
        * ContentType **required**
        * S3Uri **required**
  * ModelPackageDescription
  * ModelPackageGroupName
  * ModelPackageName
  * SourceAlgorithmSpecification
    * SourceAlgorithms **required**
      * items [SourceAlgorithm](#sourcealgorithm)
  * Tags
    * items [Tag](#tag)
  * ValidationSpecification
    * ValidationProfiles **required**
      * items [ModelPackageValidationProfile](#modelpackagevalidationprofile)
    * ValidationRole **required**

#### Output
* output [CreateModelPackageOutput](#createmodelpackageoutput)

### CreateModelPackageGroup



```js
amazonaws_sagemaker.CreateModelPackageGroup({
  "ModelPackageGroupName": null
}, context)
```

#### Input
* input `object`
  * ModelPackageGroupDescription
  * ModelPackageGroupName **required**
  * Tags
    * items [Tag](#tag)

#### Output
* output [CreateModelPackageGroupOutput](#createmodelpackagegroupoutput)

### CreateModelQualityJobDefinition



```js
amazonaws_sagemaker.CreateModelQualityJobDefinition({
  "JobDefinitionName": null,
  "ModelQualityAppSpecification": null,
  "ModelQualityJobInput": null,
  "ModelQualityJobOutputConfig": {
    "MonitoringOutputs": null
  },
  "JobResources": {
    "ClusterConfig": null
  },
  "RoleArn": null
}, context)
```

#### Input
* input `object`
  * JobDefinitionName **required**
  * JobResources **required** [MonitoringResources](#monitoringresources)
  * ModelQualityAppSpecification **required**
    * ContainerArguments
      * items [ContainerArgument](#containerargument)
    * ContainerEntrypoint
      * items [ContainerEntrypointString](#containerentrypointstring)
    * Environment
    * ImageUri **required**
    * PostAnalyticsProcessorSourceUri
    * ProblemType
    * RecordPreprocessorSourceUri
  * ModelQualityBaselineConfig
    * BaseliningJobName
    * ConstraintsResource [MonitoringConstraintsResource](#monitoringconstraintsresource)
  * ModelQualityJobInput **required**
    * EndpointInput **required** [EndpointInput](#endpointinput)
    * GroundTruthS3Input **required**
      * S3Uri
  * ModelQualityJobOutputConfig **required** [MonitoringOutputConfig](#monitoringoutputconfig)
  * NetworkConfig
    * EnableInterContainerTrafficEncryption
    * EnableNetworkIsolation
    * VpcConfig [VpcConfig](#vpcconfig)
  * RoleArn **required**
  * StoppingCondition [MonitoringStoppingCondition](#monitoringstoppingcondition)
  * Tags
    * items [Tag](#tag)

#### Output
* output [CreateModelQualityJobDefinitionResponse](#createmodelqualityjobdefinitionresponse)

### CreateMonitoringSchedule



```js
amazonaws_sagemaker.CreateMonitoringSchedule({
  "MonitoringScheduleName": null,
  "MonitoringScheduleConfig": null
}, context)
```

#### Input
* input `object`
  * MonitoringScheduleConfig **required**
    * MonitoringJobDefinition
      * BaselineConfig
        * BaseliningJobName
        * ConstraintsResource
          * S3Uri
        * StatisticsResource
          * S3Uri
      * Environment
      * MonitoringAppSpecification **required**
        * ContainerArguments
          * items [ContainerArgument](#containerargument)
        * ContainerEntrypoint
          * items [ContainerEntrypointString](#containerentrypointstring)
        * ImageUri **required**
        * PostAnalyticsProcessorSourceUri
        * RecordPreprocessorSourceUri
      * MonitoringInputs **required**
        * items [MonitoringInput](#monitoringinput)
      * MonitoringOutputConfig **required**
        * KmsKeyId
        * MonitoringOutputs **required**
          * items [MonitoringOutput](#monitoringoutput)
      * MonitoringResources **required**
        * ClusterConfig **required**
          * InstanceCount **required**
          * InstanceType **required**
          * VolumeKmsKeyId
          * VolumeSizeInGB **required**
      * NetworkConfig
        * EnableInterContainerTrafficEncryption
        * EnableNetworkIsolation
        * VpcConfig [VpcConfig](#vpcconfig)
      * RoleArn **required**
      * StoppingCondition
        * MaxRuntimeInSeconds **required**
    * MonitoringJobDefinitionName
    * MonitoringType
    * ScheduleConfig
      * ScheduleExpression **required**
  * MonitoringScheduleName **required**
  * Tags
    * items [Tag](#tag)

#### Output
* output [CreateMonitoringScheduleResponse](#createmonitoringscheduleresponse)

### CreateNotebookInstance



```js
amazonaws_sagemaker.CreateNotebookInstance({
  "NotebookInstanceName": null,
  "InstanceType": null,
  "RoleArn": null
}, context)
```

#### Input
* input `object`
  * AcceleratorTypes
    * items [NotebookInstanceAcceleratorType](#notebookinstanceacceleratortype)
  * AdditionalCodeRepositories
    * items [CodeRepositoryNameOrUrl](#coderepositorynameorurl)
  * DefaultCodeRepository
  * DirectInternetAccess
  * InstanceType **required**
  * KmsKeyId
  * LifecycleConfigName
  * NotebookInstanceName **required**
  * RoleArn **required**
  * RootAccess
  * SecurityGroupIds
    * items [SecurityGroupId](#securitygroupid)
  * SubnetId
  * Tags
    * items [Tag](#tag)
  * VolumeSizeInGB

#### Output
* output [CreateNotebookInstanceOutput](#createnotebookinstanceoutput)

### CreateNotebookInstanceLifecycleConfig



```js
amazonaws_sagemaker.CreateNotebookInstanceLifecycleConfig({
  "NotebookInstanceLifecycleConfigName": null
}, context)
```

#### Input
* input `object`
  * NotebookInstanceLifecycleConfigName **required**
  * OnCreate
    * items [NotebookInstanceLifecycleHook](#notebookinstancelifecyclehook)
  * OnStart
    * items [NotebookInstanceLifecycleHook](#notebookinstancelifecyclehook)

#### Output
* output [CreateNotebookInstanceLifecycleConfigOutput](#createnotebookinstancelifecycleconfigoutput)

### CreatePipeline



```js
amazonaws_sagemaker.CreatePipeline({
  "PipelineName": null,
  "PipelineDefinition": null,
  "ClientRequestToken": null,
  "RoleArn": null
}, context)
```

#### Input
* input `object`
  * ClientRequestToken **required**
  * PipelineDefinition **required**
  * PipelineDescription
  * PipelineDisplayName
  * PipelineName **required**
  * RoleArn **required**
  * Tags
    * items [Tag](#tag)

#### Output
* output [CreatePipelineResponse](#createpipelineresponse)

### CreatePresignedDomainUrl



```js
amazonaws_sagemaker.CreatePresignedDomainUrl({
  "DomainId": null,
  "UserProfileName": null
}, context)
```

#### Input
* input `object`
  * DomainId **required**
  * SessionExpirationDurationInSeconds
  * UserProfileName **required**

#### Output
* output [CreatePresignedDomainUrlResponse](#createpresigneddomainurlresponse)

### CreatePresignedNotebookInstanceUrl



```js
amazonaws_sagemaker.CreatePresignedNotebookInstanceUrl({
  "NotebookInstanceName": null
}, context)
```

#### Input
* input `object`
  * NotebookInstanceName **required**
  * SessionExpirationDurationInSeconds

#### Output
* output [CreatePresignedNotebookInstanceUrlOutput](#createpresignednotebookinstanceurloutput)

### CreateProcessingJob



```js
amazonaws_sagemaker.CreateProcessingJob({
  "ProcessingJobName": null,
  "ProcessingResources": null,
  "AppSpecification": null,
  "RoleArn": null
}, context)
```

#### Input
* input `object`
  * AppSpecification **required**
    * ContainerArguments
      * items [ContainerArgument](#containerargument)
    * ContainerEntrypoint
      * items [ContainerEntrypointString](#containerentrypointstring)
    * ImageUri **required**
  * Environment
  * ExperimentConfig [ExperimentConfig](#experimentconfig)
  * NetworkConfig
    * EnableInterContainerTrafficEncryption
    * EnableNetworkIsolation
    * VpcConfig [VpcConfig](#vpcconfig)
  * ProcessingInputs
    * items [ProcessingInput](#processinginput)
  * ProcessingJobName **required**
  * ProcessingOutputConfig
    * KmsKeyId
    * Outputs **required**
      * items [ProcessingOutput](#processingoutput)
  * ProcessingResources **required**
    * ClusterConfig **required**
      * InstanceCount **required**
      * InstanceType **required**
      * VolumeKmsKeyId
      * VolumeSizeInGB **required**
  * RoleArn **required**
  * StoppingCondition
    * MaxRuntimeInSeconds **required**
  * Tags
    * items [Tag](#tag)

#### Output
* output [CreateProcessingJobResponse](#createprocessingjobresponse)

### CreateProject



```js
amazonaws_sagemaker.CreateProject({
  "ProjectName": null,
  "ServiceCatalogProvisioningDetails": null
}, context)
```

#### Input
* input `object`
  * ProjectDescription
  * ProjectName **required**
  * ServiceCatalogProvisioningDetails **required**
    * PathId
    * ProductId **required**
    * ProvisioningArtifactId **required**
    * ProvisioningParameters
      * items [ProvisioningParameter](#provisioningparameter)
  * Tags
    * items [Tag](#tag)

#### Output
* output [CreateProjectOutput](#createprojectoutput)

### CreateTrainingJob



```js
amazonaws_sagemaker.CreateTrainingJob({
  "TrainingJobName": null,
  "AlgorithmSpecification": null,
  "RoleArn": null,
  "OutputDataConfig": null,
  "ResourceConfig": null,
  "StoppingCondition": null
}, context)
```

#### Input
* input `object`
  * AlgorithmSpecification **required**
    * AlgorithmName
    * EnableSageMakerMetricsTimeSeries
    * MetricDefinitions
      * items [MetricDefinition](#metricdefinition)
    * TrainingImage
    * TrainingInputMode **required**
  * CheckpointConfig
    * LocalPath
    * S3Uri **required**
  * DebugHookConfig [DebugHookConfig](#debughookconfig)
  * DebugRuleConfigurations
    * items [DebugRuleConfiguration](#debugruleconfiguration)
  * EnableInterContainerTrafficEncryption
  * EnableManagedSpotTraining
  * EnableNetworkIsolation
  * ExperimentConfig [ExperimentConfig](#experimentconfig)
  * HyperParameters
  * InputDataConfig
    * items [Channel](#channel)
  * OutputDataConfig **required**
    * KmsKeyId
    * S3OutputPath **required**
  * ProfilerConfig [ProfilerConfig](#profilerconfig)
  * ProfilerRuleConfigurations
    * items [ProfilerRuleConfiguration](#profilerruleconfiguration)
  * ResourceConfig **required**
    * InstanceCount **required**
    * InstanceType **required**
    * VolumeKmsKeyId
    * VolumeSizeInGB **required**
  * RoleArn **required**
  * StoppingCondition **required**
    * MaxRuntimeInSeconds
    * MaxWaitTimeInSeconds
  * Tags
    * items [Tag](#tag)
  * TensorBoardOutputConfig [TensorBoardOutputConfig](#tensorboardoutputconfig)
  * TrainingJobName **required**
  * VpcConfig
    * SecurityGroupIds **required**
      * items [SecurityGroupId](#securitygroupid)
    * Subnets **required**
      * items [SubnetId](#subnetid)

#### Output
* output [CreateTrainingJobResponse](#createtrainingjobresponse)

### CreateTransformJob



```js
amazonaws_sagemaker.CreateTransformJob({
  "TransformJobName": null,
  "ModelName": null,
  "TransformInput": null,
  "TransformOutput": null,
  "TransformResources": null
}, context)
```

#### Input
* input `object`
  * BatchStrategy
  * DataProcessing
    * InputFilter
    * JoinSource
    * OutputFilter
  * Environment
  * ExperimentConfig [ExperimentConfig](#experimentconfig)
  * MaxConcurrentTransforms
  * MaxPayloadInMB
  * ModelClientConfig
    * InvocationsMaxRetries
    * InvocationsTimeoutInSeconds
  * ModelName **required**
  * Tags
    * items [Tag](#tag)
  * TransformInput **required**
    * CompressionType
    * ContentType
    * DataSource **required**
      * S3DataSource **required**
        * S3DataType **required**
        * S3Uri **required**
    * SplitType
  * TransformJobName **required**
  * TransformOutput **required**
    * Accept
    * AssembleWith
    * KmsKeyId
    * S3OutputPath **required**
  * TransformResources **required**
    * InstanceCount **required**
    * InstanceType **required**
    * VolumeKmsKeyId

#### Output
* output [CreateTransformJobResponse](#createtransformjobresponse)

### CreateTrial



```js
amazonaws_sagemaker.CreateTrial({
  "TrialName": null,
  "ExperimentName": null
}, context)
```

#### Input
* input `object`
  * DisplayName
  * ExperimentName **required**
  * MetadataProperties [MetadataProperties](#metadataproperties)
  * Tags
    * items [Tag](#tag)
  * TrialName **required**

#### Output
* output [CreateTrialResponse](#createtrialresponse)

### CreateTrialComponent



```js
amazonaws_sagemaker.CreateTrialComponent({
  "TrialComponentName": null
}, context)
```

#### Input
* input `object`
  * DisplayName
  * EndTime
  * InputArtifacts
  * MetadataProperties [MetadataProperties](#metadataproperties)
  * OutputArtifacts
  * Parameters
  * StartTime
  * Status
    * Message
    * PrimaryStatus
  * Tags
    * items [Tag](#tag)
  * TrialComponentName **required**

#### Output
* output [CreateTrialComponentResponse](#createtrialcomponentresponse)

### CreateUserProfile



```js
amazonaws_sagemaker.CreateUserProfile({
  "DomainId": null,
  "UserProfileName": null
}, context)
```

#### Input
* input `object`
  * DomainId **required**
  * SingleSignOnUserIdentifier
  * SingleSignOnUserValue
  * Tags
    * items [Tag](#tag)
  * UserProfileName **required**
  * UserSettings
    * ExecutionRole
    * JupyterServerAppSettings
      * DefaultResourceSpec
        * InstanceType
        * SageMakerImageArn
        * SageMakerImageVersionArn
    * KernelGatewayAppSettings
      * CustomImages
        * items [CustomImage](#customimage)
      * DefaultResourceSpec
        * InstanceType
        * SageMakerImageArn
        * SageMakerImageVersionArn
    * SecurityGroups
      * items [SecurityGroupId](#securitygroupid)
    * SharingSettings
      * NotebookOutputOption
      * S3KmsKeyId
      * S3OutputPath
    * TensorBoardAppSettings
      * DefaultResourceSpec
        * InstanceType
        * SageMakerImageArn
        * SageMakerImageVersionArn

#### Output
* output [CreateUserProfileResponse](#createuserprofileresponse)

### CreateWorkforce



```js
amazonaws_sagemaker.CreateWorkforce({
  "WorkforceName": null
}, context)
```

#### Input
* input `object`
  * CognitoConfig
    * ClientId **required**
    * UserPool **required**
  * OidcConfig
    * AuthorizationEndpoint **required**
    * ClientId **required**
    * ClientSecret **required**
    * Issuer **required**
    * JwksUri **required**
    * LogoutEndpoint **required**
    * TokenEndpoint **required**
    * UserInfoEndpoint **required**
  * SourceIpConfig [SourceIpConfig](#sourceipconfig)
  * Tags
    * items [Tag](#tag)
  * WorkforceName **required**

#### Output
* output [CreateWorkforceResponse](#createworkforceresponse)

### CreateWorkteam



```js
amazonaws_sagemaker.CreateWorkteam({
  "WorkteamName": null,
  "MemberDefinitions": null,
  "Description": null
}, context)
```

#### Input
* input `object`
  * Description **required**
  * MemberDefinitions **required**
    * items [MemberDefinition](#memberdefinition)
  * NotificationConfiguration
    * NotificationTopicArn
  * Tags
    * items [Tag](#tag)
  * WorkforceName
  * WorkteamName **required**

#### Output
* output [CreateWorkteamResponse](#createworkteamresponse)

### DeleteAction



```js
amazonaws_sagemaker.DeleteAction({
  "ActionName": null
}, context)
```

#### Input
* input `object`
  * ActionName **required**

#### Output
* output [DeleteActionResponse](#deleteactionresponse)

### DeleteAlgorithm



```js
amazonaws_sagemaker.DeleteAlgorithm({
  "AlgorithmName": null
}, context)
```

#### Input
* input `object`
  * AlgorithmName **required**

#### Output
*Output schema unknown*

### DeleteApp



```js
amazonaws_sagemaker.DeleteApp({
  "DomainId": null,
  "UserProfileName": null,
  "AppType": null,
  "AppName": null
}, context)
```

#### Input
* input `object`
  * AppName **required**
  * AppType **required**
  * DomainId **required**
  * UserProfileName **required**

#### Output
*Output schema unknown*

### DeleteAppImageConfig



```js
amazonaws_sagemaker.DeleteAppImageConfig({
  "AppImageConfigName": null
}, context)
```

#### Input
* input `object`
  * AppImageConfigName **required**

#### Output
*Output schema unknown*

### DeleteArtifact



```js
amazonaws_sagemaker.DeleteArtifact({}, context)
```

#### Input
* input `object`
  * ArtifactArn
  * Source
    * SourceTypes
      * items [ArtifactSourceType](#artifactsourcetype)
    * SourceUri **required**

#### Output
* output [DeleteArtifactResponse](#deleteartifactresponse)

### DeleteAssociation



```js
amazonaws_sagemaker.DeleteAssociation({
  "SourceArn": null,
  "DestinationArn": null
}, context)
```

#### Input
* input `object`
  * DestinationArn **required**
  * SourceArn **required**

#### Output
* output [DeleteAssociationResponse](#deleteassociationresponse)

### DeleteCodeRepository



```js
amazonaws_sagemaker.DeleteCodeRepository({
  "CodeRepositoryName": null
}, context)
```

#### Input
* input `object`
  * CodeRepositoryName **required**

#### Output
*Output schema unknown*

### DeleteContext



```js
amazonaws_sagemaker.DeleteContext({
  "ContextName": null
}, context)
```

#### Input
* input `object`
  * ContextName **required**

#### Output
* output [DeleteContextResponse](#deletecontextresponse)

### DeleteDataQualityJobDefinition



```js
amazonaws_sagemaker.DeleteDataQualityJobDefinition({
  "JobDefinitionName": null
}, context)
```

#### Input
* input `object`
  * JobDefinitionName **required**

#### Output
*Output schema unknown*

### DeleteDeviceFleet



```js
amazonaws_sagemaker.DeleteDeviceFleet({
  "DeviceFleetName": null
}, context)
```

#### Input
* input `object`
  * DeviceFleetName **required**

#### Output
*Output schema unknown*

### DeleteDomain



```js
amazonaws_sagemaker.DeleteDomain({
  "DomainId": null
}, context)
```

#### Input
* input `object`
  * DomainId **required**
  * RetentionPolicy
    * HomeEfsFileSystem

#### Output
*Output schema unknown*

### DeleteEndpoint



```js
amazonaws_sagemaker.DeleteEndpoint({
  "EndpointName": null
}, context)
```

#### Input
* input `object`
  * EndpointName **required**

#### Output
*Output schema unknown*

### DeleteEndpointConfig



```js
amazonaws_sagemaker.DeleteEndpointConfig({
  "EndpointConfigName": null
}, context)
```

#### Input
* input `object`
  * EndpointConfigName **required**

#### Output
*Output schema unknown*

### DeleteExperiment



```js
amazonaws_sagemaker.DeleteExperiment({
  "ExperimentName": null
}, context)
```

#### Input
* input `object`
  * ExperimentName **required**

#### Output
* output [DeleteExperimentResponse](#deleteexperimentresponse)

### DeleteFeatureGroup



```js
amazonaws_sagemaker.DeleteFeatureGroup({
  "FeatureGroupName": null
}, context)
```

#### Input
* input `object`
  * FeatureGroupName **required**

#### Output
*Output schema unknown*

### DeleteFlowDefinition



```js
amazonaws_sagemaker.DeleteFlowDefinition({
  "FlowDefinitionName": null
}, context)
```

#### Input
* input `object`
  * FlowDefinitionName **required**

#### Output
* output [DeleteFlowDefinitionResponse](#deleteflowdefinitionresponse)

### DeleteHumanTaskUi



```js
amazonaws_sagemaker.DeleteHumanTaskUi({
  "HumanTaskUiName": null
}, context)
```

#### Input
* input `object`
  * HumanTaskUiName **required**

#### Output
* output [DeleteHumanTaskUiResponse](#deletehumantaskuiresponse)

### DeleteImage



```js
amazonaws_sagemaker.DeleteImage({
  "ImageName": null
}, context)
```

#### Input
* input `object`
  * ImageName **required**

#### Output
* output [DeleteImageResponse](#deleteimageresponse)

### DeleteImageVersion



```js
amazonaws_sagemaker.DeleteImageVersion({
  "ImageName": null,
  "Version": null
}, context)
```

#### Input
* input `object`
  * ImageName **required**
  * Version **required**

#### Output
* output [DeleteImageVersionResponse](#deleteimageversionresponse)

### DeleteModel



```js
amazonaws_sagemaker.DeleteModel({
  "ModelName": null
}, context)
```

#### Input
* input `object`
  * ModelName **required**

#### Output
*Output schema unknown*

### DeleteModelBiasJobDefinition



```js
amazonaws_sagemaker.DeleteModelBiasJobDefinition({
  "JobDefinitionName": null
}, context)
```

#### Input
* input `object`
  * JobDefinitionName **required**

#### Output
*Output schema unknown*

### DeleteModelExplainabilityJobDefinition



```js
amazonaws_sagemaker.DeleteModelExplainabilityJobDefinition({
  "JobDefinitionName": null
}, context)
```

#### Input
* input `object`
  * JobDefinitionName **required**

#### Output
*Output schema unknown*

### DeleteModelPackage



```js
amazonaws_sagemaker.DeleteModelPackage({
  "ModelPackageName": null
}, context)
```

#### Input
* input `object`
  * ModelPackageName **required**

#### Output
*Output schema unknown*

### DeleteModelPackageGroup



```js
amazonaws_sagemaker.DeleteModelPackageGroup({
  "ModelPackageGroupName": null
}, context)
```

#### Input
* input `object`
  * ModelPackageGroupName **required**

#### Output
*Output schema unknown*

### DeleteModelPackageGroupPolicy



```js
amazonaws_sagemaker.DeleteModelPackageGroupPolicy({
  "ModelPackageGroupName": null
}, context)
```

#### Input
* input `object`
  * ModelPackageGroupName **required**

#### Output
*Output schema unknown*

### DeleteModelQualityJobDefinition



```js
amazonaws_sagemaker.DeleteModelQualityJobDefinition({
  "JobDefinitionName": null
}, context)
```

#### Input
* input `object`
  * JobDefinitionName **required**

#### Output
*Output schema unknown*

### DeleteMonitoringSchedule



```js
amazonaws_sagemaker.DeleteMonitoringSchedule({
  "MonitoringScheduleName": null
}, context)
```

#### Input
* input `object`
  * MonitoringScheduleName **required**

#### Output
*Output schema unknown*

### DeleteNotebookInstance



```js
amazonaws_sagemaker.DeleteNotebookInstance({
  "NotebookInstanceName": null
}, context)
```

#### Input
* input `object`
  * NotebookInstanceName **required**

#### Output
*Output schema unknown*

### DeleteNotebookInstanceLifecycleConfig



```js
amazonaws_sagemaker.DeleteNotebookInstanceLifecycleConfig({
  "NotebookInstanceLifecycleConfigName": null
}, context)
```

#### Input
* input `object`
  * NotebookInstanceLifecycleConfigName **required**

#### Output
*Output schema unknown*

### DeletePipeline



```js
amazonaws_sagemaker.DeletePipeline({
  "PipelineName": null,
  "ClientRequestToken": null
}, context)
```

#### Input
* input `object`
  * ClientRequestToken **required**
  * PipelineName **required**

#### Output
* output [DeletePipelineResponse](#deletepipelineresponse)

### DeleteProject



```js
amazonaws_sagemaker.DeleteProject({
  "ProjectName": null
}, context)
```

#### Input
* input `object`
  * ProjectName **required**

#### Output
*Output schema unknown*

### DeleteTags



```js
amazonaws_sagemaker.DeleteTags({
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
* output [DeleteTagsOutput](#deletetagsoutput)

### DeleteTrial



```js
amazonaws_sagemaker.DeleteTrial({
  "TrialName": null
}, context)
```

#### Input
* input `object`
  * TrialName **required**

#### Output
* output [DeleteTrialResponse](#deletetrialresponse)

### DeleteTrialComponent



```js
amazonaws_sagemaker.DeleteTrialComponent({
  "TrialComponentName": null
}, context)
```

#### Input
* input `object`
  * TrialComponentName **required**

#### Output
* output [DeleteTrialComponentResponse](#deletetrialcomponentresponse)

### DeleteUserProfile



```js
amazonaws_sagemaker.DeleteUserProfile({
  "DomainId": null,
  "UserProfileName": null
}, context)
```

#### Input
* input `object`
  * DomainId **required**
  * UserProfileName **required**

#### Output
*Output schema unknown*

### DeleteWorkforce



```js
amazonaws_sagemaker.DeleteWorkforce({
  "WorkforceName": null
}, context)
```

#### Input
* input `object`
  * WorkforceName **required**

#### Output
* output [DeleteWorkforceResponse](#deleteworkforceresponse)

### DeleteWorkteam



```js
amazonaws_sagemaker.DeleteWorkteam({
  "WorkteamName": null
}, context)
```

#### Input
* input `object`
  * WorkteamName **required**

#### Output
* output [DeleteWorkteamResponse](#deleteworkteamresponse)

### DeregisterDevices



```js
amazonaws_sagemaker.DeregisterDevices({
  "DeviceFleetName": null,
  "DeviceNames": null
}, context)
```

#### Input
* input `object`
  * DeviceFleetName **required**
  * DeviceNames **required**
    * items [DeviceName](#devicename)

#### Output
*Output schema unknown*

### DescribeAction



```js
amazonaws_sagemaker.DescribeAction({
  "ActionName": null
}, context)
```

#### Input
* input `object`
  * ActionName **required**

#### Output
* output [DescribeActionResponse](#describeactionresponse)

### DescribeAlgorithm



```js
amazonaws_sagemaker.DescribeAlgorithm({
  "AlgorithmName": null
}, context)
```

#### Input
* input `object`
  * AlgorithmName **required**

#### Output
* output [DescribeAlgorithmOutput](#describealgorithmoutput)

### DescribeApp



```js
amazonaws_sagemaker.DescribeApp({
  "DomainId": null,
  "UserProfileName": null,
  "AppType": null,
  "AppName": null
}, context)
```

#### Input
* input `object`
  * AppName **required**
  * AppType **required**
  * DomainId **required**
  * UserProfileName **required**

#### Output
* output [DescribeAppResponse](#describeappresponse)

### DescribeAppImageConfig



```js
amazonaws_sagemaker.DescribeAppImageConfig({
  "AppImageConfigName": null
}, context)
```

#### Input
* input `object`
  * AppImageConfigName **required**

#### Output
* output [DescribeAppImageConfigResponse](#describeappimageconfigresponse)

### DescribeArtifact



```js
amazonaws_sagemaker.DescribeArtifact({
  "ArtifactArn": null
}, context)
```

#### Input
* input `object`
  * ArtifactArn **required**

#### Output
* output [DescribeArtifactResponse](#describeartifactresponse)

### DescribeAutoMLJob



```js
amazonaws_sagemaker.DescribeAutoMLJob({
  "AutoMLJobName": null
}, context)
```

#### Input
* input `object`
  * AutoMLJobName **required**

#### Output
* output [DescribeAutoMLJobResponse](#describeautomljobresponse)

### DescribeCodeRepository



```js
amazonaws_sagemaker.DescribeCodeRepository({
  "CodeRepositoryName": null
}, context)
```

#### Input
* input `object`
  * CodeRepositoryName **required**

#### Output
* output [DescribeCodeRepositoryOutput](#describecoderepositoryoutput)

### DescribeCompilationJob



```js
amazonaws_sagemaker.DescribeCompilationJob({
  "CompilationJobName": null
}, context)
```

#### Input
* input `object`
  * CompilationJobName **required**

#### Output
* output [DescribeCompilationJobResponse](#describecompilationjobresponse)

### DescribeContext



```js
amazonaws_sagemaker.DescribeContext({
  "ContextName": null
}, context)
```

#### Input
* input `object`
  * ContextName **required**

#### Output
* output [DescribeContextResponse](#describecontextresponse)

### DescribeDataQualityJobDefinition



```js
amazonaws_sagemaker.DescribeDataQualityJobDefinition({
  "JobDefinitionName": null
}, context)
```

#### Input
* input `object`
  * JobDefinitionName **required**

#### Output
* output [DescribeDataQualityJobDefinitionResponse](#describedataqualityjobdefinitionresponse)

### DescribeDevice



```js
amazonaws_sagemaker.DescribeDevice({
  "DeviceName": null,
  "DeviceFleetName": null
}, context)
```

#### Input
* input `object`
  * DeviceFleetName **required**
  * DeviceName **required**
  * NextToken

#### Output
* output [DescribeDeviceResponse](#describedeviceresponse)

### DescribeDeviceFleet



```js
amazonaws_sagemaker.DescribeDeviceFleet({
  "DeviceFleetName": null
}, context)
```

#### Input
* input `object`
  * DeviceFleetName **required**

#### Output
* output [DescribeDeviceFleetResponse](#describedevicefleetresponse)

### DescribeDomain



```js
amazonaws_sagemaker.DescribeDomain({
  "DomainId": null
}, context)
```

#### Input
* input `object`
  * DomainId **required**

#### Output
* output [DescribeDomainResponse](#describedomainresponse)

### DescribeEdgePackagingJob



```js
amazonaws_sagemaker.DescribeEdgePackagingJob({
  "EdgePackagingJobName": null
}, context)
```

#### Input
* input `object`
  * EdgePackagingJobName **required**

#### Output
* output [DescribeEdgePackagingJobResponse](#describeedgepackagingjobresponse)

### DescribeEndpoint



```js
amazonaws_sagemaker.DescribeEndpoint({
  "EndpointName": null
}, context)
```

#### Input
* input `object`
  * EndpointName **required**

#### Output
* output [DescribeEndpointOutput](#describeendpointoutput)

### DescribeEndpointConfig



```js
amazonaws_sagemaker.DescribeEndpointConfig({
  "EndpointConfigName": null
}, context)
```

#### Input
* input `object`
  * EndpointConfigName **required**

#### Output
* output [DescribeEndpointConfigOutput](#describeendpointconfigoutput)

### DescribeExperiment



```js
amazonaws_sagemaker.DescribeExperiment({
  "ExperimentName": null
}, context)
```

#### Input
* input `object`
  * ExperimentName **required**

#### Output
* output [DescribeExperimentResponse](#describeexperimentresponse)

### DescribeFeatureGroup



```js
amazonaws_sagemaker.DescribeFeatureGroup({
  "FeatureGroupName": null
}, context)
```

#### Input
* input `object`
  * FeatureGroupName **required**
  * NextToken

#### Output
* output [DescribeFeatureGroupResponse](#describefeaturegroupresponse)

### DescribeFlowDefinition



```js
amazonaws_sagemaker.DescribeFlowDefinition({
  "FlowDefinitionName": null
}, context)
```

#### Input
* input `object`
  * FlowDefinitionName **required**

#### Output
* output [DescribeFlowDefinitionResponse](#describeflowdefinitionresponse)

### DescribeHumanTaskUi



```js
amazonaws_sagemaker.DescribeHumanTaskUi({
  "HumanTaskUiName": null
}, context)
```

#### Input
* input `object`
  * HumanTaskUiName **required**

#### Output
* output [DescribeHumanTaskUiResponse](#describehumantaskuiresponse)

### DescribeHyperParameterTuningJob



```js
amazonaws_sagemaker.DescribeHyperParameterTuningJob({
  "HyperParameterTuningJobName": null
}, context)
```

#### Input
* input `object`
  * HyperParameterTuningJobName **required**

#### Output
* output [DescribeHyperParameterTuningJobResponse](#describehyperparametertuningjobresponse)

### DescribeImage



```js
amazonaws_sagemaker.DescribeImage({
  "ImageName": null
}, context)
```

#### Input
* input `object`
  * ImageName **required**

#### Output
* output [DescribeImageResponse](#describeimageresponse)

### DescribeImageVersion



```js
amazonaws_sagemaker.DescribeImageVersion({
  "ImageName": null
}, context)
```

#### Input
* input `object`
  * ImageName **required**
  * Version

#### Output
* output [DescribeImageVersionResponse](#describeimageversionresponse)

### DescribeLabelingJob



```js
amazonaws_sagemaker.DescribeLabelingJob({
  "LabelingJobName": null
}, context)
```

#### Input
* input `object`
  * LabelingJobName **required**

#### Output
* output [DescribeLabelingJobResponse](#describelabelingjobresponse)

### DescribeModel



```js
amazonaws_sagemaker.DescribeModel({
  "ModelName": null
}, context)
```

#### Input
* input `object`
  * ModelName **required**

#### Output
* output [DescribeModelOutput](#describemodeloutput)

### DescribeModelBiasJobDefinition



```js
amazonaws_sagemaker.DescribeModelBiasJobDefinition({
  "JobDefinitionName": null
}, context)
```

#### Input
* input `object`
  * JobDefinitionName **required**

#### Output
* output [DescribeModelBiasJobDefinitionResponse](#describemodelbiasjobdefinitionresponse)

### DescribeModelExplainabilityJobDefinition



```js
amazonaws_sagemaker.DescribeModelExplainabilityJobDefinition({
  "JobDefinitionName": null
}, context)
```

#### Input
* input `object`
  * JobDefinitionName **required**

#### Output
* output [DescribeModelExplainabilityJobDefinitionResponse](#describemodelexplainabilityjobdefinitionresponse)

### DescribeModelPackage



```js
amazonaws_sagemaker.DescribeModelPackage({
  "ModelPackageName": null
}, context)
```

#### Input
* input `object`
  * ModelPackageName **required**

#### Output
* output [DescribeModelPackageOutput](#describemodelpackageoutput)

### DescribeModelPackageGroup



```js
amazonaws_sagemaker.DescribeModelPackageGroup({
  "ModelPackageGroupName": null
}, context)
```

#### Input
* input `object`
  * ModelPackageGroupName **required**

#### Output
* output [DescribeModelPackageGroupOutput](#describemodelpackagegroupoutput)

### DescribeModelQualityJobDefinition



```js
amazonaws_sagemaker.DescribeModelQualityJobDefinition({
  "JobDefinitionName": null
}, context)
```

#### Input
* input `object`
  * JobDefinitionName **required**

#### Output
* output [DescribeModelQualityJobDefinitionResponse](#describemodelqualityjobdefinitionresponse)

### DescribeMonitoringSchedule



```js
amazonaws_sagemaker.DescribeMonitoringSchedule({
  "MonitoringScheduleName": null
}, context)
```

#### Input
* input `object`
  * MonitoringScheduleName **required**

#### Output
* output [DescribeMonitoringScheduleResponse](#describemonitoringscheduleresponse)

### DescribeNotebookInstance



```js
amazonaws_sagemaker.DescribeNotebookInstance({
  "NotebookInstanceName": null
}, context)
```

#### Input
* input `object`
  * NotebookInstanceName **required**

#### Output
* output [DescribeNotebookInstanceOutput](#describenotebookinstanceoutput)

### DescribeNotebookInstanceLifecycleConfig



```js
amazonaws_sagemaker.DescribeNotebookInstanceLifecycleConfig({
  "NotebookInstanceLifecycleConfigName": null
}, context)
```

#### Input
* input `object`
  * NotebookInstanceLifecycleConfigName **required**

#### Output
* output [DescribeNotebookInstanceLifecycleConfigOutput](#describenotebookinstancelifecycleconfigoutput)

### DescribePipeline



```js
amazonaws_sagemaker.DescribePipeline({
  "PipelineName": null
}, context)
```

#### Input
* input `object`
  * PipelineName **required**

#### Output
* output [DescribePipelineResponse](#describepipelineresponse)

### DescribePipelineDefinitionForExecution



```js
amazonaws_sagemaker.DescribePipelineDefinitionForExecution({
  "PipelineExecutionArn": null
}, context)
```

#### Input
* input `object`
  * PipelineExecutionArn **required**

#### Output
* output [DescribePipelineDefinitionForExecutionResponse](#describepipelinedefinitionforexecutionresponse)

### DescribePipelineExecution



```js
amazonaws_sagemaker.DescribePipelineExecution({
  "PipelineExecutionArn": null
}, context)
```

#### Input
* input `object`
  * PipelineExecutionArn **required**

#### Output
* output [DescribePipelineExecutionResponse](#describepipelineexecutionresponse)

### DescribeProcessingJob



```js
amazonaws_sagemaker.DescribeProcessingJob({
  "ProcessingJobName": null
}, context)
```

#### Input
* input `object`
  * ProcessingJobName **required**

#### Output
* output [DescribeProcessingJobResponse](#describeprocessingjobresponse)

### DescribeProject



```js
amazonaws_sagemaker.DescribeProject({
  "ProjectName": null
}, context)
```

#### Input
* input `object`
  * ProjectName **required**

#### Output
* output [DescribeProjectOutput](#describeprojectoutput)

### DescribeSubscribedWorkteam



```js
amazonaws_sagemaker.DescribeSubscribedWorkteam({
  "WorkteamArn": null
}, context)
```

#### Input
* input `object`
  * WorkteamArn **required**

#### Output
* output [DescribeSubscribedWorkteamResponse](#describesubscribedworkteamresponse)

### DescribeTrainingJob



```js
amazonaws_sagemaker.DescribeTrainingJob({
  "TrainingJobName": null
}, context)
```

#### Input
* input `object`
  * TrainingJobName **required**

#### Output
* output [DescribeTrainingJobResponse](#describetrainingjobresponse)

### DescribeTransformJob



```js
amazonaws_sagemaker.DescribeTransformJob({
  "TransformJobName": null
}, context)
```

#### Input
* input `object`
  * TransformJobName **required**

#### Output
* output [DescribeTransformJobResponse](#describetransformjobresponse)

### DescribeTrial



```js
amazonaws_sagemaker.DescribeTrial({
  "TrialName": null
}, context)
```

#### Input
* input `object`
  * TrialName **required**

#### Output
* output [DescribeTrialResponse](#describetrialresponse)

### DescribeTrialComponent



```js
amazonaws_sagemaker.DescribeTrialComponent({
  "TrialComponentName": null
}, context)
```

#### Input
* input `object`
  * TrialComponentName **required**

#### Output
* output [DescribeTrialComponentResponse](#describetrialcomponentresponse)

### DescribeUserProfile



```js
amazonaws_sagemaker.DescribeUserProfile({
  "DomainId": null,
  "UserProfileName": null
}, context)
```

#### Input
* input `object`
  * DomainId **required**
  * UserProfileName **required**

#### Output
* output [DescribeUserProfileResponse](#describeuserprofileresponse)

### DescribeWorkforce



```js
amazonaws_sagemaker.DescribeWorkforce({
  "WorkforceName": null
}, context)
```

#### Input
* input `object`
  * WorkforceName **required**

#### Output
* output [DescribeWorkforceResponse](#describeworkforceresponse)

### DescribeWorkteam



```js
amazonaws_sagemaker.DescribeWorkteam({
  "WorkteamName": null
}, context)
```

#### Input
* input `object`
  * WorkteamName **required**

#### Output
* output [DescribeWorkteamResponse](#describeworkteamresponse)

### DisableSagemakerServicecatalogPortfolio



```js
amazonaws_sagemaker.DisableSagemakerServicecatalogPortfolio({}, context)
```

#### Input
* input `object`

#### Output
* output [DisableSagemakerServicecatalogPortfolioOutput](#disablesagemakerservicecatalogportfoliooutput)

### DisassociateTrialComponent



```js
amazonaws_sagemaker.DisassociateTrialComponent({
  "TrialComponentName": null,
  "TrialName": null
}, context)
```

#### Input
* input `object`
  * TrialComponentName **required**
  * TrialName **required**

#### Output
* output [DisassociateTrialComponentResponse](#disassociatetrialcomponentresponse)

### EnableSagemakerServicecatalogPortfolio



```js
amazonaws_sagemaker.EnableSagemakerServicecatalogPortfolio({}, context)
```

#### Input
* input `object`

#### Output
* output [EnableSagemakerServicecatalogPortfolioOutput](#enablesagemakerservicecatalogportfoliooutput)

### GetDeviceFleetReport



```js
amazonaws_sagemaker.GetDeviceFleetReport({
  "DeviceFleetName": null
}, context)
```

#### Input
* input `object`
  * DeviceFleetName **required**

#### Output
* output [GetDeviceFleetReportResponse](#getdevicefleetreportresponse)

### GetModelPackageGroupPolicy



```js
amazonaws_sagemaker.GetModelPackageGroupPolicy({
  "ModelPackageGroupName": null
}, context)
```

#### Input
* input `object`
  * ModelPackageGroupName **required**

#### Output
* output [GetModelPackageGroupPolicyOutput](#getmodelpackagegrouppolicyoutput)

### GetSagemakerServicecatalogPortfolioStatus



```js
amazonaws_sagemaker.GetSagemakerServicecatalogPortfolioStatus({}, context)
```

#### Input
* input `object`

#### Output
* output [GetSagemakerServicecatalogPortfolioStatusOutput](#getsagemakerservicecatalogportfoliostatusoutput)

### GetSearchSuggestions



```js
amazonaws_sagemaker.GetSearchSuggestions({
  "Resource": null
}, context)
```

#### Input
* input `object`
  * Resource **required**
  * SuggestionQuery
    * PropertyNameQuery
      * PropertyNameHint **required**

#### Output
* output [GetSearchSuggestionsResponse](#getsearchsuggestionsresponse)

### ListActions



```js
amazonaws_sagemaker.ListActions({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * ActionType
  * CreatedAfter
  * CreatedBefore
  * MaxResults
  * NextToken
  * SortBy
  * SortOrder
  * SourceUri

#### Output
* output [ListActionsResponse](#listactionsresponse)

### ListAlgorithms



```js
amazonaws_sagemaker.ListAlgorithms({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * CreationTimeAfter
  * CreationTimeBefore
  * MaxResults
  * NameContains
  * NextToken
  * SortBy
  * SortOrder

#### Output
* output [ListAlgorithmsOutput](#listalgorithmsoutput)

### ListAppImageConfigs



```js
amazonaws_sagemaker.ListAppImageConfigs({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * CreationTimeAfter
  * CreationTimeBefore
  * MaxResults
  * ModifiedTimeAfter
  * ModifiedTimeBefore
  * NameContains
  * NextToken
  * SortBy
  * SortOrder

#### Output
* output [ListAppImageConfigsResponse](#listappimageconfigsresponse)

### ListApps



```js
amazonaws_sagemaker.ListApps({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * DomainIdEquals
  * MaxResults
  * NextToken
  * SortBy
  * SortOrder
  * UserProfileNameEquals

#### Output
* output [ListAppsResponse](#listappsresponse)

### ListArtifacts



```js
amazonaws_sagemaker.ListArtifacts({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * ArtifactType
  * CreatedAfter
  * CreatedBefore
  * MaxResults
  * NextToken
  * SortBy
  * SortOrder
  * SourceUri

#### Output
* output [ListArtifactsResponse](#listartifactsresponse)

### ListAssociations



```js
amazonaws_sagemaker.ListAssociations({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * AssociationType
  * CreatedAfter
  * CreatedBefore
  * DestinationArn
  * DestinationType
  * MaxResults
  * NextToken
  * SortBy
  * SortOrder
  * SourceArn
  * SourceType

#### Output
* output [ListAssociationsResponse](#listassociationsresponse)

### ListAutoMLJobs



```js
amazonaws_sagemaker.ListAutoMLJobs({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * CreationTimeAfter
  * CreationTimeBefore
  * LastModifiedTimeAfter
  * LastModifiedTimeBefore
  * MaxResults
  * NameContains
  * NextToken
  * SortBy
  * SortOrder
  * StatusEquals

#### Output
* output [ListAutoMLJobsResponse](#listautomljobsresponse)

### ListCandidatesForAutoMLJob



```js
amazonaws_sagemaker.ListCandidatesForAutoMLJob({
  "AutoMLJobName": null
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * AutoMLJobName **required**
  * CandidateNameEquals
  * MaxResults
  * NextToken
  * SortBy
  * SortOrder
  * StatusEquals

#### Output
* output [ListCandidatesForAutoMLJobResponse](#listcandidatesforautomljobresponse)

### ListCodeRepositories



```js
amazonaws_sagemaker.ListCodeRepositories({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * CreationTimeAfter
  * CreationTimeBefore
  * LastModifiedTimeAfter
  * LastModifiedTimeBefore
  * MaxResults
  * NameContains
  * NextToken
  * SortBy
  * SortOrder

#### Output
* output [ListCodeRepositoriesOutput](#listcoderepositoriesoutput)

### ListCompilationJobs



```js
amazonaws_sagemaker.ListCompilationJobs({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * CreationTimeAfter
  * CreationTimeBefore
  * LastModifiedTimeAfter
  * LastModifiedTimeBefore
  * MaxResults
  * NameContains
  * NextToken
  * SortBy
  * SortOrder
  * StatusEquals

#### Output
* output [ListCompilationJobsResponse](#listcompilationjobsresponse)

### ListContexts



```js
amazonaws_sagemaker.ListContexts({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * ContextType
  * CreatedAfter
  * CreatedBefore
  * MaxResults
  * NextToken
  * SortBy
  * SortOrder
  * SourceUri

#### Output
* output [ListContextsResponse](#listcontextsresponse)

### ListDataQualityJobDefinitions



```js
amazonaws_sagemaker.ListDataQualityJobDefinitions({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * CreationTimeAfter
  * CreationTimeBefore
  * EndpointName
  * MaxResults
  * NameContains
  * NextToken
  * SortBy
  * SortOrder

#### Output
* output [ListDataQualityJobDefinitionsResponse](#listdataqualityjobdefinitionsresponse)

### ListDeviceFleets



```js
amazonaws_sagemaker.ListDeviceFleets({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * CreationTimeAfter
  * CreationTimeBefore
  * LastModifiedTimeAfter
  * LastModifiedTimeBefore
  * MaxResults
  * NameContains
  * NextToken
  * SortBy
  * SortOrder

#### Output
* output [ListDeviceFleetsResponse](#listdevicefleetsresponse)

### ListDevices



```js
amazonaws_sagemaker.ListDevices({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * DeviceFleetName
  * LatestHeartbeatAfter
  * MaxResults
  * ModelName
  * NextToken

#### Output
* output [ListDevicesResponse](#listdevicesresponse)

### ListDomains



```js
amazonaws_sagemaker.ListDomains({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults
  * NextToken

#### Output
* output [ListDomainsResponse](#listdomainsresponse)

### ListEdgePackagingJobs



```js
amazonaws_sagemaker.ListEdgePackagingJobs({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * CreationTimeAfter
  * CreationTimeBefore
  * LastModifiedTimeAfter
  * LastModifiedTimeBefore
  * MaxResults
  * ModelNameContains
  * NameContains
  * NextToken
  * SortBy
  * SortOrder
  * StatusEquals

#### Output
* output [ListEdgePackagingJobsResponse](#listedgepackagingjobsresponse)

### ListEndpointConfigs



```js
amazonaws_sagemaker.ListEndpointConfigs({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * CreationTimeAfter
  * CreationTimeBefore
  * MaxResults
  * NameContains
  * NextToken
  * SortBy
  * SortOrder

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
  * CreationTimeAfter
  * CreationTimeBefore
  * LastModifiedTimeAfter
  * LastModifiedTimeBefore
  * MaxResults
  * NameContains
  * NextToken
  * SortBy
  * SortOrder
  * StatusEquals

#### Output
* output [ListEndpointsOutput](#listendpointsoutput)

### ListExperiments



```js
amazonaws_sagemaker.ListExperiments({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * CreatedAfter
  * CreatedBefore
  * MaxResults
  * NextToken
  * SortBy
  * SortOrder

#### Output
* output [ListExperimentsResponse](#listexperimentsresponse)

### ListFeatureGroups



```js
amazonaws_sagemaker.ListFeatureGroups({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * CreationTimeAfter
  * CreationTimeBefore
  * FeatureGroupStatusEquals
  * MaxResults
  * NameContains
  * NextToken
  * OfflineStoreStatusEquals
  * SortBy
  * SortOrder

#### Output
* output [ListFeatureGroupsResponse](#listfeaturegroupsresponse)

### ListFlowDefinitions



```js
amazonaws_sagemaker.ListFlowDefinitions({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * CreationTimeAfter
  * CreationTimeBefore
  * MaxResults
  * NextToken
  * SortOrder

#### Output
* output [ListFlowDefinitionsResponse](#listflowdefinitionsresponse)

### ListHumanTaskUis



```js
amazonaws_sagemaker.ListHumanTaskUis({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * CreationTimeAfter
  * CreationTimeBefore
  * MaxResults
  * NextToken
  * SortOrder

#### Output
* output [ListHumanTaskUisResponse](#listhumantaskuisresponse)

### ListHyperParameterTuningJobs



```js
amazonaws_sagemaker.ListHyperParameterTuningJobs({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * CreationTimeAfter
  * CreationTimeBefore
  * LastModifiedTimeAfter
  * LastModifiedTimeBefore
  * MaxResults
  * NameContains
  * NextToken
  * SortBy
  * SortOrder
  * StatusEquals

#### Output
* output [ListHyperParameterTuningJobsResponse](#listhyperparametertuningjobsresponse)

### ListImageVersions



```js
amazonaws_sagemaker.ListImageVersions({
  "ImageName": null
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * CreationTimeAfter
  * CreationTimeBefore
  * ImageName **required**
  * LastModifiedTimeAfter
  * LastModifiedTimeBefore
  * MaxResults
  * NextToken
  * SortBy
  * SortOrder

#### Output
* output [ListImageVersionsResponse](#listimageversionsresponse)

### ListImages



```js
amazonaws_sagemaker.ListImages({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * CreationTimeAfter
  * CreationTimeBefore
  * LastModifiedTimeAfter
  * LastModifiedTimeBefore
  * MaxResults
  * NameContains
  * NextToken
  * SortBy
  * SortOrder

#### Output
* output [ListImagesResponse](#listimagesresponse)

### ListLabelingJobs



```js
amazonaws_sagemaker.ListLabelingJobs({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * CreationTimeAfter
  * CreationTimeBefore
  * LastModifiedTimeAfter
  * LastModifiedTimeBefore
  * MaxResults
  * NameContains
  * NextToken
  * SortBy
  * SortOrder
  * StatusEquals

#### Output
* output [ListLabelingJobsResponse](#listlabelingjobsresponse)

### ListLabelingJobsForWorkteam



```js
amazonaws_sagemaker.ListLabelingJobsForWorkteam({
  "WorkteamArn": null
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * CreationTimeAfter
  * CreationTimeBefore
  * JobReferenceCodeContains
  * MaxResults
  * NextToken
  * SortBy
  * SortOrder
  * WorkteamArn **required**

#### Output
* output [ListLabelingJobsForWorkteamResponse](#listlabelingjobsforworkteamresponse)

### ListModelBiasJobDefinitions



```js
amazonaws_sagemaker.ListModelBiasJobDefinitions({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * CreationTimeAfter
  * CreationTimeBefore
  * EndpointName
  * MaxResults
  * NameContains
  * NextToken
  * SortBy
  * SortOrder

#### Output
* output [ListModelBiasJobDefinitionsResponse](#listmodelbiasjobdefinitionsresponse)

### ListModelExplainabilityJobDefinitions



```js
amazonaws_sagemaker.ListModelExplainabilityJobDefinitions({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * CreationTimeAfter
  * CreationTimeBefore
  * EndpointName
  * MaxResults
  * NameContains
  * NextToken
  * SortBy
  * SortOrder

#### Output
* output [ListModelExplainabilityJobDefinitionsResponse](#listmodelexplainabilityjobdefinitionsresponse)

### ListModelPackageGroups



```js
amazonaws_sagemaker.ListModelPackageGroups({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * CreationTimeAfter
  * CreationTimeBefore
  * MaxResults
  * NameContains
  * NextToken
  * SortBy
  * SortOrder

#### Output
* output [ListModelPackageGroupsOutput](#listmodelpackagegroupsoutput)

### ListModelPackages



```js
amazonaws_sagemaker.ListModelPackages({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * CreationTimeAfter
  * CreationTimeBefore
  * MaxResults
  * ModelApprovalStatus
  * ModelPackageGroupName
  * ModelPackageType
  * NameContains
  * NextToken
  * SortBy
  * SortOrder

#### Output
* output [ListModelPackagesOutput](#listmodelpackagesoutput)

### ListModelQualityJobDefinitions



```js
amazonaws_sagemaker.ListModelQualityJobDefinitions({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * CreationTimeAfter
  * CreationTimeBefore
  * EndpointName
  * MaxResults
  * NameContains
  * NextToken
  * SortBy
  * SortOrder

#### Output
* output [ListModelQualityJobDefinitionsResponse](#listmodelqualityjobdefinitionsresponse)

### ListModels



```js
amazonaws_sagemaker.ListModels({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * CreationTimeAfter
  * CreationTimeBefore
  * MaxResults
  * NameContains
  * NextToken
  * SortBy
  * SortOrder

#### Output
* output [ListModelsOutput](#listmodelsoutput)

### ListMonitoringExecutions



```js
amazonaws_sagemaker.ListMonitoringExecutions({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * CreationTimeAfter
  * CreationTimeBefore
  * EndpointName
  * LastModifiedTimeAfter
  * LastModifiedTimeBefore
  * MaxResults
  * MonitoringJobDefinitionName
  * MonitoringScheduleName
  * MonitoringTypeEquals
  * NextToken
  * ScheduledTimeAfter
  * ScheduledTimeBefore
  * SortBy
  * SortOrder
  * StatusEquals

#### Output
* output [ListMonitoringExecutionsResponse](#listmonitoringexecutionsresponse)

### ListMonitoringSchedules



```js
amazonaws_sagemaker.ListMonitoringSchedules({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * CreationTimeAfter
  * CreationTimeBefore
  * EndpointName
  * LastModifiedTimeAfter
  * LastModifiedTimeBefore
  * MaxResults
  * MonitoringJobDefinitionName
  * MonitoringTypeEquals
  * NameContains
  * NextToken
  * SortBy
  * SortOrder
  * StatusEquals

#### Output
* output [ListMonitoringSchedulesResponse](#listmonitoringschedulesresponse)

### ListNotebookInstanceLifecycleConfigs



```js
amazonaws_sagemaker.ListNotebookInstanceLifecycleConfigs({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * CreationTimeAfter
  * CreationTimeBefore
  * LastModifiedTimeAfter
  * LastModifiedTimeBefore
  * MaxResults
  * NameContains
  * NextToken
  * SortBy
  * SortOrder

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
  * AdditionalCodeRepositoryEquals
  * CreationTimeAfter
  * CreationTimeBefore
  * DefaultCodeRepositoryContains
  * LastModifiedTimeAfter
  * LastModifiedTimeBefore
  * MaxResults
  * NameContains
  * NextToken
  * NotebookInstanceLifecycleConfigNameContains
  * SortBy
  * SortOrder
  * StatusEquals

#### Output
* output [ListNotebookInstancesOutput](#listnotebookinstancesoutput)

### ListPipelineExecutionSteps



```js
amazonaws_sagemaker.ListPipelineExecutionSteps({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults
  * NextToken
  * PipelineExecutionArn
  * SortOrder

#### Output
* output [ListPipelineExecutionStepsResponse](#listpipelineexecutionstepsresponse)

### ListPipelineExecutions



```js
amazonaws_sagemaker.ListPipelineExecutions({
  "PipelineName": null
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * CreatedAfter
  * CreatedBefore
  * MaxResults
  * NextToken
  * PipelineName **required**
  * SortBy
  * SortOrder

#### Output
* output [ListPipelineExecutionsResponse](#listpipelineexecutionsresponse)

### ListPipelineParametersForExecution



```js
amazonaws_sagemaker.ListPipelineParametersForExecution({
  "PipelineExecutionArn": null
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults
  * NextToken
  * PipelineExecutionArn **required**

#### Output
* output [ListPipelineParametersForExecutionResponse](#listpipelineparametersforexecutionresponse)

### ListPipelines



```js
amazonaws_sagemaker.ListPipelines({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * CreatedAfter
  * CreatedBefore
  * MaxResults
  * NextToken
  * PipelineNamePrefix
  * SortBy
  * SortOrder

#### Output
* output [ListPipelinesResponse](#listpipelinesresponse)

### ListProcessingJobs



```js
amazonaws_sagemaker.ListProcessingJobs({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * CreationTimeAfter
  * CreationTimeBefore
  * LastModifiedTimeAfter
  * LastModifiedTimeBefore
  * MaxResults
  * NameContains
  * NextToken
  * SortBy
  * SortOrder
  * StatusEquals

#### Output
* output [ListProcessingJobsResponse](#listprocessingjobsresponse)

### ListProjects



```js
amazonaws_sagemaker.ListProjects({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * CreationTimeAfter
  * CreationTimeBefore
  * MaxResults
  * NameContains
  * NextToken
  * SortBy
  * SortOrder

#### Output
* output [ListProjectsOutput](#listprojectsoutput)

### ListSubscribedWorkteams



```js
amazonaws_sagemaker.ListSubscribedWorkteams({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults
  * NameContains
  * NextToken

#### Output
* output [ListSubscribedWorkteamsResponse](#listsubscribedworkteamsresponse)

### ListTags



```js
amazonaws_sagemaker.ListTags({
  "ResourceArn": null
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults
  * NextToken
  * ResourceArn **required**

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
  * CreationTimeAfter
  * CreationTimeBefore
  * LastModifiedTimeAfter
  * LastModifiedTimeBefore
  * MaxResults
  * NameContains
  * NextToken
  * SortBy
  * SortOrder
  * StatusEquals

#### Output
* output [ListTrainingJobsResponse](#listtrainingjobsresponse)

### ListTrainingJobsForHyperParameterTuningJob



```js
amazonaws_sagemaker.ListTrainingJobsForHyperParameterTuningJob({
  "HyperParameterTuningJobName": null
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * HyperParameterTuningJobName **required**
  * MaxResults
  * NextToken
  * SortBy
  * SortOrder
  * StatusEquals

#### Output
* output [ListTrainingJobsForHyperParameterTuningJobResponse](#listtrainingjobsforhyperparametertuningjobresponse)

### ListTransformJobs



```js
amazonaws_sagemaker.ListTransformJobs({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * CreationTimeAfter
  * CreationTimeBefore
  * LastModifiedTimeAfter
  * LastModifiedTimeBefore
  * MaxResults
  * NameContains
  * NextToken
  * SortBy
  * SortOrder
  * StatusEquals

#### Output
* output [ListTransformJobsResponse](#listtransformjobsresponse)

### ListTrialComponents



```js
amazonaws_sagemaker.ListTrialComponents({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * CreatedAfter
  * CreatedBefore
  * ExperimentName
  * MaxResults
  * NextToken
  * SortBy
  * SortOrder
  * SourceArn
  * TrialName

#### Output
* output [ListTrialComponentsResponse](#listtrialcomponentsresponse)

### ListTrials



```js
amazonaws_sagemaker.ListTrials({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * CreatedAfter
  * CreatedBefore
  * ExperimentName
  * MaxResults
  * NextToken
  * SortBy
  * SortOrder
  * TrialComponentName

#### Output
* output [ListTrialsResponse](#listtrialsresponse)

### ListUserProfiles



```js
amazonaws_sagemaker.ListUserProfiles({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * DomainIdEquals
  * MaxResults
  * NextToken
  * SortBy
  * SortOrder
  * UserProfileNameContains

#### Output
* output [ListUserProfilesResponse](#listuserprofilesresponse)

### ListWorkforces



```js
amazonaws_sagemaker.ListWorkforces({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults
  * NameContains
  * NextToken
  * SortBy
  * SortOrder

#### Output
* output [ListWorkforcesResponse](#listworkforcesresponse)

### ListWorkteams



```js
amazonaws_sagemaker.ListWorkteams({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults
  * NameContains
  * NextToken
  * SortBy
  * SortOrder

#### Output
* output [ListWorkteamsResponse](#listworkteamsresponse)

### PutModelPackageGroupPolicy



```js
amazonaws_sagemaker.PutModelPackageGroupPolicy({
  "ModelPackageGroupName": null,
  "ResourcePolicy": null
}, context)
```

#### Input
* input `object`
  * ModelPackageGroupName **required**
  * ResourcePolicy **required**

#### Output
* output [PutModelPackageGroupPolicyOutput](#putmodelpackagegrouppolicyoutput)

### RegisterDevices



```js
amazonaws_sagemaker.RegisterDevices({
  "DeviceFleetName": null,
  "Devices": null
}, context)
```

#### Input
* input `object`
  * DeviceFleetName **required**
  * Devices **required**
    * items [Device](#device)
  * Tags
    * items [Tag](#tag)

#### Output
*Output schema unknown*

### RenderUiTemplate



```js
amazonaws_sagemaker.RenderUiTemplate({
  "Task": null,
  "RoleArn": null
}, context)
```

#### Input
* input `object`
  * HumanTaskUiArn
  * RoleArn **required**
  * Task **required**
    * Input **required**
  * UiTemplate
    * Content **required**

#### Output
* output [RenderUiTemplateResponse](#renderuitemplateresponse)

### Search



```js
amazonaws_sagemaker.Search({
  "Resource": null
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults
  * NextToken
  * Resource **required**
  * SearchExpression
    * Filters
      * items [Filter](#filter)
    * NestedFilters
      * items [NestedFilters](#nestedfilters)
    * Operator
    * SubExpressions
      * items [SearchExpression](#searchexpression)
  * SortBy
  * SortOrder

#### Output
* output [SearchResponse](#searchresponse)

### StartMonitoringSchedule



```js
amazonaws_sagemaker.StartMonitoringSchedule({
  "MonitoringScheduleName": null
}, context)
```

#### Input
* input `object`
  * MonitoringScheduleName **required**

#### Output
*Output schema unknown*

### StartNotebookInstance



```js
amazonaws_sagemaker.StartNotebookInstance({
  "NotebookInstanceName": null
}, context)
```

#### Input
* input `object`
  * NotebookInstanceName **required**

#### Output
*Output schema unknown*

### StartPipelineExecution



```js
amazonaws_sagemaker.StartPipelineExecution({
  "PipelineName": null,
  "ClientRequestToken": null
}, context)
```

#### Input
* input `object`
  * ClientRequestToken **required**
  * PipelineExecutionDescription
  * PipelineExecutionDisplayName
  * PipelineName **required**
  * PipelineParameters
    * items [Parameter](#parameter)

#### Output
* output [StartPipelineExecutionResponse](#startpipelineexecutionresponse)

### StopAutoMLJob



```js
amazonaws_sagemaker.StopAutoMLJob({
  "AutoMLJobName": null
}, context)
```

#### Input
* input `object`
  * AutoMLJobName **required**

#### Output
*Output schema unknown*

### StopCompilationJob



```js
amazonaws_sagemaker.StopCompilationJob({
  "CompilationJobName": null
}, context)
```

#### Input
* input `object`
  * CompilationJobName **required**

#### Output
*Output schema unknown*

### StopEdgePackagingJob



```js
amazonaws_sagemaker.StopEdgePackagingJob({
  "EdgePackagingJobName": null
}, context)
```

#### Input
* input `object`
  * EdgePackagingJobName **required**

#### Output
*Output schema unknown*

### StopHyperParameterTuningJob



```js
amazonaws_sagemaker.StopHyperParameterTuningJob({
  "HyperParameterTuningJobName": null
}, context)
```

#### Input
* input `object`
  * HyperParameterTuningJobName **required**

#### Output
*Output schema unknown*

### StopLabelingJob



```js
amazonaws_sagemaker.StopLabelingJob({
  "LabelingJobName": null
}, context)
```

#### Input
* input `object`
  * LabelingJobName **required**

#### Output
*Output schema unknown*

### StopMonitoringSchedule



```js
amazonaws_sagemaker.StopMonitoringSchedule({
  "MonitoringScheduleName": null
}, context)
```

#### Input
* input `object`
  * MonitoringScheduleName **required**

#### Output
*Output schema unknown*

### StopNotebookInstance



```js
amazonaws_sagemaker.StopNotebookInstance({
  "NotebookInstanceName": null
}, context)
```

#### Input
* input `object`
  * NotebookInstanceName **required**

#### Output
*Output schema unknown*

### StopPipelineExecution



```js
amazonaws_sagemaker.StopPipelineExecution({
  "PipelineExecutionArn": null,
  "ClientRequestToken": null
}, context)
```

#### Input
* input `object`
  * ClientRequestToken **required**
  * PipelineExecutionArn **required**

#### Output
* output [StopPipelineExecutionResponse](#stoppipelineexecutionresponse)

### StopProcessingJob



```js
amazonaws_sagemaker.StopProcessingJob({
  "ProcessingJobName": null
}, context)
```

#### Input
* input `object`
  * ProcessingJobName **required**

#### Output
*Output schema unknown*

### StopTrainingJob



```js
amazonaws_sagemaker.StopTrainingJob({
  "TrainingJobName": null
}, context)
```

#### Input
* input `object`
  * TrainingJobName **required**

#### Output
*Output schema unknown*

### StopTransformJob



```js
amazonaws_sagemaker.StopTransformJob({
  "TransformJobName": null
}, context)
```

#### Input
* input `object`
  * TransformJobName **required**

#### Output
*Output schema unknown*

### UpdateAction



```js
amazonaws_sagemaker.UpdateAction({
  "ActionName": null
}, context)
```

#### Input
* input `object`
  * ActionName **required**
  * Description
  * Properties
  * PropertiesToRemove
    * items [StringParameterValue](#stringparametervalue)
  * Status

#### Output
* output [UpdateActionResponse](#updateactionresponse)

### UpdateAppImageConfig



```js
amazonaws_sagemaker.UpdateAppImageConfig({
  "AppImageConfigName": null
}, context)
```

#### Input
* input `object`
  * AppImageConfigName **required**
  * KernelGatewayImageConfig
    * FileSystemConfig
      * DefaultGid
      * DefaultUid
      * MountPath
    * KernelSpecs **required**
      * items [KernelSpec](#kernelspec)

#### Output
* output [UpdateAppImageConfigResponse](#updateappimageconfigresponse)

### UpdateArtifact



```js
amazonaws_sagemaker.UpdateArtifact({
  "ArtifactArn": null
}, context)
```

#### Input
* input `object`
  * ArtifactArn **required**
  * ArtifactName
  * Properties
  * PropertiesToRemove
    * items [StringParameterValue](#stringparametervalue)

#### Output
* output [UpdateArtifactResponse](#updateartifactresponse)

### UpdateCodeRepository



```js
amazonaws_sagemaker.UpdateCodeRepository({
  "CodeRepositoryName": null
}, context)
```

#### Input
* input `object`
  * CodeRepositoryName **required**
  * GitConfig
    * SecretArn

#### Output
* output [UpdateCodeRepositoryOutput](#updatecoderepositoryoutput)

### UpdateContext



```js
amazonaws_sagemaker.UpdateContext({
  "ContextName": null
}, context)
```

#### Input
* input `object`
  * ContextName **required**
  * Description
  * Properties
  * PropertiesToRemove
    * items [StringParameterValue](#stringparametervalue)

#### Output
* output [UpdateContextResponse](#updatecontextresponse)

### UpdateDeviceFleet



```js
amazonaws_sagemaker.UpdateDeviceFleet({
  "DeviceFleetName": null,
  "OutputConfig": null
}, context)
```

#### Input
* input `object`
  * Description
  * DeviceFleetName **required**
  * OutputConfig **required**
    * KmsKeyId
    * S3OutputLocation **required**
  * RoleArn

#### Output
*Output schema unknown*

### UpdateDevices



```js
amazonaws_sagemaker.UpdateDevices({
  "DeviceFleetName": null,
  "Devices": null
}, context)
```

#### Input
* input `object`
  * DeviceFleetName **required**
  * Devices **required**
    * items [Device](#device)

#### Output
*Output schema unknown*

### UpdateDomain



```js
amazonaws_sagemaker.UpdateDomain({
  "DomainId": null
}, context)
```

#### Input
* input `object`
  * DefaultUserSettings
    * ExecutionRole
    * JupyterServerAppSettings
      * DefaultResourceSpec
        * InstanceType
        * SageMakerImageArn
        * SageMakerImageVersionArn
    * KernelGatewayAppSettings
      * CustomImages
        * items [CustomImage](#customimage)
      * DefaultResourceSpec
        * InstanceType
        * SageMakerImageArn
        * SageMakerImageVersionArn
    * SecurityGroups
      * items [SecurityGroupId](#securitygroupid)
    * SharingSettings
      * NotebookOutputOption
      * S3KmsKeyId
      * S3OutputPath
    * TensorBoardAppSettings
      * DefaultResourceSpec
        * InstanceType
        * SageMakerImageArn
        * SageMakerImageVersionArn
  * DomainId **required**

#### Output
* output [UpdateDomainResponse](#updatedomainresponse)

### UpdateEndpoint



```js
amazonaws_sagemaker.UpdateEndpoint({
  "EndpointName": null,
  "EndpointConfigName": null
}, context)
```

#### Input
* input `object`
  * DeploymentConfig
    * AutoRollbackConfiguration
      * Alarms
        * items [Alarm](#alarm)
    * BlueGreenUpdatePolicy **required**
      * MaximumExecutionTimeoutInSeconds
      * TerminationWaitInSeconds
      * TrafficRoutingConfiguration **required**
        * CanarySize
          * Type **required**
          * Value **required**
        * Type **required**
        * WaitIntervalInSeconds **required**
  * EndpointConfigName **required**
  * EndpointName **required**
  * ExcludeRetainedVariantProperties
    * items [VariantProperty](#variantproperty)
  * RetainAllVariantProperties

#### Output
* output [UpdateEndpointOutput](#updateendpointoutput)

### UpdateEndpointWeightsAndCapacities



```js
amazonaws_sagemaker.UpdateEndpointWeightsAndCapacities({
  "EndpointName": null,
  "DesiredWeightsAndCapacities": null
}, context)
```

#### Input
* input `object`
  * DesiredWeightsAndCapacities **required**
    * items [DesiredWeightAndCapacity](#desiredweightandcapacity)
  * EndpointName **required**

#### Output
* output [UpdateEndpointWeightsAndCapacitiesOutput](#updateendpointweightsandcapacitiesoutput)

### UpdateExperiment



```js
amazonaws_sagemaker.UpdateExperiment({
  "ExperimentName": null
}, context)
```

#### Input
* input `object`
  * Description
  * DisplayName
  * ExperimentName **required**

#### Output
* output [UpdateExperimentResponse](#updateexperimentresponse)

### UpdateImage



```js
amazonaws_sagemaker.UpdateImage({
  "ImageName": null
}, context)
```

#### Input
* input `object`
  * DeleteProperties
    * items [ImageDeleteProperty](#imagedeleteproperty)
  * Description
  * DisplayName
  * ImageName **required**
  * RoleArn

#### Output
* output [UpdateImageResponse](#updateimageresponse)

### UpdateModelPackage



```js
amazonaws_sagemaker.UpdateModelPackage({
  "ModelPackageArn": null,
  "ModelApprovalStatus": null
}, context)
```

#### Input
* input `object`
  * ApprovalDescription
  * ModelApprovalStatus **required**
  * ModelPackageArn **required**

#### Output
* output [UpdateModelPackageOutput](#updatemodelpackageoutput)

### UpdateMonitoringSchedule



```js
amazonaws_sagemaker.UpdateMonitoringSchedule({
  "MonitoringScheduleName": null,
  "MonitoringScheduleConfig": null
}, context)
```

#### Input
* input `object`
  * MonitoringScheduleConfig **required**
    * MonitoringJobDefinition
      * BaselineConfig
        * BaseliningJobName
        * ConstraintsResource
          * S3Uri
        * StatisticsResource
          * S3Uri
      * Environment
      * MonitoringAppSpecification **required**
        * ContainerArguments
          * items [ContainerArgument](#containerargument)
        * ContainerEntrypoint
          * items [ContainerEntrypointString](#containerentrypointstring)
        * ImageUri **required**
        * PostAnalyticsProcessorSourceUri
        * RecordPreprocessorSourceUri
      * MonitoringInputs **required**
        * items [MonitoringInput](#monitoringinput)
      * MonitoringOutputConfig **required**
        * KmsKeyId
        * MonitoringOutputs **required**
          * items [MonitoringOutput](#monitoringoutput)
      * MonitoringResources **required**
        * ClusterConfig **required**
          * InstanceCount **required**
          * InstanceType **required**
          * VolumeKmsKeyId
          * VolumeSizeInGB **required**
      * NetworkConfig
        * EnableInterContainerTrafficEncryption
        * EnableNetworkIsolation
        * VpcConfig [VpcConfig](#vpcconfig)
      * RoleArn **required**
      * StoppingCondition
        * MaxRuntimeInSeconds **required**
    * MonitoringJobDefinitionName
    * MonitoringType
    * ScheduleConfig
      * ScheduleExpression **required**
  * MonitoringScheduleName **required**

#### Output
* output [UpdateMonitoringScheduleResponse](#updatemonitoringscheduleresponse)

### UpdateNotebookInstance



```js
amazonaws_sagemaker.UpdateNotebookInstance({
  "NotebookInstanceName": null
}, context)
```

#### Input
* input `object`
  * AcceleratorTypes
    * items [NotebookInstanceAcceleratorType](#notebookinstanceacceleratortype)
  * AdditionalCodeRepositories
    * items [CodeRepositoryNameOrUrl](#coderepositorynameorurl)
  * DefaultCodeRepository
  * DisassociateAcceleratorTypes
  * DisassociateAdditionalCodeRepositories
  * DisassociateDefaultCodeRepository
  * DisassociateLifecycleConfig
  * InstanceType
  * LifecycleConfigName
  * NotebookInstanceName **required**
  * RoleArn
  * RootAccess
  * VolumeSizeInGB

#### Output
* output [UpdateNotebookInstanceOutput](#updatenotebookinstanceoutput)

### UpdateNotebookInstanceLifecycleConfig



```js
amazonaws_sagemaker.UpdateNotebookInstanceLifecycleConfig({
  "NotebookInstanceLifecycleConfigName": null
}, context)
```

#### Input
* input `object`
  * NotebookInstanceLifecycleConfigName **required**
  * OnCreate
    * items [NotebookInstanceLifecycleHook](#notebookinstancelifecyclehook)
  * OnStart
    * items [NotebookInstanceLifecycleHook](#notebookinstancelifecyclehook)

#### Output
* output [UpdateNotebookInstanceLifecycleConfigOutput](#updatenotebookinstancelifecycleconfigoutput)

### UpdatePipeline



```js
amazonaws_sagemaker.UpdatePipeline({
  "PipelineName": null
}, context)
```

#### Input
* input `object`
  * PipelineDefinition
  * PipelineDescription
  * PipelineDisplayName
  * PipelineName **required**
  * RoleArn

#### Output
* output [UpdatePipelineResponse](#updatepipelineresponse)

### UpdatePipelineExecution



```js
amazonaws_sagemaker.UpdatePipelineExecution({
  "PipelineExecutionArn": null
}, context)
```

#### Input
* input `object`
  * PipelineExecutionArn **required**
  * PipelineExecutionDescription
  * PipelineExecutionDisplayName

#### Output
* output [UpdatePipelineExecutionResponse](#updatepipelineexecutionresponse)

### UpdateTrainingJob



```js
amazonaws_sagemaker.UpdateTrainingJob({
  "TrainingJobName": null
}, context)
```

#### Input
* input `object`
  * ProfilerConfig
    * DisableProfiler
    * ProfilingIntervalInMilliseconds
    * ProfilingParameters
    * S3OutputPath
  * ProfilerRuleConfigurations
    * items [ProfilerRuleConfiguration](#profilerruleconfiguration)
  * TrainingJobName **required**

#### Output
* output [UpdateTrainingJobResponse](#updatetrainingjobresponse)

### UpdateTrial



```js
amazonaws_sagemaker.UpdateTrial({
  "TrialName": null
}, context)
```

#### Input
* input `object`
  * DisplayName
  * TrialName **required**

#### Output
* output [UpdateTrialResponse](#updatetrialresponse)

### UpdateTrialComponent



```js
amazonaws_sagemaker.UpdateTrialComponent({
  "TrialComponentName": null
}, context)
```

#### Input
* input `object`
  * DisplayName
  * EndTime
  * InputArtifacts
  * InputArtifactsToRemove
    * items [TrialComponentKey256](#trialcomponentkey256)
  * OutputArtifacts
  * OutputArtifactsToRemove
    * items [TrialComponentKey256](#trialcomponentkey256)
  * Parameters
  * ParametersToRemove
    * items [TrialComponentKey256](#trialcomponentkey256)
  * StartTime
  * Status
    * Message
    * PrimaryStatus
  * TrialComponentName **required**

#### Output
* output [UpdateTrialComponentResponse](#updatetrialcomponentresponse)

### UpdateUserProfile



```js
amazonaws_sagemaker.UpdateUserProfile({
  "DomainId": null,
  "UserProfileName": null
}, context)
```

#### Input
* input `object`
  * DomainId **required**
  * UserProfileName **required**
  * UserSettings
    * ExecutionRole
    * JupyterServerAppSettings
      * DefaultResourceSpec
        * InstanceType
        * SageMakerImageArn
        * SageMakerImageVersionArn
    * KernelGatewayAppSettings
      * CustomImages
        * items [CustomImage](#customimage)
      * DefaultResourceSpec
        * InstanceType
        * SageMakerImageArn
        * SageMakerImageVersionArn
    * SecurityGroups
      * items [SecurityGroupId](#securitygroupid)
    * SharingSettings
      * NotebookOutputOption
      * S3KmsKeyId
      * S3OutputPath
    * TensorBoardAppSettings
      * DefaultResourceSpec
        * InstanceType
        * SageMakerImageArn
        * SageMakerImageVersionArn

#### Output
* output [UpdateUserProfileResponse](#updateuserprofileresponse)

### UpdateWorkforce



```js
amazonaws_sagemaker.UpdateWorkforce({
  "WorkforceName": null
}, context)
```

#### Input
* input `object`
  * OidcConfig
    * AuthorizationEndpoint **required**
    * ClientId **required**
    * ClientSecret **required**
    * Issuer **required**
    * JwksUri **required**
    * LogoutEndpoint **required**
    * TokenEndpoint **required**
    * UserInfoEndpoint **required**
  * SourceIpConfig
    * Cidrs **required**
      * items [Cidr](#cidr)
  * WorkforceName **required**

#### Output
* output [UpdateWorkforceResponse](#updateworkforceresponse)

### UpdateWorkteam



```js
amazonaws_sagemaker.UpdateWorkteam({
  "WorkteamName": null
}, context)
```

#### Input
* input `object`
  * Description
  * MemberDefinitions
    * items [MemberDefinition](#memberdefinition)
  * NotificationConfiguration
    * NotificationTopicArn
  * WorkteamName **required**

#### Output
* output [UpdateWorkteamResponse](#updateworkteamresponse)



## Definitions

### Accept
* Accept `string`

### AccountId
* AccountId `string`

### ActionArn
* ActionArn `string`

### ActionSource
* ActionSource `object`: A structure describing the source of an action.
  * SourceId
  * SourceType
  * SourceUri **required**

### ActionStatus
* ActionStatus `string` (values: Unknown, InProgress, Completed, Failed, Stopping, Stopped)

### ActionSummaries
* ActionSummaries `array`
  * items [ActionSummary](#actionsummary)

### ActionSummary
* ActionSummary `object`: Lists the properties of an <i>action</i>. An action represents an action or activity. Some examples are a workflow step and a model deployment. Generally, an action involves at least one input artifact or output artifact.
  * ActionArn
  * ActionName
  * ActionType
  * CreationTime
  * LastModifiedTime
  * Source
    * SourceId
    * SourceType
    * SourceUri **required**
  * Status

### AddAssociationRequest
* AddAssociationRequest `object`
  * AssociationType
  * DestinationArn **required**
  * SourceArn **required**

### AddAssociationResponse
* AddAssociationResponse `object`
  * DestinationArn
  * SourceArn

### AddTagsInput
* AddTagsInput `object`
  * ResourceArn **required**
  * Tags **required**
    * items [Tag](#tag)

### AddTagsOutput
* AddTagsOutput `object`
  * Tags
    * items [Tag](#tag)

### AdditionalCodeRepositoryNamesOrUrls
* AdditionalCodeRepositoryNamesOrUrls `array`
  * items [CodeRepositoryNameOrUrl](#coderepositorynameorurl)

### AgentVersion
* AgentVersion `object`: Edge Manager agent version.
  * AgentCount **required**
  * Version **required**

### AgentVersions
* AgentVersions `array`
  * items [AgentVersion](#agentversion)

### Alarm
* Alarm `object`: This API is not supported.
  * AlarmName

### AlarmList
* AlarmList `array`
  * items [Alarm](#alarm)

### AlarmName
* AlarmName `string`

### AlgorithmArn
* AlgorithmArn `string`

### AlgorithmImage
* AlgorithmImage `string`

### AlgorithmSortBy
* AlgorithmSortBy `string` (values: Name, CreationTime)

### AlgorithmSpecification
* AlgorithmSpecification `object`: <p>Specifies the training algorithm to use in a <a>CreateTrainingJob</a> request.</p> <p>For more information about algorithms provided by Amazon SageMaker, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/algos.html">Algorithms</a>. For information about using your own algorithms, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/your-algorithms.html">Using Your Own Algorithms with Amazon SageMaker</a>. </p>
  * AlgorithmName
  * EnableSageMakerMetricsTimeSeries
  * MetricDefinitions
    * items [MetricDefinition](#metricdefinition)
  * TrainingImage
  * TrainingInputMode **required**

### AlgorithmStatus
* AlgorithmStatus `string` (values: Pending, InProgress, Completed, Failed, Deleting)

### AlgorithmStatusDetails
* AlgorithmStatusDetails `object`: Specifies the validation and image scan statuses of the algorithm.
  * ImageScanStatuses
    * items [AlgorithmStatusItem](#algorithmstatusitem)
  * ValidationStatuses
    * items [AlgorithmStatusItem](#algorithmstatusitem)

### AlgorithmStatusItem
* AlgorithmStatusItem `object`: Represents the overall status of an algorithm.
  * FailureReason
  * Name **required**
  * Status **required**

### AlgorithmStatusItemList
* AlgorithmStatusItemList `array`
  * items [AlgorithmStatusItem](#algorithmstatusitem)

### AlgorithmSummary
* AlgorithmSummary `object`: Provides summary information about an algorithm.
  * AlgorithmArn **required**
  * AlgorithmDescription
  * AlgorithmName **required**
  * AlgorithmStatus **required**
  * CreationTime **required**

### AlgorithmSummaryList
* AlgorithmSummaryList `array`
  * items [AlgorithmSummary](#algorithmsummary)

### AlgorithmValidationProfile
* AlgorithmValidationProfile `object`: <p>Defines a training job and a batch transform job that Amazon SageMaker runs to validate your algorithm.</p> <p>The data provided in the validation profile is made available to your buyers on AWS Marketplace.</p>
  * ProfileName **required**
  * TrainingJobDefinition **required**
    * HyperParameters
    * InputDataConfig **required**
      * items [Channel](#channel)
    * OutputDataConfig **required**
      * KmsKeyId
      * S3OutputPath **required**
    * ResourceConfig **required**
      * InstanceCount **required**
      * InstanceType **required**
      * VolumeKmsKeyId
      * VolumeSizeInGB **required**
    * StoppingCondition **required**
      * MaxRuntimeInSeconds
      * MaxWaitTimeInSeconds
    * TrainingInputMode **required**
  * TransformJobDefinition
    * BatchStrategy
    * Environment
    * MaxConcurrentTransforms
    * MaxPayloadInMB
    * TransformInput **required**
      * CompressionType
      * ContentType
      * DataSource **required**
        * S3DataSource **required**
          * S3DataType **required**
          * S3Uri **required**
      * SplitType
    * TransformOutput **required**
      * Accept
      * AssembleWith
      * KmsKeyId
      * S3OutputPath **required**
    * TransformResources **required**
      * InstanceCount **required**
      * InstanceType **required**
      * VolumeKmsKeyId

### AlgorithmValidationProfiles
* AlgorithmValidationProfiles `array`
  * items [AlgorithmValidationProfile](#algorithmvalidationprofile)

### AlgorithmValidationSpecification
* AlgorithmValidationSpecification `object`: Specifies configurations for one or more training jobs that Amazon SageMaker runs to test the algorithm.
  * ValidationProfiles **required**
    * items [AlgorithmValidationProfile](#algorithmvalidationprofile)
  * ValidationRole **required**

### AnnotationConsolidationConfig
* AnnotationConsolidationConfig `object`: Configures how labels are consolidated across human workers and processes output data. 
  * AnnotationConsolidationLambdaArn **required**

### AppArn
* AppArn `string`

### AppDetails
* AppDetails `object`: Details about an Amazon SageMaker app.
  * AppName
  * AppType
  * CreationTime
  * DomainId
  * Status
  * UserProfileName

### AppImageConfigArn
* AppImageConfigArn `string`

### AppImageConfigDetails
* AppImageConfigDetails `object`: The configuration for running a SageMaker image as a KernelGateway app.
  * AppImageConfigArn
  * AppImageConfigName
  * CreationTime
  * KernelGatewayImageConfig
    * FileSystemConfig
      * DefaultGid
      * DefaultUid
      * MountPath
    * KernelSpecs **required**
      * items [KernelSpec](#kernelspec)
  * LastModifiedTime

### AppImageConfigList
* AppImageConfigList `array`
  * items [AppImageConfigDetails](#appimageconfigdetails)

### AppImageConfigName
* AppImageConfigName `string`

### AppImageConfigSortKey
* AppImageConfigSortKey `string` (values: CreationTime, LastModifiedTime, Name)

### AppInstanceType
* AppInstanceType `string` (values: system, ml.t3.micro, ml.t3.small, ml.t3.medium, ml.t3.large, ml.t3.xlarge, ml.t3.2xlarge, ml.m5.large, ml.m5.xlarge, ml.m5.2xlarge, ml.m5.4xlarge, ml.m5.8xlarge, ml.m5.12xlarge, ml.m5.16xlarge, ml.m5.24xlarge, ml.c5.large, ml.c5.xlarge, ml.c5.2xlarge, ml.c5.4xlarge, ml.c5.9xlarge, ml.c5.12xlarge, ml.c5.18xlarge, ml.c5.24xlarge, ml.p3.2xlarge, ml.p3.8xlarge, ml.p3.16xlarge, ml.g4dn.xlarge, ml.g4dn.2xlarge, ml.g4dn.4xlarge, ml.g4dn.8xlarge, ml.g4dn.12xlarge, ml.g4dn.16xlarge)

### AppList
* AppList `array`
  * items [AppDetails](#appdetails)

### AppManaged
* AppManaged `boolean`

### AppName
* AppName `string`

### AppNetworkAccessType
* AppNetworkAccessType `string` (values: PublicInternetOnly, VpcOnly)

### AppSortKey
* AppSortKey `string` (values: CreationTime)

### AppSpecification
* AppSpecification `object`: Configuration to run a processing job in a specified container image.
  * ContainerArguments
    * items [ContainerArgument](#containerargument)
  * ContainerEntrypoint
    * items [ContainerEntrypointString](#containerentrypointstring)
  * ImageUri **required**

### AppStatus
* AppStatus `string` (values: Deleted, Deleting, Failed, InService, Pending)

### AppType
* AppType `string` (values: JupyterServer, KernelGateway, TensorBoard)

### ApprovalDescription
* ApprovalDescription `string`

### ArnOrName
* ArnOrName `string`

### ArtifactArn
* ArtifactArn `string`

### ArtifactDigest
* ArtifactDigest `string`

### ArtifactSource
* ArtifactSource `object`: A structure describing the source of an artifact.
  * SourceTypes
    * items [ArtifactSourceType](#artifactsourcetype)
  * SourceUri **required**

### ArtifactSourceIdType
* ArtifactSourceIdType `string` (values: MD5Hash, S3ETag, S3Version, Custom)

### ArtifactSourceType
* ArtifactSourceType `object`: The ID and ID type of an artifact source.
  * SourceIdType **required**
  * Value **required**

### ArtifactSourceTypes
* ArtifactSourceTypes `array`
  * items [ArtifactSourceType](#artifactsourcetype)

### ArtifactSummaries
* ArtifactSummaries `array`
  * items [ArtifactSummary](#artifactsummary)

### ArtifactSummary
* ArtifactSummary `object`: Lists a summary of the properties of an artifact. An artifact represents a URI addressable object or data. Some examples are a dataset and a model.
  * ArtifactArn
  * ArtifactName
  * ArtifactType
  * CreationTime
  * LastModifiedTime
  * Source
    * SourceTypes
      * items [ArtifactSourceType](#artifactsourcetype)
    * SourceUri **required**

### AssemblyType
* AssemblyType `string` (values: None, Line)

### AssociateTrialComponentRequest
* AssociateTrialComponentRequest `object`
  * TrialComponentName **required**
  * TrialName **required**

### AssociateTrialComponentResponse
* AssociateTrialComponentResponse `object`
  * TrialArn
  * TrialComponentArn

### AssociationEdgeType
* AssociationEdgeType `string` (values: ContributedTo, AssociatedWith, DerivedFrom, Produced)

### AssociationEntityArn
* AssociationEntityArn `string`

### AssociationSummaries
* AssociationSummaries `array`
  * items [AssociationSummary](#associationsummary)

### AssociationSummary
* AssociationSummary `object`: Lists a summary of the properties of an association. An association is an entity that links other lineage or experiment entities. An example would be an association between a training job and a model.
  * AssociationType
  * CreatedBy [UserContext](#usercontext)
  * CreationTime
  * DestinationArn
  * DestinationName
  * DestinationType
  * SourceArn
  * SourceName
  * SourceType

### AthenaCatalog
* AthenaCatalog `string`: The name of the data catalog used in Athena query execution.

### AthenaDatabase
* AthenaDatabase `string`: The name of the database used in the Athena query execution.

### AthenaDatasetDefinition
* AthenaDatasetDefinition `object`: Configuration for Athena Dataset Definition input.
  * Catalog **required** [AthenaCatalog](#athenacatalog)
  * Database **required** [AthenaDatabase](#athenadatabase)
  * KmsKeyId
  * OutputCompression [AthenaResultCompressionType](#athenaresultcompressiontype)
  * OutputFormat **required** [AthenaResultFormat](#athenaresultformat)
  * OutputS3Uri **required**
  * QueryString **required** [AthenaQueryString](#athenaquerystring)
  * WorkGroup [AthenaWorkGroup](#athenaworkgroup)

### AthenaQueryString
* AthenaQueryString `string`: The SQL query statements, to be executed.

### AthenaResultCompressionType
* AthenaResultCompressionType `string` (values: GZIP, SNAPPY, ZLIB): The compression used for Athena query results.

### AthenaResultFormat
* AthenaResultFormat `string` (values: PARQUET, ORC, AVRO, JSON, TEXTFILE): The data storage format for Athena query results.

### AthenaWorkGroup
* AthenaWorkGroup `string`: The name of the workgroup in which the Athena query is being started.

### AttributeName
* AttributeName `string`

### AttributeNames
* AttributeNames `array`
  * items [AttributeName](#attributename)

### AuthMode
* AuthMode `string` (values: SSO, IAM)

### AutoMLCandidate
* AutoMLCandidate `object`: An Autopilot job returns recommendations, or candidates. Each candidate has futher details about the steps involed, and the status.
  * CandidateName **required**
  * CandidateStatus **required**
  * CandidateSteps **required**
    * items [AutoMLCandidateStep](#automlcandidatestep)
  * CreationTime **required**
  * EndTime
  * FailureReason
  * FinalAutoMLJobObjectiveMetric [FinalAutoMLJobObjectiveMetric](#finalautomljobobjectivemetric)
  * InferenceContainers
    * items [AutoMLContainerDefinition](#automlcontainerdefinition)
  * LastModifiedTime **required**
  * ObjectiveStatus **required**

### AutoMLCandidateStep
* AutoMLCandidateStep `object`: Information about the steps for a Candidate, and what step it is working on.
  * CandidateStepArn **required**
  * CandidateStepName **required**
  * CandidateStepType **required**

### AutoMLCandidates
* AutoMLCandidates `array`
  * items [AutoMLCandidate](#automlcandidate)

### AutoMLChannel
* AutoMLChannel `object`: Similar to Channel. A channel is a named input source that training algorithms can consume. Refer to Channel for detailed descriptions.
  * CompressionType
  * DataSource **required**
    * S3DataSource **required**
      * S3DataType **required**
      * S3Uri **required**
  * TargetAttributeName **required**

### AutoMLContainerDefinition
* AutoMLContainerDefinition `object`: A list of container definitions that describe the different containers that make up one AutoML candidate. Refer to ContainerDefinition for more details.
  * Environment
  * Image **required**
  * ModelDataUrl **required**

### AutoMLContainerDefinitions
* AutoMLContainerDefinitions `array`
  * items [AutoMLContainerDefinition](#automlcontainerdefinition)

### AutoMLDataSource
* AutoMLDataSource `object`: The data source for the Autopilot job.
  * S3DataSource **required**
    * S3DataType **required**
    * S3Uri **required**

### AutoMLFailureReason
* AutoMLFailureReason `string`

### AutoMLInputDataConfig
* AutoMLInputDataConfig `array`
  * items [AutoMLChannel](#automlchannel)

### AutoMLJobArn
* AutoMLJobArn `string`

### AutoMLJobArtifacts
* AutoMLJobArtifacts `object`: Artifacts that are generation during a job.
  * CandidateDefinitionNotebookLocation
  * DataExplorationNotebookLocation

### AutoMLJobCompletionCriteria
* AutoMLJobCompletionCriteria `object`: How long a job is allowed to run, or how many candidates a job is allowed to generate.
  * MaxAutoMLJobRuntimeInSeconds
  * MaxCandidates
  * MaxRuntimePerTrainingJobInSeconds

### AutoMLJobConfig
* AutoMLJobConfig `object`: A collection of settings used for a job.
  * CompletionCriteria
    * MaxAutoMLJobRuntimeInSeconds
    * MaxCandidates
    * MaxRuntimePerTrainingJobInSeconds
  * SecurityConfig
    * EnableInterContainerTrafficEncryption
    * VolumeKmsKeyId
    * VpcConfig
      * SecurityGroupIds **required**
        * items [SecurityGroupId](#securitygroupid)
      * Subnets **required**
        * items [SubnetId](#subnetid)

### AutoMLJobName
* AutoMLJobName `string`

### AutoMLJobObjective
* AutoMLJobObjective `object`: Specifies a metric to minimize or maximize as the objective of a job.
  * MetricName **required**

### AutoMLJobObjectiveType
* AutoMLJobObjectiveType `string` (values: Maximize, Minimize)

### AutoMLJobSecondaryStatus
* AutoMLJobSecondaryStatus `string` (values: Starting, AnalyzingData, FeatureEngineering, ModelTuning, MaxCandidatesReached, Failed, Stopped, MaxAutoMLJobRuntimeReached, Stopping, CandidateDefinitionsGenerated)

### AutoMLJobStatus
* AutoMLJobStatus `string` (values: Completed, InProgress, Failed, Stopped, Stopping)

### AutoMLJobSummaries
* AutoMLJobSummaries `array`
  * items [AutoMLJobSummary](#automljobsummary)

### AutoMLJobSummary
* AutoMLJobSummary `object`: Provides a summary about a job.
  * AutoMLJobArn **required**
  * AutoMLJobName **required**
  * AutoMLJobSecondaryStatus **required**
  * AutoMLJobStatus **required**
  * CreationTime **required**
  * EndTime
  * FailureReason
  * LastModifiedTime **required**

### AutoMLMaxResults
* AutoMLMaxResults `integer`

### AutoMLMetricEnum
* AutoMLMetricEnum `string` (values: Accuracy, MSE, F1, F1macro, AUC)

### AutoMLNameContains
* AutoMLNameContains `string`

### AutoMLOutputDataConfig
* AutoMLOutputDataConfig `object`: The output data configuration.
  * KmsKeyId
  * S3OutputPath **required**

### AutoMLS3DataSource
* AutoMLS3DataSource `object`: The Amazon S3 data source.
  * S3DataType **required**
  * S3Uri **required**

### AutoMLS3DataType
* AutoMLS3DataType `string` (values: ManifestFile, S3Prefix)

### AutoMLSecurityConfig
* AutoMLSecurityConfig `object`: Security options.
  * EnableInterContainerTrafficEncryption
  * VolumeKmsKeyId
  * VpcConfig
    * SecurityGroupIds **required**
      * items [SecurityGroupId](#securitygroupid)
    * Subnets **required**
      * items [SubnetId](#subnetid)

### AutoMLSortBy
* AutoMLSortBy `string` (values: Name, CreationTime, Status)

### AutoMLSortOrder
* AutoMLSortOrder `string` (values: Ascending, Descending)

### AutoRollbackConfig
* AutoRollbackConfig `object`: Currently, the <code>AutoRollbackConfig</code> API is not supported.
  * Alarms
    * items [Alarm](#alarm)

### AwsManagedHumanLoopRequestSource
* AwsManagedHumanLoopRequestSource `string` (values: AWS/Rekognition/DetectModerationLabels/Image/V3, AWS/Textract/AnalyzeDocument/Forms/V1)

### BatchStrategy
* BatchStrategy `string` (values: MultiRecord, SingleRecord)

### Bias
* Bias `object`: Contains bias metrics for a model.
  * Report
    * ContentDigest
    * ContentType **required**
    * S3Uri **required**

### BillableTimeInSeconds
* BillableTimeInSeconds `integer`

### BlockedReason
* BlockedReason `string`

### BlueGreenUpdatePolicy
* BlueGreenUpdatePolicy `object`: Currently, the <code>BlueGreenUpdatePolicy</code> API is not supported.
  * MaximumExecutionTimeoutInSeconds
  * TerminationWaitInSeconds
  * TrafficRoutingConfiguration **required**
    * CanarySize
      * Type **required**
      * Value **required**
    * Type **required**
    * WaitIntervalInSeconds **required**

### Boolean
* Boolean `boolean`

### BooleanOperator
* BooleanOperator `string` (values: And, Or)

### Branch
* Branch `string`

### CacheHitResult
* CacheHitResult `object`: Details on the cache hit of a pipeline execution step.
  * SourcePipelineExecutionArn

### CandidateDefinitionNotebookLocation
* CandidateDefinitionNotebookLocation `string`

### CandidateName
* CandidateName `string`

### CandidateSortBy
* CandidateSortBy `string` (values: CreationTime, Status, FinalObjectiveMetricValue)

### CandidateStatus
* CandidateStatus `string` (values: Completed, InProgress, Failed, Stopped, Stopping)

### CandidateStepArn
* CandidateStepArn `string`

### CandidateStepName
* CandidateStepName `string`

### CandidateStepType
* CandidateStepType `string` (values: AWS::SageMaker::TrainingJob, AWS::SageMaker::TransformJob, AWS::SageMaker::ProcessingJob)

### CandidateSteps
* CandidateSteps `array`
  * items [AutoMLCandidateStep](#automlcandidatestep)

### CapacitySize
* CapacitySize `object`: Currently, the <code>CapacitySize</code> API is not supported.
  * Type **required**
  * Value **required**

### CapacitySizeType
* CapacitySizeType `string` (values: INSTANCE_COUNT, CAPACITY_PERCENT)

### CapacitySizeValue
* CapacitySizeValue `integer`

### CaptureContentTypeHeader
* CaptureContentTypeHeader `object`: <p/>
  * CsvContentTypes
    * items [CsvContentType](#csvcontenttype)
  * JsonContentTypes
    * items [JsonContentType](#jsoncontenttype)

### CaptureMode
* CaptureMode `string` (values: Input, Output)

### CaptureOption
* CaptureOption `object`: <p/>
  * CaptureMode **required**

### CaptureOptionList
* CaptureOptionList `array`
  * items [CaptureOption](#captureoption)

### CaptureStatus
* CaptureStatus `string` (values: Started, Stopped)

### Catalog
* Catalog `string`

### CategoricalParameterRange
* CategoricalParameterRange `object`: A list of categorical hyperparameters to tune.
  * Name **required**
  * Values **required**
    * items [ParameterValue](#parametervalue)

### CategoricalParameterRangeSpecification
* CategoricalParameterRangeSpecification `object`: Defines the possible values for a categorical hyperparameter.
  * Values **required**
    * items [ParameterValue](#parametervalue)

### CategoricalParameterRanges
* CategoricalParameterRanges `array`
  * items [CategoricalParameterRange](#categoricalparameterrange)

### Cents
* Cents `integer`

### CertifyForMarketplace
* CertifyForMarketplace `boolean`

### Channel
* Channel `object`: A channel is a named input source that training algorithms can consume. 
  * ChannelName **required**
  * CompressionType
  * ContentType
  * DataSource **required**
    * FileSystemDataSource
      * DirectoryPath **required**
      * FileSystemAccessMode **required**
      * FileSystemId **required**
      * FileSystemType **required**
    * S3DataSource
      * AttributeNames
        * items [AttributeName](#attributename)
      * S3DataDistributionType
      * S3DataType **required**
      * S3Uri **required**
  * InputMode
  * RecordWrapperType
  * ShuffleConfig
    * Seed **required**

### ChannelName
* ChannelName `string`

### ChannelSpecification
* ChannelSpecification `object`: Defines a named input source, called a channel, to be used by an algorithm.
  * Description
  * IsRequired
  * Name **required**
  * SupportedCompressionTypes
    * items [CompressionType](#compressiontype)
  * SupportedContentTypes **required**
    * items [ContentType](#contenttype)
  * SupportedInputModes **required**
    * items [TrainingInputMode](#traininginputmode)

### ChannelSpecifications
* ChannelSpecifications `array`
  * items [ChannelSpecification](#channelspecification)

### CheckpointConfig
* CheckpointConfig `object`: Contains information about the output location for managed spot training checkpoint data. 
  * LocalPath
  * S3Uri **required**

### Cidr
* Cidr `string`

### Cidrs
* Cidrs `array`
  * items [Cidr](#cidr)

### ClientId
* ClientId `string`

### ClientSecret
* ClientSecret `string`

### ClientToken
* ClientToken `string`

### CodeRepositoryArn
* CodeRepositoryArn `string`

### CodeRepositoryContains
* CodeRepositoryContains `string`

### CodeRepositoryNameContains
* CodeRepositoryNameContains `string`

### CodeRepositoryNameOrUrl
* CodeRepositoryNameOrUrl `string`

### CodeRepositorySortBy
* CodeRepositorySortBy `string` (values: Name, CreationTime, LastModifiedTime)

### CodeRepositorySortOrder
* CodeRepositorySortOrder `string` (values: Ascending, Descending)

### CodeRepositorySummary
* CodeRepositorySummary `object`: Specifies summary information about a Git repository.
  * CodeRepositoryArn **required**
  * CodeRepositoryName **required**
  * CreationTime **required**
  * GitConfig
    * Branch
    * RepositoryUrl **required**
    * SecretArn
  * LastModifiedTime **required**

### CodeRepositorySummaryList
* CodeRepositorySummaryList `array`
  * items [CodeRepositorySummary](#coderepositorysummary)

### CognitoConfig
* CognitoConfig `object`: Use this parameter to configure your Amazon Cognito workforce. A single Cognito workforce is created using and corresponds to a single <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools.html"> Amazon Cognito user pool</a>.
  * ClientId **required**
  * UserPool **required**

### CognitoMemberDefinition
* CognitoMemberDefinition `object`: Identifies a Amazon Cognito user group. A user group can be used in on or more work teams.
  * ClientId **required**
  * UserGroup **required**
  * UserPool **required**

### CognitoUserGroup
* CognitoUserGroup `string`

### CognitoUserPool
* CognitoUserPool `string`

### CollectionConfiguration
* CollectionConfiguration `object`: Configuration information for the Debugger output tensor collections.
  * CollectionName
  * CollectionParameters

### CollectionConfigurations
* CollectionConfigurations `array`
  * items [CollectionConfiguration](#collectionconfiguration)

### CollectionName
* CollectionName `string`

### CollectionParameters
* CollectionParameters `object`

### CompilationJobArn
* CompilationJobArn `string`

### CompilationJobStatus
* CompilationJobStatus `string` (values: INPROGRESS, COMPLETED, FAILED, STARTING, STOPPING, STOPPED)

### CompilationJobSummaries
* CompilationJobSummaries `array`
  * items [CompilationJobSummary](#compilationjobsummary)

### CompilationJobSummary
* CompilationJobSummary `object`: A summary of a model compilation job.
  * CompilationEndTime
  * CompilationJobArn **required**
  * CompilationJobName **required**
  * CompilationJobStatus **required**
  * CompilationStartTime
  * CompilationTargetDevice
  * CompilationTargetPlatformAccelerator
  * CompilationTargetPlatformArch
  * CompilationTargetPlatformOs
  * CreationTime **required**
  * LastModifiedTime

### CompilerOptions
* CompilerOptions `string`

### CompressionType
* CompressionType `string` (values: None, Gzip)

### CompressionTypes
* CompressionTypes `array`
  * items [CompressionType](#compressiontype)

### ConditionOutcome
* ConditionOutcome `string` (values: True, False)

### ConditionStepMetadata
* ConditionStepMetadata `object`: Metadata for a Condition step.
  * Outcome

### ConfigKey
* ConfigKey `string`

### ConfigValue
* ConfigValue `string`

### ConflictException


### ContainerArgument
* ContainerArgument `string`

### ContainerArguments
* ContainerArguments `array`
  * items [ContainerArgument](#containerargument)

### ContainerDefinition
* ContainerDefinition `object`: Describes the container, as part of model definition.
  * ContainerHostname
  * Environment
  * Image
  * ImageConfig
    * RepositoryAccessMode **required**
  * Mode
  * ModelDataUrl
  * ModelPackageName

### ContainerDefinitionList
* ContainerDefinitionList `array`
  * items [ContainerDefinition](#containerdefinition)

### ContainerEntrypoint
* ContainerEntrypoint `array`
  * items [ContainerEntrypointString](#containerentrypointstring)

### ContainerEntrypointString
* ContainerEntrypointString `string`

### ContainerHostname
* ContainerHostname `string`

### ContainerImage
* ContainerImage `string`

### ContainerMode
* ContainerMode `string` (values: SingleModel, MultiModel)

### ContentClassifier
* ContentClassifier `string` (values: FreeOfPersonallyIdentifiableInformation, FreeOfAdultContent)

### ContentClassifiers
* ContentClassifiers `array`
  * items [ContentClassifier](#contentclassifier)

### ContentDigest
* ContentDigest `string`

### ContentType
* ContentType `string`

### ContentTypes
* ContentTypes `array`
  * items [ContentType](#contenttype)

### ContextArn
* ContextArn `string`

### ContextSource
* ContextSource `object`: A structure describing the source of a context.
  * SourceId
  * SourceType
  * SourceUri **required**

### ContextSummaries
* ContextSummaries `array`
  * items [ContextSummary](#contextsummary)

### ContextSummary
* ContextSummary `object`: Lists a summary of the properties of a context. A context provides a logical grouping of other entities.
  * ContextArn
  * ContextName
  * ContextType
  * CreationTime
  * LastModifiedTime
  * Source
    * SourceId
    * SourceType
    * SourceUri **required**

### ContinuousParameterRange
* ContinuousParameterRange `object`: A list of continuous hyperparameters to tune.
  * MaxValue **required**
  * MinValue **required**
  * Name **required**
  * ScalingType

### ContinuousParameterRangeSpecification
* ContinuousParameterRangeSpecification `object`: Defines the possible values for a continuous hyperparameter.
  * MaxValue **required**
  * MinValue **required**

### ContinuousParameterRanges
* ContinuousParameterRanges `array`
  * items [ContinuousParameterRange](#continuousparameterrange)

### CreateActionRequest
* CreateActionRequest `object`
  * ActionName **required**
  * ActionType **required**
  * Description
  * MetadataProperties [MetadataProperties](#metadataproperties)
  * Properties
  * Source **required**
    * SourceId
    * SourceType
    * SourceUri **required**
  * Status
  * Tags
    * items [Tag](#tag)

### CreateActionResponse
* CreateActionResponse `object`
  * ActionArn

### CreateAlgorithmInput
* CreateAlgorithmInput `object`
  * AlgorithmDescription
  * AlgorithmName **required**
  * CertifyForMarketplace
  * InferenceSpecification
    * Containers **required**
      * items [ModelPackageContainerDefinition](#modelpackagecontainerdefinition)
    * SupportedContentTypes **required**
      * items [ContentType](#contenttype)
    * SupportedRealtimeInferenceInstanceTypes
      * items [ProductionVariantInstanceType](#productionvariantinstancetype)
    * SupportedResponseMIMETypes **required**
      * items [ResponseMIMEType](#responsemimetype)
    * SupportedTransformInstanceTypes
      * items [TransformInstanceType](#transforminstancetype)
  * Tags
    * items [Tag](#tag)
  * TrainingSpecification **required**
    * MetricDefinitions
      * items [MetricDefinition](#metricdefinition)
    * SupportedHyperParameters
      * items [HyperParameterSpecification](#hyperparameterspecification)
    * SupportedTrainingInstanceTypes **required**
      * items [TrainingInstanceType](#traininginstancetype)
    * SupportedTuningJobObjectiveMetrics
      * items [HyperParameterTuningJobObjective](#hyperparametertuningjobobjective)
    * SupportsDistributedTraining
    * TrainingChannels **required**
      * items [ChannelSpecification](#channelspecification)
    * TrainingImage **required**
    * TrainingImageDigest
  * ValidationSpecification
    * ValidationProfiles **required**
      * items [AlgorithmValidationProfile](#algorithmvalidationprofile)
    * ValidationRole **required**

### CreateAlgorithmOutput
* CreateAlgorithmOutput `object`
  * AlgorithmArn **required**

### CreateAppImageConfigRequest
* CreateAppImageConfigRequest `object`
  * AppImageConfigName **required**
  * KernelGatewayImageConfig
    * FileSystemConfig
      * DefaultGid
      * DefaultUid
      * MountPath
    * KernelSpecs **required**
      * items [KernelSpec](#kernelspec)
  * Tags
    * items [Tag](#tag)

### CreateAppImageConfigResponse
* CreateAppImageConfigResponse `object`
  * AppImageConfigArn

### CreateAppRequest
* CreateAppRequest `object`
  * AppName **required**
  * AppType **required**
  * DomainId **required**
  * ResourceSpec
    * InstanceType
    * SageMakerImageArn
    * SageMakerImageVersionArn
  * Tags
    * items [Tag](#tag)
  * UserProfileName **required**

### CreateAppResponse
* CreateAppResponse `object`
  * AppArn

### CreateArtifactRequest
* CreateArtifactRequest `object`
  * ArtifactName
  * ArtifactType **required**
  * MetadataProperties [MetadataProperties](#metadataproperties)
  * Properties
  * Source **required**
    * SourceTypes
      * items [ArtifactSourceType](#artifactsourcetype)
    * SourceUri **required**
  * Tags
    * items [Tag](#tag)

### CreateArtifactResponse
* CreateArtifactResponse `object`
  * ArtifactArn

### CreateAutoMLJobRequest
* CreateAutoMLJobRequest `object`
  * AutoMLJobConfig
    * CompletionCriteria
      * MaxAutoMLJobRuntimeInSeconds
      * MaxCandidates
      * MaxRuntimePerTrainingJobInSeconds
    * SecurityConfig
      * EnableInterContainerTrafficEncryption
      * VolumeKmsKeyId
      * VpcConfig
        * SecurityGroupIds **required**
          * items [SecurityGroupId](#securitygroupid)
        * Subnets **required**
          * items [SubnetId](#subnetid)
  * AutoMLJobName **required**
  * AutoMLJobObjective
    * MetricName **required**
  * GenerateCandidateDefinitionsOnly
  * InputDataConfig **required**
    * items [AutoMLChannel](#automlchannel)
  * OutputDataConfig **required**
    * KmsKeyId
    * S3OutputPath **required**
  * ProblemType
  * RoleArn **required**
  * Tags
    * items [Tag](#tag)

### CreateAutoMLJobResponse
* CreateAutoMLJobResponse `object`
  * AutoMLJobArn **required**

### CreateCodeRepositoryInput
* CreateCodeRepositoryInput `object`
  * CodeRepositoryName **required**
  * GitConfig **required**
    * Branch
    * RepositoryUrl **required**
    * SecretArn
  * Tags
    * items [Tag](#tag)

### CreateCodeRepositoryOutput
* CreateCodeRepositoryOutput `object`
  * CodeRepositoryArn **required**

### CreateCompilationJobRequest
* CreateCompilationJobRequest `object`
  * CompilationJobName **required**
  * InputConfig **required**
    * DataInputConfig **required**
    * Framework **required**
    * S3Uri **required**
  * OutputConfig **required**
    * CompilerOptions
    * KmsKeyId
    * S3OutputLocation **required**
    * TargetDevice
    * TargetPlatform
      * Accelerator
      * Arch **required**
      * Os **required**
  * RoleArn **required**
  * StoppingCondition **required**
    * MaxRuntimeInSeconds
    * MaxWaitTimeInSeconds
  * Tags
    * items [Tag](#tag)

### CreateCompilationJobResponse
* CreateCompilationJobResponse `object`
  * CompilationJobArn **required**

### CreateContextRequest
* CreateContextRequest `object`
  * ContextName **required**
  * ContextType **required**
  * Description
  * Properties
  * Source **required**
    * SourceId
    * SourceType
    * SourceUri **required**
  * Tags
    * items [Tag](#tag)

### CreateContextResponse
* CreateContextResponse `object`
  * ContextArn

### CreateDataQualityJobDefinitionRequest
* CreateDataQualityJobDefinitionRequest `object`
  * DataQualityAppSpecification **required**
    * ContainerArguments
      * items [ContainerArgument](#containerargument)
    * ContainerEntrypoint
      * items [ContainerEntrypointString](#containerentrypointstring)
    * Environment
    * ImageUri **required**
    * PostAnalyticsProcessorSourceUri
    * RecordPreprocessorSourceUri
  * DataQualityBaselineConfig
    * BaseliningJobName
    * ConstraintsResource [MonitoringConstraintsResource](#monitoringconstraintsresource)
    * StatisticsResource [MonitoringStatisticsResource](#monitoringstatisticsresource)
  * DataQualityJobInput **required**
    * EndpointInput **required** [EndpointInput](#endpointinput)
  * DataQualityJobOutputConfig **required** [MonitoringOutputConfig](#monitoringoutputconfig)
  * JobDefinitionName **required**
  * JobResources **required** [MonitoringResources](#monitoringresources)
  * NetworkConfig
    * EnableInterContainerTrafficEncryption
    * EnableNetworkIsolation
    * VpcConfig [VpcConfig](#vpcconfig)
  * RoleArn **required**
  * StoppingCondition [MonitoringStoppingCondition](#monitoringstoppingcondition)
  * Tags
    * items [Tag](#tag)

### CreateDataQualityJobDefinitionResponse
* CreateDataQualityJobDefinitionResponse `object`
  * JobDefinitionArn **required**

### CreateDeviceFleetRequest
* CreateDeviceFleetRequest `object`
  * Description
  * DeviceFleetName **required**
  * OutputConfig **required**
    * KmsKeyId
    * S3OutputLocation **required**
  * RoleArn
  * Tags
    * items [Tag](#tag)

### CreateDomainRequest
* CreateDomainRequest `object`
  * AppNetworkAccessType
  * AuthMode **required**
  * DefaultUserSettings **required**
    * ExecutionRole
    * JupyterServerAppSettings
      * DefaultResourceSpec
        * InstanceType
        * SageMakerImageArn
        * SageMakerImageVersionArn
    * KernelGatewayAppSettings
      * CustomImages
        * items [CustomImage](#customimage)
      * DefaultResourceSpec
        * InstanceType
        * SageMakerImageArn
        * SageMakerImageVersionArn
    * SecurityGroups
      * items [SecurityGroupId](#securitygroupid)
    * SharingSettings
      * NotebookOutputOption
      * S3KmsKeyId
      * S3OutputPath
    * TensorBoardAppSettings
      * DefaultResourceSpec
        * InstanceType
        * SageMakerImageArn
        * SageMakerImageVersionArn
  * DomainName **required**
  * HomeEfsFileSystemKmsKeyId
  * KmsKeyId
  * SubnetIds **required**
    * items [SubnetId](#subnetid)
  * Tags
    * items [Tag](#tag)
  * VpcId **required**

### CreateDomainResponse
* CreateDomainResponse `object`
  * DomainArn
  * Url

### CreateEdgePackagingJobRequest
* CreateEdgePackagingJobRequest `object`
  * CompilationJobName **required**
  * EdgePackagingJobName **required**
  * ModelName **required**
  * ModelVersion **required**
  * OutputConfig **required**
    * KmsKeyId
    * S3OutputLocation **required**
  * ResourceKey
  * RoleArn **required**
  * Tags
    * items [Tag](#tag)

### CreateEndpointConfigInput
* CreateEndpointConfigInput `object`
  * DataCaptureConfig [DataCaptureConfig](#datacaptureconfig)
  * EndpointConfigName **required**
  * KmsKeyId
  * ProductionVariants **required**
    * items [ProductionVariant](#productionvariant)
  * Tags
    * items [Tag](#tag)

### CreateEndpointConfigOutput
* CreateEndpointConfigOutput `object`
  * EndpointConfigArn **required**

### CreateEndpointInput
* CreateEndpointInput `object`
  * EndpointConfigName **required**
  * EndpointName **required**
  * Tags
    * items [Tag](#tag)

### CreateEndpointOutput
* CreateEndpointOutput `object`
  * EndpointArn **required**

### CreateExperimentRequest
* CreateExperimentRequest `object`
  * Description
  * DisplayName
  * ExperimentName **required**
  * Tags
    * items [Tag](#tag)

### CreateExperimentResponse
* CreateExperimentResponse `object`
  * ExperimentArn

### CreateFeatureGroupRequest
* CreateFeatureGroupRequest `object`
  * Description
  * EventTimeFeatureName **required**
  * FeatureDefinitions **required**
    * items [FeatureDefinition](#featuredefinition)
  * FeatureGroupName **required**
  * OfflineStoreConfig
    * DataCatalogConfig
      * Catalog **required**
      * Database **required**
      * TableName **required**
    * DisableGlueTableCreation
    * S3StorageConfig **required**
      * KmsKeyId
      * S3Uri **required**
  * OnlineStoreConfig
    * EnableOnlineStore
    * SecurityConfig
      * KmsKeyId
  * RecordIdentifierFeatureName **required**
  * RoleArn
  * Tags
    * items [Tag](#tag)

### CreateFeatureGroupResponse
* CreateFeatureGroupResponse `object`
  * FeatureGroupArn **required**

### CreateFlowDefinitionRequest
* CreateFlowDefinitionRequest `object`
  * FlowDefinitionName **required**
  * HumanLoopActivationConfig
    * HumanLoopActivationConditionsConfig **required**
      * HumanLoopActivationConditions **required**
  * HumanLoopConfig **required**
    * HumanTaskUiArn **required**
    * PublicWorkforceTaskPrice [PublicWorkforceTaskPrice](#publicworkforcetaskprice)
    * TaskAvailabilityLifetimeInSeconds
    * TaskCount **required**
    * TaskDescription **required**
    * TaskKeywords
      * items [FlowDefinitionTaskKeyword](#flowdefinitiontaskkeyword)
    * TaskTimeLimitInSeconds
    * TaskTitle **required**
    * WorkteamArn **required**
  * HumanLoopRequestSource
    * AwsManagedHumanLoopRequestSource **required**
  * OutputConfig **required**
    * KmsKeyId
    * S3OutputPath **required**
  * RoleArn **required**
  * Tags
    * items [Tag](#tag)

### CreateFlowDefinitionResponse
* CreateFlowDefinitionResponse `object`
  * FlowDefinitionArn **required**

### CreateHumanTaskUiRequest
* CreateHumanTaskUiRequest `object`
  * HumanTaskUiName **required**
  * Tags
    * items [Tag](#tag)
  * UiTemplate **required** [UiTemplate](#uitemplate)

### CreateHumanTaskUiResponse
* CreateHumanTaskUiResponse `object`
  * HumanTaskUiArn **required**

### CreateHyperParameterTuningJobRequest
* CreateHyperParameterTuningJobRequest `object`
  * HyperParameterTuningJobConfig **required**
    * HyperParameterTuningJobObjective
      * MetricName **required**
      * Type **required**
    * ParameterRanges
      * CategoricalParameterRanges
        * items [CategoricalParameterRange](#categoricalparameterrange)
      * ContinuousParameterRanges
        * items [ContinuousParameterRange](#continuousparameterrange)
      * IntegerParameterRanges
        * items [IntegerParameterRange](#integerparameterrange)
    * ResourceLimits **required**
      * MaxNumberOfTrainingJobs **required**
      * MaxParallelTrainingJobs **required**
    * Strategy **required**
    * TrainingJobEarlyStoppingType
    * TuningJobCompletionCriteria
      * TargetObjectiveMetricValue **required**
  * HyperParameterTuningJobName **required**
  * Tags
    * items [Tag](#tag)
  * TrainingJobDefinition
    * AlgorithmSpecification **required**
      * AlgorithmName
      * MetricDefinitions
        * items [MetricDefinition](#metricdefinition)
      * TrainingImage
      * TrainingInputMode **required**
    * CheckpointConfig [CheckpointConfig](#checkpointconfig)
    * DefinitionName
    * EnableInterContainerTrafficEncryption
    * EnableManagedSpotTraining
    * EnableNetworkIsolation
    * HyperParameterRanges [ParameterRanges](#parameterranges)
    * InputDataConfig
      * items [Channel](#channel)
    * OutputDataConfig **required**
      * KmsKeyId
      * S3OutputPath **required**
    * ResourceConfig **required**
      * InstanceCount **required**
      * InstanceType **required**
      * VolumeKmsKeyId
      * VolumeSizeInGB **required**
    * RoleArn **required**
    * StaticHyperParameters
    * StoppingCondition **required**
      * MaxRuntimeInSeconds
      * MaxWaitTimeInSeconds
    * TuningObjective [HyperParameterTuningJobObjective](#hyperparametertuningjobobjective)
    * VpcConfig
      * SecurityGroupIds **required**
        * items [SecurityGroupId](#securitygroupid)
      * Subnets **required**
        * items [SubnetId](#subnetid)
  * TrainingJobDefinitions
    * items [HyperParameterTrainingJobDefinition](#hyperparametertrainingjobdefinition)
  * WarmStartConfig
    * ParentHyperParameterTuningJobs **required**
      * items [ParentHyperParameterTuningJob](#parenthyperparametertuningjob)
    * WarmStartType **required**

### CreateHyperParameterTuningJobResponse
* CreateHyperParameterTuningJobResponse `object`
  * HyperParameterTuningJobArn **required**

### CreateImageRequest
* CreateImageRequest `object`
  * Description
  * DisplayName
  * ImageName **required**
  * RoleArn **required**
  * Tags
    * items [Tag](#tag)

### CreateImageResponse
* CreateImageResponse `object`
  * ImageArn

### CreateImageVersionRequest
* CreateImageVersionRequest `object`
  * BaseImage **required**
  * ClientToken **required**
  * ImageName **required**

### CreateImageVersionResponse
* CreateImageVersionResponse `object`
  * ImageVersionArn

### CreateLabelingJobRequest
* CreateLabelingJobRequest `object`
  * HumanTaskConfig **required**
    * AnnotationConsolidationConfig **required**
      * AnnotationConsolidationLambdaArn **required**
    * MaxConcurrentTaskCount
    * NumberOfHumanWorkersPerDataObject **required**
    * PreHumanTaskLambdaArn **required**
    * PublicWorkforceTaskPrice
      * AmountInUsd
        * Cents
        * Dollars
        * TenthFractionsOfACent
    * TaskAvailabilityLifetimeInSeconds
    * TaskDescription **required**
    * TaskKeywords
      * items [TaskKeyword](#taskkeyword)
    * TaskTimeLimitInSeconds **required**
    * TaskTitle **required**
    * UiConfig **required**
      * HumanTaskUiArn
      * UiTemplateS3Uri
    * WorkteamArn **required**
  * InputConfig **required**
    * DataAttributes
      * ContentClassifiers
        * items [ContentClassifier](#contentclassifier)
    * DataSource **required**
      * S3DataSource
        * ManifestS3Uri **required**
      * SnsDataSource
        * SnsTopicArn **required**
  * LabelAttributeName **required**
  * LabelCategoryConfigS3Uri
  * LabelingJobAlgorithmsConfig
    * InitialActiveLearningModelArn
    * LabelingJobAlgorithmSpecificationArn **required**
    * LabelingJobResourceConfig
      * VolumeKmsKeyId
  * LabelingJobName **required**
  * OutputConfig **required**
    * KmsKeyId
    * S3OutputPath **required**
    * SnsTopicArn
  * RoleArn **required**
  * StoppingConditions
    * MaxHumanLabeledObjectCount
    * MaxPercentageOfInputDatasetLabeled
  * Tags
    * items [Tag](#tag)

### CreateLabelingJobResponse
* CreateLabelingJobResponse `object`
  * LabelingJobArn **required**

### CreateModelBiasJobDefinitionRequest
* CreateModelBiasJobDefinitionRequest `object`
  * JobDefinitionName **required**
  * JobResources **required** [MonitoringResources](#monitoringresources)
  * ModelBiasAppSpecification **required**
    * ConfigUri **required**
    * Environment
    * ImageUri **required**
  * ModelBiasBaselineConfig
    * BaseliningJobName
    * ConstraintsResource [MonitoringConstraintsResource](#monitoringconstraintsresource)
  * ModelBiasJobInput **required**
    * EndpointInput **required** [EndpointInput](#endpointinput)
    * GroundTruthS3Input **required**
      * S3Uri
  * ModelBiasJobOutputConfig **required** [MonitoringOutputConfig](#monitoringoutputconfig)
  * NetworkConfig
    * EnableInterContainerTrafficEncryption
    * EnableNetworkIsolation
    * VpcConfig [VpcConfig](#vpcconfig)
  * RoleArn **required**
  * StoppingCondition [MonitoringStoppingCondition](#monitoringstoppingcondition)
  * Tags
    * items [Tag](#tag)

### CreateModelBiasJobDefinitionResponse
* CreateModelBiasJobDefinitionResponse `object`
  * JobDefinitionArn **required**

### CreateModelExplainabilityJobDefinitionRequest
* CreateModelExplainabilityJobDefinitionRequest `object`
  * JobDefinitionName **required**
  * JobResources **required** [MonitoringResources](#monitoringresources)
  * ModelExplainabilityAppSpecification **required**
    * ConfigUri **required**
    * Environment
    * ImageUri **required**
  * ModelExplainabilityBaselineConfig
    * BaseliningJobName
    * ConstraintsResource [MonitoringConstraintsResource](#monitoringconstraintsresource)
  * ModelExplainabilityJobInput **required**
    * EndpointInput **required** [EndpointInput](#endpointinput)
  * ModelExplainabilityJobOutputConfig **required** [MonitoringOutputConfig](#monitoringoutputconfig)
  * NetworkConfig
    * EnableInterContainerTrafficEncryption
    * EnableNetworkIsolation
    * VpcConfig [VpcConfig](#vpcconfig)
  * RoleArn **required**
  * StoppingCondition [MonitoringStoppingCondition](#monitoringstoppingcondition)
  * Tags
    * items [Tag](#tag)

### CreateModelExplainabilityJobDefinitionResponse
* CreateModelExplainabilityJobDefinitionResponse `object`
  * JobDefinitionArn **required**

### CreateModelInput
* CreateModelInput `object`
  * Containers
    * items [ContainerDefinition](#containerdefinition)
  * EnableNetworkIsolation
  * ExecutionRoleArn **required**
  * ModelName **required**
  * PrimaryContainer
    * ContainerHostname
    * Environment
    * Image
    * ImageConfig
      * RepositoryAccessMode **required**
    * Mode
    * ModelDataUrl
    * ModelPackageName
  * Tags
    * items [Tag](#tag)
  * VpcConfig
    * SecurityGroupIds **required**
      * items [SecurityGroupId](#securitygroupid)
    * Subnets **required**
      * items [SubnetId](#subnetid)

### CreateModelOutput
* CreateModelOutput `object`
  * ModelArn **required**

### CreateModelPackageGroupInput
* CreateModelPackageGroupInput `object`
  * ModelPackageGroupDescription
  * ModelPackageGroupName **required**
  * Tags
    * items [Tag](#tag)

### CreateModelPackageGroupOutput
* CreateModelPackageGroupOutput `object`
  * ModelPackageGroupArn **required**

### CreateModelPackageInput
* CreateModelPackageInput `object`
  * CertifyForMarketplace
  * ClientToken
  * InferenceSpecification
    * Containers **required**
      * items [ModelPackageContainerDefinition](#modelpackagecontainerdefinition)
    * SupportedContentTypes **required**
      * items [ContentType](#contenttype)
    * SupportedRealtimeInferenceInstanceTypes
      * items [ProductionVariantInstanceType](#productionvariantinstancetype)
    * SupportedResponseMIMETypes **required**
      * items [ResponseMIMEType](#responsemimetype)
    * SupportedTransformInstanceTypes
      * items [TransformInstanceType](#transforminstancetype)
  * MetadataProperties [MetadataProperties](#metadataproperties)
  * ModelApprovalStatus
  * ModelMetrics
    * Bias
      * Report
        * ContentDigest
        * ContentType **required**
        * S3Uri **required**
    * Explainability
      * Report
        * ContentDigest
        * ContentType **required**
        * S3Uri **required**
    * ModelDataQuality
      * Constraints
        * ContentDigest
        * ContentType **required**
        * S3Uri **required**
      * Statistics
        * ContentDigest
        * ContentType **required**
        * S3Uri **required**
    * ModelQuality
      * Constraints
        * ContentDigest
        * ContentType **required**
        * S3Uri **required**
      * Statistics
        * ContentDigest
        * ContentType **required**
        * S3Uri **required**
  * ModelPackageDescription
  * ModelPackageGroupName
  * ModelPackageName
  * SourceAlgorithmSpecification
    * SourceAlgorithms **required**
      * items [SourceAlgorithm](#sourcealgorithm)
  * Tags
    * items [Tag](#tag)
  * ValidationSpecification
    * ValidationProfiles **required**
      * items [ModelPackageValidationProfile](#modelpackagevalidationprofile)
    * ValidationRole **required**

### CreateModelPackageOutput
* CreateModelPackageOutput `object`
  * ModelPackageArn **required**

### CreateModelQualityJobDefinitionRequest
* CreateModelQualityJobDefinitionRequest `object`
  * JobDefinitionName **required**
  * JobResources **required** [MonitoringResources](#monitoringresources)
  * ModelQualityAppSpecification **required**
    * ContainerArguments
      * items [ContainerArgument](#containerargument)
    * ContainerEntrypoint
      * items [ContainerEntrypointString](#containerentrypointstring)
    * Environment
    * ImageUri **required**
    * PostAnalyticsProcessorSourceUri
    * ProblemType
    * RecordPreprocessorSourceUri
  * ModelQualityBaselineConfig
    * BaseliningJobName
    * ConstraintsResource [MonitoringConstraintsResource](#monitoringconstraintsresource)
  * ModelQualityJobInput **required**
    * EndpointInput **required** [EndpointInput](#endpointinput)
    * GroundTruthS3Input **required**
      * S3Uri
  * ModelQualityJobOutputConfig **required** [MonitoringOutputConfig](#monitoringoutputconfig)
  * NetworkConfig
    * EnableInterContainerTrafficEncryption
    * EnableNetworkIsolation
    * VpcConfig [VpcConfig](#vpcconfig)
  * RoleArn **required**
  * StoppingCondition [MonitoringStoppingCondition](#monitoringstoppingcondition)
  * Tags
    * items [Tag](#tag)

### CreateModelQualityJobDefinitionResponse
* CreateModelQualityJobDefinitionResponse `object`
  * JobDefinitionArn **required**

### CreateMonitoringScheduleRequest
* CreateMonitoringScheduleRequest `object`
  * MonitoringScheduleConfig **required**
    * MonitoringJobDefinition
      * BaselineConfig
        * BaseliningJobName
        * ConstraintsResource
          * S3Uri
        * StatisticsResource
          * S3Uri
      * Environment
      * MonitoringAppSpecification **required**
        * ContainerArguments
          * items [ContainerArgument](#containerargument)
        * ContainerEntrypoint
          * items [ContainerEntrypointString](#containerentrypointstring)
        * ImageUri **required**
        * PostAnalyticsProcessorSourceUri
        * RecordPreprocessorSourceUri
      * MonitoringInputs **required**
        * items [MonitoringInput](#monitoringinput)
      * MonitoringOutputConfig **required**
        * KmsKeyId
        * MonitoringOutputs **required**
          * items [MonitoringOutput](#monitoringoutput)
      * MonitoringResources **required**
        * ClusterConfig **required**
          * InstanceCount **required**
          * InstanceType **required**
          * VolumeKmsKeyId
          * VolumeSizeInGB **required**
      * NetworkConfig
        * EnableInterContainerTrafficEncryption
        * EnableNetworkIsolation
        * VpcConfig [VpcConfig](#vpcconfig)
      * RoleArn **required**
      * StoppingCondition
        * MaxRuntimeInSeconds **required**
    * MonitoringJobDefinitionName
    * MonitoringType
    * ScheduleConfig
      * ScheduleExpression **required**
  * MonitoringScheduleName **required**
  * Tags
    * items [Tag](#tag)

### CreateMonitoringScheduleResponse
* CreateMonitoringScheduleResponse `object`
  * MonitoringScheduleArn **required**

### CreateNotebookInstanceInput
* CreateNotebookInstanceInput `object`
  * AcceleratorTypes
    * items [NotebookInstanceAcceleratorType](#notebookinstanceacceleratortype)
  * AdditionalCodeRepositories
    * items [CodeRepositoryNameOrUrl](#coderepositorynameorurl)
  * DefaultCodeRepository
  * DirectInternetAccess
  * InstanceType **required**
  * KmsKeyId
  * LifecycleConfigName
  * NotebookInstanceName **required**
  * RoleArn **required**
  * RootAccess
  * SecurityGroupIds
    * items [SecurityGroupId](#securitygroupid)
  * SubnetId
  * Tags
    * items [Tag](#tag)
  * VolumeSizeInGB

### CreateNotebookInstanceLifecycleConfigInput
* CreateNotebookInstanceLifecycleConfigInput `object`
  * NotebookInstanceLifecycleConfigName **required**
  * OnCreate
    * items [NotebookInstanceLifecycleHook](#notebookinstancelifecyclehook)
  * OnStart
    * items [NotebookInstanceLifecycleHook](#notebookinstancelifecyclehook)

### CreateNotebookInstanceLifecycleConfigOutput
* CreateNotebookInstanceLifecycleConfigOutput `object`
  * NotebookInstanceLifecycleConfigArn

### CreateNotebookInstanceOutput
* CreateNotebookInstanceOutput `object`
  * NotebookInstanceArn

### CreatePipelineRequest
* CreatePipelineRequest `object`
  * ClientRequestToken **required**
  * PipelineDefinition **required**
  * PipelineDescription
  * PipelineDisplayName
  * PipelineName **required**
  * RoleArn **required**
  * Tags
    * items [Tag](#tag)

### CreatePipelineResponse
* CreatePipelineResponse `object`
  * PipelineArn

### CreatePresignedDomainUrlRequest
* CreatePresignedDomainUrlRequest `object`
  * DomainId **required**
  * SessionExpirationDurationInSeconds
  * UserProfileName **required**

### CreatePresignedDomainUrlResponse
* CreatePresignedDomainUrlResponse `object`
  * AuthorizedUrl

### CreatePresignedNotebookInstanceUrlInput
* CreatePresignedNotebookInstanceUrlInput `object`
  * NotebookInstanceName **required**
  * SessionExpirationDurationInSeconds

### CreatePresignedNotebookInstanceUrlOutput
* CreatePresignedNotebookInstanceUrlOutput `object`
  * AuthorizedUrl

### CreateProcessingJobRequest
* CreateProcessingJobRequest `object`
  * AppSpecification **required**
    * ContainerArguments
      * items [ContainerArgument](#containerargument)
    * ContainerEntrypoint
      * items [ContainerEntrypointString](#containerentrypointstring)
    * ImageUri **required**
  * Environment
  * ExperimentConfig [ExperimentConfig](#experimentconfig)
  * NetworkConfig
    * EnableInterContainerTrafficEncryption
    * EnableNetworkIsolation
    * VpcConfig [VpcConfig](#vpcconfig)
  * ProcessingInputs
    * items [ProcessingInput](#processinginput)
  * ProcessingJobName **required**
  * ProcessingOutputConfig
    * KmsKeyId
    * Outputs **required**
      * items [ProcessingOutput](#processingoutput)
  * ProcessingResources **required**
    * ClusterConfig **required**
      * InstanceCount **required**
      * InstanceType **required**
      * VolumeKmsKeyId
      * VolumeSizeInGB **required**
  * RoleArn **required**
  * StoppingCondition
    * MaxRuntimeInSeconds **required**
  * Tags
    * items [Tag](#tag)

### CreateProcessingJobResponse
* CreateProcessingJobResponse `object`
  * ProcessingJobArn **required**

### CreateProjectInput
* CreateProjectInput `object`
  * ProjectDescription
  * ProjectName **required**
  * ServiceCatalogProvisioningDetails **required**
    * PathId
    * ProductId **required**
    * ProvisioningArtifactId **required**
    * ProvisioningParameters
      * items [ProvisioningParameter](#provisioningparameter)
  * Tags
    * items [Tag](#tag)

### CreateProjectOutput
* CreateProjectOutput `object`
  * ProjectArn **required**
  * ProjectId **required**

### CreateTrainingJobRequest
* CreateTrainingJobRequest `object`
  * AlgorithmSpecification **required**
    * AlgorithmName
    * EnableSageMakerMetricsTimeSeries
    * MetricDefinitions
      * items [MetricDefinition](#metricdefinition)
    * TrainingImage
    * TrainingInputMode **required**
  * CheckpointConfig
    * LocalPath
    * S3Uri **required**
  * DebugHookConfig [DebugHookConfig](#debughookconfig)
  * DebugRuleConfigurations
    * items [DebugRuleConfiguration](#debugruleconfiguration)
  * EnableInterContainerTrafficEncryption
  * EnableManagedSpotTraining
  * EnableNetworkIsolation
  * ExperimentConfig [ExperimentConfig](#experimentconfig)
  * HyperParameters
  * InputDataConfig
    * items [Channel](#channel)
  * OutputDataConfig **required**
    * KmsKeyId
    * S3OutputPath **required**
  * ProfilerConfig [ProfilerConfig](#profilerconfig)
  * ProfilerRuleConfigurations
    * items [ProfilerRuleConfiguration](#profilerruleconfiguration)
  * ResourceConfig **required**
    * InstanceCount **required**
    * InstanceType **required**
    * VolumeKmsKeyId
    * VolumeSizeInGB **required**
  * RoleArn **required**
  * StoppingCondition **required**
    * MaxRuntimeInSeconds
    * MaxWaitTimeInSeconds
  * Tags
    * items [Tag](#tag)
  * TensorBoardOutputConfig [TensorBoardOutputConfig](#tensorboardoutputconfig)
  * TrainingJobName **required**
  * VpcConfig
    * SecurityGroupIds **required**
      * items [SecurityGroupId](#securitygroupid)
    * Subnets **required**
      * items [SubnetId](#subnetid)

### CreateTrainingJobResponse
* CreateTrainingJobResponse `object`
  * TrainingJobArn **required**

### CreateTransformJobRequest
* CreateTransformJobRequest `object`
  * BatchStrategy
  * DataProcessing
    * InputFilter
    * JoinSource
    * OutputFilter
  * Environment
  * ExperimentConfig [ExperimentConfig](#experimentconfig)
  * MaxConcurrentTransforms
  * MaxPayloadInMB
  * ModelClientConfig
    * InvocationsMaxRetries
    * InvocationsTimeoutInSeconds
  * ModelName **required**
  * Tags
    * items [Tag](#tag)
  * TransformInput **required**
    * CompressionType
    * ContentType
    * DataSource **required**
      * S3DataSource **required**
        * S3DataType **required**
        * S3Uri **required**
    * SplitType
  * TransformJobName **required**
  * TransformOutput **required**
    * Accept
    * AssembleWith
    * KmsKeyId
    * S3OutputPath **required**
  * TransformResources **required**
    * InstanceCount **required**
    * InstanceType **required**
    * VolumeKmsKeyId

### CreateTransformJobResponse
* CreateTransformJobResponse `object`
  * TransformJobArn **required**

### CreateTrialComponentRequest
* CreateTrialComponentRequest `object`
  * DisplayName
  * EndTime
  * InputArtifacts
  * MetadataProperties [MetadataProperties](#metadataproperties)
  * OutputArtifacts
  * Parameters
  * StartTime
  * Status
    * Message
    * PrimaryStatus
  * Tags
    * items [Tag](#tag)
  * TrialComponentName **required**

### CreateTrialComponentResponse
* CreateTrialComponentResponse `object`
  * TrialComponentArn

### CreateTrialRequest
* CreateTrialRequest `object`
  * DisplayName
  * ExperimentName **required**
  * MetadataProperties [MetadataProperties](#metadataproperties)
  * Tags
    * items [Tag](#tag)
  * TrialName **required**

### CreateTrialResponse
* CreateTrialResponse `object`
  * TrialArn

### CreateUserProfileRequest
* CreateUserProfileRequest `object`
  * DomainId **required**
  * SingleSignOnUserIdentifier
  * SingleSignOnUserValue
  * Tags
    * items [Tag](#tag)
  * UserProfileName **required**
  * UserSettings
    * ExecutionRole
    * JupyterServerAppSettings
      * DefaultResourceSpec
        * InstanceType
        * SageMakerImageArn
        * SageMakerImageVersionArn
    * KernelGatewayAppSettings
      * CustomImages
        * items [CustomImage](#customimage)
      * DefaultResourceSpec
        * InstanceType
        * SageMakerImageArn
        * SageMakerImageVersionArn
    * SecurityGroups
      * items [SecurityGroupId](#securitygroupid)
    * SharingSettings
      * NotebookOutputOption
      * S3KmsKeyId
      * S3OutputPath
    * TensorBoardAppSettings
      * DefaultResourceSpec
        * InstanceType
        * SageMakerImageArn
        * SageMakerImageVersionArn

### CreateUserProfileResponse
* CreateUserProfileResponse `object`
  * UserProfileArn

### CreateWorkforceRequest
* CreateWorkforceRequest `object`
  * CognitoConfig
    * ClientId **required**
    * UserPool **required**
  * OidcConfig
    * AuthorizationEndpoint **required**
    * ClientId **required**
    * ClientSecret **required**
    * Issuer **required**
    * JwksUri **required**
    * LogoutEndpoint **required**
    * TokenEndpoint **required**
    * UserInfoEndpoint **required**
  * SourceIpConfig [SourceIpConfig](#sourceipconfig)
  * Tags
    * items [Tag](#tag)
  * WorkforceName **required**

### CreateWorkforceResponse
* CreateWorkforceResponse `object`
  * WorkforceArn **required**

### CreateWorkteamRequest
* CreateWorkteamRequest `object`
  * Description **required**
  * MemberDefinitions **required**
    * items [MemberDefinition](#memberdefinition)
  * NotificationConfiguration
    * NotificationTopicArn
  * Tags
    * items [Tag](#tag)
  * WorkforceName
  * WorkteamName **required**

### CreateWorkteamResponse
* CreateWorkteamResponse `object`
  * WorkteamArn

### CreationTime
* CreationTime `string`

### CsvContentType
* CsvContentType `string`

### CsvContentTypes
* CsvContentTypes `array`
  * items [CsvContentType](#csvcontenttype)

### CustomImage
* CustomImage `object`: A custom SageMaker image. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/studio-byoi.html">Bring your own SageMaker image</a>.
  * AppImageConfigName **required**
  * ImageName **required**
  * ImageVersionNumber

### CustomImages
* CustomImages `array`
  * items [CustomImage](#customimage)

### DataCaptureConfig
* DataCaptureConfig `object`: <p/>
  * CaptureContentTypeHeader
    * CsvContentTypes
      * items [CsvContentType](#csvcontenttype)
    * JsonContentTypes
      * items [JsonContentType](#jsoncontenttype)
  * CaptureOptions **required**
    * items [CaptureOption](#captureoption)
  * DestinationS3Uri **required**
  * EnableCapture
  * InitialSamplingPercentage **required**
  * KmsKeyId

### DataCaptureConfigSummary
* DataCaptureConfigSummary `object`: <p/>
  * CaptureStatus **required**
  * CurrentSamplingPercentage **required**
  * DestinationS3Uri **required**
  * EnableCapture **required**
  * KmsKeyId **required**

### DataCatalogConfig
* DataCatalogConfig `object`: The meta data of the Glue table which serves as data catalog for the <code>OfflineStore</code>. 
  * Catalog **required**
  * Database **required**
  * TableName **required**

### DataDistributionType
* DataDistributionType `string` (values: FullyReplicated, ShardedByS3Key)

### DataExplorationNotebookLocation
* DataExplorationNotebookLocation `string`

### DataInputConfig
* DataInputConfig `string`

### DataProcessing
* DataProcessing `object`: The data structure used to specify the data to be used for inference in a batch transform job and to associate the data that is relevant to the prediction results in the output. The input filter provided allows you to exclude input data that is not needed for inference in a batch transform job. The output filter provided allows you to include input data relevant to interpreting the predictions in the output from the job. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/batch-transform-data-processing.html">Associate Prediction Results with their Corresponding Input Records</a>.
  * InputFilter
  * JoinSource
  * OutputFilter

### DataQualityAppSpecification
* DataQualityAppSpecification `object`: Information about the container that a data quality monitoring job runs.
  * ContainerArguments
    * items [ContainerArgument](#containerargument)
  * ContainerEntrypoint
    * items [ContainerEntrypointString](#containerentrypointstring)
  * Environment
  * ImageUri **required**
  * PostAnalyticsProcessorSourceUri
  * RecordPreprocessorSourceUri

### DataQualityBaselineConfig
* DataQualityBaselineConfig `object`: Configuration for monitoring constraints and monitoring statistics. These baseline resources are compared against the results of the current job from the series of jobs scheduled to collect data periodically.
  * BaseliningJobName
  * ConstraintsResource [MonitoringConstraintsResource](#monitoringconstraintsresource)
  * StatisticsResource [MonitoringStatisticsResource](#monitoringstatisticsresource)

### DataQualityJobInput
* DataQualityJobInput `object`: The input for the data quality monitoring job. Currently endpoints are supported for input.
  * EndpointInput **required** [EndpointInput](#endpointinput)

### DataSource
* DataSource `object`: Describes the location of the channel data.
  * FileSystemDataSource
    * DirectoryPath **required**
    * FileSystemAccessMode **required**
    * FileSystemId **required**
    * FileSystemType **required**
  * S3DataSource
    * AttributeNames
      * items [AttributeName](#attributename)
    * S3DataDistributionType
    * S3DataType **required**
    * S3Uri **required**

### Database
* Database `string`

### DatasetDefinition
* DatasetDefinition `object`: Configuration for Dataset Definition inputs. The Dataset Definition input must specify exactly one of either <code>AthenaDatasetDefinition</code> or <code>RedshiftDatasetDefinition</code> types.
  * AthenaDatasetDefinition [AthenaDatasetDefinition](#athenadatasetdefinition)
  * DataDistributionType
  * InputMode
  * LocalPath
  * RedshiftDatasetDefinition [RedshiftDatasetDefinition](#redshiftdatasetdefinition)

### DebugHookConfig
* DebugHookConfig `object`: Configuration information for the Debugger hook parameters, metric and tensor collections, and storage paths. To learn more about how to configure the <code>DebugHookConfig</code> parameter, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/debugger-createtrainingjob-api.html">Use the SageMaker and Debugger Configuration API Operations to Create, Update, and Debug Your Training Job</a>.
  * CollectionConfigurations
    * items [CollectionConfiguration](#collectionconfiguration)
  * HookParameters
  * LocalPath
  * S3OutputPath **required**

### DebugRuleConfiguration
* DebugRuleConfiguration `object`: Configuration information for SageMaker Debugger rules for debugging. To learn more about how to configure the <code>DebugRuleConfiguration</code> parameter, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/debugger-createtrainingjob-api.html">Use the SageMaker and Debugger Configuration API Operations to Create, Update, and Debug Your Training Job</a>.
  * InstanceType
  * LocalPath
  * RuleConfigurationName **required**
  * RuleEvaluatorImage **required**
  * RuleParameters
  * S3OutputPath
  * VolumeSizeInGB

### DebugRuleConfigurations
* DebugRuleConfigurations `array`
  * items [DebugRuleConfiguration](#debugruleconfiguration)

### DebugRuleEvaluationStatus
* DebugRuleEvaluationStatus `object`: Information about the status of the rule evaluation.
  * LastModifiedTime
  * RuleConfigurationName
  * RuleEvaluationJobArn
  * RuleEvaluationStatus
  * StatusDetails

### DebugRuleEvaluationStatuses
* DebugRuleEvaluationStatuses `array`
  * items [DebugRuleEvaluationStatus](#debugruleevaluationstatus)

### DefaultGid
* DefaultGid `integer`

### DefaultUid
* DefaultUid `integer`

### DeleteActionRequest
* DeleteActionRequest `object`
  * ActionName **required**

### DeleteActionResponse
* DeleteActionResponse `object`
  * ActionArn

### DeleteAlgorithmInput
* DeleteAlgorithmInput `object`
  * AlgorithmName **required**

### DeleteAppImageConfigRequest
* DeleteAppImageConfigRequest `object`
  * AppImageConfigName **required**

### DeleteAppRequest
* DeleteAppRequest `object`
  * AppName **required**
  * AppType **required**
  * DomainId **required**
  * UserProfileName **required**

### DeleteArtifactRequest
* DeleteArtifactRequest `object`
  * ArtifactArn
  * Source
    * SourceTypes
      * items [ArtifactSourceType](#artifactsourcetype)
    * SourceUri **required**

### DeleteArtifactResponse
* DeleteArtifactResponse `object`
  * ArtifactArn

### DeleteAssociationRequest
* DeleteAssociationRequest `object`
  * DestinationArn **required**
  * SourceArn **required**

### DeleteAssociationResponse
* DeleteAssociationResponse `object`
  * DestinationArn
  * SourceArn

### DeleteCodeRepositoryInput
* DeleteCodeRepositoryInput `object`
  * CodeRepositoryName **required**

### DeleteContextRequest
* DeleteContextRequest `object`
  * ContextName **required**

### DeleteContextResponse
* DeleteContextResponse `object`
  * ContextArn

### DeleteDataQualityJobDefinitionRequest
* DeleteDataQualityJobDefinitionRequest `object`
  * JobDefinitionName **required**

### DeleteDeviceFleetRequest
* DeleteDeviceFleetRequest `object`
  * DeviceFleetName **required**

### DeleteDomainRequest
* DeleteDomainRequest `object`
  * DomainId **required**
  * RetentionPolicy
    * HomeEfsFileSystem

### DeleteEndpointConfigInput
* DeleteEndpointConfigInput `object`
  * EndpointConfigName **required**

### DeleteEndpointInput
* DeleteEndpointInput `object`
  * EndpointName **required**

### DeleteExperimentRequest
* DeleteExperimentRequest `object`
  * ExperimentName **required**

### DeleteExperimentResponse
* DeleteExperimentResponse `object`
  * ExperimentArn

### DeleteFeatureGroupRequest
* DeleteFeatureGroupRequest `object`
  * FeatureGroupName **required**

### DeleteFlowDefinitionRequest
* DeleteFlowDefinitionRequest `object`
  * FlowDefinitionName **required**

### DeleteFlowDefinitionResponse
* DeleteFlowDefinitionResponse `object`

### DeleteHumanTaskUiRequest
* DeleteHumanTaskUiRequest `object`
  * HumanTaskUiName **required**

### DeleteHumanTaskUiResponse
* DeleteHumanTaskUiResponse `object`

### DeleteImageRequest
* DeleteImageRequest `object`
  * ImageName **required**

### DeleteImageResponse
* DeleteImageResponse `object`

### DeleteImageVersionRequest
* DeleteImageVersionRequest `object`
  * ImageName **required**
  * Version **required**

### DeleteImageVersionResponse
* DeleteImageVersionResponse `object`

### DeleteModelBiasJobDefinitionRequest
* DeleteModelBiasJobDefinitionRequest `object`
  * JobDefinitionName **required**

### DeleteModelExplainabilityJobDefinitionRequest
* DeleteModelExplainabilityJobDefinitionRequest `object`
  * JobDefinitionName **required**

### DeleteModelInput
* DeleteModelInput `object`
  * ModelName **required**

### DeleteModelPackageGroupInput
* DeleteModelPackageGroupInput `object`
  * ModelPackageGroupName **required**

### DeleteModelPackageGroupPolicyInput
* DeleteModelPackageGroupPolicyInput `object`
  * ModelPackageGroupName **required**

### DeleteModelPackageInput
* DeleteModelPackageInput `object`
  * ModelPackageName **required**

### DeleteModelQualityJobDefinitionRequest
* DeleteModelQualityJobDefinitionRequest `object`
  * JobDefinitionName **required**

### DeleteMonitoringScheduleRequest
* DeleteMonitoringScheduleRequest `object`
  * MonitoringScheduleName **required**

### DeleteNotebookInstanceInput
* DeleteNotebookInstanceInput `object`
  * NotebookInstanceName **required**

### DeleteNotebookInstanceLifecycleConfigInput
* DeleteNotebookInstanceLifecycleConfigInput `object`
  * NotebookInstanceLifecycleConfigName **required**

### DeletePipelineRequest
* DeletePipelineRequest `object`
  * ClientRequestToken **required**
  * PipelineName **required**

### DeletePipelineResponse
* DeletePipelineResponse `object`
  * PipelineArn

### DeleteProjectInput
* DeleteProjectInput `object`
  * ProjectName **required**

### DeleteTagsInput
* DeleteTagsInput `object`
  * ResourceArn **required**
  * TagKeys **required**
    * items [TagKey](#tagkey)

### DeleteTagsOutput
* DeleteTagsOutput `object`

### DeleteTrialComponentRequest
* DeleteTrialComponentRequest `object`
  * TrialComponentName **required**

### DeleteTrialComponentResponse
* DeleteTrialComponentResponse `object`
  * TrialComponentArn

### DeleteTrialRequest
* DeleteTrialRequest `object`
  * TrialName **required**

### DeleteTrialResponse
* DeleteTrialResponse `object`
  * TrialArn

### DeleteUserProfileRequest
* DeleteUserProfileRequest `object`
  * DomainId **required**
  * UserProfileName **required**

### DeleteWorkforceRequest
* DeleteWorkforceRequest `object`
  * WorkforceName **required**

### DeleteWorkforceResponse
* DeleteWorkforceResponse `object`

### DeleteWorkteamRequest
* DeleteWorkteamRequest `object`
  * WorkteamName **required**

### DeleteWorkteamResponse
* DeleteWorkteamResponse `object`
  * Success **required**

### DeployedImage
* DeployedImage `object`: <p>Gets the Amazon EC2 Container Registry path of the docker image of the model that is hosted in this <a>ProductionVariant</a>.</p> <p>If you used the <code>registry/repository[:tag]</code> form to specify the image path of the primary container when you created the model hosted in this <code>ProductionVariant</code>, the path resolves to a path of the form <code>registry/repository[@digest]</code>. A digest is a hash value that identifies a specific version of an image. For information about Amazon ECR paths, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/docker-pull-ecr-image.html">Pulling an Image</a> in the <i>Amazon ECR User Guide</i>.</p>
  * ResolutionTime
  * ResolvedImage
  * SpecifiedImage

### DeployedImages
* DeployedImages `array`
  * items [DeployedImage](#deployedimage)

### DeploymentConfig
* DeploymentConfig `object`: Currently, the <code>DeploymentConfig</code> API is not supported.
  * AutoRollbackConfiguration
    * Alarms
      * items [Alarm](#alarm)
  * BlueGreenUpdatePolicy **required**
    * MaximumExecutionTimeoutInSeconds
    * TerminationWaitInSeconds
    * TrafficRoutingConfiguration **required**
      * CanarySize
        * Type **required**
        * Value **required**
      * Type **required**
      * WaitIntervalInSeconds **required**

### DeregisterDevicesRequest
* DeregisterDevicesRequest `object`
  * DeviceFleetName **required**
  * DeviceNames **required**
    * items [DeviceName](#devicename)

### DescribeActionRequest
* DescribeActionRequest `object`
  * ActionName **required**

### DescribeActionResponse
* DescribeActionResponse `object`
  * ActionArn
  * ActionName
  * ActionType
  * CreatedBy [UserContext](#usercontext)
  * CreationTime
  * Description
  * LastModifiedBy [UserContext](#usercontext)
  * LastModifiedTime
  * MetadataProperties [MetadataProperties](#metadataproperties)
  * Properties
  * Source
    * SourceId
    * SourceType
    * SourceUri **required**
  * Status

### DescribeAlgorithmInput
* DescribeAlgorithmInput `object`
  * AlgorithmName **required**

### DescribeAlgorithmOutput
* DescribeAlgorithmOutput `object`
  * AlgorithmArn **required**
  * AlgorithmDescription
  * AlgorithmName **required**
  * AlgorithmStatus **required**
  * AlgorithmStatusDetails **required**
    * ImageScanStatuses
      * items [AlgorithmStatusItem](#algorithmstatusitem)
    * ValidationStatuses
      * items [AlgorithmStatusItem](#algorithmstatusitem)
  * CertifyForMarketplace
  * CreationTime **required**
  * InferenceSpecification
    * Containers **required**
      * items [ModelPackageContainerDefinition](#modelpackagecontainerdefinition)
    * SupportedContentTypes **required**
      * items [ContentType](#contenttype)
    * SupportedRealtimeInferenceInstanceTypes
      * items [ProductionVariantInstanceType](#productionvariantinstancetype)
    * SupportedResponseMIMETypes **required**
      * items [ResponseMIMEType](#responsemimetype)
    * SupportedTransformInstanceTypes
      * items [TransformInstanceType](#transforminstancetype)
  * ProductId
  * TrainingSpecification **required**
    * MetricDefinitions
      * items [MetricDefinition](#metricdefinition)
    * SupportedHyperParameters
      * items [HyperParameterSpecification](#hyperparameterspecification)
    * SupportedTrainingInstanceTypes **required**
      * items [TrainingInstanceType](#traininginstancetype)
    * SupportedTuningJobObjectiveMetrics
      * items [HyperParameterTuningJobObjective](#hyperparametertuningjobobjective)
    * SupportsDistributedTraining
    * TrainingChannels **required**
      * items [ChannelSpecification](#channelspecification)
    * TrainingImage **required**
    * TrainingImageDigest
  * ValidationSpecification
    * ValidationProfiles **required**
      * items [AlgorithmValidationProfile](#algorithmvalidationprofile)
    * ValidationRole **required**

### DescribeAppImageConfigRequest
* DescribeAppImageConfigRequest `object`
  * AppImageConfigName **required**

### DescribeAppImageConfigResponse
* DescribeAppImageConfigResponse `object`
  * AppImageConfigArn
  * AppImageConfigName
  * CreationTime
  * KernelGatewayImageConfig
    * FileSystemConfig
      * DefaultGid
      * DefaultUid
      * MountPath
    * KernelSpecs **required**
      * items [KernelSpec](#kernelspec)
  * LastModifiedTime

### DescribeAppRequest
* DescribeAppRequest `object`
  * AppName **required**
  * AppType **required**
  * DomainId **required**
  * UserProfileName **required**

### DescribeAppResponse
* DescribeAppResponse `object`
  * AppArn
  * AppName
  * AppType
  * CreationTime
  * DomainId
  * FailureReason
  * LastHealthCheckTimestamp
  * LastUserActivityTimestamp
  * ResourceSpec
    * InstanceType
    * SageMakerImageArn
    * SageMakerImageVersionArn
  * Status
  * UserProfileName

### DescribeArtifactRequest
* DescribeArtifactRequest `object`
  * ArtifactArn **required**

### DescribeArtifactResponse
* DescribeArtifactResponse `object`
  * ArtifactArn
  * ArtifactName
  * ArtifactType
  * CreatedBy [UserContext](#usercontext)
  * CreationTime
  * LastModifiedBy [UserContext](#usercontext)
  * LastModifiedTime
  * MetadataProperties [MetadataProperties](#metadataproperties)
  * Properties
  * Source
    * SourceTypes
      * items [ArtifactSourceType](#artifactsourcetype)
    * SourceUri **required**

### DescribeAutoMLJobRequest
* DescribeAutoMLJobRequest `object`
  * AutoMLJobName **required**

### DescribeAutoMLJobResponse
* DescribeAutoMLJobResponse `object`
  * AutoMLJobArn **required**
  * AutoMLJobArtifacts
    * CandidateDefinitionNotebookLocation
    * DataExplorationNotebookLocation
  * AutoMLJobConfig
    * CompletionCriteria
      * MaxAutoMLJobRuntimeInSeconds
      * MaxCandidates
      * MaxRuntimePerTrainingJobInSeconds
    * SecurityConfig
      * EnableInterContainerTrafficEncryption
      * VolumeKmsKeyId
      * VpcConfig
        * SecurityGroupIds **required**
          * items [SecurityGroupId](#securitygroupid)
        * Subnets **required**
          * items [SubnetId](#subnetid)
  * AutoMLJobName **required**
  * AutoMLJobObjective
    * MetricName **required**
  * AutoMLJobSecondaryStatus **required**
  * AutoMLJobStatus **required**
  * BestCandidate
    * CandidateName **required**
    * CandidateStatus **required**
    * CandidateSteps **required**
      * items [AutoMLCandidateStep](#automlcandidatestep)
    * CreationTime **required**
    * EndTime
    * FailureReason
    * FinalAutoMLJobObjectiveMetric [FinalAutoMLJobObjectiveMetric](#finalautomljobobjectivemetric)
    * InferenceContainers
      * items [AutoMLContainerDefinition](#automlcontainerdefinition)
    * LastModifiedTime **required**
    * ObjectiveStatus **required**
  * CreationTime **required**
  * EndTime
  * FailureReason
  * GenerateCandidateDefinitionsOnly
  * InputDataConfig **required**
    * items [AutoMLChannel](#automlchannel)
  * LastModifiedTime **required**
  * OutputDataConfig **required**
    * KmsKeyId
    * S3OutputPath **required**
  * ProblemType
  * ResolvedAttributes
    * AutoMLJobObjective [AutoMLJobObjective](#automljobobjective)
    * CompletionCriteria [AutoMLJobCompletionCriteria](#automljobcompletioncriteria)
    * ProblemType
  * RoleArn **required**

### DescribeCodeRepositoryInput
* DescribeCodeRepositoryInput `object`
  * CodeRepositoryName **required**

### DescribeCodeRepositoryOutput
* DescribeCodeRepositoryOutput `object`
  * CodeRepositoryArn **required**
  * CodeRepositoryName **required**
  * CreationTime **required**
  * GitConfig
    * Branch
    * RepositoryUrl **required**
    * SecretArn
  * LastModifiedTime **required**

### DescribeCompilationJobRequest
* DescribeCompilationJobRequest `object`
  * CompilationJobName **required**

### DescribeCompilationJobResponse
* DescribeCompilationJobResponse `object`
  * CompilationEndTime
  * CompilationJobArn **required**
  * CompilationJobName **required**
  * CompilationJobStatus **required**
  * CompilationStartTime
  * CreationTime **required**
  * FailureReason **required**
  * InputConfig **required**
    * DataInputConfig **required**
    * Framework **required**
    * S3Uri **required**
  * LastModifiedTime **required**
  * ModelArtifacts **required**
    * S3ModelArtifacts **required**
  * ModelDigests
    * ArtifactDigest
  * OutputConfig **required**
    * CompilerOptions
    * KmsKeyId
    * S3OutputLocation **required**
    * TargetDevice
    * TargetPlatform
      * Accelerator
      * Arch **required**
      * Os **required**
  * RoleArn **required**
  * StoppingCondition **required**
    * MaxRuntimeInSeconds
    * MaxWaitTimeInSeconds

### DescribeContextRequest
* DescribeContextRequest `object`
  * ContextName **required**

### DescribeContextResponse
* DescribeContextResponse `object`
  * ContextArn
  * ContextName
  * ContextType
  * CreatedBy [UserContext](#usercontext)
  * CreationTime
  * Description
  * LastModifiedBy [UserContext](#usercontext)
  * LastModifiedTime
  * Properties
  * Source
    * SourceId
    * SourceType
    * SourceUri **required**

### DescribeDataQualityJobDefinitionRequest
* DescribeDataQualityJobDefinitionRequest `object`
  * JobDefinitionName **required**

### DescribeDataQualityJobDefinitionResponse
* DescribeDataQualityJobDefinitionResponse `object`
  * CreationTime **required**
  * DataQualityAppSpecification **required**
    * ContainerArguments
      * items [ContainerArgument](#containerargument)
    * ContainerEntrypoint
      * items [ContainerEntrypointString](#containerentrypointstring)
    * Environment
    * ImageUri **required**
    * PostAnalyticsProcessorSourceUri
    * RecordPreprocessorSourceUri
  * DataQualityBaselineConfig
    * BaseliningJobName
    * ConstraintsResource [MonitoringConstraintsResource](#monitoringconstraintsresource)
    * StatisticsResource [MonitoringStatisticsResource](#monitoringstatisticsresource)
  * DataQualityJobInput **required**
    * EndpointInput **required** [EndpointInput](#endpointinput)
  * DataQualityJobOutputConfig **required** [MonitoringOutputConfig](#monitoringoutputconfig)
  * JobDefinitionArn **required**
  * JobDefinitionName **required**
  * JobResources **required** [MonitoringResources](#monitoringresources)
  * NetworkConfig
    * EnableInterContainerTrafficEncryption
    * EnableNetworkIsolation
    * VpcConfig [VpcConfig](#vpcconfig)
  * RoleArn **required**
  * StoppingCondition [MonitoringStoppingCondition](#monitoringstoppingcondition)

### DescribeDeviceFleetRequest
* DescribeDeviceFleetRequest `object`
  * DeviceFleetName **required**

### DescribeDeviceFleetResponse
* DescribeDeviceFleetResponse `object`
  * CreationTime **required**
  * Description
  * DeviceFleetArn **required**
  * DeviceFleetName **required**
  * IotRoleAlias
  * LastModifiedTime **required**
  * OutputConfig **required**
    * KmsKeyId
    * S3OutputLocation **required**
  * RoleArn

### DescribeDeviceRequest
* DescribeDeviceRequest `object`
  * DeviceFleetName **required**
  * DeviceName **required**
  * NextToken

### DescribeDeviceResponse
* DescribeDeviceResponse `object`
  * Description
  * DeviceArn
  * DeviceFleetName **required**
  * DeviceName **required**
  * IotThingName
  * LatestHeartbeat
  * MaxModels
  * Models
    * items [EdgeModel](#edgemodel)
  * NextToken
  * RegistrationTime **required**

### DescribeDomainRequest
* DescribeDomainRequest `object`
  * DomainId **required**

### DescribeDomainResponse
* DescribeDomainResponse `object`
  * AppNetworkAccessType
  * AuthMode
  * CreationTime
  * DefaultUserSettings
    * ExecutionRole
    * JupyterServerAppSettings
      * DefaultResourceSpec
        * InstanceType
        * SageMakerImageArn
        * SageMakerImageVersionArn
    * KernelGatewayAppSettings
      * CustomImages
        * items [CustomImage](#customimage)
      * DefaultResourceSpec
        * InstanceType
        * SageMakerImageArn
        * SageMakerImageVersionArn
    * SecurityGroups
      * items [SecurityGroupId](#securitygroupid)
    * SharingSettings
      * NotebookOutputOption
      * S3KmsKeyId
      * S3OutputPath
    * TensorBoardAppSettings
      * DefaultResourceSpec
        * InstanceType
        * SageMakerImageArn
        * SageMakerImageVersionArn
  * DomainArn
  * DomainId
  * DomainName
  * FailureReason
  * HomeEfsFileSystemId
  * HomeEfsFileSystemKmsKeyId
  * KmsKeyId
  * LastModifiedTime
  * SingleSignOnManagedApplicationInstanceId
  * Status
  * SubnetIds
    * items [SubnetId](#subnetid)
  * Url
  * VpcId

### DescribeEdgePackagingJobRequest
* DescribeEdgePackagingJobRequest `object`
  * EdgePackagingJobName **required**

### DescribeEdgePackagingJobResponse
* DescribeEdgePackagingJobResponse `object`
  * CompilationJobName
  * CreationTime
  * EdgePackagingJobArn **required**
  * EdgePackagingJobName **required**
  * EdgePackagingJobStatus **required**
  * EdgePackagingJobStatusMessage
  * LastModifiedTime
  * ModelArtifact
  * ModelName
  * ModelSignature
  * ModelVersion
  * OutputConfig
    * KmsKeyId
    * S3OutputLocation **required**
  * ResourceKey
  * RoleArn

### DescribeEndpointConfigInput
* DescribeEndpointConfigInput `object`
  * EndpointConfigName **required**

### DescribeEndpointConfigOutput
* DescribeEndpointConfigOutput `object`
  * CreationTime **required**
  * DataCaptureConfig [DataCaptureConfig](#datacaptureconfig)
  * EndpointConfigArn **required**
  * EndpointConfigName **required**
  * KmsKeyId
  * ProductionVariants **required**
    * items [ProductionVariant](#productionvariant)

### DescribeEndpointInput
* DescribeEndpointInput `object`
  * EndpointName **required**

### DescribeEndpointOutput
* DescribeEndpointOutput `object`
  * CreationTime **required**
  * DataCaptureConfig [DataCaptureConfigSummary](#datacaptureconfigsummary)
  * EndpointArn **required**
  * EndpointConfigName **required**
  * EndpointName **required**
  * EndpointStatus **required**
  * FailureReason
  * LastDeploymentConfig
    * AutoRollbackConfiguration
      * Alarms
        * items [Alarm](#alarm)
    * BlueGreenUpdatePolicy **required**
      * MaximumExecutionTimeoutInSeconds
      * TerminationWaitInSeconds
      * TrafficRoutingConfiguration **required**
        * CanarySize
          * Type **required**
          * Value **required**
        * Type **required**
        * WaitIntervalInSeconds **required**
  * LastModifiedTime **required**
  * ProductionVariants
    * items [ProductionVariantSummary](#productionvariantsummary)

### DescribeExperimentRequest
* DescribeExperimentRequest `object`
  * ExperimentName **required**

### DescribeExperimentResponse
* DescribeExperimentResponse `object`
  * CreatedBy
    * DomainId
    * UserProfileArn
    * UserProfileName
  * CreationTime
  * Description
  * DisplayName
  * ExperimentArn
  * ExperimentName
  * LastModifiedBy
    * DomainId
    * UserProfileArn
    * UserProfileName
  * LastModifiedTime
  * Source
    * SourceArn **required**
    * SourceType

### DescribeFeatureGroupRequest
* DescribeFeatureGroupRequest `object`
  * FeatureGroupName **required**
  * NextToken

### DescribeFeatureGroupResponse
* DescribeFeatureGroupResponse `object`
  * CreationTime **required**
  * Description
  * EventTimeFeatureName **required**
  * FailureReason
  * FeatureDefinitions **required**
    * items [FeatureDefinition](#featuredefinition)
  * FeatureGroupArn **required**
  * FeatureGroupName **required**
  * FeatureGroupStatus
  * NextToken **required**
  * OfflineStoreConfig
    * DataCatalogConfig
      * Catalog **required**
      * Database **required**
      * TableName **required**
    * DisableGlueTableCreation
    * S3StorageConfig **required**
      * KmsKeyId
      * S3Uri **required**
  * OfflineStoreStatus
    * BlockedReason
    * Status **required**
  * OnlineStoreConfig
    * EnableOnlineStore
    * SecurityConfig
      * KmsKeyId
  * RecordIdentifierFeatureName **required**
  * RoleArn

### DescribeFlowDefinitionRequest
* DescribeFlowDefinitionRequest `object`
  * FlowDefinitionName **required**

### DescribeFlowDefinitionResponse
* DescribeFlowDefinitionResponse `object`
  * CreationTime **required**
  * FailureReason
  * FlowDefinitionArn **required**
  * FlowDefinitionName **required**
  * FlowDefinitionStatus **required**
  * HumanLoopActivationConfig
    * HumanLoopActivationConditionsConfig **required**
      * HumanLoopActivationConditions **required**
  * HumanLoopConfig **required**
    * HumanTaskUiArn **required**
    * PublicWorkforceTaskPrice [PublicWorkforceTaskPrice](#publicworkforcetaskprice)
    * TaskAvailabilityLifetimeInSeconds
    * TaskCount **required**
    * TaskDescription **required**
    * TaskKeywords
      * items [FlowDefinitionTaskKeyword](#flowdefinitiontaskkeyword)
    * TaskTimeLimitInSeconds
    * TaskTitle **required**
    * WorkteamArn **required**
  * HumanLoopRequestSource
    * AwsManagedHumanLoopRequestSource **required**
  * OutputConfig **required**
    * KmsKeyId
    * S3OutputPath **required**
  * RoleArn **required**

### DescribeHumanTaskUiRequest
* DescribeHumanTaskUiRequest `object`
  * HumanTaskUiName **required**

### DescribeHumanTaskUiResponse
* DescribeHumanTaskUiResponse `object`
  * CreationTime **required**
  * HumanTaskUiArn **required**
  * HumanTaskUiName **required**
  * HumanTaskUiStatus
  * UiTemplate **required** [UiTemplateInfo](#uitemplateinfo)

### DescribeHyperParameterTuningJobRequest
* DescribeHyperParameterTuningJobRequest `object`
  * HyperParameterTuningJobName **required**

### DescribeHyperParameterTuningJobResponse
* DescribeHyperParameterTuningJobResponse `object`
  * BestTrainingJob
    * CreationTime **required**
    * FailureReason
    * FinalHyperParameterTuningJobObjectiveMetric
      * MetricName **required**
      * Type
      * Value **required**
    * ObjectiveStatus
    * TrainingEndTime
    * TrainingJobArn **required**
    * TrainingJobDefinitionName
    * TrainingJobName **required**
    * TrainingJobStatus **required**
    * TrainingStartTime
    * TunedHyperParameters **required**
    * TuningJobName
  * CreationTime **required**
  * FailureReason
  * HyperParameterTuningEndTime
  * HyperParameterTuningJobArn **required**
  * HyperParameterTuningJobConfig **required**
    * HyperParameterTuningJobObjective
      * MetricName **required**
      * Type **required**
    * ParameterRanges
      * CategoricalParameterRanges
        * items [CategoricalParameterRange](#categoricalparameterrange)
      * ContinuousParameterRanges
        * items [ContinuousParameterRange](#continuousparameterrange)
      * IntegerParameterRanges
        * items [IntegerParameterRange](#integerparameterrange)
    * ResourceLimits **required**
      * MaxNumberOfTrainingJobs **required**
      * MaxParallelTrainingJobs **required**
    * Strategy **required**
    * TrainingJobEarlyStoppingType
    * TuningJobCompletionCriteria
      * TargetObjectiveMetricValue **required**
  * HyperParameterTuningJobName **required**
  * HyperParameterTuningJobStatus **required**
  * LastModifiedTime
  * ObjectiveStatusCounters **required**
    * Failed
    * Pending
    * Succeeded
  * OverallBestTrainingJob
    * CreationTime **required**
    * FailureReason
    * FinalHyperParameterTuningJobObjectiveMetric
      * MetricName **required**
      * Type
      * Value **required**
    * ObjectiveStatus
    * TrainingEndTime
    * TrainingJobArn **required**
    * TrainingJobDefinitionName
    * TrainingJobName **required**
    * TrainingJobStatus **required**
    * TrainingStartTime
    * TunedHyperParameters **required**
    * TuningJobName
  * TrainingJobDefinition
    * AlgorithmSpecification **required**
      * AlgorithmName
      * MetricDefinitions
        * items [MetricDefinition](#metricdefinition)
      * TrainingImage
      * TrainingInputMode **required**
    * CheckpointConfig [CheckpointConfig](#checkpointconfig)
    * DefinitionName
    * EnableInterContainerTrafficEncryption
    * EnableManagedSpotTraining
    * EnableNetworkIsolation
    * HyperParameterRanges [ParameterRanges](#parameterranges)
    * InputDataConfig
      * items [Channel](#channel)
    * OutputDataConfig **required**
      * KmsKeyId
      * S3OutputPath **required**
    * ResourceConfig **required**
      * InstanceCount **required**
      * InstanceType **required**
      * VolumeKmsKeyId
      * VolumeSizeInGB **required**
    * RoleArn **required**
    * StaticHyperParameters
    * StoppingCondition **required**
      * MaxRuntimeInSeconds
      * MaxWaitTimeInSeconds
    * TuningObjective [HyperParameterTuningJobObjective](#hyperparametertuningjobobjective)
    * VpcConfig
      * SecurityGroupIds **required**
        * items [SecurityGroupId](#securitygroupid)
      * Subnets **required**
        * items [SubnetId](#subnetid)
  * TrainingJobDefinitions
    * items [HyperParameterTrainingJobDefinition](#hyperparametertrainingjobdefinition)
  * TrainingJobStatusCounters **required**
    * Completed
    * InProgress
    * NonRetryableError
    * RetryableError
    * Stopped
  * WarmStartConfig
    * ParentHyperParameterTuningJobs **required**
      * items [ParentHyperParameterTuningJob](#parenthyperparametertuningjob)
    * WarmStartType **required**

### DescribeImageRequest
* DescribeImageRequest `object`
  * ImageName **required**

### DescribeImageResponse
* DescribeImageResponse `object`
  * CreationTime
  * Description
  * DisplayName
  * FailureReason
  * ImageArn
  * ImageName
  * ImageStatus
  * LastModifiedTime
  * RoleArn

### DescribeImageVersionRequest
* DescribeImageVersionRequest `object`
  * ImageName **required**
  * Version

### DescribeImageVersionResponse
* DescribeImageVersionResponse `object`
  * BaseImage
  * ContainerImage
  * CreationTime
  * FailureReason
  * ImageArn
  * ImageVersionArn
  * ImageVersionStatus
  * LastModifiedTime
  * Version

### DescribeLabelingJobRequest
* DescribeLabelingJobRequest `object`
  * LabelingJobName **required**

### DescribeLabelingJobResponse
* DescribeLabelingJobResponse `object`
  * CreationTime **required**
  * FailureReason
  * HumanTaskConfig **required**
    * AnnotationConsolidationConfig **required**
      * AnnotationConsolidationLambdaArn **required**
    * MaxConcurrentTaskCount
    * NumberOfHumanWorkersPerDataObject **required**
    * PreHumanTaskLambdaArn **required**
    * PublicWorkforceTaskPrice
      * AmountInUsd
        * Cents
        * Dollars
        * TenthFractionsOfACent
    * TaskAvailabilityLifetimeInSeconds
    * TaskDescription **required**
    * TaskKeywords
      * items [TaskKeyword](#taskkeyword)
    * TaskTimeLimitInSeconds **required**
    * TaskTitle **required**
    * UiConfig **required**
      * HumanTaskUiArn
      * UiTemplateS3Uri
    * WorkteamArn **required**
  * InputConfig **required**
    * DataAttributes
      * ContentClassifiers
        * items [ContentClassifier](#contentclassifier)
    * DataSource **required**
      * S3DataSource
        * ManifestS3Uri **required**
      * SnsDataSource
        * SnsTopicArn **required**
  * JobReferenceCode **required**
  * LabelAttributeName
  * LabelCategoryConfigS3Uri
  * LabelCounters **required**
    * FailedNonRetryableError
    * HumanLabeled
    * MachineLabeled
    * TotalLabeled
    * Unlabeled
  * LabelingJobAlgorithmsConfig
    * InitialActiveLearningModelArn
    * LabelingJobAlgorithmSpecificationArn **required**
    * LabelingJobResourceConfig
      * VolumeKmsKeyId
  * LabelingJobArn **required**
  * LabelingJobName **required**
  * LabelingJobOutput
    * FinalActiveLearningModelArn
    * OutputDatasetS3Uri **required**
  * LabelingJobStatus **required**
  * LastModifiedTime **required**
  * OutputConfig **required**
    * KmsKeyId
    * S3OutputPath **required**
    * SnsTopicArn
  * RoleArn **required**
  * StoppingConditions
    * MaxHumanLabeledObjectCount
    * MaxPercentageOfInputDatasetLabeled
  * Tags
    * items [Tag](#tag)

### DescribeModelBiasJobDefinitionRequest
* DescribeModelBiasJobDefinitionRequest `object`
  * JobDefinitionName **required**

### DescribeModelBiasJobDefinitionResponse
* DescribeModelBiasJobDefinitionResponse `object`
  * CreationTime **required**
  * JobDefinitionArn **required**
  * JobDefinitionName **required**
  * JobResources **required** [MonitoringResources](#monitoringresources)
  * ModelBiasAppSpecification **required**
    * ConfigUri **required**
    * Environment
    * ImageUri **required**
  * ModelBiasBaselineConfig
    * BaseliningJobName
    * ConstraintsResource [MonitoringConstraintsResource](#monitoringconstraintsresource)
  * ModelBiasJobInput **required**
    * EndpointInput **required** [EndpointInput](#endpointinput)
    * GroundTruthS3Input **required**
      * S3Uri
  * ModelBiasJobOutputConfig **required** [MonitoringOutputConfig](#monitoringoutputconfig)
  * NetworkConfig
    * EnableInterContainerTrafficEncryption
    * EnableNetworkIsolation
    * VpcConfig [VpcConfig](#vpcconfig)
  * RoleArn **required**
  * StoppingCondition [MonitoringStoppingCondition](#monitoringstoppingcondition)

### DescribeModelExplainabilityJobDefinitionRequest
* DescribeModelExplainabilityJobDefinitionRequest `object`
  * JobDefinitionName **required**

### DescribeModelExplainabilityJobDefinitionResponse
* DescribeModelExplainabilityJobDefinitionResponse `object`
  * CreationTime **required**
  * JobDefinitionArn **required**
  * JobDefinitionName **required**
  * JobResources **required** [MonitoringResources](#monitoringresources)
  * ModelExplainabilityAppSpecification **required**
    * ConfigUri **required**
    * Environment
    * ImageUri **required**
  * ModelExplainabilityBaselineConfig
    * BaseliningJobName
    * ConstraintsResource [MonitoringConstraintsResource](#monitoringconstraintsresource)
  * ModelExplainabilityJobInput **required**
    * EndpointInput **required** [EndpointInput](#endpointinput)
  * ModelExplainabilityJobOutputConfig **required** [MonitoringOutputConfig](#monitoringoutputconfig)
  * NetworkConfig
    * EnableInterContainerTrafficEncryption
    * EnableNetworkIsolation
    * VpcConfig [VpcConfig](#vpcconfig)
  * RoleArn **required**
  * StoppingCondition [MonitoringStoppingCondition](#monitoringstoppingcondition)

### DescribeModelInput
* DescribeModelInput `object`
  * ModelName **required**

### DescribeModelOutput
* DescribeModelOutput `object`
  * Containers
    * items [ContainerDefinition](#containerdefinition)
  * CreationTime **required**
  * EnableNetworkIsolation
  * ExecutionRoleArn **required**
  * ModelArn **required**
  * ModelName **required**
  * PrimaryContainer
    * ContainerHostname
    * Environment
    * Image
    * ImageConfig
      * RepositoryAccessMode **required**
    * Mode
    * ModelDataUrl
    * ModelPackageName
  * VpcConfig
    * SecurityGroupIds **required**
      * items [SecurityGroupId](#securitygroupid)
    * Subnets **required**
      * items [SubnetId](#subnetid)

### DescribeModelPackageGroupInput
* DescribeModelPackageGroupInput `object`
  * ModelPackageGroupName **required**

### DescribeModelPackageGroupOutput
* DescribeModelPackageGroupOutput `object`
  * CreatedBy **required** [UserContext](#usercontext)
  * CreationTime **required**
  * ModelPackageGroupArn **required**
  * ModelPackageGroupDescription
  * ModelPackageGroupName **required**
  * ModelPackageGroupStatus **required**

### DescribeModelPackageInput
* DescribeModelPackageInput `object`
  * ModelPackageName **required**

### DescribeModelPackageOutput
* DescribeModelPackageOutput `object`
  * ApprovalDescription
  * CertifyForMarketplace
  * CreatedBy [UserContext](#usercontext)
  * CreationTime **required**
  * InferenceSpecification
    * Containers **required**
      * items [ModelPackageContainerDefinition](#modelpackagecontainerdefinition)
    * SupportedContentTypes **required**
      * items [ContentType](#contenttype)
    * SupportedRealtimeInferenceInstanceTypes
      * items [ProductionVariantInstanceType](#productionvariantinstancetype)
    * SupportedResponseMIMETypes **required**
      * items [ResponseMIMEType](#responsemimetype)
    * SupportedTransformInstanceTypes
      * items [TransformInstanceType](#transforminstancetype)
  * LastModifiedBy [UserContext](#usercontext)
  * LastModifiedTime
  * MetadataProperties [MetadataProperties](#metadataproperties)
  * ModelApprovalStatus
  * ModelMetrics
    * Bias
      * Report
        * ContentDigest
        * ContentType **required**
        * S3Uri **required**
    * Explainability
      * Report
        * ContentDigest
        * ContentType **required**
        * S3Uri **required**
    * ModelDataQuality
      * Constraints
        * ContentDigest
        * ContentType **required**
        * S3Uri **required**
      * Statistics
        * ContentDigest
        * ContentType **required**
        * S3Uri **required**
    * ModelQuality
      * Constraints
        * ContentDigest
        * ContentType **required**
        * S3Uri **required**
      * Statistics
        * ContentDigest
        * ContentType **required**
        * S3Uri **required**
  * ModelPackageArn **required**
  * ModelPackageDescription
  * ModelPackageGroupName
  * ModelPackageName **required**
  * ModelPackageStatus **required**
  * ModelPackageStatusDetails **required**
    * ImageScanStatuses
      * items [ModelPackageStatusItem](#modelpackagestatusitem)
    * ValidationStatuses **required**
      * items [ModelPackageStatusItem](#modelpackagestatusitem)
  * ModelPackageVersion
  * SourceAlgorithmSpecification
    * SourceAlgorithms **required**
      * items [SourceAlgorithm](#sourcealgorithm)
  * ValidationSpecification
    * ValidationProfiles **required**
      * items [ModelPackageValidationProfile](#modelpackagevalidationprofile)
    * ValidationRole **required**

### DescribeModelQualityJobDefinitionRequest
* DescribeModelQualityJobDefinitionRequest `object`
  * JobDefinitionName **required**

### DescribeModelQualityJobDefinitionResponse
* DescribeModelQualityJobDefinitionResponse `object`
  * CreationTime **required**
  * JobDefinitionArn **required**
  * JobDefinitionName **required**
  * JobResources **required** [MonitoringResources](#monitoringresources)
  * ModelQualityAppSpecification **required**
    * ContainerArguments
      * items [ContainerArgument](#containerargument)
    * ContainerEntrypoint
      * items [ContainerEntrypointString](#containerentrypointstring)
    * Environment
    * ImageUri **required**
    * PostAnalyticsProcessorSourceUri
    * ProblemType
    * RecordPreprocessorSourceUri
  * ModelQualityBaselineConfig
    * BaseliningJobName
    * ConstraintsResource [MonitoringConstraintsResource](#monitoringconstraintsresource)
  * ModelQualityJobInput **required**
    * EndpointInput **required** [EndpointInput](#endpointinput)
    * GroundTruthS3Input **required**
      * S3Uri
  * ModelQualityJobOutputConfig **required** [MonitoringOutputConfig](#monitoringoutputconfig)
  * NetworkConfig
    * EnableInterContainerTrafficEncryption
    * EnableNetworkIsolation
    * VpcConfig [VpcConfig](#vpcconfig)
  * RoleArn **required**
  * StoppingCondition [MonitoringStoppingCondition](#monitoringstoppingcondition)

### DescribeMonitoringScheduleRequest
* DescribeMonitoringScheduleRequest `object`
  * MonitoringScheduleName **required**

### DescribeMonitoringScheduleResponse
* DescribeMonitoringScheduleResponse `object`
  * CreationTime **required**
  * EndpointName
  * FailureReason
  * LastModifiedTime **required**
  * LastMonitoringExecutionSummary
    * CreationTime **required**
    * EndpointName
    * FailureReason
    * LastModifiedTime **required**
    * MonitoringExecutionStatus **required**
    * MonitoringJobDefinitionName
    * MonitoringScheduleName **required**
    * MonitoringType
    * ProcessingJobArn
    * ScheduledTime **required**
  * MonitoringScheduleArn **required**
  * MonitoringScheduleConfig **required**
    * MonitoringJobDefinition
      * BaselineConfig
        * BaseliningJobName
        * ConstraintsResource
          * S3Uri
        * StatisticsResource
          * S3Uri
      * Environment
      * MonitoringAppSpecification **required**
        * ContainerArguments
          * items [ContainerArgument](#containerargument)
        * ContainerEntrypoint
          * items [ContainerEntrypointString](#containerentrypointstring)
        * ImageUri **required**
        * PostAnalyticsProcessorSourceUri
        * RecordPreprocessorSourceUri
      * MonitoringInputs **required**
        * items [MonitoringInput](#monitoringinput)
      * MonitoringOutputConfig **required**
        * KmsKeyId
        * MonitoringOutputs **required**
          * items [MonitoringOutput](#monitoringoutput)
      * MonitoringResources **required**
        * ClusterConfig **required**
          * InstanceCount **required**
          * InstanceType **required**
          * VolumeKmsKeyId
          * VolumeSizeInGB **required**
      * NetworkConfig
        * EnableInterContainerTrafficEncryption
        * EnableNetworkIsolation
        * VpcConfig [VpcConfig](#vpcconfig)
      * RoleArn **required**
      * StoppingCondition
        * MaxRuntimeInSeconds **required**
    * MonitoringJobDefinitionName
    * MonitoringType
    * ScheduleConfig
      * ScheduleExpression **required**
  * MonitoringScheduleName **required**
  * MonitoringScheduleStatus **required**
  * MonitoringType

### DescribeNotebookInstanceInput
* DescribeNotebookInstanceInput `object`
  * NotebookInstanceName **required**

### DescribeNotebookInstanceLifecycleConfigInput
* DescribeNotebookInstanceLifecycleConfigInput `object`
  * NotebookInstanceLifecycleConfigName **required**

### DescribeNotebookInstanceLifecycleConfigOutput
* DescribeNotebookInstanceLifecycleConfigOutput `object`
  * CreationTime
  * LastModifiedTime
  * NotebookInstanceLifecycleConfigArn
  * NotebookInstanceLifecycleConfigName
  * OnCreate
    * items [NotebookInstanceLifecycleHook](#notebookinstancelifecyclehook)
  * OnStart
    * items [NotebookInstanceLifecycleHook](#notebookinstancelifecyclehook)

### DescribeNotebookInstanceOutput
* DescribeNotebookInstanceOutput `object`
  * AcceleratorTypes
    * items [NotebookInstanceAcceleratorType](#notebookinstanceacceleratortype)
  * AdditionalCodeRepositories
    * items [CodeRepositoryNameOrUrl](#coderepositorynameorurl)
  * CreationTime
  * DefaultCodeRepository
  * DirectInternetAccess
  * FailureReason
  * InstanceType
  * KmsKeyId
  * LastModifiedTime
  * NetworkInterfaceId
  * NotebookInstanceArn
  * NotebookInstanceLifecycleConfigName
  * NotebookInstanceName
  * NotebookInstanceStatus
  * RoleArn
  * RootAccess
  * SecurityGroups
    * items [SecurityGroupId](#securitygroupid)
  * SubnetId
  * Url
  * VolumeSizeInGB

### DescribePipelineDefinitionForExecutionRequest
* DescribePipelineDefinitionForExecutionRequest `object`
  * PipelineExecutionArn **required**

### DescribePipelineDefinitionForExecutionResponse
* DescribePipelineDefinitionForExecutionResponse `object`
  * CreationTime
  * PipelineDefinition

### DescribePipelineExecutionRequest
* DescribePipelineExecutionRequest `object`
  * PipelineExecutionArn **required**

### DescribePipelineExecutionResponse
* DescribePipelineExecutionResponse `object`
  * CreatedBy [UserContext](#usercontext)
  * CreationTime
  * LastModifiedBy [UserContext](#usercontext)
  * LastModifiedTime
  * PipelineArn
  * PipelineExecutionArn
  * PipelineExecutionDescription
  * PipelineExecutionDisplayName
  * PipelineExecutionStatus

### DescribePipelineRequest
* DescribePipelineRequest `object`
  * PipelineName **required**

### DescribePipelineResponse
* DescribePipelineResponse `object`
  * CreatedBy [UserContext](#usercontext)
  * CreationTime
  * LastModifiedBy [UserContext](#usercontext)
  * LastModifiedTime
  * LastRunTime
  * PipelineArn
  * PipelineDefinition
  * PipelineDescription
  * PipelineDisplayName
  * PipelineName
  * PipelineStatus
  * RoleArn

### DescribeProcessingJobRequest
* DescribeProcessingJobRequest `object`
  * ProcessingJobName **required**

### DescribeProcessingJobResponse
* DescribeProcessingJobResponse `object`
  * AppSpecification **required**
    * ContainerArguments
      * items [ContainerArgument](#containerargument)
    * ContainerEntrypoint
      * items [ContainerEntrypointString](#containerentrypointstring)
    * ImageUri **required**
  * AutoMLJobArn
  * CreationTime **required**
  * Environment
  * ExitMessage
  * ExperimentConfig
    * ExperimentName
    * TrialComponentDisplayName
    * TrialName
  * FailureReason
  * LastModifiedTime
  * MonitoringScheduleArn
  * NetworkConfig
    * EnableInterContainerTrafficEncryption
    * EnableNetworkIsolation
    * VpcConfig [VpcConfig](#vpcconfig)
  * ProcessingEndTime
  * ProcessingInputs
    * items [ProcessingInput](#processinginput)
  * ProcessingJobArn **required**
  * ProcessingJobName **required**
  * ProcessingJobStatus **required**
  * ProcessingOutputConfig
    * KmsKeyId
    * Outputs **required**
      * items [ProcessingOutput](#processingoutput)
  * ProcessingResources **required**
    * ClusterConfig **required**
      * InstanceCount **required**
      * InstanceType **required**
      * VolumeKmsKeyId
      * VolumeSizeInGB **required**
  * ProcessingStartTime
  * RoleArn
  * StoppingCondition
    * MaxRuntimeInSeconds **required**
  * TrainingJobArn

### DescribeProjectInput
* DescribeProjectInput `object`
  * ProjectName **required**

### DescribeProjectOutput
* DescribeProjectOutput `object`
  * CreatedBy [UserContext](#usercontext)
  * CreationTime **required**
  * ProjectArn **required**
  * ProjectDescription
  * ProjectId **required**
  * ProjectName **required**
  * ProjectStatus **required**
  * ServiceCatalogProvisionedProductDetails
    * ProvisionedProductId
    * ProvisionedProductStatusMessage
  * ServiceCatalogProvisioningDetails **required**
    * PathId
    * ProductId **required**
    * ProvisioningArtifactId **required**
    * ProvisioningParameters
      * items [ProvisioningParameter](#provisioningparameter)

### DescribeSubscribedWorkteamRequest
* DescribeSubscribedWorkteamRequest `object`
  * WorkteamArn **required**

### DescribeSubscribedWorkteamResponse
* DescribeSubscribedWorkteamResponse `object`
  * SubscribedWorkteam **required**
    * ListingId
    * MarketplaceDescription
    * MarketplaceTitle
    * SellerName
    * WorkteamArn **required**

### DescribeTrainingJobRequest
* DescribeTrainingJobRequest `object`
  * TrainingJobName **required**

### DescribeTrainingJobResponse
* DescribeTrainingJobResponse `object`
  * AlgorithmSpecification **required**
    * AlgorithmName
    * EnableSageMakerMetricsTimeSeries
    * MetricDefinitions
      * items [MetricDefinition](#metricdefinition)
    * TrainingImage
    * TrainingInputMode **required**
  * AutoMLJobArn
  * BillableTimeInSeconds
  * CheckpointConfig [CheckpointConfig](#checkpointconfig)
  * CreationTime **required**
  * DebugHookConfig [DebugHookConfig](#debughookconfig)
  * DebugRuleConfigurations
    * items [DebugRuleConfiguration](#debugruleconfiguration)
  * DebugRuleEvaluationStatuses
    * items [DebugRuleEvaluationStatus](#debugruleevaluationstatus)
  * EnableInterContainerTrafficEncryption
  * EnableManagedSpotTraining
  * EnableNetworkIsolation
  * ExperimentConfig [ExperimentConfig](#experimentconfig)
  * FailureReason
  * FinalMetricDataList
    * items [MetricData](#metricdata)
  * HyperParameters
  * InputDataConfig
    * items [Channel](#channel)
  * LabelingJobArn
  * LastModifiedTime
  * ModelArtifacts **required**
    * S3ModelArtifacts **required**
  * OutputDataConfig
    * KmsKeyId
    * S3OutputPath **required**
  * ProfilerConfig [ProfilerConfig](#profilerconfig)
  * ProfilerRuleConfigurations
    * items [ProfilerRuleConfiguration](#profilerruleconfiguration)
  * ProfilerRuleEvaluationStatuses
    * items [ProfilerRuleEvaluationStatus](#profilerruleevaluationstatus)
  * ProfilingStatus
  * ResourceConfig **required**
    * InstanceCount **required**
    * InstanceType **required**
    * VolumeKmsKeyId
    * VolumeSizeInGB **required**
  * RoleArn
  * SecondaryStatus **required**
  * SecondaryStatusTransitions
    * items [SecondaryStatusTransition](#secondarystatustransition)
  * StoppingCondition **required**
    * MaxRuntimeInSeconds
    * MaxWaitTimeInSeconds
  * TensorBoardOutputConfig [TensorBoardOutputConfig](#tensorboardoutputconfig)
  * TrainingEndTime
  * TrainingJobArn **required**
  * TrainingJobName **required**
  * TrainingJobStatus **required**
  * TrainingStartTime
  * TrainingTimeInSeconds
  * TuningJobArn
  * VpcConfig
    * SecurityGroupIds **required**
      * items [SecurityGroupId](#securitygroupid)
    * Subnets **required**
      * items [SubnetId](#subnetid)

### DescribeTransformJobRequest
* DescribeTransformJobRequest `object`
  * TransformJobName **required**

### DescribeTransformJobResponse
* DescribeTransformJobResponse `object`
  * AutoMLJobArn
  * BatchStrategy
  * CreationTime **required**
  * DataProcessing [DataProcessing](#dataprocessing)
  * Environment
  * ExperimentConfig [ExperimentConfig](#experimentconfig)
  * FailureReason
  * LabelingJobArn
  * MaxConcurrentTransforms
  * MaxPayloadInMB
  * ModelClientConfig
    * InvocationsMaxRetries
    * InvocationsTimeoutInSeconds
  * ModelName **required**
  * TransformEndTime
  * TransformInput **required**
    * CompressionType
    * ContentType
    * DataSource **required**
      * S3DataSource **required**
        * S3DataType **required**
        * S3Uri **required**
    * SplitType
  * TransformJobArn **required**
  * TransformJobName **required**
  * TransformJobStatus **required**
  * TransformOutput
    * Accept
    * AssembleWith
    * KmsKeyId
    * S3OutputPath **required**
  * TransformResources **required**
    * InstanceCount **required**
    * InstanceType **required**
    * VolumeKmsKeyId
  * TransformStartTime

### DescribeTrialComponentRequest
* DescribeTrialComponentRequest `object`
  * TrialComponentName **required**

### DescribeTrialComponentResponse
* DescribeTrialComponentResponse `object`
  * CreatedBy
    * DomainId
    * UserProfileArn
    * UserProfileName
  * CreationTime
  * DisplayName
  * EndTime
  * InputArtifacts
  * LastModifiedBy
    * DomainId
    * UserProfileArn
    * UserProfileName
  * LastModifiedTime
  * MetadataProperties [MetadataProperties](#metadataproperties)
  * Metrics
    * items [TrialComponentMetricSummary](#trialcomponentmetricsummary)
  * OutputArtifacts
  * Parameters
  * Source
    * SourceArn **required**
    * SourceType
  * StartTime
  * Status
    * Message
    * PrimaryStatus
  * TrialComponentArn
  * TrialComponentName

### DescribeTrialRequest
* DescribeTrialRequest `object`
  * TrialName **required**

### DescribeTrialResponse
* DescribeTrialResponse `object`
  * CreatedBy
    * DomainId
    * UserProfileArn
    * UserProfileName
  * CreationTime
  * DisplayName
  * ExperimentName
  * LastModifiedBy
    * DomainId
    * UserProfileArn
    * UserProfileName
  * LastModifiedTime
  * MetadataProperties [MetadataProperties](#metadataproperties)
  * Source
    * SourceArn **required**
    * SourceType
  * TrialArn
  * TrialName

### DescribeUserProfileRequest
* DescribeUserProfileRequest `object`
  * DomainId **required**
  * UserProfileName **required**

### DescribeUserProfileResponse
* DescribeUserProfileResponse `object`
  * CreationTime
  * DomainId
  * FailureReason
  * HomeEfsFileSystemUid
  * LastModifiedTime
  * SingleSignOnUserIdentifier
  * SingleSignOnUserValue
  * Status
  * UserProfileArn
  * UserProfileName
  * UserSettings
    * ExecutionRole
    * JupyterServerAppSettings
      * DefaultResourceSpec
        * InstanceType
        * SageMakerImageArn
        * SageMakerImageVersionArn
    * KernelGatewayAppSettings
      * CustomImages
        * items [CustomImage](#customimage)
      * DefaultResourceSpec
        * InstanceType
        * SageMakerImageArn
        * SageMakerImageVersionArn
    * SecurityGroups
      * items [SecurityGroupId](#securitygroupid)
    * SharingSettings
      * NotebookOutputOption
      * S3KmsKeyId
      * S3OutputPath
    * TensorBoardAppSettings
      * DefaultResourceSpec
        * InstanceType
        * SageMakerImageArn
        * SageMakerImageVersionArn

### DescribeWorkforceRequest
* DescribeWorkforceRequest `object`
  * WorkforceName **required**

### DescribeWorkforceResponse
* DescribeWorkforceResponse `object`
  * Workforce **required**
    * CognitoConfig
      * ClientId **required**
      * UserPool **required**
    * CreateDate
    * LastUpdatedDate
    * OidcConfig
      * AuthorizationEndpoint
      * ClientId
      * Issuer
      * JwksUri
      * LogoutEndpoint
      * TokenEndpoint
      * UserInfoEndpoint
    * SourceIpConfig
      * Cidrs **required**
        * items [Cidr](#cidr)
    * SubDomain
    * WorkforceArn **required**
    * WorkforceName **required**

### DescribeWorkteamRequest
* DescribeWorkteamRequest `object`
  * WorkteamName **required**

### DescribeWorkteamResponse
* DescribeWorkteamResponse `object`
  * Workteam **required**
    * CreateDate
    * Description **required**
    * LastUpdatedDate
    * MemberDefinitions **required**
      * items [MemberDefinition](#memberdefinition)
    * NotificationConfiguration
      * NotificationTopicArn
    * ProductListingIds
      * items [String](#string)
    * SubDomain
    * WorkforceArn
    * WorkteamArn **required**
    * WorkteamName **required**

### Description
* Description `string`

### DesiredWeightAndCapacity
* DesiredWeightAndCapacity `object`: Specifies weight and capacity values for a production variant.
  * DesiredInstanceCount
  * DesiredWeight
  * VariantName **required**

### DesiredWeightAndCapacityList
* DesiredWeightAndCapacityList `array`
  * items [DesiredWeightAndCapacity](#desiredweightandcapacity)

### DestinationS3Uri
* DestinationS3Uri `string`

### DetailedAlgorithmStatus
* DetailedAlgorithmStatus `string` (values: NotStarted, InProgress, Completed, Failed)

### DetailedModelPackageStatus
* DetailedModelPackageStatus `string` (values: NotStarted, InProgress, Completed, Failed)

### Device
* Device `object`: Information of a particular device.
  * Description
  * DeviceName **required**
  * IotThingName

### DeviceArn
* DeviceArn `string`

### DeviceDescription
* DeviceDescription `string`

### DeviceFleetArn
* DeviceFleetArn `string`

### DeviceFleetDescription
* DeviceFleetDescription `string`

### DeviceFleetSummaries
* DeviceFleetSummaries `array`
  * items [DeviceFleetSummary](#devicefleetsummary)

### DeviceFleetSummary
* DeviceFleetSummary `object`: Summary of the device fleet.
  * CreationTime
  * DeviceFleetArn **required**
  * DeviceFleetName **required**
  * LastModifiedTime

### DeviceName
* DeviceName `string`

### DeviceNames
* DeviceNames `array`
  * items [DeviceName](#devicename)

### DeviceStats
* DeviceStats `object`: Status of devices.
  * ConnectedDeviceCount **required**
  * RegisteredDeviceCount **required**

### DeviceSummaries
* DeviceSummaries `array`
  * items [DeviceSummary](#devicesummary)

### DeviceSummary
* DeviceSummary `object`: Summary of the device.
  * Description
  * DeviceArn **required**
  * DeviceFleetName
  * DeviceName **required**
  * IotThingName
  * LatestHeartbeat
  * Models
    * items [EdgeModelSummary](#edgemodelsummary)
  * RegistrationTime

### Devices
* Devices `array`
  * items [Device](#device)

### DirectInternetAccess
* DirectInternetAccess `string` (values: Enabled, Disabled)

### DirectoryPath
* DirectoryPath `string`

### DisableProfiler
* DisableProfiler `boolean`

### DisableSagemakerServicecatalogPortfolioInput
* DisableSagemakerServicecatalogPortfolioInput `object`

### DisableSagemakerServicecatalogPortfolioOutput
* DisableSagemakerServicecatalogPortfolioOutput `object`

### DisassociateAdditionalCodeRepositories
* DisassociateAdditionalCodeRepositories `boolean`

### DisassociateDefaultCodeRepository
* DisassociateDefaultCodeRepository `boolean`

### DisassociateNotebookInstanceAcceleratorTypes
* DisassociateNotebookInstanceAcceleratorTypes `boolean`

### DisassociateNotebookInstanceLifecycleConfig
* DisassociateNotebookInstanceLifecycleConfig `boolean`

### DisassociateTrialComponentRequest
* DisassociateTrialComponentRequest `object`
  * TrialComponentName **required**
  * TrialName **required**

### DisassociateTrialComponentResponse
* DisassociateTrialComponentResponse `object`
  * TrialArn
  * TrialComponentArn

### Dollars
* Dollars `integer`

### DomainArn
* DomainArn `string`

### DomainDetails
* DomainDetails `object`: The domain's details.
  * CreationTime
  * DomainArn
  * DomainId
  * DomainName
  * LastModifiedTime
  * Status
  * Url

### DomainId
* DomainId `string`

### DomainList
* DomainList `array`
  * items [DomainDetails](#domaindetails)

### DomainName
* DomainName `string`

### DomainStatus
* DomainStatus `string` (values: Deleting, Failed, InService, Pending, Updating, Update_Failed, Delete_Failed)

### DoubleParameterValue
* DoubleParameterValue `number`

### EdgeModel
* EdgeModel `object`: The model on the edge device.
  * LatestInference
  * LatestSampleTime
  * ModelName **required**
  * ModelVersion **required**

### EdgeModelStat
* EdgeModelStat `object`: Status of edge devices with this model.
  * ActiveDeviceCount **required**
  * ConnectedDeviceCount **required**
  * ModelName **required**
  * ModelVersion **required**
  * OfflineDeviceCount **required**
  * SamplingDeviceCount **required**

### EdgeModelStats
* EdgeModelStats `array`
  * items [EdgeModelStat](#edgemodelstat)

### EdgeModelSummaries
* EdgeModelSummaries `array`
  * items [EdgeModelSummary](#edgemodelsummary)

### EdgeModelSummary
* EdgeModelSummary `object`: Summary of model on edge device.
  * ModelName **required**
  * ModelVersion **required**

### EdgeModels
* EdgeModels `array`
  * items [EdgeModel](#edgemodel)

### EdgeOutputConfig
* EdgeOutputConfig `object`: The output configuration.
  * KmsKeyId
  * S3OutputLocation **required**

### EdgePackagingJobArn
* EdgePackagingJobArn `string`

### EdgePackagingJobStatus
* EdgePackagingJobStatus `string` (values: STARTING, INPROGRESS, COMPLETED, FAILED, STOPPING, STOPPED)

### EdgePackagingJobSummaries
* EdgePackagingJobSummaries `array`
  * items [EdgePackagingJobSummary](#edgepackagingjobsummary)

### EdgePackagingJobSummary
* EdgePackagingJobSummary `object`: Summary of edge packaging job.
  * CompilationJobName
  * CreationTime
  * EdgePackagingJobArn **required**
  * EdgePackagingJobName **required**
  * EdgePackagingJobStatus **required**
  * LastModifiedTime
  * ModelName
  * ModelVersion

### EdgeVersion
* EdgeVersion `string`

### EfsUid
* EfsUid `string`

### EnableCapture
* EnableCapture `boolean`

### EnableSagemakerServicecatalogPortfolioInput
* EnableSagemakerServicecatalogPortfolioInput `object`

### EnableSagemakerServicecatalogPortfolioOutput
* EnableSagemakerServicecatalogPortfolioOutput `object`

### Endpoint
* Endpoint `object`: A hosted endpoint for real-time inference.
  * CreationTime **required**
  * DataCaptureConfig [DataCaptureConfigSummary](#datacaptureconfigsummary)
  * EndpointArn **required**
  * EndpointConfigName **required**
  * EndpointName **required**
  * EndpointStatus **required**
  * FailureReason
  * LastModifiedTime **required**
  * MonitoringSchedules
    * items [MonitoringSchedule](#monitoringschedule)
  * ProductionVariants
    * items [ProductionVariantSummary](#productionvariantsummary)
  * Tags
    * items [Tag](#tag)

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
  * CreationTime **required**
  * EndpointConfigArn **required**
  * EndpointConfigName **required**

### EndpointConfigSummaryList
* EndpointConfigSummaryList `array`
  * items [EndpointConfigSummary](#endpointconfigsummary)

### EndpointInput
* EndpointInput `object`: Input object for the endpoint
  * EndTimeOffset
  * EndpointName **required**
  * FeaturesAttribute
  * InferenceAttribute
  * LocalPath **required**
  * ProbabilityAttribute
  * ProbabilityThresholdAttribute
  * S3DataDistributionType
  * S3InputMode
  * StartTimeOffset

### EndpointName
* EndpointName `string`

### EndpointNameContains
* EndpointNameContains `string`

### EndpointSortKey
* EndpointSortKey `string` (values: Name, CreationTime, Status)

### EndpointStatus
* EndpointStatus `string` (values: OutOfService, Creating, Updating, SystemUpdating, RollingBack, InService, Deleting, Failed)

### EndpointSummary
* EndpointSummary `object`: Provides summary information for an endpoint.
  * CreationTime **required**
  * EndpointArn **required**
  * EndpointName **required**
  * EndpointStatus **required**
  * LastModifiedTime **required**

### EndpointSummaryList
* EndpointSummaryList `array`
  * items [EndpointSummary](#endpointsummary)

### EntityDescription
* EntityDescription `string`

### EntityName
* EntityName `string`

### EnvironmentKey
* EnvironmentKey `string`

### EnvironmentMap
* EnvironmentMap `object`

### EnvironmentValue
* EnvironmentValue `string`

### ExecutionStatus
* ExecutionStatus `string` (values: Pending, Completed, CompletedWithViolations, InProgress, Failed, Stopping, Stopped)

### ExitMessage
* ExitMessage `string`

### Experiment
* Experiment `object`: The properties of an experiment as returned by the <a>Search</a> API.
  * CreatedBy [UserContext](#usercontext)
  * CreationTime
  * Description
  * DisplayName
  * ExperimentArn
  * ExperimentName
  * LastModifiedBy [UserContext](#usercontext)
  * LastModifiedTime
  * Source [ExperimentSource](#experimentsource)
  * Tags
    * items [Tag](#tag)

### ExperimentArn
* ExperimentArn `string`

### ExperimentConfig
* ExperimentConfig `object`: <p>Associates a SageMaker job as a trial component with an experiment and trial. Specified when you call the following APIs:</p> <ul> <li> <p> <a>CreateProcessingJob</a> </p> </li> <li> <p> <a>CreateTrainingJob</a> </p> </li> <li> <p> <a>CreateTransformJob</a> </p> </li> </ul>
  * ExperimentName
  * TrialComponentDisplayName
  * TrialName

### ExperimentDescription
* ExperimentDescription `string`

### ExperimentEntityName
* ExperimentEntityName `string`

### ExperimentSource
* ExperimentSource `object`: The source of the experiment.
  * SourceArn **required**
  * SourceType

### ExperimentSourceArn
* ExperimentSourceArn `string`

### ExperimentSummaries
* ExperimentSummaries `array`
  * items [ExperimentSummary](#experimentsummary)

### ExperimentSummary
* ExperimentSummary `object`: A summary of the properties of an experiment. To get the complete set of properties, call the <a>DescribeExperiment</a> API and provide the <code>ExperimentName</code>.
  * CreationTime
  * DisplayName
  * ExperimentArn
  * ExperimentName
  * ExperimentSource [ExperimentSource](#experimentsource)
  * LastModifiedTime

### Explainability
* Explainability `object`: Contains explainability metrics for a model.
  * Report
    * ContentDigest
    * ContentType **required**
    * S3Uri **required**

### FailureReason
* FailureReason `string`

### FeatureDefinition
* FeatureDefinition `object`: A list of features. You must include <code>FeatureName</code> and <code>FeatureType</code>. Valid feature <code>FeatureType</code>s are <code>Integral</code>, <code>Fractional</code> and <code>String</code>. 
  * FeatureName
  * FeatureType

### FeatureDefinitions
* FeatureDefinitions `array`
  * items [FeatureDefinition](#featuredefinition)

### FeatureGroup
* FeatureGroup `object`: Amazon SageMaker Feature Store stores features in a collection called Feature Group. A Feature Group can be visualized as a table which has rows, with a unique identifier for each row where each column in the table is a feature. In principle, a Feature Group is composed of features and values per features.
  * CreationTime
  * Description
  * EventTimeFeatureName
  * FailureReason
  * FeatureDefinitions
    * items [FeatureDefinition](#featuredefinition)
  * FeatureGroupArn
  * FeatureGroupName
  * FeatureGroupStatus
  * OfflineStoreConfig [OfflineStoreConfig](#offlinestoreconfig)
  * OfflineStoreStatus [OfflineStoreStatus](#offlinestorestatus)
  * OnlineStoreConfig [OnlineStoreConfig](#onlinestoreconfig)
  * RecordIdentifierFeatureName
  * RoleArn
  * Tags
    * items [Tag](#tag)

### FeatureGroupArn
* FeatureGroupArn `string`

### FeatureGroupMaxResults
* FeatureGroupMaxResults `integer`

### FeatureGroupName
* FeatureGroupName `string`

### FeatureGroupNameContains
* FeatureGroupNameContains `string`

### FeatureGroupSortBy
* FeatureGroupSortBy `string` (values: Name, FeatureGroupStatus, OfflineStoreStatus, CreationTime)

### FeatureGroupSortOrder
* FeatureGroupSortOrder `string` (values: Ascending, Descending)

### FeatureGroupStatus
* FeatureGroupStatus `string` (values: Creating, Created, CreateFailed, Deleting, DeleteFailed)

### FeatureGroupSummaries
* FeatureGroupSummaries `array`
  * items [FeatureGroupSummary](#featuregroupsummary)

### FeatureGroupSummary
* FeatureGroupSummary `object`: The name, Arn, <code>CreationTime</code>, <code>FeatureGroup</code> values, <code>LastUpdatedTime</code> and <code>EnableOnlineStorage</code> status of a <code>FeatureGroup</code>.
  * CreationTime **required**
  * FeatureGroupArn **required**
  * FeatureGroupName **required**
  * FeatureGroupStatus
  * OfflineStoreStatus
    * BlockedReason
    * Status **required**

### FeatureName
* FeatureName `string`

### FeatureType
* FeatureType `string` (values: Integral, Fractional, String)

### FileSystemAccessMode
* FileSystemAccessMode `string` (values: rw, ro)

### FileSystemConfig
* FileSystemConfig `object`: The Amazon Elastic File System (EFS) storage configuration for a SageMaker image.
  * DefaultGid
  * DefaultUid
  * MountPath

### FileSystemDataSource
* FileSystemDataSource `object`: Specifies a file system data source for a channel.
  * DirectoryPath **required**
  * FileSystemAccessMode **required**
  * FileSystemId **required**
  * FileSystemType **required**

### FileSystemId
* FileSystemId `string`

### FileSystemType
* FileSystemType `string` (values: EFS, FSxLustre)

### Filter
* Filter `object`: <p>A conditional statement for a search expression that includes a resource property, a Boolean operator, and a value. Resources that match the statement are returned in the results from the <a>Search</a> API.</p> <p>If you specify a <code>Value</code>, but not an <code>Operator</code>, Amazon SageMaker uses the equals operator.</p> <p>In search, there are several property types:</p> <dl> <dt>Metrics</dt> <dd> <p>To define a metric filter, enter a value using the form <code>"Metrics.&lt;name&gt;"</code>, where <code>&lt;name&gt;</code> is a metric name. For example, the following filter searches for training jobs with an <code>"accuracy"</code> metric greater than <code>"0.9"</code>:</p> <p> <code>{</code> </p> <p> <code>"Name": "Metrics.accuracy",</code> </p> <p> <code>"Operator": "GreaterThan",</code> </p> <p> <code>"Value": "0.9"</code> </p> <p> <code>}</code> </p> </dd> <dt>HyperParameters</dt> <dd> <p>To define a hyperparameter filter, enter a value with the form <code>"HyperParameters.&lt;name&gt;"</code>. Decimal hyperparameter values are treated as a decimal in a comparison if the specified <code>Value</code> is also a decimal value. If the specified <code>Value</code> is an integer, the decimal hyperparameter values are treated as integers. For example, the following filter is satisfied by training jobs with a <code>"learning_rate"</code> hyperparameter that is less than <code>"0.5"</code>:</p> <p> <code> {</code> </p> <p> <code> "Name": "HyperParameters.learning_rate",</code> </p> <p> <code> "Operator": "LessThan",</code> </p> <p> <code> "Value": "0.5"</code> </p> <p> <code> }</code> </p> </dd> <dt>Tags</dt> <dd> <p>To define a tag filter, enter a value with the form <code>Tags.&lt;key&gt;</code>.</p> </dd> </dl>
  * Name **required**
  * Operator
  * Value

### FilterList
* FilterList `array`
  * items [Filter](#filter)

### FilterValue
* FilterValue `string`

### FinalAutoMLJobObjectiveMetric
* FinalAutoMLJobObjectiveMetric `object`: The best candidate result from an AutoML training job.
  * MetricName **required**
  * Type
  * Value **required**

### FinalHyperParameterTuningJobObjectiveMetric
* FinalHyperParameterTuningJobObjectiveMetric `object`: Shows the final value for the objective metric for a training job that was launched by a hyperparameter tuning job. You define the objective metric in the <code>HyperParameterTuningJobObjective</code> parameter of <a>HyperParameterTuningJobConfig</a>.
  * MetricName **required**
  * Type
  * Value **required**

### FinalMetricDataList
* FinalMetricDataList `array`
  * items [MetricData](#metricdata)

### Float
* Float `number`

### FlowDefinitionArn
* FlowDefinitionArn `string`

### FlowDefinitionName
* FlowDefinitionName `string`

### FlowDefinitionOutputConfig
* FlowDefinitionOutputConfig `object`: Contains information about where human output will be stored.
  * KmsKeyId
  * S3OutputPath **required**

### FlowDefinitionStatus
* FlowDefinitionStatus `string` (values: Initializing, Active, Failed, Deleting)

### FlowDefinitionSummaries
* FlowDefinitionSummaries `array`
  * items [FlowDefinitionSummary](#flowdefinitionsummary)

### FlowDefinitionSummary
* FlowDefinitionSummary `object`: Contains summary information about the flow definition.
  * CreationTime **required**
  * FailureReason
  * FlowDefinitionArn **required**
  * FlowDefinitionName **required**
  * FlowDefinitionStatus **required**

### FlowDefinitionTaskAvailabilityLifetimeInSeconds
* FlowDefinitionTaskAvailabilityLifetimeInSeconds `integer`

### FlowDefinitionTaskCount
* FlowDefinitionTaskCount `integer`

### FlowDefinitionTaskDescription
* FlowDefinitionTaskDescription `string`

### FlowDefinitionTaskKeyword
* FlowDefinitionTaskKeyword `string`

### FlowDefinitionTaskKeywords
* FlowDefinitionTaskKeywords `array`
  * items [FlowDefinitionTaskKeyword](#flowdefinitiontaskkeyword)

### FlowDefinitionTaskTimeLimitInSeconds
* FlowDefinitionTaskTimeLimitInSeconds `integer`

### FlowDefinitionTaskTitle
* FlowDefinitionTaskTitle `string`

### Framework
* Framework `string` (values: TENSORFLOW, KERAS, MXNET, ONNX, PYTORCH, XGBOOST, TFLITE, DARKNET, SKLEARN)

### GenerateCandidateDefinitionsOnly
* GenerateCandidateDefinitionsOnly `boolean`

### GetDeviceFleetReportRequest
* GetDeviceFleetReportRequest `object`
  * DeviceFleetName **required**

### GetDeviceFleetReportResponse
* GetDeviceFleetReportResponse `object`
  * AgentVersions
    * items [AgentVersion](#agentversion)
  * Description
  * DeviceFleetArn **required**
  * DeviceFleetName **required**
  * DeviceStats
    * ConnectedDeviceCount **required**
    * RegisteredDeviceCount **required**
  * ModelStats
    * items [EdgeModelStat](#edgemodelstat)
  * OutputConfig
    * KmsKeyId
    * S3OutputLocation **required**
  * ReportGenerated

### GetModelPackageGroupPolicyInput
* GetModelPackageGroupPolicyInput `object`
  * ModelPackageGroupName **required**

### GetModelPackageGroupPolicyOutput
* GetModelPackageGroupPolicyOutput `object`
  * ResourcePolicy **required**

### GetSagemakerServicecatalogPortfolioStatusInput
* GetSagemakerServicecatalogPortfolioStatusInput `object`

### GetSagemakerServicecatalogPortfolioStatusOutput
* GetSagemakerServicecatalogPortfolioStatusOutput `object`
  * Status

### GetSearchSuggestionsRequest
* GetSearchSuggestionsRequest `object`
  * Resource **required**
  * SuggestionQuery
    * PropertyNameQuery
      * PropertyNameHint **required**

### GetSearchSuggestionsResponse
* GetSearchSuggestionsResponse `object`
  * PropertyNameSuggestions
    * items [PropertyNameSuggestion](#propertynamesuggestion)

### GitConfig
* GitConfig `object`: Specifies configuration details for a Git repository in your AWS account.
  * Branch
  * RepositoryUrl **required**
  * SecretArn

### GitConfigForUpdate
* GitConfigForUpdate `object`: Specifies configuration details for a Git repository when the repository is updated.
  * SecretArn

### GitConfigUrl
* GitConfigUrl `string`

### Group
* Group `string`

### Groups
* Groups `array`
  * items [Group](#group)

### HookParameters
* HookParameters `object`

### HumanLoopActivationConditions
* HumanLoopActivationConditions `string`

### HumanLoopActivationConditionsConfig
* HumanLoopActivationConditionsConfig `object`: Defines under what conditions SageMaker creates a human loop. Used within . See for the required format of activation conditions.
  * HumanLoopActivationConditions **required**

### HumanLoopActivationConfig
* HumanLoopActivationConfig `object`: Provides information about how and under what conditions SageMaker creates a human loop. If <code>HumanLoopActivationConfig</code> is not given, then all requests go to humans.
  * HumanLoopActivationConditionsConfig **required**
    * HumanLoopActivationConditions **required**

### HumanLoopConfig
* HumanLoopConfig `object`: Describes the work to be performed by human workers.
  * HumanTaskUiArn **required**
  * PublicWorkforceTaskPrice [PublicWorkforceTaskPrice](#publicworkforcetaskprice)
  * TaskAvailabilityLifetimeInSeconds
  * TaskCount **required**
  * TaskDescription **required**
  * TaskKeywords
    * items [FlowDefinitionTaskKeyword](#flowdefinitiontaskkeyword)
  * TaskTimeLimitInSeconds
  * TaskTitle **required**
  * WorkteamArn **required**

### HumanLoopRequestSource
* HumanLoopRequestSource `object`: Container for configuring the source of human task requests.
  * AwsManagedHumanLoopRequestSource **required**

### HumanTaskConfig
* HumanTaskConfig `object`: Information required for human workers to complete a labeling task.
  * AnnotationConsolidationConfig **required**
    * AnnotationConsolidationLambdaArn **required**
  * MaxConcurrentTaskCount
  * NumberOfHumanWorkersPerDataObject **required**
  * PreHumanTaskLambdaArn **required**
  * PublicWorkforceTaskPrice
    * AmountInUsd
      * Cents
      * Dollars
      * TenthFractionsOfACent
  * TaskAvailabilityLifetimeInSeconds
  * TaskDescription **required**
  * TaskKeywords
    * items [TaskKeyword](#taskkeyword)
  * TaskTimeLimitInSeconds **required**
  * TaskTitle **required**
  * UiConfig **required**
    * HumanTaskUiArn
    * UiTemplateS3Uri
  * WorkteamArn **required**

### HumanTaskUiArn
* HumanTaskUiArn `string`

### HumanTaskUiName
* HumanTaskUiName `string`

### HumanTaskUiStatus
* HumanTaskUiStatus `string` (values: Active, Deleting)

### HumanTaskUiSummaries
* HumanTaskUiSummaries `array`
  * items [HumanTaskUiSummary](#humantaskuisummary)

### HumanTaskUiSummary
* HumanTaskUiSummary `object`: Container for human task user interface information.
  * CreationTime **required**
  * HumanTaskUiArn **required**
  * HumanTaskUiName **required**

### HyperParameterAlgorithmSpecification
* HyperParameterAlgorithmSpecification `object`: Specifies which training algorithm to use for training jobs that a hyperparameter tuning job launches and the metrics to monitor.
  * AlgorithmName
  * MetricDefinitions
    * items [MetricDefinition](#metricdefinition)
  * TrainingImage
  * TrainingInputMode **required**

### HyperParameterKey
* HyperParameterKey `string`

### HyperParameterScalingType
* HyperParameterScalingType `string` (values: Auto, Linear, Logarithmic, ReverseLogarithmic)

### HyperParameterSpecification
* HyperParameterSpecification `object`: Defines a hyperparameter to be used by an algorithm.
  * DefaultValue
  * Description
  * IsRequired
  * IsTunable
  * Name **required**
  * Range
    * CategoricalParameterRangeSpecification
      * Values **required**
        * items [ParameterValue](#parametervalue)
    * ContinuousParameterRangeSpecification
      * MaxValue **required**
      * MinValue **required**
    * IntegerParameterRangeSpecification
      * MaxValue **required**
      * MinValue **required**
  * Type **required**

### HyperParameterSpecifications
* HyperParameterSpecifications `array`
  * items [HyperParameterSpecification](#hyperparameterspecification)

### HyperParameterTrainingJobDefinition
* HyperParameterTrainingJobDefinition `object`: Defines the training jobs launched by a hyperparameter tuning job.
  * AlgorithmSpecification **required**
    * AlgorithmName
    * MetricDefinitions
      * items [MetricDefinition](#metricdefinition)
    * TrainingImage
    * TrainingInputMode **required**
  * CheckpointConfig [CheckpointConfig](#checkpointconfig)
  * DefinitionName
  * EnableInterContainerTrafficEncryption
  * EnableManagedSpotTraining
  * EnableNetworkIsolation
  * HyperParameterRanges [ParameterRanges](#parameterranges)
  * InputDataConfig
    * items [Channel](#channel)
  * OutputDataConfig **required**
    * KmsKeyId
    * S3OutputPath **required**
  * ResourceConfig **required**
    * InstanceCount **required**
    * InstanceType **required**
    * VolumeKmsKeyId
    * VolumeSizeInGB **required**
  * RoleArn **required**
  * StaticHyperParameters
  * StoppingCondition **required**
    * MaxRuntimeInSeconds
    * MaxWaitTimeInSeconds
  * TuningObjective [HyperParameterTuningJobObjective](#hyperparametertuningjobobjective)
  * VpcConfig
    * SecurityGroupIds **required**
      * items [SecurityGroupId](#securitygroupid)
    * Subnets **required**
      * items [SubnetId](#subnetid)

### HyperParameterTrainingJobDefinitionName
* HyperParameterTrainingJobDefinitionName `string`

### HyperParameterTrainingJobDefinitions
* HyperParameterTrainingJobDefinitions `array`
  * items [HyperParameterTrainingJobDefinition](#hyperparametertrainingjobdefinition)

### HyperParameterTrainingJobSummaries
* HyperParameterTrainingJobSummaries `array`
  * items [HyperParameterTrainingJobSummary](#hyperparametertrainingjobsummary)

### HyperParameterTrainingJobSummary
* HyperParameterTrainingJobSummary `object`: Specifies summary information about a training job.
  * CreationTime **required**
  * FailureReason
  * FinalHyperParameterTuningJobObjectiveMetric
    * MetricName **required**
    * Type
    * Value **required**
  * ObjectiveStatus
  * TrainingEndTime
  * TrainingJobArn **required**
  * TrainingJobDefinitionName
  * TrainingJobName **required**
  * TrainingJobStatus **required**
  * TrainingStartTime
  * TunedHyperParameters **required**
  * TuningJobName

### HyperParameterTuningJobArn
* HyperParameterTuningJobArn `string`

### HyperParameterTuningJobConfig
* HyperParameterTuningJobConfig `object`: Configures a hyperparameter tuning job.
  * HyperParameterTuningJobObjective
    * MetricName **required**
    * Type **required**
  * ParameterRanges
    * CategoricalParameterRanges
      * items [CategoricalParameterRange](#categoricalparameterrange)
    * ContinuousParameterRanges
      * items [ContinuousParameterRange](#continuousparameterrange)
    * IntegerParameterRanges
      * items [IntegerParameterRange](#integerparameterrange)
  * ResourceLimits **required**
    * MaxNumberOfTrainingJobs **required**
    * MaxParallelTrainingJobs **required**
  * Strategy **required**
  * TrainingJobEarlyStoppingType
  * TuningJobCompletionCriteria
    * TargetObjectiveMetricValue **required**

### HyperParameterTuningJobName
* HyperParameterTuningJobName `string`

### HyperParameterTuningJobObjective
* HyperParameterTuningJobObjective `object`: Defines the objective metric for a hyperparameter tuning job. Hyperparameter tuning uses the value of this metric to evaluate the training jobs it launches, and returns the training job that results in either the highest or lowest value for this metric, depending on the value you specify for the <code>Type</code> parameter.
  * MetricName **required**
  * Type **required**

### HyperParameterTuningJobObjectiveType
* HyperParameterTuningJobObjectiveType `string` (values: Maximize, Minimize)

### HyperParameterTuningJobObjectives
* HyperParameterTuningJobObjectives `array`
  * items [HyperParameterTuningJobObjective](#hyperparametertuningjobobjective)

### HyperParameterTuningJobSortByOptions
* HyperParameterTuningJobSortByOptions `string` (values: Name, Status, CreationTime)

### HyperParameterTuningJobStatus
* HyperParameterTuningJobStatus `string` (values: Completed, InProgress, Failed, Stopped, Stopping)

### HyperParameterTuningJobStrategyType
* HyperParameterTuningJobStrategyType `string` (values: Bayesian, Random): The strategy hyperparameter tuning uses to find the best combination of hyperparameters for your model. Currently, the only supported value is <code>Bayesian</code>.

### HyperParameterTuningJobSummaries
* HyperParameterTuningJobSummaries `array`
  * items [HyperParameterTuningJobSummary](#hyperparametertuningjobsummary)

### HyperParameterTuningJobSummary
* HyperParameterTuningJobSummary `object`: Provides summary information about a hyperparameter tuning job.
  * CreationTime **required**
  * HyperParameterTuningEndTime
  * HyperParameterTuningJobArn **required**
  * HyperParameterTuningJobName **required**
  * HyperParameterTuningJobStatus **required**
  * LastModifiedTime
  * ObjectiveStatusCounters **required**
    * Failed
    * Pending
    * Succeeded
  * ResourceLimits
    * MaxNumberOfTrainingJobs **required**
    * MaxParallelTrainingJobs **required**
  * Strategy **required**
  * TrainingJobStatusCounters **required**
    * Completed
    * InProgress
    * NonRetryableError
    * RetryableError
    * Stopped

### HyperParameterTuningJobWarmStartConfig
* HyperParameterTuningJobWarmStartConfig `object`: <p>Specifies the configuration for a hyperparameter tuning job that uses one or more previous hyperparameter tuning jobs as a starting point. The results of previous tuning jobs are used to inform which combinations of hyperparameters to search over in the new tuning job.</p> <p>All training jobs launched by the new hyperparameter tuning job are evaluated by using the objective metric, and the training job that performs the best is compared to the best training jobs from the parent tuning jobs. From these, the training job that performs the best as measured by the objective metric is returned as the overall best training job.</p> <note> <p>All training jobs launched by parent hyperparameter tuning jobs and the new hyperparameter tuning jobs count against the limit of training jobs for the tuning job.</p> </note>
  * ParentHyperParameterTuningJobs **required**
    * items [ParentHyperParameterTuningJob](#parenthyperparametertuningjob)
  * WarmStartType **required**

### HyperParameterTuningJobWarmStartType
* HyperParameterTuningJobWarmStartType `string` (values: IdenticalDataAndAlgorithm, TransferLearning)

### HyperParameterValue
* HyperParameterValue `string`

### HyperParameters
* HyperParameters `object`

### IdempotencyToken
* IdempotencyToken `string`

### Image
* Image `object`: A SageMaker image. A SageMaker image represents a set of container images that are derived from a common base container image. Each of these container images is represented by a SageMaker <code>ImageVersion</code>.
  * CreationTime **required**
  * Description
  * DisplayName
  * FailureReason
  * ImageArn **required**
  * ImageName **required**
  * ImageStatus **required**
  * LastModifiedTime **required**

### ImageArn
* ImageArn `string`

### ImageBaseImage
* ImageBaseImage `string`

### ImageConfig
* ImageConfig `object`: Specifies whether the model container is in Amazon ECR or a private Docker registry accessible from your Amazon Virtual Private Cloud (VPC).
  * RepositoryAccessMode **required**

### ImageContainerImage
* ImageContainerImage `string`

### ImageDeleteProperty
* ImageDeleteProperty `string`

### ImageDeletePropertyList
* ImageDeletePropertyList `array`
  * items [ImageDeleteProperty](#imagedeleteproperty)

### ImageDescription
* ImageDescription `string`

### ImageDigest
* ImageDigest `string`

### ImageDisplayName
* ImageDisplayName `string`

### ImageName
* ImageName `string`

### ImageNameContains
* ImageNameContains `string`

### ImageSortBy
* ImageSortBy `string` (values: CREATION_TIME, LAST_MODIFIED_TIME, IMAGE_NAME)

### ImageSortOrder
* ImageSortOrder `string` (values: ASCENDING, DESCENDING)

### ImageStatus
* ImageStatus `string` (values: CREATING, CREATED, CREATE_FAILED, UPDATING, UPDATE_FAILED, DELETING, DELETE_FAILED)

### ImageUri
* ImageUri `string`

### ImageVersion
* ImageVersion `object`: A version of a SageMaker <code>Image</code>. A version represents an existing container image.
  * CreationTime **required**
  * FailureReason
  * ImageArn **required**
  * ImageVersionArn **required**
  * ImageVersionStatus **required**
  * LastModifiedTime **required**
  * Version **required**

### ImageVersionArn
* ImageVersionArn `string`

### ImageVersionNumber
* ImageVersionNumber `integer`

### ImageVersionSortBy
* ImageVersionSortBy `string` (values: CREATION_TIME, LAST_MODIFIED_TIME, VERSION)

### ImageVersionSortOrder
* ImageVersionSortOrder `string` (values: ASCENDING, DESCENDING)

### ImageVersionStatus
* ImageVersionStatus `string` (values: CREATING, CREATED, CREATE_FAILED, DELETING, DELETE_FAILED)

### ImageVersions
* ImageVersions `array`
  * items [ImageVersion](#imageversion)

### Images
* Images `array`
  * items [Image](#image)

### InferenceSpecification
* InferenceSpecification `object`: Defines how to perform inference generation after a training job is run.
  * Containers **required**
    * items [ModelPackageContainerDefinition](#modelpackagecontainerdefinition)
  * SupportedContentTypes **required**
    * items [ContentType](#contenttype)
  * SupportedRealtimeInferenceInstanceTypes
    * items [ProductionVariantInstanceType](#productionvariantinstancetype)
  * SupportedResponseMIMETypes **required**
    * items [ResponseMIMEType](#responsemimetype)
  * SupportedTransformInstanceTypes
    * items [TransformInstanceType](#transforminstancetype)

### InputConfig
* InputConfig `object`: Contains information about the location of input model artifacts, the name and shape of the expected data inputs, and the framework in which the model was trained.
  * DataInputConfig **required**
  * Framework **required**
  * S3Uri **required**

### InputDataConfig
* InputDataConfig `array`
  * items [Channel](#channel)

### InputMode
* InputMode `string` (values: Pipe, File)

### InputModes
* InputModes `array`
  * items [TrainingInputMode](#traininginputmode)

### InstanceType
* InstanceType `string` (values: ml.t2.medium, ml.t2.large, ml.t2.xlarge, ml.t2.2xlarge, ml.t3.medium, ml.t3.large, ml.t3.xlarge, ml.t3.2xlarge, ml.m4.xlarge, ml.m4.2xlarge, ml.m4.4xlarge, ml.m4.10xlarge, ml.m4.16xlarge, ml.m5.xlarge, ml.m5.2xlarge, ml.m5.4xlarge, ml.m5.12xlarge, ml.m5.24xlarge, ml.c4.xlarge, ml.c4.2xlarge, ml.c4.4xlarge, ml.c4.8xlarge, ml.c5.xlarge, ml.c5.2xlarge, ml.c5.4xlarge, ml.c5.9xlarge, ml.c5.18xlarge, ml.c5d.xlarge, ml.c5d.2xlarge, ml.c5d.4xlarge, ml.c5d.9xlarge, ml.c5d.18xlarge, ml.p2.xlarge, ml.p2.8xlarge, ml.p2.16xlarge, ml.p3.2xlarge, ml.p3.8xlarge, ml.p3.16xlarge)

### Integer
* Integer `integer`

### IntegerParameterRange
* IntegerParameterRange `object`: For a hyperparameter of the integer type, specifies the range that a hyperparameter tuning job searches.
  * MaxValue **required**
  * MinValue **required**
  * Name **required**
  * ScalingType

### IntegerParameterRangeSpecification
* IntegerParameterRangeSpecification `object`: Defines the possible values for an integer hyperparameter.
  * MaxValue **required**
  * MinValue **required**

### IntegerParameterRanges
* IntegerParameterRanges `array`
  * items [IntegerParameterRange](#integerparameterrange)

### InvocationsMaxRetries
* InvocationsMaxRetries `integer`

### InvocationsTimeoutInSeconds
* InvocationsTimeoutInSeconds `integer`

### IotRoleAlias
* IotRoleAlias `string`

### JobReferenceCode
* JobReferenceCode `string`

### JobReferenceCodeContains
* JobReferenceCodeContains `string`

### JoinSource
* JoinSource `string` (values: Input, None)

### JsonContentType
* JsonContentType `string`

### JsonContentTypes
* JsonContentTypes `array`
  * items [JsonContentType](#jsoncontenttype)

### JsonPath
* JsonPath `string`

### JupyterServerAppSettings
* JupyterServerAppSettings `object`: The JupyterServer app settings.
  * DefaultResourceSpec
    * InstanceType
    * SageMakerImageArn
    * SageMakerImageVersionArn

### KernelDisplayName
* KernelDisplayName `string`

### KernelGatewayAppSettings
* KernelGatewayAppSettings `object`: The KernelGateway app settings.
  * CustomImages
    * items [CustomImage](#customimage)
  * DefaultResourceSpec
    * InstanceType
    * SageMakerImageArn
    * SageMakerImageVersionArn

### KernelGatewayImageConfig
* KernelGatewayImageConfig `object`: The configuration for the file system and kernels in a SageMaker image running as a KernelGateway app.
  * FileSystemConfig
    * DefaultGid
    * DefaultUid
    * MountPath
  * KernelSpecs **required**
    * items [KernelSpec](#kernelspec)

### KernelName
* KernelName `string`

### KernelSpec
* KernelSpec `object`: The specification of a Jupyter kernel.
  * DisplayName
  * Name **required**

### KernelSpecs
* KernelSpecs `array`
  * items [KernelSpec](#kernelspec)

### KmsKeyId
* KmsKeyId `string`

### LabelAttributeName
* LabelAttributeName `string`

### LabelCounter
* LabelCounter `integer`

### LabelCounters
* LabelCounters `object`: Provides a breakdown of the number of objects labeled.
  * FailedNonRetryableError
  * HumanLabeled
  * MachineLabeled
  * TotalLabeled
  * Unlabeled

### LabelCountersForWorkteam
* LabelCountersForWorkteam `object`: Provides counts for human-labeled tasks in the labeling job.
  * HumanLabeled
  * PendingHuman
  * Total

### LabelingJobAlgorithmSpecificationArn
* LabelingJobAlgorithmSpecificationArn `string`

### LabelingJobAlgorithmsConfig
* LabelingJobAlgorithmsConfig `object`: Provides configuration information for auto-labeling of your data objects. A <code>LabelingJobAlgorithmsConfig</code> object must be supplied in order to use auto-labeling.
  * InitialActiveLearningModelArn
  * LabelingJobAlgorithmSpecificationArn **required**
  * LabelingJobResourceConfig
    * VolumeKmsKeyId

### LabelingJobArn
* LabelingJobArn `string`

### LabelingJobDataAttributes
* LabelingJobDataAttributes `object`: Attributes of the data specified by the customer. Use these to describe the data to be labeled.
  * ContentClassifiers
    * items [ContentClassifier](#contentclassifier)

### LabelingJobDataSource
* LabelingJobDataSource `object`: <p>Provides information about the location of input data.</p> <p>You must specify at least one of the following: <code>S3DataSource</code> or <code>SnsDataSource</code>.</p> <p>Use <code>SnsDataSource</code> to specify an SNS input topic for a streaming labeling job. If you do not specify and SNS input topic ARN, Ground Truth will create a one-time labeling job.</p> <p>Use <code>S3DataSource</code> to specify an input manifest file for both streaming and one-time labeling jobs. Adding an <code>S3DataSource</code> is optional if you use <code>SnsDataSource</code> to create a streaming labeling job.</p>
  * S3DataSource
    * ManifestS3Uri **required**
  * SnsDataSource
    * SnsTopicArn **required**

### LabelingJobForWorkteamSummary
* LabelingJobForWorkteamSummary `object`: Provides summary information for a work team.
  * CreationTime **required**
  * JobReferenceCode **required**
  * LabelCounters
    * HumanLabeled
    * PendingHuman
    * Total
  * LabelingJobName
  * NumberOfHumanWorkersPerDataObject
  * WorkRequesterAccountId **required**

### LabelingJobForWorkteamSummaryList
* LabelingJobForWorkteamSummaryList `array`
  * items [LabelingJobForWorkteamSummary](#labelingjobforworkteamsummary)

### LabelingJobInputConfig
* LabelingJobInputConfig `object`: Input configuration information for a labeling job.
  * DataAttributes
    * ContentClassifiers
      * items [ContentClassifier](#contentclassifier)
  * DataSource **required**
    * S3DataSource
      * ManifestS3Uri **required**
    * SnsDataSource
      * SnsTopicArn **required**

### LabelingJobName
* LabelingJobName `string`

### LabelingJobOutput
* LabelingJobOutput `object`: Specifies the location of the output produced by the labeling job. 
  * FinalActiveLearningModelArn
  * OutputDatasetS3Uri **required**

### LabelingJobOutputConfig
* LabelingJobOutputConfig `object`: Output configuration information for a labeling job.
  * KmsKeyId
  * S3OutputPath **required**
  * SnsTopicArn

### LabelingJobResourceConfig
* LabelingJobResourceConfig `object`: Provides configuration information for labeling jobs.
  * VolumeKmsKeyId

### LabelingJobS3DataSource
* LabelingJobS3DataSource `object`: The Amazon S3 location of the input data objects.
  * ManifestS3Uri **required**

### LabelingJobSnsDataSource
* LabelingJobSnsDataSource `object`: An Amazon SNS data source used for streaming labeling jobs.
  * SnsTopicArn **required**

### LabelingJobStatus
* LabelingJobStatus `string` (values: Initializing, InProgress, Completed, Failed, Stopping, Stopped)

### LabelingJobStoppingConditions
* LabelingJobStoppingConditions `object`: <p>A set of conditions for stopping a labeling job. If any of the conditions are met, the job is automatically stopped. You can use these conditions to control the cost of data labeling.</p> <note> <p>Labeling jobs fail after 30 days with an appropriate client error message.</p> </note>
  * MaxHumanLabeledObjectCount
  * MaxPercentageOfInputDatasetLabeled

### LabelingJobSummary
* LabelingJobSummary `object`: Provides summary information about a labeling job.
  * AnnotationConsolidationLambdaArn
  * CreationTime **required**
  * FailureReason
  * InputConfig
    * DataAttributes
      * ContentClassifiers
        * items [ContentClassifier](#contentclassifier)
    * DataSource **required**
      * S3DataSource
        * ManifestS3Uri **required**
      * SnsDataSource
        * SnsTopicArn **required**
  * LabelCounters **required**
    * FailedNonRetryableError
    * HumanLabeled
    * MachineLabeled
    * TotalLabeled
    * Unlabeled
  * LabelingJobArn **required**
  * LabelingJobName **required**
  * LabelingJobOutput
    * FinalActiveLearningModelArn
    * OutputDatasetS3Uri **required**
  * LabelingJobStatus **required**
  * LastModifiedTime **required**
  * PreHumanTaskLambdaArn **required**
  * WorkteamArn **required**

### LabelingJobSummaryList
* LabelingJobSummaryList `array`
  * items [LabelingJobSummary](#labelingjobsummary)

### LambdaFunctionArn
* LambdaFunctionArn `string`

### LastModifiedTime
* LastModifiedTime `string`

### LineageEntityParameters
* LineageEntityParameters `object`

### ListActionsRequest
* ListActionsRequest `object`
  * ActionType
  * CreatedAfter
  * CreatedBefore
  * MaxResults
  * NextToken
  * SortBy
  * SortOrder
  * SourceUri

### ListActionsResponse
* ListActionsResponse `object`
  * ActionSummaries
    * items [ActionSummary](#actionsummary)
  * NextToken

### ListAlgorithmsInput
* ListAlgorithmsInput `object`
  * CreationTimeAfter
  * CreationTimeBefore
  * MaxResults
  * NameContains
  * NextToken
  * SortBy
  * SortOrder

### ListAlgorithmsOutput
* ListAlgorithmsOutput `object`
  * AlgorithmSummaryList **required**
    * items [AlgorithmSummary](#algorithmsummary)
  * NextToken

### ListAppImageConfigsRequest
* ListAppImageConfigsRequest `object`
  * CreationTimeAfter
  * CreationTimeBefore
  * MaxResults
  * ModifiedTimeAfter
  * ModifiedTimeBefore
  * NameContains
  * NextToken
  * SortBy
  * SortOrder

### ListAppImageConfigsResponse
* ListAppImageConfigsResponse `object`
  * AppImageConfigs
    * items [AppImageConfigDetails](#appimageconfigdetails)
  * NextToken

### ListAppsRequest
* ListAppsRequest `object`
  * DomainIdEquals
  * MaxResults
  * NextToken
  * SortBy
  * SortOrder
  * UserProfileNameEquals

### ListAppsResponse
* ListAppsResponse `object`
  * Apps
    * items [AppDetails](#appdetails)
  * NextToken

### ListArtifactsRequest
* ListArtifactsRequest `object`
  * ArtifactType
  * CreatedAfter
  * CreatedBefore
  * MaxResults
  * NextToken
  * SortBy
  * SortOrder
  * SourceUri

### ListArtifactsResponse
* ListArtifactsResponse `object`
  * ArtifactSummaries
    * items [ArtifactSummary](#artifactsummary)
  * NextToken

### ListAssociationsRequest
* ListAssociationsRequest `object`
  * AssociationType
  * CreatedAfter
  * CreatedBefore
  * DestinationArn
  * DestinationType
  * MaxResults
  * NextToken
  * SortBy
  * SortOrder
  * SourceArn
  * SourceType

### ListAssociationsResponse
* ListAssociationsResponse `object`
  * AssociationSummaries
    * items [AssociationSummary](#associationsummary)
  * NextToken

### ListAutoMLJobsRequest
* ListAutoMLJobsRequest `object`
  * CreationTimeAfter
  * CreationTimeBefore
  * LastModifiedTimeAfter
  * LastModifiedTimeBefore
  * MaxResults
  * NameContains
  * NextToken
  * SortBy
  * SortOrder
  * StatusEquals

### ListAutoMLJobsResponse
* ListAutoMLJobsResponse `object`
  * AutoMLJobSummaries **required**
    * items [AutoMLJobSummary](#automljobsummary)
  * NextToken

### ListCandidatesForAutoMLJobRequest
* ListCandidatesForAutoMLJobRequest `object`
  * AutoMLJobName **required**
  * CandidateNameEquals
  * MaxResults
  * NextToken
  * SortBy
  * SortOrder
  * StatusEquals

### ListCandidatesForAutoMLJobResponse
* ListCandidatesForAutoMLJobResponse `object`
  * Candidates **required**
    * items [AutoMLCandidate](#automlcandidate)
  * NextToken

### ListCodeRepositoriesInput
* ListCodeRepositoriesInput `object`
  * CreationTimeAfter
  * CreationTimeBefore
  * LastModifiedTimeAfter
  * LastModifiedTimeBefore
  * MaxResults
  * NameContains
  * NextToken
  * SortBy
  * SortOrder

### ListCodeRepositoriesOutput
* ListCodeRepositoriesOutput `object`
  * CodeRepositorySummaryList **required**
    * items [CodeRepositorySummary](#coderepositorysummary)
  * NextToken

### ListCompilationJobsRequest
* ListCompilationJobsRequest `object`
  * CreationTimeAfter
  * CreationTimeBefore
  * LastModifiedTimeAfter
  * LastModifiedTimeBefore
  * MaxResults
  * NameContains
  * NextToken
  * SortBy
  * SortOrder
  * StatusEquals

### ListCompilationJobsResponse
* ListCompilationJobsResponse `object`
  * CompilationJobSummaries **required**
    * items [CompilationJobSummary](#compilationjobsummary)
  * NextToken

### ListCompilationJobsSortBy
* ListCompilationJobsSortBy `string` (values: Name, CreationTime, Status)

### ListContextsRequest
* ListContextsRequest `object`
  * ContextType
  * CreatedAfter
  * CreatedBefore
  * MaxResults
  * NextToken
  * SortBy
  * SortOrder
  * SourceUri

### ListContextsResponse
* ListContextsResponse `object`
  * ContextSummaries
    * items [ContextSummary](#contextsummary)
  * NextToken

### ListDataQualityJobDefinitionsRequest
* ListDataQualityJobDefinitionsRequest `object`
  * CreationTimeAfter
  * CreationTimeBefore
  * EndpointName
  * MaxResults
  * NameContains
  * NextToken
  * SortBy
  * SortOrder

### ListDataQualityJobDefinitionsResponse
* ListDataQualityJobDefinitionsResponse `object`
  * JobDefinitionSummaries **required**
    * items [MonitoringJobDefinitionSummary](#monitoringjobdefinitionsummary)
  * NextToken

### ListDeviceFleetsRequest
* ListDeviceFleetsRequest `object`
  * CreationTimeAfter
  * CreationTimeBefore
  * LastModifiedTimeAfter
  * LastModifiedTimeBefore
  * MaxResults
  * NameContains
  * NextToken
  * SortBy
  * SortOrder

### ListDeviceFleetsResponse
* ListDeviceFleetsResponse `object`
  * DeviceFleetSummaries **required**
    * items [DeviceFleetSummary](#devicefleetsummary)
  * NextToken

### ListDeviceFleetsSortBy
* ListDeviceFleetsSortBy `string` (values: NAME, CREATION_TIME, LAST_MODIFIED_TIME)

### ListDevicesRequest
* ListDevicesRequest `object`
  * DeviceFleetName
  * LatestHeartbeatAfter
  * MaxResults
  * ModelName
  * NextToken

### ListDevicesResponse
* ListDevicesResponse `object`
  * DeviceSummaries **required**
    * items [DeviceSummary](#devicesummary)
  * NextToken

### ListDomainsRequest
* ListDomainsRequest `object`
  * MaxResults
  * NextToken

### ListDomainsResponse
* ListDomainsResponse `object`
  * Domains
    * items [DomainDetails](#domaindetails)
  * NextToken

### ListEdgePackagingJobsRequest
* ListEdgePackagingJobsRequest `object`
  * CreationTimeAfter
  * CreationTimeBefore
  * LastModifiedTimeAfter
  * LastModifiedTimeBefore
  * MaxResults
  * ModelNameContains
  * NameContains
  * NextToken
  * SortBy
  * SortOrder
  * StatusEquals

### ListEdgePackagingJobsResponse
* ListEdgePackagingJobsResponse `object`
  * EdgePackagingJobSummaries **required**
    * items [EdgePackagingJobSummary](#edgepackagingjobsummary)
  * NextToken

### ListEdgePackagingJobsSortBy
* ListEdgePackagingJobsSortBy `string` (values: NAME, MODEL_NAME, CREATION_TIME, LAST_MODIFIED_TIME, STATUS)

### ListEndpointConfigsInput
* ListEndpointConfigsInput `object`
  * CreationTimeAfter
  * CreationTimeBefore
  * MaxResults
  * NameContains
  * NextToken
  * SortBy
  * SortOrder

### ListEndpointConfigsOutput
* ListEndpointConfigsOutput `object`
  * EndpointConfigs **required**
    * items [EndpointConfigSummary](#endpointconfigsummary)
  * NextToken

### ListEndpointsInput
* ListEndpointsInput `object`
  * CreationTimeAfter
  * CreationTimeBefore
  * LastModifiedTimeAfter
  * LastModifiedTimeBefore
  * MaxResults
  * NameContains
  * NextToken
  * SortBy
  * SortOrder
  * StatusEquals

### ListEndpointsOutput
* ListEndpointsOutput `object`
  * Endpoints **required**
    * items [EndpointSummary](#endpointsummary)
  * NextToken

### ListExperimentsRequest
* ListExperimentsRequest `object`
  * CreatedAfter
  * CreatedBefore
  * MaxResults
  * NextToken
  * SortBy
  * SortOrder

### ListExperimentsResponse
* ListExperimentsResponse `object`
  * ExperimentSummaries
    * items [ExperimentSummary](#experimentsummary)
  * NextToken

### ListFeatureGroupsRequest
* ListFeatureGroupsRequest `object`
  * CreationTimeAfter
  * CreationTimeBefore
  * FeatureGroupStatusEquals
  * MaxResults
  * NameContains
  * NextToken
  * OfflineStoreStatusEquals
  * SortBy
  * SortOrder

### ListFeatureGroupsResponse
* ListFeatureGroupsResponse `object`
  * FeatureGroupSummaries **required**
    * items [FeatureGroupSummary](#featuregroupsummary)
  * NextToken **required**

### ListFlowDefinitionsRequest
* ListFlowDefinitionsRequest `object`
  * CreationTimeAfter
  * CreationTimeBefore
  * MaxResults
  * NextToken
  * SortOrder

### ListFlowDefinitionsResponse
* ListFlowDefinitionsResponse `object`
  * FlowDefinitionSummaries **required**
    * items [FlowDefinitionSummary](#flowdefinitionsummary)
  * NextToken

### ListHumanTaskUisRequest
* ListHumanTaskUisRequest `object`
  * CreationTimeAfter
  * CreationTimeBefore
  * MaxResults
  * NextToken
  * SortOrder

### ListHumanTaskUisResponse
* ListHumanTaskUisResponse `object`
  * HumanTaskUiSummaries **required**
    * items [HumanTaskUiSummary](#humantaskuisummary)
  * NextToken

### ListHyperParameterTuningJobsRequest
* ListHyperParameterTuningJobsRequest `object`
  * CreationTimeAfter
  * CreationTimeBefore
  * LastModifiedTimeAfter
  * LastModifiedTimeBefore
  * MaxResults
  * NameContains
  * NextToken
  * SortBy
  * SortOrder
  * StatusEquals

### ListHyperParameterTuningJobsResponse
* ListHyperParameterTuningJobsResponse `object`
  * HyperParameterTuningJobSummaries **required**
    * items [HyperParameterTuningJobSummary](#hyperparametertuningjobsummary)
  * NextToken

### ListImageVersionsRequest
* ListImageVersionsRequest `object`
  * CreationTimeAfter
  * CreationTimeBefore
  * ImageName **required**
  * LastModifiedTimeAfter
  * LastModifiedTimeBefore
  * MaxResults
  * NextToken
  * SortBy
  * SortOrder

### ListImageVersionsResponse
* ListImageVersionsResponse `object`
  * ImageVersions
    * items [ImageVersion](#imageversion)
  * NextToken

### ListImagesRequest
* ListImagesRequest `object`
  * CreationTimeAfter
  * CreationTimeBefore
  * LastModifiedTimeAfter
  * LastModifiedTimeBefore
  * MaxResults
  * NameContains
  * NextToken
  * SortBy
  * SortOrder

### ListImagesResponse
* ListImagesResponse `object`
  * Images
    * items [Image](#image)
  * NextToken

### ListLabelingJobsForWorkteamRequest
* ListLabelingJobsForWorkteamRequest `object`
  * CreationTimeAfter
  * CreationTimeBefore
  * JobReferenceCodeContains
  * MaxResults
  * NextToken
  * SortBy
  * SortOrder
  * WorkteamArn **required**

### ListLabelingJobsForWorkteamResponse
* ListLabelingJobsForWorkteamResponse `object`
  * LabelingJobSummaryList **required**
    * items [LabelingJobForWorkteamSummary](#labelingjobforworkteamsummary)
  * NextToken

### ListLabelingJobsForWorkteamSortByOptions
* ListLabelingJobsForWorkteamSortByOptions `string` (values: CreationTime)

### ListLabelingJobsRequest
* ListLabelingJobsRequest `object`
  * CreationTimeAfter
  * CreationTimeBefore
  * LastModifiedTimeAfter
  * LastModifiedTimeBefore
  * MaxResults
  * NameContains
  * NextToken
  * SortBy
  * SortOrder
  * StatusEquals

### ListLabelingJobsResponse
* ListLabelingJobsResponse `object`
  * LabelingJobSummaryList
    * items [LabelingJobSummary](#labelingjobsummary)
  * NextToken

### ListLineageEntityParameterKey
* ListLineageEntityParameterKey `array`
  * items [StringParameterValue](#stringparametervalue)

### ListMaxResults
* ListMaxResults `integer`

### ListModelBiasJobDefinitionsRequest
* ListModelBiasJobDefinitionsRequest `object`
  * CreationTimeAfter
  * CreationTimeBefore
  * EndpointName
  * MaxResults
  * NameContains
  * NextToken
  * SortBy
  * SortOrder

### ListModelBiasJobDefinitionsResponse
* ListModelBiasJobDefinitionsResponse `object`
  * JobDefinitionSummaries **required**
    * items [MonitoringJobDefinitionSummary](#monitoringjobdefinitionsummary)
  * NextToken

### ListModelExplainabilityJobDefinitionsRequest
* ListModelExplainabilityJobDefinitionsRequest `object`
  * CreationTimeAfter
  * CreationTimeBefore
  * EndpointName
  * MaxResults
  * NameContains
  * NextToken
  * SortBy
  * SortOrder

### ListModelExplainabilityJobDefinitionsResponse
* ListModelExplainabilityJobDefinitionsResponse `object`
  * JobDefinitionSummaries **required**
    * items [MonitoringJobDefinitionSummary](#monitoringjobdefinitionsummary)
  * NextToken

### ListModelPackageGroupsInput
* ListModelPackageGroupsInput `object`
  * CreationTimeAfter
  * CreationTimeBefore
  * MaxResults
  * NameContains
  * NextToken
  * SortBy
  * SortOrder

### ListModelPackageGroupsOutput
* ListModelPackageGroupsOutput `object`
  * ModelPackageGroupSummaryList **required**
    * items [ModelPackageGroupSummary](#modelpackagegroupsummary)
  * NextToken

### ListModelPackagesInput
* ListModelPackagesInput `object`
  * CreationTimeAfter
  * CreationTimeBefore
  * MaxResults
  * ModelApprovalStatus
  * ModelPackageGroupName
  * ModelPackageType
  * NameContains
  * NextToken
  * SortBy
  * SortOrder

### ListModelPackagesOutput
* ListModelPackagesOutput `object`
  * ModelPackageSummaryList **required**
    * items [ModelPackageSummary](#modelpackagesummary)
  * NextToken

### ListModelQualityJobDefinitionsRequest
* ListModelQualityJobDefinitionsRequest `object`
  * CreationTimeAfter
  * CreationTimeBefore
  * EndpointName
  * MaxResults
  * NameContains
  * NextToken
  * SortBy
  * SortOrder

### ListModelQualityJobDefinitionsResponse
* ListModelQualityJobDefinitionsResponse `object`
  * JobDefinitionSummaries **required**
    * items [MonitoringJobDefinitionSummary](#monitoringjobdefinitionsummary)
  * NextToken

### ListModelsInput
* ListModelsInput `object`
  * CreationTimeAfter
  * CreationTimeBefore
  * MaxResults
  * NameContains
  * NextToken
  * SortBy
  * SortOrder

### ListModelsOutput
* ListModelsOutput `object`
  * Models **required**
    * items [ModelSummary](#modelsummary)
  * NextToken

### ListMonitoringExecutionsRequest
* ListMonitoringExecutionsRequest `object`
  * CreationTimeAfter
  * CreationTimeBefore
  * EndpointName
  * LastModifiedTimeAfter
  * LastModifiedTimeBefore
  * MaxResults
  * MonitoringJobDefinitionName
  * MonitoringScheduleName
  * MonitoringTypeEquals
  * NextToken
  * ScheduledTimeAfter
  * ScheduledTimeBefore
  * SortBy
  * SortOrder
  * StatusEquals

### ListMonitoringExecutionsResponse
* ListMonitoringExecutionsResponse `object`
  * MonitoringExecutionSummaries **required**
    * items [MonitoringExecutionSummary](#monitoringexecutionsummary)
  * NextToken

### ListMonitoringSchedulesRequest
* ListMonitoringSchedulesRequest `object`
  * CreationTimeAfter
  * CreationTimeBefore
  * EndpointName
  * LastModifiedTimeAfter
  * LastModifiedTimeBefore
  * MaxResults
  * MonitoringJobDefinitionName
  * MonitoringTypeEquals
  * NameContains
  * NextToken
  * SortBy
  * SortOrder
  * StatusEquals

### ListMonitoringSchedulesResponse
* ListMonitoringSchedulesResponse `object`
  * MonitoringScheduleSummaries **required**
    * items [MonitoringScheduleSummary](#monitoringschedulesummary)
  * NextToken

### ListNotebookInstanceLifecycleConfigsInput
* ListNotebookInstanceLifecycleConfigsInput `object`
  * CreationTimeAfter
  * CreationTimeBefore
  * LastModifiedTimeAfter
  * LastModifiedTimeBefore
  * MaxResults
  * NameContains
  * NextToken
  * SortBy
  * SortOrder

### ListNotebookInstanceLifecycleConfigsOutput
* ListNotebookInstanceLifecycleConfigsOutput `object`
  * NextToken
  * NotebookInstanceLifecycleConfigs
    * items [NotebookInstanceLifecycleConfigSummary](#notebookinstancelifecycleconfigsummary)

### ListNotebookInstancesInput
* ListNotebookInstancesInput `object`
  * AdditionalCodeRepositoryEquals
  * CreationTimeAfter
  * CreationTimeBefore
  * DefaultCodeRepositoryContains
  * LastModifiedTimeAfter
  * LastModifiedTimeBefore
  * MaxResults
  * NameContains
  * NextToken
  * NotebookInstanceLifecycleConfigNameContains
  * SortBy
  * SortOrder
  * StatusEquals

### ListNotebookInstancesOutput
* ListNotebookInstancesOutput `object`
  * NextToken
  * NotebookInstances
    * items [NotebookInstanceSummary](#notebookinstancesummary)

### ListPipelineExecutionStepsRequest
* ListPipelineExecutionStepsRequest `object`
  * MaxResults
  * NextToken
  * PipelineExecutionArn
  * SortOrder

### ListPipelineExecutionStepsResponse
* ListPipelineExecutionStepsResponse `object`
  * NextToken
  * PipelineExecutionSteps
    * items [PipelineExecutionStep](#pipelineexecutionstep)

### ListPipelineExecutionsRequest
* ListPipelineExecutionsRequest `object`
  * CreatedAfter
  * CreatedBefore
  * MaxResults
  * NextToken
  * PipelineName **required**
  * SortBy
  * SortOrder

### ListPipelineExecutionsResponse
* ListPipelineExecutionsResponse `object`
  * NextToken
  * PipelineExecutionSummaries
    * items [PipelineExecutionSummary](#pipelineexecutionsummary)

### ListPipelineParametersForExecutionRequest
* ListPipelineParametersForExecutionRequest `object`
  * MaxResults
  * NextToken
  * PipelineExecutionArn **required**

### ListPipelineParametersForExecutionResponse
* ListPipelineParametersForExecutionResponse `object`
  * NextToken
  * PipelineParameters
    * items [Parameter](#parameter)

### ListPipelinesRequest
* ListPipelinesRequest `object`
  * CreatedAfter
  * CreatedBefore
  * MaxResults
  * NextToken
  * PipelineNamePrefix
  * SortBy
  * SortOrder

### ListPipelinesResponse
* ListPipelinesResponse `object`
  * NextToken
  * PipelineSummaries
    * items [PipelineSummary](#pipelinesummary)

### ListProcessingJobsRequest
* ListProcessingJobsRequest `object`
  * CreationTimeAfter
  * CreationTimeBefore
  * LastModifiedTimeAfter
  * LastModifiedTimeBefore
  * MaxResults
  * NameContains
  * NextToken
  * SortBy
  * SortOrder
  * StatusEquals

### ListProcessingJobsResponse
* ListProcessingJobsResponse `object`
  * NextToken
  * ProcessingJobSummaries **required**
    * items [ProcessingJobSummary](#processingjobsummary)

### ListProjectsInput
* ListProjectsInput `object`
  * CreationTimeAfter
  * CreationTimeBefore
  * MaxResults
  * NameContains
  * NextToken
  * SortBy
  * SortOrder

### ListProjectsOutput
* ListProjectsOutput `object`
  * NextToken
  * ProjectSummaryList **required**
    * items [ProjectSummary](#projectsummary)

### ListSubscribedWorkteamsRequest
* ListSubscribedWorkteamsRequest `object`
  * MaxResults
  * NameContains
  * NextToken

### ListSubscribedWorkteamsResponse
* ListSubscribedWorkteamsResponse `object`
  * NextToken
  * SubscribedWorkteams **required**
    * items [SubscribedWorkteam](#subscribedworkteam)

### ListTagsInput
* ListTagsInput `object`
  * MaxResults
  * NextToken
  * ResourceArn **required**

### ListTagsMaxResults
* ListTagsMaxResults `integer`

### ListTagsOutput
* ListTagsOutput `object`
  * NextToken
  * Tags
    * items [Tag](#tag)

### ListTrainingJobsForHyperParameterTuningJobRequest
* ListTrainingJobsForHyperParameterTuningJobRequest `object`
  * HyperParameterTuningJobName **required**
  * MaxResults
  * NextToken
  * SortBy
  * SortOrder
  * StatusEquals

### ListTrainingJobsForHyperParameterTuningJobResponse
* ListTrainingJobsForHyperParameterTuningJobResponse `object`
  * NextToken
  * TrainingJobSummaries **required**
    * items [HyperParameterTrainingJobSummary](#hyperparametertrainingjobsummary)

### ListTrainingJobsRequest
* ListTrainingJobsRequest `object`
  * CreationTimeAfter
  * CreationTimeBefore
  * LastModifiedTimeAfter
  * LastModifiedTimeBefore
  * MaxResults
  * NameContains
  * NextToken
  * SortBy
  * SortOrder
  * StatusEquals

### ListTrainingJobsResponse
* ListTrainingJobsResponse `object`
  * NextToken
  * TrainingJobSummaries **required**
    * items [TrainingJobSummary](#trainingjobsummary)

### ListTransformJobsRequest
* ListTransformJobsRequest `object`
  * CreationTimeAfter
  * CreationTimeBefore
  * LastModifiedTimeAfter
  * LastModifiedTimeBefore
  * MaxResults
  * NameContains
  * NextToken
  * SortBy
  * SortOrder
  * StatusEquals

### ListTransformJobsResponse
* ListTransformJobsResponse `object`
  * NextToken
  * TransformJobSummaries **required**
    * items [TransformJobSummary](#transformjobsummary)

### ListTrialComponentKey256
* ListTrialComponentKey256 `array`
  * items [TrialComponentKey256](#trialcomponentkey256)

### ListTrialComponentsRequest
* ListTrialComponentsRequest `object`
  * CreatedAfter
  * CreatedBefore
  * ExperimentName
  * MaxResults
  * NextToken
  * SortBy
  * SortOrder
  * SourceArn
  * TrialName

### ListTrialComponentsResponse
* ListTrialComponentsResponse `object`
  * NextToken
  * TrialComponentSummaries
    * items [TrialComponentSummary](#trialcomponentsummary)

### ListTrialsRequest
* ListTrialsRequest `object`
  * CreatedAfter
  * CreatedBefore
  * ExperimentName
  * MaxResults
  * NextToken
  * SortBy
  * SortOrder
  * TrialComponentName

### ListTrialsResponse
* ListTrialsResponse `object`
  * NextToken
  * TrialSummaries
    * items [TrialSummary](#trialsummary)

### ListUserProfilesRequest
* ListUserProfilesRequest `object`
  * DomainIdEquals
  * MaxResults
  * NextToken
  * SortBy
  * SortOrder
  * UserProfileNameContains

### ListUserProfilesResponse
* ListUserProfilesResponse `object`
  * NextToken
  * UserProfiles
    * items [UserProfileDetails](#userprofiledetails)

### ListWorkforcesRequest
* ListWorkforcesRequest `object`
  * MaxResults
  * NameContains
  * NextToken
  * SortBy
  * SortOrder

### ListWorkforcesResponse
* ListWorkforcesResponse `object`
  * NextToken
  * Workforces **required**
    * items [Workforce](#workforce)

### ListWorkforcesSortByOptions
* ListWorkforcesSortByOptions `string` (values: Name, CreateDate)

### ListWorkteamsRequest
* ListWorkteamsRequest `object`
  * MaxResults
  * NameContains
  * NextToken
  * SortBy
  * SortOrder

### ListWorkteamsResponse
* ListWorkteamsResponse `object`
  * NextToken
  * Workteams **required**
    * items [Workteam](#workteam)

### ListWorkteamsSortByOptions
* ListWorkteamsSortByOptions `string` (values: Name, CreateDate)

### Long
* Long `integer`

### MaxAutoMLJobRuntimeInSeconds
* MaxAutoMLJobRuntimeInSeconds `integer`

### MaxCandidates
* MaxCandidates `integer`

### MaxConcurrentTaskCount
* MaxConcurrentTaskCount `integer`

### MaxConcurrentTransforms
* MaxConcurrentTransforms `integer`

### MaxHumanLabeledObjectCount
* MaxHumanLabeledObjectCount `integer`

### MaxNumberOfTrainingJobs
* MaxNumberOfTrainingJobs `integer`

### MaxParallelTrainingJobs
* MaxParallelTrainingJobs `integer`

### MaxPayloadInMB
* MaxPayloadInMB `integer`

### MaxPercentageOfInputDatasetLabeled
* MaxPercentageOfInputDatasetLabeled `integer`

### MaxResults
* MaxResults `integer`

### MaxRuntimeInSeconds
* MaxRuntimeInSeconds `integer`

### MaxRuntimePerTrainingJobInSeconds
* MaxRuntimePerTrainingJobInSeconds `integer`

### MaxWaitTimeInSeconds
* MaxWaitTimeInSeconds `integer`

### MaximumExecutionTimeoutInSeconds
* MaximumExecutionTimeoutInSeconds `integer`

### MediaType
* MediaType `string`

### MemberDefinition
* MemberDefinition `object`: Defines an Amazon Cognito or your own OIDC IdP user group that is part of a work team.
  * CognitoMemberDefinition
    * ClientId **required**
    * UserGroup **required**
    * UserPool **required**
  * OidcMemberDefinition
    * Groups **required**
      * items [Group](#group)

### MemberDefinitions
* MemberDefinitions `array`
  * items [MemberDefinition](#memberdefinition)

### MetadataProperties
* MetadataProperties `object`: Metadata properties of the tracking entity, trial, or trial component.
  * CommitId
  * GeneratedBy
  * ProjectId
  * Repository

### MetadataPropertyValue
* MetadataPropertyValue `string`

### MetricData
* MetricData `object`: The name, value, and date and time of a metric that was emitted to Amazon CloudWatch.
  * MetricName
  * Timestamp
  * Value

### MetricDefinition
* MetricDefinition `object`: Specifies a metric that the training algorithm writes to <code>stderr</code> or <code>stdout</code> . Amazon SageMakerhyperparameter tuning captures all defined metrics. You specify one metric that a hyperparameter tuning job uses as its objective metric to choose the best training job.
  * Name **required**
  * Regex **required**

### MetricDefinitionList
* MetricDefinitionList `array`
  * items [MetricDefinition](#metricdefinition)

### MetricName
* MetricName `string`

### MetricRegex
* MetricRegex `string`

### MetricValue
* MetricValue `number`

### MetricsSource
* MetricsSource `object`: <p/>
  * ContentDigest
  * ContentType **required**
  * S3Uri **required**

### ModelApprovalStatus
* ModelApprovalStatus `string` (values: Approved, Rejected, PendingManualApproval)

### ModelArn
* ModelArn `string`

### ModelArtifacts
* ModelArtifacts `object`: <p>Provides information about the location that is configured for storing model artifacts. </p> <p>Model artifacts are the output that results from training a model, and typically consist of trained parameters, a model defintion that desribes how to compute inferences, and other metadata.</p>
  * S3ModelArtifacts **required**

### ModelBiasAppSpecification
* ModelBiasAppSpecification `object`: Docker container image configuration object for the model bias job.
  * ConfigUri **required**
  * Environment
  * ImageUri **required**

### ModelBiasBaselineConfig
* ModelBiasBaselineConfig `object`: The configuration for a baseline model bias job.
  * BaseliningJobName
  * ConstraintsResource [MonitoringConstraintsResource](#monitoringconstraintsresource)

### ModelBiasJobInput
* ModelBiasJobInput `object`: Inputs for the model bias job.
  * EndpointInput **required** [EndpointInput](#endpointinput)
  * GroundTruthS3Input **required**
    * S3Uri

### ModelClientConfig
* ModelClientConfig `object`: Configures the timeout and maximum number of retries for processing a transform job invocation.
  * InvocationsMaxRetries
  * InvocationsTimeoutInSeconds

### ModelDataQuality
* ModelDataQuality `object`: Data quality constraints and statistics for a model.
  * Constraints
    * ContentDigest
    * ContentType **required**
    * S3Uri **required**
  * Statistics
    * ContentDigest
    * ContentType **required**
    * S3Uri **required**

### ModelDigests
* ModelDigests `object`: Provides information to verify the integrity of stored model artifacts. 
  * ArtifactDigest

### ModelExplainabilityAppSpecification
* ModelExplainabilityAppSpecification `object`: Docker container image configuration object for the model explainability job.
  * ConfigUri **required**
  * Environment
  * ImageUri **required**

### ModelExplainabilityBaselineConfig
* ModelExplainabilityBaselineConfig `object`: The configuration for a baseline model explainability job.
  * BaseliningJobName
  * ConstraintsResource [MonitoringConstraintsResource](#monitoringconstraintsresource)

### ModelExplainabilityJobInput
* ModelExplainabilityJobInput `object`: Inputs for the model explainability job.
  * EndpointInput **required** [EndpointInput](#endpointinput)

### ModelMetrics
* ModelMetrics `object`: Contains metrics captured from a model.
  * Bias
    * Report
      * ContentDigest
      * ContentType **required**
      * S3Uri **required**
  * Explainability
    * Report
      * ContentDigest
      * ContentType **required**
      * S3Uri **required**
  * ModelDataQuality
    * Constraints
      * ContentDigest
      * ContentType **required**
      * S3Uri **required**
    * Statistics
      * ContentDigest
      * ContentType **required**
      * S3Uri **required**
  * ModelQuality
    * Constraints
      * ContentDigest
      * ContentType **required**
      * S3Uri **required**
    * Statistics
      * ContentDigest
      * ContentType **required**
      * S3Uri **required**

### ModelName
* ModelName `string`

### ModelNameContains
* ModelNameContains `string`

### ModelPackage
* ModelPackage `object`: A versioned model that can be deployed for SageMaker inference.
  * ApprovalDescription
  * CertifyForMarketplace
  * CreatedBy [UserContext](#usercontext)
  * CreationTime
  * InferenceSpecification [InferenceSpecification](#inferencespecification)
  * LastModifiedBy [UserContext](#usercontext)
  * LastModifiedTime
  * MetadataProperties [MetadataProperties](#metadataproperties)
  * ModelApprovalStatus
  * ModelMetrics
    * Bias
      * Report
        * ContentDigest
        * ContentType **required**
        * S3Uri **required**
    * Explainability
      * Report
        * ContentDigest
        * ContentType **required**
        * S3Uri **required**
    * ModelDataQuality
      * Constraints
        * ContentDigest
        * ContentType **required**
        * S3Uri **required**
      * Statistics
        * ContentDigest
        * ContentType **required**
        * S3Uri **required**
    * ModelQuality
      * Constraints
        * ContentDigest
        * ContentType **required**
        * S3Uri **required**
      * Statistics
        * ContentDigest
        * ContentType **required**
        * S3Uri **required**
  * ModelPackageArn
  * ModelPackageDescription
  * ModelPackageGroupName
  * ModelPackageName
  * ModelPackageStatus
  * ModelPackageStatusDetails [ModelPackageStatusDetails](#modelpackagestatusdetails)
  * ModelPackageVersion
  * SourceAlgorithmSpecification [SourceAlgorithmSpecification](#sourcealgorithmspecification)
  * Tags
    * items [Tag](#tag)
  * ValidationSpecification [ModelPackageValidationSpecification](#modelpackagevalidationspecification)

### ModelPackageArn
* ModelPackageArn `string`

### ModelPackageContainerDefinition
* ModelPackageContainerDefinition `object`: Describes the Docker container for the model package.
  * ContainerHostname
  * Image **required**
  * ImageDigest
  * ModelDataUrl
  * ProductId

### ModelPackageContainerDefinitionList
* ModelPackageContainerDefinitionList `array`
  * items [ModelPackageContainerDefinition](#modelpackagecontainerdefinition)

### ModelPackageGroup
* ModelPackageGroup `object`: A group of versioned models in the model registry.
  * CreatedBy [UserContext](#usercontext)
  * CreationTime
  * ModelPackageGroupArn
  * ModelPackageGroupDescription
  * ModelPackageGroupName
  * ModelPackageGroupStatus
  * Tags
    * items [Tag](#tag)

### ModelPackageGroupArn
* ModelPackageGroupArn `string`

### ModelPackageGroupSortBy
* ModelPackageGroupSortBy `string` (values: Name, CreationTime)

### ModelPackageGroupStatus
* ModelPackageGroupStatus `string` (values: Pending, InProgress, Completed, Failed, Deleting, DeleteFailed)

### ModelPackageGroupSummary
* ModelPackageGroupSummary `object`: Summary information about a model group.
  * CreationTime **required**
  * ModelPackageGroupArn **required**
  * ModelPackageGroupDescription
  * ModelPackageGroupName **required**
  * ModelPackageGroupStatus **required**

### ModelPackageGroupSummaryList
* ModelPackageGroupSummaryList `array`
  * items [ModelPackageGroupSummary](#modelpackagegroupsummary)

### ModelPackageSortBy
* ModelPackageSortBy `string` (values: Name, CreationTime)

### ModelPackageStatus
* ModelPackageStatus `string` (values: Pending, InProgress, Completed, Failed, Deleting)

### ModelPackageStatusDetails
* ModelPackageStatusDetails `object`: Specifies the validation and image scan statuses of the model package.
  * ImageScanStatuses
    * items [ModelPackageStatusItem](#modelpackagestatusitem)
  * ValidationStatuses **required**
    * items [ModelPackageStatusItem](#modelpackagestatusitem)

### ModelPackageStatusItem
* ModelPackageStatusItem `object`: Represents the overall status of a model package.
  * FailureReason
  * Name **required**
  * Status **required**

### ModelPackageStatusItemList
* ModelPackageStatusItemList `array`
  * items [ModelPackageStatusItem](#modelpackagestatusitem)

### ModelPackageSummary
* ModelPackageSummary `object`: Provides summary information about a model package.
  * CreationTime **required**
  * ModelApprovalStatus
  * ModelPackageArn **required**
  * ModelPackageDescription
  * ModelPackageGroupName
  * ModelPackageName **required**
  * ModelPackageStatus **required**
  * ModelPackageVersion

### ModelPackageSummaryList
* ModelPackageSummaryList `array`
  * items [ModelPackageSummary](#modelpackagesummary)

### ModelPackageType
* ModelPackageType `string` (values: Versioned, Unversioned, Both)

### ModelPackageValidationProfile
* ModelPackageValidationProfile `object`: <p>Contains data, such as the inputs and targeted instance types that are used in the process of validating the model package.</p> <p>The data provided in the validation profile is made available to your buyers on AWS Marketplace.</p>
  * ProfileName **required**
  * TransformJobDefinition **required**
    * BatchStrategy
    * Environment
    * MaxConcurrentTransforms
    * MaxPayloadInMB
    * TransformInput **required**
      * CompressionType
      * ContentType
      * DataSource **required**
        * S3DataSource **required**
          * S3DataType **required**
          * S3Uri **required**
      * SplitType
    * TransformOutput **required**
      * Accept
      * AssembleWith
      * KmsKeyId
      * S3OutputPath **required**
    * TransformResources **required**
      * InstanceCount **required**
      * InstanceType **required**
      * VolumeKmsKeyId

### ModelPackageValidationProfiles
* ModelPackageValidationProfiles `array`
  * items [ModelPackageValidationProfile](#modelpackagevalidationprofile)

### ModelPackageValidationSpecification
* ModelPackageValidationSpecification `object`: Specifies batch transform jobs that Amazon SageMaker runs to validate your model package.
  * ValidationProfiles **required**
    * items [ModelPackageValidationProfile](#modelpackagevalidationprofile)
  * ValidationRole **required**

### ModelPackageVersion
* ModelPackageVersion `integer`

### ModelQuality
* ModelQuality `object`: Model quality statistics and constraints.
  * Constraints
    * ContentDigest
    * ContentType **required**
    * S3Uri **required**
  * Statistics
    * ContentDigest
    * ContentType **required**
    * S3Uri **required**

### ModelQualityAppSpecification
* ModelQualityAppSpecification `object`: Container image configuration object for the monitoring job.
  * ContainerArguments
    * items [ContainerArgument](#containerargument)
  * ContainerEntrypoint
    * items [ContainerEntrypointString](#containerentrypointstring)
  * Environment
  * ImageUri **required**
  * PostAnalyticsProcessorSourceUri
  * ProblemType
  * RecordPreprocessorSourceUri

### ModelQualityBaselineConfig
* ModelQualityBaselineConfig `object`: Configuration for monitoring constraints and monitoring statistics. These baseline resources are compared against the results of the current job from the series of jobs scheduled to collect data periodically.
  * BaseliningJobName
  * ConstraintsResource [MonitoringConstraintsResource](#monitoringconstraintsresource)

### ModelQualityJobInput
* ModelQualityJobInput `object`: The input for the model quality monitoring job. Currently endponts are supported for input for model quality monitoring jobs.
  * EndpointInput **required** [EndpointInput](#endpointinput)
  * GroundTruthS3Input **required**
    * S3Uri

### ModelSortKey
* ModelSortKey `string` (values: Name, CreationTime)

### ModelStepMetadata
* ModelStepMetadata `object`: Metadata for Model steps.
  * Arn

### ModelSummary
* ModelSummary `object`: Provides summary information about a model.
  * CreationTime **required**
  * ModelArn **required**
  * ModelName **required**

### ModelSummaryList
* ModelSummaryList `array`
  * items [ModelSummary](#modelsummary)

### MonitoringAppSpecification
* MonitoringAppSpecification `object`: Container image configuration object for the monitoring job.
  * ContainerArguments
    * items [ContainerArgument](#containerargument)
  * ContainerEntrypoint
    * items [ContainerEntrypointString](#containerentrypointstring)
  * ImageUri **required**
  * PostAnalyticsProcessorSourceUri
  * RecordPreprocessorSourceUri

### MonitoringBaselineConfig
* MonitoringBaselineConfig `object`: Configuration for monitoring constraints and monitoring statistics. These baseline resources are compared against the results of the current job from the series of jobs scheduled to collect data periodically.
  * BaseliningJobName
  * ConstraintsResource
    * S3Uri
  * StatisticsResource
    * S3Uri

### MonitoringClusterConfig
* MonitoringClusterConfig `object`: Configuration for the cluster used to run model monitoring jobs.
  * InstanceCount **required**
  * InstanceType **required**
  * VolumeKmsKeyId
  * VolumeSizeInGB **required**

### MonitoringConstraintsResource
* MonitoringConstraintsResource `object`: The constraints resource for a monitoring job.
  * S3Uri

### MonitoringContainerArguments
* MonitoringContainerArguments `array`
  * items [ContainerArgument](#containerargument)

### MonitoringEnvironmentMap
* MonitoringEnvironmentMap `object`

### MonitoringExecutionSortKey
* MonitoringExecutionSortKey `string` (values: CreationTime, ScheduledTime, Status)

### MonitoringExecutionSummary
* MonitoringExecutionSummary `object`: Summary of information about the last monitoring job to run.
  * CreationTime **required**
  * EndpointName
  * FailureReason
  * LastModifiedTime **required**
  * MonitoringExecutionStatus **required**
  * MonitoringJobDefinitionName
  * MonitoringScheduleName **required**
  * MonitoringType
  * ProcessingJobArn
  * ScheduledTime **required**

### MonitoringExecutionSummaryList
* MonitoringExecutionSummaryList `array`
  * items [MonitoringExecutionSummary](#monitoringexecutionsummary)

### MonitoringGroundTruthS3Input
* MonitoringGroundTruthS3Input `object`: The ground truth labels for the dataset used for the monitoring job.
  * S3Uri

### MonitoringInput
* MonitoringInput `object`: The inputs for a monitoring job.
  * EndpointInput **required**
    * EndTimeOffset
    * EndpointName **required**
    * FeaturesAttribute
    * InferenceAttribute
    * LocalPath **required**
    * ProbabilityAttribute
    * ProbabilityThresholdAttribute
    * S3DataDistributionType
    * S3InputMode
    * StartTimeOffset

### MonitoringInputs
* MonitoringInputs `array`
  * items [MonitoringInput](#monitoringinput)

### MonitoringJobDefinition
* MonitoringJobDefinition `object`: Defines the monitoring job.
  * BaselineConfig
    * BaseliningJobName
    * ConstraintsResource
      * S3Uri
    * StatisticsResource
      * S3Uri
  * Environment
  * MonitoringAppSpecification **required**
    * ContainerArguments
      * items [ContainerArgument](#containerargument)
    * ContainerEntrypoint
      * items [ContainerEntrypointString](#containerentrypointstring)
    * ImageUri **required**
    * PostAnalyticsProcessorSourceUri
    * RecordPreprocessorSourceUri
  * MonitoringInputs **required**
    * items [MonitoringInput](#monitoringinput)
  * MonitoringOutputConfig **required**
    * KmsKeyId
    * MonitoringOutputs **required**
      * items [MonitoringOutput](#monitoringoutput)
  * MonitoringResources **required**
    * ClusterConfig **required**
      * InstanceCount **required**
      * InstanceType **required**
      * VolumeKmsKeyId
      * VolumeSizeInGB **required**
  * NetworkConfig
    * EnableInterContainerTrafficEncryption
    * EnableNetworkIsolation
    * VpcConfig [VpcConfig](#vpcconfig)
  * RoleArn **required**
  * StoppingCondition
    * MaxRuntimeInSeconds **required**

### MonitoringJobDefinitionArn
* MonitoringJobDefinitionArn `string`

### MonitoringJobDefinitionName
* MonitoringJobDefinitionName `string`

### MonitoringJobDefinitionSortKey
* MonitoringJobDefinitionSortKey `string` (values: Name, CreationTime)

### MonitoringJobDefinitionSummary
* MonitoringJobDefinitionSummary `object`: Summary information about a monitoring job.
  * CreationTime **required**
  * EndpointName **required**
  * MonitoringJobDefinitionArn **required**
  * MonitoringJobDefinitionName **required**

### MonitoringJobDefinitionSummaryList
* MonitoringJobDefinitionSummaryList `array`
  * items [MonitoringJobDefinitionSummary](#monitoringjobdefinitionsummary)

### MonitoringMaxRuntimeInSeconds
* MonitoringMaxRuntimeInSeconds `integer`

### MonitoringNetworkConfig
* MonitoringNetworkConfig `object`: The networking configuration for the monitoring job.
  * EnableInterContainerTrafficEncryption
  * EnableNetworkIsolation
  * VpcConfig [VpcConfig](#vpcconfig)

### MonitoringOutput
* MonitoringOutput `object`: The output object for a monitoring job.
  * S3Output **required**
    * LocalPath **required**
    * S3UploadMode
    * S3Uri **required**

### MonitoringOutputConfig
* MonitoringOutputConfig `object`: The output configuration for monitoring jobs.
  * KmsKeyId
  * MonitoringOutputs **required**
    * items [MonitoringOutput](#monitoringoutput)

### MonitoringOutputs
* MonitoringOutputs `array`
  * items [MonitoringOutput](#monitoringoutput)

### MonitoringProblemType
* MonitoringProblemType `string` (values: BinaryClassification, MulticlassClassification, Regression)

### MonitoringResources
* MonitoringResources `object`: Identifies the resources to deploy for a monitoring job.
  * ClusterConfig **required**
    * InstanceCount **required**
    * InstanceType **required**
    * VolumeKmsKeyId
    * VolumeSizeInGB **required**

### MonitoringS3Output
* MonitoringS3Output `object`: Information about where and how you want to store the results of a monitoring job.
  * LocalPath **required**
  * S3UploadMode
  * S3Uri **required**

### MonitoringS3Uri
* MonitoringS3Uri `string`

### MonitoringSchedule
* MonitoringSchedule `object`: A schedule for a model monitoring job. For information about model monitor, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/model-monitor.html">Amazon SageMaker Model Monitor</a>.
  * CreationTime
  * EndpointName
  * FailureReason
  * LastModifiedTime
  * LastMonitoringExecutionSummary [MonitoringExecutionSummary](#monitoringexecutionsummary)
  * MonitoringScheduleArn
  * MonitoringScheduleConfig [MonitoringScheduleConfig](#monitoringscheduleconfig)
  * MonitoringScheduleName
  * MonitoringScheduleStatus
  * MonitoringType
  * Tags
    * items [Tag](#tag)

### MonitoringScheduleArn
* MonitoringScheduleArn `string`

### MonitoringScheduleConfig
* MonitoringScheduleConfig `object`: Configures the monitoring schedule and defines the monitoring job.
  * MonitoringJobDefinition
    * BaselineConfig
      * BaseliningJobName
      * ConstraintsResource
        * S3Uri
      * StatisticsResource
        * S3Uri
    * Environment
    * MonitoringAppSpecification **required**
      * ContainerArguments
        * items [ContainerArgument](#containerargument)
      * ContainerEntrypoint
        * items [ContainerEntrypointString](#containerentrypointstring)
      * ImageUri **required**
      * PostAnalyticsProcessorSourceUri
      * RecordPreprocessorSourceUri
    * MonitoringInputs **required**
      * items [MonitoringInput](#monitoringinput)
    * MonitoringOutputConfig **required**
      * KmsKeyId
      * MonitoringOutputs **required**
        * items [MonitoringOutput](#monitoringoutput)
    * MonitoringResources **required**
      * ClusterConfig **required**
        * InstanceCount **required**
        * InstanceType **required**
        * VolumeKmsKeyId
        * VolumeSizeInGB **required**
    * NetworkConfig
      * EnableInterContainerTrafficEncryption
      * EnableNetworkIsolation
      * VpcConfig [VpcConfig](#vpcconfig)
    * RoleArn **required**
    * StoppingCondition
      * MaxRuntimeInSeconds **required**
  * MonitoringJobDefinitionName
  * MonitoringType
  * ScheduleConfig
    * ScheduleExpression **required**

### MonitoringScheduleList
* MonitoringScheduleList `array`
  * items [MonitoringSchedule](#monitoringschedule)

### MonitoringScheduleName
* MonitoringScheduleName `string`

### MonitoringScheduleSortKey
* MonitoringScheduleSortKey `string` (values: Name, CreationTime, Status)

### MonitoringScheduleSummary
* MonitoringScheduleSummary `object`: Summarizes the monitoring schedule.
  * CreationTime **required**
  * EndpointName
  * LastModifiedTime **required**
  * MonitoringJobDefinitionName
  * MonitoringScheduleArn **required**
  * MonitoringScheduleName **required**
  * MonitoringScheduleStatus **required**
  * MonitoringType

### MonitoringScheduleSummaryList
* MonitoringScheduleSummaryList `array`
  * items [MonitoringScheduleSummary](#monitoringschedulesummary)

### MonitoringStatisticsResource
* MonitoringStatisticsResource `object`: The statistics resource for a monitoring job.
  * S3Uri

### MonitoringStoppingCondition
* MonitoringStoppingCondition `object`: A time limit for how long the monitoring job is allowed to run before stopping.
  * MaxRuntimeInSeconds **required**

### MonitoringTimeOffsetString
* MonitoringTimeOffsetString `string`

### MonitoringType
* MonitoringType `string` (values: DataQuality, ModelQuality, ModelBias, ModelExplainability)

### MountPath
* MountPath `string`

### NameContains
* NameContains `string`

### NestedFilters
* NestedFilters `object`: <p>A list of nested <a>Filter</a> objects. A resource must satisfy the conditions of all filters to be included in the results returned from the <a>Search</a> API.</p> <p>For example, to filter on a training job's <code>InputDataConfig</code> property with a specific channel name and <code>S3Uri</code> prefix, define the following filters:</p> <ul> <li> <p> <code>'{Name:"InputDataConfig.ChannelName", "Operator":"Equals", "Value":"train"}',</code> </p> </li> <li> <p> <code>'{Name:"InputDataConfig.DataSource.S3DataSource.S3Uri", "Operator":"Contains", "Value":"mybucket/catdata"}'</code> </p> </li> </ul>
  * Filters **required**
    * items [Filter](#filter)
  * NestedPropertyName **required**

### NestedFiltersList
* NestedFiltersList `array`
  * items [NestedFilters](#nestedfilters)

### NetworkConfig
* NetworkConfig `object`: Networking options for a job, such as network traffic encryption between containers, whether to allow inbound and outbound network calls to and from containers, and the VPC subnets and security groups to use for VPC-enabled jobs.
  * EnableInterContainerTrafficEncryption
  * EnableNetworkIsolation
  * VpcConfig [VpcConfig](#vpcconfig)

### NetworkInterfaceId
* NetworkInterfaceId `string`

### NextToken
* NextToken `string`

### NotebookInstanceAcceleratorType
* NotebookInstanceAcceleratorType `string` (values: ml.eia1.medium, ml.eia1.large, ml.eia1.xlarge, ml.eia2.medium, ml.eia2.large, ml.eia2.xlarge)

### NotebookInstanceAcceleratorTypes
* NotebookInstanceAcceleratorTypes `array`
  * items [NotebookInstanceAcceleratorType](#notebookinstanceacceleratortype)

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
  * CreationTime
  * LastModifiedTime
  * NotebookInstanceLifecycleConfigArn **required**
  * NotebookInstanceLifecycleConfigName **required**

### NotebookInstanceLifecycleConfigSummaryList
* NotebookInstanceLifecycleConfigSummaryList `array`
  * items [NotebookInstanceLifecycleConfigSummary](#notebookinstancelifecycleconfigsummary)

### NotebookInstanceLifecycleHook
* NotebookInstanceLifecycleHook `object`: <p>Contains the notebook instance lifecycle configuration script.</p> <p>Each lifecycle configuration script has a limit of 16384 characters.</p> <p>The value of the <code>$PATH</code> environment variable that is available to both scripts is <code>/sbin:bin:/usr/sbin:/usr/bin</code>.</p> <p>View CloudWatch Logs for notebook instance lifecycle configurations in log group <code>/aws/sagemaker/NotebookInstances</code> in log stream <code>[notebook-instance-name]/[LifecycleConfigHook]</code>.</p> <p>Lifecycle configuration scripts cannot run for longer than 5 minutes. If a script runs for longer than 5 minutes, it fails and the notebook instance is not created or started.</p> <p>For information about notebook instance lifestyle configurations, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/notebook-lifecycle-config.html">Step 2.1: (Optional) Customize a Notebook Instance</a>.</p>
  * Content

### NotebookInstanceName
* NotebookInstanceName `string`

### NotebookInstanceNameContains
* NotebookInstanceNameContains `string`

### NotebookInstanceSortKey
* NotebookInstanceSortKey `string` (values: Name, CreationTime, Status)

### NotebookInstanceSortOrder
* NotebookInstanceSortOrder `string` (values: Ascending, Descending)

### NotebookInstanceStatus
* NotebookInstanceStatus `string` (values: Pending, InService, Stopping, Stopped, Failed, Deleting, Updating)

### NotebookInstanceSummary
* NotebookInstanceSummary `object`: Provides summary information for an Amazon SageMaker notebook instance.
  * AdditionalCodeRepositories
    * items [CodeRepositoryNameOrUrl](#coderepositorynameorurl)
  * CreationTime
  * DefaultCodeRepository
  * InstanceType
  * LastModifiedTime
  * NotebookInstanceArn **required**
  * NotebookInstanceLifecycleConfigName
  * NotebookInstanceName **required**
  * NotebookInstanceStatus
  * Url

### NotebookInstanceSummaryList
* NotebookInstanceSummaryList `array`
  * items [NotebookInstanceSummary](#notebookinstancesummary)

### NotebookInstanceUrl
* NotebookInstanceUrl `string`

### NotebookInstanceVolumeSizeInGB
* NotebookInstanceVolumeSizeInGB `integer`

### NotebookOutputOption
* NotebookOutputOption `string` (values: Allowed, Disabled)

### NotificationConfiguration
* NotificationConfiguration `object`: Configures SNS notifications of available or expiring work items for work teams.
  * NotificationTopicArn

### NotificationTopicArn
* NotificationTopicArn `string`

### NumberOfHumanWorkersPerDataObject
* NumberOfHumanWorkersPerDataObject `integer`

### ObjectiveStatus
* ObjectiveStatus `string` (values: Succeeded, Pending, Failed)

### ObjectiveStatusCounter
* ObjectiveStatusCounter `integer`

### ObjectiveStatusCounters
* ObjectiveStatusCounters `object`: Specifies the number of training jobs that this hyperparameter tuning job launched, categorized by the status of their objective metric. The objective metric status shows whether the final objective metric for the training job has been evaluated by the tuning job and used in the hyperparameter tuning process.
  * Failed
  * Pending
  * Succeeded

### OfflineStoreConfig
* OfflineStoreConfig `object`: <p>The configuration of an <code>OfflineStore</code>.</p> <p>Provide an <code>OfflineStoreConfig</code> in a request to <code>CreateFeatureGroup</code> to create an <code>OfflineStore</code>.</p> <p>To encrypt an <code>OfflineStore</code> using at rest data encryption, specify AWS Key Management Service (KMS) key ID, or <code>KMSKeyId</code>, in <code>S3StorageConfig</code>.</p>
  * DataCatalogConfig
    * Catalog **required**
    * Database **required**
    * TableName **required**
  * DisableGlueTableCreation
  * S3StorageConfig **required**
    * KmsKeyId
    * S3Uri **required**

### OfflineStoreStatus
* OfflineStoreStatus `object`: The status of <code>OfflineStore</code>.
  * BlockedReason
  * Status **required**

### OfflineStoreStatusValue
* OfflineStoreStatusValue `string` (values: Active, Blocked, Disabled)

### OidcConfig
* OidcConfig `object`: Use this parameter to configure your OIDC Identity Provider (IdP).
  * AuthorizationEndpoint **required**
  * ClientId **required**
  * ClientSecret **required**
  * Issuer **required**
  * JwksUri **required**
  * LogoutEndpoint **required**
  * TokenEndpoint **required**
  * UserInfoEndpoint **required**

### OidcConfigForResponse
* OidcConfigForResponse `object`: Your OIDC IdP workforce configuration.
  * AuthorizationEndpoint
  * ClientId
  * Issuer
  * JwksUri
  * LogoutEndpoint
  * TokenEndpoint
  * UserInfoEndpoint

### OidcEndpoint
* OidcEndpoint `string`

### OidcMemberDefinition
* OidcMemberDefinition `object`: A list of user groups that exist in your OIDC Identity Provider (IdP). One to ten groups can be used to create a single private work team. When you add a user group to the list of <code>Groups</code>, you can add that user group to one or more private work teams. If you add a user group to a private work team, all workers in that user group are added to the work team.
  * Groups **required**
    * items [Group](#group)

### OnlineStoreConfig
* OnlineStoreConfig `object`: Use this to specify the AWS Key Management Service (KMS) Key ID, or <code>KMSKeyId</code>, for at rest data encryption. You can turn <code>OnlineStore</code> on or off by specifying the <code>EnableOnlineStore</code> flag at General Assembly; the default value is <code>False</code>.
  * EnableOnlineStore
  * SecurityConfig
    * KmsKeyId

### OnlineStoreSecurityConfig
* OnlineStoreSecurityConfig `object`: The security configuration for <code>OnlineStore</code>.
  * KmsKeyId

### Operator
* Operator `string` (values: Equals, NotEquals, GreaterThan, GreaterThanOrEqualTo, LessThan, LessThanOrEqualTo, Contains, Exists, NotExists, In)

### OptionalDouble
* OptionalDouble `number`

### OptionalInteger
* OptionalInteger `integer`

### OptionalVolumeSizeInGB
* OptionalVolumeSizeInGB `integer`

### OrderKey
* OrderKey `string` (values: Ascending, Descending)

### OutputConfig
* OutputConfig `object`: Contains information about the output location for the compiled model and the target device that the model runs on. <code>TargetDevice</code> and <code>TargetPlatform</code> are mutually exclusive, so you need to choose one between the two to specify your target device or platform. If you cannot find your device you want to use from the <code>TargetDevice</code> list, use <code>TargetPlatform</code> to describe the platform of your edge device and <code>CompilerOptions</code> if there are specific settings that are required or recommended to use for particular TargetPlatform.
  * CompilerOptions
  * KmsKeyId
  * S3OutputLocation **required**
  * TargetDevice
  * TargetPlatform
    * Accelerator
    * Arch **required**
    * Os **required**

### OutputDataConfig
* OutputDataConfig `object`: Provides information about how to store model training results (model artifacts).
  * KmsKeyId
  * S3OutputPath **required**

### PaginationToken
* PaginationToken `string`

### Parameter
* Parameter `object`: Assigns a value to a named Pipeline parameter.
  * Name **required**
  * Value **required**

### ParameterKey
* ParameterKey `string`

### ParameterList
* ParameterList `array`
  * items [Parameter](#parameter)

### ParameterName
* ParameterName `string`

### ParameterRange
* ParameterRange `object`: Defines the possible values for categorical, continuous, and integer hyperparameters to be used by an algorithm.
  * CategoricalParameterRangeSpecification
    * Values **required**
      * items [ParameterValue](#parametervalue)
  * ContinuousParameterRangeSpecification
    * MaxValue **required**
    * MinValue **required**
  * IntegerParameterRangeSpecification
    * MaxValue **required**
    * MinValue **required**

### ParameterRanges
* ParameterRanges `object`: <p>Specifies ranges of integer, continuous, and categorical hyperparameters that a hyperparameter tuning job searches. The hyperparameter tuning job launches training jobs with hyperparameter values within these ranges to find the combination of values that result in the training job with the best performance as measured by the objective metric of the hyperparameter tuning job.</p> <note> <p>You can specify a maximum of 20 hyperparameters that a hyperparameter tuning job can search over. Every possible value of a categorical parameter range counts against this limit.</p> </note>
  * CategoricalParameterRanges
    * items [CategoricalParameterRange](#categoricalparameterrange)
  * ContinuousParameterRanges
    * items [ContinuousParameterRange](#continuousparameterrange)
  * IntegerParameterRanges
    * items [IntegerParameterRange](#integerparameterrange)

### ParameterType
* ParameterType `string` (values: Integer, Continuous, Categorical, FreeText)

### ParameterValue
* ParameterValue `string`

### ParameterValues
* ParameterValues `array`
  * items [ParameterValue](#parametervalue)

### Parent
* Parent `object`: The trial that a trial component is associated with and the experiment the trial is part of. A component might not be associated with a trial. A component can be associated with multiple trials.
  * ExperimentName
  * TrialName

### ParentHyperParameterTuningJob
* ParentHyperParameterTuningJob `object`: A previously completed or stopped hyperparameter tuning job to be used as a starting point for a new hyperparameter tuning job.
  * HyperParameterTuningJobName

### ParentHyperParameterTuningJobs
* ParentHyperParameterTuningJobs `array`
  * items [ParentHyperParameterTuningJob](#parenthyperparametertuningjob)

### Parents
* Parents `array`
  * items [Parent](#parent)

### Pipeline
* Pipeline `object`: A SageMaker Model Building Pipeline instance.
  * CreatedBy [UserContext](#usercontext)
  * CreationTime
  * LastModifiedBy [UserContext](#usercontext)
  * LastModifiedTime
  * LastRunTime
  * PipelineArn
  * PipelineDescription
  * PipelineDisplayName
  * PipelineName
  * PipelineStatus
  * RoleArn
  * Tags
    * items [Tag](#tag)

### PipelineArn
* PipelineArn `string`

### PipelineDefinition
* PipelineDefinition `string`

### PipelineDescription
* PipelineDescription `string`

### PipelineExecution
* PipelineExecution `object`: An execution of a pipeline.
  * CreatedBy [UserContext](#usercontext)
  * CreationTime
  * LastModifiedBy [UserContext](#usercontext)
  * LastModifiedTime
  * PipelineArn
  * PipelineExecutionArn
  * PipelineExecutionDescription
  * PipelineExecutionDisplayName
  * PipelineExecutionStatus
  * PipelineParameters
    * items [Parameter](#parameter)

### PipelineExecutionArn
* PipelineExecutionArn `string`

### PipelineExecutionDescription
* PipelineExecutionDescription `string`

### PipelineExecutionName
* PipelineExecutionName `string`

### PipelineExecutionStatus
* PipelineExecutionStatus `string` (values: Executing, Stopping, Stopped, Failed, Succeeded)

### PipelineExecutionStep
* PipelineExecutionStep `object`: An execution of a step in a pipeline.
  * CacheHitResult
    * SourcePipelineExecutionArn
  * EndTime
  * FailureReason
  * Metadata
    * Condition
      * Outcome
    * Model
      * Arn
    * ProcessingJob
      * Arn
    * RegisterModel
      * Arn
    * TrainingJob
      * Arn
    * TransformJob
      * Arn
  * StartTime
  * StepName
  * StepStatus

### PipelineExecutionStepList
* PipelineExecutionStepList `array`
  * items [PipelineExecutionStep](#pipelineexecutionstep)

### PipelineExecutionStepMetadata
* PipelineExecutionStepMetadata `object`: Metadata for a step execution.
  * Condition
    * Outcome
  * Model
    * Arn
  * ProcessingJob
    * Arn
  * RegisterModel
    * Arn
  * TrainingJob
    * Arn
  * TransformJob
    * Arn

### PipelineExecutionSummary
* PipelineExecutionSummary `object`: A pipeline execution summary.
  * PipelineExecutionArn
  * PipelineExecutionDescription
  * PipelineExecutionDisplayName
  * PipelineExecutionStatus
  * StartTime

### PipelineExecutionSummaryList
* PipelineExecutionSummaryList `array`
  * items [PipelineExecutionSummary](#pipelineexecutionsummary)

### PipelineName
* PipelineName `string`

### PipelineParameterName
* PipelineParameterName `string`

### PipelineStatus
* PipelineStatus `string` (values: Active)

### PipelineSummary
* PipelineSummary `object`: A summary of a pipeline.
  * CreationTime
  * LastExecutionTime
  * LastModifiedTime
  * PipelineArn
  * PipelineDescription
  * PipelineDisplayName
  * PipelineName
  * RoleArn

### PipelineSummaryList
* PipelineSummaryList `array`
  * items [PipelineSummary](#pipelinesummary)

### PolicyString
* PolicyString `string`

### PresignedDomainUrl
* PresignedDomainUrl `string`

### ProbabilityThresholdAttribute
* ProbabilityThresholdAttribute `number`

### ProblemType
* ProblemType `string` (values: BinaryClassification, MulticlassClassification, Regression)

### ProcessingClusterConfig
* ProcessingClusterConfig `object`: Configuration for the cluster used to run a processing job.
  * InstanceCount **required**
  * InstanceType **required**
  * VolumeKmsKeyId
  * VolumeSizeInGB **required**

### ProcessingEnvironmentKey
* ProcessingEnvironmentKey `string`

### ProcessingEnvironmentMap
* ProcessingEnvironmentMap `object`

### ProcessingEnvironmentValue
* ProcessingEnvironmentValue `string`

### ProcessingFeatureStoreOutput
* ProcessingFeatureStoreOutput `object`: Configuration for processing job outputs in Amazon SageMaker Feature Store.
  * FeatureGroupName **required**

### ProcessingInput
* ProcessingInput `object`: The inputs for a processing job. The processing input must specify exactly one of either <code>S3Input</code> or <code>DatasetDefinition</code> types.
  * AppManaged
  * DatasetDefinition
    * AthenaDatasetDefinition [AthenaDatasetDefinition](#athenadatasetdefinition)
    * DataDistributionType
    * InputMode
    * LocalPath
    * RedshiftDatasetDefinition [RedshiftDatasetDefinition](#redshiftdatasetdefinition)
  * InputName **required**
  * S3Input
    * LocalPath
    * S3CompressionType
    * S3DataDistributionType
    * S3DataType **required**
    * S3InputMode
    * S3Uri **required**

### ProcessingInputs
* ProcessingInputs `array`
  * items [ProcessingInput](#processinginput)

### ProcessingInstanceCount
* ProcessingInstanceCount `integer`

### ProcessingInstanceType
* ProcessingInstanceType `string` (values: ml.t3.medium, ml.t3.large, ml.t3.xlarge, ml.t3.2xlarge, ml.m4.xlarge, ml.m4.2xlarge, ml.m4.4xlarge, ml.m4.10xlarge, ml.m4.16xlarge, ml.c4.xlarge, ml.c4.2xlarge, ml.c4.4xlarge, ml.c4.8xlarge, ml.p2.xlarge, ml.p2.8xlarge, ml.p2.16xlarge, ml.p3.2xlarge, ml.p3.8xlarge, ml.p3.16xlarge, ml.c5.xlarge, ml.c5.2xlarge, ml.c5.4xlarge, ml.c5.9xlarge, ml.c5.18xlarge, ml.m5.large, ml.m5.xlarge, ml.m5.2xlarge, ml.m5.4xlarge, ml.m5.12xlarge, ml.m5.24xlarge, ml.r5.large, ml.r5.xlarge, ml.r5.2xlarge, ml.r5.4xlarge, ml.r5.8xlarge, ml.r5.12xlarge, ml.r5.16xlarge, ml.r5.24xlarge)

### ProcessingJob
* ProcessingJob `object`: An Amazon SageMaker processing job that is used to analyze data and evaluate models. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/processing-job.html">Process Data and Evaluate Models</a>.
  * AppSpecification [AppSpecification](#appspecification)
  * AutoMLJobArn
  * CreationTime
  * Environment
  * ExitMessage
  * ExperimentConfig [ExperimentConfig](#experimentconfig)
  * FailureReason
  * LastModifiedTime
  * MonitoringScheduleArn
  * NetworkConfig [NetworkConfig](#networkconfig)
  * ProcessingEndTime
  * ProcessingInputs
    * items [ProcessingInput](#processinginput)
  * ProcessingJobArn
  * ProcessingJobName
  * ProcessingJobStatus
  * ProcessingOutputConfig [ProcessingOutputConfig](#processingoutputconfig)
  * ProcessingResources [ProcessingResources](#processingresources)
  * ProcessingStartTime
  * RoleArn
  * StoppingCondition [ProcessingStoppingCondition](#processingstoppingcondition)
  * Tags
    * items [Tag](#tag)
  * TrainingJobArn

### ProcessingJobArn
* ProcessingJobArn `string`

### ProcessingJobName
* ProcessingJobName `string`

### ProcessingJobStatus
* ProcessingJobStatus `string` (values: InProgress, Completed, Failed, Stopping, Stopped)

### ProcessingJobStepMetadata
* ProcessingJobStepMetadata `object`: Metadata for a processing job step.
  * Arn

### ProcessingJobSummaries
* ProcessingJobSummaries `array`
  * items [ProcessingJobSummary](#processingjobsummary)

### ProcessingJobSummary
* ProcessingJobSummary `object`: Summary of information about a processing job.
  * CreationTime **required**
  * ExitMessage
  * FailureReason
  * LastModifiedTime
  * ProcessingEndTime
  * ProcessingJobArn **required**
  * ProcessingJobName **required**
  * ProcessingJobStatus **required**

### ProcessingLocalPath
* ProcessingLocalPath `string`

### ProcessingMaxRuntimeInSeconds
* ProcessingMaxRuntimeInSeconds `integer`

### ProcessingOutput
* ProcessingOutput `object`: Describes the results of a processing job. The processing output must specify exactly one of either <code>S3Output</code> or <code>FeatureStoreOutput</code> types.
  * AppManaged
  * FeatureStoreOutput
    * FeatureGroupName **required**
  * OutputName **required**
  * S3Output
    * LocalPath **required**
    * S3UploadMode **required**
    * S3Uri **required**

### ProcessingOutputConfig
* ProcessingOutputConfig `object`: The output configuration for the processing job.
  * KmsKeyId
  * Outputs **required**
    * items [ProcessingOutput](#processingoutput)

### ProcessingOutputs
* ProcessingOutputs `array`
  * items [ProcessingOutput](#processingoutput)

### ProcessingResources
* ProcessingResources `object`: Identifies the resources, ML compute instances, and ML storage volumes to deploy for a processing job. In distributed training, you specify more than one instance.
  * ClusterConfig **required**
    * InstanceCount **required**
    * InstanceType **required**
    * VolumeKmsKeyId
    * VolumeSizeInGB **required**

### ProcessingS3CompressionType
* ProcessingS3CompressionType `string` (values: None, Gzip)

### ProcessingS3DataDistributionType
* ProcessingS3DataDistributionType `string` (values: FullyReplicated, ShardedByS3Key)

### ProcessingS3DataType
* ProcessingS3DataType `string` (values: ManifestFile, S3Prefix)

### ProcessingS3Input
* ProcessingS3Input `object`: Configuration for processing job inputs in Amazon S3.
  * LocalPath
  * S3CompressionType
  * S3DataDistributionType
  * S3DataType **required**
  * S3InputMode
  * S3Uri **required**

### ProcessingS3InputMode
* ProcessingS3InputMode `string` (values: Pipe, File)

### ProcessingS3Output
* ProcessingS3Output `object`: Configuration for processing job outputs in Amazon S3.
  * LocalPath **required**
  * S3UploadMode **required**
  * S3Uri **required**

### ProcessingS3UploadMode
* ProcessingS3UploadMode `string` (values: Continuous, EndOfJob)

### ProcessingStoppingCondition
* ProcessingStoppingCondition `object`: Specifies a time limit for how long the processing job is allowed to run.
  * MaxRuntimeInSeconds **required**

### ProcessingVolumeSizeInGB
* ProcessingVolumeSizeInGB `integer`

### ProductId
* ProductId `string`

### ProductListings
* ProductListings `array`
  * items [String](#string)

### ProductionVariant
* ProductionVariant `object`: Identifies a model that you want to host and the resources to deploy for hosting it. If you are deploying multiple models, tell Amazon SageMaker how to distribute traffic among the models by specifying variant weights. 
  * AcceleratorType
  * InitialInstanceCount **required**
  * InitialVariantWeight
  * InstanceType **required**
  * ModelName **required**
  * VariantName **required**

### ProductionVariantAcceleratorType
* ProductionVariantAcceleratorType `string` (values: ml.eia1.medium, ml.eia1.large, ml.eia1.xlarge, ml.eia2.medium, ml.eia2.large, ml.eia2.xlarge)

### ProductionVariantInstanceType
* ProductionVariantInstanceType `string` (values: ml.t2.medium, ml.t2.large, ml.t2.xlarge, ml.t2.2xlarge, ml.m4.xlarge, ml.m4.2xlarge, ml.m4.4xlarge, ml.m4.10xlarge, ml.m4.16xlarge, ml.m5.large, ml.m5.xlarge, ml.m5.2xlarge, ml.m5.4xlarge, ml.m5.12xlarge, ml.m5.24xlarge, ml.m5d.large, ml.m5d.xlarge, ml.m5d.2xlarge, ml.m5d.4xlarge, ml.m5d.12xlarge, ml.m5d.24xlarge, ml.c4.large, ml.c4.xlarge, ml.c4.2xlarge, ml.c4.4xlarge, ml.c4.8xlarge, ml.p2.xlarge, ml.p2.8xlarge, ml.p2.16xlarge, ml.p3.2xlarge, ml.p3.8xlarge, ml.p3.16xlarge, ml.c5.large, ml.c5.xlarge, ml.c5.2xlarge, ml.c5.4xlarge, ml.c5.9xlarge, ml.c5.18xlarge, ml.c5d.large, ml.c5d.xlarge, ml.c5d.2xlarge, ml.c5d.4xlarge, ml.c5d.9xlarge, ml.c5d.18xlarge, ml.g4dn.xlarge, ml.g4dn.2xlarge, ml.g4dn.4xlarge, ml.g4dn.8xlarge, ml.g4dn.12xlarge, ml.g4dn.16xlarge, ml.r5.large, ml.r5.xlarge, ml.r5.2xlarge, ml.r5.4xlarge, ml.r5.12xlarge, ml.r5.24xlarge, ml.r5d.large, ml.r5d.xlarge, ml.r5d.2xlarge, ml.r5d.4xlarge, ml.r5d.12xlarge, ml.r5d.24xlarge, ml.inf1.xlarge, ml.inf1.2xlarge, ml.inf1.6xlarge, ml.inf1.24xlarge)

### ProductionVariantList
* ProductionVariantList `array`
  * items [ProductionVariant](#productionvariant)

### ProductionVariantSummary
* ProductionVariantSummary `object`: Describes weight and capacities for a production variant associated with an endpoint. If you sent a request to the <code>UpdateEndpointWeightsAndCapacities</code> API and the endpoint status is <code>Updating</code>, you get different desired and current values. 
  * CurrentInstanceCount
  * CurrentWeight
  * DeployedImages
    * items [DeployedImage](#deployedimage)
  * DesiredInstanceCount
  * DesiredWeight
  * VariantName **required**

### ProductionVariantSummaryList
* ProductionVariantSummaryList `array`
  * items [ProductionVariantSummary](#productionvariantsummary)

### ProfilerConfig
* ProfilerConfig `object`: Configuration information for Debugger system monitoring, framework profiling, and storage paths.
  * ProfilingIntervalInMilliseconds
  * ProfilingParameters
  * S3OutputPath **required**

### ProfilerConfigForUpdate
* ProfilerConfigForUpdate `object`: Configuration information for updating the Debugger profile parameters, system and framework metrics configurations, and storage paths.
  * DisableProfiler
  * ProfilingIntervalInMilliseconds
  * ProfilingParameters
  * S3OutputPath

### ProfilerRuleConfiguration
* ProfilerRuleConfiguration `object`: Configuration information for profiling rules.
  * InstanceType
  * LocalPath
  * RuleConfigurationName **required**
  * RuleEvaluatorImage **required**
  * RuleParameters
  * S3OutputPath
  * VolumeSizeInGB

### ProfilerRuleConfigurations
* ProfilerRuleConfigurations `array`
  * items [ProfilerRuleConfiguration](#profilerruleconfiguration)

### ProfilerRuleEvaluationStatus
* ProfilerRuleEvaluationStatus `object`: Information about the status of the rule evaluation.
  * LastModifiedTime
  * RuleConfigurationName
  * RuleEvaluationJobArn
  * RuleEvaluationStatus
  * StatusDetails

### ProfilerRuleEvaluationStatuses
* ProfilerRuleEvaluationStatuses `array`
  * items [ProfilerRuleEvaluationStatus](#profilerruleevaluationstatus)

### ProfilingIntervalInMilliseconds
* ProfilingIntervalInMilliseconds `integer`

### ProfilingParameters
* ProfilingParameters `object`

### ProfilingStatus
* ProfilingStatus `string` (values: Enabled, Disabled)

### ProjectArn
* ProjectArn `string`

### ProjectEntityName
* ProjectEntityName `string`

### ProjectId
* ProjectId `string`

### ProjectSortBy
* ProjectSortBy `string` (values: Name, CreationTime)

### ProjectSortOrder
* ProjectSortOrder `string` (values: Ascending, Descending)

### ProjectStatus
* ProjectStatus `string` (values: Pending, CreateInProgress, CreateCompleted, CreateFailed, DeleteInProgress, DeleteFailed, DeleteCompleted)

### ProjectSummary
* ProjectSummary `object`: Information about a project.
  * CreationTime **required**
  * ProjectArn **required**
  * ProjectDescription
  * ProjectId **required**
  * ProjectName **required**
  * ProjectStatus **required**

### ProjectSummaryList
* ProjectSummaryList `array`
  * items [ProjectSummary](#projectsummary)

### PropertyNameHint
* PropertyNameHint `string`

### PropertyNameQuery
* PropertyNameQuery `object`: Part of the <code>SuggestionQuery</code> type. Specifies a hint for retrieving property names that begin with the specified text.
  * PropertyNameHint **required**

### PropertyNameSuggestion
* PropertyNameSuggestion `object`: A property name returned from a <code>GetSearchSuggestions</code> call that specifies a value in the <code>PropertyNameQuery</code> field.
  * PropertyName

### PropertyNameSuggestionList
* PropertyNameSuggestionList `array`
  * items [PropertyNameSuggestion](#propertynamesuggestion)

### ProvisionedProductStatusMessage
* ProvisionedProductStatusMessage `string`

### ProvisioningParameter
* ProvisioningParameter `object`: A key value pair used when you provision a project as a service catalog product. For information, see <a href="https://docs.aws.amazon.com/servicecatalog/latest/adminguide/introduction.html">What is AWS Service Catalog</a>.
  * Key
  * Value

### ProvisioningParameterKey
* ProvisioningParameterKey `string`

### ProvisioningParameterValue
* ProvisioningParameterValue `string`

### ProvisioningParameters
* ProvisioningParameters `array`
  * items [ProvisioningParameter](#provisioningparameter)

### PublicWorkforceTaskPrice
* PublicWorkforceTaskPrice `object`: <p>Defines the amount of money paid to an Amazon Mechanical Turk worker for each task performed. </p> <p>Use one of the following prices for bounding box tasks. Prices are in US dollars and should be based on the complexity of the task; the longer it takes in your initial testing, the more you should offer.</p> <ul> <li> <p>0.036</p> </li> <li> <p>0.048</p> </li> <li> <p>0.060</p> </li> <li> <p>0.072</p> </li> <li> <p>0.120</p> </li> <li> <p>0.240</p> </li> <li> <p>0.360</p> </li> <li> <p>0.480</p> </li> <li> <p>0.600</p> </li> <li> <p>0.720</p> </li> <li> <p>0.840</p> </li> <li> <p>0.960</p> </li> <li> <p>1.080</p> </li> <li> <p>1.200</p> </li> </ul> <p>Use one of the following prices for image classification, text classification, and custom tasks. Prices are in US dollars.</p> <ul> <li> <p>0.012</p> </li> <li> <p>0.024</p> </li> <li> <p>0.036</p> </li> <li> <p>0.048</p> </li> <li> <p>0.060</p> </li> <li> <p>0.072</p> </li> <li> <p>0.120</p> </li> <li> <p>0.240</p> </li> <li> <p>0.360</p> </li> <li> <p>0.480</p> </li> <li> <p>0.600</p> </li> <li> <p>0.720</p> </li> <li> <p>0.840</p> </li> <li> <p>0.960</p> </li> <li> <p>1.080</p> </li> <li> <p>1.200</p> </li> </ul> <p>Use one of the following prices for semantic segmentation tasks. Prices are in US dollars.</p> <ul> <li> <p>0.840</p> </li> <li> <p>0.960</p> </li> <li> <p>1.080</p> </li> <li> <p>1.200</p> </li> </ul> <p>Use one of the following prices for Textract AnalyzeDocument Important Form Key Amazon Augmented AI review tasks. Prices are in US dollars.</p> <ul> <li> <p>2.400 </p> </li> <li> <p>2.280 </p> </li> <li> <p>2.160 </p> </li> <li> <p>2.040 </p> </li> <li> <p>1.920 </p> </li> <li> <p>1.800 </p> </li> <li> <p>1.680 </p> </li> <li> <p>1.560 </p> </li> <li> <p>1.440 </p> </li> <li> <p>1.320 </p> </li> <li> <p>1.200 </p> </li> <li> <p>1.080 </p> </li> <li> <p>0.960 </p> </li> <li> <p>0.840 </p> </li> <li> <p>0.720 </p> </li> <li> <p>0.600 </p> </li> <li> <p>0.480 </p> </li> <li> <p>0.360 </p> </li> <li> <p>0.240 </p> </li> <li> <p>0.120 </p> </li> <li> <p>0.072 </p> </li> <li> <p>0.060 </p> </li> <li> <p>0.048 </p> </li> <li> <p>0.036 </p> </li> <li> <p>0.024 </p> </li> <li> <p>0.012 </p> </li> </ul> <p>Use one of the following prices for Rekognition DetectModerationLabels Amazon Augmented AI review tasks. Prices are in US dollars.</p> <ul> <li> <p>1.200 </p> </li> <li> <p>1.080 </p> </li> <li> <p>0.960 </p> </li> <li> <p>0.840 </p> </li> <li> <p>0.720 </p> </li> <li> <p>0.600 </p> </li> <li> <p>0.480 </p> </li> <li> <p>0.360 </p> </li> <li> <p>0.240 </p> </li> <li> <p>0.120 </p> </li> <li> <p>0.072 </p> </li> <li> <p>0.060 </p> </li> <li> <p>0.048 </p> </li> <li> <p>0.036 </p> </li> <li> <p>0.024 </p> </li> <li> <p>0.012 </p> </li> </ul> <p>Use one of the following prices for Amazon Augmented AI custom human review tasks. Prices are in US dollars.</p> <ul> <li> <p>1.200 </p> </li> <li> <p>1.080 </p> </li> <li> <p>0.960 </p> </li> <li> <p>0.840 </p> </li> <li> <p>0.720 </p> </li> <li> <p>0.600 </p> </li> <li> <p>0.480 </p> </li> <li> <p>0.360 </p> </li> <li> <p>0.240 </p> </li> <li> <p>0.120 </p> </li> <li> <p>0.072 </p> </li> <li> <p>0.060 </p> </li> <li> <p>0.048 </p> </li> <li> <p>0.036 </p> </li> <li> <p>0.024 </p> </li> <li> <p>0.012 </p> </li> </ul>
  * AmountInUsd
    * Cents
    * Dollars
    * TenthFractionsOfACent

### PutModelPackageGroupPolicyInput
* PutModelPackageGroupPolicyInput `object`
  * ModelPackageGroupName **required**
  * ResourcePolicy **required**

### PutModelPackageGroupPolicyOutput
* PutModelPackageGroupPolicyOutput `object`
  * ModelPackageGroupArn **required**

### RealtimeInferenceInstanceTypes
* RealtimeInferenceInstanceTypes `array`
  * items [ProductionVariantInstanceType](#productionvariantinstancetype)

### RecordWrapper
* RecordWrapper `string` (values: None, RecordIO)

### RedshiftClusterId
* RedshiftClusterId `string`: The Redshift cluster Identifier.

### RedshiftDatabase
* RedshiftDatabase `string`: The name of the Redshift database used in Redshift query execution.

### RedshiftDatasetDefinition
* RedshiftDatasetDefinition `object`: Configuration for Redshift Dataset Definition input.
  * ClusterId **required** [RedshiftClusterId](#redshiftclusterid)
  * ClusterRoleArn **required**
  * Database **required** [RedshiftDatabase](#redshiftdatabase)
  * DbUser **required** [RedshiftUserName](#redshiftusername)
  * KmsKeyId
  * OutputCompression [RedshiftResultCompressionType](#redshiftresultcompressiontype)
  * OutputFormat **required** [RedshiftResultFormat](#redshiftresultformat)
  * OutputS3Uri **required**
  * QueryString **required** [RedshiftQueryString](#redshiftquerystring)

### RedshiftQueryString
* RedshiftQueryString `string`: The SQL query statements to be executed.

### RedshiftResultCompressionType
* RedshiftResultCompressionType `string` (values: None, GZIP, BZIP2, ZSTD, SNAPPY): The compression used for Redshift query results.

### RedshiftResultFormat
* RedshiftResultFormat `string` (values: PARQUET, CSV): The data storage format for Redshift query results.

### RedshiftUserName
* RedshiftUserName `string`: The database user name used in Redshift query execution.

### RegisterDevicesRequest
* RegisterDevicesRequest `object`
  * DeviceFleetName **required**
  * Devices **required**
    * items [Device](#device)
  * Tags
    * items [Tag](#tag)

### RegisterModelStepMetadata
* RegisterModelStepMetadata `object`: Metadata for a register model job step.
  * Arn

### RenderUiTemplateRequest
* RenderUiTemplateRequest `object`
  * HumanTaskUiArn
  * RoleArn **required**
  * Task **required**
    * Input **required**
  * UiTemplate
    * Content **required**

### RenderUiTemplateResponse
* RenderUiTemplateResponse `object`
  * Errors **required**
    * items [RenderingError](#renderingerror)
  * RenderedContent **required**

### RenderableTask
* RenderableTask `object`: Contains input values for a task.
  * Input **required**

### RenderingError
* RenderingError `object`: A description of an error that occurred while rendering the template.
  * Code **required**
  * Message **required**

### RenderingErrorList
* RenderingErrorList `array`
  * items [RenderingError](#renderingerror)

### RepositoryAccessMode
* RepositoryAccessMode `string` (values: Platform, Vpc)

### ResolvedAttributes
* ResolvedAttributes `object`: The resolved attributes.
  * AutoMLJobObjective [AutoMLJobObjective](#automljobobjective)
  * CompletionCriteria [AutoMLJobCompletionCriteria](#automljobcompletioncriteria)
  * ProblemType

### ResourceArn
* ResourceArn `string`

### ResourceConfig
* ResourceConfig `object`: Describes the resources, including ML compute instances and ML storage volumes, to use for model training. 
  * InstanceCount **required**
  * InstanceType **required**
  * VolumeKmsKeyId
  * VolumeSizeInGB **required**

### ResourceId
* ResourceId `string`

### ResourceInUse


### ResourceLimitExceeded


### ResourceLimits
* ResourceLimits `object`: Specifies the maximum number of training jobs and parallel training jobs that a hyperparameter tuning job can launch.
  * MaxNumberOfTrainingJobs **required**
  * MaxParallelTrainingJobs **required**

### ResourceNotFound


### ResourcePropertyName
* ResourcePropertyName `string`

### ResourceSpec
* ResourceSpec `object`: Specifies the ARN's of a SageMaker image and SageMaker image version, and the instance type that the version runs on.
  * InstanceType
  * SageMakerImageArn
  * SageMakerImageVersionArn

### ResourceType
* ResourceType `string` (values: TrainingJob, Experiment, ExperimentTrial, ExperimentTrialComponent, Endpoint, ModelPackage, ModelPackageGroup, Pipeline, PipelineExecution, FeatureGroup)

### ResponseMIMEType
* ResponseMIMEType `string`

### ResponseMIMETypes
* ResponseMIMETypes `array`
  * items [ResponseMIMEType](#responsemimetype)

### RetentionPolicy
* RetentionPolicy `object`: The retention policy for data stored on an Amazon Elastic File System (EFS) volume.
  * HomeEfsFileSystem

### RetentionType
* RetentionType `string` (values: Retain, Delete)

### RoleArn
* RoleArn `string`

### RootAccess
* RootAccess `string` (values: Enabled, Disabled)

### RuleConfigurationName
* RuleConfigurationName `string`

### RuleEvaluationStatus
* RuleEvaluationStatus `string` (values: InProgress, NoIssuesFound, IssuesFound, Error, Stopping, Stopped)

### RuleParameters
* RuleParameters `object`

### S3DataDistribution
* S3DataDistribution `string` (values: FullyReplicated, ShardedByS3Key)

### S3DataSource
* S3DataSource `object`: Describes the S3 data source.
  * AttributeNames
    * items [AttributeName](#attributename)
  * S3DataDistributionType
  * S3DataType **required**
  * S3Uri **required**

### S3DataType
* S3DataType `string` (values: ManifestFile, S3Prefix, AugmentedManifestFile)

### S3StorageConfig
* S3StorageConfig `object`: The Amazon Simple Storage (Amazon S3) location and and security configuration for <code>OfflineStore</code>.
  * KmsKeyId
  * S3Uri **required**

### S3Uri
* S3Uri `string`

### SagemakerServicecatalogStatus
* SagemakerServicecatalogStatus `string` (values: Enabled, Disabled)

### SamplingPercentage
* SamplingPercentage `integer`

### ScheduleConfig
* ScheduleConfig `object`: Configuration details about the monitoring schedule.
  * ScheduleExpression **required**

### ScheduleExpression
* ScheduleExpression `string`

### ScheduleStatus
* ScheduleStatus `string` (values: Pending, Failed, Scheduled, Stopped)

### SearchExpression
* SearchExpression `object`: <p>A multi-expression that searches for the specified resource or resources in a search. All resource objects that satisfy the expression's condition are included in the search results. You must specify at least one subexpression, filter, or nested filter. A <code>SearchExpression</code> can contain up to twenty elements.</p> <p>A <code>SearchExpression</code> contains the following components:</p> <ul> <li> <p>A list of <code>Filter</code> objects. Each filter defines a simple Boolean expression comprised of a resource property name, Boolean operator, and value.</p> </li> <li> <p>A list of <code>NestedFilter</code> objects. Each nested filter defines a list of Boolean expressions using a list of resource properties. A nested filter is satisfied if a single object in the list satisfies all Boolean expressions.</p> </li> <li> <p>A list of <code>SearchExpression</code> objects. A search expression object can be nested in a list of search expression objects.</p> </li> <li> <p>A Boolean operator: <code>And</code> or <code>Or</code>.</p> </li> </ul>
  * Filters
    * items [Filter](#filter)
  * NestedFilters
    * items [NestedFilters](#nestedfilters)
  * Operator
  * SubExpressions
    * items [SearchExpression](#searchexpression)

### SearchExpressionList
* SearchExpressionList `array`
  * items [SearchExpression](#searchexpression)

### SearchRecord
* SearchRecord `object`: A single resource returned as part of the <a>Search</a> API response.
  * Endpoint [Endpoint](#endpoint)
  * Experiment
    * CreatedBy [UserContext](#usercontext)
    * CreationTime
    * Description
    * DisplayName
    * ExperimentArn
    * ExperimentName
    * LastModifiedBy [UserContext](#usercontext)
    * LastModifiedTime
    * Source [ExperimentSource](#experimentsource)
    * Tags
      * items [Tag](#tag)
  * FeatureGroup [FeatureGroup](#featuregroup)
  * ModelPackage [ModelPackage](#modelpackage)
  * ModelPackageGroup [ModelPackageGroup](#modelpackagegroup)
  * Pipeline [Pipeline](#pipeline)
  * PipelineExecution [PipelineExecution](#pipelineexecution)
  * TrainingJob
    * AlgorithmSpecification
      * AlgorithmName
      * EnableSageMakerMetricsTimeSeries
      * MetricDefinitions
        * items [MetricDefinition](#metricdefinition)
      * TrainingImage
      * TrainingInputMode **required**
    * AutoMLJobArn
    * BillableTimeInSeconds
    * CheckpointConfig [CheckpointConfig](#checkpointconfig)
    * CreationTime
    * DebugHookConfig [DebugHookConfig](#debughookconfig)
    * DebugRuleConfigurations
      * items [DebugRuleConfiguration](#debugruleconfiguration)
    * DebugRuleEvaluationStatuses
      * items [DebugRuleEvaluationStatus](#debugruleevaluationstatus)
    * EnableInterContainerTrafficEncryption
    * EnableManagedSpotTraining
    * EnableNetworkIsolation
    * ExperimentConfig [ExperimentConfig](#experimentconfig)
    * FailureReason
    * FinalMetricDataList
      * items [MetricData](#metricdata)
    * HyperParameters
    * InputDataConfig
      * items [Channel](#channel)
    * LabelingJobArn
    * LastModifiedTime
    * ModelArtifacts
      * S3ModelArtifacts **required**
    * OutputDataConfig
      * KmsKeyId
      * S3OutputPath **required**
    * ResourceConfig
      * InstanceCount **required**
      * InstanceType **required**
      * VolumeKmsKeyId
      * VolumeSizeInGB **required**
    * RoleArn
    * SecondaryStatus
    * SecondaryStatusTransitions
      * items [SecondaryStatusTransition](#secondarystatustransition)
    * StoppingCondition
      * MaxRuntimeInSeconds
      * MaxWaitTimeInSeconds
    * Tags
      * items [Tag](#tag)
    * TensorBoardOutputConfig [TensorBoardOutputConfig](#tensorboardoutputconfig)
    * TrainingEndTime
    * TrainingJobArn
    * TrainingJobName
    * TrainingJobStatus
    * TrainingStartTime
    * TrainingTimeInSeconds
    * TuningJobArn
    * VpcConfig
      * SecurityGroupIds **required**
        * items [SecurityGroupId](#securitygroupid)
      * Subnets **required**
        * items [SubnetId](#subnetid)
  * Trial
    * CreatedBy [UserContext](#usercontext)
    * CreationTime
    * DisplayName
    * ExperimentName
    * LastModifiedBy [UserContext](#usercontext)
    * LastModifiedTime
    * MetadataProperties [MetadataProperties](#metadataproperties)
    * Source [TrialSource](#trialsource)
    * Tags
      * items [Tag](#tag)
    * TrialArn
    * TrialComponentSummaries
      * items [TrialComponentSimpleSummary](#trialcomponentsimplesummary)
    * TrialName
  * TrialComponent
    * CreatedBy [UserContext](#usercontext)
    * CreationTime
    * DisplayName
    * EndTime
    * InputArtifacts
    * LastModifiedBy [UserContext](#usercontext)
    * LastModifiedTime
    * MetadataProperties [MetadataProperties](#metadataproperties)
    * Metrics
      * items [TrialComponentMetricSummary](#trialcomponentmetricsummary)
    * OutputArtifacts
    * Parameters
    * Parents
      * items [Parent](#parent)
    * Source
      * SourceArn **required**
      * SourceType
    * SourceDetail
      * ProcessingJob
        * AppSpecification [AppSpecification](#appspecification)
        * AutoMLJobArn
        * CreationTime
        * Environment
        * ExitMessage
        * ExperimentConfig [ExperimentConfig](#experimentconfig)
        * FailureReason
        * LastModifiedTime
        * MonitoringScheduleArn
        * NetworkConfig [NetworkConfig](#networkconfig)
        * ProcessingEndTime
        * ProcessingInputs
          * items [ProcessingInput](#processinginput)
        * ProcessingJobArn
        * ProcessingJobName
        * ProcessingJobStatus
        * ProcessingOutputConfig [ProcessingOutputConfig](#processingoutputconfig)
        * ProcessingResources [ProcessingResources](#processingresources)
        * ProcessingStartTime
        * RoleArn
        * StoppingCondition [ProcessingStoppingCondition](#processingstoppingcondition)
        * Tags
          * items [Tag](#tag)
        * TrainingJobArn
      * SourceArn
      * TrainingJob
        * AlgorithmSpecification
          * AlgorithmName
          * EnableSageMakerMetricsTimeSeries
          * MetricDefinitions
          * TrainingImage
          * TrainingInputMode **required**
        * AutoMLJobArn
        * BillableTimeInSeconds
        * CheckpointConfig [CheckpointConfig](#checkpointconfig)
        * CreationTime
        * DebugHookConfig [DebugHookConfig](#debughookconfig)
        * DebugRuleConfigurations
          * items [DebugRuleConfiguration](#debugruleconfiguration)
        * DebugRuleEvaluationStatuses
          * items [DebugRuleEvaluationStatus](#debugruleevaluationstatus)
        * EnableInterContainerTrafficEncryption
        * EnableManagedSpotTraining
        * EnableNetworkIsolation
        * ExperimentConfig [ExperimentConfig](#experimentconfig)
        * FailureReason
        * FinalMetricDataList
          * items [MetricData](#metricdata)
        * HyperParameters
        * InputDataConfig
          * items [Channel](#channel)
        * LabelingJobArn
        * LastModifiedTime
        * ModelArtifacts
          * S3ModelArtifacts **required**
        * OutputDataConfig
          * KmsKeyId
          * S3OutputPath **required**
        * ResourceConfig
          * InstanceCount **required**
          * InstanceType **required**
          * VolumeKmsKeyId
          * VolumeSizeInGB **required**
        * RoleArn
        * SecondaryStatus
        * SecondaryStatusTransitions
          * items [SecondaryStatusTransition](#secondarystatustransition)
        * StoppingCondition
          * MaxRuntimeInSeconds
          * MaxWaitTimeInSeconds
        * Tags
          * items [Tag](#tag)
        * TensorBoardOutputConfig [TensorBoardOutputConfig](#tensorboardoutputconfig)
        * TrainingEndTime
        * TrainingJobArn
        * TrainingJobName
        * TrainingJobStatus
        * TrainingStartTime
        * TrainingTimeInSeconds
        * TuningJobArn
        * VpcConfig
          * SecurityGroupIds **required**
          * Subnets **required**
      * TransformJob
        * AutoMLJobArn
        * BatchStrategy
        * CreationTime
        * DataProcessing [DataProcessing](#dataprocessing)
        * Environment
        * ExperimentConfig [ExperimentConfig](#experimentconfig)
        * FailureReason
        * LabelingJobArn
        * MaxConcurrentTransforms
        * MaxPayloadInMB
        * ModelClientConfig [ModelClientConfig](#modelclientconfig)
        * ModelName
        * Tags
          * items [Tag](#tag)
        * TransformEndTime
        * TransformInput [TransformInput](#transforminput)
        * TransformJobArn
        * TransformJobName
        * TransformJobStatus
        * TransformOutput [TransformOutput](#transformoutput)
        * TransformResources [TransformResources](#transformresources)
        * TransformStartTime
    * StartTime
    * Status [TrialComponentStatus](#trialcomponentstatus)
    * Tags
      * items [Tag](#tag)
    * TrialComponentArn
    * TrialComponentName

### SearchRequest
* SearchRequest `object`
  * MaxResults
  * NextToken
  * Resource **required**
  * SearchExpression
    * Filters
      * items [Filter](#filter)
    * NestedFilters
      * items [NestedFilters](#nestedfilters)
    * Operator
    * SubExpressions
      * items [SearchExpression](#searchexpression)
  * SortBy
  * SortOrder

### SearchResponse
* SearchResponse `object`
  * NextToken
  * Results
    * items [SearchRecord](#searchrecord)

### SearchResultsList
* SearchResultsList `array`
  * items [SearchRecord](#searchrecord)

### SearchSortOrder
* SearchSortOrder `string` (values: Ascending, Descending)

### SecondaryStatus
* SecondaryStatus `string` (values: Starting, LaunchingMLInstances, PreparingTrainingStack, Downloading, DownloadingTrainingImage, Training, Uploading, Stopping, Stopped, MaxRuntimeExceeded, Completed, Failed, Interrupted, MaxWaitTimeExceeded, Updating)

### SecondaryStatusTransition
* SecondaryStatusTransition `object`: <p>An array element of <a>DescribeTrainingJobResponse$SecondaryStatusTransitions</a>. It provides additional details about a status that the training job has transitioned through. A training job can be in one of several states, for example, starting, downloading, training, or uploading. Within each state, there are a number of intermediate states. For example, within the starting state, Amazon SageMaker could be starting the training job or launching the ML instances. These transitional states are referred to as the job's secondary status. </p> <p/>
  * EndTime
  * StartTime **required**
  * Status **required**
  * StatusMessage

### SecondaryStatusTransitions
* SecondaryStatusTransitions `array`
  * items [SecondaryStatusTransition](#secondarystatustransition)

### SecretArn
* SecretArn `string`

### SecurityGroupId
* SecurityGroupId `string`

### SecurityGroupIds
* SecurityGroupIds `array`
  * items [SecurityGroupId](#securitygroupid)

### Seed
* Seed `integer`

### ServiceCatalogEntityId
* ServiceCatalogEntityId `string`

### ServiceCatalogProvisionedProductDetails
* ServiceCatalogProvisionedProductDetails `object`: Details of a provisioned service catalog product. For information about service catalog, see <a href="https://docs.aws.amazon.com/servicecatalog/latest/adminguide/introduction.html">What is AWS Service Catalog</a>.
  * ProvisionedProductId
  * ProvisionedProductStatusMessage

### ServiceCatalogProvisioningDetails
* ServiceCatalogProvisioningDetails `object`: Details that you specify to provision a service catalog product. For information about service catalog, see .<a href="https://docs.aws.amazon.com/servicecatalog/latest/adminguide/introduction.html">What is AWS Service Catalog</a>.
  * PathId
  * ProductId **required**
  * ProvisioningArtifactId **required**
  * ProvisioningParameters
    * items [ProvisioningParameter](#provisioningparameter)

### SessionExpirationDurationInSeconds
* SessionExpirationDurationInSeconds `integer`

### SharingSettings
* SharingSettings `object`: Specifies options when sharing an Amazon SageMaker Studio notebook. These settings are specified as part of <code>DefaultUserSettings</code> when the <a>CreateDomain</a> API is called, and as part of <code>UserSettings</code> when the <a>CreateUserProfile</a> API is called.
  * NotebookOutputOption
  * S3KmsKeyId
  * S3OutputPath

### ShuffleConfig
* ShuffleConfig `object`: <p>A configuration for a shuffle option for input data in a channel. If you use <code>S3Prefix</code> for <code>S3DataType</code>, the results of the S3 key prefix matches are shuffled. If you use <code>ManifestFile</code>, the order of the S3 object references in the <code>ManifestFile</code> is shuffled. If you use <code>AugmentedManifestFile</code>, the order of the JSON lines in the <code>AugmentedManifestFile</code> is shuffled. The shuffling order is determined using the <code>Seed</code> value.</p> <p>For Pipe input mode, when <code>ShuffleConfig</code> is specified shuffling is done at the start of every epoch. With large datasets, this ensures that the order of the training data is different for each epoch, and it helps reduce bias and possible overfitting. In a multi-node training job when <code>ShuffleConfig</code> is combined with <code>S3DataDistributionType</code> of <code>ShardedByS3Key</code>, the data is shuffled across nodes so that the content sent to a particular node on the first epoch might be sent to a different node on the second epoch.</p>
  * Seed **required**

### SingleSignOnUserIdentifier
* SingleSignOnUserIdentifier `string`

### SnsTopicArn
* SnsTopicArn `string`

### SortActionsBy
* SortActionsBy `string` (values: Name, CreationTime)

### SortArtifactsBy
* SortArtifactsBy `string` (values: CreationTime)

### SortAssociationsBy
* SortAssociationsBy `string` (values: SourceArn, DestinationArn, SourceType, DestinationType, CreationTime)

### SortBy
* SortBy `string` (values: Name, CreationTime, Status)

### SortContextsBy
* SortContextsBy `string` (values: Name, CreationTime)

### SortExperimentsBy
* SortExperimentsBy `string` (values: Name, CreationTime)

### SortOrder
* SortOrder `string` (values: Ascending, Descending)

### SortPipelineExecutionsBy
* SortPipelineExecutionsBy `string` (values: CreationTime, PipelineExecutionArn)

### SortPipelinesBy
* SortPipelinesBy `string` (values: Name, CreationTime)

### SortTrialComponentsBy
* SortTrialComponentsBy `string` (values: Name, CreationTime)

### SortTrialsBy
* SortTrialsBy `string` (values: Name, CreationTime)

### SourceAlgorithm
* SourceAlgorithm `object`: Specifies an algorithm that was used to create the model package. The algorithm must be either an algorithm resource in your Amazon SageMaker account or an algorithm in AWS Marketplace that you are subscribed to.
  * AlgorithmName **required**
  * ModelDataUrl

### SourceAlgorithmList
* SourceAlgorithmList `array`
  * items [SourceAlgorithm](#sourcealgorithm)

### SourceAlgorithmSpecification
* SourceAlgorithmSpecification `object`: A list of algorithms that were used to create a model package.
  * SourceAlgorithms **required**
    * items [SourceAlgorithm](#sourcealgorithm)

### SourceIpConfig
* SourceIpConfig `object`: A list of IP address ranges (<a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Subnets.html">CIDRs</a>). Used to create an allow list of IP addresses for a private workforce. Workers will only be able to login to their worker portal from an IP address within this range. By default, a workforce isn't restricted to specific IP addresses.
  * Cidrs **required**
    * items [Cidr](#cidr)

### SourceType
* SourceType `string`

### SourceUri
* SourceUri `string`

### SplitType
* SplitType `string` (values: None, Line, RecordIO, TFRecord)

### StartMonitoringScheduleRequest
* StartMonitoringScheduleRequest `object`
  * MonitoringScheduleName **required**

### StartNotebookInstanceInput
* StartNotebookInstanceInput `object`
  * NotebookInstanceName **required**

### StartPipelineExecutionRequest
* StartPipelineExecutionRequest `object`
  * ClientRequestToken **required**
  * PipelineExecutionDescription
  * PipelineExecutionDisplayName
  * PipelineName **required**
  * PipelineParameters
    * items [Parameter](#parameter)

### StartPipelineExecutionResponse
* StartPipelineExecutionResponse `object`
  * PipelineExecutionArn

### StatusDetails
* StatusDetails `string`

### StatusMessage
* StatusMessage `string`

### StepName
* StepName `string`

### StepStatus
* StepStatus `string` (values: Starting, Executing, Stopping, Stopped, Failed, Succeeded)

### StopAutoMLJobRequest
* StopAutoMLJobRequest `object`
  * AutoMLJobName **required**

### StopCompilationJobRequest
* StopCompilationJobRequest `object`
  * CompilationJobName **required**

### StopEdgePackagingJobRequest
* StopEdgePackagingJobRequest `object`
  * EdgePackagingJobName **required**

### StopHyperParameterTuningJobRequest
* StopHyperParameterTuningJobRequest `object`
  * HyperParameterTuningJobName **required**

### StopLabelingJobRequest
* StopLabelingJobRequest `object`
  * LabelingJobName **required**

### StopMonitoringScheduleRequest
* StopMonitoringScheduleRequest `object`
  * MonitoringScheduleName **required**

### StopNotebookInstanceInput
* StopNotebookInstanceInput `object`
  * NotebookInstanceName **required**

### StopPipelineExecutionRequest
* StopPipelineExecutionRequest `object`
  * ClientRequestToken **required**
  * PipelineExecutionArn **required**

### StopPipelineExecutionResponse
* StopPipelineExecutionResponse `object`
  * PipelineExecutionArn

### StopProcessingJobRequest
* StopProcessingJobRequest `object`
  * ProcessingJobName **required**

### StopTrainingJobRequest
* StopTrainingJobRequest `object`
  * TrainingJobName **required**

### StopTransformJobRequest
* StopTransformJobRequest `object`
  * TransformJobName **required**

### StoppingCondition
* StoppingCondition `object`: <p>Specifies a limit to how long a model training or compilation job can run. It also specifies how long you are willing to wait for a managed spot training job to complete. When the job reaches the time limit, Amazon SageMaker ends the training or compilation job. Use this API to cap model training costs.</p> <p>To stop a job, Amazon SageMaker sends the algorithm the <code>SIGTERM</code> signal, which delays job termination for 120 seconds. Algorithms can use this 120-second window to save the model artifacts, so the results of training are not lost. </p> <p>The training algorithms provided by Amazon SageMaker automatically save the intermediate results of a model training job when possible. This attempt to save artifacts is only a best effort case as model might not be in a state from which it can be saved. For example, if training has just started, the model might not be ready to save. When saved, this intermediate data is a valid model artifact. You can use it to create a model with <code>CreateModel</code>.</p> <note> <p>The Neural Topic Model (NTM) currently does not support saving intermediate model artifacts. When training NTMs, make sure that the maximum runtime is sufficient for the training job to complete.</p> </note>
  * MaxRuntimeInSeconds
  * MaxWaitTimeInSeconds

### String
* String `string`

### String1024
* String1024 `string`

### String200
* String200 `string`

### String2048
* String2048 `string`

### String256
* String256 `string`

### String64
* String64 `string`

### StringParameterValue
* StringParameterValue `string`

### SubnetId
* SubnetId `string`

### Subnets
* Subnets `array`
  * items [SubnetId](#subnetid)

### SubscribedWorkteam
* SubscribedWorkteam `object`: Describes a work team of a vendor that does the a labelling job.
  * ListingId
  * MarketplaceDescription
  * MarketplaceTitle
  * SellerName
  * WorkteamArn **required**

### SubscribedWorkteams
* SubscribedWorkteams `array`
  * items [SubscribedWorkteam](#subscribedworkteam)

### Success
* Success `boolean`

### SuggestionQuery
* SuggestionQuery `object`: Specified in the <a>GetSearchSuggestions</a> request. Limits the property names that are included in the response.
  * PropertyNameQuery
    * PropertyNameHint **required**

### TableName
* TableName `string`

### Tag
* Tag `object`: Describes a tag. 
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

### TagValue
* TagValue `string`

### TargetAttributeName
* TargetAttributeName `string`

### TargetDevice
* TargetDevice `string` (values: lambda, ml_m4, ml_m5, ml_c4, ml_c5, ml_p2, ml_p3, ml_g4dn, ml_inf1, jetson_tx1, jetson_tx2, jetson_nano, jetson_xavier, rasp3b, imx8qm, deeplens, rk3399, rk3288, aisage, sbe_c, qcs605, qcs603, sitara_am57x, amba_cv22, x86_win32, x86_win64, coreml, jacinto_tda4vm)

### TargetObjectiveMetricValue
* TargetObjectiveMetricValue `number`

### TargetPlatform
* TargetPlatform `object`: Contains information about a target platform that you want your model to run on, such as OS, architecture, and accelerators. It is an alternative of <code>TargetDevice</code>.
  * Accelerator
  * Arch **required**
  * Os **required**

### TargetPlatformAccelerator
* TargetPlatformAccelerator `string` (values: INTEL_GRAPHICS, MALI, NVIDIA)

### TargetPlatformArch
* TargetPlatformArch `string` (values: X86_64, X86, ARM64, ARM_EABI, ARM_EABIHF)

### TargetPlatformOs
* TargetPlatformOs `string` (values: ANDROID, LINUX)

### TaskAvailabilityLifetimeInSeconds
* TaskAvailabilityLifetimeInSeconds `integer`

### TaskCount
* TaskCount `integer`

### TaskDescription
* TaskDescription `string`

### TaskInput
* TaskInput `string`

### TaskKeyword
* TaskKeyword `string`

### TaskKeywords
* TaskKeywords `array`
  * items [TaskKeyword](#taskkeyword)

### TaskTimeLimitInSeconds
* TaskTimeLimitInSeconds `integer`

### TaskTitle
* TaskTitle `string`

### TemplateContent
* TemplateContent `string`

### TemplateContentSha256
* TemplateContentSha256 `string`

### TemplateUrl
* TemplateUrl `string`

### TensorBoardAppSettings
* TensorBoardAppSettings `object`: The TensorBoard app settings.
  * DefaultResourceSpec
    * InstanceType
    * SageMakerImageArn
    * SageMakerImageVersionArn

### TensorBoardOutputConfig
* TensorBoardOutputConfig `object`: Configuration of storage locations for the Debugger TensorBoard output data.
  * LocalPath
  * S3OutputPath **required**

### TenthFractionsOfACent
* TenthFractionsOfACent `integer`

### TerminationWaitInSeconds
* TerminationWaitInSeconds `integer`

### ThingName
* ThingName `string`

### Timestamp
* Timestamp `string`

### TrafficRoutingConfig
* TrafficRoutingConfig `object`: Currently, the <code>TrafficRoutingConfig</code> API is not supported.
  * CanarySize
    * Type **required**
    * Value **required**
  * Type **required**
  * WaitIntervalInSeconds **required**

### TrafficRoutingConfigType
* TrafficRoutingConfigType `string` (values: ALL_AT_ONCE, CANARY)

### TrainingInputMode
* TrainingInputMode `string` (values: Pipe, File)

### TrainingInstanceCount
* TrainingInstanceCount `integer`

### TrainingInstanceType
* TrainingInstanceType `string` (values: ml.m4.xlarge, ml.m4.2xlarge, ml.m4.4xlarge, ml.m4.10xlarge, ml.m4.16xlarge, ml.g4dn.xlarge, ml.g4dn.2xlarge, ml.g4dn.4xlarge, ml.g4dn.8xlarge, ml.g4dn.12xlarge, ml.g4dn.16xlarge, ml.m5.large, ml.m5.xlarge, ml.m5.2xlarge, ml.m5.4xlarge, ml.m5.12xlarge, ml.m5.24xlarge, ml.c4.xlarge, ml.c4.2xlarge, ml.c4.4xlarge, ml.c4.8xlarge, ml.p2.xlarge, ml.p2.8xlarge, ml.p2.16xlarge, ml.p3.2xlarge, ml.p3.8xlarge, ml.p3.16xlarge, ml.p3dn.24xlarge, ml.p4d.24xlarge, ml.c5.xlarge, ml.c5.2xlarge, ml.c5.4xlarge, ml.c5.9xlarge, ml.c5.18xlarge, ml.c5n.xlarge, ml.c5n.2xlarge, ml.c5n.4xlarge, ml.c5n.9xlarge, ml.c5n.18xlarge)

### TrainingInstanceTypes
* TrainingInstanceTypes `array`
  * items [TrainingInstanceType](#traininginstancetype)

### TrainingJob
* TrainingJob `object`: Contains information about a training job.
  * AlgorithmSpecification
    * AlgorithmName
    * EnableSageMakerMetricsTimeSeries
    * MetricDefinitions
      * items [MetricDefinition](#metricdefinition)
    * TrainingImage
    * TrainingInputMode **required**
  * AutoMLJobArn
  * BillableTimeInSeconds
  * CheckpointConfig [CheckpointConfig](#checkpointconfig)
  * CreationTime
  * DebugHookConfig [DebugHookConfig](#debughookconfig)
  * DebugRuleConfigurations
    * items [DebugRuleConfiguration](#debugruleconfiguration)
  * DebugRuleEvaluationStatuses
    * items [DebugRuleEvaluationStatus](#debugruleevaluationstatus)
  * EnableInterContainerTrafficEncryption
  * EnableManagedSpotTraining
  * EnableNetworkIsolation
  * ExperimentConfig [ExperimentConfig](#experimentconfig)
  * FailureReason
  * FinalMetricDataList
    * items [MetricData](#metricdata)
  * HyperParameters
  * InputDataConfig
    * items [Channel](#channel)
  * LabelingJobArn
  * LastModifiedTime
  * ModelArtifacts
    * S3ModelArtifacts **required**
  * OutputDataConfig
    * KmsKeyId
    * S3OutputPath **required**
  * ResourceConfig
    * InstanceCount **required**
    * InstanceType **required**
    * VolumeKmsKeyId
    * VolumeSizeInGB **required**
  * RoleArn
  * SecondaryStatus
  * SecondaryStatusTransitions
    * items [SecondaryStatusTransition](#secondarystatustransition)
  * StoppingCondition
    * MaxRuntimeInSeconds
    * MaxWaitTimeInSeconds
  * Tags
    * items [Tag](#tag)
  * TensorBoardOutputConfig [TensorBoardOutputConfig](#tensorboardoutputconfig)
  * TrainingEndTime
  * TrainingJobArn
  * TrainingJobName
  * TrainingJobStatus
  * TrainingStartTime
  * TrainingTimeInSeconds
  * TuningJobArn
  * VpcConfig
    * SecurityGroupIds **required**
      * items [SecurityGroupId](#securitygroupid)
    * Subnets **required**
      * items [SubnetId](#subnetid)

### TrainingJobArn
* TrainingJobArn `string`

### TrainingJobDefinition
* TrainingJobDefinition `object`: Defines the input needed to run a training job using the algorithm.
  * HyperParameters
  * InputDataConfig **required**
    * items [Channel](#channel)
  * OutputDataConfig **required**
    * KmsKeyId
    * S3OutputPath **required**
  * ResourceConfig **required**
    * InstanceCount **required**
    * InstanceType **required**
    * VolumeKmsKeyId
    * VolumeSizeInGB **required**
  * StoppingCondition **required**
    * MaxRuntimeInSeconds
    * MaxWaitTimeInSeconds
  * TrainingInputMode **required**

### TrainingJobEarlyStoppingType
* TrainingJobEarlyStoppingType `string` (values: Off, Auto)

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
  * Completed
  * InProgress
  * NonRetryableError
  * RetryableError
  * Stopped

### TrainingJobStepMetadata
* TrainingJobStepMetadata `object`: Metadata for a training job step.
  * Arn

### TrainingJobSummaries
* TrainingJobSummaries `array`
  * items [TrainingJobSummary](#trainingjobsummary)

### TrainingJobSummary
* TrainingJobSummary `object`: Provides summary information about a training job.
  * CreationTime **required**
  * LastModifiedTime
  * TrainingEndTime
  * TrainingJobArn **required**
  * TrainingJobName **required**
  * TrainingJobStatus **required**

### TrainingSpecification
* TrainingSpecification `object`: Defines how the algorithm is used for a training job.
  * MetricDefinitions
    * items [MetricDefinition](#metricdefinition)
  * SupportedHyperParameters
    * items [HyperParameterSpecification](#hyperparameterspecification)
  * SupportedTrainingInstanceTypes **required**
    * items [TrainingInstanceType](#traininginstancetype)
  * SupportedTuningJobObjectiveMetrics
    * items [HyperParameterTuningJobObjective](#hyperparametertuningjobobjective)
  * SupportsDistributedTraining
  * TrainingChannels **required**
    * items [ChannelSpecification](#channelspecification)
  * TrainingImage **required**
  * TrainingImageDigest

### TrainingTimeInSeconds
* TrainingTimeInSeconds `integer`

### TransformDataSource
* TransformDataSource `object`: Describes the location of the channel data.
  * S3DataSource **required**
    * S3DataType **required**
    * S3Uri **required**

### TransformEnvironmentKey
* TransformEnvironmentKey `string`

### TransformEnvironmentMap
* TransformEnvironmentMap `object`

### TransformEnvironmentValue
* TransformEnvironmentValue `string`

### TransformInput
* TransformInput `object`: Describes the input source of a transform job and the way the transform job consumes it.
  * CompressionType
  * ContentType
  * DataSource **required**
    * S3DataSource **required**
      * S3DataType **required**
      * S3Uri **required**
  * SplitType

### TransformInstanceCount
* TransformInstanceCount `integer`

### TransformInstanceType
* TransformInstanceType `string` (values: ml.m4.xlarge, ml.m4.2xlarge, ml.m4.4xlarge, ml.m4.10xlarge, ml.m4.16xlarge, ml.c4.xlarge, ml.c4.2xlarge, ml.c4.4xlarge, ml.c4.8xlarge, ml.p2.xlarge, ml.p2.8xlarge, ml.p2.16xlarge, ml.p3.2xlarge, ml.p3.8xlarge, ml.p3.16xlarge, ml.c5.xlarge, ml.c5.2xlarge, ml.c5.4xlarge, ml.c5.9xlarge, ml.c5.18xlarge, ml.m5.large, ml.m5.xlarge, ml.m5.2xlarge, ml.m5.4xlarge, ml.m5.12xlarge, ml.m5.24xlarge)

### TransformInstanceTypes
* TransformInstanceTypes `array`
  * items [TransformInstanceType](#transforminstancetype)

### TransformJob
* TransformJob `object`: A batch transform job. For information about SageMaker batch transform, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/batch-transform.html">Use Batch Transform</a>.
  * AutoMLJobArn
  * BatchStrategy
  * CreationTime
  * DataProcessing [DataProcessing](#dataprocessing)
  * Environment
  * ExperimentConfig [ExperimentConfig](#experimentconfig)
  * FailureReason
  * LabelingJobArn
  * MaxConcurrentTransforms
  * MaxPayloadInMB
  * ModelClientConfig [ModelClientConfig](#modelclientconfig)
  * ModelName
  * Tags
    * items [Tag](#tag)
  * TransformEndTime
  * TransformInput [TransformInput](#transforminput)
  * TransformJobArn
  * TransformJobName
  * TransformJobStatus
  * TransformOutput [TransformOutput](#transformoutput)
  * TransformResources [TransformResources](#transformresources)
  * TransformStartTime

### TransformJobArn
* TransformJobArn `string`

### TransformJobDefinition
* TransformJobDefinition `object`: Defines the input needed to run a transform job using the inference specification specified in the algorithm.
  * BatchStrategy
  * Environment
  * MaxConcurrentTransforms
  * MaxPayloadInMB
  * TransformInput **required**
    * CompressionType
    * ContentType
    * DataSource **required**
      * S3DataSource **required**
        * S3DataType **required**
        * S3Uri **required**
    * SplitType
  * TransformOutput **required**
    * Accept
    * AssembleWith
    * KmsKeyId
    * S3OutputPath **required**
  * TransformResources **required**
    * InstanceCount **required**
    * InstanceType **required**
    * VolumeKmsKeyId

### TransformJobName
* TransformJobName `string`

### TransformJobStatus
* TransformJobStatus `string` (values: InProgress, Completed, Failed, Stopping, Stopped)

### TransformJobStepMetadata
* TransformJobStepMetadata `object`: Metadata for a transform job step.
  * Arn

### TransformJobSummaries
* TransformJobSummaries `array`
  * items [TransformJobSummary](#transformjobsummary)

### TransformJobSummary
* TransformJobSummary `object`: Provides a summary of a transform job. Multiple <code>TransformJobSummary</code> objects are returned as a list after in response to a <a>ListTransformJobs</a> call.
  * CreationTime **required**
  * FailureReason
  * LastModifiedTime
  * TransformEndTime
  * TransformJobArn **required**
  * TransformJobName **required**
  * TransformJobStatus **required**

### TransformOutput
* TransformOutput `object`: Describes the results of a transform job.
  * Accept
  * AssembleWith
  * KmsKeyId
  * S3OutputPath **required**

### TransformResources
* TransformResources `object`: Describes the resources, including ML instance types and ML instance count, to use for transform job.
  * InstanceCount **required**
  * InstanceType **required**
  * VolumeKmsKeyId

### TransformS3DataSource
* TransformS3DataSource `object`: Describes the S3 data source.
  * S3DataType **required**
  * S3Uri **required**

### Trial
* Trial `object`: The properties of a trial as returned by the <a>Search</a> API.
  * CreatedBy [UserContext](#usercontext)
  * CreationTime
  * DisplayName
  * ExperimentName
  * LastModifiedBy [UserContext](#usercontext)
  * LastModifiedTime
  * MetadataProperties [MetadataProperties](#metadataproperties)
  * Source [TrialSource](#trialsource)
  * Tags
    * items [Tag](#tag)
  * TrialArn
  * TrialComponentSummaries
    * items [TrialComponentSimpleSummary](#trialcomponentsimplesummary)
  * TrialName

### TrialArn
* TrialArn `string`

### TrialComponent
* TrialComponent `object`: The properties of a trial component as returned by the <a>Search</a> API.
  * CreatedBy [UserContext](#usercontext)
  * CreationTime
  * DisplayName
  * EndTime
  * InputArtifacts
  * LastModifiedBy [UserContext](#usercontext)
  * LastModifiedTime
  * MetadataProperties [MetadataProperties](#metadataproperties)
  * Metrics
    * items [TrialComponentMetricSummary](#trialcomponentmetricsummary)
  * OutputArtifacts
  * Parameters
  * Parents
    * items [Parent](#parent)
  * Source
    * SourceArn **required**
    * SourceType
  * SourceDetail
    * ProcessingJob
      * AppSpecification [AppSpecification](#appspecification)
      * AutoMLJobArn
      * CreationTime
      * Environment
      * ExitMessage
      * ExperimentConfig [ExperimentConfig](#experimentconfig)
      * FailureReason
      * LastModifiedTime
      * MonitoringScheduleArn
      * NetworkConfig [NetworkConfig](#networkconfig)
      * ProcessingEndTime
      * ProcessingInputs
        * items [ProcessingInput](#processinginput)
      * ProcessingJobArn
      * ProcessingJobName
      * ProcessingJobStatus
      * ProcessingOutputConfig [ProcessingOutputConfig](#processingoutputconfig)
      * ProcessingResources [ProcessingResources](#processingresources)
      * ProcessingStartTime
      * RoleArn
      * StoppingCondition [ProcessingStoppingCondition](#processingstoppingcondition)
      * Tags
        * items [Tag](#tag)
      * TrainingJobArn
    * SourceArn
    * TrainingJob
      * AlgorithmSpecification
        * AlgorithmName
        * EnableSageMakerMetricsTimeSeries
        * MetricDefinitions
          * items [MetricDefinition](#metricdefinition)
        * TrainingImage
        * TrainingInputMode **required**
      * AutoMLJobArn
      * BillableTimeInSeconds
      * CheckpointConfig [CheckpointConfig](#checkpointconfig)
      * CreationTime
      * DebugHookConfig [DebugHookConfig](#debughookconfig)
      * DebugRuleConfigurations
        * items [DebugRuleConfiguration](#debugruleconfiguration)
      * DebugRuleEvaluationStatuses
        * items [DebugRuleEvaluationStatus](#debugruleevaluationstatus)
      * EnableInterContainerTrafficEncryption
      * EnableManagedSpotTraining
      * EnableNetworkIsolation
      * ExperimentConfig [ExperimentConfig](#experimentconfig)
      * FailureReason
      * FinalMetricDataList
        * items [MetricData](#metricdata)
      * HyperParameters
      * InputDataConfig
        * items [Channel](#channel)
      * LabelingJobArn
      * LastModifiedTime
      * ModelArtifacts
        * S3ModelArtifacts **required**
      * OutputDataConfig
        * KmsKeyId
        * S3OutputPath **required**
      * ResourceConfig
        * InstanceCount **required**
        * InstanceType **required**
        * VolumeKmsKeyId
        * VolumeSizeInGB **required**
      * RoleArn
      * SecondaryStatus
      * SecondaryStatusTransitions
        * items [SecondaryStatusTransition](#secondarystatustransition)
      * StoppingCondition
        * MaxRuntimeInSeconds
        * MaxWaitTimeInSeconds
      * Tags
        * items [Tag](#tag)
      * TensorBoardOutputConfig [TensorBoardOutputConfig](#tensorboardoutputconfig)
      * TrainingEndTime
      * TrainingJobArn
      * TrainingJobName
      * TrainingJobStatus
      * TrainingStartTime
      * TrainingTimeInSeconds
      * TuningJobArn
      * VpcConfig
        * SecurityGroupIds **required**
          * items [SecurityGroupId](#securitygroupid)
        * Subnets **required**
          * items [SubnetId](#subnetid)
    * TransformJob
      * AutoMLJobArn
      * BatchStrategy
      * CreationTime
      * DataProcessing [DataProcessing](#dataprocessing)
      * Environment
      * ExperimentConfig [ExperimentConfig](#experimentconfig)
      * FailureReason
      * LabelingJobArn
      * MaxConcurrentTransforms
      * MaxPayloadInMB
      * ModelClientConfig [ModelClientConfig](#modelclientconfig)
      * ModelName
      * Tags
        * items [Tag](#tag)
      * TransformEndTime
      * TransformInput [TransformInput](#transforminput)
      * TransformJobArn
      * TransformJobName
      * TransformJobStatus
      * TransformOutput [TransformOutput](#transformoutput)
      * TransformResources [TransformResources](#transformresources)
      * TransformStartTime
  * StartTime
  * Status [TrialComponentStatus](#trialcomponentstatus)
  * Tags
    * items [Tag](#tag)
  * TrialComponentArn
  * TrialComponentName

### TrialComponentArn
* TrialComponentArn `string`

### TrialComponentArtifact
* TrialComponentArtifact `object`: <p>Represents an input or output artifact of a trial component. You specify <code>TrialComponentArtifact</code> as part of the <code>InputArtifacts</code> and <code>OutputArtifacts</code> parameters in the <a>CreateTrialComponent</a> request.</p> <p>Examples of input artifacts are datasets, algorithms, hyperparameters, source code, and instance types. Examples of output artifacts are metrics, snapshots, logs, and images.</p>
  * MediaType
  * Value **required**

### TrialComponentArtifactValue
* TrialComponentArtifactValue `string`

### TrialComponentArtifacts
* TrialComponentArtifacts `object`

### TrialComponentKey256
* TrialComponentKey256 `string`

### TrialComponentKey64
* TrialComponentKey64 `string`

### TrialComponentMetricSummaries
* TrialComponentMetricSummaries `array`
  * items [TrialComponentMetricSummary](#trialcomponentmetricsummary)

### TrialComponentMetricSummary
* TrialComponentMetricSummary `object`: A summary of the metrics of a trial component.
  * Avg
  * Count
  * Last
  * Max
  * MetricName
  * Min
  * SourceArn
  * StdDev
  * TimeStamp

### TrialComponentParameterValue
* TrialComponentParameterValue `object`: <p>The value of a hyperparameter. Only one of <code>NumberValue</code> or <code>StringValue</code> can be specified.</p> <p>This object is specified in the <a>CreateTrialComponent</a> request.</p>
  * NumberValue
  * StringValue

### TrialComponentParameters
* TrialComponentParameters `object`

### TrialComponentPrimaryStatus
* TrialComponentPrimaryStatus `string` (values: InProgress, Completed, Failed, Stopping, Stopped)

### TrialComponentSimpleSummaries
* TrialComponentSimpleSummaries `array`
  * items [TrialComponentSimpleSummary](#trialcomponentsimplesummary)

### TrialComponentSimpleSummary
* TrialComponentSimpleSummary `object`: A short summary of a trial component.
  * CreatedBy [UserContext](#usercontext)
  * CreationTime
  * TrialComponentArn
  * TrialComponentName
  * TrialComponentSource [TrialComponentSource](#trialcomponentsource)

### TrialComponentSource
* TrialComponentSource `object`: The Amazon Resource Name (ARN) and job type of the source of a trial component.
  * SourceArn **required**
  * SourceType

### TrialComponentSourceArn
* TrialComponentSourceArn `string`

### TrialComponentSourceDetail
* TrialComponentSourceDetail `object`: Detailed information about the source of a trial component. Either <code>ProcessingJob</code> or <code>TrainingJob</code> is returned.
  * ProcessingJob
    * AppSpecification [AppSpecification](#appspecification)
    * AutoMLJobArn
    * CreationTime
    * Environment
    * ExitMessage
    * ExperimentConfig [ExperimentConfig](#experimentconfig)
    * FailureReason
    * LastModifiedTime
    * MonitoringScheduleArn
    * NetworkConfig [NetworkConfig](#networkconfig)
    * ProcessingEndTime
    * ProcessingInputs
      * items [ProcessingInput](#processinginput)
    * ProcessingJobArn
    * ProcessingJobName
    * ProcessingJobStatus
    * ProcessingOutputConfig [ProcessingOutputConfig](#processingoutputconfig)
    * ProcessingResources [ProcessingResources](#processingresources)
    * ProcessingStartTime
    * RoleArn
    * StoppingCondition [ProcessingStoppingCondition](#processingstoppingcondition)
    * Tags
      * items [Tag](#tag)
    * TrainingJobArn
  * SourceArn
  * TrainingJob
    * AlgorithmSpecification
      * AlgorithmName
      * EnableSageMakerMetricsTimeSeries
      * MetricDefinitions
        * items [MetricDefinition](#metricdefinition)
      * TrainingImage
      * TrainingInputMode **required**
    * AutoMLJobArn
    * BillableTimeInSeconds
    * CheckpointConfig [CheckpointConfig](#checkpointconfig)
    * CreationTime
    * DebugHookConfig [DebugHookConfig](#debughookconfig)
    * DebugRuleConfigurations
      * items [DebugRuleConfiguration](#debugruleconfiguration)
    * DebugRuleEvaluationStatuses
      * items [DebugRuleEvaluationStatus](#debugruleevaluationstatus)
    * EnableInterContainerTrafficEncryption
    * EnableManagedSpotTraining
    * EnableNetworkIsolation
    * ExperimentConfig [ExperimentConfig](#experimentconfig)
    * FailureReason
    * FinalMetricDataList
      * items [MetricData](#metricdata)
    * HyperParameters
    * InputDataConfig
      * items [Channel](#channel)
    * LabelingJobArn
    * LastModifiedTime
    * ModelArtifacts
      * S3ModelArtifacts **required**
    * OutputDataConfig
      * KmsKeyId
      * S3OutputPath **required**
    * ResourceConfig
      * InstanceCount **required**
      * InstanceType **required**
      * VolumeKmsKeyId
      * VolumeSizeInGB **required**
    * RoleArn
    * SecondaryStatus
    * SecondaryStatusTransitions
      * items [SecondaryStatusTransition](#secondarystatustransition)
    * StoppingCondition
      * MaxRuntimeInSeconds
      * MaxWaitTimeInSeconds
    * Tags
      * items [Tag](#tag)
    * TensorBoardOutputConfig [TensorBoardOutputConfig](#tensorboardoutputconfig)
    * TrainingEndTime
    * TrainingJobArn
    * TrainingJobName
    * TrainingJobStatus
    * TrainingStartTime
    * TrainingTimeInSeconds
    * TuningJobArn
    * VpcConfig
      * SecurityGroupIds **required**
        * items [SecurityGroupId](#securitygroupid)
      * Subnets **required**
        * items [SubnetId](#subnetid)
  * TransformJob
    * AutoMLJobArn
    * BatchStrategy
    * CreationTime
    * DataProcessing [DataProcessing](#dataprocessing)
    * Environment
    * ExperimentConfig [ExperimentConfig](#experimentconfig)
    * FailureReason
    * LabelingJobArn
    * MaxConcurrentTransforms
    * MaxPayloadInMB
    * ModelClientConfig [ModelClientConfig](#modelclientconfig)
    * ModelName
    * Tags
      * items [Tag](#tag)
    * TransformEndTime
    * TransformInput [TransformInput](#transforminput)
    * TransformJobArn
    * TransformJobName
    * TransformJobStatus
    * TransformOutput [TransformOutput](#transformoutput)
    * TransformResources [TransformResources](#transformresources)
    * TransformStartTime

### TrialComponentStatus
* TrialComponentStatus `object`: The status of the trial component.
  * Message
  * PrimaryStatus

### TrialComponentStatusMessage
* TrialComponentStatusMessage `string`

### TrialComponentSummaries
* TrialComponentSummaries `array`
  * items [TrialComponentSummary](#trialcomponentsummary)

### TrialComponentSummary
* TrialComponentSummary `object`: A summary of the properties of a trial component. To get all the properties, call the <a>DescribeTrialComponent</a> API and provide the <code>TrialComponentName</code>.
  * CreatedBy
    * DomainId
    * UserProfileArn
    * UserProfileName
  * CreationTime
  * DisplayName
  * EndTime
  * LastModifiedBy
    * DomainId
    * UserProfileArn
    * UserProfileName
  * LastModifiedTime
  * StartTime
  * Status
    * Message
    * PrimaryStatus
  * TrialComponentArn
  * TrialComponentName
  * TrialComponentSource [TrialComponentSource](#trialcomponentsource)

### TrialSource
* TrialSource `object`: The source of the trial.
  * SourceArn **required**
  * SourceType

### TrialSourceArn
* TrialSourceArn `string`

### TrialSummaries
* TrialSummaries `array`
  * items [TrialSummary](#trialsummary)

### TrialSummary
* TrialSummary `object`: A summary of the properties of a trial. To get the complete set of properties, call the <a>DescribeTrial</a> API and provide the <code>TrialName</code>.
  * CreationTime
  * DisplayName
  * LastModifiedTime
  * TrialArn
  * TrialName
  * TrialSource [TrialSource](#trialsource)

### TuningJobCompletionCriteria
* TuningJobCompletionCriteria `object`: The job completion criteria.
  * TargetObjectiveMetricValue **required**

### USD
* USD `object`: Represents an amount of money in United States dollars/
  * Cents
  * Dollars
  * TenthFractionsOfACent

### UiConfig
* UiConfig `object`: Provided configuration information for the worker UI for a labeling job. 
  * HumanTaskUiArn
  * UiTemplateS3Uri

### UiTemplate
* UiTemplate `object`: The Liquid template for the worker user interface.
  * Content **required**

### UiTemplateInfo
* UiTemplateInfo `object`: Container for user interface template information.
  * ContentSha256
  * Url

### UpdateActionRequest
* UpdateActionRequest `object`
  * ActionName **required**
  * Description
  * Properties
  * PropertiesToRemove
    * items [StringParameterValue](#stringparametervalue)
  * Status

### UpdateActionResponse
* UpdateActionResponse `object`
  * ActionArn

### UpdateAppImageConfigRequest
* UpdateAppImageConfigRequest `object`
  * AppImageConfigName **required**
  * KernelGatewayImageConfig
    * FileSystemConfig
      * DefaultGid
      * DefaultUid
      * MountPath
    * KernelSpecs **required**
      * items [KernelSpec](#kernelspec)

### UpdateAppImageConfigResponse
* UpdateAppImageConfigResponse `object`
  * AppImageConfigArn

### UpdateArtifactRequest
* UpdateArtifactRequest `object`
  * ArtifactArn **required**
  * ArtifactName
  * Properties
  * PropertiesToRemove
    * items [StringParameterValue](#stringparametervalue)

### UpdateArtifactResponse
* UpdateArtifactResponse `object`
  * ArtifactArn

### UpdateCodeRepositoryInput
* UpdateCodeRepositoryInput `object`
  * CodeRepositoryName **required**
  * GitConfig
    * SecretArn

### UpdateCodeRepositoryOutput
* UpdateCodeRepositoryOutput `object`
  * CodeRepositoryArn **required**

### UpdateContextRequest
* UpdateContextRequest `object`
  * ContextName **required**
  * Description
  * Properties
  * PropertiesToRemove
    * items [StringParameterValue](#stringparametervalue)

### UpdateContextResponse
* UpdateContextResponse `object`
  * ContextArn

### UpdateDeviceFleetRequest
* UpdateDeviceFleetRequest `object`
  * Description
  * DeviceFleetName **required**
  * OutputConfig **required**
    * KmsKeyId
    * S3OutputLocation **required**
  * RoleArn

### UpdateDevicesRequest
* UpdateDevicesRequest `object`
  * DeviceFleetName **required**
  * Devices **required**
    * items [Device](#device)

### UpdateDomainRequest
* UpdateDomainRequest `object`
  * DefaultUserSettings
    * ExecutionRole
    * JupyterServerAppSettings
      * DefaultResourceSpec
        * InstanceType
        * SageMakerImageArn
        * SageMakerImageVersionArn
    * KernelGatewayAppSettings
      * CustomImages
        * items [CustomImage](#customimage)
      * DefaultResourceSpec
        * InstanceType
        * SageMakerImageArn
        * SageMakerImageVersionArn
    * SecurityGroups
      * items [SecurityGroupId](#securitygroupid)
    * SharingSettings
      * NotebookOutputOption
      * S3KmsKeyId
      * S3OutputPath
    * TensorBoardAppSettings
      * DefaultResourceSpec
        * InstanceType
        * SageMakerImageArn
        * SageMakerImageVersionArn
  * DomainId **required**

### UpdateDomainResponse
* UpdateDomainResponse `object`
  * DomainArn

### UpdateEndpointInput
* UpdateEndpointInput `object`
  * DeploymentConfig
    * AutoRollbackConfiguration
      * Alarms
        * items [Alarm](#alarm)
    * BlueGreenUpdatePolicy **required**
      * MaximumExecutionTimeoutInSeconds
      * TerminationWaitInSeconds
      * TrafficRoutingConfiguration **required**
        * CanarySize
          * Type **required**
          * Value **required**
        * Type **required**
        * WaitIntervalInSeconds **required**
  * EndpointConfigName **required**
  * EndpointName **required**
  * ExcludeRetainedVariantProperties
    * items [VariantProperty](#variantproperty)
  * RetainAllVariantProperties

### UpdateEndpointOutput
* UpdateEndpointOutput `object`
  * EndpointArn **required**

### UpdateEndpointWeightsAndCapacitiesInput
* UpdateEndpointWeightsAndCapacitiesInput `object`
  * DesiredWeightsAndCapacities **required**
    * items [DesiredWeightAndCapacity](#desiredweightandcapacity)
  * EndpointName **required**

### UpdateEndpointWeightsAndCapacitiesOutput
* UpdateEndpointWeightsAndCapacitiesOutput `object`
  * EndpointArn **required**

### UpdateExperimentRequest
* UpdateExperimentRequest `object`
  * Description
  * DisplayName
  * ExperimentName **required**

### UpdateExperimentResponse
* UpdateExperimentResponse `object`
  * ExperimentArn

### UpdateImageRequest
* UpdateImageRequest `object`
  * DeleteProperties
    * items [ImageDeleteProperty](#imagedeleteproperty)
  * Description
  * DisplayName
  * ImageName **required**
  * RoleArn

### UpdateImageResponse
* UpdateImageResponse `object`
  * ImageArn

### UpdateModelPackageInput
* UpdateModelPackageInput `object`
  * ApprovalDescription
  * ModelApprovalStatus **required**
  * ModelPackageArn **required**

### UpdateModelPackageOutput
* UpdateModelPackageOutput `object`
  * ModelPackageArn **required**

### UpdateMonitoringScheduleRequest
* UpdateMonitoringScheduleRequest `object`
  * MonitoringScheduleConfig **required**
    * MonitoringJobDefinition
      * BaselineConfig
        * BaseliningJobName
        * ConstraintsResource
          * S3Uri
        * StatisticsResource
          * S3Uri
      * Environment
      * MonitoringAppSpecification **required**
        * ContainerArguments
          * items [ContainerArgument](#containerargument)
        * ContainerEntrypoint
          * items [ContainerEntrypointString](#containerentrypointstring)
        * ImageUri **required**
        * PostAnalyticsProcessorSourceUri
        * RecordPreprocessorSourceUri
      * MonitoringInputs **required**
        * items [MonitoringInput](#monitoringinput)
      * MonitoringOutputConfig **required**
        * KmsKeyId
        * MonitoringOutputs **required**
          * items [MonitoringOutput](#monitoringoutput)
      * MonitoringResources **required**
        * ClusterConfig **required**
          * InstanceCount **required**
          * InstanceType **required**
          * VolumeKmsKeyId
          * VolumeSizeInGB **required**
      * NetworkConfig
        * EnableInterContainerTrafficEncryption
        * EnableNetworkIsolation
        * VpcConfig [VpcConfig](#vpcconfig)
      * RoleArn **required**
      * StoppingCondition
        * MaxRuntimeInSeconds **required**
    * MonitoringJobDefinitionName
    * MonitoringType
    * ScheduleConfig
      * ScheduleExpression **required**
  * MonitoringScheduleName **required**

### UpdateMonitoringScheduleResponse
* UpdateMonitoringScheduleResponse `object`
  * MonitoringScheduleArn **required**

### UpdateNotebookInstanceInput
* UpdateNotebookInstanceInput `object`
  * AcceleratorTypes
    * items [NotebookInstanceAcceleratorType](#notebookinstanceacceleratortype)
  * AdditionalCodeRepositories
    * items [CodeRepositoryNameOrUrl](#coderepositorynameorurl)
  * DefaultCodeRepository
  * DisassociateAcceleratorTypes
  * DisassociateAdditionalCodeRepositories
  * DisassociateDefaultCodeRepository
  * DisassociateLifecycleConfig
  * InstanceType
  * LifecycleConfigName
  * NotebookInstanceName **required**
  * RoleArn
  * RootAccess
  * VolumeSizeInGB

### UpdateNotebookInstanceLifecycleConfigInput
* UpdateNotebookInstanceLifecycleConfigInput `object`
  * NotebookInstanceLifecycleConfigName **required**
  * OnCreate
    * items [NotebookInstanceLifecycleHook](#notebookinstancelifecyclehook)
  * OnStart
    * items [NotebookInstanceLifecycleHook](#notebookinstancelifecyclehook)

### UpdateNotebookInstanceLifecycleConfigOutput
* UpdateNotebookInstanceLifecycleConfigOutput `object`

### UpdateNotebookInstanceOutput
* UpdateNotebookInstanceOutput `object`

### UpdatePipelineExecutionRequest
* UpdatePipelineExecutionRequest `object`
  * PipelineExecutionArn **required**
  * PipelineExecutionDescription
  * PipelineExecutionDisplayName

### UpdatePipelineExecutionResponse
* UpdatePipelineExecutionResponse `object`
  * PipelineExecutionArn

### UpdatePipelineRequest
* UpdatePipelineRequest `object`
  * PipelineDefinition
  * PipelineDescription
  * PipelineDisplayName
  * PipelineName **required**
  * RoleArn

### UpdatePipelineResponse
* UpdatePipelineResponse `object`
  * PipelineArn

### UpdateTrainingJobRequest
* UpdateTrainingJobRequest `object`
  * ProfilerConfig
    * DisableProfiler
    * ProfilingIntervalInMilliseconds
    * ProfilingParameters
    * S3OutputPath
  * ProfilerRuleConfigurations
    * items [ProfilerRuleConfiguration](#profilerruleconfiguration)
  * TrainingJobName **required**

### UpdateTrainingJobResponse
* UpdateTrainingJobResponse `object`
  * TrainingJobArn **required**

### UpdateTrialComponentRequest
* UpdateTrialComponentRequest `object`
  * DisplayName
  * EndTime
  * InputArtifacts
  * InputArtifactsToRemove
    * items [TrialComponentKey256](#trialcomponentkey256)
  * OutputArtifacts
  * OutputArtifactsToRemove
    * items [TrialComponentKey256](#trialcomponentkey256)
  * Parameters
  * ParametersToRemove
    * items [TrialComponentKey256](#trialcomponentkey256)
  * StartTime
  * Status
    * Message
    * PrimaryStatus
  * TrialComponentName **required**

### UpdateTrialComponentResponse
* UpdateTrialComponentResponse `object`
  * TrialComponentArn

### UpdateTrialRequest
* UpdateTrialRequest `object`
  * DisplayName
  * TrialName **required**

### UpdateTrialResponse
* UpdateTrialResponse `object`
  * TrialArn

### UpdateUserProfileRequest
* UpdateUserProfileRequest `object`
  * DomainId **required**
  * UserProfileName **required**
  * UserSettings
    * ExecutionRole
    * JupyterServerAppSettings
      * DefaultResourceSpec
        * InstanceType
        * SageMakerImageArn
        * SageMakerImageVersionArn
    * KernelGatewayAppSettings
      * CustomImages
        * items [CustomImage](#customimage)
      * DefaultResourceSpec
        * InstanceType
        * SageMakerImageArn
        * SageMakerImageVersionArn
    * SecurityGroups
      * items [SecurityGroupId](#securitygroupid)
    * SharingSettings
      * NotebookOutputOption
      * S3KmsKeyId
      * S3OutputPath
    * TensorBoardAppSettings
      * DefaultResourceSpec
        * InstanceType
        * SageMakerImageArn
        * SageMakerImageVersionArn

### UpdateUserProfileResponse
* UpdateUserProfileResponse `object`
  * UserProfileArn

### UpdateWorkforceRequest
* UpdateWorkforceRequest `object`
  * OidcConfig
    * AuthorizationEndpoint **required**
    * ClientId **required**
    * ClientSecret **required**
    * Issuer **required**
    * JwksUri **required**
    * LogoutEndpoint **required**
    * TokenEndpoint **required**
    * UserInfoEndpoint **required**
  * SourceIpConfig
    * Cidrs **required**
      * items [Cidr](#cidr)
  * WorkforceName **required**

### UpdateWorkforceResponse
* UpdateWorkforceResponse `object`
  * Workforce **required**
    * CognitoConfig
      * ClientId **required**
      * UserPool **required**
    * CreateDate
    * LastUpdatedDate
    * OidcConfig
      * AuthorizationEndpoint
      * ClientId
      * Issuer
      * JwksUri
      * LogoutEndpoint
      * TokenEndpoint
      * UserInfoEndpoint
    * SourceIpConfig
      * Cidrs **required**
        * items [Cidr](#cidr)
    * SubDomain
    * WorkforceArn **required**
    * WorkforceName **required**

### UpdateWorkteamRequest
* UpdateWorkteamRequest `object`
  * Description
  * MemberDefinitions
    * items [MemberDefinition](#memberdefinition)
  * NotificationConfiguration
    * NotificationTopicArn
  * WorkteamName **required**

### UpdateWorkteamResponse
* UpdateWorkteamResponse `object`
  * Workteam **required**
    * CreateDate
    * Description **required**
    * LastUpdatedDate
    * MemberDefinitions **required**
      * items [MemberDefinition](#memberdefinition)
    * NotificationConfiguration
      * NotificationTopicArn
    * ProductListingIds
      * items [String](#string)
    * SubDomain
    * WorkforceArn
    * WorkteamArn **required**
    * WorkteamName **required**

### Url
* Url `string`

### UserContext
* UserContext `object`: Information about the user who created or modified an experiment, trial, or trial component.
  * DomainId
  * UserProfileArn
  * UserProfileName

### UserProfileArn
* UserProfileArn `string`

### UserProfileDetails
* UserProfileDetails `object`: The user profile details.
  * CreationTime
  * DomainId
  * LastModifiedTime
  * Status
  * UserProfileName

### UserProfileList
* UserProfileList `array`
  * items [UserProfileDetails](#userprofiledetails)

### UserProfileName
* UserProfileName `string`

### UserProfileSortKey
* UserProfileSortKey `string` (values: CreationTime, LastModifiedTime)

### UserProfileStatus
* UserProfileStatus `string` (values: Deleting, Failed, InService, Pending, Updating, Update_Failed, Delete_Failed)

### UserSettings
* UserSettings `object`: A collection of settings.
  * ExecutionRole
  * JupyterServerAppSettings
    * DefaultResourceSpec
      * InstanceType
      * SageMakerImageArn
      * SageMakerImageVersionArn
  * KernelGatewayAppSettings
    * CustomImages
      * items [CustomImage](#customimage)
    * DefaultResourceSpec
      * InstanceType
      * SageMakerImageArn
      * SageMakerImageVersionArn
  * SecurityGroups
    * items [SecurityGroupId](#securitygroupid)
  * SharingSettings
    * NotebookOutputOption
    * S3KmsKeyId
    * S3OutputPath
  * TensorBoardAppSettings
    * DefaultResourceSpec
      * InstanceType
      * SageMakerImageArn
      * SageMakerImageVersionArn

### VariantName
* VariantName `string`

### VariantProperty
* VariantProperty `object`: <p>Specifies a production variant property type for an Endpoint.</p> <p>If you are updating an endpoint with the <a>UpdateEndpointInput$RetainAllVariantProperties</a> option set to <code>true</code>, the <code>VariantProperty</code> objects listed in <a>UpdateEndpointInput$ExcludeRetainedVariantProperties</a> override the existing variant properties of the endpoint.</p>
  * VariantPropertyType **required**

### VariantPropertyList
* VariantPropertyList `array`
  * items [VariantProperty](#variantproperty)

### VariantPropertyType
* VariantPropertyType `string` (values: DesiredInstanceCount, DesiredWeight, DataCaptureConfig)

### VariantWeight
* VariantWeight `number`

### VersionedArnOrName
* VersionedArnOrName `string`

### VolumeSizeInGB
* VolumeSizeInGB `integer`

### VpcConfig
* VpcConfig `object`: Specifies a VPC that your training jobs and hosted models have access to. Control access to and from your training and model containers by configuring the VPC. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/host-vpc.html">Protect Endpoints by Using an Amazon Virtual Private Cloud</a> and <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/train-vpc.html">Protect Training Jobs by Using an Amazon Virtual Private Cloud</a>. 
  * SecurityGroupIds **required**
    * items [SecurityGroupId](#securitygroupid)
  * Subnets **required**
    * items [SubnetId](#subnetid)

### VpcId
* VpcId `string`

### VpcSecurityGroupIds
* VpcSecurityGroupIds `array`
  * items [SecurityGroupId](#securitygroupid)

### WaitIntervalInSeconds
* WaitIntervalInSeconds `integer`

### Workforce
* Workforce `object`: A single private workforce, which is automatically created when you create your first private work team. You can create one private work force in each AWS Region. By default, any workforce-related API operation used in a specific region will apply to the workforce created in that region. To learn how to create a private workforce, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-workforce-create-private.html">Create a Private Workforce</a>.
  * CognitoConfig
    * ClientId **required**
    * UserPool **required**
  * CreateDate
  * LastUpdatedDate
  * OidcConfig
    * AuthorizationEndpoint
    * ClientId
    * Issuer
    * JwksUri
    * LogoutEndpoint
    * TokenEndpoint
    * UserInfoEndpoint
  * SourceIpConfig
    * Cidrs **required**
      * items [Cidr](#cidr)
  * SubDomain
  * WorkforceArn **required**
  * WorkforceName **required**

### WorkforceArn
* WorkforceArn `string`

### WorkforceName
* WorkforceName `string`

### Workforces
* Workforces `array`
  * items [Workforce](#workforce)

### Workteam
* Workteam `object`: Provides details about a labeling work team.
  * CreateDate
  * Description **required**
  * LastUpdatedDate
  * MemberDefinitions **required**
    * items [MemberDefinition](#memberdefinition)
  * NotificationConfiguration
    * NotificationTopicArn
  * ProductListingIds
    * items [String](#string)
  * SubDomain
  * WorkforceArn
  * WorkteamArn **required**
  * WorkteamName **required**

### WorkteamArn
* WorkteamArn `string`

### WorkteamName
* WorkteamName `string`

### Workteams
* Workteams `array`
  * items [Workteam](#workteam)


