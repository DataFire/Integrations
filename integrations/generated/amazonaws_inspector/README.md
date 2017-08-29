# @datafire/amazonaws_inspector

Client library for Amazon Inspector

## Installation and Usage
```bash
npm install --save datafire @datafire/amazonaws_inspector
```

```js
let datafire = require('datafire');
let amazonaws_inspector = require('@datafire/amazonaws_inspector').create();

amazonaws_inspector.AddAttributesToFindings({}).then(data => {
  console.log(data);
})
```

## Description
<fullname>Amazon Inspector</fullname> <p>Amazon Inspector enables you to analyze the behavior of your AWS resources and to identify potential security issues. For more information, see <a href="http://docs.aws.amazon.com/inspector/latest/userguide/inspector_introduction.html"> Amazon Inspector User Guide</a>.</p>

## Actions
### AddAttributesToFindings



```js
amazonaws_inspector.AddAttributesToFindings({}, context)
```


### CreateAssessmentTarget



```js
amazonaws_inspector.CreateAssessmentTarget({}, context)
```


### CreateAssessmentTemplate



```js
amazonaws_inspector.CreateAssessmentTemplate({}, context)
```


### CreateResourceGroup



```js
amazonaws_inspector.CreateResourceGroup({}, context)
```


### DeleteAssessmentRun



```js
amazonaws_inspector.DeleteAssessmentRun({}, context)
```


### DeleteAssessmentTarget



```js
amazonaws_inspector.DeleteAssessmentTarget({}, context)
```


### DeleteAssessmentTemplate



```js
amazonaws_inspector.DeleteAssessmentTemplate({}, context)
```


### DescribeAssessmentRuns



```js
amazonaws_inspector.DescribeAssessmentRuns({}, context)
```


### DescribeAssessmentTargets



```js
amazonaws_inspector.DescribeAssessmentTargets({}, context)
```


### DescribeAssessmentTemplates



```js
amazonaws_inspector.DescribeAssessmentTemplates({}, context)
```


### DescribeCrossAccountAccessRole



```js
amazonaws_inspector.DescribeCrossAccountAccessRole({}, context)
```


### DescribeFindings



```js
amazonaws_inspector.DescribeFindings({}, context)
```


### DescribeResourceGroups



```js
amazonaws_inspector.DescribeResourceGroups({}, context)
```


### DescribeRulesPackages



```js
amazonaws_inspector.DescribeRulesPackages({}, context)
```


### GetTelemetryMetadata



```js
amazonaws_inspector.GetTelemetryMetadata({}, context)
```


### ListAssessmentRunAgents



```js
amazonaws_inspector.ListAssessmentRunAgents({}, context)
```


### ListAssessmentRuns



```js
amazonaws_inspector.ListAssessmentRuns({}, context)
```


### ListAssessmentTargets



```js
amazonaws_inspector.ListAssessmentTargets({}, context)
```


### ListAssessmentTemplates



```js
amazonaws_inspector.ListAssessmentTemplates({}, context)
```


### ListEventSubscriptions



```js
amazonaws_inspector.ListEventSubscriptions({}, context)
```


### ListFindings



```js
amazonaws_inspector.ListFindings({}, context)
```


### ListRulesPackages



```js
amazonaws_inspector.ListRulesPackages({}, context)
```


### ListTagsForResource



```js
amazonaws_inspector.ListTagsForResource({}, context)
```


### PreviewAgents



```js
amazonaws_inspector.PreviewAgents({}, context)
```


### RegisterCrossAccountAccessRole



```js
amazonaws_inspector.RegisterCrossAccountAccessRole({}, context)
```


### RemoveAttributesFromFindings



```js
amazonaws_inspector.RemoveAttributesFromFindings({}, context)
```


### SetTagsForResource



```js
amazonaws_inspector.SetTagsForResource({}, context)
```


### StartAssessmentRun



```js
amazonaws_inspector.StartAssessmentRun({}, context)
```


### StopAssessmentRun



```js
amazonaws_inspector.StopAssessmentRun({}, context)
```


### SubscribeToEvent



```js
amazonaws_inspector.SubscribeToEvent({}, context)
```


### UnsubscribeFromEvent



```js
amazonaws_inspector.UnsubscribeFromEvent({}, context)
```


### UpdateAssessmentTarget



```js
amazonaws_inspector.UpdateAssessmentTarget({}, context)
```


