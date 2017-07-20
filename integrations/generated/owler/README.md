# @datafire/owler

Client library for Owler

## Installation and Usage
```bash
npm install --save datafire @datafire/owler
```

```js
let datafire = require('datafire');
let owler = require('@datafire/owler').actions;

let account = {
  user_key: "",
}
let context = new datafire.Context({
  accounts: {
    owler: account,
  }
})


owler.basicCompanySearch({}, context).then(data => {
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

#### Parameters
* q (string) **required** - Search term
* fields (array) - Fields to be searched - name, website, ticker, permid. If not specfied, will be searched against all fields
* limit (string) - Number of results to be displayed - 10 (by default, if not specified) to 30
* format (string) - Format of the response content - json (by default if not specified), xml

### v1.company.competitor.id.companyId.get
The Competitors API provides basic information about top 3 competitors of a company specified in the Company Id


```js
owler.v1.company.competitor.id.companyId.get({
  "companyId": ""
}, context)
```

#### Parameters
* companyId (string) **required** - Company Id
* format (string) - Format of the response content - json (by default if not specified), xml

### v1.company.competitor.url.website.get
The Competitors API provides basic information about top 3 competitors of a company specified in the website


```js
owler.v1.company.competitor.url.website.get({
  "website": ""
}, context)
```

#### Parameters
* website (string) **required** - Company Id
* format (string) - Format of the response content - json (by default if not specified), xml

### v1.company.competitorpremium.id.companyId.get
The Competitors API provides basic information about all competitors of a given company Id


```js
owler.v1.company.competitorpremium.id.companyId.get({
  "companyId": ""
}, context)
```

#### Parameters
* companyId (string) **required** - Company Id
* pagination_id (string) - Pass pagination_id as * in the first API request. The API response will return top competitors along with the next pagination_id which can be passed in the subsequent API request to get the next set of competitors. Repeat this process until needed or till the pagination_id returned is blank. Note:Every response will have maximum of 50 competitors.
* format (string) - Format of the response content - json (by default if not specified), xml

### v1.company.competitorpremium.url.website.get
The Competitors API provides basic information about all competitors of a given company Id


```js
owler.v1.company.competitorpremium.url.website.get({
  "website": ""
}, context)
```

#### Parameters
* website (string) **required** - Company Id
* pagination_id (string) - Pass pagination_id as * in the first API request. The API response will return top competitors along with the next pagination_id which can be passed in the subsequent API request to get the next set of competitors. Repeat this process until needed or till the pagination_id returned is blank. Note:Every response will have maximum of 50 competitors.
* format (string) - Format of the response content - json (by default if not specified), xml

### v1.company.id.companyId.get
The Company Data API provides complete information about a company for the specified Company Id 


```js
owler.v1.company.id.companyId.get({
  "companyId": ""
}, context)
```

#### Parameters
* companyId (string) **required** - Company Id
* format (string) - Format of the response content - json (by default if not specified), xml

### searchCompany
The Company Search API searches for a company based on the input and will returns results containing basic details about matching companies. By default the API returns the top 10 available results unless the limit is specified. The maximum limit is restricted to 30.


```js
owler.searchCompany({
  "q": ""
}, context)
```

#### Parameters
* q (string) **required** - Search term
* fields (array) - Fields to be searched - name, website, ticker. If not specified, will be searched against all fields
* limit (string) - Number of results to be displayed - 10 (by default, if not specified) to 30
* format (string) - Format of the response content - json (by default if not specified), xml

### v1.company.url.website.get
The Company Data API provides complete information about a company for the specified URL 


```js
owler.v1.company.url.website.get({
  "website": ""
}, context)
```

#### Parameters
* website (string) **required** - Company Domain
* format (string) - Format of the response content - json (by default if not specified), xml

### v1.companypremium.id.companyId.get
The Company Premium Data API provides complete information about a company for the specified Company Id 


```js
owler.v1.companypremium.id.companyId.get({
  "companyId": ""
}, context)
```

#### Parameters
* companyId (string) **required** - Company Id
* format (string) - Format of the response content - json (by default if not specified), xml

### v1.companypremium.url.website.get
The Company Data API provides complete information about a company for the specified URL 


```js
owler.v1.companypremium.url.website.get({
  "website": ""
}, context)
```

#### Parameters
* website (string) **required** - Company Domain
* format (string) - Format of the response content - json (by default if not specified), xml

### getFeeds
The Feeds API provides a list of feeds and individual feed information for the given Company Ids and Category. By default the API returns the latest 10 feeds available unless the limit is specified. The maximum result is restricted to 100 feeds per API request.


```js
owler.getFeeds({
  "company_id": []
}, context)
```

#### Parameters
* format (string) - Format of the response content - json (by default if not specified), xml
* company_id (array) **required** - Company Ids separated by comma (Maximum of 150 Company Ids)
* limit (string) - Number of results to be displayed - 10 (by default, if not specified) to 100
* pagination_id (string) - Pass pagination_id as blank in the first API request. The API response will return the latest feeds along with the next pagination_id which can be passed in the subsequent API request to get the next set of feeds. Repeat this process until needed or till the pagination_id returned is blank
* category (array) - Categories separated by comma. If not specified, will search against all categories

