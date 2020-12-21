# @datafire/epa_gov_dfr

Client library for U.S. EPA Enforcement and Compliance History Online (ECHO) - Detailed Facility Report (DFR)

## Installation and Usage
```bash
npm install --save @datafire/epa_gov_dfr
```
```js
let epa_gov_dfr = require('@datafire/epa_gov_dfr').create();

.then(data => {
  console.log(data);
});
```

## Description

Enforcement and Compliance History Online (ECHO) is a tool developed and maintained by EPA's Office of Enforcement and Compliance Assurance for public use. ECHO provides integrated compliance and enforcement information for over 1 million regulated facilities nationwide.

DFR Rest Services provide multiple service endpoints, to retrieve detailed facility location, enforcement, compliance monitoring, and pollutant information for any single facility.  See the Detailed Facility Report (DFR) Help Page (https://echo.epa.gov/help/reports/detailed-facility-report-help) for additional information on the DFR.  Additionally, a Data Dictionary (https://echo.epa.gov/help/reports/dfr-data-dictionary) is also available. 
There is one primary service end point, get_dfr, that provides all available DFR data.  All other service end points that are exposed, will return data on a single section of the DFR.    
\
Additional ECHO Resources:   <a href="https://echo.epa.gov/tools/web-services">Web Services</a>, <a href="https://echo.epa.gov/resources/echo-data/about-the-data">About ECHO's Data</a>, <a href="https://echo.epa.gov/tools/data-downloads">Data Downloads</a>
 

## Actions

### dfr_rest_services.air_3_yr_download.get
For the provided system identifier, dowloads all displayed Air quaterly/monthly Facility Level Status, High Priority Violation (HPV) History, HPV Detailed Violations and Federal Reportable Violation  information in a Comma Seperated Value (CSV) format.


```js
epa_gov_dfr.dfr_rest_services.air_3_yr_download.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `file`

### dfr_rest_services.air_3_yr_download.post
For the provided system identifier, dowloads all displayed Air quaterly/monthly Facility Level Status, High Priority Violation (HPV) History, HPV Detailed Violations and Federal Reportable Violation  information in a Comma Seperated Value (CSV) format.


```js
epa_gov_dfr.dfr_rest_services.air_3_yr_download.post(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `file`

### dfr_rest_services.cwa_3_yr_effluent_download.get
For the provided system identifier, dowloads all displayed NPDES quaterly/monthly effluent violation information in a Comma Seperated Value (CSV) format.


```js
epa_gov_dfr.dfr_rest_services.cwa_3_yr_effluent_download.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `file`

### dfr_rest_services.cwa_3_yr_effluent_download.post
For the provided system identifier, dowloads all displayed NPDES quaterly/monthly effluent violation information in a Comma Seperated Value (CSV) format.


```js
epa_gov_dfr.dfr_rest_services.cwa_3_yr_effluent_download.post(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `file`

### dfr_rest_services.cwa_3_yr_sepscs_download.get
For the provided system identifier, dowloads all displayed NPDES quaterly/monthly Compliance Schedule, Permit Schedule, and Single Event Violation  information in a Comma Seperated Value (CSV) format.


```js
epa_gov_dfr.dfr_rest_services.cwa_3_yr_sepscs_download.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `file`

### dfr_rest_services.cwa_3_yr_sepscs_download.post
For the provided system identifier, dowloads all displayed NPDES quaterly/monthly Compliance Schedule, Permit Schedule, and Single Event Violation  information in a Comma Seperated Value (CSV) format.


```js
epa_gov_dfr.dfr_rest_services.cwa_3_yr_sepscs_download.post(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `file`

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
  * Results **required** [dfr001_Results](#dfr001_results)

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
  * Results **required** [dfr001_Results](#dfr001_results)

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
  * Results **required** [dfr002_Results](#dfr002_results)

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
  * Results **required** [dfr002_Results](#dfr002_results)

### dfr_rest_services.get_aws_docs.get
Placeholder


```js
epa_gov_dfr.dfr_rest_services.get_aws_docs.get({
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
  * Results **required** [dfr0_get_aws_docs.Results](#dfr0_get_aws_docs.results)

### dfr_rest_services.get_aws_docs.post
Placeholder


```js
epa_gov_dfr.dfr_rest_services.get_aws_docs.post({
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
  * Results **required** [dfr0_get_aws_docs.Results](#dfr0_get_aws_docs.results)

### dfr_rest_services.get_case_formal_actions.get
Displays closed case information from EPA's Federal Enforcement & Compliance System that are related to the facility.


```js
epa_gov_dfr.dfr_rest_services.get_case_formal_actions.get({
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
  * Results **required** [dfr004](#dfr004)

### dfr_rest_services.get_case_formal_actions.post
Displays closed case information from EPA's Federal Enforcement & Compliance System that are related to the facility.


```js
epa_gov_dfr.dfr_rest_services.get_case_formal_actions.post({
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
  * Results **required** [dfr004](#dfr004)

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
  * Results **required** [dfr005_Results](#dfr005_results)

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
  * Results **required** [dfr005_Results](#dfr005_results)

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
  * Results **required** [dfr006_Results](#dfr006_results)

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
  * Results **required** [dfr006_Results](#dfr006_results)

### dfr_rest_services.get_csv.get
For a supplied system id and DFR section name, the procedure will download that section in a Comma Separated Value (CSV) format.


```js
epa_gov_dfr.dfr_rest_services.get_csv.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `file`

### dfr_rest_services.get_csv.post
For a supplied system id and DFR section name, the procedure will download that section in a Comma Separated Value (CSV) format.


```js
epa_gov_dfr.dfr_rest_services.get_csv.post(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `file`

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
  * Results **required** [dfr009_Results](#dfr009_results)

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
  * Results **required** [dfr009_Results](#dfr009_results)

### dfr_rest_services.get_cwa_3yr_d80d90_counts.get
Displays monlthly and quarterly counts of D80 and D90 Effluent Non Reporting Violations Related to the Facility from EPA's ICIS NPDES System.


```js
epa_gov_dfr.dfr_rest_services.get_cwa_3yr_d80d90_counts.get({
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
  * Results **required** [dfr007_Results](#dfr007_results)

### dfr_rest_services.get_cwa_3yr_d80d90_counts.post
Displays monlthly and quarterly counts of D80 and D90 Effluent Non Reporting Violations Related to the Facility from EPA's ICIS NPDES System.


```js
epa_gov_dfr.dfr_rest_services.get_cwa_3yr_d80d90_counts.post({
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
  * Results **required** [dfr007_Results](#dfr007_results)

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
  * Results **required** [dfr010_Results](#dfr010_results)

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
  * Results **required** [dfr010_Results](#dfr010_results)

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
  * Results **required** [dfr011_Results](#dfr011_results)

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
  * Results **required** [dfr011_Results](#dfr011_results)

### dfr_rest_services.get_cwa_eff_alr_exp.get
Placeholder


```js
epa_gov_dfr.dfr_rest_services.get_cwa_eff_alr_exp.get({
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
  * Results **required** [dfr0_get_cwa_eff_alr_exp.Results](#dfr0_get_cwa_eff_alr_exp.results)

### dfr_rest_services.get_cwa_eff_alr_exp.post
Placeholder


```js
epa_gov_dfr.dfr_rest_services.get_cwa_eff_alr_exp.post({
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
  * Results **required** [dfr0_get_cwa_eff_alr_exp.Results](#dfr0_get_cwa_eff_alr_exp.results)

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
  * Results **required** [dfr012_Results](#dfr012_results)

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
  * Results **required** [dfr012_Results](#dfr012_results)

### dfr_rest_services.get_cwa_eff_compliance_exp.get
Placeholder


```js
epa_gov_dfr.dfr_rest_services.get_cwa_eff_compliance_exp.get({
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
  * Results **required** [dfr0_get_cwa_eff_compliance_exp.Results](#dfr0_get_cwa_eff_compliance_exp.results)

### dfr_rest_services.get_cwa_eff_compliance_exp.post
Placeholder


```js
epa_gov_dfr.dfr_rest_services.get_cwa_eff_compliance_exp.post({
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
  * Results **required** [dfr0_get_cwa_eff_compliance_exp.Results](#dfr0_get_cwa_eff_compliance_exp.results)

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
  * Results **required** [dfr013_Results](#dfr013_results)

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
  * Results **required** [dfr013_Results](#dfr013_results)

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
  * Results **required** [dfr014_Results](#dfr014_results)

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
  * Results **required** [dfr014_Results](#dfr014_results)

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
  * Results **required** [dfr015_Results](#dfr015_results)

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
  * Results **required** [dfr015_Results](#dfr015_results)

### dfr_rest_services.get_d80d90s_details.get
Displays detailed D80/D90 Effluent Non Reporting  information from EPA's ICIS NPDES system for the facility for a given quarter or month.


```js
epa_gov_dfr.dfr_rest_services.get_d80d90s_details.get({}, context)
```

#### Input
* input `object`
  * output `string` (values: JSONP, JSON, XML): Output Format Flag.  Enter one of the following keywords:
  * p_npdes_id `string`: The NPDES_ID for the NPDES Permit to download DMR D80 and D90 Non-Receipt violations.
  * p_missinglate `string` (values: MISSING, LATE): For the D80.D90 download, identifies whether or not MISSINGviolations are downloaded or LATE violations are downloaded.  Valid values are:  MiISSING and LATE.
  * p_qmtype `string` (values: MONTH, QUARTER): Identifies the time frame type, month or quarter, for the D80/D90 download.
  * p_qmvalue `string`: A number between 1 and 39 that identifies the specific month or quarter for the D80/D90 violation download.
  * callback `string`: JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.

#### Output
* output `object`: Root Object
  * Results **required** [dfr0_get_d80d90s_details.Results](#dfr0_get_d80d90s_details.results)

### dfr_rest_services.get_d80d90s_details.post
Displays detailed D80/D90 Effluent Non Reporting  information from EPA's ICIS NPDES system for the facility for a given quarter or month.


```js
epa_gov_dfr.dfr_rest_services.get_d80d90s_details.post({}, context)
```

#### Input
* input `object`
  * output `string` (values: JSONP, JSON, XML): Output Format Flag.  Enter one of the following keywords:
  * p_npdes_id `string`: The NPDES_ID for the NPDES Permit to download DMR D80 and D90 Non-Receipt violations.
  * p_missinglate `string` (values: MISSING, LATE): For the D80.D90 download, identifies whether or not MISSINGviolations are downloaded or LATE violations are downloaded.  Valid values are:  MiISSING and LATE.
  * p_qmtype `string` (values: MONTH, QUARTER): Identifies the time frame type, month or quarter, for the D80/D90 download.
  * p_qmvalue `string`: A number between 1 and 39 that identifies the specific month or quarter for the D80/D90 violation download.
  * callback `string`: JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.

#### Output
* output `object`: Root Object
  * Results **required** [dfr0_get_d80d90s_details.Results](#dfr0_get_d80d90s_details.results)

### dfr_rest_services.get_demographics_by_id.get
Displays precalculated 2010 Census and American Community Survey demographic information for a provided facility identifier.


```js
epa_gov_dfr.dfr_rest_services.get_demographics_by_id.get({
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
  * Results **required** [dfr017_Results](#dfr017_results)

### dfr_rest_services.get_demographics_by_id.post
Displays precalculated 2010 Census and American Community Survey demographic information for a provided facility identifier.


```js
epa_gov_dfr.dfr_rest_services.get_demographics_by_id.post({
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
  * Results **required** [dfr017_Results](#dfr017_results)

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
  * Results **required** [dfr018_Results](#dfr018_results)

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
  * Results **required** [dfr018_Results](#dfr018_results)

### dfr_rest_services.get_ejscreen_indexes.get
Detailed Facility Report EJScreen Indexes Service


```js
epa_gov_dfr.dfr_rest_services.get_ejscreen_indexes.get({
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
  * Results **required** [dfr0_get_ejscreen_indexes.Results](#dfr0_get_ejscreen_indexes.results)

### dfr_rest_services.get_ejscreen_indexes.post
Detailed Facility Report EJScreen Indexes Service


```js
epa_gov_dfr.dfr_rest_services.get_ejscreen_indexes.post({
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
  * Results **required** [dfr0_get_ejscreen_indexes.Results](#dfr0_get_ejscreen_indexes.results)

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
  * Results **required** [dfr114_Results](#dfr114_results)

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
  * Results **required** [dfr114_Results](#dfr114_results)

### dfr_rest_services.get_extract_dates.get
By EPA System, displays the extract dates that data was extracted for the DFR from multiple EPA computer systems.


```js
epa_gov_dfr.dfr_rest_services.get_extract_dates.get({
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
  * Results **required** [dfr115](#dfr115)

### dfr_rest_services.get_extract_dates.post
By EPA System, displays the extract dates that data was extracted for the DFR from multiple EPA computer systems.


```js
epa_gov_dfr.dfr_rest_services.get_extract_dates.post({
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
  * Results **required** [dfr115](#dfr115)

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
  * Results **required** [dfr116_Results](#dfr116_results)

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
  * Results **required** [dfr116_Results](#dfr116_results)

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
  * Results **required** [dfr117_Results](#dfr117_results)

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
  * Results **required** [dfr117_Results](#dfr117_results)

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
  * Results **required** [dfr118_Results](#dfr118_results)

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
  * Results **required** [dfr118_Results](#dfr118_results)

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
  * Results **required** [dfr119_Results](#dfr119_results)

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
  * Results **required** [dfr119_Results](#dfr119_results)

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
  * Results **required** [dfr120_Results](#dfr120_results)

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
  * Results **required** [dfr120_Results](#dfr120_results)

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
  * Results **required** [dfr122_Results](#dfr122_results)

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
  * Results **required** [dfr122_Results](#dfr122_results)

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
  * Results **required** [dfr123_Results](#dfr123_results)

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
  * Results **required** [dfr123_Results](#dfr123_results)

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
  * Results **required** [dfr124_Results](#dfr124_results)

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
  * Results **required** [dfr124_Results](#dfr124_results)

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
  * Results **required** [dfr125_Results](#dfr125_results)

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
  * Results **required** [dfr125_Results](#dfr125_results)

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
  * Results **required** [dfr126_Results](#dfr126_results)

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
  * Results **required** [dfr126_Results](#dfr126_results)

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
  * Results **required** [dfr127_Results](#dfr127_results)

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
  * Results **required** [dfr127_Results](#dfr127_results)

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
  * Results **required** [dfr128_Results](#dfr128_results)

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
  * Results **required** [dfr128_Results](#dfr128_results)

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
  * Results **required** [dfr129_Results](#dfr129_results)

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
  * Results **required** [dfr129_Results](#dfr129_results)

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
  * Results **required** [dfr130_Results](#dfr130_results)

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
  * Results **required** [dfr130_Results](#dfr130_results)

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
  * Results **required** [dfr131_Results](#dfr131_results)

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
  * Results **required** [dfr131_Results](#dfr131_results)

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
  * Results **required** [dfr132_Results](#dfr132_results)

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
  * Results **required** [dfr132_Results](#dfr132_results)

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
  * Results **required** [dfr133_Results](#dfr133_results)

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
  * Results **required** [dfr133_Results](#dfr133_results)

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
  * Results **required** [dfr134_Results](#dfr134_results)

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
  * Results **required** [dfr134_Results](#dfr134_results)

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
  * callback `string`: JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.

#### Output
* output `object`: Root Object
  * Results **required** [dfr135_Results](#dfr135_results)

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
  * callback `string`: JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.

#### Output
* output `object`: Root Object
  * Results **required** [dfr135_Results](#dfr135_results)

### dfr_rest_services.get_water_quality_details.get
This information is only available for facilities with a NPDES permit. Based on spatial data, displays water quality information from EPA's Office of Water ATTAINS system.


```js
epa_gov_dfr.dfr_rest_services.get_water_quality_details.get({
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
  * Results **required** [dfr136_Results](#dfr136_results)

### dfr_rest_services.get_water_quality_details.post
This information is only available for facilities with a NPDES permit. Based on spatial data, displays water quality information from EPA's Office of Water ATTAINS system.


```js
epa_gov_dfr.dfr_rest_services.get_water_quality_details.post({
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
  * Results **required** [dfr136_Results](#dfr136_results)

### dfr_rest_services.rcra_3_yr_download.get
For the provided system identifier, dowloads all displayed RCRA quaterly/monthly Facility Level Status and Violation information in a Comma Seperated Value (CSV) format.


```js
epa_gov_dfr.dfr_rest_services.rcra_3_yr_download.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `file`

### dfr_rest_services.rcra_3_yr_download.post
For the provided system identifier, dowloads all displayed RCRA quaterly/monthly Facility Level Status and Violation information in a Comma Seperated Value (CSV) format.


```js
epa_gov_dfr.dfr_rest_services.rcra_3_yr_download.post(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `file`



## Definitions

### dfr001_Results
* dfr001_Results `object`: Results Object
  * AirCompliance [dfr019](#dfr019)
  * Message **required** `string`: Field to record messages (typically performance-related) about packet processing

### dfr002_Results
* dfr002_Results `object`: Results Object
  * AirQuality [dfr024](#dfr024)
  * Message **required** `string`: Field to record messages (typically performance-related) about packet processing

### dfr004
* dfr004 `object`: Results Object
  * CaseFormalActions [dfr052](#dfr052)
  * Message **required** `string`: Field to record messages (typically performance-related) about packet processing

### dfr005_Results
* dfr005_Results `object`: Results Object
  * ComplianceHistory [dfr057](#dfr057)
  * Message **required** `string`: Field to record messages (typically performance-related) about packet processing

### dfr006_Results
* dfr006_Results `object`: Results Object
  * ComplianceSummary [dfr059](#dfr059)
  * Message **required** `string`: Field to record messages (typically performance-related) about packet processing

### dfr007_Results
* dfr007_Results `object`: Results Object
  * CWA3YrD80D90Counts **required** [dfr027](#dfr027)
  * Message **required** `string`: Field to record messages (typically performance-related) about packet processing

### dfr009_Results
* dfr009_Results `object`: Results Object
  * CWA3YrCompliance [dfr025](#dfr025)
  * Message **required** `string`: Field to record messages (typically performance-related) about packet processing

### dfr010_Results
* dfr010_Results `object`: Results Object
  * CWACSCompliance [dfr031](#dfr031)
  * Message **required** `string`: Field to record messages (typically performance-related) about packet processing

### dfr011_Results
* dfr011_Results `object`: Results Object
  * CWAEffluentALRExceedences [dfr035](#dfr035)
  * Message **required** `string`: Field to record messages (typically performance-related) about packet processing

### dfr012_Results
* dfr012_Results `object`: Results Object
  * CWAEffluentCompliance [dfr038](#dfr038)
  * Message **required** `string`: Field to record messages (typically performance-related) about packet processing

### dfr013_Results
* dfr013_Results `object`: Results Object
  * CWAPSCompliance [dfr042](#dfr042)
  * Message **required** `string`: Field to record messages (typically performance-related) about packet processing

### dfr014_Results
* dfr014_Results `object`: Results Object
  * CWARNCCompliance [dfr046](#dfr046)
  * Message **required** `string`: Field to record messages (typically performance-related) about packet processing

### dfr015_Results
* dfr015_Results `object`: Results Object
  * CWASECompliance [dfr049](#dfr049)
  * Message **required** `string`: Field to record messages (typically performance-related) about packet processing

### dfr017_Results
* dfr017_Results `object`: Results Object
  * Demographics [dfr061](#dfr061)
  * Message **required** `string`: Field to record messages (typically performance-related) about packet processing

### dfr018_CAEDDocuments
* dfr018_CAEDDocuments `object`: CAED Documents
  * DocumentLink `string`: URLS for documents that EPA has colleted that are related to this Case.
  * EPAProgram `string`: The EPA Program associated with the Document URL
  * FacilityName `string`: The name of the facility.
  * PublishDate `string`: The date the document was published.
  * RegistryId `string`: 12-digit Facility Registry Service (FRS) identification number.  FRS uniquely identifies a facility by assigning an identification number (FRS ID), and uses this FRS ID to link together all EPA regulatory program database records

### dfr018_EJScreenIndexes
* dfr018_EJScreenIndexes `object`: EJScreen Index Object
  * HazardWasteProximity **required** `string`
  * LeadPaintIndicator **required** `string`
  * NATACancerRisk **required** `string`
  * NATADieselPM **required** `string`
  * NATARespiratoryHI **required** `string`
  * Over80Count **required** `string`
  * Ozone **required** `string`
  * PM25 **required** `string`
  * RMPProximity **required** `string`
  * RegistryID **required** `string`: An internal 12-digit Facility Registry Service (FRS) tracking number used to tie all facility data together in EPA regulatory program databases.
  * SuperfundProximity **required** `string`
  * TrafficProximity **required** `string`
  * WaterDischargeProximity **required** `string`

### dfr018_MapData
* dfr018_MapData `object`: Map Data Object
  * ICON **required** `string`: Name of each individual icon file within the URL base
  * LAT **required** `string`: The latitude of the facility in degrees, to four decimal places
  * LON **required** `string`: The longitude of the facility in degrees, to four decimal places
  * NAME **required** `string`: For DFR, this is the Facility name. The name corresponds to the TYPE value
  * PUV **required** `string`: Pop up value. Combine with PopUpBaseURL to give the popup for the facility
  * TYPE **required** `string`: For DFR, this is always facility

### dfr018_MultipleFRSFacilities
* dfr018_MultipleFRSFacilities `object`: Multiple FRS Facilities Object
  * RegistryIDs `array`
    * items [dfr018_RegistryIDs](#dfr018_registryids)

### dfr018_NAICS
* dfr018_NAICS `object`: NAICS Object
  * Sources **required** `array`
    * items [dfr074](#dfr074)

### dfr018_Permits
* dfr018_Permits `object`: Permits Object
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
  * HasBioRpt **required** `string`: Indicates if the facility has an associated Biosolids Facility Report.
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

### dfr018_ProgramDates
* dfr018_ProgramDates `object`: Program Dates Object
  * EndDate **required** `string`: End date for the date range of interest. Formatted as mm/dd/yyyy
  * Program **required** `string`: The source database for the EPA programs information.
  * StartDate **required** `string`: Starting date for the date range of interest. Formatted as mm/dd/yyyy

### dfr018_RegistryIDs
* dfr018_RegistryIDs `object`: Registry IDs Object
  * EPASystem `string`: The EPA data system in which permit and facility records are kept. EPA's Facility Registry System (FRS) links all program database records (such as permit IDs and IDs facilities use in reporting to EPA) together. The following list describes the individual data systems that are linked to from the detailed facility report: 
  * FacilityCity `string`: The city in which the facility is located
  * FacilityCounty `string`: The county that the facility is located in.
  * FacilityName `string`: The name of the facility.
  * FacilityState `string`: The state in which the facility is located
  * FacilityStreet `string`: The street address of the facility
  * FacilityZip `string`: The zip code of the area in which the facility is located
  * RegistryId `string`: 12-digit Facility Registry Service (FRS) identification number.  FRS uniquely identifies a facility by assigning an identification number (FRS ID), and uses this FRS ID to link together all EPA regulatory program database records

### dfr018_Reports
* dfr018_Reports `object`: Reports Object
  * HasPollRpt **required** `string`: ???

### dfr018_Results
* dfr018_Results `object`: Results Object
  * AirCompliance [dfr019](#dfr019)
  * AirQuality [dfr024](#dfr024)
  * CAEDDocuments `array`
    * items [dfr018_CAEDDocuments](#dfr018_caeddocuments)
  * CWA3YrCompliance [dfr025](#dfr025)
  * CWA3YrD80D90Counts [dfr027](#dfr027)
  * CWACSCompliance [dfr031](#dfr031)
  * CWAEffluentALRExceedences [dfr035](#dfr035)
  * CWAEffluentALRExceedencesEXP [dfr035_EXP](#dfr035_exp)
  * CWAEffluentCompliance [dfr038](#dfr038)
  * CWAEffluentComplianceEXP [dfr038_EXP](#dfr038_exp)
  * CWAPSCompliance [dfr042](#dfr042)
  * CWARNCCompliance [dfr046](#dfr046)
  * CWASECompliance [dfr049](#dfr049)
  * CaseFormalActions [dfr052](#dfr052)
  * ComplianceHistory [dfr057](#dfr057)
  * ComplianceSummary [dfr059](#dfr059)
  * Demographics [dfr061](#dfr061)
  * EJScreenIndexes [dfr018_EJScreenIndexes](#dfr018_ejscreenindexes)
  * EnforcementComplianceSummaries [dfr062](#dfr062)
  * FormalActions [dfr064](#dfr064)
  * ICISFormalActions [dfr066](#dfr066)
  * InspectionEnforcementSummary [dfr068](#dfr068)
  * LeadAndCopperRule5Yr [dfr070](#dfr070)
  * MapOutput [dfr073](#dfr073)
  * Message **required** `string`: Field to record messages (typically performance-related) about packet processing
  * MultipleFRSFacilities [dfr018_MultipleFRSFacilities](#dfr018_multiplefrsfacilities)
  * NAICS [dfr018_NAICS](#dfr018_naics)
  * Notices [dfr076](#dfr076)
  * Permits `array`
    * items [dfr018_Permits](#dfr018_permits)
  * RCRACompliance [dfr078](#dfr078)
  * Reports [dfr018_Reports](#dfr018_reports)
  * SDWISCompliance [dfr081](#dfr081)
  * SIC [dfr084](#dfr084)
  * SanitarySurveys [dfr086](#dfr086)
  * SiteVisits [dfr090](#dfr090)
  * SpatialMetadata [dfr094](#dfr094)
  * SystemExtractDates [dfr095](#dfr095)
  * TRIHistory [dfr098](#dfr098)
  * TRIReleases [dfr102](#dfr102)
  * Tribes `array`
    * items [dfr105](#dfr105)
  * ViolationsEnforcementActions [dfr106](#dfr106)
  * WaterQuality [dfr111](#dfr111)
  * WaterQualityDetails [dfr111_Details](#dfr111_details)
  * WebFireDocuments `array`
    * items [dfr018_WebFireDocuments](#dfr018_webfiredocuments)

### dfr018_Summaries
* dfr018_Summaries `object`: Summaries Object
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

### dfr018_WebFireDocuments
* dfr018_WebFireDocuments `object`: Web Fire Documents
  * DocumentLink **required** `string`: URLS for documents that EPA has colleted that are related to this Case.
  * DocumentName **required** `string`: The most severe compliance status for an outfall and parameter during the entire selected date range
  * DocumentType **required** `string`: The most severe compliance status for an outfall and parameter during the entire selected date range
  * FacilityName **required** `string`: The name of the facility.
  * RegistryId **required** `string`: 12-digit Facility Registry Service (FRS) identification number.  FRS uniquely identifies a facility by assigning an identification number (FRS ID), and uses this FRS ID to link together all EPA regulatory program database records
  * ReportDocType **required** `string`: The most severe compliance status for an outfall and parameter during the entire selected date range
  * ReportSubmissionDate **required** `string`: The most severe compliance status for an outfall and parameter during the entire selected date range

### dfr019
* dfr019 `object`: Air Compliance Object
  * Header [dfr0_Qtr12Header](#dfr0_qtr12header)
  * Sources `array`
    * items [dfr020](#dfr020)

### dfr020
* dfr020 `object`: Source Object
  * AFSPrograms **required** `array`
    * items [dfr021](#dfr021)
  * FRVProgramsPollutants **required** `array`
    * items [dfr022](#dfr022)
  * HPVHistory **required** [dfr020_.HPVHistory](#dfr020_.hpvhistory)
  * HPVProgramsPollutants **required** `array`
    * items [dfr023](#dfr023)
  * PermitHistory **required** [dfr020_.PermitHistory](#dfr020_.permithistory)

### dfr020_.HPVHistory
* dfr020_.HPVHistory `object`: HPV History Object
  * Mnth10Status **required** `string`: The compliance status of the tenth month.
  * Mnth11Status **required** `string`: The compliance status of the eleventh month.
  * Mnth12Status **required** `string`: The compliance status of the twelfth month.
  * Mnth13Status **required** `string`: The compliance status of the thirteenth month.
  * Mnth14Status **required** `string`: The compliance status of the fourteenth month.
  * Mnth15Status **required** `string`: The compliance status of the fifteenth month.
  * Mnth16Status **required** `string`: The compliance status of the sixteenth month.
  * Mnth17Status **required** `string`: The compliance status of the seventeenth month.
  * Mnth18Status **required** `string`: The compliance status of the eighteenth month.
  * Mnth19Status **required** `string`: The compliance status of the ninteenth month.
  * Mnth1Status **required** `string`: The compliance status of the first month.
  * Mnth20Status **required** `string`: The compliance status of the twentieth month.
  * Mnth21Status **required** `string`: The compliance status of the twenty-first month.
  * Mnth22Status **required** `string`: The compliance status of the twenty-second month.
  * Mnth23Status **required** `string`: The compliance status of the twenty-third month.
  * Mnth24Status **required** `string`: The compliance status of the twenty-fourth month.
  * Mnth25Status **required** `string`: The compliance status of the twenty-fifth month.
  * Mnth26Status **required** `string`: The compliance status of the twenty-sixth month.
  * Mnth27Status **required** `string`: The compliance status of the twenty-seventh month.
  * Mnth28Status **required** `string`: The compliance status of the twenty-eighth month.
  * Mnth29Status **required** `string`: The compliance status of the twenty-ninth month.
  * Mnth2Status **required** `string`: The compliance status of the second month.
  * Mnth30Status **required** `string`: The compliance status of the thirtieth month.
  * Mnth31Status **required** `string`: The compliance status of the thirty-first month.
  * Mnth32Status **required** `string`: The compliance status of the thirty-second month.
  * Mnth33Status **required** `string`: The compliance status of the thirty-third month.
  * Mnth34Status **required** `string`: The compliance status of the thirty-fourth month.
  * Mnth35Status **required** `string`: The compliance status of the thirty-fifth month.
  * Mnth36Status **required** `string`: The compliance status of the thirty-sixth month.
  * Mnth3Status **required** `string`: The compliance status of the third month.
  * Mnth4Status **required** `string`: The compliance status of the fourth month.
  * Mnth5Status **required** `string`: The compliance status of the fifth month.
  * Mnth6Status **required** `string`: The compliance status of the sixth month.
  * Mnth7Status **required** `string`: The compliance status of the seventh month.
  * Mnth8Status **required** `string`: The compliance status of the eighth month.
  * Mnth9Status **required** `string`: The compliance status of the ninth month.
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

### dfr020_.PermitHistory
* dfr020_.PermitHistory `object`: Permit History Object
  * Mnth10Status **required** `string`: The compliance status of the tenth month.
  * Mnth11Status **required** `string`: The compliance status of the eleventh month.
  * Mnth12Status **required** `string`: The compliance status of the twelfth month.
  * Mnth13Status **required** `string`: The compliance status of the thirteenth month.
  * Mnth14Status **required** `string`: The compliance status of the fourteenth month.
  * Mnth15Status **required** `string`: The compliance status of the fifteenth month.
  * Mnth16Status **required** `string`: The compliance status of the sixteenth month.
  * Mnth17Status **required** `string`: The compliance status of the seventeenth month.
  * Mnth18Status **required** `string`: The compliance status of the eighteenth month.
  * Mnth19Status **required** `string`: The compliance status of the ninteenth month.
  * Mnth1Status **required** `string`: The compliance status of the first month.
  * Mnth20Status **required** `string`: The compliance status of the twentieth month.
  * Mnth21Status **required** `string`: The compliance status of the twenty-first month.
  * Mnth22Status **required** `string`: The compliance status of the twenty-second month.
  * Mnth23Status **required** `string`: The compliance status of the twenty-third month.
  * Mnth24Status **required** `string`: The compliance status of the twenty-fourth month.
  * Mnth25Status **required** `string`: The compliance status of the twenty-fifth month.
  * Mnth26Status **required** `string`: The compliance status of the twenty-sixth month.
  * Mnth27Status **required** `string`: The compliance status of the twenty-seventh month.
  * Mnth28Status **required** `string`: The compliance status of the twenty-eighth month.
  * Mnth29Status **required** `string`: The compliance status of the twenty-ninth month.
  * Mnth2Status **required** `string`: The compliance status of the second month.
  * Mnth30Status **required** `string`: The compliance status of the thirtieth month.
  * Mnth31Status **required** `string`: The compliance status of the thirty-first month.
  * Mnth32Status **required** `string`: The compliance status of the thirty-second month.
  * Mnth33Status **required** `string`: The compliance status of the thirty-third month.
  * Mnth34Status **required** `string`: The compliance status of the thirty-fourth month.
  * Mnth35Status **required** `string`: The compliance status of the thirty-fifth month.
  * Mnth36Status **required** `string`: The compliance status of the thirty-sixth month.
  * Mnth3Status **required** `string`: The compliance status of the third month.
  * Mnth4Status **required** `string`: The compliance status of the fourth month.
  * Mnth5Status **required** `string`: The compliance status of the fifth month.
  * Mnth6Status **required** `string`: The compliance status of the sixth month.
  * Mnth7Status **required** `string`: The compliance status of the seventh month.
  * Mnth8Status **required** `string`: The compliance status of the eighth month.
  * Mnth9Status **required** `string`: The compliance status of the ninth month.
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

### dfr021
* dfr021 `object`: AFS Program Object
  * AirPrograms **required** `string`: The air program under to which the facility or operation is subject.
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

### dfr022
* dfr022 `object`: FRV Programs Pollutant Object
  * Agency **required** `string`: Identifies the lead agency (e.g., EPA, State) conducting the inspection. 
  * AirPollutants **required** `string`: The air pollutant(s) for which the facility is in violation.
  * AirPrograms **required** `string`: The air program under to which the facility or operation is subject.
  * ERPType **required** `string`: Air Facility System (AFS) ID.
  * Mnth10Status **required** `string`: The compliance status of the tenth month.
  * Mnth11Status **required** `string`: The compliance status of the eleventh month.
  * Mnth12Status **required** `string`: The compliance status of the twelfth month.
  * Mnth13Status **required** `string`: The compliance status of the thirteenth month.
  * Mnth14Status **required** `string`: The compliance status of the fourteenth month.
  * Mnth15Status **required** `string`: The compliance status of the fifteenth month.
  * Mnth16Status **required** `string`: The compliance status of the sixteenth month.
  * Mnth17Status **required** `string`: The compliance status of the seventeenth month.
  * Mnth18Status **required** `string`: The compliance status of the eighteenth month.
  * Mnth19Status **required** `string`: The compliance status of the ninteenth month.
  * Mnth1Status **required** `string`: The compliance status of the first month.
  * Mnth20Status **required** `string`: The compliance status of the twentieth month.
  * Mnth21Status **required** `string`: The compliance status of the twenty-first month.
  * Mnth22Status **required** `string`: The compliance status of the twenty-second month.
  * Mnth23Status **required** `string`: The compliance status of the twenty-third month.
  * Mnth24Status **required** `string`: The compliance status of the twenty-fourth month.
  * Mnth25Status **required** `string`: The compliance status of the twenty-fifth month.
  * Mnth26Status **required** `string`: The compliance status of the twenty-sixth month.
  * Mnth27Status **required** `string`: The compliance status of the twenty-seventh month.
  * Mnth28Status **required** `string`: The compliance status of the twenty-eighth month.
  * Mnth29Status **required** `string`: The compliance status of the twenty-ninth month.
  * Mnth2Status **required** `string`: The compliance status of the second month.
  * Mnth30Status **required** `string`: The compliance status of the thirtieth month.
  * Mnth31Status **required** `string`: The compliance status of the thirty-first month.
  * Mnth32Status **required** `string`: The compliance status of the thirty-second month.
  * Mnth33Status **required** `string`: The compliance status of the thirty-third month.
  * Mnth34Status **required** `string`: The compliance status of the thirty-fourth month.
  * Mnth35Status **required** `string`: The compliance status of the thirty-fifth month.
  * Mnth36Status **required** `string`: The compliance status of the thirty-sixth month.
  * Mnth3Status **required** `string`: The compliance status of the third month.
  * Mnth4Status **required** `string`: The compliance status of the fourth month.
  * Mnth5Status **required** `string`: The compliance status of the fifth month.
  * Mnth6Status **required** `string`: The compliance status of the sixth month.
  * Mnth7Status **required** `string`: The compliance status of the seventh month.
  * Mnth8Status **required** `string`: The compliance status of the eighth month.
  * Mnth9Status **required** `string`: The compliance status of the ninth month.
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

### dfr023
* dfr023 `object`: HPV Programs Pollutant Object
  * Agency **required** `string`: Identifies the lead agency (e.g., EPA, State) conducting the inspection. 
  * AirPollutants **required** `string`: The air pollutant(s) for which the facility is in violation.
  * AirPrograms **required** `string`: The air program under to which the facility or operation is subject.
  * ERPType **required** `string`: Air Facility System (AFS) ID.
  * Mnth10Status **required** `string`: The compliance status of the tenth month.
  * Mnth11Status **required** `string`: The compliance status of the eleventh month.
  * Mnth12Status **required** `string`: The compliance status of the twelfth month.
  * Mnth13Status **required** `string`: The compliance status of the thirteenth month.
  * Mnth14Status **required** `string`: The compliance status of the fourteenth month.
  * Mnth15Status **required** `string`: The compliance status of the fifteenth month.
  * Mnth16Status **required** `string`: The compliance status of the sixteenth month.
  * Mnth17Status **required** `string`: The compliance status of the seventeenth month.
  * Mnth18Status **required** `string`: The compliance status of the eighteenth month.
  * Mnth19Status **required** `string`: The compliance status of the ninteenth month.
  * Mnth1Status **required** `string`: The compliance status of the first month.
  * Mnth20Status **required** `string`: The compliance status of the twentieth month.
  * Mnth21Status **required** `string`: The compliance status of the twenty-first month.
  * Mnth22Status **required** `string`: The compliance status of the twenty-second month.
  * Mnth23Status **required** `string`: The compliance status of the twenty-third month.
  * Mnth24Status **required** `string`: The compliance status of the twenty-fourth month.
  * Mnth25Status **required** `string`: The compliance status of the twenty-fifth month.
  * Mnth26Status **required** `string`: The compliance status of the twenty-sixth month.
  * Mnth27Status **required** `string`: The compliance status of the twenty-seventh month.
  * Mnth28Status **required** `string`: The compliance status of the twenty-eighth month.
  * Mnth29Status **required** `string`: The compliance status of the twenty-ninth month.
  * Mnth2Status **required** `string`: The compliance status of the second month.
  * Mnth30Status **required** `string`: The compliance status of the thirtieth month.
  * Mnth31Status **required** `string`: The compliance status of the thirty-first month.
  * Mnth32Status **required** `string`: The compliance status of the thirty-second month.
  * Mnth33Status **required** `string`: The compliance status of the thirty-third month.
  * Mnth34Status **required** `string`: The compliance status of the thirty-fourth month.
  * Mnth35Status **required** `string`: The compliance status of the thirty-fifth month.
  * Mnth36Status **required** `string`: The compliance status of the thirty-sixth month.
  * Mnth3Status **required** `string`: The compliance status of the third month.
  * Mnth4Status **required** `string`: The compliance status of the fourth month.
  * Mnth5Status **required** `string`: The compliance status of the fifth month.
  * Mnth6Status **required** `string`: The compliance status of the sixth month.
  * Mnth7Status **required** `string`: The compliance status of the seventh month.
  * Mnth8Status **required** `string`: The compliance status of the eighth month.
  * Mnth9Status **required** `string`: The compliance status of the ninth month.
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

### dfr024
* dfr024 `object`: Air Quality Object
  * CarbonMonoxide1971Area `string`: Indicates the relevant National Ambient Air Quality Standards (NAAQS) nontattinment standard for Carbon Monoxide (1971).
  * Lead1978Area `string`: Indicates the relevant National Ambient Air Quality Standards (NAAQS) nontattinment standard for Lead (1978).
  * Lead2008Area `string`: If null, the facility is not located in a designated non-attainment area. If populated, the value is the name of the non-attainment area; normally this is a city or county name
  * NitrogenDioxide1971Area `string`: Indicates the relevant National Ambient Air Quality Standards (NAAQS) nontattinment standard for Nitrogen Dioxide (1971).
  * Ozone8hr1997Area `string`: If null, the facility is not located in a designated non-attainment area. If populated, the value is the name of the non-attainment area; normally this is a city or county name
  * Ozone8hr2008Area `string`: If null, the facility is not located in a designated non-attainment area. If populated, the value is the name of the non-attainment area; normally this is a city or county name
  * Ozone8hr2015Area `string`: Indicates the relevant National Ambient Air Quality Standards (NAAQS) nontattinment standard for 8-Hour Ozone (2005).
  * ParticulateMatter1987Area `string`: Indicates the relevant National Ambient Air Quality Standards (NAAQS) nontattinment standard for Particulate Matter (1987).
  * ParticulateMatter1997Area `string`: If null, the facility is not located in a designated non-attainment area. If populated, the value is the name of the non-attainment area; normally this is a city or county name
  * ParticulateMatter2006Area `string`: If null, the facility is not located in a designated non-attainment area. If populated, the value is the name of the non-attainment area; normally this is a city or county name
  * ParticulateMatter2012Area `string`: Indicates the relevant National Ambient Air Quality Standards (NAAQS) nontattinment standard for Particulate Matter (2012).
  * SulfurDioxide1971Area `string`: Indicates the relevant National Ambient Air Quality Standards (NAAQS) nontattinment standard for Sulfur Dioxide (1971).
  * SulfurDioxide2010Area `string`: If null, the facility is not located in a designated non-attainment area. If populated, the value is the name of the non-attainment area; normally this is a city or county name

### dfr025
* dfr025 `object`: CWA 3-Year Compliance Object
  * Header [dfr0_Qtr13Header](#dfr0_qtr13header)
  * Sources `array`
    * items [dfr026](#dfr026)

### dfr026
* dfr026 `object`: CWA 3-Year Compliance Sources Object
  * Status **required** `array`
    * items [dfr0_Qtr13Status](#dfr0_qtr13status)

### dfr027
* dfr027 `object`: CWA 3-Year D80D90 Counts
  * Header [dfr0_Qtr13Header](#dfr0_qtr13header)
  * Sources `array`
    * items [dfr029](#dfr029)

### dfr029
* dfr029 `object`: CWA 3-Year D80D90 Sources Object
  * Status **required** `array`
    * items [dfr030](#dfr030)

### dfr030
* dfr030 `object`: Status Object
  * MissingLate **required** `string`: Indicates if the permitted facility submitted missing or late DMRS to the NPDES permitting authority within the past three years.
  * Mnth10Count **required** `string`: The count of missing or late Discharge Monitoring Report (DMR) measurements in the tenth month.
  * Mnth11Count **required** `string`: The count of missing or late Discharge Monitoring Report (DMR) measurements in the eleventh month.
  * Mnth12Count **required** `string`: The count of missing or late Discharge Monitoring Report (DMR) measurements in the twelfth month.
  * Mnth13Count **required** `string`: The count of missing or late Discharge Monitoring Report (DMR) measurements in the thirteenth month.
  * Mnth14Count **required** `string`: The count of missing or late Discharge Monitoring Report (DMR) measurements in the fourteenth month.
  * Mnth15Count **required** `string`: The count of missing or late Discharge Monitoring Report (DMR) measurements in the fifteenth month.
  * Mnth16Count **required** `string`: The count of missing or late Discharge Monitoring Report (DMR) measurements in the sixteenth month.
  * Mnth17Count **required** `string`: The count of missing or late Discharge Monitoring Report (DMR) measurements in the seventeenth month.
  * Mnth18Count **required** `string`: The count of missing or late Discharge Monitoring Report (DMR) measurements in the eighteenth month.
  * Mnth19Count **required** `string`: The count of missing or late Discharge Monitoring Report (DMR) measurements in the ninteenth month.
  * Mnth1Count **required** `string`: The count of missing or late Discharge Monitoring Report (DMR) measurements in the first month.
  * Mnth20Count **required** `string`: The count of missing or late Discharge Monitoring Report (DMR) measurements in the twentieth month.
  * Mnth21Count **required** `string`: The count of missing or late Discharge Monitoring Report (DMR) measurements in the twenty-first month.
  * Mnth22Count **required** `string`: The count of missing or late Discharge Monitoring Report (DMR) measurements in the twenty-second month.
  * Mnth23Count **required** `string`: The count of missing or late Discharge Monitoring Report (DMR) measurements in the twenty-third month.
  * Mnth24Count **required** `string`: The count of missing or late Discharge Monitoring Report (DMR) measurements in the twenty-fourth month.
  * Mnth25Count **required** `string`: The count of missing or late Discharge Monitoring Report (DMR) measurements in the twenty-fifth month.
  * Mnth26Count **required** `string`: The count of missing or late Discharge Monitoring Report (DMR) measurements in the twenty-sixth month.
  * Mnth27Count **required** `string`: The count of missing or late Discharge Monitoring Report (DMR) measurements in the twenty-seventh month.
  * Mnth28Count **required** `string`: The count of missing or late Discharge Monitoring Report (DMR) measurements in the twenty-eighth month.
  * Mnth29Count **required** `string`: The count of missing or late Discharge Monitoring Report (DMR) measurements in the twenty-ninth month.
  * Mnth2Count **required** `string`: The count of missing or late Discharge Monitoring Report (DMR) measurements in the second month.
  * Mnth30Count **required** `string`: The count of missing or late Discharge Monitoring Report (DMR) measurements in the thirtieth month.
  * Mnth31Count **required** `string`: The count of missing or late Discharge Monitoring Report (DMR) measurements in the thirty-first month.
  * Mnth32Count **required** `string`: The count of missing or late Discharge Monitoring Report (DMR) measurements in the thirty-second month.
  * Mnth33Count **required** `string`: The count of missing or late Discharge Monitoring Report (DMR) measurements in the thirty-third month.
  * Mnth34Count **required** `string`: The count of missing or late Discharge Monitoring Report (DMR) measurements in the thirty-fourth month.
  * Mnth35Count **required** `string`: The count of missing or late Discharge Monitoring Report (DMR) measurements in the thirty-fifth month.
  * Mnth36Count **required** `string`: The count of missing or late Discharge Monitoring Report (DMR) measurements in the thirty-sixth month.
  * Mnth37Count **required** `string`: The count of missing or late Discharge Monitoring Report (DMR) measurements in the thirty-seventh month.
  * Mnth38Count **required** `string`: The count of missing or late Discharge Monitoring Report (DMR) measurements in the thirty-eighth month.
  * Mnth39Count **required** `string`: The count of missing or late Discharge Monitoring Report (DMR) measurements in the thirty-ninth month.
  * Mnth3Count **required** `string`: The count of missing or late Discharge Monitoring Report (DMR) measurements in the third month.
  * Mnth4Count **required** `string`: The count of missing or late Discharge Monitoring Report (DMR) measurements in the fourth month.
  * Mnth5Count **required** `string`: The count of missing or late Discharge Monitoring Report (DMR) measurements in the fifth month.
  * Mnth6Count **required** `string`: The count of missing or late Discharge Monitoring Report (DMR) measurements in the sixth month.
  * Mnth7Count **required** `string`: The count of missing or late Discharge Monitoring Report (DMR) measurements in the seventh month.
  * Mnth8Count **required** `string`: The count of missing or late Discharge Monitoring Report (DMR) measurements in the eighth month.
  * Mnth9Count **required** `string`: The count of missing or late Discharge Monitoring Report (DMR) measurements in the ninth month.
  * Qtr10Count **required** `string`: The count of missing or late Discharge Monitoring Report (DMR) measurements in the tenth quarter.
  * Qtr11Count **required** `string`: The count of missing or late Discharge Monitoring Report (DMR) measurements in the eleventh quarter.
  * Qtr12Count **required** `string`: The count of missing or late Discharge Monitoring Report (DMR) measurements in the twelfth quarter.
  * Qtr13Count **required** `string`: The count of missing or late Discharge Monitoring Report (DMR) measurements in the thirteenth quarter.
  * Qtr1Count **required** `string`: The count of missing or late Discharge Monitoring Report (DMR) measurements in the first quarter.
  * Qtr2Count **required** `string`: The count of missing or late Discharge Monitoring Report (DMR) measurements in the second quarter.
  * Qtr3Count **required** `string`: The count of missing or late Discharge Monitoring Report (DMR) measurements in the third quarter.
  * Qtr4Count **required** `string`: The count of missing or late Discharge Monitoring Report (DMR) measurements in the fourth quarter.
  * Qtr5Count **required** `string`: The count of missing or late Discharge Monitoring Report (DMR) measurements in the fifth quarter.
  * Qtr6Count **required** `string`: The count of missing or late Discharge Monitoring Report (DMR) measurements in the sixth quarter.
  * Qtr7Count **required** `string`: The count of missing or late Discharge Monitoring Report (DMR) measurements in the seventh quarter.
  * Qtr8Count **required** `string`: The count of missing or late Discharge Monitoring Report (DMR) measurements in the eighth quarter.
  * Qtr9Count **required** `string`: The count of missing or late Discharge Monitoring Report (DMR) measurements in the ninth quarter.
  * SourceID **required** `string`: Unique Identifier assigned by EPA.

### dfr031
* dfr031 `object`: CWA CS Compliance Object
  * Header [dfr0_Qtr13Header](#dfr0_qtr13header)
  * Sources `array`
    * items [dfr032](#dfr032)

### dfr032
* dfr032 `object`: Sources Object
  * Violations **required** `array`
    * items [dfr034](#dfr034)

### dfr034
* dfr034 `object`: Violations Object
  * Mnth10Status **required** `string`: The compliance status of the tenth month.
  * Mnth10Value **required** `string`: The value associated with the noncompliance in the tenth month. This may be a percent exceedance or a violation start or end date.
  * Mnth11Status **required** `string`: The compliance status of the eleventh month.
  * Mnth11Value **required** `string`: The value associated with the noncompliance in the eleventh month. This may be a percent exceedance or a violation start or end date.
  * Mnth12Status **required** `string`: The compliance status of the twelfth month.
  * Mnth12Value **required** `string`: The value associated with the noncompliance in the twelfth month. This may be a percent exceedance or a violation start or end date.
  * Mnth13Status **required** `string`: The compliance status of the thirteenth month.
  * Mnth13Value **required** `string`: The value associated with the noncompliance in the thirteenth month. This may be a percent exceedance or a violation start or end date.
  * Mnth14Status **required** `string`: The compliance status of the fourteenth month.
  * Mnth14Value **required** `string`: The value associated with the noncompliance in the fourteenth month. This may be a percent exceedance or a violation start or end date.
  * Mnth15Status **required** `string`: The compliance status of the fifteenth month.
  * Mnth15Value **required** `string`: The value associated with the noncompliance in the fifteenth month. This may be a percent exceedance or a violation start or end date.
  * Mnth16Status **required** `string`: The compliance status of the sixteenth month.
  * Mnth16Value **required** `string`: The value associated with the noncompliance in the sixteenth month. This may be a percent exceedance or a violation start or end date.
  * Mnth17Status **required** `string`: The compliance status of the seventeenth month.
  * Mnth17Value **required** `string`: The value associated with the noncompliance in the seventeenth month. This may be a percent exceedance or a violation start or end date.
  * Mnth18Status **required** `string`: The compliance status of the eighteenth month.
  * Mnth18Value **required** `string`: The value associated with the noncompliance in the eighteenth month. This may be a percent exceedance or a violation start or end date.
  * Mnth19Status **required** `string`: The compliance status of the ninteenth month.
  * Mnth19Value **required** `string`: The value associated with the noncompliance in the ninteenth month. This may be a percent exceedance or a violation start or end date.
  * Mnth1Status **required** `string`: The compliance status of the first month.
  * Mnth1Value **required** `string`: The value associated with the noncompliance in the first month. This may be a percent exceedance or a violation start or end date.
  * Mnth20Status **required** `string`: The compliance status of the twentieth month.
  * Mnth20Value **required** `string`: The value associated with the noncompliance in the twentieth month. This may be a percent exceedance or a violation start or end date.
  * Mnth21Status **required** `string`: The compliance status of the twenty-first month.
  * Mnth21Value **required** `string`: The value associated with the noncompliance in the twenty-first month. This may be a percent exceedance or a violation start or end date.
  * Mnth22Status **required** `string`: The compliance status of the twenty-second month.
  * Mnth22Value **required** `string`: The value associated with the noncompliance in the twenty-second month. This may be a percent exceedance or a violation start or end date.
  * Mnth23Status **required** `string`: The compliance status of the twenty-third month.
  * Mnth23Value **required** `string`: The value associated with the noncompliance in the twenty-third month. This may be a percent exceedance or a violation start or end date.
  * Mnth24Status **required** `string`: The compliance status of the twenty-fourth month.
  * Mnth24Value **required** `string`: The value associated with the noncompliance in the twenty-fourth month. This may be a percent exceedance or a violation start or end date.
  * Mnth25Status **required** `string`: The compliance status of the twenty-fifth month.
  * Mnth25Value **required** `string`: The value associated with the noncompliance in the twenty-fifth month. This may be a percent exceedance or a violation start or end date.
  * Mnth26Status **required** `string`: The compliance status of the twenty-sixth month.
  * Mnth26Value **required** `string`: The value associated with the noncompliance in the twenty-sixth month. This may be a percent exceedance or a violation start or end date.
  * Mnth27Status **required** `string`: The compliance status of the twenty-seventh month.
  * Mnth27Value **required** `string`: The value associated with the noncompliance in the twenty-seventh month. This may be a percent exceedance or a violation start or end date.
  * Mnth28Status **required** `string`: The compliance status of the twenty-eighth month.
  * Mnth28Value **required** `string`: The value associated with the noncompliance in the twenty-eighth month. This may be a percent exceedance or a violation start or end date.
  * Mnth29Status **required** `string`: The compliance status of the twenty-ninth month.
  * Mnth29Value **required** `string`: The value associated with the noncompliance in the twenty-ninth month. This may be a percent exceedance or a violation start or end date.
  * Mnth2Status **required** `string`: The compliance status of the second month.
  * Mnth2Value **required** `string`: The value associated with the noncompliance in the second month. This may be a percent exceedance or a violation start or end date.
  * Mnth30Status **required** `string`: The compliance status of the thirtieth month.
  * Mnth30Value **required** `string`: The value associated with the noncompliance in the thirtieth month. This may be a percent exceedance or a violation start or end date.
  * Mnth31Status **required** `string`: The compliance status of the thirty-first month.
  * Mnth31Value **required** `string`: The value associated with the noncompliance in the thirty-first month. This may be a percent exceedance or a violation start or end date.
  * Mnth32Status **required** `string`: The compliance status of the thirty-second month.
  * Mnth32Value **required** `string`: The value associated with the noncompliance in the thirty-second month. This may be a percent exceedance or a violation start or end date.
  * Mnth33Status **required** `string`: The compliance status of the thirty-third month.
  * Mnth33Value **required** `string`: The value associated with the noncompliance in the thirty-third month. This may be a percent exceedance or a violation start or end date.
  * Mnth34Status **required** `string`: The compliance status of the thirty-fourth month.
  * Mnth34Value **required** `string`: The value associated with the noncompliance in the thirty-fourth month. This may be a percent exceedance or a violation start or end date.
  * Mnth35Status **required** `string`: The compliance status of the thirty-fifth month.
  * Mnth35Value **required** `string`: The value associated with the noncompliance in the thirty-fifth month. This may be a percent exceedance or a violation start or end date.
  * Mnth36Status **required** `string`: The compliance status of the thirty-sixth month.
  * Mnth36Value **required** `string`: The value associated with the noncompliance in the thirty-sixth month. This may be a percent exceedance or a violation start or end date.
  * Mnth37Status **required** `string`: The compliance status of the thirty-seventh month.
  * Mnth37Value **required** `string`: The value associated with the noncompliance in the thirty-seventh month. This may be a percent exceedance or a violation start or end date.
  * Mnth38Status **required** `string`: The compliance status of the thirty-eighth month.
  * Mnth38Value **required** `string`: The value associated with the noncompliance in the thirty-eighth month. This may be a percent exceedance or a violation start or end date.
  * Mnth39Status **required** `string`: The compliance status of the thirty-ninth month.
  * Mnth39Value **required** `string`: The value associated with the noncompliance in the thirty-ninth month. This may be a percent exceedance or a violation start or end date.
  * Mnth3Status **required** `string`: The compliance status of the third month.
  * Mnth3Value **required** `string`: The value associated with the noncompliance in the third month. This may be a percent exceedance or a violation start or end date.
  * Mnth4Status **required** `string`: The compliance status of the fourth month.
  * Mnth4Value **required** `string`: The value associated with the noncompliance in the fourth month. This may be a percent exceedance or a violation start or end date.
  * Mnth5Status **required** `string`: The compliance status of the fifth month.
  * Mnth5Value **required** `string`: The value associated with the noncompliance in the fifth month. This may be a percent exceedance or a violation start or end date.
  * Mnth6Status **required** `string`: The compliance status of the sixth month.
  * Mnth6Value **required** `string`: The value associated with the noncompliance in the sixth month. This may be a percent exceedance or a violation start or end date.
  * Mnth7Status **required** `string`: The compliance status of the seventh month.
  * Mnth7Value **required** `string`: The value associated with the noncompliance in the seventh month. This may be a percent exceedance or a violation start or end date.
  * Mnth8Status **required** `string`: The compliance status of the eighth month.
  * Mnth8Value **required** `string`: The value associated with the noncompliance in the eighth month. This may be a percent exceedance or a violation start or end date.
  * Mnth9Status **required** `string`: The compliance status of the ninth month.
  * Mnth9Value **required** `string`: The value associated with the noncompliance in the ninth month. This may be a percent exceedance or a violation start or end date.
  * NPDESViolationId **required** `string`: The unique identifier in ICIS-NPDES for the NPDES Violation
  * Qtr10Status **required** `string`: The relevant status for the quarter.
  * Qtr10Value **required** `string`: The value associated with the noncompliance in the tenth quarter. This may be a percent exceedance or a violation start or end date.
  * Qtr11Status **required** `string`: The relevant status for the quarter.
  * Qtr11Value **required** `string`: The value associated with the noncompliance in the eleventh quarter. This may be a percent exceedance or a violation start or end date.
  * Qtr12Status **required** `string`: The relevant status for the quarter.
  * Qtr12Value **required** `string`: The value associated with the noncompliance in the twelfth quarter. This may be a percent exceedance or a violation start or end date.
  * Qtr13Status **required** `string`: The relevant status for the quarter.
  * Qtr13Value **required** `string`: The value associated with the noncompliance in the thirteenth quarter. This may be a percent exceedance or a violation start or end date.
  * Qtr1Status **required** `string`: The relevant status for the quarter.
  * Qtr1Value **required** `string`: The value associated with the noncompliance in the first quarter. This may be a percent exceedance or a violation start or end date.
  * Qtr2Status **required** `string`: The relevant status for the quarter.
  * Qtr2Value **required** `string`: The value associated with the noncompliance in the second quarter. This may be a percent exceedance or a violation start or end date.
  * Qtr3Status **required** `string`: The relevant status for the quarter.
  * Qtr3Value **required** `string`: The value associated with the noncompliance in the third quarter. This may be a percent exceedance or a violation start or end date.
  * Qtr4Status **required** `string`: The relevant status for the quarter.
  * Qtr4Value **required** `string`: The value associated with the noncompliance in the fourth quarter. This may be a percent exceedance or a violation start or end date.
  * Qtr5Status **required** `string`: The relevant status for the quarter.
  * Qtr5Value **required** `string`: The value associated with the noncompliance in the fifth quarter. This may be a percent exceedance or a violation start or end date.
  * Qtr6Status **required** `string`: The relevant status for the quarter.
  * Qtr6Value **required** `string`: The value associated with the noncompliance in the sixth quarter. This may be a percent exceedance or a violation start or end date.
  * Qtr7Status **required** `string`: The relevant status for the quarter.
  * Qtr7Value **required** `string`: The value associated with the noncompliance in the seventh quarter. This may be a percent exceedance or a violation start or end date.
  * Qtr8Status **required** `string`: The relevant status for the quarter.
  * Qtr8Value **required** `string`: The value associated with the noncompliance in the eighth quarter. This may be a percent exceedance or a violation start or end date.
  * Qtr9Status **required** `string`: The relevant status for the quarter.
  * Qtr9Value **required** `string`: The value associated with the noncompliance in the ninth quarter. This may be a percent exceedance or a violation start or end date.
  * SourceID **required** `string`: Unique Identifier assigned by EPA.
  * ViolationDesc **required** `string`: A description of which type of violation has occurred

### dfr035
* dfr035 `object`: CWA Effluent ALR Exceedences Object
  * Header [dfr0_Qtr13Header](#dfr0_qtr13header)
  * Sources `array`
    * items [dfr037](#dfr037)

### dfr035_EXP
* dfr035_EXP `object`
  * Header [dfr0_Qtr13Header](#dfr0_qtr13header)
  * Sources `array`
    * items [dfr035_EXP.Sources](#dfr035_exp.sources)

### dfr035_EXP.Parameters
* dfr035_EXP.Parameters `object`
  * DischargePoint **required** `string`: A 3- or 4-character code that uniquely identifies a single permitted discharge point (also called a pipe or outfall).
  * MeasurementType **required** `string`: The type of measurement used to determine the violation. Applicable values:
  * Mnth10Value **required** `string`: The value associated with the noncompliance in the tenth month. This may be a percent exceedance or a violation start or end date.
  * Mnth11Value **required** `string`: The value associated with the noncompliance in the eleventh month. This may be a percent exceedance or a violation start or end date.
  * Mnth12Value **required** `string`: The value associated with the noncompliance in the twelfth month. This may be a percent exceedance or a violation start or end date.
  * Mnth13Value **required** `string`: The value associated with the noncompliance in the thirteenth month. This may be a percent exceedance or a violation start or end date.
  * Mnth14Value **required** `string`: The value associated with the noncompliance in the fourteenth month. This may be a percent exceedance or a violation start or end date.
  * Mnth15Value **required** `string`: The value associated with the noncompliance in the fifteenth month. This may be a percent exceedance or a violation start or end date.
  * Mnth16Value **required** `string`: The value associated with the noncompliance in the sixteenth month. This may be a percent exceedance or a violation start or end date.
  * Mnth17Value **required** `string`: The value associated with the noncompliance in the seventeenth month. This may be a percent exceedance or a violation start or end date.
  * Mnth18Value **required** `string`: The value associated with the noncompliance in the eighteenth month. This may be a percent exceedance or a violation start or end date.
  * Mnth19Value **required** `string`: The value associated with the noncompliance in the ninteenth month. This may be a percent exceedance or a violation start or end date.
  * Mnth1Value **required** `string`: The value associated with the noncompliance in the first month. This may be a percent exceedance or a violation start or end date.
  * Mnth20Value **required** `string`: The value associated with the noncompliance in the twentieth month. This may be a percent exceedance or a violation start or end date.
  * Mnth21Value **required** `string`: The value associated with the noncompliance in the twenty-first month. This may be a percent exceedance or a violation start or end date.
  * Mnth22Value **required** `string`: The value associated with the noncompliance in the twenty-second month. This may be a percent exceedance or a violation start or end date.
  * Mnth23Value **required** `string`: The value associated with the noncompliance in the twenty-third month. This may be a percent exceedance or a violation start or end date.
  * Mnth24Value **required** `string`: The value associated with the noncompliance in the twenty-fourth month. This may be a percent exceedance or a violation start or end date.
  * Mnth25Value **required** `string`: The value associated with the noncompliance in the twenty-fifth month. This may be a percent exceedance or a violation start or end date.
  * Mnth26Value **required** `string`: The value associated with the noncompliance in the twenty-sixth month. This may be a percent exceedance or a violation start or end date.
  * Mnth27Value **required** `string`: The value associated with the noncompliance in the twenty-seventh month. This may be a percent exceedance or a violation start or end date.
  * Mnth28Value **required** `string`: The value associated with the noncompliance in the twenty-eighth month. This may be a percent exceedance or a violation start or end date.
  * Mnth29Value **required** `string`: The value associated with the noncompliance in the twenty-ninth month. This may be a percent exceedance or a violation start or end date.
  * Mnth2Value **required** `string`: The value associated with the noncompliance in the second month. This may be a percent exceedance or a violation start or end date.
  * Mnth30Value **required** `string`: The value associated with the noncompliance in the thirtieth month. This may be a percent exceedance or a violation start or end date.
  * Mnth31Value **required** `string`: The value associated with the noncompliance in the thirty-first month. This may be a percent exceedance or a violation start or end date.
  * Mnth32Value **required** `string`: The value associated with the noncompliance in the thirty-second month. This may be a percent exceedance or a violation start or end date.
  * Mnth33Value **required** `string`: The value associated with the noncompliance in the thirty-third month. This may be a percent exceedance or a violation start or end date.
  * Mnth34Value **required** `string`: The value associated with the noncompliance in the thirty-fourth month. This may be a percent exceedance or a violation start or end date.
  * Mnth35Value **required** `string`: The value associated with the noncompliance in the thirty-fifth month. This may be a percent exceedance or a violation start or end date.
  * Mnth36Value **required** `string`: The value associated with the noncompliance in the thirty-sixth month. This may be a percent exceedance or a violation start or end date.
  * Mnth37Value **required** `string`: The value associated with the noncompliance in the thirty-seventh month. This may be a percent exceedance or a violation start or end date.
  * Mnth38Value **required** `string`: The value associated with the noncompliance in the thirty-eighth month. This may be a percent exceedance or a violation start or end date.
  * Mnth39Value **required** `string`: The value associated with the noncompliance in the thirty-ninth month. This may be a percent exceedance or a violation start or end date.
  * Mnth3Value **required** `string`: The value associated with the noncompliance in the third month. This may be a percent exceedance or a violation start or end date.
  * Mnth4Value **required** `string`: The value associated with the noncompliance in the fourth month. This may be a percent exceedance or a violation start or end date.
  * Mnth5Value **required** `string`: The value associated with the noncompliance in the fifth month. This may be a percent exceedance or a violation start or end date.
  * Mnth6Value **required** `string`: The value associated with the noncompliance in the sixth month. This may be a percent exceedance or a violation start or end date.
  * Mnth7Value **required** `string`: The value associated with the noncompliance in the seventh month. This may be a percent exceedance or a violation start or end date.
  * Mnth8Value **required** `string`: The value associated with the noncompliance in the eighth month. This may be a percent exceedance or a violation start or end date.
  * Mnth9Value **required** `string`: The value associated with the noncompliance in the ninth month. This may be a percent exceedance or a violation start or end date.
  * MonitoringLocation **required** `string`
  * ParameterCode **required** `string`: The unique 5 digit numeric code identifying the parameter. If the code is less than 5 digits in the .CSV, append zeros to the beginning of the number (e.g., 100 is equivalent to 00100)
  * ParameterName **required** `string`: The pollutant name.
  * Qtr10Value **required** `string`: The value associated with the noncompliance in the tenth quarter. This may be a percent exceedance or a violation start or end date.
  * Qtr11Value **required** `string`: The value associated with the noncompliance in the eleventh quarter. This may be a percent exceedance or a violation start or end date.
  * Qtr12Value **required** `string`: The value associated with the noncompliance in the twelfth quarter. This may be a percent exceedance or a violation start or end date.
  * Qtr13Value **required** `string`: The value associated with the noncompliance in the thirteenth quarter. This may be a percent exceedance or a violation start or end date.
  * Qtr1Value **required** `string`: The value associated with the noncompliance in the first quarter. This may be a percent exceedance or a violation start or end date.
  * Qtr2Value **required** `string`: The value associated with the noncompliance in the second quarter. This may be a percent exceedance or a violation start or end date.
  * Qtr3Value **required** `string`: The value associated with the noncompliance in the third quarter. This may be a percent exceedance or a violation start or end date.
  * Qtr4Value **required** `string`: The value associated with the noncompliance in the fourth quarter. This may be a percent exceedance or a violation start or end date.
  * Qtr5Value **required** `string`: The value associated with the noncompliance in the fifth quarter. This may be a percent exceedance or a violation start or end date.
  * Qtr6Value **required** `string`: The value associated with the noncompliance in the sixth quarter. This may be a percent exceedance or a violation start or end date.
  * Qtr7Value **required** `string`: The value associated with the noncompliance in the seventh quarter. This may be a percent exceedance or a violation start or end date.
  * Qtr8Value **required** `string`: The value associated with the noncompliance in the eighth quarter. This may be a percent exceedance or a violation start or end date.
  * Qtr9Value **required** `string`: The value associated with the noncompliance in the ninth quarter. This may be a percent exceedance or a violation start or end date.
  * SourceID **required** `string`: Unique Identifier assigned by EPA.

### dfr035_EXP.Sources
* dfr035_EXP.Sources `object`
  * Parameters **required** `array`
    * items [dfr035_EXP.Parameters](#dfr035_exp.parameters)

### dfr036
* dfr036 `object`: Parameter Object
  * DischargePoint **required** `string`: A 3- or 4-character code that uniquely identifies a single permitted discharge point (also called a pipe or outfall).
  * MeasurementType **required** `string`: The type of measurement used to determine the violation. Applicable values:
  * Mnth10Value **required** `string`: The value associated with the noncompliance in the tenth month. This may be a percent exceedance or a violation start or end date.
  * Mnth11Value **required** `string`: The value associated with the noncompliance in the eleventh month. This may be a percent exceedance or a violation start or end date.
  * Mnth12Value **required** `string`: The value associated with the noncompliance in the twelfth month. This may be a percent exceedance or a violation start or end date.
  * Mnth13Value **required** `string`: The value associated with the noncompliance in the thirteenth month. This may be a percent exceedance or a violation start or end date.
  * Mnth14Value **required** `string`: The value associated with the noncompliance in the fourteenth month. This may be a percent exceedance or a violation start or end date.
  * Mnth15Value **required** `string`: The value associated with the noncompliance in the fifteenth month. This may be a percent exceedance or a violation start or end date.
  * Mnth16Value **required** `string`: The value associated with the noncompliance in the sixteenth month. This may be a percent exceedance or a violation start or end date.
  * Mnth17Value **required** `string`: The value associated with the noncompliance in the seventeenth month. This may be a percent exceedance or a violation start or end date.
  * Mnth18Value **required** `string`: The value associated with the noncompliance in the eighteenth month. This may be a percent exceedance or a violation start or end date.
  * Mnth19Value **required** `string`: The value associated with the noncompliance in the ninteenth month. This may be a percent exceedance or a violation start or end date.
  * Mnth1Value **required** `string`: The value associated with the noncompliance in the first month. This may be a percent exceedance or a violation start or end date.
  * Mnth20Value **required** `string`: The value associated with the noncompliance in the twentieth month. This may be a percent exceedance or a violation start or end date.
  * Mnth21Value **required** `string`: The value associated with the noncompliance in the twenty-first month. This may be a percent exceedance or a violation start or end date.
  * Mnth22Value **required** `string`: The value associated with the noncompliance in the twenty-second month. This may be a percent exceedance or a violation start or end date.
  * Mnth23Value **required** `string`: The value associated with the noncompliance in the twenty-third month. This may be a percent exceedance or a violation start or end date.
  * Mnth24Value **required** `string`: The value associated with the noncompliance in the twenty-fourth month. This may be a percent exceedance or a violation start or end date.
  * Mnth25Value **required** `string`: The value associated with the noncompliance in the twenty-fifth month. This may be a percent exceedance or a violation start or end date.
  * Mnth26Value **required** `string`: The value associated with the noncompliance in the twenty-sixth month. This may be a percent exceedance or a violation start or end date.
  * Mnth27Value **required** `string`: The value associated with the noncompliance in the twenty-seventh month. This may be a percent exceedance or a violation start or end date.
  * Mnth28Value **required** `string`: The value associated with the noncompliance in the twenty-eighth month. This may be a percent exceedance or a violation start or end date.
  * Mnth29Value **required** `string`: The value associated with the noncompliance in the twenty-ninth month. This may be a percent exceedance or a violation start or end date.
  * Mnth2Value **required** `string`: The value associated with the noncompliance in the second month. This may be a percent exceedance or a violation start or end date.
  * Mnth30Value **required** `string`: The value associated with the noncompliance in the thirtieth month. This may be a percent exceedance or a violation start or end date.
  * Mnth31Value **required** `string`: The value associated with the noncompliance in the thirty-first month. This may be a percent exceedance or a violation start or end date.
  * Mnth32Value **required** `string`: The value associated with the noncompliance in the thirty-second month. This may be a percent exceedance or a violation start or end date.
  * Mnth33Value **required** `string`: The value associated with the noncompliance in the thirty-third month. This may be a percent exceedance or a violation start or end date.
  * Mnth34Value **required** `string`: The value associated with the noncompliance in the thirty-fourth month. This may be a percent exceedance or a violation start or end date.
  * Mnth35Value **required** `string`: The value associated with the noncompliance in the thirty-fifth month. This may be a percent exceedance or a violation start or end date.
  * Mnth36Value **required** `string`: The value associated with the noncompliance in the thirty-sixth month. This may be a percent exceedance or a violation start or end date.
  * Mnth37Value **required** `string`: The value associated with the noncompliance in the thirty-seventh month. This may be a percent exceedance or a violation start or end date.
  * Mnth38Value **required** `string`: The value associated with the noncompliance in the thirty-eighth month. This may be a percent exceedance or a violation start or end date.
  * Mnth39Value **required** `string`: The value associated with the noncompliance in the thirty-ninth month. This may be a percent exceedance or a violation start or end date.
  * Mnth3Value **required** `string`: The value associated with the noncompliance in the third month. This may be a percent exceedance or a violation start or end date.
  * Mnth4Value **required** `string`: The value associated with the noncompliance in the fourth month. This may be a percent exceedance or a violation start or end date.
  * Mnth5Value **required** `string`: The value associated with the noncompliance in the fifth month. This may be a percent exceedance or a violation start or end date.
  * Mnth6Value **required** `string`: The value associated with the noncompliance in the sixth month. This may be a percent exceedance or a violation start or end date.
  * Mnth7Value **required** `string`: The value associated with the noncompliance in the seventh month. This may be a percent exceedance or a violation start or end date.
  * Mnth8Value **required** `string`: The value associated with the noncompliance in the eighth month. This may be a percent exceedance or a violation start or end date.
  * Mnth9Value **required** `string`: The value associated with the noncompliance in the ninth month. This may be a percent exceedance or a violation start or end date.
  * ParameterCode **required** `string`: The unique 5 digit numeric code identifying the parameter. If the code is less than 5 digits in the .CSV, append zeros to the beginning of the number (e.g., 100 is equivalent to 00100)
  * ParameterName **required** `string`: The pollutant name.
  * Qtr10Value **required** `string`: The value associated with the noncompliance in the tenth quarter. This may be a percent exceedance or a violation start or end date.
  * Qtr11Value **required** `string`: The value associated with the noncompliance in the eleventh quarter. This may be a percent exceedance or a violation start or end date.
  * Qtr12Value **required** `string`: The value associated with the noncompliance in the twelfth quarter. This may be a percent exceedance or a violation start or end date.
  * Qtr13Value **required** `string`: The value associated with the noncompliance in the thirteenth quarter. This may be a percent exceedance or a violation start or end date.
  * Qtr1Value **required** `string`: The value associated with the noncompliance in the first quarter. This may be a percent exceedance or a violation start or end date.
  * Qtr2Value **required** `string`: The value associated with the noncompliance in the second quarter. This may be a percent exceedance or a violation start or end date.
  * Qtr3Value **required** `string`: The value associated with the noncompliance in the third quarter. This may be a percent exceedance or a violation start or end date.
  * Qtr4Value **required** `string`: The value associated with the noncompliance in the fourth quarter. This may be a percent exceedance or a violation start or end date.
  * Qtr5Value **required** `string`: The value associated with the noncompliance in the fifth quarter. This may be a percent exceedance or a violation start or end date.
  * Qtr6Value **required** `string`: The value associated with the noncompliance in the sixth quarter. This may be a percent exceedance or a violation start or end date.
  * Qtr7Value **required** `string`: The value associated with the noncompliance in the seventh quarter. This may be a percent exceedance or a violation start or end date.
  * Qtr8Value **required** `string`: The value associated with the noncompliance in the eighth quarter. This may be a percent exceedance or a violation start or end date.
  * Qtr9Value **required** `string`: The value associated with the noncompliance in the ninth quarter. This may be a percent exceedance or a violation start or end date.
  * SourceID **required** `string`: Unique Identifier assigned by EPA.

### dfr037
* dfr037 `object`: Sources Object
  * Parameters **required** `array`
    * items [dfr036](#dfr036)

### dfr038
* dfr038 `object`: CWA Effluent Compliance Object
  * Header [dfr0_Qtr13Header](#dfr0_qtr13header)
  * Sources `array`
    * items [dfr041](#dfr041)

### dfr038_EXP
* dfr038_EXP `object`
  * Header [dfr0_Qtr13Header](#dfr0_qtr13header)
  * Sources `array`
    * items [dfr038_EXP.Sources](#dfr038_exp.sources)

### dfr038_EXP.Parameters
* dfr038_EXP.Parameters `object`
  * DischargePoint **required** `string`: A 3- or 4-character code that uniquely identifies a single permitted discharge point (also called a pipe or outfall).
  * MeasurementType **required** `string`: The type of measurement used to determine the violation. Applicable values:
  * Mnth10Status **required** `string`: The compliance status of the tenth month.
  * Mnth10Value **required** `string`: The value associated with the noncompliance in the tenth month. This may be a percent exceedance or a violation start or end date.
  * Mnth11Status **required** `string`: The compliance status of the eleventh month.
  * Mnth11Value **required** `string`: The value associated with the noncompliance in the eleventh month. This may be a percent exceedance or a violation start or end date.
  * Mnth12Status **required** `string`: The compliance status of the twelfth month.
  * Mnth12Value **required** `string`: The value associated with the noncompliance in the twelfth month. This may be a percent exceedance or a violation start or end date.
  * Mnth13Status **required** `string`: The compliance status of the thirteenth month.
  * Mnth13Value **required** `string`: The value associated with the noncompliance in the thirteenth month. This may be a percent exceedance or a violation start or end date.
  * Mnth14Status **required** `string`: The compliance status of the fourteenth month.
  * Mnth14Value **required** `string`: The value associated with the noncompliance in the fourteenth month. This may be a percent exceedance or a violation start or end date.
  * Mnth15Status **required** `string`: The compliance status of the fifteenth month.
  * Mnth15Value **required** `string`: The value associated with the noncompliance in the fifteenth month. This may be a percent exceedance or a violation start or end date.
  * Mnth16Status **required** `string`: The compliance status of the sixteenth month.
  * Mnth16Value **required** `string`: The value associated with the noncompliance in the sixteenth month. This may be a percent exceedance or a violation start or end date.
  * Mnth17Status **required** `string`: The compliance status of the seventeenth month.
  * Mnth17Value **required** `string`: The value associated with the noncompliance in the seventeenth month. This may be a percent exceedance or a violation start or end date.
  * Mnth18Status **required** `string`: The compliance status of the eighteenth month.
  * Mnth18Value **required** `string`: The value associated with the noncompliance in the eighteenth month. This may be a percent exceedance or a violation start or end date.
  * Mnth19Status **required** `string`: The compliance status of the ninteenth month.
  * Mnth19Value **required** `string`: The value associated with the noncompliance in the ninteenth month. This may be a percent exceedance or a violation start or end date.
  * Mnth1Status **required** `string`: The compliance status of the first month.
  * Mnth1Value **required** `string`: The value associated with the noncompliance in the first month. This may be a percent exceedance or a violation start or end date.
  * Mnth20Status **required** `string`: The compliance status of the twentieth month.
  * Mnth20Value **required** `string`: The value associated with the noncompliance in the twentieth month. This may be a percent exceedance or a violation start or end date.
  * Mnth21Status **required** `string`: The compliance status of the twenty-first month.
  * Mnth21Value **required** `string`: The value associated with the noncompliance in the twenty-first month. This may be a percent exceedance or a violation start or end date.
  * Mnth22Status **required** `string`: The compliance status of the twenty-second month.
  * Mnth22Value **required** `string`: The value associated with the noncompliance in the twenty-second month. This may be a percent exceedance or a violation start or end date.
  * Mnth23Status **required** `string`: The compliance status of the twenty-third month.
  * Mnth23Value **required** `string`: The value associated with the noncompliance in the twenty-third month. This may be a percent exceedance or a violation start or end date.
  * Mnth24Status **required** `string`: The compliance status of the twenty-fourth month.
  * Mnth24Value **required** `string`: The value associated with the noncompliance in the twenty-fourth month. This may be a percent exceedance or a violation start or end date.
  * Mnth25Status **required** `string`: The compliance status of the twenty-fifth month.
  * Mnth25Value **required** `string`: The value associated with the noncompliance in the twenty-fifth month. This may be a percent exceedance or a violation start or end date.
  * Mnth26Status **required** `string`: The compliance status of the twenty-sixth month.
  * Mnth26Value **required** `string`: The value associated with the noncompliance in the twenty-sixth month. This may be a percent exceedance or a violation start or end date.
  * Mnth27Status **required** `string`: The compliance status of the twenty-seventh month.
  * Mnth27Value **required** `string`: The value associated with the noncompliance in the twenty-seventh month. This may be a percent exceedance or a violation start or end date.
  * Mnth28Status **required** `string`: The compliance status of the twenty-eighth month.
  * Mnth28Value **required** `string`: The value associated with the noncompliance in the twenty-eighth month. This may be a percent exceedance or a violation start or end date.
  * Mnth29Status **required** `string`: The compliance status of the twenty-ninth month.
  * Mnth29Value **required** `string`: The value associated with the noncompliance in the twenty-ninth month. This may be a percent exceedance or a violation start or end date.
  * Mnth2Status **required** `string`: The compliance status of the second month.
  * Mnth2Value **required** `string`: The value associated with the noncompliance in the second month. This may be a percent exceedance or a violation start or end date.
  * Mnth30Status **required** `string`: The compliance status of the thirtieth month.
  * Mnth30Value **required** `string`: The value associated with the noncompliance in the thirtieth month. This may be a percent exceedance or a violation start or end date.
  * Mnth31Status **required** `string`: The compliance status of the thirty-first month.
  * Mnth31Value **required** `string`: The value associated with the noncompliance in the thirty-first month. This may be a percent exceedance or a violation start or end date.
  * Mnth32Status **required** `string`: The compliance status of the thirty-second month.
  * Mnth32Value **required** `string`: The value associated with the noncompliance in the thirty-second month. This may be a percent exceedance or a violation start or end date.
  * Mnth33Status **required** `string`: The compliance status of the thirty-third month.
  * Mnth33Value **required** `string`: The value associated with the noncompliance in the thirty-third month. This may be a percent exceedance or a violation start or end date.
  * Mnth34Status **required** `string`: The compliance status of the thirty-fourth month.
  * Mnth34Value **required** `string`: The value associated with the noncompliance in the thirty-fourth month. This may be a percent exceedance or a violation start or end date.
  * Mnth35Status **required** `string`: The compliance status of the thirty-fifth month.
  * Mnth35Value **required** `string`: The value associated with the noncompliance in the thirty-fifth month. This may be a percent exceedance or a violation start or end date.
  * Mnth36Status **required** `string`: The compliance status of the thirty-sixth month.
  * Mnth36Value **required** `string`: The value associated with the noncompliance in the thirty-sixth month. This may be a percent exceedance or a violation start or end date.
  * Mnth37Status **required** `string`: The compliance status of the thirty-seventh month.
  * Mnth37Value **required** `string`: The value associated with the noncompliance in the thirty-seventh month. This may be a percent exceedance or a violation start or end date.
  * Mnth38Status **required** `string`: The compliance status of the thirty-eighth month.
  * Mnth38Value **required** `string`: The value associated with the noncompliance in the thirty-eighth month. This may be a percent exceedance or a violation start or end date.
  * Mnth39Status **required** `string`: The compliance status of the thirty-ninth month.
  * Mnth39Value **required** `string`: The value associated with the noncompliance in the thirty-ninth month. This may be a percent exceedance or a violation start or end date.
  * Mnth3Status **required** `string`: The compliance status of the third month.
  * Mnth3Value **required** `string`: The value associated with the noncompliance in the third month. This may be a percent exceedance or a violation start or end date.
  * Mnth4Status **required** `string`: The compliance status of the fourth month.
  * Mnth4Value **required** `string`: The value associated with the noncompliance in the fourth month. This may be a percent exceedance or a violation start or end date.
  * Mnth5Status **required** `string`: The compliance status of the fifth month.
  * Mnth5Value **required** `string`: The value associated with the noncompliance in the fifth month. This may be a percent exceedance or a violation start or end date.
  * Mnth6Status **required** `string`: The compliance status of the sixth month.
  * Mnth6Value **required** `string`: The value associated with the noncompliance in the sixth month. This may be a percent exceedance or a violation start or end date.
  * Mnth7Status **required** `string`: The compliance status of the seventh month.
  * Mnth7Value **required** `string`: The value associated with the noncompliance in the seventh month. This may be a percent exceedance or a violation start or end date.
  * Mnth8Status **required** `string`: The compliance status of the eighth month.
  * Mnth8Value **required** `string`: The value associated with the noncompliance in the eighth month. This may be a percent exceedance or a violation start or end date.
  * Mnth9Status **required** `string`: The compliance status of the ninth month.
  * Mnth9Value **required** `string`: The value associated with the noncompliance in the ninth month. This may be a percent exceedance or a violation start or end date.
  * MonitoringLocation **required** `string`
  * ParameterCode **required** `string`: The unique 5 digit numeric code identifying the parameter. If the code is less than 5 digits in the .CSV, append zeros to the beginning of the number (e.g., 100 is equivalent to 00100)
  * ParameterName **required** `string`: The pollutant name.
  * Qtr10Status **required** `string`: The relevant status for the quarter.
  * Qtr10Value **required** `string`: The value associated with the noncompliance in the tenth quarter. This may be a percent exceedance or a violation start or end date.
  * Qtr11Status **required** `string`: The relevant status for the quarter.
  * Qtr11Value **required** `string`: The value associated with the noncompliance in the eleventh quarter. This may be a percent exceedance or a violation start or end date.
  * Qtr12Status **required** `string`: The relevant status for the quarter.
  * Qtr12Value **required** `string`: The value associated with the noncompliance in the twelfth quarter. This may be a percent exceedance or a violation start or end date.
  * Qtr13Status **required** `string`: The relevant status for the quarter.
  * Qtr13Value **required** `string`: The value associated with the noncompliance in the thirteenth quarter. This may be a percent exceedance or a violation start or end date.
  * Qtr1Status **required** `string`: The relevant status for the quarter.
  * Qtr1Value **required** `string`: The value associated with the noncompliance in the first quarter. This may be a percent exceedance or a violation start or end date.
  * Qtr2Status **required** `string`: The relevant status for the quarter.
  * Qtr2Value **required** `string`: The value associated with the noncompliance in the second quarter. This may be a percent exceedance or a violation start or end date.
  * Qtr3Status **required** `string`: The relevant status for the quarter.
  * Qtr3Value **required** `string`: The value associated with the noncompliance in the third quarter. This may be a percent exceedance or a violation start or end date.
  * Qtr4Status **required** `string`: The relevant status for the quarter.
  * Qtr4Value **required** `string`: The value associated with the noncompliance in the fourth quarter. This may be a percent exceedance or a violation start or end date.
  * Qtr5Status **required** `string`: The relevant status for the quarter.
  * Qtr5Value **required** `string`: The value associated with the noncompliance in the fifth quarter. This may be a percent exceedance or a violation start or end date.
  * Qtr6Status **required** `string`: The relevant status for the quarter.
  * Qtr6Value **required** `string`: The value associated with the noncompliance in the sixth quarter. This may be a percent exceedance or a violation start or end date.
  * Qtr7Status **required** `string`: The relevant status for the quarter.
  * Qtr7Value **required** `string`: The value associated with the noncompliance in the seventh quarter. This may be a percent exceedance or a violation start or end date.
  * Qtr8Status **required** `string`: The relevant status for the quarter.
  * Qtr8Value **required** `string`: The value associated with the noncompliance in the eighth quarter. This may be a percent exceedance or a violation start or end date.
  * Qtr9Status **required** `string`: The relevant status for the quarter.
  * Qtr9Value **required** `string`: The value associated with the noncompliance in the ninth quarter. This may be a percent exceedance or a violation start or end date.
  * SourceID **required** `string`: Unique Identifier assigned by EPA.

### dfr038_EXP.Sources
* dfr038_EXP.Sources `object`
  * Parameters `array`
    * items [dfr038_EXP.Parameters](#dfr038_exp.parameters)

### dfr040
* dfr040 `object`: CWA Effluent Compliance Parameter Object
  * DischargePoint **required** `string`: A 3- or 4-character code that uniquely identifies a single permitted discharge point (also called a pipe or outfall).
  * MeasurementType **required** `string`: The type of measurement used to determine the violation. Applicable values:
  * Mnth10Status **required** `string`: The compliance status of the tenth month.
  * Mnth10Value **required** `string`: The value associated with the noncompliance in the tenth month. This may be a percent exceedance or a violation start or end date.
  * Mnth11Status **required** `string`: The compliance status of the eleventh month.
  * Mnth11Value **required** `string`: The value associated with the noncompliance in the eleventh month. This may be a percent exceedance or a violation start or end date.
  * Mnth12Status **required** `string`: The compliance status of the twelfth month.
  * Mnth12Value **required** `string`: The value associated with the noncompliance in the twelfth month. This may be a percent exceedance or a violation start or end date.
  * Mnth13Status **required** `string`: The compliance status of the thirteenth month.
  * Mnth13Value **required** `string`: The value associated with the noncompliance in the thirteenth month. This may be a percent exceedance or a violation start or end date.
  * Mnth14Status **required** `string`: The compliance status of the fourteenth month.
  * Mnth14Value **required** `string`: The value associated with the noncompliance in the fourteenth month. This may be a percent exceedance or a violation start or end date.
  * Mnth15Status **required** `string`: The compliance status of the fifteenth month.
  * Mnth15Value **required** `string`: The value associated with the noncompliance in the fifteenth month. This may be a percent exceedance or a violation start or end date.
  * Mnth16Status **required** `string`: The compliance status of the sixteenth month.
  * Mnth16Value **required** `string`: The value associated with the noncompliance in the sixteenth month. This may be a percent exceedance or a violation start or end date.
  * Mnth17Status **required** `string`: The compliance status of the seventeenth month.
  * Mnth17Value **required** `string`: The value associated with the noncompliance in the seventeenth month. This may be a percent exceedance or a violation start or end date.
  * Mnth18Status **required** `string`: The compliance status of the eighteenth month.
  * Mnth18Value **required** `string`: The value associated with the noncompliance in the eighteenth month. This may be a percent exceedance or a violation start or end date.
  * Mnth19Status **required** `string`: The compliance status of the ninteenth month.
  * Mnth19Value **required** `string`: The value associated with the noncompliance in the ninteenth month. This may be a percent exceedance or a violation start or end date.
  * Mnth1Status **required** `string`: The compliance status of the first month.
  * Mnth1Value **required** `string`: The value associated with the noncompliance in the first month. This may be a percent exceedance or a violation start or end date.
  * Mnth20Status **required** `string`: The compliance status of the twentieth month.
  * Mnth20Value **required** `string`: The value associated with the noncompliance in the twentieth month. This may be a percent exceedance or a violation start or end date.
  * Mnth21Status **required** `string`: The compliance status of the twenty-first month.
  * Mnth21Value **required** `string`: The value associated with the noncompliance in the twenty-first month. This may be a percent exceedance or a violation start or end date.
  * Mnth22Status **required** `string`: The compliance status of the twenty-second month.
  * Mnth22Value **required** `string`: The value associated with the noncompliance in the twenty-second month. This may be a percent exceedance or a violation start or end date.
  * Mnth23Status **required** `string`: The compliance status of the twenty-third month.
  * Mnth23Value **required** `string`: The value associated with the noncompliance in the twenty-third month. This may be a percent exceedance or a violation start or end date.
  * Mnth24Status **required** `string`: The compliance status of the twenty-fourth month.
  * Mnth24Value **required** `string`: The value associated with the noncompliance in the twenty-fourth month. This may be a percent exceedance or a violation start or end date.
  * Mnth25Status **required** `string`: The compliance status of the twenty-fifth month.
  * Mnth25Value **required** `string`: The value associated with the noncompliance in the twenty-fifth month. This may be a percent exceedance or a violation start or end date.
  * Mnth26Status **required** `string`: The compliance status of the twenty-sixth month.
  * Mnth26Value **required** `string`: The value associated with the noncompliance in the twenty-sixth month. This may be a percent exceedance or a violation start or end date.
  * Mnth27Status **required** `string`: The compliance status of the twenty-seventh month.
  * Mnth27Value **required** `string`: The value associated with the noncompliance in the twenty-seventh month. This may be a percent exceedance or a violation start or end date.
  * Mnth28Status **required** `string`: The compliance status of the twenty-eighth month.
  * Mnth28Value **required** `string`: The value associated with the noncompliance in the twenty-eighth month. This may be a percent exceedance or a violation start or end date.
  * Mnth29Status **required** `string`: The compliance status of the twenty-ninth month.
  * Mnth29Value **required** `string`: The value associated with the noncompliance in the twenty-ninth month. This may be a percent exceedance or a violation start or end date.
  * Mnth2Status **required** `string`: The compliance status of the second month.
  * Mnth2Value **required** `string`: The value associated with the noncompliance in the second month. This may be a percent exceedance or a violation start or end date.
  * Mnth30Status **required** `string`: The compliance status of the thirtieth month.
  * Mnth30Value **required** `string`: The value associated with the noncompliance in the thirtieth month. This may be a percent exceedance or a violation start or end date.
  * Mnth31Status **required** `string`: The compliance status of the thirty-first month.
  * Mnth31Value **required** `string`: The value associated with the noncompliance in the thirty-first month. This may be a percent exceedance or a violation start or end date.
  * Mnth32Status **required** `string`: The compliance status of the thirty-second month.
  * Mnth32Value **required** `string`: The value associated with the noncompliance in the thirty-second month. This may be a percent exceedance or a violation start or end date.
  * Mnth33Status **required** `string`: The compliance status of the thirty-third month.
  * Mnth33Value **required** `string`: The value associated with the noncompliance in the thirty-third month. This may be a percent exceedance or a violation start or end date.
  * Mnth34Status **required** `string`: The compliance status of the thirty-fourth month.
  * Mnth34Value **required** `string`: The value associated with the noncompliance in the thirty-fourth month. This may be a percent exceedance or a violation start or end date.
  * Mnth35Status **required** `string`: The compliance status of the thirty-fifth month.
  * Mnth35Value **required** `string`: The value associated with the noncompliance in the thirty-fifth month. This may be a percent exceedance or a violation start or end date.
  * Mnth36Status **required** `string`: The compliance status of the thirty-sixth month.
  * Mnth36Value **required** `string`: The value associated with the noncompliance in the thirty-sixth month. This may be a percent exceedance or a violation start or end date.
  * Mnth37Status **required** `string`: The compliance status of the thirty-seventh month.
  * Mnth37Value **required** `string`: The value associated with the noncompliance in the thirty-seventh month. This may be a percent exceedance or a violation start or end date.
  * Mnth38Status **required** `string`: The compliance status of the thirty-eighth month.
  * Mnth38Value **required** `string`: The value associated with the noncompliance in the thirty-eighth month. This may be a percent exceedance or a violation start or end date.
  * Mnth39Status **required** `string`: The compliance status of the thirty-ninth month.
  * Mnth39Value **required** `string`: The value associated with the noncompliance in the thirty-ninth month. This may be a percent exceedance or a violation start or end date.
  * Mnth3Status **required** `string`: The compliance status of the third month.
  * Mnth3Value **required** `string`: The value associated with the noncompliance in the third month. This may be a percent exceedance or a violation start or end date.
  * Mnth4Status **required** `string`: The compliance status of the fourth month.
  * Mnth4Value **required** `string`: The value associated with the noncompliance in the fourth month. This may be a percent exceedance or a violation start or end date.
  * Mnth5Status **required** `string`: The compliance status of the fifth month.
  * Mnth5Value **required** `string`: The value associated with the noncompliance in the fifth month. This may be a percent exceedance or a violation start or end date.
  * Mnth6Status **required** `string`: The compliance status of the sixth month.
  * Mnth6Value **required** `string`: The value associated with the noncompliance in the sixth month. This may be a percent exceedance or a violation start or end date.
  * Mnth7Status **required** `string`: The compliance status of the seventh month.
  * Mnth7Value **required** `string`: The value associated with the noncompliance in the seventh month. This may be a percent exceedance or a violation start or end date.
  * Mnth8Status **required** `string`: The compliance status of the eighth month.
  * Mnth8Value **required** `string`: The value associated with the noncompliance in the eighth month. This may be a percent exceedance or a violation start or end date.
  * Mnth9Status **required** `string`: The compliance status of the ninth month.
  * Mnth9Value **required** `string`: The value associated with the noncompliance in the ninth month. This may be a percent exceedance or a violation start or end date.
  * ParameterCode **required** `string`: The unique 5 digit numeric code identifying the parameter. If the code is less than 5 digits in the .CSV, append zeros to the beginning of the number (e.g., 100 is equivalent to 00100)
  * ParameterName **required** `string`: The pollutant name.
  * Qtr10Status **required** `string`: The relevant status for the quarter.
  * Qtr10Value **required** `string`: The value associated with the noncompliance in the tenth quarter. This may be a percent exceedance or a violation start or end date.
  * Qtr11Status **required** `string`: The relevant status for the quarter.
  * Qtr11Value **required** `string`: The value associated with the noncompliance in the eleventh quarter. This may be a percent exceedance or a violation start or end date.
  * Qtr12Status **required** `string`: The relevant status for the quarter.
  * Qtr12Value **required** `string`: The value associated with the noncompliance in the twelfth quarter. This may be a percent exceedance or a violation start or end date.
  * Qtr13Status **required** `string`: The relevant status for the quarter.
  * Qtr13Value **required** `string`: The value associated with the noncompliance in the thirteenth quarter. This may be a percent exceedance or a violation start or end date.
  * Qtr1Status **required** `string`: The relevant status for the quarter.
  * Qtr1Value **required** `string`: The value associated with the noncompliance in the first quarter. This may be a percent exceedance or a violation start or end date.
  * Qtr2Status **required** `string`: The relevant status for the quarter.
  * Qtr2Value **required** `string`: The value associated with the noncompliance in the second quarter. This may be a percent exceedance or a violation start or end date.
  * Qtr3Status **required** `string`: The relevant status for the quarter.
  * Qtr3Value **required** `string`: The value associated with the noncompliance in the third quarter. This may be a percent exceedance or a violation start or end date.
  * Qtr4Status **required** `string`: The relevant status for the quarter.
  * Qtr4Value **required** `string`: The value associated with the noncompliance in the fourth quarter. This may be a percent exceedance or a violation start or end date.
  * Qtr5Status **required** `string`: The relevant status for the quarter.
  * Qtr5Value **required** `string`: The value associated with the noncompliance in the fifth quarter. This may be a percent exceedance or a violation start or end date.
  * Qtr6Status **required** `string`: The relevant status for the quarter.
  * Qtr6Value **required** `string`: The value associated with the noncompliance in the sixth quarter. This may be a percent exceedance or a violation start or end date.
  * Qtr7Status **required** `string`: The relevant status for the quarter.
  * Qtr7Value **required** `string`: The value associated with the noncompliance in the seventh quarter. This may be a percent exceedance or a violation start or end date.
  * Qtr8Status **required** `string`: The relevant status for the quarter.
  * Qtr8Value **required** `string`: The value associated with the noncompliance in the eighth quarter. This may be a percent exceedance or a violation start or end date.
  * Qtr9Status **required** `string`: The relevant status for the quarter.
  * Qtr9Value **required** `string`: The value associated with the noncompliance in the ninth quarter. This may be a percent exceedance or a violation start or end date.
  * SourceID **required** `string`: Unique Identifier assigned by EPA.

### dfr041
* dfr041 `object`: CWA Effluent Compliance Sources Object
  * Parameters `array`
    * items [dfr040](#dfr040)

### dfr042
* dfr042 `object`: CWA PS Compliance Object
  * Header [dfr0_Qtr13Header](#dfr0_qtr13header)
  * Sources `array`
    * items [dfr043](#dfr043)

### dfr043
* dfr043 `object`: CWA PS Compliance Violation Object
  * Violations **required** `array`
    * items [dfr045](#dfr045)

### dfr045
* dfr045 `object`: CWA PS Compliance Violations Object
  * Mnth10Status **required** `string`: The compliance status of the tenth month.
  * Mnth10Value **required** `string`: The value associated with the noncompliance in the tenth month. This may be a percent exceedance or a violation start or end date.
  * Mnth11Status **required** `string`: The compliance status of the eleventh month.
  * Mnth11Value **required** `string`: The value associated with the noncompliance in the eleventh month. This may be a percent exceedance or a violation start or end date.
  * Mnth12Status **required** `string`: The compliance status of the twelfth month.
  * Mnth12Value **required** `string`: The value associated with the noncompliance in the twelfth month. This may be a percent exceedance or a violation start or end date.
  * Mnth13Status **required** `string`: The compliance status of the thirteenth month.
  * Mnth13Value **required** `string`: The value associated with the noncompliance in the thirteenth month. This may be a percent exceedance or a violation start or end date.
  * Mnth14Status **required** `string`: The compliance status of the fourteenth month.
  * Mnth14Value **required** `string`: The value associated with the noncompliance in the fourteenth month. This may be a percent exceedance or a violation start or end date.
  * Mnth15Status **required** `string`: The compliance status of the fifteenth month.
  * Mnth15Value **required** `string`: The value associated with the noncompliance in the fifteenth month. This may be a percent exceedance or a violation start or end date.
  * Mnth16Status **required** `string`: The compliance status of the sixteenth month.
  * Mnth16Value **required** `string`: The value associated with the noncompliance in the sixteenth month. This may be a percent exceedance or a violation start or end date.
  * Mnth17Status **required** `string`: The compliance status of the seventeenth month.
  * Mnth17Value **required** `string`: The value associated with the noncompliance in the seventeenth month. This may be a percent exceedance or a violation start or end date.
  * Mnth18Status **required** `string`: The compliance status of the eighteenth month.
  * Mnth18Value **required** `string`: The value associated with the noncompliance in the eighteenth month. This may be a percent exceedance or a violation start or end date.
  * Mnth19Status **required** `string`: The compliance status of the ninteenth month.
  * Mnth19Value **required** `string`: The value associated with the noncompliance in the ninteenth month. This may be a percent exceedance or a violation start or end date.
  * Mnth1Status **required** `string`: The compliance status of the first month.
  * Mnth1Value **required** `string`: The value associated with the noncompliance in the first month. This may be a percent exceedance or a violation start or end date.
  * Mnth20Status **required** `string`: The compliance status of the twentieth month.
  * Mnth20Value **required** `string`: The value associated with the noncompliance in the twentieth month. This may be a percent exceedance or a violation start or end date.
  * Mnth21Status **required** `string`: The compliance status of the twenty-first month.
  * Mnth21Value **required** `string`: The value associated with the noncompliance in the twenty-first month. This may be a percent exceedance or a violation start or end date.
  * Mnth22Status **required** `string`: The compliance status of the twenty-second month.
  * Mnth22Value **required** `string`: The value associated with the noncompliance in the twenty-second month. This may be a percent exceedance or a violation start or end date.
  * Mnth23Status **required** `string`: The compliance status of the twenty-third month.
  * Mnth23Value **required** `string`: The value associated with the noncompliance in the twenty-third month. This may be a percent exceedance or a violation start or end date.
  * Mnth24Status **required** `string`: The compliance status of the twenty-fourth month.
  * Mnth24Value **required** `string`: The value associated with the noncompliance in the twenty-fourth month. This may be a percent exceedance or a violation start or end date.
  * Mnth25Status **required** `string`: The compliance status of the twenty-fifth month.
  * Mnth25Value **required** `string`: The value associated with the noncompliance in the twenty-fifth month. This may be a percent exceedance or a violation start or end date.
  * Mnth26Status **required** `string`: The compliance status of the twenty-sixth month.
  * Mnth26Value **required** `string`: The value associated with the noncompliance in the twenty-sixth month. This may be a percent exceedance or a violation start or end date.
  * Mnth27Status **required** `string`: The compliance status of the twenty-seventh month.
  * Mnth27Value **required** `string`: The value associated with the noncompliance in the twenty-seventh month. This may be a percent exceedance or a violation start or end date.
  * Mnth28Status **required** `string`: The compliance status of the twenty-eighth month.
  * Mnth28Value **required** `string`: The value associated with the noncompliance in the twenty-eighth month. This may be a percent exceedance or a violation start or end date.
  * Mnth29Status **required** `string`: The compliance status of the twenty-ninth month.
  * Mnth29Value **required** `string`: The value associated with the noncompliance in the twenty-ninth month. This may be a percent exceedance or a violation start or end date.
  * Mnth2Status **required** `string`: The compliance status of the second month.
  * Mnth2Value **required** `string`: The value associated with the noncompliance in the second month. This may be a percent exceedance or a violation start or end date.
  * Mnth30Status **required** `string`: The compliance status of the thirtieth month.
  * Mnth30Value **required** `string`: The value associated with the noncompliance in the thirtieth month. This may be a percent exceedance or a violation start or end date.
  * Mnth31Status **required** `string`: The compliance status of the thirty-first month.
  * Mnth31Value **required** `string`: The value associated with the noncompliance in the thirty-first month. This may be a percent exceedance or a violation start or end date.
  * Mnth32Status **required** `string`: The compliance status of the thirty-second month.
  * Mnth32Value **required** `string`: The value associated with the noncompliance in the thirty-second month. This may be a percent exceedance or a violation start or end date.
  * Mnth33Status **required** `string`: The compliance status of the thirty-third month.
  * Mnth33Value **required** `string`: The value associated with the noncompliance in the thirty-third month. This may be a percent exceedance or a violation start or end date.
  * Mnth34Status **required** `string`: The compliance status of the thirty-fourth month.
  * Mnth34Value **required** `string`: The value associated with the noncompliance in the thirty-fourth month. This may be a percent exceedance or a violation start or end date.
  * Mnth35Status **required** `string`: The compliance status of the thirty-fifth month.
  * Mnth35Value **required** `string`: The value associated with the noncompliance in the thirty-fifth month. This may be a percent exceedance or a violation start or end date.
  * Mnth36Status **required** `string`: The compliance status of the thirty-sixth month.
  * Mnth36Value **required** `string`: The value associated with the noncompliance in the thirty-sixth month. This may be a percent exceedance or a violation start or end date.
  * Mnth37Status **required** `string`: The compliance status of the thirty-seventh month.
  * Mnth37Value **required** `string`: The value associated with the noncompliance in the thirty-seventh month. This may be a percent exceedance or a violation start or end date.
  * Mnth38Status **required** `string`: The compliance status of the thirty-eighth month.
  * Mnth38Value **required** `string`: The value associated with the noncompliance in the thirty-eighth month. This may be a percent exceedance or a violation start or end date.
  * Mnth39Status **required** `string`: The compliance status of the thirty-ninth month.
  * Mnth39Value **required** `string`: The value associated with the noncompliance in the thirty-ninth month. This may be a percent exceedance or a violation start or end date.
  * Mnth3Status **required** `string`: The compliance status of the third month.
  * Mnth3Value **required** `string`: The value associated with the noncompliance in the third month. This may be a percent exceedance or a violation start or end date.
  * Mnth4Status **required** `string`: The compliance status of the fourth month.
  * Mnth4Value **required** `string`: The value associated with the noncompliance in the fourth month. This may be a percent exceedance or a violation start or end date.
  * Mnth5Status **required** `string`: The compliance status of the fifth month.
  * Mnth5Value **required** `string`: The value associated with the noncompliance in the fifth month. This may be a percent exceedance or a violation start or end date.
  * Mnth6Status **required** `string`: The compliance status of the sixth month.
  * Mnth6Value **required** `string`: The value associated with the noncompliance in the sixth month. This may be a percent exceedance or a violation start or end date.
  * Mnth7Status **required** `string`: The compliance status of the seventh month.
  * Mnth7Value **required** `string`: The value associated with the noncompliance in the seventh month. This may be a percent exceedance or a violation start or end date.
  * Mnth8Status **required** `string`: The compliance status of the eighth month.
  * Mnth8Value **required** `string`: The value associated with the noncompliance in the eighth month. This may be a percent exceedance or a violation start or end date.
  * Mnth9Status **required** `string`: The compliance status of the ninth month.
  * Mnth9Value **required** `string`: The value associated with the noncompliance in the ninth month. This may be a percent exceedance or a violation start or end date.
  * NPDESViolationId **required** `string`: The unique identifier in ICIS-NPDES for the NPDES Violation
  * Qtr10Status **required** `string`: The relevant status for the quarter.
  * Qtr10Value **required** `string`: The value associated with the noncompliance in the tenth quarter. This may be a percent exceedance or a violation start or end date.
  * Qtr11Status **required** `string`: The relevant status for the quarter.
  * Qtr11Value **required** `string`: The value associated with the noncompliance in the eleventh quarter. This may be a percent exceedance or a violation start or end date.
  * Qtr12Status **required** `string`: The relevant status for the quarter.
  * Qtr12Value **required** `string`: The value associated with the noncompliance in the twelfth quarter. This may be a percent exceedance or a violation start or end date.
  * Qtr13Status **required** `string`: The relevant status for the quarter.
  * Qtr13Value **required** `string`: The value associated with the noncompliance in the thirteenth quarter. This may be a percent exceedance or a violation start or end date.
  * Qtr1Status **required** `string`: The relevant status for the quarter.
  * Qtr1Value **required** `string`: The value associated with the noncompliance in the first quarter. This may be a percent exceedance or a violation start or end date.
  * Qtr2Status **required** `string`: The relevant status for the quarter.
  * Qtr2Value **required** `string`: The value associated with the noncompliance in the second quarter. This may be a percent exceedance or a violation start or end date.
  * Qtr3Status **required** `string`: The relevant status for the quarter.
  * Qtr3Value **required** `string`: The value associated with the noncompliance in the third quarter. This may be a percent exceedance or a violation start or end date.
  * Qtr4Status **required** `string`: The relevant status for the quarter.
  * Qtr4Value **required** `string`: The value associated with the noncompliance in the fourth quarter. This may be a percent exceedance or a violation start or end date.
  * Qtr5Status **required** `string`: The relevant status for the quarter.
  * Qtr5Value **required** `string`: The value associated with the noncompliance in the fifth quarter. This may be a percent exceedance or a violation start or end date.
  * Qtr6Status **required** `string`: The relevant status for the quarter.
  * Qtr6Value **required** `string`: The value associated with the noncompliance in the sixth quarter. This may be a percent exceedance or a violation start or end date.
  * Qtr7Status **required** `string`: The relevant status for the quarter.
  * Qtr7Value **required** `string`: The value associated with the noncompliance in the seventh quarter. This may be a percent exceedance or a violation start or end date.
  * Qtr8Status **required** `string`: The relevant status for the quarter.
  * Qtr8Value **required** `string`: The value associated with the noncompliance in the eighth quarter. This may be a percent exceedance or a violation start or end date.
  * Qtr9Status **required** `string`: The relevant status for the quarter.
  * Qtr9Value **required** `string`: The value associated with the noncompliance in the ninth quarter. This may be a percent exceedance or a violation start or end date.
  * SourceID **required** `string`: Unique Identifier assigned by EPA.
  * ViolationDesc **required** `string`: A description of which type of violation has occurred

### dfr046
* dfr046 `object`: CWA RNC Compliance Object
  * Header [dfr0_Qtr12Header39](#dfr0_qtr12header39)
  * Sources `array`
    * items [dfr047_.Status](#dfr047_.status)

### dfr047_.Status
* dfr047_.Status `object`: CWA RNC Compliance Statuses Object
  * Status `array`
    * items [dfr0_Qtr12Status](#dfr0_qtr12status)

### dfr049
* dfr049 `object`: CWA SE Compliance Object
  * Header [dfr0_Qtr13Header](#dfr0_qtr13header)
  * Sources `array`
    * items [dfr050](#dfr050)

### dfr050
* dfr050 `object`: CWA SE Compliance Sources Object
  * Violations **required** `array`
    * items [dfr051](#dfr051)

### dfr051
* dfr051 `object`: CWA SE Compliance Violations Object
  * Agency **required** `string`: Identifies the lead agency (e.g., EPA, State) conducting the inspection. 
  * Mnth10Status **required** `string`: The compliance status of the tenth month.
  * Mnth10Value **required** `string`: The value associated with the noncompliance in the tenth month. This may be a percent exceedance or a violation start or end date.
  * Mnth11Status **required** `string`: The compliance status of the eleventh month.
  * Mnth11Value **required** `string`: The value associated with the noncompliance in the eleventh month. This may be a percent exceedance or a violation start or end date.
  * Mnth12Status **required** `string`: The compliance status of the twelfth month.
  * Mnth12Value **required** `string`: The value associated with the noncompliance in the twelfth month. This may be a percent exceedance or a violation start or end date.
  * Mnth13Status **required** `string`: The compliance status of the thirteenth month.
  * Mnth13Value **required** `string`: The value associated with the noncompliance in the thirteenth month. This may be a percent exceedance or a violation start or end date.
  * Mnth14Status **required** `string`: The compliance status of the fourteenth month.
  * Mnth14Value **required** `string`: The value associated with the noncompliance in the fourteenth month. This may be a percent exceedance or a violation start or end date.
  * Mnth15Status **required** `string`: The compliance status of the fifteenth month.
  * Mnth15Value **required** `string`: The value associated with the noncompliance in the fifteenth month. This may be a percent exceedance or a violation start or end date.
  * Mnth16Status **required** `string`: The compliance status of the sixteenth month.
  * Mnth16Value **required** `string`: The value associated with the noncompliance in the sixteenth month. This may be a percent exceedance or a violation start or end date.
  * Mnth17Status **required** `string`: The compliance status of the seventeenth month.
  * Mnth17Value **required** `string`: The value associated with the noncompliance in the seventeenth month. This may be a percent exceedance or a violation start or end date.
  * Mnth18Status **required** `string`: The compliance status of the eighteenth month.
  * Mnth18Value **required** `string`: The value associated with the noncompliance in the eighteenth month. This may be a percent exceedance or a violation start or end date.
  * Mnth19Status **required** `string`: The compliance status of the ninteenth month.
  * Mnth19Value **required** `string`: The value associated with the noncompliance in the ninteenth month. This may be a percent exceedance or a violation start or end date.
  * Mnth1Status **required** `string`: The compliance status of the first month.
  * Mnth1Value **required** `string`: The value associated with the noncompliance in the first month. This may be a percent exceedance or a violation start or end date.
  * Mnth20Status **required** `string`: The compliance status of the twentieth month.
  * Mnth20Value **required** `string`: The value associated with the noncompliance in the twentieth month. This may be a percent exceedance or a violation start or end date.
  * Mnth21Status **required** `string`: The compliance status of the twenty-first month.
  * Mnth21Value **required** `string`: The value associated with the noncompliance in the twenty-first month. This may be a percent exceedance or a violation start or end date.
  * Mnth22Status **required** `string`: The compliance status of the twenty-second month.
  * Mnth22Value **required** `string`: The value associated with the noncompliance in the twenty-second month. This may be a percent exceedance or a violation start or end date.
  * Mnth23Status **required** `string`: The compliance status of the twenty-third month.
  * Mnth23Value **required** `string`: The value associated with the noncompliance in the twenty-third month. This may be a percent exceedance or a violation start or end date.
  * Mnth24Status **required** `string`: The compliance status of the twenty-fourth month.
  * Mnth24Value **required** `string`: The value associated with the noncompliance in the twenty-fourth month. This may be a percent exceedance or a violation start or end date.
  * Mnth25Status **required** `string`: The compliance status of the twenty-fifth month.
  * Mnth25Value **required** `string`: The value associated with the noncompliance in the twenty-fifth month. This may be a percent exceedance or a violation start or end date.
  * Mnth26Status **required** `string`: The compliance status of the twenty-sixth month.
  * Mnth26Value **required** `string`: The value associated with the noncompliance in the twenty-sixth month. This may be a percent exceedance or a violation start or end date.
  * Mnth27Status **required** `string`: The compliance status of the twenty-seventh month.
  * Mnth27Value **required** `string`: The value associated with the noncompliance in the twenty-seventh month. This may be a percent exceedance or a violation start or end date.
  * Mnth28Status **required** `string`: The compliance status of the twenty-eighth month.
  * Mnth28Value **required** `string`: The value associated with the noncompliance in the twenty-eighth month. This may be a percent exceedance or a violation start or end date.
  * Mnth29Status **required** `string`: The compliance status of the twenty-ninth month.
  * Mnth29Value **required** `string`: The value associated with the noncompliance in the twenty-ninth month. This may be a percent exceedance or a violation start or end date.
  * Mnth2Status **required** `string`: The compliance status of the second month.
  * Mnth2Value **required** `string`: The value associated with the noncompliance in the second month. This may be a percent exceedance or a violation start or end date.
  * Mnth30Status **required** `string`: The compliance status of the thirtieth month.
  * Mnth30Value **required** `string`: The value associated with the noncompliance in the thirtieth month. This may be a percent exceedance or a violation start or end date.
  * Mnth31Status **required** `string`: The compliance status of the thirty-first month.
  * Mnth31Value **required** `string`: The value associated with the noncompliance in the thirty-first month. This may be a percent exceedance or a violation start or end date.
  * Mnth32Status **required** `string`: The compliance status of the thirty-second month.
  * Mnth32Value **required** `string`: The value associated with the noncompliance in the thirty-second month. This may be a percent exceedance or a violation start or end date.
  * Mnth33Status **required** `string`: The compliance status of the thirty-third month.
  * Mnth33Value **required** `string`: The value associated with the noncompliance in the thirty-third month. This may be a percent exceedance or a violation start or end date.
  * Mnth34Status **required** `string`: The compliance status of the thirty-fourth month.
  * Mnth34Value **required** `string`: The value associated with the noncompliance in the thirty-fourth month. This may be a percent exceedance or a violation start or end date.
  * Mnth35Status **required** `string`: The compliance status of the thirty-fifth month.
  * Mnth35Value **required** `string`: The value associated with the noncompliance in the thirty-fifth month. This may be a percent exceedance or a violation start or end date.
  * Mnth36Status **required** `string`: The compliance status of the thirty-sixth month.
  * Mnth36Value **required** `string`: The value associated with the noncompliance in the thirty-sixth month. This may be a percent exceedance or a violation start or end date.
  * Mnth37Status **required** `string`: The compliance status of the thirty-seventh month.
  * Mnth37Value **required** `string`: The value associated with the noncompliance in the thirty-seventh month. This may be a percent exceedance or a violation start or end date.
  * Mnth38Status **required** `string`: The compliance status of the thirty-eighth month.
  * Mnth38Value **required** `string`: The value associated with the noncompliance in the thirty-eighth month. This may be a percent exceedance or a violation start or end date.
  * Mnth39Status **required** `string`: The compliance status of the thirty-ninth month.
  * Mnth39Value **required** `string`: The value associated with the noncompliance in the thirty-ninth month. This may be a percent exceedance or a violation start or end date.
  * Mnth3Status **required** `string`: The compliance status of the third month.
  * Mnth3Value **required** `string`: The value associated with the noncompliance in the third month. This may be a percent exceedance or a violation start or end date.
  * Mnth4Status **required** `string`: The compliance status of the fourth month.
  * Mnth4Value **required** `string`: The value associated with the noncompliance in the fourth month. This may be a percent exceedance or a violation start or end date.
  * Mnth5Status **required** `string`: The compliance status of the fifth month.
  * Mnth5Value **required** `string`: The value associated with the noncompliance in the fifth month. This may be a percent exceedance or a violation start or end date.
  * Mnth6Status **required** `string`: The compliance status of the sixth month.
  * Mnth6Value **required** `string`: The value associated with the noncompliance in the sixth month. This may be a percent exceedance or a violation start or end date.
  * Mnth7Status **required** `string`: The compliance status of the seventh month.
  * Mnth7Value **required** `string`: The value associated with the noncompliance in the seventh month. This may be a percent exceedance or a violation start or end date.
  * Mnth8Status **required** `string`: The compliance status of the eighth month.
  * Mnth8Value **required** `string`: The value associated with the noncompliance in the eighth month. This may be a percent exceedance or a violation start or end date.
  * Mnth9Status **required** `string`: The compliance status of the ninth month.
  * Mnth9Value **required** `string`: The value associated with the noncompliance in the ninth month. This may be a percent exceedance or a violation start or end date.
  * NPDESViolationId **required** `string`: The unique identifier in ICIS-NPDES for the NPDES Violation
  * Qtr10Status **required** `string`: The relevant status for the quarter.
  * Qtr10Value **required** `string`: The value associated with the noncompliance in the tenth quarter. This may be a percent exceedance or a violation start or end date.
  * Qtr11Status **required** `string`: The relevant status for the quarter.
  * Qtr11Value **required** `string`: The value associated with the noncompliance in the eleventh quarter. This may be a percent exceedance or a violation start or end date.
  * Qtr12Status **required** `string`: The relevant status for the quarter.
  * Qtr12Value **required** `string`: The value associated with the noncompliance in the twelfth quarter. This may be a percent exceedance or a violation start or end date.
  * Qtr13Status **required** `string`: The relevant status for the quarter.
  * Qtr13Value **required** `string`: The value associated with the noncompliance in the thirteenth quarter. This may be a percent exceedance or a violation start or end date.
  * Qtr1Status **required** `string`: The relevant status for the quarter.
  * Qtr1Value **required** `string`: The value associated with the noncompliance in the first quarter. This may be a percent exceedance or a violation start or end date.
  * Qtr2Status **required** `string`: The relevant status for the quarter.
  * Qtr2Value **required** `string`: The value associated with the noncompliance in the second quarter. This may be a percent exceedance or a violation start or end date.
  * Qtr3Status **required** `string`: The relevant status for the quarter.
  * Qtr3Value **required** `string`: The value associated with the noncompliance in the third quarter. This may be a percent exceedance or a violation start or end date.
  * Qtr4Status **required** `string`: The relevant status for the quarter.
  * Qtr4Value **required** `string`: The value associated with the noncompliance in the fourth quarter. This may be a percent exceedance or a violation start or end date.
  * Qtr5Status **required** `string`: The relevant status for the quarter.
  * Qtr5Value **required** `string`: The value associated with the noncompliance in the fifth quarter. This may be a percent exceedance or a violation start or end date.
  * Qtr6Status **required** `string`: The relevant status for the quarter.
  * Qtr6Value **required** `string`: The value associated with the noncompliance in the sixth quarter. This may be a percent exceedance or a violation start or end date.
  * Qtr7Status **required** `string`: The relevant status for the quarter.
  * Qtr7Value **required** `string`: The value associated with the noncompliance in the seventh quarter. This may be a percent exceedance or a violation start or end date.
  * Qtr8Status **required** `string`: The relevant status for the quarter.
  * Qtr8Value **required** `string`: The value associated with the noncompliance in the eighth quarter. This may be a percent exceedance or a violation start or end date.
  * Qtr9Status **required** `string`: The relevant status for the quarter.
  * Qtr9Value **required** `string`: The value associated with the noncompliance in the ninth quarter. This may be a percent exceedance or a violation start or end date.
  * SourceID **required** `string`: Unique Identifier assigned by EPA.
  * ViolationDesc **required** `string`: A description of which type of violation has occurred

### dfr052
* dfr052 `object`: Case Formal Actions
  * Action `array`
    * items [dfr053](#dfr053)
  * ProgramDates `array`
    * items [dfr018_ProgramDates](#dfr018_programdates)

### dfr053
* dfr053 `object`: Case Formal Action
  * ActivityName **required** `string`: The user-created name for an activity.
  * CaseID **required** `string`: Air Facility System (AFS) ID.
  * CaseName **required** `string`: A unique number identifying the enforcement action. For EPA civil cases, these numbers begin with either the two digit EPA Region Code, "HQ" (headquarters initiated cases), and "EF" or "WF" (Eastern or Western Field Office CAA Mobile Source Program cases); followed by the fiscal year in which the action was initiated. After the fiscal year there is a sequence number. State NPDES civil cases start with the two character post abbreviation, followed by a sequence number.
  * CaseType **required** `string`: The unique code that identifies a type of compliance event or enforcement action.
  * DataSource **required** `string`
  * EPASystem **required** `string`: The EPA data system in which permit and facility records are kept. EPA's Facility Registry System (FRS) links all program database records (such as permit IDs and IDs facilities use in reporting to EPA) together. The following list describes the individual data systems that are linked to from the detailed facility report: 
  * IssueDate **required** `string`: For administrative cases, this field indicates the date that the complaint or Administrative Order (AO) was signed by the appropriate authority and issued to the respondent. For judicial cases, this field indicates the date that the complaint was filed with the Clerk of the Court.
  * LawSectionCode **required** `string`: The unique identifier for the Section(s) of law violated and cited in the activity.
  * LeadAgency **required** `string`: The lead agency (e.g., EPA, State) conducting the inspection
  * NumberSettlements **required** `string`: The number of final orders issued under the enforcement action.
  * Settlements **required** [dfr055](#dfr055)
  * SourceID **required** `string`: Unique Identifier assigned by EPA.
  * StatuteCode **required** `string`: Air Facility System (AFS) ID.

### dfr054
* dfr054 `object`
  * CompActionCost **required** `string`: The whole dollar amount of the estimated or actual value of the complying action activities.
  * FederalPenalty **required** `string`: For civil judicial Enforcement Actions, this amount is the Federal penalty assessed against the defendant(s) as specified in the final entered Consent Decree or Court Order.  For administrative Enforcement Actions, it is the penalty assessed in the Consent/Final Order.  It does not include the amount of the penalty mitigated due to a SEP or the amount shared with the state or local entities.  Interest payments associated with a penalty paid over time are not to be included in this amount.  It is the total Federal amount for each Final Order.
  * SepCost **required** `string`: The total value of all SEPs for all settlements at the enforcement case.
  * SettlementDate **required** `string`: For federal judicial actions, this is the date the settlement document is signed by the presiding judge and entered by the Clerk of the Court. At that point, the settlement becomes a binding court order. For administrative actions, this is the date that the final order is signed and issued by the enforcement authority.
  * StateLocalPenalty **required** `string`: The total dollar penalty amount from all settlements to be paid to a state or local enforcement authority that is party to a concluded enforcement action.
  * TotalCostRecovery **required** `string`: The amount of the cost recovery ordered or agreed to be repaid by the responsible parties, cost recovery whole dollar amount awarded by the Court and due the the Superfund. For administrative cases, it is the cost recovery whole dollar amount of the Final Order.

### dfr055
* dfr055 `object`
  * Settlement **required** `array`
    * items [dfr054](#dfr054)

### dfr057
* dfr057 `object`: Compliance History Object
  * Inspection `array`
    * items [dfr058](#dfr058)
  * ProgramDates `array`
    * items [dfr018_ProgramDates](#dfr018_programdates)

### dfr058
* dfr058 `object`: Inspection Object
  * ActivityType **required** `string`
  * CMSFlag **required** `string`: Indicates whether a Corrective Measure Study has been recommended.
  * CompMonitorID **required** `string`
  * Date **required** `string`: The date of the listed inspection
  * EPASystem **required** `string`: The EPA data system in which permit and facility records are kept. EPA's Facility Registry System (FRS) links all program database records (such as permit IDs and IDs facilities use in reporting to EPA) together. The following list describes the individual data systems that are linked to from the detailed facility report: 
  * Finding **required** `string`: For CAA, includes results of source or performance stack tests or Title V certification review results when applicable; for CWA and RCRA, includes whether violations or compliance issues were found during an inspection, if entered into an EPA system
  * InspectionType **required** `string`: A description of the type of inspection undertaken
  * LeadAgency **required** `string`: The lead agency (e.g., EPA, State) conducting the inspection
  * SourceID **required** `string`: Unique Identifier assigned by EPA.
  * Statute **required** `string`: The name of the statute associated with each of the permits and identifiers linked to the facility: 

### dfr059
* dfr059 `object`: Compliance Summary Object
  * ProgramDates **required** `array`
    * items [dfr018_ProgramDates](#dfr018_programdates)
  * Source **required** `array`
    * items [dfr060](#dfr060)

### dfr060
* dfr060 `object`: Source Object
  * CurrentAsOf **required** `string`: The most recent date or calendar year quarter of record maintained in the data system for which the Current SNC/HPV status applies. A quarter could be any of the following 3-month periods:
  * CurrentSNC **required** `string`: The current Significant Noncompliance (SNC) or High Priority Violator (HPV) status for the facility during the most current quarter. SNC is used for RCRA and CWA, and HPV is used for CAA. Each program has its own specific criteria for making this determination. The value of Yes indicates the facility is in SNC or HPV for the permit or site in question and may pose a more severe level of environmental threat. The value of No indicates the permit or site is not considered in SNC or HPV. If the facility is Non-Federally Reportable within AFS or if it is classified as minor within PCS, the field reads N/A. The value of N/A in this field indicates Not Applicable because compliance data for these facilities are not required to be reported to the national program database
  * Description **required** `string`: The text description for the event that results in the permit or site being in Significant Noncompliance (SNC) or in High Priority Violation (HPV)
  * QtrsInNC **required** `string`: The number of quarters, out of the last twelve quarters, in which the permit or site is considered either with violations, in non-compliance (NC) status, or in Significant Noncompliance (SNC) or High Priority Violation (HPV) status
  * SourceID **required** `string`: Unique Identifier assigned by EPA.
  * Statute **required** `string`: The name of the statute associated with each of the permits and identifiers linked to the facility: 

### dfr061
* dfr061 `object`: Demographics Object
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

### dfr062
* dfr062 `object`: Enforcement Compliance Summaries Object
  * ProgramDates **required** `array`
    * items [dfr063_s](#dfr063_s)
  * Summaries **required** `array`
    * items [dfr018_Summaries](#dfr018_summaries)

### dfr063_s
* dfr063_s `object`: Program Date Object
  * EndDate **required** `string`: End date for the date range of interest. Formatted as mm/dd/yyyy
  * Program **required** `string`: The source database for the EPA programs information.
  * StartDate3Yr **required** `string`: ?? - mm/dd/yyyy
  * StartDate5Yr **required** `string`: ?? - mm/dd/yyyy

### dfr064
* dfr064 `object`: Formal Actions Object
  * Action `array`
    * items [dfr065](#dfr065)
  * ProgramDates `array`
    * items [dfr018_ProgramDates](#dfr018_programdates)

### dfr065
* dfr065 `object`: Action Object
  * ActionDate **required** `string`: Air Facility System (AFS) ID.
  * ActionType **required** `string`: Text description of type of enforcement action. The type of action and description are designated differently in each system, but may be equivalent.
  * LeadAgency **required** `string`: The lead agency (e.g., EPA, State) conducting the inspection
  * PenaltyAmount **required** `string`: ??
  * PenaltyDesc **required** `string`: ??
  * SourceID **required** `string`: Unique Identifier assigned by EPA.
  * Statute **required** `string`: The name of the statute associated with each of the permits and identifiers linked to the facility: 

### dfr066
* dfr066 `object`: ICIS Formal Actions Object
  * Action `array`
    * items [dfr067](#dfr067)
  * ProgramDates `array`
    * items [dfr018_ProgramDates](#dfr018_programdates)

### dfr067
* dfr067 `object`: Action Object
  * ActivityName **required** `string`: The user-created name for an activity.
  * CaseID **required** `string`: Air Facility System (AFS) ID.
  * CaseName **required** `string`: A unique number identifying the enforcement action. For EPA civil cases, these numbers begin with either the two digit EPA Region Code, "HQ" (headquarters initiated cases), and "EF" or "WF" (Eastern or Western Field Office CAA Mobile Source Program cases); followed by the fiscal year in which the action was initiated. After the fiscal year there is a sequence number. State NPDES civil cases start with the two character post abbreviation, followed by a sequence number.
  * CaseType **required** `string`: The unique code that identifies a type of compliance event or enforcement action.
  * CompActionCost **required** `string`: The whole dollar amount of the estimated or actual value of the complying action activities.
  * FederalPenalty **required** `string`: For civil judicial Enforcement Actions, this amount is the Federal penalty assessed against the defendant(s) as specified in the final entered Consent Decree or Court Order.  For administrative Enforcement Actions, it is the penalty assessed in the Consent/Final Order.  It does not include the amount of the penalty mitigated due to a SEP or the amount shared with the state or local entities.  Interest payments associated with a penalty paid over time are not to be included in this amount.  It is the total Federal amount for each Final Order.
  * IssueDate **required** `string`: For administrative cases, this field indicates the date that the complaint or Administrative Order (AO) was signed by the appropriate authority and issued to the respondent. For judicial cases, this field indicates the date that the complaint was filed with the Clerk of the Court.
  * LatestSettlementEnteredDate **required** `string`: The date that the final order is signed and issued by the enforcement authority.
  * LawSectionCode **required** `string`: The unique identifier for the Section(s) of law violated and cited in the activity.
  * LeadAgency **required** `string`: The lead agency (e.g., EPA, State) conducting the inspection
  * NumberSettlements **required** `string`: The number of final orders issued under the enforcement action.
  * SepCost **required** `string`: The total value of all SEPs for all settlements at the enforcement case.
  * SettlementDate **required** `string`: For federal judicial actions, this is the date the settlement document is signed by the presiding judge and entered by the Clerk of the Court. At that point, the settlement becomes a binding court order. For administrative actions, this is the date that the final order is signed and issued by the enforcement authority.
  * StateLocalPenalty **required** `string`: The total dollar penalty amount from all settlements to be paid to a state or local enforcement authority that is party to a concluded enforcement action.
  * StatuteCode **required** `string`: Air Facility System (AFS) ID.
  * TotalCostRecovery **required** `string`: The amount of the cost recovery ordered or agreed to be repaid by the responsible parties, cost recovery whole dollar amount awarded by the Court and due the the Superfund. For administrative cases, it is the cost recovery whole dollar amount of the Final Order.

### dfr068
* dfr068 `object`: Inspection Enforcement Summary Object
  * ProgramDates `array`
    * items [dfr018_ProgramDates](#dfr018_programdates)
  * Source `array`
    * items [dfr069](#dfr069)

### dfr069
* dfr069 `object`: Source Object
  * DateLastInspection **required** `string`: The date on which the most recent inspection of the facility took place
  * EPASystem **required** `string`: The EPA data system in which permit and facility records are kept. EPA's Facility Registry System (FRS) links all program database records (such as permit IDs and IDs facilities use in reporting to EPA) together. The following list describes the individual data systems that are linked to from the detailed facility report: 
  * FormalEnfActCount **required** `string`: The number of formal enforcement actions that have been taken against the facility, under the corresponding statute, within the last five years.
  * InspectionCount **required** `string`: The total number of inspections pertaining to compliance of the designated statute
  * SourceID **required** `string`: Unique Identifier assigned by EPA.
  * Statute **required** `string`: The name of the statute associated with each of the permits and identifiers linked to the facility: 
  * TotalPenalties **required** `string`: The total dollar amount of either assessed or final penalties within the five year time period

### dfr070
* dfr070 `object`: Lead and Copper Rule Object
  * CopperSamples `array`
    * items [dfr071](#dfr071)
  * CuALE `string`: The count of occurrences when 90th percentile sample concentrations of copper exceeded the copper action level of 1.3 mg/L in the past five years.
  * CuALEUnits `string`: The copper action level exceedances measurement units.
  * CuALEValue `string`: The copper action level exceedance value.
  * CuSampleDates `string`: The dates during which tap water samples were collected.
  * CuViol `string`: The number of copper violations in the last five years.
  * LeadAndCopperViol `string`: The number of lead and copper violations.
  * LeadCopperRuleHealthBasedViol `string`: The count of open health-based violations of the Lead and Copper Rule in the past five years.
  * LeadSamples `array`
    * items [dfr072](#dfr072)
  * PbALE `string`: The count of occurrences when 90th percentile sample concentrations of lead exceeded the lead action level of 0.015 mg/L in the past five years.
  * PbALEUnits `string`: The lead action level exceedance measurement units.
  * PbALEValue `string`: The lead action level exceedance sample value.
  * PbSampleDates `string`: The dates during which tap water samples were collected.
  * PbViol `string`: The number of lead violations in the last five years.
  * RuleCode350Viol `string`: The count of open health-based violations in the past five years. These include violations of maximum contaminant levels (MCLs), maximum residual disinfectant levels (MRDLs), or treatment technique (TT) rules.
  * SourceID `string`: Unique Identifier assigned by EPA.
  * iCU90 `string`: The number of times samples have been collected for copper in the last five years.
  * iPB90 `string`: The number of times samples have been collected for lead in the last five years.

### dfr071
* dfr071 `object`: Copper Samples
  * CU90 **required** `string`: The concentration of copper representing the 90th percentile level of all tap water samples collected for the water system
  * CU90Dates **required** `string`: The dates during which tap water samples were collected.
  * CU90Units **required** `string`: The measurement units.
  * CU90Value **required** `string`: The value of the concentration of copper representing the 90th percentile level of all tap water samples collected for the water system

### dfr072
* dfr072 `object`: Lead Samples
  * PB90 **required** `string`: The concentration of lead representing the 90th percentile level of all tap water samples collected for the water system
  * PB90Dates **required** `string`: The dates during which tap water samples were collected.
  * PB90Units **required** `string`: The measurement units.
  * PB90Value **required** `string`: The value of the concentration of lead representing the 90th percentile level of all tap water samples collected for the water system

### dfr073
* dfr073 `object`: Map Output Object
  * CenterLatitude **required** `string`: The latitude of the facility in degrees, to four decimal places.
  * CenterLongitude **required** `string`: The longitude of the facility in degrees, to four decimal places.
  * IconBaseURL **required** `string`: URL where all the icons are located
  * MapData **required** `array`: An array of facility geospatial information.
    * items [dfr018_MapData](#dfr018_mapdata)
  * PopUpBaseURL **required** `string`: Combine this URL with the PUC to get popup info

### dfr074
* dfr074 `object`: NAICS Sources Object
  * NAICSCodes **required** `array`
    * items [dfr075](#dfr075)

### dfr075
* dfr075 `object`: NAICS Codes Object
  * EPASystem **required** `string`: The EPA data system in which permit and facility records are kept. EPA's Facility Registry System (FRS) links all program database records (such as permit IDs and IDs facilities use in reporting to EPA) together. The following list describes the individual data systems that are linked to from the detailed facility report: 
  * NAICSCode **required** `string`: The North American Industry Classification System (NAICS) code
  * NAICSDesc **required** `string`: The corresponding description of North American Industry Classification System (NAICS) code.
  * SourceID **required** `string`: Unique Identifier assigned by EPA.

### dfr076
* dfr076 `object`: Notices Object
  * Notice **required** `array`
    * items [dfr077](#dfr077)
  * ProgramDates **required** `array`
    * items [dfr018_ProgramDates](#dfr018_programdates)

### dfr077
* dfr077 `object`: Notice Object
  * ActionType **required** `string`: CAA Informal Enforcement Actions (AFS National Action Types):
  * EPASystem **required** `string`: The EPA data system in which permit and facility records are kept. EPA's Facility Registry System (FRS) links all program database records (such as permit IDs and IDs facilities use in reporting to EPA) together. The following list describes the individual data systems that are linked to from the detailed facility report: 
  * EnfIdentifier **required** `string`: The number of the Enforcement Action as referred to by the Court where the action was filed; the Enforcement Action Identifier.
  * LeadAgency **required** `string`: The lead agency (e.g., EPA, State) conducting the inspection
  * NoticeDate **required** `string`: The date of the the most recent informal enforcement action issued to the facility.
  * SourceID **required** `string`: Unique Identifier assigned by EPA.
  * Statute **required** `string`: The name of the statute associated with each of the permits and identifiers linked to the facility: 

### dfr078
* dfr078 `object`: Resource Conservation and Recovery Act Compliance Object
  * Mnth10End `string`: The start date of the tenth month (MM/DD/YYYY).
  * Mnth10Start `string`: The end date of the tenth month (MM/DD/YYYY).
  * Mnth11End `string`: The start date of the eleventh month (MM/DD/YYYY).
  * Mnth11Start `string`: The end date of the eleventh month (MM/DD/YYYY).
  * Mnth12End `string`: The start date of the twelfth month (MM/DD/YYYY).
  * Mnth12Start `string`: The end date of the twelfth month (MM/DD/YYYY).
  * Mnth13End `string`: The start date of the thirteenth month (MM/DD/YYYY).
  * Mnth13Start `string`: The end date of the thirteenth month (MM/DD/YYYY).
  * Mnth14End `string`: The start date of the fourteenth month (MM/DD/YYYY).
  * Mnth14Start `string`: The end date of the fourteenth month (MM/DD/YYYY).
  * Mnth15End `string`: The start date of the fifteenth month (MM/DD/YYYY).
  * Mnth15Start `string`: The end date of the fifteenth month (MM/DD/YYYY).
  * Mnth16End `string`: The start date of the sixteenth month (MM/DD/YYYY).
  * Mnth16Start `string`: The end date of the sixteenth month (MM/DD/YYYY).
  * Mnth17End `string`: The start date of the seventeenth month (MM/DD/YYYY).
  * Mnth17Start `string`: The end date of the seventeenth month (MM/DD/YYYY).
  * Mnth18End `string`: The start date of the eighteenth month (MM/DD/YYYY).
  * Mnth18Start `string`: The end date of the eighteenth month (MM/DD/YYYY).
  * Mnth19End `string`: The start date of the ninteenth month (MM/DD/YYYY).
  * Mnth19Start `string`: The end date of the ninteenth month (MM/DD/YYYY).
  * Mnth1End `string`: The start date of the first month (MM/DD/YYYY).
  * Mnth1Start `string`: The end date of the first month (MM/DD/YYYY).
  * Mnth20End `string`: The start date of the twentieth month (MM/DD/YYYY).
  * Mnth20Start `string`: The end date of the twentieth month (MM/DD/YYYY).
  * Mnth21End `string`: The start date of the twenty-first month (MM/DD/YYYY).
  * Mnth21Start `string`: The end date of the twenty-first month (MM/DD/YYYY).
  * Mnth22End `string`: The start date of the twenty-second month (MM/DD/YYYY).
  * Mnth22Start `string`: The end date of the twenty-second month (MM/DD/YYYY).
  * Mnth23End `string`: The start date of the twenty-third month (MM/DD/YYYY).
  * Mnth23Start `string`: The end date of the twenty-third month (MM/DD/YYYY).
  * Mnth24End `string`: The start date of the twenty-fourth month (MM/DD/YYYY).
  * Mnth24Start `string`: The end date of the twenty-fourth month (MM/DD/YYYY).
  * Mnth25End `string`: The start date of the twenty-fifth month (MM/DD/YYYY).
  * Mnth25Start `string`: The end date of the twenty-fifth month (MM/DD/YYYY).
  * Mnth26End `string`: The start date of the twenty-sixth month (MM/DD/YYYY).
  * Mnth26Start `string`: The end date of the twenty-sixth month (MM/DD/YYYY).
  * Mnth27End `string`: The start date of the twenty-seventh month (MM/DD/YYYY).
  * Mnth27Start `string`: The end date of the twenty-seventh month (MM/DD/YYYY).
  * Mnth28End `string`: The start date of the twenty-eighth month (MM/DD/YYYY).
  * Mnth28Start `string`: The end date of the twenty-eighth month (MM/DD/YYYY).
  * Mnth29End `string`: The start date of the twenty-ninth month (MM/DD/YYYY).
  * Mnth29Start `string`: The end date of the twenty-ninth month (MM/DD/YYYY).
  * Mnth2End `string`: The start date of the second month (MM/DD/YYYY).
  * Mnth2Start `string`: The end date of the second month (MM/DD/YYYY).
  * Mnth30End `string`: The start date of the thirtieth month (MM/DD/YYYY).
  * Mnth30Start `string`: The end date of the thirtieth month (MM/DD/YYYY).
  * Mnth31End `string`: The start date of the thirty-first month (MM/DD/YYYY).
  * Mnth31Start `string`: The end date of the thirty-first month (MM/DD/YYYY).
  * Mnth32End `string`: The start date of the thirty-second month (MM/DD/YYYY).
  * Mnth32Start `string`: The end date of the thirty-second month (MM/DD/YYYY).
  * Mnth33End `string`: The start date of the thirty-third month (MM/DD/YYYY).
  * Mnth33Start `string`: The end date of the thirty-third month (MM/DD/YYYY).
  * Mnth34End `string`: The start date of the thirty-fourth month (MM/DD/YYYY).
  * Mnth34Start `string`: The end date of the thirty-fourth month (MM/DD/YYYY).
  * Mnth35End `string`: The start date of the thirty-fifth month (MM/DD/YYYY).
  * Mnth35Start `string`: The end date of the thirty-fifth month (MM/DD/YYYY).
  * Mnth36End `string`: The start date of the thirty-sixth month (MM/DD/YYYY).
  * Mnth36Start `string`: The end date of the thirty-sixth month (MM/DD/YYYY).
  * Mnth3End `string`: The start date of the third month (MM/DD/YYYY).
  * Mnth3Start `string`: The end date of the third month (MM/DD/YYYY).
  * Mnth4End `string`: The start date of the fourth month (MM/DD/YYYY).
  * Mnth4Start `string`: The end date of the fourth month (MM/DD/YYYY).
  * Mnth5End `string`: The start date of the fifth month (MM/DD/YYYY).
  * Mnth5Start `string`: The end date of the fifth month (MM/DD/YYYY).
  * Mnth6End `string`: The start date of the sixth month (MM/DD/YYYY).
  * Mnth6Start `string`: The end date of the sixth month (MM/DD/YYYY).
  * Mnth7End `string`: The start date of the seventh month (MM/DD/YYYY).
  * Mnth7Start `string`: The end date of the seventh month (MM/DD/YYYY).
  * Mnth8End `string`: The start date of the eighth month (MM/DD/YYYY).
  * Mnth8Start `string`: The end date of the eighth month (MM/DD/YYYY).
  * Mnth9End `string`: The start date of the ninth month (MM/DD/YYYY).
  * Mnth9Start `string`: The end date of the ninth month (MM/DD/YYYY).
  * Qtr10End `string`: Date indicating the end of Quarter 10.
  * Qtr10Start `string`: Date indicating the beginning of Quarter 10.
  * Qtr11End `string`: Date indicating the end of Quarter 11.
  * Qtr11Start `string`: Date indicating the beginning of Quarter 11.
  * Qtr12End `string`: Date indicating the end of Quarter 12.
  * Qtr12Start `string`: Date indicating the beginning of Quarter 12.
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
    * items [dfr079_s](#dfr079_s)

### dfr079_s
* dfr079_s `object`: Source Object
  * Evaluations `array`
    * items [dfr079_s.Evaluations](#dfr079_s.evaluations)
  * Status [dfr079_s.Status](#dfr079_s.status)
  * Violations `array`
    * items [dfr079_s.Violations](#dfr079_s.violations)

### dfr079_s.Evaluations
* dfr079_s.Evaluations `object`: Evaluations Object
  * Agency **required** `string`: Identifies the lead agency (e.g., EPA, State) conducting the inspection. 
  * Evaluation **required** `string`
  * EvaluationType **required** `string`
  * Mnth10Status **required** `string`: The compliance status of the tenth month.
  * Mnth11Status **required** `string`: The compliance status of the eleventh month.
  * Mnth12Status **required** `string`: The compliance status of the twelfth month.
  * Mnth13Status **required** `string`: The compliance status of the thirteenth month.
  * Mnth14Status **required** `string`: The compliance status of the fourteenth month.
  * Mnth15Status **required** `string`: The compliance status of the fifteenth month.
  * Mnth16Status **required** `string`: The compliance status of the sixteenth month.
  * Mnth17Status **required** `string`: The compliance status of the seventeenth month.
  * Mnth18Status **required** `string`: The compliance status of the eighteenth month.
  * Mnth19Status **required** `string`: The compliance status of the ninteenth month.
  * Mnth1Status **required** `string`: The compliance status of the first month.
  * Mnth20Status **required** `string`: The compliance status of the twentieth month.
  * Mnth21Status **required** `string`: The compliance status of the twenty-first month.
  * Mnth22Status **required** `string`: The compliance status of the twenty-second month.
  * Mnth23Status **required** `string`: The compliance status of the twenty-third month.
  * Mnth24Status **required** `string`: The compliance status of the twenty-fourth month.
  * Mnth25Status **required** `string`: The compliance status of the twenty-fifth month.
  * Mnth26Status **required** `string`: The compliance status of the twenty-sixth month.
  * Mnth27Status **required** `string`: The compliance status of the twenty-seventh month.
  * Mnth28Status **required** `string`: The compliance status of the twenty-eighth month.
  * Mnth29Status **required** `string`: The compliance status of the twenty-ninth month.
  * Mnth2Status **required** `string`: The compliance status of the second month.
  * Mnth30Status **required** `string`: The compliance status of the thirtieth month.
  * Mnth31Status **required** `string`: The compliance status of the thirty-first month.
  * Mnth32Status **required** `string`: The compliance status of the thirty-second month.
  * Mnth33Status **required** `string`: The compliance status of the thirty-third month.
  * Mnth34Status **required** `string`: The compliance status of the thirty-fourth month.
  * Mnth35Status **required** `string`: The compliance status of the thirty-fifth month.
  * Mnth36Status **required** `string`: The compliance status of the thirty-sixth month.
  * Mnth3Status **required** `string`: The compliance status of the third month.
  * Mnth4Status **required** `string`: The compliance status of the fourth month.
  * Mnth5Status **required** `string`: The compliance status of the fifth month.
  * Mnth6Status **required** `string`: The compliance status of the sixth month.
  * Mnth7Status **required** `string`: The compliance status of the seventh month.
  * Mnth8Status **required** `string`: The compliance status of the eighth month.
  * Mnth9Status **required** `string`: The compliance status of the ninth month.
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

### dfr079_s.Status
* dfr079_s.Status `object`: Status Object
  * Mnth10Status **required** `string`: The compliance status of the tenth month.
  * Mnth11Status **required** `string`: The compliance status of the eleventh month.
  * Mnth12Status **required** `string`: The compliance status of the twelfth month.
  * Mnth13Status **required** `string`: The compliance status of the thirteenth month.
  * Mnth14Status **required** `string`: The compliance status of the fourteenth month.
  * Mnth15Status **required** `string`: The compliance status of the fifteenth month.
  * Mnth16Status **required** `string`: The compliance status of the sixteenth month.
  * Mnth17Status **required** `string`: The compliance status of the seventeenth month.
  * Mnth18Status **required** `string`: The compliance status of the eighteenth month.
  * Mnth19Status **required** `string`: The compliance status of the ninteenth month.
  * Mnth1Status **required** `string`: The compliance status of the first month.
  * Mnth20Status **required** `string`: The compliance status of the twentieth month.
  * Mnth21Status **required** `string`: The compliance status of the twenty-first month.
  * Mnth22Status **required** `string`: The compliance status of the twenty-second month.
  * Mnth23Status **required** `string`: The compliance status of the twenty-third month.
  * Mnth24Status **required** `string`: The compliance status of the twenty-fourth month.
  * Mnth25Status **required** `string`: The compliance status of the twenty-fifth month.
  * Mnth26Status **required** `string`: The compliance status of the twenty-sixth month.
  * Mnth27Status **required** `string`: The compliance status of the twenty-seventh month.
  * Mnth28Status **required** `string`: The compliance status of the twenty-eighth month.
  * Mnth29Status **required** `string`: The compliance status of the twenty-ninth month.
  * Mnth2Status **required** `string`: The compliance status of the second month.
  * Mnth30Status **required** `string`: The compliance status of the thirtieth month.
  * Mnth31Status **required** `string`: The compliance status of the thirty-first month.
  * Mnth32Status **required** `string`: The compliance status of the thirty-second month.
  * Mnth33Status **required** `string`: The compliance status of the thirty-third month.
  * Mnth34Status **required** `string`: The compliance status of the thirty-fourth month.
  * Mnth35Status **required** `string`: The compliance status of the thirty-fifth month.
  * Mnth36Status **required** `string`: The compliance status of the thirty-sixth month.
  * Mnth3Status **required** `string`: The compliance status of the third month.
  * Mnth4Status **required** `string`: The compliance status of the fourth month.
  * Mnth5Status **required** `string`: The compliance status of the fifth month.
  * Mnth6Status **required** `string`: The compliance status of the sixth month.
  * Mnth7Status **required** `string`: The compliance status of the seventh month.
  * Mnth8Status **required** `string`: The compliance status of the eighth month.
  * Mnth9Status **required** `string`: The compliance status of the ninth month.
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

### dfr079_s.Violations
* dfr079_s.Violations `object`: Violations Object
  * Agency **required** `string`: Identifies the lead agency (e.g., EPA, State) conducting the inspection. 
  * Mnth10Status **required** `string`: The compliance status of the tenth month.
  * Mnth11Status **required** `string`: The compliance status of the eleventh month.
  * Mnth12Status **required** `string`: The compliance status of the twelfth month.
  * Mnth13Status **required** `string`: The compliance status of the thirteenth month.
  * Mnth14Status **required** `string`: The compliance status of the fourteenth month.
  * Mnth15Status **required** `string`: The compliance status of the fifteenth month.
  * Mnth16Status **required** `string`: The compliance status of the sixteenth month.
  * Mnth17Status **required** `string`: The compliance status of the seventeenth month.
  * Mnth18Status **required** `string`: The compliance status of the eighteenth month.
  * Mnth19Status **required** `string`: The compliance status of the ninteenth month.
  * Mnth1Status **required** `string`: The compliance status of the first month.
  * Mnth20Status **required** `string`: The compliance status of the twentieth month.
  * Mnth21Status **required** `string`: The compliance status of the twenty-first month.
  * Mnth22Status **required** `string`: The compliance status of the twenty-second month.
  * Mnth23Status **required** `string`: The compliance status of the twenty-third month.
  * Mnth24Status **required** `string`: The compliance status of the twenty-fourth month.
  * Mnth25Status **required** `string`: The compliance status of the twenty-fifth month.
  * Mnth26Status **required** `string`: The compliance status of the twenty-sixth month.
  * Mnth27Status **required** `string`: The compliance status of the twenty-seventh month.
  * Mnth28Status **required** `string`: The compliance status of the twenty-eighth month.
  * Mnth29Status **required** `string`: The compliance status of the twenty-ninth month.
  * Mnth2Status **required** `string`: The compliance status of the second month.
  * Mnth30Status **required** `string`: The compliance status of the thirtieth month.
  * Mnth31Status **required** `string`: The compliance status of the thirty-first month.
  * Mnth32Status **required** `string`: The compliance status of the thirty-second month.
  * Mnth33Status **required** `string`: The compliance status of the thirty-third month.
  * Mnth34Status **required** `string`: The compliance status of the thirty-fourth month.
  * Mnth35Status **required** `string`: The compliance status of the thirty-fifth month.
  * Mnth36Status **required** `string`: The compliance status of the thirty-sixth month.
  * Mnth3Status **required** `string`: The compliance status of the third month.
  * Mnth4Status **required** `string`: The compliance status of the fourth month.
  * Mnth5Status **required** `string`: The compliance status of the fifth month.
  * Mnth6Status **required** `string`: The compliance status of the sixth month.
  * Mnth7Status **required** `string`: The compliance status of the seventh month.
  * Mnth8Status **required** `string`: The compliance status of the eighth month.
  * Mnth9Status **required** `string`: The compliance status of the ninth month.
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
  * ViolationType **required** `string`: Indicates whether a violation is a High Priority Violation (HPV) or a Federally Reportable Violation (FRV).

### dfr081
* dfr081 `object`: SDWIS Compliance Object
  * Mnth10End `string`: The start date of the tenth month (MM/DD/YYYY).
  * Mnth10Start `string`: The end date of the tenth month (MM/DD/YYYY).
  * Mnth11End `string`: The start date of the eleventh month (MM/DD/YYYY).
  * Mnth11Start `string`: The end date of the eleventh month (MM/DD/YYYY).
  * Mnth12End `string`: The start date of the twelfth month (MM/DD/YYYY).
  * Mnth12Start `string`: The end date of the twelfth month (MM/DD/YYYY).
  * Mnth13End `string`: The start date of the thirteenth month (MM/DD/YYYY).
  * Mnth13Start `string`: The end date of the thirteenth month (MM/DD/YYYY).
  * Mnth14End `string`: The start date of the fourteenth month (MM/DD/YYYY).
  * Mnth14Start `string`: The end date of the fourteenth month (MM/DD/YYYY).
  * Mnth15End `string`: The start date of the fifteenth month (MM/DD/YYYY).
  * Mnth15Start `string`: The end date of the fifteenth month (MM/DD/YYYY).
  * Mnth16End `string`: The start date of the sixteenth month (MM/DD/YYYY).
  * Mnth16Start `string`: The end date of the sixteenth month (MM/DD/YYYY).
  * Mnth17End `string`: The start date of the seventeenth month (MM/DD/YYYY).
  * Mnth17Start `string`: The end date of the seventeenth month (MM/DD/YYYY).
  * Mnth18End `string`: The start date of the eighteenth month (MM/DD/YYYY).
  * Mnth18Start `string`: The end date of the eighteenth month (MM/DD/YYYY).
  * Mnth19End `string`: The start date of the ninteenth month (MM/DD/YYYY).
  * Mnth19Start `string`: The end date of the ninteenth month (MM/DD/YYYY).
  * Mnth1End `string`: The start date of the first month (MM/DD/YYYY).
  * Mnth1Start `string`: The end date of the first month (MM/DD/YYYY).
  * Mnth20End `string`: The start date of the twentieth month (MM/DD/YYYY).
  * Mnth20Start `string`: The end date of the twentieth month (MM/DD/YYYY).
  * Mnth21End `string`: The start date of the twenty-first month (MM/DD/YYYY).
  * Mnth21Start `string`: The end date of the twenty-first month (MM/DD/YYYY).
  * Mnth22End `string`: The start date of the twenty-second month (MM/DD/YYYY).
  * Mnth22Start `string`: The end date of the twenty-second month (MM/DD/YYYY).
  * Mnth23End `string`: The start date of the twenty-third month (MM/DD/YYYY).
  * Mnth23Start `string`: The end date of the twenty-third month (MM/DD/YYYY).
  * Mnth24End `string`: The start date of the twenty-fourth month (MM/DD/YYYY).
  * Mnth24Start `string`: The end date of the twenty-fourth month (MM/DD/YYYY).
  * Mnth25End `string`: The start date of the twenty-fifth month (MM/DD/YYYY).
  * Mnth25Start `string`: The end date of the twenty-fifth month (MM/DD/YYYY).
  * Mnth26End `string`: The start date of the twenty-sixth month (MM/DD/YYYY).
  * Mnth26Start `string`: The end date of the twenty-sixth month (MM/DD/YYYY).
  * Mnth27End `string`: The start date of the twenty-seventh month (MM/DD/YYYY).
  * Mnth27Start `string`: The end date of the twenty-seventh month (MM/DD/YYYY).
  * Mnth28End `string`: The start date of the twenty-eighth month (MM/DD/YYYY).
  * Mnth28Start `string`: The end date of the twenty-eighth month (MM/DD/YYYY).
  * Mnth29End `string`: The start date of the twenty-ninth month (MM/DD/YYYY).
  * Mnth29Start `string`: The end date of the twenty-ninth month (MM/DD/YYYY).
  * Mnth2End `string`: The start date of the second month (MM/DD/YYYY).
  * Mnth2Start `string`: The end date of the second month (MM/DD/YYYY).
  * Mnth30End `string`: The start date of the thirtieth month (MM/DD/YYYY).
  * Mnth30Start `string`: The end date of the thirtieth month (MM/DD/YYYY).
  * Mnth31End `string`: The start date of the thirty-first month (MM/DD/YYYY).
  * Mnth31Start `string`: The end date of the thirty-first month (MM/DD/YYYY).
  * Mnth32End `string`: The start date of the thirty-second month (MM/DD/YYYY).
  * Mnth32Start `string`: The end date of the thirty-second month (MM/DD/YYYY).
  * Mnth33End `string`: The start date of the thirty-third month (MM/DD/YYYY).
  * Mnth33Start `string`: The end date of the thirty-third month (MM/DD/YYYY).
  * Mnth34End `string`: The start date of the thirty-fourth month (MM/DD/YYYY).
  * Mnth34Start `string`: The end date of the thirty-fourth month (MM/DD/YYYY).
  * Mnth35End `string`: The start date of the thirty-fifth month (MM/DD/YYYY).
  * Mnth35Start `string`: The end date of the thirty-fifth month (MM/DD/YYYY).
  * Mnth36End `string`: The start date of the thirty-sixth month (MM/DD/YYYY).
  * Mnth36Start `string`: The end date of the thirty-sixth month (MM/DD/YYYY).
  * Mnth37End `string`: The start date of the thirty-seventh month (MM/DD/YYYY).
  * Mnth37Start `string`: The end date of the thirty-seventh month (MM/DD/YYYY).
  * Mnth38End `string`: The start date of the thirty-eighth month (MM/DD/YYYY).
  * Mnth38Start `string`: The end date of the thirty-eighth month (MM/DD/YYYY).
  * Mnth39End `string`: The start date of the thirty-ninth month (MM/DD/YYYY).
  * Mnth39Start `string`: The end date of the thirty-ninth month (MM/DD/YYYY).
  * Mnth3End `string`: The start date of the third month (MM/DD/YYYY).
  * Mnth3Start `string`: The end date of the third month (MM/DD/YYYY).
  * Mnth4End `string`: The start date of the fourth month (MM/DD/YYYY).
  * Mnth4Start `string`: The end date of the fourth month (MM/DD/YYYY).
  * Mnth5End `string`: The start date of the fifth month (MM/DD/YYYY).
  * Mnth5Start `string`: The end date of the fifth month (MM/DD/YYYY).
  * Mnth6End `string`: The start date of the sixth month (MM/DD/YYYY).
  * Mnth6Start `string`: The end date of the sixth month (MM/DD/YYYY).
  * Mnth7End `string`: The start date of the seventh month (MM/DD/YYYY).
  * Mnth7Start `string`: The end date of the seventh month (MM/DD/YYYY).
  * Mnth8End `string`: The start date of the eighth month (MM/DD/YYYY).
  * Mnth8Start `string`: The end date of the eighth month (MM/DD/YYYY).
  * Mnth9End `string`: The start date of the ninth month (MM/DD/YYYY).
  * Mnth9Start `string`: The end date of the ninth month (MM/DD/YYYY).
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
    * items [dfr083_s](#dfr083_s)

### dfr083_s
* dfr083_s `object`: Sources Object
  * RulesViolated **required** `array`
    * items [dfr083_s.RulesViolated](#dfr083_s.rulesviolated)
  * Status **required** [dfr0_Qtr13Status](#dfr0_qtr13status)

### dfr083_s.RulesViolated
* dfr083_s.RulesViolated `object`: Rules Violated Object
  * DrinkingWaterRule **required** `string`: The federal Safe Drinking Water Act (SDWA) rule that was violated.
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

### dfr084
* dfr084 `object`: SIC Object
  * Sources **required** `array`
    * items [dfr085](#dfr085)

### dfr084_Codes
* dfr084_Codes `object`: SIC Codes Object
  * EPASystem **required** `string`: The EPA data system in which permit and facility records are kept. EPA's Facility Registry System (FRS) links all program database records (such as permit IDs and IDs facilities use in reporting to EPA) together. The following list describes the individual data systems that are linked to from the detailed facility report: 
  * SICCode **required** `string`: The Standard Industrial Classification codes applicable to the facility
  * SICDesc **required** `string`: Industries associated to the SIC code.
  * SourceID **required** `string`: Unique Identifier assigned by EPA.

### dfr085
* dfr085 `object`: Sources Object
  * SICCodes **required** `array`
    * items [dfr084_Codes](#dfr084_codes)

### dfr086
* dfr086 `object`: Sanitary Surveys Object
  * Sources `array`
    * items [dfr088](#dfr088)

### dfr088
* dfr088 `object`: Sources Object
  * SanitarySurvey **required** `array`
    * items [dfr089](#dfr089)

### dfr089
* dfr089 `object`: Sanitary Survey Object
  * Agency **required** `string`: Identifies the lead agency (e.g., EPA, State) conducting the inspection. 
  * DataVerification **required** `string`: The sanitary source survey conclusion for data verification operations. Applicable codes: 
  * Distribution **required** `string`: The sanitary source survey conclusion for distribution operations. Applicable codes: 
  * Financial **required** `string`: The sanitary source survey conclusion for financial operations. Applicable codes: 
  * FinishedWaterStorage **required** `string`: The sanitary source survey conclusion for finished water storage operations. Applicable codes: 
  * ManagementOperation **required** `string`: The sanitary source survey conclusion for management operations. Applicable codes: 
  * OperatorCompliance **required** `string`: The sanitary source survey conclusion for operator compliance. Applicable codes: 
  * OtherEvaluation **required** `string`: The sanitary source survey conclusion for other evaluation. Applicable codes: 
  * Pumps **required** `string`: The sanitary source survey conclusion for pump operations. Applicable codes: 
  * Security **required** `string`: The sanitary source survey conclusions for security operations. Applicable codes: 
  * Source **required** `string`: The sanitary source survey conclusion for source operations. Applicable codes: 
  * SourceID **required** `string`: Unique Identifier assigned by EPA.
  * Treatment **required** `string`: The sanitary survey results conclusions for treatment operations. Applicable codes: 
  * VisitDate **required** `string`: Date of the sanitary survey.
  * VisitType **required** `string`: A description of the type of site visit conducted.

### dfr090
* dfr090 `object`: Site Visits Object
  * Sources `array`
    * items [dfr092](#dfr092)

### dfr092
* dfr092 `object`: Sources Object
  * SiteVisit **required** `array`
    * items [dfr093](#dfr093)

### dfr093
* dfr093 `object`: Site Visit Object
  * Agency **required** `string`: Identifies the lead agency (e.g., EPA, State) conducting the inspection. 
  * DataVerification **required** `string`: The sanitary source survey conclusion for data verification operations. Applicable codes: 
  * Distribution **required** `string`: The sanitary source survey conclusion for distribution operations. Applicable codes: 
  * Financial **required** `string`: The sanitary source survey conclusion for financial operations. Applicable codes: 
  * FinishedWaterStorage **required** `string`: The sanitary source survey conclusion for finished water storage operations. Applicable codes: 
  * ManagementOperation **required** `string`: The sanitary source survey conclusion for management operations. Applicable codes: 
  * OperatorCompliance **required** `string`: The sanitary source survey conclusion for operator compliance. Applicable codes: 
  * OtherEvaluation **required** `string`: The sanitary source survey conclusion for other evaluation. Applicable codes: 
  * Pumps **required** `string`: The sanitary source survey conclusion for pump operations. Applicable codes: 
  * Security **required** `string`: The sanitary source survey conclusions for security operations. Applicable codes: 
  * Source **required** `string`: The sanitary source survey conclusion for source operations. Applicable codes: 
  * SourceID **required** `string`: Unique Identifier assigned by EPA.
  * Treatment **required** `string`: The sanitary survey results conclusions for treatment operations. Applicable codes: 
  * VisitDate **required** `string`: Date of the sanitary survey.
  * VisitReason **required** `string`: Reason for the visit to the water system.

### dfr094
* dfr094 `object`: Spatial Metadata Object
  * CalculatedAccuracy **required** `string`: ??
  * CollectionMethod **required** `string`: ??
  * CoordinateSourceSystem **required** `string`: ??
  * CoordinateSourceSystemId **required** `string`: ??
  * Latitude83 **required** `string`: The latitude of the facility or permit holder as maintained in each data system.
  * Longitude83 **required** `string`: The longitude of the facility or permit holder as maintained in each data system
  * ReferencePoint **required** `string`: ??
  * RegistryID **required** `string`: An internal 12-digit Facility Registry Service (FRS) tracking number used to tie all facility data together in EPA regulatory program databases.

### dfr095
* dfr095 `object`: System Extract Dates Object
  * Dates **required** `array`
    * items [dfr096](#dfr096)

### dfr096
* dfr096 `object`: System Extract Dates Dates Object
  * EPASystem **required** `string`: The EPA data system in which permit and facility records are kept. EPA's Facility Registry System (FRS) links all program database records (such as permit IDs and IDs facilities use in reporting to EPA) together. The following list describes the individual data systems that are linked to from the detailed facility report: 
  * SystemExtractDate **required** `string`: The most recent date that the data were extracted from the source data system.

### dfr098
* dfr098 `object`: TRI History Object
  * Sources `array`
    * items [dfr100](#dfr100)

### dfr0_Qtr12Header
* dfr0_Qtr12Header `object`: Header Object
  * Mnth10End **required** `string`: The start date of the tenth month (MM/DD/YYYY).
  * Mnth10Start **required** `string`: The end date of the tenth month (MM/DD/YYYY).
  * Mnth11End **required** `string`: The start date of the eleventh month (MM/DD/YYYY).
  * Mnth11Start **required** `string`: The end date of the eleventh month (MM/DD/YYYY).
  * Mnth12End **required** `string`: The start date of the twelfth month (MM/DD/YYYY).
  * Mnth12Start **required** `string`: The end date of the twelfth month (MM/DD/YYYY).
  * Mnth13End **required** `string`: The start date of the thirteenth month (MM/DD/YYYY).
  * Mnth13Start **required** `string`: The end date of the thirteenth month (MM/DD/YYYY).
  * Mnth14End **required** `string`: The start date of the fourteenth month (MM/DD/YYYY).
  * Mnth14Start **required** `string`: The end date of the fourteenth month (MM/DD/YYYY).
  * Mnth15End **required** `string`: The start date of the fifteenth month (MM/DD/YYYY).
  * Mnth15Start **required** `string`: The end date of the fifteenth month (MM/DD/YYYY).
  * Mnth16End **required** `string`: The start date of the sixteenth month (MM/DD/YYYY).
  * Mnth16Start **required** `string`: The end date of the sixteenth month (MM/DD/YYYY).
  * Mnth17End **required** `string`: The start date of the seventeenth month (MM/DD/YYYY).
  * Mnth17Start **required** `string`: The end date of the seventeenth month (MM/DD/YYYY).
  * Mnth18End **required** `string`: The start date of the eighteenth month (MM/DD/YYYY).
  * Mnth18Start **required** `string`: The end date of the eighteenth month (MM/DD/YYYY).
  * Mnth19End **required** `string`: The start date of the ninteenth month (MM/DD/YYYY).
  * Mnth19Start **required** `string`: The end date of the ninteenth month (MM/DD/YYYY).
  * Mnth1End **required** `string`: The start date of the first month (MM/DD/YYYY).
  * Mnth1Start **required** `string`: The end date of the first month (MM/DD/YYYY).
  * Mnth20End **required** `string`: The start date of the twentieth month (MM/DD/YYYY).
  * Mnth20Start **required** `string`: The end date of the twentieth month (MM/DD/YYYY).
  * Mnth21End **required** `string`: The start date of the twenty-first month (MM/DD/YYYY).
  * Mnth21Start **required** `string`: The end date of the twenty-first month (MM/DD/YYYY).
  * Mnth22End **required** `string`: The start date of the twenty-second month (MM/DD/YYYY).
  * Mnth22Start **required** `string`: The end date of the twenty-second month (MM/DD/YYYY).
  * Mnth23End **required** `string`: The start date of the twenty-third month (MM/DD/YYYY).
  * Mnth23Start **required** `string`: The end date of the twenty-third month (MM/DD/YYYY).
  * Mnth24End **required** `string`: The start date of the twenty-fourth month (MM/DD/YYYY).
  * Mnth24Start **required** `string`: The end date of the twenty-fourth month (MM/DD/YYYY).
  * Mnth25End **required** `string`: The start date of the twenty-fifth month (MM/DD/YYYY).
  * Mnth25Start **required** `string`: The end date of the twenty-fifth month (MM/DD/YYYY).
  * Mnth26End **required** `string`: The start date of the twenty-sixth month (MM/DD/YYYY).
  * Mnth26Start **required** `string`: The end date of the twenty-sixth month (MM/DD/YYYY).
  * Mnth27End **required** `string`: The start date of the twenty-seventh month (MM/DD/YYYY).
  * Mnth27Start **required** `string`: The end date of the twenty-seventh month (MM/DD/YYYY).
  * Mnth28End **required** `string`: The start date of the twenty-eighth month (MM/DD/YYYY).
  * Mnth28Start **required** `string`: The end date of the twenty-eighth month (MM/DD/YYYY).
  * Mnth29End **required** `string`: The start date of the twenty-ninth month (MM/DD/YYYY).
  * Mnth29Start **required** `string`: The end date of the twenty-ninth month (MM/DD/YYYY).
  * Mnth2End **required** `string`: The start date of the second month (MM/DD/YYYY).
  * Mnth2Start **required** `string`: The end date of the second month (MM/DD/YYYY).
  * Mnth30End **required** `string`: The start date of the thirtieth month (MM/DD/YYYY).
  * Mnth30Start **required** `string`: The end date of the thirtieth month (MM/DD/YYYY).
  * Mnth31End **required** `string`: The start date of the thirty-first month (MM/DD/YYYY).
  * Mnth31Start **required** `string`: The end date of the thirty-first month (MM/DD/YYYY).
  * Mnth32End **required** `string`: The start date of the thirty-second month (MM/DD/YYYY).
  * Mnth32Start **required** `string`: The end date of the thirty-second month (MM/DD/YYYY).
  * Mnth33End **required** `string`: The start date of the thirty-third month (MM/DD/YYYY).
  * Mnth33Start **required** `string`: The end date of the thirty-third month (MM/DD/YYYY).
  * Mnth34End **required** `string`: The start date of the thirty-fourth month (MM/DD/YYYY).
  * Mnth34Start **required** `string`: The end date of the thirty-fourth month (MM/DD/YYYY).
  * Mnth35End **required** `string`: The start date of the thirty-fifth month (MM/DD/YYYY).
  * Mnth35Start **required** `string`: The end date of the thirty-fifth month (MM/DD/YYYY).
  * Mnth36End **required** `string`: The start date of the thirty-sixth month (MM/DD/YYYY).
  * Mnth36Start **required** `string`: The end date of the thirty-sixth month (MM/DD/YYYY).
  * Mnth3End **required** `string`: The start date of the third month (MM/DD/YYYY).
  * Mnth3Start **required** `string`: The end date of the third month (MM/DD/YYYY).
  * Mnth4End **required** `string`: The start date of the fourth month (MM/DD/YYYY).
  * Mnth4Start **required** `string`: The end date of the fourth month (MM/DD/YYYY).
  * Mnth5End **required** `string`: The start date of the fifth month (MM/DD/YYYY).
  * Mnth5Start **required** `string`: The end date of the fifth month (MM/DD/YYYY).
  * Mnth6End **required** `string`: The start date of the sixth month (MM/DD/YYYY).
  * Mnth6Start **required** `string`: The end date of the sixth month (MM/DD/YYYY).
  * Mnth7End **required** `string`: The start date of the seventh month (MM/DD/YYYY).
  * Mnth7Start **required** `string`: The end date of the seventh month (MM/DD/YYYY).
  * Mnth8End **required** `string`: The start date of the eighth month (MM/DD/YYYY).
  * Mnth8Start **required** `string`: The end date of the eighth month (MM/DD/YYYY).
  * Mnth9End **required** `string`: The start date of the ninth month (MM/DD/YYYY).
  * Mnth9Start **required** `string`: The end date of the ninth month (MM/DD/YYYY).
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

### dfr0_Qtr12Header39
* dfr0_Qtr12Header39 `object`: Header Object
  * Mnth10End **required** `string`: The start date of the tenth month (MM/DD/YYYY).
  * Mnth10Start **required** `string`: The end date of the tenth month (MM/DD/YYYY).
  * Mnth11End **required** `string`: The start date of the eleventh month (MM/DD/YYYY).
  * Mnth11Start **required** `string`: The end date of the eleventh month (MM/DD/YYYY).
  * Mnth12End **required** `string`: The start date of the twelfth month (MM/DD/YYYY).
  * Mnth12Start **required** `string`: The end date of the twelfth month (MM/DD/YYYY).
  * Mnth13End **required** `string`: The start date of the thirteenth month (MM/DD/YYYY).
  * Mnth13Start **required** `string`: The end date of the thirteenth month (MM/DD/YYYY).
  * Mnth14End **required** `string`: The start date of the fourteenth month (MM/DD/YYYY).
  * Mnth14Start **required** `string`: The end date of the fourteenth month (MM/DD/YYYY).
  * Mnth15End **required** `string`: The start date of the fifteenth month (MM/DD/YYYY).
  * Mnth15Start **required** `string`: The end date of the fifteenth month (MM/DD/YYYY).
  * Mnth16End **required** `string`: The start date of the sixteenth month (MM/DD/YYYY).
  * Mnth16Start **required** `string`: The end date of the sixteenth month (MM/DD/YYYY).
  * Mnth17End **required** `string`: The start date of the seventeenth month (MM/DD/YYYY).
  * Mnth17Start **required** `string`: The end date of the seventeenth month (MM/DD/YYYY).
  * Mnth18End **required** `string`: The start date of the eighteenth month (MM/DD/YYYY).
  * Mnth18Start **required** `string`: The end date of the eighteenth month (MM/DD/YYYY).
  * Mnth19End **required** `string`: The start date of the ninteenth month (MM/DD/YYYY).
  * Mnth19Start **required** `string`: The end date of the ninteenth month (MM/DD/YYYY).
  * Mnth1End **required** `string`: The start date of the first month (MM/DD/YYYY).
  * Mnth1Start **required** `string`: The end date of the first month (MM/DD/YYYY).
  * Mnth20End **required** `string`: The start date of the twentieth month (MM/DD/YYYY).
  * Mnth20Start **required** `string`: The end date of the twentieth month (MM/DD/YYYY).
  * Mnth21End **required** `string`: The start date of the twenty-first month (MM/DD/YYYY).
  * Mnth21Start **required** `string`: The end date of the twenty-first month (MM/DD/YYYY).
  * Mnth22End **required** `string`: The start date of the twenty-second month (MM/DD/YYYY).
  * Mnth22Start **required** `string`: The end date of the twenty-second month (MM/DD/YYYY).
  * Mnth23End **required** `string`: The start date of the twenty-third month (MM/DD/YYYY).
  * Mnth23Start **required** `string`: The end date of the twenty-third month (MM/DD/YYYY).
  * Mnth24End **required** `string`: The start date of the twenty-fourth month (MM/DD/YYYY).
  * Mnth24Start **required** `string`: The end date of the twenty-fourth month (MM/DD/YYYY).
  * Mnth25End **required** `string`: The start date of the twenty-fifth month (MM/DD/YYYY).
  * Mnth25Start **required** `string`: The end date of the twenty-fifth month (MM/DD/YYYY).
  * Mnth26End **required** `string`: The start date of the twenty-sixth month (MM/DD/YYYY).
  * Mnth26Start **required** `string`: The end date of the twenty-sixth month (MM/DD/YYYY).
  * Mnth27End **required** `string`: The start date of the twenty-seventh month (MM/DD/YYYY).
  * Mnth27Start **required** `string`: The end date of the twenty-seventh month (MM/DD/YYYY).
  * Mnth28End **required** `string`: The start date of the twenty-eighth month (MM/DD/YYYY).
  * Mnth28Start **required** `string`: The end date of the twenty-eighth month (MM/DD/YYYY).
  * Mnth29End **required** `string`: The start date of the twenty-ninth month (MM/DD/YYYY).
  * Mnth29Start **required** `string`: The end date of the twenty-ninth month (MM/DD/YYYY).
  * Mnth2End **required** `string`: The start date of the second month (MM/DD/YYYY).
  * Mnth2Start **required** `string`: The end date of the second month (MM/DD/YYYY).
  * Mnth30End **required** `string`: The start date of the thirtieth month (MM/DD/YYYY).
  * Mnth30Start **required** `string`: The end date of the thirtieth month (MM/DD/YYYY).
  * Mnth31End **required** `string`: The start date of the thirty-first month (MM/DD/YYYY).
  * Mnth31Start **required** `string`: The end date of the thirty-first month (MM/DD/YYYY).
  * Mnth32End **required** `string`: The start date of the thirty-second month (MM/DD/YYYY).
  * Mnth32Start **required** `string`: The end date of the thirty-second month (MM/DD/YYYY).
  * Mnth33End **required** `string`: The start date of the thirty-third month (MM/DD/YYYY).
  * Mnth33Start **required** `string`: The end date of the thirty-third month (MM/DD/YYYY).
  * Mnth34End **required** `string`: The start date of the thirty-fourth month (MM/DD/YYYY).
  * Mnth34Start **required** `string`: The end date of the thirty-fourth month (MM/DD/YYYY).
  * Mnth35End **required** `string`: The start date of the thirty-fifth month (MM/DD/YYYY).
  * Mnth35Start **required** `string`: The end date of the thirty-fifth month (MM/DD/YYYY).
  * Mnth36End **required** `string`: The start date of the thirty-sixth month (MM/DD/YYYY).
  * Mnth36Start **required** `string`: The end date of the thirty-sixth month (MM/DD/YYYY).
  * Mnth37End **required** `string`: The start date of the thirty-seventh month (MM/DD/YYYY).
  * Mnth37Start **required** `string`: The end date of the thirty-seventh month (MM/DD/YYYY).
  * Mnth38End **required** `string`: The start date of the thirty-eighth month (MM/DD/YYYY).
  * Mnth38Start **required** `string`: The end date of the thirty-eighth month (MM/DD/YYYY).
  * Mnth39End **required** `string`: The start date of the thirty-ninth month (MM/DD/YYYY).
  * Mnth39Start **required** `string`: The end date of the thirty-ninth month (MM/DD/YYYY).
  * Mnth3End **required** `string`: The start date of the third month (MM/DD/YYYY).
  * Mnth3Start **required** `string`: The end date of the third month (MM/DD/YYYY).
  * Mnth4End **required** `string`: The start date of the fourth month (MM/DD/YYYY).
  * Mnth4Start **required** `string`: The end date of the fourth month (MM/DD/YYYY).
  * Mnth5End **required** `string`: The start date of the fifth month (MM/DD/YYYY).
  * Mnth5Start **required** `string`: The end date of the fifth month (MM/DD/YYYY).
  * Mnth6End **required** `string`: The start date of the sixth month (MM/DD/YYYY).
  * Mnth6Start **required** `string`: The end date of the sixth month (MM/DD/YYYY).
  * Mnth7End **required** `string`: The start date of the seventh month (MM/DD/YYYY).
  * Mnth7Start **required** `string`: The end date of the seventh month (MM/DD/YYYY).
  * Mnth8End **required** `string`: The start date of the eighth month (MM/DD/YYYY).
  * Mnth8Start **required** `string`: The end date of the eighth month (MM/DD/YYYY).
  * Mnth9End **required** `string`: The start date of the ninth month (MM/DD/YYYY).
  * Mnth9Start **required** `string`: The end date of the ninth month (MM/DD/YYYY).
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
  * Mnth10End **required** `string`: The start date of the tenth month (MM/DD/YYYY).
  * Mnth10Start **required** `string`: The end date of the tenth month (MM/DD/YYYY).
  * Mnth11End **required** `string`: The start date of the eleventh month (MM/DD/YYYY).
  * Mnth11Start **required** `string`: The end date of the eleventh month (MM/DD/YYYY).
  * Mnth12End **required** `string`: The start date of the twelfth month (MM/DD/YYYY).
  * Mnth12Start **required** `string`: The end date of the twelfth month (MM/DD/YYYY).
  * Mnth13End **required** `string`: The start date of the thirteenth month (MM/DD/YYYY).
  * Mnth13Start **required** `string`: The end date of the thirteenth month (MM/DD/YYYY).
  * Mnth14End **required** `string`: The start date of the fourteenth month (MM/DD/YYYY).
  * Mnth14Start **required** `string`: The end date of the fourteenth month (MM/DD/YYYY).
  * Mnth15End **required** `string`: The start date of the fifteenth month (MM/DD/YYYY).
  * Mnth15Start **required** `string`: The end date of the fifteenth month (MM/DD/YYYY).
  * Mnth16End **required** `string`: The start date of the sixteenth month (MM/DD/YYYY).
  * Mnth16Start **required** `string`: The end date of the sixteenth month (MM/DD/YYYY).
  * Mnth17End **required** `string`: The start date of the seventeenth month (MM/DD/YYYY).
  * Mnth17Start **required** `string`: The end date of the seventeenth month (MM/DD/YYYY).
  * Mnth18End **required** `string`: The start date of the eighteenth month (MM/DD/YYYY).
  * Mnth18Start **required** `string`: The end date of the eighteenth month (MM/DD/YYYY).
  * Mnth19End **required** `string`: The start date of the ninteenth month (MM/DD/YYYY).
  * Mnth19Start **required** `string`: The end date of the ninteenth month (MM/DD/YYYY).
  * Mnth1End **required** `string`: The start date of the first month (MM/DD/YYYY).
  * Mnth1Start **required** `string`: The end date of the first month (MM/DD/YYYY).
  * Mnth20End **required** `string`: The start date of the twentieth month (MM/DD/YYYY).
  * Mnth20Start **required** `string`: The end date of the twentieth month (MM/DD/YYYY).
  * Mnth21End **required** `string`: The start date of the twenty-first month (MM/DD/YYYY).
  * Mnth21Start **required** `string`: The end date of the twenty-first month (MM/DD/YYYY).
  * Mnth22End **required** `string`: The start date of the twenty-second month (MM/DD/YYYY).
  * Mnth22Start **required** `string`: The end date of the twenty-second month (MM/DD/YYYY).
  * Mnth23End **required** `string`: The start date of the twenty-third month (MM/DD/YYYY).
  * Mnth23Start **required** `string`: The end date of the twenty-third month (MM/DD/YYYY).
  * Mnth24End **required** `string`: The start date of the twenty-fourth month (MM/DD/YYYY).
  * Mnth24Start **required** `string`: The end date of the twenty-fourth month (MM/DD/YYYY).
  * Mnth25End **required** `string`: The start date of the twenty-fifth month (MM/DD/YYYY).
  * Mnth25Start **required** `string`: The end date of the twenty-fifth month (MM/DD/YYYY).
  * Mnth26End **required** `string`: The start date of the twenty-sixth month (MM/DD/YYYY).
  * Mnth26Start **required** `string`: The end date of the twenty-sixth month (MM/DD/YYYY).
  * Mnth27End **required** `string`: The start date of the twenty-seventh month (MM/DD/YYYY).
  * Mnth27Start **required** `string`: The end date of the twenty-seventh month (MM/DD/YYYY).
  * Mnth28End **required** `string`: The start date of the twenty-eighth month (MM/DD/YYYY).
  * Mnth28Start **required** `string`: The end date of the twenty-eighth month (MM/DD/YYYY).
  * Mnth29End **required** `string`: The start date of the twenty-ninth month (MM/DD/YYYY).
  * Mnth29Start **required** `string`: The end date of the twenty-ninth month (MM/DD/YYYY).
  * Mnth2End **required** `string`: The start date of the second month (MM/DD/YYYY).
  * Mnth2Start **required** `string`: The end date of the second month (MM/DD/YYYY).
  * Mnth30End **required** `string`: The start date of the thirtieth month (MM/DD/YYYY).
  * Mnth30Start **required** `string`: The end date of the thirtieth month (MM/DD/YYYY).
  * Mnth31End **required** `string`: The start date of the thirty-first month (MM/DD/YYYY).
  * Mnth31Start **required** `string`: The end date of the thirty-first month (MM/DD/YYYY).
  * Mnth32End **required** `string`: The start date of the thirty-second month (MM/DD/YYYY).
  * Mnth32Start **required** `string`: The end date of the thirty-second month (MM/DD/YYYY).
  * Mnth33End **required** `string`: The start date of the thirty-third month (MM/DD/YYYY).
  * Mnth33Start **required** `string`: The end date of the thirty-third month (MM/DD/YYYY).
  * Mnth34End **required** `string`: The start date of the thirty-fourth month (MM/DD/YYYY).
  * Mnth34Start **required** `string`: The end date of the thirty-fourth month (MM/DD/YYYY).
  * Mnth35End **required** `string`: The start date of the thirty-fifth month (MM/DD/YYYY).
  * Mnth35Start **required** `string`: The end date of the thirty-fifth month (MM/DD/YYYY).
  * Mnth36End **required** `string`: The start date of the thirty-sixth month (MM/DD/YYYY).
  * Mnth36Start **required** `string`: The end date of the thirty-sixth month (MM/DD/YYYY).
  * Mnth37End **required** `string`: The start date of the thirty-seventh month (MM/DD/YYYY).
  * Mnth37Start **required** `string`: The end date of the thirty-seventh month (MM/DD/YYYY).
  * Mnth38End **required** `string`: The start date of the thirty-eighth month (MM/DD/YYYY).
  * Mnth38Start **required** `string`: The end date of the thirty-eighth month (MM/DD/YYYY).
  * Mnth39End **required** `string`: The start date of the thirty-ninth month (MM/DD/YYYY).
  * Mnth39Start **required** `string`: The end date of the thirty-ninth month (MM/DD/YYYY).
  * Mnth3End **required** `string`: The start date of the third month (MM/DD/YYYY).
  * Mnth3Start **required** `string`: The end date of the third month (MM/DD/YYYY).
  * Mnth4End **required** `string`: The start date of the fourth month (MM/DD/YYYY).
  * Mnth4Start **required** `string`: The end date of the fourth month (MM/DD/YYYY).
  * Mnth5End **required** `string`: The start date of the fifth month (MM/DD/YYYY).
  * Mnth5Start **required** `string`: The end date of the fifth month (MM/DD/YYYY).
  * Mnth6End **required** `string`: The start date of the sixth month (MM/DD/YYYY).
  * Mnth6Start **required** `string`: The end date of the sixth month (MM/DD/YYYY).
  * Mnth7End **required** `string`: The start date of the seventh month (MM/DD/YYYY).
  * Mnth7Start **required** `string`: The end date of the seventh month (MM/DD/YYYY).
  * Mnth8End **required** `string`: The start date of the eighth month (MM/DD/YYYY).
  * Mnth8Start **required** `string`: The end date of the eighth month (MM/DD/YYYY).
  * Mnth9End **required** `string`: The start date of the ninth month (MM/DD/YYYY).
  * Mnth9Start **required** `string`: The end date of the ninth month (MM/DD/YYYY).
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

### dfr0_get_aws_docs.Results
* dfr0_get_aws_docs.Results `object`: Results Object
  * Message **required** `string`: Field to record messages (typically performance-related) about packet processing

### dfr0_get_cwa_eff_alr_exp.Results
* dfr0_get_cwa_eff_alr_exp.Results `object`: Results Object
  * CWAEffluentALRExceedencesEXP [dfr035_EXP](#dfr035_exp)
  * Message **required** `string`: Field to record messages (typically performance-related) about packet processing

### dfr0_get_cwa_eff_compliance_exp.Results
* dfr0_get_cwa_eff_compliance_exp.Results `object`: Results Object
  * CWAEffluentComplianceEXP [dfr038_EXP](#dfr038_exp)
  * Message **required** `string`: Field to record messages (typically performance-related) about packet processing

### dfr0_get_d80d90s_details.D80D90sDetails
* dfr0_get_d80d90s_details.D80D90sDetails `object`: D80D90sDetails Object
  * Sources **required** `array`
    * items [dfr0_get_d80d90s_details.D80D90sDetails.Sources](#dfr0_get_d80d90s_details.d80d90sdetails.sources)

### dfr0_get_d80d90s_details.D80D90sDetails.Sources
* dfr0_get_d80d90s_details.D80D90sDetails.Sources `object`: Sources Object
  * DaysLate **required** `string`: The number of days the DMR value is late, as generated in ICIS-NPDES
  * DmrDueDate **required** `string`: The due date for the DMR to the NPDES program authority (e.g., EPA or state environmental agency) (MM/DD/YYYY).�
  * LimitBeginDate **required** `string`: The date on which a limit becomes in effect for a particular parameter in a limit set
  * LimitEndDate **required** `string`: The date on which a limit stops being in effect for a particular parameter in a limit set
  * LimitId **required** `string`: The unique identifier for a limit parameter record
  * LimitSetName **required** `string`: The name associated with a group of parameter permit limits.
  * MissingLate **required** `string`: Indicates if the permitted facility submitted missing or late DMRS to the NPDES permitting authority within the past three years.
  * MonitoringLocationCode **required** `string`: The code that the monitoring location at which the monitoring requirement (and effluent limit if limited) applies. One parameter may have several monitoring location codes pertaining to the same permitted feature
  * MonitoringLocationDesc **required** `string`: The name of the monitoring location at which the monitoring requirement (and effluent limit if limited) applies
  * MonitoringPeriodEndDate **required** `string`: The date that the monitoring period for the values covered by the DMR Form ends
  * NPDESId **required** `string`: A unique ID assigned for each record/permit/site/facility within ICIS-NPDES.
  * NodiCode **required** `string`: The no data indicator code for DMRs where no measurements are reported.
  * NodiDesc **required** `string`: The description of the NODI code explaining why no data are reported (e.g., no discharge, not quantifiable, conditional monitoring).
  * NodiValidationFlag **required** `string`: Indicates whether the NODI is considered valid (Y) or invalid (N) for compliance determination purposes.
  * NpdesViolationId **required** `string`: The unique identifier for the violation related to a particular site.
  * ParameterCode **required** `string`: The unique 5 digit numeric code identifying the parameter. If the code is less than 5 digits in the .CSV, append zeros to the beginning of the number (e.g., 100 is equivalent to 00100)
  * ParameterDesc **required** `string`: The pollutant name and form (e.g., dissolved, suspended) associated with the parameter code
  * PermFeatureNmbr **required** `string`: A three-character code in ICIS-NPDES that identifies the point of discharge (e.g., outfall) for a facility. A NPDES permit may have multiple points of discharge. If the code is less than three characters in the .CSV, append zeros to the beginning of the number (e.g., 1 is equivalent to 001)
  * RncDetectionCode **required** `string`: The reportable noncompliance detection code.
  * RncDetectionDate **required** `string`: The date that RNC was detected. It can be entered manually or automatically. In cases in which RNC is detected by ICIS-NPDES, the detection date entered will vary according to the type of violation detected (MM/DD/YYY).
  * RncDetectionDesc **required** `string`: The reportable noncompliance detection description.
  * RncResolutionCode **required** `string`: The reportable noncompliance resolution code.
  * RncResolutionDate **required** `string`: The reportable noncompliance resolution date.
  * RncResolutionDesc **required** `string`: The reportable noncompliance resolution description.
  * StatisticalBaseMonthlyAvg **required** `string`
  * ValueReceivedDate **required** `string`: The date the DMR value was received by the regulatory authority
  * ValueTypeCode **required** `string`: The indication of the limit value type (e.g., Quantity 1, Concentration 2)
  * VersionNmbr **required** `string`: The version of the permit when a modification or reissuance is applied to the permit. Version = 0 indicates the original permit issuance
  * ViolationCode **required** `string`: The code identifying which type of Violation has occurred (e.g., D80 = Required Monitoring DMR Value Non-Receipt, E90 = Effluent Violation, C20 = Schedule Event Achieved Late)

### dfr0_get_d80d90s_details.Results
* dfr0_get_d80d90s_details.Results `object`: Results Object
  * D80D90sDetails **required** [dfr0_get_d80d90s_details.D80D90sDetails](#dfr0_get_d80d90s_details.d80d90sdetails)
  * Message **required** `string`: Field to record messages (typically performance-related) about packet processing

### dfr0_get_ejscreen_indexes.Results
* dfr0_get_ejscreen_indexes.Results `object`: Results Object
  * EJScreenIndexes [dfr018_EJScreenIndexes](#dfr018_ejscreenindexes)
  * Message **required** `string`: Field to record messages (typically performance-related) about packet processing

### dfr100
* dfr100 `object`: Sources Object
  * ReleaseYear `array`
    * items [dfr101](#dfr101)

### dfr101
* dfr101 `object`: Release Year Object
  * OffSiteTransfersPOTWS **required** `string`: The total amount, in pounds per year, transferred off site to Publicly Owned Treatment Works (POTWs).
  * ReleasesToLand **required** `string`: Total releases to land on-site (includes landfills), in pounds per year.
  * SourceID **required** `string`: Unique Identifier assigned by EPA.
  * SurfaceWaterDischarges **required** `string`: The total direct discharges to receiving streams or water bodies, in pounds per year.
  * TotalAirEmissions **required** `string`: The total fugitive (non-point air emissions) and stack or point air emissions, in pounds per year.
  * TotalOffSiteReleases **required** `string`: The total amount, in pounds per year, transferred off site to Publicly Owned Treatment Works (POTWs) and other off-site locations.
  * TotalOnSiteReleases **required** `string`: Total pounds per year released for Air Emissions, Surface Water Discharges, Underground Injections and Releases to Land.
  * TotalReleasesTransfers **required** `string`: Grand total for Air Emissions, Surface Water Discharges, Underground Injections, Releases to Land, On-Site Releases and Off-Site Transfers in pounds per year for all types of chemicals.
  * UndergroundInjections **required** `string`: The total underground injections to wells on-site, in pounds per year.
  * Year **required** `string`: The calendar year of a time dimension (reporting table) record.

### dfr102
* dfr102 `object`: TRI Releases Object
  * Chemicals `array`
    * items [dfr103](#dfr103)
  * Header `array`
    * items [dfr104](#dfr104)

### dfr103
* dfr103 `object`: Chemicals Object
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

### dfr104
* dfr104 `object`: Header Object
  * Year1 **required** `string`: The calendar year during which TRI releases and transfers occurred.
  * Year2 **required** `string`: The calendar year during which TRI releases and transfers occurred.
  * Year3 **required** `string`: The calendar year during which TRI releases and transfers occurred.
  * Year4 **required** `string`: The calendar year during which TRI releases and transfers occurred.
  * Year5 **required** `string`: The calendar year during which TRI releases and transfers occurred.
  * Year6 **required** `string`: The calendar year during which TRI releases and transfers occurred.
  * Year7 **required** `string`: The calendar year during which TRI releases and transfers occurred.
  * Year8 **required** `string`: The calendar year during which TRI releases and transfers occurred.
  * Year9 **required** `string`: The most recent calendar year during which TRI releases and transfer occurred.

### dfr105
* dfr105 `object`: Tribes Object
  * AreaName **required** `string`: Displays Clean Air Act stationary source program subpart designation, Clean Water Act-NPDES permit component(s), and/or other Resource Conservation and Recovery Act designations, if any.
  * DistanceToArea **required** `string`: Air Facility System (AFS) ID.
  * EPAId **required** `string`: This is the EPA Identifier for substances.
  * TribeName **required** `string`: Air Facility System (AFS) ID.

### dfr106
* dfr106 `object`: Violations Enforcement Actions Object
  * Sources `array`
    * items [dfr108](#dfr108)

### dfr108
* dfr108 `object`: Sources Object
  * Violations **required** `array`
    * items [dfr110](#dfr110)

### dfr109
* dfr109 `object`: Enforcement Actions Object
  * Agency **required** `string`: Identifies the lead agency (e.g., EPA, State) conducting the inspection. 
  * EnforcementActionTypeDesc **required** `string`: Text description of type of enforcement action.
  * EnforcementDate **required** `string`: Date of Enforcement.
  * EnforcementId **required** `string`: The internal numerick key identifier used to inuqiely identify enforcement case activities.
  * EnforcementType **required** `string`: A text description of the Enforcement Action type.

### dfr110
* dfr110 `object`: Violations Object
  * CompliancePeriodBeginDate **required** `string`: The beginning date of the time period during which a violation took place. For some violations this period corresponds to a regular water quality monitoring period, such as a month or quarter; in other cases it may initially be open-ended, and remain that way until the violation is resolved, i.e. until EPA or the state files a resolving enforcement action to indicate that either the system has returned to compliance or no further action is necessary.
  * CompliancePeriodEndDate **required** `string`: The end date of the time period during which a violation took place. For some violations this period corresponds to a regular water quality monitoring period, such as a month or quarter; in other cases it may initially be open-ended, and remain that way until the violation is resolved, i.e. until EPA or the state files a resolving enforcement action to indicate that either the system has returned to compliance or no further action is necessary.
  * ContaminantName **required** `string`: City
  * EnforcementActions **required** `array`
    * items [dfr109](#dfr109)
  * FederalMCL **required** `string`: Maximum contaminant levels (MCLs) or maximum residual disinfectant levels (MRDLs), which specify the highest concentrations of contaminants or disinfectants, respectively, allowed in drinking water; or of treatment technique (TT) rules, which specify required processes intended to reduce the amounts of contaminants in drinking water.
  * FederalRule **required** `string`: ???
  * ResolvedDate **required** `string`: The resolved date of the drinking water violation (MM/DD/YYYY)
  * SourceID **required** `string`: Unique Identifier assigned by EPA.
  * StateMCL **required** `string`: County
  * Status **required** `string`: Describes the status of the drinking water violation. Violation statuses include:
  * ViolationCategoryCode **required** `string`: Categories of violations that may be reported
  * ViolationCategoryDesc **required** `string`: A description of the violation category.
  * ViolationID **required** `string`: An identifer from SDWA that uniquely identifies the violation.
  * ViolationMeasure **required** `string`: A numeric value that represents the analytical result of a contaminant that exceeded the Maximum Contaminant Level (MCL) for that contaminant.

### dfr111
* dfr111 `object`: Water Quality Object
  * Sources `array`
    * items [dfr112](#dfr112)

### dfr111_Details
* dfr111_Details `object`: Water Quality Details
  * Sources `array`
    * items [dfr111_Details.Sources](#dfr111_details.sources)

### dfr111_Details.Sources
* dfr111_Details.Sources `object`: Sources Object
  * AssessedOr303dFlg **required** `string`: Denotes facilities that discharge into an impaired water body for which a plan has not yet been developed (category 5 water body) and facilities that discharge to an impaired water body for which the state has developed a plan to return the water to its designated uses under the Total Maximum Daily Loads (TMDL) program (category 4 water body).
  * AssessmentUnitEPACategory **required** `string`: The water quality category under which the water body�or water segment is classified.�Additional information: https://www.epa.gov/wqs-tech/supplemental-module-listing-impaired-waters-and-developing-tmdls
  * AttainsAquaticLifeUseFlg **required** `string`: Displays "Y" if the waterbody in which the facility resides is designated for aquatic life use. The data are from the ATTAINS database.
  * AttainsCauseGroups **required** `string`: Lists all groups of pollutants or stressors that are causing impairment in the assessed waterbody. The data are from the ATTAINS database.
  * AttainsExceptnlUseFlg **required** `string`: Displays "Y" if the waterbody in which the facility resides is designated for exceptional use. The data are from the ATTAINS database.
  * AttainsPossiblePollutants **required** `string`: Lists all groups of pollutants or stressors that are causing impairment in the assessed waterbody, as indicated in ATTAINS.
  * AttainsRecreationUseFlg **required** `string`: Displays "Y" if the waterbody in which the facility resides is designated for recreational use. The data are from the ATTAINS database.
  * AttainsShelffishUseFlg **required** `string`: Indicates if the waterbody in which the facility resides is designated for shellfish use.
  * AttainsStateCauses **required** `string`: Lists all pollutants or stressors that are causing impairment in the assessed waterbody. The data are from the ATTAINS database.
  * CycleYear **required** `string`: The Assessment, Total Maximum Daily Load (TMDL) Tracking and Implementation System (ATTAINS) reporting year.
  * GNISName **required** `string`: The name of the waterbody in which the facility is located near or is permitted to discharge directly.
  * ImpairedWatersFlg **required** `string`: Indicates if the facility is porentially discharging to impaired waters.
  * ReachCode **required** `string`: A nationally unique and permanent 14-digit identifier for the waterbody, assigned by the U.S. Geological Survey.
  * SourceID **required** `string`: Unique Identifier assigned by EPA.
  * WBD12 **required** `string`: The 12-digit Hydrologic Unit Code (HUC) of the watershed in which the facility resides, based on the USGS Watershed Boundary Dataset (WBD).
  * WBD12Name **required** `string`: The name of the watershed in which the facility resides.

### dfr112
* dfr112 `object`: Sources Object
  * AttainsAquaticLifeUseFlg **required** `string`: Displays "Y" if the waterbody in which the facility resides is designated for aquatic life use. The data are from the ATTAINS database.
  * AttainsAuCategory **required** `string`: The impairment class or category of the waterbody in which the facility is permitted to discharge directly. The data are from the ATTAINS database:
  * AttainsCauseGroups **required** `string`: Lists all groups of pollutants or stressors that are causing impairment in the assessed waterbody. The data are from the ATTAINS database.
  * AttainsExceptnlUseFlg **required** `string`: Displays "Y" if the waterbody in which the facility resides is designated for exceptional use. The data are from the ATTAINS database.
  * AttainsRecreationUseFlg **required** `string`: Displays "Y" if the waterbody in which the facility resides is designated for recreational use. The data are from the ATTAINS database.
  * AttainsShellfishUseFlg **required** `string`: Displays "Y" if the waterbody in which the facility resides is designated for shellfish use. The data are from the ATTAINS database.
  * BeachCloseLast2yrsFlg **required** `string`: Displays "Y" if the facility is located on or near a waterbody with a beach closure within the last two years.
  * BeachCloseLastYearFlg **required** `string`: Displays "Y" if the facility is located on or near a waterbody with a beach closure within the last year.
  * CSS **required** `string`: Indicates whether or not the facility has a combined sewer system.
  * CWPCsoOutfalls **required** `string`: The number of discharge outfalls at points prior to the treatment plant.
  * EPASystem **required** `string`: The EPA data system in which permit and facility records are kept. EPA's Facility Registry System (FRS) links all program database records (such as permit IDs and IDs facilities use in reporting to EPA) together. The following list describes the individual data systems that are linked to from the detailed facility report: 
  * EsaAquaticSpeciesFlg **required** `string`: Indicates if the watershed contains Endangered Species Act (ESA)-listed aquatic species.
  * HUC8 **required** `string`: The 8-digit Hydrologic Unit Code (HUC) of the watershed in which the facility resides.�Cataloguing unit (fourth-level, 8-digit HUC)
  * HUC8Name **required** `string`: The name of the watershed in which the facility resides.
  * ImpairedWaters **required** `string`: Field indicates if the permit discharges directly into category 4 or 5 impaired waters.
  * RadGnisName **required** `string`: The name of the waterbody from the Geographic Names Information System (GNIS) database in which the facility is permitted to discharge directly.
  * RadReachcode **required** `string`: A nationally unique and permanent identifier for the waterbody, assigned by the US Geological Survey.
  * ReceivingWaters **required** `string`: The name of the river, lake, stream, or estuary that receives runoff from the facility.
  * SourceID **required** `string`: Unique Identifier assigned by EPA.
  * WBD12 **required** `string`: The 12-digit Hydrologic Unit Code (HUC) of the watershed in which the facility resides, based on the USGS Watershed Boundary Dataset (WBD).
  * WBD12Name **required** `string`: The name of the watershed in which the facility resides.

### dfr114_Results
* dfr114_Results `object`: Results Object
  * EnforcementComplianceSummaries [dfr062](#dfr062)
  * Message **required** `string`: Field to record messages (typically performance-related) about packet processing

### dfr115
* dfr115 `object`: Results Object
  * Message **required** `string`: Field to record messages (typically performance-related) about packet processing
  * SystemExtractDates [dfr095](#dfr095)

### dfr116_Results
* dfr116_Results `object`: Results Object
  * FormalActions [dfr064](#dfr064)
  * Message **required** `string`: Field to record messages (typically performance-related) about packet processing

### dfr117_Results
* dfr117_Results `object`: Results Object
  * ICISFormalActions [dfr066](#dfr066)
  * Message **required** `string`: Field to record messages (typically performance-related) about packet processing

### dfr118_Results
* dfr118_Results `object`: Results Object
  * InspectionEnforcementSummary [dfr068](#dfr068)
  * Message **required** `string`: Field to record messages (typically performance-related) about packet processing

### dfr119_Results
* dfr119_Results `object`: Results Object
  * MapOutput [dfr073](#dfr073)
  * Message **required** `string`: Field to record messages (typically performance-related) about packet processing

### dfr120_Results
* dfr120_Results `object`: Results Object
  * Message **required** `string`: Field to record messages (typically performance-related) about packet processing
  * NAICS [dfr018_NAICS](#dfr018_naics)

### dfr122_Results
* dfr122_Results `object`: Results Object
  * Message **required** `string`: Field to record messages (typically performance-related) about packet processing
  * Notices [dfr076](#dfr076)

### dfr123_Results
* dfr123_Results `object`: Results Object
  * Message **required** `string`: Field to record messages (typically performance-related) about packet processing
  * Permits `array`
    * items [dfr018_Permits](#dfr018_permits)
  * Reports [dfr018_Reports](#dfr018_reports)

### dfr124_Results
* dfr124_Results `object`: Results Object
  * Message **required** `string`: Field to record messages (typically performance-related) about packet processing
  * RCRACompliance [dfr078](#dfr078)

### dfr125_Results
* dfr125_Results `object`: Results Object
  * LeadAndCopperRule5Yr **required** [dfr070](#dfr070)
  * Message **required** `string`: Field to record messages (typically performance-related) about packet processing

### dfr126_Results
* dfr126_Results `object`: Results Object
  * Message **required** `string`: Field to record messages (typically performance-related) about packet processing
  * SanitarySurveys [dfr086](#dfr086)

### dfr127_Results
* dfr127_Results `object`: Results Object
  * Message **required** `string`: Field to record messages (typically performance-related) about packet processing
  * SiteVisits [dfr090](#dfr090)

### dfr128_Results
* dfr128_Results `object`: Results Object
  * Message **required** `string`: Field to record messages (typically performance-related) about packet processing
  * ViolationsEnforcementActions [dfr106](#dfr106)

### dfr129_Results
* dfr129_Results `object`: Results Object
  * Message **required** `string`: Field to record messages (typically performance-related) about packet processing
  * SDWISCompliance [dfr081](#dfr081)

### dfr130_Results
* dfr130_Results `object`: Results Object
  * Message **required** `string`: Field to record messages (typically performance-related) about packet processing
  * SIC [dfr084](#dfr084)

### dfr131_Results
* dfr131_Results `object`: Results Object
  * Message **required** `string`: Field to record messages (typically performance-related) about packet processing
  * SpatialMetadata [dfr094](#dfr094)

### dfr132_Results
* dfr132_Results `object`: Results Object
  * Message **required** `string`: Field to record messages (typically performance-related) about packet processing
  * TRIHistory [dfr098](#dfr098)

### dfr133_Results
* dfr133_Results `object`: Results Object
  * Message **required** `string`: Field to record messages (typically performance-related) about packet processing
  * TRIReleases [dfr102](#dfr102)

### dfr134_Results
* dfr134_Results `object`: Results Object
  * Message **required** `string`: Field to record messages (typically performance-related) about packet processing
  * Tribes `array`
    * items [dfr105](#dfr105)

### dfr135_Results
* dfr135_Results `object`: Results Object
  * Message **required** `string`: Field to record messages (typically performance-related) about packet processing
  * WaterQuality [dfr111](#dfr111)

### dfr136_Results
* dfr136_Results `object`: Results Object
  * Message **required** `string`: Field to record messages (typically performance-related) about packet processing
  * WaterQualityDetails [dfr111_Details](#dfr111_details)


