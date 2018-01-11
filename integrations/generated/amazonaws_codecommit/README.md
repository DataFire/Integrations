# @datafire/amazonaws_codecommit

Client library for AWS CodeCommit

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_codecommit
```
```js
let amazonaws_codecommit = require('@datafire/amazonaws_codecommit').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

amazonaws_codecommit.BatchGetRepositories({}).then(data => {
  console.log(data);
})
```

## Description

<fullname>AWS CodeCommit</fullname> <p>This is the <i>AWS CodeCommit API Reference</i>. This reference provides descriptions of the operations and data types for AWS CodeCommit API along with usage examples.</p> <p>You can use the AWS CodeCommit API to work with the following objects:</p> <p>Repositories, by calling the following:</p> <ul> <li> <p> <a>BatchGetRepositories</a>, which returns information about one or more repositories associated with your AWS account.</p> </li> <li> <p> <a>CreateRepository</a>, which creates an AWS CodeCommit repository.</p> </li> <li> <p> <a>DeleteRepository</a>, which deletes an AWS CodeCommit repository.</p> </li> <li> <p> <a>GetRepository</a>, which returns information about a specified repository.</p> </li> <li> <p> <a>ListRepositories</a>, which lists all AWS CodeCommit repositories associated with your AWS account.</p> </li> <li> <p> <a>UpdateRepositoryDescription</a>, which sets or updates the description of the repository.</p> </li> <li> <p> <a>UpdateRepositoryName</a>, which changes the name of the repository. If you change the name of a repository, no other users of that repository will be able to access it until you send them the new HTTPS or SSH URL to use.</p> </li> </ul> <p>Branches, by calling the following:</p> <ul> <li> <p> <a>CreateBranch</a>, which creates a new branch in a specified repository.</p> </li> <li> <p> <a>DeleteBranch</a>, which deletes the specified branch in a repository unless it is the default branch.</p> </li> <li> <p> <a>GetBranch</a>, which returns information about a specified branch.</p> </li> <li> <p> <a>ListBranches</a>, which lists all branches for a specified repository.</p> </li> <li> <p> <a>UpdateDefaultBranch</a>, which changes the default branch for a repository.</p> </li> </ul> <p>Information about committed code in a repository, by calling the following:</p> <ul> <li> <p> <a>GetBlob</a>, which returns the base-64 encoded content of an individual Git blob object within a repository.</p> </li> <li> <p> <a>GetCommit</a>, which returns information about a commit, including commit messages and author and committer information.</p> </li> <li> <p> <a>GetDifferences</a>, which returns information about the differences in a valid commit specifier (such as a branch, tag, HEAD, commit ID or other fully qualified reference).</p> </li> </ul> <p>Pull requests, by calling the following:</p> <ul> <li> <p> <a>CreatePullRequest</a>, which creates a pull request in a specified repository.</p> </li> <li> <p> <a>DescribePullRequestEvents</a>, which returns information about one or more pull request events.</p> </li> <li> <p> <a>GetCommentsForPullRequest</a>, which returns information about comments on a specified pull request.</p> </li> <li> <p> <a>GetMergeConflicts</a>, which returns information about merge conflicts between the source and destination branch in a pull request.</p> </li> <li> <p> <a>GetPullRequest</a>, which returns information about a specified pull request.</p> </li> <li> <p> <a>ListPullRequests</a>, which lists all pull requests for a repository.</p> </li> <li> <p> <a>MergePullRequestByFastForward</a>, which merges the source destination branch of a pull request into the specified destination branch for that pull request using the fast-forward merge option.</p> </li> <li> <p> <a>PostCommentForPullRequest</a>, which posts a comment to a pull request at the specified line, file, or request.</p> </li> <li> <p> <a>UpdatePullRequestDescription</a>, which updates the description of a pull request.</p> </li> <li> <p> <a>UpdatePullRequestStatus</a>, which updates the status of a pull request.</p> </li> <li> <p> <a>UpdatePullRequestTitle</a>, which updates the title of a pull request.</p> </li> </ul> <p>Information about comments in a repository, by calling the following:</p> <ul> <li> <p> <a>DeleteCommentContent</a>, which deletes the content of a comment on a commit in a repository.</p> </li> <li> <p> <a>GetComment</a>, which returns information about a comment on a commit.</p> </li> <li> <p> <a>GetCommentsForComparedCommit</a>, which returns information about comments on the comparison between two commit specifiers in a repository.</p> </li> <li> <p> <a>PostCommentForComparedCommit</a>, which creates a comment on the comparison between two commit specifiers in a repository.</p> </li> <li> <p> <a>PostCommentReply</a>, which creates a reply to a comment.</p> </li> <li> <p> <a>UpdateComment</a>, which updates the content of a comment on a commit in a repository.</p> </li> </ul> <p>Triggers, by calling the following:</p> <ul> <li> <p> <a>GetRepositoryTriggers</a>, which returns information about triggers configured for a repository.</p> </li> <li> <p> <a>PutRepositoryTriggers</a>, which replaces all triggers for a repository and can be used to create or delete triggers.</p> </li> <li> <p> <a>TestRepositoryTriggers</a>, which tests the functionality of a repository trigger by sending data to the trigger target.</p> </li> </ul> <p>For information about how to use AWS CodeCommit, see the <a href="http://docs.aws.amazon.com/codecommit/latest/userguide/welcome.html">AWS CodeCommit User Guide</a>.</p>

## Actions

### BatchGetRepositories



```js
amazonaws_codecommit.BatchGetRepositories({
  "repositoryNames": []
}, context)
```

#### Input
* input `object`
  * repositoryNames **required** [RepositoryNameList](#repositorynamelist)

#### Output
* output [BatchGetRepositoriesOutput](#batchgetrepositoriesoutput)

### CreateBranch



```js
amazonaws_codecommit.CreateBranch({
  "repositoryName": "",
  "branchName": "",
  "commitId": ""
}, context)
```

#### Input
* input `object`
  * branchName **required** [BranchName](#branchname)
  * commitId **required** [CommitId](#commitid)
  * repositoryName **required** [RepositoryName](#repositoryname)

#### Output
*Output schema unknown*

### CreateRepository



```js
amazonaws_codecommit.CreateRepository({
  "repositoryName": ""
}, context)
```

#### Input
* input `object`
  * repositoryDescription [RepositoryDescription](#repositorydescription)
  * repositoryName **required** [RepositoryName](#repositoryname)

#### Output
* output [CreateRepositoryOutput](#createrepositoryoutput)

### DeleteBranch



```js
amazonaws_codecommit.DeleteBranch({
  "repositoryName": "",
  "branchName": ""
}, context)
```

#### Input
* input `object`
  * branchName **required** [BranchName](#branchname)
  * repositoryName **required** [RepositoryName](#repositoryname)

#### Output
* output [DeleteBranchOutput](#deletebranchoutput)

### DeleteRepository



```js
amazonaws_codecommit.DeleteRepository({
  "repositoryName": ""
}, context)
```

#### Input
* input `object`
  * repositoryName **required** [RepositoryName](#repositoryname)

#### Output
* output [DeleteRepositoryOutput](#deleterepositoryoutput)

### GetBlob



```js
amazonaws_codecommit.GetBlob({
  "repositoryName": "",
  "blobId": ""
}, context)
```

#### Input
* input `object`
  * blobId **required** [ObjectId](#objectid)
  * repositoryName **required** [RepositoryName](#repositoryname)

#### Output
* output [GetBlobOutput](#getbloboutput)

### GetBranch



```js
amazonaws_codecommit.GetBranch({}, context)
```

#### Input
* input `object`
  * branchName [BranchName](#branchname)
  * repositoryName [RepositoryName](#repositoryname)

#### Output
* output [GetBranchOutput](#getbranchoutput)

### GetCommit



```js
amazonaws_codecommit.GetCommit({
  "repositoryName": "",
  "commitId": ""
}, context)
```

#### Input
* input `object`
  * commitId **required** [ObjectId](#objectid)
  * repositoryName **required** [RepositoryName](#repositoryname)

#### Output
* output [GetCommitOutput](#getcommitoutput)

### GetDifferences



```js
amazonaws_codecommit.GetDifferences({
  "repositoryName": "",
  "afterCommitSpecifier": ""
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults [Limit](#limit)
  * NextToken [NextToken](#nexttoken)
  * afterCommitSpecifier **required** [CommitName](#commitname)
  * afterPath [Path](#path)
  * beforeCommitSpecifier [CommitName](#commitname)
  * beforePath [Path](#path)
  * repositoryName **required** [RepositoryName](#repositoryname)

#### Output
* output [GetDifferencesOutput](#getdifferencesoutput)

### GetRepository



```js
amazonaws_codecommit.GetRepository({
  "repositoryName": ""
}, context)
```

#### Input
* input `object`
  * repositoryName **required** [RepositoryName](#repositoryname)

#### Output
* output [GetRepositoryOutput](#getrepositoryoutput)

### GetRepositoryTriggers



```js
amazonaws_codecommit.GetRepositoryTriggers({
  "repositoryName": ""
}, context)
```

#### Input
* input `object`
  * repositoryName **required** [RepositoryName](#repositoryname)

#### Output
* output [GetRepositoryTriggersOutput](#getrepositorytriggersoutput)

### ListBranches



```js
amazonaws_codecommit.ListBranches({
  "repositoryName": ""
}, context)
```

#### Input
* input `object`
  * nextToken `string`
  * nextToken [NextToken](#nexttoken)
  * repositoryName **required** [RepositoryName](#repositoryname)

#### Output
* output [ListBranchesOutput](#listbranchesoutput)

### ListRepositories



```js
amazonaws_codecommit.ListRepositories({}, context)
```

#### Input
* input `object`
  * nextToken `string`
  * nextToken [NextToken](#nexttoken)
  * order [OrderEnum](#orderenum)
  * sortBy [SortByEnum](#sortbyenum)

#### Output
* output [ListRepositoriesOutput](#listrepositoriesoutput)

### PutRepositoryTriggers



```js
amazonaws_codecommit.PutRepositoryTriggers({
  "repositoryName": "",
  "triggers": []
}, context)
```

#### Input
* input `object`
  * repositoryName **required** [RepositoryName](#repositoryname)
  * triggers **required** [RepositoryTriggersList](#repositorytriggerslist)

#### Output
* output [PutRepositoryTriggersOutput](#putrepositorytriggersoutput)

### TestRepositoryTriggers



```js
amazonaws_codecommit.TestRepositoryTriggers({
  "repositoryName": "",
  "triggers": []
}, context)
```

#### Input
* input `object`
  * repositoryName **required** [RepositoryName](#repositoryname)
  * triggers **required** [RepositoryTriggersList](#repositorytriggerslist)

#### Output
* output [TestRepositoryTriggersOutput](#testrepositorytriggersoutput)

### UpdateDefaultBranch



```js
amazonaws_codecommit.UpdateDefaultBranch({
  "repositoryName": "",
  "defaultBranchName": ""
}, context)
```

#### Input
* input `object`
  * defaultBranchName **required** [BranchName](#branchname)
  * repositoryName **required** [RepositoryName](#repositoryname)

#### Output
*Output schema unknown*

### UpdateRepositoryDescription



```js
amazonaws_codecommit.UpdateRepositoryDescription({
  "repositoryName": ""
}, context)
```

#### Input
* input `object`
  * repositoryDescription [RepositoryDescription](#repositorydescription)
  * repositoryName **required** [RepositoryName](#repositoryname)

#### Output
*Output schema unknown*

### UpdateRepositoryName



```js
amazonaws_codecommit.UpdateRepositoryName({
  "oldName": "",
  "newName": ""
}, context)
```

#### Input
* input `object`
  * newName **required** [RepositoryName](#repositoryname)
  * oldName **required** [RepositoryName](#repositoryname)

#### Output
*Output schema unknown*



## Definitions

### AccountId
* AccountId `string`

### AdditionalData
* AdditionalData `string`

### Arn
* Arn `string`

### BatchGetRepositoriesInput
* BatchGetRepositoriesInput `object`: Represents the input of a batch get repositories operation.
  * repositoryNames **required** [RepositoryNameList](#repositorynamelist)

### BatchGetRepositoriesOutput
* BatchGetRepositoriesOutput `object`: Represents the output of a batch get repositories operation.
  * repositories [RepositoryMetadataList](#repositorymetadatalist)
  * repositoriesNotFound [RepositoryNotFoundList](#repositorynotfoundlist)

### BlobIdDoesNotExistException
* BlobIdDoesNotExistException `object`: The specified blob does not exist.

### BlobIdRequiredException
* BlobIdRequiredException `object`: A blob ID is required but was not specified.

### BlobMetadata
* BlobMetadata `object`: Returns information about a specific Git blob object.
  * blobId [ObjectId](#objectid)
  * mode [Mode](#mode)
  * path [Path](#path)

### BranchDoesNotExistException
* BranchDoesNotExistException `object`: The specified branch does not exist.

### BranchInfo
* BranchInfo `object`: Returns information about a branch.
  * branchName [BranchName](#branchname)
  * commitId [CommitId](#commitid)

### BranchName
* BranchName `string`

### BranchNameExistsException
* BranchNameExistsException `object`: The specified branch name already exists.

### BranchNameList
* BranchNameList `array`
  * items [BranchName](#branchname)

### BranchNameRequiredException
* BranchNameRequiredException `object`: A branch name is required but was not specified.

### ChangeTypeEnum
* ChangeTypeEnum `string` (values: A, M, D)

### CloneUrlHttp
* CloneUrlHttp `string`

### CloneUrlSsh
* CloneUrlSsh `string`

### Commit
* Commit `object`: Returns information about a specific commit.
  * additionalData [AdditionalData](#additionaldata)
  * author [UserInfo](#userinfo)
  * commitId [ObjectId](#objectid)
  * committer [UserInfo](#userinfo)
  * message [Message](#message)
  * parents [ParentList](#parentlist)
  * treeId [ObjectId](#objectid)

### CommitDoesNotExistException
* CommitDoesNotExistException `object`: The specified commit does not exist or no commit was specified, and the specified repository has no default branch.

### CommitId
* CommitId `string`

### CommitIdDoesNotExistException
* CommitIdDoesNotExistException `object`: The specified commit ID does not exist.

### CommitIdRequiredException
* CommitIdRequiredException `object`: A commit ID was not specified.

### CommitName
* CommitName `string`

### CommitRequiredException
* CommitRequiredException `object`: A commit was not specified.

### CreateBranchInput
* CreateBranchInput `object`: Represents the input of a create branch operation.
  * branchName **required** [BranchName](#branchname)
  * commitId **required** [CommitId](#commitid)
  * repositoryName **required** [RepositoryName](#repositoryname)

### CreateRepositoryInput
* CreateRepositoryInput `object`: Represents the input of a create repository operation.
  * repositoryDescription [RepositoryDescription](#repositorydescription)
  * repositoryName **required** [RepositoryName](#repositoryname)

### CreateRepositoryOutput
* CreateRepositoryOutput `object`: Represents the output of a create repository operation.
  * repositoryMetadata [RepositoryMetadata](#repositorymetadata)

### CreationDate
* CreationDate `string`

### Date
* Date `string`

### DefaultBranchCannotBeDeletedException
* DefaultBranchCannotBeDeletedException `object`: The specified branch is the default branch for the repository, and cannot be deleted. To delete this branch, you must first set another branch as the default branch.

### DeleteBranchInput
* DeleteBranchInput `object`: Represents the input of a delete branch operation.
  * branchName **required** [BranchName](#branchname)
  * repositoryName **required** [RepositoryName](#repositoryname)

### DeleteBranchOutput
* DeleteBranchOutput `object`: Represents the output of a delete branch operation.
  * deletedBranch [BranchInfo](#branchinfo)

### DeleteRepositoryInput
* DeleteRepositoryInput `object`: Represents the input of a delete repository operation.
  * repositoryName **required** [RepositoryName](#repositoryname)

### DeleteRepositoryOutput
* DeleteRepositoryOutput `object`: Represents the output of a delete repository operation.
  * repositoryId [RepositoryId](#repositoryid)

### Difference
* Difference `object`: Returns information about a set of differences for a commit specifier.
  * afterBlob [BlobMetadata](#blobmetadata)
  * beforeBlob [BlobMetadata](#blobmetadata)
  * changeType [ChangeTypeEnum](#changetypeenum)

### DifferenceList
* DifferenceList `array`
  * items [Difference](#difference)

### Email
* Email `string`

### EncryptionIntegrityChecksFailedException
* EncryptionIntegrityChecksFailedException `object`: An encryption integrity check failed.

### EncryptionKeyAccessDeniedException
* EncryptionKeyAccessDeniedException `object`: An encryption key could not be accessed.

### EncryptionKeyDisabledException
* EncryptionKeyDisabledException `object`: The encryption key is disabled.

### EncryptionKeyNotFoundException
* EncryptionKeyNotFoundException `object`: No encryption key was found.

### EncryptionKeyUnavailableException
* EncryptionKeyUnavailableException `object`: The encryption key is not available.

### FileTooLargeException
* FileTooLargeException `object`: The specified file exceeds the file size limit for AWS CodeCommit. For more information about limits in AWS CodeCommit, see <a href="http://docs.aws.amazon.com/codecommit/latest/userguide/limits.html">AWS CodeCommit User Guide</a>.

### GetBlobInput
* GetBlobInput `object`: Represents the input of a get blob operation.
  * blobId **required** [ObjectId](#objectid)
  * repositoryName **required** [RepositoryName](#repositoryname)

### GetBlobOutput
* GetBlobOutput `object`: Represents the output of a get blob operation.
  * content **required** [blob](#blob)

### GetBranchInput
* GetBranchInput `object`: Represents the input of a get branch operation.
  * branchName [BranchName](#branchname)
  * repositoryName [RepositoryName](#repositoryname)

### GetBranchOutput
* GetBranchOutput `object`: Represents the output of a get branch operation.
  * branch [BranchInfo](#branchinfo)

### GetCommitInput
* GetCommitInput `object`: Represents the input of a get commit operation.
  * commitId **required** [ObjectId](#objectid)
  * repositoryName **required** [RepositoryName](#repositoryname)

### GetCommitOutput
* GetCommitOutput `object`: Represents the output of a get commit operation.
  * commit **required** [Commit](#commit)

### GetDifferencesInput
* GetDifferencesInput `object`
  * MaxResults [Limit](#limit)
  * NextToken [NextToken](#nexttoken)
  * afterCommitSpecifier **required** [CommitName](#commitname)
  * afterPath [Path](#path)
  * beforeCommitSpecifier [CommitName](#commitname)
  * beforePath [Path](#path)
  * repositoryName **required** [RepositoryName](#repositoryname)

### GetDifferencesOutput
* GetDifferencesOutput `object`
  * NextToken [NextToken](#nexttoken)
  * differences [DifferenceList](#differencelist)

### GetRepositoryInput
* GetRepositoryInput `object`: Represents the input of a get repository operation.
  * repositoryName **required** [RepositoryName](#repositoryname)

### GetRepositoryOutput
* GetRepositoryOutput `object`: Represents the output of a get repository operation.
  * repositoryMetadata [RepositoryMetadata](#repositorymetadata)

### GetRepositoryTriggersInput
* GetRepositoryTriggersInput `object`: Represents the input of a get repository triggers operation.
  * repositoryName **required** [RepositoryName](#repositoryname)

### GetRepositoryTriggersOutput
* GetRepositoryTriggersOutput `object`: Represents the output of a get repository triggers operation.
  * configurationId [RepositoryTriggersConfigurationId](#repositorytriggersconfigurationid)
  * triggers [RepositoryTriggersList](#repositorytriggerslist)

### InvalidBlobIdException
* InvalidBlobIdException `object`: The specified blob is not valid.

### InvalidBranchNameException
* InvalidBranchNameException `object`: The specified branch name is not valid.

### InvalidCommitException
* InvalidCommitException `object`: The specified commit is not valid.

### InvalidCommitIdException
* InvalidCommitIdException `object`: The specified commit ID is not valid.

### InvalidContinuationTokenException
* InvalidContinuationTokenException `object`: The specified continuation token is not valid.

### InvalidMaxResultsException
* InvalidMaxResultsException `object`: The specified number of maximum results is not valid.

### InvalidOrderException
* InvalidOrderException `object`: The specified sort order is not valid.

### InvalidPathException
* InvalidPathException `object`: The specified path is not valid.

### InvalidRepositoryDescriptionException
* InvalidRepositoryDescriptionException `object`: The specified repository description is not valid.

### InvalidRepositoryNameException
* InvalidRepositoryNameException `object`: <p>At least one specified repository name is not valid.</p> <note> <p>This exception only occurs when a specified repository name is not valid. Other exceptions occur when a required repository parameter is missing, or when a specified repository does not exist.</p> </note>

### InvalidRepositoryTriggerBranchNameException
* InvalidRepositoryTriggerBranchNameException `object`: One or more branch names specified for the trigger is not valid.

### InvalidRepositoryTriggerCustomDataException
* InvalidRepositoryTriggerCustomDataException `object`: The custom data provided for the trigger is not valid.

### InvalidRepositoryTriggerDestinationArnException
* InvalidRepositoryTriggerDestinationArnException `object`: The Amazon Resource Name (ARN) for the trigger is not valid for the specified destination. The most common reason for this error is that the ARN does not meet the requirements for the service type.

### InvalidRepositoryTriggerEventsException
* InvalidRepositoryTriggerEventsException `object`: One or more events specified for the trigger is not valid. Check to make sure that all events specified match the requirements for allowed events.

### InvalidRepositoryTriggerNameException
* InvalidRepositoryTriggerNameException `object`: The name of the trigger is not valid.

### InvalidRepositoryTriggerRegionException
* InvalidRepositoryTriggerRegionException `object`: The region for the trigger target does not match the region for the repository. Triggers must be created in the same region as the target for the trigger.

### InvalidSortByException
* InvalidSortByException `object`: The specified sort by value is not valid.

### LastModifiedDate
* LastModifiedDate `string`

### Limit
* Limit `integer`

### ListBranchesInput
* ListBranchesInput `object`: Represents the input of a list branches operation.
  * nextToken [NextToken](#nexttoken)
  * repositoryName **required** [RepositoryName](#repositoryname)

### ListBranchesOutput
* ListBranchesOutput `object`: Represents the output of a list branches operation.
  * branches [BranchNameList](#branchnamelist)
  * nextToken [NextToken](#nexttoken)

### ListRepositoriesInput
* ListRepositoriesInput `object`: Represents the input of a list repositories operation.
  * nextToken [NextToken](#nexttoken)
  * order [OrderEnum](#orderenum)
  * sortBy [SortByEnum](#sortbyenum)

### ListRepositoriesOutput
* ListRepositoriesOutput `object`: Represents the output of a list repositories operation.
  * nextToken [NextToken](#nexttoken)
  * repositories [RepositoryNameIdPairList](#repositorynameidpairlist)

### MaximumBranchesExceededException
* MaximumBranchesExceededException `object`: The number of branches for the trigger was exceeded.

### MaximumRepositoryNamesExceededException
* MaximumRepositoryNamesExceededException `object`: The maximum number of allowed repository names was exceeded. Currently, this number is 25.

### MaximumRepositoryTriggersExceededException
* MaximumRepositoryTriggersExceededException `object`: The number of triggers allowed for the repository was exceeded.

### Message
* Message `string`

### Mode
* Mode `string`

### Name
* Name `string`

### NextToken
* NextToken `string`

### ObjectId
* ObjectId `string`

### OrderEnum
* OrderEnum `string` (values: ascending, descending)

### ParentList
* ParentList `array`
  * items [ObjectId](#objectid)

### Path
* Path `string`

### PathDoesNotExistException
* PathDoesNotExistException `object`: The specified path does not exist.

### PutRepositoryTriggersInput
* PutRepositoryTriggersInput `object`: Represents the input ofa put repository triggers operation.
  * repositoryName **required** [RepositoryName](#repositoryname)
  * triggers **required** [RepositoryTriggersList](#repositorytriggerslist)

### PutRepositoryTriggersOutput
* PutRepositoryTriggersOutput `object`: Represents the output of a put repository triggers operation.
  * configurationId [RepositoryTriggersConfigurationId](#repositorytriggersconfigurationid)

### RepositoryDescription
* RepositoryDescription `string`

### RepositoryDoesNotExistException
* RepositoryDoesNotExistException `object`: The specified repository does not exist.

### RepositoryId
* RepositoryId `string`

### RepositoryLimitExceededException
* RepositoryLimitExceededException `object`: A repository resource limit was exceeded.

### RepositoryMetadata
* RepositoryMetadata `object`: Information about a repository.
  * Arn [Arn](#arn)
  * accountId [AccountId](#accountid)
  * cloneUrlHttp [CloneUrlHttp](#cloneurlhttp)
  * cloneUrlSsh [CloneUrlSsh](#cloneurlssh)
  * creationDate [CreationDate](#creationdate)
  * defaultBranch [BranchName](#branchname)
  * lastModifiedDate [LastModifiedDate](#lastmodifieddate)
  * repositoryDescription [RepositoryDescription](#repositorydescription)
  * repositoryId [RepositoryId](#repositoryid)
  * repositoryName [RepositoryName](#repositoryname)

### RepositoryMetadataList
* RepositoryMetadataList `array`
  * items [RepositoryMetadata](#repositorymetadata)

### RepositoryName
* RepositoryName `string`

### RepositoryNameExistsException
* RepositoryNameExistsException `object`: The specified repository name already exists.

### RepositoryNameIdPair
* RepositoryNameIdPair `object`: Information about a repository name and ID.
  * repositoryId [RepositoryId](#repositoryid)
  * repositoryName [RepositoryName](#repositoryname)

### RepositoryNameIdPairList
* RepositoryNameIdPairList `array`
  * items [RepositoryNameIdPair](#repositorynameidpair)

### RepositoryNameList
* RepositoryNameList `array`
  * items [RepositoryName](#repositoryname)

### RepositoryNameRequiredException
* RepositoryNameRequiredException `object`: A repository name is required but was not specified.

### RepositoryNamesRequiredException
* RepositoryNamesRequiredException `object`: A repository names object is required but was not specified.

### RepositoryNotFoundList
* RepositoryNotFoundList `array`
  * items [RepositoryName](#repositoryname)

### RepositoryTrigger
* RepositoryTrigger `object`: Information about a trigger for a repository.
  * branches [BranchNameList](#branchnamelist)
  * customData [RepositoryTriggerCustomData](#repositorytriggercustomdata)
  * destinationArn **required** [Arn](#arn)
  * events **required** [RepositoryTriggerEventList](#repositorytriggereventlist)
  * name **required** [RepositoryTriggerName](#repositorytriggername)

### RepositoryTriggerBranchNameListRequiredException
* RepositoryTriggerBranchNameListRequiredException `object`: At least one branch name is required but was not specified in the trigger configuration.

### RepositoryTriggerCustomData
* RepositoryTriggerCustomData `string`

### RepositoryTriggerDestinationArnRequiredException
* RepositoryTriggerDestinationArnRequiredException `object`: A destination ARN for the target service for the trigger is required but was not specified.

### RepositoryTriggerEventEnum
* RepositoryTriggerEventEnum `string` (values: all, updateReference, createReference, deleteReference)

### RepositoryTriggerEventList
* RepositoryTriggerEventList `array`
  * items [RepositoryTriggerEventEnum](#repositorytriggereventenum)

### RepositoryTriggerEventsListRequiredException
* RepositoryTriggerEventsListRequiredException `object`: At least one event for the trigger is required but was not specified.

### RepositoryTriggerExecutionFailure
* RepositoryTriggerExecutionFailure `object`: A trigger failed to run.
  * failureMessage [RepositoryTriggerExecutionFailureMessage](#repositorytriggerexecutionfailuremessage)
  * trigger [RepositoryTriggerName](#repositorytriggername)

### RepositoryTriggerExecutionFailureList
* RepositoryTriggerExecutionFailureList `array`
  * items [RepositoryTriggerExecutionFailure](#repositorytriggerexecutionfailure)

### RepositoryTriggerExecutionFailureMessage
* RepositoryTriggerExecutionFailureMessage `string`

### RepositoryTriggerName
* RepositoryTriggerName `string`

### RepositoryTriggerNameList
* RepositoryTriggerNameList `array`
  * items [RepositoryTriggerName](#repositorytriggername)

### RepositoryTriggerNameRequiredException
* RepositoryTriggerNameRequiredException `object`: A name for the trigger is required but was not specified.

### RepositoryTriggersConfigurationId
* RepositoryTriggersConfigurationId `string`

### RepositoryTriggersList
* RepositoryTriggersList `array`
  * items [RepositoryTrigger](#repositorytrigger)

### RepositoryTriggersListRequiredException
* RepositoryTriggersListRequiredException `object`: The list of triggers for the repository is required but was not specified.

### SortByEnum
* SortByEnum `string` (values: repositoryName, lastModifiedDate)

### TestRepositoryTriggersInput
* TestRepositoryTriggersInput `object`: Represents the input of a test repository triggers operation.
  * repositoryName **required** [RepositoryName](#repositoryname)
  * triggers **required** [RepositoryTriggersList](#repositorytriggerslist)

### TestRepositoryTriggersOutput
* TestRepositoryTriggersOutput `object`: Represents the output of a test repository triggers operation.
  * failedExecutions [RepositoryTriggerExecutionFailureList](#repositorytriggerexecutionfailurelist)
  * successfulExecutions [RepositoryTriggerNameList](#repositorytriggernamelist)

### UpdateDefaultBranchInput
* UpdateDefaultBranchInput `object`: Represents the input of an update default branch operation.
  * defaultBranchName **required** [BranchName](#branchname)
  * repositoryName **required** [RepositoryName](#repositoryname)

### UpdateRepositoryDescriptionInput
* UpdateRepositoryDescriptionInput `object`: Represents the input of an update repository description operation.
  * repositoryDescription [RepositoryDescription](#repositorydescription)
  * repositoryName **required** [RepositoryName](#repositoryname)

### UpdateRepositoryNameInput
* UpdateRepositoryNameInput `object`: Represents the input of an update repository description operation.
  * newName **required** [RepositoryName](#repositoryname)
  * oldName **required** [RepositoryName](#repositoryname)

### UserInfo
* UserInfo `object`: Information about the user who made a specified commit.
  * date [Date](#date)
  * email [Email](#email)
  * name [Name](#name)

### blob
* blob `string`


