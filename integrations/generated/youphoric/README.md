# @datafire/youphoric

Client library for Youphoric

## Installation and Usage
```bash
npm install --save datafire @datafire/youphoric
```

```js
let datafire = require('datafire');
let youphoric = require('@datafire/youphoric').actions;
let context = new datafire.Context();

youphoric.register.php_.get({}, context).then(data => {
  console.log(data);
})
```

## Description
Youphoric SMS API allows you to create and launch SMS-based apps quickly to reach Smart subscribers in the Philippines. 

## Actions
### register.php_.get



```js
youphoric.register.php_.get({
  "client": "",
  "FirstName": "",
  "LastName": "",
  "username": "",
  "password": null,
  "email": "",
  "contactno": ""
}, context)
```

#### Parameters
* client (string) **required**
* FirstName (string) **required** - First Name
* LastName (string) **required** - Last Name
* MiddleName (string) - Middle Name
* Street (string) - Street
* Barangay (string) - Barangay
* CityTown (string) - City or Town
* Province (string) - Province
* ZipCode (string) - Zip or Postal Code
* username (string) **required** - Username
* password (undefined) **required** - Password
* email (string) **required** - Email
* contactno (string) **required** - Mobile or Telephone

### mt.php_.post



```js
youphoric.mt.php_.post({
  "from": "",
  "to": "",
  "text": ""
}, context)
```

#### Parameters
* from (string) **required** - Characters limit 11
* to (string) **required** - Mobile Number.
* text (string) **required** - Text Message

