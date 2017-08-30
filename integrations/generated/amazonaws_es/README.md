# @datafire/amazonaws_es

Client library for Amazon Elasticsearch Service

## Installation and Usage
```bash
npm install --save datafire @datafire/amazonaws_es
```

```js
let datafire = require('datafire');
let amazonaws_es = require('@datafire/amazonaws_es').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: "",
});

amazonaws_es.ListDomainNames({}).then(data => {
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
*This action has no parameters*

### CreateElasticsearchDomain



```js
amazonaws_es.CreateElasticsearchDomain({
  "DomainName": ""
}, context)
```

#### Parameters
* AccessPolicies (string) - Access policy rules for an Elasticsearch domain service endpoints. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-access-policies" target="_blank">Configuring Access Policies</a> in the <i>Amazon Elasticsearch Service Developer Guide</i>. The maximum size of a policy document is 100 KB.
* AdvancedOptions (array) - <p> Exposes select native Elasticsearch configuration values from <code>elasticsearch.yml</code>. Currently, the following advanced options are available:</p> <ul> <li>Option to allow references to indices in an HTTP request body. Must be <code>false</code> when configuring access to individual sub-resources. By default, the value is <code>true</code>. See <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-advanced-options" target="_blank">Configuration Advanced Options</a> for more information.</li> <li>Option to specify the percentage of heap space that is allocated to field data. By default, this setting is unbounded.</li> </ul> <p>For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-advanced-options">Configuring Advanced Options</a>.</p>
* DomainName (string) **required** - The name of an Elasticsearch domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).
* EBSOptions (object) - Options to enable, disable, and specify the properties of EBS storage volumes. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-ebs" target="_blank"> Configuring EBS-based Storage</a>.
* ElasticsearchClusterConfig (object) - Specifies the configuration for the domain cluster, such as the type and number of instances.
* ElasticsearchVersion (string)
* SnapshotOptions (object) - Specifies the time, in UTC format, when the service takes a daily automated snapshot of the specified Elasticsearch domain. Default value is <code>0</code> hours.

### DescribeElasticsearchDomains



```js
amazonaws_es.DescribeElasticsearchDomains({
  "DomainNames": []
}, context)
```

#### Parameters
* DomainNames (array) **required** - A list of Elasticsearch domain names.

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
* AccessPolicies (string) - Access policy rules for an Elasticsearch domain service endpoints. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-access-policies" target="_blank">Configuring Access Policies</a> in the <i>Amazon Elasticsearch Service Developer Guide</i>. The maximum size of a policy document is 100 KB.
* AdvancedOptions (array) - <p> Exposes select native Elasticsearch configuration values from <code>elasticsearch.yml</code>. Currently, the following advanced options are available:</p> <ul> <li>Option to allow references to indices in an HTTP request body. Must be <code>false</code> when configuring access to individual sub-resources. By default, the value is <code>true</code>. See <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-advanced-options" target="_blank">Configuration Advanced Options</a> for more information.</li> <li>Option to specify the percentage of heap space that is allocated to field data. By default, this setting is unbounded.</li> </ul> <p>For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-advanced-options">Configuring Advanced Options</a>.</p>
* EBSOptions (object) - Options to enable, disable, and specify the properties of EBS storage volumes. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-ebs" target="_blank"> Configuring EBS-based Storage</a>.
* ElasticsearchClusterConfig (object) - Specifies the configuration for the domain cluster, such as the type and number of instances.
* SnapshotOptions (object) - Specifies the time, in UTC format, when the service takes a daily automated snapshot of the specified Elasticsearch domain. Default value is <code>0</code> hours.

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
amazonaws_es.AddTags({
  "ARN": "",
  "TagList": []
}, context)
```

#### Parameters
* ARN (string) **required** - The Amazon Resource Name (ARN) of the Elasticsearch domain. See <a href="http://docs.aws.amazon.com/IAM/latest/UserGuide/index.html?Using_Identifiers.html" target="_blank">Identifiers for IAM Entities</a> in <i>Using AWS Identity and Access Management</i> for more information.
* TagList (array) **required** - A list of <code>Tag</code> 

### RemoveTags



```js
amazonaws_es.RemoveTags({
  "ARN": "",
  "TagKeys": []
}, context)
```

#### Parameters
* ARN (string) **required** - The Amazon Resource Name (ARN) of the Elasticsearch domain. See <a href="http://docs.aws.amazon.com/IAM/latest/UserGuide/index.html?Using_Identifiers.html" target="_blank">Identifiers for IAM Entities</a> in <i>Using AWS Identity and Access Management</i> for more information.
* TagKeys (array) **required**

### ListTags



```js
amazonaws_es.ListTags({}, context)
```

#### Parameters
*This action has no parameters*

