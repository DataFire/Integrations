# @datafire/amazonaws_cloudsearchdomain

Client library for Amazon CloudSearch Domain

## Installation and Usage
```bash
npm install --save datafire @datafire/amazonaws_cloudsearchdomain
```

```js
let datafire = require('datafire');
let amazonaws_cloudsearchdomain = require('@datafire/amazonaws_cloudsearchdomain').actions;
let context = new datafire.Context();

amazonaws_cloudsearchdomain.UploadDocuments({}, context).then(data => {
  console.log(data);
})
```

## Description
<p>You use the AmazonCloudSearch2013 API to upload documents to a search domain and search those documents. </p> <p>The endpoints for submitting <code>UploadDocuments</code>, <code>Search</code>, and <code>Suggest</code> requests are domain-specific. To get the endpoints for your domain, use the Amazon CloudSearch configuration service <code>DescribeDomains</code> action. The domain endpoints are also displayed on the domain dashboard in the Amazon CloudSearch console. You submit suggest requests to the search endpoint. </p> <p>For more information, see the <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide">Amazon CloudSearch Developer Guide</a>.</p>

## Actions
### UploadDocuments



```js
amazonaws_cloudsearchdomain.UploadDocuments({}, context)
```


### Search



```js
amazonaws_cloudsearchdomain.Search({}, context)
```


### Suggest



```js
amazonaws_cloudsearchdomain.Suggest({}, context)
```


