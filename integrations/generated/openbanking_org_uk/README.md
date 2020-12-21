# @datafire/openbanking_org_uk

Client library for Open Data API

## Installation and Usage
```bash
npm install --save @datafire/openbanking_org_uk
```
```js
let openbanking_org_uk = require('@datafire/openbanking_org_uk').create();

.then(data => {
  console.log(data);
});
```

## Description

Latest Swagger specification for OpenData

## Actions

### atms.get
Gets a list of all `ATM` objects.


```js
openbanking_org_uk.atms.get({}, context)
```

#### Input
* input `object`
  * If-Modified-Since `string`: Used for conditional request, to retrieve data only if modified since a given date
  * If-None-Match `string`: Used for conditional request, to retrieve data only if the given Etag value does not match

#### Output
* output `object`
  * data **required** `array`
    * items `object`
      * ATMID **required** `string`: ATM terminal device identification for the acquirer and the issuer
      * ATMServices **required** `array`: Information about ATM services
        * items `string` (values: Balance, BillPayments, CashDeposits, CashWithdrawal, CharityDonation, ChequeBookRequest, ChequeDeposits, FastCash, MiniStatement, MobileBankingRegistration, MobilePaymentRegistration, MobilePhoneTopUp, OrderStatement, PINActivation, PINChange): Information about ATM services
      * AccessibilityTypes `array`: Information about the accessibility
        * items `string` (values: AudioCashMachine, AutomaticDoors, ChairAccess, DriveThru, ExternalRamp, InductionLoop, InternalRamp, LevelAccess, LowerLevelCounter, WheelchairAccess): Information about the accessibility
      * AdditionalATMServices `array`: ATM Service Description
        * items `string`: maxLength 350 text
      * Address **required** `object`: Postal Address
        * BuildingNumberOrName `string`: Number or Name that identifies the position of a building on a street
        * Country **required** `string`: Nation with its own government
        * CountrySubDivision `string`: Identifies a subdivision of a country such as state, region, county
        * OptionalAddressField `string`: Directions for customers
        * PostCode **required** `string`: Identifier consisting of a group of letters and/or numbers that is added to a postal address to assist the sorting of mail
        * StreetName **required** `string`: Name of a street or thoroughfare
        * TownName `string`: Name of a built-up area, with defined boundaries, and a local government
      * BranchIdentification `string`: Unique and unambiguous identification of a retail branch of a financial institution
      * Currency **required** `array`: Defines currency type available for dispense
        * items `string`: Active or Historic Currency Code
      * GeographicLocation **required** `object`: Geographic Coordinates
        * Latitude **required** `string`: The Latitude measured in decimal format according to ISO 213
        * Longitude **required** `string`: The longitude measured in decimal format according to ISO 213
      * LocationCategory `string` (values: Airport, BankSpecialisedOutlet, BranchExternal, BranchInternal, BranchLobby, BureauDeChange, CoachStation, CommercialSpaceInternal, ConvenienceStore, ExhibitionCentre, FactoryOrOffice, FillingStation, FinancialInstitution, GovernmentOffice, Hospital, Hotel, KioskPod, LeisureCentre, PleasurePark, PublicHouse, RailwayStation, RemoteUnit, RetailerDepartmentStore, RetailerOutlet, SeaportTerminal, ServiceStation, ShoppingCentreExternal, ShoppingCentreInternal, StorageDepot, SupermarketExternal, SupermarketInternal, UndergroundRailwayStation, UniversityOrCollege): Indicates the environment of the ATM
      * MinimumValueDispensed `string` (values: £5, £10, £20, £50, £100): Minimum currency denominations usually available
      * Organisation **required** `object`: Organisation
        * Brand **required** `object`: Brand
          * TrademarkID **required** `string`: The trademark number that has been registered with the Intellectual Property Office. Note: The 2 letter IPO prefix should be omitted
          * TrademarkIPOCode **required** `string` (values: UK, EU): The Intellectual Property Office (IPO) is the official body responsible for intellectual property (IP) rights including patents, designs, trademarks and copyright. (Code: UK or EU only)
        * ParentOrganisation **required** `object`: Parent organisation
          * BIC `string`: The BIC from the organisation
          * LEI `string`: The LEI ID of the organisation
          * OrganisationName **required** `object`: Organisation Name
      * SiteID `string`: Site identifying code, where ATM is located
      * SiteName `string`: Site identifying name, where ATM is located
      * SupportedLanguages **required** `array`: Languages that the ATM supports
        * items `string`: must be ISO 693-2 codes
  * meta **required** `object`
    * Agreement **required** `string` (values: Use of the APIs and any related data will be subject to the terms of the Open Licence and subject to terms and conditions)
    * LastUpdated **required** `string`
    * License **required** `string` (values: https://www.openbanking.org.uk/open-licence): Open Banking License
    * TermsOfUse **required** `string` (values: https://www.openbanking.org.uk/terms): Open Banking Terms of Use
    * TotalResults **required** `integer`

### atms.head
Gets header information on the current set of `ATM` data


```js
openbanking_org_uk.atms.head({}, context)
```

#### Input
* input `object`
  * If-Modified-Since `string`: Used for conditional request, to retrieve data only if modified since a given date
  * If-None-Match `string`: Used for conditional request, to retrieve data only if the given Etag value does not match

#### Output
* output `object`

### branches.get
Gets a list of all `Branch` objects.


```js
openbanking_org_uk.branches.get({}, context)
```

#### Input
* input `object`
  * If-Modified-Since `string`: Used for conditional request, to retrieve data only if modified since a given date
  * If-None-Match `string`: Used for conditional request, to retrieve data only if the given Etag value does not match

#### Output
* output `object`
  * data **required** `array`
    * items `object`
      * ATMAtBranch **required** `boolean`: Indicated whether an ATM is at the branch
      * AccessibilityTypes `string` (values: AudioCashMachine, AutomaticDoors, ChairAccess, DriveThru, ExternalRamp, InductionLoop, InternalRamp, LevelAccess, LowerLevelCounter, WheelchairAccess): Information about the accessibility
      * Address **required** `object`: Postal Address
        * BuildingNumberOrName `string`: Number or Name that identifies the position of a building on a street
        * Country **required** `string`: Nation with its own government
        * CountrySubDivision `string`: Identifies a subdivision of a country such as state, region, county
        * OptionalAddressField `string`: Directions for customers
        * PostCode `string`: Identifier consisting of a group of letters and/or numbers that is added to a postal address to assist the sorting of mail
        * StreetName `string`: Name of a street or thoroughfare
        * TownName `string`: Name of a built-up area, with defined boundaries, and a local government
      * AlternatePhone `array`
        * items `object`: Alternative Phone Number
          * AlternateTelephoneNumber `string`: Collection of information that identifies a phone number, as defined by telecom services.
          * AlternateTelephoneNumberDescription `string`: Description of the telephone number
      * ArrivalTime `string`: Time that the mobile branch is scheduled to arrive
      * BranchDescription `string`: Description of the branch
      * BranchFacilitiesName `array`: Information about branch facilities
        * items `string` (values: BusinessITSupport, CollectionLockers, MeetingRooms, Parking, Wifi): Information about branch facilities
      * BranchIdentification **required** `string`: Unique and unambiguous identification of a retail branch of a financial institution
      * BranchMediatedServiceName `array`: Information about mediated branch facilities
        * items `string` (values: BureauDeChange, BusinessCounter, CardIssuanceFacility, CounterServices, DriveThru, MortgageAdvisor, NightSafe, OnDemandCurrency, PremierCounter, VideoBanking, WheelChairAccess): Information about mediated branch facilities
      * BranchName `string`: Name by which a party is known and which is usually used to identify that party
      * BranchOtherFacilities `array`: Any other facilities not mentioned in BranchFacilitiesName
        * items `string`: maxLength 350 text
      * BranchOtherMediatedServices `array`: Mediated Services not described in BranchMediatedServiceName
        * items `string`: maxLength 350 text
      * BranchOtherSelfServices `array`: Self Services not described in BranchSelfServeServiceName
        * items `string`: maxLength 350 text
      * BranchPhoto `string`: Image related to the branch
      * BranchSelfServeServiceName `array`
        * items `string` (values: AccountVerificationService, AssistedServiceCounter, BusinessDepositTerminal, CashChequeDepositMachineCoin, CashChequeDepositMachineNoCoin, ExternalAtmAudio, ExternalAtmNoAudio, ExternalQuickServicePoint, InternalAtmAudio, InternalAtmNoAudio, InternalQuickServicePoint, LodgementDevice, OnlineBankingPoint, QuickDeposit, SaturdayCounterService, SelfServiceAccountOpening, StatementPrinter): Information about self service branch services
      * BranchType **required** `string` (values: Physical, Mobile): Information on the type of branch
      * CustomerSegment **required** `array`: Customer segment which the branch is able to service
        * items `string` (values: Business, Corporate, Personal, Premier, Private, Select, SME, Wealth): Customer segment which the branch is able to service
      * DaysOfTheWeek `string`: Description on when the mobile branch is available. e.g. The weekend of Glastonbury festival; or Mondays and during the shrimp season also Wednesdays
      * DepartureTime `string`: Time that the mobile branch is scheduled to depart
      * FaxNumber `array`: Collection of information that identifies a FAX number, as defined by telecom services.
        * items `string`: Collection of information that identifies a phone number, as defined by telecom services.
      * GeographicLocation `object`: Geographic Coordinates
        * Latitude **required** `string`: The Latitude measured in decimal format according to ISO 213
        * Longitude **required** `string`: The longitude measured in decimal format according to ISO 213
      * OpeningTimes **required** `array`: Branch Opening Times
        * items `object`
          * ClosingTime **required** `string`: ISOTime, local time hh:mm:ss.sss or time in utc hh:mm:ss.sssZ or time with timezone hh:mm:ss.sss+hh:mm hh:mm:ss.sss-hh:mm
          * OpeningDay **required** `string` (values: Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday, Public and Bank Holiday): Day of the week
          * OpeningTime **required** `string`: ISOTime, local time hh:mm:ss.sss or time in utc hh:mm:ss.sssZ or time with timezone hh:mm:ss.sss+hh:mm hh:mm:ss.sss-hh:mm
          * UnavailableFinishTime `string`: ISOTime, local time hh:mm:ss.sss or time in utc hh:mm:ss.sssZ or time with timezone hh:mm:ss.sss+hh:mm hh:mm:ss.sss-hh:mm
          * UnavailableStartTime `string`: ISOTime, local time hh:mm:ss.sss or time in utc hh:mm:ss.sssZ or time with timezone hh:mm:ss.sss+hh:mm hh:mm:ss.sss-hh:mm
      * Organisation **required** `object`: Organisation
        * Brand **required** `object`: Brand
          * TrademarkID **required** `string`: The trademark number that has been registered with the Intellectual Property Office. Note: The 2 letter IPO prefix should be omitted
          * TrademarkIPOCode **required** `string` (values: UK, EU): The Intellectual Property Office (IPO) is the official body responsible for intellectual property (IP) rights including patents, designs, trademarks and copyright. (Code: UK or EU only)
        * ParentOrganisation **required** `object`: Parent organisation
          * BIC `string`: The BIC from the organisation
          * LEI `string`: The LEI ID of the organisation
          * OrganisationName **required** `object`: Organisation Name
      * ParkingLocation `string`: Place where the mobile branch is located, such as between the news agent and the church.
      * PlannedBranchClosure `array`
        * items `object`: Planned branch closure
          * EndDate `string`: Date when a branch is due to re-open following temporary closure
          * StartDate `string`: Date when a branch is due to close temporarily or permanently
      * StopName `string`: Name of the stop of the mobile branch
      * TelephoneNumber **required** `string`: Collection of information that identifies a phone number, as defined by telecom services.
  * meta **required** `object`
    * Agreement **required** `string` (values: Use of the APIs and any related data will be subject to the terms of the Open Licence and subject to terms and conditions)
    * LastUpdated **required** `string`
    * License **required** `string` (values: https://www.openbanking.org.uk/open-licence): Open Banking License
    * TermsOfUse **required** `string` (values: https://www.openbanking.org.uk/terms): Open Banking Terms of Use
    * TotalResults **required** `integer`

### branches.head
Gets header information on the current set of `Branch` data


```js
openbanking_org_uk.branches.head({}, context)
```

#### Input
* input `object`
  * If-Modified-Since `string`: Used for conditional request, to retrieve data only if modified since a given date
  * If-None-Match `string`: Used for conditional request, to retrieve data only if the given Etag value does not match

#### Output
* output `object`

### business_current_accounts.get
Gets a list of all `Branch Current Account` objects.


```js
openbanking_org_uk.business_current_accounts.get({}, context)
```

#### Input
* input `object`
  * If-Modified-Since `string`: Used for conditional request, to retrieve data only if modified since a given date
  * If-None-Match `string`: Used for conditional request, to retrieve data only if the given Etag value does not match

#### Output
* output `object`
  * data **required** `array`
    * items `object`: Business current account
      * AccessChannels **required** `array`: Ways to interact with the bank when managing account
        * items `string` (values: ATM, Branch, BusinessCommercialCentre, CallCentre, MobileApps, MobileBanking, Online, Phone, Post, PostOffice, RelationshipManager, Text): Channel
      * Benefits **required** `object`: Benefit
        * Benefit **required** `boolean`: Describe  one or more benefits if they exist
        * BenefitGroup `array`
          * items `object`: Benefit Interest Group
      * CAPricing **required** `array`
        * items `object`: Card Price
          * CAPricingItem **required** `object`: Card Pricing
          * ProductState **required** `string` (values: FutureMultipleTerms, Promotional, Regular): Describes if the offering is promotional or a description of a future state.
      * CardNotes `string`: Optional additional notes to supplement the card details
      * CardType **required** `array`: Card Type available
        * items `string` (values: BasicCard, BusinessQuickLodgeCard, Cashcard, ContactlessCashcard, ContactlessDebitMastercard, ContactlessDebitVisa, DebitMastercard, VisaDebit, DepositCard, OperatorCard, POCACard): Indicates the card scheme
      * CardWithdrawalLimit **required** `string`: The daily Limit that a customer can get via the ATM. This describes the default limit rather than the maximum
      * ChequeBookAvailable **required** `boolean`: Can a chequebook be issued
      * Contactless **required** `boolean`: Does the card issued have contactless facility
      * CreditInterest **required** `object`: Credit Interest
        * CreditCharged **required** `boolean`: Is credit paid to the account. The answer will be the condition of all other fields to be filled
        * CreditInterestGroup `array`
          * items `object`: Credit Interest Group
      * CreditScoringPartOfAccountOpeningForGettingAnAccount **required** `boolean`: Indicates whether a credit check performed on an inquiry to open an account is submitted
      * CreditScoringPartOfAccountOpeningForIDVerification `boolean`: Indicates whether a credit check is used to check the address of a potential new account holder
      * CreditScoringPartOfAccountOpeningIDVerificationIsAHardOrSoftCreditScore `array`
        * items `string` (values: Hard, Soft): Indicates the type of scoring
      * CreditScoringPartOfAccountOpeningIDVerificationText `array`: Details on the specific credit scoring
        * items `string`
      * CreditScoringPartOfAccountOpeningIsAHardOrSoftCreditScore `array`: Describes the type of credit scoring
        * items `string` (values: Hard, Soft): Indicates the type of scoring
      * CreditScoringPartOfAccountOpeningText `string`: Details on the specific credit scoring
      * Currency **required** `array`: Currency of the Account. Default to GBP at present
        * items `string`: Active or Historic Currency Code
      * Eligibility **required** `object`: Eligibility
        * AgeRestricted **required** `boolean`: Indicates a customer's age is part of eligibility criteria
        * AnnualBusinessTurnover `string`: Annual Business Turnover
        * AnnualBusinessTurnoverCurrency `string`: Annual Business Turnover Currency
        * Description **required** `string`: One paragraph detailing the eligibility
        * EligibilityName `string`: Free text description, denotes non standard eligibilities not included in the code list
        * EligibilityNotes `string`: Optional additional notes to supplement the eligibility conditions. Only used for very specific conditions
        * EligibilityType `string` (values: AnyBusinessCustomer, BusinessOnly, CreditCard, CreditScoring, EmailAddress, ExistingCustomers, IdAndV, Mortgage, NoArrearsOnLoan, NoCustomerInArrears, NoOverOverdraftThirtyDays, NoSoleUkAccountOrBankrupt, NTB, NTBBusiness, SoleStudentAccount, SoleUkAccount, StudentsOnly, TwoMonthsOfCourseStart, UCASFulltimeTwoYears): Eligibility type
        * IncomeCondition `string`: Stipulates any particular definition of income that applies to the income eligibility and/or method by which income must paid into the account (eg Salary DD)
        * IncomeTurnoverRelated **required** `boolean`: Indicates if eligibility linked to income
        * MarketingEligibility `array`
          * items `string` (values: ExistingCustomers, NewCustomersOnly, SwitchersOnly, StartUp): Specific eligibility for marketing
        * MaxNumberOfAccounts `string`: Maximum number of the same prodcut the customer may hold
        * MaximumAge `integer`: Maximum age, in years, allowed to hold the account
        * MaximumAgeToOpen `integer`: Maximum age, in years, to open an account
        * MaximumOpeningAmount `boolean`: A maximum amount to be deposited at opening
        * MinIncomeTurnoverPaidIntoAccount `integer`: Minimum Income Amount required to paid into the account
        * MinimumAge `integer`: Minimum age, in years, required to hold an account
        * MinimumDeposit `boolean`: A minimum deposit required to hold this account
        * MinimumIncomeFrequency `string` (values: AcademicTerm, HalfYearly, Monthly, Quarterly, Weekly, Yearly): The frequency that the minimum mentioned before is deposited in the account. Yearly is very important for premium accounts
        * MinimumIncomeTurnoverAmount `string`: Minimum income / Turnover required to hold the product
        * MinimumIncomeTurnoverCurrency `string`: Minimum income / Turnover Currency
        * MinimumOperatingBalance `string`: Minimum Operating Balance
        * MinimumOperatingBalanceCurrency `string`: Minimum Operating Balance currency
        * MinimumOperatingBalanceExists `boolean`: Is there a Minimum Operating Balance?
        * OpeningDepositMaximumAmount `string`: Maximum Amount to be depositing at opening
        * OpeningDepositMaximumCurrency `string`: The currency of the Minimum Amount to be depositing at opening
        * OpeningDepositMinimum `string`: Minimum Amount to be held on account
        * OpeningDepositMinimumCurrency `string`: The currency of the Minimum Amount to be depositing at opening
        * OtherFinancialHoldingRequired **required** `boolean`: Indicates that it is necessary to hold another product with the bank in order to be eligible for this product or feature
        * PreviousBankruptcy **required** `boolean`: Describes if a previous bankruptcy / insolvency disqualfies for this account Details in ELI-280
        * ResidencyRestricted **required** `boolean`: Indicates a customer's residency forms part of the eligibility criteria
        * ResidencyRestrictedRegion `string` (values: UK, EEA, EU, EFTA, GB - ENG, GB - NIR, GB - SCT, GB - WLS, IRL): Indicates a customer must be current resident of a geographic area/country
        * SingleJointIncome `string` (values: Joint, SoleIncome, SoleOrJoint, Turnover): Minimum Income Source. For certain products a minimum income is required. This can be mandated as to the single income or to a joint income. This field describes this
        * ThirdSectorOrganisations **required** `boolean`: Is the product available to operate as a Clubs or Societies account?
      * Feature `array`
        * items `object`: Account Features
          * DateOfChange `string`: Date of the change if it refers to future terms
          * ExistingFeature **required** `boolean`: Indicates whether the account has any feature
          * FeatureDetails `array`: Feature details
          * LengthPromotionalInDays `integer`: Describes the length if only a duration is given instead of a date
          * ProductState `string` (values: FutureMultipleTerms, Promotional, Regular): Describes if the offering is promotional or a description of a future state.
          * StartPromotionOrFutureTerms `string`: Describes the start date
          * StopPromotionOrFutureTerms `string`: Describes the end date
      * FeesAndCharges **required** `array`
        * items `object`: Fees And Charges
          * Fees **required** `object`: Fees
          * ProductState **required** `string` (values: FutureMultipleTerms, Promotional, Regular): Describes if the offering is promotional or a description of a future state.
      * InternationalPaymentsSupported **required** `boolean`: Indicates that the account supports international payments
      * MaximumMonthlyCharge `string`: The maximum Relevant Charges that could accrue
      * MobileWallet `array`: Mobile wallet supported by this product. A mobile wallet being any electronic device that allows an individual to make electronic commerce transactions
        * items `string` (values: AndroidPay, ApplePay, IssuerMobileApp, MobileBankingApp, Other, PayM, SamsungPay, VodafoneWallet): Mobile wallet supported by this product. A mobile wallet being any electronic device that allows an individual to make electronic commerce transactions
      * Organisation **required** `object`: Organisation
        * Brand **required** `object`: Brand
          * TrademarkID **required** `string`: The trademark number that has been registered with the Intellectual Property Office. Note: The 2 letter IPO prefix should be omitted
          * TrademarkIPOCode **required** `string` (values: UK, EU): The Intellectual Property Office (IPO) is the official body responsible for intellectual property (IP) rights including patents, designs, trademarks and copyright. (Code: UK or EU only)
        * ParentOrganisation **required** `object`: Parent organisation
          * BIC `string`: The BIC from the organisation
          * LEI `string`: The LEI ID of the organisation
          * OrganisationName **required** `object`: Organisation Name
      * Overdraft `array`
        * items `object`: Overdraft
          * DateOfChange `string`: Date of the change if it refers to future terms
          * FeeChargeNegotiableIndicator `string` (values: No, Yes): Fee Charge negotiable Indicator
          * FeesAndCharges `array`
          * LengthPromotionalInDays `integer`: Describes the length if only a duration is given instead of a date
          * MaximumMonthlyOverdraftCharge `string`: Maximum Monthly Charge (MMC) for Overdraft fee and charges.
          * Notes `string`: Notes on the overdraft
          * OverdraftProductState `string` (values: FutureMultipleTerms, Promotional, Regular): Describes if the offering is promotional or a description of a future state.
          * OverdraftTierBandSet `array`: Overdraft Tier Band Set
          * OverdraftType `string` (values: Committed, OnDemand): Defines if the overdraft facility is committed 
          * StartPromotionOrFutureTerms `string`: Describes the start date
          * StopPromotionOrFutureTerms `string`: Describes the end date
          * Term `string`: The duration of the overdraft, if it is non permanent
      * OverdraftOffered **required** `boolean`: Indicates whether an overdraft offered for this account
      * ProductDescription **required** `string`: Description of the product provided by the parent organisation
      * ProductIdentifier **required** `string`: Identifier within the parent organisation for the product. Must be unique in the organisation
      * ProductName `string`: The name of the product used for marketing purposes from a customer perspective. i.e. what the customer would recognise
      * ProductSegment **required** `array`
        * items `string` (values: Basic, Business, General, Graduate, International, Packaged, Personal, Premium, Reward, SME, Student, YoungAdult, Youth): Marketing or industry segment that the product is designed for
      * ProductType **required** `string` (values: BCA): Descriptive code for the product category
      * ProductURL **required** `array`: URL provided by the organisation which redirects to the product (on live products only). There might be more than one product at a given URL
        * items `string`
      * TsandCs **required** `array`: URL provided by the parent organisation which redirects to the current T&Cs
        * items `string`
  * meta **required** `object`
    * Agreement **required** `string` (values: Use of the APIs and any related data will be subject to the terms of the Open Licence and subject to terms and conditions)
    * LastUpdated **required** `string`
    * License **required** `string` (values: https://www.openbanking.org.uk/open-licence): Open Banking License
    * TermsOfUse **required** `string` (values: https://www.openbanking.org.uk/terms): Open Banking Terms of Use
    * TotalResults **required** `integer`

### business_current_accounts.head
Gets header information on the current set of `Business Current Account` data


```js
openbanking_org_uk.business_current_accounts.head({}, context)
```

#### Input
* input `object`
  * If-Modified-Since `string`: Used for conditional request, to retrieve data only if modified since a given date
  * If-None-Match `string`: Used for conditional request, to retrieve data only if the given Etag value does not match

#### Output
* output `object`

### commercial_credit_cards.get
Gets a list of all `Commerical Credit Card` objects.


```js
openbanking_org_uk.commercial_credit_cards.get({}, context)
```

#### Input
* input `object`
  * If-Modified-Since `string`: Used for conditional request, to retrieve data only if modified since a given date
  * If-None-Match `string`: Used for conditional request, to retrieve data only if the given Etag value does not match

#### Output
* output `object`
  * data **required** `array`
    * items `object`: Commercial Credit Card
      * Benefits **required** `object`: Benefit
        * Benefit **required** `boolean`: Describe  one or more benefits if they exist
        * BenefitGroup `array`
          * items `object`: Benefit Interest Group
      * Description **required** `string`: Product description
      * Details **required** `object`: Commercial Credit Card Group 
        * CCSubType **required** `string` (values: FutureMultipleTerms, Promotional, Regular): CCC Subtype Code
        * CommercialCreditCardItem **required** `object`: Commercial Credit Card Item 
          * APRRate **required** `string`: Annual Percentage Rate
          * AbilityToSetIndividualLimits `boolean`: The ability to set separate limts on different cards in one account
          * AccessToOnlineDataReportingTool **required** `boolean`: Describes whether the account have access to an online tool for reprting on expenditure
          * AllocationofRepayment `string`: Allocation rules for repayment
          * AnnualAccountFeeType `string`: Details on annual account fee, such as non payable when there is a turnover above a certain sum
          * AnnualFeeAmount **required** `string`: Standard fee on the card
          * BalanceTransferInterestRatePeriod `string` (values: Annual, Monthly): The period used to define the specific interest rate for balance transfers
          * BalanceTransferRate `string`: Balance transfer rate
          * CardScheme **required** `string` (values: Cashcard, CreditMastercard, CreditVisa): Card Scheme Code
          * CashAdvanceRate **required** `string`: Cash advance rate
          * CashWithdrawalsAllowed **required** `boolean`: Describes whether cash withdrawals are allowed
          * CashbackPercent `string`: Percent of cashback on amount spend
          * ChequeFeePercent `string`: Percentage fee on convenience cheques
          * ConvenienceCheque **required** `boolean`: Describes whether the card account allow convenience cheques
          * DateOfChange `string`: Date of the change if it refers to future terms
          * DaysInterestFreeCreditIfPaymentFull **required** `integer`: Describes how many interest free days are given if the card is fully paid at each term
          * ExchangeRateAdjustment **required** `string`: The margin added, by certain card issuers, to the scheme rate in order to arrive at the exchange rate qouted as the reference exchange rate to the cardholder
          * FeesOnCheque `string`: Percentage fee on a convenince cheques
          * ForeignCashFee `string`: Additional card fee applied to sterling cash withdrawal made abroad
          * ForeignCashFeeRate `string`: Additional card fee rate applied to sterling cash withdrawal made abroad
          * ForeignPurchaseFee `string`: Additional card fee applied to sterling retail transactions made abroad
          * ForeignPurchaseFeeRate `string`: Additional card fee rate applied to sterling retail transactions made abroad
          * IssuingEmergencyCardsFees **required** `string`: Amount payable for issuing an emergency card
          * LengthPromotionalInDays `integer`: Describes the length if only a duration is given instead of a date
          * MaximumNumberOfCardsPermitted `integer`: The maximum numbers of cards per account
          * MinimumCreditLimit **required** `string`: Minimum £500, maximum subject to status
          * MinimumLendingAmount `string`: The minimum lending available
          * MinimumRepaymentAmount `string`: Minimum repayment amount
          * MinimumRepaymentPercentage `string`: Minimum repayment as percentage
          * NonSterlingCashFee `string`: An additional fee applied to certain card cash withdrawals. This fee also applies to cash near fees such as gambling
          * NonSterlingCashFeeRate `string`: An additional fee rate applied to certain card cash withdrawals. This fee also applies to cash near fees such as gambling
          * NonSterlingPurchaseFee `string`: An additional fee applied to certain card retail transactions
          * NonSterlingPurchaseFeeRate `string`: An additional fee rate applied to certain card retail transactions
          * NonSterlingTransactionFee `string`: A fee applied to all non-Sterling card transactions
          * NonSterlingTransactionFeeRate `string`: A fee rate applied to all non-Sterling card transactions
          * OverLimitFee `string`: Fee applicable if the card was credited over its limit
          * PaymentDaysAfterStatement **required** `integer`: How many days after statement is the payment expected
          * PaymentSchemeExchangeFee `string`: Any payment network fee applied to some or all non-sterling transactions that the card issuer recover directly from the cardholder
          * PaymentSchemeExchangeFeeRate `string`: Any payment network fee rate applied to some or all non-sterling transactions that the card issuer recover directly from the cardholder
          * PaymentSchemeExchangeRate `string`: The base exchange rate used in settlement of the transaction between issuer and scheme
          * PurchaseRate **required** `string`: Purchase rate
          * RepaymentFrequency **required** `string` (values: Daily, Flexible, Fortnightly, HalfYearly, Monthly, Quarterly, Weekly, Yearly): Repayment frequency
          * RepaymentNotes `string`: Additional notes
          * StartPromotionOrFutureTerms `string`: Describes the start date
          * StatementAtAccountLevel **required** `boolean`: Describes whether there is a statement at account level
          * StatementAtPersonalLevel **required** `boolean`: Describes whether there is a statement at card level
          * StopPromotionOrFutureTerms `string`: Describes the end date
      * Eligibility **required** `object`: Eligibility
        * AgeRestricted **required** `boolean`: Indicates a customer's age is part of eligibility criteria
        * AnnualBusinessTurnover `string`: Annual Business Turnover
        * AnnualBusinessTurnoverCurrency `string`: Annual Business Turnover Currency
        * Description **required** `string`: One paragraph detailing the eligibility
        * EligibilityName `string`: Free text description, denotes non standard eligibilities not included in the code list
        * EligibilityNotes `string`: Optional additional notes to supplement the eligibility conditions. Only used for very specific conditions
        * EligibilityType `string` (values: AnyBusinessCustomer, BusinessOnly, CreditCard, CreditScoring, EmailAddress, ExistingCustomers, IdAndV, Mortgage, NoArrearsOnLoan, NoCustomerInArrears, NoOverOverdraftThirtyDays, NoSoleUkAccountOrBankrupt, NTB, NTBBusiness, SoleStudentAccount, SoleUkAccount, StudentsOnly, TwoMonthsOfCourseStart, UCASFulltimeTwoYears): Eligibility type
        * IncomeCondition `string`: Stipulates any particular definition of income that applies to the income eligibility and/or method by which income must paid into the account (eg Salary DD)
        * IncomeTurnoverRelated **required** `boolean`: Indicates if eligibility linked to income
        * MarketingEligibility `array`
          * items `string` (values: ExistingCustomers, NewCustomersOnly, SwitchersOnly, StartUp): Specific eligibility for marketing
        * MaxNumberOfAccounts `string`: Maximum number of the same prodcut the customer may hold
        * MaximumAge `integer`: Maximum age, in years, allowed to hold the account
        * MaximumAgeToOpen `integer`: Maximum age, in years, to open an account
        * MaximumOpeningAmount `boolean`: A maximum amount to be deposited at opening
        * MinIncomeTurnoverPaidIntoAccount `integer`: Minimum Income Amount required to paid into the account
        * MinimumAge `integer`: Minimum age, in years, required to hold an account
        * MinimumDeposit `boolean`: A minimum deposit required to hold this account
        * MinimumIncomeFrequency `string` (values: AcademicTerm, HalfYearly, Monthly, Quarterly, Weekly, Yearly): The frequency that the minimum mentioned before is deposited in the account. Yearly is very important for premium accounts
        * MinimumIncomeTurnoverAmount `string`: Minimum income / Turnover required to hold the product
        * MinimumIncomeTurnoverCurrency `string`: Minimum income / Turnover Currency
        * MinimumOperatingBalance `string`: Minimum Operating Balance
        * MinimumOperatingBalanceCurrency `string`: Minimum Operating Balance currency
        * MinimumOperatingBalanceExists `boolean`: Is there a Minimum Operating Balance?
        * OpeningDepositMaximumAmount `string`: Maximum Amount to be depositing at opening
        * OpeningDepositMaximumCurrency `string`: The currency of the Minimum Amount to be depositing at opening
        * OpeningDepositMinimum `string`: Minimum Amount to be held on account
        * OpeningDepositMinimumCurrency `string`: The currency of the Minimum Amount to be depositing at opening
        * OtherFinancialHoldingRequired **required** `boolean`: Indicates that it is necessary to hold another product with the bank in order to be eligible for this product or feature
        * PreviousBankruptcy **required** `boolean`: Describes if a previous bankruptcy / insolvency disqualfies for this account Details in ELI-280
        * ResidencyRestricted **required** `boolean`: Indicates a customer's residency forms part of the eligibility criteria
        * ResidencyRestrictedRegion `string` (values: UK, EEA, EU, EFTA, GB - ENG, GB - NIR, GB - SCT, GB - WLS, IRL): Indicates a customer must be current resident of a geographic area/country
        * SingleJointIncome `string` (values: Joint, SoleIncome, SoleOrJoint, Turnover): Minimum Income Source. For certain products a minimum income is required. This can be mandated as to the single income or to a joint income. This field describes this
        * ThirdSectorOrganisations **required** `boolean`: Is the product available to operate as a Clubs or Societies account?
      * KeyFeatures **required** `string`: Product key features
      * Organisation **required** `object`: Organisation
        * Brand **required** `object`: Brand
          * TrademarkID **required** `string`: The trademark number that has been registered with the Intellectual Property Office. Note: The 2 letter IPO prefix should be omitted
          * TrademarkIPOCode **required** `string` (values: UK, EU): The Intellectual Property Office (IPO) is the official body responsible for intellectual property (IP) rights including patents, designs, trademarks and copyright. (Code: UK or EU only)
        * ParentOrganisation **required** `object`: Parent organisation
          * BIC `string`: The BIC from the organisation
          * LEI `string`: The LEI ID of the organisation
          * OrganisationName **required** `object`: Organisation Name
      * OtherKeyFeatures `string`: Additional Features of the card
      * PaymentHoliday **required** `boolean`: Indicates whether a payment holiday is possible
      * PaymentHolidayDescription `string`: Detailed description on the payment holiday if available
      * ProductIdentifier **required** `string`: Identifier within the parent organisation for the product. Must be unique in the organisation
      * ProductName **required** `string`: Name of the Commercial Credit Card
      * ProductSegment `array`: Marketing or industry segment that the product is designed for
        * items `string` (values: Cashback, Corporate, General, Reward, SME): Marketing or industry segment that the product is designed for
      * ProductType **required** `string` (values: CommercialCreditCards): Descriptive code for the product category
      * ProductURL **required** `array`: URL provided by the organisation which redirects to the product (on live products only). There might be more than one product at a given URL
        * items `string`
      * TsandCs **required** `array`: URL provided by the parent organisation which redirects to the current T&Cs. Only applies on live products
        * items `string`
  * meta **required** `object`
    * Agreement **required** `string` (values: Use of the APIs and any related data will be subject to the terms of the Open Licence and subject to terms and conditions)
    * LastUpdated **required** `string`
    * License **required** `string` (values: https://www.openbanking.org.uk/open-licence): Open Banking License
    * TermsOfUse **required** `string` (values: https://www.openbanking.org.uk/terms): Open Banking Terms of Use
    * TotalResults **required** `integer`

### commercial_credit_cards.head
Gets header information on the current set of `Commerical Credit Card` data


```js
openbanking_org_uk.commercial_credit_cards.head({}, context)
```

#### Input
* input `object`
  * If-Modified-Since `string`: Used for conditional request, to retrieve data only if modified since a given date
  * If-None-Match `string`: Used for conditional request, to retrieve data only if the given Etag value does not match

#### Output
* output `object`

### personal_current_accounts.get
Gets a list of all `Personal Current Account` objects.


```js
openbanking_org_uk.personal_current_accounts.get({}, context)
```

#### Input
* input `object`
  * If-Modified-Since `string`: Used for conditional request, to retrieve data only if modified since a given date
  * If-None-Match `string`: Used for conditional request, to retrieve data only if the given Etag value does not match

#### Output
* output `object`
  * data **required** `array`
    * items `object`: Personal Current Account
      * AccessChannels **required** `array`: Ways to interact with the bank when managing account
        * items `string` (values: ATM, Branch, BusinessCommercialCentre, CallCentre, MobileApps, MobileBanking, Online, Phone, Post, PostOffice, RelationshipManager, Text): Channel
      * Benefits **required** `object`: Benefit
        * Benefit **required** `boolean`: Describe  one or more benefits if they exist
        * BenefitGroup `array`
          * items `object`: Benefit Interest Group
      * CAPricing **required** `array`
        * items `object`: Card Price
          * CAPricingItem **required** `object`: Card Pricing
          * ProductState **required** `string` (values: FutureMultipleTerms, Promotional, Regular): Describes if the offering is promotional or a description of a future state.
      * CardNotes `string`: Optional additional notes to supplement the card details
      * CardType **required** `array`: Card Type available
        * items `string` (values: BasicCard, BusinessQuickLodgeCard, Cashcard, ContactlessCashcard, ContactlessDebitMastercard, ContactlessDebitVisa, DebitMastercard, VisaDebit, DepositCard, OperatorCard, POCACard): Indicates the card scheme
      * CardWithdrawalLimit **required** `string`: The daily Limit that a customer can get via the ATM. This describes the default limit rather than the maximum
      * ChequeBookAvailable **required** `boolean`: Can a chequebook be issued
      * Contactless **required** `boolean`: Does the card issued have contactless facility
      * CreditInterest **required** `object`: Credit Interest
        * CreditCharged **required** `boolean`: Is credit paid to the account. The answer will be the condition of all other fields to be filled
        * CreditInterestGroup `array`
          * items `object`: Credit Interest Group
      * CreditScoringPartOfAccountOpeningForGettingAnAccount **required** `boolean`: Indicates whether a credit check performed on an inquiry to open an account is submitted
      * CreditScoringPartOfAccountOpeningForIDVerification `boolean`: Indicates whether a credit check is used to check the address of a potential new account holder
      * CreditScoringPartOfAccountOpeningIDVerificationIsAHardOrSoftCreditScore `array`
        * items `string` (values: Hard, Soft): Indicates the type of scoring
      * CreditScoringPartOfAccountOpeningIDVerificationText `array`: Details on the specific credit scoring
        * items `string`
      * CreditScoringPartOfAccountOpeningIsAHardOrSoftCreditScore `array`: Describes the type of credit scoring
        * items `string` (values: Hard, Soft): Indicates the type of scoring
      * CreditScoringPartOfAccountOpeningText `string`: Details on the specific credit scoring
      * Currency **required** `array`: Currency of the Account. Default to GBP at present
        * items `string`: Active or Historic Currency Code
      * Eligibility **required** `object`: Eligibility
        * AgeRestricted **required** `boolean`: Indicates a customer's age is part of eligibility criteria
        * AnnualBusinessTurnover `string`: Annual Business Turnover
        * AnnualBusinessTurnoverCurrency `string`: Annual Business Turnover Currency
        * Description **required** `string`: One paragraph detailing the eligibility
        * EligibilityName `string`: Free text description, denotes non standard eligibilities not included in the code list
        * EligibilityNotes `string`: Optional additional notes to supplement the eligibility conditions. Only used for very specific conditions
        * EligibilityType `string` (values: AnyBusinessCustomer, BusinessOnly, CreditCard, CreditScoring, EmailAddress, ExistingCustomers, IdAndV, Mortgage, NoArrearsOnLoan, NoCustomerInArrears, NoOverOverdraftThirtyDays, NoSoleUkAccountOrBankrupt, NTB, NTBBusiness, SoleStudentAccount, SoleUkAccount, StudentsOnly, TwoMonthsOfCourseStart, UCASFulltimeTwoYears): Eligibility type
        * IncomeCondition `string`: Stipulates any particular definition of income that applies to the income eligibility and/or method by which income must paid into the account (eg Salary DD)
        * IncomeTurnoverRelated **required** `boolean`: Indicates if eligibility linked to income
        * MarketingEligibility `array`
          * items `string` (values: ExistingCustomers, NewCustomersOnly, SwitchersOnly, StartUp): Specific eligibility for marketing
        * MaxNumberOfAccounts `string`: Maximum number of the same prodcut the customer may hold
        * MaximumAge `integer`: Maximum age, in years, allowed to hold the account
        * MaximumAgeToOpen `integer`: Maximum age, in years, to open an account
        * MaximumOpeningAmount `boolean`: A maximum amount to be deposited at opening
        * MinIncomeTurnoverPaidIntoAccount `integer`: Minimum Income Amount required to paid into the account
        * MinimumAge `integer`: Minimum age, in years, required to hold an account
        * MinimumDeposit `boolean`: A minimum deposit required to hold this account
        * MinimumIncomeFrequency `string` (values: AcademicTerm, HalfYearly, Monthly, Quarterly, Weekly, Yearly): The frequency that the minimum mentioned before is deposited in the account. Yearly is very important for premium accounts
        * MinimumIncomeTurnoverAmount `string`: Minimum income / Turnover required to hold the product
        * MinimumIncomeTurnoverCurrency `string`: Minimum income / Turnover Currency
        * MinimumOperatingBalance `string`: Minimum Operating Balance
        * MinimumOperatingBalanceCurrency `string`: Minimum Operating Balance currency
        * MinimumOperatingBalanceExists `boolean`: Is there a Minimum Operating Balance?
        * OpeningDepositMaximumAmount `string`: Maximum Amount to be depositing at opening
        * OpeningDepositMaximumCurrency `string`: The currency of the Minimum Amount to be depositing at opening
        * OpeningDepositMinimum `string`: Minimum Amount to be held on account
        * OpeningDepositMinimumCurrency `string`: The currency of the Minimum Amount to be depositing at opening
        * OtherFinancialHoldingRequired **required** `boolean`: Indicates that it is necessary to hold another product with the bank in order to be eligible for this product or feature
        * PreviousBankruptcy **required** `boolean`: Describes if a previous bankruptcy / insolvency disqualfies for this account Details in ELI-280
        * ResidencyRestricted **required** `boolean`: Indicates a customer's residency forms part of the eligibility criteria
        * ResidencyRestrictedRegion `string` (values: UK, EEA, EU, EFTA, GB - ENG, GB - NIR, GB - SCT, GB - WLS, IRL): Indicates a customer must be current resident of a geographic area/country
        * SingleJointIncome `string` (values: Joint, SoleIncome, SoleOrJoint, Turnover): Minimum Income Source. For certain products a minimum income is required. This can be mandated as to the single income or to a joint income. This field describes this
        * ThirdSectorOrganisations **required** `boolean`: Is the product available to operate as a Clubs or Societies account?
      * Feature `array`
        * items `object`: Account Features
          * DateOfChange `string`: Date of the change if it refers to future terms
          * ExistingFeature **required** `boolean`: Indicates whether the account has any feature
          * FeatureDetails `array`: Feature details
          * LengthPromotionalInDays `integer`: Describes the length if only a duration is given instead of a date
          * ProductState `string` (values: FutureMultipleTerms, Promotional, Regular): Describes if the offering is promotional or a description of a future state.
          * StartPromotionOrFutureTerms `string`: Describes the start date
          * StopPromotionOrFutureTerms `string`: Describes the end date
      * FeesAndCharges **required** `array`
        * items `object`: Fees And Charges
          * Fees **required** `object`: Fees
          * ProductState **required** `string` (values: FutureMultipleTerms, Promotional, Regular): Describes if the offering is promotional or a description of a future state.
      * InternationalPaymentsSupported **required** `boolean`: Indicates that the account supports international payments
      * MaximumMonthlyCharge `string`: The maximum Relevant Charges that could accrue
      * MobileWallet `array`: Mobile wallet supported by this product. A mobile wallet being any electronic device that allows an individual to make electronic commerce transactions
        * items `string` (values: AndroidPay, ApplePay, IssuerMobileApp, MobileBankingApp, Other, PayM, SamsungPay, VodafoneWallet): Mobile wallet supported by this product. A mobile wallet being any electronic device that allows an individual to make electronic commerce transactions
      * Organisation **required** `object`: Organisation
        * Brand **required** `object`: Brand
          * TrademarkID **required** `string`: The trademark number that has been registered with the Intellectual Property Office. Note: The 2 letter IPO prefix should be omitted
          * TrademarkIPOCode **required** `string` (values: UK, EU): The Intellectual Property Office (IPO) is the official body responsible for intellectual property (IP) rights including patents, designs, trademarks and copyright. (Code: UK or EU only)
        * ParentOrganisation **required** `object`: Parent organisation
          * BIC `string`: The BIC from the organisation
          * LEI `string`: The LEI ID of the organisation
          * OrganisationName **required** `object`: Organisation Name
      * Overdraft `array`
        * items `object`: Overdraft
          * DateOfChange `string`: Date of the change if it refers to future terms
          * FeeChargeNegotiableIndicator `string` (values: No, Yes): Fee Charge negotiable Indicator
          * FeesAndCharges `array`
          * LengthPromotionalInDays `integer`: Describes the length if only a duration is given instead of a date
          * MaximumMonthlyOverdraftCharge `string`: Maximum Monthly Charge (MMC) for Overdraft fee and charges.
          * Notes `string`: Notes on the overdraft
          * OverdraftProductState `string` (values: FutureMultipleTerms, Promotional, Regular): Describes if the offering is promotional or a description of a future state.
          * OverdraftTierBandSet `array`: Overdraft Tier Band Set
          * OverdraftType `string` (values: Committed, OnDemand): Defines if the overdraft facility is committed 
          * StartPromotionOrFutureTerms `string`: Describes the start date
          * StopPromotionOrFutureTerms `string`: Describes the end date
          * Term `string`: The duration of the overdraft, if it is non permanent
      * OverdraftOffered **required** `boolean`: Indicates whether an overdraft offered for this account
      * ProductDescription **required** `string`: Description of the product provided by the parent organisation
      * ProductIdentifier **required** `string`: Identifier within the parent organisation for the product. Must be unique in the organisation
      * ProductName `string`: The name of the product used for marketing purposes from a customer perspective. i.e. what the customer would recognise
      * ProductSegment **required** `array`
        * items `string` (values: Basic, Business, General, Graduate, International, Packaged, Personal, Premium, Reward, SME, Student, YoungAdult, Youth): Marketing or industry segment that the product is designed for
      * ProductType **required** `string` (values: PCA): Descriptive code for the product category
      * ProductURL **required** `array`: URL provided by the organisation which redirects to the product (on live products only). There might be more than one product at a given URL
        * items `string`
      * TsandCs **required** `array`: URL provided by the parent organisation which redirects to the current T&Cs
        * items `string`
  * meta **required** `object`
    * Agreement **required** `string` (values: Use of the APIs and any related data will be subject to the terms of the Open Licence and subject to terms and conditions)
    * LastUpdated **required** `string`
    * License **required** `string` (values: https://www.openbanking.org.uk/open-licence): Open Banking License
    * TermsOfUse **required** `string` (values: https://www.openbanking.org.uk/terms): Open Banking Terms of Use
    * TotalResults **required** `integer`

### personal_current_accounts.head
Gets header information on the current set of `Personal Current Account` data


```js
openbanking_org_uk.personal_current_accounts.head({}, context)
```

#### Input
* input `object`
  * If-Modified-Since `string`: Used for conditional request, to retrieve data only if modified since a given date
  * If-None-Match `string`: Used for conditional request, to retrieve data only if the given Etag value does not match

#### Output
* output `object`

### unsecured_sme_loans.get
Gets a list of all `Unsercured SME Lending` objects.


```js
openbanking_org_uk.unsecured_sme_loans.get({}, context)
```

#### Input
* input `object`
  * If-Modified-Since `string`: Used for conditional request, to retrieve data only if modified since a given date
  * If-None-Match `string`: Used for conditional request, to retrieve data only if the given Etag value does not match

#### Output
* output `object`
  * data **required** `array`
    * items `object`: SME Loan
      * ArrearsTreatment `string`: Arrears treatment
      * Benefits **required** `object`: Benefit
        * Benefit **required** `boolean`: Describe  one or more benefits if they exist
        * BenefitGroup `array`
          * items `object`: Benefit Interest Group
      * Currency **required** `array`: Currency of the Account. Default to GBP at present
        * items `string`: Active or Historic Currency Code
      * CustomerAccessChannels **required** `array`: Ways to interact with the bank
        * items `string` (values: Branch, MobileBankingApp, Online, Phone, Post, PostOffice, Text)
      * Eligibility **required** `object`: Eligibility
        * AgeRestricted **required** `boolean`: Indicates a customer's age is part of eligibility criteria
        * AnnualBusinessTurnover `string`: Annual Business Turnover
        * AnnualBusinessTurnoverCurrency `string`: Annual Business Turnover Currency
        * Description **required** `string`: One paragraph detailing the eligibility
        * EligibilityName `string`: Free text description, denotes non standard eligibilities not included in the code list
        * EligibilityNotes `string`: Optional additional notes to supplement the eligibility conditions. Only used for very specific conditions
        * EligibilityType `string` (values: AnyBusinessCustomer, BusinessOnly, CreditCard, CreditScoring, EmailAddress, ExistingCustomers, IdAndV, Mortgage, NoArrearsOnLoan, NoCustomerInArrears, NoOverOverdraftThirtyDays, NoSoleUkAccountOrBankrupt, NTB, NTBBusiness, SoleStudentAccount, SoleUkAccount, StudentsOnly, TwoMonthsOfCourseStart, UCASFulltimeTwoYears): Eligibility type
        * IncomeCondition `string`: Stipulates any particular definition of income that applies to the income eligibility and/or method by which income must paid into the account (eg Salary DD)
        * IncomeTurnoverRelated **required** `boolean`: Indicates if eligibility linked to income
        * MarketingEligibility `array`
          * items `string` (values: ExistingCustomers, NewCustomersOnly, SwitchersOnly, StartUp): Specific eligibility for marketing
        * MaxNumberOfAccounts `string`: Maximum number of the same prodcut the customer may hold
        * MaximumAge `integer`: Maximum age, in years, allowed to hold the account
        * MaximumAgeToOpen `integer`: Maximum age, in years, to open an account
        * MaximumOpeningAmount `boolean`: A maximum amount to be deposited at opening
        * MinIncomeTurnoverPaidIntoAccount `integer`: Minimum Income Amount required to paid into the account
        * MinimumAge `integer`: Minimum age, in years, required to hold an account
        * MinimumDeposit `boolean`: A minimum deposit required to hold this account
        * MinimumIncomeFrequency `string` (values: AcademicTerm, HalfYearly, Monthly, Quarterly, Weekly, Yearly): The frequency that the minimum mentioned before is deposited in the account. Yearly is very important for premium accounts
        * MinimumIncomeTurnoverAmount `string`: Minimum income / Turnover required to hold the product
        * MinimumIncomeTurnoverCurrency `string`: Minimum income / Turnover Currency
        * MinimumOperatingBalance `string`: Minimum Operating Balance
        * MinimumOperatingBalanceCurrency `string`: Minimum Operating Balance currency
        * MinimumOperatingBalanceExists `boolean`: Is there a Minimum Operating Balance?
        * OpeningDepositMaximumAmount `string`: Maximum Amount to be depositing at opening
        * OpeningDepositMaximumCurrency `string`: The currency of the Minimum Amount to be depositing at opening
        * OpeningDepositMinimum `string`: Minimum Amount to be held on account
        * OpeningDepositMinimumCurrency `string`: The currency of the Minimum Amount to be depositing at opening
        * OtherFinancialHoldingRequired **required** `boolean`: Indicates that it is necessary to hold another product with the bank in order to be eligible for this product or feature
        * PreviousBankruptcy **required** `boolean`: Describes if a previous bankruptcy / insolvency disqualfies for this account Details in ELI-280
        * ResidencyRestricted **required** `boolean`: Indicates a customer's residency forms part of the eligibility criteria
        * ResidencyRestrictedRegion `string` (values: UK, EEA, EU, EFTA, GB - ENG, GB - NIR, GB - SCT, GB - WLS, IRL): Indicates a customer must be current resident of a geographic area/country
        * SingleJointIncome `string` (values: Joint, SoleIncome, SoleOrJoint, Turnover): Minimum Income Source. For certain products a minimum income is required. This can be mandated as to the single income or to a joint income. This field describes this
        * ThirdSectorOrganisations **required** `boolean`: Is the product available to operate as a Clubs or Societies account?
      * FeesAndCharges **required** `array`
        * items `object`: Fees And Charges
          * Fees **required** `object`: Fees
          * ProductState **required** `string` (values: FutureMultipleTerms, Promotional, Regular): Describes if the offering is promotional or a description of a future state.
      * LoanItem **required** `array`
        * items `object`: Loan Item
          * CCARegulatedEntity **required** `boolean`
          * DateOfChange `string`: Date of the change if it refers to future terms
          * IsALowInterestRepaymentStartPossible **required** `boolean`
          * IsThisAnInterestOnlyLoan **required** `boolean`
          * LengthPromotionalInDays `integer`: Describes the length if only a duration is given instead of a date in days
          * LoanPricing `array`
          * ProductState **required** `string` (values: FutureMultipleTerms, Promotional, Regular): Describes if the offering is promotional or a description of a future state.
          * StartPromotionOrFutureTerms `string`: Describes the start date
          * StopPromotionOrFutureTerms `string`: Describes the end date
          * WillTheLoanBePaidInTrancheDrawdowns **required** `boolean`
      * MaximumLoanAmount **required** `string`: Maximum loan amount
      * MaximumLoanTerm **required** `integer`: Maximum loan term (Days)
      * MinimumLoanAmount **required** `string`: Minimum loan amount
      * MinimumLoanTerm **required** `integer`: Minimum term (Days)
      * Organisation **required** `object`: Organisation
        * Brand **required** `object`: Brand
          * TrademarkID **required** `string`: The trademark number that has been registered with the Intellectual Property Office. Note: The 2 letter IPO prefix should be omitted
          * TrademarkIPOCode **required** `string` (values: UK, EU): The Intellectual Property Office (IPO) is the official body responsible for intellectual property (IP) rights including patents, designs, trademarks and copyright. (Code: UK or EU only)
        * ParentOrganisation **required** `object`: Parent organisation
          * BIC `string`: The BIC from the organisation
          * LEI `string`: The LEI ID of the organisation
          * OrganisationName **required** `object`: Organisation Name
      * PaymentHoliday **required** `boolean`: Indicates whether a repayment holiday is allowed
      * ProductDescription **required** `string`: Description of the product provided by the parent Organisation
      * ProductIdentifier **required** `string`: Identifier within the parent organisation for the product. Must be unique in the organisation
      * ProductName **required** `string`: The short product or marketing name assigned by the parent organisation
      * ProductSegment **required** `array`
        * items `string` (values: AgricultureSector, AllSegmentsCorporate, Corporate, FixedGroup, FlexibleBusinessLoan, GovernmentScheme, NewCustomersOnly, SmallLoan, SpecialisedSector, SwitchersOnly): Marketing or industry segment that the product is applicable for. Gives the sector or segment that the Loan is designed for
      * ProductTypeName **required** `string` (values: FlexibleBusinessLoan, SmallBusinessLoan, SmeUnsecuredLoan): Descriptive code for the product category
      * ProductURL **required** `array`
        * items `string`
      * TsandCs **required** `array`: URL provided by the parent organisation which redirects to the T&Cs
        * items `string`
  * meta **required** `object`
    * Agreement **required** `string` (values: Use of the APIs and any related data will be subject to the terms of the Open Licence and subject to terms and conditions)
    * LastUpdated **required** `string`
    * License **required** `string` (values: https://www.openbanking.org.uk/open-licence): Open Banking License
    * TermsOfUse **required** `string` (values: https://www.openbanking.org.uk/terms): Open Banking Terms of Use
    * TotalResults **required** `integer`

### unsecured_sme_loans.head
Gets header information on the current set of `Unsercured SME Lending` data


```js
openbanking_org_uk.unsecured_sme_loans.head({}, context)
```

#### Input
* input `object`
  * If-Modified-Since `string`: Used for conditional request, to retrieve data only if modified since a given date
  * If-None-Match `string`: Used for conditional request, to retrieve data only if the given Etag value does not match

#### Output
* output `object`



## Definitions

*This integration has no definitions*
