# @datafire/browshot

Client library for Browshot

## Installation and Usage
```bash
npm install --save datafire @datafire/browshot
```

```js
let datafire = require('datafire');
let browshot = require('@datafire/browshot').create({
  apiKeyQuery: "",
});

browshot.GetMultipleScreenshotsInfo({}).then(data => {
  console.log(data);
})
```

## Description
Take screenshots of any website in real time

## Actions
### GetAccountInfo
Get information about your account.


```js
browshot.GetAccountInfo({}, context)
```

#### Parameters
* details (integer) - level of information returned

### CreateBatch
Get hundreds or thousands of screenshots from a text file. You can use this API call or the dashboard. Unlike the other API calls, you must issue a POST request with the Content-Type "multipart/form-data" in order to upload the text file. The text file must contain the list of URLs to request, 1 URL per line. Failed screenshots will be tried up to 3 times before giving up.



```js
browshot.CreateBatch({
  "instance_id": 0
}, context)
```

#### Parameters
* instance_id (integer) **required** - instance ID to use
* file (string) - text file to use
* size (string) - screenshots size - "screen" (default) or "page"
* name (string) - name of the batch
* width (integer) - thumbnail width.
* height (integer) - thumbnail height
* delay (integer) - number of seconds to wait after the page has loaded. This is used to let JavaScript run longer before taking the screenshot. Use delay=0 to take screenshots faster.
* flash_delay (integer) - number of seconds to wait after the page has loaded if Flash elements are present. Use flash_delay=0 to take screenshots faster.
* screen_width (integer) - width of the browser window. For desktop browsers only.
* screen_height (integer) - height of the browser window. For desktop browsers only. (Note: full-page screenshots can have a height of up to 15,000px)
* priority (integer) - assign priority to the screenshot (for private instances only)
* referer (string) - use a custom referrer header - paid screenshots only
* post_data (string) - send a POST requests with post_data, useful for filling out forms - paid screenshots only
* cookie (string) - set a cookie for the URL requested (see Custom POST Data, Referer and Cookie) Cookies should be separated by a ; - paid screenshots only
* script (string) - URL of javascript file to execute after the page load event
* details (integer) - level of information available with screenshot/info
* html (integer) - saves the HTML of the rendered page which can be retrieved by the API call screenshot/html. This feature costs *1 credit* per screenshot.
* max_wait (integer) - maximum number of seconds to wait before triggering the PageLoad event. Note that delay will still be used. (default: 0 = disabled)
* headers (string) - any custom HTTP headers. (Not supported with Internet Explorer)
* format (string) - image as PNG or JPEG
* hosting (string) - hosting option - s3 or browshot
* hosting_height (integer) - maximum height of the thumbnail to host
* hosting_width (integer) - maximum height of the thumbnail to host
* hosting_scale (number) - scale of the thumbnail to host
* hosting_bucket (string) - S3 bucket to upload the screenshot or thumbnail (required for S3)
* hosting_file (string) - file name to use (for S3 only)
* hosting_headers (string) - list of headers to add to the S3 object (for S3 only)

### GetBatchInfo
Get the status of a batch requested through the API or through the dashboard.



```js
browshot.GetBatchInfo({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - batch ID

### GetBrowserInfo
Get information about a browser.


```js
browshot.GetBrowserInfo({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - browser ID

### GetBrowsersInfo
Get all browsers.


```js
browshot.GetBrowsersInfo(null, context)
```


### GetInstanceInfo
Get information about an instance.


```js
browshot.GetInstanceInfo({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - instance ID

### GetInstancesInfo
Get all instances.


```js
browshot.GetInstancesInfo(null, context)
```


### CreateScreenshot
Screenshots requests to private and shared instances require a positive balance.

*IMPORTANT*: Remember that you can only do 100 free screenshots per month. To used a premium instance, use instance_id=65 for example.



```js
browshot.CreateScreenshot({
  "url": "",
  "instance_id": 0
}, context)
```

#### Parameters
* url (string) **required** - URL of the page to get a screenshot for
* instance_id (integer) **required** - instance ID to use
* size (string) - screenshot size - "screen" (default) or "page"
* cache (integer) - use a previous screenshot (same URL, same instance) if it was done within <cache_value> seconds. The default value is 24hours. Specify cache=0 if you want a new screenshot.
* delay (integer) - number of seconds to wait after the page has loaded. This is used to let JavaScript run longer before taking the screenshot. Use delay=0 to take screenshots faster.
* flash_delay (integer) - number of seconds to wait after the page has loaded if Flash elements are present. Use flash_delay=0 to take screenshots faster.
* screen_width (integer) - width of the browser window. For desktop browsers only.
* screen_height (integer) - height of the browser window. For desktop browsers only. (Note: full-page screenshots can have a height of up to 15,000px)
* priority (integer) - assign priority to the screenshot (for private instances only)
* referer (string) - use a custom referrer header - paid screenshots only
* post_data (string) - send a POST requests with post_data, useful for filling out forms - paid screenshots only
* cookie (string) - set a cookie for the URL requested (see Custom POST Data, Referer and Cookie) Cookies should be separated by a ; - paid screenshots only
* script (string) - URL of javascript file to execute after the page load event
* details (integer) - level of information available with screenshot/info
* html (integer) - saves the HTML of the rendered page which can be retrieved by the API call screenshot/html. This feature costs *1 credit* per screenshot.
* max_wait (integer) - maximum number of seconds to wait before triggering the PageLoad event. Note that delay will still be used. (default: 0 = disabled)
* headers (string) - any custom HTTP headers. (Not supported with Internet Explorer)
* shots (integer) - take multiple screenshots of the same page. This costs 1 additional credit for every 2 additional screenshots.
* shot_interval (integer) - number of seconds between 2 screenshots
* hosting (string) - hosting option - s3 or browshot
* hosting_height (integer) - maximum height of the thumbnail to host
* hosting_width (integer) - maximum height of the thumbnail to host
* hosting_scale (number) - scale of the thumbnail to host
* hosting_bucket (string) - S3 bucket to upload the screenshot or thumbnail (required for S3)
* hosting_file (string) - file name to use (for S3 only)
* hosting_headers (string) - list of headers to add to the S3 object (for S3 only)

### DeleteScreenshot
You can delete details of your screenshots to remove any confidential information.



```js
browshot.DeleteScreenshot({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - screenshot ID
* data (string) - data to remove. You can specify multiple of them (separated by a ,): *image* (image files), *url* (url requested), *metadata* (time added, time finished, post data, cookie and referer used for the screenshot), *all* (all data and files)

### HostScreenshot
You can host screenshots and thumbnails on your own S3 account or on Browshot.


```js
browshot.HostScreenshot({
  "id": 0,
  "hosting": ""
}, context)
```

#### Parameters
* id (integer) **required** - screenshot ID
* hosting (string) **required** - hosting option: s3 or browshot
* width (integer) - width of the thumbnail
* height (integer) - height of the thumbnail
* scale (number) - scale of the thumbnail
* bucket (string) - S3 bucket to upload the screenshot or thumbnail - required with hosting=s3
* file (string) - file name to use - optional, used with hosting=s3
* headers (string) - HTTP headers to add to your S3 object - optional, used with hosting=s3

### GetHTML
Retrieve the HTML code of the rendered page. This API call should be used when html=1 was specified in the screenshot request.



```js
browshot.GetHTML({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - screenshot ID

### GetScreenshotInfo
Once a screenshot has been requested, its status must be checked until it is either "error" or "finished".


```js
browshot.GetScreenshotInfo({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - screenshot ID received from /api/v1/screenshot/create
* details (integer) - level of details about the screenshot and the page

### GetMultipleScreenshotsInfo
Get information about the last 100 screenshots requested.


```js
browshot.GetMultipleScreenshotsInfo({}, context)
```

#### Parameters
* limit (integer) - maximum number of screenshots' information to return
* status (string) - get list of screenshot in a given status (error, finished, in_process)

### CreateMultipleScreenshots
Request multiple screenshots in one API call. The API call accepts all the parameters supported by screenshot/create.
You can specify up to 10 URLs and 10 instances for a total of 100 screenshots in one API call.



```js
browshot.CreateMultipleScreenshots({
  "url": "",
  "instance_id": 0
}, context)
```

#### Parameters
* url (string) **required** - URL of the page to get a screenshot for. You can specify multiple url parameters (up to 10).
* instance_id (integer) **required** - instance ID to use. You can specify multiple instance_id parameters (up to 10).
* size (string) - screenshot size - "screen" (default) or "page"
* cache (integer) - use a previous screenshot (same URL, same instance) if it was done within <cache_value> seconds. The default value is 24hours. Specify cache=0 if you want a new screenshot.
* delay (integer) - number of seconds to wait after the page has loaded. This is used to let JavaScript run longer before taking the screenshot. Use delay=0 to take screenshots faster.
* flash_delay (integer) - number of seconds to wait after the page has loaded if Flash elements are present. Use flash_delay=0 to take screenshots faster.
* screen_width (integer) - width of the browser window. For desktop browsers only.
* screen_height (integer) - height of the browser window. For desktop browsers only. (Note: full-page screenshots can have a height of up to 15,000px)
* priority (integer) - assign priority to the screenshot (for private instances only)
* referer (string) - use a custom referrer header - paid screenshots only
* post_data (string) - send a POST requests with post_data, useful for filling out forms - paid screenshots only
* cookie (string) - set a cookie for the URL requested (see Custom POST Data, Referer and Cookie) Cookies should be separated by a ; - paid screenshots only
* script (string) - URL of javascript file to execute after the page load event
* details (integer) - level of information available with screenshot/info
* html (integer) - saves the HTML of the rendered page which can be retrieved by the API call screenshot/html. This feature costs *1 credit* per screenshot.
* max_wait (integer) - maximum number of seconds to wait before triggering the PageLoad event. Note that delay will still be used. (default: 0 = disabled)
* headers (string) - any custom HTTP headers. (Not supported with Internet Explorer)
* hosting (string) - hosting option - s3 or browshot
* hosting_height (integer) - maximum height of the thumbnail to host
* hosting_width (integer) - maximum height of the thumbnail to host
* hosting_scale (number) - scale of the thumbnail to host
* hosting_bucket (string) - S3 bucket to upload the screenshot or thumbnail (required for S3)
* hosting_file (string) - file name to use (for S3 only)
* hosting_headers (string) - list of headers to add to the S3 object (for S3 only)

### SearchScreenshot
Search for screenshots of a specific URL.


```js
browshot.SearchScreenshot({
  "url": ""
}, context)
```

#### Parameters
* url (string) **required** - look for a string matching the URL requested
* limit (integer) - maximum number of screenshots' information to return
* status (string) - get list of screenshot in a given status (error, finished, in_process)

### ShareScreenshot
You can make your screenshots public, add notes, and share it with your friends and colleagues. Only screenshots which are successfully completed can be shared.n the thumbnail. You can take a 1024x768 screenshot, crop it to 768x768, and get it scaled down to 300x300.



```js
browshot.ShareScreenshot({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - screenshot ID
* note (string) - note to add on the sharing page

### GetThumbnail
Unlike the other API calls, this API sends back the thumbnail as a PNG file, not JSON. The HTTP response code indicates whether the screenshot was successful (200), or incomplete (404) or failed (404). If the screenshot failed or is not finished, a default image "Not found" is sent.

You can crop your screenshots. The crop is done first, then the thumbnail. You can take a 1024x768 screenshot, crop it to 768x768, and get it scaled down to 300x300.



```js
browshot.GetThumbnail({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - screenshot ID
* width (integer) - width of the thumbnail
* height (integer) - height of the thumbnail
* scale (number) - scale of the thumbnail
* zoom (integer) - zoom 1 to 100 percent
* ratio (string) - Use fit to keep the original page ration, and fill to get a thumbnail for the exact width and height.  specified. If you provide both width and height, you need to specify the ratio: fit to keep the original width/height ratio (the thumbnail might be smaller than the specified width and height), or fill to crop the image if necessary.
* left (integer) - left edge of the area to be cropped
* right (integer) - right edge of the area to be cropped
* top (integer) - top edge of the area to be cropped
* bottom (integer) - bottom edge of the area to be cropped
* format (string) - image as PNG or JPEG
* shot (integer) - get the second or third screenshot if multiple screenshots were requested
* quality (integer) - JPEG quality factor (for JPEG thumbnails only)

