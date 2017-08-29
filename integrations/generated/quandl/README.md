# @datafire/quandl

Client library for Quandl API

## Installation and Usage
```bash
npm install --save datafire @datafire/quandl
```

```js
let datafire = require('datafire');
let quandl = require('@datafire/quandl').create({
  apiKey: "",
});

quandl.databases.get({}).then(data => {
  console.log(data);
})
```

## Description
The Quandl API

## Actions
### datasets.database_code.dataset_code.metadata.get
To download the metadata associated with any dataset object, append /metadata to your API request. (You can replace .csv with .json or .xml in this request). The following metadata fields are available in the response:


```js
quandl.datasets.database_code.dataset_code.metadata.get({
  "column_names": "",
  "database_code": "",
  "dataset_code": "",
  "description": "",
  "frequency": "",
  "name": "",
  "newest_available_date": "",
  "oldest_available_date": "",
  "premium": "",
  "refreshed_at": "",
  "type": ""
}, context)
```

#### Parameters
* column_names (string) **required**
* database_code (string) **required** - The unique database code on Quandl (ex. WIKI)
* dataset_code (string) **required** - The unique dataset code on Quandl (ex. APPL)
* description (string) **required**
* frequency (string) **required**
* name (string) **required**
* newest_available_date (string) **required**
* oldest_available_date (string) **required**
* premium (string) **required**
* refreshed_at (string) **required**
* type (string) **required**

### datasets.database_code.dataset_code.data.get
To download the data in a dataset, simply append /data to the Quandl code in your API request. (You can replace .csv with .json or .xml in this request). If you request CSV, only the data you requested will be returned.  If you request JSON or XML, both data and input parameters will be returned. You can customize the dataset object being returned by adding various optional parameters to your query. Available parameters are tabulated below: If a datapoint for time t is denoted as y[t] and the transformed data as y’[t], the available transformations are defined as below: y[0] in the above table refers to the starting date for the API call, i.e., the date specified by start_date= or rows=, NOT the starting date of the underlying dataset.


```js
quandl.datasets.database_code.dataset_code.data.get({
  "Cumulative": "",
  "Row-on-row": "",
  "Start": "",
  "database_code": "",
  "dataset_code": ""
}, context)
```

#### Parameters
* Cumulative (string) **required** - y’[t] = y[t] +y[t-1] + … + y[0]
* Row-on-row (string) **required** - y’[t] = y[t] - y[t-1]
* Start (string) **required** - y’[t] = (y[t]/y[0]) * 100
* collapse (string) - Parameters to indicate the desired frequency. When you change the frequency of a dataset, Quandl returns the last observation for the given period. By collapsing a daily dataset to monthly, you will get a sample of the original dataset where the observation for each month is the last data point available for that month. Set collapse with: collapse=none|daily|weekly|monthly|quarterly|annual
* column_index (string) - Request a specific column by passing the column_index=n parameter. Column 0 is the date column and is always returned. Data begins at column 1.
* database_code (string) **required** - Each database on Quandl has a unique database code. For example, the database code for “Wiki EOD Stock Prices” has the Quandl code WIKI.
* dataset_code (string) **required** - Each dataset on Quandl has a unique dataset code. For example, to access the dataset named Apple Inc. (AAPL) use the dataset code AAPL. The dataset code must be used in combination with the database code, for example, to retrieve the dataset named Apple, use WIKI/AAPL.
* end_date (string) - Retrieve data within a specific date range, by setting end dates for your query. Set the end date with: end_date=yyyy-mm-dd
* limit (string) - You can use limit=n to get only the first n rows of your dataset. Use limit=1 to get the latest observation for any dataset.
* order (string) - Select the sort order by passing the parameter order=asc|desc. (Notice that the | in the parameter specification separates various mutually-exclusive options). The default sort order is descending.
* rows (string) - You can use rows=n to get only the first n rows of your dataset. Use rows=1 to get the latest observation for any dataset.
* start_date (string) - Retrieve data within a specific date range, by setting start dates for your query. Set the start date with: start_date=yyyy-mm-dd
* transform (string) - Perform  calculations on your data prior to downloading. The transformations currently availabe are row-on-row change, percentage change, cumulative sum, and normalize (set starting value at 100). Set the transform parameter with: transform=none|diff|rdiff|cumul|normalize

### datasets.database_code.dataset_code.get
You can download both data and metadata in a single call, using the following API request. (You can replace .json with .csv or .xml in this request.  If you use .csv, only data will be returned.). In this call, you can customize the dataset object being returned, exactly as in the /data request above.


```js
quandl.datasets.database_code.dataset_code.get({
  "database_code": "",
  "dataset_code": ""
}, context)
```

#### Parameters
* collapse (string) - Parameters to indicate the desired frequency. When you change the frequency of a dataset, Quandl returns the last observation for the given period. By collapsing a daily dataset to monthly, you will get a sample of the original dataset where the observation for each month is the last data point available for that month. Set collapse with: collapse=none|daily|weekly|monthly|quarterly|annual
* column_index (string) - Request a specific column by passing the column_index=n parameter. Column 0 is the date column and is always returned. Data begins at column 1.
* database_code (string) **required** - Each database on Quandl has a unique database code. For example, the database code for “Wiki EOD Stock Prices” will have the Qunadl code WIKI.
* dataset_code (string) **required** - Each dataset on Quandl has a unique dataset code. For example, to access the dataset named Apple Inc. (AAPL) use the dataset code AAPL. The dataset code must be used in combination with the database code, for example, to retrieve the dataset named Apple, use WIKI/AAPL.
* end_date (string) - Retrieve data within a specific date range, by setting end dates for your query. Set the end date with: end_date=yyyy-mm-dd
* exclude_column_names (string) - Request data without column names by passing the exclude_column_names=true parameter. This can only be applied to CSV.
* limit (string) - You can use limit=n to get only the first n rows of your dataset. Use limit=1 to get the latest observation for any dataset.
* order (string) - You can select the sort order by passing the parameter order=asc|desc. (Notice that the | in the parameter specification separates various mutually-exclusive options). The default sort order is descending.
* rows (string) - You can use rows=n to get only the first n rows of your dataset. Use rows=1 to get the latest observation for any dataset.
* start_date (string) - Retrieve data within a specific date range, by setting start for your query. Set the start date with: start_date=yyyy-mm-dd
* transform (string) - Perform  calculations on your data prior to downloading. The transformations currently availabe are row-on-row change, percentage change, cumulative sum, and normalize (set starting value at 100). Set the transform parameter with: transform=none|diff|rdiff|cumul|normalize

### datasets.get
You can search for individual datasets on Quandl by making the following API request.  The API will return datasets related to your query, as well as datasets that belong to databases related to your query.  Datasets are returned 100 results at a time. You can page through the results using these parameters:


```js
quandl.datasets.get({}, context)
```

#### Parameters
* database_code (string) - You can restrict your search to a specific database by including a Quandl database code. For example, the database code for “IMF Cross Country Macroeconomic Statistics” is ODA.
* page (string) - The current page of total available pages you wish to view.
* per_page (string) - The number of results per page that will be returned.
* query (string) - You can retrieve all datasets related to a search term using the query parameter. Multiple search terms should be separated by a + character.

### databases.database_code.data.get
You can download all the data in a premium database in a single call, by appending /data to your database request. You can specify whether you want the entire history, or merely the last day’s worth of updates, by setting the correct query parameters.


```js
quandl.databases.database_code.data.get({
  "database_code": ""
}, context)
```

#### Parameters
* database_code (string) **required** - The unique database code on Quandl (ex. YC)
* download_type (string) - Data returned can be either partial or complete. Partial returns results from the last day, while complete returns the entire database. Default is complete.

### databases.database_code.codes.get
You can download a list of all dataset codes in a database in a single call, by appending /codes to your database request. The call will return a ZIP file containing a CSV.


```js
quandl.databases.database_code.codes.get({
  "database_code": ""
}, context)
```

#### Parameters
* database_code (string) **required** - The unique database code on Quandl (ex. YC)

### databases.database_code.get
This call returns descriptive metadata for the specified database.


```js
quandl.databases.database_code.get({
  "database_code": ""
}, context)
```

#### Parameters
* database_code (string) **required** - The unique database code on Quandl (ex. WIKI)

### databases.get
You can search for specific databases on Quandl by making the following API request.  The API will return databases related to your query. Databases are returned 100 results at a time. You can page through the results using these parameters:


```js
quandl.databases.get({}, context)
```

#### Parameters
* page (string) - The current page of total available pages you wish to view.
* per_page (string) - The number of results per page that will be returned.
* query (string) - You can retrieve all databases related to a search term using the query parameter. Multiple search terms should be separated by a + character.

