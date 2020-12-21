# @datafire/scrapewebsite_email

Client library for Scrape Website Email API

## Installation and Usage
```bash
npm install --save @datafire/scrapewebsite_email
```
```js
let scrapewebsite_email = require('@datafire/scrapewebsite_email').create();

.then(data => {
  console.log(data);
});
```

## Description

ScrapeWebsiteEmail is a service that exposes an api to fetch e-mails from a website.

## Actions

### v1.ping.json.get
<p>Returns ‘pong’ if the site is up</p>



```js
scrapewebsite_email.v1.ping.json.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### v1.scrape_emails.json.get
Returns a list of emails scraped by priority (ie. e-mails appear on top level pages are first). Please note that subsequent calls to the same url will be fetched from the <b>cache</b> (14 day flush). <br/><br/>Will also parse patterns such as hello[at]site.com, hello[at]site[dot]com, hello(at)site.com, hello(at)site(dot)com, hello @ site.com, hello @ site . com. <br/><br/>Please do note we cannot parse sites that require a login (for now), so for some Facebook pages it is not possible at the moment to fetch the e-mail.<br/><br/>Finally, please note that the api will fetch links for up to 2 minutes. After that time it will start analysing the pages which have been scraped. <b>Therefore</b> please ensure that your client has a timeout of at least <b>150 seconds</b> (2 mins to fetch and the rest to parse). <br/><br/><b>Please note</b> that due to the fact that the api goes out to fetch the pages, the server allows only 1 concurrent request/ip. Requests which are made while the 1 request is still processing will result in a 429 code.<br/><br/><b>Please note</b> that as of May 25, 2014, the main mechanism of tracking usage will be done via Mashape. You can get the free calls by signing up with the FREE plan.<br/><br/>Please visit <a href='https://www.mashape.com/tommytcchan/scrape-website-email'>https://www.mashape.com/tommytcchan/scrape-website-email</a>.<br/><br/><b>There is now a limit of 5 requests per day using this sample interface.</b><br/><br/>


```js
scrapewebsite_email.v1.scrape_emails.json.get({
  "website": ""
}, context)
```

#### Input
* input `object`
  * website **required** `string`: <p>The website (ie. www.soundflair.com)</p>
  * must_include `string`: <table>

#### Output
*Output schema unknown*

### v1.scrape_store_links.json.get
Attempts to grab the google store url or the ios store url for a site, after searching through the site.


```js
scrapewebsite_email.v1.scrape_store_links.json.get({
  "website": ""
}, context)
```

#### Input
* input `object`
  * website **required** `string`: <p>The website (ie. www.soundflair.com)</p>

#### Output
*Output schema unknown*



## Definitions

*This integration has no definitions*
