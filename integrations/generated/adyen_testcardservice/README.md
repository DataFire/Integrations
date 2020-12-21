# @datafire/adyen_testcardservice

Client library for Adyen Test Cards API

## Installation and Usage
```bash
npm install --save @datafire/adyen_testcardservice
```
```js
let adyen_testcardservice = require('@datafire/adyen_testcardservice').create({
  ApiKeyAuth: "",
  username: "",
  password: ""
});

.then(data => {
  console.log(data);
});
```

## Description

The Test Cards API provides endpoints for generating custom test card numbers. For more information, refer to [Custom test cards](https://docs.adyen.com/development-resources/test-cards/create-test-cards) documentation.

## Actions

### createTestCardRanges.post
Creates one or more test card ranges.


```js
adyen_testcardservice.createTestCardRanges.post({}, context)
```

#### Input
* input `object`
  * body [CreateTestCardRangesRequest](#createtestcardrangesrequest)

#### Output
* output [CreateTestCardRangesResult](#createtestcardrangesresult)



## Definitions

### AvsAddress
* AvsAddress `object`
  * streetAddress **required** `string`: The street and house number of the address.
  * zip `string`: The zip or post code of the address.

### CreateTestCardRangesRequest
* CreateTestCardRangesRequest `object`
  * accountCode **required** `string`: The code of the account, for which the test card ranges should be created.
  * accountTypeCode **required** `string`: The type of the account, for which the test card ranges should be created.
  * testCardRanges **required** `array`: A list of test card ranges to create.
    * items [TestCardRange](#testcardrange)

### CreateTestCardRangesResult
* CreateTestCardRangesResult `object`
  * rangeCreationResults **required** `array`: The results of the test card creation.
    * items [TestCardRangeCreationResult](#testcardrangecreationresult)

### TestCardRange
* TestCardRange `object`
  * address [AvsAddress](#avsaddress)
  * cardHolderName **required** `string`: The name of the card holder, as it appears on the card, for the test card range.
  * cvc `string`: The test card range security code.
  * expiryMonth **required** `string` (values: APRIL, AUGUST, DECEMBER, FEBRUARY, JANUARY, JULY, JUNE, MARCH, MAY, NOVEMBER, OCTOBER, SEPTEMBER): Expiry month for the test card range.
  * expiryYear **required** `integer`: Expiry year for the test card range.
  * rangeEnd **required** `string`: The last test card number in the test card range (inclusive):
  * rangeStart **required** `string`: The first test card number in the test card range (inclusive):
  * threeDDirectoryServerResponse `string` (values: N, U, Y): 3D Secure server response. It notifies whether the specified card holder is enrolled in a 3D Secure service. Possible values:
  * threeDPassword `string`: The password used for 3D Secure authentication.
  * threeDUsername `string`: The username used for 3D Secure authentication.

### TestCardRangeCreationResult
* TestCardRangeCreationResult `object`
  * cardNumberRangeEnd **required** `string`: The last test card number in the generated test card range.
  * cardNumberRangeStart **required** `string`: The first test card number in the generated test card range.
  * creationResultCode **required** `string` (values: ALREADY_EXISTS, CREATED, ERROR): Notification message. It informs about the outcome of the operation. Possible values:
  * message `string`: An optional information message about the result.


