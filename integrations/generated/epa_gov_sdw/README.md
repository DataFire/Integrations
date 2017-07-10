# @datafire/epa_gov_sdw
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

## Operation: sdw_rest_services.get_download.get
Based on the QID obtained from a get_systems query, return a comma sepated vaule (CSV) file of the water systems found.

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
## Operation: sdw_rest_services.get_qid.get
GET_QID is passed with a query ID corresponding to a previously run get_systems query. It then returns a Systems object containing all matching water systems. The main purpose of GET_QID is for large querysets that contain multiple pages (responsesets) of output. GET_QID allows for pagination and for the selection and sorting of columns. 

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
  "description": "Root Object",
  "properties": {
    "Results": {
      "$ref": "#/definitions/sdw2_Results"
    }
  },
  "required": [
    "Results"
  ],
  "type": "object"
}
```
## Operation: sdw_rest_services.get_systems.get
Returns an array of public water systems that meet the specified search criteria.

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
    "p_fn": {
      "type": "string",
      "description": "Facility Name Filter. Enter one or more case-insensitive facility names to filter results.  Provide multiple values as a comma-delimited list.  See p_fntype for additional modifiers."
    },
    "p_ct": {
      "type": "string",
      "description": "Facility City Filter. Enter a single case-insensitive city name to filter results."
    },
    "p_co": {
      "type": "string",
      "description": "Facility County Filter. Provide a single county name in combination with a state value provided via p_st."
    },
    "p_fips": {
      "type": "string",
      "description": "FIPS Code Filter.  Enter a single 5-character Federal Information Processing Standards (FIPS) state + county value to restrict results.  E.g. to limit results to Kenosha County, Wisconsin, use 55059."
    },
    "p_st": {
      "type": "string",
      "description": "Facility State and State-Equivalent Filter.  Provide one or more USPS postal abbreviations for states and state-equivalents to filter results.  Provide multiple values as a comma-delimited list."
    },
    "p_zip": {
      "type": "string",
      "description": "5-Digit ZIP Code Filter. Provide one or more 5-digit postal zip codes to filter results.  May contain multiple comma-separated values."
    },
    "p_reg": {
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
    "p_trb": {
      "type": "string",
      "description": "Tribe name"
    },
    "p_act": {
      "type": "string",
      "description": "Active Permits/Facilities Flag.  Provide Y or N to filter results to facilities with active permits.",
      "enum": [
        "Y",
        "N",
        "A"
      ]
    },
    "p_qiv": {
      "type": "string",
      "description": "Quarters in Noncompliance Limiter.  Enter a coded value to limit results to facilities with given quarter of noncompliance.\n- Z = Zero quarters in noncompliance.\n- GEXX = Replacing XX with a numeric value, that number of quarterd or more in noncompliance.\n- GTXX = Replacing XX with a numeric value, more than that number of quarters in noncompliance.",
      "enum": [
        "0",
        "GT1",
        "GT2",
        "GT4",
        "GT8",
        "12"
      ]
    },
    "p_ico": {
      "type": "string",
      "description": "Indian Country Flag.  Enter a \"Y\" or \"N\" to restrict searches to facilities inside or outside Indian Country.",
      "enum": [
        "Y",
        "N"
      ]
    },
    "p_pid": {
      "type": "string",
      "description": "Nine-digit permit IDs. May contain up to 2000 comma-separated values."
    },
    "p_owop": {
      "type": "string",
      "description": "Owner/Operator code filter.  Enter one of the following codes to filter results:\n- F = Federal Government\n- S = State Government\n- L = Local Government\n- M = Public/Private\n- N = Native American\n- P = Private",
      "enum": [
        "F",
        "S",
        "L",
        "M",
        "N",
        "P"
      ]
    },
    "p_systyp": {
      "type": "string",
      "description": "Type of public water system:\n- CWS=Community water system\n- NCWS=Non-community water system\n- NTCWS=Non-transient non-community water system\n- TNCWS=Transient non-community water system",
      "enum": [
        "CWS",
        "NCWS",
        "NTCWS",
        "TNCWS"
      ]
    },
    "p_swtyp": {
      "type": "string",
      "description": "Source Water Type:\n- SW = Surface water \n- GW= Ground water\n- GU = Ground water under direct influence of (UDI) surface water\n- SWP = Purchased Surface water\n- GWP = Purchased Ground water\n- GUP = Purchased Ground water UDI surface water",
      "enum": [
        "SW",
        "GW",
        "GU",
        "SWP",
        "GWP",
        "GUP"
      ]
    },
    "p_popsv": {
      "type": "string",
      "description": "Estimated average daily population served by a system:\n- LE500 = 500 or less\n- IN501_3K = 501-3,300\n- IN3K_10K = 3,301-10,000\n- IN10K_100K = 10,001-100,000\n- IN100K_1M = 100,001-1,000,000\n- GT1M = More than 1,000,000\nMay contain multiple comma-separated values."
    },
    "p_cs": {
      "type": "string",
      "description": "Current violations:\n- M = Monitoring and Reporting Violations\n- H = Health-based Violations\n- O = Other Violations\n- P = Public Notice Violations\n- S = Serious Violator\n- N = No Violations\nMay contain multiple comma-separated values."
    },
    "p_mr": {
      "type": "string",
      "description": "Monitoring and Reporting Violations (failure to conduct regular monitoring of drinking water quality or submit monitoring results in a timely fashion).",
      "enum": [
        "Y",
        "N"
      ]
    },
    "p_health": {
      "type": "string",
      "description": "Violations of health-based drinking water standards (maximum contaminant levels, maximum residual disinfectant levels, or treatment technique rules).",
      "enum": [
        "Y",
        "N"
      ]
    },
    "p_other": {
      "type": "string",
      "description": "Other violations, such as failing to issue annual consumer confidence reports or maintain required records.",
      "enum": [
        "Y",
        "N"
      ]
    },
    "p_pn": {
      "type": "string",
      "description": "Public Notice Violations (failure to immediately alert consumers of serious problem with drinking water).",
      "enum": [
        "Y",
        "N"
      ]
    },
    "p_sv": {
      "type": "string",
      "description": "Serious Violator (unresolved serious, multiple, and/or continuing violations). A value of Y will return only SDWIS systems that are Serious Violators, while a value of N will only return SDWIS Systems that are not Serious Violators.",
      "enum": [
        "Y",
        "N"
      ]
    },
    "p_qs": {
      "type": "string",
      "description": "Quick Search. Allows entry for city, state, and/or zip code."
    },
    "p_sfs": {
      "type": "string",
      "description": "Single Facility Search Filter.  Provide a facility name or program system identifier to limit results.  For the all data search, the FRS registry identifier is also searched."
    },
    "p_pswpol": {
      "type": "string",
      "description": "For CWA, pollutant names for surface water discharges. for Drinking Water, SDWIS Violation contaminant codes for unaddressed violations that have occurred in the last 3 years. May contain multiple comma-separated values."
    },
    "p_pswvio": {
      "type": "string",
      "description": "Used in conjuction with parameters p_pswpol and p_pswparam, indicates whether search should only include pollutants with violations.",
      "enum": [
        "Y",
        "N"
      ]
    },
    "p_pbale": {
      "type": "string",
      "description": "Lead Action Level Exceedance.  A \"Y\" value will select water systems with at least 1 Lead Action Level Exceedance."
    },
    "p_cuale": {
      "type": "string",
      "description": "Copper Action Level Exceedance.  A \"Y\" value will select water systems with at least 1 Copper Action Level Exceedance."
    },
    "p_rc350v": {
      "type": "string",
      "description": "Rule code 350 violation. A \"Y\" value will select water systems with at least one rule code 350 violation."
    },
    "p_pbv": {
      "type": "string",
      "description": "Lead Violations.  A \"Y\" value will select water systems with at least 1 Lead Violation."
    },
    "p_cuv": {
      "type": "string",
      "description": "Copper Violation.  A \"Y\" value will select water systems with at least 1 Copper Violation."
    },
    "p_lcrv": {
      "type": "string",
      "description": "Lead or Copper rule violations.  A \"Y\" value will select water systems with at least 1 Lead or Copper Rule Violation."
    },
    "p_fea": {
      "type": "string",
      "description": "Formal Enforcement Actions [within / not within] specified date range indicator. The date range is determined by parameters p_fead1 and p_fead2 or by parameter p_feay.\n- W = within date range\n- N = not within date range",
      "enum": [
        "W",
        "N"
      ]
    },
    "p_feay": {
      "type": "number",
      "description": "Years (1 to 5) Range.  This value is used to create a date range for Formal Enforcement Actions (FEA). Used along with p_fea (which indicates whether to look within or outside of the date range) to find FEAs within (or not within) the number of years specified.",
      "enum": [
        1,
        2,
        3,
        4,
        5
      ]
    },
    "p_feaa": {
      "type": "string",
      "description": "Agency associated with Formal Enforcement Actions:\n- E = EPA\n- S = State\n- A = All",
      "enum": [
        "A",
        "E",
        "S"
      ]
    },
    "p_iea": {
      "type": "string",
      "description": "Informal Enforcement Actions [within / not within] specified date range.  The date range is determined by parameters p_iead1 and p_iead2 or by parameter p_ieay.\n- W = within date range\n- N = not within date range",
      "enum": [
        "W",
        "N"
      ]
    },
    "p_ieay": {
      "type": "number",
      "description": "Years (1 to 5) Range.  This value is used to create a date range for Informal Enforcement Actions (IEA). Used along with p_iea (which indicates whether to look within or outside of the date range) to find IEAs within (or not within) the number of years specified.",
      "enum": [
        1,
        2,
        3,
        4,
        5
      ]
    },
    "p_ieaa": {
      "type": "string",
      "description": "Agency associated with Informal Enforcement Actions. If left blank, both agencies are included.\n- E = EPA\n- S = State",
      "enum": [
        "E",
        "S"
      ]
    },
    "p_qis": {
      "type": "string",
      "description": "Significant Quarters in Noncompliance Limiter.  Enter one of the following codes to limit results to facilities having given quarters of noncompliance.\n- Z = Zero quarters in noncompliance.\n- GE1 = One or more quarters in noncompliance.\n- GT1 = More than one quarters in noncompliance.\n- GE2 = Two or more quarters in noncompliance.\n- GT2 = More than two quarters in noncompliance.\n- GE4 = Four or more quarters in noncompliance.\n- GT4 = More than four quarters in noncompliance.\n- GE8 = Eight or more quarters in noncompliance.\n- GT8 = More than eight quarters in noncompliance.\n- GE12 = Twelve or more quarters in noncompliance.\n- GT12 = Twelve or more quarters in noncompliance.\n- 12 = Exactly twelve quarters in noncompliance.\nNote the seemingly incongruous of GT12 is deliberate.",
      "enum": [
        "Z",
        "GE1",
        "GT1",
        "GE2",
        "GT2",
        "GE4",
        "GT4",
        "GE8",
        "GT8",
        "GE12",
        "GT12",
        "12"
      ]
    },
    "p_pfead1": {
      "type": "string",
      "description": "Formal Enforcement Action Date Range Start.  Enter a date in MM/DD/YYYY format to set the start of the range for filtering by recent Formal Enforcement Action (FEA) taken against the facility within the last five years."
    },
    "p_pfead2": {
      "type": "string",
      "description": "Formal Enforcement Action Date Range End.  Enter a date in MM/DD/YYYY format to set the end of the date range for filtering by recent Formal Enforcement Action (FEA) taken against the facility within the last five years."
    },
    "p_pfeat": {
      "type": "string",
      "description": "Formal Enforcement Action (FEA) Code Filter.  Enter one or more three-letter FEA codes to restrict results to facilities with these attributes.  Use p_fead1 and p_fead2 parameters to further restrict this filter by entering a date range.  Provide multiple codes as a comma-delimited list."
    },
    "queryset": {
      "type": "number",
      "description": "Query Limiter.  Enter a value to limit the number of records returned for each query. Value cannot exceed 70,000."
    },
    "responseset": {
      "type": "number",
      "description": "Response Set Limiter. Enter a value to limit the number of records per page. Value cannot exceed 1,000."
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
      "$ref": "#/definitions/sdw3_Results"
    }
  },
  "required": [
    "Results"
  ],
  "type": "object"
}
```
## Operation: sdw_rest_services.metadata.get
Returns the JSON Object Name and ColumnId for usage with the qcolumns parameter for get_systems endpoint.

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
