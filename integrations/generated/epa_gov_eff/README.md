# @datafire/epa_gov_eff

Client library for U.S. EPA Enforcement and Compliance History Online (ECHO) - Effluent Charting and Reporting

## Installation and Usage
```bash
npm install --save @datafire/epa_gov_eff
```
```js
let epa_gov_eff = require('@datafire/epa_gov_eff').create();

.then(data => {
  console.log(data);
});
```

## Description

Enforcement and Compliance History Online (ECHO) is a tool developed and maintained by EPA's Office of Enforcement and Compliance Assurance for public use.
  ECHO provides integrated compliance and enforcement information for over 1 million regulated facilities nationwide.
   EFF Rest Services provides the data for ECHO's Effluent Charts, a set of dynamic charts and tables of permitted effluent limits, releases, and violations over time for Clean Water Act (CWA) wastewater discharge permits issued under the National Pollutant Discharge Elimination System (NPDES).  

See Effluent Charts Help (https://echo.epa.gov/help/reports/effluent-charts-help) for additional information.
\
The are 3 service end points for Effluent Charts:  get_summary_chart, get_effluent_chart, and download_effluent_chart.
\
 <b>1)</b>  Use get_summary_chart to retrieve a summary matrix of effluent parameters by effluent outfall and an overall violation status for a provided NPDES Permit and date range.
 <b>2)</b>  Use get_effluent_chart to retrieve detailed Discharge Limit, DMR and NPDES Violation information for a provided NPDES Permit, date range, effluent parameter, or outfall.
 <b>3)</b>  Use download_effluent_chart to generate a Comma Separated Value (CSV) file of the detailed data provided with get_effluent chart, for a provided NPDES Permit, date range, effluent parameter, or outfall.
\
Additional ECHO Resources:   <a href="https://echo.epa.gov/tools/web-services">Web Services</a>, <a href="https://echo.epa.gov/resources/echo-data/about-the-data">About ECHO's Data</a>, <a href="https://echo.epa.gov/tools/data-downloads">Data Downloads</a>
 

## Actions

### eff_rest_services.download_effluent_chart.get
Downloads tabular Discharge Monitoring Report (DMR) and compliance data for one NPDES permit as a CSV.


```js
epa_gov_eff.eff_rest_services.download_effluent_chart.get({
  "p_id": ""
}, context)
```

#### Input
* input `object`
  * p_id **required** `string`: Identifier for the service.
  * outfall `string`: Three-character code that identifies the point of discharge (e.g., pipe or outfall) for a facility. A single NPDES ID may have multiple points of discharge.
  * parameter_code `string`: Five-digit numeric code identifying the parameter. See Parameter Lookup documentation for a complete list of codes.
  * start_date `string`: The start date (mm/dd/yyyy) for the date range of interest. Must be used in conjunction with end_date. If start_date and end_date are not specified, the service will return the last three years of data.
  * end_date `string`: The end date (mm/dd/yyyy) for the date range of interest. Must be used in conjunction with start_date. If start_date and end_date are not specified, the service will return the last three years of data.

#### Output
* output `file`

### eff_rest_services.download_effluent_chart.post
Downloads tabular Discharge Monitoring Report (DMR) and compliance data for one NPDES permit as a CSV.


```js
epa_gov_eff.eff_rest_services.download_effluent_chart.post({
  "p_id": ""
}, context)
```

#### Input
* input `object`
  * p_id **required** `string`: Identifier for the service.
  * outfall `string`: Three-character code that identifies the point of discharge (e.g., pipe or outfall) for a facility. A single NPDES ID may have multiple points of discharge.
  * parameter_code `string`: Five-digit numeric code identifying the parameter. See Parameter Lookup documentation for a complete list of codes.
  * start_date `string`: The start date (mm/dd/yyyy) for the date range of interest. Must be used in conjunction with end_date. If start_date and end_date are not specified, the service will return the last three years of data.
  * end_date `string`: The end date (mm/dd/yyyy) for the date range of interest. Must be used in conjunction with start_date. If start_date and end_date are not specified, the service will return the last three years of data.

#### Output
* output `file`

### eff_rest_services.get_effluent_chart.get
Discharge Monitoring Report (DMR) data supporting each effluent chart for one NPDES permit. Includes Discharge Monitoring Reports and NPDES Violations. 




```js
epa_gov_eff.eff_rest_services.get_effluent_chart.get({
  "p_id": ""
}, context)
```

#### Input
* input `object`
  * p_id **required** `string`: Identifier for the service.
  * outfall `string`: Three-character code that identifies the point of discharge (e.g., pipe or outfall) for a facility. A single NPDES ID may have multiple points of discharge.
  * parameter_code `string`: Five-digit numeric code identifying the parameter. See Parameter Lookup documentation for a complete list of codes.
  * start_date `string`: The start date (mm/dd/yyyy) for the date range of interest. Must be used in conjunction with end_date. If start_date and end_date are not specified, the service will return the last three years of data.
  * end_date `string`: The end date (mm/dd/yyyy) for the date range of interest. Must be used in conjunction with start_date. If start_date and end_date are not specified, the service will return the last three years of data.
  * output `string` (values: JSONP, JSON, XML): Output Format Flag.  Enter one of the following keywords:
  * callback `string`: JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.

#### Output
* output `object`: Root Object
  * Results **required** [eff05](#eff05)

### eff_rest_services.get_effluent_chart.post
Discharge Monitoring Report (DMR) data supporting each effluent chart for one NPDES permit. Includes Discharge Monitoring Reports and NPDES Violations. 




```js
epa_gov_eff.eff_rest_services.get_effluent_chart.post({
  "p_id": ""
}, context)
```

#### Input
* input `object`
  * p_id **required** `string`: Identifier for the service.
  * outfall `string`: Three-character code that identifies the point of discharge (e.g., pipe or outfall) for a facility. A single NPDES ID may have multiple points of discharge.
  * parameter_code `string`: Five-digit numeric code identifying the parameter. See Parameter Lookup documentation for a complete list of codes.
  * start_date `string`: The start date (mm/dd/yyyy) for the date range of interest. Must be used in conjunction with end_date. If start_date and end_date are not specified, the service will return the last three years of data.
  * end_date `string`: The end date (mm/dd/yyyy) for the date range of interest. Must be used in conjunction with start_date. If start_date and end_date are not specified, the service will return the last three years of data.
  * output `string` (values: JSONP, JSON, XML): Output Format Flag.  Enter one of the following keywords:
  * callback `string`: JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.

#### Output
* output `object`: Root Object
  * Results **required** [eff05](#eff05)

### eff_rest_services.get_summary_chart.get
Summary of compliance status each outfall and parameter for one NPDES permit. Provides the current compliance status and overall compliance status for the date range of interest. This service supports the Summary Matrix on the Effluent Charts.


```js
epa_gov_eff.eff_rest_services.get_summary_chart.get({
  "p_id": ""
}, context)
```

#### Input
* input `object`
  * p_id **required** `string`: Identifier for the service.
  * output `string` (values: JSONP, JSON, XML): Output Format Flag.  Enter one of the following keywords:
  * callback `string`: JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.
  * start_date `string`: The start date (mm/dd/yyyy) for the date range of interest. Must be used in conjunction with end_date. If start_date and end_date are not specified, the service will return the last three years of data.
  * end_date `string`: The end date (mm/dd/yyyy) for the date range of interest. Must be used in conjunction with start_date. If start_date and end_date are not specified, the service will return the last three years of data.

#### Output
* output `object`: Root Object
  * Results **required** [eff09](#eff09)

### eff_rest_services.get_summary_chart.post
Summary of compliance status each outfall and parameter for one NPDES permit. Provides the current compliance status and overall compliance status for the date range of interest. This service supports the Summary Matrix on the Effluent Charts.


```js
epa_gov_eff.eff_rest_services.get_summary_chart.post({
  "p_id": ""
}, context)
```

#### Input
* input `object`
  * p_id **required** `string`: Identifier for the service.
  * output `string` (values: JSONP, JSON, XML): Output Format Flag.  Enter one of the following keywords:
  * callback `string`: JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.
  * start_date `string`: The start date (mm/dd/yyyy) for the date range of interest. Must be used in conjunction with end_date. If start_date and end_date are not specified, the service will return the last three years of data.
  * end_date `string`: The end date (mm/dd/yyyy) for the date range of interest. Must be used in conjunction with start_date. If start_date and end_date are not specified, the service will return the last three years of data.

#### Output
* output `object`: Root Object
  * Results **required** [eff09](#eff09)

### rest_lookups.cwa_parameters.get
Look up Clean Water Act parameter codes and descriptions in the Integrated Compliance Information System - National Pollutant Discharge Elimination System (ICIS-NPDES) by code or term.


```js
epa_gov_eff.rest_lookups.cwa_parameters.get({}, context)
```

#### Input
* input `object`
  * output `string` (values: JSONP, JSON, XML): Output Format Flag.  Enter one of the following keywords:
  * callback `string`: JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.
  * search_term `string`: Enter a partial or complete search phrase or word.
  * search_code `string`: Enter a partial or complete code value.

#### Output
* output `object`: Root Object
  * Results **required** [rlup23](#rlup23)

### rest_lookups.cwa_parameters.post
Look up Clean Water Act parameter codes and descriptions in the Integrated Compliance Information System - National Pollutant Discharge Elimination System (ICIS-NPDES) by code or term.


```js
epa_gov_eff.rest_lookups.cwa_parameters.post({}, context)
```

#### Input
* input `object`
  * output `string` (values: JSONP, JSON, XML): Output Format Flag.  Enter one of the following keywords:
  * callback `string`: JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.
  * search_term `string`: Enter a partial or complete search phrase or word.
  * search_code `string`: Enter a partial or complete code value.

#### Output
* output `object`: Root Object
  * Results **required** [rlup23](#rlup23)



## Definitions

### eff01
* eff01 `object`: Discharge Monitoring Reports Object
  * DMREventId **required** `string`: The sequence ID identifying the DMR Event.
  * DMRFormValueId **required** `string`: The sequence ID identifying the DMR Form Value.
  * DMRUnitCode **required** `string`: The code representing the unit of measure applicable to quantity or concentration limits and measurements as entered into ICIS-NPDES
  * DMRUnitDesc **required** `string`: The short description of the unit of measure applicable to limit or DMR values
  * DMRValueId **required** `string`: The unique identifier for the DMR value generated in ICIS-NPDES
  * DMRValueNmbr **required** `string`: The DMR value number reported on the DMR Form
  * DMRValueQualifierCode **required** `string`: The unique code identifying the DMR value operator (i.e., <, <=, >, >=, T, E, =). E indicates an estimated value. T indicates too numerous to count
  * DMRValueStdUnits **required** `string`: The DMR value expressed in standard units, as calculated in ICIS-NPDES
  * DaysLate **required** `string`: The number of days the DMR value is late, as generated in ICIS-NPDES
  * ExceedencePct **required** `string`: The percent by which the DMR value (or adjusted value) exceeded its limit (or stay) value, as generated in ICIS-NPDES
  * LimitBeginDate **required** `string`: The date on which a limit becomes in effect for a particular parameter in a limit set
  * LimitEndDate **required** `string`: The date on which a limit stops being in effect for a particular parameter in a limit set
  * LimitId **required** `string`: The unique identifier for a limit parameter record
  * LimitSetId **required** `string`: The unique identifier for a limit set, generated in ICIS-NPDES
  * LimitSetScheduleId **required** `string`: The unique identifier of the Limit Set Schedule, generated in ICIS-NPDES
  * LimitTypeCode **required** `string`
  * LimitUnitCode **required** `string`: The code representing the unit of measure applicable to quantity or concentration limits and measurements as entered by the user
  * LimitUnitDesc **required** `string`: The short description of the unit of measure applicable to limit or DMR values
  * LimitValueId **required** `string`: The unique identifier in ICIS-NPDES for the Limit Value
  * LimitValueNmbr **required** `string`: The numerical limit for a given parameter
  * LimitValueQualifierCode **required** `string`: The unique code identifying the limit value operator (i.e., <, <=, >, >=, T, E, =). E indicates an estimated value. T indicates too numerous to count
  * LimitValueStdUnits **required** `string`: The limit value expressed in standard units, as calculated in ICIS-NPDES
  * LimitValueTypeCode **required** `string`: The code indicating the type of value the limit is given as (i.e., Q1, Q2, C1, C2, C3)
  * LimitValueTypeDesc **required** `string`: The description indicating the type of value the limit is given as (e.g., Concentration, Quantity)
  * MonitoringPeriodEndDate **required** `string`: The date that the monitoring period for the values covered by the DMR Form ends
  * NODEDesc **required** `string`
  * NODICode **required** `string`: The unique code indicating why no DMR Value was submitted by the permittee for a Monitoring Period End Date
  * NPDESViolations `array`
    * items [eff02](#eff02)
  * NmbrOfSubmission **required** `string`: The number of months of discharges represented on each DMR for the limit set (e.g., monthly = 1, bi-monthly = 2, quarterly = 3, triannual = 4, semi-annual = 6, annual = 12). This data element will be blank for Unscheduled Limit Sets
  * PermFeatureId **required** `string`: The unique identifier in ICIS-NPDES of a permitted feature or outfall
  * StatisticalBaseCode **required** `string`: The code representing the unit of measure applicable to the limit and DMR values entered by the user (e.g., 30-day average, daily maximum)
  * StatisticalBaseDesc **required** `string`
  * StatisticalBaseTypeCode **required** `string`: The code indicating whether the statistical base code is a minimum, average, or maximum for purposes of calculating compliance against the limit value
  * StatisticalBaseTypeDesc **required** `string`: A short description for indicating whether the statistical base code is a minimum, average, or maximum for purposes of calculating compliance against the limit value
  * StayValueNmbr **required** `string`: The numeric limit value imposed during the period of the stay for the limit; if entered, during the stay period, ICIS-NPDES will use this limit value for calculating compliance rather than the actual limit value
  * StdUnitCode **required** `string`: The code representing the standard unit of measure applicable to quantity or concentration limits and measurements as entered by the user
  * StdUnitDesc **required** `string`: The short description of the standard unit of measure applicable to limit or DMR values
  * ValueReceivedDate **required** `string`: The date the DMR value was received by the regulatory authority
  * ValueTypeCode **required** `string`: The indication of the limit value type (e.g., Quantity 1, Concentration 2)
  * ValueTypeDesc **required** `string`: The type of value the measured number is given as (e.g., Concentration, Quantity)
  * VersionNmbr **required** `string`: The version of the permit when a modification or reissuance is applied to the permit. Version = 0 indicates the original permit issuance

### eff02
* eff02 `object`: NPDES Violations Object
  * NPDESViolationId `string`: The unique identifier in ICIS-NPDES for the NPDES Violation
  * RNCDetectionCode `string`: The code indicating the reportable noncompliance (RNC) detected for a violation:
  * RNCDetectionDate `string`: The date that the exceedance was detected
  * RNCDetectionDesc `string`: A description of the reportable noncompliance (RNC) detected
  * RNCResolutionCode `string`: The code indicating the resolution of noncompliance (RNC) for a violation
  * RNCResolutionDate `string`: The date RNC was marked to its current resolution status. It can be entered manually or automatically
  * RNCResolutionDesc `string`: - 1 = Unresolved RNC
  * ViolationCode `string`: The code identifying which type of Violation has occurred (e.g., D80 = Required Monitoring DMR Value Non-Receipt, E90 = Effluent Violation, C20 = Schedule Event Achieved Late)
  * ViolationDesc `string`: A description of which type of violation has occurred
  * ViolationSeverity `string`: - 0 = no violation.
  * ViolationSeverityDesc `string`

### eff03
* eff03 `object`: Parameters Object
  * DischargeMonitoringReports **required** `array`: An array of Discharge Monitoring Report (DMR) data.
    * items [eff01](#eff01)
  * MonitoringLocationCode **required** `string`: The code that the monitoring location at which the monitoring requirement (and effluent limit if limited) applies. One parameter may have several monitoring location codes pertaining to the same permitted feature
  * MonitoringLocationDesc **required** `string`: The name of the monitoring location at which the monitoring requirement (and effluent limit if limited) applies
  * ParameterCode **required** `string`: The unique 5 digit numeric code identifying the parameter. If the code is less than 5 digits in the .CSV, append zeros to the beginning of the number (e.g., 100 is equivalent to 00100)
  * ParameterDesc **required** `string`: The pollutant name and form (e.g., dissolved, suspended) associated with the parameter code
  * StayTypeCode **required** `string`: The unique identifier of the type of stay applied to a limit (e.g., X, Y, Z), which indicates whether the limits do not appear on the DMR at all, are treated as monitor only, or have a stay value in effect during the period of the stay
  * StayTypeDesc **required** `string`: The name of the type of stay applied to a limit, which indicates whether the limits do not appear on the DMR at all (X), are treated as monitor only (Y), or have a stay value in effect during the period of the stay (Z)

### eff04
* eff04 `object`: Permit Features Object
  * Parameters **required** `array`: Array of Effuent Limit Parameters
    * items [eff03](#eff03)
  * PermFeatureNmbr **required** `string`: A three-character code in ICIS-NPDES that identifies the point of discharge (e.g., outfall) for a facility. A NPDES permit may have multiple points of discharge. If the code is less than three characters in the .CSV, append zeros to the beginning of the number (e.g., 1 is equivalent to 001)
  * PermFeatureTypeCode **required** `string`: The code indicating the type of permitted feature (e.g., EXO)
  * PermFeatureTypeDesc **required** `string`: The description indicating the type of permitted feature (e.g., External Outfall, Internal Outfall, Sum)

### eff05
* eff05 `object`: Results Object
  * CWPCity **required** `string`: City in which the facility is located.
  * CWPCurrentSNCStatus **required** `string`: The type of noncompliance when a major source is in significant violation or a minor source has a Category 1 violation.
  * CWPMajorMinorStatusFlag **required** `string`: Facilities marked "M" for major refers to CWA major permittees.
  * CWPName **required** `string`: Facility or permit holder name, as maintained in ICIS-NPDES.
  * CWPPermitStatusDesc **required** `string`: The current stage/status in the NPDES permit life cycle.
  * CWPPermitTypeDesc **required** `string`: NPDES facility permit classification:
  * CWPState **required** `string`: Facility location - two-digit state abbreviation.
  * CWPStreet **required** `string`: Facility street address
  * CWPZip **required** `string`: Facility ZIP code
  * EPASystem **required** `string`: The EPA data system in which permit and facility records are kept. EPA's Facility Registry System (FRS) links all program database records (such as permit IDs and IDs facilities use in reporting to EPA) together. The following list describes the individual data systems that are linked to from the detailed facility report: 
  * EndDate **required** `string`: End date for the date range of interest. Formatted as mm/dd/yyyy
  * Message **required** `string`: Field to record messages (typically performance-related) about packet processing
  * PermFeatures `array`: Array of Permitted Features
    * items [eff04](#eff04)
  * RegistryId **required** `string`: 12-digit Facility Registry Service (FRS) identification number.  FRS uniquely identifies a facility by assigning an identification number (FRS ID), and uses this FRS ID to link together all EPA regulatory program database records
  * SourceId **required** `string`: Unique Identifier assigned by EPA.
  * StartDate **required** `string`: Starting date for the date range of interest. Formatted as mm/dd/yyyy
  * Statute **required** `string`: The name of the statute associated with each of the permits and identifiers linked to the facility: 

### eff06
* eff06 `object`: Linked Permits Object
  * CWPCity **required** `string`: City in which the facility is located.
  * CWPCurrentSNCStatus **required** `string`: The type of noncompliance when a major source is in significant violation or a minor source has a Category 1 violation.
  * CWPMajorMinorStatusFlag **required** `string`: Facilities marked "M" for major refers to CWA major permittees.
  * CWPName **required** `string`: Facility or permit holder name, as maintained in ICIS-NPDES.
  * CWPPermitStatusDesc **required** `string`: The current stage/status in the NPDES permit life cycle.
  * CWPPermitTypeDesc **required** `string`: NPDES facility permit classification:
  * CWPState **required** `string`: Facility location - two-digit state abbreviation.
  * CWPStreet **required** `string`: Facility street address
  * CWPZip **required** `string`: Facility ZIP code
  * SourceId **required** `string`: Unique Identifier assigned by EPA.

### eff07
* eff07 `object`: Parameters Object
  * CurrentVioStatus **required** `string`: The most severe compliance status for an outfall and parameter during the current monitoring period
  * MaxVioStatus **required** `string`: The most severe compliance status for an outfall and parameter during the entire selected date range
  * ParameterCode **required** `string`: The unique 5 digit numeric code identifying the parameter. If the code is less than 5 digits in the .CSV, append zeros to the beginning of the number (e.g., 100 is equivalent to 00100)
  * ParameterDesc **required** `string`: The pollutant name and form (e.g., dissolved, suspended) associated with the parameter code

### eff08
* eff08 `object`: Permit Features Object
  * Parameters **required** `array`
    * items [eff07](#eff07)
  * PermFeatureNmbr **required** `string`: A three-character code in ICIS-NPDES that identifies the point of discharge (e.g., outfall) for a facility. A NPDES permit may have multiple points of discharge. If the code is less than three characters in the .CSV, append zeros to the beginning of the number (e.g., 1 is equivalent to 001)
  * PermFeatureTypeCode **required** `string`: The code indicating the type of permitted feature (e.g., EXO)
  * PermFeatureTypeDesc **required** `string`: The description indicating the type of permitted feature (e.g., External Outfall, Internal Outfall, Sum)

### eff09
* eff09 `object`: Results Object
  * CWPCity **required** `string`: City in which the facility is located.
  * CWPCurrentSNCStatus **required** `string`: The type of noncompliance when a major source is in significant violation or a minor source has a Category 1 violation.
  * CWPMajorMinorStatusFlag **required** `string`: Facilities marked "M" for major refers to CWA major permittees.
  * CWPName **required** `string`: Facility or permit holder name, as maintained in ICIS-NPDES.
  * CWPPermitStatusDesc **required** `string`: The current stage/status in the NPDES permit life cycle.
  * CWPPermitTypeDesc **required** `string`: NPDES facility permit classification:
  * CWPState **required** `string`: Facility location - two-digit state abbreviation.
  * CWPStreet **required** `string`: Facility street address
  * CWPZip **required** `string`: Facility ZIP code
  * EPASystem **required** `string`: The EPA data system in which permit and facility records are kept. EPA's Facility Registry System (FRS) links all program database records (such as permit IDs and IDs facilities use in reporting to EPA) together. The following list describes the individual data systems that are linked to from the detailed facility report: 
  * EndDate **required** `string`: End date for the date range of interest. Formatted as mm/dd/yyyy
  * LinkedPermits `array`
    * items [eff06](#eff06)
  * Message **required** `string`: Field to record messages (typically performance-related) about packet processing
  * PermFeatures `array`
    * items [eff08](#eff08)
  * RegistryId **required** `string`: 12-digit Facility Registry Service (FRS) identification number.  FRS uniquely identifies a facility by assigning an identification number (FRS ID), and uses this FRS ID to link together all EPA regulatory program database records
  * SourceId **required** `string`: Unique Identifier assigned by EPA.
  * StartDate **required** `string`: Starting date for the date range of interest. Formatted as mm/dd/yyyy
  * Statute **required** `string`: The name of the statute associated with each of the permits and identifiers linked to the facility: 

### rlup01
* rlup01 `object`: Lookup Values
  * ValueCode **required** `string`
  * ValueDescription **required** `string`

### rlup23
* rlup23 `object`: Results Object
  * LuValues `array`
    * items [rlup01](#rlup01)
  * Message **required** `string`: Field to record messages (typically performance-related) about packet processing


