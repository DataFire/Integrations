# @datafire/amazonaws_sdb

Client library for Amazon SimpleDB

## Installation and Usage
```bash
npm install --save datafire @datafire/amazonaws_sdb
```

```js
let datafire = require('datafire');
let amazonaws_sdb = require('@datafire/amazonaws_sdb').actions;
let context = new datafire.Context();

amazonaws_sdb.BatchDeleteAttributes({}, context).then(data => {
  console.log(data);
})
```

## Description
Amazon SimpleDB is a web service providing the core database functions of data indexing and querying in the cloud. By offloading the time and effort associated with building and operating a web-scale database, SimpleDB provides developers the freedom to focus on application development. <p> A traditional, clustered relational database requires a sizable upfront capital outlay, is complex to design, and often requires extensive and repetitive database administration. Amazon SimpleDB is dramatically simpler, requiring no schema, automatically indexing your data and providing a simple API for storage and access. This approach eliminates the administrative burden of data modeling, index maintenance, and performance tuning. Developers gain access to this functionality within Amazon's proven computing environment, are able to scale instantly, and pay only for what they use. </p> <p> Visit <a href="http://aws.amazon.com/simpledb/">http://aws.amazon.com/simpledb/</a> for more information. </p>

## Actions
### BatchDeleteAttributes



```js
amazonaws_sdb.BatchDeleteAttributes({}, context)
```


### BatchPutAttributes



```js
amazonaws_sdb.BatchPutAttributes({}, context)
```


### CreateDomain



```js
amazonaws_sdb.CreateDomain({}, context)
```


### DeleteAttributes



```js
amazonaws_sdb.DeleteAttributes({}, context)
```


### DeleteDomain



```js
amazonaws_sdb.DeleteDomain({}, context)
```


### DomainMetadata



```js
amazonaws_sdb.DomainMetadata({}, context)
```


### GetAttributes



```js
amazonaws_sdb.GetAttributes({}, context)
```


### ListDomains



```js
amazonaws_sdb.ListDomains({}, context)
```

#### Parameters
* MaxNumberOfDomains (string)
* NextToken (string)

### PutAttributes



```js
amazonaws_sdb.PutAttributes({}, context)
```


### Select



```js
amazonaws_sdb.Select({}, context)
```

#### Parameters
* NextToken (string)

