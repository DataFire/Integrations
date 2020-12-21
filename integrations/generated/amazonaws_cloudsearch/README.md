# @datafire/amazonaws_cloudsearch

Client library for Amazon CloudSearch

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_cloudsearch
```
```js
let amazonaws_cloudsearch = require('@datafire/amazonaws_cloudsearch').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

.then(data => {
  console.log(data);
});
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

#### Input
* input `object`
  * DomainName **required** `string`

#### Output
* output [BuildSuggestersResponse](#buildsuggestersresponse)

### BuildSuggesters



```js
amazonaws_cloudsearch.BuildSuggesters({
  "DomainName": ""
}, context)
```

#### Input
* input `object`
  * DomainName **required** [DomainName](#domainname)

#### Output
* output [BuildSuggestersResponse](#buildsuggestersresponse)

### CreateDomain



```js
amazonaws_cloudsearch.CreateDomain({
  "DomainName": ""
}, context)
```

#### Input
* input `object`
  * DomainName **required** `string`

#### Output
* output [CreateDomainResponse](#createdomainresponse)

### CreateDomain



```js
amazonaws_cloudsearch.CreateDomain({
  "DomainName": null
}, context)
```

#### Input
* input `object`
  * DomainName **required**

#### Output
* output [CreateDomainResponse](#createdomainresponse)

### DefineAnalysisScheme



```js
amazonaws_cloudsearch.DefineAnalysisScheme({
  "DomainName": "",
  "AnalysisScheme": {}
}, context)
```

#### Input
* input `object`
  * DomainName **required** `string`
  * AnalysisScheme **required** `object`

#### Output
* output [DefineAnalysisSchemeResponse](#defineanalysisschemeresponse)

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

#### Input
* input `object`
  * AnalysisScheme **required** [AnalysisScheme](#analysisscheme)
  * DomainName **required** [DomainName](#domainname)

#### Output
* output [DefineAnalysisSchemeResponse](#defineanalysisschemeresponse)

### DefineExpression



```js
amazonaws_cloudsearch.DefineExpression({
  "DomainName": "",
  "Expression": {}
}, context)
```

#### Input
* input `object`
  * DomainName **required** `string`
  * Expression **required** `object`

#### Output
* output [DefineExpressionResponse](#defineexpressionresponse)

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

#### Input
* input `object`
  * DomainName **required** [DomainName](#domainname)
  * Expression **required** [Expression](#expression)

#### Output
* output [DefineExpressionResponse](#defineexpressionresponse)

### DefineIndexField



```js
amazonaws_cloudsearch.DefineIndexField({
  "DomainName": "",
  "IndexField": {}
}, context)
```

#### Input
* input `object`
  * DomainName **required** `string`
  * IndexField **required** `object`

#### Output
* output [DefineIndexFieldResponse](#defineindexfieldresponse)

### DefineIndexField



```js
amazonaws_cloudsearch.DefineIndexField({
  "DomainName": "",
  "IndexField": null
}, context)
```

#### Input
* input `object`
  * DomainName **required** [DomainName](#domainname)
  * IndexField **required**
    * DateArrayOptions [DateArrayOptions](#datearrayoptions)
    * DateOptions [DateOptions](#dateoptions)
    * DoubleArrayOptions [DoubleArrayOptions](#doublearrayoptions)
    * DoubleOptions [DoubleOptions](#doubleoptions)
    * IndexFieldName **required**
    * IndexFieldType **required** [IndexFieldType](#indexfieldtype)
    * IntArrayOptions [IntArrayOptions](#intarrayoptions)
    * IntOptions [IntOptions](#intoptions)
    * LatLonOptions [LatLonOptions](#latlonoptions)
    * LiteralArrayOptions [LiteralArrayOptions](#literalarrayoptions)
    * LiteralOptions [LiteralOptions](#literaloptions)
    * TextArrayOptions [TextArrayOptions](#textarrayoptions)
    * TextOptions [TextOptions](#textoptions)

#### Output
* output [DefineIndexFieldResponse](#defineindexfieldresponse)

### DefineSuggester



```js
amazonaws_cloudsearch.DefineSuggester({
  "DomainName": "",
  "Suggester": {}
}, context)
```

#### Input
* input `object`
  * DomainName **required** `string`
  * Suggester **required** `object`

#### Output
* output [DefineSuggesterResponse](#definesuggesterresponse)

### DefineSuggester



```js
amazonaws_cloudsearch.DefineSuggester({
  "DomainName": "",
  "Suggester": {
    "SuggesterName": "",
    "DocumentSuggesterOptions": {
      "SourceField": null
    }
  }
}, context)
```

#### Input
* input `object`
  * DomainName **required** [DomainName](#domainname)
  * Suggester **required** [Suggester](#suggester)

#### Output
* output [DefineSuggesterResponse](#definesuggesterresponse)

### DeleteAnalysisScheme



```js
amazonaws_cloudsearch.DeleteAnalysisScheme({
  "DomainName": "",
  "AnalysisSchemeName": ""
}, context)
```

#### Input
* input `object`
  * DomainName **required** `string`
  * AnalysisSchemeName **required** `string`

#### Output
* output [DeleteAnalysisSchemeResponse](#deleteanalysisschemeresponse)

### DeleteAnalysisScheme



```js
amazonaws_cloudsearch.DeleteAnalysisScheme({
  "DomainName": "",
  "AnalysisSchemeName": null
}, context)
```

#### Input
* input `object`
  * AnalysisSchemeName **required**
  * DomainName **required** [DomainName](#domainname)

#### Output
* output [DeleteAnalysisSchemeResponse](#deleteanalysisschemeresponse)

### DeleteDomain



```js
amazonaws_cloudsearch.DeleteDomain({
  "DomainName": ""
}, context)
```

#### Input
* input `object`
  * DomainName **required** `string`

#### Output
* output [DeleteDomainResponse](#deletedomainresponse)

### DeleteDomain



```js
amazonaws_cloudsearch.DeleteDomain({
  "DomainName": null
}, context)
```

#### Input
* input `object`
  * DomainName **required**

#### Output
* output [DeleteDomainResponse](#deletedomainresponse)

### DeleteExpression



```js
amazonaws_cloudsearch.DeleteExpression({
  "DomainName": "",
  "ExpressionName": ""
}, context)
```

#### Input
* input `object`
  * DomainName **required** `string`
  * ExpressionName **required** `string`

#### Output
* output [DeleteExpressionResponse](#deleteexpressionresponse)

### DeleteExpression



```js
amazonaws_cloudsearch.DeleteExpression({
  "DomainName": "",
  "ExpressionName": null
}, context)
```

#### Input
* input `object`
  * DomainName **required** [DomainName](#domainname)
  * ExpressionName **required**

#### Output
* output [DeleteExpressionResponse](#deleteexpressionresponse)

### DeleteIndexField



```js
amazonaws_cloudsearch.DeleteIndexField({
  "DomainName": "",
  "IndexFieldName": ""
}, context)
```

#### Input
* input `object`
  * DomainName **required** `string`
  * IndexFieldName **required** `string`

#### Output
* output [DeleteIndexFieldResponse](#deleteindexfieldresponse)

### DeleteIndexField



```js
amazonaws_cloudsearch.DeleteIndexField({
  "DomainName": "",
  "IndexFieldName": null
}, context)
```

#### Input
* input `object`
  * DomainName **required** [DomainName](#domainname)
  * IndexFieldName **required**

#### Output
* output [DeleteIndexFieldResponse](#deleteindexfieldresponse)

### DeleteSuggester



```js
amazonaws_cloudsearch.DeleteSuggester({
  "DomainName": "",
  "SuggesterName": ""
}, context)
```

#### Input
* input `object`
  * DomainName **required** `string`
  * SuggesterName **required** `string`

#### Output
* output [DeleteSuggesterResponse](#deletesuggesterresponse)

### DeleteSuggester



```js
amazonaws_cloudsearch.DeleteSuggester({
  "DomainName": "",
  "SuggesterName": null
}, context)
```

#### Input
* input `object`
  * DomainName **required** [DomainName](#domainname)
  * SuggesterName **required**

#### Output
* output [DeleteSuggesterResponse](#deletesuggesterresponse)

### DescribeAnalysisSchemes



```js
amazonaws_cloudsearch.DescribeAnalysisSchemes({
  "DomainName": ""
}, context)
```

#### Input
* input `object`
  * DomainName **required** `string`
  * AnalysisSchemeNames `array`
  * Deployed `boolean`

#### Output
* output [DescribeAnalysisSchemesResponse](#describeanalysisschemesresponse)

### DescribeAnalysisSchemes



```js
amazonaws_cloudsearch.DescribeAnalysisSchemes({
  "DomainName": null
}, context)
```

#### Input
* input `object`
  * AnalysisSchemeNames
    * items [StandardName](#standardname)
  * Deployed
  * DomainName **required**

#### Output
* output [DescribeAnalysisSchemesResponse](#describeanalysisschemesresponse)

### DescribeAvailabilityOptions



```js
amazonaws_cloudsearch.DescribeAvailabilityOptions({
  "DomainName": ""
}, context)
```

#### Input
* input `object`
  * DomainName **required** `string`
  * Deployed `boolean`

#### Output
* output [DescribeAvailabilityOptionsResponse](#describeavailabilityoptionsresponse)

### DescribeAvailabilityOptions



```js
amazonaws_cloudsearch.DescribeAvailabilityOptions({
  "DomainName": null
}, context)
```

#### Input
* input `object`
  * Deployed
  * DomainName **required**

#### Output
* output [DescribeAvailabilityOptionsResponse](#describeavailabilityoptionsresponse)

### DescribeDomainEndpointOptions



```js
amazonaws_cloudsearch.DescribeDomainEndpointOptions({
  "DomainName": ""
}, context)
```

#### Input
* input `object`
  * DomainName **required** `string`
  * Deployed `boolean`

#### Output
* output [DescribeDomainEndpointOptionsResponse](#describedomainendpointoptionsresponse)

### DescribeDomainEndpointOptions



```js
amazonaws_cloudsearch.DescribeDomainEndpointOptions({
  "DomainName": null
}, context)
```

#### Input
* input `object`
  * Deployed
  * DomainName **required**

#### Output
* output [DescribeDomainEndpointOptionsResponse](#describedomainendpointoptionsresponse)

### DescribeDomains



```js
amazonaws_cloudsearch.DescribeDomains({}, context)
```

#### Input
* input `object`
  * DomainNames `array`

#### Output
* output [DescribeDomainsResponse](#describedomainsresponse)

### DescribeDomains



```js
amazonaws_cloudsearch.DescribeDomains({}, context)
```

#### Input
* input `object`
  * DomainNames
    * items [DomainName](#domainname)

#### Output
* output [DescribeDomainsResponse](#describedomainsresponse)

### DescribeExpressions



```js
amazonaws_cloudsearch.DescribeExpressions({
  "DomainName": ""
}, context)
```

#### Input
* input `object`
  * DomainName **required** `string`
  * ExpressionNames `array`
  * Deployed `boolean`

#### Output
* output [DescribeExpressionsResponse](#describeexpressionsresponse)

### DescribeExpressions



```js
amazonaws_cloudsearch.DescribeExpressions({
  "DomainName": null
}, context)
```

#### Input
* input `object`
  * Deployed
  * DomainName **required**
  * ExpressionNames
    * items [StandardName](#standardname)

#### Output
* output [DescribeExpressionsResponse](#describeexpressionsresponse)

### DescribeIndexFields



```js
amazonaws_cloudsearch.DescribeIndexFields({
  "DomainName": ""
}, context)
```

#### Input
* input `object`
  * DomainName **required** `string`
  * FieldNames `array`
  * Deployed `boolean`

#### Output
* output [DescribeIndexFieldsResponse](#describeindexfieldsresponse)

### DescribeIndexFields



```js
amazonaws_cloudsearch.DescribeIndexFields({
  "DomainName": null
}, context)
```

#### Input
* input `object`
  * Deployed
  * DomainName **required**
  * FieldNames
    * items [DynamicFieldName](#dynamicfieldname)

#### Output
* output [DescribeIndexFieldsResponse](#describeindexfieldsresponse)

### DescribeScalingParameters



```js
amazonaws_cloudsearch.DescribeScalingParameters({
  "DomainName": ""
}, context)
```

#### Input
* input `object`
  * DomainName **required** `string`

#### Output
* output [DescribeScalingParametersResponse](#describescalingparametersresponse)

### DescribeScalingParameters



```js
amazonaws_cloudsearch.DescribeScalingParameters({
  "DomainName": ""
}, context)
```

#### Input
* input `object`
  * DomainName **required** [DomainName](#domainname)

#### Output
* output [DescribeScalingParametersResponse](#describescalingparametersresponse)

### DescribeServiceAccessPolicies



```js
amazonaws_cloudsearch.DescribeServiceAccessPolicies({
  "DomainName": ""
}, context)
```

#### Input
* input `object`
  * DomainName **required** `string`
  * Deployed `boolean`

#### Output
* output [DescribeServiceAccessPoliciesResponse](#describeserviceaccesspoliciesresponse)

### DescribeServiceAccessPolicies



```js
amazonaws_cloudsearch.DescribeServiceAccessPolicies({
  "DomainName": null
}, context)
```

#### Input
* input `object`
  * Deployed
  * DomainName **required**

#### Output
* output [DescribeServiceAccessPoliciesResponse](#describeserviceaccesspoliciesresponse)

### DescribeSuggesters



```js
amazonaws_cloudsearch.DescribeSuggesters({
  "DomainName": ""
}, context)
```

#### Input
* input `object`
  * DomainName **required** `string`
  * SuggesterNames `array`
  * Deployed `boolean`

#### Output
* output [DescribeSuggestersResponse](#describesuggestersresponse)

### DescribeSuggesters



```js
amazonaws_cloudsearch.DescribeSuggesters({
  "DomainName": null
}, context)
```

#### Input
* input `object`
  * Deployed
  * DomainName **required**
  * SuggesterNames
    * items [StandardName](#standardname)

#### Output
* output [DescribeSuggestersResponse](#describesuggestersresponse)

### IndexDocuments



```js
amazonaws_cloudsearch.IndexDocuments({
  "DomainName": ""
}, context)
```

#### Input
* input `object`
  * DomainName **required** `string`

#### Output
* output [IndexDocumentsResponse](#indexdocumentsresponse)

### IndexDocuments



```js
amazonaws_cloudsearch.IndexDocuments({
  "DomainName": ""
}, context)
```

#### Input
* input `object`
  * DomainName **required** [DomainName](#domainname)

#### Output
* output [IndexDocumentsResponse](#indexdocumentsresponse)

### ListDomainNames



```js
amazonaws_cloudsearch.ListDomainNames({}, context)
```

#### Input
* input `object`

#### Output
* output [ListDomainNamesResponse](#listdomainnamesresponse)

### ListDomainNames



```js
amazonaws_cloudsearch.ListDomainNames({}, context)
```

#### Input
* input `object`

#### Output
* output [ListDomainNamesResponse](#listdomainnamesresponse)

### UpdateAvailabilityOptions



```js
amazonaws_cloudsearch.UpdateAvailabilityOptions({
  "DomainName": "",
  "MultiAZ": true
}, context)
```

#### Input
* input `object`
  * DomainName **required** `string`
  * MultiAZ **required** `boolean`

#### Output
* output [UpdateAvailabilityOptionsResponse](#updateavailabilityoptionsresponse)

### UpdateAvailabilityOptions



```js
amazonaws_cloudsearch.UpdateAvailabilityOptions({
  "DomainName": "",
  "MultiAZ": null
}, context)
```

#### Input
* input `object`
  * DomainName **required** [DomainName](#domainname)
  * MultiAZ **required**

#### Output
* output [UpdateAvailabilityOptionsResponse](#updateavailabilityoptionsresponse)

### UpdateDomainEndpointOptions



```js
amazonaws_cloudsearch.UpdateDomainEndpointOptions({
  "DomainName": "",
  "DomainEndpointOptions": {}
}, context)
```

#### Input
* input `object`
  * DomainName **required** `string`
  * DomainEndpointOptions **required** `object`

#### Output
* output [UpdateDomainEndpointOptionsResponse](#updatedomainendpointoptionsresponse)

### UpdateDomainEndpointOptions



```js
amazonaws_cloudsearch.UpdateDomainEndpointOptions({
  "DomainName": null,
  "DomainEndpointOptions": null
}, context)
```

#### Input
* input `object`
  * DomainEndpointOptions **required**
    * EnforceHTTPS
    * TLSSecurityPolicy
  * DomainName **required**

#### Output
* output [UpdateDomainEndpointOptionsResponse](#updatedomainendpointoptionsresponse)

### UpdateScalingParameters



```js
amazonaws_cloudsearch.UpdateScalingParameters({
  "DomainName": "",
  "ScalingParameters": {}
}, context)
```

#### Input
* input `object`
  * DomainName **required** `string`
  * ScalingParameters **required** `object`

#### Output
* output [UpdateScalingParametersResponse](#updatescalingparametersresponse)

### UpdateScalingParameters



```js
amazonaws_cloudsearch.UpdateScalingParameters({
  "DomainName": "",
  "ScalingParameters": {}
}, context)
```

#### Input
* input `object`
  * DomainName **required** [DomainName](#domainname)
  * ScalingParameters **required** [ScalingParameters](#scalingparameters)

#### Output
* output [UpdateScalingParametersResponse](#updatescalingparametersresponse)

### UpdateServiceAccessPolicies



```js
amazonaws_cloudsearch.UpdateServiceAccessPolicies({
  "DomainName": "",
  "AccessPolicies": ""
}, context)
```

#### Input
* input `object`
  * DomainName **required** `string`
  * AccessPolicies **required** `string`

#### Output
* output [UpdateServiceAccessPoliciesResponse](#updateserviceaccesspoliciesresponse)

### UpdateServiceAccessPolicies



```js
amazonaws_cloudsearch.UpdateServiceAccessPolicies({
  "DomainName": "",
  "AccessPolicies": null
}, context)
```

#### Input
* input `object`
  * AccessPolicies **required**
  * DomainName **required** [DomainName](#domainname)

#### Output
* output [UpdateServiceAccessPoliciesResponse](#updateserviceaccesspoliciesresponse)



## Definitions

### APIVersion
* APIVersion `string`: The Amazon CloudSearch API version for a domain: 2011-02-01 or 2013-01-01.

### ARN
* ARN `string`: The Amazon Resource Name (ARN) of the search domain. See <a href="http://docs.aws.amazon.com/IAM/latest/UserGuide/index.html?Using_Identifiers.html" target="_blank">Identifiers for IAM Entities</a> in <i>Using AWS Identity and Access Management</i> for more information.

### AccessPoliciesStatus
* AccessPoliciesStatus `object`: The configured access rules for the domain's document and search endpoints, and the current status of those rules.
  * Options **required** [PolicyDocument](#policydocument)
  * Status **required** [OptionStatus](#optionstatus)

### AlgorithmicStemming
* AlgorithmicStemming `string` (values: none, minimal, light, full)

### AnalysisOptions
* AnalysisOptions `object`: Synonyms, stopwords, and stemming options for an analysis scheme. Includes tokenization dictionary for Japanese.
  * AlgorithmicStemming
  * JapaneseTokenizationDictionary
  * StemmingDictionary
  * Stopwords
  * Synonyms

### AnalysisScheme
* AnalysisScheme `object`: Configuration information for an analysis scheme. Each analysis scheme has a unique name and specifies the language of the text to be processed. The following options can be configured for an analysis scheme: <code>Synonyms</code>, <code>Stopwords</code>, <code>StemmingDictionary</code>, <code>JapaneseTokenizationDictionary</code> and <code>AlgorithmicStemming</code>.
  * AnalysisOptions [AnalysisOptions](#analysisoptions)
  * AnalysisSchemeLanguage **required** [AnalysisSchemeLanguage](#analysisschemelanguage)
  * AnalysisSchemeName **required** [StandardName](#standardname)

### AnalysisSchemeLanguage
* AnalysisSchemeLanguage `string` (values: ar, bg, ca, cs, da, de, el, en, es, eu, fa, fi, fr, ga, gl, he, hi, hu, hy, id, it, ja, ko, lv, mul, nl, no, pt, ro, ru, sv, th, tr, zh-Hans, zh-Hant): An <a href="http://tools.ietf.org/html/rfc4646" target="_blank">IETF RFC 4646</a> language code or <code>mul</code> for multiple languages.

### AnalysisSchemeStatus
* AnalysisSchemeStatus `object`: The status and configuration of an <code>AnalysisScheme</code>.
  * Options **required** [AnalysisScheme](#analysisscheme)
  * Status **required** [OptionStatus](#optionstatus)

### AnalysisSchemeStatusList
* AnalysisSchemeStatusList `array`: A list of the analysis schemes configured for a domain.
  * items [AnalysisSchemeStatus](#analysisschemestatus)

### AvailabilityOptionsStatus
* AvailabilityOptionsStatus `object`: The status and configuration of the domain's availability options.
  * Options **required**
  * Status **required** [OptionStatus](#optionstatus)

### BaseException


### Boolean
* Boolean `boolean`

### BuildSuggestersRequest
* BuildSuggestersRequest `object`: Container for the parameters to the <code><a>BuildSuggester</a></code> operation. Specifies the name of the domain you want to update.
  * DomainName **required** [DomainName](#domainname)

### BuildSuggestersResponse
* BuildSuggestersResponse `object`: The result of a <code>BuildSuggester</code> request. Contains a list of the fields used for suggestions.
  * FieldNames [FieldNameList](#fieldnamelist)

### CreateDomainRequest
* CreateDomainRequest `object`: Container for the parameters to the <code><a>CreateDomain</a></code> operation. Specifies a name for the new search domain.
  * DomainName **required**

### CreateDomainResponse
* CreateDomainResponse `object`: The result of a <code>CreateDomainRequest</code>. Contains the status of a newly created domain.
  * DomainStatus [DomainStatus](#domainstatus)

### DateArrayOptions
* DateArrayOptions `object`: Options for a field that contains an array of dates. Present if <code>IndexFieldType</code> specifies the field is of type <code>date-array</code>. All options are enabled by default.
  * DefaultValue
  * FacetEnabled
  * ReturnEnabled
  * SearchEnabled
  * SourceFields

### DateOptions
* DateOptions `object`: Options for a date field. Dates and times are specified in UTC (Coordinated Universal Time) according to IETF RFC3339: yyyy-mm-ddT00:00:00Z. Present if <code>IndexFieldType</code> specifies the field is of type <code>date</code>. All options are enabled by default.
  * DefaultValue
  * FacetEnabled
  * ReturnEnabled
  * SearchEnabled
  * SortEnabled
  * SourceField [FieldName](#fieldname)

### DefineAnalysisSchemeRequest
* DefineAnalysisSchemeRequest `object`: Container for the parameters to the <code><a>DefineAnalysisScheme</a></code> operation. Specifies the name of the domain you want to update and the analysis scheme configuration.
  * AnalysisScheme **required** [AnalysisScheme](#analysisscheme)
  * DomainName **required** [DomainName](#domainname)

### DefineAnalysisSchemeResponse
* DefineAnalysisSchemeResponse `object`: The result of a <code><a>DefineAnalysisScheme</a></code> request. Contains the status of the newly-configured analysis scheme.
  * AnalysisScheme **required** [AnalysisSchemeStatus](#analysisschemestatus)

### DefineExpressionRequest
* DefineExpressionRequest `object`: Container for the parameters to the <code><a>DefineExpression</a></code> operation. Specifies the name of the domain you want to update and the expression you want to configure.
  * DomainName **required** [DomainName](#domainname)
  * Expression **required** [Expression](#expression)

### DefineExpressionResponse
* DefineExpressionResponse `object`: The result of a <code>DefineExpression</code> request. Contains the status of the newly-configured expression.
  * Expression **required** [ExpressionStatus](#expressionstatus)

### DefineIndexFieldRequest
* DefineIndexFieldRequest `object`: Container for the parameters to the <code><a>DefineIndexField</a></code> operation. Specifies the name of the domain you want to update and the index field configuration.
  * DomainName **required** [DomainName](#domainname)
  * IndexField **required**
    * DateArrayOptions [DateArrayOptions](#datearrayoptions)
    * DateOptions [DateOptions](#dateoptions)
    * DoubleArrayOptions [DoubleArrayOptions](#doublearrayoptions)
    * DoubleOptions [DoubleOptions](#doubleoptions)
    * IndexFieldName **required**
    * IndexFieldType **required** [IndexFieldType](#indexfieldtype)
    * IntArrayOptions [IntArrayOptions](#intarrayoptions)
    * IntOptions [IntOptions](#intoptions)
    * LatLonOptions [LatLonOptions](#latlonoptions)
    * LiteralArrayOptions [LiteralArrayOptions](#literalarrayoptions)
    * LiteralOptions [LiteralOptions](#literaloptions)
    * TextArrayOptions [TextArrayOptions](#textarrayoptions)
    * TextOptions [TextOptions](#textoptions)

### DefineIndexFieldResponse
* DefineIndexFieldResponse `object`: The result of a <code><a>DefineIndexField</a></code> request. Contains the status of the newly-configured index field.
  * IndexField **required** [IndexFieldStatus](#indexfieldstatus)

### DefineSuggesterRequest
* DefineSuggesterRequest `object`: Container for the parameters to the <code><a>DefineSuggester</a></code> operation. Specifies the name of the domain you want to update and the suggester configuration.
  * DomainName **required** [DomainName](#domainname)
  * Suggester **required** [Suggester](#suggester)

### DefineSuggesterResponse
* DefineSuggesterResponse `object`: The result of a <code>DefineSuggester</code> request. Contains the status of the newly-configured suggester.
  * Suggester **required** [SuggesterStatus](#suggesterstatus)

### DeleteAnalysisSchemeRequest
* DeleteAnalysisSchemeRequest `object`: Container for the parameters to the <code><a>DeleteAnalysisScheme</a></code> operation. Specifies the name of the domain you want to update and the analysis scheme you want to delete. 
  * AnalysisSchemeName **required**
  * DomainName **required** [DomainName](#domainname)

### DeleteAnalysisSchemeResponse
* DeleteAnalysisSchemeResponse `object`: The result of a <code>DeleteAnalysisScheme</code> request. Contains the status of the deleted analysis scheme.
  * AnalysisScheme **required**
    * Options **required** [AnalysisScheme](#analysisscheme)
    * Status **required** [OptionStatus](#optionstatus)

### DeleteDomainRequest
* DeleteDomainRequest `object`: Container for the parameters to the <code><a>DeleteDomain</a></code> operation. Specifies the name of the domain you want to delete.
  * DomainName **required**

### DeleteDomainResponse
* DeleteDomainResponse `object`: The result of a <code>DeleteDomain</code> request. Contains the status of a newly deleted domain, or no status if the domain has already been completely deleted.
  * DomainStatus [DomainStatus](#domainstatus)

### DeleteExpressionRequest
* DeleteExpressionRequest `object`: Container for the parameters to the <code><a>DeleteExpression</a></code> operation. Specifies the name of the domain you want to update and the name of the expression you want to delete.
  * DomainName **required** [DomainName](#domainname)
  * ExpressionName **required**

### DeleteExpressionResponse
* DeleteExpressionResponse `object`: The result of a <code><a>DeleteExpression</a></code> request. Specifies the expression being deleted.
  * Expression **required**
    * Options **required**
      * ExpressionName **required** [StandardName](#standardname)
      * ExpressionValue **required** [ExpressionValue](#expressionvalue)
    * Status **required** [OptionStatus](#optionstatus)

### DeleteIndexFieldRequest
* DeleteIndexFieldRequest `object`: Container for the parameters to the <code><a>DeleteIndexField</a></code> operation. Specifies the name of the domain you want to update and the name of the index field you want to delete.
  * DomainName **required** [DomainName](#domainname)
  * IndexFieldName **required**

### DeleteIndexFieldResponse
* DeleteIndexFieldResponse `object`: The result of a <code><a>DeleteIndexField</a></code> request.
  * IndexField **required**
    * Options **required** [IndexField](#indexfield)
    * Status **required** [OptionStatus](#optionstatus)

### DeleteSuggesterRequest
* DeleteSuggesterRequest `object`: Container for the parameters to the <code><a>DeleteSuggester</a></code> operation. Specifies the name of the domain you want to update and name of the suggester you want to delete.
  * DomainName **required** [DomainName](#domainname)
  * SuggesterName **required**

### DeleteSuggesterResponse
* DeleteSuggesterResponse `object`: The result of a <code>DeleteSuggester</code> request. Contains the status of the deleted suggester.
  * Suggester **required**
    * Options **required** [Suggester](#suggester)
    * Status **required** [OptionStatus](#optionstatus)

### DescribeAnalysisSchemesRequest
* DescribeAnalysisSchemesRequest `object`: Container for the parameters to the <code><a>DescribeAnalysisSchemes</a></code> operation. Specifies the name of the domain you want to describe. To limit the response to particular analysis schemes, specify the names of the analysis schemes you want to describe. To show the active configuration and exclude any pending changes, set the <code>Deployed</code> option to <code>true</code>. 
  * AnalysisSchemeNames
    * items [StandardName](#standardname)
  * Deployed
  * DomainName **required**

### DescribeAnalysisSchemesResponse
* DescribeAnalysisSchemesResponse `object`: The result of a <code>DescribeAnalysisSchemes</code> request. Contains the analysis schemes configured for the domain specified in the request.
  * AnalysisSchemes **required**
    * items [AnalysisSchemeStatus](#analysisschemestatus)

### DescribeAvailabilityOptionsRequest
* DescribeAvailabilityOptionsRequest `object`: Container for the parameters to the <code><a>DescribeAvailabilityOptions</a></code> operation. Specifies the name of the domain you want to describe. To show the active configuration and exclude any pending changes, set the Deployed option to <code>true</code>.
  * Deployed
  * DomainName **required**

### DescribeAvailabilityOptionsResponse
* DescribeAvailabilityOptionsResponse `object`: The result of a <code>DescribeAvailabilityOptions</code> request. Indicates whether or not the Multi-AZ option is enabled for the domain specified in the request. 
  * AvailabilityOptions
    * Options **required**
    * Status **required** [OptionStatus](#optionstatus)

### DescribeDomainEndpointOptionsRequest
* DescribeDomainEndpointOptionsRequest `object`: Container for the parameters to the <code><a>DescribeDomainEndpointOptions</a></code> operation. Specify the name of the domain you want to describe. To show the active configuration and exclude any pending changes, set the Deployed option to <code>true</code>.
  * Deployed
  * DomainName **required**

### DescribeDomainEndpointOptionsResponse
* DescribeDomainEndpointOptionsResponse `object`: The result of a <code>DescribeDomainEndpointOptions</code> request. Contains the status and configuration of a search domain's endpoint options. 
  * DomainEndpointOptions
    * Options **required**
      * EnforceHTTPS
      * TLSSecurityPolicy
    * Status **required**
      * CreationDate **required**
      * PendingDeletion
      * State **required**
      * UpdateDate **required**
      * UpdateVersion

### DescribeDomainsRequest
* DescribeDomainsRequest `object`: Container for the parameters to the <code><a>DescribeDomains</a></code> operation. By default shows the status of all domains. To restrict the response to particular domains, specify the names of the domains you want to describe.
  * DomainNames
    * items [DomainName](#domainname)

### DescribeDomainsResponse
* DescribeDomainsResponse `object`: The result of a <code>DescribeDomains</code> request. Contains the status of the domains specified in the request or all domains owned by the account.
  * DomainStatusList **required** [DomainStatusList](#domainstatuslist)

### DescribeExpressionsRequest
* DescribeExpressionsRequest `object`: Container for the parameters to the <code><a>DescribeDomains</a></code> operation. Specifies the name of the domain you want to describe. To restrict the response to particular expressions, specify the names of the expressions you want to describe. To show the active configuration and exclude any pending changes, set the <code>Deployed</code> option to <code>true</code>.
  * Deployed
  * DomainName **required**
  * ExpressionNames
    * items [StandardName](#standardname)

### DescribeExpressionsResponse
* DescribeExpressionsResponse `object`: The result of a <code>DescribeExpressions</code> request. Contains the expressions configured for the domain specified in the request.
  * Expressions **required**
    * items [ExpressionStatus](#expressionstatus)

### DescribeIndexFieldsRequest
* DescribeIndexFieldsRequest `object`: Container for the parameters to the <code><a>DescribeIndexFields</a></code> operation. Specifies the name of the domain you want to describe. To restrict the response to particular index fields, specify the names of the index fields you want to describe. To show the active configuration and exclude any pending changes, set the <code>Deployed</code> option to <code>true</code>.
  * Deployed
  * DomainName **required**
  * FieldNames
    * items [DynamicFieldName](#dynamicfieldname)

### DescribeIndexFieldsResponse
* DescribeIndexFieldsResponse `object`: The result of a <code>DescribeIndexFields</code> request. Contains the index fields configured for the domain specified in the request.
  * IndexFields **required**
    * items [IndexFieldStatus](#indexfieldstatus)

### DescribeScalingParametersRequest
* DescribeScalingParametersRequest `object`: Container for the parameters to the <code><a>DescribeScalingParameters</a></code> operation. Specifies the name of the domain you want to describe. 
  * DomainName **required** [DomainName](#domainname)

### DescribeScalingParametersResponse
* DescribeScalingParametersResponse `object`: The result of a <code>DescribeScalingParameters</code> request. Contains the scaling parameters configured for the domain specified in the request.
  * ScalingParameters **required** [ScalingParametersStatus](#scalingparametersstatus)

### DescribeServiceAccessPoliciesRequest
* DescribeServiceAccessPoliciesRequest `object`: Container for the parameters to the <code><a>DescribeServiceAccessPolicies</a></code> operation. Specifies the name of the domain you want to describe. To show the active configuration and exclude any pending changes, set the <code>Deployed</code> option to <code>true</code>.
  * Deployed
  * DomainName **required**

### DescribeServiceAccessPoliciesResponse
* DescribeServiceAccessPoliciesResponse `object`: The result of a <code>DescribeServiceAccessPolicies</code> request.
  * AccessPolicies **required**
    * Options **required** [PolicyDocument](#policydocument)
    * Status **required** [OptionStatus](#optionstatus)

### DescribeSuggestersRequest
* DescribeSuggestersRequest `object`: Container for the parameters to the <code><a>DescribeSuggester</a></code> operation. Specifies the name of the domain you want to describe. To restrict the response to particular suggesters, specify the names of the suggesters you want to describe. To show the active configuration and exclude any pending changes, set the <code>Deployed</code> option to <code>true</code>.
  * Deployed
  * DomainName **required**
  * SuggesterNames
    * items [StandardName](#standardname)

### DescribeSuggestersResponse
* DescribeSuggestersResponse `object`: The result of a <code>DescribeSuggesters</code> request.
  * Suggesters **required**
    * items [SuggesterStatus](#suggesterstatus)

### DisabledOperationException


### DocumentSuggesterOptions
* DocumentSuggesterOptions `object`: Options for a search suggester.
  * FuzzyMatching
  * SortExpression
  * SourceField **required**

### DomainEndpointOptions
* DomainEndpointOptions `object`: The domain's endpoint options.
  * EnforceHTTPS
  * TLSSecurityPolicy

### DomainEndpointOptionsStatus
* DomainEndpointOptionsStatus `object`: The configuration and status of the domain's endpoint options.
  * Options **required**
    * EnforceHTTPS
    * TLSSecurityPolicy
  * Status **required**
    * CreationDate **required**
    * PendingDeletion
    * State **required**
    * UpdateDate **required**
    * UpdateVersion

### DomainId
* DomainId `string`: An internally generated unique identifier for a domain.

### DomainName
* DomainName `string`: A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).

### DomainNameList
* DomainNameList `array`: A list of domain names.
  * items [DomainName](#domainname)

### DomainNameMap
* DomainNameMap `object`: A collection of domain names.

### DomainStatus
* DomainStatus `object`: The current status of the search domain.
  * ARN [ARN](#arn)
  * Created
  * Deleted
  * DocService
    * Endpoint [ServiceUrl](#serviceurl)
  * DomainId **required** [DomainId](#domainid)
  * DomainName **required** [DomainName](#domainname)
  * Limits [Limits](#limits)
  * Processing
  * RequiresIndexDocuments **required**
  * SearchInstanceCount
  * SearchInstanceType
  * SearchPartitionCount
  * SearchService
    * Endpoint [ServiceUrl](#serviceurl)

### DomainStatusList
* DomainStatusList `array`: A list that contains the status of each requested domain.
  * items [DomainStatus](#domainstatus)

### Double
* Double `number`

### DoubleArrayOptions
* DoubleArrayOptions `object`: Options for a field that contains an array of double-precision 64-bit floating point values. Present if <code>IndexFieldType</code> specifies the field is of type <code>double-array</code>. All options are enabled by default.
  * DefaultValue
  * FacetEnabled
  * ReturnEnabled
  * SearchEnabled
  * SourceFields

### DoubleOptions
* DoubleOptions `object`: Options for a double-precision 64-bit floating point field. Present if <code>IndexFieldType</code> specifies the field is of type <code>double</code>. All options are enabled by default.
  * DefaultValue
  * FacetEnabled
  * ReturnEnabled
  * SearchEnabled
  * SortEnabled
  * SourceField

### DynamicFieldName
* DynamicFieldName `string`

### DynamicFieldNameList
* DynamicFieldNameList `array`
  * items [DynamicFieldName](#dynamicfieldname)

### Expression
* Expression `object`: A named expression that can be evaluated at search time. Can be used to sort the search results, define other expressions, or return computed information in the search results. 
  * ExpressionName **required** [StandardName](#standardname)
  * ExpressionValue **required** [ExpressionValue](#expressionvalue)

### ExpressionStatus
* ExpressionStatus `object`: The value of an <code>Expression</code> and its current status.
  * Options **required**
    * ExpressionName **required** [StandardName](#standardname)
    * ExpressionValue **required** [ExpressionValue](#expressionvalue)
  * Status **required** [OptionStatus](#optionstatus)

### ExpressionStatusList
* ExpressionStatusList `array`: Contains the status of multiple expressions.
  * items [ExpressionStatus](#expressionstatus)

### ExpressionValue
* ExpressionValue `string`: The expression to evaluate for sorting while processing a search request. The <code>Expression</code> syntax is based on JavaScript expressions. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-expressions.html" target="_blank">Configuring Expressions</a> in the <i>Amazon CloudSearch Developer Guide</i>.

### FieldName
* FieldName `string`: <p>A string that represents the name of an index field. CloudSearch supports regular index fields as well as dynamic fields. A dynamic field's name defines a pattern that begins or ends with a wildcard. Any document fields that don't map to a regular index field but do match a dynamic field's pattern are configured with the dynamic field's indexing options. </p> <p>Regular field names begin with a letter and can contain the following characters: a-z (lowercase), 0-9, and _ (underscore). Dynamic field names must begin or end with a wildcard (*). The wildcard can also be the only character in a dynamic field name. Multiple wildcards, and wildcards embedded within a string are not supported. </p> <p>The name <code>score</code> is reserved and cannot be used as a field name. To reference a document's ID, you can use the name <code>_id</code>. </p>

### FieldNameCommaList
* FieldNameCommaList `string`

### FieldNameList
* FieldNameList `array`: A list of field names.
  * items [FieldName](#fieldname)

### FieldValue
* FieldValue `string`: The value of a field attribute.

### IndexDocumentsRequest
* IndexDocumentsRequest `object`: Container for the parameters to the <code><a>IndexDocuments</a></code> operation. Specifies the name of the domain you want to re-index.
  * DomainName **required** [DomainName](#domainname)

### IndexDocumentsResponse
* IndexDocumentsResponse `object`: The result of an <code>IndexDocuments</code> request. Contains the status of the indexing operation, including the fields being indexed.
  * FieldNames
    * items [FieldName](#fieldname)

### IndexField
* IndexField `object`: Configuration information for a field in the index, including its name, type, and options. The supported options depend on the <code><a>IndexFieldType</a></code>.
  * DateArrayOptions [DateArrayOptions](#datearrayoptions)
  * DateOptions [DateOptions](#dateoptions)
  * DoubleArrayOptions [DoubleArrayOptions](#doublearrayoptions)
  * DoubleOptions [DoubleOptions](#doubleoptions)
  * IndexFieldName **required**
  * IndexFieldType **required** [IndexFieldType](#indexfieldtype)
  * IntArrayOptions [IntArrayOptions](#intarrayoptions)
  * IntOptions [IntOptions](#intoptions)
  * LatLonOptions [LatLonOptions](#latlonoptions)
  * LiteralArrayOptions [LiteralArrayOptions](#literalarrayoptions)
  * LiteralOptions [LiteralOptions](#literaloptions)
  * TextArrayOptions [TextArrayOptions](#textarrayoptions)
  * TextOptions [TextOptions](#textoptions)

### IndexFieldStatus
* IndexFieldStatus `object`: The value of an <code>IndexField</code> and its current status.
  * Options **required** [IndexField](#indexfield)
  * Status **required** [OptionStatus](#optionstatus)

### IndexFieldStatusList
* IndexFieldStatusList `array`: Contains the status of multiple index fields.
  * items [IndexFieldStatus](#indexfieldstatus)

### IndexFieldType
* IndexFieldType `string` (values: int, double, literal, text, date, latlon, int-array, double-array, literal-array, text-array, date-array): The type of field. The valid options for a field depend on the field type. For more information about the supported field types, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-index-fields.html" target="_blank">Configuring Index Fields</a> in the <i>Amazon CloudSearch Developer Guide</i>.

### InstanceCount
* InstanceCount `integer`

### IntArrayOptions
* IntArrayOptions `object`: Options for a field that contains an array of 64-bit signed integers. Present if <code>IndexFieldType</code> specifies the field is of type <code>int-array</code>. All options are enabled by default.
  * DefaultValue
  * FacetEnabled
  * ReturnEnabled
  * SearchEnabled
  * SourceFields

### IntOptions
* IntOptions `object`: Options for a 64-bit signed integer field. Present if <code>IndexFieldType</code> specifies the field is of type <code>int</code>. All options are enabled by default.
  * DefaultValue
  * FacetEnabled
  * ReturnEnabled
  * SearchEnabled
  * SortEnabled
  * SourceField

### InternalException


### InvalidTypeException


### LatLonOptions
* LatLonOptions `object`: Options for a latlon field. A latlon field contains a location stored as a latitude and longitude value pair. Present if <code>IndexFieldType</code> specifies the field is of type <code>latlon</code>. All options are enabled by default.
  * DefaultValue
  * FacetEnabled
  * ReturnEnabled
  * SearchEnabled
  * SortEnabled
  * SourceField [FieldName](#fieldname)

### LimitExceededException


### Limits
* Limits `object`
  * MaximumPartitionCount **required** [MaximumPartitionCount](#maximumpartitioncount)
  * MaximumReplicationCount **required** [MaximumReplicationCount](#maximumreplicationcount)

### ListDomainNamesResponse
* ListDomainNamesResponse `object`: The result of a <code>ListDomainNames</code> request. Contains a list of the domains owned by an account.
  * DomainNames

### LiteralArrayOptions
* LiteralArrayOptions `object`: Options for a field that contains an array of literal strings. Present if <code>IndexFieldType</code> specifies the field is of type <code>literal-array</code>. All options are enabled by default.
  * DefaultValue
  * FacetEnabled
  * ReturnEnabled
  * SearchEnabled
  * SourceFields

### LiteralOptions
* LiteralOptions `object`: Options for literal field. Present if <code>IndexFieldType</code> specifies the field is of type <code>literal</code>. All options are enabled by default.
  * DefaultValue
  * FacetEnabled
  * ReturnEnabled
  * SearchEnabled
  * SortEnabled
  * SourceField [FieldName](#fieldname)

### Long
* Long `integer`

### MaximumPartitionCount
* MaximumPartitionCount `integer`

### MaximumReplicationCount
* MaximumReplicationCount `integer`

### MultiAZ
* MultiAZ `boolean`

### OptionState
* OptionState `string` (values: RequiresIndexDocuments, Processing, Active, FailedToValidate): <p>The state of processing a change to an option. One of:</p> <ul> <li>RequiresIndexDocuments: The option's latest value will not be deployed until <a>IndexDocuments</a> has been called and indexing is complete.</li> <li>Processing: The option's latest value is in the process of being activated.</li> <li>Active: The option's latest value is fully deployed. </li> <li>FailedToValidate: The option value is not compatible with the domain's data and cannot be used to index the data. You must either modify the option value or update or remove the incompatible documents.</li> </ul>

### OptionStatus
* OptionStatus `object`: The status of domain configuration option.
  * CreationDate **required**
  * PendingDeletion
  * State **required**
  * UpdateDate **required**
  * UpdateVersion

### PartitionCount
* PartitionCount `integer`: The number of partitions used to hold the domain's index.

### PartitionInstanceType
* PartitionInstanceType `string` (values: search.m1.small, search.m1.large, search.m2.xlarge, search.m2.2xlarge, search.m3.medium, search.m3.large, search.m3.xlarge, search.m3.2xlarge): The instance type (such as <code>search.m1.small</code>) on which an index partition is hosted.

### PolicyDocument
* PolicyDocument `string`: Access rules for a domain's document or search service endpoints. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-access.html" target="_blank">Configuring Access for a Search Domain</a> in the <i>Amazon CloudSearch Developer Guide</i>. The maximum size of a policy document is 100 KB.

### ResourceNotFoundException


### ScalingParameters
* ScalingParameters `object`: The desired instance type and desired number of replicas of each index partition.
  * DesiredInstanceType
  * DesiredPartitionCount
  * DesiredReplicationCount

### ScalingParametersStatus
* ScalingParametersStatus `object`: The status and configuration of a search domain's scaling parameters. 
  * Options **required** [ScalingParameters](#scalingparameters)
  * Status **required** [OptionStatus](#optionstatus)

### SearchInstanceType
* SearchInstanceType `string`: The instance type (such as <code>search.m1.small</code>) that is being used to process search requests.

### ServiceEndpoint
* ServiceEndpoint `object`: The endpoint to which service requests can be submitted.
  * Endpoint [ServiceUrl](#serviceurl)

### ServiceUrl
* ServiceUrl `string`: The endpoint to which service requests can be submitted. For example, <code>search-imdb-movies-oopcnjfn6ugofer3zx5iadxxca.eu-west-1.cloudsearch.amazonaws.com</code> or <code>doc-imdb-movies-oopcnjfn6ugofer3zx5iadxxca.eu-west-1.cloudsearch.amazonaws.com</code>.

### StandardName
* StandardName `string`: Names must begin with a letter and can contain the following characters: a-z (lowercase), 0-9, and _ (underscore).

### StandardNameList
* StandardNameList `array`
  * items [StandardName](#standardname)

### String
* String `string`

### Suggester
* Suggester `object`: Configuration information for a search suggester. Each suggester has a unique name and specifies the text field you want to use for suggestions. The following options can be configured for a suggester: <code>FuzzyMatching</code>, <code>SortExpression</code>. 
  * DocumentSuggesterOptions **required** [DocumentSuggesterOptions](#documentsuggesteroptions)
  * SuggesterName **required** [StandardName](#standardname)

### SuggesterFuzzyMatching
* SuggesterFuzzyMatching `string` (values: none, low, high)

### SuggesterStatus
* SuggesterStatus `object`: The value of a <code>Suggester</code> and its current status.
  * Options **required** [Suggester](#suggester)
  * Status **required** [OptionStatus](#optionstatus)

### SuggesterStatusList
* SuggesterStatusList `array`: Contains the status of multiple suggesters.
  * items [SuggesterStatus](#suggesterstatus)

### TLSSecurityPolicy
* TLSSecurityPolicy `string` (values: Policy-Min-TLS-1-0-2019-07, Policy-Min-TLS-1-2-2019-07): The minimum required TLS version.

### TextArrayOptions
* TextArrayOptions `object`: Options for a field that contains an array of text strings. Present if <code>IndexFieldType</code> specifies the field is of type <code>text-array</code>. A <code>text-array</code> field is always searchable. All options are enabled by default.
  * AnalysisScheme
  * DefaultValue
  * HighlightEnabled
  * ReturnEnabled
  * SourceFields

### TextOptions
* TextOptions `object`: Options for text field. Present if <code>IndexFieldType</code> specifies the field is of type <code>text</code>. A <code>text</code> field is always searchable. All options are enabled by default.
  * AnalysisScheme
  * DefaultValue
  * HighlightEnabled
  * ReturnEnabled
  * SortEnabled
  * SourceField [FieldName](#fieldname)

### UIntValue
* UIntValue `integer`

### UpdateAvailabilityOptionsRequest
* UpdateAvailabilityOptionsRequest `object`: Container for the parameters to the <code><a>UpdateAvailabilityOptions</a></code> operation. Specifies the name of the domain you want to update and the Multi-AZ availability option.
  * DomainName **required** [DomainName](#domainname)
  * MultiAZ **required**

### UpdateAvailabilityOptionsResponse
* UpdateAvailabilityOptionsResponse `object`: The result of a <code>UpdateAvailabilityOptions</code> request. Contains the status of the domain's availability options. 
  * AvailabilityOptions
    * Options **required**
    * Status **required** [OptionStatus](#optionstatus)

### UpdateDomainEndpointOptionsRequest
* UpdateDomainEndpointOptionsRequest `object`: Container for the parameters to the <code><a>UpdateDomainEndpointOptions</a></code> operation. Specifies the name of the domain you want to update and the domain endpoint options.
  * DomainEndpointOptions **required**
    * EnforceHTTPS
    * TLSSecurityPolicy
  * DomainName **required**

### UpdateDomainEndpointOptionsResponse
* UpdateDomainEndpointOptionsResponse `object`: The result of a <code>UpdateDomainEndpointOptions</code> request. Contains the configuration and status of the domain's endpoint options. 
  * DomainEndpointOptions
    * Options **required**
      * EnforceHTTPS
      * TLSSecurityPolicy
    * Status **required**
      * CreationDate **required**
      * PendingDeletion
      * State **required**
      * UpdateDate **required**
      * UpdateVersion

### UpdateScalingParametersRequest
* UpdateScalingParametersRequest `object`: Container for the parameters to the <code><a>UpdateScalingParameters</a></code> operation. Specifies the name of the domain you want to update and the scaling parameters you want to configure.
  * DomainName **required** [DomainName](#domainname)
  * ScalingParameters **required** [ScalingParameters](#scalingparameters)

### UpdateScalingParametersResponse
* UpdateScalingParametersResponse `object`: The result of a <code>UpdateScalingParameters</code> request. Contains the status of the newly-configured scaling parameters.
  * ScalingParameters **required** [ScalingParametersStatus](#scalingparametersstatus)

### UpdateServiceAccessPoliciesRequest
* UpdateServiceAccessPoliciesRequest `object`: Container for the parameters to the <code><a>UpdateServiceAccessPolicies</a></code> operation. Specifies the name of the domain you want to update and the access rules you want to configure.
  * AccessPolicies **required**
  * DomainName **required** [DomainName](#domainname)

### UpdateServiceAccessPoliciesResponse
* UpdateServiceAccessPoliciesResponse `object`: The result of an <code>UpdateServiceAccessPolicies</code> request. Contains the new access policies.
  * AccessPolicies **required**
    * Options **required** [PolicyDocument](#policydocument)
    * Status **required** [OptionStatus](#optionstatus)

### UpdateTimestamp
* UpdateTimestamp `string`

### ValidationException


### Word
* Word `string`


