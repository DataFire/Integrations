# @datafire/fisheye_local

Client library for FishEye

## Installation and Usage
```bash
npm install --save @datafire/fisheye_local
```
```js
let fisheye_local = require('@datafire/fisheye_local').create();

.then(data => {
  console.log(data);
});
```

## Description



## Actions

### getChangesetsForText
List of changesets from a repository.


```js
fisheye_local.getChangesetsForText({}, context)
```

#### Input
* input `object`
  * rep `string`: the key of the repository
  * path `string`: repository path
  * committer `string`: ID of the committer
  * comment `string`: comment to match
  * p4JobFixed `string`: Perforce option to select the changesets marked as fixing
  * expand `string`: expand query parameter to specify the maximum number of results
  * beforeCsid `string`: parent of the changesets

#### Output
*Output schema unknown*

### getChangesetDetails
Retrieves detailed information about a set of changesets in a repository, designed to be used with the FishEye commit graph


```js
fisheye_local.getChangesetDetails({
  "repository": ""
}, context)
```

#### Input
* input `object`
  * repository **required** `string`: the key of the repository

#### Output
*Output schema unknown*

### findSliceData
finds slice data the query


```js
fisheye_local.findSliceData({
  "repository": ""
}, context)
```

#### Input
* input `object`
  * branch `string`: the set of branches to search. If not specified, will search all branches
  * id `string`: the id of the changeset which we are
  * direction `string`: the direction to traverse. May be "before", "after" or "around"
  * size `integer`: the number of changesets to return in the slice
  * repository **required** `string`: the key of the repository to search

#### Output
*Output schema unknown*

### getAllRepositories
List all the repositories.


```js
fisheye_local.getAllRepositories(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### getRepositoryInfo
Get the information about a repository.


```js
fisheye_local.getRepositoryInfo({
  "repository": ""
}, context)
```

#### Input
* input `object`
  * repository **required** `string`: the key of the repository

#### Output
*Output schema unknown*

### getChangeset



```js
fisheye_local.getChangeset({
  "csid": "",
  "repository": ""
}, context)
```

#### Input
* input `object`
  * csid **required** `string`: the ChangesetID of the changeset to return.
  * repository **required** `string`: the key of the repository to query.

#### Output
*Output schema unknown*

### listChangesets
Get a list of changesets on a repository.


```js
fisheye_local.listChangesets({
  "repository": ""
}, context)
```

#### Input
* input `object`
  * path `string`: restrict the changesets to those in this path, should be "/" to look at the whole repository.
  * start `string`: only return changesets after this date.
  * end `string`: only return changesets before this date.
  * maxReturn `string`: the maximum number of changesets to return.
  * repository **required** `string`: the key of the repository to query.

#### Output
*Output schema unknown*

### listPathHistory
Get a list of the file revisions for a specific path.


```js
fisheye_local.listPathHistory({
  "repository": ""
}, context)
```

#### Input
* input `object`
  * path `string`: the path to query.
  * repository **required** `string`: the key of the repository to query.

#### Output
*Output schema unknown*

### getPathList
Get a list of information about files and directories in a path.


```js
fisheye_local.getPathList({
  "repository": ""
}, context)
```

#### Input
* input `object`
  * path `string`: the path to query, with respect to the fisheye repository root.
  * repository **required** `string`: the key of the repository to query.

#### Output
*Output schema unknown*

### getRevisionInfo



```js
fisheye_local.getRevisionInfo({
  "repository": ""
}, context)
```

#### Input
* input `object`
  * path `string`: the path of the filerevision, with respect to the fisheye repository root.
  * revision `string`: the id of the filerevision to retrieve.
  * repository **required** `string`: the key of the repository to query.

#### Output
*Output schema unknown*

### listTagsForRevision



```js
fisheye_local.listTagsForRevision({
  "repository": ""
}, context)
```

#### Input
* input `object`
  * path `string`: the path of the filerevision, with respect to the fisheye repository root.
  * revision `string`: the id of the filerevision to retrieve.
  * repository **required** `string`: the key of the repository to query.

#### Output
*Output schema unknown*

### getCrossRepositoryQuery
Execute a query across repositories. By default, this will search all repositories.


```js
fisheye_local.getCrossRepositoryQuery({}, context)
```

#### Input
* input `object`
  * query `string`: text to search for in commit message and p4 jobId. Must not be empty.
  * repository `string`: restrict search to only these repositories (by their keys)
  * expand `string`: expand query parameter to specify the maximum number of results. Format is changesets[n:m].revisions[n:m],reviews

#### Output
*Output schema unknown*

### getQuery
Execute a FishEye query against a specific repository.


```js
fisheye_local.getQuery({
  "repository": ""
}, context)
```

#### Input
* input `object`
  * query `string`: FishEye query to execute
  * maxReturn `string`: maximum number of results (which can be left unspecified, but in that case,
  * repository **required** `string`: the key of the repository

#### Output
*Output schema unknown*

### getQueryAsRows
Execute a FishEye query (that contains a "return" statement) against a specific repository.


```js
fisheye_local.getQueryAsRows({
  "repository": ""
}, context)
```

#### Input
* input `object`
  * query `string`: FishEye query to execute (which must contain a "return" statement)
  * maxReturn `string`: maximum number of results (which can be left unspecified, but in that case,
  * repository **required** `string`: the key of the repository

#### Output
*Output schema unknown*

### getReviewsForChangeset
Retrieve a list of reviews for a changeset in a given repository.


```js
fisheye_local.getReviewsForChangeset({
  "repository": ""
}, context)
```

#### Input
* input `object`
  * repository **required** `string`: the key of the repository

#### Output
*Output schema unknown*

### getReviewsForChangesets
Retrieve a list of reviews for each given changeset in a given repository.


```js
fisheye_local.getReviewsForChangesets({
  "repository": ""
}, context)
```

#### Input
* input `object`
  * repository **required** `string`: the key of the repository

#### Output
*Output schema unknown*



## Definitions

*This integration has no definitions*
