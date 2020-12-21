# @datafire/logoraisr

Client library for API docs | logoraisr.com

## Installation and Usage
```bash
npm install --save @datafire/logoraisr
```
```js
let logoraisr = require('@datafire/logoraisr').create({
  Token: ""
});

.then(data => {
  console.log(data);
});
```

## Description

<p style="font-size:110%;">Dig into our logoraisr API reference documentation. We also offer an OpenAPI specification to allow easy integration into your systems. You can download the json file by clicking on the download button.<p><br><p style="font-size:110%; font-weight:bold">OpenAPI 2.0 Validation Status</p><img src="https://online.swagger.io/validator?url=https://docs.logoraisr.com/">

## Actions

### previews_read
This GET-Method returns the URL where the preview image of uploaded file can downloaded from.


```js
logoraisr.previews_read({
  "file_id": ""
}, context)
```

#### Input
* input `object`
  * file_id **required** `string`

#### Output
* output [PreviewResponse](#previewresponse)

### processes_list
This GET-Method lists all on logoraisr available processes.


```js
logoraisr.processes_list(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [Process](#process)

### projects_list
This GET-Method lists the user's projects.


```js
logoraisr.projects_list(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [Project](#project)

### projects_create
This POST-Method creates a new project.


```js
logoraisr.projects_create({
  "body": {
    "file_id": "",
    "project_title": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** [ProjectRequest](#projectrequest)

#### Output
* output [ProjectResponse](#projectresponse)

### projects_read
This GET-Method returns a specific project.


```js
logoraisr.projects_read({
  "project_number": ""
}, context)
```

#### Input
* input `object`
  * project_number **required** `string`

#### Output
* output [Project](#project)

### reports_list
This GET method lists the user's reports.


```js
logoraisr.reports_list(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [Report](#report)

### reports_create
This POST-Method creates a new report.


```js
logoraisr.reports_create({
  "body": {
    "process": "",
    "file_id": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** [ReportRequest](#reportrequest)

#### Output
* output [ReportResponse](#reportresponse)

### reports_read
This GET-Method returns the details of a specific report.


```js
logoraisr.reports_read({
  "report_number": ""
}, context)
```

#### Input
* input `object`
  * report_number **required** `string`

#### Output
* output [Report](#report)

### results_read
This GET-Method returns the URL where the result can downloaded from.


```js
logoraisr.results_read({
  "result_file_id": ""
}, context)
```

#### Input
* input `object`
  * result_file_id **required** `string`

#### Output
* output [ResultResponse](#resultresponse)

### uploads_create
This POST-Method uploads a new file on the server.


```js
logoraisr.uploads_create({
  "file": ""
}, context)
```

#### Input
* input `object`
  * file **required** `string`: File which should be uploaded. Supported file types are: JPEG and PNG

#### Output
* output [FileResponse](#fileresponse)



## Definitions

### Color
* Color `object`
  * blue `integer`: RGB-Blue color value
  * green `integer`: RGB-Green color value.
  * hex `string`: Hex-label of this color.
  * number_of_pixel `integer`: Number of pixels that holds this color.
  * percentage `string`: Percentage of pixels that holds this color.
  * red `integer`: RGB-Red color value.

### FileResponse
* FileResponse `object`
  * file_id `string`: Returns the file_id. To apply processes to the uploaded file, this file_id must be referenced in the API-calls.

### PreviewResponse
* PreviewResponse `object`
  * preview_img_url `string`: Url from which the preview file can be downloaded.

### Process
* Process `object`
  * crop `string`: Crops the image according to the specified mechanism. If you specify the size "WidthexHeight", the image will be cropped centered. If coordinates "x1,y1,x2,y2" are given, the image is cropped according to the coordinates. The image will be cropped to the size of the stories if "faces" are specified as. Example Centered: "crop": "200x300". Example Region: "crop": "200,300,150,300". Example Faces: "crop": "faces".
  * flip `boolean`: Flips the image around the horizontal axis, from top to bottom. Example: "flip": true
  * mirror `boolean`: Mirrors the image around the vertical axis, i.e. from right to left. Example: "mirror": true
  * processing_algorithm **required** `string`: Schlüssel welcher Verarbeitungs-Algorithmus angewendet wird. Zur Auswahl stehen "logo-to-vector", "logo-super-resolution", "logo-segmentation" und "image-processing".
  * resize `string`: Changes the size of the image according to the specified size. Example: "resize": "200x300".
  * rotate `integer`: Rotates the image around the center according to the specified degree. Example: "rotate": 90

### Project
* Project `object`
  * created `string`: The Date when the project was created.
  * file_id `string`: Id of the file on which the process was applied.
  * id `integer`: Id of the created project.
  * paypal_payment_id `string`: Id of the paypal payment.
  * process [Process](#process)
  * process_id **required** `string`: Process which should applied. Processes are "color-classification".
  * project_number `integer`: Number of the created project.
  * project_title `string`: Name of the project with which it was saved.
  * result_file_id `string`: Id of the result file which the process created.

### ProjectRequest
* ProjectRequest `object`
  * file_id **required** `string`: Id of the file on which the process is to be applied.
  * process [Process](#process)
  * project_title **required** `string`: Name of the project with which it is saved.

### ProjectResponse
* ProjectResponse `object`
  * project_id `integer`: Id of the created project.
  * project_number `integer`: Number of the created project.
  * result_file_id `string`: Id of the result_file. This id must be specified to create the result_file_url.

### Report
* Report `object`
  * created `string`: The Date when the report was created.
  * file_id **required** `string`: Id of the file on which the report was applied.
  * process_id **required** `integer`: Process_id of the process which was applied. Processes are "color-classification".
  * report_number **required** `integer`: Number of the created report.
  * result [Result](#result)
  * result_id **required** `integer`: Result_id of the result which was created.

### ReportRequest
* ReportRequest `object`
  * file_id **required** `string`: Id of the file on which the process is to be applied.
  * process **required** `string`: Process which should applied. Processes are "color-classification".

### ReportResponse
* ReportResponse `object`
  * created `string`: The Date when the project was created.
  * file_id `string`: Id of the file on which the process was applied.
  * processing_algorithm `string`: Process which was applied. Processes are "color-classification".
  * report_number `integer`: Number of the report which was created.
  * result [Result](#result)

### Result
* Result `object`
  * colors `array`
    * items [Color](#color)
  * height `integer`: Height of image.
  * number_of_pixel_in_image `integer`: Number of pixel in image.
  * width `integer`: Width of image.

### ResultResponse
* ResultResponse `object`
  * result_file_url `string`: Url from which the result file can be downloaded.


