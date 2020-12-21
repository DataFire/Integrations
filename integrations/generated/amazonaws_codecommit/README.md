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

.then(data => {
  console.log(data);
});
```

## Description

<fullname>AWS CodeCommit</fullname> <p>This is the <i>AWS CodeCommit API Reference</i>. This reference provides descriptions of the operations and data types for AWS CodeCommit API along with usage examples.</p> <p>You can use the AWS CodeCommit API to work with the following objects:</p> <p>Repositories, by calling the following:</p> <ul> <li> <p> <a>BatchGetRepositories</a>, which returns information about one or more repositories associated with your AWS account.</p> </li> <li> <p> <a>CreateRepository</a>, which creates an AWS CodeCommit repository.</p> </li> <li> <p> <a>DeleteRepository</a>, which deletes an AWS CodeCommit repository.</p> </li> <li> <p> <a>GetRepository</a>, which returns information about a specified repository.</p> </li> <li> <p> <a>ListRepositories</a>, which lists all AWS CodeCommit repositories associated with your AWS account.</p> </li> <li> <p> <a>UpdateRepositoryDescription</a>, which sets or updates the description of the repository.</p> </li> <li> <p> <a>UpdateRepositoryName</a>, which changes the name of the repository. If you change the name of a repository, no other users of that repository can access it until you send them the new HTTPS or SSH URL to use.</p> </li> </ul> <p>Branches, by calling the following:</p> <ul> <li> <p> <a>CreateBranch</a>, which creates a branch in a specified repository.</p> </li> <li> <p> <a>DeleteBranch</a>, which deletes the specified branch in a repository unless it is the default branch.</p> </li> <li> <p> <a>GetBranch</a>, which returns information about a specified branch.</p> </li> <li> <p> <a>ListBranches</a>, which lists all branches for a specified repository.</p> </li> <li> <p> <a>UpdateDefaultBranch</a>, which changes the default branch for a repository.</p> </li> </ul> <p>Files, by calling the following:</p> <ul> <li> <p> <a>DeleteFile</a>, which deletes the content of a specified file from a specified branch.</p> </li> <li> <p> <a>GetBlob</a>, which returns the base-64 encoded content of an individual Git blob object in a repository.</p> </li> <li> <p> <a>GetFile</a>, which returns the base-64 encoded content of a specified file.</p> </li> <li> <p> <a>GetFolder</a>, which returns the contents of a specified folder or directory.</p> </li> <li> <p> <a>PutFile</a>, which adds or modifies a single file in a specified repository and branch.</p> </li> </ul> <p>Commits, by calling the following:</p> <ul> <li> <p> <a>BatchGetCommits</a>, which returns information about one or more commits in a repository.</p> </li> <li> <p> <a>CreateCommit</a>, which creates a commit for changes to a repository.</p> </li> <li> <p> <a>GetCommit</a>, which returns information about a commit, including commit messages and author and committer information.</p> </li> <li> <p> <a>GetDifferences</a>, which returns information about the differences in a valid commit specifier (such as a branch, tag, HEAD, commit ID, or other fully qualified reference).</p> </li> </ul> <p>Merges, by calling the following:</p> <ul> <li> <p> <a>BatchDescribeMergeConflicts</a>, which returns information about conflicts in a merge between commits in a repository.</p> </li> <li> <p> <a>CreateUnreferencedMergeCommit</a>, which creates an unreferenced commit between two branches or commits for the purpose of comparing them and identifying any potential conflicts.</p> </li> <li> <p> <a>DescribeMergeConflicts</a>, which returns information about merge conflicts between the base, source, and destination versions of a file in a potential merge.</p> </li> <li> <p> <a>GetMergeCommit</a>, which returns information about the merge between a source and destination commit. </p> </li> <li> <p> <a>GetMergeConflicts</a>, which returns information about merge conflicts between the source and destination branch in a pull request.</p> </li> <li> <p> <a>GetMergeOptions</a>, which returns information about the available merge options between two branches or commit specifiers.</p> </li> <li> <p> <a>MergeBranchesByFastForward</a>, which merges two branches using the fast-forward merge option.</p> </li> <li> <p> <a>MergeBranchesBySquash</a>, which merges two branches using the squash merge option.</p> </li> <li> <p> <a>MergeBranchesByThreeWay</a>, which merges two branches using the three-way merge option.</p> </li> </ul> <p>Pull requests, by calling the following:</p> <ul> <li> <p> <a>CreatePullRequest</a>, which creates a pull request in a specified repository.</p> </li> <li> <p> <a>CreatePullRequestApprovalRule</a>, which creates an approval rule for a specified pull request.</p> </li> <li> <p> <a>DeletePullRequestApprovalRule</a>, which deletes an approval rule for a specified pull request.</p> </li> <li> <p> <a>DescribePullRequestEvents</a>, which returns information about one or more pull request events.</p> </li> <li> <p> <a>EvaluatePullRequestApprovalRules</a>, which evaluates whether a pull request has met all the conditions specified in its associated approval rules.</p> </li> <li> <p> <a>GetCommentsForPullRequest</a>, which returns information about comments on a specified pull request.</p> </li> <li> <p> <a>GetPullRequest</a>, which returns information about a specified pull request.</p> </li> <li> <p> <a>GetPullRequestApprovalStates</a>, which returns information about the approval states for a specified pull request.</p> </li> <li> <p> <a>GetPullRequestOverrideState</a>, which returns information about whether approval rules have been set aside (overriden) for a pull request, and if so, the Amazon Resource Name (ARN) of the user or identity that overrode the rules and their requirements for the pull request.</p> </li> <li> <p> <a>ListPullRequests</a>, which lists all pull requests for a repository.</p> </li> <li> <p> <a>MergePullRequestByFastForward</a>, which merges the source destination branch of a pull request into the specified destination branch for that pull request using the fast-forward merge option.</p> </li> <li> <p> <a>MergePullRequestBySquash</a>, which merges the source destination branch of a pull request into the specified destination branch for that pull request using the squash merge option.</p> </li> <li> <p> <a>MergePullRequestByThreeWay</a>. which merges the source destination branch of a pull request into the specified destination branch for that pull request using the three-way merge option.</p> </li> <li> <p> <a>OverridePullRequestApprovalRules</a>, which sets aside all approval rule requirements for a pull request.</p> </li> <li> <p> <a>PostCommentForPullRequest</a>, which posts a comment to a pull request at the specified line, file, or request.</p> </li> <li> <p> <a>UpdatePullRequestApprovalRuleContent</a>, which updates the structure of an approval rule for a pull request.</p> </li> <li> <p> <a>UpdatePullRequestApprovalState</a>, which updates the state of an approval on a pull request.</p> </li> <li> <p> <a>UpdatePullRequestDescription</a>, which updates the description of a pull request.</p> </li> <li> <p> <a>UpdatePullRequestStatus</a>, which updates the status of a pull request.</p> </li> <li> <p> <a>UpdatePullRequestTitle</a>, which updates the title of a pull request.</p> </li> </ul> <p>Approval rule templates, by calling the following:</p> <ul> <li> <p> <a>AssociateApprovalRuleTemplateWithRepository</a>, which associates a template with a specified repository. After the template is associated with a repository, AWS CodeCommit creates approval rules that match the template conditions on every pull request created in the specified repository.</p> </li> <li> <p> <a>BatchAssociateApprovalRuleTemplateWithRepositories</a>, which associates a template with one or more specified repositories. After the template is associated with a repository, AWS CodeCommit creates approval rules that match the template conditions on every pull request created in the specified repositories.</p> </li> <li> <p> <a>BatchDisassociateApprovalRuleTemplateFromRepositories</a>, which removes the association between a template and specified repositories so that approval rules based on the template are not automatically created when pull requests are created in those repositories.</p> </li> <li> <p> <a>CreateApprovalRuleTemplate</a>, which creates a template for approval rules that can then be associated with one or more repositories in your AWS account.</p> </li> <li> <p> <a>DeleteApprovalRuleTemplate</a>, which deletes the specified template. It does not remove approval rules on pull requests already created with the template.</p> </li> <li> <p> <a>DisassociateApprovalRuleTemplateFromRepository</a>, which removes the association between a template and a repository so that approval rules based on the template are not automatically created when pull requests are created in the specified repository.</p> </li> <li> <p> <a>GetApprovalRuleTemplate</a>, which returns information about an approval rule template.</p> </li> <li> <p> <a>ListApprovalRuleTemplates</a>, which lists all approval rule templates in the AWS Region in your AWS account.</p> </li> <li> <p> <a>ListAssociatedApprovalRuleTemplatesForRepository</a>, which lists all approval rule templates that are associated with a specified repository.</p> </li> <li> <p> <a>ListRepositoriesForApprovalRuleTemplate</a>, which lists all repositories associated with the specified approval rule template.</p> </li> <li> <p> <a>UpdateApprovalRuleTemplateDescription</a>, which updates the description of an approval rule template.</p> </li> <li> <p> <a>UpdateApprovalRuleTemplateName</a>, which updates the name of an approval rule template.</p> </li> <li> <p> <a>UpdateApprovalRuleTemplateContent</a>, which updates the content of an approval rule template.</p> </li> </ul> <p>Comments in a repository, by calling the following:</p> <ul> <li> <p> <a>DeleteCommentContent</a>, which deletes the content of a comment on a commit in a repository.</p> </li> <li> <p> <a>GetComment</a>, which returns information about a comment on a commit.</p> </li> <li> <p> <a>GetCommentReactions</a>, which returns information about emoji reactions to comments.</p> </li> <li> <p> <a>GetCommentsForComparedCommit</a>, which returns information about comments on the comparison between two commit specifiers in a repository.</p> </li> <li> <p> <a>PostCommentForComparedCommit</a>, which creates a comment on the comparison between two commit specifiers in a repository.</p> </li> <li> <p> <a>PostCommentReply</a>, which creates a reply to a comment.</p> </li> <li> <p> <a>PutCommentReaction</a>, which creates or updates an emoji reaction to a comment.</p> </li> <li> <p> <a>UpdateComment</a>, which updates the content of a comment on a commit in a repository.</p> </li> </ul> <p>Tags used to tag resources in AWS CodeCommit (not Git tags), by calling the following:</p> <ul> <li> <p> <a>ListTagsForResource</a>, which gets information about AWS tags for a specified Amazon Resource Name (ARN) in AWS CodeCommit.</p> </li> <li> <p> <a>TagResource</a>, which adds or updates tags for a resource in AWS CodeCommit.</p> </li> <li> <p> <a>UntagResource</a>, which removes tags for a resource in AWS CodeCommit.</p> </li> </ul> <p>Triggers, by calling the following:</p> <ul> <li> <p> <a>GetRepositoryTriggers</a>, which returns information about triggers configured for a repository.</p> </li> <li> <p> <a>PutRepositoryTriggers</a>, which replaces all triggers for a repository and can be used to create or delete triggers.</p> </li> <li> <p> <a>TestRepositoryTriggers</a>, which tests the functionality of a repository trigger by sending data to the trigger target.</p> </li> </ul> <p>For information about how to use AWS CodeCommit, see the <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/welcome.html">AWS CodeCommit User Guide</a>.</p>

## Actions

### AssociateApprovalRuleTemplateWithRepository



```js
amazonaws_codecommit.AssociateApprovalRuleTemplateWithRepository({
  "approvalRuleTemplateName": null,
  "repositoryName": null
}, context)
```

#### Input
* input `object`
  * approvalRuleTemplateName **required**
  * repositoryName **required**

#### Output
*Output schema unknown*

### BatchAssociateApprovalRuleTemplateWithRepositories



```js
amazonaws_codecommit.BatchAssociateApprovalRuleTemplateWithRepositories({
  "approvalRuleTemplateName": null,
  "repositoryNames": null
}, context)
```

#### Input
* input `object`
  * approvalRuleTemplateName **required**
  * repositoryNames **required**
    * items [RepositoryName](#repositoryname)

#### Output
* output [BatchAssociateApprovalRuleTemplateWithRepositoriesOutput](#batchassociateapprovalruletemplatewithrepositoriesoutput)

### BatchDescribeMergeConflicts



```js
amazonaws_codecommit.BatchDescribeMergeConflicts({
  "repositoryName": null,
  "destinationCommitSpecifier": null,
  "sourceCommitSpecifier": null,
  "mergeOption": null
}, context)
```

#### Input
* input `object`
  * conflictDetailLevel
  * conflictResolutionStrategy
  * destinationCommitSpecifier **required**
  * filePaths
    * items [Path](#path)
  * maxConflictFiles
  * maxMergeHunks
  * mergeOption **required**
  * nextToken
  * repositoryName **required**
  * sourceCommitSpecifier **required**

#### Output
* output [BatchDescribeMergeConflictsOutput](#batchdescribemergeconflictsoutput)

### BatchDisassociateApprovalRuleTemplateFromRepositories



```js
amazonaws_codecommit.BatchDisassociateApprovalRuleTemplateFromRepositories({
  "approvalRuleTemplateName": null,
  "repositoryNames": null
}, context)
```

#### Input
* input `object`
  * approvalRuleTemplateName **required**
  * repositoryNames **required**
    * items [RepositoryName](#repositoryname)

#### Output
* output [BatchDisassociateApprovalRuleTemplateFromRepositoriesOutput](#batchdisassociateapprovalruletemplatefromrepositoriesoutput)

### BatchGetCommits



```js
amazonaws_codecommit.BatchGetCommits({
  "commitIds": null,
  "repositoryName": null
}, context)
```

#### Input
* input `object`
  * commitIds **required**
    * items [ObjectId](#objectid)
  * repositoryName **required**

#### Output
* output [BatchGetCommitsOutput](#batchgetcommitsoutput)

### BatchGetRepositories



```js
amazonaws_codecommit.BatchGetRepositories({
  "repositoryNames": null
}, context)
```

#### Input
* input `object`
  * repositoryNames **required**
    * items [RepositoryName](#repositoryname)

#### Output
* output [BatchGetRepositoriesOutput](#batchgetrepositoriesoutput)

### CreateApprovalRuleTemplate



```js
amazonaws_codecommit.CreateApprovalRuleTemplate({
  "approvalRuleTemplateName": null,
  "approvalRuleTemplateContent": null
}, context)
```

#### Input
* input `object`
  * approvalRuleTemplateContent **required**
  * approvalRuleTemplateDescription
  * approvalRuleTemplateName **required**

#### Output
* output [CreateApprovalRuleTemplateOutput](#createapprovalruletemplateoutput)

### CreateBranch



```js
amazonaws_codecommit.CreateBranch({
  "repositoryName": null,
  "branchName": null,
  "commitId": null
}, context)
```

#### Input
* input `object`
  * branchName **required**
  * commitId **required**
  * repositoryName **required**

#### Output
*Output schema unknown*

### CreateCommit



```js
amazonaws_codecommit.CreateCommit({
  "repositoryName": null,
  "branchName": null
}, context)
```

#### Input
* input `object`
  * authorName
  * branchName **required**
  * commitMessage
  * deleteFiles
    * items [DeleteFileEntry](#deletefileentry)
  * email
  * keepEmptyFolders
  * parentCommitId
  * putFiles
    * items [PutFileEntry](#putfileentry)
  * repositoryName **required**
  * setFileModes
    * items [SetFileModeEntry](#setfilemodeentry)

#### Output
* output [CreateCommitOutput](#createcommitoutput)

### CreatePullRequest



```js
amazonaws_codecommit.CreatePullRequest({
  "title": null,
  "targets": null
}, context)
```

#### Input
* input `object`
  * clientRequestToken
  * description
  * targets **required**
    * items [Target](#target)
  * title **required**

#### Output
* output [CreatePullRequestOutput](#createpullrequestoutput)

### CreatePullRequestApprovalRule



```js
amazonaws_codecommit.CreatePullRequestApprovalRule({
  "pullRequestId": null,
  "approvalRuleName": null,
  "approvalRuleContent": null
}, context)
```

#### Input
* input `object`
  * approvalRuleContent **required**
  * approvalRuleName **required**
  * pullRequestId **required**

#### Output
* output [CreatePullRequestApprovalRuleOutput](#createpullrequestapprovalruleoutput)

### CreateRepository



```js
amazonaws_codecommit.CreateRepository({
  "repositoryName": null
}, context)
```

#### Input
* input `object`
  * tags
  * repositoryDescription
  * repositoryName **required**

#### Output
* output [CreateRepositoryOutput](#createrepositoryoutput)

### CreateUnreferencedMergeCommit



```js
amazonaws_codecommit.CreateUnreferencedMergeCommit({
  "repositoryName": null,
  "sourceCommitSpecifier": null,
  "destinationCommitSpecifier": null,
  "mergeOption": null
}, context)
```

#### Input
* input `object`
  * authorName
  * commitMessage
  * conflictDetailLevel
  * conflictResolution
    * deleteFiles
      * items [DeleteFileEntry](#deletefileentry)
    * replaceContents
      * items [ReplaceContentEntry](#replacecontententry)
    * setFileModes
      * items [SetFileModeEntry](#setfilemodeentry)
  * conflictResolutionStrategy
  * destinationCommitSpecifier **required**
  * email
  * keepEmptyFolders
  * mergeOption **required**
  * repositoryName **required**
  * sourceCommitSpecifier **required**

#### Output
* output [CreateUnreferencedMergeCommitOutput](#createunreferencedmergecommitoutput)

### DeleteApprovalRuleTemplate



```js
amazonaws_codecommit.DeleteApprovalRuleTemplate({
  "approvalRuleTemplateName": null
}, context)
```

#### Input
* input `object`
  * approvalRuleTemplateName **required**

#### Output
* output [DeleteApprovalRuleTemplateOutput](#deleteapprovalruletemplateoutput)

### DeleteBranch



```js
amazonaws_codecommit.DeleteBranch({
  "repositoryName": null,
  "branchName": null
}, context)
```

#### Input
* input `object`
  * branchName **required**
  * repositoryName **required**

#### Output
* output [DeleteBranchOutput](#deletebranchoutput)

### DeleteCommentContent



```js
amazonaws_codecommit.DeleteCommentContent({
  "commentId": null
}, context)
```

#### Input
* input `object`
  * commentId **required**

#### Output
* output [DeleteCommentContentOutput](#deletecommentcontentoutput)

### DeleteFile



```js
amazonaws_codecommit.DeleteFile({
  "repositoryName": null,
  "branchName": null,
  "filePath": null,
  "parentCommitId": null
}, context)
```

#### Input
* input `object`
  * branchName **required**
  * commitMessage
  * email
  * filePath **required**
  * keepEmptyFolders
  * name
  * parentCommitId **required**
  * repositoryName **required**

#### Output
* output [DeleteFileOutput](#deletefileoutput)

### DeletePullRequestApprovalRule



```js
amazonaws_codecommit.DeletePullRequestApprovalRule({
  "pullRequestId": null,
  "approvalRuleName": null
}, context)
```

#### Input
* input `object`
  * approvalRuleName **required**
  * pullRequestId **required**

#### Output
* output [DeletePullRequestApprovalRuleOutput](#deletepullrequestapprovalruleoutput)

### DeleteRepository



```js
amazonaws_codecommit.DeleteRepository({
  "repositoryName": null
}, context)
```

#### Input
* input `object`
  * repositoryName **required**

#### Output
* output [DeleteRepositoryOutput](#deleterepositoryoutput)

### DescribeMergeConflicts



```js
amazonaws_codecommit.DescribeMergeConflicts({
  "repositoryName": null,
  "destinationCommitSpecifier": null,
  "sourceCommitSpecifier": null,
  "mergeOption": null,
  "filePath": null
}, context)
```

#### Input
* input `object`
  * maxMergeHunks `string`
  * nextToken `string`
  * conflictDetailLevel
  * conflictResolutionStrategy
  * destinationCommitSpecifier **required**
  * filePath **required**
  * maxMergeHunks
  * mergeOption **required**
  * nextToken
  * repositoryName **required**
  * sourceCommitSpecifier **required**

#### Output
* output [DescribeMergeConflictsOutput](#describemergeconflictsoutput)

### DescribePullRequestEvents



```js
amazonaws_codecommit.DescribePullRequestEvents({
  "pullRequestId": null
}, context)
```

#### Input
* input `object`
  * maxResults `string`
  * nextToken `string`
  * actorArn
  * maxResults
  * nextToken
  * pullRequestEventType
  * pullRequestId **required**

#### Output
* output [DescribePullRequestEventsOutput](#describepullrequesteventsoutput)

### DisassociateApprovalRuleTemplateFromRepository



```js
amazonaws_codecommit.DisassociateApprovalRuleTemplateFromRepository({
  "approvalRuleTemplateName": null,
  "repositoryName": null
}, context)
```

#### Input
* input `object`
  * approvalRuleTemplateName **required**
  * repositoryName **required**

#### Output
*Output schema unknown*

### EvaluatePullRequestApprovalRules



```js
amazonaws_codecommit.EvaluatePullRequestApprovalRules({
  "pullRequestId": null,
  "revisionId": null
}, context)
```

#### Input
* input `object`
  * pullRequestId **required**
  * revisionId **required**

#### Output
* output [EvaluatePullRequestApprovalRulesOutput](#evaluatepullrequestapprovalrulesoutput)

### GetApprovalRuleTemplate



```js
amazonaws_codecommit.GetApprovalRuleTemplate({
  "approvalRuleTemplateName": null
}, context)
```

#### Input
* input `object`
  * approvalRuleTemplateName **required**

#### Output
* output [GetApprovalRuleTemplateOutput](#getapprovalruletemplateoutput)

### GetBlob



```js
amazonaws_codecommit.GetBlob({
  "repositoryName": null,
  "blobId": null
}, context)
```

#### Input
* input `object`
  * blobId **required**
  * repositoryName **required**

#### Output
* output [GetBlobOutput](#getbloboutput)

### GetBranch



```js
amazonaws_codecommit.GetBranch({}, context)
```

#### Input
* input `object`
  * branchName
  * repositoryName

#### Output
* output [GetBranchOutput](#getbranchoutput)

### GetComment



```js
amazonaws_codecommit.GetComment({
  "commentId": null
}, context)
```

#### Input
* input `object`
  * commentId **required**

#### Output
* output [GetCommentOutput](#getcommentoutput)

### GetCommentReactions



```js
amazonaws_codecommit.GetCommentReactions({
  "commentId": null
}, context)
```

#### Input
* input `object`
  * maxResults `string`
  * nextToken `string`
  * commentId **required**
  * maxResults
  * nextToken
  * reactionUserArn

#### Output
* output [GetCommentReactionsOutput](#getcommentreactionsoutput)

### GetCommentsForComparedCommit



```js
amazonaws_codecommit.GetCommentsForComparedCommit({
  "repositoryName": null,
  "afterCommitId": null
}, context)
```

#### Input
* input `object`
  * maxResults `string`
  * nextToken `string`
  * afterCommitId **required**
  * beforeCommitId
  * maxResults
  * nextToken
  * repositoryName **required**

#### Output
* output [GetCommentsForComparedCommitOutput](#getcommentsforcomparedcommitoutput)

### GetCommentsForPullRequest



```js
amazonaws_codecommit.GetCommentsForPullRequest({
  "pullRequestId": null
}, context)
```

#### Input
* input `object`
  * maxResults `string`
  * nextToken `string`
  * afterCommitId
  * beforeCommitId
  * maxResults
  * nextToken
  * pullRequestId **required**
  * repositoryName

#### Output
* output [GetCommentsForPullRequestOutput](#getcommentsforpullrequestoutput)

### GetCommit



```js
amazonaws_codecommit.GetCommit({
  "repositoryName": null,
  "commitId": null
}, context)
```

#### Input
* input `object`
  * commitId **required**
  * repositoryName **required**

#### Output
* output [GetCommitOutput](#getcommitoutput)

### GetDifferences



```js
amazonaws_codecommit.GetDifferences({
  "repositoryName": null,
  "afterCommitSpecifier": null
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults
  * NextToken
  * afterCommitSpecifier **required**
  * afterPath
  * beforeCommitSpecifier
  * beforePath
  * repositoryName **required**

#### Output
* output [GetDifferencesOutput](#getdifferencesoutput)

### GetFile



```js
amazonaws_codecommit.GetFile({
  "repositoryName": null,
  "filePath": null
}, context)
```

#### Input
* input `object`
  * commitSpecifier
  * filePath **required**
  * repositoryName **required**

#### Output
* output [GetFileOutput](#getfileoutput)

### GetFolder



```js
amazonaws_codecommit.GetFolder({
  "repositoryName": null,
  "folderPath": null
}, context)
```

#### Input
* input `object`
  * commitSpecifier
  * folderPath **required**
  * repositoryName **required**

#### Output
* output [GetFolderOutput](#getfolderoutput)

### GetMergeCommit



```js
amazonaws_codecommit.GetMergeCommit({
  "repositoryName": null,
  "sourceCommitSpecifier": null,
  "destinationCommitSpecifier": null
}, context)
```

#### Input
* input `object`
  * conflictDetailLevel
  * conflictResolutionStrategy
  * destinationCommitSpecifier **required**
  * repositoryName **required**
  * sourceCommitSpecifier **required**

#### Output
* output [GetMergeCommitOutput](#getmergecommitoutput)

### GetMergeConflicts



```js
amazonaws_codecommit.GetMergeConflicts({
  "repositoryName": null,
  "destinationCommitSpecifier": null,
  "sourceCommitSpecifier": null,
  "mergeOption": null
}, context)
```

#### Input
* input `object`
  * maxConflictFiles `string`
  * nextToken `string`
  * conflictDetailLevel
  * conflictResolutionStrategy
  * destinationCommitSpecifier **required**
  * maxConflictFiles
  * mergeOption **required**
  * nextToken
  * repositoryName **required**
  * sourceCommitSpecifier **required**

#### Output
* output [GetMergeConflictsOutput](#getmergeconflictsoutput)

### GetMergeOptions



```js
amazonaws_codecommit.GetMergeOptions({
  "repositoryName": null,
  "sourceCommitSpecifier": null,
  "destinationCommitSpecifier": null
}, context)
```

#### Input
* input `object`
  * conflictDetailLevel
  * conflictResolutionStrategy
  * destinationCommitSpecifier **required**
  * repositoryName **required**
  * sourceCommitSpecifier **required**

#### Output
* output [GetMergeOptionsOutput](#getmergeoptionsoutput)

### GetPullRequest



```js
amazonaws_codecommit.GetPullRequest({
  "pullRequestId": null
}, context)
```

#### Input
* input `object`
  * pullRequestId **required**

#### Output
* output [GetPullRequestOutput](#getpullrequestoutput)

### GetPullRequestApprovalStates



```js
amazonaws_codecommit.GetPullRequestApprovalStates({
  "pullRequestId": null,
  "revisionId": null
}, context)
```

#### Input
* input `object`
  * pullRequestId **required**
  * revisionId **required**

#### Output
* output [GetPullRequestApprovalStatesOutput](#getpullrequestapprovalstatesoutput)

### GetPullRequestOverrideState



```js
amazonaws_codecommit.GetPullRequestOverrideState({
  "pullRequestId": null,
  "revisionId": null
}, context)
```

#### Input
* input `object`
  * pullRequestId **required**
  * revisionId **required**

#### Output
* output [GetPullRequestOverrideStateOutput](#getpullrequestoverridestateoutput)

### GetRepository



```js
amazonaws_codecommit.GetRepository({
  "repositoryName": null
}, context)
```

#### Input
* input `object`
  * repositoryName **required**

#### Output
* output [GetRepositoryOutput](#getrepositoryoutput)

### GetRepositoryTriggers



```js
amazonaws_codecommit.GetRepositoryTriggers({
  "repositoryName": null
}, context)
```

#### Input
* input `object`
  * repositoryName **required**

#### Output
* output [GetRepositoryTriggersOutput](#getrepositorytriggersoutput)

### ListApprovalRuleTemplates



```js
amazonaws_codecommit.ListApprovalRuleTemplates({}, context)
```

#### Input
* input `object`
  * maxResults `string`
  * nextToken `string`
  * maxResults
  * nextToken

#### Output
* output [ListApprovalRuleTemplatesOutput](#listapprovalruletemplatesoutput)

### ListAssociatedApprovalRuleTemplatesForRepository



```js
amazonaws_codecommit.ListAssociatedApprovalRuleTemplatesForRepository({
  "repositoryName": null
}, context)
```

#### Input
* input `object`
  * maxResults `string`
  * nextToken `string`
  * maxResults
  * nextToken
  * repositoryName **required**

#### Output
* output [ListAssociatedApprovalRuleTemplatesForRepositoryOutput](#listassociatedapprovalruletemplatesforrepositoryoutput)

### ListBranches



```js
amazonaws_codecommit.ListBranches({
  "repositoryName": null
}, context)
```

#### Input
* input `object`
  * nextToken `string`
  * nextToken
  * repositoryName **required**

#### Output
* output [ListBranchesOutput](#listbranchesoutput)

### ListPullRequests



```js
amazonaws_codecommit.ListPullRequests({
  "repositoryName": null
}, context)
```

#### Input
* input `object`
  * maxResults `string`
  * nextToken `string`
  * authorArn
  * maxResults
  * nextToken
  * pullRequestStatus
  * repositoryName **required**

#### Output
* output [ListPullRequestsOutput](#listpullrequestsoutput)

### ListRepositories



```js
amazonaws_codecommit.ListRepositories({}, context)
```

#### Input
* input `object`
  * nextToken `string`
  * nextToken
  * order
  * sortBy

#### Output
* output [ListRepositoriesOutput](#listrepositoriesoutput)

### ListRepositoriesForApprovalRuleTemplate



```js
amazonaws_codecommit.ListRepositoriesForApprovalRuleTemplate({
  "approvalRuleTemplateName": null
}, context)
```

#### Input
* input `object`
  * maxResults `string`
  * nextToken `string`
  * approvalRuleTemplateName **required**
  * maxResults
  * nextToken

#### Output
* output [ListRepositoriesForApprovalRuleTemplateOutput](#listrepositoriesforapprovalruletemplateoutput)

### ListTagsForResource



```js
amazonaws_codecommit.ListTagsForResource({
  "resourceArn": null
}, context)
```

#### Input
* input `object`
  * nextToken
  * resourceArn **required**

#### Output
* output [ListTagsForResourceOutput](#listtagsforresourceoutput)

### MergeBranchesByFastForward



```js
amazonaws_codecommit.MergeBranchesByFastForward({
  "repositoryName": null,
  "sourceCommitSpecifier": null,
  "destinationCommitSpecifier": null
}, context)
```

#### Input
* input `object`
  * destinationCommitSpecifier **required**
  * repositoryName **required**
  * sourceCommitSpecifier **required**
  * targetBranch

#### Output
* output [MergeBranchesByFastForwardOutput](#mergebranchesbyfastforwardoutput)

### MergeBranchesBySquash



```js
amazonaws_codecommit.MergeBranchesBySquash({
  "repositoryName": null,
  "sourceCommitSpecifier": null,
  "destinationCommitSpecifier": null
}, context)
```

#### Input
* input `object`
  * authorName
  * commitMessage
  * conflictDetailLevel
  * conflictResolution
    * deleteFiles
      * items [DeleteFileEntry](#deletefileentry)
    * replaceContents
      * items [ReplaceContentEntry](#replacecontententry)
    * setFileModes
      * items [SetFileModeEntry](#setfilemodeentry)
  * conflictResolutionStrategy
  * destinationCommitSpecifier **required**
  * email
  * keepEmptyFolders
  * repositoryName **required**
  * sourceCommitSpecifier **required**
  * targetBranch

#### Output
* output [MergeBranchesBySquashOutput](#mergebranchesbysquashoutput)

### MergeBranchesByThreeWay



```js
amazonaws_codecommit.MergeBranchesByThreeWay({
  "repositoryName": null,
  "sourceCommitSpecifier": null,
  "destinationCommitSpecifier": null
}, context)
```

#### Input
* input `object`
  * authorName
  * commitMessage
  * conflictDetailLevel
  * conflictResolution
    * deleteFiles
      * items [DeleteFileEntry](#deletefileentry)
    * replaceContents
      * items [ReplaceContentEntry](#replacecontententry)
    * setFileModes
      * items [SetFileModeEntry](#setfilemodeentry)
  * conflictResolutionStrategy
  * destinationCommitSpecifier **required**
  * email
  * keepEmptyFolders
  * repositoryName **required**
  * sourceCommitSpecifier **required**
  * targetBranch

#### Output
* output [MergeBranchesByThreeWayOutput](#mergebranchesbythreewayoutput)

### MergePullRequestByFastForward



```js
amazonaws_codecommit.MergePullRequestByFastForward({
  "pullRequestId": null,
  "repositoryName": null
}, context)
```

#### Input
* input `object`
  * pullRequestId **required**
  * repositoryName **required**
  * sourceCommitId

#### Output
* output [MergePullRequestByFastForwardOutput](#mergepullrequestbyfastforwardoutput)

### MergePullRequestBySquash



```js
amazonaws_codecommit.MergePullRequestBySquash({
  "pullRequestId": null,
  "repositoryName": null
}, context)
```

#### Input
* input `object`
  * authorName
  * commitMessage
  * conflictDetailLevel
  * conflictResolution
    * deleteFiles
      * items [DeleteFileEntry](#deletefileentry)
    * replaceContents
      * items [ReplaceContentEntry](#replacecontententry)
    * setFileModes
      * items [SetFileModeEntry](#setfilemodeentry)
  * conflictResolutionStrategy
  * email
  * keepEmptyFolders
  * pullRequestId **required**
  * repositoryName **required**
  * sourceCommitId

#### Output
* output [MergePullRequestBySquashOutput](#mergepullrequestbysquashoutput)

### MergePullRequestByThreeWay



```js
amazonaws_codecommit.MergePullRequestByThreeWay({
  "pullRequestId": null,
  "repositoryName": null
}, context)
```

#### Input
* input `object`
  * authorName
  * commitMessage
  * conflictDetailLevel
  * conflictResolution
    * deleteFiles
      * items [DeleteFileEntry](#deletefileentry)
    * replaceContents
      * items [ReplaceContentEntry](#replacecontententry)
    * setFileModes
      * items [SetFileModeEntry](#setfilemodeentry)
  * conflictResolutionStrategy
  * email
  * keepEmptyFolders
  * pullRequestId **required**
  * repositoryName **required**
  * sourceCommitId

#### Output
* output [MergePullRequestByThreeWayOutput](#mergepullrequestbythreewayoutput)

### OverridePullRequestApprovalRules



```js
amazonaws_codecommit.OverridePullRequestApprovalRules({
  "pullRequestId": null,
  "revisionId": null,
  "overrideStatus": null
}, context)
```

#### Input
* input `object`
  * overrideStatus **required**
  * pullRequestId **required**
  * revisionId **required**

#### Output
*Output schema unknown*

### PostCommentForComparedCommit



```js
amazonaws_codecommit.PostCommentForComparedCommit({
  "repositoryName": null,
  "afterCommitId": null,
  "content": null
}, context)
```

#### Input
* input `object`
  * afterCommitId **required**
  * beforeCommitId
  * clientRequestToken
  * content **required**
  * location
    * filePath
    * filePosition
    * relativeFileVersion
  * repositoryName **required**

#### Output
* output [PostCommentForComparedCommitOutput](#postcommentforcomparedcommitoutput)

### PostCommentForPullRequest



```js
amazonaws_codecommit.PostCommentForPullRequest({
  "pullRequestId": null,
  "repositoryName": null,
  "beforeCommitId": null,
  "afterCommitId": null,
  "content": null
}, context)
```

#### Input
* input `object`
  * afterCommitId **required**
  * beforeCommitId **required**
  * clientRequestToken
  * content **required**
  * location
    * filePath
    * filePosition
    * relativeFileVersion
  * pullRequestId **required**
  * repositoryName **required**

#### Output
* output [PostCommentForPullRequestOutput](#postcommentforpullrequestoutput)

### PostCommentReply



```js
amazonaws_codecommit.PostCommentReply({
  "inReplyTo": null,
  "content": null
}, context)
```

#### Input
* input `object`
  * clientRequestToken
  * content **required**
  * inReplyTo **required**

#### Output
* output [PostCommentReplyOutput](#postcommentreplyoutput)

### PutCommentReaction



```js
amazonaws_codecommit.PutCommentReaction({
  "commentId": null,
  "reactionValue": null
}, context)
```

#### Input
* input `object`
  * commentId **required**
  * reactionValue **required**

#### Output
*Output schema unknown*

### PutFile



```js
amazonaws_codecommit.PutFile({
  "repositoryName": null,
  "branchName": null,
  "fileContent": null,
  "filePath": null
}, context)
```

#### Input
* input `object`
  * branchName **required**
  * commitMessage
  * email
  * fileContent **required**
  * fileMode
  * filePath **required**
  * name
  * parentCommitId
  * repositoryName **required**

#### Output
* output [PutFileOutput](#putfileoutput)

### PutRepositoryTriggers



```js
amazonaws_codecommit.PutRepositoryTriggers({
  "repositoryName": null,
  "triggers": null
}, context)
```

#### Input
* input `object`
  * repositoryName **required**
  * triggers **required**
    * items [RepositoryTrigger](#repositorytrigger)

#### Output
* output [PutRepositoryTriggersOutput](#putrepositorytriggersoutput)

### TagResource



```js
amazonaws_codecommit.TagResource({
  "resourceArn": null,
  "tags": null
}, context)
```

#### Input
* input `object`
  * tags **required**
  * resourceArn **required**

#### Output
*Output schema unknown*

### TestRepositoryTriggers



```js
amazonaws_codecommit.TestRepositoryTriggers({
  "repositoryName": null,
  "triggers": null
}, context)
```

#### Input
* input `object`
  * repositoryName **required**
  * triggers **required**
    * items [RepositoryTrigger](#repositorytrigger)

#### Output
* output [TestRepositoryTriggersOutput](#testrepositorytriggersoutput)

### UntagResource



```js
amazonaws_codecommit.UntagResource({
  "resourceArn": null,
  "tagKeys": null
}, context)
```

#### Input
* input `object`
  * resourceArn **required**
  * tagKeys **required**
    * items [TagKey](#tagkey)

#### Output
*Output schema unknown*

### UpdateApprovalRuleTemplateContent



```js
amazonaws_codecommit.UpdateApprovalRuleTemplateContent({
  "approvalRuleTemplateName": null,
  "newRuleContent": null
}, context)
```

#### Input
* input `object`
  * approvalRuleTemplateName **required**
  * existingRuleContentSha256
  * newRuleContent **required**

#### Output
* output [UpdateApprovalRuleTemplateContentOutput](#updateapprovalruletemplatecontentoutput)

### UpdateApprovalRuleTemplateDescription



```js
amazonaws_codecommit.UpdateApprovalRuleTemplateDescription({
  "approvalRuleTemplateName": null,
  "approvalRuleTemplateDescription": null
}, context)
```

#### Input
* input `object`
  * approvalRuleTemplateDescription **required**
  * approvalRuleTemplateName **required**

#### Output
* output [UpdateApprovalRuleTemplateDescriptionOutput](#updateapprovalruletemplatedescriptionoutput)

### UpdateApprovalRuleTemplateName



```js
amazonaws_codecommit.UpdateApprovalRuleTemplateName({
  "oldApprovalRuleTemplateName": null,
  "newApprovalRuleTemplateName": null
}, context)
```

#### Input
* input `object`
  * newApprovalRuleTemplateName **required**
  * oldApprovalRuleTemplateName **required**

#### Output
* output [UpdateApprovalRuleTemplateNameOutput](#updateapprovalruletemplatenameoutput)

### UpdateComment



```js
amazonaws_codecommit.UpdateComment({
  "commentId": null,
  "content": null
}, context)
```

#### Input
* input `object`
  * commentId **required**
  * content **required**

#### Output
* output [UpdateCommentOutput](#updatecommentoutput)

### UpdateDefaultBranch



```js
amazonaws_codecommit.UpdateDefaultBranch({
  "repositoryName": null,
  "defaultBranchName": null
}, context)
```

#### Input
* input `object`
  * defaultBranchName **required**
  * repositoryName **required**

#### Output
*Output schema unknown*

### UpdatePullRequestApprovalRuleContent



```js
amazonaws_codecommit.UpdatePullRequestApprovalRuleContent({
  "pullRequestId": null,
  "approvalRuleName": null,
  "newRuleContent": null
}, context)
```

#### Input
* input `object`
  * approvalRuleName **required**
  * existingRuleContentSha256
  * newRuleContent **required**
  * pullRequestId **required**

#### Output
* output [UpdatePullRequestApprovalRuleContentOutput](#updatepullrequestapprovalrulecontentoutput)

### UpdatePullRequestApprovalState



```js
amazonaws_codecommit.UpdatePullRequestApprovalState({
  "pullRequestId": null,
  "revisionId": null,
  "approvalState": null
}, context)
```

#### Input
* input `object`
  * approvalState **required**
  * pullRequestId **required**
  * revisionId **required**

#### Output
*Output schema unknown*

### UpdatePullRequestDescription



```js
amazonaws_codecommit.UpdatePullRequestDescription({
  "pullRequestId": null,
  "description": null
}, context)
```

#### Input
* input `object`
  * description **required**
  * pullRequestId **required**

#### Output
* output [UpdatePullRequestDescriptionOutput](#updatepullrequestdescriptionoutput)

### UpdatePullRequestStatus



```js
amazonaws_codecommit.UpdatePullRequestStatus({
  "pullRequestId": null,
  "pullRequestStatus": null
}, context)
```

#### Input
* input `object`
  * pullRequestId **required**
  * pullRequestStatus **required**

#### Output
* output [UpdatePullRequestStatusOutput](#updatepullrequeststatusoutput)

### UpdatePullRequestTitle



```js
amazonaws_codecommit.UpdatePullRequestTitle({
  "pullRequestId": null,
  "title": null
}, context)
```

#### Input
* input `object`
  * pullRequestId **required**
  * title **required**

#### Output
* output [UpdatePullRequestTitleOutput](#updatepullrequesttitleoutput)

### UpdateRepositoryDescription



```js
amazonaws_codecommit.UpdateRepositoryDescription({
  "repositoryName": null
}, context)
```

#### Input
* input `object`
  * repositoryDescription
  * repositoryName **required**

#### Output
*Output schema unknown*

### UpdateRepositoryName



```js
amazonaws_codecommit.UpdateRepositoryName({
  "oldName": null,
  "newName": null
}, context)
```

#### Input
* input `object`
  * newName **required**
  * oldName **required**

#### Output
*Output schema unknown*



## Definitions

### AccountId
* AccountId `string`

### ActorDoesNotExistException


### AdditionalData
* AdditionalData `string`

### Approval
* Approval `object`: Returns information about a specific approval on a pull request.
  * approvalState
  * userArn

### ApprovalList
* ApprovalList `array`
  * items [Approval](#approval)

### ApprovalRule
* ApprovalRule `object`: Returns information about an approval rule.
  * approvalRuleContent
  * approvalRuleId
  * approvalRuleName
  * creationDate
  * lastModifiedDate
  * lastModifiedUser
  * originApprovalRuleTemplate
    * approvalRuleTemplateId
    * approvalRuleTemplateName
  * ruleContentSha256

### ApprovalRuleContent
* ApprovalRuleContent `string`

### ApprovalRuleContentRequiredException


### ApprovalRuleDoesNotExistException


### ApprovalRuleEventMetadata
* ApprovalRuleEventMetadata `object`: Returns information about an event for an approval rule.
  * approvalRuleContent
  * approvalRuleId
  * approvalRuleName

### ApprovalRuleId
* ApprovalRuleId `string`

### ApprovalRuleName
* ApprovalRuleName `string`

### ApprovalRuleNameAlreadyExistsException


### ApprovalRuleNameRequiredException


### ApprovalRuleOverriddenEventMetadata
* ApprovalRuleOverriddenEventMetadata `object`: Returns information about an override event for approval rules for a pull request.
  * overrideStatus
  * revisionId

### ApprovalRuleTemplate
* ApprovalRuleTemplate `object`: Returns information about an approval rule template.
  * approvalRuleTemplateContent
  * approvalRuleTemplateDescription
  * approvalRuleTemplateId
  * approvalRuleTemplateName
  * creationDate
  * lastModifiedDate
  * lastModifiedUser
  * ruleContentSha256

### ApprovalRuleTemplateContent
* ApprovalRuleTemplateContent `string`

### ApprovalRuleTemplateContentRequiredException


### ApprovalRuleTemplateDescription
* ApprovalRuleTemplateDescription `string`

### ApprovalRuleTemplateDoesNotExistException


### ApprovalRuleTemplateId
* ApprovalRuleTemplateId `string`

### ApprovalRuleTemplateInUseException


### ApprovalRuleTemplateName
* ApprovalRuleTemplateName `string`

### ApprovalRuleTemplateNameAlreadyExistsException


### ApprovalRuleTemplateNameList
* ApprovalRuleTemplateNameList `array`
  * items [ApprovalRuleTemplateName](#approvalruletemplatename)

### ApprovalRuleTemplateNameRequiredException


### ApprovalRulesList
* ApprovalRulesList `array`
  * items [ApprovalRule](#approvalrule)

### ApprovalRulesNotSatisfiedList
* ApprovalRulesNotSatisfiedList `array`
  * items [ApprovalRuleName](#approvalrulename)

### ApprovalRulesSatisfiedList
* ApprovalRulesSatisfiedList `array`
  * items [ApprovalRuleName](#approvalrulename)

### ApprovalState
* ApprovalState `string` (values: APPROVE, REVOKE)

### ApprovalStateChangedEventMetadata
* ApprovalStateChangedEventMetadata `object`: Returns information about a change in the approval state for a pull request.
  * approvalStatus
  * revisionId

### ApprovalStateRequiredException


### Approved
* Approved `boolean`

### Arn
* Arn `string`

### AssociateApprovalRuleTemplateWithRepositoryInput
* AssociateApprovalRuleTemplateWithRepositoryInput `object`
  * approvalRuleTemplateName **required**
  * repositoryName **required**

### AuthorDoesNotExistException


### BatchAssociateApprovalRuleTemplateWithRepositoriesError
* BatchAssociateApprovalRuleTemplateWithRepositoriesError `object`: Returns information about errors in a BatchAssociateApprovalRuleTemplateWithRepositories operation.
  * errorCode
  * errorMessage
  * repositoryName

### BatchAssociateApprovalRuleTemplateWithRepositoriesErrorsList
* BatchAssociateApprovalRuleTemplateWithRepositoriesErrorsList `array`
  * items [BatchAssociateApprovalRuleTemplateWithRepositoriesError](#batchassociateapprovalruletemplatewithrepositorieserror)

### BatchAssociateApprovalRuleTemplateWithRepositoriesInput
* BatchAssociateApprovalRuleTemplateWithRepositoriesInput `object`
  * approvalRuleTemplateName **required**
  * repositoryNames **required**
    * items [RepositoryName](#repositoryname)

### BatchAssociateApprovalRuleTemplateWithRepositoriesOutput
* BatchAssociateApprovalRuleTemplateWithRepositoriesOutput `object`
  * associatedRepositoryNames **required**
    * items [RepositoryName](#repositoryname)
  * errors **required**
    * items [BatchAssociateApprovalRuleTemplateWithRepositoriesError](#batchassociateapprovalruletemplatewithrepositorieserror)

### BatchDescribeMergeConflictsError
* BatchDescribeMergeConflictsError `object`: Returns information about errors in a BatchDescribeMergeConflicts operation.
  * exceptionName **required**
  * filePath **required**
  * message **required**

### BatchDescribeMergeConflictsErrors
* BatchDescribeMergeConflictsErrors `array`
  * items [BatchDescribeMergeConflictsError](#batchdescribemergeconflictserror)

### BatchDescribeMergeConflictsInput
* BatchDescribeMergeConflictsInput `object`
  * conflictDetailLevel
  * conflictResolutionStrategy
  * destinationCommitSpecifier **required**
  * filePaths
    * items [Path](#path)
  * maxConflictFiles
  * maxMergeHunks
  * mergeOption **required**
  * nextToken
  * repositoryName **required**
  * sourceCommitSpecifier **required**

### BatchDescribeMergeConflictsOutput
* BatchDescribeMergeConflictsOutput `object`
  * baseCommitId
  * conflicts **required**
    * items [Conflict](#conflict)
  * destinationCommitId **required**
  * errors
    * items [BatchDescribeMergeConflictsError](#batchdescribemergeconflictserror)
  * nextToken
  * sourceCommitId **required**

### BatchDisassociateApprovalRuleTemplateFromRepositoriesError
* BatchDisassociateApprovalRuleTemplateFromRepositoriesError `object`: Returns information about errors in a BatchDisassociateApprovalRuleTemplateFromRepositories operation.
  * errorCode
  * errorMessage
  * repositoryName

### BatchDisassociateApprovalRuleTemplateFromRepositoriesErrorsList
* BatchDisassociateApprovalRuleTemplateFromRepositoriesErrorsList `array`
  * items [BatchDisassociateApprovalRuleTemplateFromRepositoriesError](#batchdisassociateapprovalruletemplatefromrepositorieserror)

### BatchDisassociateApprovalRuleTemplateFromRepositoriesInput
* BatchDisassociateApprovalRuleTemplateFromRepositoriesInput `object`
  * approvalRuleTemplateName **required**
  * repositoryNames **required**
    * items [RepositoryName](#repositoryname)

### BatchDisassociateApprovalRuleTemplateFromRepositoriesOutput
* BatchDisassociateApprovalRuleTemplateFromRepositoriesOutput `object`
  * disassociatedRepositoryNames **required**
    * items [RepositoryName](#repositoryname)
  * errors **required**
    * items [BatchDisassociateApprovalRuleTemplateFromRepositoriesError](#batchdisassociateapprovalruletemplatefromrepositorieserror)

### BatchGetCommitsError
* BatchGetCommitsError `object`: Returns information about errors in a BatchGetCommits operation.
  * commitId
  * errorCode
  * errorMessage

### BatchGetCommitsErrorsList
* BatchGetCommitsErrorsList `array`
  * items [BatchGetCommitsError](#batchgetcommitserror)

### BatchGetCommitsInput
* BatchGetCommitsInput `object`
  * commitIds **required**
    * items [ObjectId](#objectid)
  * repositoryName **required**

### BatchGetCommitsOutput
* BatchGetCommitsOutput `object`
  * commits
    * items [Commit](#commit)
  * errors
    * items [BatchGetCommitsError](#batchgetcommitserror)

### BatchGetRepositoriesInput
* BatchGetRepositoriesInput `object`: Represents the input of a batch get repositories operation.
  * repositoryNames **required**
    * items [RepositoryName](#repositoryname)

### BatchGetRepositoriesOutput
* BatchGetRepositoriesOutput `object`: Represents the output of a batch get repositories operation.
  * repositories
    * items [RepositoryMetadata](#repositorymetadata)
  * repositoriesNotFound
    * items [RepositoryName](#repositoryname)

### BeforeCommitIdAndAfterCommitIdAreSameException


### BlobIdDoesNotExistException


### BlobIdRequiredException


### BlobMetadata
* BlobMetadata `object`: Returns information about a specific Git blob object.
  * blobId
  * mode
  * path

### BranchDoesNotExistException


### BranchInfo
* BranchInfo `object`: Returns information about a branch.
  * branchName
  * commitId

### BranchName
* BranchName `string`

### BranchNameExistsException


### BranchNameIsTagNameException


### BranchNameList
* BranchNameList `array`
  * items [BranchName](#branchname)

### BranchNameRequiredException


### CallerReactions
* CallerReactions `array`
  * items [ReactionValue](#reactionvalue)

### CannotDeleteApprovalRuleFromTemplateException


### CannotModifyApprovalRuleFromTemplateException


### CapitalBoolean
* CapitalBoolean `boolean`

### ChangeTypeEnum
* ChangeTypeEnum `string` (values: A, M, D)

### ClientRequestToken
* ClientRequestToken `string`

### ClientRequestTokenRequiredException


### CloneUrlHttp
* CloneUrlHttp `string`

### CloneUrlSsh
* CloneUrlSsh `string`

### Comment
* Comment `object`: Returns information about a specific comment.
  * authorArn
  * callerReactions
    * items [ReactionValue](#reactionvalue)
  * clientRequestToken
  * commentId
  * content
  * creationDate
  * deleted
  * inReplyTo
  * lastModifiedDate
  * reactionCounts

### CommentContentRequiredException


### CommentContentSizeLimitExceededException


### CommentDeletedException


### CommentDoesNotExistException


### CommentId
* CommentId `string`

### CommentIdRequiredException


### CommentNotCreatedByCallerException


### Comments
* Comments `array`
  * items [Comment](#comment)

### CommentsForComparedCommit
* CommentsForComparedCommit `object`: Returns information about comments on the comparison between two commits.
  * afterBlobId
  * afterCommitId
  * beforeBlobId
  * beforeCommitId
  * comments
    * items [Comment](#comment)
  * location
    * filePath
    * filePosition
    * relativeFileVersion
  * repositoryName

### CommentsForComparedCommitData
* CommentsForComparedCommitData `array`
  * items [CommentsForComparedCommit](#commentsforcomparedcommit)

### CommentsForPullRequest
* CommentsForPullRequest `object`: Returns information about comments on a pull request.
  * afterBlobId
  * afterCommitId
  * beforeBlobId
  * beforeCommitId
  * comments
    * items [Comment](#comment)
  * location
    * filePath
    * filePosition
    * relativeFileVersion
  * pullRequestId
  * repositoryName

### CommentsForPullRequestData
* CommentsForPullRequestData `array`
  * items [CommentsForPullRequest](#commentsforpullrequest)

### Commit
* Commit `object`: Returns information about a specific commit.
  * additionalData
  * author
    * date
    * email
    * name
  * commitId
  * committer
    * date
    * email
    * name
  * message
  * parents
    * items [ObjectId](#objectid)
  * treeId

### CommitDoesNotExistException


### CommitId
* CommitId `string`

### CommitIdDoesNotExistException


### CommitIdRequiredException


### CommitIdsInputList
* CommitIdsInputList `array`
  * items [ObjectId](#objectid)

### CommitIdsLimitExceededException


### CommitIdsListRequiredException


### CommitMessageLengthExceededException


### CommitName
* CommitName `string`

### CommitObjectsList
* CommitObjectsList `array`
  * items [Commit](#commit)

### CommitRequiredException


### ConcurrentReferenceUpdateException


### Conflict
* Conflict `object`: Information about conflicts in a merge operation.
  * conflictMetadata
    * contentConflict
    * fileModeConflict
    * fileModes
      * base
      * destination
      * source
    * filePath
    * fileSizes
      * base
      * destination
      * source
    * isBinaryFile
      * base
      * destination
      * source
    * mergeOperations
      * destination
      * source
    * numberOfConflicts
    * objectTypeConflict
    * objectTypes
      * base
      * destination
      * source
  * mergeHunks
    * items [MergeHunk](#mergehunk)

### ConflictDetailLevelTypeEnum
* ConflictDetailLevelTypeEnum `string` (values: FILE_LEVEL, LINE_LEVEL)

### ConflictMetadata
* ConflictMetadata `object`: Information about the metadata for a conflict in a merge operation.
  * contentConflict
  * fileModeConflict
  * fileModes
    * base
    * destination
    * source
  * filePath
  * fileSizes
    * base
    * destination
    * source
  * isBinaryFile
    * base
    * destination
    * source
  * mergeOperations
    * destination
    * source
  * numberOfConflicts
  * objectTypeConflict
  * objectTypes
    * base
    * destination
    * source

### ConflictMetadataList
* ConflictMetadataList `array`
  * items [ConflictMetadata](#conflictmetadata)

### ConflictResolution
* ConflictResolution `object`: If AUTOMERGE is the conflict resolution strategy, a list of inputs to use when resolving conflicts during a merge.
  * deleteFiles
    * items [DeleteFileEntry](#deletefileentry)
  * replaceContents
    * items [ReplaceContentEntry](#replacecontententry)
  * setFileModes
    * items [SetFileModeEntry](#setfilemodeentry)

### ConflictResolutionStrategyTypeEnum
* ConflictResolutionStrategyTypeEnum `string` (values: NONE, ACCEPT_SOURCE, ACCEPT_DESTINATION, AUTOMERGE)

### Conflicts
* Conflicts `array`
  * items [Conflict](#conflict)

### Content
* Content `string`

### Count
* Count `integer`

### CreateApprovalRuleTemplateInput
* CreateApprovalRuleTemplateInput `object`
  * approvalRuleTemplateContent **required**
  * approvalRuleTemplateDescription
  * approvalRuleTemplateName **required**

### CreateApprovalRuleTemplateOutput
* CreateApprovalRuleTemplateOutput `object`
  * approvalRuleTemplate **required**
    * approvalRuleTemplateContent
    * approvalRuleTemplateDescription
    * approvalRuleTemplateId
    * approvalRuleTemplateName
    * creationDate
    * lastModifiedDate
    * lastModifiedUser
    * ruleContentSha256

### CreateBranchInput
* CreateBranchInput `object`: Represents the input of a create branch operation.
  * branchName **required**
  * commitId **required**
  * repositoryName **required**

### CreateCommitInput
* CreateCommitInput `object`
  * authorName
  * branchName **required**
  * commitMessage
  * deleteFiles
    * items [DeleteFileEntry](#deletefileentry)
  * email
  * keepEmptyFolders
  * parentCommitId
  * putFiles
    * items [PutFileEntry](#putfileentry)
  * repositoryName **required**
  * setFileModes
    * items [SetFileModeEntry](#setfilemodeentry)

### CreateCommitOutput
* CreateCommitOutput `object`
  * commitId
  * filesAdded
    * items [FileMetadata](#filemetadata)
  * filesDeleted
    * items [FileMetadata](#filemetadata)
  * filesUpdated
    * items [FileMetadata](#filemetadata)
  * treeId

### CreatePullRequestApprovalRuleInput
* CreatePullRequestApprovalRuleInput `object`
  * approvalRuleContent **required**
  * approvalRuleName **required**
  * pullRequestId **required**

### CreatePullRequestApprovalRuleOutput
* CreatePullRequestApprovalRuleOutput `object`
  * approvalRule **required**
    * approvalRuleContent
    * approvalRuleId
    * approvalRuleName
    * creationDate
    * lastModifiedDate
    * lastModifiedUser
    * originApprovalRuleTemplate
      * approvalRuleTemplateId
      * approvalRuleTemplateName
    * ruleContentSha256

### CreatePullRequestInput
* CreatePullRequestInput `object`
  * clientRequestToken
  * description
  * targets **required**
    * items [Target](#target)
  * title **required**

### CreatePullRequestOutput
* CreatePullRequestOutput `object`
  * pullRequest **required**
    * approvalRules
      * items [ApprovalRule](#approvalrule)
    * authorArn
    * clientRequestToken
    * creationDate
    * description
    * lastActivityDate
    * pullRequestId
    * pullRequestStatus
    * pullRequestTargets
      * items [PullRequestTarget](#pullrequesttarget)
    * revisionId
    * title

### CreateRepositoryInput
* CreateRepositoryInput `object`: Represents the input of a create repository operation.
  * tags
  * repositoryDescription
  * repositoryName **required**

### CreateRepositoryOutput
* CreateRepositoryOutput `object`: Represents the output of a create repository operation.
  * repositoryMetadata
    * Arn
    * accountId
    * cloneUrlHttp
    * cloneUrlSsh
    * creationDate
    * defaultBranch
    * lastModifiedDate
    * repositoryDescription
    * repositoryId
    * repositoryName

### CreateUnreferencedMergeCommitInput
* CreateUnreferencedMergeCommitInput `object`
  * authorName
  * commitMessage
  * conflictDetailLevel
  * conflictResolution
    * deleteFiles
      * items [DeleteFileEntry](#deletefileentry)
    * replaceContents
      * items [ReplaceContentEntry](#replacecontententry)
    * setFileModes
      * items [SetFileModeEntry](#setfilemodeentry)
  * conflictResolutionStrategy
  * destinationCommitSpecifier **required**
  * email
  * keepEmptyFolders
  * mergeOption **required**
  * repositoryName **required**
  * sourceCommitSpecifier **required**

### CreateUnreferencedMergeCommitOutput
* CreateUnreferencedMergeCommitOutput `object`
  * commitId
  * treeId

### CreationDate
* CreationDate `string`

### Date
* Date `string`

### DefaultBranchCannotBeDeletedException


### DeleteApprovalRuleTemplateInput
* DeleteApprovalRuleTemplateInput `object`
  * approvalRuleTemplateName **required**

### DeleteApprovalRuleTemplateOutput
* DeleteApprovalRuleTemplateOutput `object`
  * approvalRuleTemplateId **required**

### DeleteBranchInput
* DeleteBranchInput `object`: Represents the input of a delete branch operation.
  * branchName **required**
  * repositoryName **required**

### DeleteBranchOutput
* DeleteBranchOutput `object`: Represents the output of a delete branch operation.
  * deletedBranch
    * branchName
    * commitId

### DeleteCommentContentInput
* DeleteCommentContentInput `object`
  * commentId **required**

### DeleteCommentContentOutput
* DeleteCommentContentOutput `object`
  * comment
    * authorArn
    * callerReactions
      * items [ReactionValue](#reactionvalue)
    * clientRequestToken
    * commentId
    * content
    * creationDate
    * deleted
    * inReplyTo
    * lastModifiedDate
    * reactionCounts

### DeleteFileEntries
* DeleteFileEntries `array`
  * items [DeleteFileEntry](#deletefileentry)

### DeleteFileEntry
* DeleteFileEntry `object`: A file that is deleted as part of a commit.
  * filePath **required**

### DeleteFileInput
* DeleteFileInput `object`
  * branchName **required**
  * commitMessage
  * email
  * filePath **required**
  * keepEmptyFolders
  * name
  * parentCommitId **required**
  * repositoryName **required**

### DeleteFileOutput
* DeleteFileOutput `object`
  * blobId **required**
  * commitId **required**
  * filePath **required**
  * treeId **required**

### DeletePullRequestApprovalRuleInput
* DeletePullRequestApprovalRuleInput `object`
  * approvalRuleName **required**
  * pullRequestId **required**

### DeletePullRequestApprovalRuleOutput
* DeletePullRequestApprovalRuleOutput `object`
  * approvalRuleId **required**

### DeleteRepositoryInput
* DeleteRepositoryInput `object`: Represents the input of a delete repository operation.
  * repositoryName **required**

### DeleteRepositoryOutput
* DeleteRepositoryOutput `object`: Represents the output of a delete repository operation.
  * repositoryId

### DescribeMergeConflictsInput
* DescribeMergeConflictsInput `object`
  * conflictDetailLevel
  * conflictResolutionStrategy
  * destinationCommitSpecifier **required**
  * filePath **required**
  * maxMergeHunks
  * mergeOption **required**
  * nextToken
  * repositoryName **required**
  * sourceCommitSpecifier **required**

### DescribeMergeConflictsOutput
* DescribeMergeConflictsOutput `object`
  * baseCommitId
  * conflictMetadata **required**
    * contentConflict
    * fileModeConflict
    * fileModes
      * base
      * destination
      * source
    * filePath
    * fileSizes
      * base
      * destination
      * source
    * isBinaryFile
      * base
      * destination
      * source
    * mergeOperations
      * destination
      * source
    * numberOfConflicts
    * objectTypeConflict
    * objectTypes
      * base
      * destination
      * source
  * destinationCommitId **required**
  * mergeHunks **required**
    * items [MergeHunk](#mergehunk)
  * nextToken
  * sourceCommitId **required**

### DescribePullRequestEventsInput
* DescribePullRequestEventsInput `object`
  * actorArn
  * maxResults
  * nextToken
  * pullRequestEventType
  * pullRequestId **required**

### DescribePullRequestEventsOutput
* DescribePullRequestEventsOutput `object`
  * nextToken
  * pullRequestEvents **required**
    * items [PullRequestEvent](#pullrequestevent)

### Description
* Description `string`

### Difference
* Difference `object`: Returns information about a set of differences for a commit specifier.
  * afterBlob
    * blobId
    * mode
    * path
  * beforeBlob
    * blobId
    * mode
    * path
  * changeType

### DifferenceList
* DifferenceList `array`
  * items [Difference](#difference)

### DirectoryNameConflictsWithFileNameException


### DisassociateApprovalRuleTemplateFromRepositoryInput
* DisassociateApprovalRuleTemplateFromRepositoryInput `object`
  * approvalRuleTemplateName **required**
  * repositoryName **required**

### Email
* Email `string`

### EncryptionIntegrityChecksFailedException


### EncryptionKeyAccessDeniedException


### EncryptionKeyDisabledException


### EncryptionKeyNotFoundException


### EncryptionKeyUnavailableException


### ErrorCode
* ErrorCode `string`

### ErrorMessage
* ErrorMessage `string`

### EvaluatePullRequestApprovalRulesInput
* EvaluatePullRequestApprovalRulesInput `object`
  * pullRequestId **required**
  * revisionId **required**

### EvaluatePullRequestApprovalRulesOutput
* EvaluatePullRequestApprovalRulesOutput `object`
  * evaluation **required**
    * approvalRulesNotSatisfied
      * items [ApprovalRuleName](#approvalrulename)
    * approvalRulesSatisfied
      * items [ApprovalRuleName](#approvalrulename)
    * approved
    * overridden

### Evaluation
* Evaluation `object`: Returns information about the approval rules applied to a pull request and whether conditions have been met.
  * approvalRulesNotSatisfied
    * items [ApprovalRuleName](#approvalrulename)
  * approvalRulesSatisfied
    * items [ApprovalRuleName](#approvalrulename)
  * approved
  * overridden

### EventDate
* EventDate `string`

### ExceptionName
* ExceptionName `string`

### File
* File `object`: Returns information about a file in a repository.
  * absolutePath
  * blobId
  * fileMode
  * relativePath

### FileContent
* FileContent `string`

### FileContentAndSourceFileSpecifiedException


### FileContentRequiredException


### FileContentSizeLimitExceededException


### FileDoesNotExistException


### FileEntryRequiredException


### FileList
* FileList `array`
  * items [File](#file)

### FileMetadata
* FileMetadata `object`: A file to be added, updated, or deleted as part of a commit.
  * absolutePath
  * blobId
  * fileMode

### FileModeRequiredException


### FileModeTypeEnum
* FileModeTypeEnum `string` (values: EXECUTABLE, NORMAL, SYMLINK)

### FileModes
* FileModes `object`: Information about file modes in a merge or pull request.
  * base
  * destination
  * source

### FileNameConflictsWithDirectoryNameException


### FilePathConflictsWithSubmodulePathException


### FilePaths
* FilePaths `array`
  * items [Path](#path)

### FileSize
* FileSize `integer`

### FileSizes
* FileSizes `object`: Information about the size of files in a merge or pull request.
  * base
  * destination
  * source

### FileTooLargeException


### FilesMetadata
* FilesMetadata `array`
  * items [FileMetadata](#filemetadata)

### Folder
* Folder `object`: Returns information about a folder in a repository.
  * absolutePath
  * relativePath
  * treeId

### FolderContentSizeLimitExceededException


### FolderDoesNotExistException


### FolderList
* FolderList `array`
  * items [Folder](#folder)

### GetApprovalRuleTemplateInput
* GetApprovalRuleTemplateInput `object`
  * approvalRuleTemplateName **required**

### GetApprovalRuleTemplateOutput
* GetApprovalRuleTemplateOutput `object`
  * approvalRuleTemplate **required**
    * approvalRuleTemplateContent
    * approvalRuleTemplateDescription
    * approvalRuleTemplateId
    * approvalRuleTemplateName
    * creationDate
    * lastModifiedDate
    * lastModifiedUser
    * ruleContentSha256

### GetBlobInput
* GetBlobInput `object`: Represents the input of a get blob operation.
  * blobId **required**
  * repositoryName **required**

### GetBlobOutput
* GetBlobOutput `object`: Represents the output of a get blob operation.
  * content **required**

### GetBranchInput
* GetBranchInput `object`: Represents the input of a get branch operation.
  * branchName
  * repositoryName

### GetBranchOutput
* GetBranchOutput `object`: Represents the output of a get branch operation.
  * branch
    * branchName
    * commitId

### GetCommentInput
* GetCommentInput `object`
  * commentId **required**

### GetCommentOutput
* GetCommentOutput `object`
  * comment
    * authorArn
    * callerReactions
      * items [ReactionValue](#reactionvalue)
    * clientRequestToken
    * commentId
    * content
    * creationDate
    * deleted
    * inReplyTo
    * lastModifiedDate
    * reactionCounts

### GetCommentReactionsInput
* GetCommentReactionsInput `object`
  * commentId **required**
  * maxResults
  * nextToken
  * reactionUserArn

### GetCommentReactionsOutput
* GetCommentReactionsOutput `object`
  * nextToken
  * reactionsForComment **required**
    * items [ReactionForComment](#reactionforcomment)

### GetCommentsForComparedCommitInput
* GetCommentsForComparedCommitInput `object`
  * afterCommitId **required**
  * beforeCommitId
  * maxResults
  * nextToken
  * repositoryName **required**

### GetCommentsForComparedCommitOutput
* GetCommentsForComparedCommitOutput `object`
  * commentsForComparedCommitData
    * items [CommentsForComparedCommit](#commentsforcomparedcommit)
  * nextToken

### GetCommentsForPullRequestInput
* GetCommentsForPullRequestInput `object`
  * afterCommitId
  * beforeCommitId
  * maxResults
  * nextToken
  * pullRequestId **required**
  * repositoryName

### GetCommentsForPullRequestOutput
* GetCommentsForPullRequestOutput `object`
  * commentsForPullRequestData
    * items [CommentsForPullRequest](#commentsforpullrequest)
  * nextToken

### GetCommitInput
* GetCommitInput `object`: Represents the input of a get commit operation.
  * commitId **required**
  * repositoryName **required**

### GetCommitOutput
* GetCommitOutput `object`: Represents the output of a get commit operation.
  * commit **required**
    * additionalData
    * author
      * date
      * email
      * name
    * commitId
    * committer
      * date
      * email
      * name
    * message
    * parents
      * items [ObjectId](#objectid)
    * treeId

### GetDifferencesInput
* GetDifferencesInput `object`
  * MaxResults
  * NextToken
  * afterCommitSpecifier **required**
  * afterPath
  * beforeCommitSpecifier
  * beforePath
  * repositoryName **required**

### GetDifferencesOutput
* GetDifferencesOutput `object`
  * NextToken
  * differences
    * items [Difference](#difference)

### GetFileInput
* GetFileInput `object`
  * commitSpecifier
  * filePath **required**
  * repositoryName **required**

### GetFileOutput
* GetFileOutput `object`
  * blobId **required**
  * commitId **required**
  * fileContent **required**
  * fileMode **required**
  * filePath **required**
  * fileSize **required**

### GetFolderInput
* GetFolderInput `object`
  * commitSpecifier
  * folderPath **required**
  * repositoryName **required**

### GetFolderOutput
* GetFolderOutput `object`
  * commitId **required**
  * files
    * items [File](#file)
  * folderPath **required**
  * subFolders
    * items [Folder](#folder)
  * subModules
    * items [SubModule](#submodule)
  * symbolicLinks
    * items [SymbolicLink](#symboliclink)
  * treeId

### GetMergeCommitInput
* GetMergeCommitInput `object`
  * conflictDetailLevel
  * conflictResolutionStrategy
  * destinationCommitSpecifier **required**
  * repositoryName **required**
  * sourceCommitSpecifier **required**

### GetMergeCommitOutput
* GetMergeCommitOutput `object`
  * baseCommitId
  * destinationCommitId
  * mergedCommitId
  * sourceCommitId

### GetMergeConflictsInput
* GetMergeConflictsInput `object`
  * conflictDetailLevel
  * conflictResolutionStrategy
  * destinationCommitSpecifier **required**
  * maxConflictFiles
  * mergeOption **required**
  * nextToken
  * repositoryName **required**
  * sourceCommitSpecifier **required**

### GetMergeConflictsOutput
* GetMergeConflictsOutput `object`
  * baseCommitId
  * conflictMetadataList **required**
    * items [ConflictMetadata](#conflictmetadata)
  * destinationCommitId **required**
  * mergeable **required**
  * nextToken
  * sourceCommitId **required**

### GetMergeOptionsInput
* GetMergeOptionsInput `object`
  * conflictDetailLevel
  * conflictResolutionStrategy
  * destinationCommitSpecifier **required**
  * repositoryName **required**
  * sourceCommitSpecifier **required**

### GetMergeOptionsOutput
* GetMergeOptionsOutput `object`
  * baseCommitId **required**
  * destinationCommitId **required**
  * mergeOptions **required**
    * items [MergeOptionTypeEnum](#mergeoptiontypeenum)
  * sourceCommitId **required**

### GetPullRequestApprovalStatesInput
* GetPullRequestApprovalStatesInput `object`
  * pullRequestId **required**
  * revisionId **required**

### GetPullRequestApprovalStatesOutput
* GetPullRequestApprovalStatesOutput `object`
  * approvals
    * items [Approval](#approval)

### GetPullRequestInput
* GetPullRequestInput `object`
  * pullRequestId **required**

### GetPullRequestOutput
* GetPullRequestOutput `object`
  * pullRequest **required**
    * approvalRules
      * items [ApprovalRule](#approvalrule)
    * authorArn
    * clientRequestToken
    * creationDate
    * description
    * lastActivityDate
    * pullRequestId
    * pullRequestStatus
    * pullRequestTargets
      * items [PullRequestTarget](#pullrequesttarget)
    * revisionId
    * title

### GetPullRequestOverrideStateInput
* GetPullRequestOverrideStateInput `object`
  * pullRequestId **required**
  * revisionId **required**

### GetPullRequestOverrideStateOutput
* GetPullRequestOverrideStateOutput `object`
  * overridden
  * overrider

### GetRepositoryInput
* GetRepositoryInput `object`: Represents the input of a get repository operation.
  * repositoryName **required**

### GetRepositoryOutput
* GetRepositoryOutput `object`: Represents the output of a get repository operation.
  * repositoryMetadata
    * Arn
    * accountId
    * cloneUrlHttp
    * cloneUrlSsh
    * creationDate
    * defaultBranch
    * lastModifiedDate
    * repositoryDescription
    * repositoryId
    * repositoryName

### GetRepositoryTriggersInput
* GetRepositoryTriggersInput `object`: Represents the input of a get repository triggers operation.
  * repositoryName **required**

### GetRepositoryTriggersOutput
* GetRepositoryTriggersOutput `object`: Represents the output of a get repository triggers operation.
  * configurationId
  * triggers
    * items [RepositoryTrigger](#repositorytrigger)

### HunkContent
* HunkContent `string`

### IdempotencyParameterMismatchException


### InvalidActorArnException


### InvalidApprovalRuleContentException


### InvalidApprovalRuleNameException


### InvalidApprovalRuleTemplateContentException


### InvalidApprovalRuleTemplateDescriptionException


### InvalidApprovalRuleTemplateNameException


### InvalidApprovalStateException


### InvalidAuthorArnException


### InvalidBlobIdException


### InvalidBranchNameException


### InvalidClientRequestTokenException


### InvalidCommentIdException


### InvalidCommitException


### InvalidCommitIdException


### InvalidConflictDetailLevelException


### InvalidConflictResolutionException


### InvalidConflictResolutionStrategyException


### InvalidContinuationTokenException


### InvalidDeletionParameterException


### InvalidDescriptionException


### InvalidDestinationCommitSpecifierException


### InvalidEmailException


### InvalidFileLocationException


### InvalidFileModeException


### InvalidFilePositionException


### InvalidMaxConflictFilesException


### InvalidMaxMergeHunksException


### InvalidMaxResultsException


### InvalidMergeOptionException


### InvalidOrderException


### InvalidOverrideStatusException


### InvalidParentCommitIdException


### InvalidPathException


### InvalidPullRequestEventTypeException


### InvalidPullRequestIdException


### InvalidPullRequestStatusException


### InvalidPullRequestStatusUpdateException


### InvalidReactionUserArnException


### InvalidReactionValueException


### InvalidReferenceNameException


### InvalidRelativeFileVersionEnumException


### InvalidReplacementContentException


### InvalidReplacementTypeException


### InvalidRepositoryDescriptionException


### InvalidRepositoryNameException


### InvalidRepositoryTriggerBranchNameException


### InvalidRepositoryTriggerCustomDataException


### InvalidRepositoryTriggerDestinationArnException


### InvalidRepositoryTriggerEventsException


### InvalidRepositoryTriggerNameException


### InvalidRepositoryTriggerRegionException


### InvalidResourceArnException


### InvalidRevisionIdException


### InvalidRuleContentSha256Exception


### InvalidSortByException


### InvalidSourceCommitSpecifierException


### InvalidSystemTagUsageException


### InvalidTagKeysListException


### InvalidTagsMapException


### InvalidTargetBranchException


### InvalidTargetException


### InvalidTargetsException


### InvalidTitleException


### IsBinaryFile
* IsBinaryFile `object`: Information about whether a file is binary or textual in a merge or pull request operation.
  * base
  * destination
  * source

### IsCommentDeleted
* IsCommentDeleted `boolean`

### IsContentConflict
* IsContentConflict `boolean`

### IsFileModeConflict
* IsFileModeConflict `boolean`

### IsHunkConflict
* IsHunkConflict `boolean`

### IsMergeable
* IsMergeable `boolean`

### IsMerged
* IsMerged `boolean`

### IsMove
* IsMove `boolean`

### IsObjectTypeConflict
* IsObjectTypeConflict `boolean`

### KeepEmptyFolders
* KeepEmptyFolders `boolean`

### LastModifiedDate
* LastModifiedDate `string`

### Limit
* Limit `integer`

### LineNumber
* LineNumber `integer`

### ListApprovalRuleTemplatesInput
* ListApprovalRuleTemplatesInput `object`
  * maxResults
  * nextToken

### ListApprovalRuleTemplatesOutput
* ListApprovalRuleTemplatesOutput `object`
  * approvalRuleTemplateNames
    * items [ApprovalRuleTemplateName](#approvalruletemplatename)
  * nextToken

### ListAssociatedApprovalRuleTemplatesForRepositoryInput
* ListAssociatedApprovalRuleTemplatesForRepositoryInput `object`
  * maxResults
  * nextToken
  * repositoryName **required**

### ListAssociatedApprovalRuleTemplatesForRepositoryOutput
* ListAssociatedApprovalRuleTemplatesForRepositoryOutput `object`
  * approvalRuleTemplateNames
    * items [ApprovalRuleTemplateName](#approvalruletemplatename)
  * nextToken

### ListBranchesInput
* ListBranchesInput `object`: Represents the input of a list branches operation.
  * nextToken
  * repositoryName **required**

### ListBranchesOutput
* ListBranchesOutput `object`: Represents the output of a list branches operation.
  * branches
    * items [BranchName](#branchname)
  * nextToken

### ListPullRequestsInput
* ListPullRequestsInput `object`
  * authorArn
  * maxResults
  * nextToken
  * pullRequestStatus
  * repositoryName **required**

### ListPullRequestsOutput
* ListPullRequestsOutput `object`
  * nextToken
  * pullRequestIds **required**
    * items [PullRequestId](#pullrequestid)

### ListRepositoriesForApprovalRuleTemplateInput
* ListRepositoriesForApprovalRuleTemplateInput `object`
  * approvalRuleTemplateName **required**
  * maxResults
  * nextToken

### ListRepositoriesForApprovalRuleTemplateOutput
* ListRepositoriesForApprovalRuleTemplateOutput `object`
  * nextToken
  * repositoryNames
    * items [RepositoryName](#repositoryname)

### ListRepositoriesInput
* ListRepositoriesInput `object`: Represents the input of a list repositories operation.
  * nextToken
  * order
  * sortBy

### ListRepositoriesOutput
* ListRepositoriesOutput `object`: Represents the output of a list repositories operation.
  * nextToken
  * repositories
    * items [RepositoryNameIdPair](#repositorynameidpair)

### ListTagsForResourceInput
* ListTagsForResourceInput `object`
  * nextToken
  * resourceArn **required**

### ListTagsForResourceOutput
* ListTagsForResourceOutput `object`
  * tags
  * nextToken

### Location
* Location `object`: Returns information about the location of a change or comment in the comparison between two commits or a pull request.
  * filePath
  * filePosition
  * relativeFileVersion

### ManualMergeRequiredException


### MaxResults
* MaxResults `integer`

### MaximumBranchesExceededException


### MaximumConflictResolutionEntriesExceededException


### MaximumFileContentToLoadExceededException


### MaximumFileEntriesExceededException


### MaximumItemsToCompareExceededException


### MaximumNumberOfApprovalsExceededException


### MaximumOpenPullRequestsExceededException


### MaximumRepositoryNamesExceededException


### MaximumRepositoryTriggersExceededException


### MaximumRuleTemplatesAssociatedWithRepositoryException


### MergeBranchesByFastForwardInput
* MergeBranchesByFastForwardInput `object`
  * destinationCommitSpecifier **required**
  * repositoryName **required**
  * sourceCommitSpecifier **required**
  * targetBranch

### MergeBranchesByFastForwardOutput
* MergeBranchesByFastForwardOutput `object`
  * commitId
  * treeId

### MergeBranchesBySquashInput
* MergeBranchesBySquashInput `object`
  * authorName
  * commitMessage
  * conflictDetailLevel
  * conflictResolution
    * deleteFiles
      * items [DeleteFileEntry](#deletefileentry)
    * replaceContents
      * items [ReplaceContentEntry](#replacecontententry)
    * setFileModes
      * items [SetFileModeEntry](#setfilemodeentry)
  * conflictResolutionStrategy
  * destinationCommitSpecifier **required**
  * email
  * keepEmptyFolders
  * repositoryName **required**
  * sourceCommitSpecifier **required**
  * targetBranch

### MergeBranchesBySquashOutput
* MergeBranchesBySquashOutput `object`
  * commitId
  * treeId

### MergeBranchesByThreeWayInput
* MergeBranchesByThreeWayInput `object`
  * authorName
  * commitMessage
  * conflictDetailLevel
  * conflictResolution
    * deleteFiles
      * items [DeleteFileEntry](#deletefileentry)
    * replaceContents
      * items [ReplaceContentEntry](#replacecontententry)
    * setFileModes
      * items [SetFileModeEntry](#setfilemodeentry)
  * conflictResolutionStrategy
  * destinationCommitSpecifier **required**
  * email
  * keepEmptyFolders
  * repositoryName **required**
  * sourceCommitSpecifier **required**
  * targetBranch

### MergeBranchesByThreeWayOutput
* MergeBranchesByThreeWayOutput `object`
  * commitId
  * treeId

### MergeHunk
* MergeHunk `object`: Information about merge hunks in a merge or pull request operation.
  * base
    * endLine
    * hunkContent
    * startLine
  * destination
    * endLine
    * hunkContent
    * startLine
  * isConflict
  * source
    * endLine
    * hunkContent
    * startLine

### MergeHunkDetail
* MergeHunkDetail `object`: Information about the details of a merge hunk that contains a conflict in a merge or pull request operation.
  * endLine
  * hunkContent
  * startLine

### MergeHunks
* MergeHunks `array`
  * items [MergeHunk](#mergehunk)

### MergeMetadata
* MergeMetadata `object`: Returns information about a merge or potential merge between a source reference and a destination reference in a pull request.
  * isMerged
  * mergeCommitId
  * mergeOption
  * mergedBy

### MergeOperations
* MergeOperations `object`: Information about the file operation conflicts in a merge operation.
  * destination
  * source

### MergeOptionRequiredException


### MergeOptionTypeEnum
* MergeOptionTypeEnum `string` (values: FAST_FORWARD_MERGE, SQUASH_MERGE, THREE_WAY_MERGE)

### MergeOptions
* MergeOptions `array`
  * items [MergeOptionTypeEnum](#mergeoptiontypeenum)

### MergePullRequestByFastForwardInput
* MergePullRequestByFastForwardInput `object`
  * pullRequestId **required**
  * repositoryName **required**
  * sourceCommitId

### MergePullRequestByFastForwardOutput
* MergePullRequestByFastForwardOutput `object`
  * pullRequest
    * approvalRules
      * items [ApprovalRule](#approvalrule)
    * authorArn
    * clientRequestToken
    * creationDate
    * description
    * lastActivityDate
    * pullRequestId
    * pullRequestStatus
    * pullRequestTargets
      * items [PullRequestTarget](#pullrequesttarget)
    * revisionId
    * title

### MergePullRequestBySquashInput
* MergePullRequestBySquashInput `object`
  * authorName
  * commitMessage
  * conflictDetailLevel
  * conflictResolution
    * deleteFiles
      * items [DeleteFileEntry](#deletefileentry)
    * replaceContents
      * items [ReplaceContentEntry](#replacecontententry)
    * setFileModes
      * items [SetFileModeEntry](#setfilemodeentry)
  * conflictResolutionStrategy
  * email
  * keepEmptyFolders
  * pullRequestId **required**
  * repositoryName **required**
  * sourceCommitId

### MergePullRequestBySquashOutput
* MergePullRequestBySquashOutput `object`
  * pullRequest [PullRequest](#pullrequest)

### MergePullRequestByThreeWayInput
* MergePullRequestByThreeWayInput `object`
  * authorName
  * commitMessage
  * conflictDetailLevel
  * conflictResolution
    * deleteFiles
      * items [DeleteFileEntry](#deletefileentry)
    * replaceContents
      * items [ReplaceContentEntry](#replacecontententry)
    * setFileModes
      * items [SetFileModeEntry](#setfilemodeentry)
  * conflictResolutionStrategy
  * email
  * keepEmptyFolders
  * pullRequestId **required**
  * repositoryName **required**
  * sourceCommitId

### MergePullRequestByThreeWayOutput
* MergePullRequestByThreeWayOutput `object`
  * pullRequest [PullRequest](#pullrequest)

### Message
* Message `string`

### Mode
* Mode `string`

### MultipleConflictResolutionEntriesException


### MultipleRepositoriesInPullRequestException


### Name
* Name `string`

### NameLengthExceededException


### NextToken
* NextToken `string`

### NoChangeException


### NumberOfConflicts
* NumberOfConflicts `integer`

### NumberOfRuleTemplatesExceededException


### NumberOfRulesExceededException


### ObjectId
* ObjectId `string`

### ObjectSize
* ObjectSize `integer`

### ObjectTypeEnum
* ObjectTypeEnum `string` (values: FILE, DIRECTORY, GIT_LINK, SYMBOLIC_LINK)

### ObjectTypes
* ObjectTypes `object`: Information about the type of an object in a merge operation.
  * base
  * destination
  * source

### OrderEnum
* OrderEnum `string` (values: ascending, descending)

### OriginApprovalRuleTemplate
* OriginApprovalRuleTemplate `object`: Returns information about the template that created the approval rule for a pull request.
  * approvalRuleTemplateId
  * approvalRuleTemplateName

### Overridden
* Overridden `boolean`

### OverrideAlreadySetException


### OverridePullRequestApprovalRulesInput
* OverridePullRequestApprovalRulesInput `object`
  * overrideStatus **required**
  * pullRequestId **required**
  * revisionId **required**

### OverrideStatus
* OverrideStatus `string` (values: OVERRIDE, REVOKE)

### OverrideStatusRequiredException


### ParentCommitDoesNotExistException


### ParentCommitIdOutdatedException


### ParentCommitIdRequiredException


### ParentList
* ParentList `array`
  * items [ObjectId](#objectid)

### Path
* Path `string`

### PathDoesNotExistException


### PathRequiredException


### Position
* Position `integer`

### PostCommentForComparedCommitInput
* PostCommentForComparedCommitInput `object`
  * afterCommitId **required**
  * beforeCommitId
  * clientRequestToken
  * content **required**
  * location
    * filePath
    * filePosition
    * relativeFileVersion
  * repositoryName **required**

### PostCommentForComparedCommitOutput
* PostCommentForComparedCommitOutput `object`
  * afterBlobId
  * afterCommitId
  * beforeBlobId
  * beforeCommitId
  * comment
    * authorArn
    * callerReactions
      * items [ReactionValue](#reactionvalue)
    * clientRequestToken
    * commentId
    * content
    * creationDate
    * deleted
    * inReplyTo
    * lastModifiedDate
    * reactionCounts
  * location
    * filePath
    * filePosition
    * relativeFileVersion
  * repositoryName

### PostCommentForPullRequestInput
* PostCommentForPullRequestInput `object`
  * afterCommitId **required**
  * beforeCommitId **required**
  * clientRequestToken
  * content **required**
  * location
    * filePath
    * filePosition
    * relativeFileVersion
  * pullRequestId **required**
  * repositoryName **required**

### PostCommentForPullRequestOutput
* PostCommentForPullRequestOutput `object`
  * afterBlobId
  * afterCommitId
  * beforeBlobId
  * beforeCommitId
  * comment
    * authorArn
    * callerReactions
      * items [ReactionValue](#reactionvalue)
    * clientRequestToken
    * commentId
    * content
    * creationDate
    * deleted
    * inReplyTo
    * lastModifiedDate
    * reactionCounts
  * location
    * filePath
    * filePosition
    * relativeFileVersion
  * pullRequestId
  * repositoryName

### PostCommentReplyInput
* PostCommentReplyInput `object`
  * clientRequestToken
  * content **required**
  * inReplyTo **required**

### PostCommentReplyOutput
* PostCommentReplyOutput `object`
  * comment
    * authorArn
    * callerReactions
      * items [ReactionValue](#reactionvalue)
    * clientRequestToken
    * commentId
    * content
    * creationDate
    * deleted
    * inReplyTo
    * lastModifiedDate
    * reactionCounts

### PullRequest
* PullRequest `object`: Returns information about a pull request.
  * approvalRules
    * items [ApprovalRule](#approvalrule)
  * authorArn
  * clientRequestToken
  * creationDate
  * description
  * lastActivityDate
  * pullRequestId
  * pullRequestStatus
  * pullRequestTargets
    * items [PullRequestTarget](#pullrequesttarget)
  * revisionId
  * title

### PullRequestAlreadyClosedException


### PullRequestApprovalRulesNotSatisfiedException


### PullRequestCannotBeApprovedByAuthorException


### PullRequestCreatedEventMetadata
* PullRequestCreatedEventMetadata `object`: Metadata about the pull request that is used when comparing the pull request source with its destination.
  * destinationCommitId
  * mergeBase
  * repositoryName
  * sourceCommitId

### PullRequestDoesNotExistException


### PullRequestEvent
* PullRequestEvent `object`: Returns information about a pull request event.
  * actorArn
  * approvalRuleEventMetadata
    * approvalRuleContent
    * approvalRuleId
    * approvalRuleName
  * approvalRuleOverriddenEventMetadata
    * overrideStatus
    * revisionId
  * approvalStateChangedEventMetadata
    * approvalStatus
    * revisionId
  * eventDate
  * pullRequestCreatedEventMetadata
    * destinationCommitId
    * mergeBase
    * repositoryName
    * sourceCommitId
  * pullRequestEventType
  * pullRequestId
  * pullRequestMergedStateChangedEventMetadata
    * destinationReference
    * mergeMetadata
      * isMerged
      * mergeCommitId
      * mergeOption
      * mergedBy
    * repositoryName
  * pullRequestSourceReferenceUpdatedEventMetadata
    * afterCommitId
    * beforeCommitId
    * mergeBase
    * repositoryName
  * pullRequestStatusChangedEventMetadata
    * pullRequestStatus

### PullRequestEventList
* PullRequestEventList `array`
  * items [PullRequestEvent](#pullrequestevent)

### PullRequestEventType
* PullRequestEventType `string` (values: PULL_REQUEST_CREATED, PULL_REQUEST_STATUS_CHANGED, PULL_REQUEST_SOURCE_REFERENCE_UPDATED, PULL_REQUEST_MERGE_STATE_CHANGED, PULL_REQUEST_APPROVAL_RULE_CREATED, PULL_REQUEST_APPROVAL_RULE_UPDATED, PULL_REQUEST_APPROVAL_RULE_DELETED, PULL_REQUEST_APPROVAL_RULE_OVERRIDDEN, PULL_REQUEST_APPROVAL_STATE_CHANGED)

### PullRequestId
* PullRequestId `string`

### PullRequestIdList
* PullRequestIdList `array`
  * items [PullRequestId](#pullrequestid)

### PullRequestIdRequiredException


### PullRequestMergedStateChangedEventMetadata
* PullRequestMergedStateChangedEventMetadata `object`: Returns information about the change in the merge state for a pull request event. 
  * destinationReference
  * mergeMetadata
    * isMerged
    * mergeCommitId
    * mergeOption
    * mergedBy
  * repositoryName

### PullRequestSourceReferenceUpdatedEventMetadata
* PullRequestSourceReferenceUpdatedEventMetadata `object`: Information about an update to the source branch of a pull request.
  * afterCommitId
  * beforeCommitId
  * mergeBase
  * repositoryName

### PullRequestStatusChangedEventMetadata
* PullRequestStatusChangedEventMetadata `object`: Information about a change to the status of a pull request.
  * pullRequestStatus

### PullRequestStatusEnum
* PullRequestStatusEnum `string` (values: OPEN, CLOSED)

### PullRequestStatusRequiredException


### PullRequestTarget
* PullRequestTarget `object`: Returns information about a pull request target.
  * destinationCommit
  * destinationReference
  * mergeBase
  * mergeMetadata
    * isMerged
    * mergeCommitId
    * mergeOption
    * mergedBy
  * repositoryName
  * sourceCommit
  * sourceReference

### PullRequestTargetList
* PullRequestTargetList `array`
  * items [PullRequestTarget](#pullrequesttarget)

### PutCommentReactionInput
* PutCommentReactionInput `object`
  * commentId **required**
  * reactionValue **required**

### PutFileEntries
* PutFileEntries `array`
  * items [PutFileEntry](#putfileentry)

### PutFileEntry
* PutFileEntry `object`: Information about a file added or updated as part of a commit.
  * fileContent
  * fileMode
  * filePath **required**
  * sourceFile
    * filePath **required**
    * isMove

### PutFileEntryConflictException


### PutFileInput
* PutFileInput `object`
  * branchName **required**
  * commitMessage
  * email
  * fileContent **required**
  * fileMode
  * filePath **required**
  * name
  * parentCommitId
  * repositoryName **required**

### PutFileOutput
* PutFileOutput `object`
  * blobId **required**
  * commitId **required**
  * treeId **required**

### PutRepositoryTriggersInput
* PutRepositoryTriggersInput `object`: Represents the input of a put repository triggers operation.
  * repositoryName **required**
  * triggers **required**
    * items [RepositoryTrigger](#repositorytrigger)

### PutRepositoryTriggersOutput
* PutRepositoryTriggersOutput `object`: Represents the output of a put repository triggers operation.
  * configurationId

### ReactionCountsMap
* ReactionCountsMap `object`

### ReactionEmoji
* ReactionEmoji `string`

### ReactionForComment
* ReactionForComment `object`: Information about the reaction values provided by users on a comment.
  * reaction
    * emoji
    * shortCode
    * unicode
  * reactionUsers
    * items [Arn](#arn)
  * reactionsFromDeletedUsersCount

### ReactionLimitExceededException


### ReactionShortCode
* ReactionShortCode `string`

### ReactionUnicode
* ReactionUnicode `string`

### ReactionUsersList
* ReactionUsersList `array`
  * items [Arn](#arn)

### ReactionValue
* ReactionValue `string`

### ReactionValueFormats
* ReactionValueFormats `object`: Information about the values for reactions to a comment. AWS CodeCommit supports a limited set of reactions.
  * emoji
  * shortCode
  * unicode

### ReactionValueRequiredException


### ReactionsForCommentList
* ReactionsForCommentList `array`
  * items [ReactionForComment](#reactionforcomment)

### ReferenceDoesNotExistException


### ReferenceName
* ReferenceName `string`

### ReferenceNameRequiredException


### ReferenceTypeNotSupportedException


### RelativeFileVersionEnum
* RelativeFileVersionEnum `string` (values: BEFORE, AFTER)

### ReplaceContentEntries
* ReplaceContentEntries `array`
  * items [ReplaceContentEntry](#replacecontententry)

### ReplaceContentEntry
* ReplaceContentEntry `object`: Information about a replacement content entry in the conflict of a merge or pull request operation.
  * content
  * fileMode
  * filePath **required**
  * replacementType **required**

### ReplacementContentRequiredException


### ReplacementTypeEnum
* ReplacementTypeEnum `string` (values: KEEP_BASE, KEEP_SOURCE, KEEP_DESTINATION, USE_NEW_CONTENT)

### ReplacementTypeRequiredException


### RepositoryDescription
* RepositoryDescription `string`

### RepositoryDoesNotExistException


### RepositoryId
* RepositoryId `string`

### RepositoryLimitExceededException


### RepositoryMetadata
* RepositoryMetadata `object`: Information about a repository.
  * Arn
  * accountId
  * cloneUrlHttp
  * cloneUrlSsh
  * creationDate
  * defaultBranch
  * lastModifiedDate
  * repositoryDescription
  * repositoryId
  * repositoryName

### RepositoryMetadataList
* RepositoryMetadataList `array`
  * items [RepositoryMetadata](#repositorymetadata)

### RepositoryName
* RepositoryName `string`

### RepositoryNameExistsException


### RepositoryNameIdPair
* RepositoryNameIdPair `object`: Information about a repository name and ID.
  * repositoryId
  * repositoryName

### RepositoryNameIdPairList
* RepositoryNameIdPairList `array`
  * items [RepositoryNameIdPair](#repositorynameidpair)

### RepositoryNameList
* RepositoryNameList `array`
  * items [RepositoryName](#repositoryname)

### RepositoryNameRequiredException


### RepositoryNamesRequiredException


### RepositoryNotAssociatedWithPullRequestException


### RepositoryNotFoundList
* RepositoryNotFoundList `array`
  * items [RepositoryName](#repositoryname)

### RepositoryTrigger
* RepositoryTrigger `object`: Information about a trigger for a repository.
  * branches
    * items [BranchName](#branchname)
  * customData
  * destinationArn **required**
  * events **required**
    * items [RepositoryTriggerEventEnum](#repositorytriggereventenum)
  * name **required**

### RepositoryTriggerBranchNameListRequiredException


### RepositoryTriggerCustomData
* RepositoryTriggerCustomData `string`

### RepositoryTriggerDestinationArnRequiredException


### RepositoryTriggerEventEnum
* RepositoryTriggerEventEnum `string` (values: all, updateReference, createReference, deleteReference)

### RepositoryTriggerEventList
* RepositoryTriggerEventList `array`
  * items [RepositoryTriggerEventEnum](#repositorytriggereventenum)

### RepositoryTriggerEventsListRequiredException


### RepositoryTriggerExecutionFailure
* RepositoryTriggerExecutionFailure `object`: A trigger failed to run.
  * failureMessage
  * trigger

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


### RepositoryTriggersConfigurationId
* RepositoryTriggersConfigurationId `string`

### RepositoryTriggersList
* RepositoryTriggersList `array`
  * items [RepositoryTrigger](#repositorytrigger)

### RepositoryTriggersListRequiredException


### ResourceArn
* ResourceArn `string`

### ResourceArnRequiredException


### RestrictedSourceFileException


### RevisionId
* RevisionId `string`

### RevisionIdRequiredException


### RevisionNotCurrentException


### RuleContentSha256
* RuleContentSha256 `string`

### SameFileContentException


### SamePathRequestException


### SetFileModeEntries
* SetFileModeEntries `array`
  * items [SetFileModeEntry](#setfilemodeentry)

### SetFileModeEntry
* SetFileModeEntry `object`: Information about the file mode changes.
  * fileMode **required**
  * filePath **required**

### SortByEnum
* SortByEnum `string` (values: repositoryName, lastModifiedDate)

### SourceAndDestinationAreSameException


### SourceFileOrContentRequiredException


### SourceFileSpecifier
* SourceFileSpecifier `object`: Information about a source file that is part of changes made in a commit.
  * filePath **required**
  * isMove

### SubModule
* SubModule `object`: Returns information about a submodule reference in a repository folder.
  * absolutePath
  * commitId
  * relativePath

### SubModuleList
* SubModuleList `array`
  * items [SubModule](#submodule)

### SymbolicLink
* SymbolicLink `object`: Returns information about a symbolic link in a repository folder.
  * absolutePath
  * blobId
  * fileMode
  * relativePath

### SymbolicLinkList
* SymbolicLinkList `array`
  * items [SymbolicLink](#symboliclink)

### TagKey
* TagKey `string`

### TagKeysList
* TagKeysList `array`
  * items [TagKey](#tagkey)

### TagKeysListRequiredException


### TagPolicyException


### TagResourceInput
* TagResourceInput `object`
  * tags **required**
  * resourceArn **required**

### TagValue
* TagValue `string`

### TagsMap
* TagsMap `object`

### TagsMapRequiredException


### Target
* Target `object`: Returns information about a target for a pull request.
  * destinationReference
  * repositoryName **required**
  * sourceReference **required**

### TargetList
* TargetList `array`
  * items [Target](#target)

### TargetRequiredException


### TargetsRequiredException


### TestRepositoryTriggersInput
* TestRepositoryTriggersInput `object`: Represents the input of a test repository triggers operation.
  * repositoryName **required**
  * triggers **required**
    * items [RepositoryTrigger](#repositorytrigger)

### TestRepositoryTriggersOutput
* TestRepositoryTriggersOutput `object`: Represents the output of a test repository triggers operation.
  * failedExecutions
    * items [RepositoryTriggerExecutionFailure](#repositorytriggerexecutionfailure)
  * successfulExecutions
    * items [RepositoryTriggerName](#repositorytriggername)

### TipOfSourceReferenceIsDifferentException


### TipsDivergenceExceededException


### Title
* Title `string`

### TitleRequiredException


### TooManyTagsException


### UntagResourceInput
* UntagResourceInput `object`
  * resourceArn **required**
  * tagKeys **required**
    * items [TagKey](#tagkey)

### UpdateApprovalRuleTemplateContentInput
* UpdateApprovalRuleTemplateContentInput `object`
  * approvalRuleTemplateName **required**
  * existingRuleContentSha256
  * newRuleContent **required**

### UpdateApprovalRuleTemplateContentOutput
* UpdateApprovalRuleTemplateContentOutput `object`
  * approvalRuleTemplate **required** [ApprovalRuleTemplate](#approvalruletemplate)

### UpdateApprovalRuleTemplateDescriptionInput
* UpdateApprovalRuleTemplateDescriptionInput `object`
  * approvalRuleTemplateDescription **required**
  * approvalRuleTemplateName **required**

### UpdateApprovalRuleTemplateDescriptionOutput
* UpdateApprovalRuleTemplateDescriptionOutput `object`
  * approvalRuleTemplate **required**
    * approvalRuleTemplateContent
    * approvalRuleTemplateDescription
    * approvalRuleTemplateId
    * approvalRuleTemplateName
    * creationDate
    * lastModifiedDate
    * lastModifiedUser
    * ruleContentSha256

### UpdateApprovalRuleTemplateNameInput
* UpdateApprovalRuleTemplateNameInput `object`
  * newApprovalRuleTemplateName **required**
  * oldApprovalRuleTemplateName **required**

### UpdateApprovalRuleTemplateNameOutput
* UpdateApprovalRuleTemplateNameOutput `object`
  * approvalRuleTemplate **required**
    * approvalRuleTemplateContent
    * approvalRuleTemplateDescription
    * approvalRuleTemplateId
    * approvalRuleTemplateName
    * creationDate
    * lastModifiedDate
    * lastModifiedUser
    * ruleContentSha256

### UpdateCommentInput
* UpdateCommentInput `object`
  * commentId **required**
  * content **required**

### UpdateCommentOutput
* UpdateCommentOutput `object`
  * comment
    * authorArn
    * callerReactions
      * items [ReactionValue](#reactionvalue)
    * clientRequestToken
    * commentId
    * content
    * creationDate
    * deleted
    * inReplyTo
    * lastModifiedDate
    * reactionCounts

### UpdateDefaultBranchInput
* UpdateDefaultBranchInput `object`: Represents the input of an update default branch operation.
  * defaultBranchName **required**
  * repositoryName **required**

### UpdatePullRequestApprovalRuleContentInput
* UpdatePullRequestApprovalRuleContentInput `object`
  * approvalRuleName **required**
  * existingRuleContentSha256
  * newRuleContent **required**
  * pullRequestId **required**

### UpdatePullRequestApprovalRuleContentOutput
* UpdatePullRequestApprovalRuleContentOutput `object`
  * approvalRule **required**
    * approvalRuleContent
    * approvalRuleId
    * approvalRuleName
    * creationDate
    * lastModifiedDate
    * lastModifiedUser
    * originApprovalRuleTemplate
      * approvalRuleTemplateId
      * approvalRuleTemplateName
    * ruleContentSha256

### UpdatePullRequestApprovalStateInput
* UpdatePullRequestApprovalStateInput `object`
  * approvalState **required**
  * pullRequestId **required**
  * revisionId **required**

### UpdatePullRequestDescriptionInput
* UpdatePullRequestDescriptionInput `object`
  * description **required**
  * pullRequestId **required**

### UpdatePullRequestDescriptionOutput
* UpdatePullRequestDescriptionOutput `object`
  * pullRequest **required**
    * approvalRules
      * items [ApprovalRule](#approvalrule)
    * authorArn
    * clientRequestToken
    * creationDate
    * description
    * lastActivityDate
    * pullRequestId
    * pullRequestStatus
    * pullRequestTargets
      * items [PullRequestTarget](#pullrequesttarget)
    * revisionId
    * title

### UpdatePullRequestStatusInput
* UpdatePullRequestStatusInput `object`
  * pullRequestId **required**
  * pullRequestStatus **required**

### UpdatePullRequestStatusOutput
* UpdatePullRequestStatusOutput `object`
  * pullRequest **required**
    * approvalRules
      * items [ApprovalRule](#approvalrule)
    * authorArn
    * clientRequestToken
    * creationDate
    * description
    * lastActivityDate
    * pullRequestId
    * pullRequestStatus
    * pullRequestTargets
      * items [PullRequestTarget](#pullrequesttarget)
    * revisionId
    * title

### UpdatePullRequestTitleInput
* UpdatePullRequestTitleInput `object`
  * pullRequestId **required**
  * title **required**

### UpdatePullRequestTitleOutput
* UpdatePullRequestTitleOutput `object`
  * pullRequest **required**
    * approvalRules
      * items [ApprovalRule](#approvalrule)
    * authorArn
    * clientRequestToken
    * creationDate
    * description
    * lastActivityDate
    * pullRequestId
    * pullRequestStatus
    * pullRequestTargets
      * items [PullRequestTarget](#pullrequesttarget)
    * revisionId
    * title

### UpdateRepositoryDescriptionInput
* UpdateRepositoryDescriptionInput `object`: Represents the input of an update repository description operation.
  * repositoryDescription
  * repositoryName **required**

### UpdateRepositoryNameInput
* UpdateRepositoryNameInput `object`: Represents the input of an update repository description operation.
  * newName **required**
  * oldName **required**

### UserInfo
* UserInfo `object`: Information about the user who made a specified commit.
  * date
  * email
  * name

### blob
* blob `string`


