# @datafire/hsbc_branches

Client library for Branch Locator API

## Installation and Usage
```bash
npm install --save @datafire/hsbc_branches
```
```js
let hsbc_branches = require('@datafire/hsbc_branches').create();

.then(data => {
  console.log(data);
});
```

## Description



## Actions

### open_banking.v2.2.branches.get
This API will return the branch details for all branches and is prepared to the Open Banking standards as defined by the Open Banking Implementation Entity (OBIE) in data dictionary version 2.2. It is regulated by the UK Competition and Markets Authority (CMA). Data is only available for the United Kingdom.


```js
hsbc_branches.open_banking.v2.2.branches.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [BranchDefinitionMeta](#branchdefinitionmeta)

### x_open_banking.v2.2.branches.country.country.get
This extended API will return the branch details for all branches in the specified country. It is based-on the Open Banking standards as defined by the Open Banking Implementation Entity (OBIE) in data dictionary version 2.2. The extended functionality may not fully adhere to the non-functional requirements of the regulator. Data is only available for the United Kingdom.


```js
hsbc_branches.x_open_banking.v2.2.branches.country.country.get({
  "country": ""
}, context)
```

#### Input
* input `object`
  * country **required** `string`: The ISO country code e.g. &quot;GB&quot;

#### Output
* output [BranchDefinitionMeta](#branchdefinitionmeta)

### x_open_banking.v2.2.branches.country.country.town.town.get
This extended API will return the branch details for all branches in the specified town. It is based-on the Open Banking standards as defined by the Open Banking Implementation Entity (OBIE) in data dictionary version 2.2. The extended functionality may not fully adhere to the non-functional requirements of the regulator. Data is only available for the United Kingdom.


```js
hsbc_branches.x_open_banking.v2.2.branches.country.country.town.town.get({
  "country": "",
  "town": ""
}, context)
```

#### Input
* input `object`
  * country **required** `string`: The ISO country code e.g. &quot;GB&quot;
  * town **required** `string`: Town name, not case sensitive

#### Output
* output [BranchDefinitionMeta](#branchdefinitionmeta)

### x_open_banking.v2.2.branches.geo_location.lat.latitude.long.longitude.get
This API will return the branch details for all branches within a specified radius (1 to 10 miles) of the specified latitude and longitude. It is based-on the Open Banking standards as defined by the Open Banking Implementation Entity (OBIE) in data dictionary version 2.2. The extended functionality may not fully adhere to the non-functional requirements of the regulator. Data is only available for the United Kingdom.


```js
hsbc_branches.x_open_banking.v2.2.branches.geo_location.lat.latitude.long.longitude.get({
  "latitude": "",
  "longitude": "",
  "radius": 0
}, context)
```

#### Input
* input `object`
  * latitude **required** `string`: Positive or negative decimal value in degrees. eg &quot;51.50551621597067&quot;
  * longitude **required** `string`: Positive or negative decimal value in degrees. eg &quot;-0.0180120225995&quot;
  * radius **required** `number`: Number of miles (1 to 10) as an integer. Default = 1

#### Output
* output [BranchDefinitionMeta](#branchdefinitionmeta)

### x_open_banking.v2.2.branches.postcode.postcode.get
This extended API will return the branch details for all branches within a 5 mile radius of the specified postcode. It is based-on the Open Banking standards as defined by the Open Banking Implementation Entity (OBIE) in data dictionary version 2.2. The extended functionality may not fully adhere to the non-functional requirements of the regulator. Data is only available for the United Kingdom.


```js
hsbc_branches.x_open_banking.v2.2.branches.postcode.postcode.get({
  "postcode": ""
}, context)
```

#### Input
* input `object`
  * postcode **required** `string`: Letters and numerals only. No spaces or special characters. eg. &quot;SW1A1AA&quot;

#### Output
* output [BranchDefinitionMeta](#branchdefinitionmeta)

### x_open_banking.v2.2.branches.sortcode.sortcode.get
This extended API will return the branch details for a branch specified by its sort code. It is based-on the Open Banking standards as defined by the Open Banking Implementation Entity (OBIE) in data dictionary version 2.2. The extended functionality may not fully adhere to the non-functional requirements of the regulator. Data is only available for the United Kingdom.


```js
hsbc_branches.x_open_banking.v2.2.branches.sortcode.sortcode.get({
  "sortcode": ""
}, context)
```

#### Input
* input `object`
  * sortcode **required** `string`: 6 digit number with no spaces or special characters. eg. &quot;400003&quot;

#### Output
* output [BranchDefinitionMeta](#branchdefinitionmeta)



## Definitions

### BranchDefinition
* BranchDefinition `object`: Environment of the branch
  * Brand **required** `array`: Brand owned by an organisation
    * items `object`: Brand owned by an organisation
      * Branch **required** `array`: Information that locates and identifies a specific branch of a financial institution.
        * items `object`: Information that locates and identifies a specific branch of a financial institution.
          * Accessibility `array`: Accessibility is the ability and ease a customer can access a service, good, associate, or facility. Features which make the Bank accessible to disabled people
          * Availability `object`: Days and times defining when the branch is available for use by a customer
          * ContactInfo `array`: Communication device number or electronic address used for communication.
          * CustomerSegment **required** `array`: The marketing segment which the branch is able to address in terms of customer type. Market segmentation is a marketing term referring to the aggregating of prospective buyers into groups, or segments, that have common needs and respond similarly to a marketing action. Market segmentation enables companies to target different categories of consumers who perceive the full value of certain products and services differently from one another
          * Identification **required** `string`: Unique and unambiguous identification of a branch of a financial institution.
          * Name `string`: Name by which a branch is known and which is usually used to identify that branch.
          * Note `string`: Summary description of services, facility and availability.
          * OtherAccessibility `array`: Enter any new code , name and description for any other Accessibility
          * OtherCustomerSegment `array`: Enter a new code , name and description for any other Customer Segment
          * OtherServiceAndFacility `array`: Enter any new code , name and description for any Other Facility
          * Photo `string`: Image related to the branch
          * PostalAddress **required** `object`: Information that locates and identifies a specific address, as defined by postal services.
          * SequenceNumber **required** `string`: Sequence Number that is used in conjunction with Identification to uniquely identify a branch. Physical branches should have 0 assigned, mobile and sub branches should have 1,2,3....etc. assigned.
          * ServiceAndFacility `array`: Service/Facilities offered at a branch.
          * SortCode `array`: United Kingdom (UK) Sort Code - identifies British financial institutions on the British national clearing systems. The sort code, which is a six-digit number, is usually formatted as three pairs of numbers, for example 12-34-56. It identifies both the bank and the branch(s) where the account is held.
          * Type **required** `string` (values: Mobile, Physical): Codeset to indicate if a branch is physically in 1 location or is mobile
      * BrandName **required** `string`: Brand Name that an organisation uses to market its products or services to a consumer

### BranchDefinitionMeta
* BranchDefinitionMeta `object`
  * data **required** `array`
    * items [BranchDefinition](#branchdefinition)
  * meta **required** [MetaDefinition](#metadefinition)

### ErrorDefinition400
* 400 Error object `object`
  * description **required** `string` (values: You have sent a request which could not be understood.)
  * status **required** `string` (values: 400)
  * title **required** `string` (values: Bad request)

### ErrorDefinition408
* 408 Error object `object`
  * description **required** `string` (values: Your client has failed to submit a request, and a timeout has occurred.)
  * status **required** `string` (values: 408)
  * title **required** `string` (values: Client timeout)

### ErrorDefinition429
* 429 Error object `object`
  * description **required** `string` (values: You have requested this resource too often. Slow down.)
  * status **required** `string` (values: 429)
  * title **required** `string` (values: Too many requests)

### ErrorDefinition500
* 500 Error object `object`
  * description **required** `string` (values: An error occurred on the server. No further information is available.)
  * status **required** `string` (values: 500)
  * title **required** `string` (values: Internal server error)

### ErrorDefinition503
* 503 Error object `object`
  * description **required** `string` (values: The service is temporarily unavailable.)
  * status **required** `string` (values: 503)
  * title **required** `string` (values: Service temporarily unavailable)

### MetaDefinition
* Meta data `object`
  * Agreement **required** `string` (values: Use of the APIs and any related data will be subject to the terms of the Open Licence and subject to terms and conditions)
  * LastUpdated **required** `string`
  * License **required** `string` (values: https://www.openbanking.org.uk/open-licence): Open Banking License
  * TermsOfUse **required** `string` (values: https://www.openbanking.org.uk/terms): Open Banking Terms of Use
  * TotalResults **required** `integer`


