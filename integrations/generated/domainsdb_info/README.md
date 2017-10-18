# @datafire/domainsdb_info

Client library for domainsdb.info

## Installation and Usage
```bash
npm install --save datafire @datafire/domainsdb_info
```

```js
let datafire = require('datafire');
let domainsdb_info = require('@datafire/domainsdb_info').create({
  api_key: "",
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: "",
});

domainsdb_info.addPet({}).then(data => {
  console.log(data);
})
```

## Description
Registered domains search checks the lists of registered domains for names containing particular words/phrases/numbers or symbols. Technically it's just a GUI interface for domains-index.com database containing more than 260M of registered domains and 1000+ TLDS including newGTLDs. It's free to use and could be helpful domains/marketing research tool. Search results are limited to 50 results. You can have up to 100 results via API (link in footer) and full list by

## Actions
### addPet
Search for registered domains


```js
domainsdb_info.addPet({
  "query": ""
}, context)
```

#### Parameters
* query (string) **required** - Search query for registered domains for ex. facebook
* tld (string) - Search area (cctld|gtld|all)

