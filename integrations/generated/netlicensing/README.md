# @datafire/netlicensing

Client library for Labs64 NetLicensing RESTful API Test Center

## Installation and Usage
```bash
npm install --save @datafire/netlicensing
```
```js
let netlicensing = require('@datafire/netlicensing').create({
  username: "",
  password: ""
});

.then(data => {
  console.log(data);
});
```

## Description

The Labs64 <a href='https://netlicensing.io/wiki/restful-api' target='_blank'>NetLicensing RESTful API</a> gives you access to NetLicensing’s core features.<br/><br/><strong>Authentication</strong><br/>You authenticate to the NetLicensing API by providing your account credentials or simply use our demo account - <code>demo:demo</code><br/><br/>Find out more about Labs64 NetLicensing at <a href='https://netlicensing.io' target='_blank'>netlicensing.io</a>

## Actions

### listLicenses
Return a list of all Licenses for the current Vendor


```js
netlicensing.listLicenses(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [netlicensing](#netlicensing)

### createLicense
Creates a new License


```js
netlicensing.createLicense({
  "active": true,
  "licenseTemplateNumber": "",
  "licenseeNumber": ""
}, context)
```

#### Input
* input `object`
  * active **required** `boolean`
  * currency `string`: Specifies currency for the License price. Check data types to discover which currencies are supported. Read-only, set from License Template on creation
  * hidden `boolean`: If set to 'true', this License is not shown in NetLicensing Shop as purchased License. Set from License Template on creation, if not specified explicitly
  * licenseTemplateNumber **required** `string`
  * licenseeNumber **required** `string`
  * name `string`: Name for the Licensed item. Set from License Template on creation, if not specified explicitly.
  * number `string`
  * parentfeature `string`: Mandatory for 'TIMEVOLUME' License Type and 'RENTAL' licensing model
  * price `number`: Price for the License. If >0, it must always be accompanied by the currency specification. Read-only, set from License Template on creation
  * quantity `string`: Mandatory for 'Pay-per-Use' License Model.
  * startDate `string`: Mandatory for 'TIMEVOLUME' License Type.
  * timeVolume `string`: Mandatory for 'TIMEVOLUME' License Type.
  * timeVolumePeriod `string`: For 'TIMEVOLUME' License Type.
  * usedQuantity `string`: Mandatory for 'Pay-per-Use' License Model.

#### Output
* output [netlicensing](#netlicensing)

### deleteLicense
Delete License by a 'licenseNumber'


```js
netlicensing.deleteLicense({
  "licenseNumber": ""
}, context)
```

#### Input
* input `object`
  * licenseNumber **required** `string`: Unique number (across all Products/Licensees of a Vendor) that identifies the License. Vendor can assign this number when creating a License or let NetLicensing generate one. Read-only after corresponding creation Transaction status is set to closed.

#### Output
* output [netlicensing](#netlicensing)

### getLicense
Get License by a 'licenseNumber'


```js
netlicensing.getLicense({
  "licenseNumber": ""
}, context)
```

#### Input
* input `object`
  * licenseNumber **required** `string`: Unique number (across all Products/Licensees of a Vendor) that identifies the License. Vendor can assign this number when creating a License or let NetLicensing generate one. Read-only after corresponding creation Transaction status is set to closed.

#### Output
* output [netlicensing](#netlicensing)

### updateLicense
Update License by a 'licenseNumber'


```js
netlicensing.updateLicense({
  "licenseNumber": ""
}, context)
```

#### Input
* input `object`
  * licenseNumber **required** `string`: Unique number (across all Products/Licensees of a Vendor) that identifies the License. Vendor can assign this number when creating a License or let NetLicensing generate one. Read-only after corresponding creation Transaction status is set to closed.
  * active `boolean`
  * currency `string`: Specifies currency for the License price. Check data types to discover which currencies are supported. Read-only, set from License Template on creation
  * hidden `boolean`: If set to 'true', this License is not shown in NetLicensing Shop as purchased License. Set from License Template on creation, if not specified explicitly
  * name `string`: Name for the Licensed item. Set from License Template on creation, if not specified explicitly.
  * number `string`: Unique number (across all Products/Licensees of a Vendor) that identifies the License. Vendor can assign this number when creating a License or let NetLicensing generate one. Read-only after corresponding creation Transaction status is set to closed.
  * parentfeature `string`
  * price `number`: Price for the License. If > 0, it must always be accompanied by the currency specification. Read-only, set from License Template on creation
  * quantity `string`: Mandatory for 'Pay-per-Use' License Model.
  * startDate `string`: For 'TIMEVOLUME' License type
  * timeVolume `string`: Mandatory for 'TIMEVOLUME' License Type.
  * timeVolumePeriod `string`: For 'TIMEVOLUME' License Type.
  * usedQuantity `string`: Mandatory for 'Pay-per-Use' License Model.

#### Output
* output [netlicensing](#netlicensing)

### listLicensees
Return a list of all Licensees for the current Vendor


```js
netlicensing.listLicensees(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [netlicensing](#netlicensing)

### createLicensee
Creates a new Licensee


```js
netlicensing.createLicensee({
  "active": true,
  "productNumber": ""
}, context)
```

#### Input
* input `object`
  * active **required** `boolean`: If set to 'false', the Licensee is disabled. Licensee can not obtain new Licenses, and validation is disabled
  * markedForTransfer `boolean`: Mark Licensee for transfer.
  * name `string`
  * number `string`: Unique number (across all Products of a Vendor) that identifies the Licensee. Vendor can assign this number when creating a Licensee or let NetLicensing generate one. Read-only after creation of the first License for the Licensee
  * productNumber **required** `string`: 'productNumber' to assign new Licensee object

#### Output
* output [netlicensing](#netlicensing)

### deleteLicensee
Delete a Licensee by 'number'


```js
netlicensing.deleteLicensee({
  "licenseeNumber": ""
}, context)
```

#### Input
* input `object`
  * licenseeNumber **required** `string`: Unique number (across all Products of a Vendor) that identifies the Licensee.
  * forceCascade `boolean`: Force object deletion and all descendants.

#### Output
* output [netlicensing](#netlicensing)

### getLicensee
Return a Licensee by 'licenseeNumber'


```js
netlicensing.getLicensee({
  "licenseeNumber": ""
}, context)
```

#### Input
* input `object`
  * licenseeNumber **required** `string`: Unique number (across all Products of a Vendor) that identifies the Licensee. Vendor can assign this number when creating a Licensee or let NetLicensing generate one. Read-only after creation of the first License for the Licensee.

#### Output
* output [netlicensing](#netlicensing)

### updateLicensee
Sets the provided properties to a Licensee. Return an updated Licensee


```js
netlicensing.updateLicensee({
  "licenseeNumber": ""
}, context)
```

#### Input
* input `object`
  * licenseeNumber **required** `string`: Unique number (across all Products of a Vendor) that identifies the Licensee. Vendor can assign this number when creating a Licensee or let NetLicensing generate one. Read-only after creation of the first License for the Licensee.
  * active `boolean`: If set to 'false', the Licensee is disabled. Licensee can not obtain new Licenses, and validation is disabled
  * markedForTransfer `boolean`: Mark Licensee for transfer.
  * name `string`
  * number `string`: New Licensee number (update).

#### Output
* output [netlicensing](#netlicensing)

### transferLicenses
Licenses transfer between Licensees


```js
netlicensing.transferLicenses({
  "licenseeNumber": "",
  "sourceLicenseeNumber": ""
}, context)
```

#### Input
* input `object`
  * licenseeNumber **required** `string`: Licensee number with a maximum length of 1000 characters
  * sourceLicenseeNumber **required** `string`: Licensee number which Licenses to be transferred

#### Output
* output [netlicensing](#netlicensing)

### validateLicensee
Validates active Licenses of the Licensee


```js
netlicensing.validateLicensee({
  "licenseeNumber": ""
}, context)
```

#### Input
* input `object`
  * licenseeNumber **required** `string`: Licensee number with a maximum length of 1000 characters
  * action `string` (values: checkOut, checkIn): 'Floating' licensing model: check-out or check-in session action, to allocate or return it from/to the pool of available sessions
  * licenseeName `string`: Human-readable name for the auto-created Licensee (will be set as custom Licensee property)
  * nodeSecret `string`: 'Node-Locked' licensing model: specifies unique secret
  * productModuleNumber `string`: 'Node-Locked' licensing model: product module number
  * productNumber `string`: Product number, must be provided when 'Licensee auto-create' is enabled (see also Product JavaDoc). Identifies the Product to which new Licensee should be added
  * sessionId `string`: 'Floating' licensing model: specifies unique session identifier

#### Output
* output [netlicensing](#netlicensing)

### listLicenseTemplates
Return a list of all License Templates for the current Vendor


```js
netlicensing.listLicenseTemplates(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [netlicensing](#netlicensing)

### createLicenseTemplate
Creates a new License Template


```js
netlicensing.createLicenseTemplate({
  "active": true,
  "licenseType": "",
  "name": "",
  "productModuleNumber": ""
}, context)
```

#### Input
* input `object`
  * active **required** `boolean`: If set to 'false', the License Template is disabled. Licensee can not obtain any new Licenses off this License Template.
  * automatic `boolean`: If set to 'true', every new Licensee automatically gets one License out of this License Template on creation. Automatic Licenses must have their price set to 0.
  * currency `string`: Specifies currency for the License price. Check data types to discover which currencies are supported.
  * hidden `boolean`: If set to 'true', this License Template is not shown in NetLicensing Shop as offered for purchase.
  * hideLicenses `boolean`: If set to 'true', Licenses from this License Template are not visible to the end customer, but participate in validation.
  * licenseType **required** `string`: Type of Licenses created from this License Template. Supported types: FEATURE, TIMEVOLUME, FLOATING, QUANTITY
  * maxSessions `string`: Mandatory for 'FLOATING' License Type.
  * name **required** `string`: License Template name to create License Template object
  * number `string`: Unique number (across all Products of a Vendor) that identifies the License Template. Vendor can assign this number when creating a License Template or let NetLicensing generate one. Read-only after creation of the first License from this License Template.
  * price `number`: Price for the License. If >0, it must always be accompanied by the currency specification.
  * productModuleNumber **required** `string`: Number of Product Module to create License Template object
  * quantity `string`: Mandatory for 'Pay-per-Use' and 'Node-Locked' License Model.
  * quota `string`: Mandatory for 'Quota' License Model.
  * timeVolume `string`: Mandatory for 'TIMEVOLUME' License Type.
  * timeVolumePeriod `string`: For 'TIMEVOLUME' License Type.

#### Output
* output [netlicensing](#netlicensing)

### deleteLicenseTemplate
Delete a License Template by 'number'.


```js
netlicensing.deleteLicenseTemplate({
  "licenseTemplateNumber": ""
}, context)
```

#### Input
* input `object`
  * licenseTemplateNumber **required** `string`: Unique number (across all Products of a Vendor) that identifies the License Template.
  * forceCascade `boolean`: Force object deletion and all descendants.

#### Output
* output [netlicensing](#netlicensing)

### getLicenseTemplate
Return a License Template by 'licenseTemplateNumber'


```js
netlicensing.getLicenseTemplate({
  "licenseTemplateNumber": ""
}, context)
```

#### Input
* input `object`
  * licenseTemplateNumber **required** `string`: Unique number (across all Products of a Vendor) that identifies the License Template. Vendor can assign this number when creating a License Template or let NetLicensing generate one. Read-only after creation of the first License from this License Template.

#### Output
* output [netlicensing](#netlicensing)

### updateLicenseTemplate
Sets the provided properties to a License Template. Return an updated License Template


```js
netlicensing.updateLicenseTemplate({
  "licenseTemplateNumber": ""
}, context)
```

#### Input
* input `object`
  * licenseTemplateNumber **required** `string`: Unique number (across all Products of a Vendor) that identifies the License Template. Vendor can assign this number when creating a License Template or let NetLicensing generate one. Read-only after creation of the first License from this License Template.
  * active `boolean`: If set to 'false', the License Template is disabled. Licensee can not obtain any new Licenses off this License Template.
  * automatic `boolean`: If set to 'true', every new Licensee automatically gets one License out of this License Template on creation. Automatic Licenses must have their price set to 0.
  * currency `string`: Specifies currency for the License price. Check data types to discover which currencies are supported.
  * hidden `boolean`: If set to 'true', this License Template is not shown in NetLicensing Shop as offered for purchase.
  * hideLicenses `boolean`: If set to 'true', Licenses from this License Template are not visible to the end customer, but participate in validation.
  * licenseType `string`: Type of Licenses created from this License Template. Supported types: FEATURE, TIMEVOLUME, FLOATING, QUANTITY
  * maxSessions `string`: Mandatory for 'FLOATING' License Type.
  * name `string`: Name for the Licensed item
  * number `string`: New License Template number (update).
  * price `number`: Price for the License. If >0, it must always be accompanied by the currency specification.
  * quantity `string`: Mandatory for 'Pay-per-Use' and 'Node-Locked' License Model.
  * quota `string`: Mandatory for 'Quota' License Model.
  * timeVolume `string`: Mandatory for 'TIMEVOLUME' License Type.
  * timeVolumePeriod `string`: For 'TIMEVOLUME' License Type.

#### Output
* output [netlicensing](#netlicensing)

### listPaymentMethods
Return a list of all Payment Methods for the current Vendor


```js
netlicensing.listPaymentMethods(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [netlicensing](#netlicensing)

### getPaymentMethod
Return a Payment Method info by 'paymentMethodNumber'


```js
netlicensing.getPaymentMethod({
  "paymentMethodNumber": ""
}, context)
```

#### Input
* input `object`
  * paymentMethodNumber **required** `string`: Payment method number

#### Output
* output [netlicensing](#netlicensing)

### updatePaymentMethod
Sets the provided properties to a Payment Method. Return an updated Payment Method


```js
netlicensing.updatePaymentMethod({
  "paymentMethodNumber": ""
}, context)
```

#### Input
* input `object`
  * paymentMethodNumber **required** `string`: Payment method number
  * active `boolean`: If set to 'false', the Payment Method is disabled.
  * paypal.subject `string`: The e-mail address of the PayPal account for which you are making the API calls.

#### Output
* output [netlicensing](#netlicensing)

### listProducts
Return a list of all configured Products for the current Vendor


```js
netlicensing.listProducts(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [netlicensing](#netlicensing)

### createProduct
Creates a new Product


```js
netlicensing.createProduct({
  "active": true,
  "name": "",
  "version": ""
}, context)
```

#### Input
* input `object`
  * active **required** `boolean`: If set to 'false', the Product is disabled. No new Licensees can be registered for the Product, existing Licensees can not obtain new Licenses.
  * description `string`: Product description.
  * licenseeAutoCreate `boolean`: If set to 'true', non-existing Licensees will be created at first validation attempt.
  * licensingInfo `string`: Licensing information.
  * name **required** `string`: Product name. Together with the version identifies the Product for the end customer.
  * number `string`: Unique number that identifies the Product. Vendor can assign this number when creating a Product or let NetLicensing generate one.
  * vatMode `string` (values: GROSS, NET): Vat mode for Product. Supported types: GROSS, NET
  * version **required** `string`: Product version. Convenience parameter, additional to the Product name.

#### Output
* output [netlicensing](#netlicensing)

### deleteProduct
Delete a Product by 'number'


```js
netlicensing.deleteProduct({
  "productNumber": ""
}, context)
```

#### Input
* input `object`
  * productNumber **required** `string`: Unique number that identifies the Product.
  * forceCascade `boolean`: Force object deletion and all descendants.

#### Output
* output [netlicensing](#netlicensing)

### productNumber
Return a Product by 'productNumber'


```js
netlicensing.productNumber({
  "productNumber": ""
}, context)
```

#### Input
* input `object`
  * productNumber **required** `string`: Unique number that identifies the Product.

#### Output
* output [netlicensing](#netlicensing)

### updateProduct
Sets the provided properties to a Product. Return an updated Product


```js
netlicensing.updateProduct({
  "productNumber": ""
}, context)
```

#### Input
* input `object`
  * productNumber **required** `string`: Unique number that identifies the Product.
  * active `boolean`: If set to 'false', the Product is disabled. No new Licensees can be registered for the Product, existing Licensees can not obtain new Licenses.
  * description `string`: Product description.
  * licenseeAutoCreate `boolean`: If set to 'true', non-existing Licensees will be created at first validation attempt.
  * licensingInfo `string`: Licensing information.
  * name `string`: Product name. Together with the version identifies the Product for the end customer.
  * number `string`: New Product number (update)
  * vatMode `string` (values: GROSS, NET): Vat mode for Product. Supported types: GROSS, NET
  * version `string`: Product version. Convenience parameter, additional to the Product name.

#### Output
* output [netlicensing](#netlicensing)

### listProductModules
Return a list of all Product Modules for the current Vendor


```js
netlicensing.listProductModules(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [netlicensing](#netlicensing)

### createProductModule
Creates a new Product Module


```js
netlicensing.createProductModule({
  "active": true,
  "licensingModel": "",
  "name": "",
  "productNumber": ""
}, context)
```

#### Input
* input `object`
  * active **required** `boolean`: If set to 'false', the Product Module is disabled. Licensees can not obtain any new Licenses for this Product Module.
  * licenseTemplate `array`: License Template. Mandatory for 'Try &amp; Buy' licensing model.
  * licensingModel **required** `string`: Licensing model applied to this Product Module. Defines what License Templates can be configured for the Product Module and how Licenses for this Product Module are processed during validation.
  * maxCheckoutValidity `integer`: Maximum checkout validity (days). Mandatory for 'Floating' licensing model.
  * name **required** `string`: Product Module name that is visible to the end customers in NetLicensing Shop.
  * nodeSecretMode `array`: Secret Mode. Mandatory for 'Node-Locked' licensing model.
  * number `string`: Unique number (across all Products of a Vendor) that identifies the Product Module. Vendor can assign this number when creating a Product Module or let NetLicensing generate one. Read-only after creation of the first Licensee for the Product.
  * productNumber **required** `string`: Unique number (across all Products of a Vendor) that identifies the Product Module. Vendor can assign this number when creating a Product Module or let NetLicensing generate one. Read-only after creation of the first Licensee for the Product.
  * redThreshold `integer`: Remaining time volume for red level. Mandatory for 'Rental' licensing model.
  * yellowThreshold `integer`: Remaining time volume for yellow level. Mandatory for 'Rental' licensing model.

#### Output
* output [netlicensing](#netlicensing)

### deleteProductModule
Delete a Product Module by 'number'


```js
netlicensing.deleteProductModule({
  "productModuleNumber": ""
}, context)
```

#### Input
* input `object`
  * productModuleNumber **required** `string`: Unique number (across all Products of a Vendor) that identifies the Product Module.
  * forceCascade `boolean`: Force object deletion and all descendants.

#### Output
* output [netlicensing](#netlicensing)

### getProductModule
Return a Product Module by 'productModuleNumber'


```js
netlicensing.getProductModule({
  "productModuleNumber": ""
}, context)
```

#### Input
* input `object`
  * productModuleNumber **required** `string`: Unique number (across all Products of a Vendor) that identifies the Product Module. Vendor can assign this number when creating a Product Module or let NetLicensing generate one. Read-only after creation of the first Licensee for the Product.

#### Output
* output [netlicensing](#netlicensing)

### updateProductModule
Sets the provided properties to a Product Module. Return an updated Product Module


```js
netlicensing.updateProductModule({
  "productModuleNumber": ""
}, context)
```

#### Input
* input `object`
  * productModuleNumber **required** `string`: Unique number (across all Products of a Vendor) that identifies the Product Module. Vendor can assign this number when creating a Product Module or let NetLicensing generate one. Read-only after creation of the first Licensee for the Product.
  * active `boolean`: If set to 'false', the Product Module is disabled. Licensees can not obtain any new Licenses for this Product Module.
  * licenseTemplate `array`: License Template. Mandatory for 'Try &amp; Buy' licensing model.
  * licensingModel `string`: Licensing model applied to this Product Module. Defines what License Templates can be configured for the Product Module and how Licenses for this Product Module are processed during validation.
  * maxCheckoutValidity `integer`: Maximum checkout validity (days). Mandatory for 'Floating' licensing model.
  * name `string`: Product Module name that is visible to the end customers in NetLicensing Shop.
  * nodeSecretMode `array`: Secret Mode. Mandatory for 'Node-Locked' licensing model.
  * number `string`: New Product Module number (update).
  * redThreshold `integer`: Remaining time volume for red level. Mandatory for 'Rental' licensing model.
  * yellowThreshold `integer`: Remaining time volume for yellow level. Mandatory for 'Rental' licensing model.

#### Output
* output [netlicensing](#netlicensing)

### listTokens
Return a list of all tokens for the current Vendor


```js
netlicensing.listTokens(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [netlicensing](#netlicensing)

### createToken
Create token by 'tokenType' and additional token parameters


```js
netlicensing.createToken({
  "tokenType": ""
}, context)
```

#### Input
* input `object`
  * action `string` (values: licenseeLogin): For <i>type=ACTION</i> only; defines token action to be perfromed
  * apiKeyRole `string` (values: ROLE_APIKEY_LICENSEE, ROLE_APIKEY_ANALYTICS, ROLE_APIKEY_OPERATION, ROLE_APIKEY_MAINTENANCE, ROLE_APIKEY_ADMIN): For <i>tokenType=APIKEY</i> only (default: ROLE_APIKEY_LICENSEE); defines token RoleID
  * cancelURL `string`: For <i>tokenType=SHOP</i> only; take customers to this URL when they cancel their checkout
  * cancelURLTitle `string`: For <i>tokenType=SHOP</i> only; shop link title for cancel checkout process
  * licenseTemplateNumber `string`: For <i>tokenType=SHOP</i> only; identifies LicenseTemplate that will be assigned to the shop token
  * licenseeNumber `string`: For <i>tokenType=SHOP</i> or <i>type=ACTION</i> only (mandatory); identifies Licensee that will be assigned to the shop token
  * predefinedShoppingItem `string`: For <i>tokenType=SHOP</i> only; identifies Shopping Item name that will be shown to the customer
  * privateKey `string`: For <i>tokenType=APIKEY</i> only (optional); defines PrivateKey to be used with the validate method<br/><strong>Please Note:</strong> PrivateKey need to be provided as one line without spaces
  * productNumber `string`: For <i>tokenType=SHOP</i> only (mandatory); identifies Product that will be assigned to the shop token
  * successURL `string`: For <i>tokenType=SHOP</i> only; take customers to this URL when they finish checkout
  * successURLTitle `string`: For <i>tokenType=SHOP</i> only; shop link title for successful checkout process
  * tokenType **required** `string` (values: DEFAULT, SHOP, APIKEY): Token type to be generated
  * type `string` (values: ACTION): For <i>tokenType=DEFAULT</i> only; action type to be set

#### Output
* output [netlicensing](#netlicensing)

### deleteToken
Delete a token by 'number'


```js
netlicensing.deleteToken({
  "tokenNumber": ""
}, context)
```

#### Input
* input `object`
  * tokenNumber **required** `string`: Token number

#### Output
* output [netlicensing](#netlicensing)

### getToken
Return a token by 'tokenNumber'


```js
netlicensing.getToken({
  "tokenNumber": ""
}, context)
```

#### Input
* input `object`
  * tokenNumber **required** `string`: Token number

#### Output
* output [netlicensing](#netlicensing)

### listTransactions
Return a list of all Transactions for the current Vendor


```js
netlicensing.listTransactions(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [netlicensing](#netlicensing)

### createTransaction
Creates a new Transaction


```js
netlicensing.createTransaction({
  "active": true,
  "source": "",
  "status": ""
}, context)
```

#### Input
* input `object`
  * active **required** `boolean`: Always 'true' for Transactions
  * dateClosed `string`
  * dateCreated `string`
  * licenseeNumber `string`
  * number `string`: Unique number (across all Products of a Vendor) that identifies the Transaction
  * paymentMethod `string`
  * source **required** `string` (values: SHOP): AUTO Transaction for internal use only
  * status **required** `string` (values: CANCELLED, CLOSED, PENDING)

#### Output
* output [netlicensing](#netlicensing)

### getTransaction
Return a Transaction by 'transactionNumber'


```js
netlicensing.getTransaction({
  "transactionNumber": ""
}, context)
```

#### Input
* input `object`
  * transactionNumber **required** `string`: Unique number (across all Products of a Vendor) that identifies the Transaction

#### Output
* output [netlicensing](#netlicensing)

### updateTransaction
Sets the provided properties to a Transaction. Return an updated Transaction


```js
netlicensing.updateTransaction({
  "transactionNumber": ""
}, context)
```

#### Input
* input `object`
  * transactionNumber **required** `string`: Unique number (across all Products of a Vendor) that identifies the Transaction
  * active `boolean`: Always 'true' for Transactions
  * dateClosed `string`
  * dateCreated `string`
  * number `string`: Unique number (across all Products of a Vendor) that identifies the Transaction
  * paymentMethod `string`
  * source `string` (values: SHOP): AUTO Transaction for internal use only
  * status `string` (values: CANCELLED, CLOSED, PENDING)

#### Output
* output [netlicensing](#netlicensing)

### licenseTypes
Return a list of all License Types supported by the service


```js
netlicensing.licenseTypes(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [netlicensing](#netlicensing)

### licensingModels
Return a list of all licensing models supported by the service


```js
netlicensing.licensingModels(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [netlicensing](#netlicensing)



## Definitions

### License
* License `object`
  * active `boolean`: If set to 'false', the License is disabled. License can be re-enabled, but as long as it is disabled, the License is excluded from the validation process.
  * currency `string`: Specifies currency for the License price. Check data types to discover which currencies are supported. Read-only, set from License Template on creation.
  * hidden `boolean`: If set to 'true', this License is not shown in NetLicensing Shop as purchased License. Set from License Template on creation, if not specified explicitly.
  * name `string`: Name for the Licensed item. Set from License Template on creation, if not specified explicitly.
  * number `string`: Unique number (across all Products/Licensees of a Vendor) that identifies the License. Vendor can assign this number when creating a License or let NetLicensing generate one. Read-only after corresponding creation Transaction status is set to closed.
  * price `number`: 'price' for the License. If >0, it must always be accompanied by the currency specification. Read-only, set from License Template on creation.

### LicenseTemplate
* LicenseTemplate `object`
  * active `boolean`: If set to 'false', the License Template is disabled. Licensee can not obtain any new Licenses off this License Template.
  * automatic `boolean`: If set to 'true', every new Licensee automatically gets one License out of this License Template on creation. Automatic Licenses must have their price set to 0.
  * currency `string`: Specifies currency for the License price. Check data types to discover which currencies are supported.
  * hidden `boolean`: If set to 'true', this License Template is not shown in NetLicensing Shop as offered for purchase.
  * hiddenLicenses `boolean`: If set to 'true', Licenses from this License Template are not visible to the end customer, but participate in validation.
  * licenseType `string` (values: FEATURE, TIMEVOLUME): Type of Licenses created from this License Template
  * name `string`: Name for the Licensed item.
  * number `string`: Unique number (across all Product of a Vendor) that identifies the License Template. Vendor can assign this number when creating a License Template or let NetLicensing generate one. Read-only after creation of the first License from this License Template.
  * price `number`: 'price' for the License. If >0, it must always be accompanied by the currency specification.

### Licensee
* Licensee `object`
  * active `boolean`: If set to 'false', the Licensee is disabled. Licensee can not obtain new Licenses, and validation is disabled.
  * number `string`: Unique number (across all Products of a Vendor) that identifies the Licensee. Vendor can assign this number when creating a Licensee or let NetLicensing generate one. Read-only after creation of the first License for the Licensee.

### PaymentMethod
* PaymentMethod `object`
  * active `boolean`
  * number `string`

### Product
* Product `object`
  * active `boolean`: If set to 'false', the Product is disabled. No new Licensees can be registered for the Product, existing Licensees can not obtain new Licenses
  * licenseeAutoCreate `boolean`: If set to 'true', non-existing Licensees will be created at first validation attempt.
  * name `string`: Product name. Together with the version identifies the Product for the end customer
  * number `string`: Unique number that identifies the Product. Vendor can assign this number when creating a Product or let NetLicensing generate one. Read-only after creation of the first Licensee for the Product.
  * version `string`: Product version. Convenience parameter, additional to the Product name.

### ProductModule
* ProductModule `object`
  * active `boolean`: If set to 'false', the Product Module is disabled. Licensees can not obtain any new Licenses for this Product Module.
  * licensingInfo `string`: Licensing model applied to this Product Module. Defines what License Templates can be configured for the Product Module and how Licenses for this Product Module are processed during validation.
  * name `string`: Product Module name that is visible to the end customers in NetLicensing Shop.
  * number `string`: Unique number (across all Product of a Vendor) that identifies the Product Module. Vendor can assign this number when creating a Product Module or let NetLicensing generate one. Read-only after creation of the first Licensee for the Product.

### Token
* Token `object`
  * active `boolean`
  * expirationTime `string`
  * licenseNumber `string`
  * number `string`
  * shopURL `string`
  * tokenType `string`
  * vendorNumber `string`

### Transaction
* Transaction `object`
  * active `string`: Always true for the Transactions
  * number `string`: Unique number (across all Products of a Vendor) that identifies the Transaction. This number is always generated by NetLicensing.
  * source `string` (values: SHOP)
  * status `string` (values: CANCELLED, CLOSED, PENDING)

### discount
* discount `object`
  * amountPercent `string`
  * currency `string`
  * totalPrice `number`

### infos
* infos `object`

### items
* items `object`

### licensingModel
* licensingModel `object`
  * name `string`

### netlicensing
* netlicensing `object`
  * infos [infos](#infos)
  * items [items](#items)


