# @datafire/epa_gov_cwa

Client library for U.S. EPA Enforcement and Compliance History Online (ECHO) - Clean Water Act (CWA) Rest Services

## Installation and Usage
```bash
npm install --save datafire @datafire/epa_gov_cwa
```

```js
let datafire = require('datafire');
let epa_gov_cwa = require('@datafire/epa_gov_cwa').actions;
let context = new datafire.Context();

epa_gov_cwa.rest_lookups.wbd_code_lu.get({}, context).then(data => {
  console.log(data);
})
```

## Description
Enforcement and Compliance History Online (ECHO) is a tool developed and maintained by EPA's Office of Enforcement and Compliance Assurance for public use. ECHO provides integrated compliance and enforcement information for about 800,000 regulated facilities nationwide.
<BR><BR>CWA Rest Services provides multiple service endpoints, each with specific capabilities, to search and retrieve data on facilities regulated under the Clean Water Act (CWA) and managed under the National Pollutant Discharge Elimination System (NPDES) program. The returned results reflect data drawn from EPA's ICIS-NPDES database.
<BR><BR>
The get_facilities, get_map, get_qid, and get_download end points are meant to be used together, while the enhanced get_facility_info end point is self contained.
  The get_facility_info end point returns either an array of state, county or zip clusters with summary statistics per cluster or an array of facilities.
<br><br>
The recommended use scenario for get_facilities, get_qid, get_map, and get_downoad is:
<br>
<br><b>1)</b>&nbsp Use get_facilities to validate passed query parameters, obtain summary statistics and to obtain a query_id (QID).  QIDs are time sensitive and will be valid for approximately 30 minutes.
<br><b>2)</b>&nbsp Use get_qid, with the returned QID, to paginate through arrays of facility results.
<br><b>3)</b>&nbsp Use get_map, with the returned QID, to zoom in/out and pan on the clustered and individual facility coordinates that meet the QID query criteria.
<br><b>4)</b>&nbsp Use get_download, with the returned QID, to generate a Comma Separated Value (CSV) file of facility information that meets the QID query criteria.
<br>
<br>
Use the qcolumns parameter to customize your search results.  Use the Metdata service endpoint for a list of available output objects, their Column Ids, and their definitions to help you build your customized output. 
<br><br>
Additional ECHO Resources:&nbsp&nbsp <a href="https://echo.epa.gov/tools/web-services">Web Services</a>, <a href="https://echo.epa.gov/resources/echo-data/about-the-data">About ECHO's Data</a>, <a href="https://echo.epa.gov/tools/data-downloads">Data Downloads</a>
<br>

## Actions
### cwa_rest_services.get_download.get
Based on the QID obtained from a get_facilities or get_facility_info query, return GeoJSON of the facilities found.


```js
epa_gov_cwa.cwa_rest_services.get_download.get({
  "qid": ""
}, context)
```

#### Parameters
* output (string) - Output Format Flag.  Enter one of the following keywords:
* qid (string) **required** - Query ID Selector.  Enter the QueryID number from a previously run query.
* qcolumns (string) - Used to cutomize service output.  A list of comma-separated column IDs of output objects that will be returned in the service query object or download.  Use the metadata service endpoint for a complete list of Ids and definitions.
* p_pretty_print (number) - Optional flag to request GeoJSON formatted results to be pretty printed.  Only provide a numeric value when the output needs to be human readable as pretty printing has a performance cost.

### cwa_rest_services.get_facilities.get
Validates query search parameters and returns query identifier.  Use the responseset parameter to set the page size


```js
epa_gov_cwa.cwa_rest_services.get_facilities.get({}, context)
```

#### Parameters
* output (string) - Output Format Flag.  Enter one of the following keywords:
* p_fn (string) - Facility Name Filter. Enter one or more case-insensitive facility names to filter results.  Provide multiple values as a comma-delimited list.  See p_fntype for additional modifiers.
* p_sa (string) - Facility street address. Enter a complete or partial street address.
* p_sa1 (string) - Facility street address. Enter a complete or partial street address.   Note that p_sa1 is culmulative with p_sa.
* p_ct (string) - Facility City Filter. Enter a single case-insensitive city name to filter results.
* p_co (string) - Facility County Filter. Provide a single county name in combination with a state value provided via p_st.
* p_fips (string) - FIPS Code Filter.  Enter a single 5-character Federal Information Processing Standards (FIPS) state + county value to restrict results.  E.g. to limit results to Kenosha County, Wisconsin, use 55059.
* p_st (string) - Facility State and State-Equivalent Filter.  Provide one or more USPS postal abbreviations for states and state-equivalents to filter results.  Provide multiple values as a comma-delimited list.
* p_zip (string) - 5-Digit ZIP Code Filter. Provide one or more 5-digit postal zip codes to filter results.  May contain multiple comma-separated values.
* p_frs (string) - Facility Registry Service ID Filter. Enter a single 12-digit FRS identifier to filter results.
* p_reg (string) - EPA Region Filter. Provide a single value of 01 thru 10 to restrict results to a single EPA region.
* p_sic (string) - Standard Industrial Classification (SIC) Code Filter.  Enter a single 4-digit SIC Code to filter results.  If more complex filtering is required, use p_sic2 and p_sic4.
* p_ncs (string) - North American Industry Classification System Filter. Enter two to six digits to filter results to facilities having matching NAICS codes.  Digits less than six will match to all codes beginning with the provided values.
* p_pen (string) - Last Penality Date Qualifier Filter.  Enter one of the following:   
* p_c1lat (number) - In decimal degrees.  Latitude of 1st corner of box that bounds the resulting facilities. The latitude and longitude of both corners of the bounding box must be provided.
* p_c1lon (number) - In decimal degrees.  Longitude of 1st corner of box that bounds the resulting facilities. The latitude and longitude of both corners of the bounding box must be provided.
* p_c2lat (number) - In decimal degrees.  Latitude of 2nd corner of box that bounds the resulting facilities. The latitude and longitude of both corners of the bounding box must be provided.
* p_c2lon (number) - In decimal degrees.  Longitude of 2nd corner of box that bounds the resulting facilities. The latitude and longitude of both corners of the bounding box must be provided.
* p_usmex (string) - US-Mexico Border Flag.  Enter Y/N to restrict searches to facilities located within 100KM of the border.
* p_sic2 (string) - Standard Industrial Classification (SIC) Code Filter Alternate 2. Enter a wild-card search against SIC codes.  A final wild-card is always present allowing "22" to match all SIC codes beginning with 22.  Use the "%" character within strings to match any SIC values with the pattern.  For example, "2%21" matches 2021, 2121, 2221, etc.
* p_sic4 (string) - Standard Industrial Classification (SIC) Code Filter Alternate 3.  Enter the first 2, 3 or 4 SIC code digits to filter results to facilities having those code prefixes.  As this alternative does not utilize an index, p_sic2 will generally be quicker.
* p_fa (string) - Federal Agency. 1 character or 5-character values; may contain multiple comma-separated values. ALL will retrieve all facilities where the federal agency code is not null.  Use the Federal Agencies lookup service to obtain a list of values.
* p_ff (string) - Federal Facility Indicator Flag. Enter Y to restrict searches to federal facilities.
* p_act (string) - Active Permits/Facilities Flag.  Provide Y or N to filter results to facilities with active permits.
* p_maj (string) - Major Facility Flag.  Enter Y to restrict results to Major facilities only.
* p_mact (string) - CAA Maximum Achievable Control Technology (MACT) Subpart codes (alpha ID between 1 and 7 characters) applicable to the facility.
* p_fea (string) - Formal Enforcement Actions [within / not within] specified date range indicator. The date range is determined by parameters p_fead1 and p_fead2 or by parameter p_feay.
* p_feay (number) - Years (1 to 5) Range.  This value is used to create a date range for Formal Enforcement Actions (FEA). Used along with p_fea (which indicates whether to look within or outside of the date range) to find FEAs within (or not within) the number of years specified.
* p_feaa (string) - Agency associated with Formal Enforcement Actions:
* p_iea (string) - Informal Enforcement Actions [within / not within] specified date range.  The date range is determined by parameters p_iead1 and p_iead2 or by parameter p_ieay.
* p_ieay (number) - Years (1 to 5) Range.  This value is used to create a date range for Informal Enforcement Actions (IEA). Used along with p_iea (which indicates whether to look within or outside of the date range) to find IEAs within (or not within) the number of years specified.
* p_ieaa (string) - Agency associated with Informal Enforcement Actions. If left blank, both agencies are included.
* p_qiv (string) - Quarters in Noncompliance Limiter.  Enter a coded value to limit results to facilities with given quarter of noncompliance.
* p_impw (string) - Discharging into Impaired Waters Flag. Enter Y to limit results to facilities with discharge to waterbodies listed as impaired in the ATTAINS database.
* p_imp_pol (string) - Facility is discharging pollutants that are potentially contributing to the impairment of local waterbodies according to the ATTAINS database.
* p_trep (string) - Current Toxics Release Inventory (TRI) Reporter Limiter.  Enter one of the following codes to limit results.
* p_pm (string) - Percent Minority Population Limiter.  Enter a value to restrict results to facilities with a given percentage of minority population within 3-mile radius.
* p_pd (string) - Population Density Limiter (per sq mile). Enter a value to limit results to facilities located in area of a given population density.
* p_ico (string) - Indian Country Flag.  Enter a "Y" or "N" to restrict searches to facilities inside or outside Indian Country.
* p_huc (string) - 2-, 4-, 6-, or 8-character watershed. May contain multiple comma-separated values.
* p_pid (string) - Nine-digit permit IDs. May contain up to 2000 comma-separated values.
* p_med (string) - Filter Results by Media.
* p_ysl (string) - Last Facility Inspection [within / not within] Specified Date Range Indicator. The date range is determined by parameters p_idt1 and p_idt2 or by parameter p_ysly.
* p_ysly (number) - Number of years (1 to 5) since last facility inspection.  A value of 1 means that it has been inspected within the year.
* p_ysla (string) - Facility Last Inspection Code Filter.  If left blank, both agencies are included.  Enter a value to limit results:
* p_qs (string) - Quick Search. Allows entry for city, state, and/or zip code.
* p_sfs (string) - Single Facility Search Filter.  Provide a facility name or program system identifier to limit results.  For the all data search, the FRS registry identifier is also searched.
* p_tribeid (number) - Numeric code for tribe (or list of tribes).
* p_tribename (string) - Tribe Name Filter.  Enter a single tribe name to filter results.
* p_tribedist (number) - Proximity to tribal land limiter. Enter an amount of mile between 0 and 25 to filter results.  This parameter is only evaluated if p_tribeid is populated.
* p_pstat (string) - Permit Status Filter.  Enter one or more of the following codes.  Provide multiple values as a comma-delimited list.
* p_ptype (string) - Permit Type Filter. Enter one or more code values to filter results.  Provide multiple values as a comma-delimited list.
* p_pcomp (string) - Permit Component Code Filter.  Enter one or more codes to filter results.  Provide multiple values as a comma-delimited list.
* p_plimits (string) - Permit Limits Present Flag.  Enter Y to limit results to facilities have present permit limits.
* p_pcss (string) - Combined Sewer Systems Outflows Limiter.  Enter one of the following to limit results to facilities having the given count of CSS outflows.
* p_pexp (string) - Permit Expired or Administratively Continued Limiter.  Enter one of the following values to filter results.
* p_owop (string) - Owner/Operator code filter.  Enter one of the following values to restrict results.
* p_agoo (string) - Indicates whether to AND or OR the Owner/Operator parameter (p_owop) and the federal agency code (p_fa) parameters.
* p_idt1 (string) - Beginning of date range of most recent facility inspection.
* p_idt2 (string) - End of date range of most recent facility inspection.
* p_pityp (string) - Inspection Type Code.  See ICIS Compliance Monitor Types lookup serivce for a list of available codes and descriptions.
* p_pfead1 (string) - Formal Enforcement Action Date Range Start.  Enter a date in MM/DD/YYYY format to set the start of the range for filtering by recent Formal Enforcement Action (FEA) taken against the facility within the last five years.
* p_pfead2 (string) - Formal Enforcement Action Date Range End.  Enter a date in MM/DD/YYYY format to set the end of the date range for filtering by recent Formal Enforcement Action (FEA) taken against the facility within the last five years.
* p_pfeat (string) - Formal Enforcement Action (FEA) Code Filter.  Enter one or more three-letter FEA codes to restrict results to facilities with these attributes.  Use p_fead1 and p_fead2 parameters to further restrict this filter by entering a date range.  Provide multiple codes as a comma-delimited list.
* p_pccs (string) - Current Compliance Status:
* p_pexcd (string) - 3-Year Effluent Exceedances Limiter.  Enter a value to restrict results to facilities with the given amount of exceedances in the past 3 years.
* p_psncq (string) - Quarters in Significant Noncompliance Limiter.  Enter a coded value to limit results to facilities with given quarter of significant noncompliance.
* p_pctrack (string) - Compliance Tracking Limiter. Provide a keyword to indicate the extent to which data is being entered and effluent exceedances are being identified.
* p_dwd (string) - Direct Water Discharges. Pounds of toxic chemicals released directly to surface water as reported to the Toxics Release Inventory.
* p_pt (string) - POTW Transfers. Pounds of toxic chemicals transferred to a Publicly Operated Treatment Works (POTW) as reported to the Toxics Release Inventory.
* p_pdwdist (string) - Distance (in miles) to downstream drinking water intake.
* p_pswdpc (string) - Pollutant Category Code:  Values: WTR for Water, AIR for Air
* p_pswdmp (string) - Used to determine limit begin and end dates for surface water discharges. Number represents years from current date.
* p_pswpol (string) - For CWA, pollutant names for surface water discharges. for Drinking Water, SDWIS Violation contaminant codes for unaddressed violations that have occurred in the last 3 years. May contain multiple comma-separated values.
* p_pswcas (string) - CAS numbers for surface water discharges. May contain multiple comma-separated values.
* p_pswparam (string) - Parameter codes for surface water discharges. May contain multiple comma-separated values.
* p_pswvio (string) - Used in conjuction with parameters p_pswpol and p_pswparam, indicates whether search should only include pollutants with violations.
* p_wbd (string) - 2-, 4-, 6-, or 8-character watershed (WBD from the USGS Watershed Boundary Dataset). May contain multiple comma-separated values.
* p_fntype (string) - Controls type of text search performed on facility name with parameter p_fn.
* p_pidall (string) - Controls whether search is restricted to existing system. Y means the search will match the p_pid parameter against all associated permits (AIR, RCRA, SDWIS, etc).
* p_months_last_dmr (number) - The number of months since the last Discharge Monitoring Report has been submitted.
* p_last_dmr_within (string) - W value returns facilities that have submitted DMRs within the number of months specified by p_months_last_dmr. An N value returns facilities that have not submitted a DMR within the specified number of months.
* p_indsw (string) - Industrial Stormwater Permit Flag.  Enter a Y or N to filter results by this type of permit.
* p_msgp_ptype (string) - Multi-Sector General Purpose Permit Type.  Enter a value to filter results by MSGP Permit Type.
* p_iagency (string) - Issuing Agency Limiter.  Enter a single value to filter results by the issuing agency, e.g. "State" or "EPA".
* p_isws (string) - Multi-Sector General Purpose Permit Subsector Individual Identifier.  Enter a value to filter results.
* p_iswss (string) - Multi-Sector General Purpose Permit Subsector Group Code.  Enter a value to filter results.
* p_iswssID (string) - Multi-Sector General Purpose Permit Sector Code.  Enter a value to filter results.
* p_ds1 (string) - Submitted Date Filter Start.  To filter by the date of submission, enter a start date here and an end date in the p_ds2 parameter.  Both dates are required for filtering.
* p_ds2 (string) - Submitted Date Filter End.  To filter by the date of submission, enter an end date here and a start date in the p_ds1 parameter.  Both dates are required for filtering.
* p_da1 (string) - Active Date Filter Start.  To filter by the active date, enter a start date here and an end date in the p_da2 parameter.  Both dates are required for filtering.
* p_da2 (string) - Active Date Filter End.  To filter by the active date, enter an end date here and a start date in the p_da1 parameter.  Both dates are required for filtering.
* p_MS4 (string) - Municipal Separate Storm Water Sewer (MS4) Permit Flag.  Enter a Y or N to filter results by this type of permit.
* p_ooFN (string) - Owner/Operator Name. Enter the owner/operator name of the facility.
* p_ooFNtype (string) - Owner/Operator Name Multiple Selection Evaluator.  
* p_ooSA (string) - Owner/Operator Address.  Enter the address of the owner/operator of the facility.
* p_ooSA1 (string) - Owner/Operator Address Line 2.  Enter the line 2 address of the owner/operator of the facility.
* p_ooCt (string) - Owner/Operator City. Enter the city where the owner/operator of the facility is located.
* p_ooSt (string) - Owner/Operator State.  Enter the standardized postal state code where the owner/operator of the facility is located.
* p_ooZip (string) - Owner/Operator Zip Code.  Enter the postal zip code where the owner/operator of the facility is located.
* p_fac_ico (string) - FRS tribal land code flag.  Enter "Y" or "N" to include or exclude facilities based on FRS tribal land code.
* p_icoo (string) - Indian country search and/or flag.  Enter "Y" to set indian country search conditions to return any results found using p_ico, p_fac_ico or p_fac_icoo.  Otherwise only results matching all provided p_ico, p_fac_ico or p_fac_icoo conditions will be returned.
* p_fac_icos (string) - FRS tribal land spatial flag.  Enter "Y" or "N" to include or exclude facilities based on FRS tribal land spatial flag.
* p_ejscreen (string) - Enter "Y" to limit facilities to Census block groups where one of more Environmental Justice indexes above 80th percentile.
* p_alrexceed (number) - Alert Limits Exceedences Limiter.  Enter a numeric value to restrict results to facilities having the given amount or more of alert limits exceedances.
* p_limit_addr (string) - Limit Address Search Flag.  Enter Y to restrict facility searches to native data source only.  
* p_lat (number) - Latitude location in decimal degrees.
* p_long (number) - Longitude location in decimal degrees.
* p_radius (number) - Spatial Search Radius.  Enter a radius up to 100 miles in which to spatially search for facilities.
* p_decouple (string) - Decouple Inspection Code Search Flag.  Enter "Y" to search for inspection code types with p_pityp without respect to the date range search provided with p_ysl* parameters.
* p_ejscreen_over80cnt (string)
* queryset (number) - Query Limiter.  Enter a value to limit the number of records returned for each query. Value cannot exceed 70,000.
* responseset (number) - Response Set Limiter. Enter a value to limit the number of records per page. Value cannot exceed 1,000.
* tablelist (string) - Table List Flag. Enter a Y to display the first page of facility results.
* maplist (string) - Map List Flag.  Provide a Y to return mappable coordinates representing the full geographic extent of the queryset (all facilities that met the selection criteria).
* summarylist (string) - Summary List Flag.  Enter a Y to return a list of summary statistics based on the parameters submitted to the query service.
* callback (string) - JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.
* qcolumns (string) - Used to cutomize service output.  A list of comma-separated column IDs of output objects that will be returned in the service query object or download.  Use the metadata service endpoint for a complete list of Ids and definitions.

### cwa_rest_services.get_facility_info.get
Returns either an array of Facilities or an array of Clusters that meet the specified search criteria.


```js
epa_gov_cwa.cwa_rest_services.get_facility_info.get({}, context)
```

#### Parameters
* output (string) - Output Format Flag.  Enter one of the following keywords:
* p_fn (string) - Facility Name Filter. Enter one or more case-insensitive facility names to filter results.  Provide multiple values as a comma-delimited list.  See p_fntype for additional modifiers.
* p_sa (string) - Facility street address. Enter a complete or partial street address.
* p_sa1 (string) - Facility street address. Enter a complete or partial street address.   Note that p_sa1 is culmulative with p_sa.
* p_ct (string) - Facility City Filter. Enter a single case-insensitive city name to filter results.
* p_co (string) - Facility County Filter. Provide a single county name in combination with a state value provided via p_st.
* p_fips (string) - FIPS Code Filter.  Enter a single 5-character Federal Information Processing Standards (FIPS) state + county value to restrict results.  E.g. to limit results to Kenosha County, Wisconsin, use 55059.
* p_st (string) - Facility State and State-Equivalent Filter.  Provide one or more USPS postal abbreviations for states and state-equivalents to filter results.  Provide multiple values as a comma-delimited list.
* p_zip (string) - 5-Digit ZIP Code Filter. Provide one or more 5-digit postal zip codes to filter results.  May contain multiple comma-separated values.
* p_frs (string) - Facility Registry Service ID Filter. Enter a single 12-digit FRS identifier to filter results.
* p_reg (string) - EPA Region Filter. Provide a single value of 01 thru 10 to restrict results to a single EPA region.
* p_sic (string) - Standard Industrial Classification (SIC) Code Filter.  Enter a single 4-digit SIC Code to filter results.  If more complex filtering is required, use p_sic2 and p_sic4.
* p_ncs (string) - North American Industry Classification System Filter. Enter two to six digits to filter results to facilities having matching NAICS codes.  Digits less than six will match to all codes beginning with the provided values.
* p_pen (string) - Last Penality Date Qualifier Filter.  Enter one of the following:   
* xmin (number) - Minimum longitude value in decimal degrees.
* ymin (number) - Minimum latitude value in decimal degrees.
* xmax (number) - Maximum longitude value in decimal degrees.
* ymax (number) - Maximum latitude value in decimal degrees.
* p_usmex (string) - US-Mexico Border Flag.  Enter Y/N to restrict searches to facilities located within 100KM of the border.
* p_sic2 (string) - Standard Industrial Classification (SIC) Code Filter Alternate 2. Enter a wild-card search against SIC codes.  A final wild-card is always present allowing "22" to match all SIC codes beginning with 22.  Use the "%" character within strings to match any SIC values with the pattern.  For example, "2%21" matches 2021, 2121, 2221, etc.
* p_sic4 (string) - Standard Industrial Classification (SIC) Code Filter Alternate 3.  Enter the first 2, 3 or 4 SIC code digits to filter results to facilities having those code prefixes.  As this alternative does not utilize an index, p_sic2 will generally be quicker.
* p_fa (string) - Federal Agency. 1 character or 5-character values; may contain multiple comma-separated values. ALL will retrieve all facilities where the federal agency code is not null.  Use the Federal Agencies lookup service to obtain a list of values.
* p_ff (string) - Federal Facility Indicator Flag. Enter Y to restrict searches to federal facilities.
* p_act (string) - Active Permits/Facilities Flag.  Provide Y or N to filter results to facilities with active permits.
* p_maj (string) - Major Facility Flag.  Enter Y to restrict results to Major facilities only.
* p_mact (string) - CAA Maximum Achievable Control Technology (MACT) Subpart codes (alpha ID between 1 and 7 characters) applicable to the facility.
* p_fea (string) - Formal Enforcement Actions [within / not within] specified date range indicator. The date range is determined by parameters p_fead1 and p_fead2 or by parameter p_feay.
* p_feay (number) - Years (1 to 5) Range.  This value is used to create a date range for Formal Enforcement Actions (FEA). Used along with p_fea (which indicates whether to look within or outside of the date range) to find FEAs within (or not within) the number of years specified.
* p_feaa (string) - Agency associated with Formal Enforcement Actions:
* p_iea (string) - Informal Enforcement Actions [within / not within] specified date range.  The date range is determined by parameters p_iead1 and p_iead2 or by parameter p_ieay.
* p_ieay (number) - Years (1 to 5) Range.  This value is used to create a date range for Informal Enforcement Actions (IEA). Used along with p_iea (which indicates whether to look within or outside of the date range) to find IEAs within (or not within) the number of years specified.
* p_ieaa (string) - Agency associated with Informal Enforcement Actions. If left blank, both agencies are included.
* p_qiv (string) - Quarters in Noncompliance Limiter.  Enter a coded value to limit results to facilities with given quarter of noncompliance.
* p_impw (string) - Discharging into Impaired Waters Flag. Enter Y to limit results to facilities with discharge to waterbodies listed as impaired in the ATTAINS database.
* p_imp_pol (string) - Facility is discharging pollutants that are potentially contributing to the impairment of local waterbodies according to the ATTAINS database.
* p_trep (string) - Current Toxics Release Inventory (TRI) Reporter Limiter.  Enter one of the following codes to limit results.
* p_pm (string) - Percent Minority Population Limiter.  Enter a value to restrict results to facilities with a given percentage of minority population within 3-mile radius.
* p_pd (string) - Population Density Limiter (per sq mile). Enter a value to limit results to facilities located in area of a given population density.
* p_ico (string) - Indian Country Flag.  Enter a "Y" or "N" to restrict searches to facilities inside or outside Indian Country.
* p_huc (string) - 2-, 4-, 6-, or 8-character watershed. May contain multiple comma-separated values.
* p_pid (string) - Nine-digit permit IDs. May contain up to 2000 comma-separated values.
* p_med (string) - Filter Results by Media.
* p_ysl (string) - Last Facility Inspection [within / not within] Specified Date Range Indicator. The date range is determined by parameters p_idt1 and p_idt2 or by parameter p_ysly.
* p_ysly (number) - Number of years (1 to 5) since last facility inspection.  A value of 1 means that it has been inspected within the year.
* p_ysla (string) - Facility Last Inspection Code Filter.  If left blank, both agencies are included.  Enter a value to limit results:
* p_qs (string) - Quick Search. Allows entry for city, state, and/or zip code.
* p_sfs (string) - Single Facility Search Filter.  Provide a facility name or program system identifier to limit results.  For the all data search, the FRS registry identifier is also searched.
* p_tribeid (number) - Numeric code for tribe (or list of tribes).
* p_tribename (string) - Tribe Name Filter.  Enter a single tribe name to filter results.
* p_tribedist (number) - Proximity to tribal land limiter. Enter an amount of mile between 0 and 25 to filter results.  This parameter is only evaluated if p_tribeid is populated.
* p_pstat (string) - Permit Status Filter.  Enter one or more of the following codes.  Provide multiple values as a comma-delimited list.
* p_ptype (string) - Permit Type Filter. Enter one or more code values to filter results.  Provide multiple values as a comma-delimited list.
* p_pcomp (string) - Permit Component Code Filter.  Enter one or more codes to filter results.  Provide multiple values as a comma-delimited list.
* p_plimits (string) - Permit Limits Present Flag.  Enter Y to limit results to facilities have present permit limits.
* p_pcss (string) - Combined Sewer Systems Outflows Limiter.  Enter one of the following to limit results to facilities having the given count of CSS outflows.
* p_pexp (string) - Permit Expired or Administratively Continued Limiter.  Enter one of the following values to filter results.
* p_owop (string) - Owner/Operator code filter.  Enter one of the following values to restrict results.
* p_agoo (string) - Indicates whether to AND or OR the Owner/Operator parameter (p_owop) and the federal agency code (p_fa) parameters.
* p_idt1 (string) - Beginning of date range of most recent facility inspection.
* p_idt2 (string) - End of date range of most recent facility inspection.
* p_pityp (string) - Inspection Type Code.  See ICIS Compliance Monitor Types lookup serivce for a list of available codes and descriptions.
* p_pfead1 (string) - Formal Enforcement Action Date Range Start.  Enter a date in MM/DD/YYYY format to set the start of the range for filtering by recent Formal Enforcement Action (FEA) taken against the facility within the last five years.
* p_pfead2 (string) - Formal Enforcement Action Date Range End.  Enter a date in MM/DD/YYYY format to set the end of the date range for filtering by recent Formal Enforcement Action (FEA) taken against the facility within the last five years.
* p_pfeat (string) - Formal Enforcement Action (FEA) Code Filter.  Enter one or more three-letter FEA codes to restrict results to facilities with these attributes.  Use p_fead1 and p_fead2 parameters to further restrict this filter by entering a date range.  Provide multiple codes as a comma-delimited list.
* p_pccs (string) - Current Compliance Status:
* p_pexcd (string) - 3-Year Effluent Exceedances Limiter.  Enter a value to restrict results to facilities with the given amount of exceedances in the past 3 years.
* p_psncq (string) - Quarters in Significant Noncompliance Limiter.  Enter a coded value to limit results to facilities with given quarter of significant noncompliance.
* p_pctrack (string) - Compliance Tracking Limiter. Provide a keyword to indicate the extent to which data is being entered and effluent exceedances are being identified.
* p_dwd (string) - Direct Water Discharges. Pounds of toxic chemicals released directly to surface water as reported to the Toxics Release Inventory.
* p_pt (string) - POTW Transfers. Pounds of toxic chemicals transferred to a Publicly Operated Treatment Works (POTW) as reported to the Toxics Release Inventory.
* p_pdwdist (string) - Distance (in miles) to downstream drinking water intake.
* p_pswdpc (string) - Pollutant Category Code:  Values: WTR for Water, AIR for Air
* p_pswdmp (string) - Used to determine limit begin and end dates for surface water discharges. Number represents years from current date.
* p_pswpol (string) - For CWA, pollutant names for surface water discharges. for Drinking Water, SDWIS Violation contaminant codes for unaddressed violations that have occurred in the last 3 years. May contain multiple comma-separated values.
* p_pswcas (string) - CAS numbers for surface water discharges. May contain multiple comma-separated values.
* p_pswparam (string) - Parameter codes for surface water discharges. May contain multiple comma-separated values.
* p_pswvio (string) - Used in conjuction with parameters p_pswpol and p_pswparam, indicates whether search should only include pollutants with violations.
* p_wbd (string) - 2-, 4-, 6-, or 8-character watershed (WBD from the USGS Watershed Boundary Dataset). May contain multiple comma-separated values.
* p_fntype (string) - Controls type of text search performed on facility name with parameter p_fn.
* p_pidall (string) - Controls whether search is restricted to existing system. Y means the search will match the p_pid parameter against all associated permits (AIR, RCRA, SDWIS, etc).
* p_months_last_dmr (number) - The number of months since the last Discharge Monitoring Report has been submitted.
* p_last_dmr_within (string) - W value returns facilities that have submitted DMRs within the number of months specified by p_months_last_dmr. An N value returns facilities that have not submitted a DMR within the specified number of months.
* p_indsw (string) - Industrial Stormwater Permit Flag.  Enter a Y or N to filter results by this type of permit.
* p_msgp_ptype (string) - Multi-Sector General Purpose Permit Type.  Enter a value to filter results by MSGP Permit Type.
* p_iagency (string) - Issuing Agency Limiter.  Enter a single value to filter results by the issuing agency, e.g. "State" or "EPA".
* p_isws (string) - Multi-Sector General Purpose Permit Subsector Individual Identifier.  Enter a value to filter results.
* p_iswss (string) - Multi-Sector General Purpose Permit Subsector Group Code.  Enter a value to filter results.
* p_iswssID (string) - Multi-Sector General Purpose Permit Sector Code.  Enter a value to filter results.
* p_ds1 (string) - Submitted Date Filter Start.  To filter by the date of submission, enter a start date here and an end date in the p_ds2 parameter.  Both dates are required for filtering.
* p_ds2 (string) - Submitted Date Filter End.  To filter by the date of submission, enter an end date here and a start date in the p_ds1 parameter.  Both dates are required for filtering.
* p_da1 (string) - Active Date Filter Start.  To filter by the active date, enter a start date here and an end date in the p_da2 parameter.  Both dates are required for filtering.
* p_da2 (string) - Active Date Filter End.  To filter by the active date, enter an end date here and a start date in the p_da1 parameter.  Both dates are required for filtering.
* p_MS4 (string) - Municipal Separate Storm Water Sewer (MS4) Permit Flag.  Enter a Y or N to filter results by this type of permit.
* p_ooFN (string) - Owner/Operator Name. Enter the owner/operator name of the facility.
* p_ooFNtype (string) - Owner/Operator Name Multiple Selection Evaluator.  
* p_ooSA (string) - Owner/Operator Address.  Enter the address of the owner/operator of the facility.
* p_ooSA1 (string) - Owner/Operator Address Line 2.  Enter the line 2 address of the owner/operator of the facility.
* p_ooCt (string) - Owner/Operator City. Enter the city where the owner/operator of the facility is located.
* p_ooSt (string) - Owner/Operator State.  Enter the standardized postal state code where the owner/operator of the facility is located.
* p_ooZip (string) - Owner/Operator Zip Code.  Enter the postal zip code where the owner/operator of the facility is located.
* p_fac_ico (string) - FRS tribal land code flag.  Enter "Y" or "N" to include or exclude facilities based on FRS tribal land code.
* p_icoo (string) - Indian country search and/or flag.  Enter "Y" to set indian country search conditions to return any results found using p_ico, p_fac_ico or p_fac_icoo.  Otherwise only results matching all provided p_ico, p_fac_ico or p_fac_icoo conditions will be returned.
* p_fac_icos (string) - FRS tribal land spatial flag.  Enter "Y" or "N" to include or exclude facilities based on FRS tribal land spatial flag.
* p_ejscreen (string) - Enter "Y" to limit facilities to Census block groups where one of more Environmental Justice indexes above 80th percentile.
* p_alrexceed (number) - Alert Limits Exceedences Limiter.  Enter a numeric value to restrict results to facilities having the given amount or more of alert limits exceedances.
* p_limit_addr (string) - Limit Address Search Flag.  Enter Y to restrict facility searches to native data source only.  
* p_lat (number) - Latitude location in decimal degrees.
* p_long (number) - Longitude location in decimal degrees.
* p_radius (number) - Spatial Search Radius.  Enter a radius up to 100 miles in which to spatially search for facilities.
* p_decouple (string) - Decouple Inspection Code Search Flag.  Enter "Y" to search for inspection code types with p_pityp without respect to the date range search provided with p_ysl* parameters.
* p_ejscreen_over80cnt (string)
* responseset (number) - Response Set Limiter. Enter a value to limit the number of records per page. Value cannot exceed 1,000.
* callback (string) - JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.
* qcolumns (string) - Used to cutomize service output.  A list of comma-separated column IDs of output objects that will be returned in the service query object or download.  Use the metadata service endpoint for a complete list of Ids and definitions.
* p_pretty_print (number) - Optional flag to request GeoJSON formatted results to be pretty printed.  Only provide a numeric value when the output needs to be human readable as pretty printing has a performance cost.

### cwa_rest_services.get_geojson.get
Based on the QID obtained from a get_facilities or get_facility_info query, return a comma sepated vaule (CSV) file of the facilities found.


```js
epa_gov_cwa.cwa_rest_services.get_geojson.get({
  "qid": ""
}, context)
```

#### Parameters
* output (string) - Output Format Flag.  Enter one of the following keywords:
* qid (string) **required** - Query ID Selector.  Enter the QueryID number from a previously run query.
* callback (string) - JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.
* newsort (number) - Output Sort Column.  Enter the number of the column on which the data will be sorted. If unpopulated results will sort on the first column.
* descending (string) - Output Sort Column Descending Flag.  Enter Y to column identified in the newsort parameter descending.  Enter N to use ascending sort order. Used only when newsort parameter is populated.
* qcolumns (string) - Used to cutomize service output.  A list of comma-separated column IDs of output objects that will be returned in the service query object or download.  Use the metadata service endpoint for a complete list of Ids and definitions.
* p_pretty_print (number) - Optional flag to request GeoJSON formatted results to be pretty printed.  Only provide a numeric value when the output needs to be human readable as pretty printing has a performance cost.

### cwa_rest_services.get_info_clusters.get
Based on the QID obtained from a clustered get_facility_info query, download cluster facility information as either a CSV or GEOJSON file.


```js
epa_gov_cwa.cwa_rest_services.get_info_clusters.get({
  "p_qid": ""
}, context)
```

#### Parameters
* output (string) - Output Format Flag.  Enter one of the following keywords:
* p_qid (string) **required** - Query ID Selector.  Enter the QueryID number from a previously run query.
* p_pretty_print (number) - Optional flag to request GeoJSON formatted results to be pretty printed.  Only provide a numeric value when the output needs to be human readable as pretty printing has a performance cost.

### cwa_rest_services.get_map.get
The purpose of the GET_MAP service is to display facility coordinates and facility clusters related to a get_facilities facility query. Currently, the maximum number of coordinates returned is 500. GET_MAP performs automatic clustering at the state, county, and zip code levels to maximize the number of coordinates returned.


```js
epa_gov_cwa.cwa_rest_services.get_map.get({
  "qid": "",
  "p_id": ""
}, context)
```

#### Parameters
* output (string) - Output Format Flag.  Enter one of the following keywords:
* qid (string) **required** - Query ID Selector.  Enter the QueryID number from a previously run query.
* callback (string) - JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.
* tablelist (string) - Table List Flag. Enter a Y to display the first page of facility results.
* c1_lat (number) - Latitude of 1st corner of box that bounds the resulting facilities. The latitude and longitude of both corners of the bounding box must be provided.
* c1_long (number) - Longitude of 1st corner of box that bounds the resulting facilities. The latitude and longitude of both corners of the bounding box must be provided.
* c2_lat (number) - Latitude of 2nd corner of box that bounds the resulting facilities. The latitude and longitude of both corners of the bounding box must be provided.
* c2_long (number) - Longitude of 2nd corner of box that bounds the resulting facilities. The latitude and longitude of both corners of the bounding box must be provided.
* p_id (string) **required** - Nine-character code used to uniquely identify a permitted NPDES facility. The NPDES permit program regulates the direct discharge of pollutants into US waters.

### cwa_rest_services.get_qid.get
GET_QID is passed with a query ID corresponding to a previously run get_facilities query. It then returns a Facility object containing all matching facilities. The main purpose of GET_QID is for large querysets that contain multiple pages (responsesets) of output. GET_QID allows for pagination and for the selection and sorting of columns. 


```js
epa_gov_cwa.cwa_rest_services.get_qid.get({
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
* qcolumns (string) - Used to cutomize service output.  A list of comma-separated column IDs of output objects that will be returned in the service query object or download.  Use the metadata service endpoint for a complete list of Ids and definitions.

### cwa_rest_services.metadata.get
Returns the JSON Object Name and ColumnId for usage with the qcolumns parameter for get_qid, get_facility_info and other service endpoints.


```js
epa_gov_cwa.cwa_rest_services.metadata.get({}, context)
```

#### Parameters
* output (string) - Output Format Flag.  Enter one of the following keywords:
* callback (string) - JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.

### rest_lookups.bp_tribes.get
Returns the EPA Standard Indian Tribes and Native Alaskan Villages tribal_id and tribe_name.


```js
epa_gov_cwa.rest_lookups.bp_tribes.get({}, context)
```

#### Parameters
* output (string) - Output Format Flag.  Enter one of the following keywords:
* callback (string) - JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.
* search_term (string) - Enter a partial or complete search phrase or word.

### rest_lookups.cwa_parameters.get
Look up Clean Water Act parameter codes and descriptions in the Integrated Compliance Information System - National Pollutant Discharge Elimination System (ICIS-NPDES) by code or term.


```js
epa_gov_cwa.rest_lookups.cwa_parameters.get({}, context)
```

#### Parameters
* output (string) - Output Format Flag.  Enter one of the following keywords:
* callback (string) - JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.
* search_term (string) - Enter a partial or complete search phrase or word.
* search_code (string) - Enter a partial or complete code value.

### rest_lookups.cwa_pollutants.get
ECHO CWA Pollutants Lookup Service


```js
epa_gov_cwa.rest_lookups.cwa_pollutants.get({}, context)
```

#### Parameters
* output (string) - Output Format Flag.  Enter one of the following keywords:
* callback (string) - JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.
* search_term (string) - Enter a partial or complete search phrase or word.
* search_code (string) - Enter a partial or complete code value.

### rest_lookups.federal_agencies.get
Look up Federal Agency Code


```js
epa_gov_cwa.rest_lookups.federal_agencies.get({}, context)
```

#### Parameters
* output (string) - Output Format Flag.  Enter one of the following keywords:
* callback (string) - JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.
* search_term (string) - Enter a partial or complete search phrase or word.
* search_code (string) - Enter a partial or complete code value.

### rest_lookups.icis_inspection_types.get
Returns the ICIS NPDES Compliance Monitoring Type Code and Description.


```js
epa_gov_cwa.rest_lookups.icis_inspection_types.get({}, context)
```

#### Parameters
* output (string) - Output Format Flag.  Enter one of the following keywords:
* callback (string) - JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.
* search_term (string) - Enter a partial or complete search phrase or word.
* search_code (string) - Enter a partial or complete code value.

### rest_lookups.icis_law_sections.get
Returns the ICIS Law Section Descriptions.


```js
epa_gov_cwa.rest_lookups.icis_law_sections.get({}, context)
```

#### Parameters
* output (string) - Output Format Flag.  Enter one of the following keywords:
* callback (string) - JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.
* statute_code (string)
* status_flag (string)
* search_term (string) - Enter a partial or complete search phrase or word.
* search_code (string) - Enter a partial or complete code value.
* sort_order (number)

### rest_lookups.naics_codes.get
ECHO NAICS Codes Lookup Service


```js
epa_gov_cwa.rest_lookups.naics_codes.get({}, context)
```

#### Parameters
* output (string) - Output Format Flag.  Enter one of the following keywords:
* callback (string) - JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.
* search_term (string) - Enter a partial or complete search phrase or word.
* search_code (string) - Enter a partial or complete code value.

### rest_lookups.npdes_parameters.get
ICIS Limit Parameter Code and Name lookup based on the supply of a partial parameter name. (NPDES = National Pollutant Discharge Elimination System)


```js
epa_gov_cwa.rest_lookups.npdes_parameters.get({}, context)
```

#### Parameters
* output (string) - Output Format Flag.  Enter one of the following keywords:
* callback (string) - JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.
* search_term (string) - Enter a partial or complete search phrase or word.

### rest_lookups.wbd_code_lu.get
USGS Watershed Boundary Dataset (WBD) Name lookup based on a supplied WBD Code and Watershed Level


```js
epa_gov_cwa.rest_lookups.wbd_code_lu.get({}, context)
```

#### Parameters
* output (string) - Output Format Flag.  Enter one of the following keywords:
* callback (string) - JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.
* wbd_code (string) - Two-digit watershed code [Hydrologic Unit Code (HUC)].
* wbd_level (string) - The number of digits of the watershed code [Hydrologic Unit Code (HUC)] returned in the ValueCode. Must be an even number between 4 and 12.

### rest_lookups.wbd_name_lu.get
USGS Watershed Boundary Dataset (WBD) Code lookup based on a supplied WBD Name and Watershed Level


```js
epa_gov_cwa.rest_lookups.wbd_name_lu.get({
  "wbd_name": ""
}, context)
```

#### Parameters
* output (string) - Output Format Flag.  Enter one of the following keywords:
* callback (string) - JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.
* wbd_name (string) **required** - Watershed Name Filter.
* wbd_level (string) - The number of digits of the watershed code [Hydrologic Unit Code (HUC)] returned in the ValueCode. Must be an even number between 4 and 12.

