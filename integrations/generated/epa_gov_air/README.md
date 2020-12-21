# @datafire/epa_gov_air

Client library for U.S. EPA Enforcement and Compliance History Online (ECHO) - Clean Air Act

## Installation and Usage
```bash
npm install --save @datafire/epa_gov_air
```
```js
let epa_gov_air = require('@datafire/epa_gov_air').create();

.then(data => {
  console.log(data);
});
```

## Description

Enforcement and Compliance History Online (ECHO) is a tool developed and maintained by EPA's Office of Enforcement and Compliance Assurance for public use. ECHO provides integrated compliance and enforcement information for over 1 million regulated facilities nationwide.

Air Rest Services provides multiple service endpoints, each with specific capabilities, to search and retrieve data on facilities regulated under the Clean Air Act (CAA). The returned results reflect data drawn from EPA's ICIS-Air database.

The get_facilities, get_map, get_qid, and get_download end points are meant to be used together, while the enhanced get_facility_info end point is self contained.
The get_facility_info end point returns either an array of state, county or zip clusters with summary statistics per cluster or an array of facilities.

The recommended use scenario for get_facilities, get_qid, get_map, and get_downoad is:

<b>1)</b>  Use get_facilities to validate passed query parameters, obtain summary statistics and to obtain a query_id (QID).  QIDs are time sensitive and will be valid for approximately 30 minutes.
<b>2)</b>  Use get_qid, with the returned QID, to paginate through arrays of facility results.
<b>3)</b>  Use get_map, with the returned QID, to zoom in/out and pan on the clustered and individual facility coordinates that meet the QID query criteria.
<b>4)</b>  Use get_download, with the returned QID, to generate a Comma Separated Value (CSV) file of facility information that meets the QID query criteria.

Use the qcolumns parameter to customize your search results.  Use the Metadata service endpoint for a list of available output objects, their Column Ids, and their definitions to help you build your customized output. 

Additional ECHO Resources:   <a href="https://echo.epa.gov/tools/web-services">Web Services</a>, <a href="https://echo.epa.gov/resources/echo-data/about-the-data">About ECHO's Data</a>, <a href="https://echo.epa.gov/tools/data-downloads">Data Downloads</a>

## Actions

### air_rest_services.get_download.get
Based on the QID obtained from a get_facilities or get_facility_info query, return a comma sepated vaule (CSV) file of the facilities found.


```js
epa_gov_air.air_rest_services.get_download.get({
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

### air_rest_services.get_download.post
Based on the QID obtained from a get_facilities or get_facility_info query, return a comma sepated vaule (CSV) file of the facilities found.


```js
epa_gov_air.air_rest_services.get_download.post({
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

### air_rest_services.get_facilities.get
Validates query search parameters and returns query identifier.  Use the responseset parameter to set the page size


```js
epa_gov_air.air_rest_services.get_facilities.get({}, context)
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
  * p_lcon `string`: Air Program Local Control Region Code Filter.  Enter one or more local control region codes to filter results.  Provide multiple codes as a comma-delimited list.  Codes where they exist are specific by state.
  * p_frs `string`: Facility Registry Service ID Filter. Enter a single 12-digit FRS identifier to filter results.
  * p_reg `string` (values: 01, 02, 03, 04, 05, 06, 07, 08, 09, 10): EPA Region Filter. Provide a single value of 01 thru 10 to restrict results to a single EPA region.
  * p_sic `string`: Standard Industrial Classification (SIC) Code Filter.  Enter a single 4-digit SIC Code to filter results.  If more complex filtering is required, use p_sic2 and p_sic4.
  * p_ncs `string`: North American Industry Classification System Filter. Enter two to six digits to filter results to facilities having matching NAICS codes.  Digits less than six will match to all codes beginning with the provided values.
  * p_qnc `number`: Number of quarters in non-compliance limiter.  Enter an integer value between 1 and 4 to limit results.
  * p_pen `string`: Last Penality Date Qualifier Filter.  Enter one of the following:   
  * p_opst `string`: Operating status filter.  Enter one or more operating status codes to limit results.   Provide multiple codes as a comma-delimited list.
  * p_c1lat `number`: In decimal degrees.  Latitude of 1st corner of box that bounds the resulting facilities. The latitude and longitude of both corners of the bounding box must be provided.
  * p_c1lon `number`: In decimal degrees.  Longitude of 1st corner of box that bounds the resulting facilities. The latitude and longitude of both corners of the bounding box must be provided.
  * p_c2lat `number`: In decimal degrees.  Latitude of 2nd corner of box that bounds the resulting facilities. The latitude and longitude of both corners of the bounding box must be provided.
  * p_c2lon `number`: In decimal degrees.  Longitude of 2nd corner of box that bounds the resulting facilities. The latitude and longitude of both corners of the bounding box must be provided.
  * p_usmex `string` (values: Y, N): US-Mexico Border Flag.  Enter Y/N to restrict searches to facilities located within 100KM of the border.
  * p_sic2 `string`: Standard Industrial Classification (SIC) Code Filter Alternate 2. Enter a wild-card search against SIC codes.  A final wild-card is always present allowing "22" to match all SIC codes beginning with 22.  Use the "%" character within strings to match any SIC values with the pattern.  For example, "2%21" matches 2021, 2121, 2221, etc.
  * p_sic4 `string`: Standard Industrial Classification (SIC) Code Filter Alternate 3.  Enter the first 2, 3 or 4 SIC code digits to filter results to facilities having those code prefixes.  As this alternative does not utilize an index, p_sic2 will generally be quicker.
  * p_fa `string`: Federal Agency. 1 character or 5-character values; may contain multiple comma-separated values. ALL will retrieve all facilities where the federal agency code is not null.  Use the Federal Agencies lookup service to obtain a list of values.
  * p_act `string` (values: Y, N, A): Active Permits/Facilities Flag.  Provide Y or N to filter results to facilities with active permits.
  * p_maj `string` (values: Y, N): Major Facility Flag.  Enter Y to restrict results to Major facilities only.
  * p_mact `string`: CAA Maximum Achievable Control Technology (MACT) Subpart codes (alpha ID between 1 and 7 characters) applicable to the facility.
  * p_nsps `string`: Air Programl New Source Performance Standards (NSPS)  Subpart Code Search.  One or more valid Air Program NSPS Program codes cand be passed.  
  * p_nspsm `string`: Air Programl New Source Performance Standards Minors (NSPSM) Subpart Code Search.  One or more valid Air Program NSPSM Subpart codes can be passed.  
  * p_prog `string`: Air Program Code Filter.  Enter one or more Air program codes to filter results.  Provide multiple values as a comma-delimited list.
  * p_fea `string` (values: W, N): Formal Enforcement Actions [within / not within] specified date range indicator. The date range is determined by parameters p_fead1 and p_fead2 or by parameter p_feay.
  * p_feay `number` (values: 1, 2, 3, 4, 5): Years (1 to 5) Range.  This value is used to create a date range for Formal Enforcement Actions (FEA). Used along with p_fea (which indicates whether to look within or outside of the date range) to find FEAs within (or not within) the number of years specified.
  * p_feaa `string` (values: A, E, S): Agency associated with Formal Enforcement Actions:
  * p_iea `string` (values: W, N): Informal Enforcement Actions [within / not within] specified date range.  The date range is determined by parameters p_iead1 and p_iead2 or by parameter p_ieay.
  * p_ieay `number` (values: 1, 2, 3, 4, 5): Years (1 to 5) Range.  This value is used to create a date range for Informal Enforcement Actions (IEA). Used along with p_iea (which indicates whether to look within or outside of the date range) to find IEAs within (or not within) the number of years specified.
  * p_ieaa `string` (values: E, S): Agency associated with Informal Enforcement Actions. If left blank, both agencies are included.
  * p_qiv `string` (values: 0, GT1, GT2, GT4, GT8, 12): Quarters in Noncompliance Limiter.  Enter a coded value to limit results to facilities with given quarter of noncompliance.
  * p_naa `string`: Non-Attainment Area Flag.  Enter a Y or N to filter for or against facilities flagged as non-attainment areas.
  * p_impw `string` (values: Y, N): Discharging into Impaired Waters Flag. Enter Y to limit results to facilities with discharge to waterbodies listed as impaired in the ATTAINS database.
  * p_trep `string` (values: CURR, NOTCURR): Current Toxics Release Inventory (TRI) Reporter Limiter.  Enter one of the following codes to limit results.
  * p_tri_cat `string` (values: TOTAL, CARC, HAP): Toxic Release Inventory Released To Air Chemical Identifier Category Filter.  Enter the chemical identifier category code to limit results. Note when filtering by TRI chemical identifier categories one may not also filter by specific chemical identifiers via p_tri_pol.  You must also specify a release amount using p_tri_amt or p_tri_any_amt.
  * p_tri_amt `string` (values: 0, GT0, GT1000, GT5000, GT10000, GT50000): Toxic Release Inventory Release Amount Filter.  Enter a value in pounds to limit results to facilities releasing this amount or greateer of TRI releases.  Valid values are 0, GT0, GT1000, GT5000, GT10000 and GT50000. Note when filtering by TRI release amounts one may only use either p_tri_amt or p_tri_any_amt.
  * p_tri_any_amt `number`: Toxic Release Inventory Release Of Any Kind Above Value Filter.  Enter a value to limit results to facilities releasing this amount or more of TRI releases.  Note when filtering by TRI releases one may only use p_tri_any_amt or p_tri_amt and not both.
  * p_tri_pol `string`: Toxic Release Inventory Chemical Identifier Filter.  Enter one or more chemical identifier codes to limit results. Note when filtering by specific TRI chemical identifiers one may not also filter by chemical identifier categories via p_tri_cat.
  * p_ghg_cat `string` (values: ALL, BIOCO2, CH4, CO2, HFC, N2O, NF3, OTHER_L, PFC, SF6): Green House Gas (GHG) Gas Code Category.  Must be used with either a formatted (p_ghg_amt) or custom (p_ghg_any_amt) release amount.
  * p_ghg_amt `string` (values: None, 0, GT0, GT10000, GT25000, GT250000, GT1000000): Green House Gas (GHG) CO2 Equivalent Formatted Release Amount.  First 2 characters must contain GT (greater than) followed by a number.
  * p_ghg_any_amt `number`: Green House Gas (GHG) C02 Equivalent Custom Amount.  The C02E value reported for the provided category, will be greater or equal to the amount provided.
  * p_ghg_yr `string`: Green House Gas (GHG) Reporting Year. (2010 through 2015)
  * p_nei_pol `string`: National Emissions Inventory (NEI) Pollutant Identifier.  When a pollutant identifer is entered a corresponding formatted amount or custom amount must be entered.
  * p_nei_amt `string` (values: None, 0, GT0, GT10000, GT25000, GT250000, GT1000000): National Emissions Inventory (NEI) Formatted Pollutant Amount.  A formatted value where the 1st two characters must start with GT or LT followed by a number.  Identifies facilities that have a NEI Pollutant Emission  where the supplied value is > or < the pollutant emission amount.  
  * p_nei_any_amt `number`: National Emissions Inventory (NEI) Custom Pollutant Amount.  Only a number can be entered.  Identifies facilities with where the NEI Pollutant Emission Amount is greater than the number entered.
  * p_nei_yr `string`: National Emissions Inventory (NEI) year:  2014 or 2011
  * p_nei_cat `string`: National Emissions Inventory (NEI) Pollutant Category.  When a pollutant category is entered, a corresponding formatted pollutant amount or custom amount must be entered.
  * p_pm `string` (values: NONE, GT5, GT10, GT25, GT50, GT75): Percent Minority Population Limiter.  Enter a value to restrict results to facilities with a given percentage of minority population within 3-mile radius.
  * p_pd `string` (values: NONE, GT100, GT500, GT1000, GT5000, GT10000, GT20000): Population Density Limiter (per sq mile). Enter a value to limit results to facilities located in area of a given population density.
  * p_ico `string` (values: Y, N): Indian Country Flag.  Enter a "Y" or "N" to restrict searches to facilities inside or outside Indian Country.
  * p_huc `string`: 2-, 4-, 6-, or 8-character watershed code. May contain multiple comma-separated values.
  * p_wbd `string`: 2-, 4-, 6-, 8-, 10-, or 12-character watershed (WBD from the USGS Watershed Boundary Dataset). May contain multiple comma-separated values.  Uses the FRS Best Pick Coordinate to obtain the WBD12 Huc value.
  * p_pid `string`: Nine-digit permit IDs. May contain up to 2000 comma-separated values.
  * p_med `string` (values: M, R, S, W, ALL): Filter Results by Media.
  * p_ysl `string` (values: W, N, NV): Last Facility Inspection [within / not within] Specified Date Range Indicator. The date range is determined by parameters p_idt1 and p_idt2 or by parameter p_ysly.
  * p_ysly `number` (values: 1, 2, 3, 4, 5): Number of years (1 to 5) since last facility inspection.  A value of 1 means that it has been inspected within the year.
  * p_ysla `string` (values: E, S, A): Facility Last Inspection Code Filter.  If left blank, both agencies are included.  Enter a value to limit results:
  * p_stsl `string` (values: W, N): Last Stack Test [within / not within] Specified Date Range Indicator.
  * p_stsly `number` (values: 1, 2, 3, 4, 5): Number of years (1 to 5) since date of last stack test. A value of 1 means it has been inspected within the year.
  * p_stsla `string` (values: A, E, S): Stack Last Test Code Filter.  Enter a value to limit results:
  * p_stres `string`: Air Stack Test Status Description Filter.  Enter one or more test status descriptions to filter results.  Enter multiple values as a comma-delimited list.
  * p_sttyp `string`: Air Conductor Type Code Filter.  Enter one or more conductor type codes to filter results.  Provide multiple values as a comma-delimited list.
  * p_qs `string`: Quick Search. Allows entry for city, state, and/or zip code.
  * p_sfs `string`: Single Facility Search Filter.  Provide a facility name or program system identifier to limit results.  For the all data search, the FRS registry identifier is also searched.
  * p_tribeid `number`: Numeric code for tribe (or list of tribes).
  * p_tribename `string`: Tribe Name Filter.  Enter a single tribe name to filter results.
  * p_tribedist `number`: Proximity to tribal land limiter. Enter an amount of mile between 0 and 25 to filter results.  This parameter is only evaluated if p_tribeid is populated.
  * p_owop `string`: Owner/Operator code filter.  Enter one or more codes to limit results.
  * p_agoo `string` (values: AND, OR): Indicates whether to AND or OR the Owner/Operator parameter (p_owop) and the federal agency code (p_fa) parameters.
  * p_idt1 `string`: Beginning of date range of most recent facility inspection.
  * p_idt2 `string`: End of date range of most recent facility inspection.
  * p_stdt1 `string`: Beginning of date range of most recent stack test.
  * p_stdt2 `string`: End of date range of most recent stack test.
  * p_pityp `string`: Inspection Type:
  * p_cifdi `string` (values: Any, Yes, No, Undetermined): Compliance issuess found during inspection.
  * p_pfead1 `string`: Formal Enforcement Action Date Range Start.  Enter a date in MM/DD/YYYY format to set the start of the range for filtering by recent Formal Enforcement Action (FEA) taken against the facility within the last five years.
  * p_pfead2 `string`: Formal Enforcement Action Date Range End.  Enter a date in MM/DD/YYYY format to set the end of the date range for filtering by recent Formal Enforcement Action (FEA) taken against the facility within the last five years.
  * p_pfeat `string`: Formal Enforcement Action (FEA) Code Filter.  Enter one or more three-letter FEA codes to restrict results to facilities with these attributes.  Use p_fead1 and p_fead2 parameters to further restrict this filter by entering a date range.  Provide multiple codes as a comma-delimited list.
  * p_psncq `string` (values: GT1, GE1, GT2, GE2, GT4, GE4, GT8, GE8, GT12, GE12): Quarters in Significant Noncompliance Limiter.  Enter a coded value to limit results to facilities with given quarter of significant noncompliance.
  * p_pctrack `string` (values: Off, Partial, On): Compliance Tracking Limiter. Provide a keyword to indicate the extent to which data is being entered and effluent exceedances are being identified.
  * p_swpa `string` (values: source water, surface water, ground water, waiting for SSO): Source water protection area
  * p_des `string`: Universe Designation Limiter.  Enter one or more universe designation codes.  Provide multiple values as a comma-delimited list.  Use code "TSDF" to return the full enforcement TSDF universe and "Operating TSDF" to return the operating TSDF universe.
  * p_fntype `string` (values: ALL, CONTAINS, EXACT, BEGINS): Controls type of text search performed on facility name with parameter p_fn.
  * p_hpvmth `string`: Months in high priority violation status out of the previous three years limiter.  Provide a number of months in the past three years.  Results will limited to facilities in high priority violation status during that time. 
  * p_recvio `string`: Recent Violation Status Filter.  Enter one or more recent violation codes to limit results.  Provide multiple values as a comma-delimited list.
  * p_pollvio `string`: Air Pollutant Code For A Recent Violation Filter.  Provide one or more pollutant codes to select facilities with one or more of the entered pollutant codes for a recent air violation.  Provide multiple values as a comma-delimited list.
  * p_ar `string`: Associated EPA Air Reports Program Filter.  Enter multiple values as a comma-delimited list.  Valid values are:
  * p_tri_yr `string`: Toxic Release Inventory Reporting Year Filter.  Enter one or more year values to filter results by the TRI reporting year.  Provide multiple years as a comma-delimited list.
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
  * Results **required** [air05](#air05)

### air_rest_services.get_facilities.post
Validates query search parameters and returns query identifier.  Use the responseset parameter to set the page size


```js
epa_gov_air.air_rest_services.get_facilities.post({}, context)
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
  * p_lcon `string`: Air Program Local Control Region Code Filter.  Enter one or more local control region codes to filter results.  Provide multiple codes as a comma-delimited list.  Codes where they exist are specific by state.
  * p_frs `string`: Facility Registry Service ID Filter. Enter a single 12-digit FRS identifier to filter results.
  * p_reg `string` (values: 01, 02, 03, 04, 05, 06, 07, 08, 09, 10): EPA Region Filter. Provide a single value of 01 thru 10 to restrict results to a single EPA region.
  * p_sic `string`: Standard Industrial Classification (SIC) Code Filter.  Enter a single 4-digit SIC Code to filter results.  If more complex filtering is required, use p_sic2 and p_sic4.
  * p_ncs `string`: North American Industry Classification System Filter. Enter two to six digits to filter results to facilities having matching NAICS codes.  Digits less than six will match to all codes beginning with the provided values.
  * p_qnc `number`: Number of quarters in non-compliance limiter.  Enter an integer value between 1 and 4 to limit results.
  * p_pen `string`: Last Penality Date Qualifier Filter.  Enter one of the following:   
  * p_opst `string`: Operating status filter.  Enter one or more operating status codes to limit results.   Provide multiple codes as a comma-delimited list.
  * p_c1lat `number`: In decimal degrees.  Latitude of 1st corner of box that bounds the resulting facilities. The latitude and longitude of both corners of the bounding box must be provided.
  * p_c1lon `number`: In decimal degrees.  Longitude of 1st corner of box that bounds the resulting facilities. The latitude and longitude of both corners of the bounding box must be provided.
  * p_c2lat `number`: In decimal degrees.  Latitude of 2nd corner of box that bounds the resulting facilities. The latitude and longitude of both corners of the bounding box must be provided.
  * p_c2lon `number`: In decimal degrees.  Longitude of 2nd corner of box that bounds the resulting facilities. The latitude and longitude of both corners of the bounding box must be provided.
  * p_usmex `string` (values: Y, N): US-Mexico Border Flag.  Enter Y/N to restrict searches to facilities located within 100KM of the border.
  * p_sic2 `string`: Standard Industrial Classification (SIC) Code Filter Alternate 2. Enter a wild-card search against SIC codes.  A final wild-card is always present allowing "22" to match all SIC codes beginning with 22.  Use the "%" character within strings to match any SIC values with the pattern.  For example, "2%21" matches 2021, 2121, 2221, etc.
  * p_sic4 `string`: Standard Industrial Classification (SIC) Code Filter Alternate 3.  Enter the first 2, 3 or 4 SIC code digits to filter results to facilities having those code prefixes.  As this alternative does not utilize an index, p_sic2 will generally be quicker.
  * p_fa `string`: Federal Agency. 1 character or 5-character values; may contain multiple comma-separated values. ALL will retrieve all facilities where the federal agency code is not null.  Use the Federal Agencies lookup service to obtain a list of values.
  * p_act `string` (values: Y, N, A): Active Permits/Facilities Flag.  Provide Y or N to filter results to facilities with active permits.
  * p_maj `string` (values: Y, N): Major Facility Flag.  Enter Y to restrict results to Major facilities only.
  * p_mact `string`: CAA Maximum Achievable Control Technology (MACT) Subpart codes (alpha ID between 1 and 7 characters) applicable to the facility.
  * p_nsps `string`: Air Programl New Source Performance Standards (NSPS)  Subpart Code Search.  One or more valid Air Program NSPS Program codes cand be passed.  
  * p_nspsm `string`: Air Programl New Source Performance Standards Minors (NSPSM) Subpart Code Search.  One or more valid Air Program NSPSM Subpart codes can be passed.  
  * p_prog `string`: Air Program Code Filter.  Enter one or more Air program codes to filter results.  Provide multiple values as a comma-delimited list.
  * p_fea `string` (values: W, N): Formal Enforcement Actions [within / not within] specified date range indicator. The date range is determined by parameters p_fead1 and p_fead2 or by parameter p_feay.
  * p_feay `number` (values: 1, 2, 3, 4, 5): Years (1 to 5) Range.  This value is used to create a date range for Formal Enforcement Actions (FEA). Used along with p_fea (which indicates whether to look within or outside of the date range) to find FEAs within (or not within) the number of years specified.
  * p_feaa `string` (values: A, E, S): Agency associated with Formal Enforcement Actions:
  * p_iea `string` (values: W, N): Informal Enforcement Actions [within / not within] specified date range.  The date range is determined by parameters p_iead1 and p_iead2 or by parameter p_ieay.
  * p_ieay `number` (values: 1, 2, 3, 4, 5): Years (1 to 5) Range.  This value is used to create a date range for Informal Enforcement Actions (IEA). Used along with p_iea (which indicates whether to look within or outside of the date range) to find IEAs within (or not within) the number of years specified.
  * p_ieaa `string` (values: E, S): Agency associated with Informal Enforcement Actions. If left blank, both agencies are included.
  * p_qiv `string` (values: 0, GT1, GT2, GT4, GT8, 12): Quarters in Noncompliance Limiter.  Enter a coded value to limit results to facilities with given quarter of noncompliance.
  * p_naa `string`: Non-Attainment Area Flag.  Enter a Y or N to filter for or against facilities flagged as non-attainment areas.
  * p_impw `string` (values: Y, N): Discharging into Impaired Waters Flag. Enter Y to limit results to facilities with discharge to waterbodies listed as impaired in the ATTAINS database.
  * p_trep `string` (values: CURR, NOTCURR): Current Toxics Release Inventory (TRI) Reporter Limiter.  Enter one of the following codes to limit results.
  * p_tri_cat `string` (values: TOTAL, CARC, HAP): Toxic Release Inventory Released To Air Chemical Identifier Category Filter.  Enter the chemical identifier category code to limit results. Note when filtering by TRI chemical identifier categories one may not also filter by specific chemical identifiers via p_tri_pol.  You must also specify a release amount using p_tri_amt or p_tri_any_amt.
  * p_tri_amt `string` (values: 0, GT0, GT1000, GT5000, GT10000, GT50000): Toxic Release Inventory Release Amount Filter.  Enter a value in pounds to limit results to facilities releasing this amount or greateer of TRI releases.  Valid values are 0, GT0, GT1000, GT5000, GT10000 and GT50000. Note when filtering by TRI release amounts one may only use either p_tri_amt or p_tri_any_amt.
  * p_tri_any_amt `number`: Toxic Release Inventory Release Of Any Kind Above Value Filter.  Enter a value to limit results to facilities releasing this amount or more of TRI releases.  Note when filtering by TRI releases one may only use p_tri_any_amt or p_tri_amt and not both.
  * p_tri_pol `string`: Toxic Release Inventory Chemical Identifier Filter.  Enter one or more chemical identifier codes to limit results. Note when filtering by specific TRI chemical identifiers one may not also filter by chemical identifier categories via p_tri_cat.
  * p_ghg_cat `string` (values: ALL, BIOCO2, CH4, CO2, HFC, N2O, NF3, OTHER_L, PFC, SF6): Green House Gas (GHG) Gas Code Category.  Must be used with either a formatted (p_ghg_amt) or custom (p_ghg_any_amt) release amount.
  * p_ghg_amt `string` (values: None, 0, GT0, GT10000, GT25000, GT250000, GT1000000): Green House Gas (GHG) CO2 Equivalent Formatted Release Amount.  First 2 characters must contain GT (greater than) followed by a number.
  * p_ghg_any_amt `number`: Green House Gas (GHG) C02 Equivalent Custom Amount.  The C02E value reported for the provided category, will be greater or equal to the amount provided.
  * p_ghg_yr `string`: Green House Gas (GHG) Reporting Year. (2010 through 2015)
  * p_nei_pol `string`: National Emissions Inventory (NEI) Pollutant Identifier.  When a pollutant identifer is entered a corresponding formatted amount or custom amount must be entered.
  * p_nei_amt `string` (values: None, 0, GT0, GT10000, GT25000, GT250000, GT1000000): National Emissions Inventory (NEI) Formatted Pollutant Amount.  A formatted value where the 1st two characters must start with GT or LT followed by a number.  Identifies facilities that have a NEI Pollutant Emission  where the supplied value is > or < the pollutant emission amount.  
  * p_nei_any_amt `number`: National Emissions Inventory (NEI) Custom Pollutant Amount.  Only a number can be entered.  Identifies facilities with where the NEI Pollutant Emission Amount is greater than the number entered.
  * p_nei_yr `string`: National Emissions Inventory (NEI) year:  2014 or 2011
  * p_nei_cat `string`: National Emissions Inventory (NEI) Pollutant Category.  When a pollutant category is entered, a corresponding formatted pollutant amount or custom amount must be entered.
  * p_pm `string` (values: NONE, GT5, GT10, GT25, GT50, GT75): Percent Minority Population Limiter.  Enter a value to restrict results to facilities with a given percentage of minority population within 3-mile radius.
  * p_pd `string` (values: NONE, GT100, GT500, GT1000, GT5000, GT10000, GT20000): Population Density Limiter (per sq mile). Enter a value to limit results to facilities located in area of a given population density.
  * p_ico `string` (values: Y, N): Indian Country Flag.  Enter a "Y" or "N" to restrict searches to facilities inside or outside Indian Country.
  * p_huc `string`: 2-, 4-, 6-, or 8-character watershed code. May contain multiple comma-separated values.
  * p_wbd `string`: 2-, 4-, 6-, 8-, 10-, or 12-character watershed (WBD from the USGS Watershed Boundary Dataset). May contain multiple comma-separated values.  Uses the FRS Best Pick Coordinate to obtain the WBD12 Huc value.
  * p_pid `string`: Nine-digit permit IDs. May contain up to 2000 comma-separated values.
  * p_med `string` (values: M, R, S, W, ALL): Filter Results by Media.
  * p_ysl `string` (values: W, N, NV): Last Facility Inspection [within / not within] Specified Date Range Indicator. The date range is determined by parameters p_idt1 and p_idt2 or by parameter p_ysly.
  * p_ysly `number` (values: 1, 2, 3, 4, 5): Number of years (1 to 5) since last facility inspection.  A value of 1 means that it has been inspected within the year.
  * p_ysla `string` (values: E, S, A): Facility Last Inspection Code Filter.  If left blank, both agencies are included.  Enter a value to limit results:
  * p_stsl `string` (values: W, N): Last Stack Test [within / not within] Specified Date Range Indicator.
  * p_stsly `number` (values: 1, 2, 3, 4, 5): Number of years (1 to 5) since date of last stack test. A value of 1 means it has been inspected within the year.
  * p_stsla `string` (values: A, E, S): Stack Last Test Code Filter.  Enter a value to limit results:
  * p_stres `string`: Air Stack Test Status Description Filter.  Enter one or more test status descriptions to filter results.  Enter multiple values as a comma-delimited list.
  * p_sttyp `string`: Air Conductor Type Code Filter.  Enter one or more conductor type codes to filter results.  Provide multiple values as a comma-delimited list.
  * p_qs `string`: Quick Search. Allows entry for city, state, and/or zip code.
  * p_sfs `string`: Single Facility Search Filter.  Provide a facility name or program system identifier to limit results.  For the all data search, the FRS registry identifier is also searched.
  * p_tribeid `number`: Numeric code for tribe (or list of tribes).
  * p_tribename `string`: Tribe Name Filter.  Enter a single tribe name to filter results.
  * p_tribedist `number`: Proximity to tribal land limiter. Enter an amount of mile between 0 and 25 to filter results.  This parameter is only evaluated if p_tribeid is populated.
  * p_owop `string`: Owner/Operator code filter.  Enter one or more codes to limit results.
  * p_agoo `string` (values: AND, OR): Indicates whether to AND or OR the Owner/Operator parameter (p_owop) and the federal agency code (p_fa) parameters.
  * p_idt1 `string`: Beginning of date range of most recent facility inspection.
  * p_idt2 `string`: End of date range of most recent facility inspection.
  * p_stdt1 `string`: Beginning of date range of most recent stack test.
  * p_stdt2 `string`: End of date range of most recent stack test.
  * p_pityp `string`: Inspection Type:
  * p_cifdi `string` (values: Any, Yes, No, Undetermined): Compliance issuess found during inspection.
  * p_pfead1 `string`: Formal Enforcement Action Date Range Start.  Enter a date in MM/DD/YYYY format to set the start of the range for filtering by recent Formal Enforcement Action (FEA) taken against the facility within the last five years.
  * p_pfead2 `string`: Formal Enforcement Action Date Range End.  Enter a date in MM/DD/YYYY format to set the end of the date range for filtering by recent Formal Enforcement Action (FEA) taken against the facility within the last five years.
  * p_pfeat `string`: Formal Enforcement Action (FEA) Code Filter.  Enter one or more three-letter FEA codes to restrict results to facilities with these attributes.  Use p_fead1 and p_fead2 parameters to further restrict this filter by entering a date range.  Provide multiple codes as a comma-delimited list.
  * p_psncq `string` (values: GT1, GE1, GT2, GE2, GT4, GE4, GT8, GE8, GT12, GE12): Quarters in Significant Noncompliance Limiter.  Enter a coded value to limit results to facilities with given quarter of significant noncompliance.
  * p_pctrack `string` (values: Off, Partial, On): Compliance Tracking Limiter. Provide a keyword to indicate the extent to which data is being entered and effluent exceedances are being identified.
  * p_swpa `string` (values: source water, surface water, ground water, waiting for SSO): Source water protection area
  * p_des `string`: Universe Designation Limiter.  Enter one or more universe designation codes.  Provide multiple values as a comma-delimited list.  Use code "TSDF" to return the full enforcement TSDF universe and "Operating TSDF" to return the operating TSDF universe.
  * p_fntype `string` (values: ALL, CONTAINS, EXACT, BEGINS): Controls type of text search performed on facility name with parameter p_fn.
  * p_hpvmth `string`: Months in high priority violation status out of the previous three years limiter.  Provide a number of months in the past three years.  Results will limited to facilities in high priority violation status during that time. 
  * p_recvio `string`: Recent Violation Status Filter.  Enter one or more recent violation codes to limit results.  Provide multiple values as a comma-delimited list.
  * p_pollvio `string`: Air Pollutant Code For A Recent Violation Filter.  Provide one or more pollutant codes to select facilities with one or more of the entered pollutant codes for a recent air violation.  Provide multiple values as a comma-delimited list.
  * p_ar `string`: Associated EPA Air Reports Program Filter.  Enter multiple values as a comma-delimited list.  Valid values are:
  * p_tri_yr `string`: Toxic Release Inventory Reporting Year Filter.  Enter one or more year values to filter results by the TRI reporting year.  Provide multiple years as a comma-delimited list.
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
  * Results **required** [air05](#air05)

### air_rest_services.get_facility_info.get
Returns either an array of Facilities or an array of Clusters that meet the specified search criteria.


```js
epa_gov_air.air_rest_services.get_facility_info.get({}, context)
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
  * p_lcon `string`: Air Program Local Control Region Code Filter.  Enter one or more local control region codes to filter results.  Provide multiple codes as a comma-delimited list.  Codes where they exist are specific by state.
  * p_frs `string`: Facility Registry Service ID Filter. Enter a single 12-digit FRS identifier to filter results.
  * p_reg `string` (values: 01, 02, 03, 04, 05, 06, 07, 08, 09, 10): EPA Region Filter. Provide a single value of 01 thru 10 to restrict results to a single EPA region.
  * p_sic `string`: Standard Industrial Classification (SIC) Code Filter.  Enter a single 4-digit SIC Code to filter results.  If more complex filtering is required, use p_sic2 and p_sic4.
  * p_ncs `string`: North American Industry Classification System Filter. Enter two to six digits to filter results to facilities having matching NAICS codes.  Digits less than six will match to all codes beginning with the provided values.
  * p_qnc `number`: Number of quarters in non-compliance limiter.  Enter an integer value between 1 and 4 to limit results.
  * p_pen `string`: Last Penality Date Qualifier Filter.  Enter one of the following:   
  * p_opst `string`: Operating status filter.  Enter one or more operating status codes to limit results.   Provide multiple codes as a comma-delimited list.
  * xmin `number`: Minimum longitude value in decimal degrees.
  * ymin `number`: Minimum latitude value in decimal degrees.
  * xmax `number`: Maximum longitude value in decimal degrees.
  * ymax `number`: Maximum latitude value in decimal degrees.
  * p_usmex `string` (values: Y, N): US-Mexico Border Flag.  Enter Y/N to restrict searches to facilities located within 100KM of the border.
  * p_sic2 `string`: Standard Industrial Classification (SIC) Code Filter Alternate 2. Enter a wild-card search against SIC codes.  A final wild-card is always present allowing "22" to match all SIC codes beginning with 22.  Use the "%" character within strings to match any SIC values with the pattern.  For example, "2%21" matches 2021, 2121, 2221, etc.
  * p_sic4 `string`: Standard Industrial Classification (SIC) Code Filter Alternate 3.  Enter the first 2, 3 or 4 SIC code digits to filter results to facilities having those code prefixes.  As this alternative does not utilize an index, p_sic2 will generally be quicker.
  * p_fa `string`: Federal Agency. 1 character or 5-character values; may contain multiple comma-separated values. ALL will retrieve all facilities where the federal agency code is not null.  Use the Federal Agencies lookup service to obtain a list of values.
  * p_act `string` (values: Y, N, A): Active Permits/Facilities Flag.  Provide Y or N to filter results to facilities with active permits.
  * p_maj `string` (values: Y, N): Major Facility Flag.  Enter Y to restrict results to Major facilities only.
  * p_mact `string`: CAA Maximum Achievable Control Technology (MACT) Subpart codes (alpha ID between 1 and 7 characters) applicable to the facility.
  * p_nsps `string`: Air Programl New Source Performance Standards (NSPS)  Subpart Code Search.  One or more valid Air Program NSPS Program codes cand be passed.  
  * p_nspsm `string`: Air Programl New Source Performance Standards Minors (NSPSM) Subpart Code Search.  One or more valid Air Program NSPSM Subpart codes can be passed.  
  * p_prog `string`: Air Program Code Filter.  Enter one or more Air program codes to filter results.  Provide multiple values as a comma-delimited list.
  * p_fea `string` (values: W, N): Formal Enforcement Actions [within / not within] specified date range indicator. The date range is determined by parameters p_fead1 and p_fead2 or by parameter p_feay.
  * p_feay `number` (values: 1, 2, 3, 4, 5): Years (1 to 5) Range.  This value is used to create a date range for Formal Enforcement Actions (FEA). Used along with p_fea (which indicates whether to look within or outside of the date range) to find FEAs within (or not within) the number of years specified.
  * p_feaa `string` (values: A, E, S): Agency associated with Formal Enforcement Actions:
  * p_iea `string` (values: W, N): Informal Enforcement Actions [within / not within] specified date range.  The date range is determined by parameters p_iead1 and p_iead2 or by parameter p_ieay.
  * p_ieay `number` (values: 1, 2, 3, 4, 5): Years (1 to 5) Range.  This value is used to create a date range for Informal Enforcement Actions (IEA). Used along with p_iea (which indicates whether to look within or outside of the date range) to find IEAs within (or not within) the number of years specified.
  * p_ieaa `string` (values: E, S): Agency associated with Informal Enforcement Actions. If left blank, both agencies are included.
  * p_qiv `string` (values: 0, GT1, GT2, GT4, GT8, 12): Quarters in Noncompliance Limiter.  Enter a coded value to limit results to facilities with given quarter of noncompliance.
  * p_naa `string`: Non-Attainment Area Flag.  Enter a Y or N to filter for or against facilities flagged as non-attainment areas.
  * p_impw `string` (values: Y, N): Discharging into Impaired Waters Flag. Enter Y to limit results to facilities with discharge to waterbodies listed as impaired in the ATTAINS database.
  * p_trep `string` (values: CURR, NOTCURR): Current Toxics Release Inventory (TRI) Reporter Limiter.  Enter one of the following codes to limit results.
  * p_tri_cat `string` (values: TOTAL, CARC, HAP): Toxic Release Inventory Released To Air Chemical Identifier Category Filter.  Enter the chemical identifier category code to limit results. Note when filtering by TRI chemical identifier categories one may not also filter by specific chemical identifiers via p_tri_pol.  You must also specify a release amount using p_tri_amt or p_tri_any_amt.
  * p_tri_amt `string` (values: 0, GT0, GT1000, GT5000, GT10000, GT50000): Toxic Release Inventory Release Amount Filter.  Enter a value in pounds to limit results to facilities releasing this amount or greateer of TRI releases.  Valid values are 0, GT0, GT1000, GT5000, GT10000 and GT50000. Note when filtering by TRI release amounts one may only use either p_tri_amt or p_tri_any_amt.
  * p_tri_any_amt `number`: Toxic Release Inventory Release Of Any Kind Above Value Filter.  Enter a value to limit results to facilities releasing this amount or more of TRI releases.  Note when filtering by TRI releases one may only use p_tri_any_amt or p_tri_amt and not both.
  * p_tri_pol `string`: Toxic Release Inventory Chemical Identifier Filter.  Enter one or more chemical identifier codes to limit results. Note when filtering by specific TRI chemical identifiers one may not also filter by chemical identifier categories via p_tri_cat.
  * p_ghg_cat `string` (values: ALL, BIOCO2, CH4, CO2, HFC, N2O, NF3, OTHER_L, PFC, SF6): Green House Gas (GHG) Gas Code Category.  Must be used with either a formatted (p_ghg_amt) or custom (p_ghg_any_amt) release amount.
  * p_ghg_amt `string` (values: None, 0, GT0, GT10000, GT25000, GT250000, GT1000000): Green House Gas (GHG) CO2 Equivalent Formatted Release Amount.  First 2 characters must contain GT (greater than) followed by a number.
  * p_ghg_any_amt `number`: Green House Gas (GHG) C02 Equivalent Custom Amount.  The C02E value reported for the provided category, will be greater or equal to the amount provided.
  * p_ghg_yr `string`: Green House Gas (GHG) Reporting Year. (2010 through 2015)
  * p_nei_pol `string`: National Emissions Inventory (NEI) Pollutant Identifier.  When a pollutant identifer is entered a corresponding formatted amount or custom amount must be entered.
  * p_nei_amt `string` (values: None, 0, GT0, GT10000, GT25000, GT250000, GT1000000): National Emissions Inventory (NEI) Formatted Pollutant Amount.  A formatted value where the 1st two characters must start with GT or LT followed by a number.  Identifies facilities that have a NEI Pollutant Emission  where the supplied value is > or < the pollutant emission amount.  
  * p_nei_any_amt `number`: National Emissions Inventory (NEI) Custom Pollutant Amount.  Only a number can be entered.  Identifies facilities with where the NEI Pollutant Emission Amount is greater than the number entered.
  * p_nei_yr `string`: National Emissions Inventory (NEI) year:  2014 or 2011
  * p_nei_cat `string`: National Emissions Inventory (NEI) Pollutant Category.  When a pollutant category is entered, a corresponding formatted pollutant amount or custom amount must be entered.
  * p_pm `string` (values: NONE, GT5, GT10, GT25, GT50, GT75): Percent Minority Population Limiter.  Enter a value to restrict results to facilities with a given percentage of minority population within 3-mile radius.
  * p_pd `string` (values: NONE, GT100, GT500, GT1000, GT5000, GT10000, GT20000): Population Density Limiter (per sq mile). Enter a value to limit results to facilities located in area of a given population density.
  * p_ico `string` (values: Y, N): Indian Country Flag.  Enter a "Y" or "N" to restrict searches to facilities inside or outside Indian Country.
  * p_huc `string`: 2-, 4-, 6-, or 8-character watershed code. May contain multiple comma-separated values.
  * p_wbd `string`: 2-, 4-, 6-, 8-, 10-, or 12-character watershed (WBD from the USGS Watershed Boundary Dataset). May contain multiple comma-separated values.  Uses the FRS Best Pick Coordinate to obtain the WBD12 Huc value.
  * p_pid `string`: Nine-digit permit IDs. May contain up to 2000 comma-separated values.
  * p_med `string` (values: M, R, S, W, ALL): Filter Results by Media.
  * p_ysl `string` (values: W, N, NV): Last Facility Inspection [within / not within] Specified Date Range Indicator. The date range is determined by parameters p_idt1 and p_idt2 or by parameter p_ysly.
  * p_ysly `number` (values: 1, 2, 3, 4, 5): Number of years (1 to 5) since last facility inspection.  A value of 1 means that it has been inspected within the year.
  * p_ysla `string` (values: E, S, A): Facility Last Inspection Code Filter.  If left blank, both agencies are included.  Enter a value to limit results:
  * p_stsl `string` (values: W, N): Last Stack Test [within / not within] Specified Date Range Indicator.
  * p_stsly `number` (values: 1, 2, 3, 4, 5): Number of years (1 to 5) since date of last stack test. A value of 1 means it has been inspected within the year.
  * p_stsla `string` (values: A, E, S): Stack Last Test Code Filter.  Enter a value to limit results:
  * p_stres `string`: Air Stack Test Status Description Filter.  Enter one or more test status descriptions to filter results.  Enter multiple values as a comma-delimited list.
  * p_sttyp `string`: Air Conductor Type Code Filter.  Enter one or more conductor type codes to filter results.  Provide multiple values as a comma-delimited list.
  * p_qs `string`: Quick Search. Allows entry for city, state, and/or zip code.
  * p_sfs `string`: Single Facility Search Filter.  Provide a facility name or program system identifier to limit results.  For the all data search, the FRS registry identifier is also searched.
  * p_tribeid `number`: Numeric code for tribe (or list of tribes).
  * p_tribename `string`: Tribe Name Filter.  Enter a single tribe name to filter results.
  * p_tribedist `number`: Proximity to tribal land limiter. Enter an amount of mile between 0 and 25 to filter results.  This parameter is only evaluated if p_tribeid is populated.
  * p_owop `string`: Owner/Operator code filter.  Enter one or more codes to limit results.
  * p_agoo `string` (values: AND, OR): Indicates whether to AND or OR the Owner/Operator parameter (p_owop) and the federal agency code (p_fa) parameters.
  * p_idt1 `string`: Beginning of date range of most recent facility inspection.
  * p_idt2 `string`: End of date range of most recent facility inspection.
  * p_stdt1 `string`: Beginning of date range of most recent stack test.
  * p_stdt2 `string`: End of date range of most recent stack test.
  * p_pityp `string`: Inspection Type:
  * p_cifdi `string` (values: Any, Yes, No, Undetermined): Compliance issuess found during inspection.
  * p_pfead1 `string`: Formal Enforcement Action Date Range Start.  Enter a date in MM/DD/YYYY format to set the start of the range for filtering by recent Formal Enforcement Action (FEA) taken against the facility within the last five years.
  * p_pfead2 `string`: Formal Enforcement Action Date Range End.  Enter a date in MM/DD/YYYY format to set the end of the date range for filtering by recent Formal Enforcement Action (FEA) taken against the facility within the last five years.
  * p_pfeat `string`: Formal Enforcement Action (FEA) Code Filter.  Enter one or more three-letter FEA codes to restrict results to facilities with these attributes.  Use p_fead1 and p_fead2 parameters to further restrict this filter by entering a date range.  Provide multiple codes as a comma-delimited list.
  * p_psncq `string` (values: GT1, GE1, GT2, GE2, GT4, GE4, GT8, GE8, GT12, GE12): Quarters in Significant Noncompliance Limiter.  Enter a coded value to limit results to facilities with given quarter of significant noncompliance.
  * p_pctrack `string` (values: Off, Partial, On): Compliance Tracking Limiter. Provide a keyword to indicate the extent to which data is being entered and effluent exceedances are being identified.
  * p_swpa `string` (values: source water, surface water, ground water, waiting for SSO): Source water protection area
  * p_des `string`: Universe Designation Limiter.  Enter one or more universe designation codes.  Provide multiple values as a comma-delimited list.  Use code "TSDF" to return the full enforcement TSDF universe and "Operating TSDF" to return the operating TSDF universe.
  * p_fntype `string` (values: ALL, CONTAINS, EXACT, BEGINS): Controls type of text search performed on facility name with parameter p_fn.
  * p_hpvmth `string`: Months in high priority violation status out of the previous three years limiter.  Provide a number of months in the past three years.  Results will limited to facilities in high priority violation status during that time. 
  * p_recvio `string`: Recent Violation Status Filter.  Enter one or more recent violation codes to limit results.  Provide multiple values as a comma-delimited list.
  * p_pollvio `string`: Air Pollutant Code For A Recent Violation Filter.  Provide one or more pollutant codes to select facilities with one or more of the entered pollutant codes for a recent air violation.  Provide multiple values as a comma-delimited list.
  * p_ar `string`: Associated EPA Air Reports Program Filter.  Enter multiple values as a comma-delimited list.  Valid values are:
  * p_tri_yr `string`: Toxic Release Inventory Reporting Year Filter.  Enter one or more year values to filter results by the TRI reporting year.  Provide multiple years as a comma-delimited list.
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
  * Results **required** [air08](#air08)

### air_rest_services.get_facility_info.post
Returns either an array of Facilities or an array of Clusters that meet the specified search criteria.


```js
epa_gov_air.air_rest_services.get_facility_info.post({}, context)
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
  * p_lcon `string`: Air Program Local Control Region Code Filter.  Enter one or more local control region codes to filter results.  Provide multiple codes as a comma-delimited list.  Codes where they exist are specific by state.
  * p_frs `string`: Facility Registry Service ID Filter. Enter a single 12-digit FRS identifier to filter results.
  * p_reg `string` (values: 01, 02, 03, 04, 05, 06, 07, 08, 09, 10): EPA Region Filter. Provide a single value of 01 thru 10 to restrict results to a single EPA region.
  * p_sic `string`: Standard Industrial Classification (SIC) Code Filter.  Enter a single 4-digit SIC Code to filter results.  If more complex filtering is required, use p_sic2 and p_sic4.
  * p_ncs `string`: North American Industry Classification System Filter. Enter two to six digits to filter results to facilities having matching NAICS codes.  Digits less than six will match to all codes beginning with the provided values.
  * p_qnc `number`: Number of quarters in non-compliance limiter.  Enter an integer value between 1 and 4 to limit results.
  * p_pen `string`: Last Penality Date Qualifier Filter.  Enter one of the following:   
  * p_opst `string`: Operating status filter.  Enter one or more operating status codes to limit results.   Provide multiple codes as a comma-delimited list.
  * xmin `number`: Minimum longitude value in decimal degrees.
  * ymin `number`: Minimum latitude value in decimal degrees.
  * xmax `number`: Maximum longitude value in decimal degrees.
  * ymax `number`: Maximum latitude value in decimal degrees.
  * p_usmex `string` (values: Y, N): US-Mexico Border Flag.  Enter Y/N to restrict searches to facilities located within 100KM of the border.
  * p_sic2 `string`: Standard Industrial Classification (SIC) Code Filter Alternate 2. Enter a wild-card search against SIC codes.  A final wild-card is always present allowing "22" to match all SIC codes beginning with 22.  Use the "%" character within strings to match any SIC values with the pattern.  For example, "2%21" matches 2021, 2121, 2221, etc.
  * p_sic4 `string`: Standard Industrial Classification (SIC) Code Filter Alternate 3.  Enter the first 2, 3 or 4 SIC code digits to filter results to facilities having those code prefixes.  As this alternative does not utilize an index, p_sic2 will generally be quicker.
  * p_fa `string`: Federal Agency. 1 character or 5-character values; may contain multiple comma-separated values. ALL will retrieve all facilities where the federal agency code is not null.  Use the Federal Agencies lookup service to obtain a list of values.
  * p_act `string` (values: Y, N, A): Active Permits/Facilities Flag.  Provide Y or N to filter results to facilities with active permits.
  * p_maj `string` (values: Y, N): Major Facility Flag.  Enter Y to restrict results to Major facilities only.
  * p_mact `string`: CAA Maximum Achievable Control Technology (MACT) Subpart codes (alpha ID between 1 and 7 characters) applicable to the facility.
  * p_nsps `string`: Air Programl New Source Performance Standards (NSPS)  Subpart Code Search.  One or more valid Air Program NSPS Program codes cand be passed.  
  * p_nspsm `string`: Air Programl New Source Performance Standards Minors (NSPSM) Subpart Code Search.  One or more valid Air Program NSPSM Subpart codes can be passed.  
  * p_prog `string`: Air Program Code Filter.  Enter one or more Air program codes to filter results.  Provide multiple values as a comma-delimited list.
  * p_fea `string` (values: W, N): Formal Enforcement Actions [within / not within] specified date range indicator. The date range is determined by parameters p_fead1 and p_fead2 or by parameter p_feay.
  * p_feay `number` (values: 1, 2, 3, 4, 5): Years (1 to 5) Range.  This value is used to create a date range for Formal Enforcement Actions (FEA). Used along with p_fea (which indicates whether to look within or outside of the date range) to find FEAs within (or not within) the number of years specified.
  * p_feaa `string` (values: A, E, S): Agency associated with Formal Enforcement Actions:
  * p_iea `string` (values: W, N): Informal Enforcement Actions [within / not within] specified date range.  The date range is determined by parameters p_iead1 and p_iead2 or by parameter p_ieay.
  * p_ieay `number` (values: 1, 2, 3, 4, 5): Years (1 to 5) Range.  This value is used to create a date range for Informal Enforcement Actions (IEA). Used along with p_iea (which indicates whether to look within or outside of the date range) to find IEAs within (or not within) the number of years specified.
  * p_ieaa `string` (values: E, S): Agency associated with Informal Enforcement Actions. If left blank, both agencies are included.
  * p_qiv `string` (values: 0, GT1, GT2, GT4, GT8, 12): Quarters in Noncompliance Limiter.  Enter a coded value to limit results to facilities with given quarter of noncompliance.
  * p_naa `string`: Non-Attainment Area Flag.  Enter a Y or N to filter for or against facilities flagged as non-attainment areas.
  * p_impw `string` (values: Y, N): Discharging into Impaired Waters Flag. Enter Y to limit results to facilities with discharge to waterbodies listed as impaired in the ATTAINS database.
  * p_trep `string` (values: CURR, NOTCURR): Current Toxics Release Inventory (TRI) Reporter Limiter.  Enter one of the following codes to limit results.
  * p_tri_cat `string` (values: TOTAL, CARC, HAP): Toxic Release Inventory Released To Air Chemical Identifier Category Filter.  Enter the chemical identifier category code to limit results. Note when filtering by TRI chemical identifier categories one may not also filter by specific chemical identifiers via p_tri_pol.  You must also specify a release amount using p_tri_amt or p_tri_any_amt.
  * p_tri_amt `string` (values: 0, GT0, GT1000, GT5000, GT10000, GT50000): Toxic Release Inventory Release Amount Filter.  Enter a value in pounds to limit results to facilities releasing this amount or greateer of TRI releases.  Valid values are 0, GT0, GT1000, GT5000, GT10000 and GT50000. Note when filtering by TRI release amounts one may only use either p_tri_amt or p_tri_any_amt.
  * p_tri_any_amt `number`: Toxic Release Inventory Release Of Any Kind Above Value Filter.  Enter a value to limit results to facilities releasing this amount or more of TRI releases.  Note when filtering by TRI releases one may only use p_tri_any_amt or p_tri_amt and not both.
  * p_tri_pol `string`: Toxic Release Inventory Chemical Identifier Filter.  Enter one or more chemical identifier codes to limit results. Note when filtering by specific TRI chemical identifiers one may not also filter by chemical identifier categories via p_tri_cat.
  * p_ghg_cat `string` (values: ALL, BIOCO2, CH4, CO2, HFC, N2O, NF3, OTHER_L, PFC, SF6): Green House Gas (GHG) Gas Code Category.  Must be used with either a formatted (p_ghg_amt) or custom (p_ghg_any_amt) release amount.
  * p_ghg_amt `string` (values: None, 0, GT0, GT10000, GT25000, GT250000, GT1000000): Green House Gas (GHG) CO2 Equivalent Formatted Release Amount.  First 2 characters must contain GT (greater than) followed by a number.
  * p_ghg_any_amt `number`: Green House Gas (GHG) C02 Equivalent Custom Amount.  The C02E value reported for the provided category, will be greater or equal to the amount provided.
  * p_ghg_yr `string`: Green House Gas (GHG) Reporting Year. (2010 through 2015)
  * p_nei_pol `string`: National Emissions Inventory (NEI) Pollutant Identifier.  When a pollutant identifer is entered a corresponding formatted amount or custom amount must be entered.
  * p_nei_amt `string` (values: None, 0, GT0, GT10000, GT25000, GT250000, GT1000000): National Emissions Inventory (NEI) Formatted Pollutant Amount.  A formatted value where the 1st two characters must start with GT or LT followed by a number.  Identifies facilities that have a NEI Pollutant Emission  where the supplied value is > or < the pollutant emission amount.  
  * p_nei_any_amt `number`: National Emissions Inventory (NEI) Custom Pollutant Amount.  Only a number can be entered.  Identifies facilities with where the NEI Pollutant Emission Amount is greater than the number entered.
  * p_nei_yr `string`: National Emissions Inventory (NEI) year:  2014 or 2011
  * p_nei_cat `string`: National Emissions Inventory (NEI) Pollutant Category.  When a pollutant category is entered, a corresponding formatted pollutant amount or custom amount must be entered.
  * p_pm `string` (values: NONE, GT5, GT10, GT25, GT50, GT75): Percent Minority Population Limiter.  Enter a value to restrict results to facilities with a given percentage of minority population within 3-mile radius.
  * p_pd `string` (values: NONE, GT100, GT500, GT1000, GT5000, GT10000, GT20000): Population Density Limiter (per sq mile). Enter a value to limit results to facilities located in area of a given population density.
  * p_ico `string` (values: Y, N): Indian Country Flag.  Enter a "Y" or "N" to restrict searches to facilities inside or outside Indian Country.
  * p_huc `string`: 2-, 4-, 6-, or 8-character watershed code. May contain multiple comma-separated values.
  * p_wbd `string`: 2-, 4-, 6-, 8-, 10-, or 12-character watershed (WBD from the USGS Watershed Boundary Dataset). May contain multiple comma-separated values.  Uses the FRS Best Pick Coordinate to obtain the WBD12 Huc value.
  * p_pid `string`: Nine-digit permit IDs. May contain up to 2000 comma-separated values.
  * p_med `string` (values: M, R, S, W, ALL): Filter Results by Media.
  * p_ysl `string` (values: W, N, NV): Last Facility Inspection [within / not within] Specified Date Range Indicator. The date range is determined by parameters p_idt1 and p_idt2 or by parameter p_ysly.
  * p_ysly `number` (values: 1, 2, 3, 4, 5): Number of years (1 to 5) since last facility inspection.  A value of 1 means that it has been inspected within the year.
  * p_ysla `string` (values: E, S, A): Facility Last Inspection Code Filter.  If left blank, both agencies are included.  Enter a value to limit results:
  * p_stsl `string` (values: W, N): Last Stack Test [within / not within] Specified Date Range Indicator.
  * p_stsly `number` (values: 1, 2, 3, 4, 5): Number of years (1 to 5) since date of last stack test. A value of 1 means it has been inspected within the year.
  * p_stsla `string` (values: A, E, S): Stack Last Test Code Filter.  Enter a value to limit results:
  * p_stres `string`: Air Stack Test Status Description Filter.  Enter one or more test status descriptions to filter results.  Enter multiple values as a comma-delimited list.
  * p_sttyp `string`: Air Conductor Type Code Filter.  Enter one or more conductor type codes to filter results.  Provide multiple values as a comma-delimited list.
  * p_qs `string`: Quick Search. Allows entry for city, state, and/or zip code.
  * p_sfs `string`: Single Facility Search Filter.  Provide a facility name or program system identifier to limit results.  For the all data search, the FRS registry identifier is also searched.
  * p_tribeid `number`: Numeric code for tribe (or list of tribes).
  * p_tribename `string`: Tribe Name Filter.  Enter a single tribe name to filter results.
  * p_tribedist `number`: Proximity to tribal land limiter. Enter an amount of mile between 0 and 25 to filter results.  This parameter is only evaluated if p_tribeid is populated.
  * p_owop `string`: Owner/Operator code filter.  Enter one or more codes to limit results.
  * p_agoo `string` (values: AND, OR): Indicates whether to AND or OR the Owner/Operator parameter (p_owop) and the federal agency code (p_fa) parameters.
  * p_idt1 `string`: Beginning of date range of most recent facility inspection.
  * p_idt2 `string`: End of date range of most recent facility inspection.
  * p_stdt1 `string`: Beginning of date range of most recent stack test.
  * p_stdt2 `string`: End of date range of most recent stack test.
  * p_pityp `string`: Inspection Type:
  * p_cifdi `string` (values: Any, Yes, No, Undetermined): Compliance issuess found during inspection.
  * p_pfead1 `string`: Formal Enforcement Action Date Range Start.  Enter a date in MM/DD/YYYY format to set the start of the range for filtering by recent Formal Enforcement Action (FEA) taken against the facility within the last five years.
  * p_pfead2 `string`: Formal Enforcement Action Date Range End.  Enter a date in MM/DD/YYYY format to set the end of the date range for filtering by recent Formal Enforcement Action (FEA) taken against the facility within the last five years.
  * p_pfeat `string`: Formal Enforcement Action (FEA) Code Filter.  Enter one or more three-letter FEA codes to restrict results to facilities with these attributes.  Use p_fead1 and p_fead2 parameters to further restrict this filter by entering a date range.  Provide multiple codes as a comma-delimited list.
  * p_psncq `string` (values: GT1, GE1, GT2, GE2, GT4, GE4, GT8, GE8, GT12, GE12): Quarters in Significant Noncompliance Limiter.  Enter a coded value to limit results to facilities with given quarter of significant noncompliance.
  * p_pctrack `string` (values: Off, Partial, On): Compliance Tracking Limiter. Provide a keyword to indicate the extent to which data is being entered and effluent exceedances are being identified.
  * p_swpa `string` (values: source water, surface water, ground water, waiting for SSO): Source water protection area
  * p_des `string`: Universe Designation Limiter.  Enter one or more universe designation codes.  Provide multiple values as a comma-delimited list.  Use code "TSDF" to return the full enforcement TSDF universe and "Operating TSDF" to return the operating TSDF universe.
  * p_fntype `string` (values: ALL, CONTAINS, EXACT, BEGINS): Controls type of text search performed on facility name with parameter p_fn.
  * p_hpvmth `string`: Months in high priority violation status out of the previous three years limiter.  Provide a number of months in the past three years.  Results will limited to facilities in high priority violation status during that time. 
  * p_recvio `string`: Recent Violation Status Filter.  Enter one or more recent violation codes to limit results.  Provide multiple values as a comma-delimited list.
  * p_pollvio `string`: Air Pollutant Code For A Recent Violation Filter.  Provide one or more pollutant codes to select facilities with one or more of the entered pollutant codes for a recent air violation.  Provide multiple values as a comma-delimited list.
  * p_ar `string`: Associated EPA Air Reports Program Filter.  Enter multiple values as a comma-delimited list.  Valid values are:
  * p_tri_yr `string`: Toxic Release Inventory Reporting Year Filter.  Enter one or more year values to filter results by the TRI reporting year.  Provide multiple years as a comma-delimited list.
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
  * Results **required** [air08](#air08)

### air_rest_services.get_geojson.get
Based on the QID obtained from a get_facilities or get_facility_info query, return GeoJSON of the facilities found.


```js
epa_gov_air.air_rest_services.get_geojson.get({
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
  * features **required** `array`: Array of features in the feature collection.
    * items [air09](#air09)
  * type **required** `string`: Static marker indicating object is a GeoJSON Feature Collection.

### air_rest_services.get_geojson.post
Based on the QID obtained from a get_facilities or get_facility_info query, return GeoJSON of the facilities found.


```js
epa_gov_air.air_rest_services.get_geojson.post({
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
  * features **required** `array`: Array of features in the feature collection.
    * items [air09](#air09)
  * type **required** `string`: Static marker indicating object is a GeoJSON Feature Collection.

### air_rest_services.get_info_clusters.get
Based on the QID obtained from a clustered get_facility_info query, download cluster facility information as either a CSV or GEOJSON file.


```js
epa_gov_air.air_rest_services.get_info_clusters.get({
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

### air_rest_services.get_info_clusters.post
Based on the QID obtained from a clustered get_facility_info query, download cluster facility information as either a CSV or GEOJSON file.


```js
epa_gov_air.air_rest_services.get_info_clusters.post({
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

### air_rest_services.get_map.get
The purpose of the GET_MAP service is to display facility coordinates and facility clusters related to a get_facilities facility query. Currently, the maximum number of coordinates returned is 500. GET_MAP performs automatic clustering at the state, county, and zip code levels to maximize the number of coordinates returned.


```js
epa_gov_air.air_rest_services.get_map.get({
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
  * MapOutput **required** [air11](#air11)

### air_rest_services.get_map.post
The purpose of the GET_MAP service is to display facility coordinates and facility clusters related to a get_facilities facility query. Currently, the maximum number of coordinates returned is 500. GET_MAP performs automatic clustering at the state, county, and zip code levels to maximize the number of coordinates returned.


```js
epa_gov_air.air_rest_services.get_map.post({
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
  * MapOutput **required** [air11](#air11)

### air_rest_services.get_qid.get
GET_QID is passed with a query ID corresponding to a previously run get_facilities query. It then returns a Facility object containing all matching facilities. The main purpose of GET_QID is for large querysets that contain multiple pages (responsesets) of output. GET_QID allows for pagination and for the selection and sorting of columns. 


```js
epa_gov_air.air_rest_services.get_qid.get({
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
  * Results **required** [air12](#air12)

### air_rest_services.get_qid.post
GET_QID is passed with a query ID corresponding to a previously run get_facilities query. It then returns a Facility object containing all matching facilities. The main purpose of GET_QID is for large querysets that contain multiple pages (responsesets) of output. GET_QID allows for pagination and for the selection and sorting of columns. 


```js
epa_gov_air.air_rest_services.get_qid.post({
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
  * Results **required** [air12](#air12)

### air_rest_services.metadata.get
Returns the JSON Object Name and ColumnId for usage with the qcolumns parameter for get_qid, get_facility_info and other service endpoints.


```js
epa_gov_air.air_rest_services.metadata.get({}, context)
```

#### Input
* input `object`
  * output `string` (values: JSONP, JSON, XML): Output Format Flag.  Enter one of the following keywords:
  * callback `string`: JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.

#### Output
* output `object`: Root Object
  * Results **required** [meta1](#meta1)

### air_rest_services.metadata.post
Returns the JSON Object Name and ColumnId for usage with the qcolumns parameter for get_qid, get_facility_info and other service endpoints.


```js
epa_gov_air.air_rest_services.metadata.post({}, context)
```

#### Input
* input `object`
  * output `string` (values: JSONP, JSON, XML): Output Format Flag.  Enter one of the following keywords:
  * callback `string`: JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.

#### Output
* output `object`: Root Object
  * Results **required** [meta1](#meta1)



## Definitions

### air00
* air00 `object`: Cluster Data Object
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

### air01
* air01 `object`: Cluster Output Object
  * ClusterData `array`: An array of state, county, or zip code cluster information
    * items [air00](#air00)

### air02
* air02 `object`: Map Data Object
  * CAAstatus **required** `string`: The facility's 3-year compliance status history by quarter (3-month period). Each character represents a quarter of compliance, going from oldest to most recent. Character values correspond to the following compliance statuses:
  * FormalCount **required** `string`: The number of formal enforcement actions that have been taken against the facility
  * ICON **required** `string`: Name of each individual icon file within the URL base
  * InformalCount **required** `string`: The number of informal enforcement actions that have been taken against the facility
  * LAT **required** `string`: The latitude of the facility in degrees, to four decimal places
  * LON **required** `string`: The longitude of the facility in degrees, to four decimal places
  * LastInsp **required** `string`: The unique identifier for the last inspection
  * NAME **required** `string`: For DFR, this is the Facility name. The name corresponds to the TYPE value
  * PUV **required** `string`: Pop up value. Combine with PopUpBaseURL to give the popup for the facility
  * TYPE **required** `string`: For DFR, this is always facility

### air03
* air03 `object`: Facilities Object
  * AIR3yrComplQtrsHistory **required** `string`: The facility's 3-year compliance status history by quarter (3-month period). Each character represents a quarter of compliance, going from oldest to most recent. Character values correspond to the following compliance statuses:
  * AIRCaseIDs **required** `string`: Space-delimited list of AIR cases associated with the facility.
  * AIRCity **required** `string`: The city where the AIR facility is located.
  * AIRClassification **required** `string`
  * AIRComplStatus **required** `string`: The facility's recent violation status under the Clean Air Act.
  * AIRCounty **required** `string`: The name of the county where the AIR facility is located.
  * AIRDaysLastEval **required** `string`: The number of days since the most recent compliance evaluation of the facility.
  * AIREPARegion **required** `string`: The EPA region where the AIR facility is located.
  * AIREvalCnt **required** `string`: The number of compliance evaluations, under the Clean Air Act, occurring at the facility within the last five years.
  * AIRFIPSCode **required** `string`: A 5 digit combination of the 2 digit Federal Information Processing Standards (FIPS) code for the state and the 3 digit FIPS code of the county that a facility is located in.
  * AIRFacilityTypeCode **required** `string`: A three-character code indicating if plant is government facility.
  * AIRFacilityTypeDesc **required** `string`
  * AIRFeaCnt **required** `string`: The total number of formal enforcement actions taken against the facility within the last five years.
  * AIRHpvStatus **required** `string`: Indicates whether the facility currently has an unresolved High Priority Violation (HPV) under the Clean Air Act.
  * AIRIDs **required** `string`: Air Facility System (AFS) ID.
  * AIRIeaCnt **required** `string`: The total number of informal enforcement actions taken against the facility within the last five years.
  * AIRIndianCntryFlg **required** `string`: Flag indicating whether the AIR facility is located in Indian country.
  * AIRLastEvalDate **required** `string`: The date on which the most recent Full Compliance Evaluation (FCE) of the facility by EPA or a state agency was completed.
  * AIRLastEvalDateEPA **required** `string`: The last Air Inspection Date performed by EPA.
  * AIRLastEvalDateState **required** `string`: The last Air Inspection Date performed by State or local authorities.
  * AIRLastFeaDate **required** `string`: The effective date of the most recent listed formal enforcement action taken against the facility.
  * AIRLastFeaDateEPA **required** `string`: The last Air Formal Enforcement Action Date take by EPA.
  * AIRLastFeaDateState **required** `string`: The last Air Formal Enforcement Action Date take by State or Local authorities.
  * AIRLastIeaDate **required** `string`: The effective date of the most recent listed informal enforcement action taken against the facility.
  * AIRLastIeaDateEPA **required** `string`: The effective date of the most recent listed informal enforcement action taken against the facility by EPA.
  * AIRLastIeaDateState **required** `string`: The effective date of the most recent listed informal enforcement action taken against the facility by a state agency.
  * AIRLastPenaltyDate **required** `string`: Indicates the date on which the most recent assessed (or final) penalty was taken against the facility for AIR.
  * AIRLastStckDateEPA **required** `string`: The date on which the most recent stack test by EPA occurred.
  * AIRLastStckDateState **required** `string`: The date on which the most recent stack test by a state agency occurred.
  * AIRLastStckTestDate **required** `string`: The date on which the most recent stack test occurred.
  * AIRLastStckTestResults **required** `string`: The result of the most recent stack test (Pass, Fail, Pending, or Blank).
  * AIRLastViolDate **required** `string`: The date on which the most recent violation was reported.
  * AIRMacts **required** `string`: The Maximum Achievable Control Technology (MACT) Subpart associated with the facility.
  * AIRMajorFlag **required** `string`: Indicated whether the facility is designated as a major facilitiy.
  * AIRMnthsWithHpv **required** `string`: The number of months in the last three years in which the permit or site is considered in High Priority Violation (HPV) status
  * AIRNAICS **required** `string`: The facility’s or permit's primary North American Industry Classification System (NAICS) Code.
  * AIRName **required** `string`: The name of the AIR Facility.
  * AIRNsps **required** `string`: The New Source Performance Standards (NSPS) Subpart associated with the facility.
  * AIRNspsm **required** `string`: The Non-Major New Source Performance Standards (NSPS) Subpart associated with the facility.
  * AIRPenalties **required** `string`: The total dollar amount of assessed (or final) penalties taken against the facility within the last five years under the Clean Air Act. This value only includes penalties that have been entered in the national program database, ICIS-Air.
  * AIRPollRecentViol **required** `string`: The names of pollutants or pollutant categories with violations reported in the last year.
  * AIRPrograms **required** `string`: Comma-delimited list of AIR programs.
  * AIRQtrsWithHpv **required** `string`: The number of quarters in the last three years in which the permit or site is considered in High Priority Violation (HPV) status.
  * AIRQtrsWithViol **required** `string`: The number of quarters in the last three years in which the permit or site has had unresolved violation(s) reported.
  * AIRRecentViolCnt **required** `string`: The number of violations reported in the last year.
  * AIRStackTest5YrAll **required** `string`
  * AIRStackTest5YrFail **required** `string`
  * AIRState **required** `string`: The state where the AIR facility is located.
  * AIRStatus **required** `string`: The status of the AIR facility location.
  * AIRStreet **required** `string`: The street address of the AIR facility location.
  * AIRTRIbalEPAids **required** `string`: The EPA Tribal or Native Alaskan Village Identifier for facilities, that based on their Best Pick FRS spatial coordinate, are within a Tribal or Alaskan Village area.
  * AIRTRIbalNames **required** `string`: The EPA Tribal or Native Alaskan Village Name for facilities, that based on their Best Pick FRS spatial coordinate, are within a Tribal or Alaskan Village area.
  * AIRUniverse **required** `string`: The program office defines each CAA Source ID and the associated permits as being Federally Reportable or Non-Federally Reportable. Under the CAA, federally reportable source include majors, synthetic minors, NESHAP Part 61 minors, minors with an unresolved High Priority Violation (HPV), with recent enforcement action, or included on a Compliance Monitoring Strategy plan.
  * AIRZip **required** `string`: The five-digit zip code of the AIR facility.
  * ActiveLower48 **required** `string`: A Y/N indicator indicating that the facility is active and located within the lower 48 contiguous US States.
  * CWAIDs **required** `string`: A unique  ID assigned for each record/permit/site/facility within ICIS-NPDES. These identifiers are for used tracking purposes in the individual data systems.
  * CalculatedAccuracyMeters **required** `string`: The estimated accuracy in Meters for the facility's geospatial coordinate.
  * CamdIDs **required** `string`: Facility identifiers for the Clean Air Markets Division database.
  * CensusBlockGroup **required** `string`: A geographic unit used by the United States Census Bureau, generally defined to contain between 600 and 3,000 people.
  * ChesapeakeBayFlag **required** `string`: Displays "Y" if the facility is located within the Chesapeake Bay watershed.
  * CollectionMethod **required** `string`: ??
  * CurrSvFlag **required** `string`: Indicates if the facility has a current significant violation. 1 = Yes
  * CurrVioFlag **required** `string`: Indicates if the facility has a current violation. 1 = Yes
  * EPASystem **required** `string`: The EPA data system in which permit and facility records are kept. EPA's Facility Registry System (FRS) links all program database records (such as permit IDs and IDs facilities use in reporting to EPA) together. The following list describes the individual data systems that are linked to from the detailed facility report: 
  * Ea5yrFlag **required** `string`: Indicates if the facility has a formal enforcement action within the last 5 years. 1 = Yes
  * EisIDs **required** `string`: A unique ID assigned for each facility within EPA’s Emissions Inventory System (EIS) Database.
  * EjscreenFlag **required** `string`: A Y/N indicator identifying whether or not the facility is within an Environmental Justice area.
  * EjscreenFlagUs **required** `string`: A Y/N indicator identifying whether or not the facility is within an Environmental Justice area.
  * FacCamdReporter **required** `string`: Indicates whether the facility reports to the Clean Air Markets Division (CAMD).
  * FacCountyName **required** `string`: The facility county name from EPA's Facility Registry System
  * FacDerivedHuc **required** `string`: The 8-digit Hydrologic Unit Code (HUC) of the watershed in which the facility resides. A HUC number is assigned to every watershed in the nation and uniquely identifies the watershed.
  * FacDerivedTRIbes **required** `string`: The tribes or tribal territories located within 25 miles of the facility's location.
  * FacDerivedWBD **required** `string`: The Hydrologic Unit Code (HUC-12) of the waterbody in which the facility resides, derived based on location data in FRS.
  * FacDerivedWBDName **required** `string`: The 12 digit Watershed Boundary Dataset Name derived from the FRS Best Pick Coordinate
  * FacEisAIRReleases **required** `string`: The amount of hazardous air pollutants released to air in tons per year, as reported in the most recent National Emissions Inventory (NEI).
  * FacEisReporter **required** `string`: Indicates whether the facility reports to the Emissions Inventory System (EIS).
  * FacFIPSCode **required** `string`: The 2-digit Federal Information Processing Standards (FIPS) code to identify the county that a facility is located in.
  * FacFederalAgencyCode **required** `string`: Indicates the federal agency, as classified in FRS. Federal agencies are installations that are owned and operated by the U.S. government. The five-character code consists of a letter followed by four numbers. There are four possible letters that can occupy the first character position: C = Civilian Federal Agency; D = Department of Defense; E = Department of Energy; X = Unknown. The second and third characters represent the agency code, while the fourth and fifth characters represent the bureau code.
  * FacFederalAgencyName **required** `string`: Indicates the name of the federal agency, as classified in FRS. Federal agencies are installations that are owned and operated by the U.S. government.
  * FacGHGCO2Releases **required** `string`: The annual sum of total release amounts and "associated quantities" of all linked Greenhouse Gas IDs from the Office of Air and Radiation "Summary 2010 Greenhouse Gas Data." Units are reported as metric tons of CO2 equivalents per year (MTCO2e/year).
  * FacGHGReporter **required** `string`: Indicates whether the facility reports to the Greenhouse Gas Reporting Program (GHGRP)
  * FacIndianCntryFlg **required** `string`: Flag showing Y/N whether the facility is located in Indian Country.
  * FacIndianSpatialFlg **required** `string`: Returns “Y” if a facility is located within a tribal spatial boundary as defined by the U.S. Census Bureau 2010 tribal boundary layer data for tribes in the lower 48 states and Bureau of Land Management Alaska State Office data for native villages in Alaska. Returns “N” if a facility is not located within a tribal or native Alaskan village area.
  * FacLat **required** `string`: The latitude of the facility in decimal degrees expressed using the NAD83 horizontal datum. The coordinate comes from the FRS EPA Locational Reference Tables (LRT) file which represents the most accurate value for the facility based on the available spatial metadata.
  * FacLong **required** `string`: The longitude of the facility in decimal degrees expressed using the NAD83 horizontal datum. The coordinate comes from the FRS EPA Locational Reference Tables (LRT) file which represents the most accurate value for the facility based on the available spatial metadata.
  * FacMapFlg **required** `string`: Graphical indicator denoting whether geographical data required to map a facility are available.
  * FacMapIcon **required** `string`: The default map icon image file calculated for the facility by the ECHO program.
  * FacNaaFlag **required** `string`: Indicates whether the facility is located in a nonattainment area of the country, where air pollution levels persistently exceed the national ambient air quality standards. This flag does not indicate whether or not the facility has violated national ambient area quality standards.
  * FacPercentMinority **required** `string`: Percent Minority is the percentage of the population of the given area that is considered minority. Statistics are shown for the area within a 3-mile radius of each facility.
  * FacPopulationDensity **required** `string`: The number of persons per square mile in the profiled area.
  * FacSICCodes **required** `string`: Indicates the facility’s or permit's primary Standard Industrial Classification (SIC) Code. The SIC code describes the primary activity of the facility.
  * FacStdCountyName **required** `string`: The standardized  facility county name from EPA's Facility Registry System
  * FacTRIAIRReleases **required** `string`: The total chemical releases to air, in pounds, as reported to TRI by the facility for the most recent reporting year.
  * FacTRICarcAIRReleases **required** `string`: The pounds of chemicals considered to be carcinogens released to air, as reported to TRI for the most recent reporting year. Chemicals are classified as carcinogens under the requirements of the Occupational Safety and Health Administration (OSHA).
  * FacTRIHapsReleases **required** `string`: The pounds of chemicals classified as hazardous air pollutants (HAPS) released to air in pounds per year, as reported to TRI for the most recent reporting year.
  * FacTRIReporter **required** `string`: Indicates whether facility reported to the Toxics Release Inventory (TRI) for the most recent reporting year.
  * FacUsMexBorderFlg **required** `string`: A Y/N flag indicating that the facility is within 100KM of the US-Mexico Border.
  * GHGIDs **required** `string`: A unique ID assigned for each facility within EPA’s Greenhouse Gas Reporting Program (GHGRP) Emissions Data Sets.
  * HasPollRpt **required** `string`: ???
  * Infea5yrFlag **required** `string`: Indicates if the facility has an informal enforcement action within the last 5 years. 1 = Yes.
  * Insp5yrFlag **required** `string`: Indicates if the facility has an inspection within the last 5 years. 1 = Yes
  * LastDatePce **required** `string`: The date on which the most recent Partial Compliance Evaluation (PCE) of the facility by EPA or a state agency was completed.
  * LastDatePceEPA **required** `string`: The date on which the most recent Partial Compliance Evaluation (PCE) of the facility by EPA was completed.
  * LastDatePceSta **required** `string`: The date on which the most recent Partial Compliance Evaluation (PCE) of the facility by a state agency was completed.
  * LocalControlRegionCode **required** `string`: Code for regions within a state. Search criteria for DFR in OTIS.
  * LocalControlRegionName **required** `string`: Regions within a state. Search criteria for DFR in OTIS.
  * Lower48 **required** `string`: Flag showing Y/N whether location is within the contiguous (lower 48) United States.
  * Map **required** `string`: No Longer Used.
  * MaxPctileUs **required** `string`: The maximum percentile from all individual EJSCREEN indicators.
  * MaxScore **required** `string`: A sorting score for internal use.
  * NaaCategories **required** `string`: The nonattainment area categories that the facility is in, derived spatially based on the facility's geographic coordinates in FRS.�
  * NaaPollutants **required** `string`: All criteria pollutants that the facility is in nonattainment for.
  * OtherPermitIDs **required** `string`
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
  * RCRAIDs **required** `string`: A unique 12-character ID assigned for each record/permit/site/facility within the RCRAInfo database.
  * ReferencePoint **required** `string`: ??
  * RegistryID **required** `string`: An internal 12-digit Facility Registry Service (FRS) tracking number used to tie all facility data together in EPA regulatory program databases.
  * RmpIDs **required** `string`: A unique ID assigned to each facility submitting a Risk Management Plan to EPA under the Risk Management Plan Rule.
  * SDWAIDs **required** `string`: A unique 9-character ID assigned for each public water system within the Safe Drinking Water Information System (SDWIS).
  * Score **required** `string`
  * SourceID **required** `string`: Unique Identifier assigned by EPA.
  * Statute **required** `string`: The name of the statute associated with each of the permits and identifiers linked to the facility: 
  * TRIIDs **required** `string`: A unique 15-character ID assigned for each facility within the Toxics Release Inventory (TRI) program. The format is ZZZZZNNNNNSSSSS, where ZZZZZ = ZIP code, NNNNN = the first 5 consonants of the name, and SSSSS = the first 5 non-blank non-special characters in the street address.
  * TRIbalFlag **required** `string`: A flag indicating that the facility is within a tribal area.
  * ViolFlag **required** `string`: Indicates if the facility had a violation within the last 3 years. 1 = Yes
  * WebDocs **required** `string`: Contains flags that identify what web accessible documents are available for the facility.

### air04
* air04 `object`: Map Output Object
  * IconBaseURL **required** `string`: URL where all the icons are located
  * MapData **required** `array`: An array of facility geospatial information.
    * items [air02](#air02)
  * PopUpBaseURL **required** `string`: Combine this URL with the PUC to get popup info
  * QueryID **required** `string`: Sequential number assigned to entire search result

### air05
* air05 `object`: Results Object
  * BadSystemIDs **required** `string`: Identifies which passed query system identifiers are invalid.
  * CVRows **required** `string`: Summary count of the number of CWA facilities or SDWA public drinking water systems with current violations.
  * FEARows **required** `string`: Summary count of the number of facilities with a formal enforcement action in the past five years
  * Facilities `array`: A complex array of facility information.
    * items [air03](#air03)
  * INSPRows **required** `string`: Number of facilities with insp_5yr_flag populated (CWP_DATE_LAST_INSPECTION)
  * IndianCountryRows **required** `string`: Number of facilities with tribal_flag populated
  * InfFEARows **required** `string`: Number of facilities with infea_5yr_flag populated (INFORMAL_ENF_ACT_COUNT > 0)
  * MapOutput [air04](#air04)
  * Message **required** `string`: Field to record messages (typically performance-related) about packet processing
  * PageNo **required** `string`: The number of pages of results returned
  * QueryID **required** `string`: Sequential number assigned to entire search result
  * QueryRows **required** `string`: Number of query results returned
  * SVRows **required** `string`: Number of facilities with curr_sv_flag populated (CWP_STATUS = "Significant Violation")
  * TotalPenalties **required** `string`: The total dollar amount of either assessed or final penalties within the five year time period
  * V3Rows **required** `string`: Number of facilities having one or more quarters in non-compliance (QNC) in the last three years

### air06
* air06 `object`: Facilities Object
  * AIR3yrComplQtrsHistory **required** `string`: The facility's 3-year compliance status history by quarter (3-month period). Each character represents a quarter of compliance, going from oldest to most recent. Character values correspond to the following compliance statuses:
  * AIRCaseIDs **required** `string`: Space-delimited list of AIR cases associated with the facility.
  * AIRCity **required** `string`: The city where the AIR facility is located.
  * AIRClassification **required** `string`
  * AIRComplStatus **required** `string`: The facility's recent violation status under the Clean Air Act.
  * AIRCounty **required** `string`: The name of the county where the AIR facility is located.
  * AIRDaysLastEval **required** `string`: The number of days since the most recent compliance evaluation of the facility.
  * AIREPARegion **required** `string`: The EPA region where the AIR facility is located.
  * AIREvalCnt **required** `string`: The number of compliance evaluations, under the Clean Air Act, occurring at the facility within the last five years.
  * AIRFIPSCode **required** `string`: A 5 digit combination of the 2 digit Federal Information Processing Standards (FIPS) code for the state and the 3 digit FIPS code of the county that a facility is located in.
  * AIRFacilityTypeCode **required** `string`: A three-character code indicating if plant is government facility.
  * AIRFacilityTypeDesc **required** `string`
  * AIRFeaCnt **required** `string`: The total number of formal enforcement actions taken against the facility within the last five years.
  * AIRHpvStatus **required** `string`: Indicates whether the facility currently has an unresolved High Priority Violation (HPV) under the Clean Air Act.
  * AIRIDs **required** `string`: Air Facility System (AFS) ID.
  * AIRIeaCnt **required** `string`: The total number of informal enforcement actions taken against the facility within the last five years.
  * AIRIndianCntryFlg **required** `string`: Flag indicating whether the AIR facility is located in Indian country.
  * AIRLastEvalDate **required** `string`: The date on which the most recent Full Compliance Evaluation (FCE) of the facility by EPA or a state agency was completed.
  * AIRLastEvalDateEPA **required** `string`: The last Air Inspection Date performed by EPA.
  * AIRLastEvalDateState **required** `string`: The last Air Inspection Date performed by State or local authorities.
  * AIRLastFeaDate **required** `string`: The effective date of the most recent listed formal enforcement action taken against the facility.
  * AIRLastFeaDateEPA **required** `string`: The last Air Formal Enforcement Action Date take by EPA.
  * AIRLastFeaDateState **required** `string`: The last Air Formal Enforcement Action Date take by State or Local authorities.
  * AIRLastIeaDate **required** `string`: The effective date of the most recent listed informal enforcement action taken against the facility.
  * AIRLastIeaDateEPA **required** `string`: The effective date of the most recent listed informal enforcement action taken against the facility by EPA.
  * AIRLastIeaDateState **required** `string`: The effective date of the most recent listed informal enforcement action taken against the facility by a state agency.
  * AIRLastPenaltyDate **required** `string`: Indicates the date on which the most recent assessed (or final) penalty was taken against the facility for AIR.
  * AIRLastStckDateEPA **required** `string`: The date on which the most recent stack test by EPA occurred.
  * AIRLastStckDateState **required** `string`: The date on which the most recent stack test by a state agency occurred.
  * AIRLastStckTestDate **required** `string`: The date on which the most recent stack test occurred.
  * AIRLastStckTestResults **required** `string`: The result of the most recent stack test (Pass, Fail, Pending, or Blank).
  * AIRLastViolDate **required** `string`: The date on which the most recent violation was reported.
  * AIRMacts **required** `string`: The Maximum Achievable Control Technology (MACT) Subpart associated with the facility.
  * AIRMajorFlag **required** `string`: Indicated whether the facility is designated as a major facilitiy.
  * AIRMnthsWithHpv **required** `string`: The number of months in the last three years in which the permit or site is considered in High Priority Violation (HPV) status
  * AIRNAICS **required** `string`: The facility’s or permit's primary North American Industry Classification System (NAICS) Code.
  * AIRName **required** `string`: The name of the AIR Facility.
  * AIRNsps **required** `string`: The New Source Performance Standards (NSPS) Subpart associated with the facility.
  * AIRNspsm **required** `string`: The Non-Major New Source Performance Standards (NSPS) Subpart associated with the facility.
  * AIRPenalties **required** `string`: The total dollar amount of assessed (or final) penalties taken against the facility within the last five years under the Clean Air Act. This value only includes penalties that have been entered in the national program database, ICIS-Air.
  * AIRPollRecentViol **required** `string`: The names of pollutants or pollutant categories with violations reported in the last year.
  * AIRPrograms **required** `string`: Comma-delimited list of AIR programs.
  * AIRQtrsWithHpv **required** `string`: The number of quarters in the last three years in which the permit or site is considered in High Priority Violation (HPV) status.
  * AIRQtrsWithViol **required** `string`: The number of quarters in the last three years in which the permit or site has had unresolved violation(s) reported.
  * AIRRecentViolCnt **required** `string`: The number of violations reported in the last year.
  * AIRStackTest5YrAll **required** `string`
  * AIRStackTest5YrFail **required** `string`
  * AIRState **required** `string`: The state where the AIR facility is located.
  * AIRStatus **required** `string`: The status of the AIR facility location.
  * AIRStreet **required** `string`: The street address of the AIR facility location.
  * AIRTRIbalEPAids **required** `string`: The EPA Tribal or Native Alaskan Village Identifier for facilities, that based on their Best Pick FRS spatial coordinate, are within a Tribal or Alaskan Village area.
  * AIRTRIbalNames **required** `string`: The EPA Tribal or Native Alaskan Village Name for facilities, that based on their Best Pick FRS spatial coordinate, are within a Tribal or Alaskan Village area.
  * AIRUniverse **required** `string`: The program office defines each CAA Source ID and the associated permits as being Federally Reportable or Non-Federally Reportable. Under the CAA, federally reportable source include majors, synthetic minors, NESHAP Part 61 minors, minors with an unresolved High Priority Violation (HPV), with recent enforcement action, or included on a Compliance Monitoring Strategy plan.
  * AIRZip **required** `string`: The five-digit zip code of the AIR facility.
  * ActiveLower48 **required** `string`: A Y/N indicator indicating that the facility is active and located within the lower 48 contiguous US States.
  * CWAIDs **required** `string`: A unique  ID assigned for each record/permit/site/facility within ICIS-NPDES. These identifiers are for used tracking purposes in the individual data systems.
  * CalculatedAccuracyMeters **required** `string`: The estimated accuracy in Meters for the facility's geospatial coordinate.
  * CamdIDs **required** `string`: Facility identifiers for the Clean Air Markets Division database.
  * CensusBlockGroup **required** `string`: A geographic unit used by the United States Census Bureau, generally defined to contain between 600 and 3,000 people.
  * ChesapeakeBayFlag **required** `string`: Displays "Y" if the facility is located within the Chesapeake Bay watershed.
  * CollectionMethod **required** `string`: ??
  * CurrSvFlag **required** `string`: Indicates if the facility has a current significant violation. 1 = Yes
  * CurrVioFlag **required** `string`: Indicates if the facility has a current violation. 1 = Yes
  * EPASystem **required** `string`: The EPA data system in which permit and facility records are kept. EPA's Facility Registry System (FRS) links all program database records (such as permit IDs and IDs facilities use in reporting to EPA) together. The following list describes the individual data systems that are linked to from the detailed facility report: 
  * Ea5yrFlag **required** `string`: Indicates if the facility has a formal enforcement action within the last 5 years. 1 = Yes
  * EisIDs **required** `string`: A unique ID assigned for each facility within EPA’s Emissions Inventory System (EIS) Database.
  * EjscreenFlag **required** `string`: A Y/N indicator identifying whether or not the facility is within an Environmental Justice area.
  * EjscreenFlagUs **required** `string`: A Y/N indicator identifying whether or not the facility is within an Environmental Justice area.
  * FacCamdReporter **required** `string`: Indicates whether the facility reports to the Clean Air Markets Division (CAMD).
  * FacCountyName **required** `string`: The facility county name from EPA's Facility Registry System
  * FacDerivedHuc **required** `string`: The 8-digit Hydrologic Unit Code (HUC) of the watershed in which the facility resides. A HUC number is assigned to every watershed in the nation and uniquely identifies the watershed.
  * FacDerivedTRIbes **required** `string`: The tribes or tribal territories located within 25 miles of the facility's location.
  * FacDerivedWBD **required** `string`: The Hydrologic Unit Code (HUC-12) of the waterbody in which the facility resides, derived based on location data in FRS.
  * FacDerivedWBDName **required** `string`: The 12 digit Watershed Boundary Dataset Name derived from the FRS Best Pick Coordinate
  * FacEisAIRReleases **required** `string`: The amount of hazardous air pollutants released to air in tons per year, as reported in the most recent National Emissions Inventory (NEI).
  * FacEisReporter **required** `string`: Indicates whether the facility reports to the Emissions Inventory System (EIS).
  * FacFIPSCode **required** `string`: The 2-digit Federal Information Processing Standards (FIPS) code to identify the county that a facility is located in.
  * FacFederalAgencyCode **required** `string`: Indicates the federal agency, as classified in FRS. Federal agencies are installations that are owned and operated by the U.S. government. The five-character code consists of a letter followed by four numbers. There are four possible letters that can occupy the first character position: C = Civilian Federal Agency; D = Department of Defense; E = Department of Energy; X = Unknown. The second and third characters represent the agency code, while the fourth and fifth characters represent the bureau code.
  * FacFederalAgencyName **required** `string`: Indicates the name of the federal agency, as classified in FRS. Federal agencies are installations that are owned and operated by the U.S. government.
  * FacGHGCO2Releases **required** `string`: The annual sum of total release amounts and "associated quantities" of all linked Greenhouse Gas IDs from the Office of Air and Radiation "Summary 2010 Greenhouse Gas Data." Units are reported as metric tons of CO2 equivalents per year (MTCO2e/year).
  * FacGHGReporter **required** `string`: Indicates whether the facility reports to the Greenhouse Gas Reporting Program (GHGRP)
  * FacIndianCntryFlg **required** `string`: Flag showing Y/N whether the facility is located in Indian Country.
  * FacIndianSpatialFlg **required** `string`: Returns “Y” if a facility is located within a tribal spatial boundary as defined by the U.S. Census Bureau 2010 tribal boundary layer data for tribes in the lower 48 states and Bureau of Land Management Alaska State Office data for native villages in Alaska. Returns “N” if a facility is not located within a tribal or native Alaskan village area.
  * FacLat **required** `string`: The latitude of the facility in decimal degrees expressed using the NAD83 horizontal datum. The coordinate comes from the FRS EPA Locational Reference Tables (LRT) file which represents the most accurate value for the facility based on the available spatial metadata.
  * FacLong **required** `string`: The longitude of the facility in decimal degrees expressed using the NAD83 horizontal datum. The coordinate comes from the FRS EPA Locational Reference Tables (LRT) file which represents the most accurate value for the facility based on the available spatial metadata.
  * FacMapFlg **required** `string`: Graphical indicator denoting whether geographical data required to map a facility are available.
  * FacMapIcon **required** `string`: The default map icon image file calculated for the facility by the ECHO program.
  * FacNaaFlag **required** `string`: Indicates whether the facility is located in a nonattainment area of the country, where air pollution levels persistently exceed the national ambient air quality standards. This flag does not indicate whether or not the facility has violated national ambient area quality standards.
  * FacPercentMinority **required** `string`: Percent Minority is the percentage of the population of the given area that is considered minority. Statistics are shown for the area within a 3-mile radius of each facility.
  * FacPopulationDensity **required** `string`: The number of persons per square mile in the profiled area.
  * FacSICCodes **required** `string`: Indicates the facility’s or permit's primary Standard Industrial Classification (SIC) Code. The SIC code describes the primary activity of the facility.
  * FacStdCountyName **required** `string`: The standardized  facility county name from EPA's Facility Registry System
  * FacTRIAIRReleases **required** `string`: The total chemical releases to air, in pounds, as reported to TRI by the facility for the most recent reporting year.
  * FacTRICarcAIRReleases **required** `string`: The pounds of chemicals considered to be carcinogens released to air, as reported to TRI for the most recent reporting year. Chemicals are classified as carcinogens under the requirements of the Occupational Safety and Health Administration (OSHA).
  * FacTRIHapsReleases **required** `string`: The pounds of chemicals classified as hazardous air pollutants (HAPS) released to air in pounds per year, as reported to TRI for the most recent reporting year.
  * FacTRIReporter **required** `string`: Indicates whether facility reported to the Toxics Release Inventory (TRI) for the most recent reporting year.
  * FacUsMexBorderFlg **required** `string`: A Y/N flag indicating that the facility is within 100KM of the US-Mexico Border.
  * GHGIDs **required** `string`: A unique ID assigned for each facility within EPA’s Greenhouse Gas Reporting Program (GHGRP) Emissions Data Sets.
  * HasPollRpt **required** `string`: ???
  * Infea5yrFlag **required** `string`: Indicates if the facility has an informal enforcement action within the last 5 years. 1 = Yes.
  * Insp5yrFlag **required** `string`: Indicates if the facility has an inspection within the last 5 years. 1 = Yes
  * LastDatePce **required** `string`: The date on which the most recent Partial Compliance Evaluation (PCE) of the facility by EPA or a state agency was completed.
  * LastDatePceEPA **required** `string`: The date on which the most recent Partial Compliance Evaluation (PCE) of the facility by EPA was completed.
  * LastDatePceSta **required** `string`: The date on which the most recent Partial Compliance Evaluation (PCE) of the facility by a state agency was completed.
  * LocalControlRegionCode **required** `string`: Code for regions within a state. Search criteria for DFR in OTIS.
  * LocalControlRegionName **required** `string`: Regions within a state. Search criteria for DFR in OTIS.
  * Lower48 **required** `string`: Flag showing Y/N whether location is within the contiguous (lower 48) United States.
  * Map **required** `string`: No Longer Used.
  * MaxPctileUs **required** `string`: The maximum percentile from all individual EJSCREEN indicators.
  * MaxScore **required** `string`: A sorting score for internal use.
  * NaaCategories **required** `string`: The nonattainment area categories that the facility is in, derived spatially based on the facility's geographic coordinates in FRS.�
  * NaaPollutants **required** `string`: All criteria pollutants that the facility is in nonattainment for.
  * ObjectId **required** `string`: Sequential number assigned to each facility or cluster returned.
  * OtherPermitIDs **required** `string`
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
  * RCRAIDs **required** `string`: A unique 12-character ID assigned for each record/permit/site/facility within the RCRAInfo database.
  * ReferencePoint **required** `string`: ??
  * RegistryID **required** `string`: An internal 12-digit Facility Registry Service (FRS) tracking number used to tie all facility data together in EPA regulatory program databases.
  * RmpIDs **required** `string`: A unique ID assigned to each facility submitting a Risk Management Plan to EPA under the Risk Management Plan Rule.
  * SDWAIDs **required** `string`: A unique 9-character ID assigned for each public water system within the Safe Drinking Water Information System (SDWIS).
  * Score **required** `string`
  * SourceID **required** `string`: Unique Identifier assigned by EPA.
  * Statute **required** `string`: The name of the statute associated with each of the permits and identifiers linked to the facility: 
  * TRIIDs **required** `string`: A unique 15-character ID assigned for each facility within the Toxics Release Inventory (TRI) program. The format is ZZZZZNNNNNSSSSS, where ZZZZZ = ZIP code, NNNNN = the first 5 consonants of the name, and SSSSS = the first 5 non-blank non-special characters in the street address.
  * TRIbalFlag **required** `string`: A flag indicating that the facility is within a tribal area.
  * ViolFlag **required** `string`: Indicates if the facility had a violation within the last 3 years. 1 = Yes
  * WebDocs **required** `string`: Contains flags that identify what web accessible documents are available for the facility.

### air08
* air08 `object`: Results Object
  * BadSystemIDs **required** `string`: Identifies which passed query system identifiers are invalid.
  * CVRows **required** `string`: Summary count of the number of CWA facilities or SDWA public drinking water systems with current violations.
  * ClusterOutput [air01](#air01)
  * ClusterRecords `string`: Number of clusters returned.
  * FEARows **required** `string`: Summary count of the number of facilities with a formal enforcement action in the past five years
  * Facilities `array`: A complex array of facility information.
    * items [air06](#air06)
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

### air09
* air09 `object`: GeoJSON Feature Object
  * geometry **required** [geo](#geo)
  * properties **required** [air10](#air10)
  * type **required** `string`: Static marker indicating object is a GeoJSON Feature.

### air10
* air10 `object`: GeoJSON Properties Object
  * AIR3yrComplQtrsHistory **required** `string`: The facility's 3-year compliance status history by quarter (3-month period). Each character represents a quarter of compliance, going from oldest to most recent. Character values correspond to the following compliance statuses:
  * AIRCaseIDs **required** `string`: Space-delimited list of AIR cases associated with the facility.
  * AIRCity **required** `string`: The city where the AIR facility is located.
  * AIRClassification **required** `string`
  * AIRComplStatus **required** `string`: The facility's recent violation status under the Clean Air Act.
  * AIRCounty **required** `string`: The name of the county where the AIR facility is located.
  * AIRDaysLastEval **required** `number`: The number of days since the most recent compliance evaluation of the facility.
  * AIREPARegion **required** `string`: The EPA region where the AIR facility is located.
  * AIREvalCnt **required** `number`: The number of compliance evaluations, under the Clean Air Act, occurring at the facility within the last five years.
  * AIRFIPSCode **required** `string`: A 5 digit combination of the 2 digit Federal Information Processing Standards (FIPS) code for the state and the 3 digit FIPS code of the county that a facility is located in.
  * AIRFacilityTypeCode **required** `string`: A three-character code indicating if plant is government facility.
  * AIRFacilityTypeDesc **required** `string`
  * AIRFeaCnt **required** `string`: The total number of formal enforcement actions taken against the facility within the last five years.
  * AIRHpvStatus **required** `string`: Indicates whether the facility currently has an unresolved High Priority Violation (HPV) under the Clean Air Act.
  * AIRIDs **required** `string`: Air Facility System (AFS) ID.
  * AIRIeaCnt **required** `string`: The total number of informal enforcement actions taken against the facility within the last five years.
  * AIRIndianCntryFlg **required** `string`: Flag indicating whether the AIR facility is located in Indian country.
  * AIRLastEvalDate **required** `string`: The date on which the most recent Full Compliance Evaluation (FCE) of the facility by EPA or a state agency was completed.
  * AIRLastEvalDateEPA **required** `string`: The last Air Inspection Date performed by EPA.
  * AIRLastEvalDateState **required** `string`: The last Air Inspection Date performed by State or local authorities.
  * AIRLastFeaDate **required** `string`: The effective date of the most recent listed formal enforcement action taken against the facility.
  * AIRLastFeaDateEPA **required** `string`: The last Air Formal Enforcement Action Date take by EPA.
  * AIRLastFeaDateState **required** `string`: The last Air Formal Enforcement Action Date take by State or Local authorities.
  * AIRLastIeaDate **required** `string`: The effective date of the most recent listed informal enforcement action taken against the facility.
  * AIRLastIeaDateEPA **required** `string`: The effective date of the most recent listed informal enforcement action taken against the facility by EPA.
  * AIRLastIeaDateState **required** `string`: The effective date of the most recent listed informal enforcement action taken against the facility by a state agency.
  * AIRLastPenaltyDate **required** `string`: Indicates the date on which the most recent assessed (or final) penalty was taken against the facility for AIR.
  * AIRLastStckDateEPA **required** `string`: The date on which the most recent stack test by EPA occurred.
  * AIRLastStckDateState **required** `string`: The date on which the most recent stack test by a state agency occurred.
  * AIRLastStckTestDate **required** `string`: The date on which the most recent stack test occurred.
  * AIRLastStckTestResults **required** `string`: The result of the most recent stack test (Pass, Fail, Pending, or Blank).
  * AIRLastViolDate **required** `string`: The date on which the most recent violation was reported.
  * AIRMacts **required** `string`: The Maximum Achievable Control Technology (MACT) Subpart associated with the facility.
  * AIRMajorFlag **required** `string`: Indicated whether the facility is designated as a major facilitiy.
  * AIRMnthsWithHpv **required** `number`: The number of months in the last three years in which the permit or site is considered in High Priority Violation (HPV) status
  * AIRNAICS **required** `string`: The facility’s or permit's primary North American Industry Classification System (NAICS) Code.
  * AIRName **required** `string`: The name of the AIR Facility.
  * AIRNsps **required** `string`: The New Source Performance Standards (NSPS) Subpart associated with the facility.
  * AIRNspsm **required** `string`: The Non-Major New Source Performance Standards (NSPS) Subpart associated with the facility.
  * AIRPenalties **required** `string`: The total dollar amount of assessed (or final) penalties taken against the facility within the last five years under the Clean Air Act. This value only includes penalties that have been entered in the national program database, ICIS-Air.
  * AIRPollRecentViol **required** `string`: The names of pollutants or pollutant categories with violations reported in the last year.
  * AIRPrograms **required** `string`: Comma-delimited list of AIR programs.
  * AIRQtrsWithHpv **required** `number`: The number of quarters in the last three years in which the permit or site is considered in High Priority Violation (HPV) status.
  * AIRQtrsWithViol **required** `number`: The number of quarters in the last three years in which the permit or site has had unresolved violation(s) reported.
  * AIRRecentViolCnt **required** `number`: The number of violations reported in the last year.
  * AIRStackTest5YrAll **required** `string`
  * AIRStackTest5YrFail **required** `string`
  * AIRState **required** `string`: The state where the AIR facility is located.
  * AIRStatus **required** `string`: The status of the AIR facility location.
  * AIRStreet **required** `string`: The street address of the AIR facility location.
  * AIRTRIbalEPAids **required** `string`: The EPA Tribal or Native Alaskan Village Identifier for facilities, that based on their Best Pick FRS spatial coordinate, are within a Tribal or Alaskan Village area.
  * AIRTRIbalNames **required** `string`: The EPA Tribal or Native Alaskan Village Name for facilities, that based on their Best Pick FRS spatial coordinate, are within a Tribal or Alaskan Village area.
  * AIRUniverse **required** `string`: The program office defines each CAA Source ID and the associated permits as being Federally Reportable or Non-Federally Reportable. Under the CAA, federally reportable source include majors, synthetic minors, NESHAP Part 61 minors, minors with an unresolved High Priority Violation (HPV), with recent enforcement action, or included on a Compliance Monitoring Strategy plan.
  * AIRZip **required** `string`: The five-digit zip code of the AIR facility.
  * ActiveLower48 **required** `string`: A Y/N indicator indicating that the facility is active and located within the lower 48 contiguous US States.
  * CWAIDs **required** `string`: A unique  ID assigned for each record/permit/site/facility within ICIS-NPDES. These identifiers are for used tracking purposes in the individual data systems.
  * CalculatedAccuracyMeters **required** `number`: Indicates the calculated accuracy in meters for the facilities geospatial coordinate.  Generally, the accuracy is directly linked to the collection method where GPS methods are more accurate that manual methods like map or photo interpolations.
  * CamdIDs **required** `string`: Facility identifiers for the Clean Air Markets Division database.
  * CensusBlockGroup **required** `string`: A geographic unit used by the United States Census Bureau, generally defined to contain between 600 and 3,000 people.
  * ChesapeakeBayFlag **required** `string`: Displays "Y" if the facility is located within the Chesapeake Bay watershed.
  * CollectionMethod **required** `string`: ??
  * CurrSvFlag **required** `number`: Indicates if the facility has a current significant violation. 1 = Yes
  * CurrVioFlag **required** `number`: Indicates if the facility has a current violation. 1 = Yes
  * EPASystem **required** `string`: The EPA data system in which permit and facility records are kept. EPA's Facility Registry System (FRS) links all program database records (such as permit IDs and IDs facilities use in reporting to EPA) together. The following list describes the individual data systems that are linked to from the detailed facility report: 
  * Ea5yrFlag **required** `number`: Indicates if the facility has a formal enforcement action within the last 5 years. 1 = Yes
  * EisIDs **required** `string`: A unique ID assigned for each facility within EPA’s Emissions Inventory System (EIS) Database.
  * EjscreenFlag **required** `string`: A Y/N indicator identifying whether or not the facility is within an Environmental Justice area.
  * EjscreenFlagUs **required** `string`: A Y/N indicator identifying whether or not the facility is within an Environmental Justice area.
  * FacCamdReporter **required** `string`: Indicates whether the facility reports to the Clean Air Markets Division (CAMD).
  * FacCountyName **required** `string`: The facility county name from EPA's Facility Registry System
  * FacDerivedHuc **required** `string`: The 8-digit Hydrologic Unit Code (HUC) of the watershed in which the facility resides. A HUC number is assigned to every watershed in the nation and uniquely identifies the watershed.
  * FacDerivedTRIbes **required** `string`: The tribes or tribal territories located within 25 miles of the facility's location.
  * FacDerivedWBD **required** `string`: The Hydrologic Unit Code (HUC-12) of the waterbody in which the facility resides, derived based on location data in FRS.
  * FacDerivedWBDName **required** `string`: The 12 digit Watershed Boundary Dataset Name derived from the FRS Best Pick Coordinate
  * FacEisAIRReleases **required** `string`: The amount of hazardous air pollutants released to air in tons per year, as reported in the most recent National Emissions Inventory (NEI).
  * FacEisReporter **required** `string`: Indicates whether the facility reports to the Emissions Inventory System (EIS).
  * FacFIPSCode **required** `string`: The 2-digit Federal Information Processing Standards (FIPS) code to identify the county that a facility is located in.
  * FacFederalAgencyCode **required** `string`: Indicates the federal agency, as classified in FRS. Federal agencies are installations that are owned and operated by the U.S. government. The five-character code consists of a letter followed by four numbers. There are four possible letters that can occupy the first character position: C = Civilian Federal Agency; D = Department of Defense; E = Department of Energy; X = Unknown. The second and third characters represent the agency code, while the fourth and fifth characters represent the bureau code.
  * FacFederalAgencyName **required** `string`: Indicates the name of the federal agency, as classified in FRS. Federal agencies are installations that are owned and operated by the U.S. government.
  * FacGHGCO2Releases **required** `string`: The annual sum of total release amounts and "associated quantities" of all linked Greenhouse Gas IDs from the Office of Air and Radiation "Summary 2010 Greenhouse Gas Data." Units are reported as metric tons of CO2 equivalents per year (MTCO2e/year).
  * FacGHGReporter **required** `string`: Indicates whether the facility reports to the Greenhouse Gas Reporting Program (GHGRP)
  * FacIndianCntryFlg **required** `string`: Flag showing Y/N whether the facility is located in Indian Country.
  * FacIndianSpatialFlg **required** `string`: Returns “Y” if a facility is located within a tribal spatial boundary as defined by the U.S. Census Bureau 2010 tribal boundary layer data for tribes in the lower 48 states and Bureau of Land Management Alaska State Office data for native villages in Alaska. Returns “N” if a facility is not located within a tribal or native Alaskan village area.
  * FacMapFlg **required** `string`: Graphical indicator denoting whether geographical data required to map a facility are available.
  * FacMapIcon **required** `string`: The default map icon image file calculated for the facility by the ECHO program.
  * FacNaaFlag **required** `string`: Indicates whether the facility is located in a nonattainment area of the country, where air pollution levels persistently exceed the national ambient air quality standards. This flag does not indicate whether or not the facility has violated national ambient area quality standards.
  * FacPercentMinority **required** `number`: Percent Minority is the percentage of the population of the given area that is considered minority. Statistics are shown for the area within a 3-mile radius of each facility.
  * FacPopulationDensity **required** `number`: The number of persons per square mile in the profiled area.
  * FacSICCodes **required** `string`: Indicates the facility’s or permit's primary Standard Industrial Classification (SIC) Code. The SIC code describes the primary activity of the facility.
  * FacStdCountyName **required** `string`: The standardized  facility county name from EPA's Facility Registry System
  * FacTRIAIRReleases **required** `string`: The total chemical releases to air, in pounds, as reported to TRI by the facility for the most recent reporting year.
  * FacTRICarcAIRReleases **required** `string`: The pounds of chemicals considered to be carcinogens released to air, as reported to TRI for the most recent reporting year. Chemicals are classified as carcinogens under the requirements of the Occupational Safety and Health Administration (OSHA).
  * FacTRIHapsReleases **required** `string`: The pounds of chemicals classified as hazardous air pollutants (HAPS) released to air in pounds per year, as reported to TRI for the most recent reporting year.
  * FacTRIReporter **required** `string`: Indicates whether facility reported to the Toxics Release Inventory (TRI) for the most recent reporting year.
  * FacUsMexBorderFlg **required** `string`: A Y/N flag indicating that the facility is within 100KM of the US-Mexico Border.
  * GHGIDs **required** `string`: A unique ID assigned for each facility within EPA’s Greenhouse Gas Reporting Program (GHGRP) Emissions Data Sets.
  * HasPollRpt **required** `string`: ???
  * Infea5yrFlag **required** `number`: Indicates if the facility has an informal enforcement action within the last 5 years. 1 = Yes.
  * Insp5yrFlag **required** `number`: Indicates if the facility has an inspection within the last 5 years. 1 = Yes
  * LastDatePce **required** `string`: The date on which the most recent Partial Compliance Evaluation (PCE) of the facility by EPA or a state agency was completed.
  * LastDatePceEPA **required** `string`: The date on which the most recent Partial Compliance Evaluation (PCE) of the facility by EPA was completed.
  * LastDatePceSta **required** `string`: The date on which the most recent Partial Compliance Evaluation (PCE) of the facility by a state agency was completed.
  * LocalControlRegionCode **required** `string`: Code for regions within a state. Search criteria for DFR in OTIS.
  * LocalControlRegionName **required** `string`: Regions within a state. Search criteria for DFR in OTIS.
  * Lower48 **required** `string`: Flag showing Y/N whether location is within the contiguous (lower 48) United States.
  * Map **required** `string`: No Longer Used.
  * MaxPctileUs **required** `number`: The maximum percentile from all individual EJSCREEN indicators.
  * MaxScore **required** `number`: [Col. 121]
  * NaaCategories **required** `string`: The nonattainment area categories that the facility is in, derived spatially based on the facility's geographic coordinates in FRS.�
  * NaaPollutants **required** `string`: All criteria pollutants that the facility is in nonattainment for.
  * OtherPermitIDs **required** `string`
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
  * RCRAIDs **required** `string`: A unique 12-character ID assigned for each record/permit/site/facility within the RCRAInfo database.
  * ReferencePoint **required** `string`: ??
  * RegistryID **required** `string`: An internal 12-digit Facility Registry Service (FRS) tracking number used to tie all facility data together in EPA regulatory program databases.
  * RmpIDs **required** `string`: A unique ID assigned to each facility submitting a Risk Management Plan to EPA under the Risk Management Plan Rule.
  * SDWAIDs **required** `string`: A unique 9-character ID assigned for each public water system within the Safe Drinking Water Information System (SDWIS).
  * Score **required** `number`
  * SourceID **required** `string`: Unique Identifier assigned by EPA.
  * Statute **required** `string`: The name of the statute associated with each of the permits and identifiers linked to the facility: 
  * TRIIDs **required** `string`: A unique 15-character ID assigned for each facility within the Toxics Release Inventory (TRI) program. The format is ZZZZZNNNNNSSSSS, where ZZZZZ = ZIP code, NNNNN = the first 5 consonants of the name, and SSSSS = the first 5 non-blank non-special characters in the street address.
  * TRIbalFlag **required** `number`: A value of "1" indicates that the facility is within an Indian Tribal or Alaskan Native Village area.
  * ViolFlag **required** `number`: Indicates if the facility had a violation within the last 3 years. 1 = Yes
  * WebDocs **required** `string`: Contains flags that identify what web accessible documents are available for the facility.

### air11
* air11 `object`: Map Output Object
  * IconBaseURL **required** `string`: URL where all the icons are located
  * MapData **required** `array`: An array of facility geospatial information.
    * items [air02](#air02)
  * PopUpBaseURL **required** `string`: Combine this URL with the PUC to get popup info
  * QueryID **required** `string`: Sequential number assigned to entire search result

### air12
* air12 `object`: Results Object
  * Facilities **required** `array`: A complex array of facility information.
    * items [air03](#air03)
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


