# @datafire/amazonaws_imagebuilder

Client library for EC2 Image Builder

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_imagebuilder
```
```js
let amazonaws_imagebuilder = require('@datafire/amazonaws_imagebuilder').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

.then(data => {
  console.log(data);
});
```

## Description

EC2 Image Builder is a fully managed AWS service that makes it easier to automate the creation, management, and deployment of customized, secure, and up-to-date "golden" server images that are pre-installed and pre-configured with software and settings to meet specific IT standards.

## Actions

### CancelImageCreation



```js
amazonaws_imagebuilder.CancelImageCreation({
  "imageBuildVersionArn": "",
  "clientToken": ""
}, context)
```

#### Input
* input `object`
  * clientToken **required** `string`: The idempotency token used to make this request idempotent.
  * imageBuildVersionArn **required** `string`: The Amazon Resource Name (ARN) of the image whose creation you want to cancel.

#### Output
* output [CancelImageCreationResponse](#cancelimagecreationresponse)

### CreateComponent



```js
amazonaws_imagebuilder.CreateComponent({
  "name": "",
  "semanticVersion": "",
  "platform": "",
  "clientToken": ""
}, context)
```

#### Input
* input `object`
  * tags `object`: The tags of the component.
  * changeDescription `string`: The change description of the component. Describes what change has been made in this version, or what makes this version different from other versions of this component.
  * clientToken **required** `string`: The idempotency token of the component.
  * data `string`: The data of the component. Used to specify the data inline. Either <code>data</code> or <code>uri</code> can be used to specify the data within the component.
  * description `string`: The description of the component. Describes the contents of the component.
  * kmsKeyId `string`: The ID of the KMS key that should be used to encrypt this component.
  * name **required** `string`: The name of the component.
  * platform **required** `string` (values: Windows, Linux): The platform of the component.
  * semanticVersion **required** `string`: The semantic version of the component. This version follows the semantic version syntax. For example, major.minor.patch. This could be versioned like software (2.0.1) or like a date (2019.12.01).
  * supportedOsVersions `array`:  The operating system (OS) version supported by the component. If the OS information is available, a prefix match is performed against the parent image OS version during image recipe creation. 
    * items [OsVersion](#osversion)
  * uri `string`: The uri of the component. Must be an S3 URL and the requester must have permission to access the S3 bucket. If you use S3, you can specify component content up to your service quota. Either <code>data</code> or <code>uri</code> can be used to specify the data within the component.

#### Output
* output [CreateComponentResponse](#createcomponentresponse)

### CreateContainerRecipe



```js
amazonaws_imagebuilder.CreateContainerRecipe({
  "containerType": "",
  "name": "",
  "semanticVersion": "",
  "components": [],
  "dockerfileTemplateData": "",
  "parentImage": "",
  "targetRepository": {},
  "clientToken": ""
}, context)
```

#### Input
* input `object`
  * components **required** `array`: Components for build and test that are included in the container recipe.
    * items [ComponentConfiguration](#componentconfiguration)
  * tags `object`: Tags that are attached to the container recipe.
  * clientToken **required** `string`: The client token used to make this request idempotent.
  * containerType **required** `string` (values: DOCKER): The type of container to create.
  * description `string`: The description of the container recipe.
  * dockerfileTemplateData **required** `string`: The Dockerfile template used to build your image as an inline data blob.
  * dockerfileTemplateUri `string`: The S3 URI for the Dockerfile that will be used to build your container image.
  * imageOsVersionOverride `string`: Specifies the operating system version for the source image.
  * kmsKeyId `string`: Identifies which KMS key is used to encrypt the container image.
  * name **required** `string`: The name of the container recipe.
  * parentImage **required** `string`: The source image for the container recipe.
  * platformOverride `string` (values: Windows, Linux): Specifies the operating system platform when you use a custom source image.
  * semanticVersion **required** `string`: The semantic version of the container recipe (&lt;major&gt;.&lt;minor&gt;.&lt;patch&gt;).
  * targetRepository **required** `object`: The container repository where the output container image is stored.
    * repositoryName
    * service
  * workingDirectory `string`: The working directory for use during build and test workflows.

#### Output
* output [CreateContainerRecipeResponse](#createcontainerreciperesponse)

### CreateDistributionConfiguration



```js
amazonaws_imagebuilder.CreateDistributionConfiguration({
  "name": "",
  "distributions": [],
  "clientToken": ""
}, context)
```

#### Input
* input `object`
  * tags `object`:  The tags of the distribution configuration. 
  * clientToken **required** `string`:  The idempotency token of the distribution configuration. 
  * description `string`:  The description of the distribution configuration. 
  * distributions **required** `array`:  The distributions of the distribution configuration. 
    * items [Distribution](#distribution)
  * name **required** `string`:  The name of the distribution configuration. 

#### Output
* output [CreateDistributionConfigurationResponse](#createdistributionconfigurationresponse)

### CreateImage



```js
amazonaws_imagebuilder.CreateImage({
  "infrastructureConfigurationArn": "",
  "clientToken": ""
}, context)
```

#### Input
* input `object`
  * tags `object`:  The tags of the image. 
  * clientToken **required** `string`:  The idempotency token used to make this request idempotent. 
  * containerRecipeArn `string`: The Amazon Resource Name (ARN) of the container recipe that defines how images are configured and tested.
  * distributionConfigurationArn `string`:  The Amazon Resource Name (ARN) of the distribution configuration that defines and configures the outputs of your pipeline. 
  * enhancedImageMetadataEnabled `boolean`:  Collects additional information about the image being created, including the operating system (OS) version and package list. This information is used to enhance the overall experience of using EC2 Image Builder. Enabled by default. 
  * imageRecipeArn `string`:  The Amazon Resource Name (ARN) of the image recipe that defines how images are configured, tested, and assessed. 
  * imageTestsConfiguration `object`: Image tests configuration.
    * imageTestsEnabled
    * timeoutMinutes
  * infrastructureConfigurationArn **required** `string`:  The Amazon Resource Name (ARN) of the infrastructure configuration that defines the environment in which your image will be built and tested. 

#### Output
* output [CreateImageResponse](#createimageresponse)

### CreateImagePipeline



```js
amazonaws_imagebuilder.CreateImagePipeline({
  "name": "",
  "infrastructureConfigurationArn": "",
  "clientToken": ""
}, context)
```

#### Input
* input `object`
  * tags `object`:  The tags of the image pipeline. 
  * clientToken **required** `string`:  The idempotency token used to make this request idempotent. 
  * containerRecipeArn `string`: The Amazon Resource Name (ARN) of the container recipe that is used to configure images created by this container pipeline.
  * description `string`:  The description of the image pipeline. 
  * distributionConfigurationArn `string`:  The Amazon Resource Name (ARN) of the distribution configuration that will be used to configure and distribute images created by this image pipeline. 
  * enhancedImageMetadataEnabled `boolean`:  Collects additional information about the image being created, including the operating system (OS) version and package list. This information is used to enhance the overall experience of using EC2 Image Builder. Enabled by default. 
  * imageRecipeArn `string`:  The Amazon Resource Name (ARN) of the image recipe that will be used to configure images created by this image pipeline. 
  * imageTestsConfiguration `object`: Image tests configuration.
    * imageTestsEnabled
    * timeoutMinutes
  * infrastructureConfigurationArn **required** `string`:  The Amazon Resource Name (ARN) of the infrastructure configuration that will be used to build images created by this image pipeline. 
  * name **required** `string`:  The name of the image pipeline. 
  * schedule `object`: A schedule configures how often and when a pipeline will automatically create a new image. 
    * pipelineExecutionStartCondition
    * scheduleExpression
  * status `string` (values: DISABLED, ENABLED):  The status of the image pipeline. 

#### Output
* output [CreateImagePipelineResponse](#createimagepipelineresponse)

### CreateImageRecipe



```js
amazonaws_imagebuilder.CreateImageRecipe({
  "name": "",
  "semanticVersion": "",
  "components": [],
  "parentImage": "",
  "clientToken": ""
}, context)
```

#### Input
* input `object`
  * components **required** `array`: The components of the image recipe. 
    * items [ComponentConfiguration](#componentconfiguration)
  * tags `object`:  The tags of the image recipe. 
  * blockDeviceMappings `array`: The block device mappings of the image recipe. 
    * items [InstanceBlockDeviceMapping](#instanceblockdevicemapping)
  * clientToken **required** `string`: The idempotency token used to make this request idempotent. 
  * description `string`:  The description of the image recipe. 
  * name **required** `string`:  The name of the image recipe. 
  * parentImage **required** `string`: The parent image of the image recipe. The value of the string can be the ARN of the parent image or an AMI ID. The format for the ARN follows this example: <code>arn:aws:imagebuilder:us-west-2:aws:image/windows-server-2016-english-full-base-x86/xxxx.x.x</code>. You can provide the specific version that you want to use, or you can use a wildcard in all of the fields. If you enter an AMI ID for the string value, you must have access to the AMI, and the AMI must be in the same Region in which you are using Image Builder. 
  * semanticVersion **required** `string`: The semantic version of the image recipe. 
  * workingDirectory `string`: The working directory to be used during build and test workflows.

#### Output
* output [CreateImageRecipeResponse](#createimagereciperesponse)

### CreateInfrastructureConfiguration



```js
amazonaws_imagebuilder.CreateInfrastructureConfiguration({
  "name": "",
  "instanceProfileName": "",
  "clientToken": ""
}, context)
```

#### Input
* input `object`
  * tags `object`: The tags of the infrastructure configuration. 
  * clientToken **required** `string`: The idempotency token used to make this request idempotent. 
  * description `string`: The description of the infrastructure configuration. 
  * instanceProfileName **required** `string`: The instance profile to associate with the instance used to customize your EC2 AMI. 
  * instanceTypes `array`: The instance types of the infrastructure configuration. You can specify one or more instance types to use for this build. The service will pick one of these instance types based on availability. 
    * items [InstanceType](#instancetype)
  * keyPair `string`: The key pair of the infrastructure configuration. This can be used to log on to and debug the instance used to create your image. 
  * logging `object`: Logging configuration defines where Image Builder uploads your logs.
    * s3Logs
      * s3BucketName
      * s3KeyPrefix
  * name **required** `string`: The name of the infrastructure configuration. 
  * resourceTags `object`: The tags attached to the resource created by Image Builder.
  * securityGroupIds `array`: The security group IDs to associate with the instance used to customize your EC2 AMI. 
    * items [NonEmptyString](#nonemptystring)
  * snsTopicArn `string`: The SNS topic on which to send image build events. 
  * subnetId `string`: The subnet ID in which to place the instance used to customize your EC2 AMI. 
  * terminateInstanceOnFailure `boolean`: The terminate instance on failure setting of the infrastructure configuration. Set to false if you want Image Builder to retain the instance used to configure your AMI if the build or test phase of your workflow fails. 

#### Output
* output [CreateInfrastructureConfigurationResponse](#createinfrastructureconfigurationresponse)

### DeleteComponent



```js
amazonaws_imagebuilder.DeleteComponent({
  "componentBuildVersionArn": ""
}, context)
```

#### Input
* input `object`
  * componentBuildVersionArn **required** `string`

#### Output
* output [DeleteComponentResponse](#deletecomponentresponse)

### DeleteContainerRecipe



```js
amazonaws_imagebuilder.DeleteContainerRecipe({
  "containerRecipeArn": ""
}, context)
```

#### Input
* input `object`
  * containerRecipeArn **required** `string`

#### Output
* output [DeleteContainerRecipeResponse](#deletecontainerreciperesponse)

### DeleteDistributionConfiguration



```js
amazonaws_imagebuilder.DeleteDistributionConfiguration({
  "distributionConfigurationArn": ""
}, context)
```

#### Input
* input `object`
  * distributionConfigurationArn **required** `string`

#### Output
* output [DeleteDistributionConfigurationResponse](#deletedistributionconfigurationresponse)

### DeleteImage



```js
amazonaws_imagebuilder.DeleteImage({
  "imageBuildVersionArn": ""
}, context)
```

#### Input
* input `object`
  * imageBuildVersionArn **required** `string`

#### Output
* output [DeleteImageResponse](#deleteimageresponse)

### DeleteImagePipeline



```js
amazonaws_imagebuilder.DeleteImagePipeline({
  "imagePipelineArn": ""
}, context)
```

#### Input
* input `object`
  * imagePipelineArn **required** `string`

#### Output
* output [DeleteImagePipelineResponse](#deleteimagepipelineresponse)

### DeleteImageRecipe



```js
amazonaws_imagebuilder.DeleteImageRecipe({
  "imageRecipeArn": ""
}, context)
```

#### Input
* input `object`
  * imageRecipeArn **required** `string`

#### Output
* output [DeleteImageRecipeResponse](#deleteimagereciperesponse)

### DeleteInfrastructureConfiguration



```js
amazonaws_imagebuilder.DeleteInfrastructureConfiguration({
  "infrastructureConfigurationArn": ""
}, context)
```

#### Input
* input `object`
  * infrastructureConfigurationArn **required** `string`

#### Output
* output [DeleteInfrastructureConfigurationResponse](#deleteinfrastructureconfigurationresponse)

### GetComponent



```js
amazonaws_imagebuilder.GetComponent({
  "componentBuildVersionArn": ""
}, context)
```

#### Input
* input `object`
  * componentBuildVersionArn **required** `string`

#### Output
* output [GetComponentResponse](#getcomponentresponse)

### GetComponentPolicy



```js
amazonaws_imagebuilder.GetComponentPolicy({
  "componentArn": ""
}, context)
```

#### Input
* input `object`
  * componentArn **required** `string`

#### Output
* output [GetComponentPolicyResponse](#getcomponentpolicyresponse)

### GetContainerRecipe



```js
amazonaws_imagebuilder.GetContainerRecipe({
  "containerRecipeArn": ""
}, context)
```

#### Input
* input `object`
  * containerRecipeArn **required** `string`

#### Output
* output [GetContainerRecipeResponse](#getcontainerreciperesponse)

### GetContainerRecipePolicy



```js
amazonaws_imagebuilder.GetContainerRecipePolicy({
  "containerRecipeArn": ""
}, context)
```

#### Input
* input `object`
  * containerRecipeArn **required** `string`

#### Output
* output [GetContainerRecipePolicyResponse](#getcontainerrecipepolicyresponse)

### GetDistributionConfiguration



```js
amazonaws_imagebuilder.GetDistributionConfiguration({
  "distributionConfigurationArn": ""
}, context)
```

#### Input
* input `object`
  * distributionConfigurationArn **required** `string`

#### Output
* output [GetDistributionConfigurationResponse](#getdistributionconfigurationresponse)

### GetImage



```js
amazonaws_imagebuilder.GetImage({
  "imageBuildVersionArn": ""
}, context)
```

#### Input
* input `object`
  * imageBuildVersionArn **required** `string`

#### Output
* output [GetImageResponse](#getimageresponse)

### GetImagePipeline



```js
amazonaws_imagebuilder.GetImagePipeline({
  "imagePipelineArn": ""
}, context)
```

#### Input
* input `object`
  * imagePipelineArn **required** `string`

#### Output
* output [GetImagePipelineResponse](#getimagepipelineresponse)

### GetImagePolicy



```js
amazonaws_imagebuilder.GetImagePolicy({
  "imageArn": ""
}, context)
```

#### Input
* input `object`
  * imageArn **required** `string`

#### Output
* output [GetImagePolicyResponse](#getimagepolicyresponse)

### GetImageRecipe



```js
amazonaws_imagebuilder.GetImageRecipe({
  "imageRecipeArn": ""
}, context)
```

#### Input
* input `object`
  * imageRecipeArn **required** `string`

#### Output
* output [GetImageRecipeResponse](#getimagereciperesponse)

### GetImageRecipePolicy



```js
amazonaws_imagebuilder.GetImageRecipePolicy({
  "imageRecipeArn": ""
}, context)
```

#### Input
* input `object`
  * imageRecipeArn **required** `string`

#### Output
* output [GetImageRecipePolicyResponse](#getimagerecipepolicyresponse)

### GetInfrastructureConfiguration



```js
amazonaws_imagebuilder.GetInfrastructureConfiguration({
  "infrastructureConfigurationArn": ""
}, context)
```

#### Input
* input `object`
  * infrastructureConfigurationArn **required** `string`

#### Output
* output [GetInfrastructureConfigurationResponse](#getinfrastructureconfigurationresponse)

### ImportComponent



```js
amazonaws_imagebuilder.ImportComponent({
  "name": "",
  "semanticVersion": "",
  "type": "",
  "format": "",
  "platform": "",
  "clientToken": ""
}, context)
```

#### Input
* input `object`
  * tags `object`: The tags of the component. 
  * changeDescription `string`: The change description of the component. Describes what change has been made in this version, or what makes this version different from other versions of this component. 
  * clientToken **required** `string`: The idempotency token of the component. 
  * data `string`: The data of the component. Used to specify the data inline. Either <code>data</code> or <code>uri</code> can be used to specify the data within the component.
  * description `string`: The description of the component. Describes the contents of the component. 
  * format **required** `string` (values: SHELL): The format of the resource that you want to import as a component. 
  * kmsKeyId `string`: The ID of the KMS key that should be used to encrypt this component. 
  * name **required** `string`:  The name of the component. 
  * platform **required** `string` (values: Windows, Linux): The platform of the component. 
  * semanticVersion **required** `string`: The semantic version of the component. This version follows the semantic version syntax. For example, major.minor.patch. This could be versioned like software (2.0.1) or like a date (2019.12.01).
  * type **required** `string` (values: BUILD, TEST): The type of the component denotes whether the component is used to build the image or only to test it. 
  * uri `string`: The uri of the component. Must be an S3 URL and the requester must have permission to access the S3 bucket. If you use S3, you can specify component content up to your service quota. Either <code>data</code> or <code>uri</code> can be used to specify the data within the component. 

#### Output
* output [ImportComponentResponse](#importcomponentresponse)

### ListComponentBuildVersions



```js
amazonaws_imagebuilder.ListComponentBuildVersions({
  "componentVersionArn": ""
}, context)
```

#### Input
* input `object`
  * maxResults `string`
  * nextToken `string`
  * componentVersionArn **required** `string`: The component version Amazon Resource Name (ARN) whose versions you want to list. 
  * maxResults `integer`: The maximum items to return in a request. 
  * nextToken `string`: A token to specify where to start paginating. This is the NextToken from a previously truncated response. 

#### Output
* output [ListComponentBuildVersionsResponse](#listcomponentbuildversionsresponse)

### ListComponents



```js
amazonaws_imagebuilder.ListComponents({}, context)
```

#### Input
* input `object`
  * maxResults `string`
  * nextToken `string`
  * byName `boolean`: Returns the list of component build versions for the specified semantic version.
  * filters `array`: The filters. 
    * items [Filter](#filter)
  * maxResults `integer`: The maximum items to return in a request. 
  * nextToken `string`: A token to specify where to start paginating. This is the NextToken from a previously truncated response. 
  * owner `string` (values: Self, Shared, Amazon): The owner defines which components you want to list. By default, this request will only show components owned by your account. You can use this field to specify if you want to view components owned by yourself, by Amazon, or those components that have been shared with you by other customers. 

#### Output
* output [ListComponentsResponse](#listcomponentsresponse)

### ListContainerRecipes



```js
amazonaws_imagebuilder.ListContainerRecipes({}, context)
```

#### Input
* input `object`
  * maxResults `string`
  * nextToken `string`
  * filters `array`: Request filters that are used to narrow the list of container images that are returned.
    * items [Filter](#filter)
  * maxResults `integer`: The maximum number of results to return in the list.
  * nextToken `string`: Provides a token for pagination, which determines where to begin the next set of results when the current set reaches the maximum for one request.
  * owner `string` (values: Self, Shared, Amazon): Returns container recipes belonging to the specified owner, that have been shared with you. You can omit this field to return container recipes belonging to your account.

#### Output
* output [ListContainerRecipesResponse](#listcontainerrecipesresponse)

### ListDistributionConfigurations



```js
amazonaws_imagebuilder.ListDistributionConfigurations({}, context)
```

#### Input
* input `object`
  * maxResults `string`
  * nextToken `string`
  * filters `array`: <p>The filters. </p> <ul> <li> <p> <code>name</code> - The name of this distribution configuration.</p> </li> </ul>
    * items [Filter](#filter)
  * maxResults `integer`: The maximum items to return in a request. 
  * nextToken `string`: A token to specify where to start paginating. This is the NextToken from a previously truncated response. 

#### Output
* output [ListDistributionConfigurationsResponse](#listdistributionconfigurationsresponse)

### ListImageBuildVersions



```js
amazonaws_imagebuilder.ListImageBuildVersions({
  "imageVersionArn": ""
}, context)
```

#### Input
* input `object`
  * maxResults `string`
  * nextToken `string`
  * filters `array`: The filters. 
    * items [Filter](#filter)
  * imageVersionArn **required** `string`: The Amazon Resource Name (ARN) of the image whose build versions you want to retrieve. 
  * maxResults `integer`: The maximum items to return in a request. 
  * nextToken `string`: A token to specify where to start paginating. This is the NextToken from a previously truncated response. 

#### Output
* output [ListImageBuildVersionsResponse](#listimagebuildversionsresponse)

### ListImagePipelineImages



```js
amazonaws_imagebuilder.ListImagePipelineImages({
  "imagePipelineArn": ""
}, context)
```

#### Input
* input `object`
  * maxResults `string`
  * nextToken `string`
  * filters `array`: The filters. 
    * items [Filter](#filter)
  * imagePipelineArn **required** `string`: The Amazon Resource Name (ARN) of the image pipeline whose images you want to view. 
  * maxResults `integer`: The maximum items to return in a request. 
  * nextToken `string`: A token to specify where to start paginating. This is the NextToken from a previously truncated response. 

#### Output
* output [ListImagePipelineImagesResponse](#listimagepipelineimagesresponse)

### ListImagePipelines



```js
amazonaws_imagebuilder.ListImagePipelines({}, context)
```

#### Input
* input `object`
  * maxResults `string`
  * nextToken `string`
  * filters `array`: The filters. 
    * items [Filter](#filter)
  * maxResults `integer`: The maximum items to return in a request. 
  * nextToken `string`: A token to specify where to start paginating. This is the NextToken from a previously truncated response. 

#### Output
* output [ListImagePipelinesResponse](#listimagepipelinesresponse)

### ListImageRecipes



```js
amazonaws_imagebuilder.ListImageRecipes({}, context)
```

#### Input
* input `object`
  * maxResults `string`
  * nextToken `string`
  * filters `array`: The filters. 
    * items [Filter](#filter)
  * maxResults `integer`: The maximum items to return in a request. 
  * nextToken `string`: A token to specify where to start paginating. This is the NextToken from a previously truncated response. 
  * owner `string` (values: Self, Shared, Amazon): The owner defines which image recipes you want to list. By default, this request will only show image recipes owned by your account. You can use this field to specify if you want to view image recipes owned by yourself, by Amazon, or those image recipes that have been shared with you by other customers. 

#### Output
* output [ListImageRecipesResponse](#listimagerecipesresponse)

### ListImages



```js
amazonaws_imagebuilder.ListImages({}, context)
```

#### Input
* input `object`
  * maxResults `string`
  * nextToken `string`
  * byName `boolean`: Requests a list of images with a specific recipe name.
  * filters `array`: The filters. 
    * items [Filter](#filter)
  * includeDeprecated `boolean`: Includes deprecated images in the response list.
  * maxResults `integer`: The maximum items to return in a request. 
  * nextToken `string`: A token to specify where to start paginating. This is the NextToken from a previously truncated response. 
  * owner `string` (values: Self, Shared, Amazon): The owner defines which images you want to list. By default, this request will only show images owned by your account. You can use this field to specify if you want to view images owned by yourself, by Amazon, or those images that have been shared with you by other customers. 

#### Output
* output [ListImagesResponse](#listimagesresponse)

### ListInfrastructureConfigurations



```js
amazonaws_imagebuilder.ListInfrastructureConfigurations({}, context)
```

#### Input
* input `object`
  * maxResults `string`
  * nextToken `string`
  * filters `array`: The filters. 
    * items [Filter](#filter)
  * maxResults `integer`: The maximum items to return in a request. 
  * nextToken `string`: A token to specify where to start paginating. This is the NextToken from a previously truncated response. 

#### Output
* output [ListInfrastructureConfigurationsResponse](#listinfrastructureconfigurationsresponse)

### PutComponentPolicy



```js
amazonaws_imagebuilder.PutComponentPolicy({
  "componentArn": "",
  "policy": ""
}, context)
```

#### Input
* input `object`
  * componentArn **required** `string`: The Amazon Resource Name (ARN) of the component that this policy should be applied to. 
  * policy **required** `string`: The policy to apply. 

#### Output
* output [PutComponentPolicyResponse](#putcomponentpolicyresponse)

### PutContainerRecipePolicy



```js
amazonaws_imagebuilder.PutContainerRecipePolicy({
  "containerRecipeArn": "",
  "policy": ""
}, context)
```

#### Input
* input `object`
  * containerRecipeArn **required** `string`: The Amazon Resource Name (ARN) of the container recipe that this policy should be applied to.
  * policy **required** `string`: The policy to apply to the container recipe.

#### Output
* output [PutContainerRecipePolicyResponse](#putcontainerrecipepolicyresponse)

### PutImagePolicy



```js
amazonaws_imagebuilder.PutImagePolicy({
  "imageArn": "",
  "policy": ""
}, context)
```

#### Input
* input `object`
  * imageArn **required** `string`: The Amazon Resource Name (ARN) of the image that this policy should be applied to. 
  * policy **required** `string`: The policy to apply. 

#### Output
* output [PutImagePolicyResponse](#putimagepolicyresponse)

### PutImageRecipePolicy



```js
amazonaws_imagebuilder.PutImageRecipePolicy({
  "imageRecipeArn": "",
  "policy": ""
}, context)
```

#### Input
* input `object`
  * imageRecipeArn **required** `string`: The Amazon Resource Name (ARN) of the image recipe that this policy should be applied to. 
  * policy **required** `string`: The policy to apply. 

#### Output
* output [PutImageRecipePolicyResponse](#putimagerecipepolicyresponse)

### StartImagePipelineExecution



```js
amazonaws_imagebuilder.StartImagePipelineExecution({
  "imagePipelineArn": "",
  "clientToken": ""
}, context)
```

#### Input
* input `object`
  * clientToken **required** `string`: The idempotency token used to make this request idempotent. 
  * imagePipelineArn **required** `string`: The Amazon Resource Name (ARN) of the image pipeline that you want to manually invoke. 

#### Output
* output [StartImagePipelineExecutionResponse](#startimagepipelineexecutionresponse)

### UpdateDistributionConfiguration



```js
amazonaws_imagebuilder.UpdateDistributionConfiguration({
  "distributionConfigurationArn": "",
  "distributions": [],
  "clientToken": ""
}, context)
```

#### Input
* input `object`
  * clientToken **required** `string`: The idempotency token of the distribution configuration. 
  * description `string`: The description of the distribution configuration. 
  * distributionConfigurationArn **required** `string`: The Amazon Resource Name (ARN) of the distribution configuration that you want to update. 
  * distributions **required** `array`: The distributions of the distribution configuration. 
    * items [Distribution](#distribution)

#### Output
* output [UpdateDistributionConfigurationResponse](#updatedistributionconfigurationresponse)

### UpdateImagePipeline



```js
amazonaws_imagebuilder.UpdateImagePipeline({
  "imagePipelineArn": "",
  "infrastructureConfigurationArn": "",
  "clientToken": ""
}, context)
```

#### Input
* input `object`
  * clientToken **required** `string`: The idempotency token used to make this request idempotent. 
  * containerRecipeArn `string`: The Amazon Resource Name (ARN) of the container pipeline to update.
  * description `string`: The description of the image pipeline. 
  * distributionConfigurationArn `string`: The Amazon Resource Name (ARN) of the distribution configuration that will be used to configure and distribute images updated by this image pipeline. 
  * enhancedImageMetadataEnabled `boolean`:  Collects additional information about the image being created, including the operating system (OS) version and package list. This information is used to enhance the overall experience of using EC2 Image Builder. Enabled by default. 
  * imagePipelineArn **required** `string`: The Amazon Resource Name (ARN) of the image pipeline that you want to update. 
  * imageRecipeArn `string`: The Amazon Resource Name (ARN) of the image recipe that will be used to configure images updated by this image pipeline. 
  * imageTestsConfiguration `object`: Image tests configuration.
    * imageTestsEnabled
    * timeoutMinutes
  * infrastructureConfigurationArn **required** `string`: The Amazon Resource Name (ARN) of the infrastructure configuration that will be used to build images updated by this image pipeline. 
  * schedule `object`: A schedule configures how often and when a pipeline will automatically create a new image. 
    * pipelineExecutionStartCondition
    * scheduleExpression
  * status `string` (values: DISABLED, ENABLED): The status of the image pipeline. 

#### Output
* output [UpdateImagePipelineResponse](#updateimagepipelineresponse)

### UpdateInfrastructureConfiguration



```js
amazonaws_imagebuilder.UpdateInfrastructureConfiguration({
  "infrastructureConfigurationArn": "",
  "instanceProfileName": "",
  "clientToken": ""
}, context)
```

#### Input
* input `object`
  * clientToken **required** `string`: The idempotency token used to make this request idempotent. 
  * description `string`: The description of the infrastructure configuration. 
  * infrastructureConfigurationArn **required** `string`: The Amazon Resource Name (ARN) of the infrastructure configuration that you want to update. 
  * instanceProfileName **required** `string`: The instance profile to associate with the instance used to customize your EC2 AMI. 
  * instanceTypes `array`: The instance types of the infrastructure configuration. You can specify one or more instance types to use for this build. The service will pick one of these instance types based on availability. 
    * items [InstanceType](#instancetype)
  * keyPair `string`: The key pair of the infrastructure configuration. This can be used to log on to and debug the instance used to create your image. 
  * logging `object`: Logging configuration defines where Image Builder uploads your logs.
    * s3Logs
      * s3BucketName
      * s3KeyPrefix
  * resourceTags `object`: The tags attached to the resource created by Image Builder.
  * securityGroupIds `array`: The security group IDs to associate with the instance used to customize your EC2 AMI. 
    * items [NonEmptyString](#nonemptystring)
  * snsTopicArn `string`: The SNS topic on which to send image build events. 
  * subnetId `string`: The subnet ID to place the instance used to customize your EC2 AMI in. 
  * terminateInstanceOnFailure `boolean`: The terminate instance on failure setting of the infrastructure configuration. Set to false if you want Image Builder to retain the instance used to configure your AMI if the build or test phase of your workflow fails. 

#### Output
* output [UpdateInfrastructureConfigurationResponse](#updateinfrastructureconfigurationresponse)

### ListTagsForResource



```js
amazonaws_imagebuilder.ListTagsForResource({
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
amazonaws_imagebuilder.TagResource({
  "resourceArn": "",
  "tags": {}
}, context)
```

#### Input
* input `object`
  * resourceArn **required** `string`
  * tags **required** `object`: The tags to apply to the resource. 

#### Output
* output [TagResourceResponse](#tagresourceresponse)

### UntagResource



```js
amazonaws_imagebuilder.UntagResource({
  "resourceArn": "",
  "tagKeys": []
}, context)
```

#### Input
* input `object`
  * resourceArn **required** `string`
  * tagKeys **required** `array`

#### Output
* output [UntagResourceResponse](#untagresourceresponse)



## Definitions

### AccountId
* AccountId `string`

### AccountList
* AccountList `array`
  * items [AccountId](#accountid)

### Ami
* Ami `object`:  Details of an EC2 AMI. 
  * accountId
  * description
  * image
  * name
  * region
  * state [ImageState](#imagestate)

### AmiDistributionConfiguration
* AmiDistributionConfiguration `object`:  Define and configure the output AMIs of the pipeline. 
  * amiTags
  * description
  * kmsKeyId
  * launchPermission
    * userGroups
      * items [NonEmptyString](#nonemptystring)
    * userIds
      * items [AccountId](#accountid)
  * name
  * targetAccountIds
    * items [AccountId](#accountid)

### AmiList
* AmiList `array`
  * items [Ami](#ami)

### AmiNameString
* AmiNameString `string`

### Arn
* Arn `string`

### Boolean
* Boolean `boolean`

### CallRateLimitExceededException


### CancelImageCreationRequest
* CancelImageCreationRequest `object`
  * clientToken **required**
  * imageBuildVersionArn **required**

### CancelImageCreationResponse
* CancelImageCreationResponse `object`
  * clientToken
  * imageBuildVersionArn
  * requestId

### ClientException


### ClientToken
* ClientToken `string`

### Component
* Component `object`: A detailed view of a component.
  * tags
  * arn
  * changeDescription
  * data
  * dateCreated
  * description
  * encrypted
  * kmsKeyId
  * name
  * owner
  * platform
  * supportedOsVersions
    * items [OsVersion](#osversion)
  * type
  * version

### ComponentBuildVersionArn
* ComponentBuildVersionArn `string`

### ComponentConfiguration
* ComponentConfiguration `object`:  Configuration details of the component. 
  * componentArn **required**

### ComponentConfigurationList
* ComponentConfigurationList `array`
  * items [ComponentConfiguration](#componentconfiguration)

### ComponentData
* ComponentData `string`

### ComponentFormat
* ComponentFormat `string` (values: SHELL)

### ComponentSummary
* ComponentSummary `object`: A high-level summary of a component.
  * tags
  * arn
  * changeDescription
  * dateCreated
  * description
  * name
  * owner
  * platform
  * supportedOsVersions
    * items [OsVersion](#osversion)
  * type
  * version

### ComponentSummaryList
* ComponentSummaryList `array`
  * items [ComponentSummary](#componentsummary)

### ComponentType
* ComponentType `string` (values: BUILD, TEST)

### ComponentVersion
* ComponentVersion `object`: A high-level overview of a component semantic version.
  * arn
  * dateCreated
  * description
  * name
  * owner
  * platform
  * supportedOsVersions
    * items [OsVersion](#osversion)
  * type
  * version

### ComponentVersionArn
* ComponentVersionArn `string`

### ComponentVersionArnOrBuildVersionArn
* ComponentVersionArnOrBuildVersionArn `string`

### ComponentVersionList
* ComponentVersionList `array`
  * items [ComponentVersion](#componentversion)

### Container
* Container `object`: A container encapsulates the runtime environment for an application.
  * imageUris
    * items [NonEmptyString](#nonemptystring)
  * region

### ContainerDistributionConfiguration
* ContainerDistributionConfiguration `object`: Container distribution settings for encryption, licensing, and sharing in a specific Region.
  * containerTags
    * items [NonEmptyString](#nonemptystring)
  * description
  * targetRepository **required**
    * repositoryName **required**
    * service **required**

### ContainerList
* ContainerList `array`
  * items [Container](#container)

### ContainerRecipe
* ContainerRecipe `object`: A container recipe.
  * components
    * items [ComponentConfiguration](#componentconfiguration)
  * tags
  * arn
  * containerType
  * dateCreated
  * description
  * dockerfileTemplateData
  * encrypted
  * kmsKeyId
  * name
  * owner
  * parentImage
  * platform
  * targetRepository
    * repositoryName **required**
    * service **required**
  * version
  * workingDirectory

### ContainerRecipeArn
* ContainerRecipeArn `string`

### ContainerRecipeSummary
* ContainerRecipeSummary `object`: A summary of a container recipe
  * tags
  * arn
  * containerType
  * dateCreated
  * name
  * owner
  * parentImage
  * platform

### ContainerRecipeSummaryList
* ContainerRecipeSummaryList `array`
  * items [ContainerRecipeSummary](#containerrecipesummary)

### ContainerRepositoryService
* ContainerRepositoryService `string` (values: ECR)

### ContainerType
* ContainerType `string` (values: DOCKER)

### CreateComponentRequest
* CreateComponentRequest `object`
  * tags
  * changeDescription
  * clientToken **required**
  * data
  * description
  * kmsKeyId
  * name **required**
  * platform **required**
  * semanticVersion **required**
  * supportedOsVersions
    * items [OsVersion](#osversion)
  * uri

### CreateComponentResponse
* CreateComponentResponse `object`
  * clientToken
  * componentBuildVersionArn
  * requestId

### CreateContainerRecipeRequest
* CreateContainerRecipeRequest `object`
  * components **required**
    * items [ComponentConfiguration](#componentconfiguration)
  * tags
  * clientToken **required**
  * containerType **required**
  * description
  * dockerfileTemplateData **required**
  * dockerfileTemplateUri
  * imageOsVersionOverride
  * kmsKeyId
  * name **required**
  * parentImage **required**
  * platformOverride
  * semanticVersion **required**
  * targetRepository **required**
    * repositoryName **required**
    * service **required**
  * workingDirectory

### CreateContainerRecipeResponse
* CreateContainerRecipeResponse `object`
  * clientToken
  * containerRecipeArn
  * requestId

### CreateDistributionConfigurationRequest
* CreateDistributionConfigurationRequest `object`
  * tags
  * clientToken **required**
  * description
  * distributions **required**
    * items [Distribution](#distribution)
  * name **required**

### CreateDistributionConfigurationResponse
* CreateDistributionConfigurationResponse `object`
  * clientToken
  * distributionConfigurationArn
  * requestId

### CreateImagePipelineRequest
* CreateImagePipelineRequest `object`
  * tags
  * clientToken **required**
  * containerRecipeArn
  * description
  * distributionConfigurationArn
  * enhancedImageMetadataEnabled
  * imageRecipeArn
  * imageTestsConfiguration
    * imageTestsEnabled
    * timeoutMinutes
  * infrastructureConfigurationArn **required**
  * name **required**
  * schedule
    * pipelineExecutionStartCondition
    * scheduleExpression
  * status

### CreateImagePipelineResponse
* CreateImagePipelineResponse `object`
  * clientToken
  * imagePipelineArn
  * requestId

### CreateImageRecipeRequest
* CreateImageRecipeRequest `object`
  * components **required**
    * items [ComponentConfiguration](#componentconfiguration)
  * tags
  * blockDeviceMappings
    * items [InstanceBlockDeviceMapping](#instanceblockdevicemapping)
  * clientToken **required**
  * description
  * name **required**
  * parentImage **required**
  * semanticVersion **required**
  * workingDirectory

### CreateImageRecipeResponse
* CreateImageRecipeResponse `object`
  * clientToken
  * imageRecipeArn
  * requestId

### CreateImageRequest
* CreateImageRequest `object`
  * tags
  * clientToken **required**
  * containerRecipeArn
  * distributionConfigurationArn
  * enhancedImageMetadataEnabled
  * imageRecipeArn
  * imageTestsConfiguration
    * imageTestsEnabled
    * timeoutMinutes
  * infrastructureConfigurationArn **required**

### CreateImageResponse
* CreateImageResponse `object`
  * clientToken
  * imageBuildVersionArn
  * requestId

### CreateInfrastructureConfigurationRequest
* CreateInfrastructureConfigurationRequest `object`
  * tags
  * clientToken **required**
  * description
  * instanceProfileName **required**
  * instanceTypes
    * items [InstanceType](#instancetype)
  * keyPair
  * logging
    * s3Logs
      * s3BucketName
      * s3KeyPrefix
  * name **required**
  * resourceTags
  * securityGroupIds
    * items [NonEmptyString](#nonemptystring)
  * snsTopicArn
  * subnetId
  * terminateInstanceOnFailure

### CreateInfrastructureConfigurationResponse
* CreateInfrastructureConfigurationResponse `object`
  * clientToken
  * infrastructureConfigurationArn
  * requestId

### DateTime
* DateTime `string`

### DeleteComponentRequest
* DeleteComponentRequest `object`

### DeleteComponentResponse
* DeleteComponentResponse `object`
  * componentBuildVersionArn
  * requestId

### DeleteContainerRecipeRequest
* DeleteContainerRecipeRequest `object`

### DeleteContainerRecipeResponse
* DeleteContainerRecipeResponse `object`
  * containerRecipeArn
  * requestId

### DeleteDistributionConfigurationRequest
* DeleteDistributionConfigurationRequest `object`

### DeleteDistributionConfigurationResponse
* DeleteDistributionConfigurationResponse `object`
  * distributionConfigurationArn
  * requestId

### DeleteImagePipelineRequest
* DeleteImagePipelineRequest `object`

### DeleteImagePipelineResponse
* DeleteImagePipelineResponse `object`
  * imagePipelineArn
  * requestId

### DeleteImageRecipeRequest
* DeleteImageRecipeRequest `object`

### DeleteImageRecipeResponse
* DeleteImageRecipeResponse `object`
  * imageRecipeArn
  * requestId

### DeleteImageRequest
* DeleteImageRequest `object`

### DeleteImageResponse
* DeleteImageResponse `object`
  * imageBuildVersionArn
  * requestId

### DeleteInfrastructureConfigurationRequest
* DeleteInfrastructureConfigurationRequest `object`

### DeleteInfrastructureConfigurationResponse
* DeleteInfrastructureConfigurationResponse `object`
  * infrastructureConfigurationArn
  * requestId

### Distribution
* Distribution `object`:  Defines the settings for a specific Region. 
  * amiDistributionConfiguration
    * amiTags
    * description
    * kmsKeyId
    * launchPermission
      * userGroups
        * items [NonEmptyString](#nonemptystring)
      * userIds
        * items [AccountId](#accountid)
    * name
    * targetAccountIds
      * items [AccountId](#accountid)
  * containerDistributionConfiguration
    * containerTags
      * items [NonEmptyString](#nonemptystring)
    * description
    * targetRepository **required**
      * repositoryName **required**
      * service **required**
  * licenseConfigurationArns
    * items [LicenseConfigurationArn](#licenseconfigurationarn)
  * region **required**

### DistributionConfiguration
* DistributionConfiguration `object`: A distribution configuration.
  * tags
  * arn
  * dateCreated
  * dateUpdated
  * description
  * distributions
    * items [Distribution](#distribution)
  * name
  * timeoutMinutes **required**

### DistributionConfigurationArn
* DistributionConfigurationArn `string`

### DistributionConfigurationSummary
* DistributionConfigurationSummary `object`: A high-level overview of a distribution configuration.
  * tags
  * arn
  * dateCreated
  * dateUpdated
  * description
  * name
  * regions
    * items [NonEmptyString](#nonemptystring)

### DistributionConfigurationSummaryList
* DistributionConfigurationSummaryList `array`
  * items [DistributionConfigurationSummary](#distributionconfigurationsummary)

### DistributionList
* DistributionList `array`
  * items [Distribution](#distribution)

### DistributionTimeoutMinutes
* DistributionTimeoutMinutes `integer`

### DockerFileTemplate
* DockerFileTemplate `string`

### EbsInstanceBlockDeviceSpecification
* EbsInstanceBlockDeviceSpecification `object`: Amazon EBS-specific block device mapping specifications.
  * deleteOnTermination
  * encrypted
  * iops
  * kmsKeyId
  * snapshotId
  * volumeSize
  * volumeType

### EbsIopsInteger
* EbsIopsInteger `integer`

### EbsVolumeSizeInteger
* EbsVolumeSizeInteger `integer`

### EbsVolumeType
* EbsVolumeType `string` (values: standard, io1, io2, gp2, sc1, st1)

### EmptyString
* EmptyString `string`

### Filter
* Filter `object`: A filter name and value pair that is used to return a more specific list of results from a list operation. Filters can be used to match a set of resources by specific criteria, such as tags, attributes, or IDs. 
  * name
  * values
    * items [FilterValue](#filtervalue)

### FilterList
* FilterList `array`
  * items [Filter](#filter)

### FilterName
* FilterName `string`

### FilterValue
* FilterValue `string`

### FilterValues
* FilterValues `array`
  * items [FilterValue](#filtervalue)

### ForbiddenException


### GetComponentPolicyRequest
* GetComponentPolicyRequest `object`

### GetComponentPolicyResponse
* GetComponentPolicyResponse `object`
  * policy
  * requestId

### GetComponentRequest
* GetComponentRequest `object`

### GetComponentResponse
* GetComponentResponse `object`
  * component
    * tags
    * arn
    * changeDescription
    * data
    * dateCreated
    * description
    * encrypted
    * kmsKeyId
    * name
    * owner
    * platform
    * supportedOsVersions
      * items [OsVersion](#osversion)
    * type
    * version
  * requestId

### GetContainerRecipePolicyRequest
* GetContainerRecipePolicyRequest `object`

### GetContainerRecipePolicyResponse
* GetContainerRecipePolicyResponse `object`
  * policy
  * requestId

### GetContainerRecipeRequest
* GetContainerRecipeRequest `object`

### GetContainerRecipeResponse
* GetContainerRecipeResponse `object`
  * containerRecipe
    * components
      * items [ComponentConfiguration](#componentconfiguration)
    * tags
    * arn
    * containerType
    * dateCreated
    * description
    * dockerfileTemplateData
    * encrypted
    * kmsKeyId
    * name
    * owner
    * parentImage
    * platform
    * targetRepository
      * repositoryName **required**
      * service **required**
    * version
    * workingDirectory
  * requestId

### GetDistributionConfigurationRequest
* GetDistributionConfigurationRequest `object`

### GetDistributionConfigurationResponse
* GetDistributionConfigurationResponse `object`
  * distributionConfiguration
    * tags
    * arn
    * dateCreated
    * dateUpdated
    * description
    * distributions
      * items [Distribution](#distribution)
    * name
    * timeoutMinutes **required**
  * requestId

### GetImagePipelineRequest
* GetImagePipelineRequest `object`

### GetImagePipelineResponse
* GetImagePipelineResponse `object`
  * imagePipeline
    * tags
    * arn
    * containerRecipeArn
    * dateCreated
    * dateLastRun
    * dateNextRun
    * dateUpdated
    * description
    * distributionConfigurationArn
    * enhancedImageMetadataEnabled
    * imageRecipeArn
    * imageTestsConfiguration
      * imageTestsEnabled
      * timeoutMinutes
    * infrastructureConfigurationArn
    * name
    * platform
    * schedule
      * pipelineExecutionStartCondition
      * scheduleExpression
    * status
  * requestId

### GetImagePolicyRequest
* GetImagePolicyRequest `object`

### GetImagePolicyResponse
* GetImagePolicyResponse `object`
  * policy
  * requestId

### GetImageRecipePolicyRequest
* GetImageRecipePolicyRequest `object`

### GetImageRecipePolicyResponse
* GetImageRecipePolicyResponse `object`
  * policy
  * requestId

### GetImageRecipeRequest
* GetImageRecipeRequest `object`

### GetImageRecipeResponse
* GetImageRecipeResponse `object`
  * imageRecipe
    * components
      * items [ComponentConfiguration](#componentconfiguration)
    * tags
    * arn
    * blockDeviceMappings
      * items [InstanceBlockDeviceMapping](#instanceblockdevicemapping)
    * dateCreated
    * description
    * name
    * owner
    * parentImage
    * platform
    * type
    * version
    * workingDirectory
  * requestId

### GetImageRequest
* GetImageRequest `object`

### GetImageResponse
* GetImageResponse `object`
  * image
    * tags
    * arn
    * containerRecipe
      * components
        * items [ComponentConfiguration](#componentconfiguration)
      * tags
      * arn
      * containerType
      * dateCreated
      * description
      * dockerfileTemplateData
      * encrypted
      * kmsKeyId
      * name
      * owner
      * parentImage
      * platform
      * targetRepository
        * repositoryName **required**
        * service **required**
      * version
      * workingDirectory
    * dateCreated
    * distributionConfiguration
      * tags
      * arn
      * dateCreated
      * dateUpdated
      * description
      * distributions
        * items [Distribution](#distribution)
      * name
      * timeoutMinutes **required**
    * enhancedImageMetadataEnabled
    * imageRecipe
      * components
        * items [ComponentConfiguration](#componentconfiguration)
      * tags
      * arn
      * blockDeviceMappings
        * items [InstanceBlockDeviceMapping](#instanceblockdevicemapping)
      * dateCreated
      * description
      * name
      * owner
      * parentImage
      * platform
      * type
      * version
      * workingDirectory
    * imageTestsConfiguration
      * imageTestsEnabled
      * timeoutMinutes
    * infrastructureConfiguration
      * tags
      * arn
      * dateCreated
      * dateUpdated
      * description
      * instanceProfileName
      * instanceTypes
        * items [InstanceType](#instancetype)
      * keyPair
      * logging
        * s3Logs
          * s3BucketName
          * s3KeyPrefix
      * name
      * resourceTags
      * securityGroupIds
        * items [NonEmptyString](#nonemptystring)
      * snsTopicArn
      * subnetId
      * terminateInstanceOnFailure
    * name
    * osVersion
    * outputResources
      * amis
        * items [Ami](#ami)
      * containers
        * items [Container](#container)
    * platform
    * sourcePipelineArn
    * sourcePipelineName
    * state
      * reason
      * status
    * type
    * version
  * requestId

### GetInfrastructureConfigurationRequest
* GetInfrastructureConfigurationRequest `object`:  GetInfrastructureConfiguration request object. 

### GetInfrastructureConfigurationResponse
* GetInfrastructureConfigurationResponse `object`: GetInfrastructureConfiguration response object. 
  * infrastructureConfiguration
    * tags
    * arn
    * dateCreated
    * dateUpdated
    * description
    * instanceProfileName
    * instanceTypes
      * items [InstanceType](#instancetype)
    * keyPair
    * logging
      * s3Logs
        * s3BucketName
        * s3KeyPrefix
    * name
    * resourceTags
    * securityGroupIds
      * items [NonEmptyString](#nonemptystring)
    * snsTopicArn
    * subnetId
    * terminateInstanceOnFailure
  * requestId

### IdempotentParameterMismatchException


### Image
* Image `object`: An image build version.
  * tags
  * arn
  * containerRecipe
    * components
      * items [ComponentConfiguration](#componentconfiguration)
    * tags
    * arn
    * containerType
    * dateCreated
    * description
    * dockerfileTemplateData
    * encrypted
    * kmsKeyId
    * name
    * owner
    * parentImage
    * platform
    * targetRepository
      * repositoryName **required**
      * service **required**
    * version
    * workingDirectory
  * dateCreated
  * distributionConfiguration
    * tags
    * arn
    * dateCreated
    * dateUpdated
    * description
    * distributions
      * items [Distribution](#distribution)
    * name
    * timeoutMinutes **required**
  * enhancedImageMetadataEnabled
  * imageRecipe
    * components
      * items [ComponentConfiguration](#componentconfiguration)
    * tags
    * arn
    * blockDeviceMappings
      * items [InstanceBlockDeviceMapping](#instanceblockdevicemapping)
    * dateCreated
    * description
    * name
    * owner
    * parentImage
    * platform
    * type
    * version
    * workingDirectory
  * imageTestsConfiguration
    * imageTestsEnabled
    * timeoutMinutes
  * infrastructureConfiguration
    * tags
    * arn
    * dateCreated
    * dateUpdated
    * description
    * instanceProfileName
    * instanceTypes
      * items [InstanceType](#instancetype)
    * keyPair
    * logging
      * s3Logs
        * s3BucketName
        * s3KeyPrefix
    * name
    * resourceTags
    * securityGroupIds
      * items [NonEmptyString](#nonemptystring)
    * snsTopicArn
    * subnetId
    * terminateInstanceOnFailure
  * name
  * osVersion
  * outputResources
    * amis
      * items [Ami](#ami)
    * containers
      * items [Container](#container)
  * platform
  * sourcePipelineArn
  * sourcePipelineName
  * state
    * reason
    * status
  * type
  * version

### ImageBuildVersionArn
* ImageBuildVersionArn `string`

### ImageBuilderArn
* ImageBuilderArn `string`

### ImagePipeline
* ImagePipeline `object`: Details of an image pipeline.
  * tags
  * arn
  * containerRecipeArn
  * dateCreated
  * dateLastRun
  * dateNextRun
  * dateUpdated
  * description
  * distributionConfigurationArn
  * enhancedImageMetadataEnabled
  * imageRecipeArn
  * imageTestsConfiguration
    * imageTestsEnabled
    * timeoutMinutes
  * infrastructureConfigurationArn
  * name
  * platform
  * schedule
    * pipelineExecutionStartCondition
    * scheduleExpression
  * status

### ImagePipelineArn
* ImagePipelineArn `string`

### ImagePipelineList
* ImagePipelineList `array`
  * items [ImagePipeline](#imagepipeline)

### ImageRecipe
* ImageRecipe `object`: An image recipe.
  * components
    * items [ComponentConfiguration](#componentconfiguration)
  * tags
  * arn
  * blockDeviceMappings
    * items [InstanceBlockDeviceMapping](#instanceblockdevicemapping)
  * dateCreated
  * description
  * name
  * owner
  * parentImage
  * platform
  * type
  * version
  * workingDirectory

### ImageRecipeArn
* ImageRecipeArn `string`

### ImageRecipeSummary
* ImageRecipeSummary `object`: A summary of an image recipe.
  * tags
  * arn
  * dateCreated
  * name
  * owner
  * parentImage
  * platform

### ImageRecipeSummaryList
* ImageRecipeSummaryList `array`
  * items [ImageRecipeSummary](#imagerecipesummary)

### ImageState
* ImageState `object`:  Image state shows the image status and the reason for that status. 
  * reason
  * status

### ImageStatus
* ImageStatus `string` (values: PENDING, CREATING, BUILDING, TESTING, DISTRIBUTING, INTEGRATING, AVAILABLE, CANCELLED, FAILED, DEPRECATED, DELETED)

### ImageSummary
* ImageSummary `object`: An image summary.
  * tags
  * arn
  * dateCreated
  * name
  * osVersion
  * outputResources
    * amis
      * items [Ami](#ami)
    * containers
      * items [Container](#container)
  * owner
  * platform
  * state
    * reason
    * status
  * type
  * version

### ImageSummaryList
* ImageSummaryList `array`
  * items [ImageSummary](#imagesummary)

### ImageTestsConfiguration
* ImageTestsConfiguration `object`: Image tests configuration.
  * imageTestsEnabled
  * timeoutMinutes

### ImageTestsTimeoutMinutes
* ImageTestsTimeoutMinutes `integer`

### ImageType
* ImageType `string` (values: AMI, DOCKER)

### ImageVersion
* ImageVersion `object`: An image semantic version.
  * arn
  * dateCreated
  * name
  * osVersion
  * owner
  * platform
  * type
  * version

### ImageVersionArn
* ImageVersionArn `string`

### ImageVersionArnOrBuildVersionArn
* ImageVersionArnOrBuildVersionArn `string`

### ImageVersionList
* ImageVersionList `array`
  * items [ImageVersion](#imageversion)

### ImportComponentRequest
* ImportComponentRequest `object`
  * tags
  * changeDescription
  * clientToken **required**
  * data
  * description
  * format **required**
  * kmsKeyId
  * name **required**
  * platform **required**
  * semanticVersion **required**
  * type **required**
  * uri

### ImportComponentResponse
* ImportComponentResponse `object`
  * clientToken
  * componentBuildVersionArn
  * requestId

### InfrastructureConfiguration
* InfrastructureConfiguration `object`: Details of the infrastructure configuration.
  * tags
  * arn
  * dateCreated
  * dateUpdated
  * description
  * instanceProfileName
  * instanceTypes
    * items [InstanceType](#instancetype)
  * keyPair
  * logging
    * s3Logs
      * s3BucketName
      * s3KeyPrefix
  * name
  * resourceTags
  * securityGroupIds
    * items [NonEmptyString](#nonemptystring)
  * snsTopicArn
  * subnetId
  * terminateInstanceOnFailure

### InfrastructureConfigurationArn
* InfrastructureConfigurationArn `string`

### InfrastructureConfigurationSummary
* InfrastructureConfigurationSummary `object`: The infrastructure used when building EC2 AMIs.
  * tags
  * arn
  * dateCreated
  * dateUpdated
  * description
  * name
  * resourceTags

### InfrastructureConfigurationSummaryList
* InfrastructureConfigurationSummaryList `array`
  * items [InfrastructureConfigurationSummary](#infrastructureconfigurationsummary)

### InlineComponentData
* InlineComponentData `string`

### InlineDockerFileTemplate
* InlineDockerFileTemplate `string`

### InstanceBlockDeviceMapping
* InstanceBlockDeviceMapping `object`: Defines block device mappings for the instance used to configure your image.
  * deviceName
  * ebs
    * deleteOnTermination
    * encrypted
    * iops
    * kmsKeyId
    * snapshotId
    * volumeSize
    * volumeType
  * noDevice
  * virtualName

### InstanceBlockDeviceMappings
* InstanceBlockDeviceMappings `array`
  * items [InstanceBlockDeviceMapping](#instanceblockdevicemapping)

### InstanceType
* InstanceType `string`

### InstanceTypeList
* InstanceTypeList `array`
  * items [InstanceType](#instancetype)

### InvalidPaginationTokenException


### InvalidParameterCombinationException


### InvalidParameterException


### InvalidParameterValueException


### InvalidRequestException


### InvalidVersionNumberException


### LaunchPermissionConfiguration
* LaunchPermissionConfiguration `object`: Describes the configuration for a launch permission. The launch permission modification request is sent to the <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyImageAttribute.html">EC2 ModifyImageAttribute</a> API on behalf of the user for each Region they have selected to distribute the AMI. To make an AMI public, set the launch permission authorized accounts to <code>all</code>. See the examples for making an AMI public at <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyImageAttribute.html">EC2 ModifyImageAttribute</a>. 
  * userGroups
    * items [NonEmptyString](#nonemptystring)
  * userIds
    * items [AccountId](#accountid)

### LicenseConfigurationArn
* LicenseConfigurationArn `string`

### LicenseConfigurationArnList
* LicenseConfigurationArnList `array`
  * items [LicenseConfigurationArn](#licenseconfigurationarn)

### ListComponentBuildVersionsRequest
* ListComponentBuildVersionsRequest `object`
  * componentVersionArn **required**
  * maxResults
  * nextToken

### ListComponentBuildVersionsResponse
* ListComponentBuildVersionsResponse `object`
  * componentSummaryList
    * items [ComponentSummary](#componentsummary)
  * nextToken
  * requestId

### ListComponentsRequest
* ListComponentsRequest `object`
  * byName
  * filters
    * items [Filter](#filter)
  * maxResults
  * nextToken
  * owner

### ListComponentsResponse
* ListComponentsResponse `object`
  * componentVersionList
    * items [ComponentVersion](#componentversion)
  * nextToken
  * requestId

### ListContainerRecipesRequest
* ListContainerRecipesRequest `object`
  * filters
    * items [Filter](#filter)
  * maxResults
  * nextToken
  * owner

### ListContainerRecipesResponse
* ListContainerRecipesResponse `object`
  * containerRecipeSummaryList
    * items [ContainerRecipeSummary](#containerrecipesummary)
  * nextToken
  * requestId

### ListDistributionConfigurationsRequest
* ListDistributionConfigurationsRequest `object`
  * filters
    * items [Filter](#filter)
  * maxResults
  * nextToken

### ListDistributionConfigurationsResponse
* ListDistributionConfigurationsResponse `object`
  * distributionConfigurationSummaryList
    * items [DistributionConfigurationSummary](#distributionconfigurationsummary)
  * nextToken
  * requestId

### ListImageBuildVersionsRequest
* ListImageBuildVersionsRequest `object`
  * filters
    * items [Filter](#filter)
  * imageVersionArn **required**
  * maxResults
  * nextToken

### ListImageBuildVersionsResponse
* ListImageBuildVersionsResponse `object`
  * imageSummaryList
    * items [ImageSummary](#imagesummary)
  * nextToken
  * requestId

### ListImagePipelineImagesRequest
* ListImagePipelineImagesRequest `object`
  * filters
    * items [Filter](#filter)
  * imagePipelineArn **required**
  * maxResults
  * nextToken

### ListImagePipelineImagesResponse
* ListImagePipelineImagesResponse `object`
  * imageSummaryList
    * items [ImageSummary](#imagesummary)
  * nextToken
  * requestId

### ListImagePipelinesRequest
* ListImagePipelinesRequest `object`
  * filters
    * items [Filter](#filter)
  * maxResults
  * nextToken

### ListImagePipelinesResponse
* ListImagePipelinesResponse `object`
  * imagePipelineList
    * items [ImagePipeline](#imagepipeline)
  * nextToken
  * requestId

### ListImageRecipesRequest
* ListImageRecipesRequest `object`
  * filters
    * items [Filter](#filter)
  * maxResults
  * nextToken
  * owner

### ListImageRecipesResponse
* ListImageRecipesResponse `object`
  * imageRecipeSummaryList
    * items [ImageRecipeSummary](#imagerecipesummary)
  * nextToken
  * requestId

### ListImagesRequest
* ListImagesRequest `object`
  * byName
  * filters
    * items [Filter](#filter)
  * includeDeprecated
  * maxResults
  * nextToken
  * owner

### ListImagesResponse
* ListImagesResponse `object`
  * imageVersionList
    * items [ImageVersion](#imageversion)
  * nextToken
  * requestId

### ListInfrastructureConfigurationsRequest
* ListInfrastructureConfigurationsRequest `object`
  * filters
    * items [Filter](#filter)
  * maxResults
  * nextToken

### ListInfrastructureConfigurationsResponse
* ListInfrastructureConfigurationsResponse `object`
  * infrastructureConfigurationSummaryList
    * items [InfrastructureConfigurationSummary](#infrastructureconfigurationsummary)
  * nextToken
  * requestId

### ListTagsForResourceRequest
* ListTagsForResourceRequest `object`

### ListTagsForResourceResponse
* ListTagsForResourceResponse `object`
  * tags

### Logging
* Logging `object`: Logging configuration defines where Image Builder uploads your logs.
  * s3Logs
    * s3BucketName
    * s3KeyPrefix

### NonEmptyString
* NonEmptyString `string`

### NullableBoolean
* NullableBoolean `boolean`

### OsVersion
* OsVersion `string`

### OsVersionList
* OsVersionList `array`
  * items [OsVersion](#osversion)

### OutputResources
* OutputResources `object`: The resources produced by this image. 
  * amis
    * items [Ami](#ami)
  * containers
    * items [Container](#container)

### Ownership
* Ownership `string` (values: Self, Shared, Amazon)

### PaginationToken
* PaginationToken `string`

### PipelineExecutionStartCondition
* PipelineExecutionStartCondition `string` (values: EXPRESSION_MATCH_ONLY, EXPRESSION_MATCH_AND_DEPENDENCY_UPDATES_AVAILABLE)

### PipelineStatus
* PipelineStatus `string` (values: DISABLED, ENABLED)

### Platform
* Platform `string` (values: Windows, Linux)

### PutComponentPolicyRequest
* PutComponentPolicyRequest `object`
  * componentArn **required**
  * policy **required**

### PutComponentPolicyResponse
* PutComponentPolicyResponse `object`
  * componentArn
  * requestId

### PutContainerRecipePolicyRequest
* PutContainerRecipePolicyRequest `object`
  * containerRecipeArn **required**
  * policy **required**

### PutContainerRecipePolicyResponse
* PutContainerRecipePolicyResponse `object`
  * containerRecipeArn
  * requestId

### PutImagePolicyRequest
* PutImagePolicyRequest `object`
  * imageArn **required**
  * policy **required**

### PutImagePolicyResponse
* PutImagePolicyResponse `object`
  * imageArn
  * requestId

### PutImageRecipePolicyRequest
* PutImageRecipePolicyRequest `object`
  * imageRecipeArn **required**
  * policy **required**

### PutImageRecipePolicyResponse
* PutImageRecipePolicyResponse `object`
  * imageRecipeArn
  * requestId

### RegionList
* RegionList `array`
  * items [NonEmptyString](#nonemptystring)

### ResourceAlreadyExistsException


### ResourceDependencyException


### ResourceInUseException


### ResourceName
* ResourceName `string`

### ResourceNotFoundException


### ResourcePolicyDocument
* ResourcePolicyDocument `string`

### ResourceTagMap
* ResourceTagMap `object`

### RestrictedInteger
* RestrictedInteger `integer`

### S3Logs
* S3Logs `object`: Amazon S3 logging configuration.
  * s3BucketName
  * s3KeyPrefix

### Schedule
* Schedule `object`: A schedule configures how often and when a pipeline will automatically create a new image. 
  * pipelineExecutionStartCondition
  * scheduleExpression

### SecurityGroupIds
* SecurityGroupIds `array`
  * items [NonEmptyString](#nonemptystring)

### ServiceException


### ServiceQuotaExceededException


### ServiceUnavailableException


### SnsTopicArn
* SnsTopicArn `string`

### StartImagePipelineExecutionRequest
* StartImagePipelineExecutionRequest `object`
  * clientToken **required**
  * imagePipelineArn **required**

### StartImagePipelineExecutionResponse
* StartImagePipelineExecutionResponse `object`
  * clientToken
  * imageBuildVersionArn
  * requestId

### StringList
* StringList `array`
  * items [NonEmptyString](#nonemptystring)

### TagKey
* TagKey `string`

### TagKeyList
* TagKeyList `array`
  * items [TagKey](#tagkey)

### TagMap
* TagMap `object`

### TagResourceRequest
* TagResourceRequest `object`
  * tags **required**

### TagResourceResponse
* TagResourceResponse `object`

### TagValue
* TagValue `string`

### TargetContainerRepository
* TargetContainerRepository `object`: The container repository where the output container image is stored.
  * repositoryName **required**
  * service **required**

### UntagResourceRequest
* UntagResourceRequest `object`

### UntagResourceResponse
* UntagResourceResponse `object`

### UpdateDistributionConfigurationRequest
* UpdateDistributionConfigurationRequest `object`
  * clientToken **required**
  * description
  * distributionConfigurationArn **required**
  * distributions **required**
    * items [Distribution](#distribution)

### UpdateDistributionConfigurationResponse
* UpdateDistributionConfigurationResponse `object`
  * clientToken
  * distributionConfigurationArn
  * requestId

### UpdateImagePipelineRequest
* UpdateImagePipelineRequest `object`
  * clientToken **required**
  * containerRecipeArn
  * description
  * distributionConfigurationArn
  * enhancedImageMetadataEnabled
  * imagePipelineArn **required**
  * imageRecipeArn
  * imageTestsConfiguration
    * imageTestsEnabled
    * timeoutMinutes
  * infrastructureConfigurationArn **required**
  * schedule
    * pipelineExecutionStartCondition
    * scheduleExpression
  * status

### UpdateImagePipelineResponse
* UpdateImagePipelineResponse `object`
  * clientToken
  * imagePipelineArn
  * requestId

### UpdateInfrastructureConfigurationRequest
* UpdateInfrastructureConfigurationRequest `object`
  * clientToken **required**
  * description
  * infrastructureConfigurationArn **required**
  * instanceProfileName **required**
  * instanceTypes
    * items [InstanceType](#instancetype)
  * keyPair
  * logging
    * s3Logs
      * s3BucketName
      * s3KeyPrefix
  * resourceTags
  * securityGroupIds
    * items [NonEmptyString](#nonemptystring)
  * snsTopicArn
  * subnetId
  * terminateInstanceOnFailure

### UpdateInfrastructureConfigurationResponse
* UpdateInfrastructureConfigurationResponse `object`
  * clientToken
  * infrastructureConfigurationArn
  * requestId

### Uri
* Uri `string`

### VersionNumber
* VersionNumber `string`


