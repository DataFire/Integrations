# @datafire/reverb

Client library for reverb

## Installation and Usage
```bash
npm install --save datafire @datafire/reverb
```

```js
let datafire = require('datafire');
let reverb = require('@datafire/reverb').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: "",
});

reverb.webhooks.registrations.post({}).then(data => {
  console.log(data);
})
```

## Description
reverb

## Actions
### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
reverb.oauthCallback({
  "code": ""
}, context)
```

#### Parameters
* code (string) **required**

### oauthRefresh
Exchange a refresh_token for an access_token


```js
reverb.oauthRefresh(null, context)
```

#### Parameters
*This action has no parameters*

### articles.get



```js
reverb.articles.get({}, context)
```

#### Parameters
* page (integer)
* per_page (integer)
* offset (integer)
* query (string) - What's being searched for
* exclude_featured (integer) - Number of featured articles to exclude

### categories.get
List of supported product categories


```js
reverb.categories.get(null, context)
```

#### Parameters
*This action has no parameters*

### categories.flat.get



```js
reverb.categories.flat.get(null, context)
```

#### Parameters
*This action has no parameters*

### categories.taxonomy.get
Full taxonomy tree of categories including middle categories


```js
reverb.categories.taxonomy.get(null, context)
```

#### Parameters
*This action has no parameters*

### categories.product_type.category.get
Get subcategory details


```js
reverb.categories.product_type.category.get({
  "product_type": "",
  "category": ""
}, context)
```

#### Parameters
* product_type (string) **required**
* category (string) **required**

### categories.uuid.get
Get category details


```js
reverb.categories.uuid.get({
  "uuid": ""
}, context)
```

#### Parameters
* uuid (string) **required**

### comparison_shopping_pages.get
Returns a set of comparison shopping pages based on the current params


```js
reverb.comparison_shopping_pages.get(null, context)
```

#### Parameters
*This action has no parameters*

### comparison_shopping_pages.find.get
Show comparison shopping page


```js
reverb.comparison_shopping_pages.find.get({}, context)
```

#### Parameters
* id (string) - ID of the comparison shopping page
* slug (string) - Slug of the comparison shopping page

### comparison_shopping_pages.id.get



```js
reverb.comparison_shopping_pages.id.get({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required**

### comparison_shopping_pages.id.listings.get
Return new or used listings for a comparison shopping page


```js
reverb.comparison_shopping_pages.id.listings.get({
  "id": "",
  "condition": ""
}, context)
```

#### Parameters
* id (string) **required**
* condition (string) **required** - Condition of the listing
* page (integer)
* per_page (integer)
* offset (integer)

### comparison_shopping_pages.id.reviews.get
View reviews of a comparison shopping page


```js
reverb.comparison_shopping_pages.id.reviews.get({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required**

### conversations.conversation_id.offer.post
Make an offer to the other participant in the conversation


```js
reverb.conversations.conversation_id.offer.post({
  "conversation_id": ""
}, context)
```

#### Parameters
* conversation_id (string) **required**
* body (object)

### conversations.id.offer.post
Make an offer to the other participant in the conversation


```js
reverb.conversations.id.offer.post({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required**
* body (object)

### countries.get
Retrieve a list of country codes with corresponding subregions


```js
reverb.countries.get(null, context)
```

#### Parameters
*This action has no parameters*

### curated_sets.slug.get



```js
reverb.curated_sets.slug.get({
  "slug": ""
}, context)
```

#### Parameters
* slug (string) **required**

### currencies.display.get
List of supported display currencies for browsing listings


```js
reverb.currencies.display.get(null, context)
```

#### Parameters
*This action has no parameters*

### currencies.listing.get
List of supported listing currencies for shops


```js
reverb.currencies.listing.get(null, context)
```

#### Parameters
*This action has no parameters*

### feedback.feedback_id.get
Feedback details


```js
reverb.feedback.feedback_id.get({
  "feedback_id": ""
}, context)
```

#### Parameters
* feedback_id (string) **required**

### handpicked.slug.get
Get results from a handpicked collection


```js
reverb.handpicked.slug.get({
  "slug": ""
}, context)
```

#### Parameters
* slug (string) **required**
* query (string) - Search query.
* auction_price_max (number) - Maximum current auction price
* category (string) - Category slug from /api/categories
* product_type (string) - Product type slug from /api/categories
* conditions (array) - Condition: all,new,b-stock,used,non-functioning
* decade (string) - Decade: e.g. 1970s, early 70s
* finish (string) - Visual finish of the item, common for guitars
* handmade (boolean) - Handmade items only
* item_city (string) - City where item is located
* item_country (string) - DEPRECATED - Country code where item is located
* item_region (string) - Country code where item is located
* item_state (string) - State or region code where item is located
* make (array) - Make(s)/brand of item (e.g. Fender). Can take a single value or an array.
* model (string) - Model of item (e.g. Stratocaster)
* must_not (string) - Search term negation. If you want to exclude a term, add it here
* price_max (number) - Maximum price of search results (USD)
* price_min (number) - Minimum price of search results (USD)
* currency (string) - The currency to be used for the price filters
* year_max (integer) - Maximum year of manufacture
* year_min (integer) - Minumum year of manufacture
* accepts_gift_cards (boolean) - If true, include only items that accept gift cards
* preferred_seller (boolean) - If true, include only items by Reverb Preferred Sellers
* shop (string) - Slug of shop to search
* shop_id (string) - ID of shop to search
* listing_type (string) - Type of listing: auctions,offers
* ships_to (string) - Limit search to items that ship to this country code
* exclude_auctions (boolean) - If true, exclude auctions
* accepts_payment_plans (boolean) - If true, only show items that can be purchased with a payment plan
* watchers_count_min (integer) - Minimum number of watchers (used to find popular items)
* not_ids (array) - Listing ID negation. If you want to exclude a listing, add it here.
* page (integer)
* per_page (integer)
* offset (integer)

### listing_conditions.get
List of supported product conditions


```js
reverb.listing_conditions.get(null, context)
```

#### Parameters
*This action has no parameters*

### listings.get
Default search of listings includes only used & handmade. Add a filter to view all listings or use the /listings/all endpoint.


```js
reverb.listings.get({}, context)
```

#### Parameters
* query (string) - Search query.
* auction_price_max (number) - Maximum current auction price
* category (string) - Category slug from /api/categories
* product_type (string) - Product type slug from /api/categories
* conditions (array) - Condition: all,new,b-stock,used,non-functioning
* decade (string) - Decade: e.g. 1970s, early 70s
* finish (string) - Visual finish of the item, common for guitars
* handmade (boolean) - Handmade items only
* item_city (string) - City where item is located
* item_country (string) - DEPRECATED - Country code where item is located
* item_region (string) - Country code where item is located
* item_state (string) - State or region code where item is located
* make (array) - Make(s)/brand of item (e.g. Fender). Can take a single value or an array.
* model (string) - Model of item (e.g. Stratocaster)
* must_not (string) - Search term negation. If you want to exclude a term, add it here
* price_max (number) - Maximum price of search results (USD)
* price_min (number) - Minimum price of search results (USD)
* currency (string) - The currency to be used for the price filters
* year_max (integer) - Maximum year of manufacture
* year_min (integer) - Minumum year of manufacture
* accepts_gift_cards (boolean) - If true, include only items that accept gift cards
* preferred_seller (boolean) - If true, include only items by Reverb Preferred Sellers
* shop (string) - Slug of shop to search
* shop_id (string) - ID of shop to search
* listing_type (string) - Type of listing: auctions,offers
* ships_to (string) - Limit search to items that ship to this country code
* exclude_auctions (boolean) - If true, exclude auctions
* accepts_payment_plans (boolean) - If true, only show items that can be purchased with a payment plan
* watchers_count_min (integer) - Minimum number of watchers (used to find popular items)
* not_ids (array) - Listing ID negation. If you want to exclude a listing, add it here.
* page (integer)
* per_page (integer)
* offset (integer)

### listings.post
Create a listing


```js
reverb.listings.post({}, context)
```

#### Parameters
* body (object)

### listings.all.get
All listings including used, handmade, and brand new


```js
reverb.listings.all.get({}, context)
```

#### Parameters
* query (string) - Search query.
* auction_price_max (number) - Maximum current auction price
* category (string) - Category slug from /api/categories
* product_type (string) - Product type slug from /api/categories
* conditions (array) - Condition: all,new,b-stock,used,non-functioning
* decade (string) - Decade: e.g. 1970s, early 70s
* finish (string) - Visual finish of the item, common for guitars
* handmade (boolean) - Handmade items only
* item_city (string) - City where item is located
* item_country (string) - DEPRECATED - Country code where item is located
* item_region (string) - Country code where item is located
* item_state (string) - State or region code where item is located
* make (array) - Make(s)/brand of item (e.g. Fender). Can take a single value or an array.
* model (string) - Model of item (e.g. Stratocaster)
* must_not (string) - Search term negation. If you want to exclude a term, add it here
* price_max (number) - Maximum price of search results (USD)
* price_min (number) - Minimum price of search results (USD)
* currency (string) - The currency to be used for the price filters
* year_max (integer) - Maximum year of manufacture
* year_min (integer) - Minumum year of manufacture
* accepts_gift_cards (boolean) - If true, include only items that accept gift cards
* preferred_seller (boolean) - If true, include only items by Reverb Preferred Sellers
* shop (string) - Slug of shop to search
* shop_id (string) - ID of shop to search
* listing_type (string) - Type of listing: auctions,offers
* ships_to (string) - Limit search to items that ship to this country code
* exclude_auctions (boolean) - If true, exclude auctions
* accepts_payment_plans (boolean) - If true, only show items that can be purchased with a payment plan
* watchers_count_min (integer) - Minimum number of watchers (used to find popular items)
* not_ids (array) - Listing ID negation. If you want to exclude a listing, add it here.
* page (integer)
* per_page (integer)
* offset (integer)

### listings.facets.seller_location.get
Individual facets


```js
reverb.listings.facets.seller_location.get(null, context)
```

#### Parameters
*This action has no parameters*

### listings.id.negotiation.get
Returns the latest negotiation for the requesting user given a listing id


```js
reverb.listings.id.negotiation.get({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required**

### listings.id.offer.post
Make an offer to the seller of a listing


```js
reverb.listings.id.offer.post({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required**
* body (object)

### listings.listing_id.bump.get
View available bump tiers and stats for a listing


```js
reverb.listings.listing_id.bump.get({
  "listing_id": ""
}, context)
```

#### Parameters
* listing_id (string) **required**

### listings.listing_id.bump.budget_type.post
Bump a listing


```js
reverb.listings.listing_id.bump.budget_type.post({
  "listing_id": "",
  "budget_type": ""
}, context)
```

#### Parameters
* listing_id (string) **required**
* budget_type (string) **required**

### listings.listing_id.conversations.post
Start a conversation with a seller


```js
reverb.listings.listing_id.conversations.post({
  "listing_id": ""
}, context)
```

#### Parameters
* listing_id (string) **required**
* body (object)

### listings.listing_id.images.get
View the images associated with a particular listing


```js
reverb.listings.listing_id.images.get({
  "listing_id": ""
}, context)
```

#### Parameters
* listing_id (string) **required**

### listings.listing_id.images.image_id.delete
Delete an image from a listing


```js
reverb.listings.listing_id.images.image_id.delete({
  "listing_id": "",
  "image_id": ""
}, context)
```

#### Parameters
* listing_id (string) **required**
* image_id (string) **required**

### listings.listing_id.product_bundle.get
Find a product bundle attached to a listing


```js
reverb.listings.listing_id.product_bundle.get({
  "listing_id": ""
}, context)
```

#### Parameters
* listing_id (string) **required**
* for_seller (boolean) - Pass to see non-live bundles as the seller

### listings.listing_id.sales.get
See all sales that include a listing.


```js
reverb.listings.listing_id.sales.get({
  "listing_id": ""
}, context)
```

#### Parameters
* listing_id (string) **required**

### listings.slug.delete
Delete a draft listing. Cannot be used on non-drafts.


```js
reverb.listings.slug.delete({
  "slug": ""
}, context)
```

#### Parameters
* slug (string) **required**

### listings.slug.get
Listing details


```js
reverb.listings.slug.get({
  "slug": ""
}, context)
```

#### Parameters
* slug (string) **required**

### listings.slug.put
Update a listing


```js
reverb.listings.slug.put({
  "slug": ""
}, context)
```

#### Parameters
* slug (string) **required**
* body (object)

### listings.slug.edit.get
Edit listing.


```js
reverb.listings.slug.edit.get({
  "slug": ""
}, context)
```

#### Parameters
* slug (string) **required**

### listings.slug.flag.post
Flag a listing for inappropriate content or fraud


```js
reverb.listings.slug.flag.post({
  "slug": ""
}, context)
```

#### Parameters
* slug (string) **required**
* body (object)

### listings.slug.reviews.get
View reviews of a listing


```js
reverb.listings.slug.reviews.get({
  "slug": ""
}, context)
```

#### Parameters
* slug (string) **required**

### listings.slug.reviews.post
Create a review for a listing


```js
reverb.listings.slug.reviews.post({
  "slug": ""
}, context)
```

#### Parameters
* slug (string) **required**

### listings.slug.similar_listings.get
Listing details


```js
reverb.listings.slug.similar_listings.get({
  "slug": ""
}, context)
```

#### Parameters
* slug (string) **required**

### my.account.get
Get account details


```js
reverb.my.account.get(null, context)
```

#### Parameters
*This action has no parameters*

### my.account.put
Update account details


```js
reverb.my.account.put({}, context)
```

#### Parameters
* body (object)

### my.addresses.get
See all addresses in your address book


```js
reverb.my.addresses.get(null, context)
```

#### Parameters
*This action has no parameters*

### my.addresses.post
Create a new address in your address book


```js
reverb.my.addresses.post(null, context)
```

#### Parameters
*This action has no parameters*

### my.addresses.address_id.delete
Delete an existing address in your address book


```js
reverb.my.addresses.address_id.delete({
  "address_id": ""
}, context)
```

#### Parameters
* address_id (string) **required**

### my.addresses.address_id.put
Update an existing address in your address book


```js
reverb.my.addresses.address_id.put({
  "address_id": ""
}, context)
```

#### Parameters
* address_id (string) **required**

### my.conversations.get
Get a list of your conversations


```js
reverb.my.conversations.get({}, context)
```

#### Parameters
* search (string) - Query string to search conversations by
* unread_only (boolean) - Show unread conversations only
* page (integer)
* per_page (integer)
* offset (integer)

### my.conversations.post
Start a conversation


```js
reverb.my.conversations.post({}, context)
```

#### Parameters
* body (object)

### my.conversations.conversation_id.messages.post
Send a message


```js
reverb.my.conversations.conversation_id.messages.post({
  "conversation_id": ""
}, context)
```

#### Parameters
* conversation_id (string) **required**
* body (object)

### my.conversations.id.get
Display conversation details with messages in natural time order (oldest to newest)


```js
reverb.my.conversations.id.get({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required**

### my.conversations.id.put
Mark a conversation read/unread


```js
reverb.my.conversations.id.put({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required**
* body (object)

### my.counts.get
Get your actionable status counts


```js
reverb.my.counts.get(null, context)
```

#### Parameters
*This action has no parameters*

### my.curated_set.product.product_id.delete



```js
reverb.my.curated_set.product.product_id.delete({
  "product_id": ""
}, context)
```

#### Parameters
* product_id (string) **required**

### my.curated_set.product.product_id.post



```js
reverb.my.curated_set.product.product_id.post({
  "product_id": ""
}, context)
```

#### Parameters
* product_id (string) **required**

### my.feed.get
Get listings from your feed


```js
reverb.my.feed.get(null, context)
```

#### Parameters
*This action has no parameters*

### my.feed.customize.get
get your feed customization options


```js
reverb.my.feed.customize.get(null, context)
```

#### Parameters
*This action has no parameters*

### my.feed.grid.get
get your feed


```js
reverb.my.feed.grid.get(null, context)
```

#### Parameters
*This action has no parameters*

### my.feedback.received.get
List of received feedback


```js
reverb.my.feedback.received.get(null, context)
```

#### Parameters
*This action has no parameters*

### my.feedback.sent.get
List of sent feedback


```js
reverb.my.feedback.sent.get(null, context)
```

#### Parameters
*This action has no parameters*

### my.follows.get
See what the user is following


```js
reverb.my.follows.get(null, context)
```

#### Parameters
*This action has no parameters*

### my.follows.articles.get
Returns a user's ArticleCategoryFollows


```js
reverb.my.follows.articles.get(null, context)
```

#### Parameters
*This action has no parameters*

### my.follows.articles.post
Set a user's ArticleCategoryFollows


```js
reverb.my.follows.articles.post({}, context)
```

#### Parameters
* body (object)

### my.follows.brands.slug.delete
Unfollow a brand


```js
reverb.my.follows.brands.slug.delete({
  "slug": ""
}, context)
```

#### Parameters
* slug (string) **required**

### my.follows.brands.slug.get
Follow status for a brand


```js
reverb.my.follows.brands.slug.get({
  "slug": ""
}, context)
```

#### Parameters
* slug (string) **required**

### my.follows.brands.slug.post
Follow a brand


```js
reverb.my.follows.brands.slug.post({
  "slug": ""
}, context)
```

#### Parameters
* slug (string) **required**

### my.follows.categories.category.subcategory.delete
Unfollow a subcategory


```js
reverb.my.follows.categories.category.subcategory.delete({
  "category": "",
  "subcategory": ""
}, context)
```

#### Parameters
* category (string) **required**
* subcategory (string) **required**

### my.follows.categories.category.subcategory.get
Follow status for a subcategory


```js
reverb.my.follows.categories.category.subcategory.get({
  "category": "",
  "subcategory": ""
}, context)
```

#### Parameters
* category (string) **required**
* subcategory (string) **required**

### my.follows.categories.category.subcategory.post
Follow a subcategory


```js
reverb.my.follows.categories.category.subcategory.post({
  "category": "",
  "subcategory": ""
}, context)
```

#### Parameters
* category (string) **required**
* subcategory (string) **required**

### my.follows.categories.identifier.delete
Unfollow a category


```js
reverb.my.follows.categories.identifier.delete({
  "identifier": ""
}, context)
```

#### Parameters
* identifier (string) **required**

### my.follows.categories.identifier.get
Follow status for a category


```js
reverb.my.follows.categories.identifier.get({
  "identifier": ""
}, context)
```

#### Parameters
* identifier (string) **required**

### my.follows.categories.identifier.post
Follow a category


```js
reverb.my.follows.categories.identifier.post({
  "identifier": ""
}, context)
```

#### Parameters
* identifier (string) **required**

### my.follows.collections.slug.delete
Unfollow a collection


```js
reverb.my.follows.collections.slug.delete({
  "slug": ""
}, context)
```

#### Parameters
* slug (string) **required**

### my.follows.collections.slug.get
Follow status for a collection


```js
reverb.my.follows.collections.slug.get({
  "slug": ""
}, context)
```

#### Parameters
* slug (string) **required**

### my.follows.collections.slug.post
Follow a collection


```js
reverb.my.follows.collections.slug.post({
  "slug": ""
}, context)
```

#### Parameters
* slug (string) **required**

### my.follows.handpicked.slug.delete
Unfollow a handpicked collection


```js
reverb.my.follows.handpicked.slug.delete({
  "slug": ""
}, context)
```

#### Parameters
* slug (string) **required**

### my.follows.handpicked.slug.get
Follow status for a handpicked collection


```js
reverb.my.follows.handpicked.slug.get({
  "slug": ""
}, context)
```

#### Parameters
* slug (string) **required**

### my.follows.handpicked.slug.post
Follow a handpicked collection


```js
reverb.my.follows.handpicked.slug.post({
  "slug": ""
}, context)
```

#### Parameters
* slug (string) **required**

### my.follows.search.get
Follow status for a search


```js
reverb.my.follows.search.get(null, context)
```

#### Parameters
*This action has no parameters*

### my.follows.search.post
Follow a search


```js
reverb.my.follows.search.post({}, context)
```

#### Parameters
* body (object)

### my.follows.shops.slug.delete
Unfollow a shop


```js
reverb.my.follows.shops.slug.delete({
  "slug": ""
}, context)
```

#### Parameters
* slug (string) **required**

### my.follows.shops.slug.get
Follow status for a shop


```js
reverb.my.follows.shops.slug.get({
  "slug": ""
}, context)
```

#### Parameters
* slug (string) **required**

### my.follows.shops.slug.post
Follow a shop


```js
reverb.my.follows.shops.slug.post({
  "slug": ""
}, context)
```

#### Parameters
* slug (string) **required**

### my.follows.follow_id.delete
Delete a follow


```js
reverb.my.follows.follow_id.delete({
  "follow_id": ""
}, context)
```

#### Parameters
* follow_id (string) **required**

### my.follows.follow_id.alert.delete



```js
reverb.my.follows.follow_id.alert.delete({
  "follow_id": ""
}, context)
```

#### Parameters
* follow_id (string) **required**

### my.follows.follow_id.alert.post



```js
reverb.my.follows.follow_id.alert.post({
  "follow_id": ""
}, context)
```

#### Parameters
* follow_id (string) **required**

### my.listings.get
Retrieve a list of live listings for the seller. To search all listings specify state=all


```js
reverb.my.listings.get({}, context)
```

#### Parameters
* query (string) - Search query.
* auction_price_max (number) - Maximum current auction price
* category (string) - Category slug from /api/categories
* product_type (string) - Product type slug from /api/categories
* conditions (array) - Condition: all,new,b-stock,used,non-functioning
* decade (string) - Decade: e.g. 1970s, early 70s
* finish (string) - Visual finish of the item, common for guitars
* handmade (boolean) - Handmade items only
* item_city (string) - City where item is located
* item_country (string) - DEPRECATED - Country code where item is located
* item_region (string) - Country code where item is located
* item_state (string) - State or region code where item is located
* make (array) - Make(s)/brand of item (e.g. Fender). Can take a single value or an array.
* model (string) - Model of item (e.g. Stratocaster)
* must_not (string) - Search term negation. If you want to exclude a term, add it here
* price_max (number) - Maximum price of search results (USD)
* price_min (number) - Minimum price of search results (USD)
* currency (string) - The currency to be used for the price filters
* year_max (integer) - Maximum year of manufacture
* year_min (integer) - Minumum year of manufacture
* accepts_gift_cards (boolean) - If true, include only items that accept gift cards
* preferred_seller (boolean) - If true, include only items by Reverb Preferred Sellers
* shop (string) - Slug of shop to search
* shop_id (string) - ID of shop to search
* listing_type (string) - Type of listing: auctions,offers
* ships_to (string) - Limit search to items that ship to this country code
* exclude_auctions (boolean) - If true, exclude auctions
* accepts_payment_plans (boolean) - If true, only show items that can be purchased with a payment plan
* watchers_count_min (integer) - Minimum number of watchers (used to find popular items)
* not_ids (array) - Listing ID negation. If you want to exclude a listing, add it here.
* state (string) - Available: ["all", "draft", "ended", "live", "ordered", "sold_out", "suspended", "seller_unavailable"]. Defaults to 'live'
* sku (string) - Find a listing by sku

### my.listings.drafts.get
Retrieve a list your draft listings


```js
reverb.my.listings.drafts.get({}, context)
```

#### Parameters
* query (string) - Search query.
* auction_price_max (number) - Maximum current auction price
* category (string) - Category slug from /api/categories
* product_type (string) - Product type slug from /api/categories
* conditions (array) - Condition: all,new,b-stock,used,non-functioning
* decade (string) - Decade: e.g. 1970s, early 70s
* finish (string) - Visual finish of the item, common for guitars
* handmade (boolean) - Handmade items only
* item_city (string) - City where item is located
* item_country (string) - DEPRECATED - Country code where item is located
* item_region (string) - Country code where item is located
* item_state (string) - State or region code where item is located
* make (array) - Make(s)/brand of item (e.g. Fender). Can take a single value or an array.
* model (string) - Model of item (e.g. Stratocaster)
* must_not (string) - Search term negation. If you want to exclude a term, add it here
* price_max (number) - Maximum price of search results (USD)
* price_min (number) - Minimum price of search results (USD)
* currency (string) - The currency to be used for the price filters
* year_max (integer) - Maximum year of manufacture
* year_min (integer) - Minumum year of manufacture
* accepts_gift_cards (boolean) - If true, include only items that accept gift cards
* preferred_seller (boolean) - If true, include only items by Reverb Preferred Sellers
* shop (string) - Slug of shop to search
* shop_id (string) - ID of shop to search
* listing_type (string) - Type of listing: auctions,offers
* ships_to (string) - Limit search to items that ship to this country code
* exclude_auctions (boolean) - If true, exclude auctions
* accepts_payment_plans (boolean) - If true, only show items that can be purchased with a payment plan
* watchers_count_min (integer) - Minimum number of watchers (used to find popular items)
* not_ids (array) - Listing ID negation. If you want to exclude a listing, add it here.

### my.listings.negotiations.get
Get a list of active negotiations as a seller


```js
reverb.my.listings.negotiations.get({}, context)
```

#### Parameters
* page (integer)
* per_page (integer)
* offset (integer)

### my.listings.slug.state.end.put
End a listing


```js
reverb.my.listings.slug.state.end.put({
  "slug": ""
}, context)
```

#### Parameters
* slug (string) **required**
* body (object)

### my.lists.get
Get a list of your lists (wishlist, watch list, etc)


```js
reverb.my.lists.get(null, context)
```

#### Parameters
*This action has no parameters*

### my.negotiations.buying.get
Get a list of active negotiations as a buyer


```js
reverb.my.negotiations.buying.get({}, context)
```

#### Parameters
* page (integer)
* per_page (integer)
* offset (integer)

### my.negotiations.id.get
Get offer details


```js
reverb.my.negotiations.id.get({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required**

### my.negotiations.id.accept.post
Accept an offer


```js
reverb.my.negotiations.id.accept.post({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required**
* body (object)

### my.negotiations.id.counter.post
Counter an offer


```js
reverb.my.negotiations.id.counter.post({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required**
* body (object)

### my.negotiations.id.decline.post
Decline an offer


```js
reverb.my.negotiations.id.decline.post({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required**

### my.orders.awaiting_feedback.get
List of orders that need feedback


```js
reverb.my.orders.awaiting_feedback.get(null, context)
```

#### Parameters
*This action has no parameters*

### my.orders.buying.all.get
Returns all orders, newest first.


```js
reverb.my.orders.buying.all.get(null, context)
```

#### Parameters
*This action has no parameters*

### my.orders.buying.unpaid.get
Returns unpaid orders, newest first.


```js
reverb.my.orders.buying.unpaid.get(null, context)
```

#### Parameters
*This action has no parameters*

### my.orders.buying.id.get
Returns order details for a buyer


```js
reverb.my.orders.buying.id.get({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required**

### my.orders.buying.id.mark_received.post
Marks an order as received by the buyer


```js
reverb.my.orders.buying.id.mark_received.post({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required**

### my.orders.selling.all.get
Get all seller orders, newest first.


```js
reverb.my.orders.selling.all.get({}, context)
```

#### Parameters
* created_start_date (string) - Filter by date created in ISO8601 format - e.g: 2015-04-09T10:52:23-00:00
* created_end_date (string) - Filter by date created in ISO8601 format - e.g: 2015-04-09T10:52:23-00:00
* updated_start_date (string) - Filter by date modified in ISO8601 format - e.g: 2015-04-09T10:52:23-00:00
* updated_end_date (string) - Filter by date modified in ISO8601 format - e.g: 2015-04-09T10:52:23-00:00
* page (integer)
* per_page (integer)
* offset (integer)

### my.orders.selling.awaiting_shipment.get
Get seller orders awaiting shipment, newest first.


```js
reverb.my.orders.selling.awaiting_shipment.get({}, context)
```

#### Parameters
* created_start_date (string) - Filter by date created in ISO8601 format - e.g: 2015-04-09T10:52:23-00:00
* created_end_date (string) - Filter by date created in ISO8601 format - e.g: 2015-04-09T10:52:23-00:00
* updated_start_date (string) - Filter by date modified in ISO8601 format - e.g: 2015-04-09T10:52:23-00:00
* updated_end_date (string) - Filter by date modified in ISO8601 format - e.g: 2015-04-09T10:52:23-00:00
* page (integer)
* per_page (integer)
* offset (integer)

### my.orders.selling.buyer_history.buyer_id.get
See previous orders from buyer


```js
reverb.my.orders.selling.buyer_history.buyer_id.get({
  "buyer_id": ""
}, context)
```

#### Parameters
* buyer_id (string) **required**

### my.orders.selling.unpaid.get
Get unpaid seller orders, newest first.


```js
reverb.my.orders.selling.unpaid.get({}, context)
```

#### Parameters
* created_start_date (string) - Filter by date created in ISO8601 format - e.g: 2015-04-09T10:52:23-00:00
* created_end_date (string) - Filter by date created in ISO8601 format - e.g: 2015-04-09T10:52:23-00:00
* updated_start_date (string) - Filter by date modified in ISO8601 format - e.g: 2015-04-09T10:52:23-00:00
* updated_end_date (string) - Filter by date modified in ISO8601 format - e.g: 2015-04-09T10:52:23-00:00
* page (integer)
* per_page (integer)
* offset (integer)

### my.orders.selling.id.get
Returns order details for a seller


```js
reverb.my.orders.selling.id.get({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required**

### my.orders.selling.id.mark_picked_up.post
Marks an order as picked up


```js
reverb.my.orders.selling.id.mark_picked_up.post({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required**
* body (object)

### my.orders.selling.id.ship.post
Marks an order as shipped


```js
reverb.my.orders.selling.id.ship.post({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required**
* body (object)

### my.orders.selling.order_id.refund_requests.post
Initiate a refund for a sold order


```js
reverb.my.orders.selling.order_id.refund_requests.post({
  "order_id": ""
}, context)
```

#### Parameters
* order_id (string) **required**

### my.payments.selling.get
Get payments


```js
reverb.my.payments.selling.get({}, context)
```

#### Parameters
* page (integer)
* per_page (integer)
* offset (integer)
* created_start_date (string) - Filter by date created in ISO8601 format - e.g: 2015-04-09T10:52:23-00:00
* created_end_date (string) - Filter by date created in ISO8601 format - e.g: 2015-04-09T10:52:23-00:00
* updated_start_date (string) - Filter by date modified in ISO8601 format - e.g: 2015-04-09T10:52:23-00:00
* updated_end_date (string) - Filter by date modified in ISO8601 format - e.g: 2015-04-09T10:52:23-00:00
* order_id (string) - Look up payments by order id

### my.payments.selling.id.get
Get payment


```js
reverb.my.payments.selling.id.get({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required**

### my.refund_requests.selling.get
Get a list of refund requests as a seller


```js
reverb.my.refund_requests.selling.get(null, context)
```

#### Parameters
*This action has no parameters*

### my.refund_requests.selling.id.put
Update a refund request for a sold order


```js
reverb.my.refund_requests.selling.id.put({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required**

### my.viewed_listings.get
Get a list of your recently viewed listings.


```js
reverb.my.viewed_listings.get(null, context)
```

#### Parameters
*This action has no parameters*

### my.wishlist.get
Get a list of wishlisted items


```js
reverb.my.wishlist.get(null, context)
```

#### Parameters
*This action has no parameters*

### my.wishlist.id.delete
Remove a listing from your wishlist


```js
reverb.my.wishlist.id.delete({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required**

### my.wishlist.id.put
Add a listing to your wishlist


```js
reverb.my.wishlist.id.put({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required**

### orders.order_id.feedback.buyer.get
Feedback details for an order's buyer


```js
reverb.orders.order_id.feedback.buyer.get({
  "order_id": ""
}, context)
```

#### Parameters
* order_id (string) **required**

### orders.order_id.feedback.buyer.post
Add feedback about an order's buyer


```js
reverb.orders.order_id.feedback.buyer.post({
  "order_id": ""
}, context)
```

#### Parameters
* order_id (string) **required**

### orders.order_id.feedback.seller.get
Feedback details for an order's seller


```js
reverb.orders.order_id.feedback.seller.get({
  "order_id": ""
}, context)
```

#### Parameters
* order_id (string) **required**

### orders.order_id.feedback.seller.post
Add feedback about an order's seller


```js
reverb.orders.order_id.feedback.seller.post({
  "order_id": ""
}, context)
```

#### Parameters
* order_id (string) **required**

### payment_methods.get
Get list of payment methods


```js
reverb.payment_methods.get(null, context)
```

#### Parameters
*This action has no parameters*

### priceguide.get
Search the Price Guide


```js
reverb.priceguide.get({}, context)
```

#### Parameters
* query (string) - Search query.

### priceguide.id.get
Retrieve a Price Guide


```js
reverb.priceguide.id.get({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required**

### priceguide.id.transactions.get
Get a list of paginated transactions for a price guide.


```js
reverb.priceguide.id.transactions.get({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required**
* condition (string)

### priceguide.id.transactions.summary.get
Get a summary of transactions for a given price guide


```js
reverb.priceguide.id.transactions.summary.get({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required**
* number_of_months (integer)
* condition (string)

### products.reviews.id.get
View a review


```js
reverb.products.reviews.id.get({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required**

### products.reviews.id.put
Update a review


```js
reverb.products.reviews.id.put({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required**
* body (object)

### products.slug.reviews.get
View reviews of a product


```js
reverb.products.slug.reviews.get({
  "slug": ""
}, context)
```

#### Parameters
* slug (string) **required**

### products.slug.reviews.post
Create a review for a product


```js
reverb.products.slug.reviews.post({
  "slug": ""
}, context)
```

#### Parameters
* slug (string) **required**

### sales.reverb.get
View upcoming and live Reverb official sales.


```js
reverb.sales.reverb.get(null, context)
```

#### Parameters
*This action has no parameters*

### sales.seller.get
View your created sales.


```js
reverb.sales.seller.get(null, context)
```

#### Parameters
*This action has no parameters*

### sales.sale_id.listings.delete
Remove a listing from a sale


```js
reverb.sales.sale_id.listings.delete({
  "sale_id": ""
}, context)
```

#### Parameters
* sale_id (string) **required**

### sales.sale_id.listings.post
Add listings to a sale


```js
reverb.sales.sale_id.listings.post({
  "sale_id": ""
}, context)
```

#### Parameters
* sale_id (string) **required**

### sales.slug.get



```js
reverb.sales.slug.get({
  "slug": ""
}, context)
```

#### Parameters
* slug (string) **required**

### shipping.providers.get
List of supported shipping providers


```js
reverb.shipping.providers.get(null, context)
```

#### Parameters
*This action has no parameters*

### shipping.regions.get



```js
reverb.shipping.regions.get(null, context)
```

#### Parameters
*This action has no parameters*

### shop.get
Get your own shop details


```js
reverb.shop.get(null, context)
```

#### Parameters
*This action has no parameters*

### shop.put
Update your shop profile


```js
reverb.shop.put({}, context)
```

#### Parameters
* body (object)

### shop.listing_conditions.get
List of supported product conditions


```js
reverb.shop.listing_conditions.get(null, context)
```

#### Parameters
*This action has no parameters*

### shop.payment_methods.get
Get accepted payment methods


```js
reverb.shop.payment_methods.get(null, context)
```

#### Parameters
*This action has no parameters*

### shop.vacation.delete
Disable vacation mode. All listings will be re-enabled.


```js
reverb.shop.vacation.delete(null, context)
```

#### Parameters
*This action has no parameters*

### shop.vacation.get
Returns shop vacation status


```js
reverb.shop.vacation.get(null, context)
```

#### Parameters
*This action has no parameters*

### shop.vacation.post
Enable vacation mode. All listings will be unavailable until vacation mode is turned off.


```js
reverb.shop.vacation.post(null, context)
```

#### Parameters
*This action has no parameters*

### shops.shop_id.shipping_profiles.get
List of shipping profiles for your shop


```js
reverb.shops.shop_id.shipping_profiles.get({
  "shop_id": ""
}, context)
```

#### Parameters
* shop_id (string) **required**

### shops.slug.get
Get details on a shop.


```js
reverb.shops.slug.get({
  "slug": ""
}, context)
```

#### Parameters
* slug (string) **required**
* include_listing_count (boolean) - Include the live listing count in the response.

### shops.slug.feedback.get
Get seller's feedback


```js
reverb.shops.slug.feedback.get({
  "slug": ""
}, context)
```

#### Parameters
* slug (string) **required**

### shops.slug.feedback.buyer.get
Get seller's feedback as a buyer


```js
reverb.shops.slug.feedback.buyer.get({
  "slug": ""
}, context)
```

#### Parameters
* slug (string) **required**

### shops.slug.feedback.seller.get
Get seller's feedback as a seller


```js
reverb.shops.slug.feedback.seller.get({
  "slug": ""
}, context)
```

#### Parameters
* slug (string) **required**

### wants.get
A list of wanted items by the user


```js
reverb.wants.get(null, context)
```

#### Parameters
*This action has no parameters*

### wants.id.delete
Unmark an item wanted.


```js
reverb.wants.id.delete({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required**

### wants.id.put
Mark an item wanted. Returns 200 on success or 422 on failure.


```js
reverb.wants.id.put({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required**

### webhooks.registrations.get
Get webhook registrations


```js
reverb.webhooks.registrations.get(null, context)
```

#### Parameters
*This action has no parameters*

### webhooks.registrations.post
Register a webhook


```js
reverb.webhooks.registrations.post({}, context)
```

#### Parameters
* body (object)

### webhooks.registrations.id.delete
Remove a webhook


```js
reverb.webhooks.registrations.id.delete({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required**

### webhooks.registrations.id.get
Get details of a webhook registration


```js
reverb.webhooks.registrations.id.get({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required**

