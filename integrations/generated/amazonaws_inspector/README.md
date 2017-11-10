# @datafire/amazonaws_inspector

Client library for Amazon Inspector

## Installation and Usage
```bash
npm install --save datafire @datafire/amazonaws_inspector
```

```js
let datafire = require('datafire');
let amazonaws_inspector = require('@datafire/amazonaws_inspector').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: "",
});

amazonaws_inspector.AddAttributesToFindings({}).then(data => {
  console.log(data);
})
```

## Description
<fullname>Amazon Inspector</fullname> <p>Amazon Inspector enables you to analyze the behavior of your AWS resources and to identify potential security issues. For more information, see <a href="http://docs.aws.amazon.com/inspector/latest/userguide/inspector_introduction.html"> Amazon Inspector User Guide</a>.</p>

## Actions
### AddAttributesToFindings



```js
amazonaws_inspector.AddAttributesToFindings({
  "findingArns": [],
  "attributes": []
}, context)
```

#### Parameters
* attributes (array) **required**
* findingArns (array) **required**

### CreateAssessmentTarget



```js
amazonaws_inspector.CreateAssessmentTarget({
  "assessmentTargetName": "",
  "resourceGroupArn": ""
}, context)
```

#### Parameters
* assessmentTargetName (string) **required**
* resourceGroupArn (string) **required**

### CreateAssessmentTemplate



```js
amazonaws_inspector.CreateAssessmentTemplate({
  "assessmentTargetArn": "",
  "assessmentTemplateName": "",
  "durationInSeconds": 0,
  "rulesPackageArns": []
}, context)
```

#### Parameters
* assessmentTargetArn (string) **required**
* assessmentTemplateName (string) **required**
* durationInSeconds (integer) **required**
* rulesPackageArns (array) **required**
* userAttributesForFindings (array)

### CreateResourceGroup



```js
amazonaws_inspector.CreateResourceGroup({
  "resourceGroupTags": []
}, context)
```

#### Parameters
* resourceGroupTags (array) **required**

### DeleteAssessmentRun



```js
amazonaws_inspector.DeleteAssessmentRun({
  "assessmentRunArn": ""
}, context)
```

#### Parameters
* assessmentRunArn (string) **required**

### DeleteAssessmentTarget



```js
amazonaws_inspector.DeleteAssessmentTarget({
  "assessmentTargetArn": ""
}, context)
```

#### Parameters
* assessmentTargetArn (string) **required**

### DeleteAssessmentTemplate



```js
amazonaws_inspector.DeleteAssessmentTemplate({
  "assessmentTemplateArn": ""
}, context)
```

#### Parameters
* assessmentTemplateArn (string) **required**

### DescribeAssessmentRuns



```js
amazonaws_inspector.DescribeAssessmentRuns({
  "assessmentRunArns": []
}, context)
```

#### Parameters
* assessmentRunArns (array) **required**

### DescribeAssessmentTargets



```js
amazonaws_inspector.DescribeAssessmentTargets({
  "assessmentTargetArns": []
}, context)
```

#### Parameters
* assessmentTargetArns (array) **required**

### DescribeAssessmentTemplates



```js
amazonaws_inspector.DescribeAssessmentTemplates({
  "assessmentTemplateArns": []
}, context)
```

#### Parameters
* assessmentTemplateArns (array) **required**

### DescribeCrossAccountAccessRole



```js
amazonaws_inspector.DescribeCrossAccountAccessRole({}, context)
```

#### Parameters
*This action has no parameters*

### DescribeFindings



```js
amazonaws_inspector.DescribeFindings({
  "findingArns": []
}, context)
```

#### Parameters
* findingArns (array) **required**
* locale (string)

### DescribeResourceGroups



```js
amazonaws_inspector.DescribeResourceGroups({
  "resourceGroupArns": []
}, context)
```

#### Parameters
* resourceGroupArns (array) **required**

### DescribeRulesPackages



```js
amazonaws_inspector.DescribeRulesPackages({
  "rulesPackageArns": []
}, context)
```

#### Parameters
* locale (string)
* rulesPackageArns (array) **required**

### GetAssessmentReport



```js
amazonaws_inspector.GetAssessmentReport({
  "assessmentRunArn": "",
  "reportFileFormat": "",
  "reportType": ""
}, context)
```

#### Parameters
* assessmentRunArn (string) **required**
* reportFileFormat (string) **required**
* reportType (string) **required**

### GetTelemetryMetadata



```js
amazonaws_inspector.GetTelemetryMetadata({
  "assessmentRunArn": ""
}, context)
```

#### Parameters
* assessmentRunArn (string) **required**

### ListAssessmentRunAgents



```js
amazonaws_inspector.ListAssessmentRunAgents({
  "assessmentRunArn": ""
}, context)
```

#### Parameters
* maxResults (string)
* nextToken (string)
* assessmentRunArn (string) **required**
* filter (object) - Contains information about an Amazon Inspector agent. This data type is used as a request parameter in the <a>ListAssessmentRunAgents</a> action.
* maxResults (integer)
* nextToken (string)

### ListAssessmentRuns



```js
amazonaws_inspector.ListAssessmentRuns({}, context)
```

#### Parameters
* maxResults (string)
* nextToken (string)
* assessmentTemplateArns (array)
* filter (object) - Used as the request parameter in the <a>ListAssessmentRuns</a> action.
* maxResults (integer)
* nextToken (string)

### ListAssessmentTargets



```js
amazonaws_inspector.ListAssessmentTargets({}, context)
```

#### Parameters
* maxResults (string)
* nextToken (string)
* filter (object) - Used as the request parameter in the <a>ListAssessmentTargets</a> action.
* maxResults (integer)
* nextToken (string)

### ListAssessmentTemplates



```js
amazonaws_inspector.ListAssessmentTemplates({}, context)
```

#### Parameters
* maxResults (string)
* nextToken (string)
* assessmentTargetArns (array)
* filter (object) - Used as the request parameter in the <a>ListAssessmentTemplates</a> action.
* maxResults (integer)
* nextToken (string)

### ListEventSubscriptions



```js
amazonaws_inspector.ListEventSubscriptions({}, context)
```

#### Parameters
* maxResults (string)
* nextToken (string)
* maxResults (integer)
* nextToken (string)
* resourceArn (string)

### ListFindings



```js
amazonaws_inspector.ListFindings({}, context)
```

#### Parameters
* maxResults (string)
* nextToken (string)
* assessmentRunArns (array)
* filter (object) - This data type is used as a request parameter in the <a>ListFindings</a> action.
* maxResults (integer)
* nextToken (string)

### ListRulesPackages



```js
amazonaws_inspector.ListRulesPackages({}, context)
```

#### Parameters
* maxResults (string)
* nextToken (string)
* maxResults (integer)
* nextToken (string)

### ListTagsForResource



```js
amazonaws_inspector.ListTagsForResource({
  "resourceArn": ""
}, context)
```

#### Parameters
* resourceArn (string) **required**

### PreviewAgents



```js
amazonaws_inspector.PreviewAgents({
  "previewAgentsArn": ""
}, context)
```

#### Parameters
* maxResults (string)
* nextToken (string)
* maxResults (integer)
* nextToken (string)
* previewAgentsArn (string) **required**

### RegisterCrossAccountAccessRole



```js
amazonaws_inspector.RegisterCrossAccountAccessRole({
  "roleArn": ""
}, context)
```

#### Parameters
* roleArn (string) **required**

### RemoveAttributesFromFindings



```js
amazonaws_inspector.RemoveAttributesFromFindings({
  "findingArns": [],
  "attributeKeys": []
}, context)
```

#### Parameters
* attributeKeys (array) **required**
* findingArns (array) **required**

### SetTagsForResource



```js
amazonaws_inspector.SetTagsForResource({
  "resourceArn": ""
}, context)
```

#### Parameters
* resourceArn (string) **required**
* tags (array)

### StartAssessmentRun



```js
amazonaws_inspector.StartAssessmentRun({
  "assessmentTemplateArn": ""
}, context)
```

#### Parameters
* assessmentRunName (string)
* assessmentTemplateArn (string) **required**

### StopAssessmentRun



```js
amazonaws_inspector.StopAssessmentRun({
  "assessmentRunArn": ""
}, context)
```

#### Parameters
* assessmentRunArn (string) **required**
* stopAction (string)

### SubscribeToEvent



```js
amazonaws_inspector.SubscribeToEvent({
  "resourceArn": "",
  "event": "",
  "topicArn": ""
}, context)
```

#### Parameters
* event (string) **required**
* resourceArn (string) **required**
* topicArn (string) **required**

### UnsubscribeFromEvent



```js
amazonaws_inspector.UnsubscribeFromEvent({
  "resourceArn": "",
  "event": "",
  "topicArn": ""
}, context)
```

#### Parameters
* event (string) **required**
* resourceArn (string) **required**
* topicArn (string) **required**

### UpdateAssessmentTarget



```js
amazonaws_inspector.UpdateAssessmentTarget({
  "assessmentTargetArn": "",
  "assessmentTargetName": "",
  "resourceGroupArn": ""
}, context)
```

#### Parameters
* assessmentTargetArn (string) **required**
* assessmentTargetName (string) **required**
* resourceGroupArn (string) **required**

