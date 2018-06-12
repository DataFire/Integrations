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

amazonaws_codecommit.BatchGetRepositories({
  "repositoryNames": []
}).then(data => {
  console.log(data);
});
```

## Description

<fullname>AWS CodeCommit</fullname> <p>This is the <i>AWS CodeCommit API Reference</i>. This reference provides descriptions of the operations and data types for AWS CodeCommit API along with usage examples.</p> <p>You can use the AWS CodeCommit API to work with the following objects:</p> <p>Repositories, by calling the following:</p> <ul> <li> <p> <a>BatchGetRepositories</a>, which returns information about one or more repositories associated with your AWS account.</p> </li> <li> <p> <a>CreateRepository</a>, which creates an AWS CodeCommit repository.</p> </li> <li> <p> <a>DeleteRepository</a>, which deletes an AWS CodeCommit repository.</p> </li> <li> <p> <a>GetRepository</a>, which returns information about a specified repository.</p> </li> <li> <p> <a>ListRepositories</a>, which lists all AWS CodeCommit repositories associated with your AWS account.</p> </li> <li> <p> <a>UpdateRepositoryDescription</a>, which sets or updates the description of the repository.</p> </li> <li> <p> <a>UpdateRepositoryName</a>, which changes the name of the repository. If you change the name of a repository, no other users of that repository will be able to access it until you send them the new HTTPS or SSH URL to use.</p> </li> </ul> <p>Branches, by calling the following:</p> <ul> <li> <p> <a>CreateBranch</a>, which creates a new branch in a specified repository.</p> </li> <li> <p> <a>DeleteBranch</a>, which deletes the specified branch in a repository unless it is the default branch.</p> </li> <li> <p> <a>GetBranch</a>, which returns information about a specified branch.</p> </li> <li> <p> <a>ListBranches</a>, which lists all branches for a specified repository.</p> </li> <li> <p> <a>UpdateDefaultBranch</a>, which changes the default branch for a repository.</p> </li> </ul> <p>Files, by calling the following:</p> <ul> <li> <p> <a>PutFile</a>, which adds or modifies a file in a specified repository and branch.</p> </li> </ul> <p>Information about committed code in a repository, by calling the following:</p> <ul> <li> <p> <a>GetBlob</a>, which returns the base-64 encoded content of an individual Git blob object within a repository.</p> </li> <li> <p> <a>GetCommit</a>, which returns information about a commit, including commit messages and author and committer information.</p> </li> <li> <p> <a>GetDifferences</a>, which returns information about the differences in a valid commit specifier (such as a branch, tag, HEAD, commit ID or other fully qualified reference).</p> </li> </ul> <p>Pull requests, by calling the following:</p> <ul> <li> <p> <a>CreatePullRequest</a>, which creates a pull request in a specified repository.</p> </li> <li> <p> <a>DescribePullRequestEvents</a>, which returns information about one or more pull request events.</p> </li> <li> <p> <a>GetCommentsForPullRequest</a>, which returns information about comments on a specified pull request.</p> </li> <li> <p> <a>GetMergeConflicts</a>, which returns information about merge conflicts between the source and destination branch in a pull request.</p> </li> <li> <p> <a>GetPullRequest</a>, which returns information about a specified pull request.</p> </li> <li> <p> <a>ListPullRequests</a>, which lists all pull requests for a repository.</p> </li> <li> <p> <a>MergePullRequestByFastForward</a>, which merges the source destination branch of a pull request into the specified destination branch for that pull request using the fast-forward merge option.</p> </li> <li> <p> <a>PostCommentForPullRequest</a>, which posts a comment to a pull request at the specified line, file, or request.</p> </li> <li> <p> <a>UpdatePullRequestDescription</a>, which updates the description of a pull request.</p> </li> <li> <p> <a>UpdatePullRequestStatus</a>, which updates the status of a pull request.</p> </li> <li> <p> <a>UpdatePullRequestTitle</a>, which updates the title of a pull request.</p> </li> </ul> <p>Information about comments in a repository, by calling the following:</p> <ul> <li> <p> <a>DeleteCommentContent</a>, which deletes the content of a comment on a commit in a repository.</p> </li> <li> <p> <a>GetComment</a>, which returns information about a comment on a commit.</p> </li> <li> <p> <a>GetCommentsForComparedCommit</a>, which returns information about comments on the comparison between two commit specifiers in a repository.</p> </li> <li> <p> <a>PostCommentForComparedCommit</a>, which creates a comment on the comparison between two commit specifiers in a repository.</p> </li> <li> <p> <a>PostCommentReply</a>, which creates a reply to a comment.</p> </li> <li> <p> <a>UpdateComment</a>, which updates the content of a comment on a commit in a repository.</p> </li> </ul> <p>Triggers, by calling the following:</p> <ul> <li> <p> <a>GetRepositoryTriggers</a>, which returns information about triggers configured for a repository.</p> </li> <li> <p> <a>PutRepositoryTriggers</a>, which replaces all triggers for a repository and can be used to create or delete triggers.</p> </li> <li> <p> <a>TestRepositoryTriggers</a>, which tests the functionality of a repository trigger by sending data to the trigger target.</p> </li> </ul> <p>For information about how to use AWS CodeCommit, see the <a href="http://docs.aws.amazon.com/codecommit/latest/userguide/welcome.html">AWS CodeCommit User Guide</a>.</p>

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

### CreatePullRequest



```js
amazonaws_codecommit.CreatePullRequest({
  "title": "",
  "targets": []
}, context)
```

#### Input
* input `object`
  * clientRequestToken [ClientRequestToken](#clientrequesttoken)
  * description [Description](#description)
  * targets **required** [TargetList](#targetlist)
  * title **required** [Title](#title)

#### Output
* output [CreatePullRequestOutput](#createpullrequestoutput)

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

### DeleteCommentContent



```js
amazonaws_codecommit.DeleteCommentContent({
  "commentId": ""
}, context)
```

#### Input
* input `object`
  * commentId **required** [CommentId](#commentid)

#### Output
* output [DeleteCommentContentOutput](#deletecommentcontentoutput)

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

### DescribePullRequestEvents



```js
amazonaws_codecommit.DescribePullRequestEvents({
  "pullRequestId": ""
}, context)
```

#### Input
* input `object`
  * maxResults `string`
  * nextToken `string`
  * actorArn [Arn](#arn)
  * maxResults [MaxResults](#maxresults)
  * nextToken [NextToken](#nexttoken)
  * pullRequestEventType [PullRequestEventType](#pullrequesteventtype)
  * pullRequestId **required** [PullRequestId](#pullrequestid)

#### Output
* output [DescribePullRequestEventsOutput](#describepullrequesteventsoutput)

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

### GetComment



```js
amazonaws_codecommit.GetComment({
  "commentId": ""
}, context)
```

#### Input
* input `object`
  * commentId **required** [CommentId](#commentid)

#### Output
* output [GetCommentOutput](#getcommentoutput)

### GetCommentsForComparedCommit



```js
amazonaws_codecommit.GetCommentsForComparedCommit({
  "repositoryName": "",
  "afterCommitId": ""
}, context)
```

#### Input
* input `object`
  * maxResults `string`
  * nextToken `string`
  * afterCommitId **required** [CommitId](#commitid)
  * beforeCommitId [CommitId](#commitid)
  * maxResults [MaxResults](#maxresults)
  * nextToken [NextToken](#nexttoken)
  * repositoryName **required** [RepositoryName](#repositoryname)

#### Output
* output [GetCommentsForComparedCommitOutput](#getcommentsforcomparedcommitoutput)

### GetCommentsForPullRequest



```js
amazonaws_codecommit.GetCommentsForPullRequest({
  "pullRequestId": ""
}, context)
```

#### Input
* input `object`
  * maxResults `string`
  * nextToken `string`
  * afterCommitId [CommitId](#commitid)
  * beforeCommitId [CommitId](#commitid)
  * maxResults [MaxResults](#maxresults)
  * nextToken [NextToken](#nexttoken)
  * pullRequestId **required** [PullRequestId](#pullrequestid)
  * repositoryName [RepositoryName](#repositoryname)

#### Output
* output [GetCommentsForPullRequestOutput](#getcommentsforpullrequestoutput)

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

### GetMergeConflicts



```js
amazonaws_codecommit.GetMergeConflicts({
  "repositoryName": "",
  "destinationCommitSpecifier": "",
  "sourceCommitSpecifier": "",
  "mergeOption": ""
}, context)
```

#### Input
* input `object`
  * destinationCommitSpecifier **required** [CommitName](#commitname)
  * mergeOption **required** [MergeOptionTypeEnum](#mergeoptiontypeenum)
  * repositoryName **required** [RepositoryName](#repositoryname)
  * sourceCommitSpecifier **required** [CommitName](#commitname)

#### Output
* output [GetMergeConflictsOutput](#getmergeconflictsoutput)

### GetPullRequest



```js
amazonaws_codecommit.GetPullRequest({
  "pullRequestId": ""
}, context)
```

#### Input
* input `object`
  * pullRequestId **required** [PullRequestId](#pullrequestid)

#### Output
* output [GetPullRequestOutput](#getpullrequestoutput)

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

### ListPullRequests



```js
amazonaws_codecommit.ListPullRequests({
  "repositoryName": ""
}, context)
```

#### Input
* input `object`
  * maxResults `string`
  * nextToken `string`
  * authorArn [Arn](#arn)
  * maxResults [MaxResults](#maxresults)
  * nextToken [NextToken](#nexttoken)
  * pullRequestStatus [PullRequestStatusEnum](#pullrequeststatusenum)
  * repositoryName **required** [RepositoryName](#repositoryname)

#### Output
* output [ListPullRequestsOutput](#listpullrequestsoutput)

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

### MergePullRequestByFastForward



```js
amazonaws_codecommit.MergePullRequestByFastForward({
  "pullRequestId": "",
  "repositoryName": ""
}, context)
```

#### Input
* input `object`
  * pullRequestId **required** [PullRequestId](#pullrequestid)
  * repositoryName **required** [RepositoryName](#repositoryname)
  * sourceCommitId [CommitId](#commitid)

#### Output
* output [MergePullRequestByFastForwardOutput](#mergepullrequestbyfastforwardoutput)

### PostCommentForComparedCommit



```js
amazonaws_codecommit.PostCommentForComparedCommit({
  "repositoryName": "",
  "afterCommitId": "",
  "content": ""
}, context)
```

#### Input
* input `object`
  * afterCommitId **required** [CommitId](#commitid)
  * beforeCommitId [CommitId](#commitid)
  * clientRequestToken [ClientRequestToken](#clientrequesttoken)
  * content **required** [Content](#content)
  * location [Location](#location)
  * repositoryName **required** [RepositoryName](#repositoryname)

#### Output
* output [PostCommentForComparedCommitOutput](#postcommentforcomparedcommitoutput)

### PostCommentForPullRequest



```js
amazonaws_codecommit.PostCommentForPullRequest({
  "pullRequestId": "",
  "repositoryName": "",
  "beforeCommitId": "",
  "afterCommitId": "",
  "content": ""
}, context)
```

#### Input
* input `object`
  * afterCommitId **required** [CommitId](#commitid)
  * beforeCommitId **required** [CommitId](#commitid)
  * clientRequestToken [ClientRequestToken](#clientrequesttoken)
  * content **required** [Content](#content)
  * location [Location](#location)
  * pullRequestId **required** [PullRequestId](#pullrequestid)
  * repositoryName **required** [RepositoryName](#repositoryname)

#### Output
* output [PostCommentForPullRequestOutput](#postcommentforpullrequestoutput)

### PostCommentReply



```js
amazonaws_codecommit.PostCommentReply({
  "inReplyTo": "",
  "content": ""
}, context)
```

#### Input
* input `object`
  * clientRequestToken [ClientRequestToken](#clientrequesttoken)
  * content **required** [Content](#content)
  * inReplyTo **required** [CommentId](#commentid)

#### Output
* output [PostCommentReplyOutput](#postcommentreplyoutput)

### PutFile



```js
amazonaws_codecommit.PutFile({
  "repositoryName": "",
  "branchName": "",
  "fileContent": "",
  "filePath": ""
}, context)
```

#### Input
* input `object`
  * branchName **required** [BranchName](#branchname)
  * commitMessage [Message](#message)
  * email [Email](#email)
  * fileContent **required** [FileContent](#filecontent)
  * fileMode [FileModeTypeEnum](#filemodetypeenum)
  * filePath **required** [Path](#path)
  * name [Name](#name)
  * parentCommitId [CommitId](#commitid)
  * repositoryName **required** [RepositoryName](#repositoryname)

#### Output
* output [PutFileOutput](#putfileoutput)

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

### UpdateComment



```js
amazonaws_codecommit.UpdateComment({
  "commentId": "",
  "content": ""
}, context)
```

#### Input
* input `object`
  * commentId **required** [CommentId](#commentid)
  * content **required** [Content](#content)

#### Output
* output [UpdateCommentOutput](#updatecommentoutput)

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

### UpdatePullRequestDescription



```js
amazonaws_codecommit.UpdatePullRequestDescription({
  "pullRequestId": "",
  "description": ""
}, context)
```

#### Input
* input `object`
  * description **required** [Description](#description)
  * pullRequestId **required** [PullRequestId](#pullrequestid)

#### Output
* output [UpdatePullRequestDescriptionOutput](#updatepullrequestdescriptionoutput)

### UpdatePullRequestStatus



```js
amazonaws_codecommit.UpdatePullRequestStatus({
  "pullRequestId": "",
  "pullRequestStatus": ""
}, context)
```

#### Input
* input `object`
  * pullRequestId **required** [PullRequestId](#pullrequestid)
  * pullRequestStatus **required** [PullRequestStatusEnum](#pullrequeststatusenum)

#### Output
* output [UpdatePullRequestStatusOutput](#updatepullrequeststatusoutput)

### UpdatePullRequestTitle



```js
amazonaws_codecommit.UpdatePullRequestTitle({
  "pullRequestId": "",
  "title": ""
}, context)
```

#### Input
* input `object`
  * pullRequestId **required** [PullRequestId](#pullrequestid)
  * title **required** [Title](#title)

#### Output
* output [UpdatePullRequestTitleOutput](#updatepullrequesttitleoutput)

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

### ActorDoesNotExistException
* ActorDoesNotExistException `object`: The specified Amazon Resource Name (ARN) does not exist in the AWS account.

### AdditionalData
* AdditionalData `string`

### Arn
* Arn `string`

### AuthorDoesNotExistException
* AuthorDoesNotExistException `object`: The specified Amazon Resource Name (ARN) does not exist in the AWS account.

### BatchGetRepositoriesInput
* BatchGetRepositoriesInput `object`: Represents the input of a batch get repositories operation.
  * repositoryNames **required** [RepositoryNameList](#repositorynamelist)

### BatchGetRepositoriesOutput
* BatchGetRepositoriesOutput `object`: Represents the output of a batch get repositories operation.
  * repositories [RepositoryMetadataList](#repositorymetadatalist)
  * repositoriesNotFound [RepositoryNotFoundList](#repositorynotfoundlist)

### BeforeCommitIdAndAfterCommitIdAreSameException
* BeforeCommitIdAndAfterCommitIdAreSameException `object`: The before commit ID and the after commit ID are the same, which is not valid. The before commit ID and the after commit ID must be different commit IDs.

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

### BranchNameIsTagNameException
* BranchNameIsTagNameException `object`: The specified branch name is not valid because it is a tag name. Type the name of a current branch in the repository. For a list of valid branch names, use <a>ListBranches</a>.

### BranchNameList
* BranchNameList `array`
  * items [BranchName](#branchname)

### BranchNameRequiredException
* BranchNameRequiredException `object`: A branch name is required but was not specified.

### ChangeTypeEnum
* ChangeTypeEnum `string` (values: A, M, D)

### ClientRequestToken
* ClientRequestToken `string`

### ClientRequestTokenRequiredException
* ClientRequestTokenRequiredException `object`: A client request token is required. A client request token is an unique, client-generated idempotency token that when provided in a request, ensures the request cannot be repeated with a changed parameter. If a request is received with the same parameters and a token is included, the request will return information about the initial request that used that token.

### CloneUrlHttp
* CloneUrlHttp `string`

### CloneUrlSsh
* CloneUrlSsh `string`

### Comment
* Comment `object`: Returns information about a specific comment.
  * authorArn [Arn](#arn)
  * clientRequestToken [ClientRequestToken](#clientrequesttoken)
  * commentId [CommentId](#commentid)
  * content [Content](#content)
  * creationDate [CreationDate](#creationdate)
  * deleted [IsCommentDeleted](#iscommentdeleted)
  * inReplyTo [CommentId](#commentid)
  * lastModifiedDate [LastModifiedDate](#lastmodifieddate)

### CommentContentRequiredException
* CommentContentRequiredException `object`: The comment is empty. You must provide some content for a comment. The content cannot be null.

### CommentContentSizeLimitExceededException
* CommentContentSizeLimitExceededException `object`: The comment is too large. Comments are limited to 1,000 characters.

### CommentDeletedException
* CommentDeletedException `object`: This comment has already been deleted. You cannot edit or delete a deleted comment.

### CommentDoesNotExistException
* CommentDoesNotExistException `object`: No comment exists with the provided ID. Verify that you have provided the correct ID, and then try again.

### CommentId
* CommentId `string`

### CommentIdRequiredException
* CommentIdRequiredException `object`: The comment ID is missing or null. A comment ID is required.

### CommentNotCreatedByCallerException
* CommentNotCreatedByCallerException `object`: You cannot modify or delete this comment. Only comment authors can modify or delete their comments.

### Comments
* Comments `array`
  * items [Comment](#comment)

### CommentsForComparedCommit
* CommentsForComparedCommit `object`: Returns information about comments on the comparison between two commits.
  * afterBlobId [ObjectId](#objectid)
  * afterCommitId [CommitId](#commitid)
  * beforeBlobId [ObjectId](#objectid)
  * beforeCommitId [CommitId](#commitid)
  * comments [Comments](#comments)
  * location [Location](#location)
  * repositoryName [RepositoryName](#repositoryname)

### CommentsForComparedCommitData
* CommentsForComparedCommitData `array`
  * items [CommentsForComparedCommit](#commentsforcomparedcommit)

### CommentsForPullRequest
* CommentsForPullRequest `object`: Returns information about comments on a pull request.
  * afterBlobId [ObjectId](#objectid)
  * afterCommitId [CommitId](#commitid)
  * beforeBlobId [ObjectId](#objectid)
  * beforeCommitId [CommitId](#commitid)
  * comments [Comments](#comments)
  * location [Location](#location)
  * pullRequestId [PullRequestId](#pullrequestid)
  * repositoryName [RepositoryName](#repositoryname)

### CommentsForPullRequestData
* CommentsForPullRequestData `array`
  * items [CommentsForPullRequest](#commentsforpullrequest)

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

### CommitMessageLengthExceededException
* CommitMessageLengthExceededException `object`: The commit message is too long. Provide a shorter string. 

### CommitName
* CommitName `string`

### CommitRequiredException
* CommitRequiredException `object`: A commit was not specified.

### Content
* Content `string`

### CreateBranchInput
* CreateBranchInput `object`: Represents the input of a create branch operation.
  * branchName **required** [BranchName](#branchname)
  * commitId **required** [CommitId](#commitid)
  * repositoryName **required** [RepositoryName](#repositoryname)

### CreatePullRequestInput
* CreatePullRequestInput `object`
  * clientRequestToken [ClientRequestToken](#clientrequesttoken)
  * description [Description](#description)
  * targets **required** [TargetList](#targetlist)
  * title **required** [Title](#title)

### CreatePullRequestOutput
* CreatePullRequestOutput `object`
  * pullRequest **required** [PullRequest](#pullrequest)

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

### DeleteCommentContentInput
* DeleteCommentContentInput `object`
  * commentId **required** [CommentId](#commentid)

### DeleteCommentContentOutput
* DeleteCommentContentOutput `object`
  * comment [Comment](#comment)

### DeleteRepositoryInput
* DeleteRepositoryInput `object`: Represents the input of a delete repository operation.
  * repositoryName **required** [RepositoryName](#repositoryname)

### DeleteRepositoryOutput
* DeleteRepositoryOutput `object`: Represents the output of a delete repository operation.
  * repositoryId [RepositoryId](#repositoryid)

### DescribePullRequestEventsInput
* DescribePullRequestEventsInput `object`
  * actorArn [Arn](#arn)
  * maxResults [MaxResults](#maxresults)
  * nextToken [NextToken](#nexttoken)
  * pullRequestEventType [PullRequestEventType](#pullrequesteventtype)
  * pullRequestId **required** [PullRequestId](#pullrequestid)

### DescribePullRequestEventsOutput
* DescribePullRequestEventsOutput `object`
  * nextToken [NextToken](#nexttoken)
  * pullRequestEvents **required** [PullRequestEventList](#pullrequesteventlist)

### Description
* Description `string`

### Difference
* Difference `object`: Returns information about a set of differences for a commit specifier.
  * afterBlob [BlobMetadata](#blobmetadata)
  * beforeBlob [BlobMetadata](#blobmetadata)
  * changeType [ChangeTypeEnum](#changetypeenum)

### DifferenceList
* DifferenceList `array`
  * items [Difference](#difference)

### DirectoryNameConflictsWithFileNameException
* DirectoryNameConflictsWithFileNameException `object`: A file cannot be added to the repository because the specified path name has the same name as a file that already exists in this repository. Either provide a different name for the file, or specify a different path for the file.

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

### EventDate
* EventDate `string`

### FileContent
* FileContent `string`

### FileContentRequiredException
* FileContentRequiredException `object`: The file cannot be added because it is empty. Empty files cannot be added to the repository with this API.

### FileContentSizeLimitExceededException
* FileContentSizeLimitExceededException `object`: The file cannot be added because it is too large. The maximum file size that can be added using PutFile is 6 MB. For files larger than 6 MB but smaller than 2 GB, add them using a Git client.

### FileModeTypeEnum
* FileModeTypeEnum `string` (values: EXECUTABLE, NORMAL, SYMLINK)

### FileNameConflictsWithDirectoryNameException
* FileNameConflictsWithDirectoryNameException `object`: A file cannot be added to the repository because the specified file name has the same name as a directory in this repository. Either provide another name for the file, or add the file in a directory that does not match the file name.

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

### GetCommentInput
* GetCommentInput `object`
  * commentId **required** [CommentId](#commentid)

### GetCommentOutput
* GetCommentOutput `object`
  * comment [Comment](#comment)

### GetCommentsForComparedCommitInput
* GetCommentsForComparedCommitInput `object`
  * afterCommitId **required** [CommitId](#commitid)
  * beforeCommitId [CommitId](#commitid)
  * maxResults [MaxResults](#maxresults)
  * nextToken [NextToken](#nexttoken)
  * repositoryName **required** [RepositoryName](#repositoryname)

### GetCommentsForComparedCommitOutput
* GetCommentsForComparedCommitOutput `object`
  * commentsForComparedCommitData [CommentsForComparedCommitData](#commentsforcomparedcommitdata)
  * nextToken [NextToken](#nexttoken)

### GetCommentsForPullRequestInput
* GetCommentsForPullRequestInput `object`
  * afterCommitId [CommitId](#commitid)
  * beforeCommitId [CommitId](#commitid)
  * maxResults [MaxResults](#maxresults)
  * nextToken [NextToken](#nexttoken)
  * pullRequestId **required** [PullRequestId](#pullrequestid)
  * repositoryName [RepositoryName](#repositoryname)

### GetCommentsForPullRequestOutput
* GetCommentsForPullRequestOutput `object`
  * commentsForPullRequestData [CommentsForPullRequestData](#commentsforpullrequestdata)
  * nextToken [NextToken](#nexttoken)

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

### GetMergeConflictsInput
* GetMergeConflictsInput `object`
  * destinationCommitSpecifier **required** [CommitName](#commitname)
  * mergeOption **required** [MergeOptionTypeEnum](#mergeoptiontypeenum)
  * repositoryName **required** [RepositoryName](#repositoryname)
  * sourceCommitSpecifier **required** [CommitName](#commitname)

### GetMergeConflictsOutput
* GetMergeConflictsOutput `object`
  * destinationCommitId **required** [CommitId](#commitid)
  * mergeable **required** [IsMergeable](#ismergeable)
  * sourceCommitId **required** [CommitId](#commitid)

### GetPullRequestInput
* GetPullRequestInput `object`
  * pullRequestId **required** [PullRequestId](#pullrequestid)

### GetPullRequestOutput
* GetPullRequestOutput `object`
  * pullRequest **required** [PullRequest](#pullrequest)

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

### IdempotencyParameterMismatchException
* IdempotencyParameterMismatchException `object`: The client request token is not valid. Either the token is not in a valid format, or the token has been used in a previous request and cannot be re-used.

### InvalidActorArnException
* InvalidActorArnException `object`: The Amazon Resource Name (ARN) is not valid. Make sure that you have provided the full ARN for the user who initiated the change for the pull request, and then try again.

### InvalidAuthorArnException
* InvalidAuthorArnException `object`: The Amazon Resource Name (ARN) is not valid. Make sure that you have provided the full ARN for the author of the pull request, and then try again.

### InvalidBlobIdException
* InvalidBlobIdException `object`: The specified blob is not valid.

### InvalidBranchNameException
* InvalidBranchNameException `object`: The specified reference name is not valid.

### InvalidClientRequestTokenException
* InvalidClientRequestTokenException `object`: The client request token is not valid.

### InvalidCommentIdException
* InvalidCommentIdException `object`: The comment ID is not in a valid format. Make sure that you have provided the full comment ID.

### InvalidCommitException
* InvalidCommitException `object`: The specified commit is not valid.

### InvalidCommitIdException
* InvalidCommitIdException `object`: The specified commit ID is not valid.

### InvalidContinuationTokenException
* InvalidContinuationTokenException `object`: The specified continuation token is not valid.

### InvalidDescriptionException
* InvalidDescriptionException `object`: The pull request description is not valid. Descriptions are limited to 1,000 characters in length.

### InvalidDestinationCommitSpecifierException
* InvalidDestinationCommitSpecifierException `object`: The destination commit specifier is not valid. You must provide a valid branch name, tag, or full commit ID. 

### InvalidEmailException
* InvalidEmailException `object`: The specified email address either contains one or more characters that are not allowed, or it exceeds the maximum number of characters allowed for an email address.

### InvalidFileLocationException
* InvalidFileLocationException `object`: The location of the file is not valid. Make sure that you include the extension of the file as well as the file name.

### InvalidFileModeException
* InvalidFileModeException `object`: The specified file mode permission is not valid. For a list of valid file mode permissions, see <a>PutFile</a>. 

### InvalidFilePositionException
* InvalidFilePositionException `object`: The position is not valid. Make sure that the line number exists in the version of the file you want to comment on.

### InvalidMaxResultsException
* InvalidMaxResultsException `object`: The specified number of maximum results is not valid.

### InvalidMergeOptionException
* InvalidMergeOptionException `object`: The specified merge option is not valid. The only valid value is FAST_FORWARD_MERGE.

### InvalidOrderException
* InvalidOrderException `object`: The specified sort order is not valid.

### InvalidParentCommitIdException
* InvalidParentCommitIdException `object`: The parent commit ID is not valid. The commit ID cannot be empty, and must match the head commit ID for the branch of the repository where you want to add or update a file.

### InvalidPathException
* InvalidPathException `object`: The specified path is not valid.

### InvalidPullRequestEventTypeException
* InvalidPullRequestEventTypeException `object`: The pull request event type is not valid. 

### InvalidPullRequestIdException
* InvalidPullRequestIdException `object`: The pull request ID is not valid. Make sure that you have provided the full ID and that the pull request is in the specified repository, and then try again.

### InvalidPullRequestStatusException
* InvalidPullRequestStatusException `object`: The pull request status is not valid. The only valid values are <code>OPEN</code> and <code>CLOSED</code>.

### InvalidPullRequestStatusUpdateException
* InvalidPullRequestStatusUpdateException `object`: The pull request status update is not valid. The only valid update is from <code>OPEN</code> to <code>CLOSED</code>.

### InvalidReferenceNameException
* InvalidReferenceNameException `object`: The specified reference name format is not valid. Reference names must conform to the Git references format, for example refs/heads/master. For more information, see <a href="https://git-scm.com/book/en/v2/Git-Internals-Git-References">Git Internals - Git References</a> or consult your Git documentation.

### InvalidRelativeFileVersionEnumException
* InvalidRelativeFileVersionEnumException `object`: Either the enum is not in a valid format, or the specified file version enum is not valid in respect to the current file version.

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

### InvalidSourceCommitSpecifierException
* InvalidSourceCommitSpecifierException `object`: The source commit specifier is not valid. You must provide a valid branch name, tag, or full commit ID.

### InvalidTargetException
* InvalidTargetException `object`: The target for the pull request is not valid. A target must contain the full values for the repository name, source branch, and destination branch for the pull request.

### InvalidTargetsException
* InvalidTargetsException `object`: The targets for the pull request is not valid or not in a valid format. Targets are a list of target objects. Each target object must contain the full values for the repository name, source branch, and destination branch for a pull request.

### InvalidTitleException
* InvalidTitleException `object`: The title of the pull request is not valid. Pull request titles cannot exceed 100 characters in length.

### IsCommentDeleted
* IsCommentDeleted `boolean`

### IsMergeable
* IsMergeable `boolean`

### IsMerged
* IsMerged `boolean`

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

### ListPullRequestsInput
* ListPullRequestsInput `object`
  * authorArn [Arn](#arn)
  * maxResults [MaxResults](#maxresults)
  * nextToken [NextToken](#nexttoken)
  * pullRequestStatus [PullRequestStatusEnum](#pullrequeststatusenum)
  * repositoryName **required** [RepositoryName](#repositoryname)

### ListPullRequestsOutput
* ListPullRequestsOutput `object`
  * nextToken [NextToken](#nexttoken)
  * pullRequestIds **required** [PullRequestIdList](#pullrequestidlist)

### ListRepositoriesInput
* ListRepositoriesInput `object`: Represents the input of a list repositories operation.
  * nextToken [NextToken](#nexttoken)
  * order [OrderEnum](#orderenum)
  * sortBy [SortByEnum](#sortbyenum)

### ListRepositoriesOutput
* ListRepositoriesOutput `object`: Represents the output of a list repositories operation.
  * nextToken [NextToken](#nexttoken)
  * repositories [RepositoryNameIdPairList](#repositorynameidpairlist)

### Location
* Location `object`: Returns information about the location of a change or comment in the comparison between two commits or a pull request.
  * filePath [Path](#path)
  * filePosition [Position](#position)
  * relativeFileVersion [RelativeFileVersionEnum](#relativefileversionenum)

### ManualMergeRequiredException
* ManualMergeRequiredException `object`: The pull request cannot be merged automatically into the destination branch. You must manually merge the branches and resolve any conflicts.

### MaxResults
* MaxResults `integer`

### MaximumBranchesExceededException
* MaximumBranchesExceededException `object`: The number of branches for the trigger was exceeded.

### MaximumOpenPullRequestsExceededException
* MaximumOpenPullRequestsExceededException `object`: You cannot create the pull request because the repository has too many open pull requests. The maximum number of open pull requests for a repository is 1,000. Close one or more open pull requests, and then try again.

### MaximumRepositoryNamesExceededException
* MaximumRepositoryNamesExceededException `object`: The maximum number of allowed repository names was exceeded. Currently, this number is 25.

### MaximumRepositoryTriggersExceededException
* MaximumRepositoryTriggersExceededException `object`: The number of triggers allowed for the repository was exceeded.

### MergeMetadata
* MergeMetadata `object`: Returns information about a merge or potential merge between a source reference and a destination reference in a pull request.
  * isMerged [IsMerged](#ismerged)
  * mergedBy [Arn](#arn)

### MergeOptionRequiredException
* MergeOptionRequiredException `object`: A merge option or stategy is required, and none was provided.

### MergeOptionTypeEnum
* MergeOptionTypeEnum `string` (values: FAST_FORWARD_MERGE)

### MergePullRequestByFastForwardInput
* MergePullRequestByFastForwardInput `object`
  * pullRequestId **required** [PullRequestId](#pullrequestid)
  * repositoryName **required** [RepositoryName](#repositoryname)
  * sourceCommitId [CommitId](#commitid)

### MergePullRequestByFastForwardOutput
* MergePullRequestByFastForwardOutput `object`
  * pullRequest [PullRequest](#pullrequest)

### Message
* Message `string`

### Mode
* Mode `string`

### MultipleRepositoriesInPullRequestException
* MultipleRepositoriesInPullRequestException `object`: You cannot include more than one repository in a pull request. Make sure you have specified only one repository name in your request, and then try again.

### Name
* Name `string`

### NameLengthExceededException
* NameLengthExceededException `object`: The file name is not valid because it has exceeded the character limit for file names. File names, including the path to the file, cannot exceed the character limit. 

### NextToken
* NextToken `string`

### ObjectId
* ObjectId `string`

### OrderEnum
* OrderEnum `string` (values: ascending, descending)

### ParentCommitDoesNotExistException
* ParentCommitDoesNotExistException `object`: The parent commit ID is not valid. The specified parent commit ID does not exist in the specified branch of the repository.

### ParentCommitIdOutdatedException
* ParentCommitIdOutdatedException `object`: The file could not be added because the provided parent commit ID is not the current tip of the specified branch. To view the full commit ID of the current head of the branch, use <a>GetBranch</a>.

### ParentCommitIdRequiredException
* ParentCommitIdRequiredException `object`: A parent commit ID is required. To view the full commit ID of a branch in a repository, use <a>GetBranch</a> or a Git command (for example, git pull or git log).

### ParentList
* ParentList `array`
  * items [ObjectId](#objectid)

### Path
* Path `string`

### PathDoesNotExistException
* PathDoesNotExistException `object`: The specified path does not exist.

### PathRequiredException
* PathRequiredException `object`: The filePath for a location cannot be empty or null.

### Position
* Position `integer`

### PostCommentForComparedCommitInput
* PostCommentForComparedCommitInput `object`
  * afterCommitId **required** [CommitId](#commitid)
  * beforeCommitId [CommitId](#commitid)
  * clientRequestToken [ClientRequestToken](#clientrequesttoken)
  * content **required** [Content](#content)
  * location [Location](#location)
  * repositoryName **required** [RepositoryName](#repositoryname)

### PostCommentForComparedCommitOutput
* PostCommentForComparedCommitOutput `object`
  * afterBlobId [ObjectId](#objectid)
  * afterCommitId [CommitId](#commitid)
  * beforeBlobId [ObjectId](#objectid)
  * beforeCommitId [CommitId](#commitid)
  * comment [Comment](#comment)
  * location [Location](#location)
  * repositoryName [RepositoryName](#repositoryname)

### PostCommentForPullRequestInput
* PostCommentForPullRequestInput `object`
  * afterCommitId **required** [CommitId](#commitid)
  * beforeCommitId **required** [CommitId](#commitid)
  * clientRequestToken [ClientRequestToken](#clientrequesttoken)
  * content **required** [Content](#content)
  * location [Location](#location)
  * pullRequestId **required** [PullRequestId](#pullrequestid)
  * repositoryName **required** [RepositoryName](#repositoryname)

### PostCommentForPullRequestOutput
* PostCommentForPullRequestOutput `object`
  * afterBlobId [ObjectId](#objectid)
  * afterCommitId [CommitId](#commitid)
  * beforeBlobId [ObjectId](#objectid)
  * beforeCommitId [CommitId](#commitid)
  * comment [Comment](#comment)
  * location [Location](#location)
  * pullRequestId [PullRequestId](#pullrequestid)
  * repositoryName [RepositoryName](#repositoryname)

### PostCommentReplyInput
* PostCommentReplyInput `object`
  * clientRequestToken [ClientRequestToken](#clientrequesttoken)
  * content **required** [Content](#content)
  * inReplyTo **required** [CommentId](#commentid)

### PostCommentReplyOutput
* PostCommentReplyOutput `object`
  * comment [Comment](#comment)

### PullRequest
* PullRequest `object`: Returns information about a pull request.
  * authorArn [Arn](#arn)
  * clientRequestToken [ClientRequestToken](#clientrequesttoken)
  * creationDate [CreationDate](#creationdate)
  * description [Description](#description)
  * lastActivityDate [LastModifiedDate](#lastmodifieddate)
  * pullRequestId [PullRequestId](#pullrequestid)
  * pullRequestStatus [PullRequestStatusEnum](#pullrequeststatusenum)
  * pullRequestTargets [PullRequestTargetList](#pullrequesttargetlist)
  * title [Title](#title)

### PullRequestAlreadyClosedException
* PullRequestAlreadyClosedException `object`: The pull request status cannot be updated because it is already closed.

### PullRequestDoesNotExistException
* PullRequestDoesNotExistException `object`: The pull request ID could not be found. Make sure that you have specified the correct repository name and pull request ID, and then try again.

### PullRequestEvent
* PullRequestEvent `object`: Returns information about a pull request event.
  * actorArn [Arn](#arn)
  * eventDate [EventDate](#eventdate)
  * pullRequestEventType [PullRequestEventType](#pullrequesteventtype)
  * pullRequestId [PullRequestId](#pullrequestid)
  * pullRequestMergedStateChangedEventMetadata [PullRequestMergedStateChangedEventMetadata](#pullrequestmergedstatechangedeventmetadata)
  * pullRequestSourceReferenceUpdatedEventMetadata [PullRequestSourceReferenceUpdatedEventMetadata](#pullrequestsourcereferenceupdatedeventmetadata)
  * pullRequestStatusChangedEventMetadata [PullRequestStatusChangedEventMetadata](#pullrequeststatuschangedeventmetadata)

### PullRequestEventList
* PullRequestEventList `array`
  * items [PullRequestEvent](#pullrequestevent)

### PullRequestEventType
* PullRequestEventType `string` (values: PULL_REQUEST_CREATED, PULL_REQUEST_STATUS_CHANGED, PULL_REQUEST_SOURCE_REFERENCE_UPDATED, PULL_REQUEST_MERGE_STATE_CHANGED)

### PullRequestId
* PullRequestId `string`

### PullRequestIdList
* PullRequestIdList `array`
  * items [PullRequestId](#pullrequestid)

### PullRequestIdRequiredException
* PullRequestIdRequiredException `object`: A pull request ID is required, but none was provided.

### PullRequestMergedStateChangedEventMetadata
* PullRequestMergedStateChangedEventMetadata `object`: Returns information about the change in the merge state for a pull request event. 
  * destinationReference [ReferenceName](#referencename)
  * mergeMetadata [MergeMetadata](#mergemetadata)
  * repositoryName [RepositoryName](#repositoryname)

### PullRequestSourceReferenceUpdatedEventMetadata
* PullRequestSourceReferenceUpdatedEventMetadata `object`: Information about an update to the source branch of a pull request.
  * afterCommitId [CommitId](#commitid)
  * beforeCommitId [CommitId](#commitid)
  * repositoryName [RepositoryName](#repositoryname)

### PullRequestStatusChangedEventMetadata
* PullRequestStatusChangedEventMetadata `object`: Information about a change to the status of a pull request.
  * pullRequestStatus [PullRequestStatusEnum](#pullrequeststatusenum)

### PullRequestStatusEnum
* PullRequestStatusEnum `string` (values: OPEN, CLOSED)

### PullRequestStatusRequiredException
* PullRequestStatusRequiredException `object`: A pull request status is required, but none was provided.

### PullRequestTarget
* PullRequestTarget `object`: Returns information about a pull request target.
  * destinationCommit [CommitId](#commitid)
  * destinationReference [ReferenceName](#referencename)
  * mergeMetadata [MergeMetadata](#mergemetadata)
  * repositoryName [RepositoryName](#repositoryname)
  * sourceCommit [CommitId](#commitid)
  * sourceReference [ReferenceName](#referencename)

### PullRequestTargetList
* PullRequestTargetList `array`
  * items [PullRequestTarget](#pullrequesttarget)

### PutFileInput
* PutFileInput `object`
  * branchName **required** [BranchName](#branchname)
  * commitMessage [Message](#message)
  * email [Email](#email)
  * fileContent **required** [FileContent](#filecontent)
  * fileMode [FileModeTypeEnum](#filemodetypeenum)
  * filePath **required** [Path](#path)
  * name [Name](#name)
  * parentCommitId [CommitId](#commitid)
  * repositoryName **required** [RepositoryName](#repositoryname)

### PutFileOutput
* PutFileOutput `object`
  * blobId **required** [ObjectId](#objectid)
  * commitId **required** [ObjectId](#objectid)
  * treeId **required** [ObjectId](#objectid)

### PutRepositoryTriggersInput
* PutRepositoryTriggersInput `object`: Represents the input ofa put repository triggers operation.
  * repositoryName **required** [RepositoryName](#repositoryname)
  * triggers **required** [RepositoryTriggersList](#repositorytriggerslist)

### PutRepositoryTriggersOutput
* PutRepositoryTriggersOutput `object`: Represents the output of a put repository triggers operation.
  * configurationId [RepositoryTriggersConfigurationId](#repositorytriggersconfigurationid)

### ReferenceDoesNotExistException
* ReferenceDoesNotExistException `object`: The specified reference does not exist. You must provide a full commit ID.

### ReferenceName
* ReferenceName `string`

### ReferenceNameRequiredException
* ReferenceNameRequiredException `object`: A reference name is required, but none was provided.

### ReferenceTypeNotSupportedException
* ReferenceTypeNotSupportedException `object`: The specified reference is not a supported type. 

### RelativeFileVersionEnum
* RelativeFileVersionEnum `string` (values: BEFORE, AFTER)

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

### RepositoryNotAssociatedWithPullRequestException
* RepositoryNotAssociatedWithPullRequestException `object`: The repository does not contain any pull requests with that pull request ID. Check to make sure you have provided the correct repository name for the pull request.

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

### SameFileContentException
* SameFileContentException `object`: The file was not added or updated because the content of the file is exactly the same as the content of that file in the repository and branch that you specified.

### SortByEnum
* SortByEnum `string` (values: repositoryName, lastModifiedDate)

### SourceAndDestinationAreSameException
* SourceAndDestinationAreSameException `object`: The source branch and the destination branch for the pull request are the same. You must specify different branches for the source and destination.

### Target
* Target `object`: Returns information about a target for a pull request.
  * destinationReference [ReferenceName](#referencename)
  * repositoryName **required** [RepositoryName](#repositoryname)
  * sourceReference **required** [ReferenceName](#referencename)

### TargetList
* TargetList `array`
  * items [Target](#target)

### TargetRequiredException
* TargetRequiredException `object`: A pull request target is required. It cannot be empty or null. A pull request target must contain the full values for the repository name, source branch, and destination branch for the pull request.

### TargetsRequiredException
* TargetsRequiredException `object`: An array of target objects is required. It cannot be empty or null.

### TestRepositoryTriggersInput
* TestRepositoryTriggersInput `object`: Represents the input of a test repository triggers operation.
  * repositoryName **required** [RepositoryName](#repositoryname)
  * triggers **required** [RepositoryTriggersList](#repositorytriggerslist)

### TestRepositoryTriggersOutput
* TestRepositoryTriggersOutput `object`: Represents the output of a test repository triggers operation.
  * failedExecutions [RepositoryTriggerExecutionFailureList](#repositorytriggerexecutionfailurelist)
  * successfulExecutions [RepositoryTriggerNameList](#repositorytriggernamelist)

### TipOfSourceReferenceIsDifferentException
* TipOfSourceReferenceIsDifferentException `object`: The tip of the source branch in the destination repository does not match the tip of the source branch specified in your request. The pull request might have been updated. Make sure that you have the latest changes.

### TipsDivergenceExceededException
* TipsDivergenceExceededException `object`: The divergence between the tips of the provided commit specifiers is too great to determine whether there might be any merge conflicts. Locally compare the specifiers using <code>git diff</code> or a diff tool.

### Title
* Title `string`

### TitleRequiredException
* TitleRequiredException `object`: A pull request title is required. It cannot be empty or null.

### UpdateCommentInput
* UpdateCommentInput `object`
  * commentId **required** [CommentId](#commentid)
  * content **required** [Content](#content)

### UpdateCommentOutput
* UpdateCommentOutput `object`
  * comment [Comment](#comment)

### UpdateDefaultBranchInput
* UpdateDefaultBranchInput `object`: Represents the input of an update default branch operation.
  * defaultBranchName **required** [BranchName](#branchname)
  * repositoryName **required** [RepositoryName](#repositoryname)

### UpdatePullRequestDescriptionInput
* UpdatePullRequestDescriptionInput `object`
  * description **required** [Description](#description)
  * pullRequestId **required** [PullRequestId](#pullrequestid)

### UpdatePullRequestDescriptionOutput
* UpdatePullRequestDescriptionOutput `object`
  * pullRequest **required** [PullRequest](#pullrequest)

### UpdatePullRequestStatusInput
* UpdatePullRequestStatusInput `object`
  * pullRequestId **required** [PullRequestId](#pullrequestid)
  * pullRequestStatus **required** [PullRequestStatusEnum](#pullrequeststatusenum)

### UpdatePullRequestStatusOutput
* UpdatePullRequestStatusOutput `object`
  * pullRequest **required** [PullRequest](#pullrequest)

### UpdatePullRequestTitleInput
* UpdatePullRequestTitleInput `object`
  * pullRequestId **required** [PullRequestId](#pullrequestid)
  * title **required** [Title](#title)

### UpdatePullRequestTitleOutput
* UpdatePullRequestTitleOutput `object`
  * pullRequest **required** [PullRequest](#pullrequest)

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


