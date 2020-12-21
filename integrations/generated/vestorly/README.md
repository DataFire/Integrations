# @datafire/vestorly

Client library for Vestorly API

## Installation and Usage
```bash
npm install --save @datafire/vestorly
```
```js
let vestorly = require('@datafire/vestorly').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

.then(data => {
  console.log(data);
});
```

## Description

Vestorly Developers API

## Actions

### findAdvisorByID
Returns a single advisor given their ID


```js
vestorly.findAdvisorByID({
  "vestorly_auth": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * vestorly_auth **required** `string`: Vestorly Auth Token
  * access_token `string`: OAuth Token
  * id **required** `string`: Advisor Id to fetch

#### Output
* output [Advisor](#advisor)

### findArticlePhrases
Returns phrases used in Categories


```js
vestorly.findArticlePhrases({
  "vestorly_auth": ""
}, context)
```

#### Input
* input `object`
  * vestorly_auth **required** `string`: Vestorly Auth Token
  * access_token `string`: OAuth Token
  * text_search `string`: Text to search phrases
  * size `integer`: Number of returned phrases
  * from `integer`: Number of phrases to skip

#### Output
* output [ArticlePhrases](#articlephrases)

### findArticles
Returns all articles


```js
vestorly.findArticles({
  "vestorly_auth": ""
}, context)
```

#### Input
* input `object`
  * vestorly_auth **required** `string`: Vestorly Auth Token
  * access_token `string`: OAuth Token
  * limit `integer`: Limit on the number of articles to return
  * text_query `string`: Search query parameter
  * sort_direction `string`: Direction of sort (used with sort_by parameter)
  * sort_by `string`: Field on model to sort by

#### Output
* output [Articles](#articles)

### findArticleByID
Returns a single article


```js
vestorly.findArticleByID({
  "vestorly_auth": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * vestorly_auth **required** `string`: Vestorly Auth Token
  * access_token `string`: OAuth Token
  * id **required** `string`: Article Id to fetch

#### Output
* output [Articleresponse](#articleresponse)

### findCustomFeedFilters
Returns all Categorie's filters


```js
vestorly.findCustomFeedFilters({
  "vestorly_auth": ""
}, context)
```

#### Input
* input `object`
  * vestorly_auth **required** `string`: Vestorly Auth Token
  * access_token `string`: OAuth Token

#### Output
* output [CustomFeedFilters](#customfeedfilters)

### createCustomFeedFilter
Creates a new Category filter


```js
vestorly.createCustomFeedFilter({
  "vestorly_auth": "",
  "custom_feed_filter": null
}, context)
```

#### Input
* input `object`
  * vestorly_auth **required** `string`: Vestorly Auth Token
  * access_token `string`: OAuth Token
  * custom_feed_filter **required** [CustomFeedFilterInput](#customfeedfilterinput)

#### Output
* output [CustomFeedFilterresponse](#customfeedfilterresponse)

### deleteCustomFeedFilter
Deletes the Category's filter


```js
vestorly.deleteCustomFeedFilter({
  "vestorly_auth": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * vestorly_auth **required** `string`: Vestorly Auth Token
  * access_token `string`: OAuth Token
  * id **required** `string`: id of category filter to delete

#### Output
* output [CustomFeedFilterresponse](#customfeedfilterresponse)

### findCustomFeedFilterByID
Returns a single Category's filter


```js
vestorly.findCustomFeedFilterByID({
  "vestorly_auth": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * vestorly_auth **required** `string`: Vestorly Auth Token
  * access_token `string`: OAuth Token
  * id **required** `string`: Custom Feed Filter Id to fetch

#### Output
* output [CustomFeedFilterresponse](#customfeedfilterresponse)

### updateCustomFeedFilterById
Updates a Category Feed Filter


```js
vestorly.updateCustomFeedFilterById({
  "vestorly_auth": "",
  "id": "",
  "custom_feed_filter": null
}, context)
```

#### Input
* input `object`
  * vestorly_auth **required** `string`: Vestorly Auth Token
  * access_token `string`: OAuth Token
  * id **required** `string`: id of category filter to update
  * custom_feed_filter **required** [CustomFeedFilterInput](#customfeedfilterinput)

#### Output
* output [CustomFeedFilterresponse](#customfeedfilterresponse)

### findCustomFeeds
Returns all Categories


```js
vestorly.findCustomFeeds({
  "vestorly_auth": ""
}, context)
```

#### Input
* input `object`
  * vestorly_auth **required** `string`: Vestorly Auth Token
  * access_token `string`: OAuth Token

#### Output
* output [CustomFeeds](#customfeeds)

### createCustomFeed
Creates a new Category


```js
vestorly.createCustomFeed({
  "vestorly_auth": "",
  "custom_feed": null
}, context)
```

#### Input
* input `object`
  * vestorly_auth **required** `string`: Vestorly Auth Token
  * access_token `string`: OAuth Token
  * custom_feed **required** [CustomFeedInput](#customfeedinput)

#### Output
* output [CustomFeedresponse](#customfeedresponse)

### deleteCustomFeed
Deletes a new Category


```js
vestorly.deleteCustomFeed({
  "vestorly_auth": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * vestorly_auth **required** `string`: Vestorly Auth Token
  * access_token `string`: OAuth Token
  * id **required** `string`: id of category to delete

#### Output
* output [CustomFeedresponse](#customfeedresponse)

### findCustomFeedByID
Returns a single Category


```js
vestorly.findCustomFeedByID({
  "vestorly_auth": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * vestorly_auth **required** `string`: Vestorly Auth Token
  * access_token `string`: OAuth Token
  * id **required** `string`: Custom Feed Id to fetch

#### Output
* output [CustomFeedresponse](#customfeedresponse)

### updateCategoryById
Updates a Category


```js
vestorly.updateCategoryById({
  "vestorly_auth": "",
  "id": "",
  "custom_feed": null
}, context)
```

#### Input
* input `object`
  * vestorly_auth **required** `string`: Vestorly Auth Token
  * access_token `string`: OAuth Token
  * id **required** `string`: id of category to update
  * custom_feed **required** [CustomFeedInput](#customfeedinput)

#### Output
* output [CustomFeedresponse](#customfeedresponse)

### findCustomFeedArticles
Returns Articles by Category


```js
vestorly.findCustomFeedArticles({
  "vestorly_auth": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * vestorly_auth **required** `string`: Vestorly Auth Token
  * access_token `string`: OAuth Token
  * id **required** `string`: Category Id to fetch
  * limit `integer`: Limit on the number of articles to return
  * sort_by `string`: Field on model to sort by
  * start `integer`: Field where the fetch will start from
  * created_at_gte_days_ago `string`: Filter retrieved articles since this date
  * text_query `string`: Search query parameter

#### Output
* output [Articles](#articles)

### duplicateCustomFeed
Duplicates Category


```js
vestorly.duplicateCustomFeed({
  "vestorly_auth": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * vestorly_auth **required** `string`: Vestorly Auth Token
  * access_token `string`: OAuth Token
  * id **required** `string`: id of category to duplicate

#### Output
* output [CustomFeedresponse](#customfeedresponse)

### findEvents
Returns all events


```js
vestorly.findEvents({
  "vestorly_auth": ""
}, context)
```

#### Input
* input `object`
  * vestorly_auth **required** `string`: Vestorly Auth Token
  * access_token `string`: OAuth Token

#### Output
* output [Events](#events)

### createEvent
Creates a new event in the system


```js
vestorly.createEvent({
  "vestorly_auth": "",
  "event": null
}, context)
```

#### Input
* input `object`
  * vestorly_auth **required** `string`: Vestorly Auth Token
  * access_token `string`: OAuth Token
  * event **required** [EventInput](#eventinput)

#### Output
* output [Eventcreateresponse](#eventcreateresponse)

### findEventByID
Returns a single event if the user has access


```js
vestorly.findEventByID({
  "id": "",
  "vestorly_auth": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Mongo ID of event to fetch
  * access_token `string`: OAuth Token
  * vestorly_auth **required** `string`: Vestorly Auth Token

#### Output
* output [Eventresponse](#eventresponse)

### findGroups
Returns all groups


```js
vestorly.findGroups({
  "vestorly_auth": ""
}, context)
```

#### Input
* input `object`
  * vestorly_auth **required** `string`: Vestorly Auth Token
  * access_token `string`: OAuth Token

#### Output
* output [Groups](#groups)

### createGroup
Creates a new Group


```js
vestorly.createGroup({
  "vestorly_auth": "",
  "group": null
}, context)
```

#### Input
* input `object`
  * vestorly_auth **required** `string`: Vestorly Auth Token
  * access_token `string`: OAuth Token
  * group **required** [GroupInput](#groupinput)

#### Output
* output [Groupresponse](#groupresponse)

### deleteGroup
Deletes a Group


```js
vestorly.deleteGroup({
  "vestorly_auth": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * vestorly_auth **required** `string`: Vestorly Auth Token
  * access_token `string`: OAuth Token
  * id **required** `string`: id of group to delete

#### Output
* output [Groupresponse](#groupresponse)

### findGroupByID
Returns a single group if user has access


```js
vestorly.findGroupByID({
  "vestorly_auth": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * vestorly_auth **required** `string`: Vestorly Auth Token
  * access_token `string`: OAuth Token
  * id **required** `string`: Mongo ID of group to fetch

#### Output
* output [Groupresponse](#groupresponse)

### updateGroupById
Updates a Group


```js
vestorly.updateGroupById({
  "vestorly_auth": "",
  "id": "",
  "group": null
}, context)
```

#### Input
* input `object`
  * vestorly_auth **required** `string`: Vestorly Auth Token
  * access_token `string`: OAuth Token
  * id **required** `string`: id of group to update
  * group **required** [GroupInput](#groupinput)

#### Output
* output [Groupresponse](#groupresponse)

### findMemberEvents
Returns all MemberEvents


```js
vestorly.findMemberEvents({
  "vestorly_auth": ""
}, context)
```

#### Input
* input `object`
  * vestorly_auth **required** `string`: Vestorly Auth Token
  * access_token `string`: OAuth Token

#### Output
* output [MemberEvents](#memberevents)

### findMemberReports
Returns all member reports


```js
vestorly.findMemberReports({
  "vestorly_auth": ""
}, context)
```

#### Input
* input `object`
  * vestorly_auth **required** `string`: Vestorly Auth Token
  * access_token `string`: OAuth Token

#### Output
* output [MemberReports](#memberreports)

### findMembers
Returns all members


```js
vestorly.findMembers({
  "vestorly_auth": ""
}, context)
```

#### Input
* input `object`
  * vestorly_auth **required** `string`: Vestorly Auth Token
  * access_token `string`: OAuth Token
  * start `integer`: Skips number of members from start
  * limit `integer`: Number of members to return

#### Output
* output [Members](#members)

### createMember
Create a new member in the Vestorly Platform


```js
vestorly.createMember({
  "vestorly_auth": "",
  "member": null
}, context)
```

#### Input
* input `object`
  * vestorly_auth **required** `string`: Vestorly Auth Token
  * access_token `string`: OAuth Token
  * member **required** [Member](#member)

#### Output
* output [Memberresponse](#memberresponse)

### findMemberByID
Returns a single member


```js
vestorly.findMemberByID({
  "id": "",
  "vestorly_auth": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Mongo ID of member to fetch
  * vestorly_auth **required** `string`: Vestorly Auth Token
  * access_token `string`: OAuth Token

#### Output
* output [Memberresponse](#memberresponse)

### updateMemberByID
Updates a single member


```js
vestorly.updateMemberByID({
  "id": "",
  "vestorly_auth": "",
  "member": null
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Mongo ID of member to fetch
  * vestorly_auth **required** `string`: Vestorly Auth Token
  * access_token `string`: OAuth Token
  * member **required** [Member](#member)

#### Output
* output [Memberresponse](#memberresponse)

### findNewsletterSettings
Returns all newsletter settings


```js
vestorly.findNewsletterSettings({
  "vestorly_auth": ""
}, context)
```

#### Input
* input `object`
  * vestorly_auth **required** `string`: Vestorly Auth Token
  * access_token `string`: OAuth Token

#### Output
* output [NewsletterSettings](#newslettersettings)

### findNewsletterSettingsByID
Returns a single newsletter settings if the user has access


```js
vestorly.findNewsletterSettingsByID({
  "id": "",
  "vestorly_auth": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Mongo ID of newsletter settings to fetch
  * vestorly_auth **required** `string`: Vestorly Auth Token
  * access_token `string`: OAuth Token

#### Output
* output [Newslettersettingresponse](#newslettersettingresponse)

### updateNewsletterSettingsByID
Update a single newsletter setting by ID


```js
vestorly.updateNewsletterSettingsByID({
  "id": "",
  "vestorly_auth": "",
  "newsletter_setting": null
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Mongo ID of newsletter settings to update
  * vestorly_auth **required** `string`: Vestorly Auth Token
  * access_token `string`: OAuth Token
  * newsletter_setting **required** [NewsletterSettingsInput](#newslettersettingsinput)

#### Output
* output [Newslettersettingresponse](#newslettersettingresponse)

### findNewsletters
Returns all newsletters


```js
vestorly.findNewsletters({
  "vestorly_auth": ""
}, context)
```

#### Input
* input `object`
  * vestorly_auth **required** `string`: Vestorly Auth Token
  * access_token `string`: OAuth Token

#### Output
* output [Newsletters](#newsletters)

### getNewsletterByID
Get a newsletter by ID


```js
vestorly.getNewsletterByID({
  "vestorly_auth": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * vestorly_auth **required** `string`: Vestorly Auth Token
  * access_token `string`: OAuth Token
  * id **required** `string`: Mongo ID of event to get

#### Output
* output [Newsletterresponse](#newsletterresponse)

### updateNewsletterByID
Updates a newsletter


```js
vestorly.updateNewsletterByID({
  "vestorly_auth": "",
  "id": "",
  "newsletter": null
}, context)
```

#### Input
* input `object`
  * vestorly_auth **required** `string`: Vestorly Auth Token
  * access_token `string`: OAuth Token
  * id **required** `string`: Mongo ID of event to update
  * newsletter **required** [NewsletterInput](#newsletterinput)

#### Output
* output [Newsletterresponse](#newsletterresponse)

### findPosts
Query all posts


```js
vestorly.findPosts({
  "vestorly_auth": ""
}, context)
```

#### Input
* input `object`
  * vestorly_auth **required** `string`: Vestorly Auth Token
  * access_token `string`: OAuth Token
  * text_query `string`: Filter post by parameters
  * external_url `string`: Filter by External URL
  * is_published `string`: Filter by is_published boolean

#### Output
* output [Posts](#posts)

### createPost
Create a new post in the Vestorly Platform


```js
vestorly.createPost({
  "vestorly_auth": "",
  "post": null
}, context)
```

#### Input
* input `object`
  * vestorly_auth **required** `string`: Vestorly Auth Token
  * access_token `string`: OAuth Token
  * post **required** [PostInput](#postinput)

#### Output
* output [Postresponse](#postresponse)

### getPostByID
Query all posts


```js
vestorly.getPostByID({
  "vestorly_auth": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * vestorly_auth **required** `string`: Vestorly Auth Token
  * access_token `string`: OAuth Token
  * id **required** `string`: ID of post to fetch

#### Output
* output [Postresponse](#postresponse)

### updatePostByID
Update A Post


```js
vestorly.updatePostByID({
  "vestorly_auth": "",
  "id": "",
  "post": null
}, context)
```

#### Input
* input `object`
  * vestorly_auth **required** `string`: Vestorly Auth Token
  * access_token `string`: OAuth Token
  * id **required** `string`: id of post to update
  * post **required** [Post](#post)

#### Output
* output [Postresponse](#postresponse)

### findSeedCustomFeeds
Returns all Categories keywords


```js
vestorly.findSeedCustomFeeds({
  "vestorly_auth": ""
}, context)
```

#### Input
* input `object`
  * vestorly_auth **required** `string`: Vestorly Auth Token
  * access_token `string`: OAuth Token

#### Output
* output [SeedCustomFeeds](#seedcustomfeeds)

### createSeedCustomFeed
Creates a new Category Keyword


```js
vestorly.createSeedCustomFeed({
  "vestorly_auth": "",
  "seed_custom_feed": null
}, context)
```

#### Input
* input `object`
  * vestorly_auth **required** `string`: Vestorly Auth Token
  * access_token `string`: OAuth Token
  * seed_custom_feed **required** [SeedCustomFeedInput](#seedcustomfeedinput)

#### Output
* output [SeedCustomFeedresponse](#seedcustomfeedresponse)

### deleteSeedCustomFeed
Deletes a Category keywords


```js
vestorly.deleteSeedCustomFeed({
  "vestorly_auth": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * vestorly_auth **required** `string`: Vestorly Auth Token
  * access_token `string`: OAuth Token
  * id **required** `string`: id of seed category to delete

#### Output
* output [SeedCustomFeedresponse](#seedcustomfeedresponse)

### findSeedCustomFeedByID
Returns a single Category keyword


```js
vestorly.findSeedCustomFeedByID({
  "vestorly_auth": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * vestorly_auth **required** `string`: Vestorly Auth Token
  * access_token `string`: OAuth Token
  * id **required** `string`: Seed Custom Feed Id to fetch

#### Output
* output [SeedCustomFeedresponse](#seedcustomfeedresponse)

### updateSeedCustomFeedById
Updates a Category keywords


```js
vestorly.updateSeedCustomFeedById({
  "vestorly_auth": "",
  "id": "",
  "seed_custom_feed": null
}, context)
```

#### Input
* input `object`
  * vestorly_auth **required** `string`: Vestorly Auth Token
  * access_token `string`: OAuth Token
  * id **required** `string`: id of seed category to update
  * seed_custom_feed **required** [SeedCustomFeedInput](#seedcustomfeedinput)

#### Output
* output [SeedCustomFeedresponse](#seedcustomfeedresponse)

### login
Login To Vestorly Platform


```js
vestorly.login({
  "username": "",
  "password": ""
}, context)
```

#### Input
* input `object`
  * username **required** `string`: Username in the vestorly platform
  * password **required** `string`: Password in Vestorly Platform

#### Output
* output [Session](#session)

### logout
Logout of the vestorly platform


```js
vestorly.logout({
  "vestorly_auth": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * vestorly_auth **required** `string`: Authenication token
  * id **required** `string`: ID of pet to session

#### Output
* output [SessionLogoutResponse](#sessionlogoutresponse)

### findSources
Returns all sources


```js
vestorly.findSources({
  "vestorly_auth": ""
}, context)
```

#### Input
* input `object`
  * vestorly_auth **required** `string`: Vestorly Auth Token
  * access_token `string`: OAuth Token

#### Output
* output [Sources](#sources)

### createSource
Create source


```js
vestorly.createSource({
  "vestorly_auth": "",
  "source": null
}, context)
```

#### Input
* input `object`
  * vestorly_auth **required** `string`: Vestorly Auth Token
  * access_token `string`: OAuth Token
  * source **required** [SourceInput](#sourceinput)

#### Output
* output [Sourceresponse](#sourceresponse)

### getSourceByID
Get Source By ID


```js
vestorly.getSourceByID({
  "vestorly_auth": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * vestorly_auth **required** `string`: Vestorly Auth Token
  * access_token `string`: OAuth Token
  * id **required** `string`: ID of source to fetch

#### Output
* output [Sourceresponse](#sourceresponse)

### updateSourceByID
Update Source By ID


```js
vestorly.updateSourceByID({
  "vestorly_auth": "",
  "id": "",
  "source": null
}, context)
```

#### Input
* input `object`
  * vestorly_auth **required** `string`: Vestorly Auth Token
  * access_token `string`: OAuth Token
  * id **required** `string`: ID of source to fetch
  * source **required** [SourceInput](#sourceinput)

#### Output
* output [Sourceresponse](#sourceresponse)



## Definitions

### Advisor
* Advisor `object`
  * about `string`
  * account_type `string`
  * address `string`
  * adv_brochure `string`
  * api_key `string`
  * city `string`
  * company `string`
  * compliance_bcc_email_address `string`
  * dashboard_url `string`
  * disclosure `string`
  * email_report_blast `string`
  * external_options `string`
  * first_name `string`
  * id **required** `string`
  * last_name `string`
  * linkedin `string`
  * logo `string`
  * name **required** `string`
  * plan `string`
  * profile_picture `string`
  * reg_number `string`
  * state `string`
  * tag `string`
  * twitter_handle `string`
  * website `string`
  * zip `string`

### Advisorresponse
* Advisorresponse `object`
  * advisor [Advisor](#advisor)

### Advisors
* Advisors `object`
  * advisors `array`
    * items [Advisor](#advisor)

### Article
* Article `object`
  * _id **required** `string`
  * body `string`
  * created_at `string`
  * external_url `string`
  * external_url_source `string`
  * external_url_type `string`
  * image_height `integer`
  * image_path `string`
  * image_url `string`
  * image_width `integer`
  * is_mobile_proxy_needed `boolean`
  * is_proxy_needed `boolean`
  * is_responsive `boolean`
  * logo_url `string`
  * needs_sanitize `boolean`
  * proxy_url `string`
  * redirector_link `string`
  * square_logo_url `string`
  * suitability_score `string`
  * summary `string`
  * title **required** `string`
  * topic `string`
  * url `string`

### ArticlePhrase
* ArticlePhrase `object`
  * created_at `integer`
  * length `integer`
  * text `string`

### ArticlePhraseresponse
* ArticlePhraseresponse `object`
  * article_phrase [ArticlePhrase](#articlephrase)

### ArticlePhrases
* ArticlePhrases `object`
  * article_phrases `array`
    * items [ArticlePhrase](#articlephrase)

### Articleresponse
* Articleresponse `object`
  * article [Article](#article)

### Articles
* Articles `object`
  * articles `array`
    * items [Article](#article)

### CustomFeed
* CustomFeed `object`
  * _id **required** `string`
  * custom_feed_filter_id `string`
  * custom_feed_permission_id `string`
  * custom_feed_template_id `string`
  * custom_feed_visibility `integer`
  * default `boolean`
  * display_label `string`
  * is_auto_curated_newsletter_custom_feed `boolean`
  * label **required** `string`
  * links `string`
  * popularity `number`
  * premium_content `boolean`
  * seed_custom_feed_id `string`
  * third_party_articles_custom_feed_id `string`

### CustomFeedFilter
* CustomFeedFilter `object`
  * _id **required** `string`
  * custom_feed_id **required** `string`
  * source_ids `array`
    * items `string`

### CustomFeedFilterInput
* CustomFeedFilterInput `object`
  * custom_feed_id **required** `string`
  * source_ids `array`
    * items `string`

### CustomFeedFilterresponse
* CustomFeedFilterresponse `object`
  * custom_feed_filter [CustomFeedFilter](#customfeedfilter)

### CustomFeedFilters
* CustomFeedFilters `object`
  * custom_feed_filters `array`
    * items [CustomFeedFilter](#customfeedfilter)

### CustomFeedInput
* CustomFeedInput `object`
  * custom_feed_filter_id `string`
  * custom_feed_permission_id `string`
  * custom_feed_visibility `integer`
  * default `boolean`
  * is_auto_curated_newsletter_custom_feed `boolean`
  * label **required** `string`
  * popularity `number`
  * premium_content `boolean`
  * seed_custom_feed_id `string`
  * social_posting_id `string`
  * third_party_articles_custom_feed_id `string`

### CustomFeedresponse
* CustomFeedresponse `object`
  * custom_feed [CustomFeed](#customfeed)

### CustomFeeds
* CustomFeeds `object`
  * custom_feeds `array`
    * items [CustomFeed](#customfeed)

### Event
* Event `object`
  * _id **required** `string`
  * advisor_id `string`
  * created_at `string`
  * event_content [EventContent](#eventcontent)
  * original_url **required** `string`
  * originator_email `string`
  * originator_id `string`
  * parent_event_id `string`
  * referer `string`
  * subject_email **required** `string`
  * subject_id `string`
  * type **required** `string` (values: page_view, sign_up, sign_in, content_posted, create_post, publish_post, update_post, delete_post, unpublish_post, invite, publish_newsletter, publish_social, click, delivered, open, dropped, bounce)

### EventContent
* EventContent `object`
  * _id `string`: Mongo id of event
  * content_field `string`
  * content_id `string`
  * content_type `string`
  * created_at `string`
  * slug `string`
  * updated_at `string`

### EventInput
* EventInput `object`
  * advisor_id `string`
  * created_at `string`
  * event_content [EventContent](#eventcontent)
  * original_url **required** `string`
  * originator_email `string`
  * originator_id `string`
  * parent_event_id `string`
  * referer `string`
  * subject_email **required** `string`
  * subject_id `string`
  * type **required** `string` (values: page_view, sign_up, sign_in, content_posted, create_post, publish_post, update_post, delete_post, unpublish_post, invite, publish_newsletter, publish_social, click, delivered, open, dropped, bounce)

### Eventcreateresponse
* Eventcreateresponse `object`
  * meta [Meta](#meta)

### Eventresponse
* Eventresponse `object`
  * event [Event](#event)

### Events
* Events `object`
  * events `array`
    * items [Event](#event)

### Features
* Features `object`
  * _id **required** `string`

### Group
* Group `object`
  * _id **required** `string`
  * autopublish `boolean`
  * is_default `boolean`
  * is_hidden `boolean`
  * name `string`
  * new_weekly_mailer_content `string`
  * newsletter_subject `string`
  * number_articles_per_group `integer`
  * number_articles_per_newsletter `integer`

### GroupInput
* GroupInput `object`
  * _id **required** `string`
  * autopublish `boolean`
  * is_default `boolean`
  * is_hidden `boolean`
  * name `string`
  * new_weekly_mailer_content `string`
  * newsletter_subject `string`
  * number_articles_per_group `integer`
  * number_articles_per_newsletter `integer`

### Groupresponse
* Groupresponse `object`
  * group [Group](#group)

### Groups
* Groups `object`
  * groups `array`
    * items [Group](#group)

### Member
* Member `object`
  * _id **required** `string`
  * address `string`
  * age `string`
  * assets `string`
  * city `string`
  * data_estimated `boolean`
  * education `string`
  * email **required** `string`
  * estimated_location `string`
  * estimated_zip `string`
  * family `string`
  * first_name `string`
  * gender `string`
  * genuine_email `boolean`
  * high_net_worth `boolean`
  * home_market_value `string`
  * home_owner_status `string`
  * hometown `string`
  * household_income `string`
  * interest_consultation `string`
  * interest_in_new_advisor `string`
  * invited_by `string`
  * invited_on `string`
  * is_client `boolean`
  * is_hidden `boolean`
  * last_active_date `string`
  * last_name `string`
  * location `string`
  * marital_status `string`
  * message `string`
  * occupation `string`
  * phone `string`
  * picture_url `string`
  * portfolio_size `string`
  * profile_url `string`
  * register_ip_addr `string`
  * signed_up_with `string`
  * state `string`
  * subscribed_group_ids `array`
    * items `string`
  * tags `array`
    * items `string`
  * unsubscribed `boolean`
  * unsubscribed_date `boolean`
  * user_type `string`
  * zip `string`

### MemberEvent
* MemberEvent `object`
  * _id `string`
  * content_url `string`
  * created_at `string`
  * event_date `string`
  * event_source `string`
  * event_type `string`
  * member_id `string`
  * original_url `string`
  * originator_email `string`
  * originator_group_id `string`
  * originator_id `string`
  * originator_name `string`
  * originator_type `string`
  * parent_event_id `string`
  * parent_originator_id `string`
  * referer `string`
  * source `string`
  * subject_id `string`
  * type `string`
  * username `string`

### MemberEvents
* MemberEvents `object`
  * member_events `array`
    * items [MemberEvent](#memberevent)
  * members `array`
    * items [TruncatedMember](#truncatedmember)

### MemberReport
* MemberReport `object`
  * day `integer`
  * event_count `integer`
  * originator_group_id `string`
  * parent_originator_id `string`
  * source `string`
  * type `string`
  * year `integer`

### MemberReports
* MemberReports `object`
  * member_reports `array`
    * items [MemberReport](#memberreport)

### Memberresponse
* Memberresponse `object`
  * member [Member](#member)

### Members
* Members `object`
  * members `array`
    * items [Member](#member)
  * meta [Meta](#meta)
  * more_results `boolean`

### Meta
* Meta `object`
  * message `string`

### Newsletter
* Newsletter `object`
  * _id `string`
  * click_count `integer`
  * is_default `boolean`
  * is_sent `boolean`
  * total_click_count `integer`
  * unique_click_count `integer`

### NewsletterInput
* NewsletterInput `object`
  * click_count `integer`
  * is_default `boolean`
  * is_sent `boolean`
  * total_click_count `integer`
  * unique_click_count `integer`

### NewsletterSetting
* NewsletterSetting `object`
  * _id **required** `string`
  * banner_color `string`
  * body_html `string`
  * email_accent_color `string`
  * email_day_of_week `integer`
  * email_hour `integer`
  * email_status `string`
  * facebook_active_wall `string`
  * footer_email_font `string`
  * footer_html `string`
  * footer_image_url `string`
  * group_id `string`
  * header_background_color `string`
  * header_image_url `string`
  * intro_text `string`
  * linkedin_active_wall `string`
  * montage_enabled `boolean`
  * montage_facebook_image_url `string`
  * montage_linkedin_image_url `string`
  * montage_title `string`
  * montage_twitter_image_url `string`
  * newsletter_ids `array`
    * items `string`
  * newsletter_type `string`
  * primary_email_font `string`
  * salutation_text `string`
  * social_day_of_week `integer`
  * social_description `string`
  * social_posting_text `string`
  * social_title `string`
  * subject `string`
  * title_color `string`

### NewsletterSettings
* NewsletterSettings `object`
  * newsletter_settings `array`
    * items [NewsletterSetting](#newslettersetting)

### NewsletterSettingsInput
* NewsletterSettingsInput `object`
  * newsletter_setting [NewsletterSetting](#newslettersetting)

### Newsletterresponse
* Newsletterresponse `object`
  * newsletter [Newsletter](#newsletter)

### Newsletters
* Newsletters `object`
  * newsletters `array`
    * items [Newsletter](#newsletter)

### Newslettersettingresponse
* Newslettersettingresponse `object`
  * newsletter_setting [NewsletterSetting](#newslettersetting)

### OrgSetting
* OrgSetting `object`
  * _id **required** `string`
  * company_address `string`
  * company_contact_email `string`
  * company_homepage_url `string`
  * is_default `boolean`
  * name `string`
  * privacy_policy_url `string`
  * site_url `string`
  * terms_and_conditions_url `string`

### PersonalSettings
* PersonalSettings `object`
  * _id **required** `string`

### Post
* Post `object`
  * _id `string`
  * advisor_id `string`
  * approval_status `string`
  * approval_transactions `array`
    * items `string`
  * article_id `string`
  * comment `string`
  * created_at `string`
  * display_date `string`
  * display_summary `string`
  * display_tag `string`
  * external_url `string`
  * external_url_source `string`
  * external_url_type `string`
  * group_ids `array`
    * items `string`
  * image_height `string`
  * image_path `string`
  * image_url `string`
  * image_width `string`
  * is_featured `boolean`
  * is_mobile_proxy_needed `boolean`
  * is_proxy_needed `boolean`
  * is_published `boolean`
  * is_responsive `boolean`
  * logo_url `string`
  * needs_sanitize `string`
  * newsletter_ids `array`
    * items `string`
  * post_date `string`
  * proxy_url `string`
  * redirector_link `string`
  * slug `string`
  * square_logo_url `string`
  * suitability_score `string`
  * summary `string`
  * title `string`
  * topic `string`
  * updated_at `string`
  * vestorly_url `string`
  * video `string`
  * video_id `string`

### PostInput
* PostInput `object`
  * advisor_id `string`
  * approval_status `string`
  * approval_transactions `array`
    * items `string`
  * article_id `string`
  * comment `string`
  * created_at `string`
  * display_date `string`
  * display_summary `string`
  * display_tag `string`
  * external_url `string`
  * external_url_source `string`
  * external_url_type `string`
  * group_ids `array`
    * items `string`
  * image_height `string`
  * image_path `string`
  * image_url `string`
  * image_width `string`
  * is_featured `boolean`
  * is_mobile_proxy_needed `boolean`
  * is_proxy_needed `boolean`
  * is_published `boolean`
  * is_responsive `boolean`
  * logo_url `string`
  * needs_sanitize `string`
  * newsletter_ids `array`
    * items `string`
  * post_date `string`
  * proxy_url `string`
  * slug `string`
  * square_logo_url `string`
  * suitability_score `string`
  * summary `string`
  * title **required** `string`
  * topic `string`
  * updated_at `string`
  * vestorly_url `string`
  * video `string`
  * video_id `string`

### Postrequest
* Postrequest `object`
  * post [PostInput](#postinput)

### Postresponse
* Postresponse `object`
  * post [Post](#post)

### Posts
* Posts `object`
  * posts `array`
    * items [Post](#post)

### SeedCustomFeed
* SeedCustomFeed `object`
  * _id **required** `string`
  * article_id `string`
  * custom_feed_id `string`
  * not_article_id `string`
  * not_seeds `array`
    * items `string`
  * seeds `array`
    * items `string`
  * sort_by `string`

### SeedCustomFeedInput
* SeedCustomFeedInput `object`
  * article_id `string`
  * custom_feed_id **required** `string`
  * not_article_id `string`
  * not_seeds `array`
    * items `string`
  * seeds `array`
    * items `string`
  * sort_by `string`

### SeedCustomFeedresponse
* SeedCustomFeedresponse `object`
  * seed_custom_feed [SeedCustomFeed](#seedcustomfeed)

### SeedCustomFeeds
* SeedCustomFeeds `object`
  * seed_custom_feeds `array`
    * items [SeedCustomFeed](#seedcustomfeed)

### Session
* Session `object`
  * _id `string`
  * current_user [User](#user)
  * new_user `boolean`
  * settings [Settings](#settings)
  * vestorly-auth `string`

### SessionLogoutResponse
* SessionLogoutResponse `object`
  * message `string`

### Settings
* Settings `object`
  * _id **required** `string`
  * adv_brochure `string`
  * company `string`
  * disclosure `string`
  * feature [Features](#features)
  * name `string`
  * orgsetting [OrgSetting](#orgsetting)
  * personalsetting [PersonalSettings](#personalsettings)
  * picture_url `string`
  * slug `string`
  * website `string`

### Source
* Source `object`
  * _id **required** `string`
  * custom_rss_feed `boolean`
  * enabled `boolean`
  * logo_url `string`
  * name **required** `string`
  * rss_publisher **required** `string`
  * url **required** `string`

### SourceInput
* SourceInput `object`
  * custom_rss_feed `boolean`
  * enabled `boolean`
  * logo_url `string`
  * name **required** `string`
  * rss_publisher **required** `string`
  * url **required** `string`

### Sourceresponse
* Sourceresponse `object`
  * source [Source](#source)

### Sources
* Sources `object`
  * sources `array`
    * items [Source](#source)

### TruncatedMember
* TruncatedMember `object`
  * _id `string`
  * added_on `string`
  * email `string`
  * first_name `string`
  * last_name `string`
  * picture_url `string`

### User
* User `object`
  * _id **required** `string`
  * company `string`
  * first_name `string`
  * last_name `string`
  * name `string`
  * new_user `boolean`
  * picture_url `string`
  * plan_expired `boolean`
  * plan_id `string`
  * plan_setup `boolean`
  * plan_status `string`
  * plan_stripe `boolean`
  * show_tour `boolean`
  * slug `string`
  * user_type `string`
  * username `string`
  * website `string`


