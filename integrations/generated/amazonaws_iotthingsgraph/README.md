# @datafire/amazonaws_iotthingsgraph

Client library for AWS IoT Things Graph

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_iotthingsgraph
```
```js
let amazonaws_iotthingsgraph = require('@datafire/amazonaws_iotthingsgraph').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

.then(data => {
  console.log(data);
});
```

## Description

<fullname>AWS IoT Things Graph</fullname> <p>AWS IoT Things Graph provides an integrated set of tools that enable developers to connect devices and services that use different standards, such as units of measure and communication protocols. AWS IoT Things Graph makes it possible to build IoT applications with little to no code by connecting devices and services and defining how they interact at an abstract level.</p> <p>For more information about how AWS IoT Things Graph works, see the <a href="https://docs.aws.amazon.com/thingsgraph/latest/ug/iot-tg-whatis.html">User Guide</a>.</p>

## Actions

### AssociateEntityToThing



```js
amazonaws_iotthingsgraph.AssociateEntityToThing({
  "thingName": null,
  "entityId": null
}, context)
```

#### Input
* input `object`
  * entityId **required**
  * namespaceVersion
  * thingName **required**

#### Output
* output [AssociateEntityToThingResponse](#associateentitytothingresponse)

### CreateFlowTemplate



```js
amazonaws_iotthingsgraph.CreateFlowTemplate({
  "definition": null
}, context)
```

#### Input
* input `object`
  * compatibleNamespaceVersion
  * definition **required**
    * language **required**
    * text **required**

#### Output
* output [CreateFlowTemplateResponse](#createflowtemplateresponse)

### CreateSystemInstance



```js
amazonaws_iotthingsgraph.CreateSystemInstance({
  "definition": {
    "language": null,
    "text": null
  },
  "target": null
}, context)
```

#### Input
* input `object`
  * tags
    * items [Tag](#tag)
  * definition **required** [DefinitionDocument](#definitiondocument)
  * flowActionsRoleArn
  * greengrassGroupName
  * metricsConfiguration [MetricsConfiguration](#metricsconfiguration)
  * s3BucketName
  * target **required**

#### Output
* output [CreateSystemInstanceResponse](#createsysteminstanceresponse)

### CreateSystemTemplate



```js
amazonaws_iotthingsgraph.CreateSystemTemplate({
  "definition": null
}, context)
```

#### Input
* input `object`
  * compatibleNamespaceVersion
  * definition **required**
    * language **required**
    * text **required**

#### Output
* output [CreateSystemTemplateResponse](#createsystemtemplateresponse)

### DeleteFlowTemplate



```js
amazonaws_iotthingsgraph.DeleteFlowTemplate({
  "id": null
}, context)
```

#### Input
* input `object`
  * id **required**

#### Output
* output [DeleteFlowTemplateResponse](#deleteflowtemplateresponse)

### DeleteNamespace



```js
amazonaws_iotthingsgraph.DeleteNamespace({}, context)
```

#### Input
* input `object`

#### Output
* output [DeleteNamespaceResponse](#deletenamespaceresponse)

### DeleteSystemInstance



```js
amazonaws_iotthingsgraph.DeleteSystemInstance({}, context)
```

#### Input
* input `object`
  * id

#### Output
* output [DeleteSystemInstanceResponse](#deletesysteminstanceresponse)

### DeleteSystemTemplate



```js
amazonaws_iotthingsgraph.DeleteSystemTemplate({
  "id": null
}, context)
```

#### Input
* input `object`
  * id **required**

#### Output
* output [DeleteSystemTemplateResponse](#deletesystemtemplateresponse)

### DeploySystemInstance



```js
amazonaws_iotthingsgraph.DeploySystemInstance({}, context)
```

#### Input
* input `object`
  * id

#### Output
* output [DeploySystemInstanceResponse](#deploysysteminstanceresponse)

### DeprecateFlowTemplate



```js
amazonaws_iotthingsgraph.DeprecateFlowTemplate({
  "id": null
}, context)
```

#### Input
* input `object`
  * id **required**

#### Output
* output [DeprecateFlowTemplateResponse](#deprecateflowtemplateresponse)

### DeprecateSystemTemplate



```js
amazonaws_iotthingsgraph.DeprecateSystemTemplate({
  "id": null
}, context)
```

#### Input
* input `object`
  * id **required**

#### Output
* output [DeprecateSystemTemplateResponse](#deprecatesystemtemplateresponse)

### DescribeNamespace



```js
amazonaws_iotthingsgraph.DescribeNamespace({}, context)
```

#### Input
* input `object`
  * namespaceName

#### Output
* output [DescribeNamespaceResponse](#describenamespaceresponse)

### DissociateEntityFromThing



```js
amazonaws_iotthingsgraph.DissociateEntityFromThing({
  "thingName": null,
  "entityType": null
}, context)
```

#### Input
* input `object`
  * entityType **required**
  * thingName **required**

#### Output
* output [DissociateEntityFromThingResponse](#dissociateentityfromthingresponse)

### GetEntities



```js
amazonaws_iotthingsgraph.GetEntities({
  "ids": null
}, context)
```

#### Input
* input `object`
  * ids **required**
    * items [Urn](#urn)
  * namespaceVersion

#### Output
* output [GetEntitiesResponse](#getentitiesresponse)

### GetFlowTemplate



```js
amazonaws_iotthingsgraph.GetFlowTemplate({
  "id": null
}, context)
```

#### Input
* input `object`
  * id **required**
  * revisionNumber

#### Output
* output [GetFlowTemplateResponse](#getflowtemplateresponse)

### GetFlowTemplateRevisions



```js
amazonaws_iotthingsgraph.GetFlowTemplateRevisions({
  "id": null
}, context)
```

#### Input
* input `object`
  * maxResults `string`
  * nextToken `string`
  * id **required**
  * maxResults
  * nextToken

#### Output
* output [GetFlowTemplateRevisionsResponse](#getflowtemplaterevisionsresponse)

### GetNamespaceDeletionStatus



```js
amazonaws_iotthingsgraph.GetNamespaceDeletionStatus({}, context)
```

#### Input
* input `object`

#### Output
* output [GetNamespaceDeletionStatusResponse](#getnamespacedeletionstatusresponse)

### GetSystemInstance



```js
amazonaws_iotthingsgraph.GetSystemInstance({
  "id": null
}, context)
```

#### Input
* input `object`
  * id **required**

#### Output
* output [GetSystemInstanceResponse](#getsysteminstanceresponse)

### GetSystemTemplate



```js
amazonaws_iotthingsgraph.GetSystemTemplate({
  "id": null
}, context)
```

#### Input
* input `object`
  * id **required**
  * revisionNumber

#### Output
* output [GetSystemTemplateResponse](#getsystemtemplateresponse)

### GetSystemTemplateRevisions



```js
amazonaws_iotthingsgraph.GetSystemTemplateRevisions({
  "id": null
}, context)
```

#### Input
* input `object`
  * maxResults `string`
  * nextToken `string`
  * id **required**
  * maxResults
  * nextToken

#### Output
* output [GetSystemTemplateRevisionsResponse](#getsystemtemplaterevisionsresponse)

### GetUploadStatus



```js
amazonaws_iotthingsgraph.GetUploadStatus({
  "uploadId": null
}, context)
```

#### Input
* input `object`
  * uploadId **required**

#### Output
* output [GetUploadStatusResponse](#getuploadstatusresponse)

### ListFlowExecutionMessages



```js
amazonaws_iotthingsgraph.ListFlowExecutionMessages({
  "flowExecutionId": null
}, context)
```

#### Input
* input `object`
  * maxResults `string`
  * nextToken `string`
  * flowExecutionId **required**
  * maxResults
  * nextToken

#### Output
* output [ListFlowExecutionMessagesResponse](#listflowexecutionmessagesresponse)

### ListTagsForResource



```js
amazonaws_iotthingsgraph.ListTagsForResource({
  "resourceArn": null
}, context)
```

#### Input
* input `object`
  * maxResults `string`
  * nextToken `string`
  * maxResults
  * nextToken
  * resourceArn **required**

#### Output
* output [ListTagsForResourceResponse](#listtagsforresourceresponse)

### SearchEntities



```js
amazonaws_iotthingsgraph.SearchEntities({
  "entityTypes": null
}, context)
```

#### Input
* input `object`
  * maxResults `string`
  * nextToken `string`
  * entityTypes **required**
    * items [EntityType](#entitytype)
  * filters
    * items [EntityFilter](#entityfilter)
  * maxResults
  * namespaceVersion
  * nextToken

#### Output
* output [SearchEntitiesResponse](#searchentitiesresponse)

### SearchFlowExecutions



```js
amazonaws_iotthingsgraph.SearchFlowExecutions({
  "systemInstanceId": null
}, context)
```

#### Input
* input `object`
  * maxResults `string`
  * nextToken `string`
  * endTime
  * flowExecutionId
  * maxResults
  * nextToken
  * startTime
  * systemInstanceId **required**

#### Output
* output [SearchFlowExecutionsResponse](#searchflowexecutionsresponse)

### SearchFlowTemplates



```js
amazonaws_iotthingsgraph.SearchFlowTemplates({}, context)
```

#### Input
* input `object`
  * maxResults `string`
  * nextToken `string`
  * filters
    * items [FlowTemplateFilter](#flowtemplatefilter)
  * maxResults
  * nextToken

#### Output
* output [SearchFlowTemplatesResponse](#searchflowtemplatesresponse)

### SearchSystemInstances



```js
amazonaws_iotthingsgraph.SearchSystemInstances({}, context)
```

#### Input
* input `object`
  * maxResults `string`
  * nextToken `string`
  * filters
    * items [SystemInstanceFilter](#systeminstancefilter)
  * maxResults
  * nextToken

#### Output
* output [SearchSystemInstancesResponse](#searchsysteminstancesresponse)

### SearchSystemTemplates



```js
amazonaws_iotthingsgraph.SearchSystemTemplates({}, context)
```

#### Input
* input `object`
  * maxResults `string`
  * nextToken `string`
  * filters
    * items [SystemTemplateFilter](#systemtemplatefilter)
  * maxResults
  * nextToken

#### Output
* output [SearchSystemTemplatesResponse](#searchsystemtemplatesresponse)

### SearchThings



```js
amazonaws_iotthingsgraph.SearchThings({
  "entityId": null
}, context)
```

#### Input
* input `object`
  * maxResults `string`
  * nextToken `string`
  * entityId **required**
  * maxResults
  * namespaceVersion
  * nextToken

#### Output
* output [SearchThingsResponse](#searchthingsresponse)

### TagResource



```js
amazonaws_iotthingsgraph.TagResource({
  "resourceArn": null,
  "tags": null
}, context)
```

#### Input
* input `object`
  * tags **required**
    * items [Tag](#tag)
  * resourceArn **required**

#### Output
* output [TagResourceResponse](#tagresourceresponse)

### UndeploySystemInstance



```js
amazonaws_iotthingsgraph.UndeploySystemInstance({}, context)
```

#### Input
* input `object`
  * id

#### Output
* output [UndeploySystemInstanceResponse](#undeploysysteminstanceresponse)

### UntagResource



```js
amazonaws_iotthingsgraph.UntagResource({
  "resourceArn": null,
  "tagKeys": null
}, context)
```

#### Input
* input `object`
  * resourceArn **required**
  * tagKeys **required**
    * items [TagKey](#tagkey)

#### Output
* output [UntagResourceResponse](#untagresourceresponse)

### UpdateFlowTemplate



```js
amazonaws_iotthingsgraph.UpdateFlowTemplate({
  "id": null,
  "definition": null
}, context)
```

#### Input
* input `object`
  * compatibleNamespaceVersion
  * definition **required**
    * language **required**
    * text **required**
  * id **required**

#### Output
* output [UpdateFlowTemplateResponse](#updateflowtemplateresponse)

### UpdateSystemTemplate



```js
amazonaws_iotthingsgraph.UpdateSystemTemplate({
  "id": null,
  "definition": null
}, context)
```

#### Input
* input `object`
  * compatibleNamespaceVersion
  * definition **required**
    * language **required**
    * text **required**
  * id **required**

#### Output
* output [UpdateSystemTemplateResponse](#updatesystemtemplateresponse)

### UploadEntityDefinitions



```js
amazonaws_iotthingsgraph.UploadEntityDefinitions({}, context)
```

#### Input
* input `object`
  * deprecateExistingEntities
  * document
    * language **required**
    * text **required**
  * syncWithPublicNamespace

#### Output
* output [UploadEntityDefinitionsResponse](#uploadentitydefinitionsresponse)



## Definitions

### Arn
* Arn `string`

### AssociateEntityToThingRequest
* AssociateEntityToThingRequest `object`
  * entityId **required**
  * namespaceVersion
  * thingName **required**

### AssociateEntityToThingResponse
* AssociateEntityToThingResponse `object`

### CreateFlowTemplateRequest
* CreateFlowTemplateRequest `object`
  * compatibleNamespaceVersion
  * definition **required**
    * language **required**
    * text **required**

### CreateFlowTemplateResponse
* CreateFlowTemplateResponse `object`
  * summary
    * arn
    * createdAt
    * id
    * revisionNumber

### CreateSystemInstanceRequest
* CreateSystemInstanceRequest `object`
  * tags
    * items [Tag](#tag)
  * definition **required** [DefinitionDocument](#definitiondocument)
  * flowActionsRoleArn
  * greengrassGroupName
  * metricsConfiguration [MetricsConfiguration](#metricsconfiguration)
  * s3BucketName
  * target **required**

### CreateSystemInstanceResponse
* CreateSystemInstanceResponse `object`
  * summary
    * arn
    * createdAt
    * greengrassGroupId
    * greengrassGroupName
    * greengrassGroupVersionId
    * id
    * status
    * target
    * updatedAt

### CreateSystemTemplateRequest
* CreateSystemTemplateRequest `object`
  * compatibleNamespaceVersion
  * definition **required**
    * language **required**
    * text **required**

### CreateSystemTemplateResponse
* CreateSystemTemplateResponse `object`
  * summary
    * arn
    * createdAt
    * id
    * revisionNumber

### DefinitionDocument
* DefinitionDocument `object`: A document that defines an entity. 
  * language **required**
  * text **required**

### DefinitionLanguage
* DefinitionLanguage `string` (values: GRAPHQL)

### DefinitionText
* DefinitionText `string`

### DeleteFlowTemplateRequest
* DeleteFlowTemplateRequest `object`
  * id **required**

### DeleteFlowTemplateResponse
* DeleteFlowTemplateResponse `object`

### DeleteNamespaceRequest
* DeleteNamespaceRequest `object`

### DeleteNamespaceResponse
* DeleteNamespaceResponse `object`
  * namespaceArn
  * namespaceName

### DeleteSystemInstanceRequest
* DeleteSystemInstanceRequest `object`
  * id

### DeleteSystemInstanceResponse
* DeleteSystemInstanceResponse `object`

### DeleteSystemTemplateRequest
* DeleteSystemTemplateRequest `object`
  * id **required**

### DeleteSystemTemplateResponse
* DeleteSystemTemplateResponse `object`

### DependencyRevision
* DependencyRevision `object`: An object that contains the ID and revision number of a workflow or system that is part of a deployment.
  * id
  * revisionNumber

### DependencyRevisions
* DependencyRevisions `array`
  * items [DependencyRevision](#dependencyrevision)

### DeploySystemInstanceRequest
* DeploySystemInstanceRequest `object`
  * id

### DeploySystemInstanceResponse
* DeploySystemInstanceResponse `object`
  * greengrassDeploymentId
  * summary **required**
    * arn
    * createdAt
    * greengrassGroupId
    * greengrassGroupName
    * greengrassGroupVersionId
    * id
    * status
    * target
    * updatedAt

### DeploymentTarget
* DeploymentTarget `string` (values: GREENGRASS, CLOUD)

### DeprecateExistingEntities
* DeprecateExistingEntities `boolean`

### DeprecateFlowTemplateRequest
* DeprecateFlowTemplateRequest `object`
  * id **required**

### DeprecateFlowTemplateResponse
* DeprecateFlowTemplateResponse `object`

### DeprecateSystemTemplateRequest
* DeprecateSystemTemplateRequest `object`
  * id **required**

### DeprecateSystemTemplateResponse
* DeprecateSystemTemplateResponse `object`

### DescribeNamespaceRequest
* DescribeNamespaceRequest `object`
  * namespaceName

### DescribeNamespaceResponse
* DescribeNamespaceResponse `object`
  * namespaceArn
  * namespaceName
  * namespaceVersion
  * trackingNamespaceName
  * trackingNamespaceVersion

### DissociateEntityFromThingRequest
* DissociateEntityFromThingRequest `object`
  * entityType **required**
  * thingName **required**

### DissociateEntityFromThingResponse
* DissociateEntityFromThingResponse `object`

### Enabled
* Enabled `boolean`

### EntityDescription
* EntityDescription `object`: Describes the properties of an entity.
  * arn
  * createdAt
  * definition
    * language **required**
    * text **required**
  * id
  * type

### EntityDescriptions
* EntityDescriptions `array`
  * items [EntityDescription](#entitydescription)

### EntityFilter
* EntityFilter `object`: An object that filters an entity search. Multiple filters function as OR criteria in the search. For example a search that includes a <code>NAMESPACE</code> and a <code>REFERENCED_ENTITY_ID</code> filter searches for entities in the specified namespace that use the entity specified by the value of <code>REFERENCED_ENTITY_ID</code>.
  * name
  * value
    * items [EntityFilterValue](#entityfiltervalue)

### EntityFilterName
* EntityFilterName `string` (values: NAME, NAMESPACE, SEMANTIC_TYPE_PATH, REFERENCED_ENTITY_ID)

### EntityFilterValue
* EntityFilterValue `string`

### EntityFilterValues
* EntityFilterValues `array`
  * items [EntityFilterValue](#entityfiltervalue)

### EntityFilters
* EntityFilters `array`
  * items [EntityFilter](#entityfilter)

### EntityType
* EntityType `string` (values: DEVICE, SERVICE, DEVICE_MODEL, CAPABILITY, STATE, ACTION, EVENT, PROPERTY, MAPPING, ENUM)

### EntityTypes
* EntityTypes `array`
  * items [EntityType](#entitytype)

### FlowExecutionEventType
* FlowExecutionEventType `string` (values: EXECUTION_STARTED, EXECUTION_FAILED, EXECUTION_ABORTED, EXECUTION_SUCCEEDED, STEP_STARTED, STEP_FAILED, STEP_SUCCEEDED, ACTIVITY_SCHEDULED, ACTIVITY_STARTED, ACTIVITY_FAILED, ACTIVITY_SUCCEEDED, START_FLOW_EXECUTION_TASK, SCHEDULE_NEXT_READY_STEPS_TASK, THING_ACTION_TASK, THING_ACTION_TASK_FAILED, THING_ACTION_TASK_SUCCEEDED, ACKNOWLEDGE_TASK_MESSAGE)

### FlowExecutionId
* FlowExecutionId `string`

### FlowExecutionMessage
* FlowExecutionMessage `object`: An object that contains information about a flow event.
  * eventType
  * messageId
  * payload
  * timestamp

### FlowExecutionMessageId
* FlowExecutionMessageId `string`

### FlowExecutionMessagePayload
* FlowExecutionMessagePayload `string`

### FlowExecutionMessages
* FlowExecutionMessages `array`
  * items [FlowExecutionMessage](#flowexecutionmessage)

### FlowExecutionStatus
* FlowExecutionStatus `string` (values: RUNNING, ABORTED, SUCCEEDED, FAILED)

### FlowExecutionSummaries
* FlowExecutionSummaries `array`
  * items [FlowExecutionSummary](#flowexecutionsummary)

### FlowExecutionSummary
* FlowExecutionSummary `object`: An object that contains summary information about a flow execution.
  * createdAt
  * flowExecutionId
  * flowTemplateId
  * status
  * systemInstanceId
  * updatedAt

### FlowTemplateDescription
* FlowTemplateDescription `object`: An object that contains a workflow's definition and summary information.
  * definition
    * language **required**
    * text **required**
  * summary
    * arn
    * createdAt
    * id
    * revisionNumber
  * validatedNamespaceVersion

### FlowTemplateFilter
* FlowTemplateFilter `object`: An object that filters a workflow search.
  * name **required**
  * value **required**
    * items [FlowTemplateFilterValue](#flowtemplatefiltervalue)

### FlowTemplateFilterName
* FlowTemplateFilterName `string` (values: DEVICE_MODEL_ID)

### FlowTemplateFilterValue
* FlowTemplateFilterValue `string`

### FlowTemplateFilterValues
* FlowTemplateFilterValues `array`
  * items [FlowTemplateFilterValue](#flowtemplatefiltervalue)

### FlowTemplateFilters
* FlowTemplateFilters `array`
  * items [FlowTemplateFilter](#flowtemplatefilter)

### FlowTemplateSummaries
* FlowTemplateSummaries `array`
  * items [FlowTemplateSummary](#flowtemplatesummary)

### FlowTemplateSummary
* FlowTemplateSummary `object`: An object that contains summary information about a workflow.
  * arn
  * createdAt
  * id
  * revisionNumber

### GetEntitiesRequest
* GetEntitiesRequest `object`
  * ids **required**
    * items [Urn](#urn)
  * namespaceVersion

### GetEntitiesResponse
* GetEntitiesResponse `object`
  * descriptions
    * items [EntityDescription](#entitydescription)

### GetFlowTemplateRequest
* GetFlowTemplateRequest `object`
  * id **required**
  * revisionNumber

### GetFlowTemplateResponse
* GetFlowTemplateResponse `object`
  * description
    * definition
      * language **required**
      * text **required**
    * summary
      * arn
      * createdAt
      * id
      * revisionNumber
    * validatedNamespaceVersion

### GetFlowTemplateRevisionsRequest
* GetFlowTemplateRevisionsRequest `object`
  * id **required**
  * maxResults
  * nextToken

### GetFlowTemplateRevisionsResponse
* GetFlowTemplateRevisionsResponse `object`
  * nextToken
  * summaries
    * items [FlowTemplateSummary](#flowtemplatesummary)

### GetNamespaceDeletionStatusRequest
* GetNamespaceDeletionStatusRequest `object`

### GetNamespaceDeletionStatusResponse
* GetNamespaceDeletionStatusResponse `object`
  * errorCode
  * errorMessage
  * namespaceArn
  * namespaceName
  * status

### GetSystemInstanceRequest
* GetSystemInstanceRequest `object`
  * id **required**

### GetSystemInstanceResponse
* GetSystemInstanceResponse `object`
  * description
    * definition [DefinitionDocument](#definitiondocument)
    * flowActionsRoleArn
    * metricsConfiguration [MetricsConfiguration](#metricsconfiguration)
    * s3BucketName
    * summary
      * arn
      * createdAt
      * greengrassGroupId
      * greengrassGroupName
      * greengrassGroupVersionId
      * id
      * status
      * target
      * updatedAt
    * validatedDependencyRevisions
      * items [DependencyRevision](#dependencyrevision)
    * validatedNamespaceVersion

### GetSystemTemplateRequest
* GetSystemTemplateRequest `object`
  * id **required**
  * revisionNumber

### GetSystemTemplateResponse
* GetSystemTemplateResponse `object`
  * description
    * definition
      * language **required**
      * text **required**
    * summary
      * arn
      * createdAt
      * id
      * revisionNumber
    * validatedNamespaceVersion

### GetSystemTemplateRevisionsRequest
* GetSystemTemplateRevisionsRequest `object`
  * id **required**
  * maxResults
  * nextToken

### GetSystemTemplateRevisionsResponse
* GetSystemTemplateRevisionsResponse `object`
  * nextToken
  * summaries
    * items [SystemTemplateSummary](#systemtemplatesummary)

### GetUploadStatusRequest
* GetUploadStatusRequest `object`
  * uploadId **required**

### GetUploadStatusResponse
* GetUploadStatusResponse `object`
  * createdDate **required**
  * failureReason
    * items [String](#string)
  * namespaceArn
  * namespaceName
  * namespaceVersion
  * uploadId **required**
  * uploadStatus **required**

### GreengrassDeploymentId
* GreengrassDeploymentId `string`

### GreengrassGroupId
* GreengrassGroupId `string`

### GreengrassGroupVersionId
* GreengrassGroupVersionId `string`

### GroupName
* GroupName `string`

### InternalFailureException


### InvalidRequestException


### LimitExceededException


### ListFlowExecutionMessagesRequest
* ListFlowExecutionMessagesRequest `object`
  * flowExecutionId **required**
  * maxResults
  * nextToken

### ListFlowExecutionMessagesResponse
* ListFlowExecutionMessagesResponse `object`
  * messages
    * items [FlowExecutionMessage](#flowexecutionmessage)
  * nextToken

### ListTagsForResourceRequest
* ListTagsForResourceRequest `object`
  * maxResults
  * nextToken
  * resourceArn **required**

### ListTagsForResourceResponse
* ListTagsForResourceResponse `object`
  * tags
    * items [Tag](#tag)
  * nextToken

### MaxResults
* MaxResults `integer`

### MetricsConfiguration
* MetricsConfiguration `object`: An object that specifies whether cloud metrics are collected in a deployment and, if so, what role is used to collect metrics.
  * cloudMetricEnabled
  * metricRuleRoleArn

### NamespaceDeletionStatus
* NamespaceDeletionStatus `string` (values: IN_PROGRESS, SUCCEEDED, FAILED)

### NamespaceDeletionStatusErrorCodes
* NamespaceDeletionStatusErrorCodes `string` (values: VALIDATION_FAILED)

### NamespaceName
* NamespaceName `string`

### NextToken
* NextToken `string`

### ResourceAlreadyExistsException


### ResourceArn
* ResourceArn `string`

### ResourceInUseException


### ResourceNotFoundException


### RoleArn
* RoleArn `string`

### S3BucketName
* S3BucketName `string`

### SearchEntitiesRequest
* SearchEntitiesRequest `object`
  * entityTypes **required**
    * items [EntityType](#entitytype)
  * filters
    * items [EntityFilter](#entityfilter)
  * maxResults
  * namespaceVersion
  * nextToken

### SearchEntitiesResponse
* SearchEntitiesResponse `object`
  * descriptions
    * items [EntityDescription](#entitydescription)
  * nextToken

### SearchFlowExecutionsRequest
* SearchFlowExecutionsRequest `object`
  * endTime
  * flowExecutionId
  * maxResults
  * nextToken
  * startTime
  * systemInstanceId **required**

### SearchFlowExecutionsResponse
* SearchFlowExecutionsResponse `object`
  * nextToken
  * summaries
    * items [FlowExecutionSummary](#flowexecutionsummary)

### SearchFlowTemplatesRequest
* SearchFlowTemplatesRequest `object`
  * filters
    * items [FlowTemplateFilter](#flowtemplatefilter)
  * maxResults
  * nextToken

### SearchFlowTemplatesResponse
* SearchFlowTemplatesResponse `object`
  * nextToken
  * summaries
    * items [FlowTemplateSummary](#flowtemplatesummary)

### SearchSystemInstancesRequest
* SearchSystemInstancesRequest `object`
  * filters
    * items [SystemInstanceFilter](#systeminstancefilter)
  * maxResults
  * nextToken

### SearchSystemInstancesResponse
* SearchSystemInstancesResponse `object`
  * nextToken
  * summaries
    * items [SystemInstanceSummary](#systeminstancesummary)

### SearchSystemTemplatesRequest
* SearchSystemTemplatesRequest `object`
  * filters
    * items [SystemTemplateFilter](#systemtemplatefilter)
  * maxResults
  * nextToken

### SearchSystemTemplatesResponse
* SearchSystemTemplatesResponse `object`
  * nextToken
  * summaries
    * items [SystemTemplateSummary](#systemtemplatesummary)

### SearchThingsRequest
* SearchThingsRequest `object`
  * entityId **required**
  * maxResults
  * namespaceVersion
  * nextToken

### SearchThingsResponse
* SearchThingsResponse `object`
  * nextToken
  * things
    * items [Thing](#thing)

### String
* String `string`

### StringList
* StringList `array`
  * items [String](#string)

### SyncWithPublicNamespace
* SyncWithPublicNamespace `boolean`

### SystemInstanceDeploymentStatus
* SystemInstanceDeploymentStatus `string` (values: NOT_DEPLOYED, BOOTSTRAP, DEPLOY_IN_PROGRESS, DEPLOYED_IN_TARGET, UNDEPLOY_IN_PROGRESS, FAILED, PENDING_DELETE, DELETED_IN_TARGET)

### SystemInstanceDescription
* SystemInstanceDescription `object`: An object that contains a system instance definition and summary information.
  * definition [DefinitionDocument](#definitiondocument)
  * flowActionsRoleArn
  * metricsConfiguration [MetricsConfiguration](#metricsconfiguration)
  * s3BucketName
  * summary
    * arn
    * createdAt
    * greengrassGroupId
    * greengrassGroupName
    * greengrassGroupVersionId
    * id
    * status
    * target
    * updatedAt
  * validatedDependencyRevisions
    * items [DependencyRevision](#dependencyrevision)
  * validatedNamespaceVersion

### SystemInstanceFilter
* SystemInstanceFilter `object`: An object that filters a system instance search. Multiple filters function as OR criteria in the search. For example a search that includes a GREENGRASS_GROUP_NAME and a STATUS filter searches for system instances in the specified Greengrass group that have the specified status.
  * name
  * value
    * items [SystemInstanceFilterValue](#systeminstancefiltervalue)

### SystemInstanceFilterName
* SystemInstanceFilterName `string` (values: SYSTEM_TEMPLATE_ID, STATUS, GREENGRASS_GROUP_NAME)

### SystemInstanceFilterValue
* SystemInstanceFilterValue `string`

### SystemInstanceFilterValues
* SystemInstanceFilterValues `array`
  * items [SystemInstanceFilterValue](#systeminstancefiltervalue)

### SystemInstanceFilters
* SystemInstanceFilters `array`
  * items [SystemInstanceFilter](#systeminstancefilter)

### SystemInstanceSummaries
* SystemInstanceSummaries `array`
  * items [SystemInstanceSummary](#systeminstancesummary)

### SystemInstanceSummary
* SystemInstanceSummary `object`: An object that contains summary information about a system instance.
  * arn
  * createdAt
  * greengrassGroupId
  * greengrassGroupName
  * greengrassGroupVersionId
  * id
  * status
  * target
  * updatedAt

### SystemTemplateDescription
* SystemTemplateDescription `object`: An object that contains a system's definition document and summary information.
  * definition
    * language **required**
    * text **required**
  * summary
    * arn
    * createdAt
    * id
    * revisionNumber
  * validatedNamespaceVersion

### SystemTemplateFilter
* SystemTemplateFilter `object`: An object that filters a system search.
  * name **required**
  * value **required**
    * items [SystemTemplateFilterValue](#systemtemplatefiltervalue)

### SystemTemplateFilterName
* SystemTemplateFilterName `string` (values: FLOW_TEMPLATE_ID)

### SystemTemplateFilterValue
* SystemTemplateFilterValue `string`

### SystemTemplateFilterValues
* SystemTemplateFilterValues `array`
  * items [SystemTemplateFilterValue](#systemtemplatefiltervalue)

### SystemTemplateFilters
* SystemTemplateFilters `array`
  * items [SystemTemplateFilter](#systemtemplatefilter)

### SystemTemplateSummaries
* SystemTemplateSummaries `array`
  * items [SystemTemplateSummary](#systemtemplatesummary)

### SystemTemplateSummary
* SystemTemplateSummary `object`: An object that contains information about a system.
  * arn
  * createdAt
  * id
  * revisionNumber

### Tag
* Tag `object`: Metadata assigned to an AWS IoT Things Graph resource consisting of a key-value pair.
  * key **required**
  * value **required**

### TagKey
* TagKey `string`

### TagKeyList
* TagKeyList `array`
  * items [TagKey](#tagkey)

### TagList
* TagList `array`
  * items [Tag](#tag)

### TagResourceRequest
* TagResourceRequest `object`
  * tags **required**
    * items [Tag](#tag)
  * resourceArn **required**

### TagResourceResponse
* TagResourceResponse `object`

### TagValue
* TagValue `string`

### Thing
* Thing `object`: An AWS IoT thing.
  * thingArn
  * thingName

### ThingArn
* ThingArn `string`

### ThingName
* ThingName `string`

### Things
* Things `array`
  * items [Thing](#thing)

### ThrottlingException


### Timestamp
* Timestamp `string`

### UndeploySystemInstanceRequest
* UndeploySystemInstanceRequest `object`
  * id

### UndeploySystemInstanceResponse
* UndeploySystemInstanceResponse `object`
  * summary
    * arn
    * createdAt
    * greengrassGroupId
    * greengrassGroupName
    * greengrassGroupVersionId
    * id
    * status
    * target
    * updatedAt

### UntagResourceRequest
* UntagResourceRequest `object`
  * resourceArn **required**
  * tagKeys **required**
    * items [TagKey](#tagkey)

### UntagResourceResponse
* UntagResourceResponse `object`

### UpdateFlowTemplateRequest
* UpdateFlowTemplateRequest `object`
  * compatibleNamespaceVersion
  * definition **required**
    * language **required**
    * text **required**
  * id **required**

### UpdateFlowTemplateResponse
* UpdateFlowTemplateResponse `object`
  * summary
    * arn
    * createdAt
    * id
    * revisionNumber

### UpdateSystemTemplateRequest
* UpdateSystemTemplateRequest `object`
  * compatibleNamespaceVersion
  * definition **required**
    * language **required**
    * text **required**
  * id **required**

### UpdateSystemTemplateResponse
* UpdateSystemTemplateResponse `object`
  * summary
    * arn
    * createdAt
    * id
    * revisionNumber

### UploadEntityDefinitionsRequest
* UploadEntityDefinitionsRequest `object`
  * deprecateExistingEntities
  * document
    * language **required**
    * text **required**
  * syncWithPublicNamespace

### UploadEntityDefinitionsResponse
* UploadEntityDefinitionsResponse `object`
  * uploadId **required**

### UploadId
* UploadId `string`

### UploadStatus
* UploadStatus `string` (values: IN_PROGRESS, SUCCEEDED, FAILED)

### Urn
* Urn `string`

### Urns
* Urns `array`
  * items [Urn](#urn)

### Version
* Version `integer`


