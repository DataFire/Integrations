# @datafire/owler

Client library for Owler

## Installation and Usage
```bash
npm install --save @datafire/owler
```
```js
let owler = require('@datafire/owler').create({
  user_key: ""
});

owler.basicCompanySearch({}).then(data => {
  console.log(data);
})
```

## Description

Search for information on companies using a website or company name and get access to Company Data, News, Blog Posts, Competitor Lists and much more.

## Actions

### basicCompanySearch
The Company Basic Search API searches for a company based on the input and will returns results containing basic details about matching companies. By default the API returns the top 10 available results unless the limit is specified. The maximum limit is restricted to 30.


```js
owler.basicCompanySearch({
  "q": ""
}, context)
```

#### Input
* input `object`
  * q **required** `string`: Search term
  * fields `array`: Fields to be searched - name, website, ticker, permid. If not specfied, will be searched against all fields
  * limit `string`: Number of results to be displayed - 10 (by default, if not specified) to 30
  * format `string` (values: xml, json): Format of the response content - json (by default if not specified), xml

#### Output
* output [basic_results](#basic_results)

### v1.company.competitor.id.companyId.get
The Competitors API provides basic information about top 3 competitors of a company specified in the Company Id


```js
owler.v1.company.competitor.id.companyId.get({
  "companyId": ""
}, context)
```

#### Input
* input `object`
  * companyId **required** `string`: Company Id
  * format `string` (values: xml, json): Format of the response content - json (by default if not specified), xml

#### Output
* output [CompanyCompetitorVO](#companycompetitorvo)

### v1.company.competitor.url.website.get
The Competitors API provides basic information about top 3 competitors of a company specified in the website


```js
owler.v1.company.competitor.url.website.get({
  "website": ""
}, context)
```

#### Input
* input `object`
  * website **required** `string`: Company Id
  * format `string` (values: xml, json): Format of the response content - json (by default if not specified), xml

#### Output
* output [CompanyCompetitorVO](#companycompetitorvo)

### v1.company.competitorpremium.id.companyId.get
The Competitors API provides basic information about all competitors of a given company Id


```js
owler.v1.company.competitorpremium.id.companyId.get({
  "companyId": ""
}, context)
```

#### Input
* input `object`
  * companyId **required** `string`: Company Id
  * pagination_id `string`: Pass pagination_id as * in the first API request. The API response will return top competitors along with the next pagination_id which can be passed in the subsequent API request to get the next set of competitors. Repeat this process until needed or till the pagination_id returned is blank. Note:Every response will have maximum of 50 competitors.
  * format `string` (values: xml, json): Format of the response content - json (by default if not specified), xml

#### Output
* output [competitors](#competitors)

### v1.company.competitorpremium.url.website.get
The Competitors API provides basic information about all competitors of a given company Id


```js
owler.v1.company.competitorpremium.url.website.get({
  "website": ""
}, context)
```

#### Input
* input `object`
  * website **required** `string`: Company Id
  * pagination_id `string`: Pass pagination_id as * in the first API request. The API response will return top competitors along with the next pagination_id which can be passed in the subsequent API request to get the next set of competitors. Repeat this process until needed or till the pagination_id returned is blank. Note:Every response will have maximum of 50 competitors.
  * format `string` (values: xml, json): Format of the response content - json (by default if not specified), xml

#### Output
* output [competitors](#competitors)

### v1.company.id.companyId.get
The Company Data API provides complete information about a company for the specified Company Id 


```js
owler.v1.company.id.companyId.get({
  "companyId": ""
}, context)
```

#### Input
* input `object`
  * companyId **required** `string`: Company Id
  * format `string` (values: xml, json): Format of the response content - json (by default if not specified), xml

#### Output
* output [company](#company)

### searchCompany
The Company Search API searches for a company based on the input and will returns results containing basic details about matching companies. By default the API returns the top 10 available results unless the limit is specified. The maximum limit is restricted to 30.


```js
owler.searchCompany({
  "q": ""
}, context)
```

#### Input
* input `object`
  * q **required** `string`: Search term
  * fields `array`: Fields to be searched - name, website, ticker. If not specified, will be searched against all fields
  * limit `string`: Number of results to be displayed - 10 (by default, if not specified) to 30
  * format `string` (values: xml, json): Format of the response content - json (by default if not specified), xml

#### Output
* output [results](#results)

### v1.company.url.website.get
The Company Data API provides complete information about a company for the specified URL 


```js
owler.v1.company.url.website.get({
  "website": ""
}, context)
```

#### Input
* input `object`
  * website **required** `string`: Company Domain
  * format `string` (values: xml, json): Format of the response content - json (by default if not specified), xml

#### Output
* output [company](#company)

### v1.companypremium.id.companyId.get
The Company Premium Data API provides complete information about a company for the specified Company Id 


```js
owler.v1.companypremium.id.companyId.get({
  "companyId": ""
}, context)
```

#### Input
* input `object`
  * companyId **required** `string`: Company Id
  * format `string` (values: xml, json): Format of the response content - json (by default if not specified), xml

#### Output
* output [company](#company)

### v1.companypremium.url.website.get
The Company Data API provides complete information about a company for the specified URL 


```js
owler.v1.companypremium.url.website.get({
  "website": ""
}, context)
```

#### Input
* input `object`
  * website **required** `string`: Company Domain
  * format `string` (values: xml, json): Format of the response content - json (by default if not specified), xml

#### Output
* output [company](#company)

### getFeeds
The Feeds API provides a list of feeds and individual feed information for the given Company Ids and Category. By default the API returns the latest 10 feeds available unless the limit is specified. The maximum result is restricted to 100 feeds per API request.


```js
owler.getFeeds({
  "company_id": []
}, context)
```

#### Input
* input `object`
  * format `string` (values: xml, json): Format of the response content - json (by default if not specified), xml
  * company_id **required** `array`: Company Ids separated by comma (Maximum of 150 Company Ids)
  * limit `string`: Number of results to be displayed - 10 (by default, if not specified) to 100
  * pagination_id `string`: Pass pagination_id as blank in the first API request. The API response will return the latest feeds along with the next pagination_id which can be passed in the subsequent API request to get the next set of feeds. Repeat this process until needed or till the pagination_id returned is blank
  * category `array`: Categories separated by comma. If not specified, will search against all categories

#### Output
* output [results](#results)



## Definitions

### Acquisition
* Acquisition `object`
  * acquirer_company_id `string`
  * amount `string`
  * company_id `string`
  * date `string`
  * name `string`
  * status `string`
  * undisclosed `string`
  * website `string`

### Address
* Address `object`
  * city `string`
  * country `string`
  * phone `string`
  * postal_code `string`
  * state `string`
  * street1 `string`
  * street2 `string`

### Ceo
* Ceo `object`
  * ceo_rating `string`
  * first_name `string`
  * image_url `string`
  * last_name `string`

### CompanyBasicSearchVO
* CompanyBasicSearchVO `object`
  * company_id `integer`
  * hq_address [Address](#address)
  * name `string`
  * perm_id `string`
  * profile_url `string`
  * short_name `string`
  * website `string`

### CompanyBasicVO
* CompanyBasicVO `object`
  * company_id **required** `integer`
  * logo_url **required** `string`
  * name **required** `string`
  * profile_url **required** `string`
  * short_name `string`
  * website **required** `string`

### CompanyCompetitorVO
* CompanyCompetitorVO `object`
  * competitor `array`
    * items [CompanyBasicVO](#companybasicvo)

### CompanySearchResultVO
* CompanySearchResultVO `object`
  * company_id **required** `integer`
  * company_type `string` (values: Private, Public, Product/Brand/Service, NGO/NPO/NFP/Organization/Association, Investment Company, Government)
  * description `string`
  * hq_address [Address](#address)
  * logo_url **required** `string`
  * name **required** `string`
  * perm_id `string`
  * profile_url **required** `string`
  * short_name `string`
  * stock [Stock](#stock)
  * website **required** `string`

### CompetitorBasicVO
* CompetitorBasicVO `object`
  * company_id **required** `integer`
  * logo_url **required** `string`
  * name **required** `string`
  * profile_url **required** `string`
  * score **required** `integer`
  * short_name `string`
  * website **required** `string`

### FeedsVO
* FeedsVO `object`
  * category `string`
  * company [CompanyBasicVO](#companybasicvo)
  * enclosure_image `string`
  * feed_date `string`
  * id `string`
  * owler_feed_url `string`
  * publisher_logo `string`
  * publisher_name `string`
  * source_url `string`
  * title `string`

### Funding
* Funding `object`
  * amount `string`
  * date `string`
  * investor `array`
    * items [Investor](#investor)
  * type `string`
  * undisclosed `string`

### Investor
* Investor `object`
  * company_id `string`
  * name `string`
  * website `string`

### SectorVO
* SectorVO `object`
  * name `string`
  * parent_industry `string`

### Stock
* Stock `object`
  * exchange `string`
  * ticker `string`

### basic_results
* basic_results `object`
  * company `array`
    * items [CompanyBasicSearchVO](#companybasicsearchvo)

### company
* company `object`
  * acquisition `array`
    * items [Acquisition](#acquisition)
  * ceo [Ceo](#ceo)
  * company_id **required** `integer`
  * company_type `string` (values: Private, Public, Product/Brand/Service, NGO/NPO/NFP/Organization/Association, Investment Company, Government)
  * description `string`
  * employee_count `string`
  * facebook_link `string`
  * founded_date `string`
  * funding `array`
    * items [Funding](#funding)
  * hq_address [Address](#address)
  * industries `array`
    * items `string`
  * linkedin_link `string`
  * logo_url **required** `string`
  * name **required** `string`
  * perm_id `string`
  * portfolio_company_ids `array`
    * items `integer`
  * profile_url **required** `string`
  * revenue `string`
  * sectors `array`
    * items [SectorVO](#sectorvo)
  * short_name `string`
  * stock [Stock](#stock)
  * twitter_link `string`
  * website **required** `string`
  * youtube_link `string`

### competitors
* competitors `object`
  * competitor `array`
    * items [CompetitorBasicVO](#competitorbasicvo)
  * pagination_id `string`

### results
* results `object`
  * feeds `array`
    * items [FeedsVO](#feedsvo)
  * pagination_id `string`


