# @datafire/zalando

Client library for Zalando Shop

## Installation and Usage
```bash
npm install --save @datafire/zalando
```
```js
let zalando = require('@datafire/zalando').create();

.then(data => {
  console.log(data);
});
```

## Description

The shop API empowers developers to build amazing new apps or websites using Zalando shop data and services.

## Actions

### article_reviews.get
Zalando API Article Reviews Schema


```js
zalando.article_reviews.get({}, context)
```

#### Input
* input `object`
  * articleId `array`: Article IDs. A list of config SKUs for which the article reviews will be returned.
  * articleModelId `array`: Article model IDs. A list of model SKUs for which the article reviews will be returned.
  * minStarRating `string`: To get reviews with minimum star rating.
  * maxStarRating `string`: To get reviews with maximum star rating.
  * sort `string` (values: newest, best, worst, most_helpful): articles are sorted on reviews provided by customers (eg: best)
  * page `string`: to request with required page number or pagination
  * pageSize `string`: to request with required page size in a page
  * Accept-Language `string` (values: da-DK, de-AT, de-CH, de-DE, en-GB, es-ES, fi-FI, fr-BE, fr-CH, fr-FR, it-IT, nl-BE, nl-NL, no-NO, pl-PL, sv-SE): Specify which Shop to use.
  * fields `array`: Comma separated list of fields that should be returned. Fields of subobjects are specified with dots as separator. Fields of objects within lists are specified in the same way.

#### Output
* output [Article-Reviews](#article-reviews)

### article_reviews_summaries.get
Zalando API Article Reviews Summaries Schema


```js
zalando.article_reviews_summaries.get({
  "articleModelId": []
}, context)
```

#### Input
* input `object`
  * articleModelId **required** `array`: Article model IDs. A list of model SKUs for which the article review summaries will be returned.
  * page `string`: to request with required page number or pagination
  * pageSize `string`: to request with required page size in a page
  * Accept-Language `string` (values: da-DK, de-AT, de-CH, de-DE, en-GB, es-ES, fi-FI, fr-BE, fr-CH, fr-FR, it-IT, nl-BE, nl-NL, no-NO, pl-PL, sv-SE): Specify which Shop to use.
  * fields `array`: Comma separated list of fields that should be returned. Fields of subobjects are specified with dots as separator. Fields of objects within lists are specified in the same way.

#### Output
* output [Article-Reviews-Summaries](#article-reviews-summaries)

### article_reviews_summaries.articleModelId.get
Zalando API ArticleReviewsSummaries Schema


```js
zalando.article_reviews_summaries.articleModelId.get({
  "articleModelId": ""
}, context)
```

#### Input
* input `object`
  * articleModelId **required** `string`: To get unique reviews summary from article model Id.
  * Accept-Language `string` (values: da-DK, de-AT, de-CH, de-DE, en-GB, es-ES, fi-FI, fr-BE, fr-CH, fr-FR, it-IT, nl-BE, nl-NL, no-NO, pl-PL, sv-SE): Specify which Shop to use.
  * fields `array`: Comma separated list of fields that should be returned. Fields of subobjects are specified with dots as separator. Fields of objects within lists are specified in the same way.

#### Output
* output [Article-Reviews-Summary](#article-reviews-summary)

### article_reviews.reviewId.get
Zalando API ArticleReviews Schema


```js
zalando.article_reviews.reviewId.get({
  "reviewId": ""
}, context)
```

#### Input
* input `object`
  * reviewId **required** `string`: To get unique review by review Id.
  * Accept-Language `string` (values: da-DK, de-AT, de-CH, de-DE, en-GB, es-ES, fi-FI, fr-BE, fr-CH, fr-FR, it-IT, nl-BE, nl-NL, no-NO, pl-PL, sv-SE): Specify which Shop to use.
  * fields `array`: Comma separated list of fields that should be returned. Fields of subobjects are specified with dots as separator. Fields of objects within lists are specified in the same way.

#### Output
* output [Article-Review](#article-review)

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

#### Input
* input `object`
  * articleId `array`: The `articleIds` to use use for filtering.
  * articleModelId `array`: filters by article ModelId
  * articleUnitId `array`: filters by article's unit id
  * activationDate `array`: period or time the articles are activated for selling in the shop
  * ageGroup `array`: filters by age group (eg: kids)
  * assortmentArea `array`: filters by classification of articles (eg: maternity) 
  * brand `array`: filters by brand key given by user (eg: SA5)
  * brandfamily `array`: filters by brand family key (eg: nike) 
  * category `array`: filters by category (eg: Socks, Rain Coats)
  * color `array`: filters by color (eg: red, blue)
  * den `array`: filters by den 
  * filling `array`: filters by different kinds of garment filling materials (eg: satin, wolle)
  * fullText `string`: filters by text (eg: search by 'as' gives result with articles of brand Sass)
  * gender `array`: filters by gender
  * heelForm `array`: filters by heel form (eg: flat)
  * heelHeight `array`: filters by height of the heel size or length (eg: xs)
  * length `string`: filters by garments length (eg: 3/4 length, knee-length)
  * occasion `array`: filters by type of occasion (eg: party, business)
  * pattern `array`: filters by pattern on the garments (eg: animal print, plain)
  * price `string`: filters all articles in price range (eg: 9-90)
  * sale `array`: filters discounted articles marked as sale
  * season `array`: filters by season (Autumn/Winter or Spring/Summer)
  * shaftHeight `array`: filters by shaft height (eg: s, xs)
  * shaftWidth `array`: filters by shaft width (eg: s, l)
  * shirtCollar `array`: filters by shirt collar styles (eg: low V neck, lined collar)
  * shoeFastener `array`: filters by shoe fastener types (eg: buckle, lacing)
  * shoeToecap `array`: filters by shoe toe cap variants (eg: pointed, square)
  * shopArea `array`: filters by classification of articles
  * size `string`: filters by size
  * sports `array`: filters by different sport activities (eg: football)
  * technology `array`: filters by technology used to produce the articles
  * trouserRise `array`: filters by trouser rise
  * upperMaterial `array`: filters by different type of upper material used on garments (eg: lace)
  * volume `array`: filters by volume
  * page `string`: to request with required page number or pagination
  * pageSize `string`: to request with required page size in a page
  * sort `string` (values: popularity, activationdate, pricedesc, priceasc, sale): sorting order (eg: popularity)
  * Accept-Language `string` (values: da-DK, de-AT, de-CH, de-DE, en-GB, es-ES, fi-FI, fr-BE, fr-CH, fr-FR, it-IT, nl-BE, nl-NL, no-NO, pl-PL, sv-SE): Specify which Shop to use.
  * fields `array`: Comma separated list of fields that should be returned. Fields of subobjects are specified with dots as separator. Fields of objects within lists are specified in the same way.

#### Output
* output [Articles](#articles)

### articles.articleId.get
Zalando API Article Schema


```js
zalando.articles.articleId.get({
  "articleId": ""
}, context)
```

#### Input
* input `object`
  * articleId **required** `string`: To get unique article for article Id.
  * Accept-Language `string` (values: da-DK, de-AT, de-CH, de-DE, en-GB, es-ES, fi-FI, fr-BE, fr-CH, fr-FR, it-IT, nl-BE, nl-NL, no-NO, pl-PL, sv-SE): Specify which Shop to use.
  * fields `array`: Comma separated list of fields that should be returned. Fields of subobjects are specified with dots as separator. Fields of objects within lists are specified in the same way.

#### Output
* output [Article](#article)

### articles.articleId.media.get
Zalando API Article Schema


```js
zalando.articles.articleId.media.get({
  "articleId": ""
}, context)
```

#### Input
* input `object`
  * articleId **required** `string`: To get unique article for article Id media.
  * Accept-Language `string` (values: da-DK, de-AT, de-CH, de-DE, en-GB, es-ES, fi-FI, fr-BE, fr-CH, fr-FR, it-IT, nl-BE, nl-NL, no-NO, pl-PL, sv-SE): Specify which Shop to use.
  * fields `array`: Comma separated list of fields that should be returned. Fields of subobjects are specified with dots as separator. Fields of objects within lists are specified in the same way.

#### Output
* output [Article-Media](#article-media)

### articles.articleId.reviews.get
Zalando API Article Schema


```js
zalando.articles.articleId.reviews.get({
  "articleId": ""
}, context)
```

#### Input
* input `object`
  * articleId **required** `string`: To get unique article for article Id reviews.
  * minStarRating `string`: To get reviews with minimum star rating.
  * maxStarRating `string`: To get reviews with maximum star rating.
  * sort `string` (values: newest, best, worst, most_helpful): articles are sorted on reviews provided by customers (eg: best)
  * page `string`: to request with required page number or pagination
  * pageSize `string`: to request with required page size in a page
  * Accept-Language `string` (values: da-DK, de-AT, de-CH, de-DE, en-GB, es-ES, fi-FI, fr-BE, fr-CH, fr-FR, it-IT, nl-BE, nl-NL, no-NO, pl-PL, sv-SE): Specify which Shop to use.
  * fields `array`: Comma separated list of fields that should be returned. Fields of subobjects are specified with dots as separator. Fields of objects within lists are specified in the same way.

#### Output
* output [Article-Reviews](#article-reviews)

### articles.articleId.reviews_summary.get
Zalando API Article Schema


```js
zalando.articles.articleId.reviews_summary.get({
  "articleId": ""
}, context)
```

#### Input
* input `object`
  * articleId **required** `string`: To get unique article for article Id reviews summary.
  * Accept-Language `string` (values: da-DK, de-AT, de-CH, de-DE, en-GB, es-ES, fi-FI, fr-BE, fr-CH, fr-FR, it-IT, nl-BE, nl-NL, no-NO, pl-PL, sv-SE): Specify which Shop to use.
  * fields `array`: Comma separated list of fields that should be returned. Fields of subobjects are specified with dots as separator. Fields of objects within lists are specified in the same way.

#### Output
* output [Article-Reviews-Summary](#article-reviews-summary)

### articles.articleId.units.get
Zalando API Article Schema


```js
zalando.articles.articleId.units.get({
  "articleId": ""
}, context)
```

#### Input
* input `object`
  * articleId **required** `string`: To get unique article for article Id units.
  * Accept-Language `string` (values: da-DK, de-AT, de-CH, de-DE, en-GB, es-ES, fi-FI, fr-BE, fr-CH, fr-FR, it-IT, nl-BE, nl-NL, no-NO, pl-PL, sv-SE): Specify which Shop to use.
  * fields `array`: Comma separated list of fields that should be returned. Fields of subobjects are specified with dots as separator. Fields of objects within lists are specified in the same way.

#### Output
* output [Article-Units](#article-units)

### articles.articleId.units.unitId.get
Zalando API Article Schema


```js
zalando.articles.articleId.units.unitId.get({
  "articleId": "",
  "unitId": ""
}, context)
```

#### Input
* input `object`
  * articleId **required** `string`: To get unique article for article Id.
  * unitId **required** `string`: To get unique article for article Id unit.
  * Accept-Language `string` (values: da-DK, de-AT, de-CH, de-DE, en-GB, es-ES, fi-FI, fr-BE, fr-CH, fr-FR, it-IT, nl-BE, nl-NL, no-NO, pl-PL, sv-SE): Specify which Shop to use.
  * fields `array`: Comma separated list of fields that should be returned. Fields of subobjects are specified with dots as separator. Fields of objects within lists are specified in the same way.

#### Output
* output [Article-Unit](#article-unit)

### brands.get
Zalando API Brands Schema


```js
zalando.brands.get({}, context)
```

#### Input
* input `object`
  * key `array`: Request Brand by key
  * name `array`: Request Brand by name
  * brandFamilyName `array`: Request Brand by brandFamilyName
  * brandFamilyKey `array`: Request Brand by brandFamilyKey
  * page `string`: to request with required page number or pagination
  * pageSize `string`: to request with required page size in a page
  * Accept-Language `string` (values: da-DK, de-AT, de-CH, de-DE, en-GB, es-ES, fi-FI, fr-BE, fr-CH, fr-FR, it-IT, nl-BE, nl-NL, no-NO, pl-PL, sv-SE): Specify which Shop to use.
  * fields `array`: Comma separated list of fields that should be returned. Fields of subobjects are specified with dots as separator. Fields of objects within lists are specified in the same way.

#### Output
* output [Brands](#brands)

### brands.key.get
Zalando API Brand Schema


```js
zalando.brands.key.get({
  "key": ""
}, context)
```

#### Input
* input `object`
  * key **required** `string`: To get unique Brand by key.
  * Accept-Language `string` (values: da-DK, de-AT, de-CH, de-DE, en-GB, es-ES, fi-FI, fr-BE, fr-CH, fr-FR, it-IT, nl-BE, nl-NL, no-NO, pl-PL, sv-SE): Specify which Shop to use.
  * fields `array`: Comma separated list of fields that should be returned. Fields of subobjects are specified with dots as separator. Fields of objects within lists are specified in the same way.

#### Output
* output [Brand](#brand)

### categories.get
Zalando API Categories Schema


```js
zalando.categories.get({}, context)
```

#### Input
* input `object`
  * name `array`: Request Categories by names
  * type `string`: Request Categories by type
  * outlet `string`: Request Categories by outlet
  * hidden `string`: Request Categories by hidden
  * targetGroup `string`: Request Categories by target group
  * key `array`: Request Categories by keys
  * parentKey `array`: Request Categories by parent keys
  * childKey `array`: Request Categories by child keys
  * suggestedFilter `array`: Request Categories by suggested filters
  * page `string`: to request with required page number or pagination
  * pageSize `string`: to request with required page size in a page
  * Accept-Language `string` (values: da-DK, de-AT, de-CH, de-DE, en-GB, es-ES, fi-FI, fr-BE, fr-CH, fr-FR, it-IT, nl-BE, nl-NL, no-NO, pl-PL, sv-SE): Specify which Shop to use.
  * fields `array`: Comma separated list of fields that should be returned. Fields of subobjects are specified with dots as separator. Fields of objects within lists are specified in the same way.

#### Output
* output [Categories](#categories)

### categories.key.get
Zalando API Category Schema


```js
zalando.categories.key.get({
  "key": []
}, context)
```

#### Input
* input `object`
  * key **required** `array`: To get unique Category by key.
  * Accept-Language `string` (values: da-DK, de-AT, de-CH, de-DE, en-GB, es-ES, fi-FI, fr-BE, fr-CH, fr-FR, it-IT, nl-BE, nl-NL, no-NO, pl-PL, sv-SE): Specify which Shop to use.
  * fields `array`: Comma separated list of fields that should be returned. Fields of subobjects are specified with dots as separator. Fields of objects within lists are specified in the same way.

#### Output
* output [Category](#category)

### domains.get
Zalando API Domains Schema


```js
zalando.domains.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`: Zalando API Domains Schema
  * items [Domain](#domain)

### facets.get
Zalando API Facets Schema


```js
zalando.facets.get({}, context)
```

#### Input
* input `object`
  * ageGroup `array`: filters by age group (eg: kids)
  * articleId `array`: The `articleIds` to use use for filtering.
  * activationDate `array`: period or time the articles are activated for selling in the shop
  * articleModelId `array`: filters by article ModelId
  * assortmentArea `array`: filters by classification of articles (eg: maternity) 
  * brand `array`: filters by brand key given by user (eg: SA5)
  * brandfamily `array`: filters by brand family key (eg: nike) 
  * category `array`: filters by category (eg: Socks, Rain Coats)
  * color `array`: filters by color (eg: red, blue)
  * den `array`: filters by den 
  * filling `array`: filters by different kinds of garment filling materials (eg: satin, wolle)
  * gender `array`: filters by gender
  * heelForm `array`: filters by heel form (eg: flat)
  * heelHeight `array`: filters by height of the heel size or length (eg: xs)
  * length `string`: filters by garments length (eg: 3/4 length, knee-length)
  * occasion `array`: filters by type of occasion (eg: party, business)
  * pattern `array`: filters by pattern on the garments (eg: animal print, plain)
  * price `string`: filters all articles in price range (eg: 9-90)
  * sale `array`: filters discounted articles marked as sale
  * season `array`: filters by season (Autumn/Winter or Spring/Summer)
  * shaftHeight `array`: filters by shaft height (eg: s, xs)
  * shaftWidth `array`: filters by shaft width (eg: s, l)
  * shirtCollar `array`: filters by shirt collar styles (eg: low V neck, lined collar)
  * shoeFastener `array`: filters by shoe fastener types (eg: buckle, lacing)
  * shoeToecap `array`: filters by shoe toe cap variants (eg: pointed, square)
  * shopArea `array`: filters by classification of articles
  * size `string`: filters by size
  * sports `array`: filters by different sport activities (eg: football)
  * technology `array`: filters by technology used to produce the articles
  * trouserRise `array`: filters by trouser rise
  * upperMaterial `array`: filters by different type of upper material used on garments (eg: lace)
  * volume `array`: filters by volume
  * Accept-Language `string` (values: da-DK, de-AT, de-CH, de-DE, en-GB, es-ES, fi-FI, fr-BE, fr-CH, fr-FR, it-IT, nl-BE, nl-NL, no-NO, pl-PL, sv-SE): Specify which Shop to use.
  * fields `array`: Comma separated list of fields that should be returned. Fields of subobjects are specified with dots as separator. Fields of objects within lists are specified in the same way.

#### Output
* output [Facets](#facets)

### filters.get
Zalando API Filters Schema


```js
zalando.filters.get({}, context)
```

#### Input
* input `object`
  * Accept-Language `string` (values: da-DK, de-AT, de-CH, de-DE, en-GB, es-ES, fi-FI, fr-BE, fr-CH, fr-FR, it-IT, nl-BE, nl-NL, no-NO, pl-PL, sv-SE): Specify which Shop to use.
  * fields `array`: Comma separated list of fields that should be returned. Fields of subobjects are specified with dots as separator. Fields of objects within lists are specified in the same way.

#### Output
* output [Filters](#filters)

### filters.filterName.get
Zalando API Filters Schema


```js
zalando.filters.filterName.get({
  "filterName": ""
}, context)
```

#### Input
* input `object`
  * filterName **required** `string`: To get Filter by filterName.
  * Accept-Language `string` (values: da-DK, de-AT, de-CH, de-DE, en-GB, es-ES, fi-FI, fr-BE, fr-CH, fr-FR, it-IT, nl-BE, nl-NL, no-NO, pl-PL, sv-SE): Specify which Shop to use.
  * fields `array`: Comma separated list of fields that should be returned. Fields of subobjects are specified with dots as separator. Fields of objects within lists are specified in the same way.

#### Output
* output [Filter](#filter)

### recommendations.articleIds.get
Zalando API Recommendations Schema


```js
zalando.recommendations.articleIds.get({
  "articleIds": []
}, context)
```

#### Input
* input `object`
  * articleIds **required** `array`: To get Recommendations by articleIds.
  * maxResults `string`: To get maximum results of Recommendations by articleId.
  * Accept-Language `string` (values: da-DK, de-AT, de-CH, de-DE, en-GB, es-ES, fi-FI, fr-BE, fr-CH, fr-FR, it-IT, nl-BE, nl-NL, no-NO, pl-PL, sv-SE): Specify which Shop to use.
  * fields `array`: Comma separated list of fields that should be returned. Fields of subobjects are specified with dots as separator. Fields of objects within lists are specified in the same way.

#### Output
* output [Recommendations](#recommendations)



## Definitions

### Article
* Article `object`: A single article
  * activationDate **required** `string`: timestamp the article was available in the Zalando webshop
  * additionalInfos **required** `array`: any additional information of the article 
    * items `string`
  * ageGroups **required** `array`: age group of the article belongs to
    * items `string` (values: BABY, CHILD, TEEN, ADULT)
  * attributes **required** `array`: article attributes
    * items [Article-Attribute](#article-attribute)
  * available **required** `boolean`: will be true if at least one article unit is available
  * brand **required** [Brand](#brand)
  * categoryKeys **required** `array`: category keys of the article belongs to
    * items `string`
  * color **required** `string`: the main color of the article
  * genders **required** `array`: gender of the article belongs to
    * items `string` (values: MALE, FEMALE)
  * id **required** `string`: unique article id
  * media **required** [Article-Media](#article-media)
  * modelId **required** `string`: unique article model id
  * name **required** `string`: article name
  * season **required** `string` (values: SUMMER, WINTER, ALL): collection season the article belongs to
  * seasonYear **required** `string`: collection year the article belongs to. Could be either a year or 'ALL'
  * shopUrl **required** `string`: url of the article within the Zalando webshop
  * tags `array`
    * items `string`
  * units **required** `array`: price of the article
    * items [Article-Unit](#article-unit)

### Article-Attribute
* Article-Attribute `object`: Zalando API Article Attribute Schema
  * name **required** `string`: name of the article attribute
  * values **required** `array`: value of the article attribute
    * items `string`

### Article-Image
* Article-Image `object`: Zalando API Article Image Schema
  * largeHdUrl **required** `string`: large HD image of the article
  * largeUrl **required** `string`: large image of the article
  * mediumHdUrl **required** `string`: medium HD image of the article
  * mediumUrl **required** `string`: medium image of the article
  * orderNumber **required** `integer`: sequence of the article images
  * smallHdUrl **required** `string`: small HD image of the article
  * smallUrl **required** `string`: small image of the article
  * thumbnailHdUrl **required** `string`: thumbnail HD url of the article images
  * type **required** `string`: model or non model type article images

### Article-Media
* Article-Media `object`: Zalando API Article Media Schema
  * images **required** `array`
    * items [Article-Image](#article-image)

### Article-Price
* Article-Price `object`: Zalando API Article Price Schema
  * currency **required** `string`
  * formatted **required** `string`
  * value **required** `number`

### Article-Review
* Article-Review `object`: Zalando API Article Review Schema
  * articleId **required** `string`
  * articleModelId **required** `string`
  * articleSizeRatings `object`
    * BOOTLEG_WIDTH `integer`
    * CHEST `integer`
    * CHEST_GIRTH `integer`
    * COLLAR_SIZE `integer`
    * CUP_SIZE `integer`
    * HIPS_OR_REAR `integer`
    * LEG_FIT `integer`
    * LENGTH `integer`
    * OVERALL `integer`
    * SHOE_WIDTH `integer`
    * SHOULDERS `integer`
    * SLEEVES `integer`
  * created **required** `string`: article review created date and time
  * customerCity `string`: customer city in the article review
  * customerCountry `string`: customer country in the article review
  * customerNickname `string`: Customer short name in the article review
  * description **required** `string`: description of the article review
  * helpfulCount **required** `integer`: customer review helpful count of the article
  * language **required** `string`: language in the article review
  * rating **required** `integer`: customer rating of the article
  * recommend `boolean`: customer recommend to the article
  * reviewId **required** `string`: unique article review id
  * title **required** `string`: title in the article review
  * unhelpfulCount **required** `integer`: customer review unhelpful count of the article

### Article-Reviews
* Article-Reviews `object`: Zalando API Paged Article Reviews Schema
  * content **required** `array`: page content
  * page **required** `integer`: page number
  * size **required** `integer`: total number of elements in a page
  * totalElements **required** `integer`: total elements in the response
  * totalPages **required** `integer`: total number of pages in the response
  * content `array`
    * items [Article-Review](#article-review)

### Article-Reviews-Summaries
* Article-Reviews-Summaries `object`: Zalando API Paged Article Reviews Summaries Schema
  * content **required** `array`: page content
  * page **required** `integer`: page number
  * size **required** `integer`: total number of elements in a page
  * totalElements **required** `integer`: total elements in the response
  * totalPages **required** `integer`: total number of pages in the response
  * content `array`
    * items [Article-Reviews-Summary](#article-reviews-summary)

### Article-Reviews-Summary
* Article-Reviews-Summary `object`: Zalando API Article Reviews Summary Schema
  * articleModelId **required** `string`
  * articleSizeRatings `object`: size rating of the article
    * BOOTLEG_WIDTH `number`
    * CHEST `number`
    * CHEST_GIRTH `number`
    * COLLAR_SIZE `number`
    * CUP_SIZE `number`
    * HIPS_OR_REAR `number`
    * LEG_FIT `number`
    * LENGTH `number`
    * OVERALL `number`
    * SHOE_WIDTH `number`
    * SHOULDERS `number`
    * SLEEVES `number`
  * averageStarRating **required** `number`: average star rating of the article
  * numberOfUserPositiveRecommendations **required** `integer`: number of positive recommendations to the article
  * numberOfUserRecommendations **required** `integer`: number of users recommended to the article
  * numberOfUserReviews **required** `integer`: number of user reviews of the article
  * starRatingDistribution **required** `object`: start rating distribution of the article
    * 1 **required** `integer`
    * 2 **required** `integer`
    * 3 **required** `integer`
    * 4 **required** `integer`
    * 5 **required** `integer`

### Article-Unit
* Article-Unit `object`: Zalando API Article Unit Schema
  * available **required** `boolean`: availability of the article
  * id **required** `string`: article id (sku)
  * originalPrice **required** [Article-Price](#article-price)
  * partnerId `string`: partner id (vendor id) of the article
  * price **required** [Article-Price](#article-price)
  * size **required** `string`: article size
  * stock **required** `integer`: stock of the article

### Article-Units
* Article-Units `array`: Zalando API Article Units Schema
  * items [Article-Unit](#article-unit)

### Articles
* Articles `object`: A simple container object that carries paging information as well as a list of articles on the `content` property.
  * content **required** `array`: page content
  * page **required** `integer`: page number
  * size **required** `integer`: total number of elements in a page
  * totalElements **required** `integer`: total elements in the response
  * totalPages **required** `integer`: total number of pages in the response
  * content `array`
    * items [Article](#article)

### Brand
* Brand `object`: Zalando API Brand Schema
  * brandFamily [BrandFamily](#brandfamily)
  * key **required** `string`: The unique key for a brand
  * logoLargeUrl `string`: The url of the large brand logo within the Zalando web shop
  * logoUrl `string`: The url of the brand logo within the Zalando web shop
  * name **required** `string`: Name of the brand
  * shopUrl **required** `string`: The url of the brand within the Zalando web shop

### BrandFamily
* BrandFamily `object`: Zalando API BrandFamily Schema
  * key **required** `string`: The unique key for a brandFamily
  * name **required** `string`: Name of the brandFamily
  * shopUrl **required** `string`: The url of the brandFamily within the Zalando web shop

### Brands
* Brands `object`: Zalando API Paged Brands Schema
  * content **required** `array`: page content
  * page **required** `integer`: page number
  * size **required** `integer`: total number of elements in a page
  * totalElements **required** `integer`: total elements in the response
  * totalPages **required** `integer`: total number of pages in the response
  * content `array`
    * items [Brand](#brand)

### Categories
* Categories `object`: Zalando API Paged Categories Schema
  * content **required** `array`: page content
  * page **required** `integer`: page number
  * size **required** `integer`: total number of elements in a page
  * totalElements **required** `integer`: total elements in the response
  * totalPages **required** `integer`: total number of pages in the response
  * content `array`
    * items [Category](#category)

### Category
* Category `object`: Zalando API Category Schema
  * childKeys **required** `array`: The list of keys of the child categories
    * items `string`
  * cid `integer`: The numeric ID for a category.
  * hidden `boolean`: The category is hidden and not shown on the Zalando web shop
  * key **required** `string`: The unique key for a category
  * name **required** `string`: Name of the category
  * outlet `boolean`: Containing articles are from last seasons
  * parentKey `string`: The key of the parent category
  * suggestedFilters **required** `array`: list of filter names that are reasonable to use within this category
    * items `string`
  * targetGroup **required** `string` (values: ALL, WOMEN, MEN, KIDS): The target group of the articles from this category
  * type `string`: The type of the category.

### Domain
* Domain `object`: Zalando API Domain Schema
  * countryCode **required** `string`: domain country code
  * currencyCode **required** `string`: domain currency code
  * languageCode **required** `string`: domain language
  * rootCategoryKey **required** `string`: domain root category
  * shopUrl **required** `string`: domain specific url
  * taxRate **required** `number`: domain tax rate

### ErrorDetail
* ErrorDetail `object`
  * invalidName `boolean`
  * invalidValues `array`
    * items `string`
  * key `string`
  * name `string`
  * value `string`

### ErrorMessage
* ErrorMessage `object`
  * errors `array`
    * items [ErrorDetail](#errordetail)
  * message **required** `string`
  * status **required** `integer`

### Facet
* Facet `object`: Zalando API Facet Schema
  * facets **required** `array`: list of the calculated article counts for each filter value
    * items [Facet-Value](#facet-value)
  * filter **required** `string`

### Facet-Value
* Facet-Value `object`: Zalando API FacetValue Schema
  * count **required** `integer`: number of articles matching this filter value
  * displayName **required** `string`
  * key **required** `string`

### Facets
* Facets `array`: Zalando API Facets Schema
  * items [Facet](#facet)

### Filter
* Filter `object`: Zalando API Filter Schema
  * multiValue **required** `boolean`: can this filter be used multiple times with different values in one search request
  * name **required** `string`: The unique name for a filter
  * type **required** `string` (values: SKU, KEY, ENUM, STRING, RANGE): filter enum types
  * values **required** `array`: only if type is 'enum' this list contains all possible filter values
    * items [Filter-Value](#filter-value)

### Filter-Value
* Filter-Value `object`: Zalando API FilterValue Schema
  * displayName **required** `string`: translated display name
  * key **required** `string`: The key for a filterValue. Only unique within one filter

### Filters
* Filters `array`
  * items [Filter](#filter)

### Page
* Page `object`: wrapper object for paged responses
  * content **required** `array`: page content
  * page **required** `integer`: page number
  * size **required** `integer`: total number of elements in a page
  * totalElements **required** `integer`: total elements in the response
  * totalPages **required** `integer`: total number of pages in the response

### Recommendations
* Recommendations `array`: Zalando API Recommendations Schema
  * items [Recommendations-Article](#recommendations-article)

### Recommendations-Article
* Recommendations-Article `object`: Zalando API Recommendation Article Schema
  * id **required** `string`
  * media **required** [Article-Media](#article-media)
  * modelId **required** `string`
  * name **required** `string`
  * shopUrl **required** `string`


