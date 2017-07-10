# @datafire/epa_gov_case
Enforcement and Compliance History Online (ECHO) is a tool developed and maintained by EPA's Office of Enforcement and Compliance Assurance for public use. ECHO provides integrated compliance and enforcement information for about 800,000 regulated facilities nationwide.
<BR><BR>CASE Rest Services provide multiple service endpoints, each with specific capabilities, to search and retrieve data on civil cases entered into the 
Integrated Compliance Information System (ICIS) and criminal cases entered into the Summary of Criminal Prosecutions database.  
See Enforcement Case Search Help (https://echo.epa.gov/help/enforcement-case-search-help) for additional information on searching civil and criminal cases. 
<BR><BR>
The get_cases, get_map, get_qid, and get_download end points are meant to be used together.<br>  
The recommended use scenario for get_cases, get_qid, get_map, and get_downoad is:
<br>
<br><b>1)</b>&nbsp Use get_cases to validate passed query parameters, obtain summary statistics and to obtain a query_id (QID).  QIDs are time sensitive and will be valid for approximately 30 minutes.
<br><b>2)</b>&nbsp Use get_qid, with the returned QID, to paginate through arrays of case results.
<br><b>3)</b>&nbsp Use get_map, with the returned QID, to zoom in/out and pan on the clustered and individual facility coordinates, related to the returned cases, that meet the QID query criteria.
<br><b>4)</b>&nbsp Use get_download, with the returned QID, to generate a Comma Separated Value (CSV) file of facility information that meets the QID query criteria.
<br><br>
In addition to the service endpoints listed above there are two detailed case report services, one for civil cases (get_case_report) and one for criminal cases (get_crcase_report). 
See the Civil Enforcement Case Report Help (https://echo.epa.gov/help/reports/enforcement-case-report-help) and the Criminal Case Report Help (https://echo.epa.gov/help/reports/criminal-case-report-help) for additional information 
on then data returned from these two services.   
<br>
Additional ECHO Resources:&nbsp&nbsp <a href="https://echo.epa.gov/tools/web-services">Web Services</a>, <a href="https://echo.epa.gov/resources/echo-data/about-the-data">About ECHO's Data</a>, <a href="https://echo.epa.gov/tools/data-downloads">Data Downloads</a>
<br>


## Operation: case_rest_services.get_case_report.get
The get_case_report service endpoint returns a complex object of civil enforcement case details based on the provided case id.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "p_id": {
      "type": "string",
      "description": "Case Number. Enter the case number identifier to retrieve the case report."
    },
    "output": {
      "type": "string",
      "description": "Output Format Flag.  Enter one of the following keywords:\n- JSON = Data model formatted as Javascript Object Notation (default).\n- JSONP = Data model formatted as Javascript Object Notation with Padding.  \n- XML = Data model formatted as Extensible Markup Language.",
      "enum": [
        "JSONP",
        "JSON",
        "XML"
      ]
    },
    "callback": {
      "type": "string",
      "description": "JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response."
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "description": "Service call container.",
  "properties": {
    "Results": {
      "$ref": "#/definitions/crs1_Results"
    }
  },
  "required": [
    "Results"
  ],
  "type": "object"
}
```
## Operation: case_rest_services.get_cases.get
The get_cases service end point searches for civil enforcement and criminal cases based on the provided selection criteria.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "output": {
      "type": "string",
      "description": "Output Format Flag.  Enter one of the following keywords:\n- JSON = Data model formatted as Javascript Object Notation (default).\n- JSONP = Data model formatted as Javascript Object Notation with Padding.  \n- XML = Data model formatted as Extensible Markup Language.",
      "enum": [
        "JSONP",
        "JSON",
        "XML"
      ]
    },
    "p_case_category": {
      "type": "string",
      "description": "Case Category Filter.  Enter one or more case category codes to filter results.   Provide multiple values as a comma-delimited list.\n- AFR = Administrative - Formal\n- AIF = Administrative - Informal\n- JDC = Judicial"
    },
    "p_case_status": {
      "type": "string",
      "description": "Case Status Code Filter.  Enter one or more case status codes to limit results.  Provide multiple values as a comma-delimited list."
    },
    "p_milestone": {
      "type": "string",
      "description": "Administrative or Judicial Milestone Filter.  Enter one or milestone values to restrict results.  Provide multiple values as a comma-delimited list."
    },
    "p_from_date": {
      "type": "string",
      "description": "Administrative or Judicial Milestone Date Range Start Limiter.  Enter a date value in MM/DD/YYYY format to limit milestone results.  Parameter p_to_date must also be populated when using this parameter option."
    },
    "p_to_date": {
      "type": "string",
      "description": "Administrative or Judicial Milestone Date Range End Limiter.  Enter a date value in MM/DD/YYYY format to limit milestone results.  Parameter p_from_date must also be populated when using this parameter option."
    },
    "p_milestone_fy": {
      "type": "string",
      "description": "Administrative or Judicial Milestone Fiscal Year Limiter.  Enter a single fiscal year value to limit milestone searches to a given fiscal year."
    },
    "p_name": {
      "type": "string",
      "description": "Case Name Filter.  Enter one or more case names to restrict results.  Provide multiple values as a comma-delimited list.  When using this parameter the p_name_type parameter is required."
    },
    "p_name_type": {
      "type": "string",
      "description": "Case Name Filter Modifier."
    },
    "p_case_number": {
      "type": "string",
      "description": "Case Number Filter.  Enter one or more case numbers to restrict results.  Provide multiple values as a comma-delimited list."
    },
    "p_docket_number": {
      "type": "string",
      "description": "DOJ Docket Number Filter.  Enter a single docket number or partial docket number to restrict results.  Use \"%\" as a wildcard for more complex filtering."
    },
    "p_activity_number": {
      "type": "string",
      "description": "Case Activity Number Filter.  Enter a single case activity number to filter results."
    },
    "p_case_lead": {
      "type": "string",
      "description": "Case Lead Limiter.  Enter E or S to limit results.\n- E = EPA is the case lead.\n- S = The state is the case lead.",
      "enum": [
        "E",
        "S"
      ]
    },
    "p_case_sens_flg": {
      "type": "string",
      "description": "Case Sensitive Data Flag.  Enter a Y or N to include or exclude cases with sensitive data."
    },
    "p_region": {
      "type": "string",
      "description": "EPA Region Filter. Provide a single value of 01 thru 10 to restrict results to a single EPA region.",
      "enum": [
        "01",
        "02",
        "03",
        "04",
        "05",
        "06",
        "07",
        "08",
        "09",
        "10"
      ]
    },
    "p_state": {
      "type": "string",
      "description": "Case Location State Filter.  Enter one or more state USPS postal codes to filter results.  Provide multiple values as a comma-delimited list."
    },
    "p_district": {
      "type": "string",
      "description": "Case Location Court District Limiter.  Enter a single state court district code to limit results."
    },
    "p_sic": {
      "type": "string",
      "description": "Standard Industrial Classification (SIC) Code Filter.  Enter a single 4-digit SIC Code to filter results."
    },
    "p_sic_ao_naics": {
      "type": "string",
      "description": "Case Location SIC/NAICS And/Or Modifier.  Enter either AND or OR to govern the search logic of SIC and NAICS codes.\n- AND = Search will return results having both the provided SIC code(s) and provided NAICS code(s).\n- OR = Search will return results having either the provided SIC code(s) or the provided NAICS code(s).",
      "enum": [
        "AND",
        "OR"
      ]
    },
    "p_sic_primary_flg": {
      "type": "string",
      "description": "Case Location Primary SIC Flag.  Enter Y to limit SIC search results to primary SIC codes only.",
      "enum": [
        "Y",
        "N"
      ]
    },
    "p_sic_frs_flg": {
      "type": "string",
      "description": "Case Location Extended FRS SIC Search Flag.  Enter Y to expand SIC search to include Federal Registry Service datasets.",
      "enum": [
        "Y",
        "N"
      ]
    },
    "p_naics": {
      "type": "string",
      "description": "North American Industry Classification System Filter. Enter two to six digits to filter results to facilities having matching NAICS codes.  Digits less than six will match to all codes beginning with the provided values."
    },
    "p_naics_primary_flg": {
      "type": "string",
      "description": "Case Location Primary NAICS Flag.  Enter Y to limit NAICS search results to primary NAICS codes only.",
      "enum": [
        "Y",
        "N"
      ]
    },
    "p_naics_frs_flg": {
      "type": "string",
      "description": "Case Location Extended FRS NAICS Search Flag.  Enter Y to expand NAICS search to include Federal Registry Service datasets.",
      "enum": [
        "Y",
        "N"
      ]
    },
    "p_enf_type": {
      "type": "string",
      "description": "Case Enforcement Type Filter. Enter one or more case enforcement type codes to limit results.  Provide multiple values as a comma-delimited list."
    },
    "p_law": {
      "type": "string",
      "description": "Law Statute Code Filter.  Enter a single statute code to limit results."
    },
    "p_section": {
      "type": "string",
      "description": "Law Section Code Filter. Enter one or more law section codes to limit results.  Provide multiple values as a comma-delimited list."
    },
    "p_cp_citation": {
      "type": "string",
      "description": "Law Section Code Filter Alternative. Enter a single law section code to limit results.  This parameter accepts partial codes and allows for advanced search modifiers."
    },
    "p_rank_order": {
      "type": "string",
      "description": "Law Status Rank Order Limiter.  Enter a single integer rank order to limit results.",
      "enum": [
        "1",
        "0"
      ]
    },
    "p_enf_program": {
      "type": "string",
      "description": "Enforcement Program Code Limiter.  Enter one or more enforcement program codes to limit results.  Provide multiple values as a comma-delimited list.  "
    },
    "p_violation": {
      "type": "string",
      "description": "Violation Type Code Filter.  Enter one or more violation type codes to limit results.  Provide multiple values as a comma-delimited list."
    },
    "p_priority_area": {
      "type": "string",
      "description": "Case Priority Area Filter.  Enter one or more case priority areas to limit results.  Provide multiple values as a comma-delimited list."
    },
    "p_priority_area_desc": {
      "type": "string",
      "description": "Case Priority Area Description Filter.  Enter a single case priority area description or partial case priority area description to limit results.  Use \"%\" as a wild-card match for more complex searches."
    },
    "p_tribal": {
      "type": "string",
      "description": "Case Location Tribal Land Flag.  Enter Y or N to include or disallow cases on tribal land.",
      "enum": [
        "Y",
        "N"
      ]
    },
    "p_oeca_core": {
      "type": "string",
      "description": "OECA Core Program Flag.  Enter Y or N to include or exclude core program cases.",
      "enum": [
        "Y",
        "N"
      ]
    },
    "p_multimedia": {
      "type": "string",
      "description": "Enforcement Multimedia Case Flag.  Enter Y or N to include or exclude multimedia cases.",
      "enum": [
        "Y",
        "N"
      ]
    },
    "p_fed_case": {
      "type": "string",
      "description": "Federal Facility Involvement Flag.  Enter a Y or N to include or exclude cases involving federal facilities.",
      "enum": [
        "Y",
        "N"
      ]
    },
    "p_activity_contact": {
      "type": "string",
      "description": "Activity Contact Last Name Filter.  Enter a single last name or partial last name to filter results.  Use \"%\" as a wild-card for advanced searching."
    },
    "p_role": {
      "type": "string",
      "description": "Activity Contact Role Code Filter.  Enter a single role code to restrict results."
    },
    "p_fed_penalty": {
      "type": "string",
      "description": "Federal Penalty Assessed Amount Filter.  Provide one of the following keywords to restrict results.\n- ANY = cases with any penalty amount.\n- LE5000 = cases with penalty amount less than or equal to $5,000.\n- GT5000 = cases with penalty amount more than $5,000.\n- GT50000 = cases with penalty amount more than $50,000.\n- GT100000 = cases with penalty amount more than $100,000.\n- GT500000 = cases with penalty amount more than $500,000.\n- GT1000000 = cases with penalty amount more than $1,000,000.\n- GT2500000 = cases with penalty amount more than $2,500,000.",
      "enum": [
        "ANY",
        "LE5000",
        "GT5000",
        "GT50000",
        "GT100000",
        "GT500000",
        "GT1000000",
        "GT2500000"
      ]
    },
    "p_total_fed_penalty": {
      "type": "string",
      "description": "Total Federal Penalty Limiter.  Enter a keyword value to limit results to cases with given total federal penalties.\n- ANY = Cases with any federal penalty greater than zero.\n- LEXX = Replacing XX with a dollar value, return cases with federal penalty less than or equal to the given amount.\n- GTXX = Replacing XX with a dollar value, return cases with federal penalty greater than the given amount."
    },
    "p_cost_recovery": {
      "type": "string",
      "description": "Cost Recovery Awarded Amount Limiter.  Enter a keyword value to limit results to cases with given cost recovery amounts.\n- ANY = Cases with any cost recovery amount greater than zero.\n- LEXX = Replacing XX with a dollar value, return cases with cost recovery amount less than or equal to the given amount.\n- GTXX = Replacing XX with a dollar value, return cases with cost recovery amount greater than the given amount."
    },
    "p_total_cost_recovery": {
      "type": "string",
      "description": "Total Cost Recovery Amount Limiter.  Enter a keyword value to limit results to cases with given cost recovery amounts.\n- ANY = Cases with any cost recovery amount greater than zero.\n- LEXX = Replacing XX with a dollar value, return cases with cost recovery amount less than or equal to the given amount.\n- GTXX = Replacing XX with a dollar value, return cases with cost recovery amount greater than the given amount."
    },
    "p_complying_actions": {
      "type": "string",
      "description": "Complying Actions Type Code Limiter.  Enter one or more complying action codes to restrict results.  Provide multiple values as a comma-delimited list."
    },
    "p_comp_act_val": {
      "type": "string",
      "description": "Compliance Action Cost Limiter. Enter a keyword value to limit results to cases with given compliance cost amounts.\n- ANY = Cases with any compliance cost amount greater than zero.\n- LEXX = Replacing XX with a dollar value, return cases with compliance cost amount less than or equal to the given amount.\n- GTXX = Replacing XX with a dollar value, return cases with compliance cost amount greater than the given amount.",
      "enum": [
        "ANY",
        "LE5000",
        "GT5000",
        "GT100000",
        "GT1000000",
        "GT50000000"
      ]
    },
    "p_total_comp_act_val": {
      "type": "string",
      "description": "Total Compliance Action Amount Limiter.  Enter a keyword value to limit results to cases with given total compliance action amounts.\n- ANY = Cases with any total compliance action amount greater than zero.\n- LEXX = Replacing XX with a dollar value, return cases with total compliance action amount less than or equal to the given amount.\n- GTXX = Replacing XX with a dollar value, return cases with total compliance action amount greater than the given amount."
    },
    "p_sep_cats": {
      "type": "string",
      "description": "Supplemental Environmental Projects Activity Category Code Limiter.  Provide one or more SEP activity category codes to limit results.  Provide multiple values as a comma-delimited list."
    },
    "p_sep_val": {
      "type": "string",
      "description": "Supplemental Environmental Projects Activity Value Limiter.  Provide a keyword to limit results.\n- ANY = return cases with any SEP activity amount.\n- LE10000 = return cases with SEP activity amount less than or equal to $10,000.\n- GT10000 = return cases with SEP activity amount greater than $10,000.\n- GT50000 = return cases with SEP activity amount greater than $50,000.\n- GT100000 = return cases with SEP activity amount greater than $100,000.\n- GT500000 = return cases with SEP activity amount greater than $500,000.\n- GT1000000 = return cases with SEP activity amount greater than $1,000,000.",
      "enum": [
        "ANY",
        "LE10000",
        "GT10000",
        "GT50000",
        "GT100000",
        "GT500000",
        "GT1000000"
      ]
    },
    "p_total_sep_val": {
      "type": "string",
      "description": "Supplemental Environmental Projects Total Value Limiter.  Provide a keyword to limit results.\n- ANY = return cases with any SEP total amount.\n- LE10000 = return cases with SEP total amount less than or equal to $10,000.\n- GT10000 = return cases with SEP total amount greater than $10,000.\n- GT50000 = return cases with SEP total amount greater than $50,000.\n- GT100000 = return cases with SEP total amount greater than $100,000.\n- GT500000 = return cases with SEP total amount greater than $500,000.\n- GT1000000 = return cases with SEP total amount greater than $1,000,000."
    },
    "p_lodged_date": {
      "type": "string",
      "description": "Settlement Lodged Date Limiter.  Enter a single settlement lodged date in MM/DD/YYYY format to limit results."
    },
    "p_entered_date": {
      "type": "string",
      "description": "Settlement Entered Date Limiter.  Enter a single settlement entered date in MM/DD/YYYY format to limit results."
    },
    "p_facility_id": {
      "type": "string",
      "description": "Case Facility Registration Identifier Limiter.  Enter a single complete facility identifier to limit results."
    },
    "p_fac_city": {
      "type": "string",
      "description": "Case Facility City Limiter.  Enter a single complete city name to filter cases by facility location city."
    },
    "p_fac_zip": {
      "type": "string",
      "description": "Case Facility ZIP Code Limiter.  Enter a single 5-digit zip code to filter cases by facility location zip code."
    },
    "p_fac_county": {
      "type": "string",
      "description": "Case Facility County Limiter.  Enter a single complete county name to filter cases by facility location county name."
    },
    "p_case_summary": {
      "type": "string",
      "description": "Case Summary Search Limiter.  Enter a single case summary to limit results.  This parameter accepts partial codes and allows for advanced search modifiers."
    },
    "p_usmex": {
      "type": "string",
      "description": "US-Mexico Border Flag.  Enter Y/N to restrict searches to facilities located within 100KM of the border.",
      "enum": [
        "Y",
        "N"
      ]
    },
    "p_c1lat": {
      "type": "number",
      "description": "In decimal degrees.  Latitude of 1st corner of box that bounds the resulting facilities. The latitude and longitude of both corners of the bounding box must be provided."
    },
    "p_c1lon": {
      "type": "number",
      "description": "In decimal degrees.  Longitude of 1st corner of box that bounds the resulting facilities. The latitude and longitude of both corners of the bounding box must be provided."
    },
    "p_c2lat": {
      "type": "number",
      "description": "In decimal degrees.  Latitude of 2nd corner of box that bounds the resulting facilities. The latitude and longitude of both corners of the bounding box must be provided."
    },
    "p_c2lon": {
      "type": "number",
      "description": "In decimal degrees.  Longitude of 2nd corner of box that bounds the resulting facilities. The latitude and longitude of both corners of the bounding box must be provided."
    },
    "p_voluntary": {
      "type": "string",
      "description": "Voluntary Self Disclosure Flag.  Enter Y or N to include or exclude cases results having voluntary disclosure."
    },
    "p_fed_indicator": {
      "type": "string",
      "description": "Federal Facility/Cross Media Flag.  Enter Y or N to limit results to cases with federal facility cross media."
    },
    "p_fntype": {
      "type": "string",
      "description": "Controls type of text search performed on facility name with parameter p_fn.\n- EXACT = Find facilities having the exact provided name(s).\n- BEGINS = Find facilities with names starting with the provided term(s).\n- ALL = Find facilities using Oracle text search terms.\n- CONTAINS = \n",
      "enum": [
        "ALL",
        "CONTAINS",
        "EXACT",
        "BEGINS"
      ]
    },
    "p_civil_criminal_indicator": {
      "type": "string",
      "description": "Civil/Criminal Case Limiter.  Provide a keyword to limit results.\n- ANY = return both civil and criminal cases.\n- CI = return only civil cases.\n- CR = return only criminal cases.",
      "enum": [
        "CI",
        "CR",
        "ALL"
      ]
    },
    "queryset": {
      "type": "number",
      "description": "Query Limiter.  Enter a value to limit the number of records returned for each query. Value cannot exceed 70,000."
    },
    "responseset": {
      "type": "number",
      "description": "Response Set Limiter. Enter a value to limit the number of records per page. Value cannot exceed 1,000."
    },
    "maplist": {
      "type": "string",
      "description": "Map List Flag.  Provide a Y to return mappable coordinates representing the full geographic extent of the queryset (all facilities that met the selection criteria).",
      "enum": [
        "Y",
        "N"
      ]
    },
    "tablelist": {
      "type": "string",
      "description": "Table List Flag. Enter a Y to display the first page of facility results.",
      "enum": [
        "Y",
        "N"
      ]
    },
    "callback": {
      "type": "string",
      "description": "JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response."
    },
    "qcolumns": {
      "type": "string",
      "description": "Used to cutomize service output.  A list of comma-separated column IDs of output objects that will be returned in the service query object or download.  Use the metadata service endpoint for a complete list of Ids and definitions."
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "description": "Service call container.",
  "properties": {
    "Results": {
      "$ref": "#/definitions/crs2_Results"
    }
  },
  "required": [
    "Results"
  ],
  "type": "object"
}
```
## Operation: case_rest_services.get_crcase_report.get
The get_crcase_report service end point returns a complex object of criminal case detials based on the provided criminal case id.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "p_id": {
      "type": "string",
      "description": "Prosecution Summary Identifier. Enter the numeric prosecution summary identifier to retrieve the criminal case report."
    },
    "output": {
      "type": "string",
      "description": "Output Format Flag.  Enter one of the following keywords:\n- JSON = Data model formatted as Javascript Object Notation (default).\n- JSONP = Data model formatted as Javascript Object Notation with Padding.  \n- XML = Data model formatted as Extensible Markup Language.",
      "enum": [
        "JSONP",
        "JSON",
        "XML"
      ]
    },
    "callback": {
      "type": "string",
      "description": "JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response."
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "description": "Service call container.",
  "properties": {
    "Results": {
      "$ref": "#/definitions/crs3_Results"
    }
  },
  "required": [
    "Results"
  ],
  "type": "object"
}
```
## Operation: case_rest_services.get_download.get
Based on the QID obtained from a get_cases query, return a comma sepated vaule (CSV) file of the cases found.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "output": {
      "type": "string",
      "description": "Output Format Flag.  Enter one of the following keywords:\n- CSV = Facility results formatted as comma delimited file download (default)."
    },
    "qid": {
      "type": "string",
      "description": "Query ID Selector.  Enter the QueryID number from a previously run query."
    },
    "qcolumns": {
      "type": "string",
      "description": "Used to cutomize service output.  A list of comma-separated column IDs of output objects that will be returned in the service query object or download.  Use the metadata service endpoint for a complete list of Ids and definitions."
    }
  },
  "additionalProperties": false,
  "required": [
    "qid"
  ]
}
```
### Output Schema
```json
{
  "type": "file"
}
```
## Operation: case_rest_services.get_map.get
The purpose of the GET_MAP service is to display facility coordinates and facility clusters related to a get_cases query. Currently, the maximum number of coordinates returned is 500. GET_MAP performs automatic clustering at the state, county, and zip code levels to maximize the number of coordinates returned.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "output": {
      "type": "string",
      "description": "Output Format Flag.  Enter one of the following keywords:\n- JSON = Data model formatted as Javascript Object Notation (default).\n- JSONP = Data model formatted as Javascript Object Notation with Padding.  \n- XML = Data model formatted as Extensible Markup Language.",
      "enum": [
        "JSONP",
        "JSON",
        "XML"
      ]
    },
    "qid": {
      "type": "string",
      "description": "Query ID Selector.  Enter the QueryID number from a previously run query."
    },
    "callback": {
      "type": "string",
      "description": "JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response."
    },
    "tablelist": {
      "type": "string",
      "description": "Table List Flag. Enter a Y to display the first page of facility results.",
      "enum": [
        "Y",
        "N"
      ]
    },
    "c1_lat": {
      "type": "number",
      "description": "Latitude of 1st corner of box that bounds the resulting facilities. The latitude and longitude of both corners of the bounding box must be provided."
    },
    "c1_long": {
      "type": "number",
      "description": "Longitude of 1st corner of box that bounds the resulting facilities. The latitude and longitude of both corners of the bounding box must be provided."
    },
    "c2_lat": {
      "type": "number",
      "description": "Latitude of 2nd corner of box that bounds the resulting facilities. The latitude and longitude of both corners of the bounding box must be provided."
    },
    "c2_long": {
      "type": "number",
      "description": "Longitude of 2nd corner of box that bounds the resulting facilities. The latitude and longitude of both corners of the bounding box must be provided."
    }
  },
  "additionalProperties": false,
  "required": [
    "qid"
  ]
}
```
### Output Schema
```json
{
  "description": "Service call container.",
  "properties": {
    "MapOutput": {
      "$ref": "#/definitions/crs0_MapOutput"
    }
  },
  "required": [
    "MapOutput"
  ],
  "type": "object"
}
```
## Operation: case_rest_services.get_qid.get
GET_QID is passed with a query ID corresponding to a previously run get_cases query. It then returns a CASES object containing all matching cases. The main purpose of GET_QID is for large querysets that contain multiple pages (responsesets) of output. GET_QID allows for pagination and for the selection and sorting of columns. 

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "output": {
      "type": "string",
      "description": "Output Format Flag.  Enter one of the following keywords:\n- JSON = Data model formatted as Javascript Object Notation (default).\n- JSONP = Data model formatted as Javascript Object Notation with Padding.  \n- XML = Data model formatted as Extensible Markup Language.",
      "enum": [
        "JSONP",
        "JSON",
        "XML"
      ]
    },
    "qid": {
      "type": "string",
      "description": "Query ID Selector.  Enter the QueryID number from a previously run query."
    },
    "pageno": {
      "type": "number",
      "description": "Indicates the number of the page to display. It is used only when the results are paginated."
    },
    "callback": {
      "type": "string",
      "description": "JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response."
    },
    "newsort": {
      "type": "number",
      "description": "Output Sort Column.  Enter the number of the column on which the data will be sorted. If unpopulated results will sort on the first column."
    },
    "descending": {
      "type": "string",
      "description": "Output Sort Column Descending Flag.  Enter Y to column identified in the newsort parameter descending.  Enter N to use ascending sort order. Used only when newsort parameter is populated.",
      "enum": [
        "Y",
        "N"
      ]
    },
    "qcolumns": {
      "type": "string",
      "description": "Used to cutomize service output.  A list of comma-separated column IDs of output objects that will be returned in the service query object or download.  Use the metadata service endpoint for a complete list of Ids and definitions."
    }
  },
  "additionalProperties": false,
  "required": [
    "qid"
  ]
}
```
### Output Schema
```json
{
  "description": "Service call container.",
  "properties": {
    "Results": {
      "$ref": "#/definitions/crs5_Results"
    }
  },
  "required": [
    "Results"
  ],
  "type": "object"
}
```
## Operation: case_rest_services.metadata.get
Returns the JSON Object Name and ColumnId for usage with the qcolumns parameter for get_cases endpoint.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "output": {
      "type": "string",
      "description": "Output Format Flag.  Enter one of the following keywords:\n- JSON = Data model formatted as Javascript Object Notation (default).\n- JSONP = Data model formatted as Javascript Object Notation with Padding.  \n- XML = Data model formatted as Extensible Markup Language.",
      "enum": [
        "JSONP",
        "JSON",
        "XML"
      ]
    },
    "callback": {
      "type": "string",
      "description": "JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response."
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "description": "Root Object",
  "properties": {
    "Results": {
      "$ref": "#/definitions/met_Results"
    }
  },
  "required": [
    "Results"
  ],
  "type": "object"
}
```
## Operation: rest_lookups.icis_law_sections.get
Returns the ICIS Law Section Descriptions.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "output": {
      "type": "string",
      "description": "Output Format Flag.  Enter one of the following keywords:\n- JSON = Data model formatted as Javascript Object Notation (default).\n- JSONP = Data model formatted as Javascript Object Notation with Padding.  \n- XML = Data model formatted as Extensible Markup Language.",
      "enum": [
        "JSONP",
        "JSON",
        "XML"
      ]
    },
    "callback": {
      "type": "string",
      "description": "JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response."
    },
    "statute_code": {
      "type": "string"
    },
    "status_flag": {
      "type": "string"
    },
    "search_term": {
      "type": "string",
      "description": "Enter a partial or complete search phrase or word."
    },
    "search_code": {
      "type": "string",
      "description": "Enter a partial or complete code value."
    },
    "sort_order": {
      "type": "number"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "description": "Root Object",
  "properties": {
    "Results": {
      "$ref": "#/definitions/rlk1_Results"
    }
  },
  "required": [
    "Results"
  ],
  "type": "object"
}
```
