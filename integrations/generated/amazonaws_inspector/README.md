# @datafire/amazonaws_inspector

Client library for Amazon Inspector

## Installation and Usage
```bash
npm install --save datafire @datafire/amazonaws_inspector
```

```js
let datafire = require('datafire');
let amazonaws_inspector = require('@datafire/amazonaws_inspector').actions;
let context = new datafire.Context();

amazonaws_inspector.AddAttributesToFindings({}, context).then(data => {
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

#### Parameters

### CreateAssessmentTarget



```js
amazonaws_inspector.CreateAssessmentTarget({}, context)
```

#### Parameters

### CreateAssessmentTemplate



```js
amazonaws_inspector.CreateAssessmentTemplate({}, context)
```

#### Parameters

### CreateResourceGroup



```js
amazonaws_inspector.CreateResourceGroup({}, context)
```

#### Parameters

### DeleteAssessmentRun



```js
amazonaws_inspector.DeleteAssessmentRun({}, context)
```

#### Parameters

### DeleteAssessmentTarget



```js
amazonaws_inspector.DeleteAssessmentTarget({}, context)
```

#### Parameters

### DeleteAssessmentTemplate



```js
amazonaws_inspector.DeleteAssessmentTemplate({}, context)
```

#### Parameters

### DescribeAssessmentRuns



```js
amazonaws_inspector.DescribeAssessmentRuns({}, context)
```

#### Parameters

### DescribeAssessmentTargets



```js
amazonaws_inspector.DescribeAssessmentTargets({}, context)
```

#### Parameters

### DescribeAssessmentTemplates



```js
amazonaws_inspector.DescribeAssessmentTemplates({}, context)
```

#### Parameters

### DescribeCrossAccountAccessRole



```js
amazonaws_inspector.DescribeCrossAccountAccessRole({}, context)
```

#### Parameters

### DescribeFindings



```js
amazonaws_inspector.DescribeFindings({}, context)
```

#### Parameters

### DescribeResourceGroups



```js
amazonaws_inspector.DescribeResourceGroups({}, context)
```

#### Parameters

### DescribeRulesPackages



```js
amazonaws_inspector.DescribeRulesPackages({}, context)
```

#### Parameters

### GetTelemetryMetadata



```js
amazonaws_inspector.GetTelemetryMetadata({}, context)
```

#### Parameters

### ListAssessmentRunAgents



```js
amazonaws_inspector.ListAssessmentRunAgents({}, context)
```

#### Parameters

### ListAssessmentRuns



```js
amazonaws_inspector.ListAssessmentRuns({}, context)
```

#### Parameters

### ListAssessmentTargets



```js
amazonaws_inspector.ListAssessmentTargets({}, context)
```

#### Parameters

### ListAssessmentTemplates



```js
amazonaws_inspector.ListAssessmentTemplates({}, context)
```

#### Parameters

### ListEventSubscriptions



```js
amazonaws_inspector.ListEventSubscriptions({}, context)
```

#### Parameters

### ListFindings



```js
amazonaws_inspector.ListFindings({}, context)
```

#### Parameters

### ListRulesPackages



```js
amazonaws_inspector.ListRulesPackages({}, context)
```

#### Parameters

### ListTagsForResource



```js
amazonaws_inspector.ListTagsForResource({}, context)
```

#### Parameters

### PreviewAgents



```js
amazonaws_inspector.PreviewAgents({}, context)
```

#### Parameters

### RegisterCrossAccountAccessRole



```js
amazonaws_inspector.RegisterCrossAccountAccessRole({}, context)
```

#### Parameters

### RemoveAttributesFromFindings



```js
amazonaws_inspector.RemoveAttributesFromFindings({}, context)
```

#### Parameters

### SetTagsForResource



```js
amazonaws_inspector.SetTagsForResource({}, context)
```

#### Parameters

### StartAssessmentRun



```js
amazonaws_inspector.StartAssessmentRun({}, context)
```

#### Parameters

### StopAssessmentRun



```js
amazonaws_inspector.StopAssessmentRun({}, context)
```

#### Parameters

### SubscribeToEvent



```js
amazonaws_inspector.SubscribeToEvent({}, context)
```

#### Parameters

### UnsubscribeFromEvent



```js
amazonaws_inspector.UnsubscribeFromEvent({}, context)
```

#### Parameters

### UpdateAssessmentTarget



```js
amazonaws_inspector.UpdateAssessmentTarget({}, context)
```

#### Parameters

