# @datafire/epa_gov_cwa

Client library for U.S. EPA Enforcement and Compliance History Online (ECHO) - Clean Water Act (CWA) Rest Services

## Installation and Usage
```bash
npm install --save @datafire/epa_gov_cwa
```
```js
let epa_gov_cwa = require('@datafire/epa_gov_cwa').create();

.then(data => {
  console.log(data);
});
```

## Description

Enforcement and Compliance History Online (ECHO) is a tool developed and maintained by EPA's Office of Enforcement and Compliance Assurance for public use. ECHO provides integrated compliance and enforcement information for over 1 million regulated facilities nationwide.
 CWA Rest Services provides multiple service endpoints, each with specific capabilities, to search and retrieve data on facilities regulated under the Clean Water Act (CWA) and managed under the National Pollutant Discharge Elimination System (NPDES) program. The returned results reflect data drawn from EPA's ICIS-NPDES database.
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

### cwa_rest_services.get_download.get
Based on the QID obtained from a get_facilities or get_facility_info query, return a comma separated value (CSV) file of the facilities found.


```js
epa_gov_cwa.cwa_rest_services.get_download.get({
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

### cwa_rest_services.get_download.post
Based on the QID obtained from a get_facilities or get_facility_info query, return a comma separated value (CSV) file of the facilities found.


```js
epa_gov_cwa.cwa_rest_services.get_download.post({
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

### cwa_rest_services.get_facilities.get
Validates query search parameters and returns query identifier.  Use the responseset parameter to set the page size


```js
epa_gov_cwa.cwa_rest_services.get_facilities.get({}, context)
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
  * p_act `string`: Active Permits/Facilities Flag.  Provide Y or N to filter results to facilities with active permits.  A Y will select ICIS NPDES permits with a status of effective, continued, or expired.
  * p_maj `string` (values: Y, N): Major Facility Flag.  Enter Y to restrict results to Major facilities only.
  * p_mact `string`: CAA Maximum Achievable Control Technology (MACT) Subpart codes (alpha ID between 1 and 7 characters) applicable to the facility.
  * p_fea `string` (values: W, N): Formal Enforcement Actions [within / not within] specified date range indicator. The date range is determined by parameters p_fead1 and p_fead2 or by parameter p_feay.
  * p_feay `number` (values: 1, 2, 3, 4, 5): Years (1 to 5) Range.  This value is used to create a date range for Formal Enforcement Actions (FEA). Used along with p_fea (which indicates whether to look within or outside of the date range) to find FEAs within (or not within) the number of years specified.
  * p_feaa `string` (values: A, E, S): Agency associated with Formal Enforcement Actions:
  * p_iea `string` (values: W, N): Informal Enforcement Actions [within / not within] specified date range.  The date range is determined by parameters p_iead1 and p_iead2 or by parameter p_ieay.
  * p_ieay `number` (values: 1, 2, 3, 4, 5): Years (1 to 5) Range.  This value is used to create a date range for Informal Enforcement Actions (IEA). Used along with p_iea (which indicates whether to look within or outside of the date range) to find IEAs within (or not within) the number of years specified.
  * p_ieaa `string` (values: E, S): Agency associated with Informal Enforcement Actions. If left blank, both agencies are included.
  * p_qiv `string` (values: 0, GT1, GT2, GT4, GT8, 12): Quarters in Noncompliance Limiter.  Enter a coded value to limit results to facilities with given quarter of noncompliance.
  * p_iv `string`: Facility has a violation status of 'In Viol' during any of the selected quarters. 
  * p_impw `string` (values: Y, N): Discharging into Impaired Waters Flag. Enter Y to limit results to facilities with discharge to waterbodies listed as impaired in the ATTAINS database.
  * p_imp_cau_grp `string` (values: ALGAL GROWTH, AMMONIA, BIOTOXINS, CAUSE UNKNOWN, CAUSE UNKNOWN - FISH KILLS, CAUSE UNKNOWN - IMPAIRED BIOTA, CHLORINE, DIOXINS, FISH CONSUMPTION ADVISORY, FLOW ALTERATION(S), HABITAT ALTERATIONS, MERCURY, METALS (OTHER THAN MERCURY), NOXIOUS AQUATIC PLANTS, NUISANCE EXOTIC SPECIES, NUISANCE NATIVE SPECIES, NUTRIENTS, OIL AND GREASE, ORGANIC ENRICHMENT/OXYGEN DEPLETION, OTHER CAUSE, PATHOGENS, PESTICIDES, PH/ACIDITY/CAUSTIC CONDITIONS, POLYCHLORINATED BIPHENYLS (PCBS), RADIATION, SALINITY/TOTAL DISSOLVED SOLIDS/CHLORIDES/SULFATES, SEDIMENT, TASTE, COLOR AND ODOR, TEMPERATURE, TOTAL TOXICS, TOXIC INORGANICS, TOXIC ORGANICS, TRASH, TURBIDITY): Facility is discharging a pollutant group causing a waterbody to be impaired.  Enter 1 through 34 (the internal number of the pollutant group); or enter a partial name such as Dioxin,Temp,tUrBidity.
  * p_imp_pol `string` (values: Y, N): Facility is discharging pollutants that are potentially contributing to the impairment of local waterbodies according to the ATTAINS database.
  * p_trep `string` (values: CURR, NOTCURR): Current Toxics Release Inventory (TRI) Reporter Limiter.  Enter one of the following codes to limit results.
  * p_pm `string` (values: NONE, GT5, GT10, GT25, GT50, GT75): Percent Minority Population Limiter.  Enter a value to restrict results to facilities with a given percentage of minority population within 3-mile radius.
  * p_pd `string` (values: NONE, GT100, GT500, GT1000, GT5000, GT10000, GT20000): Population Density Limiter (per sq mile). Enter a value to limit results to facilities located in area of a given population density.
  * p_ico `string` (values: Y, N): Indian Country Flag.  Enter a "Y" or "N" to restrict searches to facilities inside or outside Indian Country.
  * p_huc `string`: 2-, 4-, 6-, or 8-character watershed code. May contain multiple comma-separated values.
  * p_pid `string`: Nine-digit permit IDs. May contain up to 2000 comma-separated values.
  * p_med `string` (values: A, M, R, S, ALL): Filter Results by Media.
  * p_ysl `string` (values: W, N, NV): Last Facility Inspection [within / not within] Specified Date Range Indicator. The date range is determined by parameters p_idt1 and p_idt2 or by parameter p_ysly.
  * p_ysly `number` (values: 1, 2, 3, 4, 5): Number of years (1 to 5) since last facility inspection.  A value of 1 means that it has been inspected within the year.
  * p_ysla `string` (values: E, S, A): Facility Last Inspection Code Filter.  If left blank, both agencies are included.  Enter a value to limit results:
  * p_qs `string`: Quick Search. Allows entry for city, state, and/or zip code.
  * p_sfs `string`: Single Facility Search Filter.  Provide a facility name or program system identifier to limit results.  For the all data search, the FRS registry identifier is also searched.
  * p_tribeid `number`: Numeric code for tribe (or list of tribes).
  * p_tribename `string`: Tribe Name Filter.  Enter a single tribe name to filter results.
  * p_tribedist `number`: Proximity to tribal land limiter. Enter an amount of mile between 0 and 25 to filter results.  This parameter is only evaluated if p_tribeid is populated.
  * p_pstat `string`: Permit Status Filter.  Enter one or more of the following codes.  Provide multiple values as a comma-delimited list.
  * p_ptype `string`: Permit Type Filter. Enter one or more code values to filter results.  Provide multiple values as a comma-delimited list.
  * p_pcomp `string`: Permit Component Code Filter.  Enter one or more codes to filter results.  Provide multiple values as a comma-delimited list.
  * p_plimits `string` (values: Y, N): Permit Limits Present Flag.  Enter Y to limit results to facilities have present permit limits.
  * p_pcss `string` (values: ALL, GE1, GE10, GE50): Combined Sewer Systems Outflows Limiter.  Enter one of the following to limit results to facilities having the given count of CSS outflows.
  * p_pexp `string` (values: EXP, EXPLE1YR, EXPGT1YR): Permit Expired or Administratively Continued Limiter.  Enter one of the following values to filter results.
  * p_owop `string` (values: FEDERAL, POTW, NON-POTW): Owner/Operator code filter.  Enter one of the following values to restrict results.
  * p_ipfti `string`
  * p_agoo `string` (values: AND, OR): Indicates whether to AND or OR the Owner/Operator parameter (p_owop) and the federal agency code (p_fa) parameters.
  * p_idt1 `string`: Beginning of date range of most recent facility inspection.
  * p_idt2 `string`: End of date range of most recent facility inspection.
  * p_pityp `string`: Inspection Type Code.  See ICIS Compliance Monitor Types lookup serivce for a list of available codes and descriptions.
  * p_pfead1 `string`: Formal Enforcement Action Date Range Start.  Enter a date in MM/DD/YYYY format to set the start of the range for filtering by recent Formal Enforcement Action (FEA) taken against the facility within the last five years.
  * p_pfead2 `string`: Formal Enforcement Action Date Range End.  Enter a date in MM/DD/YYYY format to set the end of the date range for filtering by recent Formal Enforcement Action (FEA) taken against the facility within the last five years.
  * p_pfeat `string`: Formal Enforcement Action (FEA) Code Filter.  Enter one or more three-letter FEA codes to restrict results to facilities with these attributes.  Use p_fead1 and p_fead2 parameters to further restrict this filter by entering a date range.  Provide multiple codes as a comma-delimited list.
  * p_pccs `string`: Current Compliance Status:
  * p_pexcd `string` (values: 0, GE0, GE10, GE50, GE100): 3-Year Effluent Exceedances Limiter.  Enter a value to restrict results to facilities with the given amount of exceedances in the past 3 years.
  * p_psncq `string` (values: GT1, GE1, GT2, GE2, GT4, GE4, GT8, GE8, GT12, GE12): Quarters in Significant Noncompliance Limiter.  Enter a coded value to limit results to facilities with given quarter of significant noncompliance.
  * p_pctrack `string` (values: Off, Partial, On): Compliance Tracking Limiter. Provide a keyword to indicate the extent to which data is being entered and effluent exceedances are being identified.
  * p_dwd `string` (values: 0, GT0, GT1000, GT5000, GT10000, GT20000, GT50000): Direct Water Discharges. Pounds of toxic chemicals released directly to surface water as reported to the Toxics Release Inventory.
  * p_pt `string` (values: 0, GT0, GT1000, GT5000, GT10000, GT20000, GT50000): POTW Transfers. Pounds of toxic chemicals transferred to a Publicly Operated Treatment Works (POTW) as reported to the Toxics Release Inventory.
  * p_pdwdist `string` (values: N, LT1, LT2, LT5, LT10, LT15): Distance (in miles) to downstream drinking water intake.
  * p_pswdpc `string`: Pollutant Category Code:  Values: WTR for Water, AIR for Air
  * p_pswdmp `string` (values: 1, 2, 3, 4, 5): Used to determine limit begin and end dates for surface water discharges. Number represents years from current date.
  * p_pswpol `string`: For CWA, pollutant names for surface water discharges. for Drinking Water, SDWIS Violation contaminant codes for unaddressed violations that have occurred in the last 3 years. May contain multiple comma-separated values.
  * p_pswcas `string`: CAS numbers for surface water discharges. May contain multiple comma-separated values.
  * p_pswparam `string`: Parameter codes for surface water discharges. May contain multiple comma-separated values.
  * p_pswvio `string` (values: Y, N): Used in conjuction with parameters p_pswpol and p_pswparam, indicates whether search should only include pollutants with violations.
  * p_wbd `string`: 2-, 4-, 6-, 8-, 10-, or 12-character watershed (WBD from the USGS Watershed Boundary Dataset). May contain multiple comma-separated values.  Uses the FRS Best Pick Coordinate to obtain the WBD12 Huc value.
  * p_radwbd `string`: 2-, 4-, 6-, 8-, 10-, or 12 character watershed (WBD from the USGS Watershed Boundary Dataset). May contain multiple comma-separated values.  Will search against WBD values otained by "reach indexing" NPDES permits against the medium resolution National Hydrography Dataset. 
  * p_frswbd `string`: Works exactly the same as the p_wbd parameter.  2-, 4-, 6-, 8-, 10-, or 12-character watershed (WBD from the USGS Watershed Boundary Dataset). May contain multiple comma-separated values.  Uses the FRS Best Pick Coordinate to obtain the WBD12 Huc value.
  * p_fntype `string` (values: ALL, CONTAINS, EXACT, BEGINS): Controls type of text search performed on facility name with parameter p_fn.
  * p_pidall `string` (values: Y, N): Controls whether search is restricted to existing system. Y means the search will match the p_pid parameter against all associated permits (AIR, RCRA, SDWIS, etc).
  * p_months_last_dmr `number`: The number of months since the last Discharge Monitoring Report has been submitted.
  * p_last_dmr_within `string` (values: W, N): W value returns facilities that have submitted DMRs within the number of months specified by p_months_last_dmr. An N value returns facilities that have not submitted a DMR within the specified number of months.
  * p_indsw `string` (values: Y, N): Industrial Stormwater Permit Flag.  Enter a Y or N to filter results by this type of permit.
  * p_msgp_ptype `string` (values: NOI, NOE): Multi-Sector General Purpose Permit Type.  Enter a value to filter results by MSGP Permit Type.
  * p_mon_type `string` (values: BENCHG2, BENCH, ELG): For use with the Industrial Stormwater search only. Valid values are BENCHGS fro Benchmark (Alert Limit) G2 Ore, BENCH for Benchmark (Alert Limit), and ELG fro Effluent Limitation Guidelines(ELG)(Effluent Limit).  
  * p_iagency `string`: Issuing Agency Limiter.  Enter a single value to filter results by the issuing agency, e.g. "State" or "EPA".
  * p_permitting_agency `string`
  * p_isws `string`: Multi-Sector General Purpose Permit Subsector Individual Identifier.  Enter a value to filter results.
  * p_iswss `string`: Multi-Sector General Purpose Permit Subsector Group Code.  Enter a value to filter results.
  * p_iswssID `string`: Multi-Sector General Purpose Permit Sector Code.  Enter a value to filter results.
  * p_ds1 `string`: Submitted Date Filter Start.  To filter by the date of submission, enter a start date here and an end date in the p_ds2 parameter.  Both dates are required for filtering.
  * p_ds2 `string`: Submitted Date Filter End.  To filter by the date of submission, enter an end date here and a start date in the p_ds1 parameter.  Both dates are required for filtering.
  * p_da1 `string`: Active Date Filter Start.  To filter by the active date, enter a start date here and an end date in the p_da2 parameter.  Both dates are required for filtering.
  * p_da2 `string`: Active Date Filter End.  To filter by the active date, enter an end date here and a start date in the p_da1 parameter.  Both dates are required for filtering.
  * p_MS4 `string` (values: Y, N): Municipal Separate Storm Water Sewer (MS4) Permit Flag.  Enter a Y or N to filter results by this type of permit.
  * p_ooFN `string`: Owner/Operator Name. Enter the owner/operator name of the facility.
  * p_ooFNtype `string` (values: ALL, EXACT, BEGINS, CONTAINS): Owner/Operator Name Multiple Selection Evaluator.  
  * p_ooSA `string`: Owner/Operator Address.  Enter the address of the owner/operator of the facility.
  * p_ooSA1 `string`: Owner/Operator Address Line 2.  Enter the line 2 address of the owner/operator of the facility.
  * p_ooCt `string`: Owner/Operator City. Enter the city where the owner/operator of the facility is located.
  * p_ooSt `string`: Owner/Operator State.  Enter the standardized postal state code where the owner/operator of the facility is located.
  * p_ooZip `string`: Owner/Operator Zip Code.  Enter the postal zip code where the owner/operator of the facility is located.
  * p_fac_ico `string` (values: Y, N): FRS tribal land code flag.  Enter "Y" or "N" to include or exclude facilities based on FRS tribal land code.
  * p_icoo `string`: Indian country search and/or flag.  Enter "Y" to set indian country search conditions to return any results found using p_ico, p_fac_ico or p_fac_icoo.  Otherwise only results matching all provided p_ico, p_fac_ico or p_fac_icoo conditions will be returned.
  * p_fac_icos `string`: FRS tribal land spatial flag.  Enter "Y" or "N" to include or exclude facilities based on FRS tribal land spatial flag.
  * p_ejscreen `string`: Enter "Y" to limit facilities to Census block groups where one of more Environmental Justice indexes above 80th percentile.
  * p_alrexceed `number`: Alert Limits Exceedences Limiter.  Enter a numeric value to restrict results to facilities having the given amount or more of alert limits exceedances.
  * p_limit_addr `string` (values: Y, N): Limit Address Search Flag.  Enter Y to restrict facility searches to native data source only.  
  * p_lat `number`: Latitude location in decimal degrees.
  * p_long `number`: Longitude location in decimal degrees.
  * p_radius `number`: Spatial Search Radius.  Enter a radius up to 100 miles in which to spatially search for facilities.
  * p_ejscreen_over80cnt `string` (values: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11): The number of Environmenmt Justice Indicators above the 80th percentile.  Valid values are 1 through 11.
  * p_bio_flag `string`: A Y value will select all biosolid-related permits.
  * p_bio_fac_type `string`: The code indicating the reporting obligation reason:
  * p_bio_trtmnt_procs `string`: The biosolids or sewage sludge treatment process or processes at the facility:
  * p_bio_analy_method_catgry `string`: The unique code for the category of the analytic methods used by the facility to analyze regulated parameters (including enteric viruses, fecal coliforms, helminth ova, and Salmonella sp.) at the facility:
  * p_bio_total_volume_amt `string`: Total annual amount (in dry metric tons) of biosolids or sewage sludge generated at the facility.
  * p_bio_mgmt_prctce_type `string`: The unique code that identifies the type of biosolids or sewage sludge management practice (e.g., land application, surface disposal, incineration) used by the facility. The facility will separately report the management practice for each biosolids or sewage sludge form and pathogen class. This data element will also identify the management practices used by surface disposal site owners/operators (see 40 CFR 503.24):
  * p_bio_mgmt_prctce_stype `string`: This is the code indicating additional detail about the type of Management Practice used for a volume of Biosolids or Sewage Sludge:
  * p_bio_mgmt_prctce_handler `string`: This is the code indicating the type of Biosolids or Sewage Sludge handlers/preparers.
  * p_bio_mgmt_container `string`: The code that identifies the nature of each biosolids and sewage sludge material generated by the facility in terms of whether the material is a biosolid or sewage sludge and whether the material is ultimately conveyed off-site in bulk or in bags. The facility separately reports the form for each biosolids or sewage sludge management practice or practices used by the facility and pathogen class:
  * p_bio_mgmt_pathogen `string`: This code identifies the pathogen class [e.g., Class A, Class B, Not Applicable (Incineration)] for biosolids or sewage sludge generated by the facility. The facility will separately report the pathogen class for each biosolids or sewage sludge management practice used by the facility and by each biosolids or sewage sludge form. It also is used to filter applicable Pathogen Reduction and Vector Attraction Reduction Options as well as Land Application Management Practice Deficiencies. Only reqired for some of the mgmt. practice types:
  * p_bio_mgmt_pathred `string`: This is the description of the option used by the facility to control pathogen for a Biosolids Management Practice:
  * p_bio_mgmt_vector `string`: The unique code that identifies the option used by the facility for vector attraction reduction. See a listing of these vector attraction reduction options at 40 CFR 503.33(b)(1) through (11). The facility will separately report the vector attraction reduction options for each biosolids or sewage sludge management practice used by the facility and by each biosolids or sewage sludge form as well as by each biosolids or sewage sludge pathogen class:
  * p_bio_mgmt_def_category `string`: This is the code indicating the type of NPDES special regulatory program deficiency:
  * p_bio_mgmt_deficiencies `number`: The number of times noncompliance was reported by the facility in the last 3 years. The results returned will include facilities whose number of reported noncompliance events is greater than or equal to the number entered.
  * p_bio_vio_code `string`: The Biosolids Single Event Violation Code.  Enter one or mode codes.
  * p_bio_current_vio `string` (values: Y, N): Indicator of whether the facility is currently in violation for biosolids under the Clean Water Act, in the 12th or 13th quarter:
  * p_bio_qtrs_in_vio `number`: The number of quarters, in the last three years, where the facility was in violation for a biosolids violation type.  The results returned will include facilities whose number of quarters with violations is greater than or equal to the number entered.
  * p_bio_rpt_year `string`: The last year that the permittee submitted an annual Biosolids report.  Valid values are NONE and any year greater or equal to 2016.
  * p_bio_vio_last_year `string` (values: Y, N): Identifies if a biosolids violation has occured in the last year.  Valid values are Y and N.
  * p_msgp_rpt_year `string`: The last year that a MSGP report was submitted for the permit.  Valid values are "NONE" and any year Greater or Eqal to 2015.
  * p_vio_last_year `string` (values: Y, N): Identifies if a permit violation has occured in the last year.  Valid values are Y and N.
  * queryset `number`: Query Limiter.  Enter a value to limit the number of records returned for each query. Value cannot exceed 70,000.
  * responseset `number`: Response Set Limiter. Enter a value to limit the number of records per page. Value cannot exceed 1,000.
  * tablelist `string` (values: Y, N): Table List Flag. Enter a Y to display the first page of facility results.
  * maplist `string` (values: Y, N): Map List Flag.  Provide a Y to return mappable coordinates representing the full geographic extent of the queryset (all facilities that met the selection criteria).
  * summarylist `string` (values: Y, N): Summary List Flag.  Enter a Y to return a list of summary statistics based on the parameters submitted to the query service.
  * callback `string`: JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.
  * qcolumns `string`: Used to customize service output.  A list of comma-separated column IDs of output objects that will be returned in the service query object or download.  Use the metadata service endpoint for a complete list of Ids and definitions.
  * p_e90_count `number`: Number of E90 Exceedances.  Identifies water permits with a number of E90 (Effluient Exceedances) >= the value provided for the last number of years provided by the p_e90_years value.
  * p_e90_years `number`: Number of years for the p_e90_count search.  Identified the past number of years to be used for the p_e90_count search.
  * p_psc `string`: Point Source Category.

#### Output
* output `object`: Root Object
  * Results **required** [cwa04](#cwa04)

### cwa_rest_services.get_facilities.post
Validates query search parameters and returns query identifier.  Use the responseset parameter to set the page size


```js
epa_gov_cwa.cwa_rest_services.get_facilities.post({}, context)
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
  * p_act `string`: Active Permits/Facilities Flag.  Provide Y or N to filter results to facilities with active permits.  A Y will select ICIS NPDES permits with a status of effective, continued, or expired.
  * p_maj `string` (values: Y, N): Major Facility Flag.  Enter Y to restrict results to Major facilities only.
  * p_mact `string`: CAA Maximum Achievable Control Technology (MACT) Subpart codes (alpha ID between 1 and 7 characters) applicable to the facility.
  * p_fea `string` (values: W, N): Formal Enforcement Actions [within / not within] specified date range indicator. The date range is determined by parameters p_fead1 and p_fead2 or by parameter p_feay.
  * p_feay `number` (values: 1, 2, 3, 4, 5): Years (1 to 5) Range.  This value is used to create a date range for Formal Enforcement Actions (FEA). Used along with p_fea (which indicates whether to look within or outside of the date range) to find FEAs within (or not within) the number of years specified.
  * p_feaa `string` (values: A, E, S): Agency associated with Formal Enforcement Actions:
  * p_iea `string` (values: W, N): Informal Enforcement Actions [within / not within] specified date range.  The date range is determined by parameters p_iead1 and p_iead2 or by parameter p_ieay.
  * p_ieay `number` (values: 1, 2, 3, 4, 5): Years (1 to 5) Range.  This value is used to create a date range for Informal Enforcement Actions (IEA). Used along with p_iea (which indicates whether to look within or outside of the date range) to find IEAs within (or not within) the number of years specified.
  * p_ieaa `string` (values: E, S): Agency associated with Informal Enforcement Actions. If left blank, both agencies are included.
  * p_qiv `string` (values: 0, GT1, GT2, GT4, GT8, 12): Quarters in Noncompliance Limiter.  Enter a coded value to limit results to facilities with given quarter of noncompliance.
  * p_iv `string`: Facility has a violation status of 'In Viol' during any of the selected quarters. 
  * p_impw `string` (values: Y, N): Discharging into Impaired Waters Flag. Enter Y to limit results to facilities with discharge to waterbodies listed as impaired in the ATTAINS database.
  * p_imp_cau_grp `string` (values: ALGAL GROWTH, AMMONIA, BIOTOXINS, CAUSE UNKNOWN, CAUSE UNKNOWN - FISH KILLS, CAUSE UNKNOWN - IMPAIRED BIOTA, CHLORINE, DIOXINS, FISH CONSUMPTION ADVISORY, FLOW ALTERATION(S), HABITAT ALTERATIONS, MERCURY, METALS (OTHER THAN MERCURY), NOXIOUS AQUATIC PLANTS, NUISANCE EXOTIC SPECIES, NUISANCE NATIVE SPECIES, NUTRIENTS, OIL AND GREASE, ORGANIC ENRICHMENT/OXYGEN DEPLETION, OTHER CAUSE, PATHOGENS, PESTICIDES, PH/ACIDITY/CAUSTIC CONDITIONS, POLYCHLORINATED BIPHENYLS (PCBS), RADIATION, SALINITY/TOTAL DISSOLVED SOLIDS/CHLORIDES/SULFATES, SEDIMENT, TASTE, COLOR AND ODOR, TEMPERATURE, TOTAL TOXICS, TOXIC INORGANICS, TOXIC ORGANICS, TRASH, TURBIDITY): Facility is discharging a pollutant group causing a waterbody to be impaired.  Enter 1 through 34 (the internal number of the pollutant group); or enter a partial name such as Dioxin,Temp,tUrBidity.
  * p_imp_pol `string` (values: Y, N): Facility is discharging pollutants that are potentially contributing to the impairment of local waterbodies according to the ATTAINS database.
  * p_trep `string` (values: CURR, NOTCURR): Current Toxics Release Inventory (TRI) Reporter Limiter.  Enter one of the following codes to limit results.
  * p_pm `string` (values: NONE, GT5, GT10, GT25, GT50, GT75): Percent Minority Population Limiter.  Enter a value to restrict results to facilities with a given percentage of minority population within 3-mile radius.
  * p_pd `string` (values: NONE, GT100, GT500, GT1000, GT5000, GT10000, GT20000): Population Density Limiter (per sq mile). Enter a value to limit results to facilities located in area of a given population density.
  * p_ico `string` (values: Y, N): Indian Country Flag.  Enter a "Y" or "N" to restrict searches to facilities inside or outside Indian Country.
  * p_huc `string`: 2-, 4-, 6-, or 8-character watershed code. May contain multiple comma-separated values.
  * p_pid `string`: Nine-digit permit IDs. May contain up to 2000 comma-separated values.
  * p_med `string` (values: A, M, R, S, ALL): Filter Results by Media.
  * p_ysl `string` (values: W, N, NV): Last Facility Inspection [within / not within] Specified Date Range Indicator. The date range is determined by parameters p_idt1 and p_idt2 or by parameter p_ysly.
  * p_ysly `number` (values: 1, 2, 3, 4, 5): Number of years (1 to 5) since last facility inspection.  A value of 1 means that it has been inspected within the year.
  * p_ysla `string` (values: E, S, A): Facility Last Inspection Code Filter.  If left blank, both agencies are included.  Enter a value to limit results:
  * p_qs `string`: Quick Search. Allows entry for city, state, and/or zip code.
  * p_sfs `string`: Single Facility Search Filter.  Provide a facility name or program system identifier to limit results.  For the all data search, the FRS registry identifier is also searched.
  * p_tribeid `number`: Numeric code for tribe (or list of tribes).
  * p_tribename `string`: Tribe Name Filter.  Enter a single tribe name to filter results.
  * p_tribedist `number`: Proximity to tribal land limiter. Enter an amount of mile between 0 and 25 to filter results.  This parameter is only evaluated if p_tribeid is populated.
  * p_pstat `string`: Permit Status Filter.  Enter one or more of the following codes.  Provide multiple values as a comma-delimited list.
  * p_ptype `string`: Permit Type Filter. Enter one or more code values to filter results.  Provide multiple values as a comma-delimited list.
  * p_pcomp `string`: Permit Component Code Filter.  Enter one or more codes to filter results.  Provide multiple values as a comma-delimited list.
  * p_plimits `string` (values: Y, N): Permit Limits Present Flag.  Enter Y to limit results to facilities have present permit limits.
  * p_pcss `string` (values: ALL, GE1, GE10, GE50): Combined Sewer Systems Outflows Limiter.  Enter one of the following to limit results to facilities having the given count of CSS outflows.
  * p_pexp `string` (values: EXP, EXPLE1YR, EXPGT1YR): Permit Expired or Administratively Continued Limiter.  Enter one of the following values to filter results.
  * p_owop `string` (values: FEDERAL, POTW, NON-POTW): Owner/Operator code filter.  Enter one of the following values to restrict results.
  * p_ipfti `string`
  * p_agoo `string` (values: AND, OR): Indicates whether to AND or OR the Owner/Operator parameter (p_owop) and the federal agency code (p_fa) parameters.
  * p_idt1 `string`: Beginning of date range of most recent facility inspection.
  * p_idt2 `string`: End of date range of most recent facility inspection.
  * p_pityp `string`: Inspection Type Code.  See ICIS Compliance Monitor Types lookup serivce for a list of available codes and descriptions.
  * p_pfead1 `string`: Formal Enforcement Action Date Range Start.  Enter a date in MM/DD/YYYY format to set the start of the range for filtering by recent Formal Enforcement Action (FEA) taken against the facility within the last five years.
  * p_pfead2 `string`: Formal Enforcement Action Date Range End.  Enter a date in MM/DD/YYYY format to set the end of the date range for filtering by recent Formal Enforcement Action (FEA) taken against the facility within the last five years.
  * p_pfeat `string`: Formal Enforcement Action (FEA) Code Filter.  Enter one or more three-letter FEA codes to restrict results to facilities with these attributes.  Use p_fead1 and p_fead2 parameters to further restrict this filter by entering a date range.  Provide multiple codes as a comma-delimited list.
  * p_pccs `string`: Current Compliance Status:
  * p_pexcd `string` (values: 0, GE0, GE10, GE50, GE100): 3-Year Effluent Exceedances Limiter.  Enter a value to restrict results to facilities with the given amount of exceedances in the past 3 years.
  * p_psncq `string` (values: GT1, GE1, GT2, GE2, GT4, GE4, GT8, GE8, GT12, GE12): Quarters in Significant Noncompliance Limiter.  Enter a coded value to limit results to facilities with given quarter of significant noncompliance.
  * p_pctrack `string` (values: Off, Partial, On): Compliance Tracking Limiter. Provide a keyword to indicate the extent to which data is being entered and effluent exceedances are being identified.
  * p_dwd `string` (values: 0, GT0, GT1000, GT5000, GT10000, GT20000, GT50000): Direct Water Discharges. Pounds of toxic chemicals released directly to surface water as reported to the Toxics Release Inventory.
  * p_pt `string` (values: 0, GT0, GT1000, GT5000, GT10000, GT20000, GT50000): POTW Transfers. Pounds of toxic chemicals transferred to a Publicly Operated Treatment Works (POTW) as reported to the Toxics Release Inventory.
  * p_pdwdist `string` (values: N, LT1, LT2, LT5, LT10, LT15): Distance (in miles) to downstream drinking water intake.
  * p_pswdpc `string`: Pollutant Category Code:  Values: WTR for Water, AIR for Air
  * p_pswdmp `string` (values: 1, 2, 3, 4, 5): Used to determine limit begin and end dates for surface water discharges. Number represents years from current date.
  * p_pswpol `string`: For CWA, pollutant names for surface water discharges. for Drinking Water, SDWIS Violation contaminant codes for unaddressed violations that have occurred in the last 3 years. May contain multiple comma-separated values.
  * p_pswcas `string`: CAS numbers for surface water discharges. May contain multiple comma-separated values.
  * p_pswparam `string`: Parameter codes for surface water discharges. May contain multiple comma-separated values.
  * p_pswvio `string` (values: Y, N): Used in conjuction with parameters p_pswpol and p_pswparam, indicates whether search should only include pollutants with violations.
  * p_wbd `string`: 2-, 4-, 6-, 8-, 10-, or 12-character watershed (WBD from the USGS Watershed Boundary Dataset). May contain multiple comma-separated values.  Uses the FRS Best Pick Coordinate to obtain the WBD12 Huc value.
  * p_radwbd `string`: 2-, 4-, 6-, 8-, 10-, or 12 character watershed (WBD from the USGS Watershed Boundary Dataset). May contain multiple comma-separated values.  Will search against WBD values otained by "reach indexing" NPDES permits against the medium resolution National Hydrography Dataset. 
  * p_frswbd `string`: Works exactly the same as the p_wbd parameter.  2-, 4-, 6-, 8-, 10-, or 12-character watershed (WBD from the USGS Watershed Boundary Dataset). May contain multiple comma-separated values.  Uses the FRS Best Pick Coordinate to obtain the WBD12 Huc value.
  * p_fntype `string` (values: ALL, CONTAINS, EXACT, BEGINS): Controls type of text search performed on facility name with parameter p_fn.
  * p_pidall `string` (values: Y, N): Controls whether search is restricted to existing system. Y means the search will match the p_pid parameter against all associated permits (AIR, RCRA, SDWIS, etc).
  * p_months_last_dmr `number`: The number of months since the last Discharge Monitoring Report has been submitted.
  * p_last_dmr_within `string` (values: W, N): W value returns facilities that have submitted DMRs within the number of months specified by p_months_last_dmr. An N value returns facilities that have not submitted a DMR within the specified number of months.
  * p_indsw `string` (values: Y, N): Industrial Stormwater Permit Flag.  Enter a Y or N to filter results by this type of permit.
  * p_msgp_ptype `string` (values: NOI, NOE): Multi-Sector General Purpose Permit Type.  Enter a value to filter results by MSGP Permit Type.
  * p_mon_type `string` (values: BENCHG2, BENCH, ELG): For use with the Industrial Stormwater search only. Valid values are BENCHGS fro Benchmark (Alert Limit) G2 Ore, BENCH for Benchmark (Alert Limit), and ELG fro Effluent Limitation Guidelines(ELG)(Effluent Limit).  
  * p_iagency `string`: Issuing Agency Limiter.  Enter a single value to filter results by the issuing agency, e.g. "State" or "EPA".
  * p_permitting_agency `string`
  * p_isws `string`: Multi-Sector General Purpose Permit Subsector Individual Identifier.  Enter a value to filter results.
  * p_iswss `string`: Multi-Sector General Purpose Permit Subsector Group Code.  Enter a value to filter results.
  * p_iswssID `string`: Multi-Sector General Purpose Permit Sector Code.  Enter a value to filter results.
  * p_ds1 `string`: Submitted Date Filter Start.  To filter by the date of submission, enter a start date here and an end date in the p_ds2 parameter.  Both dates are required for filtering.
  * p_ds2 `string`: Submitted Date Filter End.  To filter by the date of submission, enter an end date here and a start date in the p_ds1 parameter.  Both dates are required for filtering.
  * p_da1 `string`: Active Date Filter Start.  To filter by the active date, enter a start date here and an end date in the p_da2 parameter.  Both dates are required for filtering.
  * p_da2 `string`: Active Date Filter End.  To filter by the active date, enter an end date here and a start date in the p_da1 parameter.  Both dates are required for filtering.
  * p_MS4 `string` (values: Y, N): Municipal Separate Storm Water Sewer (MS4) Permit Flag.  Enter a Y or N to filter results by this type of permit.
  * p_ooFN `string`: Owner/Operator Name. Enter the owner/operator name of the facility.
  * p_ooFNtype `string` (values: ALL, EXACT, BEGINS, CONTAINS): Owner/Operator Name Multiple Selection Evaluator.  
  * p_ooSA `string`: Owner/Operator Address.  Enter the address of the owner/operator of the facility.
  * p_ooSA1 `string`: Owner/Operator Address Line 2.  Enter the line 2 address of the owner/operator of the facility.
  * p_ooCt `string`: Owner/Operator City. Enter the city where the owner/operator of the facility is located.
  * p_ooSt `string`: Owner/Operator State.  Enter the standardized postal state code where the owner/operator of the facility is located.
  * p_ooZip `string`: Owner/Operator Zip Code.  Enter the postal zip code where the owner/operator of the facility is located.
  * p_fac_ico `string` (values: Y, N): FRS tribal land code flag.  Enter "Y" or "N" to include or exclude facilities based on FRS tribal land code.
  * p_icoo `string`: Indian country search and/or flag.  Enter "Y" to set indian country search conditions to return any results found using p_ico, p_fac_ico or p_fac_icoo.  Otherwise only results matching all provided p_ico, p_fac_ico or p_fac_icoo conditions will be returned.
  * p_fac_icos `string`: FRS tribal land spatial flag.  Enter "Y" or "N" to include or exclude facilities based on FRS tribal land spatial flag.
  * p_ejscreen `string`: Enter "Y" to limit facilities to Census block groups where one of more Environmental Justice indexes above 80th percentile.
  * p_alrexceed `number`: Alert Limits Exceedences Limiter.  Enter a numeric value to restrict results to facilities having the given amount or more of alert limits exceedances.
  * p_limit_addr `string` (values: Y, N): Limit Address Search Flag.  Enter Y to restrict facility searches to native data source only.  
  * p_lat `number`: Latitude location in decimal degrees.
  * p_long `number`: Longitude location in decimal degrees.
  * p_radius `number`: Spatial Search Radius.  Enter a radius up to 100 miles in which to spatially search for facilities.
  * p_ejscreen_over80cnt `string` (values: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11): The number of Environmenmt Justice Indicators above the 80th percentile.  Valid values are 1 through 11.
  * p_bio_flag `string`: A Y value will select all biosolid-related permits.
  * p_bio_fac_type `string`: The code indicating the reporting obligation reason:
  * p_bio_trtmnt_procs `string`: The biosolids or sewage sludge treatment process or processes at the facility:
  * p_bio_analy_method_catgry `string`: The unique code for the category of the analytic methods used by the facility to analyze regulated parameters (including enteric viruses, fecal coliforms, helminth ova, and Salmonella sp.) at the facility:
  * p_bio_total_volume_amt `string`: Total annual amount (in dry metric tons) of biosolids or sewage sludge generated at the facility.
  * p_bio_mgmt_prctce_type `string`: The unique code that identifies the type of biosolids or sewage sludge management practice (e.g., land application, surface disposal, incineration) used by the facility. The facility will separately report the management practice for each biosolids or sewage sludge form and pathogen class. This data element will also identify the management practices used by surface disposal site owners/operators (see 40 CFR 503.24):
  * p_bio_mgmt_prctce_stype `string`: This is the code indicating additional detail about the type of Management Practice used for a volume of Biosolids or Sewage Sludge:
  * p_bio_mgmt_prctce_handler `string`: This is the code indicating the type of Biosolids or Sewage Sludge handlers/preparers.
  * p_bio_mgmt_container `string`: The code that identifies the nature of each biosolids and sewage sludge material generated by the facility in terms of whether the material is a biosolid or sewage sludge and whether the material is ultimately conveyed off-site in bulk or in bags. The facility separately reports the form for each biosolids or sewage sludge management practice or practices used by the facility and pathogen class:
  * p_bio_mgmt_pathogen `string`: This code identifies the pathogen class [e.g., Class A, Class B, Not Applicable (Incineration)] for biosolids or sewage sludge generated by the facility. The facility will separately report the pathogen class for each biosolids or sewage sludge management practice used by the facility and by each biosolids or sewage sludge form. It also is used to filter applicable Pathogen Reduction and Vector Attraction Reduction Options as well as Land Application Management Practice Deficiencies. Only reqired for some of the mgmt. practice types:
  * p_bio_mgmt_pathred `string`: This is the description of the option used by the facility to control pathogen for a Biosolids Management Practice:
  * p_bio_mgmt_vector `string`: The unique code that identifies the option used by the facility for vector attraction reduction. See a listing of these vector attraction reduction options at 40 CFR 503.33(b)(1) through (11). The facility will separately report the vector attraction reduction options for each biosolids or sewage sludge management practice used by the facility and by each biosolids or sewage sludge form as well as by each biosolids or sewage sludge pathogen class:
  * p_bio_mgmt_def_category `string`: This is the code indicating the type of NPDES special regulatory program deficiency:
  * p_bio_mgmt_deficiencies `number`: The number of times noncompliance was reported by the facility in the last 3 years. The results returned will include facilities whose number of reported noncompliance events is greater than or equal to the number entered.
  * p_bio_vio_code `string`: The Biosolids Single Event Violation Code.  Enter one or mode codes.
  * p_bio_current_vio `string` (values: Y, N): Indicator of whether the facility is currently in violation for biosolids under the Clean Water Act, in the 12th or 13th quarter:
  * p_bio_qtrs_in_vio `number`: The number of quarters, in the last three years, where the facility was in violation for a biosolids violation type.  The results returned will include facilities whose number of quarters with violations is greater than or equal to the number entered.
  * p_bio_rpt_year `string`: The last year that the permittee submitted an annual Biosolids report.  Valid values are NONE and any year greater or equal to 2016.
  * p_bio_vio_last_year `string` (values: Y, N): Identifies if a biosolids violation has occured in the last year.  Valid values are Y and N.
  * p_msgp_rpt_year `string`: The last year that a MSGP report was submitted for the permit.  Valid values are "NONE" and any year Greater or Eqal to 2015.
  * p_vio_last_year `string` (values: Y, N): Identifies if a permit violation has occured in the last year.  Valid values are Y and N.
  * queryset `number`: Query Limiter.  Enter a value to limit the number of records returned for each query. Value cannot exceed 70,000.
  * responseset `number`: Response Set Limiter. Enter a value to limit the number of records per page. Value cannot exceed 1,000.
  * tablelist `string` (values: Y, N): Table List Flag. Enter a Y to display the first page of facility results.
  * maplist `string` (values: Y, N): Map List Flag.  Provide a Y to return mappable coordinates representing the full geographic extent of the queryset (all facilities that met the selection criteria).
  * summarylist `string` (values: Y, N): Summary List Flag.  Enter a Y to return a list of summary statistics based on the parameters submitted to the query service.
  * callback `string`: JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.
  * qcolumns `string`: Used to customize service output.  A list of comma-separated column IDs of output objects that will be returned in the service query object or download.  Use the metadata service endpoint for a complete list of Ids and definitions.
  * p_e90_count `number`: Number of E90 Exceedances.  Identifies water permits with a number of E90 (Effluient Exceedances) >= the value provided for the last number of years provided by the p_e90_years value.
  * p_e90_years `number`: Number of years for the p_e90_count search.  Identified the past number of years to be used for the p_e90_count search.
  * p_psc `string`: Point Source Category.

#### Output
* output `object`: Root Object
  * Results **required** [cwa04](#cwa04)

### cwa_rest_services.get_facility_info.get
Returns either an array of Facilities or an array of Clusters that meet the specified search criteria.


```js
epa_gov_cwa.cwa_rest_services.get_facility_info.get({}, context)
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
  * p_act `string`: Active Permits/Facilities Flag.  Provide Y or N to filter results to facilities with active permits.  A Y will select ICIS NPDES permits with a status of effective, continued, or expired.
  * p_maj `string` (values: Y, N): Major Facility Flag.  Enter Y to restrict results to Major facilities only.
  * p_mact `string`: CAA Maximum Achievable Control Technology (MACT) Subpart codes (alpha ID between 1 and 7 characters) applicable to the facility.
  * p_fea `string` (values: W, N): Formal Enforcement Actions [within / not within] specified date range indicator. The date range is determined by parameters p_fead1 and p_fead2 or by parameter p_feay.
  * p_feay `number` (values: 1, 2, 3, 4, 5): Years (1 to 5) Range.  This value is used to create a date range for Formal Enforcement Actions (FEA). Used along with p_fea (which indicates whether to look within or outside of the date range) to find FEAs within (or not within) the number of years specified.
  * p_feaa `string` (values: A, E, S): Agency associated with Formal Enforcement Actions:
  * p_iea `string` (values: W, N): Informal Enforcement Actions [within / not within] specified date range.  The date range is determined by parameters p_iead1 and p_iead2 or by parameter p_ieay.
  * p_ieay `number` (values: 1, 2, 3, 4, 5): Years (1 to 5) Range.  This value is used to create a date range for Informal Enforcement Actions (IEA). Used along with p_iea (which indicates whether to look within or outside of the date range) to find IEAs within (or not within) the number of years specified.
  * p_ieaa `string` (values: E, S): Agency associated with Informal Enforcement Actions. If left blank, both agencies are included.
  * p_qiv `string` (values: 0, GT1, GT2, GT4, GT8, 12): Quarters in Noncompliance Limiter.  Enter a coded value to limit results to facilities with given quarter of noncompliance.
  * p_iv `string`: Facility has a violation status of 'In Viol' during any of the selected quarters. 
  * p_impw `string` (values: Y, N): Discharging into Impaired Waters Flag. Enter Y to limit results to facilities with discharge to waterbodies listed as impaired in the ATTAINS database.
  * p_imp_pol `string` (values: Y, N): Facility is discharging pollutants that are potentially contributing to the impairment of local waterbodies according to the ATTAINS database.
  * p_imp_cau_grp `string` (values: ALGAL GROWTH, AMMONIA, BIOTOXINS, CAUSE UNKNOWN, CAUSE UNKNOWN - FISH KILLS, CAUSE UNKNOWN - IMPAIRED BIOTA, CHLORINE, DIOXINS, FISH CONSUMPTION ADVISORY, FLOW ALTERATION(S), HABITAT ALTERATIONS, MERCURY, METALS (OTHER THAN MERCURY), NOXIOUS AQUATIC PLANTS, NUISANCE EXOTIC SPECIES, NUISANCE NATIVE SPECIES, NUTRIENTS, OIL AND GREASE, ORGANIC ENRICHMENT/OXYGEN DEPLETION, OTHER CAUSE, PATHOGENS, PESTICIDES, PH/ACIDITY/CAUSTIC CONDITIONS, POLYCHLORINATED BIPHENYLS (PCBS), RADIATION, SALINITY/TOTAL DISSOLVED SOLIDS/CHLORIDES/SULFATES, SEDIMENT, TASTE, COLOR AND ODOR, TEMPERATURE, TOTAL TOXICS, TOXIC INORGANICS, TOXIC ORGANICS, TRASH, TURBIDITY): Facility is discharging a pollutant group causing a waterbody to be impaired.  Enter 1 through 34 (the internal number of the pollutant group); or enter a partial name such as Dioxin,Temp,tUrBidity.
  * p_trep `string` (values: CURR, NOTCURR): Current Toxics Release Inventory (TRI) Reporter Limiter.  Enter one of the following codes to limit results.
  * p_pm `string` (values: NONE, GT5, GT10, GT25, GT50, GT75): Percent Minority Population Limiter.  Enter a value to restrict results to facilities with a given percentage of minority population within 3-mile radius.
  * p_pd `string` (values: NONE, GT100, GT500, GT1000, GT5000, GT10000, GT20000): Population Density Limiter (per sq mile). Enter a value to limit results to facilities located in area of a given population density.
  * p_ico `string` (values: Y, N): Indian Country Flag.  Enter a "Y" or "N" to restrict searches to facilities inside or outside Indian Country.
  * p_huc `string`: 2-, 4-, 6-, or 8-character watershed code. May contain multiple comma-separated values.
  * p_pid `string`: Nine-digit permit IDs. May contain up to 2000 comma-separated values.
  * p_med `string` (values: A, M, R, S, ALL): Filter Results by Media.
  * p_ysl `string` (values: W, N, NV): Last Facility Inspection [within / not within] Specified Date Range Indicator. The date range is determined by parameters p_idt1 and p_idt2 or by parameter p_ysly.
  * p_ysly `number` (values: 1, 2, 3, 4, 5): Number of years (1 to 5) since last facility inspection.  A value of 1 means that it has been inspected within the year.
  * p_ysla `string` (values: E, S, A): Facility Last Inspection Code Filter.  If left blank, both agencies are included.  Enter a value to limit results:
  * p_qs `string`: Quick Search. Allows entry for city, state, and/or zip code.
  * p_sfs `string`: Single Facility Search Filter.  Provide a facility name or program system identifier to limit results.  For the all data search, the FRS registry identifier is also searched.
  * p_tribeid `number`: Numeric code for tribe (or list of tribes).
  * p_tribename `string`: Tribe Name Filter.  Enter a single tribe name to filter results.
  * p_tribedist `number`: Proximity to tribal land limiter. Enter an amount of mile between 0 and 25 to filter results.  This parameter is only evaluated if p_tribeid is populated.
  * p_pstat `string`: Permit Status Filter.  Enter one or more of the following codes.  Provide multiple values as a comma-delimited list.
  * p_ptype `string`: Permit Type Filter. Enter one or more code values to filter results.  Provide multiple values as a comma-delimited list.
  * p_pcomp `string`: Permit Component Code Filter.  Enter one or more codes to filter results.  Provide multiple values as a comma-delimited list.
  * p_plimits `string` (values: Y, N): Permit Limits Present Flag.  Enter Y to limit results to facilities have present permit limits.
  * p_pcss `string` (values: ALL, GE1, GE10, GE50): Combined Sewer Systems Outflows Limiter.  Enter one of the following to limit results to facilities having the given count of CSS outflows.
  * p_pexp `string` (values: EXP, EXPLE1YR, EXPGT1YR): Permit Expired or Administratively Continued Limiter.  Enter one of the following values to filter results.
  * p_owop `string` (values: FEDERAL, POTW, NON-POTW): Owner/Operator code filter.  Enter one of the following values to restrict results.
  * p_ipfti `string`
  * p_agoo `string` (values: AND, OR): Indicates whether to AND or OR the Owner/Operator parameter (p_owop) and the federal agency code (p_fa) parameters.
  * p_idt1 `string`: Beginning of date range of most recent facility inspection.
  * p_idt2 `string`: End of date range of most recent facility inspection.
  * p_pityp `string`: Inspection Type Code.  See ICIS Compliance Monitor Types lookup serivce for a list of available codes and descriptions.
  * p_pfead1 `string`: Formal Enforcement Action Date Range Start.  Enter a date in MM/DD/YYYY format to set the start of the range for filtering by recent Formal Enforcement Action (FEA) taken against the facility within the last five years.
  * p_pfead2 `string`: Formal Enforcement Action Date Range End.  Enter a date in MM/DD/YYYY format to set the end of the date range for filtering by recent Formal Enforcement Action (FEA) taken against the facility within the last five years.
  * p_pfeat `string`: Formal Enforcement Action (FEA) Code Filter.  Enter one or more three-letter FEA codes to restrict results to facilities with these attributes.  Use p_fead1 and p_fead2 parameters to further restrict this filter by entering a date range.  Provide multiple codes as a comma-delimited list.
  * p_pccs `string`: Current Compliance Status:
  * p_pexcd `string` (values: 0, GE0, GE10, GE50, GE100): 3-Year Effluent Exceedances Limiter.  Enter a value to restrict results to facilities with the given amount of exceedances in the past 3 years.
  * p_psncq `string` (values: GT1, GE1, GT2, GE2, GT4, GE4, GT8, GE8, GT12, GE12): Quarters in Significant Noncompliance Limiter.  Enter a coded value to limit results to facilities with given quarter of significant noncompliance.
  * p_pctrack `string` (values: Off, Partial, On): Compliance Tracking Limiter. Provide a keyword to indicate the extent to which data is being entered and effluent exceedances are being identified.
  * p_dwd `string` (values: 0, GT0, GT1000, GT5000, GT10000, GT20000, GT50000): Direct Water Discharges. Pounds of toxic chemicals released directly to surface water as reported to the Toxics Release Inventory.
  * p_pt `string` (values: 0, GT0, GT1000, GT5000, GT10000, GT20000, GT50000): POTW Transfers. Pounds of toxic chemicals transferred to a Publicly Operated Treatment Works (POTW) as reported to the Toxics Release Inventory.
  * p_pdwdist `string` (values: N, LT1, LT2, LT5, LT10, LT15): Distance (in miles) to downstream drinking water intake.
  * p_pswdpc `string`: Pollutant Category Code:  Values: WTR for Water, AIR for Air
  * p_pswdmp `string` (values: 1, 2, 3, 4, 5): Used to determine limit begin and end dates for surface water discharges. Number represents years from current date.
  * p_pswpol `string`: For CWA, pollutant names for surface water discharges. for Drinking Water, SDWIS Violation contaminant codes for unaddressed violations that have occurred in the last 3 years. May contain multiple comma-separated values.
  * p_pswcas `string`: CAS numbers for surface water discharges. May contain multiple comma-separated values.
  * p_pswparam `string`: Parameter codes for surface water discharges. May contain multiple comma-separated values.
  * p_pswvio `string` (values: Y, N): Used in conjuction with parameters p_pswpol and p_pswparam, indicates whether search should only include pollutants with violations.
  * p_wbd `string`: 2-, 4-, 6-, 8-, 10-, or 12-character watershed (WBD from the USGS Watershed Boundary Dataset). May contain multiple comma-separated values.  Uses the FRS Best Pick Coordinate to obtain the WBD12 Huc value.
  * p_radwbd `string`: 2-, 4-, 6-, 8-, 10-, or 12 character watershed (WBD from the USGS Watershed Boundary Dataset). May contain multiple comma-separated values.  Will search against WBD values otained by "reach indexing" NPDES permits against the medium resolution National Hydrography Dataset. 
  * p_frswbd `string`: Works exactly the same as the p_wbd parameter.  2-, 4-, 6-, 8-, 10-, or 12-character watershed (WBD from the USGS Watershed Boundary Dataset). May contain multiple comma-separated values.  Uses the FRS Best Pick Coordinate to obtain the WBD12 Huc value.
  * p_fntype `string` (values: ALL, CONTAINS, EXACT, BEGINS): Controls type of text search performed on facility name with parameter p_fn.
  * p_pidall `string` (values: Y, N): Controls whether search is restricted to existing system. Y means the search will match the p_pid parameter against all associated permits (AIR, RCRA, SDWIS, etc).
  * p_months_last_dmr `number`: The number of months since the last Discharge Monitoring Report has been submitted.
  * p_last_dmr_within `string` (values: W, N): W value returns facilities that have submitted DMRs within the number of months specified by p_months_last_dmr. An N value returns facilities that have not submitted a DMR within the specified number of months.
  * p_indsw `string` (values: Y, N): Industrial Stormwater Permit Flag.  Enter a Y or N to filter results by this type of permit.
  * p_msgp_ptype `string` (values: NOI, NOE): Multi-Sector General Purpose Permit Type.  Enter a value to filter results by MSGP Permit Type.
  * p_mon_type `string` (values: BENCHG2, BENCH, ELG): For use with the Industrial Stormwater search only. Valid values are BENCHGS fro Benchmark (Alert Limit) G2 Ore, BENCH for Benchmark (Alert Limit), and ELG fro Effluent Limitation Guidelines(ELG)(Effluent Limit).  
  * p_iagency `string`: Issuing Agency Limiter.  Enter a single value to filter results by the issuing agency, e.g. "State" or "EPA".
  * p_permitting_agency `string`
  * p_isws `string`: Multi-Sector General Purpose Permit Subsector Individual Identifier.  Enter a value to filter results.
  * p_iswss `string`: Multi-Sector General Purpose Permit Subsector Group Code.  Enter a value to filter results.
  * p_iswssID `string`: Multi-Sector General Purpose Permit Sector Code.  Enter a value to filter results.
  * p_ds1 `string`: Submitted Date Filter Start.  To filter by the date of submission, enter a start date here and an end date in the p_ds2 parameter.  Both dates are required for filtering.
  * p_ds2 `string`: Submitted Date Filter End.  To filter by the date of submission, enter an end date here and a start date in the p_ds1 parameter.  Both dates are required for filtering.
  * p_da1 `string`: Active Date Filter Start.  To filter by the active date, enter a start date here and an end date in the p_da2 parameter.  Both dates are required for filtering.
  * p_da2 `string`: Active Date Filter End.  To filter by the active date, enter an end date here and a start date in the p_da1 parameter.  Both dates are required for filtering.
  * p_MS4 `string` (values: Y, N): Municipal Separate Storm Water Sewer (MS4) Permit Flag.  Enter a Y or N to filter results by this type of permit.
  * p_ooFN `string`: Owner/Operator Name. Enter the owner/operator name of the facility.
  * p_ooFNtype `string` (values: ALL, EXACT, BEGINS, CONTAINS): Owner/Operator Name Multiple Selection Evaluator.  
  * p_ooSA `string`: Owner/Operator Address.  Enter the address of the owner/operator of the facility.
  * p_ooSA1 `string`: Owner/Operator Address Line 2.  Enter the line 2 address of the owner/operator of the facility.
  * p_ooCt `string`: Owner/Operator City. Enter the city where the owner/operator of the facility is located.
  * p_ooSt `string`: Owner/Operator State.  Enter the standardized postal state code where the owner/operator of the facility is located.
  * p_ooZip `string`: Owner/Operator Zip Code.  Enter the postal zip code where the owner/operator of the facility is located.
  * p_fac_ico `string` (values: Y, N): FRS tribal land code flag.  Enter "Y" or "N" to include or exclude facilities based on FRS tribal land code.
  * p_icoo `string`: Indian country search and/or flag.  Enter "Y" to set indian country search conditions to return any results found using p_ico, p_fac_ico or p_fac_icoo.  Otherwise only results matching all provided p_ico, p_fac_ico or p_fac_icoo conditions will be returned.
  * p_fac_icos `string`: FRS tribal land spatial flag.  Enter "Y" or "N" to include or exclude facilities based on FRS tribal land spatial flag.
  * p_ejscreen `string`: Enter "Y" to limit facilities to Census block groups where one of more Environmental Justice indexes above 80th percentile.
  * p_alrexceed `number`: Alert Limits Exceedences Limiter.  Enter a numeric value to restrict results to facilities having the given amount or more of alert limits exceedances.
  * p_limit_addr `string` (values: Y, N): Limit Address Search Flag.  Enter Y to restrict facility searches to native data source only.  
  * p_lat `number`: Latitude location in decimal degrees.
  * p_long `number`: Longitude location in decimal degrees.
  * p_radius `number`: Spatial Search Radius.  Enter a radius up to 100 miles in which to spatially search for facilities.
  * p_ejscreen_over80cnt `string` (values: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11): The number of Environmenmt Justice Indicators above the 80th percentile.  Valid values are 1 through 11.
  * p_bio_flag `string`: A Y value will select all biosolid-related permits.
  * p_bio_fac_type `string`: The code indicating the reporting obligation reason:
  * p_bio_trtmnt_procs `string`: The biosolids or sewage sludge treatment process or processes at the facility:
  * p_bio_analy_method_catgry `string`: The unique code for the category of the analytic methods used by the facility to analyze regulated parameters (including enteric viruses, fecal coliforms, helminth ova, and Salmonella sp.) at the facility:
  * p_bio_total_volume_amt `string`: Total annual amount (in dry metric tons) of biosolids or sewage sludge generated at the facility.
  * p_bio_mgmt_prctce_type `string`: The unique code that identifies the type of biosolids or sewage sludge management practice (e.g., land application, surface disposal, incineration) used by the facility. The facility will separately report the management practice for each biosolids or sewage sludge form and pathogen class. This data element will also identify the management practices used by surface disposal site owners/operators (see 40 CFR 503.24):
  * p_bio_mgmt_prctce_stype `string`: This is the code indicating additional detail about the type of Management Practice used for a volume of Biosolids or Sewage Sludge:
  * p_bio_mgmt_prctce_handler `string`: This is the code indicating the type of Biosolids or Sewage Sludge handlers/preparers.
  * p_bio_mgmt_container `string`: The code that identifies the nature of each biosolids and sewage sludge material generated by the facility in terms of whether the material is a biosolid or sewage sludge and whether the material is ultimately conveyed off-site in bulk or in bags. The facility separately reports the form for each biosolids or sewage sludge management practice or practices used by the facility and pathogen class:
  * p_bio_mgmt_pathogen `string`: This code identifies the pathogen class [e.g., Class A, Class B, Not Applicable (Incineration)] for biosolids or sewage sludge generated by the facility. The facility will separately report the pathogen class for each biosolids or sewage sludge management practice used by the facility and by each biosolids or sewage sludge form. It also is used to filter applicable Pathogen Reduction and Vector Attraction Reduction Options as well as Land Application Management Practice Deficiencies. Only reqired for some of the mgmt. practice types:
  * p_bio_mgmt_pathred `string`: This is the description of the option used by the facility to control pathogen for a Biosolids Management Practice:
  * p_bio_mgmt_vector `string`: The unique code that identifies the option used by the facility for vector attraction reduction. See a listing of these vector attraction reduction options at 40 CFR 503.33(b)(1) through (11). The facility will separately report the vector attraction reduction options for each biosolids or sewage sludge management practice used by the facility and by each biosolids or sewage sludge form as well as by each biosolids or sewage sludge pathogen class:
  * p_bio_mgmt_def_category `string`: This is the code indicating the type of NPDES special regulatory program deficiency:
  * p_bio_mgmt_deficiencies `number`: The number of times noncompliance was reported by the facility in the last 3 years. The results returned will include facilities whose number of reported noncompliance events is greater than or equal to the number entered.
  * p_bio_vio_code `string`: The Biosolids Single Event Violation Code.  Enter one or mode codes.
  * p_bio_current_vio `string` (values: Y, N): Indicator of whether the facility is currently in violation for biosolids under the Clean Water Act, in the 12th or 13th quarter:
  * p_bio_qtrs_in_vio `number`: The number of quarters, in the last three years, where the facility was in violation for a biosolids violation type.  The results returned will include facilities whose number of quarters with violations is greater than or equal to the number entered.
  * p_bio_rpt_year `string`: The last year that the permittee submitted an annual Biosolids report.  Valid values are NONE and any year greater or equal to 2016.
  * p_bio_vio_last_year `string` (values: Y, N): Identifies if a biosolids violation has occured in the last year.  Valid values are Y and N.
  * p_msgp_rpt_year `string`: The last year that a MSGP report was submitted for the permit.  Valid values are "NONE" and any year Greater or Eqal to 2015.
  * p_vio_last_year `string` (values: Y, N): Identifies if a permit violation has occured in the last year.  Valid values are Y and N.
  * responseset `number`: Response Set Limiter. Enter a value to limit the number of records per page. Value cannot exceed 1,000.
  * callback `string`: JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.
  * qcolumns `string`: Used to customize service output.  A list of comma-separated column IDs of output objects that will be returned in the service query object or download.  Use the metadata service endpoint for a complete list of Ids and definitions.
  * p_pretty_print `number`: Optional flag to request GeoJSON formatted results to be pretty printed.  Only provide a numeric value when the output needs to be human readable as pretty printing has a performance cost.
  * p_e90_count `number`: Number of E90 Exceedances.  Identifies water permits with a number of E90 (Effluient Exceedances) >= the value provided for the last number of years provided by the p_e90_years value.
  * p_e90_years `number`: Number of years for the p_e90_count search.  Identified the past number of years to be used for the p_e90_count search.
  * p_psc `string`: Point Source Category.

#### Output
* output `object`: Root Object
  * Results **required** [cwa08](#cwa08)

### cwa_rest_services.get_facility_info.post
Returns either an array of Facilities or an array of Clusters that meet the specified search criteria.


```js
epa_gov_cwa.cwa_rest_services.get_facility_info.post({}, context)
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
  * p_act `string`: Active Permits/Facilities Flag.  Provide Y or N to filter results to facilities with active permits.  A Y will select ICIS NPDES permits with a status of effective, continued, or expired.
  * p_maj `string` (values: Y, N): Major Facility Flag.  Enter Y to restrict results to Major facilities only.
  * p_mact `string`: CAA Maximum Achievable Control Technology (MACT) Subpart codes (alpha ID between 1 and 7 characters) applicable to the facility.
  * p_fea `string` (values: W, N): Formal Enforcement Actions [within / not within] specified date range indicator. The date range is determined by parameters p_fead1 and p_fead2 or by parameter p_feay.
  * p_feay `number` (values: 1, 2, 3, 4, 5): Years (1 to 5) Range.  This value is used to create a date range for Formal Enforcement Actions (FEA). Used along with p_fea (which indicates whether to look within or outside of the date range) to find FEAs within (or not within) the number of years specified.
  * p_feaa `string` (values: A, E, S): Agency associated with Formal Enforcement Actions:
  * p_iea `string` (values: W, N): Informal Enforcement Actions [within / not within] specified date range.  The date range is determined by parameters p_iead1 and p_iead2 or by parameter p_ieay.
  * p_ieay `number` (values: 1, 2, 3, 4, 5): Years (1 to 5) Range.  This value is used to create a date range for Informal Enforcement Actions (IEA). Used along with p_iea (which indicates whether to look within or outside of the date range) to find IEAs within (or not within) the number of years specified.
  * p_ieaa `string` (values: E, S): Agency associated with Informal Enforcement Actions. If left blank, both agencies are included.
  * p_qiv `string` (values: 0, GT1, GT2, GT4, GT8, 12): Quarters in Noncompliance Limiter.  Enter a coded value to limit results to facilities with given quarter of noncompliance.
  * p_iv `string`: Facility has a violation status of 'In Viol' during any of the selected quarters. 
  * p_impw `string` (values: Y, N): Discharging into Impaired Waters Flag. Enter Y to limit results to facilities with discharge to waterbodies listed as impaired in the ATTAINS database.
  * p_imp_pol `string` (values: Y, N): Facility is discharging pollutants that are potentially contributing to the impairment of local waterbodies according to the ATTAINS database.
  * p_imp_cau_grp `string` (values: ALGAL GROWTH, AMMONIA, BIOTOXINS, CAUSE UNKNOWN, CAUSE UNKNOWN - FISH KILLS, CAUSE UNKNOWN - IMPAIRED BIOTA, CHLORINE, DIOXINS, FISH CONSUMPTION ADVISORY, FLOW ALTERATION(S), HABITAT ALTERATIONS, MERCURY, METALS (OTHER THAN MERCURY), NOXIOUS AQUATIC PLANTS, NUISANCE EXOTIC SPECIES, NUISANCE NATIVE SPECIES, NUTRIENTS, OIL AND GREASE, ORGANIC ENRICHMENT/OXYGEN DEPLETION, OTHER CAUSE, PATHOGENS, PESTICIDES, PH/ACIDITY/CAUSTIC CONDITIONS, POLYCHLORINATED BIPHENYLS (PCBS), RADIATION, SALINITY/TOTAL DISSOLVED SOLIDS/CHLORIDES/SULFATES, SEDIMENT, TASTE, COLOR AND ODOR, TEMPERATURE, TOTAL TOXICS, TOXIC INORGANICS, TOXIC ORGANICS, TRASH, TURBIDITY): Facility is discharging a pollutant group causing a waterbody to be impaired.  Enter 1 through 34 (the internal number of the pollutant group); or enter a partial name such as Dioxin,Temp,tUrBidity.
  * p_trep `string` (values: CURR, NOTCURR): Current Toxics Release Inventory (TRI) Reporter Limiter.  Enter one of the following codes to limit results.
  * p_pm `string` (values: NONE, GT5, GT10, GT25, GT50, GT75): Percent Minority Population Limiter.  Enter a value to restrict results to facilities with a given percentage of minority population within 3-mile radius.
  * p_pd `string` (values: NONE, GT100, GT500, GT1000, GT5000, GT10000, GT20000): Population Density Limiter (per sq mile). Enter a value to limit results to facilities located in area of a given population density.
  * p_ico `string` (values: Y, N): Indian Country Flag.  Enter a "Y" or "N" to restrict searches to facilities inside or outside Indian Country.
  * p_huc `string`: 2-, 4-, 6-, or 8-character watershed code. May contain multiple comma-separated values.
  * p_pid `string`: Nine-digit permit IDs. May contain up to 2000 comma-separated values.
  * p_med `string` (values: A, M, R, S, ALL): Filter Results by Media.
  * p_ysl `string` (values: W, N, NV): Last Facility Inspection [within / not within] Specified Date Range Indicator. The date range is determined by parameters p_idt1 and p_idt2 or by parameter p_ysly.
  * p_ysly `number` (values: 1, 2, 3, 4, 5): Number of years (1 to 5) since last facility inspection.  A value of 1 means that it has been inspected within the year.
  * p_ysla `string` (values: E, S, A): Facility Last Inspection Code Filter.  If left blank, both agencies are included.  Enter a value to limit results:
  * p_qs `string`: Quick Search. Allows entry for city, state, and/or zip code.
  * p_sfs `string`: Single Facility Search Filter.  Provide a facility name or program system identifier to limit results.  For the all data search, the FRS registry identifier is also searched.
  * p_tribeid `number`: Numeric code for tribe (or list of tribes).
  * p_tribename `string`: Tribe Name Filter.  Enter a single tribe name to filter results.
  * p_tribedist `number`: Proximity to tribal land limiter. Enter an amount of mile between 0 and 25 to filter results.  This parameter is only evaluated if p_tribeid is populated.
  * p_pstat `string`: Permit Status Filter.  Enter one or more of the following codes.  Provide multiple values as a comma-delimited list.
  * p_ptype `string`: Permit Type Filter. Enter one or more code values to filter results.  Provide multiple values as a comma-delimited list.
  * p_pcomp `string`: Permit Component Code Filter.  Enter one or more codes to filter results.  Provide multiple values as a comma-delimited list.
  * p_plimits `string` (values: Y, N): Permit Limits Present Flag.  Enter Y to limit results to facilities have present permit limits.
  * p_pcss `string` (values: ALL, GE1, GE10, GE50): Combined Sewer Systems Outflows Limiter.  Enter one of the following to limit results to facilities having the given count of CSS outflows.
  * p_pexp `string` (values: EXP, EXPLE1YR, EXPGT1YR): Permit Expired or Administratively Continued Limiter.  Enter one of the following values to filter results.
  * p_owop `string` (values: FEDERAL, POTW, NON-POTW): Owner/Operator code filter.  Enter one of the following values to restrict results.
  * p_ipfti `string`
  * p_agoo `string` (values: AND, OR): Indicates whether to AND or OR the Owner/Operator parameter (p_owop) and the federal agency code (p_fa) parameters.
  * p_idt1 `string`: Beginning of date range of most recent facility inspection.
  * p_idt2 `string`: End of date range of most recent facility inspection.
  * p_pityp `string`: Inspection Type Code.  See ICIS Compliance Monitor Types lookup serivce for a list of available codes and descriptions.
  * p_pfead1 `string`: Formal Enforcement Action Date Range Start.  Enter a date in MM/DD/YYYY format to set the start of the range for filtering by recent Formal Enforcement Action (FEA) taken against the facility within the last five years.
  * p_pfead2 `string`: Formal Enforcement Action Date Range End.  Enter a date in MM/DD/YYYY format to set the end of the date range for filtering by recent Formal Enforcement Action (FEA) taken against the facility within the last five years.
  * p_pfeat `string`: Formal Enforcement Action (FEA) Code Filter.  Enter one or more three-letter FEA codes to restrict results to facilities with these attributes.  Use p_fead1 and p_fead2 parameters to further restrict this filter by entering a date range.  Provide multiple codes as a comma-delimited list.
  * p_pccs `string`: Current Compliance Status:
  * p_pexcd `string` (values: 0, GE0, GE10, GE50, GE100): 3-Year Effluent Exceedances Limiter.  Enter a value to restrict results to facilities with the given amount of exceedances in the past 3 years.
  * p_psncq `string` (values: GT1, GE1, GT2, GE2, GT4, GE4, GT8, GE8, GT12, GE12): Quarters in Significant Noncompliance Limiter.  Enter a coded value to limit results to facilities with given quarter of significant noncompliance.
  * p_pctrack `string` (values: Off, Partial, On): Compliance Tracking Limiter. Provide a keyword to indicate the extent to which data is being entered and effluent exceedances are being identified.
  * p_dwd `string` (values: 0, GT0, GT1000, GT5000, GT10000, GT20000, GT50000): Direct Water Discharges. Pounds of toxic chemicals released directly to surface water as reported to the Toxics Release Inventory.
  * p_pt `string` (values: 0, GT0, GT1000, GT5000, GT10000, GT20000, GT50000): POTW Transfers. Pounds of toxic chemicals transferred to a Publicly Operated Treatment Works (POTW) as reported to the Toxics Release Inventory.
  * p_pdwdist `string` (values: N, LT1, LT2, LT5, LT10, LT15): Distance (in miles) to downstream drinking water intake.
  * p_pswdpc `string`: Pollutant Category Code:  Values: WTR for Water, AIR for Air
  * p_pswdmp `string` (values: 1, 2, 3, 4, 5): Used to determine limit begin and end dates for surface water discharges. Number represents years from current date.
  * p_pswpol `string`: For CWA, pollutant names for surface water discharges. for Drinking Water, SDWIS Violation contaminant codes for unaddressed violations that have occurred in the last 3 years. May contain multiple comma-separated values.
  * p_pswcas `string`: CAS numbers for surface water discharges. May contain multiple comma-separated values.
  * p_pswparam `string`: Parameter codes for surface water discharges. May contain multiple comma-separated values.
  * p_pswvio `string` (values: Y, N): Used in conjuction with parameters p_pswpol and p_pswparam, indicates whether search should only include pollutants with violations.
  * p_wbd `string`: 2-, 4-, 6-, 8-, 10-, or 12-character watershed (WBD from the USGS Watershed Boundary Dataset). May contain multiple comma-separated values.  Uses the FRS Best Pick Coordinate to obtain the WBD12 Huc value.
  * p_radwbd `string`: 2-, 4-, 6-, 8-, 10-, or 12 character watershed (WBD from the USGS Watershed Boundary Dataset). May contain multiple comma-separated values.  Will search against WBD values otained by "reach indexing" NPDES permits against the medium resolution National Hydrography Dataset. 
  * p_frswbd `string`: Works exactly the same as the p_wbd parameter.  2-, 4-, 6-, 8-, 10-, or 12-character watershed (WBD from the USGS Watershed Boundary Dataset). May contain multiple comma-separated values.  Uses the FRS Best Pick Coordinate to obtain the WBD12 Huc value.
  * p_fntype `string` (values: ALL, CONTAINS, EXACT, BEGINS): Controls type of text search performed on facility name with parameter p_fn.
  * p_pidall `string` (values: Y, N): Controls whether search is restricted to existing system. Y means the search will match the p_pid parameter against all associated permits (AIR, RCRA, SDWIS, etc).
  * p_months_last_dmr `number`: The number of months since the last Discharge Monitoring Report has been submitted.
  * p_last_dmr_within `string` (values: W, N): W value returns facilities that have submitted DMRs within the number of months specified by p_months_last_dmr. An N value returns facilities that have not submitted a DMR within the specified number of months.
  * p_indsw `string` (values: Y, N): Industrial Stormwater Permit Flag.  Enter a Y or N to filter results by this type of permit.
  * p_msgp_ptype `string` (values: NOI, NOE): Multi-Sector General Purpose Permit Type.  Enter a value to filter results by MSGP Permit Type.
  * p_mon_type `string` (values: BENCHG2, BENCH, ELG): For use with the Industrial Stormwater search only. Valid values are BENCHGS fro Benchmark (Alert Limit) G2 Ore, BENCH for Benchmark (Alert Limit), and ELG fro Effluent Limitation Guidelines(ELG)(Effluent Limit).  
  * p_iagency `string`: Issuing Agency Limiter.  Enter a single value to filter results by the issuing agency, e.g. "State" or "EPA".
  * p_permitting_agency `string`
  * p_isws `string`: Multi-Sector General Purpose Permit Subsector Individual Identifier.  Enter a value to filter results.
  * p_iswss `string`: Multi-Sector General Purpose Permit Subsector Group Code.  Enter a value to filter results.
  * p_iswssID `string`: Multi-Sector General Purpose Permit Sector Code.  Enter a value to filter results.
  * p_ds1 `string`: Submitted Date Filter Start.  To filter by the date of submission, enter a start date here and an end date in the p_ds2 parameter.  Both dates are required for filtering.
  * p_ds2 `string`: Submitted Date Filter End.  To filter by the date of submission, enter an end date here and a start date in the p_ds1 parameter.  Both dates are required for filtering.
  * p_da1 `string`: Active Date Filter Start.  To filter by the active date, enter a start date here and an end date in the p_da2 parameter.  Both dates are required for filtering.
  * p_da2 `string`: Active Date Filter End.  To filter by the active date, enter an end date here and a start date in the p_da1 parameter.  Both dates are required for filtering.
  * p_MS4 `string` (values: Y, N): Municipal Separate Storm Water Sewer (MS4) Permit Flag.  Enter a Y or N to filter results by this type of permit.
  * p_ooFN `string`: Owner/Operator Name. Enter the owner/operator name of the facility.
  * p_ooFNtype `string` (values: ALL, EXACT, BEGINS, CONTAINS): Owner/Operator Name Multiple Selection Evaluator.  
  * p_ooSA `string`: Owner/Operator Address.  Enter the address of the owner/operator of the facility.
  * p_ooSA1 `string`: Owner/Operator Address Line 2.  Enter the line 2 address of the owner/operator of the facility.
  * p_ooCt `string`: Owner/Operator City. Enter the city where the owner/operator of the facility is located.
  * p_ooSt `string`: Owner/Operator State.  Enter the standardized postal state code where the owner/operator of the facility is located.
  * p_ooZip `string`: Owner/Operator Zip Code.  Enter the postal zip code where the owner/operator of the facility is located.
  * p_fac_ico `string` (values: Y, N): FRS tribal land code flag.  Enter "Y" or "N" to include or exclude facilities based on FRS tribal land code.
  * p_icoo `string`: Indian country search and/or flag.  Enter "Y" to set indian country search conditions to return any results found using p_ico, p_fac_ico or p_fac_icoo.  Otherwise only results matching all provided p_ico, p_fac_ico or p_fac_icoo conditions will be returned.
  * p_fac_icos `string`: FRS tribal land spatial flag.  Enter "Y" or "N" to include or exclude facilities based on FRS tribal land spatial flag.
  * p_ejscreen `string`: Enter "Y" to limit facilities to Census block groups where one of more Environmental Justice indexes above 80th percentile.
  * p_alrexceed `number`: Alert Limits Exceedences Limiter.  Enter a numeric value to restrict results to facilities having the given amount or more of alert limits exceedances.
  * p_limit_addr `string` (values: Y, N): Limit Address Search Flag.  Enter Y to restrict facility searches to native data source only.  
  * p_lat `number`: Latitude location in decimal degrees.
  * p_long `number`: Longitude location in decimal degrees.
  * p_radius `number`: Spatial Search Radius.  Enter a radius up to 100 miles in which to spatially search for facilities.
  * p_ejscreen_over80cnt `string` (values: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11): The number of Environmenmt Justice Indicators above the 80th percentile.  Valid values are 1 through 11.
  * p_bio_flag `string`: A Y value will select all biosolid-related permits.
  * p_bio_fac_type `string`: The code indicating the reporting obligation reason:
  * p_bio_trtmnt_procs `string`: The biosolids or sewage sludge treatment process or processes at the facility:
  * p_bio_analy_method_catgry `string`: The unique code for the category of the analytic methods used by the facility to analyze regulated parameters (including enteric viruses, fecal coliforms, helminth ova, and Salmonella sp.) at the facility:
  * p_bio_total_volume_amt `string`: Total annual amount (in dry metric tons) of biosolids or sewage sludge generated at the facility.
  * p_bio_mgmt_prctce_type `string`: The unique code that identifies the type of biosolids or sewage sludge management practice (e.g., land application, surface disposal, incineration) used by the facility. The facility will separately report the management practice for each biosolids or sewage sludge form and pathogen class. This data element will also identify the management practices used by surface disposal site owners/operators (see 40 CFR 503.24):
  * p_bio_mgmt_prctce_stype `string`: This is the code indicating additional detail about the type of Management Practice used for a volume of Biosolids or Sewage Sludge:
  * p_bio_mgmt_prctce_handler `string`: This is the code indicating the type of Biosolids or Sewage Sludge handlers/preparers.
  * p_bio_mgmt_container `string`: The code that identifies the nature of each biosolids and sewage sludge material generated by the facility in terms of whether the material is a biosolid or sewage sludge and whether the material is ultimately conveyed off-site in bulk or in bags. The facility separately reports the form for each biosolids or sewage sludge management practice or practices used by the facility and pathogen class:
  * p_bio_mgmt_pathogen `string`: This code identifies the pathogen class [e.g., Class A, Class B, Not Applicable (Incineration)] for biosolids or sewage sludge generated by the facility. The facility will separately report the pathogen class for each biosolids or sewage sludge management practice used by the facility and by each biosolids or sewage sludge form. It also is used to filter applicable Pathogen Reduction and Vector Attraction Reduction Options as well as Land Application Management Practice Deficiencies. Only reqired for some of the mgmt. practice types:
  * p_bio_mgmt_pathred `string`: This is the description of the option used by the facility to control pathogen for a Biosolids Management Practice:
  * p_bio_mgmt_vector `string`: The unique code that identifies the option used by the facility for vector attraction reduction. See a listing of these vector attraction reduction options at 40 CFR 503.33(b)(1) through (11). The facility will separately report the vector attraction reduction options for each biosolids or sewage sludge management practice used by the facility and by each biosolids or sewage sludge form as well as by each biosolids or sewage sludge pathogen class:
  * p_bio_mgmt_def_category `string`: This is the code indicating the type of NPDES special regulatory program deficiency:
  * p_bio_mgmt_deficiencies `number`: The number of times noncompliance was reported by the facility in the last 3 years. The results returned will include facilities whose number of reported noncompliance events is greater than or equal to the number entered.
  * p_bio_vio_code `string`: The Biosolids Single Event Violation Code.  Enter one or mode codes.
  * p_bio_current_vio `string` (values: Y, N): Indicator of whether the facility is currently in violation for biosolids under the Clean Water Act, in the 12th or 13th quarter:
  * p_bio_qtrs_in_vio `number`: The number of quarters, in the last three years, where the facility was in violation for a biosolids violation type.  The results returned will include facilities whose number of quarters with violations is greater than or equal to the number entered.
  * p_bio_rpt_year `string`: The last year that the permittee submitted an annual Biosolids report.  Valid values are NONE and any year greater or equal to 2016.
  * p_bio_vio_last_year `string` (values: Y, N): Identifies if a biosolids violation has occured in the last year.  Valid values are Y and N.
  * p_msgp_rpt_year `string`: The last year that a MSGP report was submitted for the permit.  Valid values are "NONE" and any year Greater or Eqal to 2015.
  * p_vio_last_year `string` (values: Y, N): Identifies if a permit violation has occured in the last year.  Valid values are Y and N.
  * responseset `number`: Response Set Limiter. Enter a value to limit the number of records per page. Value cannot exceed 1,000.
  * callback `string`: JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.
  * qcolumns `string`: Used to customize service output.  A list of comma-separated column IDs of output objects that will be returned in the service query object or download.  Use the metadata service endpoint for a complete list of Ids and definitions.
  * p_pretty_print `number`: Optional flag to request GeoJSON formatted results to be pretty printed.  Only provide a numeric value when the output needs to be human readable as pretty printing has a performance cost.
  * p_e90_count `number`: Number of E90 Exceedances.  Identifies water permits with a number of E90 (Effluient Exceedances) >= the value provided for the last number of years provided by the p_e90_years value.
  * p_e90_years `number`: Number of years for the p_e90_count search.  Identified the past number of years to be used for the p_e90_count search.
  * p_psc `string`: Point Source Category.

#### Output
* output `object`: Root Object
  * Results **required** [cwa08](#cwa08)

### cwa_rest_services.get_geojson.get
Based on the QID obtained from a get_facilities or get_facility_info query, return GeoJSON of the facilities found.


```js
epa_gov_cwa.cwa_rest_services.get_geojson.get({
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
    * items [cwa09](#cwa09)
  * type **required** `string`: Static marker indicating object is a GeoJSON Feature Collection.

### cwa_rest_services.get_geojson.post
Based on the QID obtained from a get_facilities or get_facility_info query, return GeoJSON of the facilities found.


```js
epa_gov_cwa.cwa_rest_services.get_geojson.post({
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
    * items [cwa09](#cwa09)
  * type **required** `string`: Static marker indicating object is a GeoJSON Feature Collection.

### cwa_rest_services.get_info_clusters.get
Based on the QID obtained from a clustered get_facility_info query, download cluster facility information as either a CSV or GEOJSON file.


```js
epa_gov_cwa.cwa_rest_services.get_info_clusters.get({
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

### cwa_rest_services.get_info_clusters.post
Based on the QID obtained from a clustered get_facility_info query, download cluster facility information as either a CSV or GEOJSON file.


```js
epa_gov_cwa.cwa_rest_services.get_info_clusters.post({
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

### cwa_rest_services.get_map.get
The purpose of the GET_MAP service is to display facility coordinates and facility clusters related to a get_facilities facility query. Currently, the maximum number of coordinates returned is 500. GET_MAP performs automatic clustering at the state, county, and zip code levels to maximize the number of coordinates returned.


```js
epa_gov_cwa.cwa_rest_services.get_map.get({
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
  * p_id **required** `string`: Nine-character code used to uniquely identify a permitted NPDES facility. The NPDES permit program regulates the direct discharge of pollutants into US waters.

#### Output
* output `object`: Root Object
  * MapOutput **required** [cwa12](#cwa12)

### cwa_rest_services.get_map.post
The purpose of the GET_MAP service is to display facility coordinates and facility clusters related to a get_facilities facility query. Currently, the maximum number of coordinates returned is 500. GET_MAP performs automatic clustering at the state, county, and zip code levels to maximize the number of coordinates returned.


```js
epa_gov_cwa.cwa_rest_services.get_map.post({
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
  * p_id **required** `string`: Nine-character code used to uniquely identify a permitted NPDES facility. The NPDES permit program regulates the direct discharge of pollutants into US waters.

#### Output
* output `object`: Root Object
  * MapOutput **required** [cwa12](#cwa12)

### cwa_rest_services.get_qid.get
GET_QID is passed with a query ID corresponding to a previously run get_facilities query. It then returns a Facility object containing all matching facilities. The main purpose of GET_QID is for large querysets that contain multiple pages (responsesets) of output. GET_QID allows for pagination and for the selection and sorting of columns. 


```js
epa_gov_cwa.cwa_rest_services.get_qid.get({
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
  * Results **required** [cwa13](#cwa13)

### cwa_rest_services.get_qid.post
GET_QID is passed with a query ID corresponding to a previously run get_facilities query. It then returns a Facility object containing all matching facilities. The main purpose of GET_QID is for large querysets that contain multiple pages (responsesets) of output. GET_QID allows for pagination and for the selection and sorting of columns. 


```js
epa_gov_cwa.cwa_rest_services.get_qid.post({
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
  * Results **required** [cwa13](#cwa13)

### cwa_rest_services.metadata.get
Returns the JSON Object Name and ColumnId for usage with the qcolumns parameter for get_qid, get_facility_info and other service endpoints.


```js
epa_gov_cwa.cwa_rest_services.metadata.get({}, context)
```

#### Input
* input `object`
  * output `string` (values: JSONP, JSON, XML): Output Format Flag.  Enter one of the following keywords:
  * callback `string`: JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.

#### Output
* output `object`: Root Object
  * Results **required** [meta1](#meta1)

### cwa_rest_services.metadata.post
Returns the JSON Object Name and ColumnId for usage with the qcolumns parameter for get_qid, get_facility_info and other service endpoints.


```js
epa_gov_cwa.cwa_rest_services.metadata.post({}, context)
```

#### Input
* input `object`
  * output `string` (values: JSONP, JSON, XML): Output Format Flag.  Enter one of the following keywords:
  * callback `string`: JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.

#### Output
* output `object`: Root Object
  * Results **required** [meta1](#meta1)

### rest_lookups.bp_tribes.get
Returns the EPA Standard Indian Tribes and Native Alaskan Villages tribal_id and tribe_name.


```js
epa_gov_cwa.rest_lookups.bp_tribes.get({}, context)
```

#### Input
* input `object`
  * output `string` (values: JSONP, JSON, XML): Output Format Flag.  Enter one of the following keywords:
  * callback `string`: JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.
  * search_term `string`: Enter a partial or complete search phrase or word.
  * search_code `string`: Enter a partial or complete code value.

#### Output
* output `object`: Root Object
  * Results **required** [rlup20](#rlup20)

### rest_lookups.bp_tribes.post
Returns the EPA Standard Indian Tribes and Native Alaskan Villages tribal_id and tribe_name.


```js
epa_gov_cwa.rest_lookups.bp_tribes.post({}, context)
```

#### Input
* input `object`
  * output `string` (values: JSONP, JSON, XML): Output Format Flag.  Enter one of the following keywords:
  * callback `string`: JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.
  * search_term `string`: Enter a partial or complete search phrase or word.
  * search_code `string`: Enter a partial or complete code value.

#### Output
* output `object`: Root Object
  * Results **required** [rlup20](#rlup20)

### rest_lookups.cwa_parameters.get
Look up Clean Water Act parameter codes and descriptions in the Integrated Compliance Information System - National Pollutant Discharge Elimination System (ICIS-NPDES) by code or term.


```js
epa_gov_cwa.rest_lookups.cwa_parameters.get({}, context)
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
epa_gov_cwa.rest_lookups.cwa_parameters.post({}, context)
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

### rest_lookups.cwa_pollutants.get
Look up Clean Water Act pollutants by name


```js
epa_gov_cwa.rest_lookups.cwa_pollutants.get({}, context)
```

#### Input
* input `object`
  * output `string` (values: JSONP, JSON, XML): Output Format Flag.  Enter one of the following keywords:
  * callback `string`: JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.
  * search_term `string`: Enter a partial or complete search phrase or word.
  * search_code `string`: Enter a partial or complete code value.

#### Output
* output `object`: Root Object
  * Results **required** [rlup24](#rlup24)

### rest_lookups.cwa_pollutants.post
Look up Clean Water Act pollutants by name


```js
epa_gov_cwa.rest_lookups.cwa_pollutants.post({}, context)
```

#### Input
* input `object`
  * output `string` (values: JSONP, JSON, XML): Output Format Flag.  Enter one of the following keywords:
  * callback `string`: JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.
  * search_term `string`: Enter a partial or complete search phrase or word.
  * search_code `string`: Enter a partial or complete code value.

#### Output
* output `object`: Root Object
  * Results **required** [rlup24](#rlup24)

### rest_lookups.federal_agencies.get
Look up Federal Agency Code


```js
epa_gov_cwa.rest_lookups.federal_agencies.get({}, context)
```

#### Input
* input `object`
  * output `string` (values: JSONP, JSON, XML): Output Format Flag.  Enter one of the following keywords:
  * callback `string`: JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.
  * search_term `string`: Enter a partial or complete search phrase or word.
  * search_code `string`: Enter a partial or complete code value.

#### Output
* output `object`: Root Object
  * Results **required** [rlup54](#rlup54)

### rest_lookups.federal_agencies.post
Look up Federal Agency Code


```js
epa_gov_cwa.rest_lookups.federal_agencies.post({}, context)
```

#### Input
* input `object`
  * output `string` (values: JSONP, JSON, XML): Output Format Flag.  Enter one of the following keywords:
  * callback `string`: JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.
  * search_term `string`: Enter a partial or complete search phrase or word.
  * search_code `string`: Enter a partial or complete code value.

#### Output
* output `object`: Root Object
  * Results **required** [rlup54](#rlup54)

### rest_lookups.icis_inspection_types.get
Returns the ICIS NPDES Compliance Monitoring Type Code and Description.


```js
epa_gov_cwa.rest_lookups.icis_inspection_types.get({}, context)
```

#### Input
* input `object`
  * output `string` (values: JSONP, JSON, XML): Output Format Flag.  Enter one of the following keywords:
  * callback `string`: JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.
  * search_term `string`: Enter a partial or complete search phrase or word.
  * search_code `string`: Enter a partial or complete code value.

#### Output
* output `object`: Root Object
  * Results **required** [rlup58](#rlup58)

### rest_lookups.icis_inspection_types.post
Returns the ICIS NPDES Compliance Monitoring Type Code and Description.


```js
epa_gov_cwa.rest_lookups.icis_inspection_types.post({}, context)
```

#### Input
* input `object`
  * output `string` (values: JSONP, JSON, XML): Output Format Flag.  Enter one of the following keywords:
  * callback `string`: JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.
  * search_term `string`: Enter a partial or complete search phrase or word.
  * search_code `string`: Enter a partial or complete code value.

#### Output
* output `object`: Root Object
  * Results **required** [rlup58](#rlup58)

### rest_lookups.icis_law_sections.get
Returns the ICIS NPDES Law Section Descriptions.


```js
epa_gov_cwa.rest_lookups.icis_law_sections.get({}, context)
```

#### Input
* input `object`
  * output `string` (values: JSONP, JSON, XML): Output Format Flag.  Enter one of the following keywords:
  * callback `string`: JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.
  * statute_code `string`
  * status_flag `string`
  * search_term `string`: Enter a partial or complete search phrase or word.
  * search_code `string`: Enter a partial or complete code value.
  * sort_order `number`

#### Output
* output `object`: Root Object
  * Results **required** [rlup59](#rlup59)

### rest_lookups.icis_law_sections.post
Returns the ICIS NPDES Law Section Descriptions.


```js
epa_gov_cwa.rest_lookups.icis_law_sections.post({}, context)
```

#### Input
* input `object`
  * output `string` (values: JSONP, JSON, XML): Output Format Flag.  Enter one of the following keywords:
  * callback `string`: JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.
  * statute_code `string`
  * status_flag `string`
  * search_term `string`: Enter a partial or complete search phrase or word.
  * search_code `string`: Enter a partial or complete code value.
  * sort_order `number`

#### Output
* output `object`: Root Object
  * Results **required** [rlup59](#rlup59)

### rest_lookups.naics_codes.get
ECHO NAICS Codes Lookup Service


```js
epa_gov_cwa.rest_lookups.naics_codes.get({}, context)
```

#### Input
* input `object`
  * output `string` (values: JSONP, JSON, XML): Output Format Flag.  Enter one of the following keywords:
  * callback `string`: JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.
  * search_term `string`: Enter a partial or complete search phrase or word.
  * search_code `string`: Enter a partial or complete code value.

#### Output
* output `object`: Root Object
  * Results **required** [rlup61](#rlup61)

### rest_lookups.naics_codes.post
ECHO NAICS Codes Lookup Service


```js
epa_gov_cwa.rest_lookups.naics_codes.post({}, context)
```

#### Input
* input `object`
  * output `string` (values: JSONP, JSON, XML): Output Format Flag.  Enter one of the following keywords:
  * callback `string`: JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.
  * search_term `string`: Enter a partial or complete search phrase or word.
  * search_code `string`: Enter a partial or complete code value.

#### Output
* output `object`: Root Object
  * Results **required** [rlup61](#rlup61)

### rest_lookups.npdes_parameters.get
ICIS Limit Parameter Code and Name lookup based on the supply of a partial parameter name. (NPDES = National Pollutant Discharge Elimination System)


```js
epa_gov_cwa.rest_lookups.npdes_parameters.get({}, context)
```

#### Input
* input `object`
  * output `string` (values: JSONP, JSON, XML): Output Format Flag.  Enter one of the following keywords:
  * callback `string`: JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.
  * search_term `string`: Enter a partial or complete search phrase or word.

#### Output
* output `object`: Root Object
  * Results **required** [rlup65](#rlup65)

### rest_lookups.npdes_parameters.post
ICIS Limit Parameter Code and Name lookup based on the supply of a partial parameter name. (NPDES = National Pollutant Discharge Elimination System)


```js
epa_gov_cwa.rest_lookups.npdes_parameters.post({}, context)
```

#### Input
* input `object`
  * output `string` (values: JSONP, JSON, XML): Output Format Flag.  Enter one of the following keywords:
  * callback `string`: JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.
  * search_term `string`: Enter a partial or complete search phrase or word.

#### Output
* output `object`: Root Object
  * Results **required** [rlup65](#rlup65)

### rest_lookups.wbd_code_lu.get
USGS Watershed Boundary Dataset (WBD) Name lookup based on a supplied WBD Code and Watershed Level


```js
epa_gov_cwa.rest_lookups.wbd_code_lu.get({}, context)
```

#### Input
* input `object`
  * output `string` (values: JSONP, JSON, XML): Output Format Flag.  Enter one of the following keywords:
  * callback `string`: JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.
  * wbd_code `string`: Two-digit watershed code [Hydrologic Unit Code (HUC)].
  * wbd_level `string`: The number of digits of the watershed code [Hydrologic Unit Code (HUC)] returned in the ValueCode. Must be an even number between 4 and 12.

#### Output
* output `object`: Root Object
  * Results **required** [rlup75](#rlup75)

### rest_lookups.wbd_code_lu.post
USGS Watershed Boundary Dataset (WBD) Name lookup based on a supplied WBD Code and Watershed Level


```js
epa_gov_cwa.rest_lookups.wbd_code_lu.post({}, context)
```

#### Input
* input `object`
  * output `string` (values: JSONP, JSON, XML): Output Format Flag.  Enter one of the following keywords:
  * callback `string`: JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.
  * wbd_code `string`: Two-digit watershed code [Hydrologic Unit Code (HUC)].
  * wbd_level `string`: The number of digits of the watershed code [Hydrologic Unit Code (HUC)] returned in the ValueCode. Must be an even number between 4 and 12.

#### Output
* output `object`: Root Object
  * Results **required** [rlup75](#rlup75)

### rest_lookups.wbd_name_lu.get
USGS Watershed Boundary Dataset (WBD) Code lookup based on a supplied WBD Name and Watershed Level


```js
epa_gov_cwa.rest_lookups.wbd_name_lu.get({
  "wbd_name": ""
}, context)
```

#### Input
* input `object`
  * output `string` (values: JSONP, JSON, XML): Output Format Flag.  Enter one of the following keywords:
  * callback `string`: JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.
  * wbd_name **required** `string`: Watershed Name Filter.
  * wbd_level `string`: The number of digits of the watershed code [Hydrologic Unit Code (HUC)] returned in the ValueCode. Must be an even number between 4 and 12.

#### Output
* output `object`: Root Object
  * Results **required** [rlup77](#rlup77)

### rest_lookups.wbd_name_lu.post
USGS Watershed Boundary Dataset (WBD) Code lookup based on a supplied WBD Name and Watershed Level


```js
epa_gov_cwa.rest_lookups.wbd_name_lu.post({
  "wbd_name": ""
}, context)
```

#### Input
* input `object`
  * output `string` (values: JSONP, JSON, XML): Output Format Flag.  Enter one of the following keywords:
  * callback `string`: JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.
  * wbd_name **required** `string`: Watershed Name Filter.
  * wbd_level `string`: The number of digits of the watershed code [Hydrologic Unit Code (HUC)] returned in the ValueCode. Must be an even number between 4 and 12.

#### Output
* output `object`: Root Object
  * Results **required** [rlup77](#rlup77)



## Definitions

### cwa01
* cwa01 `object`: Facilities Object
  * AIRIDs **required** `string`: Air Facility System (AFS) ID.
  * ActiveLower48 **required** `string`: A Y/N indicator indicating that the facility is active and located within the lower 48 contiguous US States.
  * AlrExceedences **required** `string`
  * AssociatedPollutant **required** `string`: Description of pollutant(s) or pollutant constituent(s) associated with each industrial activity exposed to stormwater.
  * AttainsAquaticLifeUseFlg **required** `string`: Displays "Y" if the waterbody in which the facility resides is designated for aquatic life use. The data are from the ATTAINS database.
  * AttainsAuCategory **required** `string`: The impairment class or category of the waterbody in which the facility is permitted to discharge directly. The data are from the ATTAINS database:
  * AttainsCauseGroups **required** `string`: Lists all groups of pollutants or stressors that are causing impairment in the assessed waterbody. The data are from the ATTAINS database.
  * AttainsCycleYear **required** `string`: The year in which the most recent state assessment occurred for the waterbody. The data are from the ATTAINS database.
  * AttainsExceptnlUseFlg **required** `string`: Displays "Y" if the waterbody in which the facility resides is designated for exceptional use. The data are from the ATTAINS database.
  * AttainsImpWaterFlg **required** `string`: Displays "Y" if the waterbody in which the facility resides is listed for impairment. The data are from the ATTAINS database.
  * AttainsPossibleNPDESParams **required** `string`: Lists all pollutants discharged by the facility that are potentially contributing to the impairment of local waterbodies.
  * AttainsRecreationUseFlg **required** `string`: Displays "Y" if the waterbody in which the facility resides is designated for recreational use. The data are from the ATTAINS database.
  * AttainsShellfishUseFlg **required** `string`: Displays "Y" if the waterbody in which the facility resides is designated for shellfish use. The data are from the ATTAINS database.
  * AttainsSource **required** `string`: The CWA Report in which the waterbody data can be found. The data are from the Assessment TMDL Tracking & Implementation System (ATTAINS) database.
  * AttainsStateCauses **required** `string`: Lists all pollutants or stressors that are causing impairment in the assessed waterbody. The data are from the ATTAINS database.
  * BeachCloseLast2yrsFlg **required** `string`: Displays "Y" if the facility is located on or near a waterbody with a beach closure within the last two years.
  * BeachCloseLastYearFlg **required** `string`: Displays "Y" if the facility is located on or near a waterbody with a beach closure within the last year.
  * BioAnalyMethodCatgrys **required** `string`: Displays the categories of the analytic methods used by the facility to analyze regulated parameters at the facility.
  * BioAnalyMethodCatgrys2016 **required** `string`: Displays the categories of the analytic methods used by the facility to analyze regulated parameters at the facility.
  * BioAnalyMethodCatgrys2017 **required** `string`: Displays the categories of the analytic methods used by the facility to analyze regulated parameters at the facility.
  * BioAnalyMethods **required** `string`: Displays the analytic methods used by the facility to analyze enteric viruses, fecal coliforms, helminth ova, Salmonella sp., and other regulated parameters as reported on the Biosolids Program Report.
  * BioAnalyMethods2016 **required** `string`: Displays the analytic methods used by the facility to analyze enteric viruses, fecal coliforms, helminth ova, Salmonella sp., and other regulated parameters as reported on the Biosolids Program Report.
  * BioAnalyMethods2017 **required** `string`: Displays the analytic methods used by the facility to analyze enteric viruses, fecal coliforms, helminth ova, Salmonella sp., and other regulated parameters as reported on the Biosolids Program Report.
  * BioCommentText **required** `string`: Free text allowing the user to provide comments on the annual program report.
  * BioCommentText2016 **required** `string`: Free text allowing the user to provide comments on the annual program report.
  * BioCommentText2017 **required** `string`: Free text allowing the user to provide comments on the annual program report.
  * BioIncinerationSum **required** `string`: The amount (dry metric tons) of biosolids incinerated.
  * BioIncinerationSum2016 **required** `string`: The amount (dry metric tons) of biosolids incinerated.
  * BioIncinerationSum2017 **required** `string`: The amount (dry metric tons) of biosolids incinerated.
  * BioLandApplicationSum **required** `string`: The amount (dry metric tons) of biosolids land applied.
  * BioLandApplicationSum2016 **required** `string`: The amount (dry metric tons) of biosolids land applied.
  * BioLandApplicationSum2017 **required** `string`: The amount (dry metric tons) of biosolids land applied.
  * BioMgmtContainers **required** `string`: Identifies the nature of each biosolids and sewage sludge material generated by the facility in terms of whether the material is a biosolid or sewage sludge and whether the material is ultimately conveyed off-site in bulk or in bags.
  * BioMgmtContainers2016 **required** `string`: Identifies the nature of each biosolids and sewage sludge material generated by the facility in terms of whether the material is a biosolid or sewage sludge and whether the material is ultimately conveyed off-site in bulk or in bags.
  * BioMgmtContainers2017 **required** `string`: Identifies the nature of each biosolids and sewage sludge material generated by the facility in terms of whether the material is a biosolid or sewage sludge and whether the material is ultimately conveyed off-site in bulk or in bags.
  * BioMgmtDefCategories **required** `string`: Indicates the program deficiency category to assist in reporting and displaying program deficiencies on web screens.
  * BioMgmtDefCategories2016 **required** `string`: Indicates the program deficiency category to assist in reporting and displaying program deficiencies on web screens.
  * BioMgmtDefCategories2017 **required** `string`: Indicates the program deficiency category to assist in reporting and displaying program deficiencies on web screens.
  * BioMgmtDefCurrentCnt **required** `string`: The number of times noncompliance reported by the facility in the last 3 years.
  * BioMgmtDefCurrentCnt2016 **required** `string`: The number of times noncompliance reported by the facility in the last 3 years.
  * BioMgmtDefCurrentCnt2017 **required** `string`: The number of times noncompliance reported by the facility in the last 3 years.
  * BioMgmtDeficiencies **required** `string`: Indicates the type of NPDES special regulatory program deficiency.
  * BioMgmtDeficiencies2016 **required** `string`: Indicates the type of NPDES special regulatory program deficiency.
  * BioMgmtDeficiencies2017 **required** `string`: Indicates the type of NPDES special regulatory program deficiency.
  * BioMgmtHandlers **required** `string`: Indicates the type of Biosolids or Sewage Sludge handlers/preparers, either owner/operator or off-site third-party handler/preparer.
  * BioMgmtHandlers2016 **required** `string`: Indicates the type of Biosolids or Sewage Sludge handlers/preparers, either owner/operator or off-site third-party handler/preparer.
  * BioMgmtHandlers2017 **required** `string`: Indicates the type of Biosolids or Sewage Sludge handlers/preparers, either owner/operator or off-site third-party handler/preparer.
  * BioMgmtPathogens **required** `string`: Identifies the pathogen class for biosolids or sewage sludge generated by the facility.
  * BioMgmtPathogens2016 **required** `string`: Identifies the pathogen class for biosolids or sewage sludge generated by the facility.
  * BioMgmtPathogens2017 **required** `string`: Identifies the pathogen class for biosolids or sewage sludge generated by the facility.
  * BioMgmtPathreds **required** `string`: Identifies the options used by the facility to control pathogens for a Biosolids Management Practice.
  * BioMgmtPathreds2016 **required** `string`: Identifies the options used by the facility to control pathogens for a Biosolids Management Practice.
  * BioMgmtPathreds2017 **required** `string`: Identifies the options used by the facility to control pathogens for a Biosolids Management Practice.
  * BioMgmtPrctceStypes **required** `string`: Additional detail about the type of Management Practice used for an amount of Biosolids or Sewage Sludge.
  * BioMgmtPrctceStypes2016 **required** `string`: Additional detail about the type of Management Practice used for an amount of Biosolids or Sewage Sludge.
  * BioMgmtPrctceStypes2017 **required** `string`: Additional detail about the type of Management Practice used for an amount of Biosolids or Sewage Sludge.
  * BioMgmtPrctceTypes **required** `string`: The type of biosolids or sewage sludge management practice (e.g., land application, surface disposal, incineration) used by the facility.
  * BioMgmtPrctceTypes2016 **required** `string`: The type of biosolids or sewage sludge management practice (e.g., land application, surface disposal, incineration) used by the facility.
  * BioMgmtPrctceTypes2017 **required** `string`: The type of biosolids or sewage sludge management practice (e.g., land application, surface disposal, incineration) used by the facility.
  * BioMgmtVectors **required** `string`: Identifies the option used by the facility for vector attraction reduction.
  * BioMgmtVectors2016 **required** `string`: Identifies the option used by the facility for vector attraction reduction.
  * BioMgmtVectors2017 **required** `string`: Identifies the option used by the facility for vector attraction reduction.
  * BioOtherManagementSum **required** `string`: The amount (dry metric tons) of biosolids managed using methods not previously described.
  * BioOtherManagementSum2016 **required** `string`: The amount (dry metric tons) of biosolids managed using methods not previously described.
  * BioOtherManagementSum2017 **required** `string`: The amount (dry metric tons) of biosolids managed using methods not previously described.
  * BioOtherMgmtPrctcTxts **required** `string`: Free text additional description of "other" Biosolids Management Practices.
  * BioOtherMgmtPrctcTxts2016 **required** `string`: Free text additional description of "other" Biosolids Management Practices.
  * BioOtherMgmtPrctcTxts2017 **required** `string`: Free text additional description of "other" Biosolids Management Practices.
  * BioQtrsWithVio **required** `string`: Count of the number of quarters, out of the last twelve quarters, in which the permit or site is considered with violations for biosolids.
  * BioReportDate **required** `string`: The date the report was received by EPA.
  * BioReportDate2016 **required** `string`: The date the report was received by EPA.
  * BioReportDate2017 **required** `string`: The date the report was received by EPA.
  * BioReportYear **required** `string`: The calendar year corresponding to the Annual Biosolids Report.
  * BioReportYears **required** `string`: Reporting years are determined by the year of the reporting period end date. Data reflect the last two reporting years.
  * BioReportingObligations **required** `string`: Indicates the reporting obligation reason.
  * BioReportingObligations2016 **required** `string`: Indicates the reporting obligation reason.
  * BioReportingObligations2017 **required** `string`: Indicates the reporting obligation reason.
  * BioSurfaceDispSum **required** `string`: The amount of surface disposal in dry metric tons (DMT).
  * BioSurfaceDispSum2016 **required** `string`: The amount of surface disposal in dry metric tons (DMT).
  * BioSurfaceDispSum2017 **required** `string`: The amount of surface disposal in dry metric tons (DMT).
  * BioTotalVolumeAmt **required** `string`: The amount (in dry metric tons) of biosolids or sewage sludge generated at the facility.
  * BioTotalVolumeAmt2016 **required** `string`: The amount (in dry metric tons) of biosolids or sewage sludge generated at the facility.
  * BioTotalVolumeAmt2017 **required** `string`: The amount (in dry metric tons) of biosolids or sewage sludge generated at the facility.
  * BioTrmntPrcssCmntTxts2016 **required** `string`: Free text additional description of "other" biotreatment processes.
  * BioTrmntPrcssCmntTxts2017 **required** `string`: Free text additional description of "other" biotreatment processes.
  * BioTrtmntPrcssCmmntTxts **required** `string`: Free text additional description of "other" biotreatment processes.
  * BioTrtmntProcesses **required** `string`: Identifies the biosolids or sewage sludge treatment process or processes at the facility.
  * BioTrtmntProcesses2016 **required** `string`: Identifies the biosolids or sewage sludge treatment process or processes at the facility.
  * BioTrtmntProcesses2017 **required** `string`: Identifies the biosolids or sewage sludge treatment process or processes at the facility.
  * BioVioLastYear **required** `string`: A flag (values of 1 for Yes, 0 for No) that a Bisolids Violation occurred in the last 4 quarters.
  * BioVioLastYearFlag **required** `string`: Y if the facility has a biosolids single event violation under the Clean Water Act in the last year. Note: Violations reported on the 2016 and 2017 Biosolids Annual Report are not updated with the weekly data refresh and may not be representative of a facility's recently submitted or updated report.�
  * BioVioStatus **required** `string`: A value of 1 indicates if the Biosolids facility currently has an unresolved biosolids related Single Event Violation.
  * BioViolFlag **required** `string`: Displays "Yes" if the facility is in violation for biosolids under the Clean Water Act, in the last three years.
  * BiosolidsFlag **required** `string`: A Yes/No field to indicate permits with biosolids management and compliance information.
  * CWP13qtrsComplHistory **required** `string`: The facility's 3-year or 13-quarter compliance status history by quarter (3-month period). Each character represents a quarter of compliance, going from oldest to most recent. Character values correspond to the following compliance statuses:
  * CWPActualAverageFlowNmbr **required** `string`: The actual amount of the facility's wastewater flow measured in million gallons per day (MGD).
  * CWPBioFeaCount **required** `string`: The count of Biosolids related Formal Enforcement Actions that have been taken against the Facility.
  * CWPBioIeaCount **required** `string`: The count of Biosolids related Informal Enforcement Actions that have been taken against the Facility.
  * CWPBioInspCount **required** `string`: The count of Biosolids related Inspections that have occured for the facility.
  * CWPBioPenalties **required** `string`: The total amount of Biosolids related penalties that have been assessed against the facility.
  * CWPCaseIDs **required** `string`: Indicates the ICIS Case Number, a unique number identifying the civil enforcement action.
  * CWPCity **required** `string`: City in which the facility is located.
  * CWPComplianceTracking **required** `string`: Extent to which data is being entered and effluent exceedances are being identified (Off, On, Partial).
  * CWPCounty **required** `string`: County in which the facility is located.
  * CWPCsoFlag **required** `string`: The discharge from a Combined Sewer System at a point prior to the treatment plant. CSOs are point sources subject to NPDES permit requirements including both technology-based and water quality-based requirements of the Clean Water Act.
  * CWPCsoOutfalls **required** `string`: The number of discharge outfalls at points prior to the treatment plant.
  * CWPDateLastBioFea **required** `string`: Indicates the effective date of the most recent listed biosolids formal enforcement action taken against the facility within the last five years.
  * CWPDateLastBioFeaEPA **required** `string`: Indicates the effective date of the most recent listed formal enforcement action taken against the facility by EPA within the last five years.
  * CWPDateLastBioFeaSt **required** `string`: Indicates the effective date of the most recent listed formal enforcement action taken against the facility by a state environmental agency within the last five years.
  * CWPDateLastBioIea **required** `string`: Indicates the effective date of the most recent listed biosolids informal enforcement action taken against the facility within the last five years.
  * CWPDateLastBioIeaEPA **required** `string`: Indicates the effective date of the most recent listed biosolids informal enforcement action taken against the facility by EPA within the last five years.
  * CWPDateLastBioIeaSt **required** `string`: Indicates the effective date of the most recent listed biosolids informal enforcement action taken against the facility by a state environmental agency within the last five years.
  * CWPDateLastBioInsp **required** `string`: The date on which the most recent biosolids program inspection of the facility took place.
  * CWPDateLastBioInspEPA **required** `string`: Indicate the last inspection date by EPA
  * CWPDateLastBioInspSt **required** `string`: Indicate the last inspection date by state environmental agency
  * CWPDateLastBioPenalty **required** `string`: Indicates the date on which the most recent assessed (or final) biosolids penalty was taken against the facility within the last five years. This measure only includes penalties that have been entered in the program database ICIS-NPDES.
  * CWPDateLastFea **required** `string`: Indicates the effective date of the most recent listed formal enforcement action taken against the facility.
  * CWPDateLastFeaEPA **required** `string`: Indicates the effective date of the most recent listed formal enforcement action taken against the facility by EPA.
  * CWPDateLastFeaSt **required** `string`: Indicates the effective date of the most recent listed formal enforcement action taken against the facility by a state environmental agency.
  * CWPDateLastIeaEPA **required** `string`: Indicates the effective date of the most recent listed informal enforcement action taken against the facility by EPA.
  * CWPDateLastIeaSt **required** `string`: Indicates the effective date of the most recent listed informal enforcement action taken against the facility by a state environmental agency.
  * CWPDateLastInformalEa **required** `string`: Indicates the effective date of the most recent listed informal enforcement action taken against the facility.
  * CWPDateLastInspEPA **required** `string`: Indicates the effective date of the most recent inspection taken against the facility.
  * CWPDateLastInspSt **required** `string`: Indicates the effective date of the most recent inspection taken against the facility by a state environmental agency.
  * CWPDateLastInspection **required** `string`: The date on which the most recent inspection of the facility took place. For the CAA, the date on which a Full Compliance Evaluation (FCE) was completed.
  * CWPDateLastPenalty **required** `string`: Indicates date of most recent penalty against the facility.
  * CWPDaysLastBioInsp **required** `string`: Indicates the number of days since the most recent Biosolids related inspection of the facility.
  * CWPDaysLastInspection **required** `string`: Indicates the number of days since the most recent inspection of the facility.
  * CWPE90Cnt **required** `string`: Displays the number of instances where effluent limits have been exceeded in the past 3 years (E90 compliance code), based on monthly Discharge Monitoring Reports (DMRs) submitted by facilities.
  * CWPEPARegion **required** `string`: The EPA region where the facility is located. EPA has 10 regional offices that execute programs within several states and territories.
  * CWPEffectiveDate **required** `string`: Date (MM/DD/YYYY) that the permit became effective.
  * CWPExpirationDate **required** `string`: Date that the permit expires.
  * CWPFIPSCode **required** `string`: A 5 digit combination of the 2 digit Federal Information Processing Standards (FIPS) code for the state and the 3 digit FIPS code of the county that a facility is located in.
  * CWPFacilityTypeCode **required** `string`
  * CWPFacilityTypeIndicator **required** `string`: Each National Pollutant Discharge Elimination System (NPDES) permit is defined by the program office as a Major or non-major discharger. This field also indicates the permit type.
  * CWPFormalEaCnt **required** `string`: Indicates the total number of enforcement actions taken against the facility within the last five years. "NA" indicates that this measure is not applicable for facilities with no associated CAA, CWA, or RCRA permits.
  * CWPImpWaterFlg **required** `string`: Displays "Y" if the permitted facility discharges directly into category 4 or 5 impaired waters, as designated under section 303(d) of the Clean Water Act.
  * CWPIndianCntryFlg **required** `string`: Displays "Y" if a facility is located in Indian country.
  * CWPInformalEnfActCount **required** `string`: Indicates the total number of informal enforcement actions/notices of violations (NOVs) taken against the facility within the last five years.
  * CWPInspectionCount **required** `string`: The number of inspections/compliance evaluations, under the corresponding statute, occurring at the facility within the last five years.
  * CWPIssueDate **required** `string`: Date (MM/DD/YYYY) that the permit was issued.
  * CWPMajorMinorStatusFlag **required** `string`: Facilities marked "M" for major refers to CWA major permittees.
  * CWPNAICSCodes **required** `string`: Indicates the facility's or permit's primary North American Industry Classification System (NAICS) Code.
  * CWPName **required** `string`: Facility or permit holder name, as maintained in ICIS-NPDES.
  * CWPPermitStatusCode **required** `string`: The code associated with the facility's NPDES permit status.
  * CWPPermitStatusDesc **required** `string`: The current stage/status in the NPDES permit life cycle.
  * CWPPermitTypeCode **required** `string`: The code associated with the facility's NPDES permit classification.
  * CWPPermitTypeDesc **required** `string`: NPDES facility permit classification:
  * CWPQtrsWithNC **required** `string`: Count of the number of quarters, out of the last twelve quarters, in which the permit or site is considered either with violations, in noncompliance (NC) status, or in Significant Noncompliance (SNC), as described above under Compliance Status.
  * CWPQtrsWithSNC **required** `string`: Count of the number of quarters, out of the last twelve quarters, in which the permit is considered in Significant Noncompliance (SNC), as described above under Compliance Status.
  * CWPSICCodes **required** `string`: Indicates the facility's or permit's primary Standard Industrial Classification (SIC) Code.
  * CWPSNCEventDesc **required** `string`: Describes the event that resulted in the facility's status of Significant Noncompliance.
  * CWPSNCStatus **required** `string`: Indicates when a major source is in significant noncompliance (SNC) or a non-major source has a Category I violation.
  * CWPSNCStatusDate **required** `string`: The status date of the facility's Significant Noncompliance designation.
  * CWPState **required** `string`: Facility location - two-digit state abbreviation.
  * CWPStateDistrict **required** `string`: The State Congressional District the facility is located within.
  * CWPStateWaterBodyCode **required** `string`: Code from the Assessment TMDL Tracking & Implementation System (ATTAINS) database, assigned by the US Geological Survey, used to classify watersheds in the United States and the Caribbean. The code consists of twelve digits which correspond to six levels of classification:
  * CWPStateWaterBodyName **required** `string`: The name of the watershed from the ATTAINS database in which the facility resides.
  * CWPStatus **required** `string`: An indication of the facility's current compliance status under the Clean Water Act:
  * CWPStreet **required** `string`: Facility street address
  * CWPTRIbalLandCode **required** `string`: From ICIS, the unique identifier for every unit of land within Indian Country.
  * CWPTerminationDate **required** `string`: Date (MM/DD/YYYY) that the permit was terminated.
  * CWPTotalDesignFlowNmbr **required** `string`: The amount of wastewater flow in million gallons per day (MGD) that the facility is designed for.
  * CWPTotalPenalties **required** `string`: The total penalty value incurred over 5 years.
  * CWPVersionNmbr **required** `string`: The version number of the facility's NPDES permit.
  * CWPVioStatus **required** `string`: The current Reportable Non Compliance value for the facility.
  * CWPViolStatus **required** `string`: Indicates if the facility is currently in any violation under the Clean Water Act, either in Noncompliance or Significant Noncompliance.
  * CWPZip **required** `string`: Facility ZIP code
  * CalculatedAccuracyMeters **required** `string`: The estimated accuracy in Meters for the facility's geospatial coordinate.
  * CensusBlockGroup **required** `string`: A geographic unit used by the United States Census Bureau, generally defined to contain between 600 and 3,000 people.
  * CertifiedDate **required** `string`: The issue date or effective date of the permit.
  * ChesapeakeBayFlag **required** `string`: Displays "Y" if the facility is located within the Chesapeake Bay watershed.
  * CollectionMethod **required** `string`: ??
  * ControlMeasure **required** `string`: Description of control measures employed to comply with the non-numeric technology-based effluent limits required in Part 2.1.2 and Part 8.
  * ControlMeasureSchedule **required** `string`: Description of schedule for control measures associated with good housekeeping and maintenance.
  * CurrSvFlag **required** `string`: Indicates if the facility has a current significant violation. 1 = Yes
  * CurrVioFlag **required** `string`: Indicates if the facility has a current violation. 1 = Yes
  * DMRImpairedPoll **required** `string`: The pollutants with limits or monitoring requirements in a facility's NPDES permit with the potential to contribute to impairment of local waterbodies
  * DMRPounds **required** `string`: Total pounds of pollutants discharged by the NPDES ID for the most recent complete calendar year.
  * DMRTwpe **required** `string`: Total toxic-weighted pounds equivalent (TWPE) discharged by the NPDES ID for the most recent complete calendar year. TWPE is the mass of a pollutant or chemical discharged that accounts for its relative toxicity.
  * DschToMs4 **required** `string`: Indicates�if a facility discharges into a Municipal Separate Storm Sewer System (MS4).
  * E90Exceeds1yr **required** `string`: The number of E90 Exceedences in the last year.
  * E90Exceeds2yr **required** `string`: The number of E90 Exceedences in the last 2 years.
  * E90Exceeds3yr **required** `string`: The number of E90 Exceedences in the last 3 years.
  * E90Exceeds4yr **required** `string`: The number of E90 Exceedences in the last 4 years.
  * E90Exceeds5yr **required** `string`: The number of E90 Exceedences in the last 5 years.
  * E90Pollutants1yr **required** `string`: The pollutants for the E90 Exceedences in the last year.
  * E90Pollutants2yr **required** `string`: The pollutants for the E90 Exceedences in the last 2 years.
  * E90Pollutants3yr **required** `string`: The pollutants for the E90 Exceedences in the last 3 years.
  * E90Pollutants4yr **required** `string`: The pollutants for the E90 Exceedences in the last 4 years.
  * E90Pollutants5yr **required** `string`: The pollutants for the E90 Exceedences in the last 5 years.
  * EPASystem **required** `string`: The EPA data system in which permit and facility records are kept. EPA's Facility Registry System (FRS) links all program database records (such as permit IDs and IDs facilities use in reporting to EPA) together. The following list describes the individual data systems that are linked to from the detailed facility report: 
  * Ea5yrFlag **required** `string`: Indicates if the facility has a formal enforcement action within the last 5 years. 1 = Yes
  * EffChartsFlag **required** `string`
  * EffExceeds **required** `string`: The number of E90 Effluent Violations in the last 3 years.
  * EjscreenFlag **required** `string`: A Y/N indicator identifying whether or not the facility is within an Environmental Justice area.
  * EjscreenFlagUs **required** `string`: A Y/N indicator identifying whether or not the facility is within an Environmental Justice area.
  * ElectrRptWaiverEffDate **required** `string`: This is the effective date for a  waiver from electronic reporting in compliance with this part. This data element should always be populated for a waiver.
  * ElectrRptWaiverExpDate **required** `string`: This is the expiration date for a temporary waiver from electronic reporting in compliance with this part. This data element should be left blank if the permittee has a permanent waiver from electronic reporting or if the permittee does not have a waiver from electronic reporting in compliance with this part.
  * ElectrRptWaiverTypeCode **required** `string`: The unique code that identifies whether the authorized NPDES program has granted the permittee a waiver from electronic reporting in compliance with this part (e.g,  temporary waiver, permanent waiver). This data element should be left blank if the permittee does not have a waiver from electronic reporting in compliance with this part.
  * ElectrRptWaiverTypeDesc **required** `string`: Description of the unique code that identifies whether the authorized NPDES program has granted the permittee a waiver from electronic reporting in compliance with this part (e.g,  temporary waiver, permanent waiver). This data element should be left blank if the permittee does not have a waiver from electronic reporting in compliance with this part.
  * ElectrSubmissionTypeCode **required** `string`: This is the code indicating the means by which the data were submitted electronically.
  * ElectrSubmissionTypeDesc **required** `string`: This is the description of the code indicating the means by which the data were submitted electronically.
  * ExposedActivity **required** `string`: Description of onsite industrial activities exposed to stormwater and potential spill and leak areas.
  * FacCountyName **required** `string`: The facility county name from EPA's Facility Registry System
  * FacDerivedHuc **required** `string`: The 8-digit Hydrologic Unit Code (HUC) of the watershed in which the facility resides. A HUC number is assigned to every watershed in the nation and uniquely identifies the watershed.
  * FacDerivedTRIbes **required** `string`: The tribes or tribal territories located within 25 miles of the facility's location.
  * FacDerivedWBD **required** `string`: The Hydrologic Unit Code (HUC-12) of the waterbody in which the facility resides, derived based on location data in FRS.
  * FacDerivedWBDHu8 **required** `string`: Spatially derived HUC based on the facility's geographic coordinates in FRS.
  * FacDerivedWBDHu8Name **required** `string`: The name of the hydrologic unit in which the facility is located within, derived spatially based on the facility's geographic coordinates in FRS.
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
  * FacPopDen **required** `string`: The number of persons per square mile in the area being profiled. This field is the ratio of total persons (displayed in the Total Persons field) to total land area (displayed in the Land Area field).
  * FacStdCountyName **required** `string`: The standardized  facility county name from EPA's Facility Registry System
  * FacTRIPotwTrans **required** `string`: POTW transfer information from the Toxics Release Inventory (TRI) represents the amount of toxic chemicals transferred to a Publicly Operated Treatment Works (POTW), in pounds, for the most recent reporting year.
  * FacTRIReporter **required** `string`: Indicates whether facility reported to the Toxics Release Inventory (TRI) for the most recent reporting year.
  * FacTRISwRel **required** `string`: Chemical surface water release information from the Toxics Release Inventory (TRI) represents the total chemical releases discharged to surface water, in pounds, for the most recent reporting year.
  * FacUsMexBorderFlg **required** `string`: A Y/N flag indicating that the facility is within 100KM of the US-Mexico Border.
  * HistoricCriterionCode **required** `string`: Indicates the eligibility criteria for historic properties preservation.
  * IndswFlag **required** `string`: A value of Y indicates an Industrial Stormwater Permit.
  * Infea5yrFlag **required** `string`: Indicates if the facility has an informal enforcement action within the last 5 years. 1 = Yes.
  * Insp5yrFlag **required** `string`: Indicates if the facility has an inspection within the last 5 years. 1 = Yes
  * InspDef5yrCnt **required** `string`
  * IssuingAgency **required** `string`: This is the name of the organization issuing or granting a permit.
  * LastDMRValueRcvdDate **required** `string`: The latest date that a Discharge Monitoring Report was received by the State or EPA.
  * LimPollutant **required** `string`: The list of pollutants with enforceable (i.e., numeric limits or monitoring only) and/or benchmark limits in the current version of a NPDES permit.
  * Lower48 **required** `string`: Flag showing Y/N whether location is within the contiguous (lower 48) United States.
  * Map **required** `string`: No Longer Used.
  * MasterExternalPermitNmbr **required** `string`: This is the unique identifier for the Master General Permit for a General Permit Covered Facility.
  * MaxPctileUs **required** `string`: The maximum percentile from all individual EJSCREEN indicators.
  * MaxScore `string`: A sorting score for internal use.
  * MissDMRQtrs **required** `string`: Count of the number of quarters, out of the last twelve quarters, in which EPA's data system was not able to determine the facility-level compliance status.
  * MsgpCorrectiveActionSmmry **required** `string`: Summary of the corrective action documentation (part 4.3 of the permit) during the MSGP annual report year.
  * MsgpFacilityInspctnSmmry **required** `string`: Summary of the quarterly facility inspection documentation (part 3.1 of the permit) during the MSGP annual report year.
  * MsgpLastReportYear **required** `string`: The calendar year of the latest MSGP annual report submitted by the permitted facility.
  * MsgpNoFurtherRdctnRtnle **required** `string`: Description of rationale for why no further reductions are achievable (part 6.2.1.2 of the permit) during the MSGP annual report year.
  * MsgpPermitType **required** `string`: The Industrial stormwater permit type.
  * MsgpVisualAssessmentSmmry **required** `string`: Summary of the quarterly visual assessment documentation (part 3.3 of the permit) during the MSGP annual report year.
  * NPDESDataGroups **required** `string`: This is the code indicating the NPDES eReporting Rule Data Group that applies to the data.
  * NPDESDataGroupsDescs **required** `string`: Description for each NPDES Data Group eReporting rule code related to the current NPDES permit.
  * NPDESIDs **required** `string`: Clean Water Act ID from the ICIS-NPDES (Integrated Compliance Information System - National Pollutant Discharge Elimination System)
  * OtherPermitIDs **required** `string`
  * Over80CountUs **required** `string`: The number of primary EJSCREEN environmental justice (EJ) indexes exceeding the 80th or higher national percentile for the Census block group that the facility is located in.
  * PastCalYrAverageFlow **required** `string`: The past calendar year average flow in Million Gallons a Day (MGD).
  * PastCalYrConvPolOvrLmt **required** `string`: Total load over limit of conventional pollutant pounds equivalent discharged by the NPDES ID for the most recent complete calendar year.
  * PastCalYrConvPollutants **required** `string`: Total pounds of conventional pollutants discharged by the NPDES ID for the most recent complete calendar year.
  * PastCalYrToxicPolOvrLmt **required** `string`: Total load over limit of toxic-weighted pounds equivalent (TWPE) discharged by the NPDES ID for the most recent complete calendar year.
  * PastCalYrToxicPollutants **required** `string`: The toxic pollutants discharged by the NPDES facility for the most recent complete calendar year.
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
  * PermitComponents **required** `string`: Indicates the permit component(s) associated with the NPDES Permit Program Area.
  * PermitName **required** `string`
  * PermittingAgency **required** `string`: This is the type of organization issuing or granting a permit.
  * PollWithViolation **required** `string`: The names of pollutants with effluent exceedances (i.e., violation code E90) in the past three years in ICIS-NPDES.
  * RCRAIDs **required** `string`: A unique 12-character ID assigned for each record/permit/site/facility within the RCRAInfo database.
  * RadGnisName **required** `string`: The name of the waterbody from the Geographic Names Information System (GNIS) database in which the facility is permitted to discharge directly.
  * RadHu12Name **required** `string`: The name of the waterbody in which the facility is permitted to discharge directly (from the Reach Address Database, RAD).
  * RadReachcode **required** `string`: A nationally unique and permanent identifier for the waterbody, assigned by the US Geological Survey.
  * RadWBDHu8 **required** `string`: Hydrologic Unit Code (HUC) from the Reach Address Database (RAD), which is derived from the USGS Watershed Boundary Dataset.
  * RadWBDHu8Name **required** `string`: The name of the hydrologic unit in which the facility may discharge, from the Reach Address Database (RAD) and derived from the USGS Watershed Boundary Dataset.
  * RadWBDHuc12 **required** `string`: Code from the Reach Address Database (RAD), assigned by the US Geological Survey, used to classify watersheds in the United States and the Caribbean. The code consists of twelve digits which correspond to six levels of classification:
  * ReceivingMs4Name **required** `string`: This is the name of the receiving MS4(s).
  * ReferencePoint **required** `string`: ??
  * RegistryID **required** `string`: An internal 12-digit Facility Registry Service (FRS) tracking number used to tie all facility data together in EPA regulatory program databases.
  * RmpIDs **required** `string`: A unique ID assigned to each facility submitting a Risk Management Plan to EPA under the Risk Management Plan Rule.
  * SDWAIDs **required** `string`: A unique 9-character ID assigned for each public water system within the Safe Drinking Water Information System (SDWIS).
  * Score **required** `string`
  * Sector **required** `string`: The sector code and description for the industrial stormwater facility.
  * SourceID **required** `string`: Unique Identifier assigned by EPA.
  * SpeciesCriticalHabitalFlag **required** `string`: This identifies if Endangered Species Act (ESA) provisions are met.
  * StateAuthBiosolids **required** `string`: Indicates whether the state/tribe/territory code (first 2 digits of the NPDES_ID/SOURCE_ID) is authorized for Biosolids.
  * StateAuthFedfac **required** `string`: Indicates whether the state/tribe/territory code (first 2 digits of the NPDES_ID/SOURCE_ID) is authorized to regulate Federally owned facilities.
  * StateAuthGen **required** `string`: Indicates whether the state/tribe/territory code (first 2 digits of the NPDES_ID/SOURCE_ID) is authorized for General NPDES Facilities.
  * StateAuthNPDES **required** `string`: Indicates whether the state/tribe/territory code (first 2 digits of the NPDES_ID/SOURCE_ID) is authorized for NPDES Facilities.
  * StateAuthPretreat **required** `string`: Indicates whether the state/tribe/territory code (first 2 digits of the NPDES_ID/SOURCE_ID) is authorized for Pretreatment Facilities.
  * Statute **required** `string`: The name of the statute associated with each of the permits and identifiers linked to the facility: 
  * StormWaterArea **required** `string`: The estimated area of industrial activity at the site exposed to stormwater in acres.
  * SubmittedDate **required** `string`: Date that the permit was submitted to the issuing agency.
  * Subsector **required** `string`: The industrial subsector associated with the facility.
  * SwpppUrl **required** `string`: Web address URL of Internet page where current copy of Stormwater Pollution Prevention Plan (SWPPP) is maintained.
  * TRIIDs **required** `string`: A unique 15-character ID assigned for each facility within the Toxics Release Inventory (TRI) program. The format is ZZZZZNNNNNSSSSS, where ZZZZZ = ZIP code, NNNNN = the first 5 consonants of the name, and SSSSS = the first 5 non-blank non-special characters in the street address.
  * TRIbalFlag **required** `string`: A flag indicating that the facility is within a tribal area.
  * TypeOfMonitoring **required** `string`: The type of monitoring specified in the SWPPP.
  * TypeOfWater **required** `string`: The type of water body receiving discharges stormwater discharges specified in the SWPPP.
  * VioLastYear **required** `string`: A flag (values of 1 for Yes, 0 for No) that a Water Program Violation occurred in the last 4 quarters.
  * ViolFlag **required** `string`: Indicates if the facility had a violation within the last 3 years. 1 = Yes
  * WebDocs **required** `string`: Contains flags that identify what web accessible documents are available for the facility.

### cwa02
* cwa02 `object`: Map Data Object
  * CWAstatus **required** `string`: Quarterly compliance status for the most recent 13 quarters. Each letter indicates the compliance status for the corresponding quarter.
  * FormalCount **required** `string`: The number of formal enforcement actions that have been taken against the facility
  * ICON **required** `string`: Name of each individual icon file within the URL base
  * InformalCount **required** `string`: The number of informal enforcement actions that have been taken against the facility
  * LAT **required** `string`: The latitude of the facility in degrees, to four decimal places
  * LON **required** `string`: The longitude of the facility in degrees, to four decimal places
  * LastInsp **required** `string`: The unique identifier for the last inspection
  * NAME **required** `string`: For DFR, this is the Facility name. The name corresponds to the TYPE value
  * PUV **required** `string`: Pop up value. Combine with PopUpBaseURL to give the popup for the facility
  * TYPE **required** `string`: For DFR, this is always facility

### cwa03
* cwa03 `object`: Map Output Object
  * IconBaseURL **required** `string`: URL where all the icons are located
  * MapData **required** `array`: An array of facility geospatial information.
    * items [cwa02](#cwa02)
  * PopUpBaseURL **required** `string`: Combine this URL with the PUC to get popup info
  * QueryID **required** `string`: Sequential number assigned to entire search result

### cwa04
* cwa04 `object`: Results Object
  * BadSystemIDs **required** `string`: Identifies which passed query system identifiers are invalid.
  * BioCVRows **required** `string`: Number of facilities with current biosolid-related violations.
  * BioV3Rows **required** `string`: Number of facilities having one or more quarters of biosolid-related non-compliance in the last three years.
  * CVRows **required** `string`: Summary count of the number of CWA facilities or SDWA public drinking water systems with current violations.
  * FEARows **required** `string`: Summary count of the number of facilities with a formal enforcement action in the past five years
  * Facilities `array`: A complex array of facility information.
    * items [cwa01](#cwa01)
  * INSPRows **required** `string`: Number of facilities with insp_5yr_flag populated (CWP_DATE_LAST_INSPECTION)
  * IndianCountryRows **required** `string`: Number of facilities with tribal_flag populated
  * InfFEARows **required** `string`: Number of facilities with infea_5yr_flag populated (INFORMAL_ENF_ACT_COUNT > 0)
  * MapOutput [cwa03](#cwa03)
  * Message **required** `string`: Field to record messages (typically performance-related) about packet processing
  * PageNo **required** `string`: The number of pages of results returned
  * QueryID **required** `string`: Sequential number assigned to entire search result
  * QueryRows **required** `string`: Number of query results returned
  * SVRows **required** `string`: Number of facilities with curr_sv_flag populated (CWP_STATUS = "Significant Violation")
  * TotalPenalties **required** `string`: The total dollar amount of either assessed or final penalties within the five year time period
  * V3Rows **required** `string`: Number of facilities having one or more quarters in non-compliance (QNC) in the last three years
  * Version **required** `string`: Version of the SDWA system service
  * VioLast4QRows **required** `string`: The number of facilities with a violation in the last year.

### cwa05
* cwa05 `object`: Cluster Data Object
  * BioCVRows **required** `string`: Number of facilities with current biosolid-related violations.
  * BioV3Rows **required** `string`: Number of facilities having one or more quarters of biosolid-related non-compliance in the last three years.
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
  * VioLast4QRows **required** `string`: The number of facilities with a violation in the last year.

### cwa06
* cwa06 `object`: Cluster Output Object
  * ClusterData **required** `array`: An array of state, county, or zip code cluster information
    * items [cwa05](#cwa05)

### cwa07
* cwa07 `object`: Facilities Object
  * AIRIDs **required** `string`: Air Facility System (AFS) ID.
  * ActiveLower48 **required** `string`: A Y/N indicator indicating that the facility is active and located within the lower 48 contiguous US States.
  * AlrExceedences **required** `string`
  * AssociatedPollutant **required** `string`: Description of pollutant(s) or pollutant constituent(s) associated with each industrial activity exposed to stormwater.
  * AttainsAquaticLifeUseFlg **required** `string`: Displays "Y" if the waterbody in which the facility resides is designated for aquatic life use. The data are from the ATTAINS database.
  * AttainsAuCategory **required** `string`: The impairment class or category of the waterbody in which the facility is permitted to discharge directly. The data are from the ATTAINS database:
  * AttainsCauseGroups **required** `string`: Lists all groups of pollutants or stressors that are causing impairment in the assessed waterbody. The data are from the ATTAINS database.
  * AttainsCycleYear **required** `string`: The year in which the most recent state assessment occurred for the waterbody. The data are from the ATTAINS database.
  * AttainsExceptnlUseFlg **required** `string`: Displays "Y" if the waterbody in which the facility resides is designated for exceptional use. The data are from the ATTAINS database.
  * AttainsImpWaterFlg **required** `string`: Displays "Y" if the waterbody in which the facility resides is listed for impairment. The data are from the ATTAINS database.
  * AttainsPossibleNPDESParams **required** `string`: Lists all pollutants discharged by the facility that are potentially contributing to the impairment of local waterbodies.
  * AttainsRecreationUseFlg **required** `string`: Displays "Y" if the waterbody in which the facility resides is designated for recreational use. The data are from the ATTAINS database.
  * AttainsShellfishUseFlg **required** `string`: Displays "Y" if the waterbody in which the facility resides is designated for shellfish use. The data are from the ATTAINS database.
  * AttainsSource **required** `string`: The CWA Report in which the waterbody data can be found. The data are from the Assessment TMDL Tracking & Implementation System (ATTAINS) database.
  * AttainsStateCauses **required** `string`: Lists all pollutants or stressors that are causing impairment in the assessed waterbody. The data are from the ATTAINS database.
  * BeachCloseLast2yrsFlg **required** `string`: Displays "Y" if the facility is located on or near a waterbody with a beach closure within the last two years.
  * BeachCloseLastYearFlg **required** `string`: Displays "Y" if the facility is located on or near a waterbody with a beach closure within the last year.
  * BioAnalyMethodCatgrys **required** `string`: Displays the categories of the analytic methods used by the facility to analyze regulated parameters at the facility.
  * BioAnalyMethodCatgrys2016 **required** `string`: Displays the categories of the analytic methods used by the facility to analyze regulated parameters at the facility.
  * BioAnalyMethodCatgrys2017 **required** `string`: Displays the categories of the analytic methods used by the facility to analyze regulated parameters at the facility.
  * BioAnalyMethods **required** `string`: Displays the analytic methods used by the facility to analyze enteric viruses, fecal coliforms, helminth ova, Salmonella sp., and other regulated parameters as reported on the Biosolids Program Report.
  * BioAnalyMethods2016 **required** `string`: Displays the analytic methods used by the facility to analyze enteric viruses, fecal coliforms, helminth ova, Salmonella sp., and other regulated parameters as reported on the Biosolids Program Report.
  * BioAnalyMethods2017 **required** `string`: Displays the analytic methods used by the facility to analyze enteric viruses, fecal coliforms, helminth ova, Salmonella sp., and other regulated parameters as reported on the Biosolids Program Report.
  * BioCommentText **required** `string`: Free text allowing the user to provide comments on the annual program report.
  * BioCommentText2016 **required** `string`: Free text allowing the user to provide comments on the annual program report.
  * BioCommentText2017 **required** `string`: Free text allowing the user to provide comments on the annual program report.
  * BioIncinerationSum **required** `string`: The amount (dry metric tons) of biosolids incinerated.
  * BioIncinerationSum2016 **required** `string`: The amount (dry metric tons) of biosolids incinerated.
  * BioIncinerationSum2017 **required** `string`: The amount (dry metric tons) of biosolids incinerated.
  * BioLandApplicationSum **required** `string`: The amount (dry metric tons) of biosolids land applied.
  * BioLandApplicationSum2016 **required** `string`: The amount (dry metric tons) of biosolids land applied.
  * BioLandApplicationSum2017 **required** `string`: The amount (dry metric tons) of biosolids land applied.
  * BioMgmtContainers **required** `string`: Identifies the nature of each biosolids and sewage sludge material generated by the facility in terms of whether the material is a biosolid or sewage sludge and whether the material is ultimately conveyed off-site in bulk or in bags.
  * BioMgmtContainers2016 **required** `string`: Identifies the nature of each biosolids and sewage sludge material generated by the facility in terms of whether the material is a biosolid or sewage sludge and whether the material is ultimately conveyed off-site in bulk or in bags.
  * BioMgmtContainers2017 **required** `string`: Identifies the nature of each biosolids and sewage sludge material generated by the facility in terms of whether the material is a biosolid or sewage sludge and whether the material is ultimately conveyed off-site in bulk or in bags.
  * BioMgmtDefCategories **required** `string`: Indicates the program deficiency category to assist in reporting and displaying program deficiencies on web screens.
  * BioMgmtDefCategories2016 **required** `string`: Indicates the program deficiency category to assist in reporting and displaying program deficiencies on web screens.
  * BioMgmtDefCategories2017 **required** `string`: Indicates the program deficiency category to assist in reporting and displaying program deficiencies on web screens.
  * BioMgmtDefCurrentCnt **required** `string`: The number of times noncompliance reported by the facility in the last 3 years.
  * BioMgmtDefCurrentCnt2016 **required** `string`: The number of times noncompliance reported by the facility in the last 3 years.
  * BioMgmtDefCurrentCnt2017 **required** `string`: The number of times noncompliance reported by the facility in the last 3 years.
  * BioMgmtDeficiencies **required** `string`: Indicates the type of NPDES special regulatory program deficiency.
  * BioMgmtDeficiencies2016 **required** `string`: Indicates the type of NPDES special regulatory program deficiency.
  * BioMgmtDeficiencies2017 **required** `string`: Indicates the type of NPDES special regulatory program deficiency.
  * BioMgmtHandlers **required** `string`: Indicates the type of Biosolids or Sewage Sludge handlers/preparers, either owner/operator or off-site third-party handler/preparer.
  * BioMgmtHandlers2016 **required** `string`: Indicates the type of Biosolids or Sewage Sludge handlers/preparers, either owner/operator or off-site third-party handler/preparer.
  * BioMgmtHandlers2017 **required** `string`: Indicates the type of Biosolids or Sewage Sludge handlers/preparers, either owner/operator or off-site third-party handler/preparer.
  * BioMgmtPathogens **required** `string`: Identifies the pathogen class for biosolids or sewage sludge generated by the facility.
  * BioMgmtPathogens2016 **required** `string`: Identifies the pathogen class for biosolids or sewage sludge generated by the facility.
  * BioMgmtPathogens2017 **required** `string`: Identifies the pathogen class for biosolids or sewage sludge generated by the facility.
  * BioMgmtPathreds **required** `string`: Identifies the options used by the facility to control pathogens for a Biosolids Management Practice.
  * BioMgmtPathreds2016 **required** `string`: Identifies the options used by the facility to control pathogens for a Biosolids Management Practice.
  * BioMgmtPathreds2017 **required** `string`: Identifies the options used by the facility to control pathogens for a Biosolids Management Practice.
  * BioMgmtPrctceStypes **required** `string`: Additional detail about the type of Management Practice used for an amount of Biosolids or Sewage Sludge.
  * BioMgmtPrctceStypes2016 **required** `string`: Additional detail about the type of Management Practice used for an amount of Biosolids or Sewage Sludge.
  * BioMgmtPrctceStypes2017 **required** `string`: Additional detail about the type of Management Practice used for an amount of Biosolids or Sewage Sludge.
  * BioMgmtPrctceTypes **required** `string`: The type of biosolids or sewage sludge management practice (e.g., land application, surface disposal, incineration) used by the facility.
  * BioMgmtPrctceTypes2016 **required** `string`: The type of biosolids or sewage sludge management practice (e.g., land application, surface disposal, incineration) used by the facility.
  * BioMgmtPrctceTypes2017 **required** `string`: The type of biosolids or sewage sludge management practice (e.g., land application, surface disposal, incineration) used by the facility.
  * BioMgmtVectors **required** `string`: Identifies the option used by the facility for vector attraction reduction.
  * BioMgmtVectors2016 **required** `string`: Identifies the option used by the facility for vector attraction reduction.
  * BioMgmtVectors2017 **required** `string`: Identifies the option used by the facility for vector attraction reduction.
  * BioOtherManagementSum **required** `string`: The amount (dry metric tons) of biosolids managed using methods not previously described.
  * BioOtherManagementSum2016 **required** `string`: The amount (dry metric tons) of biosolids managed using methods not previously described.
  * BioOtherManagementSum2017 **required** `string`: The amount (dry metric tons) of biosolids managed using methods not previously described.
  * BioOtherMgmtPrctcTxts **required** `string`: Free text additional description of "other" Biosolids Management Practices.
  * BioOtherMgmtPrctcTxts2016 **required** `string`: Free text additional description of "other" Biosolids Management Practices.
  * BioOtherMgmtPrctcTxts2017 **required** `string`: Free text additional description of "other" Biosolids Management Practices.
  * BioQtrsWithVio **required** `string`: Count of the number of quarters, out of the last twelve quarters, in which the permit or site is considered with violations for biosolids.
  * BioReportDate **required** `string`: The date the report was received by EPA.
  * BioReportDate2016 **required** `string`: The date the report was received by EPA.
  * BioReportDate2017 **required** `string`: The date the report was received by EPA.
  * BioReportYear **required** `string`: The calendar year corresponding to the Annual Biosolids Report.
  * BioReportYears **required** `string`: Reporting years are determined by the year of the reporting period end date. Data reflect the last two reporting years.
  * BioReportingObligations **required** `string`: Indicates the reporting obligation reason.
  * BioReportingObligations2016 **required** `string`: Indicates the reporting obligation reason.
  * BioReportingObligations2017 **required** `string`: Indicates the reporting obligation reason.
  * BioSurfaceDispSum **required** `string`: The amount of surface disposal in dry metric tons (DMT).
  * BioSurfaceDispSum2016 **required** `string`: The amount of surface disposal in dry metric tons (DMT).
  * BioSurfaceDispSum2017 **required** `string`: The amount of surface disposal in dry metric tons (DMT).
  * BioTotalVolumeAmt **required** `string`: The amount (in dry metric tons) of biosolids or sewage sludge generated at the facility.
  * BioTotalVolumeAmt2016 **required** `string`: The amount (in dry metric tons) of biosolids or sewage sludge generated at the facility.
  * BioTotalVolumeAmt2017 **required** `string`: The amount (in dry metric tons) of biosolids or sewage sludge generated at the facility.
  * BioTrmntPrcssCmntTxts2016 **required** `string`: Free text additional description of "other" biotreatment processes.
  * BioTrmntPrcssCmntTxts2017 **required** `string`: Free text additional description of "other" biotreatment processes.
  * BioTrtmntPrcssCmmntTxts **required** `string`: Free text additional description of "other" biotreatment processes.
  * BioTrtmntProcesses **required** `string`: Identifies the biosolids or sewage sludge treatment process or processes at the facility.
  * BioTrtmntProcesses2016 **required** `string`: Identifies the biosolids or sewage sludge treatment process or processes at the facility.
  * BioTrtmntProcesses2017 **required** `string`: Identifies the biosolids or sewage sludge treatment process or processes at the facility.
  * BioVioLastYear **required** `string`: A flag (values of 1 for Yes, 0 for No) that a Bisolids Violation occurred in the last 4 quarters.
  * BioVioLastYearFlag **required** `string`: Y if the facility has a biosolids single event violation under the Clean Water Act in the last year. Note: Violations reported on the 2016 and 2017 Biosolids Annual Report are not updated with the weekly data refresh and may not be representative of a facility's recently submitted or updated report.�
  * BioVioStatus **required** `string`: A value of 1 indicates if the Biosolids facility currently has an unresolved biosolids related Single Event Violation.
  * BioViolFlag **required** `string`: Displays "Yes" if the facility is in violation for biosolids under the Clean Water Act, in the last three years.
  * BiosolidsFlag **required** `string`: A Yes/No field to indicate permits with biosolids management and compliance information.
  * CWP13qtrsComplHistory **required** `string`: The facility's 3-year or 13-quarter compliance status history by quarter (3-month period). Each character represents a quarter of compliance, going from oldest to most recent. Character values correspond to the following compliance statuses:
  * CWPActualAverageFlowNmbr **required** `string`: The actual amount of the facility's wastewater flow measured in million gallons per day (MGD).
  * CWPBioFeaCount **required** `string`: The count of Biosolids related Formal Enforcement Actions that have been taken against the Facility.
  * CWPBioIeaCount **required** `string`: The count of Biosolids related Informal Enforcement Actions that have been taken against the Facility.
  * CWPBioInspCount **required** `string`: The count of Biosolids related Inspections that have occured for the facility.
  * CWPBioPenalties **required** `string`: The total amount of Biosolids related penalties that have been assessed against the facility.
  * CWPCaseIDs **required** `string`: Indicates the ICIS Case Number, a unique number identifying the civil enforcement action.
  * CWPCity **required** `string`: City in which the facility is located.
  * CWPComplianceTracking **required** `string`: Extent to which data is being entered and effluent exceedances are being identified (Off, On, Partial).
  * CWPCounty **required** `string`: County in which the facility is located.
  * CWPCsoFlag **required** `string`: The discharge from a Combined Sewer System at a point prior to the treatment plant. CSOs are point sources subject to NPDES permit requirements including both technology-based and water quality-based requirements of the Clean Water Act.
  * CWPCsoOutfalls **required** `string`: The number of discharge outfalls at points prior to the treatment plant.
  * CWPDateLastBioFea **required** `string`: Indicates the effective date of the most recent listed biosolids formal enforcement action taken against the facility within the last five years.
  * CWPDateLastBioFeaEPA **required** `string`: Indicates the effective date of the most recent listed formal enforcement action taken against the facility by EPA within the last five years.
  * CWPDateLastBioFeaSt **required** `string`: Indicates the effective date of the most recent listed formal enforcement action taken against the facility by a state environmental agency within the last five years.
  * CWPDateLastBioIea **required** `string`: Indicates the effective date of the most recent listed biosolids informal enforcement action taken against the facility within the last five years.
  * CWPDateLastBioIeaEPA **required** `string`: Indicates the effective date of the most recent listed biosolids informal enforcement action taken against the facility by EPA within the last five years.
  * CWPDateLastBioIeaSt **required** `string`: Indicates the effective date of the most recent listed biosolids informal enforcement action taken against the facility by a state environmental agency within the last five years.
  * CWPDateLastBioInsp **required** `string`: The date on which the most recent biosolids program inspection of the facility took place.
  * CWPDateLastBioInspEPA **required** `string`: Indicate the last inspection date by EPA
  * CWPDateLastBioInspSt **required** `string`: Indicate the last inspection date by state environmental agency
  * CWPDateLastBioPenalty **required** `string`: Indicates the date on which the most recent assessed (or final) biosolids penalty was taken against the facility within the last five years. This measure only includes penalties that have been entered in the program database ICIS-NPDES.
  * CWPDateLastFea **required** `string`: Indicates the effective date of the most recent listed formal enforcement action taken against the facility.
  * CWPDateLastFeaEPA **required** `string`: Indicates the effective date of the most recent listed formal enforcement action taken against the facility by EPA.
  * CWPDateLastFeaSt **required** `string`: Indicates the effective date of the most recent listed formal enforcement action taken against the facility by a state environmental agency.
  * CWPDateLastIeaEPA **required** `string`: Indicates the effective date of the most recent listed informal enforcement action taken against the facility by EPA.
  * CWPDateLastIeaSt **required** `string`: Indicates the effective date of the most recent listed informal enforcement action taken against the facility by a state environmental agency.
  * CWPDateLastInformalEa **required** `string`: Indicates the effective date of the most recent listed informal enforcement action taken against the facility.
  * CWPDateLastInspEPA **required** `string`: Indicates the effective date of the most recent inspection taken against the facility.
  * CWPDateLastInspSt **required** `string`: Indicates the effective date of the most recent inspection taken against the facility by a state environmental agency.
  * CWPDateLastInspection **required** `string`: The date on which the most recent inspection of the facility took place. For the CAA, the date on which a Full Compliance Evaluation (FCE) was completed.
  * CWPDateLastPenalty **required** `string`: Indicates date of most recent penalty against the facility.
  * CWPDaysLastBioInsp **required** `string`: Indicates the number of days since the most recent Biosolids related inspection of the facility.
  * CWPDaysLastInspection **required** `string`: Indicates the number of days since the most recent inspection of the facility.
  * CWPE90Cnt **required** `string`: Displays the number of instances where effluent limits have been exceeded in the past 3 years (E90 compliance code), based on monthly Discharge Monitoring Reports (DMRs) submitted by facilities.
  * CWPEPARegion **required** `string`: The EPA region where the facility is located. EPA has 10 regional offices that execute programs within several states and territories.
  * CWPEffectiveDate **required** `string`: Date (MM/DD/YYYY) that the permit became effective.
  * CWPExpirationDate **required** `string`: Date that the permit expires.
  * CWPFIPSCode **required** `string`: A 5 digit combination of the 2 digit Federal Information Processing Standards (FIPS) code for the state and the 3 digit FIPS code of the county that a facility is located in.
  * CWPFacilityTypeCode **required** `string`
  * CWPFacilityTypeIndicator **required** `string`: Each National Pollutant Discharge Elimination System (NPDES) permit is defined by the program office as a Major or non-major discharger. This field also indicates the permit type.
  * CWPFormalEaCnt **required** `string`: Indicates the total number of enforcement actions taken against the facility within the last five years. "NA" indicates that this measure is not applicable for facilities with no associated CAA, CWA, or RCRA permits.
  * CWPImpWaterFlg **required** `string`: Displays "Y" if the permitted facility discharges directly into category 4 or 5 impaired waters, as designated under section 303(d) of the Clean Water Act.
  * CWPIndianCntryFlg **required** `string`: Displays "Y" if a facility is located in Indian country.
  * CWPInformalEnfActCount **required** `string`: Indicates the total number of informal enforcement actions/notices of violations (NOVs) taken against the facility within the last five years.
  * CWPInspectionCount **required** `string`: The number of inspections/compliance evaluations, under the corresponding statute, occurring at the facility within the last five years.
  * CWPIssueDate **required** `string`: Date (MM/DD/YYYY) that the permit was issued.
  * CWPMajorMinorStatusFlag **required** `string`: Facilities marked "M" for major refers to CWA major permittees.
  * CWPNAICSCodes **required** `string`: Indicates the facility's or permit's primary North American Industry Classification System (NAICS) Code.
  * CWPName **required** `string`: Facility or permit holder name, as maintained in ICIS-NPDES.
  * CWPPermitStatusCode **required** `string`: The code associated with the facility's NPDES permit status.
  * CWPPermitStatusDesc **required** `string`: The current stage/status in the NPDES permit life cycle.
  * CWPPermitTypeCode **required** `string`: The code associated with the facility's NPDES permit classification.
  * CWPPermitTypeDesc **required** `string`: NPDES facility permit classification:
  * CWPQtrsWithNC **required** `string`: Count of the number of quarters, out of the last twelve quarters, in which the permit or site is considered either with violations, in noncompliance (NC) status, or in Significant Noncompliance (SNC), as described above under Compliance Status.
  * CWPQtrsWithSNC **required** `string`: Count of the number of quarters, out of the last twelve quarters, in which the permit is considered in Significant Noncompliance (SNC), as described above under Compliance Status.
  * CWPSICCodes **required** `string`: Indicates the facility's or permit's primary Standard Industrial Classification (SIC) Code.
  * CWPSNCEventDesc **required** `string`: Describes the event that resulted in the facility's status of Significant Noncompliance.
  * CWPSNCStatus **required** `string`: Indicates when a major source is in significant noncompliance (SNC) or a non-major source has a Category I violation.
  * CWPSNCStatusDate **required** `string`: The status date of the facility's Significant Noncompliance designation.
  * CWPState **required** `string`: Facility location - two-digit state abbreviation.
  * CWPStateDistrict **required** `string`: The State Congressional District the facility is located within.
  * CWPStateWaterBodyCode **required** `string`: Code from the Assessment TMDL Tracking & Implementation System (ATTAINS) database, assigned by the US Geological Survey, used to classify watersheds in the United States and the Caribbean. The code consists of twelve digits which correspond to six levels of classification:
  * CWPStateWaterBodyName **required** `string`: The name of the watershed from the ATTAINS database in which the facility resides.
  * CWPStatus **required** `string`: An indication of the facility's current compliance status under the Clean Water Act:
  * CWPStreet **required** `string`: Facility street address
  * CWPTRIbalLandCode **required** `string`: From ICIS, the unique identifier for every unit of land within Indian Country.
  * CWPTerminationDate **required** `string`: Date (MM/DD/YYYY) that the permit was terminated.
  * CWPTotalDesignFlowNmbr **required** `string`: The amount of wastewater flow in million gallons per day (MGD) that the facility is designed for.
  * CWPTotalPenalties **required** `string`: The total penalty value incurred over 5 years.
  * CWPVersionNmbr **required** `string`: The version number of the facility's NPDES permit.
  * CWPVioStatus **required** `string`: The current Reportable Non Compliance value for the facility.
  * CWPViolStatus **required** `string`: Indicates if the facility is currently in any violation under the Clean Water Act, either in Noncompliance or Significant Noncompliance.
  * CWPZip **required** `string`: Facility ZIP code
  * CalculatedAccuracyMeters **required** `string`: The estimated accuracy in Meters for the facility's geospatial coordinate.
  * CensusBlockGroup **required** `string`: A geographic unit used by the United States Census Bureau, generally defined to contain between 600 and 3,000 people.
  * CertifiedDate **required** `string`: The issue date or effective date of the permit.
  * ChesapeakeBayFlag **required** `string`: Displays "Y" if the facility is located within the Chesapeake Bay watershed.
  * CollectionMethod **required** `string`: ??
  * ControlMeasure **required** `string`: Description of control measures employed to comply with the non-numeric technology-based effluent limits required in Part 2.1.2 and Part 8.
  * ControlMeasureSchedule **required** `string`: Description of schedule for control measures associated with good housekeeping and maintenance.
  * CurrSvFlag **required** `string`: Indicates if the facility has a current significant violation. 1 = Yes
  * CurrVioFlag **required** `string`: Indicates if the facility has a current violation. 1 = Yes
  * DMRImpairedPoll **required** `string`: The pollutants with limits or monitoring requirements in a facility's NPDES permit with the potential to contribute to impairment of local waterbodies
  * DMRPounds **required** `string`: Total pounds of pollutants discharged by the NPDES ID for the most recent complete calendar year.
  * DMRTwpe **required** `string`: Total toxic-weighted pounds equivalent (TWPE) discharged by the NPDES ID for the most recent complete calendar year. TWPE is the mass of a pollutant or chemical discharged that accounts for its relative toxicity.
  * DschToMs4 **required** `string`: Indicates�if a facility discharges into a Municipal Separate Storm Sewer System (MS4).
  * E90Exceeds1yr **required** `string`: The number of E90 Exceedences in the last year.
  * E90Exceeds2yr **required** `string`: The number of E90 Exceedences in the last 2 years.
  * E90Exceeds3yr **required** `string`: The number of E90 Exceedences in the last 3 years.
  * E90Exceeds4yr **required** `string`: The number of E90 Exceedences in the last 4 years.
  * E90Exceeds5yr **required** `string`: The number of E90 Exceedences in the last 5 years.
  * E90Pollutants1yr **required** `string`: The pollutants for the E90 Exceedences in the last year.
  * E90Pollutants2yr **required** `string`: The pollutants for the E90 Exceedences in the last 2 years.
  * E90Pollutants3yr **required** `string`: The pollutants for the E90 Exceedences in the last 3 years.
  * E90Pollutants4yr **required** `string`: The pollutants for the E90 Exceedences in the last 4 years.
  * E90Pollutants5yr **required** `string`: The pollutants for the E90 Exceedences in the last 5 years.
  * EPASystem **required** `string`: The EPA data system in which permit and facility records are kept. EPA's Facility Registry System (FRS) links all program database records (such as permit IDs and IDs facilities use in reporting to EPA) together. The following list describes the individual data systems that are linked to from the detailed facility report: 
  * Ea5yrFlag **required** `string`: Indicates if the facility has a formal enforcement action within the last 5 years. 1 = Yes
  * EffChartsFlag **required** `string`
  * EffExceeds **required** `string`: The number of E90 Effluent Violations in the last 3 years.
  * EjscreenFlag **required** `string`: A Y/N indicator identifying whether or not the facility is within an Environmental Justice area.
  * EjscreenFlagUs **required** `string`: A Y/N indicator identifying whether or not the facility is within an Environmental Justice area.
  * ElectrRptWaiverEffDate **required** `string`: This is the effective date for a  waiver from electronic reporting in compliance with this part. This data element should always be populated for a waiver.
  * ElectrRptWaiverExpDate **required** `string`: This is the expiration date for a temporary waiver from electronic reporting in compliance with this part. This data element should be left blank if the permittee has a permanent waiver from electronic reporting or if the permittee does not have a waiver from electronic reporting in compliance with this part.
  * ElectrRptWaiverTypeCode **required** `string`: The unique code that identifies whether the authorized NPDES program has granted the permittee a waiver from electronic reporting in compliance with this part (e.g,  temporary waiver, permanent waiver). This data element should be left blank if the permittee does not have a waiver from electronic reporting in compliance with this part.
  * ElectrRptWaiverTypeDesc **required** `string`: Description of the unique code that identifies whether the authorized NPDES program has granted the permittee a waiver from electronic reporting in compliance with this part (e.g,  temporary waiver, permanent waiver). This data element should be left blank if the permittee does not have a waiver from electronic reporting in compliance with this part.
  * ElectrSubmissionTypeCode **required** `string`: This is the code indicating the means by which the data were submitted electronically.
  * ElectrSubmissionTypeDesc **required** `string`: This is the description of the code indicating the means by which the data were submitted electronically.
  * ExposedActivity **required** `string`: Description of onsite industrial activities exposed to stormwater and potential spill and leak areas.
  * FacCountyName **required** `string`: The facility county name from EPA's Facility Registry System
  * FacDerivedHuc **required** `string`: The 8-digit Hydrologic Unit Code (HUC) of the watershed in which the facility resides. A HUC number is assigned to every watershed in the nation and uniquely identifies the watershed.
  * FacDerivedTRIbes **required** `string`: The tribes or tribal territories located within 25 miles of the facility's location.
  * FacDerivedWBD **required** `string`: The Hydrologic Unit Code (HUC-12) of the waterbody in which the facility resides, derived based on location data in FRS.
  * FacDerivedWBDHu8 **required** `string`: Spatially derived HUC based on the facility's geographic coordinates in FRS.
  * FacDerivedWBDHu8Name **required** `string`: The name of the hydrologic unit in which the facility is located within, derived spatially based on the facility's geographic coordinates in FRS.
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
  * FacPopDen **required** `string`: The number of persons per square mile in the area being profiled. This field is the ratio of total persons (displayed in the Total Persons field) to total land area (displayed in the Land Area field).
  * FacStdCountyName **required** `string`: The standardized  facility county name from EPA's Facility Registry System
  * FacTRIPotwTrans **required** `string`: POTW transfer information from the Toxics Release Inventory (TRI) represents the amount of toxic chemicals transferred to a Publicly Operated Treatment Works (POTW), in pounds, for the most recent reporting year.
  * FacTRIReporter **required** `string`: Indicates whether facility reported to the Toxics Release Inventory (TRI) for the most recent reporting year.
  * FacTRISwRel **required** `string`: Chemical surface water release information from the Toxics Release Inventory (TRI) represents the total chemical releases discharged to surface water, in pounds, for the most recent reporting year.
  * FacUsMexBorderFlg **required** `string`: A Y/N flag indicating that the facility is within 100KM of the US-Mexico Border.
  * HistoricCriterionCode **required** `string`: Indicates the eligibility criteria for historic properties preservation.
  * IndswFlag **required** `string`: A value of Y indicates an Industrial Stormwater Permit.
  * Infea5yrFlag **required** `string`: Indicates if the facility has an informal enforcement action within the last 5 years. 1 = Yes.
  * Insp5yrFlag **required** `string`: Indicates if the facility has an inspection within the last 5 years. 1 = Yes
  * InspDef5yrCnt **required** `string`
  * IssuingAgency **required** `string`: This is the name of the organization issuing or granting a permit.
  * LastDMRValueRcvdDate **required** `string`: The latest date that a Discharge Monitoring Report was received by the State or EPA.
  * LimPollutant **required** `string`: The list of pollutants with enforceable (i.e., numeric limits or monitoring only) and/or benchmark limits in the current version of a NPDES permit.
  * Lower48 **required** `string`: Flag showing Y/N whether location is within the contiguous (lower 48) United States.
  * Map **required** `string`: No Longer Used.
  * MasterExternalPermitNmbr **required** `string`: This is the unique identifier for the Master General Permit for a General Permit Covered Facility.
  * MaxPctileUs **required** `string`: The maximum percentile from all individual EJSCREEN indicators.
  * MaxScore **required** `string`: A sorting score for internal use.
  * MissDMRQtrs **required** `string`: Count of the number of quarters, out of the last twelve quarters, in which EPA's data system was not able to determine the facility-level compliance status.
  * MsgpCorrectiveActionSmmry **required** `string`: Summary of the corrective action documentation (part 4.3 of the permit) during the MSGP annual report year.
  * MsgpFacilityInspctnSmmry **required** `string`: Summary of the quarterly facility inspection documentation (part 3.1 of the permit) during the MSGP annual report year.
  * MsgpLastReportYear **required** `string`: The calendar year of the latest MSGP annual report submitted by the permitted facility.
  * MsgpNoFurtherRdctnRtnle **required** `string`: Description of rationale for why no further reductions are achievable (part 6.2.1.2 of the permit) during the MSGP annual report year.
  * MsgpPermitType **required** `string`: The Industrial stormwater permit type.
  * MsgpVisualAssessmentSmmry **required** `string`: Summary of the quarterly visual assessment documentation (part 3.3 of the permit) during the MSGP annual report year.
  * NPDESDataGroups **required** `string`: This is the code indicating the NPDES eReporting Rule Data Group that applies to the data.
  * NPDESDataGroupsDescs **required** `string`: Description for each NPDES Data Group eReporting rule code related to the current NPDES permit.
  * NPDESIDs **required** `string`: Clean Water Act ID from the ICIS-NPDES (Integrated Compliance Information System - National Pollutant Discharge Elimination System)
  * ObjectId **required** `string`: Sequential number assigned to each facility or cluster returned.
  * OtherPermitIDs **required** `string`
  * Over80CountUs **required** `string`: The number of primary EJSCREEN environmental justice (EJ) indexes exceeding the 80th or higher national percentile for the Census block group that the facility is located in.
  * PastCalYrAverageFlow **required** `string`: The past calendar year average flow in Million Gallons a Day (MGD).
  * PastCalYrConvPolOvrLmt **required** `string`: Total load over limit of conventional pollutant pounds equivalent discharged by the NPDES ID for the most recent complete calendar year.
  * PastCalYrConvPollutants **required** `string`: Total pounds of conventional pollutants discharged by the NPDES ID for the most recent complete calendar year.
  * PastCalYrToxicPolOvrLmt **required** `string`: Total load over limit of toxic-weighted pounds equivalent (TWPE) discharged by the NPDES ID for the most recent complete calendar year.
  * PastCalYrToxicPollutants **required** `string`: The toxic pollutants discharged by the NPDES facility for the most recent complete calendar year.
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
  * PermitComponents **required** `string`: Indicates the permit component(s) associated with the NPDES Permit Program Area.
  * PermitName **required** `string`
  * PermittingAgency **required** `string`: This is the type of organization issuing or granting a permit.
  * PollWithViolation **required** `string`: The names of pollutants with effluent exceedances (i.e., violation code E90) in the past three years in ICIS-NPDES.
  * RCRAIDs **required** `string`: A unique 12-character ID assigned for each record/permit/site/facility within the RCRAInfo database.
  * RadGnisName **required** `string`: The name of the waterbody from the Geographic Names Information System (GNIS) database in which the facility is permitted to discharge directly.
  * RadHu12Name **required** `string`: The name of the waterbody in which the facility is permitted to discharge directly (from the Reach Address Database, RAD).
  * RadReachcode **required** `string`: A nationally unique and permanent identifier for the waterbody, assigned by the US Geological Survey.
  * RadWBDHu8 **required** `string`: Hydrologic Unit Code (HUC) from the Reach Address Database (RAD), which is derived from the USGS Watershed Boundary Dataset.
  * RadWBDHu8Name **required** `string`: The name of the hydrologic unit in which the facility may discharge, from the Reach Address Database (RAD) and derived from the USGS Watershed Boundary Dataset.
  * RadWBDHuc12 **required** `string`: Code from the Reach Address Database (RAD), assigned by the US Geological Survey, used to classify watersheds in the United States and the Caribbean. The code consists of twelve digits which correspond to six levels of classification:
  * ReceivingMs4Name **required** `string`: This is the name of the receiving MS4(s).
  * ReferencePoint **required** `string`: ??
  * RegistryID **required** `string`: An internal 12-digit Facility Registry Service (FRS) tracking number used to tie all facility data together in EPA regulatory program databases.
  * RmpIDs **required** `string`: A unique ID assigned to each facility submitting a Risk Management Plan to EPA under the Risk Management Plan Rule.
  * SDWAIDs **required** `string`: A unique 9-character ID assigned for each public water system within the Safe Drinking Water Information System (SDWIS).
  * Score **required** `string`
  * Sector **required** `string`: The sector code and description for the industrial stormwater facility.
  * SourceID **required** `string`: Unique Identifier assigned by EPA.
  * SpeciesCriticalHabitalFlag **required** `string`: This identifies if Endangered Species Act (ESA) provisions are met.
  * StateAuthBiosolids **required** `string`: Indicates whether the state/tribe/territory code (first 2 digits of the NPDES_ID/SOURCE_ID) is authorized for Biosolids.
  * StateAuthFedfac **required** `string`: Indicates whether the state/tribe/territory code (first 2 digits of the NPDES_ID/SOURCE_ID) is authorized to regulate Federally owned facilities.
  * StateAuthGen **required** `string`: Indicates whether the state/tribe/territory code (first 2 digits of the NPDES_ID/SOURCE_ID) is authorized for General NPDES Facilities.
  * StateAuthNPDES **required** `string`: Indicates whether the state/tribe/territory code (first 2 digits of the NPDES_ID/SOURCE_ID) is authorized for NPDES Facilities.
  * StateAuthPretreat **required** `string`: Indicates whether the state/tribe/territory code (first 2 digits of the NPDES_ID/SOURCE_ID) is authorized for Pretreatment Facilities.
  * Statute **required** `string`: The name of the statute associated with each of the permits and identifiers linked to the facility: 
  * StormWaterArea **required** `string`: The estimated area of industrial activity at the site exposed to stormwater in acres.
  * SubmittedDate **required** `string`: Date that the permit was submitted to the issuing agency.
  * Subsector **required** `string`: The industrial subsector associated with the facility.
  * SwpppUrl **required** `string`: Web address URL of Internet page where current copy of Stormwater Pollution Prevention Plan (SWPPP) is maintained.
  * TRIIDs **required** `string`: A unique 15-character ID assigned for each facility within the Toxics Release Inventory (TRI) program. The format is ZZZZZNNNNNSSSSS, where ZZZZZ = ZIP code, NNNNN = the first 5 consonants of the name, and SSSSS = the first 5 non-blank non-special characters in the street address.
  * TRIbalFlag **required** `string`: A flag indicating that the facility is within a tribal area.
  * TypeOfMonitoring **required** `string`: The type of monitoring specified in the SWPPP.
  * TypeOfWater **required** `string`: The type of water body receiving discharges stormwater discharges specified in the SWPPP.
  * VioLastYear **required** `string`: A flag (values of 1 for Yes, 0 for No) that a Water Program Violation occurred in the last 4 quarters.
  * ViolFlag **required** `string`: Indicates if the facility had a violation within the last 3 years. 1 = Yes
  * WebDocs **required** `string`: Contains flags that identify what web accessible documents are available for the facility.

### cwa08
* cwa08 `object`: Results Object
  * BadSystemIDs **required** `string`: Identifies which passed query system identifiers are invalid.
  * BioCVRows **required** `string`: Number of facilities with current biosolid-related violations.
  * BioV3Rows **required** `string`: Number of facilities having one or more quarters of biosolid-related non-compliance in the last three years.
  * CVRows **required** `string`: Summary count of the number of CWA facilities or SDWA public drinking water systems with current violations.
  * ClusterOutput [cwa06](#cwa06)
  * ClusterRecords `string`: Number of clusters returned.
  * FEARows **required** `string`: Summary count of the number of facilities with a formal enforcement action in the past five years
  * Facilities `array`: A complex array of facility information.
    * items [cwa07](#cwa07)
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
  * VioLast4QRows **required** `string`: The number of facilities with a violation in the last year.

### cwa09
* cwa09 `object`: GeoJSON Feature Object
  * geometry **required** [geo](#geo)
  * properties **required** [cwa10](#cwa10)
  * type **required** `string`: Static marker indicating object is a GeoJSON Feature.

### cwa10
* cwa10 `object`: GeoJSON Properties Object
  * AIRIDs **required** `string`: Air Facility System (AFS) ID.
  * ActiveLower48 **required** `string`: A Y/N indicator indicating that the facility is active and located within the lower 48 contiguous US States.
  * AlrExceedences **required** `string`
  * AssociatedPollutant **required** `string`: Description of pollutant(s) or pollutant constituent(s) associated with each industrial activity exposed to stormwater.
  * AttainsAquaticLifeUseFlg **required** `string`: Displays "Y" if the waterbody in which the facility resides is designated for aquatic life use. The data are from the ATTAINS database.
  * AttainsAuCategory **required** `string`: The impairment class or category of the waterbody in which the facility is permitted to discharge directly. The data are from the ATTAINS database:
  * AttainsCauseGroups **required** `string`: Lists all groups of pollutants or stressors that are causing impairment in the assessed waterbody. The data are from the ATTAINS database.
  * AttainsCycleYear **required** `string`: The year in which the most recent state assessment occurred for the waterbody. The data are from the ATTAINS database.
  * AttainsExceptnlUseFlg **required** `string`: Displays "Y" if the waterbody in which the facility resides is designated for exceptional use. The data are from the ATTAINS database.
  * AttainsImpWaterFlg **required** `string`: Displays "Y" if the waterbody in which the facility resides is listed for impairment. The data are from the ATTAINS database.
  * AttainsPossibleNPDESParams **required** `string`: Lists all pollutants discharged by the facility that are potentially contributing to the impairment of local waterbodies.
  * AttainsRecreationUseFlg **required** `string`: Displays "Y" if the waterbody in which the facility resides is designated for recreational use. The data are from the ATTAINS database.
  * AttainsShellfishUseFlg **required** `string`: Displays "Y" if the waterbody in which the facility resides is designated for shellfish use. The data are from the ATTAINS database.
  * AttainsSource **required** `string`: The CWA Report in which the waterbody data can be found. The data are from the Assessment TMDL Tracking & Implementation System (ATTAINS) database.
  * AttainsStateCauses **required** `string`: Lists all pollutants or stressors that are causing impairment in the assessed waterbody. The data are from the ATTAINS database.
  * BeachCloseLast2yrsFlg **required** `string`: Displays "Y" if the facility is located on or near a waterbody with a beach closure within the last two years.
  * BeachCloseLastYearFlg **required** `string`: Displays "Y" if the facility is located on or near a waterbody with a beach closure within the last year.
  * BioAnalyMethodCatgrys **required** `string`: Displays the categories of the analytic methods used by the facility to analyze regulated parameters at the facility.
  * BioAnalyMethodCatgrys2016 **required** `string`: Displays the categories of the analytic methods used by the facility to analyze regulated parameters at the facility.
  * BioAnalyMethodCatgrys2017 **required** `string`: Displays the categories of the analytic methods used by the facility to analyze regulated parameters at the facility.
  * BioAnalyMethods **required** `string`: Displays the analytic methods used by the facility to analyze enteric viruses, fecal coliforms, helminth ova, Salmonella sp., and other regulated parameters as reported on the Biosolids Program Report.
  * BioAnalyMethods2016 **required** `string`: Displays the analytic methods used by the facility to analyze enteric viruses, fecal coliforms, helminth ova, Salmonella sp., and other regulated parameters as reported on the Biosolids Program Report.
  * BioAnalyMethods2017 **required** `string`: Displays the analytic methods used by the facility to analyze enteric viruses, fecal coliforms, helminth ova, Salmonella sp., and other regulated parameters as reported on the Biosolids Program Report.
  * BioCommentText **required** `string`: Free text allowing the user to provide comments on the annual program report.
  * BioCommentText2016 **required** `string`: Free text allowing the user to provide comments on the annual program report.
  * BioCommentText2017 **required** `string`: Free text allowing the user to provide comments on the annual program report.
  * BioIncinerationSum **required** `number`: The amount (dry metric tons) of biosolids incinerated.
  * BioIncinerationSum2016 **required** `number`: The amount (dry metric tons) of biosolids incinerated.
  * BioIncinerationSum2017 **required** `number`: The amount (dry metric tons) of biosolids incinerated.
  * BioLandApplicationSum **required** `number`: The amount (dry metric tons) of biosolids land applied.
  * BioLandApplicationSum2016 **required** `number`: The amount (dry metric tons) of biosolids land applied.
  * BioLandApplicationSum2017 **required** `number`: The amount (dry metric tons) of biosolids land applied.
  * BioMgmtContainers **required** `string`: Identifies the nature of each biosolids and sewage sludge material generated by the facility in terms of whether the material is a biosolid or sewage sludge and whether the material is ultimately conveyed off-site in bulk or in bags.
  * BioMgmtContainers2016 **required** `string`: Identifies the nature of each biosolids and sewage sludge material generated by the facility in terms of whether the material is a biosolid or sewage sludge and whether the material is ultimately conveyed off-site in bulk or in bags.
  * BioMgmtContainers2017 **required** `string`: Identifies the nature of each biosolids and sewage sludge material generated by the facility in terms of whether the material is a biosolid or sewage sludge and whether the material is ultimately conveyed off-site in bulk or in bags.
  * BioMgmtDefCategories **required** `string`: Indicates the program deficiency category to assist in reporting and displaying program deficiencies on web screens.
  * BioMgmtDefCategories2016 **required** `string`: Indicates the program deficiency category to assist in reporting and displaying program deficiencies on web screens.
  * BioMgmtDefCategories2017 **required** `string`: Indicates the program deficiency category to assist in reporting and displaying program deficiencies on web screens.
  * BioMgmtDefCurrentCnt **required** `number`: The number of times noncompliance reported by the facility in the last 3 years.
  * BioMgmtDefCurrentCnt2016 **required** `number`: The number of times noncompliance reported by the facility in the last 3 years.
  * BioMgmtDefCurrentCnt2017 **required** `number`: The number of times noncompliance reported by the facility in the last 3 years.
  * BioMgmtDeficiencies **required** `string`: Indicates the type of NPDES special regulatory program deficiency.
  * BioMgmtDeficiencies2016 **required** `string`: Indicates the type of NPDES special regulatory program deficiency.
  * BioMgmtDeficiencies2017 **required** `string`: Indicates the type of NPDES special regulatory program deficiency.
  * BioMgmtHandlers **required** `string`: Indicates the type of Biosolids or Sewage Sludge handlers/preparers, either owner/operator or off-site third-party handler/preparer.
  * BioMgmtHandlers2016 **required** `string`: Indicates the type of Biosolids or Sewage Sludge handlers/preparers, either owner/operator or off-site third-party handler/preparer.
  * BioMgmtHandlers2017 **required** `string`: Indicates the type of Biosolids or Sewage Sludge handlers/preparers, either owner/operator or off-site third-party handler/preparer.
  * BioMgmtPathogens **required** `string`: Identifies the pathogen class for biosolids or sewage sludge generated by the facility.
  * BioMgmtPathogens2016 **required** `string`: Identifies the pathogen class for biosolids or sewage sludge generated by the facility.
  * BioMgmtPathogens2017 **required** `string`: Identifies the pathogen class for biosolids or sewage sludge generated by the facility.
  * BioMgmtPathreds **required** `string`: Identifies the options used by the facility to control pathogens for a Biosolids Management Practice.
  * BioMgmtPathreds2016 **required** `string`: Identifies the options used by the facility to control pathogens for a Biosolids Management Practice.
  * BioMgmtPathreds2017 **required** `string`: Identifies the options used by the facility to control pathogens for a Biosolids Management Practice.
  * BioMgmtPrctceStypes **required** `string`: Additional detail about the type of Management Practice used for an amount of Biosolids or Sewage Sludge.
  * BioMgmtPrctceStypes2016 **required** `string`: Additional detail about the type of Management Practice used for an amount of Biosolids or Sewage Sludge.
  * BioMgmtPrctceStypes2017 **required** `string`: Additional detail about the type of Management Practice used for an amount of Biosolids or Sewage Sludge.
  * BioMgmtPrctceTypes **required** `string`: The type of biosolids or sewage sludge management practice (e.g., land application, surface disposal, incineration) used by the facility.
  * BioMgmtPrctceTypes2016 **required** `string`: The type of biosolids or sewage sludge management practice (e.g., land application, surface disposal, incineration) used by the facility.
  * BioMgmtPrctceTypes2017 **required** `string`: The type of biosolids or sewage sludge management practice (e.g., land application, surface disposal, incineration) used by the facility.
  * BioMgmtVectors **required** `string`: Identifies the option used by the facility for vector attraction reduction.
  * BioMgmtVectors2016 **required** `string`: Identifies the option used by the facility for vector attraction reduction.
  * BioMgmtVectors2017 **required** `string`: Identifies the option used by the facility for vector attraction reduction.
  * BioOtherManagementSum **required** `number`: The amount (dry metric tons) of biosolids managed using methods not previously described.
  * BioOtherManagementSum2016 **required** `number`: The amount (dry metric tons) of biosolids managed using methods not previously described.
  * BioOtherManagementSum2017 **required** `number`: The amount (dry metric tons) of biosolids managed using methods not previously described.
  * BioOtherMgmtPrctcTxts **required** `string`: Free text additional description of "other" Biosolids Management Practices.
  * BioOtherMgmtPrctcTxts2016 **required** `string`: Free text additional description of "other" Biosolids Management Practices.
  * BioOtherMgmtPrctcTxts2017 **required** `string`: Free text additional description of "other" Biosolids Management Practices.
  * BioQtrsWithVio **required** `number`: Count of the number of quarters, out of the last twelve quarters, in which the permit or site is considered with violations for biosolids.
  * BioReportDate **required** `string`: The date the report was received by EPA.
  * BioReportDate2016 **required** `string`: The date the report was received by EPA.
  * BioReportDate2017 **required** `string`: The date the report was received by EPA.
  * BioReportYear **required** `string`: The calendar year corresponding to the Annual Biosolids Report.
  * BioReportYears **required** `string`: Reporting years are determined by the year of the reporting period end date. Data reflect the last two reporting years.
  * BioReportingObligations **required** `string`: Indicates the reporting obligation reason.
  * BioReportingObligations2016 **required** `string`: Indicates the reporting obligation reason.
  * BioReportingObligations2017 **required** `string`: Indicates the reporting obligation reason.
  * BioSurfaceDispSum **required** `number`: The amount of surface disposal in dry metric tons (DMT).
  * BioSurfaceDispSum2016 **required** `number`: The amount of surface disposal in dry metric tons (DMT).
  * BioSurfaceDispSum2017 **required** `number`: The amount of surface disposal in dry metric tons (DMT).
  * BioTotalVolumeAmt **required** `number`: The amount (in dry metric tons) of biosolids or sewage sludge generated at the facility.
  * BioTotalVolumeAmt2016 **required** `number`: The amount (in dry metric tons) of biosolids or sewage sludge generated at the facility.
  * BioTotalVolumeAmt2017 **required** `number`: The amount (in dry metric tons) of biosolids or sewage sludge generated at the facility.
  * BioTrmntPrcssCmntTxts2016 **required** `string`: Free text additional description of "other" biotreatment processes.
  * BioTrmntPrcssCmntTxts2017 **required** `string`: Free text additional description of "other" biotreatment processes.
  * BioTrtmntPrcssCmmntTxts **required** `string`: Free text additional description of "other" biotreatment processes.
  * BioTrtmntProcesses **required** `string`: Identifies the biosolids or sewage sludge treatment process or processes at the facility.
  * BioTrtmntProcesses2016 **required** `string`: Identifies the biosolids or sewage sludge treatment process or processes at the facility.
  * BioTrtmntProcesses2017 **required** `string`: Identifies the biosolids or sewage sludge treatment process or processes at the facility.
  * BioVioLastYear **required** `number`: A flag (values of 1 for Yes, 0 for No) that a Bisolids Violation occurred in the last 4 quarters.
  * BioVioLastYearFlag **required** `string`: Y if the facility has a biosolids single event violation under the Clean Water Act in the last year. Note: Violations reported on the 2016 and 2017 Biosolids Annual Report are not updated with the weekly data refresh and may not be representative of a facility's recently submitted or updated report.�
  * BioVioStatus **required** `number`: A value of 1 indicates if the Biosolids facility currently has an unresolved biosolids related Single Event Violation.
  * BioViolFlag **required** `number`: Displays "Yes" if the facility is in violation for biosolids under the Clean Water Act, in the last three years.
  * BiosolidsFlag **required** `string`: A Yes/No field to indicate permits with biosolids management and compliance information.
  * CWP13qtrsComplHistory **required** `string`: The facility's 3-year or 13-quarter compliance status history by quarter (3-month period). Each character represents a quarter of compliance, going from oldest to most recent. Character values correspond to the following compliance statuses:
  * CWPActualAverageFlowNmbr **required** `number`: The actual amount of the facility's wastewater flow measured in million gallons per day (MGD).
  * CWPBioFeaCount **required** `number`: The count of Biosolids related Formal Enforcement Actions that have been taken against the Facility.
  * CWPBioIeaCount **required** `number`: The count of Biosolids related Informal Enforcement Actions that have been taken against the Facility.
  * CWPBioInspCount **required** `number`: The count of Biosolids related Inspections that have occured for the facility.
  * CWPBioPenalties **required** `number`: The total amount of Biosolids related penalties that have been assessed against the facility.
  * CWPCaseIDs **required** `string`: Indicates the ICIS Case Number, a unique number identifying the civil enforcement action.
  * CWPCity **required** `string`: City in which the facility is located.
  * CWPComplianceTracking **required** `string`: Extent to which data is being entered and effluent exceedances are being identified (Off, On, Partial).
  * CWPCounty **required** `string`: County in which the facility is located.
  * CWPCsoFlag **required** `string`: The discharge from a Combined Sewer System at a point prior to the treatment plant. CSOs are point sources subject to NPDES permit requirements including both technology-based and water quality-based requirements of the Clean Water Act.
  * CWPCsoOutfalls **required** `string`: The number of discharge outfalls at points prior to the treatment plant.
  * CWPDateLastBioFea **required** `string`: Indicates the effective date of the most recent listed biosolids formal enforcement action taken against the facility within the last five years.
  * CWPDateLastBioFeaEPA **required** `string`: Indicates the effective date of the most recent listed formal enforcement action taken against the facility by EPA within the last five years.
  * CWPDateLastBioFeaSt **required** `string`: Indicates the effective date of the most recent listed formal enforcement action taken against the facility by a state environmental agency within the last five years.
  * CWPDateLastBioIea **required** `string`: Indicates the effective date of the most recent listed biosolids informal enforcement action taken against the facility within the last five years.
  * CWPDateLastBioIeaEPA **required** `string`: Indicates the effective date of the most recent listed biosolids informal enforcement action taken against the facility by EPA within the last five years.
  * CWPDateLastBioIeaSt **required** `string`: Indicates the effective date of the most recent listed biosolids informal enforcement action taken against the facility by a state environmental agency within the last five years.
  * CWPDateLastBioInsp **required** `string`: The date on which the most recent biosolids program inspection of the facility took place.
  * CWPDateLastBioInspEPA **required** `string`: Indicate the last inspection date by EPA
  * CWPDateLastBioInspSt **required** `string`: Indicate the last inspection date by state environmental agency
  * CWPDateLastBioPenalty **required** `string`: Indicates the date on which the most recent assessed (or final) biosolids penalty was taken against the facility within the last five years. This measure only includes penalties that have been entered in the program database ICIS-NPDES.
  * CWPDateLastFea **required** `string`: Indicates the effective date of the most recent listed formal enforcement action taken against the facility.
  * CWPDateLastFeaEPA **required** `string`: Indicates the effective date of the most recent listed formal enforcement action taken against the facility by EPA.
  * CWPDateLastFeaSt **required** `string`: Indicates the effective date of the most recent listed formal enforcement action taken against the facility by a state environmental agency.
  * CWPDateLastIeaEPA **required** `string`: Indicates the effective date of the most recent listed informal enforcement action taken against the facility by EPA.
  * CWPDateLastIeaSt **required** `string`: Indicates the effective date of the most recent listed informal enforcement action taken against the facility by a state environmental agency.
  * CWPDateLastInformalEa **required** `string`: Indicates the effective date of the most recent listed informal enforcement action taken against the facility.
  * CWPDateLastInspEPA **required** `string`: Indicates the effective date of the most recent inspection taken against the facility.
  * CWPDateLastInspSt **required** `string`: Indicates the effective date of the most recent inspection taken against the facility by a state environmental agency.
  * CWPDateLastInspection **required** `string`: The date on which the most recent inspection of the facility took place. For the CAA, the date on which a Full Compliance Evaluation (FCE) was completed.
  * CWPDateLastPenalty **required** `string`: Indicates date of most recent penalty against the facility.
  * CWPDaysLastBioInsp **required** `string`: Indicates the number of days since the most recent Biosolids related inspection of the facility.
  * CWPDaysLastInspection **required** `number`: Indicates the number of days since the most recent inspection of the facility.
  * CWPE90Cnt **required** `number`: Displays the number of instances where effluent limits have been exceeded in the past 3 years (E90 compliance code), based on monthly Discharge Monitoring Reports (DMRs) submitted by facilities.
  * CWPEPARegion **required** `string`: The EPA region where the facility is located. EPA has 10 regional offices that execute programs within several states and territories.
  * CWPEffectiveDate **required** `string`: Date (MM/DD/YYYY) that the permit became effective.
  * CWPExpirationDate **required** `string`: Date that the permit expires.
  * CWPFIPSCode **required** `string`: A 5 digit combination of the 2 digit Federal Information Processing Standards (FIPS) code for the state and the 3 digit FIPS code of the county that a facility is located in.
  * CWPFacilityTypeCode **required** `string`
  * CWPFacilityTypeIndicator **required** `string`: Each National Pollutant Discharge Elimination System (NPDES) permit is defined by the program office as a Major or non-major discharger. This field also indicates the permit type.
  * CWPFormalEaCnt **required** `string`: Indicates the total number of enforcement actions taken against the facility within the last five years. "NA" indicates that this measure is not applicable for facilities with no associated CAA, CWA, or RCRA permits.
  * CWPImpWaterFlg **required** `string`: Displays "Y" if the permitted facility discharges directly into category 4 or 5 impaired waters, as designated under section 303(d) of the Clean Water Act.
  * CWPIndianCntryFlg **required** `string`: Displays "Y" if a facility is located in Indian country.
  * CWPInformalEnfActCount **required** `number`: Indicates the total number of informal enforcement actions/notices of violations (NOVs) taken against the facility within the last five years.
  * CWPInspectionCount **required** `number`: The number of inspections/compliance evaluations, under the corresponding statute, occurring at the facility within the last five years.
  * CWPIssueDate **required** `string`: Date (MM/DD/YYYY) that the permit was issued.
  * CWPMajorMinorStatusFlag **required** `string`: Facilities marked "M" for major refers to CWA major permittees.
  * CWPNAICSCodes **required** `string`: Indicates the facility's or permit's primary North American Industry Classification System (NAICS) Code.
  * CWPName **required** `string`: Facility or permit holder name, as maintained in ICIS-NPDES.
  * CWPPermitStatusCode **required** `string`: The code associated with the facility's NPDES permit status.
  * CWPPermitStatusDesc **required** `string`: The current stage/status in the NPDES permit life cycle.
  * CWPPermitTypeCode **required** `string`: The code associated with the facility's NPDES permit classification.
  * CWPPermitTypeDesc **required** `string`: NPDES facility permit classification:
  * CWPQtrsWithNC **required** `number`: Count of the number of quarters, out of the last twelve quarters, in which the permit or site is considered either with violations, in noncompliance (NC) status, or in Significant Noncompliance (SNC), as described above under Compliance Status.
  * CWPQtrsWithSNC **required** `number`: Count of the number of quarters, out of the last twelve quarters, in which the permit is considered in Significant Noncompliance (SNC), as described above under Compliance Status.
  * CWPSICCodes **required** `string`: Indicates the facility's or permit's primary Standard Industrial Classification (SIC) Code.
  * CWPSNCEventDesc **required** `string`: Describes the event that resulted in the facility's status of Significant Noncompliance.
  * CWPSNCStatus **required** `string`: Indicates when a major source is in significant noncompliance (SNC) or a non-major source has a Category I violation.
  * CWPSNCStatusDate **required** `string`: The status date of the facility's Significant Noncompliance designation.
  * CWPState **required** `string`: Facility location - two-digit state abbreviation.
  * CWPStateDistrict **required** `string`: The State Congressional District the facility is located within.
  * CWPStateWaterBodyCode **required** `string`: Code from the Assessment TMDL Tracking & Implementation System (ATTAINS) database, assigned by the US Geological Survey, used to classify watersheds in the United States and the Caribbean. The code consists of twelve digits which correspond to six levels of classification:
  * CWPStateWaterBodyName **required** `string`: The name of the watershed from the ATTAINS database in which the facility resides.
  * CWPStatus **required** `string`: An indication of the facility's current compliance status under the Clean Water Act:
  * CWPStreet **required** `string`: Facility street address
  * CWPTRIbalLandCode **required** `string`: From ICIS, the unique identifier for every unit of land within Indian Country.
  * CWPTerminationDate **required** `string`: Date (MM/DD/YYYY) that the permit was terminated.
  * CWPTotalDesignFlowNmbr **required** `number`: The amount of wastewater flow in million gallons per day (MGD) that the facility is designed for.
  * CWPTotalPenalties **required** `string`: The total penalty value incurred over 5 years.
  * CWPVersionNmbr **required** `number`: The version number of the facility's NPDES permit.
  * CWPVioStatus **required** `string`: The current Reportable Non Compliance value for the facility.
  * CWPViolStatus **required** `string`: Indicates if the facility is currently in any violation under the Clean Water Act, either in Noncompliance or Significant Noncompliance.
  * CWPZip **required** `string`: Facility ZIP code
  * CalculatedAccuracyMeters **required** `number`: Indicates the calculated accuracy in meters for the facilities geospatial coordinate.  Generally, the accuracy is directly linked to the collection method where GPS methods are more accurate that manual methods like map or photo interpolations.
  * CensusBlockGroup **required** `string`: A geographic unit used by the United States Census Bureau, generally defined to contain between 600 and 3,000 people.
  * CertifiedDate **required** `string`: The issue date or effective date of the permit.
  * ChesapeakeBayFlag **required** `string`: Displays "Y" if the facility is located within the Chesapeake Bay watershed.
  * CollectionMethod **required** `string`: ??
  * ControlMeasure **required** `string`: Description of control measures employed to comply with the non-numeric technology-based effluent limits required in Part 2.1.2 and Part 8.
  * ControlMeasureSchedule **required** `string`: Description of schedule for control measures associated with good housekeeping and maintenance.
  * CurrSvFlag **required** `number`: Indicates if the facility has a current significant violation. 1 = Yes
  * CurrVioFlag **required** `number`: Indicates if the facility has a current violation. 1 = Yes
  * DMRImpairedPoll **required** `string`: The pollutants with limits or monitoring requirements in a facility's NPDES permit with the potential to contribute to impairment of local waterbodies
  * DMRPounds **required** `number`: Total pounds of pollutants discharged by the NPDES ID for the most recent complete calendar year.
  * DMRTwpe **required** `number`: Total toxic-weighted pounds equivalent (TWPE) discharged by the NPDES ID for the most recent complete calendar year. TWPE is the mass of a pollutant or chemical discharged that accounts for its relative toxicity.
  * DschToMs4 **required** `string`: Indicates�if a facility discharges into a Municipal Separate Storm Sewer System (MS4).
  * E90Exceeds1yr **required** `string`: The number of E90 Exceedences in the last year.
  * E90Exceeds2yr **required** `string`: The number of E90 Exceedences in the last 2 years.
  * E90Exceeds3yr **required** `string`: The number of E90 Exceedences in the last 3 years.
  * E90Exceeds4yr **required** `string`: The number of E90 Exceedences in the last 4 years.
  * E90Exceeds5yr **required** `string`: The number of E90 Exceedences in the last 5 years.
  * E90Pollutants1yr **required** `string`: The pollutants for the E90 Exceedences in the last year.
  * E90Pollutants2yr **required** `string`: The pollutants for the E90 Exceedences in the last 2 years.
  * E90Pollutants3yr **required** `string`: The pollutants for the E90 Exceedences in the last 3 years.
  * E90Pollutants4yr **required** `string`: The pollutants for the E90 Exceedences in the last 4 years.
  * E90Pollutants5yr **required** `string`: The pollutants for the E90 Exceedences in the last 5 years.
  * EPASystem **required** `string`: The EPA data system in which permit and facility records are kept. EPA's Facility Registry System (FRS) links all program database records (such as permit IDs and IDs facilities use in reporting to EPA) together. The following list describes the individual data systems that are linked to from the detailed facility report: 
  * Ea5yrFlag **required** `number`: Indicates if the facility has a formal enforcement action within the last 5 years. 1 = Yes
  * EffChartsFlag **required** `string`
  * EffExceeds **required** `number`: The number of E90 Effluent Violations in the last 3 years.
  * EjscreenFlag **required** `string`: A Y/N indicator identifying whether or not the facility is within an Environmental Justice area.
  * EjscreenFlagUs **required** `string`: A Y/N indicator identifying whether or not the facility is within an Environmental Justice area.
  * ElectrRptWaiverEffDate **required** `string`: This is the effective date for a  waiver from electronic reporting in compliance with this part. This data element should always be populated for a waiver.
  * ElectrRptWaiverExpDate **required** `string`: This is the expiration date for a temporary waiver from electronic reporting in compliance with this part. This data element should be left blank if the permittee has a permanent waiver from electronic reporting or if the permittee does not have a waiver from electronic reporting in compliance with this part.
  * ElectrRptWaiverTypeCode **required** `string`: The unique code that identifies whether the authorized NPDES program has granted the permittee a waiver from electronic reporting in compliance with this part (e.g,  temporary waiver, permanent waiver). This data element should be left blank if the permittee does not have a waiver from electronic reporting in compliance with this part.
  * ElectrRptWaiverTypeDesc **required** `string`: Description of the unique code that identifies whether the authorized NPDES program has granted the permittee a waiver from electronic reporting in compliance with this part (e.g,  temporary waiver, permanent waiver). This data element should be left blank if the permittee does not have a waiver from electronic reporting in compliance with this part.
  * ElectrSubmissionTypeCode **required** `string`: This is the code indicating the means by which the data were submitted electronically.
  * ElectrSubmissionTypeDesc **required** `string`: This is the description of the code indicating the means by which the data were submitted electronically.
  * ExposedActivity **required** `string`: Description of onsite industrial activities exposed to stormwater and potential spill and leak areas.
  * FacCountyName **required** `string`: The facility county name from EPA's Facility Registry System
  * FacDerivedHuc **required** `string`: The 8-digit Hydrologic Unit Code (HUC) of the watershed in which the facility resides. A HUC number is assigned to every watershed in the nation and uniquely identifies the watershed.
  * FacDerivedTRIbes **required** `string`: The tribes or tribal territories located within 25 miles of the facility's location.
  * FacDerivedWBD **required** `string`: The Hydrologic Unit Code (HUC-12) of the waterbody in which the facility resides, derived based on location data in FRS.
  * FacDerivedWBDHu8 **required** `string`: Spatially derived HUC based on the facility's geographic coordinates in FRS.
  * FacDerivedWBDHu8Name **required** `string`: The name of the hydrologic unit in which the facility is located within, derived spatially based on the facility's geographic coordinates in FRS.
  * FacDerivedWBDName **required** `string`: The 12 digit Watershed Boundary Dataset Name derived from the FRS Best Pick Coordinate
  * FacFIPSCode **required** `string`: The 2-digit Federal Information Processing Standards (FIPS) code to identify the county that a facility is located in.
  * FacFederalAgencyCode **required** `string`: Indicates the federal agency, as classified in FRS. Federal agencies are installations that are owned and operated by the U.S. government. The five-character code consists of a letter followed by four numbers. There are four possible letters that can occupy the first character position: C = Civilian Federal Agency; D = Department of Defense; E = Department of Energy; X = Unknown. The second and third characters represent the agency code, while the fourth and fifth characters represent the bureau code.
  * FacFederalAgencyName **required** `string`: Indicates the name of the federal agency, as classified in FRS. Federal agencies are installations that are owned and operated by the U.S. government.
  * FacIndianCntryFlg **required** `string`: Flag showing Y/N whether the facility is located in Indian Country.
  * FacIndianSpatialFlg **required** `string`: Returns “Y” if a facility is located within a tribal spatial boundary as defined by the U.S. Census Bureau 2010 tribal boundary layer data for tribes in the lower 48 states and Bureau of Land Management Alaska State Office data for native villages in Alaska. Returns “N” if a facility is not located within a tribal or native Alaskan village area.
  * FacMapFlg **required** `string`: Graphical indicator denoting whether geographical data required to map a facility are available.
  * FacMapIcon **required** `string`: The default map icon image file calculated for the facility by the ECHO program.
  * FacPercentMinority **required** `number`: Percent Minority is the percentage of the population of the given area that is considered minority. Statistics are shown for the area within a 3-mile radius of each facility.
  * FacPopDen **required** `number`: The number of persons per square mile in the area being profiled. This field is the ratio of total persons (displayed in the Total Persons field) to total land area (displayed in the Land Area field).
  * FacStdCountyName **required** `string`: The standardized  facility county name from EPA's Facility Registry System
  * FacTRIPotwTrans **required** `string`: POTW transfer information from the Toxics Release Inventory (TRI) represents the amount of toxic chemicals transferred to a Publicly Operated Treatment Works (POTW), in pounds, for the most recent reporting year.
  * FacTRIReporter **required** `string`: Indicates whether facility reported to the Toxics Release Inventory (TRI) for the most recent reporting year.
  * FacTRISwRel **required** `string`: Chemical surface water release information from the Toxics Release Inventory (TRI) represents the total chemical releases discharged to surface water, in pounds, for the most recent reporting year.
  * FacUsMexBorderFlg **required** `string`: A Y/N flag indicating that the facility is within 100KM of the US-Mexico Border.
  * HistoricCriterionCode **required** `string`: Indicates the eligibility criteria for historic properties preservation.
  * IndswFlag **required** `string`: A value of Y indicates an Industrial Stormwater Permit.
  * Infea5yrFlag **required** `number`: Indicates if the facility has an informal enforcement action within the last 5 years. 1 = Yes.
  * Insp5yrFlag **required** `number`: Indicates if the facility has an inspection within the last 5 years. 1 = Yes
  * InspDef5yrCnt **required** `number`
  * IssuingAgency **required** `string`: This is the name of the organization issuing or granting a permit.
  * LastDMRValueRcvdDate **required** `string`: The latest date that a Discharge Monitoring Report was received by the State or EPA.
  * LimPollutant **required** `string`: The list of pollutants with enforceable (i.e., numeric limits or monitoring only) and/or benchmark limits in the current version of a NPDES permit.
  * Lower48 **required** `string`: Flag showing Y/N whether location is within the contiguous (lower 48) United States.
  * Map **required** `string`: No Longer Used.
  * MasterExternalPermitNmbr **required** `string`: This is the unique identifier for the Master General Permit for a General Permit Covered Facility.
  * MaxPctileUs **required** `number`: The maximum percentile from all individual EJSCREEN indicators.
  * MaxScore **required** `number`: [Col. 121]
  * MissDMRQtrs **required** `number`: Count of the number of quarters, out of the last twelve quarters, in which EPA's data system was not able to determine the facility-level compliance status.
  * MsgpCorrectiveActionSmmry **required** `string`: Summary of the corrective action documentation (part 4.3 of the permit) during the MSGP annual report year.
  * MsgpFacilityInspctnSmmry **required** `string`: Summary of the quarterly facility inspection documentation (part 3.1 of the permit) during the MSGP annual report year.
  * MsgpLastReportYear **required** `string`: The calendar year of the latest MSGP annual report submitted by the permitted facility.
  * MsgpNoFurtherRdctnRtnle **required** `string`: Description of rationale for why no further reductions are achievable (part 6.2.1.2 of the permit) during the MSGP annual report year.
  * MsgpPermitType **required** `string`: The Industrial stormwater permit type.
  * MsgpVisualAssessmentSmmry **required** `string`: Summary of the quarterly visual assessment documentation (part 3.3 of the permit) during the MSGP annual report year.
  * NPDESDataGroups **required** `string`: This is the code indicating the NPDES eReporting Rule Data Group that applies to the data.
  * NPDESDataGroupsDescs **required** `string`: Description for each NPDES Data Group eReporting rule code related to the current NPDES permit.
  * NPDESIDs **required** `string`: Clean Water Act ID from the ICIS-NPDES (Integrated Compliance Information System - National Pollutant Discharge Elimination System)
  * OtherPermitIDs **required** `string`
  * Over80CountUs **required** `number`: The number of primary EJSCREEN environmental justice (EJ) indexes exceeding the 80th or higher national percentile for the Census block group that the facility is located in.
  * PastCalYrAverageFlow **required** `string`: The past calendar year average flow in Million Gallons a Day (MGD).
  * PastCalYrConvPolOvrLmt **required** `number`: Total load over limit of conventional pollutant pounds equivalent discharged by the NPDES ID for the most recent complete calendar year.
  * PastCalYrConvPollutants **required** `string`: Total pounds of conventional pollutants discharged by the NPDES ID for the most recent complete calendar year.
  * PastCalYrToxicPolOvrLmt **required** `number`: Total load over limit of toxic-weighted pounds equivalent (TWPE) discharged by the NPDES ID for the most recent complete calendar year.
  * PastCalYrToxicPollutants **required** `string`: The toxic pollutants discharged by the NPDES facility for the most recent complete calendar year.
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
  * PermitComponents **required** `string`: Indicates the permit component(s) associated with the NPDES Permit Program Area.
  * PermitName **required** `string`
  * PermittingAgency **required** `string`: This is the type of organization issuing or granting a permit.
  * PollWithViolation **required** `string`: The names of pollutants with effluent exceedances (i.e., violation code E90) in the past three years in ICIS-NPDES.
  * RCRAIDs **required** `string`: A unique 12-character ID assigned for each record/permit/site/facility within the RCRAInfo database.
  * RadGnisName **required** `string`: The name of the waterbody from the Geographic Names Information System (GNIS) database in which the facility is permitted to discharge directly.
  * RadHu12Name **required** `string`: The name of the waterbody in which the facility is permitted to discharge directly (from the Reach Address Database, RAD).
  * RadReachcode **required** `string`: A nationally unique and permanent identifier for the waterbody, assigned by the US Geological Survey.
  * RadWBDHu8 **required** `string`: Hydrologic Unit Code (HUC) from the Reach Address Database (RAD), which is derived from the USGS Watershed Boundary Dataset.
  * RadWBDHu8Name **required** `string`: The name of the hydrologic unit in which the facility may discharge, from the Reach Address Database (RAD) and derived from the USGS Watershed Boundary Dataset.
  * RadWBDHuc12 **required** `string`: Code from the Reach Address Database (RAD), assigned by the US Geological Survey, used to classify watersheds in the United States and the Caribbean. The code consists of twelve digits which correspond to six levels of classification:
  * ReceivingMs4Name **required** `string`: This is the name of the receiving MS4(s).
  * ReferencePoint **required** `string`: ??
  * RegistryID **required** `string`: An internal 12-digit Facility Registry Service (FRS) tracking number used to tie all facility data together in EPA regulatory program databases.
  * RmpIDs **required** `string`: A unique ID assigned to each facility submitting a Risk Management Plan to EPA under the Risk Management Plan Rule.
  * SDWAIDs **required** `string`: A unique 9-character ID assigned for each public water system within the Safe Drinking Water Information System (SDWIS).
  * Score **required** `number`
  * Sector **required** `string`: The sector code and description for the industrial stormwater facility.
  * SourceID **required** `string`: Unique Identifier assigned by EPA.
  * SpeciesCriticalHabitalFlag **required** `string`: This identifies if Endangered Species Act (ESA) provisions are met.
  * StateAuthBiosolids **required** `string`: Indicates whether the state/tribe/territory code (first 2 digits of the NPDES_ID/SOURCE_ID) is authorized for Biosolids.
  * StateAuthFedfac **required** `string`: Indicates whether the state/tribe/territory code (first 2 digits of the NPDES_ID/SOURCE_ID) is authorized to regulate Federally owned facilities.
  * StateAuthGen **required** `string`: Indicates whether the state/tribe/territory code (first 2 digits of the NPDES_ID/SOURCE_ID) is authorized for General NPDES Facilities.
  * StateAuthNPDES **required** `string`: Indicates whether the state/tribe/territory code (first 2 digits of the NPDES_ID/SOURCE_ID) is authorized for NPDES Facilities.
  * StateAuthPretreat **required** `string`: Indicates whether the state/tribe/territory code (first 2 digits of the NPDES_ID/SOURCE_ID) is authorized for Pretreatment Facilities.
  * Statute **required** `string`: The name of the statute associated with each of the permits and identifiers linked to the facility: 
  * StormWaterArea **required** `string`: The estimated area of industrial activity at the site exposed to stormwater in acres.
  * SubmittedDate **required** `string`: Date that the permit was submitted to the issuing agency.
  * Subsector **required** `string`: The industrial subsector associated with the facility.
  * SwpppUrl **required** `string`: Web address URL of Internet page where current copy of Stormwater Pollution Prevention Plan (SWPPP) is maintained.
  * TRIIDs **required** `string`: A unique 15-character ID assigned for each facility within the Toxics Release Inventory (TRI) program. The format is ZZZZZNNNNNSSSSS, where ZZZZZ = ZIP code, NNNNN = the first 5 consonants of the name, and SSSSS = the first 5 non-blank non-special characters in the street address.
  * TRIbalFlag **required** `number`: A value of "1" indicates that the facility is within an Indian Tribal or Alaskan Native Village area.
  * TypeOfMonitoring **required** `string`: The type of monitoring specified in the SWPPP.
  * TypeOfWater **required** `string`: The type of water body receiving discharges stormwater discharges specified in the SWPPP.
  * VioLastYear **required** `number`: A flag (values of 1 for Yes, 0 for No) that a Water Program Violation occurred in the last 4 quarters.
  * ViolFlag **required** `number`: Indicates if the facility had a violation within the last 3 years. 1 = Yes
  * WebDocs **required** `string`: Contains flags that identify what web accessible documents are available for the facility.

### cwa11
* cwa11 `object`: Map Data Object
  * CWAstatus **required** `string`: Quarterly compliance status for the most recent 13 quarters. Each letter indicates the compliance status for the corresponding quarter.
  * FormalCount **required** `string`: The number of formal enforcement actions that have been taken against the facility
  * ICON **required** `string`: Name of each individual icon file within the URL base
  * InformalCount **required** `string`: The number of informal enforcement actions that have been taken against the facility
  * LAT **required** `string`: The latitude of the facility in degrees, to four decimal places
  * LON **required** `string`: The longitude of the facility in degrees, to four decimal places
  * LastInsp **required** `string`: The unique identifier for the last inspection
  * NAME **required** `string`: For DFR, this is the Facility name. The name corresponds to the TYPE value
  * PUV **required** `string`: Pop up value. Combine with PopUpBaseURL to give the popup for the facility
  * TYPE **required** `string`: For DFR, this is always facility

### cwa12
* cwa12 `object`: Map Output Object
  * IconBaseURL **required** `string`: URL where all the icons are located
  * MapData **required** `array`: An array of facility geospatial information.
    * items [cwa11](#cwa11)
  * PopUpBaseURL **required** `string`: Combine this URL with the PUC to get popup info
  * QueryID **required** `string`: Sequential number assigned to entire search result

### cwa13
* cwa13 `object`: Results Object
  * Facilities **required** `array`: A complex array of facility information.
    * items [cwa01](#cwa01)
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

### rlup01
* rlup01 `object`: Lookup Values
  * ValueCode **required** `string`
  * ValueDescription **required** `string`

### rlup20
* rlup20 `object`: Results Object
  * LuValues `array`
    * items [rlup01](#rlup01)
  * Message **required** `string`: Field to record messages (typically performance-related) about packet processing

### rlup23
* rlup23 `object`: Results Object
  * LuValues `array`
    * items [rlup01](#rlup01)
  * Message **required** `string`: Field to record messages (typically performance-related) about packet processing

### rlup24
* rlup24 `object`: Results Object
  * LuValues `array`
    * items [rlup01](#rlup01)
  * Message **required** `string`: Field to record messages (typically performance-related) about packet processing

### rlup54
* rlup54 `object`: Results Object
  * LuValues `array`
    * items [rlup01](#rlup01)
  * Message **required** `string`: Field to record messages (typically performance-related) about packet processing

### rlup58
* rlup58 `object`: Results Object
  * LuValues `array`
    * items [rlup01](#rlup01)
  * Message **required** `string`: Field to record messages (typically performance-related) about packet processing

### rlup59
* rlup59 `object`: Results Object
  * LuValues `array`
    * items [rlup01](#rlup01)
  * Message **required** `string`: Field to record messages (typically performance-related) about packet processing

### rlup61
* rlup61 `object`: Results Object
  * LuValues `array`
    * items [rlup01](#rlup01)
  * Message **required** `string`: Field to record messages (typically performance-related) about packet processing

### rlup65
* rlup65 `object`: Results Object
  * LuValues `array`
    * items [rlup01](#rlup01)
  * Message **required** `string`: Field to record messages (typically performance-related) about packet processing

### rlup75
* rlup75 `object`: Results Object
  * LuValues `array`
    * items [rlup01](#rlup01)
  * Message **required** `string`: Field to record messages (typically performance-related) about packet processing

### rlup77
* rlup77 `object`: Results Object
  * LuValues `array`
    * items [rlup01](#rlup01)
  * Message **required** `string`: Field to record messages (typically performance-related) about packet processing


