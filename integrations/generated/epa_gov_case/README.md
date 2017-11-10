# @datafire/epa_gov_case

Client library for U.S. EPA Enforcement and Compliance History Online (ECHO) - Enforcement Case Search

## Installation and Usage
```bash
npm install --save datafire @datafire/epa_gov_case
```

```js
let datafire = require('datafire');
let epa_gov_case = require('@datafire/epa_gov_case').create();

epa_gov_case.rest_lookups.icis_law_sections.post({}).then(data => {
  console.log(data);
})
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

#### Parameters
* p_id (string) - Case Number. Enter the case number identifier to retrieve the case report.
* output (string) - Output Format Flag.  Enter one of the following keywords:
* callback (string) - JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.

### case_rest_services.get_case_report.post
The get_case_report service endpoint returns a complex object of civil enforcement case details based on the provided case id.


```js
epa_gov_case.case_rest_services.get_case_report.post({}, context)
```

#### Parameters
* p_id (string) - Case Number. Enter the case number identifier to retrieve the case report.
* output (string) - Output Format Flag.  Enter one of the following keywords:
* callback (string) - JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.

### case_rest_services.get_cases.get
The get_cases service end point searches for civil enforcement and criminal cases based on the provided selection criteria.


```js
epa_gov_case.case_rest_services.get_cases.get({}, context)
```

#### Parameters
* output (string) - Output Format Flag.  Enter one of the following keywords:
* p_case_category (string) - Case Category Filter.  Enter one or more case category codes to filter results.   Provide multiple values as a comma-delimited list.
* p_case_status (string) - Case Status Code Filter.  Enter one or more case status codes to limit results.  Provide multiple values as a comma-delimited list.
* p_milestone (string) - Administrative or Judicial Milestone Filter.  Enter one or milestone values to restrict results.  Provide multiple values as a comma-delimited list.
* p_from_date (string) - Administrative or Judicial Milestone Date Range Start Limiter.  Enter a date value in MM/DD/YYYY format to limit milestone results.  Parameter p_to_date must also be populated when using this parameter option.
* p_to_date (string) - Administrative or Judicial Milestone Date Range End Limiter.  Enter a date value in MM/DD/YYYY format to limit milestone results.  Parameter p_from_date must also be populated when using this parameter option.
* p_milestone_fy (string) - Administrative or Judicial Milestone Fiscal Year Limiter.  Enter a single fiscal year value to limit milestone searches to a given fiscal year.
* p_name (string) - Case Name Filter.  Enter one or more case names to restrict results.  Provide multiple values as a comma-delimited list.  When using this parameter the p_name_type parameter is required.
* p_name_type (string) - Case Name Filter Modifier.
* p_case_number (string) - Case Number Filter.  Enter one or more case numbers to restrict results.  Provide multiple values as a comma-delimited list.
* p_docket_number (string) - DOJ Docket Number Filter.  Enter a single docket number or partial docket number to restrict results.  Use "%" as a wildcard for more complex filtering.
* p_activity_number (string) - Case Activity Number Filter.  Enter a single case activity number to filter results.
* p_case_lead (string) - Case Lead Limiter.  Enter E or S to limit results.
* p_case_sens_flg (string) - Case Sensitive Data Flag.  Enter a Y or N to include or exclude cases with sensitive data.
* p_region (string) - EPA Region Filter. Provide a single value of 01 thru 10 to restrict results to a single EPA region.
* p_state (string) - Case Location State Filter.  Enter one or more state USPS postal codes to filter results.  Provide multiple values as a comma-delimited list.
* p_district (string) - Case Location Court District Limiter.  Enter a single state court district code to limit results.
* p_sic (string) - Standard Industrial Classification (SIC) Code Filter.  Enter a single 4-digit SIC Code to filter results.
* p_sic_ao_naics (string) - Case Location SIC/NAICS And/Or Modifier.  Enter either AND or OR to govern the search logic of SIC and NAICS codes.
* p_sic_primary_flg (string) - Case Location Primary SIC Flag.  Enter Y to limit SIC search results to primary SIC codes only.
* p_sic_frs_flg (string) - Case Location Extended FRS SIC Search Flag.  Enter Y to expand SIC search to include Federal Registry Service datasets.
* p_naics (string) - North American Industry Classification System Filter. Enter two to six digits to filter results to facilities having matching NAICS codes.  Digits less than six will match to all codes beginning with the provided values.
* p_naics_primary_flg (string) - Case Location Primary NAICS Flag.  Enter Y to limit NAICS search results to primary NAICS codes only.
* p_naics_frs_flg (string) - Case Location Extended FRS NAICS Search Flag.  Enter Y to expand NAICS search to include Federal Registry Service datasets.
* p_enf_type (string) - Case Enforcement Type Filter. Enter one or more case enforcement type codes to limit results.  Provide multiple values as a comma-delimited list.
* p_law (string) - Law Statute Code Filter.  Enter a single statute code to limit results.
* p_section (string) - Law Section Code Filter. Enter one or more law section codes to limit results.  Provide multiple values as a comma-delimited list.
* p_cp_citation (string) - Law Section Code Filter Alternative. Enter a single law section code to limit results.  This parameter accepts partial codes and allows for advanced search modifiers.
* p_rank_order (string) - Law Status Rank Order Limiter.  Enter a single integer rank order to limit results.
* p_enf_program (string) - Enforcement Program Code Limiter.  Enter one or more enforcement program codes to limit results.  Provide multiple values as a comma-delimited list.  
* p_violation (string) - Violation Type Code Filter.  Enter one or more violation type codes to limit results.  Provide multiple values as a comma-delimited list.
* p_priority_area (string) - Case Priority Area Filter.  Enter one or more case priority areas to limit results.  Provide multiple values as a comma-delimited list.
* p_priority_area_desc (string) - Case Priority Area Description Filter.  Enter a single case priority area description or partial case priority area description to limit results.  Use "%" as a wild-card match for more complex searches.
* p_tribal (string) - Case Location Tribal Land Flag.  Enter Y or N to include or disallow cases on tribal land.
* p_oeca_core (string) - OECA Core Program Flag.  Enter Y or N to include or exclude core program cases.
* p_multimedia (string) - Enforcement Multimedia Case Flag.  Enter Y or N to include or exclude multimedia cases.
* p_fed_case (string) - Federal Facility Involvement Flag.  Enter a Y or N to include or exclude cases involving federal facilities.
* p_activity_contact (string) - Activity Contact Last Name Filter.  Enter a single last name or partial last name to filter results.  Use "%" as a wild-card for advanced searching.
* p_role (string) - Activity Contact Role Code Filter.  Enter a single role code to restrict results.
* p_fed_penalty (string) - Federal Penalty Assessed Amount Filter.  Provide one of the following keywords to restrict results.
* p_total_fed_penalty (string) - Total Federal Penalty Limiter.  Enter a keyword value to limit results to cases with given total federal penalties.
* p_cost_recovery (string) - Cost Recovery Awarded Amount Limiter.  Enter a keyword value to limit results to cases with given cost recovery amounts.
* p_total_cost_recovery (string) - Total Cost Recovery Amount Limiter.  Enter a keyword value to limit results to cases with given cost recovery amounts.
* p_complying_actions (string) - Complying Actions Type Code Limiter.  Enter one or more complying action codes to restrict results.  Provide multiple values as a comma-delimited list.
* p_comp_act_val (string) - Compliance Action Cost Limiter. Enter a keyword value to limit results to cases with given compliance cost amounts.
* p_total_comp_act_val (string) - Total Compliance Action Amount Limiter.  Enter a keyword value to limit results to cases with given total compliance action amounts.
* p_sep_cats (string) - Supplemental Environmental Projects Activity Category Code Limiter.  Provide one or more SEP activity category codes to limit results.  Provide multiple values as a comma-delimited list.
* p_sep_val (string) - Supplemental Environmental Projects Activity Value Limiter.  Provide a keyword to limit results.
* p_total_sep_val (string) - Supplemental Environmental Projects Total Value Limiter.  Provide a keyword to limit results.
* p_lodged_date (string) - Settlement Lodged Date Limiter.  Enter a single settlement lodged date in MM/DD/YYYY format to limit results.
* p_entered_date (string) - Settlement Entered Date Limiter.  Enter a single settlement entered date in MM/DD/YYYY format to limit results.
* p_facility_id (string) - Case Facility Registration Identifier Limiter.  Enter a single complete facility identifier to limit results.
* p_fac_city (string) - Case Facility City Limiter.  Enter a single complete city name to filter cases by facility location city.
* p_fac_zip (string) - Case Facility ZIP Code Limiter.  Enter a single 5-digit zip code to filter cases by facility location zip code.
* p_fac_county (string) - Case Facility County Limiter.  Enter a single complete county name to filter cases by facility location county name.
* p_case_summary (string) - Case Summary Search Limiter.  Enter a single case summary to limit results.  This parameter accepts partial codes and allows for advanced search modifiers.
* p_usmex (string) - US-Mexico Border Flag.  Enter Y/N to restrict searches to facilities located within 100KM of the border.
* p_c1lat (number) - In decimal degrees.  Latitude of 1st corner of box that bounds the resulting facilities. The latitude and longitude of both corners of the bounding box must be provided.
* p_c1lon (number) - In decimal degrees.  Longitude of 1st corner of box that bounds the resulting facilities. The latitude and longitude of both corners of the bounding box must be provided.
* p_c2lat (number) - In decimal degrees.  Latitude of 2nd corner of box that bounds the resulting facilities. The latitude and longitude of both corners of the bounding box must be provided.
* p_c2lon (number) - In decimal degrees.  Longitude of 2nd corner of box that bounds the resulting facilities. The latitude and longitude of both corners of the bounding box must be provided.
* p_voluntary (string) - Voluntary Self Disclosure Flag.  Enter Y or N to include or exclude cases results having voluntary disclosure.
* p_fed_indicator (string) - Federal Facility/Cross Media Flag.  Enter Y or N to limit results to cases with federal facility cross media.
* p_fntype (string) - Controls type of text search performed on facility name with parameter p_fn.
* p_civil_criminal_indicator (string) - Civil/Criminal Case Limiter.  Provide a keyword to limit results.
* queryset (number) - Query Limiter.  Enter a value to limit the number of records returned for each query. Value cannot exceed 70,000.
* responseset (number) - Response Set Limiter. Enter a value to limit the number of records per page. Value cannot exceed 1,000.
* maplist (string) - Map List Flag.  Provide a Y to return mappable coordinates representing the full geographic extent of the queryset (all facilities that met the selection criteria).
* tablelist (string) - Table List Flag. Enter a Y to display the first page of facility results.
* callback (string) - JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.
* qcolumns (string) - Used to cutomize service output.  A list of comma-separated column IDs of output objects that will be returned in the service query object or download.  Use the metadata service endpoint for a complete list of Ids and definitions.

### case_rest_services.get_cases.post
The get_cases service end point searches for civil enforcement and criminal cases based on the provided selection criteria.


```js
epa_gov_case.case_rest_services.get_cases.post({}, context)
```

#### Parameters
* output (string) - Output Format Flag.  Enter one of the following keywords:
* p_case_category (string) - Case Category Filter.  Enter one or more case category codes to filter results.   Provide multiple values as a comma-delimited list.
* p_case_status (string) - Case Status Code Filter.  Enter one or more case status codes to limit results.  Provide multiple values as a comma-delimited list.
* p_milestone (string) - Administrative or Judicial Milestone Filter.  Enter one or milestone values to restrict results.  Provide multiple values as a comma-delimited list.
* p_from_date (string) - Administrative or Judicial Milestone Date Range Start Limiter.  Enter a date value in MM/DD/YYYY format to limit milestone results.  Parameter p_to_date must also be populated when using this parameter option.
* p_to_date (string) - Administrative or Judicial Milestone Date Range End Limiter.  Enter a date value in MM/DD/YYYY format to limit milestone results.  Parameter p_from_date must also be populated when using this parameter option.
* p_milestone_fy (string) - Administrative or Judicial Milestone Fiscal Year Limiter.  Enter a single fiscal year value to limit milestone searches to a given fiscal year.
* p_name (string) - Case Name Filter.  Enter one or more case names to restrict results.  Provide multiple values as a comma-delimited list.  When using this parameter the p_name_type parameter is required.
* p_name_type (string) - Case Name Filter Modifier.
* p_case_number (string) - Case Number Filter.  Enter one or more case numbers to restrict results.  Provide multiple values as a comma-delimited list.
* p_docket_number (string) - DOJ Docket Number Filter.  Enter a single docket number or partial docket number to restrict results.  Use "%" as a wildcard for more complex filtering.
* p_activity_number (string) - Case Activity Number Filter.  Enter a single case activity number to filter results.
* p_case_lead (string) - Case Lead Limiter.  Enter E or S to limit results.
* p_case_sens_flg (string) - Case Sensitive Data Flag.  Enter a Y or N to include or exclude cases with sensitive data.
* p_region (string) - EPA Region Filter. Provide a single value of 01 thru 10 to restrict results to a single EPA region.
* p_state (string) - Case Location State Filter.  Enter one or more state USPS postal codes to filter results.  Provide multiple values as a comma-delimited list.
* p_district (string) - Case Location Court District Limiter.  Enter a single state court district code to limit results.
* p_sic (string) - Standard Industrial Classification (SIC) Code Filter.  Enter a single 4-digit SIC Code to filter results.
* p_sic_ao_naics (string) - Case Location SIC/NAICS And/Or Modifier.  Enter either AND or OR to govern the search logic of SIC and NAICS codes.
* p_sic_primary_flg (string) - Case Location Primary SIC Flag.  Enter Y to limit SIC search results to primary SIC codes only.
* p_sic_frs_flg (string) - Case Location Extended FRS SIC Search Flag.  Enter Y to expand SIC search to include Federal Registry Service datasets.
* p_naics (string) - North American Industry Classification System Filter. Enter two to six digits to filter results to facilities having matching NAICS codes.  Digits less than six will match to all codes beginning with the provided values.
* p_naics_primary_flg (string) - Case Location Primary NAICS Flag.  Enter Y to limit NAICS search results to primary NAICS codes only.
* p_naics_frs_flg (string) - Case Location Extended FRS NAICS Search Flag.  Enter Y to expand NAICS search to include Federal Registry Service datasets.
* p_enf_type (string) - Case Enforcement Type Filter. Enter one or more case enforcement type codes to limit results.  Provide multiple values as a comma-delimited list.
* p_law (string) - Law Statute Code Filter.  Enter a single statute code to limit results.
* p_section (string) - Law Section Code Filter. Enter one or more law section codes to limit results.  Provide multiple values as a comma-delimited list.
* p_cp_citation (string) - Law Section Code Filter Alternative. Enter a single law section code to limit results.  This parameter accepts partial codes and allows for advanced search modifiers.
* p_rank_order (string) - Law Status Rank Order Limiter.  Enter a single integer rank order to limit results.
* p_enf_program (string) - Enforcement Program Code Limiter.  Enter one or more enforcement program codes to limit results.  Provide multiple values as a comma-delimited list.  
* p_violation (string) - Violation Type Code Filter.  Enter one or more violation type codes to limit results.  Provide multiple values as a comma-delimited list.
* p_priority_area (string) - Case Priority Area Filter.  Enter one or more case priority areas to limit results.  Provide multiple values as a comma-delimited list.
* p_priority_area_desc (string) - Case Priority Area Description Filter.  Enter a single case priority area description or partial case priority area description to limit results.  Use "%" as a wild-card match for more complex searches.
* p_tribal (string) - Case Location Tribal Land Flag.  Enter Y or N to include or disallow cases on tribal land.
* p_oeca_core (string) - OECA Core Program Flag.  Enter Y or N to include or exclude core program cases.
* p_multimedia (string) - Enforcement Multimedia Case Flag.  Enter Y or N to include or exclude multimedia cases.
* p_fed_case (string) - Federal Facility Involvement Flag.  Enter a Y or N to include or exclude cases involving federal facilities.
* p_activity_contact (string) - Activity Contact Last Name Filter.  Enter a single last name or partial last name to filter results.  Use "%" as a wild-card for advanced searching.
* p_role (string) - Activity Contact Role Code Filter.  Enter a single role code to restrict results.
* p_fed_penalty (string) - Federal Penalty Assessed Amount Filter.  Provide one of the following keywords to restrict results.
* p_total_fed_penalty (string) - Total Federal Penalty Limiter.  Enter a keyword value to limit results to cases with given total federal penalties.
* p_cost_recovery (string) - Cost Recovery Awarded Amount Limiter.  Enter a keyword value to limit results to cases with given cost recovery amounts.
* p_total_cost_recovery (string) - Total Cost Recovery Amount Limiter.  Enter a keyword value to limit results to cases with given cost recovery amounts.
* p_complying_actions (string) - Complying Actions Type Code Limiter.  Enter one or more complying action codes to restrict results.  Provide multiple values as a comma-delimited list.
* p_comp_act_val (string) - Compliance Action Cost Limiter. Enter a keyword value to limit results to cases with given compliance cost amounts.
* p_total_comp_act_val (string) - Total Compliance Action Amount Limiter.  Enter a keyword value to limit results to cases with given total compliance action amounts.
* p_sep_cats (string) - Supplemental Environmental Projects Activity Category Code Limiter.  Provide one or more SEP activity category codes to limit results.  Provide multiple values as a comma-delimited list.
* p_sep_val (string) - Supplemental Environmental Projects Activity Value Limiter.  Provide a keyword to limit results.
* p_total_sep_val (string) - Supplemental Environmental Projects Total Value Limiter.  Provide a keyword to limit results.
* p_lodged_date (string) - Settlement Lodged Date Limiter.  Enter a single settlement lodged date in MM/DD/YYYY format to limit results.
* p_entered_date (string) - Settlement Entered Date Limiter.  Enter a single settlement entered date in MM/DD/YYYY format to limit results.
* p_facility_id (string) - Case Facility Registration Identifier Limiter.  Enter a single complete facility identifier to limit results.
* p_fac_city (string) - Case Facility City Limiter.  Enter a single complete city name to filter cases by facility location city.
* p_fac_zip (string) - Case Facility ZIP Code Limiter.  Enter a single 5-digit zip code to filter cases by facility location zip code.
* p_fac_county (string) - Case Facility County Limiter.  Enter a single complete county name to filter cases by facility location county name.
* p_case_summary (string) - Case Summary Search Limiter.  Enter a single case summary to limit results.  This parameter accepts partial codes and allows for advanced search modifiers.
* p_usmex (string) - US-Mexico Border Flag.  Enter Y/N to restrict searches to facilities located within 100KM of the border.
* p_c1lat (number) - In decimal degrees.  Latitude of 1st corner of box that bounds the resulting facilities. The latitude and longitude of both corners of the bounding box must be provided.
* p_c1lon (number) - In decimal degrees.  Longitude of 1st corner of box that bounds the resulting facilities. The latitude and longitude of both corners of the bounding box must be provided.
* p_c2lat (number) - In decimal degrees.  Latitude of 2nd corner of box that bounds the resulting facilities. The latitude and longitude of both corners of the bounding box must be provided.
* p_c2lon (number) - In decimal degrees.  Longitude of 2nd corner of box that bounds the resulting facilities. The latitude and longitude of both corners of the bounding box must be provided.
* p_voluntary (string) - Voluntary Self Disclosure Flag.  Enter Y or N to include or exclude cases results having voluntary disclosure.
* p_fed_indicator (string) - Federal Facility/Cross Media Flag.  Enter Y or N to limit results to cases with federal facility cross media.
* p_fntype (string) - Controls type of text search performed on facility name with parameter p_fn.
* p_civil_criminal_indicator (string) - Civil/Criminal Case Limiter.  Provide a keyword to limit results.
* queryset (number) - Query Limiter.  Enter a value to limit the number of records returned for each query. Value cannot exceed 70,000.
* responseset (number) - Response Set Limiter. Enter a value to limit the number of records per page. Value cannot exceed 1,000.
* maplist (string) - Map List Flag.  Provide a Y to return mappable coordinates representing the full geographic extent of the queryset (all facilities that met the selection criteria).
* tablelist (string) - Table List Flag. Enter a Y to display the first page of facility results.
* callback (string) - JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.
* qcolumns (string) - Used to cutomize service output.  A list of comma-separated column IDs of output objects that will be returned in the service query object or download.  Use the metadata service endpoint for a complete list of Ids and definitions.

### case_rest_services.get_crcase_report.get
The get_crcase_report service end point returns a complex object of criminal case detials based on the provided criminal case id.


```js
epa_gov_case.case_rest_services.get_crcase_report.get({}, context)
```

#### Parameters
* p_id (string) - Prosecution Summary Identifier. Enter the numeric prosecution summary identifier to retrieve the criminal case report.
* output (string) - Output Format Flag.  Enter one of the following keywords:
* callback (string) - JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.

### case_rest_services.get_crcase_report.post
The get_crcase_report service end point returns a complex object of criminal case detials based on the provided criminal case id.


```js
epa_gov_case.case_rest_services.get_crcase_report.post({}, context)
```

#### Parameters
* p_id (string) - Prosecution Summary Identifier. Enter the numeric prosecution summary identifier to retrieve the criminal case report.
* output (string) - Output Format Flag.  Enter one of the following keywords:
* callback (string) - JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.

### case_rest_services.get_download.get
Based on the QID obtained from a get_cases query, return a comma separated value (CSV) file of the cases found.


```js
epa_gov_case.case_rest_services.get_download.get({
  "qid": ""
}, context)
```

#### Parameters
* output (string) - Output Format Flag.  Enter one of the following keywords:
* qid (string) **required** - Query ID Selector.  Enter the QueryID number from a previously run query.
* qcolumns (string) - Used to cutomize service output.  A list of comma-separated column IDs of output objects that will be returned in the service query object or download.  Use the metadata service endpoint for a complete list of Ids and definitions.

### case_rest_services.get_download.post
Based on the QID obtained from a get_cases query, return a comma separated value (CSV) file of the cases found.


```js
epa_gov_case.case_rest_services.get_download.post({
  "qid": ""
}, context)
```

#### Parameters
* output (string) - Output Format Flag.  Enter one of the following keywords:
* qid (string) **required** - Query ID Selector.  Enter the QueryID number from a previously run query.
* qcolumns (string) - Used to cutomize service output.  A list of comma-separated column IDs of output objects that will be returned in the service query object or download.  Use the metadata service endpoint for a complete list of Ids and definitions.

### case_rest_services.get_map.get
The purpose of the GET_MAP service is to display facility coordinates and facility clusters related to a get_cases query. Currently, the maximum number of coordinates returned is 500. GET_MAP performs automatic clustering at the state, county, and zip code levels to maximize the number of coordinates returned.


```js
epa_gov_case.case_rest_services.get_map.get({
  "qid": ""
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

### case_rest_services.get_map.post
The purpose of the GET_MAP service is to display facility coordinates and facility clusters related to a get_cases query. Currently, the maximum number of coordinates returned is 500. GET_MAP performs automatic clustering at the state, county, and zip code levels to maximize the number of coordinates returned.


```js
epa_gov_case.case_rest_services.get_map.post({
  "qid": ""
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

### case_rest_services.get_qid.get
GET_QID is passed with a query ID corresponding to a previously run get_cases query. It then returns a CASES object containing all matching cases. The main purpose of GET_QID is for large querysets that contain multiple pages (responsesets) of output. GET_QID allows for pagination and for the selection and sorting of columns. 


```js
epa_gov_case.case_rest_services.get_qid.get({
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

### case_rest_services.get_qid.post
GET_QID is passed with a query ID corresponding to a previously run get_cases query. It then returns a CASES object containing all matching cases. The main purpose of GET_QID is for large querysets that contain multiple pages (responsesets) of output. GET_QID allows for pagination and for the selection and sorting of columns. 


```js
epa_gov_case.case_rest_services.get_qid.post({
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

### case_rest_services.metadata.get
Returns the JSON Object Name and ColumnId for usage with the qcolumns parameter for get_cases endpoint.


```js
epa_gov_case.case_rest_services.metadata.get({}, context)
```

#### Parameters
* output (string) - Output Format Flag.  Enter one of the following keywords:
* callback (string) - JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.

### case_rest_services.metadata.post
Returns the JSON Object Name and ColumnId for usage with the qcolumns parameter for get_cases endpoint.


```js
epa_gov_case.case_rest_services.metadata.post({}, context)
```

#### Parameters
* output (string) - Output Format Flag.  Enter one of the following keywords:
* callback (string) - JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.

### rest_lookups.icis_law_sections.get
Returns the ICIS Law Section Descriptions.


```js
epa_gov_case.rest_lookups.icis_law_sections.get({}, context)
```

#### Parameters
* output (string) - Output Format Flag.  Enter one of the following keywords:
* callback (string) - JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.
* statute_code (string)
* status_flag (string)
* search_term (string) - Enter a partial or complete search phrase or word.
* search_code (string) - Enter a partial or complete code value.
* sort_order (number)

### rest_lookups.icis_law_sections.post
Returns the ICIS Law Section Descriptions.


```js
epa_gov_case.rest_lookups.icis_law_sections.post({}, context)
```

#### Parameters
* output (string) - Output Format Flag.  Enter one of the following keywords:
* callback (string) - JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.
* statute_code (string)
* status_flag (string)
* search_term (string) - Enter a partial or complete search phrase or word.
* search_code (string) - Enter a partial or complete code value.
* sort_order (number)

