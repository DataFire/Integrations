# @datafire/apiz_ebay_commerce_identity

Client library for Identity API

## Installation and Usage
```bash
npm install --save @datafire/apiz_ebay_commerce_identity
```
```js
let apiz_ebay_commerce_identity = require('@datafire/apiz_ebay_commerce_identity').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

.then(data => {
  console.log(data);
});
```

## Description

Retrieves the authenticated user's account profile information. It can be used to let users log into your app or site using eBay, which frees you from needing to store and protect user's PII (Personal Identifiable Information) data.

## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
apiz_ebay_commerce_identity.oauthCallback({
  "code": ""
}, context)
```

#### Input
* input `object`
  * code **required** `string`

#### Output
* output `object`
  * access_token `string`
  * refresh_token `string`
  * token_type `string`
  * scope `string`
  * expiration `string`

### oauthRefresh
Exchange a refresh_token for an access_token


```js
apiz_ebay_commerce_identity.oauthRefresh(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * access_token `string`
  * refresh_token `string`
  * token_type `string`
  * scope `string`
  * expiration `string`

### getUser
This method retrieves the account profile information for an authenticated user, which requires a User access token. What is returned is controlled by the scopes. For a business account you use the default scope commerce.identity.readonly, which returns all the fields in the businessAccount container. These are returned because this is all public information. For an individual account, the fields returned in the individualAccount container are based on the scope you use. Using the default scope, only public information, such as eBay user ID, are returned. For details about what each scope returns, see the Identity API Overview. In the Sandbox, this API returns mock data. Note: You must use the correct scope or scopes for the data you want returned.


```js
apiz_ebay_commerce_identity.getUser(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [UserResponse](#userresponse)



## Definitions

### Address
* Address `object`: The type that defines the fields for an address.
  * addressLine1 `string`: The first line of the street address.
  * addressLine2 `string`: The second line of the street address. This field is not always used, but can be used for 'Suite Number' or 'Apt Number'.
  * city `string`: The city of the address.
  * country `string`: The two-letter ISO 3166 standard of the country of the address. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/commerce/identity/types/bas:CountryCodeEnum'>eBay API documentation</a>
  * county `string`: The county of the address.
  * postalCode `string`: The postal code of the address.
  * stateOrProvince `string`: The state or province of the address.

### BusinessAccount
* BusinessAccount `object`: The type that defines the fields for the business account information.
  * address [Address](#address)
  * doingBusinessAs `string`: An additional name that is used for their business on eBay. The business name is returned in the name field.
  * email `string`: The email address of the business account.
  * name `string`: The business name associated with the user's eBay account.
  * primaryContact [Contact](#contact)
  * primaryPhone [Phone](#phone)
  * secondaryPhone [Phone](#phone)
  * website `string`: The business website address associated with the eBay account.

### Contact
* Contact `object`: The type that defines the fields for the information of the contact person for the account.
  * firstName `string`: The first name of the contact person.
  * lastName `string`: The last name of the contact person.

### Error
* Error `object`: This type defines the fields that can be returned in an error.
  * parameters `array`: An array of name/value pairs that describe details the error condition. These are useful when multiple errors are returned.
    * items [ErrorParameter](#errorparameter)
  * category `string`: Identifies the type of erro.
  * domain `string`: Name for the primary system where the error occurred. This is relevant for application errors.
  * errorId `integer`: A unique number to identify the error.
  * inputRefIds `array`: An array of request elements most closely associated to the error.
    * items `string`
  * longMessage `string`: A more detailed explanation of the error.
  * message `string`: Information on how to correct the problem, in the end user's terms and language where applicable.
  * outputRefIds `array`: An array of request elements most closely associated to the error.
    * items `string`
  * subdomain `string`: Further helps indicate which subsystem the error is coming from. System subcategories include: Initialization, Serialization, Security, Monitoring, Rate Limiting, etc.

### ErrorParameter
* ErrorParameter `object`
  * name `string`: The object of the error.
  * value `string`: The value of the object.

### IndividualAccount
* IndividualAccount `object`: The type that defines the fields for the information of an individual account.
  * email `string`: The eBay user's registration email address.
  * firstName `string`: The eBay user's first name.
  * lastName `string`: The eBay user's last name.
  * primaryPhone [Phone](#phone)
  * registrationAddress [Address](#address)
  * secondaryPhone [Phone](#phone)

### Phone
* Phone `object`: The type that defines the fields for the details of a phone.
  * countryCode `string`: The two-letter ISO 3166 standard of the country to which the phone number belongs.
  * number `string`: The numeric string representing the phone number.
  * phoneType `string`: The type of phone service. Valid Values: MOBILE or LAND_LINE Code so that your app gracefully handles any future changes to this list.

### UserResponse
* UserResponse `object`: The type that defines the fields for the getUser method.
  * accountType `string`: Indicates the user account type. This is determined when the user registers with eBay. If they register for a business account, this value will be BUSINESS. If they register for a private account, this value will be INDIVIDUAL. This designation is required by the tax laws in the following countries: EBAY_AT, EBAY_BE, EBAY_CH, EBAY_DE, EBAY_ES, EBAY_FR, EBAY_GB, EBAY_IE, EBAY_IT, EBAY_PL Valid Values: BUSINESS or INDIVIDUAL Code so that your app gracefully handles any future changes to this list. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/commerce/identity/types/api:AccountTypeEnum'>eBay API documentation</a>
  * businessAccount [BusinessAccount](#businessaccount)
  * individualAccount [IndividualAccount](#individualaccount)
  * registrationMarketplaceId `string`: The eBay site on which the account is registered. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/commerce/identity/types/bas:MarketplaceIdEnum'>eBay API documentation</a>
  * status `string`: Indicates the user's account status. Possible values: CONFIRMED, UNCONFIRMED, ACCOUNTONHOLD and UNDETERMINED. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/commerce/identity/types/api:UserStatusEnum'>eBay API documentation</a>
  * userId `string`: The eBay immutable user ID of the user's account and can always be used to identify the user.
  * username `string`: The user name, which was specific by the user when they created the account. Note: This value can be changed by the user.


