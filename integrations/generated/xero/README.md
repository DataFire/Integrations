# @datafire/xero

Client library for Accounting

## Installation and Usage
```bash
npm install --save @datafire/xero
```
```js
let xero = require('@datafire/xero').create({
  consumer_key: "",
  consumer_secret: "",
  token: "",
  token_secret: ""
});

xero.Users.get({}).then(data => {
  console.log(data);
});
```

## Description

# Introduction
The Xero Accounting API is a RESTful web service and uses the OAuth (v1.0a) protocol to authenticate 3rd party applications. The Accounting API exposes accounting and related functions of the main Xero application and can be used for a variety of purposes such as creating transactions like invoices and credit notes, right through to extracting accounting data via our reports endpoint.


## Actions

### Accounts.get
Retrieve the chart of accounts


```js
xero.Accounts.get({}, context)
```

#### Input
* input `object`
  * If-Modified-Since `string`: A UTC timestamp (yyyy-mm-ddThh:mm:ss) . Only invoices created or modified since this timestamp will be returned e.g. 2009-11-12T00:00:00
  * where `string`: Filter by an any element
  * order `string`: Order by any element returned

#### Output
* output `object`
  * Accounts `array`
    * items [Account](#account)
  * DateTimeUTC `string`: DateTime of the request
  * ID `string`: Unique identifier for each response
  * ProviderName `string`: Name of the application that made the request
  * Status `string`: OK for a successful response

### Accounts.post
Create or update accounts


```js
xero.Accounts.post({
  "Accounts": {
    "Code": "",
    "Name": "",
    "Type": ""
  }
}, context)
```

#### Input
* input `object`
  * Accounts **required** [Account](#account)

#### Output
* output `object`
  * Accounts `array`
    * items [Account](#account)
  * DateTimeUTC `string`: DateTime of the request
  * ID `string`: Unique identifier for each response
  * ProviderName `string`: Name of the application that made the request
  * Status `string`: OK for a successful response

### Accounts.put
Create new accounts


```js
xero.Accounts.put({
  "Accounts": {
    "Code": "",
    "Name": "",
    "Type": ""
  }
}, context)
```

#### Input
* input `object`
  * Accounts **required** [Account](#account)

#### Output
* output `object`
  * Accounts `array`
    * items [Account](#account)
  * DateTimeUTC `string`: DateTime of the request
  * ID `string`: Unique identifier for each response
  * ProviderName `string`: Name of the application that made the request
  * Status `string`: OK for a successful response

### Accounts.AccountID.delete
Delete an account


```js
xero.Accounts.AccountID.delete({
  "AccountID": ""
}, context)
```

#### Input
* input `object`
  * AccountID **required** `string`

#### Output
*Output schema unknown*

### Accounts.AccountID.get
Retrieve a single account


```js
xero.Accounts.AccountID.get({
  "AccountID": ""
}, context)
```

#### Input
* input `object`
  * AccountID **required** `string`

#### Output
* output `object`
  * Accounts `array`
    * items [Account](#account)
  * DateTimeUTC `string`: DateTime of the request
  * ID `string`: Unique identifier for each response
  * ProviderName `string`: Name of the application that made the request
  * Status `string`: OK for a successful response

### Accounts.AccountID.post
Update an account


```js
xero.Accounts.AccountID.post({
  "Accounts": {
    "Code": "",
    "Name": "",
    "Type": ""
  },
  "AccountID": ""
}, context)
```

#### Input
* input `object`
  * Accounts **required** [Account](#account)
  * AccountID **required** `string`

#### Output
* output `object`
  * Accounts `array`
    * items [Account](#account)
  * DateTimeUTC `string`: DateTime of the request
  * ID `string`: Unique identifier for each response
  * ProviderName `string`: Name of the application that made the request
  * Status `string`: OK for a successful response

### Accounts.AccountID.Attachments.get
Retrieve Attachments


```js
xero.Accounts.AccountID.Attachments.get({
  "AccountID": ""
}, context)
```

#### Input
* input `object`
  * AccountID **required** `string`: The Xero generated unique identifier for an account
  * If-Modified-Since `string`: A UTC timestamp (yyyy-mm-ddThh:mm:ss) . Only invoices created or modified since this timestamp will be returned e.g. 2009-11-12T00:00:00

#### Output
* output `object`
  * Attachments `array`
    * items [Attachment](#attachment)
  * DateTimeUTC `string`: DateTime of the request
  * ID `string`: Unique identifier for each response
  * ProviderName `string`: Name of the application that made the request
  * Status `string`: OK for a successful response

### Accounts.AccountID.Attachments.FileName.get
Download an Attachment


```js
xero.Accounts.AccountID.Attachments.FileName.get({
  "FileName": "",
  "AccountID": ""
}, context)
```

#### Input
* input `object`
  * FileName **required** `string`: The filename of the attachment to be downloaded
  * AccountID **required** `string`: The Xero generated unique identifier for an account
  * If-Modified-Since `string`: A UTC timestamp (yyyy-mm-ddThh:mm:ss) . Only invoices created or modified since this timestamp will be returned e.g. 2009-11-12T00:00:00

#### Output
*Output schema unknown*

### Accounts.AccountID.Attachments.FileName.post
Upload an Attachment


```js
xero.Accounts.AccountID.Attachments.FileName.post({
  "FileName": "",
  "AccountID": "",
  "Content": {
    "Content": ""
  }
}, context)
```

#### Input
* input `object`
  * FileName **required** `string`: The filename of the attachment being uploaded
  * AccountID **required** `string`: The Xero generated unique identifier for an account
  * Content **required** [Content](#content)

#### Output
* output `object`
  * Attachments `array`
    * items [Attachment](#attachment)
  * DateTimeUTC `string`: DateTime of the request
  * ID `string`: Unique identifier for each response
  * ProviderName `string`: Name of the application that made the request
  * Status `string`: OK for a successful response

### BankTransactions.get
Retrieve any spend or receive money transactions (inc. prepayments and overpayments)


```js
xero.BankTransactions.get({}, context)
```

#### Input
* input `object`
  * If-Modified-Since `string`: A UTC timestamp (yyyy-mm-ddThh:mm:ss) . Only invoices created or modified since this timestamp will be returned e.g. 2009-11-12T00:00:00
  * where `string`: Filter by an any element
  * order `string`: Order by any element returned
  * unitdp `integer`: Determines the decimal places accepted/returned on the UnitAmount. UnitAmount is 2 decimal places by default but can be increased to 4 decimal places by supplying the unitdp=4 parameter.

#### Output
* output `object`
  * BankTransactions `array`
    * items [BankTransaction](#banktransaction)
  * DateTimeUTC `string`: DateTime of the request
  * ID `string`: Unique identifier for each response
  * ProviderName `string`: Name of the application that made the request
  * Status `string`: OK for a successful response

### BankTransactions.post
Create a new spend or receive money (inc. prepayments and overpayments)


```js
xero.BankTransactions.post({
  "BankTransactions": {
    "Type": "",
    "Contact": {
      "Name": ""
    },
    "LineItems": [],
    "BankAccount": {}
  }
}, context)
```

#### Input
* input `object`
  * BankTransactions **required** [BankTransaction](#banktransaction)
  * unitdp `integer`: Determines the decimal places accepted/returned on the UnitAmount. UnitAmount is 2 decimal places by default but can be increased to 4 decimal places by supplying the unitdp=4 parameter.
  * summarizeErrors `boolean`: If you plan to submit more than one entity per API call, we recommend that you append the summarizeErrors=false querystring to your API call. This ensures that every entity is returned back to you, each having their own status attribute.

#### Output
* output `object`
  * BankTransactions `array`
    * items [BankTransaction](#banktransaction)
  * DateTimeUTC `string`: DateTime of the request
  * ID `string`: Unique identifier for each response
  * ProviderName `string`: Name of the application that made the request
  * Status `string`: OK for a successful response

### BankTransactions.put
Create a new spend or receive money (inc. prepayments and overpayments)


```js
xero.BankTransactions.put({
  "BankTransactions": {
    "Type": "",
    "Contact": {
      "Name": ""
    },
    "LineItems": [],
    "BankAccount": {}
  }
}, context)
```

#### Input
* input `object`
  * BankTransactions **required** [BankTransaction](#banktransaction)
  * summarizeErrors `boolean`: If you plan to submit more than one entity per API call, we recommend that you append the summarizeErrors=false querystring to your API call. This ensures that every entity is returned back to you, each having their own status attribute.

#### Output
* output `object`
  * BankTransactions `array`
    * items [BankTransaction](#banktransaction)
  * DateTimeUTC `string`: DateTime of the request
  * ID `string`: Unique identifier for each response
  * ProviderName `string`: Name of the application that made the request
  * Status `string`: OK for a successful response

### BankTransactions.BankTransactionID.get
Retrieve a spend or receive money (inc. prepayments and overpayments)


```js
xero.BankTransactions.BankTransactionID.get({
  "BankTransactionID": ""
}, context)
```

#### Input
* input `object`
  * BankTransactionID **required** `string`
  * unitdp `integer`: Determines the decimal places accepted/returned on the UnitAmount. UnitAmount is 2 decimal places by default but can be increased to 4 decimal places by supplying the unitdp=4 parameter.

#### Output
* output `object`
  * BankTransactions `array`
    * items [BankTransaction](#banktransaction)
  * DateTimeUTC `string`: DateTime of the request
  * ID `string`: Unique identifier for each response
  * ProviderName `string`: Name of the application that made the request
  * Status `string`: OK for a successful response

### BankTransactions.BankTransactionID.post
Update a spend or receive money


```js
xero.BankTransactions.BankTransactionID.post({
  "BankTransactions": {
    "Type": "",
    "Contact": {
      "Name": ""
    },
    "LineItems": [],
    "BankAccount": {}
  },
  "BankTransactionID": ""
}, context)
```

#### Input
* input `object`
  * BankTransactions **required** [BankTransaction](#banktransaction)
  * BankTransactionID **required** `string`
  * unitdp `integer`: Determines the decimal places accepted/returned on the UnitAmount. UnitAmount is 2 decimal places by default but can be increased to 4 decimal places by supplying the unitdp=4 parameter.

#### Output
* output `object`
  * BankTransactions `array`
    * items [BankTransaction](#banktransaction)
  * DateTimeUTC `string`: DateTime of the request
  * ID `string`: Unique identifier for each response
  * ProviderName `string`: Name of the application that made the request
  * Status `string`: OK for a successful response

### BankTransactions.BankTransactionID.Attachments.get
Retrieve Attachments


```js
xero.BankTransactions.BankTransactionID.Attachments.get({
  "BankTransactionID": ""
}, context)
```

#### Input
* input `object`
  * BankTransactionID **required** `string`: The Xero generated unique identifier for an bank transaction
  * If-Modified-Since `string`: A UTC timestamp (yyyy-mm-ddThh:mm:ss) . Only invoices created or modified since this timestamp will be returned e.g. 2009-11-12T00:00:00

#### Output
* output `object`
  * Attachments `array`
    * items [Attachment](#attachment)
  * DateTimeUTC `string`: DateTime of the request
  * ID `string`: Unique identifier for each response
  * ProviderName `string`: Name of the application that made the request
  * Status `string`: OK for a successful response

### BankTransactions.BankTransactionID.Attachments.FileName.get
Download an Attachment


```js
xero.BankTransactions.BankTransactionID.Attachments.FileName.get({
  "FileName": "",
  "BankTransactionID": ""
}, context)
```

#### Input
* input `object`
  * FileName **required** `string`: The filename of the attachment to be downloaded
  * BankTransactionID **required** `string`: The Xero generated unique identifier for an bank transaction
  * If-Modified-Since `string`: A UTC timestamp (yyyy-mm-ddThh:mm:ss) . Only invoices created or modified since this timestamp will be returned e.g. 2009-11-12T00:00:00

#### Output
*Output schema unknown*

### BankTransactions.BankTransactionID.Attachments.FileName.post
Upload an Attachment


```js
xero.BankTransactions.BankTransactionID.Attachments.FileName.post({
  "FileName": "",
  "BankTransactionID": "",
  "Content": {
    "Content": ""
  }
}, context)
```

#### Input
* input `object`
  * FileName **required** `string`: The filename of the attachment being uploaded
  * BankTransactionID **required** `string`: The Xero generated unique identifier for an bank transaction
  * Content **required** [Content](#content)

#### Output
* output `object`
  * Attachments `array`
    * items [Attachment](#attachment)
  * DateTimeUTC `string`: DateTime of the request
  * ID `string`: Unique identifier for each response
  * ProviderName `string`: Name of the application that made the request
  * Status `string`: OK for a successful response

### BankTransfers.get
Retrieve a colection of bank transfers


```js
xero.BankTransfers.get({}, context)
```

#### Input
* input `object`
  * If-Modified-Since `string`: A UTC timestamp (yyyy-mm-ddThh:mm:ss) . Only invoices created or modified since this timestamp will be returned e.g. 2009-11-12T00:00:00
  * where `string`: Filter by an any element
  * order `string`: Order by any element returned

#### Output
* output `object`
  * BankTransfers `array`
    * items [BankTransfer](#banktransfer)
  * DateTimeUTC `string`: DateTime of the request
  * ID `string`: Unique identifier for each response
  * ProviderName `string`: Name of the application that made the request
  * Status `string`: OK for a successful response

### BankTransfers.put
Create a bank transfer


```js
xero.BankTransfers.put({
  "BankTransfers": {
    "FromBankAccount": {},
    "ToBankAccount": {},
    "Amount": 0
  }
}, context)
```

#### Input
* input `object`
  * BankTransfers **required** [BankTransfer](#banktransfer)
  * summarizeErrors `boolean`: If you plan to submit more than one entity per API call, we recommend that you append the summarizeErrors=false querystring to your API call. This ensures that every entity is returned back to you, each having their own status attribute.

#### Output
* output `object`
  * BankTransfers `array`
    * items [BankTransfer](#banktransfer)
  * DateTimeUTC `string`: DateTime of the request
  * ID `string`: Unique identifier for each response
  * ProviderName `string`: Name of the application that made the request
  * Status `string`: OK for a successful response

### BankTransfers.BankTransferID.get
Retrieve an individual bank transfer


```js
xero.BankTransfers.BankTransferID.get({
  "BankTransferID": ""
}, context)
```

#### Input
* input `object`
  * BankTransferID **required** `string`

#### Output
* output `object`
  * BankTransfers `array`
    * items [BankTransfer](#banktransfer)
  * DateTimeUTC `string`: DateTime of the request
  * ID `string`: Unique identifier for each response
  * ProviderName `string`: Name of the application that made the request
  * Status `string`: OK for a successful response

### BankTransfers.BankTransferID.Attachments.FileName.get
Download an Attachment


```js
xero.BankTransfers.BankTransferID.Attachments.FileName.get({
  "FileName": "",
  "BankTransferID": ""
}, context)
```

#### Input
* input `object`
  * FileName **required** `string`: The filename of the attachment to be downloaded
  * BankTransferID **required** `string`: The Xero generated unique identifier for an BankTransfer
  * If-Modified-Since `string`: A UTC timestamp (yyyy-mm-ddThh:mm:ss) . Only invoices created or modified since this timestamp will be returned e.g. 2009-11-12T00:00:00

#### Output
*Output schema unknown*

### BankTransfers.BankTransferID.Attachments.FileName.post
Upload an Attachment


```js
xero.BankTransfers.BankTransferID.Attachments.FileName.post({
  "FileName": "",
  "BankTransferID": "",
  "Content": {
    "Content": ""
  }
}, context)
```

#### Input
* input `object`
  * FileName **required** `string`: The filename of the attachment being uploaded
  * BankTransferID **required** `string`: The Xero generated unique identifier for a BankTransfer
  * Content **required** [Content](#content)

#### Output
* output `object`
  * Attachments `array`
    * items [Attachment](#attachment)
  * DateTimeUTC `string`: DateTime of the request
  * ID `string`: Unique identifier for each response
  * ProviderName `string`: Name of the application that made the request
  * Status `string`: OK for a successful response

### BrandingThemes.get
Retrieve a collection of BrandingThemes


```js
xero.BrandingThemes.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * BrandingThemes `array`
    * items [BrandingTheme](#brandingtheme)
  * DateTimeUTC `string`: DateTime of the request
  * ID `string`: Unique identifier for each response
  * ProviderName `string`: Name of the application that made the request
  * Status `string`: OK for a successful response

### BrandingThemes.BrandingThemeID.get
Retrieve an individual BrandingTheme


```js
xero.BrandingThemes.BrandingThemeID.get({
  "BrandingThemeID": ""
}, context)
```

#### Input
* input `object`
  * BrandingThemeID **required** `string`

#### Output
* output `object`
  * BrandingThemes `array`
    * items [BrandingTheme](#brandingtheme)
  * DateTimeUTC `string`: DateTime of the request
  * ID `string`: Unique identifier for each response
  * ProviderName `string`: Name of the application that made the request
  * Status `string`: OK for a successful response

### ContactGroups.get
Retrieve a collection of contact groups


```js
xero.ContactGroups.get({}, context)
```

#### Input
* input `object`
  * If-Modified-Since `string`: A UTC timestamp (yyyy-mm-ddThh:mm:ss) . Only invoices created or modified since this timestamp will be returned e.g. 2009-11-12T00:00:00
  * where `string`: Filter by an any element
  * order `string`: Order by any element returned

#### Output
* output `object`
  * ContactGroups `array`
    * items [ContactGroup](#contactgroup)
  * DateTimeUTC `string`: DateTime of the request
  * ID `string`: Unique identifier for each response
  * ProviderName `string`: Name of the application that made the request
  * Status `string`: OK for a successful response

### ContactGroups.post
Create or update a contact group


```js
xero.ContactGroups.post({
  "ContactGroups": {
    "Name": ""
  }
}, context)
```

#### Input
* input `object`
  * ContactGroups **required** [ContactGroup](#contactgroup)
  * summarizeErrors `boolean`: If you plan to submit more than one entity per API call, we recommend that you append the summarizeErrors=false querystring to your API call. This ensures that every entity is returned back to you, each having their own status attribute.

#### Output
* output `object`
  * ContactGroups `array`
    * items [ContactGroup](#contactgroup)
  * DateTimeUTC `string`: DateTime of the request
  * ID `string`: Unique identifier for each response
  * ProviderName `string`: Name of the application that made the request
  * Status `string`: OK for a successful response

### ContactGroups.put
Create a new contact group


```js
xero.ContactGroups.put({
  "ContactGroups": {
    "Name": ""
  }
}, context)
```

#### Input
* input `object`
  * ContactGroups **required** [ContactGroup](#contactgroup)
  * summarizeErrors `boolean`: If you plan to submit more than one entity per API call, we recommend that you append the summarizeErrors=false querystring to your API call. This ensures that every entity is returned back to you, each having their own status attribute.

#### Output
* output `object`
  * ContactGroups `array`
    * items [ContactGroup](#contactgroup)
  * DateTimeUTC `string`: DateTime of the request
  * ID `string`: Unique identifier for each response
  * ProviderName `string`: Name of the application that made the request
  * Status `string`: OK for a successful response

### ContactGroups.ContactGroupID.delete
Delete a contact group


```js
xero.ContactGroups.ContactGroupID.delete({
  "ContactGroupID": ""
}, context)
```

#### Input
* input `object`
  * ContactGroupID **required** `string`

#### Output
*Output schema unknown*

### ContactGroups.ContactGroupID.get
Retrieve the ContactID and Name of all the contacts in a contact group


```js
xero.ContactGroups.ContactGroupID.get({
  "ContactGroupID": ""
}, context)
```

#### Input
* input `object`
  * ContactGroupID **required** `string`

#### Output
* output `object`
  * ContactGroups `array`
    * items [ContactGroup](#contactgroup)
  * DateTimeUTC `string`: DateTime of the request
  * ID `string`: Unique identifier for each response
  * ProviderName `string`: Name of the application that made the request
  * Status `string`: OK for a successful response

### ContactGroups.ContactGroupID.post
Update a contact group


```js
xero.ContactGroups.ContactGroupID.post({
  "ContactGroups": {
    "Name": ""
  },
  "ContactGroupID": ""
}, context)
```

#### Input
* input `object`
  * ContactGroups **required** [ContactGroup](#contactgroup)
  * ContactGroupID **required** `string`

#### Output
* output `object`
  * ContactGroups `array`
    * items [ContactGroup](#contactgroup)
  * DateTimeUTC `string`: DateTime of the request
  * ID `string`: Unique identifier for each response
  * ProviderName `string`: Name of the application that made the request
  * Status `string`: OK for a successful response

### ContactGroups.ContactGroupID.Contacts.delete
Remove all contacts from a contact group


```js
xero.ContactGroups.ContactGroupID.Contacts.delete({
  "ContactGroupID": ""
}, context)
```

#### Input
* input `object`
  * ContactGroupID **required** `string`

#### Output
*Output schema unknown*

### ContactGroups.ContactGroupID.Contacts.put
Add contacts to a contact group


```js
xero.ContactGroups.ContactGroupID.Contacts.put({
  "Contacts": {
    "Name": ""
  },
  "ContactGroupID": ""
}, context)
```

#### Input
* input `object`
  * Contacts **required** [Contact](#contact)
  * ContactGroupID **required** `string`

#### Output
* output `object`
  * ContactGroups `array`
    * items [ContactGroup](#contactgroup)
  * DateTimeUTC `string`: DateTime of the request
  * ID `string`: Unique identifier for each response
  * ProviderName `string`: Name of the application that made the request
  * Status `string`: OK for a successful response

### ContactGroups.ContactGroupID.Contacts.ContactID.delete
Remove a contact from a contact group


```js
xero.ContactGroups.ContactGroupID.Contacts.ContactID.delete({
  "ContactGroupID": "",
  "ContactID": ""
}, context)
```

#### Input
* input `object`
  * ContactGroupID **required** `string`
  * ContactID **required** `string`

#### Output
*Output schema unknown*

### Contacts.get
Retrieve a collection of contacts


```js
xero.Contacts.get({}, context)
```

#### Input
* input `object`
  * If-Modified-Since `string`: A UTC timestamp (yyyy-mm-ddThh:mm:ss) . Only invoices created or modified since this timestamp will be returned e.g. 2009-11-12T00:00:00
  * where `string`: Filter by an any element
  * order `string`: Order by any element returned
  * includeArchived `boolean`: Include archived records in the response 
  * IDs `string`: Filter by a comma-separated list of ContactIDs

#### Output
* output `object`
  * Contacts `array`
    * items [Contact](#contact)
  * DateTimeUTC `string`: DateTime of the request
  * ID `string`: Unique identifier for each response
  * ProviderName `string`: Name of the application that made the request
  * Status `string`: OK for a successful response

### Contacts.post
Create or update a contact


```js
xero.Contacts.post({
  "Contacts": {
    "Name": ""
  }
}, context)
```

#### Input
* input `object`
  * Contacts **required** [Contact](#contact)
  * summarizeErrors `boolean`: If you plan to submit more than one entity per API call, we recommend that you append the summarizeErrors=false querystring to your API call. This ensures that every entity is returned back to you, each having their own status attribute.

#### Output
* output `object`
  * Contacts `array`
    * items [Contact](#contact)
  * DateTimeUTC `string`: DateTime of the request
  * ID `string`: Unique identifier for each response
  * ProviderName `string`: Name of the application that made the request
  * Status `string`: OK for a successful response

### Contacts.put
Create a contact


```js
xero.Contacts.put({
  "Contacts": {
    "Name": ""
  }
}, context)
```

#### Input
* input `object`
  * Contacts **required** [Contact](#contact)

#### Output
* output `object`
  * Contacts `array`
    * items [Contact](#contact)
  * DateTimeUTC `string`: DateTime of the request
  * ID `string`: Unique identifier for each response
  * ProviderName `string`: Name of the application that made the request
  * Status `string`: OK for a successful response

### Contacts.ContactID.get
Retrieve an individual contact


```js
xero.Contacts.ContactID.get({
  "ContactID": ""
}, context)
```

#### Input
* input `object`
  * ContactID **required** `string`

#### Output
* output `object`
  * Contacts `array`
    * items [Contact](#contact)
  * DateTimeUTC `string`: DateTime of the request
  * ID `string`: Unique identifier for each response
  * ProviderName `string`: Name of the application that made the request
  * Status `string`: OK for a successful response

### Contacts.ContactID.post
Update a contact


```js
xero.Contacts.ContactID.post({
  "Contacts": {
    "Name": ""
  },
  "ContactID": ""
}, context)
```

#### Input
* input `object`
  * Contacts **required** [Contact](#contact)
  * ContactID **required** `string`

#### Output
* output `object`
  * Contacts `array`
    * items [Contact](#contact)
  * DateTimeUTC `string`: DateTime of the request
  * ID `string`: Unique identifier for each response
  * ProviderName `string`: Name of the application that made the request
  * Status `string`: OK for a successful response

### Contacts.ContactID.Attachments.get
Retrieve Attachments


```js
xero.Contacts.ContactID.Attachments.get({
  "ContactID": ""
}, context)
```

#### Input
* input `object`
  * ContactID **required** `string`: The Xero generated unique identifier for a Contact
  * If-Modified-Since `string`: A UTC timestamp (yyyy-mm-ddThh:mm:ss) . Only invoices created or modified since this timestamp will be returned e.g. 2009-11-12T00:00:00

#### Output
* output `object`
  * Attachments `array`
    * items [Attachment](#attachment)
  * DateTimeUTC `string`: DateTime of the request
  * ID `string`: Unique identifier for each response
  * ProviderName `string`: Name of the application that made the request
  * Status `string`: OK for a successful response

### Contacts.ContactID.Attachments.FileName.get
Download an Attachment


```js
xero.Contacts.ContactID.Attachments.FileName.get({
  "FileName": "",
  "ContactID": ""
}, context)
```

#### Input
* input `object`
  * FileName **required** `string`: The filename of the attachment to be downloaded
  * ContactID **required** `string`: The Xero generated unique identifier for a Contact
  * If-Modified-Since `string`: A UTC timestamp (yyyy-mm-ddThh:mm:ss) . Only invoices created or modified since this timestamp will be returned e.g. 2009-11-12T00:00:00

#### Output
*Output schema unknown*

### Contacts.ContactID.Attachments.FileName.post
Upload an Attachment


```js
xero.Contacts.ContactID.Attachments.FileName.post({
  "FileName": "",
  "ContactID": "",
  "Content": {
    "Content": ""
  }
}, context)
```

#### Input
* input `object`
  * FileName **required** `string`: The filename of the attachment being uploaded
  * ContactID **required** `string`: The Xero generated unique identifier for a Contact
  * Content **required** [Content](#content)

#### Output
* output `object`
  * Attachments `array`
    * items [Attachment](#attachment)
  * DateTimeUTC `string`: DateTime of the request
  * ID `string`: Unique identifier for each response
  * ProviderName `string`: Name of the application that made the request
  * Status `string`: OK for a successful response

### CreditNotes.get
Retrieve a collection of credit notes


```js
xero.CreditNotes.get({}, context)
```

#### Input
* input `object`
  * If-Modified-Since `string`: A UTC timestamp (yyyy-mm-ddThh:mm:ss) . Only invoices created or modified since this timestamp will be returned e.g. 2009-11-12T00:00:00
  * where `string`: Filter by an any element
  * order `string`: Order by any element returned
  * unitdp `integer`: Determines the decimal places accepted/returned on the UnitAmount. UnitAmount is 2 decimal places by default but can be increased to 4 decimal places by supplying the unitdp=4 parameter.
  * page `integer`: Page number e.g. page=1. Page size is 100. When using the page parameter full resource details will be returned (including line items).

#### Output
* output `object`
  * CreditNotes `array`
    * items [CreditNote](#creditnote)
  * DateTimeUTC `string`: DateTime of the request
  * ID `string`: Unique identifier for each response
  * ProviderName `string`: Name of the application that made the request
  * Status `string`: OK for a successful response

### CreditNotes.post
Create or update a credit note


```js
xero.CreditNotes.post({
  "CreditNotes": {
    "Type": "",
    "Contact": {
      "Name": ""
    },
    "LineItems": []
  }
}, context)
```

#### Input
* input `object`
  * CreditNotes **required** [CreditNote](#creditnote)
  * unitdp `integer`: Determines the decimal places accepted/returned on the UnitAmount. UnitAmount is 2 decimal places by default but can be increased to 4 decimal places by supplying the unitdp=4 parameter.
  * summarizeErrors `boolean`: If you plan to submit more than one entity per API call, we recommend that you append the summarizeErrors=false querystring to your API call. This ensures that every entity is returned back to you, each having their own status attribute.

#### Output
* output `object`
  * CreditNotes `array`
    * items [CreditNote](#creditnote)
  * DateTimeUTC `string`: DateTime of the request
  * ID `string`: Unique identifier for each response
  * ProviderName `string`: Name of the application that made the request
  * Status `string`: OK for a successful response

### CreditNotes.put
Create a credit note


```js
xero.CreditNotes.put({
  "CreditNotes": {
    "Type": "",
    "Contact": {
      "Name": ""
    },
    "LineItems": []
  }
}, context)
```

#### Input
* input `object`
  * CreditNotes **required** [CreditNote](#creditnote)
  * unitdp `integer`: Determines the decimal places accepted/returned on the UnitAmount. UnitAmount is 2 decimal places by default but can be increased to 4 decimal places by supplying the unitdp=4 parameter.
  * summarizeErrors `boolean`: If you plan to submit more than one entity per API call, we recommend that you append the summarizeErrors=false querystring to your API call. This ensures that every entity is returned back to you, each having their own status attribute.

#### Output
* output `object`
  * CreditNotes `array`
    * items [CreditNote](#creditnote)
  * DateTimeUTC `string`: DateTime of the request
  * ID `string`: Unique identifier for each response
  * ProviderName `string`: Name of the application that made the request
  * Status `string`: OK for a successful response

### CreditNotes.CreditNoteID.get
Retrieve an individual credit note


```js
xero.CreditNotes.CreditNoteID.get({
  "CreditNoteID": ""
}, context)
```

#### Input
* input `object`
  * CreditNoteID **required** `string`
  * unitdp `integer`: Determines the decimal places accepted/returned on the UnitAmount. UnitAmount is 2 decimal places by default but can be increased to 4 decimal places by supplying the unitdp=4 parameter.

#### Output
* output `object`
  * CreditNotes `array`
    * items [CreditNote](#creditnote)
  * DateTimeUTC `string`: DateTime of the request
  * ID `string`: Unique identifier for each response
  * ProviderName `string`: Name of the application that made the request
  * Status `string`: OK for a successful response

### CreditNotes.CreditNoteID.post
Update a credit note


```js
xero.CreditNotes.CreditNoteID.post({
  "CreditNotes": {
    "Type": "",
    "Contact": {
      "Name": ""
    },
    "LineItems": []
  },
  "CreditNoteID": ""
}, context)
```

#### Input
* input `object`
  * CreditNotes **required** [CreditNote](#creditnote)
  * CreditNoteID **required** `string`
  * unitdp `integer`: Determines the decimal places accepted/returned on the UnitAmount. UnitAmount is 2 decimal places by default but can be increased to 4 decimal places by supplying the unitdp=4 parameter.

#### Output
* output `object`
  * CreditNotes `array`
    * items [CreditNote](#creditnote)
  * DateTimeUTC `string`: DateTime of the request
  * ID `string`: Unique identifier for each response
  * ProviderName `string`: Name of the application that made the request
  * Status `string`: OK for a successful response

### CreditNotes.CreditNoteID.Allocations.put
Allocate a credit note


```js
xero.CreditNotes.CreditNoteID.Allocations.put({
  "Allocations": {
    "Invoice": {},
    "AppliedAmount": 0,
    "Date": ""
  },
  "CreditNoteID": ""
}, context)
```

#### Input
* input `object`
  * Allocations **required** [Allocation](#allocation)
  * CreditNoteID **required** `string`

#### Output
* output `object`
  * CreditNotes `array`
    * items [CreditNote](#creditnote)
  * DateTimeUTC `string`: DateTime of the request
  * ID `string`: Unique identifier for each response
  * ProviderName `string`: Name of the application that made the request
  * Status `string`: OK for a successful response

### CreditNotes.CreditNoteID.Attachments.get
Retrieve Attachments


```js
xero.CreditNotes.CreditNoteID.Attachments.get({
  "CreditNoteID": ""
}, context)
```

#### Input
* input `object`
  * CreditNoteID **required** `string`: The Xero generated unique identifier for a CreditNote
  * If-Modified-Since `string`: A UTC timestamp (yyyy-mm-ddThh:mm:ss) . Only invoices created or modified since this timestamp will be returned e.g. 2009-11-12T00:00:00

#### Output
* output `object`
  * Attachments `array`
    * items [Attachment](#attachment)
  * DateTimeUTC `string`: DateTime of the request
  * ID `string`: Unique identifier for each response
  * ProviderName `string`: Name of the application that made the request
  * Status `string`: OK for a successful response

### CreditNotes.CreditNoteID.Attachments.FileName.get
Download an Attachment


```js
xero.CreditNotes.CreditNoteID.Attachments.FileName.get({
  "FileName": "",
  "CreditNoteID": ""
}, context)
```

#### Input
* input `object`
  * FileName **required** `string`: The filename of the attachment to be downloaded
  * CreditNoteID **required** `string`: The Xero generated unique identifier for a CreditNote
  * If-Modified-Since `string`: A UTC timestamp (yyyy-mm-ddThh:mm:ss) . Only invoices created or modified since this timestamp will be returned e.g. 2009-11-12T00:00:00

#### Output
*Output schema unknown*

### CreditNotes.CreditNoteID.Attachments.FileName.post
Upload an Attachment


```js
xero.CreditNotes.CreditNoteID.Attachments.FileName.post({
  "FileName": "",
  "CreditNoteID": "",
  "Content": {
    "Content": ""
  }
}, context)
```

#### Input
* input `object`
  * FileName **required** `string`: The filename of the attachment being uploaded
  * CreditNoteID **required** `string`: The Xero generated unique identifier for a CreditNote
  * Content **required** [Content](#content)

#### Output
* output `object`
  * Attachments `array`
    * items [Attachment](#attachment)
  * DateTimeUTC `string`: DateTime of the request
  * ID `string`: Unique identifier for each response
  * ProviderName `string`: Name of the application that made the request
  * Status `string`: OK for a successful response

### Currencies.get
Retrieve the currencies the organisation is subscribed to


```js
xero.Currencies.get({}, context)
```

#### Input
* input `object`
  * If-Modified-Since `string`: A UTC timestamp (yyyy-mm-ddThh:mm:ss) . Only invoices created or modified since this timestamp will be returned e.g. 2009-11-12T00:00:00
  * where `string`: Filter by an any element
  * order `string`: Order by any element returned

#### Output
* output `object`
  * Currencies `array`
    * items [Currency](#currency)
  * DateTimeUTC `string`: DateTime of the request
  * ID `string`: Unique identifier for each response
  * ProviderName `string`: Name of the application that made the request
  * Status `string`: OK for a successful response

### Currencies.put
Add currencies to the organisation


```js
xero.Currencies.put({
  "Currencies": {}
}, context)
```

#### Input
* input `object`
  * Currencies **required** [Currency](#currency)
  * summarizeErrors `boolean`: If you plan to submit more than one entity per API call, we recommend that you append the summarizeErrors=false querystring to your API call. This ensures that every entity is returned back to you, each having their own status attribute.

#### Output
* output `object`
  * Currencies `array`
    * items [Currency](#currency)
  * DateTimeUTC `string`: DateTime of the request
  * ID `string`: Unique identifier for each response
  * ProviderName `string`: Name of the application that made the request
  * Status `string`: OK for a successful response

### Employees.get
Retrieve a collection of employees


```js
xero.Employees.get({}, context)
```

#### Input
* input `object`
  * If-Modified-Since `string`: A UTC timestamp (yyyy-mm-ddThh:mm:ss) . Only invoices created or modified since this timestamp will be returned e.g. 2009-11-12T00:00:00
  * where `string`: Filter by an any element
  * order `string`: Order by any element returned

#### Output
* output `object`
  * DateTimeUTC `string`: DateTime of the request
  * Employees `array`
    * items [Employee](#employee)
  * ID `string`: Unique identifier for each response
  * ProviderName `string`: Name of the application that made the request
  * Status `string`: OK for a successful response

### Employees.post
Create or update employees


```js
xero.Employees.post({
  "Employees": {
    "FirstName": "",
    "LastName": ""
  }
}, context)
```

#### Input
* input `object`
  * Employees **required** [Employee](#employee)
  * summarizeErrors `boolean`: If you plan to submit more than one entity per API call, we recommend that you append the summarizeErrors=false querystring to your API call. This ensures that every entity is returned back to you, each having their own status attribute.

#### Output
* output `object`
  * DateTimeUTC `string`: DateTime of the request
  * Employees `array`
    * items [Employee](#employee)
  * ID `string`: Unique identifier for each response
  * ProviderName `string`: Name of the application that made the request
  * Status `string`: OK for a successful response

### Employees.put
Create employees


```js
xero.Employees.put({
  "Employees": {
    "FirstName": "",
    "LastName": ""
  }
}, context)
```

#### Input
* input `object`
  * Employees **required** [Employee](#employee)
  * summarizeErrors `boolean`: If you plan to submit more than one entity per API call, we recommend that you append the summarizeErrors=false querystring to your API call. This ensures that every entity is returned back to you, each having their own status attribute.

#### Output
* output `object`
  * DateTimeUTC `string`: DateTime of the request
  * Employees `array`
    * items [Employee](#employee)
  * ID `string`: Unique identifier for each response
  * ProviderName `string`: Name of the application that made the request
  * Status `string`: OK for a successful response

### Employees.EmployeeID.get
Retrieve an individual employee


```js
xero.Employees.EmployeeID.get({
  "EmployeeID": ""
}, context)
```

#### Input
* input `object`
  * EmployeeID **required** `string`

#### Output
* output `object`
  * DateTimeUTC `string`: DateTime of the request
  * Employees `array`
    * items [Employee](#employee)
  * ID `string`: Unique identifier for each response
  * ProviderName `string`: Name of the application that made the request
  * Status `string`: OK for a successful response

### Employees.EmployeeID.post
Update an employee


```js
xero.Employees.EmployeeID.post({
  "Employees": {
    "FirstName": "",
    "LastName": ""
  },
  "EmployeeID": ""
}, context)
```

#### Input
* input `object`
  * Employees **required** [Employee](#employee)
  * EmployeeID **required** `string`

#### Output
* output `object`
  * DateTimeUTC `string`: DateTime of the request
  * Employees `array`
    * items [Employee](#employee)
  * ID `string`: Unique identifier for each response
  * ProviderName `string`: Name of the application that made the request
  * Status `string`: OK for a successful response

### ExpenseClaims.get
Retrieve a collection of expense claims


```js
xero.ExpenseClaims.get({}, context)
```

#### Input
* input `object`
  * If-Modified-Since `string`: A UTC timestamp (yyyy-mm-ddThh:mm:ss) . Only invoices created or modified since this timestamp will be returned e.g. 2009-11-12T00:00:00
  * where `string`: Filter by an any element
  * order `string`: Order by any element returned

#### Output
* output `object`
  * DateTimeUTC `string`: DateTime of the request
  * ExpenseClaims `array`
    * items [ExpenseClaim](#expenseclaim)
  * ID `string`: Unique identifier for each response
  * ProviderName `string`: Name of the application that made the request
  * Status `string`: OK for a successful response

### ExpenseClaims.post
Create or update an expense claim


```js
xero.ExpenseClaims.post({
  "ExpenseClaims": {
    "User": {},
    "Receipts": []
  }
}, context)
```

#### Input
* input `object`
  * ExpenseClaims **required** [ExpenseClaim](#expenseclaim)
  * summarizeErrors `boolean`: If you plan to submit more than one entity per API call, we recommend that you append the summarizeErrors=false querystring to your API call. This ensures that every entity is returned back to you, each having their own status attribute.

#### Output
* output `object`
  * DateTimeUTC `string`: DateTime of the request
  * ExpenseClaims `array`
    * items [ExpenseClaim](#expenseclaim)
  * ID `string`: Unique identifier for each response
  * ProviderName `string`: Name of the application that made the request
  * Status `string`: OK for a successful response

### ExpenseClaims.put
Create an expense claim


```js
xero.ExpenseClaims.put({
  "ExpenseClaims": {
    "User": {},
    "Receipts": []
  }
}, context)
```

#### Input
* input `object`
  * ExpenseClaims **required** [ExpenseClaim](#expenseclaim)
  * summarizeErrors `boolean`: If you plan to submit more than one entity per API call, we recommend that you append the summarizeErrors=false querystring to your API call. This ensures that every entity is returned back to you, each having their own status attribute.

#### Output
* output `object`
  * DateTimeUTC `string`: DateTime of the request
  * ExpenseClaims `array`
    * items [ExpenseClaim](#expenseclaim)
  * ID `string`: Unique identifier for each response
  * ProviderName `string`: Name of the application that made the request
  * Status `string`: OK for a successful response

### ExpenseClaims.ExpenseClaimID.get
Retrieve an individual expense claim


```js
xero.ExpenseClaims.ExpenseClaimID.get({
  "ExpenseClaimID": ""
}, context)
```

#### Input
* input `object`
  * ExpenseClaimID **required** `string`

#### Output
* output `object`
  * DateTimeUTC `string`: DateTime of the request
  * ExpenseClaims `array`
    * items [ExpenseClaim](#expenseclaim)
  * ID `string`: Unique identifier for each response
  * ProviderName `string`: Name of the application that made the request
  * Status `string`: OK for a successful response

### ExpenseClaims.ExpenseClaimID.post
Update an expense claim


```js
xero.ExpenseClaims.ExpenseClaimID.post({
  "ExpenseClaims": {
    "User": {},
    "Receipts": []
  },
  "ExpenseClaimID": ""
}, context)
```

#### Input
* input `object`
  * ExpenseClaims **required** [ExpenseClaim](#expenseclaim)
  * ExpenseClaimID **required** `string`

#### Output
* output `object`
  * DateTimeUTC `string`: DateTime of the request
  * ExpenseClaims `array`
    * items [ExpenseClaim](#expenseclaim)
  * ID `string`: Unique identifier for each response
  * ProviderName `string`: Name of the application that made the request
  * Status `string`: OK for a successful response

### Invoices.get
Retrieve a collection of invoices (sales invoices and bills)


```js
xero.Invoices.get({}, context)
```

#### Input
* input `object`
  * If-Modified-Since `string`: A UTC timestamp (yyyy-mm-ddThh:mm:ss) . Only invoices created or modified since this timestamp will be returned e.g. 2009-11-12T00:00:00
  * where `string`: Filter by an any element
  * order `string`: Order by any element returned
  * unitdp `integer`: Determines the decimal places accepted/returned on the UnitAmount. UnitAmount is 2 decimal places by default but can be increased to 4 decimal places by supplying the unitdp=4 parameter.
  * IDs `string`: Filter by a comma-separated list of InvoiceIDs
  * ContactIDs `string`: Filter by a comma-separated list of ContactIDs
  * Statuses `string`: Filter by a comma-separated list of Statuses
  * InvoiceNumbers `string`: Filter by a comma-separated list of InvoiceNumbers

#### Output
* output `object`
  * DateTimeUTC `string`: DateTime of the request
  * ID `string`: Unique identifier for each response
  * Invoices `array`
    * items [Invoice](#invoice)
  * ProviderName `string`: Name of the application that made the request
  * Status `string`: OK for a successful response

### Invoices.post
Create or update an Invoice (sales invoices or bills)


```js
xero.Invoices.post({
  "Invoices": {
    "Type": "",
    "Contact": {
      "Name": ""
    },
    "LineItems": []
  }
}, context)
```

#### Input
* input `object`
  * Invoices **required** [Invoice](#invoice)
  * unitdp `integer`: Determines the decimal places accepted/returned on the UnitAmount. UnitAmount is 2 decimal places by default but can be increased to 4 decimal places by supplying the unitdp=4 parameter.
  * summarizeErrors `boolean`: If you plan to submit more than one entity per API call, we recommend that you append the summarizeErrors=false querystring to your API call. This ensures that every entity is returned back to you, each having their own status attribute.

#### Output
* output `object`
  * DateTimeUTC `string`: DateTime of the request
  * ID `string`: Unique identifier for each response
  * Invoices `array`
    * items [Invoice](#invoice)
  * ProviderName `string`: Name of the application that made the request
  * Status `string`: OK for a successful response

### Invoices.put
Create an Invoice (sales invoices or bills)


```js
xero.Invoices.put({
  "Invoices": {
    "Type": "",
    "Contact": {
      "Name": ""
    },
    "LineItems": []
  }
}, context)
```

#### Input
* input `object`
  * Invoices **required** [Invoice](#invoice)
  * unitdp `integer`: Determines the decimal places accepted/returned on the UnitAmount. UnitAmount is 2 decimal places by default but can be increased to 4 decimal places by supplying the unitdp=4 parameter.
  * summarizeErrors `boolean`: If you plan to submit more than one entity per API call, we recommend that you append the summarizeErrors=false querystring to your API call. This ensures that every entity is returned back to you, each having their own status attribute.

#### Output
* output `object`
  * DateTimeUTC `string`: DateTime of the request
  * ID `string`: Unique identifier for each response
  * Invoices `array`
    * items [Invoice](#invoice)
  * ProviderName `string`: Name of the application that made the request
  * Status `string`: OK for a successful response

### Invoices.InvoiceID.get
Retrieve an Invoice (sales invoice or bill)


```js
xero.Invoices.InvoiceID.get({
  "InvoiceID": ""
}, context)
```

#### Input
* input `object`
  * InvoiceID **required** `string`
  * unitdp `integer`: Determines the decimal places accepted/returned on the UnitAmount. UnitAmount is 2 decimal places by default but can be increased to 4 decimal places by supplying the unitdp=4 parameter.

#### Output
* output `object`
  * DateTimeUTC `string`: DateTime of the request
  * ID `string`: Unique identifier for each response
  * Invoices `array`
    * items [Invoice](#invoice)
  * ProviderName `string`: Name of the application that made the request
  * Status `string`: OK for a successful response

### Invoices.InvoiceID.post
Update an Invoice (sales invoice or bill)


```js
xero.Invoices.InvoiceID.post({
  "Invoices": {
    "Type": "",
    "Contact": {
      "Name": ""
    },
    "LineItems": []
  },
  "InvoiceID": ""
}, context)
```

#### Input
* input `object`
  * Invoices **required** [Invoice](#invoice)
  * InvoiceID **required** `string`
  * unitdp `integer`: Determines the decimal places accepted/returned on the UnitAmount. UnitAmount is 2 decimal places by default but can be increased to 4 decimal places by supplying the unitdp=4 parameter.

#### Output
* output `object`
  * DateTimeUTC `string`: DateTime of the request
  * ID `string`: Unique identifier for each response
  * Invoices `array`
    * items [Invoice](#invoice)
  * ProviderName `string`: Name of the application that made the request
  * Status `string`: OK for a successful response

### Invoices.InvoiceID.Attachments.get
Retrieve Attachments


```js
xero.Invoices.InvoiceID.Attachments.get({
  "InvoiceID": ""
}, context)
```

#### Input
* input `object`
  * InvoiceID **required** `string`: The Xero generated unique identifier for an Invoice
  * If-Modified-Since `string`: A UTC timestamp (yyyy-mm-ddThh:mm:ss) . Only invoices created or modified since this timestamp will be returned e.g. 2009-11-12T00:00:00

#### Output
* output `object`
  * Attachments `array`
    * items [Attachment](#attachment)
  * DateTimeUTC `string`: DateTime of the request
  * ID `string`: Unique identifier for each response
  * ProviderName `string`: Name of the application that made the request
  * Status `string`: OK for a successful response

### Invoices.InvoiceID.Attachments.FileName.get
Download an Attachment


```js
xero.Invoices.InvoiceID.Attachments.FileName.get({
  "FileName": "",
  "InvoiceID": ""
}, context)
```

#### Input
* input `object`
  * FileName **required** `string`: The filename of the attachment to be downloaded
  * InvoiceID **required** `string`: The Xero generated unique identifier for an Invoice
  * If-Modified-Since `string`: A UTC timestamp (yyyy-mm-ddThh:mm:ss) . Only invoices created or modified since this timestamp will be returned e.g. 2009-11-12T00:00:00

#### Output
*Output schema unknown*

### Invoices.InvoiceID.Attachments.FileName.post
Upload an Attachment


```js
xero.Invoices.InvoiceID.Attachments.FileName.post({
  "FileName": "",
  "InvoiceID": "",
  "Content": {
    "Content": ""
  }
}, context)
```

#### Input
* input `object`
  * FileName **required** `string`: The filename of the attachment being uploaded
  * InvoiceID **required** `string`: The Xero generated unique identifier for an Invoice
  * Content **required** [Content](#content)

#### Output
* output `object`
  * Attachments `array`
    * items [Attachment](#attachment)
  * DateTimeUTC `string`: DateTime of the request
  * ID `string`: Unique identifier for each response
  * ProviderName `string`: Name of the application that made the request
  * Status `string`: OK for a successful response

### Invoices.InvoiceID.OnlineInvoice.get
Retrieve the URL to view the online invoice


```js
xero.Invoices.InvoiceID.OnlineInvoice.get({
  "InvoiceID": ""
}, context)
```

#### Input
* input `object`
  * InvoiceID **required** `string`

#### Output
* output `object`
  * DateTimeUTC `string`: DateTime of the request
  * ID `string`: Unique identifier for each response
  * OnlineInvoices `array`
    * items [OnlineInvoice](#onlineinvoice)
  * ProviderName `string`: Name of the application that made the request
  * Status `string`: OK for a successful response

### Items.get
Retrieve a collection of items


```js
xero.Items.get({}, context)
```

#### Input
* input `object`
  * If-Modified-Since `string`: A UTC timestamp (yyyy-mm-ddThh:mm:ss) . Only invoices created or modified since this timestamp will be returned e.g. 2009-11-12T00:00:00
  * where `string`: Filter by an any element
  * order `string`: Order by any element returned
  * unitdp `integer`: Determines the decimal places accepted/returned on the UnitAmount. UnitAmount is 2 decimal places by default but can be increased to 4 decimal places by supplying the unitdp=4 parameter.

#### Output
* output `object`
  * DateTimeUTC `string`: DateTime of the request
  * ID `string`: Unique identifier for each response
  * Items `array`
    * items [Item](#item)
  * ProviderName `string`: Name of the application that made the request
  * Status `string`: OK for a successful response

### Items.post
Create or update an item


```js
xero.Items.post({
  "Items": {
    "Code": ""
  }
}, context)
```

#### Input
* input `object`
  * Items **required** [Item](#item)
  * unitdp `integer`: Determines the decimal places accepted/returned on the UnitAmount. UnitAmount is 2 decimal places by default but can be increased to 4 decimal places by supplying the unitdp=4 parameter.
  * summarizeErrors `boolean`: If you plan to submit more than one entity per API call, we recommend that you append the summarizeErrors=false querystring to your API call. This ensures that every entity is returned back to you, each having their own status attribute.

#### Output
* output `object`
  * DateTimeUTC `string`: DateTime of the request
  * ID `string`: Unique identifier for each response
  * Items `array`
    * items [Item](#item)
  * ProviderName `string`: Name of the application that made the request
  * Status `string`: OK for a successful response

### Items.put
Create an item


```js
xero.Items.put({
  "Items": {
    "Code": ""
  }
}, context)
```

#### Input
* input `object`
  * Items **required** [Item](#item)
  * unitdp `integer`: Determines the decimal places accepted/returned on the UnitAmount. UnitAmount is 2 decimal places by default but can be increased to 4 decimal places by supplying the unitdp=4 parameter.
  * summarizeErrors `boolean`: If you plan to submit more than one entity per API call, we recommend that you append the summarizeErrors=false querystring to your API call. This ensures that every entity is returned back to you, each having their own status attribute.

#### Output
* output `object`
  * DateTimeUTC `string`: DateTime of the request
  * ID `string`: Unique identifier for each response
  * Items `array`
    * items [Item](#item)
  * ProviderName `string`: Name of the application that made the request
  * Status `string`: OK for a successful response

### Items.ItemID.delete
Delete an item


```js
xero.Items.ItemID.delete({
  "ItemID": ""
}, context)
```

#### Input
* input `object`
  * ItemID **required** `string`

#### Output
*Output schema unknown*

### Items.ItemID.get
Retrieve an item


```js
xero.Items.ItemID.get({
  "ItemID": ""
}, context)
```

#### Input
* input `object`
  * ItemID **required** `string`
  * unitdp `integer`: Determines the decimal places accepted/returned on the UnitAmount. UnitAmount is 2 decimal places by default but can be increased to 4 decimal places by supplying the unitdp=4 parameter.

#### Output
* output `object`
  * DateTimeUTC `string`: DateTime of the request
  * ID `string`: Unique identifier for each response
  * Items `array`
    * items [Item](#item)
  * ProviderName `string`: Name of the application that made the request
  * Status `string`: OK for a successful response

### Items.ItemID.post
Update an item


```js
xero.Items.ItemID.post({
  "Items": {
    "Code": ""
  },
  "ItemID": ""
}, context)
```

#### Input
* input `object`
  * Items **required** [Item](#item)
  * ItemID **required** `string`
  * unitdp `integer`: Determines the decimal places accepted/returned on the UnitAmount. UnitAmount is 2 decimal places by default but can be increased to 4 decimal places by supplying the unitdp=4 parameter.

#### Output
* output `object`
  * DateTimeUTC `string`: DateTime of the request
  * ID `string`: Unique identifier for each response
  * Items `array`
    * items [Item](#item)
  * ProviderName `string`: Name of the application that made the request
  * Status `string`: OK for a successful response

### Journals.get
Retrieve a collection of journals.


```js
xero.Journals.get({}, context)
```

#### Input
* input `object`
  * If-Modified-Since `string`: A UTC timestamp (yyyy-mm-ddThh:mm:ss) . Only invoices created or modified since this timestamp will be returned e.g. 2009-11-12T00:00:00
  * paymentsOnly `boolean`: Return results on a the cash basis
  * offset `integer`: Offset by a specified journal number. e.g. journals with a JournalNumber greater than the offset will be returned.

#### Output
* output `object`
  * DateTimeUTC `string`: DateTime of the request
  * ID `string`: Unique identifier for each response
  * Journals `array`
    * items [Journal](#journal)
  * ProviderName `string`: Name of the application that made the request
  * Status `string`: OK for a successful response

### Journals.JournalID.get
Retrieve an individual journal.


```js
xero.Journals.JournalID.get({
  "JournalID": ""
}, context)
```

#### Input
* input `object`
  * JournalID **required** `string`

#### Output
* output `object`
  * DateTimeUTC `string`: DateTime of the request
  * ID `string`: Unique identifier for each response
  * Journals `array`
    * items [Journal](#journal)
  * ProviderName `string`: Name of the application that made the request
  * Status `string`: OK for a successful response

### LinkedTransactions.get
Retrieve a collection of linked transactions (billable expenses)


```js
xero.LinkedTransactions.get({}, context)
```

#### Input
* input `object`
  * page `integer`: Page number e.g. page=1. Page size is 100. When using the page parameter full resource details will be returned (including line items).
  * SourceTransactionID `string`: Filter by the SourceTransactionID. Get all the linked transactions created from a particular ACCPAY invoice
  * ContactID `string`: Filter by the ContactID. Get all the linked transactions that have been assigned to a particular customer.
  * Status `string`: Filter by the combination of ContactID and Status. Get all the linked transactions that have been assigned to a particular customer and have a particular status e.g. GET /LinkedTransactions?ContactID=4bb34b03-3378-4bb2-a0ed-6345abf3224e&Status=APPROVED.
  * TargetTransactionID `string`: Filter by the TargetTransactionID. Get all the linked transactions allocated to a particular ACCREC invoice.

#### Output
* output `object`
  * DateTimeUTC `string`: DateTime of the request
  * ID `string`: Unique identifier for each response
  * LinkedTransactions `array`
    * items [LinkedTransaction](#linkedtransaction)
  * ProviderName `string`: Name of the application that made the request
  * Status `string`: OK for a successful response

### LinkedTransactions.post
Create or update a linked transaction (billable expense)


```js
xero.LinkedTransactions.post({
  "LinkedTransactions": {}
}, context)
```

#### Input
* input `object`
  * LinkedTransactions **required** [LinkedTransaction](#linkedtransaction)

#### Output
* output `object`
  * DateTimeUTC `string`: DateTime of the request
  * ID `string`: Unique identifier for each response
  * LinkedTransactions `array`
    * items [LinkedTransaction](#linkedtransaction)
  * ProviderName `string`: Name of the application that made the request
  * Status `string`: OK for a successful response

### LinkedTransactions.put
Create a linked transaction (billable expense)


```js
xero.LinkedTransactions.put({
  "LinkedTransactions": {}
}, context)
```

#### Input
* input `object`
  * LinkedTransactions **required** [LinkedTransaction](#linkedtransaction)

#### Output
* output `object`
  * DateTimeUTC `string`: DateTime of the request
  * ID `string`: Unique identifier for each response
  * LinkedTransactions `array`
    * items [LinkedTransaction](#linkedtransaction)
  * ProviderName `string`: Name of the application that made the request
  * Status `string`: OK for a successful response

### LinkedTransactions.LinkedTransactionID.delete
Delete a linked transaction (billable expense)


```js
xero.LinkedTransactions.LinkedTransactionID.delete({
  "LinkedTransactionID": ""
}, context)
```

#### Input
* input `object`
  * LinkedTransactionID **required** `string`

#### Output
*Output schema unknown*

### LinkedTransactions.LinkedTransactionID.get
Retrieve a linked transaction (billable expense)


```js
xero.LinkedTransactions.LinkedTransactionID.get({
  "LinkedTransactionID": ""
}, context)
```

#### Input
* input `object`
  * LinkedTransactionID **required** `string`

#### Output
* output `object`
  * DateTimeUTC `string`: DateTime of the request
  * ID `string`: Unique identifier for each response
  * LinkedTransactions `array`
    * items [LinkedTransaction](#linkedtransaction)
  * ProviderName `string`: Name of the application that made the request
  * Status `string`: OK for a successful response

### LinkedTransactions.LinkedTransactionID.post
Update a linked transaction (billable expense)


```js
xero.LinkedTransactions.LinkedTransactionID.post({
  "LinkedTransactions": {},
  "LinkedTransactionID": ""
}, context)
```

#### Input
* input `object`
  * LinkedTransactions **required** [LinkedTransaction](#linkedtransaction)
  * LinkedTransactionID **required** `string`

#### Output
* output `object`
  * DateTimeUTC `string`: DateTime of the request
  * ID `string`: Unique identifier for each response
  * LinkedTransactions `array`
    * items [LinkedTransaction](#linkedtransaction)
  * ProviderName `string`: Name of the application that made the request
  * Status `string`: OK for a successful response

### ManualJournals.get
Retrieve a collection of manual journals


```js
xero.ManualJournals.get({}, context)
```

#### Input
* input `object`
  * If-Modified-Since `string`: A UTC timestamp (yyyy-mm-ddThh:mm:ss) . Only invoices created or modified since this timestamp will be returned e.g. 2009-11-12T00:00:00
  * where `string`: Filter by an any element
  * order `string`: Order by any element returned
  * page `integer`: Page number e.g. page=1. Page size is 100. When using the page parameter full resource details will be returned (including line items).

#### Output
* output `object`
  * DateTimeUTC `string`: DateTime of the request
  * ID `string`: Unique identifier for each response
  * ManualJournals `array`
    * items [ManualJournal](#manualjournal)
  * ProviderName `string`: Name of the application that made the request
  * Status `string`: OK for a successful response

### ManualJournals.post
Create or update a manual journal


```js
xero.ManualJournals.post({
  "ManualJournals": {
    "Narration": "",
    "JournalLines": []
  }
}, context)
```

#### Input
* input `object`
  * ManualJournals **required** [ManualJournal](#manualjournal)
  * summarizeErrors `boolean`: If you plan to submit more than one entity per API call, we recommend that you append the summarizeErrors=false querystring to your API call. This ensures that every entity is returned back to you, each having their own status attribute.

#### Output
* output `object`
  * DateTimeUTC `string`: DateTime of the request
  * ID `string`: Unique identifier for each response
  * ManualJournals `array`
    * items [ManualJournal](#manualjournal)
  * ProviderName `string`: Name of the application that made the request
  * Status `string`: OK for a successful response

### ManualJournals.put
Create a manual journal


```js
xero.ManualJournals.put({
  "ManualJournals": {
    "Narration": "",
    "JournalLines": []
  }
}, context)
```

#### Input
* input `object`
  * ManualJournals **required** [ManualJournal](#manualjournal)
  * summarizeErrors `boolean`: If you plan to submit more than one entity per API call, we recommend that you append the summarizeErrors=false querystring to your API call. This ensures that every entity is returned back to you, each having their own status attribute.

#### Output
* output `object`
  * DateTimeUTC `string`: DateTime of the request
  * ID `string`: Unique identifier for each response
  * ManualJournals `array`
    * items [ManualJournal](#manualjournal)
  * ProviderName `string`: Name of the application that made the request
  * Status `string`: OK for a successful response

### ManualJournals.ManualJournalID.get
Retrieve an individual manual journal


```js
xero.ManualJournals.ManualJournalID.get({
  "ManualJournalID": ""
}, context)
```

#### Input
* input `object`
  * ManualJournalID **required** `string`

#### Output
* output `object`
  * DateTimeUTC `string`: DateTime of the request
  * ID `string`: Unique identifier for each response
  * ManualJournals `array`
    * items [ManualJournal](#manualjournal)
  * ProviderName `string`: Name of the application that made the request
  * Status `string`: OK for a successful response

### ManualJournals.ManualJournalID.post
Update a manual journal


```js
xero.ManualJournals.ManualJournalID.post({
  "ManualJournals": {
    "Narration": "",
    "JournalLines": []
  },
  "ManualJournalID": ""
}, context)
```

#### Input
* input `object`
  * ManualJournals **required** [ManualJournal](#manualjournal)
  * ManualJournalID **required** `string`

#### Output
* output `object`
  * DateTimeUTC `string`: DateTime of the request
  * ID `string`: Unique identifier for each response
  * ManualJournals `array`
    * items [ManualJournal](#manualjournal)
  * ProviderName `string`: Name of the application that made the request
  * Status `string`: OK for a successful response

### ManualJournals.ManualJournalID.Attachments.get
Retrieve Attachments


```js
xero.ManualJournals.ManualJournalID.Attachments.get({
  "ManualJournalID": ""
}, context)
```

#### Input
* input `object`
  * ManualJournalID **required** `string`: The Xero generated unique identifier for a Manual Journal
  * If-Modified-Since `string`: A UTC timestamp (yyyy-mm-ddThh:mm:ss) . Only invoices created or modified since this timestamp will be returned e.g. 2009-11-12T00:00:00

#### Output
* output `object`
  * Attachments `array`
    * items [Attachment](#attachment)
  * DateTimeUTC `string`: DateTime of the request
  * ID `string`: Unique identifier for each response
  * ProviderName `string`: Name of the application that made the request
  * Status `string`: OK for a successful response

### ManualJournals.ManualJournalID.Attachments.FileName.get
Download an Attachment


```js
xero.ManualJournals.ManualJournalID.Attachments.FileName.get({
  "FileName": "",
  "ManualJournalID": ""
}, context)
```

#### Input
* input `object`
  * FileName **required** `string`: The filename of the attachment to be downloaded
  * ManualJournalID **required** `string`: The Xero generated unique identifier for a Manual Journal
  * If-Modified-Since `string`: A UTC timestamp (yyyy-mm-ddThh:mm:ss) . Only invoices created or modified since this timestamp will be returned e.g. 2009-11-12T00:00:00

#### Output
*Output schema unknown*

### ManualJournals.ManualJournalID.Attachments.FileName.post
Upload an Attachment


```js
xero.ManualJournals.ManualJournalID.Attachments.FileName.post({
  "FileName": "",
  "ManualJournalID": "",
  "Content": {
    "Content": ""
  }
}, context)
```

#### Input
* input `object`
  * FileName **required** `string`: The filename of the attachment being uploaded
  * ManualJournalID **required** `string`: The Xero generated unique identifier for a Manual Journal
  * Content **required** [Content](#content)

#### Output
* output `object`
  * Attachments `array`
    * items [Attachment](#attachment)
  * DateTimeUTC `string`: DateTime of the request
  * ID `string`: Unique identifier for each response
  * ProviderName `string`: Name of the application that made the request
  * Status `string`: OK for a successful response

### Organisation.get
Retrieve Organisation details


```js
xero.Organisation.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * DateTimeUTC `string`: DateTime of the request
  * ID `string`: Unique identifier for each response
  * Organisations `array`
    * items [Organisation](#organisation)
  * ProviderName `string`: Name of the application that made the request
  * Status `string`: OK for a successful response

### Organisation.ShortCode.get
Retrieve Organisation details


```js
xero.Organisation.ShortCode.get({
  "ShortCode": ""
}, context)
```

#### Input
* input `object`
  * ShortCode **required** `string`

#### Output
* output `object`
  * DateTimeUTC `string`: DateTime of the request
  * ID `string`: Unique identifier for each response
  * Organisations `array`
    * items [Organisation](#organisation)
  * ProviderName `string`: Name of the application that made the request
  * Status `string`: OK for a successful response

### Overpayments.get
Retrieve a collection of overpayments


```js
xero.Overpayments.get({}, context)
```

#### Input
* input `object`
  * If-Modified-Since `string`: A UTC timestamp (yyyy-mm-ddThh:mm:ss) . Only invoices created or modified since this timestamp will be returned e.g. 2009-11-12T00:00:00
  * where `string`: Filter by an any element
  * order `string`: Order by any element returned
  * page `integer`: Page number e.g. page=1. Page size is 100. When using the page parameter full resource details will be returned (including line items).
  * unitdp `integer`: Determines the decimal places accepted/returned on the UnitAmount. UnitAmount is 2 decimal places by default but can be increased to 4 decimal places by supplying the unitdp=4 parameter.

#### Output
* output `object`
  * DateTimeUTC `string`: DateTime of the request
  * ID `string`: Unique identifier for each response
  * Overpayments `array`
    * items [Overpayment](#overpayment)
  * ProviderName `string`: Name of the application that made the request
  * Status `string`: OK for a successful response

### Overpayments.OverpaymentID.get
Retrieve an overpayment


```js
xero.Overpayments.OverpaymentID.get({
  "OverpaymentID": ""
}, context)
```

#### Input
* input `object`
  * OverpaymentID **required** `string`
  * unitdp `integer`: Determines the decimal places accepted/returned on the UnitAmount. UnitAmount is 2 decimal places by default but can be increased to 4 decimal places by supplying the unitdp=4 parameter.

#### Output
* output `object`
  * DateTimeUTC `string`: DateTime of the request
  * ID `string`: Unique identifier for each response
  * Overpayments `array`
    * items [Overpayment](#overpayment)
  * ProviderName `string`: Name of the application that made the request
  * Status `string`: OK for a successful response

### Overpayments.OverpaymentID.Allocations.put
Allocate an overpayment


```js
xero.Overpayments.OverpaymentID.Allocations.put({
  "Allocations": {
    "Invoice": {},
    "AppliedAmount": 0,
    "Date": ""
  },
  "OverpaymentID": ""
}, context)
```

#### Input
* input `object`
  * Allocations **required** [Allocation](#allocation)
  * OverpaymentID **required** `string`

#### Output
* output `object`
  * DateTimeUTC `string`: DateTime of the request
  * ID `string`: Unique identifier for each response
  * Overpayments `array`
    * items [Overpayment](#overpayment)
  * ProviderName `string`: Name of the application that made the request
  * Status `string`: OK for a successful response

### Payments.get
Retrieve a collection of payments for invoices, credit notes, prepayments and overpayments


```js
xero.Payments.get({}, context)
```

#### Input
* input `object`
  * If-Modified-Since `string`: A UTC timestamp (yyyy-mm-ddThh:mm:ss) . Only invoices created or modified since this timestamp will be returned e.g. 2009-11-12T00:00:00
  * where `string`: Filter by an any element
  * order `string`: Order by any element returned

#### Output
* output `object`
  * DateTimeUTC `string`: DateTime of the request
  * ID `string`: Unique identifier for each response
  * Payments `array`
    * items [Payment](#payment)
  * ProviderName `string`: Name of the application that made the request
  * Status `string`: OK for a successful response

### Payments.post
Create a payment


```js
xero.Payments.post({
  "Payments": {}
}, context)
```

#### Input
* input `object`
  * Payments **required** [Payment](#payment)
  * summarizeErrors `boolean`: If you plan to submit more than one entity per API call, we recommend that you append the summarizeErrors=false querystring to your API call. This ensures that every entity is returned back to you, each having their own status attribute.

#### Output
* output `object`
  * DateTimeUTC `string`: DateTime of the request
  * ID `string`: Unique identifier for each response
  * Payments `array`
    * items [Payment](#payment)
  * ProviderName `string`: Name of the application that made the request
  * Status `string`: OK for a successful response

### Payments.put
Create a payment


```js
xero.Payments.put({
  "Payments": {}
}, context)
```

#### Input
* input `object`
  * Payments **required** [Payment](#payment)
  * summarizeErrors `boolean`: If you plan to submit more than one entity per API call, we recommend that you append the summarizeErrors=false querystring to your API call. This ensures that every entity is returned back to you, each having their own status attribute.

#### Output
* output `object`
  * DateTimeUTC `string`: DateTime of the request
  * ID `string`: Unique identifier for each response
  * Payments `array`
    * items [Payment](#payment)
  * ProviderName `string`: Name of the application that made the request
  * Status `string`: OK for a successful response

### Payments.PaymentID.get
Retrieve a payment


```js
xero.Payments.PaymentID.get({
  "PaymentID": ""
}, context)
```

#### Input
* input `object`
  * PaymentID **required** `string`

#### Output
* output `object`
  * DateTimeUTC `string`: DateTime of the request
  * ID `string`: Unique identifier for each response
  * Payments `array`
    * items [Payment](#payment)
  * ProviderName `string`: Name of the application that made the request
  * Status `string`: OK for a successful response

### Payments.PaymentID.post
Update a payment's status to deleted


```js
xero.Payments.PaymentID.post({
  "Payments": {},
  "PaymentID": ""
}, context)
```

#### Input
* input `object`
  * Payments **required** [Payment](#payment)
  * PaymentID **required** `string`

#### Output
* output `object`
  * DateTimeUTC `string`: DateTime of the request
  * ID `string`: Unique identifier for each response
  * Payments `array`
    * items [Payment](#payment)
  * ProviderName `string`: Name of the application that made the request
  * Status `string`: OK for a successful response

### Prepayments.get
Retrieve a collection of prepayments


```js
xero.Prepayments.get({}, context)
```

#### Input
* input `object`
  * If-Modified-Since `string`: A UTC timestamp (yyyy-mm-ddThh:mm:ss) . Only invoices created or modified since this timestamp will be returned e.g. 2009-11-12T00:00:00
  * where `string`: Filter by an any element
  * order `string`: Order by any element returned
  * page `integer`: Page number e.g. page=1. Page size is 100. When using the page parameter full resource details will be returned (including line items).
  * unitdp `integer`: Determines the decimal places accepted/returned on the UnitAmount. UnitAmount is 2 decimal places by default but can be increased to 4 decimal places by supplying the unitdp=4 parameter.

#### Output
* output `object`
  * DateTimeUTC `string`: DateTime of the request
  * ID `string`: Unique identifier for each response
  * Prepayments `array`
    * items [Prepayment](#prepayment)
  * ProviderName `string`: Name of the application that made the request
  * Status `string`: OK for a successful response

### Prepayments.PrepaymentID.get
Retrieve an individual prepayment


```js
xero.Prepayments.PrepaymentID.get({
  "PrepaymentID": ""
}, context)
```

#### Input
* input `object`
  * PrepaymentID **required** `string`
  * unitdp `integer`: Determines the decimal places accepted/returned on the UnitAmount. UnitAmount is 2 decimal places by default but can be increased to 4 decimal places by supplying the unitdp=4 parameter.

#### Output
* output `object`
  * DateTimeUTC `string`: DateTime of the request
  * ID `string`: Unique identifier for each response
  * Prepayments `array`
    * items [Prepayment](#prepayment)
  * ProviderName `string`: Name of the application that made the request
  * Status `string`: OK for a successful response

### Prepayments.PrepaymentID.Allocations.put
Allocate a prepayment


```js
xero.Prepayments.PrepaymentID.Allocations.put({
  "Allocations": {
    "Invoice": {},
    "AppliedAmount": 0,
    "Date": ""
  },
  "PrepaymentID": ""
}, context)
```

#### Input
* input `object`
  * Allocations **required** [Allocation](#allocation)
  * PrepaymentID **required** `string`

#### Output
* output `object`
  * DateTimeUTC `string`: DateTime of the request
  * ID `string`: Unique identifier for each response
  * Prepayments `array`
    * items [Prepayment](#prepayment)
  * ProviderName `string`: Name of the application that made the request
  * Status `string`: OK for a successful response

### PurchaseOrders.get
Retrieve a collection of purchase orders


```js
xero.PurchaseOrders.get({}, context)
```

#### Input
* input `object`
  * If-Modified-Since `string`: A UTC timestamp (yyyy-mm-ddThh:mm:ss) . Only invoices created or modified since this timestamp will be returned e.g. 2009-11-12T00:00:00
  * order `string`: Order by any element returned
  * page `integer`: Page number e.g. page=1. Page size is 100. When using the page parameter full resource details will be returned (including line items).
  * DateFrom `string`
  * DateTo `string`
  * Status `string`

#### Output
* output `object`
  * DateTimeUTC `string`: DateTime of the request
  * ID `string`: Unique identifier for each response
  * ProviderName `string`: Name of the application that made the request
  * PurchaseOrders `array`
    * items [PurchaseOrder](#purchaseorder)
  * Status `string`: OK for a successful response

### PurchaseOrders.post
Create and update purchase orders


```js
xero.PurchaseOrders.post({
  "PurchaseOrders": {
    "Contact": {
      "Name": ""
    },
    "LineItems": []
  }
}, context)
```

#### Input
* input `object`
  * PurchaseOrders **required** [PurchaseOrder](#purchaseorder)
  * summarizeErrors `boolean`: If you plan to submit more than one entity per API call, we recommend that you append the summarizeErrors=false querystring to your API call. This ensures that every entity is returned back to you, each having their own status attribute.

#### Output
* output `object`
  * DateTimeUTC `string`: DateTime of the request
  * ID `string`: Unique identifier for each response
  * ProviderName `string`: Name of the application that made the request
  * PurchaseOrders `array`
    * items [PurchaseOrder](#purchaseorder)
  * Status `string`: OK for a successful response

### PurchaseOrders.put
Create purchase orders


```js
xero.PurchaseOrders.put({
  "PurchaseOrders": {
    "Contact": {
      "Name": ""
    },
    "LineItems": []
  }
}, context)
```

#### Input
* input `object`
  * PurchaseOrders **required** [PurchaseOrder](#purchaseorder)
  * summarizeErrors `boolean`: If you plan to submit more than one entity per API call, we recommend that you append the summarizeErrors=false querystring to your API call. This ensures that every entity is returned back to you, each having their own status attribute.

#### Output
* output `object`
  * DateTimeUTC `string`: DateTime of the request
  * ID `string`: Unique identifier for each response
  * ProviderName `string`: Name of the application that made the request
  * PurchaseOrders `array`
    * items [PurchaseOrder](#purchaseorder)
  * Status `string`: OK for a successful response

### PurchaseOrders.PurchaseOrderID.get
Retrieve a single purchase order


```js
xero.PurchaseOrders.PurchaseOrderID.get({
  "PurchaseOrderID": ""
}, context)
```

#### Input
* input `object`
  * PurchaseOrderID **required** `string`

#### Output
* output `object`
  * DateTimeUTC `string`: DateTime of the request
  * ID `string`: Unique identifier for each response
  * ProviderName `string`: Name of the application that made the request
  * PurchaseOrders `array`
    * items [PurchaseOrder](#purchaseorder)
  * Status `string`: OK for a successful response

### PurchaseOrders.PurchaseOrderID.post
Update a purchase order


```js
xero.PurchaseOrders.PurchaseOrderID.post({
  "PurchaseOrders": {
    "Contact": {
      "Name": ""
    },
    "LineItems": []
  },
  "PurchaseOrderID": ""
}, context)
```

#### Input
* input `object`
  * PurchaseOrders **required** [PurchaseOrder](#purchaseorder)
  * PurchaseOrderID **required** `string`

#### Output
* output `object`
  * DateTimeUTC `string`: DateTime of the request
  * ID `string`: Unique identifier for each response
  * ProviderName `string`: Name of the application that made the request
  * PurchaseOrders `array`
    * items [PurchaseOrder](#purchaseorder)
  * Status `string`: OK for a successful response

### PurchaseOrders.PurchaseOrderID.Attachments.get
Retrieve Attachments


```js
xero.PurchaseOrders.PurchaseOrderID.Attachments.get({
  "PurchaseOrderID": ""
}, context)
```

#### Input
* input `object`
  * PurchaseOrderID **required** `string`: The Xero generated unique identifier for a purchase order
  * If-Modified-Since `string`: A UTC timestamp (yyyy-mm-ddThh:mm:ss) . Only invoices created or modified since this timestamp will be returned e.g. 2009-11-12T00:00:00

#### Output
* output `object`
  * Attachments `array`
    * items [Attachment](#attachment)
  * DateTimeUTC `string`: DateTime of the request
  * ID `string`: Unique identifier for each response
  * ProviderName `string`: Name of the application that made the request
  * Status `string`: OK for a successful response

### PurchaseOrders.PurchaseOrderID.Attachments.FileName.get
Download an Attachment


```js
xero.PurchaseOrders.PurchaseOrderID.Attachments.FileName.get({
  "FileName": "",
  "PurchaseOrderID": ""
}, context)
```

#### Input
* input `object`
  * FileName **required** `string`: The filename of the attachment to be downloaded
  * PurchaseOrderID **required** `string`: The Xero generated unique identifier for a purchase order
  * If-Modified-Since `string`: A UTC timestamp (yyyy-mm-ddThh:mm:ss) . Only invoices created or modified since this timestamp will be returned e.g. 2009-11-12T00:00:00

#### Output
*Output schema unknown*

### PurchaseOrders.PurchaseOrderID.Attachments.FileName.post
Upload an Attachment


```js
xero.PurchaseOrders.PurchaseOrderID.Attachments.FileName.post({
  "FileName": "",
  "PurchaseOrderID": "",
  "Content": {
    "Content": ""
  }
}, context)
```

#### Input
* input `object`
  * FileName **required** `string`: The filename of the attachment being uploaded
  * PurchaseOrderID **required** `string`: The Xero generated unique identifier for a purchase order
  * Content **required** [Content](#content)

#### Output
* output `object`
  * Attachments `array`
    * items [Attachment](#attachment)
  * DateTimeUTC `string`: DateTime of the request
  * ID `string`: Unique identifier for each response
  * ProviderName `string`: Name of the application that made the request
  * Status `string`: OK for a successful response

### Receipts.get
Retrieve a collection of draft receipts


```js
xero.Receipts.get({}, context)
```

#### Input
* input `object`
  * If-Modified-Since `string`: A UTC timestamp (yyyy-mm-ddThh:mm:ss) . Only invoices created or modified since this timestamp will be returned e.g. 2009-11-12T00:00:00
  * order `string`: Order by any element returned
  * where `string`: Filter by an any element
  * unitdp `integer`: Determines the decimal places accepted/returned on the UnitAmount. UnitAmount is 2 decimal places by default but can be increased to 4 decimal places by supplying the unitdp=4 parameter.

#### Output
* output `object`
  * DateTimeUTC `string`: DateTime of the request
  * ID `string`: Unique identifier for each response
  * ProviderName `string`: Name of the application that made the request
  * Receipts `array`
    * items [Receipt](#receipt)
  * Status `string`: OK for a successful response

### Receipts.post
Create or update a receipt


```js
xero.Receipts.post({
  "Receipts": {
    "Date": "",
    "Contact": {
      "Name": ""
    },
    "Lineitems": [],
    "User": {}
  }
}, context)
```

#### Input
* input `object`
  * Receipts **required** [Receipt](#receipt)
  * unitdp `integer`: Determines the decimal places accepted/returned on the UnitAmount. UnitAmount is 2 decimal places by default but can be increased to 4 decimal places by supplying the unitdp=4 parameter.
  * summarizeErrors `boolean`: If you plan to submit more than one entity per API call, we recommend that you append the summarizeErrors=false querystring to your API call. This ensures that every entity is returned back to you, each having their own status attribute.

#### Output
* output `object`
  * DateTimeUTC `string`: DateTime of the request
  * ID `string`: Unique identifier for each response
  * ProviderName `string`: Name of the application that made the request
  * Receipts `array`
    * items [Receipt](#receipt)
  * Status `string`: OK for a successful response

### Receipts.put
Create a receipt


```js
xero.Receipts.put({
  "Receipts": {
    "Date": "",
    "Contact": {
      "Name": ""
    },
    "Lineitems": [],
    "User": {}
  }
}, context)
```

#### Input
* input `object`
  * Receipts **required** [Receipt](#receipt)
  * unitdp `integer`: Determines the decimal places accepted/returned on the UnitAmount. UnitAmount is 2 decimal places by default but can be increased to 4 decimal places by supplying the unitdp=4 parameter.
  * summarizeErrors `boolean`: If you plan to submit more than one entity per API call, we recommend that you append the summarizeErrors=false querystring to your API call. This ensures that every entity is returned back to you, each having their own status attribute.

#### Output
* output `object`
  * DateTimeUTC `string`: DateTime of the request
  * ID `string`: Unique identifier for each response
  * ProviderName `string`: Name of the application that made the request
  * Receipts `array`
    * items [Receipt](#receipt)
  * Status `string`: OK for a successful response

### Receipts.ReceiptID.get
Retrieve an individual receipt


```js
xero.Receipts.ReceiptID.get({
  "ReceiptID": ""
}, context)
```

#### Input
* input `object`
  * ReceiptID **required** `string`
  * unitdp `integer`: Determines the decimal places accepted/returned on the UnitAmount. UnitAmount is 2 decimal places by default but can be increased to 4 decimal places by supplying the unitdp=4 parameter.

#### Output
* output `object`
  * DateTimeUTC `string`: DateTime of the request
  * ID `string`: Unique identifier for each response
  * ProviderName `string`: Name of the application that made the request
  * Receipts `array`
    * items [Receipt](#receipt)
  * Status `string`: OK for a successful response

### Receipts.ReceiptID.post
Update a receipt


```js
xero.Receipts.ReceiptID.post({
  "Receipts": {
    "Date": "",
    "Contact": {
      "Name": ""
    },
    "Lineitems": [],
    "User": {}
  },
  "ReceiptID": ""
}, context)
```

#### Input
* input `object`
  * Receipts **required** [Receipt](#receipt)
  * ReceiptID **required** `string`
  * unitdp `integer`: Determines the decimal places accepted/returned on the UnitAmount. UnitAmount is 2 decimal places by default but can be increased to 4 decimal places by supplying the unitdp=4 parameter.

#### Output
* output `object`
  * DateTimeUTC `string`: DateTime of the request
  * ID `string`: Unique identifier for each response
  * ProviderName `string`: Name of the application that made the request
  * Receipts `array`
    * items [Receipt](#receipt)
  * Status `string`: OK for a successful response

### Receipts.ReceiptID.Attachments.get
Retrieve Attachments


```js
xero.Receipts.ReceiptID.Attachments.get({
  "ReceiptID": ""
}, context)
```

#### Input
* input `object`
  * ReceiptID **required** `string`: The Xero generated unique identifier for a Receipt
  * If-Modified-Since `string`: A UTC timestamp (yyyy-mm-ddThh:mm:ss) . Only invoices created or modified since this timestamp will be returned e.g. 2009-11-12T00:00:00

#### Output
* output `object`
  * Attachments `array`
    * items [Attachment](#attachment)
  * DateTimeUTC `string`: DateTime of the request
  * ID `string`: Unique identifier for each response
  * ProviderName `string`: Name of the application that made the request
  * Status `string`: OK for a successful response

### Receipts.ReceiptID.Attachments.FileName.get
Download an Attachment


```js
xero.Receipts.ReceiptID.Attachments.FileName.get({
  "FileName": "",
  "ReceiptID": ""
}, context)
```

#### Input
* input `object`
  * FileName **required** `string`: The filename of the attachment to be downloaded
  * ReceiptID **required** `string`: The Xero generated unique identifier for a Receipt
  * If-Modified-Since `string`: A UTC timestamp (yyyy-mm-ddThh:mm:ss) . Only invoices created or modified since this timestamp will be returned e.g. 2009-11-12T00:00:00

#### Output
*Output schema unknown*

### Receipts.ReceiptID.Attachments.FileName.post
Upload an Attachment


```js
xero.Receipts.ReceiptID.Attachments.FileName.post({
  "FileName": "",
  "ReceiptID": "",
  "Content": {
    "Content": ""
  }
}, context)
```

#### Input
* input `object`
  * FileName **required** `string`: The filename of the attachment being uploaded
  * ReceiptID **required** `string`: The Xero generated unique identifier for a Receipt
  * Content **required** [Content](#content)

#### Output
* output `object`
  * Attachments `array`
    * items [Attachment](#attachment)
  * DateTimeUTC `string`: DateTime of the request
  * ID `string`: Unique identifier for each response
  * ProviderName `string`: Name of the application that made the request
  * Status `string`: OK for a successful response

### RepeatingInvoices.get
Retrieve a collection of repeating invoice templates


```js
xero.RepeatingInvoices.get({}, context)
```

#### Input
* input `object`
  * If-Modified-Since `string`: A UTC timestamp (yyyy-mm-ddThh:mm:ss) . Only invoices created or modified since this timestamp will be returned e.g. 2009-11-12T00:00:00
  * order `string`: Order by any element returned
  * where `string`: Filter by an any element

#### Output
* output `object`
  * DateTimeUTC `string`: DateTime of the request
  * ID `string`: Unique identifier for each response
  * ProviderName `string`: Name of the application that made the request
  * RepeatingInvoices `array`
    * items [RepeatingInvoice](#repeatinginvoice)
  * Status `string`: OK for a successful response

### RepeatingInvoices.RepeatingInvoiceID.get
Retrieve an individual repeating invoice template


```js
xero.RepeatingInvoices.RepeatingInvoiceID.get({
  "RepeatingInvoiceID": ""
}, context)
```

#### Input
* input `object`
  * RepeatingInvoiceID **required** `string`

#### Output
* output `object`
  * DateTimeUTC `string`: DateTime of the request
  * ID `string`: Unique identifier for each response
  * ProviderName `string`: Name of the application that made the request
  * RepeatingInvoices `array`
    * items [RepeatingInvoice](#repeatinginvoice)
  * Status `string`: OK for a successful response

### RepeatingInvoices.RepeatingInvoiceID.Attachments.get
Retrieve Attachments


```js
xero.RepeatingInvoices.RepeatingInvoiceID.Attachments.get({
  "RepeatingInvoiceID": ""
}, context)
```

#### Input
* input `object`
  * RepeatingInvoiceID **required** `string`: The Xero generated unique identifier for a RepeatingInvoice
  * If-Modified-Since `string`: A UTC timestamp (yyyy-mm-ddThh:mm:ss) . Only invoices created or modified since this timestamp will be returned e.g. 2009-11-12T00:00:00

#### Output
* output `object`
  * Attachments `array`
    * items [Attachment](#attachment)
  * DateTimeUTC `string`: DateTime of the request
  * ID `string`: Unique identifier for each response
  * ProviderName `string`: Name of the application that made the request
  * Status `string`: OK for a successful response

### RepeatingInvoices.RepeatingInvoiceID.Attachments.FileName.get
Download an Attachment


```js
xero.RepeatingInvoices.RepeatingInvoiceID.Attachments.FileName.get({
  "FileName": "",
  "RepeatingInvoiceID": ""
}, context)
```

#### Input
* input `object`
  * FileName **required** `string`: The filename of the attachment to be downloaded
  * RepeatingInvoiceID **required** `string`: The Xero generated unique identifier for a RepeatingInvoice
  * If-Modified-Since `string`: A UTC timestamp (yyyy-mm-ddThh:mm:ss) . Only invoices created or modified since this timestamp will be returned e.g. 2009-11-12T00:00:00

#### Output
*Output schema unknown*

### Reports.get
Retrieve a list of published GST reports (NZ) or BAS reports (AU)


```js
xero.Reports.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * DateTimeUTC `string`: DateTime of the request
  * ID `string`: Unique identifier for each response
  * ProviderName `string`: Name of the application that made the request
  * Reports `array`
    * items [ReportSummary](#reportsummary)
  * Status `string`: OK for a successful response

### Reports.AgedPayablesByContact.get
Retrieve an Aged Payables report for a contact


```js
xero.Reports.AgedPayablesByContact.get({
  "contactID": ""
}, context)
```

#### Input
* input `object`
  * contactID **required** `string`: ContactID for the contact you're running the report for
  * date `string`: Shows payments up to this date e.g. 2014-04-30. Defaults to end of the current month
  * fromDate `string`: Show all payable invoices from this date for contact
  * toDate `string`: Show all payable invoices to this date for the contact

#### Output
* output `object`
  * DateTimeUTC `string`: DateTime of the request
  * ID `string`: Unique identifier for each response
  * ProviderName `string`: Name of the application that made the request
  * Reports `array`
    * items [Report](#report)
  * Status `string`: OK for a successful response

### Reports.AgedReceivablesByContact.get
Retrieve an Aged Receivables report for a contact


```js
xero.Reports.AgedReceivablesByContact.get({
  "contactID": ""
}, context)
```

#### Input
* input `object`
  * contactID **required** `string`: ContactID for the contact you're running the report for
  * date `string`: Shows payments up to this date e.g. 2014-04-30. Defaults to end of the current month
  * fromDate `string`: Show all receivable invoices from this date for contact
  * toDate `string`: Show all receivable invoices to this date for the contact

#### Output
* output `object`
  * DateTimeUTC `string`: DateTime of the request
  * ID `string`: Unique identifier for each response
  * ProviderName `string`: Name of the application that made the request
  * Reports `array`
    * items [Report](#report)
  * Status `string`: OK for a successful response

### Reports.BalanceSheet.get
Retrieve a Balance Sheet Report


```js
xero.Reports.BalanceSheet.get({}, context)
```

#### Input
* input `object`
  * date `string`: YYYY-MM-DD
  * trackingOptionID1 `string`: Run the balance sheet for a specific tracking option
  * trackingOptionID2 `string`: Run the balance sheet for a combination of two tracking options
  * standardLayout `boolean`: If set to true no custom report layouts will be applied to response
  * paymentsOnly `boolean`: Set this to true to get cash transactions only

#### Output
* output `object`
  * DateTimeUTC `string`: DateTime of the request
  * ID `string`: Unique identifier for each response
  * ProviderName `string`: Name of the application that made the request
  * Reports `array`
    * items [Report](#report)
  * Status `string`: OK for a successful response

### Reports.BankStatement.get
Retrieve a bank statement report


```js
xero.Reports.BankStatement.get({
  "bankAccountID": ""
}, context)
```

#### Input
* input `object`
  * bankAccountID **required** `string`: bankAccountID e.g. 5040915e-8ce7-4177-8d08-fde416232f18
  * fromDate `string`: YYYY-MM-DD
  * toDate `string`: YYYY-MM-DD

#### Output
* output `object`
  * DateTimeUTC `string`: DateTime of the request
  * ID `string`: Unique identifier for each response
  * ProviderName `string`: Name of the application that made the request
  * Reports `array`
    * items [Report](#report)
  * Status `string`: OK for a successful response

### Reports.BankSummary.get
Retrieve a bank summary report


```js
xero.Reports.BankSummary.get({}, context)
```

#### Input
* input `object`
  * fromDate `string`: YYYY-MM-DD
  * toDate `string`: YYYY-MM-DD

#### Output
* output `object`
  * DateTimeUTC `string`: DateTime of the request
  * ID `string`: Unique identifier for each response
  * ProviderName `string`: Name of the application that made the request
  * Reports `array`
    * items [Report](#report)
  * Status `string`: OK for a successful response

### Reports.BudgetSummary.get
Retrieve a budget summary report


```js
xero.Reports.BudgetSummary.get({}, context)
```

#### Input
* input `object`
  * date `string`: YYYY-MM-DD
  * periods `integer`: The number of periods to compare (integer between 1 and 12)
  * timeframe `integer`: The period size to compare to (1=month, 3=quarter, 12=year)

#### Output
* output `object`
  * DateTimeUTC `string`: DateTime of the request
  * ID `string`: Unique identifier for each response
  * ProviderName `string`: Name of the application that made the request
  * Reports `array`
    * items [Report](#report)
  * Status `string`: OK for a successful response

### Reports.ExecutiveSummary.get
Retrieve an executive summary report


```js
xero.Reports.ExecutiveSummary.get({}, context)
```

#### Input
* input `object`
  * date `string`: YYYY-MM-DD

#### Output
* output `object`
  * DateTimeUTC `string`: DateTime of the request
  * ID `string`: Unique identifier for each response
  * ProviderName `string`: Name of the application that made the request
  * Reports `array`
    * items [Report](#report)
  * Status `string`: OK for a successful response

### Reports.ProfitAndLoss.get
Retrieve a profit and loss report


```js
xero.Reports.ProfitAndLoss.get({}, context)
```

#### Input
* input `object`
  * fromDate `string`: YYYY-MM-DD
  * toDate `string`: YYYY-MM-DD
  * trackingCategoryID `string`: If you specify the trackingCategoryID parameter then the Profit and Loss Report will show figures for each of the options in the category as separate columns. See the Profit and Loss Report in Xero to learn more about this behavior when filtering by a tracking category.
  * trackingOptionID `string`: If you specify this parameter in addition to the trackingCategoryID then just one option will be returned (i.e. 1 column only)
  * trackingCategoryID2 `string`: If you specify a second trackingCategoryID parameter then the Profit and Loss Report will show figures for each combination of options from the two categories as separate columns. See the Profit and Loss Report in Xero to learn more about this behaviour when filtering by two tracking categories.
  * trackingOptionID2 `string`: If you specify this parameter in addition to a second trackingCategoryID then just one option will be returned combined with the option/s from the first tracking category
  * standardLayout `boolean`: If you set this parameter to "true" then no custom report layouts will be applied to response
  * paymentsOnly `string`: Set this to true to get cash transactions only

#### Output
* output `object`
  * DateTimeUTC `string`: DateTime of the request
  * ID `string`: Unique identifier for each response
  * ProviderName `string`: Name of the application that made the request
  * Reports `array`
    * items [Report](#report)
  * Status `string`: OK for a successful response

### Reports.TenNinetyNine.get
Retrieve a 1099 Report (US only)


```js
xero.Reports.TenNinetyNine.get({}, context)
```

#### Input
* input `object`
  * reportYear `string`: Year of the report e.g. 2013

#### Output
* output `object`
  * DateTimeUTC `string`: DateTime of the request
  * ID `string`: Unique identifier for each response
  * ProviderName `string`: Name of the application that made the request
  * Reports `array`
    * items [Report](#report)
  * Status `string`: OK for a successful response

### Reports.TrialBalance.get
Retrieve a Trial Balance Report


```js
xero.Reports.TrialBalance.get({}, context)
```

#### Input
* input `object`
  * Date `string`: YYYY-MM-DD
  * paymentsOnly `string`: Set this to true to get cash transactions only

#### Output
* output `object`
  * DateTimeUTC `string`: DateTime of the request
  * ID `string`: Unique identifier for each response
  * ProviderName `string`: Name of the application that made the request
  * Reports `array`
    * items [Report](#report)
  * Status `string`: OK for a successful response

### Reports.ReportID.get
Retrieve an individual BAS Report (AU) or GST Report (NZ)


```js
xero.Reports.ReportID.get({
  "ReportID": ""
}, context)
```

#### Input
* input `object`
  * ReportID **required** `string`

#### Output
* output `object`
  * DateTimeUTC `string`: DateTime of the request
  * ID `string`: Unique identifier for each response
  * ProviderName `string`: Name of the application that made the request
  * Reports `array`
    * items [TaxReport](#taxreport)
  * Status `string`: OK for a successful response

### TaxRates.get
Retrieve a collection of tax rates


```js
xero.TaxRates.get({}, context)
```

#### Input
* input `object`
  * If-Modified-Since `string`: A UTC timestamp (yyyy-mm-ddThh:mm:ss) . Only invoices created or modified since this timestamp will be returned e.g. 2009-11-12T00:00:00
  * order `string`: Order by any element returned
  * where `string`: Filter by an any element

#### Output
* output `object`
  * DateTimeUTC `string`: DateTime of the request
  * ID `string`: Unique identifier for each response
  * ProviderName `string`: Name of the application that made the request
  * Status `string`: OK for a successful response
  * TaxRates `array`
    * items [TaxRate](#taxrate)

### TaxRates.post
Create or update tax rates


```js
xero.TaxRates.post({
  "TaxRates": {
    "Name": "",
    "TaxComponents": []
  }
}, context)
```

#### Input
* input `object`
  * TaxRates **required** [TaxRate](#taxrate)
  * summarizeErrors `boolean`: If you plan to submit more than one entity per API call, we recommend that you append the summarizeErrors=false querystring to your API call. This ensures that every entity is returned back to you, each having their own status attribute.

#### Output
* output `object`
  * DateTimeUTC `string`: DateTime of the request
  * ID `string`: Unique identifier for each response
  * ProviderName `string`: Name of the application that made the request
  * Status `string`: OK for a successful response
  * TaxRates `array`
    * items [TaxRate](#taxrate)

### TaxRates.put
Create tax rates


```js
xero.TaxRates.put({
  "TaxRates": {
    "Name": "",
    "TaxComponents": []
  }
}, context)
```

#### Input
* input `object`
  * TaxRates **required** [TaxRate](#taxrate)
  * summarizeErrors `boolean`: If you plan to submit more than one entity per API call, we recommend that you append the summarizeErrors=false querystring to your API call. This ensures that every entity is returned back to you, each having their own status attribute.

#### Output
* output `object`
  * DateTimeUTC `string`: DateTime of the request
  * ID `string`: Unique identifier for each response
  * ProviderName `string`: Name of the application that made the request
  * Status `string`: OK for a successful response
  * TaxRates `array`
    * items [TaxRate](#taxrate)

### TrackingCategories.get
Retrieve a collection of tracking categories and options


```js
xero.TrackingCategories.get({}, context)
```

#### Input
* input `object`
  * If-Modified-Since `string`: A UTC timestamp (yyyy-mm-ddThh:mm:ss) . Only invoices created or modified since this timestamp will be returned e.g. 2009-11-12T00:00:00
  * order `string`: Order by any element returned
  * where `string`: Filter by an any element
  * includeArchived `boolean`: Include archived records in the response 

#### Output
* output `object`
  * DateTimeUTC `string`: DateTime of the request
  * ID `string`: Unique identifier for each response
  * ProviderName `string`: Name of the application that made the request
  * Status `string`: OK for a successful response
  * TrackingCategories `array`
    * items [TrackingCategory](#trackingcategory)

### TrackingCategories.post
Create a tracking category


```js
xero.TrackingCategories.post({
  "TrackingCategories": {}
}, context)
```

#### Input
* input `object`
  * TrackingCategories **required** [TrackingCategory](#trackingcategory)
  * summarizeErrors `boolean`: If you plan to submit more than one entity per API call, we recommend that you append the summarizeErrors=false querystring to your API call. This ensures that every entity is returned back to you, each having their own status attribute.

#### Output
* output `object`
  * DateTimeUTC `string`: DateTime of the request
  * ID `string`: Unique identifier for each response
  * ProviderName `string`: Name of the application that made the request
  * Status `string`: OK for a successful response
  * TrackingCategories `array`
    * items [TrackingCategory](#trackingcategory)

### TrackingCategories.put
Create a tracking category


```js
xero.TrackingCategories.put({
  "TrackingCategories": {}
}, context)
```

#### Input
* input `object`
  * TrackingCategories **required** [TrackingCategory](#trackingcategory)
  * summarizeErrors `boolean`: If you plan to submit more than one entity per API call, we recommend that you append the summarizeErrors=false querystring to your API call. This ensures that every entity is returned back to you, each having their own status attribute.

#### Output
* output `object`
  * DateTimeUTC `string`: DateTime of the request
  * ID `string`: Unique identifier for each response
  * ProviderName `string`: Name of the application that made the request
  * Status `string`: OK for a successful response
  * TrackingCategories `array`
    * items [TrackingCategory](#trackingcategory)

### TrackingCategories.TrackingCategoryID.delete
Delete a Tracking Category


```js
xero.TrackingCategories.TrackingCategoryID.delete({
  "TrackingCategoryID": ""
}, context)
```

#### Input
* input `object`
  * TrackingCategoryID **required** `string`

#### Output
*Output schema unknown*

### TrackingCategories.TrackingCategoryID.get
Retrieve a tracking category and it's options


```js
xero.TrackingCategories.TrackingCategoryID.get({
  "TrackingCategoryID": ""
}, context)
```

#### Input
* input `object`
  * TrackingCategoryID **required** `string`

#### Output
* output `object`
  * DateTimeUTC `string`: DateTime of the request
  * ID `string`: Unique identifier for each response
  * ProviderName `string`: Name of the application that made the request
  * Status `string`: OK for a successful response
  * TrackingCategories `array`
    * items [TrackingCategory](#trackingcategory)

### TrackingCategories.TrackingCategoryID.post
Create or update a tracking category


```js
xero.TrackingCategories.TrackingCategoryID.post({
  "TrackingCategories": {},
  "TrackingCategoryID": ""
}, context)
```

#### Input
* input `object`
  * TrackingCategories **required** [TrackingCategory](#trackingcategory)
  * TrackingCategoryID **required** `string`

#### Output
* output `object`
  * DateTimeUTC `string`: DateTime of the request
  * ID `string`: Unique identifier for each response
  * ProviderName `string`: Name of the application that made the request
  * Status `string`: OK for a successful response
  * TrackingCategories `array`
    * items [TrackingCategory](#trackingcategory)

### TrackingCategories.TrackingCategoryID.Options.put
Add options to a tracking category


```js
xero.TrackingCategories.TrackingCategoryID.Options.put({
  "TrackingOptions": {},
  "TrackingCategoryID": ""
}, context)
```

#### Input
* input `object`
  * TrackingOptions **required** [TrackingOption](#trackingoption)
  * TrackingCategoryID **required** `string`
  * summarizeErrors `boolean`: If you plan to submit more than one entity per API call, we recommend that you append the summarizeErrors=false querystring to your API call. This ensures that every entity is returned back to you, each having their own status attribute.

#### Output
* output `object`
  * DateTimeUTC `string`: DateTime of the request
  * ID `string`: Unique identifier for each response
  * ProviderName `string`: Name of the application that made the request
  * Status `string`: OK for a successful response
  * TrackingCategories `array`
    * items [TrackingCategory](#trackingcategory)

### TrackingCategories.TrackingCategoryID.Options.TrackingOptionID.delete
Delete an option from a tracking category


```js
xero.TrackingCategories.TrackingCategoryID.Options.TrackingOptionID.delete({
  "TrackingCategoryID": "",
  "TrackingOptionID": ""
}, context)
```

#### Input
* input `object`
  * TrackingCategoryID **required** `string`
  * TrackingOptionID **required** `string`

#### Output
*Output schema unknown*

### Users.get
Retrieve a collection of Users


```js
xero.Users.get({}, context)
```

#### Input
* input `object`
  * If-Modified-Since `string`: A UTC timestamp (yyyy-mm-ddThh:mm:ss) . Only invoices created or modified since this timestamp will be returned e.g. 2009-11-12T00:00:00
  * order `string`: Order by any element returned
  * where `string`: Filter by an any element

#### Output
* output `object`
  * DateTimeUTC `string`: DateTime of the request
  * ID `string`: Unique identifier for each response
  * ProviderName `string`: Name of the application that made the request
  * Status `string`: OK for a successful response
  * Users `array`
    * items [User](#user)

### Users.UserID.get
Retrieve an individual User


```js
xero.Users.UserID.get({
  "UserID": ""
}, context)
```

#### Input
* input `object`
  * UserID **required** `string`

#### Output
* output `object`
  * DateTimeUTC `string`: DateTime of the request
  * ID `string`: Unique identifier for each response
  * ProviderName `string`: Name of the application that made the request
  * Status `string`: OK for a successful response
  * Users `array`
    * items [User](#user)



## Definitions

### Account
* Account `object`
  * AccountID `string`: Unique identifier for the account
  * BankAccountNumber `string`: For bank accounts only (Type BANK)
  * BankAccountType `string` (values: BANK, CREDITCARD, PAYPAL): For bank accounts only
  * Class `string` (values: ASSET, EQUITY, EXPENSE, LIABILITY, REVENUE): The class of account
  * Code **required** `string`: Customer defined alpha numeric account code e.g 200 or SALES
  * CurrencyCode `string`: For bank accounts only
  * Description `string`: Description of the Account. Valid for all types of accounts except bank accounts
  * EnablePaymentsToAccount `boolean`: Describes whether account can have payments applied to it
  * HasAttachments `boolean`: Indicates if an account has an attachment
  * Name **required** `string`: Name of account
  * ReportingCode `string`: Shown if set
  * ReportingCodeName `string`: Shown if set
  * ShowInExpenseClaims `boolean`: Describes whether account code is available for use with expense claims
  * Status `string` (values: ACTIVE, ARCHIVED): Accounts with a status of ACTIVE can be updated to ARCHIVED
  * SystemAccount `string` (values: DEBTORS, CREDITORS, BANKCURRENCYGAIN, GST, GSTONIMPORTS, HISTORICAL, REALISEDCURRENCYGAIN, RETAINEDEARNINGS, ROUNDING, TRACKINGTRANSFERS, UNPAIDEXPCLM, UNREALISEDCURRENCYGAIN, WAGEPAYABLES): If this is a system account then this element is returned. Note that non-system accounts may have this element set as either “” or null.
  * TaxType `string`: Default tax rate for the account
  * Type **required** `string` (values: BANK, CURRENT, CURRLIAB, DEPRECIATN, DIRECTCOSTS, EQUITY, EXPENSE, FIXED, INVENTORY, LIABILITY, NONCURRENT, OTHERINCOME, OVERHEADS, PREPAYMENT, REVENUE, SALES, TERMLIAB, PAYGLIABILITY, SUPERANNUATIONEXPENSE, SUPERANNUATIONLIABILITY, WAGESEXPENSE, WAGESPAYABLELIABILITY): Account type
  * UpdatedDateUTC `string`: Last modified date UTC format

### Address
* Address `object`
  * AddressLine1 `string`
  * AddressLine2 `string`
  * AddressLine3 `string`
  * AddressLine4 `string`
  * AddressType `string` (values: POBOX, STREET, POSTAL): The address type
  * Attentionto `string`
  * City `string`
  * Country `string`
  * PostalCode `string`
  * Region `string`

### Allocation
* Allocation `object`
  * AppliedAmount **required** `number`: the amount being applied to the invoice
  * Date **required** `string`: The date the prepayment is applied YYYY-MM-DD (read-only). This will be the latter of the invoice date and the prepayment date.
  * Invoice **required** `object`
    * InvoiceID `string`

### Attachment
* Attachment `object`
  * AttachmentId `string`: Xero generated unique identifier for attachment
  * ContentLegth `integer`: The content length in bytes
  * Filename `string`: The filename of the attachemnt
  * IncludeOnline `boolean`: Determines whether the attachment is included with the online invoice
  * MimeType `string`: The mimetype of the attachemnt
  * Url `string`: The URL to where the attachment is located

### Balances
* Balances `array`: The raw AccountsReceivable (sales invoices) and AccountsPayable (bills) outstanding and overdue amounts, not converted to base currency
  * items `object`
    * AccountsPayable `object`
      * Outstanding `number`: AP outstanding balance
      * Overdue `number`: AP overdue balance
    * AccountsReceivable `object`
      * Outstanding `number`: AR outstanding balance
      * Overdue `number`: AR overdue balance

### BankAccount
* BankAccount `object`
  * AccountID `string`: Account identifier
  * Code `string`: Bank account code
  * Name `string`: The Name Bank Account

### BankTransaction
* BankTransaction `object`
  * Attachments `array`
    * items [Attachment](#attachment)
  * BankAccount **required** [BankAccount](#bankaccount)
  * BankTransactionId `string`: Xero generated unique identifier for bank transactions
  * Contact **required** [ContactSummary](#contactsummary)
  * CurrencyCode `string`: The currency that bank transaction has been raised in
  * CurrencyRate `number`: The currency rate for a multicurrency bank transaction. If no rate is specified, the XE.com day rate is used.
  * Date `string`: Date bank transaction was made YYYY-MM-DD
  * HasAttachments `boolean`: boolean to indicate if the bank transaction has an attachment
  * IsReconciled `boolean`: Indicates if transaction has been reconciled
  * LineAmountTypes `string` (values: Inclusive, Exclusive, NoTax): Line amounts are exclusive of tax by default if you don’t specify this element
  * LineItems **required** [LineItems](#lineitems)
  * OverpaymentID `string`: Xero generated unique identifier for an Overpayment. This will be returned on BankTransactions with a Type of SPEND-OVERPAYMENT or RECEIVE-OVERPAYMENT
  * PrepaymentID `string`: Xero generated unique identifier for a Prepayment. This will be returned on BankTransactions with a Type of SPEND-PREPAYMENT or RECEIVE-PREPAYMENT
  * Reference `string`: Reference for the transaction. Only supported for SPEND and RECEIVE transactions
  * Status `string` (values: AUTHORISED, DELETED): The status of the bank transaction
  * SubTotal `number`: Total of bank transaction excluding taxes
  * Total `number`: Total of bank transaction tax inclusive (i.e. SubTotal + TotalTax). This will be ignored if it doesn’t equal the sum of the LineAmounts
  * Totaltax `number`: Total tax on the bank transaction
  * Type **required** `string` (values: RECEIVE, RECEIVE-OVERPAYMENT, RECEIVE-PREPAYMENT, SPEND, SPEND-OVERPAYMENT, SPEND-PREPAYMENT, RECEIVE-TRANSFER, SPEND-TRANSFER): The type of bank transaction
  * UpdatedDateUTC `string`: Last modified date UTC format
  * Url `string`: URL link to a source document – shown as “Go to [appName]” in the Xero app

### BankTransfer
* BankTransfer `object`
  * Amount **required** `number`: Total of the bank transfer
  * Attachments `array`
    * items [Attachment](#attachment)
  * BankTransferId `string`: Xero generated unique identifier for bank transfers
  * CurrencyRate `number`: The currency rate for a multicurrency bank transfer. If no rate is specified, the XE.com day rate is used.
  * Date `string`: Date bank transfer was made YYYY-MM-DD
  * FromBankAccount **required** [FromBankAccount](#frombankaccount)
  * FromBankTransactionID `string`: The Bank Transaction ID for the source account
  * HasAttachments `boolean`: boolean to indicate if the bank transaction has an attachment
  * ToBankAccount **required** [ToBankAccount](#tobankaccount)
  * ToBankTransactionID `string`: The Bank Transaction ID for the destination account
  * UpdatedDateUTC `string`: Last modified date UTC format

### BatchPayments
* BatchPayments `object`
  * BankAccountName `string`
  * BankAccountNumber `string`
  * Details `string`

### BrandingTheme
* BrandingTheme `object`
  * BrandingThemeID `string`: Xero identifier
  * CreatedDateUTC `string`: UTC timestamp of creation date of branding theme
  * Name `string`: Name of branding theme
  * SortOrder `integer`: Integer – ranked order of branding theme. The default branding theme has a value of 0

### Contact
* Contact `object`
  * AccountNumber `string`: A user defined account number. This can be updated via the API and the Xero UI.
  * AccountsPayableTaxType `string`: Default tax type used for contact on AP invoices
  * AccountsReceivableTaxType `string`: Default tax type used for contact on AR invoices
  * Addresses `array`: Address details for the contact
    * items [Address](#address)
  * Balances [Balances](#balances)
  * BankAccountDetails `string`: Bank account number of contact
  * BatchPayments [BatchPayments](#batchpayments)
  * BrandingTheme [BrandingTheme](#brandingtheme)
  * ContactGroups `array`
    * items [ContactGroup](#contactgroup)
  * ContactID `string`: Xero identifier
  * ContactPersons [ContactPersons](#contactpersons)
  * ContactStatus `string` (values: ACTIVE, ARCHIVED): Current status of a contact
  * DefaultCurrency `string`: Default currency for raising invoices against contact
  * EmailAddress `string`: Email address of contact person (umlauts not supported)
  * FirstName `string`: First name of contact person
  * HasAttachments `boolean`: A boolean to indicate if a contact has an attachment
  * IsCustomer `boolean`: Boolean that describes if a contact has any AR invoices entered against them. Cannot be set via PUT or POST – it is automatically set when an accounts receivable invoice is generated against this contact.
  * IsSupplier `boolean`: Boolean that describes if a contact that has any AP invoices entered against them. Cannot be set via PUT or POST – it is automatically set when an accounts payable invoice is generated against this contact.
  * LastName `string`: Last name of contact person
  * Name **required** `string`: Full name of contact/organisation
  * PaymentTerms [PaymentTerms](#paymentterms)
  * Phones [Phones](#phones)
  * PurchasesDefaultAccountCode `string`: The default purchases account code for contacts
  * PurchasesTrackingCategories [PurchasesTrackingCategories](#purchasestrackingcategories)
  * SalesDefaultAccountCode `string`: The default sales account code for contacts
  * SalesTrackingCategories [SalesTrackingCategories](#salestrackingcategories)
  * SkypeUserName `string`: Skype user name of contact
  * TaxNumber `string`: Tax number of contact – this is also known as the ABN (Australia), GST Number (New Zealand), VAT Number (UK) or Tax ID Number (US and global) in the Xero UI depending on which regionalized version of Xero you are using.
  * UpdatedDateUTC `string`: Last modified date UTC format
  * Website `string`: Website address for contact
  * XeroNetworkKey `string`: Store XeroNetworkKey for contacts.

### ContactGroup
* ContactGroup `object`
  * ContactGroupID `string`: Unique identifier for the contact group
  * Name **required** `string`: Name of the contact group
  * Status `string` (values: ACTIVE, DELETED): The status of the contact group

### ContactPerson
* ContactPerson `object`
  * EmailAddress `string`: Email address of person
  * FirstName `string`: First name of person
  * IncludeInEmails `boolean`: Boolean to indicate whether contact should be included on emails with invoices etc.
  * LastName `string`: Last name of person

### ContactPersons
* ContactPersons `array`
  * items [ContactPerson](#contactperson)

### ContactSummary
* ContactSummary `object`
  * ContactID `string`: Xero identifier
  * Name **required** `string`: Full name of contact/organisation

### Content
* Content `object`
  * Content **required** `string`: The raw file content

### CreditNote
* CreditNote `object`
  * Allocations `array`: Transactions the credit note has been allocated to
    * items [Allocation](#allocation)
  * BrandingThemeID `string`: The identifier for the branding theme applied to the credit note
  * Contact **required** [ContactSummary](#contactsummary)
  * CreditNoteID `string`: Xero generated unique identifier
  * CreditNoteNumber `string`: ACCRECCREDIT – Unique alpha numeric code identifying credit note (when missing will auto-generate from your Organisation Invoice Settings)
  * CurrencyCode `string`: Currency used for the Credit Note
  * CurrencyRate `number`: The currency rate for a multicurrency invoice. If no rate is specified, the XE.com day rate is used
  * Date `string`: The date the credit note is issued YYYY-MM-DD. If the Date element is not specified then it will default to the current date based on the timezone setting of the organisation
  * FullyPaidOnDate `string`: Date when credit note was fully paid
  * HasAttachments `boolean`: boolean to indicate if a credit note has an attachment
  * LineAmountTypes `string` (values: Inclusive, Exclusive, NoTax): How tax is applied on the line items
  * LineItems **required** `array`
    * items [LineItem](#lineitem)
  * Reference `string`: ACCRECCREDIT only – additional reference number
  * RemainingCredit `number`: The remaining credit balance on the Credit Note
  * SentToContact `boolean`: boolean to indicate if a credit note has been sent to a contact via the Xero app (currently read only)
  * Status `string` (values: DRAFT, SUBMITTED, AUTHORISED, PAID, VOIDED, DELETED): The Credit Note status
  * SubTotal `number`: The subtotal of the credit note excluding taxes
  * Total `number`: The total of the Credit Note(subtotal + total tax)
  * TotalTax `number`: The total tax on the credit note
  * Type **required** `string` (values: ACCPAYCREDIT, ACCRECCREDIT): The type of Credit Note
  * UpdatedDateUTC `string`: UTC timestamp of last update to the credit note

### CreditNoteSummary
* CreditNoteSummary `object`
  * AppliedAmount `number`: The total applied to the invoice
  * CreditNoteID `string`: Xero generated unique identifier
  * CreditNoteNumber `string`: ACCRECCREDIT – Unique alpha numeric code identifying credit note (when missing will auto-generate from your Organisation Invoice Settings)
  * Date `string`: The date the credit note is issued YYYY-MM-DD. If the Date element is not specified then it will default to the current date based on the timezone setting of the organisation
  * Total `number`: The total of the Credit Note(subtotal + total tax)

### Currency
* Currency `object`
  * Code `string`: 3 letter alpha code for the currency
  * Description `string`: Name of Currency

### Employee
* Employee `object`
  * EmployeeID `string`: The Xero identifier for an employee
  * ExternalLink `object`
    * LinkType `string` (values: Facebook, GooglePlus, LinkedIn, Twitter, Website): External link types
    * Url `string`: URL for service
  * FirstName **required** `string`: First name of an employee (max length = 255)
  * LastName **required** `string`: Last name of an employee (max length = 255)
  * Status `string` (values: ACTIVE, ARCHIVED): Current status of an employee

### ExpenseClaim
* ExpenseClaim `object`
  * AmountDue `number`: The amount due to be paid for an expense claim
  * AmountPaid `number`: The amount still to pay for an expense claim
  * ExpenseClaimID `string`: Xero generated unique identifier for an expense claim
  * PaymentDueDate `string`: The date when the expense claim is due to be paid YYYY-MM-DD
  * Payments `array`: Payments applied to the expense claim
    * items [PaymentSummary](#paymentsummary)
  * Receipts **required** `array`: The Receipts in the expense claim
    * items [Receipt](#receipt)
  * ReportingDate `string`: The date the expense claim will be reported in Xero YYYY-MM-DD
  * Status `string` (values: SUBMITTED, AUTHORISED, PAID): Current status of an expense claim
  * Total `number`: The total of an expense claim being paid
  * UpdatedDateUTC `string`: Last modified date UTC format
  * User **required** [User](#user)

### ExternalLink
* ExternalLink `object`
  * LinkType `string` (values: Facebook, GooglePlus, LinkedIn, Twitter, Website): External link types
  * Url `string`: URL for service

### FromBankAccount
* FromBankAccount `object`
  * AccountID `string`: Account identifier
  * Code `string`: Bank account code
  * Name `string`: Bank account name

### Invoice
* Invoice `object`
  * AmountCredited `number`: Sum of all credit notes, over-payments and pre-payments applied to invoice
  * AmountDue `number`: Amount remaining to be paid on invoice
  * AmountPaid `number`: Sum of payments received for invoice
  * Attachments `array`
    * items [Attachment](#attachment)
  * BrandingThemeID `string`: The identifier for the branding theme applied to the invoice
  * Contact **required** [ContactSummary](#contactsummary)
  * CreditNotes `array`
    * items [CreditNoteSummary](#creditnotesummary)
  * CurrencyCode `string`: The currency that invoice has been raised in
  * CurrencyRate `number`: The currency rate for a multicurrency invoice. If no rate is specified, the XE.com day rate is used.
  * Date `string`: Date invoice was issued YYYY-MM-DD
  * DueDate `string`: Date the invoice is due to be paid YYYY-MM-DD
  * ExpectedPaymentDate `string`: Shown on sales invoices (Accounts Receivable) when this has been set
  * FullyPaidOnDate `string`: The date the invoice was fully paid. Only returned on fully paid invoices
  * HasAttachments `boolean`: boolean to indicate if an invoice has an attachment
  * InvoiceID `string`: Xero generated unique identifier for invoice
  * InvoiceNumber `string`: User defined alphanumeric code for identifying invoices. 
  * LineAmountTypes `string` (values: Inclusive, Exclusive, NoTax): Line amounts are exclusive of tax by default if you don’t specify this element
  * LineItems **required** [LineItems](#lineitems)
  * Overpayments `array`
    * items [OverpaymentSummary](#overpaymentsummary)
  * Payments `array`
    * items [PaymentSummary](#paymentsummary)
  * PlannedPaymentDate `string`: Shown on bills (Accounts Payable) when this has been set
  * Prepayments `array`
    * items [PrepaymentSummary](#prepaymentsummary)
  * Reference `string`: ACCREC only – additional reference number
  * SentToContact `boolean`: Boolean to set whether the invoice in the Xero app should be marked as “sent”. This can be set only on invoices that have been approved
  * Status `string` (values: DRAFT, SUBMITTED, AUTHORISED, PAID, VOIDED, DELETED): The status of the invoice
  * SubTotal `number`: Total of invoice excluding taxes
  * Total `number`: Total of Invoice tax inclusive (i.e. SubTotal + TotalTax). This will be ignored if it doesn’t equal the sum of the LineAmounts
  * TotalDiscount `number`: Total of discounts applied on the invoice line items
  * Totaltax `number`: Total tax on the invoice
  * Type **required** `string` (values: ACCREC, ACCPAY): ACCREC (for sales) or ACCPAY (for bills)
  * UpdatedDateUTC `string`: Last modified date UTC format
  * Url `string`: URL link to a source document – shown as “Go to [appName]” in the Xero app

### InvoiceSummary
* InvoiceSummary `object`
  * Contact [ContactSummary](#contactsummary)
  * InvoiceID `string`: Xero generated unique identifier for invoice
  * InvoiceNumber `string`: User defined alphanumeric code for identifying invoices. 
  * Type `string` (values: ACCPAY, ACCREC): The Invoice Type

### Item
* Item `object`
  * Code **required** `string`: User defined item code
  * Description `string`: The sales description of the item
  * InventoryAssetAccountCode `string`: The inventory asset account for the item. The account must be of type INVENTORY. The  COGSAccountCode in PurchaseDetails is also required to create a tracked item
  * IsPurchased `boolean`: Boolean value, defaults to true. When IsPurchased is true the item is available for purchase transactions in the Xero UI. If IsPurchased is updated to false then PurchaseDescription and PurchaseDetails values will be nulled.
  * IsSold `boolean`: Boolean value, defaults to true. When IsSold is true the item will be available on sales transactions in the Xero UI. If IsSold is updated to false then Description and SalesDetails values will be nulled.
  * IsTrackedAsInventory `boolean`: True for items that are tracked as inventory. An item will be tracked as inventory if the InventoryAssetAccountCode and COGSAccountCode are set.
  * ItemID `string`: The Xero identifier for an Item
  * Name `string`: The name of the item (max length = 50)
  * PurchaseDescription `string`: The purchase description of the item
  * PurchaseDetails [PurchaseDetails](#purchasedetails)
  * QuantityOnHand `number`: The quantity of the item on hand
  * SalesDetails [SalesDetails](#salesdetails)
  * TotalCostPool `number`: The value of the item on hand. Calculated using average cost accounting.
  * UpdatedDateUTC `string`: Last modified date in UTC format

### Journal
* Journal `object`
  * CreatedDateUTC `string`: Created date UTC format
  * JournalDate `string`: Date the journal was posted
  * JournalID `string`: Xero identifier
  * JournalLines `array`
    * items [JournalLine](#journalline)
  * JournalNumber `string`: Xero generated journal number
  * SourceID `string`: The identifier for the source transaction (e.g. InvoiceID)
  * SourceType `string` (values: ACCREC, ACCPAY, ACCPAYCREDIT, ACCRECPAYMENT, ACCPAYPAYMENT, ARCREDITPAYMENT, APCREDITPAYMENT, CASHREC, CASHPAID, TRANSFER, ARPREPAYMENT, APPREPAYMENT, AROVERPAYMENT, APOVERPAYMENT, EXPCLAIM, EXPPAYMENT, MANJOURNAL, PAYSLIP, WAGEPAYABLE, INTEGRATEDPAYROLLPE, INTEGRATEDPAYROLLPT, EXTERNALSPENDMONEY, INTEGRATEDPAYROLLPTPAYMENT, INTEGRATEDPAYROLLCN): The journal source type. The type of transaction that created the journal

### JournalLine
* JournalLine `object`
  * AccountCode `string`: Account Code
  * Description `string`: Description for journal line
  * LineAmount `number`: Total for line. Debits are positive, credits are negative value
  * TaxAmount `number`: The calculated tax amount based on the TaxType and LineAmount
  * TaxType `string`: Used as an override if the default Tax Code for the selected AccountCode is not correct.
  * Tracking `array`: Optional Tracking Category. Any JournalLine can have a maximum of 2 TrackingCategory elements.
    * items [TrackingCategory](#trackingcategory)

### LineItem
* LineItem `object`
  * AccountCode `string`: The account that the lineitem is being coded to
  * Description **required** `string`: Description needs to be at least 1 char long. A line item with just a description (i.e no unit amount or quantity) can be created by specifying just a <Description> element that contains at least 1 character
  * DiscountRate `number`: Percentage discount being applied to a line item (only supported on ACCREC invoices – ACC PAY invoices and credit notes in Xero do not support discounts
  * ItemCode `string`: Code of the item
  * LineAmount `number`: The line amount reflects the discounted price if a DiscountRate has been used i.e LineAmount = Quantity * Unit Amount * ((100 – DiscountRate)/100)
  * LineItemID `string`: The Xero generated identifier for a LineItem. If LineItemIDs are not included with line items in an update request then the line items are deleted and recreated.
  * Quantity `number`: LineItem Quantity
  * TaxAmount `number`: The tax amount is auto calculated as a percentage of the line amount based on the tax rate. This value can be overriden if the calculated TaxAmount is not correct.
  * TaxType `string`: Used as an override if the default Tax Code for the selected <AccountCode> is not correct
  * Tracking [Tracking](#tracking)
  * UnitAmount `number`: Lineitem unit amount. By default, unit amount will be rounded to two decimal places. You can opt in to use four decimal places by adding the querystring parameter unitdp=4 to your query. See the Rounding in Xero guide for more information.

### LineItems
* LineItems `array`
  * items [LineItem](#lineitem)

### LinkedTransaction
* LinkedTransaction `object`
  * ContactID `string`: Filter by the combination of ContactID and Status. Get all the linked transactions that have been assigned to a particular customer and have a particular status e.g. GET /LinkedTransactions?ContactID=4bb34b03-3378-4bb2-a0ed-6345abf3224e&Status=APPROVED.
  * LinkedTransactionID `string`: The Xero identifier for an Linked Transaction e.g. /LinkedTransactions/297c2dc5-cc47-4afd-8ec8-74990b8761e9
  * SourceLineItemID `string`: The line item identifier from the source transaction.
  * SourceTransactionID `string`: Filter by the SourceTransactionID. Get all the linked transactions created from a particular ACCPAY invoice
  * SourceTransactionTypeCode `string`: The Type of the source tranasction. This will be ACCPAY if the linked transaction was created from an invoice and SPEND if it was created from a bank transaction.
  * Status `string` (values: DRAFT, APPROVED, ONDRAFT, BILLED, VOIDED): Filter by the combination of ContactID and Status. Get all the linked transactions that have been assigned to a particular customer and have a particular status e.g. GET /LinkedTransactions?ContactID=4bb34b03-3378-4bb2-a0ed-6345abf3224e&Status=APPROVED.
  * TargetLineItemID `string`: The line item identifier from the target transaction. It is possible to link multiple billable expenses to the same TargetLineItemID.
  * TargetTransactionID `string`: Filter by the TargetTransactionID. Get all the linked transactions allocated to a particular ACCREC invoice
  * Type `string` (values: BILLABLEEXPENSE): This will always be BILLABLEEXPENSE. More types may be added in future.
  * UpdatedDateUTC `string`: The last modified date in UTC format

### ManualJournal
* ManualJournal `object`
  * Date `string`: Date journal was posted – YYYY-MM-DD
  * HasAttachments `boolean`: Boolean to indicate if a manual journal has an attachment
  * JournalID `string`: The Xero identifier for a Manual Journal
  * JournalLines **required** `array`: See JournalLines
    * items [JournalLine](#journalline)
  * LineAmountTypes `string` (values: Inclusive, Exclusive, NoTax): Line amounts are exclusive of tax by default if you don’t specify this element
  * Narration **required** `string`: Description of journal being posted
  * ShowOnCashBasisReports `boolean`: Boolean – default is true if not specified
  * Status `string` (values: DRAFT, POSTED, DELETED, VOIDED): Manual Journal Status Codes
  * UpdatedDateUTC `string`: Last modified date UTC format
  * Url `string`: Url link to a source document – shown as “Go to [appName]” in the Xero app

### OnlineInvoice
* OnlineInvoice `object`
  * OnlineInvoiceUrl `string`: The URL to view the online invoice

### Organisation
* Organisation `object`
  * APIKey `string`: Display a unique key used for Xero-to-Xero transactions
  * Addresses `array`: Address details for organisation
    * items [Address](#address)
  * BaseCurrency `string`: Default currency for organisation. See ISO 4217 Currency Codes
  * CountryCode `string`: Country code for organisation. See ISO 3166-2 Country Codes
  * CreatedDateUTC `string`: Timestamp when the organisation was created in Xero
  * DefaultPurchasesTax `string` (values: Inclusive, Exclusive, NoTax): The default for LineAmountTypes on purchase transactions
  * DefaultSalesTax `string` (values: Inclusive, Exclusive, NoTax): The default for LineAmountTypes on sales transactions
  * EndOfYearLockDate `string`: Shown if set
  * ExternalLinks `array`: Organisation profile links for popular services such as Facebook, Twitter, GooglePlus and LinkedIn. You can also add link to your website here. Shown if Organisation settings  is updated in Xero. See ExternalLinks below
    * items [ExternalLink](#externallink)
  * FinancialYearEndDay `string`: Calendar day e.g. 0-31
  * FinancialYearEndMonth `string`: Calendar Month e.g. 1-12
  * IsDemoCompany `boolean`: Boolean to describe if organisation is a demo company.
  * LegalName `string`: Organisation name shown on Reports
  * LineOfBusiness `string`: Description of business type as defined in Organisation settings
  * Name `string`: Display name of organisation shown in Xero
  * OrganisationEntityType `string` (values: COMPANY, CHARITY, CLUBSOCIETY, PARTNERSHIP, PRACTICE, PERSON, SOLETRADER, TRUST): Organisation Type
  * OrganisationStatus `string` (values: ACTIVE): Will be set to ACTIVE if you can connect to organisation via the Xero API
  * OrganisationType `string` (values: COMPANY, CHARITY, CLUBSOCIETY, PARTNERSHIP, PRACTICE, PERSON, SOLETRADER, TRUST): Organisation Type
  * PaymentTerms
    * items `object`
      * Bills `object`
        * Days `string`
        * Type `string` (values: DAYSAFTERBILLDATE, DAYSAFTERBILLMONTH, OFCURRENTMONTH, OFFOLLOWINGMONTH)
      * Sales `object`
        * Days `string`
        * Type `string` (values: DAYSAFTERBILLDATE, DAYSAFTERBILLMONTH, OFCURRENTMONTH, OFFOLLOWINGMONTH)
  * PaysTax `boolean`: Boolean to describe if organisation is registered with a local tax authority i.e. true, false
  * PeriodLockDate `string`: Shown if set
  * Phones `array`: Phones details for organisation
    * items [Phone](#phone)
  * RegistrationNumber `string`: Shows for New Zealand, Australian and UK organisations
  * SalesTaxBasis `string`: The accounting basis used for tax returns
  * SalesTaxPeriod `string`: The frequency with which tax returns are processed. See Sales Tax Period
  * ShortCode `string`: A unique identifier for the organisation. Used for deep linking into Xero.
  * TaxNumber `string`: Shown if set. Displays in the Xero UI as Tax File Number (AU), GST Number (NZ), VAT Number (UK) and Tax ID Number (US & Global).
  * Timezone `string`: Timezone specifications
  * Version `string` (values: AU, NZ, GLOBAL, UK, US, AUONRAMP, NZONRAMP, GLOBALONRAMP, UKONRAMP, USONRAMP): Version Types

### Overpayment
* Overpayment `object`
  * Allocations `array`: See Allocations
    * items [Allocation](#allocation)
  * Contact [ContactSummary](#contactsummary)
  * CurrencyCode `string`: Currency used for the overpayment
  * CurrencyRate `number`: The currency rate for a multicurrency overpayment. If no rate is specified, the XE.com day rate is used
  * Date `string`: The date the overpayment is created YYYY-MM-DD
  * HasAttachments `boolean`: boolean to indicate if a overpayment has an attachment
  * LineAmountTypes `string` (values: Inclusive, Exclusive, NoTax): Line amounts are exclusive of tax by default if you don’t specify this element
  * LineItems `array`: Overpayment Line Items
    * items [LineItem](#lineitem)
  * OverpaymentID `string`: Xero generated unique identifier
  * Payments `array`
    * items [PaymentSummary](#paymentsummary)
  * RemainingCredit `number`: The remaining credit balance on the overpayment
  * Status `string` (values: AUTHORISED, PAID, VOIDED): Overpayment Status
  * SubTotal `number`: The subtotal of the overpayment excluding taxes
  * Total `number`: The total of the overpayment (subtotal + total tax)
  * TotalTax `number`: The total tax on the overpayment
  * Type `string` (values: RECEIVE-OVERPAYMENT, SPEND-OVERPAYMENT): The Overpayment Type
  * UpdatedDateUTC `string`: UTC timestamp of last update to the overpayment

### OverpaymentSummary
* OverpaymentSummary `object`
  * AppliedAmount `number`: The total applied to the invoice
  * Date `string`: The date the overpayment was made YYYY-MM-DD
  * OverpaymentID `string`: Xero generated unique identifier
  * Total `number`: The total of the Overpayment (subtotal + total tax)

### Payment
* Payment `object`
  * Account `object`: The Account the payment was made from
    * AccountID `string`: Identifier for the account
    * Code `string`: Account Code
  * Amount `number`: The amount of the payment. Must be less than or equal to the outstanding amount owing on the invoice
  * CreditNote [CreditNoteSummary](#creditnotesummary)
  * CurrencyRate `number`: Exchange rate when payment is received. Only used for non base currency invoices and credit notes.
  * Date `string`: Date the payment is being made (YYYY-MM-DD)
  * Invoice [InvoiceSummary](#invoicesummary)
  * IsReconciled `boolean`: An optional parameter for the payment. A boolean indicating whether you would like the payment to be created as reconciled when using PUT, or whether a payment has been reconciled when using GET
  * Overpayment [OverpaymentSummary](#overpaymentsummary)
  * PaymentID `string`: The Xero identifier for an Payment
  * PaymentType `string` (values: ACCRECPAYMENT, ACCPAYPAYMENT, ARCREDITPAYMENT, APCREDITPAYMENT, AROVERPAYMENTPAYMENT, ARPREPAYMENTPAYMENT, APPREPAYMENTPAYMENT, APOVERPAYMENTPAYMENT): The Payment Type.
  * Prepayment [PrepaymentSummary](#prepaymentsummary)
  * Reference `string`: An optional description for the payment
  * Status `string` (values: AUTHORISED, DELETED): The status of the payment.
  * UpdatedDateUTC `string`: UTC timestamp of last update to the payment

### PaymentSummary
* PaymentSummary `object`
  * Amount `number`: The amount of the payment. Must be less than or equal to the outstanding amount owing on the invoice
  * Date `string`: Date the payment is being made (YYYY-MM-DD)
  * PaymentID `string`: The Xero identifier for an Payment

### PaymentTerms
* PaymentTerms `array`
  * items `object`
    * Bills `object`
      * Days `string`
      * Type `string` (values: DAYSAFTERBILLDATE, DAYSAFTERBILLMONTH, OFCURRENTMONTH, OFFOLLOWINGMONTH)
    * Sales `object`
      * Days `string`
      * Type `string` (values: DAYSAFTERBILLDATE, DAYSAFTERBILLMONTH, OFCURRENTMONTH, OFFOLLOWINGMONTH)

### Phone
* Phone `object`
  * PhoneAreaCode `string`
  * PhoneCountryCode `string`
  * PhoneNumber `string`
  * PhoneType `string` (values: DEFAULT, DDI, MOBILE, FAX): The phone type

### Phones
* Phones `array`
  * items [Phone](#phone)

### Prepayment
* Prepayment `object`
  * Allocations `array`
    * items [Allocation](#allocation)
  * Contact [ContactSummary](#contactsummary)
  * CurrencyCode `string`: Currency used for the prepayment
  * CurrencyRate `number`: The currency rate for a multicurrency prepayment. If no rate is specified, the XE.com day rate is used
  * Date `string`: The date the prepayment is created YYYY-MM-DD
  * HasAttachments `boolean`: boolean to indicate if a prepayment has an attachment
  * LineAmountTypes `string` (values: Inclusive, Exclusive, NoTax): Line amounts are exclusive of tax by default if you don’t specify this element
  * LineItems `array`
    * items [LineItem](#lineitem)
  * PrepaymentID `string`: Xero generated unique identifier
  * RemainingCredit `number`: The remaining credit balance on the prepayment
  * Status `string` (values: AUTHORISED, PAID, VOIDED): Prepayment Status Codes
  * SubTotal `number`: The subtotal of the prepayment excluding taxes
  * Total `number`: The total of the prepayment(subtotal + total tax)
  * TotalTax `number`: The total tax on the prepayment
  * Type `string` (values: RECEIVE-PREPAYMENT, SPEND-PREPAYMENT): Prepayment Types
  * UpdatedDateUTC `string`: UTC timestamp of last update to the prepayment

### PrepaymentSummary
* PrepaymentSummary `object`
  * AppliedAmount `number`: The total applied to the invoice
  * Date `string`: The date the prepayment is issued YYYY-MM-DD.
  * PrepaymentID `string`: Xero generated unique identifier
  * Total `number`: The total of the Prepayment (subtotal + total tax)

### PurchaseDetails
* PurchaseDetails `object`
  * AccountCode `string`: Default account code to be used for purchase of non-tracked items. Not applicable to the purchase details of tracked items
  * COGSAccountCode `string`: Cost of goods sold account. Only applicable to the purchase details of tracked items.
  * TaxType `string`: Used as an override if the default Tax Code for the selected AccountCode is not correct.
  * UnitPrice `number`: Unit Price of the item. By default UnitPrice is rounded to two decimal places. You can use 4 decimal places by adding the unitdp=4 querystring parameter to your request.

### PurchaseOrder
* PurchaseOrder `object`
  * AttentionTo `string`: The person that the delivery is going to
  * BrandingThemeID `string`: See BrandingThemes
  * Contact **required** [ContactSummary](#contactsummary)
  * CurrencyCode `string`: The currency that purchase order has been raised in
  * CurrencyRate `number`: The currency rate for a multicurrency purchase order. As no rate can be specified, the XE.com day rate is used.
  * Date `string`: Date purchase order was issued – YYYY-MM-DD. If the Date element is not specified then it will default to the current date based on the timezone setting of the organisation
  * DeliveryAddress `string`: The address the goods are to be delivered to
  * DeliveryDate `string`: Date the goods are to be delivered – YYYY-MM-DD
  * DeliveryInstructions `string`: A free text feild for instructions (500 characters max)
  * ExpectedArrivalDate `string`: The date the goods are expected to arrive.
  * HasAttachments `boolean`: boolean to indicate if a purchase order has an attachment
  * LineAmountTypes `string` (values: Inclusive, Exclusive, NoTax): Line amounts are exclusive of tax by default if you don’t specify this element
  * LineItems **required** `array`
    * items [LineItem](#lineitem)
  * PurchaseOrderID `string`: Xero generated unique identifier for purchase order
  * PurchaseOrderNumber `string`: Unique alpha numeric code identifying purchase order (when missing will auto-generate from your Organisation Invoice Settings)
  * Reference `string`: Additional reference number
  * SentToContact `boolean`: Boolean to set whether the purchase order should be marked as “sent”. This can be set only on purchase orders that have been approved or billed
  * Status `string` (values: DRAFT, SUBMITTED, AUTHORISED, BILLED, DELETED): Purchase Order Status Codes
  * SubTotal `number`: Total of purchase order excluding taxes
  * Telephone `string`: The phone number for the person accepting the delivery
  * Total `number`: Total of Purchase Order tax inclusive (i.e. SubTotal + TotalTax)
  * TotalDiscount `number`: Total of discounts applied on the purchase order line items
  * TotalTax `number`: Total tax on purchase order
  * UpdatedDateUTC `string`: Last modified date UTC format

### PurchasesTrackingCategories
* PurchasesTrackingCategories `array`
  * items [PurchasesTrackingCategory](#purchasestrackingcategory)

### PurchasesTrackingCategory
* PurchasesTrackingCategory `object`
  * Name `string`
  * Option `string`
  * TrackingCategoryID `string`

### Receipt
* Receipt `object`
  * Contact **required** [ContactSummary](#contactsummary)
  * Date **required** `string`: Date of receipt – YYYY-MM-DD
  * HasAttachments `boolean`: boolean to indicate if a receipt has an attachment
  * LineAmountTypes `string` (values: Inclusive, Exclusive, NoTax): Line amounts are exclusive of tax by default if you don’t specify this element
  * Lineitems **required** `array`
    * items [LineItem](#lineitem)
  * ReceiptID `string`: Xero generated unique identifier for receipt
  * ReceiptNumber `string`: Xero generated sequence number for receipt in current claim for a given user
  * Reference `string`: Additional reference number
  * Status `string` (values: DRAFT, SUBMITTED, AUTHORISED, DECLINED): Current status of receipt
  * SubTotal `number`: Total of receipt excluding taxes
  * Total `number`: Total of receipt tax inclusive (i.e. SubTotal + TotalTax)
  * TotalTax `number`: Total tax on receipt
  * UpdatedDateUTC `string`: Last modified date UTC format
  * Url `string`: URL link to a source document – shown as “Go to [appName]” in the Xero app
  * User **required** [User](#user)

### RepeatingInvoice
* RepeatingInvoice `object`
  * BrandingThemeID `string`: Branding Theme to be applied to the invoice
  * Contact [ContactSummary](#contactsummary)
  * CurrencyCode `string`: The currency that invoice has been raised in
  * HasAttachments `boolean`: boolean to indicate if an invoice has an attachment
  * LineAmountTypes `string` (values: Inclusive, Exclusive, NoTax): Line amounts are exclusive of tax by default if you don’t specify this element
  * LineItems `array`
    * items [LineItem](#lineitem)
  * Reference `string`: ACCREC only – additional reference number
  * RepeatingInvoiceID `string`: Xero generated unique identifier for repeating invoice template
  * Schedule [Schedule](#schedule)
  * Status `string` (values: DRAFT, AUTHORISED): One of the following : DRAFT or AUTHORISED
  * SubTotal `number`: Total of invoice excluding taxes
  * Total `number`: Total of Invoice tax inclusive (i.e. SubTotal + TotalTax)
  * TotalTax `number`: Total tax on invoice
  * Type `string` (values: ACCPAY, ACCREC): Invoice Types

### Report
* Report `object`
  * ReportDate `string`: The date of the report
  * ReportID `string`: Identifier of the report
  * ReportName `string`: Name of the report
  * ReportTitles `array`: The titles of the report
    * items `string`
  * ReportType `string`: Type of report
  * Rows `array`: The rows of the report that contain the data (including header rows)
    * items `object`
      * Cells `array`
        * items `object`
          * Value `string`: Header row labels
      * RowType `string` (values: Header, Section, Row, SummaryRow): The type of row
      * Rows `array`: The rows of the report (including header rows)
        * items `object`
          * Cells `array`: The cells that contain the data of the report
            * items `object`
              * Attributes `array`: AccountID that the Value relates to
                * items `object`
                  * Id `string` (values: account): Always 'account'
                  * Value `string`: The AccountID that the Value relates to
              * Value `string`: The data displayed in the report
          * RowType `string` (values: Row, SummaryRow): The type of row
      * Title `string`: The title of the row
  * UpdatedDateUTC `string`: The date and time the report was generated

### ReportSummary
* ReportSummary `object`
  * ReportDate `string`: The date of the report
  * ReportID `string`: Identifier of the report
  * ReportName `string`: Name of the report
  * ReportType `string`: Type of report
  * UpdatedDateUTC `string`: The date and time the report was generated

### SalesDetails
* SalesDetails `object`
  * AccountCode `string`: Default account code to be used for sale.
  * TaxType `string`: Used as an override if the default Tax Code for the selected AccountCode is not correct .
  * UnitPrice `number`: Unit Price of the item. By default UnitPrice is rounded to two decimal places. You can use 4 decimal places by adding the unitdp=4 querystring parameter to your request.

### SalesTrackingCategories
* SalesTrackingCategories `array`
  * items [SalesTrackingCategory](#salestrackingcategory)

### SalesTrackingCategory
* SalesTrackingCategory `object`
  * Name `string`
  * Option `string`
  * TrackingCategoryID `string`

### Schedule
* Schedule `object`
  * DueDate `integer`: Integer used with due date type e.g 20 (of following month), 31 (of current month)
  * DueDateType `string` (values: DAYSAFTERBILLDATE, DAYSAFTERBILLMONTH, OFCURRENTMONTH, OFFOLLOWINGMONTH): Used with due date to describe when the invoice is due
  * EndDate `string`: Invoice end date – only returned if the template has an end date set
  * NextScheduledDate `string`: The calendar date of the next invoice in the schedule to be generated
  * Period `integer`: Integer used with the unit e.g. 1 (every 1 week), 2 (every 2 months)
  * StartDate `string`: Date the first invoice of the current version of the repeating schedule was generated (changes when repeating invoice is edited)
  * Unit `string`: One of the following : WEEKLY or MONTHLY

### TaxComponent
* TaxComponent `object`
  * IsCompound `boolean`: Boolean to describe if Tax rate is compounded.Learn more
  * IsNonRecoverable `boolean`: Determines if this tax component can be recovered
  * Name `string`: Name of Tax Component
  * Rate `number`: Tax Rate (up to 4dp)

### TaxRate
* TaxRate `object`
  * CanApplyToAssets `boolean`: Boolean to describe if tax rate can be used for asset accounts 
  * CanApplyToEquity `boolean`: Boolean to describe if tax rate can be used for equity accounts 
  * CanApplyToExpenses `boolean`: Boolean to describe if tax rate can be used for expense accounts 
  * CanApplyToLiabilities `boolean`: Boolean to describe if tax rate can be used for liability accounts
  * CanApplyToRevenue `boolean`: Boolean to describe if tax rate can be used for revenue accounts
  * DisplayTaxRate `number`: Tax Rate (decimal to 4dp) e.g 12.5000
  * EffectiveRate `number`: Effective Tax Rate (decimal to 4dp) e.g 12.5000
  * Name **required** `string`: Name of tax rate
  * ReportTaxType `string`: See ReportTaxTypes
  * Status `string` (values: ACTIVE, DELETED, ARCHIVED): Status Codes
  * TaxComponents **required** `array`
    * items [TaxComponent](#taxcomponent)
  * TaxType `string`: Tax Types – can only be used as the identifier on update calls

### TaxReport
* TaxReport `object`
  * Attributes `object`
    * ReportAttribute `array`: The attributes of the report (AU BAS Report only)
      * items `object`
        * Description `string`: The description of the field
        * Name `string`: The identifier for the field
        * Value `string`: The value of the field
  * Fields `object`
    * ReportField `array`: The report fields that contain useful data
      * items `object`
        * Description `string`: The description of the field
        * FieldID `string`: The identifier for the field
        * Value `string`: The value of the field
  * ReportDate `string`: The date of the report
  * ReportID `string`: Identifier of the report
  * ReportName `string`: Name of the report
  * ReportType `string`: Type of report
  * UpdatedDateUTC `string`: The date and time the report was generated

### ToBankAccount
* ToBankAccount `object`
  * AccountID `string`: Account identifier
  * Code `string`: Bank account code
  * Name `string`: Bank account name

### Tracking
* Tracking `object`
  * TrackingCategory `array`
    * items `object`
      * Name `string`: The name of the tracking category
      * Option `string`: The name of the tracking option
      * TrackingCategoryID `string`: The identifier for the tracking category

### TrackingCategory
* TrackingCategory `object`
  * Name `string`: The name of the tracking category e.g. Department, Region (max length = 100)
  * Options `array`
    * items [TrackingOption](#trackingoption)
  * Status `string` (values: ACTIVE, ARCHIVED): The status of a tracking category
  * TrackingCategoryID `string`: The Xero identifier for a tracking categorye.g. 297c2dc5-cc47-4afd-8ec8-74990b8761e9

### TrackingOption
* TrackingOption `object`
  * Name `string`: The name of the tracking option e.g. Marketing, East (max length = 50)
  * Status `string` (values: ACTIVE, ARCHIVED): The status of a tracking option
  * TrackingOptionID `string`: The Xero identifier for a tracking optione.g. ae777a87-5ef3-4fa0-a4f0-d10e1f13073a

### User
* User `object`
  * EmailAddress `string`: Email address of user
  * FirstName `string`: First name of user
  * IsSubscriber `boolean`: Boolean to indicate if user is the subscriber
  * LastName `string`: Last name of user
  * OrganisationRole `string` (values: READONLY, INVOICEONLY, STANDARD, FINANCIALADVISER, MANAGEDCLIENT, CASHBOOKCLIENT): User role
  * UpdatedDateUTC `string`: Timestamp of last change to user
  * UserID `string`: Xero identifier


