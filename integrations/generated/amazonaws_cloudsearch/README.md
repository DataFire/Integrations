# @datafire/amazonaws_cloudsearch

Client library for Amazon CloudSearch

## Installation and Usage
```bash
npm install --save datafire @datafire/amazonaws_cloudsearch
```

```js
let datafire = require('datafire');
let amazonaws_cloudsearch = require('@datafire/amazonaws_cloudsearch').actions;
let context = new datafire.Context();

amazonaws_cloudsearch.BuildSuggesters({}, context).then(data => {
  console.log(data);
})
```

## Description
<fullname>Amazon CloudSearch Configuration Service</fullname> <p>You use the Amazon CloudSearch configuration service to create, configure, and manage search domains. Configuration service requests are submitted using the AWS Query protocol. AWS Query requests are HTTP or HTTPS requests submitted via HTTP GET or POST with a query parameter named Action.</p> <p>The endpoint for configuration service requests is region-specific: cloudsearch.<i>region</i>.amazonaws.com. For example, cloudsearch.us-east-1.amazonaws.com. For a current list of supported regions and endpoints, see <a href="http://docs.aws.amazon.com/general/latest/gr/rande.html#cloudsearch_region" target="_blank">Regions and Endpoints</a>.</p>

## Actions
### BuildSuggesters



```js
amazonaws_cloudsearch.BuildSuggesters({}, context)
```

#### Parameters

### CreateDomain



```js
amazonaws_cloudsearch.CreateDomain({}, context)
```

#### Parameters

### DefineAnalysisScheme



```js
amazonaws_cloudsearch.DefineAnalysisScheme({}, context)
```

#### Parameters

### DefineExpression



```js
amazonaws_cloudsearch.DefineExpression({}, context)
```

#### Parameters

### DefineIndexField



```js
amazonaws_cloudsearch.DefineIndexField({}, context)
```

#### Parameters

### DefineSuggester



```js
amazonaws_cloudsearch.DefineSuggester({}, context)
```

#### Parameters

### DeleteAnalysisScheme



```js
amazonaws_cloudsearch.DeleteAnalysisScheme({}, context)
```

#### Parameters

### DeleteDomain



```js
amazonaws_cloudsearch.DeleteDomain({}, context)
```

#### Parameters

### DeleteExpression



```js
amazonaws_cloudsearch.DeleteExpression({}, context)
```

#### Parameters

### DeleteIndexField



```js
amazonaws_cloudsearch.DeleteIndexField({}, context)
```

#### Parameters

### DeleteSuggester



```js
amazonaws_cloudsearch.DeleteSuggester({}, context)
```

#### Parameters

### DescribeAnalysisSchemes



```js
amazonaws_cloudsearch.DescribeAnalysisSchemes({}, context)
```

#### Parameters

### DescribeAvailabilityOptions



```js
amazonaws_cloudsearch.DescribeAvailabilityOptions({}, context)
```

#### Parameters

### DescribeDomains



```js
amazonaws_cloudsearch.DescribeDomains({}, context)
```

#### Parameters

### DescribeExpressions



```js
amazonaws_cloudsearch.DescribeExpressions({}, context)
```

#### Parameters

### DescribeIndexFields



```js
amazonaws_cloudsearch.DescribeIndexFields({}, context)
```

#### Parameters

### DescribeScalingParameters



```js
amazonaws_cloudsearch.DescribeScalingParameters({}, context)
```

#### Parameters

### DescribeServiceAccessPolicies



```js
amazonaws_cloudsearch.DescribeServiceAccessPolicies({}, context)
```

#### Parameters

### DescribeSuggesters



```js
amazonaws_cloudsearch.DescribeSuggesters({}, context)
```

#### Parameters

### IndexDocuments



```js
amazonaws_cloudsearch.IndexDocuments({}, context)
```

#### Parameters

### ListDomainNames



```js
amazonaws_cloudsearch.ListDomainNames({}, context)
```

#### Parameters

### UpdateAvailabilityOptions



```js
amazonaws_cloudsearch.UpdateAvailabilityOptions({}, context)
```

#### Parameters

### UpdateScalingParameters



```js
amazonaws_cloudsearch.UpdateScalingParameters({}, context)
```

#### Parameters

### UpdateServiceAccessPolicies



```js
amazonaws_cloudsearch.UpdateServiceAccessPolicies({}, context)
```

#### Parameters

