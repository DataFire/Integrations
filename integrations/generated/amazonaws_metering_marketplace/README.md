# @datafire/amazonaws_metering_marketplace

Client library for AWSMarketplace Metering

## Installation and Usage
```bash
npm install --save datafire @datafire/amazonaws_metering_marketplace
```

```js
let datafire = require('datafire');
let amazonaws_metering_marketplace = require('@datafire/amazonaws_metering_marketplace').create();

amazonaws_metering_marketplace.BatchMeterUsage({}).then(data => {
  console.log(data);
})
```

## Description
<fullname>AWS Marketplace Metering Service</fullname> <p>This reference provides descriptions of the low-level AWS Marketplace Metering Service API.</p> <p>AWS Marketplace sellers can use this API to submit usage data for custom usage dimensions.</p> <p> <b>Submitting Metering Records</b> </p> <ul> <li> <p> <i>MeterUsage</i>- Submits the metering record for a Marketplace product. MeterUsage is called from an EC2 instance.</p> </li> <li> <p> <i>BatchMeterUsage</i>- Submits the metering record for a set of customers. BatchMeterUsage is called from a software-as-a-service (SaaS) application.</p> </li> </ul> <p> <b>Accepting New Customers</b> </p> <ul> <li> <p> <i>ResolveCustomer</i>- Called by a SaaS application during the registration process. When a buyer visits your website during the registration process, the buyer submits a Registration Token through the browser. The Registration Token is resolved through this API to obtain a CustomerIdentifier and Product Code.</p> </li> </ul>

## Actions
### BatchMeterUsage



```js
amazonaws_metering_marketplace.BatchMeterUsage({
  "UsageRecords": [],
  "ProductCode": ""
}, context)
```

#### Parameters
* ProductCode (string) **required**
* UsageRecords (array) **required**

### MeterUsage



```js
amazonaws_metering_marketplace.MeterUsage({
  "ProductCode": "",
  "Timestamp": "",
  "UsageDimension": "",
  "UsageQuantity": 0,
  "DryRun": true
}, context)
```

#### Parameters
* DryRun (boolean) **required**
* ProductCode (string) **required**
* Timestamp (string) **required**
* UsageDimension (string) **required**
* UsageQuantity (integer) **required**

### ResolveCustomer



```js
amazonaws_metering_marketplace.ResolveCustomer({
  "RegistrationToken": ""
}, context)
```

#### Parameters
* RegistrationToken (string) **required**

