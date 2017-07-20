# @datafire/amazonaws_es

Client library for Amazon Elasticsearch Service

## Installation and Usage
```bash
npm install --save datafire @datafire/amazonaws_es
```

```js
let datafire = require('datafire');
let amazonaws_es = require('@datafire/amazonaws_es').actions;

let account = {
  hmac: "",
}
let context = new datafire.Context({
  accounts: {
    amazonaws_es: account,
  }
})

amazonaws_es.ListDomainNames({}, context).then(data => {
  console.log(data);
})
```

## Description
<fullname>Amazon Elasticsearch Configuration Service</fullname> <p>Use the Amazon Elasticsearch configuration API to create, configure, and manage Elasticsearch domains.</p> <p>The endpoint for configuration service requests is region-specific: es.<i>region</i>.amazonaws.com. For example, es.us-east-1.amazonaws.com. For a current list of supported regions and endpoints, see <a href="http://docs.aws.amazon.com/general/latest/gr/rande.html#elasticsearch-service-regions" target="_blank">Regions and Endpoints</a>.</p>

## Actions
### ListDomainNames
Returns the name of all Elasticsearch domains owned by the current user's account. 


```js
amazonaws_es.ListDomainNames({
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### CreateElasticsearchDomain
Creates a new Elasticsearch domain. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomains" target="_blank">Creating Elasticsearch Domains</a> in the <i>Amazon Elasticsearch Service Developer Guide</i>.


```js
amazonaws_es.CreateElasticsearchDomain({
  "body": {
    "DomainName": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### DescribeElasticsearchDomains
Returns domain configuration information about the specified Elasticsearch domains, including the domain ID, domain endpoint, and domain ARN.


```js
amazonaws_es.DescribeElasticsearchDomains({
  "body": {
    "DomainNames": []
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - Container for the parameters to the <code><a>DescribeElasticsearchDomains</a></code> operation. By default, the API returns the status of all Elasticsearch domains.
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### DescribeElasticsearchDomain
Returns domain configuration information about the specified Elasticsearch domain, including the domain ID, domain endpoint, and domain ARN.


```js
amazonaws_es.DescribeElasticsearchDomain({
  "body": {},
  "DomainName": "",
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - Container for the parameters to the <code><a>DescribeElasticsearchDomain</a></code> operation.
* DomainName (string) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### UpdateElasticsearchDomainConfig
Modifies the cluster configuration of the specified Elasticsearch domain, setting as setting the instance type and the number of instances. 


```js
amazonaws_es.UpdateElasticsearchDomainConfig({
  "body": {},
  "DomainName": "",
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - Container for the parameters to the <code><a>UpdateElasticsearchDomain</a></code> operation. Specifies the type and number of instances in the domain cluster.
* DomainName (string) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### DescribeElasticsearchInstanceTypeLimits
 Describe Elasticsearch Limits for a given InstanceType and ElasticsearchVersion. When modifying existing Domain, specify the <code> <a>DomainName</a> </code> to know what Limits are supported for modifying. 


```js
amazonaws_es.DescribeElasticsearchInstanceTypeLimits({
  "body": {},
  "InstanceType": "",
  "ElasticsearchVersion": "",
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** -  Container for the parameters to <code> <a>DescribeElasticsearchInstanceTypeLimits</a> </code> operation. 
* InstanceType (string) **required**
* ElasticsearchVersion (string) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### ListElasticsearchInstanceTypes
List all Elasticsearch instance types that are supported for given ElasticsearchVersion


```js
amazonaws_es.ListElasticsearchInstanceTypes({
  "body": {},
  "ElasticsearchVersion": "",
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** -  Container for the parameters to the <code> <a>ListElasticsearchInstanceTypes</a> </code> operation. 
* MaxResults (string) - Pagination limit
* NextToken (string) - Pagination token
* ElasticsearchVersion (string) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### ListElasticsearchVersions
List all supported Elasticsearch versions


```js
amazonaws_es.ListElasticsearchVersions({
  "body": {},
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - <p> Container for the parameters to the <code> <a>ListElasticsearchVersions</a> </code> operation. <p> Use <code> <a>MaxResults</a> </code> to control the maximum number of results to retrieve in a single call. </p> <p> Use <code> <a>NextToken</a> </code> in response to retrieve more results. If the received response does not contain a NextToken, then there are no more results to retrieve. </p> </p>
* MaxResults (string) - Pagination limit
* NextToken (string) - Pagination token
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### AddTags
Attaches tags to an existing Elasticsearch domain. Tags are a set of case-sensitive key value pairs. An Elasticsearch domain may have up to 10 tags. See <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-managedomains.html#es-managedomains-awsresorcetagging" target="_blank"> Tagging Amazon Elasticsearch Service Domains for more information.</a>


```js
amazonaws_es.AddTags({
  "body": {
    "ARN": "",
    "TagList": []
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - Container for the parameters to the <code><a>AddTags</a></code> operation. Specify the tags that you want to attach to the Elasticsearch domain.
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### RemoveTags
Removes the specified set of tags from the specified Elasticsearch domain.


```js
amazonaws_es.RemoveTags({
  "body": {
    "ARN": "",
    "TagKeys": []
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - Container for the parameters to the <code><a>RemoveTags</a></code> operation. Specify the <code>ARN</code> for the Elasticsearch domain from which you want to remove the specified <code>TagKey</code>.
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### ListTags
Returns all tags for the given Elasticsearch domain.


```js
amazonaws_es.ListTags({
  "body": {},
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - Container for the parameters to the <code><a>ListTags</a></code> operation. Specify the <code>ARN</code> for the Elasticsearch domain to which the tags are attached that you want to view are attached.
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

