# @datafire/wealthport
Wealthport provides a simple, lightweight and open Web API based on the Open API 2.0 standard (<a href="https://www.openapis.org" target="_blank">https://www.openapis.org</a>). Our APIs offer a variety of operations related to managing Sources, Folders, Orders and Recipes. There are operations to submit and track Jobs, upload and download data files and many more.

## Operation: retrieveFolders
Retrieves all Folders in the Data Inventory.

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/Existing_Folder"
  },
  "type": "array"
}
```
## Operation: createFolder
Creates the specified Folder in the Data Inventory.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "body": {
      "$ref": "#/definitions/Folder_Request"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "format": "url",
  "type": "string"
}
```
## Operation: deleteFolder
Deletes the specified Folder and all contained Sources from the Data Inventory.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "Folder ID of the Folder to delete, including any Sources contained"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: retrieveFolder
Retrieves the specified Folder.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "Folder ID of the Folder to retrieve"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Existing_Folder"
}
```
## Operation: updateFolder
Updates the specified Folder.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/Folder_Request"
    },
    "id": {
      "type": "string",
      "description": "Folder ID of the Folder to update"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: deleteFolderSources
Deletes all Sources in the specified Folder.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "Folder ID of the Folder to delete all Sources from"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: retrieveFolderSources
Retrieves all Sources of the specified Folder.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "Folder ID of the Folder to retrieve its Sources from"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Existing_Source"
}
```
## Operation: getResult
Returns the result of a finished Job.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "Job ID of the job to retrieve its result"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{
  "type": "string"
}
```
## Operation: getStatus
Retrieves the status of a Job.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "Job ID of the job to retrieve its status"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{
  "type": "string"
}
```
## Operation: retrieveOrders
Retrieves all previously submitted Orders.

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/Existing_Order"
  },
  "type": "array"
}
```
## Operation: createOrder
Creates a new Order to be submitted.<p>Orders reference one or more Sources, e.g. uploaded files, as well as one or more Folders (which again can contain Sources).The Recipe describes what to do with the referenced sources and where to publish the processing result to.</p>

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "body": {
      "$ref": "#/definitions/Order_Request"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "format": "url",
  "type": "string"
}
```
## Operation: deleteOrder
Deletes the specified Order.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "Order ID of the order to delete"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: retrieveOrder
Retrieves the specified Order.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "Order ID of the order to retrieve"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Existing_Order"
}
```
## Operation: updateOrder
Updates the specified Order.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/Order_Request"
    },
    "id": {
      "type": "string",
      "description": "Order ID of the order to update"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: submitOrder
Submits the specified Order for processing and launches a corresponding job.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "Order ID of the order to submit for processing"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: retrieveRecipes
Retrieves all available Recipes.

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/Existing_Recipe"
  },
  "type": "array"
}
```
## Operation: retrieveRecipe
Retrieves the specified Recipe.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "Recipe ID of the recipe to retrieve"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Existing_Recipe"
}
```
## Operation: retrieveInstructions
Retrieves the instructions of the specified Recipe.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "Recipe ID of the recipe whose instructions to retrieve"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{
  "type": "string"
}
```
## Operation: updateInstructions
Updates the instructions of the specified Recipe.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "Recipe ID of the recipe whose instructions to update"
    },
    "body": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: retrieveSources
Retrieves all Sources stored in the Data Inventory.

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/Existing_Source"
  },
  "type": "array"
}
```
## Operation: createSource
Creates the specified Source.<p>Sources are either uploaded files or a reference to a database. They are referenced in orders to specify which data needs processing.</p><p>Most clients should probably use the Upload File API which implicitly creates a new source on successful file upload.</p>

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "body": {
      "$ref": "#/definitions/Source_Request"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "format": "url",
  "type": "string"
}
```
## Operation: getUploadUrl
Initiates a file upload and returns the URL where to upload the file to.<p>Calling this API generates a secure, unique and time-restricted URL where the file can be uploaded to. The URL is available in the <pre>Location</pre> HTTP header of the response. The temporal validity of the URL is available in the <pre>Cache-Control</pre> HTTP header of the response.Clients may perform a <pre>HTTP PUT</pre> request on the URL to upload the file using a form where a file <pre>sample.csv</pre> is passed as property <pre>file=sample.csv</pre>. For security reasons, clients must pass all HTTP headers as returned by the <pre>X-WP-Upload-Headers</pre> in the response, together with their values. This procedure ensures a secure, encrypted file upload.</p><p>Note that calling this API automatically generates a Source, there is no need to call the Create Source API.</p>

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "description": "Name of the source to create. The name must correspond to the exact file name of the file being uploaded."
    },
    "source": {
      "type": "string",
      "description": "Existing source ID to create a new version from"
    },
    "folder": {
      "type": "string",
      "description": "Folder ID where to upload source to"
    },
    "contentType": {
      "type": "string",
      "description": "MIME type of the source file"
    },
    "encoding": {
      "type": "string",
      "description": "Encoding of the source file"
    }
  },
  "additionalProperties": false,
  "required": [
    "name"
  ]
}
```
### Output Schema
```json
{
  "type": "string"
}
```
## Operation: deleteSource
Deletes the specified Source.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "Source ID of the Source to delete"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: retrieveSource
Retrieves the specified Source.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "Source ID of the source to retrieve"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Existing_Source"
}
```
## Operation: updateSource
Updates the specified Source.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/Source_Request"
    },
    "id": {
      "type": "string",
      "description": "Source ID of Source to update"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getDownloadUrl
Initiates a file download and returns the URL where to download the file from.<p>Calling this API generates a secure, unique and time-restricted URL where the file can be downloaded from. The URL is available in the <pre>Location</pre> HTTP header of the response. The time restriction of the URL is availablein the <pre>Cache-Control</pre> HTTP header of the response.Clients may perform a <pre>HTTP GET</pre> request on the URL to download the file.</p>

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "Source ID of file to download"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{
  "type": "string"
}
```
