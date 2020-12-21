# @datafire/vonage_user

Client library for User API

## Installation and Usage
```bash
npm install --save @datafire/vonage_user
```
```js
let vonage_user = require('@datafire/vonage_user').create({
  bearerAuth: ""
});

.then(data => {
  console.log(data);
});
```

## Description

The Vonage Business Cloud User API enables you to retrieve information about users.

Your application must subscribe to the Provisioning API suite to use this API.


## Actions

### UserCtrl.getUsers
Get account users data by account ID


```js
vonage_user.UserCtrl.getUsers({
  "account_id": ""
}, context)
```

#### Input
* input `object`
  * account_id **required** `string`: The Vonage Business Cloud account ID
  * page_size `number`: Number of records per page
  * page `number`: Current page number
  * first_name `string`: Filter by first name
  * last_name `string`: Filter by last name
  * login_name `string`: Filter by login name
  * email `string`: Filter by email address

#### Output
* output [UsersHalResponse](#usershalresponse)

### UserCtrl.getUserByID
Get user data by account ID and user ID


```js
vonage_user.UserCtrl.getUserByID({
  "account_id": "",
  "user_id": 0
}, context)
```

#### Input
* input `object`
  * account_id **required** `string`: The Vonage Business Cloud account ID
  * user_id **required** `number`: The Vonage Business Cloud user ID

#### Output
* output [UserHalResponse](#userhalresponse)



## Definitions

### Contact
* Contact `object`
  * type `string`: Contact type
  * value `string`: Contact value

### DID
* DID `object`
  * custom_tag `string`: Custom tag associated with the phone number
  * phone_number `string`: Phone number

### DetailedInvalidParam
* DetailedInvalidParam `object`
  * name `string`: Invalid property name
  * reason `string`: Invalid property reason

### ErrorResponse
* ErrorResponse `object`
  * msg `string`: Error message
  * status `number`: Http Response Code

### FirstHref
* FirstHref `object`: URL to the first page of records
  * href `string`

### LastHref
* LastHref `object`: URL to the last page of records
  * href `string`

### Links
* Links `object`
  * first [FirstHref](#firsthref)
  * next [NextHref](#nexthref)
  * prev [PrevHref](#prevhref)
  * self [SelfHref](#selfhref)

### NextHref
* NextHref `object`: URL to the next page of records
  * href `string`

### PrevHref
* PrevHref `object`: URL to the previous page of records
  * href `string`

### SelfHref
* SelfHref `object`: URL to the current page of records
  * href `string`

### User
* User `object`
  * contact_numbers `array`: Collection of contact objects
    * items [Contact](#contact)
  * email `string`: Email address of the user
  * extensions `array`: Collection of extension objects
    * items [UserExtension](#userextension)
  * first_name `string`: First name of the user
  * id `number`: Unique identifier of the user
  * last_name `string`: Last name of the user
  * login_name `string`: Login name of the user

### UserEmbeddedObject
* UserEmbeddedObject `object`
  * data [User](#user)

### UserExtension
* UserExtension `object`
  * dids `array`: Collection of phone numbers assigned to the extension
    * items [DID](#did)
  * extension_number `string`: Extension number

### UserHalResponse
* UserHalResponse `object`
  * _embedded [UserEmbeddedObject](#userembeddedobject)
  * _links [Links](#links)
  * page `number`: Current page number
  * page_size `number`: Number of records per page
  * total_items `number`: Total number of records
  * total_pages `number`: Total number of pages

### UsersEmbeddedObject
* UsersEmbeddedObject `object`
  * data `array`
    * items [User](#user)

### UsersHalResponse
* UsersHalResponse `object`
  * _embedded [UsersEmbeddedObject](#usersembeddedobject)
  * _links [Links](#links)
  * page `number`: Current page number
  * page_size `number`: Number of records per page
  * total_items `number`: Total number of records
  * total_pages `number`: Total number of pages

### ValidationErrorsResponse
* ValidationErrorsResponse `object`
  * instance `string`: Error Track ID
  * invalid_parameters `array`: Invalid parameters and their reason for failing
    * items [DetailedInvalidParam](#detailedinvalidparam)
  * status `number`: Error status code
  * title `string`: Error title


