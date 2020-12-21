# @datafire/amazonaws_databrew

Client library for AWS Glue DataBrew

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_databrew
```
```js
let amazonaws_databrew = require('@datafire/amazonaws_databrew').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

.then(data => {
  console.log(data);
});
```

## Description

AWS Glue DataBrew is a visual, cloud-scale data-preparation service. DataBrew simplifies data preparation tasks, targeting data issues that are hard to spot and time-consuming to fix. DataBrew empowers users of all technical levels to visualize the data and perform one-click data transformations, with no coding required.

## Actions

### ListDatasets



```js
amazonaws_databrew.ListDatasets({}, context)
```

#### Input
* input `object`
  * maxResults `integer`
  * nextToken `string`
  * MaxResults `string`
  * NextToken `string`

#### Output
* output [ListDatasetsResponse](#listdatasetsresponse)

### CreateDataset



```js
amazonaws_databrew.CreateDataset({
  "Name": "",
  "Input": {}
}, context)
```

#### Input
* input `object`
  * FormatOptions `object`: Options that define how Microsoft Excel input is to be interpreted by DataBrew.
    * Excel
      * SheetIndexes
        * items [SheetIndex](#sheetindex)
      * SheetNames
        * items [SheetName](#sheetname)
    * Json
      * MultiLine
  * Input **required** `object`: Information on how AWS Glue DataBrew can find data, in either the AWS Glue Data Catalog or Amazon S3.
    * DataCatalogInputDefinition
      * CatalogId
      * DatabaseName **required**
      * TableName **required**
      * TempDirectory
        * Bucket **required**
        * Key
    * S3InputDefinition
      * Bucket **required**
      * Key
  * Name **required** `string`: The name of the dataset to be created.
  * Tags `object`: Metadata tags to apply to this dataset.

#### Output
* output [CreateDatasetResponse](#createdatasetresponse)

### DeleteDataset



```js
amazonaws_databrew.DeleteDataset({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`

#### Output
* output [DeleteDatasetResponse](#deletedatasetresponse)

### DescribeDataset



```js
amazonaws_databrew.DescribeDataset({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`

#### Output
* output [DescribeDatasetResponse](#describedatasetresponse)

### UpdateDataset



```js
amazonaws_databrew.UpdateDataset({
  "name": "",
  "Input": {}
}, context)
```

#### Input
* input `object`
  * name **required** `string`
  * FormatOptions `object`: Options that define how Microsoft Excel input is to be interpreted by DataBrew.
    * Excel
      * SheetIndexes
        * items [SheetIndex](#sheetindex)
      * SheetNames
        * items [SheetName](#sheetname)
    * Json
      * MultiLine
  * Input **required** `object`: Information on how AWS Glue DataBrew can find data, in either the AWS Glue Data Catalog or Amazon S3.
    * DataCatalogInputDefinition
      * CatalogId
      * DatabaseName **required**
      * TableName **required**
      * TempDirectory
        * Bucket **required**
        * Key
    * S3InputDefinition
      * Bucket **required**
      * Key

#### Output
* output [UpdateDatasetResponse](#updatedatasetresponse)

### ListJobs



```js
amazonaws_databrew.ListJobs({}, context)
```

#### Input
* input `object`
  * datasetName `string`
  * maxResults `integer`
  * nextToken `string`
  * projectName `string`
  * MaxResults `string`
  * NextToken `string`

#### Output
* output [ListJobsResponse](#listjobsresponse)

### DeleteJob



```js
amazonaws_databrew.DeleteJob({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`

#### Output
* output [DeleteJobResponse](#deletejobresponse)

### DescribeJob



```js
amazonaws_databrew.DescribeJob({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`

#### Output
* output [DescribeJobResponse](#describejobresponse)

### StopJobRun



```js
amazonaws_databrew.StopJobRun({
  "name": "",
  "runId": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`
  * runId **required** `string`

#### Output
* output [StopJobRunResponse](#stopjobrunresponse)

### ListJobRuns



```js
amazonaws_databrew.ListJobRuns({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`
  * maxResults `integer`
  * nextToken `string`
  * MaxResults `string`
  * NextToken `string`

#### Output
* output [ListJobRunsResponse](#listjobrunsresponse)

### StartJobRun



```js
amazonaws_databrew.StartJobRun({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`

#### Output
* output [StartJobRunResponse](#startjobrunresponse)

### CreateProfileJob



```js
amazonaws_databrew.CreateProfileJob({
  "DatasetName": "",
  "Name": "",
  "OutputLocation": {},
  "RoleArn": ""
}, context)
```

#### Input
* input `object`
  * DatasetName **required** `string`: The name of the dataset that this job is to act upon.
  * EncryptionKeyArn `string`: The Amazon Resource Name (ARN) of an encryption key that is used to protect the job.
  * EncryptionMode `string` (values: SSE-KMS, SSE-S3): <p>The encryption mode for the job, which can be one of the following:</p> <ul> <li> <p> <code>SSE-KMS</code> - para&gt;<code>SSE-KMS</code> - server-side encryption with AWS KMS-managed keys.</p> </li> <li> <p> <code>SSE-S3</code> - Server-side encryption with keys managed by Amazon S3.</p> </li> </ul>
  * LogSubscription `string` (values: ENABLE, DISABLE): A value that enables or disables Amazon CloudWatch logging for the current AWS account. If logging is enabled, CloudWatch writes one log stream for each job run.
  * MaxCapacity `integer`: The maximum number of nodes that DataBrew can use when the job processes data.
  * MaxRetries `integer`: The maximum number of times to retry the job after a job run fails.
  * Name **required** `string`: The name of the job to be created.
  * OutputLocation **required** `object`: An Amazon S3 location (bucket name an object key) where DataBrew can read input data, or write output from a job.
    * Bucket
    * Key
  * RoleArn **required** `string`: The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role to be assumed for this request.
  * Tags `object`: Metadata tags to apply to this job.
  * Timeout `integer`: The job's timeout in minutes. A job that attempts to run longer than this timeout period ends with a status of <code>TIMEOUT</code>.

#### Output
* output [CreateProfileJobResponse](#createprofilejobresponse)

### UpdateProfileJob



```js
amazonaws_databrew.UpdateProfileJob({
  "name": "",
  "OutputLocation": {},
  "RoleArn": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`
  * EncryptionKeyArn `string`: The Amazon Resource Name (ARN) of an encryption key that is used to protect the job.
  * EncryptionMode `string` (values: SSE-KMS, SSE-S3): <p>The encryption mode for the job, which can be one of the following:</p> <ul> <li> <p> <code>SSE-KMS</code> - Server-side encryption with AWS KMS-managed keys.</p> </li> <li> <p> <code>SSE-S3</code> - Server-side encryption with keys managed by Amazon S3.</p> </li> </ul>
  * LogSubscription `string` (values: ENABLE, DISABLE): A value that enables or disables Amazon CloudWatch logging for the current AWS account. If logging is enabled, CloudWatch writes one log stream for each job run.
  * MaxCapacity `integer`: The maximum number of nodes that DataBrew can use when the job processes data.
  * MaxRetries `integer`: The maximum number of times to retry the job after a job run fails.
  * OutputLocation **required** `object`: An Amazon S3 location (bucket name an object key) where DataBrew can read input data, or write output from a job.
    * Bucket
    * Key
  * RoleArn **required** `string`: The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role to be assumed for this request.
  * Timeout `integer`: The job's timeout in minutes. A job that attempts to run longer than this timeout period ends with a status of <code>TIMEOUT</code>.

#### Output
* output [UpdateProfileJobResponse](#updateprofilejobresponse)

### ListProjects



```js
amazonaws_databrew.ListProjects({}, context)
```

#### Input
* input `object`
  * nextToken `string`
  * maxResults `integer`
  * MaxResults `string`
  * NextToken `string`

#### Output
* output [ListProjectsResponse](#listprojectsresponse)

### CreateProject



```js
amazonaws_databrew.CreateProject({
  "DatasetName": "",
  "Name": "",
  "RecipeName": "",
  "RoleArn": ""
}, context)
```

#### Input
* input `object`
  * DatasetName **required** `string`: The name of the dataset to associate this project with.
  * Name **required** `string`: A unique name for the new project.
  * RecipeName **required** `string`: The name of an existing recipe to associate with the project.
  * RoleArn **required** `string`: The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role to be assumed for this request.
  * Sample `object`: Represents the sample size and sampling type for AWS Glue DataBrew to use for interactive data analysis.
    * Size
    * Type
  * Tags `object`: Metadata tags to apply to this project.

#### Output
* output [CreateProjectResponse](#createprojectresponse)

### DeleteProject



```js
amazonaws_databrew.DeleteProject({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`

#### Output
* output [DeleteProjectResponse](#deleteprojectresponse)

### DescribeProject



```js
amazonaws_databrew.DescribeProject({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`

#### Output
* output [DescribeProjectResponse](#describeprojectresponse)

### UpdateProject



```js
amazonaws_databrew.UpdateProject({
  "name": "",
  "RoleArn": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`
  * RoleArn **required** `string`: The Amazon Resource Name (ARN) of the IAM role to be assumed for this request.
  * Sample `object`: Represents the sample size and sampling type for AWS Glue DataBrew to use for interactive data analysis.
    * Size
    * Type

#### Output
* output [UpdateProjectResponse](#updateprojectresponse)

### SendProjectSessionAction



```js
amazonaws_databrew.SendProjectSessionAction({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`
  * ClientSessionId `string`: A unique identifier for an interactive session that's currently open and ready for work. The action will be performed on this session.
  * Preview `boolean`: Returns the result of the recipe step, without applying it. The result isn't added to the view frame stack.
  * RecipeStep `object`: Represents a single step to be performed in an AWS Glue DataBrew recipe.
    * Action
      * Operation **required**
      * Parameters
    * ConditionExpressions
      * items [ConditionExpression](#conditionexpression)
  * StepIndex `integer`: The index from which to preview a step. This index is used to preview the result of steps that have already been applied, so that the resulting view frame is from earlier in the view frame stack.
  * ViewFrame `object`: Represents the data being being transformed during an AWS Glue DataBrew project session.
    * ColumnRange
    * HiddenColumns
      * items [ColumnName](#columnname)
    * StartColumnIndex

#### Output
* output [SendProjectSessionActionResponse](#sendprojectsessionactionresponse)

### StartProjectSession



```js
amazonaws_databrew.StartProjectSession({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`
  * AssumeControl `boolean`: A value that, if true, enables you to take control of a session, even if a different client is currently accessing the project.

#### Output
* output [StartProjectSessionResponse](#startprojectsessionresponse)

### CreateRecipeJob



```js
amazonaws_databrew.CreateRecipeJob({
  "Name": "",
  "Outputs": [],
  "RoleArn": ""
}, context)
```

#### Input
* input `object`
  * DatasetName `string`: The name of the dataset that this job processes.
  * EncryptionKeyArn `string`: The Amazon Resource Name (ARN) of an encryption key that is used to protect the job.
  * EncryptionMode `string` (values: SSE-KMS, SSE-S3): <p>The encryption mode for the job, which can be one of the following:</p> <ul> <li> <p> <code>SSE-KMS</code> - Server-side encryption with AWS KMS-managed keys.</p> </li> <li> <p> <code>SSE-S3</code> - Server-side encryption with keys managed by Amazon S3.</p> </li> </ul>
  * LogSubscription `string` (values: ENABLE, DISABLE): A value that enables or disables Amazon CloudWatch logging for the current AWS account. If logging is enabled, CloudWatch writes one log stream for each job run.
  * MaxCapacity `integer`: The maximum number of nodes that DataBrew can consume when the job processes data.
  * MaxRetries `integer`: The maximum number of times to retry the job after a job run fails.
  * Name **required** `string`: A unique name for the job.
  * Outputs **required** `array`: One or more artifacts that represent the output from running the job.
    * items [Output](#output)
  * ProjectName `string`: Either the name of an existing project, or a combination of a recipe and a dataset to associate with the recipe.
  * RecipeReference `object`: Represents all of the attributes of an AWS Glue DataBrew recipe.
    * Name
    * RecipeVersion
  * RoleArn **required** `string`: The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role to be assumed for this request.
  * Tags `object`: Metadata tags to apply to this job dataset.
  * Timeout `integer`: The job's timeout in minutes. A job that attempts to run longer than this timeout period ends with a status of <code>TIMEOUT</code>.

#### Output
* output [CreateRecipeJobResponse](#createrecipejobresponse)

### UpdateRecipeJob



```js
amazonaws_databrew.UpdateRecipeJob({
  "name": "",
  "Outputs": [],
  "RoleArn": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`
  * EncryptionKeyArn `string`: The Amazon Resource Name (ARN) of an encryption key that is used to protect the job.
  * EncryptionMode `string` (values: SSE-KMS, SSE-S3): <p>The encryption mode for the job, which can be one of the following:</p> <ul> <li> <p> <code>SSE-KMS</code> - Server-side encryption with AWS KMS-managed keys.</p> </li> <li> <p> <code>SSE-S3</code> - Server-side encryption with keys managed by Amazon S3.</p> </li> </ul>
  * LogSubscription `string` (values: ENABLE, DISABLE): A value that enables or disables Amazon CloudWatch logging for the current AWS account. If logging is enabled, CloudWatch writes one log stream for each job run.
  * MaxCapacity `integer`: The maximum number of nodes that DataBrew can consume when the job processes data.
  * MaxRetries `integer`: The maximum number of times to retry the job after a job run fails.
  * Outputs **required** `array`: One or more artifacts that represent the output from running the job. 
    * items [Output](#output)
  * RoleArn **required** `string`: The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role to be assumed for this request.
  * Timeout `integer`: The job's timeout in minutes. A job that attempts to run longer than this timeout period ends with a status of <code>TIMEOUT</code>.

#### Output
* output [UpdateRecipeJobResponse](#updaterecipejobresponse)

### ListRecipeVersions



```js
amazonaws_databrew.ListRecipeVersions({
  "name": ""
}, context)
```

#### Input
* input `object`
  * maxResults `integer`
  * nextToken `string`
  * name **required** `string`
  * MaxResults `string`
  * NextToken `string`

#### Output
* output [ListRecipeVersionsResponse](#listrecipeversionsresponse)

### ListRecipes



```js
amazonaws_databrew.ListRecipes({}, context)
```

#### Input
* input `object`
  * maxResults `integer`
  * nextToken `string`
  * recipeVersion `string`
  * MaxResults `string`
  * NextToken `string`

#### Output
* output [ListRecipesResponse](#listrecipesresponse)

### CreateRecipe



```js
amazonaws_databrew.CreateRecipe({
  "Name": "",
  "Steps": []
}, context)
```

#### Input
* input `object`
  * Description `string`: A description for the recipe.
  * Name **required** `string`: A unique name for the recipe.
  * Steps **required** `array`: An array containing the steps to be performed by the recipe. Each recipe step consists of one recipe action and (optionally) an array of condition expressions.
    * items [RecipeStep](#recipestep)
  * Tags `object`: Metadata tags to apply to this recipe.

#### Output
* output [CreateRecipeResponse](#createreciperesponse)

### DescribeRecipe



```js
amazonaws_databrew.DescribeRecipe({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`
  * recipeVersion `string`

#### Output
* output [DescribeRecipeResponse](#describereciperesponse)

### UpdateRecipe



```js
amazonaws_databrew.UpdateRecipe({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`
  * Description `string`: A description of the recipe.
  * Steps `array`: One or more steps to be performed by the recipe. Each step consists of an action, and the conditions under which the action should succeed.
    * items [RecipeStep](#recipestep)

#### Output
* output [UpdateRecipeResponse](#updatereciperesponse)

### BatchDeleteRecipeVersion



```js
amazonaws_databrew.BatchDeleteRecipeVersion({
  "name": "",
  "RecipeVersions": []
}, context)
```

#### Input
* input `object`
  * name **required** `string`
  * RecipeVersions **required** `array`: An array of version identifiers to be deleted.
    * items [RecipeVersion](#recipeversion)

#### Output
* output [BatchDeleteRecipeVersionResponse](#batchdeleterecipeversionresponse)

### PublishRecipe



```js
amazonaws_databrew.PublishRecipe({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`
  * Description `string`: A description of the recipe to be published, for this version of the recipe.

#### Output
* output [PublishRecipeResponse](#publishreciperesponse)

### DeleteRecipeVersion



```js
amazonaws_databrew.DeleteRecipeVersion({
  "name": "",
  "recipeVersion": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`
  * recipeVersion **required** `string`

#### Output
* output [DeleteRecipeVersionResponse](#deleterecipeversionresponse)

### ListSchedules



```js
amazonaws_databrew.ListSchedules({}, context)
```

#### Input
* input `object`
  * jobName `string`
  * maxResults `integer`
  * nextToken `string`
  * MaxResults `string`
  * NextToken `string`

#### Output
* output [ListSchedulesResponse](#listschedulesresponse)

### CreateSchedule



```js
amazonaws_databrew.CreateSchedule({
  "CronExpression": "",
  "Name": ""
}, context)
```

#### Input
* input `object`
  * CronExpression **required** `string`: The date or dates and time or times, in <code>cron</code> format, when the jobs are to be run.
  * JobNames `array`: The name or names of one or more jobs to be run.
    * items [JobName](#jobname)
  * Name **required** `string`: A unique name for the schedule.
  * Tags `object`: Metadata tags to apply to this schedule.

#### Output
* output [CreateScheduleResponse](#createscheduleresponse)

### DeleteSchedule



```js
amazonaws_databrew.DeleteSchedule({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`

#### Output
* output [DeleteScheduleResponse](#deletescheduleresponse)

### DescribeSchedule



```js
amazonaws_databrew.DescribeSchedule({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`

#### Output
* output [DescribeScheduleResponse](#describescheduleresponse)

### UpdateSchedule



```js
amazonaws_databrew.UpdateSchedule({
  "name": "",
  "CronExpression": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`
  * CronExpression **required** `string`: The date or dates and time or times, in <code>cron</code> format, when the jobs are to be run.
  * JobNames `array`: The name or names of one or more jobs to be run for this schedule.
    * items [JobName](#jobname)

#### Output
* output [UpdateScheduleResponse](#updatescheduleresponse)

### ListTagsForResource



```js
amazonaws_databrew.ListTagsForResource({
  "ResourceArn": ""
}, context)
```

#### Input
* input `object`
  * ResourceArn **required** `string`

#### Output
* output [ListTagsForResourceResponse](#listtagsforresourceresponse)

### TagResource



```js
amazonaws_databrew.TagResource({
  "ResourceArn": "",
  "Tags": {}
}, context)
```

#### Input
* input `object`
  * ResourceArn **required** `string`
  * Tags **required** `object`: One or more tags to be assigned to the resource.

#### Output
* output [TagResourceResponse](#tagresourceresponse)

### UntagResource



```js
amazonaws_databrew.UntagResource({
  "ResourceArn": "",
  "tagKeys": []
}, context)
```

#### Input
* input `object`
  * ResourceArn **required** `string`
  * tagKeys **required** `array`

#### Output
* output [UntagResourceResponse](#untagresourceresponse)



## Definitions

### AccessDeniedException


### AccountId
* AccountId `string`

### ActionId
* ActionId `integer`

### Arn
* Arn `string`

### AssumeControl
* AssumeControl `boolean`

### Attempt
* Attempt `integer`

### BatchDeleteRecipeVersionRequest
* BatchDeleteRecipeVersionRequest `object`
  * RecipeVersions **required**
    * items [RecipeVersion](#recipeversion)

### BatchDeleteRecipeVersionResponse
* BatchDeleteRecipeVersionResponse `object`
  * Errors
    * items [RecipeVersionErrorDetail](#recipeversionerrordetail)
  * Name **required**

### Bucket
* Bucket `string`

### CatalogId
* CatalogId `string`

### ClientSessionId
* ClientSessionId `string`

### ColumnName
* ColumnName `string`

### ColumnNameList
* ColumnNameList `array`
  * items [ColumnName](#columnname)

### ColumnRange
* ColumnRange `integer`

### CompressionFormat
* CompressionFormat `string` (values: GZIP, LZ4, SNAPPY, BZIP2, DEFLATE, LZO, BROTLI, ZSTD, ZLIB)

### Condition
* Condition `string`

### ConditionExpression
* ConditionExpression `object`: <p>Represents an individual condition that evaluates to true or false.</p> <p>Conditions are used with recipe actions: The action is only performed for column values where the condition evaluates to true.</p> <p>If a recipe requires more than one condition, then the recipe must specify multiple <code>ConditionExpression</code> elements. Each condition is applied to the rows in a dataset first, before the recipe action is performed.</p>
  * Condition **required**
  * TargetColumn **required**
  * Value

### ConditionExpressionList
* ConditionExpressionList `array`
  * items [ConditionExpression](#conditionexpression)

### ConditionValue
* ConditionValue `string`

### ConflictException


### CreateDatasetRequest
* CreateDatasetRequest `object`
  * FormatOptions [FormatOptions](#formatoptions)
  * Input **required** [Input](#input)
  * Name **required**
  * Tags

### CreateDatasetResponse
* CreateDatasetResponse `object`
  * Name **required**

### CreateProfileJobRequest
* CreateProfileJobRequest `object`
  * DatasetName **required**
  * EncryptionKeyArn
  * EncryptionMode
  * LogSubscription
  * MaxCapacity
  * MaxRetries
  * Name **required**
  * OutputLocation **required** [S3Location](#s3location)
  * RoleArn **required**
  * Tags
  * Timeout

### CreateProfileJobResponse
* CreateProfileJobResponse `object`
  * Name **required**

### CreateProjectRequest
* CreateProjectRequest `object`
  * DatasetName **required**
  * Name **required**
  * RecipeName **required**
  * RoleArn **required**
  * Sample [Sample](#sample)
  * Tags

### CreateProjectResponse
* CreateProjectResponse `object`
  * Name **required**

### CreateRecipeJobRequest
* CreateRecipeJobRequest `object`
  * DatasetName
  * EncryptionKeyArn
  * EncryptionMode
  * LogSubscription
  * MaxCapacity
  * MaxRetries
  * Name **required**
  * Outputs **required**
    * items [Output](#output)
  * ProjectName
  * RecipeReference [RecipeReference](#recipereference)
  * RoleArn **required**
  * Tags
  * Timeout

### CreateRecipeJobResponse
* CreateRecipeJobResponse `object`
  * Name **required**

### CreateRecipeRequest
* CreateRecipeRequest `object`
  * Description
  * Name **required**
  * Steps **required**
    * items [RecipeStep](#recipestep)
  * Tags

### CreateRecipeResponse
* CreateRecipeResponse `object`
  * Name **required**

### CreateScheduleRequest
* CreateScheduleRequest `object`
  * CronExpression **required**
  * JobNames
    * items [JobName](#jobname)
  * Name **required**
  * Tags

### CreateScheduleResponse
* CreateScheduleResponse `object`
  * Name **required**

### CreatedBy
* CreatedBy `string`

### CronExpression
* CronExpression `string`

### DataCatalogInputDefinition
* DataCatalogInputDefinition `object`: Represents how metadata stored in the AWS Glue Data Catalog is defined in an AWS Glue DataBrew dataset. 
  * CatalogId
  * DatabaseName **required**
  * TableName **required**
  * TempDirectory
    * Bucket **required**
    * Key

### DatabaseName
* DatabaseName `string`

### Dataset
* Dataset `object`: Represents a dataset that can be processed by AWS Glue DataBrew.
  * AccountId
  * CreateDate
  * CreatedBy
  * FormatOptions
    * Excel
      * SheetIndexes
        * items [SheetIndex](#sheetindex)
      * SheetNames
        * items [SheetName](#sheetname)
    * Json
      * MultiLine
  * Input **required**
    * DataCatalogInputDefinition
      * CatalogId
      * DatabaseName **required**
      * TableName **required**
      * TempDirectory
        * Bucket **required**
        * Key
    * S3InputDefinition
      * Bucket **required**
      * Key
  * LastModifiedBy
  * LastModifiedDate
  * Name **required**
  * ResourceArn
  * Source
  * Tags

### DatasetList
* DatasetList `array`
  * items [Dataset](#dataset)

### DatasetName
* DatasetName `string`

### Date
* Date `string`

### DeleteDatasetRequest
* DeleteDatasetRequest `object`

### DeleteDatasetResponse
* DeleteDatasetResponse `object`
  * Name **required**

### DeleteJobRequest
* DeleteJobRequest `object`

### DeleteJobResponse
* DeleteJobResponse `object`
  * Name **required**

### DeleteProjectRequest
* DeleteProjectRequest `object`

### DeleteProjectResponse
* DeleteProjectResponse `object`
  * Name **required**

### DeleteRecipeVersionRequest
* DeleteRecipeVersionRequest `object`

### DeleteRecipeVersionResponse
* DeleteRecipeVersionResponse `object`
  * Name **required**
  * RecipeVersion **required**

### DeleteScheduleRequest
* DeleteScheduleRequest `object`

### DeleteScheduleResponse
* DeleteScheduleResponse `object`
  * Name **required**

### DescribeDatasetRequest
* DescribeDatasetRequest `object`

### DescribeDatasetResponse
* DescribeDatasetResponse `object`
  * CreateDate
  * CreatedBy
  * FormatOptions [FormatOptions](#formatoptions)
  * Input **required** [Input](#input)
  * LastModifiedBy
  * LastModifiedDate
  * Name **required**
  * ResourceArn
  * Source
  * Tags

### DescribeJobRequest
* DescribeJobRequest `object`

### DescribeJobResponse
* DescribeJobResponse `object`
  * CreateDate
  * CreatedBy
  * DatasetName
  * EncryptionKeyArn
  * EncryptionMode
  * LastModifiedBy
  * LastModifiedDate
  * LogSubscription
  * MaxCapacity
  * MaxRetries
  * Name **required**
  * Outputs
    * items [Output](#output)
  * ProjectName
  * RecipeReference [RecipeReference](#recipereference)
  * ResourceArn
  * RoleArn
  * Tags
  * Timeout
  * Type

### DescribeProjectRequest
* DescribeProjectRequest `object`

### DescribeProjectResponse
* DescribeProjectResponse `object`
  * CreateDate
  * CreatedBy
  * DatasetName
  * LastModifiedBy
  * LastModifiedDate
  * Name **required**
  * OpenDate
  * OpenedBy
  * RecipeName
  * ResourceArn
  * RoleArn
  * Sample [Sample](#sample)
  * SessionStatus
  * Tags

### DescribeRecipeRequest
* DescribeRecipeRequest `object`

### DescribeRecipeResponse
* DescribeRecipeResponse `object`
  * CreateDate
  * CreatedBy
  * Description
  * LastModifiedBy
  * LastModifiedDate
  * Name **required**
  * ProjectName
  * PublishedBy
  * PublishedDate
  * RecipeVersion
  * ResourceArn
  * Steps
    * items [RecipeStep](#recipestep)
  * Tags

### DescribeScheduleRequest
* DescribeScheduleRequest `object`

### DescribeScheduleResponse
* DescribeScheduleResponse `object`
  * CreateDate
  * CreatedBy
  * CronExpression
  * JobNames
    * items [JobName](#jobname)
  * LastModifiedBy
  * LastModifiedDate
  * Name **required**
  * ResourceArn
  * Tags

### EncryptionKeyArn
* EncryptionKeyArn `string`

### EncryptionMode
* EncryptionMode `string` (values: SSE-KMS, SSE-S3)

### ErrorCode
* ErrorCode `string`

### ExcelOptions
* ExcelOptions `object`: Options that define how DataBrew will interpret a Microsoft Excel file, when creating a dataset from that file.
  * SheetIndexes
    * items [SheetIndex](#sheetindex)
  * SheetNames
    * items [SheetName](#sheetname)

### ExecutionTime
* ExecutionTime `integer`

### FormatOptions
* FormatOptions `object`: Options that define how Microsoft Excel input is to be interpreted by DataBrew.
  * Excel
    * SheetIndexes
      * items [SheetIndex](#sheetindex)
    * SheetNames
      * items [SheetName](#sheetname)
  * Json
    * MultiLine

### HiddenColumnList
* HiddenColumnList `array`
  * items [ColumnName](#columnname)

### Input
* Input `object`: Information on how AWS Glue DataBrew can find data, in either the AWS Glue Data Catalog or Amazon S3.
  * DataCatalogInputDefinition
    * CatalogId
    * DatabaseName **required**
    * TableName **required**
    * TempDirectory
      * Bucket **required**
      * Key
  * S3InputDefinition
    * Bucket **required**
    * Key

### InternalServerException


### Job
* Job `object`: Represents all of the attributes of an AWS Glue DataBrew job.
  * AccountId
  * CreateDate
  * CreatedBy
  * DatasetName
  * EncryptionKeyArn
  * EncryptionMode
  * LastModifiedBy
  * LastModifiedDate
  * LogSubscription
  * MaxCapacity
  * MaxRetries
  * Name **required**
  * Outputs
    * items [Output](#output)
  * ProjectName
  * RecipeReference
    * Name **required**
    * RecipeVersion
  * ResourceArn
  * RoleArn
  * Tags
  * Timeout
  * Type

### JobList
* JobList `array`
  * items [Job](#job)

### JobName
* JobName `string`

### JobNameList
* JobNameList `array`
  * items [JobName](#jobname)

### JobRun
* JobRun `object`: Represents one run of an AWS Glue DataBrew job.
  * Attempt
  * CompletedOn
  * DatasetName
  * ErrorMessage
  * ExecutionTime
  * JobName
  * LogGroupName
  * LogSubscription
  * Outputs
    * items [Output](#output)
  * RecipeReference
    * Name **required**
    * RecipeVersion
  * RunId
  * StartedBy
  * StartedOn
  * State

### JobRunErrorMessage
* JobRunErrorMessage `string`

### JobRunId
* JobRunId `string`

### JobRunList
* JobRunList `array`
  * items [JobRun](#jobrun)

### JobRunState
* JobRunState `string` (values: STARTING, RUNNING, STOPPING, STOPPED, SUCCEEDED, FAILED, TIMEOUT)

### JobType
* JobType `string` (values: PROFILE, RECIPE)

### JsonOptions
* JsonOptions `object`: Represents the JSON-specific options that define how input is to be interpreted by AWS Glue DataBrew.
  * MultiLine

### Key
* Key `string`

### LastModifiedBy
* LastModifiedBy `string`

### ListDatasetsRequest
* ListDatasetsRequest `object`

### ListDatasetsResponse
* ListDatasetsResponse `object`
  * Datasets **required**
    * items [Dataset](#dataset)
  * NextToken

### ListJobRunsRequest
* ListJobRunsRequest `object`

### ListJobRunsResponse
* ListJobRunsResponse `object`
  * JobRuns **required**
    * items [JobRun](#jobrun)
  * NextToken

### ListJobsRequest
* ListJobsRequest `object`

### ListJobsResponse
* ListJobsResponse `object`
  * Jobs **required**
    * items [Job](#job)
  * NextToken

### ListProjectsRequest
* ListProjectsRequest `object`

### ListProjectsResponse
* ListProjectsResponse `object`
  * NextToken
  * Projects **required**
    * items [Project](#project)

### ListRecipeVersionsRequest
* ListRecipeVersionsRequest `object`

### ListRecipeVersionsResponse
* ListRecipeVersionsResponse `object`
  * NextToken
  * Recipes **required**
    * items [Recipe](#recipe)

### ListRecipesRequest
* ListRecipesRequest `object`

### ListRecipesResponse
* ListRecipesResponse `object`
  * NextToken
  * Recipes **required**
    * items [Recipe](#recipe)

### ListSchedulesRequest
* ListSchedulesRequest `object`

### ListSchedulesResponse
* ListSchedulesResponse `object`
  * NextToken
  * Schedules **required**
    * items [Schedule](#schedule)

### ListTagsForResourceRequest
* ListTagsForResourceRequest `object`

### ListTagsForResourceResponse
* ListTagsForResourceResponse `object`
  * Tags

### LogGroupName
* LogGroupName `string`

### LogSubscription
* LogSubscription `string` (values: ENABLE, DISABLE)

### MaxCapacity
* MaxCapacity `integer`

### MaxResults100
* MaxResults100 `integer`

### MaxRetries
* MaxRetries `integer`

### MultiLine
* MultiLine `boolean`

### NextToken
* NextToken `string`

### OpenedBy
* OpenedBy `string`

### Operation
* Operation `string`

### Output
* Output `object`: Represents individual output from a particular job run.
  * CompressionFormat
  * Format
  * Location **required**
    * Bucket **required**
    * Key
  * Overwrite
  * PartitionColumns
    * items [ColumnName](#columnname)

### OutputFormat
* OutputFormat `string` (values: CSV, JSON, PARQUET, GLUEPARQUET, AVRO, ORC, XML)

### OutputList
* OutputList `array`
  * items [Output](#output)

### OverwriteOutput
* OverwriteOutput `boolean`

### ParameterMap
* ParameterMap `object`

### ParameterName
* ParameterName `string`

### ParameterValue
* ParameterValue `string`

### Preview
* Preview `boolean`

### Project
* Project `object`: Represents all of the attributes of an AWS Glue DataBrew project.
  * AccountId
  * CreateDate
  * CreatedBy
  * DatasetName
  * LastModifiedBy
  * LastModifiedDate
  * Name **required**
  * OpenDate
  * OpenedBy
  * RecipeName **required**
  * ResourceArn
  * RoleArn
  * Sample
    * Size
    * Type **required**
  * Tags

### ProjectList
* ProjectList `array`
  * items [Project](#project)

### ProjectName
* ProjectName `string`

### PublishRecipeRequest
* PublishRecipeRequest `object`
  * Description

### PublishRecipeResponse
* PublishRecipeResponse `object`
  * Name **required**

### PublishedBy
* PublishedBy `string`

### Recipe
* Recipe `object`: Represents one or more actions to be performed on an AWS Glue DataBrew dataset.
  * CreateDate
  * CreatedBy
  * Description
  * LastModifiedBy
  * LastModifiedDate
  * Name **required**
  * ProjectName
  * PublishedBy
  * PublishedDate
  * RecipeVersion
  * ResourceArn
  * Steps
    * items [RecipeStep](#recipestep)
  * Tags

### RecipeAction
* RecipeAction `object`: Represents a transformation and associated parameters that are used to apply a change to an AWS Glue DataBrew dataset. For more information, see <a href="https://docs.aws.amazon.com/databrew/latest/dg/recipe-structure.html">Recipe structure</a> and <a href="https://docs.aws.amazon.com/databrew/latest/dg/recipe-actions-reference.html">ecipe actions reference</a> .
  * Operation **required**
  * Parameters

### RecipeDescription
* RecipeDescription `string`

### RecipeErrorList
* RecipeErrorList `array`
  * items [RecipeVersionErrorDetail](#recipeversionerrordetail)

### RecipeErrorMessage
* RecipeErrorMessage `string`

### RecipeList
* RecipeList `array`
  * items [Recipe](#recipe)

### RecipeName
* RecipeName `string`

### RecipeReference
* RecipeReference `object`: Represents all of the attributes of an AWS Glue DataBrew recipe.
  * Name **required**
  * RecipeVersion

### RecipeStep
* RecipeStep `object`: Represents a single step to be performed in an AWS Glue DataBrew recipe.
  * Action **required**
    * Operation **required**
    * Parameters
  * ConditionExpressions
    * items [ConditionExpression](#conditionexpression)

### RecipeStepList
* RecipeStepList `array`
  * items [RecipeStep](#recipestep)

### RecipeVersion
* RecipeVersion `string`

### RecipeVersionErrorDetail
* RecipeVersionErrorDetail `object`: Represents any errors encountered when attempting to delete multiple recipe versions.
  * ErrorCode
  * ErrorMessage
  * RecipeVersion

### RecipeVersionList
* RecipeVersionList `array`
  * items [RecipeVersion](#recipeversion)

### ResourceNotFoundException


### Result
* Result `string`

### S3Location
* S3Location `object`: An Amazon S3 location (bucket name an object key) where DataBrew can read input data, or write output from a job.
  * Bucket **required**
  * Key

### Sample
* Sample `object`: Represents the sample size and sampling type for AWS Glue DataBrew to use for interactive data analysis.
  * Size
  * Type **required**

### SampleSize
* SampleSize `integer`

### SampleType
* SampleType `string` (values: FIRST_N, LAST_N, RANDOM)

### Schedule
* Schedule `object`: Represents one or more dates and times when a job is to run.
  * AccountId
  * CreateDate
  * CreatedBy
  * CronExpression
  * JobNames
    * items [JobName](#jobname)
  * LastModifiedBy
  * LastModifiedDate
  * Name **required**
  * ResourceArn
  * Tags

### ScheduleList
* ScheduleList `array`
  * items [Schedule](#schedule)

### ScheduleName
* ScheduleName `string`

### SendProjectSessionActionRequest
* SendProjectSessionActionRequest `object`
  * ClientSessionId
  * Preview
  * RecipeStep [RecipeStep](#recipestep)
  * StepIndex
  * ViewFrame [ViewFrame](#viewframe)

### SendProjectSessionActionResponse
* SendProjectSessionActionResponse `object`
  * ActionId
  * Name **required**
  * Result

### ServiceQuotaExceededException


### SessionStatus
* SessionStatus `string` (values: ASSIGNED, FAILED, INITIALIZING, PROVISIONING, READY, RECYCLING, ROTATING, TERMINATED, TERMINATING, UPDATING)

### SheetIndex
* SheetIndex `integer`

### SheetIndexList
* SheetIndexList `array`
  * items [SheetIndex](#sheetindex)

### SheetName
* SheetName `string`

### SheetNameList
* SheetNameList `array`
  * items [SheetName](#sheetname)

### Source
* Source `string` (values: S3, DATA-CATALOG)

### StartColumnIndex
* StartColumnIndex `integer`

### StartJobRunRequest
* StartJobRunRequest `object`

### StartJobRunResponse
* StartJobRunResponse `object`
  * RunId **required**

### StartProjectSessionRequest
* StartProjectSessionRequest `object`
  * AssumeControl

### StartProjectSessionResponse
* StartProjectSessionResponse `object`
  * ClientSessionId
  * Name **required**

### StartedBy
* StartedBy `string`

### StepIndex
* StepIndex `integer`

### StopJobRunRequest
* StopJobRunRequest `object`

### StopJobRunResponse
* StopJobRunResponse `object`
  * RunId **required**

### TableName
* TableName `string`

### TagKey
* TagKey `string`

### TagKeyList
* TagKeyList `array`
  * items [TagKey](#tagkey)

### TagMap
* TagMap `object`

### TagResourceRequest
* TagResourceRequest `object`
  * Tags **required**

### TagResourceResponse
* TagResourceResponse `object`

### TagValue
* TagValue `string`

### TargetColumn
* TargetColumn `string`

### Timeout
* Timeout `integer`

### UntagResourceRequest
* UntagResourceRequest `object`

### UntagResourceResponse
* UntagResourceResponse `object`

### UpdateDatasetRequest
* UpdateDatasetRequest `object`
  * FormatOptions [FormatOptions](#formatoptions)
  * Input **required** [Input](#input)

### UpdateDatasetResponse
* UpdateDatasetResponse `object`
  * Name **required**

### UpdateProfileJobRequest
* UpdateProfileJobRequest `object`
  * EncryptionKeyArn
  * EncryptionMode
  * LogSubscription
  * MaxCapacity
  * MaxRetries
  * OutputLocation **required** [S3Location](#s3location)
  * RoleArn **required**
  * Timeout

### UpdateProfileJobResponse
* UpdateProfileJobResponse `object`
  * Name **required**

### UpdateProjectRequest
* UpdateProjectRequest `object`
  * RoleArn **required**
  * Sample [Sample](#sample)

### UpdateProjectResponse
* UpdateProjectResponse `object`
  * LastModifiedDate
  * Name **required**

### UpdateRecipeJobRequest
* UpdateRecipeJobRequest `object`
  * EncryptionKeyArn
  * EncryptionMode
  * LogSubscription
  * MaxCapacity
  * MaxRetries
  * Outputs **required**
    * items [Output](#output)
  * RoleArn **required**
  * Timeout

### UpdateRecipeJobResponse
* UpdateRecipeJobResponse `object`
  * Name **required**

### UpdateRecipeRequest
* UpdateRecipeRequest `object`
  * Description
  * Steps
    * items [RecipeStep](#recipestep)

### UpdateRecipeResponse
* UpdateRecipeResponse `object`
  * Name **required**

### UpdateScheduleRequest
* UpdateScheduleRequest `object`
  * CronExpression **required**
  * JobNames
    * items [JobName](#jobname)

### UpdateScheduleResponse
* UpdateScheduleResponse `object`
  * Name **required**

### ValidationException


### ViewFrame
* ViewFrame `object`: Represents the data being being transformed during an AWS Glue DataBrew project session.
  * ColumnRange
  * HiddenColumns
    * items [ColumnName](#columnname)
  * StartColumnIndex **required**


