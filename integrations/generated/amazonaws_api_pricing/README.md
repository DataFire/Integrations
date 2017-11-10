# @datafire/amazonaws_api_pricing

Client library for AWS Price List Service

## Installation and Usage
```bash
npm install --save datafire @datafire/amazonaws_api_pricing
```

```js
let datafire = require('datafire');
let amazonaws_api_pricing = require('@datafire/amazonaws_api_pricing').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: "",
});

amazonaws_api_pricing.DescribeServices({}).then(data => {
  console.log(data);
})
```

## Description
<p>AWS Price List Service API (AWS Price List Service) is a centralized and convenient way to programmatically query Amazon Web Services for services, products, and pricing information. The AWS Price List Service uses standardized product attributes such as <code>Location</code>, <code>Storage Class</code>, and <code>Operating System</code>, and provides prices at the SKU level. You can use the AWS Price List Service to build cost control and scenario planning tools, reconcile billing data, forecast future spend for budgeting purposes, and provide cost benefit analysis that compare your internal workloads with AWS.</p> <p>Use <code>GetServices</code> without a service code to retrieve the service codes for all AWS services, then <code>GetServices</code> with a service code to retreive the attribute names for that service. After you have the service code and attribute names, you can use <code>GetAttributeValues</code> to see what values are available for an attribute. With the service code and an attribute name and value, you can use <code>GetProducts</code> to find specific products that you're interested in, such as an <code>AmazonEC2</code> instance, with a <code>Provisioned IOPS</code> <code>volumeType</code>.</p> <p>Service Endpoint</p> <p>AWS Price List Service API provides the following two endpoints:</p> <ul> <li> <p>https://api.pricing.us-east-1.amazonaws.com</p> </li> <li> <p>https://api.pricing.ap-south-1.amazonaws.com</p> </li> </ul>

## Actions
### DescribeServices



```js
amazonaws_api_pricing.DescribeServices({}, context)
```

#### Parameters
* MaxResults (string)
* NextToken (string)
* FormatVersion (string)
* MaxResults (integer)
* NextToken (string)
* ServiceCode (string)

### GetAttributeValues



```js
amazonaws_api_pricing.GetAttributeValues({
  "ServiceCode": "",
  "AttributeName": ""
}, context)
```

#### Parameters
* MaxResults (string)
* NextToken (string)
* AttributeName (string) **required**
* MaxResults (integer)
* NextToken (string)
* ServiceCode (string) **required**

### GetProducts



```js
amazonaws_api_pricing.GetProducts({}, context)
```

#### Parameters
* MaxResults (string)
* NextToken (string)
* Filters (array)
* FormatVersion (string)
* MaxResults (integer)
* NextToken (string)
* ServiceCode (string)

