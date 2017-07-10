# @datafire/netlicensing
The Labs64 <a href='https://www.labs64.de/confluence/x/pwCo' target='_blank'>NetLicensing RESTful API</a> gives you access to NetLicensing’s core features.<br/><br/><strong>Authentication</strong><br/>You authenticate to the NetLicensing API by providing your account credentials or simply use our demo account - <code>demo:demo</code><br/><br/>Find out more about Labs64 NetLicensing at <a href='http://netlicensing.io' target='_blank'>netlicensing.io</a>

## Operation: listLicenses
Return a list of all licenses for the current vendor

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/netlicensing"
  },
  "type": "array"
}
```
## Operation: createLicense
Creates a new license

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "licenseeNumber": {
      "type": "string"
    },
    "licenseTemplateNumber": {
      "type": "string"
    },
    "active": {
      "type": "boolean"
    },
    "number": {
      "type": "string"
    },
    "name": {
      "type": "string",
      "description": "Name for the licensed item. Set from license template on creation, if not specified explicitly."
    },
    "parentfeature": {
      "type": "string",
      "description": "Mandatory for 'TIMEVOLUME' license type and 'RENTAL' licensing model"
    },
    "timeVolume": {
      "type": "string",
      "description": "Mandatory for 'TIMEVOLUME' license type."
    },
    "startDate": {
      "type": "string",
      "format": "date-time",
      "description": "Mandatory for 'TIMEVOLUME' license type."
    },
    "price": {
      "type": "number",
      "format": "double",
      "description": "Price for the license. If >0, it must always be accompanied by the currency specification. Read-only, set from license template on creation"
    },
    "currency": {
      "type": "string",
      "description": "Specifies currency for the license price. Check data types to discover which currencies are supported. Read-only, set from license template on creation"
    },
    "hidden": {
      "type": "boolean",
      "description": "If set to 'true', this license is not shown in NetLicensing Shop as purchased license. Set from license template on creation, if not specified explicitly"
    }
  },
  "additionalProperties": false,
  "required": [
    "licenseeNumber",
    "licenseTemplateNumber",
    "active",
    "number"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/netlicensing"
}
```
## Operation: deleteLicense
Delete license by a licenseNumber

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "licenseNumber": {
      "type": "string",
      "description": "Unique number (across all products/licensees of a vendor) that identifies the license. Vendor can assign this number when creating a license or let NetLicensing generate one. Read-only after corresponding creation transaction status is set to closed."
    }
  },
  "additionalProperties": false,
  "required": [
    "licenseNumber"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/netlicensing"
}
```
## Operation: getLicense
Get license by a licenseNumber

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "licenseNumber": {
      "type": "string",
      "description": "Unique number (across all products/licensees of a vendor) that identifies the license. Vendor can assign this number when creating a license or let NetLicensing generate one. Read-only after corresponding creation transaction status is set to closed."
    }
  },
  "additionalProperties": false,
  "required": [
    "licenseNumber"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/netlicensing"
}
```
## Operation: updateLicense
Update license by a licenseNumber

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "licenseNumber": {
      "type": "string",
      "description": "Unique number (across all products/licensees of a vendor) that identifies the license. Vendor can assign this number when creating a license or let NetLicensing generate one. Read-only after corresponding creation transaction status is set to closed."
    },
    "number": {
      "type": "string",
      "description": "Unique number (across all products/licensees of a vendor) that identifies the license. Vendor can assign this number when creating a license or let NetLicensing generate one. Read-only after corresponding creation transaction status is set to closed."
    },
    "active": {
      "type": "boolean"
    },
    "name": {
      "type": "string",
      "description": "Name for the licensed item. Set from license template on creation, if not specified explicitly."
    },
    "startDate": {
      "type": "string",
      "format": "date-time",
      "description": "for TIMEVOLUME licenseType"
    },
    "parentfeature": {
      "type": "string"
    },
    "timeVolume": {
      "type": "string"
    },
    "price": {
      "type": "number",
      "format": "double",
      "description": "Price for the license. If > 0, it must always be accompanied by the currency specification. Read-only, set from license template on creation"
    },
    "currency": {
      "type": "string",
      "description": "Specifies currency for the license price. Check data types to discover which currencies are supported. Read-only, set from license template on creation"
    },
    "hidden": {
      "type": "boolean",
      "description": "If set to 'true', this license is not shown in NetLicensing Shop as purchased license. Set from license template on creation, if not specified explicitly"
    }
  },
  "additionalProperties": false,
  "required": [
    "licenseNumber"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/netlicensing"
}
```
## Operation: listLicensees
Return a list of all licensees for the current vendor

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/netlicensing"
  },
  "type": "array"
}
```
## Operation: createLicensee
Creates a new licensee

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "number": {
      "type": "string",
      "description": "Unique number (across all products of a vendor) that identifies the licensee. Vendor can assign this number when creating a licensee or let NetLicensing generate one. Read-only after creation of the first license for the licensee"
    },
    "productNumber": {
      "type": "string",
      "description": "productNumber to assign new licensee object"
    },
    "name": {
      "type": "string"
    },
    "active": {
      "type": "boolean",
      "description": "If set to 'false', the licensee is disabled. Licensee can not obtain new licenses, and validation is disabled"
    }
  },
  "additionalProperties": false,
  "required": [
    "productNumber",
    "active"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/netlicensing"
}
```
## Operation: deleteLicensee
Delete a licensee by number

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "licenseeNumber": {
      "type": "string",
      "description": "Unique number (across all products of a vendor) that identifies the licensee."
    },
    "forceCascade": {
      "type": "boolean",
      "description": "Force object deletion and all descendants."
    }
  },
  "additionalProperties": false,
  "required": [
    "licenseeNumber"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/netlicensing"
}
```
## Operation: getLicensee
Return a licensee by licenseeNumber

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "licenseeNumber": {
      "type": "string",
      "description": "Unique number (across all products of a vendor) that identifies the licensee. Vendor can assign this number when creating a licensee or let NetLicensing generate one. Read-only after creation of the first license for the licensee."
    }
  },
  "additionalProperties": false,
  "required": [
    "licenseeNumber"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/netlicensing"
}
```
## Operation: updateLicensee
Sets the provided properties to a licensee. Return an updated licensee

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "licenseeNumber": {
      "type": "string",
      "description": "Unique number (across all products of a vendor) that identifies the licensee. Vendor can assign this number when creating a licensee or let NetLicensing generate one. Read-only after creation of the first license for the licensee."
    },
    "number": {
      "type": "string",
      "description": "New licensee number (update)."
    },
    "active": {
      "type": "boolean",
      "description": "If set to 'false', the licensee is disabled. Licensee can not obtain new licenses, and validation is disabled"
    },
    "name": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "licenseeNumber"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/netlicensing"
}
```
## Operation: validateLicensee
Validates active licenses of the licensee

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "licenseeNumber": {
      "type": "string",
      "description": "Licensee number with a maximum length of 1000 characters"
    },
    "productNumber": {
      "type": "string",
      "description": "Product number, must be provided when 'licensee auto-create' is enabled (see also Product JavaDoc). Identifies the product to which new licensee should be added"
    },
    "licenseeName": {
      "type": "string",
      "description": "Human-readable name for the auto-created licensee (will be set as custom Licensee property)"
    }
  },
  "additionalProperties": false,
  "required": [
    "licenseeNumber"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/netlicensing"
}
```
## Operation: listLicenseTemplates
Return a list of all license templates for the current vendor

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/netlicensing"
  },
  "type": "array"
}
```
## Operation: createLicenseTemplate
Creates a new license template

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "productModuleNumber": {
      "type": "string",
      "description": "Number of product module to сreate license template object"
    },
    "number": {
      "type": "string",
      "description": "lUnique number (across all products of a vendor) that identifies the license template. Vendor can assign this number when creating a license template or let NetLicensing generate one. Read-only after creation of the first license from this license template."
    },
    "name": {
      "type": "string",
      "description": "license template name to сreate license template object"
    },
    "active": {
      "type": "boolean",
      "description": "If set to 'false', the license template is disabled. Licensee can not obtain any new licenses off this license template."
    },
    "licenseType": {
      "type": "array",
      "description": "type of licenses created from this license template. Supported types: FEATURE, TIMEVOLUME"
    },
    "timeVolume": {
      "type": "string",
      "description": "Mandatory for 'TIMEVOLUME' license type."
    },
    "maxSessions": {
      "type": "string",
      "description": "Mandatory for 'FLOATING' license type."
    },
    "price": {
      "type": "number",
      "format": "double",
      "description": "price for the license. If >0, it must always be accompanied by the currency specification."
    },
    "currency": {
      "type": "string",
      "description": "specifies currency for the license price. Check data types to discover which currencies are supported."
    },
    "automatic": {
      "type": "boolean",
      "description": "If set to 'true', every new licensee automatically gets one license out of this license template on creation. Automatic licenses must have their price set to 0."
    },
    "hidden": {
      "type": "boolean",
      "description": "If set to 'true', this license template is not shown in NetLicensing Shop as offered for purchase."
    },
    "hideLicenses": {
      "type": "boolean",
      "description": "If set to 'true', licenses from this license template are not visible to the end customer, but participate in validation."
    }
  },
  "additionalProperties": false,
  "required": [
    "productModuleNumber",
    "number",
    "name",
    "active",
    "licenseType"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/netlicensing"
}
```
## Operation: deleteLicenseTemplate
Delete a license template by number.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "licenseTemplateNumber": {
      "type": "string",
      "description": "Unique number (across all products of a vendor) that identifies the license template."
    },
    "forceCascade": {
      "type": "boolean",
      "description": "Force object deletion and all descendants."
    }
  },
  "additionalProperties": false,
  "required": [
    "licenseTemplateNumber"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/netlicensing"
}
```
## Operation: getLicenseTemplate
Return a license template by licenseTemplateNumber

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "licenseTemplateNumber": {
      "type": "string",
      "description": "Unique number (across all products of a vendor) that identifies the license template. Vendor can assign this number when creating a license template or let NetLicensing generate one. Read-only after creation of the first license from this license template."
    }
  },
  "additionalProperties": false,
  "required": [
    "licenseTemplateNumber"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/netlicensing"
}
```
## Operation: updateLicenseTemplate
Sets the provided properties to a license template. Return an updated license template

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "licenseTemplateNumber": {
      "type": "string",
      "description": "Unique number (across all products of a vendor) that identifies the license template. Vendor can assign this number when creating a license template or let NetLicensing generate one. Read-only after creation of the first license from this license template."
    },
    "number": {
      "type": "string",
      "description": "New license template number (update)."
    },
    "name": {
      "type": "string",
      "description": "Name for the licensed item"
    },
    "active": {
      "type": "boolean",
      "description": "If set to 'false', the license template is disabled. Licensee can not obtain any new licenses off this license template."
    },
    "licenseType": {
      "type": "array",
      "description": "type of licenses created from this license template. Supported types: FEATURE, TIMEVOLUME, FLOATING"
    },
    "timeVolume": {
      "type": "string",
      "description": "Mandatory for 'TIMEVOLUME' license type."
    },
    "maxSessions": {
      "type": "string",
      "description": "Mandatory for 'FLOATING' license type."
    },
    "price": {
      "type": "number",
      "format": "double",
      "description": "Price for the license. If >0, it must always be accompanied by the currency specification."
    },
    "currency": {
      "type": "string",
      "description": "Specifies currency for the license price. Check data types to discover which currencies are supported."
    },
    "automatic": {
      "type": "boolean",
      "description": "If set to 'true', every new licensee automatically gets one license out of this license template on creation. Automatic licenses must have their price set to 0."
    },
    "hidden": {
      "type": "boolean",
      "description": "If set to 'true', this license template is not shown in NetLicensing Shop as offered for purchase."
    },
    "hideLicenses": {
      "type": "boolean",
      "description": "If set to 'true', licenses from this license template are not visible to the end customer, but participate in validation."
    }
  },
  "additionalProperties": false,
  "required": [
    "licenseTemplateNumber"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/netlicensing"
}
```
## Operation: listPaymentMethods
Return a list of all payment methods for the current vendor

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/netlicensing"
  },
  "type": "array"
}
```
## Operation: getPaymentMethod
Return a payment method info by paymentMethodNumber

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "paymentMethodNumber": {
      "type": "string",
      "description": "Payment method number"
    }
  },
  "additionalProperties": false,
  "required": [
    "paymentMethodNumber"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/netlicensing"
}
```
## Operation: updatePaymentMethod
Sets the provided properties to a payment method. Return an updated payment method

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "paymentMethodNumber": {
      "type": "string",
      "description": "Payment method number"
    },
    "active": {
      "type": "boolean",
      "description": "If set to 'false', the payment method is disabled."
    },
    "paypal.subject": {
      "type": "string",
      "description": "The e-mail address of the PayPal account for which you are making the API calls."
    }
  },
  "additionalProperties": false,
  "required": [
    "paymentMethodNumber"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/netlicensing"
}
```
## Operation: listProducts
Return a list of all configured products for the current vendor

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/netlicensing"
  },
  "type": "array"
}
```
## Operation: createProduct
Creates a new product

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "number": {
      "type": "string",
      "description": "Unique number that identifies the product. Vendor can assign this number when creating a product or let NetLicensing generate one."
    },
    "active": {
      "type": "boolean",
      "description": "If set to 'false', the product is disabled. No new licensees can be registered for the product, existing licensees can not obtain new licenses."
    },
    "name": {
      "type": "string",
      "description": "Product name. Together with the version identifies the product for the end customer."
    },
    "version": {
      "type": "string",
      "description": "Product version. Convenience parameter, additional to the product name."
    },
    "licenseeAutoCreate": {
      "type": "boolean",
      "description": "If set to 'true', non-existing licensees will be created at first validation attempt."
    },
    "description": {
      "type": "string",
      "description": "Product description."
    },
    "licensingInfo": {
      "type": "string",
      "description": "Licensing information."
    }
  },
  "additionalProperties": false,
  "required": [
    "active",
    "name",
    "version"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/netlicensing"
}
```
## Operation: deleteProduct
Delete a product by number

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "productNumber": {
      "type": "string",
      "description": "Unique number that identifies the product."
    },
    "forceCascade": {
      "type": "boolean",
      "description": "Force object deletion and all descendants."
    }
  },
  "additionalProperties": false,
  "required": [
    "productNumber"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/netlicensing"
}
```
## Operation: productNumber
Return a product by productNumber

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "productNumber": {
      "type": "string",
      "description": "Unique number that identifies the product."
    }
  },
  "additionalProperties": false,
  "required": [
    "productNumber"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/netlicensing"
}
```
## Operation: updateProduct
Sets the provided properties to a product. Return an updated product

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "productNumber": {
      "type": "string",
      "description": "Unique number that identifies the product."
    },
    "number": {
      "type": "string",
      "description": "New product number (update)"
    },
    "active": {
      "type": "boolean",
      "description": "If set to 'false', the product is disabled. No new licensees can be registered for the product, existing licensees can not obtain new licenses."
    },
    "name": {
      "type": "string",
      "description": "Product name. Together with the version identifies the product for the end customer."
    },
    "version": {
      "type": "string",
      "description": "Product version. Convenience parameter, additional to the product name."
    },
    "licenseeAutoCreate": {
      "type": "boolean",
      "description": "If set to 'true', non-existing licensees will be created at first validation attempt."
    },
    "description": {
      "type": "string",
      "description": "Product description."
    },
    "licensingInfo": {
      "type": "string",
      "description": "Licensing information."
    }
  },
  "additionalProperties": false,
  "required": [
    "productNumber"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/netlicensing"
}
```
## Operation: listProductModules
Return a list of all product modules for the current vendor

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/netlicensing"
  },
  "type": "array"
}
```
## Operation: createProductModule
Creates a new product module

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "productNumber": {
      "type": "string",
      "description": "Unique number (across all products of a vendor) that identifies the product module. Vendor can assign this number when creating a product module or let NetLicensing generate one. Read-only after creation of the first licensee for the product."
    },
    "number": {
      "type": "string",
      "description": "Unique number (across all products of a vendor) that identifies the product module. Vendor can assign this number when creating a product module or let NetLicensing generate one. Read-only after creation of the first licensee for the product."
    },
    "active": {
      "type": "boolean",
      "description": "If set to 'false', the product module is disabled. Licensees can not obtain any new licenses for this product module."
    },
    "name": {
      "type": "string",
      "description": "Product module name that is visible to the end customers in NetLicensing Shop."
    },
    "licensingModel": {
      "type": "array",
      "description": "Licensing model applied to this product module. Defines what license templates can be configured for the product module and how licenses for this product module are processed during validation."
    },
    "maxCheckoutValidity": {
      "type": "integer",
      "format": "int32",
      "description": "Maximum checkout validity (days). Mandatory for 'Floating' licensing model."
    },
    "yellowThreshold": {
      "type": "integer",
      "format": "int32",
      "description": "Remaining time volume for yellow level. Mandatory for 'Rental' licensing model."
    },
    "redThreshold": {
      "type": "integer",
      "format": "int32",
      "description": "Remaining time volume for red level. Mandatory for 'Rental' licensing model."
    },
    "licenseTemplate": {
      "type": "array",
      "description": "License template. Mandatory for 'Try &amp; Buy' licensing model."
    }
  },
  "additionalProperties": false,
  "required": [
    "productNumber",
    "active",
    "name",
    "licensingModel"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/netlicensing"
}
```
## Operation: deleteProductModule
Delete a product module by number

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "productModuleNumber": {
      "type": "string",
      "description": "Unique number (across all products of a vendor) that identifies the product module."
    },
    "forceCascade": {
      "type": "boolean",
      "description": "Force object deletion and all descendants."
    }
  },
  "additionalProperties": false,
  "required": [
    "productModuleNumber"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/netlicensing"
}
```
## Operation: getProductModule
Return a product module by productModuleNumber

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "productModuleNumber": {
      "type": "string",
      "description": "Unique number (across all products of a vendor) that identifies the product module. Vendor can assign this number when creating a product module or let NetLicensing generate one. Read-only after creation of the first licensee for the product."
    }
  },
  "additionalProperties": false,
  "required": [
    "productModuleNumber"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/netlicensing"
}
```
## Operation: updateProductModule
Sets the provided properties to a product module. Return an updated product module

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "productModuleNumber": {
      "type": "string",
      "description": "Unique number (across all products of a vendor) that identifies the product module. Vendor can assign this number when creating a product module or let NetLicensing generate one. Read-only after creation of the first licensee for the product."
    },
    "number": {
      "type": "string",
      "description": "New product module number (update)."
    },
    "active": {
      "type": "boolean",
      "description": "If set to 'false', the product module is disabled. Licensees can not obtain any new licenses for this product module."
    },
    "name": {
      "type": "string",
      "description": "Product module name that is visible to the end customers in NetLicensing Shop."
    },
    "licensingModel": {
      "type": "array",
      "description": "Licensing model applied to this product module. Defines what license templates can be configured for the product module and how licenses for this product module are processed during validation."
    },
    "maxCheckoutValidity": {
      "type": "integer",
      "format": "int32",
      "description": "Maximum checkout validity (days). Mandatory for 'Floating' licensing model."
    },
    "yellowThreshold": {
      "type": "integer",
      "format": "int32",
      "description": "Remaining time volume for yellow level. Mandatory for 'Rental' licensing model."
    },
    "redThreshold": {
      "type": "integer",
      "format": "int32",
      "description": "Remaining time volume for red level. Mandatory for 'Rental' licensing model."
    },
    "licenseTemplate": {
      "type": "array",
      "description": "License template. Mandatory for 'Try &amp; Buy' licensing model."
    }
  },
  "additionalProperties": false,
  "required": [
    "productModuleNumber"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/netlicensing"
}
```
## Operation: listTokens
Return a list of all tokens for the current vendor

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/netlicensing"
  },
  "type": "array"
}
```
## Operation: createToken
Create token by tokenType and additional token parameters

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "tokenType": {
      "type": "string",
      "description": "Token type to be generated",
      "enum": [
        "DEFAULT",
        "SHOP",
        "APIKEY"
      ]
    },
    "licenseeNumber": {
      "type": "string",
      "description": "for <i>tokenType=SHOP</i> only (mandatory); identifies licensee that will be assigned to the shop token"
    },
    "successURL": {
      "type": "string",
      "description": "for <i>tokenType=SHOP</i> only; take customers to this URL when they finish checkout"
    },
    "successURLTitle": {
      "type": "string",
      "description": "for <i>tokenType=SHOP</i> only; shop link title for successful checkout process"
    },
    "cancelURL": {
      "type": "string",
      "description": "for <i>tokenType=SHOP</i> only; take customers to this URL when they cancel their checkout"
    },
    "cancelURLTitle": {
      "type": "string",
      "description": "for <i>tokenType=SHOP</i> only; shop link title for cancel checkout process"
    }
  },
  "additionalProperties": false,
  "required": [
    "tokenType"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/netlicensing"
}
```
## Operation: deleteToken
Delete a token by number

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "tokenNumber": {
      "type": "string",
      "description": "Token number"
    }
  },
  "additionalProperties": false,
  "required": [
    "tokenNumber"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/netlicensing"
}
```
## Operation: getToken
Return a token by tokenNumber

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "tokenNumber": {
      "type": "string",
      "description": "Token number"
    }
  },
  "additionalProperties": false,
  "required": [
    "tokenNumber"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/netlicensing"
}
```
## Operation: listTransactions
Return a list of all transactions for the current vendor

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/netlicensing"
  },
  "type": "array"
}
```
## Operation: createTransaction
Creates a new transaction

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "licenseeNumber": {
      "type": "string"
    },
    "number": {
      "type": "string",
      "description": "Unique number (across all products of a vendor) that identifies the transaction"
    },
    "active": {
      "type": "boolean",
      "description": "always true for transactions"
    },
    "status": {
      "type": "string",
      "enum": [
        "CANCELLED",
        "CLOSED",
        "PENDING"
      ]
    },
    "source": {
      "type": "string",
      "description": "AUTO transaction for internal use only",
      "enum": [
        "SHOP"
      ]
    },
    "dateCreated": {
      "type": "string",
      "format": "date-time"
    },
    "dateClosed": {
      "type": "string",
      "format": "date-time"
    },
    "paymentMethod": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "licenseeNumber",
    "active",
    "status",
    "source"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/netlicensing"
}
```
## Operation: getTransaction
Return a transaction by transactionNumber

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "transactionNumber": {
      "type": "string",
      "description": "Unique number (across all products of a vendor) that identifies the transaction"
    }
  },
  "additionalProperties": false,
  "required": [
    "transactionNumber"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/netlicensing"
}
```
## Operation: updateTransaction
Sets the provided properties to a transaction. Return an updated transaction

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "transactionNumber": {
      "type": "string",
      "description": "Unique number (across all products of a vendor) that identifies the transaction"
    },
    "number": {
      "type": "string",
      "description": "Unique number (across all products of a vendor) that identifies the transaction"
    },
    "active": {
      "type": "boolean",
      "description": "always true for transactions"
    },
    "status": {
      "type": "string",
      "enum": [
        "CANCELLED",
        "CLOSED",
        "PENDING"
      ]
    },
    "source": {
      "type": "string",
      "description": "AUTO transaction for internal use only",
      "enum": [
        "SHOP"
      ]
    },
    "dateCreated": {
      "type": "string",
      "format": "date-time"
    },
    "dateClosed": {
      "type": "string",
      "format": "date-time"
    },
    "paymentMethod": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "transactionNumber"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/netlicensing"
}
```
## Operation: licenseTypes
Return a list of all license types supported by the service

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "$ref": "#/definitions/netlicensing"
}
```
## Operation: licensingModels
Return a list of all licensing models supported by the service

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "$ref": "#/definitions/netlicensing"
}
```
