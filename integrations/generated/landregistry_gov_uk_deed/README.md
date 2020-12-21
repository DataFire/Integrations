# @datafire/landregistry_gov_uk_deed

Client library for Deed API

## Installation and Usage
```bash
npm install --save @datafire/landregistry_gov_uk_deed
```
```js
let landregistry_gov_uk_deed = require('@datafire/landregistry_gov_uk_deed').create();

.then(data => {
  console.log(data);
});
```

## Description

Land Registry Deed API

## Actions

### addDeed
The post Deed endpoint creates a new deed based on the JSON provided.
 The reponse will return a URL that can retrieve the created deed. 
 > REQUIRED: Land Registry system requests Conveyancer to confirm that the Borrowers identity has been established in accordance with Section 111 of the Network Access Agreement.


```js
landregistry_gov_uk_deed.addDeed({
  "body": {
    "title_number": "",
    "borrowers": [],
    "md_ref": "",
    "identity_checked": "",
    "property_address": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** [Deed_Application](#deed_application)

#### Output
* output `string`

### deed.deed_reference.get
The Deed endpoint returns details of a specific deed based on the unique deed reference.
The response includes the Title Number, Property information, Borrower(s) information and deed information.



```js
landregistry_gov_uk_deed.deed.deed_reference.get({
  "deed_reference": ""
}, context)
```

#### Input
* input `object`
  * deed_reference **required** `string`: Unique reference of the deed.

#### Output
* output [Operative_Deed](#operative_deed)



## Definitions

### AdditionalProvisions
* AdditionalProvisions `array`
  * items `object`
    * additional_provision_code `string`
    * description `string`

### Borrower
* Borrower `object`
  * forename **required** `string`
  * id **required** `string`
  * middle_name `string`
  * surname **required** `string`
  * token **required** `string`

### Borrowers
* Borrowers `array`
  * items [PrivateIndividualName](#privateindividualname)

### ChargeClause
* ChargeClause `object`
  * cre_code `string`
  * description `string`

### Deed_Application
* Deed_Application `object`
  * borrowers **required** [Borrowers](#borrowers)
  * identity_checked **required** `string`
  * md_ref **required** `string`
  * property_address **required** `string`: The address of property that the deed relates. This should be supplied in a comma separated format e.g. 30 wakefield rd, plymouth, PL6 3WA
  * title_number **required** `string`

### Error
* Error `object`
  * code `integer`
  * message `string`

### Lender
* Lender `object`
  * address `string`
  * description `string`
  * name `string`

### OpBorrowers
* OpBorrowers `array`
  * items [Borrower](#borrower)

### Operative_Deed
* Operative_Deed `object`
  * deed `object`: Unique deed, consisting of property, borrower and charge information as well as clauses for the deed.
    * additional_provisions [AdditionalProvisions](#additionalprovisions)
    * borrowers [OpBorrowers](#opborrowers)
    * charge_clause [ChargeClause](#chargeclause)
    * deed_status `string`: Current state of the deed
    * effective_clause `string`: Text to display the make effective clause
    * lender [Lender](#lender)
    * md_ref `string`: Land Registry assigned number for a Mortgage Deed (MD). If you wish to use an existing MD reference please prefix it with e- to comply with our system (eg e-MD12345)
    * property_address `string`: The address of property that the deed relates. This should be supplied in a comma separated format e.g. 30 wakefield rd, plymouth, PL6 3WA
    * title_number `string`: Unique Land Registry identifier for the registered estate.

### PrivateIndividualName
* PrivateIndividualName `object`
  * address **required** `string`
  * dob **required** `string`
  * forename **required** `string`
  * gender `string` (values: Male, Female, Not Specified)
  * middle_name `string`
  * phone_number **required** `string`
  * surname **required** `string`


