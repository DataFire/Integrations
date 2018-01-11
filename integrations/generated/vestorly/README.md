# @datafire/vestorly

Client library for Vestorly

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

vestorly.findAdvisorByID({}).then(data => {
  console.log(data);
})
```

## Description

Vestorly Developers API

## Actions

### findAdvisorByID
Returns a single advisor given their ID


```js
vestorly.findAdvisorByID({
  "vestorly-auth": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * vestorly-auth **required** `string`: Vestorly Auth Token
  * access_token `string`: OAuth Token
  * id **required** `string`: Advisor Id to fetch

#### Output
* output [Advisor](#advisor)

### findArticles
Returns all articles


```js
vestorly.findArticles({
  "vestorly-auth": ""
}, context)
```

#### Input
* input `object`
  * vestorly-auth **required** `string`: Vestorly Auth Token
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
  "vestorly-auth": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * vestorly-auth **required** `string`: Vestorly Auth Token
  * access_token `string`: OAuth Token
  * id **required** `string`: Article Id to fetch

#### Output
* output [Articleresponse](#articleresponse)

### findEvents
Returns all events


```js
vestorly.findEvents({
  "vestorly-auth": ""
}, context)
```

#### Input
* input `object`
  * vestorly-auth **required** `string`: Vestorly Auth Token
  * access_token `string`: OAuth Token

#### Output
* output [Events](#events)

### createEvent
Creates a new event in the system


```js
vestorly.createEvent({
  "vestorly-auth": "",
  "event": null
}, context)
```

#### Input
* input `object`
  * vestorly-auth **required** `string`: Vestorly Auth Token
  * access_token `string`: OAuth Token
  * event **required** [EventInput](#eventinput)

#### Output
* output [Eventcreateresponse](#eventcreateresponse)

### findEventByID
Returns a single event if the user has access


```js
vestorly.findEventByID({
  "id": "",
  "vestorly-auth": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Mongo ID of event to fetch
  * access_token `string`: OAuth Token
  * vestorly-auth **required** `string`: Vestorly Auth Token

#### Output
* output [Eventresponse](#eventresponse)

### findGroups
Returns all groups


```js
vestorly.findGroups({
  "vestorly-auth": ""
}, context)
```

#### Input
* input `object`
  * vestorly-auth **required** `string`: Vestorly Auth Token
  * access_token `string`: OAuth Token

#### Output
* output [Groups](#groups)

### createGroup
Creates a new Group


```js
vestorly.createGroup({
  "vestorly-auth": "",
  "group": null
}, context)
```

#### Input
* input `object`
  * vestorly-auth **required** `string`: Vestorly Auth Token
  * access_token `string`: OAuth Token
  * group **required** [GroupInput](#groupinput)

#### Output
* output [Groupresponse](#groupresponse)

### deleteGroup
Deletes a Group


```js
vestorly.deleteGroup({
  "vestorly-auth": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * vestorly-auth **required** `string`: Vestorly Auth Token
  * access_token `string`: OAuth Token
  * id **required** `string`: id of group to delete

#### Output
* output [Groupresponse](#groupresponse)

### findGroupByID
Returns a single group if user has access


```js
vestorly.findGroupByID({
  "vestorly-auth": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * vestorly-auth **required** `string`: Vestorly Auth Token
  * access_token `string`: OAuth Token
  * id **required** `string`: Mongo ID of group to fetch

#### Output
* output [Groupresponse](#groupresponse)

### updateGroupById
Updates a Group


```js
vestorly.updateGroupById({
  "vestorly-auth": "",
  "id": "",
  "group": null
}, context)
```

#### Input
* input `object`
  * vestorly-auth **required** `string`: Vestorly Auth Token
  * access_token `string`: OAuth Token
  * id **required** `string`: id of group to update
  * group **required** [GroupInput](#groupinput)

#### Output
* output [Groupresponse](#groupresponse)

### findMemberEvents
Returns all MemberEvents


```js
vestorly.findMemberEvents({
  "vestorly-auth": ""
}, context)
```

#### Input
* input `object`
  * vestorly-auth **required** `string`: Vestorly Auth Token
  * access_token `string`: OAuth Token

#### Output
* output [MemberEvents](#memberevents)

### findMemberReports
Returns all member reports


```js
vestorly.findMemberReports({
  "vestorly-auth": ""
}, context)
```

#### Input
* input `object`
  * vestorly-auth **required** `string`: Vestorly Auth Token
  * access_token `string`: OAuth Token

#### Output
* output [MemberReports](#memberreports)

### findMembers
Returns all members


```js
vestorly.findMembers({
  "vestorly-auth": ""
}, context)
```

#### Input
* input `object`
  * vestorly-auth **required** `string`: Vestorly Auth Token
  * access_token `string`: OAuth Token
  * start `integer`: Skips number of members from start
  * limit `integer`: Number of members to return

#### Output
* output [Members](#members)

### createMember
Create a new member in the Vestorly Platform


```js
vestorly.createMember({
  "vestorly-auth": "",
  "member": null
}, context)
```

#### Input
* input `object`
  * vestorly-auth **required** `string`: Vestorly Auth Token
  * access_token `string`: OAuth Token
  * member **required** [Member](#member)

#### Output
* output [Memberresponse](#memberresponse)

### findMemberByID
Returns a single member


```js
vestorly.findMemberByID({
  "id": "",
  "vestorly-auth": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Mongo ID of member to fetch
  * vestorly-auth **required** `string`: Vestorly Auth Token
  * access_token `string`: OAuth Token

#### Output
* output [Memberresponse](#memberresponse)

### updateMemberByID
Updates a single member


```js
vestorly.updateMemberByID({
  "id": "",
  "vestorly-auth": "",
  "member": null
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Mongo ID of member to fetch
  * vestorly-auth **required** `string`: Vestorly Auth Token
  * access_token `string`: OAuth Token
  * member **required** [Member](#member)

#### Output
* output [Memberresponse](#memberresponse)

### findNewsletterSettings
Returns all newsletter settings


```js
vestorly.findNewsletterSettings({
  "vestorly-auth": ""
}, context)
```

#### Input
* input `object`
  * vestorly-auth **required** `string`: Vestorly Auth Token
  * access_token `string`: OAuth Token

#### Output
* output [NewsletterSettings](#newslettersettings)

### findNewsletterSettingsByID
Returns a single newsletter settings if the user has access


```js
vestorly.findNewsletterSettingsByID({
  "id": "",
  "vestorly-auth": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Mongo ID of newsletter settings to fetch
  * vestorly-auth **required** `string`: Vestorly Auth Token
  * access_token `string`: OAuth Token

#### Output
* output [Newslettersettingresponse](#newslettersettingresponse)

### updateNewsletterSettingsByID
Update a single newsletter setting by ID


```js
vestorly.updateNewsletterSettingsByID({
  "id": "",
  "vestorly-auth": "",
  "newsletter_setting": null
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Mongo ID of newsletter settings to update
  * vestorly-auth **required** `string`: Vestorly Auth Token
  * access_token `string`: OAuth Token
  * newsletter_setting **required** [NewsletterSettingsInput](#newslettersettingsinput)

#### Output
* output [Newslettersettingresponse](#newslettersettingresponse)

### findNewsletters
Returns all newsletters


```js
vestorly.findNewsletters({
  "vestorly-auth": ""
}, context)
```

#### Input
* input `object`
  * vestorly-auth **required** `string`: Vestorly Auth Token
  * access_token `string`: OAuth Token

#### Output
* output [Newsletters](#newsletters)

### getNewsletterByID
Get a newsletter by ID


```js
vestorly.getNewsletterByID({
  "vestorly-auth": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * vestorly-auth **required** `string`: Vestorly Auth Token
  * access_token `string`: OAuth Token
  * id **required** `string`: Mongo ID of event to get

#### Output
* output [Newsletterresponse](#newsletterresponse)

### updateNewsletterByID
Updates a newsletter


```js
vestorly.updateNewsletterByID({
  "vestorly-auth": "",
  "id": "",
  "newsletter": null
}, context)
```

#### Input
* input `object`
  * vestorly-auth **required** `string`: Vestorly Auth Token
  * access_token `string`: OAuth Token
  * id **required** `string`: Mongo ID of event to update
  * newsletter **required** [NewsletterInput](#newsletterinput)

#### Output
* output [Newsletterresponse](#newsletterresponse)

### findPosts
Query all posts


```js
vestorly.findPosts({
  "vestorly-auth": ""
}, context)
```

#### Input
* input `object`
  * vestorly-auth **required** `string`: Vestorly Auth Token
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
  "vestorly-auth": "",
  "post": null
}, context)
```

#### Input
* input `object`
  * vestorly-auth **required** `string`: Vestorly Auth Token
  * access_token `string`: OAuth Token
  * post **required** [PostInput](#postinput)

#### Output
* output [Postresponse](#postresponse)

### getPostByID
Query all posts


```js
vestorly.getPostByID({
  "vestorly-auth": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * vestorly-auth **required** `string`: Vestorly Auth Token
  * access_token `string`: OAuth Token
  * id **required** `string`: ID of post to fetch

#### Output
* output [Postresponse](#postresponse)

### updatePostByID
Update A Post


```js
vestorly.updatePostByID({
  "vestorly-auth": "",
  "id": "",
  "post": null
}, context)
```

#### Input
* input `object`
  * vestorly-auth **required** `string`: Vestorly Auth Token
  * access_token `string`: OAuth Token
  * id **required** `string`: id of post to update
  * post **required** [Post](#post)

#### Output
* output [Postresponse](#postresponse)

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
  "vestorly-auth": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * vestorly-auth **required** `string`: Authenication token
  * id **required** `string`: ID of pet to session

#### Output
* output [SessionLogoutResponse](#sessionlogoutresponse)

### findSources
Returns all sources


```js
vestorly.findSources({
  "vestorly-auth": ""
}, context)
```

#### Input
* input `object`
  * vestorly-auth **required** `string`: Vestorly Auth Token
  * access_token `string`: OAuth Token

#### Output
* output [Sources](#sources)

### createSource
Create source


```js
vestorly.createSource({
  "vestorly-auth": "",
  "source": null
}, context)
```

#### Input
* input `object`
  * vestorly-auth **required** `string`: Vestorly Auth Token
  * access_token `string`: OAuth Token
  * source **required** [SourceInput](#sourceinput)

#### Output
* output [Sourceresponse](#sourceresponse)

### getSourceByID
Get Source By ID


```js
vestorly.getSourceByID({
  "vestorly-auth": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * vestorly-auth **required** `string`: Vestorly Auth Token
  * access_token `string`: OAuth Token
  * id **required** `string`: ID of source to fetch

#### Output
* output [Sourceresponse](#sourceresponse)

### updateSourceByID
Update Source By ID


```js
vestorly.updateSourceByID({
  "vestorly-auth": "",
  "id": "",
  "source": null
}, context)
```

#### Input
* input `object`
  * vestorly-auth **required** `string`: Vestorly Auth Token
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
  * square_logo_url `string`
  * suitability_score `string`
  * summary `string`
  * title **required** `string`
  * topic `string`
  * url `string`

### Articleresponse
* Articleresponse `object`
  * article [Article](#article)

### Articles
* Articles `object`
  * articles `array`
    * items [Article](#article)

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
  * facebook_day_of_week `integer`
  * facebook_hour `integer`
  * facebook_status `string`
  * footer_email_font `string`
  * footer_html `string`
  * footer_image_url `string`
  * group_id `string`
  * header_background_color `string`
  * header_image_url `string`
  * intro_text `string`
  * linkedin_active_wall `string`
  * linkedin_day_of_week `integer`
  * linkedin_hour `integer`
  * linkedin_status `string`
  * montage_enabled `boolean`
  * montage_facebook_image_url `string`
  * montage_linkedin_image_url `string`
  * montage_title `string`
  * montage_twitter_image_url `string`
  * newsletter_ids `array`
    * items `string`
  * newsletter_type `string`
  * primary_email_font `string`
  * render_version `string`
  * salutation_text `string`
  * social_day_of_week `integer`
  * social_description `string`
  * social_hour `integer`
  * social_posting_text `string`
  * social_subtitle `string`
  * social_title `string`
  * subject `string`
  * title_color `string`
  * twitter_day_of_week `integer`
  * twitter_hour `integer`
  * twitter_status `string`

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
  * email_theme_name `string`
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
  * pdf_attachment_url `string`
  * post_date `string`
  * proxy_url `string`
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
  * pdf_attachment_url `string`
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


