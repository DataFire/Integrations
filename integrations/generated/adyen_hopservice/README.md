# @datafire/adyen_hopservice

Client library for Adyen for Platforms: Hosted Onboarding Page API

## Installation and Usage
```bash
npm install --save @datafire/adyen_hopservice
```
```js
let adyen_hopservice = require('@datafire/adyen_hopservice').create({
  ApiKeyAuth: "",
  username: "",
  password: ""
});

.then(data => {
  console.log(data);
});
```

## Description

The Hosted Onboarding Page (HOP) API provides endpoints for using the Hosted Onboarding Page. The related entities include account holders only. 
For more information, refer to our [documentation](https://docs.adyen.com/platforms/onboarding-and-verification/hosted-onboarding-page).
## Authentication
To connect to the HOP API, you must use basic authentication credentials of your web service user. If you don't have one, please contact the [Adyen Support Team](https://support.adyen.com/hc/en-us/requests/new). Then use its credentials to authenticate your request, for example:

```
curl
-U "ws@MarketPlace.YourMarketPlace":"YourWsPassword" \
-H "Content-Type: application/json" \
...
```
Note that when going live, you need to generate new web service user credentials to access the [live endpoints](https://docs.adyen.com/development-resources/live-endpoints).

## Versioning
The HOP API supports versioning of its endpoints through a version suffix in the endpoint URL. This suffix has the following format: "vXX", where XX is the version number.

For example:
```
https://cal-test.adyen.com/cal/services/Hop/v6/getOnboardingUrl
```

## Actions

### getOnboardingUrl.post
This endpoint is used to get a new onboarding url for a specific account holder. Each account holder represents a single sub-merchant, and each sub-merchant must be represented by an account holder. A returnUrl can also be specified as part of this request.


```js
adyen_hopservice.getOnboardingUrl.post({}, context)
```

#### Input
* input `object`
  * body [GetOnboardingUrlRequest](#getonboardingurlrequest)

#### Output
* output [GetOnboardingUrlResponse](#getonboardingurlresponse)



## Definitions

### ErrorFieldType
* ErrorFieldType `object`
  * errorCode `integer`: The validation error code.
  * errorDescription `string`: A description of the validation error.
  * fieldType [FieldType](#fieldtype)

### FieldType
* FieldType `object`
  * field `string`: The full name of the property.
  * fieldName `string` (values: accountCode, accountHolderCode, accountHolderDetails, accountNumber, accountStateType, accountStatus, accountType, address, bankAccount, bankAccountCode, bankAccountName, bankAccountUUID, bankBicSwift, bankCity, bankCode, bankName, bankStatement, branchCode, businessContact, cardToken, checkCode, city, companyRegistration, country, countryCode, currency, currencyCode, dateOfBirth, description, destinationAccountCode, document, documentExpirationDate, documentIssuerCountry, documentIssuerState, documentName, documentNumber, documentType, doingBusinessAs, drivingLicence, drivingLicenceBack, drivingLicense, email, firstName, fullPhoneNumber, gender, hopWebserviceUser, houseNumberOrName, iban, idCard, idCardBack, idCardFront, idNumber, identityDocument, individualDetails, lastName, legalBusinessName, legalEntity, legalEntityType, merchantAccount, merchantCategoryCode, merchantReference, microDeposit, name, nationality, originalReference, ownerCity, ownerCountryCode, ownerHouseNumberOrName, ownerName, ownerPostalCode, ownerState, ownerStreet, passport, passportNumber, payoutMethodCode, personalData, phoneCountryCode, phoneNumber, postalCode, primaryCurrency, reason, registrationNumber, returnUrl, schedule, shareholder, shareholderCode, socialSecurityNumber, sourceAccountCode, stateOrProvince, status, stockExchange, stockNumber, stockTicker, store, storeDetail, storeName, storeReference, street, taxId, tier, tierNumber, transferCode, unknown, value, virtualAccount, visaNumber, webAddress): The type of the field.
  * shareholderCode `string`: The code of the shareholder that the field belongs to. If empty, the field belongs to an account holder.

### GetOnboardingUrlRequest
* GetOnboardingUrlRequest `object`
  * accountHolderCode **required** `string`: The account holder code you provided when you created the account holder.
  * editMode `boolean`: Allows editing checks even if all the checks have passed.
  * platformName `string`: The platform name which will show up in the welcome page.
  * returnUrl `string`: The URL where the sub-merchant will be redirected back to after they complete the onboarding, or if their session times out. Maximum length of 500 characters. If you don't provide this, the sub-merchant will be redirected back to the default return URL configured in your platform account.

### GetOnboardingUrlResponse
* GetOnboardingUrlResponse `object`
  * invalidFields `array`: Contains field validation errors that would prevent requests from being processed.
    * items [ErrorFieldType](#errorfieldtype)
  * pspReference `string`: The reference of a request. Can be used to uniquely identify the request.
  * redirectUrl `string`: The URL to the Hosted Onboarding Page where you should redirect your sub-merchant. This URL must be used within 15 seconds and can only be used once.
  * resultCode `string`: The result code.


