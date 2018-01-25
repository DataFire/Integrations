# @datafire/amazonaws_entitlement_marketplace

Client library for AWS Marketplace Entitlement Service

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_entitlement_marketplace
```
```js
let amazonaws_entitlement_marketplace = require('@datafire/amazonaws_entitlement_marketplace').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

amazonaws_entitlement_marketplace.GetEntitlements({
  "ProductCode": ""
}).then(data => {
  console.log(data);
});
```

## Description

<fullname>AWS Marketplace Entitlement Service</fullname> <p>This reference provides descriptions of the AWS Marketplace Entitlement Service API.</p> <p>AWS Marketplace Entitlement Service is used to determine the entitlement of a customer to a given product. An entitlement represents capacity in a product owned by the customer. For example, a customer might own some number of users or seats in an SaaS application or some amount of data capacity in a multi-tenant database.</p> <p> <b>Getting Entitlement Records</b> </p> <ul> <li> <p> <i>GetEntitlements</i>- Gets the entitlements for a Marketplace product.</p> </li> </ul>

## Actions

### GetEntitlements



```js
amazonaws_entitlement_marketplace.GetEntitlements({
  "ProductCode": ""
}, context)
```

#### Input
* input `object`
  * Filter [GetEntitlementFilters](#getentitlementfilters)
  * MaxResults [Integer](#integer)
  * NextToken [NonEmptyString](#nonemptystring)
  * ProductCode **required** [ProductCode](#productcode)

#### Output
* output [GetEntitlementsResult](#getentitlementsresult)



## Definitions

### Boolean
* Boolean `boolean`

### Double
* Double `number`

### Entitlement
* Entitlement `object`: An entitlement represents capacity in a product owned by the customer. For example, a customer might own some number of users or seats in an SaaS application or some amount of data capacity in a multi-tenant database.
  * CustomerIdentifier [NonEmptyString](#nonemptystring)
  * Dimension [NonEmptyString](#nonemptystring)
  * ExpirationDate [Timestamp](#timestamp)
  * ProductCode [ProductCode](#productcode)
  * Value [EntitlementValue](#entitlementvalue)

### EntitlementList
* EntitlementList `array`
  * items [Entitlement](#entitlement)

### EntitlementValue
* EntitlementValue `object`: The EntitlementValue represents the amount of capacity that the customer is entitled to for the product.
  * BooleanValue [Boolean](#boolean)
  * DoubleValue [Double](#double)
  * IntegerValue [Integer](#integer)
  * StringValue [String](#string)

### ErrorMessage
* ErrorMessage `string`

### FilterValue
* FilterValue `string`

### FilterValueList
* FilterValueList `array`
  * items [FilterValue](#filtervalue)

### GetEntitlementFilterName
* GetEntitlementFilterName `string` (values: CUSTOMER_IDENTIFIER, DIMENSION)

### GetEntitlementFilters
* GetEntitlementFilters `array`
  * items `object`
    * key [GetEntitlementFilterName](#getentitlementfiltername)
    * value [FilterValueList](#filtervaluelist)

### GetEntitlementsRequest
* GetEntitlementsRequest `object`: The GetEntitlementsRequest contains parameters for the GetEntitlements operation.
  * Filter [GetEntitlementFilters](#getentitlementfilters)
  * MaxResults [Integer](#integer)
  * NextToken [NonEmptyString](#nonemptystring)
  * ProductCode **required** [ProductCode](#productcode)

### GetEntitlementsResult
* GetEntitlementsResult `object`: The GetEntitlementsRequest contains results from the GetEntitlements operation.
  * Entitlements [EntitlementList](#entitlementlist)
  * NextToken [NonEmptyString](#nonemptystring)

### Integer
* Integer `integer`

### InternalServiceErrorException
* InternalServiceErrorException `object`: An internal error has occurred. Retry your request. If the problem persists, post a message with details on the AWS forums.
  * message [ErrorMessage](#errormessage)

### InvalidParameterException
* InvalidParameterException `object`: One or more parameters in your request was invalid.
  * message [ErrorMessage](#errormessage)

### NonEmptyString
* NonEmptyString `string`

### ProductCode
* ProductCode `string`

### String
* String `string`

### ThrottlingException
* ThrottlingException `object`: The calls to the GetEntitlements API are throttled.
  * message [ErrorMessage](#errormessage)

### Timestamp
* Timestamp `string`


