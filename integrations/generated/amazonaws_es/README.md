# @datafire/amazonaws_es

Client library for Amazon Elasticsearch Service

## Installation and Usage
```bash
npm install --save datafire @datafire/amazonaws_es
```

```js
let datafire = require('datafire');
let amazonaws_es = require('@datafire/amazonaws_es').actions;
let context = new datafire.Context();

amazonaws_es.ListDomainNames({}, context).then(data => {
  console.log(data);
})
```

## Description
<fullname>Amazon Elasticsearch Configuration Service</fullname> <p>Use the Amazon Elasticsearch configuration API to create, configure, and manage Elasticsearch domains.</p> <p>The endpoint for configuration service requests is region-specific: es.<i>region</i>.amazonaws.com. For example, es.us-east-1.amazonaws.com. For a current list of supported regions and endpoints, see <a href="http://docs.aws.amazon.com/general/latest/gr/rande.html#elasticsearch-service-regions" target="_blank">Regions and Endpoints</a>.</p>

## Actions
### ListDomainNames



```js
amazonaws_es.ListDomainNames({}, context)
```

#### Parameters

### CreateElasticsearchDomain



```js
amazonaws_es.CreateElasticsearchDomain({}, context)
```

#### Parameters

### DescribeElasticsearchDomains



```js
amazonaws_es.DescribeElasticsearchDomains({}, context)
```

#### Parameters

### DescribeElasticsearchDomain



```js
amazonaws_es.DescribeElasticsearchDomain({
  "DomainName": ""
}, context)
```

#### Parameters
* DomainName (string) **required**

### UpdateElasticsearchDomainConfig



```js
amazonaws_es.UpdateElasticsearchDomainConfig({
  "DomainName": ""
}, context)
```

#### Parameters
* DomainName (string) **required**

### DescribeElasticsearchInstanceTypeLimits



```js
amazonaws_es.DescribeElasticsearchInstanceTypeLimits({
  "InstanceType": "",
  "ElasticsearchVersion": ""
}, context)
```

#### Parameters
* InstanceType (string) **required**
* ElasticsearchVersion (string) **required**

### ListElasticsearchInstanceTypes



```js
amazonaws_es.ListElasticsearchInstanceTypes({
  "ElasticsearchVersion": ""
}, context)
```

#### Parameters
* MaxResults (string)
* NextToken (string)
* ElasticsearchVersion (string) **required**

### ListElasticsearchVersions



```js
amazonaws_es.ListElasticsearchVersions({}, context)
```

#### Parameters
* MaxResults (string)
* NextToken (string)

### AddTags



```js
amazonaws_es.AddTags({}, context)
```

#### Parameters

### RemoveTags



```js
amazonaws_es.RemoveTags({}, context)
```

#### Parameters

### ListTags



```js
amazonaws_es.ListTags({}, context)
```

#### Parameters

