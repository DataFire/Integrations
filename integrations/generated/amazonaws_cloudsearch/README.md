# @datafire/amazonaws_cloudsearch

Client library for Amazon CloudSearch

## Installation and Usage
```bash
npm install --save datafire @datafire/amazonaws_cloudsearch
```

```js
let datafire = require('datafire');
let amazonaws_cloudsearch = require('@datafire/amazonaws_cloudsearch').create();

amazonaws_cloudsearch.BuildSuggesters({}).then(data => {
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


### CreateDomain



```js
amazonaws_cloudsearch.CreateDomain({}, context)
```


### DefineAnalysisScheme



```js
amazonaws_cloudsearch.DefineAnalysisScheme({}, context)
```


### DefineExpression



```js
amazonaws_cloudsearch.DefineExpression({}, context)
```


### DefineIndexField



```js
amazonaws_cloudsearch.DefineIndexField({}, context)
```


### DefineSuggester



```js
amazonaws_cloudsearch.DefineSuggester({}, context)
```


### DeleteAnalysisScheme



```js
amazonaws_cloudsearch.DeleteAnalysisScheme({}, context)
```


### DeleteDomain



```js
amazonaws_cloudsearch.DeleteDomain({}, context)
```


### DeleteExpression



```js
amazonaws_cloudsearch.DeleteExpression({}, context)
```


### DeleteIndexField



```js
amazonaws_cloudsearch.DeleteIndexField({}, context)
```


### DeleteSuggester



```js
amazonaws_cloudsearch.DeleteSuggester({}, context)
```


### DescribeAnalysisSchemes



```js
amazonaws_cloudsearch.DescribeAnalysisSchemes({}, context)
```


### DescribeAvailabilityOptions



```js
amazonaws_cloudsearch.DescribeAvailabilityOptions({}, context)
```


### DescribeDomains



```js
amazonaws_cloudsearch.DescribeDomains({}, context)
```


### DescribeExpressions



```js
amazonaws_cloudsearch.DescribeExpressions({}, context)
```


### DescribeIndexFields



```js
amazonaws_cloudsearch.DescribeIndexFields({}, context)
```


### DescribeScalingParameters



```js
amazonaws_cloudsearch.DescribeScalingParameters({}, context)
```


### DescribeServiceAccessPolicies



```js
amazonaws_cloudsearch.DescribeServiceAccessPolicies({}, context)
```


### DescribeSuggesters



```js
amazonaws_cloudsearch.DescribeSuggesters({}, context)
```


### IndexDocuments



```js
amazonaws_cloudsearch.IndexDocuments({}, context)
```


### ListDomainNames



```js
amazonaws_cloudsearch.ListDomainNames({}, context)
```


### UpdateAvailabilityOptions



```js
amazonaws_cloudsearch.UpdateAvailabilityOptions({}, context)
```


### UpdateScalingParameters



```js
amazonaws_cloudsearch.UpdateScalingParameters({}, context)
```


### UpdateServiceAccessPolicies



```js
amazonaws_cloudsearch.UpdateServiceAccessPolicies({}, context)
```


