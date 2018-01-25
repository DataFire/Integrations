# @datafire/wealthport

Client library for Wealthport

## Installation and Usage
```bash
npm install --save @datafire/wealthport
```
```js
let wealthport = require('@datafire/wealthport').create({
  "Using HTTP Header": "",
  "Using URL Query Parameter": ""
});

wealthport.createSource({}).then(data => {
  console.log(data);
});
```

## Description

Wealthport provides a simple, lightweight and open Web API based on the Open API 2.0 standard (<a href="https://www.openapis.org" target="_blank">https://www.openapis.org</a>). Our APIs offer a variety of operations related to managing Sources, Folders, Orders and Recipes. There are operations to submit and track Jobs, upload and download data files and many more.

## Actions

### retrieveFolders
Retrieves all Folders in the Data Inventory.


```js
wealthport.retrieveFolders(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [Existing_Folder](#existing_folder)

### createFolder
Creates the specified Folder in the Data Inventory.


```js
wealthport.createFolder({}, context)
```

#### Input
* input `object`
  * body [Folder_Request](#folder_request)

#### Output
* output `string`

### deleteFolder
Deletes the specified Folder and all contained Sources from the Data Inventory.


```js
wealthport.deleteFolder({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Folder ID of the Folder to delete, including any Sources contained

#### Output
*Output schema unknown*

### retrieveFolder
Retrieves the specified Folder.


```js
wealthport.retrieveFolder({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Folder ID of the Folder to retrieve

#### Output
* output [Existing_Folder](#existing_folder)

### updateFolder
Updates the specified Folder.


```js
wealthport.updateFolder({
  "id": ""
}, context)
```

#### Input
* input `object`
  * body [Folder_Request](#folder_request)
  * id **required** `string`: Folder ID of the Folder to update

#### Output
*Output schema unknown*

### deleteFolderSources
Deletes all Sources in the specified Folder.


```js
wealthport.deleteFolderSources({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Folder ID of the Folder to delete all Sources from

#### Output
*Output schema unknown*

### retrieveFolderSources
Retrieves all Sources of the specified Folder.


```js
wealthport.retrieveFolderSources({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Folder ID of the Folder to retrieve its Sources from

#### Output
* output [Existing_Source](#existing_source)

### getResult
Returns the result of a finished Job.


```js
wealthport.getResult({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Job ID of the job to retrieve its result

#### Output
* output `string`

### getStatus
Retrieves the status of a Job.


```js
wealthport.getStatus({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Job ID of the job to retrieve its status

#### Output
* output `string`

### retrieveOrders
Retrieves all previously submitted Orders.


```js
wealthport.retrieveOrders(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [Existing_Order](#existing_order)

### createOrder
Creates a new Order to be submitted.<p>Orders reference one or more Sources, e.g. uploaded files, as well as one or more Folders (which again can contain Sources).The Recipe describes what to do with the referenced sources and where to publish the processing result to.</p>


```js
wealthport.createOrder({}, context)
```

#### Input
* input `object`
  * body [Order_Request](#order_request)

#### Output
* output `string`

### deleteOrder
Deletes the specified Order.


```js
wealthport.deleteOrder({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Order ID of the order to delete

#### Output
*Output schema unknown*

### retrieveOrder
Retrieves the specified Order.


```js
wealthport.retrieveOrder({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Order ID of the order to retrieve

#### Output
* output [Existing_Order](#existing_order)

### updateOrder
Updates the specified Order.


```js
wealthport.updateOrder({
  "id": ""
}, context)
```

#### Input
* input `object`
  * body [Order_Request](#order_request)
  * id **required** `string`: Order ID of the order to update

#### Output
*Output schema unknown*

### submitOrder
Submits the specified Order for processing and launches a corresponding job.


```js
wealthport.submitOrder({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Order ID of the order to submit for processing

#### Output
*Output schema unknown*

### retrieveRecipes
Retrieves all available Recipes.


```js
wealthport.retrieveRecipes(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [Existing_Recipe](#existing_recipe)

### retrieveRecipe
Retrieves the specified Recipe.


```js
wealthport.retrieveRecipe({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Recipe ID of the recipe to retrieve

#### Output
* output [Existing_Recipe](#existing_recipe)

### retrieveInstructions
Retrieves the instructions of the specified Recipe.


```js
wealthport.retrieveInstructions({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Recipe ID of the recipe whose instructions to retrieve

#### Output
* output `string`

### updateInstructions
Updates the instructions of the specified Recipe.


```js
wealthport.updateInstructions({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Recipe ID of the recipe whose instructions to update
  * body `string`

#### Output
*Output schema unknown*

### retrieveSources
Retrieves all Sources stored in the Data Inventory.


```js
wealthport.retrieveSources(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [Existing_Source](#existing_source)

### createSource
Creates the specified Source.<p>Sources are either uploaded files or a reference to a database. They are referenced in orders to specify which data needs processing.</p><p>Most clients should probably use the Upload File API which implicitly creates a new source on successful file upload.</p>


```js
wealthport.createSource({}, context)
```

#### Input
* input `object`
  * body [Source_Request](#source_request)

#### Output
* output `string`

### getUploadUrl
Initiates a file upload and returns the URL where to upload the file to.<p>Calling this API generates a secure, unique and time-restricted URL where the file can be uploaded to. The URL is available in the <pre>Location</pre> HTTP header of the response. The temporal validity of the URL is available in the <pre>Cache-Control</pre> HTTP header of the response.Clients may perform a <pre>HTTP PUT</pre> request on the URL to upload the file using a form where a file <pre>sample.csv</pre> is passed as property <pre>file=sample.csv</pre>. For security reasons, clients must pass all HTTP headers as returned by the <pre>X-WP-Upload-Headers</pre> in the response, together with their values. This procedure ensures a secure, encrypted file upload.</p><p>Note that calling this API automatically generates a Source, there is no need to call the Create Source API.</p>


```js
wealthport.getUploadUrl({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Name of the source to create. The name must correspond to the exact file name of the file being uploaded.
  * source `string`: Existing source ID to create a new version from
  * folder `string`: Folder ID where to upload source to
  * contentType `string`: MIME type of the source file
  * encoding `string`: Encoding of the source file

#### Output
* output `string`

### deleteSource
Deletes the specified Source.


```js
wealthport.deleteSource({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Source ID of the Source to delete

#### Output
*Output schema unknown*

### retrieveSource
Retrieves the specified Source.


```js
wealthport.retrieveSource({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Source ID of the source to retrieve

#### Output
* output [Existing_Source](#existing_source)

### updateSource
Updates the specified Source.


```js
wealthport.updateSource({
  "id": ""
}, context)
```

#### Input
* input `object`
  * body [Source_Request](#source_request)
  * id **required** `string`: Source ID of Source to update

#### Output
*Output schema unknown*

### getDownloadUrl
Initiates a file download and returns the URL where to download the file from.<p>Calling this API generates a secure, unique and time-restricted URL where the file can be downloaded from. The URL is available in the <pre>Location</pre> HTTP header of the response. The time restriction of the URL is availablein the <pre>Cache-Control</pre> HTTP header of the response.Clients may perform a <pre>HTTP GET</pre> request on the URL to download the file.</p>


```js
wealthport.getDownloadUrl({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Source ID of file to download

#### Output
* output `string`



## Definitions

### Archivable_Object
* Archivable_Object `object`
  * archived `boolean`
  * id **required** `string`

### Existing_Folder
* Existing_Folder `object`: Represents an existing folder.
  * bytes **required** `integer`: Size of the folder (in bytes)
  * created **required** `string`: ISO 8601 Date when he folder has been created
  * creator **required** `string`: User ID of the user who created the folder
  * id **required** `string`: Unique ID of the folder
  * name **required** `string`: Name of the folder

### Existing_Order
* Existing_Order `object`: Represents an existing order.
  * bytes **required** `integer`: Size of the order (in bytes)
  * created **required** `string`: ISO 8601 Date when the order has been created
  * creator **required** `string`: User ID of the user who created the order
  * folders `array`: Array of folder IDs to be referenced by the order
    * items `string`
  * id **required** `string`: Unique ID of the order
  * name **required** `string`: Name of the order
  * recipe `string`: Recipe to use when processing the order
  * sources `array`: Array of source IDs to be referenced by the order
    * items `string`

### Existing_Recipe
* Existing_Recipe `object`: Represents an existing recipe.
  * created **required** `string`: ISO 8601 Date when the recipe has been created
  * creator **required** `string`: User ID of the user who created the recipe
  * id **required** `string`: Unique ID of the recipe
  * name **required** `string`: Name of the recipe

### Existing_Source
* Existing_Source `object`: Represents an existing source.
  * bytes **required** `integer`: Size of the source (in bytes)
  * created **required** `string`: ISO 8601 Date when the source has been created
  * creator **required** `string`: User ID of the user that created the source
  * encoding `string`: Encoding of the source
  * folder `string`: Optional folder ID of the folder containing the source
  * folderName `string`
  * id **required** `string`: Unique ID of the source
  * mime **required** `string` (values: text/csv, text/tab-separated-values, text/x-bar-separated-values, text/x-semicolon-separated-values, application/x-ldjson, application/xml, application/vnd.ms-excel, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet): MIME type of the source
  * name **required** `string`: Name of the source

### Folder_Request
* Folder_Request `object`: Represents a folder to be created or updated.
  * name **required** `string`: Name of the folder

### Order_Request
* Order_Request `object`: Represents an order to be created or updated.
  * folders `array`: Array of folder IDs to be referenced by the order
    * items `string`
  * name **required** `string`: Name of the order
  * recipe `string`: Recipe to use when processing the order
  * sources `array`: Array of source IDs to be referenced by the order
    * items `string`

### Source_Request
* Source_Request `object`: Represents a source to be created or updated.
  * encoding `string`: Encoding of the source
  * folder `string`: Folder ID of the folder containing the source
  * mime **required** `string` (values: text/csv, text/tab-separated-values, text/x-bar-separated-values, text/x-semicolon-separated-values, application/x-ldjson, application/xml, application/vnd.ms-excel, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet): MIME type of the source
  * name **required** `string`: Name of the source


