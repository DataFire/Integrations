# @datafire/epa_gov_case

Client library for U.S. EPA Enforcement and Compliance History Online (ECHO) - Enforcement Case Search

## Installation and Usage
```bash
npm install --save datafire @datafire/epa_gov_case
```

```js
let datafire = require('datafire');
let epa_gov_case = require('@datafire/epa_gov_case').actions;
let context = new datafire.Context();

epa_gov_case.rest_lookups.icis_law_sections.get({}, context).then(data => {
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


## Actions
### case_rest_services.get_case_report.get
The get_case_report service endpoint returns a complex object of civil enforcement case details based on the provided case id.


```js
epa_gov_case.case_rest_services.get_case_report.get({}, context)
```


### case_rest_services.get_cases.get
The get_cases service end point searches for civil enforcement and criminal cases based on the provided selection criteria.


```js
epa_gov_case.case_rest_services.get_cases.get({}, context)
```


### case_rest_services.get_crcase_report.get
The get_crcase_report service end point returns a complex object of criminal case detials based on the provided criminal case id.


```js
epa_gov_case.case_rest_services.get_crcase_report.get({}, context)
```


### case_rest_services.get_download.get
Based on the QID obtained from a get_cases query, return a comma sepated vaule (CSV) file of the cases found.


```js
epa_gov_case.case_rest_services.get_download.get({
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

### case_rest_services.metadata.get
Returns the JSON Object Name and ColumnId for usage with the qcolumns parameter for get_cases endpoint.


```js
epa_gov_case.case_rest_services.metadata.get({}, context)
```


### rest_lookups.icis_law_sections.get
Returns the ICIS Law Section Descriptions.


```js
epa_gov_case.rest_lookups.icis_law_sections.get({}, context)
```


