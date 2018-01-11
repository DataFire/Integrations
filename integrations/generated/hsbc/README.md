# @datafire/hsbc

Client library for HSBC UK

## Installation and Usage
```bash
npm install --save @datafire/hsbc
```
```js
let hsbc = require('@datafire/hsbc').create();

hsbc.open_banking.v1.2.atms.get({}).then(data => {
  console.log(data);
})
```

## Description



## Actions

### open_banking.v1.2.atms.get
This API will return data about all our ATMs and is prepared to the Open Banking standards as defined by the Open Banking Implementation Entity (OBIE) in data dictionary version 1.2.4. It is regulated by the UK Competition and Markets Authority (CMA). Data is only available for the United Kingdom.


```js
hsbc.open_banking.v1.2.atms.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [ATMDefinitionMeta](#atmdefinitionmeta)

### open_banking.v1.2.branches.get
This API will return the branch details for all branches and is prepared to the Open Banking standards as defined by the Open Banking Implementation Entity (OBIE) in data dictionary version 1.2.4. It is regulated by the UK Competition and Markets Authority (CMA). Data is only available for the United Kingdom.


```js
hsbc.open_banking.v1.2.branches.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [BranchDefinitionMeta](#branchdefinitionmeta)

### open_banking.v1.2.business_current_accounts.get
This API will return data about all BCA productsand is prepared to the Open Banking standards as defined by the Open Banking Implementation Entity (OBIE) in data dictionary version 1.2.4. It is regulated by the UK Competition and Markets Authority (CMA). Data is only available for the United Kingdom.


```js
hsbc.open_banking.v1.2.business_current_accounts.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [BCADefinitionMeta](#bcadefinitionmeta)

### open_banking.v1.2.commercial_credit_cards.get
This API will return data about all commercial credit cards productsand is prepared to the Open Banking standards as defined by the Open Banking Implementation Entity (OBIE) in data dictionary version 1.2.4. It is regulated by the UK Competition and Markets Authority (CMA). Data is only available for the United Kingdom.


```js
hsbc.open_banking.v1.2.commercial_credit_cards.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [CCCDefinitionMeta](#cccdefinitionmeta)

### open_banking.v1.2.personal_current_accounts.get
This API will return data about all PCA productsand is prepared to the Open Banking standards as defined by the Open Banking Implementation Entity (OBIE) in data dictionary version 1.2.4. It is regulated by the UK Competition and Markets Authority (CMA). Data is only available for the United Kingdom.


```js
hsbc.open_banking.v1.2.personal_current_accounts.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [PCADefinitionMeta](#pcadefinitionmeta)

### open_banking.v1.2.unsecured_sme_loans.get
This API will return data about all SME lending productsand is prepared to the Open Banking standards as defined by the Open Banking Implementation Entity (OBIE) in data dictionary version 1.2.4. It is regulated by the UK Competition and Markets Authority (CMA). Data is only available for the United Kingdom.


```js
hsbc.open_banking.v1.2.unsecured_sme_loans.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [SMELendingDefinitionMeta](#smelendingdefinitionmeta)

### x_open_banking.v1.2.atms.country.country.get
This extended API will return data about all ATMs in the specified country. It is based-on the Open Banking standards as defined by the Open Banking Implementation Entity (OBIE) in data dictionary version 1.2.4. The extended functionality may not fully adhere to the non-functional requirements of the regulator. Data is only available for the United Kingdom.


```js
hsbc.x_open_banking.v1.2.atms.country.country.get({
  "country": ""
}, context)
```

#### Input
* input `object`
  * country **required** `string`: The ISO country code e.g. &quot;GB&quot;

#### Output
* output [ATMDefinitionMeta](#atmdefinitionmeta)

### x_open_banking.v1.2.atms.country.country.town.town.get
This extended API will return data about all ATMs in the specified town. It is based-on the Open Banking standards as defined by the Open Banking Implementation Entity (OBIE) in data dictionary version 1.2.4. The extended functionality may not fully adhere to the non-functional requirements of the regulator. Data is only available for the United Kingdom.


```js
hsbc.x_open_banking.v1.2.atms.country.country.town.town.get({
  "country": "",
  "town": ""
}, context)
```

#### Input
* input `object`
  * country **required** `string`: The ISO country code e.g. &quot;GB&quot;
  * town **required** `string`: Town name, not case sensitive

#### Output
* output [ATMDefinitionMeta](#atmdefinitionmeta)

### x_open_banking.v1.2.atms.geo_location.lat.latitude.long.longitude.get
This extended API will data about all ATMs within a specified radius (1 to 10 miles) of the specified latitude and longitude. It is based-on the Open Banking standards as defined by the Open Banking Implementation Entity (OBIE) in data dictionary version 1.2.4. The extended functionality may not fully adhere to the non-functional requirements of the regulator. Data is only available for the United Kingdom.


```js
hsbc.x_open_banking.v1.2.atms.geo_location.lat.latitude.long.longitude.get({
  "latitude": "",
  "longitude": "",
  "radius": 0
}, context)
```

#### Input
* input `object`
  * latitude **required** `string`: Positive or negative decimal value in degrees. eg &quot51.50551621597067&quot
  * longitude **required** `string`: Positive or negative decimal value in degrees. eg &quot-0.0180120225995&quot
  * radius **required** `number`: Number of miles (1 to 10) as an integer. Default = 1

#### Output
* output `array`
  * items [ATMDefinition](#atmdefinition)

### x_open_banking.v1.2.atms.postcode.postcode.get
This extended API will return data about all ATMs within a 5 mile radius of the specified postcode. It is based-on the Open Banking standards as defined by the Open Banking Implementation Entity (OBIE) in data dictionary version 1.2.4. The extended functionality may not fully adhere to the non-functional requirements of the regulator. Data is only available for the United Kingdom.


```js
hsbc.x_open_banking.v1.2.atms.postcode.postcode.get({
  "postcode": ""
}, context)
```

#### Input
* input `object`
  * postcode **required** `string`: Letters and numerals only. No spaces or special characters. eg  &quotSW1A1AA&quot

#### Output
* output `array`
  * items [ATMDefinition](#atmdefinition)

### x_open_banking.v1.2.branches.country.country.get
This extended API will return the branch details for all branches in the specified country. It is based-on the Open Banking standards as defined by the Open Banking Implementation Entity (OBIE) in data dictionary version 1.2.4. The extended functionality may not fully adhere to the non-functional requirements of the regulator. Data is only available for the United Kingdom.


```js
hsbc.x_open_banking.v1.2.branches.country.country.get({
  "country": ""
}, context)
```

#### Input
* input `object`
  * country **required** `string`: The ISO country code e.g. &quot;GB&quot;

#### Output
* output [BranchDefinitionMeta](#branchdefinitionmeta)

### x_open_banking.v1.2.branches.country.country.town.town.get
This extended API will return the branch details for all branches in the specified town. It is based-on the Open Banking standards as defined by the Open Banking Implementation Entity (OBIE) in data dictionary version 1.2.4. The extended functionality may not fully adhere to the non-functional requirements of the regulator. Data is only available for the United Kingdom.


```js
hsbc.x_open_banking.v1.2.branches.country.country.town.town.get({
  "country": "",
  "town": ""
}, context)
```

#### Input
* input `object`
  * country **required** `string`: The ISO country code e.g. &quot;GB&quot;
  * town **required** `string`: Town name, not case sensitive

#### Output
* output [BranchDefinitionMeta](#branchdefinitionmeta)

### x_open_banking.v1.2.branches.geo_location.lat.latitude.long.longitude.get
This API will return the branch details for all branches within a specified radius (1 to 10 miles) of the specified latitude and longitude. It is based-on the Open Banking standards as defined by the Open Banking Implementation Entity (OBIE) in data dictionary version 1.2.4. The extended functionality may not fully adhere to the non-functional requirements of the regulator. Data is only available for the United Kingdom.


```js
hsbc.x_open_banking.v1.2.branches.geo_location.lat.latitude.long.longitude.get({
  "latitude": "",
  "longitude": "",
  "radius": 0
}, context)
```

#### Input
* input `object`
  * latitude **required** `string`: Positive or negative decimal value in degrees. eg &quot51.50551621597067&quot
  * longitude **required** `string`: Positive or negative decimal value in degrees. eg &quot-0.0180120225995&quot
  * radius **required** `number`: Number of miles (1 to 10) as an integer. Default = 1

#### Output
* output `array`
  * items [BranchDefinition](#branchdefinition)

### x_open_banking.v1.2.branches.postcode.postcode.get
This extended API will return the branch details for all branches within a 5 mile radius of the specified postcode. It is based-on the Open Banking standards as defined by the Open Banking Implementation Entity (OBIE) in data dictionary version 1.2.4. The extended functionality may not fully adhere to the non-functional requirements of the regulator. Data is only available for the United Kingdom.


```js
hsbc.x_open_banking.v1.2.branches.postcode.postcode.get({
  "postcode": ""
}, context)
```

#### Input
* input `object`
  * postcode **required** `string`: Letters and numerals only. No spaces or special characters. eg. &quotSW1A1AA&quot

#### Output
* output `array`
  * items [BranchDefinition](#branchdefinition)

### x_open_banking.v1.2.branches.sortcode.sortcode.get
This extended API will return the branch details for a branch specified by its sort code. It is based-on the Open Banking standards as defined by the Open Banking Implementation Entity (OBIE) in data dictionary version 1.2.4. The extended functionality may not fully adhere to the non-functional requirements of the regulator. Data is only available for the United Kingdom.


```js
hsbc.x_open_banking.v1.2.branches.sortcode.sortcode.get({
  "sortcode": ""
}, context)
```

#### Input
* input `object`
  * sortcode **required** `string`: 6 digit number with no spaces or special characters. eg. &quot400003&quot

#### Output
* output [BranchDefinitionMeta](#branchdefinitionmeta)

### x_open_banking.v1.2.business_current_accounts.segment.segment.get
This extended API will return data about all BCA products for the specified segment. It is based-on the Open Banking standards as defined by the Open Banking Implementation Entity (OBIE) in data dictionary version 1.2.4. The extended functionality may not fully adhere to the non-functional requirements of the regulator. Data is only available for the United Kingdom.


```js
hsbc.x_open_banking.v1.2.business_current_accounts.segment.segment.get({
  "segment": ""
}, context)
```

#### Input
* input `object`
  * segment **required** `string`: Segment name from this list&#58; &quot;Basic&quot;, &quot;Business&quot;, &quot;General&quot;, &quot;Graduate&quot;, &quot;International&quot;, &quot;Packaged&quot;, &quot;Personal&quot;, &quot;Premium&quot;, &quot;Reward&quot;, &quot;SME&quot;, &quot;Student&quot;, &quot;YoungAdult&quot;, &quot;Youth&quot;.

#### Output
* output [BCADefinitionMeta](#bcadefinitionmeta)

### x_open_banking.v1.2.commercial_credit_cards.segment.segment.get
This extended API will return data about all commercial credit cards products for the specified segment. It is based-on the Open Banking standards as defined by the Open Banking Implementation Entity (OBIE) in data dictionary version 1.2.4. The extended functionality may not fully adhere to the non-functional requirements of the regulator. Data is only available for the United Kingdom.


```js
hsbc.x_open_banking.v1.2.commercial_credit_cards.segment.segment.get({
  "segment": ""
}, context)
```

#### Input
* input `object`
  * segment **required** `string`: Segment name from this list&#58 &quot;Cashback&quot;, &quot;Corporate&quot;, &quot;General&quot;, &quot;Reward&quot;, &quot;SME&quot;.

#### Output
* output [CCCDefinitionMeta](#cccdefinitionmeta)

### x_open_banking.v1.2.personal_current_accounts.segment.segment.get
This extended API will return data about all PCA products for the specified segment. It is based-on the Open Banking standards as defined by the Open Banking Implementation Entity (OBIE) in data dictionary version 1.2.4. The extended functionality may not fully adhere to the non-functional requirements of the regulator. Data is only available for the United Kingdom.


```js
hsbc.x_open_banking.v1.2.personal_current_accounts.segment.segment.get({
  "segment": ""
}, context)
```

#### Input
* input `object`
  * segment **required** `string`: Segment name from this list&#58; &quot;Basic&quot;, &quot;Business&quot;, &quot;General&quot;, &quot;Graduate&quot;, &quot;International&quot;, &quot;Packaged&quot;, &quot;Personal&quot;, &quot;Premium&quot;, &quot;Reward&quot;, &quot;SME&quot;, &quot;Student&quot;, &quot;YoungAdult&quot;, &quot;Youth&quot;.

#### Output
* output [PCADefinitionMeta](#pcadefinitionmeta)

### x_open_banking.v1.2.unsecured_sme_loans.segment.segment.get
This extended API will return data about all SME lending products for the specified segment. It is based-on the Open Banking standards as defined by the Open Banking Implementation Entity (OBIE) in data dictionary version 1.2.4. The extended functionality may not fully adhere to the non-functional requirements of the regulator. Data is only available for the United Kingdom.


```js
hsbc.x_open_banking.v1.2.unsecured_sme_loans.segment.segment.get({
  "segment": ""
}, context)
```

#### Input
* input `object`
  * segment **required** `string`: Segment name from this list&#58; &quot;AgricultureSector&quot;, &quot;AllSegmentsCorporate&quot;, &quot;Corporate&quot;, &quot;FixedGroup&quot;, &quot;FlexibleBusinessLoan&quot;, &quot;GovernmentScheme&quot;, &quot;NewCustomersOnly&quot;, &quot;SmallLoan&quot;, &quot;SpecialisedSector&quot;, &quot;SwitchersOnly&quot;.

#### Output
* output [SMELendingDefinitionMeta](#smelendingdefinitionmeta)



## Definitions

### ATMDefinition
* ATM `object`
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
        * LegalName **required** `string`: Legal Name of the organisation
  * SiteID `string`: Site identifying code, where ATM is located
  * SiteName `string`: Site identifying name, where ATM is located
  * SupportedLanguages **required** `array`: Languages that the ATM supports
    * items `string`: must be ISO 693-2 codes

### ATMDefinitionMeta
* ATMDefinitionMeta `object`
  * data **required** `array`
    * items [ATMDefinition](#atmdefinition)
  * meta **required** [MetaDefinition](#metadefinition)

### BCADefinition
* Business current account `object`: Business current account
  * AccessChannels **required** `array`: Ways to interact with the bank when managing account
    * items `string` (values: ATM, Branch, BusinessCommercialCentre, CallCentre, MobileApps, MobileBanking, Online, Phone, Post, PostOffice, RelationshipManager, Text): Channel
  * Benefits **required** `object`: Benefit
    * Benefit **required** `boolean`: Describe  one or more benefits if they exist
    * BenefitGroup `array`
      * items `object`: Benefit Interest Group
        * BenefitItem **required** `object`: Benefit Item
          * BenefitDetail `array`
            * items `object`: Benefit detail
              * BenefitDescription `string`: A textual explanation of what the benefit is
              * BenefitID `string`: Unique benefit identifier per organisation
              * BenefitName `string`: The name of the benefit
              * BenefitType `string`: Type that represents the nature of the benefit
              * BenefitValue `string`: The value or values permissible for a specific benefit for an individual product representing a product characteristic
              * Counter `integer`: Counter for the criteria (e.g. number of DD)
              * CriteriaType `array`
                * items `string` (values: CashDeposit, Deposit, DirectDebit, InitialDeposit, InternetLogon, MobileLogon, RegularDeposit): Criteria that is required in order to be eligible for the Benefit
              * DefaultToAccounts `boolean`: Is the benefit part of the default account
              * MaximumCriteria `string`: Maximum amount for the criteria
              * MinimumCriteria `string`: Minimum amount for the criteria
              * PromotionEndDate `string`: If the benefit is temporal the end date is when the benefit is no longer applicable
              * PromotionStartDate `string`: If the benefit is temporal the start date is when the benefit comes into effect
          * DateOfChange `string`: Date of the change if it refers to future terms
          * LengthPromotionalInDays `integer`: Describes the length if only a duration is given instead of a date in days
          * StartPromotionOrFutureTerms `string`: Describes the start date
          * StopPromotionOrFutureTerms `string`: Describes the end date
        * BenefitSubType `string` (values: FutureMultipleTerms, Promotional, Regular): Benefit Subtype Code
  * CAPricing **required** `array`
    * items `object`: Card Price
      * CAPricingItem **required** `object`: Card Pricing
        * DateOfChange `string`: Date of the change if it refers to future terms
        * ExchangeRateAdjustment `string`: The margin added, by certain card issuers, to the scheme rate in order to arrive at the exchange rate qouted as the reference exchange rate to the cardholder
        * LengthPromotionalInDays `integer`: Describes the length if only a duration is given instead of a date
        * StartPromotionOrFutureTerms `string`: Describes the start date
        * StopPromotionOrFutureTerms `string`: Describes the end date
      * ProductSubType **required** `string` (values: FutureMultipleTerms, Promotional, Regular): Describes if the offering is promotional, regular or a description of a future state
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
        * CreditInterestItem **required** `object`: Credit Interest item
          * CalculationFrequency `string` (values: Month, Week, Year): How often is interest applied to account
          * CalculationMethod `string` (values: Banded, Tiered, Whole): Method for interest calculation
          * DateOfChange `string`: Date of the change if it refers to future terms
          * EndDate `string`: If interest is charged on a specific date range as end date (often used for promotion)
          * FixedInterestLength `integer`: Fixed interest length in days
          * InterestNotes `string`: Additional notes to supplement the interest details
          * InterestRateType `string` (values: Fixed, Variable): Credit Interest Payment Rate Type
          * InterestTiers `array`
            * items `object`: Credit Interest Tiers
              * APRAERRate `string`: AER or APR Rate for comparison
              * DailyChargeForMaximum `string`: Special charge on tiered overdraft
              * DailyChargeForMinimum `string`: Special charge on tiered overdraft
              * InterestTier `string`: Identifier for the tier
              * Rate `string`: Rate being paid by the bank (gross)
              * RateComparisonType `string` (values: APR, AER, Gross, Net, RepApr): Rate Comparison Type
              * TierValueMaximum `string`: Max Value of interst tier
              * TierValueMinimum `string`: Lower value of interest tier
          * LengthPromotionalInDays `integer`: Describes the length if only a duration is given instead of a date
          * PaymentMethod `string` (values: Compound, PayAway, SelfCredit, SimpleInterest): Credit Interest Payment Method Code
          * StartDate `string`: If interest is charged on a specific date range as start date (often used for promotion)
          * StartPromotionOrFutureTerms `string`: Describes the start date
          * StopPromotionOrFutureTerms `string`: Describes the end date
        * InterestTierSubType `string` (values: FutureMultipleTerms, Promotional, Regular): Describes if the offering is promotional, regular or a description of a future state
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
        * items `object`: Feature Details
          * CriteriaType `string`: Criteria that is required in order to be eligible for the feature
          * DateOfChange `string`: Date of the change if it refers to future terms
          * FeatureDescription `string`: A textual explanation of what the feature
          * FeatureName `string`: The name of the feature
          * FeatureSubType `string` (values: FutureMultipleTerms, Promotional, Regular)
          * FeatureType `string`: Type that represents the nature of the feature
          * FeatureValue `string`: The value or values permissible for a specific feature for an individual product representing a product characteristic
          * LengthPromotionalInDays `integer`: Describes the length if only a duration is given instead of a date
          * StartPromotionOrFutureTerms `string`: Describes the start date
          * StopPromotionOrFutureTerms `string`: Describes the end date
      * LengthPromotionalInDays `integer`: Describes the length if only a duration is given instead of a date
      * ProductSubType `string` (values: FutureMultipleTerms, Promotional, Regular): Describes if the offering is promotional, regular or a description of a future state
      * StartPromotionOrFutureTerms `string`: Describes the start date
      * StopPromotionOrFutureTerms `string`: Describes the end date
  * FeesAndCharges **required** `array`
    * items `object`: Fees And Charges
      * Fees **required** `object`: Fees
        * DateOfChange `string`: Date of the change if it refers to future terms
        * FeeDetails **required** `array`
          * items `object`: Fee Details
            * FeeDetail **required** `object`: Fee Detail
              * DateOfChange `string`: Date of the change if it refers to future terms
              * FeeSubDetails **required** `object`: Fee Sub Details
                * FeeAmount `string`: Fee in GBP
                * FeeFrequency **required** `string` (values: AcademicTerm, AccountClosing, AccountOpening, AtTimeOfLoanRepayment, ChargingPeriod, Daily, EveryFiveBusinessDays, Item, Monthly, OnAccountAnniversary, PerHour, PerOccurrence, PerSheet, PerTransactionAmount, PerTransactionPercentage, Quarterly, SixMonthly, StartOfLoan, StatementMonthly, Weekly, Yearly): Triggering frequency of the fee
                * FeeHigherTier `integer`: Higher occurrence / range boundary e.g. For returned cheques this could be 10, which means the first 10 returned cheque fits into this range
                * FeeLowerTier `integer`: Lower occurrence / range boundary e.g. For returned cheques this could be 0, which means the first returned cheque fits into this range
                * FeeMax `string`: Fee in GBP
                * FeeMin `string`: Fee in GBP
                * FeeRate `string`: % Rate
                * FeesAndChargesNotes `string`: Supplementary information for fees and charges
                * Negotiable **required** `boolean`: Indicates that this Fee Rate or Fee Amount is negotiable based on risk or other factor
                * RepresentativeRate `string`: Representative Rate
              * FeeType **required** `string` (values: ATMDonation, ATMDeposATMPaidIn, ReportCertBalance, ATMAbroadConVisaCredit, ATMAbroadConVisaDebit, ATMCardnetEnvIn, ATMCashGroupATMCreditCard, ATMCashNonGroupATMCredittcard, ATMCashGroupATMDebitCard, ATMCashNonGroupATMDebitcard, ATMConGroupATM, ATMAbroad, ATMForeignCashDebCard, ATMAbroadGoldVisaDebit, ATMSpainCashCard, ATMSpainDebitCard, ATMSpainConversionDebitCard, ATMSpainConversionCashCard, ATMNonSterlingWithdrawal, ATMAbroadVisaCredit, ATMAbroadVisaDebit, ATMAbroadConVisaGoldDebit, ATMWidthdrawCash, BACSOnLineAncilliary, BACSBatch, BACSOnLineFile, BACSFileItem, BACSOnLineSetup , BACSItem, BACSItemInterbranch, BACSBulkBatch, BACSOnLineOverlimit, BACSOnLinePayment, BACSRecallItem, BACSOnLineService, BACSBulkInternet, BACSTELDirDebSmartCard, BACSTELDirDebWebInit, BACSTELirDebWebInit, BACSTELDirDebOverlimit, BACSTELDirDebPayment, BACSTELDirDebService, BACSTELDirDebAncilliary, BACSDirectItemProfile, BACSTELAncilliary, BACSTELSmartCard, BACSTELFile, BACSTELSetup , BACSTELOverlimit, BACSTELPayment, BACSTELService, CHAPSOutBranch, CHAPSCancellation, CHAPSOutOnlineDepositAcc, CHAPSIn, CHAPSOutInterBank, CHAPSInterBank, CHAPSOutPost, CHAPSOutInterBranch, CHAPSOut, CHAPSOutOnline, CHAPSandForeignPay, CHAPSOutManual, CardCardReplacement, DraftsCounter, DraftsBankers, DraftsIntlPayableAbroad, DraftsLostStolen, CardPersonalisedCard, DraftsIntlStoppedCancelled, EuroChqXLess, EuroChqXPlus, FPSOutFutureDated, FPSOutImmediate, FPSOut, FPSOutOwn, FPSInBranch, FPSUKPayUrgent, LegalArticlesReport, LegalSealing, LegalBondAndGuarantee, LegalCourtOrder, LegalCoSearch, LegalDepositAssignment, LegalGuaranteePrep, LegalLifePolicyPrepCo, LegalLifePolicyPrepPersonal, LegalPriorityPariPassu, LegalSubordinationAgreement, DirDebDirectDebitAdmin, DirDebDirectDebitCancel, IntlPayBIBForeignLimit, IntlPayCreditTransCust, IntlPayCreditTransNonCust, IntlPayUrgentPaymentForeign, IntlPayExpressMoneyMover, IntlPayEEAPayUrgent, IntlPayIrishPayUrgent, IntlPayEEAPay, IntlPayForeignIn1CPlus, IntlPayForeignPaymentInUKAcc, IntlPayForeignCharge, IntlPayForeignCancellation, IntlPayForeignStandardEUEuroBIC, IntlPayFXFeeRate, IntlPayForeignInternet, IntlPayForeign, IntlPayForeignInbound, IntlPayFXPaymentOut, IntlPayForeignInSub1C, IntlPayFXRate, IntlPayForeignStandardEUEuroNoBIC, IntlPayFXPaymentOutIR, IntlPayFXFee, IntlPayPurchaseNonSterling, IntlPayPostPaymentForeign, IntlPayPurchaseRateNonSterling, IntlPayPaymentTracing, IntlPayStandardMoneyMover, IntlPayMT101Transaction, IntlPayTransNonSterling, IntlPayTransRateNonSterling, IntlPayForeignUrgentEUEuroBIC, IntlPayForeignUrgentEUEuroNoBIC, IntlPayUrgentPaymentGroup, IntlPayUrgentPaymentUK, IntlPayUSAPayUrgent, IntlPayCurrencyPurchase, IntlPayWorldpayPayment, IntlPayCurrencyWithdraw, InvPayBankDetailsWrong, InvPayForeignBCNR, InvPayForeignRecall, InvGeneralInq, InvOldInstruction, InvPayPaymentRecall, InvPayReturnDebitXVLess, InvPayReturnDebitXVPlus, InvPayStopPayment, InvPayStandingOrdUnpaid, SafeKeepAccess, SafeKeepDeedMedium, SafeKeepingEnvelope, SafeKeepingInspection, SafeKeepingLargeItem, SafeKeepMultipleItems, SafeKeepingParcel, SafeKeepDeedSmall, SafeKeepOneItem, SafeKeepSafeCustody, LoanArrangementFeePC, LoanArrangement, LoanEarlyRepayment, LoanLatePayment, LoanSMEUnsecuredLoan, LoanTieredArrangement, NightSafeNightSafeBankOpen, NightSafeCreditSub5K, NightSafeNightSafe, NightSafeNightSafePaidIn, OverdraftAnnualReview, OverdraftTempOverdraft, OverdraftUnauthorisedBorrowing, POPostOfficeCounterCredit, POPostOfficeCashCredit, POPostOfficeCashOut, POPostOfficeWithdrawal, ChqBookTheftLossAllStopped, ChqIssuedCurrencyAcc, ChqCopy, ChqDraft, ChqIn, ChqDraftSterling, ChqOutIssued, ChqSpecialChqPresentation, ChqCounterCheque, ChqChequeswithStatement, ChqStopped, ChqTrans, ChqDraftFX, ChqForeignCourier, ChqForeignNegTenThou, ChqForeignNegHundred, ChequeForeignBankDivi, ChqForeignNegFiftyThou, ChqPensionCheque, ChequeForeignOtherDivi, ChqForeignNegFiveThou, ChqForeignNegMax, ChqForeignGBPMMDPlus, ChqGiftCheque, ChqCounterLodgement, ChqCashDropLodgement, ChqChequePhotocopy, ChqPostOfficeCredit, ChqPostOfficeChequeCollected, ChqChequeRetrieval, ChqReconcilliationPerTrans, ChqSpecialPresentationCount, ChqSpecialPresentationPTT, ChqUnpaidCharge, ChqUnpaidTransIn, ChqUnpaidTransOut, ChqUnpaidCheque, ReportAuditLetter, ReportFAXAdviceAdditional, ReportTelAdviceAdditional, ReportCreditHistory, ReportCertInterestDuplicate, ReportCertInterest, ReportCreditHistoryAdditionalInYear, ReportForeignStatusEnqElec, ReportForeignStatusEnq, ReportCashBackorInterestAnal, ReportStatementChqDaily, ReportStatementChqFortnightly, ReportStatementChqMonthly, ReportStatementChqWeekly, ReportStatementAndDiviChq, ReportReference, ReportReferralItem, ReportStatementByATM, ReportStatementByBranch, ReportStatementCopyRegular, ReportStatusEnquiry, ReportStatementFrequent, ReportStatementMonthly, ReportStatementCopy1, ReportStatementToBranch, ReportSMSTextMiniStatementorAlert, ReportStatementFortnightly, ReportSMSTextMiniStatementWoM, ReportSMSTextAlertBalance, ReportSMSTextAlert, ReportTaxCert, ReportWeeklyStatement, ReportTextMessageBanking, SEPACancellation, SEPABranch, SEPACredit, SEPADirectDebit, SEPAIn, SEPAEuro, SEPAOut, SEPAUnpaid, SEPAWinbitsAnnual Service, SEPAWinbitsTransaction, TransBillPaymentBranch, TransBillCollect, TransTelephoneBillPayment, TransBankPayment, TransBillPaymentTelephone, TransCorrespondentBankFee, TransCreditTransferUKDifferent, TransCreditTransferUKSame, TransCredit, TransCreditTransfer, TransBranchCredit, TransDebit, TransDebCardDeb, TransUKDirDeb, TransManualDeb, TransBuyForeignWithGBP, TransGoodValueReq, TransSWIFTOutUKForeign, TransInconpleteInstruction, TransManualEntries, TransManualTrans, TransNonSterling, TransPOSSaleForeign, TransPriPaymentPost, TransPOSSaleUK, TransReturnPayment, TransReconciliationPerTrans, TransStandingOrdAdmin, TransStandingOrd, TransStandingOrdManPay, TransTravellersChqOtherBank, TransTelBusiPriPaymentForeignToUKAcc, TransTeleItem, TransTelBusiPriPaymentToGrpAcc, TransTravellersChqRate, TransTransferExGroup, TransUnauthorisedPaidTrans, TransUrgentPaymentPostal, TransUnpaidTrans, TransTelBusiPriPaymentToNonGrpAcc, TransSWIFTOutNonEEASterling, AutoAutoCredit, AutoAutomatedEntries, AutoAutoCreditPhoneInet, AutoAutomatedTrans, AutoDebitCardCommercial, AutoFPSAutoCredit, VisaConvertAbroadForeign, VisaBureauDeChange, VisaTravellersChqorCurrency, OnlineInternetBillPayment, OnlineBusinessOnlineEuroPayment, OnlineBusinessOnlineUrgentEuroPayment, OnlineBusinessOnlineForeignPayment, OnlineInterbankTransfer, OnlineInterbankPerTransfer, OnlineInterbranchTransfer, OnlineInterbranchPerTransfer, OnlineSubscriptionMonthly, OnlineBankingPayment, OnlineBankingSubscription, OnlinePOSSale, OnlinePersonalCustAncillarys, OnlinePersonalCustService, OnlinePersonalCustOverlimits, OnlineReplacementCardReader, OnlinePersonalCustSetUp, OnlinePersonalCustTransaction, OnlinePaymentinGBPtoUK, OnlineUrgentPayment, OnlinePaymentinUSDtoUS, OnlineBulkDirectDebSterling, ForeignChqSent, ForeignChqSelf, ForeignChqEncashment, ForeignFXInwardsCust, ForeignFXTransfersROI, ForeignFXForwardTrans, ForeignFXTransfersBOI, ForeignExMaintenance, ForeignFXInwardsNonCust, ForeignFXOutwards, ForeignPurchase, ForeignStatusRep, ForeignChqDraft, ForeignChqCLess, ForeignChqMLess, ForeignChqOther, ForeignChqMPlus, ForeignChqCCC, ServiceCAccountFee, ServiceCAccountFeeMonthly, ServiceCAccountFeeQuarterly, ServiceCBalanceHandling, ServiceCFixedTariff, ServiceCBusiDepAccBreakage, ServiceCMonitorDaily, ServiceCManagementFee, ServiceCMinimumMonthlyFee, ServiceCMonitorMonthly, ServiceCMonitorWeekly, ServiceCSecurityFee, ServiceCMT940AccountFirst, ServiceCMT940AccountSubsequent, ServiceCOther, CounterCoinHandling, CounterCashIn, CounterCashInNotUs, CounterCashOut, CounterCashX, CounterForeignCashMax, CounterForeignNoteHandling, CounterForeignCashOut, CounterCashFeeRate, CounterForeignCashOutTx, CounterCounterLodgement, CounterCashDropLodgement, CounterNotesLodged, CounterNotesOut, CounterCashInOwn, CounterPaidTrans, CounterCashFeePercent): A description of the Fee type
              * LengthPromotionalInDays `integer`: Describes the length if only a duration is given instead of a date
              * Other `string`: Describe other fee type
              * StartPromotionOrFutureTerms `string`: Describes the start date
              * StopPromotionOrFutureTerms `string`: Describes the end date
            * FeeSubType **required** `string` (values: FutureMultipleTerms, Promotional, Regular): Fee Sub Type code
        * FeeHigherTier `integer`: Higher occurrence / range boundary e.g. For returned cheques this could be 10, which means the first 10 returned cheque fits into this range
        * FeeLowerTier `integer`: Lower occurrence / range boundary e.g.. For returned cheques this could be 0, which means the first returned cheque fits into this range
        * LengthPromotionalInDays `integer`: Describes the length if only a duration is given instead of a date
        * StartPromotionOrFutureTerms `string`: Describes the start date
        * StopPromotionOrFutureTerms `string`: Describes the end date
      * ProductSubType **required** `string` (values: FutureMultipleTerms, Promotional, Regular): Describes if the offering is promotional, regular or a description of a future state
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
        * LegalName **required** `string`: Legal Name of the organisation
  * Overdraft `array`
    * items `object`: Overdraft
      * AnnualRenewalFee `string`: Fee payable per term for overdraft
      * AnnualRenewalRate `string`: Rate to renew overdraft
      * DateOfChange `string`: Date of the change if it refers to future terms
      * InterestProductSubType `string` (values: FutureMultipleTerms, Promotional, Regular): Describes if the offering is promotional, regular or a description of a future state
      * LengthPromotionalInDays `integer`: Describes the length if only a duration is given instead of a date
      * MaximumDailyOverdraftCharge `string`: Maximum daily overdraft charge
      * MaximumMonthlyOverdraftCharge `string`: Maximum monthly overdraft charge
      * MinimumFee `string`: Minimum overdraft fee
      * MinimumRenewalFee `string`: The minimum amount charged for the annual renewal
      * MinimumSetupFee `string`: The minimum amount charged for an overdraft set up
      * OverdraftPricing `object`: Overdraft Pricing
        * ApplicableTo **required** `object`: Personal Interest Tiers
          * InterestTierPersonal `string`: Identifier for the tier
          * InterestTierSME `string` (values: £5000, £10000, £15000, £20000, £25000, Other, TierMaximum, TierMinimum): Identifier for tier only where it has been supplied under Part 8 (article 32 or the CMA order), value reflects upper tier value
        * BufferAmount `string`: Amount on overdraft that is prearranged
        * DailyCharge `string`: Maximum daily overdraft charge
        * IndicativeRate `string`: Indicative Rate that the client will get
        * InterestApplicationFrequency `string` (values: Annual, Daily, Monthly, Quarterly, StatementDate): When the interest is applied
        * InterestNotes `string`: Optional additional notes to supplement the interest details
        * InterestRate `string`: interest rate applied to tier
        * InterestRateCalculationFrequency `string` (values: Annual, Daily, Monthly, Quarterly): Frequency at which interest is calculated and accrued
        * InterestRateEARpa `string`: Interest rate applied to tier
        * ItemCharge `string`: Arranged overdraft item charge
        * MinUnarrangedOverdraftAmount `string`: Minimum Unarranged Overdraft Amount if applicable
        * MonthlyCharge `string`: Maximum monthly overdraft charge
        * OtherCharge `string`: Other flat charge levied when overdrawn (Arranged)
        * OverdraftNotes `string`: Supplementary notes for overdrafts
        * RatesAreNegotiable `string` (values: No, Yes): Value that expresses if the rates are negotiable
        * RepresentativeRate `string`: Interest rate at AER
        * Tiers **required** `array`
          * items `object`: Tiers
            * TierType `object`: Tier Type
              * ArrangedOverdraftInterestTier `string`: Arranged overdraft interest tier
              * UnarrangedOverdraftInterestTier `string`: Unarranged overdraft interest tier
            * TierValueMaximum `string`: Max Value of interest tier
            * TierValueMinimum `string`: Lower value of interest tier
        * TotalOverdraftChargeAmount `string` (values: Banded, Tiered, Whole): All charges that a customer could incur as a result of exceeding or attempting to exceed a Pre-agreed credit limit
      * OverdraftType `string` (values: Committed, OnDemand): Opposite of repayable on demand
      * RenewalRate `string`: Rate to renew overdraft
      * ReviewFee `string`: Fee to review overdraft limit
      * SetUpFeesAmount `string`: Fees to set up the overdraft
      * SetUpFeesRate `string`: Rate to set up the overdraft
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

### BCADefinitionMeta
* BCADefinitionMeta `object`
  * data **required** `array`
    * items [BCADefinition](#bcadefinition)
  * meta **required** [MetaDefinition](#metadefinition)

### BranchDefinition
* Branch `object`
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
        * LegalName **required** `string`: Legal Name of the organisation
  * ParkingLocation `string`: Place where the mobile branch is located, such as between the news agent and the church.
  * PlannedBranchClosure `array`
    * items `object`: Planned branch closure
      * EndDate `string`: Date when a branch is due to re-open following temporary closure
      * StartDate `string`: Date when a branch is due to close temporarily or permanently
  * StopName `string`: Name of the stop of the mobile branch
  * TelephoneNumber **required** `string`: Collection of information that identifies a phone number, as defined by telecom services.

### BranchDefinitionMeta
* BranchDefinitionMeta `object`
  * data **required** `array`
    * items [BranchDefinition](#branchdefinition)
  * meta **required** [MetaDefinition](#metadefinition)

### CCCDefinition
* CCCDefinition `object`: Commercial Credit Card
  * Benefits **required** `object`: Benefit
    * Benefit **required** `boolean`: Describe  one or more benefits if they exist
    * BenefitGroup `array`
      * items `object`: Benefit Interest Group
        * BenefitItem **required** `object`: Benefit Item
          * BenefitDetail `array`
            * items `object`: Benefit detail
              * BenefitDescription `string`: A textual explanation of what the benefit is
              * BenefitID `string`: Unique benefit identifier per organisation
              * BenefitName `string`: The name of the benefit
              * BenefitType `string`: Type that represents the nature of the benefit
              * BenefitValue `string`: The value or values permissible for a specific benefit for an individual product representing a product characteristic
              * Counter `integer`: Counter for the criteria (e.g. number of DD)
              * CriteriaType `array`
                * items `string` (values: CashDeposit, Deposit, DirectDebit, InitialDeposit, InternetLogon, MobileLogon, RegularDeposit): Criteria that is required in order to be eligible for the Benefit
              * DefaultToAccounts `boolean`: Is the benefit part of the default account
              * MaximumCriteria `string`: Maximum amount for the criteria
              * MinimumCriteria `string`: Minimum amount for the criteria
              * PromotionEndDate `string`: If the benefit is temporal the end date is when the benefit is no longer applicable
              * PromotionStartDate `string`: If the benefit is temporal the start date is when the benefit comes into effect
          * DateOfChange `string`: Date of the change if it refers to future terms
          * LengthPromotionalInDays `integer`: Describes the length if only a duration is given instead of a date in days
          * StartPromotionOrFutureTerms `string`: Describes the start date
          * StopPromotionOrFutureTerms `string`: Describes the end date
        * BenefitSubType `string` (values: FutureMultipleTerms, Promotional, Regular): Benefit Subtype Code
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
        * LegalName **required** `string`: Legal Name of the organisation
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

### CCCDefinitionMeta
* CCCDefinitionMeta `object`
  * data **required** `array`
    * items [CCCDefinition](#cccdefinition)
  * meta **required** [MetaDefinition](#metadefinition)

### ErrorDefinition400
* 400 Error object `object`
  * description **required** `string` (values: You have sent a request which could not be understood.)
  * status **required** `string` (values: 400)
  * title **required** `string` (values: Bad request)

### ErrorDefinition408
* 408 Error object `object`
  * description **required** `string` (values: Your client has failed to submit a request, and a timeout has occurred.)
  * status **required** `string` (values: 408)
  * title **required** `string` (values: Client timeout)

### ErrorDefinition429
* 429 Error object `object`
  * description **required** `string` (values: You have requested this resource too often. Slow down.)
  * status **required** `string` (values: 429)
  * title **required** `string` (values: Too many requests)

### ErrorDefinition500
* 500 Error object `object`
  * description **required** `string` (values: An error occurred on the server. No further information is available.)
  * status **required** `string` (values: 500)
  * title **required** `string` (values: Internal server error)

### ErrorDefinition503
* 503 Error object `object`
  * description **required** `string` (values: The service is temporarily unavailable.)
  * status **required** `string` (values: 503)
  * title **required** `string` (values: Service temporarily unavailable)

### MetaDefinition
* Meta data `object`
  * Agreement **required** `string` (values: Use of the APIs and any related data will be subject to the terms of the Open Licence and subject to terms and conditions)
  * LastUpdated **required** `string`
  * License **required** `string` (values: https://openbanking.org.uk/open-licence): Open Banking License
  * TermsOfUse **required** `string` (values: https://openbanking.org.uk/terms): Open Banking Terms of Use
  * TotalResults **required** `integer`

### PCADefinition
* PCADefinition `object`: Personal Current Account
  * AccessChannels **required** `array`: Ways to interact with the bank when managing account
    * items `string` (values: ATM, Branch, BusinessCommercialCentre, CallCentre, MobileApps, MobileBanking, Online, Phone, Post, PostOffice, RelationshipManager, Text): Channel
  * Benefits **required** `object`: Benefit
    * Benefit **required** `boolean`: Describe  one or more benefits if they exist
    * BenefitGroup `array`
      * items `object`: Benefit Interest Group
        * BenefitItem **required** `object`: Benefit Item
          * BenefitDetail `array`
            * items `object`: Benefit detail
              * BenefitDescription `string`: A textual explanation of what the benefit is
              * BenefitID `string`: Unique benefit identifier per organisation
              * BenefitName `string`: The name of the benefit
              * BenefitType `string`: Type that represents the nature of the benefit
              * BenefitValue `string`: The value or values permissible for a specific benefit for an individual product representing a product characteristic
              * Counter `integer`: Counter for the criteria (e.g. number of DD)
              * CriteriaType `array`
                * items `string` (values: CashDeposit, Deposit, DirectDebit, InitialDeposit, InternetLogon, MobileLogon, RegularDeposit): Criteria that is required in order to be eligible for the Benefit
              * DefaultToAccounts `boolean`: Is the benefit part of the default account
              * MaximumCriteria `string`: Maximum amount for the criteria
              * MinimumCriteria `string`: Minimum amount for the criteria
              * PromotionEndDate `string`: If the benefit is temporal the end date is when the benefit is no longer applicable
              * PromotionStartDate `string`: If the benefit is temporal the start date is when the benefit comes into effect
          * DateOfChange `string`: Date of the change if it refers to future terms
          * LengthPromotionalInDays `integer`: Describes the length if only a duration is given instead of a date in days
          * StartPromotionOrFutureTerms `string`: Describes the start date
          * StopPromotionOrFutureTerms `string`: Describes the end date
        * BenefitSubType `string` (values: FutureMultipleTerms, Promotional, Regular): Benefit Subtype Code
  * CAPricing **required** `array`
    * items `object`: Card Price
      * CAPricingItem **required** `object`: Card Pricing
        * DateOfChange `string`: Date of the change if it refers to future terms
        * ExchangeRateAdjustment `string`: The margin added, by certain card issuers, to the scheme rate in order to arrive at the exchange rate qouted as the reference exchange rate to the cardholder
        * LengthPromotionalInDays `integer`: Describes the length if only a duration is given instead of a date
        * StartPromotionOrFutureTerms `string`: Describes the start date
        * StopPromotionOrFutureTerms `string`: Describes the end date
      * ProductSubType **required** `string` (values: FutureMultipleTerms, Promotional, Regular): Describes if the offering is promotional, regular or a description of a future state
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
        * CreditInterestItem **required** `object`: Credit Interest item
          * CalculationFrequency `string` (values: Month, Week, Year): How often is interest applied to account
          * CalculationMethod `string` (values: Banded, Tiered, Whole): Method for interest calculation
          * DateOfChange `string`: Date of the change if it refers to future terms
          * EndDate `string`: If interest is charged on a specific date range as end date (often used for promotion)
          * FixedInterestLength `integer`: Fixed interest length in days
          * InterestNotes `string`: Additional notes to supplement the interest details
          * InterestRateType `string` (values: Fixed, Variable): Credit Interest Payment Rate Type
          * InterestTiers `array`
            * items `object`: Credit Interest Tiers
              * APRAERRate `string`: AER or APR Rate for comparison
              * DailyChargeForMaximum `string`: Special charge on tiered overdraft
              * DailyChargeForMinimum `string`: Special charge on tiered overdraft
              * InterestTier `string`: Identifier for the tier
              * Rate `string`: Rate being paid by the bank (gross)
              * RateComparisonType `string` (values: APR, AER, Gross, Net, RepApr): Rate Comparison Type
              * TierValueMaximum `string`: Max Value of interst tier
              * TierValueMinimum `string`: Lower value of interest tier
          * LengthPromotionalInDays `integer`: Describes the length if only a duration is given instead of a date
          * PaymentMethod `string` (values: Compound, PayAway, SelfCredit, SimpleInterest): Credit Interest Payment Method Code
          * StartDate `string`: If interest is charged on a specific date range as start date (often used for promotion)
          * StartPromotionOrFutureTerms `string`: Describes the start date
          * StopPromotionOrFutureTerms `string`: Describes the end date
        * InterestTierSubType `string` (values: FutureMultipleTerms, Promotional, Regular): Describes if the offering is promotional, regular or a description of a future state
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
        * items `object`: Feature Details
          * CriteriaType `string`: Criteria that is required in order to be eligible for the feature
          * DateOfChange `string`: Date of the change if it refers to future terms
          * FeatureDescription `string`: A textual explanation of what the feature
          * FeatureName `string`: The name of the feature
          * FeatureSubType `string` (values: FutureMultipleTerms, Promotional, Regular)
          * FeatureType `string`: Type that represents the nature of the feature
          * FeatureValue `string`: The value or values permissible for a specific feature for an individual product representing a product characteristic
          * LengthPromotionalInDays `integer`: Describes the length if only a duration is given instead of a date
          * StartPromotionOrFutureTerms `string`: Describes the start date
          * StopPromotionOrFutureTerms `string`: Describes the end date
      * LengthPromotionalInDays `integer`: Describes the length if only a duration is given instead of a date
      * ProductSubType `string` (values: FutureMultipleTerms, Promotional, Regular): Describes if the offering is promotional, regular or a description of a future state
      * StartPromotionOrFutureTerms `string`: Describes the start date
      * StopPromotionOrFutureTerms `string`: Describes the end date
  * FeesAndCharges **required** `array`
    * items `object`: Fees And Charges
      * Fees **required** `object`: Fees
        * DateOfChange `string`: Date of the change if it refers to future terms
        * FeeDetails **required** `array`
          * items `object`: Fee Details
            * FeeDetail **required** `object`: Fee Detail
              * DateOfChange `string`: Date of the change if it refers to future terms
              * FeeSubDetails **required** `object`: Fee Sub Details
                * FeeAmount `string`: Fee in GBP
                * FeeFrequency **required** `string` (values: AcademicTerm, AccountClosing, AccountOpening, AtTimeOfLoanRepayment, ChargingPeriod, Daily, EveryFiveBusinessDays, Item, Monthly, OnAccountAnniversary, PerHour, PerOccurrence, PerSheet, PerTransactionAmount, PerTransactionPercentage, Quarterly, SixMonthly, StartOfLoan, StatementMonthly, Weekly, Yearly): Triggering frequency of the fee
                * FeeHigherTier `integer`: Higher occurrence / range boundary e.g. For returned cheques this could be 10, which means the first 10 returned cheque fits into this range
                * FeeLowerTier `integer`: Lower occurrence / range boundary e.g. For returned cheques this could be 0, which means the first returned cheque fits into this range
                * FeeMax `string`: Fee in GBP
                * FeeMin `string`: Fee in GBP
                * FeeRate `string`: % Rate
                * FeesAndChargesNotes `string`: Supplementary information for fees and charges
                * Negotiable **required** `boolean`: Indicates that this Fee Rate or Fee Amount is negotiable based on risk or other factor
                * RepresentativeRate `string`: Representative Rate
              * FeeType **required** `string` (values: ATMDonation, ATMDeposATMPaidIn, ReportCertBalance, ATMAbroadConVisaCredit, ATMAbroadConVisaDebit, ATMCardnetEnvIn, ATMCashGroupATMCreditCard, ATMCashNonGroupATMCredittcard, ATMCashGroupATMDebitCard, ATMCashNonGroupATMDebitcard, ATMConGroupATM, ATMAbroad, ATMForeignCashDebCard, ATMAbroadGoldVisaDebit, ATMSpainCashCard, ATMSpainDebitCard, ATMSpainConversionDebitCard, ATMSpainConversionCashCard, ATMNonSterlingWithdrawal, ATMAbroadVisaCredit, ATMAbroadVisaDebit, ATMAbroadConVisaGoldDebit, ATMWidthdrawCash, BACSOnLineAncilliary, BACSBatch, BACSOnLineFile, BACSFileItem, BACSOnLineSetup , BACSItem, BACSItemInterbranch, BACSBulkBatch, BACSOnLineOverlimit, BACSOnLinePayment, BACSRecallItem, BACSOnLineService, BACSBulkInternet, BACSTELDirDebSmartCard, BACSTELDirDebWebInit, BACSTELirDebWebInit, BACSTELDirDebOverlimit, BACSTELDirDebPayment, BACSTELDirDebService, BACSTELDirDebAncilliary, BACSDirectItemProfile, BACSTELAncilliary, BACSTELSmartCard, BACSTELFile, BACSTELSetup , BACSTELOverlimit, BACSTELPayment, BACSTELService, CHAPSOutBranch, CHAPSCancellation, CHAPSOutOnlineDepositAcc, CHAPSIn, CHAPSOutInterBank, CHAPSInterBank, CHAPSOutPost, CHAPSOutInterBranch, CHAPSOut, CHAPSOutOnline, CHAPSandForeignPay, CHAPSOutManual, CardCardReplacement, DraftsCounter, DraftsBankers, DraftsIntlPayableAbroad, DraftsLostStolen, CardPersonalisedCard, DraftsIntlStoppedCancelled, EuroChqXLess, EuroChqXPlus, FPSOutFutureDated, FPSOutImmediate, FPSOut, FPSOutOwn, FPSInBranch, FPSUKPayUrgent, LegalArticlesReport, LegalSealing, LegalBondAndGuarantee, LegalCourtOrder, LegalCoSearch, LegalDepositAssignment, LegalGuaranteePrep, LegalLifePolicyPrepCo, LegalLifePolicyPrepPersonal, LegalPriorityPariPassu, LegalSubordinationAgreement, DirDebDirectDebitAdmin, DirDebDirectDebitCancel, IntlPayBIBForeignLimit, IntlPayCreditTransCust, IntlPayCreditTransNonCust, IntlPayUrgentPaymentForeign, IntlPayExpressMoneyMover, IntlPayEEAPayUrgent, IntlPayIrishPayUrgent, IntlPayEEAPay, IntlPayForeignIn1CPlus, IntlPayForeignPaymentInUKAcc, IntlPayForeignCharge, IntlPayForeignCancellation, IntlPayForeignStandardEUEuroBIC, IntlPayFXFeeRate, IntlPayForeignInternet, IntlPayForeign, IntlPayForeignInbound, IntlPayFXPaymentOut, IntlPayForeignInSub1C, IntlPayFXRate, IntlPayForeignStandardEUEuroNoBIC, IntlPayFXPaymentOutIR, IntlPayFXFee, IntlPayPurchaseNonSterling, IntlPayPostPaymentForeign, IntlPayPurchaseRateNonSterling, IntlPayPaymentTracing, IntlPayStandardMoneyMover, IntlPayMT101Transaction, IntlPayTransNonSterling, IntlPayTransRateNonSterling, IntlPayForeignUrgentEUEuroBIC, IntlPayForeignUrgentEUEuroNoBIC, IntlPayUrgentPaymentGroup, IntlPayUrgentPaymentUK, IntlPayUSAPayUrgent, IntlPayCurrencyPurchase, IntlPayWorldpayPayment, IntlPayCurrencyWithdraw, InvPayBankDetailsWrong, InvPayForeignBCNR, InvPayForeignRecall, InvGeneralInq, InvOldInstruction, InvPayPaymentRecall, InvPayReturnDebitXVLess, InvPayReturnDebitXVPlus, InvPayStopPayment, InvPayStandingOrdUnpaid, SafeKeepAccess, SafeKeepDeedMedium, SafeKeepingEnvelope, SafeKeepingInspection, SafeKeepingLargeItem, SafeKeepMultipleItems, SafeKeepingParcel, SafeKeepDeedSmall, SafeKeepOneItem, SafeKeepSafeCustody, LoanArrangementFeePC, LoanArrangement, LoanEarlyRepayment, LoanLatePayment, LoanSMEUnsecuredLoan, LoanTieredArrangement, NightSafeNightSafeBankOpen, NightSafeCreditSub5K, NightSafeNightSafe, NightSafeNightSafePaidIn, OverdraftAnnualReview, OverdraftTempOverdraft, OverdraftUnauthorisedBorrowing, POPostOfficeCounterCredit, POPostOfficeCashCredit, POPostOfficeCashOut, POPostOfficeWithdrawal, ChqBookTheftLossAllStopped, ChqIssuedCurrencyAcc, ChqCopy, ChqDraft, ChqIn, ChqDraftSterling, ChqOutIssued, ChqSpecialChqPresentation, ChqCounterCheque, ChqChequeswithStatement, ChqStopped, ChqTrans, ChqDraftFX, ChqForeignCourier, ChqForeignNegTenThou, ChqForeignNegHundred, ChequeForeignBankDivi, ChqForeignNegFiftyThou, ChqPensionCheque, ChequeForeignOtherDivi, ChqForeignNegFiveThou, ChqForeignNegMax, ChqForeignGBPMMDPlus, ChqGiftCheque, ChqCounterLodgement, ChqCashDropLodgement, ChqChequePhotocopy, ChqPostOfficeCredit, ChqPostOfficeChequeCollected, ChqChequeRetrieval, ChqReconcilliationPerTrans, ChqSpecialPresentationCount, ChqSpecialPresentationPTT, ChqUnpaidCharge, ChqUnpaidTransIn, ChqUnpaidTransOut, ChqUnpaidCheque, ReportAuditLetter, ReportFAXAdviceAdditional, ReportTelAdviceAdditional, ReportCreditHistory, ReportCertInterestDuplicate, ReportCertInterest, ReportCreditHistoryAdditionalInYear, ReportForeignStatusEnqElec, ReportForeignStatusEnq, ReportCashBackorInterestAnal, ReportStatementChqDaily, ReportStatementChqFortnightly, ReportStatementChqMonthly, ReportStatementChqWeekly, ReportStatementAndDiviChq, ReportReference, ReportReferralItem, ReportStatementByATM, ReportStatementByBranch, ReportStatementCopyRegular, ReportStatusEnquiry, ReportStatementFrequent, ReportStatementMonthly, ReportStatementCopy1, ReportStatementToBranch, ReportSMSTextMiniStatementorAlert, ReportStatementFortnightly, ReportSMSTextMiniStatementWoM, ReportSMSTextAlertBalance, ReportSMSTextAlert, ReportTaxCert, ReportWeeklyStatement, ReportTextMessageBanking, SEPACancellation, SEPABranch, SEPACredit, SEPADirectDebit, SEPAIn, SEPAEuro, SEPAOut, SEPAUnpaid, SEPAWinbitsAnnual Service, SEPAWinbitsTransaction, TransBillPaymentBranch, TransBillCollect, TransTelephoneBillPayment, TransBankPayment, TransBillPaymentTelephone, TransCorrespondentBankFee, TransCreditTransferUKDifferent, TransCreditTransferUKSame, TransCredit, TransCreditTransfer, TransBranchCredit, TransDebit, TransDebCardDeb, TransUKDirDeb, TransManualDeb, TransBuyForeignWithGBP, TransGoodValueReq, TransSWIFTOutUKForeign, TransInconpleteInstruction, TransManualEntries, TransManualTrans, TransNonSterling, TransPOSSaleForeign, TransPriPaymentPost, TransPOSSaleUK, TransReturnPayment, TransReconciliationPerTrans, TransStandingOrdAdmin, TransStandingOrd, TransStandingOrdManPay, TransTravellersChqOtherBank, TransTelBusiPriPaymentForeignToUKAcc, TransTeleItem, TransTelBusiPriPaymentToGrpAcc, TransTravellersChqRate, TransTransferExGroup, TransUnauthorisedPaidTrans, TransUrgentPaymentPostal, TransUnpaidTrans, TransTelBusiPriPaymentToNonGrpAcc, TransSWIFTOutNonEEASterling, AutoAutoCredit, AutoAutomatedEntries, AutoAutoCreditPhoneInet, AutoAutomatedTrans, AutoDebitCardCommercial, AutoFPSAutoCredit, VisaConvertAbroadForeign, VisaBureauDeChange, VisaTravellersChqorCurrency, OnlineInternetBillPayment, OnlineBusinessOnlineEuroPayment, OnlineBusinessOnlineUrgentEuroPayment, OnlineBusinessOnlineForeignPayment, OnlineInterbankTransfer, OnlineInterbankPerTransfer, OnlineInterbranchTransfer, OnlineInterbranchPerTransfer, OnlineSubscriptionMonthly, OnlineBankingPayment, OnlineBankingSubscription, OnlinePOSSale, OnlinePersonalCustAncillarys, OnlinePersonalCustService, OnlinePersonalCustOverlimits, OnlineReplacementCardReader, OnlinePersonalCustSetUp, OnlinePersonalCustTransaction, OnlinePaymentinGBPtoUK, OnlineUrgentPayment, OnlinePaymentinUSDtoUS, OnlineBulkDirectDebSterling, ForeignChqSent, ForeignChqSelf, ForeignChqEncashment, ForeignFXInwardsCust, ForeignFXTransfersROI, ForeignFXForwardTrans, ForeignFXTransfersBOI, ForeignExMaintenance, ForeignFXInwardsNonCust, ForeignFXOutwards, ForeignPurchase, ForeignStatusRep, ForeignChqDraft, ForeignChqCLess, ForeignChqMLess, ForeignChqOther, ForeignChqMPlus, ForeignChqCCC, ServiceCAccountFee, ServiceCAccountFeeMonthly, ServiceCAccountFeeQuarterly, ServiceCBalanceHandling, ServiceCFixedTariff, ServiceCBusiDepAccBreakage, ServiceCMonitorDaily, ServiceCManagementFee, ServiceCMinimumMonthlyFee, ServiceCMonitorMonthly, ServiceCMonitorWeekly, ServiceCSecurityFee, ServiceCMT940AccountFirst, ServiceCMT940AccountSubsequent, ServiceCOther, CounterCoinHandling, CounterCashIn, CounterCashInNotUs, CounterCashOut, CounterCashX, CounterForeignCashMax, CounterForeignNoteHandling, CounterForeignCashOut, CounterCashFeeRate, CounterForeignCashOutTx, CounterCounterLodgement, CounterCashDropLodgement, CounterNotesLodged, CounterNotesOut, CounterCashInOwn, CounterPaidTrans, CounterCashFeePercent): A description of the Fee type
              * LengthPromotionalInDays `integer`: Describes the length if only a duration is given instead of a date
              * Other `string`: Describe other fee type
              * StartPromotionOrFutureTerms `string`: Describes the start date
              * StopPromotionOrFutureTerms `string`: Describes the end date
            * FeeSubType **required** `string` (values: FutureMultipleTerms, Promotional, Regular): Fee Sub Type code
        * FeeHigherTier `integer`: Higher occurrence / range boundary e.g. For returned cheques this could be 10, which means the first 10 returned cheque fits into this range
        * FeeLowerTier `integer`: Lower occurrence / range boundary e.g.. For returned cheques this could be 0, which means the first returned cheque fits into this range
        * LengthPromotionalInDays `integer`: Describes the length if only a duration is given instead of a date
        * StartPromotionOrFutureTerms `string`: Describes the start date
        * StopPromotionOrFutureTerms `string`: Describes the end date
      * ProductSubType **required** `string` (values: FutureMultipleTerms, Promotional, Regular): Describes if the offering is promotional, regular or a description of a future state
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
        * LegalName **required** `string`: Legal Name of the organisation
  * Overdraft `array`
    * items `object`: Overdraft
      * AnnualRenewalFee `string`: Fee payable per term for overdraft
      * AnnualRenewalRate `string`: Rate to renew overdraft
      * DateOfChange `string`: Date of the change if it refers to future terms
      * InterestProductSubType `string` (values: FutureMultipleTerms, Promotional, Regular): Describes if the offering is promotional, regular or a description of a future state
      * LengthPromotionalInDays `integer`: Describes the length if only a duration is given instead of a date
      * MaximumDailyOverdraftCharge `string`: Maximum daily overdraft charge
      * MaximumMonthlyOverdraftCharge `string`: Maximum monthly overdraft charge
      * MinimumFee `string`: Minimum overdraft fee
      * MinimumRenewalFee `string`: The minimum amount charged for the annual renewal
      * MinimumSetupFee `string`: The minimum amount charged for an overdraft set up
      * OverdraftPricing `object`: Overdraft Pricing
        * ApplicableTo **required** `object`: Personal Interest Tiers
          * InterestTierPersonal `string`: Identifier for the tier
          * InterestTierSME `string` (values: £5000, £10000, £15000, £20000, £25000, Other, TierMaximum, TierMinimum): Identifier for tier only where it has been supplied under Part 8 (article 32 or the CMA order), value reflects upper tier value
        * BufferAmount `string`: Amount on overdraft that is prearranged
        * DailyCharge `string`: Maximum daily overdraft charge
        * IndicativeRate `string`: Indicative Rate that the client will get
        * InterestApplicationFrequency `string` (values: Annual, Daily, Monthly, Quarterly, StatementDate): When the interest is applied
        * InterestNotes `string`: Optional additional notes to supplement the interest details
        * InterestRate `string`: interest rate applied to tier
        * InterestRateCalculationFrequency `string` (values: Annual, Daily, Monthly, Quarterly): Frequency at which interest is calculated and accrued
        * InterestRateEARpa `string`: Interest rate applied to tier
        * ItemCharge `string`: Arranged overdraft item charge
        * MinUnarrangedOverdraftAmount `string`: Minimum Unarranged Overdraft Amount if applicable
        * MonthlyCharge `string`: Maximum monthly overdraft charge
        * OtherCharge `string`: Other flat charge levied when overdrawn (Arranged)
        * OverdraftNotes `string`: Supplementary notes for overdrafts
        * RatesAreNegotiable `string` (values: No, Yes): Value that expresses if the rates are negotiable
        * RepresentativeRate `string`: Interest rate at AER
        * Tiers **required** `array`
          * items `object`: Tiers
            * TierType `object`: Tier Type
              * ArrangedOverdraftInterestTier `string`: Arranged overdraft interest tier
              * UnarrangedOverdraftInterestTier `string`: Unarranged overdraft interest tier
            * TierValueMaximum `string`: Max Value of interest tier
            * TierValueMinimum `string`: Lower value of interest tier
        * TotalOverdraftChargeAmount `string` (values: Banded, Tiered, Whole): All charges that a customer could incur as a result of exceeding or attempting to exceed a Pre-agreed credit limit
      * OverdraftType `string` (values: Committed, OnDemand): Opposite of repayable on demand
      * RenewalRate `string`: Rate to renew overdraft
      * ReviewFee `string`: Fee to review overdraft limit
      * SetUpFeesAmount `string`: Fees to set up the overdraft
      * SetUpFeesRate `string`: Rate to set up the overdraft
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

### PCADefinitionMeta
* PCADefinitionMeta `object`
  * data **required** `array`
    * items [PCADefinition](#pcadefinition)
  * meta **required** [MetaDefinition](#metadefinition)

### SMELendingDefinition
* SMELendingDefinition `object`: SME Loan
  * ArrearsTreatment `string`: Arrears treatment
  * Benefits **required** `object`: Benefit
    * Benefit **required** `boolean`: Describe  one or more benefits if they exist
    * BenefitGroup `array`
      * items `object`: Benefit Interest Group
        * BenefitItem **required** `object`: Benefit Item
          * BenefitDetail `array`
            * items `object`: Benefit detail
              * BenefitDescription `string`: A textual explanation of what the benefit is
              * BenefitID `string`: Unique benefit identifier per organisation
              * BenefitName `string`: The name of the benefit
              * BenefitType `string`: Type that represents the nature of the benefit
              * BenefitValue `string`: The value or values permissible for a specific benefit for an individual product representing a product characteristic
              * Counter `integer`: Counter for the criteria (e.g. number of DD)
              * CriteriaType `array`
                * items `string` (values: CashDeposit, Deposit, DirectDebit, InitialDeposit, InternetLogon, MobileLogon, RegularDeposit): Criteria that is required in order to be eligible for the Benefit
              * DefaultToAccounts `boolean`: Is the benefit part of the default account
              * MaximumCriteria `string`: Maximum amount for the criteria
              * MinimumCriteria `string`: Minimum amount for the criteria
              * PromotionEndDate `string`: If the benefit is temporal the end date is when the benefit is no longer applicable
              * PromotionStartDate `string`: If the benefit is temporal the start date is when the benefit comes into effect
          * DateOfChange `string`: Date of the change if it refers to future terms
          * LengthPromotionalInDays `integer`: Describes the length if only a duration is given instead of a date in days
          * StartPromotionOrFutureTerms `string`: Describes the start date
          * StopPromotionOrFutureTerms `string`: Describes the end date
        * BenefitSubType `string` (values: FutureMultipleTerms, Promotional, Regular): Benefit Subtype Code
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
        * DateOfChange `string`: Date of the change if it refers to future terms
        * FeeDetails **required** `array`
          * items `object`: Fee Details
            * FeeDetail **required** `object`: Fee Detail
              * DateOfChange `string`: Date of the change if it refers to future terms
              * FeeSubDetails **required** `object`: Fee Sub Details
                * FeeAmount `string`: Fee in GBP
                * FeeFrequency **required** `string` (values: AcademicTerm, AccountClosing, AccountOpening, AtTimeOfLoanRepayment, ChargingPeriod, Daily, EveryFiveBusinessDays, Item, Monthly, OnAccountAnniversary, PerHour, PerOccurrence, PerSheet, PerTransactionAmount, PerTransactionPercentage, Quarterly, SixMonthly, StartOfLoan, StatementMonthly, Weekly, Yearly): Triggering frequency of the fee
                * FeeHigherTier `integer`: Higher occurrence / range boundary e.g. For returned cheques this could be 10, which means the first 10 returned cheque fits into this range
                * FeeLowerTier `integer`: Lower occurrence / range boundary e.g. For returned cheques this could be 0, which means the first returned cheque fits into this range
                * FeeMax `string`: Fee in GBP
                * FeeMin `string`: Fee in GBP
                * FeeRate `string`: % Rate
                * FeesAndChargesNotes `string`: Supplementary information for fees and charges
                * Negotiable **required** `boolean`: Indicates that this Fee Rate or Fee Amount is negotiable based on risk or other factor
                * RepresentativeRate `string`: Representative Rate
              * FeeType **required** `string` (values: ATMDonation, ATMDeposATMPaidIn, ReportCertBalance, ATMAbroadConVisaCredit, ATMAbroadConVisaDebit, ATMCardnetEnvIn, ATMCashGroupATMCreditCard, ATMCashNonGroupATMCredittcard, ATMCashGroupATMDebitCard, ATMCashNonGroupATMDebitcard, ATMConGroupATM, ATMAbroad, ATMForeignCashDebCard, ATMAbroadGoldVisaDebit, ATMSpainCashCard, ATMSpainDebitCard, ATMSpainConversionDebitCard, ATMSpainConversionCashCard, ATMNonSterlingWithdrawal, ATMAbroadVisaCredit, ATMAbroadVisaDebit, ATMAbroadConVisaGoldDebit, ATMWidthdrawCash, BACSOnLineAncilliary, BACSBatch, BACSOnLineFile, BACSFileItem, BACSOnLineSetup , BACSItem, BACSItemInterbranch, BACSBulkBatch, BACSOnLineOverlimit, BACSOnLinePayment, BACSRecallItem, BACSOnLineService, BACSBulkInternet, BACSTELDirDebSmartCard, BACSTELDirDebWebInit, BACSTELirDebWebInit, BACSTELDirDebOverlimit, BACSTELDirDebPayment, BACSTELDirDebService, BACSTELDirDebAncilliary, BACSDirectItemProfile, BACSTELAncilliary, BACSTELSmartCard, BACSTELFile, BACSTELSetup , BACSTELOverlimit, BACSTELPayment, BACSTELService, CHAPSOutBranch, CHAPSCancellation, CHAPSOutOnlineDepositAcc, CHAPSIn, CHAPSOutInterBank, CHAPSInterBank, CHAPSOutPost, CHAPSOutInterBranch, CHAPSOut, CHAPSOutOnline, CHAPSandForeignPay, CHAPSOutManual, CardCardReplacement, DraftsCounter, DraftsBankers, DraftsIntlPayableAbroad, DraftsLostStolen, CardPersonalisedCard, DraftsIntlStoppedCancelled, EuroChqXLess, EuroChqXPlus, FPSOutFutureDated, FPSOutImmediate, FPSOut, FPSOutOwn, FPSInBranch, FPSUKPayUrgent, LegalArticlesReport, LegalSealing, LegalBondAndGuarantee, LegalCourtOrder, LegalCoSearch, LegalDepositAssignment, LegalGuaranteePrep, LegalLifePolicyPrepCo, LegalLifePolicyPrepPersonal, LegalPriorityPariPassu, LegalSubordinationAgreement, DirDebDirectDebitAdmin, DirDebDirectDebitCancel, IntlPayBIBForeignLimit, IntlPayCreditTransCust, IntlPayCreditTransNonCust, IntlPayUrgentPaymentForeign, IntlPayExpressMoneyMover, IntlPayEEAPayUrgent, IntlPayIrishPayUrgent, IntlPayEEAPay, IntlPayForeignIn1CPlus, IntlPayForeignPaymentInUKAcc, IntlPayForeignCharge, IntlPayForeignCancellation, IntlPayForeignStandardEUEuroBIC, IntlPayFXFeeRate, IntlPayForeignInternet, IntlPayForeign, IntlPayForeignInbound, IntlPayFXPaymentOut, IntlPayForeignInSub1C, IntlPayFXRate, IntlPayForeignStandardEUEuroNoBIC, IntlPayFXPaymentOutIR, IntlPayFXFee, IntlPayPurchaseNonSterling, IntlPayPostPaymentForeign, IntlPayPurchaseRateNonSterling, IntlPayPaymentTracing, IntlPayStandardMoneyMover, IntlPayMT101Transaction, IntlPayTransNonSterling, IntlPayTransRateNonSterling, IntlPayForeignUrgentEUEuroBIC, IntlPayForeignUrgentEUEuroNoBIC, IntlPayUrgentPaymentGroup, IntlPayUrgentPaymentUK, IntlPayUSAPayUrgent, IntlPayCurrencyPurchase, IntlPayWorldpayPayment, IntlPayCurrencyWithdraw, InvPayBankDetailsWrong, InvPayForeignBCNR, InvPayForeignRecall, InvGeneralInq, InvOldInstruction, InvPayPaymentRecall, InvPayReturnDebitXVLess, InvPayReturnDebitXVPlus, InvPayStopPayment, InvPayStandingOrdUnpaid, SafeKeepAccess, SafeKeepDeedMedium, SafeKeepingEnvelope, SafeKeepingInspection, SafeKeepingLargeItem, SafeKeepMultipleItems, SafeKeepingParcel, SafeKeepDeedSmall, SafeKeepOneItem, SafeKeepSafeCustody, LoanArrangementFeePC, LoanArrangement, LoanEarlyRepayment, LoanLatePayment, LoanSMEUnsecuredLoan, LoanTieredArrangement, NightSafeNightSafeBankOpen, NightSafeCreditSub5K, NightSafeNightSafe, NightSafeNightSafePaidIn, OverdraftAnnualReview, OverdraftTempOverdraft, OverdraftUnauthorisedBorrowing, POPostOfficeCounterCredit, POPostOfficeCashCredit, POPostOfficeCashOut, POPostOfficeWithdrawal, ChqBookTheftLossAllStopped, ChqIssuedCurrencyAcc, ChqCopy, ChqDraft, ChqIn, ChqDraftSterling, ChqOutIssued, ChqSpecialChqPresentation, ChqCounterCheque, ChqChequeswithStatement, ChqStopped, ChqTrans, ChqDraftFX, ChqForeignCourier, ChqForeignNegTenThou, ChqForeignNegHundred, ChequeForeignBankDivi, ChqForeignNegFiftyThou, ChqPensionCheque, ChequeForeignOtherDivi, ChqForeignNegFiveThou, ChqForeignNegMax, ChqForeignGBPMMDPlus, ChqGiftCheque, ChqCounterLodgement, ChqCashDropLodgement, ChqChequePhotocopy, ChqPostOfficeCredit, ChqPostOfficeChequeCollected, ChqChequeRetrieval, ChqReconcilliationPerTrans, ChqSpecialPresentationCount, ChqSpecialPresentationPTT, ChqUnpaidCharge, ChqUnpaidTransIn, ChqUnpaidTransOut, ChqUnpaidCheque, ReportAuditLetter, ReportFAXAdviceAdditional, ReportTelAdviceAdditional, ReportCreditHistory, ReportCertInterestDuplicate, ReportCertInterest, ReportCreditHistoryAdditionalInYear, ReportForeignStatusEnqElec, ReportForeignStatusEnq, ReportCashBackorInterestAnal, ReportStatementChqDaily, ReportStatementChqFortnightly, ReportStatementChqMonthly, ReportStatementChqWeekly, ReportStatementAndDiviChq, ReportReference, ReportReferralItem, ReportStatementByATM, ReportStatementByBranch, ReportStatementCopyRegular, ReportStatusEnquiry, ReportStatementFrequent, ReportStatementMonthly, ReportStatementCopy1, ReportStatementToBranch, ReportSMSTextMiniStatementorAlert, ReportStatementFortnightly, ReportSMSTextMiniStatementWoM, ReportSMSTextAlertBalance, ReportSMSTextAlert, ReportTaxCert, ReportWeeklyStatement, ReportTextMessageBanking, SEPACancellation, SEPABranch, SEPACredit, SEPADirectDebit, SEPAIn, SEPAEuro, SEPAOut, SEPAUnpaid, SEPAWinbitsAnnual Service, SEPAWinbitsTransaction, TransBillPaymentBranch, TransBillCollect, TransTelephoneBillPayment, TransBankPayment, TransBillPaymentTelephone, TransCorrespondentBankFee, TransCreditTransferUKDifferent, TransCreditTransferUKSame, TransCredit, TransCreditTransfer, TransBranchCredit, TransDebit, TransDebCardDeb, TransUKDirDeb, TransManualDeb, TransBuyForeignWithGBP, TransGoodValueReq, TransSWIFTOutUKForeign, TransInconpleteInstruction, TransManualEntries, TransManualTrans, TransNonSterling, TransPOSSaleForeign, TransPriPaymentPost, TransPOSSaleUK, TransReturnPayment, TransReconciliationPerTrans, TransStandingOrdAdmin, TransStandingOrd, TransStandingOrdManPay, TransTravellersChqOtherBank, TransTelBusiPriPaymentForeignToUKAcc, TransTeleItem, TransTelBusiPriPaymentToGrpAcc, TransTravellersChqRate, TransTransferExGroup, TransUnauthorisedPaidTrans, TransUrgentPaymentPostal, TransUnpaidTrans, TransTelBusiPriPaymentToNonGrpAcc, TransSWIFTOutNonEEASterling, AutoAutoCredit, AutoAutomatedEntries, AutoAutoCreditPhoneInet, AutoAutomatedTrans, AutoDebitCardCommercial, AutoFPSAutoCredit, VisaConvertAbroadForeign, VisaBureauDeChange, VisaTravellersChqorCurrency, OnlineInternetBillPayment, OnlineBusinessOnlineEuroPayment, OnlineBusinessOnlineUrgentEuroPayment, OnlineBusinessOnlineForeignPayment, OnlineInterbankTransfer, OnlineInterbankPerTransfer, OnlineInterbranchTransfer, OnlineInterbranchPerTransfer, OnlineSubscriptionMonthly, OnlineBankingPayment, OnlineBankingSubscription, OnlinePOSSale, OnlinePersonalCustAncillarys, OnlinePersonalCustService, OnlinePersonalCustOverlimits, OnlineReplacementCardReader, OnlinePersonalCustSetUp, OnlinePersonalCustTransaction, OnlinePaymentinGBPtoUK, OnlineUrgentPayment, OnlinePaymentinUSDtoUS, OnlineBulkDirectDebSterling, ForeignChqSent, ForeignChqSelf, ForeignChqEncashment, ForeignFXInwardsCust, ForeignFXTransfersROI, ForeignFXForwardTrans, ForeignFXTransfersBOI, ForeignExMaintenance, ForeignFXInwardsNonCust, ForeignFXOutwards, ForeignPurchase, ForeignStatusRep, ForeignChqDraft, ForeignChqCLess, ForeignChqMLess, ForeignChqOther, ForeignChqMPlus, ForeignChqCCC, ServiceCAccountFee, ServiceCAccountFeeMonthly, ServiceCAccountFeeQuarterly, ServiceCBalanceHandling, ServiceCFixedTariff, ServiceCBusiDepAccBreakage, ServiceCMonitorDaily, ServiceCManagementFee, ServiceCMinimumMonthlyFee, ServiceCMonitorMonthly, ServiceCMonitorWeekly, ServiceCSecurityFee, ServiceCMT940AccountFirst, ServiceCMT940AccountSubsequent, ServiceCOther, CounterCoinHandling, CounterCashIn, CounterCashInNotUs, CounterCashOut, CounterCashX, CounterForeignCashMax, CounterForeignNoteHandling, CounterForeignCashOut, CounterCashFeeRate, CounterForeignCashOutTx, CounterCounterLodgement, CounterCashDropLodgement, CounterNotesLodged, CounterNotesOut, CounterCashInOwn, CounterPaidTrans, CounterCashFeePercent): A description of the Fee type
              * LengthPromotionalInDays `integer`: Describes the length if only a duration is given instead of a date
              * Other `string`: Describe other fee type
              * StartPromotionOrFutureTerms `string`: Describes the start date
              * StopPromotionOrFutureTerms `string`: Describes the end date
            * FeeSubType **required** `string` (values: FutureMultipleTerms, Promotional, Regular): Fee Sub Type code
        * FeeHigherTier `integer`: Higher occurrence / range boundary e.g. For returned cheques this could be 10, which means the first 10 returned cheque fits into this range
        * FeeLowerTier `integer`: Lower occurrence / range boundary e.g.. For returned cheques this could be 0, which means the first returned cheque fits into this range
        * LengthPromotionalInDays `integer`: Describes the length if only a duration is given instead of a date
        * StartPromotionOrFutureTerms `string`: Describes the start date
        * StopPromotionOrFutureTerms `string`: Describes the end date
      * ProductSubType **required** `string` (values: FutureMultipleTerms, Promotional, Regular): Describes if the offering is promotional, regular or a description of a future state
  * LoanItem **required** `array`
    * items `object`: Loan Item
      * CCARegulatedEntity **required** `boolean`
      * DateOfChange `string`: Date of the change if it refers to future terms
      * IsALowInterestRepaymentStartPossible **required** `boolean`
      * IsThisAnInterestOnlyLoan **required** `boolean`
      * LengthPromotionalInDays `integer`: Describes the length if only a duration is given instead of a date in days
      * LoanPricing `array`
        * items `object`: Loan Pricing
          * IndicativeRate **required** `string`
          * LoanLengthIncrement **required** `string` (values: 1 year, 2 years, 3 years, 4 years, 5 years): Loan Length Increments
          * LoanLengthIncrementLower **required** `integer`
          * LoanLengthIncrementUpper **required** `integer`
          * LoanSizeBandLower **required** `string`: Monetary amount without currency
          * LoanSizeBandUpper **required** `string`: Monetary amount without currency
          * Negotiable **required** `boolean`
          * RateComparisonType `string` (values: APR, AER, Gross, Net, RepApr): Rate Comparison Type
          * RepaymentFrequency **required** `array`
            * items `string` (values: Daily, Flexible, Fortnightly, HalfYearly, Monthly, Quarterly, Weekly, Yearly): Repayment Frequency Code
          * SizeIncrement **required** `string` (values: £5000, £10000, £15000, £20000, £25000, Other, TierMaximum, TierMinimum): Identifier for tier only where it has been supplied under Part 8 (article 32 or the CMA order), value reflects upper tier value
      * ProductSubType **required** `string` (values: FutureMultipleTerms, Promotional, Regular): Describes if the offering is promotional, regular or a description of a future state
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
        * LegalName **required** `string`: Legal Name of the organisation
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

### SMELendingDefinitionMeta
* SMELendingDefinitionMeta `object`
  * data **required** `array`
    * items [SMELendingDefinition](#smelendingdefinition)
  * meta **required** [MetaDefinition](#metadefinition)


