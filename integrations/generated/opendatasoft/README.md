# @datafire/opendatasoft

Client library for opendatasoft

## Installation and Usage
```bash
npm install --save @datafire/opendatasoft
```
```js
let opendatasoft = require('@datafire/opendatasoft').create({
  api_key: "",
  username: "",
  password: ""
});

opendatasoft.getRoot({}).then(data => {
  console.log(data);
})
```

## Description



## Actions

### getRoot
API entry point

Provides links for:
* catalog, your domain's list of datasets
* opendatasoft, all datasets on the OpenDataSoft network



```js
opendatasoft.getRoot(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * links `array`
    * items [link](#link)

### getPages
List of all pages from this portal.



```js
opendatasoft.getPages(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * links `array`
    * items [link](#link)
  * pages `array`
    * items `object`
      * links `array`
        * items [link](#link)
      * page [page](#page)

### getPage
A single page's metadata from this portal



```js
opendatasoft.getPage({
  "slug": ""
}, context)
```

#### Input
* input `object`
  * slug **required** `string`: Page slug.

#### Output
* output `object`
  * links `array`
    * items [link](#link)
  * page [page](#page)

### getSource
Source entry points

Provides links for the source's datasets and metadata.



```js
opendatasoft.getSource({
  "source": ""
}, context)
```

#### Input
* input `object`
  * source **required** `string` (values: catalog, opendatasoft, monitoring): Each source represents a different catalog of datasets you'll be able to query.

#### Output
* output `object`
  * links `array`
    * items [link](#link)

### aggregateDatasets
Compute aggregations from catalog and return a list of each aggregate indexed by their names.



```js
opendatasoft.aggregateDatasets({
  "source": ""
}, context)
```

#### Input
* input `object`
  * source **required** `string` (values: catalog, opendatasoft, monitoring): Each source represents a different catalog of datasets you'll be able to query.
  * select `string`: A select expression can be used to add, remove or change fields to return.
  * group_by `string`: A group by expression defines a grouping function for an aggregation.
  * where `array`: An array of filters.

#### Output
* output `object`
  * aggregations `array`
    * items [aggregation](#aggregation)
  * links `array`
    * items [link](#link)

### getDatasets
List of available datasets, each with their endpoints, paginated.

Links provided:
* previous page
* next page
* last page
* first page



```js
opendatasoft.getDatasets({
  "source": ""
}, context)
```

#### Input
* input `object`
  * source **required** `string` (values: catalog, opendatasoft, monitoring): Each source represents a different catalog of datasets you'll be able to query.
  * where `array`: An array of filters.
  * search `array`: An array of full text search.
  * rows `integer`: Number of items to return.
  * start `integer`: Index of the first item to return (starting at 0).
  * sort `array`: A list of field names, each possibly prefixed with a minus (-).
  * pretty `boolean`: Activate pretty print
  * timezone `string`: Set timezone for datetime fields
  * include_app_metas `boolean`: Explicitely request application metas for each datasets.

#### Output
* output `object`
  * datasets `array`
    * items `object`
      * dataset [dataset](#dataset)
      * links `array`
        * items [link](#link)
  * links `array`
    * items [link](#link)
  * total_count `integer`

### getDataset
List of available endpoints for the specified dataset, with metadata and endpoints.

Will provide links for:
* the attachments endpoint
* the files endpoint
* the records endpoint
* the catalog endpoint



```js
opendatasoft.getDataset({
  "source": "",
  "dataset_id": ""
}, context)
```

#### Input
* input `object`
  * source **required** `string` (values: catalog, opendatasoft, monitoring): Each source represents a different catalog of datasets you'll be able to query.
  * dataset_id **required** `string`: Dataset identifier.
  * pretty `boolean`: Activate pretty print
  * timezone `string`: Set timezone for datetime fields
  * select `string`: A select expression can be used to add, remove or change fields to return.
  * include_app_metas `boolean`: Explicitely request application metas for each datasets.

#### Output
* output `object`
  * dataset [dataset](#dataset)
  * links `array`
    * items [link](#link)

### aggregateRecords
Compute aggregations from dataset records and return a list of each aggregate indexed by their names.



```js
opendatasoft.aggregateRecords({
  "source": "",
  "dataset_id": ""
}, context)
```

#### Input
* input `object`
  * source **required** `string` (values: catalog, opendatasoft, monitoring): Each source represents a different catalog of datasets you'll be able to query.
  * dataset_id **required** `string`: Dataset identifier.
  * select `string`: A select expression can be used to add, remove or change fields to return.
  * group_by `string`: A group by expression defines a grouping function for an aggregation.
  * where `array`: An array of filters.

#### Output
* output `object`
  * aggregations `array`
    * items [aggregation](#aggregation)
  * links `array`
    * items [link](#link)

### getDatasetAttachements
Get list of all available attachments



```js
opendatasoft.getDatasetAttachements({
  "source": "",
  "dataset_id": ""
}, context)
```

#### Input
* input `object`
  * source **required** `string` (values: catalog, opendatasoft, monitoring): Each source represents a different catalog of datasets you'll be able to query.
  * dataset_id **required** `string`: Dataset identifier.

#### Output
* output `object`
  * attachments `array`
    * items [attachment](#attachment)
  * links `array`
    * items [link](#link)

### downloadDatasetAttachement
Download attachment



```js
opendatasoft.downloadDatasetAttachement({
  "source": "",
  "dataset_id": "",
  "attachment_id": ""
}, context)
```

#### Input
* input `object`
  * source **required** `string` (values: catalog, opendatasoft, monitoring): Each source represents a different catalog of datasets you'll be able to query.
  * dataset_id **required** `string`: Dataset identifier.
  * attachment_id **required** `string`

#### Output
*Output schema unknown*

### exportRecordsCSV
Export dataset in CSV format



```js
opendatasoft.exportRecordsCSV({
  "source": "",
  "dataset_id": ""
}, context)
```

#### Input
* input `object`
  * source **required** `string` (values: catalog, opendatasoft, monitoring): Each source represents a different catalog of datasets you'll be able to query.
  * dataset_id **required** `string`: Dataset identifier.
  * where `array`: An array of filters.
  * select `string`: A select expression can be used to add, remove or change fields to return.
  * rows `integer`: Number of items to return in export.
  * start `integer`: Index of the first item to return (starting at 0).
  * timezone `string`: Set timezone for datetime fields
  * delimiter `string` (values: ,, ;, |): Provide a different delimiter (default ',').

#### Output
* output `file`

### exportRecordsGEOJSON
Export dataset in GEOJSON format



```js
opendatasoft.exportRecordsGEOJSON({
  "source": "",
  "dataset_id": ""
}, context)
```

#### Input
* input `object`
  * source **required** `string` (values: catalog, opendatasoft, monitoring): Each source represents a different catalog of datasets you'll be able to query.
  * dataset_id **required** `string`: Dataset identifier.
  * where `array`: An array of filters.
  * search `array`: An array of full text search.
  * rows `integer`: Number of items to return in export.
  * start `integer`: Index of the first item to return (starting at 0).
  * timezone `string`: Set timezone for datetime fields
  * pretty `boolean`: Activate pretty print

#### Output
* output `file`

### exportRecordsICAL
Export dataset in ICAL format



```js
opendatasoft.exportRecordsICAL({
  "source": "",
  "dataset_id": ""
}, context)
```

#### Input
* input `object`
  * source **required** `string` (values: catalog, opendatasoft, monitoring): Each source represents a different catalog of datasets you'll be able to query.
  * dataset_id **required** `string`: Dataset identifier.
  * where `array`: An array of filters.
  * search `array`: An array of full text search.
  * rows `integer`: Number of items to return in export.
  * start `integer`: Index of the first item to return (starting at 0).
  * timezone `string`: Set timezone for datetime fields

#### Output
* output `file`

### exportRecordsJSON
Export dataset in JSON format



```js
opendatasoft.exportRecordsJSON({
  "source": "",
  "dataset_id": ""
}, context)
```

#### Input
* input `object`
  * source **required** `string` (values: catalog, opendatasoft, monitoring): Each source represents a different catalog of datasets you'll be able to query.
  * dataset_id **required** `string`: Dataset identifier.
  * where `array`: An array of filters.
  * search `array`: An array of full text search.
  * rows `integer`: Number of items to return in export.
  * start `integer`: Index of the first item to return (starting at 0).
  * pretty `boolean`: Activate pretty print
  * timezone `string`: Set timezone for datetime fields

#### Output
* output `file`

### exportRecordsOV2
Export dataset in OV2 format



```js
opendatasoft.exportRecordsOV2({
  "source": "",
  "dataset_id": ""
}, context)
```

#### Input
* input `object`
  * source **required** `string` (values: catalog, opendatasoft, monitoring): Each source represents a different catalog of datasets you'll be able to query.
  * dataset_id **required** `string`: Dataset identifier.
  * where `array`: An array of filters.
  * search `array`: An array of full text search.
  * rows `integer`: Number of items to return in export.
  * start `integer`: Index of the first item to return (starting at 0).
  * timezone `string`: Set timezone for datetime fields

#### Output
* output `file`

### exportRecordsSHP
Export dataset in Esri shapefile (shp) format



```js
opendatasoft.exportRecordsSHP({
  "source": "",
  "dataset_id": ""
}, context)
```

#### Input
* input `object`
  * source **required** `string` (values: catalog, opendatasoft, monitoring): Each source represents a different catalog of datasets you'll be able to query.
  * dataset_id **required** `string`: Dataset identifier.
  * where `array`: An array of filters.
  * search `array`: An array of full text search.
  * rows `integer`: Number of items to return in export.
  * start `integer`: Index of the first item to return (starting at 0).
  * timezone `string`: Set timezone for datetime fields

#### Output
* output `file`

### exportRecordsXLS
Export dataset in XLS (Excel) format



```js
opendatasoft.exportRecordsXLS({
  "source": "",
  "dataset_id": ""
}, context)
```

#### Input
* input `object`
  * source **required** `string` (values: catalog, opendatasoft, monitoring): Each source represents a different catalog of datasets you'll be able to query.
  * dataset_id **required** `string`: Dataset identifier.
  * where `array`: An array of filters.
  * search `array`: An array of full text search.
  * rows `integer`: Number of items to return in export.
  * start `integer`: Index of the first item to return (starting at 0).
  * timezone `string`: Set timezone for datetime fields

#### Output
* output `file`

### sendDatasetFeedback
Create new feedback entry.



```js
opendatasoft.sendDatasetFeedback({
  "source": "",
  "dataset_id": "",
  "feedback": null
}, context)
```

#### Input
* input `object`
  * source **required** `string` (values: catalog, opendatasoft, monitoring): Each source represents a different catalog of datasets you'll be able to query.
  * dataset_id **required** `string`: Dataset identifier.
  * feedback **required** `object`
    * comment `string`
    * newValues `object`: New record value
    * recordid `string`: Feedback entry's recordid
    * schema `object`: Record schema

#### Output
*Output schema unknown*

### getDatasetFile
Download file



```js
opendatasoft.getDatasetFile({
  "source": "",
  "dataset_id": "",
  "file_id": ""
}, context)
```

#### Input
* input `object`
  * source **required** `string` (values: catalog, opendatasoft, monitoring): Each source represents a different catalog of datasets you'll be able to query.
  * dataset_id **required** `string`: Dataset identifier.
  * file_id **required** `string`
  * thumbnail_size `string`: Set the size of the thumbnail representing the resource (attachment, image or file)

#### Output
*Output schema unknown*

### getRecords
Search dataset's records.



```js
opendatasoft.getRecords({
  "source": "",
  "dataset_id": ""
}, context)
```

#### Input
* input `object`
  * source **required** `string` (values: catalog, opendatasoft, monitoring): Each source represents a different catalog of datasets you'll be able to query.
  * dataset_id **required** `string`: Dataset identifier.
  * where `array`: An array of filters.
  * search `array`: An array of full text search.
  * rows `integer`: Number of items to return.
  * start `integer`: Index of the first item to return (starting at 0).
  * sort `array`: A list of field names, each possibly prefixed with a minus (-).
  * select `string`: A select expression can be used to add, remove or change fields to return.
  * pretty `boolean`: Activate pretty print
  * timezone `string`: Set timezone for datetime fields

#### Output
* output `object`
  * links `array`
    * items [link](#link)
  * records `array`
    * items `object`
      * links `array`
        * items [link](#link)
      * record [record](#record)
  * total_count `integer`

### getRecord
Retrieve a single record based on its ID.



```js
opendatasoft.getRecord({
  "source": "",
  "dataset_id": "",
  "record_id": ""
}, context)
```

#### Input
* input `object`
  * source **required** `string` (values: catalog, opendatasoft, monitoring): Each source represents a different catalog of datasets you'll be able to query.
  * dataset_id **required** `string`: Dataset identifier.
  * record_id **required** `string`
  * pretty `boolean`: Activate pretty print
  * timezone `string`: Set timezone for datetime fields
  * select `string`: A select expression can be used to add, remove or change fields to return.

#### Output
* output `object`
  * links `array`
    * items [link](#link)
  * record [record](#record)

### getDatasetReuses
Get list of reuses



```js
opendatasoft.getDatasetReuses({
  "source": "",
  "dataset_id": ""
}, context)
```

#### Input
* input `object`
  * source **required** `string` (values: catalog, opendatasoft, monitoring): Each source represents a different catalog of datasets you'll be able to query.
  * dataset_id **required** `string`: Dataset identifier.
  * start `integer`: Index of the first item to return (starting at 0).
  * rows `integer`: Number of items to return.
  * timezone `string`: Set timezone for datetime fields

#### Output
* output `object`
  * links `array`
    * items [link](#link)
  * reuses `array`
    * items [reuse](#reuse)

### getDatasetReuse
Retrieve a single reuse based on its ID.



```js
opendatasoft.getDatasetReuse({
  "source": "",
  "dataset_id": "",
  "reuse_id": ""
}, context)
```

#### Input
* input `object`
  * source **required** `string` (values: catalog, opendatasoft, monitoring): Each source represents a different catalog of datasets you'll be able to query.
  * dataset_id **required** `string`: Dataset identifier.
  * reuse_id **required** `string`
  * timezone `string`: Set timezone for datetime fields

#### Output
* output `object`
  * links `array`
    * items [link](#link)
  * reuse [reuse](#reuse)

### getDatasetSnapshots
List of all snapshots for this dataset.



```js
opendatasoft.getDatasetSnapshots({
  "source": "",
  "dataset_id": ""
}, context)
```

#### Input
* input `object`
  * source **required** `string` (values: catalog, opendatasoft, monitoring): Each source represents a different catalog of datasets you'll be able to query.
  * dataset_id **required** `string`: Dataset identifier.
  * timezone `string`: Set timezone for datetime fields

#### Output
* output `object`
  * links `array`
    * items [link](#link)
  * snapshots `array`
    * items [snapshot](#snapshot)

### downloadDatasetSnapshot
List of all snapshots for this dataset.



```js
opendatasoft.downloadDatasetSnapshot({
  "source": "",
  "dataset_id": "",
  "snapshot_id": ""
}, context)
```

#### Input
* input `object`
  * source **required** `string` (values: catalog, opendatasoft, monitoring): Each source represents a different catalog of datasets you'll be able to query.
  * dataset_id **required** `string`: Dataset identifier.
  * snapshot_id **required** `string`
  * timezone `string`: Set timezone for datetime fields

#### Output
*Output schema unknown*

### exportDatasetsCSV
Export catalog (source) in CSV format



```js
opendatasoft.exportDatasetsCSV({
  "source": ""
}, context)
```

#### Input
* input `object`
  * source **required** `string` (values: catalog, opendatasoft, monitoring): Each source represents a different catalog of datasets you'll be able to query.
  * where `array`: An array of filters.
  * search `array`: An array of full text search.
  * rows `integer`: Number of items to return.
  * start `integer`: Index of the first item to return (starting at 0).
  * timezone `string`: Set timezone for datetime fields
  * include_app_metas `boolean`: Explicitely request application metas for each datasets.
  * delimiter `string` (values: ,, ;, |): Provide a different delimiter (default ',').

#### Output
* output `file`

### exportDatasetsJson
Export catalog (source) in JSON format



```js
opendatasoft.exportDatasetsJson({
  "source": ""
}, context)
```

#### Input
* input `object`
  * source **required** `string` (values: catalog, opendatasoft, monitoring): Each source represents a different catalog of datasets you'll be able to query.
  * where `array`: An array of filters.
  * search `array`: An array of full text search.
  * rows `integer`: Number of items to return.
  * start `integer`: Index of the first item to return (starting at 0).
  * pretty `boolean`: Activate pretty print
  * timezone `string`: Set timezone for datetime fields
  * include_app_metas `boolean`: Explicitely request application metas for each datasets.

#### Output
* output `file`

### exportDatasetsRDF
Export catalog (source) in RDF/XML format



```js
opendatasoft.exportDatasetsRDF({
  "source": ""
}, context)
```

#### Input
* input `object`
  * source **required** `string` (values: catalog, opendatasoft, monitoring): Each source represents a different catalog of datasets you'll be able to query.
  * where `array`: An array of filters.
  * search `array`: An array of full text search.
  * rows `integer`: Number of items to return.
  * start `integer`: Index of the first item to return (starting at 0).
  * timezone `string`: Set timezone for datetime fields
  * include_app_metas `boolean`: Explicitely request application metas for each datasets.

#### Output
* output `file`

### exportDatasetsRSS
Export catalog (source) in RSS format



```js
opendatasoft.exportDatasetsRSS({
  "source": ""
}, context)
```

#### Input
* input `object`
  * source **required** `string` (values: catalog, opendatasoft, monitoring): Each source represents a different catalog of datasets you'll be able to query.
  * where `array`: An array of filters.
  * search `array`: An array of full text search.
  * rows `integer`: Number of items to return.
  * start `integer`: Index of the first item to return (starting at 0).
  * timezone `string`: Set timezone for datetime fields
  * include_app_metas `boolean`: Explicitely request application metas for each datasets.

#### Output
* output `file`

### exportDatasetsTTL
Export catalog (source) in TTL (turtle/rdf) format



```js
opendatasoft.exportDatasetsTTL({
  "source": ""
}, context)
```

#### Input
* input `object`
  * source **required** `string` (values: catalog, opendatasoft, monitoring): Each source represents a different catalog of datasets you'll be able to query.
  * where `array`: An array of filters.
  * search `array`: An array of full text search.
  * rows `integer`: Number of items to return.
  * start `integer`: Index of the first item to return (starting at 0).
  * timezone `string`: Set timezone for datetime fields
  * include_app_metas `boolean`: Explicitely request application metas for each datasets.

#### Output
* output `file`

### exportDatasetsXLS
Export catalog (source) in XLS (Excel) format



```js
opendatasoft.exportDatasetsXLS({
  "source": ""
}, context)
```

#### Input
* input `object`
  * source **required** `string` (values: catalog, opendatasoft, monitoring): Each source represents a different catalog of datasets you'll be able to query.
  * where `array`: An array of filters.
  * search `array`: An array of full text search.
  * rows `integer`: Number of items to return.
  * start `integer`: Index of the first item to return (starting at 0).
  * timezone `string`: Set timezone for datetime fields
  * include_app_metas `boolean`: Explicitely request application metas for each datasets.

#### Output
* output `file`

### getMetadataTemplatesTypes
List of available metadata templates types, each with their endpoints.



```js
opendatasoft.getMetadataTemplatesTypes({
  "source": ""
}, context)
```

#### Input
* input `object`
  * source **required** `string` (values: catalog, opendatasoft, monitoring): Each source represents a different catalog of datasets you'll be able to query.

#### Output
* output `object`
  * links `array`
    * items [link](#link)

### getMetadataTemplatesType
List of metadata templates available for this type.



```js
opendatasoft.getMetadataTemplatesType({
  "source": "",
  "metadata_template_type": ""
}, context)
```

#### Input
* input `object`
  * source **required** `string` (values: catalog, opendatasoft, monitoring): Each source represents a different catalog of datasets you'll be able to query.
  * metadata_template_type **required** `string` (values: basic, interop, extra)

#### Output
* output `object`
  * links `array`
    * items [link](#link)
  * metadata_templates `array`
    * items `object`
      * links `array`
        * items [link](#link)
      * metadata_template [metadata_template](#metadata_template)

### getMetadataTemplate
A single metadata_template



```js
opendatasoft.getMetadataTemplate({
  "source": "",
  "metadata_template_type": "",
  "metadata_template_name": ""
}, context)
```

#### Input
* input `object`
  * source **required** `string` (values: catalog, opendatasoft, monitoring): Each source represents a different catalog of datasets you'll be able to query.
  * metadata_template_type **required** `string` (values: basic, interop, extra)
  * metadata_template_name **required** `string`

#### Output
* output `object`
  * links `array`
    * items [link](#link)
  * metadata_template [metadata_template](#metadata_template)



## Definitions

### aggregation
* aggregation `object`: Result of an aggregation request.

### attachment
* attachment `object`
  * href `string`
  * metas `object`

### dataset
* dataset `object`
  * attachments `array`
    * items `object`
  * data_visible `boolean`
  * dataset_id `string`
  * features `array`: A map of available features for a dataset, with the fields they apply to.
    * items `string`
  * fields `array`
    * items `object`
      * annotations `object`
      * description `string`
      * label `string`
      * name `string`
      * type `string`
  * has_records `boolean`
  * metas `object`

### datasets
* datasets `array`
  * items [dataset](#dataset)

### link
* link `object`
  * href `string`
  * rel `string`

### links
* links `array`
  * items [link](#link)

### metadata_template
* metadata_template `object`
  * name `string`
  * schema `array`
    * items `object`
  * type `string`

### page
* page `object`
  * description `string`
  * slug `string`
  * title `object`: A localized string (that is an object where the keys are language codes and the values translations of a same
    * en `string`
    * fr `string`

### query_string
* query_string `string`: Query string using the query language.

### record
* record `object`
  * fields `object`
  * id `string`
  * size `integer`
  * timestamp `string`

### records
* records `array`
  * items [record](#record)

### reuse
* reuse `object`
  * created_at `string`: Date when the reuse was submitted.
  * id `string`: reuse id
  * thumbnail `string`: URL illustrating the work.
  * title `string`: Short description of the user's work.
  * url `string`: URL where the work can be accessed publicly.
  * user `object`
    * first_name `string`
    * last_name `string`
    * username `string`

### snapshot
* snapshot `object`
  * created_at `string`
  * description `string`
  * href `string`
  * snapshot_id `string`

### timezone
* timezone `string`: A timezone


