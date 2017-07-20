# @datafire/amazonaws_codecommit

Client library for AWS CodeCommit

## Installation and Usage
```bash
npm install --save datafire @datafire/amazonaws_codecommit
```

```js
let datafire = require('datafire');
let amazonaws_codecommit = require('@datafire/amazonaws_codecommit').actions;

let account = {
  hmac: "",
}
let context = new datafire.Context({
  accounts: {
    amazonaws_codecommit: account,
  }
})

amazonaws_codecommit.BatchGetRepositories({}, context).then(data => {
  console.log(data);
})
```

## Description
<fullname>AWS CodeCommit</fullname> <p>This is the <i>AWS CodeCommit API Reference</i>. This reference provides descriptions of the operations and data types for AWS CodeCommit API along with usage examples.</p> <p>You can use the AWS CodeCommit API to work with the following objects:</p> <p>Repositories, by calling the following:</p> <ul> <li> <p> <a>BatchGetRepositories</a>, which returns information about one or more repositories associated with your AWS account</p> </li> <li> <p> <a>CreateRepository</a>, which creates an AWS CodeCommit repository</p> </li> <li> <p> <a>DeleteRepository</a>, which deletes an AWS CodeCommit repository</p> </li> <li> <p> <a>GetRepository</a>, which returns information about a specified repository</p> </li> <li> <p> <a>ListRepositories</a>, which lists all AWS CodeCommit repositories associated with your AWS account</p> </li> <li> <p> <a>UpdateRepositoryDescription</a>, which sets or updates the description of the repository</p> </li> <li> <p> <a>UpdateRepositoryName</a>, which changes the name of the repository. If you change the name of a repository, no other users of that repository will be able to access it until you send them the new HTTPS or SSH URL to use.</p> </li> </ul> <p>Branches, by calling the following:</p> <ul> <li> <p> <a>CreateBranch</a>, which creates a new branch in a specified repository</p> </li> <li> <p> <a>GetBranch</a>, which returns information about a specified branch</p> </li> <li> <p> <a>ListBranches</a>, which lists all branches for a specified repository</p> </li> <li> <p> <a>UpdateDefaultBranch</a>, which changes the default branch for a repository</p> </li> </ul> <p>Information about committed code in a repository, by calling the following:</p> <ul> <li> <p> <a>GetBlob</a>, which returns the base-64 encoded content of an individual Git blob object within a repository</p> </li> <li> <p> <a>GetCommit</a>, which returns information about a commit, including commit messages and author and committer information</p> </li> <li> <p> <a>GetDifferences</a>, which returns information about the differences in a valid commit specifier (such as a branch, tag, HEAD, commit ID or other fully qualified reference)</p> </li> </ul> <p>Triggers, by calling the following:</p> <ul> <li> <p> <a>GetRepositoryTriggers</a>, which returns information about triggers configured for a repository</p> </li> <li> <p> <a>PutRepositoryTriggers</a>, which replaces all triggers for a repository and can be used to create or delete triggers</p> </li> <li> <p> <a>TestRepositoryTriggers</a>, which tests the functionality of a repository trigger by sending data to the trigger target</p> </li> </ul> <p>For information about how to use AWS CodeCommit, see the <a href="http://docs.aws.amazon.com/codecommit/latest/userguide/welcome.html">AWS CodeCommit User Guide</a>.</p>

## Actions
### BatchGetRepositories
<p>Returns information about one or more repositories.</p> <note> <p>The description field for a repository accepts all HTML characters and all valid Unicode characters. Applications that do not HTML-encode the description and display it in a web page could expose users to potentially malicious code. Make sure that you HTML-encode the description field in any application that uses this API to display the repository description on a web page.</p> </note>


```js
amazonaws_codecommit.BatchGetRepositories({
  "body": {
    "repositoryNames": []
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - Represents the input of a batch get repositories operation.
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### CreateBranch
<p>Creates a new branch in a repository and points the branch to a commit.</p> <note> <p>Calling the create branch operation does not set a repository's default branch. To do this, call the update default branch operation.</p> </note>


```js
amazonaws_codecommit.CreateBranch({
  "body": {
    "repositoryName": "",
    "branchName": "",
    "commitId": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - Represents the input of a create branch operation.
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### CreateRepository
Creates a new, empty repository.


```js
amazonaws_codecommit.CreateRepository({
  "body": {
    "repositoryName": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - Represents the input of a create repository operation.
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### DeleteRepository
<p>Deletes a repository. If a specified repository was already deleted, a null repository ID will be returned.</p> <important><p>Deleting a repository also deletes all associated objects and metadata. After a repository is deleted, all future push calls to the deleted repository will fail.</p> </important>


```js
amazonaws_codecommit.DeleteRepository({
  "body": {
    "repositoryName": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - Represents the input of a delete repository operation.
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### GetBlob
Returns the base-64 encoded content of an individual blob within a repository.


```js
amazonaws_codecommit.GetBlob({
  "body": {
    "repositoryName": "",
    "blobId": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - Represents the input of a get blob operation.
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### GetBranch
Returns information about a repository branch, including its name and the last commit ID.


```js
amazonaws_codecommit.GetBranch({
  "body": {},
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - Represents the input of a get branch operation.
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### GetCommit
Returns information about a commit, including commit message and committer information.


```js
amazonaws_codecommit.GetCommit({
  "body": {
    "repositoryName": "",
    "commitId": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - Represents the input of a get commit operation.
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### GetDifferences
Returns information about the differences in a valid commit specifier (such as a branch, tag, HEAD, commit ID or other fully qualified reference). Results can be limited to a specified path.


```js
amazonaws_codecommit.GetDifferences({
  "body": {
    "repositoryName": "",
    "afterCommitSpecifier": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* MaxResults (string) - Pagination limit
* NextToken (string) - Pagination token
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### GetRepository
<p>Returns information about a repository.</p> <note> <p>The description field for a repository accepts all HTML characters and all valid Unicode characters. Applications that do not HTML-encode the description and display it in a web page could expose users to potentially malicious code. Make sure that you HTML-encode the description field in any application that uses this API to display the repository description on a web page.</p> </note>


```js
amazonaws_codecommit.GetRepository({
  "body": {
    "repositoryName": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - Represents the input of a get repository operation.
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### GetRepositoryTriggers
Gets information about triggers configured for a repository.


```js
amazonaws_codecommit.GetRepositoryTriggers({
  "body": {
    "repositoryName": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - Represents the input of a get repository triggers operation.
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### ListBranches
Gets information about one or more branches in a repository.


```js
amazonaws_codecommit.ListBranches({
  "body": {
    "repositoryName": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - Represents the input of a list branches operation.
* nextToken (string) - Pagination token
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### ListRepositories
Gets information about one or more repositories.


```js
amazonaws_codecommit.ListRepositories({
  "body": {},
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - Represents the input of a list repositories operation.
* nextToken (string) - Pagination token
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### PutRepositoryTriggers
Replaces all triggers for a repository. This can be used to create or delete triggers.


```js
amazonaws_codecommit.PutRepositoryTriggers({
  "body": {
    "repositoryName": "",
    "triggers": []
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - Represents the input ofa put repository triggers operation.
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### TestRepositoryTriggers
Tests the functionality of repository triggers by sending information to the trigger target. If real data is available in the repository, the test will send data from the last commit. If no data is available, sample data will be generated.


```js
amazonaws_codecommit.TestRepositoryTriggers({
  "body": {
    "repositoryName": "",
    "triggers": []
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - Represents the input of a test repository triggers operation.
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### UpdateDefaultBranch
<p>Sets or changes the default branch name for the specified repository.</p> <note> <p>If you use this operation to change the default branch name to the current default branch name, a success message is returned even though the default branch did not change.</p> </note>


```js
amazonaws_codecommit.UpdateDefaultBranch({
  "body": {
    "repositoryName": "",
    "defaultBranchName": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - Represents the input of an update default branch operation.
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### UpdateRepositoryDescription
<p>Sets or changes the comment or description for a repository.</p> <note> <p>The description field for a repository accepts all HTML characters and all valid Unicode characters. Applications that do not HTML-encode the description and display it in a web page could expose users to potentially malicious code. Make sure that you HTML-encode the description field in any application that uses this API to display the repository description on a web page.</p> </note>


```js
amazonaws_codecommit.UpdateRepositoryDescription({
  "body": {
    "repositoryName": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - Represents the input of an update repository description operation.
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### UpdateRepositoryName
Renames a repository. The repository name must be unique across the calling AWS account. In addition, repository names are limited to 100 alphanumeric, dash, and underscore characters, and cannot include certain characters. The suffix ".git" is prohibited. For a full description of the limits on repository names, see <a href="http://docs.aws.amazon.com/codecommit/latest/userguide/limits.html">Limits</a> in the AWS CodeCommit User Guide.


```js
amazonaws_codecommit.UpdateRepositoryName({
  "body": {
    "oldName": "",
    "newName": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required** - Represents the input of an update repository description operation.
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

