# @datafire/amazonaws_migrationhub_config

Client library for AWS Migration Hub Config

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_migrationhub_config
```
```js
let amazonaws_migrationhub_config = require('@datafire/amazonaws_migrationhub_config').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

.then(data => {
  console.log(data);
});
```

## Description

<p>The AWS Migration Hub home region APIs are available specifically for working with your Migration Hub home region. You can use these APIs to determine a home region, as well as to create and work with controls that describe the home region.</p> <ul> <li> <p>You must make API calls for write actions (create, notify, associate, disassociate, import, or put) while in your home region, or a <code>HomeRegionNotSetException</code> error is returned.</p> </li> <li> <p>API calls for read actions (list, describe, stop, and delete) are permitted outside of your home region.</p> </li> <li> <p>If you call a write API outside the home region, an <code>InvalidInputException</code> is returned.</p> </li> <li> <p>You can call <code>GetHomeRegion</code> action to obtain the account's Migration Hub home region.</p> </li> </ul> <p>For specific API usage, see the sections that follow in this AWS Migration Hub Home Region API reference. </p>

## Actions

### CreateHomeRegionControl



```js
amazonaws_migrationhub_config.CreateHomeRegionControl({
  "HomeRegion": null,
  "Target": null
}, context)
```

#### Input
* input `object`
  * DryRun
  * HomeRegion **required**
  * Target **required**
    * Id
    * Type **required**

#### Output
* output [CreateHomeRegionControlResult](#createhomeregioncontrolresult)

### DescribeHomeRegionControls



```js
amazonaws_migrationhub_config.DescribeHomeRegionControls({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * ControlId
  * HomeRegion
  * MaxResults
  * NextToken
  * Target
    * Id
    * Type **required**

#### Output
* output [DescribeHomeRegionControlsResult](#describehomeregioncontrolsresult)

### GetHomeRegion



```js
amazonaws_migrationhub_config.GetHomeRegion({}, context)
```

#### Input
* input `object`

#### Output
* output [GetHomeRegionResult](#gethomeregionresult)



## Definitions

### AccessDeniedException


### ControlId
* ControlId `string`

### CreateHomeRegionControlRequest
* CreateHomeRegionControlRequest `object`
  * DryRun
  * HomeRegion **required**
  * Target **required**
    * Id
    * Type **required**

### CreateHomeRegionControlResult
* CreateHomeRegionControlResult `object`
  * HomeRegionControl
    * ControlId
    * HomeRegion
    * RequestedTime
    * Target
      * Id
      * Type **required**

### DescribeHomeRegionControlsMaxResults
* DescribeHomeRegionControlsMaxResults `integer`

### DescribeHomeRegionControlsRequest
* DescribeHomeRegionControlsRequest `object`
  * ControlId
  * HomeRegion
  * MaxResults
  * NextToken
  * Target
    * Id
    * Type **required**

### DescribeHomeRegionControlsResult
* DescribeHomeRegionControlsResult `object`
  * HomeRegionControls
    * items [HomeRegionControl](#homeregioncontrol)
  * NextToken

### DryRun
* DryRun `boolean`

### DryRunOperation


### GetHomeRegionRequest
* GetHomeRegionRequest `object`

### GetHomeRegionResult
* GetHomeRegionResult `object`
  * HomeRegion

### HomeRegion
* HomeRegion `string`

### HomeRegionControl
* HomeRegionControl `object`: A home region control is an object that specifies the home region for an account, with some additional information. It contains a target (always of type <code>ACCOUNT</code>), an ID, and a time at which the home region was set.
  * ControlId
  * HomeRegion
  * RequestedTime
  * Target
    * Id
    * Type **required**

### HomeRegionControls
* HomeRegionControls `array`
  * items [HomeRegionControl](#homeregioncontrol)

### InternalServerError


### InvalidInputException


### RequestedTime
* RequestedTime `string`

### ServiceUnavailableException


### Target
* Target `object`: The target parameter specifies the identifier to which the home region is applied, which is always an <code>ACCOUNT</code>. It applies the home region to the current <code>ACCOUNT</code>.
  * Id
  * Type **required**

### TargetId
* TargetId `string`

### TargetType
* TargetType `string` (values: ACCOUNT)

### ThrottlingException


### Token
* Token `string`


