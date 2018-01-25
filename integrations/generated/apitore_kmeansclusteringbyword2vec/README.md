# @datafire/apitore_kmeansclusteringbyword2vec

Client library for Kmeans clustering by word2vec

## Installation and Usage
```bash
npm install --save @datafire/apitore_kmeansclusteringbyword2vec
```
```js
let apitore_kmeansclusteringbyword2vec = require('@datafire/apitore_kmeansclusteringbyword2vec').create();

apitore_kmeansclusteringbyword2vec.clusterUsingPOST({
  "access_token": "",
  "req": {
    "words": []
  }
}).then(data => {
  console.log(data);
});
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

#### Input
* input `object`
  * access_token **required** `string`: Access Token
  * req **required** [ClusteringRequestEntity](#clusteringrequestentity)

#### Output
* output [ClusterResponseEntity](#clusterresponseentity)



## Definitions

### ClusterEntity
* ClusterEntity `object`
  * center **required** `array`: center
    * items `number`
  * words **required** `array`: words
    * items [FactorEntity](#factorentity)

### ClusterResponseEntity
* ClusterResponseEntity `object`
  * clusters `array`: Clusters
    * items [ClusterEntity](#clusterentity)
  * endTime **required** `string`: End date
  * log **required** `string`: Log message
  * num **required** `string`: Cluster num
  * processTime **required** `string`: Process time [millisecond]
  * startTime **required** `string`: Start date

### ClusteringRequestEntity
* ClusteringRequestEntity `object`
  * iter `integer`: iter [max 100, default 10]
  * num `integer`: num [max 100, default 10]
  * words **required** `array`: words [max 1000 words]
    * items `string`

### FactorEntity
* FactorEntity `object`
  * similarity **required** `number`: similarity
  * word **required** `string`: word


