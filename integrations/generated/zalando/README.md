# @datafire/zalando

Client library for Zalando Shop

## Installation and Usage
```bash
npm install --save datafire @datafire/zalando
```

```js
let datafire = require('datafire');
let zalando = require('@datafire/zalando').create();

zalando.filters.get({}).then(data => {
  console.log(data);
})
```

## Description
The shop API empowers developers to build amazing new apps or websites using Zalando shop data and services.

## Actions
### article_reviews.get
Zalando API Article Reviews Schema


```js
zalando.article_reviews.get({}, context)
```

#### Parameters
* articleId (array) - Article IDs. A list of config SKUs for which the article reviews will be returned.
* articleModelId (array) - Article model IDs. A list of model SKUs for which the article reviews will be returned.
* minStarRating (string) - To get reviews with minimum star rating.
* maxStarRating (string) - To get reviews with maximum star rating.
* sort (string) - articles are sorted on reviews provided by customers (eg: best)
* page (string) - to request with required page number or pagination
* pageSize (string) - to request with required page size in a page
* Accept-Language (string) - Specify which Shop to use.
* fields (array) - Comma separated list of fields that should be returned. Fields of subobjects are specified with dots as separator. Fields of objects within lists are specified in the same way.

### article_reviews_summaries.get
Zalando API Article Reviews Summaries Schema


```js
zalando.article_reviews_summaries.get({
  "articleModelId": []
}, context)
```

#### Parameters
* articleModelId (array) **required** - Article model IDs. A list of model SKUs for which the article review summaries will be returned.
* page (string) - to request with required page number or pagination
* pageSize (string) - to request with required page size in a page
* Accept-Language (string) - Specify which Shop to use.
* fields (array) - Comma separated list of fields that should be returned. Fields of subobjects are specified with dots as separator. Fields of objects within lists are specified in the same way.

### article_reviews_summaries.articleModelId.get
Zalando API ArticleReviewsSummaries Schema


```js
zalando.article_reviews_summaries.articleModelId.get({
  "articleModelId": ""
}, context)
```

#### Parameters
* articleModelId (string) **required** - To get unique reviews summary from article model Id.
* Accept-Language (string) - Specify which Shop to use.
* fields (array) - Comma separated list of fields that should be returned. Fields of subobjects are specified with dots as separator. Fields of objects within lists are specified in the same way.

### article_reviews.reviewId.get
Zalando API ArticleReviews Schema


```js
zalando.article_reviews.reviewId.get({
  "reviewId": ""
}, context)
```

#### Parameters
* reviewId (string) **required** - To get unique review by review Id.
* Accept-Language (string) - Specify which Shop to use.
* fields (array) - Comma separated list of fields that should be returned. Fields of subobjects are specified with dots as separator. Fields of objects within lists are specified in the same way.

### articles.get
Search for articles based on various different possible filter like e.g. the `brandFamily`, the `catagory` or a
specific `color`. See [Filters](https://todo) for a list of all available filter options.

The default `pageSize` for responses is set to `20`. You can add a `pageSize` request parameter to adjust that.
Please keep in mind that the maximum `pageSize` for this resource is `200`.

The endpoint also supports reducing the fields returned for each article via the `fields` parameter. Please
refer to [fields parameter](https://todo) for more details.


```js
zalando.articles.get({}, context)
```

#### Parameters
* articleId (array) - The `articleIds` to use use for filtering.
* articleModelId (array) - filters by article ModelId
* articleUnitId (array) - filters by article's unit id
* activationDate (array) - period or time the articles are activated for selling in the shop
* ageGroup (array) - filters by age group (eg: kids)
* assortmentArea (array) - filters by classification of articles (eg: maternity) 
* brand (array) - filters by brand key given by user (eg: SA5)
* brandfamily (array) - filters by brand family key (eg: nike) 
* category (array) - filters by category (eg: Socks, Rain Coats)
* color (array) - filters by color (eg: red, blue)
* den (array) - filters by den 
* filling (array) - filters by different kinds of garment filling materials (eg: satin, wolle)
* fullText (string) - filters by text (eg: search by 'as' gives result with articles of brand Sass)
* gender (array) - filters by gender
* heelForm (array) - filters by heel form (eg: flat)
* heelHeight (array) - filters by height of the heel size or length (eg: xs)
* length (string) - filters by garments length (eg: 3/4 length, knee-length)
* occasion (array) - filters by type of occasion (eg: party, business)
* pattern (array) - filters by pattern on the garments (eg: animal print, plain)
* price (string) - filters all articles in price range (eg: 9-90)
* sale (array) - filters discounted articles marked as sale
* season (array) - filters by season (Autumn/Winter or Spring/Summer)
* shaftHeight (array) - filters by shaft height (eg: s, xs)
* shaftWidth (array) - filters by shaft width (eg: s, l)
* shirtCollar (array) - filters by shirt collar styles (eg: low V neck, lined collar)
* shoeFastener (array) - filters by shoe fastener types (eg: buckle, lacing)
* shoeToecap (array) - filters by shoe toe cap variants (eg: pointed, square)
* shopArea (array) - filters by classification of articles
* size (string) - filters by size
* sports (array) - filters by different sport activities (eg: football)
* technology (array) - filters by technology used to produce the articles
* trouserRise (array) - filters by trouser rise
* upperMaterial (array) - filters by different type of upper material used on garments (eg: lace)
* volume (array) - filters by volume
* page (string) - to request with required page number or pagination
* pageSize (string) - to request with required page size in a page
* sort (string) - sorting order (eg: popularity)
* Accept-Language (string) - Specify which Shop to use.
* fields (array) - Comma separated list of fields that should be returned. Fields of subobjects are specified with dots as separator. Fields of objects within lists are specified in the same way.

### articles.articleId.get
Zalando API Article Schema


```js
zalando.articles.articleId.get({
  "articleId": ""
}, context)
```

#### Parameters
* articleId (string) **required** - To get unique article for article Id.
* Accept-Language (string) - Specify which Shop to use.
* fields (array) - Comma separated list of fields that should be returned. Fields of subobjects are specified with dots as separator. Fields of objects within lists are specified in the same way.

### articles.articleId.media.get
Zalando API Article Schema


```js
zalando.articles.articleId.media.get({
  "articleId": ""
}, context)
```

#### Parameters
* articleId (string) **required** - To get unique article for article Id media.
* Accept-Language (string) - Specify which Shop to use.
* fields (array) - Comma separated list of fields that should be returned. Fields of subobjects are specified with dots as separator. Fields of objects within lists are specified in the same way.

### articles.articleId.reviews.get
Zalando API Article Schema


```js
zalando.articles.articleId.reviews.get({
  "articleId": ""
}, context)
```

#### Parameters
* articleId (string) **required** - To get unique article for article Id reviews.
* minStarRating (string) - To get reviews with minimum star rating.
* maxStarRating (string) - To get reviews with maximum star rating.
* sort (string) - articles are sorted on reviews provided by customers (eg: best)
* page (string) - to request with required page number or pagination
* pageSize (string) - to request with required page size in a page
* Accept-Language (string) - Specify which Shop to use.
* fields (array) - Comma separated list of fields that should be returned. Fields of subobjects are specified with dots as separator. Fields of objects within lists are specified in the same way.

### articles.articleId.reviews_summary.get
Zalando API Article Schema


```js
zalando.articles.articleId.reviews_summary.get({
  "articleId": ""
}, context)
```

#### Parameters
* articleId (string) **required** - To get unique article for article Id reviews summary.
* Accept-Language (string) - Specify which Shop to use.
* fields (array) - Comma separated list of fields that should be returned. Fields of subobjects are specified with dots as separator. Fields of objects within lists are specified in the same way.

### articles.articleId.units.get
Zalando API Article Schema


```js
zalando.articles.articleId.units.get({
  "articleId": ""
}, context)
```

#### Parameters
* articleId (string) **required** - To get unique article for article Id units.
* Accept-Language (string) - Specify which Shop to use.
* fields (array) - Comma separated list of fields that should be returned. Fields of subobjects are specified with dots as separator. Fields of objects within lists are specified in the same way.

### articles.articleId.units.unitId.get
Zalando API Article Schema


```js
zalando.articles.articleId.units.unitId.get({
  "articleId": "",
  "unitId": ""
}, context)
```

#### Parameters
* articleId (string) **required** - To get unique article for article Id.
* unitId (string) **required** - To get unique article for article Id unit.
* Accept-Language (string) - Specify which Shop to use.
* fields (array) - Comma separated list of fields that should be returned. Fields of subobjects are specified with dots as separator. Fields of objects within lists are specified in the same way.

### brands.get
Zalando API Brands Schema


```js
zalando.brands.get({}, context)
```

#### Parameters
* key (array) - Request Brand by key
* name (array) - Request Brand by name
* brandFamilyName (array) - Request Brand by brandFamilyName
* brandFamilyKey (array) - Request Brand by brandFamilyKey
* page (string) - to request with required page number or pagination
* pageSize (string) - to request with required page size in a page
* Accept-Language (string) - Specify which Shop to use.
* fields (array) - Comma separated list of fields that should be returned. Fields of subobjects are specified with dots as separator. Fields of objects within lists are specified in the same way.

### brands.key.get
Zalando API Brand Schema


```js
zalando.brands.key.get({
  "key": ""
}, context)
```

#### Parameters
* key (string) **required** - To get unique Brand by key.
* Accept-Language (string) - Specify which Shop to use.
* fields (array) - Comma separated list of fields that should be returned. Fields of subobjects are specified with dots as separator. Fields of objects within lists are specified in the same way.

### categories.get
Zalando API Categories Schema


```js
zalando.categories.get({}, context)
```

#### Parameters
* name (array) - Request Categories by names
* type (string) - Request Categories by type
* outlet (string) - Request Categories by outlet
* hidden (string) - Request Categories by hidden
* targetGroup (string) - Request Categories by target group
* key (array) - Request Categories by keys
* parentKey (array) - Request Categories by parent keys
* childKey (array) - Request Categories by child keys
* suggestedFilter (array) - Request Categories by suggested filters
* page (string) - to request with required page number or pagination
* pageSize (string) - to request with required page size in a page
* Accept-Language (string) - Specify which Shop to use.
* fields (array) - Comma separated list of fields that should be returned. Fields of subobjects are specified with dots as separator. Fields of objects within lists are specified in the same way.

### categories.key.get
Zalando API Category Schema


```js
zalando.categories.key.get({
  "key": []
}, context)
```

#### Parameters
* key (array) **required** - To get unique Category by key.
* Accept-Language (string) - Specify which Shop to use.
* fields (array) - Comma separated list of fields that should be returned. Fields of subobjects are specified with dots as separator. Fields of objects within lists are specified in the same way.

### domains.get
Zalando API Domains Schema


```js
zalando.domains.get(null, context)
```

#### Parameters
*This action has no parameters*

### facets.get
Zalando API Facets Schema


```js
zalando.facets.get({}, context)
```

#### Parameters
* ageGroup (array) - filters by age group (eg: kids)
* articleId (array) - The `articleIds` to use use for filtering.
* activationDate (array) - period or time the articles are activated for selling in the shop
* articleModelId (array) - filters by article ModelId
* assortmentArea (array) - filters by classification of articles (eg: maternity) 
* brand (array) - filters by brand key given by user (eg: SA5)
* brandfamily (array) - filters by brand family key (eg: nike) 
* category (array) - filters by category (eg: Socks, Rain Coats)
* color (array) - filters by color (eg: red, blue)
* den (array) - filters by den 
* filling (array) - filters by different kinds of garment filling materials (eg: satin, wolle)
* gender (array) - filters by gender
* heelForm (array) - filters by heel form (eg: flat)
* heelHeight (array) - filters by height of the heel size or length (eg: xs)
* length (string) - filters by garments length (eg: 3/4 length, knee-length)
* occasion (array) - filters by type of occasion (eg: party, business)
* pattern (array) - filters by pattern on the garments (eg: animal print, plain)
* price (string) - filters all articles in price range (eg: 9-90)
* sale (array) - filters discounted articles marked as sale
* season (array) - filters by season (Autumn/Winter or Spring/Summer)
* shaftHeight (array) - filters by shaft height (eg: s, xs)
* shaftWidth (array) - filters by shaft width (eg: s, l)
* shirtCollar (array) - filters by shirt collar styles (eg: low V neck, lined collar)
* shoeFastener (array) - filters by shoe fastener types (eg: buckle, lacing)
* shoeToecap (array) - filters by shoe toe cap variants (eg: pointed, square)
* shopArea (array) - filters by classification of articles
* size (string) - filters by size
* sports (array) - filters by different sport activities (eg: football)
* technology (array) - filters by technology used to produce the articles
* trouserRise (array) - filters by trouser rise
* upperMaterial (array) - filters by different type of upper material used on garments (eg: lace)
* volume (array) - filters by volume
* Accept-Language (string) - Specify which Shop to use.
* fields (array) - Comma separated list of fields that should be returned. Fields of subobjects are specified with dots as separator. Fields of objects within lists are specified in the same way.

### filters.get
Zalando API Filters Schema


```js
zalando.filters.get({}, context)
```

#### Parameters
* Accept-Language (string) - Specify which Shop to use.
* fields (array) - Comma separated list of fields that should be returned. Fields of subobjects are specified with dots as separator. Fields of objects within lists are specified in the same way.

### filters.filterName.get
Zalando API Filters Schema


```js
zalando.filters.filterName.get({
  "filterName": ""
}, context)
```

#### Parameters
* filterName (string) **required** - To get Filter by filterName.
* Accept-Language (string) - Specify which Shop to use.
* fields (array) - Comma separated list of fields that should be returned. Fields of subobjects are specified with dots as separator. Fields of objects within lists are specified in the same way.

### recommendations.articleIds.get
Zalando API Recommendations Schema


```js
zalando.recommendations.articleIds.get({
  "articleIds": []
}, context)
```

#### Parameters
* articleIds (array) **required** - To get Recommendations by articleIds.
* maxResults (string) - To get maximum results of Recommendations by articleId.
* Accept-Language (string) - Specify which Shop to use.
* fields (array) - Comma separated list of fields that should be returned. Fields of subobjects are specified with dots as separator. Fields of objects within lists are specified in the same way.

