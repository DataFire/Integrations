# @datafire/amazonaws_cloudsearch

Client library for Amazon CloudSearch

## Installation and Usage
```bash
npm install --save datafire @datafire/amazonaws_cloudsearch
```

```js
let datafire = require('datafire');
let amazonaws_cloudsearch = require('@datafire/amazonaws_cloudsearch').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: "",
});

amazonaws_cloudsearch.BuildSuggesters({}).then(data => {
  console.log(data);
})
```

## Description
<fullname>Amazon CloudSearch Configuration Service</fullname> <p>You use the Amazon CloudSearch configuration service to create, configure, and manage search domains. Configuration service requests are submitted using the AWS Query protocol. AWS Query requests are HTTP or HTTPS requests submitted via HTTP GET or POST with a query parameter named Action.</p> <p>The endpoint for configuration service requests is region-specific: cloudsearch.<i>region</i>.amazonaws.com. For example, cloudsearch.us-east-1.amazonaws.com. For a current list of supported regions and endpoints, see <a href="http://docs.aws.amazon.com/general/latest/gr/rande.html#cloudsearch_region" target="_blank">Regions and Endpoints</a>.</p>

## Actions
### BuildSuggesters



```js
amazonaws_cloudsearch.BuildSuggesters({
  "DomainName": ""
}, context)
```

#### Parameters
* DomainName (string) **required** - A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).

### CreateDomain



```js
amazonaws_cloudsearch.CreateDomain({
  "DomainName": ""
}, context)
```

#### Parameters
* DomainName (string) **required** - A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).

### DefineAnalysisScheme



```js
amazonaws_cloudsearch.DefineAnalysisScheme({
  "DomainName": "",
  "AnalysisScheme": {
    "AnalysisSchemeName": "",
    "AnalysisSchemeLanguage": ""
  }
}, context)
```

#### Parameters
* AnalysisScheme (object) **required** - Configuration information for an analysis scheme. Each analysis scheme has a unique name and specifies the language of the text to be processed. The following options can be configured for an analysis scheme: <code>Synonyms</code>, <code>Stopwords</code>, <code>StemmingDictionary</code>, <code>JapaneseTokenizationDictionary</code> and <code>AlgorithmicStemming</code>.
* DomainName (string) **required** - A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).

### DefineExpression



```js
amazonaws_cloudsearch.DefineExpression({
  "DomainName": "",
  "Expression": {
    "ExpressionName": "",
    "ExpressionValue": ""
  }
}, context)
```

#### Parameters
* DomainName (string) **required** - A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).
* Expression (object) **required** - A named expression that can be evaluated at search time. Can be used to sort the search results, define other expressions, or return computed information in the search results. 

### DefineIndexField



```js
amazonaws_cloudsearch.DefineIndexField({
  "DomainName": "",
  "IndexField": {
    "IndexFieldName": "",
    "IndexFieldType": ""
  }
}, context)
```

#### Parameters
* DomainName (string) **required** - A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).
* IndexField (object) **required** - Configuration information for a field in the index, including its name, type, and options. The supported options depend on the <code><a>IndexFieldType</a></code>.

### DefineSuggester



```js
amazonaws_cloudsearch.DefineSuggester({
  "DomainName": "",
  "Suggester": {
    "SuggesterName": "",
    "DocumentSuggesterOptions": {
      "SourceField": ""
    }
  }
}, context)
```

#### Parameters
* DomainName (string) **required** - A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).
* Suggester (object) **required** - Configuration information for a search suggester. Each suggester has a unique name and specifies the text field you want to use for suggestions. The following options can be configured for a suggester: <code>FuzzyMatching</code>, <code>SortExpression</code>. 

### DeleteAnalysisScheme



```js
amazonaws_cloudsearch.DeleteAnalysisScheme({
  "DomainName": "",
  "AnalysisSchemeName": ""
}, context)
```

#### Parameters
* AnalysisSchemeName (string) **required** - Names must begin with a letter and can contain the following characters: a-z (lowercase), 0-9, and _ (underscore).
* DomainName (string) **required** - A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).

### DeleteDomain



```js
amazonaws_cloudsearch.DeleteDomain({
  "DomainName": ""
}, context)
```

#### Parameters
* DomainName (string) **required** - A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).

### DeleteExpression



```js
amazonaws_cloudsearch.DeleteExpression({
  "DomainName": "",
  "ExpressionName": ""
}, context)
```

#### Parameters
* DomainName (string) **required** - A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).
* ExpressionName (string) **required** - Names must begin with a letter and can contain the following characters: a-z (lowercase), 0-9, and _ (underscore).

### DeleteIndexField



```js
amazonaws_cloudsearch.DeleteIndexField({
  "DomainName": "",
  "IndexFieldName": ""
}, context)
```

#### Parameters
* DomainName (string) **required** - A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).
* IndexFieldName (string) **required**

### DeleteSuggester



```js
amazonaws_cloudsearch.DeleteSuggester({
  "DomainName": "",
  "SuggesterName": ""
}, context)
```

#### Parameters
* DomainName (string) **required** - A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).
* SuggesterName (string) **required** - Names must begin with a letter and can contain the following characters: a-z (lowercase), 0-9, and _ (underscore).

### DescribeAnalysisSchemes



```js
amazonaws_cloudsearch.DescribeAnalysisSchemes({
  "DomainName": ""
}, context)
```

#### Parameters
* AnalysisSchemeNames (array)
* Deployed (boolean)
* DomainName (string) **required** - A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).

### DescribeAvailabilityOptions



```js
amazonaws_cloudsearch.DescribeAvailabilityOptions({
  "DomainName": ""
}, context)
```

#### Parameters
* Deployed (boolean)
* DomainName (string) **required** - A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).

### DescribeDomains



```js
amazonaws_cloudsearch.DescribeDomains({}, context)
```

#### Parameters
* DomainNames (array) - A list of domain names.

### DescribeExpressions



```js
amazonaws_cloudsearch.DescribeExpressions({
  "DomainName": ""
}, context)
```

#### Parameters
* Deployed (boolean)
* DomainName (string) **required** - A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).
* ExpressionNames (array)

### DescribeIndexFields



```js
amazonaws_cloudsearch.DescribeIndexFields({
  "DomainName": ""
}, context)
```

#### Parameters
* Deployed (boolean)
* DomainName (string) **required** - A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).
* FieldNames (array)

### DescribeScalingParameters



```js
amazonaws_cloudsearch.DescribeScalingParameters({
  "DomainName": ""
}, context)
```

#### Parameters
* DomainName (string) **required** - A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).

### DescribeServiceAccessPolicies



```js
amazonaws_cloudsearch.DescribeServiceAccessPolicies({
  "DomainName": ""
}, context)
```

#### Parameters
* Deployed (boolean)
* DomainName (string) **required** - A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).

### DescribeSuggesters



```js
amazonaws_cloudsearch.DescribeSuggesters({
  "DomainName": ""
}, context)
```

#### Parameters
* Deployed (boolean)
* DomainName (string) **required** - A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).
* SuggesterNames (array)

### IndexDocuments



```js
amazonaws_cloudsearch.IndexDocuments({
  "DomainName": ""
}, context)
```

#### Parameters
* DomainName (string) **required** - A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).

### ListDomainNames



```js
amazonaws_cloudsearch.ListDomainNames({}, context)
```

#### Parameters
*This action has no parameters*

### UpdateAvailabilityOptions



```js
amazonaws_cloudsearch.UpdateAvailabilityOptions({
  "DomainName": "",
  "MultiAZ": true
}, context)
```

#### Parameters
* DomainName (string) **required** - A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).
* MultiAZ (boolean) **required**

### UpdateScalingParameters



```js
amazonaws_cloudsearch.UpdateScalingParameters({
  "DomainName": "",
  "ScalingParameters": {}
}, context)
```

#### Parameters
* DomainName (string) **required** - A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).
* ScalingParameters (object) **required** - The desired instance type and desired number of replicas of each index partition.

### UpdateServiceAccessPolicies



```js
amazonaws_cloudsearch.UpdateServiceAccessPolicies({
  "DomainName": "",
  "AccessPolicies": ""
}, context)
```

#### Parameters
* AccessPolicies (string) **required** - Access rules for a domain's document or search service endpoints. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-access.html" target="_blank">Configuring Access for a Search Domain</a> in the <i>Amazon CloudSearch Developer Guide</i>. The maximum size of a policy document is 100 KB.
* DomainName (string) **required** - A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).

