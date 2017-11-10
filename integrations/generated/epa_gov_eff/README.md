# @datafire/epa_gov_eff

Client library for U.S. EPA Enforcement and Compliance History Online (ECHO) - Effluent Charting and Reporting

## Installation and Usage
```bash
npm install --save datafire @datafire/epa_gov_eff
```

```js
let datafire = require('datafire');
let epa_gov_eff = require('@datafire/epa_gov_eff').create();

epa_gov_eff.rest_lookups.cwa_parameters.post({}).then(data => {
  console.log(data);
})
```

## Description
Enforcement and Compliance History Online (ECHO) is a tool developed and maintained by EPA's Office of Enforcement and Compliance Assurance for public use.
ECHO provides integrated compliance and enforcement information for about 800,000 regulated facilities nationwide.
<BR><BR>EFF Rest Services provides the data for ECHO's Effluent Charts, a set of dynamic charts and tables of permitted effluent limits, releases, and violations over time for 
Clean Water Act (CWA) wastewater discharge permits issued under the National Pollutant Discharge Elimination System (NPDES).  See Effluent Charts Help (https://echo.epa.gov/help/reports/effluent-charts-help) for additional information.
<BR><BR>
The are 3 service end points for Efffluent Charts:  get_summary_chart, get_effluent_chart, and download_effluent_chart.
<br>
<br><b>1)</b>  Use get_summary_chart to retrieve a summary matrix of effluent parameters by effluent outfall and an overall violation status for a provided NPDES Permit and date range.
<br><b>2)</b>  Use get_effluent_chart to retrieve detailed Discharge Limit, DMR and NPDES Violation information for a provided NPDES Permit, date range, effluent paramater, or outfall.
<br><b>3)</b>  Use download_effluent_chart to generate a Comma Separated Value (CSV) file of the detailed data provided with get_effluent chart, for a provided NPDES Permit, date range, effluent paramater, or outfall.
<br>
<br>
Additional ECHO Resources:   <a href="https://echo.epa.gov/tools/web-services">Web Services</a>, <a href="https://echo.epa.gov/resources/echo-data/about-the-data">About ECHO's Data</a>, <a href="https://echo.epa.gov/tools/data-downloads">Data Downloads</a>
<br>


## Actions
### eff_rest_services.download_effluent_chart.get
Downloads tabular Discharge Monitoring Report (DMR) and compliance data for one NPDES permit as a CSV.


```js
epa_gov_eff.eff_rest_services.download_effluent_chart.get({
  "p_id": ""
}, context)
```

#### Parameters
* p_id (string) **required** - Identifier for the service.
* outfall (string) - Three-character code that identifies the point of discharge (e.g., pipe or outfall) for a facility. A single NPDES ID may have multiple points of discharge.
* parameter_code (string) - Five-digit numeric code identifying the parameter. See Parameter Lookup documentation for a complete list of codes.
* start_date (string) - The start date (mm/dd/yyyy) for the date range of interest. Must be used in conjunction with end_date. If start_date and end_date are not specified, the service will return the last three years of data.
* end_date (string) - The end date (mm/dd/yyyy) for the date range of interest. Must be used in conjunction with start_date. If start_date and end_date are not specified, the service will return the last three years of data.

### eff_rest_services.download_effluent_chart.post
Downloads tabular Discharge Monitoring Report (DMR) and compliance data for one NPDES permit as a CSV.


```js
epa_gov_eff.eff_rest_services.download_effluent_chart.post({
  "p_id": ""
}, context)
```

#### Parameters
* p_id (string) **required** - Identifier for the service.
* outfall (string) - Three-character code that identifies the point of discharge (e.g., pipe or outfall) for a facility. A single NPDES ID may have multiple points of discharge.
* parameter_code (string) - Five-digit numeric code identifying the parameter. See Parameter Lookup documentation for a complete list of codes.
* start_date (string) - The start date (mm/dd/yyyy) for the date range of interest. Must be used in conjunction with end_date. If start_date and end_date are not specified, the service will return the last three years of data.
* end_date (string) - The end date (mm/dd/yyyy) for the date range of interest. Must be used in conjunction with start_date. If start_date and end_date are not specified, the service will return the last three years of data.

### eff_rest_services.get_effluent_chart.get
Discharge Monitoring Report (DMR) data supporting each effluent chart for one NPDES permit. Includes Discharge Monitoring Reports and NPDES Violations. 




```js
epa_gov_eff.eff_rest_services.get_effluent_chart.get({
  "p_id": ""
}, context)
```

#### Parameters
* p_id (string) **required** - Identifier for the service.
* outfall (string) - Three-character code that identifies the point of discharge (e.g., pipe or outfall) for a facility. A single NPDES ID may have multiple points of discharge.
* parameter_code (string) - Five-digit numeric code identifying the parameter. See Parameter Lookup documentation for a complete list of codes.
* start_date (string) - The start date (mm/dd/yyyy) for the date range of interest. Must be used in conjunction with end_date. If start_date and end_date are not specified, the service will return the last three years of data.
* end_date (string) - The end date (mm/dd/yyyy) for the date range of interest. Must be used in conjunction with start_date. If start_date and end_date are not specified, the service will return the last three years of data.
* output (string) - Output Format Flag.  Enter one of the following keywords:
* callback (string) - JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.

### eff_rest_services.get_effluent_chart.post
Discharge Monitoring Report (DMR) data supporting each effluent chart for one NPDES permit. Includes Discharge Monitoring Reports and NPDES Violations. 




```js
epa_gov_eff.eff_rest_services.get_effluent_chart.post({
  "p_id": ""
}, context)
```

#### Parameters
* p_id (string) **required** - Identifier for the service.
* outfall (string) - Three-character code that identifies the point of discharge (e.g., pipe or outfall) for a facility. A single NPDES ID may have multiple points of discharge.
* parameter_code (string) - Five-digit numeric code identifying the parameter. See Parameter Lookup documentation for a complete list of codes.
* start_date (string) - The start date (mm/dd/yyyy) for the date range of interest. Must be used in conjunction with end_date. If start_date and end_date are not specified, the service will return the last three years of data.
* end_date (string) - The end date (mm/dd/yyyy) for the date range of interest. Must be used in conjunction with start_date. If start_date and end_date are not specified, the service will return the last three years of data.
* output (string) - Output Format Flag.  Enter one of the following keywords:
* callback (string) - JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.

### eff_rest_services.get_summary_chart.get
Summary of compliance status each outfall and parameter for one NPDES permit. Provides the current compliance status and overall compliance status for the date range of interest. This service supports the Summary Matrix on the Effluent Charts.


```js
epa_gov_eff.eff_rest_services.get_summary_chart.get({
  "p_id": ""
}, context)
```

#### Parameters
* p_id (string) **required** - Identifier for the service.
* output (string) - Output Format Flag.  Enter one of the following keywords:
* callback (string) - JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.
* start_date (string) - The start date (mm/dd/yyyy) for the date range of interest. Must be used in conjunction with end_date. If start_date and end_date are not specified, the service will return the last three years of data.
* end_date (string) - The end date (mm/dd/yyyy) for the date range of interest. Must be used in conjunction with start_date. If start_date and end_date are not specified, the service will return the last three years of data.

### eff_rest_services.get_summary_chart.post
Summary of compliance status each outfall and parameter for one NPDES permit. Provides the current compliance status and overall compliance status for the date range of interest. This service supports the Summary Matrix on the Effluent Charts.


```js
epa_gov_eff.eff_rest_services.get_summary_chart.post({
  "p_id": ""
}, context)
```

#### Parameters
* p_id (string) **required** - Identifier for the service.
* output (string) - Output Format Flag.  Enter one of the following keywords:
* callback (string) - JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.
* start_date (string) - The start date (mm/dd/yyyy) for the date range of interest. Must be used in conjunction with end_date. If start_date and end_date are not specified, the service will return the last three years of data.
* end_date (string) - The end date (mm/dd/yyyy) for the date range of interest. Must be used in conjunction with start_date. If start_date and end_date are not specified, the service will return the last three years of data.

### rest_lookups.cwa_parameters.get
Look up Clean Water Act parameter codes and descriptions in the Integrated Compliance Information System - National Pollutant Discharge Elimination System (ICIS-NPDES) by code or term.


```js
epa_gov_eff.rest_lookups.cwa_parameters.get({}, context)
```

#### Parameters
* output (string) - Output Format Flag.  Enter one of the following keywords:
* callback (string) - JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.
* search_term (string) - Enter a partial or complete search phrase or word.
* search_code (string) - Enter a partial or complete code value.

### rest_lookups.cwa_parameters.post
Look up Clean Water Act parameter codes and descriptions in the Integrated Compliance Information System - National Pollutant Discharge Elimination System (ICIS-NPDES) by code or term.


```js
epa_gov_eff.rest_lookups.cwa_parameters.post({}, context)
```

#### Parameters
* output (string) - Output Format Flag.  Enter one of the following keywords:
* callback (string) - JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.
* search_term (string) - Enter a partial or complete search phrase or word.
* search_code (string) - Enter a partial or complete code value.

