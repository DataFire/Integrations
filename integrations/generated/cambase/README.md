# @datafire/cambase

Client library for Cambase.io

## Installation and Usage
```bash
npm install --save datafire @datafire/cambase
```

```js
let datafire = require('datafire');
let cambase = require('@datafire/cambase').create();

cambase.api.v1.vendors.json.get({}).then(data => {
  console.log(data);
})
```

## Description
Cambase.io is a project by Evercam.io in order to make it easier for software developers to have a reliable, up to date source of model hardware information available via a public API.

## Actions
### api.v1.models.json.get
Fetches all Models


```js
cambase.api.v1.models.json.get({}, context)
```

#### Parameters
* page (integer) - Page number
* order (string) - Sort order

### api.v1.models.json.post
Creates a new Model


```js
cambase.api.v1.models.json.post({
  "vendor_id": "",
  "model[model]": ""
}, context)
```

#### Parameters
* vendor_id (string) **required** - Vendor ID
* model[model] (string) **required** - Model
* model[shape] (string) - Shape
* model[resolution] (string) - Resolution
* model[onvif] (string) - ONVIF
* model[psia] (string) - PSIA
* model[ptz] (string) - PTZ
* model[infrared] (string) - Infrared
* model[varifocal] (string) - Varifocal
* model[sd_card] (string) - SD Card
* model[upnp] (string) - UPnP
* model[audio_in] (string) - UPnP
* model[audio_out] (string) - UPnP
* model[default_username] (string) - Default Username
* model[default_password] (string) - Default Password
* model[jpeg_url] (string) - JPEG URL
* model[h264_url] (string) - H264 URL
* model[mjpeg_url] (string) - MJPEG URL

### api.v1.models.search.json.get
Searches all Models


```js
cambase.api.v1.models.search.json.get({}, context)
```

#### Parameters
* page (integer) - Page number
* q[model_cont] (string) - Model
* q[manufacturer_name_cont] (string) - Vendor
* q[shape_eq] (string) - Shape
* q[resolution_eq] (string) - Resolution
* q[onvif_true] (string) - ONVIF
* q[psia_true] (string) - PSIA
* q[ptz_true] (string) - PTZ
* q[infrared_true] (string) - Infrared
* q[varifocal_true] (string) - Varifocal
* q[sd_card_true] (string) - SD Card
* q[upnp_true] (string) - UPnP
* q[audio_in_true] (string) - Audio In
* q[audio_out_true] (string) - Audio Out

### api.v1.models.id.json.get
Fetches a single Model


```js
cambase.api.v1.models.id.json.get({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - Model ID

### api.v1.models.id.json.patch
Updates an existing Model


```js
cambase.api.v1.models.id.json.patch({
  "id": "",
  "vendor_id": ""
}, context)
```

#### Parameters
* id (string) **required** - Model ID
* vendor_id (string) **required** - Vendor ID
* model[model] (string) - Model
* model[shape] (string) - Shape
* model[resolution] (string) - Resolution
* model[onvif] (string) - ONVIF
* model[psia] (string) - PSIA
* model[ptz] (string) - PTZ
* model[infrared] (string) - Infrared
* model[varifocal] (string) - Varifocal
* model[sd_card] (string) - SD Card
* model[upnp] (string) - UPnP
* model[audio_in] (string) - Audio In
* model[audio_out] (string) - Audio Out
* model[default_username] (string) - Default Username
* model[default_password] (string) - Default Password
* model[jpeg_url] (string) - JPEG URL
* model[h264_url] (string) - H264 URL
* model[mjpeg_url] (string) - MJPEG URL

### api.v1.models.id.json.put
Updates an existing Model


```js
cambase.api.v1.models.id.json.put({
  "id": "",
  "vendor_id": ""
}, context)
```

#### Parameters
* id (string) **required** - Model ID
* vendor_id (string) **required** - Vendor ID
* model[model] (string) - Model
* model[shape] (string) - Shape
* model[resolution] (string) - Resolution
* model[onvif] (string) - ONVIF
* model[psia] (string) - PSIA
* model[ptz] (string) - PTZ
* model[infrared] (string) - Infrared
* model[varifocal] (string) - Varifocal
* model[sd_card] (string) - SD Card
* model[upnp] (string) - UPnP
* model[audio_in] (string) - Audio In
* model[audio_out] (string) - Audio Out
* model[default_username] (string) - Default Username
* model[default_password] (string) - Default Password
* model[jpeg_url] (string) - JPEG URL
* model[h264_url] (string) - H264 URL
* model[mjpeg_url] (string) - MJPEG URL

### api.v1.recorders.json.get
Fetches all Recorders


```js
cambase.api.v1.recorders.json.get({}, context)
```

#### Parameters
* page (integer) - Page number
* order (string) - Sort order

### api.v1.recorders.json.post
Creates a new Recorder


```js
cambase.api.v1.recorders.json.post({
  "vendor_id": "",
  "recorder[model]": "",
  "recorder[name]": "",
  "recorder[recorder_type]": ""
}, context)
```

#### Parameters
* vendor_id (string) **required** - Vendor ID
* recorder[model] (string) **required** - Model
* recorder[name] (string) **required** - Name
* recorder[recorder_type] (string) **required** - Type
* recorder[resolution] (string) - Resolution
* recorder[onvif] (string) - ONVIF
* recorder[psia] (string) - PSIA
* recorder[ptz] (string) - PTZ
* recorder[discontinued] (string) - Discontinued
* recorder[support_3rdparty] (string) - 3rd pparty Camera Support
* recorder[sd_card] (string) - SD Card
* recorder[upnp] (string) - UPnP
* recorder[hot_swap] (string) - Hot Swap
* recorder[hdmi] (string) - HDMI Support
* recorder[digital_io] (string) - Digital I/O
* recorder[audio_in] (string) - Audio In
* recorder[audio_out] (string) - Audio Out
* recorder[input_channels] (string) - Input Channels
* recorder[playback_channels] (string) - Playback Channels
* recorder[usb] (string) - USB Ports
* recorder[sdhc] (string) - SD Card (GB)
* recorder[mobile_access] (string) - Mobile Access
* recorder[alarms] (string) - Alarms
* recorder[raid_support] (string) - Raid Support
* recorder[storage] (string) - Internal Storage
* recorder[additional_information] (string) - Additional Information
* recorder[default_username] (string) - Default Username
* recorder[default_password] (string) - Default Password
* recorder[jpeg_url] (string) - JPEG URL
* recorder[h264_url] (string) - H264 URL
* recorder[mjpeg_url] (string) - MJPEG URL
* recorder[official_url] (string) - Official URL

### api.v1.recorders.search.json.get
Searches all Recorders


```js
cambase.api.v1.recorders.search.json.get({}, context)
```

#### Parameters
* page (integer) - Page number
* q[model_cont] (string) - Model
* q[vendor_name_cont] (string) - Vendor
* q[sdhc_eq] (string) - SD Card (GB)
* q[type_eq] (string) - Type
* q[resolution_eq] (string) - Resolution
* q[input_channels_eq] (string) - Input Channels
* q[playback_channels_eq] (string) - Playback Channels
* q[onvif_true] (string) - ONVIF
* q[psia_true] (string) - PSIA
* q[ptz_true] (string) - PTZ
* q[sd_card_true] (string) - SD Card
* q[upnp_true] (string) - UPnP
* q[audio_in_true] (string) - Audio In
* q[audio_out_true] (string) - Audio Out
* q[hdmi_true] (string) - HDMI Support
* q[hot_swap_true] (string) - Hot Swap
* q[support_3rdparty_true] (string) - 3rd pparty Camera Support
* q[digital_io_true] (string) - Digital I/O

### api.v1.recorders.id.json.get
Fetches a single Recorder


```js
cambase.api.v1.recorders.id.json.get({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - Recorder ID

### api.v1.recorders.id.json.patch
Updates an existing Recorder


```js
cambase.api.v1.recorders.id.json.patch({
  "id": "",
  "vendor_id": "",
  "recorder[model]": "",
  "recorder[name]": "",
  "recorder[recorder_type]": ""
}, context)
```

#### Parameters
* id (string) **required** - Recorder ID
* vendor_id (string) **required** - Vendor ID
* recorder[model] (string) **required** - Model
* recorder[name] (string) **required** - Name
* recorder[recorder_type] (string) **required** - Type
* recorder[resolution] (string) - Resolution
* recorder[onvif] (string) - ONVIF
* recorder[psia] (string) - PSIA
* recorder[ptz] (string) - PTZ
* recorder[discontinued] (string) - Discontinued
* recorder[support_3rdparty] (string) - 3rd pparty Camera Support
* recorder[sd_card] (string) - SD Card
* recorder[upnp] (string) - UPnP
* recorder[hot_swap] (string) - Hot Swap
* recorder[hdmi] (string) - HDMI Support
* recorder[digital_io] (string) - Digital I/O
* recorder[audio_in] (string) - Audio In
* recorder[audio_out] (string) - Audio Out
* recorder[input_channels] (string) - Input Channels
* recorder[playback_channels] (string) - Playback Channels
* recorder[usb] (string) - USB Ports
* recorder[sdhc] (string) - SD Card (GB)
* recorder[mobile_access] (string) - Mobile Access
* recorder[alarms] (string) - Alarms
* recorder[raid_support] (string) - Raid Support
* recorder[storage] (string) - Internal Storage
* recorder[additional_information] (string) - Additional Information
* recorder[default_username] (string) - Default Username
* recorder[default_password] (string) - Default Password
* recorder[jpeg_url] (string) - JPEG URL
* recorder[h264_url] (string) - H264 URL
* recorder[mjpeg_url] (string) - MJPEG URL
* recorder[official_url] (string) - Official URL

### api.v1.recorders.id.json.put
Updates an existing Recorder


```js
cambase.api.v1.recorders.id.json.put({
  "id": "",
  "vendor_id": "",
  "recorder[model]": "",
  "recorder[name]": "",
  "recorder[recorder_type]": ""
}, context)
```

#### Parameters
* id (string) **required** - Recorder ID
* vendor_id (string) **required** - Vendor ID
* recorder[model] (string) **required** - Model
* recorder[name] (string) **required** - Name
* recorder[recorder_type] (string) **required** - Type
* recorder[resolution] (string) - Resolution
* recorder[onvif] (string) - ONVIF
* recorder[psia] (string) - PSIA
* recorder[ptz] (string) - PTZ
* recorder[discontinued] (string) - Discontinued
* recorder[support_3rdparty] (string) - 3rd pparty Camera Support
* recorder[sd_card] (string) - SD Card
* recorder[upnp] (string) - UPnP
* recorder[hot_swap] (string) - Hot Swap
* recorder[hdmi] (string) - HDMI Support
* recorder[digital_io] (string) - Digital I/O
* recorder[audio_in] (string) - Audio In
* recorder[audio_out] (string) - Audio Out
* recorder[input_channels] (string) - Input Channels
* recorder[playback_channels] (string) - Playback Channels
* recorder[usb] (string) - USB Ports
* recorder[sdhc] (string) - SD Card (GB)
* recorder[mobile_access] (string) - Mobile Access
* recorder[alarms] (string) - Alarms
* recorder[raid_support] (string) - Raid Support
* recorder[storage] (string) - Internal Storage
* recorder[additional_information] (string) - Additional Information
* recorder[default_username] (string) - Default Username
* recorder[default_password] (string) - Default Password
* recorder[jpeg_url] (string) - JPEG URL
* recorder[h264_url] (string) - H264 URL
* recorder[mjpeg_url] (string) - MJPEG URL
* recorder[official_url] (string) - Official URL

### api.v1.vendors.json.get
Fetches all Vendors


```js
cambase.api.v1.vendors.json.get({}, context)
```

#### Parameters
* page (integer) - Page number
* order (string) - Sort order

### api.v1.vendors.json.post
Creates a new Vendor


```js
cambase.api.v1.vendors.json.post({
  "vendor[name]": ""
}, context)
```

#### Parameters
* vendor[name] (string) **required** - Name
* vendor[info] (string) - Info.
* vendor[url] (string) - Website
* vendor[mac] (string) - MAC

### api.v1.vendors.id.json.get
Fetches a single Vendor


```js
cambase.api.v1.vendors.id.json.get({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - Vendor ID
* order (string) - Sort order

### api.v1.vendors.id.json.patch
Updates an existing Vendor


```js
cambase.api.v1.vendors.id.json.patch({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - Vendor ID
* vendor[name] (string) - Name
* vendor[info] (string) - Info.
* vendor[url] (string) - Website
* vendor[mac] (string) - MAC

### api.v1.vendors.id.json.put
Updates an existing Vendor


```js
cambase.api.v1.vendors.id.json.put({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - Vendor ID
* vendor[name] (string) - Name
* vendor[info] (string) - Info.
* vendor[url] (string) - Website
* vendor[mac] (string) - MAC

