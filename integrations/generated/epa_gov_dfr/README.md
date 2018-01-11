# @datafire/epa_gov_dfr

Client library for U.S. EPA Enforcement and Compliance History Online (ECHO) - Detailed Facility Report (DFR)

## Installation and Usage
```bash
npm install --save @datafire/epa_gov_dfr
```
```js
let epa_gov_dfr = require('@datafire/epa_gov_dfr').create();

epa_gov_dfr.dfr_rest_services.get_air_compliance.get({}).then(data => {
  console.log(data);
})
```

## Description

Enforcement and Compliance History Online (ECHO) is a tool developed and maintained by EPA's Office of Enforcement and Compliance Assurance for public use. ECHO provides integrated compliance and enforcement information for about 800,000 regulated facilities nationwide.
<BR><BR>DFR Rest Services provide multiple service endpoints, to retrieve detailed facility location, enforcement, compliance monitoring, and pollutant information for any single facility.  See the Detailed Facility Report (DFR) Help Page (https://echo.epa.gov/help/reports/detailed-facility-report-help) for additional information on the DFR.  Additionally, a Data Dictionary (https://echo.epa.gov/help/reports/dfr-data-dictionary) is also available.<BR><BR>
There is one primary service end point, get_dfr, that provides all available DFR data.  All other service end points that are exposed, will return data on a single section of the DFR. <br>  
<br>
Additional ECHO Resources:   <a href="https://echo.epa.gov/tools/web-services">Web Services</a>, <a href="https://echo.epa.gov/resources/echo-data/about-the-data">About ECHO's Data</a>, <a href="https://echo.epa.gov/tools/data-downloads">Data Downloads</a>
<br>


## Actions

### dfr_rest_services.get_air_compliance.get
This procedure obtains data for Air Compliance in the Environmental Conditions Section of the DFR.


```js
epa_gov_dfr.dfr_rest_services.get_air_compliance.get({
  "p_id": ""
}, context)
```

#### Input
* input `object`
  * output `string` (values: JSONP, JSON, XML): Output Format Flag.  Enter one of the following keywords:
  * p_id **required** `string`: Either the EPA Facility Registry System's REGISTRY_ID for a facility or the facility identifier from the following EPA Systems: RCRAINFO (HANDLER_ID), AFS (SCSC), ICIS NPDES (NPDES_ID), or SDWIS (PWS_ID).
  * callback `string`: JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.

#### Output
* output `object`: Root Object
  * Results **required** [dfrq_Results](#dfrq_results)

### dfr_rest_services.get_air_compliance.post
This procedure obtains data for Air Compliance in the Environmental Conditions Section of the DFR.


```js
epa_gov_dfr.dfr_rest_services.get_air_compliance.post({
  "p_id": ""
}, context)
```

#### Input
* input `object`
  * output `string` (values: JSONP, JSON, XML): Output Format Flag.  Enter one of the following keywords:
  * p_id **required** `string`: Either the EPA Facility Registry System's REGISTRY_ID for a facility or the facility identifier from the following EPA Systems: RCRAINFO (HANDLER_ID), AFS (SCSC), ICIS NPDES (NPDES_ID), or SDWIS (PWS_ID).
  * callback `string`: JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.

#### Output
* output `object`: Root Object
  * Results **required** [dfrq_Results](#dfrq_results)

### dfr_rest_services.get_air_quality.get
This procedure obtains data for Air Quality in the Environmental Conditions Section of the DFR.


```js
epa_gov_dfr.dfr_rest_services.get_air_quality.get({
  "p_id": ""
}, context)
```

#### Input
* input `object`
  * output `string` (values: JSONP, JSON, XML): Output Format Flag.  Enter one of the following keywords:
  * p_id **required** `string`: Either the EPA Facility Registry System's REGISTRY_ID for a facility or the facility identifier from the following EPA Systems: RCRAINFO (HANDLER_ID), AFS (SCSC), ICIS NPDES (NPDES_ID), or SDWIS (PWS_ID).
  * callback `string`: JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.

#### Output
* output `object`: Root Object
  * Results **required** [dfr1_Results](#dfr1_results)

### dfr_rest_services.get_air_quality.post
This procedure obtains data for Air Quality in the Environmental Conditions Section of the DFR.


```js
epa_gov_dfr.dfr_rest_services.get_air_quality.post({
  "p_id": ""
}, context)
```

#### Input
* input `object`
  * output `string` (values: JSONP, JSON, XML): Output Format Flag.  Enter one of the following keywords:
  * p_id **required** `string`: Either the EPA Facility Registry System's REGISTRY_ID for a facility or the facility identifier from the following EPA Systems: RCRAINFO (HANDLER_ID), AFS (SCSC), ICIS NPDES (NPDES_ID), or SDWIS (PWS_ID).
  * callback `string`: JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.

#### Output
* output `object`: Root Object
  * Results **required** [dfr1_Results](#dfr1_results)

### dfr_rest_services.get_compliance_history.get
This procedure obtains data for the Compliance Monitoring History (5 years) in the Enforcement and Compliance Section of the Detailed Facility report.


```js
epa_gov_dfr.dfr_rest_services.get_compliance_history.get({
  "p_id": ""
}, context)
```

#### Input
* input `object`
  * output `string` (values: JSONP, JSON, XML): Output Format Flag.  Enter one of the following keywords:
  * p_id **required** `string`: Either the EPA Facility Registry System's REGISTRY_ID for a facility or the facility identifier from the following EPA Systems: RCRAINFO (HANDLER_ID), AFS (SCSC), ICIS NPDES (NPDES_ID), or SDWIS (PWS_ID).
  * callback `string`: JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.

#### Output
* output `object`: Root Object
  * Results **required** [dfr2_Results](#dfr2_results)

### dfr_rest_services.get_compliance_history.post
This procedure obtains data for the Compliance Monitoring History (5 years) in the Enforcement and Compliance Section of the Detailed Facility report.


```js
epa_gov_dfr.dfr_rest_services.get_compliance_history.post({
  "p_id": ""
}, context)
```

#### Input
* input `object`
  * output `string` (values: JSONP, JSON, XML): Output Format Flag.  Enter one of the following keywords:
  * p_id **required** `string`: Either the EPA Facility Registry System's REGISTRY_ID for a facility or the facility identifier from the following EPA Systems: RCRAINFO (HANDLER_ID), AFS (SCSC), ICIS NPDES (NPDES_ID), or SDWIS (PWS_ID).
  * callback `string`: JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.

#### Output
* output `object`: Root Object
  * Results **required** [dfr2_Results](#dfr2_results)

### dfr_rest_services.get_compliance_summary.get
This procedure obtains data for Compliance Summary Data in the Enforcement and Compliance Section of the Detailed Facility report.


```js
epa_gov_dfr.dfr_rest_services.get_compliance_summary.get({
  "p_id": ""
}, context)
```

#### Input
* input `object`
  * output `string` (values: JSONP, JSON, XML): Output Format Flag.  Enter one of the following keywords:
  * p_id **required** `string`: Either the EPA Facility Registry System's REGISTRY_ID for a facility or the facility identifier from the following EPA Systems: RCRAINFO (HANDLER_ID), AFS (SCSC), ICIS NPDES (NPDES_ID), or SDWIS (PWS_ID).
  * callback `string`: JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.

#### Output
* output `object`: Root Object
  * Results **required** [dfr3_Results](#dfr3_results)

### dfr_rest_services.get_compliance_summary.post
This procedure obtains data for Compliance Summary Data in the Enforcement and Compliance Section of the Detailed Facility report.


```js
epa_gov_dfr.dfr_rest_services.get_compliance_summary.post({
  "p_id": ""
}, context)
```

#### Input
* input `object`
  * output `string` (values: JSONP, JSON, XML): Output Format Flag.  Enter one of the following keywords:
  * p_id **required** `string`: Either the EPA Facility Registry System's REGISTRY_ID for a facility or the facility identifier from the following EPA Systems: RCRAINFO (HANDLER_ID), AFS (SCSC), ICIS NPDES (NPDES_ID), or SDWIS (PWS_ID).
  * callback `string`: JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.

#### Output
* output `object`: Root Object
  * Results **required** [dfr3_Results](#dfr3_results)

### dfr_rest_services.get_cwa_3yr_compliance.get
This procedure obtains data for the CWA Facility-Level Status section located in the Three Year Compliance Status by Quarter portion of the DFR. Valid Compliance Statuses are as follows:
> "In Viol" = Facility is in violation
> "No Viol" = No violation found
> "Unk" = Unknown status
> "SNC/Cat 1" = SNC/Category I violation found


```js
epa_gov_dfr.dfr_rest_services.get_cwa_3yr_compliance.get({
  "p_id": ""
}, context)
```

#### Input
* input `object`
  * output `string` (values: JSONP, JSON, XML): Output Format Flag.  Enter one of the following keywords:
  * p_id **required** `string`: Either the EPA Facility Registry System's REGISTRY_ID for a facility or the facility identifier from the following EPA Systems: RCRAINFO (HANDLER_ID), AFS (SCSC), ICIS NPDES (NPDES_ID), or SDWIS (PWS_ID).
  * callback `string`: JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.

#### Output
* output `object`: Root Object
  * Results **required** [dfrW_Results](#dfrw_results)

### dfr_rest_services.get_cwa_3yr_compliance.post
This procedure obtains data for the CWA Facility-Level Status section located in the Three Year Compliance Status by Quarter portion of the DFR. Valid Compliance Statuses are as follows:
> "In Viol" = Facility is in violation
> "No Viol" = No violation found
> "Unk" = Unknown status
> "SNC/Cat 1" = SNC/Category I violation found


```js
epa_gov_dfr.dfr_rest_services.get_cwa_3yr_compliance.post({
  "p_id": ""
}, context)
```

#### Input
* input `object`
  * output `string` (values: JSONP, JSON, XML): Output Format Flag.  Enter one of the following keywords:
  * p_id **required** `string`: Either the EPA Facility Registry System's REGISTRY_ID for a facility or the facility identifier from the following EPA Systems: RCRAINFO (HANDLER_ID), AFS (SCSC), ICIS NPDES (NPDES_ID), or SDWIS (PWS_ID).
  * callback `string`: JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.

#### Output
* output `object`: Root Object
  * Results **required** [dfrW_Results](#dfrw_results)

### dfr_rest_services.get_cwa_cs_compliance.get
This procedure obtains data for the CWA Compliance Schedule Violations section of the DFR.


```js
epa_gov_dfr.dfr_rest_services.get_cwa_cs_compliance.get({
  "p_id": ""
}, context)
```

#### Input
* input `object`
  * output `string` (values: JSONP, JSON, XML): Output Format Flag.  Enter one of the following keywords:
  * p_id **required** `string`: Either the EPA Facility Registry System's REGISTRY_ID for a facility or the facility identifier from the following EPA Systems: RCRAINFO (HANDLER_ID), AFS (SCSC), ICIS NPDES (NPDES_ID), or SDWIS (PWS_ID).
  * callback `string`: JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.

#### Output
* output `object`: Root Object
  * Results **required** [dfrs_Results](#dfrs_results)

### dfr_rest_services.get_cwa_cs_compliance.post
This procedure obtains data for the CWA Compliance Schedule Violations section of the DFR.


```js
epa_gov_dfr.dfr_rest_services.get_cwa_cs_compliance.post({
  "p_id": ""
}, context)
```

#### Input
* input `object`
  * output `string` (values: JSONP, JSON, XML): Output Format Flag.  Enter one of the following keywords:
  * p_id **required** `string`: Either the EPA Facility Registry System's REGISTRY_ID for a facility or the facility identifier from the following EPA Systems: RCRAINFO (HANDLER_ID), AFS (SCSC), ICIS NPDES (NPDES_ID), or SDWIS (PWS_ID).
  * callback `string`: JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.

#### Output
* output `object`: Root Object
  * Results **required** [dfrs_Results](#dfrs_results)

### dfr_rest_services.get_cwa_eff_alr.get
This procedure obtains data for the CWA Pollutant Discharge section located in the Three Year Compliance Status by Quarter portion of the DFR.


```js
epa_gov_dfr.dfr_rest_services.get_cwa_eff_alr.get({
  "p_id": ""
}, context)
```

#### Input
* input `object`
  * output `string` (values: JSONP, JSON, XML): Output Format Flag.  Enter one of the following keywords:
  * p_id **required** `string`: Either the EPA Facility Registry System's REGISTRY_ID for a facility or the facility identifier from the following EPA Systems: RCRAINFO (HANDLER_ID), AFS (SCSC), ICIS NPDES (NPDES_ID), or SDWIS (PWS_ID).
  * callback `string`: JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.

#### Output
* output `object`: Root Object
  * Results **required** [dfrt_Results](#dfrt_results)

### dfr_rest_services.get_cwa_eff_alr.post
This procedure obtains data for the CWA Pollutant Discharge section located in the Three Year Compliance Status by Quarter portion of the DFR.


```js
epa_gov_dfr.dfr_rest_services.get_cwa_eff_alr.post({
  "p_id": ""
}, context)
```

#### Input
* input `object`
  * output `string` (values: JSONP, JSON, XML): Output Format Flag.  Enter one of the following keywords:
  * p_id **required** `string`: Either the EPA Facility Registry System's REGISTRY_ID for a facility or the facility identifier from the following EPA Systems: RCRAINFO (HANDLER_ID), AFS (SCSC), ICIS NPDES (NPDES_ID), or SDWIS (PWS_ID).
  * callback `string`: JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.

#### Output
* output `object`: Root Object
  * Results **required** [dfrt_Results](#dfrt_results)

### dfr_rest_services.get_cwa_eff_compliance.get
This procedure obtains data for the CWA Effluent Compliance section on the DFR.  


```js
epa_gov_dfr.dfr_rest_services.get_cwa_eff_compliance.get({
  "p_id": ""
}, context)
```

#### Input
* input `object`
  * output `string` (values: JSONP, JSON, XML): Output Format Flag.  Enter one of the following keywords:
  * p_id **required** `string`: Either the EPA Facility Registry System's REGISTRY_ID for a facility or the facility identifier from the following EPA Systems: RCRAINFO (HANDLER_ID), AFS (SCSC), ICIS NPDES (NPDES_ID), or SDWIS (PWS_ID).
  * callback `string`: JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.

#### Output
* output `object`: Root Object
  * Results **required** [dfru_Results](#dfru_results)

### dfr_rest_services.get_cwa_eff_compliance.post
This procedure obtains data for the CWA Effluent Compliance section on the DFR.  


```js
epa_gov_dfr.dfr_rest_services.get_cwa_eff_compliance.post({
  "p_id": ""
}, context)
```

#### Input
* input `object`
  * output `string` (values: JSONP, JSON, XML): Output Format Flag.  Enter one of the following keywords:
  * p_id **required** `string`: Either the EPA Facility Registry System's REGISTRY_ID for a facility or the facility identifier from the following EPA Systems: RCRAINFO (HANDLER_ID), AFS (SCSC), ICIS NPDES (NPDES_ID), or SDWIS (PWS_ID).
  * callback `string`: JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.

#### Output
* output `object`: Root Object
  * Results **required** [dfru_Results](#dfru_results)

### dfr_rest_services.get_cwa_ps_compliance.get
This procedure obtains data for the CWA Permit Schedule Violations section of the DFR.


```js
epa_gov_dfr.dfr_rest_services.get_cwa_ps_compliance.get({
  "p_id": ""
}, context)
```

#### Input
* input `object`
  * output `string` (values: JSONP, JSON, XML): Output Format Flag.  Enter one of the following keywords:
  * p_id **required** `string`: Either the EPA Facility Registry System's REGISTRY_ID for a facility or the facility identifier from the following EPA Systems: RCRAINFO (HANDLER_ID), AFS (SCSC), ICIS NPDES (NPDES_ID), or SDWIS (PWS_ID).
  * callback `string`: JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.

#### Output
* output `object`: Root Object
  * Results **required** [dfrv_Results](#dfrv_results)

### dfr_rest_services.get_cwa_ps_compliance.post
This procedure obtains data for the CWA Permit Schedule Violations section of the DFR.


```js
epa_gov_dfr.dfr_rest_services.get_cwa_ps_compliance.post({
  "p_id": ""
}, context)
```

#### Input
* input `object`
  * output `string` (values: JSONP, JSON, XML): Output Format Flag.  Enter one of the following keywords:
  * p_id **required** `string`: Either the EPA Facility Registry System's REGISTRY_ID for a facility or the facility identifier from the following EPA Systems: RCRAINFO (HANDLER_ID), AFS (SCSC), ICIS NPDES (NPDES_ID), or SDWIS (PWS_ID).
  * callback `string`: JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.

#### Output
* output `object`: Root Object
  * Results **required** [dfrv_Results](#dfrv_results)

### dfr_rest_services.get_cwa_rnc_compliance.get
This procedure obtains data for the CWA SNC/RNC History section located in the Three Year ompliance Status by Quarter portion of the DFR. Valid Compliance Statuses are as follows.
> S = SNC/Category I - an enforcement action has been issued, and the facility is not meeting its compliance schedule
> E = SNC/Category I - effluent violations of monthly average limits (Technical Review Criteria and chronic)
> X = SNC/Category I - effluent violations of non-monthly average limits (Technical Review Criteria and chronic)
> T = SNC/Category I - compliance schedule reporting violation
> D = SNC/Category I - reporting violation - nonreceipt of DMR
> N = RNC/Category II - reportable non-compliance
> P = Resolved Pending - an enforcement action has been issued, and facility compliance with the action is pending final completion
> R = Resolved - the facility has returned to compliance with its permit conditions, either with or without issuance of an enforcement action
> C = Not considered in RNC/SNC based on manual review of data by state or EPA region. This manual override status is also indicated by a superscripted "m".
> Blank = Not considered in RNC/SNC
> N/A = EPA's data system is not able to determine the facility-level compliance status based upon the information available. This information may be available from a state database.


```js
epa_gov_dfr.dfr_rest_services.get_cwa_rnc_compliance.get({
  "p_id": ""
}, context)
```

#### Input
* input `object`
  * output `string` (values: JSONP, JSON, XML): Output Format Flag.  Enter one of the following keywords:
  * p_id **required** `string`: Either the EPA Facility Registry System's REGISTRY_ID for a facility or the facility identifier from the following EPA Systems: RCRAINFO (HANDLER_ID), AFS (SCSC), ICIS NPDES (NPDES_ID), or SDWIS (PWS_ID).
  * callback `string`: JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.

#### Output
* output `object`: Root Object
  * Results **required** [dfrw_Results](#dfrw_results)

### dfr_rest_services.get_cwa_rnc_compliance.post
This procedure obtains data for the CWA SNC/RNC History section located in the Three Year ompliance Status by Quarter portion of the DFR. Valid Compliance Statuses are as follows.
> S = SNC/Category I - an enforcement action has been issued, and the facility is not meeting its compliance schedule
> E = SNC/Category I - effluent violations of monthly average limits (Technical Review Criteria and chronic)
> X = SNC/Category I - effluent violations of non-monthly average limits (Technical Review Criteria and chronic)
> T = SNC/Category I - compliance schedule reporting violation
> D = SNC/Category I - reporting violation - nonreceipt of DMR
> N = RNC/Category II - reportable non-compliance
> P = Resolved Pending - an enforcement action has been issued, and facility compliance with the action is pending final completion
> R = Resolved - the facility has returned to compliance with its permit conditions, either with or without issuance of an enforcement action
> C = Not considered in RNC/SNC based on manual review of data by state or EPA region. This manual override status is also indicated by a superscripted "m".
> Blank = Not considered in RNC/SNC
> N/A = EPA's data system is not able to determine the facility-level compliance status based upon the information available. This information may be available from a state database.


```js
epa_gov_dfr.dfr_rest_services.get_cwa_rnc_compliance.post({
  "p_id": ""
}, context)
```

#### Input
* input `object`
  * output `string` (values: JSONP, JSON, XML): Output Format Flag.  Enter one of the following keywords:
  * p_id **required** `string`: Either the EPA Facility Registry System's REGISTRY_ID for a facility or the facility identifier from the following EPA Systems: RCRAINFO (HANDLER_ID), AFS (SCSC), ICIS NPDES (NPDES_ID), or SDWIS (PWS_ID).
  * callback `string`: JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.

#### Output
* output `object`: Root Object
  * Results **required** [dfrw_Results](#dfrw_results)

### dfr_rest_services.get_cwa_se_compliance.get
This procedure obtains data for the CWA Single Event Violations section of the DFR.


```js
epa_gov_dfr.dfr_rest_services.get_cwa_se_compliance.get({
  "p_id": ""
}, context)
```

#### Input
* input `object`
  * output `string` (values: JSONP, JSON, XML): Output Format Flag.  Enter one of the following keywords:
  * p_id **required** `string`: Either the EPA Facility Registry System's REGISTRY_ID for a facility or the facility identifier from the following EPA Systems: RCRAINFO (HANDLER_ID), AFS (SCSC), ICIS NPDES (NPDES_ID), or SDWIS (PWS_ID).
  * callback `string`: JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.

#### Output
* output `object`: Root Object
  * Results **required** [dfrx_Results](#dfrx_results)

### dfr_rest_services.get_cwa_se_compliance.post
This procedure obtains data for the CWA Single Event Violations section of the DFR.


```js
epa_gov_dfr.dfr_rest_services.get_cwa_se_compliance.post({
  "p_id": ""
}, context)
```

#### Input
* input `object`
  * output `string` (values: JSONP, JSON, XML): Output Format Flag.  Enter one of the following keywords:
  * p_id **required** `string`: Either the EPA Facility Registry System's REGISTRY_ID for a facility or the facility identifier from the following EPA Systems: RCRAINFO (HANDLER_ID), AFS (SCSC), ICIS NPDES (NPDES_ID), or SDWIS (PWS_ID).
  * callback `string`: JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.

#### Output
* output `object`: Root Object
  * Results **required** [dfrx_Results](#dfrx_results)

### dfr_rest_services.get_demographics.get
Returns a complex object with Demographics from the 2010 Census and 2010 American Community Survey based on a 3 mile radius around the facility spatial coordinates.


```js
epa_gov_dfr.dfr_rest_services.get_demographics.get({
  "p_id": ""
}, context)
```

#### Input
* input `object`
  * output `string` (values: JSONP, JSON, XML): Output Format Flag.  Enter one of the following keywords:
  * p_id **required** `string`: Either the EPA Facility Registry System's REGISTRY_ID for a facility or the facility identifier from the following EPA Systems: RCRAINFO (HANDLER_ID), AFS (SCSC), ICIS NPDES (NPDES_ID), or SDWIS (PWS_ID).
  * p_radius `string`
  * callback `string`: JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.

#### Output
* output `object`: Root Object
  * Results **required** [dfrY_Results](#dfry_results)

### dfr_rest_services.get_demographics.post
Returns a complex object with Demographics from the 2010 Census and 2010 American Community Survey based on a 3 mile radius around the facility spatial coordinates.


```js
epa_gov_dfr.dfr_rest_services.get_demographics.post({
  "p_id": ""
}, context)
```

#### Input
* input `object`
  * output `string` (values: JSONP, JSON, XML): Output Format Flag.  Enter one of the following keywords:
  * p_id **required** `string`: Either the EPA Facility Registry System's REGISTRY_ID for a facility or the facility identifier from the following EPA Systems: RCRAINFO (HANDLER_ID), AFS (SCSC), ICIS NPDES (NPDES_ID), or SDWIS (PWS_ID).
  * p_radius `string`
  * callback `string`: JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.

#### Output
* output `object`: Root Object
  * Results **required** [dfrY_Results](#dfry_results)

### dfr_rest_services.get_dfr.get
This procedure is the overall service for the Detailed Facility Report. It returns all of the data displayed in the DFR web report by invoking individual procedures that each return a targeted portion of the DFR.


```js
epa_gov_dfr.dfr_rest_services.get_dfr.get({
  "p_id": ""
}, context)
```

#### Input
* input `object`
  * output `string` (values: JSONP, JSON, XML): Output Format Flag.  Enter one of the following keywords:
  * p_id **required** `string`: Either the EPA Facility Registry System's REGISTRY_ID for a facility or the facility identifier from the following EPA Systems: RCRAINFO (HANDLER_ID), AFS (SCSC), ICIS NPDES (NPDES_ID), or SDWIS (PWS_ID).
  * p_system `string`: System Acronym Filter.  Enter a single system acronym to filter results.
  * callback `string`: JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.

#### Output
* output `object`: Root Object
  * Results **required** [dfr4_Results](#dfr4_results)

### dfr_rest_services.get_dfr.post
This procedure is the overall service for the Detailed Facility Report. It returns all of the data displayed in the DFR web report by invoking individual procedures that each return a targeted portion of the DFR.


```js
epa_gov_dfr.dfr_rest_services.get_dfr.post({
  "p_id": ""
}, context)
```

#### Input
* input `object`
  * output `string` (values: JSONP, JSON, XML): Output Format Flag.  Enter one of the following keywords:
  * p_id **required** `string`: Either the EPA Facility Registry System's REGISTRY_ID for a facility or the facility identifier from the following EPA Systems: RCRAINFO (HANDLER_ID), AFS (SCSC), ICIS NPDES (NPDES_ID), or SDWIS (PWS_ID).
  * p_system `string`: System Acronym Filter.  Enter a single system acronym to filter results.
  * callback `string`: JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.

#### Output
* output `object`: Root Object
  * Results **required** [dfr4_Results](#dfr4_results)

### dfr_rest_services.get_enforcement_summary.get
This procedure obtains data for the Enforcement and Compliance Summary in the Facility Summary section of the Detailed Facility Report.


```js
epa_gov_dfr.dfr_rest_services.get_enforcement_summary.get({
  "p_id": ""
}, context)
```

#### Input
* input `object`
  * output `string` (values: JSONP, JSON, XML): Output Format Flag.  Enter one of the following keywords:
  * p_id **required** `string`: Either the EPA Facility Registry System's REGISTRY_ID for a facility or the facility identifier from the following EPA Systems: RCRAINFO (HANDLER_ID), AFS (SCSC), ICIS NPDES (NPDES_ID), or SDWIS (PWS_ID).
  * callback `string`: JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.

#### Output
* output `object`: Root Object
  * Results **required** [dfrW1_Results](#dfrw1_results)

### dfr_rest_services.get_enforcement_summary.post
This procedure obtains data for the Enforcement and Compliance Summary in the Facility Summary section of the Detailed Facility Report.


```js
epa_gov_dfr.dfr_rest_services.get_enforcement_summary.post({
  "p_id": ""
}, context)
```

#### Input
* input `object`
  * output `string` (values: JSONP, JSON, XML): Output Format Flag.  Enter one of the following keywords:
  * p_id **required** `string`: Either the EPA Facility Registry System's REGISTRY_ID for a facility or the facility identifier from the following EPA Systems: RCRAINFO (HANDLER_ID), AFS (SCSC), ICIS NPDES (NPDES_ID), or SDWIS (PWS_ID).
  * callback `string`: JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.

#### Output
* output `object`: Root Object
  * Results **required** [dfrW1_Results](#dfrw1_results)

### dfr_rest_services.get_formal_actions.get
This procedure obtains data for the Formal Enforcement Actions section of the DFR.


```js
epa_gov_dfr.dfr_rest_services.get_formal_actions.get({
  "p_id": ""
}, context)
```

#### Input
* input `object`
  * output `string` (values: JSONP, JSON, XML): Output Format Flag.  Enter one of the following keywords:
  * p_id **required** `string`: Either the EPA Facility Registry System's REGISTRY_ID for a facility or the facility identifier from the following EPA Systems: RCRAINFO (HANDLER_ID), AFS (SCSC), ICIS NPDES (NPDES_ID), or SDWIS (PWS_ID).
  * callback `string`: JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.

#### Output
* output `object`: Root Object
  * Results **required** [dfrW2_Results](#dfrw2_results)

### dfr_rest_services.get_formal_actions.post
This procedure obtains data for the Formal Enforcement Actions section of the DFR.


```js
epa_gov_dfr.dfr_rest_services.get_formal_actions.post({
  "p_id": ""
}, context)
```

#### Input
* input `object`
  * output `string` (values: JSONP, JSON, XML): Output Format Flag.  Enter one of the following keywords:
  * p_id **required** `string`: Either the EPA Facility Registry System's REGISTRY_ID for a facility or the facility identifier from the following EPA Systems: RCRAINFO (HANDLER_ID), AFS (SCSC), ICIS NPDES (NPDES_ID), or SDWIS (PWS_ID).
  * callback `string`: JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.

#### Output
* output `object`: Root Object
  * Results **required** [dfrW2_Results](#dfrw2_results)

### dfr_rest_services.get_icis_formal_actions.get
This procedure obtains data for the Integrated Compliance Information System, Formal Enforcement Actions section of the DFR. 


```js
epa_gov_dfr.dfr_rest_services.get_icis_formal_actions.get({
  "p_id": ""
}, context)
```

#### Input
* input `object`
  * output `string` (values: JSONP, JSON, XML): Output Format Flag.  Enter one of the following keywords:
  * p_id **required** `string`: Either the EPA Facility Registry System's REGISTRY_ID for a facility or the facility identifier from the following EPA Systems: RCRAINFO (HANDLER_ID), AFS (SCSC), ICIS NPDES (NPDES_ID), or SDWIS (PWS_ID).
  * callback `string`: JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.

#### Output
* output `object`: Root Object
  * Results **required** [dfra_Results](#dfra_results)

### dfr_rest_services.get_icis_formal_actions.post
This procedure obtains data for the Integrated Compliance Information System, Formal Enforcement Actions section of the DFR. 


```js
epa_gov_dfr.dfr_rest_services.get_icis_formal_actions.post({
  "p_id": ""
}, context)
```

#### Input
* input `object`
  * output `string` (values: JSONP, JSON, XML): Output Format Flag.  Enter one of the following keywords:
  * p_id **required** `string`: Either the EPA Facility Registry System's REGISTRY_ID for a facility or the facility identifier from the following EPA Systems: RCRAINFO (HANDLER_ID), AFS (SCSC), ICIS NPDES (NPDES_ID), or SDWIS (PWS_ID).
  * callback `string`: JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.

#### Output
* output `object`: Root Object
  * Results **required** [dfra_Results](#dfra_results)

### dfr_rest_services.get_inspections.get
This procedure obtains data for Enforcement and Compliance Summary Section of the Detailed Facility report.


```js
epa_gov_dfr.dfr_rest_services.get_inspections.get({
  "p_id": ""
}, context)
```

#### Input
* input `object`
  * output `string` (values: JSONP, JSON, XML): Output Format Flag.  Enter one of the following keywords:
  * p_id **required** `string`: Either the EPA Facility Registry System's REGISTRY_ID for a facility or the facility identifier from the following EPA Systems: RCRAINFO (HANDLER_ID), AFS (SCSC), ICIS NPDES (NPDES_ID), or SDWIS (PWS_ID).
  * callback `string`: JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.

#### Output
* output `object`: Root Object
  * Results **required** [dfra1_Results](#dfra1_results)

### dfr_rest_services.get_inspections.post
This procedure obtains data for Enforcement and Compliance Summary Section of the Detailed Facility report.


```js
epa_gov_dfr.dfr_rest_services.get_inspections.post({
  "p_id": ""
}, context)
```

#### Input
* input `object`
  * output `string` (values: JSONP, JSON, XML): Output Format Flag.  Enter one of the following keywords:
  * p_id **required** `string`: Either the EPA Facility Registry System's REGISTRY_ID for a facility or the facility identifier from the following EPA Systems: RCRAINFO (HANDLER_ID), AFS (SCSC), ICIS NPDES (NPDES_ID), or SDWIS (PWS_ID).
  * callback `string`: JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.

#### Output
* output `object`: Root Object
  * Results **required** [dfra1_Results](#dfra1_results)

### dfr_rest_services.get_map.get
Returns an object with the facility's latitude and longitude coordinates.


```js
epa_gov_dfr.dfr_rest_services.get_map.get({
  "p_id": ""
}, context)
```

#### Input
* input `object`
  * output `string` (values: JSONP, JSON, XML): Output Format Flag.  Enter one of the following keywords:
  * p_id **required** `string`: Either the EPA Facility Registry System's REGISTRY_ID for a facility or the facility identifier from the following EPA Systems: RCRAINFO (HANDLER_ID), AFS (SCSC), ICIS NPDES (NPDES_ID), or SDWIS (PWS_ID).
  * callback `string`: JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.

#### Output
* output `object`: Root Object
  * Results **required** [dfrZ_Results](#dfrz_results)

### dfr_rest_services.get_map.post
Returns an object with the facility's latitude and longitude coordinates.


```js
epa_gov_dfr.dfr_rest_services.get_map.post({
  "p_id": ""
}, context)
```

#### Input
* input `object`
  * output `string` (values: JSONP, JSON, XML): Output Format Flag.  Enter one of the following keywords:
  * p_id **required** `string`: Either the EPA Facility Registry System's REGISTRY_ID for a facility or the facility identifier from the following EPA Systems: RCRAINFO (HANDLER_ID), AFS (SCSC), ICIS NPDES (NPDES_ID), or SDWIS (PWS_ID).
  * callback `string`: JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.

#### Output
* output `object`: Root Object
  * Results **required** [dfrZ_Results](#dfrz_results)

### dfr_rest_services.get_naics.get
This procedure obtains data for the Facility NAICS Codes section in Facility/System Characteristics of the Detailed Facility Report.


```js
epa_gov_dfr.dfr_rest_services.get_naics.get({
  "p_id": ""
}, context)
```

#### Input
* input `object`
  * output `string` (values: JSONP, JSON, XML): Output Format Flag.  Enter one of the following keywords:
  * p_id **required** `string`: Either the EPA Facility Registry System's REGISTRY_ID for a facility or the facility identifier from the following EPA Systems: RCRAINFO (HANDLER_ID), AFS (SCSC), ICIS NPDES (NPDES_ID), or SDWIS (PWS_ID).
  * callback `string`: JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.

#### Output
* output `object`: Root Object
  * Results **required** [dfra2_Results](#dfra2_results)

### dfr_rest_services.get_naics.post
This procedure obtains data for the Facility NAICS Codes section in Facility/System Characteristics of the Detailed Facility Report.


```js
epa_gov_dfr.dfr_rest_services.get_naics.post({
  "p_id": ""
}, context)
```

#### Input
* input `object`
  * output `string` (values: JSONP, JSON, XML): Output Format Flag.  Enter one of the following keywords:
  * p_id **required** `string`: Either the EPA Facility Registry System's REGISTRY_ID for a facility or the facility identifier from the following EPA Systems: RCRAINFO (HANDLER_ID), AFS (SCSC), ICIS NPDES (NPDES_ID), or SDWIS (PWS_ID).
  * callback `string`: JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.

#### Output
* output `object`: Root Object
  * Results **required** [dfra2_Results](#dfra2_results)

### dfr_rest_services.get_notices.get
This procedure obtains data for the Notices/Informal Actions section of the DFR.


```js
epa_gov_dfr.dfr_rest_services.get_notices.get({
  "p_id": ""
}, context)
```

#### Input
* input `object`
  * output `string` (values: JSONP, JSON, XML): Output Format Flag.  Enter one of the following keywords:
  * p_id **required** `string`: Either the EPA Facility Registry System's REGISTRY_ID for a facility or the facility identifier from the following EPA Systems: RCRAINFO (HANDLER_ID), AFS (SCSC), ICIS NPDES (NPDES_ID), or SDWIS (PWS_ID).
  * callback `string`: JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.

#### Output
* output `object`: Root Object
  * Results **required** [dfrg_Results](#dfrg_results)

### dfr_rest_services.get_notices.post
This procedure obtains data for the Notices/Informal Actions section of the DFR.


```js
epa_gov_dfr.dfr_rest_services.get_notices.post({
  "p_id": ""
}, context)
```

#### Input
* input `object`
  * output `string` (values: JSONP, JSON, XML): Output Format Flag.  Enter one of the following keywords:
  * p_id **required** `string`: Either the EPA Facility Registry System's REGISTRY_ID for a facility or the facility identifier from the following EPA Systems: RCRAINFO (HANDLER_ID), AFS (SCSC), ICIS NPDES (NPDES_ID), or SDWIS (PWS_ID).
  * callback `string`: JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.

#### Output
* output `object`: Root Object
  * Results **required** [dfrg_Results](#dfrg_results)

### dfr_rest_services.get_permits.get
This procedure obtains data for the following sections of the Detailed Facility Report.
> Facility Information (FRS) in the Facility Summary.
> Regulatory Interests in the Facility Summary.
> Also Reports in the Facility Summary.
> Facility/System Characteristics in Facility/System Characteristics.
> Facility Contact Information in Facility/System Characteristics.
> Facility SIC Codes in Facility/System Characteristics section.
> Facility NAICS Codes in Facility/System Characteristics section.


```js
epa_gov_dfr.dfr_rest_services.get_permits.get({
  "p_id": ""
}, context)
```

#### Input
* input `object`
  * output `string` (values: JSONP, JSON, XML): Output Format Flag.  Enter one of the following keywords:
  * p_id **required** `string`: Either the EPA Facility Registry System's REGISTRY_ID for a facility or the facility identifier from the following EPA Systems: RCRAINFO (HANDLER_ID), AFS (SCSC), ICIS NPDES (NPDES_ID), or SDWIS (PWS_ID).
  * callback `string`: JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.

#### Output
* output `object`: Root Object
  * Results **required** [dfrg1_Results](#dfrg1_results)

### dfr_rest_services.get_permits.post
This procedure obtains data for the following sections of the Detailed Facility Report.
> Facility Information (FRS) in the Facility Summary.
> Regulatory Interests in the Facility Summary.
> Also Reports in the Facility Summary.
> Facility/System Characteristics in Facility/System Characteristics.
> Facility Contact Information in Facility/System Characteristics.
> Facility SIC Codes in Facility/System Characteristics section.
> Facility NAICS Codes in Facility/System Characteristics section.


```js
epa_gov_dfr.dfr_rest_services.get_permits.post({
  "p_id": ""
}, context)
```

#### Input
* input `object`
  * output `string` (values: JSONP, JSON, XML): Output Format Flag.  Enter one of the following keywords:
  * p_id **required** `string`: Either the EPA Facility Registry System's REGISTRY_ID for a facility or the facility identifier from the following EPA Systems: RCRAINFO (HANDLER_ID), AFS (SCSC), ICIS NPDES (NPDES_ID), or SDWIS (PWS_ID).
  * callback `string`: JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.

#### Output
* output `object`: Root Object
  * Results **required** [dfrg1_Results](#dfrg1_results)

### dfr_rest_services.get_rcra_compliance.get
This procedure obtains data for the RCRA Compliance section of the DFR.


```js
epa_gov_dfr.dfr_rest_services.get_rcra_compliance.get({
  "p_id": ""
}, context)
```

#### Input
* input `object`
  * output `string` (values: JSONP, JSON, XML): Output Format Flag.  Enter one of the following keywords:
  * p_id **required** `string`: Either the EPA Facility Registry System's REGISTRY_ID for a facility or the facility identifier from the following EPA Systems: RCRAINFO (HANDLER_ID), AFS (SCSC), ICIS NPDES (NPDES_ID), or SDWIS (PWS_ID).
  * callback `string`: JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.

#### Output
* output `object`: Root Object
  * Results **required** [dfrh_Results](#dfrh_results)

### dfr_rest_services.get_rcra_compliance.post
This procedure obtains data for the RCRA Compliance section of the DFR.


```js
epa_gov_dfr.dfr_rest_services.get_rcra_compliance.post({
  "p_id": ""
}, context)
```

#### Input
* input `object`
  * output `string` (values: JSONP, JSON, XML): Output Format Flag.  Enter one of the following keywords:
  * p_id **required** `string`: Either the EPA Facility Registry System's REGISTRY_ID for a facility or the facility identifier from the following EPA Systems: RCRAINFO (HANDLER_ID), AFS (SCSC), ICIS NPDES (NPDES_ID), or SDWIS (PWS_ID).
  * callback `string`: JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.

#### Output
* output `object`: Root Object
  * Results **required** [dfrh_Results](#dfrh_results)

### dfr_rest_services.get_sdwa_lead_and_copper.get
This procedure obtains data for the SDWA, Lead and Copper Rule section of the DFR.


```js
epa_gov_dfr.dfr_rest_services.get_sdwa_lead_and_copper.get({
  "p_id": ""
}, context)
```

#### Input
* input `object`
  * output `string` (values: JSONP, JSON, XML): Output Format Flag.  Enter one of the following keywords:
  * p_id **required** `string`: Either the EPA Facility Registry System's REGISTRY_ID for a facility or the facility identifier from the following EPA Systems: RCRAINFO (HANDLER_ID), AFS (SCSC), ICIS NPDES (NPDES_ID), or SDWIS (PWS_ID).
  * callback `string`: JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.

#### Output
* output `object`: Root Object
  * Results **required** [dfrk_Results](#dfrk_results)

### dfr_rest_services.get_sdwa_lead_and_copper.post
This procedure obtains data for the SDWA, Lead and Copper Rule section of the DFR.


```js
epa_gov_dfr.dfr_rest_services.get_sdwa_lead_and_copper.post({
  "p_id": ""
}, context)
```

#### Input
* input `object`
  * output `string` (values: JSONP, JSON, XML): Output Format Flag.  Enter one of the following keywords:
  * p_id **required** `string`: Either the EPA Facility Registry System's REGISTRY_ID for a facility or the facility identifier from the following EPA Systems: RCRAINFO (HANDLER_ID), AFS (SCSC), ICIS NPDES (NPDES_ID), or SDWIS (PWS_ID).
  * callback `string`: JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.

#### Output
* output `object`: Root Object
  * Results **required** [dfrk_Results](#dfrk_results)

### dfr_rest_services.get_sdwa_sanitary_surveys.get
This procedure obtains data for the SDWA, Sanitary Surveys section of the DFR.


```js
epa_gov_dfr.dfr_rest_services.get_sdwa_sanitary_surveys.get({
  "p_id": ""
}, context)
```

#### Input
* input `object`
  * output `string` (values: JSONP, JSON, XML): Output Format Flag.  Enter one of the following keywords:
  * p_id **required** `string`: Either the EPA Facility Registry System's REGISTRY_ID for a facility or the facility identifier from the following EPA Systems: RCRAINFO (HANDLER_ID), AFS (SCSC), ICIS NPDES (NPDES_ID), or SDWIS (PWS_ID).
  * callback `string`: JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.

#### Output
* output `object`: Root Object
  * Results **required** [dfrj_Results](#dfrj_results)

### dfr_rest_services.get_sdwa_sanitary_surveys.post
This procedure obtains data for the SDWA, Sanitary Surveys section of the DFR.


```js
epa_gov_dfr.dfr_rest_services.get_sdwa_sanitary_surveys.post({
  "p_id": ""
}, context)
```

#### Input
* input `object`
  * output `string` (values: JSONP, JSON, XML): Output Format Flag.  Enter one of the following keywords:
  * p_id **required** `string`: Either the EPA Facility Registry System's REGISTRY_ID for a facility or the facility identifier from the following EPA Systems: RCRAINFO (HANDLER_ID), AFS (SCSC), ICIS NPDES (NPDES_ID), or SDWIS (PWS_ID).
  * callback `string`: JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.

#### Output
* output `object`: Root Object
  * Results **required** [dfrj_Results](#dfrj_results)

### dfr_rest_services.get_sdwa_site_visits.get
This procedure obtains data for the SDWA, Sanitary Site Visits section of the DFR.


```js
epa_gov_dfr.dfr_rest_services.get_sdwa_site_visits.get({
  "p_id": ""
}, context)
```

#### Input
* input `object`
  * output `string` (values: JSONP, JSON, XML): Output Format Flag.  Enter one of the following keywords:
  * p_id **required** `string`: Either the EPA Facility Registry System's REGISTRY_ID for a facility or the facility identifier from the following EPA Systems: RCRAINFO (HANDLER_ID), AFS (SCSC), ICIS NPDES (NPDES_ID), or SDWIS (PWS_ID).
  * callback `string`: JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.

#### Output
* output `object`: Root Object
  * Results **required** [dfri_Results](#dfri_results)

### dfr_rest_services.get_sdwa_site_visits.post
This procedure obtains data for the SDWA, Sanitary Site Visits section of the DFR.


```js
epa_gov_dfr.dfr_rest_services.get_sdwa_site_visits.post({
  "p_id": ""
}, context)
```

#### Input
* input `object`
  * output `string` (values: JSONP, JSON, XML): Output Format Flag.  Enter one of the following keywords:
  * p_id **required** `string`: Either the EPA Facility Registry System's REGISTRY_ID for a facility or the facility identifier from the following EPA Systems: RCRAINFO (HANDLER_ID), AFS (SCSC), ICIS NPDES (NPDES_ID), or SDWIS (PWS_ID).
  * callback `string`: JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.

#### Output
* output `object`: Root Object
  * Results **required** [dfri_Results](#dfri_results)

### dfr_rest_services.get_sdwa_violations.get
This procedure obtains data for the SDWA Violations section of the DFR.


```js
epa_gov_dfr.dfr_rest_services.get_sdwa_violations.get({
  "p_id": ""
}, context)
```

#### Input
* input `object`
  * output `string` (values: JSONP, JSON, XML): Output Format Flag.  Enter one of the following keywords:
  * p_id **required** `string`: Either the EPA Facility Registry System's REGISTRY_ID for a facility or the facility identifier from the following EPA Systems: RCRAINFO (HANDLER_ID), AFS (SCSC), ICIS NPDES (NPDES_ID), or SDWIS (PWS_ID).
  * callback `string`: JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.

#### Output
* output `object`: Root Object
  * Results **required** [dfrf_Results](#dfrf_results)

### dfr_rest_services.get_sdwa_violations.post
This procedure obtains data for the SDWA Violations section of the DFR.


```js
epa_gov_dfr.dfr_rest_services.get_sdwa_violations.post({
  "p_id": ""
}, context)
```

#### Input
* input `object`
  * output `string` (values: JSONP, JSON, XML): Output Format Flag.  Enter one of the following keywords:
  * p_id **required** `string`: Either the EPA Facility Registry System's REGISTRY_ID for a facility or the facility identifier from the following EPA Systems: RCRAINFO (HANDLER_ID), AFS (SCSC), ICIS NPDES (NPDES_ID), or SDWIS (PWS_ID).
  * callback `string`: JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.

#### Output
* output `object`: Root Object
  * Results **required** [dfrf_Results](#dfrf_results)

### dfr_rest_services.get_sdwis_compliance.get
This procedure obtains data for the SDWA Compliance section of the DFR.


```js
epa_gov_dfr.dfr_rest_services.get_sdwis_compliance.get({
  "p_id": ""
}, context)
```

#### Input
* input `object`
  * output `string` (values: JSONP, JSON, XML): Output Format Flag.  Enter one of the following keywords:
  * p_id **required** `string`: Either the EPA Facility Registry System's REGISTRY_ID for a facility or the facility identifier from the following EPA Systems: RCRAINFO (HANDLER_ID), AFS (SCSC), ICIS NPDES (NPDES_ID), or SDWIS (PWS_ID).
  * callback `string`: JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.

#### Output
* output `object`: Root Object
  * Results **required** [dfrl_Results](#dfrl_results)

### dfr_rest_services.get_sdwis_compliance.post
This procedure obtains data for the SDWA Compliance section of the DFR.


```js
epa_gov_dfr.dfr_rest_services.get_sdwis_compliance.post({
  "p_id": ""
}, context)
```

#### Input
* input `object`
  * output `string` (values: JSONP, JSON, XML): Output Format Flag.  Enter one of the following keywords:
  * p_id **required** `string`: Either the EPA Facility Registry System's REGISTRY_ID for a facility or the facility identifier from the following EPA Systems: RCRAINFO (HANDLER_ID), AFS (SCSC), ICIS NPDES (NPDES_ID), or SDWIS (PWS_ID).
  * callback `string`: JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.

#### Output
* output `object`: Root Object
  * Results **required** [dfrl_Results](#dfrl_results)

### dfr_rest_services.get_sic_codes.get
This procedure obtains data for the Facility SIC Codes section in Facility/System Characteristics of the Detailed Facility Report.


```js
epa_gov_dfr.dfr_rest_services.get_sic_codes.get({
  "p_id": ""
}, context)
```

#### Input
* input `object`
  * output `string` (values: JSONP, JSON, XML): Output Format Flag.  Enter one of the following keywords:
  * p_id **required** `string`: Either the EPA Facility Registry System's REGISTRY_ID for a facility or the facility identifier from the following EPA Systems: RCRAINFO (HANDLER_ID), AFS (SCSC), ICIS NPDES (NPDES_ID), or SDWIS (PWS_ID).
  * callback `string`: JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.

#### Output
* output `object`: Root Object
  * Results **required** [dfrg2_Results](#dfrg2_results)

### dfr_rest_services.get_sic_codes.post
This procedure obtains data for the Facility SIC Codes section in Facility/System Characteristics of the Detailed Facility Report.


```js
epa_gov_dfr.dfr_rest_services.get_sic_codes.post({
  "p_id": ""
}, context)
```

#### Input
* input `object`
  * output `string` (values: JSONP, JSON, XML): Output Format Flag.  Enter one of the following keywords:
  * p_id **required** `string`: Either the EPA Facility Registry System's REGISTRY_ID for a facility or the facility identifier from the following EPA Systems: RCRAINFO (HANDLER_ID), AFS (SCSC), ICIS NPDES (NPDES_ID), or SDWIS (PWS_ID).
  * callback `string`: JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.

#### Output
* output `object`: Root Object
  * Results **required** [dfrg2_Results](#dfrg2_results)

### dfr_rest_services.get_spatial_metadata.get
Returns an object with the facility coordinate spatial metadata.


```js
epa_gov_dfr.dfr_rest_services.get_spatial_metadata.get({
  "p_id": ""
}, context)
```

#### Input
* input `object`
  * output `string` (values: JSONP, JSON, XML): Output Format Flag.  Enter one of the following keywords:
  * p_id **required** `string`: Either the EPA Facility Registry System's REGISTRY_ID for a facility or the facility identifier from the following EPA Systems: RCRAINFO (HANDLER_ID), AFS (SCSC), ICIS NPDES (NPDES_ID), or SDWIS (PWS_ID).
  * callback `string`: JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.

#### Output
* output `object`: Root Object
  * Results **required** [dfrg3_Results](#dfrg3_results)

### dfr_rest_services.get_spatial_metadata.post
Returns an object with the facility coordinate spatial metadata.


```js
epa_gov_dfr.dfr_rest_services.get_spatial_metadata.post({
  "p_id": ""
}, context)
```

#### Input
* input `object`
  * output `string` (values: JSONP, JSON, XML): Output Format Flag.  Enter one of the following keywords:
  * p_id **required** `string`: Either the EPA Facility Registry System's REGISTRY_ID for a facility or the facility identifier from the following EPA Systems: RCRAINFO (HANDLER_ID), AFS (SCSC), ICIS NPDES (NPDES_ID), or SDWIS (PWS_ID).
  * callback `string`: JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.

#### Output
* output `object`: Root Object
  * Results **required** [dfrg3_Results](#dfrg3_results)

### dfr_rest_services.get_tri_history.get
This procedure obtains data for the TRI History section of the DFR.


```js
epa_gov_dfr.dfr_rest_services.get_tri_history.get({
  "p_id": ""
}, context)
```

#### Input
* input `object`
  * output `string` (values: JSONP, JSON, XML): Output Format Flag.  Enter one of the following keywords:
  * p_id **required** `string`: Either the EPA Facility Registry System's REGISTRY_ID for a facility or the facility identifier from the following EPA Systems: RCRAINFO (HANDLER_ID), AFS (SCSC), ICIS NPDES (NPDES_ID), or SDWIS (PWS_ID).
  * callback `string`: JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.

#### Output
* output `object`: Root Object
  * Results **required** [dfrm_Results](#dfrm_results)

### dfr_rest_services.get_tri_history.post
This procedure obtains data for the TRI History section of the DFR.


```js
epa_gov_dfr.dfr_rest_services.get_tri_history.post({
  "p_id": ""
}, context)
```

#### Input
* input `object`
  * output `string` (values: JSONP, JSON, XML): Output Format Flag.  Enter one of the following keywords:
  * p_id **required** `string`: Either the EPA Facility Registry System's REGISTRY_ID for a facility or the facility identifier from the following EPA Systems: RCRAINFO (HANDLER_ID), AFS (SCSC), ICIS NPDES (NPDES_ID), or SDWIS (PWS_ID).
  * callback `string`: JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.

#### Output
* output `object`: Root Object
  * Results **required** [dfrm_Results](#dfrm_results)

### dfr_rest_services.get_tri_releases.get
This procedrue obtains data for the TRI Releases section of the DFR.


```js
epa_gov_dfr.dfr_rest_services.get_tri_releases.get({
  "p_id": ""
}, context)
```

#### Input
* input `object`
  * output `string` (values: JSONP, JSON, XML): Output Format Flag.  Enter one of the following keywords:
  * p_id **required** `string`: Either the EPA Facility Registry System's REGISTRY_ID for a facility or the facility identifier from the following EPA Systems: RCRAINFO (HANDLER_ID), AFS (SCSC), ICIS NPDES (NPDES_ID), or SDWIS (PWS_ID).
  * callback `string`: JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.

#### Output
* output `object`: Root Object
  * Results **required** [dfrn_Results](#dfrn_results)

### dfr_rest_services.get_tri_releases.post
This procedrue obtains data for the TRI Releases section of the DFR.


```js
epa_gov_dfr.dfr_rest_services.get_tri_releases.post({
  "p_id": ""
}, context)
```

#### Input
* input `object`
  * output `string` (values: JSONP, JSON, XML): Output Format Flag.  Enter one of the following keywords:
  * p_id **required** `string`: Either the EPA Facility Registry System's REGISTRY_ID for a facility or the facility identifier from the following EPA Systems: RCRAINFO (HANDLER_ID), AFS (SCSC), ICIS NPDES (NPDES_ID), or SDWIS (PWS_ID).
  * callback `string`: JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.

#### Output
* output `object`: Root Object
  * Results **required** [dfrn_Results](#dfrn_results)

### dfr_rest_services.get_tribes.get
This procedure obtains data for the Tribes and Reservations section of the DFR.


```js
epa_gov_dfr.dfr_rest_services.get_tribes.get({
  "p_id": ""
}, context)
```

#### Input
* input `object`
  * output `string` (values: JSONP, JSON, XML): Output Format Flag.  Enter one of the following keywords:
  * p_id **required** `string`: Either the EPA Facility Registry System's REGISTRY_ID for a facility or the facility identifier from the following EPA Systems: RCRAINFO (HANDLER_ID), AFS (SCSC), ICIS NPDES (NPDES_ID), or SDWIS (PWS_ID).
  * callback `string`: JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.

#### Output
* output `object`: Root Object
  * Results **required** [dfro_Results](#dfro_results)

### dfr_rest_services.get_tribes.post
This procedure obtains data for the Tribes and Reservations section of the DFR.


```js
epa_gov_dfr.dfr_rest_services.get_tribes.post({
  "p_id": ""
}, context)
```

#### Input
* input `object`
  * output `string` (values: JSONP, JSON, XML): Output Format Flag.  Enter one of the following keywords:
  * p_id **required** `string`: Either the EPA Facility Registry System's REGISTRY_ID for a facility or the facility identifier from the following EPA Systems: RCRAINFO (HANDLER_ID), AFS (SCSC), ICIS NPDES (NPDES_ID), or SDWIS (PWS_ID).
  * callback `string`: JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.

#### Output
* output `object`: Root Object
  * Results **required** [dfro_Results](#dfro_results)

### dfr_rest_services.get_water_quality.get
This procedure obtains data for the Water Quality section of the DFR.


```js
epa_gov_dfr.dfr_rest_services.get_water_quality.get({
  "p_id": ""
}, context)
```

#### Input
* input `object`
  * output `string` (values: JSONP, JSON, XML): Output Format Flag.  Enter one of the following keywords:
  * p_id **required** `string`: Either the EPA Facility Registry System's REGISTRY_ID for a facility or the facility identifier from the following EPA Systems: RCRAINFO (HANDLER_ID), AFS (SCSC), ICIS NPDES (NPDES_ID), or SDWIS (PWS_ID).
  * p_radius `string`
  * callback `string`: JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.

#### Output
* output `object`: Root Object
  * Results **required** [dfrp_Results](#dfrp_results)

### dfr_rest_services.get_water_quality.post
This procedure obtains data for the Water Quality section of the DFR.


```js
epa_gov_dfr.dfr_rest_services.get_water_quality.post({
  "p_id": ""
}, context)
```

#### Input
* input `object`
  * output `string` (values: JSONP, JSON, XML): Output Format Flag.  Enter one of the following keywords:
  * p_id **required** `string`: Either the EPA Facility Registry System's REGISTRY_ID for a facility or the facility identifier from the following EPA Systems: RCRAINFO (HANDLER_ID), AFS (SCSC), ICIS NPDES (NPDES_ID), or SDWIS (PWS_ID).
  * p_radius `string`
  * callback `string`: JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.

#### Output
* output `object`: Root Object
  * Results **required** [dfrp_Results](#dfrp_results)



## Definitions

### dfr0_Qtr12Header
* dfr0_Qtr12Header `object`: Header Object
  * Qtr10End **required** `string`: Date indicating the end of Quarter 10.
  * Qtr10Start **required** `string`: Date indicating the beginning of Quarter 10.
  * Qtr11End **required** `string`: Date indicating the end of Quarter 11.
  * Qtr11Start **required** `string`: Date indicating the beginning of Quarter 11.
  * Qtr12End **required** `string`: Date indicating the end of Quarter 12.
  * Qtr12Start **required** `string`: Date indicating the beginning of Quarter 12.
  * Qtr1End **required** `string`: Date indicating the end of Quarter 1.
  * Qtr1Start **required** `string`: Date indicating the beginning of Quarter 1.
  * Qtr2End **required** `string`: Date indicating the end of Quarter 2.
  * Qtr2Start **required** `string`: Date indicating the beginning of Quarter 2.
  * Qtr3End **required** `string`: Date indicating the end of Quarter 3.
  * Qtr3Start **required** `string`: Date indicating the beginning of Quarter 3.
  * Qtr4End **required** `string`: Date indicating the end of Quarter 4.
  * Qtr4Start **required** `string`: Date indicating the beginning of Quarter 4.
  * Qtr5End **required** `string`: Date indicating the end of Quarter 5.
  * Qtr5Start **required** `string`: Date indicating the beginning of Quarter 5.
  * Qtr6End **required** `string`: Date indicating the end of Quarter 6.
  * Qtr6Start **required** `string`: Date indicating the beginning of Quarter 6.
  * Qtr7End **required** `string`: Date indicating the end of Quarter 7.
  * Qtr7Start **required** `string`: Date indicating the beginning of Quarter 7.
  * Qtr8End **required** `string`: Date indicating the end of Quarter 8.
  * Qtr8Start **required** `string`: Date indicating the beginning of Quarter 8.
  * Qtr9End **required** `string`: Date indicating the end of Quarter 9.
  * Qtr9Start **required** `string`: Date indicating the beginning of Quarter 9.

### dfr0_Qtr12Status
* dfr0_Qtr12Status `object`: Status Object
  * Qtr10Status **required** `string`: The relevant status for the quarter.
  * Qtr11Status **required** `string`: The relevant status for the quarter.
  * Qtr12Status **required** `string`: The relevant status for the quarter.
  * Qtr1Status **required** `string`: The relevant status for the quarter.
  * Qtr2Status **required** `string`: The relevant status for the quarter.
  * Qtr3Status **required** `string`: The relevant status for the quarter.
  * Qtr4Status **required** `string`: The relevant status for the quarter.
  * Qtr5Status **required** `string`: The relevant status for the quarter.
  * Qtr6Status **required** `string`: The relevant status for the quarter.
  * Qtr7Status **required** `string`: The relevant status for the quarter.
  * Qtr8Status **required** `string`: The relevant status for the quarter.
  * Qtr9Status **required** `string`: The relevant status for the quarter.
  * SourceID **required** `string`: Unique Identifier assigned by EPA.

### dfr0_Qtr13Header
* dfr0_Qtr13Header `object`: Header Object
  * Qtr10End **required** `string`: Date indicating the end of Quarter 10.
  * Qtr10Start **required** `string`: Date indicating the beginning of Quarter 10.
  * Qtr11End **required** `string`: Date indicating the end of Quarter 11.
  * Qtr11Start **required** `string`: Date indicating the beginning of Quarter 11.
  * Qtr12End **required** `string`: Date indicating the end of Quarter 12.
  * Qtr12Start **required** `string`: Date indicating the beginning of Quarter 12.
  * Qtr13End **required** `string`: Date indicating the end of Quarter 13.
  * Qtr13Start **required** `string`: Date indicating the beginning of Quarter 13.
  * Qtr1End **required** `string`: Date indicating the end of Quarter 1.
  * Qtr1Start **required** `string`: Date indicating the beginning of Quarter 1.
  * Qtr2End **required** `string`: Date indicating the end of Quarter 2.
  * Qtr2Start **required** `string`: Date indicating the beginning of Quarter 2.
  * Qtr3End **required** `string`: Date indicating the end of Quarter 3.
  * Qtr3Start **required** `string`: Date indicating the beginning of Quarter 3.
  * Qtr4End **required** `string`: Date indicating the end of Quarter 4.
  * Qtr4Start **required** `string`: Date indicating the beginning of Quarter 4.
  * Qtr5End **required** `string`: Date indicating the end of Quarter 5.
  * Qtr5Start **required** `string`: Date indicating the beginning of Quarter 5.
  * Qtr6End **required** `string`: Date indicating the end of Quarter 6.
  * Qtr6Start **required** `string`: Date indicating the beginning of Quarter 6.
  * Qtr7End **required** `string`: Date indicating the end of Quarter 7.
  * Qtr7Start **required** `string`: Date indicating the beginning of Quarter 7.
  * Qtr8End **required** `string`: Date indicating the end of Quarter 8.
  * Qtr8Start **required** `string`: Date indicating the beginning of Quarter 8.
  * Qtr9End **required** `string`: Date indicating the end of Quarter 9.
  * Qtr9Start **required** `string`: Date indicating the beginning of Quarter 9.

### dfr0_Qtr13Status
* dfr0_Qtr13Status `object`: Status Object
  * Qtr10Status **required** `string`: The relevant status for the quarter.
  * Qtr11Status **required** `string`: The relevant status for the quarter.
  * Qtr12Status **required** `string`: The relevant status for the quarter.
  * Qtr13Status **required** `string`: The relevant status for the quarter.
  * Qtr1Status **required** `string`: The relevant status for the quarter.
  * Qtr2Status **required** `string`: The relevant status for the quarter.
  * Qtr3Status **required** `string`: The relevant status for the quarter.
  * Qtr4Status **required** `string`: The relevant status for the quarter.
  * Qtr5Status **required** `string`: The relevant status for the quarter.
  * Qtr6Status **required** `string`: The relevant status for the quarter.
  * Qtr7Status **required** `string`: The relevant status for the quarter.
  * Qtr8Status **required** `string`: The relevant status for the quarter.
  * Qtr9Status **required** `string`: The relevant status for the quarter.
  * SourceID **required** `string`: Unique Identifier assigned by EPA.

### dfr10_CWACSCompliance
* dfr10_CWACSCompliance `object`: CWA CS Compliance Object
  * Header [dfr0_Qtr13Header](#dfr0_qtr13header)
  * Sources `array`
    * items [dfr10_Violations](#dfr10_violations)

### dfr10_Violation
* dfr10_Violation `object`: Violation Object
  * NPDESViolationId **required** `string`: The unique identifier in ICIS-NPDES for the NPDES Violation
  * Qtr10Status **required** `string`: The relevant status for the quarter.
  * Qtr10Value **required** `string`
  * Qtr11Status **required** `string`: The relevant status for the quarter.
  * Qtr11Value **required** `string`
  * Qtr12Status **required** `string`: The relevant status for the quarter.
  * Qtr12Value **required** `string`
  * Qtr13Status **required** `string`: The relevant status for the quarter.
  * Qtr13Value **required** `string`
  * Qtr1Status **required** `string`: The relevant status for the quarter.
  * Qtr1Value **required** `string`
  * Qtr2Status **required** `string`: The relevant status for the quarter.
  * Qtr2Value **required** `string`
  * Qtr3Status **required** `string`: The relevant status for the quarter.
  * Qtr3Value **required** `string`
  * Qtr4Status **required** `string`: The relevant status for the quarter.
  * Qtr4Value **required** `string`
  * Qtr5Status **required** `string`: The relevant status for the quarter.
  * Qtr5Value **required** `string`
  * Qtr6Status **required** `string`: The relevant status for the quarter.
  * Qtr6Value **required** `string`
  * Qtr7Status **required** `string`: The relevant status for the quarter.
  * Qtr7Value **required** `string`
  * Qtr8Status **required** `string`: The relevant status for the quarter.
  * Qtr8Value **required** `string`
  * Qtr9Status **required** `string`: The relevant status for the quarter.
  * Qtr9Value **required** `string`
  * SourceID **required** `string`: Unique Identifier assigned by EPA.
  * ViolationDesc **required** `string`: A description of which type of violation has occurred

### dfr10_Violations
* dfr10_Violations `object`: Violations Object
  * Violations **required** `array`
    * items [dfr10_Violation](#dfr10_violation)

### dfr1_Results
* dfr1_Results `object`: Results Object
  * AirQuality [dfr6_AirQuality](#dfr6_airquality)
  * Message **required** `string`: Field to record messages (typically performance-related) about packet processing

### dfr2_Results
* dfr2_Results `object`: Results Object
  * ComplianceHistory [dfrV_ComplianceHistory](#dfrv_compliancehistory)
  * Message **required** `string`: Field to record messages (typically performance-related) about packet processing

### dfr3_Results
* dfr3_Results `object`: Results Object
  * ComplianceSummary [dfrD_ComplianceSummary](#dfrd_compliancesummary)
  * Message **required** `string`: Field to record messages (typically performance-related) about packet processing

### dfr4_CAEDDocuments
* dfr4_CAEDDocuments `object`: CAED Documents
  * Dummy `string`

### dfr4_MapData
* dfr4_MapData `object`: Map Data Object
  * ICON **required** `string`: Name of each individual icon file within the URL base
  * LAT **required** `string`: The latitude of the facility in degrees, to four decimal places
  * LON **required** `string`: The longitude of the facility in degrees, to four decimal places
  * NAME **required** `string`: For DFR, this is the Facility name. The name corresponds to the TYPE value
  * PUV **required** `string`: Pop up value. Combine with PopUpBaseURL to give the popup for the facility
  * TYPE **required** `string`: For DFR, this is always facility

### dfr4_MultipleFRSFacilities
* dfr4_MultipleFRSFacilities `object`: Multiple FRS Facilities Object
  * RegistryIDs `array`
    * items [dfr4_RegistryIDs](#dfr4_registryids)

### dfr4_NAICS
* dfr4_NAICS `object`: NAICS Object
  * Sources **required** `array`
    * items [dfrz_NAICS](#dfrz_naics)

### dfr4_Permits
* dfr4_Permits `object`: Permits Object
  * AccuracyScore **required** `string`: ??
  * AccuracyValue **required** `string`: ??
  * Areas **required** `string`: Clean Air Act stationary source program subpart designation, Clean Water Act-NPDES permit component(s), and/or other Resource Conservation and Recovery Act designations, if any.
  * CollectDesc **required** `string`: ??
  * DQURL **required** `string`: ??
  * EPARegion **required** `string`: The EPA region in which the facility is located
  * EPASystem **required** `string`: The EPA data system in which permit and facility records are kept. EPA's Facility Registry System (FRS) links all program database records (such as permit IDs and IDs facilities use in reporting to EPA) together. The following list describes the individual data systems that are linked to from the detailed facility report: 
  * ExpDate **required** `string`: Date on which a given permit is scheduled to expire
  * FacilityCity **required** `string`: The city in which the facility is located
  * FacilityName **required** `string`: The name of the facility.
  * FacilityState **required** `string`: The state in which the facility is located
  * FacilityStatus **required** `string`: The Air Program Status is given for each source ID (Operating; Planned; Under construction; Temporarily closed;  Permanently closed; and Seasonal)
  * FacilityStreet **required** `string`: The street address of the facility
  * FacilityZip **required** `string`: The zip code of the area in which the facility is located
  * HasIcisSsoRpt **required** `string`: ??
  * HdatumDesc **required** `string`: ??
  * IndianCountry **required** `string`: Indicates whether the facility is located in Indian Country
  * Latitude **required** `string`: The latitude of the facility or permit holder as maintained in each data system.
  * Longitude **required** `string`: The longitude of the facility or permit holder as maintained in each data system
  * NAICS **required** `string`: The North American Industry Classification System codes
  * RefPointDesc **required** `string`: ??
  * SIC **required** `string`: Standard Industrial Classification codes
  * Scale **required** `string`: ??
  * SourceID **required** `string`: Unique Identifier assigned by EPA.
  * Statute **required** `string`: The name of the statute associated with each of the permits and identifiers linked to the facility: 
  * Universe **required** `string`: This field provides further description on type of permit or record for each data system as follows:

### dfr4_ProgramDates
* dfr4_ProgramDates `object`: Program Dates Object
  * EndDate **required** `string`: End date for the date range of interest. Formatted as mm/dd/yyyy
  * Program **required** `string`: The source database for the EPA programs information.
  * StartDate **required** `string`: Starting date for the date range of interest. Formatted as mm/dd/yyyy

### dfr4_RegistryIDs
* dfr4_RegistryIDs `object`: Registry IDs Object
  * EPASystem `string`: The EPA data system in which permit and facility records are kept. EPA's Facility Registry System (FRS) links all program database records (such as permit IDs and IDs facilities use in reporting to EPA) together. The following list describes the individual data systems that are linked to from the detailed facility report: 
  * FacilityCity `string`: The city in which the facility is located
  * FacilityCounty `string`
  * FacilityName `string`: The name of the facility.
  * FacilityState `string`: The state in which the facility is located
  * FacilityStreet `string`: The street address of the facility
  * FacilityZip `string`: The zip code of the area in which the facility is located
  * RegistryId `string`: 12-digit Facility Registry Service (FRS) identification number.  FRS uniquely identifies a facility by assigning an identification number (FRS ID), and uses this FRS ID to link together all EPA regulatory program database records

### dfr4_Reports
* dfr4_Reports `object`: Reports Object
  * HasPollRpt **required** `string`: ???

### dfr4_Results
* dfr4_Results `object`: Results Object
  * AirCompliance [dfr5_AirCompliance](#dfr5_aircompliance)
  * AirQuality [dfr6_AirQuality](#dfr6_airquality)
  * CAEDDocuments `array`
    * items [dfr4_CAEDDocuments](#dfr4_caeddocuments)
  * CWA3YrCompliance [dfr7_CWA3YrCompliance](#dfr7_cwa3yrcompliance)
  * CWACSCompliance [dfr10_CWACSCompliance](#dfr10_cwacscompliance)
  * CWAEffluentALRExceedences [dfr8_CWAEffluentALRExceedences](#dfr8_cwaeffluentalrexceedences)
  * CWAEffluentCompliance [dfr9_CWAEffluentCompliance](#dfr9_cwaeffluentcompliance)
  * CWAPSCompliance [dfrA_CWAPSCompliance](#dfra_cwapscompliance)
  * CWARNCCompliance [dfrB_CWARNCCompliance](#dfrb_cwarnccompliance)
  * CWASECompliance [dfrC_CWASECompliance](#dfrc_cwasecompliance)
  * ComplianceHistory [dfrV_ComplianceHistory](#dfrv_compliancehistory)
  * ComplianceSummary [dfrD_ComplianceSummary](#dfrd_compliancesummary)
  * Demographics [dfrE_Demographics](#dfre_demographics)
  * EnforcementComplianceSummaries [dfrF_EnforcementComplianceSummaries](#dfrf_enforcementcompliancesummaries)
  * FormalActions [dfrG_FormalActions](#dfrg_formalactions)
  * ICISFormalActions [dfrH_ICISFormalActions](#dfrh_icisformalactions)
  * InspectionEnforcementSummary [dfrI_InspectionEnforcementSummary](#dfri_inspectionenforcementsummary)
  * LeadAndCopperRule5Yr [dfrG_LeadAndCopperRule5Yr](#dfrg_leadandcopperrule5yr)
  * MapOutput [dfrJ_MapOutput](#dfrj_mapoutput)
  * Message **required** `string`: Field to record messages (typically performance-related) about packet processing
  * MultipleFRSFacilities [dfr4_MultipleFRSFacilities](#dfr4_multiplefrsfacilities)
  * NAICS [dfr4_NAICS](#dfr4_naics)
  * Notices [dfrK_Notices](#dfrk_notices)
  * Permits `array`
    * items [dfr4_Permits](#dfr4_permits)
  * RCRACompliance [dfrL_RCRACompliance](#dfrl_rcracompliance)
  * Reports [dfr4_Reports](#dfr4_reports)
  * SDWISCompliance [dfrM_SDWISCompliance](#dfrm_sdwiscompliance)
  * SIC [dfr4_SIC](#dfr4_sic)
  * SanitarySurveys [dfrN_SanitarySurveys](#dfrn_sanitarysurveys)
  * SiteVisits [dfrO_SiteVisits](#dfro_sitevisits)
  * SpatialMetadata [dfrP_SpatialMetadata](#dfrp_spatialmetadata)
  * TRIHistory [dfrQ_TRIHistory](#dfrq_trihistory)
  * TRIReleases [dfrR_TRIReleases](#dfrr_trireleases)
  * Tribes `array`
    * items [dfrS_Tribes](#dfrs_tribes)
  * ViolationsEnforcementActions [dfrT_ViolationsEnforcementActions](#dfrt_violationsenforcementactions)
  * WaterQuality [dfrU_WaterQuality](#dfru_waterquality)
  * WebFireDocuments `array`
    * items [dfr4_WebFireDocuments](#dfr4_webfiredocuments)

### dfr4_SIC
* dfr4_SIC `object`: SIC Object
  * Sources **required** `array`
    * items [dfr4_Sources](#dfr4_sources)

### dfr4_SICCodes
* dfr4_SICCodes `object`: SIC Codes Object
  * EPASystem **required** `string`: The EPA data system in which permit and facility records are kept. EPA's Facility Registry System (FRS) links all program database records (such as permit IDs and IDs facilities use in reporting to EPA) together. The following list describes the individual data systems that are linked to from the detailed facility report: 
  * SICCode **required** `string`: The Standard Industrial Classification codes applicable to the facility
  * SICDesc **required** `string`: Industries associated to the SIC code.
  * SourceID **required** `string`: Unique Identifier assigned by EPA.

### dfr4_Sources
* dfr4_Sources `object`: Source Object
  * SICCodes **required** `array`
    * items [dfr4_SICCodes](#dfr4_siccodes)

### dfr4_Summaries
* dfr4_Summaries `object`: Summaries Object
  * Cases **required** `string`: The number of EPA enforcement cases that have been brought against the facility, under the corresponding statute, within the designated time period.
  * CurrentStatus **required** `string`: The current status for the facility during the most current quarter. (No violation, noncompliance)
  * FormalActions **required** `string`: The number of formal enforcement actions that have been taken against the facility, under the corresponding statute, within the five year time period
  * InformalActions **required** `string`: The number of informal enforcement actions that have been taken against the facility, under the corresponding statute, within the five year time period
  * Inspections **required** `string`: The number of inspections/compliance evaluations that have occurred at the facility, under the corresponding statute, within the designated time period
  * LastInspection **required** `string`: The date on which the most recent inspection of the facility took place
  * QtrsInNC **required** `string`: The number of quarters, out of the last twelve quarters, in which the permit or site is considered either with violations, in non-compliance (NC) status, or in Significant Noncompliance (SNC) or High Priority Violation (HPV) status
  * QtrsInSNC **required** `string`: The number of formal enforcement actions that have been taken against the facility, under the corresponding statute, within the five year time period
  * Statute **required** `string`: The name of the statute associated with each of the permits and identifiers linked to the facility: 
  * TotalCasePenalties **required** `string`: ??
  * TotalPenalties **required** `string`: The total dollar amount of either assessed or final penalties within the five year time period

### dfr4_WebFireDocuments
* dfr4_WebFireDocuments `object`: Web Fire Documents
  * Dummy `string`

### dfr5_AirCompliance
* dfr5_AirCompliance `object`: Air Compliance Object
  * Header **required** [dfr0_Qtr12Header](#dfr0_qtr12header)
  * Sources **required** `array`
    * items [dfrc_Source](#dfrc_source)

### dfr6_AirQuality
* dfr6_AirQuality `object`: Air Quality Object
  * Lead2008Area **required** `string`: If null, the facility is not located in a designated non-attainment area. If populated, the value is the name of the non-attainment area; normally this is a city or county name
  * Ozone8hr1997Area **required** `string`: If null, the facility is not located in a designated non-attainment area. If populated, the value is the name of the non-attainment area; normally this is a city or county name
  * Ozone8hr2008Area **required** `string`: If null, the facility is not located in a designated non-attainment area. If populated, the value is the name of the non-attainment area; normally this is a city or county name
  * ParticulateMatter1997Area **required** `string`: If null, the facility is not located in a designated non-attainment area. If populated, the value is the name of the non-attainment area; normally this is a city or county name
  * ParticulateMatter2006Area **required** `string`: If null, the facility is not located in a designated non-attainment area. If populated, the value is the name of the non-attainment area; normally this is a city or county name
  * SulfurDioxide2010Area **required** `string`: If null, the facility is not located in a designated non-attainment area. If populated, the value is the name of the non-attainment area; normally this is a city or county name

### dfr7_CWA3YrCompliance
* dfr7_CWA3YrCompliance `object`: CWA 3-Year Compliance Object
  * Header [dfr0_Qtr13Header](#dfr0_qtr13header)
  * Sources `array`
    * items [dfr7_Sources](#dfr7_sources)

### dfr7_Sources
* dfr7_Sources `object`: CWA 3-Year Compliance Sources Object
  * Status **required** `array`
    * items [dfr0_Qtr13Status](#dfr0_qtr13status)

### dfr8_CWAEffluentALRExceedences
* dfr8_CWAEffluentALRExceedences `object`: CWA Effluent ALR Exceedences Object
  * Header [dfr0_Qtr13Header](#dfr0_qtr13header)
  * Sources `array`
    * items [dfr8_Sources](#dfr8_sources)

### dfr8_Parameters
* dfr8_Parameters `object`: Parameter Object
  * DischargePoint **required** `string`
  * MeasurementType **required** `string`
  * ParameterCode **required** `string`: The unique 5 digit numeric code identifying the parameter. If the code is less than 5 digits in the .CSV, append zeros to the beginning of the number (e.g., 100 is equivalent to 00100)
  * ParameterName **required** `string`: The pollutant name.
  * Qtr10Value **required** `string`
  * Qtr11Value **required** `string`
  * Qtr12Value **required** `string`
  * Qtr13Value **required** `string`
  * Qtr1Value **required** `string`
  * Qtr2Value **required** `string`
  * Qtr3Value **required** `string`
  * Qtr4Value **required** `string`
  * Qtr5Value **required** `string`
  * Qtr6Value **required** `string`
  * Qtr7Value **required** `string`
  * Qtr8Value **required** `string`
  * Qtr9Value **required** `string`
  * SourceID **required** `string`: Unique Identifier assigned by EPA.

### dfr8_Sources
* dfr8_Sources `object`: Sources Object
  * Parameters **required** `array`
    * items [dfr8_Parameters](#dfr8_parameters)

### dfr9_CWAEffluentCompliance
* dfr9_CWAEffluentCompliance `object`: CWA Effluent Compliance Object
  * Header [dfr0_Qtr13Header](#dfr0_qtr13header)
  * Sources `array`
    * items [dfr9_Parameters](#dfr9_parameters)

### dfr9_Parameter
* dfr9_Parameter `object`: CWA Effluent Compliance Parameter Object
  * DischargePoint **required** `string`
  * MeasurementType **required** `string`
  * ParameterCode **required** `string`: The unique 5 digit numeric code identifying the parameter. If the code is less than 5 digits in the .CSV, append zeros to the beginning of the number (e.g., 100 is equivalent to 00100)
  * ParameterName **required** `string`: The pollutant name.
  * Qtr10Status **required** `string`: The relevant status for the quarter.
  * Qtr10Value **required** `string`
  * Qtr11Status **required** `string`: The relevant status for the quarter.
  * Qtr11Value **required** `string`
  * Qtr12Status **required** `string`: The relevant status for the quarter.
  * Qtr12Value **required** `string`
  * Qtr13Status **required** `string`: The relevant status for the quarter.
  * Qtr13Value **required** `string`
  * Qtr1Status **required** `string`: The relevant status for the quarter.
  * Qtr1Value **required** `string`
  * Qtr2Status **required** `string`: The relevant status for the quarter.
  * Qtr2Value **required** `string`
  * Qtr3Status **required** `string`: The relevant status for the quarter.
  * Qtr3Value **required** `string`
  * Qtr4Status **required** `string`: The relevant status for the quarter.
  * Qtr4Value **required** `string`
  * Qtr5Status **required** `string`: The relevant status for the quarter.
  * Qtr5Value **required** `string`
  * Qtr6Status **required** `string`: The relevant status for the quarter.
  * Qtr6Value **required** `string`
  * Qtr7Status **required** `string`: The relevant status for the quarter.
  * Qtr7Value **required** `string`
  * Qtr8Status **required** `string`: The relevant status for the quarter.
  * Qtr8Value **required** `string`
  * Qtr9Status **required** `string`: The relevant status for the quarter.
  * Qtr9Value **required** `string`
  * SourceID **required** `string`: Unique Identifier assigned by EPA.

### dfr9_Parameters
* dfr9_Parameters `object`: CWA Effluent Compliance Parameters Object
  * Parameters `array`
    * items [dfr9_Parameter](#dfr9_parameter)

### dfrA_CWAPSCompliance
* dfrA_CWAPSCompliance `object`: CWA PS Compliance Object
  * Header [dfr0_Qtr13Header](#dfr0_qtr13header)
  * Sources `array`
    * items [dfrA_Violations](#dfra_violations)

### dfrA_Violation
* dfrA_Violation `object`: CWA PS Compliance Violation Object
  * NPDESViolationId **required** `string`: The unique identifier in ICIS-NPDES for the NPDES Violation
  * Qtr10Status **required** `string`: The relevant status for the quarter.
  * Qtr10Value **required** `string`
  * Qtr11Status **required** `string`: The relevant status for the quarter.
  * Qtr11Value **required** `string`
  * Qtr12Status **required** `string`: The relevant status for the quarter.
  * Qtr12Value **required** `string`
  * Qtr13Status **required** `string`: The relevant status for the quarter.
  * Qtr13Value **required** `string`
  * Qtr1Status **required** `string`: The relevant status for the quarter.
  * Qtr1Value **required** `string`
  * Qtr2Status **required** `string`: The relevant status for the quarter.
  * Qtr2Value **required** `string`
  * Qtr3Status **required** `string`: The relevant status for the quarter.
  * Qtr3Value **required** `string`
  * Qtr4Status **required** `string`: The relevant status for the quarter.
  * Qtr4Value **required** `string`
  * Qtr5Status **required** `string`: The relevant status for the quarter.
  * Qtr5Value **required** `string`
  * Qtr6Status **required** `string`: The relevant status for the quarter.
  * Qtr6Value **required** `string`
  * Qtr7Status **required** `string`: The relevant status for the quarter.
  * Qtr7Value **required** `string`
  * Qtr8Status **required** `string`: The relevant status for the quarter.
  * Qtr8Value **required** `string`
  * Qtr9Status **required** `string`: The relevant status for the quarter.
  * Qtr9Value **required** `string`
  * SourceID **required** `string`: Unique Identifier assigned by EPA.
  * ViolationDesc **required** `string`: A description of which type of violation has occurred

### dfrA_Violations
* dfrA_Violations `object`: CWA PS Compliance Violations Object
  * Violations **required** `array`
    * items [dfrA_Violation](#dfra_violation)

### dfrB_CWARNCCompliance
* dfrB_CWARNCCompliance `object`: CWA RNC Compliance Object
  * Header [dfr0_Qtr12Header](#dfr0_qtr12header)
  * Sources `array`
    * items [dfrB_Statuses](#dfrb_statuses)

### dfrB_Statuses
* dfrB_Statuses `object`: CWA RNC Compliance Statuses Object
  * Status `array`
    * items [dfr0_Qtr12Status](#dfr0_qtr12status)

### dfrC_CWASECompliance
* dfrC_CWASECompliance `object`: CWA SE Compliance Object
  * Header [dfr0_Qtr13Header](#dfr0_qtr13header)
  * Sources `array`
    * items [dfrC_Violations](#dfrc_violations)

### dfrC_Sources.Violation
* dfrC_Sources.Violation `object`: CWA SE Compliance Violation Object
  * NPDESViolationId **required** `string`: The unique identifier in ICIS-NPDES for the NPDES Violation
  * Qtr10Status **required** `string`: The relevant status for the quarter.
  * Qtr10Value **required** `string`
  * Qtr11Status **required** `string`: The relevant status for the quarter.
  * Qtr11Value **required** `string`
  * Qtr12Status **required** `string`: The relevant status for the quarter.
  * Qtr12Value **required** `string`
  * Qtr13Status **required** `string`: The relevant status for the quarter.
  * Qtr13Value **required** `string`
  * Qtr1Status **required** `string`: The relevant status for the quarter.
  * Qtr1Value **required** `string`
  * Qtr2Status **required** `string`: The relevant status for the quarter.
  * Qtr2Value **required** `string`
  * Qtr3Status **required** `string`: The relevant status for the quarter.
  * Qtr3Value **required** `string`
  * Qtr4Status **required** `string`: The relevant status for the quarter.
  * Qtr4Value **required** `string`
  * Qtr5Status **required** `string`: The relevant status for the quarter.
  * Qtr5Value **required** `string`
  * Qtr6Status **required** `string`: The relevant status for the quarter.
  * Qtr6Value **required** `string`
  * Qtr7Status **required** `string`: The relevant status for the quarter.
  * Qtr7Value **required** `string`
  * Qtr8Status **required** `string`: The relevant status for the quarter.
  * Qtr8Value **required** `string`
  * Qtr9Status **required** `string`: The relevant status for the quarter.
  * Qtr9Value **required** `string`
  * SourceID **required** `string`: Unique Identifier assigned by EPA.
  * ViolationDesc **required** `string`: A description of which type of violation has occurred

### dfrC_Violations
* dfrC_Violations `object`: CWA SE Compliance Violations Object
  * Violations **required** `array`
    * items [dfrC_Sources.Violation](#dfrc_sources.violation)

### dfrD_ComplianceSummary
* dfrD_ComplianceSummary `object`: Compliance Summary Object
  * ProgramDates **required** `array`
    * items [dfr4_ProgramDates](#dfr4_programdates)
  * Source **required** `array`
    * items [dfrD_Source](#dfrd_source)

### dfrD_Source
* dfrD_Source `object`: Source Object
  * CurrentAsOf **required** `string`: The most recent date or calendar year quarter of record maintained in the data system for which the Current SNC/HPV status applies. A quarter could be any of the following 3-month periods:
  * CurrentSNC **required** `string`: The current Significant Noncompliance (SNC) or High Priority Violator (HPV) status for the facility during the most current quarter. SNC is used for RCRA and CWA, and HPV is used for CAA. Each program has its own specific criteria for making this determination. The value of Yes indicates the facility is in SNC or HPV for the permit or site in question and may pose a more severe level of environmental threat. The value of No indicates the permit or site is not considered in SNC or HPV. If the facility is Non-Federally Reportable within AFS or if it is classified as minor within PCS, the field reads N/A. The value of N/A in this field indicates Not Applicable because compliance data for these facilities are not required to be reported to the national program database
  * Description **required** `string`: The text description for the event that results in the permit or site being in Significant Noncompliance (SNC) or in High Priority Violation (HPV)
  * QtrsInNC **required** `string`: The number of quarters, out of the last twelve quarters, in which the permit or site is considered either with violations, in non-compliance (NC) status, or in Significant Noncompliance (SNC) or High Priority Violation (HPV) status
  * SourceID **required** `string`: Unique Identifier assigned by EPA.
  * Statute **required** `string`: The name of the statute associated with each of the permits and identifiers linked to the facility: 

### dfrE_Demographics
* dfrE_Demographics `object`: Demographics Object
  * Adults **required** `string`: The number and percentage of persons living in the area who are between eighteen years old and sixty-five years old.
  * AfricanAmerican **required** `string`: The number and percentage of persons living in the area who are African American.
  * AmericanIndian **required** `string`: The number and percentage of persons living in the area who are of American Indian origin.
  * AsianPacificIslander **required** `string`: The number and percentage of persons living in the area who are of Asian Pacific Islander origin.
  * BSBA **required** `string`: The number and percentage of persons living in the area who have a bachelor's degree or higher.
  * CenterLatitude **required** `string`: The latitude of the facility in degrees, to four decimal places.
  * CenterLongitude **required** `string`: The longitude of the facility in degrees, to four decimal places.
  * Child **required** `string`: The number and percentage of persons living in the area who are five years old or younger.
  * Grades9to12 **required** `string`: The number and percentage of persons living in the area who have completed grades nine through twelve
  * HSDiploma **required** `string`: The number and percentage of persons living in the area who have a high school diploma
  * HispanicOrigin **required** `string`: The number and percentage of persons living in the area who are of Hispanic origin
  * Households **required** `string`: The number of households in the area being profiled
  * HouseholdsPublicAssistance **required** `string`: The number of households that are on any type of public assistance (including subsidized housing, welfare, aid to dependent children, etc.)
  * HousingUnits **required** `string`: The number of housing units in the area being profiled
  * Income15to25k **required** `string`: The number and percentage of households who earn greater than or equal to $15,000 but less than $25,000 per year
  * Income25to50k **required** `string`: The number and percentage of households who earn greater than or equal to $25,000 but less than $50,000 per year
  * Income50to75k **required** `string`: The number and percentage of households who earn greater than or equal to $50,000 per year but less than $75,000 per year
  * Income75kPlus **required** `string`: The number and percentage of households who earn greater than or equal to $75,000 per year
  * IncomeLess15k **required** `string`: The number and percentage of households who earn less than $15,000 per year
  * LandArea **required** `string`: The percentage of the total area that is land (not water). This is calculated using the sum of the land areas of the Census Block Groups (CBG) within the selected radius
  * Less9thGrade **required** `string`: The number and percentage of persons living in the area who have less than a ninth grade education
  * Minors **required** `string`: The number and percentage of persons living in the area that are seventeen years old or younger
  * OtherMultiracial **required** `string`: The number and percentage of persons living in the area who are not included in the above classifications or are multiracial
  * PercentMinority **required** `string`: The percentage of the population of the given area that is minority. The field is calculated by subtracting the number of persons who are white (and not of Hispanic origin) from the total persons. This number is then divided by the total persons and multiplied by one hundred to determine the percentage.
  * PersonsBelowPovertyLevel **required** `string`: The number of people in the selected area that are below the poverty level
  * PopulationDensity **required** `string`: The number of persons per square mile in the area being profiled. This field is the ratio of total persons (displayed in the Total Persons field) to total land area (displayed in the Land Area field)
  * Radius **required** `string`: The number of miles, in any direction, from the center point of the facility that is included in the demographic profile
  * Seniors **required** `string`: The number and percentage of persons living in the area who are sixty-five years old or older
  * SomeCollege **required** `string`: The number and percentage of persons living in the area who have some college or a two year college degree
  * TotalPersons **required** `string`: The total number of persons that reside in the area being profiled. The total population within the selected radius of a facility is one indicator of the facility's surrounding environment and provides context for other facility indicators
  * WaterArea **required** `string`: The percentage of the total area that is water (not land). This is calculated using the sum of the water areas of the Census Block Groups (CBG) within the selected radius
  * White **required** `string`: The number and percentage of persons living in the area who are white

### dfrF_EnforcementComplianceSummaries
* dfrF_EnforcementComplianceSummaries `object`: Enforcement Compliance Summaries Object
  * ProgramDates **required** `array`
    * items [dfrF_ProgramDate](#dfrf_programdate)
  * Summaries **required** `array`
    * items [dfr4_Summaries](#dfr4_summaries)

### dfrF_ProgramDate
* dfrF_ProgramDate `object`: Program Date Object
  * EndDate **required** `string`: End date for the date range of interest. Formatted as mm/dd/yyyy
  * Program **required** `string`: The source database for the EPA programs information.
  * StartDate3Yr **required** `string`: ?? - mm/dd/yyyy
  * StartDate5Yr **required** `string`: ?? - mm/dd/yyyy

### dfrG_Action
* dfrG_Action `object`: Action Object
  * ActionDate **required** `string`: Air Facility System (AFS) ID.
  * ActionType **required** `string`: Text description of type of enforcement action. The type of action and description are designated differently in each system, but may be equivalent.
  * LeadAgency **required** `string`: The lead agency (e.g., EPA, State) conducting the inspection
  * PenaltyAmount **required** `string`: ??
  * PenaltyDesc **required** `string`: ??
  * SourceID **required** `string`: Unique Identifier assigned by EPA.
  * Statute **required** `string`: The name of the statute associated with each of the permits and identifiers linked to the facility: 

### dfrG_CopperSamples
* dfrG_CopperSamples `object`: Copper Samples
  * CU90 **required** `string`
  * CU90Dates **required** `string`
  * CU90Units **required** `string`
  * CU90Value **required** `string`

### dfrG_FormalActions
* dfrG_FormalActions `object`: Formal Actions Object
  * Action `array`
    * items [dfrG_Action](#dfrg_action)
  * ProgramDates `array`
    * items [dfr4_ProgramDates](#dfr4_programdates)

### dfrG_LeadAndCopperRule5Yr
* dfrG_LeadAndCopperRule5Yr `object`: Lead and Copper Rule Object
  * CopperSamples `array`
    * items [dfrG_CopperSamples](#dfrg_coppersamples)
  * CuALE `string`
  * CuALEUnits `string`
  * CuALEValue `string`
  * CuSampleDates `string`
  * CuViol `string`
  * LeadAndCopperViol `string`
  * LeadCopperRuleHealthBasedViol `string`
  * LeadSamples `array`
    * items [dfrG_LeadSamples](#dfrg_leadsamples)
  * PbALE `string`
  * PbALEUnits `string`
  * PbALEValue `string`
  * PbSampleDates `string`
  * PbViol `string`
  * RuleCode350Viol `string`
  * SourceID `string`: Unique Identifier assigned by EPA.
  * iCU90 `string`
  * iPB90 `string`

### dfrG_LeadSamples
* dfrG_LeadSamples `object`: Lead Samples
  * PB90 **required** `string`
  * PB90Dates **required** `string`
  * PB90Units **required** `string`
  * PB90Value **required** `string`

### dfrH_Action
* dfrH_Action `object`: Action Object
  * ActivityName **required** `string`: The user-created name for an activity.
  * CaseID **required** `string`: Air Facility System (AFS) ID.
  * CaseName **required** `string`: A unique number identifying the enforcement action. For EPA civil cases, these numbers begin with either the two digit EPA Region Code, "HQ" (headquarters initiated cases), and "EF" or "WF" (Eastern or Western Field Office CAA Mobile Source Program cases); followed by the fiscal year in which the action was initiated. After the fiscal year there is a sequence number. State NPDES civil cases start with the two character post abbreviation, followed by a sequence number.
  * CaseType **required** `string`: The unique code that identifies a type of compliance event or enforcement action.
  * CompActionCost **required** `string`
  * FederalPenalty **required** `string`: For civil judicial Enforcement Actions, this amount is the Federal penalty assessed against the defendant(s) as specified in the final entered Consent Decree or Court Order.  For administrative Enforcement Actions, it is the penalty assessed in the Consent/Final Order.  It does not include the amount of the penalty mitigated due to a SEP or the amount shared with the state or local entities.  Interest payments associated with a penalty paid over time are not to be included in this amount.  It is the total Federal amount for each Final Order.
  * IssueDate **required** `string`: For administrative cases, this field indicates the date that the complaint or Administrative Order (AO) was signed by the appropriate authority and issued to the respondent. For judicial cases, this field indicates the date that the complaint was filed with the Clerk of the Court.
  * LawSectionCode **required** `string`: The unique identifier for the Section(s) of law violated and cited in the activity.
  * LeadAgency **required** `string`: The lead agency (e.g., EPA, State) conducting the inspection
  * NumberSettlements **required** `string`
  * SepCost **required** `string`: The total value of all SEPs for all settlements at the enforcement case.
  * SettlementDate **required** `string`: For federal judicial actions, this is the date the settlement document is signed by the presiding judge and entered by the Clerk of the Court. At that point, the settlement becomes a binding court order. For administrative actions, this is the date that the final order is signed and issued by the enforcement authority.
  * StateLocalPenalty **required** `string`
  * StatuteCode **required** `string`: Air Facility System (AFS) ID.
  * TotalCostRecovery **required** `string`: The amount of the cost recovery ordered or agreed to be repaid by the responsible parties, cost recovery whole dollar amount awarded by the Court and due the the Superfund. For administrative cases, it is the cost recovery whole dollar amount of the Final Order.

### dfrH_ICISFormalActions
* dfrH_ICISFormalActions `object`: ICIS Formal Actions Object
  * Action `array`
    * items [dfrH_Action](#dfrh_action)
  * ProgramDates `array`
    * items [dfr4_ProgramDates](#dfr4_programdates)

### dfrI_InspectionEnforcementSummary
* dfrI_InspectionEnforcementSummary `object`: Inspection Enforcement Summary Object
  * ProgramDates `array`
    * items [dfr4_ProgramDates](#dfr4_programdates)
  * Source `array`
    * items [dfrI_Source](#dfri_source)

### dfrI_Source
* dfrI_Source `object`: Source Object
  * DateLastInspection **required** `string`: The date on which the most recent inspection of the facility took place
  * EPASystem **required** `string`: The EPA data system in which permit and facility records are kept. EPA's Facility Registry System (FRS) links all program database records (such as permit IDs and IDs facilities use in reporting to EPA) together. The following list describes the individual data systems that are linked to from the detailed facility report: 
  * FormalEnfActCount **required** `string`: The number of formal enforcement actions that have been taken against the facility, under the corresponding statute, within the last five years.
  * InspectionCount **required** `string`: The total number of inspections pertaining to compliance of the designated statute
  * SourceID **required** `string`: Unique Identifier assigned by EPA.
  * Statute **required** `string`: The name of the statute associated with each of the permits and identifiers linked to the facility: 
  * TotalPenalties **required** `string`: The total dollar amount of either assessed or final penalties within the five year time period

### dfrJ_MapOutput
* dfrJ_MapOutput `object`: Map Output Object
  * CenterLatitude **required** `string`: The latitude of the facility in degrees, to four decimal places.
  * CenterLongitude **required** `string`: The longitude of the facility in degrees, to four decimal places.
  * IconBaseURL **required** `string`: URL where all the icons are located
  * MapData **required** `array`
    * items [dfr4_MapData](#dfr4_mapdata)
  * PopUpBaseURL **required** `string`: Combine this URL with the PUC to get popup info

### dfrK_Notice
* dfrK_Notice `object`: Notice Object
  * ActionType **required** `string`: CAA Informal Enforcement Actions (AFS National Action Types):
  * EPASystem **required** `string`: The EPA data system in which permit and facility records are kept. EPA's Facility Registry System (FRS) links all program database records (such as permit IDs and IDs facilities use in reporting to EPA) together. The following list describes the individual data systems that are linked to from the detailed facility report: 
  * EnfIdentifier **required** `string`: The number of the Enforcement Action as referred to by the Court where the action was filed; the Enforcement Action Identifier.
  * LeadAgency **required** `string`: The lead agency (e.g., EPA, State) conducting the inspection
  * NoticeDate **required** `string`: The date of the the most recent informal enforcement action issued to the facility.
  * SourceID **required** `string`: Unique Identifier assigned by EPA.
  * Statute **required** `string`: The name of the statute associated with each of the permits and identifiers linked to the facility: 

### dfrK_Notices
* dfrK_Notices `object`: Notices Object
  * Notice **required** `array`
    * items [dfrK_Notice](#dfrk_notice)
  * ProgramDates **required** `array`
    * items [dfr4_ProgramDates](#dfr4_programdates)

### dfrL_RCRACompliance
* dfrL_RCRACompliance `object`: Resource Conservation and Recovery Act Compliance Object
  * Qtr10End **required** `string`: Date indicating the end of Quarter 10.
  * Qtr10Start **required** `string`: Date indicating the beginning of Quarter 10.
  * Qtr11End **required** `string`: Date indicating the end of Quarter 11.
  * Qtr11Start **required** `string`: Date indicating the beginning of Quarter 11.
  * Qtr12End **required** `string`: Date indicating the end of Quarter 12.
  * Qtr12Start **required** `string`: Date indicating the beginning of Quarter 12.
  * Qtr1End **required** `string`: Date indicating the end of Quarter 1.
  * Qtr1Start **required** `string`: Date indicating the beginning of Quarter 1.
  * Qtr2End **required** `string`: Date indicating the end of Quarter 2.
  * Qtr2Start **required** `string`: Date indicating the beginning of Quarter 2.
  * Qtr3End **required** `string`: Date indicating the end of Quarter 3.
  * Qtr3Start **required** `string`: Date indicating the beginning of Quarter 3.
  * Qtr4End **required** `string`: Date indicating the end of Quarter 4.
  * Qtr4Start **required** `string`: Date indicating the beginning of Quarter 4.
  * Qtr5End **required** `string`: Date indicating the end of Quarter 5.
  * Qtr5Start **required** `string`: Date indicating the beginning of Quarter 5.
  * Qtr6End **required** `string`: Date indicating the end of Quarter 6.
  * Qtr6Start **required** `string`: Date indicating the beginning of Quarter 6.
  * Qtr7End **required** `string`: Date indicating the end of Quarter 7.
  * Qtr7Start **required** `string`: Date indicating the beginning of Quarter 7.
  * Qtr8End **required** `string`: Date indicating the end of Quarter 8.
  * Qtr8Start **required** `string`: Date indicating the beginning of Quarter 8.
  * Qtr9End **required** `string`: Date indicating the end of Quarter 9.
  * Qtr9Start **required** `string`: Date indicating the beginning of Quarter 9.
  * Sources `array`
    * items [dfrL_Source](#dfrl_source)

### dfrL_Source
* dfrL_Source `object`: Source Object
  * Status [dfr0_Qtr12Status](#dfr0_qtr12status)
  * Violations `array`
    * items [dfrL_Violations](#dfrl_violations)

### dfrL_Violations
* dfrL_Violations `object`: Violations Object
  * Agency **required** `string`: Identifies the lead agency (e.g., EPA, State) conducting the inspection. 
  * Qtr10Status **required** `string`: The relevant status for the quarter.
  * Qtr11Status **required** `string`: The relevant status for the quarter.
  * Qtr12Status **required** `string`: The relevant status for the quarter.
  * Qtr1Status **required** `string`: The relevant status for the quarter.
  * Qtr2Status **required** `string`: The relevant status for the quarter.
  * Qtr3Status **required** `string`: The relevant status for the quarter.
  * Qtr4Status **required** `string`: The relevant status for the quarter.
  * Qtr5Status **required** `string`: The relevant status for the quarter.
  * Qtr6Status **required** `string`: The relevant status for the quarter.
  * Qtr7Status **required** `string`: The relevant status for the quarter.
  * Qtr8Status **required** `string`: The relevant status for the quarter.
  * Qtr9Status **required** `string`: The relevant status for the quarter.
  * SourceID **required** `string`: Unique Identifier assigned by EPA.
  * Violation **required** `string`: A designation of the type or nature of the violation.
  * ViolationType **required** `string`

### dfrM_RulesViolated
* dfrM_RulesViolated `object`: Rules Violated Object
  * DrinkingWaterRule **required** `string`
  * Qtr10Status **required** `string`: The relevant status for the quarter.
  * Qtr11Status **required** `string`: The relevant status for the quarter.
  * Qtr12Status **required** `string`: The relevant status for the quarter.
  * Qtr13Status **required** `string`: The relevant status for the quarter.
  * Qtr1Status **required** `string`: The relevant status for the quarter.
  * Qtr2Status **required** `string`: The relevant status for the quarter.
  * Qtr3Status **required** `string`: The relevant status for the quarter.
  * Qtr4Status **required** `string`: The relevant status for the quarter.
  * Qtr5Status **required** `string`: The relevant status for the quarter.
  * Qtr6Status **required** `string`: The relevant status for the quarter.
  * Qtr7Status **required** `string`: The relevant status for the quarter.
  * Qtr8Status **required** `string`: The relevant status for the quarter.
  * Qtr9Status **required** `string`: The relevant status for the quarter.
  * SourceID **required** `string`: Unique Identifier assigned by EPA.

### dfrM_SDWISCompliance
* dfrM_SDWISCompliance `object`: SDWIS Compliance Object
  * Qtr10End `string`: Date indicating the end of Quarter 10.
  * Qtr10Start `string`: Date indicating the beginning of Quarter 10.
  * Qtr11End `string`: Date indicating the end of Quarter 11.
  * Qtr11Start `string`: Date indicating the beginning of Quarter 11.
  * Qtr12End `string`: Date indicating the end of Quarter 12.
  * Qtr12Start `string`: Date indicating the beginning of Quarter 12.
  * Qtr13End `string`: Date indicating the end of Quarter 13.
  * Qtr13Start `string`: Date indicating the beginning of Quarter 13.
  * Qtr1End `string`: Date indicating the end of Quarter 1.
  * Qtr1Start `string`: Date indicating the beginning of Quarter 1.
  * Qtr2End `string`: Date indicating the end of Quarter 2.
  * Qtr2Start `string`: Date indicating the beginning of Quarter 2.
  * Qtr3End `string`: Date indicating the end of Quarter 3.
  * Qtr3Start `string`: Date indicating the beginning of Quarter 3.
  * Qtr4End `string`: Date indicating the end of Quarter 4.
  * Qtr4Start `string`: Date indicating the beginning of Quarter 4.
  * Qtr5End `string`: Date indicating the end of Quarter 5.
  * Qtr5Start `string`: Date indicating the beginning of Quarter 5.
  * Qtr6End `string`: Date indicating the end of Quarter 6.
  * Qtr6Start `string`: Date indicating the beginning of Quarter 6.
  * Qtr7End `string`: Date indicating the end of Quarter 7.
  * Qtr7Start `string`: Date indicating the beginning of Quarter 7.
  * Qtr8End `string`: Date indicating the end of Quarter 8.
  * Qtr8Start `string`: Date indicating the beginning of Quarter 8.
  * Qtr9End `string`: Date indicating the end of Quarter 9.
  * Qtr9Start `string`: Date indicating the beginning of Quarter 9.
  * Sources `array`
    * items [dfrM_Source](#dfrm_source)

### dfrM_Source
* dfrM_Source `object`: Source Object
  * RulesViolated **required** `array`
    * items [dfrM_RulesViolated](#dfrm_rulesviolated)
  * Status **required** [dfr0_Qtr13Status](#dfr0_qtr13status)

### dfrN_SanitarySurvey
* dfrN_SanitarySurvey `object`: Sanitary Survey Object
  * Agency **required** `string`: Identifies the lead agency (e.g., EPA, State) conducting the inspection. 
  * DataVerification **required** `string`
  * Distribution **required** `string`
  * Financial **required** `string`
  * FinishedWaterStorage **required** `string`
  * ManagementOperation **required** `string`
  * OperatorCompliance **required** `string`
  * OtherEvaluation **required** `string`
  * Pumps **required** `string`
  * Security **required** `string`
  * Source **required** `string`
  * SourceID **required** `string`: Unique Identifier assigned by EPA.
  * Treatment **required** `string`
  * VisitDate **required** `string`: Date of the sanitary survey.
  * VisitType **required** `string`

### dfrN_SanitarySurveys
* dfrN_SanitarySurveys `object`: Sanitary Surveys Object
  * Sources `array`
    * items [dfrN_Source](#dfrn_source)

### dfrN_Source
* dfrN_Source `object`: Source Object
  * SanitarySurvey **required** `array`
    * items [dfrN_SanitarySurvey](#dfrn_sanitarysurvey)

### dfrO_SiteVisit
* dfrO_SiteVisit `object`: Site Visit Object
  * Agency **required** `string`: Identifies the lead agency (e.g., EPA, State) conducting the inspection. 
  * DataVerification **required** `string`
  * Distribution **required** `string`
  * Financial **required** `string`
  * FinishedWaterStorage **required** `string`
  * ManagementOperation **required** `string`
  * OperatorCompliance **required** `string`
  * OtherEvaluation **required** `string`
  * Pumps **required** `string`
  * Security **required** `string`
  * Source **required** `string`
  * SourceID **required** `string`: Unique Identifier assigned by EPA.
  * Treatment **required** `string`
  * VisitDate **required** `string`: Date of the sanitary survey.
  * VisitReason **required** `string`: Reason for the visit to the water system.

### dfrO_SiteVisits
* dfrO_SiteVisits `object`: Site Visits Object
  * Sources `array`
    * items [dfrO_Source](#dfro_source)

### dfrO_Source
* dfrO_Source `object`: Source Object
  * SiteVisit **required** `array`
    * items [dfrO_SiteVisit](#dfro_sitevisit)

### dfrP_SpatialMetadata
* dfrP_SpatialMetadata `object`: Spatial Metadata Object
  * CalculatedAccuracy **required** `string`: ??
  * CollectionMethod **required** `string`: ??
  * CoordinateSourceSystem **required** `string`: ??
  * CoordinateSourceSystemId **required** `string`: ??
  * Latitude83 **required** `string`: The latitude of the facility or permit holder as maintained in each data system.
  * Longitude83 **required** `string`: The longitude of the facility or permit holder as maintained in each data system
  * ReferencePoint **required** `string`: ??
  * RegistryID **required** `string`: An internal 12-digit Facility Registry Service (FRS) tracking number used to tie all facility data together in EPA regulatory program databases.

### dfrQ_TRIHistory
* dfrQ_TRIHistory `object`: TRI History Object
  * Sources `array`
    * items [dfre_Source](#dfre_source)

### dfrR_Chemicals
* dfrR_Chemicals `object`: Chemicals Object
  * ChemicalName **required** `string`: The TRI chemical to which the data in this row applies.
  * Year1Pounds **required** `string`: The total pounds either released to air, discharged to surface water, injected underground, landfilled on-site, or transferred off-site for disposal or to a POTW.
  * Year2Pounds **required** `string`: The total pounds either released to air, discharged to surface water, injected underground, landfilled on-site, or transferred off-site for disposal or to a POTW.
  * Year3Pounds **required** `string`: The total pounds either released to air, discharged to surface water, injected underground, landfilled on-site, or transferred off-site for disposal or to a POTW.
  * Year4Pounds **required** `string`: The total pounds either released to air, discharged to surface water, injected underground, landfilled on-site, or transferred off-site for disposal or to a POTW.
  * Year5Pounds **required** `string`: The total pounds either released to air, discharged to surface water, injected underground, landfilled on-site, or transferred off-site for disposal or to a POTW.
  * Year6Pounds **required** `string`: The total pounds either released to air, discharged to surface water, injected underground, landfilled on-site, or transferred off-site for disposal or to a POTW.
  * Year7Pounds **required** `string`: The total pounds either released to air, discharged to surface water, injected underground, landfilled on-site, or transferred off-site for disposal or to a POTW.
  * Year8Pounds **required** `string`: The total pounds either released to air, discharged to surface water, injected underground, landfilled on-site, or transferred off-site for disposal or to a POTW.
  * Year9Pounds **required** `string`: The total pounds either released to air, discharged to surface water, injected underground, landfilled on-site, or transferred off-site for disposal or to a POTW.

### dfrR_Header
* dfrR_Header `object`: Header Object
  * Year1 **required** `string`
  * Year2 **required** `string`
  * Year3 **required** `string`
  * Year4 **required** `string`
  * Year5 **required** `string`
  * Year6 **required** `string`
  * Year7 **required** `string`
  * Year8 **required** `string`
  * Year9 **required** `string`

### dfrR_TRIReleases
* dfrR_TRIReleases `object`: TRI Releases Object
  * Chemicals `array`
    * items [dfrR_Chemicals](#dfrr_chemicals)
  * Header `array`
    * items [dfrR_Header](#dfrr_header)

### dfrS_Tribes
* dfrS_Tribes `object`: Tribes Object
  * AreaName **required** `string`: Displays Clean Air Act stationary source program subpart designation, Clean Water Act-NPDES permit component(s), and/or other Resource Conservation and Recovery Act designations, if any.
  * DistanceToArea **required** `string`: Air Facility System (AFS) ID.
  * EPAId **required** `string`: This is the EPA Identifier for substances.
  * TribeName **required** `string`: Air Facility System (AFS) ID.

### dfrT_ViolationsEnforcementActions
* dfrT_ViolationsEnforcementActions `object`: Violations Enforcement Actions Object
  * Sources `array`
    * items [dfrd_Source](#dfrd_source)

### dfrU_Source
* dfrU_Source `object`: Source Object
  * AttainsAquaticLifeUseFlg **required** `string`: Displays "Y" if the waterbody in which the facility resides is designated for aquatic life use. The data are from the ATTAINS database.
  * AttainsAuCategory **required** `string`: The impairment class or category of the waterbody in which the facility is permitted to discharge directly. The data are from the ATTAINS database:
  * AttainsCauseGroups **required** `string`: Lists all groups of pollutants or stressors that are causing impairment in the assessed waterbody. The data are from the ATTAINS database.
  * AttainsExceptnlUseFlg **required** `string`: Displays "Y" if the waterbody in which the facility resides is designated for exceptional use. The data are from the ATTAINS database.
  * AttainsRecreationUseFlg **required** `string`: Displays "Y" if the waterbody in which the facility resides is designated for recreational use. The data are from the ATTAINS database.
  * AttainsShellfishUseFlg **required** `string`: Displays "Y" if the waterbody in which the facility resides is designated for shellfish use. The data are from the ATTAINS database.
  * BeachCloseLast2yrsFlg **required** `string`: Displays "Y" if the facility is located on or near a waterbody with a beach closure within the last two years.
  * BeachCloseLastYearFlg **required** `string`: Displays "Y" if the facility is located on or near a waterbody with a beach closure within the last year.
  * CSS **required** `string`
  * CWPCsoOutfalls **required** `string`: The number of discharge outfalls at points prior to the treatment plant.
  * EPASystem **required** `string`: The EPA data system in which permit and facility records are kept. EPA's Facility Registry System (FRS) links all program database records (such as permit IDs and IDs facilities use in reporting to EPA) together. The following list describes the individual data systems that are linked to from the detailed facility report: 
  * EsaAquaticSpeciesFlg **required** `string`
  * HUC8 **required** `string`
  * HUC8Name **required** `string`
  * ImpairedWaters **required** `string`: Field indicates if the permit discharges directly into category 4 or 5 impaired waters.
  * RadGnisName **required** `string`: The name of the waterbody from the Geographic Names Information System (GNIS) database in which the facility is permitted to discharge directly.
  * RadReachcode **required** `string`: A nationally unique and permanent identifier for the waterbody, assigned by the US Geological Survey.
  * ReceivingWaters **required** `string`: The name of the river, lake, stream, or estuary that receives runoff from the facility.
  * SourceID **required** `string`: Unique Identifier assigned by EPA.
  * WBD12 **required** `string`
  * WBD12Name **required** `string`

### dfrU_WaterQuality
* dfrU_WaterQuality `object`: Water Quality Object
  * Sources `array`
    * items [dfrU_Source](#dfru_source)

### dfrV_ComplianceHistory
* dfrV_ComplianceHistory `object`: Compliance History Object
  * Inspection `array`
    * items [dfrV_Inspection](#dfrv_inspection)
  * ProgramDates `array`
    * items [dfr4_ProgramDates](#dfr4_programdates)

### dfrV_Inspection
* dfrV_Inspection `object`: Inspection Object
  * CMSFlag **required** `string`: Indicates whether a Corrective Measure Study has been recommended.
  * Date **required** `string`: The date of the listed inspection
  * EPASystem **required** `string`: The EPA data system in which permit and facility records are kept. EPA's Facility Registry System (FRS) links all program database records (such as permit IDs and IDs facilities use in reporting to EPA) together. The following list describes the individual data systems that are linked to from the detailed facility report: 
  * Finding **required** `string`: For CAA, includes results of source or performance stack tests or Title V certification review results when applicable; for CWA and RCRA, includes whether violations or compliance issues were found during an inspection, if entered into an EPA system
  * InspectionType **required** `string`: A description of the type of inspection undertaken
  * LeadAgency **required** `string`: The lead agency (e.g., EPA, State) conducting the inspection
  * SourceID **required** `string`: Unique Identifier assigned by EPA.
  * Statute **required** `string`: The name of the statute associated with each of the permits and identifiers linked to the facility: 

### dfrW1_Results
* dfrW1_Results `object`: Results Object
  * EnforcementComplianceSummaries [dfrF_EnforcementComplianceSummaries](#dfrf_enforcementcompliancesummaries)
  * Message **required** `string`: Field to record messages (typically performance-related) about packet processing

### dfrW2_Results
* dfrW2_Results `object`: Results Object
  * FormalActions [dfrG_FormalActions](#dfrg_formalactions)
  * Message **required** `string`: Field to record messages (typically performance-related) about packet processing

### dfrW_Results
* dfrW_Results `object`: Results Object
  * CWA3YrCompliance [dfr7_CWA3YrCompliance](#dfr7_cwa3yrcompliance)
  * Message **required** `string`: Field to record messages (typically performance-related) about packet processing

### dfrY_Results
* dfrY_Results `object`: Results Object
  * Demographics [dfrE_Demographics](#dfre_demographics)
  * Message **required** `string`: Field to record messages (typically performance-related) about packet processing

### dfrZ_Results
* dfrZ_Results `object`: Results Object
  * MapOutput [dfrJ_MapOutput](#dfrj_mapoutput)
  * Message **required** `string`: Field to record messages (typically performance-related) about packet processing

### dfra1_Results
* dfra1_Results `object`: Results Object
  * InspectionEnforcementSummary [dfrI_InspectionEnforcementSummary](#dfri_inspectionenforcementsummary)
  * Message **required** `string`: Field to record messages (typically performance-related) about packet processing

### dfra2_Results
* dfra2_Results `object`: Results Object
  * Message **required** `string`: Field to record messages (typically performance-related) about packet processing
  * NAICS [dfr4_NAICS](#dfr4_naics)

### dfra_Results
* dfra_Results `object`: Results Object
  * ICISFormalActions [dfrH_ICISFormalActions](#dfrh_icisformalactions)
  * Message **required** `string`: Field to record messages (typically performance-related) about packet processing

### dfrc_AFSProgram
* dfrc_AFSProgram `object`: AFS Program Object
  * AirPrograms **required** `string`
  * Qtr10Status **required** `string`: The relevant status for the quarter.
  * Qtr11Status **required** `string`: The relevant status for the quarter.
  * Qtr12Status **required** `string`: The relevant status for the quarter.
  * Qtr1Status **required** `string`: The relevant status for the quarter.
  * Qtr2Status **required** `string`: The relevant status for the quarter.
  * Qtr3Status **required** `string`: The relevant status for the quarter.
  * Qtr4Status **required** `string`: The relevant status for the quarter.
  * Qtr5Status **required** `string`: The relevant status for the quarter.
  * Qtr6Status **required** `string`: The relevant status for the quarter.
  * Qtr7Status **required** `string`: The relevant status for the quarter.
  * Qtr8Status **required** `string`: The relevant status for the quarter.
  * Qtr9Status **required** `string`: The relevant status for the quarter.
  * SourceID **required** `string`: Unique Identifier assigned by EPA.

### dfrc_FRVProgramsPollutant
* dfrc_FRVProgramsPollutant `object`: FRV Programs Pollutant Object
  * Agency **required** `string`: Identifies the lead agency (e.g., EPA, State) conducting the inspection. 
  * AirPollutants **required** `string`
  * AirPrograms **required** `string`
  * ERPType **required** `string`: Air Facility System (AFS) ID.
  * Qtr10Status **required** `string`: The relevant status for the quarter.
  * Qtr11Status **required** `string`: The relevant status for the quarter.
  * Qtr12Status **required** `string`: The relevant status for the quarter.
  * Qtr1Status **required** `string`: The relevant status for the quarter.
  * Qtr2Status **required** `string`: The relevant status for the quarter.
  * Qtr3Status **required** `string`: The relevant status for the quarter.
  * Qtr4Status **required** `string`: The relevant status for the quarter.
  * Qtr5Status **required** `string`: The relevant status for the quarter.
  * Qtr6Status **required** `string`: The relevant status for the quarter.
  * Qtr7Status **required** `string`: The relevant status for the quarter.
  * Qtr8Status **required** `string`: The relevant status for the quarter.
  * Qtr9Status **required** `string`: The relevant status for the quarter.
  * SourceID **required** `string`: Unique Identifier assigned by EPA.

### dfrc_HPVProgramsPollutant
* dfrc_HPVProgramsPollutant `object`: HPV Programs Pollutant Object
  * Agency **required** `string`: Identifies the lead agency (e.g., EPA, State) conducting the inspection. 
  * AirPollutants **required** `string`
  * AirPrograms **required** `string`
  * ERPType **required** `string`: Air Facility System (AFS) ID.
  * Qtr10Status **required** `string`: The relevant status for the quarter.
  * Qtr11Status **required** `string`: The relevant status for the quarter.
  * Qtr12Status **required** `string`: The relevant status for the quarter.
  * Qtr1Status **required** `string`: The relevant status for the quarter.
  * Qtr2Status **required** `string`: The relevant status for the quarter.
  * Qtr3Status **required** `string`: The relevant status for the quarter.
  * Qtr4Status **required** `string`: The relevant status for the quarter.
  * Qtr5Status **required** `string`: The relevant status for the quarter.
  * Qtr6Status **required** `string`: The relevant status for the quarter.
  * Qtr7Status **required** `string`: The relevant status for the quarter.
  * Qtr8Status **required** `string`: The relevant status for the quarter.
  * Qtr9Status **required** `string`: The relevant status for the quarter.
  * SourceID **required** `string`: Unique Identifier assigned by EPA.

### dfrc_Source
* dfrc_Source `object`: Source Object
  * AFSPrograms **required** `array`
    * items [dfrc_AFSProgram](#dfrc_afsprogram)
  * FRVProgramsPollutants **required** `array`
    * items [dfrc_FRVProgramsPollutant](#dfrc_frvprogramspollutant)
  * HPVHistory **required** [dfr0_Qtr12Status](#dfr0_qtr12status)
  * HPVProgramsPollutants **required** `array`
    * items [dfrc_HPVProgramsPollutant](#dfrc_hpvprogramspollutant)
  * PermitHistory **required** [dfr0_Qtr12Status](#dfr0_qtr12status)

### dfrd_EnforcementActions
* dfrd_EnforcementActions `object`: Enforcement Actions Object
  * Agency **required** `string`: Identifies the lead agency (e.g., EPA, State) conducting the inspection. 
  * EnforcementActionTypeDesc **required** `string`
  * EnforcementDate **required** `string`: Date of Enforcement.
  * EnforcementId **required** `string`
  * EnforcementType **required** `string`: A text description of the Enforcement Action type.

### dfrd_Source
* dfrd_Source `object`: Source Object
  * Violations **required** `array`
    * items [dfrd_Violations](#dfrd_violations)

### dfrd_Violations
* dfrd_Violations `object`: Violations Object
  * CompliancePeriodBeginDate **required** `string`: The beginning date of the time period during which a violation took place. For some violations this period corresponds to a regular water quality monitoring period, such as a month or quarter; in other cases it may initially be open-ended, and remain that way until the violation is resolved, i.e. until EPA or the state files a resolving enforcement action to indicate that either the system has returned to compliance or no further action is necessary.
  * CompliancePeriodEndDate **required** `string`: The end date of the time period during which a violation took place. For some violations this period corresponds to a regular water quality monitoring period, such as a month or quarter; in other cases it may initially be open-ended, and remain that way until the violation is resolved, i.e. until EPA or the state files a resolving enforcement action to indicate that either the system has returned to compliance or no further action is necessary.
  * ContaminantName **required** `string`: City
  * EnforcementActions **required** `array`
    * items [dfrd_EnforcementActions](#dfrd_enforcementactions)
  * FederalMCL **required** `string`
  * FederalRule **required** `string`: ???
  * ResolvedDate **required** `string`
  * SourceID **required** `string`: Unique Identifier assigned by EPA.
  * StateMCL **required** `string`: County
  * Status **required** `string`
  * ViolationCategoryCode **required** `string`
  * ViolationCategoryDesc **required** `string`
  * ViolationID **required** `string`: An identifer from SDWA that uniquely identifies the violation.
  * ViolationMeasure **required** `string`

### dfre_ReleaseYear
* dfre_ReleaseYear `object`: Release Year Object
  * OffSiteTransfersPOTWS **required** `string`
  * ReleasesToLand **required** `string`: Total releases to land on-site (includes landfills), in pounds per year.
  * SourceID **required** `string`: Unique Identifier assigned by EPA.
  * SurfaceWaterDischarges **required** `string`: The total direct discharges to receiving streams or water bodies, in pounds per year.
  * TotalAirEmissions **required** `string`: The total fugitive (non-point air emissions) and stack or point air emissions, in pounds per year.
  * TotalOffSiteReleases **required** `string`: The total amount, in pounds per year, transferred off site to Publicly Owned Treatment Works (POTWs) and other off-site locations.
  * TotalOnSiteReleases **required** `string`: Total pounds per year released for Air Emissions, Surface Water Discharges, Underground Injections and Releases to Land.
  * TotalReleasesTransfers **required** `string`: Grand total for Air Emissions, Surface Water Discharges, Underground Injections, Releases to Land, On-Site Releases and Off-Site Transfers in pounds per year for all types of chemicals.
  * UndergroundInjections **required** `string`: The total underground injections to wells on-site, in pounds per year.
  * Year **required** `string`: The calendar year of a time dimension (reporting table) record.

### dfre_Source
* dfre_Source `object`: Source Object
  * ReleaseYear `array`
    * items [dfre_ReleaseYear](#dfre_releaseyear)

### dfrf_Results
* dfrf_Results `object`: Results Object
  * Message **required** `string`: Field to record messages (typically performance-related) about packet processing
  * ViolationsEnforcementActions [dfrT_ViolationsEnforcementActions](#dfrt_violationsenforcementactions)

### dfrg1_Results
* dfrg1_Results `object`: Results Object
  * Message **required** `string`: Field to record messages (typically performance-related) about packet processing
  * Permits `array`
    * items [dfr4_Permits](#dfr4_permits)
  * Reports [dfr4_Reports](#dfr4_reports)

### dfrg2_Results
* dfrg2_Results `object`: Results Object
  * Message **required** `string`: Field to record messages (typically performance-related) about packet processing
  * SIC [dfr4_SIC](#dfr4_sic)

### dfrg3_Results
* dfrg3_Results `object`: Results Object
  * Message **required** `string`: Field to record messages (typically performance-related) about packet processing
  * SpatialMetadata [dfrP_SpatialMetadata](#dfrp_spatialmetadata)

### dfrg_Results
* dfrg_Results `object`: Results Object
  * Message **required** `string`: Field to record messages (typically performance-related) about packet processing
  * Notices [dfrK_Notices](#dfrk_notices)

### dfrh_Results
* dfrh_Results `object`: Results Object
  * Message **required** `string`: Field to record messages (typically performance-related) about packet processing
  * RCRACompliance [dfrL_RCRACompliance](#dfrl_rcracompliance)

### dfri_Results
* dfri_Results `object`: Results Object
  * Message **required** `string`: Field to record messages (typically performance-related) about packet processing
  * SiteVisits [dfrO_SiteVisits](#dfro_sitevisits)

### dfrj_Results
* dfrj_Results `object`: Results Object
  * Message **required** `string`: Field to record messages (typically performance-related) about packet processing
  * SanitarySurveys [dfrN_SanitarySurveys](#dfrn_sanitarysurveys)

### dfrk_Results
* dfrk_Results `object`: Results Object
  * Message **required** `string`: Field to record messages (typically performance-related) about packet processing

### dfrl_Results
* dfrl_Results `object`: Results Object
  * Message **required** `string`: Field to record messages (typically performance-related) about packet processing
  * SDWISCompliance [dfrM_SDWISCompliance](#dfrm_sdwiscompliance)

### dfrm_Results
* dfrm_Results `object`: Results Object
  * Message **required** `string`: Field to record messages (typically performance-related) about packet processing
  * TRIHistory [dfrQ_TRIHistory](#dfrq_trihistory)

### dfrn_Results
* dfrn_Results `object`: Results Object
  * Message **required** `string`: Field to record messages (typically performance-related) about packet processing
  * TRIReleases [dfrR_TRIReleases](#dfrr_trireleases)

### dfro_Results
* dfro_Results `object`: Results Object
  * Message **required** `string`: Field to record messages (typically performance-related) about packet processing
  * Tribes `array`
    * items [dfrS_Tribes](#dfrs_tribes)

### dfrp_Results
* dfrp_Results `object`: Results Object
  * Message **required** `string`: Field to record messages (typically performance-related) about packet processing
  * WaterQuality [dfrU_WaterQuality](#dfru_waterquality)

### dfrq_Results
* dfrq_Results `object`: Results Object
  * AirCompliance [dfr5_AirCompliance](#dfr5_aircompliance)
  * Message **required** `string`: Field to record messages (typically performance-related) about packet processing

### dfrs_Results
* dfrs_Results `object`: Results Object
  * CWACSCompliance [dfr10_CWACSCompliance](#dfr10_cwacscompliance)
  * Message **required** `string`: Field to record messages (typically performance-related) about packet processing

### dfrt_Results
* dfrt_Results `object`: Root Object
  * CWAEffluentALRExceedences [dfr8_CWAEffluentALRExceedences](#dfr8_cwaeffluentalrexceedences)
  * Message **required** `string`: Field to record messages (typically performance-related) about packet processing

### dfru_Results
* dfru_Results `object`: Results Object
  * CWAEffluentCompliance [dfr9_CWAEffluentCompliance](#dfr9_cwaeffluentcompliance)
  * Message **required** `string`: Field to record messages (typically performance-related) about packet processing

### dfrv_Results
* dfrv_Results `object`: Results Object
  * CWAPSCompliance [dfrA_CWAPSCompliance](#dfra_cwapscompliance)
  * Message **required** `string`: Field to record messages (typically performance-related) about packet processing

### dfrw_Results
* dfrw_Results `object`: Results Object
  * CWARNCCompliance [dfrB_CWARNCCompliance](#dfrb_cwarnccompliance)
  * Message **required** `string`: Field to record messages (typically performance-related) about packet processing

### dfrx_Results
* dfrx_Results `object`: Results Object
  * CWASECompliance [dfrC_CWASECompliance](#dfrc_cwasecompliance)
  * Message **required** `string`: Field to record messages (typically performance-related) about packet processing

### dfrz_NAICS
* dfrz_NAICS `object`: NAICS Sources Object
  * NAICSCodes **required** `array`
    * items [dfrz_NAICSCodes](#dfrz_naicscodes)

### dfrz_NAICSCodes
* dfrz_NAICSCodes `object`: NAICS Codes Object
  * EPASystem **required** `string`: The EPA data system in which permit and facility records are kept. EPA's Facility Registry System (FRS) links all program database records (such as permit IDs and IDs facilities use in reporting to EPA) together. The following list describes the individual data systems that are linked to from the detailed facility report: 
  * NAICSCode **required** `string`: The North American Industry Classification System (NAICS) code
  * NAICSDesc **required** `string`: The corresponding description of North American Industry Classification System (NAICS) code.
  * SourceID **required** `string`: Unique Identifier assigned by EPA.


