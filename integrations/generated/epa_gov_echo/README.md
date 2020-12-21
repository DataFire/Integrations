# @datafire/epa_gov_echo

Client library for U.S. EPA Enforcement and Compliance History Online (ECHO) - All Data

## Installation and Usage
```bash
npm install --save @datafire/epa_gov_echo
```
```js
let epa_gov_echo = require('@datafire/epa_gov_echo').create();

.then(data => {
  console.log(data);
});
```

## Description

Enforcement and Compliance History Online (ECHO) is a tool developed and maintained by EPA's Office of Enforcement and Compliance Assurance for public use.  ECHO provides integrated compliance and enforcement information for over 1 million regulated facilities nationwide.
   ECHO Rest Services provide multiple service endpoints, each with specific capabilities, to search and retrieve data on facilities regulated as Clean Air Act (CAA) stationary sources, Clean Water Act (CWA) dischargers, Resource Conservation and Recovery Act (RCRA) hazardous waste generators/handlers, and Safe Drinking Water Act (SDWA) public water systems.  Data of interest from other EPA sources, such as the Toxics Release Inventory, is also supplied for context.  
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

### echo_rest_services.get_download.get
Based on the QID obtained from a get_facilities or get_facility_info query, return a comma separated value (CSV) file of the facilities found.


```js
epa_gov_echo.echo_rest_services.get_download.get({
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

### echo_rest_services.get_download.post
Based on the QID obtained from a get_facilities or get_facility_info query, return a comma separated value (CSV) file of the facilities found.


```js
epa_gov_echo.echo_rest_services.get_download.post({
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

### echo_rest_services.get_facilities.get
Validates query search parameters and returns query identifier.  Use the responseset parameter to set the page size


```js
epa_gov_echo.echo_rest_services.get_facilities.get({}, context)
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
  * p_ff `string` (values: Y): Federal Facility Indicator Flag. Enter Y to restrict searches to federal facilities.
  * p_act `string` (values: Y, N, A): Active Permits/Facilities Flag.  Provide Y or N to filter results to facilities with active permits.
  * p_maj `string` (values: Y, N): Major Facility Flag.  Enter Y to restrict results to Major facilities only.
  * p_mact `string`: CAA Maximum Achievable Control Technology (MACT) Subpart codes (alpha ID between 1 and 7 characters) applicable to the facility.
  * p_fea `string` (values: W, N): Formal Enforcement Actions [within / not within] specified date range indicator. The date range is determined by parameters p_fead1 and p_fead2 or by parameter p_feay.
  * p_feay `number` (values: 1, 2, 3, 4, 5): Years (1 to 5) Range.  This value is used to create a date range for Formal Enforcement Actions (FEA). Used along with p_fea (which indicates whether to look within or outside of the date range) to find FEAs within (or not within) the number of years specified.
  * p_feaa `string` (values: A, E, S): Agency associated with Formal Enforcement Actions:
  * p_feac `string`: Formal Enforcment Action Last Case Date Limiter Flag.  Enter a value of "Y" to additionally apply the p_feay year filter to the last formal enforcement action case date.  Use the p_fea parameter to control if the filter is within or outside the date span provided.
  * p_fea_5yr `string`: A Y value identifies facilities that have had a formal enforcement action within the last 5 years.
  * p_iea `string` (values: W, N): Informal Enforcement Actions [within / not within] specified date range.  The date range is determined by parameters p_iead1 and p_iead2 or by parameter p_ieay.
  * p_ieay `number` (values: 1, 2, 3, 4, 5): Years (1 to 5) Range.  This value is used to create a date range for Informal Enforcement Actions (IEA). Used along with p_iea (which indicates whether to look within or outside of the date range) to find IEAs within (or not within) the number of years specified.
  * p_ieaa `string` (values: E, S): Agency associated with Informal Enforcement Actions. If left blank, both agencies are included.
  * p_iea_5yr `string`: A Y value identifies facilities that have had an informal enforcement action within the last 5 years.
  * p_cs `number` (values: 2, 3, 4): Facility Compliance Limiter.  Enter 2, 3 or 4 to limit facilities returned.
  * p_qiv `string` (values: 0, GT1, GT2, GT4, GT8, 12): Quarters in Noncompliance Limiter.  Enter a coded value to limit results to facilities with given quarter of noncompliance.
  * p_naa `string`: Non-Attainment Area Flag.  Enter a Y or N to filter for or against facilities flagged as non-attainment areas.
  * p_impw `string` (values: Y, N): Discharging into Impaired Waters Flag. Enter Y to limit results to facilities with discharge to waterbodies listed as impaired in the ATTAINS database.
  * p_trep `string` (values: CURR, NOTCURR): Current Toxics Release Inventory (TRI) Reporter Limiter.  Enter one of the following codes to limit results.
  * p_ocr `string`: Toxics Release Inventory Pounds of On-Site Chemical Releases Limiter.  Enter a keyword to filter results.
  * p_oct `string` (values: Z, GT0, GT1000, GT5000, GT10000, GT20000, GT50000): Toxic Release Inventory Pounds of Off-Site Chemical Releases Limiter.  Enter a keyword to filter results.
  * p_pm `string` (values: NONE, GT5, GT10, GT25, GT50, GT75): Percent Minority Population Limiter.  Enter a value to restrict results to facilities with a given percentage of minority population within 3-mile radius.
  * p_pd `string` (values: NONE, GT100, GT500, GT1000, GT5000, GT10000, GT20000): Population Density Limiter (per sq mile). Enter a value to limit results to facilities located in area of a given population density.
  * p_ico `string` (values: Y, N): Indian Country Flag.  Enter a "Y" or "N" to restrict searches to facilities inside or outside Indian Country.
  * p_huc `string`: 2-, 4-, 6-, or 8-character watershed code. May contain multiple comma-separated values.
  * p_pid `string`: Nine-digit permit IDs. May contain up to 2000 comma-separated values.
  * p_med `string` (values: A, C, E, G, M, R, S, T, TSCA, W, ALL): Filter Results by Media.- A = Air- C = CAMD (Clean Air Markets Division)- E = EIS (Emissions Inventory Systems)- G = GHG (Greenhouse Gases)- M = RMP (Risk Management Plan)- R = RCRA (Hazardous Waste)- S = SDWA (Public Drinking Water Systems)- T = TRI (Toxic Release Inventory)- TSCA = TSCA (Toxic Substances Control Act)- W = Water- ALL = Air and Water and RCRA
  * p_istatute `string`: For use in identifying Facilities that have an inspection performed under the entered Statute.
  * p_ysl `string` (values: W, N, NV): Last Facility Inspection [within / not within] Specified Date Range Indicator. The date range is determined by parameters p_idt1 and p_idt2 or by parameter p_ysly.
  * p_ysly `number` (values: 1, 2, 3, 4, 5): Number of years (1 to 5) since last facility inspection.  A value of 1 means that it has been inspected within the year.
  * p_ysla `string` (values: E, S, A): Facility Last Inspection Code Filter.  If left blank, both agencies are included.  Enter a value to limit results:
  * p_qs `string`: Quick Search. Allows entry for city, state, and/or zip code.
  * p_sfs `string`: Single Facility Search Filter.  Provide a facility name or program system identifier to limit results.  For the all data search, the FRS registry identifier is also searched.
  * p_tribeid `number`: Numeric code for tribe (or list of tribes).
  * p_tribename `string`: Tribe Name Filter.  Enter a single tribe name to filter results.
  * p_tribedist `number`: Proximity to tribal land limiter. Enter an amount of mile between 0 and 25 to filter results.  This parameter is only evaluated if p_tribeid is populated.
  * p_wbd `string`: 2-, 4-, 6-, 8-, 10-, or 12-character watershed (WBD from the USGS Watershed Boundary Dataset). May contain multiple comma-separated values.  Uses the FRS Best Pick Coordinate to obtain the WBD12 Huc value.
  * p_fntype `string` (values: ALL, CONTAINS, EXACT, BEGINS): Controls type of text search performed on facility name with parameter p_fn.
  * p_icoo `string`: Indian country search and/or flag.  Enter "Y" to set indian country search conditions to return any results found using p_ico, p_fac_ico or p_fac_icoo.  Otherwise only results matching all provided p_ico, p_fac_ico or p_fac_icoo conditions will be returned.
  * p_fac_icos `string`: FRS tribal land spatial flag.  Enter "Y" or "N" to include or exclude facilities based on FRS tribal land spatial flag.
  * p_ejscreen `string`: Enter "Y" to limit facilities to Census block groups where one of more Environmental Justice indexes above 80th percentile.
  * p_limit_addr `string` (values: Y, N): Limit Address Search Flag.  Enter Y to restrict facility searches to native data source only.  
  * p_lat `number`: Latitude location in decimal degrees.
  * p_long `number`: Longitude location in decimal degrees.
  * p_radius `number`: Spatial Search Radius.  Enter a radius up to 100 miles in which to spatially search for facilities.
  * p_ejscreen_over80cnt `string` (values: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11): The number of Environmenmt Justice Indicators above the 80th percentile.  Valid values are 1 through 11.
  * p_agoo `string` (values: AND, OR): Indicates whether to AND or OR the Owner/Operator parameter (p_owop) and the federal agency code (p_fa) parameters.
  * p_neiu `string`
  * queryset `number`: Query Limiter.  Enter a value to limit the number of records returned for each query. Value cannot exceed 70,000.
  * responseset `number`: Response Set Limiter. Enter a value to limit the number of records per page. Value cannot exceed 1,000.
  * tablelist `string` (values: Y, N): Table List Flag. Enter a Y to display the first page of facility results.
  * maplist `string` (values: Y, N): Map List Flag.  Provide a Y to return mappable coordinates representing the full geographic extent of the queryset (all facilities that met the selection criteria).
  * summarylist `string` (values: Y, N): Summary List Flag.  Enter a Y to return a list of summary statistics based on the parameters submitted to the query service.
  * callback `string`: JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.
  * qcolumns `string`: Used to customize service output.  A list of comma-separated column IDs of output objects that will be returned in the service query object or download.  Use the metadata service endpoint for a complete list of Ids and definitions.

#### Output
* output `object`: Root Object
  * Results **required** [echo04](#echo04)

### echo_rest_services.get_facilities.post
Validates query search parameters and returns query identifier.  Use the responseset parameter to set the page size


```js
epa_gov_echo.echo_rest_services.get_facilities.post({}, context)
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
  * p_ff `string` (values: Y): Federal Facility Indicator Flag. Enter Y to restrict searches to federal facilities.
  * p_act `string` (values: Y, N, A): Active Permits/Facilities Flag.  Provide Y or N to filter results to facilities with active permits.
  * p_maj `string` (values: Y, N): Major Facility Flag.  Enter Y to restrict results to Major facilities only.
  * p_mact `string`: CAA Maximum Achievable Control Technology (MACT) Subpart codes (alpha ID between 1 and 7 characters) applicable to the facility.
  * p_fea `string` (values: W, N): Formal Enforcement Actions [within / not within] specified date range indicator. The date range is determined by parameters p_fead1 and p_fead2 or by parameter p_feay.
  * p_feay `number` (values: 1, 2, 3, 4, 5): Years (1 to 5) Range.  This value is used to create a date range for Formal Enforcement Actions (FEA). Used along with p_fea (which indicates whether to look within or outside of the date range) to find FEAs within (or not within) the number of years specified.
  * p_feaa `string` (values: A, E, S): Agency associated with Formal Enforcement Actions:
  * p_feac `string`: Formal Enforcment Action Last Case Date Limiter Flag.  Enter a value of "Y" to additionally apply the p_feay year filter to the last formal enforcement action case date.  Use the p_fea parameter to control if the filter is within or outside the date span provided.
  * p_fea_5yr `string`: A Y value identifies facilities that have had a formal enforcement action within the last 5 years.
  * p_iea `string` (values: W, N): Informal Enforcement Actions [within / not within] specified date range.  The date range is determined by parameters p_iead1 and p_iead2 or by parameter p_ieay.
  * p_ieay `number` (values: 1, 2, 3, 4, 5): Years (1 to 5) Range.  This value is used to create a date range for Informal Enforcement Actions (IEA). Used along with p_iea (which indicates whether to look within or outside of the date range) to find IEAs within (or not within) the number of years specified.
  * p_ieaa `string` (values: E, S): Agency associated with Informal Enforcement Actions. If left blank, both agencies are included.
  * p_iea_5yr `string`: A Y value identifies facilities that have had an informal enforcement action within the last 5 years.
  * p_cs `number` (values: 2, 3, 4): Facility Compliance Limiter.  Enter 2, 3 or 4 to limit facilities returned.
  * p_qiv `string` (values: 0, GT1, GT2, GT4, GT8, 12): Quarters in Noncompliance Limiter.  Enter a coded value to limit results to facilities with given quarter of noncompliance.
  * p_naa `string`: Non-Attainment Area Flag.  Enter a Y or N to filter for or against facilities flagged as non-attainment areas.
  * p_impw `string` (values: Y, N): Discharging into Impaired Waters Flag. Enter Y to limit results to facilities with discharge to waterbodies listed as impaired in the ATTAINS database.
  * p_trep `string` (values: CURR, NOTCURR): Current Toxics Release Inventory (TRI) Reporter Limiter.  Enter one of the following codes to limit results.
  * p_ocr `string`: Toxics Release Inventory Pounds of On-Site Chemical Releases Limiter.  Enter a keyword to filter results.
  * p_oct `string` (values: Z, GT0, GT1000, GT5000, GT10000, GT20000, GT50000): Toxic Release Inventory Pounds of Off-Site Chemical Releases Limiter.  Enter a keyword to filter results.
  * p_pm `string` (values: NONE, GT5, GT10, GT25, GT50, GT75): Percent Minority Population Limiter.  Enter a value to restrict results to facilities with a given percentage of minority population within 3-mile radius.
  * p_pd `string` (values: NONE, GT100, GT500, GT1000, GT5000, GT10000, GT20000): Population Density Limiter (per sq mile). Enter a value to limit results to facilities located in area of a given population density.
  * p_ico `string` (values: Y, N): Indian Country Flag.  Enter a "Y" or "N" to restrict searches to facilities inside or outside Indian Country.
  * p_huc `string`: 2-, 4-, 6-, or 8-character watershed code. May contain multiple comma-separated values.
  * p_pid `string`: Nine-digit permit IDs. May contain up to 2000 comma-separated values.
  * p_med `string` (values: A, C, E, G, M, R, S, T, TSCA, W, ALL): Filter Results by Media.- A = Air- C = CAMD (Clean Air Markets Division)- E = EIS (Emissions Inventory Systems)- G = GHG (Greenhouse Gases)- M = RMP (Risk Management Plan)- R = RCRA (Hazardous Waste)- S = SDWA (Public Drinking Water Systems)- T = TRI (Toxic Release Inventory)- TSCA = TSCA (Toxic Substances Control Act)- W = Water- ALL = Air and Water and RCRA
  * p_istatute `string`: For use in identifying Facilities that have an inspection performed under the entered Statute.
  * p_ysl `string` (values: W, N, NV): Last Facility Inspection [within / not within] Specified Date Range Indicator. The date range is determined by parameters p_idt1 and p_idt2 or by parameter p_ysly.
  * p_ysly `number` (values: 1, 2, 3, 4, 5): Number of years (1 to 5) since last facility inspection.  A value of 1 means that it has been inspected within the year.
  * p_ysla `string` (values: E, S, A): Facility Last Inspection Code Filter.  If left blank, both agencies are included.  Enter a value to limit results:
  * p_qs `string`: Quick Search. Allows entry for city, state, and/or zip code.
  * p_sfs `string`: Single Facility Search Filter.  Provide a facility name or program system identifier to limit results.  For the all data search, the FRS registry identifier is also searched.
  * p_tribeid `number`: Numeric code for tribe (or list of tribes).
  * p_tribename `string`: Tribe Name Filter.  Enter a single tribe name to filter results.
  * p_tribedist `number`: Proximity to tribal land limiter. Enter an amount of mile between 0 and 25 to filter results.  This parameter is only evaluated if p_tribeid is populated.
  * p_wbd `string`: 2-, 4-, 6-, 8-, 10-, or 12-character watershed (WBD from the USGS Watershed Boundary Dataset). May contain multiple comma-separated values.  Uses the FRS Best Pick Coordinate to obtain the WBD12 Huc value.
  * p_fntype `string` (values: ALL, CONTAINS, EXACT, BEGINS): Controls type of text search performed on facility name with parameter p_fn.
  * p_icoo `string`: Indian country search and/or flag.  Enter "Y" to set indian country search conditions to return any results found using p_ico, p_fac_ico or p_fac_icoo.  Otherwise only results matching all provided p_ico, p_fac_ico or p_fac_icoo conditions will be returned.
  * p_fac_icos `string`: FRS tribal land spatial flag.  Enter "Y" or "N" to include or exclude facilities based on FRS tribal land spatial flag.
  * p_ejscreen `string`: Enter "Y" to limit facilities to Census block groups where one of more Environmental Justice indexes above 80th percentile.
  * p_limit_addr `string` (values: Y, N): Limit Address Search Flag.  Enter Y to restrict facility searches to native data source only.  
  * p_lat `number`: Latitude location in decimal degrees.
  * p_long `number`: Longitude location in decimal degrees.
  * p_radius `number`: Spatial Search Radius.  Enter a radius up to 100 miles in which to spatially search for facilities.
  * p_ejscreen_over80cnt `string` (values: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11): The number of Environmenmt Justice Indicators above the 80th percentile.  Valid values are 1 through 11.
  * p_agoo `string` (values: AND, OR): Indicates whether to AND or OR the Owner/Operator parameter (p_owop) and the federal agency code (p_fa) parameters.
  * p_neiu `string`
  * queryset `number`: Query Limiter.  Enter a value to limit the number of records returned for each query. Value cannot exceed 70,000.
  * responseset `number`: Response Set Limiter. Enter a value to limit the number of records per page. Value cannot exceed 1,000.
  * tablelist `string` (values: Y, N): Table List Flag. Enter a Y to display the first page of facility results.
  * maplist `string` (values: Y, N): Map List Flag.  Provide a Y to return mappable coordinates representing the full geographic extent of the queryset (all facilities that met the selection criteria).
  * summarylist `string` (values: Y, N): Summary List Flag.  Enter a Y to return a list of summary statistics based on the parameters submitted to the query service.
  * callback `string`: JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.
  * qcolumns `string`: Used to customize service output.  A list of comma-separated column IDs of output objects that will be returned in the service query object or download.  Use the metadata service endpoint for a complete list of Ids and definitions.

#### Output
* output `object`: Root Object
  * Results **required** [echo04](#echo04)

### echo_rest_services.get_facility_info.get
Returns either an array of Facilities or an array of Clusters that meet the specified search criteria.


```js
epa_gov_echo.echo_rest_services.get_facility_info.get({}, context)
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
  * p_ff `string` (values: Y): Federal Facility Indicator Flag. Enter Y to restrict searches to federal facilities.
  * p_act `string` (values: Y, N, A): Active Permits/Facilities Flag.  Provide Y or N to filter results to facilities with active permits.
  * p_maj `string` (values: Y, N): Major Facility Flag.  Enter Y to restrict results to Major facilities only.
  * p_mact `string`: CAA Maximum Achievable Control Technology (MACT) Subpart codes (alpha ID between 1 and 7 characters) applicable to the facility.
  * p_fea `string` (values: W, N): Formal Enforcement Actions [within / not within] specified date range indicator. The date range is determined by parameters p_fead1 and p_fead2 or by parameter p_feay.
  * p_feay `number` (values: 1, 2, 3, 4, 5): Years (1 to 5) Range.  This value is used to create a date range for Formal Enforcement Actions (FEA). Used along with p_fea (which indicates whether to look within or outside of the date range) to find FEAs within (or not within) the number of years specified.
  * p_feaa `string` (values: A, E, S): Agency associated with Formal Enforcement Actions:
  * p_feac `string`: Formal Enforcment Action Last Case Date Limiter Flag.  Enter a value of "Y" to additionally apply the p_feay year filter to the last formal enforcement action case date.  Use the p_fea parameter to control if the filter is within or outside the date span provided.
  * p_feac_5yr `string`
  * p_iea `string` (values: W, N): Informal Enforcement Actions [within / not within] specified date range.  The date range is determined by parameters p_iead1 and p_iead2 or by parameter p_ieay.
  * p_ieay `number` (values: 1, 2, 3, 4, 5): Years (1 to 5) Range.  This value is used to create a date range for Informal Enforcement Actions (IEA). Used along with p_iea (which indicates whether to look within or outside of the date range) to find IEAs within (or not within) the number of years specified.
  * p_ieaa `string` (values: E, S): Agency associated with Informal Enforcement Actions. If left blank, both agencies are included.
  * p_iea_5yr `string`: A Y value identifies facilities that have had an informal enforcement action within the last 5 years.
  * p_cs `number` (values: 2, 3, 4): Facility Compliance Limiter.  Enter 2, 3 or 4 to limit facilities returned.
  * p_qiv `string` (values: 0, GT1, GT2, GT4, GT8, 12): Quarters in Noncompliance Limiter.  Enter a coded value to limit results to facilities with given quarter of noncompliance.
  * p_naa `string`: Non-Attainment Area Flag.  Enter a Y or N to filter for or against facilities flagged as non-attainment areas.
  * p_impw `string` (values: Y, N): Discharging into Impaired Waters Flag. Enter Y to limit results to facilities with discharge to waterbodies listed as impaired in the ATTAINS database.
  * p_trep `string` (values: CURR, NOTCURR): Current Toxics Release Inventory (TRI) Reporter Limiter.  Enter one of the following codes to limit results.
  * p_ocr `string`: Toxics Release Inventory Pounds of On-Site Chemical Releases Limiter.  Enter a keyword to filter results.
  * p_oct `string` (values: Z, GT0, GT1000, GT5000, GT10000, GT20000, GT50000): Toxic Release Inventory Pounds of Off-Site Chemical Releases Limiter.  Enter a keyword to filter results.
  * p_pm `string` (values: NONE, GT5, GT10, GT25, GT50, GT75): Percent Minority Population Limiter.  Enter a value to restrict results to facilities with a given percentage of minority population within 3-mile radius.
  * p_pd `string` (values: NONE, GT100, GT500, GT1000, GT5000, GT10000, GT20000): Population Density Limiter (per sq mile). Enter a value to limit results to facilities located in area of a given population density.
  * p_ico `string` (values: Y, N): Indian Country Flag.  Enter a "Y" or "N" to restrict searches to facilities inside or outside Indian Country.
  * p_huc `string`: 2-, 4-, 6-, or 8-character watershed code. May contain multiple comma-separated values.
  * p_pid `string`: Nine-digit permit IDs. May contain up to 2000 comma-separated values.
  * p_med `string` (values: A, C, E, G, M, R, S, T, TSCA, W, ALL): Filter Results by Media.- A = Air- C = CAMD (Clean Air Markets Division)- E = EIS (Emissions Inventory Systems)- G = GHG (Greenhouse Gases)- M = RMP (Risk Management Plan)- R = RCRA (Hazardous Waste)- S = SDWA (Public Drinking Water Systems)- T = TRI (Toxic Release Inventory)- TSCA = TSCA (Toxic Substances Control Act)- W = Water- ALL = Air and Water and RCRA
  * p_istatute `string`: For use in identifying Facilities that have an inspection performed under the entered Statute.
  * p_ysl `string` (values: W, N, NV): Last Facility Inspection [within / not within] Specified Date Range Indicator. The date range is determined by parameters p_idt1 and p_idt2 or by parameter p_ysly.
  * p_ysly `number` (values: 1, 2, 3, 4, 5): Number of years (1 to 5) since last facility inspection.  A value of 1 means that it has been inspected within the year.
  * p_ysla `string` (values: E, S, A): Facility Last Inspection Code Filter.  If left blank, both agencies are included.  Enter a value to limit results:
  * p_qs `string`: Quick Search. Allows entry for city, state, and/or zip code.
  * p_sfs `string`: Single Facility Search Filter.  Provide a facility name or program system identifier to limit results.  For the all data search, the FRS registry identifier is also searched.
  * p_tribeid `number`: Numeric code for tribe (or list of tribes).
  * p_tribename `string`: Tribe Name Filter.  Enter a single tribe name to filter results.
  * p_tribedist `number`: Proximity to tribal land limiter. Enter an amount of mile between 0 and 25 to filter results.  This parameter is only evaluated if p_tribeid is populated.
  * p_wbd `string`: 2-, 4-, 6-, 8-, 10-, or 12-character watershed (WBD from the USGS Watershed Boundary Dataset). May contain multiple comma-separated values.  Uses the FRS Best Pick Coordinate to obtain the WBD12 Huc value.
  * p_fntype `string` (values: ALL, CONTAINS, EXACT, BEGINS): Controls type of text search performed on facility name with parameter p_fn.
  * p_icoo `string`: Indian country search and/or flag.  Enter "Y" to set indian country search conditions to return any results found using p_ico, p_fac_ico or p_fac_icoo.  Otherwise only results matching all provided p_ico, p_fac_ico or p_fac_icoo conditions will be returned.
  * p_fac_icos `string`: FRS tribal land spatial flag.  Enter "Y" or "N" to include or exclude facilities based on FRS tribal land spatial flag.
  * p_ejscreen `string`: Enter "Y" to limit facilities to Census block groups where one of more Environmental Justice indexes above 80th percentile.
  * p_limit_addr `string` (values: Y, N): Limit Address Search Flag.  Enter Y to restrict facility searches to native data source only.  
  * p_lat `number`: Latitude location in decimal degrees.
  * p_long `number`: Longitude location in decimal degrees.
  * p_radius `number`: Spatial Search Radius.  Enter a radius up to 100 miles in which to spatially search for facilities.
  * p_ejscreen_over80cnt `string` (values: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11): The number of Environmenmt Justice Indicators above the 80th percentile.  Valid values are 1 through 11.
  * p_agoo `string` (values: AND, OR): Indicates whether to AND or OR the Owner/Operator parameter (p_owop) and the federal agency code (p_fa) parameters.
  * p_neiu `string`
  * responseset `number`: Response Set Limiter. Enter a value to limit the number of records per page. Value cannot exceed 1,000.
  * callback `string`: JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.
  * qcolumns `string`: Used to customize service output.  A list of comma-separated column IDs of output objects that will be returned in the service query object or download.  Use the metadata service endpoint for a complete list of Ids and definitions.
  * p_pretty_print `number`: Optional flag to request GeoJSON formatted results to be pretty printed.  Only provide a numeric value when the output needs to be human readable as pretty printing has a performance cost.

#### Output
* output `object`: Root Object
  * Results **required** [echo08](#echo08)

### echo_rest_services.get_facility_info.post
Returns either an array of Facilities or an array of Clusters that meet the specified search criteria.


```js
epa_gov_echo.echo_rest_services.get_facility_info.post({}, context)
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
  * p_ff `string` (values: Y): Federal Facility Indicator Flag. Enter Y to restrict searches to federal facilities.
  * p_act `string` (values: Y, N, A): Active Permits/Facilities Flag.  Provide Y or N to filter results to facilities with active permits.
  * p_maj `string` (values: Y, N): Major Facility Flag.  Enter Y to restrict results to Major facilities only.
  * p_mact `string`: CAA Maximum Achievable Control Technology (MACT) Subpart codes (alpha ID between 1 and 7 characters) applicable to the facility.
  * p_fea `string` (values: W, N): Formal Enforcement Actions [within / not within] specified date range indicator. The date range is determined by parameters p_fead1 and p_fead2 or by parameter p_feay.
  * p_feay `number` (values: 1, 2, 3, 4, 5): Years (1 to 5) Range.  This value is used to create a date range for Formal Enforcement Actions (FEA). Used along with p_fea (which indicates whether to look within or outside of the date range) to find FEAs within (or not within) the number of years specified.
  * p_feaa `string` (values: A, E, S): Agency associated with Formal Enforcement Actions:
  * p_feac `string`: Formal Enforcment Action Last Case Date Limiter Flag.  Enter a value of "Y" to additionally apply the p_feay year filter to the last formal enforcement action case date.  Use the p_fea parameter to control if the filter is within or outside the date span provided.
  * p_feac_5yr `string`
  * p_iea `string` (values: W, N): Informal Enforcement Actions [within / not within] specified date range.  The date range is determined by parameters p_iead1 and p_iead2 or by parameter p_ieay.
  * p_ieay `number` (values: 1, 2, 3, 4, 5): Years (1 to 5) Range.  This value is used to create a date range for Informal Enforcement Actions (IEA). Used along with p_iea (which indicates whether to look within or outside of the date range) to find IEAs within (or not within) the number of years specified.
  * p_ieaa `string` (values: E, S): Agency associated with Informal Enforcement Actions. If left blank, both agencies are included.
  * p_iea_5yr `string`: A Y value identifies facilities that have had an informal enforcement action within the last 5 years.
  * p_cs `number` (values: 2, 3, 4): Facility Compliance Limiter.  Enter 2, 3 or 4 to limit facilities returned.
  * p_qiv `string` (values: 0, GT1, GT2, GT4, GT8, 12): Quarters in Noncompliance Limiter.  Enter a coded value to limit results to facilities with given quarter of noncompliance.
  * p_naa `string`: Non-Attainment Area Flag.  Enter a Y or N to filter for or against facilities flagged as non-attainment areas.
  * p_impw `string` (values: Y, N): Discharging into Impaired Waters Flag. Enter Y to limit results to facilities with discharge to waterbodies listed as impaired in the ATTAINS database.
  * p_trep `string` (values: CURR, NOTCURR): Current Toxics Release Inventory (TRI) Reporter Limiter.  Enter one of the following codes to limit results.
  * p_ocr `string`: Toxics Release Inventory Pounds of On-Site Chemical Releases Limiter.  Enter a keyword to filter results.
  * p_oct `string` (values: Z, GT0, GT1000, GT5000, GT10000, GT20000, GT50000): Toxic Release Inventory Pounds of Off-Site Chemical Releases Limiter.  Enter a keyword to filter results.
  * p_pm `string` (values: NONE, GT5, GT10, GT25, GT50, GT75): Percent Minority Population Limiter.  Enter a value to restrict results to facilities with a given percentage of minority population within 3-mile radius.
  * p_pd `string` (values: NONE, GT100, GT500, GT1000, GT5000, GT10000, GT20000): Population Density Limiter (per sq mile). Enter a value to limit results to facilities located in area of a given population density.
  * p_ico `string` (values: Y, N): Indian Country Flag.  Enter a "Y" or "N" to restrict searches to facilities inside or outside Indian Country.
  * p_huc `string`: 2-, 4-, 6-, or 8-character watershed code. May contain multiple comma-separated values.
  * p_pid `string`: Nine-digit permit IDs. May contain up to 2000 comma-separated values.
  * p_med `string` (values: A, C, E, G, M, R, S, T, TSCA, W, ALL): Filter Results by Media.- A = Air- C = CAMD (Clean Air Markets Division)- E = EIS (Emissions Inventory Systems)- G = GHG (Greenhouse Gases)- M = RMP (Risk Management Plan)- R = RCRA (Hazardous Waste)- S = SDWA (Public Drinking Water Systems)- T = TRI (Toxic Release Inventory)- TSCA = TSCA (Toxic Substances Control Act)- W = Water- ALL = Air and Water and RCRA
  * p_istatute `string`: For use in identifying Facilities that have an inspection performed under the entered Statute.
  * p_ysl `string` (values: W, N, NV): Last Facility Inspection [within / not within] Specified Date Range Indicator. The date range is determined by parameters p_idt1 and p_idt2 or by parameter p_ysly.
  * p_ysly `number` (values: 1, 2, 3, 4, 5): Number of years (1 to 5) since last facility inspection.  A value of 1 means that it has been inspected within the year.
  * p_ysla `string` (values: E, S, A): Facility Last Inspection Code Filter.  If left blank, both agencies are included.  Enter a value to limit results:
  * p_qs `string`: Quick Search. Allows entry for city, state, and/or zip code.
  * p_sfs `string`: Single Facility Search Filter.  Provide a facility name or program system identifier to limit results.  For the all data search, the FRS registry identifier is also searched.
  * p_tribeid `number`: Numeric code for tribe (or list of tribes).
  * p_tribename `string`: Tribe Name Filter.  Enter a single tribe name to filter results.
  * p_tribedist `number`: Proximity to tribal land limiter. Enter an amount of mile between 0 and 25 to filter results.  This parameter is only evaluated if p_tribeid is populated.
  * p_wbd `string`: 2-, 4-, 6-, 8-, 10-, or 12-character watershed (WBD from the USGS Watershed Boundary Dataset). May contain multiple comma-separated values.  Uses the FRS Best Pick Coordinate to obtain the WBD12 Huc value.
  * p_fntype `string` (values: ALL, CONTAINS, EXACT, BEGINS): Controls type of text search performed on facility name with parameter p_fn.
  * p_icoo `string`: Indian country search and/or flag.  Enter "Y" to set indian country search conditions to return any results found using p_ico, p_fac_ico or p_fac_icoo.  Otherwise only results matching all provided p_ico, p_fac_ico or p_fac_icoo conditions will be returned.
  * p_fac_icos `string`: FRS tribal land spatial flag.  Enter "Y" or "N" to include or exclude facilities based on FRS tribal land spatial flag.
  * p_ejscreen `string`: Enter "Y" to limit facilities to Census block groups where one of more Environmental Justice indexes above 80th percentile.
  * p_limit_addr `string` (values: Y, N): Limit Address Search Flag.  Enter Y to restrict facility searches to native data source only.  
  * p_lat `number`: Latitude location in decimal degrees.
  * p_long `number`: Longitude location in decimal degrees.
  * p_radius `number`: Spatial Search Radius.  Enter a radius up to 100 miles in which to spatially search for facilities.
  * p_ejscreen_over80cnt `string` (values: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11): The number of Environmenmt Justice Indicators above the 80th percentile.  Valid values are 1 through 11.
  * p_agoo `string` (values: AND, OR): Indicates whether to AND or OR the Owner/Operator parameter (p_owop) and the federal agency code (p_fa) parameters.
  * p_neiu `string`
  * responseset `number`: Response Set Limiter. Enter a value to limit the number of records per page. Value cannot exceed 1,000.
  * callback `string`: JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.
  * qcolumns `string`: Used to customize service output.  A list of comma-separated column IDs of output objects that will be returned in the service query object or download.  Use the metadata service endpoint for a complete list of Ids and definitions.
  * p_pretty_print `number`: Optional flag to request GeoJSON formatted results to be pretty printed.  Only provide a numeric value when the output needs to be human readable as pretty printing has a performance cost.

#### Output
* output `object`: Root Object
  * Results **required** [echo08](#echo08)

### echo_rest_services.get_geojson.get
Based on the QID obtained from a get_facilities or get_facility_info query, return GeoJSON of the facilities found.


```js
epa_gov_echo.echo_rest_services.get_geojson.get({
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
    * items [echo09](#echo09)
  * type **required** `string`: Static marker indicating object is a GeoJSON Feature Collection.

### echo_rest_services.get_geojson.post
Based on the QID obtained from a get_facilities or get_facility_info query, return GeoJSON of the facilities found.


```js
epa_gov_echo.echo_rest_services.get_geojson.post({
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
    * items [echo09](#echo09)
  * type **required** `string`: Static marker indicating object is a GeoJSON Feature Collection.

### echo_rest_services.get_info_clusters.get
Based on the QID obtained from a clustered get_facility_info query, download cluster facility information as either a CSV or GEOJSON file.


```js
epa_gov_echo.echo_rest_services.get_info_clusters.get({
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

### echo_rest_services.get_info_clusters.post
Based on the QID obtained from a clustered get_facility_info query, download cluster facility information as either a CSV or GEOJSON file.


```js
epa_gov_echo.echo_rest_services.get_info_clusters.post({
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

### echo_rest_services.get_map.get
The purpose of the GET_MAP service is to display facility coordinates and facility clusters related to a get_facilities facility query. Currently, the maximum number of coordinates returned is 500. GET_MAP performs automatic clustering at the state, county, and zip code levels to maximize the number of coordinates returned.


```js
epa_gov_echo.echo_rest_services.get_map.get({
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
  * MapOutput **required** [echo02](#echo02)

### echo_rest_services.get_map.post
The purpose of the GET_MAP service is to display facility coordinates and facility clusters related to a get_facilities facility query. Currently, the maximum number of coordinates returned is 500. GET_MAP performs automatic clustering at the state, county, and zip code levels to maximize the number of coordinates returned.


```js
epa_gov_echo.echo_rest_services.get_map.post({
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
  * MapOutput **required** [echo02](#echo02)

### echo_rest_services.get_qid.get
GET_QID is passed with a query ID corresponding to a previously run get_facilities query. It then returns a Facility object containing all matching facilities. The main purpose of GET_QID is for large querysets that contain multiple pages (responsesets) of output. GET_QID allows for pagination and for the selection and sorting of columns. 


```js
epa_gov_echo.echo_rest_services.get_qid.get({
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
  * Results **required** [echo11](#echo11)

### echo_rest_services.get_qid.post
GET_QID is passed with a query ID corresponding to a previously run get_facilities query. It then returns a Facility object containing all matching facilities. The main purpose of GET_QID is for large querysets that contain multiple pages (responsesets) of output. GET_QID allows for pagination and for the selection and sorting of columns. 


```js
epa_gov_echo.echo_rest_services.get_qid.post({
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
  * Results **required** [echo11](#echo11)

### echo_rest_services.metadata.get
Returns the JSON Object Name and ColumnId for usage with the qcolumns parameter for get_qid, get_facility_info and other service endpoints.


```js
epa_gov_echo.echo_rest_services.metadata.get({}, context)
```

#### Input
* input `object`
  * output `string` (values: JSONP, JSON, XML): Output Format Flag.  Enter one of the following keywords:
  * callback `string`: JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.

#### Output
* output `object`: Root Object
  * Results **required** [meta1](#meta1)

### echo_rest_services.metadata.post
Returns the JSON Object Name and ColumnId for usage with the qcolumns parameter for get_qid, get_facility_info and other service endpoints.


```js
epa_gov_echo.echo_rest_services.metadata.post({}, context)
```

#### Input
* input `object`
  * output `string` (values: JSONP, JSON, XML): Output Format Flag.  Enter one of the following keywords:
  * callback `string`: JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.

#### Output
* output `object`: Root Object
  * Results **required** [meta1](#meta1)



## Definitions

### echo01
* echo01 `object`: Map Data Object
  * CAAstatus **required** `string`: The facility's 3-year compliance status history by quarter (3-month period). Each character represents a quarter of compliance, going from oldest to most recent. Character values correspond to the following compliance statuses:
  * CWAstatus **required** `string`: Quarterly compliance status for the most recent 13 quarters. Each letter indicates the compliance status for the corresponding quarter.
  * FormalCount **required** `string`: The number of formal enforcement actions that have been taken against the facility
  * ICON **required** `string`: Name of each individual icon file within the URL base
  * InformalCount **required** `string`: The number of informal enforcement actions that have been taken against the facility
  * LAT **required** `string`: The latitude of the facility in degrees, to four decimal places
  * LON **required** `string`: The longitude of the facility in degrees, to four decimal places
  * LastInsp **required** `string`: The unique identifier for the last inspection
  * NAME **required** `string`: For DFR, this is the Facility name. The name corresponds to the TYPE value
  * PUV **required** `string`: Pop up value. Combine with PopUpBaseURL to give the popup for the facility
  * RCRAstatus **required** `string`: The facility's 3-year compliance status history by quarter (3-month period) entered in the RCRAInfo program database. Each character represents a quarter of compliance, going from oldest to most recent. Character values correspond to the following compliance statuses:
  * SDWAstatus **required** `string`: The system's 3-year compliance status history by quarter (3-month period) entered in the SDWA program database. Each character represents a quarter of compliance, going from oldest to most recent. Character values correspond to the following compliance statuses:
  * TYPE **required** `string`: For DFR, this is always facility

### echo02
* echo02 `object`: Map Output Object
  * IconBaseURL **required** `string`: URL where all the icons are located
  * MapData **required** `array`: An array of facility geospatial information.
    * items [echo01](#echo01)
  * PopUpBaseURL **required** `string`: Combine this URL with the PUC to get popup info
  * QueryID **required** `string`: Sequential number assigned to entire search result

### echo03
* echo03 `object`: Facilities Object
  * AIRFlag **required** `string`: Indicates whether the facility has a Clean Air Act (CAA) permit.
  * AIRIDs **required** `string`: Air Facility System (AFS) ID.
  * ActiveLower48 **required** `string`: A Y/N indicator indicating that the facility is active and located within the lower 48 contiguous US States.
  * BiosolidsFlag **required** `string`: A Yes/No field to indicate permits with biosolids management and compliance information.
  * CAA3yrComplQtrsHistory **required** `string`: The facility's 3-year compliance status history by quarter (3-month period) entered in the CAA program database. Each character represents a quarter of compliance, going from oldest to most recent. Character values correspond to the following compliance statuses:
  * CAAComplianceStatus **required** `string`: An indication of the facility's compliance status under the Clean Air Act. When a source has a high priority violation (HPV), the specific type of HPV will be displayed. If more than one type applies to a source, this order of priority is used to determine which type appears:
  * CAADateLastFormalAction **required** `string`: The effective date of the most recent listed enforcement action entered into the CAA program database.
  * CAADaysLastEvaluation **required** `string`: The number of days since a CAA Full Compliance Evaluation (FCE) was completed.
  * CAAEvaluationCount **required** `string`: The number of inspections/compliance evaluations under the Clean Air Act, occurring at the facility within the last five years
  * CAAFormalActionCount **required** `string`: Indicates the number of enforcement actions taken against the facility within the last five years under the Clean Air Act.
  * CAAHpvFlag **required** `string`: The High Priority Violator (HPV) status for the facility during the most recent quarter reflects the time the records were extracted from the program data system. "Y" indicates the facility is in HPV for the permit or site in question and may pose a more severe level of environmental threat. "N" indicates the permit or site is not considered in HPV.
  * CAAInformalCount **required** `string`: Indicates the number of informal enforcement actions/notices of violations (NOVs) taken against the facility within the last five years under the Clean Air Act.
  * CAALastPenaltyAmt **required** `string`: The amount of the most recent penalty entered into the CAA program database.
  * CAALastPenaltyDate **required** `string`: The effective date of the most recent penalty entered into the CAA program database.
  * CAANAICS **required** `string`: The CAA permit's primary North American Industry Classification System (NAICS) Codes.
  * CAAPenalties **required** `string`: The total dollar amount of assessed (or final) penalties taken against the facility within the last five years under the Clean Air Act.
  * CAAPermitTypes **required** `string`: ICIS AIR Permit Types associated with the FRS Facility:
  * CAAQtrsWithNC **required** `string`: The number of quarters, out of the last twelve quarters, in which the CAA permit is considered in violation.
  * CAASICs **required** `string`: The CAA permit's primary Standard Industrial Classification (SIC) Codes.
  * CWA13qtrsComplHistory **required** `string`: The facility's 3-year compliance status history by quarter (3-month period) entered in the CWA program database. Each character represents a quarter of compliance, going from oldest to most recent. Character values correspond to the following compliance statuses:
  * CWA13qtrsEfflntExceedances **required** `string`: The number of effluent violations at the facility in the past 13 quarters.
  * CWA3YrQncrCodes **required** `string`: No longer used.  Will be deleted in nthe future.
  * CWAComplianceStatus **required** `string`: An indication of the facility's compliance status under the Clean Water Act. When a major source is in significant noncompliance (SNC) or a non-major source has a Category I violation, the specific type of SNC/Category I will be displayed. If more than one type applies to a facility, this order of priority is used to determine which code appears:
  * CWAComplianceTracking **required** `string`: The Compliance Tracking classifications which can assist in interpreting the facility's compliance status, particularly for non-major standard permittees.
  * CWADateLastFormalAction **required** `string`: The effective date of the most recent listed enforcement action entered into the CWA program database.
  * CWADaysLastInspection **required** `string`: The number of days since a CWA inspection was completed.
  * CWAFormalActionCount **required** `string`: Indicates the number of enforcement actions taken against the facility within the last five years under the Clean Water Act.
  * CWAInformalCount **required** `string`: Indicates the number of informal enforcement actions/notices of violations (NOVs) taken against the facility within the last five years under the Clean Water Act.
  * CWAInspectionCount **required** `string`: The number of inspections/compliance evaluations under the Clean Water Act, occurring at the facility within the last five years.
  * CWALastPenaltyAmt **required** `string`: The amount of the most recent penalty entered into the CWA program database.
  * CWALastPenaltyDate **required** `string`: The effective date of the most recent penalty entered into the CWA program database.
  * CWANAICS **required** `string`: The CWA permit's primary North American Industry Classification System (NAICS) Codes.
  * CWAPenalties **required** `string`: The total dollar amount of assessed (or final) penalties taken against the facility within the last five years under the Clean Water Act.
  * CWAPermitTypes **required** `string`: Indicates the facility's permit type or designation.
  * CWAQtrsWithNC **required** `string`: The number of quarters, out of the last twelve quarters, in which the CWA permit is considered in violation.
  * CWASICs **required** `string`: The CWA permit's primary Standard Industrial Classification (SIC) Codes.
  * CWASNCFlag **required** `string`: The CWA Significant Non-compliance (SNC) status for the facility during the most recent quarter reflects the time the records were extracted from the program data systems. "Y" indicates the facility is in SNC for the permit or site in question and may pose a more severe level of environmental threat. "N" indicates the permit or site is not considered in SNC.
  * CamdIDs **required** `string`: Facility identifiers for the Clean Air Markets Division database.
  * CensusBlockGroup **required** `string`: A geographic unit used by the United States Census Bureau, generally defined to contain between 600 and 3,000 people.
  * CurrSvFlag **required** `string`: Indicates if the facility has a current significant violation. 1 = Yes
  * CurrVioFlag **required** `string`: Indicates if the facility has a current violation. 1 = Yes
  * DfrUrl **required** `string`: The URL to the facility's Detailed Facility Report.
  * Ea5yrFlag **required** `string`: Indicates if the facility has a formal enforcement action within the last 5 years. 1 = Yes
  * EffChartsFlag **required** `string`
  * EisFlag **required** `string`: Indicates whether the facility reports to the Emissions Inventory System (EIS).
  * EisIDs **required** `string`: A unique ID assigned for each facility within EPA’s Emissions Inventory System (EIS) Database.
  * EjscreenFlag **required** `string`: A Y/N indicator identifying whether or not the facility is within an Environmental Justice area.
  * EjscreenFlagUs **required** `string`: A Y/N indicator identifying whether or not the facility is within an Environmental Justice area.
  * EpcraInspections5yr **required** `string`: From ICIS FE&C, the number of EPCRA inspections at the facility in the past five years.
  * Fac3yrComplianceHistory **required** `string`: The system's 3-year compliance status history by quarter (3-month period). Each character represents a quarter of compliance, going from oldest to most recent. Character values correspond to the following compliance statuses:
  * FacAccuracyMeters **required** `string`: The estimate of accuracy, in meters, based on provided spatial metadata and quality assurance routines for the provided facility coordinate.
  * FacActiveFlag **required** `string`: Indicates whether any of the associated ICIS-Air, ICIS-NPDES, RCRAInfo or SDWIS permits/facilities are in an active status.
  * FacChesapeakeBayFlg **required** `string`: Indicates whether the facility, based on the facility spatial coordinate, is within the Chesapeake Bay watershed.
  * FacCity **required** `string`: The city where the facility is located.
  * FacCollectionMethod **required** `string`: Indicates the collection method used (GPS, Photo Interpolation, Address Geocode, etc) to determine a facility's spatial coodinate.
  * FacComplianceStatus **required** `string`: An indication of the facility's known overall compliance status. Status codes include:
  * FacCounty **required** `string`: The county where the facility is located.
  * FacDateLastFormalActEPA **required** `string`: Indicates the effective date of the most recent listed formal enforcement action taken against the facility.
  * FacDateLastFormalActSt **required** `string`: The effective date of the most recent listed formal enforcement action taken against the facility by a state agency.
  * FacDateLastFormalAction **required** `string`: Indicates the effective date of the most recent listed enforcement action taken against the facility.
  * FacDateLastInformalActEPA **required** `string`: Indicates the effective date of the most recent listed informal enforcement action taken against the facility.
  * FacDateLastInformalActSt **required** `string`: The effective date of the most recent listed informal enforcement action taken against the facility by a state agency.
  * FacDateLastInformalAction **required** `string`: The date of the most recent informal action or NOV taken recorded in AFS, ICIS-NPDES, RCRA Info or SDWIS.
  * FacDateLastInspection **required** `string`: The date on which most recent inspection of the facility took place. For the Clean Air Act, the date on which a Full Inspection (FCE) was completed. This date may or may not correspond to an actual site visit. A series of partial on- or off-site inspections may have been conducted during the fiscal year as part of this FCE.
  * FacDateLastInspectionEPA **required** `string`: The date of the facility's last inspection.
  * FacDateLastInspectionState **required** `string`: The date on which the most recent "olfficial"  inspection of the facility by a state agency took place.
  * FacDateLastPenalty **required** `string`: Indicates the date on which the most recent assessed (or final) penalty was taken against the facility.
  * FacDaysLastInspection **required** `string`: The number of days from the last ECHO refresh to the date on which the most recent inspection of the facility took place based on data recorded into AFS, ICIS-NPDES, or RCRA Info.
  * FacDerivedCb2010 **required** `string`: The 2010 Census Block derived from the facility coordinate.
  * FacDerivedCd113 **required** `string`: The 113th Congressional District derived from the facility coordinate.
  * FacDerivedHuc **required** `string`: The 8-digit Hydrologic Unit Code (HUC) of the watershed in which the facility resides. A HUC number is assigned to every watershed in the nation and uniquely identifies the watershed.
  * FacDerivedRadWBDHu12 **required** `string`: The 12-digit Watershed Boundary Dataset code derived from Reach Indexing the facility's spatial coordinate against the 12 digit Watershed Boundary Dataset from USGS.
  * FacDerivedRadWBDHu12Name **required** `string`: The 12 digit Watershed Boundary Dataset name derived from Reach Indexing the facility's spatial coordinate against the 12 digit Watershed Boundary Dataset from USGS.
  * FacDerivedRadWBDHu8 **required** `string`: The 8-digit Watershed Hydrologic Unit Code (HUC) derived from Reach Indexing the facility's spatial coordinate against the 12 digit Watershed Boundary Dataset from USGS.
  * FacDerivedRadWBDHu8Name **required** `string`: The 8 digit watershed name derived from Reach Indexing the facility's spatial coordinate against the 12 digit Watershed Boundary Dataset from USGS.
  * FacDerivedStctyFIPS **required** `string`: The Federal Information Processing Standard (FIPS) code which uniquely identifies the state and county in which the facility is located.
  * FacDerivedTRIbes **required** `string`: The tribes or tribal territories located within 25 miles of the facility's location.
  * FacDerivedWBD **required** `string`: The Hydrologic Unit Code (HUC-12) of the waterbody in which the facility resides, derived based on location data in FRS.
  * FacDerivedWBDHu12Name **required** `string`: The Watershed Boundary Dataset name derived from the facility coordinate.
  * FacDerivedWBDHu8 **required** `string`: Spatially derived HUC based on the facility's geographic coordinates in FRS.
  * FacDerivedWBDHu8Name **required** `string`: The name of the hydrologic unit in which the facility is located within, derived spatially based on the facility's geographic coordinates in FRS.
  * FacDerivedZip **required** `string`: The ZIP Code derived from the facility coordinate.
  * FacEPARegion **required** `string`: The EPA region where the facility is located. EPA has 10 regional offices that execute programs within several states and territories
  * FacFIPSCode **required** `string`: The 2-digit Federal Information Processing Standards (FIPS) code to identify the county that a facility is located in.
  * FacFederalAgency **required** `string`: The facility's federal agency code.
  * FacFederalAgencyName **required** `string`: Indicates the name of the federal agency, as classified in FRS. Federal agencies are installations that are owned and operated by the U.S. government.
  * FacFederalFlg **required** `string`: Indicates whether the facility is part of a federal agency.
  * FacFormalActionCount **required** `string`: Indicates the total number of enforcement actions taken against the facility within the last five years. NA indicates that this measure is not applicable for facilities with no associated CAA, CWA, or RCRA permits
  * FacImpWaterFlg **required** `string`: Indicates whether or not the facility discharges directly into category 4 or 5 impaired water, as designated under section 303(d) of the Clean Water Act.
  * FacIndianCntryFlg **required** `string`: Flag showing Y/N whether the facility is located in Indian Country.
  * FacIndianSpatialFlg **required** `string`: Returns “Y” if a facility is located within a tribal spatial boundary as defined by the U.S. Census Bureau 2010 tribal boundary layer data for tribes in the lower 48 states and Bureau of Land Management Alaska State Office data for native villages in Alaska. Returns “N” if a facility is not located within a tribal or native Alaskan village area.
  * FacInformalCount **required** `string`: Indicates the total number of informal enforcement actions/notices of violations (NOVs) taken against the facility within the last five years
  * FacInspectionCount **required** `string`: The number of inspections/compliance evaluations that have occurred at the facility, under the AIR, CWA, and RCRA, within the last five years. The last 5 years will include data from the 20 most recently completed quarters, plus data from the current quarter up until the refresh date. This count only includes inspection types that are counted as inspections in official counts.
  * FacLastPenaltyAmt **required** `string`: Indicates the dollar amount of the most recent assessed (or final) penalty taken against the facility.
  * FacLat **required** `string`: The latitude of the facility in decimal degrees expressed using the NAD83 horizontal datum. The coordinate comes from the FRS EPA Locational Reference Tables (LRT) file which represents the most accurate value for the facility based on the available spatial metadata.
  * FacLong **required** `string`: The longitude of the facility in decimal degrees expressed using the NAD83 horizontal datum. The coordinate comes from the FRS EPA Locational Reference Tables (LRT) file which represents the most accurate value for the facility based on the available spatial metadata.
  * FacMajorFlag **required** `string`: Indicates whether the facility is designated as a “major” (usually a large facility).
  * FacMapFlg **required** `string`: Graphical indicator denoting whether geographical data required to map a facility are available.
  * FacMapIcon **required** `string`: The default map icon image file calculated for the facility by the ECHO program.
  * FacMyrtkUniverse **required** `string`: A 3-digit combination of Y/N flags indicating if the facility is considered a Right-to-Know Network (RTKNet) CAA (position 1), NPDES (position 2), or RCRA facility (position 3).
  * FacNAICSCodes **required** `string`: The facility's North American Industry Classification System (NAICS) Codes.
  * FacNaaFlag **required** `string`: Indicates whether the facility is located in a nonattainment area of the country, where air pollution levels persistently exceed the national ambient air quality standards. This flag does not indicate whether or not the facility has violated national ambient area quality standards.
  * FacName **required** `string`: Name of facility
  * FacPenaltyCount **required** `string`: The total number of penalties assessed (or final) taken against the facility within the last five years
  * FacPercentMinority **required** `string`: Percent Minority is the percentage of the population of the given area that is considered minority. Statistics are shown for the area within a 3-mile radius of each facility.
  * FacPopDen **required** `string`: The number of persons per square mile in the area being profiled. This field is the ratio of total persons (displayed in the Total Persons field) to total land area (displayed in the Land Area field).
  * FacProgramsWithSNC **required** `string`: The number of programs (CAA, CWA, SDWA, RCRA) related to the facility that have a current serious violation.
  * FacQtrsWithNC **required** `string`: The number of quarters, out of the last twelve quarters, in which the facility is considered in violation.
  * FacReferencePoint **required** `string`: A description of the location for the provided facility coordinate.
  * FacSICCodes **required** `string`: Indicates the facility’s or permit's primary Standard Industrial Classification (SIC) Code. The SIC code describes the primary activity of the facility.
  * FacSNCFlg **required** `string`: The Significant Non-compliance (SNC) status for the facility during the most recent quarter reflects the time the records were extracted from the program data systems. "Y" indicates the facility is in SNC for the permit or site in question and may pose a more severe level of environmental threat. "N" indicates the permit or site is not considered in SNC.
  * FacState **required** `string`: Facility state
  * FacStdCountyName **required** `string`: The standardized  facility county name from EPA's Facility Registry System
  * FacStreet **required** `string`: Street address where facility is located, as maintained by each data system. Certain data systems also maintain mailing address information, which is not used in this report. The street address may differ across EPA databases due to differences in reported information (e.g., use of mailing address), change in ownership, use of parent or subsidiary address, etc.
  * FacTotalPenalties **required** `string`: The total dollar amount of either assessed (or final) penalties taken against the facility within the last five years
  * FacUsMexBorderFlg **required** `string`: A Y/N flag indicating that the facility is within 100KM of the US-Mexico Border.
  * FacZip **required** `string`: Facility ZIP code
  * FecCaseIDs **required** `string`: All Case Numbers of Federal Enforcement Cases relating to the Facility from the ICIS System
  * FecLastCaseDate **required** `string`: The date of the latest Federal Enforcement Case related to this Facility in the ICIS system.
  * FecNumberOfCases **required** `string`: The total number of Federal Enforcement Cases in the last 5 years related to this Facility in the ICIS system.
  * FecTotalPenalties **required** `string`: The total Federal Enforcement Case penalties assessed against this facility in the last 5 years.
  * FifraInspections5yr **required** `string`: From ICIS FE&C, the number of FIFRA inspections at the facility in the past five years.
  * GHGCO2Releases **required** `string`: The sum of total release amounts of all linked Greenhouse Gas IDs reported as "metric tons of CO2 equivalents"
  * GHGFlag **required** `string`: Indicates whether the facility has a Greenhouse Gas (GHG) permit.
  * GHGIDs **required** `string`: A unique ID assigned for each facility within EPA’s Greenhouse Gas Reporting Program (GHGRP) Emissions Data Sets.
  * HasPollRpt **required** `string`: ???
  * Infea5yrFlag **required** `string`: Indicates if the facility has an informal enforcement action within the last 5 years. 1 = Yes.
  * Insp5yrFlag **required** `string`: Indicates if the facility has an inspection within the last 5 years. 1 = Yes
  * Lower48 **required** `string`: Flag showing Y/N whether location is within the contiguous (lower 48) United States.
  * MaxPctileUs **required** `string`: The maximum percentile from all individual EJSCREEN indicators.
  * MaxScore **required** `string`: A sorting score for internal use.
  * NC **required** `string`: Indicates whether or not the permit or site is considered either in Non-compliance (NC), Significant Non-compliance (SNC) or High Priority violation (HPV) status.
  * NPDESFlag **required** `string`: Indicates whether the facility has a Clean Water Act (CWA) permit.
  * NPDESIDs **required** `string`: Clean Water Act ID from the ICIS-NPDES (Integrated Compliance Information System - National Pollutant Discharge Elimination System)
  * NaaCategories **required** `string`: The nonattainment area categories that the facility is in, derived spatially based on the facility's geographic coordinates in FRS.�
  * NaaPollutants **required** `string`: All criteria pollutants that the facility is in nonattainment for.
  * Over80CountUs **required** `string`: The number of primary EJSCREEN environmental justice (EJ) indexes exceeding the 80th or higher national percentile for the Census block group that the facility is located in.
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
  * RCRAComplianceStatus **required** `string`: An indication of the facility's compliance status under the Resource Conservation and Recovery Act (Significant Violation = Significant Noncomplier, Noncompliance, or No Violation).
  * RCRADateLastFormalAction **required** `string`: The effective date of the most recent listed enforcement action entered into the RCRA program database.
  * RCRADaysLastEvaluation **required** `string`: The number of days since a RCRA inspection was completed.
  * RCRAFlag **required** `string`: Indicates whether the facility has a Resource Conservation and Recovery Action (RCRA) permit.
  * RCRAFormalActionCount **required** `string`: Indicates the number of enforcement actions taken against the facility within the last five years under the Resource Conservation and Recovery Act.
  * RCRAIDs **required** `string`: A unique 12-character ID assigned for each record/permit/site/facility within the RCRAInfo database.
  * RCRAInformalCount **required** `string`: Indicates the number of informal enforcement actions/notices of violations (NOVs) taken against the facility within the last five years under the Resource Conservation and Recovery Act.
  * RCRAInspectionCount **required** `string`: The number of inspections/compliance evaluations under the Resource Conservation and Recovery Act, occurring at the facility within the last five years
  * RCRALastPenaltyAmt **required** `string`: The amount of the most recent penalty entered into the RCRA program database.
  * RCRALastPenaltyDate **required** `string`: Indicates the date on which the most recent assessed (or final) penalty was taken against the facility, entered in the RCRAInfo program database.
  * RCRANAICS **required** `string`: The RCRA permit's primary North American Industry Classification System (NAICS) Code.
  * RCRAPenalties **required** `string`: The total dollar amount of assessed (or final) penalties taken against the facility within the last five years, entered in the RCRAInfo program database.
  * RCRAPermitTypes **required** `string`: RCRA Facility Types include:
  * RCRAQtrsWithNC **required** `string`: The number of quarters, out of the last twelve quarters, in which the RCRA permit is considered in violation.
  * RCRASNCFlag **required** `string`: The RCRA Significant Non-compliance (SNC) status for the facility during the most recent quarter reflects the time the records were extracted from the program data systems. "Y" indicates the facility is in SNC for the permit or site in question and may pose a more severe level of environmental threat. "N" indicates the permit or site is not considered in SNC.
  * RegistryID **required** `string`: An internal 12-digit Facility Registry Service (FRS) tracking number used to tie all facility data together in EPA regulatory program databases.
  * RmpIDs **required** `string`: A unique ID assigned to each facility submitting a Risk Management Plan to EPA under the Risk Management Plan Rule.
  * SDWA3yrComplQtrsHistory **required** `string`: The system's 3-year compliance status history by quarter (3-month period). Each character represents a quarter of compliance, going from oldest to most recent. Character values correspond to the following compliance statuses:
  * SDWAComplianceStatus **required** `string`: An indication of the facility's compliance status under the Safe Drinking Water Act (Serious Violator, Noncompliance, or No Violation).
  * SDWAFormalActionCount **required** `string`: Indicates the number of enforcement actions taken against the facility within the last five years under the Safe Drinking Water Act
  * SDWAIDs **required** `string`: A unique 9-character ID assigned for each public water system within the Safe Drinking Water Information System (SDWIS).
  * SDWAInformalCount **required** `string`: Indicates the number of informal enforcement actions/notices of violations (NOVs) taken against the facility within the last five years under the Safe Drinking Water Act
  * SDWAInspections5yr **required** `string`: The number of SDWA inspections at the facility in the past five years.
  * SDWAQtrsWithNC **required** `string`: The number of quarters, out of the last twelve quarters, in which the SDWA permit is considered in violation.
  * SDWASNCFlag **required** `string`: Indicates whether the Water System has a Serious Violation.
  * SDWASystemTypes **required** `string`: SDWIS System Types
  * SDWISFlag **required** `string`: Indicates whether the facility has a Safe Drinking Water Information System (SDWIS) ID.
  * Score **required** `string`
  * SemsFlag **required** `string`
  * SemsIDs **required** `string`
  * SourceID **required** `string`: Unique Identifier assigned by EPA.
  * TRIFlag **required** `string`: Indicates whether the facility has a Toxics Release Inventory (TRI) permit.
  * TRIIDs **required** `string`: A unique 15-character ID assigned for each facility within the Toxics Release Inventory (TRI) program. The format is ZZZZZNNNNNSSSSS, where ZZZZZ = ZIP code, NNNNN = the first 5 consonants of the name, and SSSSS = the first 5 non-blank non-special characters in the street address.
  * TRIOffSiteTransfers **required** `string`: Total pounds per year transferred off-site.
  * TRIOnSiteReleases **required** `string`: Total pounds per year released for Air Emissions, Surface Water Discharges, Underground Injections and Releases to Land.
  * TRIReleasesTransfers **required** `string`: Total chemical releases, in pounds, as reported to the Toxics Release Inventory (TRI) by the facility for the most recent reporting year
  * TRIReporter **required** `string`: Indicates whether or not the facility reported to the Toxics Release Inventory (TRI) for the most recent reporting year.
  * TRIReporterInPast **required** `string`: A 'Y' indicates a TRI Reporter from a prior year.
  * TRIbalFlag **required** `string`: A flag indicating that the facility is within a tribal area.
  * TscaFlag **required** `string`: Flag indicating whether or not a facility has a TSCA ID
  * TscaIDs **required** `string`: Toxic Substances Control Act ID assigned to a facility
  * TscaInspections5yr **required** `string`: From ICIS FE&C, the number of TSCA inspections at the facility in the past five years.
  * ViolFlag **required** `string`: Indicates if the facility had a violation within the last 3 years. 1 = Yes
  * WebDocs **required** `string`: Contains flags that identify what web accessible documents are available for the facility.

### echo04
* echo04 `object`: Results Object
  * BadSystemIDs **required** `string`: Identifies which passed query system identifiers are invalid.
  * CAARows **required** `string`: The number of facilities or cases within the result set that have Clean Air Act (CAA) permits.
  * CVRows **required** `string`: Summary count of the number of CWA facilities or SDWA public drinking water systems with current violations.
  * CWARows **required** `string`: The number of facilities or cases within the results set that have Clean Water Act (CWA) permits.
  * FEARows **required** `string`: Summary count of the number of facilities with a formal enforcement action in the past five years
  * Facilities `array`: A complex array of facility information.
    * items [echo03](#echo03)
  * INSPRows **required** `string`: Number of facilities with insp_5yr_flag populated (CWP_DATE_LAST_INSPECTION)
  * IndianCountryRows **required** `string`: Number of facilities with tribal_flag populated
  * InfFEARows **required** `string`: Number of facilities with infea_5yr_flag populated (INFORMAL_ENF_ACT_COUNT > 0)
  * MapOutput [echo02](#echo02)
  * Message **required** `string`: Field to record messages (typically performance-related) about packet processing
  * PageNo **required** `string`: The number of pages of results returned
  * QueryID **required** `string`: Sequential number assigned to entire search result
  * QueryRows **required** `string`: Number of query results returned
  * RCRRows **required** `string`: The number of facilities or cases within the results set that have Resource Conservation and Recovery Action (RCRA) permits.
  * SVRows **required** `string`: Number of facilities with curr_sv_flag populated (CWP_STATUS = "Significant Violation")
  * TRIRows **required** `string`: The number of facilities within the results set that have Toxics Release Inventory (TRI) permits.
  * TotalPenalties **required** `string`: The total dollar amount of either assessed or final penalties within the five year time period
  * V3Rows **required** `string`: Number of facilities having one or more quarters in non-compliance (QNC) in the last three years
  * Version **required** `string`: Version of the SDWA system service

### echo05
* echo05 `object`: Cluster Data Object
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

### echo06
* echo06 `object`: Cluster Output Object
  * ClusterData **required** `array`: An array of state, county, or zip code cluster information
    * items [echo05](#echo05)

### echo07
* echo07 `object`: Facilities Object
  * AIRFlag **required** `string`: Indicates whether the facility has a Clean Air Act (CAA) permit.
  * AIRIDs **required** `string`: Air Facility System (AFS) ID.
  * ActiveLower48 **required** `string`: A Y/N indicator indicating that the facility is active and located within the lower 48 contiguous US States.
  * BiosolidsFlag **required** `string`: A Yes/No field to indicate permits with biosolids management and compliance information.
  * CAA3yrComplQtrsHistory **required** `string`: The facility's 3-year compliance status history by quarter (3-month period) entered in the CAA program database. Each character represents a quarter of compliance, going from oldest to most recent. Character values correspond to the following compliance statuses:
  * CAAComplianceStatus **required** `string`: An indication of the facility's compliance status under the Clean Air Act. When a source has a high priority violation (HPV), the specific type of HPV will be displayed. If more than one type applies to a source, this order of priority is used to determine which type appears:
  * CAADateLastFormalAction **required** `string`: The effective date of the most recent listed enforcement action entered into the CAA program database.
  * CAADaysLastEvaluation **required** `string`: The number of days since a CAA Full Compliance Evaluation (FCE) was completed.
  * CAAEvaluationCount **required** `string`: The number of inspections/compliance evaluations under the Clean Air Act, occurring at the facility within the last five years
  * CAAFormalActionCount **required** `string`: Indicates the number of enforcement actions taken against the facility within the last five years under the Clean Air Act.
  * CAAHpvFlag **required** `string`: The High Priority Violator (HPV) status for the facility during the most recent quarter reflects the time the records were extracted from the program data system. "Y" indicates the facility is in HPV for the permit or site in question and may pose a more severe level of environmental threat. "N" indicates the permit or site is not considered in HPV.
  * CAAInformalCount **required** `string`: Indicates the number of informal enforcement actions/notices of violations (NOVs) taken against the facility within the last five years under the Clean Air Act.
  * CAALastPenaltyAmt **required** `string`: The amount of the most recent penalty entered into the CAA program database.
  * CAALastPenaltyDate **required** `string`: The effective date of the most recent penalty entered into the CAA program database.
  * CAANAICS **required** `string`: The CAA permit's primary North American Industry Classification System (NAICS) Codes.
  * CAAPenalties **required** `string`: The total dollar amount of assessed (or final) penalties taken against the facility within the last five years under the Clean Air Act.
  * CAAPermitTypes **required** `string`: ICIS AIR Permit Types associated with the FRS Facility:
  * CAAQtrsWithNC **required** `string`: The number of quarters, out of the last twelve quarters, in which the CAA permit is considered in violation.
  * CAASICs **required** `string`: The CAA permit's primary Standard Industrial Classification (SIC) Codes.
  * CWA13qtrsComplHistory **required** `string`: The facility's 3-year compliance status history by quarter (3-month period) entered in the CWA program database. Each character represents a quarter of compliance, going from oldest to most recent. Character values correspond to the following compliance statuses:
  * CWA13qtrsEfflntExceedances **required** `string`: The number of effluent violations at the facility in the past 13 quarters.
  * CWA3YrQncrCodes **required** `string`: No longer used.  Will be deleted in nthe future.
  * CWAComplianceStatus **required** `string`: An indication of the facility's compliance status under the Clean Water Act. When a major source is in significant noncompliance (SNC) or a non-major source has a Category I violation, the specific type of SNC/Category I will be displayed. If more than one type applies to a facility, this order of priority is used to determine which code appears:
  * CWAComplianceTracking **required** `string`: The Compliance Tracking classifications which can assist in interpreting the facility's compliance status, particularly for non-major standard permittees.
  * CWADateLastFormalAction **required** `string`: The effective date of the most recent listed enforcement action entered into the CWA program database.
  * CWADaysLastInspection **required** `string`: The number of days since a CWA inspection was completed.
  * CWAFormalActionCount **required** `string`: Indicates the number of enforcement actions taken against the facility within the last five years under the Clean Water Act.
  * CWAInformalCount **required** `string`: Indicates the number of informal enforcement actions/notices of violations (NOVs) taken against the facility within the last five years under the Clean Water Act.
  * CWAInspectionCount **required** `string`: The number of inspections/compliance evaluations under the Clean Water Act, occurring at the facility within the last five years.
  * CWALastPenaltyAmt **required** `string`: The amount of the most recent penalty entered into the CWA program database.
  * CWALastPenaltyDate **required** `string`: The effective date of the most recent penalty entered into the CWA program database.
  * CWANAICS **required** `string`: The CWA permit's primary North American Industry Classification System (NAICS) Codes.
  * CWAPenalties **required** `string`: The total dollar amount of assessed (or final) penalties taken against the facility within the last five years under the Clean Water Act.
  * CWAPermitTypes **required** `string`: Indicates the facility's permit type or designation.
  * CWAQtrsWithNC **required** `string`: The number of quarters, out of the last twelve quarters, in which the CWA permit is considered in violation.
  * CWASICs **required** `string`: The CWA permit's primary Standard Industrial Classification (SIC) Codes.
  * CWASNCFlag **required** `string`: The CWA Significant Non-compliance (SNC) status for the facility during the most recent quarter reflects the time the records were extracted from the program data systems. "Y" indicates the facility is in SNC for the permit or site in question and may pose a more severe level of environmental threat. "N" indicates the permit or site is not considered in SNC.
  * CamdIDs **required** `string`: Facility identifiers for the Clean Air Markets Division database.
  * CensusBlockGroup **required** `string`: A geographic unit used by the United States Census Bureau, generally defined to contain between 600 and 3,000 people.
  * CurrSvFlag **required** `string`: Indicates if the facility has a current significant violation. 1 = Yes
  * CurrVioFlag **required** `string`: Indicates if the facility has a current violation. 1 = Yes
  * DfrUrl **required** `string`: The URL to the facility's Detailed Facility Report.
  * Ea5yrFlag **required** `string`: Indicates if the facility has a formal enforcement action within the last 5 years. 1 = Yes
  * EffChartsFlag **required** `string`
  * EisFlag **required** `string`: Indicates whether the facility reports to the Emissions Inventory System (EIS).
  * EisIDs **required** `string`: A unique ID assigned for each facility within EPA’s Emissions Inventory System (EIS) Database.
  * EjscreenFlag **required** `string`: A Y/N indicator identifying whether or not the facility is within an Environmental Justice area.
  * EjscreenFlagUs **required** `string`: A Y/N indicator identifying whether or not the facility is within an Environmental Justice area.
  * EpcraInspections5yr **required** `string`: From ICIS FE&C, the number of EPCRA inspections at the facility in the past five years.
  * Fac3yrComplianceHistory **required** `string`: The system's 3-year compliance status history by quarter (3-month period). Each character represents a quarter of compliance, going from oldest to most recent. Character values correspond to the following compliance statuses:
  * FacAccuracyMeters **required** `string`: The estimate of accuracy, in meters, based on provided spatial metadata and quality assurance routines for the provided facility coordinate.
  * FacActiveFlag **required** `string`: Indicates whether any of the associated ICIS-Air, ICIS-NPDES, RCRAInfo or SDWIS permits/facilities are in an active status.
  * FacChesapeakeBayFlg **required** `string`: Indicates whether the facility, based on the facility spatial coordinate, is within the Chesapeake Bay watershed.
  * FacCity **required** `string`: The city where the facility is located.
  * FacCollectionMethod **required** `string`: Indicates the collection method used (GPS, Photo Interpolation, Address Geocode, etc) to determine a facility's spatial coodinate.
  * FacComplianceStatus **required** `string`: An indication of the facility's known overall compliance status. Status codes include:
  * FacCounty **required** `string`: The county where the facility is located.
  * FacDateLastFormalActEPA **required** `string`: Indicates the effective date of the most recent listed formal enforcement action taken against the facility.
  * FacDateLastFormalActSt **required** `string`: The effective date of the most recent listed formal enforcement action taken against the facility by a state agency.
  * FacDateLastFormalAction **required** `string`: Indicates the effective date of the most recent listed enforcement action taken against the facility.
  * FacDateLastInformalActEPA **required** `string`: Indicates the effective date of the most recent listed informal enforcement action taken against the facility.
  * FacDateLastInformalActSt **required** `string`: The effective date of the most recent listed informal enforcement action taken against the facility by a state agency.
  * FacDateLastInformalAction **required** `string`: The date of the most recent informal action or NOV taken recorded in AFS, ICIS-NPDES, RCRA Info or SDWIS.
  * FacDateLastInspection **required** `string`: The date on which most recent inspection of the facility took place. For the Clean Air Act, the date on which a Full Inspection (FCE) was completed. This date may or may not correspond to an actual site visit. A series of partial on- or off-site inspections may have been conducted during the fiscal year as part of this FCE.
  * FacDateLastInspectionEPA **required** `string`: The date of the facility's last inspection.
  * FacDateLastInspectionState **required** `string`: The date on which the most recent "olfficial"  inspection of the facility by a state agency took place.
  * FacDateLastPenalty **required** `string`: Indicates the date on which the most recent assessed (or final) penalty was taken against the facility.
  * FacDaysLastInspection **required** `string`: The number of days from the last ECHO refresh to the date on which the most recent inspection of the facility took place based on data recorded into AFS, ICIS-NPDES, or RCRA Info.
  * FacDerivedCb2010 **required** `string`: The 2010 Census Block derived from the facility coordinate.
  * FacDerivedCd113 **required** `string`: The 113th Congressional District derived from the facility coordinate.
  * FacDerivedHuc **required** `string`: The 8-digit Hydrologic Unit Code (HUC) of the watershed in which the facility resides. A HUC number is assigned to every watershed in the nation and uniquely identifies the watershed.
  * FacDerivedRadWBDHu12 **required** `string`: The 12-digit Watershed Boundary Dataset code derived from Reach Indexing the facility's spatial coordinate against the 12 digit Watershed Boundary Dataset from USGS.
  * FacDerivedRadWBDHu12Name **required** `string`: The 12 digit Watershed Boundary Dataset name derived from Reach Indexing the facility's spatial coordinate against the 12 digit Watershed Boundary Dataset from USGS.
  * FacDerivedRadWBDHu8 **required** `string`: The 8-digit Watershed Hydrologic Unit Code (HUC) derived from Reach Indexing the facility's spatial coordinate against the 12 digit Watershed Boundary Dataset from USGS.
  * FacDerivedRadWBDHu8Name **required** `string`: The 8 digit watershed name derived from Reach Indexing the facility's spatial coordinate against the 12 digit Watershed Boundary Dataset from USGS.
  * FacDerivedStctyFIPS **required** `string`: The Federal Information Processing Standard (FIPS) code which uniquely identifies the state and county in which the facility is located.
  * FacDerivedTRIbes **required** `string`: The tribes or tribal territories located within 25 miles of the facility's location.
  * FacDerivedWBD **required** `string`: The Hydrologic Unit Code (HUC-12) of the waterbody in which the facility resides, derived based on location data in FRS.
  * FacDerivedWBDHu12Name **required** `string`: The Watershed Boundary Dataset name derived from the facility coordinate.
  * FacDerivedWBDHu8 **required** `string`: Spatially derived HUC based on the facility's geographic coordinates in FRS.
  * FacDerivedWBDHu8Name **required** `string`: The name of the hydrologic unit in which the facility is located within, derived spatially based on the facility's geographic coordinates in FRS.
  * FacDerivedZip **required** `string`: The ZIP Code derived from the facility coordinate.
  * FacEPARegion **required** `string`: The EPA region where the facility is located. EPA has 10 regional offices that execute programs within several states and territories
  * FacFIPSCode **required** `string`: The 2-digit Federal Information Processing Standards (FIPS) code to identify the county that a facility is located in.
  * FacFederalAgency **required** `string`: The facility's federal agency code.
  * FacFederalAgencyName **required** `string`: Indicates the name of the federal agency, as classified in FRS. Federal agencies are installations that are owned and operated by the U.S. government.
  * FacFederalFlg **required** `string`: Indicates whether the facility is part of a federal agency.
  * FacFormalActionCount **required** `string`: Indicates the total number of enforcement actions taken against the facility within the last five years. NA indicates that this measure is not applicable for facilities with no associated CAA, CWA, or RCRA permits
  * FacImpWaterFlg **required** `string`: Indicates whether or not the facility discharges directly into category 4 or 5 impaired water, as designated under section 303(d) of the Clean Water Act.
  * FacIndianCntryFlg **required** `string`: Flag showing Y/N whether the facility is located in Indian Country.
  * FacIndianSpatialFlg **required** `string`: Returns “Y” if a facility is located within a tribal spatial boundary as defined by the U.S. Census Bureau 2010 tribal boundary layer data for tribes in the lower 48 states and Bureau of Land Management Alaska State Office data for native villages in Alaska. Returns “N” if a facility is not located within a tribal or native Alaskan village area.
  * FacInformalCount **required** `string`: Indicates the total number of informal enforcement actions/notices of violations (NOVs) taken against the facility within the last five years
  * FacInspectionCount **required** `string`: The number of inspections/compliance evaluations that have occurred at the facility, under the AIR, CWA, and RCRA, within the last five years. The last 5 years will include data from the 20 most recently completed quarters, plus data from the current quarter up until the refresh date. This count only includes inspection types that are counted as inspections in official counts.
  * FacLastPenaltyAmt **required** `string`: Indicates the dollar amount of the most recent assessed (or final) penalty taken against the facility.
  * FacLat **required** `string`: The latitude of the facility in decimal degrees expressed using the NAD83 horizontal datum. The coordinate comes from the FRS EPA Locational Reference Tables (LRT) file which represents the most accurate value for the facility based on the available spatial metadata.
  * FacLong **required** `string`: The longitude of the facility in decimal degrees expressed using the NAD83 horizontal datum. The coordinate comes from the FRS EPA Locational Reference Tables (LRT) file which represents the most accurate value for the facility based on the available spatial metadata.
  * FacMajorFlag **required** `string`: Indicates whether the facility is designated as a “major” (usually a large facility).
  * FacMapFlg **required** `string`: Graphical indicator denoting whether geographical data required to map a facility are available.
  * FacMapIcon **required** `string`: The default map icon image file calculated for the facility by the ECHO program.
  * FacMyrtkUniverse **required** `string`: A 3-digit combination of Y/N flags indicating if the facility is considered a Right-to-Know Network (RTKNet) CAA (position 1), NPDES (position 2), or RCRA facility (position 3).
  * FacNAICSCodes **required** `string`: The facility's North American Industry Classification System (NAICS) Codes.
  * FacNaaFlag **required** `string`: Indicates whether the facility is located in a nonattainment area of the country, where air pollution levels persistently exceed the national ambient air quality standards. This flag does not indicate whether or not the facility has violated national ambient area quality standards.
  * FacName **required** `string`: Name of facility
  * FacPenaltyCount **required** `string`: The total number of penalties assessed (or final) taken against the facility within the last five years
  * FacPercentMinority **required** `string`: Percent Minority is the percentage of the population of the given area that is considered minority. Statistics are shown for the area within a 3-mile radius of each facility.
  * FacPopDen **required** `string`: The number of persons per square mile in the area being profiled. This field is the ratio of total persons (displayed in the Total Persons field) to total land area (displayed in the Land Area field).
  * FacProgramsWithSNC **required** `string`: The number of programs (CAA, CWA, SDWA, RCRA) related to the facility that have a current serious violation.
  * FacQtrsWithNC **required** `string`: The number of quarters, out of the last twelve quarters, in which the facility is considered in violation.
  * FacReferencePoint **required** `string`: A description of the location for the provided facility coordinate.
  * FacSICCodes **required** `string`: Indicates the facility’s or permit's primary Standard Industrial Classification (SIC) Code. The SIC code describes the primary activity of the facility.
  * FacSNCFlg **required** `string`: The Significant Non-compliance (SNC) status for the facility during the most recent quarter reflects the time the records were extracted from the program data systems. "Y" indicates the facility is in SNC for the permit or site in question and may pose a more severe level of environmental threat. "N" indicates the permit or site is not considered in SNC.
  * FacState **required** `string`: Facility state
  * FacStdCountyName **required** `string`: The standardized  facility county name from EPA's Facility Registry System
  * FacStreet **required** `string`: Street address where facility is located, as maintained by each data system. Certain data systems also maintain mailing address information, which is not used in this report. The street address may differ across EPA databases due to differences in reported information (e.g., use of mailing address), change in ownership, use of parent or subsidiary address, etc.
  * FacTotalPenalties **required** `string`: The total dollar amount of either assessed (or final) penalties taken against the facility within the last five years
  * FacUsMexBorderFlg **required** `string`: A Y/N flag indicating that the facility is within 100KM of the US-Mexico Border.
  * FacZip **required** `string`: Facility ZIP code
  * FecCaseIDs **required** `string`: All Case Numbers of Federal Enforcement Cases relating to the Facility from the ICIS System
  * FecLastCaseDate **required** `string`: The date of the latest Federal Enforcement Case related to this Facility in the ICIS system.
  * FecNumberOfCases **required** `string`: The total number of Federal Enforcement Cases in the last 5 years related to this Facility in the ICIS system.
  * FecTotalPenalties **required** `string`: The total Federal Enforcement Case penalties assessed against this facility in the last 5 years.
  * FifraInspections5yr **required** `string`: From ICIS FE&C, the number of FIFRA inspections at the facility in the past five years.
  * GHGCO2Releases **required** `string`: The sum of total release amounts of all linked Greenhouse Gas IDs reported as "metric tons of CO2 equivalents"
  * GHGFlag **required** `string`: Indicates whether the facility has a Greenhouse Gas (GHG) permit.
  * GHGIDs **required** `string`: A unique ID assigned for each facility within EPA’s Greenhouse Gas Reporting Program (GHGRP) Emissions Data Sets.
  * HasPollRpt **required** `string`: ???
  * Infea5yrFlag **required** `string`: Indicates if the facility has an informal enforcement action within the last 5 years. 1 = Yes.
  * Insp5yrFlag **required** `string`: Indicates if the facility has an inspection within the last 5 years. 1 = Yes
  * Lower48 **required** `string`: Flag showing Y/N whether location is within the contiguous (lower 48) United States.
  * MaxPctileUs **required** `string`: The maximum percentile from all individual EJSCREEN indicators.
  * MaxScore **required** `string`: A sorting score for internal use.
  * NC **required** `string`: Indicates whether or not the permit or site is considered either in Non-compliance (NC), Significant Non-compliance (SNC) or High Priority violation (HPV) status.
  * NPDESFlag **required** `string`: Indicates whether the facility has a Clean Water Act (CWA) permit.
  * NPDESIDs **required** `string`: Clean Water Act ID from the ICIS-NPDES (Integrated Compliance Information System - National Pollutant Discharge Elimination System)
  * NaaCategories **required** `string`: The nonattainment area categories that the facility is in, derived spatially based on the facility's geographic coordinates in FRS.�
  * NaaPollutants **required** `string`: All criteria pollutants that the facility is in nonattainment for.
  * ObjectId **required** `string`: Sequential number assigned to each facility or cluster returned.
  * Over80CountUs **required** `string`: The number of primary EJSCREEN environmental justice (EJ) indexes exceeding the 80th or higher national percentile for the Census block group that the facility is located in.
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
  * RCRAComplianceStatus **required** `string`: An indication of the facility's compliance status under the Resource Conservation and Recovery Act (Significant Violation = Significant Noncomplier, Noncompliance, or No Violation).
  * RCRADateLastFormalAction **required** `string`: The effective date of the most recent listed enforcement action entered into the RCRA program database.
  * RCRADaysLastEvaluation **required** `string`: The number of days since a RCRA inspection was completed.
  * RCRAFlag **required** `string`: Indicates whether the facility has a Resource Conservation and Recovery Action (RCRA) permit.
  * RCRAFormalActionCount **required** `string`: Indicates the number of enforcement actions taken against the facility within the last five years under the Resource Conservation and Recovery Act.
  * RCRAIDs **required** `string`: A unique 12-character ID assigned for each record/permit/site/facility within the RCRAInfo database.
  * RCRAInformalCount **required** `string`: Indicates the number of informal enforcement actions/notices of violations (NOVs) taken against the facility within the last five years under the Resource Conservation and Recovery Act.
  * RCRAInspectionCount **required** `string`: The number of inspections/compliance evaluations under the Resource Conservation and Recovery Act, occurring at the facility within the last five years
  * RCRALastPenaltyAmt **required** `string`: The amount of the most recent penalty entered into the RCRA program database.
  * RCRALastPenaltyDate **required** `string`: Indicates the date on which the most recent assessed (or final) penalty was taken against the facility, entered in the RCRAInfo program database.
  * RCRANAICS **required** `string`: The RCRA permit's primary North American Industry Classification System (NAICS) Code.
  * RCRAPenalties **required** `string`: The total dollar amount of assessed (or final) penalties taken against the facility within the last five years, entered in the RCRAInfo program database.
  * RCRAPermitTypes **required** `string`: RCRA Facility Types include:
  * RCRAQtrsWithNC **required** `string`: The number of quarters, out of the last twelve quarters, in which the RCRA permit is considered in violation.
  * RCRASNCFlag **required** `string`: The RCRA Significant Non-compliance (SNC) status for the facility during the most recent quarter reflects the time the records were extracted from the program data systems. "Y" indicates the facility is in SNC for the permit or site in question and may pose a more severe level of environmental threat. "N" indicates the permit or site is not considered in SNC.
  * RegistryID **required** `string`: An internal 12-digit Facility Registry Service (FRS) tracking number used to tie all facility data together in EPA regulatory program databases.
  * RmpIDs **required** `string`: A unique ID assigned to each facility submitting a Risk Management Plan to EPA under the Risk Management Plan Rule.
  * SDWA3yrComplQtrsHistory **required** `string`: The system's 3-year compliance status history by quarter (3-month period). Each character represents a quarter of compliance, going from oldest to most recent. Character values correspond to the following compliance statuses:
  * SDWAComplianceStatus **required** `string`: An indication of the facility's compliance status under the Safe Drinking Water Act (Serious Violator, Noncompliance, or No Violation).
  * SDWAFormalActionCount **required** `string`: Indicates the number of enforcement actions taken against the facility within the last five years under the Safe Drinking Water Act
  * SDWAIDs **required** `string`: A unique 9-character ID assigned for each public water system within the Safe Drinking Water Information System (SDWIS).
  * SDWAInformalCount **required** `string`: Indicates the number of informal enforcement actions/notices of violations (NOVs) taken against the facility within the last five years under the Safe Drinking Water Act
  * SDWAInspections5yr **required** `string`: The number of SDWA inspections at the facility in the past five years.
  * SDWAQtrsWithNC **required** `string`: The number of quarters, out of the last twelve quarters, in which the SDWA permit is considered in violation.
  * SDWASNCFlag **required** `string`: Indicates whether the Water System has a Serious Violation.
  * SDWASystemTypes **required** `string`: SDWIS System Types
  * SDWISFlag **required** `string`: Indicates whether the facility has a Safe Drinking Water Information System (SDWIS) ID.
  * Score **required** `string`
  * SemsFlag **required** `string`
  * SemsIDs **required** `string`
  * SourceID **required** `string`: Unique Identifier assigned by EPA.
  * TRIFlag **required** `string`: Indicates whether the facility has a Toxics Release Inventory (TRI) permit.
  * TRIIDs **required** `string`: A unique 15-character ID assigned for each facility within the Toxics Release Inventory (TRI) program. The format is ZZZZZNNNNNSSSSS, where ZZZZZ = ZIP code, NNNNN = the first 5 consonants of the name, and SSSSS = the first 5 non-blank non-special characters in the street address.
  * TRIOffSiteTransfers **required** `string`: Total pounds per year transferred off-site.
  * TRIOnSiteReleases **required** `string`: Total pounds per year released for Air Emissions, Surface Water Discharges, Underground Injections and Releases to Land.
  * TRIReleasesTransfers **required** `string`: Total chemical releases, in pounds, as reported to the Toxics Release Inventory (TRI) by the facility for the most recent reporting year
  * TRIReporter **required** `string`: Indicates whether or not the facility reported to the Toxics Release Inventory (TRI) for the most recent reporting year.
  * TRIReporterInPast **required** `string`: A 'Y' indicates a TRI Reporter from a prior year.
  * TRIbalFlag **required** `string`: A flag indicating that the facility is within a tribal area.
  * TscaFlag **required** `string`: Flag indicating whether or not a facility has a TSCA ID
  * TscaIDs **required** `string`: Toxic Substances Control Act ID assigned to a facility
  * TscaInspections5yr **required** `string`: From ICIS FE&C, the number of TSCA inspections at the facility in the past five years.
  * ViolFlag **required** `string`: Indicates if the facility had a violation within the last 3 years. 1 = Yes
  * WebDocs **required** `string`: Contains flags that identify what web accessible documents are available for the facility.

### echo08
* echo08 `object`: Results Object
  * BadSystemIDs **required** `string`: Identifies which passed query system identifiers are invalid.
  * CAARows **required** `string`: The number of facilities or cases within the result set that have Clean Air Act (CAA) permits.
  * CVRows **required** `string`: Summary count of the number of CWA facilities or SDWA public drinking water systems with current violations.
  * CWARows **required** `string`: The number of facilities or cases within the results set that have Clean Water Act (CWA) permits.
  * ClusterOutput [echo06](#echo06)
  * ClusterRecords `string`: Number of clusters returned.
  * FEARows **required** `string`: Summary count of the number of facilities with a formal enforcement action in the past five years
  * Facilities `array`: A complex array of facility information.
    * items [echo07](#echo07)
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
  * RCRRows **required** `string`: The number of facilities or cases within the results set that have Resource Conservation and Recovery Action (RCRA) permits.
  * SVRows **required** `string`: Number of facilities with curr_sv_flag populated (CWP_STATUS = "Significant Violation")
  * ServiceBaseURL **required** `string`: The base service URL.
  * TRIRows **required** `string`: The number of facilities within the results set that have Toxics Release Inventory (TRI) permits.
  * TotalPenalties **required** `string`: The total dollar amount of either assessed or final penalties within the five year time period
  * V3Rows **required** `string`: Number of facilities having one or more quarters in non-compliance (QNC) in the last three years

### echo09
* echo09 `object`: GeoJSON Feature Object
  * geometry **required** [geo](#geo)
  * properties **required** [echo10](#echo10)
  * type **required** `string`: Static marker indicating object is a GeoJSON Feature.

### echo10
* echo10 `object`: GeoJSON Properties Object
  * AIRFlag **required** `string`: Indicates whether the facility has a Clean Air Act (CAA) permit.
  * AIRIDs **required** `string`: Air Facility System (AFS) ID.
  * ActiveLower48 **required** `string`: A Y/N indicator indicating that the facility is active and located within the lower 48 contiguous US States.
  * BiosolidsFlag **required** `string`: A Yes/No field to indicate permits with biosolids management and compliance information.
  * CAA3yrComplQtrsHistory **required** `string`: The facility's 3-year compliance status history by quarter (3-month period) entered in the CAA program database. Each character represents a quarter of compliance, going from oldest to most recent. Character values correspond to the following compliance statuses:
  * CAAComplianceStatus **required** `string`: An indication of the facility's compliance status under the Clean Air Act. When a source has a high priority violation (HPV), the specific type of HPV will be displayed. If more than one type applies to a source, this order of priority is used to determine which type appears:
  * CAADateLastFormalAction **required** `string`: The effective date of the most recent listed enforcement action entered into the CAA program database.
  * CAADaysLastEvaluation **required** `number`
  * CAAEvaluationCount **required** `string`: The number of inspections/compliance evaluations under the Clean Air Act, occurring at the facility within the last five years
  * CAAFormalActionCount **required** `string`: Indicates the number of enforcement actions taken against the facility within the last five years under the Clean Air Act.
  * CAAHpvFlag **required** `string`: The High Priority Violator (HPV) status for the facility during the most recent quarter reflects the time the records were extracted from the program data system. "Y" indicates the facility is in HPV for the permit or site in question and may pose a more severe level of environmental threat. "N" indicates the permit or site is not considered in HPV.
  * CAAInformalCount **required** `string`: Indicates the number of informal enforcement actions/notices of violations (NOVs) taken against the facility within the last five years under the Clean Air Act.
  * CAALastPenaltyAmt **required** `number`
  * CAALastPenaltyDate **required** `string`: The effective date of the most recent penalty entered into the CAA program database.
  * CAANAICS **required** `string`: The CAA permit's primary North American Industry Classification System (NAICS) Codes.
  * CAAPenalties **required** `string`: The total dollar amount of assessed (or final) penalties taken against the facility within the last five years under the Clean Air Act.
  * CAAPermitTypes **required** `string`: ICIS AIR Permit Types associated with the FRS Facility:
  * CAAQtrsWithNC **required** `number`
  * CAASICs **required** `string`: The CAA permit's primary Standard Industrial Classification (SIC) Codes.
  * CWA13qtrsComplHistory **required** `string`: The facility's 3-year compliance status history by quarter (3-month period) entered in the CWA program database. Each character represents a quarter of compliance, going from oldest to most recent. Character values correspond to the following compliance statuses:
  * CWA13qtrsEfflntExceedances **required** `number`: The number of effluent violations at the facility in the past 13 quarters.
  * CWA3YrQncrCodes **required** `string`: No longer used.  Will be deleted in nthe future.
  * CWAComplianceStatus **required** `string`: An indication of the facility's compliance status under the Clean Water Act. When a major source is in significant noncompliance (SNC) or a non-major source has a Category I violation, the specific type of SNC/Category I will be displayed. If more than one type applies to a facility, this order of priority is used to determine which code appears:
  * CWAComplianceTracking **required** `string`: The Compliance Tracking classifications which can assist in interpreting the facility's compliance status, particularly for non-major standard permittees.
  * CWADateLastFormalAction **required** `string`: The effective date of the most recent listed enforcement action entered into the CWA program database.
  * CWADaysLastInspection **required** `number`
  * CWAFormalActionCount **required** `string`: Indicates the number of enforcement actions taken against the facility within the last five years under the Clean Water Act.
  * CWAInformalCount **required** `number`: Indicates the number of informal enforcement actions/notices of violations (NOVs) taken against the facility within the last five years under the Clean Water Act.
  * CWAInspectionCount **required** `number`: The number of inspections/compliance evaluations under the Clean Water Act, occurring at the facility within the last five years.
  * CWALastPenaltyAmt **required** `string`: The amount of the most recent penalty entered into the CWA program database.
  * CWALastPenaltyDate **required** `string`: The effective date of the most recent penalty entered into the CWA program database.
  * CWANAICS **required** `string`: The CWA permit's primary North American Industry Classification System (NAICS) Codes.
  * CWAPenalties **required** `string`: The total dollar amount of assessed (or final) penalties taken against the facility within the last five years under the Clean Water Act.
  * CWAPermitTypes **required** `string`: Indicates the facility's permit type or designation.
  * CWAQtrsWithNC **required** `string`: The number of quarters, out of the last twelve quarters, in which the CWA permit is considered in violation.
  * CWASICs **required** `string`: The CWA permit's primary Standard Industrial Classification (SIC) Codes.
  * CWASNCFlag **required** `string`: The CWA Significant Non-compliance (SNC) status for the facility during the most recent quarter reflects the time the records were extracted from the program data systems. "Y" indicates the facility is in SNC for the permit or site in question and may pose a more severe level of environmental threat. "N" indicates the permit or site is not considered in SNC.
  * CamdIDs **required** `string`: Facility identifiers for the Clean Air Markets Division database.
  * CensusBlockGroup **required** `string`: A geographic unit used by the United States Census Bureau, generally defined to contain between 600 and 3,000 people.
  * CurrSvFlag **required** `number`: Indicates if the facility has a current significant violation. 1 = Yes
  * CurrVioFlag **required** `number`: Indicates if the facility has a current violation. 1 = Yes
  * DfrUrl **required** `string`: The URL to the facility's Detailed Facility Report.
  * Ea5yrFlag **required** `number`: Indicates if the facility has a formal enforcement action within the last 5 years. 1 = Yes
  * EffChartsFlag **required** `string`
  * EisFlag **required** `string`: Indicates whether the facility reports to the Emissions Inventory System (EIS).
  * EisIDs **required** `string`: A unique ID assigned for each facility within EPA’s Emissions Inventory System (EIS) Database.
  * EjscreenFlag **required** `string`: A Y/N indicator identifying whether or not the facility is within an Environmental Justice area.
  * EjscreenFlagUs **required** `string`: A Y/N indicator identifying whether or not the facility is within an Environmental Justice area.
  * EpcraInspections5yr **required** `string`: From ICIS FE&C, the number of EPCRA inspections at the facility in the past five years.
  * Fac3yrComplianceHistory **required** `string`: The system's 3-year compliance status history by quarter (3-month period). Each character represents a quarter of compliance, going from oldest to most recent. Character values correspond to the following compliance statuses:
  * FacAccuracyMeters **required** `number`
  * FacActiveFlag **required** `string`: Indicates whether any of the associated ICIS-Air, ICIS-NPDES, RCRAInfo or SDWIS permits/facilities are in an active status.
  * FacChesapeakeBayFlg **required** `string`: Indicates whether the facility, based on the facility spatial coordinate, is within the Chesapeake Bay watershed.
  * FacCity **required** `string`: The city where the facility is located.
  * FacCollectionMethod **required** `string`: Indicates the collection method used (GPS, Photo Interpolation, Address Geocode, etc) to determine a facility's spatial coodinate.
  * FacComplianceStatus **required** `string`: An indication of the facility's known overall compliance status. Status codes include:
  * FacCounty **required** `string`: The county where the facility is located.
  * FacDateLastFormalActEPA **required** `string`: Indicates the effective date of the most recent listed formal enforcement action taken against the facility.
  * FacDateLastFormalActSt **required** `string`: The effective date of the most recent listed formal enforcement action taken against the facility by a state agency.
  * FacDateLastFormalAction **required** `string`: Indicates the effective date of the most recent listed enforcement action taken against the facility.
  * FacDateLastInformalActEPA **required** `string`: Indicates the effective date of the most recent listed informal enforcement action taken against the facility.
  * FacDateLastInformalActSt **required** `string`: The effective date of the most recent listed informal enforcement action taken against the facility by a state agency.
  * FacDateLastInformalAction **required** `string`: The date of the most recent informal action or NOV taken recorded in AFS, ICIS-NPDES, RCRA Info or SDWIS.
  * FacDateLastInspection **required** `string`: The date on which most recent inspection of the facility took place. For the Clean Air Act, the date on which a Full Inspection (FCE) was completed. This date may or may not correspond to an actual site visit. A series of partial on- or off-site inspections may have been conducted during the fiscal year as part of this FCE.
  * FacDateLastInspectionEPA **required** `string`: The date of the facility's last inspection.
  * FacDateLastInspectionState **required** `string`: The date on which the most recent "olfficial"  inspection of the facility by a state agency took place.
  * FacDateLastPenalty **required** `string`: Indicates the date on which the most recent assessed (or final) penalty was taken against the facility.
  * FacDaysLastInspection **required** `number`: The number of days from the last ECHO refresh to the date on which the most recent inspection of the facility took place based on data recorded into AFS, ICIS-NPDES, or RCRA Info.
  * FacDerivedCb2010 **required** `string`: The 2010 Census Block derived from the facility coordinate.
  * FacDerivedCd113 **required** `string`: The 113th Congressional District derived from the facility coordinate.
  * FacDerivedHuc **required** `string`: The 8-digit Hydrologic Unit Code (HUC) of the watershed in which the facility resides. A HUC number is assigned to every watershed in the nation and uniquely identifies the watershed.
  * FacDerivedRadWBDHu12 **required** `string`: The 12-digit Watershed Boundary Dataset code derived from Reach Indexing the facility's spatial coordinate against the 12 digit Watershed Boundary Dataset from USGS.
  * FacDerivedRadWBDHu12Name **required** `string`: The 12 digit Watershed Boundary Dataset name derived from Reach Indexing the facility's spatial coordinate against the 12 digit Watershed Boundary Dataset from USGS.
  * FacDerivedRadWBDHu8 **required** `string`: The 8-digit Watershed Hydrologic Unit Code (HUC) derived from Reach Indexing the facility's spatial coordinate against the 12 digit Watershed Boundary Dataset from USGS.
  * FacDerivedRadWBDHu8Name **required** `string`: The 8 digit watershed name derived from Reach Indexing the facility's spatial coordinate against the 12 digit Watershed Boundary Dataset from USGS.
  * FacDerivedStctyFIPS **required** `string`: The Federal Information Processing Standard (FIPS) code which uniquely identifies the state and county in which the facility is located.
  * FacDerivedTRIbes **required** `string`: The tribes or tribal territories located within 25 miles of the facility's location.
  * FacDerivedWBD **required** `string`: The Hydrologic Unit Code (HUC-12) of the waterbody in which the facility resides, derived based on location data in FRS.
  * FacDerivedWBDHu12Name **required** `string`: The Watershed Boundary Dataset name derived from the facility coordinate.
  * FacDerivedWBDHu8 **required** `string`: Spatially derived HUC based on the facility's geographic coordinates in FRS.
  * FacDerivedWBDHu8Name **required** `string`: The name of the hydrologic unit in which the facility is located within, derived spatially based on the facility's geographic coordinates in FRS.
  * FacDerivedZip **required** `string`: The ZIP Code derived from the facility coordinate.
  * FacEPARegion **required** `string`: The EPA region where the facility is located. EPA has 10 regional offices that execute programs within several states and territories
  * FacFIPSCode **required** `string`: The 2-digit Federal Information Processing Standards (FIPS) code to identify the county that a facility is located in.
  * FacFederalAgency **required** `string`: The facility's federal agency code.
  * FacFederalAgencyName **required** `string`: Indicates the name of the federal agency, as classified in FRS. Federal agencies are installations that are owned and operated by the U.S. government.
  * FacFederalFlg **required** `string`: Indicates whether the facility is part of a federal agency.
  * FacFormalActionCount **required** `number`: Indicates the total number of enforcement actions taken against the facility within the last five years. NA indicates that this measure is not applicable for facilities with no associated CAA, CWA, or RCRA permits
  * FacImpWaterFlg **required** `string`: Indicates whether or not the facility discharges directly into category 4 or 5 impaired water, as designated under section 303(d) of the Clean Water Act.
  * FacIndianCntryFlg **required** `string`: Flag showing Y/N whether the facility is located in Indian Country.
  * FacIndianSpatialFlg **required** `string`: Returns “Y” if a facility is located within a tribal spatial boundary as defined by the U.S. Census Bureau 2010 tribal boundary layer data for tribes in the lower 48 states and Bureau of Land Management Alaska State Office data for native villages in Alaska. Returns “N” if a facility is not located within a tribal or native Alaskan village area.
  * FacInformalCount **required** `number`: Indicates the total number of informal enforcement actions/notices of violations (NOVs) taken against the facility within the last five years
  * FacInspectionCount **required** `number`: The number of inspections/compliance evaluations that have occurred at the facility, under the AIR, CWA, and RCRA, within the last five years. The last 5 years will include data from the 20 most recently completed quarters, plus data from the current quarter up until the refresh date. This count only includes inspection types that are counted as inspections in official counts.
  * FacLastPenaltyAmt **required** `number`: Indicates the dollar amount of the most recent assessed (or final) penalty taken against the facility.
  * FacMajorFlag **required** `string`: Indicates whether the facility is designated as a “major” (usually a large facility).
  * FacMapFlg **required** `string`: Graphical indicator denoting whether geographical data required to map a facility are available.
  * FacMapIcon **required** `string`: The default map icon image file calculated for the facility by the ECHO program.
  * FacMyrtkUniverse **required** `string`: A 3-digit combination of Y/N flags indicating if the facility is considered a Right-to-Know Network (RTKNet) CAA (position 1), NPDES (position 2), or RCRA facility (position 3).
  * FacNAICSCodes **required** `string`: The facility's North American Industry Classification System (NAICS) Codes.
  * FacNaaFlag **required** `string`: Indicates whether the facility is located in a nonattainment area of the country, where air pollution levels persistently exceed the national ambient air quality standards. This flag does not indicate whether or not the facility has violated national ambient area quality standards.
  * FacName **required** `string`: Name of facility
  * FacPenaltyCount **required** `number`: The total number of penalties assessed (or final) taken against the facility within the last five years
  * FacPercentMinority **required** `number`: Percent Minority is the percentage of the population of the given area that is considered minority. Statistics are shown for the area within a 3-mile radius of each facility.
  * FacPopDen **required** `number`: The number of persons per square mile in the area being profiled. This field is the ratio of total persons (displayed in the Total Persons field) to total land area (displayed in the Land Area field).
  * FacProgramsWithSNC **required** `number`
  * FacQtrsWithNC **required** `number`
  * FacReferencePoint **required** `string`: A description of the location for the provided facility coordinate.
  * FacSICCodes **required** `string`: Indicates the facility’s or permit's primary Standard Industrial Classification (SIC) Code. The SIC code describes the primary activity of the facility.
  * FacSNCFlg **required** `string`: The Significant Non-compliance (SNC) status for the facility during the most recent quarter reflects the time the records were extracted from the program data systems. "Y" indicates the facility is in SNC for the permit or site in question and may pose a more severe level of environmental threat. "N" indicates the permit or site is not considered in SNC.
  * FacState **required** `string`: Facility state
  * FacStdCountyName **required** `string`: The standardized  facility county name from EPA's Facility Registry System
  * FacStreet **required** `string`: Street address where facility is located, as maintained by each data system. Certain data systems also maintain mailing address information, which is not used in this report. The street address may differ across EPA databases due to differences in reported information (e.g., use of mailing address), change in ownership, use of parent or subsidiary address, etc.
  * FacTotalPenalties **required** `number`: The total dollar amount of either assessed (or final) penalties taken against the facility within the last five years
  * FacUsMexBorderFlg **required** `string`: A Y/N flag indicating that the facility is within 100KM of the US-Mexico Border.
  * FacZip **required** `string`: Facility ZIP code
  * FecCaseIDs **required** `string`: All Case Numbers of Federal Enforcement Cases relating to the Facility from the ICIS System
  * FecLastCaseDate **required** `string`: The date of the latest Federal Enforcement Case related to this Facility in the ICIS system.
  * FecNumberOfCases **required** `number`
  * FecTotalPenalties **required** `number`
  * FifraInspections5yr **required** `string`: From ICIS FE&C, the number of FIFRA inspections at the facility in the past five years.
  * GHGCO2Releases **required** `string`: The sum of total release amounts of all linked Greenhouse Gas IDs reported as "metric tons of CO2 equivalents"
  * GHGFlag **required** `string`: Indicates whether the facility has a Greenhouse Gas (GHG) permit.
  * GHGIDs **required** `string`: A unique ID assigned for each facility within EPA’s Greenhouse Gas Reporting Program (GHGRP) Emissions Data Sets.
  * HasPollRpt **required** `string`: ???
  * Infea5yrFlag **required** `number`: Indicates if the facility has an informal enforcement action within the last 5 years. 1 = Yes.
  * Insp5yrFlag **required** `number`: Indicates if the facility has an inspection within the last 5 years. 1 = Yes
  * Lower48 **required** `string`: Flag showing Y/N whether location is within the contiguous (lower 48) United States.
  * MaxPctileUs **required** `number`: The maximum percentile from all individual EJSCREEN indicators.
  * MaxScore **required** `number`: [Col. 121]
  * NC **required** `string`: Indicates whether or not the permit or site is considered either in Non-compliance (NC), Significant Non-compliance (SNC) or High Priority violation (HPV) status.
  * NPDESFlag **required** `string`: Indicates whether the facility has a Clean Water Act (CWA) permit.
  * NPDESIDs **required** `string`: Clean Water Act ID from the ICIS-NPDES (Integrated Compliance Information System - National Pollutant Discharge Elimination System)
  * NaaCategories **required** `string`: The nonattainment area categories that the facility is in, derived spatially based on the facility's geographic coordinates in FRS.�
  * NaaPollutants **required** `string`: All criteria pollutants that the facility is in nonattainment for.
  * Over80CountUs **required** `number`: The number of primary EJSCREEN environmental justice (EJ) indexes exceeding the 80th or higher national percentile for the Census block group that the facility is located in.
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
  * RCRAComplianceStatus **required** `string`: An indication of the facility's compliance status under the Resource Conservation and Recovery Act (Significant Violation = Significant Noncomplier, Noncompliance, or No Violation).
  * RCRADateLastFormalAction **required** `string`: The effective date of the most recent listed enforcement action entered into the RCRA program database.
  * RCRADaysLastEvaluation **required** `number`
  * RCRAFlag **required** `string`: Indicates whether the facility has a Resource Conservation and Recovery Action (RCRA) permit.
  * RCRAFormalActionCount **required** `string`: Indicates the number of enforcement actions taken against the facility within the last five years under the Resource Conservation and Recovery Act.
  * RCRAIDs **required** `string`: A unique 12-character ID assigned for each record/permit/site/facility within the RCRAInfo database.
  * RCRAInformalCount **required** `string`: Indicates the number of informal enforcement actions/notices of violations (NOVs) taken against the facility within the last five years under the Resource Conservation and Recovery Act.
  * RCRAInspectionCount **required** `number`: The number of inspections/compliance evaluations under the Resource Conservation and Recovery Act, occurring at the facility within the last five years
  * RCRALastPenaltyAmt **required** `string`: The amount of the most recent penalty entered into the RCRA program database.
  * RCRALastPenaltyDate **required** `string`: Indicates the date on which the most recent assessed (or final) penalty was taken against the facility, entered in the RCRAInfo program database.
  * RCRANAICS **required** `string`: The RCRA permit's primary North American Industry Classification System (NAICS) Code.
  * RCRAPenalties **required** `string`: The total dollar amount of assessed (or final) penalties taken against the facility within the last five years, entered in the RCRAInfo program database.
  * RCRAPermitTypes **required** `string`: RCRA Facility Types include:
  * RCRAQtrsWithNC **required** `number`
  * RCRASNCFlag **required** `string`: The RCRA Significant Non-compliance (SNC) status for the facility during the most recent quarter reflects the time the records were extracted from the program data systems. "Y" indicates the facility is in SNC for the permit or site in question and may pose a more severe level of environmental threat. "N" indicates the permit or site is not considered in SNC.
  * RegistryID **required** `string`: An internal 12-digit Facility Registry Service (FRS) tracking number used to tie all facility data together in EPA regulatory program databases.
  * RmpIDs **required** `string`: A unique ID assigned to each facility submitting a Risk Management Plan to EPA under the Risk Management Plan Rule.
  * SDWA3yrComplQtrsHistory **required** `string`: The system's 3-year compliance status history by quarter (3-month period). Each character represents a quarter of compliance, going from oldest to most recent. Character values correspond to the following compliance statuses:
  * SDWAComplianceStatus **required** `string`: An indication of the facility's compliance status under the Safe Drinking Water Act (Serious Violator, Noncompliance, or No Violation).
  * SDWAFormalActionCount **required** `string`: Indicates the number of enforcement actions taken against the facility within the last five years under the Safe Drinking Water Act
  * SDWAIDs **required** `string`: A unique 9-character ID assigned for each public water system within the Safe Drinking Water Information System (SDWIS).
  * SDWAInformalCount **required** `string`: Indicates the number of informal enforcement actions/notices of violations (NOVs) taken against the facility within the last five years under the Safe Drinking Water Act
  * SDWAInspections5yr **required** `string`: The number of SDWA inspections at the facility in the past five years.
  * SDWAQtrsWithNC **required** `string`: The number of quarters, out of the last twelve quarters, in which the SDWA permit is considered in violation.
  * SDWASNCFlag **required** `string`: Indicates whether the Water System has a Serious Violation.
  * SDWASystemTypes **required** `string`: SDWIS System Types
  * SDWISFlag **required** `string`: Indicates whether the facility has a Safe Drinking Water Information System (SDWIS) ID.
  * Score **required** `number`
  * SemsFlag **required** `string`
  * SemsIDs **required** `string`
  * SourceID **required** `string`: Unique Identifier assigned by EPA.
  * TRIFlag **required** `string`: Indicates whether the facility has a Toxics Release Inventory (TRI) permit.
  * TRIIDs **required** `string`: A unique 15-character ID assigned for each facility within the Toxics Release Inventory (TRI) program. The format is ZZZZZNNNNNSSSSS, where ZZZZZ = ZIP code, NNNNN = the first 5 consonants of the name, and SSSSS = the first 5 non-blank non-special characters in the street address.
  * TRIOffSiteTransfers **required** `number`
  * TRIOnSiteReleases **required** `number`
  * TRIReleasesTransfers **required** `number`: Total chemical releases, in pounds, as reported to the Toxics Release Inventory (TRI) by the facility for the most recent reporting year
  * TRIReporter **required** `string`: Indicates whether or not the facility reported to the Toxics Release Inventory (TRI) for the most recent reporting year.
  * TRIReporterInPast **required** `string`: A 'Y' indicates a TRI Reporter from a prior year.
  * TRIbalFlag **required** `number`: A value of "1" indicates that the facility is within an Indian Tribal or Alaskan Native Village area.
  * TscaFlag **required** `string`: Flag indicating whether or not a facility has a TSCA ID
  * TscaIDs **required** `string`: Toxic Substances Control Act ID assigned to a facility
  * TscaInspections5yr **required** `string`: From ICIS FE&C, the number of TSCA inspections at the facility in the past five years.
  * ViolFlag **required** `number`: Indicates if the facility had a violation within the last 3 years. 1 = Yes
  * WebDocs **required** `string`: Contains flags that identify what web accessible documents are available for the facility.

### echo11
* echo11 `object`: Results Object
  * Facilities **required** `array`: A complex array of facility information.
    * items [echo03](#echo03)
  * Message **required** `string`: Field to record messages (typically performance-related) about packet processing
  * PageNo **required** `string`: The number of pages of results returned
  * QueryID **required** `string`: Sequential number assigned to entire search result
  * QueryRows **required** `string`: Number of query results returned

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


