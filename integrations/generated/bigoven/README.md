# @datafire/bigoven

Client library for BigOven

## Installation and Usage
```bash
npm install --save datafire @datafire/bigoven
```

```js
let datafire = require('datafire');
let bigoven = require('@datafire/bigoven').actions;

let account = {
  api_key: "",
  username: "",
  password: "",
}
let context = new datafire.Context({
  accounts: {
    bigoven: account,
  }
})


bigoven.Recipe_RecentViews({}, context).then(data => {
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

#### Parameters
* id (integer) **required** - the collection identifier
* rpp (integer) - results per page
* pg (integer) - page number (starting with 1)
* test (boolean)
* sessionForLogging (string)

### Collection_GetCollectionMeta
Gets a recipe collection metadata. A recipe collection is a curated set of recipes.


```js
bigoven.Collection_GetCollectionMeta({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - the collection identifier

### Collection_Collections
Get the list of current, seasonal recipe collections. From here, you can use the /collection/{id} endpoint to retrieve the recipes in those collections.


```js
bigoven.Collection_Collections({}, context)
```


### Glossary_ByTerm
Get food glossary article by term (e.g., asparagus). This editorial is (c) BigOven and MUST carry attribution and a link back to the glossary entry on BigOven.com.


```js
bigoven.Glossary_ByTerm({
  "term": ""
}, context)
```

#### Parameters
* term (string) **required** - Keyword used to look up article, e.g., asparagus

### Glossary_Get
Get food glossary article


```js
bigoven.Glossary_Get({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - identifier of article to retrieve

### GroceryList_Delete
Delete all the items on a grocery list; faster operation than a sync with deleted items.


```js
bigoven.GroceryList_Delete(null, context)
```


### GroceryList_Get
Get the user's grocery list.  User is determined by Basic Authentication.


```js
bigoven.GroceryList_Get(null, context)
```


### GroceryList_Department
Departmentalize a list of strings -- used for ad-hoc grocery list item addition


```js
bigoven.GroceryList_Department({
  "model": {}
}, context)
```

#### Parameters
* model (object) **required**

### GroceryList_Post
Add a single line item to the grocery list


```js
bigoven.GroceryList_Post({
  "newItem": {}
}, context)
```

#### Parameters
* newItem (object) **required**

### GroceryList_DeleteItemByGuid
/grocerylist/item/{guid}  DELETE will delete this item assuming you own it.


```js
bigoven.GroceryList_DeleteItemByGuid({
  "guid": ""
}, context)
```

#### Parameters
* guid (string) **required**

### GroceryList_GroceryListItemGuid
Update a grocery item by GUID


```js
bigoven.GroceryList_GroceryListItemGuid({
  "req": {},
  "guid": ""
}, context)
```

#### Parameters
* req (object) **required**
* guid (string) **required**

### GroceryList_AddRecipe
Add a Recipe to the grocery list.  In the request data, pass in recipeId, scale (scale=1.0 says to keep the recipe the same size as originally posted), markAsPending (true/false) to indicate that
            the lines in the recipe should be marked in a "pending" (unconfirmed by user) state.


```js
bigoven.GroceryList_AddRecipe({
  "data": {}
}, context)
```

#### Parameters
* data (object) **required**

### GroceryList_PostGroceryListSync
Synchronize the grocery list.  Call this with a POST to /grocerylist/sync


```js
bigoven.GroceryList_PostGroceryListSync({
  "req": {}
}, context)
```

#### Parameters
* req (object) **required**

### Recipe_Post
Add a new recipe


```js
bigoven.Recipe_Post({
  "recipe": {}
}, context)
```

#### Parameters
* recipe (object) **required**

### Recipe_Put
Update a recipe


```js
bigoven.Recipe_Put({
  "recipe": {}
}, context)
```

#### Parameters
* recipe (object) **required**

### Recipe_AutoComplete
Given a query, return recipe titles starting with query. Query must be at least 3 chars in length.


```js
bigoven.Recipe_AutoComplete({
  "query": ""
}, context)
```

#### Parameters
* query (string) **required**
* limit (integer)

### Recipe_Categories
Get a list of recipe categories (the ID field can be used for include_cat in search parameters)


```js
bigoven.Recipe_Categories(null, context)
```


### Review_DeleteReply
DELETE a reply to a given review. Authenticated user must be the one who originally posted the reply.


```js
bigoven.Review_DeleteReply({
  "replyId": ""
}, context)
```

#### Parameters
* replyId (string) **required**

### Review_PutReply
Update (PUT) a reply to a given review. Authenticated user must be the original one that posted the reply.


```js
bigoven.Review_PutReply({
  "replyId": "",
  "data": {}
}, context)
```

#### Parameters
* replyId (string) **required**
* data (object) **required** - Reply request parameters

### recipe.review.reviewId.get
Get a given review by string-style ID. This will return a payload with FeaturedReply, ReplyCount.
            Recommended display is to list top-level reviews with one featured reply underneath. 
            Currently, the FeaturedReply is the most recent one for that rating.


```js
bigoven.recipe.review.reviewId.get({
  "reviewId": ""
}, context)
```

#### Parameters
* reviewId (string) **required**

### Review_Put
Update a given top-level review.


```js
bigoven.Review_Put({
  "reviewId": "",
  "review": {}
}, context)
```

#### Parameters
* reviewId (string) **required**
* review (object) **required** - Payload for reviews

### Review_GetReplies
Get a paged list of replies for a given review.


```js
bigoven.Review_GetReplies({
  "reviewId": ""
}, context)
```

#### Parameters
* reviewId (string) **required**
* pg (integer) - the page (int), starting with 1
* rpp (integer) - results per page (int)

### Review_PostReply
POST a reply to a given review. The date will be set by server. Note that replies no longer have star ratings, only top-level reviews do.


```js
bigoven.Review_PostReply({
  "reviewId": "",
  "data": {}
}, context)
```

#### Parameters
* reviewId (string) **required**
* data (object) **required** - Reply request parameters

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


### Recipe_Delete
Delete a Recipe (you must be authenticated as an owner of the recipe)


```js
bigoven.Recipe_Delete({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required**

### Recipe_Get
Return full Recipe detail. Returns 403 if the recipe is owned by someone else.


```js
bigoven.Recipe_Get({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - the Recipe ID to retrieve
* prefetch (boolean)

### Recipe_Feedback
Feedback on a Recipe -- for internal BigOven editors


```js
bigoven.Recipe_Feedback({
  "recipeId": 0,
  "data": {}
}, context)
```

#### Parameters
* recipeId (integer) **required**
* data (object) **required**

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

#### Parameters
* recipeId (string) **required**
* caption (string)
* lat (number)
* lng (number)

### Images_Get
Get all the images for a recipe. DEPRECATED. Please use /recipe/{recipeId}/photos.


```js
bigoven.Images_Get({
  "recipeId": 0
}, context)
```

#### Parameters
* recipeId (integer) **required** - Recipe ID (required)

### Note_Post
HTTP POST a new note into the system.


```js
bigoven.Note_Post({
  "recipeId": 0,
  "note": {}
}, context)
```

#### Parameters
* recipeId (integer) **required** - recipeId (int)
* note (object) **required**

### Note_Delete
Delete a review
                do a DELETE Http request of /note/{ID}


```js
bigoven.Note_Delete({
  "recipeId": 0,
  "noteId": 0
}, context)
```

#### Parameters
* recipeId (integer) **required** - recipeId (int)
* noteId (integer) **required** - noteId (int)

### Note_Get
Get a given note. Make sure you're passing authentication information in the header for the user who owns the note.


```js
bigoven.Note_Get({
  "recipeId": 0,
  "noteId": 0
}, context)
```

#### Parameters
* recipeId (integer) **required** - recipe identifier (integer)
* noteId (integer) **required** - The note ID (note -- it's not the RecipeID)

### Note_Put
HTTP PUT (update) a Recipe note (RecipeNote).


```js
bigoven.Note_Put({
  "recipeId": 0,
  "noteId": 0,
  "recipeNote": {}
}, context)
```

#### Parameters
* recipeId (integer) **required**
* noteId (integer) **required**
* recipeNote (object) **required**

### Note_GetNotes
recipe/100/notes


```js
bigoven.Note_GetNotes({
  "recipeId": 0
}, context)
```

#### Parameters
* recipeId (integer) **required** - recipeId (int)
* pg (integer) - page (int, starting from 1)
* rpp (integer) - recipeId

### Images_GetRecipePhotos
Get all the photos for a recipe


```js
bigoven.Images_GetRecipePhotos({
  "recipeId": 0
}, context)
```

#### Parameters
* recipeId (integer) **required** - Recipe ID (required)
* pg (integer)
* rpp (integer)

### Recipe_Related
Get recipes related to the given recipeId


```js
bigoven.Recipe_Related({
  "recipeId": 0,
  "pg": 0,
  "rpp": 0
}, context)
```

#### Parameters
* recipeId (integer) **required**
* pg (integer) **required**
* rpp (integer) **required**

### recipe.recipeId.review.get
Get *my* review for the recipe {recipeId}, where "me" is determined by standard authentication headers


```js
bigoven.recipe.recipeId.review.get({
  "recipeId": 0
}, context)
```

#### Parameters
* recipeId (integer) **required**

### Review_Post
Add a new review. Only one review can be provided per {userId, recipeId} pair. Otherwise your review will be updated.


```js
bigoven.Review_Post({
  "recipeId": 0,
  "data": {}
}, context)
```

#### Parameters
* recipeId (integer) **required**
* data (object) **required** - Payload for reviews

### Review_Delete
Delete a review by recipeId and reviewId. DEPRECATED. Please see recipe/review/{reviewId} for the preferred method.
            (We are moving from an integer-based ID system to a GUID-style string-based ID system for reviews and replies.)


```js
bigoven.Review_Delete({
  "reviewId": "",
  "recipeId": ""
}, context)
```

#### Parameters
* reviewId (string) **required**
* recipeId (string) **required**

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

#### Parameters
* reviewId (integer) **required** - int
* recipeId (integer) **required** - int

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

#### Parameters
* reviewId (integer) **required** - reviewId (int)
* review (object) **required** - Legacy -- This object here is deprecated. Please use the new "ReviewRequest" structure for all future development
* recipeId (integer) **required** - recipeId (int)

### Review_GetReviews
Get paged list of reviews for a recipe. Each review will have at most one FeaturedReply, as well as a ReplyCount.


```js
bigoven.Review_GetReviews({
  "recipeId": 0
}, context)
```

#### Parameters
* recipeId (integer) **required** - recipe id (int)
* pg (integer) - the page (int), starting with 1
* rpp (integer) - results per page (int)

### Images_GetScanImages
Gets a list of RecipeScan images for the recipe. There will be at most 3 per recipe.


```js
bigoven.Images_GetScanImages({
  "recipeId": 0
}, context)
```

#### Parameters
* recipeId (integer) **required** - the recipe identifier (int)

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


### Recipe_GetRandomRecipe
Get a random, home-page-quality Recipe.


```js
bigoven.Recipe_GetRandomRecipe(null, context)
```


### Recipe_Raves
Get the recipe/comment tuples for those recipes with 4 or 5 star ratings


```js
bigoven.Recipe_Raves({}, context)
```


### Recipe_RecentViews
Get a list of recipes that the authenticated user has most recently viewed


```js
bigoven.Recipe_RecentViews({}, context)
```


