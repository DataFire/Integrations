# @datafire/epa_gov_case

Client library for U.S. EPA Enforcement and Compliance History Online (ECHO) - Enforcement Case Search

## Installation and Usage
```bash
npm install --save @datafire/epa_gov_case
```
```js
let epa_gov_case = require('@datafire/epa_gov_case').create();

epa_gov_case.rest_lookups.icis_law_sections.post({}).then(data => {
  console.log(data);
});
```

## Description

Enforcement and Compliance History Online (ECHO) is a tool developed and maintained by EPA's Office of Enforcement and Compliance Assurance for public use. ECHO provides integrated compliance and enforcement information for about 800,000 regulated facilities nationwide.
<BR><BR>CASE Rest Services provide multiple service endpoints, each with specific capabilities, to search and retrieve data on civil cases entered into the 
Integrated Compliance Information System (ICIS) and criminal cases entered into the Summary of Criminal Prosecutions database.  
See Enforcement Case Search Help (https://echo.epa.gov/help/enforcement-case-search-help) for additional information on searching civil and criminal cases. 
<BR><BR>
The get_cases, get_map, get_qid, and get_download end points are meant to be used together.<br>  
The recommended use scenario for get_cases, get_qid, get_map, and get_downoad is:
<br>
<br><b>1)</b>  Use get_cases to validate passed query parameters, obtain summary statistics and to obtain a query_id (QID).  QIDs are time sensitive and will be valid for approximately 30 minutes.
<br><b>2)</b>  Use get_qid, with the returned QID, to paginate through arrays of case results.
<br><b>3)</b>  Use get_map, with the returned QID, to zoom in/out and pan on the clustered and individual facility coordinates, related to the returned cases, that meet the QID query criteria.
<br><b>4)</b>  Use get_download, with the returned QID, to generate a Comma Separated Value (CSV) file of facility information that meets the QID query criteria.
<br><br>
In addition to the service endpoints listed above there are two detailed case report services, one for civil cases (get_case_report) and one for criminal cases (get_crcase_report). 
See the Civil Enforcement Case Report Help (https://echo.epa.gov/help/reports/enforcement-case-report-help) and the Criminal Case Report Help (https://echo.epa.gov/help/reports/criminal-case-report-help) for additional information 
on then data returned from these two services.   
<br>
Additional ECHO Resources:   <a href="https://echo.epa.gov/tools/web-services">Web Services</a>, <a href="https://echo.epa.gov/resources/echo-data/about-the-data">About ECHO's Data</a>, <a href="https://echo.epa.gov/tools/data-downloads">Data Downloads</a>
<br>


## Actions

### case_rest_services.get_case_report.get
The get_case_report service endpoint returns a complex object of civil enforcement case details based on the provided case id.


```js
epa_gov_case.case_rest_services.get_case_report.get({}, context)
```

#### Input
* input `object`
  * p_id `string`: Case Number. Enter the case number identifier to retrieve the case report.
  * output `string` (values: JSONP, JSON, XML): Output Format Flag.  Enter one of the following keywords:
  * callback `string`: JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.

#### Output
* output `object`: Service call container.
  * Results **required** [crs1_Results](#crs1_results)

### case_rest_services.get_case_report.post
The get_case_report service endpoint returns a complex object of civil enforcement case details based on the provided case id.


```js
epa_gov_case.case_rest_services.get_case_report.post({}, context)
```

#### Input
* input `object`
  * p_id `string`: Case Number. Enter the case number identifier to retrieve the case report.
  * output `string` (values: JSONP, JSON, XML): Output Format Flag.  Enter one of the following keywords:
  * callback `string`: JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.

#### Output
* output `object`: Service call container.
  * Results **required** [crs1_Results](#crs1_results)

### case_rest_services.get_cases.get
The get_cases service end point searches for civil enforcement and criminal cases based on the provided selection criteria.


```js
epa_gov_case.case_rest_services.get_cases.get({}, context)
```

#### Input
* input `object`
  * output `string` (values: JSONP, JSON, XML): Output Format Flag.  Enter one of the following keywords:
  * p_case_category `string`: Case Category Filter.  Enter one or more case category codes to filter results.   Provide multiple values as a comma-delimited list.
  * p_case_status `string`: Case Status Code Filter.  Enter one or more case status codes to limit results.  Provide multiple values as a comma-delimited list.
  * p_milestone `string`: Administrative or Judicial Milestone Filter.  Enter one or milestone values to restrict results.  Provide multiple values as a comma-delimited list.
  * p_from_date `string`: Administrative or Judicial Milestone Date Range Start Limiter.  Enter a date value in MM/DD/YYYY format to limit milestone results.  Parameter p_to_date must also be populated when using this parameter option.
  * p_to_date `string`: Administrative or Judicial Milestone Date Range End Limiter.  Enter a date value in MM/DD/YYYY format to limit milestone results.  Parameter p_from_date must also be populated when using this parameter option.
  * p_milestone_fy `string`: Administrative or Judicial Milestone Fiscal Year Limiter.  Enter a single fiscal year value to limit milestone searches to a given fiscal year.
  * p_name `string`: Case Name Filter.  Enter one or more case names to restrict results.  Provide multiple values as a comma-delimited list.  When using this parameter the p_name_type parameter is required.
  * p_name_type `string`: Case Name Filter Modifier.
  * p_case_number `string`: Case Number Filter.  Enter one or more case numbers to restrict results.  Provide multiple values as a comma-delimited list.
  * p_docket_number `string`: DOJ Docket Number Filter.  Enter a single docket number or partial docket number to restrict results.  Use "%" as a wildcard for more complex filtering.
  * p_activity_number `string`: Case Activity Number Filter.  Enter a single case activity number to filter results.
  * p_case_lead `string` (values: E, S): Case Lead Limiter.  Enter E or S to limit results.
  * p_case_sens_flg `string`: Case Sensitive Data Flag.  Enter a Y or N to include or exclude cases with sensitive data.
  * p_region `string` (values: 01, 02, 03, 04, 05, 06, 07, 08, 09, 10): EPA Region Filter. Provide a single value of 01 thru 10 to restrict results to a single EPA region.
  * p_state `string`: Case Location State Filter.  Enter one or more state USPS postal codes to filter results.  Provide multiple values as a comma-delimited list.
  * p_district `string`: Case Location Court District Limiter.  Enter a single state court district code to limit results.
  * p_sic `string`: Standard Industrial Classification (SIC) Code Filter.  Enter a single 4-digit SIC Code to filter results.
  * p_sic_ao_naics `string` (values: AND, OR): Case Location SIC/NAICS And/Or Modifier.  Enter either AND or OR to govern the search logic of SIC and NAICS codes.
  * p_sic_primary_flg `string` (values: Y, N): Case Location Primary SIC Flag.  Enter Y to limit SIC search results to primary SIC codes only.
  * p_sic_frs_flg `string` (values: Y, N): Case Location Extended FRS SIC Search Flag.  Enter Y to expand SIC search to include Federal Registry Service datasets.
  * p_naics `string`: North American Industry Classification System Filter. Enter two to six digits to filter results to facilities having matching NAICS codes.  Digits less than six will match to all codes beginning with the provided values.
  * p_naics_primary_flg `string` (values: Y, N): Case Location Primary NAICS Flag.  Enter Y to limit NAICS search results to primary NAICS codes only.
  * p_naics_frs_flg `string` (values: Y, N): Case Location Extended FRS NAICS Search Flag.  Enter Y to expand NAICS search to include Federal Registry Service datasets.
  * p_enf_type `string`: Case Enforcement Type Filter. Enter one or more case enforcement type codes to limit results.  Provide multiple values as a comma-delimited list.
  * p_law `string`: Law Statute Code Filter.  Enter a single statute code to limit results.
  * p_section `string`: Law Section Code Filter. Enter one or more law section codes to limit results.  Provide multiple values as a comma-delimited list.
  * p_cp_citation `string`: Law Section Code Filter Alternative. Enter a single law section code to limit results.  This parameter accepts partial codes and allows for advanced search modifiers.
  * p_rank_order `string` (values: 1, 0): Law Status Rank Order Limiter.  Enter a single integer rank order to limit results.
  * p_enf_program `string`: Enforcement Program Code Limiter.  Enter one or more enforcement program codes to limit results.  Provide multiple values as a comma-delimited list.  
  * p_violation `string`: Violation Type Code Filter.  Enter one or more violation type codes to limit results.  Provide multiple values as a comma-delimited list.
  * p_priority_area `string`: Case Priority Area Filter.  Enter one or more case priority areas to limit results.  Provide multiple values as a comma-delimited list.
  * p_priority_area_desc `string`: Case Priority Area Description Filter.  Enter a single case priority area description or partial case priority area description to limit results.  Use "%" as a wild-card match for more complex searches.
  * p_tribal `string` (values: Y, N): Case Location Tribal Land Flag.  Enter Y or N to include or disallow cases on tribal land.
  * p_oeca_core `string` (values: Y, N): OECA Core Program Flag.  Enter Y or N to include or exclude core program cases.
  * p_multimedia `string` (values: Y, N): Enforcement Multimedia Case Flag.  Enter Y or N to include or exclude multimedia cases.
  * p_fed_case `string` (values: Y, N): Federal Facility Involvement Flag.  Enter a Y or N to include or exclude cases involving federal facilities.
  * p_activity_contact `string`: Activity Contact Last Name Filter.  Enter a single last name or partial last name to filter results.  Use "%" as a wild-card for advanced searching.
  * p_role `string`: Activity Contact Role Code Filter.  Enter a single role code to restrict results.
  * p_fed_penalty `string` (values: ANY, LE5000, GT5000, GT50000, GT100000, GT500000, GT1000000, GT2500000): Federal Penalty Assessed Amount Filter.  Provide one of the following keywords to restrict results.
  * p_total_fed_penalty `string`: Total Federal Penalty Limiter.  Enter a keyword value to limit results to cases with given total federal penalties.
  * p_cost_recovery `string`: Cost Recovery Awarded Amount Limiter.  Enter a keyword value to limit results to cases with given cost recovery amounts.
  * p_total_cost_recovery `string`: Total Cost Recovery Amount Limiter.  Enter a keyword value to limit results to cases with given cost recovery amounts.
  * p_complying_actions `string`: Complying Actions Type Code Limiter.  Enter one or more complying action codes to restrict results.  Provide multiple values as a comma-delimited list.
  * p_comp_act_val `string` (values: ANY, LE5000, GT5000, GT100000, GT1000000, GT50000000): Compliance Action Cost Limiter. Enter a keyword value to limit results to cases with given compliance cost amounts.
  * p_total_comp_act_val `string`: Total Compliance Action Amount Limiter.  Enter a keyword value to limit results to cases with given total compliance action amounts.
  * p_sep_cats `string`: Supplemental Environmental Projects Activity Category Code Limiter.  Provide one or more SEP activity category codes to limit results.  Provide multiple values as a comma-delimited list.
  * p_sep_val `string` (values: ANY, LE10000, GT10000, GT50000, GT100000, GT500000, GT1000000): Supplemental Environmental Projects Activity Value Limiter.  Provide a keyword to limit results.
  * p_total_sep_val `string`: Supplemental Environmental Projects Total Value Limiter.  Provide a keyword to limit results.
  * p_lodged_date `string`: Settlement Lodged Date Limiter.  Enter a single settlement lodged date in MM/DD/YYYY format to limit results.
  * p_entered_date `string`: Settlement Entered Date Limiter.  Enter a single settlement entered date in MM/DD/YYYY format to limit results.
  * p_facility_id `string`: Case Facility Registration Identifier Limiter.  Enter a single complete facility identifier to limit results.
  * p_fac_city `string`: Case Facility City Limiter.  Enter a single complete city name to filter cases by facility location city.
  * p_fac_zip `string`: Case Facility ZIP Code Limiter.  Enter a single 5-digit zip code to filter cases by facility location zip code.
  * p_fac_county `string`: Case Facility County Limiter.  Enter a single complete county name to filter cases by facility location county name.
  * p_case_summary `string`: Case Summary Search Limiter.  Enter a single case summary to limit results.  This parameter accepts partial codes and allows for advanced search modifiers.
  * p_usmex `string` (values: Y, N): US-Mexico Border Flag.  Enter Y/N to restrict searches to facilities located within 100KM of the border.
  * p_c1lat `number`: In decimal degrees.  Latitude of 1st corner of box that bounds the resulting facilities. The latitude and longitude of both corners of the bounding box must be provided.
  * p_c1lon `number`: In decimal degrees.  Longitude of 1st corner of box that bounds the resulting facilities. The latitude and longitude of both corners of the bounding box must be provided.
  * p_c2lat `number`: In decimal degrees.  Latitude of 2nd corner of box that bounds the resulting facilities. The latitude and longitude of both corners of the bounding box must be provided.
  * p_c2lon `number`: In decimal degrees.  Longitude of 2nd corner of box that bounds the resulting facilities. The latitude and longitude of both corners of the bounding box must be provided.
  * p_voluntary `string`: Voluntary Self Disclosure Flag.  Enter Y or N to include or exclude cases results having voluntary disclosure.
  * p_fed_indicator `string`: Federal Facility/Cross Media Flag.  Enter Y or N to limit results to cases with federal facility cross media.
  * p_fntype `string` (values: ALL, CONTAINS, EXACT, BEGINS): Controls type of text search performed on facility name with parameter p_fn.
  * p_civil_criminal_indicator `string` (values: CI, CR, ALL): Civil/Criminal Case Limiter.  Provide a keyword to limit results.
  * queryset `number`: Query Limiter.  Enter a value to limit the number of records returned for each query. Value cannot exceed 70,000.
  * responseset `number`: Response Set Limiter. Enter a value to limit the number of records per page. Value cannot exceed 1,000.
  * maplist `string` (values: Y, N): Map List Flag.  Provide a Y to return mappable coordinates representing the full geographic extent of the queryset (all facilities that met the selection criteria).
  * tablelist `string` (values: Y, N): Table List Flag. Enter a Y to display the first page of facility results.
  * callback `string`: JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.
  * qcolumns `string`: Used to cutomize service output.  A list of comma-separated column IDs of output objects that will be returned in the service query object or download.  Use the metadata service endpoint for a complete list of Ids and definitions.

#### Output
* output `object`: Service call container.
  * Results **required** [crs2_Results](#crs2_results)

### case_rest_services.get_cases.post
The get_cases service end point searches for civil enforcement and criminal cases based on the provided selection criteria.


```js
epa_gov_case.case_rest_services.get_cases.post({}, context)
```

#### Input
* input `object`
  * output `string` (values: JSONP, JSON, XML): Output Format Flag.  Enter one of the following keywords:
  * p_case_category `string`: Case Category Filter.  Enter one or more case category codes to filter results.   Provide multiple values as a comma-delimited list.
  * p_case_status `string`: Case Status Code Filter.  Enter one or more case status codes to limit results.  Provide multiple values as a comma-delimited list.
  * p_milestone `string`: Administrative or Judicial Milestone Filter.  Enter one or milestone values to restrict results.  Provide multiple values as a comma-delimited list.
  * p_from_date `string`: Administrative or Judicial Milestone Date Range Start Limiter.  Enter a date value in MM/DD/YYYY format to limit milestone results.  Parameter p_to_date must also be populated when using this parameter option.
  * p_to_date `string`: Administrative or Judicial Milestone Date Range End Limiter.  Enter a date value in MM/DD/YYYY format to limit milestone results.  Parameter p_from_date must also be populated when using this parameter option.
  * p_milestone_fy `string`: Administrative or Judicial Milestone Fiscal Year Limiter.  Enter a single fiscal year value to limit milestone searches to a given fiscal year.
  * p_name `string`: Case Name Filter.  Enter one or more case names to restrict results.  Provide multiple values as a comma-delimited list.  When using this parameter the p_name_type parameter is required.
  * p_name_type `string`: Case Name Filter Modifier.
  * p_case_number `string`: Case Number Filter.  Enter one or more case numbers to restrict results.  Provide multiple values as a comma-delimited list.
  * p_docket_number `string`: DOJ Docket Number Filter.  Enter a single docket number or partial docket number to restrict results.  Use "%" as a wildcard for more complex filtering.
  * p_activity_number `string`: Case Activity Number Filter.  Enter a single case activity number to filter results.
  * p_case_lead `string` (values: E, S): Case Lead Limiter.  Enter E or S to limit results.
  * p_case_sens_flg `string`: Case Sensitive Data Flag.  Enter a Y or N to include or exclude cases with sensitive data.
  * p_region `string` (values: 01, 02, 03, 04, 05, 06, 07, 08, 09, 10): EPA Region Filter. Provide a single value of 01 thru 10 to restrict results to a single EPA region.
  * p_state `string`: Case Location State Filter.  Enter one or more state USPS postal codes to filter results.  Provide multiple values as a comma-delimited list.
  * p_district `string`: Case Location Court District Limiter.  Enter a single state court district code to limit results.
  * p_sic `string`: Standard Industrial Classification (SIC) Code Filter.  Enter a single 4-digit SIC Code to filter results.
  * p_sic_ao_naics `string` (values: AND, OR): Case Location SIC/NAICS And/Or Modifier.  Enter either AND or OR to govern the search logic of SIC and NAICS codes.
  * p_sic_primary_flg `string` (values: Y, N): Case Location Primary SIC Flag.  Enter Y to limit SIC search results to primary SIC codes only.
  * p_sic_frs_flg `string` (values: Y, N): Case Location Extended FRS SIC Search Flag.  Enter Y to expand SIC search to include Federal Registry Service datasets.
  * p_naics `string`: North American Industry Classification System Filter. Enter two to six digits to filter results to facilities having matching NAICS codes.  Digits less than six will match to all codes beginning with the provided values.
  * p_naics_primary_flg `string` (values: Y, N): Case Location Primary NAICS Flag.  Enter Y to limit NAICS search results to primary NAICS codes only.
  * p_naics_frs_flg `string` (values: Y, N): Case Location Extended FRS NAICS Search Flag.  Enter Y to expand NAICS search to include Federal Registry Service datasets.
  * p_enf_type `string`: Case Enforcement Type Filter. Enter one or more case enforcement type codes to limit results.  Provide multiple values as a comma-delimited list.
  * p_law `string`: Law Statute Code Filter.  Enter a single statute code to limit results.
  * p_section `string`: Law Section Code Filter. Enter one or more law section codes to limit results.  Provide multiple values as a comma-delimited list.
  * p_cp_citation `string`: Law Section Code Filter Alternative. Enter a single law section code to limit results.  This parameter accepts partial codes and allows for advanced search modifiers.
  * p_rank_order `string` (values: 1, 0): Law Status Rank Order Limiter.  Enter a single integer rank order to limit results.
  * p_enf_program `string`: Enforcement Program Code Limiter.  Enter one or more enforcement program codes to limit results.  Provide multiple values as a comma-delimited list.  
  * p_violation `string`: Violation Type Code Filter.  Enter one or more violation type codes to limit results.  Provide multiple values as a comma-delimited list.
  * p_priority_area `string`: Case Priority Area Filter.  Enter one or more case priority areas to limit results.  Provide multiple values as a comma-delimited list.
  * p_priority_area_desc `string`: Case Priority Area Description Filter.  Enter a single case priority area description or partial case priority area description to limit results.  Use "%" as a wild-card match for more complex searches.
  * p_tribal `string` (values: Y, N): Case Location Tribal Land Flag.  Enter Y or N to include or disallow cases on tribal land.
  * p_oeca_core `string` (values: Y, N): OECA Core Program Flag.  Enter Y or N to include or exclude core program cases.
  * p_multimedia `string` (values: Y, N): Enforcement Multimedia Case Flag.  Enter Y or N to include or exclude multimedia cases.
  * p_fed_case `string` (values: Y, N): Federal Facility Involvement Flag.  Enter a Y or N to include or exclude cases involving federal facilities.
  * p_activity_contact `string`: Activity Contact Last Name Filter.  Enter a single last name or partial last name to filter results.  Use "%" as a wild-card for advanced searching.
  * p_role `string`: Activity Contact Role Code Filter.  Enter a single role code to restrict results.
  * p_fed_penalty `string` (values: ANY, LE5000, GT5000, GT50000, GT100000, GT500000, GT1000000, GT2500000): Federal Penalty Assessed Amount Filter.  Provide one of the following keywords to restrict results.
  * p_total_fed_penalty `string`: Total Federal Penalty Limiter.  Enter a keyword value to limit results to cases with given total federal penalties.
  * p_cost_recovery `string`: Cost Recovery Awarded Amount Limiter.  Enter a keyword value to limit results to cases with given cost recovery amounts.
  * p_total_cost_recovery `string`: Total Cost Recovery Amount Limiter.  Enter a keyword value to limit results to cases with given cost recovery amounts.
  * p_complying_actions `string`: Complying Actions Type Code Limiter.  Enter one or more complying action codes to restrict results.  Provide multiple values as a comma-delimited list.
  * p_comp_act_val `string` (values: ANY, LE5000, GT5000, GT100000, GT1000000, GT50000000): Compliance Action Cost Limiter. Enter a keyword value to limit results to cases with given compliance cost amounts.
  * p_total_comp_act_val `string`: Total Compliance Action Amount Limiter.  Enter a keyword value to limit results to cases with given total compliance action amounts.
  * p_sep_cats `string`: Supplemental Environmental Projects Activity Category Code Limiter.  Provide one or more SEP activity category codes to limit results.  Provide multiple values as a comma-delimited list.
  * p_sep_val `string` (values: ANY, LE10000, GT10000, GT50000, GT100000, GT500000, GT1000000): Supplemental Environmental Projects Activity Value Limiter.  Provide a keyword to limit results.
  * p_total_sep_val `string`: Supplemental Environmental Projects Total Value Limiter.  Provide a keyword to limit results.
  * p_lodged_date `string`: Settlement Lodged Date Limiter.  Enter a single settlement lodged date in MM/DD/YYYY format to limit results.
  * p_entered_date `string`: Settlement Entered Date Limiter.  Enter a single settlement entered date in MM/DD/YYYY format to limit results.
  * p_facility_id `string`: Case Facility Registration Identifier Limiter.  Enter a single complete facility identifier to limit results.
  * p_fac_city `string`: Case Facility City Limiter.  Enter a single complete city name to filter cases by facility location city.
  * p_fac_zip `string`: Case Facility ZIP Code Limiter.  Enter a single 5-digit zip code to filter cases by facility location zip code.
  * p_fac_county `string`: Case Facility County Limiter.  Enter a single complete county name to filter cases by facility location county name.
  * p_case_summary `string`: Case Summary Search Limiter.  Enter a single case summary to limit results.  This parameter accepts partial codes and allows for advanced search modifiers.
  * p_usmex `string` (values: Y, N): US-Mexico Border Flag.  Enter Y/N to restrict searches to facilities located within 100KM of the border.
  * p_c1lat `number`: In decimal degrees.  Latitude of 1st corner of box that bounds the resulting facilities. The latitude and longitude of both corners of the bounding box must be provided.
  * p_c1lon `number`: In decimal degrees.  Longitude of 1st corner of box that bounds the resulting facilities. The latitude and longitude of both corners of the bounding box must be provided.
  * p_c2lat `number`: In decimal degrees.  Latitude of 2nd corner of box that bounds the resulting facilities. The latitude and longitude of both corners of the bounding box must be provided.
  * p_c2lon `number`: In decimal degrees.  Longitude of 2nd corner of box that bounds the resulting facilities. The latitude and longitude of both corners of the bounding box must be provided.
  * p_voluntary `string`: Voluntary Self Disclosure Flag.  Enter Y or N to include or exclude cases results having voluntary disclosure.
  * p_fed_indicator `string`: Federal Facility/Cross Media Flag.  Enter Y or N to limit results to cases with federal facility cross media.
  * p_fntype `string` (values: ALL, CONTAINS, EXACT, BEGINS): Controls type of text search performed on facility name with parameter p_fn.
  * p_civil_criminal_indicator `string` (values: CI, CR, ALL): Civil/Criminal Case Limiter.  Provide a keyword to limit results.
  * queryset `number`: Query Limiter.  Enter a value to limit the number of records returned for each query. Value cannot exceed 70,000.
  * responseset `number`: Response Set Limiter. Enter a value to limit the number of records per page. Value cannot exceed 1,000.
  * maplist `string` (values: Y, N): Map List Flag.  Provide a Y to return mappable coordinates representing the full geographic extent of the queryset (all facilities that met the selection criteria).
  * tablelist `string` (values: Y, N): Table List Flag. Enter a Y to display the first page of facility results.
  * callback `string`: JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.
  * qcolumns `string`: Used to cutomize service output.  A list of comma-separated column IDs of output objects that will be returned in the service query object or download.  Use the metadata service endpoint for a complete list of Ids and definitions.

#### Output
* output `object`: Service call container.
  * Results **required** [crs2_Results](#crs2_results)

### case_rest_services.get_crcase_report.get
The get_crcase_report service end point returns a complex object of criminal case detials based on the provided criminal case id.


```js
epa_gov_case.case_rest_services.get_crcase_report.get({}, context)
```

#### Input
* input `object`
  * p_id `string`: Prosecution Summary Identifier. Enter the numeric prosecution summary identifier to retrieve the criminal case report.
  * output `string` (values: JSONP, JSON, XML): Output Format Flag.  Enter one of the following keywords:
  * callback `string`: JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.

#### Output
* output `object`: Service call container.
  * Results **required** [crs3_Results](#crs3_results)

### case_rest_services.get_crcase_report.post
The get_crcase_report service end point returns a complex object of criminal case detials based on the provided criminal case id.


```js
epa_gov_case.case_rest_services.get_crcase_report.post({}, context)
```

#### Input
* input `object`
  * p_id `string`: Prosecution Summary Identifier. Enter the numeric prosecution summary identifier to retrieve the criminal case report.
  * output `string` (values: JSONP, JSON, XML): Output Format Flag.  Enter one of the following keywords:
  * callback `string`: JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.

#### Output
* output `object`: Service call container.
  * Results **required** [crs3_Results](#crs3_results)

### case_rest_services.get_download.get
Based on the QID obtained from a get_cases query, return a comma separated value (CSV) file of the cases found.


```js
epa_gov_case.case_rest_services.get_download.get({
  "qid": ""
}, context)
```

#### Input
* input `object`
  * output `string`: Output Format Flag.  Enter one of the following keywords:
  * qid **required** `string`: Query ID Selector.  Enter the QueryID number from a previously run query.
  * qcolumns `string`: Used to cutomize service output.  A list of comma-separated column IDs of output objects that will be returned in the service query object or download.  Use the metadata service endpoint for a complete list of Ids and definitions.

#### Output
* output `file`

### case_rest_services.get_download.post
Based on the QID obtained from a get_cases query, return a comma separated value (CSV) file of the cases found.


```js
epa_gov_case.case_rest_services.get_download.post({
  "qid": ""
}, context)
```

#### Input
* input `object`
  * output `string`: Output Format Flag.  Enter one of the following keywords:
  * qid **required** `string`: Query ID Selector.  Enter the QueryID number from a previously run query.
  * qcolumns `string`: Used to cutomize service output.  A list of comma-separated column IDs of output objects that will be returned in the service query object or download.  Use the metadata service endpoint for a complete list of Ids and definitions.

#### Output
* output `file`

### case_rest_services.get_map.get
The purpose of the GET_MAP service is to display facility coordinates and facility clusters related to a get_cases query. Currently, the maximum number of coordinates returned is 500. GET_MAP performs automatic clustering at the state, county, and zip code levels to maximize the number of coordinates returned.


```js
epa_gov_case.case_rest_services.get_map.get({
  "qid": ""
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

#### Output
* output `object`: Service call container.
  * MapOutput **required** [crs0_MapOutput](#crs0_mapoutput)

### case_rest_services.get_map.post
The purpose of the GET_MAP service is to display facility coordinates and facility clusters related to a get_cases query. Currently, the maximum number of coordinates returned is 500. GET_MAP performs automatic clustering at the state, county, and zip code levels to maximize the number of coordinates returned.


```js
epa_gov_case.case_rest_services.get_map.post({
  "qid": ""
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

#### Output
* output `object`: Service call container.
  * MapOutput **required** [crs0_MapOutput](#crs0_mapoutput)

### case_rest_services.get_qid.get
GET_QID is passed with a query ID corresponding to a previously run get_cases query. It then returns a CASES object containing all matching cases. The main purpose of GET_QID is for large querysets that contain multiple pages (responsesets) of output. GET_QID allows for pagination and for the selection and sorting of columns. 


```js
epa_gov_case.case_rest_services.get_qid.get({
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
  * qcolumns `string`: Used to cutomize service output.  A list of comma-separated column IDs of output objects that will be returned in the service query object or download.  Use the metadata service endpoint for a complete list of Ids and definitions.

#### Output
* output `object`: Service call container.
  * Results **required** [crs5_Results](#crs5_results)

### case_rest_services.get_qid.post
GET_QID is passed with a query ID corresponding to a previously run get_cases query. It then returns a CASES object containing all matching cases. The main purpose of GET_QID is for large querysets that contain multiple pages (responsesets) of output. GET_QID allows for pagination and for the selection and sorting of columns. 


```js
epa_gov_case.case_rest_services.get_qid.post({
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
  * qcolumns `string`: Used to cutomize service output.  A list of comma-separated column IDs of output objects that will be returned in the service query object or download.  Use the metadata service endpoint for a complete list of Ids and definitions.

#### Output
* output `object`: Service call container.
  * Results **required** [crs5_Results](#crs5_results)

### case_rest_services.metadata.get
Returns the JSON Object Name and ColumnId for usage with the qcolumns parameter for get_cases endpoint.


```js
epa_gov_case.case_rest_services.metadata.get({}, context)
```

#### Input
* input `object`
  * output `string` (values: JSONP, JSON, XML): Output Format Flag.  Enter one of the following keywords:
  * callback `string`: JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.

#### Output
* output `object`: Root Object
  * Results **required** [met_Results](#met_results)

### case_rest_services.metadata.post
Returns the JSON Object Name and ColumnId for usage with the qcolumns parameter for get_cases endpoint.


```js
epa_gov_case.case_rest_services.metadata.post({}, context)
```

#### Input
* input `object`
  * output `string` (values: JSONP, JSON, XML): Output Format Flag.  Enter one of the following keywords:
  * callback `string`: JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.

#### Output
* output `object`: Root Object
  * Results **required** [met_Results](#met_results)

### rest_lookups.icis_law_sections.get
Returns the ICIS Law Section Descriptions.


```js
epa_gov_case.rest_lookups.icis_law_sections.get({}, context)
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
  * Results **required** [rlk51_Results](#rlk51_results)

### rest_lookups.icis_law_sections.post
Returns the ICIS Law Section Descriptions.


```js
epa_gov_case.rest_lookups.icis_law_sections.post({}, context)
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
  * Results **required** [rlk51_Results](#rlk51_results)



## Definitions

### crs0_Cases
* crs0_Cases `object`: A summary of the violation(s), environmental problem(s), and a description of the cause of action.
  * ActivityId **required** `string`: The unique, system-generated identifier for an activity performed at or related to a particular site or Facility.
  * CaseCategoryCode **required** `string`: A three-character code that identifies the type of ICIS activity, which includes general categories such as information requests, inspections, compliance determinations, and enforcement.  Activities selected for the ECHO data download are restricted to two subcategories of enforcement:  administrative – formal (AFR), and judicial activities (JDC).
  * CaseCategoryDesc **required** `string`: Identifies the type of action based on the enforcement authority used.  
  * CaseName **required** `string`: A unique number identifying the enforcement action. For EPA civil cases, these numbers begin with either the two digit EPA Region Code, "HQ" (headquarters initiated cases), and "EF" or "WF" (Eastern or Western Field Office CAA Mobile Source Program cases); followed by the fiscal year in which the action was initiated. After the fiscal year there is a sequence number. State NPDES civil cases start with the two character post abbreviation, followed by a sequence number.
  * CaseNumber **required** `string`: A unique number identifying the enforcement action. For EPA civil cases, these numbers begin with either the two digit EPA Region Code, "HQ" (headquarters initiated cases), and "EF" or "WF" (Eastern or Western Field Office CAA Mobile Source Program cases); followed by the fiscal year in which the action was initiated. After the fiscal year there is a sequence number. State NPDES civil cases start with the two character post abbreviation, followed by a sequence number.
  * CaseStatusCode **required** `string`: Code identifying the current status of an activity.
  * CaseStatusDesc **required** `string`: The description that identifies the current status of an activity.
  * CivilCriminalIndicator **required** `string`: Civil vs. Criminal Indicator.
  * CostRecovery **required** `string`: For civil enforcement actions, cost recovery awarded is the amount of cost recovery ordered or agreed to be repaid by the responsible party of parties.
  * DOJDocketNmbr **required** `string`: The docket number assigned by the Department of Justice to EPA's Enforcement Action.  This number will identify cases in the Federal Register and in DOJ press releases when a settlement is lodged and entered.
  * DateClosed **required** `string`: The date the actions requested in the final order have been completed by the recipient; or the termination date of the final order (if such a date is specified) has passed; or the enforcement action has been withdrawn or dismissed; or the enforcement action has been superseded by, or combined into, another related enforcement action addressing the same violations.
  * DateFiled **required** `string`: The filed/issued date can have different meanings depending on the Case Category. The date the judicial complaint is filed in U.S. District Court by the U.S. Attorney. The date that an administrative order is issued or the administrative complaint is filed.
  * DateLodged **required** `string`: The date a proposed consent decree is given to the Clerk of the Court for lodging in the District Court.  Upon lodging a consent decree, a notice is published in the Federal Register indicating nature of the proposed settlement and the acceptance period for public comments.
  * EnfOutcome **required** `string`: The result of the enforcement action.
  * FedPenalty **required** `string`: For civil judicial Enforcement Actions, this amount is the Federal penalty assessed against the defendant(s) as specified in the final entered Consent Decree or Court Order.  For administrative Enforcement Actions, it is the penalty assessed in the Consent/Final Order.  It does not include the amount of the penalty mitigated due to a SEP or the amount shared with the state or local entities.  Interest payments associated with a penalty paid over time are not to be included in this amount.  It is the total Federal amount for each Final Order.
  * Lead **required** `string`: The lead agency (e.g., EPA, State) conducting the inspection
  * MaxScore **required** `string`: [Col. 121]
  * PrimaryLaw **required** `string`: Identifies the primary statute/law violated and cited in the enforcement action. Many of EPA's judicial actions are based on incidents that are violations of more than one statute. One law entered into the ICIS record is designated the primary law, which is considered the law that is most seriously violated and/or for which the most significant relief is sought.
  * PrimaryNAICSCode **required** `string`: A 6-digit code to classify industrial establishments, as identified in FRS. North American Industry Classification System (NAICS) has replaced the U.S. Standard Industrial Classification (SIC) system. For detailed information about NAICS, please refer to the U.S. Census Bureau NAICS webpage.
  * PrimarySICCode **required** `string`: The Standard Industrial Classification (SIC) system code of the facility, as identified in FRS. SIC codes were established by the Census Bureau to identify processes, products and services. The SIC code describes the primary activity of the facility. The first two digits in the code define a major business sector; the last two digits denote a facility's specialty within the major sector.
  * PrimarySection **required** `string`: Identifies the primary section violated and cited in the enforcement action.
  * ProsecutionSummaryId **required** `string`: Prosecution Summary Identifier.
  * SEPCategories **required** `string`: For civil enforcement actions, as part of a settlement, a defendant may voluntarily agree to undertake an environmentally beneficial project (Supplement Environmental Project) related to the violation in exchange for mitigation of the penalty to be paid.  It may not include activities a defendant must take to return to compliance with the law. The EPA has set out eight categories that can be acceptable SEPs:
  * SEPCost **required** `string`: The total value of all SEPs for all settlements at the enforcement case.
  * SEPTexts **required** `string`: A description of the SEP. These actions do not include activities a violator must take to return to compliance with the law.
  * SettlementCnt **required** `string`: For civil enforcement actions, the number of settlements associated with the case. Most enforcement actions tend to follow a one-case, one-settlement scenario. However, and in particular with judicial actions involving multiple defendants, more than one settlement may result.
  * SettlementDate **required** `string`: For federal judicial actions, this is the date the settlement document is signed by the presiding judge and entered by the Clerk of the Court. At that point, the settlement becomes a binding court order. For administrative actions, this is the date that the final order is signed and issued by the enforcement authority.
  * StateLocPenaltyAmt **required** `string`
  * TotalCompActionAmt **required** `string`: For civil enforcement actions, the value of the costs incurred by the defendant/respondent to attain compliance with the law and restore the environment. This value does not include penalties, cost recovery, or costs associated with SEPs.
  * TribalLandFlag **required** `string`: Flag indicating if the case is located on tribal land.

### crs0_MapData
* crs0_MapData `object`: Data container providing locational information for each case.
  * ICON **required** `string`: Name of each individual icon file within the URL base
  * LAT **required** `string`: The latitude of the facility in degrees, to four decimal places
  * LON **required** `string`: The longitude of the facility in degrees, to four decimal places
  * NAME **required** `string`: For DFR, this is the Facility name. The name corresponds to the TYPE value
  * PUV **required** `string`: Pop up value. Combine with PopUpBaseURL to give the popup for the facility
  * TYPE **required** `string`: For DFR, this is always facility

### crs0_MapOutput
* crs0_MapOutput `object`: Data container for visualizing case information.
  * IconBaseURL **required** `string`: URL where all the icons are located
  * MapData **required** `array`
    * items [crs0_MapData](#crs0_mapdata)
  * PopUpBaseURL **required** `string`: Combine this URL with the PUC to get popup info
  * QueryID **required** `string`: Sequential number assigned to entire search result

### crs1_CAEDDocuments
* crs1_CAEDDocuments `object`
  * Dummy `string`

### crs1_CaseInformation
* crs1_CaseInformation `object`: The basic information section contains information that identifies the action and some key descriptive variables, such as case status and case type.
  * Branch **required** `string`: The Branch or Unit of the Office of Regional Counsel assigned for the case.
  * CaseName **required** `string`: A unique number identifying the enforcement action. For EPA civil cases, these numbers begin with either the two digit EPA Region Code, "HQ" (headquarters initiated cases), and "EF" or "WF" (Eastern or Western Field Office CAA Mobile Source Program cases); followed by the fiscal year in which the action was initiated. After the fiscal year there is a sequence number. State NPDES civil cases start with the two character post abbreviation, followed by a sequence number.
  * CaseNumber **required** `string`: A unique number identifying the enforcement action. For EPA civil cases, these numbers begin with either the two digit EPA Region Code, "HQ" (headquarters initiated cases), and "EF" or "WF" (Eastern or Western Field Office CAA Mobile Source Program cases); followed by the fiscal year in which the action was initiated. After the fiscal year there is a sequence number. State NPDES civil cases start with the two character post abbreviation, followed by a sequence number.
  * CaseStatus **required** `string`: The status of the compliance event or enforcement action.
  * CaseStatusDate **required** `string`: The date of the most recent milestone activity.
  * CaseSummary **required** `string`: The summary of the violation environmental problem and a description of the cause of action (basis of legal action).  The summary could be extracted from the referral transmission memo or letter or it could be required as the first section of a revised standardized referral document.
  * CaseType **required** `string`: The unique code that identifies a type of compliance event or enforcement action.
  * DOJDocketNumber **required** `string`: The docket number assigned by the Department of Justice to EPA's Enforcement Action.
  * EnforcementOutcome **required** `string`: A description of the mechanism by which the Enforcement Action is resolved.
  * EnforcementType **required** `string`: A text description of the Enforcement Action type.
  * HeadquartersDivision **required** `string`: The EPA Headquarters division that is tracking the case.
  * Lead **required** `string`: The lead agency (e.g., EPA, State) conducting the inspection
  * MultiMediaCase **required** `string`: The flag indicating whether the activity was a multimedia action.
  * RegionalDocketNumber **required** `string`: The number the Clerk of the Court assigns to a case that is filed or to a consent decree when it is lodged.  For administrative cases, it is the number assigned to the case by the Regional Hearing Clerk.
  * ReliefSought **required** `string`: The description for the type of relief requested in the complaint.
  * ResultVolDisclosure **required** `string`: A flag that indicates the Enforcement Action was the result of a self disclosure.
  * TotalComplianceActionCost **required** `string`: The estimated dollar value of injunctive relief and other physical/nonphysical costs of returning to compliance, from all settlements at a case. Injunctive relief represents the actions a defendant is ordered to undertake to achieve and maintain compliance, such as installing a new pollution control device to reduce air pollution, or preventing emissions of a pollutant in the first place.
  * TotalCostRecovery **required** `string`: The amount of the cost recovery ordered or agreed to be repaid by the responsible parties, cost recovery whole dollar amount awarded by the Court and due the the Superfund. For administrative cases, it is the cost recovery whole dollar amount of the Final Order.
  * TotalFederalPenalty **required** `string`: For civil judicial enforcement actions, this amount is the federal penalty assessed against the defendant(s)� as specified in the final entered Consent Decree or Court Order. For administrative enforcement actions, it is the penalty assessed in the Consent/Final Order. It does not include the amount of the penalty mitigated due to a SEP or the amount shared with the state or local entities. Interest payments associated with a penalty paid over time are not included in this amount.
  * TotalSEPCost **required** `string`: The total value of all SEPs for all settlements at the enforcement case.
  * TotalStatePenalty **required** `string`: The total dollar penalty amount from all settlements to be paid to a state or local enforcement authority that is party to a concluded enforcement action.
  * Violations **required** `string`: ???

### crs1_CaseMilestones
* crs1_CaseMilestones `object`: The major milestone events tracked for the enforcement action.
  * ActualDate **required** `string`: The actual date on which the event was completed/achieved.
  * Event **required** `string`: Identifies a major judicial or administrative enforcement action milestone.

### crs1_Citations
* crs1_Citations `object`: The corresponding regulation in the Code of Federal Regulations (CFR) or U.S. Code (U.S.C.) associated with the enforcement action.
  * Programs **required** `string`: A description of the EPA program(s) under which an enforcement action has been taken, and which correspond to the cited statutes and sections.
  * Sections **required** `string`: ???
  * Title **required** `string`: The title held by a person in an organization.

### crs1_ComplianceSchedules
* crs1_ComplianceSchedules `object`: This section provides compliance schedule milestone activity information for a subset of EPA judicial consent decrees with compliance schedules.
  * ActualDate **required** `string`: The actual date on which the Compliance Schedule event was completed/achieved.
  * EventAmount.ComplianceSchedules **required** `string`: The dollar amount of a scheduled payment initiated through a penalty action or a cost recovery pursuant to a Final Order.
  * FacilityFRSID **required** `string`: The number assigned by the Facility Linkage Application that is used to associate facility records from multiple environmental database systems that are known or believed to represent the same facility.
  * ScheduleCommentText **required** `string`: The free-text field used to store descriptive Compliance Schedule information.
  * ScheduleDate **required** `string`: The date the event is scheduled to be completed (i.e. the due date).
  * ScheduleEventDescription **required** `string`: The description of the particular event with which the permittee is scheduled to comply.
  * ScheduleNumber **required** `string`: A two-digit number which in combination with the Schedule Type and NPDES ID uniquely identifies a Compliance Schedule.

### crs1_ComplyingActions
* crs1_ComplyingActions `object`: For civil enforcement actions, the value of the costs incurred by the defendant/respondent to attain compliance with the law and restore the environment. This value does not include penalties, cost recovery, or costs associated with SEPs.
  * ComplyingActionCategory **required** `string`: The category (i.e., Direct Environmental Reduction, Preventative, or Facility Management or Information Practice) to which a Complying Action belongs.
  * ComplyingActionDescription **required** `string`: A text description of the type of the requirements obliging the defendant/respondent to take or refrain from certain actions.
  * ComplyingActionId **required** `string`: The unique identifier for an enforceable requirement obliging the defendant/respondent to take or refrain from certain specified actions.
  * ComplyingActionType **required** `string`: A code that uniquely identifies the requirements obliging the defendant/respondent to take or refrain from certain actions.

### crs1_Defendants
* crs1_Defendants `object`: This section lists each defendant's name and whether the defendant was named in the complaint and/or in the settlement.
  * DefendantName **required** `string`: The name of the defendant, or respondent associated with the Enforcement Action.
  * NamedInComplaint **required** `string`: A flag that indicates whether the Defendant or Respondent was named in the filed complaint.
  * NamedInSettlement **required** `string`: A flag that indicates whether the Defendant or Respondent was named in the Final Order.

### crs1_EnforcementConclusions
* crs1_EnforcementConclusions `object`: This section contains information about the conclusion(s) of the civil enforcement case, where it resulted in an order, consent decree, or other enforceable settlement.
  * ActualTerminationDate **required** `string`: The date on which the Final Order was terminated.
  * ComplianceActionCost **required** `string`: The total value of all SEPs for all settlements at the enforcement case.
  * ComplianceSchedules **required** `array`
    * items [crs1_ComplianceSchedules](#crs1_complianceschedules)
  * ComplyingActions **required** `array`
    * items [crs1_ComplyingActions](#crs1_complyingactions)
  * CostRecovery **required** `string`: For civil enforcement actions, cost recovery awarded is the amount of cost recovery ordered or agreed to be repaid by the responsible party of parties.
  * EnforcementActionClosedDate **required** `string`: The date the actions requested in the final order have been completed by the recipient; or the termination date of the final order (if such a date is specified) has passed; or the enforcement action has been withdrawn or dismissed; or the enforcement action has been superseded by, or combined into, another related enforcement action addressing the same violations.
  * EnforcementConclusionId **required** `string`: The system-generated unique identifier of the Final Order to which the Compliance Action belongs.
  * EnforcementConclusionName **required** `string`: The name of a Final Order associated with an Enforcement Action as assigned by the Lead EPA Attorney for federal actions.
  * EnforcementConclusionType **required** `string`: A description of the enforcement instrument used by EPA to settle the case.
  * FacilitiesInSettlement **required** `string`: The unique identification number assigned to a facility in the Facility Registry Service (FRS), for each facility included in the settlement.
  * FederalPenalty **required** `string`: For civil judicial Enforcement Actions, this amount is the Federal penalty assessed against the defendant(s) as specified in the final entered Consent Decree or Court Order.  For administrative Enforcement Actions, it is the penalty assessed in the Consent/Final Order.  It does not include the amount of the penalty mitigated due to a SEP or the amount shared with the state or local entities.  Interest payments associated with a penalty paid over time are not to be included in this amount.  It is the total Federal amount for each Final Order.
  * FinalOrderStatuses **required** `array`
    * items [crs1_FinalOrderStatuses](#crs1_finalorderstatuses)
  * PollutantReductions **required** `array`
    * items [crs1_PollutantReductions](#crs1_pollutantreductions)
  * SEPCost **required** `string`: The total value of all SEPs for all settlements at the enforcement case.
  * SettlementEnteredDate **required** `string`: The civil case date the Final Order is signed by the presiding Judge and entered by the Clerk of the Court; it is the date the Clerk stamps on the document.  For an Administrative Formal EA, this is the Final Order Issued Date; for a Judicial EA, this is the Final Order Entered Date.
  * SettlementLodgedDate **required** `string`: The date the settlement document is given to the Clerk of the Court for lodging in the District Court; it is the date the Clerk stamps on the document. (Federal Judicial EAs only).
  * StatePenalty **required** `string`: The dollar penalty amount to be paid to a state or local enforcement authority that is party to a concluded enforcement action.
  * SupplementalEnvironmentalProjects **required** `array`
    * items [crs1_SupplementalEnvironmentalProjects](#crs1_supplementalenvironmentalprojects)

### crs1_Facilities
* crs1_Facilities `object`: This section provides detailed facility and address information on all of the facilities associated with the civil enforcement case.
  * FRSNumber **required** `string`: The identification number assigned to a facility in the�Facility Registry Service (FRS)�to uniquely identify a facility site.
  * FacilityAddress **required** `string`: The address that describes the physical (geographic) location of the front door or main entrance of a Facility site, including urban-style street address or rural address.
  * FacilityCity **required** `string`: The city in which the facility is located
  * FacilityName **required** `string`: The name of the facility.
  * FacilityState **required** `string`: The state in which the facility is located
  * FacilityZip **required** `string`: The zip code of the area in which the facility is located
  * NAICSCodes **required** `string`: A 6-digit code to classify industrial establishments. For detailed information about NAICS, please refer to the U.S. Census Bureau�NAICS�webpage.
  * SICCodes **required** `string`: The Standard Industrial Classification codes applicable to the facility

### crs1_FinalOrderStatuses
* crs1_FinalOrderStatuses `object`: This section provides the compliance status for a subset of EPA judicial consent decrees with compliance schedules requiring more than three years to complete.
  * FiscalYear **required** `string`: The fiscal year in which the activity occurred.
  * Q1StatusDescription **required** `string`: The relevant status for the quarter.
  * Q2StatusDescription **required** `string`: The relevant status for the quarter.
  * Q3StatusDescription **required** `string`: The relevant status for the quarter.
  * Q4StatusDescription **required** `string`: The relevant status for the quarter.

### crs1_LawsAndSections
* crs1_LawsAndSections `object`: Identifies the statute/law and sections cited in the enforcement action.
  * Law **required** `string`: Code for the primary and non-primary laws that were violated.
  * Programs **required** `string`: A description of the EPA program(s) under which an enforcement action has been taken, and which correspond to the cited statutes and sections.
  * Sections **required** `string`: ???

### crs1_PollutantReductions
* crs1_PollutantReductions `object`: This section provides information relating complying actions and SEPs to their estimated or actual environmental impact on pollutant reduction.
  * AnnualAmount **required** `string`: The amount of reduction or elimination of each pollutant or waste in pounds, kilograms, or liquid measure that resulted from the SEP or Complying Actions.
  * ComplyingActionId **required** `string`: The unique identifier for an enforceable requirement obliging the defendant/respondent to take or refrain from certain specified actions.
  * EnvironmentalImpactId **required** `string`: The system-generated unique identifier of the Environmental Impact record.
  * Media **required** `string`: The name/description of the media where the pollutants or waste were emitted/discharged.
  * Pollutant **required** `string`: The name that EPA has selected as its preferred name for a substance (also known as registry name). If the registry name is not available, use the systematic name instead.
  * SEPId **required** `string`: The system-generated unique identifier of the SEP record affiliated with the Environmental Impact.
  * SEPorComp **required** `string`: A flag that indicates whether the quantitative environmental impact pertains to a SEP or Complying Action.
  * Units **required** `string`: A code that uniquely identifies the pollutant unit of measurement.

### crs1_Pollutants
* crs1_Pollutants `object`: The common name identifying the pollutant, waste material, substance, or chemical reduced.
  * ChemicalAbstractNumber **required** `string`: This is the unique number assigned to a chemical substance by the Chemical Abstracts Service.
  * PollutantName **required** `string`: The name designating the waste material substance or chemical involved at the facility that has a Quantitative Environmental Impact addressed in the SEP or Complying Actions.

### crs1_ProgramLinks
* crs1_ProgramLinks `object`: Crosswalk between programs and facilities (identified by FRS ID).
  * FRSNumber **required** `string`: The identification number assigned to a facility in the�Facility Registry Service (FRS)�to uniquely identify a facility site.
  * Program **required** `string`: The source database for the EPA programs information.
  * ProgramID **required** `string`: Unique identifier for the EPA program.

### crs1_RelatedActivities
* crs1_RelatedActivities `object`: This section provides an Activity Type description and date for other ICIS activities (e.g., inspections, or compliance assistance) that are linked to the enforcement action.
  * ActualDate **required** `string`: The actual date on which the event was completed/achieved.
  * Description **required** `string`: A description of the category of Supplemental Environment Project (SEP) for a settlement.

### crs1_Results
* crs1_Results `object`: The data returned by the service call.
  * CAEDDocuments **required** `array`
    * items [crs1_CAEDDocuments](#crs1_caeddocuments)
  * CaseInformation **required** [crs1_CaseInformation](#crs1_caseinformation)
  * CaseMilestones **required** `array`
    * items [crs1_CaseMilestones](#crs1_casemilestones)
  * Citations **required** `array`
    * items [crs1_Citations](#crs1_citations)
  * Defendants **required** `array`
    * items [crs1_Defendants](#crs1_defendants)
  * EnforcementConclusions **required** `array`
    * items [crs1_EnforcementConclusions](#crs1_enforcementconclusions)
  * Facilities **required** `array`
    * items [crs1_Facilities](#crs1_facilities)
  * LawsAndSections **required** `array`
    * items [crs1_LawsAndSections](#crs1_lawsandsections)
  * Message **required** `string`: Field to record messages (typically performance-related) about packet processing
  * Pollutants **required** `array`
    * items [crs1_Pollutants](#crs1_pollutants)
  * ProgramLinks **required** `array`
    * items [crs1_ProgramLinks](#crs1_programlinks)
  * RelatedActivities **required** `array`: This section provides an Activity Type description and date for other ICIS activities (e.g., inspections, or compliance assistance) that are linked to the enforcement action.
    * items [crs1_RelatedActivities](#crs1_relatedactivities)

### crs1_SupplementalEnvironmentalProjects
* crs1_SupplementalEnvironmentalProjects `object`: As part of a settlement, a defendant may voluntarily agree to undertake an environmentally beneficial project (Supplement Environmental Project) related to the violation in exchange for mitigation of the penalty to be paid. It does not include activities a defendant must take to return to compliance with the law. A single settlement may have multiple SEPs.
  * Category **required** `string`: A code that uniquely identifies a category of Supplemental Environment Project (SEP) for a settlement (e.g., Assessments and Audits, Environmental Compliance Promotion, Emergency Planning and Preparedness, Environmental Restoration).
  * Description **required** `string`: A description of the category of Supplemental Environment Project (SEP) for a settlement.
  * SEPAmount **required** `string`: The cost applied to the type(s) of environmentally beneficial projects which a defendant/respondent agree to undertake in settlement of an enforcement action, but which the defendant/respondent is not otherwise legally required to perform.
  * SEPId **required** `string`: The system-generated unique identifier of the SEP record affiliated with the Environmental Impact.
  * SEPText **required** `string`: The free-form textual description used to further describe the SEP.

### crs2_Results
* crs2_Results `object`: The data returned by the service call.
  * AFRRows **required** `string`: Displays the number of Administrative Formal cases within the search results.
  * Cases `array`: A summary of the violation(s), environmental problem(s), and a description of the cause of action.
    * items [crs0_Cases](#crs0_cases)
  * CriminalRows **required** `string`: Displays the number of criminal enforcement cases within the search results.
  * FedPenRows **required** `string`: Displays the number of cases with federal penalty assessed greater than $0.
  * JDCRows **required** `string`: Displays the number of Judicial cases within the search results.
  * MapOutput [crs0_MapOutput](#crs0_mapoutput)
  * Message **required** `string`: Field to record messages (typically performance-related) about packet processing
  * PageNo **required** `string`: The number of pages of results returned
  * QueryID **required** `string`: Sequential number assigned to entire search result
  * QueryRows **required** `string`: Number of query results returned
  * SEPRows **required** `string`: Displays the number of cases with SEP amount greater than $0.

### crs3_CRDefendants
* crs3_CRDefendants `object`: Provides identifying information about the defendants and courts involved in the criminal enforcement case.
  * DefendantType **required** `string`: The role of each defendant in the criminal enforcement case, either Principal Defendant or Defendant. Multiple defendants (up to fourteen) may be associated with one case, but only one is designated as principal.
  * District **required** `string`: The United States district courts are the trial courts of the federal court system.
  * DocketNumber **required** `string`: The number the Clerk of the Court assigned to the case that is filed or to a consent decree when it is lodged. For administrative cases, this number is assigned to the case by the Regional Hearing Clerk.
  * Name **required** `string`: The name of the case assigned to the enforcement action by the lead attorney. Generally, the primary defendant's name is used as the case name. For civil CERCLA cases, the facility/site name may be used.
  * State **required** `string`: The two letter abbreviation that represents the state or state equivalent for the U.S.

### crs3_CRDetails
* crs3_CRDetails `object`: A list of the violation(s), environmental problem(s), and a description of the cause of action organized by date of occurrence. The case details walk through each step of the case activities and displayed the date on which each occurred.
  * DetailCitations **required** `string`: The corresponding regulation in the Code of Federal Regulations (CFR) or U.S. Code (U.S.C.) associated with the enforcement action case detail.
  * DetailDate **required** `string`: The date associated with an enforcement action case detail.
  * DetailDesc **required** `string`: The description of an enforcement action case detail.

### crs3_CaseInformation
* crs3_CaseInformation `object`: The basic information section contains information that identifies the action and some key descriptive variables, such as case status and case type.
  * CaseIdentifier **required** `string`: A unique number identifying the enforcement action. For EPA civil cases, these numbers begin with either the two digit EPA Region Code, "HQ" (headquarters initiated cases), and "EF" or "WF" (Eastern or Western Field Office CAA Mobile Source Program cases); followed by the fiscal year in which the action was initiated.
  * CaseSummary **required** `string`: The summary of the violation environmental problem and a description of the cause of action (basis of legal action).  The summary could be extracted from the referral transmission memo or letter or it could be required as the first section of a revised standardized referral document.
  * Citations **required** `string`: The corresponding regulation in the Code of Federal Regulations (CFR) or U.S. Code (U.S.C.) associated with the enforcement action.
  * FiscalYear **required** `string`: The fiscal year in which the activity occurred.
  * Statutes **required** `string`: ???

### crs3_Locations
* crs3_Locations `object`: This section provides geographic locational information for the criminal activity.
  * City **required** `string`: The name of the city, town, village or other locality, when identifiable, within whose boundaries (the majority of) the facility site is located. This is not always the same as the city used for USPS mail delivery.
  * County **required** `string`: The name of the county, when identifiable, within whose boundaries (the majority of) the criminal activity was located. The county was derived in ECHO based on the latitude and longitude provided in the Summary of Criminal Prosecutions database.
  * EPARegion **required** `string`: The EPA region in which the facility is located
  * Latitude **required** `string`: The latitude of the facility or permit holder as maintained in each data system.
  * Longitude **required** `string`: The longitude of the facility or permit holder as maintained in each data system
  * State **required** `string`: The two letter abbreviation that represents the state or state equivalent for the U.S.
  * Zip **required** `string`: US postal ZIP code, as maintained by ICIS.

### crs3_Results
* crs3_Results `object`: The data returned by the service call.
  * CRCaseInformation **required** [crs3_CaseInformation](#crs3_caseinformation)
  * CRDefendants **required** `array`
    * items [crs3_CRDefendants](#crs3_crdefendants)
  * CRDetails **required** `array`
    * items [crs3_CRDetails](#crs3_crdetails)
  * Locations **required** `array`
    * items [crs3_Locations](#crs3_locations)
  * Message **required** `string`: Field to record messages (typically performance-related) about packet processing

### crs5_Results
* crs5_Results `object`: The data returned by the service call.
  * Cases **required** `array`: A summary of the violation(s), environmental problem(s), and a description of the cause of action.
    * items [crs0_Cases](#crs0_cases)
  * Message **required** `string`: Field to record messages (typically performance-related) about packet processing
  * PageNo **required** `string`: The number of pages of results returned
  * QueryID **required** `string`: Sequential number assigned to entire search result
  * QueryRows **required** `string`: Number of query results returned

### met_Results
* met_Results `object`: Results Object
  * Message **required** `string`: Field to record messages (typically performance-related) about packet processing
  * ResultColumns `array`
    * items [met_ResultsColumns](#met_resultscolumns)

### met_ResultsColumns
* met_ResultsColumns `object`: Results Column Object
  * ColumnID **required** `string`
  * ColumnName **required** `string`
  * DataLength **required** `string`: Data length for EPA program database column.
  * DataType **required** `string`: Data type for EPA program database column.
  * Description **required** `string`: A description of the category of Supplemental Environment Project (SEP) for a settlement.
  * ObjectName **required** `string`

### rlk00_LuValues
* rlk00_LuValues `object`: Lookup Values
  * ValueCode **required** `string`
  * ValueDescription **required** `string`

### rlk51_Results
* rlk51_Results `object`: Results Object
  * LuValues `array`
    * items [rlk00_LuValues](#rlk00_luvalues)
  * Message **required** `string`: Field to record messages (typically performance-related) about packet processing


