# @datafire/epa_gov_sdw

Client library for U.S. EPA Enforcement and Compliance History Online (ECHO) - Safe Drinking Water Act

## Installation and Usage
```bash
npm install --save datafire @datafire/epa_gov_sdw
```

```js
let datafire = require('datafire');
let epa_gov_sdw = require('@datafire/epa_gov_sdw').actions;
let context = new datafire.Context();

epa_gov_sdw.sdw_rest_services.metadata.get({}, context).then(data => {
  console.log(data);
})
```

## Description
Enforcement and Compliance History Online (ECHO) is a tool developed and maintained by EPA's Office of Enforcement and Compliance Assurance for public use. ECHO provides integrated compliance and enforcement information for about 800,000 regulated facilities nationwide.
<BR><BR>SDW Rest Services provides multiple service endpoints, each with specific capabilities, to search and retrieve data on public water systems regulated under the Safe Drinking Water Act (SDWA) .
The returned results reflect data drawn from EPA's Federal Safe Drinking Water Information System (SDWIS) database.
<BR><BR>
The get_systems, get_qid, and get_download end points are meant to be used together.
<br><br>
The recommended use scenario for get_systems, get_qid, and get_downoad is:
<br>
<br><b>1)</b>&nbsp Use get_systems to validate passed query parameters, obtain summary statistics and to obtain a query_id (QID).  QIDs are time sensitive and will be valid for approximately 30 minutes.
<br><b>2)</b>&nbsp Use get_qid, with the returned QID, to paginate through arrays of water system results.
<br><b>3)</b>&nbsp Use get_download, with the returned QID, to generate a Comma Separated Value (CSV) file of water system information that meets the QID query criteria.
<br>
<br>
Use the qcolumns parameter to customize your search results.  Use the Metdata service endpoint for a list of available output objects, their Column Ids, and their definitions to help you build your customized output. 
<br><br>
Additional ECHO Resources:&nbsp&nbsp <a href="https://echo.epa.gov/tools/web-services">Web Services</a>, <a href="https://echo.epa.gov/resources/echo-data/about-the-data">About ECHO's Data</a>, <a href="https://echo.epa.gov/tools/data-downloads">Data Downloads</a>
<br>

## Actions
### sdw_rest_services.get_download.get
Based on the QID obtained from a get_systems query, return a comma sepated vaule (CSV) file of the water systems found.


```js
epa_gov_sdw.sdw_rest_services.get_download.get({
  "qid": ""
}, context)
```

#### Parameters
* output (string) - Output Format Flag.  Enter one of the following keywords:
* qid (string) **required** - Query ID Selector.  Enter the QueryID number from a previously run query.
* qcolumns (string) - Used to cutomize service output.  A list of comma-separated column IDs of output objects that will be returned in the service query object or download.  Use the metadata service endpoint for a complete list of Ids and definitions.

### sdw_rest_services.get_qid.get
GET_QID is passed with a query ID corresponding to a previously run get_systems query. It then returns a Systems object containing all matching water systems. The main purpose of GET_QID is for large querysets that contain multiple pages (responsesets) of output. GET_QID allows for pagination and for the selection and sorting of columns. 


```js
epa_gov_sdw.sdw_rest_services.get_qid.get({
  "qid": ""
}, context)
```

#### Parameters
* output (string) - Output Format Flag.  Enter one of the following keywords:
* qid (string) **required** - Query ID Selector.  Enter the QueryID number from a previously run query.
* pageno (number) - Indicates the number of the page to display. It is used only when the results are paginated.
* callback (string) - JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.
* newsort (number) - Output Sort Column.  Enter the number of the column on which the data will be sorted. If unpopulated results will sort on the first column.
* descending (string) - Output Sort Column Descending Flag.  Enter Y to column identified in the newsort parameter descending.  Enter N to use ascending sort order. Used only when newsort parameter is populated.

### sdw_rest_services.get_systems.get
Returns an array of public water systems that meet the specified search criteria.


```js
epa_gov_sdw.sdw_rest_services.get_systems.get({}, context)
```

#### Parameters
* output (string) - Output Format Flag.  Enter one of the following keywords:
* p_fn (string) - Facility Name Filter. Enter one or more case-insensitive facility names to filter results.  Provide multiple values as a comma-delimited list.  See p_fntype for additional modifiers.
* p_ct (string) - Facility City Filter. Enter a single case-insensitive city name to filter results.
* p_co (string) - Facility County Filter. Provide a single county name in combination with a state value provided via p_st.
* p_fips (string) - FIPS Code Filter.  Enter a single 5-character Federal Information Processing Standards (FIPS) state + county value to restrict results.  E.g. to limit results to Kenosha County, Wisconsin, use 55059.
* p_st (string) - Facility State and State-Equivalent Filter.  Provide one or more USPS postal abbreviations for states and state-equivalents to filter results.  Provide multiple values as a comma-delimited list.
* p_zip (string) - 5-Digit ZIP Code Filter. Provide one or more 5-digit postal zip codes to filter results.  May contain multiple comma-separated values.
* p_reg (string) - EPA Region Filter. Provide a single value of 01 thru 10 to restrict results to a single EPA region.
* p_trb (string) - Tribe name
* p_act (string) - Active Permits/Facilities Flag.  Provide Y or N to filter results to facilities with active permits.
* p_qiv (string) - Quarters in Noncompliance Limiter.  Enter a coded value to limit results to facilities with given quarter of noncompliance.
* p_ico (string) - Indian Country Flag.  Enter a "Y" or "N" to restrict searches to facilities inside or outside Indian Country.
* p_pid (string) - Nine-digit permit IDs. May contain up to 2000 comma-separated values.
* p_owop (string) - Owner/Operator code filter.  Enter one of the following codes to filter results:
* p_systyp (string) - Type of public water system:
* p_swtyp (string) - Source Water Type:
* p_popsv (string) - Estimated average daily population served by a system:
* p_cs (string) - Current violations:
* p_mr (string) - Monitoring and Reporting Violations (failure to conduct regular monitoring of drinking water quality or submit monitoring results in a timely fashion).
* p_health (string) - Violations of health-based drinking water standards (maximum contaminant levels, maximum residual disinfectant levels, or treatment technique rules).
* p_other (string) - Other violations, such as failing to issue annual consumer confidence reports or maintain required records.
* p_pn (string) - Public Notice Violations (failure to immediately alert consumers of serious problem with drinking water).
* p_sv (string) - Serious Violator (unresolved serious, multiple, and/or continuing violations). A value of Y will return only SDWIS systems that are Serious Violators, while a value of N will only return SDWIS Systems that are not Serious Violators.
* p_qs (string) - Quick Search. Allows entry for city, state, and/or zip code.
* p_sfs (string) - Single Facility Search Filter.  Provide a facility name or program system identifier to limit results.  For the all data search, the FRS registry identifier is also searched.
* p_pswpol (string) - For CWA, pollutant names for surface water discharges. for Drinking Water, SDWIS Violation contaminant codes for unaddressed violations that have occurred in the last 3 years. May contain multiple comma-separated values.
* p_pswvio (string) - Used in conjuction with parameters p_pswpol and p_pswparam, indicates whether search should only include pollutants with violations.
* p_pbale (string) - Lead Action Level Exceedance.  A "Y" value will select water systems with at least 1 Lead Action Level Exceedance.
* p_cuale (string) - Copper Action Level Exceedance.  A "Y" value will select water systems with at least 1 Copper Action Level Exceedance.
* p_rc350v (string) - Rule code 350 violation. A "Y" value will select water systems with at least one rule code 350 violation.
* p_pbv (string) - Lead Violations.  A "Y" value will select water systems with at least 1 Lead Violation.
* p_cuv (string) - Copper Violation.  A "Y" value will select water systems with at least 1 Copper Violation.
* p_lcrv (string) - Lead or Copper rule violations.  A "Y" value will select water systems with at least 1 Lead or Copper Rule Violation.
* p_fea (string) - Formal Enforcement Actions [within / not within] specified date range indicator. The date range is determined by parameters p_fead1 and p_fead2 or by parameter p_feay.
* p_feay (number) - Years (1 to 5) Range.  This value is used to create a date range for Formal Enforcement Actions (FEA). Used along with p_fea (which indicates whether to look within or outside of the date range) to find FEAs within (or not within) the number of years specified.
* p_feaa (string) - Agency associated with Formal Enforcement Actions:
* p_iea (string) - Informal Enforcement Actions [within / not within] specified date range.  The date range is determined by parameters p_iead1 and p_iead2 or by parameter p_ieay.
* p_ieay (number) - Years (1 to 5) Range.  This value is used to create a date range for Informal Enforcement Actions (IEA). Used along with p_iea (which indicates whether to look within or outside of the date range) to find IEAs within (or not within) the number of years specified.
* p_ieaa (string) - Agency associated with Informal Enforcement Actions. If left blank, both agencies are included.
* p_qis (string) - Significant Quarters in Noncompliance Limiter.  Enter one of the following codes to limit results to facilities having given quarters of noncompliance.
* p_pfead1 (string) - Formal Enforcement Action Date Range Start.  Enter a date in MM/DD/YYYY format to set the start of the range for filtering by recent Formal Enforcement Action (FEA) taken against the facility within the last five years.
* p_pfead2 (string) - Formal Enforcement Action Date Range End.  Enter a date in MM/DD/YYYY format to set the end of the date range for filtering by recent Formal Enforcement Action (FEA) taken against the facility within the last five years.
* p_pfeat (string) - Formal Enforcement Action (FEA) Code Filter.  Enter one or more three-letter FEA codes to restrict results to facilities with these attributes.  Use p_fead1 and p_fead2 parameters to further restrict this filter by entering a date range.  Provide multiple codes as a comma-delimited list.
* queryset (number) - Query Limiter.  Enter a value to limit the number of records returned for each query. Value cannot exceed 70,000.
* responseset (number) - Response Set Limiter. Enter a value to limit the number of records per page. Value cannot exceed 1,000.
* callback (string) - JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.

### sdw_rest_services.metadata.get
Returns the JSON Object Name and ColumnId for usage with the qcolumns parameter for get_systems endpoint.


```js
epa_gov_sdw.sdw_rest_services.metadata.get({}, context)
```

#### Parameters
* output (string) - Output Format Flag.  Enter one of the following keywords:
* callback (string) - JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.

