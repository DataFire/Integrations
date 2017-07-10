# @datafire/epa_gov_rcra
Enforcement and Compliance History Online (ECHO) is a tool developed and maintained by EPA's Office of Enforcement and Compliance Assurance for public use. ECHO provides integrated compliance and enforcement information for about 800,000 regulated facilities nationwide.
<BR><BR>RCRA Rest Services provides multiple service endpoints, each with specific capabilities, to search and retrieve data on hazardous waste handlers/facilities regulated under the Resource Conservation and Recovery Act (RCRA).   The returned results reflect data drawn from EPA's RCRAInfo database.
<BR><BR>
The get_facilities, get_map, get_qid, and get_download end points are meant to be used together, while the enhanced get_facility_info end point is self contained.
  The get_facility_info end point returns either an array of state, county or zip clusters with summary statistics per cluster or an array of facilities.
<BR><BR>
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

## Operation: rcra_rest_services.get_download.get
Based on the QID obtained from a get_facilities or get_facility_info query, return a comma sepated vaule (CSV) file of the facilities found.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "output": {
      "type": "string",
      "description": "Output Format Flag.  Enter one of the following keywords:\n- CSV = Facility results formatted as comma delimited file download (default).\n- GEOJSOND = Facility results formatted as GeoJSON feature collection download."
    },
    "qid": {
      "type": "string",
      "description": "Query ID Selector.  Enter the QueryID number from a previously run query."
    },
    "qcolumns": {
      "type": "string",
      "description": "Used to cutomize service output.  A list of comma-separated column IDs of output objects that will be returned in the service query object or download.  Use the metadata service endpoint for a complete list of Ids and definitions."
    },
    "p_pretty_print": {
      "type": "number",
      "description": "Optional flag to request GeoJSON formatted results to be pretty printed.  Only provide a numeric value when the output needs to be human readable as pretty printing has a performance cost."
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
## Operation: rcra_rest_services.get_facilities.get
Validates query search parameters and returns query identifier.  Use the responseset parameter to set the page size

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
    "p_sa": {
      "type": "string",
      "description": "Facility street address. Enter a complete or partial street address."
    },
    "p_sa1": {
      "type": "string",
      "description": "Facility street address. Enter a complete or partial street address.   Note that p_sa1 is culmulative with p_sa."
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
    "p_stdist": {
      "type": "string",
      "description": "State District Filter.  Enter a single state district to restrict results."
    },
    "p_zip": {
      "type": "string",
      "description": "5-Digit ZIP Code Filter. Provide one or more 5-digit postal zip codes to filter results.  May contain multiple comma-separated values."
    },
    "p_frs": {
      "type": "string",
      "description": "Facility Registry Service ID Filter. Enter a single 12-digit FRS identifier to filter results."
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
    "p_sic": {
      "type": "string",
      "description": "Standard Industrial Classification (SIC) Code Filter.  Enter a single 4-digit SIC Code to filter results.  If more complex filtering is required, use p_sic2 and p_sic4."
    },
    "p_ncs": {
      "type": "string",
      "description": "North American Industry Classification System Filter. Enter two to six digits to filter results to facilities having matching NAICS codes.  Digits less than six will match to all codes beginning with the provided values."
    },
    "p_pen": {
      "type": "string",
      "description": "Last Penality Date Qualifier Filter.  Enter one of the following:   \n- NEVER = No Penalties\n- ANY = Any Penalty\n- LEXX = Less than or equal to XX months.  Provide a number in place of XX, e.g. \"LE5\" for a facility with a penalty within previous 5 months.\n- GTXX = Greater than XX months.  Provide a number in place of XX, eg. GT12, for a facility with the last penalty greater than 12 months ago."
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
    "p_usmex": {
      "type": "string",
      "description": "US-Mexico Border Flag.  Enter Y/N to restrict searches to facilities located within 100KM of the border.",
      "enum": [
        "Y",
        "N"
      ]
    },
    "p_sic2": {
      "type": "string",
      "description": "Standard Industrial Classification (SIC) Code Filter Alternate 2. Enter a wild-card search against SIC codes.  A final wild-card is always present allowing \"22\" to match all SIC codes beginning with 22.  Use the \"%\" character within strings to match any SIC values with the pattern.  For example, \"2%21\" matches 2021, 2121, 2221, etc."
    },
    "p_sic4": {
      "type": "string",
      "description": "Standard Industrial Classification (SIC) Code Filter Alternate 3.  Enter the first 2, 3 or 4 SIC code digits to filter results to facilities having those code prefixes.  As this alternative does not utilize an index, p_sic2 will generally be quicker."
    },
    "p_fa": {
      "type": "string",
      "description": "Federal Agency. 1 character or 5-character values; may contain multiple comma-separated values. ALL will retrieve all facilities where the federal agency code is not null.  Use the Federal Agencies lookup service to obtain a list of values."
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
    "p_cmps": {
      "type": "string",
      "description": "RCRA Current Compliance Status Limiter.  Enter one or more of the following keywords to limit results.  Enter multiple values as a comma-delimited list.\n- No Violation\n- In Violation\n- In Significant Noncompliance"
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
    "p_impw": {
      "type": "string",
      "description": "Discharging into Impaired Waters Flag. Enter Y to limit results to facilities with discharge to waterbodies listed as impaired in the ATTAINS database.",
      "enum": [
        "Y",
        "N"
      ]
    },
    "p_trep": {
      "type": "string",
      "description": "Current Toxics Release Inventory (TRI) Reporter Limiter.  Enter one of the following codes to limit results.\n- NONE = Never has reported to TRI.\n- CURR = Current TRI reporter.\n- NONCURR = Has reported to TRI in the past but not for the current reporting year.",
      "enum": [
        "NONE",
        "CURR",
        "NOTCURR"
      ]
    },
    "p_olr": {
      "type": "string",
      "description": "Toxics Release Inventory Pounds of Off-Site Land Releases Limiter.  Enter a keyword to filter results.\n- Z = Zero pounds of land releases.\n- GT0 = More than zero pounds of land releases.\n- GT1000 = More than one thousand pounds of land releases.\n- GT5000 = More than five thousand pounds of land releases.\n- GT10000 = More than ten thousand pounds of land releases.\n- GT20000 = More than twenty thousand pounds of land releases.\n- GT50000 = More than fifty thousand pounds of land releases."
    },
    "p_oct": {
      "type": "string",
      "description": "Toxic Release Inventory Pounds of Off-Site Chemical Releases Limiter.  Enter a keyword to filter results.\n- Z = Zero pounds of chemical releases.\n- GT0 = More than zero pounds of chemical releases.\n- GT1000 = More than one thousand pounds of chemical releases.\n- GT5000 = More than five thousand pounds of chemical releases.\n- GT10000 = More than ten thousand pounds of chemical releases.\n- GT20000 = More than twenty thousand pounds of chemical releases.\n- GT50000 = More than fifty thousand pounds of chemical releases.",
      "enum": [
        "Z",
        "GT0",
        "GT1000",
        "GT5000",
        "GT10000",
        "GT20000",
        "GT50000"
      ]
    },
    "p_pm": {
      "type": "string",
      "description": "Percent Minority Population Limiter.  Enter a value to restrict results to facilities with a given percentage of minority population within 3-mile radius.\n- NONE = 0%\n- GT5 = greater than 5%\n- GT10 = greater than 10%\n- GT25 = greater than 25%\n- GT50 = greater than 50%\n- GT75 = greater than 75%",
      "enum": [
        "NONE",
        "GT5",
        "GT10",
        "GT25",
        "GT50",
        "GT75"
      ]
    },
    "p_pd": {
      "type": "string",
      "description": "Population Density Limiter (per sq mile). Enter a value to limit results to facilities located in area of a given population density.\n- NONE = 0 population density per square mile\n- GT100 = More than 100 population density per square mile\n- GT500 = More than 500 population density per square mile\n- GT1000 = More than 1000 population density per square mile\n- GT5000 = More than 5000 population density per square mile\n- GT10000 = More than 10000 population density per square mile\n- GT20000 = More than 20000 population density per square mile\n",
      "enum": [
        "NONE",
        "GT100",
        "GT500",
        "GT1000",
        "GT5000",
        "GT10000",
        "GT20000"
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
    "p_huc": {
      "type": "string",
      "description": "2-, 4-, 6-, or 8-character watershed. May contain multiple comma-separated values."
    },
    "p_wbd": {
      "type": "string",
      "description": "2-, 4-, 6-, or 8-character watershed (WBD from the USGS Watershed Boundary Dataset). May contain multiple comma-separated values."
    },
    "p_pid": {
      "type": "string",
      "description": "Nine-digit permit IDs. May contain up to 2000 comma-separated values."
    },
    "p_med": {
      "type": "string",
      "description": "Filter Results by Media.\n- A = Air\n- M = RMP (Risk Management Plan)\n- R = RCRA (Hazardous Waste)\n- S = SDWA (Public Drinking Water Systems)\n- W = Water\n- ALL = Air and Water and RCRA",
      "enum": [
        "A",
        "M",
        "R",
        "S",
        "W",
        "ALL"
      ]
    },
    "p_ysl": {
      "type": "string",
      "description": "Last Facility Inspection [within / not within] Specified Date Range Indicator. The date range is determined by parameters p_idt1 and p_idt2 or by parameter p_ysly.\n- W = within date range\n- N = not within date range",
      "enum": [
        "W",
        "N",
        "NV"
      ]
    },
    "p_ysly": {
      "type": "number",
      "description": "Number of years (1 to 5) since last facility inspection.  A value of 1 means that it has been inspected within the year.",
      "enum": [
        1,
        2,
        3,
        4,
        5
      ]
    },
    "p_ysla": {
      "type": "string",
      "description": "Facility Last Inspection Code Filter.  If left blank, both agencies are included.  Enter a value to limit results:\n- E = EPA\n- S = State",
      "enum": [
        "E",
        "S",
        "A"
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
    "p_tribeid": {
      "type": "number",
      "description": "Numeric code for tribe (or list of tribes)."
    },
    "p_tribename": {
      "type": "string",
      "description": "Tribe Name Filter.  Enter a single tribe name to filter results."
    },
    "p_tribedist": {
      "type": "number",
      "description": "Proximity to tribal land limiter. Enter an amount of mile between 0 and 25 to filter results.  This parameter is only evaluated if p_tribeid is populated."
    },
    "p_owop": {
      "type": "string",
      "description": "Owner/Operator code filter.  Enter one of the following codes to filter results:\n- PUBLIC\n- PRIVATE\n- FEDERAL",
      "enum": [
        "PRIVATE",
        "PUBLIC",
        "FEDERAL"
      ]
    },
    "p_agoo": {
      "type": "string",
      "description": "Indicates whether to AND or OR the Owner/Operator parameter (p_owop) and the federal agency code (p_fa) parameters.",
      "enum": [
        "AND",
        "OR"
      ]
    },
    "p_idt1": {
      "type": "string",
      "description": "Beginning of date range of most recent facility inspection."
    },
    "p_idt2": {
      "type": "string",
      "description": "End of date range of most recent facility inspection."
    },
    "p_pityp": {
      "type": "string",
      "description": "Inspection Type:\n- CAC = Corrective Action Inspection\n- CAV = Compliance Assistance Visit\n- CDI = Case Development Inspection\n- CEI = Inspection Inspection\n- CSE = Compliance Schedule Evaluation\n- FCI = Focused Compliance\n- FRR = Financial Record Review\n- FSD = Facility Self Disclosure\n- FUI = Follow-Up Inspection\n- GME = Groundwater Monitoring Evaluation\n- NRR = Non-Financial Record Review\n- OAM = Operation and Maintenance Inspection\nMay contain multiple comma-separated values."
    },
    "p_cifdi": {
      "type": "string",
      "description": "Compliance issuess found during inspection.",
      "enum": [
        "Any",
        "Yes",
        "No",
        "Undetermined"
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
    "p_psncq": {
      "type": "string",
      "description": "Quarters in Significant Noncompliance Limiter.  Enter a coded value to limit results to facilities with given quarter of significant noncompliance.\n- Z = Zero quarters in significant noncompliance.\n- GEXX = Replacing XX with a numeric value, that number of quarterd or more in significant noncompliance.\n- GTXX = Replacing XX with a numeric value, more than that number of quarters in significant noncompliance.",
      "enum": [
        "GT1",
        "GE1",
        "GT2",
        "GE2",
        "GT4",
        "GE4",
        "GT8",
        "GE8",
        "GT12",
        "GE12"
      ]
    },
    "p_dwd": {
      "type": "string",
      "description": "Direct Water Discharges. Pounds of toxic chemicals released directly to surface water as reported to the Toxics Release Inventory.",
      "enum": [
        "0",
        "GT0",
        "GT1000",
        "GT5000",
        "GT10000",
        "GT20000",
        "GT50000"
      ]
    },
    "p_violy": {
      "type": "number",
      "description": "Years Since Last Violation Limiter.  Enter a value in the format GTXX where XX is replaced by the number of years since the last violation.",
      "enum": [
        1,
        2,
        3
      ]
    },
    "p_ncv": {
      "type": "string",
      "description": "Number of Current Violations Limiter.  Enter a value in the format GTXX replacing XX with a numeric value to select facilities with an equal to greater count of current violations.  Enter Z to select facilities with zero violations."
    },
    "p_fcv": {
      "type": "string",
      "description": "Years of Continuing Violations Limiter.  Enter a value in the format GTXX where XX is replaced by the number of years in continuing violation."
    },
    "p_violt": {
      "type": "string",
      "description": "RCRA Violation Type.  Enter one or more Resource Conservation and Recovery Act violation types to limit results.  Provide multiple values as a comma-delimited list."
    },
    "p_des": {
      "type": "string",
      "description": "Universe Designation Limiter.  Enter one or more universe designation codes.  Provide multiple values as a comma-delimited list.  Use code \"TSDF\" to return the full enforcement TSDF universe and \"Operating TSDF\" to return the operating TSDF universe.\n"
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
    "p_pidall": {
      "type": "string",
      "description": "Controls whether search is restricted to existing system. Y means the search will match the p_pid parameter against all associated permits (AIR, RCRA, SDWIS, etc).",
      "enum": [
        "Y",
        "N"
      ]
    },
    "p_fac_ico": {
      "type": "string",
      "description": "FRS tribal land code flag.  Enter \"Y\" or \"N\" to include or exclude facilities based on FRS tribal land code.",
      "enum": [
        "Y",
        "N"
      ]
    },
    "p_icoo": {
      "type": "string",
      "description": "Indian country search and/or flag.  Enter \"Y\" to set indian country search conditions to return any results found using p_ico, p_fac_ico or p_fac_icoo.  Otherwise only results matching all provided p_ico, p_fac_ico or p_fac_icoo conditions will be returned."
    },
    "p_fac_icos": {
      "type": "string",
      "description": "FRS tribal land spatial flag.  Enter \"Y\" or \"N\" to include or exclude facilities based on FRS tribal land spatial flag."
    },
    "p_ejscreen": {
      "type": "string",
      "description": "Enter \"Y\" to limit facilities to Census block groups where one of more Environmental Justice indexes above 80th percentile."
    },
    "p_limit_addr": {
      "type": "string",
      "description": "Limit Address Search Flag.  Enter Y to restrict facility searches to native data source only.  ",
      "enum": [
        "Y",
        "N"
      ]
    },
    "p_lat": {
      "type": "number",
      "description": "Latitude location in decimal degrees."
    },
    "p_long": {
      "type": "number",
      "description": "Longitude location in decimal degrees."
    },
    "p_radius": {
      "type": "number",
      "description": "Spatial Search Radius.  Enter a radius up to 100 miles in which to spatially search for facilities."
    },
    "p_decouple": {
      "type": "string",
      "description": "Decouple Inspection Code Search Flag.  Enter \"Y\" to search for inspection code types with p_pityp without respect to the date range search provided with p_ysl* parameters.",
      "enum": [
        "Y",
        "N"
      ]
    },
    "p_ejscreen_over80cnt": {
      "type": "string"
    },
    "queryset": {
      "type": "number",
      "description": "Query Limiter.  Enter a value to limit the number of records returned for each query. Value cannot exceed 70,000."
    },
    "responseset": {
      "type": "number",
      "description": "Response Set Limiter. Enter a value to limit the number of records per page. Value cannot exceed 1,000."
    },
    "tablelist": {
      "type": "string",
      "description": "Table List Flag. Enter a Y to display the first page of facility results.",
      "enum": [
        "Y",
        "N"
      ]
    },
    "maplist": {
      "type": "string",
      "description": "Map List Flag.  Provide a Y to return mappable coordinates representing the full geographic extent of the queryset (all facilities that met the selection criteria).",
      "enum": [
        "Y",
        "N"
      ]
    },
    "summarylist": {
      "type": "string",
      "description": "Summary List Flag.  Enter a Y to return a list of summary statistics based on the parameters submitted to the query service.",
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
  "description": "Root Object",
  "properties": {
    "Results": {
      "$ref": "#/definitions/rcr1_Results"
    }
  },
  "required": [
    "Results"
  ],
  "type": "object"
}
```
## Operation: rcra_rest_services.get_facility_info.get
Returns either an array of Facilities or an array of Clusters that meet the specified search criteria.

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
      "description": "Output Format Flag.  Enter one of the following keywords:\n- JSON = Data model formatted as Javascript Object Notation (default).\n- JSONP = Data model formatted as Javascript Object Notation with Padding.  \n- XML = Data model formatted as Extensible Markup Language.\n- CSV = Facility results formatted as comma delimited file download.\n- GEOJSON = Facility results formatted as GeoJSON feature collection.\n- GEOJSONP = Facility results formatted as GeoJSON feature collection with Padding.\n- GEOJSOND = Facility results formatted as GeoJSON feature collection download."
    },
    "p_fn": {
      "type": "string",
      "description": "Facility Name Filter. Enter one or more case-insensitive facility names to filter results.  Provide multiple values as a comma-delimited list.  See p_fntype for additional modifiers."
    },
    "p_sa": {
      "type": "string",
      "description": "Facility street address. Enter a complete or partial street address."
    },
    "p_sa1": {
      "type": "string",
      "description": "Facility street address. Enter a complete or partial street address.   Note that p_sa1 is culmulative with p_sa."
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
    "p_stdist": {
      "type": "string",
      "description": "State District Filter.  Enter a single state district to restrict results."
    },
    "p_zip": {
      "type": "string",
      "description": "5-Digit ZIP Code Filter. Provide one or more 5-digit postal zip codes to filter results.  May contain multiple comma-separated values."
    },
    "p_frs": {
      "type": "string",
      "description": "Facility Registry Service ID Filter. Enter a single 12-digit FRS identifier to filter results."
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
    "p_sic": {
      "type": "string",
      "description": "Standard Industrial Classification (SIC) Code Filter.  Enter a single 4-digit SIC Code to filter results.  If more complex filtering is required, use p_sic2 and p_sic4."
    },
    "p_ncs": {
      "type": "string",
      "description": "North American Industry Classification System Filter. Enter two to six digits to filter results to facilities having matching NAICS codes.  Digits less than six will match to all codes beginning with the provided values."
    },
    "p_pen": {
      "type": "string",
      "description": "Last Penality Date Qualifier Filter.  Enter one of the following:   \n- NEVER = No Penalties\n- ANY = Any Penalty\n- LEXX = Less than or equal to XX months.  Provide a number in place of XX, e.g. \"LE5\" for a facility with a penalty within previous 5 months.\n- GTXX = Greater than XX months.  Provide a number in place of XX, eg. GT12, for a facility with the last penalty greater than 12 months ago."
    },
    "xmin": {
      "type": "number",
      "description": "Minimum longitude value in decimal degrees."
    },
    "ymin": {
      "type": "number",
      "description": "Minimum latitude value in decimal degrees."
    },
    "xmax": {
      "type": "number",
      "description": "Maximum longitude value in decimal degrees."
    },
    "ymax": {
      "type": "number",
      "description": "Maximum latitude value in decimal degrees."
    },
    "p_usmex": {
      "type": "string",
      "description": "US-Mexico Border Flag.  Enter Y/N to restrict searches to facilities located within 100KM of the border.",
      "enum": [
        "Y",
        "N"
      ]
    },
    "p_sic2": {
      "type": "string",
      "description": "Standard Industrial Classification (SIC) Code Filter Alternate 2. Enter a wild-card search against SIC codes.  A final wild-card is always present allowing \"22\" to match all SIC codes beginning with 22.  Use the \"%\" character within strings to match any SIC values with the pattern.  For example, \"2%21\" matches 2021, 2121, 2221, etc."
    },
    "p_sic4": {
      "type": "string",
      "description": "Standard Industrial Classification (SIC) Code Filter Alternate 3.  Enter the first 2, 3 or 4 SIC code digits to filter results to facilities having those code prefixes.  As this alternative does not utilize an index, p_sic2 will generally be quicker."
    },
    "p_fa": {
      "type": "string",
      "description": "Federal Agency. 1 character or 5-character values; may contain multiple comma-separated values. ALL will retrieve all facilities where the federal agency code is not null.  Use the Federal Agencies lookup service to obtain a list of values."
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
    "p_cmps": {
      "type": "string",
      "description": "RCRA Current Compliance Status Limiter.  Enter one or more of the following keywords to limit results.  Enter multiple values as a comma-delimited list.\n- No Violation\n- In Violation\n- In Significant Noncompliance"
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
    "p_impw": {
      "type": "string",
      "description": "Discharging into Impaired Waters Flag. Enter Y to limit results to facilities with discharge to waterbodies listed as impaired in the ATTAINS database.",
      "enum": [
        "Y",
        "N"
      ]
    },
    "p_trep": {
      "type": "string",
      "description": "Current Toxics Release Inventory (TRI) Reporter Limiter.  Enter one of the following codes to limit results.\n- NONE = Never has reported to TRI.\n- CURR = Current TRI reporter.\n- NONCURR = Has reported to TRI in the past but not for the current reporting year.",
      "enum": [
        "NONE",
        "CURR",
        "NOTCURR"
      ]
    },
    "p_olr": {
      "type": "string",
      "description": "Toxics Release Inventory Pounds of Off-Site Land Releases Limiter.  Enter a keyword to filter results.\n- Z = Zero pounds of land releases.\n- GT0 = More than zero pounds of land releases.\n- GT1000 = More than one thousand pounds of land releases.\n- GT5000 = More than five thousand pounds of land releases.\n- GT10000 = More than ten thousand pounds of land releases.\n- GT20000 = More than twenty thousand pounds of land releases.\n- GT50000 = More than fifty thousand pounds of land releases."
    },
    "p_oct": {
      "type": "string",
      "description": "Toxic Release Inventory Pounds of Off-Site Chemical Releases Limiter.  Enter a keyword to filter results.\n- Z = Zero pounds of chemical releases.\n- GT0 = More than zero pounds of chemical releases.\n- GT1000 = More than one thousand pounds of chemical releases.\n- GT5000 = More than five thousand pounds of chemical releases.\n- GT10000 = More than ten thousand pounds of chemical releases.\n- GT20000 = More than twenty thousand pounds of chemical releases.\n- GT50000 = More than fifty thousand pounds of chemical releases.",
      "enum": [
        "Z",
        "GT0",
        "GT1000",
        "GT5000",
        "GT10000",
        "GT20000",
        "GT50000"
      ]
    },
    "p_pm": {
      "type": "string",
      "description": "Percent Minority Population Limiter.  Enter a value to restrict results to facilities with a given percentage of minority population within 3-mile radius.\n- NONE = 0%\n- GT5 = greater than 5%\n- GT10 = greater than 10%\n- GT25 = greater than 25%\n- GT50 = greater than 50%\n- GT75 = greater than 75%",
      "enum": [
        "NONE",
        "GT5",
        "GT10",
        "GT25",
        "GT50",
        "GT75"
      ]
    },
    "p_pd": {
      "type": "string",
      "description": "Population Density Limiter (per sq mile). Enter a value to limit results to facilities located in area of a given population density.\n- NONE = 0 population density per square mile\n- GT100 = More than 100 population density per square mile\n- GT500 = More than 500 population density per square mile\n- GT1000 = More than 1000 population density per square mile\n- GT5000 = More than 5000 population density per square mile\n- GT10000 = More than 10000 population density per square mile\n- GT20000 = More than 20000 population density per square mile\n",
      "enum": [
        "NONE",
        "GT100",
        "GT500",
        "GT1000",
        "GT5000",
        "GT10000",
        "GT20000"
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
    "p_huc": {
      "type": "string",
      "description": "2-, 4-, 6-, or 8-character watershed. May contain multiple comma-separated values."
    },
    "p_wbd": {
      "type": "string",
      "description": "2-, 4-, 6-, or 8-character watershed (WBD from the USGS Watershed Boundary Dataset). May contain multiple comma-separated values."
    },
    "p_pid": {
      "type": "string",
      "description": "Nine-digit permit IDs. May contain up to 2000 comma-separated values."
    },
    "p_med": {
      "type": "string",
      "description": "Filter Results by Media.\n- A = Air\n- M = RMP (Risk Management Plan)\n- R = RCRA (Hazardous Waste)\n- S = SDWA (Public Drinking Water Systems)\n- W = Water\n- ALL = Air and Water and RCRA",
      "enum": [
        "A",
        "M",
        "R",
        "S",
        "W",
        "ALL"
      ]
    },
    "p_ysl": {
      "type": "string",
      "description": "Last Facility Inspection [within / not within] Specified Date Range Indicator. The date range is determined by parameters p_idt1 and p_idt2 or by parameter p_ysly.\n- W = within date range\n- N = not within date range",
      "enum": [
        "W",
        "N",
        "NV"
      ]
    },
    "p_ysly": {
      "type": "number",
      "description": "Number of years (1 to 5) since last facility inspection.  A value of 1 means that it has been inspected within the year.",
      "enum": [
        1,
        2,
        3,
        4,
        5
      ]
    },
    "p_ysla": {
      "type": "string",
      "description": "Facility Last Inspection Code Filter.  If left blank, both agencies are included.  Enter a value to limit results:\n- E = EPA\n- S = State",
      "enum": [
        "E",
        "S",
        "A"
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
    "p_tribeid": {
      "type": "number",
      "description": "Numeric code for tribe (or list of tribes)."
    },
    "p_tribename": {
      "type": "string",
      "description": "Tribe Name Filter.  Enter a single tribe name to filter results."
    },
    "p_tribedist": {
      "type": "number",
      "description": "Proximity to tribal land limiter. Enter an amount of mile between 0 and 25 to filter results.  This parameter is only evaluated if p_tribeid is populated."
    },
    "p_owop": {
      "type": "string",
      "description": "Owner/Operator code filter.  Enter one of the following codes to filter results:\n- PUBLIC\n- PRIVATE\n- FEDERAL",
      "enum": [
        "PRIVATE",
        "PUBLIC",
        "FEDERAL"
      ]
    },
    "p_agoo": {
      "type": "string",
      "description": "Indicates whether to AND or OR the Owner/Operator parameter (p_owop) and the federal agency code (p_fa) parameters.",
      "enum": [
        "AND",
        "OR"
      ]
    },
    "p_idt1": {
      "type": "string",
      "description": "Beginning of date range of most recent facility inspection."
    },
    "p_idt2": {
      "type": "string",
      "description": "End of date range of most recent facility inspection."
    },
    "p_pityp": {
      "type": "string",
      "description": "Inspection Type:\n- CAC = Corrective Action Inspection\n- CAV = Compliance Assistance Visit\n- CDI = Case Development Inspection\n- CEI = Inspection Inspection\n- CSE = Compliance Schedule Evaluation\n- FCI = Focused Compliance\n- FRR = Financial Record Review\n- FSD = Facility Self Disclosure\n- FUI = Follow-Up Inspection\n- GME = Groundwater Monitoring Evaluation\n- NRR = Non-Financial Record Review\n- OAM = Operation and Maintenance Inspection\nMay contain multiple comma-separated values."
    },
    "p_cifdi": {
      "type": "string",
      "description": "Compliance issuess found during inspection.",
      "enum": [
        "Any",
        "Yes",
        "No",
        "Undetermined"
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
    "p_psncq": {
      "type": "string",
      "description": "Quarters in Significant Noncompliance Limiter.  Enter a coded value to limit results to facilities with given quarter of significant noncompliance.\n- Z = Zero quarters in significant noncompliance.\n- GEXX = Replacing XX with a numeric value, that number of quarterd or more in significant noncompliance.\n- GTXX = Replacing XX with a numeric value, more than that number of quarters in significant noncompliance.",
      "enum": [
        "GT1",
        "GE1",
        "GT2",
        "GE2",
        "GT4",
        "GE4",
        "GT8",
        "GE8",
        "GT12",
        "GE12"
      ]
    },
    "p_dwd": {
      "type": "string",
      "description": "Direct Water Discharges. Pounds of toxic chemicals released directly to surface water as reported to the Toxics Release Inventory.",
      "enum": [
        "0",
        "GT0",
        "GT1000",
        "GT5000",
        "GT10000",
        "GT20000",
        "GT50000"
      ]
    },
    "p_violy": {
      "type": "number",
      "description": "Years Since Last Violation Limiter.  Enter a value in the format GTXX where XX is replaced by the number of years since the last violation.",
      "enum": [
        1,
        2,
        3
      ]
    },
    "p_ncv": {
      "type": "string",
      "description": "Number of Current Violations Limiter.  Enter a value in the format GTXX replacing XX with a numeric value to select facilities with an equal to greater count of current violations.  Enter Z to select facilities with zero violations."
    },
    "p_fcv": {
      "type": "string",
      "description": "Years of Continuing Violations Limiter.  Enter a value in the format GTXX where XX is replaced by the number of years in continuing violation."
    },
    "p_violt": {
      "type": "string",
      "description": "RCRA Violation Type.  Enter one or more Resource Conservation and Recovery Act violation types to limit results.  Provide multiple values as a comma-delimited list."
    },
    "p_des": {
      "type": "string",
      "description": "Universe Designation Limiter.  Enter one or more universe designation codes.  Provide multiple values as a comma-delimited list.  Use code \"TSDF\" to return the full enforcement TSDF universe and \"Operating TSDF\" to return the operating TSDF universe.\n"
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
    "p_pidall": {
      "type": "string",
      "description": "Controls whether search is restricted to existing system. Y means the search will match the p_pid parameter against all associated permits (AIR, RCRA, SDWIS, etc).",
      "enum": [
        "Y",
        "N"
      ]
    },
    "p_fac_ico": {
      "type": "string",
      "description": "FRS tribal land code flag.  Enter \"Y\" or \"N\" to include or exclude facilities based on FRS tribal land code.",
      "enum": [
        "Y",
        "N"
      ]
    },
    "p_icoo": {
      "type": "string",
      "description": "Indian country search and/or flag.  Enter \"Y\" to set indian country search conditions to return any results found using p_ico, p_fac_ico or p_fac_icoo.  Otherwise only results matching all provided p_ico, p_fac_ico or p_fac_icoo conditions will be returned."
    },
    "p_fac_icos": {
      "type": "string",
      "description": "FRS tribal land spatial flag.  Enter \"Y\" or \"N\" to include or exclude facilities based on FRS tribal land spatial flag."
    },
    "p_ejscreen": {
      "type": "string",
      "description": "Enter \"Y\" to limit facilities to Census block groups where one of more Environmental Justice indexes above 80th percentile."
    },
    "p_limit_addr": {
      "type": "string",
      "description": "Limit Address Search Flag.  Enter Y to restrict facility searches to native data source only.  ",
      "enum": [
        "Y",
        "N"
      ]
    },
    "p_lat": {
      "type": "number",
      "description": "Latitude location in decimal degrees."
    },
    "p_long": {
      "type": "number",
      "description": "Longitude location in decimal degrees."
    },
    "p_radius": {
      "type": "number",
      "description": "Spatial Search Radius.  Enter a radius up to 100 miles in which to spatially search for facilities."
    },
    "p_decouple": {
      "type": "string",
      "description": "Decouple Inspection Code Search Flag.  Enter \"Y\" to search for inspection code types with p_pityp without respect to the date range search provided with p_ysl* parameters.",
      "enum": [
        "Y",
        "N"
      ]
    },
    "p_ejscreen_over80cnt": {
      "type": "string"
    },
    "queryset": {
      "type": "number",
      "description": "Query Limiter.  Enter a value to limit the number of records returned for each query. Value cannot exceed 70,000."
    },
    "responseset": {
      "type": "number",
      "description": "Response Set Limiter. Enter a value to limit the number of records per page. Value cannot exceed 1,000."
    },
    "summarylist": {
      "type": "string",
      "description": "Summary List Flag.  Enter a Y to return a list of summary statistics based on the parameters submitted to the query service.",
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
    },
    "p_pretty_print": {
      "type": "number",
      "description": "Optional flag to request GeoJSON formatted results to be pretty printed.  Only provide a numeric value when the output needs to be human readable as pretty printing has a performance cost."
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
      "$ref": "#/definitions/rcr2_Results"
    }
  },
  "required": [
    "Results"
  ],
  "type": "object"
}
```
## Operation: rcra_rest_services.get_geojson.get
Based on the QID obtained from a get_facilities or get_facility_info query, return GeoJSON of the facilities found.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "output": {
      "type": "string",
      "description": "Output Format Flag.  Enter one of the following keywords:\n- GEOJSON = Facility results formatted as GeoJSON feature collection (default).\n- GEOJSONP = Facility results formatted as GeoJSON feature collection with Padding.\n- GEOJSOND = Facility results formatted as GeoJSON feature collection download."
    },
    "qid": {
      "type": "string",
      "description": "Query ID Selector.  Enter the QueryID number from a previously run query."
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
    },
    "p_pretty_print": {
      "type": "number",
      "description": "Optional flag to request GeoJSON formatted results to be pretty printed.  Only provide a numeric value when the output needs to be human readable as pretty printing has a performance cost."
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
  "$ref": "#/definitions/rcr5_FeatureCollection"
}
```
## Operation: rcra_rest_services.get_info_clusters.get
Based on the QID obtained from a clustered get_facility_info query, download cluster facility information as either a CSV or GEOJSON file.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "output": {
      "type": "string",
      "description": "Output Format Flag.  Enter one of the following keywords:\n- CSV = Facility results formatted as comma delimited file download (default).\n- GEOJSOND = Facility results formatted as GeoJSON feature collection download."
    },
    "p_qid": {
      "type": "string",
      "description": "Query ID Selector.  Enter the QueryID number from a previously run query."
    },
    "p_pretty_print": {
      "type": "number",
      "description": "Optional flag to request GeoJSON formatted results to be pretty printed.  Only provide a numeric value when the output needs to be human readable as pretty printing has a performance cost."
    }
  },
  "additionalProperties": false,
  "required": [
    "p_qid"
  ]
}
```
### Output Schema
```json
{
  "type": "file"
}
```
## Operation: rcra_rest_services.get_map.get
The purpose of the GET_MAP service is to display facility coordinates and facility clusters related to a get_facilities facility query. Currently, the maximum number of coordinates returned is 500. GET_MAP performs automatic clustering at the state, county, and zip code levels to maximize the number of coordinates returned.

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
    },
    "p_id": {
      "type": "string",
      "description": "Identifier for the service."
    }
  },
  "additionalProperties": false,
  "required": [
    "qid",
    "p_id"
  ]
}
```
### Output Schema
```json
{
  "description": "Root Object",
  "properties": {
    "MapOutput": {
      "$ref": "#/definitions/rcr3_MapOutput"
    }
  },
  "required": [
    "MapOutput"
  ],
  "type": "object"
}
```
## Operation: rcra_rest_services.get_qid.get
GET_QID is passed with a query ID corresponding to a previously run get_facilities query. It then returns a Facility object containing all matching facilities. The main purpose of GET_QID is for large querysets that contain multiple pages (responsesets) of output. GET_QID allows for pagination and for the selection and sorting of columns. 

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
  "description": "Root Object",
  "properties": {
    "Results": {
      "$ref": "#/definitions/rcr4_Results"
    }
  },
  "required": [
    "Results"
  ],
  "type": "object"
}
```
## Operation: rcra_rest_services.metadata.get
Returns the JSON Object Name and ColumnId for usage with the qcolumns parameter for get_qid, get_facility_info and other service endpoints.

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
