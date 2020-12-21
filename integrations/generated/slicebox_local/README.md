# @datafire/slicebox_local

Client library for Slicebox API

## Installation and Usage
```bash
npm install --save @datafire/slicebox_local
```
```js
let slicebox_local = require('@datafire/slicebox_local').create();

.then(data => {
  console.log(data);
});
```

## Description

Slicebox - safe sharing of medical images

## Actions

### anonymization.anonymize.post
anonymize the images corresponding to the supplied list of image IDs (each paired with a list of DICOM tag translation). This route corresponds to repeated use of the route /images/{id}/anonymize.


```js
slicebox_local.anonymization.anonymize.post({
  "query": []
}, context)
```

#### Input
* input `object`
  * query **required** `array`
    * items [imageTagValues](#imagetagvalues)

#### Output
* output `array`
  * items [image](#image)

### anonymization.keys.get
get a list of anonymization keys, each specifying how vital DICOM attributes have been anonymized for a particular image


```js
slicebox_local.anonymization.keys.get({}, context)
```

#### Input
* input `object`
  * startindex `integer`: start index of returned slice of anonymization keys
  * count `integer`: size of returned slice of anonymization keys
  * orderby `string`: property to order results by
  * orderascending `boolean`: order result ascendingly if true, descendingly otherwise
  * filter `string`: filter the results by matching substrings of properties against this value

#### Output
* output `array`
  * items [anonymizationKey](#anonymizationkey)

### anonymization.keys.export.csv.get
export all anonymization keys as a csv file


```js
slicebox_local.anonymization.keys.export.csv.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `string`

### anonymization.keys.query.post
submit a query for anonymization keys


```js
slicebox_local.anonymization.keys.query.post({
  "query": {
    "startIndex": 0,
    "count": 0,
    "queryProperties": []
  }
}, context)
```

#### Input
* input `object`
  * query **required** [anonymizationKeyQuery](#anonymizationkeyquery)

#### Output
* output `array`
  * items [anonymizationKey](#anonymizationkey)

### anonymization.keys.id.delete
delete an anonymization key that is no longer of interest


```js
slicebox_local.anonymization.keys.id.delete({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: ID of anonymization key

#### Output
*Output schema unknown*

### anonymization.keys.id.get
get the anonymization key with the supplied ID


```js
slicebox_local.anonymization.keys.id.get({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: ID of anonymization key

#### Output
* output [anonymizationKey](#anonymizationkey)

### anonymization.keys.id.keyvalues.get
get pointers to the images corresponding to the anonymization key with the supplied ID


```js
slicebox_local.anonymization.keys.id.keyvalues.get({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: ID of anonymization key

#### Output
* output `array`
  * items [anonymizationKeyValue](#anonymizationkeyvalue)

### anonymization.options.get
list all supported anonymization options defining an anonymization profile


```js
slicebox_local.anonymization.options.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [confidentialityOption](#confidentialityoption)

### boxes.get
get a list of box connections


```js
slicebox_local.boxes.get({}, context)
```

#### Input
* input `object`
  * startindex `integer`: start index of returned slice of boxes
  * count `integer`: size of returned slice of boxes

#### Output
* output `array`
  * items [box](#box)

### boxes.connect.post
connect to another box using a received URL. Used to connect to a public box.


```js
slicebox_local.boxes.connect.post({
  "remoteBox": {}
}, context)
```

#### Input
* input `object`
  * remoteBox **required** [remoteBox](#remotebox)

#### Output
* output [box](#box)

### boxes.createconnection.post
create a new box connection where the supplied entity holds the remote box name. Used by publicly available boxes.


```js
slicebox_local.boxes.createconnection.post({
  "remoteBoxConnectionData": {}
}, context)
```

#### Input
* input `object`
  * remoteBoxConnectionData **required** [remoteBoxConnectionData](#remoteboxconnectiondata)

#### Output
* output [box](#box)

### boxes.incoming.get
get incoming transactions (finished, currently receiving, waiting or failed)


```js
slicebox_local.boxes.incoming.get({}, context)
```

#### Input
* input `object`
  * startindex `integer`: start index of returned slice of transactions
  * count `integer`: size of returned slice of transactions

#### Output
* output `array`
  * items [incomingTransaction](#incomingtransaction)

### boxes.incoming.id.delete
delete an incoming transaction. If a currently active transaction is deleted, a new transaction with the remainder of the images is created when receiving the next incoming image.


```js
slicebox_local.boxes.incoming.id.delete({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: ID of incoming transaction

#### Output
*Output schema unknown*

### boxes.incoming.id.images.get
get the received images corresponding to the incoming transaction with the supplied ID


```js
slicebox_local.boxes.incoming.id.images.get({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: ID of incoming transaction

#### Output
* output `array`
  * items [image](#image)

### boxes.outgoing.get
get outgoing transactions (finished, currently sending, waiting or failed)


```js
slicebox_local.boxes.outgoing.get({}, context)
```

#### Input
* input `object`
  * startindex `integer`: start index of returned slice of transactions
  * count `integer`: size of returned slice of transactions

#### Output
* output `array`
  * items [outgoingTransaction](#outgoingtransaction)

### boxes.outgoing.id.delete
delete an outgoing transaction. This will stop ongoing transactions.


```js
slicebox_local.boxes.outgoing.id.delete({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: ID of outgoing transaction

#### Output
*Output schema unknown*

### boxes.outgoing.id.images.get
get the sent images corresponding to the outgoing transaction with the supplied ID


```js
slicebox_local.boxes.outgoing.id.images.get({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: ID of outgoing transaction

#### Output
* output `array`
  * items [image](#image)

### boxes.id.delete
Delete the remote box with the supplied ID


```js
slicebox_local.boxes.id.delete({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: ID of box to remove

#### Output
*Output schema unknown*

### boxes.id.send.post
send images corresponding to the supplied image ids to the remote box with the supplied ID


```js
slicebox_local.boxes.id.send.post({
  "id": 0,
  "sequence of image tag values": {}
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: ID of box to send images to
  * sequence of image tag values **required** [bulkAnonymizationData](#bulkanonymizationdata)

#### Output
*Output schema unknown*

### destinations.get
Returns a list of currently available destinations. Possible destinations are box - sending data to a remote box, and scu - sending data a receiving SCP.


```js
slicebox_local.destinations.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [destination](#destination)

### directorywatches.get
get a list of watch directories. Each watch directory and its sub-directories are watched for incoming DICOM files, which are read and imported into slicebox.


```js
slicebox_local.directorywatches.get({}, context)
```

#### Input
* input `object`
  * startindex `integer`: start index of returned slice of watched directories
  * count `integer`: size of returned slice of watched directories

#### Output
* output `array`
  * items [watchedDirectory](#watcheddirectory)

### directorywatches.post
add a new directory to watch for incoming DICOM files


```js
slicebox_local.directorywatches.post({}, context)
```

#### Input
* input `object`
  * watchedDirectory [watchedDirectory](#watcheddirectory)

#### Output
* output [watchedDirectory](#watcheddirectory)

### directorywatches.id.delete
stop watching and remove the directory corresponding to the supplied ID


```js
slicebox_local.directorywatches.id.delete({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: id of directory to stop watching

#### Output
*Output schema unknown*

### filtering.associations.get
Get a list of source to filter associations.


```js
slicebox_local.filtering.associations.get({}, context)
```

#### Input
* input `object`
  * startindex `integer`: start index of returned slice of source <-> filter associations
  * count `integer`: size of returned slice of source <-> filter associations

#### Output
* output `array`
  * items [sourceTagFilter](#sourcetagfilter)

### filtering.associations.post
Inserts or updates a source <-> filter associations. If the specified Source already  has an association this is updated, otherwise a new is inserted.


```js
slicebox_local.filtering.associations.post({
  "sourcetagfilter": {}
}, context)
```

#### Input
* input `object`
  * sourcetagfilter **required** [sourceTagFilter](#sourcetagfilter)

#### Output
*Output schema unknown*

### filtering.associations.id.delete
remove the source <-> filter association corresponding to the supplied ID


```js
slicebox_local.filtering.associations.id.delete({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: id of source <-> filter association to remove

#### Output
*Output schema unknown*

### filtering.filters.get
List defined filters


```js
slicebox_local.filtering.filters.get({}, context)
```

#### Input
* input `object`
  * startindex `integer`: start index of returned slice of filters
  * count `integer`: size of returned slice of filters

#### Output
* output `array`
  * items [filter](#filter)

### filtering.filters.post
Inserts or updates a filter. If a filter with same name as supplied filter exists this filter is updated, otherwise a new filter is inserted.


```js
slicebox_local.filtering.filters.post({
  "tagFilter": {}
}, context)
```

#### Input
* input `object`
  * tagFilter **required** [filter](#filter)

#### Output
*Output schema unknown*

### filtering.filters.id.delete
remove the filter corresponding to the supplied ID


```js
slicebox_local.filtering.filters.id.delete({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: id of filter to remove

#### Output
*Output schema unknown*

### filtering.filters.id.tagpaths.get
List tagpaths for the selected filter


```js
slicebox_local.filtering.filters.id.tagpaths.get({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: id of filter

#### Output
* output `array`
  * items [tagPathTag](#tagpathtag)

### filtering.filters.id.tagpaths.post
add a tagpath to a filter


```js
slicebox_local.filtering.filters.id.tagpaths.post({
  "id": 0,
  "tagpath": {}
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: id of filter to remove
  * tagpath **required** [tagPathTag](#tagpathtag)

#### Output
*Output schema unknown*

### filtering.filters.id.tagpaths.tagpathid.delete
remove the tagpath corresponding to the supplied ID


```js
slicebox_local.filtering.filters.id.tagpaths.tagpathid.delete({
  "id": 0,
  "tagpathid": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: id of filter
  * tagpathid **required** `integer`: id of TagPath to remove

#### Output
*Output schema unknown*

### forwarding.rule.id.delete
remove the forwarding rule corresponding to the supplied ID


```js
slicebox_local.forwarding.rule.id.delete({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: id of forwarding rule to remove

#### Output
*Output schema unknown*

### forwarding.rules.get
get a list of all forwarding rules. A forwarding rule specifies the automatic forwarding of images from a source (SCP, BOX, etc.) to a destimation (BOX, SCU, etc.)


```js
slicebox_local.forwarding.rules.get({}, context)
```

#### Input
* input `object`
  * startindex `integer`: start index of returned slice of rules
  * count `integer`: size of returned slice of rules

#### Output
* output `array`
  * items [forwardingrule](#forwardingrule)

### forwarding.rules.post
add a new forwarding rule


```js
slicebox_local.forwarding.rules.post({}, context)
```

#### Input
* input `object`
  * FowardingRule [forwardingrule](#forwardingrule)

#### Output
* output [forwardingrule](#forwardingrule)

### images.post
add a DICOM dataset to slicebox


```js
slicebox_local.images.post({
  "dataset": ""
}, context)
```

#### Input
* input `object`
  * dataset **required** `string`, `object`: The dataset file
    * content `string`
    * encoding `string` (values: ascii, utf8, utf16le, base64, binary, hex)
    * contentType `string`
    * filename `string`

#### Output
* output [image](#image)

### images.delete.post
bulk delete a sequence of images according to the supplied image IDs. This is the same as a sequence of DELETE requests to /images/{id}


```js
slicebox_local.images.delete.post({
  "image IDs": []
}, context)
```

#### Input
* input `object`
  * image IDs **required** `array`
    * items `integer`

#### Output
*Output schema unknown*

### images.export.get
download the export set with the supplied export set ID as a zip archive


```js
slicebox_local.images.export.get({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: ID of export set to download

#### Output
*Output schema unknown*

### images.export.post
create an export set, a group of image IDs of images to export. The export set will contain the selected images. The export set is available for download 12 hours before it is automatically deleted.


```js
slicebox_local.images.export.post({
  "image ids": []
}, context)
```

#### Input
* input `object`
  * image ids **required** `array`
    * items `integer`

#### Output
* output [exportSetId](#exportsetid)

### images.jpeg.post
add a JPEG image to slicebox. The image data will be wrapped in a DICOM file and added as a new series belonging to the study with the supplied ID


```js
slicebox_local.images.jpeg.post({
  "studyid": 0,
  "jpeg bytes": null
}, context)
```

#### Input
* input `object`
  * studyid **required** `integer`: ID of study to add new series to
  * description `string`: DICOM series description of the resulting secondary capture series

#### Output
* output [image](#image)

### images.id.delete
Delete the image with the supplied ID


```js
slicebox_local.images.id.delete({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: ID of image

#### Output
*Output schema unknown*

### images.id.get
fetch dataset corresponding to the supplied image ID


```js
slicebox_local.images.id.get({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: ID of image

#### Output
*Output schema unknown*

### images.id.anonymize.put
delete the selected image and replace it with an anonymized version


```js
slicebox_local.images.id.anonymize.put({
  "id": 0,
  "tag values": {}
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: ID of image to anonymize
  * tag values **required** [anonymizationData](#anonymizationdata)

#### Output
* output [image](#image)

### images.id.anonymized.post
get an anonymized version of the image with the supplied ID


```js
slicebox_local.images.id.anonymized.post({
  "id": 0,
  "tag values": {}
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: ID of image for which to get anonymized dataset
  * tag values **required** [anonymizationData](#anonymizationdata)

#### Output
*Output schema unknown*

### images.id.attributes.get
list all DICOM attributes of the dataset corresponding to the supplied image ID


```js
slicebox_local.images.id.attributes.get({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: ID of image

#### Output
* output `array`
  * items [imageAttribute](#imageattribute)

### images.id.imageinformation.get
get basic information about the pixel data of an image


```js
slicebox_local.images.id.imageinformation.get({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: ID of image

#### Output
* output [imageInformation](#imageinformation)

### images.id.modify.put
modify and/or insert image attributes according to the input tagpath-value mappings


```js
slicebox_local.images.id.modify.put({
  "id": 0,
  "tag path value mappings": []
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: ID of image to modify
  * tag path value mappings **required** `array`
    * items [tagMapping](#tagmapping)

#### Output
*Output schema unknown*

### images.id.png.get
get a PNG image representation of the image corresponding to the supplied ID


```js
slicebox_local.images.id.png.get({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: ID of image
  * framenumber `integer`: frame/slice to show
  * windowmin `integer`: intensity window minimum value. If not specified or set to zero, windowing will be selected from relevant DICOM attributes
  * windowmax `integer`: intensity window maximum value. If not specified or set to zero, windowing will be selected from relevant DICOM attributes
  * imageheight `integer`: height of PNG image. If not specified or set to zero, the image height will equal that of the data

#### Output
*Output schema unknown*

### import.sessions.get
Returns a list of available import sessions.


```js
slicebox_local.import.sessions.get({}, context)
```

#### Input
* input `object`
  * startindex `integer`: start index of returned slice of import sessions
  * count `integer`: size of returned slice of import sessions

#### Output
* output `array`
  * items [importSession](#importsession)

### import.sessions.post
create a new import sessions


```js
slicebox_local.import.sessions.post({
  "import session": {}
}, context)
```

#### Input
* input `object`
  * import session **required** [importSession](#importsession)

#### Output
* output [importSession](#importsession)

### import.sessions.id.delete
deletes the import session with the supplied ID


```js
slicebox_local.import.sessions.id.delete({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: ID of import session to delete

#### Output
*Output schema unknown*

### import.sessions.id.get
Returns the import sessions with the supplied ID


```js
slicebox_local.import.sessions.id.get({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: ID of session

#### Output
* output [importSession](#importsession)

### import.sessions.id.images.get
get the imported images corresponding to the import session with the supplied ID


```js
slicebox_local.import.sessions.id.images.get({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: ID of import session

#### Output
* output `array`
  * items [image](#image)

### import.sessions.id.images.post
add a DICOM dataset to the import session with the supplied ID


```js
slicebox_local.import.sessions.id.images.post({
  "id": 0,
  "dataset": ""
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: ID of session
  * dataset **required** `string`, `object`: The dataset file
    * content `string`
    * encoding `string` (values: ascii, utf8, utf16le, base64, binary, hex)
    * contentType `string`
    * filename `string`

#### Output
* output [image](#image)

### log.delete
delete all log messages


```js
slicebox_local.log.delete(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### log.get
get a list of slicebox log messages


```js
slicebox_local.log.get({}, context)
```

#### Input
* input `object`
  * startindex `integer`: start index of returned slice of log messages
  * count `integer`: size of returned slice of log messages
  * subject `string`: log subject to filter results by
  * type `string`: log type (DEFAULT, INFO, WARN, ERROR) to filter results by

#### Output
* output `array`
  * items [logEntry](#logentry)

### log.id.delete
Delete the log entry with the supplied ID


```js
slicebox_local.log.id.delete({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: ID of log entry

#### Output
*Output schema unknown*

### metadata.flatseries.get
Returns a list of flattened metadata on the patient, study and series levels


```js
slicebox_local.metadata.flatseries.get({}, context)
```

#### Input
* input `object`
  * startindex `integer`: start index of returned slice of flat series
  * count `integer`: size of returned slice of flat series
  * orderby `string`: flat series property to order results by
  * orderascending `boolean`: order result ascendingly if true, descendingly otherwise
  * filter `string`: filter the results by matching substrings of flat series properties against this value
  * sources `string`: filter the results by matching on one or more series sources. Examples of sources are user, box, directory or scp. The list of sources to filter results by must have the form TYPE1:ID1,TYPE2:ID2,...,TYPEN:IDN. For instance, the argument sources=box:1,user:5 shows results either sent from (slice)box with id 1 or uploaded by user with id 5.
  * seriestypes `string`: filter the results by matching on one or more series types. The supplied list of series types must be a comma separated list of series type ids. For instance, the argument seriestypes=3,7,22 shows series assigned to either of the series types with ids 3, 7 and 22.
  * seriestags `string`: filter the results by matching on one or more series tags. The supplied list of series tags must be a comma separated list of series tag ids. For instance, the argument seriestags=6,2,11 shows series with either of the series tags with ids 6, 2 and 11.

#### Output
* output `array`
  * items [flatSeries](#flatseries)

### metadata.flatseries.query.post
submit a query for flat series


```js
slicebox_local.metadata.flatseries.query.post({
  "query": {
    "startIndex": 0,
    "count": 0,
    "queryProperties": []
  }
}, context)
```

#### Input
* input `object`
  * query **required** [query](#query)

#### Output
* output `array`
  * items [flatSeries](#flatseries)

### metadata.flatseries.id.get
Return the flat series with the supplied ID


```js
slicebox_local.metadata.flatseries.id.get({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: ID of flat series

#### Output
* output [flatSeries](#flatseries)

### metadata.images.get
Returns a list of metadata on the image level of the DICOM hierarchy


```js
slicebox_local.metadata.images.get({
  "seriesid": 0
}, context)
```

#### Input
* input `object`
  * startindex `integer`: start index of returned slice of images
  * count `integer`: size of returned slice of images
  * seriesid **required** `integer`: reference to series to list images for

#### Output
* output `array`
  * items [image](#image)

### metadata.images.query.post
submit a query for images


```js
slicebox_local.metadata.images.query.post({
  "query": {
    "startIndex": 0,
    "count": 0,
    "queryProperties": []
  }
}, context)
```

#### Input
* input `object`
  * query **required** [query](#query)

#### Output
* output `array`
  * items [image](#image)

### metadata.images.id.get
Return the image with the supplied ID


```js
slicebox_local.metadata.images.id.get({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: ID of image

#### Output
* output [image](#image)

### metadata.patients.get
Returns a list of metadata on the patient level of the DICOM hierarchy


```js
slicebox_local.metadata.patients.get({}, context)
```

#### Input
* input `object`
  * startindex `integer`: start index of returned slice of patients
  * count `integer`: size of returned slice of patients
  * orderby `string`: patient property to order results by
  * orderascending `boolean`: order result ascendingly if true, descendingly otherwise
  * filter `string`: filter the results by matching substrings of patient properties against this value
  * sources `string`: filter the results by matching on one or more underlying series sources. Examples of sources are user, box, directory or scp. The list of sources to filter results by must have the form TYPE1:ID1,TYPE2:ID2,...,TYPEN:IDN. For instance, the argument sources=box:1,user:5 shows results either sent from (slice)box with id 1 or uploaded by user with id 5.
  * seriestypes `string`: filter the results by matching on one or more underlying series types. The supplied list of series types must be a comma separated list of series type ids. For instance, the argument seriestypes=3,7,22 shows results including series assigned to either of the series types with ids 3, 7 and 22.
  * seriestags `string`: filter the results by matching on one or more underlying series tags. The supplied list of series tags must be a comma separated list of series tag ids. For instance, the argument seriestags=6,2,11 shows results including series with either of the series tags with ids 6, 2 and 11.

#### Output
* output `array`
  * items [patient](#patient)

### metadata.patients.query.post
submit a query for patients


```js
slicebox_local.metadata.patients.query.post({
  "query": {
    "startIndex": 0,
    "count": 0,
    "queryProperties": []
  }
}, context)
```

#### Input
* input `object`
  * query **required** [query](#query)

#### Output
* output `array`
  * items [patient](#patient)

### metadata.patients.id.get
Return the patient with the supplied ID


```js
slicebox_local.metadata.patients.id.get({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: ID of patient

#### Output
* output [patient](#patient)

### metadata.patients.id.images.get
Returns all images for the patient with the supplied patient ID


```js
slicebox_local.metadata.patients.id.images.get({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: ID of patient
  * sources `string`: filter the results by matching on one or more series sources. Examples of sources are user, box, directory or scp. The list of sources to filter results by must have the form TYPE1:ID1,TYPE2:ID2,...,TYPEN:IDN. For instance, the argument sources=box:1,user:5 shows results either sent from (slice)box with id 1 or uploaded by user with id 5.
  * seriestypes `string`: filter the results by matching on one or more series types. The supplied list of series types must be a comma separated list of series type ids. For instance, the argument seriestypes=3,7,22 shows series assigned to either of the series types with ids 3, 7 and 22.
  * seriestags `string`: filter the results by matching on one or more series tags. The supplied list of series tags must be a comma separated list of series tag ids. For instance, the argument seriestags=6,2,11 shows series with either of the series tags with ids 6, 2 and 11.

#### Output
* output `array`
  * items [image](#image)

### metadata.series.get
Returns a list of metadata on the series level of the DICOM hierarchy


```js
slicebox_local.metadata.series.get({
  "studyid": 0
}, context)
```

#### Input
* input `object`
  * startindex `integer`: start index of returned slice of series
  * count `integer`: size of returned slice of series
  * studyid **required** `integer`: reference to study to list series for
  * sources `string`: filter the results by matching on one or more series sources. Examples of sources are user, box, directory or scp. The list of sources to filter results by must have the form TYPE1:ID1,TYPE2:ID2,...,TYPEN:IDN. For instance, the argument sources=box:1,user:5 shows results either sent from (slice)box with id 1 or uploaded by user with id 5.
  * seriestypes `string`: filter the results by matching on one or more series types. The supplied list of series types must be a comma separated list of series type ids. For instance, the argument seriestypes=3,7,22 shows series assigned to either of the series types with ids 3, 7 and 22.
  * seriestags `string`: filter the results by matching on one or more series tags. The supplied list of series tags must be a comma separated list of series tag ids. For instance, the argument seriestags=6,2,11 shows series with either of the series tags with ids 6, 2 and 11.

#### Output
* output `array`
  * items [series](#series)

### metadata.series.query.post
submit a query for series


```js
slicebox_local.metadata.series.query.post({
  "query": {
    "startIndex": 0,
    "count": 0,
    "queryProperties": []
  }
}, context)
```

#### Input
* input `object`
  * query **required** [query](#query)

#### Output
* output `array`
  * items [series](#series)

### metadata.series.id.get
Return the series with the supplied ID


```js
slicebox_local.metadata.series.id.get({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: ID of series

#### Output
* output [series](#series)

### metadata.series.id.seriestags.get
get the list of series tags for the series with the supplied ID.


```js
slicebox_local.metadata.series.id.seriestags.get({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: ID of series

#### Output
* output `array`
  * items [seriestag](#seriestag)

### metadata.series.id.seriestags.post
add a series tag to the series with the supplied ID


```js
slicebox_local.metadata.series.id.seriestags.post({
  "id": 0,
  "query": {}
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: ID of series
  * query **required** [seriestag](#seriestag)

#### Output
* output [seriestag](#seriestag)

### metadata.series.id.seriestypes.delete
Delete all series types for the series with the supplied ID


```js
slicebox_local.metadata.series.id.seriestypes.delete({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: ID of series

#### Output
*Output schema unknown*

### metadata.series.id.seriestypes.get
get the list of series types for the series with the supplied ID.


```js
slicebox_local.metadata.series.id.seriestypes.get({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: ID of series

#### Output
* output `array`
  * items [seriestype](#seriestype)

### metadata.series.id.source.get
Return the source of the series with the supplied ID


```js
slicebox_local.metadata.series.id.source.get({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: ID of series

#### Output
* output [source](#source)

### metadata.series.seriesId.seriestags.seriesTagId.delete
Delete the series tag with the supplied series tag ID from the series with the supplied series ID


```js
slicebox_local.metadata.series.seriesId.seriestags.seriesTagId.delete({
  "seriesId": 0,
  "seriesTagId": 0
}, context)
```

#### Input
* input `object`
  * seriesId **required** `integer`: ID of series
  * seriesTagId **required** `integer`: ID of series tag to remove

#### Output
*Output schema unknown*

### metadata.series.seriesId.seriestypes.seriesTypeId.delete
Delete the series type with the supplied series type ID from the series with the supplied series ID


```js
slicebox_local.metadata.series.seriesId.seriestypes.seriesTypeId.delete({
  "seriesId": 0,
  "seriesTypeId": 0
}, context)
```

#### Input
* input `object`
  * seriesId **required** `integer`: ID of series
  * seriesTypeId **required** `integer`: ID of series type to remove

#### Output
*Output schema unknown*

### metadata.series.seriesId.seriestypes.seriesTypeId.put
Add the series type with the supplied series type ID to the series with the supplied series ID


```js
slicebox_local.metadata.series.seriesId.seriestypes.seriesTypeId.put({
  "seriesId": 0,
  "seriesTypeId": 0
}, context)
```

#### Input
* input `object`
  * seriesId **required** `integer`: ID of series
  * seriesTypeId **required** `integer`: ID of series type to add

#### Output
*Output schema unknown*

### metadata.seriestags.get
Returns a list of series tags currently currently in use.


```js
slicebox_local.metadata.seriestags.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [seriestag](#seriestag)

### metadata.studies.get
Returns a list of metadata on the study level of the DICOM hierarchy


```js
slicebox_local.metadata.studies.get({
  "patientid": 0
}, context)
```

#### Input
* input `object`
  * startindex `integer`: start index of returned slice of studies
  * count `integer`: size of returned slice of studies
  * patientid **required** `integer`: reference to patient to list studies for
  * sources `string`: filter the results by matching on one or more underlying series sources. Examples of sources are user, box, directory or scp. The list of sources to filter results by must have the form TYPE1:ID1,TYPE2:ID2,...,TYPEN:IDN. For instance, the argument sources=box:1,user:5 shows results either sent from (slice)box with id 1 or uploaded by user with id 5.
  * seriestypes `string`: filter the results by matching on one or more underlying series types. The supplied list of series types must be a comma separated list of series type ids. For instance, the argument seriestypes=3,7,22 shows results including series assigned to either of the series types with ids 3, 7 and 22.
  * seriestags `string`: filter the results by matching on one or more underlying series tags. The supplied list of series tags must be a comma separated list of series tag ids. For instance, the argument seriestags=6,2,11 shows results including series with either of the series tags with ids 6, 2 and 11.

#### Output
* output `array`
  * items [study](#study)

### metadata.studies.query.post
submit a query for studies


```js
slicebox_local.metadata.studies.query.post({
  "query": {
    "startIndex": 0,
    "count": 0,
    "queryProperties": []
  }
}, context)
```

#### Input
* input `object`
  * query **required** [query](#query)

#### Output
* output `array`
  * items [study](#study)

### metadata.studies.id.get
Return the study with the supplied ID


```js
slicebox_local.metadata.studies.id.get({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: ID of study

#### Output
* output [study](#study)

### metadata.studies.id.images.get
Returns all images for the study with the supplied study ID


```js
slicebox_local.metadata.studies.id.images.get({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: ID of study
  * sources `string`: filter the results by matching on one or more series sources. Examples of sources are user, box, directory or scp. The list of sources to filter results by must have the form TYPE1:ID1,TYPE2:ID2,...,TYPEN:IDN. For instance, the argument sources=box:1,user:5 shows results either sent from (slice)box with id 1 or uploaded by user with id 5.
  * seriestypes `string`: filter the results by matching on one or more series types. The supplied list of series types must be a comma separated list of series type ids. For instance, the argument seriestypes=3,7,22 shows series assigned to either of the series types with ids 3, 7 and 22.
  * seriestags `string`: filter the results by matching on one or more series tags. The supplied list of series tags must be a comma separated list of series tag ids. For instance, the argument seriestags=6,2,11 shows series with either of the series tags with ids 6, 2 and 11.

#### Output
* output `array`
  * items [image](#image)

### scps.get
get a list of DICOM SCPs. Each SCP is a server for receiving DICOM images from e.g. a PACS system.


```js
slicebox_local.scps.get({}, context)
```

#### Input
* input `object`
  * startindex `integer`: start index of returned slice of SCPs
  * count `integer`: size of returned slice of SCPs

#### Output
* output `array`
  * items [scp](#scp)

### scps.post
add a new SCP for receiving DICOM images


```js
slicebox_local.scps.post({}, context)
```

#### Input
* input `object`
  * scp [scp](#scp)

#### Output
* output [scp](#scp)

### scps.id.delete
shut down and remove the SCP corresponding to the supplied ID


```js
slicebox_local.scps.id.delete({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: id of SCP to remove

#### Output
*Output schema unknown*

### scus.get
get a list of DICOM SCUs. Each SCU is a client for sending DICOM images to an SCP, e.g. a PACS system.


```js
slicebox_local.scus.get({}, context)
```

#### Input
* input `object`
  * startindex `integer`: start index of returned slice of SCUs
  * count `integer`: size of returned slice of SCUs

#### Output
* output `array`
  * items [scu](#scu)

### scus.post
add a new SCU for sending DICOM images


```js
slicebox_local.scus.post({}, context)
```

#### Input
* input `object`
  * scu [scu](#scu)

#### Output
* output [scu](#scu)

### scus.id.delete
remove the SCU corresponding to the supplied ID


```js
slicebox_local.scus.id.delete({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: id of SCU to remove

#### Output
*Output schema unknown*

### scus.id.send.post
send the images with the supplied image IDs to a DICOM SCP using the the SCU with the supplied scu ID


```js
slicebox_local.scus.id.send.post({
  "id": 0,
  "imageids": []
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: id of SCU to use for sending
  * imageids **required** `array`
    * items `integer`

#### Output
*Output schema unknown*

### seriestypes.get
get a list of all added series types. By filtering search results for certain series types, it is easier for applications to ensure that they read images of applicable types.


```js
slicebox_local.seriestypes.get({}, context)
```

#### Input
* input `object`
  * startindex `integer`: start index of returned slice of series types
  * count `integer`: size of returned slice of series types

#### Output
* output `array`
  * items [seriestype](#seriestype)

### seriestypes.post
add a new series type


```js
slicebox_local.seriestypes.post({}, context)
```

#### Input
* input `object`
  * SeriesType [seriestype](#seriestype)

#### Output
* output [seriestype](#seriestype)

### seriestypes.rules.get
get a list of rules for assigning series types to series. A rule connects to a series of attributes with values and a resulting series type. If a series has the required values of the listed attributes, it is assigned to the series type of the rule.


```js
slicebox_local.seriestypes.rules.get({
  "seriestypeid": 0
}, context)
```

#### Input
* input `object`
  * seriestypeid **required** `integer`: ID of series type to list rules for

#### Output
* output `array`
  * items [seriestyperule](#seriestyperule)

### seriestypes.rules.post
add a new series type rule


```js
slicebox_local.seriestypes.rules.post({}, context)
```

#### Input
* input `object`
  * SeriesTypeRule [seriestyperule](#seriestyperule)

#### Output
* output [seriestyperule](#seriestyperule)

### seriestypes.rules.updatestatus.get
get the status of the internal process of updating series types for series following a change of series types, rules or attributes.


```js
slicebox_local.seriestypes.rules.updatestatus.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [seriestypeupdatestatus](#seriestypeupdatestatus)

### seriestypes.rules.id.delete
remove the series type rule corresponding to the supplied ID


```js
slicebox_local.seriestypes.rules.id.delete({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: id of series type rule to remove

#### Output
*Output schema unknown*

### seriestypes.rules.id.attributes.get
get the list of attributes for the series type rule with the supplied ID.


```js
slicebox_local.seriestypes.rules.id.attributes.get({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: index of series type rule to list rule attributes for

#### Output
* output `array`
  * items [seriestyperuleattribute](#seriestyperuleattribute)

### seriestypes.rules.id.attributes.post
add a new series type rule attribute


```js
slicebox_local.seriestypes.rules.id.attributes.post({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: ID of rule
  * SeriesTypeRuleAttribute [seriestyperuleattribute](#seriestyperuleattribute)

#### Output
* output [seriestyperuleattribute](#seriestyperuleattribute)

### seriestypes.rules.ruleId.attributes.attributeId.delete
remove the series type rule attribute corresponding to the supplied series type and attribute IDs


```js
slicebox_local.seriestypes.rules.ruleId.attributes.attributeId.delete({
  "ruleId": 0,
  "attributeId": 0
}, context)
```

#### Input
* input `object`
  * ruleId **required** `integer`: id of series type rule for which to remove an attribute
  * attributeId **required** `integer`: id of attribute to remove

#### Output
*Output schema unknown*

### seriestypes.series.query.post
submit a query for seriestypes for a list of series


```js
slicebox_local.seriestypes.series.query.post({
  "query": {
    "ids": []
  }
}, context)
```

#### Input
* input `object`
  * query **required** [idsquery](#idsquery)

#### Output
* output [seriesidseriestypesresult](#seriesidseriestypesresult)

### seriestypes.id.delete
remove the series type corresponding to the supplied ID


```js
slicebox_local.seriestypes.id.delete({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: id of series type to remove

#### Output
*Output schema unknown*

### seriestypes.id.put
request an asynchronous update of all series, labelling appropriate series with the series type corresponding to the supplied ID.


```js
slicebox_local.seriestypes.id.put({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: id of series type to update series labels for

#### Output
*Output schema unknown*

### sources.get
Returns a list of currently available data sources. Possible source types are user - data imported by an API call by a user, box - data received from a remote box, directory - data imported via a watched directory, import - data imported into slicebox using import sessions, or scp - data received from a PACS.


```js
slicebox_local.sources.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [source](#source)

### system.health.get
No-op route for checking whether the service is alive or not


```js
slicebox_local.system.health.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### system.stop.post
stop and shut down slicebox


```js
slicebox_local.system.stop.post(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### transactions.token.image.post
add an image (dataset) as part of a transaction. This method is used when sending images using the push method to a public slicebox.


```js
slicebox_local.transactions.token.image.post({
  "token": "",
  "transactionid": 0,
  "sequencenumber": 0,
  "totalimagecount": 0,
  "dataset": null
}, context)
```

#### Input
* input `object`
  * token **required** `string`: authentication token identifying the current box-to-box connection
  * transactionid **required** `integer`: the ID of the client's outgoing transaction
  * sequencenumber **required** `integer`: the index of this image in the transaction
  * totalimagecount **required** `integer`: the total number of images in this transaction

#### Output
*Output schema unknown*

### transactions.token.outgoing.get
fetch an image from the connected box as part of a transaction. This method is used when sending images using the poll method from a public slicebox.


```js
slicebox_local.transactions.token.outgoing.get({
  "token": "",
  "transactionid": 0,
  "imageid": 0
}, context)
```

#### Input
* input `object`
  * token **required** `string`: authentication token identifying the current box-to-box connection
  * transactionid **required** `integer`: the ID of the outgoing transaction
  * imageid **required** `integer`: the ID of the outgoing transaction image

#### Output
*Output schema unknown*

### transactions.token.outgoing.done.post
signal that the supplied outgoing transaction and image was successfully received and can be marked as sent. This method is used when sending images using the poll method from a public slicebox.


```js
slicebox_local.transactions.token.outgoing.done.post({
  "token": "",
  "outgoing entry and image information block": {}
}, context)
```

#### Input
* input `object`
  * token **required** `string`: authentication token identifying the current box-to-box connection
  * outgoing entry and image information block **required** [outgoingTransactionImage](#outgoingtransactionimage)

#### Output
*Output schema unknown*

### transactions.token.outgoing.failed.post
signal that the image corresponding to the supplied outgoing transaction and image could not be read or stored properly on the receiving side, and that the transaction should be marked as failed.


```js
slicebox_local.transactions.token.outgoing.failed.post({
  "token": "",
  "outgoing transaction and image, and error message": {}
}, context)
```

#### Input
* input `object`
  * token **required** `string`: authentication token identifying the current box-to-box connection
  * outgoing transaction and image, and error message **required** [failedOutgoingTransactionImage](#failedoutgoingtransactionimage)

#### Output
*Output schema unknown*

### transactions.token.outgoing.poll.get
get next outgoing transaction and image (information on the next image that the connected box wishes to send to you), if any. This method is used when sending images using the poll method from a public slicebox.


```js
slicebox_local.transactions.token.outgoing.poll.get({
  "token": ""
}, context)
```

#### Input
* input `object`
  * token **required** `string`: authentication token identifying the current box-to-box connection

#### Output
* output `array`
  * items [outgoingTransactionImage](#outgoingtransactionimage)

### transactions.token.status.get
get the status of the remote incoming transaction with the supplied transaction ID


```js
slicebox_local.transactions.token.status.get({
  "token": "",
  "transactionid": 0
}, context)
```

#### Input
* input `object`
  * token **required** `string`: authentication token identifying the current box-to-box connection
  * transactionid **required** `integer`: the ID of the client's outgoing transaction

#### Output
*Output schema unknown*

### transactions.token.status.put
update the status of the transaction with the supplied ID


```js
slicebox_local.transactions.token.status.put({
  "token": "",
  "transactionid": 0,
  "transaction status": ""
}, context)
```

#### Input
* input `object`
  * token **required** `string`: authentication token identifying the current box-to-box connection
  * transactionid **required** `integer`: the ID of the client's outgoing transaction
  * transaction status **required** `string`

#### Output
*Output schema unknown*

### users.get
Returns all users of slicebox


```js
slicebox_local.users.get({}, context)
```

#### Input
* input `object`
  * startindex `integer`: start index of returned slice of users
  * count `integer`: size of returned slice of users

#### Output
* output `array`
  * items [user](#user)

### users.post
Creates a new user. Dupicates are accepted but not added.


```js
slicebox_local.users.post({
  "user": {}
}, context)
```

#### Input
* input `object`
  * user **required** [newUser](#newuser)

#### Output
* output [user](#user)

### users.current.get
obtain information on the currently logged in user as specified by the supplied session cookie, IP address and user agent.


```js
slicebox_local.users.current.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [userInfo](#userinfo)

### users.login.post
Obtain a session cookie that can be used to authenticate future API calls from the present IP address and with the present user agent.


```js
slicebox_local.users.login.post({
  "UserPass": {}
}, context)
```

#### Input
* input `object`
  * UserPass **required** [userPass](#userpass)

#### Output
*Output schema unknown*

### users.logout.post
Logout the current user by responding with a delete cookie header removing the session cookie for this user.


```js
slicebox_local.users.logout.post(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### users.id.delete
deletes a single user based on the ID supplied


```js
slicebox_local.users.id.delete({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: ID of user to delete

#### Output
*Output schema unknown*



## Definitions

### anonymizationData
* anonymizationData `object`
  * profile [anonymizationProfile](#anonymizationprofile)
  * tagValues `array`
    * items [tagValue](#tagvalue)

### anonymizationKey
* anonymizationKey `object`
  * anonPatientID `string`
  * anonPatientName `string`
  * anonSOPInstanceUID `string`
  * anonSeriesInstanceUID `string`
  * anonStudyInstanceUID `string`
  * created `integer`
  * id `integer`
  * imageId `integer`
  * patientID `string`
  * patientName `string`
  * seriesInstanceUID `string`
  * sopInstanceUID `string`
  * studyInstanceUID `string`

### anonymizationKeyQuery
* anonymizationKeyQuery `object`
  * count **required** `integer`
  * order [queryOrder](#queryorder)
  * queryProperties **required** `array`
    * items [queryProperty](#queryproperty)
  * startIndex **required** `integer`

### anonymizationKeyValue
* anonymizationKeyValue `object`
  * anonymizationKeyId `integer`
  * anonymizedValue `string`
  * id `integer`
  * tagPath [tagPathTag](#tagpathtag)
  * value `string`

### anonymizationProfile
* anonymizationProfile `object`
  * options `array`
    * items [confidentialityOption](#confidentialityoption)

### box
* box `object`
  * baseUrl `string`
  * id `integer`
  * name `string`
  * online `boolean`
  * profile [anonymizationProfile](#anonymizationprofile)
  * sendMethod `string`
  * token `string`

### bulkAnonymizationData
* bulkAnonymizationData `object`
  * imageTagValuesSet `array`
    * items [imageTagValues](#imagetagvalues)
  * profile [anonymizationProfile](#anonymizationprofile)

### confidentialityOption
* confidentialityOption `object`
  * description `string`
  * name `string`
  * rank `integer`
  * title `string`

### destination
* destination `object`
  * destinationId `integer`
  * destinationName `string`
  * destinationType `string`

### dicomPropertyValue
* dicomPropertyValue `object`
  * value `string`

### exportSetId
* exportSetId `object`
  * value `integer`

### failedOutgoingTransactionImage
* failedOutgoingTransactionImage `object`
  * message `string`
  * transactionImage [outgoingTransactionImage](#outgoingtransactionimage)

### filter
* filter `object`
  * id `integer`
  * name `string`
  * tagFilterType `string`
  * tags `array`
    * items [tagPathTag](#tagpathtag)

### flatSeries
* flatSeries `object`
  * id `integer`
  * patient [patient](#patient)
  * series [series](#series)
  * study [study](#study)

### forwardingrule
* forwardingrule `object`
  * destination [destination](#destination)
  * id `integer`
  * keepImages `boolean`
  * source [source](#source)

### idsquery
* idsquery `object`
  * ids **required** `array`
    * items `integer`

### image
* image `object`
  * id `integer`
  * imageType [dicomPropertyValue](#dicompropertyvalue)
  * instanceNumber [dicomPropertyValue](#dicompropertyvalue)
  * seriesId `integer`
  * sopInstanceUID [dicomPropertyValue](#dicompropertyvalue)

### imageAttribute
* imageAttribute `object`
  * depth `integer`
  * element `string`
  * group `string`
  * length `integer`
  * multiplicity `integer`
  * name `string`
  * path `string`
  * value `string`
  * vr `string`

### imageInformation
* imageInformation `object`
  * frameIndex `integer`
  * maximumPixelValue `integer`
  * minimumPixelValue `integer`
  * numberOfFrames `integer`

### imageTagValues
* imageTagValues `object`
  * imageId `integer`
  * tagValues `array`
    * items [tagValue](#tagvalue)

### importSession
* importSession `object`
  * created `integer`
  * filesAdded `integer`
  * filesImported `integer`
  * filesRejected `integer`
  * id `integer`
  * lastUpdated `integer`
  * name `string`
  * user `string`
  * userId `integer`

### incomingTransaction
* incomingTransaction `object`
  * boxId `integer`
  * boxName `string`
  * id `integer`
  * outgoingTransactionId `integer`
  * receivedImageCount `integer`
  * status `string`
  * totalImageCount `integer`
  * updated `integer`

### logEntry
* logEntry `object`
  * created `integer`
  * entryType `string`
  * id `integer`
  * message `string`
  * subject `string`

### newUser
* newUser `object`
  * password `string`
  * role `string`
  * user `string`

### outgoingImage
* outgoingImage `object`
  * id `integer`
  * imageId `integer`
  * outgoingTransactionId `integer`
  * sent `boolean`
  * sequenceNumber `integer`

### outgoingTransaction
* outgoingTransaction `object`
  * boxId `integer`
  * boxName `string`
  * id `integer`
  * profile [anonymizationProfile](#anonymizationprofile)
  * sentImageCount `integer`
  * status `string`
  * totalImageCount `integer`
  * updated `integer`

### outgoingTransactionImage
* outgoingTransactionImage `object`
  * image [outgoingImage](#outgoingimage)
  * transaction [outgoingTransaction](#outgoingtransaction)

### patient
* patient `object`
  * id `integer`
  * patientBirthDate [dicomPropertyValue](#dicompropertyvalue)
  * patientID [dicomPropertyValue](#dicompropertyvalue)
  * patientName [dicomPropertyValue](#dicompropertyvalue)
  * patientSex [dicomPropertyValue](#dicompropertyvalue)

### query
* query `object`
  * count **required** `integer`
  * filters [queryFilters](#queryfilters)
  * order [queryOrder](#queryorder)
  * queryProperties **required** `array`
    * items [queryProperty](#queryproperty)
  * startIndex **required** `integer`

### queryFilters
* queryFilters `object`
  * seriesTagIds `array`
    * items `integer`
  * seriesTypeIds `array`
    * items `integer`
  * sourceRefs `array`
    * items [sourceRef](#sourceref)

### queryOrder
* queryOrder `object`
  * orderAscending `boolean`
  * orderBy `string`

### queryProperty
* queryProperty `object`
  * operator `string`
  * propertyName `string`
  * propertyValue `string`

### remoteBox
* remoteBox `object`
  * baseUrl `string`
  * defaultProfile [anonymizationProfile](#anonymizationprofile)
  * name `string`

### remoteBoxConnectionData
* remoteBoxConnectionData `object`
  * defaultProfile [anonymizationProfile](#anonymizationprofile)
  * name `string`

### scp
* scp `object`
  * aeTitle `string`
  * id `integer`
  * name `string`
  * port `integer`

### scu
* scu `object`
  * aeTitle `string`
  * host `string`
  * id `integer`
  * name `string`
  * port `integer`

### series
* series `object`
  * bodyPartExamined [dicomPropertyValue](#dicompropertyvalue)
  * frameOfReferenceUID [dicomPropertyValue](#dicompropertyvalue)
  * id `integer`
  * manufacturer [dicomPropertyValue](#dicompropertyvalue)
  * modality [dicomPropertyValue](#dicompropertyvalue)
  * protocolName [dicomPropertyValue](#dicompropertyvalue)
  * seriesDate [dicomPropertyValue](#dicompropertyvalue)
  * seriesDescription [dicomPropertyValue](#dicompropertyvalue)
  * seriesInstanceUID [dicomPropertyValue](#dicompropertyvalue)
  * stationName [dicomPropertyValue](#dicompropertyvalue)
  * studyId `integer`

### seriesidseriestype
* seriesidseriestype `object`
  * seriesid `integer`
  * seriestype [seriestype](#seriestype)

### seriesidseriestypesresult
* seriesidseriestypesresult `object`
  * seriesidseriestypes `array`
    * items [seriesidseriestype](#seriesidseriestype)

### seriestag
* seriestag `object`
  * id `integer`
  * name `string`

### seriestype
* seriestype `object`
  * id `integer`
  * name `string`

### seriestyperule
* seriestyperule `object`
  * id `integer`
  * seriesTypeId `integer`

### seriestyperuleattribute
* seriestyperuleattribute `object`
  * element **required** `integer`
  * group **required** `integer`
  * id **required** `integer`
  * path `string`
  * seriesTypeRuleId **required** `integer`
  * value **required** `string`

### seriestypeupdatestatus
* seriestypeupdatestatus `object`
  * running **required** `boolean`

### source
* source `object`
  * sourceId `integer`
  * sourceName `string`
  * sourceType `string`

### sourceRef
* sourceRef `object`
  * sourceId `integer`
  * sourceType `string`

### sourceTagFilter
* sourceTagFilter `object`
  * id `integer`
  * sourceId `integer`
  * sourceType `string`
  * tagFilterId `integer`

### study
* study `object`
  * accessionNumber [dicomPropertyValue](#dicompropertyvalue)
  * id `integer`
  * patientAge [dicomPropertyValue](#dicompropertyvalue)
  * patientId `integer`
  * studyDate [dicomPropertyValue](#dicompropertyvalue)
  * studyDescription [dicomPropertyValue](#dicompropertyvalue)
  * studyID [dicomPropertyValue](#dicompropertyvalue)
  * studyInstanceUID [dicomPropertyValue](#dicompropertyvalue)

### tagMapping
* tagMapping `object`
  * tagPath [tagPathTag](#tagpathtag)
  * value `string`

### tagPathTag
* tagPathTag `object`
  * previous [tagPathTrunk](#tagpathtrunk)
  * tag `integer`

### tagPathTrunk
* tagPathTrunk `object`
  * item `string`
  * previous [tagPathTrunk](#tagpathtrunk)
  * tag `integer`

### tagValue
* tagValue `object`
  * tagPath [tagPathTag](#tagpathtag)
  * value `string`

### user
* user `object`
  * hashedPassword `string`
  * id **required** `integer`
  * role **required** `string`
  * user **required** `string`

### userInfo
* userInfo `object`
  * id `integer`
  * role `string`
  * user `string`

### userPass
* userPass `object`
  * pass `string`
  * user `string`

### watchedDirectory
* watchedDirectory `object`
  * id `integer`
  * path `string`


