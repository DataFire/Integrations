# @datafire/patrowl_local

Client library for Swagger API-REST for Patrowl Engines

## Installation and Usage
```bash
npm install --save @datafire/patrowl_local
```
```js
let patrowl_local = require('@datafire/patrowl_local').create();

.then(data => {
  console.log(data);
});
```

## Description

This is the API documentation for Patrowl Engines usage.

## Actions

### getDefaultPage
Return index page


```js
patrowl_local.getDefaultPage(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [ApiResponse](#apiresponse)

### CleanScansPage
Clean all current scans.


```js
patrowl_local.CleanScansPage(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [ApiResponse](#apiresponse)

### CleanScanPage
Clean scan identified by id.


```js
patrowl_local.CleanScanPage({
  "scanId": 0
}, context)
```

#### Input
* input `object`
  * scanId **required** `integer`: Numeric ID of the scan to clean

#### Output
* output [ApiResponse](#apiresponse)

### GetFindingPage
Get findings on finished scans.


```js
patrowl_local.GetFindingPage({
  "scanId": 0
}, context)
```

#### Input
* input `object`
  * scanId **required** `integer`: Numeric ID of the scan to get findings

#### Output
* output [Findings](#findings)

### getInfoPage
Return information on engine.


```js
patrowl_local.getInfoPage(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [ApiResponse](#apiresponse)

### getLivenessPage
Return liveness page


```js
patrowl_local.getLivenessPage(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### getReadinessPage
Return liveness page


```js
patrowl_local.getReadinessPage(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### reloadConfigurationPage
Reload the configuration file.


```js
patrowl_local.reloadConfigurationPage(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [ApiResponse](#apiresponse)

### StartScanPage
Start a new scan.


```js
patrowl_local.StartScanPage({
  "body": null
}, context)
```

#### Input
* input `object`
  * body **required** [ScanDefinition](#scandefinition)

#### Output
* output [ApiResponse](#apiresponse)

### StatusScansPage
Status all current scans.


```js
patrowl_local.StatusScansPage(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [ApiResponse](#apiresponse)

### StatusScanPage
Status of a scan identified by id.


```js
patrowl_local.StatusScanPage({
  "scanId": 0
}, context)
```

#### Input
* input `object`
  * scanId **required** `integer`: Numeric ID of the scan to get status

#### Output
* output [ApiResponse](#apiresponse)

### StopScanPage
Stop a scan identified by id.


```js
patrowl_local.StopScanPage({
  "scanId": 0
}, context)
```

#### Input
* input `object`
  * scanId **required** `integer`: Numeric ID of the scan to stop

#### Output
* output [ApiResponse](#apiresponse)

### StopScansPage
Stop all current scans.


```js
patrowl_local.StopScansPage(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [ApiResponse](#apiresponse)

### getTestPage
Return test page


```js
patrowl_local.getTestPage(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*



## Definitions

### ApiResponse
* ApiResponse `object`
  * page `string`
  * status `string`

### Findings
* Findings `array`
  * items `object`
    * confidence `string`
    * description `string`
    * issue_id `integer`
    * meta_links `array`
      * items `string`
    * meta_risk `object`
      * cvss_base_score `array`
        * items `string`
      * cvss_vector `array`
        * items `string`
      * exploit_available `array`
        * items `string`
      * exploitability_ease `array`
        * items `string`
      * patch_publication_date `array`
        * items `string`
    * meta_tags `array`
      * items `string`
    * meta_vuln_refs `object`
      * bid `array`
        * items `string`
      * cpe `array`
        * items `string`
      * cve `array`
        * items `string`
      * cwe `array`
        * items `string`
    * raw `string`
    * severity `string` (values: info, low, medium, high)
    * solution `string`
    * target_addrs `array`
      * items `string`
    * target_proto `array`
      * items `string`
    * timestamp `string`
    * title `string`
    * type `string`

### ScanDefinition
* ScanDefinition `object`
  * assets `array`
    * items `object`
      * criticity `string` (values: low, medium, high)
      * datatype `string` (values: ip, ip-range, ip-subnet, fqdn, domain, url, keyword, person, organisation, path, application)
      * id `string`
      * value `string`
  * options `object`
  * scan_id `integer`


