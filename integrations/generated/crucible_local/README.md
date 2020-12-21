# @datafire/crucible_local

Client library for Crucible

## Installation and Usage
```bash
npm install --save @datafire/crucible_local
```
```js
let crucible_local = require('@datafire/crucible_local').create();

.then(data => {
  console.log(data);
});
```

## Description



## Actions

### login
Get the user authentication token.
 
 This is a legacy version of the login request. Using GET is deprecated as your password is likely to appear in logs which record request URLs.
 Use the POST version instead.


```js
crucible_local.login({}, context)
```

#### Input
* input `object`
  * userName `string`: the username of the user to get the token for
  * password `string`: the password for the user to get the token for

#### Output
*Output schema unknown*

### loginPost
Get the user authentication token.


```js
crucible_local.loginPost(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### getAllProjects
Get the list of projects that the authenticated user is entitled to access.


```js
crucible_local.getAllProjects({}, context)
```

#### Input
* input `object`
  * excludeAllowedReviewers `boolean`: if set to true, user data (e.g. allowedReviewers) which is expensive

#### Output
*Output schema unknown*

### getProject
Returns a project description.


```js
crucible_local.getProject({
  "key": ""
}, context)
```

#### Input
* input `object`
  * excludeAllowedReviewers `boolean`
  * key **required** `string`: the key of a Crucible project.

#### Output
*Output schema unknown*

### getAllRepositories
Returns a list of all repositories. This includes plugin provided repositories


```js
crucible_local.getAllRepositories({}, context)
```

#### Input
* input `object`
  * name `string`: filter repositories by the repository key, only repositories of keys containing this value
  * enabled `boolean`: filter repositories by enabled flag.  Only enabled/disabled repositories would be returned
  * available `boolean`: filter repositories by its availability.  Only available/unavailable repositories would be returned
  * type `string`: filter repositories by type.  Allowed values: cvs, svn, p4, git, hg, plugin (for light SCM repositories).
  * limit `integer`: maximum number of repositories to be returned.

#### Output
*Output schema unknown*

### browse
Lists the contents of the specified directory.


```js
crucible_local.browse({
  "path": "",
  "repository": ""
}, context)
```

#### Input
* input `object`
  * path **required** `string`: path to a directory. When path represents a file name, the result is unspecified.
  * repository **required** `string`: the key of the Crucible SCM plugin repository.

#### Output
*Output schema unknown*

### change
Represents a particular changeset.


```js
crucible_local.change({
  "repository": "",
  "revision": ""
}, context)
```

#### Input
* input `object`
  * repository **required** `string`: the key of the Crucible SCM plugin repository.
  * revision **required** `string`: the SCM revision string.

#### Output
*Output schema unknown*

### changes
Represents a sorted list of changesets, newest first.


```js
crucible_local.changes({
  "path": "",
  "repository": ""
}, context)
```

#### Input
* input `object`
  * oldestCsid `string`: only return change sets after this change set. If omitted there is no restriction.
  * includeOldest `boolean`: include the change set with id "from" in the change sets returned.
  * newestCsid `string`: only return change sets before this change set. If omitted there is no restriction.
  * includeNewest `boolean`: include the change set with id "to" in the change sets returned.
  * max `integer`: return only the newest change sets, to a maximum of maxChangesets.
  * path **required** `string`: only show change sets which contain at least one revision with a path under this path.
  * repository **required** `string`: the key of the Crucible SCM plugin repository.

#### Output
*Output schema unknown*

### getContents
Returns the raw content of the specified file revision as a binary
 stream. No attempt is made to identify the content type and no mime
 type is provided.


```js
crucible_local.getContents({
  "path": "",
  "repository": "",
  "revision": ""
}, context)
```

#### Input
* input `object`
  * path **required** `string`: the path of a file.
  * repository **required** `string`: the key of the Crucible SCM plugin repository.
  * revision **required** `string`: the SCM revision string.

#### Output
*Output schema unknown*

### history
Represents the history of a versioned entity.


```js
crucible_local.history({
  "path": "",
  "repository": "",
  "revision": ""
}, context)
```

#### Input
* input `object`
  * path **required** `string`: the path of a file or versioned directory (note that
  * repository **required** `string`: the key of the Crucible SCM plugin repository.
  * revision **required** `string`: the SCM revision string.

#### Output
*Output schema unknown*

### getRepositoryDetails



```js
crucible_local.getRepositoryDetails({
  "repository": ""
}, context)
```

#### Input
* input `object`
  * repository **required** `string`: the key of the Crucible SCM plugin repository.

#### Output
*Output schema unknown*

### getSvnRepositoryDetails
For backward compatibility we provide this method, but repositories should be referred to just by their key.


```js
crucible_local.getSvnRepositoryDetails({
  "repository": ""
}, context)
```

#### Input
* input `object`
  * repository **required** `string`: the key of a FishEye or Crucible SCM plugin repository

#### Output
*Output schema unknown*

### details



```js
crucible_local.details({
  "path": "",
  "repository": "",
  "revision": ""
}, context)
```

#### Input
* input `object`
  * path **required** `string`: the path of a file or versioned directory (note that
  * repository **required** `string`: the key of the Crucible SCM plugin repository.
  * revision **required** `string`: the SCM revision string.

#### Output
*Output schema unknown*

### getAllReviews



```js
crucible_local.getAllReviews({}, context)
```

#### Input
* input `object`
  * state `string`: only return reviews that are in these states.

#### Output
*Output schema unknown*

### createReview



```js
crucible_local.createReview(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### getAllDetailedReviews
Retrieves all reviews that are in one of the the specified states. For each review all details are included (review items + comments). The
 wiki rendered comments will be available via the <messageAsHtml> element


```js
crucible_local.getAllDetailedReviews({}, context)
```

#### Input
* input `object`
  * state `string`: the review states to match.

#### Output
*Output schema unknown*

### getCustomFilterReviews
To ignore a property, omit it from the query string.


```js
crucible_local.getCustomFilterReviews({}, context)
```

#### Input
* input `object`
  * title `string`: a string that will be searched for in review titles.
  * author `string`: reviews authored by this user.
  * moderator `string`: reviews moderated by this user.
  * creator `string`: reviews created by this user.
  * states `string`: comma-separated list of amy of the following strings: (Draft,
  * reviewer `string`: reviews reviewed by this user.
  * orRoles `boolean`: whether the value of , ,
  * complete `boolean`: reviews that the specified reviewer has completed.
  * allReviewersComplete `boolean`: Reviews that all reviewers have completed.
  * project `string`: reviews for the specified project.
  * fromDate `integer`: reviews with last activity date after the specified timestamp, in milliseconds. Inclusive.
  * toDate `integer`: reviews with last activity date before the specified timestamp, in milliseconds. Inclusive.

#### Output
*Output schema unknown*

### postCustomFilterReviews
This method should no longer be used, as it uses a POST for a read-only
 retrieval operation and is provided for backward compatibility only.


```js
crucible_local.postCustomFilterReviews(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### getDetailedCustomFilterReviews
To ignore a property, omit it from the query string.


```js
crucible_local.getDetailedCustomFilterReviews({}, context)
```

#### Input
* input `object`
  * title `string`: a string that will be searched for in review titles.
  * author `string`: reviews authored by this user.
  * moderator `string`: reviews moderated by this user.
  * creator `string`: reviews created by this user.
  * states `string`: comma-separated list of amy of the following strings: (Draft,
  * reviewer `string`: reviews reviewed by this user.
  * orRoles `boolean`: whether the value of , ,
  * complete `boolean`: reviews that the specified reviewer has completed.
  * allReviewersComplete `boolean`: Reviews that all reviewers have completed.
  * project `string`: reviews for the specified project.
  * fromDate `integer`: reviews with last activity date after the specified timestamp, in milliseconds. Inclusive.
  * toDate `integer`: reviews with last activity date before the specified timestamp, in milliseconds. Inclusive.

#### Output
*Output schema unknown*

### postDetailedCustomFilterReviews
This method should no longer be used, as it uses a POST for a read-only
 retrieval operation and is provided for backward compatibility only.


```js
crucible_local.postDetailedCustomFilterReviews(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### getFilteredReviewsForUser
Get all the reviews which match the given filter, for the current user.


```js
crucible_local.getFilteredReviewsForUser({
  "filter": ""
}, context)
```

#### Input
* input `object`
  * filter **required** `string`: a predefined filter type.

#### Output
*Output schema unknown*

### getDetailedFilteredReviewsForUser
Gets a list of all the reviews that match the specified filter criteria.


```js
crucible_local.getDetailedFilteredReviewsForUser({
  "filter": ""
}, context)
```

#### Input
* input `object`
  * filter **required** `string`: a predefined filter type.

#### Output
*Output schema unknown*

### getMetrics
Get comment metrics metadata for the specified metrics version.


```js
crucible_local.getMetrics({
  "version": ""
}, context)
```

#### Input
* input `object`
  * version **required** `string`: a metrics version.

#### Output
*Output schema unknown*

### getReviewsForPath
Return a list of Reviews which include a particular file.


```js
crucible_local.getReviewsForPath({
  "repository": ""
}, context)
```

#### Input
* input `object`
  * path `string`: path to find in reviews
  * repository **required** `string`: the key of the repository to search for file

#### Output
*Output schema unknown*

### getReviewsDetailsForPath
Return a list of Reviews which include a particular file.


```js
crucible_local.getReviewsDetailsForPath({
  "repository": ""
}, context)
```

#### Input
* input `object`
  * path `string`: path to find in reviews.
  * repository **required** `string`: the key of the repository to search for file.

#### Output
*Output schema unknown*

### getVersionInfo
Returns Crucible version information.


```js
crucible_local.getVersionInfo(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### deleteReview
Permanently deletes the specified review.
 The review must have been abandoned.


```js
crucible_local.deleteReview({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: the permId of the review to delete (e.g. "CR-45").

#### Output
*Output schema unknown*

### getReview
Get a single review by its permId (e.g. "CR-45").
 If the review does not exist, a 404 is returned.
 
 The moderator element may not exist if the review does not have a Moderator.


```js
crucible_local.getReview({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: the permId of the review to delete (e.g. "CR-45").

#### Output
*Output schema unknown*

### getAvailableActions
Get a list of the actions which the current user is allowed to perform
 on the review.


```js
crucible_local.getAvailableActions({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: the permId of the a review (e.g. "CR-45").

#### Output
*Output schema unknown*

### addChangesetToReview



```js
crucible_local.addChangesetToReview({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: the perm id of the review to add the changeset to

#### Output
*Output schema unknown*

### addFile



```js
crucible_local.addFile({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: the review perma id to add the file

#### Output
*Output schema unknown*

### addPatchReview0
Old, non-restful name. Kept for backwards compatibility. Exactly the same as POSTing to /{id}/patch


```js
crucible_local.addPatchReview0({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
*Output schema unknown*

### closeReviewWithComment
Closes the given review with the summary given.


```js
crucible_local.closeReviewWithComment({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: the review perma id to close. it should be in the open state.

#### Output
*Output schema unknown*

### getAllComments
Return all the comments visible to the requesting user for the review.


```js
crucible_local.getAllComments({
  "id": ""
}, context)
```

#### Input
* input `object`
  * render `boolean`: indicate whether to render the wiki text in the returned comments. If set to "true", the comments will contain a
  * id **required** `string`: the review perma-id

#### Output
*Output schema unknown*

### addGeneralComment
Add a general comment to the review.


```js
crucible_local.addGeneralComment({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: the review perma-id

#### Output
*Output schema unknown*

### getGeneralComments



```js
crucible_local.getGeneralComments({
  "id": ""
}, context)
```

#### Input
* input `object`
  * render `boolean`: indicate whether to render the wiki text in the returned comments. If set to "true", the comments will contain a
  * id **required** `string`: review perma-id

#### Output
*Output schema unknown*

### markAllCommentsAsRead
For the effective user, mark all comments in a review as read (except
 those marked as leave unread).


```js
crucible_local.markAllCommentsAsRead({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: the review perma-id (e.g. "CR-45").

#### Output
*Output schema unknown*

### getVersionedComments



```js
crucible_local.getVersionedComments({
  "id": ""
}, context)
```

#### Input
* input `object`
  * render `boolean`: indicate whether to render the wiki text in the returned comments. If set to "true", the comments will contain a
  * id **required** `string`: review perma-id

#### Output
*Output schema unknown*

### removeComment
Deletes the given comment.


```js
crucible_local.removeComment({
  "id": "",
  "cId": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: the perma id of the review
  * cId **required** `string`: the id of the comment

#### Output
*Output schema unknown*

### getComment
Gets the given comment.


```js
crucible_local.getComment({
  "id": "",
  "cId": ""
}, context)
```

#### Input
* input `object`
  * render `boolean`: true if the wiki text should be rendered into html, into the field <messageAsHtml>.
  * id **required** `string`: the perma id of the review
  * cId **required** `string`: the id of the comment

#### Output
*Output schema unknown*

### updateComment
Updates the comment given by the perma id to the new comment posted.


```js
crucible_local.updateComment({
  "id": "",
  "cId": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: the perma id of the review
  * cId **required** `string`: the id of the comment

#### Output
*Output schema unknown*

### markCommentAsLeaveUnread
Marks the comment as leave unread to the current user - it will not automatically be marked as read by crucible.


```js
crucible_local.markCommentAsLeaveUnread({
  "id": "",
  "cId": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: the review perma id for the comment
  * cId **required** `string`: the comment perma id

#### Output
*Output schema unknown*

### markCommentAsRead
Mark the given comment as read for the user used to make this POST.


```js
crucible_local.markCommentAsRead({
  "id": "",
  "cId": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: the review perma id
  * cId **required** `string`: the comment perma id.

#### Output
*Output schema unknown*

### getReplies
Gets the replies to the given comment.


```js
crucible_local.getReplies({
  "id": "",
  "cId": ""
}, context)
```

#### Input
* input `object`
  * render `boolean`: true if the comments should also be rendered into html, into the element <messageAsHtml>
  * id **required** `string`: the review perma-id (e.g. "CR-45").
  * cId **required** `string`: the comment to reply to

#### Output
*Output schema unknown*

### addReply
Adds a reply to the given comment. This call includes the  repsonse header that
 contains the URL of the newly created entity.


```js
crucible_local.addReply({
  "id": "",
  "cId": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: the review perma-id (e.g. "CR-45").
  * cId **required** `string`: the comment to reply to

#### Output
*Output schema unknown*

### removeReply
Deletes the reply.


```js
crucible_local.removeReply({
  "id": "",
  "rId": "",
  "cId": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The review perma id
  * rId **required** `string`: the perma id of the reply to delete
  * cId **required** `string`: the reply's parent comment perma id

#### Output
*Output schema unknown*

### updateReply
Updates a reply with the given newComment.


```js
crucible_local.updateReply({
  "id": "",
  "rId": "",
  "cId": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The review perma id
  * rId **required** `string`: the perma id of the reply to delete
  * cId **required** `string`: the reply's parent comment perma id

#### Output
*Output schema unknown*

### completeReview
Completes the review for the current user


```js
crucible_local.completeReview({
  "id": ""
}, context)
```

#### Input
* input `object`
  * ignoreWarnings `boolean`: if {@code ignoreWarnings==true} then condition failure warnings will be ignored
  * id **required** `string`: the review perma id

#### Output
*Output schema unknown*

### getDetailedReview
Returns the specified review.


```js
crucible_local.getDetailedReview({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: the permId of the review (e.g. "CR-45").

#### Output
*Output schema unknown*

### getReviewPatches
Get a list of patches and their details for the given review


```js
crucible_local.getReviewPatches({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: the review id to get the patches for

#### Output
*Output schema unknown*

### addPatchToReview
Add the revisions in a patch to an existing review.


```js
crucible_local.addPatchToReview({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: the review id to get the patches for

#### Output
*Output schema unknown*

### removePatch
Removes the patch with the given id from the review. All of the revisions provided by the patch will be removed as well.


```js
crucible_local.removePatch({
  "patchId": 0,
  "id": ""
}, context)
```

#### Input
* input `object`
  * patchId **required** `integer`: the id of the patch (as returned by the '{id}/patch' resource)
  * id **required** `string`: the permaId of the review

#### Output
*Output schema unknown*

### publishAllComments
Publishes all the draft comments of the current user.


```js
crucible_local.publishAllComments({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: the review perma id to look for draft comments

#### Output
*Output schema unknown*

### publishComment
publishes the given draft comment.


```js
crucible_local.publishComment({
  "id": "",
  "cId": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: the review perma id
  * cId **required** `string`: the comment perma id

#### Output
*Output schema unknown*

### remindIncompleteReviewers
Immediately send a reminder to incomplete reviewers about the given review.


```js
crucible_local.remindIncompleteReviewers({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: the review perma id to remind about. it should be in the open state.

#### Output
*Output schema unknown*

### getReviewers
Get a list of reviewers in the review given by the permaid id.


```js
crucible_local.getReviewers({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: the id of the review to add to

#### Output
*Output schema unknown*

### addReviewers
Adds the given list of reviewers to the review.


```js
crucible_local.addReviewers({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: the id of the review to add to

#### Output
*Output schema unknown*

### getCompletedReviewers
Gets a list of completed reviewers.


```js
crucible_local.getCompletedReviewers({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: the review perma id to retrieve reviewers

#### Output
*Output schema unknown*

### getUncompletedReviewers
Gets a list of reviewers that have not completed the review.


```js
crucible_local.getUncompletedReviewers({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: the review perma id to retrieve reviewers

#### Output
*Output schema unknown*

### removeReviewer
Removes the reviewer from the review.


```js
crucible_local.removeReviewer({
  "id": "",
  "username": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: the perma id of the review
  * username **required** `string`: the name of the reviewer.

#### Output
*Output schema unknown*

### getReviewItemsForReview
Returns a list of all the items in a review.


```js
crucible_local.getReviewItemsForReview({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: the id of the review (e.g. "CR-362").

#### Output
*Output schema unknown*

### addFisheyeReviewItem
Add the changes between two files in a fisheye repository to the review.


```js
crucible_local.addFisheyeReviewItem({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: the id of the review (e.g. "CR-362").

#### Output
*Output schema unknown*

### addReviewItem
Adds the given review item to the review. This will always create a new review item, even if there is an existing
 one with the same data in the review (in which case the existing item will be replaced).


```js
crucible_local.addReviewItem({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: the id of the review (e.g. "CR-362").

#### Output
*Output schema unknown*

### addReviewItems
Adds a review item for each of the supplied crucibleRevisionData elements.


```js
crucible_local.addReviewItems({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: the id of the review (e.g. "CR-362").

#### Output
*Output schema unknown*

### removeReviewItem
Removes an item from a review.


```js
crucible_local.removeReviewItem({
  "riId": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * riId **required** `string`: review item id (e.g. "CFR-6312").
  * id **required** `string`: review id (e.g. "CR-345").

#### Output
*Output schema unknown*

### getReviewItem
Returns detailed information for a specific review item.


```js
crucible_local.getReviewItem({
  "riId": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * riId **required** `string`: review item id (e.g. "CFR-6312").
  * id **required** `string`: review id (e.g. "CR-345").

#### Output
*Output schema unknown*

### getReviewItemsComments



```js
crucible_local.getReviewItemsComments({
  "riId": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * render `boolean`: indicate whether to render the wiki text in the returned comments. If set to "true", the comments will contain a
  * riId **required** `string`: the review item id.
  * id **required** `string`: the review perma id

#### Output
*Output schema unknown*

### addVersionedComment
This call includes the  repsonse header that contains the URL of the newly created entity.


```js
crucible_local.addVersionedComment({
  "riId": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * riId **required** `string`: the review item id.
  * id **required** `string`: the review perma id

#### Output
*Output schema unknown*

### setReviewItem
Sets the review item specified by itemId with the given reviewItem. The old review item is discarded. Can only
 perform this operation if the old review item specified by itemId can be deleted. The old review item's permId is
 not changed.


```js
crucible_local.setReviewItem({
  "riId": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * riId **required** `string`: a valid review item id (e.g. "CFR-5622").
  * id **required** `string`: a valid review id (e.g. "CR-345").

#### Output
*Output schema unknown*

### removeReviewItemRevisions
Removes the revisions given from the review item in the review specified by the id. If the review item has no
 more revisions left, it is automatically deleted.


```js
crucible_local.removeReviewItemRevisions({
  "riId": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * rev `string`: a list of revisions to add to the review item, merging if required. If a revision already exists
  * riId **required** `string`: the id of the review item (e.g. "CFR-5622").
  * id **required** `string`: the id of the review (e.g. "CR-345").

#### Output
*Output schema unknown*

### addReviewItemRevisions
Adds the given list of revisions to the supplied review item, merging if required. For example, if the review
 item for  contains revisions 3 to 6, and if:


```js
crucible_local.addReviewItemRevisions({
  "riId": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * rev `string`: a list of revisions to add to the review item, merging if required. If a revision already exists
  * riId **required** `string`: the id of the review item (e.g. "CFR-5622").
  * id **required** `string`: the id of the review (e.g. "CR-345").

#### Output
*Output schema unknown*

### changeState
Change the state of a review by performing an action on it.


```js
crucible_local.changeState({
  "id": ""
}, context)
```

#### Input
* input `object`
  * action `string`: the string representation of the action to perform. Valid actions are:
  * ignoreWarnings `boolean`: if  then condition failure warnings will be ignored
  * id **required** `string`: the review perma-id (e.g. "CR-45").

#### Output
*Output schema unknown*

### getAvailableTransitions
Get a list of the actions which the current user can perform on this
 review, given its current state and the user's permissions.


```js
crucible_local.getAvailableTransitions({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: the permId of the a review (e.g. "CR-45").

#### Output
*Output schema unknown*

### uncompleteReview
Uncompletes the review for the current user.


```js
crucible_local.uncompleteReview({
  "id": ""
}, context)
```

#### Input
* input `object`
  * ignoreWarnings `boolean`: if {@code ignoreWarnings==true} then condition failure warnings will be ignored
  * id **required** `string`: the review perma id

#### Output
*Output schema unknown*

### getReviewsForTerm
Search for reviews where the name, description, state or permaId contain the specified term.


```js
crucible_local.getReviewsForTerm({}, context)
```

#### Input
* input `object`
  * term `string`: a search term.
  * maxReturn `string`: the maximum number of reviews to return.

#### Output
*Output schema unknown*

### getReviewsForIssueKey
Get a list of all reviews that have been linked to the specified JIRA issue key.


```js
crucible_local.getReviewsForIssueKey({}, context)
```

#### Input
* input `object`
  * jiraKey `string`: a Jira issue key (e.g. "FOO-3453")
  * maxReturn `string`: the maximum number of reviews to return.

#### Output
*Output schema unknown*

### getUsers
Get a list of all the users. You can also ask for a set of users.


```js
crucible_local.getUsers({}, context)
```

#### Input
* input `object`
  * username `string`: a username (or a few) to limit the number of returned entries. It will return only existing users.

#### Output
*Output schema unknown*

### getMappedUser
Returns the user details of the user mapped to a committer in a repository.


```js
crucible_local.getMappedUser({
  "repository": "",
  "username": ""
}, context)
```

#### Input
* input `object`
  * repository **required** `string`: the key of the repository
  * username **required** `string`: the name of the committer

#### Output
*Output schema unknown*

### getUserProfile
Returns the user's profile details.


```js
crucible_local.getUserProfile({
  "username": ""
}, context)
```

#### Input
* input `object`
  * username **required** `string`: the username of the user

#### Output
*Output schema unknown*



## Definitions

*This integration has no definitions*
