# @datafire/prss

Client library for MetaPub

## Installation and Usage
```bash
npm install --save @datafire/prss
```
```js
let prss = require('@datafire/prss').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

.then(data => {
  console.log(data);
});
```

## Description

MetaPub collects, normalizes and distributes publicly available program, episode, and piece metadata through the public radio system. Backed by ContentDepot and its data model, MetaPub allows producers to supply metadata through various methods:

1. MetaPub Agents that collect producer metadata by "crawling" existing public feeds (e.g. C24, BBC) or the producer's production system (e.g. ATC, ME, TED Radio Hour).
2. Manually enter metadata in the ContentDepot Portal on each program and episode.
3. Publish/push the metadata to the MetaPub upload API and execute an ingest job.

MetaPub then distributes this data to stations through an electronic program guide (EPG model)
for display on various listener devices such as smart phones, tablets, web streams, HD radios, RDBS enabled FM radios, and more. The EPG format is based on the [RadioDNS specifications](https://radiodns.org/developers/documentation/).

## RadioDNS and MetaPub

The RadioDNS Service and Programme Information Specification ([TS 102 818 v3.1.1](http://www.etsi.org/deliver/etsi_ts/102800_102899/102818/03.01.01_60/ts_102818v030101p.pdf)) defines three primary documents: Service Information, Program Information, and Group Information. These documents, along with the core RadioDNS Hybrid Lookup for Radio Services Specification ([TS 103 270 v1.2.1](http://www.etsi.org/deliver/etsi_ts%5C103200_103299%5C103270%5C01.02.01_60%5Cts_103270v010201p.pdf)) define a system where an end listener device can dynamically discover program metadata and fetch the metadata via Internet Protocol (IP) requests. MetaPub's use of RadioDNS differs slightly in that MetaPub (a.k.a PRSS) acts as the "service provider" while the stations and related middleware act as the end devices. While this is not the primary use case of RadioDNS, the flexibility in the specification, service definitions, and DNS resolution allows this model to be easily represented.

This documentation gives a high level overview of how the RadioDNS specifications will be used by MetaPub, however it is strongly recommended that the related RadioDNS specifications be read for implementation details, definitions, and required XML schemas.

## ContentDepot Drive

ContentDepot Drive (CD Drive) provides a private, per customer file storage solution similar to other cloud storage solutions such as Google Drive, Box, and Dropbox. The CD Drive is used to stage content uploads such as metadata files, images, or segment audio before associating the content with specific programs or episodes.

CD Drive content can be referenced using a URI by some operations such as synchronizing metadata. There are two possible CD Drive URI formats supported: ID and hierarchical path. The ID reference takes the form ```cddrive:id:{value}``` where value is the integer ID of the file or folder being referenced. The hierarchical path reference takes the form ```cddrive://{path}``` where path is the full, UNIX style path to the file or folder starting with '/'. For example, two CD Drive URIs pointing to the same file may be ```cddrive:id:12345``` and ```cddrive:///show1/episode2/metadata.xml```. More information about URIs can be found at [Wikipedia](https://en.wikipedia.org/wiki/Uniform_Resource_Identifier).

## Authentication

The API currently uses OAuth 2.0.  Some operations require specific scopes to limit clients while the ContentDepot backend may also enforce existing user specific permissions.


## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
prss.oauthCallback({
  "code": ""
}, context)
```

#### Input
* input `object`
  * code **required** `string`

#### Output
* output `object`
  * access_token `string`
  * refresh_token `string`
  * token_type `string`
  * scope `string`
  * expiration `string`

### oauthRefresh
Exchange a refresh_token for an access_token


```js
prss.oauthRefresh(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * access_token `string`
  * refresh_token `string`
  * token_type `string`
  * scope `string`
  * expiration `string`

### api.v2.cddrive.files.content.post
Upload a file to the customer's private CD Drive.


```js
prss.api.v2.cddrive.files.content.post({
  "file": "",
  "name": "",
  "parent-id": 0
}, context)
```

#### Input
* input `object`
  * Content-MD5 `string`: If present, the MD5 will be compared against the file received as a message integrity check.
  * file **required** `string`, `object`: The file content being uploaded.
    * content `string`
    * encoding `string` (values: ascii, utf8, utf16le, base64, binary, hex)
    * contentType `string`
    * filename `string`
  * name **required** `string`: The name of the file, including extension.
  * parent-id **required** `integer`: The ID of the parent folder or 0 for the root folder.

#### Output
* output [CDDriveFile](#cddrivefile)

### api.v2.cddrive.files.file_id.delete
Delete a file from the customer's private CD Drive.


```js
prss.api.v2.cddrive.files.file_id.delete({
  "file-id": 0
}, context)
```

#### Input
* input `object`
  * file-id **required** `integer`: The ID of the file to access.

#### Output
*Output schema unknown*

### api.v2.cddrive.files.file_id.get
Get the information about a file in the customer's private CD Drive.


```js
prss.api.v2.cddrive.files.file_id.get({
  "file-id": 0
}, context)
```

#### Input
* input `object`
  * file-id **required** `integer`: The ID of the file to access.

#### Output
* output [CDDriveFile](#cddrivefile)

### api.v2.cddrive.files.file_id.content.get
Download a file from the customer's private CD Drive.


```js
prss.api.v2.cddrive.files.file_id.content.get({
  "file-id": 0
}, context)
```

#### Input
* input `object`
  * Range `string`: Can be used to limit the range of bytes retrieved. Only a single byte range in the format ```bytes={start-range}-{end-range}``` is supported.
  * file-id **required** `integer`: The ID of the file to download.

#### Output
*Output schema unknown*

### api.v2.cddrive.folders.post
Create a new folder in the customer's private CD Drive.


```js
prss.api.v2.cddrive.folders.post({
  "name": "",
  "parent-id": 0
}, context)
```

#### Input
* input `object`
  * name **required** `string`: the name of the folder
  * parent-id **required** `integer`: The ID of the parent folder or 0 for the root folder.

#### Output
* output [CDDriveFolder](#cddrivefolder)

### api.v2.cddrive.folders.folder_id.delete
Delete a file from the customer's private CD Drive.


```js
prss.api.v2.cddrive.folders.folder_id.delete({
  "folder-id": 0
}, context)
```

#### Input
* input `object`
  * recursive `boolean`: Flag to indicate if the folder should be deleted if it has items inside of it.
  * folder-id **required** `integer`: The ID of the folder to get.

#### Output
*Output schema unknown*

### api.v2.cddrive.folders.folder_id.get
Get the information about a folder in the customer's private CD Drive.


```js
prss.api.v2.cddrive.folders.folder_id.get({
  "folder-id": 0
}, context)
```

#### Input
* input `object`
  * folder-id **required** `integer`: The ID of the folder to get.

#### Output
* output [CDDriveFolder](#cddrivefolder)

### api.v2.cddrive.folders.folder_id.items.get
Get the information about a folder in the customer's private CD Drive.


```js
prss.api.v2.cddrive.folders.folder_id.items.get({
  "folder-id": 0
}, context)
```

#### Input
* input `object`
  * offset `integer`: The offset into the items to begin the response.
  * limit `integer`: The maximum number of items to return in the response.
  * folder-id **required** `integer`: The ID of the folder to get.

#### Output
* output `object`
  * entries `array`: The item instances.
    * items [CDDriveItem](#cddriveitem)
  * limit `integer`: The maximum number of items to return.
  * offset `integer`: The start offset into the items.
  * totalCount `integer`: The total number of entries available.

### api.v2.metapub.program_information.batch.post
Create a batch to process the metadata of one or more electronic program guide (EPG) programs using metadata that has been uploaded to the customer's CD Drive. If multiple EPG programs are present in the metadata, they will all be updated, however updates across programs are not atomic. Note that an EPG program maps to the ContentDepot concept of an episode which is also known as a "program instance".

A batch operation must be explicitly created rather than the server attempting to detect new metadata in order to allow for all the content to be uploaded including any supporting content like images. A batch operation is accepted and queued for asynchronous processing at a later time. A client can poll the batch periodically to determine when it completes and the resulting state.



```js
prss.api.v2.metapub.program_information.batch.post({}, context)
```

#### Input
* input `object`
  * batch `object`: The batch operation definition.
    * format **required** `string` (values: radiodns): The format of the metadata file defining the create or update actions to be performed on one or more EPG programs. For more information on how RadioDNS EPG maps to ContentDepot <a href="/api/epg-cd-mapping.html">click here </a>
    * name `string`: An optional human readable name for the batch.
    * program `object`: The program information to associate the ingested metadata with. This is only required if the metadata format doesn't provide the program title and air date information directly.
      * airDate **required** `string`
      * title **required** `string`
    * uri **required** `string`: The URI to the metadata file. Currently only the ```cddrive``` scheme is supported.

#### Output
* output [ProgramInformationBatch](#programinformationbatch)

### api.v2.metapub.program_information.batch.batch_id.get
Gets the batch information which can be used to check the status of the operation or retrieve more details if the batch fails.


```js
prss.api.v2.metapub.program_information.batch.batch_id.get({
  "batch-id": 0
}, context)
```

#### Input
* input `object`
  * batch-id **required** `integer`

#### Output
* output [ProgramInformationBatch](#programinformationbatch)

### radiodns.spi.3.1.GI.xml.get
The group information (GI) document allows programs to be put into groups such as serials, series, shows, or general themes and provide additional metadata for that group such as a description, links, and a logo. A program in the guide can be linked to its group using the "memberOf" field to allow clients to easily link programs together for a given Content Depot Program/Show in the EPG. GI will be published for all Content Depot programs that have the "publish metadata" option enabled. By using the group information, clients have the ability to access a single list of all metadata supported program titles, links, images, and descriptions. This information can be used to assist a station when setting up a schedule or it can be used in the end user metadata to provide additional information about the content such as displaying "other episodes from this program" or displaying the group, program, and program event images.

Currently all programs with "publish metadata" enabled will be included in the group information even if they are not active in the program guide. This may change in the future if the number of programs grows.

Note that while the location of the GI document isn't expected to change change in the near future, as per the RadioDNS specification the authoritative link to the document is defined in the SI document with the mime value ```application/xml+gi```.

The response will use standard HTTP cache-control headers to indicate when the document should be refreshed as well as an ETag to allow for lightweight change detection.



```js
prss.radiodns.spi.3.1.GI.xml.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `string`

### radiodns.spi.3.1.SI.xml.get
The service information (SI) document holds a definition of services provided by the service provider (e.g. MetaPub), including any relevant metadata and bearer details, such as:

* Names
* Descriptions
* Logos
* Bearers (broadcast and IP)

MetaPub will define an SI document that lists the distribution services provided by PRSS including basic service metadata, logos, and bearers. The current design calls for two IP based bearers to be defined:

* Streams
    * Bearer ID: prss:streams
    * Service ID: streams
* Files
    * Bearer ID: prss:files
    * Service ID: files

It is possible that more than two services will be defined in the future depending on the content size per service and middleware use cases, however the RadioDNS specification supports the introduction and removal of services dynamically as needed.

Based on the RadioDNS specification (section 10.2.4), the SI document will be placed in a defined location on the service website. Using standard HTTP cache mechanisms, the SI document will only need to be fetched and process occasionally.

The response will use standard HTTP cache-control headers to indicate when the document should be refreshed as well as an ETag to allow for lightweight change detection.



```js
prss.radiodns.spi.3.1.SI.xml.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `string`

### radiodns.spi.3.1.id.fqdn.sid.date_PI.xml.get
The program information (PI) document holds the linear and the on-demand schedule of programs for a service over a 24 hour period. This information provides an electronic program guide (EPG) to clients that defines the program metadata such as:

*   Names
*   Descriptions
*   Logos
*   Links
*   Genres
*   Program Events (a.k.a. pieces)

Using the two services defined in the SI document, streams and files, MetaPub will produce two PI files daily, one for each service. Construction of the PI URL is detailed later in this document as well as the RadioDNS specification. Note that while the number of services defined isn't expected to change in the near future, as per the RadioDNS specification the authoritative list of services is defined in the SI document.

Each file will contain 24 hours of program guide information. The current day, the previous day, and the next day will contain detailed program event information (a.k.a. Content Depot pieces) while PI files outside of this range will only contain the program (a.k.a Content Depot episode) level information. This may change in the future with the use of an API key as defined by the RadioDNS specification to identify "trusted" clients. If metadata for any program in the guide(s) changes, the PI document will be regenerated. Using standard HTTP cache mechanisms, the PI document for the current day can be fetch frequently (e.g. every 5 minutes) to receive last minute changes while future and past days will only be fetched and processed occasionally (e.g. every two hours).

By obtaining the full 24 hour guide, clients such as middleware can build a local database/lookup table of program and program event information that allows for more specific program selection based on user configuration, automation events, and other possible inputs. In the event that MetaPub is unreachable for a short period of time, the client has the full guide to prevent any interruption to the on-air broadcast.

The EPG contains two types of programming, live and on-demand (a.k.a files). A "live with subsequent file (LWSF)" program may appear in both the streams and files services EPG data because it will both a live stream and an on-demand file. File programs with multi-day air windows will appear in the PI file on every day that the air window is open. That is, the EPG data for each day contains the information about programming available that day, even if the programming is also available on other days. The program ID can be used to resolve these duplicates down to a single instance when processing multiple services or multiple days of EPG data.

The response will use standard HTTP cache-control headers to indicate when the document should be refreshed as well as an ETag to allow for lightweight change detection.



```js
prss.radiodns.spi.3.1.id.fqdn.sid.date_PI.xml.get({
  "fqdn": "",
  "sid": "",
  "date": "",
  "x-radiodnsspi-api-key": ""
}, context)
```

#### Input
* input `object`
  * fqdn **required** `string`: The fully qualified domain name for the environment where the service is running. The fqdn is defined in the ```radiodns``` element in the SI document in each Content Depot environment.
  * sid **required** `string`: One of the valid service ids defined in the SI document. For example, "files" or "streams".
  * date **required** `string`: The PI schedule date to retrieve in format yyyymmdd.
  * x-radiodnsspi-api-key **required** `string`: The API client Id you received. Contact help desk if you need one.

#### Output
* output `string`



## Definitions

### CDDriveFile
* CDDriveFile `object`: A file in the CD Drive that contains content.
  * createdDate **required** `string`: The date and time the file was created.
  * id **required** `integer`: The ID of the file.
  * lastModifiedDate **required** `string`: The date and time the file was last modified.
  * name **required** `string`: The name of the file including the extension.
  * parentId **required** `integer`: The ID of the parent folder or 0 for the root folder.
  * size `integer`: The size of the file in bytes.

### CDDriveFolder
* CDDriveFolder `object`: A folder in the CD Drive that can contain other items such as files or folders.
  * createdDate **required** `string`: The date and time the folder was created.
  * id **required** `integer`: The ID of the folder.
  * lastModifiedDate **required** `string`: The date and time the folder was last modified. This may only represent a modification to to the folder metadata itself, not to the contents of the folder.
  * name **required** `string`: The name of the folder.
  * parentId **required** `integer`: The ID of the parent folder or 0 for the root folder.

### CDDriveItem
* CDDriveItem `object`: A generic reference to an item in the CD Drive such as a file or folder.
  * id **required** `integer`
  * name **required** `string`
  * type **required** `string` (values: file, folder)

### ProgramInformationBatch
* ProgramInformationBatch `object`: An electronic program guide (EPG) batch operation to create or update metadata on one or more guide programs.
  * createdDate **required** `string`: The date and time the batch was created.
  * finishedDate `string`: The date and time the batch finished (either successful or failed).
  * format **required** `string` (values: radiodns): The format of the metadata file defining the create or update actions to be performed on one or more EPG programs.
  * id **required** `integer`: The ID of the batch.
  * message `string`: The human readable success or failure message.
  * name `string`: The optional name of the batch for human reference.
  * program `object`: The program information to associate the ingested metadata with. This is only required if the metadata format doesn't provide the program title and air date information directly. If this is specified, it will overrite the value specfified in the metadata file. If this is specified, the metadata file should only contain one program.
    * airDate **required** `string`: The airDate for the program in ISO 8601 format.
    * title **required** `string`: The title of the program.
  * status **required** `string` (values: queued, processing, failed, successful): The current processing status.
  * uri `string`: The URI to the metadata file defining the batch creates/updates.


