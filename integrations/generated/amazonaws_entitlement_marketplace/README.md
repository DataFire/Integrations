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

.then(data => {
  console.log(data);
});
```

## Description

<fullname>AWS Marketplace Entitlement Service</fullname> <p>This reference provides descriptions of the AWS Marketplace Entitlement Service API.</p> <p>AWS Marketplace Entitlement Service is used to determine the entitlement of a customer to a given product. An entitlement represents capacity in a product owned by the customer. For example, a customer might own some number of users or seats in an SaaS application or some amount of data capacity in a multi-tenant database.</p> <p> <b>Getting Entitlement Records</b> </p> <ul> <li> <p> <i>GetEntitlements</i>- Gets the entitlements for a Marketplace product.</p> </li> </ul>

## Actions

### GetEntitlements



```js
amazonaws_entitlement_marketplace.GetEntitlements({
  "ProductCode": null
}, context)
```

#### Input
* input `object`
  * Filter
  * MaxResults
  * NextToken
  * ProductCode **required**

#### Output
* output [GetEntitlementsResult](#getentitlementsresult)



## Definitions

### Boolean
* Boolean `boolean`

### Double
* Double `number`

### Entitlement
* Entitlement `object`: An entitlement represents capacity in a product owned by the customer. For example, a customer might own some number of users or seats in an SaaS application or some amount of data capacity in a multi-tenant database.
  * CustomerIdentifier
  * Dimension
  * ExpirationDate
  * ProductCode
  * Value
    * BooleanValue
    * DoubleValue
    * IntegerValue
    * StringValue

### EntitlementList
* EntitlementList `array`
  * items [Entitlement](#entitlement)

### EntitlementValue
* EntitlementValue `object`: The EntitlementValue represents the amount of capacity that the customer is entitled to for the product.
  * BooleanValue
  * DoubleValue
  * IntegerValue
  * StringValue

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
* GetEntitlementFilters `object`

### GetEntitlementsRequest
* GetEntitlementsRequest `object`: The GetEntitlementsRequest contains parameters for the GetEntitlements operation.
  * Filter
  * MaxResults
  * NextToken
  * ProductCode **required**

### GetEntitlementsResult
* GetEntitlementsResult `object`: The GetEntitlementsRequest contains results from the GetEntitlements operation.
  * Entitlements
    * items [Entitlement](#entitlement)
  * NextToken

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


