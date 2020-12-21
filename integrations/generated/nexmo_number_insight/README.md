# @datafire/nexmo_number_insight

Client library for Number Insight API

## Installation and Usage
```bash
npm install --save @datafire/nexmo_number_insight
```
```js
let nexmo_number_insight = require('@datafire/nexmo_number_insight').create({
  apiKey: "",
  apiSecret: ""
});

.then(data => {
  console.log(data);
});
```

## Description

The Number Insight API delivers real-time intelligence about the validity, reachability and roaming status of a phone number and tells you how to format the number correctly in your application. There are three levels of Number Insight API available: [Basic, Standard and Advanced](https://developer.nexmo.com/number-insight/overview#basic-standard-and-advanced-apis). The advanced API is available asynchronously as well as synchronously.

## Actions

### getNumberInsightAsync
Provides [advanced number insight](/number-insight/overview#basic-standard-and-advanced-apis) number information **asynchronously** using the URL specified in the `callback` parameter.  recommends asynchronous use of the Number Insight Advanced API, to avoid timeouts.

Note that this endpoint also supports `POST` requests.



```js
nexmo_number_insight.getNumberInsightAsync({
  "callback": "",
  "number": "",
  "format": ""
}, context)
```

#### Input
* input `object`
  * callback **required** `string`: The callback URL
  * number **required** `string`: A single phone number that you need insight about in national or international format.
  * country `string`: If a number does not have a country code or is uncertain, set the two-character country code. This code must be in ISO 3166-1 alpha-2 format and in upper case. For example, GB or US. If you set country and number is already in [E.164](https://en.wikipedia.org/wiki/E.164) format, country must match the country code in number.
  * cnam `boolean`: Indicates if the name of the person who owns the phone number should be looked up and returned in the response. Set to true to receive phone number owner name in the response. This features is available for US numbers only and incurs an additional charge.
  * ip `string`: This parameter is deprecated as we are no longer able to retrieve reliable IP data globally from carriers. 
  * format **required** `string` (values: json, xml): The format of the response

#### Output
* output [niResponseAsync](#niresponseasync)

### getNumberInsightAdvanced
Provides [advanced number insight](/number-insight/overview#basic-standard-and-advanced-apis) information about a number synchronously, in the same way that the basic and standard endpoints do.

Vonage recommends accessing the Advanced API **asynchronously** using the `/advanced/async` endpoint, to avoid timeouts.

Note that this endpoint also supports `POST` requests.



```js
nexmo_number_insight.getNumberInsightAdvanced({
  "number": "",
  "format": ""
}, context)
```

#### Input
* input `object`
  * number **required** `string`: A single phone number that you need insight about in national or international format.
  * country `string`: If a number does not have a country code or is uncertain, set the two-character country code. This code must be in ISO 3166-1 alpha-2 format and in upper case. For example, GB or US. If you set country and number is already in [E.164](https://en.wikipedia.org/wiki/E.164) format, country must match the country code in number.
  * cnam `boolean`: Indicates if the name of the person who owns the phone number should be looked up and returned in the response. Set to true to receive phone number owner name in the response. This features is available for US numbers only and incurs an additional charge.
  * ip `string`: This parameter is deprecated as we are no longer able to retrieve reliable IP data globally from carriers. 
  * format **required** `string` (values: json, xml): The format of the response

#### Output
* output [niResponseJsonAdvanced](#niresponsejsonadvanced)

### getNumberInsightBasic
Provides [basic number insight](/number-insight/overview#basic-standard-and-advanced-apis) information about a number.

Note that this endpoint also supports `POST` requests.



```js
nexmo_number_insight.getNumberInsightBasic({
  "number": "",
  "format": ""
}, context)
```

#### Input
* input `object`
  * number **required** `string`: A single phone number that you need insight about in national or international format.
  * country `string`: If a number does not have a country code or is uncertain, set the two-character country code. This code must be in ISO 3166-1 alpha-2 format and in upper case. For example, GB or US. If you set country and number is already in [E.164](https://en.wikipedia.org/wiki/E.164) format, country must match the country code in number.
  * format **required** `string` (values: json, xml): The format of the response

#### Output
* output [niResponseJsonBasic](#niresponsejsonbasic)

### getNumberInsightStandard
Provides [standard number insight](/number-insight/overview#basic-standard-and-advanced-apis) information about a number.

Note that this endpoint also supports `POST` requests.



```js
nexmo_number_insight.getNumberInsightStandard({
  "number": "",
  "format": ""
}, context)
```

#### Input
* input `object`
  * number **required** `string`: A single phone number that you need insight about in national or international format.
  * country `string`: If a number does not have a country code or is uncertain, set the two-character country code. This code must be in ISO 3166-1 alpha-2 format and in upper case. For example, GB or US. If you set country and number is already in [E.164](https://en.wikipedia.org/wiki/E.164) format, country must match the country code in number.
  * cnam `boolean`: Indicates if the name of the person who owns the phone number should be looked up and returned in the response. Set to true to receive phone number owner name in the response. This features is available for US numbers only and incurs an additional charge.
  * format **required** `string` (values: json, xml): The format of the response

#### Output
* output [niResponseJsonStandard](#niresponsejsonstandard)



## Definitions

### niBasicStatus
* niBasicStatus `integer` (values: 0, 1, 3, 4, 5, 9): Code | Text

### niCallerIdentity
* niCallerIdentity `object`: Information about the network `number` is currently connected to.
  * caller_name `string`: Full name of the person or business who owns the phone number. `unknown` if this information is not available. This parameter is only present if `cnam` had a value of `true` within the request.
  * caller_type `string` (values: business, consumer, unknown): The value will be `business` if the owner of a phone number is a business. If the owner is an individual the value will be `consumer`. The value will be `unknown` if this information is not available. This parameter is only present if `cnam` had a value of `true` within the request.
  * first_name `string`: First name of the person who owns the phone number if the owner is an individual. This parameter is only present if `cnam` had a value of `true` within the request.
  * last_name `string`: Last name of the person who owns the phone number if the owner is an individual. This parameter is only present if `cnam` had a value of `true` within the request.

### niCurrentCarrierProperties
* niCurrentCarrierProperties `object`: Information about the network `number` is currently connected to.
  * country `string`: The country that `number` is associated with. This is in ISO 3166-1 alpha-2   format.
  * name `string`: The full name of the carrier that `number` is associated with.
  * network_code `string`: The [https://en.wikipedia.org/wiki/Mobile_country_code](https://en.wikipedia.org/wiki/Mobile_country_code) for the carrier`number` is associated with. Unreal numbers are marked as`unknown` and the request is rejected altogether if the number is impossible according to the [E.164](https://en.wikipedia.org/wiki/E.164) guidelines.
  * network_type `string` (values: mobile, landline, landline_premium, landline_tollfree, virtual, unknown, pager): The type of network that `number` is associated with.

### niInitialCarrierProperties
* niInitialCarrierProperties `object`: Information about the network `number` is currently connected to.
  * country `string`: The country that `number` is associated with. This is in ISO 3166-1 alpha-2   format.
  * name `string`: The full name of the carrier that `number` is associated with.
  * network_code `string`: The [https://en.wikipedia.org/wiki/Mobile_country_code](https://en.wikipedia.org/wiki/Mobile_country_code) for the carrier`number` is associated with. Unreal numbers are marked as`unknown` and the request is rejected altogether if the number is impossible according to the [E.164](https://en.wikipedia.org/wiki/E.164) guidelines.
  * network_type `string` (values: mobile, landline, landline_premium, landline_tollfree, virtual, unknown, pager): The type of network that `number` is associated with.

### niResponseAsync
* niResponseAsync `object`
  * error_text `string`: The status description of your request. Note: This field is equivalent to `status_message` field in the other endpoints
  * number `string`: The `number` in your request
  * remaining_balance `string`: Your account balance in EUR after this request.
  * request_id `string`: The unique identifier for your request. This is a alphanumeric string up to 40 characters.
  * request_price `string`: If there is an internal lookup error, the `refund_price` will reflect the lookup price. If `cnam` is requested for a non-US number the `refund_price` will reflect the `cnam` price. If both of these conditions occur, `refund_price` is the sum of the lookup price and `cnam` price.
  * status [niStandardAdvancedStatus](#nistandardadvancedstatus)

### niResponseJsonAdvanced
* niResponseJsonAdvanced `object`: Advanced
  * caller_identity [niCallerIdentity](#nicalleridentity)
  * country_code **required** `string`: Two character country code for `number`. This is in [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) format.
  * country_code_iso3 **required** `string`: Three character country code for `number`. This is in [ISO 3166-1 alpha-3](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3) format.
  * country_name **required** `string`: The full name of the country that `number` is registered in.
  * country_prefix **required** `string`: The numeric prefix for the country that `number` is registered in.
  * current_carrier [niCurrentCarrierProperties](#nicurrentcarrierproperties)
  * international_format_number **required** `string`: The `number` in your request in international format.
  * lookup_outcome `integer` (values: 0, 1, 2): Shows if all information about a phone number has been returned. Possible values:
  * lookup_outcome_message `string`: Shows if all information about a phone number has been returned.
  * national_format_number **required** `string`: The `number` in your request in the format used by the country the number belongs to.
  * original_carrier [niInitialCarrierProperties](#niinitialcarrierproperties)
  * ported `string` (values: unknown, ported, not_ported, assumed_not_ported, assumed_ported): If the user has changed carrier for `number`. The assumed status means that the information supplier has replied to the request but has not said explicitly that the number is ported.
  * reachable `string` (values: unknown, reachable, undeliverable, absent, bad_number, blacklisted): Can you call `number` now. This is applicable to mobile numbers only.
  * refund_price `string`: If there is an internal lookup error, the `refund_price` will reflect the lookup price. If `cnam` is requested for a non-US number the `refund_price` will reflect the `cnam` price. If both of these conditions occur, `refund_price` is the sum of the lookup price and `cnam` price.
  * remaining_balance `string`: Your account balance in EUR after this request.
  * request_id **required** `string`: The unique identifier for your request. This is a alphanumeric string up to 40 characters.
  * request_price `string`: The amount in EUR charged to your account.
  * roaming [niRoaming](#niroaming)
  * status **required** [niStandardAdvancedStatus](#nistandardadvancedstatus)
  * status_message **required** `string`: The status description of your request.
  * valid_number `string` (values: unknown, valid, not_valid, inferred, inferred_not_valid): Does `number` exist. `unknown` means the number could not be validated. `valid` means the number is valid. `not_valid` means the number is not valid. `inferred_not_valid` means that the number could not be determined as valid or invalid via an external system and the best guess is that the number is invalid. This is applicable to mobile numbers only.

### niResponseJsonBasic
* niResponseJsonBasic `object`
  * country_code `string`: Two character country code for `number`. This is in [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) format.
  * country_code_iso3 `string`: Three character country code for `number`. This is in [ISO 3166-1 alpha-3](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3) format.
  * country_name `string`: The full name of the country that `number` is registered in.
  * country_prefix `string`: The numeric prefix for the country that `number` is registered in.
  * international_format_number `string`: The `number` in your request in international format.
  * national_format_number `string`: The `number` in your request in the format used by the country the number belongs to.
  * request_id `string`: The unique identifier for your request. This is a alphanumeric string up to 40 characters.
  * status [niBasicStatus](#nibasicstatus)
  * status_message `string`: The status description of your request.

### niResponseJsonStandard
* niResponseJsonStandard
  * country_code `string`: Two character country code for `number`. This is in [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) format.
  * country_code_iso3 `string`: Three character country code for `number`. This is in [ISO 3166-1 alpha-3](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3) format.
  * country_name `string`: The full name of the country that `number` is registered in.
  * country_prefix `string`: The numeric prefix for the country that `number` is registered in.
  * international_format_number `string`: The `number` in your request in international format.
  * national_format_number `string`: The `number` in your request in the format used by the country the number belongs to.
  * request_id `string`: The unique identifier for your request. This is a alphanumeric string up to 40 characters.
  * status [niBasicStatus](#nibasicstatus)
  * status_message `string`: The status description of your request.
  * caller_identity [niCallerIdentity](#nicalleridentity)
  * caller_name `string`: Full name of the person or business who owns the phone number. `unknown` if this information is not available. This parameter is only present if `cnam` had a value of `true` within the request.
  * caller_type `string` (values: business, consumer, unknown): The value will be `business` if the owner of a phone number is a business. If the owner is an individual the value will be `consumer`. The value will be `unknown` if this information is not available. This parameter is only present if `cnam` had a value of `true` within the request.
  * current_carrier [niCurrentCarrierProperties](#nicurrentcarrierproperties)
  * first_name `string`: First name of the person who owns the phone number if the owner is an individual. This parameter is only present if `cnam` had a value of `true` within the request.
  * last_name `string`: Last name of the person who owns the phone number if the owner is an individual. This parameter is only present if `cnam` had a value of `true` within the request.
  * original_carrier [niInitialCarrierProperties](#niinitialcarrierproperties)
  * ported `string` (values: unknown, ported, not_ported, assumed_not_ported, assumed_ported): If the user has changed carrier for `number`. The assumed status means that the information supplier has replied to the request but has not said explicitly that the number is ported.
  * refund_price `string`: If there is an internal lookup error, the `refund_price` will reflect the lookup price. If `cnam` is requested for a non-US number the `refund_price` will reflect the `cnam` price. If both of these conditions occur, `refund_price` is the sum of the lookup price and `cnam` price.
  * remaining_balance `string`: Your account balance in EUR after this request.
  * request_price `string`: The amount in EUR charged to your account.
  * roaming [niRoaming](#niroaming)

### niResponseXmlAdvanced
* niResponseXmlAdvanced `object`: Advanced
  * caller_identity `object`: Contains details of the number owner, if `cnam` was set to `true` in the request.
    * caller-name `string`: Full name of the person or business who owns the phone number. `unknown` if this information is not available. This parameter is only present if `cnam` had a value of `true` within the request.
    * caller-type `string` (values: business, consumer, unknown): The value will be `business` if the owner of a phone number is a business. If the owner is an individual the value will be `consumer`. The value will be `unknown` if this information is not available. This parameter is only present if `cnam` had a value of `true` within the request.
    * first-name `string`: First name of the person who owns the phone number if the owner is an individual. This parameter is only present if `cnam` had a value of `true` within the request.
    * last-name `string`: Last name of the person who owns the phone number if the owner is an individual. This parameter is only present if `cnam` had a value of `true` within the request.
  * caller_name `string`: Full name of the person or business who owns the phone number. `unknown` if this information is not available. This parameter is only present if `cnam` had a value of `true` within the request.
  * caller_type `string` (values: business, consumer, unknown): The value will be `business` if the owner of a phone number is a business. If the owner is an individual the value will be `consumer`. The value will be `unknown` if this information is not available. This parameter is only present if `cnam` had a value of `true` within the request.
  * current_carrier [niCurrentCarrierProperties](#nicurrentcarrierproperties)
  * error `object`: The error code and status of your request
    * code `string`: The status code
    * status_text `string`: The status description of your request.
  * firs_name `string`: First name of the person who owns the phone number if the owner is an individual. This parameter is only present if `cnam` had a value of `true` within the request.
  * international_format_number `string`: The `number` in your request in international format.
  * ip_warnings `string`: This property is deprecated and can safely be ignored.
  * last_name `string`: Last name of the person who owns the phone number if the owner is an individual. This parameter is only present if `cnam` had a value of `true` within the request.
  * local_number `object`: An object containing the `number` in your request in the format used by the country the number belongs to.
    * country_code `string`: Two character country code for `number`. This is in [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) format.
    * country_code_iso3 `string`: Three character country code for `number`. This is in [ISO 3166-1 alpha-3](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3) format.
    * country_name `string`: The full name of the country that `number` is registered in.
    * country_prefix `string`: The numeric prefix for the country that `number` is registered in.
    * number `string`: The `number` in your request in the format used by the country the number belongs to.
  * lookup_outcome `object`: An object indicating whether all information about a phone number has been returned.
    * code `number` (values: 0, 1, 2): Shows if all information about a phone number has been returned. Possible values:
    * lookup_outcome_message `string`: Shows if all information about a phone number has been returned.
  * original_carrier [niInitialCarrierProperties](#niinitialcarrierproperties)
  * ported `object`: If the user has changed carrier for `number`. The assumed status means that the information supplier has replied to the request but has not said explicitly that the number is ported.
    * ported_message `string` (values: unknown, ported, not_ported, assumed_not_ported, assumed_ported): If the user has changed carrier for `number`. The assumed status means that the information supplier has replied to the request but has not said explicitly that the number is ported.
  * reachable `string` (values: unknown, reachable, undeliverable, absent, bad_number, blacklisted): Can you call `number` now. This is applicable to mobile numbers only.
  * remaining_balance `string`: Your account balance in EUR after this request.
  * request_id `string`: The unique identifier for your request. This is a alphanumeric string up to 40 characters.
  * request_price `string`: If there is an internal lookup error, the `refund_price` will reflect the lookup price. If `cnam` is requested for a non-US number the `refund_price` will reflect the `cnam` price. If both of these conditions occur, `refund_price` is the sum of the lookup price and `cnam` price.
  * roaming [niRoaming](#niroaming)
  * valid_number `string` (values: unknown, valid, not_valid, inferred_not_valid): Does `number` exist. `unknown` means the number could not be validated. `valid` means the number is valid. `not_valid` means the number is not valid. `inferred_not_valid` means that the number could not be determined as valid or invalid via an external system and the best guess is that the number is invalid. This is applicable to mobile numbers only.

### niResponseXmlBasic
* niResponseXmlBasic `object`: Basic
  * error `object`: The error code and status of your request
    * code `string`: The status code
    * status_text `string`: The status description of your request.
  * international_format_number `string`: The `number` in your request in international format.
  * local_number `object`: An object containing the `number` in your request in the format used by the country the number belongs to.
    * country_code `string`: Two character country code for `number`. This is in [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) format.
    * country_code_iso3 `string`: Three character country code for `number`. This is in [ISO 3166-1 alpha-3](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3) format.
    * country_name `string`: The full name of the country that `number` is registered in.
    * country_prefix `string`: The numeric prefix for the country that `number` is registered in.
    * number `string`: The `number` in your request in the format used by the country the number belongs to.
  * request_id `string`: The unique identifier for your request. This is a alphanumeric string up to 40 characters.

### niResponseXmlStandard
* niResponseXmlStandard `object`: Standard
  * caller_identity `object`: Contains details of the number owner, if `cnam` was set to `true` in the request.
    * caller-name `string`: Full name of the person or business who owns the phone number. `unknown` if this information is not available. This parameter is only present if `cnam` had a value of `true` within the request.
    * caller-type `string` (values: business, consumer, unknown): The value will be `business` if the owner of a phone number is a business. If the owner is an individual the value will be `consumer`. The value will be `unknown` if this information is not available. This parameter is only present if `cnam` had a value of `true` within the request.
    * caller_name `string`: Full name of the person or business who owns the phone number. `unknown` if this information is not available. This parameter is only present if `cnam` had a value of `true` within the request.
    * caller_type `string` (values: business, consumer, unknown): The value will be `business` if the owner of a phone number is a business. If the owner is an individual the value will be `consumer`. The value will be `unknown` if this information is not available. This parameter is only present if `cnam` had a value of `true` within the request.
    * firs_name `string`: First name of the person who owns the phone number if the owner is an individual. This parameter is only present if `cnam` had a value of `true` within the request.
    * first-name `string`: First name of the person who owns the phone number if the owner is an individual. This parameter is only present if `cnam` had a value of `true` within the request.
    * last-name `string`: Last name of the person who owns the phone number if the owner is an individual. This parameter is only present if `cnam` had a value of `true` within the request.
    * last_name `string`: Last name of the person who owns the phone number if the owner is an individual. This parameter is only present if `cnam` had a value of `true` within the request.
  * current_carrier [niCurrentCarrierProperties](#nicurrentcarrierproperties)
  * error `object`: The error code and status of your request
    * code `string`: The status code
    * status_text `string`: The status description of your request.
  * international_format_number `string`: The `number` in your request in international format.
  * local_number `object`: An object containing the `number` in your request in the format used by the country the number belongs to.
    * country_code `string`: Two character country code for `number`. This is in [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) format.
    * country_code_iso3 `string`: Three character country code for `number`. This is in [ISO 3166-1 alpha-3](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3) format.
    * country_name `string`: The full name of the country that `number` is registered in.
    * country_prefix `string`: The numeric prefix for the country that `number` is registered in.
    * number `string`: The `number` in your request in the format used by the country the number belongs to.
  * original_carrier [niInitialCarrierProperties](#niinitialcarrierproperties)
  * ported `object`: If the user has changed carrier for number. The assumed status means that the information supplier has replied to the request but has not said explicitly that the number is ported
    * ported_message `string` (values: unknown, ported, not_ported, assumed_not_ported, assumed_ported): If the user has changed carrier for `number`. The assumed status means that the information supplier has replied to the request but has not said explicitly that the number is ported.
  * remaining_balance `string`: Your account balance in EUR after this request.
  * request_id `string`: The unique identifier for your request. This is a alphanumeric string up to 40 characters.
  * request_price `string`: If there is an internal lookup error, the `refund_price` will reflect the lookup price. If `cnam` is requested for a non-US number the `refund_price` will reflect the `cnam` price. If both of these conditions occur, `refund_price` is the sum of the lookup price and `cnam` price.
  * roaming `object`: Information about the roaming status for number. This is applicable to mobile numbers only.
    * status `string` (values: unknown)

### niRoaming
* niRoaming `object`: Information about the roaming status for `number`. This is applicable to mobile numbers only.
  * roaming_country_code `string`: If `number` is `roaming`, this is the [code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) of the country `number` is roaming in.
  * roaming_network_code `string`: If `number` is `roaming`, this is the id of the carrier network `number` is roaming in.
  * roaming_network_name `string`: If `number` is `roaming`, this is the name of the carrier network `number` is roaming in.
  * status `string` (values: unknown, roaming, not_roaming): Is `number` outside its home carrier network.

### niStandardAdvancedStatus
* niStandardAdvancedStatus `integer` (values: 0, 1, 3, 4, 5, 9, 19, 43, 44, 45, 999): Code | Text


