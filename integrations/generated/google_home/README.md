# @datafire/google_home

Client library for Google Home

## Installation and Usage
```bash
npm install --save @datafire/google_home
```
```js
let google_home = require('@datafire/google_home').create({
  "cast-local-authorization-token": ""
});

.then(data => {
  console.log(data);
});
```

## Description

# Google Home Local API
This is an unofficial documentation of the local API used by the Home app to communicate with GH devices.
[GitHub Repo](https://github.com/rithvikvibhu/GHLocalApi)

[![GitHub stars](https://img.shields.io/github/stars/rithvikvibhu/GHLocalApi)](https://github.com/rithvikvibhu/GHLocalApi/stargazers) [![GitHub license](https://img.shields.io/github/license/rithvikvibhu/GHLocalApi)](https://github.com/rithvikvibhu/GHLocalApi/blob/master/LICENSE.md)

## Getting Started

Requests must be made over HTTPS, port 8443, so the base URL for these endpoints is: `https://<google-home-ip>:8443/setup/`

Get the IP of Google Home from the Google Home app (Device Settings -> End of the list) or from your router.

GET requests are simple, in the browser kind.  
POST requests need to set the header (when there's a body): `content-type: application/json`

## Authentication

Since June 2019, most requests (with exceptions like `/setup/eureka_info`) need a local authorization token.

There are 3 kinds of tokens involved here:

### Local Authorization Token
This token must be sent in all requests in the header `cast-local-authorization-token`. It is short-lived (~1 day) and may change unexpectedly (with a sync, change in homegraph, etc.)
##### Get this token
- With access to an android device, [get this token directly by either method](https://gist.github.com/rithvikvibhu/1a0f4937af957ef6a78453e3be482c1f).
- Without a device, or to integrate it with a script, use an access token to get the homegraph and extract the token. To get an access token, read the next section. Check the example section for more info.

### Access Token
This is a standard google oauth2 access token. It is in the form `ya29.***`.
This gives access to the Google Home Foyer API. These expire in an hour.
Use this to get the homegraph (and then the local authorization token above).
##### Get this token
To get this access token, either a Google account username/password or a Google Master Token is needed. More info in the gist.
Use the script [from this gist](https://gist.github.com/rithvikvibhu/952f83ea656c6782fbd0f1645059055d).

### Master Token
This is in the form `aas_et/***` and can be used to request access tokens.
##### Get this token
The same [script in the gist](https://gist.github.com/rithvikvibhu/952f83ea656c6782fbd0f1645059055d) that gets the access token can also get the master token. Needs Google account creds.

## Example

Here's the whole flow from just a pair of username/password to using the local API.

Prerequisites:
- [grpcurl](https://github.com/fullstorydev/grpcurl)
- [Proto files](https://drive.google.com/drive/folders/1RvnN3y-G23pd2SWHmfV_7sef8QU5GNF4?usp=sharing) (preserve folder structure)

### 1. Get an access token with the script
- Download get_tokens.py
- Fill in username and password
```sh
python3 get_tokens.py
# Note down the access token printed.
```

### 2. Use the access token and get home graph
- This prints the json and uses jq to parse and filter out the fields deviceName and localAuthToken
- This will give a list of all devices and their local auth tokens
```sh
./grpcurl -H 'authorization: Bearer ya29.a0Af****' \
	-import-path /path/to/protos \
	-proto /path/to/protos/google/internal/home/foyer/v1.proto \
	googlehomefoyer-pa.googleapis.com:443 \
	google.internal.home.foyer.v1.StructuresService/GetHomeGraph | jq '.home.devices[] | {deviceName, localAuthToken}'
# Note down the local auth token for the device you want.
```

### 3. Make the call to the local device using the local auth token
```sh
curl -H "cast-local-authorization-token: LOCAL_AUTH_TOKEN" --verbose --insecure https://192.168.0.18:8443/setup/bluetooth/status
```

## Actions

### LegalNotice
All licenses of programs used by Home.


```js
google_home.LegalNotice(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `string`

### Accessibility
This controls Accessibility sounds. `hotword_enabled` is for 'Play start sound' and `endpoint_enabled` is for 'Play end sound'.  
Sending an empty-body POST request returns the current values.  
Either of the fields or both can be sent and new values will be saved.


```js
google_home.Accessibility({
  "body": {
    "hotword_enabled": true,
    "endpoint_enabled": true
  }
}, context)
```

#### Input
* input `object`
  * body **required** [AccessibilityRequest](#accessibilityrequest)

#### Output
* output [Getcurrentvalues](#getcurrentvalues)

### GetAlarmsandTimers
This gives a list of all active alarms and timers.

Both alarms and timers have `id`s which can be used to delete them. (There is no known way of creating/deleting yet). The value of `status` have different meanings for alarms and timers (given below).

Alarms have `date_pattern` and `time_pattern` with day, month, year, hour, minute, second. `fire_time` is the same in unix time (milliseconds, not seconds).  
`status` is 1 for set up and 2 for ringing.

Timers have `original_duration` is the original duration.  
`status` is 1 for set up and 3 for ringing.


```js
google_home.GetAlarmsandTimers(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [Example18](#example18)

### DeleteAlarmsandTimers
This deletes alarms and timers by their id.

`ids` is a list of ids to be deleted. Sending invalid id still returns a 200 OK. The `/` in the ids have to be escaped like `\/`.


```js
google_home.DeleteAlarmsandTimers({
  "body": {
    "ids": []
  }
}, context)
```

#### Input
* input `object`
  * body **required** [DeleteAlarmsandTimersRequest](#deletealarmsandtimersrequest)

#### Output
* output [Example19](#example19)

### AlarmVolume
This gets and sets alarms and timers volume.  
**Note:** This is not the same as normal volume.

Volume is a float number in [0, 1] where 0 is minimum and 1 is maximum.  
Sending an empty body gets the volume. Sending `volume` sets the volume.


```js
google_home.AlarmVolume({
  "body": {
    "volume": 0
  }
}, context)
```

#### Input
* input `object`
  * body **required** [AlarmVolumeRequest](#alarmvolumerequest)

#### Output
* output [Getvolume](#getvolume)

### CheckReadyStatus
**Update:** This seems to have changed now and is no longer possible. The error is also new.

Setting `play_ready_message` to true plays a welcome message on the device saying "Hi, I'm your Google Assistant. I'm here to help. To learn a few things you can do, continue in the Google Home app."


```js
google_home.CheckReadyStatus({
  "body": {
    "play_ready_message": true,
    "user_id": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** [CheckReadyStatusRequest](#checkreadystatusrequest)

#### Output
* output [Example13](#example13)

### DoNotDisturb
This is for the Do Not Disturb option. Sending an empty-body POST returns the current value. Sending a new value changes it.


```js
google_home.DoNotDisturb({
  "Content-Type": ""
}, context)
```

#### Input
* input `object`
  * Content-Type **required** `string`

#### Output
* output [Getcurrentstate](#getcurrentstate)

### NightModesettings
This sets night mode options.  
To view currently set values, use /setup/eureka_info.  
If `enabled` is set to false, night mode is disabled and the other values do not matter.  
`led_brightness` and `volume` refer to the maximum LED Brightness and Volume that is set during night mode.  
`demo_to_user` is always set to `true` so change in values will be visible in realtime (like brightness).  
`windows`: A combination of `length_hours` and `start_hour` is used to define start and end times for night mode. In this example, night mode starts at 10 PM (22) and ends at 6 AM (8 hours later). `windows.days` is an array of days of week when night mode will be enabled. Example: 0->Sunday, 1-> Monday, ..., 6->Saturday.


```js
google_home.NightModesettings({
  "body": {
    "enabled": true,
    "do_not_disturb": true,
    "led_brightness": 0,
    "volume": 0,
    "demo_to_user": true,
    "windows": []
  }
}, context)
```

#### Input
* input `object`
  * body **required** [NightModesettingsRequest](#nightmodesettingsrequest)

#### Output
* output [Example17](#example17)

### Forgetpaireddevice
*See note for Bluetooth under `/setup/bluetooth/status`*

**For both parts**

This is to forget paired devices by mac address. Works for both kinds of devices (Part 1 and Part 2).


```js
google_home.Forgetpaireddevice({
  "body": {
    "mac_address": "",
    "bond": true
  }
}, context)
```

#### Input
* input `object`
  * body **required** [ForgetpaireddeviceRequest](#forgetpaireddevicerequest)

#### Output
* output `object`

### PairwithSpeaker
*See note for Bluetooth under `/setup/bluetooth/status`*

**For Part 2 only**

This pairs with other bluetooth speakers by mac address.


```js
google_home.PairwithSpeaker({
  "body": {
    "mac_address": "",
    "connect": true,
    "profile": 0
  }
}, context)
```

#### Input
* input `object`
  * body **required** [PairwithSpeakerRequest](#pairwithspeakerrequest)

#### Output
* output `object`

### ChangeDiscoverability
*See note for Bluetooth under `/setup/bluetooth/status`*

**For Part 1 only**

This enables/disables Home's bluetooth discovery and other devices can pair with Home (where Home acts as a speaker).


```js
google_home.ChangeDiscoverability({
  "body": {
    "enable_discovery": true
  }
}, context)
```

#### Input
* input `object`
  * body **required** [ChangeDiscoverabilityRequest](#changediscoverabilityrequest)

#### Output
* output `object`

### GetPairedDevices
*See note for Bluetooth under `/setup/bluetooth/status`*

**For both parts**

This gives a list of all paired or 'bonded' devices. The response field names are self-descriptive.


```js
google_home.GetPairedDevices(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [Example111](#example111)

### Scanfordevices
*See note for Bluetooth under `/setup/bluetooth/status`*

**For Part 2 only**

This initiates scan for other bluetooth speakers/devices. Scan results will be updated continuously for `timeout` seconds.  
To get the scan results, see /setup/bluetooth/scan_results.


```js
google_home.Scanfordevices({
  "body": {
    "enable": true,
    "clear_results": true,
    "timeout": 0
  }
}, context)
```

#### Input
* input `object`
  * body **required** [ScanfordevicesRequest](#scanfordevicesrequest)

#### Output
* output `object`

### GetScanResults
*See note for Bluetooth under `/setup/bluetooth/status`*

**For Part 2 only**

This returns a list of all nearby bluetooth devices. While the Home app only shows speakers, this list contains all devices including TVs, mobiles, etc.

`rssi` is signal strength, `name` is name, `mac_address` is mac address.  
`device_class` and `device_type` are bluetooth codes.  

The Home app only lists those devices with `expected_profiles` > 0. Basically, the device should function as a speaker.


```js
google_home.GetScanResults(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [Example112](#example112)

### Status
> **There are 2 parts of Bluetooth.**
>
> *Part 1*: Devices like phones connect to Home and play audio through Home.  
> For this, /setup/bluetooth/discovery is used to make Home discoverable. Then devices can connect to it as if Home is just another bluetooth speaker.
>
> *Part 2*: Bluetooth speakers connect to Home and Home plays audio through the speakers.
> For this, /setup/bluetooth/scan and /setup/bluetooth/scan_results are used to connect to other speakers.
>
> The other endpoints are common for both parts.


**For both parts**

This gives the status of all bluetooth things.
- Not sure what `audio_mode` is.
- `discovery_enabled` states whether Home is discoverable. (**Part 1**)
- `connecting_devices` is a list of all media sources (like phones) connected to Home. (**Part 1**)
- `scanning_enabled` states whether Home scanning for other bluetooth speakers/devices. (**Part 2**)
- `connected_devices` is a list of all speakers connected to Home. (**Part 2**)


```js
google_home.Status(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [Example110](#example110)

### GetSavedNetworks
This gets a list of all saved Wi-Fi networks.

Each network has `ssid`, `wpa_auth`, `wpa_cipher` and `wpa_id`.  
`wpa_id` is an incrementing number used to identify a saved network.  
#TODO: Add values for `wpa_auth` and `wpa_cipher`.


```js
google_home.GetSavedNetworks(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [Example113](#example113)

### connect_wifi.post
**Note:** Not sure how the password is encrypted. Might be using the public certificate from /setup/eureka_info. So this cannot be used as of now. If someone figures it out, please [create a new issue here](https://github.com/rithvikvibhu/GHLocalApi/issues/new).


```js
google_home.connect_wifi.post({
  "body": {
    "bssid": "",
    "signal_level": 0,
    "ssid": "",
    "wpa_auth": 0,
    "wpa_cipher": 0,
    "enc_passwd": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** [ConnecttoWi-FiNetworkRequest](#connecttowi-finetworkrequest)

#### Output
*Output schema unknown*

### EurekaInfo
This gives most of the device info. The GET parameter `param` is a comma separated list of json keys to fetch. Currently, these params are known: `version,audio,name,build_info,detail,device_info,net,wifi,setup,settings,opt_in,opencast,multizone,proxy,night_mode_params,user_eq,room_equalizer,sign,aogh,ultrasound,mesh`

Nested items can also be filtered using the dot notation. Example: `audio.digital`

The `options` GET parameter is always set to `detail` or `detail,sign`. `sign` signs the `nonce` and returns some value.

The `nonce` GET parameter is an integer value signed with needed (see `option` parameter above).


```js
google_home.EurekaInfo({
  "params": "",
  "options": "",
  "nonce": 0
}, context)
```

#### Input
* input `object`
  * params **required** `string`
  * options **required** `string`
  * nonce **required** `integer`

#### Output
* output [Example1](#example1)

### forget_wifi.post
This is to forget a saved network by `wpa_id`. Get the `wpa_id` from /setup/configured_networks


```js
google_home.forget_wifi.post({
  "body": {
    "wpa_id": 0
  }
}, context)
```

#### Input
* input `object`
  * body **required** [ForgetWi-FiNetworkRequest](#forgetwi-finetworkrequest)

#### Output
* output `object`

### AppDeviceID
This gives "app device id", "certificate" and "signed data".  
The `app_id` in the request is mandatory and refers to Chromecast backdrop/screensaver app. It has to be set to `E8C28D3C`.  

The certificate is valid and issued by `Chromecast ICA 6 (Audio Assist), Google Inc`.

Not sure what the other two are.


```js
google_home.AppDeviceID({
  "body": {
    "app_id": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** [AppDeviceIDRequest](#appdeviceidrequest)

#### Output
* output [Example11](#example11)

### ChromecastIcon
**Update:** This no longer exists. It's not useful, anyway.

A redirect to `http://www.gstatic.com/eureka/images/eureka_device.png`


```js
google_home.ChromecastIcon(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### Offer
This gives a token which is used by the Home app to get offers. The offers themselves are not stored on the device.  
A new token is generated for every request.


```js
google_home.Offer(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [Example12](#example12)

### RebootandFactoryReset
This can simply reboot the device (`params: "now"`) or factory reset the device (`params: "fdr"`).


```js
google_home.RebootandFactoryReset({
  "body": {
    "params": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** [RebootandFactoryResetRequest](#rebootandfactoryresetrequest)

#### Output
* output `object`

### scan_results.get
This gets a list of all nearby Wi-Fi access points.

The list only has the connected AP by default. Once a scan is triggered by `/setup/scan_wifi`, the whole list is cached for ~3 minutes. Then it will revert to returning only the connected AP again.


```js
google_home.scan_results.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [Example114](#example114)

### ScanforNetworks
This initiates scanning for Wi-Fi networks.

The results can be obtained with `/setup/scan_results` after triggering the scan with this request.


```js
google_home.ScanforNetworks(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`

### SetEurekaInfo
This can set custom values to some options.

Only fields to be modified need to be sent, not all. The example has some modifiable fields.

TODO: List all modifiable fields.

Sending non-existant fields will still return a 200 OK, but they are not saved.


```js
google_home.SetEurekaInfo({
  "body": {
    "name": "",
    "settings": {
      "control_notifications": 0
    },
    "opt_in": {
      "opencast": true,
      "preview_channel": true,
      "remote_ducking": true,
      "stats": true
    }
  }
}, context)
```

#### Input
* input `object`
  * body **required** [SetEurekaInfoRequest](#seteurekainforequest)

#### Output
* output `object`

### Locales
Simply returns a list of all supported locales.


```js
google_home.Locales(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [Example15](#example15)

### Timezones
Simply returns a list of all supported timezones.


```js
google_home.Timezones(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [Example14](#example14)

### TestInternetDownloadSpeed
**Update:** This seems to have been removed. Returns 404 Not Found.

This endpoint tests internet download speed. Any sample file URL can be provided.


```js
google_home.TestInternetDownloadSpeed({
  "body": {
    "url": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** [TestInternetDownloadSpeedRequest](#testinternetdownloadspeedrequest)

#### Output
* output [Example16](#example16)

### SetEqualizerValues
This can only set new equalizer values. To get already set values, use /setup/eureka_info.

The body is mandatory. It can either contain `low_shelf` or `high_shelf` or both.

`low_shelf.gain_db` and `high_shelf.gain_db` refer to **bass** and **treble** respectively.

Default values are 0 for both.  
While the slider in the Home app only ranges from -6 to +6, they can be set to any integer like 50 or -100. These changes persist.


```js
google_home.SetEqualizerValues({
  "body": {
    "low_shelf": {
      "gain_db": 0
    },
    "high_shelf": {
      "gain_db": 0
    }
  }
}, context)
```

#### Input
* input `object`
  * body **required** [SetEqualizerValuesRequest](#setequalizervaluesrequest)

#### Output
* output `object`



## Definitions

### AccessibilityRequest
* AccessibilityRequest `object`
  * endpoint_enabled **required** `boolean`
  * hotword_enabled **required** `boolean`

### Alarm
* Alarm `object`
  * date_pattern **required** [DatePattern](#datepattern)
  * fire_time **required** `number`
  * id **required** `string`
  * status **required** `integer`
  * time_pattern **required** [TimePattern](#timepattern)

### AlarmVolumeRequest
* AlarmVolumeRequest `object`
  * volume **required** `integer`

### Aogh
* Aogh `object`
  * aogh_api_version **required** `string`

### AppDeviceIDRequest
* AppDeviceIDRequest `object`
  * app_id **required** `string`

### Audio
* Audio `object`
  * digital **required** `boolean`

### BuildInfo
* BuildInfo `object`
  * build_type **required** `integer`
  * cast_build_revision **required** `string`
  * cast_control_version **required** `integer`
  * preview_channel_state **required** `integer`
  * release_track **required** `string`
  * system_build_number **required** `string`

### Capabilities
* Capabilities `object`
  * aogh_supported **required** `boolean`
  * assistant_supported **required** `boolean`
  * audio_hdr_supported **required** `boolean`
  * audio_surround_mode_supported **required** `boolean`
  * ble_supported **required** `boolean`
  * bluetooth_audio_sink_supported **required** `boolean`
  * bluetooth_audio_source_supported **required** `boolean`
  * bluetooth_supported **required** `boolean`
  * cloudcast_supported **required** `boolean`
  * content_filters_supported **required** `boolean`
  * display_supported **required** `boolean`
  * fdr_supported **required** `boolean`
  * hdmi_prefer_50hz_supported **required** `boolean`
  * hdmi_prefer_high_fps_supported **required** `boolean`
  * hotspot_supported **required** `boolean`
  * https_setup_supported **required** `boolean`
  * input_management_supported **required** `boolean`
  * keep_hotspot_until_connected_supported **required** `boolean`
  * multi_user_supported **required** `boolean`
  * multichannel_group_supported **required** `boolean`
  * multizone_supported **required** `boolean`
  * night_mode_supported **required** `boolean`
  * night_mode_supported_v2 **required** `boolean`
  * opencast_supported **required** `boolean`
  * preview_channel_supported **required** `boolean`
  * reboot_supported **required** `boolean`
  * remote_ducking_supported **required** `boolean`
  * separate_tts_volume_supported **required** `boolean`
  * setup_supported **required** `boolean`
  * sleep_mode_supported **required** `boolean`
  * stats_supported **required** `boolean`
  * system_sound_effects_supported **required** `boolean`
  * user_eq_supported **required** `boolean`
  * wifi_auto_save_supported **required** `boolean`
  * wifi_regulatory_domain_locked **required** `boolean`
  * wifi_supported **required** `boolean`

### ChangeDiscoverabilityRequest
* ChangeDiscoverabilityRequest `object`
  * enable_discovery **required** `boolean`

### CheckReadyStatusRequest
* CheckReadyStatusRequest `object`
  * play_ready_message **required** `boolean`
  * user_id **required** `string`

### ConnectedDevice
* ConnectedDevice `object`
  * device **required** [Device](#device)
  * enabled_profiles **required** `integer`

### ConnecttoWi-FiNetworkRequest
* ConnecttoWi-FiNetworkRequest `object`
  * bssid **required** `string`
  * enc_passwd **required** `string`
  * signal_level **required** `integer`
  * ssid **required** `string`
  * wpa_auth **required** `integer`
  * wpa_cipher **required** `integer`

### DatePattern
* DatePattern `object`
  * day **required** `integer`
  * month **required** `integer`
  * year **required** `integer`

### DeleteAlarmsandTimersRequest
* DeleteAlarmsandTimersRequest `object`
  * ids **required** `array`
    * items `string`

### Detail
* Detail `object`
  * icon_list **required** `array`
    * items [IconList](#iconlist)
  * locale **required** [Locale](#locale)
  * timezone **required** [Timezone](#timezone)

### Device
* Device `object`
  * bond_date **required** `number`
  * device_class **required** `integer`
  * device_type **required** `integer`
  * last_connect_date **required** `integer`
  * mac_address **required** `string`
  * name **required** `string`
  * rssi **required** `integer`
  * service_uuids **required** `array`
    * items `string`

### DeviceInfo
* DeviceInfo `object`
  * 4k_blocked **required** `integer`
  * capabilities **required** [Capabilities](#capabilities)
  * cloud_device_id **required** `string`
  * factory_country_code **required** `string`
  * hotspot_bssid **required** `string`
  * local_authorization_token_hash **required** `string`
  * mac_address **required** `string`
  * manufacturer **required** `string`
  * model_name **required** `string`
  * product_name **required** `string`
  * public_key **required** `string`
  * ssdp_udn **required** `string`
  * uma_client_id **required** `string`
  * uptime **required** `number`
  * weave_device_id **required** `string`

### Example1
* Example1 `object`
  * aogh **required** [Aogh](#aogh)
  * audio **required** [Audio](#audio)
  * build_info **required** [BuildInfo](#buildinfo)
  * detail **required** [Detail](#detail)
  * device_info **required** [DeviceInfo](#deviceinfo)
  * multizone **required** [Multizone](#multizone)
  * name **required** `string`
  * net **required** [Net](#net)
  * night_mode_params **required** [NightModeParams](#nightmodeparams)
  * opencast **required** [Opencast](#opencast)
  * opt_in **required** [OptIn](#optin)
  * proxy **required** [Proxy](#proxy)
  * settings **required** [Settings](#settings)
  * setup **required** [Setup](#setup)
  * sign **required** [Sign](#sign)
  * user_eq **required** [UserEq](#usereq)
  * version **required** `integer`
  * wifi **required** [Wifi](#wifi)

### Example11
* Example11 `object`
  * app_device_id **required** `string`
  * certificate **required** `string`
  * signed_data **required** `string`

### Example110
* Example110 `object`
  * audio_mode **required** `integer`
  * connected_devices **required** `array`
    * items [ConnectedDevice](#connecteddevice)
  * connecting_devices **required** `array`
    * items `string`
  * discovery_enabled **required** `boolean`
  * remote_sink **required** [RemoteSink](#remotesink)
  * scanning_enabled **required** `boolean`

### Example111
* Example111 `object`
  * bond_date **required** `number`
  * device_class **required** `integer`
  * device_type **required** `integer`
  * last_connect_date **required** `number`
  * mac_address **required** `string`
  * name **required** `string`
  * rssi **required** `integer`
  * service_uuids **required** `array`
    * items `string`

### Example112
* Example112 `object`
  * device_class **required** `integer`
  * device_type **required** `integer`
  * expected_profiles **required** `integer`
  * mac_address **required** `string`
  * name **required** `string`
  * rssi **required** `integer`

### Example113
* Example113 `object`
  * ssid **required** `string`
  * wpa_auth **required** `integer`
  * wpa_cipher **required** `integer`
  * wpa_id **required** `integer`

### Example114
* Example114 `object`
  * bssid **required** `string`
  * signal_level **required** `integer`
  * ssid **required** `string`
  * wpa_auth **required** `integer`
  * wpa_cipher **required** `integer`
  * wpa_id **required** `integer`

### Example12
* Example12 `object`
  * token **required** `string`

### Example13
* Example13 `object`
  * can_enroll **required** `boolean`
  * enrollment_state **required** `integer`
  * error_code **required** `integer`
  * ready **required** `boolean`
  * retryable **required** `boolean`

### Example14
* Example14 `object`
  * display_string **required** `string`
  * offset **required** `integer`
  * timezone **required** `string`

### Example15
* Example15 `object`
  * display_string **required** `string`
  * locale **required** `string`

### Example16
* Example16 `object`
  * bytes_received **required** `integer`
  * response_code **required** `integer`
  * time_for_data_fetch **required** `integer`
  * time_for_http_response **required** `integer`

### Example17
* Example17 `object`
  * do_not_disturb **required** `boolean`
  * enabled **required** `boolean`
  * led_brightness **required** `number`
  * volume **required** `number`
  * windows **required** `array`
    * items [Window2](#window2)

### Example18
* Example18 `object`
  * alarm **required** `array`
    * items [Alarm](#alarm)
  * timer **required** `array`
    * items [Timer](#timer)

### Example19
* Example19 `object`
  * success **required** `boolean`

### ForgetWi-FiNetworkRequest
* ForgetWi-FiNetworkRequest `object`
  * wpa_id **required** `integer`

### ForgetpaireddeviceRequest
* ForgetpaireddeviceRequest `object`
  * bond **required** `boolean`
  * mac_address **required** `string`

### Getcurrentstate
* Getcurrentstate `object`
  * notifications_enabled **required** `boolean`

### Getcurrentvalues
* Getcurrentvalues `object`
  * endpoint_enabled **required** `boolean`
  * hotword_enabled **required** `boolean`

### Getvolume
* Getvolume `object`
  * volume **required** `number`

### HighShelf
* HighShelf `object`
  * frequency **required** `integer`
  * gain_db **required** `integer`
  * quality **required** `number`

### HighShelf1
* HighShelf1 `object`
  * gain_db **required** `integer`

### IconList
* IconList `object`
  * depth **required** `integer`
  * height **required** `integer`
  * mimetype **required** `string`
  * url **required** `string`
  * width **required** `integer`

### Locale
* Locale `object`
  * display_string **required** `string`

### LowShelf
* LowShelf `object`
  * frequency **required** `integer`
  * gain_db **required** `integer`
  * quality **required** `number`

### LowShelf1
* LowShelf1 `object`
  * gain_db **required** `integer`

### Multizone
* Multizone `object`
  * audio_output_delay **required** `integer`
  * audio_output_delay_hdmi **required** `integer`
  * audio_output_delay_oem **required** `integer`
  * aux_in_group **required** `string`
  * dynamic_groups **required** `array`
    * items `string`
  * groups **required** `array`
    * items `string`
  * multichannel_status **required** `integer`

### Net
* Net `object`
  * ethernet_connected **required** `boolean`
  * ip_address **required** `string`
  * online **required** `boolean`

### NightModeParams
* NightModeParams `object`
  * device_override_do_not_disturb **required** `integer`
  * do_not_disturb **required** `boolean`
  * enabled **required** `boolean`
  * led_brightness **required** `number`
  * volume **required** `number`
  * windows **required** `array`
    * items [Window](#window)

### NightModesettingsRequest
* NightModesettingsRequest `object`
  * demo_to_user **required** `boolean`
  * do_not_disturb **required** `boolean`
  * enabled **required** `boolean`
  * led_brightness **required** `number`
  * volume **required** `number`
  * windows **required** `array`
    * items [Window](#window)

### Opencast
* Opencast `object`
  * pin_code **required** `string`

### OptIn
* OptIn `object`
  * audio_hdr **required** `boolean`
  * audio_surround_mode **required** `integer`
  * autoplay_on_signal **required** `boolean`
  * cloud_ipc **required** `boolean`
  * hdmi_prefer_50hz **required** `boolean`
  * hdmi_prefer_high_fps **required** `boolean`
  * managed_mode **required** `boolean`
  * opencast **required** `boolean`
  * preview_channel **required** `boolean`
  * remote_ducking **required** `boolean`
  * stats **required** `boolean`
  * ui_flipped **required** `boolean`
  * wpa3_support_enabled **required** `boolean`

### OptIn1
* OptIn1 `object`
  * opencast **required** `boolean`
  * preview_channel **required** `boolean`
  * remote_ducking **required** `boolean`
  * stats **required** `boolean`

### PairwithSpeakerRequest
* PairwithSpeakerRequest `object`
  * connect **required** `boolean`
  * mac_address **required** `string`
  * profile **required** `integer`

### Proxy
* Proxy `object`
  * mode **required** `string`

### RebootandFactoryResetRequest
* RebootandFactoryResetRequest `object`
  * params **required** `string`

### RemoteSink
* RemoteSink `object`
  * bond_date **required** `number`
  * device_class **required** `integer`
  * device_type **required** `integer`
  * last_connect_date **required** `integer`
  * mac_address **required** `string`
  * name **required** `string`
  * rssi **required** `integer`
  * service_uuids **required** `array`
    * items `string`

### ScanfordevicesRequest
* ScanfordevicesRequest `object`
  * clear_results **required** `boolean`
  * enable **required** `boolean`
  * timeout **required** `integer`

### SetEqualizerValuesRequest
* SetEqualizerValuesRequest `object`
  * high_shelf **required** [HighShelf1](#highshelf1)
  * low_shelf **required** [LowShelf1](#lowshelf1)

### SetEurekaInfoRequest
* SetEurekaInfoRequest `object`
  * name **required** `string`
  * opt_in **required** [OptIn1](#optin1)
  * settings **required** [Settings1](#settings1)

### Settings
* Settings `object`
  * closed_caption **required** `object`
  * control_notifications **required** `integer`
  * country_code **required** `string`
  * locale **required** `string`
  * network_standby **required** `integer`
  * system_sound_effects **required** `boolean`
  * time_format **required** `integer`
  * timezone **required** `string`
  * wake_on_cast **required** `integer`

### Settings1
* Settings1 `object`
  * control_notifications **required** `integer`

### Setup
* Setup `object`
  * qr_ssid_suffix **required** `string`
  * setup_state **required** `integer`
  * ssid_suffix **required** `string`
  * stats **required** [Stats](#stats)
  * tos_accepted **required** `boolean`

### Sign
* Sign `object`
  * certificate **required** `string`
  * intermediate_certs **required** `array`
    * items `string`
  * nonce **required** `string`
  * signed_data **required** `string`

### Stats
* Stats `object`
  * num_check_connectivity **required** `integer`
  * num_connect_wifi **required** `integer`
  * num_connected_wifi_not_saved **required** `integer`
  * num_initial_eureka_info **required** `integer`
  * num_obtain_ip **required** `integer`

### TestInternetDownloadSpeedRequest
* TestInternetDownloadSpeedRequest `object`
  * url **required** `string`

### TimePattern
* TimePattern `object`
  * hour **required** `integer`
  * minute **required** `integer`
  * second **required** `integer`

### Timer
* Timer `object`
  * fire_time **required** `integer`
  * id **required** `string`
  * original_duration **required** `integer`
  * status **required** `integer`

### Timezone
* Timezone `object`
  * display_string **required** `string`
  * offset **required** `integer`

### UserEq
* UserEq `object`
  * high_shelf **required** [HighShelf](#highshelf)
  * low_shelf **required** [LowShelf](#lowshelf)
  * max_peaking_eqs **required** `integer`
  * peaking_eqs **required** `array`
    * items `string`

### Wifi
* Wifi `object`
  * bssid **required** `string`
  * has_changes **required** `boolean`
  * noise_level **required** `integer`
  * signal_level **required** `integer`
  * ssid **required** `string`
  * wpa_configured **required** `boolean`
  * wpa_id **required** `integer`
  * wpa_state **required** `integer`

### Window
* Window `object`
  * days **required** `array`
    * items `integer`
  * length_hours **required** `integer`
  * start_hour **required** `integer`

### Window2
* Window2 `object`
  * days **required** `array`
    * items `integer`
  * length_hours **required** `number`
  * start_hour **required** `number`


