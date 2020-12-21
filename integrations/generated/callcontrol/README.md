# @datafire/callcontrol

Client library for Call Control API

## Installation and Usage
```bash
npm install --save @datafire/callcontrol
```
```js
let callcontrol = require('@datafire/callcontrol').create({
  apiKey: ""
});

.then(data => {
  console.log(data);
});
```

## Description

API for blocking phone calls with Call Control. Data is from crowdsourced community blacklist from 12+ million users and government agencies (FTC, FCC, IRS) Try with api_key 'demo', hit explore above, and then try phone numbers 18008472911,13157244022,17275567300,18008276655,12061231234.

## Actions

### Complaints_Complaints
This is the main funciton to get data out of the call control reporting system<br />
            Try with api_key 'demo' and phone numbers 18008472911, 13157244022, 17275567300, 18008276655, and 12061231234 (last one not spam)


```js
callcontrol.Complaints_Complaints({
  "phoneNumber": ""
}, context)
```

#### Input
* input `object`
  * phoneNumber **required** `string`: phone number to search

#### Output
* output [Complaints](#complaints)

### EnterpriseApi_GetUser
Enterprise  GET: GetUser
Returns the current information from the user;  try 12066194123 as demo


```js
callcontrol.EnterpriseApi_GetUser({
  "phoneNumber": ""
}, context)
```

#### Input
* input `object`
  * phoneNumber **required** `string`

#### Output
* output [CallControlUser](#callcontroluser)

### EnterpriseApi_ShouldBlock
This returns information required to perform basic call blocking behaviors
            Try with api_key 'demo' and phone numbers 18008472911, 13157244022, 17275567300, 18008276655, and 12061231234 (last one not spam)


```js
callcontrol.EnterpriseApi_ShouldBlock({
  "phoneNumber": "",
  "userPhoneNumber": ""
}, context)
```

#### Input
* input `object`
  * phoneNumber **required** `string`: phone number to search
  * userPhoneNumber **required** `string`: (OPTIONAL) phone number of user to look up block rules

#### Output
* output `string` (values: allow, voiceMail, block)

### EnterpriseApi_UpsertUser
UpsertUser: insert or update all properties from a user
PhoneNumber
WhiteList (list of phone numbers to whitelist)
BlackList (list of phone numbers to blacklist)
QuietHourList (list of quiet hour objects)
UseCommunityBlacklist (enable / disable community blacklist) default true
BreakThroughQhWithMultipleCalls (break through quiet hours with two calls in 3 minutes)
WhiteListBreaksQh (break through quiet hours for whitelist)


```js
callcontrol.EnterpriseApi_UpsertUser({
  "user": {}
}, context)
```

#### Input
* input `object`
  * user **required** [CallControlUser](#callcontroluser)

#### Output
* output `object`

### Reputation_Report
This returns information required to perform basic call blocking behaviors<br />
            Try with api_key 'demo' and phone numbers 18008472911, 13157244022, 17275567300, 18008276655, and 12061231234 (last one not spam)


```js
callcontrol.Reputation_Report({
  "callReport": {}
}, context)
```

#### Input
* input `object`
  * callReport **required** [CallReport](#callreport)

#### Output
*Output schema unknown*

### Reputation_Reputation
This returns information required to perform basic call blocking behaviors<br />
            Try with api_key 'demo' and phone numbers 18008472911, 13157244022, 17275567300, 18008276655, and 12061231234 (last one not spam)


```js
callcontrol.Reputation_Reputation({
  "phoneNumber": ""
}, context)
```

#### Input
* input `object`
  * phoneNumber **required** `string`: phone number to search

#### Output
* output [Reputation](#reputation)



## Definitions

### CallControlUser
* CallControlUser `object`
  * Age `integer`
  * BlackList `array`
    * items `string`
  * BlockBehavior `string` (values: allow, voiceMail, block)
  * BreakThroughQhWithMultipleCalls `boolean`
  * Email `string`
  * FirstName `string`
  * Gender `string`
  * LastName `string`
  * MiddleName `string`
  * PhoneNumbeRegion `string`
  * PhoneNumber `string`
  * QuietHourList `array`
    * items [QuietHour](#quiethour)
  * Salutation `string`
  * Suffix `string`
  * UseCommunityBlacklist `boolean`
  * WhiteList `array`
    * items `string`
  * WhiteListBreaksQh `boolean`

### CallReport
* CallReport `object`: Call Report
  * CallTime `string`
  * CallerType `string` (values: Unknown, Telemarketing, Collection_Agency, Political, Surveyor, Prank_Call, Fund_Raiser, Other_Commercial, Scam, VOIP, Business, Reminder_Notification_Call, Junk_Fax, Fax_Machine, Spam_Text, RoboCall, NotSpam, Callback)
  * Comment `string`
  * IpAddress `string`
  * Latitude `number`
  * Longitude `number`
  * PhoneNumber `string`
  * ReportedCallerId `string`
  * ReportedCallerName `string`
  * Reporter `string`
  * UnwantedCall `boolean`

### Complaints
* Complaints `object`: Free service (with registration) which serves Government Do Not Call data via API 
  * ComplaintsByEntity `object`
  * LastComplaintDate `string`
  * ReportedCallerName `string`: Reported Caller Name
  * Tags `array`
    * items `string`
  * TotalNumberOfComplaints `integer`

### QuietHour
* QuietHour `object`
  * DayOfWeekList `array`
    * items `string` (values: Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday)
  * DurationMin `integer`
  * StartHourLocal `integer`
  * StartMinLocal `integer`
  * TimeZoneName `string`

### Reputation
* Reputation `object`
  * CallType `string`
  * Confidence `integer`
  * IsSpam `boolean`
  * LastComplaintDate `string`
  * ReportedCallerName `string`
  * Tags `array`
    * items `string`


