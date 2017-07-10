# @datafire/epa_gov_eff
Enforcement and Compliance History Online (ECHO) is a tool developed and maintained by EPA's Office of Enforcement and Compliance Assurance for public use.
ECHO provides integrated compliance and enforcement information for about 800,000 regulated facilities nationwide.
<BR><BR>EFF Rest Services provides the data for ECHO's Effluent Charts, a set of dynamic charts and tables of permitted effluent limits, releases, and violations over time for 
Clean Water Act (CWA) wastewater discharge permits issued under the National Pollutant Discharge Elimination System (NPDES).  See Effluent Charts Help (https://echo.epa.gov/help/reports/effluent-charts-help) for additional information.
<BR><BR>
The are 3 service end points for Efffluent Charts:  get_summary_chart, get_effluent_chart, and download_effluent_chart.
<br>
<br><b>1)</b>&nbsp Use get_summary_chart to retrieve a summary matrix of effluent parameters by effluent outfall and an overall violation status for a provided NPDES Permit and date range.
<br><b>2)</b>&nbsp Use get_effluent_chart to retrieve detailed Discharge Limit, DMR and NPDES Violation information for a provided NPDES Permit, date range, effluent paramater, or outfall.
<br><b>3)</b>&nbsp Use download_effluent_chart to generate a Comma Separated Value (CSV) file of the detailed data provided with get_effluent chart, for a provided NPDES Permit, date range, effluent paramater, or outfall.
<br>
<br>
Additional ECHO Resources:&nbsp&nbsp <a href="https://echo.epa.gov/tools/web-services">Web Services</a>, <a href="https://echo.epa.gov/resources/echo-data/about-the-data">About ECHO's Data</a>, <a href="https://echo.epa.gov/tools/data-downloads">Data Downloads</a>
<br>


## Operation: eff_rest_services.download_effluent_chart.get
Downloads tabular Discharge Monitoring Report (DMR) and compliance data for one NPDES permit as a CSV.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "p_id": {
      "type": "string",
      "description": "Identifier for the service."
    },
    "outfall": {
      "type": "string",
      "description": "Three-character code that identifies the point of discharge (e.g., pipe or outfall) for a facility. A single NPDES ID may have multiple points of discharge."
    },
    "parameter_code": {
      "type": "string",
      "description": "Five-digit numeric code identifying the parameter. See Parameter Lookup documentation for a complete list of codes."
    },
    "start_date": {
      "type": "string",
      "description": "The start date (mm/dd/yyyy) for the date range of interest. Must be used in conjunction with end_date. If start_date and end_date are not specified, the service will return the last three years of data."
    },
    "end_date": {
      "type": "string",
      "description": "The end date (mm/dd/yyyy) for the date range of interest. Must be used in conjunction with start_date. If start_date and end_date are not specified, the service will return the last three years of data."
    }
  },
  "additionalProperties": false,
  "required": [
    "p_id"
  ]
}
```
### Output Schema
```json
{
  "type": "file"
}
```
## Operation: eff_rest_services.get_effluent_chart.get
Discharge Monitoring Report (DMR) data supporting each effluent chart for one NPDES permit. Includes Discharge Monitoring Reports and NPDES Violations. 



### Input Schema
```json
{
  "type": "object",
  "properties": {
    "p_id": {
      "type": "string",
      "description": "Identifier for the service."
    },
    "outfall": {
      "type": "string",
      "description": "Three-character code that identifies the point of discharge (e.g., pipe or outfall) for a facility. A single NPDES ID may have multiple points of discharge."
    },
    "parameter_code": {
      "type": "string",
      "description": "Five-digit numeric code identifying the parameter. See Parameter Lookup documentation for a complete list of codes."
    },
    "start_date": {
      "type": "string",
      "description": "The start date (mm/dd/yyyy) for the date range of interest. Must be used in conjunction with end_date. If start_date and end_date are not specified, the service will return the last three years of data."
    },
    "end_date": {
      "type": "string",
      "description": "The end date (mm/dd/yyyy) for the date range of interest. Must be used in conjunction with start_date. If start_date and end_date are not specified, the service will return the last three years of data."
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
  "additionalProperties": false,
  "required": [
    "p_id"
  ]
}
```
### Output Schema
```json
{
  "description": "Root Object",
  "properties": {
    "Results": {
      "$ref": "#/definitions/eff1_Results"
    }
  },
  "required": [
    "Results"
  ],
  "type": "object"
}
```
## Operation: eff_rest_services.get_summary_chart.get
Summary of compliance status each outfall and parameter for one NPDES permit. Provides the current compliance status and overall compliance status for the date range of interest. This service supports the Summary Matrix on the Effluent Charts.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "p_id": {
      "type": "string",
      "description": "Identifier for the service."
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
    },
    "start_date": {
      "type": "string",
      "description": "The start date (mm/dd/yyyy) for the date range of interest. Must be used in conjunction with end_date. If start_date and end_date are not specified, the service will return the last three years of data."
    },
    "end_date": {
      "type": "string",
      "description": "The end date (mm/dd/yyyy) for the date range of interest. Must be used in conjunction with start_date. If start_date and end_date are not specified, the service will return the last three years of data."
    }
  },
  "additionalProperties": false,
  "required": [
    "p_id"
  ]
}
```
### Output Schema
```json
{
  "description": "Root Object",
  "properties": {
    "Results": {
      "$ref": "#/definitions/eff2_Results"
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
