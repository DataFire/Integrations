# @datafire/letmc_customer

Client library for LetMC Api V2, Customer Login

## Installation and Usage
```bash
npm install --save @datafire/letmc_customer
```
```js
let letmc_customer = require('@datafire/letmc_customer').create({
  apiKey: "",
  username: "",
  password: ""
});

.then(data => {
  console.log(data);
});
```

## Description



## Actions

### v2.customer.shortName.branch.branches.get
All branches defined for a company


```js
letmc_customer.v2.customer.shortName.branch.branches.get({
  "shortName": "",
  "offset": 0,
  "count": 0
}, context)
```

#### Input
* input `object`
  * shortName **required** `string`: The unique client short-name
  * offset **required** `integer`: The index of the first item to return
  * count **required** `integer`: The maximum number of items to return (up to 1000 per request)

#### Output
* output [BranchModelResults](#branchmodelresults)

### v2.customer.shortName.branch.branches.branchID.get
Get a specific branch given its unique Object ID (OID)


```js
letmc_customer.v2.customer.shortName.branch.branches.branchID.get({
  "shortName": "",
  "branchID": ""
}, context)
```

#### Input
* input `object`
  * shortName **required** `string`: The unique client short-name
  * branchID **required** `string`: The unique ID of the Branch

#### Output
* output [BranchModel](#branchmodel)

### LandlordController_GetAccounts
Get the accounting details for the landlord.


```js
letmc_customer.LandlordController_GetAccounts({
  "shortName": "",
  "token": ""
}, context)
```

#### Input
* input `object`
  * shortName **required** `string`: The unique client short-name
  * token **required** `string`: The login token returned from the /session POST call

#### Output
* output [LandlordAccountingModel](#landlordaccountingmodel)

### LandlordController_GetDocument
Download a Document


```js
letmc_customer.LandlordController_GetDocument({
  "shortName": "",
  "token": "",
  "ID": ""
}, context)
```

#### Input
* input `object`
  * shortName **required** `string`: The unique client short-name
  * token **required** `string`: The login token returned from the /session POST call
  * ID **required** `string`: The Document ID

#### Output
* output [Object](#object)

### LandlordController_GetInvetoryReport
Generate a Inventory PDF for a tenancy


```js
letmc_customer.LandlordController_GetInvetoryReport({
  "shortName": "",
  "token": "",
  "tenancyID": ""
}, context)
```

#### Input
* input `object`
  * shortName **required** `string`: The unique client short-name
  * token **required** `string`: The login token returned from the /session POST call
  * tenancyID **required** `string`: The Tenancy ID

#### Output
* output [Object](#object)

### LandlordController_GetInvoice
Get an invoice pdf belonging to the landlord.


```js
letmc_customer.LandlordController_GetInvoice({
  "shortName": "",
  "token": "",
  "invoiceID": ""
}, context)
```

#### Input
* input `object`
  * shortName **required** `string`: The unique client short-name
  * token **required** `string`: The login token returned from the /session POST call
  * invoiceID **required** `string`: The invoice ID to load.

#### Output
* output [Object](#object)

### LandlordController_GetLandlordCrmEntries
Retrieve landlord's CRM ID


```js
letmc_customer.LandlordController_GetLandlordCrmEntries({
  "shortName": "",
  "token": ""
}, context)
```

#### Input
* input `object`
  * shortName **required** `string`: The unique client short-name
  * token **required** `string`: The login token returned from the /session POST call

#### Output
* output `array`
  * items [LandlordCrmEntry](#landlordcrmentry)

### LandlordController_GetMaintenanceJobs
Get Active maintenance jobs.


```js
letmc_customer.LandlordController_GetMaintenanceJobs({
  "shortName": "",
  "token": ""
}, context)
```

#### Input
* input `object`
  * shortName **required** `string`: The unique client short-name
  * token **required** `string`: The login token returned from the /session POST call

#### Output
* output [LandlordMaintenanceModel](#landlordmaintenancemodel)

### LandlordController_GetProfitLossReport
Generate a Profit and Loss Report


```js
letmc_customer.LandlordController_GetProfitLossReport({
  "shortName": "",
  "token": ""
}, context)
```

#### Input
* input `object`
  * shortName **required** `string`: The unique client short-name
  * token **required** `string`: The login token returned from the /session POST call

#### Output
* output [LandlordProfitLossModel](#landlordprofitlossmodel)

### LandlordController_GetRentArrears
Rent Arrears


```js
letmc_customer.LandlordController_GetRentArrears({
  "shortName": "",
  "token": ""
}, context)
```

#### Input
* input `object`
  * shortName **required** `string`: The unique client short-name
  * token **required** `string`: The login token returned from the /session POST call

#### Output
* output [LandlordRentArrearsModel](#landlordrentarrearsmodel)

### LandlordController_GetSASReport
Generate a Self Assessment Tax Report


```js
letmc_customer.LandlordController_GetSASReport({
  "shortName": "",
  "token": "",
  "yearEnd": 0
}, context)
```

#### Input
* input `object`
  * shortName **required** `string`: The unique client short-name
  * token **required** `string`: The login token returned from the /session POST call
  * yearEnd **required** `integer`: The Tax Year End.

#### Output
* output [Object](#object)

### LandlordController_GetSettings
Get contact details of all linked landlords.


```js
letmc_customer.LandlordController_GetSettings({
  "shortName": "",
  "token": ""
}, context)
```

#### Input
* input `object`
  * shortName **required** `string`: The unique client short-name
  * token **required** `string`: The login token returned from the /session POST call

#### Output
* output [LandlordSettingsModel](#landlordsettingsmodel)

### LandlordController_GetSummaryDetails
Get the summary details for the landlord.


```js
letmc_customer.LandlordController_GetSummaryDetails({
  "shortName": "",
  "token": ""
}, context)
```

#### Input
* input `object`
  * shortName **required** `string`: The unique client short-name
  * token **required** `string`: The login token returned from the /session POST call

#### Output
* output [LandlordSummaryModel](#landlordsummarymodel)

### LandlordController_GetTenancy
Get tenancy details.


```js
letmc_customer.LandlordController_GetTenancy({
  "shortName": "",
  "token": "",
  "tenancyID": ""
}, context)
```

#### Input
* input `object`
  * shortName **required** `string`: The unique client short-name
  * token **required** `string`: The login token returned from the /session POST call
  * tenancyID **required** `string`: The Tenancy ID

#### Output
* output [LandlordTenancyModel](#landlordtenancymodel)

### LandlordController_GetTenancyAgreementReport
Generate a Tenancy Agreement Copy (PDF)


```js
letmc_customer.LandlordController_GetTenancyAgreementReport({
  "shortName": "",
  "token": "",
  "tenancyID": ""
}, context)
```

#### Input
* input `object`
  * shortName **required** `string`: The unique client short-name
  * token **required** `string`: The login token returned from the /session POST call
  * tenancyID **required** `string`: The Tenancy ID

#### Output
* output [Object](#object)

### PhotoController_GetPhotoDownload
Downloads the photo of a property given the photo ID.


```js
letmc_customer.PhotoController_GetPhotoDownload({
  "shortName": "",
  "token": "",
  "photoID": ""
}, context)
```

#### Input
* input `object`
  * shortName **required** `string`: The unique client short-name
  * token **required** `string`: The login token returned from the /session POST call
  * photoID **required** `string`: The unique ID of the photo on the property
  * width `integer`: An optional parameter specifying the image width
  * height `integer`: An optional parameter specifying the image height

#### Output
* output [Object](#object)

### PropertyController_GetPropertiesPhotos
A collection showing all the photos linked to a specific block, property or room


```js
letmc_customer.PropertyController_GetPropertiesPhotos({
  "shortName": "",
  "token": "",
  "propertyID": "",
  "offset": 0,
  "count": 0
}, context)
```

#### Input
* input `object`
  * shortName **required** `string`: The unique client short-name
  * token **required** `string`: The login token returned from the /session POST call
  * propertyID **required** `string`: The unique ID of the Property
  * offset **required** `integer`: The index of the first item to return
  * count **required** `integer`: The maximum number of items to return (up to 1000 per request)

#### Output
* output [LandlordPhotoModelResults](#landlordphotomodelresults)

### SessionController_Logout
Logout a customer previously logged in via the Login endpoint.


```js
letmc_customer.SessionController_Logout({
  "shortName": "",
  "token": ""
}, context)
```

#### Input
* input `object`
  * shortName **required** `string`: The unique client short-name
  * token **required** `string`: The login token returned from the /session POST call

#### Output
*Output schema unknown*

### SessionController_GetSessionInfo
Gets information about the currently logged on customer.


```js
letmc_customer.SessionController_GetSessionInfo({
  "shortName": "",
  "token": ""
}, context)
```

#### Input
* input `object`
  * shortName **required** `string`: The unique client short-name
  * token **required** `string`: The login token returned from the /session POST call

#### Output
* output `string`

### SessionController_Login
Login as a customer given their username and password.


```js
letmc_customer.SessionController_Login({
  "shortName": "",
  "username": "",
  "password": ""
}, context)
```

#### Input
* input `object`
  * shortName **required** `string`: The unique client short-name
  * username **required** `string`: The user's username.
  * password **required** `string`: The user's password.

#### Output
* output `string`

### SessionController_CreateLandlordLogin
Send a request to the in-tray to create a landlord login.


```js
letmc_customer.SessionController_CreateLandlordLogin({
  "shortName": "",
  "email": "",
  "title": "",
  "forename": "",
  "surname": "",
  "propertyAdresss": "",
  "contactDetails": ""
}, context)
```

#### Input
* input `object`
  * shortName **required** `string`: The unique client short-name
  * email **required** `string`: The email address of the landlord
  * title **required** `string`: The title of the landlord
  * forename **required** `string`: The forename of the landlord
  * surname **required** `string`: The surname of the landlord
  * propertyAdresss **required** `string`: Address of the property linked to the landlord
  * contactDetails **required** `string`: Contact details of the landlord
  * branchID `string`: (Optional) The branch ID linked to the login. This will determine which in tray the request display in

#### Output
*Output schema unknown*

### SessionController_ChangePassword
Change the password of a customer given their existing and new password.


```js
letmc_customer.SessionController_ChangePassword({
  "shortName": "",
  "token": "",
  "oldPassword": "",
  "newPassword": ""
}, context)
```

#### Input
* input `object`
  * shortName **required** `string`: The unique client short-name
  * token **required** `string`: The login token returned from the /session POST call
  * oldPassword **required** `string`: The customer's existing password.
  * newPassword **required** `string`: The customer's new password.

#### Output
*Output schema unknown*

### SessionController_ResetPassword
Reset the customer's password. An email will be sent out to reset.


```js
letmc_customer.SessionController_ResetPassword({
  "shortName": "",
  "email": ""
}, context)
```

#### Input
* input `object`
  * shortName **required** `string`: The unique client short-name
  * email **required** `string`: The login Email Address.

#### Output
*Output schema unknown*



## Definitions

### BranchModel
* BranchModel `object`: Defines a single branch of a client.
  * Address1 `string`: Branch address line 1.
  * Address2 `string`: Branch address line 2.
  * Address3 `string`: Branch address line 3.
  * Address4 `string`: Branch address line 4.
  * CompanyName `string`: The relevant company name, if not the one specified on the branch then the one on company.
  * County `string`: County
  * EMailAddress `string`: Branch email address.
  * ETag `string`: A unique identifier defining the object and change revision.
  * FaxPhone `string`: Branch fax phone number.
  * LandPhone `string`: Branch land phone number.
  * Name `string`: The branch name.
  * OID `string`: The unique Object ID (OID).
  * Postcode `string`: Branch address postcode.
  * WebAddress `string`: Branch web address.

### BranchModelResults
* BranchModelResults `object`: Holds results from a paged query returning BranchModel values
  * Count `integer`: The total number of results available for all pages
  * Data `array`: The resulting data returned from the paged query range
    * items [BranchModel](#branchmodel)

### KeyValuePair[String,String]
* KeyValuePair[String,String] `object`
  * key `string`
  * value `string`

### LandlordAccountingEntryModel
* LandlordAccountingEntryModel `object`: Landlord Accounting - Finance Entry
  * Amount `number`: Amount
  * Date `string`: Payment Date
  * Description `string`: Description.
  * TransactionNumber `integer`: Transaction Number

### LandlordAccountingInvoiceModel
* LandlordAccountingInvoiceModel `object`: Invoices
  * Date `string`: Payment Date
  * InvoiceID `string`: Transaction Number
  * IsMaintenanceInvoice `boolean`: Does this invoice contain contractor payments?

### LandlordAccountingModel
* LandlordAccountingModel `object`: Landlord Accounting
  * AccountBalance `number`: Account Balance
  * LastPayment `string`: Last Payment Made
  * PaymentHistory `array`: Payment History
    * items [LandlordAccountingEntryModel](#landlordaccountingentrymodel)
  * Statements `array`: Statements
    * items [LandlordAccountingInvoiceModel](#landlordaccountinginvoicemodel)

### LandlordChaseNoteModel
* LandlordChaseNoteModel `object`: Landlord Arrears Chase Note.
  * Date `string`: Created Date
  * Note `string`: Note.
  * NoteType `string`: Note Type
  * TenantID `string`: Tenant

### LandlordCrmEntry
* LandlordCrmEntry `object`: Class for Landlord CRM Entries
  * BranchID `string`
  * GlobalReference `string`
  * Name `string`
  * OID `string`

### LandlordDetailsModel
* LandlordDetailsModel `object`: Landlord Details
  * Address `string`: Address
  * Email `string`: Email
  * GlobalReference `string`: User Friendly ID
  * ID `string`: ID
  * Mobile `string`: Mobile
  * Name `string`: Name
  * Phone `string`: Phone

### LandlordLettingsInspectionModel
* LandlordLettingsInspectionModel `object`: Lettings Inspection
  * InspectionDate `string`: InspectionDate
  * Notes `string`: Notes

### LandlordMaintenanceCertificateModel
* LandlordMaintenanceCertificateModel `object`: Maintenance Certificate
  * Due `string`: Due
  * Files `array`: Files
    * items [LettingsLandlordDocument](#lettingslandlorddocument)
  * Status `string`: Status.
  * Type `string`: Type

### LandlordMaintenanceJobModel
* LandlordMaintenanceJobModel `object`: Maintenance Job
  * AssignedTo `string`: AssignedTo
  * Description `string`: Description
  * Property `string`: Property
  * Reported `string`: Reported
  * Status `string`: Status

### LandlordMaintenanceModel
* LandlordMaintenanceModel `object`: Landlord Maintenance
  * Jobs `array`: Maintenance Jobs.
    * items [LandlordMaintenanceJobModel](#landlordmaintenancejobmodel)

### LandlordMaintenancePreferenceModel
* LandlordMaintenancePreferenceModel `object`: Maintenance Preference
  * Name `string`: Name
  * Notes `string`: Notes.
  * Type `string`: Type

### LandlordPhotoModel
* LandlordPhotoModel `object`: Stores a photo related to a property structure.
  * ETag `string`: A unique identifier defining the object and change revision.
  * FileName `string`: The file name.
  * OID `string`: The unique Object ID (OID).
  * PhotoType `string` (values: Photo, Map, FloorPlan, SiteMap, AerialPhoto): The photo type.

### LandlordPhotoModelResults
* LandlordPhotoModelResults `object`: Holds results from a paged query returning LandlordPhotoModel values
  * Count `integer`: The total number of results available for all pages
  * Data `array`: The resulting data returned from the paged query range
    * items [LandlordPhotoModel](#landlordphotomodel)

### LandlordProfitLossModel
* LandlordProfitLossModel `object`: Class to represent proffit loss report.
  * DirectCosts [LandlordProfitLossSectionModel](#landlordprofitlosssectionmodel)
  * GrossProfitLoss [LandlordProfitLossSectionModel](#landlordprofitlosssectionmodel)
  * Income [LandlordProfitLossSectionModel](#landlordprofitlosssectionmodel)

### LandlordProfitLossRowModel
* LandlordProfitLossRowModel `object`: Class for a group of entries.
  * MonthTotals `array`: Month Totals
    * items [KeyValuePair[String,String]](#keyvaluepair[string,string])
  * NominalCode `string`: Nominal Code
  * Title `string`: Title of the values.
  * Total `string`: Total for all months.

### LandlordProfitLossSectionModel
* LandlordProfitLossSectionModel `object`: Class for a group of entries.
  * Rows `array`: Rows.
    * items [LandlordProfitLossRowModel](#landlordprofitlossrowmodel)

### LandlordRentArrearsModel
* LandlordRentArrearsModel `object`: Landlord Rent Arrears.
  * ChaseNotes `array`: Chase Notes
    * items [LandlordChaseNoteModel](#landlordchasenotemodel)
  * RentCollected `number`: Rent Collected
  * RentOutstanding `array`: Outstanding Rent
    * items [LandlordRentOustandingItem](#landlordrentoustandingitem)
  * TotalRentArrears `number`: Rent Arrears

### LandlordRentOustandingItem
* LandlordRentOustandingItem `object`: Outstanding Rent
  * DebtDays `integer`: Days since the tenant went into arrears
  * OutstandingRent `number`: Outstanding Rent
  * Property `string`: Property
  * Tenant `string`: Tenant
  * TenantID `string`: TenantID

### LandlordSettingsModel
* LandlordSettingsModel `object`: Landlord Settings
  * LinkedAccounts `array`: Linked Accounts
    * items [LandlordDetailsModel](#landlorddetailsmodel)

### LandlordSummaryModel
* LandlordSummaryModel `object`: Landlord Summary - Landing Page.
  * AccountBalance `number`: Account Balance
  * LastPayment `string`: Last Payment Made
  * Tenancies `array`: Tenancies
    * items [LandlordSummaryTenancyModel](#landlordsummarytenancymodel)
  * TotalRentArrears `number`: Rent Arrears

### LandlordSummaryTenancyModel
* LandlordSummaryTenancyModel `object`: Landlord Summary - Landing Page.
  * Bond `number`: Bomd
  * Description `string`: Description.
  * GlobalReference `string`: User Friendly ID
  * ID `string`: ID
  * MaintenanceJobs `integer`: Maintenance Jobs.
  * ManagedRent `boolean`: State of the tenancy
  * PropertyAddress `string`: Display Property Address
  * Rent `string`: Rent
  * RentArrears `number`: Rent Arrears
  * RentCollected `number`: Rent Arrears
  * TenancyProperty `string`: Tenancy Property
  * TenancyState `string`: State of the tenancy

### LandlordTenancyModel
* LandlordTenancyModel `object`: Landlord Tenancy Model.
  * ActualEndDate `string`: Actual End Date
  * Beds `integer`: Beds
  * Bond `number`: Bond
  * Certificates `array`: Maintenance Certificates.
    * items [LandlordMaintenanceCertificateModel](#landlordmaintenancecertificatemodel)
  * FixedDate `string`: Fixed Date
  * GlobalReference `string`: User Friendly ID
  * ID `string`: ID
  * Inspections `array`: Inspections
    * items [LandlordLettingsInspectionModel](#landlordlettingsinspectionmodel)
  * ManagedRent `boolean`: State of the tenancy
  * Preferences `array`: Maintenance Preferences.
    * items [LandlordMaintenancePreferenceModel](#landlordmaintenancepreferencemodel)
  * PreviousRentAmount `number`: Previous Rent Amount
  * PropertyAddress `string`: Display Property Address
  * Rent `string`: Rent
  * RentAmount `number`: Rent Amount
  * StartDate `string`: Start Date
  * TenancyProperty `string`: Tenancy Property
  * TenancyState `string`: State of the tenancy
  * Tenants `array`: Tenants
    * items `string`

### LettingsLandlordDocument
* LettingsLandlordDocument `object`: Document details.
  * FileName `string`: File Name
  * FileSize `integer`: File Size Bytes
  * ID `string`: ID
  * MIMEType `string`: MIME Type

### Object
* Object `object`


