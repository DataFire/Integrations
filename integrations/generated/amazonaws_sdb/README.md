# @datafire/amazonaws_sdb

Client library for Amazon SimpleDB

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_sdb
```
```js
let amazonaws_sdb = require('@datafire/amazonaws_sdb').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
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

#### Input
* input `object`
  * DomainName **required** [String](#string)
  * Items **required** [DeletableItemList](#deletableitemlist)

#### Output
*Output schema unknown*

### BatchPutAttributes



```js
amazonaws_sdb.BatchPutAttributes({
  "DomainName": "",
  "Items": []
}, context)
```

#### Input
* input `object`
  * DomainName **required** [String](#string)
  * Items **required** [ReplaceableItemList](#replaceableitemlist)

#### Output
*Output schema unknown*

### CreateDomain



```js
amazonaws_sdb.CreateDomain({
  "DomainName": ""
}, context)
```

#### Input
* input `object`
  * DomainName **required** [String](#string)

#### Output
*Output schema unknown*

### DeleteAttributes



```js
amazonaws_sdb.DeleteAttributes({
  "DomainName": "",
  "ItemName": ""
}, context)
```

#### Input
* input `object`
  * Attributes [DeletableAttributeList](#deletableattributelist)
  * DomainName **required** [String](#string)
  * Expected [UpdateCondition](#updatecondition)
  * ItemName **required** [String](#string)

#### Output
*Output schema unknown*

### DeleteDomain



```js
amazonaws_sdb.DeleteDomain({
  "DomainName": ""
}, context)
```

#### Input
* input `object`
  * DomainName **required** [String](#string)

#### Output
*Output schema unknown*

### DomainMetadata



```js
amazonaws_sdb.DomainMetadata({
  "DomainName": ""
}, context)
```

#### Input
* input `object`
  * DomainName **required** [String](#string)

#### Output
* output [DomainMetadataResult](#domainmetadataresult)

### GetAttributes



```js
amazonaws_sdb.GetAttributes({
  "DomainName": "",
  "ItemName": ""
}, context)
```

#### Input
* input `object`
  * AttributeNames [AttributeNameList](#attributenamelist)
  * ConsistentRead [Boolean](#boolean)
  * DomainName **required** [String](#string)
  * ItemName **required** [String](#string)

#### Output
* output [GetAttributesResult](#getattributesresult)

### ListDomains



```js
amazonaws_sdb.ListDomains({}, context)
```

#### Input
* input `object`
  * MaxNumberOfDomains `string`
  * NextToken `string`
  * MaxNumberOfDomains [Integer](#integer)
  * NextToken [String](#string)

#### Output
* output [ListDomainsResult](#listdomainsresult)

### PutAttributes



```js
amazonaws_sdb.PutAttributes({
  "DomainName": "",
  "ItemName": "",
  "Attributes": []
}, context)
```

#### Input
* input `object`
  * Attributes **required** [ReplaceableAttributeList](#replaceableattributelist)
  * DomainName **required** [String](#string)
  * Expected [UpdateCondition](#updatecondition)
  * ItemName **required** [String](#string)

#### Output
*Output schema unknown*

### Select



```js
amazonaws_sdb.Select({
  "SelectExpression": ""
}, context)
```

#### Input
* input `object`
  * NextToken `string`
  * ConsistentRead [Boolean](#boolean)
  * NextToken [String](#string)
  * SelectExpression **required** [String](#string)

#### Output
* output [SelectResult](#selectresult)



## Definitions

### Attribute
* Attribute `object`
  * AlternateNameEncoding [String](#string)
  * AlternateValueEncoding [String](#string)
  * Name **required** [String](#string)
  * Value **required** [String](#string)

### AttributeDoesNotExist
* AttributeDoesNotExist `object`: The specified attribute does not exist.
  * BoxUsage [Float](#float)

### AttributeList
* AttributeList `array`
  * items [Attribute](#attribute)

### AttributeNameList
* AttributeNameList `array`
  * items [String](#string)

### BatchDeleteAttributesRequest
* BatchDeleteAttributesRequest `object`
  * DomainName **required** [String](#string)
  * Items **required** [DeletableItemList](#deletableitemlist)

### BatchPutAttributesRequest
* BatchPutAttributesRequest `object`
  * DomainName **required** [String](#string)
  * Items **required** [ReplaceableItemList](#replaceableitemlist)

### Boolean
* Boolean `boolean`

### CreateDomainRequest
* CreateDomainRequest `object`
  * DomainName **required** [String](#string)

### DeletableAttribute
* DeletableAttribute `object`
  * Name **required** [String](#string)
  * Value [String](#string)

### DeletableAttributeList
* DeletableAttributeList `array`
  * items [DeletableAttribute](#deletableattribute)

### DeletableItem
* DeletableItem `object`
  * Attributes [DeletableAttributeList](#deletableattributelist)
  * Name **required** [String](#string)

### DeletableItemList
* DeletableItemList `array`
  * items [DeletableItem](#deletableitem)

### DeleteAttributesRequest
* DeleteAttributesRequest `object`
  * Attributes [DeletableAttributeList](#deletableattributelist)
  * DomainName **required** [String](#string)
  * Expected [UpdateCondition](#updatecondition)
  * ItemName **required** [String](#string)

### DeleteDomainRequest
* DeleteDomainRequest `object`
  * DomainName **required** [String](#string)

### DomainMetadataRequest
* DomainMetadataRequest `object`
  * DomainName **required** [String](#string)

### DomainMetadataResult
* DomainMetadataResult `object`
  * AttributeNameCount [Integer](#integer)
  * AttributeNamesSizeBytes [Long](#long)
  * AttributeValueCount [Integer](#integer)
  * AttributeValuesSizeBytes [Long](#long)
  * ItemCount [Integer](#integer)
  * ItemNamesSizeBytes [Long](#long)
  * Timestamp [Integer](#integer)

### DomainNameList
* DomainNameList `array`
  * items [String](#string)

### DuplicateItemName
* DuplicateItemName `object`: The item name was specified more than once. 
  * BoxUsage [Float](#float)

### Float
* Float `number`

### GetAttributesRequest
* GetAttributesRequest `object`
  * AttributeNames [AttributeNameList](#attributenamelist)
  * ConsistentRead [Boolean](#boolean)
  * DomainName **required** [String](#string)
  * ItemName **required** [String](#string)

### GetAttributesResult
* GetAttributesResult `object`
  * Attributes [AttributeList](#attributelist)

### Integer
* Integer `integer`

### InvalidNextToken
* InvalidNextToken `object`: The specified NextToken is not valid. 
  * BoxUsage [Float](#float)

### InvalidNumberPredicates
* InvalidNumberPredicates `object`: Too many predicates exist in the query expression.
  * BoxUsage [Float](#float)

### InvalidNumberValueTests
* InvalidNumberValueTests `object`: Too many predicates exist in the query expression.
  * BoxUsage [Float](#float)

### InvalidParameterValue
* InvalidParameterValue `object`: The value for a parameter is invalid.
  * BoxUsage [Float](#float)

### InvalidQueryExpression
* InvalidQueryExpression `object`: The specified query expression syntax is not valid.
  * BoxUsage [Float](#float)

### Item
* Item `object`
  * AlternateNameEncoding [String](#string)
  * Attributes **required** [AttributeList](#attributelist)
  * Name **required** [String](#string)

### ItemList
* ItemList `array`
  * items [Item](#item)

### ListDomainsRequest
* ListDomainsRequest `object`
  * MaxNumberOfDomains [Integer](#integer)
  * NextToken [String](#string)

### ListDomainsResult
* ListDomainsResult `object`
  * DomainNames [DomainNameList](#domainnamelist)
  * NextToken [String](#string)

### Long
* Long `integer`

### MissingParameter
* MissingParameter `object`: The request must contain the specified missing parameter.
  * BoxUsage [Float](#float)

### NoSuchDomain
* NoSuchDomain `object`: The specified domain does not exist.
  * BoxUsage [Float](#float)

### NumberDomainAttributesExceeded
* NumberDomainAttributesExceeded `object`: Too many attributes in this domain.
  * BoxUsage [Float](#float)

### NumberDomainBytesExceeded
* NumberDomainBytesExceeded `object`: Too many bytes in this domain.
  * BoxUsage [Float](#float)

### NumberDomainsExceeded
* NumberDomainsExceeded `object`: Too many domains exist per this account.
  * BoxUsage [Float](#float)

### NumberItemAttributesExceeded
* NumberItemAttributesExceeded `object`: Too many attributes in this item.
  * BoxUsage [Float](#float)

### NumberSubmittedAttributesExceeded
* NumberSubmittedAttributesExceeded `object`: Too many attributes exist in a single call.
  * BoxUsage [Float](#float)

### NumberSubmittedItemsExceeded
* NumberSubmittedItemsExceeded `object`: Too many items exist in a single call.
  * BoxUsage [Float](#float)

### PutAttributesRequest
* PutAttributesRequest `object`
  * Attributes **required** [ReplaceableAttributeList](#replaceableattributelist)
  * DomainName **required** [String](#string)
  * Expected [UpdateCondition](#updatecondition)
  * ItemName **required** [String](#string)

### ReplaceableAttribute
* ReplaceableAttribute `object`
  * Name **required** [String](#string)
  * Replace [Boolean](#boolean)
  * Value **required** [String](#string)

### ReplaceableAttributeList
* ReplaceableAttributeList `array`
  * items [ReplaceableAttribute](#replaceableattribute)

### ReplaceableItem
* ReplaceableItem `object`
  * Attributes **required** [ReplaceableAttributeList](#replaceableattributelist)
  * Name **required** [String](#string)

### ReplaceableItemList
* ReplaceableItemList `array`
  * items [ReplaceableItem](#replaceableitem)

### RequestTimeout
* RequestTimeout `object`: A timeout occurred when attempting to query the specified domain with specified query expression.
  * BoxUsage [Float](#float)

### SelectRequest
* SelectRequest `object`
  * ConsistentRead [Boolean](#boolean)
  * NextToken [String](#string)
  * SelectExpression **required** [String](#string)

### SelectResult
* SelectResult `object`
  * Items [ItemList](#itemlist)
  * NextToken [String](#string)

### String
* String `string`

### TooManyRequestedAttributes
* TooManyRequestedAttributes `object`: Too many attributes requested.
  * BoxUsage [Float](#float)

### UpdateCondition
* UpdateCondition `object`:  Specifies the conditions under which data should be updated. If an update condition is specified for a request, the data will only be updated if the condition is satisfied. For example, if an attribute with a specific name and value exists, or if a specific attribute doesn't exist. 
  * Exists [Boolean](#boolean)
  * Name [String](#string)
  * Value [String](#string)


