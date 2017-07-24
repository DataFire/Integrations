# @datafire/amazonaws_codecommit

Client library for AWS CodeCommit

## Installation and Usage
```bash
npm install --save datafire @datafire/amazonaws_codecommit
```

```js
let datafire = require('datafire');
let amazonaws_codecommit = require('@datafire/amazonaws_codecommit').actions;
let context = new datafire.Context();

amazonaws_codecommit.BatchGetRepositories({}, context).then(data => {
  console.log(data);
})
```

## Description
<fullname>AWS CodeCommit</fullname> <p>This is the <i>AWS CodeCommit API Reference</i>. This reference provides descriptions of the operations and data types for AWS CodeCommit API along with usage examples.</p> <p>You can use the AWS CodeCommit API to work with the following objects:</p> <p>Repositories, by calling the following:</p> <ul> <li> <p> <a>BatchGetRepositories</a>, which returns information about one or more repositories associated with your AWS account</p> </li> <li> <p> <a>CreateRepository</a>, which creates an AWS CodeCommit repository</p> </li> <li> <p> <a>DeleteRepository</a>, which deletes an AWS CodeCommit repository</p> </li> <li> <p> <a>GetRepository</a>, which returns information about a specified repository</p> </li> <li> <p> <a>ListRepositories</a>, which lists all AWS CodeCommit repositories associated with your AWS account</p> </li> <li> <p> <a>UpdateRepositoryDescription</a>, which sets or updates the description of the repository</p> </li> <li> <p> <a>UpdateRepositoryName</a>, which changes the name of the repository. If you change the name of a repository, no other users of that repository will be able to access it until you send them the new HTTPS or SSH URL to use.</p> </li> </ul> <p>Branches, by calling the following:</p> <ul> <li> <p> <a>CreateBranch</a>, which creates a new branch in a specified repository</p> </li> <li> <p> <a>GetBranch</a>, which returns information about a specified branch</p> </li> <li> <p> <a>ListBranches</a>, which lists all branches for a specified repository</p> </li> <li> <p> <a>UpdateDefaultBranch</a>, which changes the default branch for a repository</p> </li> </ul> <p>Information about committed code in a repository, by calling the following:</p> <ul> <li> <p> <a>GetBlob</a>, which returns the base-64 encoded content of an individual Git blob object within a repository</p> </li> <li> <p> <a>GetCommit</a>, which returns information about a commit, including commit messages and author and committer information</p> </li> <li> <p> <a>GetDifferences</a>, which returns information about the differences in a valid commit specifier (such as a branch, tag, HEAD, commit ID or other fully qualified reference)</p> </li> </ul> <p>Triggers, by calling the following:</p> <ul> <li> <p> <a>GetRepositoryTriggers</a>, which returns information about triggers configured for a repository</p> </li> <li> <p> <a>PutRepositoryTriggers</a>, which replaces all triggers for a repository and can be used to create or delete triggers</p> </li> <li> <p> <a>TestRepositoryTriggers</a>, which tests the functionality of a repository trigger by sending data to the trigger target</p> </li> </ul> <p>For information about how to use AWS CodeCommit, see the <a href="http://docs.aws.amazon.com/codecommit/latest/userguide/welcome.html">AWS CodeCommit User Guide</a>.</p>

## Actions
### BatchGetRepositories



```js
amazonaws_codecommit.BatchGetRepositories({}, context)
```


### CreateBranch



```js
amazonaws_codecommit.CreateBranch({}, context)
```


### CreateRepository



```js
amazonaws_codecommit.CreateRepository({}, context)
```


### DeleteRepository



```js
amazonaws_codecommit.DeleteRepository({}, context)
```


### GetBlob



```js
amazonaws_codecommit.GetBlob({}, context)
```


### GetBranch



```js
amazonaws_codecommit.GetBranch({}, context)
```


### GetCommit



```js
amazonaws_codecommit.GetCommit({}, context)
```


### GetDifferences



```js
amazonaws_codecommit.GetDifferences({}, context)
```

#### Parameters
* MaxResults (string)
* NextToken (string)

### GetRepository



```js
amazonaws_codecommit.GetRepository({}, context)
```


### GetRepositoryTriggers



```js
amazonaws_codecommit.GetRepositoryTriggers({}, context)
```


### ListBranches



```js
amazonaws_codecommit.ListBranches({}, context)
```

#### Parameters
* nextToken (string)

### ListRepositories



```js
amazonaws_codecommit.ListRepositories({}, context)
```

#### Parameters
* nextToken (string)

### PutRepositoryTriggers



```js
amazonaws_codecommit.PutRepositoryTriggers({}, context)
```


### TestRepositoryTriggers



```js
amazonaws_codecommit.TestRepositoryTriggers({}, context)
```


### UpdateDefaultBranch



```js
amazonaws_codecommit.UpdateDefaultBranch({}, context)
```


### UpdateRepositoryDescription



```js
amazonaws_codecommit.UpdateRepositoryDescription({}, context)
```


### UpdateRepositoryName



```js
amazonaws_codecommit.UpdateRepositoryName({}, context)
```


