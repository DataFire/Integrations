# @datafire/netlicensing

Client library for Labs64 NetLicensing RESTful API Test Center

## Installation and Usage
```bash
npm install --save @datafire/netlicensing
```
```js
let netlicensing = require('@datafire/netlicensing').create({
  api_key: "",
  username: "",
  password: ""
});

netlicensing.listLicenses({}).then(data => {
  console.log(data);
})
```

## Description

The Labs64 <a href='https://www.labs64.de/confluence/x/pwCo' target='_blank'>NetLicensing RESTful API</a> gives you access to NetLicensing’s core features.<br/><br/><strong>Authentication</strong><br/>You authenticate to the NetLicensing API by providing your account credentials or simply use our demo account - <code>demo:demo</code><br/><br/>Find out more about Labs64 NetLicensing at <a href='https://netlicensing.io' target='_blank'>netlicensing.io</a>

## Actions

### listLicenses
Return a list of all licenses for the current vendor


```js
netlicensing.listLicenses(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [netlicensing](#netlicensing)

### createLicense
Creates a new license


```js
netlicensing.createLicense({
  "licenseeNumber": "",
  "licenseTemplateNumber": "",
  "active": true,
  "number": ""
}, context)
```

#### Input
* input `object`
  * licenseeNumber **required** `string`
  * licenseTemplateNumber **required** `string`
  * active **required** `boolean`
  * number **required** `string`
  * name `string`: Name for the licensed item. Set from license template on creation, if not specified explicitly.
  * parentfeature `string`: Mandatory for 'TIMEVOLUME' license type and 'RENTAL' licensing model
  * timeVolume `string`: Mandatory for 'TIMEVOLUME' license type.
  * startDate `string`: Mandatory for 'TIMEVOLUME' license type.
  * price `number`: Price for the license. If >0, it must always be accompanied by the currency specification. Read-only, set from license template on creation
  * currency `string`: Specifies currency for the license price. Check data types to discover which currencies are supported. Read-only, set from license template on creation
  * hidden `boolean`: If set to 'true', this license is not shown in NetLicensing Shop as purchased license. Set from license template on creation, if not specified explicitly

#### Output
* output [netlicensing](#netlicensing)

### deleteLicense
Delete license by a licenseNumber


```js
netlicensing.deleteLicense({
  "licenseNumber": ""
}, context)
```

#### Input
* input `object`
  * licenseNumber **required** `string`: Unique number (across all products/licensees of a vendor) that identifies the license. Vendor can assign this number when creating a license or let NetLicensing generate one. Read-only after corresponding creation transaction status is set to closed.

#### Output
* output [netlicensing](#netlicensing)

### getLicense
Get license by a licenseNumber


```js
netlicensing.getLicense({
  "licenseNumber": ""
}, context)
```

#### Input
* input `object`
  * licenseNumber **required** `string`: Unique number (across all products/licensees of a vendor) that identifies the license. Vendor can assign this number when creating a license or let NetLicensing generate one. Read-only after corresponding creation transaction status is set to closed.

#### Output
* output [netlicensing](#netlicensing)

### updateLicense
Update license by a licenseNumber


```js
netlicensing.updateLicense({
  "licenseNumber": ""
}, context)
```

#### Input
* input `object`
  * licenseNumber **required** `string`: Unique number (across all products/licensees of a vendor) that identifies the license. Vendor can assign this number when creating a license or let NetLicensing generate one. Read-only after corresponding creation transaction status is set to closed.
  * number `string`: Unique number (across all products/licensees of a vendor) that identifies the license. Vendor can assign this number when creating a license or let NetLicensing generate one. Read-only after corresponding creation transaction status is set to closed.
  * active `boolean`
  * name `string`: Name for the licensed item. Set from license template on creation, if not specified explicitly.
  * startDate `string`: for TIMEVOLUME licenseType
  * parentfeature `string`
  * timeVolume `string`
  * price `number`: Price for the license. If > 0, it must always be accompanied by the currency specification. Read-only, set from license template on creation
  * currency `string`: Specifies currency for the license price. Check data types to discover which currencies are supported. Read-only, set from license template on creation
  * hidden `boolean`: If set to 'true', this license is not shown in NetLicensing Shop as purchased license. Set from license template on creation, if not specified explicitly

#### Output
* output [netlicensing](#netlicensing)

### listLicensees
Return a list of all licensees for the current vendor


```js
netlicensing.listLicensees(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [netlicensing](#netlicensing)

### createLicensee
Creates a new licensee


```js
netlicensing.createLicensee({
  "productNumber": "",
  "active": true
}, context)
```

#### Input
* input `object`
  * number `string`: Unique number (across all products of a vendor) that identifies the licensee. Vendor can assign this number when creating a licensee or let NetLicensing generate one. Read-only after creation of the first license for the licensee
  * productNumber **required** `string`: productNumber to assign new licensee object
  * name `string`
  * active **required** `boolean`: If set to 'false', the licensee is disabled. Licensee can not obtain new licenses, and validation is disabled
  * licenseeSecret `string`: Licensee Secret for licensee.
  * markedForTransfer `boolean`: Mark licensee for transfer.

#### Output
* output [netlicensing](#netlicensing)

### deleteLicensee
Delete a licensee by number


```js
netlicensing.deleteLicensee({
  "licenseeNumber": ""
}, context)
```

#### Input
* input `object`
  * licenseeNumber **required** `string`: Unique number (across all products of a vendor) that identifies the licensee.
  * forceCascade `boolean`: Force object deletion and all descendants.

#### Output
* output [netlicensing](#netlicensing)

### getLicensee
Return a licensee by licenseeNumber


```js
netlicensing.getLicensee({
  "licenseeNumber": ""
}, context)
```

#### Input
* input `object`
  * licenseeNumber **required** `string`: Unique number (across all products of a vendor) that identifies the licensee. Vendor can assign this number when creating a licensee or let NetLicensing generate one. Read-only after creation of the first license for the licensee.

#### Output
* output [netlicensing](#netlicensing)

### updateLicensee
Sets the provided properties to a licensee. Return an updated licensee


```js
netlicensing.updateLicensee({
  "licenseeNumber": ""
}, context)
```

#### Input
* input `object`
  * licenseeNumber **required** `string`: Unique number (across all products of a vendor) that identifies the licensee. Vendor can assign this number when creating a licensee or let NetLicensing generate one. Read-only after creation of the first license for the licensee.
  * number `string`: New licensee number (update).
  * active `boolean`: If set to 'false', the licensee is disabled. Licensee can not obtain new licenses, and validation is disabled
  * name `string`
  * licenseeSecret `string`: Licensee Secret for licensee.
  * markedForTransfer `boolean`: Mark licensee for transfer.

#### Output
* output [netlicensing](#netlicensing)

### transferLicenses
Licenses transfer between licensees


```js
netlicensing.transferLicenses({
  "licenseeNumber": "",
  "sourceLicenseeNumber": ""
}, context)
```

#### Input
* input `object`
  * licenseeNumber **required** `string`: Licensee number with a maximum length of 1000 characters
  * sourceLicenseeNumber **required** `string`: Licensee number which licenses to be transferred

#### Output
* output [netlicensing](#netlicensing)

### validateLicensee
Validates active licenses of the licensee


```js
netlicensing.validateLicensee({
  "licenseeNumber": ""
}, context)
```

#### Input
* input `object`
  * licenseeNumber **required** `string`: Licensee number with a maximum length of 1000 characters
  * productNumber `string`: Product number, must be provided when 'licensee auto-create' is enabled (see also Product JavaDoc). Identifies the product to which new licensee should be added
  * licenseeName `string`: Human-readable name for the auto-created licensee (will be set as custom Licensee property)
  * licenseeSecret `string`: Licensee Secret key for licensee

#### Output
* output [netlicensing](#netlicensing)

### listLicenseTemplates
Return a list of all license templates for the current vendor


```js
netlicensing.listLicenseTemplates(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [netlicensing](#netlicensing)

### createLicenseTemplate
Creates a new license template


```js
netlicensing.createLicenseTemplate({
  "productModuleNumber": "",
  "number": "",
  "name": "",
  "active": true,
  "licenseType": []
}, context)
```

#### Input
* input `object`
  * productModuleNumber **required** `string`: Number of product module to сreate license template object
  * number **required** `string`: lUnique number (across all products of a vendor) that identifies the license template. Vendor can assign this number when creating a license template or let NetLicensing generate one. Read-only after creation of the first license from this license template.
  * name **required** `string`: license template name to сreate license template object
  * active **required** `boolean`: If set to 'false', the license template is disabled. Licensee can not obtain any new licenses off this license template.
  * licenseType **required** `array`: type of licenses created from this license template. Supported types: FEATURE, TIMEVOLUME
  * timeVolume `string`: Mandatory for 'TIMEVOLUME' license type.
  * maxSessions `string`: Mandatory for 'FLOATING' license type.
  * price `number`: price for the license. If >0, it must always be accompanied by the currency specification.
  * currency `string`: specifies currency for the license price. Check data types to discover which currencies are supported.
  * automatic `boolean`: If set to 'true', every new licensee automatically gets one license out of this license template on creation. Automatic licenses must have their price set to 0.
  * hidden `boolean`: If set to 'true', this license template is not shown in NetLicensing Shop as offered for purchase.
  * hideLicenses `boolean`: If set to 'true', licenses from this license template are not visible to the end customer, but participate in validation.

#### Output
* output [netlicensing](#netlicensing)

### deleteLicenseTemplate
Delete a license template by number.


```js
netlicensing.deleteLicenseTemplate({
  "licenseTemplateNumber": ""
}, context)
```

#### Input
* input `object`
  * licenseTemplateNumber **required** `string`: Unique number (across all products of a vendor) that identifies the license template.
  * forceCascade `boolean`: Force object deletion and all descendants.

#### Output
* output [netlicensing](#netlicensing)

### getLicenseTemplate
Return a license template by licenseTemplateNumber


```js
netlicensing.getLicenseTemplate({
  "licenseTemplateNumber": ""
}, context)
```

#### Input
* input `object`
  * licenseTemplateNumber **required** `string`: Unique number (across all products of a vendor) that identifies the license template. Vendor can assign this number when creating a license template or let NetLicensing generate one. Read-only after creation of the first license from this license template.

#### Output
* output [netlicensing](#netlicensing)

### updateLicenseTemplate
Sets the provided properties to a license template. Return an updated license template


```js
netlicensing.updateLicenseTemplate({
  "licenseTemplateNumber": ""
}, context)
```

#### Input
* input `object`
  * licenseTemplateNumber **required** `string`: Unique number (across all products of a vendor) that identifies the license template. Vendor can assign this number when creating a license template or let NetLicensing generate one. Read-only after creation of the first license from this license template.
  * number `string`: New license template number (update).
  * name `string`: Name for the licensed item
  * active `boolean`: If set to 'false', the license template is disabled. Licensee can not obtain any new licenses off this license template.
  * licenseType `array`: type of licenses created from this license template. Supported types: FEATURE, TIMEVOLUME, FLOATING
  * timeVolume `string`: Mandatory for 'TIMEVOLUME' license type.
  * maxSessions `string`: Mandatory for 'FLOATING' license type.
  * price `number`: Price for the license. If >0, it must always be accompanied by the currency specification.
  * currency `string`: Specifies currency for the license price. Check data types to discover which currencies are supported.
  * automatic `boolean`: If set to 'true', every new licensee automatically gets one license out of this license template on creation. Automatic licenses must have their price set to 0.
  * hidden `boolean`: If set to 'true', this license template is not shown in NetLicensing Shop as offered for purchase.
  * hideLicenses `boolean`: If set to 'true', licenses from this license template are not visible to the end customer, but participate in validation.

#### Output
* output [netlicensing](#netlicensing)

### listPaymentMethods
Return a list of all payment methods for the current vendor


```js
netlicensing.listPaymentMethods(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [netlicensing](#netlicensing)

### getPaymentMethod
Return a payment method info by paymentMethodNumber


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
Sets the provided properties to a payment method. Return an updated payment method


```js
netlicensing.updatePaymentMethod({
  "paymentMethodNumber": ""
}, context)
```

#### Input
* input `object`
  * paymentMethodNumber **required** `string`: Payment method number
  * active `boolean`: If set to 'false', the payment method is disabled.
  * paypal.subject `string`: The e-mail address of the PayPal account for which you are making the API calls.

#### Output
* output [netlicensing](#netlicensing)

### listProducts
Return a list of all configured products for the current vendor


```js
netlicensing.listProducts(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [netlicensing](#netlicensing)

### createProduct
Creates a new product


```js
netlicensing.createProduct({
  "active": true,
  "name": "",
  "version": ""
}, context)
```

#### Input
* input `object`
  * number `string`: Unique number that identifies the product. Vendor can assign this number when creating a product or let NetLicensing generate one.
  * active **required** `boolean`: If set to 'false', the product is disabled. No new licensees can be registered for the product, existing licensees can not obtain new licenses.
  * name **required** `string`: Product name. Together with the version identifies the product for the end customer.
  * version **required** `string`: Product version. Convenience parameter, additional to the product name.
  * licenseeAutoCreate `boolean`: If set to 'true', non-existing licensees will be created at first validation attempt.
  * description `string`: Product description.
  * licensingInfo `string`: Licensing information.
  * licenseeSecretMode `string` (values: DISABLED, PREDEFINED, CLIENT): Licensee secret mode for product. Supported types: DISABLED, PREDEFINED, CLIENT
  * vatMode `string` (values: GROSS, NET): Vat mode for product. Supported types: GROSS, NET

#### Output
* output [netlicensing](#netlicensing)

### deleteProduct
Delete a product by number


```js
netlicensing.deleteProduct({
  "productNumber": ""
}, context)
```

#### Input
* input `object`
  * productNumber **required** `string`: Unique number that identifies the product.
  * forceCascade `boolean`: Force object deletion and all descendants.

#### Output
* output [netlicensing](#netlicensing)

### productNumber
Return a product by productNumber


```js
netlicensing.productNumber({
  "productNumber": ""
}, context)
```

#### Input
* input `object`
  * productNumber **required** `string`: Unique number that identifies the product.

#### Output
* output [netlicensing](#netlicensing)

### updateProduct
Sets the provided properties to a product. Return an updated product


```js
netlicensing.updateProduct({
  "productNumber": ""
}, context)
```

#### Input
* input `object`
  * productNumber **required** `string`: Unique number that identifies the product.
  * number `string`: New product number (update)
  * active `boolean`: If set to 'false', the product is disabled. No new licensees can be registered for the product, existing licensees can not obtain new licenses.
  * name `string`: Product name. Together with the version identifies the product for the end customer.
  * version `string`: Product version. Convenience parameter, additional to the product name.
  * licenseeAutoCreate `boolean`: If set to 'true', non-existing licensees will be created at first validation attempt.
  * description `string`: Product description.
  * licensingInfo `string`: Licensing information.
  * licenseeSecretMode `string` (values: DISABLED, PREDEFINED, CLIENT): Licensee secret mode for product. Supported types: DISABLED, PREDEFINED, CLIENT
  * vatMode `string` (values: GROSS, NET): Vat mode for product. Supported types: GROSS, NET

#### Output
* output [netlicensing](#netlicensing)

### listProductModules
Return a list of all product modules for the current vendor


```js
netlicensing.listProductModules(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [netlicensing](#netlicensing)

### createProductModule
Creates a new product module


```js
netlicensing.createProductModule({
  "productNumber": "",
  "active": true,
  "name": "",
  "licensingModel": []
}, context)
```

#### Input
* input `object`
  * productNumber **required** `string`: Unique number (across all products of a vendor) that identifies the product module. Vendor can assign this number when creating a product module or let NetLicensing generate one. Read-only after creation of the first licensee for the product.
  * number `string`: Unique number (across all products of a vendor) that identifies the product module. Vendor can assign this number when creating a product module or let NetLicensing generate one. Read-only after creation of the first licensee for the product.
  * active **required** `boolean`: If set to 'false', the product module is disabled. Licensees can not obtain any new licenses for this product module.
  * name **required** `string`: Product module name that is visible to the end customers in NetLicensing Shop.
  * licensingModel **required** `array`: Licensing model applied to this product module. Defines what license templates can be configured for the product module and how licenses for this product module are processed during validation.
  * maxCheckoutValidity `integer`: Maximum checkout validity (days). Mandatory for 'Floating' licensing model.
  * yellowThreshold `integer`: Remaining time volume for yellow level. Mandatory for 'Rental' licensing model.
  * redThreshold `integer`: Remaining time volume for red level. Mandatory for 'Rental' licensing model.
  * licenseTemplate `array`: License template. Mandatory for 'Try &amp; Buy' licensing model.

#### Output
* output [netlicensing](#netlicensing)

### deleteProductModule
Delete a product module by number


```js
netlicensing.deleteProductModule({
  "productModuleNumber": ""
}, context)
```

#### Input
* input `object`
  * productModuleNumber **required** `string`: Unique number (across all products of a vendor) that identifies the product module.
  * forceCascade `boolean`: Force object deletion and all descendants.

#### Output
* output [netlicensing](#netlicensing)

### getProductModule
Return a product module by productModuleNumber


```js
netlicensing.getProductModule({
  "productModuleNumber": ""
}, context)
```

#### Input
* input `object`
  * productModuleNumber **required** `string`: Unique number (across all products of a vendor) that identifies the product module. Vendor can assign this number when creating a product module or let NetLicensing generate one. Read-only after creation of the first licensee for the product.

#### Output
* output [netlicensing](#netlicensing)

### updateProductModule
Sets the provided properties to a product module. Return an updated product module


```js
netlicensing.updateProductModule({
  "productModuleNumber": ""
}, context)
```

#### Input
* input `object`
  * productModuleNumber **required** `string`: Unique number (across all products of a vendor) that identifies the product module. Vendor can assign this number when creating a product module or let NetLicensing generate one. Read-only after creation of the first licensee for the product.
  * number `string`: New product module number (update).
  * active `boolean`: If set to 'false', the product module is disabled. Licensees can not obtain any new licenses for this product module.
  * name `string`: Product module name that is visible to the end customers in NetLicensing Shop.
  * licensingModel `array`: Licensing model applied to this product module. Defines what license templates can be configured for the product module and how licenses for this product module are processed during validation.
  * maxCheckoutValidity `integer`: Maximum checkout validity (days). Mandatory for 'Floating' licensing model.
  * yellowThreshold `integer`: Remaining time volume for yellow level. Mandatory for 'Rental' licensing model.
  * redThreshold `integer`: Remaining time volume for red level. Mandatory for 'Rental' licensing model.
  * licenseTemplate `array`: License template. Mandatory for 'Try &amp; Buy' licensing model.

#### Output
* output [netlicensing](#netlicensing)

### listTokens
Return a list of all tokens for the current vendor


```js
netlicensing.listTokens(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [netlicensing](#netlicensing)

### createToken
Create token by tokenType and additional token parameters


```js
netlicensing.createToken({
  "tokenType": ""
}, context)
```

#### Input
* input `object`
  * tokenType **required** `string` (values: DEFAULT, SHOP, APIKEY): Token type to be generated
  * licenseeNumber `string`: for <i>tokenType=SHOP</i> only (mandatory); identifies licensee that will be assigned to the shop token
  * successURL `string`: for <i>tokenType=SHOP</i> only; take customers to this URL when they finish checkout
  * successURLTitle `string`: for <i>tokenType=SHOP</i> only; shop link title for successful checkout process
  * cancelURL `string`: for <i>tokenType=SHOP</i> only; take customers to this URL when they cancel their checkout
  * cancelURLTitle `string`: for <i>tokenType=SHOP</i> only; shop link title for cancel checkout process

#### Output
* output [netlicensing](#netlicensing)

### deleteToken
Delete a token by number


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
Return a token by tokenNumber


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
Return a list of all transactions for the current vendor


```js
netlicensing.listTransactions(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [netlicensing](#netlicensing)

### createTransaction
Creates a new transaction


```js
netlicensing.createTransaction({
  "licenseeNumber": "",
  "active": true,
  "status": "",
  "source": ""
}, context)
```

#### Input
* input `object`
  * licenseeNumber **required** `string`
  * number `string`: Unique number (across all products of a vendor) that identifies the transaction
  * active **required** `boolean`: always true for transactions
  * status **required** `string` (values: CANCELLED, CLOSED, PENDING)
  * source **required** `string` (values: SHOP): AUTO transaction for internal use only
  * dateCreated `string`
  * dateClosed `string`
  * paymentMethod `string`

#### Output
* output [netlicensing](#netlicensing)

### getTransaction
Return a transaction by transactionNumber


```js
netlicensing.getTransaction({
  "transactionNumber": ""
}, context)
```

#### Input
* input `object`
  * transactionNumber **required** `string`: Unique number (across all products of a vendor) that identifies the transaction

#### Output
* output [netlicensing](#netlicensing)

### updateTransaction
Sets the provided properties to a transaction. Return an updated transaction


```js
netlicensing.updateTransaction({
  "transactionNumber": ""
}, context)
```

#### Input
* input `object`
  * transactionNumber **required** `string`: Unique number (across all products of a vendor) that identifies the transaction
  * number `string`: Unique number (across all products of a vendor) that identifies the transaction
  * active `boolean`: always true for transactions
  * status `string` (values: CANCELLED, CLOSED, PENDING)
  * source `string` (values: SHOP): AUTO transaction for internal use only
  * dateCreated `string`
  * dateClosed `string`
  * paymentMethod `string`

#### Output
* output [netlicensing](#netlicensing)

### licenseTypes
Return a list of all license types supported by the service


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

**This integration has no definitions**
