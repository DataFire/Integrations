# @datafire/bigoven

Client library for BigOven

## Installation and Usage
```bash
npm install --save @datafire/bigoven
```
```js
let bigoven = require('@datafire/bigoven').create({
  api_key: "",
  username: "",
  password: ""
});

bigoven.Recipe_RecentViews({}).then(data => {
  console.log(data);
})
```

## Description

#Documentation

This is the documentation for the partner endpoint of the BigOven Recipe and Grocery List API.

The update brings with it Swagger-based documentation. [Swagger](http://swagger.io) is an emerging standard for describing REST-based APIs, and with this Swagger-compliant endpoint (above), you can make ready-to-go interface libraries for your code via [swagger-codegen](https://github.com/swagger-api/swagger-codegen). For instance, it's easy to generate libraries for Node.js, Java, Ruby, ASP.NET MVC, jQuery, php and more!

You can also try out the endpoint calls with your own api_key right here on this page. Be sure to enter your api_key above to use the "Try it out!" buttons on this page.

##Start Here

Developers new to the BigOven API should start with this version, not with the legacy API. We'll be making improvements to this API over time, and doing only bug fixes on the v1 API.



To pretend you're a BigOven user (for instance, to get your recently viewed recipes or your grocery list), you need to pass in Basic Authentication information in the header, just as with the v1 API. We do now require that you make all calls via https. You need to pass your api_key in with every call, though this can now be done on the header (send a request header "X-BigOven-API-Key" set to your api_key value, e.g., Request["X-BigOven-API-Key"]="your-key-here".)

##Migration Notes

For existing partners, we encourage you to [migrate](http://api2.bigoven.com), and while at this writing we have no hard-and-fast termination date for the v1 API, we strongly prefer that you migrate by January 1, 2017. While the changes aren't overly complex, there are several breaking changes, including refactoring of recipe search and results and removal of support for XML. This is not a simply plug-and-play replacement to the v1 API. With respect to an exclusive focus on JSON, the world has spoken, and it prefers JSON for REST-based API's. We've taken numerous steps to refactor the API to make it more REST-compliant. Note that this v2 API will be the preferred API from this point onward, so we encourage developers to migrate to this new format. We have put together some [migration notes](/web/documentation/migration-to-v2) that we encourage you to read carefully.

##Photos

See our [photos documentation](http://api2.bigoven.com/web/documentation/recipe-images). 

For more information on usage of this API, including features, pricing, rate limits, terms and conditions, please visit the [BigOven API website](http://api2.bigoven.com).

## Actions

### Collection_GetCollection
Gets a recipe collection. A recipe collection is a curated set of recipes.


```js
bigoven.Collection_GetCollection({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: the collection identifier
  * rpp `integer`: results per page
  * pg `integer`: page number (starting with 1)
  * test `boolean`
  * sessionForLogging `string`

#### Output
* output [BigOven.Model.API2.RecipeSearchResult](#bigoven.model.api2.recipesearchresult)

### Collection_GetCollectionMeta
Gets a recipe collection metadata. A recipe collection is a curated set of recipes.


```js
bigoven.Collection_GetCollectionMeta({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: the collection identifier

#### Output
* output [BigOven.Model.API2.CollectionInfo](#bigoven.model.api2.collectioninfo)

### Collection_Collections
Get the list of current, seasonal recipe collections. From here, you can use the /collection/{id} endpoint to retrieve the recipes in those collections.


```js
bigoven.Collection_Collections({}, context)
```

#### Input
* input `object`
  * test `string`

#### Output
* output `array`
  * items [BigOven.Model.API2.CollectionInfo](#bigoven.model.api2.collectioninfo)

### Glossary_ByTerm
Get food glossary article by term (e.g., asparagus). This editorial is (c) BigOven and MUST carry attribution and a link back to the glossary entry on BigOven.com.


```js
bigoven.Glossary_ByTerm({
  "term": ""
}, context)
```

#### Input
* input `object`
  * term **required** `string`: Keyword used to look up article, e.g., asparagus

#### Output
* output [BigOven.Model.API.GlossaryEntry](#bigoven.model.api.glossaryentry)

### Glossary_Get
Get food glossary article


```js
bigoven.Glossary_Get({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: identifier of article to retrieve

#### Output
*Output schema unknown*

### GroceryList_Delete
Delete all the items on a grocery list; faster operation than a sync with deleted items.


```js
bigoven.GroceryList_Delete(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [System.Object](#system.object)

### GroceryList_Get
Get the user's grocery list.  User is determined by Basic Authentication.


```js
bigoven.GroceryList_Get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [BigOven.Model.API2.GroceryList](#bigoven.model.api2.grocerylist)

### GroceryList_GroceryListRemoveMarkedItems



```js
bigoven.GroceryList_GroceryListRemoveMarkedItems(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [BigOven.Model.API2.GroceryList](#bigoven.model.api2.grocerylist)

### GroceryList_Department
Departmentalize a list of strings -- used for ad-hoc grocery list item addition


```js
bigoven.GroceryList_Department({
  "model": {}
}, context)
```

#### Input
* input `object`
  * model **required** [API2.Controllers.GroceryListController.DepartmentModel](#api2.controllers.grocerylistcontroller.departmentmodel)

#### Output
* output `array`
  * items [API2.GroceryListDepartmentResult](#api2.grocerylistdepartmentresult)

### grocerylist.item.post
Add a single line item to the grocery list


```js
bigoven.grocerylist.item.post({
  "newItem": {}
}, context)
```

#### Input
* input `object`
  * newItem **required** [API2.Controllers.GroceryListController.PostToGroceryListRecipeRequest](#api2.controllers.grocerylistcontroller.posttogrocerylistreciperequest)

#### Output
* output [BigOven.Model.ShoppingListLine](#bigoven.model.shoppinglistline)

### GroceryList_DeleteItemByGuid
/grocerylist/item/{guid}  DELETE will delete this item assuming you own it.


```js
bigoven.GroceryList_DeleteItemByGuid({
  "guid": ""
}, context)
```

#### Input
* input `object`
  * guid **required** `string`

#### Output
* output [System.Object](#system.object)

### GroceryList_GroceryListItemGuid
Update a grocery item by GUID


```js
bigoven.GroceryList_GroceryListItemGuid({
  "req": {},
  "guid": ""
}, context)
```

#### Input
* input `object`
  * req **required** [API2.Controllers.GroceryListController.UpdateItemByGuidRequest](#api2.controllers.grocerylistcontroller.updateitembyguidrequest)
  * guid **required** `string`

#### Output
* output [System.Object](#system.object)

### grocerylist.line.post
Add a single line item to the grocery list


```js
bigoven.grocerylist.line.post({
  "newItem": {}
}, context)
```

#### Input
* input `object`
  * newItem **required** [API2.Controllers.GroceryListController.PostGroceryListAddLineRequest](#api2.controllers.grocerylistcontroller.postgrocerylistaddlinerequest)

#### Output
* output [BigOven.Model.ShoppingListLine](#bigoven.model.shoppinglistline)

### GroceryList_AddRecipe
Add a Recipe to the grocery list.  In the request data, pass in recipeId, scale (scale=1.0 says to keep the recipe the same size as originally posted), markAsPending (true/false) to indicate that
            the lines in the recipe should be marked in a "pending" (unconfirmed by user) state.


```js
bigoven.GroceryList_AddRecipe({
  "data": {}
}, context)
```

#### Input
* input `object`
  * data **required** [API2.Controllers.GroceryListController.PostGroceryListRecipeRequest](#api2.controllers.grocerylistcontroller.postgrocerylistreciperequest)

#### Output
* output [System.Object](#system.object)

### GroceryList_PostGroceryListSync
Synchronize the grocery list.  Call this with a POST to /grocerylist/sync


```js
bigoven.GroceryList_PostGroceryListSync({
  "req": {}
}, context)
```

#### Input
* input `object`
  * req **required** [API2.Controllers.GroceryListController.PostGroceryListSyncRequest](#api2.controllers.grocerylistcontroller.postgrocerylistsyncrequest)

#### Output
* output [System.Object](#system.object)

### Images_UploadUserAvatar
POST: /image/avatar
             
            Testing with Postman (validated 11/20/2015):
            1) Remove the Content-Type header; add authentication information
            2) On the request, click Body and choose "form-data", then add a line item with "key" column set to "file" and on the right,
            change the type of the input from Text to File.  Browse and choose a JPG.


```js
bigoven.Images_UploadUserAvatar(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [System.Object](#system.object)

### Me_Index



```js
bigoven.Me_Index(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [API2.Models.BigOvenUser](#api2.models.bigovenuser)

### me.put



```js
bigoven.me.put({
  "req": {}
}, context)
```

#### Input
* input `object`
  * req **required** [API2.Models.BigOvenUser](#api2.models.bigovenuser)

#### Output
* output [API2.Models.BigOvenUser](#api2.models.bigovenuser)

### Me_PutMePersonal



```js
bigoven.Me_PutMePersonal({
  "req": {}
}, context)
```

#### Input
* input `object`
  * req **required** [API2.Models.Personal](#api2.models.personal)

#### Output
* output [API2.Models.BigOvenUser](#api2.models.bigovenuser)

### Me_PutMePreferences



```js
bigoven.Me_PutMePreferences({
  "req": {}
}, context)
```

#### Input
* input `object`
  * req **required** [API2.Models.Preference](#api2.models.preference)

#### Output
* output [API2.Models.BigOvenUser](#api2.models.bigovenuser)

### Me_GetOptions



```js
bigoven.Me_GetOptions(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [API2.Controllers.MeController.PreferenceOptions](#api2.controllers.mecontroller.preferenceoptions)

### me.profile.put



```js
bigoven.me.profile.put({
  "req": {}
}, context)
```

#### Input
* input `object`
  * req **required** [API2.Models.Profile](#api2.models.profile)

#### Output
* output [API2.Models.BigOvenUser](#api2.models.bigovenuser)

### Me_Skinny



```js
bigoven.Me_Skinny(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [API2.Models.BigOvenUser](#api2.models.bigovenuser)

### Recipe_Post
Add a new recipe


```js
bigoven.Recipe_Post({
  "recipe": {}
}, context)
```

#### Input
* input `object`
  * recipe **required** [BigOven.Model.API.Recipe](#bigoven.model.api.recipe)

#### Output
* output [BigOven.Model.API.Recipe](#bigoven.model.api.recipe)

### Recipe_Put
Update a recipe


```js
bigoven.Recipe_Put({
  "recipe": {}
}, context)
```

#### Input
* input `object`
  * recipe **required** [BigOven.Model.API.Recipe](#bigoven.model.api.recipe)

#### Output
* output [BigOven.Model.API.Recipe](#bigoven.model.api.recipe)

### Recipe_AutoComplete
Given a query, return recipe titles starting with query. Query must be at least 3 chars in length.


```js
bigoven.Recipe_AutoComplete({
  "query": ""
}, context)
```

#### Input
* input `object`
  * query **required** `string`
  * limit `integer`

#### Output
* output `array`
  * items `string`

### Recipe_Categories
Get a list of recipe categories (the ID field can be used for include_cat in search parameters)


```js
bigoven.Recipe_Categories(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [BigOven.Model.RecipeCategory](#bigoven.model.recipecategory)

### Review_DeleteReply
DELETE a reply to a given review. Authenticated user must be the one who originally posted the reply.


```js
bigoven.Review_DeleteReply({
  "replyId": ""
}, context)
```

#### Input
* input `object`
  * replyId **required** `string`

#### Output
* output [System.Object](#system.object)

### Review_PutReply
Update (PUT) a reply to a given review. Authenticated user must be the original one that posted the reply.


```js
bigoven.Review_PutReply({
  "replyId": "",
  "data": {}
}, context)
```

#### Input
* input `object`
  * replyId **required** `string`
  * data **required** [API2.Controllers.ReviewController.PostReplyReq](#api2.controllers.reviewcontroller.postreplyreq)

#### Output
* output [BigOven.Model.API.Reply](#bigoven.model.api.reply)

### recipe.review.reviewId.get
Get a given review by string-style ID. This will return a payload with FeaturedReply, ReplyCount.
            Recommended display is to list top-level reviews with one featured reply underneath. 
            Currently, the FeaturedReply is the most recent one for that rating.


```js
bigoven.recipe.review.reviewId.get({
  "reviewId": ""
}, context)
```

#### Input
* input `object`
  * reviewId **required** `string`

#### Output
* output [BigOven.Model.API.Review](#bigoven.model.api.review)

### Review_Put
Update a given top-level review.


```js
bigoven.Review_Put({
  "reviewId": "",
  "review": {}
}, context)
```

#### Input
* input `object`
  * reviewId **required** `string`
  * review **required** [API2.Controllers.ReviewController.ReviewRequest](#api2.controllers.reviewcontroller.reviewrequest)

#### Output
* output [BigOven.Model.API.Review](#bigoven.model.api.review)

### Review_GetReplies
Get a paged list of replies for a given review.


```js
bigoven.Review_GetReplies({
  "reviewId": ""
}, context)
```

#### Input
* input `object`
  * reviewId **required** `string`
  * pg `integer`: the page (int), starting with 1
  * rpp `integer`: results per page (int)

#### Output
* output `array`
  * items [BigOven.Model.API.Reply](#bigoven.model.api.reply)

### Review_PostReply
POST a reply to a given review. The date will be set by server. Note that replies no longer have star ratings, only top-level reviews do.


```js
bigoven.Review_PostReply({
  "reviewId": "",
  "data": {}
}, context)
```

#### Input
* input `object`
  * reviewId **required** `string`
  * data **required** [API2.Controllers.ReviewController.PostReplyReq](#api2.controllers.reviewcontroller.postreplyreq)

#### Output
* output [BigOven.Model.API.Reply](#bigoven.model.api.reply)

### Recipe_Scan
POST an image as a new RecipeScan request
                1)  Fetch the filename -- DONE
                2)  Copy it to the pics/scan folder - ENSURE NO NAMING COLLISIONS -- DONE
                3)  Create 120 thumbnail size  in pics/scan/120 -- DONE
                4)  Insert the CloudTasks record
                5)  Create the HIT
                6)  Update the CloudTasks record with the HIT ID
                7)  Email the requesing user
                8)  Call out to www.bigoven.com to fetch the image and re-create the thumbnail


```js
bigoven.Recipe_Scan({}, context)
```

#### Input
* input `object`
  * test `boolean`
  * devicetype `string`
  * lat `number`
  * lng `number`

#### Output
*Output schema unknown*

### Recipe_Delete
Delete a Recipe (you must be authenticated as an owner of the recipe)


```js
bigoven.Recipe_Delete({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`

#### Output
* output [System.Object](#system.object)

### Recipe_Get
Return full Recipe detail. Returns 403 if the recipe is owned by someone else.


```js
bigoven.Recipe_Get({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: the Recipe ID to retrieve
  * prefetch `boolean`

#### Output
* output [BigOven.Model.API2.Recipe](#bigoven.model.api2.recipe)

### Recipe_ZapRecipe



```js
bigoven.Recipe_ZapRecipe({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`

#### Output
* output [System.Object](#system.object)

### Recipe_Feedback
Feedback on a Recipe -- for internal BigOven editors


```js
bigoven.Recipe_Feedback({
  "recipeId": 0,
  "data": {}
}, context)
```

#### Input
* input `object`
  * recipeId **required** `integer`
  * data **required** [API2.Controllers.RecipeController.FeedbackDTO](#api2.controllers.recipecontroller.feedbackdto)

#### Output
* output [System.Object](#system.object)

### Images_UploadRecipeImage
POST: /recipe/{recipeId}/image?lat=42&amp;lng=21&amp;caption=this%20is%20my%20caption
             
             Note that caption, lng and lat are all optional, but must go on the request URI as params because this endpoint
             needs a multipart/mime content header and will not parse JSON in the body along with it.
            
             Testing with Postman (validated 11/20/2015):
             1) Remove the Content-Type header; add authentication information
             2) On the request, click Body and choose "form-data", then add a line item with "key" column set to "file" and on the right,
             change the type of the input from Text to File.  Browse and choose a JPG.


```js
bigoven.Images_UploadRecipeImage({
  "recipeId": ""
}, context)
```

#### Input
* input `object`
  * recipeId **required** `string`
  * caption `string`
  * lat `number`
  * lng `number`

#### Output
* output [System.Object](#system.object)

### Images_Get
Get all the images for a recipe. DEPRECATED. Please use /recipe/{recipeId}/photos.


```js
bigoven.Images_Get({
  "recipeId": 0
}, context)
```

#### Input
* input `object`
  * recipeId **required** `integer`: Recipe ID (required)

#### Output
* output `array`
  * items [BigOven.Model.API.Image](#bigoven.model.api.image)

### Note_Post
HTTP POST a new note into the system.


```js
bigoven.Note_Post({
  "recipeId": 0,
  "note": {}
}, context)
```

#### Input
* input `object`
  * recipeId **required** `integer`: recipeId (int)
  * note **required** [API2.Controllers.NoteController.NoteRequest](#api2.controllers.notecontroller.noterequest)

#### Output
* output [BigOven.Model.API2.RecipeNote](#bigoven.model.api2.recipenote)

### Note_Delete
Delete a review
                do a DELETE Http request of /note/{ID}


```js
bigoven.Note_Delete({
  "recipeId": 0,
  "noteId": 0
}, context)
```

#### Input
* input `object`
  * recipeId **required** `integer`: recipeId (int)
  * noteId **required** `integer`: noteId (int)

#### Output
* output [System.Object](#system.object)

### Note_Get
Get a given note. Make sure you're passing authentication information in the header for the user who owns the note.


```js
bigoven.Note_Get({
  "recipeId": 0,
  "noteId": 0
}, context)
```

#### Input
* input `object`
  * recipeId **required** `integer`: recipe identifier (integer)
  * noteId **required** `integer`: The note ID (note -- it's not the RecipeID)

#### Output
* output [BigOven.Model.API.RecipeNote](#bigoven.model.api.recipenote)

### Note_Put
HTTP PUT (update) a Recipe note (RecipeNote).


```js
bigoven.Note_Put({
  "recipeId": 0,
  "noteId": 0,
  "recipeNote": {}
}, context)
```

#### Input
* input `object`
  * recipeId **required** `integer`
  * noteId **required** `integer`
  * recipeNote **required** [API2.Controllers.NoteController.NoteRequest](#api2.controllers.notecontroller.noterequest)

#### Output
* output [BigOven.Model.API.RecipeNote](#bigoven.model.api.recipenote)

### Note_GetNotes
recipe/100/notes


```js
bigoven.Note_GetNotes({
  "recipeId": 0
}, context)
```

#### Input
* input `object`
  * recipeId **required** `integer`: recipeId (int)
  * pg `integer`: page (int, starting from 1)
  * rpp `integer`: recipeId

#### Output
* output [BigOven.Model.API.RecipeNoteList](#bigoven.model.api.recipenotelist)

### Images_GetRecipePhotos
Get all the photos for a recipe


```js
bigoven.Images_GetRecipePhotos({
  "recipeId": 0
}, context)
```

#### Input
* input `object`
  * recipeId **required** `integer`: Recipe ID (required)
  * pg `integer`
  * rpp `integer`

#### Output
* output [API2.Controllers.ImagesController.RecipePhotosResponse](#api2.controllers.imagescontroller.recipephotosresponse)

### Recipe_Related
Get recipes related to the given recipeId


```js
bigoven.Recipe_Related({
  "recipeId": 0,
  "pg": 0,
  "rpp": 0
}, context)
```

#### Input
* input `object`
  * recipeId **required** `integer`
  * pg **required** `integer`
  * rpp **required** `integer`

#### Output
* output [BigOven.Model.API2.RecipeSearchResult](#bigoven.model.api2.recipesearchresult)

### recipe.recipeId.review.get
Get *my* review for the recipe {recipeId}, where "me" is determined by standard authentication headers


```js
bigoven.recipe.recipeId.review.get({
  "recipeId": 0
}, context)
```

#### Input
* input `object`
  * recipeId **required** `integer`

#### Output
* output [BigOven.Model.API.Review](#bigoven.model.api.review)

### Review_Post
Add a new review. Only one review can be provided per {userId, recipeId} pair. Otherwise your review will be updated.


```js
bigoven.Review_Post({
  "recipeId": 0,
  "data": {}
}, context)
```

#### Input
* input `object`
  * recipeId **required** `integer`
  * data **required** [API2.Controllers.ReviewController.ReviewRequest](#api2.controllers.reviewcontroller.reviewrequest)

#### Output
* output [System.Object](#system.object)

### Review_Delete
Delete a review by recipeId and reviewId. DEPRECATED. Please see recipe/review/{reviewId} for the preferred method.
            (We are moving from an integer-based ID system to a GUID-style string-based ID system for reviews and replies.)


```js
bigoven.Review_Delete({
  "reviewId": "",
  "recipeId": ""
}, context)
```

#### Input
* input `object`
  * reviewId **required** `string`
  * recipeId **required** `string`

#### Output
* output [System.Object](#system.object)

### recipe.recipeId.review.reviewId.get
Get a given review - DEPRECATED. See recipe/review/{reviewId} for the current usage.
            Beginning in January 2017, BigOven moded from an integer-based ID system to a GUID-style string-based ID system for reviews and replies.
            We are also supporting more of a "Google Play" style model for Reviews and Replies. That is, there are top-level Reviews and then
            an unlimited list of replies (which do not carry star ratings) underneath existing reviews. Also, a given user can only have one review 
            per recipe. Existing legacy endpoints will continue to work, but we strongly recommend you migrate to using the newer endpoints listed
            which do NOT carry the "DEPRECATED" flag.


```js
bigoven.recipe.recipeId.review.reviewId.get({
  "reviewId": 0,
  "recipeId": 0
}, context)
```

#### Input
* input `object`
  * reviewId **required** `integer`: int
  * recipeId **required** `integer`: int

#### Output
* output [BigOven.Model.API.Review](#bigoven.model.api.review)

### Review_PutLegacy
HTTP PUT (update) a recipe review. DEPRECATED. Please see recipe/review/{reviewId} PUT for the new endpoint.
            We are moving to a string-based primary key system, no longer integers, for reviews and replies.


```js
bigoven.Review_PutLegacy({
  "reviewId": 0,
  "review": {},
  "recipeId": 0
}, context)
```

#### Input
* input `object`
  * reviewId **required** `integer`: reviewId (int)
  * review **required** [API2.Controllers.ReviewController.ReviewRequestLegacy](#api2.controllers.reviewcontroller.reviewrequestlegacy)
  * recipeId **required** `integer`: recipeId (int)

#### Output
* output [BigOven.Model.API.Review](#bigoven.model.api.review)

### Review_GetReviews
Get paged list of reviews for a recipe. Each review will have at most one FeaturedReply, as well as a ReplyCount.


```js
bigoven.Review_GetReviews({
  "recipeId": 0
}, context)
```

#### Input
* input `object`
  * recipeId **required** `integer`: recipe id (int)
  * pg `integer`: the page (int), starting with 1
  * rpp `integer`: results per page (int)

#### Output
* output `array`
  * items [BigOven.Model.API.Review](#bigoven.model.api.review)

### Images_GetScanImages
Gets a list of RecipeScan images for the recipe. There will be at most 3 per recipe.


```js
bigoven.Images_GetScanImages({
  "recipeId": 0
}, context)
```

#### Input
* input `object`
  * recipeId **required** `integer`: the recipe identifier (int)

#### Output
* output `array`
  * items [BigOven.Model.API.Image](#bigoven.model.api.image)

### Recipe_RecipeSearch
Search for recipes. There are many parameters that you can apply. Starting with the most common, use title_kw to search within a title.
            Use any_kw to search across the entire recipe.
            If you'd like to limit by course, set the parameter "include_primarycat" to one of (appetizers,bread,breakfast,dessert,drinks,maindish,salad,sidedish,soup,marinades,other).
            If you'd like to exclude a category, set exclude_cat to one or more (comma-separated) list of those categories to exclude.
            If you'd like to include a category, set include_cat to one or more (comma-separated) of those categories to include.
            To explicitly include an ingredient in your search, set the parameter "include_ing" to a CSV of up to three ingredients, e.g.:include_ing=mustard,chicken,beef%20tips
            To explicitly exclude an ingredient in your search, set the parameter "exclude_ing" to a CSV of up to three ingredients.
            All searches must contain the paging parameters pg and rpp, which are integers, and represent the page number (1-based) and results per page (rpp).
            So, to get the third page of a result set paged with 25 recipes per page, you'd pass pg=3&amp;rpp=25
            If you'd like to target searches to just a single target user's recipes, set userId=the target userId (number).
            Or, you can set username=theirusername
            vtn;vgn;chs;glf;ntf;dyf;sff;slf;tnf;wmf;rmf;cps
            cuisine
            photos
            filter=added,try,favorites,myrecipes\r\n\r\n
            folder=FolderNameCaseSensitive
            coll=ID of Collection


```js
bigoven.Recipe_RecipeSearch({}, context)
```

#### Input
* input `object`
  * any_kw `string`: Search anywhere in the recipe for the keyword
  * folder `string`: Search in a specific folder name for the authenticated user
  * coll `integer`: Limit to a collection ID number
  * filter `string`: optionally set to either "myrecipes", "try", "favorites","added" to filter to just the authenticated user's recipe set
  * title_kw `string`: Search just in the recipe title for the keyword
  * userId `integer`: Set the target userid to search their public recipes
  * username `string`: Set the target username to search their public recipes
  * token `string`
  * photos `boolean`: if set to true, limit search results to photos only
  * boostmine `boolean`: if set to true, boost my own recipes in my folders so they show up high in the list (at the expense of other sort orders)
  * include_cat `string`: integer of the subcategory you'd like to limit searches to (see the /recipe/categories endpoint for available id numbers). For instance, 58 is "Main Dish &gt; Casseroles".
  * exclude_cat `string`: like include_cat, set this to an integer to exclude a specific category
  * include_primarycat `string`: csv indicating up to three top-level categories -- valid values are [appetizers,bread,breakfast,desserts,drinks,maindish,salads,sidedish,soups,marinades,other]
  * exclude_primarycat `string`: csv indicating integer values for up to 3 top-level categories -- valid values are 1...11 [appetizers,bread,breakfast,desserts,drinks,maindish,salads,sidedish,soups,marinades,other]
  * include_ing `string`: A CSV representing up to 3 ingredients to include, e.g., tomatoes,corn%20%starch,chicken
  * exclude_ing `string`: A CSV representing up to 3 ingredients to exclude  (Powersearch-capable plan required)
  * cuisine `string`: Limit to a specific cuisine. Cooks can enter anything free-form, but the few dozen preconfigured values are Afghan,African,American,American-South,Asian,Australian,Brazilian,Cajun,Canadian,Caribbean,Chinese,Croatian,Cuban,Dessert,Eastern European,English,French,German,Greek,Hawaiian,Hungarian,India,Indian,Irish,Italian,Japanese,Jewish,Korean,Latin,Mediterranean,Mexican,Middle Eastern,Moroccan,Polish,Russian,Scandanavian,Seafood,Southern,Southwestern,Spanish,Tex-Mex,Thai,Vegan,Vegetarian,Vietnamese
  * db `string`
  * userset `string`: If set to a given username, it'll force the search to filter to just that username
  * servingsMin `number`: Limit to yield of a given number size or greater. Note that cooks usually enter recipes by Servings, but sometimes they are posted by "dozen", etc. This parameter simply specifies the minimum number for that value entered in "yield."
  * totalMins `integer`: Optional. If supplied, will restrict results to recipes that can be made in {totalMins} or less. (Convert "1 hour, 15 minutes" to 75 before passing in.)
  * maxIngredients `integer`: Optional. If supplied, will restrict results to recipes that can be made with {maxIngredients} ingredients or less
  * minIngredients `integer`: Optional. If supplied, will restrict results to recipes that have at least {minIngredients}
  * rpp `integer`: integer; results per page
  * pg `integer`: integer: the page number
  * vtn `integer`: when set to 1, limit to vegetarian (Powersearch-capable plan required)
  * vgn `integer`: when set to 1, limit to vegan (Powersearch-capable plan required)
  * chs `integer`: when set to 1, limit to contains-cheese (Powersearch-capable plan required)
  * glf `integer`: when set to 1, limit to gluten-free (Powersearch-capable plan required)
  * ntf `integer`: when set to 1, limit to nut-free (Powersearch-capable plan required)
  * dyf `integer`: when set to 1, limit to dairy-free (Powersearch-capable plan required)
  * sff `integer`: when set to 1, limit to seafood-free (Powersearch-capable plan required)
  * slf `integer`: when set to 1, limit to shellfish-free (Powersearch-capable plan required)
  * tnf `integer`: when set to 1, limit to tree-nut free (Powersearch-capable plan required)
  * wmf `integer`: when set to 1, limit to white-meat free (Powersearch-capable plan required)
  * rmf `integer`: when set to 1, limit to red-meat free (Powersearch-capable plan required)
  * cps `integer`: when set to 1, recipe contains pasta, set to 0 means contains no pasta (Powersearch-capable plan required)
  * champion `integer`: optional. When set to 1, this will limit search results to "best of" recipes as determined by various internal editorial and programmatic algorithms. For the most comprehensive results, don't include this parameter.
  * synonyms `boolean`: optional, default is false. When set to true, BigOven will attempt to apply synonyms in search (e.g., excluding pork will also exclude bacon)

#### Output
* output [BigOven.Model.API2.RecipeSearchResult](#bigoven.model.api2.recipesearchresult)

### Recipe_GetRandomRecipe
Get a random, home-page-quality Recipe.


```js
bigoven.Recipe_GetRandomRecipe(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [BigOven.Model.API.Recipe](#bigoven.model.api.recipe)

### Recipe_Raves
Get the recipe/comment tuples for those recipes with 4 or 5 star ratings


```js
bigoven.Recipe_Raves({}, context)
```

#### Input
* input `object`
  * pg `integer`: page, starting with 1
  * rpp `integer`: results per page

#### Output
* output `array`
  * items [BigOven.Model.RecipeInfoReviewTuple2](#bigoven.model.recipeinforeviewtuple2)

### Recipe_RecentViews
Get a list of recipes that the authenticated user has most recently viewed


```js
bigoven.Recipe_RecentViews({}, context)
```

#### Input
* input `object`
  * pg `integer`: Page number starting with 1
  * rpp `integer`: results per page

#### Output
* output `array`
  * items [BigOven.Model.RecipeInfoDateTuple2](#bigoven.model.recipeinfodatetuple2)



## Definitions

### API2.Controllers.GroceryListController.DepartmentModel
* API2.Controllers.GroceryListController.DepartmentModel `object`
  * items `string`

### API2.Controllers.GroceryListController.PostGroceryListAddLineRequest
* API2.Controllers.GroceryListController.PostGroceryListAddLineRequest `object`
  * text `string`

### API2.Controllers.GroceryListController.PostGroceryListRecipeRequest
* API2.Controllers.GroceryListController.PostGroceryListRecipeRequest `object`
  * markAsPending `boolean`
  * recipeId `integer`
  * scale `number`

### API2.Controllers.GroceryListController.PostGroceryListSyncRequest
* API2.Controllers.GroceryListController.PostGroceryListSyncRequest `object`
  * list [BigOven.Model.API.Grocery.GroceryList](#bigoven.model.api.grocery.grocerylist)
  * since `string`

### API2.Controllers.GroceryListController.PostToGroceryListRecipeRequest
* API2.Controllers.GroceryListController.PostToGroceryListRecipeRequest `object`
  * department `string`
  * name `string`
  * notes `string`
  * quantity `string`
  * unit `string`

### API2.Controllers.GroceryListController.UpdateItemByGuidRequest
* API2.Controllers.GroceryListController.UpdateItemByGuidRequest `object`
  * department `string`
  * guid `string`
  * ischecked `boolean`
  * name `string`
  * notes `string`
  * quantity `string`
  * unit `string`

### API2.Controllers.ImagesController.RecipePhotosResponse
* API2.Controllers.ImagesController.RecipePhotosResponse `object`
  * ResultCount `integer`
  * Results `array`
    * items [BigOven.Model.API2.Photo](#bigoven.model.api2.photo)

### API2.Controllers.MeController.EatingStyle
* API2.Controllers.MeController.EatingStyle `object`
  * Options `array`
    * items [API2.Controllers.MeController.Option](#api2.controllers.mecontroller.option)

### API2.Controllers.MeController.Option
* API2.Controllers.MeController.Option `object`
  * Description `string`
  * Key `string`

### API2.Controllers.MeController.PreferenceOptions
* API2.Controllers.MeController.PreferenceOptions `object`
  * EatingStyle [API2.Controllers.MeController.EatingStyle](#api2.controllers.mecontroller.eatingstyle)

### API2.Controllers.NoteController.NoteRequest
* API2.Controllers.NoteController.NoteRequest `object`
  * CreationDate `string`
  * Date `string`
  * DateDT `string`
  * GUID `string`
  * ID `integer`
  * Notes `string`
  * People `string`
  * RecipeID `integer`
  * UserID `integer`
  * Variations `string`

### API2.Controllers.RecipeController.FeedbackDTO
* API2.Controllers.RecipeController.FeedbackDTO `object`
  * feedback `string`

### API2.Controllers.ReviewController.PostReplyReq
* API2.Controllers.ReviewController.PostReplyReq `object`: Reply request parameters
  * Comment `string`: The comment. If mentioning any user(s) (optional), include them as @username in the text body. Do not use @ symbol for anything but mentioning @usernames.

### API2.Controllers.ReviewController.ReviewRequest
* API2.Controllers.ReviewController.ReviewRequest `object`: Payload for reviews
  * ActiveMinutes `integer`: How many minutes of ACTIVE time (i.e., actively working on the recipe, not waiting for rising, baking, etc.) did it 
  * Comment `string`: The notes
  * MakeAgain `string`: "yes" or "no"
  * StarRating `integer`: 1, 2, 3, 4, or 5
  * TotalMinutes `integer`: How long, start to finish, in minutes (integer) did it take? Optional.

### API2.Controllers.ReviewController.ReviewRequestLegacy
* API2.Controllers.ReviewController.ReviewRequestLegacy `object`: Legacy -- This object here is deprecated. Please use the new "ReviewRequest" structure for all future development
  * ActiveMinutes `integer`
  * Comment `string`
  * GUID `string`
  * MakeAgain `string`
  * ParentID `integer`
  * StarRating `integer`
  * TotalMinutes `integer`

### API2.GroceryListDepartmentResult
* API2.GroceryListDepartmentResult `object`
  * dept `string`
  * item `string`

### API2.Models.Accounting
* API2.Models.Accounting `object`
  * CreditBalance `integer`
  * MemberSince `string`
  * PremiumExpiryDate `string`
  * UserLevel `string`

### API2.Models.BigOvenUser
* API2.Models.BigOvenUser `object`
  * Accounting [API2.Models.Accounting](#api2.models.accounting)
  * BOAuthToken `string`
  * LastChangeLogID `string`
  * Personal [API2.Models.Personal](#api2.models.personal)
  * Preferences [API2.Models.Preference](#api2.models.preference)
  * Profile [API2.Models.Profile](#api2.models.profile)

### API2.Models.Counts
* API2.Models.Counts `object`
  * AddedCount `integer`
  * FollowersCount `integer`
  * FollowingCount `integer`
  * PrivateRecipeCount `integer`
  * PublicRecipeCount `integer`
  * TotalRecipes `integer`

### API2.Models.Location
* API2.Models.Location `object`
  * City `string`
  * Country `string`
  * DMA `integer`

### API2.Models.Personal
* API2.Models.Personal `object`
  * Email `string`
  * Location [API2.Models.Location](#api2.models.location)

### API2.Models.Preference
* API2.Models.Preference `object`
  * EatingStyle `string`

### API2.Models.Profile
* API2.Models.Profile `object`
  * AboutMe `string`
  * Counts [API2.Models.Counts](#api2.models.counts)
  * FirstName `string`
  * FullName `string`
  * HomeUrl `string`
  * LastName `string`
  * PhotoUrl `string`
  * UserID `integer`
  * UserName `string`

### BigOven.Model.API.GlossaryEntry
* BigOven.Model.API.GlossaryEntry `object`
  * CreationDate `string`
  * Definition `string`
  * GlossaryEntryID `integer`
  * LastModified `string`
  * Term `string`

### BigOven.Model.API.Grocery.GroceryList
* BigOven.Model.API.Grocery.GroceryList `object`
  * Items `array`
    * items [BigOven.Model.API.Grocery.Item](#bigoven.model.api.grocery.item)
  * LastModified `string`
  * Recipes `array`
    * items [BigOven.Model.API.RecipeInfo](#bigoven.model.api.recipeinfo)
  * VersionGuid `string`

### BigOven.Model.API.Grocery.Item
* BigOven.Model.API.Grocery.Item `object`
  * BigOvenObject `string`
  * CreationDate `string`
  * Department `string`
  * DisplayQuantity `string`
  * GUID `string`
  * IsChecked `boolean`
  * ItemID `integer`
  * LastModified `string`
  * LocalStatus `string`
  * Name `string`
  * Notes `string`
  * RecipeID `integer`
  * ThirdPartyURL `string`

### BigOven.Model.API.Image
* BigOven.Model.API.Image `object`
  * Caption `string`
  * CreationDate `string`
  * ImageID `integer`
  * ImageSquares `array`
    * items `integer`
  * ImageURL `string`
  * ImageURL120 `string`
  * ImageURL128 `string`
  * ImageURL200 `string`
  * ImageURL256 `string`
  * ImageURL48 `string`
  * ImageURL64 `string`
  * IsPrimary `boolean`
  * MaxImageSquare `integer`
  * Poster [BigOven.Model.API.UserInfo](#bigoven.model.api.userinfo)

### BigOven.Model.API.Ingredient
* BigOven.Model.API.Ingredient `object`
  * DisplayIndex `integer`
  * DisplayQuantity `string`
  * HTMLName `string`
  * IngredientID `integer`
  * IngredientInfo [BigOven.Model.API.IngredientInfo](#bigoven.model.api.ingredientinfo)
  * IsHeading `boolean`
  * IsLinked `boolean`
  * MetricDisplayQuantity `string`
  * MetricQuantity `number`
  * MetricUnit `string`
  * Name `string`
  * PreparationNotes `string`
  * Quantity `number`
  * Unit `string`

### BigOven.Model.API.IngredientInfo
* BigOven.Model.API.IngredientInfo `object`
  * Department `string`
  * MasterIngredientID `integer`
  * Name `string`
  * UsuallyOnHand `boolean`

### BigOven.Model.API.NutritionInfo
* BigOven.Model.API.NutritionInfo `object`
  * CaloriesFromFat `number`
  * Cholesterol `number`
  * CholesterolPct `number`
  * DietaryFiber `number`
  * DietaryFiberPct `number`
  * MonoFat `number`
  * PolyFat `number`
  * Potassium `number`
  * PotassiumPct `number`
  * Protein `number`
  * ProteinPct `number`
  * SatFat `number`
  * SatFatPct `number`
  * SingularYieldUnit `string`
  * Sodium `number`
  * SodiumPct `number`
  * Sugar `number`
  * TotalCalories `number`
  * TotalCarbs `number`
  * TotalCarbsPct `number`
  * TotalFat `number`
  * TotalFatPct `number`
  * TransFat `number`

### BigOven.Model.API.Recipe
* BigOven.Model.API.Recipe `object`
  * ActiveMinutes `integer`
  * AdTags `string`
  * AdminBoost `integer`
  * AllCategoriesText `string`
  * BookmarkImageURL `string`
  * BookmarkSiteLogo `string`
  * BookmarkURL `string`
  * Category `string`
  * Collection `string`
  * CollectionID `integer`
  * CreationDate `string`
  * Cuisine `string`
  * Description `string`
  * FavoriteCount `integer`
  * HeroPhotoUrl `string`
  * ImageSquares `array`
    * items `integer`
  * ImageURL `string`
  * Ingredients `array`
    * items [BigOven.Model.API.Ingredient](#bigoven.model.api.ingredient)
  * IngredientsTextBlock `string`
  * Instructions `string`
  * IsBookmark `boolean`
  * IsPrivate `boolean`
  * IsRecipeScan `boolean`
  * IsSponsored `boolean`
  * LastModified `string`
  * MaxImageSquare `integer`
  * MedalCount `integer`
  * MenuCount `integer`
  * Microcategory `string`
  * NotesCount `integer`
  * NutritionInfo [BigOven.Model.API.NutritionInfo](#bigoven.model.api.nutritioninfo)
  * Poster [BigOven.Model.API.UserInfo](#bigoven.model.api.userinfo)
  * PrimaryIngredient `string`
  * RecipeID `integer`
  * ReviewCount `integer`
  * StarRating `number`
  * Subcategory `string`
  * Title `string`
  * TotalMinutes `integer`
  * VariantOfRecipeID `integer`
  * VerifiedByClass `string`
  * VerifiedDateTime `string`
  * WebURL `string`
  * YieldNumber `number`
  * YieldUnit `string`

### BigOven.Model.API.RecipeInfo
* BigOven.Model.API.RecipeInfo `object`
  * BookmarkURL `string`
  * Category `string`
  * CreationDate `string`
  * Cuisine `string`
  * HeroPhotoUrl `string`
  * HideFromPublicSearch `boolean`
  * ImageURL `string`
  * ImageURL120 `string`
  * IsBookmark `boolean`
  * IsPrivate `boolean`
  * MaxImageSquare `integer`
  * Microcategory `string`
  * Poster [BigOven.Model.API.UserInfo](#bigoven.model.api.userinfo)
  * QualityScore `number`
  * RecipeID `integer`
  * ReviewCount `integer`
  * StarRating `number`
  * StarRatingIMG `string`
  * Subcategory `string`
  * Title `string`
  * TotalTries `integer`
  * WebURL `string`
  * YieldNumber `number`

### BigOven.Model.API.RecipeNote
* BigOven.Model.API.RecipeNote `object`
  * CreationDate `string`
  * Date `string`
  * DateDT `string`
  * GUID `string`
  * ID `integer`
  * Notes `string`
  * People `string`
  * RecipeID `integer`
  * UserID `integer`
  * Variations `string`

### BigOven.Model.API.RecipeNoteList
* BigOven.Model.API.RecipeNoteList `object`
  * ResultCount `integer`
  * Results `array`
    * items [BigOven.Model.API.RecipeNote](#bigoven.model.api.recipenote)

### BigOven.Model.API.Reply
* BigOven.Model.API.Reply `object`
  * Comment `string`
  * CreationDate `string`
  * ID `string`
  * LastModified `string`
  * Poster [BigOven.Model.API.UserInfoTiny](#bigoven.model.api.userinfotiny)
  * ReviewID `string`

### BigOven.Model.API.Review
* BigOven.Model.API.Review `object`
  * ActiveMinutes `integer`
  * Comment `string`
  * CreationDate `string`
  * FeaturedReply [BigOven.Model.API.Reply](#bigoven.model.api.reply)
  * GUID `string`
  * ID `string`
  * LastModified `string`
  * ParentID `integer`
  * Poster [BigOven.Model.API.UserInfo](#bigoven.model.api.userinfo)
  * Replies `array`
    * items [BigOven.Model.API.Review](#bigoven.model.api.review)
  * ReplyCount `integer`
  * ReviewID `integer`
  * StarRating `number`
  * TotalMinutes `integer`

### BigOven.Model.API.UserInfo
* BigOven.Model.API.UserInfo `object`
  * FirstName `string`
  * ImageURL48 `string`
  * IsKitchenHelper `boolean`
  * IsPremium `boolean`
  * IsUsingRecurly `boolean`
  * LastName `string`
  * MemberSince `string`
  * PhotoUrl `string`
  * PremiumExpiryDate `string`
  * UserID `integer`
  * UserName `string`

### BigOven.Model.API.UserInfoTiny
* BigOven.Model.API.UserInfoTiny `object`
  * FirstName `string`
  * LastName `string`
  * PhotoUrl `string`
  * UserID `integer`
  * UserName `string`

### BigOven.Model.API2.CollectionInfo
* BigOven.Model.API2.CollectionInfo `object`
  * Description `string`
  * ID `integer`
  * IsFiltered `boolean`
  * IsSponsored `boolean`
  * MobileUrl `string`
  * PRO `boolean`
  * PhotoUrl `string`
  * Results `array`
    * items [BigOven.Model.API2.RecipeInfox](#bigoven.model.api2.recipeinfox)
  * Title `string`
  * Token `string`
  * WebUrl `string`

### BigOven.Model.API2.GroceryList
* BigOven.Model.API2.GroceryList `object`
  * Items `array`
    * items [BigOven.Model.API.Grocery.Item](#bigoven.model.api.grocery.item)
  * LastModified `string`
  * Recipes `array`
    * items [BigOven.Model.API2.RecipeInfox](#bigoven.model.api2.recipeinfox)
  * VersionGuid `string`

### BigOven.Model.API2.Photo
* BigOven.Model.API2.Photo `object`
  * Caption `string`
  * CreationDate `string`
  * ImageID `integer`
  * IsPrimary `boolean`
  * MaxImageSquare `integer`
  * PhotoUrl `string`
  * Poster [BigOven.Model.API2.UserInfoTinyx](#bigoven.model.api2.userinfotinyx)

### BigOven.Model.API2.Recipe
* BigOven.Model.API2.Recipe `object`
  * ActiveMinutes `integer`
  * AdTags `string`
  * AdminBoost `integer`
  * AllCategoriesText `string`
  * BookmarkImageURL `string`
  * BookmarkSiteLogo `string`
  * BookmarkURL `string`
  * Category `string`
  * Collection `string`
  * CollectionID `integer`
  * CreationDate `string`
  * Cuisine `string`
  * Description `string`
  * FavoriteCount `integer`
  * ImageSquares `array`
    * items `integer`
  * ImageURL `string`
  * Ingredients `array`
    * items [BigOven.Model.API.Ingredient](#bigoven.model.api.ingredient)
  * IngredientsTextBlock `string`
  * Instructions `string`
  * IsBookmark `boolean`
  * IsPrivate `boolean`
  * IsRecipeScan `boolean`
  * IsSponsored `boolean`
  * LastModified `string`
  * MaxImageSquare `integer`
  * MedalCount `integer`
  * MenuCount `integer`
  * Microcategory `string`
  * NotesCount `integer`
  * NutritionInfo [BigOven.Model.API.NutritionInfo](#bigoven.model.api.nutritioninfo)
  * PhotoUrl `string`
  * Poster [BigOven.Model.API.UserInfo](#bigoven.model.api.userinfo)
  * PrimaryIngredient `string`
  * RecipeID `integer`
  * ReviewCount `integer`
  * StarRating `number`
  * Subcategory `string`
  * Title `string`
  * TotalMinutes `integer`
  * VariantOfRecipeID `integer`
  * VerifiedByClass `string`
  * VerifiedDateTime `string`
  * WebURL `string`
  * YieldNumber `number`
  * YieldUnit `string`

### BigOven.Model.API2.RecipeInfox
* BigOven.Model.API2.RecipeInfox `object`
  * Category `string`
  * CreationDate `string`
  * Cuisine `string`
  * IsBookmark `boolean`
  * IsPrivate `boolean`
  * IsRecipeScan `boolean`
  * Microcategory `string`
  * PhotoUrl `string`
  * Poster [BigOven.Model.API2.UserInfoTinyx](#bigoven.model.api2.userinfotinyx)
  * RecipeID `integer`
  * ReviewCount `integer`
  * Servings `number`
  * StarRating `number`
  * Subcategory `string`
  * Title `string`
  * TotalTries `integer`
  * WebURL `string`

### BigOven.Model.API2.RecipeNote
* BigOven.Model.API2.RecipeNote `object`
  * CreationDate `string`
  * Date `string`
  * DateDT `string`
  * GUID `string`
  * ID `integer`
  * Notes `string`
  * People `string`
  * RecipeID `integer`
  * UserID `integer`
  * Variations `string`

### BigOven.Model.API2.RecipeSearchResult
* BigOven.Model.API2.RecipeSearchResult `object`
  * ResultCount `integer`
  * Results `array`
    * items [BigOven.Model.API2.RecipeInfox](#bigoven.model.api2.recipeinfox)
  * SpellSuggest `string`

### BigOven.Model.API2.UserInfoTinyx
* BigOven.Model.API2.UserInfoTinyx `object`
  * FirstName `string`
  * LastName `string`
  * PhotoUrl `string`
  * UserID `integer`
  * UserName `string`

### BigOven.Model.RecipeCategory
* BigOven.Model.RecipeCategory `object`
  * Category `string`
  * DefaultActiveMinutes `integer`
  * DefaultTotalMinutes `integer`
  * ID `integer`
  * ParentID `integer`
  * PrimaryImage `string`
  * ShortDescription `string`

### BigOven.Model.RecipeInfoDateTuple2
* BigOven.Model.RecipeInfoDateTuple2 `object`
  * date `string`
  * recipeInfo [BigOven.Model.API2.RecipeInfox](#bigoven.model.api2.recipeinfox)

### BigOven.Model.RecipeInfoReviewTuple2
* BigOven.Model.RecipeInfoReviewTuple2 `object`
  * RecipeInfo [BigOven.Model.API2.RecipeInfox](#bigoven.model.api2.recipeinfox)
  * Review [BigOven.Model.API.Review](#bigoven.model.api.review)

### BigOven.Model.ShoppingListLine
* BigOven.Model.ShoppingListLine `object`
  * DateAdded `string`
  * Dept `string`
  * GUID `string`
  * HTMLItemName `string`
  * IsChecked `boolean`
  * ItemName `string`
  * LastModified `string`
  * ListID `integer`
  * MealPlanID `integer`
  * MealPlanObjectType `integer`
  * Notes `string`
  * PendingAddition `boolean`
  * RecipeID `integer`
  * ShoppingListLineID `integer`
  * Store `string`
  * TextAmt `string`
  * ThirdPartyHost `string`
  * ThirdPartyTitle `string`
  * ThirdPartyURL `string`

### System.Object
* System.Object `object`


