# @datafire/letmc_reporting

Client library for LetMC Api V3, reporting

## Installation and Usage
```bash
npm install --save @datafire/letmc_reporting
```
```js
let letmc_reporting = require('@datafire/letmc_reporting').create({
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

### ReportingController_MortgagesByCreatedDate
Return a collection of mortgages by created date from a specific date


```js
letmc_reporting.ReportingController_MortgagesByCreatedDate({
  "shortName": "",
  "branchID": "",
  "startDate": "",
  "offset": 0,
  "count": 0
}, context)
```

#### Input
* input `object`
  * shortName **required** `string`: The unique client short-name
  * branchID **required** `string`: The unique ID of the Branch
  * startDate **required** `string`: The date to search from.
  * offset **required** `integer`: The index of the first item to return
  * count **required** `integer`: The maximum number of items to return (up to 1000 per request)

#### Output
* output [ReportingPropertyMortgageModelResults](#reportingpropertymortgagemodelresults)

### ReportingController_MortgagesByUpdatedDate
Return a collection of all mortgages updated from a specific date


```js
letmc_reporting.ReportingController_MortgagesByUpdatedDate({
  "shortName": "",
  "branchID": "",
  "startDate": "",
  "offset": 0,
  "count": 0
}, context)
```

#### Input
* input `object`
  * shortName **required** `string`: The unique client short-name
  * branchID **required** `string`: The unique ID of the Branch
  * startDate **required** `string`: The date to search from.
  * offset **required** `integer`: The index of the first item to return
  * count **required** `integer`: The maximum number of items to return (up to 1000 per request)

#### Output
* output [ReportingPropertyMortgageModelResults](#reportingpropertymortgagemodelresults)

### ReportingController_RepossessionsByCreatedDate
Return a collection of repossessions by created date from a specific date


```js
letmc_reporting.ReportingController_RepossessionsByCreatedDate({
  "shortName": "",
  "branchID": "",
  "startDate": "",
  "offset": 0,
  "count": 0
}, context)
```

#### Input
* input `object`
  * shortName **required** `string`: The unique client short-name
  * branchID **required** `string`: The unique ID of the Branch
  * startDate **required** `string`: The date to search from.
  * offset **required** `integer`: The index of the first item to return
  * count **required** `integer`: The maximum number of items to return (up to 1000 per request)

#### Output
* output [ReportingReceivershipCaseModelResults](#reportingreceivershipcasemodelresults)

### ReportingController_RepossessionsByUpdatedDate
Return a collection of all reposessions updated from a specific date


```js
letmc_reporting.ReportingController_RepossessionsByUpdatedDate({
  "shortName": "",
  "branchID": "",
  "startDate": "",
  "offset": 0,
  "count": 0
}, context)
```

#### Input
* input `object`
  * shortName **required** `string`: The unique client short-name
  * branchID **required** `string`: The unique ID of the Branch
  * startDate **required** `string`: The date to search from.
  * offset **required** `integer`: The index of the first item to return
  * count **required** `integer`: The maximum number of items to return (up to 1000 per request)

#### Output
* output [ReportingReceivershipCaseModelResults](#reportingreceivershipcasemodelresults)



## Definitions

### ReportingPropertyMortgageModel
* ReportingPropertyMortgageModel `object`: Represents an receivership case.
  * Amount `number`: Amount.
  * BorrowersAccountName `string`: Borrowers Account Name
  * CreatedAt `string`: The created at date.
  * DisplayType `string`: Friendly type name.
  * ExtraNotes `string`: Extra notes.
  * From `string`: The from date.
  * IntrestRate `number`: The mortgages intrest rate.
  * MarketValue `number`: The property market value.
  * MonthlyPayment `number`: The mortgages monthly payment.
  * MortgageAccountNumber `string`: Mortgage account number.
  * MortgageProvider `string`: Mortgages provider.
  * PropertyOwnableID `string`: The unique Property Ownable identifier.
  * SalesInstructionID `string`: The unique Sales Instruction identifier.
  * Type `string` (values: InterestOnlyFixedRate, InterestOnlySVR, InterestOnlyDiscountMortgage, InterestOnlyTracker, InterestOnlyCapped, InterestOnlyOffset, CapitalRepaymentFixedRate, CapitalRepaymentSVR, CapitalRepaymentDiscountMortgage, CapitalRepaymentTracker, CapitalRepaymentCapped, CapitalRepaymentOffset): The mortgages type.
  * ValuationDate `string`: The mortgages valuation date.

### ReportingPropertyMortgageModelResults
* ReportingPropertyMortgageModelResults `object`: Results model to store receivership case results.
  * Count `integer`: The total number of results available for all pages
  * Data `array`: The resulting data returned from the paged query range
    * items [ReportingPropertyMortgageModel](#reportingpropertymortgagemodel)

### ReportingReceivershipCaseDetailsModel
* ReportingReceivershipCaseDetailsModel `object`: Helper Model - Case Details
  * AppointmentDate `string`: Appointment Date
  * ClosedDate `string`: Closed Date
  * ClosedReason `string` (values: PropertySold, HandedBackToBorrower, AppointmentIssues, LenderSeekingPossession, Other): Closed Reason
  * CreatedAt `string`: Created At
  * DisplayFirstReceiver `string`: Display First Receiver (ApplicationStaff)
  * DisplayFreeholdBlockManager `string`: Display Freehold Block Manager
  * DisplaySecondReceiver `string`: Display Second Receiver (ApplicationStaff)
  * DisplayValidatingSolicitor `string`: Display Validating Solicitor
  * ExtraNotes `string`: Extra Notes
  * FirstReceiverID `string`: First Receiver ID (ApplicationStaff)
  * FreeholdBlockManagerID `string`: Freehold Block Manager ID
  * PassedToLenderDate `string`: Passed to Lender Date
  * PropertyOwnableID `string`: The unique Property Ownable identifier
  * SecondReceiverID `string`: Second Receiver ID (ApplicationStaff)
  * Status `string` (values: Opened, Litigation, Closed): Status
  * Tenure `string` (values: Freehold, Leasehold, Commonhold, ShareOfFreehold, FlyingFreehold, ShareTransfer, Unknown): Tenure
  * ValidatingSolicitorID `string`: The unique Validating Solicitor identifier
  * ValuationDate `string`: Valuation Date

### ReportingReceivershipCaseModel
* ReportingReceivershipCaseModel `object`: Represents an receivership case.
  * CaseDetails [ReportingReceivershipCaseDetailsModel](#reportingreceivershipcasedetailsmodel)
  * ExitStrategy `array`: Exit Strategy
    * items [ReportingReceivershipExitStrategyModel](#reportingreceivershipexitstrategymodel)
  * Litigation `array`: Litigation
    * items [ReportingReceivershipLitigationModel](#reportingreceivershiplitigationmodel)

### ReportingReceivershipCaseModelResults
* ReportingReceivershipCaseModelResults `object`: Results model to store receivership case results.
  * Count `integer`: The total number of results available for all pages
  * Data `array`: The resulting data returned from the paged query range
    * items [ReportingReceivershipCaseModel](#reportingreceivershipcasemodel)

### ReportingReceivershipExitStrategyModel
* ReportingReceivershipExitStrategyModel `object`: Helper Model - Exit Strategy
  * Compiled `string`: The date Compiled
  * CompiledByID `string`: Compiled By ID (ApplicationStaff)
  * DisplayCompiledByID `string`: Compiled By ID
  * ExtraNotes `string`: Extra Notes
  * LenderResponse `string` (values: AgreeLet, AgreeSell, AgreeDisposalRec, AgreeOther, DisagreeLet, DisagreeSell, DisagreeDisposalRec, DisagreeOther): Lender Response
  * LenderResponseDate `string`: Lender Response Date
  * LockChanged `string`: Lock Changed
  * MortgageArrears `number`: Mortgage Arrears
  * MortgageBalance `number`: Mortgage Balance
  * MortgageCMI `number`: Mortgage CMI
  * Recommendation `string` (values: Let, Sell, DisposalRec, PendingExit, Other): Recommendation
  * ReviewDate `string`: The Review Date
  * SentToLender `string`: Sent To Lender

### ReportingReceivershipLitigationModel
* ReportingReceivershipLitigationModel `object`: Helper Model - Litigation
  * ClosedLitigationDate `string`: Closed Litigation Date
  * ClosedLitigationReason `string` (values: PossessionObtained, TenantVacated, LitigationCancelled, Other): Closed Litigation Reason
  * CompiledBySolicitorID `string`: Compiled By Solicitor ID (SalesSolicitor)
  * DisplayCompiledBySolicitor `string`: Display Compiled By Solicitor
  * EvictionDate `string`: Eviction Date
  * EvictionOutcome `string` (values: EvictionComplete, EvictionCancelled, Other): Eviction Outcome
  * ExtraNotes `string`: Extra Notes
  * HearingDate `string`: Hearing Date
  * HearingOutcome `string`: Hearing Outcome
  * LitigationType `string`: Litigation Type
  * NoticeExpiryDate `string`: Notice Expiry Date
  * NoticeServedDate `string`: Notice Served Date
  * ProceedingsIssuedDate `string`: Proceedings Issued Date


