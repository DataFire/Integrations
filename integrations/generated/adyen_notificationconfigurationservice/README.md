# @datafire/adyen_notificationconfigurationservice

Client library for Adyen for Platforms: Notification Configuration API

## Installation and Usage
```bash
npm install --save @datafire/adyen_notificationconfigurationservice
```
```js
let adyen_notificationconfigurationservice = require('@datafire/adyen_notificationconfigurationservice').create({
  ApiKeyAuth: "",
  username: "",
  password: ""
});

.then(data => {
  console.log(data);
});
```

## Description

The Notification Configuration API provides endpoints for setting up and testing notifications that inform you of events on your platform, for example when a KYC check or a payout has been completed.

For more information, refer to our [documentation](https://docs.adyen.com/platforms/marketpay-notifications).
## Authentication
To connect to the Notification Configuration API, you must use basic authentication credentials of your web service user. If you don't have one, contact our [Adyen Support Team](https://support.adyen.com/hc/en-us/requests/new). Then use its credentials to authenticate your request, for example:

```
curl
-U "ws@MarketPlace.YourMarketPlace":"YourWsPassword" \
-H "Content-Type: application/json" \
...
```
Note that when going live, you need to generate new web service user credentials to access the [live endpoints](https://docs.adyen.com/development-resources/live-endpoints).

## Versioning
The Notification Configuration API supports versioning of its endpoints through a version suffix in the endpoint URL. This suffix has the following format: "vXX", where XX is the version number.

For example:
```
https://cal-test.adyen.com/cal/services/Notification/v6/createNotificationConfiguration
```

## Actions

### createNotificationConfiguration.post
Creates a subscription to notifications informing you of events on your platform. After the subscription is created, the events specified in the configuration will be sent to the URL specified in the configuration. Subscriptions must be configured on a per-event basis (as opposed to, for example, a per-account holder basis), so all event notifications of a marketplace and of a given type will be sent to the same endpoint(s). A marketplace may have multiple endpoints if desired; an event notification may be sent to as many or as few different endpoints as configured.


```js
adyen_notificationconfigurationservice.createNotificationConfiguration.post({}, context)
```

#### Input
* input `object`
  * body [CreateNotificationConfigurationRequest](#createnotificationconfigurationrequest)

#### Output
* output [GetNotificationConfigurationResponse](#getnotificationconfigurationresponse)

### deleteNotificationConfigurations.post
This endpoint is used to delete an existing notification subscription configuration. After the subscription is deleted, no further event notifications will be sent to the URL that was in the subscription.


```js
adyen_notificationconfigurationservice.deleteNotificationConfigurations.post({}, context)
```

#### Input
* input `object`
  * body [DeleteNotificationConfigurationRequest](#deletenotificationconfigurationrequest)

#### Output
* output [GenericResponse](#genericresponse)

### getNotificationConfiguration.post
This endpoint is used to retrieve the details of the configuration of a notification subscription.


```js
adyen_notificationconfigurationservice.getNotificationConfiguration.post({}, context)
```

#### Input
* input `object`
  * body [GetNotificationConfigurationRequest](#getnotificationconfigurationrequest)

#### Output
* output [GetNotificationConfigurationResponse](#getnotificationconfigurationresponse)

### getNotificationConfigurationList.post
This endpoint is used to retrieve the details of the configurations of all of the notification subscriptions in the marketplace of the executing user.


```js
adyen_notificationconfigurationservice.getNotificationConfigurationList.post({}, context)
```

#### Input
* input `object`
  * body [EmptyRequest](#emptyrequest)

#### Output
* output [GetNotificationConfigurationListResponse](#getnotificationconfigurationlistresponse)

### testNotificationConfiguration.post
This endpoint is used to test an existing notification subscription configuration. For each event type specified, a test notification will be generated and sent to the URL configured in the subscription specified.


```js
adyen_notificationconfigurationservice.testNotificationConfiguration.post({}, context)
```

#### Input
* input `object`
  * body [TestNotificationConfigurationRequest](#testnotificationconfigurationrequest)

#### Output
* output [TestNotificationConfigurationResponse](#testnotificationconfigurationresponse)

### updateNotificationConfiguration.post
This endpoint is used to update an existing notification subscription configuration. If updating the event types, all event types desired must be provided, otherwise the previous event type configuration will be overwritten.


```js
adyen_notificationconfigurationservice.updateNotificationConfiguration.post({}, context)
```

#### Input
* input `object`
  * body [UpdateNotificationConfigurationRequest](#updatenotificationconfigurationrequest)

#### Output
* output [GetNotificationConfigurationResponse](#getnotificationconfigurationresponse)



## Definitions

### CreateNotificationConfigurationRequest
* CreateNotificationConfigurationRequest `object`
  * configurationDetails **required** [NotificationConfigurationDetails](#notificationconfigurationdetails)

### DeleteNotificationConfigurationRequest
* DeleteNotificationConfigurationRequest `object`
  * notificationIds **required** `array`: A list of IDs of the notification subscription configurations to be deleted.
    * items `integer`

### EmptyRequest


### ErrorFieldType
* ErrorFieldType `object`
  * errorCode `integer`: The validation error code.
  * errorDescription `string`: A description of the validation error.
  * fieldType [FieldType](#fieldtype)

### ExchangeMessage
* ExchangeMessage `object`
  * messageCode `string`
  * messageDescription `string`

### FieldType
* FieldType `object`
  * field `string`: The full name of the property.
  * fieldName `string` (values: accountCode, accountHolderCode, accountHolderDetails, accountNumber, accountStateType, accountStatus, accountType, address, bankAccount, bankAccountCode, bankAccountName, bankAccountUUID, bankBicSwift, bankCity, bankCode, bankName, bankStatement, branchCode, businessContact, cardToken, checkCode, city, companyRegistration, country, countryCode, currency, currencyCode, dateOfBirth, description, destinationAccountCode, document, documentExpirationDate, documentIssuerCountry, documentIssuerState, documentName, documentNumber, documentType, doingBusinessAs, drivingLicence, drivingLicenceBack, drivingLicense, email, firstName, fullPhoneNumber, gender, hopWebserviceUser, houseNumberOrName, iban, idCard, idCardBack, idCardFront, idNumber, identityDocument, individualDetails, lastName, legalBusinessName, legalEntity, legalEntityType, merchantAccount, merchantCategoryCode, merchantReference, microDeposit, name, nationality, originalReference, ownerCity, ownerCountryCode, ownerHouseNumberOrName, ownerName, ownerPostalCode, ownerState, ownerStreet, passport, passportNumber, payoutMethodCode, personalData, phoneCountryCode, phoneNumber, postalCode, primaryCurrency, reason, registrationNumber, returnUrl, schedule, shareholder, shareholderCode, socialSecurityNumber, sourceAccountCode, stateOrProvince, status, stockExchange, stockNumber, stockTicker, store, storeDetail, storeName, storeReference, street, taxId, tier, tierNumber, transferCode, unknown, value, virtualAccount, visaNumber, webAddress): The type of the field.
  * shareholderCode `string`: The code of the shareholder that the field belongs to. If empty, the field belongs to an account holder.

### GenericResponse
* GenericResponse `object`
  * invalidFields `array`: Contains field validation errors that would prevent requests from being processed.
    * items [ErrorFieldType](#errorfieldtype)
  * pspReference `string`: The reference of a request. Can be used to uniquely identify the request.
  * resultCode `string`: The result code.

### GetNotificationConfigurationListResponse
* GetNotificationConfigurationListResponse `object`
  * configurations **required** `array`: Details of the notification subscription configurations.
    * items [NotificationConfigurationDetails](#notificationconfigurationdetails)
  * invalidFields `array`: Contains field validation errors that would prevent requests from being processed.
    * items [ErrorFieldType](#errorfieldtype)
  * pspReference `string`: The reference of a request. Can be used to uniquely identify the request.
  * resultCode `string`: The result code.

### GetNotificationConfigurationRequest
* GetNotificationConfigurationRequest `object`
  * notificationId **required** `integer`: The ID of the notification subscription configuration whose details are to be retrieved.

### GetNotificationConfigurationResponse
* GetNotificationConfigurationResponse `object`
  * configurationDetails **required** [NotificationConfigurationDetails](#notificationconfigurationdetails)
  * invalidFields `array`: Contains field validation errors that would prevent requests from being processed.
    * items [ErrorFieldType](#errorfieldtype)
  * pspReference `string`: The reference of a request. Can be used to uniquely identify the request.
  * resultCode `string`: The result code.

### NotificationConfigurationDetails
* NotificationConfigurationDetails `object`
  * active `boolean`: Indicates whether the notification subscription is active.
  * apiVersion `integer`: The API version of the notification to send.
  * description `string`: A description of the notification subscription configuration.
  * eventConfigs **required** `array`: The types of events whose notifications apply to this configuration.
    * items [NotificationEventConfiguration](#notificationeventconfiguration)
  * hmacSignatureKey `string`: A string with which to salt the notification(s) before hashing. If this field is provided, a hash value will be included under the notification header `HmacSignature` and the hash protocol will be included under the notification header `Protocol`. A notification body along with its `hmacSignatureKey` and `Protocol` can be used to calculate a hash value; matching this hash value with the `HmacSignature` will ensure that the notification body has not been tampered with or corrupted.
  * notificationId `integer`: The ID of the configuration.
  * notifyPassword `string`: The password to use when accessing the notifyURL with the specified username.
  * notifyURL **required** `string`: The URL to which the notifications are to be sent.
  * notifyUsername `string`: The username to use when accessing the notifyURL.
  * sslProtocol `string` (values: SSL, SSLInsecureCiphers, TLS, TLSv10, TLSv10InsecureCiphers, TLSv11, TLSv12): The SSL protocol employed by the endpoint.

### NotificationEventConfiguration
* NotificationEventConfiguration `object`
  * eventType **required** `string` (values: ACCOUNT_CLOSED, ACCOUNT_CREATED, ACCOUNT_HOLDER_CREATED, ACCOUNT_HOLDER_LIMIT_REACHED, ACCOUNT_HOLDER_PAYOUT, ACCOUNT_HOLDER_STATUS_CHANGE, ACCOUNT_HOLDER_STORE_STATUS_CHANGE, ACCOUNT_HOLDER_UPCOMING_DEADLINE, ACCOUNT_HOLDER_UPDATED, ACCOUNT_HOLDER_VERIFICATION, ACCOUNT_UPDATED, BENEFICIARY_SETUP, COMPENSATE_NEGATIVE_BALANCE, DIRECT_DEBIT_INITIATED, PAYMENT_FAILURE, REFUND_FUNDS_TRANSFER, REPORT_AVAILABLE, SCHEDULED_REFUNDS, TRANSFER_FUNDS): The type of event triggering the notification.
  * includeMode **required** `string` (values: EXCLUDE, INCLUDE): Indicates whether the specified eventType is to be sent to the endpoint or all events other than the specified eventType (and other specified eventTypes) are to be sent.

### TestNotificationConfigurationRequest
* TestNotificationConfigurationRequest `object`
  * eventTypes `array`: The event types to test.  If left blank, then all of the configured event types will be tested.
    * items `string` (values: ACCOUNT_CLOSED, ACCOUNT_CREATED, ACCOUNT_HOLDER_CREATED, ACCOUNT_HOLDER_LIMIT_REACHED, ACCOUNT_HOLDER_PAYOUT, ACCOUNT_HOLDER_STATUS_CHANGE, ACCOUNT_HOLDER_STORE_STATUS_CHANGE, ACCOUNT_HOLDER_UPCOMING_DEADLINE, ACCOUNT_HOLDER_UPDATED, ACCOUNT_HOLDER_VERIFICATION, ACCOUNT_UPDATED, BENEFICIARY_SETUP, COMPENSATE_NEGATIVE_BALANCE, DIRECT_DEBIT_INITIATED, PAYMENT_FAILURE, REFUND_FUNDS_TRANSFER, REPORT_AVAILABLE, SCHEDULED_REFUNDS, TRANSFER_FUNDS)
  * notificationId **required** `integer`: The ID of the notification subscription configuration to be tested.

### TestNotificationConfigurationResponse
* TestNotificationConfigurationResponse `object`
  * errorMessages `array`: Any error messages encountered.
    * items `string`
  * eventTypes **required** `array`: The event types that were tested.
    * items `string` (values: ACCOUNT_CLOSED, ACCOUNT_CREATED, ACCOUNT_HOLDER_CREATED, ACCOUNT_HOLDER_LIMIT_REACHED, ACCOUNT_HOLDER_PAYOUT, ACCOUNT_HOLDER_STATUS_CHANGE, ACCOUNT_HOLDER_STORE_STATUS_CHANGE, ACCOUNT_HOLDER_UPCOMING_DEADLINE, ACCOUNT_HOLDER_UPDATED, ACCOUNT_HOLDER_VERIFICATION, ACCOUNT_UPDATED, BENEFICIARY_SETUP, COMPENSATE_NEGATIVE_BALANCE, DIRECT_DEBIT_INITIATED, PAYMENT_FAILURE, REFUND_FUNDS_TRANSFER, REPORT_AVAILABLE, SCHEDULED_REFUNDS, TRANSFER_FUNDS)
  * exchangeMessages **required** `array`: The notification message and related response messages.
    * items [ExchangeMessage](#exchangemessage)
  * invalidFields `array`: Contains field validation errors that would prevent requests from being processed.
    * items [ErrorFieldType](#errorfieldtype)
  * notificationId **required** `integer`: The ID of the notification subscription configuration.
  * okMessages **required** `array`: A list of messages describing the testing steps.
    * items `string`
  * pspReference `string`: The reference of a request. Can be used to uniquely identify the request.
  * resultCode `string`: The result code.

### UpdateNotificationConfigurationRequest
* UpdateNotificationConfigurationRequest `object`
  * configurationDetails **required** [NotificationConfigurationDetails](#notificationconfigurationdetails)


