# @datafire/amazonaws_robomaker

Client library for AWS RoboMaker

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_robomaker
```
```js
let amazonaws_robomaker = require('@datafire/amazonaws_robomaker').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

.then(data => {
  console.log(data);
});
```

## Description

This section provides documentation for the AWS RoboMaker API operations.

## Actions

### BatchDeleteWorlds



```js
amazonaws_robomaker.BatchDeleteWorlds({
  "worlds": []
}, context)
```

#### Input
* input `object`
  * worlds **required** `array`: A list of Amazon Resource Names (arns) that correspond to worlds to delete.
    * items [Arn](#arn)

#### Output
* output [BatchDeleteWorldsResponse](#batchdeleteworldsresponse)

### BatchDescribeSimulationJob



```js
amazonaws_robomaker.BatchDescribeSimulationJob({
  "jobs": []
}, context)
```

#### Input
* input `object`
  * jobs **required** `array`: A list of Amazon Resource Names (ARNs) of simulation jobs to describe.
    * items [Arn](#arn)

#### Output
* output [BatchDescribeSimulationJobResponse](#batchdescribesimulationjobresponse)

### CancelDeploymentJob



```js
amazonaws_robomaker.CancelDeploymentJob({
  "job": ""
}, context)
```

#### Input
* input `object`
  * job **required** `string`: The deployment job ARN to cancel.

#### Output
* output [CancelDeploymentJobResponse](#canceldeploymentjobresponse)

### CancelSimulationJob



```js
amazonaws_robomaker.CancelSimulationJob({
  "job": ""
}, context)
```

#### Input
* input `object`
  * job **required** `string`: The simulation job ARN to cancel.

#### Output
* output [CancelSimulationJobResponse](#cancelsimulationjobresponse)

### CancelSimulationJobBatch



```js
amazonaws_robomaker.CancelSimulationJobBatch({
  "batch": ""
}, context)
```

#### Input
* input `object`
  * batch **required** `string`: The id of the batch to cancel.

#### Output
* output [CancelSimulationJobBatchResponse](#cancelsimulationjobbatchresponse)

### CancelWorldExportJob



```js
amazonaws_robomaker.CancelWorldExportJob({
  "job": ""
}, context)
```

#### Input
* input `object`
  * job **required** `string`: The Amazon Resource Name (arn) of the world export job to cancel.

#### Output
* output [CancelWorldExportJobResponse](#cancelworldexportjobresponse)

### CancelWorldGenerationJob



```js
amazonaws_robomaker.CancelWorldGenerationJob({
  "job": ""
}, context)
```

#### Input
* input `object`
  * job **required** `string`: The Amazon Resource Name (arn) of the world generator job to cancel.

#### Output
* output [CancelWorldGenerationJobResponse](#cancelworldgenerationjobresponse)

### CreateDeploymentJob



```js
amazonaws_robomaker.CreateDeploymentJob({
  "clientRequestToken": "",
  "fleet": "",
  "deploymentApplicationConfigs": []
}, context)
```

#### Input
* input `object`
  * tags `object`: A map that contains tag keys and tag values that are attached to the deployment job.
  * clientRequestToken **required** `string`: Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
  * deploymentApplicationConfigs **required** `array`: The deployment application configuration.
    * items [DeploymentApplicationConfig](#deploymentapplicationconfig)
  * deploymentConfig `object`: Information about a deployment configuration.
    * concurrentDeploymentPercentage
    * downloadConditionFile
      * bucket **required**
      * etag
      * key **required**
    * failureThresholdPercentage
    * robotDeploymentTimeoutInSeconds
  * fleet **required** `string`: The Amazon Resource Name (ARN) of the fleet to deploy.

#### Output
* output [CreateDeploymentJobResponse](#createdeploymentjobresponse)

### CreateFleet



```js
amazonaws_robomaker.CreateFleet({
  "name": ""
}, context)
```

#### Input
* input `object`
  * tags `object`: A map that contains tag keys and tag values that are attached to the fleet.
  * name **required** `string`: The name of the fleet.

#### Output
* output [CreateFleetResponse](#createfleetresponse)

### CreateRobot



```js
amazonaws_robomaker.CreateRobot({
  "name": "",
  "architecture": "",
  "greengrassGroupId": ""
}, context)
```

#### Input
* input `object`
  * tags `object`: A map that contains tag keys and tag values that are attached to the robot.
  * architecture **required** `string` (values: X86_64, ARM64, ARMHF): The target architecture of the robot.
  * greengrassGroupId **required** `string`: The Greengrass group id.
  * name **required** `string`: The name for the robot.

#### Output
* output [CreateRobotResponse](#createrobotresponse)

### CreateRobotApplication



```js
amazonaws_robomaker.CreateRobotApplication({
  "name": "",
  "sources": [],
  "robotSoftwareSuite": {}
}, context)
```

#### Input
* input `object`
  * tags `object`: A map that contains tag keys and tag values that are attached to the robot application.
  * name **required** `string`: The name of the robot application.
  * robotSoftwareSuite **required** `object`: Information about a robot software suite (ROS distribution).
    * name
    * version
  * sources **required** `array`: The sources of the robot application.
    * items [SourceConfig](#sourceconfig)

#### Output
* output [CreateRobotApplicationResponse](#createrobotapplicationresponse)

### CreateRobotApplicationVersion



```js
amazonaws_robomaker.CreateRobotApplicationVersion({
  "application": ""
}, context)
```

#### Input
* input `object`
  * application **required** `string`: The application information for the robot application.
  * currentRevisionId `string`: The current revision id for the robot application. If you provide a value and it matches the latest revision ID, a new version will be created.

#### Output
* output [CreateRobotApplicationVersionResponse](#createrobotapplicationversionresponse)

### CreateSimulationApplication



```js
amazonaws_robomaker.CreateSimulationApplication({
  "name": "",
  "sources": [],
  "simulationSoftwareSuite": {},
  "robotSoftwareSuite": {}
}, context)
```

#### Input
* input `object`
  * tags `object`: A map that contains tag keys and tag values that are attached to the simulation application.
  * name **required** `string`: The name of the simulation application.
  * renderingEngine `object`: Information about a rendering engine.
    * name
    * version
  * robotSoftwareSuite **required** `object`: Information about a robot software suite (ROS distribution).
    * name
    * version
  * simulationSoftwareSuite **required** `object`: Information about a simulation software suite.
    * name
    * version
  * sources **required** `array`: The sources of the simulation application.
    * items [SourceConfig](#sourceconfig)

#### Output
* output [CreateSimulationApplicationResponse](#createsimulationapplicationresponse)

### CreateSimulationApplicationVersion



```js
amazonaws_robomaker.CreateSimulationApplicationVersion({
  "application": ""
}, context)
```

#### Input
* input `object`
  * application **required** `string`: The application information for the simulation application.
  * currentRevisionId `string`: The current revision id for the simulation application. If you provide a value and it matches the latest revision ID, a new version will be created.

#### Output
* output [CreateSimulationApplicationVersionResponse](#createsimulationapplicationversionresponse)

### CreateSimulationJob



```js
amazonaws_robomaker.CreateSimulationJob({
  "maxJobDurationInSeconds": 0,
  "iamRole": ""
}, context)
```

#### Input
* input `object`
  * tags `object`: A map that contains tag keys and tag values that are attached to the simulation job.
  * clientRequestToken `string`: Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
  * compute `object`: Compute information for the simulation job.
    * simulationUnitLimit
  * dataSources `array`: <p>Specify data sources to mount read-only files from S3 into your simulation. These files are available under <code>/opt/robomaker/datasources/data_source_name</code>. </p> <note> <p>There is a limit of 100 files and a combined size of 25GB for all <code>DataSourceConfig</code> objects. </p> </note>
    * items [DataSourceConfig](#datasourceconfig)
  * failureBehavior `string` (values: Fail, Continue): <p>The failure behavior the simulation job.</p> <dl> <dt>Continue</dt> <dd> <p>Restart the simulation job in the same host instance.</p> </dd> <dt>Fail</dt> <dd> <p>Stop the simulation job and terminate the instance.</p> </dd> </dl>
  * iamRole **required** `string`: The IAM role name that allows the simulation instance to call the AWS APIs that are specified in its associated policies on your behalf. This is how credentials are passed in to your simulation job. 
  * loggingConfig `object`: The logging configuration.
    * recordAllRosTopics
  * maxJobDurationInSeconds **required** `integer`: The maximum simulation job duration in seconds (up to 14 days or 1,209,600 seconds. When <code>maxJobDurationInSeconds</code> is reached, the simulation job will status will transition to <code>Completed</code>.
  * outputLocation `object`: The output location.
    * s3Bucket
    * s3Prefix
  * robotApplications `array`: The robot application to use in the simulation job.
    * items [RobotApplicationConfig](#robotapplicationconfig)
  * simulationApplications `array`: The simulation application to use in the simulation job.
    * items [SimulationApplicationConfig](#simulationapplicationconfig)
  * vpcConfig `object`: If your simulation job accesses resources in a VPC, you provide this parameter identifying the list of security group IDs and subnet IDs. These must belong to the same VPC. You must provide at least one security group and two subnet IDs.
    * assignPublicIp
    * securityGroups
      * items [NonEmptyString](#nonemptystring)
    * subnets
      * items [NonEmptyString](#nonemptystring)

#### Output
* output [CreateSimulationJobResponse](#createsimulationjobresponse)

### CreateWorldExportJob



```js
amazonaws_robomaker.CreateWorldExportJob({
  "worlds": [],
  "outputLocation": {},
  "iamRole": ""
}, context)
```

#### Input
* input `object`
  * tags `object`: A map that contains tag keys and tag values that are attached to the world export job.
  * clientRequestToken `string`: Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
  * iamRole **required** `string`: The IAM role that the world export process uses to access the Amazon S3 bucket and put the export.
  * outputLocation **required** `object`: The output location.
    * s3Bucket
    * s3Prefix
  * worlds **required** `array`: A list of Amazon Resource Names (arns) that correspond to worlds to export.
    * items [Arn](#arn)

#### Output
* output [CreateWorldExportJobResponse](#createworldexportjobresponse)

### CreateWorldGenerationJob



```js
amazonaws_robomaker.CreateWorldGenerationJob({
  "template": "",
  "worldCount": {}
}, context)
```

#### Input
* input `object`
  * tags `object`: A map that contains tag keys and tag values that are attached to the world generator job.
  * clientRequestToken `string`: Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
  * template **required** `string`: The Amazon Resource Name (arn) of the world template describing the worlds you want to create.
  * worldCount **required** `object`: <p>The number of worlds that will be created. You can configure the number of unique floorplans and the number of unique interiors for each floor plan. For example, if you want 1 world with 20 unique interiors, you set <code>floorplanCount = 1</code> and <code>interiorCountPerFloorplan = 20</code>. This will result in 20 worlds (<code>floorplanCount</code> * <code>interiorCountPerFloorplan)</code>. </p> <p>If you set <code>floorplanCount = 4</code> and <code>interiorCountPerFloorplan = 5</code>, there will be 20 worlds with 5 unique floor plans. </p>
    * floorplanCount
    * interiorCountPerFloorplan
  * worldTags `object`: A map that contains tag keys and tag values that are attached to the generated worlds.

#### Output
* output [CreateWorldGenerationJobResponse](#createworldgenerationjobresponse)

### CreateWorldTemplate



```js
amazonaws_robomaker.CreateWorldTemplate({}, context)
```

#### Input
* input `object`
  * tags `object`: A map that contains tag keys and tag values that are attached to the world template.
  * clientRequestToken `string`: Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
  * name `string`: The name of the world template.
  * templateBody `string`: The world template body.
  * templateLocation `object`: Information about a template location.
    * s3Bucket
    * s3Key

#### Output
* output [CreateWorldTemplateResponse](#createworldtemplateresponse)

### DeleteFleet



```js
amazonaws_robomaker.DeleteFleet({
  "fleet": ""
}, context)
```

#### Input
* input `object`
  * fleet **required** `string`: The Amazon Resource Name (ARN) of the fleet.

#### Output
* output [DeleteFleetResponse](#deletefleetresponse)

### DeleteRobot



```js
amazonaws_robomaker.DeleteRobot({
  "robot": ""
}, context)
```

#### Input
* input `object`
  * robot **required** `string`: The Amazon Resource Name (ARN) of the robot.

#### Output
* output [DeleteRobotResponse](#deleterobotresponse)

### DeleteRobotApplication



```js
amazonaws_robomaker.DeleteRobotApplication({
  "application": ""
}, context)
```

#### Input
* input `object`
  * application **required** `string`: The Amazon Resource Name (ARN) of the the robot application.
  * applicationVersion `string`: The version of the robot application to delete.

#### Output
* output [DeleteRobotApplicationResponse](#deleterobotapplicationresponse)

### DeleteSimulationApplication



```js
amazonaws_robomaker.DeleteSimulationApplication({
  "application": ""
}, context)
```

#### Input
* input `object`
  * application **required** `string`: The application information for the simulation application to delete.
  * applicationVersion `string`: The version of the simulation application to delete.

#### Output
* output [DeleteSimulationApplicationResponse](#deletesimulationapplicationresponse)

### DeleteWorldTemplate



```js
amazonaws_robomaker.DeleteWorldTemplate({
  "template": ""
}, context)
```

#### Input
* input `object`
  * template **required** `string`: The Amazon Resource Name (arn) of the world template you want to delete.

#### Output
* output [DeleteWorldTemplateResponse](#deleteworldtemplateresponse)

### DeregisterRobot



```js
amazonaws_robomaker.DeregisterRobot({
  "fleet": "",
  "robot": ""
}, context)
```

#### Input
* input `object`
  * fleet **required** `string`: The Amazon Resource Name (ARN) of the fleet.
  * robot **required** `string`: The Amazon Resource Name (ARN) of the robot.

#### Output
* output [DeregisterRobotResponse](#deregisterrobotresponse)

### DescribeDeploymentJob



```js
amazonaws_robomaker.DescribeDeploymentJob({
  "job": ""
}, context)
```

#### Input
* input `object`
  * job **required** `string`: The Amazon Resource Name (ARN) of the deployment job.

#### Output
* output [DescribeDeploymentJobResponse](#describedeploymentjobresponse)

### DescribeFleet



```js
amazonaws_robomaker.DescribeFleet({
  "fleet": ""
}, context)
```

#### Input
* input `object`
  * fleet **required** `string`: The Amazon Resource Name (ARN) of the fleet.

#### Output
* output [DescribeFleetResponse](#describefleetresponse)

### DescribeRobot



```js
amazonaws_robomaker.DescribeRobot({
  "robot": ""
}, context)
```

#### Input
* input `object`
  * robot **required** `string`: The Amazon Resource Name (ARN) of the robot to be described.

#### Output
* output [DescribeRobotResponse](#describerobotresponse)

### DescribeRobotApplication



```js
amazonaws_robomaker.DescribeRobotApplication({
  "application": ""
}, context)
```

#### Input
* input `object`
  * application **required** `string`: The Amazon Resource Name (ARN) of the robot application.
  * applicationVersion `string`: The version of the robot application to describe.

#### Output
* output [DescribeRobotApplicationResponse](#describerobotapplicationresponse)

### DescribeSimulationApplication



```js
amazonaws_robomaker.DescribeSimulationApplication({
  "application": ""
}, context)
```

#### Input
* input `object`
  * application **required** `string`: The application information for the simulation application.
  * applicationVersion `string`: The version of the simulation application to describe.

#### Output
* output [DescribeSimulationApplicationResponse](#describesimulationapplicationresponse)

### DescribeSimulationJob



```js
amazonaws_robomaker.DescribeSimulationJob({
  "job": ""
}, context)
```

#### Input
* input `object`
  * job **required** `string`: The Amazon Resource Name (ARN) of the simulation job to be described.

#### Output
* output [DescribeSimulationJobResponse](#describesimulationjobresponse)

### DescribeSimulationJobBatch



```js
amazonaws_robomaker.DescribeSimulationJobBatch({
  "batch": ""
}, context)
```

#### Input
* input `object`
  * batch **required** `string`: The id of the batch to describe.

#### Output
* output [DescribeSimulationJobBatchResponse](#describesimulationjobbatchresponse)

### DescribeWorld



```js
amazonaws_robomaker.DescribeWorld({
  "world": ""
}, context)
```

#### Input
* input `object`
  * world **required** `string`: The Amazon Resource Name (arn) of the world you want to describe.

#### Output
* output [DescribeWorldResponse](#describeworldresponse)

### DescribeWorldExportJob



```js
amazonaws_robomaker.DescribeWorldExportJob({
  "job": ""
}, context)
```

#### Input
* input `object`
  * job **required** `string`: The Amazon Resource Name (arn) of the world export job to describe.

#### Output
* output [DescribeWorldExportJobResponse](#describeworldexportjobresponse)

### DescribeWorldGenerationJob



```js
amazonaws_robomaker.DescribeWorldGenerationJob({
  "job": ""
}, context)
```

#### Input
* input `object`
  * job **required** `string`: The Amazon Resource Name (arn) of the world generation job to describe.

#### Output
* output [DescribeWorldGenerationJobResponse](#describeworldgenerationjobresponse)

### DescribeWorldTemplate



```js
amazonaws_robomaker.DescribeWorldTemplate({
  "template": ""
}, context)
```

#### Input
* input `object`
  * template **required** `string`: The Amazon Resource Name (arn) of the world template you want to describe.

#### Output
* output [DescribeWorldTemplateResponse](#describeworldtemplateresponse)

### GetWorldTemplateBody



```js
amazonaws_robomaker.GetWorldTemplateBody({}, context)
```

#### Input
* input `object`
  * generationJob `string`: The Amazon Resource Name (arn) of the world generator job.
  * template `string`: The Amazon Resource Name (arn) of the world template.

#### Output
* output [GetWorldTemplateBodyResponse](#getworldtemplatebodyresponse)

### ListDeploymentJobs



```js
amazonaws_robomaker.ListDeploymentJobs({}, context)
```

#### Input
* input `object`
  * maxResults `string`
  * nextToken `string`
  * filters `array`: <p>Optional filters to limit results.</p> <p>The filter names <code>status</code> and <code>fleetName</code> are supported. When filtering, you must use the complete value of the filtered item. You can use up to three filters, but they must be for the same named item. For example, if you are looking for items with the status <code>InProgress</code> or the status <code>Pending</code>.</p>
    * items [Filter](#filter)
  * maxResults `integer`: When this parameter is used, <code>ListDeploymentJobs</code> only returns <code>maxResults</code> results in a single page along with a <code>nextToken</code> response element. The remaining results of the initial request can be seen by sending another <code>ListDeploymentJobs</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 200. If this parameter is not used, then <code>ListDeploymentJobs</code> returns up to 200 results and a <code>nextToken</code> value if applicable. 
  * nextToken `string`: If the previous paginated request did not return all of the remaining results, the response object's <code>nextToken</code> parameter value is set to a token. To retrieve the next set of results, call <code>ListDeploymentJobs</code> again and assign that token to the request object's <code>nextToken</code> parameter. If there are no remaining results, the previous response object's NextToken parameter is set to null. 

#### Output
* output [ListDeploymentJobsResponse](#listdeploymentjobsresponse)

### ListFleets



```js
amazonaws_robomaker.ListFleets({}, context)
```

#### Input
* input `object`
  * maxResults `string`
  * nextToken `string`
  * filters `array`: <p>Optional filters to limit results.</p> <p>The filter name <code>name</code> is supported. When filtering, you must use the complete value of the filtered item. You can use up to three filters.</p>
    * items [Filter](#filter)
  * maxResults `integer`: When this parameter is used, <code>ListFleets</code> only returns <code>maxResults</code> results in a single page along with a <code>nextToken</code> response element. The remaining results of the initial request can be seen by sending another <code>ListFleets</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 200. If this parameter is not used, then <code>ListFleets</code> returns up to 200 results and a <code>nextToken</code> value if applicable. 
  * nextToken `string`: <p>If the previous paginated request did not return all of the remaining results, the response object's <code>nextToken</code> parameter value is set to a token. To retrieve the next set of results, call <code>ListFleets</code> again and assign that token to the request object's <code>nextToken</code> parameter. If there are no remaining results, the previous response object's NextToken parameter is set to null. </p> <note> <p>This token should be treated as an opaque identifier that is only used to retrieve the next items in a list and not for other programmatic purposes.</p> </note>

#### Output
* output [ListFleetsResponse](#listfleetsresponse)

### ListRobotApplications



```js
amazonaws_robomaker.ListRobotApplications({}, context)
```

#### Input
* input `object`
  * maxResults `string`
  * nextToken `string`
  * filters `array`: <p>Optional filters to limit results.</p> <p>The filter name <code>name</code> is supported. When filtering, you must use the complete value of the filtered item. You can use up to three filters.</p>
    * items [Filter](#filter)
  * maxResults `integer`: When this parameter is used, <code>ListRobotApplications</code> only returns <code>maxResults</code> results in a single page along with a <code>nextToken</code> response element. The remaining results of the initial request can be seen by sending another <code>ListRobotApplications</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 100. If this parameter is not used, then <code>ListRobotApplications</code> returns up to 100 results and a <code>nextToken</code> value if applicable. 
  * nextToken `string`: If the previous paginated request did not return all of the remaining results, the response object's <code>nextToken</code> parameter value is set to a token. To retrieve the next set of results, call <code>ListRobotApplications</code> again and assign that token to the request object's <code>nextToken</code> parameter. If there are no remaining results, the previous response object's NextToken parameter is set to null. 
  * versionQualifier `string`: The version qualifier of the robot application.

#### Output
* output [ListRobotApplicationsResponse](#listrobotapplicationsresponse)

### ListRobots



```js
amazonaws_robomaker.ListRobots({}, context)
```

#### Input
* input `object`
  * maxResults `string`
  * nextToken `string`
  * filters `array`: <p>Optional filters to limit results.</p> <p>The filter names <code>status</code> and <code>fleetName</code> are supported. When filtering, you must use the complete value of the filtered item. You can use up to three filters, but they must be for the same named item. For example, if you are looking for items with the status <code>Registered</code> or the status <code>Available</code>.</p>
    * items [Filter](#filter)
  * maxResults `integer`: When this parameter is used, <code>ListRobots</code> only returns <code>maxResults</code> results in a single page along with a <code>nextToken</code> response element. The remaining results of the initial request can be seen by sending another <code>ListRobots</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 200. If this parameter is not used, then <code>ListRobots</code> returns up to 200 results and a <code>nextToken</code> value if applicable. 
  * nextToken `string`: If the previous paginated request did not return all of the remaining results, the response object's <code>nextToken</code> parameter value is set to a token. To retrieve the next set of results, call <code>ListRobots</code> again and assign that token to the request object's <code>nextToken</code> parameter. If there are no remaining results, the previous response object's NextToken parameter is set to null. 

#### Output
* output [ListRobotsResponse](#listrobotsresponse)

### ListSimulationApplications



```js
amazonaws_robomaker.ListSimulationApplications({}, context)
```

#### Input
* input `object`
  * maxResults `string`
  * nextToken `string`
  * filters `array`: <p>Optional list of filters to limit results.</p> <p>The filter name <code>name</code> is supported. When filtering, you must use the complete value of the filtered item. You can use up to three filters.</p>
    * items [Filter](#filter)
  * maxResults `integer`: When this parameter is used, <code>ListSimulationApplications</code> only returns <code>maxResults</code> results in a single page along with a <code>nextToken</code> response element. The remaining results of the initial request can be seen by sending another <code>ListSimulationApplications</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 100. If this parameter is not used, then <code>ListSimulationApplications</code> returns up to 100 results and a <code>nextToken</code> value if applicable. 
  * nextToken `string`: If the previous paginated request did not return all of the remaining results, the response object's <code>nextToken</code> parameter value is set to a token. To retrieve the next set of results, call <code>ListSimulationApplications</code> again and assign that token to the request object's <code>nextToken</code> parameter. If there are no remaining results, the previous response object's NextToken parameter is set to null. 
  * versionQualifier `string`: The version qualifier of the simulation application.

#### Output
* output [ListSimulationApplicationsResponse](#listsimulationapplicationsresponse)

### ListSimulationJobBatches



```js
amazonaws_robomaker.ListSimulationJobBatches({}, context)
```

#### Input
* input `object`
  * maxResults `string`
  * nextToken `string`
  * filters `array`: Optional filters to limit results.
    * items [Filter](#filter)
  * maxResults `integer`: When this parameter is used, <code>ListSimulationJobBatches</code> only returns <code>maxResults</code> results in a single page along with a <code>nextToken</code> response element. The remaining results of the initial request can be seen by sending another <code>ListSimulationJobBatches</code> request with the returned <code>nextToken</code> value. 
  * nextToken `string`: If the previous paginated request did not return all of the remaining results, the response object's <code>nextToken</code> parameter value is set to a token. To retrieve the next set of results, call <code>ListSimulationJobBatches</code> again and assign that token to the request object's <code>nextToken</code> parameter. If there are no remaining results, the previous response object's NextToken parameter is set to null. 

#### Output
* output [ListSimulationJobBatchesResponse](#listsimulationjobbatchesresponse)

### ListSimulationJobs



```js
amazonaws_robomaker.ListSimulationJobs({}, context)
```

#### Input
* input `object`
  * maxResults `string`
  * nextToken `string`
  * filters `array`: <p>Optional filters to limit results.</p> <p>The filter names <code>status</code> and <code>simulationApplicationName</code> and <code>robotApplicationName</code> are supported. When filtering, you must use the complete value of the filtered item. You can use up to three filters, but they must be for the same named item. For example, if you are looking for items with the status <code>Preparing</code> or the status <code>Running</code>.</p>
    * items [Filter](#filter)
  * maxResults `integer`: When this parameter is used, <code>ListSimulationJobs</code> only returns <code>maxResults</code> results in a single page along with a <code>nextToken</code> response element. The remaining results of the initial request can be seen by sending another <code>ListSimulationJobs</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 1000. If this parameter is not used, then <code>ListSimulationJobs</code> returns up to 1000 results and a <code>nextToken</code> value if applicable. 
  * nextToken `string`: If the previous paginated request did not return all of the remaining results, the response object's <code>nextToken</code> parameter value is set to a token. To retrieve the next set of results, call <code>ListSimulationJobs</code> again and assign that token to the request object's <code>nextToken</code> parameter. If there are no remaining results, the previous response object's NextToken parameter is set to null. 

#### Output
* output [ListSimulationJobsResponse](#listsimulationjobsresponse)

### ListWorldExportJobs



```js
amazonaws_robomaker.ListWorldExportJobs({}, context)
```

#### Input
* input `object`
  * maxResults `string`
  * nextToken `string`
  * filters `array`: Optional filters to limit results. You can use <code>generationJobId</code> and <code>templateId</code>.
    * items [Filter](#filter)
  * maxResults `integer`: When this parameter is used, <code>ListWorldExportJobs</code> only returns <code>maxResults</code> results in a single page along with a <code>nextToken</code> response element. The remaining results of the initial request can be seen by sending another <code>ListWorldExportJobs</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 100. If this parameter is not used, then <code>ListWorldExportJobs</code> returns up to 100 results and a <code>nextToken</code> value if applicable. 
  * nextToken `string`: If the previous paginated request did not return all of the remaining results, the response object's <code>nextToken</code> parameter value is set to a token. To retrieve the next set of results, call <code>ListWorldExportJobs</code> again and assign that token to the request object's <code>nextToken</code> parameter. If there are no remaining results, the previous response object's NextToken parameter is set to null. 

#### Output
* output [ListWorldExportJobsResponse](#listworldexportjobsresponse)

### ListWorldGenerationJobs



```js
amazonaws_robomaker.ListWorldGenerationJobs({}, context)
```

#### Input
* input `object`
  * maxResults `string`
  * nextToken `string`
  * filters `array`: Optional filters to limit results. You can use <code>status</code> and <code>templateId</code>.
    * items [Filter](#filter)
  * maxResults `integer`: When this parameter is used, <code>ListWorldGeneratorJobs</code> only returns <code>maxResults</code> results in a single page along with a <code>nextToken</code> response element. The remaining results of the initial request can be seen by sending another <code>ListWorldGeneratorJobs</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 100. If this parameter is not used, then <code>ListWorldGeneratorJobs</code> returns up to 100 results and a <code>nextToken</code> value if applicable. 
  * nextToken `string`: If the previous paginated request did not return all of the remaining results, the response object's <code>nextToken</code> parameter value is set to a token. To retrieve the next set of results, call <code>ListWorldGenerationJobsRequest</code> again and assign that token to the request object's <code>nextToken</code> parameter. If there are no remaining results, the previous response object's NextToken parameter is set to null. 

#### Output
* output [ListWorldGenerationJobsResponse](#listworldgenerationjobsresponse)

### ListWorldTemplates



```js
amazonaws_robomaker.ListWorldTemplates({}, context)
```

#### Input
* input `object`
  * maxResults `string`
  * nextToken `string`
  * maxResults `integer`: When this parameter is used, <code>ListWorldTemplates</code> only returns <code>maxResults</code> results in a single page along with a <code>nextToken</code> response element. The remaining results of the initial request can be seen by sending another <code>ListWorldTemplates</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 100. If this parameter is not used, then <code>ListWorldTemplates</code> returns up to 100 results and a <code>nextToken</code> value if applicable. 
  * nextToken `string`: If the previous paginated request did not return all of the remaining results, the response object's <code>nextToken</code> parameter value is set to a token. To retrieve the next set of results, call <code>ListWorldTemplates</code> again and assign that token to the request object's <code>nextToken</code> parameter. If there are no remaining results, the previous response object's NextToken parameter is set to null. 

#### Output
* output [ListWorldTemplatesResponse](#listworldtemplatesresponse)

### ListWorlds



```js
amazonaws_robomaker.ListWorlds({}, context)
```

#### Input
* input `object`
  * maxResults `string`
  * nextToken `string`
  * filters `array`: Optional filters to limit results. You can use <code>status</code>.
    * items [Filter](#filter)
  * maxResults `integer`: When this parameter is used, <code>ListWorlds</code> only returns <code>maxResults</code> results in a single page along with a <code>nextToken</code> response element. The remaining results of the initial request can be seen by sending another <code>ListWorlds</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 100. If this parameter is not used, then <code>ListWorlds</code> returns up to 100 results and a <code>nextToken</code> value if applicable. 
  * nextToken `string`: If the previous paginated request did not return all of the remaining results, the response object's <code>nextToken</code> parameter value is set to a token. To retrieve the next set of results, call <code>ListWorlds</code> again and assign that token to the request object's <code>nextToken</code> parameter. If there are no remaining results, the previous response object's NextToken parameter is set to null. 

#### Output
* output [ListWorldsResponse](#listworldsresponse)

### RegisterRobot



```js
amazonaws_robomaker.RegisterRobot({
  "fleet": "",
  "robot": ""
}, context)
```

#### Input
* input `object`
  * fleet **required** `string`: The Amazon Resource Name (ARN) of the fleet.
  * robot **required** `string`: The Amazon Resource Name (ARN) of the robot.

#### Output
* output [RegisterRobotResponse](#registerrobotresponse)

### RestartSimulationJob



```js
amazonaws_robomaker.RestartSimulationJob({
  "job": ""
}, context)
```

#### Input
* input `object`
  * job **required** `string`: The Amazon Resource Name (ARN) of the simulation job.

#### Output
* output [RestartSimulationJobResponse](#restartsimulationjobresponse)

### StartSimulationJobBatch



```js
amazonaws_robomaker.StartSimulationJobBatch({
  "createSimulationJobRequests": []
}, context)
```

#### Input
* input `object`
  * tags `object`: A map that contains tag keys and tag values that are attached to the deployment job batch.
  * batchPolicy `object`: Information about the batch policy.
    * maxConcurrency
    * timeoutInSeconds
  * clientRequestToken `string`: Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
  * createSimulationJobRequests **required** `array`: A list of simulation job requests to create in the batch.
    * items [SimulationJobRequest](#simulationjobrequest)

#### Output
* output [StartSimulationJobBatchResponse](#startsimulationjobbatchresponse)

### SyncDeploymentJob



```js
amazonaws_robomaker.SyncDeploymentJob({
  "clientRequestToken": "",
  "fleet": ""
}, context)
```

#### Input
* input `object`
  * clientRequestToken **required** `string`: Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
  * fleet **required** `string`: The target fleet for the synchronization.

#### Output
* output [SyncDeploymentJobResponse](#syncdeploymentjobresponse)

### ListTagsForResource



```js
amazonaws_robomaker.ListTagsForResource({
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
amazonaws_robomaker.TagResource({
  "resourceArn": "",
  "tags": {}
}, context)
```

#### Input
* input `object`
  * resourceArn **required** `string`
  * tags **required** `object`: A map that contains tag keys and tag values that are attached to the resource.

#### Output
* output [TagResourceResponse](#tagresourceresponse)

### UntagResource



```js
amazonaws_robomaker.UntagResource({
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

### UpdateRobotApplication



```js
amazonaws_robomaker.UpdateRobotApplication({
  "application": "",
  "sources": [],
  "robotSoftwareSuite": {}
}, context)
```

#### Input
* input `object`
  * application **required** `string`: The application information for the robot application.
  * currentRevisionId `string`: The revision id for the robot application.
  * robotSoftwareSuite **required** `object`: Information about a robot software suite (ROS distribution).
    * name
    * version
  * sources **required** `array`: The sources of the robot application.
    * items [SourceConfig](#sourceconfig)

#### Output
* output [UpdateRobotApplicationResponse](#updaterobotapplicationresponse)

### UpdateSimulationApplication



```js
amazonaws_robomaker.UpdateSimulationApplication({
  "application": "",
  "sources": [],
  "simulationSoftwareSuite": {},
  "robotSoftwareSuite": {}
}, context)
```

#### Input
* input `object`
  * application **required** `string`: The application information for the simulation application.
  * currentRevisionId `string`: The revision id for the robot application.
  * renderingEngine `object`: Information about a rendering engine.
    * name
    * version
  * robotSoftwareSuite **required** `object`: Information about a robot software suite (ROS distribution).
    * name
    * version
  * simulationSoftwareSuite **required** `object`: Information about a simulation software suite.
    * name
    * version
  * sources **required** `array`: The sources of the simulation application.
    * items [SourceConfig](#sourceconfig)

#### Output
* output [UpdateSimulationApplicationResponse](#updatesimulationapplicationresponse)

### UpdateWorldTemplate



```js
amazonaws_robomaker.UpdateWorldTemplate({
  "template": ""
}, context)
```

#### Input
* input `object`
  * name `string`: The name of the template.
  * template **required** `string`: The Amazon Resource Name (arn) of the world template to update.
  * templateBody `string`: The world template body.
  * templateLocation `object`: Information about a template location.
    * s3Bucket
    * s3Key

#### Output
* output [UpdateWorldTemplateResponse](#updateworldtemplateresponse)



## Definitions

### Architecture
* Architecture `string` (values: X86_64, ARM64, ARMHF)

### Arn
* Arn `string`

### Arns
* Arns `array`
  * items [Arn](#arn)

### BatchDeleteWorldsRequest
* BatchDeleteWorldsRequest `object`
  * worlds **required**
    * items [Arn](#arn)

### BatchDeleteWorldsResponse
* BatchDeleteWorldsResponse `object`
  * unprocessedWorlds
    * items [Arn](#arn)

### BatchDescribeSimulationJobRequest
* BatchDescribeSimulationJobRequest `object`
  * jobs **required**
    * items [Arn](#arn)

### BatchDescribeSimulationJobResponse
* BatchDescribeSimulationJobResponse `object`
  * jobs
    * items [SimulationJob](#simulationjob)
  * unprocessedJobs
    * items [Arn](#arn)

### BatchPolicy
* BatchPolicy `object`: Information about the batch policy.
  * maxConcurrency
  * timeoutInSeconds

### BatchTimeoutInSeconds
* BatchTimeoutInSeconds `integer`

### Boolean
* Boolean `boolean`

### BoxedBoolean
* BoxedBoolean `boolean`

### CancelDeploymentJobRequest
* CancelDeploymentJobRequest `object`
  * job **required**

### CancelDeploymentJobResponse
* CancelDeploymentJobResponse `object`

### CancelSimulationJobBatchRequest
* CancelSimulationJobBatchRequest `object`
  * batch **required**

### CancelSimulationJobBatchResponse
* CancelSimulationJobBatchResponse `object`

### CancelSimulationJobRequest
* CancelSimulationJobRequest `object`
  * job **required**

### CancelSimulationJobResponse
* CancelSimulationJobResponse `object`

### CancelWorldExportJobRequest
* CancelWorldExportJobRequest `object`
  * job **required**

### CancelWorldExportJobResponse
* CancelWorldExportJobResponse `object`

### CancelWorldGenerationJobRequest
* CancelWorldGenerationJobRequest `object`
  * job **required**

### CancelWorldGenerationJobResponse
* CancelWorldGenerationJobResponse `object`

### ClientRequestToken
* ClientRequestToken `string`

### Command
* Command `string`

### Compute
* Compute `object`: Compute information for the simulation job.
  * simulationUnitLimit

### ComputeResponse
* ComputeResponse `object`: Compute information for the simulation job
  * simulationUnitLimit

### ConcurrentDeploymentException


### CreateDeploymentJobRequest
* CreateDeploymentJobRequest `object`
  * tags
  * clientRequestToken **required**
  * deploymentApplicationConfigs **required**
    * items [DeploymentApplicationConfig](#deploymentapplicationconfig)
  * deploymentConfig
    * concurrentDeploymentPercentage
    * downloadConditionFile
      * bucket **required**
      * etag
      * key **required**
    * failureThresholdPercentage
    * robotDeploymentTimeoutInSeconds
  * fleet **required**

### CreateDeploymentJobResponse
* CreateDeploymentJobResponse `object`
  * tags
  * arn
  * createdAt
  * deploymentApplicationConfigs
    * items [DeploymentApplicationConfig](#deploymentapplicationconfig)
  * deploymentConfig
    * concurrentDeploymentPercentage
    * downloadConditionFile
      * bucket **required**
      * etag
      * key **required**
    * failureThresholdPercentage
    * robotDeploymentTimeoutInSeconds
  * failureCode
  * failureReason
  * fleet
  * status

### CreateFleetRequest
* CreateFleetRequest `object`
  * tags
  * name **required**

### CreateFleetResponse
* CreateFleetResponse `object`
  * tags
  * arn
  * createdAt
  * name

### CreateRobotApplicationRequest
* CreateRobotApplicationRequest `object`
  * tags
  * name **required**
  * robotSoftwareSuite **required**
    * name
    * version
  * sources **required**
    * items [SourceConfig](#sourceconfig)

### CreateRobotApplicationResponse
* CreateRobotApplicationResponse `object`
  * tags
  * arn
  * lastUpdatedAt
  * name
  * revisionId
  * robotSoftwareSuite
    * name
    * version
  * sources
    * items [Source](#source)
  * version

### CreateRobotApplicationVersionRequest
* CreateRobotApplicationVersionRequest `object`
  * application **required**
  * currentRevisionId

### CreateRobotApplicationVersionResponse
* CreateRobotApplicationVersionResponse `object`
  * arn
  * lastUpdatedAt
  * name
  * revisionId
  * robotSoftwareSuite
    * name
    * version
  * sources
    * items [Source](#source)
  * version

### CreateRobotRequest
* CreateRobotRequest `object`
  * tags
  * architecture **required**
  * greengrassGroupId **required**
  * name **required**

### CreateRobotResponse
* CreateRobotResponse `object`
  * tags
  * architecture
  * arn
  * createdAt
  * greengrassGroupId
  * name

### CreateSimulationApplicationRequest
* CreateSimulationApplicationRequest `object`
  * tags
  * name **required**
  * renderingEngine
    * name
    * version
  * robotSoftwareSuite **required**
    * name
    * version
  * simulationSoftwareSuite **required**
    * name
    * version
  * sources **required**
    * items [SourceConfig](#sourceconfig)

### CreateSimulationApplicationResponse
* CreateSimulationApplicationResponse `object`
  * tags
  * arn
  * lastUpdatedAt
  * name
  * renderingEngine
    * name
    * version
  * revisionId
  * robotSoftwareSuite
    * name
    * version
  * simulationSoftwareSuite
    * name
    * version
  * sources
    * items [Source](#source)
  * version

### CreateSimulationApplicationVersionRequest
* CreateSimulationApplicationVersionRequest `object`
  * application **required**
  * currentRevisionId

### CreateSimulationApplicationVersionResponse
* CreateSimulationApplicationVersionResponse `object`
  * arn
  * lastUpdatedAt
  * name
  * renderingEngine
    * name
    * version
  * revisionId
  * robotSoftwareSuite
    * name
    * version
  * simulationSoftwareSuite
    * name
    * version
  * sources
    * items [Source](#source)
  * version

### CreateSimulationJobRequest
* CreateSimulationJobRequest `object`
  * tags
  * clientRequestToken
  * compute
    * simulationUnitLimit
  * dataSources
    * items [DataSourceConfig](#datasourceconfig)
  * failureBehavior
  * iamRole **required**
  * loggingConfig
    * recordAllRosTopics **required**
  * maxJobDurationInSeconds **required**
  * outputLocation
    * s3Bucket
    * s3Prefix
  * robotApplications
    * items [RobotApplicationConfig](#robotapplicationconfig)
  * simulationApplications
    * items [SimulationApplicationConfig](#simulationapplicationconfig)
  * vpcConfig
    * assignPublicIp
    * securityGroups
      * items [NonEmptyString](#nonemptystring)
    * subnets **required**
      * items [NonEmptyString](#nonemptystring)

### CreateSimulationJobRequests
* CreateSimulationJobRequests `array`
  * items [SimulationJobRequest](#simulationjobrequest)

### CreateSimulationJobResponse
* CreateSimulationJobResponse `object`
  * tags
  * arn
  * clientRequestToken
  * compute
    * simulationUnitLimit
  * dataSources
    * items [DataSource](#datasource)
  * failureBehavior
  * failureCode
  * iamRole
  * lastStartedAt
  * lastUpdatedAt
  * loggingConfig
    * recordAllRosTopics **required**
  * maxJobDurationInSeconds
  * outputLocation
    * s3Bucket
    * s3Prefix
  * robotApplications
    * items [RobotApplicationConfig](#robotapplicationconfig)
  * simulationApplications
    * items [SimulationApplicationConfig](#simulationapplicationconfig)
  * simulationTimeMillis
  * status
  * vpcConfig
    * assignPublicIp
    * securityGroups
      * items [NonEmptyString](#nonemptystring)
    * subnets
      * items [NonEmptyString](#nonemptystring)
    * vpcId

### CreateWorldExportJobRequest
* CreateWorldExportJobRequest `object`
  * tags
  * clientRequestToken
  * iamRole **required**
  * outputLocation **required** [OutputLocation](#outputlocation)
  * worlds **required**
    * items [Arn](#arn)

### CreateWorldExportJobResponse
* CreateWorldExportJobResponse `object`
  * tags
  * arn
  * clientRequestToken
  * createdAt
  * failureCode
  * iamRole
  * outputLocation [OutputLocation](#outputlocation)
  * status

### CreateWorldGenerationJobRequest
* CreateWorldGenerationJobRequest `object`
  * tags
  * clientRequestToken
  * template **required**
  * worldCount **required**
    * floorplanCount
    * interiorCountPerFloorplan
  * worldTags

### CreateWorldGenerationJobResponse
* CreateWorldGenerationJobResponse `object`
  * tags
  * arn
  * clientRequestToken
  * createdAt
  * failureCode
  * status
  * template
  * worldCount
    * floorplanCount
    * interiorCountPerFloorplan
  * worldTags

### CreateWorldTemplateRequest
* CreateWorldTemplateRequest `object`
  * tags
  * clientRequestToken
  * name
  * templateBody
  * templateLocation
    * s3Bucket **required**
    * s3Key **required**

### CreateWorldTemplateResponse
* CreateWorldTemplateResponse `object`
  * tags
  * arn
  * clientRequestToken
  * createdAt
  * name

### CreatedAt
* CreatedAt `string`

### DataSource
* DataSource `object`: Information about a data source.
  * name
  * s3Bucket
  * s3Keys
    * items [S3KeyOutput](#s3keyoutput)

### DataSourceConfig
* DataSourceConfig `object`: Information about a data source.
  * name **required**
  * s3Bucket **required**
  * s3Keys **required**
    * items [S3Key](#s3key)

### DataSourceConfigs
* DataSourceConfigs `array`
  * items [DataSourceConfig](#datasourceconfig)

### DataSourceNames
* DataSourceNames `array`
  * items [Name](#name)

### DataSources
* DataSources `array`
  * items [DataSource](#datasource)

### DeleteFleetRequest
* DeleteFleetRequest `object`
  * fleet **required**

### DeleteFleetResponse
* DeleteFleetResponse `object`

### DeleteRobotApplicationRequest
* DeleteRobotApplicationRequest `object`
  * application **required**
  * applicationVersion

### DeleteRobotApplicationResponse
* DeleteRobotApplicationResponse `object`

### DeleteRobotRequest
* DeleteRobotRequest `object`
  * robot **required**

### DeleteRobotResponse
* DeleteRobotResponse `object`

### DeleteSimulationApplicationRequest
* DeleteSimulationApplicationRequest `object`
  * application **required**
  * applicationVersion

### DeleteSimulationApplicationResponse
* DeleteSimulationApplicationResponse `object`

### DeleteWorldTemplateRequest
* DeleteWorldTemplateRequest `object`
  * template **required**

### DeleteWorldTemplateResponse
* DeleteWorldTemplateResponse `object`

### DeploymentApplicationConfig
* DeploymentApplicationConfig `object`: Information about a deployment application configuration.
  * application **required**
  * applicationVersion **required**
  * launchConfig **required**
    * environmentVariables
    * launchFile **required**
    * packageName **required**
    * postLaunchFile
    * preLaunchFile

### DeploymentApplicationConfigs
* DeploymentApplicationConfigs `array`
  * items [DeploymentApplicationConfig](#deploymentapplicationconfig)

### DeploymentConfig
* DeploymentConfig `object`: Information about a deployment configuration.
  * concurrentDeploymentPercentage
  * downloadConditionFile
    * bucket **required**
    * etag
    * key **required**
  * failureThresholdPercentage
  * robotDeploymentTimeoutInSeconds

### DeploymentJob
* DeploymentJob `object`: Information about a deployment job.
  * arn
  * createdAt
  * deploymentApplicationConfigs
    * items [DeploymentApplicationConfig](#deploymentapplicationconfig)
  * deploymentConfig
    * concurrentDeploymentPercentage
    * downloadConditionFile
      * bucket **required**
      * etag
      * key **required**
    * failureThresholdPercentage
    * robotDeploymentTimeoutInSeconds
  * failureCode
  * failureReason
  * fleet
  * status

### DeploymentJobErrorCode
* DeploymentJobErrorCode `string` (values: ResourceNotFound, EnvironmentSetupError, EtagMismatch, FailureThresholdBreached, RobotDeploymentAborted, RobotDeploymentNoResponse, RobotAgentConnectionTimeout, GreengrassDeploymentFailed, InvalidGreengrassGroup, MissingRobotArchitecture, MissingRobotApplicationArchitecture, MissingRobotDeploymentResource, GreengrassGroupVersionDoesNotExist, LambdaDeleted, ExtractingBundleFailure, PreLaunchFileFailure, PostLaunchFileFailure, BadPermissionError, DownloadConditionFailed, InternalServerError)

### DeploymentJobs
* DeploymentJobs `array`
  * items [DeploymentJob](#deploymentjob)

### DeploymentLaunchConfig
* DeploymentLaunchConfig `object`: Configuration information for a deployment launch.
  * environmentVariables
  * launchFile **required**
  * packageName **required**
  * postLaunchFile
  * preLaunchFile

### DeploymentStatus
* DeploymentStatus `string` (values: Pending, Preparing, InProgress, Failed, Succeeded, Canceled)

### DeploymentTimeout
* DeploymentTimeout `integer`

### DeploymentVersion
* DeploymentVersion `string`

### DeregisterRobotRequest
* DeregisterRobotRequest `object`
  * fleet **required**
  * robot **required**

### DeregisterRobotResponse
* DeregisterRobotResponse `object`
  * fleet
  * robot

### DescribeDeploymentJobRequest
* DescribeDeploymentJobRequest `object`
  * job **required**

### DescribeDeploymentJobResponse
* DescribeDeploymentJobResponse `object`
  * tags
  * arn
  * createdAt
  * deploymentApplicationConfigs
    * items [DeploymentApplicationConfig](#deploymentapplicationconfig)
  * deploymentConfig
    * concurrentDeploymentPercentage
    * downloadConditionFile
      * bucket **required**
      * etag
      * key **required**
    * failureThresholdPercentage
    * robotDeploymentTimeoutInSeconds
  * failureCode
  * failureReason
  * fleet
  * robotDeploymentSummary
    * items [RobotDeployment](#robotdeployment)
  * status

### DescribeFleetRequest
* DescribeFleetRequest `object`
  * fleet **required**

### DescribeFleetResponse
* DescribeFleetResponse `object`
  * tags
  * arn
  * createdAt
  * lastDeploymentJob
  * lastDeploymentStatus
  * lastDeploymentTime
  * name
  * robots
    * items [Robot](#robot)

### DescribeRobotApplicationRequest
* DescribeRobotApplicationRequest `object`
  * application **required**
  * applicationVersion

### DescribeRobotApplicationResponse
* DescribeRobotApplicationResponse `object`
  * tags
  * arn
  * lastUpdatedAt
  * name
  * revisionId
  * robotSoftwareSuite
    * name
    * version
  * sources
    * items [Source](#source)
  * version

### DescribeRobotRequest
* DescribeRobotRequest `object`
  * robot **required**

### DescribeRobotResponse
* DescribeRobotResponse `object`
  * tags
  * architecture
  * arn
  * createdAt
  * fleetArn
  * greengrassGroupId
  * lastDeploymentJob
  * lastDeploymentTime
  * name
  * status

### DescribeSimulationApplicationRequest
* DescribeSimulationApplicationRequest `object`
  * application **required**
  * applicationVersion

### DescribeSimulationApplicationResponse
* DescribeSimulationApplicationResponse `object`
  * tags
  * arn
  * lastUpdatedAt
  * name
  * renderingEngine
    * name
    * version
  * revisionId
  * robotSoftwareSuite
    * name
    * version
  * simulationSoftwareSuite
    * name
    * version
  * sources
    * items [Source](#source)
  * version

### DescribeSimulationJobBatchRequest
* DescribeSimulationJobBatchRequest `object`
  * batch **required**

### DescribeSimulationJobBatchResponse
* DescribeSimulationJobBatchResponse `object`
  * tags
  * arn
  * batchPolicy
    * maxConcurrency
    * timeoutInSeconds
  * clientRequestToken
  * createdAt
  * createdRequests
    * items [SimulationJobSummary](#simulationjobsummary)
  * failedRequests
    * items [FailedCreateSimulationJobRequest](#failedcreatesimulationjobrequest)
  * failureCode
  * failureReason
  * lastUpdatedAt
  * pendingRequests
    * items [SimulationJobRequest](#simulationjobrequest)
  * status

### DescribeSimulationJobRequest
* DescribeSimulationJobRequest `object`
  * job **required**

### DescribeSimulationJobResponse
* DescribeSimulationJobResponse `object`
  * tags
  * arn
  * clientRequestToken
  * compute
    * simulationUnitLimit
  * dataSources
    * items [DataSource](#datasource)
  * failureBehavior
  * failureCode
  * failureReason
  * iamRole
  * lastStartedAt
  * lastUpdatedAt
  * loggingConfig
    * recordAllRosTopics **required**
  * maxJobDurationInSeconds
  * name
  * networkInterface
    * networkInterfaceId
    * privateIpAddress
    * publicIpAddress
  * outputLocation
    * s3Bucket
    * s3Prefix
  * robotApplications
    * items [RobotApplicationConfig](#robotapplicationconfig)
  * simulationApplications
    * items [SimulationApplicationConfig](#simulationapplicationconfig)
  * simulationTimeMillis
  * status
  * vpcConfig
    * assignPublicIp
    * securityGroups
      * items [NonEmptyString](#nonemptystring)
    * subnets
      * items [NonEmptyString](#nonemptystring)
    * vpcId

### DescribeWorldExportJobRequest
* DescribeWorldExportJobRequest `object`
  * job **required**

### DescribeWorldExportJobResponse
* DescribeWorldExportJobResponse `object`
  * tags
  * arn
  * clientRequestToken
  * createdAt
  * failureCode
  * failureReason
  * iamRole
  * outputLocation [OutputLocation](#outputlocation)
  * status
  * worlds
    * items [Arn](#arn)

### DescribeWorldGenerationJobRequest
* DescribeWorldGenerationJobRequest `object`
  * job **required**

### DescribeWorldGenerationJobResponse
* DescribeWorldGenerationJobResponse `object`
  * tags
  * arn
  * clientRequestToken
  * createdAt
  * failureCode
  * failureReason
  * finishedWorldsSummary
    * failureSummary
      * failures
        * items [WorldFailure](#worldfailure)
      * totalFailureCount
    * finishedCount
    * succeededWorlds
      * items [Arn](#arn)
  * status
  * template
  * worldCount
    * floorplanCount
    * interiorCountPerFloorplan
  * worldTags

### DescribeWorldRequest
* DescribeWorldRequest `object`
  * world **required**

### DescribeWorldResponse
* DescribeWorldResponse `object`
  * tags
  * arn
  * createdAt
  * generationJob
  * template

### DescribeWorldTemplateRequest
* DescribeWorldTemplateRequest `object`
  * template **required**

### DescribeWorldTemplateResponse
* DescribeWorldTemplateResponse `object`
  * tags
  * arn
  * clientRequestToken
  * createdAt
  * lastUpdatedAt
  * name

### EnvironmentVariableKey
* EnvironmentVariableKey `string`

### EnvironmentVariableMap
* EnvironmentVariableMap `object`

### EnvironmentVariableValue
* EnvironmentVariableValue `string`

### FailedAt
* FailedAt `string`

### FailedCreateSimulationJobRequest
* FailedCreateSimulationJobRequest `object`: Information about a failed create simulation job request.
  * failedAt
  * failureCode
  * failureReason
  * request
    * tags
    * compute
      * simulationUnitLimit
    * dataSources
      * items [DataSourceConfig](#datasourceconfig)
    * failureBehavior
    * iamRole
    * loggingConfig [LoggingConfig](#loggingconfig)
    * maxJobDurationInSeconds **required**
    * outputLocation [OutputLocation](#outputlocation)
    * robotApplications
      * items [RobotApplicationConfig](#robotapplicationconfig)
    * simulationApplications
      * items [SimulationApplicationConfig](#simulationapplicationconfig)
    * useDefaultApplications
    * vpcConfig [VPCConfig](#vpcconfig)

### FailedCreateSimulationJobRequests
* FailedCreateSimulationJobRequests `array`
  * items [FailedCreateSimulationJobRequest](#failedcreatesimulationjobrequest)

### FailureBehavior
* FailureBehavior `string` (values: Fail, Continue)

### FailureSummary
* FailureSummary `object`: Information about worlds that failed.
  * failures
    * items [WorldFailure](#worldfailure)
  * totalFailureCount

### Filter
* Filter `object`: Information about a filter.
  * name
  * values
    * items [Name](#name)

### FilterValues
* FilterValues `array`
  * items [Name](#name)

### Filters
* Filters `array`
  * items [Filter](#filter)

### FinishedWorldsSummary
* FinishedWorldsSummary `object`: Information about worlds that finished.
  * failureSummary
    * failures
      * items [WorldFailure](#worldfailure)
    * totalFailureCount
  * finishedCount
  * succeededWorlds
    * items [Arn](#arn)

### Fleet
* Fleet `object`: Information about a fleet.
  * arn
  * createdAt
  * lastDeploymentJob
  * lastDeploymentStatus
  * lastDeploymentTime
  * name

### Fleets
* Fleets `array`
  * items [Fleet](#fleet)

### FloorplanCount
* FloorplanCount `integer`

### GenericInteger
* GenericInteger `integer`

### GenericString
* GenericString `string`

### GetWorldTemplateBodyRequest
* GetWorldTemplateBodyRequest `object`
  * generationJob
  * template

### GetWorldTemplateBodyResponse
* GetWorldTemplateBodyResponse `object`
  * templateBody

### IamRole
* IamRole `string`

### Id
* Id `string`

### IdempotentParameterMismatchException


### Integer
* Integer `integer`

### InteriorCountPerFloorplan
* InteriorCountPerFloorplan `integer`

### InternalServerException


### InvalidParameterException


### JobDuration
* JobDuration `integer`

### Json
* Json `string`

### LastStartedAt
* LastStartedAt `string`

### LastUpdatedAt
* LastUpdatedAt `string`

### LaunchConfig
* LaunchConfig `object`: Information about a launch configuration.
  * environmentVariables
  * launchFile **required**
  * packageName **required**
  * portForwardingConfig
    * portMappings
      * items [PortMapping](#portmapping)
  * streamUI

### LimitExceededException


### ListDeploymentJobsRequest
* ListDeploymentJobsRequest `object`
  * filters
    * items [Filter](#filter)
  * maxResults
  * nextToken

### ListDeploymentJobsResponse
* ListDeploymentJobsResponse `object`
  * deploymentJobs
    * items [DeploymentJob](#deploymentjob)
  * nextToken

### ListFleetsRequest
* ListFleetsRequest `object`
  * filters
    * items [Filter](#filter)
  * maxResults
  * nextToken

### ListFleetsResponse
* ListFleetsResponse `object`
  * fleetDetails
    * items [Fleet](#fleet)
  * nextToken

### ListRobotApplicationsRequest
* ListRobotApplicationsRequest `object`
  * filters
    * items [Filter](#filter)
  * maxResults
  * nextToken
  * versionQualifier

### ListRobotApplicationsResponse
* ListRobotApplicationsResponse `object`
  * nextToken
  * robotApplicationSummaries
    * items [RobotApplicationSummary](#robotapplicationsummary)

### ListRobotsRequest
* ListRobotsRequest `object`
  * filters
    * items [Filter](#filter)
  * maxResults
  * nextToken

### ListRobotsResponse
* ListRobotsResponse `object`
  * nextToken
  * robots
    * items [Robot](#robot)

### ListSimulationApplicationsRequest
* ListSimulationApplicationsRequest `object`
  * filters
    * items [Filter](#filter)
  * maxResults
  * nextToken
  * versionQualifier

### ListSimulationApplicationsResponse
* ListSimulationApplicationsResponse `object`
  * nextToken
  * simulationApplicationSummaries
    * items [SimulationApplicationSummary](#simulationapplicationsummary)

### ListSimulationJobBatchesRequest
* ListSimulationJobBatchesRequest `object`
  * filters
    * items [Filter](#filter)
  * maxResults
  * nextToken

### ListSimulationJobBatchesResponse
* ListSimulationJobBatchesResponse `object`
  * nextToken
  * simulationJobBatchSummaries
    * items [SimulationJobBatchSummary](#simulationjobbatchsummary)

### ListSimulationJobsRequest
* ListSimulationJobsRequest `object`
  * filters
    * items [Filter](#filter)
  * maxResults
  * nextToken

### ListSimulationJobsResponse
* ListSimulationJobsResponse `object`
  * nextToken
  * simulationJobSummaries **required**
    * items [SimulationJobSummary](#simulationjobsummary)

### ListTagsForResourceRequest
* ListTagsForResourceRequest `object`

### ListTagsForResourceResponse
* ListTagsForResourceResponse `object`
  * tags

### ListWorldExportJobsRequest
* ListWorldExportJobsRequest `object`
  * filters
    * items [Filter](#filter)
  * maxResults
  * nextToken

### ListWorldExportJobsResponse
* ListWorldExportJobsResponse `object`
  * nextToken
  * worldExportJobSummaries **required**
    * items [WorldExportJobSummary](#worldexportjobsummary)

### ListWorldGenerationJobsRequest
* ListWorldGenerationJobsRequest `object`
  * filters
    * items [Filter](#filter)
  * maxResults
  * nextToken

### ListWorldGenerationJobsResponse
* ListWorldGenerationJobsResponse `object`
  * nextToken
  * worldGenerationJobSummaries **required**
    * items [WorldGenerationJobSummary](#worldgenerationjobsummary)

### ListWorldTemplatesRequest
* ListWorldTemplatesRequest `object`
  * maxResults
  * nextToken

### ListWorldTemplatesResponse
* ListWorldTemplatesResponse `object`
  * nextToken
  * templateSummaries
    * items [TemplateSummary](#templatesummary)

### ListWorldsRequest
* ListWorldsRequest `object`
  * filters
    * items [Filter](#filter)
  * maxResults
  * nextToken

### ListWorldsResponse
* ListWorldsResponse `object`
  * nextToken
  * worldSummaries
    * items [WorldSummary](#worldsummary)

### LoggingConfig
* LoggingConfig `object`: The logging configuration.
  * recordAllRosTopics **required**

### MaxConcurrency
* MaxConcurrency `integer`

### MaxResults
* MaxResults `integer`

### Name
* Name `string`

### NetworkInterface
* NetworkInterface `object`: Describes a network interface.
  * networkInterfaceId
  * privateIpAddress
  * publicIpAddress

### NonEmptyString
* NonEmptyString `string`

### NonSystemPort
* NonSystemPort `integer`

### OutputLocation
* OutputLocation `object`: The output location.
  * s3Bucket
  * s3Prefix

### PaginationToken
* PaginationToken `string`

### Path
* Path `string`

### PercentDone
* PercentDone `number`

### Percentage
* Percentage `integer`

### Port
* Port `integer`

### PortForwardingConfig
* PortForwardingConfig `object`: Configuration information for port forwarding.
  * portMappings
    * items [PortMapping](#portmapping)

### PortMapping
* PortMapping `object`: An object representing a port mapping.
  * applicationPort **required**
  * enableOnPublicIp
  * jobPort **required**

### PortMappingList
* PortMappingList `array`
  * items [PortMapping](#portmapping)

### ProgressDetail
* ProgressDetail `object`: Information about the progress of a deployment job.
  * currentProgress
  * estimatedTimeRemainingSeconds
  * percentDone
  * targetResource

### RegisterRobotRequest
* RegisterRobotRequest `object`
  * fleet **required**
  * robot **required**

### RegisterRobotResponse
* RegisterRobotResponse `object`
  * fleet
  * robot

### RenderingEngine
* RenderingEngine `object`: Information about a rendering engine.
  * name
  * version

### RenderingEngineType
* RenderingEngineType `string` (values: OGRE)

### RenderingEngineVersionType
* RenderingEngineVersionType `string`

### ResourceAlreadyExistsException


### ResourceNotFoundException


### RestartSimulationJobRequest
* RestartSimulationJobRequest `object`
  * job **required**

### RestartSimulationJobResponse
* RestartSimulationJobResponse `object`

### RevisionId
* RevisionId `string`

### Robot
* Robot `object`: Information about a robot.
  * architecture
  * arn
  * createdAt
  * fleetArn
  * greenGrassGroupId
  * lastDeploymentJob
  * lastDeploymentTime
  * name
  * status

### RobotApplicationConfig
* RobotApplicationConfig `object`: Application configuration information for a robot.
  * application **required**
  * applicationVersion
  * launchConfig **required**
    * environmentVariables
    * launchFile **required**
    * packageName **required**
    * portForwardingConfig
      * portMappings
        * items [PortMapping](#portmapping)
    * streamUI

### RobotApplicationConfigs
* RobotApplicationConfigs `array`
  * items [RobotApplicationConfig](#robotapplicationconfig)

### RobotApplicationNames
* RobotApplicationNames `array`
  * items [Name](#name)

### RobotApplicationSummaries
* RobotApplicationSummaries `array`
  * items [RobotApplicationSummary](#robotapplicationsummary)

### RobotApplicationSummary
* RobotApplicationSummary `object`: Summary information for a robot application.
  * arn
  * lastUpdatedAt
  * name
  * robotSoftwareSuite
    * name
    * version
  * version

### RobotDeployment
* RobotDeployment `object`: Information about a robot deployment.
  * arn
  * deploymentFinishTime
  * deploymentStartTime
  * failureCode
  * failureReason
  * progressDetail
    * currentProgress
    * estimatedTimeRemainingSeconds
    * percentDone
    * targetResource
  * status

### RobotDeploymentStep
* RobotDeploymentStep `string` (values: Validating, DownloadingExtracting, ExecutingDownloadCondition, ExecutingPreLaunch, Launching, ExecutingPostLaunch, Finished)

### RobotDeploymentSummary
* RobotDeploymentSummary `array`
  * items [RobotDeployment](#robotdeployment)

### RobotSoftwareSuite
* RobotSoftwareSuite `object`: Information about a robot software suite (ROS distribution).
  * name
  * version

### RobotSoftwareSuiteType
* RobotSoftwareSuiteType `string` (values: ROS, ROS2)

### RobotSoftwareSuiteVersionType
* RobotSoftwareSuiteVersionType `string` (values: Kinetic, Melodic, Dashing)

### RobotStatus
* RobotStatus `string` (values: Available, Registered, PendingNewDeployment, Deploying, Failed, InSync, NoResponse)

### Robots
* Robots `array`
  * items [Robot](#robot)

### S3Bucket
* S3Bucket `string`

### S3Etag
* S3Etag `string`

### S3Key
* S3Key `string`

### S3KeyOutput
* S3KeyOutput `object`: Information about S3 keys.
  * etag
  * s3Key

### S3KeyOutputs
* S3KeyOutputs `array`
  * items [S3KeyOutput](#s3keyoutput)

### S3Keys
* S3Keys `array`
  * items [S3Key](#s3key)

### S3Object
* S3Object `object`: Information about an S3 object.
  * bucket **required**
  * etag
  * key **required**

### SecurityGroups
* SecurityGroups `array`
  * items [NonEmptyString](#nonemptystring)

### ServiceUnavailableException


### SimulationApplicationConfig
* SimulationApplicationConfig `object`: Information about a simulation application configuration.
  * application **required**
  * applicationVersion
  * launchConfig **required**
    * environmentVariables
    * launchFile **required**
    * packageName **required**
    * portForwardingConfig
      * portMappings
        * items [PortMapping](#portmapping)
    * streamUI
  * worldConfigs
    * items [WorldConfig](#worldconfig)

### SimulationApplicationConfigs
* SimulationApplicationConfigs `array`
  * items [SimulationApplicationConfig](#simulationapplicationconfig)

### SimulationApplicationNames
* SimulationApplicationNames `array`
  * items [Name](#name)

### SimulationApplicationSummaries
* SimulationApplicationSummaries `array`
  * items [SimulationApplicationSummary](#simulationapplicationsummary)

### SimulationApplicationSummary
* SimulationApplicationSummary `object`: Summary information for a simulation application.
  * arn
  * lastUpdatedAt
  * name
  * robotSoftwareSuite
    * name
    * version
  * simulationSoftwareSuite
    * name
    * version
  * version

### SimulationJob
* SimulationJob `object`: Information about a simulation job.
  * tags
  * arn
  * clientRequestToken
  * compute
    * simulationUnitLimit
  * dataSources
    * items [DataSource](#datasource)
  * failureBehavior
  * failureCode
  * failureReason
  * iamRole
  * lastStartedAt
  * lastUpdatedAt
  * loggingConfig
    * recordAllRosTopics **required**
  * maxJobDurationInSeconds
  * name
  * networkInterface
    * networkInterfaceId
    * privateIpAddress
    * publicIpAddress
  * outputLocation
    * s3Bucket
    * s3Prefix
  * robotApplications
    * items [RobotApplicationConfig](#robotapplicationconfig)
  * simulationApplications
    * items [SimulationApplicationConfig](#simulationapplicationconfig)
  * simulationTimeMillis
  * status
  * vpcConfig
    * assignPublicIp
    * securityGroups
      * items [NonEmptyString](#nonemptystring)
    * subnets
      * items [NonEmptyString](#nonemptystring)
    * vpcId

### SimulationJobBatchErrorCode
* SimulationJobBatchErrorCode `string` (values: InternalServiceError)

### SimulationJobBatchStatus
* SimulationJobBatchStatus `string` (values: Pending, InProgress, Failed, Completed, Canceled, Canceling, Completing, TimingOut, TimedOut)

### SimulationJobBatchSummaries
* SimulationJobBatchSummaries `array`
  * items [SimulationJobBatchSummary](#simulationjobbatchsummary)

### SimulationJobBatchSummary
* SimulationJobBatchSummary `object`: Information about a simulation job batch.
  * arn
  * createdAt
  * createdRequestCount
  * failedRequestCount
  * lastUpdatedAt
  * pendingRequestCount
  * status

### SimulationJobErrorCode
* SimulationJobErrorCode `string` (values: InternalServiceError, RobotApplicationCrash, SimulationApplicationCrash, BadPermissionsRobotApplication, BadPermissionsSimulationApplication, BadPermissionsS3Object, BadPermissionsS3Output, BadPermissionsCloudwatchLogs, SubnetIpLimitExceeded, ENILimitExceeded, BadPermissionsUserCredentials, InvalidBundleRobotApplication, InvalidBundleSimulationApplication, InvalidS3Resource, LimitExceeded, MismatchedEtag, RobotApplicationVersionMismatchedEtag, SimulationApplicationVersionMismatchedEtag, ResourceNotFound, RequestThrottled, BatchTimedOut, BatchCanceled, InvalidInput, WrongRegionS3Bucket, WrongRegionS3Output, WrongRegionRobotApplication, WrongRegionSimulationApplication)

### SimulationJobRequest
* SimulationJobRequest `object`: Information about a simulation job request.
  * tags
  * compute
    * simulationUnitLimit
  * dataSources
    * items [DataSourceConfig](#datasourceconfig)
  * failureBehavior
  * iamRole
  * loggingConfig [LoggingConfig](#loggingconfig)
  * maxJobDurationInSeconds **required**
  * outputLocation [OutputLocation](#outputlocation)
  * robotApplications
    * items [RobotApplicationConfig](#robotapplicationconfig)
  * simulationApplications
    * items [SimulationApplicationConfig](#simulationapplicationconfig)
  * useDefaultApplications
  * vpcConfig [VPCConfig](#vpcconfig)

### SimulationJobStatus
* SimulationJobStatus `string` (values: Pending, Preparing, Running, Restarting, Completed, Failed, RunningFailed, Terminating, Terminated, Canceled)

### SimulationJobSummaries
* SimulationJobSummaries `array`
  * items [SimulationJobSummary](#simulationjobsummary)

### SimulationJobSummary
* SimulationJobSummary `object`: Summary information for a simulation job.
  * arn
  * dataSourceNames
    * items [Name](#name)
  * lastUpdatedAt
  * name
  * robotApplicationNames
    * items [Name](#name)
  * simulationApplicationNames
    * items [Name](#name)
  * status

### SimulationJobs
* SimulationJobs `array`
  * items [SimulationJob](#simulationjob)

### SimulationSoftwareSuite
* SimulationSoftwareSuite `object`: Information about a simulation software suite.
  * name
  * version

### SimulationSoftwareSuiteType
* SimulationSoftwareSuiteType `string` (values: Gazebo, RosbagPlay)

### SimulationSoftwareSuiteVersionType
* SimulationSoftwareSuiteVersionType `string`

### SimulationTimeMillis
* SimulationTimeMillis `integer`

### SimulationUnit
* SimulationUnit `integer`

### Source
* Source `object`: Information about a source.
  * architecture
  * etag
  * s3Bucket
  * s3Key

### SourceConfig
* SourceConfig `object`: Information about a source configuration.
  * architecture
  * s3Bucket
  * s3Key

### SourceConfigs
* SourceConfigs `array`
  * items [SourceConfig](#sourceconfig)

### Sources
* Sources `array`
  * items [Source](#source)

### StartSimulationJobBatchRequest
* StartSimulationJobBatchRequest `object`
  * tags
  * batchPolicy
    * maxConcurrency
    * timeoutInSeconds
  * clientRequestToken
  * createSimulationJobRequests **required**
    * items [SimulationJobRequest](#simulationjobrequest)

### StartSimulationJobBatchResponse
* StartSimulationJobBatchResponse `object`
  * tags
  * arn
  * batchPolicy
    * maxConcurrency
    * timeoutInSeconds
  * clientRequestToken
  * createdAt
  * createdRequests
    * items [SimulationJobSummary](#simulationjobsummary)
  * failedRequests
    * items [FailedCreateSimulationJobRequest](#failedcreatesimulationjobrequest)
  * failureCode
  * failureReason
  * pendingRequests
    * items [SimulationJobRequest](#simulationjobrequest)
  * status

### Subnets
* Subnets `array`
  * items [NonEmptyString](#nonemptystring)

### SyncDeploymentJobRequest
* SyncDeploymentJobRequest `object`
  * clientRequestToken **required**
  * fleet **required**

### SyncDeploymentJobResponse
* SyncDeploymentJobResponse `object`
  * arn
  * createdAt
  * deploymentApplicationConfigs
    * items [DeploymentApplicationConfig](#deploymentapplicationconfig)
  * deploymentConfig
    * concurrentDeploymentPercentage
    * downloadConditionFile
      * bucket **required**
      * etag
      * key **required**
    * failureThresholdPercentage
    * robotDeploymentTimeoutInSeconds
  * failureCode
  * failureReason
  * fleet
  * status

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

### TemplateLocation
* TemplateLocation `object`: Information about a template location.
  * s3Bucket **required**
  * s3Key **required**

### TemplateName
* TemplateName `string`

### TemplateSummaries
* TemplateSummaries `array`
  * items [TemplateSummary](#templatesummary)

### TemplateSummary
* TemplateSummary `object`: Summary information for a template.
  * arn
  * createdAt
  * lastUpdatedAt
  * name

### ThrottlingException


### UntagResourceRequest
* UntagResourceRequest `object`

### UntagResourceResponse
* UntagResourceResponse `object`

### UpdateRobotApplicationRequest
* UpdateRobotApplicationRequest `object`
  * application **required**
  * currentRevisionId
  * robotSoftwareSuite **required**
    * name
    * version
  * sources **required**
    * items [SourceConfig](#sourceconfig)

### UpdateRobotApplicationResponse
* UpdateRobotApplicationResponse `object`
  * arn
  * lastUpdatedAt
  * name
  * revisionId
  * robotSoftwareSuite
    * name
    * version
  * sources
    * items [Source](#source)
  * version

### UpdateSimulationApplicationRequest
* UpdateSimulationApplicationRequest `object`
  * application **required**
  * currentRevisionId
  * renderingEngine
    * name
    * version
  * robotSoftwareSuite **required**
    * name
    * version
  * simulationSoftwareSuite **required**
    * name
    * version
  * sources **required**
    * items [SourceConfig](#sourceconfig)

### UpdateSimulationApplicationResponse
* UpdateSimulationApplicationResponse `object`
  * arn
  * lastUpdatedAt
  * name
  * renderingEngine
    * name
    * version
  * revisionId
  * robotSoftwareSuite
    * name
    * version
  * simulationSoftwareSuite
    * name
    * version
  * sources
    * items [Source](#source)
  * version

### UpdateWorldTemplateRequest
* UpdateWorldTemplateRequest `object`
  * name
  * template **required**
  * templateBody
  * templateLocation
    * s3Bucket **required**
    * s3Key **required**

### UpdateWorldTemplateResponse
* UpdateWorldTemplateResponse `object`
  * arn
  * createdAt
  * lastUpdatedAt
  * name

### VPCConfig
* VPCConfig `object`: If your simulation job accesses resources in a VPC, you provide this parameter identifying the list of security group IDs and subnet IDs. These must belong to the same VPC. You must provide at least one security group and two subnet IDs.
  * assignPublicIp
  * securityGroups
    * items [NonEmptyString](#nonemptystring)
  * subnets **required**
    * items [NonEmptyString](#nonemptystring)

### VPCConfigResponse
* VPCConfigResponse `object`: VPC configuration associated with your simulation job.
  * assignPublicIp
  * securityGroups
    * items [NonEmptyString](#nonemptystring)
  * subnets
    * items [NonEmptyString](#nonemptystring)
  * vpcId

### Version
* Version `string`

### VersionQualifier
* VersionQualifier `string`

### WorldConfig
* WorldConfig `object`: Configuration information for a world.
  * world

### WorldConfigs
* WorldConfigs `array`
  * items [WorldConfig](#worldconfig)

### WorldCount
* WorldCount `object`: <p>The number of worlds that will be created. You can configure the number of unique floorplans and the number of unique interiors for each floor plan. For example, if you want 1 world with 20 unique interiors, you set <code>floorplanCount = 1</code> and <code>interiorCountPerFloorplan = 20</code>. This will result in 20 worlds (<code>floorplanCount</code> * <code>interiorCountPerFloorplan)</code>. </p> <p>If you set <code>floorplanCount = 4</code> and <code>interiorCountPerFloorplan = 5</code>, there will be 20 worlds with 5 unique floor plans. </p>
  * floorplanCount
  * interiorCountPerFloorplan

### WorldExportJobErrorCode
* WorldExportJobErrorCode `string` (values: InternalServiceError, LimitExceeded, ResourceNotFound, RequestThrottled, InvalidInput, AccessDenied)

### WorldExportJobStatus
* WorldExportJobStatus `string` (values: Pending, Running, Completed, Failed, Canceling, Canceled)

### WorldExportJobSummaries
* WorldExportJobSummaries `array`
  * items [WorldExportJobSummary](#worldexportjobsummary)

### WorldExportJobSummary
* WorldExportJobSummary `object`: Information about a world export job.
  * arn
  * createdAt
  * status
  * worlds
    * items [Arn](#arn)

### WorldFailure
* WorldFailure `object`: Information about a failed world.
  * failureCode
  * failureCount
  * sampleFailureReason

### WorldFailures
* WorldFailures `array`
  * items [WorldFailure](#worldfailure)

### WorldGenerationJobErrorCode
* WorldGenerationJobErrorCode `string` (values: InternalServiceError, LimitExceeded, ResourceNotFound, RequestThrottled, InvalidInput, AllWorldGenerationFailed)

### WorldGenerationJobStatus
* WorldGenerationJobStatus `string` (values: Pending, Running, Completed, Failed, PartialFailed, Canceling, Canceled)

### WorldGenerationJobSummaries
* WorldGenerationJobSummaries `array`
  * items [WorldGenerationJobSummary](#worldgenerationjobsummary)

### WorldGenerationJobSummary
* WorldGenerationJobSummary `object`: Information about a world generator job.
  * arn
  * createdAt
  * failedWorldCount
  * status
  * succeededWorldCount
  * template
  * worldCount
    * floorplanCount
    * interiorCountPerFloorplan

### WorldSummaries
* WorldSummaries `array`
  * items [WorldSummary](#worldsummary)

### WorldSummary
* WorldSummary `object`: Information about a world.
  * arn
  * createdAt
  * generationJob
  * template


