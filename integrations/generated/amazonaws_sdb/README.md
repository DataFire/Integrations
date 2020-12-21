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

.then(data => {
  console.log(data);
});
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
  * DomainName **required** `string`
  * Items **required** `array`

#### Output
*Output schema unknown*

### BatchDeleteAttributes



```js
amazonaws_sdb.BatchDeleteAttributes({
  "DomainName": null,
  "Items": null
}, context)
```

#### Input
* input `object`
  * DomainName **required**
  * Items **required**
    * items
      * Attributes [DeletableAttributeList](#deletableattributelist)
      * Name **required**

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
  * DomainName **required** `string`
  * Items **required** `array`

#### Output
*Output schema unknown*

### BatchPutAttributes



```js
amazonaws_sdb.BatchPutAttributes({
  "DomainName": null,
  "Items": null
}, context)
```

#### Input
* input `object`
  * DomainName **required**
  * Items **required**
    * items
      * Attributes **required**
        * items
          * Name **required**
          * Replace
          * Value **required**
      * Name **required**

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
  * DomainName **required** `string`

#### Output
*Output schema unknown*

### CreateDomain



```js
amazonaws_sdb.CreateDomain({
  "DomainName": null
}, context)
```

#### Input
* input `object`
  * DomainName **required**

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
  * DomainName **required** `string`
  * ItemName **required** `string`
  * Attributes `array`
  * Expected `object`

#### Output
*Output schema unknown*

### DeleteAttributes



```js
amazonaws_sdb.DeleteAttributes({
  "DomainName": null,
  "ItemName": null
}, context)
```

#### Input
* input `object`
  * Attributes
    * items
      * Name **required**
      * Value
  * DomainName **required**
  * Expected
    * Exists
    * Name
    * Value
  * ItemName **required**

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
  * DomainName **required** `string`

#### Output
*Output schema unknown*

### DeleteDomain



```js
amazonaws_sdb.DeleteDomain({
  "DomainName": null
}, context)
```

#### Input
* input `object`
  * DomainName **required**

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
  * DomainName **required** `string`

#### Output
* output [DomainMetadataResult](#domainmetadataresult)

### DomainMetadata



```js
amazonaws_sdb.DomainMetadata({
  "DomainName": null
}, context)
```

#### Input
* input `object`
  * DomainName **required**

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
  * DomainName **required** `string`
  * ItemName **required** `string`
  * AttributeNames `array`
  * ConsistentRead `boolean`

#### Output
* output [GetAttributesResult](#getattributesresult)

### GetAttributes



```js
amazonaws_sdb.GetAttributes({
  "DomainName": null,
  "ItemName": null
}, context)
```

#### Input
* input `object`
  * AttributeNames
    * items
  * ConsistentRead
  * DomainName **required**
  * ItemName **required**

#### Output
* output [GetAttributesResult](#getattributesresult)

### ListDomains



```js
amazonaws_sdb.ListDomains({}, context)
```

#### Input
* input `object`
  * MaxNumberOfDomains `integer`
  * NextToken `string`

#### Output
* output [ListDomainsResult](#listdomainsresult)

### ListDomains



```js
amazonaws_sdb.ListDomains({}, context)
```

#### Input
* input `object`
  * MaxNumberOfDomains `string`
  * NextToken `string`
  * MaxNumberOfDomains
  * NextToken

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
  * DomainName **required** `string`
  * ItemName **required** `string`
  * Attributes **required** `array`
  * Expected `object`

#### Output
*Output schema unknown*

### PutAttributes



```js
amazonaws_sdb.PutAttributes({
  "DomainName": null,
  "ItemName": null,
  "Attributes": null
}, context)
```

#### Input
* input `object`
  * Attributes **required**
    * items
      * Name **required**
      * Replace
      * Value **required**
  * DomainName **required**
  * Expected
    * Exists
    * Name
    * Value
  * ItemName **required**

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
  * SelectExpression **required** `string`
  * NextToken `string`
  * ConsistentRead `boolean`

#### Output
* output [SelectResult](#selectresult)

### Select



```js
amazonaws_sdb.Select({
  "SelectExpression": null
}, context)
```

#### Input
* input `object`
  * NextToken `string`
  * ConsistentRead
  * NextToken
  * SelectExpression **required**

#### Output
* output [SelectResult](#selectresult)



## Definitions

### Attribute
* Attribute `object`
  * AlternateNameEncoding
  * AlternateValueEncoding
  * Name **required**
  * Value **required**

### AttributeDoesNotExist
* AttributeDoesNotExist `object`: The specified attribute does not exist.
  * BoxUsage [Float](#float)

### AttributeList
* AttributeList `array`
  * items
    * AlternateNameEncoding
    * AlternateValueEncoding
    * Name **required**
    * Value **required**

### AttributeNameList
* AttributeNameList `array`
  * items

### BatchDeleteAttributesRequest
* BatchDeleteAttributesRequest `object`
  * DomainName **required**
  * Items **required**
    * items
      * Attributes [DeletableAttributeList](#deletableattributelist)
      * Name **required**

### BatchPutAttributesRequest
* BatchPutAttributesRequest `object`
  * DomainName **required**
  * Items **required**
    * items
      * Attributes **required**
        * items
          * Name **required**
          * Replace
          * Value **required**
      * Name **required**

### Boolean
* Boolean `boolean`

### CreateDomainRequest
* CreateDomainRequest `object`
  * DomainName **required**

### DeletableAttribute
* DeletableAttribute `object`
  * Name **required**
  * Value

### DeletableAttributeList
* DeletableAttributeList `array`
  * items
    * Name **required**
    * Value

### DeletableItem
* DeletableItem `object`
  * Attributes [DeletableAttributeList](#deletableattributelist)
  * Name **required**

### DeletableItemList
* DeletableItemList `array`
  * items
    * Attributes [DeletableAttributeList](#deletableattributelist)
    * Name **required**

### DeleteAttributesRequest
* DeleteAttributesRequest `object`
  * Attributes
    * items
      * Name **required**
      * Value
  * DomainName **required**
  * Expected
    * Exists
    * Name
    * Value
  * ItemName **required**

### DeleteDomainRequest
* DeleteDomainRequest `object`
  * DomainName **required**

### DomainMetadataRequest
* DomainMetadataRequest `object`
  * DomainName **required**

### DomainMetadataResult
* DomainMetadataResult `object`
  * AttributeNameCount
  * AttributeNamesSizeBytes
  * AttributeValueCount
  * AttributeValuesSizeBytes
  * ItemCount
  * ItemNamesSizeBytes
  * Timestamp

### DomainNameList
* DomainNameList `array`
  * items

### DuplicateItemName
* DuplicateItemName `object`: The item name was specified more than once. 
  * BoxUsage [Float](#float)

### Float
* Float `number`

### GetAttributesRequest
* GetAttributesRequest `object`
  * AttributeNames
    * items
  * ConsistentRead
  * DomainName **required**
  * ItemName **required**

### GetAttributesResult
* GetAttributesResult `object`
  * Attributes
    * items
      * AlternateNameEncoding
      * AlternateValueEncoding
      * Name **required**
      * Value **required**

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
  * AlternateNameEncoding
  * Attributes **required**
    * items
      * AlternateNameEncoding
      * AlternateValueEncoding
      * Name **required**
      * Value **required**
  * Name **required**

### ItemList
* ItemList `array`
  * items
    * AlternateNameEncoding
    * Attributes **required**
      * items
        * AlternateNameEncoding
        * AlternateValueEncoding
        * Name **required**
        * Value **required**
    * Name **required**

### ListDomainsRequest
* ListDomainsRequest `object`
  * MaxNumberOfDomains
  * NextToken

### ListDomainsResult
* ListDomainsResult `object`
  * DomainNames
    * items
  * NextToken

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
  * Attributes **required**
    * items
      * Name **required**
      * Replace
      * Value **required**
  * DomainName **required**
  * Expected
    * Exists
    * Name
    * Value
  * ItemName **required**

### ReplaceableAttribute
* ReplaceableAttribute `object`
  * Name **required**
  * Replace
  * Value **required**

### ReplaceableAttributeList
* ReplaceableAttributeList `array`
  * items
    * Name **required**
    * Replace
    * Value **required**

### ReplaceableItem
* ReplaceableItem `object`
  * Attributes **required**
    * items
      * Name **required**
      * Replace
      * Value **required**
  * Name **required**

### ReplaceableItemList
* ReplaceableItemList `array`
  * items
    * Attributes **required**
      * items
        * Name **required**
        * Replace
        * Value **required**
    * Name **required**

### RequestTimeout
* RequestTimeout `object`: A timeout occurred when attempting to query the specified domain with specified query expression.
  * BoxUsage [Float](#float)

### SelectRequest
* SelectRequest `object`
  * ConsistentRead
  * NextToken
  * SelectExpression **required**

### SelectResult
* SelectResult `object`
  * Items
    * items
      * AlternateNameEncoding
      * Attributes **required**
        * items
          * AlternateNameEncoding
          * AlternateValueEncoding
          * Name **required**
          * Value **required**
      * Name **required**
  * NextToken

### String
* String `string`

### TooManyRequestedAttributes
* TooManyRequestedAttributes `object`: Too many attributes requested.
  * BoxUsage [Float](#float)

### UpdateCondition
* UpdateCondition `object`:  Specifies the conditions under which data should be updated. If an update condition is specified for a request, the data will only be updated if the condition is satisfied. For example, if an attribute with a specific name and value exists, or if a specific attribute doesn't exist. 
  * Exists
  * Name
  * Value


