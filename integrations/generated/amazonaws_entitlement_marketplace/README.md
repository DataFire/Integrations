# @datafire/amazonaws_entitlement_marketplace

Client library for AWS Marketplace Entitlement Service

## Installation and Usage
```bash
npm install --save datafire @datafire/amazonaws_entitlement_marketplace
```

```js
let datafire = require('datafire');
let amazonaws_entitlement_marketplace = require('@datafire/amazonaws_entitlement_marketplace').create();

amazonaws_entitlement_marketplace.GetEntitlements({}).then(data => {
  console.log(data);
})
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

#### Parameters
* Filter (array)
* MaxResults (integer)
* NextToken (string)
* ProductCode (string) **required**

