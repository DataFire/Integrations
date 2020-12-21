# @datafire/epa_gov_sdw

Client library for U.S. EPA Enforcement and Compliance History Online (ECHO) - Safe Drinking Water Act

## Installation and Usage
```bash
npm install --save @datafire/epa_gov_sdw
```
```js
let epa_gov_sdw = require('@datafire/epa_gov_sdw').create();

.then(data => {
  console.log(data);
});
```

## Description

Enforcement and Compliance History Online (ECHO) is a tool developed and maintained by EPA's Office of Enforcement and Compliance Assurance for public use. ECHO provides integrated compliance and enforcement information for over 1 million regulated facilities nationwide.
   SDW Rest Services provides multiple service endpoints, each with specific capabilities, to search and retrieve data on public water systems regulated under the Safe Drinking Water Act (SDWA).  The returned results reflect data drawn from EPA's Federal Safe Drinking Water Information System (SDWIS) database.
\
The get_systems, get_qid, and get_download end points are meant to be used together.
\
The recommended use scenario for get_systems, get_qid, and get_downoad is:
\
 <b>1)</b>  Use get_systems to validate passed query parameters, obtain summary statistics and to obtain a query_id (QID).  QIDs are time sensitive and will be valid for approximately 30 minutes.
 <b>2)</b>  Use get_qid, with the returned QID, to paginate through arrays of water system results.
 <b>3)</b>  Use get_download, with the returned QID, to generate a Comma Separated Value (CSV) file of water system information that meets the QID query criteria.
\
\
Use the qcolumns parameter to customize your search results.  Use the Metadata service endpoint for a list of available output objects, their Column Ids, and their definitions to help you build your customized output. 
\
Additional ECHO Resources:   <a href="https://echo.epa.gov/tools/web-services">Web Services</a>, <a href="https://echo.epa.gov/resources/echo-data/about-the-data">About ECHO's Data</a>, <a href="https://echo.epa.gov/tools/data-downloads">Data Downloads</a>
 

## Actions

### sdw_rest_services.get_download.get
Based on the QID obtained from a get_systems query, return a comma separated value (CSV) file of the water systems found.


```js
epa_gov_sdw.sdw_rest_services.get_download.get({
  "qid": ""
}, context)
```

#### Input
* input `object`
  * output `string`: Output Format Flag.  Enter one of the following keywords:
  * qid **required** `string`: Query ID Selector.  Enter the QueryID number from a previously run query.
  * qcolumns `string`: Used to customize service output.  A list of comma-separated column IDs of output objects that will be returned in the service query object or download.  Use the metadata service endpoint for a complete list of Ids and definitions.

#### Output
* output `file`

### sdw_rest_services.get_download.post
Based on the QID obtained from a get_systems query, return a comma separated value (CSV) file of the water systems found.


```js
epa_gov_sdw.sdw_rest_services.get_download.post({
  "qid": ""
}, context)
```

#### Input
* input `object`
  * output `string`: Output Format Flag.  Enter one of the following keywords:
  * qid **required** `string`: Query ID Selector.  Enter the QueryID number from a previously run query.
  * qcolumns `string`: Used to customize service output.  A list of comma-separated column IDs of output objects that will be returned in the service query object or download.  Use the metadata service endpoint for a complete list of Ids and definitions.

#### Output
* output `file`

### sdw_rest_services.get_qid.get
GET_QID is passed with a query ID corresponding to a previously run get_systems query. It then returns a Systems object containing all matching water systems. The main purpose of GET_QID is for large querysets that contain multiple pages (responsesets) of output. GET_QID allows for pagination and for the selection and sorting of columns. 


```js
epa_gov_sdw.sdw_rest_services.get_qid.get({
  "qid": ""
}, context)
```

#### Input
* input `object`
  * output `string` (values: JSONP, JSON, XML): Output Format Flag.  Enter one of the following keywords:
  * qid **required** `string`: Query ID Selector.  Enter the QueryID number from a previously run query.
  * pageno `number`: Indicates the number of the page to display. It is used only when the results are paginated.
  * callback `string`: JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.
  * newsort `number`: Output Sort Column.  Enter the number of the column on which the data will be sorted. If unpopulated results will sort on the first column.
  * descending `string` (values: Y, N): Output Sort Column Descending Flag.  Enter Y to column identified in the newsort parameter descending.  Enter N to use ascending sort order. Used only when newsort parameter is populated.
  * qcolumns `string`: Used to customize service output.  A list of comma-separated column IDs of output objects that will be returned in the service query object or download.  Use the metadata service endpoint for a complete list of Ids and definitions.

#### Output
* output `object`: Root Object
  * Results **required** [sdw02](#sdw02)

### sdw_rest_services.get_qid.post
GET_QID is passed with a query ID corresponding to a previously run get_systems query. It then returns a Systems object containing all matching water systems. The main purpose of GET_QID is for large querysets that contain multiple pages (responsesets) of output. GET_QID allows for pagination and for the selection and sorting of columns. 


```js
epa_gov_sdw.sdw_rest_services.get_qid.post({
  "qid": ""
}, context)
```

#### Input
* input `object`
  * output `string` (values: JSONP, JSON, XML): Output Format Flag.  Enter one of the following keywords:
  * qid **required** `string`: Query ID Selector.  Enter the QueryID number from a previously run query.
  * pageno `number`: Indicates the number of the page to display. It is used only when the results are paginated.
  * callback `string`: JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.
  * newsort `number`: Output Sort Column.  Enter the number of the column on which the data will be sorted. If unpopulated results will sort on the first column.
  * descending `string` (values: Y, N): Output Sort Column Descending Flag.  Enter Y to column identified in the newsort parameter descending.  Enter N to use ascending sort order. Used only when newsort parameter is populated.
  * qcolumns `string`: Used to customize service output.  A list of comma-separated column IDs of output objects that will be returned in the service query object or download.  Use the metadata service endpoint for a complete list of Ids and definitions.

#### Output
* output `object`: Root Object
  * Results **required** [sdw02](#sdw02)

### sdw_rest_services.get_systems.get
Returns an array of public water systems that meet the specified search criteria.


```js
epa_gov_sdw.sdw_rest_services.get_systems.get({}, context)
```

#### Input
* input `object`
  * output `string` (values: JSONP, JSON, XML): Output Format Flag.  Enter one of the following keywords:
  * p_fn `string`: Facility Name Filter. Enter one or more case-insensitive facility names to filter results.  Provide multiple values as a comma-delimited list.  See p_fntype for additional modifiers.
  * p_ct `string`: Facility City Filter. Enter a single case-insensitive city name to filter results.
  * p_co `string`: Facility County Filter. Provide a single county name in combination with a state value provided via p_st.
  * p_fips `string`: FIPS Code Filter.  Enter a single 5-character Federal Information Processing Standards (FIPS) state + county value to restrict results.  E.g. to limit results to Kenosha County, Wisconsin, use 55059.
  * p_st `string`: Facility State and State-Equivalent Filter.  Provide one or more USPS postal abbreviations for states and state-equivalents to filter results.  Provide multiple values as a comma-delimited list.
  * p_zip `string`: 5-Digit ZIP Code Filter. Provide one or more 5-digit postal zip codes to filter results.  May contain multiple comma-separated values.
  * p_reg `string` (values: 01, 02, 03, 04, 05, 06, 07, 08, 09, 10): EPA Region Filter. Provide a single value of 01 thru 10 to restrict results to a single EPA region.
  * p_trb `string`: Tribe name
  * p_act `string` (values: Y, N, A): Active Permits/Facilities Flag.  Provide Y or N to filter results to facilities with active permits.
  * p_qiv `string` (values: 0, GT1, GT2, GT4, GT8, 12): Quarters in Noncompliance Limiter.  Enter a coded value to limit results to facilities with given quarter of noncompliance.
  * p_ico `string` (values: Y, N): Indian Country Flag.  Enter a "Y" or "N" to restrict searches to facilities inside or outside Indian Country.
  * p_pid `string`: Nine-digit permit IDs. May contain up to 2000 comma-separated values.
  * p_owop `string` (values: F, S, L, M, N, P): Owner/Operator code filter.  Enter one of the following codes to filter results:
  * p_systyp `string` (values: CWS, NCWS, NTCWS, TNCWS): Type of public water system:
  * p_swtyp `string` (values: SW, GW, GU, SWP, GWP, GUP): Source Water Type:
  * p_popsv `string`: Estimated average daily population served by a system:
  * p_cntysv `string`
  * p_cs `string`: Current violations:
  * p_mr `string` (values: Y, N): Monitoring and Reporting Violations (failure to conduct regular monitoring of drinking water quality or submit monitoring results in a timely fashion).
  * p_health `string` (values: Y, N): Violations of health-based drinking water standards (maximum contaminant levels, maximum residual disinfectant levels, or treatment technique rules).
  * p_other `string` (values: Y, N): Other violations, such as failing to issue annual consumer confidence reports or maintain required records.
  * p_pn `string` (values: Y, N): Public Notice Violations (failure to immediately alert consumers of serious problem with drinking water).
  * p_sv `string` (values: Y, N): Serious Violator (unresolved serious, multiple, and/or continuing violations). A value of Y will return only SDWIS systems that are Serious Violators, while a value of N will only return SDWIS Systems that are not Serious Violators.
  * p_qs `string`: Quick Search. Allows entry for city, state, and/or zip code.
  * p_sfs `string`: Single Facility Search Filter.  Provide a facility name or program system identifier to limit results.  For the all data search, the FRS registry identifier is also searched.
  * p_pswpol `string`: For CWA, pollutant names for surface water discharges. for Drinking Water, SDWIS Violation contaminant codes for unaddressed violations that have occurred in the last 3 years. May contain multiple comma-separated values.
  * p_pswvio `string` (values: Y, N): Used in conjuction with parameters p_pswpol and p_pswparam, indicates whether search should only include pollutants with violations.
  * p_pbale `string`: Lead Action Level Exceedance.  A "Y" value will select water systems with at least 1 Lead Action Level Exceedance.
  * p_cuale `string`: Copper Action Level Exceedance.  A "Y" value will select water systems with at least 1 Copper Action Level Exceedance.
  * p_rc350v `string`: Rule code 350 violation. A "Y" value will select water systems with at least one rule code 350 violation.
  * p_pbv `string`: Lead Violations.  A "Y" value will select water systems with at least 1 Lead Violation.
  * p_cuv `string`: Copper Violation.  A "Y" value will select water systems with at least 1 Copper Violation.
  * p_lcrv `string`: Lead or Copper rule violations.  A "Y" value will select water systems with at least 1 Lead or Copper Rule Violation.
  * p_fea `string` (values: W, N): Formal Enforcement Actions [within / not within] specified date range indicator. The date range is determined by parameters p_fead1 and p_fead2 or by parameter p_feay.
  * p_feay `number` (values: 1, 2, 3, 4, 5): Years (1 to 5) Range.  This value is used to create a date range for Formal Enforcement Actions (FEA). Used along with p_fea (which indicates whether to look within or outside of the date range) to find FEAs within (or not within) the number of years specified.
  * p_feaa `string` (values: A, E, S): Agency associated with Formal Enforcement Actions:
  * p_iea `string` (values: W, N): Informal Enforcement Actions [within / not within] specified date range.  The date range is determined by parameters p_iead1 and p_iead2 or by parameter p_ieay.
  * p_ieay `number` (values: 1, 2, 3, 4, 5): Years (1 to 5) Range.  This value is used to create a date range for Informal Enforcement Actions (IEA). Used along with p_iea (which indicates whether to look within or outside of the date range) to find IEAs within (or not within) the number of years specified.
  * p_ieaa `string` (values: E, S): Agency associated with Informal Enforcement Actions. If left blank, both agencies are included.
  * p_qis `string` (values: Z, GE1, GT1, GE2, GT2, GE4, GT4, GE8, GT8, GE12, GT12, 12): Significant Quarters in Noncompliance Limiter.  Enter one of the following codes to limit results to facilities having given quarters of noncompliance.
  * p_pfead1 `string`: Formal Enforcement Action Date Range Start.  Enter a date in MM/DD/YYYY format to set the start of the range for filtering by recent Formal Enforcement Action (FEA) taken against the facility within the last five years.
  * p_pfead2 `string`: Formal Enforcement Action Date Range End.  Enter a date in MM/DD/YYYY format to set the end of the date range for filtering by recent Formal Enforcement Action (FEA) taken against the facility within the last five years.
  * p_pfeat `string`: Formal Enforcement Action (FEA) Code Filter.  Enter one or more three-letter FEA codes to restrict results to facilities with these attributes.  Use p_fead1 and p_fead2 parameters to further restrict this filter by entering a date range.  Provide multiple codes as a comma-delimited list.
  * p_ss5yr `string`: Sanitary Surveys (in past 5 years) flag.  Values of visit_reason_code are either "SNSV" or "SNSP" in the past 5 years indicate a Sanitary Survey.  
  * p_sdc `string`: Significant Deficiency Count (in past 5 years) flag.  
  * p_sdc_ils `string`
  * p_ysl `string` (values: W, N, NV): Last Facility Inspection [within / not within] Specified Date Range Indicator. The date range is determined by parameters p_idt1 and p_idt2 or by parameter p_ysly.
  * p_ysly `string` (values: 1, 2, 3, 4, 5): Number of years (1 to 5) since last facility inspection.  A value of 1 means that it has been inspected within the year.
  * p_ysla `string` (values: E, S, A): Facility Last Inspection Code Filter.  If left blank, both agencies are included.  Enter a value to limit results:
  * p_idt1 `string`: Beginning of date range of most recent facility inspection.
  * p_idt2 `string`: End of date range of most recent facility inspection.
  * p_cms_flag `string`
  * queryset `number`: Query Limiter.  Enter a value to limit the number of records returned for each query. Value cannot exceed 70,000.
  * responseset `number`: Response Set Limiter. Enter a value to limit the number of records per page. Value cannot exceed 1,000.
  * callback `string`: JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.
  * qcolumns `string`: Used to customize service output.  A list of comma-separated column IDs of output objects that will be returned in the service query object or download.  Use the metadata service endpoint for a complete list of Ids and definitions.

#### Output
* output `object`: Root Object
  * Results **required** [sdw03](#sdw03)

### sdw_rest_services.get_systems.post
Returns an array of public water systems that meet the specified search criteria.


```js
epa_gov_sdw.sdw_rest_services.get_systems.post({}, context)
```

#### Input
* input `object`
  * output `string` (values: JSONP, JSON, XML): Output Format Flag.  Enter one of the following keywords:
  * p_fn `string`: Facility Name Filter. Enter one or more case-insensitive facility names to filter results.  Provide multiple values as a comma-delimited list.  See p_fntype for additional modifiers.
  * p_ct `string`: Facility City Filter. Enter a single case-insensitive city name to filter results.
  * p_co `string`: Facility County Filter. Provide a single county name in combination with a state value provided via p_st.
  * p_fips `string`: FIPS Code Filter.  Enter a single 5-character Federal Information Processing Standards (FIPS) state + county value to restrict results.  E.g. to limit results to Kenosha County, Wisconsin, use 55059.
  * p_st `string`: Facility State and State-Equivalent Filter.  Provide one or more USPS postal abbreviations for states and state-equivalents to filter results.  Provide multiple values as a comma-delimited list.
  * p_zip `string`: 5-Digit ZIP Code Filter. Provide one or more 5-digit postal zip codes to filter results.  May contain multiple comma-separated values.
  * p_reg `string` (values: 01, 02, 03, 04, 05, 06, 07, 08, 09, 10): EPA Region Filter. Provide a single value of 01 thru 10 to restrict results to a single EPA region.
  * p_trb `string`: Tribe name
  * p_act `string` (values: Y, N, A): Active Permits/Facilities Flag.  Provide Y or N to filter results to facilities with active permits.
  * p_qiv `string` (values: 0, GT1, GT2, GT4, GT8, 12): Quarters in Noncompliance Limiter.  Enter a coded value to limit results to facilities with given quarter of noncompliance.
  * p_ico `string` (values: Y, N): Indian Country Flag.  Enter a "Y" or "N" to restrict searches to facilities inside or outside Indian Country.
  * p_pid `string`: Nine-digit permit IDs. May contain up to 2000 comma-separated values.
  * p_owop `string` (values: F, S, L, M, N, P): Owner/Operator code filter.  Enter one of the following codes to filter results:
  * p_systyp `string` (values: CWS, NCWS, NTCWS, TNCWS): Type of public water system:
  * p_swtyp `string` (values: SW, GW, GU, SWP, GWP, GUP): Source Water Type:
  * p_popsv `string`: Estimated average daily population served by a system:
  * p_cntysv `string`
  * p_cs `string`: Current violations:
  * p_mr `string` (values: Y, N): Monitoring and Reporting Violations (failure to conduct regular monitoring of drinking water quality or submit monitoring results in a timely fashion).
  * p_health `string` (values: Y, N): Violations of health-based drinking water standards (maximum contaminant levels, maximum residual disinfectant levels, or treatment technique rules).
  * p_other `string` (values: Y, N): Other violations, such as failing to issue annual consumer confidence reports or maintain required records.
  * p_pn `string` (values: Y, N): Public Notice Violations (failure to immediately alert consumers of serious problem with drinking water).
  * p_sv `string` (values: Y, N): Serious Violator (unresolved serious, multiple, and/or continuing violations). A value of Y will return only SDWIS systems that are Serious Violators, while a value of N will only return SDWIS Systems that are not Serious Violators.
  * p_qs `string`: Quick Search. Allows entry for city, state, and/or zip code.
  * p_sfs `string`: Single Facility Search Filter.  Provide a facility name or program system identifier to limit results.  For the all data search, the FRS registry identifier is also searched.
  * p_pswpol `string`: For CWA, pollutant names for surface water discharges. for Drinking Water, SDWIS Violation contaminant codes for unaddressed violations that have occurred in the last 3 years. May contain multiple comma-separated values.
  * p_pswvio `string` (values: Y, N): Used in conjuction with parameters p_pswpol and p_pswparam, indicates whether search should only include pollutants with violations.
  * p_pbale `string`: Lead Action Level Exceedance.  A "Y" value will select water systems with at least 1 Lead Action Level Exceedance.
  * p_cuale `string`: Copper Action Level Exceedance.  A "Y" value will select water systems with at least 1 Copper Action Level Exceedance.
  * p_rc350v `string`: Rule code 350 violation. A "Y" value will select water systems with at least one rule code 350 violation.
  * p_pbv `string`: Lead Violations.  A "Y" value will select water systems with at least 1 Lead Violation.
  * p_cuv `string`: Copper Violation.  A "Y" value will select water systems with at least 1 Copper Violation.
  * p_lcrv `string`: Lead or Copper rule violations.  A "Y" value will select water systems with at least 1 Lead or Copper Rule Violation.
  * p_fea `string` (values: W, N): Formal Enforcement Actions [within / not within] specified date range indicator. The date range is determined by parameters p_fead1 and p_fead2 or by parameter p_feay.
  * p_feay `number` (values: 1, 2, 3, 4, 5): Years (1 to 5) Range.  This value is used to create a date range for Formal Enforcement Actions (FEA). Used along with p_fea (which indicates whether to look within or outside of the date range) to find FEAs within (or not within) the number of years specified.
  * p_feaa `string` (values: A, E, S): Agency associated with Formal Enforcement Actions:
  * p_iea `string` (values: W, N): Informal Enforcement Actions [within / not within] specified date range.  The date range is determined by parameters p_iead1 and p_iead2 or by parameter p_ieay.
  * p_ieay `number` (values: 1, 2, 3, 4, 5): Years (1 to 5) Range.  This value is used to create a date range for Informal Enforcement Actions (IEA). Used along with p_iea (which indicates whether to look within or outside of the date range) to find IEAs within (or not within) the number of years specified.
  * p_ieaa `string` (values: E, S): Agency associated with Informal Enforcement Actions. If left blank, both agencies are included.
  * p_qis `string` (values: Z, GE1, GT1, GE2, GT2, GE4, GT4, GE8, GT8, GE12, GT12, 12): Significant Quarters in Noncompliance Limiter.  Enter one of the following codes to limit results to facilities having given quarters of noncompliance.
  * p_pfead1 `string`: Formal Enforcement Action Date Range Start.  Enter a date in MM/DD/YYYY format to set the start of the range for filtering by recent Formal Enforcement Action (FEA) taken against the facility within the last five years.
  * p_pfead2 `string`: Formal Enforcement Action Date Range End.  Enter a date in MM/DD/YYYY format to set the end of the date range for filtering by recent Formal Enforcement Action (FEA) taken against the facility within the last five years.
  * p_pfeat `string`: Formal Enforcement Action (FEA) Code Filter.  Enter one or more three-letter FEA codes to restrict results to facilities with these attributes.  Use p_fead1 and p_fead2 parameters to further restrict this filter by entering a date range.  Provide multiple codes as a comma-delimited list.
  * p_ss5yr `string`: Sanitary Surveys (in past 5 years) flag.  Values of visit_reason_code are either "SNSV" or "SNSP" in the past 5 years indicate a Sanitary Survey.  
  * p_sdc `string`: Significant Deficiency Count (in past 5 years) flag.  
  * p_sdc_ils `string`
  * p_ysl `string` (values: W, N, NV): Last Facility Inspection [within / not within] Specified Date Range Indicator. The date range is determined by parameters p_idt1 and p_idt2 or by parameter p_ysly.
  * p_ysly `string` (values: 1, 2, 3, 4, 5): Number of years (1 to 5) since last facility inspection.  A value of 1 means that it has been inspected within the year.
  * p_ysla `string` (values: E, S, A): Facility Last Inspection Code Filter.  If left blank, both agencies are included.  Enter a value to limit results:
  * p_idt1 `string`: Beginning of date range of most recent facility inspection.
  * p_idt2 `string`: End of date range of most recent facility inspection.
  * p_cms_flag `string`
  * queryset `number`: Query Limiter.  Enter a value to limit the number of records returned for each query. Value cannot exceed 70,000.
  * responseset `number`: Response Set Limiter. Enter a value to limit the number of records per page. Value cannot exceed 1,000.
  * callback `string`: JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.
  * qcolumns `string`: Used to customize service output.  A list of comma-separated column IDs of output objects that will be returned in the service query object or download.  Use the metadata service endpoint for a complete list of Ids and definitions.

#### Output
* output `object`: Root Object
  * Results **required** [sdw03](#sdw03)

### sdw_rest_services.metadata.get
Returns the JSON Object Name and ColumnId for usage with the qcolumns parameter for get_systems endpoint.


```js
epa_gov_sdw.sdw_rest_services.metadata.get({}, context)
```

#### Input
* input `object`
  * output `string` (values: JSONP, JSON, XML): Output Format Flag.  Enter one of the following keywords:
  * callback `string`: JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.

#### Output
* output `object`: Root Object
  * Results **required** [meta1](#meta1)

### sdw_rest_services.metadata.post
Returns the JSON Object Name and ColumnId for usage with the qcolumns parameter for get_systems endpoint.


```js
epa_gov_sdw.sdw_rest_services.metadata.post({}, context)
```

#### Input
* input `object`
  * output `string` (values: JSONP, JSON, XML): Output Format Flag.  Enter one of the following keywords:
  * callback `string`: JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.

#### Output
* output `object`: Root Object
  * Results **required** [meta1](#meta1)



## Definitions

### meta1
* meta1 `object`: Results Object
  * Message **required** `string`: Field to record messages (typically performance-related) about packet processing
  * ResultColumns `array`
    * items [meta3](#meta3)

### meta3
* meta3 `object`: Results Column Object
  * ColumnID **required** `string`
  * ColumnName **required** `string`
  * DataLength **required** `string`: Data length for EPA program database column.
  * DataType **required** `string`: Data type for EPA program database column.
  * Description **required** `string`
  * ObjectName **required** `string`: The JSON name used for the database column.

### sdw02
* sdw02 `object`: Results Object
  * Message **required** `string`: Field to record messages (typically performance-related) about packet processing
  * PageNo **required** `string`: The number of pages of results returned
  * QueryID **required** `string`: Sequential number assigned to entire search result
  * QueryRows **required** `string`: Number of query results returned
  * WaterSystems `array`
    * items [sdw04](#sdw04)

### sdw03
* sdw03 `object`: Results Object
  * BadSystemIDs **required** `string`: Identifies which passed query system identifiers are invalid.
  * CVRows **required** `string`: Summary count of the number of CWA facilities or SDWA public drinking water systems with current violations.
  * FEARows **required** `string`: Summary count of the number of facilities with a formal enforcement action in the past five years
  * INSPRows **required** `string`: Number of facilities with insp_5yr_flag populated (CWP_DATE_LAST_INSPECTION)
  * IndianCountryRows **required** `string`: Number of facilities with tribal_flag populated
  * InfFEARows **required** `string`: Number of facilities with infea_5yr_flag populated (INFORMAL_ENF_ACT_COUNT > 0)
  * Message **required** `string`: Field to record messages (typically performance-related) about packet processing
  * PageNo **required** `string`: The number of pages of results returned
  * QueryID **required** `string`: Sequential number assigned to entire search result
  * QueryRows **required** `string`: Number of query results returned
  * SVRows **required** `string`: Number of facilities with curr_sv_flag populated (CWP_STATUS = "Significant Violation")
  * V3Rows **required** `string`: Number of facilities having one or more quarters in non-compliance (QNC) in the last three years
  * Version **required** `string`: Version of the SDWA system service
  * WaterSystems `array`
    * items [sdw04](#sdw04)

### sdw04
* sdw04 `object`: Safe Drinking Water Search Results Object
  * CitiesServed **required** `string`: County
  * CountiesServed **required** `string`: City
  * CuAle **required** `string`: The count of occurrences when 90th percentile sample concentrations of copper exceeded the copper action level of 1.3 mg/L in the past five years.
  * CuViol **required** `string`: The number of copper violations in the last five years.
  * CurrVioFlag **required** `string`: Indicates if the facility has a current violation. 1 = Yes
  * DateLastSansurvey **required** `string`
  * DfrUrl **required** `string`: The URL to the facility's Detailed Facility Report.
  * EPARegion **required** `string`: The EPA region in which the facility is located
  * FIPSCodes **required** `string`: Five-character Federal Information Processing Standards (FIPS) value: 2-character state || 3-character county
  * FeaFlag **required** `string`: Number of formal enforcement responses during the past 5 years (20 most recent quarters) as of the last quarterly refresh.  Formal enforcement actions compel a PWS to take specific actions by specific dates to return to compliance
  * Feas **required** `string`: Number of formal enforcement responses during the past 5 years (20 most recent quarters) as of the last quarterly refresh.  Formal enforcement actions compel a PWS to take specific actions by specific dates to return to compliance.
  * GwSwCode **required** `string`: Returns "GW" if the system�source water type is ground water. Returns "SW" if the system source water type is surface water.
  * HealthFlag **required** `string`: Indicates whether system has violations of health-based drinking water standards
  * IeaFlag **required** `string`: Returns 0 if the system does not have informal enforcement actions in the past five years. Returns 1 if the system does have informal enforcement actions in the past five years.
  * Ifea **required** `string`: Number of informal enforcement responses during the past 5 years (20 most recent quarters) as of the last quarterly refresh.  Informal enforcement actions do not specify actions and deadlines for returning to compliance.
  * IndianCountry **required** `string`: Indicates whether the facility is located in Indian Country
  * Insp5yrFlag **required** `string`: Indicates if the facility has an inspection within the last 5 years. 1 = Yes
  * LeadAndCopperViol **required** `string`: The number of lead and copper violations.
  * MaxScore **required** `string`: A sorting score for internal use.
  * MrFlag **required** `string`: Indicates whether system has monitoring and reporting violations
  * NewVioFlg **required** `string`: Violations that have been reported to SDWA since end of the last official quarter. These violations are considered draft and do not reflect the official compliance status for the facility.
  * OtherFlag **required** `string`: Indicates whether system has other violations, such as failing to issue annual consumer confidence reports or maintain required records
  * OwnerDesc **required** `string`: Description of Owner code
  * OwnerTypeCode **required** `string`: Owner/Operator:
  * PWSActivityCode **required** `string`: Indicates whether systems have an active or inactive designation.
  * PWSActivityDesc **required** `string`: Description of activity status code (ACT), e.g., active, inactive.
  * PWSId **required** `string`: Unique identifying code for a public water system, consisting of a two-letter state or region code, followed by seven digits
  * PWSName **required** `string`: Name of the system regulated under the Safe Drinking Water Act (SDWA)
  * PWSTypeCode **required** `string`: Type of public water system:
  * PWSTypeDesc **required** `string`: The type of public water system (PWS) and description of corresponding SystemType code. A public water system is a system for the provision to the public of piped water for human consumption, which has at least 15 service connections or regularly serves a
  * PbAle **required** `string`: The count of occurrences when 90th percentile sample concentrations of lead exceeded the lead action level of 0.015 mg/L in the past five years.
  * PbViol **required** `string`: The number of lead violations in the last five years.
  * PnFlag **required** `string`: Indicates whether system has Public Notice Violations (failure to immediately alert consumers of serious problem with drinking water)
  * PopulationServedCount **required** `string`: Estimated average daily population served by a system
  * PrimarySourceCode **required** `string`: The source water type:
  * PrimarySourceDesc **required** `string`: The source water type:
  * QtrsWithSNC **required** `string`: The number of quarters the system was designated by EPA as a serious violator over the past 3 years (12 most recent quarters).
  * QtrsWithVio **required** `string`: The number of quarters the system was in violation over the past three years. This includes the 12 most recent official quarters and new violations reported after the end of the last official quarter.
  * Rc350Viol **required** `string`: The count of open health-based lead violations in the past five years. These include violations of maximum contaminant levels (MCLs), maximum residual disinfectant levels (MRDLs), or treatment technique (TT) rules. This count includes new violations that have been reported since the end of the last official quarter.
  * RegistryID **required** `string`: An internal 12-digit Facility Registry Service (FRS) tracking number used to tie all facility data together in EPA regulatory program databases.
  * RulesVio **required** `string`: The count of rules the system is violating as of the latest official quarter of data in the source system, SDWIS, which may lag by 3-6 months. This includes violations in the most recent official quarter and new violations reported after the end of the last official quarter.
  * RulesVio3yr **required** `string`: The count of rules the system was in violation of over the past three years. This includes the 12 most recent official quarters and new violations reported after the end of the last official quarter.
  * SDWA3yrComplQtrsHistory **required** `string`: The system's 3-year compliance status history by quarter (3-month period). Each character represents a quarter of compliance, going from oldest to most recent. Character values correspond to the following compliance statuses:
  * SDWAContaminants **required** `string`: All unresolved violation contaminants or violation contaminants that have been resolved in the last 5 years.
  * SDWAContaminantsInCurViol **required** `string`: The contaminant name and code (in SDWIS) in violation of a SDWA regulation. This includes violations in the most recent official quarter and new violations that have been reported since the end of the last official quarter.
  * SDWAContaminantsInViol3yr **required** `string`: The contaminant name and code in violation of a SDWA regulation in the past three years
  * SDWDateLastFea **required** `string`: Indicates the effective date of the most recent listed formal enforcement action taken against the PWS within the last five years.
  * SDWDateLastFeaEPA **required** `string`: Indicates the effective date of the most recent listed formal enforcement action taken against the PWS by EPA within the last five years.
  * SDWDateLastFeaSt **required** `string`: Indicates the effective date of the most recent listed formal enforcement action taken against the PWS by a state environmental agency within the last five years.
  * SDWDateLastIea **required** `string`: Indicates the effective date of the most recent listed informal enforcement action taken against the PWS within the last five years.
  * SDWDateLastIeaEPA **required** `string`: Indicates the effective date of the most recent listed informal enforcement action taken against the PWS by EPA within the last five years.
  * SDWDateLastIeaSt **required** `string`: Indicates the effective date of the most recent listed informal enforcement action taken against the PWS by a state environmental agency within the last five years.
  * SDWDateLastVisit **required** `string`: The date of the last system visit.
  * SDWDateLastVisitEPA **required** `string`: The date of the last system visit by EPA.
  * SDWDateLastVisitLocal **required** `string`: The date of the last system visit by a local agency.
  * SDWDateLastVisitState **required** `string`: The date of the last system visit by a state agency.
  * SNC **required** `string`: Indicates the system's compliance status: No Violation,�In Violation, Signficant Noncompliance, or Unknown.
  * SNCFlag **required** `string`: Returns 1 if the system is in significant noncompliance (SNC); returns 0 if not.
  * Sansurvey5yr **required** `string`: The number of sanitary surveys completed within the past five years. A sanitary survey is an on-site review of a system's water source, facilities, equipment, operation, and maintenance, intended to point out sanitary deficiencies and assess the system's capability to supply safe drinking water.
  * SeriousViolator **required** `string`: Indicates whether system is a Serious Violator (has unresolved serious, multiple, and/or continuing violations that is designated as a priority candidate for formal enforcement)
  * ServiceAreaTypeCode **required** `string`
  * ServiceAreaTypeDesc **required** `string`
  * SignificantDeficiencyCount **required** `string`: The number of significant deficiencies found from a sanitary survey within the past five years.
  * SignificantDeficiencyCountIls **required** `string`
  * SiteVisits5yrAll **required** `string`
  * SiteVisits5yrInspections **required** `string`
  * SiteVisits5yrOther **required** `string`
  * StateCode **required** `string`: The state in which the system is located.
  * TRIbalFlag **required** `string`: A flag indicating that the facility is within a tribal area.
  * VioFlag **required** `string`: Indicates whether the system has been in violation in the past five years (1 if yes, 0 if no).
  * Viofeanot **required** `string`: Sum of violation points accrued during past five years (20 most recent quarters) that are under formal enforcement but not yet returned to compliance, as of the last quarterly refresh
  * ViolationCategories **required** `string`
  * Viopaccr **required** `string`: Sum of all violation points for violations reported during the past five years (20 most recent quarters), as of the last quarterly refresh
  * Vioremain **required** `string`: Sum of violation points that were not returned to compliance as of the last quarterly refresh.  Includes points that have received formal enforcement but have not returned to compliance
  * Viortcfea **required** `string`: Sum of violation points during past 5 years (20 most recent quarters) that received formal enforcement and returned to compliance, as of the last quarterly refresh
  * Viortcnofea **required** `string`: Sum of violation points during past 5 years (20 most recent quarters) that did not receive formal enforcement but did return to compliance, as of the last quarterly refresh
  * ZipCodesServed **required** `string`: ZIP code


