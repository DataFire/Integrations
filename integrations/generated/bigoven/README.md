# @datafire/bigoven
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

## Operation: Collection_GetCollection
Gets a recipe collection. A recipe collection is a curated set of recipes.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "format": "int32",
      "description": "the collection identifier"
    },
    "rpp": {
      "type": "integer",
      "format": "int32",
      "description": "results per page"
    },
    "pg": {
      "type": "integer",
      "format": "int32",
      "description": "page number (starting with 1)"
    },
    "test": {
      "type": "boolean"
    },
    "sessionForLogging": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/BigOven.Model.API2.RecipeSearchResult"
}
```
## Operation: Collection_GetCollectionMeta
Gets a recipe collection metadata. A recipe collection is a curated set of recipes.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "format": "int32",
      "description": "the collection identifier"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/BigOven.Model.API2.CollectionInfo"
}
```
## Operation: Collection_Collections
Get the list of current, seasonal recipe collections. From here, you can use the /collection/{id} endpoint to retrieve the recipes in those collections.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "test": {
      "type": "string"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/BigOven.Model.API2.CollectionInfo"
  },
  "type": "array"
}
```
## Operation: Glossary_ByTerm
Get food glossary article by term (e.g., asparagus). This editorial is (c) BigOven and MUST carry attribution and a link back to the glossary entry on BigOven.com.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "term": {
      "type": "string",
      "description": "Keyword used to look up article, e.g., asparagus"
    }
  },
  "additionalProperties": false,
  "required": [
    "term"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/BigOven.Model.API.GlossaryEntry"
}
```
## Operation: Glossary_Get
Get food glossary article

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "format": "int32",
      "description": "identifier of article to retrieve"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: GroceryList_Delete
Delete all the items on a grocery list; faster operation than a sync with deleted items.

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "$ref": "#/definitions/System.Object"
}
```
## Operation: GroceryList_Get
Get the user's grocery list.  User is determined by Basic Authentication.

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "$ref": "#/definitions/BigOven.Model.API2.GroceryList"
}
```
## Operation: GroceryList_Department
Departmentalize a list of strings -- used for ad-hoc grocery list item addition

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "model": {
      "$ref": "#/definitions/API2.Controllers.GroceryListController.DepartmentModel"
    }
  },
  "additionalProperties": false,
  "required": [
    "model"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/API2.GroceryListDepartmentResult"
  },
  "type": "array"
}
```
## Operation: GroceryList_Post
Add a single line item to the grocery list

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "newItem": {
      "$ref": "#/definitions/API2.Controllers.GroceryListController.PostToGroceryListRecipeRequest"
    }
  },
  "additionalProperties": false,
  "required": [
    "newItem"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/BigOven.Model.ShoppingListLine"
}
```
## Operation: GroceryList_DeleteItemByGuid
/grocerylist/item/{guid}  DELETE will delete this item assuming you own it.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "guid": {
      "type": "string",
      "description": ""
    }
  },
  "additionalProperties": false,
  "required": [
    "guid"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/System.Object"
}
```
## Operation: GroceryList_GroceryListItemGuid
Update a grocery item by GUID

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "req": {
      "$ref": "#/definitions/API2.Controllers.GroceryListController.UpdateItemByGuidRequest"
    },
    "guid": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "req",
    "guid"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/System.Object"
}
```
## Operation: GroceryList_AddRecipe
Add a Recipe to the grocery list.  In the request data, pass in recipeId, scale (scale=1.0 says to keep the recipe the same size as originally posted), markAsPending (true/false) to indicate that
            the lines in the recipe should be marked in a "pending" (unconfirmed by user) state.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "data": {
      "$ref": "#/definitions/API2.Controllers.GroceryListController.PostGroceryListRecipeRequest"
    }
  },
  "additionalProperties": false,
  "required": [
    "data"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/System.Object"
}
```
## Operation: GroceryList_PostGroceryListSync
Synchronize the grocery list.  Call this with a POST to /grocerylist/sync

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "req": {
      "$ref": "#/definitions/API2.Controllers.GroceryListController.PostGroceryListSyncRequest"
    }
  },
  "additionalProperties": false,
  "required": [
    "req"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/System.Object"
}
```
## Operation: Recipe_Post
Add a new recipe

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "recipe": {
      "$ref": "#/definitions/BigOven.Model.API.Recipe"
    }
  },
  "additionalProperties": false,
  "required": [
    "recipe"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/BigOven.Model.API.Recipe"
}
```
## Operation: Recipe_Put
Update a recipe

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "recipe": {
      "$ref": "#/definitions/BigOven.Model.API.Recipe"
    }
  },
  "additionalProperties": false,
  "required": [
    "recipe"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/BigOven.Model.API.Recipe"
}
```
## Operation: Recipe_AutoComplete
Given a query, return recipe titles starting with query. Query must be at least 3 chars in length.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "query": {
      "type": "string",
      "description": ""
    },
    "limit": {
      "type": "integer",
      "format": "int32",
      "description": ""
    }
  },
  "additionalProperties": false,
  "required": [
    "query"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "type": "string"
  },
  "type": "array"
}
```
## Operation: Recipe_Categories
Get a list of recipe categories (the ID field can be used for include_cat in search parameters)

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/BigOven.Model.RecipeCategory"
  },
  "type": "array"
}
```
## Operation: Review_DeleteReply
DELETE a reply to a given review. Authenticated user must be the one who originally posted the reply.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "replyId": {
      "type": "string",
      "description": ""
    }
  },
  "additionalProperties": false,
  "required": [
    "replyId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/System.Object"
}
```
## Operation: Review_PutReply
Update (PUT) a reply to a given review. Authenticated user must be the original one that posted the reply.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "replyId": {
      "type": "string",
      "description": ""
    },
    "data": {
      "$ref": "#/definitions/API2.Controllers.ReviewController.PostReplyReq"
    }
  },
  "additionalProperties": false,
  "required": [
    "replyId",
    "data"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/BigOven.Model.API.Reply"
}
```
## Operation: recipe.review.reviewId.get
Get a given review by string-style ID. This will return a payload with FeaturedReply, ReplyCount.
            Recommended display is to list top-level reviews with one featured reply underneath. 
            Currently, the FeaturedReply is the most recent one for that rating.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "reviewId": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "reviewId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/BigOven.Model.API.Review"
}
```
## Operation: Review_Put
Update a given top-level review.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "reviewId": {
      "type": "string",
      "description": ""
    },
    "review": {
      "$ref": "#/definitions/API2.Controllers.ReviewController.ReviewRequest"
    }
  },
  "additionalProperties": false,
  "required": [
    "reviewId",
    "review"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/BigOven.Model.API.Review"
}
```
## Operation: Review_GetReplies
Get a paged list of replies for a given review.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "reviewId": {
      "type": "string",
      "description": ""
    },
    "pg": {
      "type": "integer",
      "format": "int32",
      "description": "the page (int), starting with 1"
    },
    "rpp": {
      "type": "integer",
      "format": "int32",
      "description": "results per page (int)"
    }
  },
  "additionalProperties": false,
  "required": [
    "reviewId"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/BigOven.Model.API.Reply"
  },
  "type": "array"
}
```
## Operation: Review_PostReply
POST a reply to a given review. The date will be set by server. Note that replies no longer have star ratings, only top-level reviews do.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "reviewId": {
      "type": "string",
      "description": ""
    },
    "data": {
      "$ref": "#/definitions/API2.Controllers.ReviewController.PostReplyReq"
    }
  },
  "additionalProperties": false,
  "required": [
    "reviewId",
    "data"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/BigOven.Model.API.Reply"
}
```
## Operation: Recipe_Scan
POST an image as a new RecipeScan request
                1)  Fetch the filename -- DONE
                2)  Copy it to the pics/scan folder - ENSURE NO NAMING COLLISIONS -- DONE
                3)  Create 120 thumbnail size  in pics/scan/120 -- DONE
                4)  Insert the CloudTasks record
                5)  Create the HIT
                6)  Update the CloudTasks record with the HIT ID
                7)  Email the requesing user
                8)  Call out to www.bigoven.com to fetch the image and re-create the thumbnail

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "test": {
      "type": "boolean"
    },
    "devicetype": {
      "type": "string"
    },
    "lat": {
      "type": "number",
      "format": "double"
    },
    "lng": {
      "type": "number",
      "format": "double"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: Recipe_Delete
Delete a Recipe (you must be authenticated as an owner of the recipe)

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "format": "int32"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/System.Object"
}
```
## Operation: Recipe_Get
Return full Recipe detail. Returns 403 if the recipe is owned by someone else.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "format": "int32",
      "description": "the Recipe ID to retrieve"
    },
    "prefetch": {
      "type": "boolean"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/BigOven.Model.API2.Recipe"
}
```
## Operation: Recipe_Feedback
Feedback on a Recipe -- for internal BigOven editors

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "recipeId": {
      "type": "integer",
      "format": "int32",
      "description": ""
    },
    "data": {
      "$ref": "#/definitions/API2.Controllers.RecipeController.FeedbackDTO"
    }
  },
  "additionalProperties": false,
  "required": [
    "recipeId",
    "data"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/System.Object"
}
```
## Operation: Images_UploadRecipeImage
POST: /recipe/{recipeId}/image?lat=42&amp;lng=21&amp;caption=this%20is%20my%20caption
             
             Note that caption, lng and lat are all optional, but must go on the request URI as params because this endpoint
             needs a multipart/mime content header and will not parse JSON in the body along with it.
            
             Testing with Postman (validated 11/20/2015):
             1) Remove the Content-Type header; add authentication information
             2) On the request, click Body and choose "form-data", then add a line item with "key" column set to "file" and on the right,
             change the type of the input from Text to File.  Browse and choose a JPG.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "recipeId": {
      "type": "string"
    },
    "caption": {
      "type": "string"
    },
    "lat": {
      "type": "number",
      "format": "double"
    },
    "lng": {
      "type": "number",
      "format": "double"
    }
  },
  "additionalProperties": false,
  "required": [
    "recipeId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/System.Object"
}
```
## Operation: Images_Get
Get all the images for a recipe. DEPRECATED. Please use /recipe/{recipeId}/photos.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "recipeId": {
      "type": "integer",
      "format": "int32",
      "description": "Recipe ID (required)"
    }
  },
  "additionalProperties": false,
  "required": [
    "recipeId"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/BigOven.Model.API.Image"
  },
  "type": "array"
}
```
## Operation: Note_Post
HTTP POST a new note into the system.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "recipeId": {
      "type": "integer",
      "format": "int32",
      "description": "recipeId (int)"
    },
    "note": {
      "$ref": "#/definitions/API2.Controllers.NoteController.NoteRequest"
    }
  },
  "additionalProperties": false,
  "required": [
    "recipeId",
    "note"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/BigOven.Model.API2.RecipeNote"
}
```
## Operation: Note_Delete
Delete a review
                do a DELETE Http request of /note/{ID}

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "recipeId": {
      "type": "integer",
      "format": "int32",
      "description": "recipeId (int)"
    },
    "noteId": {
      "type": "integer",
      "format": "int32",
      "description": "noteId (int)"
    }
  },
  "additionalProperties": false,
  "required": [
    "recipeId",
    "noteId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/System.Object"
}
```
## Operation: Note_Get
Get a given note. Make sure you're passing authentication information in the header for the user who owns the note.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "recipeId": {
      "type": "integer",
      "format": "int32",
      "description": "recipe identifier (integer)"
    },
    "noteId": {
      "type": "integer",
      "format": "int32",
      "description": "The note ID (note -- it's not the RecipeID)"
    }
  },
  "additionalProperties": false,
  "required": [
    "recipeId",
    "noteId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/BigOven.Model.API.RecipeNote"
}
```
## Operation: Note_Put
HTTP PUT (update) a Recipe note (RecipeNote).

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "recipeId": {
      "type": "integer",
      "format": "int32"
    },
    "noteId": {
      "type": "integer",
      "format": "int32"
    },
    "recipeNote": {
      "$ref": "#/definitions/API2.Controllers.NoteController.NoteRequest"
    }
  },
  "additionalProperties": false,
  "required": [
    "recipeId",
    "noteId",
    "recipeNote"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/BigOven.Model.API.RecipeNote"
}
```
## Operation: Note_GetNotes
recipe/100/notes

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "recipeId": {
      "type": "integer",
      "format": "int32",
      "description": "recipeId (int)"
    },
    "pg": {
      "type": "integer",
      "format": "int32",
      "description": "page (int, starting from 1)"
    },
    "rpp": {
      "type": "integer",
      "format": "int32",
      "description": "recipeId"
    }
  },
  "additionalProperties": false,
  "required": [
    "recipeId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/BigOven.Model.API.RecipeNoteList"
}
```
## Operation: Images_GetRecipePhotos
Get all the photos for a recipe

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "recipeId": {
      "type": "integer",
      "format": "int32",
      "description": "Recipe ID (required)"
    },
    "pg": {
      "type": "integer",
      "format": "int32"
    },
    "rpp": {
      "type": "integer",
      "format": "int32"
    }
  },
  "additionalProperties": false,
  "required": [
    "recipeId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/API2.Controllers.ImagesController.RecipePhotosResponse"
}
```
## Operation: Recipe_Related
Get recipes related to the given recipeId

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "recipeId": {
      "type": "integer",
      "format": "int32"
    },
    "pg": {
      "type": "integer",
      "format": "int32",
      "description": ""
    },
    "rpp": {
      "type": "integer",
      "format": "int32",
      "description": ""
    }
  },
  "additionalProperties": false,
  "required": [
    "recipeId",
    "pg",
    "rpp"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/BigOven.Model.API2.RecipeSearchResult"
}
```
## Operation: recipe.recipeId.review.get
Get *my* review for the recipe {recipeId}, where "me" is determined by standard authentication headers

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "recipeId": {
      "type": "integer",
      "format": "int32",
      "description": ""
    }
  },
  "additionalProperties": false,
  "required": [
    "recipeId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/BigOven.Model.API.Review"
}
```
## Operation: Review_Post
Add a new review. Only one review can be provided per {userId, recipeId} pair. Otherwise your review will be updated.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "recipeId": {
      "type": "integer",
      "format": "int32",
      "description": ""
    },
    "data": {
      "$ref": "#/definitions/API2.Controllers.ReviewController.ReviewRequest"
    }
  },
  "additionalProperties": false,
  "required": [
    "recipeId",
    "data"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/System.Object"
}
```
## Operation: Review_Delete
Delete a review by recipeId and reviewId. DEPRECATED. Please see recipe/review/{reviewId} for the preferred method.
            (We are moving from an integer-based ID system to a GUID-style string-based ID system for reviews and replies.)

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "reviewId": {
      "type": "string",
      "description": ""
    },
    "recipeId": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "reviewId",
    "recipeId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/System.Object"
}
```
## Operation: recipe.recipeId.review.reviewId.get
Get a given review - DEPRECATED. See recipe/review/{reviewId} for the current usage.
            Beginning in January 2017, BigOven moded from an integer-based ID system to a GUID-style string-based ID system for reviews and replies.
            We are also supporting more of a "Google Play" style model for Reviews and Replies. That is, there are top-level Reviews and then
            an unlimited list of replies (which do not carry star ratings) underneath existing reviews. Also, a given user can only have one review 
            per recipe. Existing legacy endpoints will continue to work, but we strongly recommend you migrate to using the newer endpoints listed
            which do NOT carry the "DEPRECATED" flag.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "reviewId": {
      "type": "integer",
      "format": "int32",
      "description": "int"
    },
    "recipeId": {
      "type": "integer",
      "format": "int32",
      "description": "int"
    }
  },
  "additionalProperties": false,
  "required": [
    "reviewId",
    "recipeId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/BigOven.Model.API.Review"
}
```
## Operation: Review_PutLegacy
HTTP PUT (update) a recipe review. DEPRECATED. Please see recipe/review/{reviewId} PUT for the new endpoint.
            We are moving to a string-based primary key system, no longer integers, for reviews and replies.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "reviewId": {
      "type": "integer",
      "format": "int32",
      "description": "reviewId (int)"
    },
    "review": {
      "$ref": "#/definitions/API2.Controllers.ReviewController.ReviewRequestLegacy"
    },
    "recipeId": {
      "type": "integer",
      "format": "int32",
      "description": "recipeId (int)"
    }
  },
  "additionalProperties": false,
  "required": [
    "reviewId",
    "review",
    "recipeId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/BigOven.Model.API.Review"
}
```
## Operation: Review_GetReviews
Get paged list of reviews for a recipe. Each review will have at most one FeaturedReply, as well as a ReplyCount.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "recipeId": {
      "type": "integer",
      "format": "int32",
      "description": "recipe id (int)"
    },
    "pg": {
      "type": "integer",
      "format": "int32",
      "description": "the page (int), starting with 1"
    },
    "rpp": {
      "type": "integer",
      "format": "int32",
      "description": "results per page (int)"
    }
  },
  "additionalProperties": false,
  "required": [
    "recipeId"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/BigOven.Model.API.Review"
  },
  "type": "array"
}
```
## Operation: Images_GetScanImages
Gets a list of RecipeScan images for the recipe. There will be at most 3 per recipe.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "recipeId": {
      "type": "integer",
      "format": "int32",
      "description": "the recipe identifier (int)"
    }
  },
  "additionalProperties": false,
  "required": [
    "recipeId"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/BigOven.Model.API.Image"
  },
  "type": "array"
}
```
## Operation: Recipe_RecipeSearch
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

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "any_kw": {
      "type": "string",
      "description": "Search anywhere in the recipe for the keyword"
    },
    "folder": {
      "type": "string",
      "description": "Search in a specific folder name for the authenticated user"
    },
    "coll": {
      "type": "integer",
      "format": "int32",
      "description": "Limit to a collection ID number"
    },
    "filter": {
      "type": "string",
      "description": "optionally set to either \"myrecipes\", \"try\", \"favorites\",\"added\" to filter to just the authenticated user's recipe set"
    },
    "title_kw": {
      "type": "string",
      "description": "Search just in the recipe title for the keyword"
    },
    "userId": {
      "type": "integer",
      "format": "int32",
      "description": "Set the target userid to search their public recipes"
    },
    "username": {
      "type": "string",
      "description": "Set the target username to search their public recipes"
    },
    "token": {
      "type": "string",
      "description": ""
    },
    "photos": {
      "type": "boolean",
      "description": "if set to true, limit search results to photos only"
    },
    "boostmine": {
      "type": "boolean",
      "description": "if set to true, boost my own recipes in my folders so they show up high in the list (at the expense of other sort orders)"
    },
    "include_cat": {
      "type": "string",
      "description": "integer of the subcategory you'd like to limit searches to (see the /recipe/categories endpoint for available id numbers). For instance, 58 is \"Main Dish &gt; Casseroles\"."
    },
    "exclude_cat": {
      "type": "string",
      "description": "like include_cat, set this to an integer to exclude a specific category"
    },
    "include_primarycat": {
      "type": "string",
      "description": "csv indicating up to three top-level categories -- valid values are [appetizers,bread,breakfast,desserts,drinks,maindish,salads,sidedish,soups,marinades,other]"
    },
    "include_ing": {
      "type": "string",
      "description": "A CSV representing up to 3 ingredients to include, e.g., tomatoes,corn%20%starch,chicken"
    },
    "exclude_ing": {
      "type": "string",
      "description": "A CSV representing up to 3 ingredients to exclude  (Powersearch-capable plan required)"
    },
    "cuisine": {
      "type": "string",
      "description": "Limit to a specific cuisine. Cooks can enter anything free-form, but the few dozen preconfigured values are Afghan,African,American,American-South,Asian,Australian,Brazilian,Cajun,Canadian,Caribbean,Chinese,Croatian,Cuban,Dessert,Eastern European,English,French,German,Greek,Hawaiian,Hungarian,India,Indian,Irish,Italian,Japanese,Jewish,Korean,Latin,Mediterranean,Mexican,Middle Eastern,Moroccan,Polish,Russian,Scandanavian,Seafood,Southern,Southwestern,Spanish,Tex-Mex,Thai,Vegan,Vegetarian,Vietnamese"
    },
    "db": {
      "type": "string",
      "description": ""
    },
    "userset": {
      "type": "string",
      "description": "If set to a given username, it'll force the search to filter to just that username"
    },
    "rpp": {
      "type": "integer",
      "format": "int32",
      "description": "integer; results per page"
    },
    "pg": {
      "type": "integer",
      "format": "int32",
      "description": "integer: the page number"
    },
    "vtn": {
      "type": "integer",
      "format": "int32",
      "description": "when set to 1, limit to vegetarian (Powersearch-capable plan required)"
    },
    "vgn": {
      "type": "integer",
      "format": "int32",
      "description": "when set to 1, limit to vegan (Powersearch-capable plan required)"
    },
    "chs": {
      "type": "integer",
      "format": "int32",
      "description": "when set to 1, limit to contains-cheese (Powersearch-capable plan required)"
    },
    "glf": {
      "type": "integer",
      "format": "int32",
      "description": "when set to 1, limit to gluten-free (Powersearch-capable plan required)"
    },
    "ntf": {
      "type": "integer",
      "format": "int32",
      "description": "when set to 1, limit to nut-free (Powersearch-capable plan required)"
    },
    "dyf": {
      "type": "integer",
      "format": "int32",
      "description": "when set to 1, limit to dairy-free (Powersearch-capable plan required)"
    },
    "sff": {
      "type": "integer",
      "format": "int32",
      "description": "when set to 1, limit to seafood-free (Powersearch-capable plan required)"
    },
    "slf": {
      "type": "integer",
      "format": "int32",
      "description": "when set to 1, limit to shellfish-free (Powersearch-capable plan required)"
    },
    "tnf": {
      "type": "integer",
      "format": "int32",
      "description": "when set to 1, limit to tree-nut free (Powersearch-capable plan required)"
    },
    "wmf": {
      "type": "integer",
      "format": "int32",
      "description": "when set to 1, limit to white-meat free (Powersearch-capable plan required)"
    },
    "rmf": {
      "type": "integer",
      "format": "int32",
      "description": "when set to 1, limit to red-meat free (Powersearch-capable plan required)"
    },
    "cps": {
      "type": "integer",
      "format": "int32",
      "description": "when set to 1, recipe contains pasta, set to 0 means contains no pasta (Powersearch-capable plan required)"
    },
    "champion": {
      "type": "integer",
      "format": "int32",
      "description": "optional. When set to 1, this will limit search results to \"best of\" recipes as determined by various internal editorial and programmatic algorithms. For the most comprehensive results, don't include this parameter."
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/BigOven.Model.API2.RecipeSearchResult"
}
```
## Operation: Recipe_GetRandomRecipe
Get a random, home-page-quality Recipe.

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "$ref": "#/definitions/BigOven.Model.API.Recipe"
}
```
## Operation: Recipe_Raves
Get the recipe/comment tuples for those recipes with 4 or 5 star ratings

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "pg": {
      "type": "integer",
      "format": "int32",
      "description": "page, starting with 1"
    },
    "rpp": {
      "type": "integer",
      "format": "int32",
      "description": "results per page"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/BigOven.Model.RecipeInfoReviewTuple2"
  },
  "type": "array"
}
```
## Operation: Recipe_RecentViews
Get a list of recipes that the authenticated user has most recently viewed

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "pg": {
      "type": "integer",
      "format": "int32",
      "description": "Page number starting with 1"
    },
    "rpp": {
      "type": "integer",
      "format": "int32",
      "description": "results per page"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/BigOven.Model.RecipeInfoDateTuple2"
  },
  "type": "array"
}
```
