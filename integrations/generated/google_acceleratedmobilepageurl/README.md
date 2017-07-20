# @datafire/google_acceleratedmobilepageurl

Client library for Accelerated Mobile Pages (AMP) URL

## Installation and Usage
```bash
npm install --save datafire @datafire/google_acceleratedmobilepageurl
```

```js
let datafire = require('datafire');
let google_acceleratedmobilepageurl = require('@datafire/google_acceleratedmobilepageurl').actions;
let context = new datafire.Context();

google_acceleratedmobilepageurl.ampUrls.batchGet({}, context).then(data => {
  console.log(data);
})
```

## Description
Retrieves the list of AMP URL (and equivalent AMP Cache URL) for a given list of public URL(s).


## Actions
### ampUrls.batchGet
Returns AMP URL(s) and equivalent
[AMP Cache URL(s)](/amp/cache/overview#amp-cache-url-format).


```js
google_acceleratedmobilepageurl.ampUrls.batchGet({}, context)
```


