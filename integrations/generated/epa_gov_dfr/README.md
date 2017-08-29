# @datafire/epa_gov_dfr

Client library for U.S. EPA Enforcement and Compliance History Online (ECHO) - Detailed Facility Report (DFR)

## Installation and Usage
```bash
npm install --save datafire @datafire/epa_gov_dfr
```

```js
let datafire = require('datafire');
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

#### Parameters
* output (string) - Output Format Flag.  Enter one of the following keywords:
* p_id (string) **required** - Either the EPA Facility Registry System's REGISTRY_ID for a facility or the facility identifier from the following EPA Systems: RCRAINFO (HANDLER_ID), AFS (SCSC), ICIS NPDES (NPDES_ID), or SDWIS (PWS_ID).
* callback (string) - JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.

### dfr_rest_services.get_air_quality.get
This procedure obtains data for Air Quality in the Environmental Conditions Section of the DFR.


```js
epa_gov_dfr.dfr_rest_services.get_air_quality.get({
  "p_id": ""
}, context)
```

#### Parameters
* output (string) - Output Format Flag.  Enter one of the following keywords:
* p_id (string) **required** - Either the EPA Facility Registry System's REGISTRY_ID for a facility or the facility identifier from the following EPA Systems: RCRAINFO (HANDLER_ID), AFS (SCSC), ICIS NPDES (NPDES_ID), or SDWIS (PWS_ID).
* callback (string) - JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.

### dfr_rest_services.get_compliance_history.get
This procedure obtains data for the Compliance Monitoring History (5 years) in the Enforcement and Compliance Section of the Detailed Facility report.


```js
epa_gov_dfr.dfr_rest_services.get_compliance_history.get({
  "p_id": ""
}, context)
```

#### Parameters
* output (string) - Output Format Flag.  Enter one of the following keywords:
* p_id (string) **required** - Either the EPA Facility Registry System's REGISTRY_ID for a facility or the facility identifier from the following EPA Systems: RCRAINFO (HANDLER_ID), AFS (SCSC), ICIS NPDES (NPDES_ID), or SDWIS (PWS_ID).
* callback (string) - JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.

### dfr_rest_services.get_compliance_summary.get
This procedure obtains data for Compliance Summary Data in the Enforcement and Compliance Section of the Detailed Facility report.


```js
epa_gov_dfr.dfr_rest_services.get_compliance_summary.get({
  "p_id": ""
}, context)
```

#### Parameters
* output (string) - Output Format Flag.  Enter one of the following keywords:
* p_id (string) **required** - Either the EPA Facility Registry System's REGISTRY_ID for a facility or the facility identifier from the following EPA Systems: RCRAINFO (HANDLER_ID), AFS (SCSC), ICIS NPDES (NPDES_ID), or SDWIS (PWS_ID).
* callback (string) - JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.

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

#### Parameters
* output (string) - Output Format Flag.  Enter one of the following keywords:
* p_id (string) **required** - Either the EPA Facility Registry System's REGISTRY_ID for a facility or the facility identifier from the following EPA Systems: RCRAINFO (HANDLER_ID), AFS (SCSC), ICIS NPDES (NPDES_ID), or SDWIS (PWS_ID).
* callback (string) - JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.

### dfr_rest_services.get_cwa_cs_compliance.get
This procedure obtains data for the CWA Compliance Schedule Violations section of the DFR.


```js
epa_gov_dfr.dfr_rest_services.get_cwa_cs_compliance.get({
  "p_id": ""
}, context)
```

#### Parameters
* output (string) - Output Format Flag.  Enter one of the following keywords:
* p_id (string) **required** - Either the EPA Facility Registry System's REGISTRY_ID for a facility or the facility identifier from the following EPA Systems: RCRAINFO (HANDLER_ID), AFS (SCSC), ICIS NPDES (NPDES_ID), or SDWIS (PWS_ID).
* callback (string) - JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.

### dfr_rest_services.get_cwa_eff_alr.get
This procedure obtains data for the CWA Pollutant Discharge section located in the Three Year Compliance Status by Quarter portion of the DFR.


```js
epa_gov_dfr.dfr_rest_services.get_cwa_eff_alr.get({
  "p_id": ""
}, context)
```

#### Parameters
* output (string) - Output Format Flag.  Enter one of the following keywords:
* p_id (string) **required** - Either the EPA Facility Registry System's REGISTRY_ID for a facility or the facility identifier from the following EPA Systems: RCRAINFO (HANDLER_ID), AFS (SCSC), ICIS NPDES (NPDES_ID), or SDWIS (PWS_ID).
* callback (string) - JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.

### dfr_rest_services.get_cwa_eff_compliance.get
This procedure obtains data for the CWA Effluent Compliance section on the DFR.  


```js
epa_gov_dfr.dfr_rest_services.get_cwa_eff_compliance.get({
  "p_id": ""
}, context)
```

#### Parameters
* output (string) - Output Format Flag.  Enter one of the following keywords:
* p_id (string) **required** - Either the EPA Facility Registry System's REGISTRY_ID for a facility or the facility identifier from the following EPA Systems: RCRAINFO (HANDLER_ID), AFS (SCSC), ICIS NPDES (NPDES_ID), or SDWIS (PWS_ID).
* callback (string) - JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.

### dfr_rest_services.get_cwa_ps_compliance.get
This procedure obtains data for the CWA Permit Schedule Violations section of the DFR.


```js
epa_gov_dfr.dfr_rest_services.get_cwa_ps_compliance.get({
  "p_id": ""
}, context)
```

#### Parameters
* output (string) - Output Format Flag.  Enter one of the following keywords:
* p_id (string) **required** - Either the EPA Facility Registry System's REGISTRY_ID for a facility or the facility identifier from the following EPA Systems: RCRAINFO (HANDLER_ID), AFS (SCSC), ICIS NPDES (NPDES_ID), or SDWIS (PWS_ID).
* callback (string) - JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.

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

#### Parameters
* output (string) - Output Format Flag.  Enter one of the following keywords:
* p_id (string) **required** - Either the EPA Facility Registry System's REGISTRY_ID for a facility or the facility identifier from the following EPA Systems: RCRAINFO (HANDLER_ID), AFS (SCSC), ICIS NPDES (NPDES_ID), or SDWIS (PWS_ID).
* callback (string) - JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.

### dfr_rest_services.get_cwa_se_compliance.get
This procedure obtains data for the CWA Single Event Violations section of the DFR.


```js
epa_gov_dfr.dfr_rest_services.get_cwa_se_compliance.get({
  "p_id": ""
}, context)
```

#### Parameters
* output (string) - Output Format Flag.  Enter one of the following keywords:
* p_id (string) **required** - Either the EPA Facility Registry System's REGISTRY_ID for a facility or the facility identifier from the following EPA Systems: RCRAINFO (HANDLER_ID), AFS (SCSC), ICIS NPDES (NPDES_ID), or SDWIS (PWS_ID).
* callback (string) - JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.

### dfr_rest_services.get_demographics.get
Returns a complex object with Demographics from the 2010 Census and 2010 American Community Survey based on a 3 mile radius around the facility spatial coordinates.


```js
epa_gov_dfr.dfr_rest_services.get_demographics.get({
  "p_id": ""
}, context)
```

#### Parameters
* output (string) - Output Format Flag.  Enter one of the following keywords:
* p_id (string) **required** - Either the EPA Facility Registry System's REGISTRY_ID for a facility or the facility identifier from the following EPA Systems: RCRAINFO (HANDLER_ID), AFS (SCSC), ICIS NPDES (NPDES_ID), or SDWIS (PWS_ID).
* p_radius (string)
* callback (string) - JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.

### dfr_rest_services.get_dfr.get
This procedure is the overall service for the Detailed Facility Report. It returns all of the data displayed in the DFR web report by invoking individual procedures that each return a targeted portion of the DFR.


```js
epa_gov_dfr.dfr_rest_services.get_dfr.get({
  "p_id": ""
}, context)
```

#### Parameters
* output (string) - Output Format Flag.  Enter one of the following keywords:
* p_id (string) **required** - Either the EPA Facility Registry System's REGISTRY_ID for a facility or the facility identifier from the following EPA Systems: RCRAINFO (HANDLER_ID), AFS (SCSC), ICIS NPDES (NPDES_ID), or SDWIS (PWS_ID).
* p_system (string) - System Acronym Filter.  Enter a single system acronym to filter results.
* callback (string) - JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.

### dfr_rest_services.get_enforcement_summary.get
This procedure obtains data for the Enforcement and Compliance Summary in the Facility Summary section of the Detailed Facility Report.


```js
epa_gov_dfr.dfr_rest_services.get_enforcement_summary.get({
  "p_id": ""
}, context)
```

#### Parameters
* output (string) - Output Format Flag.  Enter one of the following keywords:
* p_id (string) **required** - Either the EPA Facility Registry System's REGISTRY_ID for a facility or the facility identifier from the following EPA Systems: RCRAINFO (HANDLER_ID), AFS (SCSC), ICIS NPDES (NPDES_ID), or SDWIS (PWS_ID).
* callback (string) - JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.

### dfr_rest_services.get_formal_actions.get
This procedure obtains data for the Formal Enforcement Actions section of the DFR.


```js
epa_gov_dfr.dfr_rest_services.get_formal_actions.get({
  "p_id": ""
}, context)
```

#### Parameters
* output (string) - Output Format Flag.  Enter one of the following keywords:
* p_id (string) **required** - Either the EPA Facility Registry System's REGISTRY_ID for a facility or the facility identifier from the following EPA Systems: RCRAINFO (HANDLER_ID), AFS (SCSC), ICIS NPDES (NPDES_ID), or SDWIS (PWS_ID).
* callback (string) - JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.

### dfr_rest_services.get_icis_formal_actions.get
This procedure obtains data for the Integrated Compliance Information System, Formal Enforcement Actions section of the DFR. 


```js
epa_gov_dfr.dfr_rest_services.get_icis_formal_actions.get({
  "p_id": ""
}, context)
```

#### Parameters
* output (string) - Output Format Flag.  Enter one of the following keywords:
* p_id (string) **required** - Either the EPA Facility Registry System's REGISTRY_ID for a facility or the facility identifier from the following EPA Systems: RCRAINFO (HANDLER_ID), AFS (SCSC), ICIS NPDES (NPDES_ID), or SDWIS (PWS_ID).
* callback (string) - JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.

### dfr_rest_services.get_inspections.get
This procedure obtains data for Enforcement and Compliance Summary Section of the Detailed Facility report.


```js
epa_gov_dfr.dfr_rest_services.get_inspections.get({
  "p_id": ""
}, context)
```

#### Parameters
* output (string) - Output Format Flag.  Enter one of the following keywords:
* p_id (string) **required** - Either the EPA Facility Registry System's REGISTRY_ID for a facility or the facility identifier from the following EPA Systems: RCRAINFO (HANDLER_ID), AFS (SCSC), ICIS NPDES (NPDES_ID), or SDWIS (PWS_ID).
* callback (string) - JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.

### dfr_rest_services.get_map.get
Returns an object with the facility's latitude and longitude coordinates.


```js
epa_gov_dfr.dfr_rest_services.get_map.get({
  "p_id": ""
}, context)
```

#### Parameters
* output (string) - Output Format Flag.  Enter one of the following keywords:
* p_id (string) **required** - Either the EPA Facility Registry System's REGISTRY_ID for a facility or the facility identifier from the following EPA Systems: RCRAINFO (HANDLER_ID), AFS (SCSC), ICIS NPDES (NPDES_ID), or SDWIS (PWS_ID).
* callback (string) - JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.

### dfr_rest_services.get_naics.get
This procedure obtains data for the Facility NAICS Codes section in Facility/System Characteristics of the Detailed Facility Report.


```js
epa_gov_dfr.dfr_rest_services.get_naics.get({
  "p_id": ""
}, context)
```

#### Parameters
* output (string) - Output Format Flag.  Enter one of the following keywords:
* p_id (string) **required** - Either the EPA Facility Registry System's REGISTRY_ID for a facility or the facility identifier from the following EPA Systems: RCRAINFO (HANDLER_ID), AFS (SCSC), ICIS NPDES (NPDES_ID), or SDWIS (PWS_ID).
* callback (string) - JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.

### dfr_rest_services.get_nnnPermits.get
This procedure obtains data for the Permits by Statute section of the DFR.


```js
epa_gov_dfr.dfr_rest_services.get_nnnPermits.get({
  "p_id": ""
}, context)
```

#### Parameters
* output (string) - Output Format Flag.  Enter one of the following keywords:
* nnn (string) - Statute filter, provide a single statute code to filter permit results.
* nn2 (string) - Secondary statute filter, provide a single statute code to filter permit results.
* p_id (string) **required** - Either the EPA Facility Registry System's REGISTRY_ID for a facility or the facility identifier from the following EPA Systems: RCRAINFO (HANDLER_ID), AFS (SCSC), ICIS NPDES (NPDES_ID), or SDWIS (PWS_ID).
* callback (string) - JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.

### dfr_rest_services.get_notices.get
This procedure obtains data for the Notices/Informal Actions section of the DFR.


```js
epa_gov_dfr.dfr_rest_services.get_notices.get({
  "p_id": ""
}, context)
```

#### Parameters
* output (string) - Output Format Flag.  Enter one of the following keywords:
* p_id (string) **required** - Either the EPA Facility Registry System's REGISTRY_ID for a facility or the facility identifier from the following EPA Systems: RCRAINFO (HANDLER_ID), AFS (SCSC), ICIS NPDES (NPDES_ID), or SDWIS (PWS_ID).
* callback (string) - JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.

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

#### Parameters
* output (string) - Output Format Flag.  Enter one of the following keywords:
* p_id (string) **required** - Either the EPA Facility Registry System's REGISTRY_ID for a facility or the facility identifier from the following EPA Systems: RCRAINFO (HANDLER_ID), AFS (SCSC), ICIS NPDES (NPDES_ID), or SDWIS (PWS_ID).
* callback (string) - JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.

### dfr_rest_services.get_rcra_compliance.get
This procedure obtains data for the RCRA Compliance section of the DFR.


```js
epa_gov_dfr.dfr_rest_services.get_rcra_compliance.get({
  "p_id": ""
}, context)
```

#### Parameters
* output (string) - Output Format Flag.  Enter one of the following keywords:
* p_id (string) **required** - Either the EPA Facility Registry System's REGISTRY_ID for a facility or the facility identifier from the following EPA Systems: RCRAINFO (HANDLER_ID), AFS (SCSC), ICIS NPDES (NPDES_ID), or SDWIS (PWS_ID).
* callback (string) - JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.

### dfr_rest_services.get_sdwa_lead_and_copper.get
This procedure obtains data for the SDWA, Lead and Copper Rule section of the DFR.


```js
epa_gov_dfr.dfr_rest_services.get_sdwa_lead_and_copper.get({
  "p_id": ""
}, context)
```

#### Parameters
* output (string) - Output Format Flag.  Enter one of the following keywords:
* p_id (string) **required** - Either the EPA Facility Registry System's REGISTRY_ID for a facility or the facility identifier from the following EPA Systems: RCRAINFO (HANDLER_ID), AFS (SCSC), ICIS NPDES (NPDES_ID), or SDWIS (PWS_ID).
* callback (string) - JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.

### dfr_rest_services.get_sdwa_sanitary_surveys.get
This procedure obtains data for the SDWA, Sanitary Surveys section of the DFR.


```js
epa_gov_dfr.dfr_rest_services.get_sdwa_sanitary_surveys.get({
  "p_id": ""
}, context)
```

#### Parameters
* output (string) - Output Format Flag.  Enter one of the following keywords:
* p_id (string) **required** - Either the EPA Facility Registry System's REGISTRY_ID for a facility or the facility identifier from the following EPA Systems: RCRAINFO (HANDLER_ID), AFS (SCSC), ICIS NPDES (NPDES_ID), or SDWIS (PWS_ID).
* callback (string) - JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.

### dfr_rest_services.get_sdwa_site_visits.get
This procedure obtains data for the SDWA, Sanitary Site Visits section of the DFR.


```js
epa_gov_dfr.dfr_rest_services.get_sdwa_site_visits.get({
  "p_id": ""
}, context)
```

#### Parameters
* output (string) - Output Format Flag.  Enter one of the following keywords:
* p_id (string) **required** - Either the EPA Facility Registry System's REGISTRY_ID for a facility or the facility identifier from the following EPA Systems: RCRAINFO (HANDLER_ID), AFS (SCSC), ICIS NPDES (NPDES_ID), or SDWIS (PWS_ID).
* callback (string) - JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.

### dfr_rest_services.get_sdwa_violations.get
This procedure obtains data for the SDWA Violations section of the DFR.


```js
epa_gov_dfr.dfr_rest_services.get_sdwa_violations.get({
  "p_id": ""
}, context)
```

#### Parameters
* output (string) - Output Format Flag.  Enter one of the following keywords:
* p_id (string) **required** - Either the EPA Facility Registry System's REGISTRY_ID for a facility or the facility identifier from the following EPA Systems: RCRAINFO (HANDLER_ID), AFS (SCSC), ICIS NPDES (NPDES_ID), or SDWIS (PWS_ID).
* callback (string) - JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.

### dfr_rest_services.get_sdwis_compliance.get
This procedure obtains data for the SDWA Compliance section of the DFR.


```js
epa_gov_dfr.dfr_rest_services.get_sdwis_compliance.get({
  "p_id": ""
}, context)
```

#### Parameters
* output (string) - Output Format Flag.  Enter one of the following keywords:
* p_id (string) **required** - Either the EPA Facility Registry System's REGISTRY_ID for a facility or the facility identifier from the following EPA Systems: RCRAINFO (HANDLER_ID), AFS (SCSC), ICIS NPDES (NPDES_ID), or SDWIS (PWS_ID).
* callback (string) - JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.

### dfr_rest_services.get_sic_codes.get
This procedure obtains data for the Facility SIC Codes section in Facility/System Characteristics of the Detailed Facility Report.


```js
epa_gov_dfr.dfr_rest_services.get_sic_codes.get({
  "p_id": ""
}, context)
```

#### Parameters
* output (string) - Output Format Flag.  Enter one of the following keywords:
* p_id (string) **required** - Either the EPA Facility Registry System's REGISTRY_ID for a facility or the facility identifier from the following EPA Systems: RCRAINFO (HANDLER_ID), AFS (SCSC), ICIS NPDES (NPDES_ID), or SDWIS (PWS_ID).
* callback (string) - JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.

### dfr_rest_services.get_spatial_metadata.get
Returns an object with the facility coordinate spatial metadata.


```js
epa_gov_dfr.dfr_rest_services.get_spatial_metadata.get({
  "p_id": ""
}, context)
```

#### Parameters
* output (string) - Output Format Flag.  Enter one of the following keywords:
* p_id (string) **required** - Either the EPA Facility Registry System's REGISTRY_ID for a facility or the facility identifier from the following EPA Systems: RCRAINFO (HANDLER_ID), AFS (SCSC), ICIS NPDES (NPDES_ID), or SDWIS (PWS_ID).
* callback (string) - JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.

### dfr_rest_services.get_tri_history.get
This procedure obtains data for the TRI History section of the DFR.


```js
epa_gov_dfr.dfr_rest_services.get_tri_history.get({
  "p_id": ""
}, context)
```

#### Parameters
* output (string) - Output Format Flag.  Enter one of the following keywords:
* p_id (string) **required** - Either the EPA Facility Registry System's REGISTRY_ID for a facility or the facility identifier from the following EPA Systems: RCRAINFO (HANDLER_ID), AFS (SCSC), ICIS NPDES (NPDES_ID), or SDWIS (PWS_ID).
* callback (string) - JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.

### dfr_rest_services.get_tri_releases.get
This procedrue obtains data for the TRI Releases section of the DFR.


```js
epa_gov_dfr.dfr_rest_services.get_tri_releases.get({
  "p_id": ""
}, context)
```

#### Parameters
* output (string) - Output Format Flag.  Enter one of the following keywords:
* p_id (string) **required** - Either the EPA Facility Registry System's REGISTRY_ID for a facility or the facility identifier from the following EPA Systems: RCRAINFO (HANDLER_ID), AFS (SCSC), ICIS NPDES (NPDES_ID), or SDWIS (PWS_ID).
* callback (string) - JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.

### dfr_rest_services.get_tribes.get
This procedure obtains data for the Tribes and Reservations section of the DFR.


```js
epa_gov_dfr.dfr_rest_services.get_tribes.get({
  "p_id": ""
}, context)
```

#### Parameters
* output (string) - Output Format Flag.  Enter one of the following keywords:
* p_id (string) **required** - Either the EPA Facility Registry System's REGISTRY_ID for a facility or the facility identifier from the following EPA Systems: RCRAINFO (HANDLER_ID), AFS (SCSC), ICIS NPDES (NPDES_ID), or SDWIS (PWS_ID).
* callback (string) - JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.

### dfr_rest_services.get_water_quality.get
This procedure obtains data for the Water Quality section of the DFR.


```js
epa_gov_dfr.dfr_rest_services.get_water_quality.get({
  "p_id": ""
}, context)
```

#### Parameters
* output (string) - Output Format Flag.  Enter one of the following keywords:
* p_id (string) **required** - Either the EPA Facility Registry System's REGISTRY_ID for a facility or the facility identifier from the following EPA Systems: RCRAINFO (HANDLER_ID), AFS (SCSC), ICIS NPDES (NPDES_ID), or SDWIS (PWS_ID).
* p_radius (string)
* callback (string) - JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.

