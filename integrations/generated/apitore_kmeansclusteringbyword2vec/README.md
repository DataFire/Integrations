# @datafire/apitore_kmeansclusteringbyword2vec

Client library for Kmeans clustering by word2vec

## Installation and Usage
```bash
npm install --save datafire @datafire/apitore_kmeansclusteringbyword2vec
```

```js
let datafire = require('datafire');
let apitore_kmeansclusteringbyword2vec = require('@datafire/apitore_kmeansclusteringbyword2vec').create();

apitore_kmeansclusteringbyword2vec.clusterUsingPOST({}).then(data => {
  console.log(data);
})
```

## Description
Kmeans clustering by word2vec.<BR />[Endpoint] https://api.apitore.com/api/48

## Actions
### clusterUsingPOST
kmeans clustering by word2vec.<BR />Response<BR />&nbsp; Github: <a href="https://github.com/keigohtr/apitore-response-parent/tree/master/clustering-response">clustering-response</a><BR />&nbsp; Class: com.apitore.banana.response.clustering.ClusterResponseEntity<BR />


```js
apitore_kmeansclusteringbyword2vec.clusterUsingPOST({
  "access_token": "",
  "req": {
    "words": []
  }
}, context)
```

#### Parameters
* access_token (string) **required** - Access Token
* req (object) **required**

