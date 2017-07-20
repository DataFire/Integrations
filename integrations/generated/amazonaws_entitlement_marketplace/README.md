# @datafire/amazonaws_entitlement_marketplace

Client library for AWS Marketplace Entitlement Service

## Installation and Usage
```bash
npm install --save datafire @datafire/amazonaws_entitlement_marketplace
```

```js
let datafire = require('datafire');
let amazonaws_entitlement_marketplace = require('@datafire/amazonaws_entitlement_marketplace').actions;

let account = {
  hmac: "",
}
let context = new datafire.Context({
  accounts: {
    amazonaws_entitlement_marketplace: account,
  }
})

amazonaws_entitlement_marketplace.GetEntitlements({}, context).then(data => {
  console.log(data);
})
```

## Description
<fullname>AWS Marketplace Entitlement Service</fullname> <p>This reference provides descriptions of the AWS Marketplace Entitlement Service API.</p> <p>AWS Marketplace Entitlement Service is used to determine the entitlement of a customer to a given product. An entitlement represents capacity in a product owned by the customer. For example, a customer might own some number of users or seats in an SaaS application or some amount of data capacity in a multi-tenant database.</p> <p> <b>Getting Entitlement Records</b> </p> <ul> <li> <p> <i>GetEntitlements</i>- Gets the entitlements for a Marketplace product.</p> </li> </ul>

## Actions
### GetEntitlements
GetEntitlements retrieves entitlement values for a given product. The results can be filtered based on customer identifier or product dimensions.


```js
amazonaws_entitlement_marketplace.GetEntitlements({
  "body": {
    "ProductCode": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - The GetEntitlementsRequest contains parameters for the GetEntitlements operation.
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

