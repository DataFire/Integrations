# @datafire/wealthport

Client library for Wealthport

## Installation and Usage
```bash
npm install --save datafire @datafire/wealthport
```

```js
let datafire = require('datafire');
let wealthport = require('@datafire/wealthport').create({
  Using HTTP Header: "",
  Using URL Query Parameter: "",
});

wealthport.createSource({}).then(data => {
  console.log(data);
})
```

## Description
Wealthport provides a simple, lightweight and open Web API based on the Open API 2.0 standard (<a href="https://www.openapis.org" target="_blank">https://www.openapis.org</a>). Our APIs offer a variety of operations related to managing Sources, Folders, Orders and Recipes. There are operations to submit and track Jobs, upload and download data files and many more.

## Actions
### retrieveFolders
Retrieves all Folders in the Data Inventory.


```js
wealthport.retrieveFolders(null, context)
```

#### Parameters
*This action has no parameters*

### createFolder
Creates the specified Folder in the Data Inventory.


```js
wealthport.createFolder({}, context)
```

#### Parameters
* body (object) - Represents a folder to be created or updated.

### deleteFolder
Deletes the specified Folder and all contained Sources from the Data Inventory.


```js
wealthport.deleteFolder({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - Folder ID of the Folder to delete, including any Sources contained

### retrieveFolder
Retrieves the specified Folder.


```js
wealthport.retrieveFolder({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - Folder ID of the Folder to retrieve

### updateFolder
Updates the specified Folder.


```js
wealthport.updateFolder({
  "id": ""
}, context)
```

#### Parameters
* body (object) - Represents a folder to be created or updated.
* id (string) **required** - Folder ID of the Folder to update

### deleteFolderSources
Deletes all Sources in the specified Folder.


```js
wealthport.deleteFolderSources({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - Folder ID of the Folder to delete all Sources from

### retrieveFolderSources
Retrieves all Sources of the specified Folder.


```js
wealthport.retrieveFolderSources({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - Folder ID of the Folder to retrieve its Sources from

### getResult
Returns the result of a finished Job.


```js
wealthport.getResult({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - Job ID of the job to retrieve its result

### getStatus
Retrieves the status of a Job.


```js
wealthport.getStatus({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - Job ID of the job to retrieve its status

### retrieveOrders
Retrieves all previously submitted Orders.


```js
wealthport.retrieveOrders(null, context)
```

#### Parameters
*This action has no parameters*

### createOrder
Creates a new Order to be submitted.<p>Orders reference one or more Sources, e.g. uploaded files, as well as one or more Folders (which again can contain Sources).The Recipe describes what to do with the referenced sources and where to publish the processing result to.</p>


```js
wealthport.createOrder({}, context)
```

#### Parameters
* body (object) - Represents an order to be created or updated.

### deleteOrder
Deletes the specified Order.


```js
wealthport.deleteOrder({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - Order ID of the order to delete

### retrieveOrder
Retrieves the specified Order.


```js
wealthport.retrieveOrder({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - Order ID of the order to retrieve

### updateOrder
Updates the specified Order.


```js
wealthport.updateOrder({
  "id": ""
}, context)
```

#### Parameters
* body (object) - Represents an order to be created or updated.
* id (string) **required** - Order ID of the order to update

### submitOrder
Submits the specified Order for processing and launches a corresponding job.


```js
wealthport.submitOrder({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - Order ID of the order to submit for processing

### retrieveRecipes
Retrieves all available Recipes.


```js
wealthport.retrieveRecipes(null, context)
```

#### Parameters
*This action has no parameters*

### retrieveRecipe
Retrieves the specified Recipe.


```js
wealthport.retrieveRecipe({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - Recipe ID of the recipe to retrieve

### retrieveInstructions
Retrieves the instructions of the specified Recipe.


```js
wealthport.retrieveInstructions({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - Recipe ID of the recipe whose instructions to retrieve

### updateInstructions
Updates the instructions of the specified Recipe.


```js
wealthport.updateInstructions({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - Recipe ID of the recipe whose instructions to update
* body (string)

### retrieveSources
Retrieves all Sources stored in the Data Inventory.


```js
wealthport.retrieveSources(null, context)
```

#### Parameters
*This action has no parameters*

### createSource
Creates the specified Source.<p>Sources are either uploaded files or a reference to a database. They are referenced in orders to specify which data needs processing.</p><p>Most clients should probably use the Upload File API which implicitly creates a new source on successful file upload.</p>


```js
wealthport.createSource({}, context)
```

#### Parameters
* body (object) - Represents a source to be created or updated.

### getUploadUrl
Initiates a file upload and returns the URL where to upload the file to.<p>Calling this API generates a secure, unique and time-restricted URL where the file can be uploaded to. The URL is available in the <pre>Location</pre> HTTP header of the response. The temporal validity of the URL is available in the <pre>Cache-Control</pre> HTTP header of the response.Clients may perform a <pre>HTTP PUT</pre> request on the URL to upload the file using a form where a file <pre>sample.csv</pre> is passed as property <pre>file=sample.csv</pre>. For security reasons, clients must pass all HTTP headers as returned by the <pre>X-WP-Upload-Headers</pre> in the response, together with their values. This procedure ensures a secure, encrypted file upload.</p><p>Note that calling this API automatically generates a Source, there is no need to call the Create Source API.</p>


```js
wealthport.getUploadUrl({
  "name": ""
}, context)
```

#### Parameters
* name (string) **required** - Name of the source to create. The name must correspond to the exact file name of the file being uploaded.
* source (string) - Existing source ID to create a new version from
* folder (string) - Folder ID where to upload source to
* contentType (string) - MIME type of the source file
* encoding (string) - Encoding of the source file

### deleteSource
Deletes the specified Source.


```js
wealthport.deleteSource({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - Source ID of the Source to delete

### retrieveSource
Retrieves the specified Source.


```js
wealthport.retrieveSource({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - Source ID of the source to retrieve

### updateSource
Updates the specified Source.


```js
wealthport.updateSource({
  "id": ""
}, context)
```

#### Parameters
* body (object) - Represents a source to be created or updated.
* id (string) **required** - Source ID of Source to update

### getDownloadUrl
Initiates a file download and returns the URL where to download the file from.<p>Calling this API generates a secure, unique and time-restricted URL where the file can be downloaded from. The URL is available in the <pre>Location</pre> HTTP header of the response. The time restriction of the URL is availablein the <pre>Cache-Control</pre> HTTP header of the response.Clients may perform a <pre>HTTP GET</pre> request on the URL to download the file.</p>


```js
wealthport.getDownloadUrl({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - Source ID of file to download

