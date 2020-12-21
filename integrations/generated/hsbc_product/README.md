# @datafire/hsbc_product

Client library for Product Finder API

## Installation and Usage
```bash
npm install --save @datafire/hsbc_product
```
```js
let hsbc_product = require('@datafire/hsbc_product').create();

.then(data => {
  console.log(data);
});
```

## Description



## Actions

### open_banking.v2.2.business_current_accounts.get
This API will return data about all BCA products and is prepared to the Open Banking standards as defined by the Open Banking Implementation Entity (OBIE) in data dictionary version 2.2. It is regulated by the UK Competition and Markets Authority (CMA). Data is only available for the United Kingdom.


```js
hsbc_product.open_banking.v2.2.business_current_accounts.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [BCADefinitionMeta](#bcadefinitionmeta)

### open_banking.v2.2.commercial_credit_cards.get
This API will return data about all commercial credit cards products and is prepared to the Open Banking standards as defined by the Open Banking Implementation Entity (OBIE) in data dictionary version 2.2. It is regulated by the UK Competition and Markets Authority (CMA). Data is only available for the United Kingdom.


```js
hsbc_product.open_banking.v2.2.commercial_credit_cards.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [CCCDefinitionMeta](#cccdefinitionmeta)

### open_banking.v2.2.personal_current_accounts.get
This API will return data about all PCA products and is prepared to the Open Banking standards as defined by the Open Banking Implementation Entity (OBIE) in data dictionary version 2.2. It is regulated by the UK Competition and Markets Authority (CMA). Data is only available for the United Kingdom.


```js
hsbc_product.open_banking.v2.2.personal_current_accounts.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [PCADefinitionMeta](#pcadefinitionmeta)

### open_banking.v2.2.unsecured_sme_loans.get
This API will return data about all SME lending products and is prepared to the Open Banking standards as defined by the Open Banking Implementation Entity (OBIE) in data dictionary version 2.2. It is regulated by the UK Competition and Markets Authority (CMA). Data is only available for the United Kingdom.


```js
hsbc_product.open_banking.v2.2.unsecured_sme_loans.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [SMELendingDefinitionMeta](#smelendingdefinitionmeta)

### x_open_banking.v2.2.business_current_accounts.segment.segment.get
This extended API will return data about all BCA products for the specified segment. It is based-on the Open Banking standards as defined by the Open Banking Implementation Entity (OBIE) in data dictionary version 2.2. The extended functionality may not fully adhere to the non-functional requirements of the regulator. Data is only available for the United Kingdom.


```js
hsbc_product.x_open_banking.v2.2.business_current_accounts.segment.segment.get({
  "segment": ""
}, context)
```

#### Input
* input `object`
  * segment **required** `string`: Segment name from this list&#58; &quot;ClientAccount&quot;, &quot;Standard&quot;, &quot;NonCommercial&quot;, &quot;Religious&quot;, &quot;SectorSpecific&quot;, &quot;Startup&quot;, &quot;Switcher&quot;.

#### Output
* output [BCADefinitionMeta](#bcadefinitionmeta)

### x_open_banking.v2.2.commercial_credit_cards.segment.segment.get
This extended API will return data about all commercial credit cards products for the specified segment. It is based-on the Open Banking standards as defined by the Open Banking Implementation Entity (OBIE) in data dictionary version 2.2. The extended functionality may not fully adhere to the non-functional requirements of the regulator. Data is only available for the United Kingdom.


```js
hsbc_product.x_open_banking.v2.2.commercial_credit_cards.segment.segment.get({
  "segment": ""
}, context)
```

#### Input
* input `object`
  * segment **required** `string`: Segment name from this list&#58; &quot;General&quot;.

#### Output
* output [CCCDefinitionMeta](#cccdefinitionmeta)

### x_open_banking.v2.2.personal_current_accounts.segment.segment.get
This extended API will return data about all PCA products for the specified segment. It is based-on the Open Banking standards as defined by the Open Banking Implementation Entity (OBIE) in data dictionary version 2.2. The extended functionality may not fully adhere to the non-functional requirements of the regulator. Data is only available for the United Kingdom.


```js
hsbc_product.x_open_banking.v2.2.personal_current_accounts.segment.segment.get({
  "segment": ""
}, context)
```

#### Input
* input `object`
  * segment **required** `string`: Segment name from this list&#58; &quot;Basic&quot;, &quot;General&quot;, &quot;Graduate&quot;, &quot;Packaged&quot;, &quot;Premium&quot;, &quot;Reward&quot;, &quot;Student&quot;, &quot;YoungAdult&quot;, &quot;Youth&quot;.

#### Output
* output [PCADefinitionMeta](#pcadefinitionmeta)

### x_open_banking.v2.2.unsecured_sme_loans.segment.segment.get
This extended API will return data about all SME lending products for the specified segment. It is based-on the Open Banking standards as defined by the Open Banking Implementation Entity (OBIE) in data dictionary version 2.2. The extended functionality may not fully adhere to the non-functional requirements of the regulator. Data is only available for the United Kingdom.


```js
hsbc_product.x_open_banking.v2.2.unsecured_sme_loans.segment.segment.get({
  "segment": ""
}, context)
```

#### Input
* input `object`
  * segment **required** `string`: Segment name from this list&#58; &quot;AgricultureSector&quot;, &quot;Business&quot;, &quot;FixedGroup&quot;, &quot;FlexibleBusinessLoan&quot;, &quot;GovernmentScheme&quot;, &quot;Other&quot;, &quot;SectorSpecific&quot;.

#### Output
* output [SMELendingDefinitionMeta](#smelendingdefinitionmeta)



## Definitions

### BCADefinition
* BCADefinition `object`: Open Banking Business Current Account product data details
  * Brand **required** `array`: Brand registered by the banking group at https://register.fca.org.uk/
    * items `object`: Brand registered by the banking group at https://register.fca.org.uk/
      * BCA **required** `array`: BCA means a Business Current Account.
        * items `object`: BCA means a Business Current Account.
          * BCAMarketingState **required** `array`: The marketing state (promotional or regular) of the BCA Product.
          * FeeFreeLength `number`: The length/duration of the fee free period
          * FeeFreeLengthPeriod `string` (values: Day, Half Year, Month, Quarter, Week, AcademicTerm, Year): The unit of period (days, weeks, months etc.) of the promotional length
          * Identification **required** `string`: The unique ID that has been internally assigned by the financial institution to each of the current account banking products they market to their retail and/or small to medium enterprise (SME) customers.
          * Name **required** `string`: The name of the BCA product used for marketing purposes from a customer perspective. I.e. what the customer would recognise.
          * Notes `array`: Optional additional notes to supplement the product details
          * OnSaleIndicator `boolean`: Indicates that the published product is OnSale(value 1) or Back Book (value 0) 
          * Segment `array`: Market segmentation is a marketing term referring to the aggregating of prospective buyers into groups, or segments, that have common needs and respond similarly to a marketing action. Market segmentation enables companies to target different categories of consumers who perceive the full value of certain products and services differently from one another.
      * BrandName **required** `string`: Brand Name that an organisation uses to market its products or services to a consumer as registered at https://register.fca.org.uk/

### BCADefinitionMeta
* BCADefinitionMeta `object`
  * data **required** `array`
    * items [BCADefinition](#bcadefinition)
  * meta **required** [MetaDefinition](#metadefinition)

### CCCDefinition
* CCCDefinition `object`: Open Banking Commercial Credit Card product data details
  * Brand **required** `array`: Brand registered by the banking group at https://register.fca.org.uk/
    * items `object`: Brand registered by the banking group at https://register.fca.org.uk/
      * BrandName **required** `string`: Brand Name that an organisation uses to market its products or services to a consumer as registered at https://register.fca.org.uk/
      * CCC **required** `array`: CCC means a Commercial Credit Card.
        * items `object`: CCC means a Commercial Credit Card.
          * CCCMarketingState **required** `array`: The marketing state (promotional or regular) of the CCC Product.
          * Identification **required** `string`: The unique ID that has been internally assigned by the financial institution to each of the Commercial Credit Card products they market to their retail and/or small to medium enterprise (SME) customers.
          * Name **required** `string`: The name of the CCC product used for marketing purposes from a customer perspective. I.e. what the customer would recognise.
          * Segment **required** `array`: Market segmentation is a marketing term referring to the aggregating of prospective buyers into groups, or segments, that have common needs and respond similarly to a marketing action. Market segmentation enables companies to target different categories of consumers who perceive the full value of certain products and services differently from one another.

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
  * License **required** `string` (values: https://www.openbanking.org.uk/open-licence): Open Banking License
  * TermsOfUse **required** `string` (values: https://www.openbanking.org.uk/terms): Open Banking Terms of Use
  * TotalResults **required** `integer`

### PCADefinition
* PCADefinition `object`: Open Banking Personal Current Account product data details
  * Brand **required** `array`: Brand registered by the banking group at https://register.fca.org.uk/
    * items `object`: Brand registered by the banking group at https://register.fca.org.uk/
      * BrandName **required** `string`: Brand Name that an organisation uses to market its products or services to a consumer as registered at https://register.fca.org.uk/
      * PCA **required** `array`: PCA' means a personal current account. That is an account marketed to individuals rather than businesses, which provides the facility to place funds, withdraw cash, hold deposits and to execute payment transaction to and from third parties but does not include any of the following types of accounts: 
        * items `object`: PCA' means a personal current account. That is an account marketed to individuals rather than businesses, which provides the facility to place funds, withdraw cash, hold deposits and to execute payment transaction to and from third parties but does not include any of the following types of accounts: 
          * Identification **required** `string`: The unique ID that has been internally assigned by the financial institution to each of the current account banking products they market to their retail and/or small to medium enterprise (SME) customers.
          * Name **required** `string`: The name of the PCA product used for marketing purposes from a customer perspective. I.e. what the customer would recognise.
          * Notes `array`: Optional additional notes to supplement the product details
          * OnSaleIndicator `boolean`: Indicates that the published product is OnSale(value 1) or Back Book (value 0) 
          * PCAMarketingState **required** `array`: Describes the type of the known state (regular, promotional )  of the product.
          * Segment `array`: Market segmentation is a marketing term referring to the aggregating of prospective buyers into groups, or segments, that have common needs and respond similarly to a marketing action. Market segmentation enables companies to target different categories of consumers who perceive the full value of certain products and services differently from one another.

### PCADefinitionMeta
* PCADefinitionMeta `object`
  * data **required** `array`
    * items [PCADefinition](#pcadefinition)
  * meta **required** [MetaDefinition](#metadefinition)

### SMELendingDefinition
* SMELendingDefinition `object`: Open Banking SME Unsecured Loan product data details
  * Brand **required** `array`: Brand registered by the banking group at https://register.fca.org.uk/
    * items `object`: Brand registered by the banking group at https://register.fca.org.uk/
      * BrandName **required** `string`: Brand Name that an organisation uses to market its products or services to a consumer as registered at https://register.fca.org.uk/
      * SMELoan **required** `array`: SMELoan means SME unsecured loan.
        * items `object`: SMELoan means SME unsecured loan.
          * Identification **required** `string`: The unique ID that has been internally assigned by the financial institution to each of the current account banking products they market to their retail and/or small to medium enterprise (SME) customers.
          * Name **required** `string`: The name of the SME Loan product used for marketing purposes from a customer perspective. I.e. what the customer would recognise.
          * OtherSegment `object`: Other segment code which is not available in the standard code set
          * SMELoanMarketingState **required** `array`: The marketing state (promotional or regular) of the SME Loan Product.
          * Segment **required** `array`: Market segmentation is a marketing term referring to the aggregating of prospective buyers into groups, or segments, that have common needs and respond similarly to a marketing action. Market segmentation enables companies to target different categories of consumers who perceive the full value of certain products and services differently from one another.

### SMELendingDefinitionMeta
* SMELendingDefinitionMeta `object`
  * data **required** `array`
    * items [SMELendingDefinition](#smelendingdefinition)
  * meta **required** [MetaDefinition](#metadefinition)


