# @datafire/browshot
Take screenshots of any website in real time

## Operation: GetAccountInfo
Get information about your account.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "details": {
      "type": "integer",
      "description": "level of information returned",
      "maximum": 3,
      "minimum": 1
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Account"
}
```
## Operation: CreateBatch
Get hundreds or thousands of screenshots from a text file. You can use this API call or the dashboard. Unlike the other API calls, you must issue a POST request with the Content-Type "multipart/form-data" in order to upload the text file. The text file must contain the list of URLs to request, 1 URL per line. Failed screenshots will be tried up to 3 times before giving up.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "instance_id": {
      "type": "integer",
      "description": "instance ID to use"
    },
    "file": {
      "type": "string",
      "description": "text file to use"
    },
    "size": {
      "type": "string",
      "description": "screenshots size - \"screen\" (default) or \"page\"",
      "enum": [
        "screen",
        "page"
      ]
    },
    "name": {
      "type": "string",
      "description": "name of the batch"
    },
    "width": {
      "type": "integer",
      "description": "thumbnail width.",
      "maximum": 2000,
      "minimum": 1
    },
    "height": {
      "type": "integer",
      "description": "thumbnail height",
      "maximum": 15000,
      "minimum": 1
    },
    "delay": {
      "type": "integer",
      "description": "number of seconds to wait after the page has loaded. This is used to let JavaScript run longer before taking the screenshot. Use delay=0 to take screenshots faster.",
      "maximum": 60,
      "minimum": 0
    },
    "flash_delay": {
      "type": "integer",
      "description": "number of seconds to wait after the page has loaded if Flash elements are present. Use flash_delay=0 to take screenshots faster.",
      "maximum": 30,
      "minimum": 0
    },
    "screen_width": {
      "type": "integer",
      "description": "width of the browser window. For desktop browsers only.",
      "maximum": 2000,
      "minimum": 1
    },
    "screen_height": {
      "type": "integer",
      "description": "height of the browser window. For desktop browsers only. (Note: full-page screenshots can have a height of up to 15,000px)",
      "maximum": 2000,
      "minimum": 1
    },
    "priority": {
      "type": "integer",
      "description": "assign priority to the screenshot (for private instances only)",
      "maximum": 3,
      "minimum": 1
    },
    "referer": {
      "type": "string",
      "description": "use a custom referrer header - paid screenshots only"
    },
    "post_data": {
      "type": "string",
      "description": "send a POST requests with post_data, useful for filling out forms - paid screenshots only"
    },
    "cookie": {
      "type": "string",
      "description": "set a cookie for the URL requested (see Custom POST Data, Referer and Cookie) Cookies should be separated by a ; - paid screenshots only"
    },
    "script": {
      "type": "string",
      "description": "URL of javascript file to execute after the page load event"
    },
    "details": {
      "type": "integer",
      "description": "level of information available with screenshot/info",
      "maximum": 3,
      "minimum": 1
    },
    "html": {
      "type": "integer",
      "description": "saves the HTML of the rendered page which can be retrieved by the API call screenshot/html. This feature costs *1 credit* per screenshot.",
      "maximum": 1,
      "minimum": 0
    },
    "max_wait": {
      "type": "integer",
      "description": "maximum number of seconds to wait before triggering the PageLoad event. Note that delay will still be used. (default: 0 = disabled)",
      "maximum": 60,
      "minimum": 0
    },
    "headers": {
      "type": "string",
      "description": "any custom HTTP headers. (Not supported with Internet Explorer)"
    },
    "format": {
      "type": "string",
      "description": "image as PNG or JPEG",
      "enum": [
        "png",
        "jpeg"
      ]
    },
    "hosting": {
      "type": "string",
      "description": "hosting option - s3 or browshot",
      "enum": [
        "s3"
      ]
    },
    "hosting_height": {
      "type": "integer",
      "description": "maximum height of the thumbnail to host",
      "maximum": 15000,
      "minimum": 1
    },
    "hosting_width": {
      "type": "integer",
      "description": "maximum height of the thumbnail to host",
      "maximum": 2000,
      "minimum": 1
    },
    "hosting_scale": {
      "type": "number",
      "format": "float",
      "description": "scale of the thumbnail to host"
    },
    "hosting_bucket": {
      "type": "string",
      "description": "S3 bucket to upload the screenshot or thumbnail (required for S3)"
    },
    "hosting_file": {
      "type": "string",
      "description": "file name to use (for S3 only)"
    },
    "hosting_headers": {
      "type": "string",
      "description": "list of headers to add to the S3 object (for S3 only)"
    }
  },
  "additionalProperties": false,
  "required": [
    "instance_id"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/Batch"
  },
  "type": "array"
}
```
## Operation: GetBatchInfo
Get the status of a batch requested through the API or through the dashboard.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "description": "batch ID"
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
  "$ref": "#/definitions/Batch"
}
```
## Operation: GetBrowserInfo
Get information about a browser.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "description": "browser ID"
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
  "$ref": "#/definitions/Browser"
}
```
## Operation: GetBrowsersInfo
Get all browsers.

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "$ref": "#/definitions/BrowserList"
}
```
## Operation: GetInstanceInfo
Get information about an instance.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "description": "instance ID"
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
  "$ref": "#/definitions/Instance"
}
```
## Operation: GetInstancesInfo
Get all instances.

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "$ref": "#/definitions/InstanceList"
}
```
## Operation: CreateScreenshot
Screenshots requests to private and shared instances require a positive balance.

*IMPORTANT*: Remember that you can only do 100 free screenshots per month. To used a premium instance, use instance_id=65 for example.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "url": {
      "type": "string",
      "description": "URL of the page to get a screenshot for"
    },
    "instance_id": {
      "type": "integer",
      "description": "instance ID to use"
    },
    "size": {
      "type": "string",
      "description": "screenshot size - \"screen\" (default) or \"page\"",
      "enum": [
        "screen",
        "page"
      ]
    },
    "cache": {
      "type": "integer",
      "description": "use a previous screenshot (same URL, same instance) if it was done within <cache_value> seconds. The default value is 24hours. Specify cache=0 if you want a new screenshot."
    },
    "delay": {
      "type": "integer",
      "description": "number of seconds to wait after the page has loaded. This is used to let JavaScript run longer before taking the screenshot. Use delay=0 to take screenshots faster.",
      "maximum": 60,
      "minimum": 0
    },
    "flash_delay": {
      "type": "integer",
      "description": "number of seconds to wait after the page has loaded if Flash elements are present. Use flash_delay=0 to take screenshots faster.",
      "maximum": 30,
      "minimum": 0
    },
    "screen_width": {
      "type": "integer",
      "description": "width of the browser window. For desktop browsers only.",
      "maximum": 2000,
      "minimum": 1
    },
    "screen_height": {
      "type": "integer",
      "description": "height of the browser window. For desktop browsers only. (Note: full-page screenshots can have a height of up to 15,000px)",
      "maximum": 2000,
      "minimum": 1
    },
    "priority": {
      "type": "integer",
      "description": "assign priority to the screenshot (for private instances only)",
      "maximum": 3,
      "minimum": 1
    },
    "referer": {
      "type": "string",
      "description": "use a custom referrer header - paid screenshots only"
    },
    "post_data": {
      "type": "string",
      "description": "send a POST requests with post_data, useful for filling out forms - paid screenshots only"
    },
    "cookie": {
      "type": "string",
      "description": "set a cookie for the URL requested (see Custom POST Data, Referer and Cookie) Cookies should be separated by a ; - paid screenshots only"
    },
    "script": {
      "type": "string",
      "description": "URL of javascript file to execute after the page load event"
    },
    "details": {
      "type": "integer",
      "description": "level of information available with screenshot/info",
      "maximum": 3,
      "minimum": 1
    },
    "html": {
      "type": "integer",
      "description": "saves the HTML of the rendered page which can be retrieved by the API call screenshot/html. This feature costs *1 credit* per screenshot.",
      "maximum": 1,
      "minimum": 0
    },
    "max_wait": {
      "type": "integer",
      "description": "maximum number of seconds to wait before triggering the PageLoad event. Note that delay will still be used. (default: 0 = disabled)",
      "maximum": 60,
      "minimum": 0
    },
    "headers": {
      "type": "string",
      "description": "any custom HTTP headers. (Not supported with Internet Explorer)"
    },
    "shots": {
      "type": "integer",
      "description": "take multiple screenshots of the same page. This costs 1 additional credit for every 2 additional screenshots.",
      "maximum": 10,
      "minimum": 1
    },
    "shot_interval": {
      "type": "integer",
      "description": "number of seconds between 2 screenshots",
      "maximum": 10,
      "minimum": 1
    },
    "hosting": {
      "type": "string",
      "description": "hosting option - s3 or browshot",
      "enum": [
        "s3",
        "browshot"
      ]
    },
    "hosting_height": {
      "type": "integer",
      "description": "maximum height of the thumbnail to host",
      "maximum": 15000,
      "minimum": 1
    },
    "hosting_width": {
      "type": "integer",
      "description": "maximum height of the thumbnail to host",
      "maximum": 2000,
      "minimum": 1
    },
    "hosting_scale": {
      "type": "number",
      "format": "float",
      "description": "scale of the thumbnail to host"
    },
    "hosting_bucket": {
      "type": "string",
      "description": "S3 bucket to upload the screenshot or thumbnail (required for S3)"
    },
    "hosting_file": {
      "type": "string",
      "description": "file name to use (for S3 only)"
    },
    "hosting_headers": {
      "type": "string",
      "description": "list of headers to add to the S3 object (for S3 only)"
    }
  },
  "additionalProperties": false,
  "required": [
    "url",
    "instance_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Screenshot"
}
```
## Operation: DeleteScreenshot
You can delete details of your screenshots to remove any confidential information.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "description": "screenshot ID"
    },
    "data": {
      "type": "string",
      "description": "data to remove. You can specify multiple of them (separated by a ,): *image* (image files), *url* (url requested), *metadata* (time added, time finished, post data, cookie and referer used for the screenshot), *all* (all data and files)\n"
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
  "items": {
    "$ref": "#/definitions/ScreenshotShort"
  },
  "type": "array"
}
```
## Operation: HostScreenshot
You can host screenshots and thumbnails on your own S3 account or on Browshot.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "description": "screenshot ID"
    },
    "hosting": {
      "type": "string",
      "description": "hosting option: s3 or browshot",
      "enum": [
        "s3",
        "browshot"
      ]
    },
    "width": {
      "type": "integer",
      "description": "width of the thumbnail",
      "maximum": 2000,
      "minimum": 1
    },
    "height": {
      "type": "integer",
      "description": "height of the thumbnail",
      "maximum": 15000,
      "minimum": 1
    },
    "scale": {
      "type": "number",
      "format": "double",
      "description": "scale of the thumbnail"
    },
    "bucket": {
      "type": "string",
      "description": "S3 bucket to upload the screenshot or thumbnail - required with hosting=s3"
    },
    "file": {
      "type": "string",
      "description": "file name to use - optional, used with hosting=s3"
    },
    "headers": {
      "type": "string",
      "description": "HTTP headers to add to your S3 object - optional, used with hosting=s3"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "hosting"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/ScreenshotHost"
  },
  "type": "array"
}
```
## Operation: GetHTML
Retrieve the HTML code of the rendered page. This API call should be used when html=1 was specified in the screenshot request.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "description": "screenshot ID"
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
## Operation: GetScreenshotInfo
Once a screenshot has been requested, its status must be checked until it is either "error" or "finished".

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "description": "screenshot ID received from /api/v1/screenshot/create"
    },
    "details": {
      "type": "integer",
      "description": "level of details about the screenshot and the page",
      "maximum": 3,
      "minimum": 0
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
  "items": {
    "$ref": "#/definitions/Screenshot"
  },
  "type": "array"
}
```
## Operation: GetMultipleScreenshotsInfo
Get information about the last 100 screenshots requested.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "limit": {
      "type": "integer",
      "description": "maximum number of screenshots' information to return",
      "maximum": 100,
      "minimum": 1
    },
    "status": {
      "type": "string",
      "description": "get list of screenshot in a given status (error, finished, in_process)",
      "enum": [
        "error",
        "finished",
        "in_process"
      ]
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/ScreenshotList"
  },
  "type": "array"
}
```
## Operation: CreateMultipleScreenshots
Request multiple screenshots in one API call. The API call accepts all the parameters supported by screenshot/create.
You can specify up to 10 URLs and 10 instances for a total of 100 screenshots in one API call.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "url": {
      "type": "string",
      "description": "URL of the page to get a screenshot for. You can specify multiple url parameters (up to 10)."
    },
    "instance_id": {
      "type": "integer",
      "description": "instance ID to use. You can specify multiple instance_id parameters (up to 10)."
    },
    "size": {
      "type": "string",
      "description": "screenshot size - \"screen\" (default) or \"page\"",
      "enum": [
        "screen",
        "page"
      ]
    },
    "cache": {
      "type": "integer",
      "description": "use a previous screenshot (same URL, same instance) if it was done within <cache_value> seconds. The default value is 24hours. Specify cache=0 if you want a new screenshot."
    },
    "delay": {
      "type": "integer",
      "description": "number of seconds to wait after the page has loaded. This is used to let JavaScript run longer before taking the screenshot. Use delay=0 to take screenshots faster.",
      "maximum": 60,
      "minimum": 0
    },
    "flash_delay": {
      "type": "integer",
      "description": "number of seconds to wait after the page has loaded if Flash elements are present. Use flash_delay=0 to take screenshots faster.",
      "maximum": 30,
      "minimum": 0
    },
    "screen_width": {
      "type": "integer",
      "description": "width of the browser window. For desktop browsers only.",
      "maximum": 2000,
      "minimum": 1
    },
    "screen_height": {
      "type": "integer",
      "description": "height of the browser window. For desktop browsers only. (Note: full-page screenshots can have a height of up to 15,000px)",
      "maximum": 2000,
      "minimum": 1
    },
    "priority": {
      "type": "integer",
      "description": "assign priority to the screenshot (for private instances only)",
      "maximum": 3,
      "minimum": 1
    },
    "referer": {
      "type": "string",
      "description": "use a custom referrer header - paid screenshots only"
    },
    "post_data": {
      "type": "string",
      "description": "send a POST requests with post_data, useful for filling out forms - paid screenshots only"
    },
    "cookie": {
      "type": "string",
      "description": "set a cookie for the URL requested (see Custom POST Data, Referer and Cookie) Cookies should be separated by a ; - paid screenshots only"
    },
    "script": {
      "type": "string",
      "description": "URL of javascript file to execute after the page load event"
    },
    "details": {
      "type": "integer",
      "description": "level of information available with screenshot/info",
      "maximum": 3,
      "minimum": 1
    },
    "html": {
      "type": "integer",
      "description": "saves the HTML of the rendered page which can be retrieved by the API call screenshot/html. This feature costs *1 credit* per screenshot.",
      "maximum": 1,
      "minimum": 0
    },
    "max_wait": {
      "type": "integer",
      "description": "maximum number of seconds to wait before triggering the PageLoad event. Note that delay will still be used. (default: 0 = disabled)",
      "maximum": 60,
      "minimum": 0
    },
    "headers": {
      "type": "string",
      "description": "any custom HTTP headers. (Not supported with Internet Explorer)"
    },
    "hosting": {
      "type": "string",
      "description": "hosting option - s3 or browshot",
      "enum": [
        "s3",
        "browshot"
      ]
    },
    "hosting_height": {
      "type": "integer",
      "description": "maximum height of the thumbnail to host",
      "maximum": 15000,
      "minimum": 1
    },
    "hosting_width": {
      "type": "integer",
      "description": "maximum height of the thumbnail to host",
      "maximum": 2000,
      "minimum": 1
    },
    "hosting_scale": {
      "type": "number",
      "format": "float",
      "description": "scale of the thumbnail to host"
    },
    "hosting_bucket": {
      "type": "string",
      "description": "S3 bucket to upload the screenshot or thumbnail (required for S3)"
    },
    "hosting_file": {
      "type": "string",
      "description": "file name to use (for S3 only)"
    },
    "hosting_headers": {
      "type": "string",
      "description": "list of headers to add to the S3 object (for S3 only)"
    }
  },
  "additionalProperties": false,
  "required": [
    "url",
    "instance_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ScreenshotList"
}
```
## Operation: SearchScreenshot
Search for screenshots of a specific URL.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "url": {
      "type": "string",
      "description": "look for a string matching the URL requested"
    },
    "limit": {
      "type": "integer",
      "description": "maximum number of screenshots' information to return",
      "maximum": 100,
      "minimum": 1
    },
    "status": {
      "type": "string",
      "description": "get list of screenshot in a given status (error, finished, in_process)",
      "enum": [
        "error",
        "finished",
        "in_process"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "url"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/ScreenshotList"
  },
  "type": "array"
}
```
## Operation: ShareScreenshot
You can make your screenshots public, add notes, and share it with your friends and colleagues. Only screenshots which are successfully completed can be shared.n the thumbnail. You can take a 1024x768 screenshot, crop it to 768x768, and get it scaled down to 300x300.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "description": "screenshot ID"
    },
    "note": {
      "type": "string",
      "description": "note to add on the sharing page"
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
  "items": {
    "$ref": "#/definitions/ScreenshotHost"
  },
  "type": "array"
}
```
## Operation: GetThumbnail
Unlike the other API calls, this API sends back the thumbnail as a PNG file, not JSON. The HTTP response code indicates whether the screenshot was successful (200), or incomplete (404) or failed (404). If the screenshot failed or is not finished, a default image "Not found" is sent.

You can crop your screenshots. The crop is done first, then the thumbnail. You can take a 1024x768 screenshot, crop it to 768x768, and get it scaled down to 300x300.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "description": "screenshot ID"
    },
    "width": {
      "type": "integer",
      "description": "width of the thumbnail",
      "maximum": 2000,
      "minimum": 1
    },
    "height": {
      "type": "integer",
      "description": "height of the thumbnail",
      "maximum": 15000,
      "minimum": 1
    },
    "scale": {
      "type": "number",
      "format": "double",
      "description": "scale of the thumbnail"
    },
    "zoom": {
      "type": "integer",
      "description": "zoom 1 to 100 percent",
      "maximum": 100,
      "minimum": 1
    },
    "ratio": {
      "type": "string",
      "description": "Use fit to keep the original page ration, and fill to get a thumbnail for the exact width and height.  specified. If you provide both width and height, you need to specify the ratio: fit to keep the original width/height ratio (the thumbnail might be smaller than the specified width and height), or fill to crop the image if necessary.",
      "enum": [
        "fit",
        "fill"
      ]
    },
    "left": {
      "type": "integer",
      "description": "left edge of the area to be cropped",
      "minimum": 0
    },
    "right": {
      "type": "integer",
      "description": "right edge of the area to be cropped",
      "minimum": 0
    },
    "top": {
      "type": "integer",
      "description": "top edge of the area to be cropped",
      "minimum": 0
    },
    "bottom": {
      "type": "integer",
      "description": "bottom edge of the area to be cropped"
    },
    "format": {
      "type": "string",
      "description": "image as PNG or JPEG",
      "enum": [
        "png",
        "jpeg"
      ]
    },
    "shot": {
      "type": "integer",
      "description": "get the second or third screenshot if multiple screenshots were requested",
      "maximum": 10,
      "minimum": 1
    },
    "quality": {
      "type": "integer",
      "description": "JPEG quality factor (for JPEG thumbnails only)",
      "maximum": 100,
      "minimum": 1
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
