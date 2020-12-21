# @datafire/epa_gov_rcra

Client library for U.S. EPA Enforcement and Compliance History Online (ECHO) - Resource Conservation and Recovery Act 

## Installation and Usage
```bash
npm install --save @datafire/epa_gov_rcra
```
```js
let epa_gov_rcra = require('@datafire/epa_gov_rcra').create();

.then(data => {
  console.log(data);
});
```

## Description

Enforcement and Compliance History Online (ECHO) is a tool developed and maintained by EPA's Office of Enforcement and Compliance Assurance for public use. ECHO provides integrated compliance and enforcement information for over 1 million regulated facilities nationwide.
   RCRA Rest Services provides multiple service endpoints, each with specific capabilities, to search and retrieve data on hazardous waste handlers/facilities regulated under the Resource Conservation and Recovery Act (RCRA).   The returned results reflect data drawn from EPA's RCRAInfo database.
\
The get_facilities, get_map, get_qid, and get_download end points are meant to be used together, while the enhanced get_facility_info end point is self contained.
  The get_facility_info end point returns either an array of state, county or zip clusters with summary statistics per cluster or an array of facilities.
\
The recommended use scenario for get_facilities, get_qid, get_map, and get_downoad is:
\
 <b>1)</b>  Use get_facilities to validate passed query parameters, obtain summary statistics and to obtain a query_id (QID).  QIDs are time sensitive and will be valid for approximately 30 minutes.
 <b>2)</b>  Use get_qid, with the returned QID, to paginate through arrays of facility results.
 <b>3)</b>  Use get_map, with the returned QID, to zoom in/out and pan on the clustered and individual facility coordinates that meet the QID query criteria.
 <b>4)</b>  Use get_download, with the returned QID, to generate a Comma Separated Value (CSV) file of facility information that meets the QID query criteria.
\
\
Use the qcolumns parameter to customize your search results.  Use the Metadata service endpoint for a list of available output objects, their Column Ids, and their definitions to help you build your customized output. 
\
Additional ECHO Resources:   <a href="https://echo.epa.gov/tools/web-services">Web Services</a>, <a href="https://echo.epa.gov/resources/echo-data/about-the-data">About ECHO's Data</a>, <a href="https://echo.epa.gov/tools/data-downloads">Data Downloads</a>
 

## Actions

### rcra_rest_services.get_download.get
Based on the QID obtained from a get_facilities or get_facility_info query, return a comma separated value (CSV) file of the facilities found.


```js
epa_gov_rcra.rcra_rest_services.get_download.get({
  "qid": ""
}, context)
```

#### Input
* input `object`
  * output `string`: Output Format Flag.  Enter one of the following keywords:
  * qid **required** `string`: Query ID Selector.  Enter the QueryID number from a previously run query.
  * qcolumns `string`: Used to customize service output.  A list of comma-separated column IDs of output objects that will be returned in the service query object or download.  Use the metadata service endpoint for a complete list of Ids and definitions.
  * p_pretty_print `number`: Optional flag to request GeoJSON formatted results to be pretty printed.  Only provide a numeric value when the output needs to be human readable as pretty printing has a performance cost.

#### Output
* output `file`

### rcra_rest_services.get_download.post
Based on the QID obtained from a get_facilities or get_facility_info query, return a comma separated value (CSV) file of the facilities found.


```js
epa_gov_rcra.rcra_rest_services.get_download.post({
  "qid": ""
}, context)
```

#### Input
* input `object`
  * output `string`: Output Format Flag.  Enter one of the following keywords:
  * qid **required** `string`: Query ID Selector.  Enter the QueryID number from a previously run query.
  * qcolumns `string`: Used to customize service output.  A list of comma-separated column IDs of output objects that will be returned in the service query object or download.  Use the metadata service endpoint for a complete list of Ids and definitions.
  * p_pretty_print `number`: Optional flag to request GeoJSON formatted results to be pretty printed.  Only provide a numeric value when the output needs to be human readable as pretty printing has a performance cost.

#### Output
* output `file`

### rcra_rest_services.get_facilities.get
Validates query search parameters and returns query identifier.  Use the responseset parameter to set the page size


```js
epa_gov_rcra.rcra_rest_services.get_facilities.get({}, context)
```

#### Input
* input `object`
  * output `string` (values: JSONP, JSON, XML): Output Format Flag.  Enter one of the following keywords:
  * p_fn `string`: Facility Name Filter. Enter one or more case-insensitive facility names to filter results.  Provide multiple values as a comma-delimited list.  See p_fntype for additional modifiers.
  * p_sa `string`: Facility street address. Enter a complete or partial street address.
  * p_sa1 `string`: Facility street address. Enter a complete or partial street address.   Note that p_sa1 is culmulative with p_sa.
  * p_ct `string`: Facility City Filter. Enter a single case-insensitive city name to filter results.
  * p_co `string`: Facility County Filter. Provide a single county name in combination with a state value provided via p_st.
  * p_fips `string`: FIPS Code Filter.  Enter a single 5-character Federal Information Processing Standards (FIPS) state + county value to restrict results.  E.g. to limit results to Kenosha County, Wisconsin, use 55059.
  * p_st `string`: Facility State and State-Equivalent Filter.  Provide one or more USPS postal abbreviations for states and state-equivalents to filter results.  Provide multiple values as a comma-delimited list.
  * p_stdist `string`: State District Filter.  Enter a single state district to restrict results.
  * p_zip `string`: 5-Digit ZIP Code Filter. Provide one or more 5-digit postal zip codes to filter results.  May contain multiple comma-separated values.
  * p_frs `string`: Facility Registry Service ID Filter. Enter a single 12-digit FRS identifier to filter results.
  * p_reg `string` (values: 01, 02, 03, 04, 05, 06, 07, 08, 09, 10): EPA Region Filter. Provide a single value of 01 thru 10 to restrict results to a single EPA region.
  * p_sic `string`: Standard Industrial Classification (SIC) Code Filter.  Enter a single 4-digit SIC Code to filter results.  If more complex filtering is required, use p_sic2 and p_sic4.
  * p_ncs `string`: North American Industry Classification System Filter. Enter two to six digits to filter results to facilities having matching NAICS codes.  Digits less than six will match to all codes beginning with the provided values.
  * p_pen `string`: Last Penality Date Qualifier Filter.  Enter one of the following:   
  * p_c1lat `number`: In decimal degrees.  Latitude of 1st corner of box that bounds the resulting facilities. The latitude and longitude of both corners of the bounding box must be provided.
  * p_c1lon `number`: In decimal degrees.  Longitude of 1st corner of box that bounds the resulting facilities. The latitude and longitude of both corners of the bounding box must be provided.
  * p_c2lat `number`: In decimal degrees.  Latitude of 2nd corner of box that bounds the resulting facilities. The latitude and longitude of both corners of the bounding box must be provided.
  * p_c2lon `number`: In decimal degrees.  Longitude of 2nd corner of box that bounds the resulting facilities. The latitude and longitude of both corners of the bounding box must be provided.
  * p_usmex `string` (values: Y, N): US-Mexico Border Flag.  Enter Y/N to restrict searches to facilities located within 100KM of the border.
  * p_sic2 `string`: Standard Industrial Classification (SIC) Code Filter Alternate 2. Enter a wild-card search against SIC codes.  A final wild-card is always present allowing "22" to match all SIC codes beginning with 22.  Use the "%" character within strings to match any SIC values with the pattern.  For example, "2%21" matches 2021, 2121, 2221, etc.
  * p_sic4 `string`: Standard Industrial Classification (SIC) Code Filter Alternate 3.  Enter the first 2, 3 or 4 SIC code digits to filter results to facilities having those code prefixes.  As this alternative does not utilize an index, p_sic2 will generally be quicker.
  * p_fa `string`: Federal Agency. 1 character or 5-character values; may contain multiple comma-separated values. ALL will retrieve all facilities where the federal agency code is not null.  Use the Federal Agencies lookup service to obtain a list of values.
  * p_act `string` (values: Y, N, A): Active Permits/Facilities Flag.  Provide Y or N to filter results to facilities with active permits.
  * p_fea `string` (values: W, N): Formal Enforcement Actions [within / not within] specified date range indicator. The date range is determined by parameters p_fead1 and p_fead2 or by parameter p_feay.
  * p_feay `number` (values: 1, 2, 3, 4, 5): Years (1 to 5) Range.  This value is used to create a date range for Formal Enforcement Actions (FEA). Used along with p_fea (which indicates whether to look within or outside of the date range) to find FEAs within (or not within) the number of years specified.
  * p_feaa `string` (values: A, E, S): Agency associated with Formal Enforcement Actions:
  * p_iea `string` (values: W, N): Informal Enforcement Actions [within / not within] specified date range.  The date range is determined by parameters p_iead1 and p_iead2 or by parameter p_ieay.
  * p_ieay `number` (values: 1, 2, 3, 4, 5): Years (1 to 5) Range.  This value is used to create a date range for Informal Enforcement Actions (IEA). Used along with p_iea (which indicates whether to look within or outside of the date range) to find IEAs within (or not within) the number of years specified.
  * p_ieaa `string` (values: E, S): Agency associated with Informal Enforcement Actions. If left blank, both agencies are included.
  * p_cmps `string`: RCRA Current Compliance Status Limiter.  Enter one or more of the following keywords to limit results.  Enter multiple values as a comma-delimited list.
  * p_law `string`: Law Statute Code Filter.  Enter a single statute code to limit results.
  * p_section `string`: Law Section Code Filter. Enter one or more law section codes to limit results.  Provide multiple values as a comma-delimited list.
  * p_qiv `string` (values: 0, GT1, GT2, GT4, GT8, 12): Quarters in Noncompliance Limiter.  Enter a coded value to limit results to facilities with given quarter of noncompliance.
  * p_impw `string` (values: Y, N): Discharging into Impaired Waters Flag. Enter Y to limit results to facilities with discharge to waterbodies listed as impaired in the ATTAINS database.
  * p_trep `string` (values: CURR, NOTCURR): Current Toxics Release Inventory (TRI) Reporter Limiter.  Enter one of the following codes to limit results.
  * p_olr `string`: Toxics Release Inventory Pounds of Off-Site Land Releases Limiter.  Enter a keyword to filter results.
  * p_oct `string` (values: Z, GT0, GT1000, GT5000, GT10000, GT20000, GT50000): Toxic Release Inventory Pounds of Off-Site Chemical Releases Limiter.  Enter a keyword to filter results.
  * p_trichem `string`
  * p_tri_lr_pol `string`
  * p_tri_lr_yr `string`
  * p_tri_lr_amt `string`
  * p_pm `string` (values: NONE, GT5, GT10, GT25, GT50, GT75): Percent Minority Population Limiter.  Enter a value to restrict results to facilities with a given percentage of minority population within 3-mile radius.
  * p_pd `string` (values: NONE, GT100, GT500, GT1000, GT5000, GT10000, GT20000): Population Density Limiter (per sq mile). Enter a value to limit results to facilities located in area of a given population density.
  * p_ico `string` (values: Y, N): Indian Country Flag.  Enter a "Y" or "N" to restrict searches to facilities inside or outside Indian Country.
  * p_huc `string`: 2-, 4-, 6-, or 8-character watershed code. May contain multiple comma-separated values.
  * p_wbd `string`: 2-, 4-, 6-, 8-, 10-, or 12-character watershed (WBD from the USGS Watershed Boundary Dataset). May contain multiple comma-separated values.  Uses the FRS Best Pick Coordinate to obtain the WBD12 Huc value.
  * p_pid `string`: Nine-digit permit IDs. May contain up to 2000 comma-separated values.
  * p_med `string` (values: A, M, R, S, W, ALL): Filter Results by Media.
  * p_owc `string`
  * p_owd `string`
  * p_opc `string`
  * p_opd `string`
  * p_ysl `string` (values: W, N, NV): Last Facility Inspection [within / not within] Specified Date Range Indicator. The date range is determined by parameters p_idt1 and p_idt2 or by parameter p_ysly.
  * p_ysly `number` (values: 1, 2, 3, 4, 5): Number of years (1 to 5) since last facility inspection.  A value of 1 means that it has been inspected within the year.
  * p_ysla `string` (values: E, S, A): Facility Last Inspection Code Filter.  If left blank, both agencies are included.  Enter a value to limit results:
  * p_qs `string`: Quick Search. Allows entry for city, state, and/or zip code.
  * p_sfs `string`: Single Facility Search Filter.  Provide a facility name or program system identifier to limit results.  For the all data search, the FRS registry identifier is also searched.
  * p_tribeid `number`: Numeric code for tribe (or list of tribes).
  * p_tribename `string`: Tribe Name Filter.  Enter a single tribe name to filter results.
  * p_tribedist `number`: Proximity to tribal land limiter. Enter an amount of mile between 0 and 25 to filter results.  This parameter is only evaluated if p_tribeid is populated.
  * p_owop `string` (values: PRIVATE, PUBLIC, FEDERAL): Owner/Operator code filter.  Enter one of the following codes to filter results:
  * p_agoo `string` (values: AND, OR): Indicates whether to AND or OR the Owner/Operator parameter (p_owop) and the federal agency code (p_fa) parameters.
  * p_idt1 `string`: Beginning of date range of most recent facility inspection.
  * p_idt2 `string`: End of date range of most recent facility inspection.
  * p_pityp `string`: Inspection Type:
  * p_cifdi `string` (values: Any, Yes, No, Undetermined): Compliance issuess found during inspection.
  * p_pfead1 `string`: Formal Enforcement Action Date Range Start.  Enter a date in MM/DD/YYYY format to set the start of the range for filtering by recent Formal Enforcement Action (FEA) taken against the facility within the last five years.
  * p_pfead2 `string`: Formal Enforcement Action Date Range End.  Enter a date in MM/DD/YYYY format to set the end of the date range for filtering by recent Formal Enforcement Action (FEA) taken against the facility within the last five years.
  * p_pfeat `string`: Formal Enforcement Action (FEA) Code Filter.  Enter one or more three-letter FEA codes to restrict results to facilities with these attributes.  Use p_fead1 and p_fead2 parameters to further restrict this filter by entering a date range.  Provide multiple codes as a comma-delimited list.
  * p_psncq `string` (values: GT1, GE1, GT2, GE2, GT4, GE4, GT8, GE8, GT12, GE12): Quarters in Significant Noncompliance Limiter.  Enter a coded value to limit results to facilities with given quarter of significant noncompliance.
  * p_dwd `string` (values: 0, GT0, GT1000, GT5000, GT10000, GT20000, GT50000): Direct Water Discharges. Pounds of toxic chemicals released directly to surface water as reported to the Toxics Release Inventory.
  * p_violy `number` (values: 1, 2, 3): Years Since Last Violation Limiter.  Enter a value in the format GTXX where XX is replaced by the number of years since the last violation.
  * p_ncv `string`: Number of Current Violations Limiter.  Enter a value in the format GTXX replacing XX with a numeric value to select facilities with an equal to greater count of current violations.  Enter Z to select facilities with zero violations.
  * p_fcv `string`: Years of Continuing Violations Limiter.  Enter a value in the format GTXX where XX is replaced by the number of years in continuing violation.
  * p_violt `string`: RCRA Violation Type.  Enter one or more Resource Conservation and Recovery Act violation types to limit results.  Provide multiple values as a comma-delimited list.
  * p_des `string`: Universe Designation Limiter.  Enter one or more universe designation codes.  Provide multiple values as a comma-delimited list.  Use code "TSDF" to return the full enforcement TSDF universe and "Operating TSDF" to return the operating TSDF universe.
  * p_fntype `string` (values: ALL, CONTAINS, EXACT, BEGINS): Controls type of text search performed on facility name with parameter p_fn.
  * p_pidall `string` (values: Y, N): Controls whether search is restricted to existing system. Y means the search will match the p_pid parameter against all associated permits (AIR, RCRA, SDWIS, etc).
  * p_fac_ico `string` (values: Y, N): FRS tribal land code flag.  Enter "Y" or "N" to include or exclude facilities based on FRS tribal land code.
  * p_icoo `string`: Indian country search and/or flag.  Enter "Y" to set indian country search conditions to return any results found using p_ico, p_fac_ico or p_fac_icoo.  Otherwise only results matching all provided p_ico, p_fac_ico or p_fac_icoo conditions will be returned.
  * p_fac_icos `string`: FRS tribal land spatial flag.  Enter "Y" or "N" to include or exclude facilities based on FRS tribal land spatial flag.
  * p_ejscreen `string`: Enter "Y" to limit facilities to Census block groups where one of more Environmental Justice indexes above 80th percentile.
  * p_limit_addr `string` (values: Y, N): Limit Address Search Flag.  Enter Y to restrict facility searches to native data source only.  
  * p_lat `number`: Latitude location in decimal degrees.
  * p_long `number`: Longitude location in decimal degrees.
  * p_radius `number`: Spatial Search Radius.  Enter a radius up to 100 miles in which to spatially search for facilities.
  * p_decouple `string` (values: Y, N): Decouple Inspection Code Search Flag.  Enter "Y" to search for inspection code types with p_pityp without respect to the date range search provided with p_ysl* parameters.
  * p_ejscreen_over80cnt `string` (values: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11): The number of Environmenmt Justice Indicators above the 80th percentile.  Valid values are 1 through 11.
  * queryset `number`: Query Limiter.  Enter a value to limit the number of records returned for each query. Value cannot exceed 70,000.
  * responseset `number`: Response Set Limiter. Enter a value to limit the number of records per page. Value cannot exceed 1,000.
  * tablelist `string` (values: Y, N): Table List Flag. Enter a Y to display the first page of facility results.
  * maplist `string` (values: Y, N): Map List Flag.  Provide a Y to return mappable coordinates representing the full geographic extent of the queryset (all facilities that met the selection criteria).
  * summarylist `string` (values: Y, N): Summary List Flag.  Enter a Y to return a list of summary statistics based on the parameters submitted to the query service.
  * callback `string`: JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.
  * qcolumns `string`: Used to customize service output.  A list of comma-separated column IDs of output objects that will be returned in the service query object or download.  Use the metadata service endpoint for a complete list of Ids and definitions.

#### Output
* output `object`: Root Object
  * Results **required** [rcra04](#rcra04)

### rcra_rest_services.get_facilities.post
Validates query search parameters and returns query identifier.  Use the responseset parameter to set the page size


```js
epa_gov_rcra.rcra_rest_services.get_facilities.post({}, context)
```

#### Input
* input `object`
  * output `string` (values: JSONP, JSON, XML): Output Format Flag.  Enter one of the following keywords:
  * p_fn `string`: Facility Name Filter. Enter one or more case-insensitive facility names to filter results.  Provide multiple values as a comma-delimited list.  See p_fntype for additional modifiers.
  * p_sa `string`: Facility street address. Enter a complete or partial street address.
  * p_sa1 `string`: Facility street address. Enter a complete or partial street address.   Note that p_sa1 is culmulative with p_sa.
  * p_ct `string`: Facility City Filter. Enter a single case-insensitive city name to filter results.
  * p_co `string`: Facility County Filter. Provide a single county name in combination with a state value provided via p_st.
  * p_fips `string`: FIPS Code Filter.  Enter a single 5-character Federal Information Processing Standards (FIPS) state + county value to restrict results.  E.g. to limit results to Kenosha County, Wisconsin, use 55059.
  * p_st `string`: Facility State and State-Equivalent Filter.  Provide one or more USPS postal abbreviations for states and state-equivalents to filter results.  Provide multiple values as a comma-delimited list.
  * p_stdist `string`: State District Filter.  Enter a single state district to restrict results.
  * p_zip `string`: 5-Digit ZIP Code Filter. Provide one or more 5-digit postal zip codes to filter results.  May contain multiple comma-separated values.
  * p_frs `string`: Facility Registry Service ID Filter. Enter a single 12-digit FRS identifier to filter results.
  * p_reg `string` (values: 01, 02, 03, 04, 05, 06, 07, 08, 09, 10): EPA Region Filter. Provide a single value of 01 thru 10 to restrict results to a single EPA region.
  * p_sic `string`: Standard Industrial Classification (SIC) Code Filter.  Enter a single 4-digit SIC Code to filter results.  If more complex filtering is required, use p_sic2 and p_sic4.
  * p_ncs `string`: North American Industry Classification System Filter. Enter two to six digits to filter results to facilities having matching NAICS codes.  Digits less than six will match to all codes beginning with the provided values.
  * p_pen `string`: Last Penality Date Qualifier Filter.  Enter one of the following:   
  * p_c1lat `number`: In decimal degrees.  Latitude of 1st corner of box that bounds the resulting facilities. The latitude and longitude of both corners of the bounding box must be provided.
  * p_c1lon `number`: In decimal degrees.  Longitude of 1st corner of box that bounds the resulting facilities. The latitude and longitude of both corners of the bounding box must be provided.
  * p_c2lat `number`: In decimal degrees.  Latitude of 2nd corner of box that bounds the resulting facilities. The latitude and longitude of both corners of the bounding box must be provided.
  * p_c2lon `number`: In decimal degrees.  Longitude of 2nd corner of box that bounds the resulting facilities. The latitude and longitude of both corners of the bounding box must be provided.
  * p_usmex `string` (values: Y, N): US-Mexico Border Flag.  Enter Y/N to restrict searches to facilities located within 100KM of the border.
  * p_sic2 `string`: Standard Industrial Classification (SIC) Code Filter Alternate 2. Enter a wild-card search against SIC codes.  A final wild-card is always present allowing "22" to match all SIC codes beginning with 22.  Use the "%" character within strings to match any SIC values with the pattern.  For example, "2%21" matches 2021, 2121, 2221, etc.
  * p_sic4 `string`: Standard Industrial Classification (SIC) Code Filter Alternate 3.  Enter the first 2, 3 or 4 SIC code digits to filter results to facilities having those code prefixes.  As this alternative does not utilize an index, p_sic2 will generally be quicker.
  * p_fa `string`: Federal Agency. 1 character or 5-character values; may contain multiple comma-separated values. ALL will retrieve all facilities where the federal agency code is not null.  Use the Federal Agencies lookup service to obtain a list of values.
  * p_act `string` (values: Y, N, A): Active Permits/Facilities Flag.  Provide Y or N to filter results to facilities with active permits.
  * p_fea `string` (values: W, N): Formal Enforcement Actions [within / not within] specified date range indicator. The date range is determined by parameters p_fead1 and p_fead2 or by parameter p_feay.
  * p_feay `number` (values: 1, 2, 3, 4, 5): Years (1 to 5) Range.  This value is used to create a date range for Formal Enforcement Actions (FEA). Used along with p_fea (which indicates whether to look within or outside of the date range) to find FEAs within (or not within) the number of years specified.
  * p_feaa `string` (values: A, E, S): Agency associated with Formal Enforcement Actions:
  * p_iea `string` (values: W, N): Informal Enforcement Actions [within / not within] specified date range.  The date range is determined by parameters p_iead1 and p_iead2 or by parameter p_ieay.
  * p_ieay `number` (values: 1, 2, 3, 4, 5): Years (1 to 5) Range.  This value is used to create a date range for Informal Enforcement Actions (IEA). Used along with p_iea (which indicates whether to look within or outside of the date range) to find IEAs within (or not within) the number of years specified.
  * p_ieaa `string` (values: E, S): Agency associated with Informal Enforcement Actions. If left blank, both agencies are included.
  * p_cmps `string`: RCRA Current Compliance Status Limiter.  Enter one or more of the following keywords to limit results.  Enter multiple values as a comma-delimited list.
  * p_law `string`: Law Statute Code Filter.  Enter a single statute code to limit results.
  * p_section `string`: Law Section Code Filter. Enter one or more law section codes to limit results.  Provide multiple values as a comma-delimited list.
  * p_qiv `string` (values: 0, GT1, GT2, GT4, GT8, 12): Quarters in Noncompliance Limiter.  Enter a coded value to limit results to facilities with given quarter of noncompliance.
  * p_impw `string` (values: Y, N): Discharging into Impaired Waters Flag. Enter Y to limit results to facilities with discharge to waterbodies listed as impaired in the ATTAINS database.
  * p_trep `string` (values: CURR, NOTCURR): Current Toxics Release Inventory (TRI) Reporter Limiter.  Enter one of the following codes to limit results.
  * p_olr `string`: Toxics Release Inventory Pounds of Off-Site Land Releases Limiter.  Enter a keyword to filter results.
  * p_oct `string` (values: Z, GT0, GT1000, GT5000, GT10000, GT20000, GT50000): Toxic Release Inventory Pounds of Off-Site Chemical Releases Limiter.  Enter a keyword to filter results.
  * p_trichem `string`
  * p_tri_lr_pol `string`
  * p_tri_lr_yr `string`
  * p_tri_lr_amt `string`
  * p_pm `string` (values: NONE, GT5, GT10, GT25, GT50, GT75): Percent Minority Population Limiter.  Enter a value to restrict results to facilities with a given percentage of minority population within 3-mile radius.
  * p_pd `string` (values: NONE, GT100, GT500, GT1000, GT5000, GT10000, GT20000): Population Density Limiter (per sq mile). Enter a value to limit results to facilities located in area of a given population density.
  * p_ico `string` (values: Y, N): Indian Country Flag.  Enter a "Y" or "N" to restrict searches to facilities inside or outside Indian Country.
  * p_huc `string`: 2-, 4-, 6-, or 8-character watershed code. May contain multiple comma-separated values.
  * p_wbd `string`: 2-, 4-, 6-, 8-, 10-, or 12-character watershed (WBD from the USGS Watershed Boundary Dataset). May contain multiple comma-separated values.  Uses the FRS Best Pick Coordinate to obtain the WBD12 Huc value.
  * p_pid `string`: Nine-digit permit IDs. May contain up to 2000 comma-separated values.
  * p_med `string` (values: A, M, R, S, W, ALL): Filter Results by Media.
  * p_owc `string`
  * p_owd `string`
  * p_opc `string`
  * p_opd `string`
  * p_ysl `string` (values: W, N, NV): Last Facility Inspection [within / not within] Specified Date Range Indicator. The date range is determined by parameters p_idt1 and p_idt2 or by parameter p_ysly.
  * p_ysly `number` (values: 1, 2, 3, 4, 5): Number of years (1 to 5) since last facility inspection.  A value of 1 means that it has been inspected within the year.
  * p_ysla `string` (values: E, S, A): Facility Last Inspection Code Filter.  If left blank, both agencies are included.  Enter a value to limit results:
  * p_qs `string`: Quick Search. Allows entry for city, state, and/or zip code.
  * p_sfs `string`: Single Facility Search Filter.  Provide a facility name or program system identifier to limit results.  For the all data search, the FRS registry identifier is also searched.
  * p_tribeid `number`: Numeric code for tribe (or list of tribes).
  * p_tribename `string`: Tribe Name Filter.  Enter a single tribe name to filter results.
  * p_tribedist `number`: Proximity to tribal land limiter. Enter an amount of mile between 0 and 25 to filter results.  This parameter is only evaluated if p_tribeid is populated.
  * p_owop `string` (values: PRIVATE, PUBLIC, FEDERAL): Owner/Operator code filter.  Enter one of the following codes to filter results:
  * p_agoo `string` (values: AND, OR): Indicates whether to AND or OR the Owner/Operator parameter (p_owop) and the federal agency code (p_fa) parameters.
  * p_idt1 `string`: Beginning of date range of most recent facility inspection.
  * p_idt2 `string`: End of date range of most recent facility inspection.
  * p_pityp `string`: Inspection Type:
  * p_cifdi `string` (values: Any, Yes, No, Undetermined): Compliance issuess found during inspection.
  * p_pfead1 `string`: Formal Enforcement Action Date Range Start.  Enter a date in MM/DD/YYYY format to set the start of the range for filtering by recent Formal Enforcement Action (FEA) taken against the facility within the last five years.
  * p_pfead2 `string`: Formal Enforcement Action Date Range End.  Enter a date in MM/DD/YYYY format to set the end of the date range for filtering by recent Formal Enforcement Action (FEA) taken against the facility within the last five years.
  * p_pfeat `string`: Formal Enforcement Action (FEA) Code Filter.  Enter one or more three-letter FEA codes to restrict results to facilities with these attributes.  Use p_fead1 and p_fead2 parameters to further restrict this filter by entering a date range.  Provide multiple codes as a comma-delimited list.
  * p_psncq `string` (values: GT1, GE1, GT2, GE2, GT4, GE4, GT8, GE8, GT12, GE12): Quarters in Significant Noncompliance Limiter.  Enter a coded value to limit results to facilities with given quarter of significant noncompliance.
  * p_dwd `string` (values: 0, GT0, GT1000, GT5000, GT10000, GT20000, GT50000): Direct Water Discharges. Pounds of toxic chemicals released directly to surface water as reported to the Toxics Release Inventory.
  * p_violy `number` (values: 1, 2, 3): Years Since Last Violation Limiter.  Enter a value in the format GTXX where XX is replaced by the number of years since the last violation.
  * p_ncv `string`: Number of Current Violations Limiter.  Enter a value in the format GTXX replacing XX with a numeric value to select facilities with an equal to greater count of current violations.  Enter Z to select facilities with zero violations.
  * p_fcv `string`: Years of Continuing Violations Limiter.  Enter a value in the format GTXX where XX is replaced by the number of years in continuing violation.
  * p_violt `string`: RCRA Violation Type.  Enter one or more Resource Conservation and Recovery Act violation types to limit results.  Provide multiple values as a comma-delimited list.
  * p_des `string`: Universe Designation Limiter.  Enter one or more universe designation codes.  Provide multiple values as a comma-delimited list.  Use code "TSDF" to return the full enforcement TSDF universe and "Operating TSDF" to return the operating TSDF universe.
  * p_fntype `string` (values: ALL, CONTAINS, EXACT, BEGINS): Controls type of text search performed on facility name with parameter p_fn.
  * p_pidall `string` (values: Y, N): Controls whether search is restricted to existing system. Y means the search will match the p_pid parameter against all associated permits (AIR, RCRA, SDWIS, etc).
  * p_fac_ico `string` (values: Y, N): FRS tribal land code flag.  Enter "Y" or "N" to include or exclude facilities based on FRS tribal land code.
  * p_icoo `string`: Indian country search and/or flag.  Enter "Y" to set indian country search conditions to return any results found using p_ico, p_fac_ico or p_fac_icoo.  Otherwise only results matching all provided p_ico, p_fac_ico or p_fac_icoo conditions will be returned.
  * p_fac_icos `string`: FRS tribal land spatial flag.  Enter "Y" or "N" to include or exclude facilities based on FRS tribal land spatial flag.
  * p_ejscreen `string`: Enter "Y" to limit facilities to Census block groups where one of more Environmental Justice indexes above 80th percentile.
  * p_limit_addr `string` (values: Y, N): Limit Address Search Flag.  Enter Y to restrict facility searches to native data source only.  
  * p_lat `number`: Latitude location in decimal degrees.
  * p_long `number`: Longitude location in decimal degrees.
  * p_radius `number`: Spatial Search Radius.  Enter a radius up to 100 miles in which to spatially search for facilities.
  * p_decouple `string` (values: Y, N): Decouple Inspection Code Search Flag.  Enter "Y" to search for inspection code types with p_pityp without respect to the date range search provided with p_ysl* parameters.
  * p_ejscreen_over80cnt `string` (values: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11): The number of Environmenmt Justice Indicators above the 80th percentile.  Valid values are 1 through 11.
  * queryset `number`: Query Limiter.  Enter a value to limit the number of records returned for each query. Value cannot exceed 70,000.
  * responseset `number`: Response Set Limiter. Enter a value to limit the number of records per page. Value cannot exceed 1,000.
  * tablelist `string` (values: Y, N): Table List Flag. Enter a Y to display the first page of facility results.
  * maplist `string` (values: Y, N): Map List Flag.  Provide a Y to return mappable coordinates representing the full geographic extent of the queryset (all facilities that met the selection criteria).
  * summarylist `string` (values: Y, N): Summary List Flag.  Enter a Y to return a list of summary statistics based on the parameters submitted to the query service.
  * callback `string`: JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.
  * qcolumns `string`: Used to customize service output.  A list of comma-separated column IDs of output objects that will be returned in the service query object or download.  Use the metadata service endpoint for a complete list of Ids and definitions.

#### Output
* output `object`: Root Object
  * Results **required** [rcra04](#rcra04)

### rcra_rest_services.get_facility_info.get
Returns either an array of Facilities or an array of Clusters that meet the specified search criteria.


```js
epa_gov_rcra.rcra_rest_services.get_facility_info.get({}, context)
```

#### Input
* input `object`
  * output `string`: Output Format Flag.  Enter one of the following keywords:
  * p_fn `string`: Facility Name Filter. Enter one or more case-insensitive facility names to filter results.  Provide multiple values as a comma-delimited list.  See p_fntype for additional modifiers.
  * p_sa `string`: Facility street address. Enter a complete or partial street address.
  * p_sa1 `string`: Facility street address. Enter a complete or partial street address.   Note that p_sa1 is culmulative with p_sa.
  * p_ct `string`: Facility City Filter. Enter a single case-insensitive city name to filter results.
  * p_co `string`: Facility County Filter. Provide a single county name in combination with a state value provided via p_st.
  * p_fips `string`: FIPS Code Filter.  Enter a single 5-character Federal Information Processing Standards (FIPS) state + county value to restrict results.  E.g. to limit results to Kenosha County, Wisconsin, use 55059.
  * p_st `string`: Facility State and State-Equivalent Filter.  Provide one or more USPS postal abbreviations for states and state-equivalents to filter results.  Provide multiple values as a comma-delimited list.
  * p_stdist `string`: State District Filter.  Enter a single state district to restrict results.
  * p_zip `string`: 5-Digit ZIP Code Filter. Provide one or more 5-digit postal zip codes to filter results.  May contain multiple comma-separated values.
  * p_frs `string`: Facility Registry Service ID Filter. Enter a single 12-digit FRS identifier to filter results.
  * p_reg `string` (values: 01, 02, 03, 04, 05, 06, 07, 08, 09, 10): EPA Region Filter. Provide a single value of 01 thru 10 to restrict results to a single EPA region.
  * p_sic `string`: Standard Industrial Classification (SIC) Code Filter.  Enter a single 4-digit SIC Code to filter results.  If more complex filtering is required, use p_sic2 and p_sic4.
  * p_ncs `string`: North American Industry Classification System Filter. Enter two to six digits to filter results to facilities having matching NAICS codes.  Digits less than six will match to all codes beginning with the provided values.
  * p_pen `string`: Last Penality Date Qualifier Filter.  Enter one of the following:   
  * xmin `number`: Minimum longitude value in decimal degrees.
  * ymin `number`: Minimum latitude value in decimal degrees.
  * xmax `number`: Maximum longitude value in decimal degrees.
  * ymax `number`: Maximum latitude value in decimal degrees.
  * p_usmex `string` (values: Y, N): US-Mexico Border Flag.  Enter Y/N to restrict searches to facilities located within 100KM of the border.
  * p_sic2 `string`: Standard Industrial Classification (SIC) Code Filter Alternate 2. Enter a wild-card search against SIC codes.  A final wild-card is always present allowing "22" to match all SIC codes beginning with 22.  Use the "%" character within strings to match any SIC values with the pattern.  For example, "2%21" matches 2021, 2121, 2221, etc.
  * p_sic4 `string`: Standard Industrial Classification (SIC) Code Filter Alternate 3.  Enter the first 2, 3 or 4 SIC code digits to filter results to facilities having those code prefixes.  As this alternative does not utilize an index, p_sic2 will generally be quicker.
  * p_fa `string`: Federal Agency. 1 character or 5-character values; may contain multiple comma-separated values. ALL will retrieve all facilities where the federal agency code is not null.  Use the Federal Agencies lookup service to obtain a list of values.
  * p_act `string` (values: Y, N, A): Active Permits/Facilities Flag.  Provide Y or N to filter results to facilities with active permits.
  * p_fea `string` (values: W, N): Formal Enforcement Actions [within / not within] specified date range indicator. The date range is determined by parameters p_fead1 and p_fead2 or by parameter p_feay.
  * p_feay `number` (values: 1, 2, 3, 4, 5): Years (1 to 5) Range.  This value is used to create a date range for Formal Enforcement Actions (FEA). Used along with p_fea (which indicates whether to look within or outside of the date range) to find FEAs within (or not within) the number of years specified.
  * p_feaa `string` (values: A, E, S): Agency associated with Formal Enforcement Actions:
  * p_iea `string` (values: W, N): Informal Enforcement Actions [within / not within] specified date range.  The date range is determined by parameters p_iead1 and p_iead2 or by parameter p_ieay.
  * p_ieay `number` (values: 1, 2, 3, 4, 5): Years (1 to 5) Range.  This value is used to create a date range for Informal Enforcement Actions (IEA). Used along with p_iea (which indicates whether to look within or outside of the date range) to find IEAs within (or not within) the number of years specified.
  * p_ieaa `string` (values: E, S): Agency associated with Informal Enforcement Actions. If left blank, both agencies are included.
  * p_cmps `string`: RCRA Current Compliance Status Limiter.  Enter one or more of the following keywords to limit results.  Enter multiple values as a comma-delimited list.
  * p_law `string`: Law Statute Code Filter.  Enter a single statute code to limit results.
  * p_section `string`: Law Section Code Filter. Enter one or more law section codes to limit results.  Provide multiple values as a comma-delimited list.
  * p_qiv `string` (values: 0, GT1, GT2, GT4, GT8, 12): Quarters in Noncompliance Limiter.  Enter a coded value to limit results to facilities with given quarter of noncompliance.
  * p_impw `string` (values: Y, N): Discharging into Impaired Waters Flag. Enter Y to limit results to facilities with discharge to waterbodies listed as impaired in the ATTAINS database.
  * p_trep `string` (values: CURR, NOTCURR): Current Toxics Release Inventory (TRI) Reporter Limiter.  Enter one of the following codes to limit results.
  * p_olr `string`: Toxics Release Inventory Pounds of Off-Site Land Releases Limiter.  Enter a keyword to filter results.
  * p_oct `string` (values: Z, GT0, GT1000, GT5000, GT10000, GT20000, GT50000): Toxic Release Inventory Pounds of Off-Site Chemical Releases Limiter.  Enter a keyword to filter results.
  * p_trichem `string`
  * p_tri_lr_pol `string`
  * p_tri_lr_yr `string`
  * p_tri_lr_amt `string`
  * p_pm `string` (values: NONE, GT5, GT10, GT25, GT50, GT75): Percent Minority Population Limiter.  Enter a value to restrict results to facilities with a given percentage of minority population within 3-mile radius.
  * p_pd `string` (values: NONE, GT100, GT500, GT1000, GT5000, GT10000, GT20000): Population Density Limiter (per sq mile). Enter a value to limit results to facilities located in area of a given population density.
  * p_ico `string` (values: Y, N): Indian Country Flag.  Enter a "Y" or "N" to restrict searches to facilities inside or outside Indian Country.
  * p_huc `string`: 2-, 4-, 6-, or 8-character watershed code. May contain multiple comma-separated values.
  * p_wbd `string`: 2-, 4-, 6-, 8-, 10-, or 12-character watershed (WBD from the USGS Watershed Boundary Dataset). May contain multiple comma-separated values.  Uses the FRS Best Pick Coordinate to obtain the WBD12 Huc value.
  * p_pid `string`: Nine-digit permit IDs. May contain up to 2000 comma-separated values.
  * p_med `string` (values: A, M, R, S, W, ALL): Filter Results by Media.
  * p_owc `string`
  * p_owd `string`
  * p_opc `string`
  * p_opd `string`
  * p_ysl `string` (values: W, N, NV): Last Facility Inspection [within / not within] Specified Date Range Indicator. The date range is determined by parameters p_idt1 and p_idt2 or by parameter p_ysly.
  * p_ysly `number` (values: 1, 2, 3, 4, 5): Number of years (1 to 5) since last facility inspection.  A value of 1 means that it has been inspected within the year.
  * p_ysla `string` (values: E, S, A): Facility Last Inspection Code Filter.  If left blank, both agencies are included.  Enter a value to limit results:
  * p_qs `string`: Quick Search. Allows entry for city, state, and/or zip code.
  * p_sfs `string`: Single Facility Search Filter.  Provide a facility name or program system identifier to limit results.  For the all data search, the FRS registry identifier is also searched.
  * p_tribeid `number`: Numeric code for tribe (or list of tribes).
  * p_tribename `string`: Tribe Name Filter.  Enter a single tribe name to filter results.
  * p_tribedist `number`: Proximity to tribal land limiter. Enter an amount of mile between 0 and 25 to filter results.  This parameter is only evaluated if p_tribeid is populated.
  * p_owop `string` (values: PRIVATE, PUBLIC, FEDERAL): Owner/Operator code filter.  Enter one of the following codes to filter results:
  * p_agoo `string` (values: AND, OR): Indicates whether to AND or OR the Owner/Operator parameter (p_owop) and the federal agency code (p_fa) parameters.
  * p_idt1 `string`: Beginning of date range of most recent facility inspection.
  * p_idt2 `string`: End of date range of most recent facility inspection.
  * p_pityp `string`: Inspection Type:
  * p_cifdi `string` (values: Any, Yes, No, Undetermined): Compliance issuess found during inspection.
  * p_pfead1 `string`: Formal Enforcement Action Date Range Start.  Enter a date in MM/DD/YYYY format to set the start of the range for filtering by recent Formal Enforcement Action (FEA) taken against the facility within the last five years.
  * p_pfead2 `string`: Formal Enforcement Action Date Range End.  Enter a date in MM/DD/YYYY format to set the end of the date range for filtering by recent Formal Enforcement Action (FEA) taken against the facility within the last five years.
  * p_pfeat `string`: Formal Enforcement Action (FEA) Code Filter.  Enter one or more three-letter FEA codes to restrict results to facilities with these attributes.  Use p_fead1 and p_fead2 parameters to further restrict this filter by entering a date range.  Provide multiple codes as a comma-delimited list.
  * p_psncq `string` (values: GT1, GE1, GT2, GE2, GT4, GE4, GT8, GE8, GT12, GE12): Quarters in Significant Noncompliance Limiter.  Enter a coded value to limit results to facilities with given quarter of significant noncompliance.
  * p_dwd `string` (values: 0, GT0, GT1000, GT5000, GT10000, GT20000, GT50000): Direct Water Discharges. Pounds of toxic chemicals released directly to surface water as reported to the Toxics Release Inventory.
  * p_violy `number` (values: 1, 2, 3): Years Since Last Violation Limiter.  Enter a value in the format GTXX where XX is replaced by the number of years since the last violation.
  * p_ncv `string`: Number of Current Violations Limiter.  Enter a value in the format GTXX replacing XX with a numeric value to select facilities with an equal to greater count of current violations.  Enter Z to select facilities with zero violations.
  * p_fcv `string`: Years of Continuing Violations Limiter.  Enter a value in the format GTXX where XX is replaced by the number of years in continuing violation.
  * p_violt `string`: RCRA Violation Type.  Enter one or more Resource Conservation and Recovery Act violation types to limit results.  Provide multiple values as a comma-delimited list.
  * p_des `string`: Universe Designation Limiter.  Enter one or more universe designation codes.  Provide multiple values as a comma-delimited list.  Use code "TSDF" to return the full enforcement TSDF universe and "Operating TSDF" to return the operating TSDF universe.
  * p_fntype `string` (values: ALL, CONTAINS, EXACT, BEGINS): Controls type of text search performed on facility name with parameter p_fn.
  * p_pidall `string` (values: Y, N): Controls whether search is restricted to existing system. Y means the search will match the p_pid parameter against all associated permits (AIR, RCRA, SDWIS, etc).
  * p_fac_ico `string` (values: Y, N): FRS tribal land code flag.  Enter "Y" or "N" to include or exclude facilities based on FRS tribal land code.
  * p_icoo `string`: Indian country search and/or flag.  Enter "Y" to set indian country search conditions to return any results found using p_ico, p_fac_ico or p_fac_icoo.  Otherwise only results matching all provided p_ico, p_fac_ico or p_fac_icoo conditions will be returned.
  * p_fac_icos `string`: FRS tribal land spatial flag.  Enter "Y" or "N" to include or exclude facilities based on FRS tribal land spatial flag.
  * p_ejscreen `string`: Enter "Y" to limit facilities to Census block groups where one of more Environmental Justice indexes above 80th percentile.
  * p_limit_addr `string` (values: Y, N): Limit Address Search Flag.  Enter Y to restrict facility searches to native data source only.  
  * p_lat `number`: Latitude location in decimal degrees.
  * p_long `number`: Longitude location in decimal degrees.
  * p_radius `number`: Spatial Search Radius.  Enter a radius up to 100 miles in which to spatially search for facilities.
  * p_decouple `string` (values: Y, N): Decouple Inspection Code Search Flag.  Enter "Y" to search for inspection code types with p_pityp without respect to the date range search provided with p_ysl* parameters.
  * p_ejscreen_over80cnt `string` (values: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11): The number of Environmenmt Justice Indicators above the 80th percentile.  Valid values are 1 through 11.
  * queryset `number`: Query Limiter.  Enter a value to limit the number of records returned for each query. Value cannot exceed 70,000.
  * responseset `number`: Response Set Limiter. Enter a value to limit the number of records per page. Value cannot exceed 1,000.
  * summarylist `string` (values: Y, N): Summary List Flag.  Enter a Y to return a list of summary statistics based on the parameters submitted to the query service.
  * callback `string`: JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.
  * qcolumns `string`: Used to customize service output.  A list of comma-separated column IDs of output objects that will be returned in the service query object or download.  Use the metadata service endpoint for a complete list of Ids and definitions.
  * p_pretty_print `number`: Optional flag to request GeoJSON formatted results to be pretty printed.  Only provide a numeric value when the output needs to be human readable as pretty printing has a performance cost.

#### Output
* output `object`: Root Object
  * Results **required** [rcra08](#rcra08)

### rcra_rest_services.get_facility_info.post
Returns either an array of Facilities or an array of Clusters that meet the specified search criteria.


```js
epa_gov_rcra.rcra_rest_services.get_facility_info.post({}, context)
```

#### Input
* input `object`
  * output `string`: Output Format Flag.  Enter one of the following keywords:
  * p_fn `string`: Facility Name Filter. Enter one or more case-insensitive facility names to filter results.  Provide multiple values as a comma-delimited list.  See p_fntype for additional modifiers.
  * p_sa `string`: Facility street address. Enter a complete or partial street address.
  * p_sa1 `string`: Facility street address. Enter a complete or partial street address.   Note that p_sa1 is culmulative with p_sa.
  * p_ct `string`: Facility City Filter. Enter a single case-insensitive city name to filter results.
  * p_co `string`: Facility County Filter. Provide a single county name in combination with a state value provided via p_st.
  * p_fips `string`: FIPS Code Filter.  Enter a single 5-character Federal Information Processing Standards (FIPS) state + county value to restrict results.  E.g. to limit results to Kenosha County, Wisconsin, use 55059.
  * p_st `string`: Facility State and State-Equivalent Filter.  Provide one or more USPS postal abbreviations for states and state-equivalents to filter results.  Provide multiple values as a comma-delimited list.
  * p_stdist `string`: State District Filter.  Enter a single state district to restrict results.
  * p_zip `string`: 5-Digit ZIP Code Filter. Provide one or more 5-digit postal zip codes to filter results.  May contain multiple comma-separated values.
  * p_frs `string`: Facility Registry Service ID Filter. Enter a single 12-digit FRS identifier to filter results.
  * p_reg `string` (values: 01, 02, 03, 04, 05, 06, 07, 08, 09, 10): EPA Region Filter. Provide a single value of 01 thru 10 to restrict results to a single EPA region.
  * p_sic `string`: Standard Industrial Classification (SIC) Code Filter.  Enter a single 4-digit SIC Code to filter results.  If more complex filtering is required, use p_sic2 and p_sic4.
  * p_ncs `string`: North American Industry Classification System Filter. Enter two to six digits to filter results to facilities having matching NAICS codes.  Digits less than six will match to all codes beginning with the provided values.
  * p_pen `string`: Last Penality Date Qualifier Filter.  Enter one of the following:   
  * xmin `number`: Minimum longitude value in decimal degrees.
  * ymin `number`: Minimum latitude value in decimal degrees.
  * xmax `number`: Maximum longitude value in decimal degrees.
  * ymax `number`: Maximum latitude value in decimal degrees.
  * p_usmex `string` (values: Y, N): US-Mexico Border Flag.  Enter Y/N to restrict searches to facilities located within 100KM of the border.
  * p_sic2 `string`: Standard Industrial Classification (SIC) Code Filter Alternate 2. Enter a wild-card search against SIC codes.  A final wild-card is always present allowing "22" to match all SIC codes beginning with 22.  Use the "%" character within strings to match any SIC values with the pattern.  For example, "2%21" matches 2021, 2121, 2221, etc.
  * p_sic4 `string`: Standard Industrial Classification (SIC) Code Filter Alternate 3.  Enter the first 2, 3 or 4 SIC code digits to filter results to facilities having those code prefixes.  As this alternative does not utilize an index, p_sic2 will generally be quicker.
  * p_fa `string`: Federal Agency. 1 character or 5-character values; may contain multiple comma-separated values. ALL will retrieve all facilities where the federal agency code is not null.  Use the Federal Agencies lookup service to obtain a list of values.
  * p_act `string` (values: Y, N, A): Active Permits/Facilities Flag.  Provide Y or N to filter results to facilities with active permits.
  * p_fea `string` (values: W, N): Formal Enforcement Actions [within / not within] specified date range indicator. The date range is determined by parameters p_fead1 and p_fead2 or by parameter p_feay.
  * p_feay `number` (values: 1, 2, 3, 4, 5): Years (1 to 5) Range.  This value is used to create a date range for Formal Enforcement Actions (FEA). Used along with p_fea (which indicates whether to look within or outside of the date range) to find FEAs within (or not within) the number of years specified.
  * p_feaa `string` (values: A, E, S): Agency associated with Formal Enforcement Actions:
  * p_iea `string` (values: W, N): Informal Enforcement Actions [within / not within] specified date range.  The date range is determined by parameters p_iead1 and p_iead2 or by parameter p_ieay.
  * p_ieay `number` (values: 1, 2, 3, 4, 5): Years (1 to 5) Range.  This value is used to create a date range for Informal Enforcement Actions (IEA). Used along with p_iea (which indicates whether to look within or outside of the date range) to find IEAs within (or not within) the number of years specified.
  * p_ieaa `string` (values: E, S): Agency associated with Informal Enforcement Actions. If left blank, both agencies are included.
  * p_cmps `string`: RCRA Current Compliance Status Limiter.  Enter one or more of the following keywords to limit results.  Enter multiple values as a comma-delimited list.
  * p_law `string`: Law Statute Code Filter.  Enter a single statute code to limit results.
  * p_section `string`: Law Section Code Filter. Enter one or more law section codes to limit results.  Provide multiple values as a comma-delimited list.
  * p_qiv `string` (values: 0, GT1, GT2, GT4, GT8, 12): Quarters in Noncompliance Limiter.  Enter a coded value to limit results to facilities with given quarter of noncompliance.
  * p_impw `string` (values: Y, N): Discharging into Impaired Waters Flag. Enter Y to limit results to facilities with discharge to waterbodies listed as impaired in the ATTAINS database.
  * p_trep `string` (values: CURR, NOTCURR): Current Toxics Release Inventory (TRI) Reporter Limiter.  Enter one of the following codes to limit results.
  * p_olr `string`: Toxics Release Inventory Pounds of Off-Site Land Releases Limiter.  Enter a keyword to filter results.
  * p_oct `string` (values: Z, GT0, GT1000, GT5000, GT10000, GT20000, GT50000): Toxic Release Inventory Pounds of Off-Site Chemical Releases Limiter.  Enter a keyword to filter results.
  * p_trichem `string`
  * p_tri_lr_pol `string`
  * p_tri_lr_yr `string`
  * p_tri_lr_amt `string`
  * p_pm `string` (values: NONE, GT5, GT10, GT25, GT50, GT75): Percent Minority Population Limiter.  Enter a value to restrict results to facilities with a given percentage of minority population within 3-mile radius.
  * p_pd `string` (values: NONE, GT100, GT500, GT1000, GT5000, GT10000, GT20000): Population Density Limiter (per sq mile). Enter a value to limit results to facilities located in area of a given population density.
  * p_ico `string` (values: Y, N): Indian Country Flag.  Enter a "Y" or "N" to restrict searches to facilities inside or outside Indian Country.
  * p_huc `string`: 2-, 4-, 6-, or 8-character watershed code. May contain multiple comma-separated values.
  * p_wbd `string`: 2-, 4-, 6-, 8-, 10-, or 12-character watershed (WBD from the USGS Watershed Boundary Dataset). May contain multiple comma-separated values.  Uses the FRS Best Pick Coordinate to obtain the WBD12 Huc value.
  * p_pid `string`: Nine-digit permit IDs. May contain up to 2000 comma-separated values.
  * p_med `string` (values: A, M, R, S, W, ALL): Filter Results by Media.
  * p_owc `string`
  * p_owd `string`
  * p_opc `string`
  * p_opd `string`
  * p_ysl `string` (values: W, N, NV): Last Facility Inspection [within / not within] Specified Date Range Indicator. The date range is determined by parameters p_idt1 and p_idt2 or by parameter p_ysly.
  * p_ysly `number` (values: 1, 2, 3, 4, 5): Number of years (1 to 5) since last facility inspection.  A value of 1 means that it has been inspected within the year.
  * p_ysla `string` (values: E, S, A): Facility Last Inspection Code Filter.  If left blank, both agencies are included.  Enter a value to limit results:
  * p_qs `string`: Quick Search. Allows entry for city, state, and/or zip code.
  * p_sfs `string`: Single Facility Search Filter.  Provide a facility name or program system identifier to limit results.  For the all data search, the FRS registry identifier is also searched.
  * p_tribeid `number`: Numeric code for tribe (or list of tribes).
  * p_tribename `string`: Tribe Name Filter.  Enter a single tribe name to filter results.
  * p_tribedist `number`: Proximity to tribal land limiter. Enter an amount of mile between 0 and 25 to filter results.  This parameter is only evaluated if p_tribeid is populated.
  * p_owop `string` (values: PRIVATE, PUBLIC, FEDERAL): Owner/Operator code filter.  Enter one of the following codes to filter results:
  * p_agoo `string` (values: AND, OR): Indicates whether to AND or OR the Owner/Operator parameter (p_owop) and the federal agency code (p_fa) parameters.
  * p_idt1 `string`: Beginning of date range of most recent facility inspection.
  * p_idt2 `string`: End of date range of most recent facility inspection.
  * p_pityp `string`: Inspection Type:
  * p_cifdi `string` (values: Any, Yes, No, Undetermined): Compliance issuess found during inspection.
  * p_pfead1 `string`: Formal Enforcement Action Date Range Start.  Enter a date in MM/DD/YYYY format to set the start of the range for filtering by recent Formal Enforcement Action (FEA) taken against the facility within the last five years.
  * p_pfead2 `string`: Formal Enforcement Action Date Range End.  Enter a date in MM/DD/YYYY format to set the end of the date range for filtering by recent Formal Enforcement Action (FEA) taken against the facility within the last five years.
  * p_pfeat `string`: Formal Enforcement Action (FEA) Code Filter.  Enter one or more three-letter FEA codes to restrict results to facilities with these attributes.  Use p_fead1 and p_fead2 parameters to further restrict this filter by entering a date range.  Provide multiple codes as a comma-delimited list.
  * p_psncq `string` (values: GT1, GE1, GT2, GE2, GT4, GE4, GT8, GE8, GT12, GE12): Quarters in Significant Noncompliance Limiter.  Enter a coded value to limit results to facilities with given quarter of significant noncompliance.
  * p_dwd `string` (values: 0, GT0, GT1000, GT5000, GT10000, GT20000, GT50000): Direct Water Discharges. Pounds of toxic chemicals released directly to surface water as reported to the Toxics Release Inventory.
  * p_violy `number` (values: 1, 2, 3): Years Since Last Violation Limiter.  Enter a value in the format GTXX where XX is replaced by the number of years since the last violation.
  * p_ncv `string`: Number of Current Violations Limiter.  Enter a value in the format GTXX replacing XX with a numeric value to select facilities with an equal to greater count of current violations.  Enter Z to select facilities with zero violations.
  * p_fcv `string`: Years of Continuing Violations Limiter.  Enter a value in the format GTXX where XX is replaced by the number of years in continuing violation.
  * p_violt `string`: RCRA Violation Type.  Enter one or more Resource Conservation and Recovery Act violation types to limit results.  Provide multiple values as a comma-delimited list.
  * p_des `string`: Universe Designation Limiter.  Enter one or more universe designation codes.  Provide multiple values as a comma-delimited list.  Use code "TSDF" to return the full enforcement TSDF universe and "Operating TSDF" to return the operating TSDF universe.
  * p_fntype `string` (values: ALL, CONTAINS, EXACT, BEGINS): Controls type of text search performed on facility name with parameter p_fn.
  * p_pidall `string` (values: Y, N): Controls whether search is restricted to existing system. Y means the search will match the p_pid parameter against all associated permits (AIR, RCRA, SDWIS, etc).
  * p_fac_ico `string` (values: Y, N): FRS tribal land code flag.  Enter "Y" or "N" to include or exclude facilities based on FRS tribal land code.
  * p_icoo `string`: Indian country search and/or flag.  Enter "Y" to set indian country search conditions to return any results found using p_ico, p_fac_ico or p_fac_icoo.  Otherwise only results matching all provided p_ico, p_fac_ico or p_fac_icoo conditions will be returned.
  * p_fac_icos `string`: FRS tribal land spatial flag.  Enter "Y" or "N" to include or exclude facilities based on FRS tribal land spatial flag.
  * p_ejscreen `string`: Enter "Y" to limit facilities to Census block groups where one of more Environmental Justice indexes above 80th percentile.
  * p_limit_addr `string` (values: Y, N): Limit Address Search Flag.  Enter Y to restrict facility searches to native data source only.  
  * p_lat `number`: Latitude location in decimal degrees.
  * p_long `number`: Longitude location in decimal degrees.
  * p_radius `number`: Spatial Search Radius.  Enter a radius up to 100 miles in which to spatially search for facilities.
  * p_decouple `string` (values: Y, N): Decouple Inspection Code Search Flag.  Enter "Y" to search for inspection code types with p_pityp without respect to the date range search provided with p_ysl* parameters.
  * p_ejscreen_over80cnt `string` (values: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11): The number of Environmenmt Justice Indicators above the 80th percentile.  Valid values are 1 through 11.
  * queryset `number`: Query Limiter.  Enter a value to limit the number of records returned for each query. Value cannot exceed 70,000.
  * responseset `number`: Response Set Limiter. Enter a value to limit the number of records per page. Value cannot exceed 1,000.
  * summarylist `string` (values: Y, N): Summary List Flag.  Enter a Y to return a list of summary statistics based on the parameters submitted to the query service.
  * callback `string`: JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.
  * qcolumns `string`: Used to customize service output.  A list of comma-separated column IDs of output objects that will be returned in the service query object or download.  Use the metadata service endpoint for a complete list of Ids and definitions.
  * p_pretty_print `number`: Optional flag to request GeoJSON formatted results to be pretty printed.  Only provide a numeric value when the output needs to be human readable as pretty printing has a performance cost.

#### Output
* output `object`: Root Object
  * Results **required** [rcra08](#rcra08)

### rcra_rest_services.get_geojson.get
Based on the QID obtained from a get_facilities or get_facility_info query, return GeoJSON of the facilities found.


```js
epa_gov_rcra.rcra_rest_services.get_geojson.get({
  "qid": ""
}, context)
```

#### Input
* input `object`
  * output `string`: Output Format Flag.  Enter one of the following keywords:
  * qid **required** `string`: Query ID Selector.  Enter the QueryID number from a previously run query.
  * callback `string`: JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.
  * newsort `number`: Output Sort Column.  Enter the number of the column on which the data will be sorted. If unpopulated results will sort on the first column.
  * descending `string` (values: Y, N): Output Sort Column Descending Flag.  Enter Y to column identified in the newsort parameter descending.  Enter N to use ascending sort order. Used only when newsort parameter is populated.
  * qcolumns `string`: Used to customize service output.  A list of comma-separated column IDs of output objects that will be returned in the service query object or download.  Use the metadata service endpoint for a complete list of Ids and definitions.
  * p_pretty_print `number`: Optional flag to request GeoJSON formatted results to be pretty printed.  Only provide a numeric value when the output needs to be human readable as pretty printing has a performance cost.

#### Output
* output `object`: GeoJSON Feature Collection Object
  * features **required** `array`: Array of GeoJSON feature objects.
    * items [rcra09](#rcra09)
  * type **required** `string`: Static marker indicating object is a GeoJSON Feature Collection.

### rcra_rest_services.get_geojson.post
Based on the QID obtained from a get_facilities or get_facility_info query, return GeoJSON of the facilities found.


```js
epa_gov_rcra.rcra_rest_services.get_geojson.post({
  "qid": ""
}, context)
```

#### Input
* input `object`
  * output `string`: Output Format Flag.  Enter one of the following keywords:
  * qid **required** `string`: Query ID Selector.  Enter the QueryID number from a previously run query.
  * callback `string`: JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.
  * newsort `number`: Output Sort Column.  Enter the number of the column on which the data will be sorted. If unpopulated results will sort on the first column.
  * descending `string` (values: Y, N): Output Sort Column Descending Flag.  Enter Y to column identified in the newsort parameter descending.  Enter N to use ascending sort order. Used only when newsort parameter is populated.
  * qcolumns `string`: Used to customize service output.  A list of comma-separated column IDs of output objects that will be returned in the service query object or download.  Use the metadata service endpoint for a complete list of Ids and definitions.
  * p_pretty_print `number`: Optional flag to request GeoJSON formatted results to be pretty printed.  Only provide a numeric value when the output needs to be human readable as pretty printing has a performance cost.

#### Output
* output `object`: GeoJSON Feature Collection Object
  * features **required** `array`: Array of GeoJSON feature objects.
    * items [rcra09](#rcra09)
  * type **required** `string`: Static marker indicating object is a GeoJSON Feature Collection.

### rcra_rest_services.get_info_clusters.get
Based on the QID obtained from a clustered get_facility_info query, download cluster facility information as either a CSV or GEOJSON file.


```js
epa_gov_rcra.rcra_rest_services.get_info_clusters.get({
  "p_qid": ""
}, context)
```

#### Input
* input `object`
  * output `string`: Output Format Flag.  Enter one of the following keywords:
  * p_qid **required** `string`: Query ID Selector.  Enter the QueryID number from a previously run query.
  * p_pretty_print `number`: Optional flag to request GeoJSON formatted results to be pretty printed.  Only provide a numeric value when the output needs to be human readable as pretty printing has a performance cost.

#### Output
* output `file`

### rcra_rest_services.get_info_clusters.post
Based on the QID obtained from a clustered get_facility_info query, download cluster facility information as either a CSV or GEOJSON file.


```js
epa_gov_rcra.rcra_rest_services.get_info_clusters.post({
  "p_qid": ""
}, context)
```

#### Input
* input `object`
  * output `string`: Output Format Flag.  Enter one of the following keywords:
  * p_qid **required** `string`: Query ID Selector.  Enter the QueryID number from a previously run query.
  * p_pretty_print `number`: Optional flag to request GeoJSON formatted results to be pretty printed.  Only provide a numeric value when the output needs to be human readable as pretty printing has a performance cost.

#### Output
* output `file`

### rcra_rest_services.get_map.get
The purpose of the GET_MAP service is to display facility coordinates and facility clusters related to a get_facilities facility query. Currently, the maximum number of coordinates returned is 500. GET_MAP performs automatic clustering at the state, county, and zip code levels to maximize the number of coordinates returned.


```js
epa_gov_rcra.rcra_rest_services.get_map.get({
  "qid": "",
  "p_id": ""
}, context)
```

#### Input
* input `object`
  * output `string` (values: JSONP, JSON, XML): Output Format Flag.  Enter one of the following keywords:
  * qid **required** `string`: Query ID Selector.  Enter the QueryID number from a previously run query.
  * callback `string`: JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.
  * tablelist `string` (values: Y, N): Table List Flag. Enter a Y to display the first page of facility results.
  * c1_lat `number`: Latitude of 1st corner of box that bounds the resulting facilities. The latitude and longitude of both corners of the bounding box must be provided.
  * c1_long `number`: Longitude of 1st corner of box that bounds the resulting facilities. The latitude and longitude of both corners of the bounding box must be provided.
  * c2_lat `number`: Latitude of 2nd corner of box that bounds the resulting facilities. The latitude and longitude of both corners of the bounding box must be provided.
  * c2_long `number`: Longitude of 2nd corner of box that bounds the resulting facilities. The latitude and longitude of both corners of the bounding box must be provided.
  * p_id **required** `string`: Identifier for the service.

#### Output
* output `object`: Root Object
  * MapOutput **required** [rcra12](#rcra12)

### rcra_rest_services.get_map.post
The purpose of the GET_MAP service is to display facility coordinates and facility clusters related to a get_facilities facility query. Currently, the maximum number of coordinates returned is 500. GET_MAP performs automatic clustering at the state, county, and zip code levels to maximize the number of coordinates returned.


```js
epa_gov_rcra.rcra_rest_services.get_map.post({
  "qid": "",
  "p_id": ""
}, context)
```

#### Input
* input `object`
  * output `string` (values: JSONP, JSON, XML): Output Format Flag.  Enter one of the following keywords:
  * qid **required** `string`: Query ID Selector.  Enter the QueryID number from a previously run query.
  * callback `string`: JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.
  * tablelist `string` (values: Y, N): Table List Flag. Enter a Y to display the first page of facility results.
  * c1_lat `number`: Latitude of 1st corner of box that bounds the resulting facilities. The latitude and longitude of both corners of the bounding box must be provided.
  * c1_long `number`: Longitude of 1st corner of box that bounds the resulting facilities. The latitude and longitude of both corners of the bounding box must be provided.
  * c2_lat `number`: Latitude of 2nd corner of box that bounds the resulting facilities. The latitude and longitude of both corners of the bounding box must be provided.
  * c2_long `number`: Longitude of 2nd corner of box that bounds the resulting facilities. The latitude and longitude of both corners of the bounding box must be provided.
  * p_id **required** `string`: Identifier for the service.

#### Output
* output `object`: Root Object
  * MapOutput **required** [rcra12](#rcra12)

### rcra_rest_services.get_qid.get
GET_QID is passed with a query ID corresponding to a previously run get_facilities query. It then returns a Facility object containing all matching facilities. The main purpose of GET_QID is for large querysets that contain multiple pages (responsesets) of output. GET_QID allows for pagination and for the selection and sorting of columns. 


```js
epa_gov_rcra.rcra_rest_services.get_qid.get({
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
  * Results **required** [rcra13](#rcra13)

### rcra_rest_services.get_qid.post
GET_QID is passed with a query ID corresponding to a previously run get_facilities query. It then returns a Facility object containing all matching facilities. The main purpose of GET_QID is for large querysets that contain multiple pages (responsesets) of output. GET_QID allows for pagination and for the selection and sorting of columns. 


```js
epa_gov_rcra.rcra_rest_services.get_qid.post({
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
  * Results **required** [rcra13](#rcra13)

### rcra_rest_services.metadata.get
Returns the JSON Object Name and ColumnId for usage with the qcolumns parameter for get_qid, get_facility_info and other service endpoints.


```js
epa_gov_rcra.rcra_rest_services.metadata.get({}, context)
```

#### Input
* input `object`
  * output `string` (values: JSONP, JSON, XML): Output Format Flag.  Enter one of the following keywords:
  * callback `string`: JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.

#### Output
* output `object`: Root Object
  * Results **required** [meta1](#meta1)

### rcra_rest_services.metadata.post
Returns the JSON Object Name and ColumnId for usage with the qcolumns parameter for get_qid, get_facility_info and other service endpoints.


```js
epa_gov_rcra.rcra_rest_services.metadata.post({}, context)
```

#### Input
* input `object`
  * output `string` (values: JSONP, JSON, XML): Output Format Flag.  Enter one of the following keywords:
  * callback `string`: JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.

#### Output
* output `object`: Root Object
  * Results **required** [meta1](#meta1)



## Definitions

### geo
* geo `object`: GeoJSON Geometry Object
  * coordinates **required** `array`: Array of coordinate values in longitude, latitude format.
    * items `number`
  * type **required** `string`: Indicator of the geometry represented in the GeoJSON Feature, for Echo will always be "Point".

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

### qp0
* qp0 `object`: Query Parameters Object
  * QP **required** `string`: Query parameter
  * QV **required** `string`: Query value

### rcra01
* rcra01 `object`: Facilities Object
  * AIRIDs **required** `string`: Air Facility System (AFS) ID.
  * ActiveLower48 **required** `string`: A Y/N indicator indicating that the facility is active and located within the lower 48 contiguous US States.
  * CWAIDs **required** `string`: A unique  ID assigned for each record/permit/site/facility within ICIS-NPDES. These identifiers are for used tracking purposes in the individual data systems.
  * CalculatedAccuracyMeters **required** `string`: The estimated accuracy in Meters for the facility's geospatial coordinate.
  * CensusBlockGroup **required** `string`: A geographic unit used by the United States Census Bureau, generally defined to contain between 600 and 3,000 people.
  * ChemNamesRelLand **required** `string`: It is an aggregated field containing all the names found for the current reporting year (2017).
  * ChesapeakeBayFlag **required** `string`: Displays "Y" if the facility is located within the Chesapeake Bay watershed.
  * CleanupActionFlag **required** `string`
  * CollectionMethod **required** `string`: ??
  * CurrSvFlag **required** `string`: Indicates if the facility has a current significant violation. 1 = Yes
  * CurrVioFlag **required** `string`: Indicates if the facility has a current violation. 1 = Yes
  * CurrentVioCnt **required** `string`
  * DateLastRecordReview **required** `string`
  * EPASystem **required** `string`: The EPA data system in which permit and facility records are kept. EPA's Facility Registry System (FRS) links all program database records (such as permit IDs and IDs facilities use in reporting to EPA) together. The following list describes the individual data systems that are linked to from the detailed facility report: 
  * Ea5yrFlag **required** `string`: Indicates if the facility has a formal enforcement action within the last 5 years. 1 = Yes
  * EjscreenFlag **required** `string`: A Y/N indicator identifying whether or not the facility is within an Environmental Justice area.
  * EjscreenFlagUs **required** `string`: A Y/N indicator identifying whether or not the facility is within an Environmental Justice area.
  * FacCountyName **required** `string`: The facility county name from EPA's Facility Registry System
  * FacDerivedHuc **required** `string`: The 8-digit Hydrologic Unit Code (HUC) of the watershed in which the facility resides. A HUC number is assigned to every watershed in the nation and uniquely identifies the watershed.
  * FacDerivedTRIbes **required** `string`: The tribes or tribal territories located within 25 miles of the facility's location.
  * FacDerivedWBD **required** `string`: The Hydrologic Unit Code (HUC-12) of the waterbody in which the facility resides, derived based on location data in FRS.
  * FacDerivedWBDName **required** `string`: The 12 digit Watershed Boundary Dataset Name derived from the FRS Best Pick Coordinate
  * FacFIPSCode **required** `string`: The 2-digit Federal Information Processing Standards (FIPS) code to identify the county that a facility is located in.
  * FacFederalAgencyCode **required** `string`: Indicates the federal agency, as classified in FRS. Federal agencies are installations that are owned and operated by the U.S. government. The five-character code consists of a letter followed by four numbers. There are four possible letters that can occupy the first character position: C = Civilian Federal Agency; D = Department of Defense; E = Department of Energy; X = Unknown. The second and third characters represent the agency code, while the fourth and fifth characters represent the bureau code.
  * FacFederalAgencyName **required** `string`: Indicates the name of the federal agency, as classified in FRS. Federal agencies are installations that are owned and operated by the U.S. government.
  * FacIndianCntryFlg **required** `string`: Flag showing Y/N whether the facility is located in Indian Country.
  * FacIndianSpatialFlg **required** `string`: Returns “Y” if a facility is located within a tribal spatial boundary as defined by the U.S. Census Bureau 2010 tribal boundary layer data for tribes in the lower 48 states and Bureau of Land Management Alaska State Office data for native villages in Alaska. Returns “N” if a facility is not located within a tribal or native Alaskan village area.
  * FacLat **required** `string`: The latitude of the facility in decimal degrees expressed using the NAD83 horizontal datum. The coordinate comes from the FRS EPA Locational Reference Tables (LRT) file which represents the most accurate value for the facility based on the available spatial metadata.
  * FacLong **required** `string`: The longitude of the facility in decimal degrees expressed using the NAD83 horizontal datum. The coordinate comes from the FRS EPA Locational Reference Tables (LRT) file which represents the most accurate value for the facility based on the available spatial metadata.
  * FacMapFlg **required** `string`: Graphical indicator denoting whether geographical data required to map a facility are available.
  * FacMapIcon **required** `string`: The default map icon image file calculated for the facility by the ECHO program.
  * FacPercentMinority **required** `string`: Percent Minority is the percentage of the population of the given area that is considered minority. Statistics are shown for the area within a 3-mile radius of each facility.
  * FacPopulationDensity **required** `string`: The number of persons per square mile in the profiled area.
  * FacSICCodes **required** `string`: Indicates the facility’s or permit's primary Standard Industrial Classification (SIC) Code. The SIC code describes the primary activity of the facility.
  * FacStdCountyName **required** `string`: The standardized  facility county name from EPA's Facility Registry System
  * FacTRILandReleases **required** `string`
  * FacTRIOffSiteTransfers **required** `string`
  * FacTRIOnSiteReleases **required** `string`
  * FacTRIReporter **required** `string`: Indicates whether facility reported to the Toxics Release Inventory (TRI) for the most recent reporting year.
  * FacUsMexBorderFlg **required** `string`: A Y/N flag indicating that the facility is within 100KM of the US-Mexico Border.
  * Infea5yrFlag **required** `string`: Indicates if the facility has an informal enforcement action within the last 5 years. 1 = Yes.
  * Insp5yrFlag **required** `string`: Indicates if the facility has an inspection within the last 5 years. 1 = Yes
  * LastViolationDate **required** `string`
  * Lower48 **required** `string`: Flag showing Y/N whether location is within the contiguous (lower 48) United States.
  * Map **required** `string`: No Longer Used.
  * MaxPctileUs **required** `string`: The maximum percentile from all individual EJSCREEN indicators.
  * MaxScore **required** `string`: A sorting score for internal use.
  * OperatorCode **required** `string`
  * OperatorDesc **required** `string`
  * Over80CountUs **required** `string`: The number of primary EJSCREEN environmental justice (EJ) indexes exceeding the 80th or higher national percentile for the Census block group that the facility is located in.
  * OwnerCode **required** `string`
  * OwnerDesc **required** `string`: Description of Owner code
  * PctileCancerUs **required** `string`: The national percentile of the census block group for the EJSCREEN NATA air toxics cancer risk indicator.
  * PctileDpmUs **required** `string`: The national percentile of the census block group for the EJSCREEN diesel particulate matter indicator.
  * PctileO3Us **required** `string`: The national percentile of the census block group for the EJSCREEN ozone indicator.
  * PctilePctpre1960Us **required** `string`: The national percentile of the census block group for the EJSCREEN Lead paint indicator.
  * PctilePmUs **required** `string`: The national percentile of the census block group for the EJSCREEN particulate matter indicator.
  * PctileProximityNPDESUs **required** `string`: The national percentile of the census block group for the EJSCREEN proximity to major direct water dischargers indicator.
  * PctileProximityNplUs **required** `string`: The national percentile of the census block group for the EJSCREEN proximity to National Priorities List (NPL) sites indicator.
  * PctileProximityRmpUs **required** `string`: The national percentile of the census block group for the EJSCREEN proximity to Risk Management Plan (RMP) sites indicator.
  * PctileProximityTsdfUs **required** `string`: The national percentile of the census block group for the EJSCREEN proximity to Treatment Storage and Disposal Facilities (TSDFs) indicator.
  * PctileRespUs **required** `string`: The national percentile of the census block group for the EJSCREEN NATA respiratory hazard index indicator.
  * PctileTrafficScoreUs **required** `string`: The national percentile of the census block group for the EJSCREEN Traffic proximity and volume indicator.
  * RCRA3yrComplQtrsHistory **required** `string`: The system's 3-year compliance status history by quarter (3-month period) entered in the RCRA program database. Each character represents a quarter of compliance, going from oldest to most recent. Character values correspond to the following compliance statuses:
  * RCRACaseIDs **required** `string`
  * RCRACity **required** `string`
  * RCRAComplStatus **required** `string`
  * RCRACounty **required** `string`
  * RCRADaysLastInspection **required** `string`
  * RCRAEPARegion **required** `string`
  * RCRAFIPSCode **required** `string`
  * RCRAFeaCnt **required** `string`
  * RCRAIDs **required** `string`: A unique 12-character ID assigned for each record/permit/site/facility within the RCRAInfo database.
  * RCRAIeaCnt **required** `string`
  * RCRAImpWaterFlg **required** `string`
  * RCRAIndianCntryFlg **required** `string`
  * RCRAInspCnt **required** `string`
  * RCRALandTypeCode **required** `string`
  * RCRALastFeaDate **required** `string`
  * RCRALastFeaDateEPA **required** `string`
  * RCRALastFeaDateState **required** `string`
  * RCRALastIeaDate **required** `string`
  * RCRALastIeaDateEPA **required** `string`
  * RCRALastIeaDateState **required** `string`
  * RCRALastInspDateEPA **required** `string`
  * RCRALastInspDateState **required** `string`
  * RCRALastInspectionDate **required** `string`
  * RCRALastPenaltyDate **required** `string`: Indicates the date on which the most recent assessed (or final) penalty was taken against the facility, entered in the RCRAInfo program database.
  * RCRAMapIcon **required** `string`
  * RCRANAICS **required** `string`: The RCRA permit's primary North American Industry Classification System (NAICS) Code.
  * RCRAName **required** `string`
  * RCRAOldestOpenVioDate **required** `string`
  * RCRAPenalties **required** `string`: The total dollar amount of assessed (or final) penalties taken against the facility within the last five years, entered in the RCRAInfo program database.
  * RCRAQtrsWithNC **required** `string`: The number of quarters, out of the last twelve quarters, in which the RCRA permit is considered in violation.
  * RCRAQtrsWithSNC **required** `string`
  * RCRASNC **required** `string`
  * RCRAState **required** `string`
  * RCRAStateDistrict **required** `string`
  * RCRAStatus **required** `string`
  * RCRAStreet **required** `string`
  * RCRATRIbalLandCode **required** `string`
  * RCRAUniverse **required** `string`
  * RCRAViolationTypes **required** `string`
  * RCRAZip **required** `string`
  * RCRAinfoLandTypeCode **required** `string`
  * RCRAinfoLandTypeDesc **required** `string`
  * ReferencePoint **required** `string`: ??
  * RegistryID **required** `string`: An internal 12-digit Facility Registry Service (FRS) tracking number used to tie all facility data together in EPA regulatory program databases.
  * RmpIDs **required** `string`: A unique ID assigned to each facility submitting a Risk Management Plan to EPA under the Risk Management Plan Rule.
  * SDWAIDs **required** `string`: A unique 9-character ID assigned for each public water system within the Safe Drinking Water Information System (SDWIS).
  * Score **required** `string`
  * SemsIDs **required** `string`
  * SourceID **required** `string`: Unique Identifier assigned by EPA.
  * Statute **required** `string`: The name of the statute associated with each of the permits and identifiers linked to the facility: 
  * TRIIDs **required** `string`: A unique 15-character ID assigned for each facility within the Toxics Release Inventory (TRI) program. The format is ZZZZZNNNNNSSSSS, where ZZZZZ = ZIP code, NNNNN = the first 5 consonants of the name, and SSSSS = the first 5 non-blank non-special characters in the street address.
  * TRIbalFlag **required** `string`: A flag indicating that the facility is within a tribal area.
  * Tsdf **required** `string`
  * ViolFlag **required** `string`: Indicates if the facility had a violation within the last 3 years. 1 = Yes
  * WebDocs **required** `string`: Contains flags that identify what web accessible documents are available for the facility.

### rcra02
* rcra02 `object`: Map Data Object
  * FormalCount **required** `string`: The number of formal enforcement actions that have been taken against the facility
  * ICON **required** `string`: Name of each individual icon file within the URL base
  * InformalCount **required** `string`: The number of informal enforcement actions that have been taken against the facility
  * LAT **required** `string`: The latitude of the facility in degrees, to four decimal places
  * LON **required** `string`: The longitude of the facility in degrees, to four decimal places
  * LastInsp **required** `string`: The unique identifier for the last inspection
  * NAME **required** `string`: For DFR, this is the Facility name. The name corresponds to the TYPE value
  * PUV **required** `string`: Pop up value. Combine with PopUpBaseURL to give the popup for the facility
  * RCRAstatus **required** `string`: The facility's 3-year compliance status history by quarter (3-month period) entered in the RCRAInfo program database. Each character represents a quarter of compliance, going from oldest to most recent. Character values correspond to the following compliance statuses:
  * TYPE **required** `string`: For DFR, this is always facility

### rcra03
* rcra03 `object`: Map Output Object
  * IconBaseURL **required** `string`: URL where all the icons are located
  * MapData **required** `array`: An array of facility geospatial information.
    * items [rcra02](#rcra02)
  * PopUpBaseURL **required** `string`: Combine this URL with the PUC to get popup info
  * QueryID **required** `string`: Sequential number assigned to entire search result

### rcra04
* rcra04 `object`: Results Object
  * BadSystemIDs **required** `string`: Identifies which passed query system identifiers are invalid.
  * CVRows **required** `string`: Summary count of the number of CWA facilities or SDWA public drinking water systems with current violations.
  * FEARows **required** `string`: Summary count of the number of facilities with a formal enforcement action in the past five years
  * Facilities `array`: A complex array of facility information.
    * items [rcra01](#rcra01)
  * INSPRows **required** `string`: Number of facilities with insp_5yr_flag populated (CWP_DATE_LAST_INSPECTION)
  * IndianCountryRows **required** `string`: Number of facilities with tribal_flag populated
  * InfFEARows **required** `string`: Number of facilities with infea_5yr_flag populated (INFORMAL_ENF_ACT_COUNT > 0)
  * MapOutput [rcra03](#rcra03)
  * Message **required** `string`: Field to record messages (typically performance-related) about packet processing
  * PageNo **required** `string`: The number of pages of results returned
  * QueryID **required** `string`: Sequential number assigned to entire search result
  * QueryRows **required** `string`: Number of query results returned
  * SVRows **required** `string`: Number of facilities with curr_sv_flag populated (CWP_STATUS = "Significant Violation")
  * TotalPenalties **required** `string`: The total dollar amount of either assessed or final penalties within the five year time period
  * V3Rows **required** `string`: Number of facilities having one or more quarters in non-compliance (QNC) in the last three years

### rcra05
* rcra05 `object`: Cluster Data Object
  * CVRows **required** `string`: Summary count of the number of CWA facilities or SDWA public drinking water systems with current violations.
  * ClusterCount **required** `string`: The number of facilities or cases in the cluster.
  * ClusterIcon **required** `string`: The icon file used to reprsent the cluster.
  * ClusterLatitude **required** `string`: The latitude in decimal degrees expressed using the NAD83 horizontal datum.
  * ClusterLongitude **required** `string`: The longitude in decimal degrees expressed using the NAD83 horizontal datum.
  * ClusterName **required** `string`: THe name or the identifier of the geographic area used for clustering.  Examples:  Alaska, Fairfax County, 22314
  * ClusterType **required** `string`: The representative geographic area used for clustering.  Examples:  State, County, Zip Code
  * ClusterValue **required** `string`: The value, internal to the database report object, that represents this cluster, like a state abbreviation, zip code, or county FIPS code.  Examples: AK, 22314, 50011
  * EPARegionCode **required** `string`: The EPA region where the facility is located. EPA has 10 regional offices that execute programs within several states and territories
  * FEARows **required** `string`: Summary count of the number of facilities with a formal enforcement action in the past five years
  * INSPRows **required** `string`: Number of facilities with insp_5yr_flag populated (CWP_DATE_LAST_INSPECTION)
  * IndianCountryRows **required** `string`: Number of facilities with tribal_flag populated
  * InfFEARows **required** `string`: Number of facilities with infea_5yr_flag populated (INFORMAL_ENF_ACT_COUNT > 0)
  * ObjectId **required** `string`: Sequential number assigned to each facility or cluster returned.
  * SVRows **required** `string`: Number of facilities with curr_sv_flag populated (CWP_STATUS = "Significant Violation")
  * TotalPenalties **required** `string`: The total dollar amount of either assessed or final penalties within the five year time period
  * V3Rows **required** `string`: Number of facilities having one or more quarters in non-compliance (QNC) in the last three years

### rcra06
* rcra06 `object`: Cluster Output Object
  * ClusterData **required** `array`: An array of state, county, or zip code cluster information
    * items [rcra05](#rcra05)

### rcra07
* rcra07 `object`: Facilities Object
  * AIRIDs **required** `string`: Air Facility System (AFS) ID.
  * ActiveLower48 **required** `string`: A Y/N indicator indicating that the facility is active and located within the lower 48 contiguous US States.
  * CWAIDs **required** `string`: A unique  ID assigned for each record/permit/site/facility within ICIS-NPDES. These identifiers are for used tracking purposes in the individual data systems.
  * CalculatedAccuracyMeters **required** `string`: The estimated accuracy in Meters for the facility's geospatial coordinate.
  * CensusBlockGroup **required** `string`: A geographic unit used by the United States Census Bureau, generally defined to contain between 600 and 3,000 people.
  * ChemNamesRelLand **required** `string`: It is an aggregated field containing all the names found for the current reporting year (2017).
  * ChesapeakeBayFlag **required** `string`: Displays "Y" if the facility is located within the Chesapeake Bay watershed.
  * CleanupActionFlag **required** `string`
  * CollectionMethod **required** `string`: ??
  * CurrSvFlag **required** `string`: Indicates if the facility has a current significant violation. 1 = Yes
  * CurrVioFlag **required** `string`: Indicates if the facility has a current violation. 1 = Yes
  * CurrentVioCnt **required** `string`
  * DateLastRecordReview **required** `string`
  * EPASystem **required** `string`: The EPA data system in which permit and facility records are kept. EPA's Facility Registry System (FRS) links all program database records (such as permit IDs and IDs facilities use in reporting to EPA) together. The following list describes the individual data systems that are linked to from the detailed facility report: 
  * Ea5yrFlag **required** `string`: Indicates if the facility has a formal enforcement action within the last 5 years. 1 = Yes
  * EjscreenFlag **required** `string`: A Y/N indicator identifying whether or not the facility is within an Environmental Justice area.
  * EjscreenFlagUs **required** `string`: A Y/N indicator identifying whether or not the facility is within an Environmental Justice area.
  * FacCountyName **required** `string`: The facility county name from EPA's Facility Registry System
  * FacDerivedHuc **required** `string`: The 8-digit Hydrologic Unit Code (HUC) of the watershed in which the facility resides. A HUC number is assigned to every watershed in the nation and uniquely identifies the watershed.
  * FacDerivedTRIbes **required** `string`: The tribes or tribal territories located within 25 miles of the facility's location.
  * FacDerivedWBD **required** `string`: The Hydrologic Unit Code (HUC-12) of the waterbody in which the facility resides, derived based on location data in FRS.
  * FacDerivedWBDName **required** `string`: The 12 digit Watershed Boundary Dataset Name derived from the FRS Best Pick Coordinate
  * FacFIPSCode **required** `string`: The 2-digit Federal Information Processing Standards (FIPS) code to identify the county that a facility is located in.
  * FacFederalAgencyCode **required** `string`: Indicates the federal agency, as classified in FRS. Federal agencies are installations that are owned and operated by the U.S. government. The five-character code consists of a letter followed by four numbers. There are four possible letters that can occupy the first character position: C = Civilian Federal Agency; D = Department of Defense; E = Department of Energy; X = Unknown. The second and third characters represent the agency code, while the fourth and fifth characters represent the bureau code.
  * FacFederalAgencyName **required** `string`: Indicates the name of the federal agency, as classified in FRS. Federal agencies are installations that are owned and operated by the U.S. government.
  * FacIndianCntryFlg **required** `string`: Flag showing Y/N whether the facility is located in Indian Country.
  * FacIndianSpatialFlg **required** `string`: Returns “Y” if a facility is located within a tribal spatial boundary as defined by the U.S. Census Bureau 2010 tribal boundary layer data for tribes in the lower 48 states and Bureau of Land Management Alaska State Office data for native villages in Alaska. Returns “N” if a facility is not located within a tribal or native Alaskan village area.
  * FacLat **required** `string`: The latitude of the facility in decimal degrees expressed using the NAD83 horizontal datum. The coordinate comes from the FRS EPA Locational Reference Tables (LRT) file which represents the most accurate value for the facility based on the available spatial metadata.
  * FacLong **required** `string`: The longitude of the facility in decimal degrees expressed using the NAD83 horizontal datum. The coordinate comes from the FRS EPA Locational Reference Tables (LRT) file which represents the most accurate value for the facility based on the available spatial metadata.
  * FacMapFlg **required** `string`: Graphical indicator denoting whether geographical data required to map a facility are available.
  * FacMapIcon **required** `string`: The default map icon image file calculated for the facility by the ECHO program.
  * FacPercentMinority **required** `string`: Percent Minority is the percentage of the population of the given area that is considered minority. Statistics are shown for the area within a 3-mile radius of each facility.
  * FacPopulationDensity **required** `string`: The number of persons per square mile in the profiled area.
  * FacSICCodes **required** `string`: Indicates the facility’s or permit's primary Standard Industrial Classification (SIC) Code. The SIC code describes the primary activity of the facility.
  * FacStdCountyName **required** `string`: The standardized  facility county name from EPA's Facility Registry System
  * FacTRILandReleases **required** `string`
  * FacTRIOffSiteTransfers **required** `string`
  * FacTRIOnSiteReleases **required** `string`
  * FacTRIReporter **required** `string`: Indicates whether facility reported to the Toxics Release Inventory (TRI) for the most recent reporting year.
  * FacUsMexBorderFlg **required** `string`: A Y/N flag indicating that the facility is within 100KM of the US-Mexico Border.
  * Infea5yrFlag **required** `string`: Indicates if the facility has an informal enforcement action within the last 5 years. 1 = Yes.
  * Insp5yrFlag **required** `string`: Indicates if the facility has an inspection within the last 5 years. 1 = Yes
  * LastViolationDate **required** `string`
  * Lower48 **required** `string`: Flag showing Y/N whether location is within the contiguous (lower 48) United States.
  * Map **required** `string`: No Longer Used.
  * MaxPctileUs **required** `string`: The maximum percentile from all individual EJSCREEN indicators.
  * MaxScore **required** `string`: A sorting score for internal use.
  * ObjectId **required** `string`: Sequential number assigned to each facility or cluster returned.
  * OperatorCode **required** `string`
  * OperatorDesc **required** `string`
  * Over80CountUs **required** `string`: The number of primary EJSCREEN environmental justice (EJ) indexes exceeding the 80th or higher national percentile for the Census block group that the facility is located in.
  * OwnerCode **required** `string`
  * OwnerDesc **required** `string`: Description of Owner code
  * PctileCancerUs **required** `string`: The national percentile of the census block group for the EJSCREEN NATA air toxics cancer risk indicator.
  * PctileDpmUs **required** `string`: The national percentile of the census block group for the EJSCREEN diesel particulate matter indicator.
  * PctileO3Us **required** `string`: The national percentile of the census block group for the EJSCREEN ozone indicator.
  * PctilePctpre1960Us **required** `string`: The national percentile of the census block group for the EJSCREEN Lead paint indicator.
  * PctilePmUs **required** `string`: The national percentile of the census block group for the EJSCREEN particulate matter indicator.
  * PctileProximityNPDESUs **required** `string`: The national percentile of the census block group for the EJSCREEN proximity to major direct water dischargers indicator.
  * PctileProximityNplUs **required** `string`: The national percentile of the census block group for the EJSCREEN proximity to National Priorities List (NPL) sites indicator.
  * PctileProximityRmpUs **required** `string`: The national percentile of the census block group for the EJSCREEN proximity to Risk Management Plan (RMP) sites indicator.
  * PctileProximityTsdfUs **required** `string`: The national percentile of the census block group for the EJSCREEN proximity to Treatment Storage and Disposal Facilities (TSDFs) indicator.
  * PctileRespUs **required** `string`: The national percentile of the census block group for the EJSCREEN NATA respiratory hazard index indicator.
  * PctileTrafficScoreUs **required** `string`: The national percentile of the census block group for the EJSCREEN Traffic proximity and volume indicator.
  * RCRA3yrComplQtrsHistory **required** `string`: The system's 3-year compliance status history by quarter (3-month period) entered in the RCRA program database. Each character represents a quarter of compliance, going from oldest to most recent. Character values correspond to the following compliance statuses:
  * RCRACaseIDs **required** `string`
  * RCRACity **required** `string`
  * RCRAComplStatus **required** `string`
  * RCRACounty **required** `string`
  * RCRADaysLastInspection **required** `string`
  * RCRAEPARegion **required** `string`
  * RCRAFIPSCode **required** `string`
  * RCRAFeaCnt **required** `string`
  * RCRAIDs **required** `string`: A unique 12-character ID assigned for each record/permit/site/facility within the RCRAInfo database.
  * RCRAIeaCnt **required** `string`
  * RCRAImpWaterFlg **required** `string`
  * RCRAIndianCntryFlg **required** `string`
  * RCRAInspCnt **required** `string`
  * RCRALandTypeCode **required** `string`
  * RCRALastFeaDate **required** `string`
  * RCRALastFeaDateEPA **required** `string`
  * RCRALastFeaDateState **required** `string`
  * RCRALastIeaDate **required** `string`
  * RCRALastIeaDateEPA **required** `string`
  * RCRALastIeaDateState **required** `string`
  * RCRALastInspDateEPA **required** `string`
  * RCRALastInspDateState **required** `string`
  * RCRALastInspectionDate **required** `string`
  * RCRALastPenaltyDate **required** `string`: Indicates the date on which the most recent assessed (or final) penalty was taken against the facility, entered in the RCRAInfo program database.
  * RCRAMapIcon **required** `string`
  * RCRANAICS **required** `string`: The RCRA permit's primary North American Industry Classification System (NAICS) Code.
  * RCRAName **required** `string`
  * RCRAOldestOpenVioDate **required** `string`
  * RCRAPenalties **required** `string`: The total dollar amount of assessed (or final) penalties taken against the facility within the last five years, entered in the RCRAInfo program database.
  * RCRAQtrsWithNC **required** `string`: The number of quarters, out of the last twelve quarters, in which the RCRA permit is considered in violation.
  * RCRAQtrsWithSNC **required** `string`
  * RCRASNC **required** `string`
  * RCRAState **required** `string`
  * RCRAStateDistrict **required** `string`
  * RCRAStatus **required** `string`
  * RCRAStreet **required** `string`
  * RCRATRIbalLandCode **required** `string`
  * RCRAUniverse **required** `string`
  * RCRAViolationTypes **required** `string`
  * RCRAZip **required** `string`
  * RCRAinfoLandTypeCode **required** `string`
  * RCRAinfoLandTypeDesc **required** `string`
  * ReferencePoint **required** `string`: ??
  * RegistryID **required** `string`: An internal 12-digit Facility Registry Service (FRS) tracking number used to tie all facility data together in EPA regulatory program databases.
  * RmpIDs **required** `string`: A unique ID assigned to each facility submitting a Risk Management Plan to EPA under the Risk Management Plan Rule.
  * SDWAIDs **required** `string`: A unique 9-character ID assigned for each public water system within the Safe Drinking Water Information System (SDWIS).
  * Score **required** `string`
  * SemsIDs **required** `string`
  * SourceID **required** `string`: Unique Identifier assigned by EPA.
  * Statute **required** `string`: The name of the statute associated with each of the permits and identifiers linked to the facility: 
  * TRIIDs **required** `string`: A unique 15-character ID assigned for each facility within the Toxics Release Inventory (TRI) program. The format is ZZZZZNNNNNSSSSS, where ZZZZZ = ZIP code, NNNNN = the first 5 consonants of the name, and SSSSS = the first 5 non-blank non-special characters in the street address.
  * TRIbalFlag **required** `string`: A flag indicating that the facility is within a tribal area.
  * Tsdf **required** `string`
  * ViolFlag **required** `string`: Indicates if the facility had a violation within the last 3 years. 1 = Yes
  * WebDocs **required** `string`: Contains flags that identify what web accessible documents are available for the facility.

### rcra08
* rcra08 `object`: Results Object
  * BadSystemIDs **required** `string`: Identifies which passed query system identifiers are invalid.
  * CVRows **required** `string`: Summary count of the number of CWA facilities or SDWA public drinking water systems with current violations.
  * ClusterOutput [rcra06](#rcra06)
  * ClusterRecords `string`: Number of clusters returned.
  * FEARows **required** `string`: Summary count of the number of facilities with a formal enforcement action in the past five years
  * Facilities `array`: A complex array of facility information.
    * items [rcra07](#rcra07)
  * INSPRows **required** `string`: Number of facilities with insp_5yr_flag populated (CWP_DATE_LAST_INSPECTION)
  * IconBaseURL **required** `string`: URL where all the icons are located
  * IndianCountryRows **required** `string`: Number of facilities with tribal_flag populated
  * InfFEARows **required** `string`: Number of facilities with infea_5yr_flag populated (INFORMAL_ENF_ACT_COUNT > 0)
  * Message **required** `string`: Field to record messages (typically performance-related) about packet processing
  * PopUpBaseURL **required** `string`: Combine this URL with the PUC to get popup info
  * QueryID **required** `string`: Sequential number assigned to entire search result
  * QueryParameters **required** `array`: A list of submitted query parameters and their values.
    * items [qp0](#qp0)
  * QueryRows **required** `string`: Number of query results returned
  * SVRows **required** `string`: Number of facilities with curr_sv_flag populated (CWP_STATUS = "Significant Violation")
  * ServiceBaseURL **required** `string`: The base service URL.
  * TotalPenalties **required** `string`: The total dollar amount of either assessed or final penalties within the five year time period
  * V3Rows **required** `string`: Number of facilities having one or more quarters in non-compliance (QNC) in the last three years

### rcra09
* rcra09 `object`: GeoJSON Feature Object
  * geometry **required** [geo](#geo)
  * properties **required** [rcra10](#rcra10)
  * type **required** `string`: Static marker indicating object is a GeoJSON Feature.

### rcra10
* rcra10 `object`: GeoJSON Properties Object
  * AIRIDs **required** `string`: Air Facility System (AFS) ID.
  * ActiveLower48 **required** `string`: A Y/N indicator indicating that the facility is active and located within the lower 48 contiguous US States.
  * CWAIDs **required** `string`: A unique  ID assigned for each record/permit/site/facility within ICIS-NPDES. These identifiers are for used tracking purposes in the individual data systems.
  * CalculatedAccuracyMeters **required** `number`: Indicates the calculated accuracy in meters for the facilities geospatial coordinate.  Generally, the accuracy is directly linked to the collection method where GPS methods are more accurate that manual methods like map or photo interpolations.
  * CensusBlockGroup **required** `string`: A geographic unit used by the United States Census Bureau, generally defined to contain between 600 and 3,000 people.
  * ChemNamesRelLand **required** `string`: It is an aggregated field containing all the names found for the current reporting year (2017).
  * ChesapeakeBayFlag **required** `string`: Displays "Y" if the facility is located within the Chesapeake Bay watershed.
  * CleanupActionFlag **required** `string`
  * CollectionMethod **required** `string`: ??
  * CurrSvFlag **required** `number`: Indicates if the facility has a current significant violation. 1 = Yes
  * CurrVioFlag **required** `number`: Indicates if the facility has a current violation. 1 = Yes
  * CurrentVioCnt **required** `string`
  * DateLastRecordReview **required** `string`
  * EPASystem **required** `string`: The EPA data system in which permit and facility records are kept. EPA's Facility Registry System (FRS) links all program database records (such as permit IDs and IDs facilities use in reporting to EPA) together. The following list describes the individual data systems that are linked to from the detailed facility report: 
  * Ea5yrFlag **required** `number`: Indicates if the facility has a formal enforcement action within the last 5 years. 1 = Yes
  * EjscreenFlag **required** `string`: A Y/N indicator identifying whether or not the facility is within an Environmental Justice area.
  * EjscreenFlagUs **required** `string`: A Y/N indicator identifying whether or not the facility is within an Environmental Justice area.
  * FacCountyName **required** `string`: The facility county name from EPA's Facility Registry System
  * FacDerivedHuc **required** `string`: The 8-digit Hydrologic Unit Code (HUC) of the watershed in which the facility resides. A HUC number is assigned to every watershed in the nation and uniquely identifies the watershed.
  * FacDerivedTRIbes **required** `string`: The tribes or tribal territories located within 25 miles of the facility's location.
  * FacDerivedWBD **required** `string`: The Hydrologic Unit Code (HUC-12) of the waterbody in which the facility resides, derived based on location data in FRS.
  * FacDerivedWBDName **required** `string`: The 12 digit Watershed Boundary Dataset Name derived from the FRS Best Pick Coordinate
  * FacFIPSCode **required** `string`: The 2-digit Federal Information Processing Standards (FIPS) code to identify the county that a facility is located in.
  * FacFederalAgencyCode **required** `string`: Indicates the federal agency, as classified in FRS. Federal agencies are installations that are owned and operated by the U.S. government. The five-character code consists of a letter followed by four numbers. There are four possible letters that can occupy the first character position: C = Civilian Federal Agency; D = Department of Defense; E = Department of Energy; X = Unknown. The second and third characters represent the agency code, while the fourth and fifth characters represent the bureau code.
  * FacFederalAgencyName **required** `string`: Indicates the name of the federal agency, as classified in FRS. Federal agencies are installations that are owned and operated by the U.S. government.
  * FacIndianCntryFlg **required** `string`: Flag showing Y/N whether the facility is located in Indian Country.
  * FacIndianSpatialFlg **required** `string`: Returns “Y” if a facility is located within a tribal spatial boundary as defined by the U.S. Census Bureau 2010 tribal boundary layer data for tribes in the lower 48 states and Bureau of Land Management Alaska State Office data for native villages in Alaska. Returns “N” if a facility is not located within a tribal or native Alaskan village area.
  * FacMapFlg **required** `string`: Graphical indicator denoting whether geographical data required to map a facility are available.
  * FacMapIcon **required** `string`: The default map icon image file calculated for the facility by the ECHO program.
  * FacPercentMinority **required** `number`: Percent Minority is the percentage of the population of the given area that is considered minority. Statistics are shown for the area within a 3-mile radius of each facility.
  * FacPopulationDensity **required** `number`: The number of persons per square mile in the profiled area.
  * FacSICCodes **required** `string`: Indicates the facility’s or permit's primary Standard Industrial Classification (SIC) Code. The SIC code describes the primary activity of the facility.
  * FacStdCountyName **required** `string`: The standardized  facility county name from EPA's Facility Registry System
  * FacTRILandReleases **required** `string`
  * FacTRIOffSiteTransfers **required** `string`
  * FacTRIOnSiteReleases **required** `string`
  * FacTRIReporter **required** `string`: Indicates whether facility reported to the Toxics Release Inventory (TRI) for the most recent reporting year.
  * FacUsMexBorderFlg **required** `string`: A Y/N flag indicating that the facility is within 100KM of the US-Mexico Border.
  * Infea5yrFlag **required** `number`: Indicates if the facility has an informal enforcement action within the last 5 years. 1 = Yes.
  * Insp5yrFlag **required** `number`: Indicates if the facility has an inspection within the last 5 years. 1 = Yes
  * LastViolationDate **required** `string`
  * Lower48 **required** `string`: Flag showing Y/N whether location is within the contiguous (lower 48) United States.
  * Map **required** `string`: No Longer Used.
  * MaxPctileUs **required** `number`: The maximum percentile from all individual EJSCREEN indicators.
  * MaxScore **required** `number`: [Col. 121]
  * OperatorCode **required** `string`
  * OperatorDesc **required** `string`
  * Over80CountUs **required** `number`: The number of primary EJSCREEN environmental justice (EJ) indexes exceeding the 80th or higher national percentile for the Census block group that the facility is located in.
  * OwnerCode **required** `string`
  * OwnerDesc **required** `string`: Description of Owner code
  * PctileCancerUs **required** `number`: The national percentile of the census block group for the EJSCREEN NATA air toxics cancer risk indicator.
  * PctileDpmUs **required** `number`: The national percentile of the census block group for the EJSCREEN diesel particulate matter indicator.
  * PctileO3Us **required** `number`: The national percentile of the census block group for the EJSCREEN ozone indicator.
  * PctilePctpre1960Us **required** `number`: The national percentile of the census block group for the EJSCREEN Lead paint indicator.
  * PctilePmUs **required** `number`: The national percentile of the census block group for the EJSCREEN particulate matter indicator.
  * PctileProximityNPDESUs **required** `number`: The national percentile of the census block group for the EJSCREEN proximity to major direct water dischargers indicator.
  * PctileProximityNplUs **required** `number`: The national percentile of the census block group for the EJSCREEN proximity to National Priorities List (NPL) sites indicator.
  * PctileProximityRmpUs **required** `number`: The national percentile of the census block group for the EJSCREEN proximity to Risk Management Plan (RMP) sites indicator.
  * PctileProximityTsdfUs **required** `number`: The national percentile of the census block group for the EJSCREEN proximity to Treatment Storage and Disposal Facilities (TSDFs) indicator.
  * PctileRespUs **required** `number`: The national percentile of the census block group for the EJSCREEN NATA respiratory hazard index indicator.
  * PctileTrafficScoreUs **required** `number`: The national percentile of the census block group for the EJSCREEN Traffic proximity and volume indicator.
  * RCRA3yrComplQtrsHistory **required** `string`: The system's 3-year compliance status history by quarter (3-month period) entered in the RCRA program database. Each character represents a quarter of compliance, going from oldest to most recent. Character values correspond to the following compliance statuses:
  * RCRACaseIDs **required** `string`
  * RCRACity **required** `string`
  * RCRAComplStatus **required** `string`
  * RCRACounty **required** `string`
  * RCRADaysLastInspection **required** `number`
  * RCRAEPARegion **required** `string`
  * RCRAFIPSCode **required** `string`
  * RCRAFeaCnt **required** `number`
  * RCRAIDs **required** `string`: A unique 12-character ID assigned for each record/permit/site/facility within the RCRAInfo database.
  * RCRAIeaCnt **required** `number`
  * RCRAImpWaterFlg **required** `string`
  * RCRAIndianCntryFlg **required** `string`
  * RCRAInspCnt **required** `number`
  * RCRALandTypeCode **required** `string`
  * RCRALastFeaDate **required** `string`
  * RCRALastFeaDateEPA **required** `string`
  * RCRALastFeaDateState **required** `string`
  * RCRALastIeaDate **required** `string`
  * RCRALastIeaDateEPA **required** `string`
  * RCRALastIeaDateState **required** `string`
  * RCRALastInspDateEPA **required** `string`
  * RCRALastInspDateState **required** `string`
  * RCRALastInspectionDate **required** `string`
  * RCRALastPenaltyDate **required** `string`: Indicates the date on which the most recent assessed (or final) penalty was taken against the facility, entered in the RCRAInfo program database.
  * RCRAMapIcon **required** `string`
  * RCRANAICS **required** `string`: The RCRA permit's primary North American Industry Classification System (NAICS) Code.
  * RCRAName **required** `string`
  * RCRAOldestOpenVioDate **required** `string`
  * RCRAPenalties **required** `number`
  * RCRAQtrsWithNC **required** `number`
  * RCRAQtrsWithSNC **required** `number`
  * RCRASNC **required** `string`
  * RCRAState **required** `string`
  * RCRAStateDistrict **required** `string`
  * RCRAStatus **required** `string`
  * RCRAStreet **required** `string`
  * RCRATRIbalLandCode **required** `string`
  * RCRAUniverse **required** `string`
  * RCRAViolationTypes **required** `string`
  * RCRAZip **required** `string`
  * RCRAinfoLandTypeCode **required** `string`
  * RCRAinfoLandTypeDesc **required** `string`
  * ReferencePoint **required** `string`: ??
  * RegistryID **required** `string`: An internal 12-digit Facility Registry Service (FRS) tracking number used to tie all facility data together in EPA regulatory program databases.
  * RmpIDs **required** `string`: A unique ID assigned to each facility submitting a Risk Management Plan to EPA under the Risk Management Plan Rule.
  * SDWAIDs **required** `string`: A unique 9-character ID assigned for each public water system within the Safe Drinking Water Information System (SDWIS).
  * Score **required** `number`
  * SemsIDs **required** `string`
  * SourceID **required** `string`: Unique Identifier assigned by EPA.
  * Statute **required** `string`: The name of the statute associated with each of the permits and identifiers linked to the facility: 
  * TRIIDs **required** `string`: A unique 15-character ID assigned for each facility within the Toxics Release Inventory (TRI) program. The format is ZZZZZNNNNNSSSSS, where ZZZZZ = ZIP code, NNNNN = the first 5 consonants of the name, and SSSSS = the first 5 non-blank non-special characters in the street address.
  * TRIbalFlag **required** `number`: A value of "1" indicates that the facility is within an Indian Tribal or Alaskan Native Village area.
  * Tsdf **required** `string`
  * ViolFlag **required** `number`: Indicates if the facility had a violation within the last 3 years. 1 = Yes
  * WebDocs **required** `string`: Contains flags that identify what web accessible documents are available for the facility.

### rcra11
* rcra11 `object`: Map Data Object
  * FormalCount **required** `string`: The number of formal enforcement actions that have been taken against the facility
  * ICON **required** `string`: Name of each individual icon file within the URL base
  * InformalCount **required** `string`: The number of informal enforcement actions that have been taken against the facility
  * LAT **required** `string`: The latitude of the facility in degrees, to four decimal places
  * LON **required** `string`: The longitude of the facility in degrees, to four decimal places
  * LastInsp **required** `string`: The unique identifier for the last inspection
  * NAME **required** `string`: For DFR, this is the Facility name. The name corresponds to the TYPE value
  * PUV **required** `string`: Pop up value. Combine with PopUpBaseURL to give the popup for the facility
  * RCRAstatus **required** `string`: The facility's 3-year compliance status history by quarter (3-month period) entered in the RCRAInfo program database. Each character represents a quarter of compliance, going from oldest to most recent. Character values correspond to the following compliance statuses:
  * TYPE **required** `string`: For DFR, this is always facility

### rcra12
* rcra12 `object`: Map Output Object
  * IconBaseURL **required** `string`: URL where all the icons are located
  * MapData **required** `array`: An array of facility geospatial information.
    * items [rcra11](#rcra11)
  * PopUpBaseURL **required** `string`: Combine this URL with the PUC to get popup info
  * QueryID **required** `string`: Sequential number assigned to entire search result

### rcra13
* rcra13 `object`: Results Object
  * Facilities **required** `array`: A complex array of facility information.
    * items [rcra01](#rcra01)
  * Message **required** `string`: Field to record messages (typically performance-related) about packet processing
  * PageNo **required** `string`: The number of pages of results returned
  * QueryID **required** `string`: Sequential number assigned to entire search result
  * QueryRows **required** `string`: Number of query results returned


