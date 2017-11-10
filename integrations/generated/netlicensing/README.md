# @datafire/netlicensing

Client library for Labs64 NetLicensing RESTful API Test Center

## Installation and Usage
```bash
npm install --save datafire @datafire/netlicensing
```

```js
let datafire = require('datafire');
let netlicensing = require('@datafire/netlicensing').create({
  api_key: "",
  username: "",
  password: "",
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

#### Parameters
*This action has no parameters*

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

#### Parameters
* licenseeNumber (string) **required**
* licenseTemplateNumber (string) **required**
* active (boolean) **required**
* number (string) **required**
* name (string) - Name for the licensed item. Set from license template on creation, if not specified explicitly.
* parentfeature (string) - Mandatory for 'TIMEVOLUME' license type and 'RENTAL' licensing model
* timeVolume (string) - Mandatory for 'TIMEVOLUME' license type.
* startDate (string) - Mandatory for 'TIMEVOLUME' license type.
* price (number) - Price for the license. If >0, it must always be accompanied by the currency specification. Read-only, set from license template on creation
* currency (string) - Specifies currency for the license price. Check data types to discover which currencies are supported. Read-only, set from license template on creation
* hidden (boolean) - If set to 'true', this license is not shown in NetLicensing Shop as purchased license. Set from license template on creation, if not specified explicitly

### deleteLicense
Delete license by a licenseNumber


```js
netlicensing.deleteLicense({
  "licenseNumber": ""
}, context)
```

#### Parameters
* licenseNumber (string) **required** - Unique number (across all products/licensees of a vendor) that identifies the license. Vendor can assign this number when creating a license or let NetLicensing generate one. Read-only after corresponding creation transaction status is set to closed.

### getLicense
Get license by a licenseNumber


```js
netlicensing.getLicense({
  "licenseNumber": ""
}, context)
```

#### Parameters
* licenseNumber (string) **required** - Unique number (across all products/licensees of a vendor) that identifies the license. Vendor can assign this number when creating a license or let NetLicensing generate one. Read-only after corresponding creation transaction status is set to closed.

### updateLicense
Update license by a licenseNumber


```js
netlicensing.updateLicense({
  "licenseNumber": ""
}, context)
```

#### Parameters
* licenseNumber (string) **required** - Unique number (across all products/licensees of a vendor) that identifies the license. Vendor can assign this number when creating a license or let NetLicensing generate one. Read-only after corresponding creation transaction status is set to closed.
* number (string) - Unique number (across all products/licensees of a vendor) that identifies the license. Vendor can assign this number when creating a license or let NetLicensing generate one. Read-only after corresponding creation transaction status is set to closed.
* active (boolean)
* name (string) - Name for the licensed item. Set from license template on creation, if not specified explicitly.
* startDate (string) - for TIMEVOLUME licenseType
* parentfeature (string)
* timeVolume (string)
* price (number) - Price for the license. If > 0, it must always be accompanied by the currency specification. Read-only, set from license template on creation
* currency (string) - Specifies currency for the license price. Check data types to discover which currencies are supported. Read-only, set from license template on creation
* hidden (boolean) - If set to 'true', this license is not shown in NetLicensing Shop as purchased license. Set from license template on creation, if not specified explicitly

### listLicensees
Return a list of all licensees for the current vendor


```js
netlicensing.listLicensees(null, context)
```

#### Parameters
*This action has no parameters*

### createLicensee
Creates a new licensee


```js
netlicensing.createLicensee({
  "productNumber": "",
  "active": true
}, context)
```

#### Parameters
* number (string) - Unique number (across all products of a vendor) that identifies the licensee. Vendor can assign this number when creating a licensee or let NetLicensing generate one. Read-only after creation of the first license for the licensee
* productNumber (string) **required** - productNumber to assign new licensee object
* name (string)
* active (boolean) **required** - If set to 'false', the licensee is disabled. Licensee can not obtain new licenses, and validation is disabled
* licenseeSecret (string) - Licensee Secret for licensee.
* markedForTransfer (boolean) - Mark licensee for transfer.

### deleteLicensee
Delete a licensee by number


```js
netlicensing.deleteLicensee({
  "licenseeNumber": ""
}, context)
```

#### Parameters
* licenseeNumber (string) **required** - Unique number (across all products of a vendor) that identifies the licensee.
* forceCascade (boolean) - Force object deletion and all descendants.

### getLicensee
Return a licensee by licenseeNumber


```js
netlicensing.getLicensee({
  "licenseeNumber": ""
}, context)
```

#### Parameters
* licenseeNumber (string) **required** - Unique number (across all products of a vendor) that identifies the licensee. Vendor can assign this number when creating a licensee or let NetLicensing generate one. Read-only after creation of the first license for the licensee.

### updateLicensee
Sets the provided properties to a licensee. Return an updated licensee


```js
netlicensing.updateLicensee({
  "licenseeNumber": ""
}, context)
```

#### Parameters
* licenseeNumber (string) **required** - Unique number (across all products of a vendor) that identifies the licensee. Vendor can assign this number when creating a licensee or let NetLicensing generate one. Read-only after creation of the first license for the licensee.
* number (string) - New licensee number (update).
* active (boolean) - If set to 'false', the licensee is disabled. Licensee can not obtain new licenses, and validation is disabled
* name (string)
* licenseeSecret (string) - Licensee Secret for licensee.
* markedForTransfer (boolean) - Mark licensee for transfer.

### transferLicenses
Licenses transfer between licensees


```js
netlicensing.transferLicenses({
  "licenseeNumber": "",
  "sourceLicenseeNumber": ""
}, context)
```

#### Parameters
* licenseeNumber (string) **required** - Licensee number with a maximum length of 1000 characters
* sourceLicenseeNumber (string) **required** - Licensee number which licenses to be transferred

### validateLicensee
Validates active licenses of the licensee


```js
netlicensing.validateLicensee({
  "licenseeNumber": ""
}, context)
```

#### Parameters
* licenseeNumber (string) **required** - Licensee number with a maximum length of 1000 characters
* productNumber (string) - Product number, must be provided when 'licensee auto-create' is enabled (see also Product JavaDoc). Identifies the product to which new licensee should be added
* licenseeName (string) - Human-readable name for the auto-created licensee (will be set as custom Licensee property)
* licenseeSecret (string) - Licensee Secret key for licensee

### listLicenseTemplates
Return a list of all license templates for the current vendor


```js
netlicensing.listLicenseTemplates(null, context)
```

#### Parameters
*This action has no parameters*

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

#### Parameters
* productModuleNumber (string) **required** - Number of product module to сreate license template object
* number (string) **required** - lUnique number (across all products of a vendor) that identifies the license template. Vendor can assign this number when creating a license template or let NetLicensing generate one. Read-only after creation of the first license from this license template.
* name (string) **required** - license template name to сreate license template object
* active (boolean) **required** - If set to 'false', the license template is disabled. Licensee can not obtain any new licenses off this license template.
* licenseType (array) **required** - type of licenses created from this license template. Supported types: FEATURE, TIMEVOLUME
* timeVolume (string) - Mandatory for 'TIMEVOLUME' license type.
* maxSessions (string) - Mandatory for 'FLOATING' license type.
* price (number) - price for the license. If >0, it must always be accompanied by the currency specification.
* currency (string) - specifies currency for the license price. Check data types to discover which currencies are supported.
* automatic (boolean) - If set to 'true', every new licensee automatically gets one license out of this license template on creation. Automatic licenses must have their price set to 0.
* hidden (boolean) - If set to 'true', this license template is not shown in NetLicensing Shop as offered for purchase.
* hideLicenses (boolean) - If set to 'true', licenses from this license template are not visible to the end customer, but participate in validation.

### deleteLicenseTemplate
Delete a license template by number.


```js
netlicensing.deleteLicenseTemplate({
  "licenseTemplateNumber": ""
}, context)
```

#### Parameters
* licenseTemplateNumber (string) **required** - Unique number (across all products of a vendor) that identifies the license template.
* forceCascade (boolean) - Force object deletion and all descendants.

### getLicenseTemplate
Return a license template by licenseTemplateNumber


```js
netlicensing.getLicenseTemplate({
  "licenseTemplateNumber": ""
}, context)
```

#### Parameters
* licenseTemplateNumber (string) **required** - Unique number (across all products of a vendor) that identifies the license template. Vendor can assign this number when creating a license template or let NetLicensing generate one. Read-only after creation of the first license from this license template.

### updateLicenseTemplate
Sets the provided properties to a license template. Return an updated license template


```js
netlicensing.updateLicenseTemplate({
  "licenseTemplateNumber": ""
}, context)
```

#### Parameters
* licenseTemplateNumber (string) **required** - Unique number (across all products of a vendor) that identifies the license template. Vendor can assign this number when creating a license template or let NetLicensing generate one. Read-only after creation of the first license from this license template.
* number (string) - New license template number (update).
* name (string) - Name for the licensed item
* active (boolean) - If set to 'false', the license template is disabled. Licensee can not obtain any new licenses off this license template.
* licenseType (array) - type of licenses created from this license template. Supported types: FEATURE, TIMEVOLUME, FLOATING
* timeVolume (string) - Mandatory for 'TIMEVOLUME' license type.
* maxSessions (string) - Mandatory for 'FLOATING' license type.
* price (number) - Price for the license. If >0, it must always be accompanied by the currency specification.
* currency (string) - Specifies currency for the license price. Check data types to discover which currencies are supported.
* automatic (boolean) - If set to 'true', every new licensee automatically gets one license out of this license template on creation. Automatic licenses must have their price set to 0.
* hidden (boolean) - If set to 'true', this license template is not shown in NetLicensing Shop as offered for purchase.
* hideLicenses (boolean) - If set to 'true', licenses from this license template are not visible to the end customer, but participate in validation.

### listPaymentMethods
Return a list of all payment methods for the current vendor


```js
netlicensing.listPaymentMethods(null, context)
```

#### Parameters
*This action has no parameters*

### getPaymentMethod
Return a payment method info by paymentMethodNumber


```js
netlicensing.getPaymentMethod({
  "paymentMethodNumber": ""
}, context)
```

#### Parameters
* paymentMethodNumber (string) **required** - Payment method number

### updatePaymentMethod
Sets the provided properties to a payment method. Return an updated payment method


```js
netlicensing.updatePaymentMethod({
  "paymentMethodNumber": ""
}, context)
```

#### Parameters
* paymentMethodNumber (string) **required** - Payment method number
* active (boolean) - If set to 'false', the payment method is disabled.
* paypal.subject (string) - The e-mail address of the PayPal account for which you are making the API calls.

### listProducts
Return a list of all configured products for the current vendor


```js
netlicensing.listProducts(null, context)
```

#### Parameters
*This action has no parameters*

### createProduct
Creates a new product


```js
netlicensing.createProduct({
  "active": true,
  "name": "",
  "version": ""
}, context)
```

#### Parameters
* number (string) - Unique number that identifies the product. Vendor can assign this number when creating a product or let NetLicensing generate one.
* active (boolean) **required** - If set to 'false', the product is disabled. No new licensees can be registered for the product, existing licensees can not obtain new licenses.
* name (string) **required** - Product name. Together with the version identifies the product for the end customer.
* version (string) **required** - Product version. Convenience parameter, additional to the product name.
* licenseeAutoCreate (boolean) - If set to 'true', non-existing licensees will be created at first validation attempt.
* description (string) - Product description.
* licensingInfo (string) - Licensing information.
* licenseeSecretMode (string) - Licensee secret mode for product. Supported types: DISABLED, PREDEFINED, CLIENT
* vatMode (string) - Vat mode for product. Supported types: GROSS, NET

### deleteProduct
Delete a product by number


```js
netlicensing.deleteProduct({
  "productNumber": ""
}, context)
```

#### Parameters
* productNumber (string) **required** - Unique number that identifies the product.
* forceCascade (boolean) - Force object deletion and all descendants.

### productNumber
Return a product by productNumber


```js
netlicensing.productNumber({
  "productNumber": ""
}, context)
```

#### Parameters
* productNumber (string) **required** - Unique number that identifies the product.

### updateProduct
Sets the provided properties to a product. Return an updated product


```js
netlicensing.updateProduct({
  "productNumber": ""
}, context)
```

#### Parameters
* productNumber (string) **required** - Unique number that identifies the product.
* number (string) - New product number (update)
* active (boolean) - If set to 'false', the product is disabled. No new licensees can be registered for the product, existing licensees can not obtain new licenses.
* name (string) - Product name. Together with the version identifies the product for the end customer.
* version (string) - Product version. Convenience parameter, additional to the product name.
* licenseeAutoCreate (boolean) - If set to 'true', non-existing licensees will be created at first validation attempt.
* description (string) - Product description.
* licensingInfo (string) - Licensing information.
* licenseeSecretMode (string) - Licensee secret mode for product. Supported types: DISABLED, PREDEFINED, CLIENT
* vatMode (string) - Vat mode for product. Supported types: GROSS, NET

### listProductModules
Return a list of all product modules for the current vendor


```js
netlicensing.listProductModules(null, context)
```

#### Parameters
*This action has no parameters*

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

#### Parameters
* productNumber (string) **required** - Unique number (across all products of a vendor) that identifies the product module. Vendor can assign this number when creating a product module or let NetLicensing generate one. Read-only after creation of the first licensee for the product.
* number (string) - Unique number (across all products of a vendor) that identifies the product module. Vendor can assign this number when creating a product module or let NetLicensing generate one. Read-only after creation of the first licensee for the product.
* active (boolean) **required** - If set to 'false', the product module is disabled. Licensees can not obtain any new licenses for this product module.
* name (string) **required** - Product module name that is visible to the end customers in NetLicensing Shop.
* licensingModel (array) **required** - Licensing model applied to this product module. Defines what license templates can be configured for the product module and how licenses for this product module are processed during validation.
* maxCheckoutValidity (integer) - Maximum checkout validity (days). Mandatory for 'Floating' licensing model.
* yellowThreshold (integer) - Remaining time volume for yellow level. Mandatory for 'Rental' licensing model.
* redThreshold (integer) - Remaining time volume for red level. Mandatory for 'Rental' licensing model.
* licenseTemplate (array) - License template. Mandatory for 'Try &amp; Buy' licensing model.

### deleteProductModule
Delete a product module by number


```js
netlicensing.deleteProductModule({
  "productModuleNumber": ""
}, context)
```

#### Parameters
* productModuleNumber (string) **required** - Unique number (across all products of a vendor) that identifies the product module.
* forceCascade (boolean) - Force object deletion and all descendants.

### getProductModule
Return a product module by productModuleNumber


```js
netlicensing.getProductModule({
  "productModuleNumber": ""
}, context)
```

#### Parameters
* productModuleNumber (string) **required** - Unique number (across all products of a vendor) that identifies the product module. Vendor can assign this number when creating a product module or let NetLicensing generate one. Read-only after creation of the first licensee for the product.

### updateProductModule
Sets the provided properties to a product module. Return an updated product module


```js
netlicensing.updateProductModule({
  "productModuleNumber": ""
}, context)
```

#### Parameters
* productModuleNumber (string) **required** - Unique number (across all products of a vendor) that identifies the product module. Vendor can assign this number when creating a product module or let NetLicensing generate one. Read-only after creation of the first licensee for the product.
* number (string) - New product module number (update).
* active (boolean) - If set to 'false', the product module is disabled. Licensees can not obtain any new licenses for this product module.
* name (string) - Product module name that is visible to the end customers in NetLicensing Shop.
* licensingModel (array) - Licensing model applied to this product module. Defines what license templates can be configured for the product module and how licenses for this product module are processed during validation.
* maxCheckoutValidity (integer) - Maximum checkout validity (days). Mandatory for 'Floating' licensing model.
* yellowThreshold (integer) - Remaining time volume for yellow level. Mandatory for 'Rental' licensing model.
* redThreshold (integer) - Remaining time volume for red level. Mandatory for 'Rental' licensing model.
* licenseTemplate (array) - License template. Mandatory for 'Try &amp; Buy' licensing model.

### listTokens
Return a list of all tokens for the current vendor


```js
netlicensing.listTokens(null, context)
```

#### Parameters
*This action has no parameters*

### createToken
Create token by tokenType and additional token parameters


```js
netlicensing.createToken({
  "tokenType": ""
}, context)
```

#### Parameters
* tokenType (string) **required** - Token type to be generated
* licenseeNumber (string) - for <i>tokenType=SHOP</i> only (mandatory); identifies licensee that will be assigned to the shop token
* successURL (string) - for <i>tokenType=SHOP</i> only; take customers to this URL when they finish checkout
* successURLTitle (string) - for <i>tokenType=SHOP</i> only; shop link title for successful checkout process
* cancelURL (string) - for <i>tokenType=SHOP</i> only; take customers to this URL when they cancel their checkout
* cancelURLTitle (string) - for <i>tokenType=SHOP</i> only; shop link title for cancel checkout process

### deleteToken
Delete a token by number


```js
netlicensing.deleteToken({
  "tokenNumber": ""
}, context)
```

#### Parameters
* tokenNumber (string) **required** - Token number

### getToken
Return a token by tokenNumber


```js
netlicensing.getToken({
  "tokenNumber": ""
}, context)
```

#### Parameters
* tokenNumber (string) **required** - Token number

### listTransactions
Return a list of all transactions for the current vendor


```js
netlicensing.listTransactions(null, context)
```

#### Parameters
*This action has no parameters*

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

#### Parameters
* licenseeNumber (string) **required**
* number (string) - Unique number (across all products of a vendor) that identifies the transaction
* active (boolean) **required** - always true for transactions
* status (string) **required**
* source (string) **required** - AUTO transaction for internal use only
* dateCreated (string)
* dateClosed (string)
* paymentMethod (string)

### getTransaction
Return a transaction by transactionNumber


```js
netlicensing.getTransaction({
  "transactionNumber": ""
}, context)
```

#### Parameters
* transactionNumber (string) **required** - Unique number (across all products of a vendor) that identifies the transaction

### updateTransaction
Sets the provided properties to a transaction. Return an updated transaction


```js
netlicensing.updateTransaction({
  "transactionNumber": ""
}, context)
```

#### Parameters
* transactionNumber (string) **required** - Unique number (across all products of a vendor) that identifies the transaction
* number (string) - Unique number (across all products of a vendor) that identifies the transaction
* active (boolean) - always true for transactions
* status (string)
* source (string) - AUTO transaction for internal use only
* dateCreated (string)
* dateClosed (string)
* paymentMethod (string)

### licenseTypes
Return a list of all license types supported by the service


```js
netlicensing.licenseTypes(null, context)
```

#### Parameters
*This action has no parameters*

### licensingModels
Return a list of all licensing models supported by the service


```js
netlicensing.licensingModels(null, context)
```

#### Parameters
*This action has no parameters*

