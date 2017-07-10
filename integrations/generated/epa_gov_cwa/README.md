# @datafire/epa_gov_cwa
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

## Operation: cwa_rest_services.get_download.get
Based on the QID obtained from a get_facilities or get_facility_info query, return GeoJSON of the facilities found.

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
## Operation: cwa_rest_services.get_facilities.get
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
    "p_ff": {
      "type": "string",
      "description": "Federal Facility Indicator Flag. Enter Y to restrict searches to federal facilities.",
      "enum": [
        "Y"
      ]
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
    "p_maj": {
      "type": "string",
      "description": "Major Facility Flag.  Enter Y to restrict results to Major facilities only.",
      "enum": [
        "Y",
        "N"
      ]
    },
    "p_mact": {
      "type": "string",
      "description": "CAA Maximum Achievable Control Technology (MACT) Subpart codes (alpha ID between 1 and 7 characters) applicable to the facility."
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
    "p_imp_pol": {
      "type": "string",
      "description": "Facility is discharging pollutants that are potentially contributing to the impairment of local waterbodies according to the ATTAINS database.",
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
    "p_pid": {
      "type": "string",
      "description": "Nine-digit permit IDs. May contain up to 2000 comma-separated values."
    },
    "p_med": {
      "type": "string",
      "description": "Filter Results by Media.\n- A = Air\n- M = RMP (Risk Management Plan)\n- R = RCRA (Hazardous Waste)\n- S = SDWA (Public Drinking Water Systems)\n- ALL = Air and RCRA and Water",
      "enum": [
        "A",
        "M",
        "R",
        "S",
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
    "p_pstat": {
      "type": "string",
      "description": "Permit Status Filter.  Enter one or more of the following codes.  Provide multiple values as a comma-delimited list.\n- EFF = Effective\n- EXP = Expired\n- PND = Pending\n- TRM = Terminated\n- RET = Retired\n- NON = Not Needed\n- ADC = Admin Continued"
    },
    "p_ptype": {
      "type": "string",
      "description": "Permit Type Filter. Enter one or more code values to filter results.  Provide multiple values as a comma-delimited list.\n- NPD = NPDES Individual Permit\n- NGP = NPDES Master General Permit\n- GPC = General Permit Covered Facility\n- SNN = State Issued Master General Permit (Non-NPDES)\n- IIU = Individual IU Permit (Non-NPDES)\n- SIN = Individual State Issued Permit (Non-NPDES)\n- APR = Associated Permit Record\n- UFT = Unpermitted Facility"
    },
    "p_pcomp": {
      "type": "string",
      "description": "Permit Component Code Filter.  Enter one or more codes to filter results.  Provide multiple values as a comma-delimited list.\n- PRE = Pretreatment\n- CAF = CAFO\n- CSO = CSO\n- POT = POTW\n- BIO = Biosolids\n- SWS = Storm Water Small MS4s\n- SWM = Storm Water Medium/Large MS4s\n- SWI = Storm Water Industrial\n- SWC = Storm Water Construction"
    },
    "p_plimits": {
      "type": "string",
      "description": "Permit Limits Present Flag.  Enter Y to limit results to facilities have present permit limits.",
      "enum": [
        "Y",
        "N"
      ]
    },
    "p_pcss": {
      "type": "string",
      "description": "Combined Sewer Systems Outflows Limiter.  Enter one of the following to limit results to facilities having the given count of CSS outflows.\n- ALL = returns all facilities, regardless of the number of outflows.\n- GE1 = returns facilities with one or more outflows.\n- GE10 = returns facilities with ten or more outflows.\n- GE50 = returns facilities with fifty or more outflows.",
      "enum": [
        "ALL",
        "GE1",
        "GE10",
        "GE50"
      ]
    },
    "p_pexp": {
      "type": "string",
      "description": "Permit Expired or Administratively Continued Limiter.  Enter one of the following values to filter results.\n- EXP = limit results to facilities with permits expired or administratively continued.\n- EXPLE1YR = limit resuls to facilities with permits expired administratively continued within the past year.\n- EXPGT1YR = limit resuls to facilities with permits expired administratively continued more than a year ago.",
      "enum": [
        "EXP",
        "EXPLE1YR",
        "EXPGT1YR"
      ]
    },
    "p_owop": {
      "type": "string",
      "description": "Owner/Operator code filter.  Enter one of the following values to restrict results.\n- Federal = Federal facilities regulated under the NPDES program.\n- POTW = Publicly owned treatment works. Treatment works that are owned by a State, Tribe, or municipality.\n- Non-POTW = Non-publicly owned treatment works. Often referred to as \"non-municipals\" or \"industrials\".",
      "enum": [
        "FEDERAL",
        "POTW",
        "NON-POTW"
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
      "description": "Inspection Type Code.  See ICIS Compliance Monitor Types lookup serivce for a list of available codes and descriptions."
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
    "p_pccs": {
      "type": "string",
      "description": "Current Compliance Status:\n- E�= EffViol\n- S�= CSchVio\n- X = EffNMth\n- T = CSchRpt\n- D�= DMR NR\n- N�= RptViol\n- P�= ResPend\n- R�= Resolvd\n- M�= Manual\n- V�= NonRNCV\n- U = N/A\n- W = N/A\nMay contain multiple comma-separated values."
    },
    "p_pexcd": {
      "type": "string",
      "description": "3-Year Effluent Exceedances Limiter.  Enter a value to restrict results to facilities with the given amount of exceedances in the past 3 years.\n- 0 = facilities with no exceedances\n- GE0 = facilities with one or more exceedances\n- GE10 = facilities with ten or more exceedances\n- GE50 = facilities with fifty or more exceedances\n- GE100 = facilities with one hundred or more exceedances",
      "enum": [
        "0",
        "GE0",
        "GE10",
        "GE50",
        "GE100"
      ]
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
    "p_pctrack": {
      "type": "string",
      "description": "Compliance Tracking Limiter. Provide a keyword to indicate the extent to which data is being entered and effluent exceedances are being identified.\n- Off\n- Partial\n- On",
      "enum": [
        "Off",
        "Partial",
        "On"
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
    "p_pt": {
      "type": "string",
      "description": "POTW Transfers. Pounds of toxic chemicals transferred to a Publicly Operated Treatment Works (POTW) as reported to the Toxics Release Inventory.",
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
    "p_pdwdist": {
      "type": "string",
      "description": "Distance (in miles) to downstream drinking water intake.",
      "enum": [
        "N",
        "LT1",
        "LT2",
        "LT5",
        "LT10",
        "LT15"
      ]
    },
    "p_pswdpc": {
      "type": "string",
      "description": "Pollutant Category Code:  Values: WTR for Water, AIR for Air"
    },
    "p_pswdmp": {
      "type": "string",
      "description": "Used to determine limit begin and end dates for surface water discharges. Number represents years from current date.",
      "enum": [
        "1",
        "2",
        "3",
        "4",
        "5"
      ]
    },
    "p_pswpol": {
      "type": "string",
      "description": "For CWA, pollutant names for surface water discharges. for Drinking Water, SDWIS Violation contaminant codes for unaddressed violations that have occurred in the last 3 years. May contain multiple comma-separated values."
    },
    "p_pswcas": {
      "type": "string",
      "description": "CAS numbers for surface water discharges. May contain multiple comma-separated values."
    },
    "p_pswparam": {
      "type": "string",
      "description": "Parameter codes for surface water discharges. May contain multiple comma-separated values."
    },
    "p_pswvio": {
      "type": "string",
      "description": "Used in conjuction with parameters p_pswpol and p_pswparam, indicates whether search should only include pollutants with violations.",
      "enum": [
        "Y",
        "N"
      ]
    },
    "p_wbd": {
      "type": "string",
      "description": "2-, 4-, 6-, or 8-character watershed (WBD from the USGS Watershed Boundary Dataset). May contain multiple comma-separated values."
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
    "p_months_last_dmr": {
      "type": "number",
      "description": "The number of months since the last Discharge Monitoring Report has been submitted."
    },
    "p_last_dmr_within": {
      "type": "string",
      "description": "W value returns facilities that have submitted DMRs within the number of months specified by p_months_last_dmr. An N value returns facilities that have not submitted a DMR within the specified number of months.",
      "enum": [
        "W",
        "N"
      ]
    },
    "p_indsw": {
      "type": "string",
      "description": "Industrial Stormwater Permit Flag.  Enter a Y or N to filter results by this type of permit.",
      "enum": [
        "Y",
        "N"
      ]
    },
    "p_msgp_ptype": {
      "type": "string",
      "description": "Multi-Sector General Purpose Permit Type.  Enter a value to filter results by MSGP Permit Type.\n- NOI = Notice of Intent\n- NOE = No Exposure Certification",
      "enum": [
        "NOI",
        "NOE"
      ]
    },
    "p_iagency": {
      "type": "string",
      "description": "Issuing Agency Limiter.  Enter a single value to filter results by the issuing agency, e.g. \"State\" or \"EPA\"."
    },
    "p_isws": {
      "type": "string",
      "description": "Multi-Sector General Purpose Permit Subsector Individual Identifier.  Enter a value to filter results."
    },
    "p_iswss": {
      "type": "string",
      "description": "Multi-Sector General Purpose Permit Subsector Group Code.  Enter a value to filter results."
    },
    "p_iswssID": {
      "type": "string",
      "description": "Multi-Sector General Purpose Permit Sector Code.  Enter a value to filter results."
    },
    "p_ds1": {
      "type": "string",
      "description": "Submitted Date Filter Start.  To filter by the date of submission, enter a start date here and an end date in the p_ds2 parameter.  Both dates are required for filtering."
    },
    "p_ds2": {
      "type": "string",
      "description": "Submitted Date Filter End.  To filter by the date of submission, enter an end date here and a start date in the p_ds1 parameter.  Both dates are required for filtering."
    },
    "p_da1": {
      "type": "string",
      "description": "Active Date Filter Start.  To filter by the active date, enter a start date here and an end date in the p_da2 parameter.  Both dates are required for filtering."
    },
    "p_da2": {
      "type": "string",
      "description": "Active Date Filter End.  To filter by the active date, enter an end date here and a start date in the p_da1 parameter.  Both dates are required for filtering."
    },
    "p_MS4": {
      "type": "string",
      "description": "Municipal Separate Storm Water Sewer (MS4) Permit Flag.  Enter a Y or N to filter results by this type of permit.",
      "enum": [
        "Y",
        "N"
      ]
    },
    "p_ooFN": {
      "type": "string",
      "description": "Owner/Operator Name. Enter the owner/operator name of the facility."
    },
    "p_ooFNtype": {
      "type": "string",
      "description": "Owner/Operator Name Multiple Selection Evaluator.  ",
      "enum": [
        "ALL",
        "EXACT",
        "BEGINS",
        "CONTAINS"
      ]
    },
    "p_ooSA": {
      "type": "string",
      "description": "Owner/Operator Address.  Enter the address of the owner/operator of the facility."
    },
    "p_ooSA1": {
      "type": "string",
      "description": "Owner/Operator Address Line 2.  Enter the line 2 address of the owner/operator of the facility."
    },
    "p_ooCt": {
      "type": "string",
      "description": "Owner/Operator City. Enter the city where the owner/operator of the facility is located."
    },
    "p_ooSt": {
      "type": "string",
      "description": "Owner/Operator State.  Enter the standardized postal state code where the owner/operator of the facility is located."
    },
    "p_ooZip": {
      "type": "string",
      "description": "Owner/Operator Zip Code.  Enter the postal zip code where the owner/operator of the facility is located."
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
    "p_alrexceed": {
      "type": "number",
      "description": "Alert Limits Exceedences Limiter.  Enter a numeric value to restrict results to facilities having the given amount or more of alert limits exceedances.\n"
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
      "$ref": "#/definitions/cwa1_Results"
    }
  },
  "required": [
    "Results"
  ],
  "type": "object"
}
```
## Operation: cwa_rest_services.get_facility_info.get
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
    "p_ff": {
      "type": "string",
      "description": "Federal Facility Indicator Flag. Enter Y to restrict searches to federal facilities.",
      "enum": [
        "Y"
      ]
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
    "p_maj": {
      "type": "string",
      "description": "Major Facility Flag.  Enter Y to restrict results to Major facilities only.",
      "enum": [
        "Y",
        "N"
      ]
    },
    "p_mact": {
      "type": "string",
      "description": "CAA Maximum Achievable Control Technology (MACT) Subpart codes (alpha ID between 1 and 7 characters) applicable to the facility."
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
    "p_imp_pol": {
      "type": "string",
      "description": "Facility is discharging pollutants that are potentially contributing to the impairment of local waterbodies according to the ATTAINS database.",
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
    "p_pid": {
      "type": "string",
      "description": "Nine-digit permit IDs. May contain up to 2000 comma-separated values."
    },
    "p_med": {
      "type": "string",
      "description": "Filter Results by Media.\n- A = Air\n- M = RMP (Risk Management Plan)\n- R = RCRA (Hazardous Waste)\n- S = SDWA (Public Drinking Water Systems)\n- ALL = Air and RCRA and Water",
      "enum": [
        "A",
        "M",
        "R",
        "S",
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
    "p_pstat": {
      "type": "string",
      "description": "Permit Status Filter.  Enter one or more of the following codes.  Provide multiple values as a comma-delimited list.\n- EFF = Effective\n- EXP = Expired\n- PND = Pending\n- TRM = Terminated\n- RET = Retired\n- NON = Not Needed\n- ADC = Admin Continued"
    },
    "p_ptype": {
      "type": "string",
      "description": "Permit Type Filter. Enter one or more code values to filter results.  Provide multiple values as a comma-delimited list.\n- NPD = NPDES Individual Permit\n- NGP = NPDES Master General Permit\n- GPC = General Permit Covered Facility\n- SNN = State Issued Master General Permit (Non-NPDES)\n- IIU = Individual IU Permit (Non-NPDES)\n- SIN = Individual State Issued Permit (Non-NPDES)\n- APR = Associated Permit Record\n- UFT = Unpermitted Facility"
    },
    "p_pcomp": {
      "type": "string",
      "description": "Permit Component Code Filter.  Enter one or more codes to filter results.  Provide multiple values as a comma-delimited list.\n- PRE = Pretreatment\n- CAF = CAFO\n- CSO = CSO\n- POT = POTW\n- BIO = Biosolids\n- SWS = Storm Water Small MS4s\n- SWM = Storm Water Medium/Large MS4s\n- SWI = Storm Water Industrial\n- SWC = Storm Water Construction"
    },
    "p_plimits": {
      "type": "string",
      "description": "Permit Limits Present Flag.  Enter Y to limit results to facilities have present permit limits.",
      "enum": [
        "Y",
        "N"
      ]
    },
    "p_pcss": {
      "type": "string",
      "description": "Combined Sewer Systems Outflows Limiter.  Enter one of the following to limit results to facilities having the given count of CSS outflows.\n- ALL = returns all facilities, regardless of the number of outflows.\n- GE1 = returns facilities with one or more outflows.\n- GE10 = returns facilities with ten or more outflows.\n- GE50 = returns facilities with fifty or more outflows.",
      "enum": [
        "ALL",
        "GE1",
        "GE10",
        "GE50"
      ]
    },
    "p_pexp": {
      "type": "string",
      "description": "Permit Expired or Administratively Continued Limiter.  Enter one of the following values to filter results.\n- EXP = limit results to facilities with permits expired or administratively continued.\n- EXPLE1YR = limit resuls to facilities with permits expired administratively continued within the past year.\n- EXPGT1YR = limit resuls to facilities with permits expired administratively continued more than a year ago.",
      "enum": [
        "EXP",
        "EXPLE1YR",
        "EXPGT1YR"
      ]
    },
    "p_owop": {
      "type": "string",
      "description": "Owner/Operator code filter.  Enter one of the following values to restrict results.\n- Federal = Federal facilities regulated under the NPDES program.\n- POTW = Publicly owned treatment works. Treatment works that are owned by a State, Tribe, or municipality.\n- Non-POTW = Non-publicly owned treatment works. Often referred to as \"non-municipals\" or \"industrials\".",
      "enum": [
        "FEDERAL",
        "POTW",
        "NON-POTW"
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
      "description": "Inspection Type Code.  See ICIS Compliance Monitor Types lookup serivce for a list of available codes and descriptions."
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
    "p_pccs": {
      "type": "string",
      "description": "Current Compliance Status:\n- E�= EffViol\n- S�= CSchVio\n- X = EffNMth\n- T = CSchRpt\n- D�= DMR NR\n- N�= RptViol\n- P�= ResPend\n- R�= Resolvd\n- M�= Manual\n- V�= NonRNCV\n- U = N/A\n- W = N/A\nMay contain multiple comma-separated values."
    },
    "p_pexcd": {
      "type": "string",
      "description": "3-Year Effluent Exceedances Limiter.  Enter a value to restrict results to facilities with the given amount of exceedances in the past 3 years.\n- 0 = facilities with no exceedances\n- GE0 = facilities with one or more exceedances\n- GE10 = facilities with ten or more exceedances\n- GE50 = facilities with fifty or more exceedances\n- GE100 = facilities with one hundred or more exceedances",
      "enum": [
        "0",
        "GE0",
        "GE10",
        "GE50",
        "GE100"
      ]
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
    "p_pctrack": {
      "type": "string",
      "description": "Compliance Tracking Limiter. Provide a keyword to indicate the extent to which data is being entered and effluent exceedances are being identified.\n- Off\n- Partial\n- On",
      "enum": [
        "Off",
        "Partial",
        "On"
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
    "p_pt": {
      "type": "string",
      "description": "POTW Transfers. Pounds of toxic chemicals transferred to a Publicly Operated Treatment Works (POTW) as reported to the Toxics Release Inventory.",
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
    "p_pdwdist": {
      "type": "string",
      "description": "Distance (in miles) to downstream drinking water intake.",
      "enum": [
        "N",
        "LT1",
        "LT2",
        "LT5",
        "LT10",
        "LT15"
      ]
    },
    "p_pswdpc": {
      "type": "string",
      "description": "Pollutant Category Code:  Values: WTR for Water, AIR for Air"
    },
    "p_pswdmp": {
      "type": "string",
      "description": "Used to determine limit begin and end dates for surface water discharges. Number represents years from current date.",
      "enum": [
        "1",
        "2",
        "3",
        "4",
        "5"
      ]
    },
    "p_pswpol": {
      "type": "string",
      "description": "For CWA, pollutant names for surface water discharges. for Drinking Water, SDWIS Violation contaminant codes for unaddressed violations that have occurred in the last 3 years. May contain multiple comma-separated values."
    },
    "p_pswcas": {
      "type": "string",
      "description": "CAS numbers for surface water discharges. May contain multiple comma-separated values."
    },
    "p_pswparam": {
      "type": "string",
      "description": "Parameter codes for surface water discharges. May contain multiple comma-separated values."
    },
    "p_pswvio": {
      "type": "string",
      "description": "Used in conjuction with parameters p_pswpol and p_pswparam, indicates whether search should only include pollutants with violations.",
      "enum": [
        "Y",
        "N"
      ]
    },
    "p_wbd": {
      "type": "string",
      "description": "2-, 4-, 6-, or 8-character watershed (WBD from the USGS Watershed Boundary Dataset). May contain multiple comma-separated values."
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
    "p_months_last_dmr": {
      "type": "number",
      "description": "The number of months since the last Discharge Monitoring Report has been submitted."
    },
    "p_last_dmr_within": {
      "type": "string",
      "description": "W value returns facilities that have submitted DMRs within the number of months specified by p_months_last_dmr. An N value returns facilities that have not submitted a DMR within the specified number of months.",
      "enum": [
        "W",
        "N"
      ]
    },
    "p_indsw": {
      "type": "string",
      "description": "Industrial Stormwater Permit Flag.  Enter a Y or N to filter results by this type of permit.",
      "enum": [
        "Y",
        "N"
      ]
    },
    "p_msgp_ptype": {
      "type": "string",
      "description": "Multi-Sector General Purpose Permit Type.  Enter a value to filter results by MSGP Permit Type.\n- NOI = Notice of Intent\n- NOE = No Exposure Certification",
      "enum": [
        "NOI",
        "NOE"
      ]
    },
    "p_iagency": {
      "type": "string",
      "description": "Issuing Agency Limiter.  Enter a single value to filter results by the issuing agency, e.g. \"State\" or \"EPA\"."
    },
    "p_isws": {
      "type": "string",
      "description": "Multi-Sector General Purpose Permit Subsector Individual Identifier.  Enter a value to filter results."
    },
    "p_iswss": {
      "type": "string",
      "description": "Multi-Sector General Purpose Permit Subsector Group Code.  Enter a value to filter results."
    },
    "p_iswssID": {
      "type": "string",
      "description": "Multi-Sector General Purpose Permit Sector Code.  Enter a value to filter results."
    },
    "p_ds1": {
      "type": "string",
      "description": "Submitted Date Filter Start.  To filter by the date of submission, enter a start date here and an end date in the p_ds2 parameter.  Both dates are required for filtering."
    },
    "p_ds2": {
      "type": "string",
      "description": "Submitted Date Filter End.  To filter by the date of submission, enter an end date here and a start date in the p_ds1 parameter.  Both dates are required for filtering."
    },
    "p_da1": {
      "type": "string",
      "description": "Active Date Filter Start.  To filter by the active date, enter a start date here and an end date in the p_da2 parameter.  Both dates are required for filtering."
    },
    "p_da2": {
      "type": "string",
      "description": "Active Date Filter End.  To filter by the active date, enter an end date here and a start date in the p_da1 parameter.  Both dates are required for filtering."
    },
    "p_MS4": {
      "type": "string",
      "description": "Municipal Separate Storm Water Sewer (MS4) Permit Flag.  Enter a Y or N to filter results by this type of permit.",
      "enum": [
        "Y",
        "N"
      ]
    },
    "p_ooFN": {
      "type": "string",
      "description": "Owner/Operator Name. Enter the owner/operator name of the facility."
    },
    "p_ooFNtype": {
      "type": "string",
      "description": "Owner/Operator Name Multiple Selection Evaluator.  ",
      "enum": [
        "ALL",
        "EXACT",
        "BEGINS",
        "CONTAINS"
      ]
    },
    "p_ooSA": {
      "type": "string",
      "description": "Owner/Operator Address.  Enter the address of the owner/operator of the facility."
    },
    "p_ooSA1": {
      "type": "string",
      "description": "Owner/Operator Address Line 2.  Enter the line 2 address of the owner/operator of the facility."
    },
    "p_ooCt": {
      "type": "string",
      "description": "Owner/Operator City. Enter the city where the owner/operator of the facility is located."
    },
    "p_ooSt": {
      "type": "string",
      "description": "Owner/Operator State.  Enter the standardized postal state code where the owner/operator of the facility is located."
    },
    "p_ooZip": {
      "type": "string",
      "description": "Owner/Operator Zip Code.  Enter the postal zip code where the owner/operator of the facility is located."
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
    "p_alrexceed": {
      "type": "number",
      "description": "Alert Limits Exceedences Limiter.  Enter a numeric value to restrict results to facilities having the given amount or more of alert limits exceedances.\n"
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
    "responseset": {
      "type": "number",
      "description": "Response Set Limiter. Enter a value to limit the number of records per page. Value cannot exceed 1,000."
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
      "$ref": "#/definitions/cwa2_Results"
    }
  },
  "required": [
    "Results"
  ],
  "type": "object"
}
```
## Operation: cwa_rest_services.get_geojson.get
Based on the QID obtained from a get_facilities or get_facility_info query, return a comma sepated vaule (CSV) file of the facilities found.

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
  "$ref": "#/definitions/cwa5_FeatureCollection"
}
```
## Operation: cwa_rest_services.get_info_clusters.get
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
## Operation: cwa_rest_services.get_map.get
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
      "description": "Nine-character code used to uniquely identify a permitted NPDES facility. The NPDES permit program regulates the direct discharge of pollutants into US waters."
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
      "$ref": "#/definitions/cwa3_MapOutput"
    }
  },
  "required": [
    "MapOutput"
  ],
  "type": "object"
}
```
## Operation: cwa_rest_services.get_qid.get
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
      "$ref": "#/definitions/cwa4_Results"
    }
  },
  "required": [
    "Results"
  ],
  "type": "object"
}
```
## Operation: cwa_rest_services.metadata.get
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
## Operation: rest_lookups.bp_tribes.get
Returns the EPA Standard Indian Tribes and Native Alaskan Villages tribal_id and tribe_name.

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
    "search_term": {
      "type": "string",
      "description": "Enter a partial or complete search phrase or word."
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
      "$ref": "#/definitions/rlk7_Results"
    }
  },
  "required": [
    "Results"
  ],
  "type": "object"
}
```
## Operation: rest_lookups.cwa_parameters.get
Look up Clean Water Act parameter codes and descriptions in the Integrated Compliance Information System - National Pollutant Discharge Elimination System (ICIS-NPDES) by code or term.

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
    "search_term": {
      "type": "string",
      "description": "Enter a partial or complete search phrase or word."
    },
    "search_code": {
      "type": "string",
      "description": "Enter a partial or complete code value."
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
      "$ref": "#/definitions/rlk9_Results"
    }
  },
  "required": [
    "Results"
  ],
  "type": "object"
}
```
## Operation: rest_lookups.cwa_pollutants.get
ECHO CWA Pollutants Lookup Service

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
    "search_term": {
      "type": "string",
      "description": "Enter a partial or complete search phrase or word."
    },
    "search_code": {
      "type": "string",
      "description": "Enter a partial or complete code value."
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
      "$ref": "#/definitions/rlkA_Results"
    }
  },
  "required": [
    "Results"
  ],
  "type": "object"
}
```
## Operation: rest_lookups.federal_agencies.get
Look up Federal Agency Code

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
    "search_term": {
      "type": "string",
      "description": "Enter a partial or complete search phrase or word."
    },
    "search_code": {
      "type": "string",
      "description": "Enter a partial or complete code value."
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
      "$ref": "#/definitions/rlkb_Results"
    }
  },
  "required": [
    "Results"
  ],
  "type": "object"
}
```
## Operation: rest_lookups.icis_inspection_types.get
Returns the ICIS NPDES Compliance Monitoring Type Code and Description.

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
    "search_term": {
      "type": "string",
      "description": "Enter a partial or complete search phrase or word."
    },
    "search_code": {
      "type": "string",
      "description": "Enter a partial or complete code value."
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
      "$ref": "#/definitions/rlkf_Results"
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
## Operation: rest_lookups.naics_codes.get
ECHO NAICS Codes Lookup Service

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
    "search_term": {
      "type": "string",
      "description": "Enter a partial or complete search phrase or word."
    },
    "search_code": {
      "type": "string",
      "description": "Enter a partial or complete code value."
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
      "$ref": "#/definitions/rlk2_Results"
    }
  },
  "required": [
    "Results"
  ],
  "type": "object"
}
```
## Operation: rest_lookups.npdes_parameters.get
ICIS Limit Parameter Code and Name lookup based on the supply of a partial parameter name. (NPDES = National Pollutant Discharge Elimination System)

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
    "search_term": {
      "type": "string",
      "description": "Enter a partial or complete search phrase or word."
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
      "$ref": "#/definitions/rlkh_Results"
    }
  },
  "required": [
    "Results"
  ],
  "type": "object"
}
```
## Operation: rest_lookups.wbd_code_lu.get
USGS Watershed Boundary Dataset (WBD) Name lookup based on a supplied WBD Code and Watershed Level

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
    "wbd_code": {
      "type": "string",
      "description": "Two-digit watershed code [Hydrologic Unit Code (HUC)]."
    },
    "wbd_level": {
      "type": "string",
      "description": "The number of digits of the watershed code [Hydrologic Unit Code (HUC)] returned in the ValueCode. Must be an even number between 4 and 12."
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
      "$ref": "#/definitions/rlkn_Results"
    }
  },
  "required": [
    "Results"
  ],
  "type": "object"
}
```
## Operation: rest_lookups.wbd_name_lu.get
USGS Watershed Boundary Dataset (WBD) Code lookup based on a supplied WBD Name and Watershed Level

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
    "callback": {
      "type": "string",
      "description": "JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response."
    },
    "wbd_name": {
      "type": "string",
      "description": "Watershed Name Filter."
    },
    "wbd_level": {
      "type": "string",
      "description": "The number of digits of the watershed code [Hydrologic Unit Code (HUC)] returned in the ValueCode. Must be an even number between 4 and 12."
    }
  },
  "additionalProperties": false,
  "required": [
    "wbd_name"
  ]
}
```
### Output Schema
```json
{
  "description": "Root Object",
  "properties": {
    "Results": {
      "$ref": "#/definitions/rlko_Results"
    }
  },
  "required": [
    "Results"
  ],
  "type": "object"
}
```
