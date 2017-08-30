# @datafire/amazonaws_sdb

Client library for Amazon SimpleDB

## Installation and Usage
```bash
npm install --save datafire @datafire/amazonaws_sdb
```

```js
let datafire = require('datafire');
let amazonaws_sdb = require('@datafire/amazonaws_sdb').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: "",
});

amazonaws_sdb.BatchDeleteAttributes({}).then(data => {
  console.log(data);
})
```

## Description
Amazon SimpleDB is a web service providing the core database functions of data indexing and querying in the cloud. By offloading the time and effort associated with building and operating a web-scale database, SimpleDB provides developers the freedom to focus on application development. <p> A traditional, clustered relational database requires a sizable upfront capital outlay, is complex to design, and often requires extensive and repetitive database administration. Amazon SimpleDB is dramatically simpler, requiring no schema, automatically indexing your data and providing a simple API for storage and access. This approach eliminates the administrative burden of data modeling, index maintenance, and performance tuning. Developers gain access to this functionality within Amazon's proven computing environment, are able to scale instantly, and pay only for what they use. </p> <p> Visit <a href="http://aws.amazon.com/simpledb/">http://aws.amazon.com/simpledb/</a> for more information. </p>

## Actions
### BatchDeleteAttributes



```js
amazonaws_sdb.BatchDeleteAttributes({
  "DomainName": "",
  "Items": []
}, context)
```

#### Parameters
* DomainName (string) **required**
* Items (array) **required**

### BatchPutAttributes



```js
amazonaws_sdb.BatchPutAttributes({
  "DomainName": "",
  "Items": []
}, context)
```

#### Parameters
* DomainName (string) **required**
* Items (array) **required**

### CreateDomain



```js
amazonaws_sdb.CreateDomain({
  "DomainName": ""
}, context)
```

#### Parameters
* DomainName (string) **required**

### DeleteAttributes



```js
amazonaws_sdb.DeleteAttributes({
  "DomainName": "",
  "ItemName": ""
}, context)
```

#### Parameters
* Attributes (array)
* DomainName (string) **required**
* Expected (object) -  Specifies the conditions under which data should be updated. If an update condition is specified for a request, the data will only be updated if the condition is satisfied. For example, if an attribute with a specific name and value exists, or if a specific attribute doesn't exist. 
* ItemName (string) **required**

### DeleteDomain



```js
amazonaws_sdb.DeleteDomain({
  "DomainName": ""
}, context)
```

#### Parameters
* DomainName (string) **required**

### DomainMetadata



```js
amazonaws_sdb.DomainMetadata({
  "DomainName": ""
}, context)
```

#### Parameters
* DomainName (string) **required**

### GetAttributes



```js
amazonaws_sdb.GetAttributes({
  "DomainName": "",
  "ItemName": ""
}, context)
```

#### Parameters
* AttributeNames (array)
* ConsistentRead (boolean)
* DomainName (string) **required**
* ItemName (string) **required**

### ListDomains



```js
amazonaws_sdb.ListDomains({}, context)
```

#### Parameters
* MaxNumberOfDomains (string)
* NextToken (string)
* MaxNumberOfDomains (integer)
* NextToken (string)

### PutAttributes



```js
amazonaws_sdb.PutAttributes({
  "DomainName": "",
  "ItemName": "",
  "Attributes": []
}, context)
```

#### Parameters
* Attributes (array) **required**
* DomainName (string) **required**
* Expected (object) -  Specifies the conditions under which data should be updated. If an update condition is specified for a request, the data will only be updated if the condition is satisfied. For example, if an attribute with a specific name and value exists, or if a specific attribute doesn't exist. 
* ItemName (string) **required**

### Select



```js
amazonaws_sdb.Select({
  "SelectExpression": ""
}, context)
```

#### Parameters
* NextToken (string)
* ConsistentRead (boolean)
* NextToken (string)
* SelectExpression (string) **required**

