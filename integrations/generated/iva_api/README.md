# @datafire/iva_api

Client library for Entertainment Express

## Installation and Usage
```bash
npm install --save @datafire/iva_api
```
```js
let iva_api = require('@datafire/iva_api').create({
  ApiKeyHeader: "",
  ApiKeyQuery: ""
});

iva_api.GetXRoadMediaRecommendations({}).then(data => {
  console.log(data);
})
```

## Description

Your Gateway to Building Incredible Movie, TV, and Game Content Discovery Experiences.

## Actions

### GetAnalyticsViewersByCity
No required parameters, DateValue defaults to Today..


```js
iva_api.GetAnalyticsViewersByCity({}, context)
```

#### Input
* input `object`
  * ReportTag `string`: Report Tag filter.
  * Start `string`: Report start date
  * End `string`: Report end date
  * DateValue `string` (values: today, yesterday, two_days_ago, last_7_days, last_14_days, last_28_days, last_60_days, last_90_days, last_365_days): Days spanned by report
  * Limit `integer`: Number of records returned from top of response

#### Output
* output `array`
  * items [CityResponse](#cityresponse)

### GetAnalyticsViewersByCountry
No required parameters, DateValue defaults to Today.


```js
iva_api.GetAnalyticsViewersByCountry({}, context)
```

#### Input
* input `object`
  * ReportTag `string`: Report Tag filter.
  * Start `string`: Report start date
  * End `string`: Report end date
  * DateValue `string` (values: today, yesterday, two_days_ago, last_7_days, last_14_days, last_28_days, last_60_days, last_90_days, last_365_days): Days spanned by report
  * Limit `integer`: Number of records returned from top of response.

#### Output
* output `array`
  * items [AnalyticsCountryResponse](#analyticscountryresponse)

### GetAnalyticEngagementActions
No required parameters, DateValue defaults to Today.


```js
iva_api.GetAnalyticEngagementActions({}, context)
```

#### Input
* input `object`
  * ReportTag `string`: Report Tag filter.
  * Start `string`: Report start date
  * End `string`: Report end date
  * DateValue `string` (values: today, yesterday, two_days_ago, last_7_days, last_14_days, last_28_days, last_60_days, last_90_days, last_365_days): Days spanned by report
  * Limit `integer`: Number of records returned from top of response

#### Output
* output `array`
  * items [EngagementActionsResponse](#engagementactionsresponse)

### GetAnalyticsEngagementTimes
No required parameters, DateValue defaults to Today.


```js
iva_api.GetAnalyticsEngagementTimes({}, context)
```

#### Input
* input `object`
  * ReportTag `string`: Report Tag filter.
  * Start `string`: Report start date
  * End `string`: Report end date
  * DateValue `string` (values: today, yesterday, two_days_ago, last_7_days, last_14_days, last_28_days, last_60_days, last_90_days, last_365_days): Days spanned by report
  * Limit `integer`: Number of records returned from top of response

#### Output
* output `array`
  * items [EngagementTimesResponse](#engagementtimesresponse)

### GetAnalyticsGBUsage
Requires a valid Customer ID.


```js
iva_api.GetAnalyticsGBUsage({}, context)
```

#### Input
* input `object`
  * ReportTag `string`: Report Tag filter.
  * Month `integer` (values: January, February, March, April, May, June, July, August, September, October, November, December): Report month
  * Year `integer`: Report year

#### Output
* output [GBUsageResponse](#gbusageresponse)

### GetAnalyticsMostActive
No required parameters, DateValue defaults to Today.


```js
iva_api.GetAnalyticsMostActive({}, context)
```

#### Input
* input `object`
  * ReportTag `string`: Report Tag filter.
  * DateValue `string` (values: today, yesterday, two_days_ago, last_7_days, last_14_days, last_28_days, last_60_days, last_90_days, last_365_days): Days spanned by report
  * Limit `integer`: Number of records returned from top of response

#### Output
* output `array`
  * items [MostActiveResponse](#mostactiveresponse)

### GetAnalyticsViewersByPlatformHardware
No required parameters, DateValue defaults to Today.


```js
iva_api.GetAnalyticsViewersByPlatformHardware({}, context)
```

#### Input
* input `object`
  * ReportTag `string`: Report Tag filter.
  * Start `string`: Report start date
  * End `string`: Report end date
  * DateValue `string` (values: today, yesterday, two_days_ago, last_7_days, last_14_days, last_28_days, last_60_days, last_90_days, last_365_days): Days spanned by report
  * Limit `integer`: Number of records returned from top of response

#### Output
* output `array`
  * items [PlatformHardwareResponse](#platformhardwareresponse)

### GetAnalyticsViewersByPlatformOS
No required parameters, DateValue defaults to Today.


```js
iva_api.GetAnalyticsViewersByPlatformOS({}, context)
```

#### Input
* input `object`
  * ReportTag `string`: Report Tag filter.
  * Start `string`: Report start date
  * End `string`: Report end date
  * DateValue `string` (values: today, yesterday, two_days_ago, last_7_days, last_14_days, last_28_days, last_60_days, last_90_days, last_365_days): Days spanned by report
  * Limit `integer`: Number of records returned from top of response

#### Output
* output `array`
  * items [PlatformOSResponse](#platformosresponse)

### GetAnalyticsRecentVisitors
No required parameters, DateValue defaults to Today.


```js
iva_api.GetAnalyticsRecentVisitors({}, context)
```

#### Input
* input `object`
  * ReportTag `string`: Report Tag filter.
  * Limit `integer`: Number of records returned from top of response

#### Output
* output `array`
  * items [RecentVisitorsResponse](#recentvisitorsresponse)

### GetAnalyticsSummary
Requires a valid Customer ID.


```js
iva_api.GetAnalyticsSummary({}, context)
```

#### Input
* input `object`
  * ReportTag `string`: Report Tag filter.
  * DateValue `string` (values: today, yesterday, two_days_ago, last_7_days, last_14_days, last_28_days, last_60_days, last_90_days, last_365_days): Days spanned by report

#### Output
* output [SummaryResponse](#summaryresponse)

### GetAnalyticsTitleReport
Requires a valid published ID.


```js
iva_api.GetAnalyticsTitleReport({
  "PublishedId": ""
}, context)
```

#### Input
* input `object`
  * PublishedId **required** `string`: Title published ID.
  * Start `string`: Report start date
  * End `string`: Report end date

#### Output
* output `array`
  * items [TitleReportResponse](#titlereportresponse)

### GetAnalyticsViewsByVideoLog
No required parameters, DateValue defaults to Today.


```js
iva_api.GetAnalyticsViewsByVideoLog({}, context)
```

#### Input
* input `object`
  * ReportTag `string`: Report Tag filter.
  * Start `string`: Report start date
  * End `string`: Report end date
  * DateValue `string` (values: today, yesterday, two_days_ago, last_7_days, last_14_days, last_28_days, last_60_days, last_90_days, last_365_days): Days spanned by report
  * Limit `integer`: Number of records returned from top of response

#### Output
* output `array`
  * items [VideoLogResponse](#videologresponse)

### GetAnalyticsViewers
Optional DateValue for length of report.


```js
iva_api.GetAnalyticsViewers({}, context)
```

#### Input
* input `object`
  * ReportTag `string`: Report Tag filter.
  * DateValue `string` (values: today, yesterday, two_days_ago, last_7_days, last_14_days, last_28_days, last_60_days, last_90_days, last_365_days): Days spanned by report

#### Output
* output `array`
  * items [ViewersResponse](#viewersresponse)

### GetAnalyticsViews
Optional DateValue for length of report.


```js
iva_api.GetAnalyticsViews({}, context)
```

#### Input
* input `object`
  * ReportTag `string`: Report Tag filter.
  * DateValue `string` (values: today, yesterday, two_days_ago, last_7_days, last_14_days, last_28_days, last_60_days, last_90_days, last_365_days): Days spanned by report

#### Output
* output `array`
  * items [ViewsResponse](#viewsresponse)

### GetAnalyticsViewersByWebBrowsers
No required parameters, DateValue defaults to Today.


```js
iva_api.GetAnalyticsViewersByWebBrowsers({}, context)
```

#### Input
* input `object`
  * ReportTag `string`: Report Tag filter.
  * Start `string`: Report start date
  * End `string`: Report end date
  * DateValue `string` (values: today, yesterday, two_days_ago, last_7_days, last_14_days, last_28_days, last_60_days, last_90_days, last_365_days): Days spanned by report
  * Limit `integer`: Number of records returned from top of response

#### Output
* output `array`
  * items [WebBrowsersResponse](#webbrowsersresponse)

### GetEpisodeChangeHistory
For each updated episode ID, pull the full episode data for that ID and update.


```js
iva_api.GetEpisodeChangeHistory({
  "Date": "",
  "Skip": 0,
  "Take": 0
}, context)
```

#### Input
* input `object`
  * Date **required** `string`: Starting date <= when record has changed (Maximum of 30 days back). ISO 8601 Format: yyyy-mm-dd hh:mm:ss.ffffff0Z
  * Skip **required** `integer`: Offset for paging. Default is 0.
  * Take **required** `integer`: Maximum number of rows returned. Default is 1,000.

#### Output
* output `array`
  * items [EpisodeChangeHistoryResponse](#episodechangehistoryresponse)

### GetEpisodeChangeHistoryWithEntity
Lists each episode ID that has changed as well as the entity in the object that changed.


```js
iva_api.GetEpisodeChangeHistoryWithEntity({
  "Date": "",
  "Skip": 0,
  "Take": 0
}, context)
```

#### Input
* input `object`
  * Date **required** `string`: Starting date <= when record has changed (Maximum of 30 days back). ISO 8601 Format: yyyy-mm-dd hh:mm:ss.ffffff0Z
  * Skip **required** `integer`: Offset for paging. Default is 0.
  * Take **required** `integer`: Maximum number of rows returned. Default is 1,000.

#### Output
* output `array`
  * items [EpisodeChangeHistoryWithEntityResponse](#episodechangehistorywithentityresponse)

### GetMovieChangeHistory
Use to get the ID's of the movies that have been added or changed and use /Movies/{ID} to get back the object with the updated data and replace in your database.


```js
iva_api.GetMovieChangeHistory({
  "Date": "",
  "Skip": 0,
  "Take": 0
}, context)
```

#### Input
* input `object`
  * Date **required** `string`: Starting date <= when record has changed (Maximum of 30 days back). ISO 8601 Format: yyyy-mm-dd hh:mm:ss.ffffff0Z
  * Skip **required** `integer`: Offset for paging. Default is 0.
  * Take **required** `integer`: Maximum number of rows returned. Default is 1,000.

#### Output
* output `array`
  * items [MovieChangeHistoryResponse](#moviechangehistoryresponse)

### GetMovieChangeHistoryWithEntity
Same as /Changes/Movies/History but with the specific entities that have changed inside the MovieResponse.


```js
iva_api.GetMovieChangeHistoryWithEntity({
  "Date": "",
  "Skip": 0,
  "Take": 0
}, context)
```

#### Input
* input `object`
  * Date **required** `string`: Starting date <= when record has changed (Maximum of 30 days back). ISO 8601 Format: yyyy-mm-dd hh:mm:ss.ffffff0Z
  * Skip **required** `integer`: Offset for paging. Default is 0.
  * Take **required** `integer`: Maximum number of rows returned. Default is 1,000.

#### Output
* output `array`
  * items [MovieChangeHistoryWithEntityResponse](#moviechangehistorywithentityresponse)

### GetPersonChangeHistory
Requires a valid Date.


```js
iva_api.GetPersonChangeHistory({
  "Date": "",
  "Skip": 0,
  "Take": 0
}, context)
```

#### Input
* input `object`
  * Date **required** `string`: Starting date <= when record has changed (Maximum of 30 days back). ISO 8601 Format: yyyy-mm-dd hh:mm:ss.ffffff0Z
  * Skip **required** `integer`: Offset for paging. Default is 0.
  * Take **required** `integer`: Maximum number of rows returned. Default is 1,000.

#### Output
* output `array`
  * items [PersonChangeHistoryResponse](#personchangehistoryresponse)

### GetPersonChangeHistoryWithEntity
Requires a valid Date.


```js
iva_api.GetPersonChangeHistoryWithEntity({
  "Date": "",
  "Skip": 0,
  "Take": 0
}, context)
```

#### Input
* input `object`
  * Date **required** `string`: Starting date <= when record has changed (Maximum of 30 days back). ISO 8601 Format: yyyy-mm-dd hh:mm:ss.ffffff0Z
  * Skip **required** `integer`: Offset for paging. Default is 0.
  * Take **required** `integer`: Maximum number of rows returned. Default is 1,000.

#### Output
* output `array`
  * items [PersonChangeHistoryWithEntityResponse](#personchangehistorywithentityresponse)

### GetSeasonChangeHistory
Use if you want to check for specific updates to season records.


```js
iva_api.GetSeasonChangeHistory({
  "Date": "",
  "Skip": 0,
  "Take": 0
}, context)
```

#### Input
* input `object`
  * Date **required** `string`: Starting date <= when record has changed (Maximum of 30 days back). ISO 8601 Format: yyyy-mm-dd hh:mm:ss.ffffff0Z
  * Skip **required** `integer`: Offset for paging. Default is 0.
  * Take **required** `integer`: Maximum number of rows returned. Default is 1,000.

#### Output
* output `array`
  * items [SeasonChangeHistoryResponse](#seasonchangehistoryresponse)

### GetSeasonChangeHistoryWithEntity
Returns list of new or changed SeasonIds with the entity that has changed.


```js
iva_api.GetSeasonChangeHistoryWithEntity({
  "Date": "",
  "Skip": 0,
  "Take": 0
}, context)
```

#### Input
* input `object`
  * Date **required** `string`: Starting date <= when record has changed (Maximum of 30 days back). ISO 8601 Format: yyyy-mm-dd hh:mm:ss.ffffff0Z
  * Skip **required** `integer`: Offset for paging. Default is 0.
  * Take **required** `integer`: Maximum number of rows returned. Default is 1,000.

#### Output
* output `array`
  * items [SeasonChangeHistoryWithEntityResponse](#seasonchangehistorywithentityresponse)

### GetShowChangeHistory
All new and updated shows from requested date and time.  When a record gets updated, use the ID to get the full show object and replace the data in your cache.


```js
iva_api.GetShowChangeHistory({
  "Date": "",
  "Skip": 0,
  "Take": 0
}, context)
```

#### Input
* input `object`
  * Date **required** `string`: Starting date <= when record has changed (Maximum of 30 days back). ISO 8601 Format: yyyy-mm-dd hh:mm:ss.ffffff0Z
  * Skip **required** `integer`: Offset for paging. Default is 0.
  * Take **required** `integer`: Maximum number of rows returned. Default is 1,000.

#### Output
* output `array`
  * items [ShowChangeHistoryResponse](#showchangehistoryresponse)

### GetShowChangeHistoryWithEntity
Returns a list of ShowId and entity of any show that has been updated.


```js
iva_api.GetShowChangeHistoryWithEntity({
  "Date": "",
  "Skip": 0,
  "Take": 0
}, context)
```

#### Input
* input `object`
  * Date **required** `string`: Starting date <= when record has changed (Maximum of 30 days back). ISO 8601 Format: yyyy-mm-dd hh:mm:ss.ffffff0Z
  * Skip **required** `integer`: Offset for paging. Default is 0.
  * Take **required** `integer`: Maximum number of rows returned. Default is 1,000.

#### Output
* output `array`
  * items [ShowChangeHistoryWithEntityResponse](#showchangehistorywithentityresponse)

### GetChartMoviesBoxoffice
Returns top 10 box office movies.


```js
iva_api.GetChartMoviesBoxoffice({
  "Skip": 0,
  "Take": 0
}, context)
```

#### Input
* input `object`
  * Skip **required** `integer`: Determines where to start page.  Ex: 0 starts at the beginning.
  * Take **required** `integer`: Determines the page size.  (Maximum of 100)

#### Output
* output `array`
  * items [ChartItem](#chartitem)

### GetChartMoviesMostAnticipated
Requires Skip and Take. Maximum page size is 100.


```js
iva_api.GetChartMoviesMostAnticipated({
  "Skip": 0,
  "Take": 0
}, context)
```

#### Input
* input `object`
  * Skip **required** `integer`: Determines where to start page.  Ex: 0 starts at the beginning.
  * Take **required** `integer`: Determines the page size.  (Maximum of 100)

#### Output
* output [Object](#object)

### GetChartMoviesPopular
Requires Skip and Take. Maximum page size is 100.


```js
iva_api.GetChartMoviesPopular({
  "Skip": 0,
  "Take": 0
}, context)
```

#### Input
* input `object`
  * Skip **required** `integer`: Determines where to start page.  Ex: 0 starts at the beginning.
  * Take **required** `integer`: Determines the page size.  (Maximum of 100)

#### Output
* output `array`
  * items [ChartItem](#chartitem)

### GetChartPeoplePopular
Requires Skip and Take. Maximum page size is 100.


```js
iva_api.GetChartPeoplePopular({
  "Skip": 0,
  "Take": 0
}, context)
```

#### Input
* input `object`
  * Skip **required** `integer`: Determines where to start page.  Ex: 0 starts at the beginning.
  * Take **required** `integer`: Determines the page size.  (Maximum of 100)

#### Output
* output [Object](#object)

### GetChartShowsPopular
Requires Skip and Take. Maximum page size is 100.


```js
iva_api.GetChartShowsPopular({}, context)
```

#### Input
* input `object`
  * Take `integer`: Limits the total items returned. Maximum of 100 per request.
  * Skip `integer`: Skips records using for paging results.

#### Output
* output [ChartItem](#chartitem)

### GetCompanies
Companies are listed in a movie, show, or game response as those whom are involved with the program.  EX: Universal Pictures.


```js
iva_api.GetCompanies({
  "Skip": 0,
  "Take": 0
}, context)
```

#### Input
* input `object`
  * Skip **required** `integer`: Offset for paging. Default is 0.
  * Take **required** `integer`: Maximum number of rows returned. Default is 1,000.

#### Output
* output `array`
  * items [CompanyResponse](#companyresponse)

### GetCountries
List of Countries, ISO codes and Country IDs used throughout the API.


```js
iva_api.GetCountries(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [CountryResponse](#countryresponse)

### GetImageTypes
A list of image types available in the IVA database. **EX: Poster**


```js
iva_api.GetImageTypes(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [ImageTypeResponse](#imagetyperesponse)

### GetLanguages
Returns a list of languages used in the API as well as the ISO code and language ID.


```js
iva_api.GetLanguages(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [LanguageResponse](#languageresponse)

### GetTags
Paged list of all tags used in the API.


```js
iva_api.GetTags({
  "Skip": 0,
  "Take": 0
}, context)
```

#### Input
* input `object`
  * Skip **required** `integer`: Offset for paging. Default is 0.
  * Take **required** `integer`: Maximum number of rows returned. Default is 1,000.

#### Output
* output `array`
  * items [TagResponse](#tagresponse)

### GetVideoTypes
Returns a list of the types of videos that can be associated to a title.


```js
iva_api.GetVideoTypes(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [VideoTypeResponse](#videotyperesponse)

### GetGracenoteMovieIds
Not accessible with a Demo account.  **Special permissions needed** for access to this operation.  Contact [Sales](mailto:sales@internetvideoarchive.com).


```js
iva_api.GetGracenoteMovieIds({
  "Skip": 0,
  "Take": 0
}, context)
```

#### Input
* input `object`
  * Skip **required** `integer`: Determines where to start page.  Ex: 0 starts at the beginning.
  * Take **required** `integer`: Determines the page size.  (Maximum of 1000)

#### Output
* output `array`
  * items [MovieExternalIdMap](#movieexternalidmap)

### GetGracenoteShowIds
Not accessible with a Demo account. **Special permissions needed** for access to this operation. Contact [Sales](mailto:sales@internetvideoarchive.com).


```js
iva_api.GetGracenoteShowIds({
  "Skip": 0,
  "Take": 0
}, context)
```

#### Input
* input `object`
  * Skip **required** `integer`: Determines where to start page.  Ex: 0 starts at the beginning.
  * Take **required** `integer`: Determines the page size.  (Maximum of 1000)

#### Output
* output `array`
  * items [ShowExternalIdMap](#showexternalidmap)

### GetImdbMovieIds
Ingest this ID map to create connections between the objects in your existing database with an IMDB ID to the IVA Movie objects.


```js
iva_api.GetImdbMovieIds({
  "Skip": 0,
  "Take": 0
}, context)
```

#### Input
* input `object`
  * Skip **required** `integer`: Determines where to start page.  Ex: 0 starts at the beginning.
  * Take **required** `integer`: Determines the page size.  (Maximum of 1000)

#### Output
* output `array`
  * items [MovieExternalIdMap](#movieexternalidmap)

### GetImdbShowIds
ngest this ID map to create connections between the objects in your existing database with an IMDB ID to the IVA Show objects.


```js
iva_api.GetImdbShowIds({
  "Skip": 0,
  "Take": 0
}, context)
```

#### Input
* input `object`
  * Skip **required** `integer`: Determines where to start page.  Ex: 0 starts at the beginning.
  * Take **required** `integer`: Determines the page size.  (Maximum of 1000)

#### Output
* output `array`
  * items [ShowExternalIdMap](#showexternalidmap)

### GetTivoMovieIds
Not accessible with a Demo account. **Special permissions needed** for access to this operation. Contact [Sales](mailto:sales@internetvideoarchive.com).


```js
iva_api.GetTivoMovieIds({
  "Skip": 0,
  "Take": 0
}, context)
```

#### Input
* input `object`
  * Skip **required** `integer`: Determines where to start page.  Ex: 0 starts at the beginning.
  * Take **required** `integer`: Determines the page size.  (Maximum of 1000)

#### Output
* output `array`
  * items [MovieExternalIdMap](#movieexternalidmap)

### GetTivoShowIds
Not accessible with a Demo account. **Special permissions needed** for access to this operation. Contact [Sales](mailto:sales@internetvideoarchive.com).


```js
iva_api.GetTivoShowIds({
  "Skip": 0,
  "Take": 0
}, context)
```

#### Input
* input `object`
  * Skip **required** `integer`: Determines where to start page.  Ex: 0 starts at the beginning.
  * Take **required** `integer`: Determines the page size.  (Maximum of 1000)

#### Output
* output `array`
  * items [ShowExternalIdMap](#showexternalidmap)

### GetTmdbMovieIds
Use to link a TMDB ID to an IVA Movie ID.


```js
iva_api.GetTmdbMovieIds({
  "Skip": 0,
  "Take": 0
}, context)
```

#### Input
* input `object`
  * Skip **required** `integer`: Determines where to start page.  Ex: 0 starts at the beginning.
  * Take **required** `integer`: Determines the page size.  (Maximum of 1000)

#### Output
* output `array`
  * items [MovieExternalIdMap](#movieexternalidmap)

### GetTmdbShowIds
Use to link a TMDB ID to an IVA Show ID.


```js
iva_api.GetTmdbShowIds({
  "Skip": 0,
  "Take": 0
}, context)
```

#### Input
* input `object`
  * Skip **required** `integer`: Determines where to start page.  Ex: 0 starts at the beginning.
  * Take **required** `integer`: Determines the page size.  (Maximum of 1000)

#### Output
* output `array`
  * items [ShowExternalIdMap](#showexternalidmap)

### GetWebediaMovieIds
Not accessible with a Demo account. **Special permissions needed** for access to this operation. Contact [Sales](mailto:sales@internetvideoarchive.com).


```js
iva_api.GetWebediaMovieIds({
  "Skip": 0,
  "Take": 0
}, context)
```

#### Input
* input `object`
  * Skip **required** `integer`: Determines where to start page.  Ex: 0 starts at the beginning.
  * Take **required** `integer`: Determines the page size.  (Maximum of 1000)

#### Output
* output `array`
  * items [MovieExternalIdMap](#movieexternalidmap)

### FindMovie
Use FindMovie with a third party ID like IMDB, TMDB, Gracenote, Tivo, etc. to find the corresponding movie in the IVA database.  For a full list of supported ID types see /Movies/AlternateIdTypes. 



`Recommendation: Use with small data sets or for a proof of concept. `


```js
iva_api.FindMovie({
  "IdType": 0,
  "Id": ""
}, context)
```

#### Input
* input `object`
  * IdType **required** `integer`: Required third party ID type of MovieAlternateId.
  * Id **required** `string`: Required third party ID of Movie.
  * Includes `array`: List of additional objects to include in the movie object.

#### Output
* output [MovieResponse](#movieresponse)

### FindShow
Use FindShow with a third party ID like IMDB, TMDB, Gracenote, Tivo, etc. to find the corresponding TV show in the IVA database. For a full list of supported ID types see /Shows/AlternateIdTypes. `Recommendation: Use with small data sets or for a proof of concept. `


```js
iva_api.FindShow({
  "IdType": 0,
  "Id": ""
}, context)
```

#### Input
* input `object`
  * IdType **required** `integer`: Required third party ID type of ShowAlternateId.
  * Id **required** `string`: Required third party ID of Show.
  * Includes `array`: List of additional objects to include in the show response.

#### Output
* output [ShowResponse](#showresponse)

### GetGoWatchItEpisodeAvailabilities
Returns GoWatchit episode availability by Entertainment Episode ID. Special permission is required to access this endpoint. 


```js
iva_api.GetGoWatchItEpisodeAvailabilities({
  "Id": 0,
  "ApiKey": ""
}, context)
```

#### Input
* input `object`
  * Id **required** `integer`: Required ID of Entertainment Episode.
  * ApiKey **required** `string`: Required GoWatchIt API key.

#### Output
* output [GoWatchItEpisodeAvailabilitiesResponse](#gowatchitepisodeavailabilitiesresponse)

### GetGoWatchItMovieAvailabilities
Returns GoWatchIt movie availability by Entertainment Movie ID.  Special permission is required to access this endpoint.  Contact [Sales](mailto:Sales@InternetVideoArchive.com) for more information.


```js
iva_api.GetGoWatchItMovieAvailabilities({
  "Id": 0,
  "ApiKey": ""
}, context)
```

#### Input
* input `object`
  * Id **required** `integer`: Required ID of Entertainment Movie.
  * ApiKey **required** `string`: Required GoWatchIt API key.

#### Output
* output [GoWatchItMovieAvailabilitiesResponse](#gowatchitmovieavailabilitiesresponse)

### GetGoWatchItSeasonAvailabilities
Returns GoWatchIt season availability by Entertainment Season ID.  Special permission is required to access this endpoint.  Contact [Sales](mailto:Sales@InternetVideoArchive.com) for more information.


```js
iva_api.GetGoWatchItSeasonAvailabilities({
  "Id": 0,
  "ApiKey": ""
}, context)
```

#### Input
* input `object`
  * Id **required** `integer`: Required ID of Entertainment Season.
  * ApiKey **required** `string`: Required GoWatchIt API key.

#### Output
* output [GoWatchItSeasonAvailabilitiesResponse](#gowatchitseasonavailabilitiesresponse)

### GetGoWatchItShowAvailabilities
Returns GoWatchIt show availability by Entertainment Show ID.  Special permission is required to access this endpoint. Please contact [Sales](mailto:Sales@InternetVideoArchive.com) for more information.


```js
iva_api.GetGoWatchItShowAvailabilities({
  "Id": 0,
  "ApiKey": ""
}, context)
```

#### Input
* input `object`
  * Id **required** `integer`: Required ID of Entertainment Show.
  * ApiKey **required** `string`: Required GoWatchIt API key.

#### Output
* output [GoWatchItShowAvailabilitiesResponse](#gowatchitshowavailabilitiesresponse)

### GetImageBatch
Requires a list filepath.


```js
iva_api.GetImageBatch({}, context)
```

#### Input
* input `object`
  * FilePath `array`: List of Filepaths.
  * body [GetImageBatch](#getimagebatch)

#### Output
* output `array`
  * items [ImageBatchResponse](#imagebatchresponse)

### GetScreenCaptureBatch
Requires a list of filepaths.


```js
iva_api.GetScreenCaptureBatch({}, context)
```

#### Input
* input `object`
  * FilePath `array`: List of Filepaths.
  * body [GetScreenCaptureBatch](#getscreencapturebatch)

#### Output
* output `array`
  * items [ImageBatchResponse](#imagebatchresponse)

### GetScreenCapture
Requires a valid filepath of a video asset screen capture.  

`Note: The swagger U/I does not support redirects.`


```js
iva_api.GetScreenCapture({
  "FilePath": ""
}, context)
```

#### Input
* input `object`
  * FilePath **required** `string`: Filepath of Image.
  * Redirect `boolean`: Redirect to the image. Default = true

#### Output
* output [ScreenCaptureRedirectResponse](#screencaptureredirectresponse)

### GetImage
Images should be downloaded and stored on the client server. Use /Common/ImageTypes to see a list of available image types.  


`Note: The swagger U/I does not support redirects.`


```js
iva_api.GetImage({
  "FilePath": ""
}, context)
```

#### Input
* input `object`
  * FilePath **required** `string`: Filepath of Image.
  * Redirect `boolean`: Redirect to the image. Default = true

#### Output
* output [ImageRedirectResponse](#imageredirectresponse)

### GetMetacriticMovie
Returns Metacritic Movie information by Entertainment Movie ID.


```js
iva_api.GetMetacriticMovie({
  "Id": 0
}, context)
```

#### Input
* input `object`
  * Id **required** `integer`: Required ID of Entertainment Movie.

#### Output
* output [MetacriticMovieResponse](#metacriticmovieresponse)

### GetMetacriticTv
Returns Metacritic TV information by Entertainment Show ID.


```js
iva_api.GetMetacriticTv({
  "Id": 0
}, context)
```

#### Input
* input `object`
  * Id **required** `integer`: Required ID of Entertainment Show.
  * SeasonNumber `integer`: Number of season.

#### Output
* output [MetacriticTvResponse](#metacritictvresponse)

### GetMovieTicketsCultures
Returns MovieTickets Cultures.


```js
iva_api.GetMovieTicketsCultures(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [MovieTicketsCultureResponse](#movieticketscultureresponse)

### GetMovieTicketsMoviesComingSoon
Returns MovieTickets Movies releasing soon.


```js
iva_api.GetMovieTicketsMoviesComingSoon({}, context)
```

#### Input
* input `object`
  * Culture `string`: Culture to retrieve response. Default en-us.
  * PageNumber `integer`: Page number for paging results. Used in conjunction with PageSize.
  * PageSize `integer`: Limits the total items returned. Maximum of 100 per request.

#### Output
* output `array`
  * items [MovieTicketsMovieComingSoonResponse](#movieticketsmoviecomingsoonresponse)

### GetMovieTicketsMoviesNowPlaying
Returns MovieTickets Movies currently in theaters.


```js
iva_api.GetMovieTicketsMoviesNowPlaying({}, context)
```

#### Input
* input `object`
  * Culture `string`: Culture to retrieve response. Default en-us.
  * PageNumber `integer`: Page number for paging results. Used in conjunction with PageSize.
  * PageSize `integer`: Limits the total items returned. Maximum of 100 per request.

#### Output
* output `array`
  * items [MovieTicketsMovieNowPlayingResponse](#movieticketsmovienowplayingresponse)

### GetMovieTicketsPerformances
Returns MovieTickets Performances by MovieTickets Theater ID, Entertainment Movie ID, and ScheduleDate.


```js
iva_api.GetMovieTicketsPerformances({
  "ScheduleDate": "",
  "TheaterIds": "",
  "EntertainmentMovieIds": ""
}, context)
```

#### Input
* input `object`
  * Culture `string`: Culture to retrieve response. Default en-us.
  * ScheduleDate **required** `string`: Date to get scheduled performances.
  * TheaterIds **required** `string`: Required ID/IDs of MovieTickets Theaters. Comma-seperated for multiple.
  * EntertainmentMovieIds **required** `string`: Required ID/IDs of Entertainment Movies. Comma-seperated for multiple.

#### Output
* output [MovieTicketsPerformancesResponse](#movieticketsperformancesresponse)

### GetMovieTicketsTheaters
Returns MovieTickets Theaters by postal code.


```js
iva_api.GetMovieTicketsTheaters({
  "Distance": 0
}, context)
```

#### Input
* input `object`
  * Culture `string`: Culture to retrieve response. Default en-us.
  * PostalCode `string`: Postal code. Longitude/Latitude not required if passed.
  * Longitude `number`: Longitude coordinate. Used in conjunction with Latitude. Postal code not required if passed.
  * Latitude `number`: Latitude coordinate. Used in conjunction with Longitude. Postal code not required if passed.
  * Distance **required** `integer`: Required distaince in meters.
  * PageNumber `integer`: Page number for paging results. Used in conjunction with PageSize.
  * PageSize `integer`: Limits the total items returned. Maximum of 100 per request.

#### Output
* output `array`
  * items [MovieTicketsTheaterResponse](#movieticketstheaterresponse)

### GetAllMovies
By default the API will only return basic title information. Additional objects can be included by passing the object in the Includes parameter.   


`Subscriptions with "Limited" data will only be able to include basic title information and Videos.`  



```js
iva_api.GetAllMovies({
  "Take": 0
}, context)
```

#### Input
* input `object`
  * Take **required** `integer`: Limits the total items returned. Maximum of 100 per request.
  * Skip `integer`: Skips records using for paging results.
  * Includes `array`: List of additional objects to include in the movie objectSearch movie by OriginalTitle.

#### Output
* output [AllMoviesResponse](#allmoviesresponse)

### GetMovieAlternateIdTypes
Movie alternate ID types refer to 3rd party IDs that IVA matches its own movie IDs.  **EX: IMDB, TMDB**.  

`Use to get the Id of the ID type to use with /Find/Movie.`


```js
iva_api.GetMovieAlternateIdTypes(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [MovieAlternateIdTypeResponse](#moviealternateidtyperesponse)

### GetMoviesComingSoon
Requires Skip and Take. Maximum page size is 10.

By default the API will only return basic title information.
Additional objects can be included by passing the object in the Includes parameter in a comma separated list. 


```js
iva_api.GetMoviesComingSoon({
  "Skip": 0,
  "Take": 0
}, context)
```

#### Input
* input `object`
  * Skip **required** `integer`: Determines where to start page.  Ex: 0 starts at the beginning.
  * Take **required** `integer`: Determines the page size.  (Maximum of 10)
  * Includes `array`: List of additional objects to include in the movie response.

#### Output
* output `array`
  * items [MovieResponse](#movieresponse)

### GetMoviesInTheaters
Requires Skip and Take. Maximum page size is 10.

By default the API will only return basic title information.
Additional objects can be included by passing the object in the Includes parameter in a comma separated list. 


```js
iva_api.GetMoviesInTheaters({
  "Skip": 0,
  "Take": 0
}, context)
```

#### Input
* input `object`
  * Skip **required** `integer`: Determines where to start page.  Ex: 0 starts at the beginning.
  * Take **required** `integer`: Determines the page size.  (Maximum of 10)
  * Includes `array`: List of additional objects to include in the movie response.

#### Output
* output `array`
  * items [MovieResponse](#movieresponse)

### MatchToMovie
Use to match IVA movie data to another data source using title, year, cast etc.


```js
iva_api.MatchToMovie({}, context)
```

#### Input
* input `object`
  * Title `string`: Title of movie to be matched.
  * AlternateTitles `array`: Alternate Titles of movie to be matched.
  * Year `integer`: Release Year of movie to be matched.
  * Cast `array`: Cast members of movie to be matched.
  * Directors `array`: Directors of movie to be matched.
  * StringDistance `integer`: For fuzzy title match, default is 4, set to 0 for no fuzzy match.

#### Output
* output [MatchToEntertainmentMovieResponse](#matchtoentertainmentmovieresponse)

### GetMovieCertifications
Returns all Movie Certifications used in a movie response with the Releases object.


```js
iva_api.GetMovieCertifications(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [MovieCertificationResponse](#moviecertificationresponse)

### GetMovieGenres
List of all movie genres used in the API.


```js
iva_api.GetMovieGenres(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [MovieGenreResponse](#moviegenreresponse)

### GetMovieReleaseTypes
Release type refers to the release. **EX: Theatrical, Home Video, etc.**


```js
iva_api.GetMovieReleaseTypes(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [MovieReleaseTypeResponse](#moviereleasetyperesponse)

### SearchAndDiscoverMovie
Searchable Fields:
Title, AlternateTitles, Genres, OriginalReleaseDate, UnitedStatesReleaseDate, GermanyReleaseDate, FranceReleaseDate, UnitedKingdomReleaseDate, ItalyReleaseDate, JapanReleaseDate, Tags, Cast, Directors, Descriptions, Ratings, OriginalLanguage.
[Syntax Ref](https://docs.microsoft.com/en-us/rest/api/searchservice/simple-query-syntax-in-azure-search)

Filterable Fields:
ID, Title, AlternateTitles, Genres, OriginalReleaseDate, UnitedStatesReleaseDate, GermanyReleaseDate, FranceReleaseDate, UnitedKingdomReleaseDate, ItalyReleaseDate, JapanReleaseDate, Year, Tags, Cast, Directors, Descriptions, HasVideo, PosterFilePath, Ratings, OriginalLanguage, Runtime, Budget, Revenue, Created, Modified.
[Syntax Ref](https://docs.microsoft.com/en-us/rest/api/searchservice/odata-expression-syntax-for-azure-search)


```js
iva_api.SearchAndDiscoverMovie({}, context)
```

#### Input
* input `object`
  * term `string`: Term to search for. This can be combined with all other options. Use '*' to return any match.
  * SelectFields `array`: List of field names to be returned in the object.
  * SearchFields `array`: List of field names to search using 'term.'
  * Filter `string`: Expression to filter results.
  * OrderBy `array`: List of field names to sort results.  Default is relevance.
  * Top `integer`: Limit results.  Maximum returned is 1000.
  * Skip `integer`: Skip number of results. Use this for paging results.
  * IncludeTotalResultCount `boolean`: Includes total results in response. This will have a performance impact.
  * SearchMode `string`: Specifies whether ANY or ALL of the search terms must be matched in order to count the item as a match.

#### Output
* output [SearchMovieResponse](#searchmovieresponse)

### GetMovie
By default the API will only return basic title information. Additional objects can be included by passing the object in the Includes parameter.   


`Subscriptions with "Limited" data will only be able to include basic title information and Videos.`  



```js
iva_api.GetMovie({
  "Id": 0
}, context)
```

#### Input
* input `object`
  * Id **required** `integer`: Required ID of Movie.
  * Includes `array`: List of additional objects to include in the movie response.

#### Output
* output [MovieResponse](#movieresponse)

### GetAllPeople
Returns a AllPeopleResponse object containing a list of all poeple.


```js
iva_api.GetAllPeople({
  "Take": 0
}, context)
```

#### Input
* input `object`
  * Take **required** `integer`: Limits the total items returned. Maximum of 100 per request.
  * Skip `integer`: Skips records using for paging results.
  * Includes `array`: List of additional objects to include in the person response.

#### Output
* output [AllPeopleResponse](#allpeopleresponse)

### GetPersonRankedSearch
Find person using name ordered by rank.


```js
iva_api.GetPersonRankedSearch({}, context)
```

#### Input
* input `object`
  * StartsWith `string`

#### Output
* output [PersonRankedResponse](#personrankedresponse)

### GetPerson
BETA - By default the API will only return basic People information. Additional objects can be included by passing the object in the Includes parameter.


```js
iva_api.GetPerson({
  "Id": 0
}, context)
```

#### Input
* input `object`
  * Id **required** `integer`: Required ID of Person.
  * Includes `array`: List of additional objects to include in the person response.

#### Output
* output [PersonResponse](#personresponse)

### GetFilmography
Requires a valid Person ID.


```js
iva_api.GetFilmography({
  "Id": 0
}, context)
```

#### Input
* input `object`
  * Id **required** `integer`

#### Output
* output [FilmographyResponse](#filmographyresponse)

### GetSDK
Generate and download SDK's for using the API.  Requires a subscription key for authorization and a valid client.


```js
iva_api.GetSDK({
  "Client": "",
  "RedirectToFile": true
}, context)
```

#### Input
* input `object`
  * Client **required** `string` (values: akka_scala, android, async_scala, bash, clojure, cpprest, csharp, CsharpDotNet2, cwiki, dart, dynamic_html, elixir, flash, go, groovy, html, html2, java, javascript, javascript_closure_angular, jaxrs_cxf_client, jmeter, objc, perl, php, python, qt5cpp, ruby, scala, swagger, swagger_yaml, swift, swift3, tizen, typescript_angular, typescript_angular2, typescript_fetch, typescript_node): Client SDK
  * RedirectToFile **required** `boolean`: Redirect to download the zipped SDK.

#### Output
* output [SDKResponse](#sdkresponse)

### GetAllShows
By default the API will only return basic title information. Additional objects can be included by passing the object in the Includes parameter. 


`Subscriptions with "Limited" data will only be able to include basic title information, Videos, EpisodicVideos, and SeasonVideos.`


```js
iva_api.GetAllShows({}, context)
```

#### Input
* input `object`
  * Take `integer`: Limits the total items returned. Maximum of 10 per request.
  * Skip `integer`: Skips records using for paging results.
  * Includes `array`: List of additional objects to include in the show object.

#### Output
* output [AllShowsResponse](#allshowsresponse)

### GetShowAlternateIdTypes
Alternate Id types refer to the 3rd party ID sets IVA data has matched.  **Ex: IMDB**


```js
iva_api.GetShowAlternateIdTypes(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [ShowAlternateIdTypeResponse](#showalternateidtyperesponse)

### MatchToShow
Use to match IVA show data to another data source using title, director, cast, etc.


```js
iva_api.MatchToShow({}, context)
```

#### Input
* input `object`
  * Title `string`: Title of Show to be matched.
  * AlternateTitles `array`: Alternate Titles of Show to be matched.
  * Year `integer`: Release Year of Show to be matched.
  * Cast `array`: Cast members of Show to be matched.
  * Directors `array`: Directors of Show to be matched.
  * StringDistance `integer`: For fuzzy title match, default is 4, set to 0 for no fuzzy match.

#### Output
* output [MatchToEntertainmentShowResponse](#matchtoentertainmentshowresponse)

### GetShowReleaseTypes
Release types refer to the type of release and are used in the releases object for a show.


```js
iva_api.GetShowReleaseTypes(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [ShowReleaseTypeResponse](#showreleasetyperesponse)

### SearchAndDiscoverShow
Searchable Fields: Title, AlternateTitles, Genres, Tags, Cast, Directors, Descriptions, Ratings, OriginalLanguage. [Syntax Ref](https://docs.microsoft.com/en-us/rest/api/searchservice/simple-query-syntax-in-azure-search)

Filterable Fields: Id, Title, AlternateTitles, Genres, OriginalAirDate, Year, Tags, Cast, Directors, Descriptions, HasVideo, ImageFilePath, Ratings, OriginalLanguage, Created, Modified, NumberOfSeasons, NumberOfEpisodes. [Syntax Ref](https://docs.microsoft.com/en-us/rest/api/searchservice/simple-query-syntax-in-azure-search)


```js
iva_api.SearchAndDiscoverShow({}, context)
```

#### Input
* input `object`
  * term `string`: Term to search for. This can be combined with all other options. Use '*' to return any match.
  * SelectFields `array`: List of field names to be returned in the object.
  * SearchFields `array`: List of field names to search using 'term.'
  * Filter `string`: Expression to filter results.
  * OrderBy `array`: List of field names to sort results.  Default is relevance.
  * Top `integer`: Limit results.  Maximum returned is 1000.
  * Skip `integer`: Skip number of results. Use this for paging results.
  * IncludeTotalResultCount `boolean`: Includes total results in response. This will have a performance impact.
  * SearchMode `string`: Specifies whether ANY or ALL of the search terms must be matched in order to count the item as a match.

#### Output
* output [SearchShowResponse](#searchshowresponse)

### GetSeasonByNumber
Use the IVA ShowId and a season number to get a season details and video asset data.


```js
iva_api.GetSeasonByNumber({
  "Id": 0,
  "SeasonNumber": 0
}, context)
```

#### Input
* input `object`
  * Id **required** `integer`: Id of a Show.
  * SeasonNumber **required** `integer`: Number of a Season belonging to a Show.

#### Output
* output [SeasonResponse](#seasonresponse)

### GetEpisodeByNumber
Some use cases find it useful to be able to pass a season number and episode number of a known show to get the data for that exact episode.  


```js
iva_api.GetEpisodeByNumber({
  "Id": 0,
  "SeasonNumber": 0,
  "EpisodeNumber": 0
}, context)
```

#### Input
* input `object`
  * Id **required** `integer`: Required Id of the Show.
  * SeasonNumber **required** `integer`: Required SeasonNumber.
  * EpisodeNumber **required** `integer`: Required EpisodeNumber.

#### Output
* output [EpisodeResponse](#episoderesponse)

### GetEpisode
Returns the episode details for a specific episode ID.


```js
iva_api.GetEpisode({
  "Id": 0
}, context)
```

#### Input
* input `object`
  * Id **required** `integer`: Required ID of an Episode.
  * Includes `array`: List of additional objects to include in the episode response.

#### Output
* output [EpisodeResponse](#episoderesponse)

### GetSeason
Use with a SeasonId to return details for a season including any video asset data.


```js
iva_api.GetSeason({
  "Id": 0
}, context)
```

#### Input
* input `object`
  * Id **required** `integer`: Id of a Season.
  * Includes `array`: List of additional objects to include in the season response.

#### Output
* output [SeasonResponse](#seasonresponse)

### GetShowCertifications
List of Show Certifications and definitions.


```js
iva_api.GetShowCertifications(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [ShowCertificationResponse](#showcertificationresponse)

### GetShowGenres
Returns a list of all the show genres used in the IVA database.


```js
iva_api.GetShowGenres(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [ShowGenreResponse](#showgenreresponse)

### GetShow
By default the API will only return basic title information. Additional objects can be included by passing the object in the Includes parameter.  


`Subscriptions with "Limited" data will only be able to include basic title information, Videos, EpisodicVideos, and SeasonVideos.`


```js
iva_api.GetShow({
  "Id": 0
}, context)
```

#### Input
* input `object`
  * Id **required** `integer`: Required ID of Show.
  * Includes `array`: List of additional objects to include in the show response.

#### Output
* output [ShowResponse](#showresponse)

### GetSeasonBySeasonNumber
Depreciated. Use GetSeasonBySeasonNumber instead.  Requires a valid ShowId and Season Number.


```js
iva_api.GetSeasonBySeasonNumber({
  "Id": 0,
  "SeasonNumber": 0
}, context)
```

#### Input
* input `object`
  * Id **required** `integer`: Id of a Show.
  * SeasonNumber **required** `integer`: Number of a Season belonging to a Show.
  * Includes `array`: List of additional objects to include in the season response.

#### Output
* output [SeasonResponse](#seasonresponse)

### GetEpisodeByEpisodeNumber
Requires a valid ShowId, Season Number and Episode Number.


```js
iva_api.GetEpisodeByEpisodeNumber({
  "Id": 0,
  "SeasonNumber": 0,
  "EpisodeNumber": 0
}, context)
```

#### Input
* input `object`
  * Id **required** `integer`: Required Id of the Show.
  * SeasonNumber **required** `integer`: Required SeasonNumber.
  * EpisodeNumber **required** `integer`: Required EpisodeNumber.
  * Includes `array`: List of additional objects to include in the episode response.

#### Output
* output [EpisodeResponse](#episoderesponse)

### GetTestDateTime
Entertainment Express APIs use date time format ISO 8601.  Use this API to test your date time format to see if it translates to a valid time on our server.


```js
iva_api.GetTestDateTime({
  "DateTime": ""
}, context)
```

#### Input
* input `object`
  * DateTime **required** `string`: DateTime to test format from API.

#### Output
* output [TestDateTimeResponse](#testdatetimeresponse)

### GetTheatricalMovies
Deprecated. Use /Movies/InTheaters or /Movies/ComingSoon instead. Returns all movies with a US Theatrical Release Date > today - 60 days.  Use the includes parameter to include additional objects related to the movie.  The includes parameter takes a comma separated list of objects.  **EX: Genres,Descriptions,Videos**    






```js
iva_api.GetTheatricalMovies({
  "Skip": 0,
  "Take": 0
}, context)
```

#### Input
* input `object`
  * Skip **required** `integer`: Determines where to start page.  Ex: 0 starts at the beginning.
  * Take **required** `integer`: Determines the page size.  (Maximum of 10)
  * Includes `array`: List of additional objects to include in the movie response.

#### Output
* output `array`
  * items [MovieResponse](#movieresponse)

### GetTvMediaMovieGenres
Gets list of movie genres.


```js
iva_api.GetTvMediaMovieGenres({
  "TvMediaApiKey": ""
}, context)
```

#### Input
* input `object`
  * TvMediaApiKey **required** `string`: API Key supplied by TvMedia.ca

#### Output
* output `array`
  * items [TvMediaGenreResponse](#tvmediagenreresponse)

### GetTvMediaShowGenres
Gets list of show genres.


```js
iva_api.GetTvMediaShowGenres({
  "TvMediaApiKey": ""
}, context)
```

#### Input
* input `object`
  * TvMediaApiKey **required** `string`: API Key supplied by TvMedia.ca

#### Output
* output `array`
  * items [TvMediaGenreResponse](#tvmediagenreresponse)

### GetTvMediaSportGenres
Gets list of sports genres.


```js
iva_api.GetTvMediaSportGenres({
  "TvMediaApiKey": ""
}, context)
```

#### Input
* input `object`
  * TvMediaApiKey **required** `string`: API Key supplied by TvMedia.ca

#### Output
* output `array`
  * items [TvMediaGenreResponse](#tvmediagenreresponse)

### GetTvMediaLeagues
Gets list of sports leagues.


```js
iva_api.GetTvMediaLeagues({
  "TvMediaApiKey": ""
}, context)
```

#### Input
* input `object`
  * TvMediaApiKey **required** `string`: API Key supplied by TvMedia.ca

#### Output
* output `array`
  * items [TvMediaLeagueResponse](#tvmedialeagueresponse)

### GetTvMediaLeagueListings
Retrieve listings for a given leagueID.


```js
iva_api.GetTvMediaLeagueListings({
  "TvMediaApiKey": "",
  "LeagueID": "",
  "LineupID": ""
}, context)
```

#### Input
* input `object`
  * TvMediaApiKey **required** `string`: API Key supplied by TvMedia.ca
  * LeagueID **required** `string`: League ID. See /leagues for a list of all available sports leagues.
  * LineupID **required** `string`: Lineup ID. Lineups can be found through the /TvMedia/lineups method.
  * Start `string`: UTC start time in ISO8601. Defaults to current date and time.
  * End `string`: UTC end time in ISO8601. Defaults to 'start' time +4 hours.
  * TimeZone `integer`: Set a timezone or time offset for listing times (listDateTime property). Defaults to UTC, accepts time offsets (+/-HH:MM) or named time zones (see IANA Time Zone Database). If an invalid value is set, listDateTime will be returned as empty. NOTE: this parameter does not affect input values; start and end times must still be provided in UTC.
  * Channel `array`: Include only channel(s) with this number, single or array values accepted. sub channel numbers can be hyphenated to the end of the string: e.g. 1-2 for sub channel 2 of channel 1 (use the channel.number property , NOT channel.channelNumber property).
  * ExcludeChan `array`: Exclude channels by number, single or array values accepted. sub channel numbers can be hyphenated to the end of the string: e.g. 1-2 for sub channel 2 of channel 1 (use the channel.number property, NOT the channel.channelNumber property).
  * StartChan `array`: Lowest channel. sub channel numbers can be hyphenated to the end of the string: e.g. 1-2 for sub channel 2 of channel 1.
  * EndChan `array`: Highest channel. sub channel numbers can be hyphenated to the end of the string: e.g. 1-2 for sub channel 2 of channel 1. In general this parameter should rarely be used, for shaping the grid size see the 'maxchan' parameter.
  * Station `array`: Filter by station ID. Array or single value accepted. Station ID's can be found in listings, or by using the /lineups API.
  * ExcludeStation `array`: Filter out station IDs; array or single value accepted. Station ID's can be found in listings, or by using the /lineups API.
  * Search `string`: search value: can be a show, episode, movie, team, league, person, etc. Results will be sorted by relevance rather than time.
  * ShowType `array`: Include only these show type ID(s), array or single values accepted. Must be URL encoded. For a list of possible show type's and their ID's see /genres/shows, or the showTypeID property of a listing object.
  * ExcludeShowType `array`: Exclude only these show type ID(s), array or single values accepted. Must be URL encoded. For a list of possible show type's and their ID's see /genres/shows, or the showTypeID property of a listing object.
  * Id `array`: ListingID, array or single values accepted. to return a single listing it should be used in combination with a stationID (station parameter).
  * SportType `array`: Get only sports listings of type sportTypeID. Array or single values accepted. For a list of possible values see /genres/sports.
  * League `array`: Get only sports listings in the given league ID(s). Array or single values accepted. For a list of possible values see /leagues.
  * Team `array`: Filter by teams playing by name(teams.longName). Array or single values accepted, for a list of possible values see /leagues/teams. (NOTE: league parameter is required when using this parameter).
  * NotYetStarted `boolean`: Only displays listings which are starting on or after the given start time. No value necessary.
  * SportEventsOnly `boolean`: Get sporting events only. No value necessary.
  * DescriptiveVideoOnly `boolean`: Only displays listings which are flagged as being broadcast with Descriptive Video. No value necessary.
  * LiveOnly `boolean`: Only displays live listings. No value necessary.
  * NewShowsOnly `boolean`: Get new shows only. No value necessary.
  * AdultContent `boolean`: Defaults to 1 (allowed). Set to 0 to hide adult content.
  * DisplayArtwork `boolean`: Displays the Artwork information. Set to 1 to include, 1 is default. 0 to hide (will improve performance).
  * Detail `string` (values: full, brief): Set level of detail for response. values are 'full' or 'brief', defaults to 'full'. 'full' will include all properties, 'brief' will exclude optional properties.

#### Output
* output `array`
  * items [TvMediaListingResponse](#tvmedialistingresponse)

### GetTvMediaTeams
Gets list of teams in a league.


```js
iva_api.GetTvMediaTeams({
  "TvMediaApiKey": "",
  "LeagueID": ""
}, context)
```

#### Input
* input `object`
  * TvMediaApiKey **required** `string`: API Key supplied by TvMedia.ca
  * LeagueID **required** `string`: League ID. See /TvMedia/leagues for a list of all available sports leagues.

#### Output
* output `array`
  * items [TvMediaTeamResponse](#tvmediateamresponse)

### GetTvMediaLineupsByPostalCode
Get lineups by postal code.


```js
iva_api.GetTvMediaLineupsByPostalCode({
  "TvMediaApiKey": "",
  "PostalCode": ""
}, context)
```

#### Input
* input `object`
  * TvMediaApiKey **required** `string`: API Key supplied by TvMedia.ca
  * PostalCode **required** `string`: Postal code.
  * LineupType `string` (values: OTA, SAT, CAB, IPTV): Filter by lineup type, valid types are OTA, SAT, CAB, IPTV.
  * ProviderId `string`: Filter by provider ID
  * Detail `string` (values: full, brief): Set level of detail for response. values are 'full' or 'brief', defaults to 'brief'. 'full' will include all properties, 'brief' will exclude optional properties.

#### Output
* output `array`
  * items [TvMediaLineupResponse](#tvmedialineupresponse)

### GetTvMediaCountries
Starting point for lineup browser, returns available countries.


```js
iva_api.GetTvMediaCountries({
  "TvMediaApiKey": ""
}, context)
```

#### Input
* input `object`
  * TvMediaApiKey **required** `string`: API Key supplied by TvMedia.ca

#### Output
* output `array`
  * items [TvMediaCountryResponse](#tvmediacountryresponse)

### GetTvMediaRegions
Browse regions by country.


```js
iva_api.GetTvMediaRegions({
  "TvMediaApiKey": "",
  "CountryID": ""
}, context)
```

#### Input
* input `object`
  * TvMediaApiKey **required** `string`: API Key supplied by TvMedia.ca
  * CountryID **required** `string`: Country abbreviation. See TvMedia/lineups/browse for a list of supported countries.

#### Output
* output `array`
  * items [TvMediaRegionResponse](#tvmediaregionresponse)

### GetTvMediaServiceAreas
Get service areas for a specific country and region.


```js
iva_api.GetTvMediaServiceAreas({
  "TvMediaApiKey": "",
  "CountryID": "",
  "RegionID": ""
}, context)
```

#### Input
* input `object`
  * TvMediaApiKey **required** `string`: API Key supplied by TvMedia.ca
  * CountryID **required** `string`: Country abbreviation. See TvMedia/lineups/browse for a list of supported countries.
  * RegionID **required** `string`: Region abbreviation. See TvMedia/lineups/browse/{CountryID} for a list of regions.

#### Output
* output `array`
  * items [TvMediaServiceAreaResponse](#tvmediaservicearearesponse)

### GetTvMediaLineupsByAreaID
Get lineups by AreaID.


```js
iva_api.GetTvMediaLineupsByAreaID({
  "TvMediaApiKey": "",
  "CountryID": "",
  "RegionID": "",
  "AreaID": ""
}, context)
```

#### Input
* input `object`
  * TvMediaApiKey **required** `string`: API Key supplied by TvMedia.ca
  * CountryID **required** `string`: Country abbreviation. See TvMedia/lineups/browse for a list of supported countries.
  * RegionID **required** `string`: Region abbreviation. See TvMedia/lineups/browse/{CountryID} for a list of regions.
  * AreaID **required** `string`: Service area ID. See TvMedia/lineups/browse/{CountryID}/{RegionID} for a list of service areas.
  * LineupType `string` (values: OTA, SAT, CAB, IPTV): Filter by lineup type, valid types are OTA, SAT, CAB, IPTV.
  * ProviderId `string`: Filter by provider ID
  * Detail `string` (values: full, brief): Set level of detail for response. values are 'full' or 'brief', defaults to 'brief'. 'full' will include all properties, 'brief' will exclude optional properties.

#### Output
* output `array`
  * items [TvMediaLineupResponse](#tvmedialineupresponse)

### GetTvMediaLineupsByLatitudeLongitude
Get lineups by latitude and longitude.


```js
iva_api.GetTvMediaLineupsByLatitudeLongitude({
  "TvMediaApiKey": "",
  "Latitude": 0,
  "Longitude": 0
}, context)
```

#### Input
* input `object`
  * TvMediaApiKey **required** `string`: API Key supplied by TvMedia.ca
  * Latitude **required** `number`: Latitude (geographic coordinate).
  * Longitude **required** `number`: Longitude (geographic coordinate).
  * LineupType `string` (values: OTA, SAT, CAB, IPTV): Filter by lineup type, valid types are OTA, SAT, CAB, IPTV.
  * ProviderId `string`: Filter by provider ID
  * Detail `string` (values: full, brief): Set level of detail for response. values are 'full' or 'brief', defaults to 'brief'. 'full' will include all properties, 'brief' will exclude optional properties.

#### Output
* output `array`
  * items [TvMediaLineupResponse](#tvmedialineupresponse)

### GetTvMediaLineupByID
Get lineups by specific LineupID.


```js
iva_api.GetTvMediaLineupByID({
  "TvMediaApiKey": "",
  "LineupID": ""
}, context)
```

#### Input
* input `object`
  * TvMediaApiKey **required** `string`: API Key supplied by TvMedia.ca
  * LineupID **required** `string`: Lineup ID.
  * Detail `string` (values: full, brief): Set level of detail for response. values are 'full' or 'brief', defaults to 'full'. 'full' will include all properties, 'brief' will exclude optional properties.

#### Output
* output [TvMediaLineupResponse](#tvmedialineupresponse)

### GetTvMediaLineupListings
Retrieve individual listings for a given lineup ordered by start time (listDateTime) and channel number; unless using the search parameter, in which case they will be ordered by search term relevance.


```js
iva_api.GetTvMediaLineupListings({
  "TvMediaApiKey": "",
  "LineupID": ""
}, context)
```

#### Input
* input `object`
  * TvMediaApiKey **required** `string`: API Key supplied by TvMedia.ca
  * LineupID **required** `string`: Lineup ID.
  * Start `string`: UTC start time in ISO8601. Defaults to current date and time.
  * End `string`: UTC end time in ISO8601. Defaults to 'start' time +4 hours.
  * TimeZone `integer`: Set a timezone or time offset for listing times (listDateTime property). Defaults to UTC, accepts time offsets (+/-HH:MM) or named time zones (see IANA Time Zone Database). If an invalid value is set, listDateTime will be returned as empty. NOTE: this parameter does not affect input values; start and end times must still be provided in UTC.
  * Channel `array`: Include only channel(s) with this number, single or array values accepted. sub channel numbers can be hyphenated to the end of the string: e.g. 1-2 for sub channel 2 of channel 1 (use the channel.number property , NOT channel.channelNumber property).
  * ExcludeChan `array`: Exclude channels by number, single or array values accepted. sub channel numbers can be hyphenated to the end of the string: e.g. 1-2 for sub channel 2 of channel 1 (use the channel.number property, NOT the channel.channelNumber property).
  * StartChan `array`: Lowest channel. sub channel numbers can be hyphenated to the end of the string: e.g. 1-2 for sub channel 2 of channel 1.
  * EndChan `array`: Highest channel. sub channel numbers can be hyphenated to the end of the string: e.g. 1-2 for sub channel 2 of channel 1. In general this parameter should rarely be used, for shaping the grid size see the 'maxchan' parameter.
  * Station `array`: Filter by station ID. Array or single value accepted. Station ID's can be found in listings, or by using the /lineups API.
  * ExcludeStation `array`: Filter out station IDs; array or single value accepted. Station ID's can be found in listings, or by using the /lineups API.
  * Search `string`: search value: can be a show, episode, movie, team, league, person, etc. Results will be sorted by relevance rather than time.
  * ShowType `array`: Include only these show type ID(s), array or single values accepted. Must be URL encoded. For a list of possible show type's and their ID's see /genres/shows, or the showTypeID property of a listing object.
  * ExcludeShowType `array`: Exclude only these show type ID(s), array or single values accepted. Must be URL encoded. For a list of possible show type's and their ID's see /genres/shows, or the showTypeID property of a listing object.
  * Id `array`: ListingID, array or single values accepted. to return a single listing it should be used in combination with a stationID (station parameter).
  * SportType `array`: Get only sports listings of type sportTypeID. Array or single values accepted. For a list of possible values see /genres/sports.
  * League `array`: Get only sports listings in the given league ID(s). Array or single values accepted. For a list of possible values see /leagues.
  * Team `array`: Filter by teams playing by name(teams.longName). Array or single values accepted, for a list of possible values see /leagues/teams. (NOTE: league parameter is required when using this parameter).
  * NotYetStarted `boolean`: Only displays listings which are starting on or after the given start time. No value necessary.
  * SportEventsOnly `boolean`: Get sporting events only. No value necessary.
  * DescriptiveVideoOnly `boolean`: Only displays listings which are flagged as being broadcast with Descriptive Video. No value necessary.
  * LiveOnly `boolean`: Only displays live listings. No value necessary.
  * NewShowsOnly `boolean`: Get new shows only. No value necessary.
  * AdultContent `boolean`: Defaults to 1 (allowed). Set to 0 to hide adult content.
  * DisplayArtwork `boolean`: Displays the Artwork information. Set to 1 to include, 1 is default. 0 to hide (will improve performance).
  * Detail `string` (values: full, brief): Set level of detail for response. values are 'full' or 'brief', defaults to 'full'. 'full' will include all properties, 'brief' will exclude optional properties.

#### Output
* output `array`
  * items [TvMediaListingResponse](#tvmedialistingresponse)

### GetTvMediaLineupListingsGrid
A collection of listings grouped by channel and ordered by listDateTime. The grid dimensions ( time x channels ) can be modified by using the start, end, startchan and maxchan parameters. Channels without any listings will be returned with an empty listings collection.


```js
iva_api.GetTvMediaLineupListingsGrid({
  "TvMediaApiKey": "",
  "LineupID": ""
}, context)
```

#### Input
* input `object`
  * TvMediaApiKey **required** `string`: API Key supplied by TvMedia.ca
  * LineupID **required** `string`: Lineup ID.
  * Start `string`: UTC start time in ISO8601. Defaults to current date and time.
  * End `string`: UTC end time in ISO8601. Defaults to 'start' time +4 hours.
  * TimeZone `integer`: Set a timezone or time offset for listing times (listDateTime property). Defaults to UTC, accepts time offsets (+/-HH:MM) or named time zones (see IANA Time Zone Database). If an invalid value is set, listDateTime will be returned as empty. NOTE: this parameter does not affect input values; start and end times must still be provided in UTC.
  * Channel `array`: Include only channel(s) with this number, single or array values accepted. sub channel numbers can be hyphenated to the end of the string: e.g. 1-2 for sub channel 2 of channel 1 (use the channel.number property , NOT channel.channelNumber property).
  * ExcludeChan `array`: Exclude channels by number, single or array values accepted. sub channel numbers can be hyphenated to the end of the string: e.g. 1-2 for sub channel 2 of channel 1 (use the channel.number property, NOT the channel.channelNumber property).
  * StartChan `array`: Lowest channel. sub channel numbers can be hyphenated to the end of the string: e.g. 1-2 for sub channel 2 of channel 1.
  * EndChan `array`: Highest channel. sub channel numbers can be hyphenated to the end of the string: e.g. 1-2 for sub channel 2 of channel 1. In general this parameter should rarely be used, for shaping the grid size see the 'maxchan' parameter.
  * Station `array`: Filter by station ID. Array or single value accepted. Station ID's can be found in listings, or by using the /lineups API.
  * ExcludeStation `array`: Filter out station IDs; array or single value accepted. Station ID's can be found in listings, or by using the /lineups API.
  * Search `string`: search value: can be a show, episode, movie, team, league, person, etc. Results will be sorted by relevance rather than time.
  * ShowType `array`: Include only these show type ID(s), array or single values accepted. Must be URL encoded. For a list of possible show type's and their ID's see /genres/shows, or the showTypeID property of a listing object.
  * ExcludeShowType `array`: Exclude only these show type ID(s), array or single values accepted. Must be URL encoded. For a list of possible show type's and their ID's see /genres/shows, or the showTypeID property of a listing object.
  * Id `array`: ListingID, array or single values accepted. to return a single listing it should be used in combination with a stationID (station parameter).
  * SportType `array`: Get only sports listings of type sportTypeID. Array or single values accepted. For a list of possible values see /genres/sports.
  * League `array`: Get only sports listings in the given league ID(s). Array or single values accepted. For a list of possible values see /leagues.
  * Team `array`: Filter by teams playing by name(teams.longName). Array or single values accepted, for a list of possible values see /leagues/teams. (NOTE: league parameter is required when using this parameter).
  * NotYetStarted `boolean`: Only displays listings which are starting on or after the given start time. No value necessary.
  * SportEventsOnly `boolean`: Get sporting events only. No value necessary.
  * DescriptiveVideoOnly `boolean`: Only displays listings which are flagged as being broadcast with Descriptive Video. No value necessary.
  * LiveOnly `boolean`: Only displays live listings. No value necessary.
  * NewShowsOnly `boolean`: Get new shows only. No value necessary.
  * AdultContent `boolean`: Defaults to 1 (allowed). Set to 0 to hide adult content.
  * DisplayArtwork `boolean`: Displays the Artwork information. Set to 1 to include, 1 is default. 0 to hide (will improve performance).
  * Detail `string` (values: full, brief): Set level of detail for response. values are 'full' or 'brief', defaults to 'full'. 'full' will include all properties, 'brief' will exclude optional properties.

#### Output
* output `array`
  * items [TvMediaGridResponse](#tvmediagridresponse)

### GetTvMediaLineupListingsHighlights
Retrieves featured listings. setting a start and/or end time for every request is a highly recommended.


```js
iva_api.GetTvMediaLineupListingsHighlights({
  "TvMediaApiKey": "",
  "LineupID": ""
}, context)
```

#### Input
* input `object`
  * TvMediaApiKey **required** `string`: API Key supplied by TvMedia.ca
  * LineupID **required** `string`: Lineup ID.
  * Start `string`: UTC start time in ISO8601. Defaults to current date and time.
  * End `string`: UTC end time in ISO8601. Defaults to 'start' time +4 hours.
  * TimeZone `integer`: Set a timezone or time offset for listing times (listDateTime property). Defaults to UTC, accepts time offsets (+/-HH:MM) or named time zones (see IANA Time Zone Database). If an invalid value is set, listDateTime will be returned as empty. NOTE: this parameter does not affect input values; start and end times must still be provided in UTC.
  * Channel `array`: Include only channel(s) with this number, single or array values accepted. sub channel numbers can be hyphenated to the end of the string: e.g. 1-2 for sub channel 2 of channel 1 (use the channel.number property , NOT channel.channelNumber property).
  * ExcludeChan `array`: Exclude channels by number, single or array values accepted. sub channel numbers can be hyphenated to the end of the string: e.g. 1-2 for sub channel 2 of channel 1 (use the channel.number property, NOT the channel.channelNumber property).
  * StartChan `array`: Lowest channel. sub channel numbers can be hyphenated to the end of the string: e.g. 1-2 for sub channel 2 of channel 1.
  * EndChan `array`: Highest channel. sub channel numbers can be hyphenated to the end of the string: e.g. 1-2 for sub channel 2 of channel 1. In general this parameter should rarely be used, for shaping the grid size see the 'maxchan' parameter.
  * Station `array`: Filter by station ID. Array or single value accepted. Station ID's can be found in listings, or by using the /lineups API.
  * ExcludeStation `array`: Filter out station IDs; array or single value accepted. Station ID's can be found in listings, or by using the /lineups API.
  * Search `string`: search value: can be a show, episode, movie, team, league, person, etc. Results will be sorted by relevance rather than time.
  * ShowType `array`: Include only these show type ID(s), array or single values accepted. Must be URL encoded. For a list of possible show type's and their ID's see /genres/shows, or the showTypeID property of a listing object.
  * ExcludeShowType `array`: Exclude only these show type ID(s), array or single values accepted. Must be URL encoded. For a list of possible show type's and their ID's see /genres/shows, or the showTypeID property of a listing object.
  * Id `array`: ListingID, array or single values accepted. to return a single listing it should be used in combination with a stationID (station parameter).
  * SportType `array`: Get only sports listings of type sportTypeID. Array or single values accepted. For a list of possible values see /genres/sports.
  * League `array`: Get only sports listings in the given league ID(s). Array or single values accepted. For a list of possible values see /leagues.
  * Team `array`: Filter by teams playing by name(teams.longName). Array or single values accepted, for a list of possible values see /leagues/teams. (NOTE: league parameter is required when using this parameter).
  * NotYetStarted `boolean`: Only displays listings which are starting on or after the given start time. No value necessary.
  * SportEventsOnly `boolean`: Get sporting events only. No value necessary.
  * DescriptiveVideoOnly `boolean`: Only displays listings which are flagged as being broadcast with Descriptive Video. No value necessary.
  * LiveOnly `boolean`: Only displays live listings. No value necessary.
  * NewShowsOnly `boolean`: Get new shows only. No value necessary.
  * AdultContent `boolean`: Defaults to 1 (allowed). Set to 0 to hide adult content.
  * DisplayArtwork `boolean`: Displays the Artwork information. Set to 1 to include, 1 is default. 0 to hide (will improve performance).
  * Detail `string` (values: full, brief): Set level of detail for response. values are 'full' or 'brief', defaults to 'full'. 'full' will include all properties, 'brief' will exclude optional properties.

#### Output
* output `array`
  * items [TvMediaListingResponse](#tvmedialistingresponse)

### GetTvMediaGenericLineups
Get list of generic lineup IDs that can be used.  A 'generic' lineup is not a real lineup, but a collection of stations defined by TV Media.  Any listing retrieved using a generic lineup will not return any channel number information, as it is irrelevant.


```js
iva_api.GetTvMediaGenericLineups({
  "TvMediaApiKey": ""
}, context)
```

#### Input
* input `object`
  * TvMediaApiKey **required** `string`: API Key supplied by TvMedia.ca
  * Detail `string` (values: full, brief): Set level of detail for response. values are 'full' or 'brief', defaults to 'brief'. 'full' will include all properties, 'brief' will exclude optional properties.

#### Output
* output `array`
  * items [TvMediaLineupResponse](#tvmedialineupresponse)

### GetTvMediaStation
Gets station details by ID.


```js
iva_api.GetTvMediaStation({
  "TvMediaApiKey": "",
  "StationID": 0
}, context)
```

#### Input
* input `object`
  * TvMediaApiKey **required** `string`: API Key supplied by TvMedia.ca
  * StationID **required** `integer`: Station ID. Station ID's can be found in listings, or by using the Tvmedia/lineups API

#### Output
* output [TvMediaStationResponse](#tvmediastationresponse)

### GetTvMediaListingsByStation
Get listings for a given station.


```js
iva_api.GetTvMediaListingsByStation({
  "TvMediaApiKey": "",
  "StationID": 0
}, context)
```

#### Input
* input `object`
  * TvMediaApiKey **required** `string`: API Key supplied by TvMedia.ca
  * StationID **required** `integer`: Station ID. Station ID's can be found in listings, or by using the Tvmedia/lineups API
  * Start `string`: UTC start time in ISO8601. Defaults to current date and time.
  * End `string`: UTC end time in ISO8601. Defaults to 'start' time +4 hours.
  * TimeZone `integer`: Set a timezone or time offset for listing times (listDateTime property). Defaults to UTC, accepts time offsets (+/-HH:MM) or named time zones (see IANA Time Zone Database). If an invalid value is set, listDateTime will be returned as empty. NOTE: this parameter does not affect input values; start and end times must still be provided in UTC.
  * Channel `array`: Include only channel(s) with this number, single or array values accepted. sub channel numbers can be hyphenated to the end of the string: e.g. 1-2 for sub channel 2 of channel 1 (use the channel.number property , NOT channel.channelNumber property).
  * ExcludeChan `array`: Exclude channels by number, single or array values accepted. sub channel numbers can be hyphenated to the end of the string: e.g. 1-2 for sub channel 2 of channel 1 (use the channel.number property, NOT the channel.channelNumber property).
  * StartChan `array`: Lowest channel. sub channel numbers can be hyphenated to the end of the string: e.g. 1-2 for sub channel 2 of channel 1.
  * EndChan `array`: Highest channel. sub channel numbers can be hyphenated to the end of the string: e.g. 1-2 for sub channel 2 of channel 1. In general this parameter should rarely be used, for shaping the grid size see the 'maxchan' parameter.
  * Station `array`: Filter by station ID. Array or single value accepted. Station ID's can be found in listings, or by using the /lineups API.
  * ExcludeStation `array`: Filter out station IDs; array or single value accepted. Station ID's can be found in listings, or by using the /lineups API.
  * Search `string`: search value: can be a show, episode, movie, team, league, person, etc. Results will be sorted by relevance rather than time.
  * ShowType `array`: Include only these show type ID(s), array or single values accepted. Must be URL encoded. For a list of possible show type's and their ID's see /genres/shows, or the showTypeID property of a listing object.
  * ExcludeShowType `array`: Exclude only these show type ID(s), array or single values accepted. Must be URL encoded. For a list of possible show type's and their ID's see /genres/shows, or the showTypeID property of a listing object.
  * Id `array`: ListingID, array or single values accepted. to return a single listing it should be used in combination with a stationID (station parameter).
  * SportType `array`: Get only sports listings of type sportTypeID. Array or single values accepted. For a list of possible values see /genres/sports.
  * League `array`: Get only sports listings in the given league ID(s). Array or single values accepted. For a list of possible values see /leagues.
  * Team `array`: Filter by teams playing by name(teams.longName). Array or single values accepted, for a list of possible values see /leagues/teams. (NOTE: league parameter is required when using this parameter).
  * NotYetStarted `boolean`: Only displays listings which are starting on or after the given start time. No value necessary.
  * SportEventsOnly `boolean`: Get sporting events only. No value necessary.
  * DescriptiveVideoOnly `boolean`: Only displays listings which are flagged as being broadcast with Descriptive Video. No value necessary.
  * LiveOnly `boolean`: Only displays live listings. No value necessary.
  * NewShowsOnly `boolean`: Get new shows only. No value necessary.
  * AdultContent `boolean`: Defaults to 1 (allowed). Set to 0 to hide adult content.
  * DisplayArtwork `boolean`: Displays the Artwork information. Set to 1 to include, 1 is default. 0 to hide (will improve performance).
  * Detail `string` (values: full, brief): Set level of detail for response. values are 'full' or 'brief', defaults to 'full'. 'full' will include all properties, 'brief' will exclude optional properties.

#### Output
* output `array`
  * items [TvMediaShortListingResponse](#tvmediashortlistingresponse)

### GetTvMediaTeamById
Gets details for a specific team.


```js
iva_api.GetTvMediaTeamById({
  "TvMediaApiKey": "",
  "TeamID": 0
}, context)
```

#### Input
* input `object`
  * TvMediaApiKey **required** `string`: API Key supplied by TvMedia.ca
  * TeamID **required** `integer`: Team ID.

#### Output
* output `array`
  * items [TvMediaTeamResponse](#tvmediateamresponse)

### GetTvMediaTeamListings
Retrieve listings for a given TeamID.


```js
iva_api.GetTvMediaTeamListings({
  "TvMediaApiKey": "",
  "TeamID": 0,
  "LineupID": ""
}, context)
```

#### Input
* input `object`
  * TvMediaApiKey **required** `string`: API Key supplied by TvMedia.ca
  * TeamID **required** `integer`: Team ID. See /teams for a list of all available sports teams.
  * LineupID **required** `string`: Lineup ID. Lineups can be found through the /TvMedia/lineups method.
  * Start `string`: UTC start time in ISO8601. Defaults to current date and time.
  * End `string`: UTC end time in ISO8601. Defaults to 'start' time +4 hours.
  * TimeZone `integer`: Set a timezone or time offset for listing times (listDateTime property). Defaults to UTC, accepts time offsets (+/-HH:MM) or named time zones (see IANA Time Zone Database). If an invalid value is set, listDateTime will be returned as empty. NOTE: this parameter does not affect input values; start and end times must still be provided in UTC.
  * Channel `array`: Include only channel(s) with this number, single or array values accepted. sub channel numbers can be hyphenated to the end of the string: e.g. 1-2 for sub channel 2 of channel 1 (use the channel.number property , NOT channel.channelNumber property).
  * ExcludeChan `array`: Exclude channels by number, single or array values accepted. sub channel numbers can be hyphenated to the end of the string: e.g. 1-2 for sub channel 2 of channel 1 (use the channel.number property, NOT the channel.channelNumber property).
  * StartChan `array`: Lowest channel. sub channel numbers can be hyphenated to the end of the string: e.g. 1-2 for sub channel 2 of channel 1.
  * EndChan `array`: Highest channel. sub channel numbers can be hyphenated to the end of the string: e.g. 1-2 for sub channel 2 of channel 1. In general this parameter should rarely be used, for shaping the grid size see the 'maxchan' parameter.
  * Station `array`: Filter by station ID. Array or single value accepted. Station ID's can be found in listings, or by using the /lineups API.
  * ExcludeStation `array`: Filter out station IDs; array or single value accepted. Station ID's can be found in listings, or by using the /lineups API.
  * Search `string`: search value: can be a show, episode, movie, team, league, person, etc. Results will be sorted by relevance rather than time.
  * ShowType `array`: Include only these show type ID(s), array or single values accepted. Must be URL encoded. For a list of possible show type's and their ID's see /genres/shows, or the showTypeID property of a listing object.
  * ExcludeShowType `array`: Exclude only these show type ID(s), array or single values accepted. Must be URL encoded. For a list of possible show type's and their ID's see /genres/shows, or the showTypeID property of a listing object.
  * Id `array`: ListingID, array or single values accepted. to return a single listing it should be used in combination with a stationID (station parameter).
  * SportType `array`: Get only sports listings of type sportTypeID. Array or single values accepted. For a list of possible values see /genres/sports.
  * League `array`: Get only sports listings in the given league ID(s). Array or single values accepted. For a list of possible values see /leagues.
  * Team `array`: Filter by teams playing by name(teams.longName). Array or single values accepted, for a list of possible values see /leagues/teams. (NOTE: league parameter is required when using this parameter).
  * NotYetStarted `boolean`: Only displays listings which are starting on or after the given start time. No value necessary.
  * SportEventsOnly `boolean`: Get sporting events only. No value necessary.
  * DescriptiveVideoOnly `boolean`: Only displays listings which are flagged as being broadcast with Descriptive Video. No value necessary.
  * LiveOnly `boolean`: Only displays live listings. No value necessary.
  * NewShowsOnly `boolean`: Get new shows only. No value necessary.
  * AdultContent `boolean`: Defaults to 1 (allowed). Set to 0 to hide adult content.
  * DisplayArtwork `boolean`: Displays the Artwork information. Set to 1 to include, 1 is default. 0 to hide (will improve performance).
  * Detail `string` (values: full, brief): Set level of detail for response. values are 'full' or 'brief', defaults to 'full'. 'full' will include all properties, 'brief' will exclude optional properties.

#### Output
* output `array`
  * items [TvMediaListingResponse](#tvmedialistingresponse)

### GetVideo
Returns a URL to the requested video. [Video Format Specs](https://developer.iva-api.com/docs/v1/video-formats)

**Formats:** MP4 = 4, HLS = 11, Dash = 14, HSS = 12, HDS = 13

**MP4 KbRate:** 80, 212, 450, 750, 1500, 2500(HD sources only), 5000 (sources >=  1080p)  

**Adaptive Min/Max rate:** 212000, 350000, 600000, 1200000, 2000000, 2500000, 3500000  

 `URLs requested with a Demo account will always return max 750 kbps video.  Full commercial account required for higher bitrates.`


```js
iva_api.GetVideo({
  "Id": 0,
  "Format": "",
  "Expires": ""
}, context)
```

#### Input
* input `object`
  * Id **required** `integer`: Id of the Video from either MovieVideo, ShowVideo, SeasonVideo, EpisodeVideo object.
  * Format **required** `string` (values: mp4, hls, hss, hds, dash): Video format.
  * KbRate `string` (values: mp4_80, mp4_212, mp4_450, mp4_750, mp4_1500, mp4_2500, mp4_5000, mp4_8000): Video bitrate required for MP4 content.
  * Expires **required** `string`: UTC Time to video link should expire. ISO 8601 Format: yyyy-mm-dd hh:mm:ss.ffffff0Z
  * ReportTag `string`: Report tag used in video analytics.
  * start `integer`: Position in seconds to start video playback.
  * end `integer`: Position in seconds to end video playback.
  * MinRate `string` (values: adap_212000, adap_350000, adap_600000, adap_1200000, adap_2000000, adap_2500000, adap_3500000): Adaptive Maximum rate.
  * MaxRate `string` (values: adap_212000, adap_350000, adap_600000, adap_1200000, adap_2000000, adap_2500000, adap_3500000): Adaptive Minimum rate.

#### Output
* output [VideoResponse](#videoresponse)

### GetXRoadMediaRecommendations
Get recommendations for movie or show.


```js
iva_api.GetXRoadMediaRecommendations({}, context)
```

#### Input
* input `object`
  * MovieId `integer`: Source MovieId for recommendations.
  * ShowId `integer`: Source ShowId for recommendations.
  * Type `string` (values: similar, similarShowsOnly, similarMoviesOnly): Type of recommendation response.

#### Output
* output [XRoadMediaRecommendationResponse](#xroadmediarecommendationresponse)



## Definitions

### AllMoviesResponse
* AllMoviesResponse `object`: AllMoviesResponse
  * Result `array`
    * items [Movie](#movie)
  * Skip `integer`: Records to skip used with paging.
  * Take `integer`: Page size.
  * TotalCount `integer`: Total count of movies.

### AllPeopleResponse
* AllPeopleResponse `object`: AllPeopleResponse
  * Result `array`
    * items [Person](#person)
  * Skip `integer`: Records to skip used with paging.
  * Take `integer`: Page size.
  * TotalCount `integer`: Total count of people.

### AllShowsResponse
* AllShowsResponse `object`: AllShowsResponse
  * Result `array`
    * items [Show](#show)
  * Skip `integer`: Records to skip used with paging.
  * Take `integer`: Page size.
  * TotalCount `integer`: Total count of shows.

### AnalyticsCountryResponse
* AnalyticsCountryResponse `object`: AnalyticsCountryResponse
  * Country `string`
  * CountryCode `string`
  * Percentage `number`
  * Viewers `integer`

### Artwork
* Artwork `object`: Artwork
  * episodic `string`
  * moviePoster `string`
  * movieStill `string`
  * poster `string`
  * showcard `string`
  * titlecard `string`

### ChartItem
* ChartItem `object`: ChartItem
  * Id `integer`
  * Rank `integer`
  * Title `string`
  * Year `integer`

### CityResponse
* CityResponse `object`: CityResponse
  * City `string`
  * CountryCode `string`
  * Percentage `number`
  * Viewers `integer`

### Company
* Company `object`: Company
  * CompanyId `integer`: ID of Company.
  * Id `integer`: ID of Company object.
  * Name `string`: Name of the Company.

### CompanyResponse
* CompanyResponse `object`: CompanyResponse
  * Id `integer`: ID of Company.
  * Name `string`: Name of the Company.

### Contribution
* Contribution `object`: Contribution
  * Character `string`
  * Id `integer`
  * Job `string`
  * OriginalTitle `string`
  * Title `string`
  * Year `integer`

### Country
* Country `object`: Country
  * Id `integer`
  * IsoCode `string`: ISO code for a Country.
  * Name `string`: Name of the Country.

### CountryResponse
* CountryResponse `object`: CountryResponse
  * Id `integer`
  * IsoCode `string`: ISO code for a Country.
  * Name `string`: Name of the Country.

### DbCountry
* DbCountry `object`: DbCountry
  * Id `integer`
  * IsoCode `string`: ISO code for a Country.
  * Name `string`: Name of the Country.

### DiscoverMovie
* DiscoverMovie `object`: DiscoverMovie
  * AlternateTitles `array`: List of alternate titles for this Movie.
    * items `string`
  * Budget `integer`: Budget of Movie.
  * Cast `array`: List of cast members associated with Movie.
    * items `string`
  * Created `string`: Datetime Movie record created.
  * Descriptions `array`: List of Descriptions associated with Movie.
    * items `string`
  * Directors `array`: List of directors associated with Movie.
    * items `string`
  * FranceReleaseDate `string`: Release date of Movie in France.
  * Genres `array`: List of genres associated with Movie.
    * items `string`
  * GermanyReleaseDate `string`: Release date of Movie in Germany.
  * HasVideo `boolean`: Flag indicating video content available.
  * Id `string`: Unique ID of a Movie.
  * Idx `string`: Used to distinguish identical movie title + year records.
  * ItalyReleaseDate `string`: Original release date of Movie in Italy.
  * JapanReleaseDate `string`: Original release date of Movie in Japan.
  * Modified `string`: Datetime Movie last modified.
  * OriginalLanguage `string`: Original language of Movie.
  * OriginalReleaseDate `string`: Original release date of Movie.
  * PosterFilePath `string`: File path location of poster for Movie.
  * Ratings `array`: List of Ratings associated with Movie.
    * items `string`
  * Revenue `integer`: Totle global Revenue of Movie.
  * Runtime `integer`: Runtime in minutes of Movie.
  * Status `string`: Status of a Movie
  * Tags `array`: List of tags associated with Movie.
    * items `string`
  * Title `string`: Title of a Movie
  * Type `string`: Type of a Movie. Ex: Movie, Short, TV_Movie, Video_Movie
  * UnitedKingdomReleaseDate `string`: Release date of Movie in UK.
  * UnitedStatesReleaseDate `string`: Release date of Movie in USA.
  * Year `integer`: Release year of Movie.

### DiscoverShow
* DiscoverShow `object`: DiscoverShow
  * AlternateTitles `array`: List of alternate titles for this Show.
    * items `string`
  * Cast `array`: List of cast members associated with Show.
    * items `string`
  * Created `string`: Datetime Show record created.
  * Descriptions `array`: List of Descriptions associated with Show.
    * items `string`
  * Directors `array`: List of directors associated with Show.
    * items `string`
  * Genres `array`: List of genres associated with Show.
    * items `string`
  * HasVideo `boolean`: Flag indicating video content available.
  * Id `string`: Unique ID of a Show.
  * Idx `string`: Used to distinguish identical show title + year records.
  * Modified `string`: Datetime Show last modified.
  * NumberOfEpisodes `integer`: Number of Episodes associated with Show.
  * NumberOfSeasons `integer`: Number of Seasons associated with Show.
  * OriginalAirDate `string`: Original air date of Show.
  * OriginalLanguage `string`: Original language of Show.
  * PosterFilePath `string`: File path location of poster for Show.
  * Ratings `array`: List of Ratings associated with Show.
    * items `string`
  * Status `string`: Status of a Show
  * Tags `array`: List of tags associated with Show.
    * items `string`
  * Title `string`: Title of a Show
  * Type `string`: Type of a Show
  * Year `integer`: Year of original air date of Show.

### EngagementActionsResponse
* EngagementActionsResponse `object`: EngagementActionsResponse
  * Frequency `integer`
  * Views `string`

### EngagementTimesResponse
* EngagementTimesResponse `object`: EngagementTimesResponse
  * Duration `string`
  * Frequency `integer`

### Episode
* Episode `object`: Episode
  * AlternateTitles `array`: List of alternate titles for this Episode.
    * items [EpisodeAlternateTitle](#episodealternatetitle)
  * Contributors `array`: List of contributors (Cast, Director, Writer, Production, etc.) for this Episode.
    * items [EpisodeContributor](#episodecontributor)
  * Created `string`: DateTime Episode record created.
  * Descriptions `array`: List of descriptions for this Episode.
    * items [EpisodeDescription](#episodedescription)
  * EpisodeNumber `integer`: Number of Episode within its associated Season.
  * ExternalIds `array`: List of external Ids associated with Episode.
    * items [ExternalId](#externalid)
  * Id `integer`: Unique ID of the Episode.
  * Images `array`: List of images associated with Episode.
    * items [EpisodeImage](#episodeimage)
  * Modified `string`: DateTime Episode record last modified.
  * Modifier `integer`: User who last modified the Episode record.
  * OriginalLanguage `string`: Episode original language.
  * OriginalReleaseDate `string`: Original release date of Episode.
  * OriginalTitle `string`: Original title of Episode
  * Releases `array`: List of releases associated with Episode.
    * items [EpisodeRelease](#episoderelease)
  * SeasonId `integer`: ID of Season this Episode is associated with.
  * SeasonNumber `integer`: Number of Season within its associated Show.
  * ShowId `integer`: ID of Show this Episode is associated with.
  * Title `string`: English version of any foreign Original Title.
  * VersionId `integer`: Record Version Id
  * Videos `array`: List of videos associated with Episode.
    * items [EpisodeVideo](#episodevideo)
  * Year `integer`: Release year of Episode.

### EpisodeAlternateTitle
* EpisodeAlternateTitle `object`: EpisodeAlternateTitle
  * Country `string`: Country associated with this alternate title.
  * Id `integer`: Unique ID of this EpisodeAlternateTitle
  * Modifier `integer`: ID of last user who modified the item.
  * Title `string`: The alternate title.

### EpisodeChangeHistoryResponse
* EpisodeChangeHistoryResponse `object`: EpisodeChangeHistoryResponse
  * EpisodeId `integer`: ID of the Episode.

### EpisodeChangeHistoryWithEntityResponse
* EpisodeChangeHistoryWithEntityResponse `object`: EpisodeChangeHistoryWithEntityResponse
  * Entity `string`: Object belonging to Episode that has changed.
  * EpisodeId `integer`: ID of the Episode.

### EpisodeContribution
* EpisodeContribution `object`: EpisodeContribution
  * Character `string`
  * Id `integer`
  * Job `string`
  * OriginalTitle `string`
  * ShowId `integer`
  * Title `string`
  * Year `integer`

### EpisodeContributor
* EpisodeContributor `object`: EpisodeContributor
  * Character `string`: Role played by EpisodeContributor.
  * Id `integer`: Unique ID of the EpisodeContributor object.
  * Job `string`: Job of Person associated with EpisodeContributor.
  * Modifier `integer`: ID of last user who modified the item.
  * Order `integer`: Rank of EpisodeContributor in list for Episode (cast).
  * PersonId `integer`: ID of Person associated with EpisodeContributor.
  * PersonName `string`: Person's Name associated with EpisodeContributor.

### EpisodeDescription
* EpisodeDescription `object`: EpisodeDescription
  * Attribution `string`: Source of EpisodeDescription.
  * Description `string`: Episode Description.
  * Id `integer`: Unique ID of this EpisodeDescription
  * Language `string`: Language object for language of EpisodeDescription.
  * Modifier `integer`: ID of last user who modified the item.

### EpisodeImage
* EpisodeImage `object`: EpisodeImage
  * FilePath `string`: Filepath (location) of EpisodeImage.
  * Height `integer`: Height in pixels of EpisodeImage.
  * Id `integer`: Unique ID of this EpisodeImage
  * ImageId `integer`: ID of Image associated with EpisodeImage.
  * ImageType `string`: ImageType of EpisodeImage.
  * Language `string`: Language associated with EpisodeImage.
  * Modifier `integer`: ID of last user who modified the item.
  * Official `boolean`: Determines if image is official.
  * Sexuality `integer`: 1-5 (Very-Unlikely to Very-Likely) probability of sexual theme in image.
  * Tags `array`: List of Tags associated with this EpisodeImage
    * items [Tag](#tag)
  * Violence `integer`: 1-5 (Very-Unlikely to Very-Likely) probability of violent theme in image.
  * Width `integer`: Width in pixels of EpisodeImage.

### EpisodeRelease
* EpisodeRelease `object`: EpisodeRelease
  * Certification `string`: Certification for EpisodeRelease.
  * Country `string`: The Country Episode was released.
  * Date `string`: Date of this EpisodeRelease.
  * Id `integer`: Unique Id of this EpisodeRelease.
  * Modifier `integer`: ID of last user who modified the item.
  * Type `string`: The type of this EpisodeRelease.

### EpisodeResponse
* EpisodeResponse `object`: EpisodeResponse
  * AlternateTitles `array`: List of alternate titles for this Episode.
    * items [EpisodeAlternateTitle](#episodealternatetitle)
  * Contributors `array`: List of contributors (Cast, Director, Writer, Production, etc.) for this Episode.
    * items [EpisodeContributor](#episodecontributor)
  * Created `string`: DateTime Episode record created.
  * Descriptions `array`: List of descriptions for this Episode.
    * items [EpisodeDescription](#episodedescription)
  * EpisodeNumber `integer`: Number of Episode within its associated Season.
  * ExternalIds `array`: List of external Ids associated with Episode.
    * items [ExternalId](#externalid)
  * Id `integer`: Unique ID of the Episode.
  * Images `array`: List of images associated with Episode.
    * items [EpisodeImage](#episodeimage)
  * Modified `string`: DateTime Episode record last modified.
  * Modifier `integer`: User who last modified the Episode record.
  * OriginalLanguage `string`: Episode original language.
  * OriginalReleaseDate `string`: Original release date of Episode.
  * OriginalTitle `string`: Original title of Episode
  * Releases `array`: List of releases associated with Episode.
    * items [EpisodeRelease](#episoderelease)
  * SeasonId `integer`: ID of Season this Episode is associated with.
  * SeasonNumber `integer`: Number of Season within its associated Show.
  * ShowId `integer`: ID of Show this Episode is associated with.
  * Title `string`: English version of any foreign Original Title.
  * VersionId `integer`: Record Version Id
  * Videos `array`: List of videos associated with Episode.
    * items [EpisodeVideo](#episodevideo)
  * Year `integer`: Release year of Episode.

### EpisodeVideo
* EpisodeVideo `object`: EpisodeVideo
  * AllowAdvertising `boolean`: Flag denoting if pre-roll video ads are allowed in front of of content.
  * Certification `boolean`: Certification for EpisodeVideo.
  * Clean `boolean`: True if Certification, Theatrical, and HomeVideo are False.
  * Company `string`: Company associated with EpisodeVideo.
  * Duration `integer`: Runtime of EpisodeVideo.
  * Encoded `string`: Datetime EpisodeVideo was encoded.
  * Encodes `array`: List of Encodes (bitrate and type) for EpisodeVideo.
    * items [EpisodeVideoEncode](#episodevideoencode)
  * ExpirationDate `string`: Date EpisodeVideo expires.
  * HomeVideo `boolean`: Flag for promoting Home Video.
  * Id `integer`: Unique ID of EpisodeVideo.
  * Language `string`: Language associated with EpisodeVideo.
  * LanguageSubtitled `string`: Subtitle language associated with EpisodeVideo.
  * Mature `boolean`: Flag for designating video content not suitable for children. Age gate required.
  * Modifier `integer`: ID of last user who modified the item.
  * ScreenCaptures `array`: List of screen captures from EpisodeVideo.
    * items [EpisodeVideoScreenCapture](#episodevideoscreencapture)
  * SourceVideoHeight `integer`: Height in pixels of EpisodeVideo.
  * SourceVideoWidth `integer`: Width in pixels of EpisodeVideo.
  * StartDate `string`: First date of EpisodeVideo availability.
  * TargetCountries `array`: List of countries targeted by EpisodeVideo.
    * items [TargetCountry](#targetcountry)
  * Title `string`: Title of EpisodeVideo, not Season.
  * TuneIn `boolean`: Flag for promoting tune in.
  * Type `string`: VideoType for the EpisodeVideo.

### EpisodeVideoEncode
* EpisodeVideoEncode `object`: EpisodeVideoEncode
  * BitRate `integer`: BitRate of VideoEncode.
  * EncodeType `string`: Datetime when the VideoEncode was encoded.
  * Id `integer`: Unique ID of the video encode
  * Modifier `integer`: ID of last user who modified the item.

### EpisodeVideoExtended
* EpisodeVideoExtended `object`: EpisodeVideoExtended
  * AllowAdvertising `boolean`: Flag denoting if pre-roll video ads are allowed in front of of content.
  * Certification `boolean`: Certification for EpisodeVideo.
  * Clean `boolean`: True if Certification, Theatrical, and HomeVideo are False.
  * Company `string`: Company associated with EpisodeVideo.
  * Duration `integer`: Runtime of EpisodeVideo.
  * Encoded `string`: Datetime EpisodeVideo was encoded.
  * Encodes `array`: List of Encodes (bitrate and type) for EpisodeVideo.
    * items [EpisodeVideoEncode](#episodevideoencode)
  * EpisodeNumber `integer`
  * ExpirationDate `string`: Date EpisodeVideo expires.
  * HomeVideo `boolean`: Flag for promoting Home Video.
  * Id `integer`: Unique ID of EpisodeVideo.
  * Language `string`: Language associated with EpisodeVideo.
  * LanguageSubtitled `string`: Subtitle language associated with EpisodeVideo.
  * Mature `boolean`: Flag for designating video content not suitable for children. Age gate required.
  * Modifier `integer`: ID of last user who modified the item.
  * ScreenCaptures `array`: List of screen captures from EpisodeVideo.
    * items [EpisodeVideoScreenCapture](#episodevideoscreencapture)
  * SeasonNumber `integer`
  * SourceVideoHeight `integer`: Height in pixels of EpisodeVideo.
  * SourceVideoWidth `integer`: Width in pixels of EpisodeVideo.
  * StartDate `string`: First date of EpisodeVideo availability.
  * TargetCountries `array`: List of countries targeted by EpisodeVideo.
    * items [TargetCountry](#targetcountry)
  * Title `string`: Title of EpisodeVideo, not Season.
  * TuneIn `boolean`: Flag for promoting tune in.
  * Type `string`: VideoType for the EpisodeVideo.

### EpisodeVideoScreenCapture
* EpisodeVideoScreenCapture `object`: EpisodeVideoScreenCapture
  * Aspect `string`: Aspect ratio of VideoScreenCapture.
  * FilePath `string`: Filepath (location) of VideoScreenCapture.
  * Height `integer`: Height in pixels of VideoScreenCapture.
  * Id `integer`: Unique ID of the screen capture
  * Modifier `integer`: ID of last user who modified the item.
  * Width `integer`: Width in pixels of VideoScreenCapture.

### Explanation
* Explanation `object`: Explanation
  * level `integer`
  * message `string`
  * originator `string`: Origination of the explanation.
  * type `string`: The granularity of recommendation match.

### ExternalId
* ExternalId `object`: ExternalId
  * Id `string`
  * Name `string`

### FaceDetails
* FaceDetails `object`: FaceDetails
  * AgeRange [FaceDetailsAgerange](#facedetailsagerange)
  * Beard [FaceDetailsBeard](#facedetailsbeard)
  * BoundingBox [FaceDetailsBoundingbox](#facedetailsboundingbox)
  * BoundingBoxPixel [FaceDetailsBoundingboxPixel](#facedetailsboundingboxpixel)
  * Confidence `number`: Confidence value on this face being the correct person.
  * Emotions `array`
    * items [FaceDetailsEmotion](#facedetailsemotion)
  * Eyeglasses [FaceDetailsEyeglasses](#facedetailseyeglasses)
  * EyesOpen [FaceDetailsEyesopen](#facedetailseyesopen)
  * Gender [FaceDetailsGender](#facedetailsgender)
  * Landmarks `array`: Details on positions of facial features, expressed as ratios of the image width/height.
    * items [FaceDetailsLandmark](#facedetailslandmark)
  * LandmarksPixel `array`: Details on positions of facial features, in pixels.
    * items [FaceDetailsLandmarkPixel](#facedetailslandmarkpixel)
  * MouthOpen [FaceDetailsMouthopen](#facedetailsmouthopen)
  * Mustache [FaceDetailsMustache](#facedetailsmustache)
  * Pose [FaceDetailsPose](#facedetailspose)
  * Quality [FaceDetailsQuality](#facedetailsquality)
  * Smile [FaceDetailsSmile](#facedetailssmile)
  * Sunglasses [FaceDetailsSunglasses](#facedetailssunglasses)

### FaceDetailsAgerange
* FaceDetailsAgerange `object`: FaceDetailsAgerange
  * High `integer`: Upper age estimate.
  * Low `integer`: Lower age estimate.

### FaceDetailsBeard
* FaceDetailsBeard `object`: FaceDetailsBeard
  * Confidence `number`: Confidence rating of Value.
  * Value `boolean`: True/False whether person has beard.

### FaceDetailsBoundingbox
* FaceDetailsBoundingbox `object`: FaceDetailsBoundingbox
  * Height `number`: Height of face box.
  * Left `number`: How far from left of image to start face box.
  * Top `number`: How far from top of image to start face box.
  * Width `number`: Width of face box.

### FaceDetailsBoundingboxPixel
* FaceDetailsBoundingboxPixel `object`: FaceDetailsBoundingboxPixel
  * Height `integer`: Height of face box.
  * Left `integer`: How far from left of image to start face box.
  * Top `integer`: How far from top of image to start face box.
  * Width `integer`: Width of face box.

### FaceDetailsEmotion
* FaceDetailsEmotion `object`: FaceDetailsEmotion
  * Confidence `number`: Confidence rating of Value.
  * Type `string`: Type of emotion.

### FaceDetailsEyeglasses
* FaceDetailsEyeglasses `object`: FaceDetailsEyeglasses
  * Confidence `number`: Confidence rating of Value.
  * Value `boolean`: True/False whether person has glasses.

### FaceDetailsEyesopen
* FaceDetailsEyesopen `object`: FaceDetailsEyesopen
  * Confidence `number`: Confidence rating of Value.
  * Value `boolean`: True/False whether person has eyes open.

### FaceDetailsGender
* FaceDetailsGender `object`: FaceDetailsGender
  * Confidence `number`: Confidence rating of Value.
  * Value `string`: Estimated gender.

### FaceDetailsLandmark
* FaceDetailsLandmark `object`: FaceDetailsLandmark
  * Type `string`: Type of facial landmark.
  * X `number`: Position from left of image.
  * Y `number`: Position from top of image.

### FaceDetailsLandmarkPixel
* FaceDetailsLandmarkPixel `object`: FaceDetailsLandmarkPixel
  * Type `string`: Type of facial landmark.
  * X `integer`: Position from left of image.
  * Y `integer`: Position from top of image.

### FaceDetailsMouthopen
* FaceDetailsMouthopen `object`: FaceDetailsMouthopen
  * Confidence `number`: Confidence rating of Value.
  * Value `boolean`: True/False whether person has mouth open.

### FaceDetailsMustache
* FaceDetailsMustache `object`: FaceDetailsMustache
  * Confidence `number`: Confidence rating of Value.
  * Value `boolean`: True/False whether person has mustache.

### FaceDetailsPose
* FaceDetailsPose `object`: FaceDetailsPose
  * Pitch `number`: Pitch of face.
  * Roll `number`: Roll of face.
  * Yaw `number`: Yaw of face.

### FaceDetailsQuality
* FaceDetailsQuality `object`: FaceDetailsQuality
  * Brightness `number`: Brightness of image.
  * Sharpness `number`: Sharpness of image.

### FaceDetailsSmile
* FaceDetailsSmile `object`: FaceDetailsSmile
  * Confidence `number`: Confidence rating of Value.
  * Value `boolean`: True/False whether person is smiling.

### FaceDetailsSunglasses
* FaceDetailsSunglasses `object`: FaceDetailsSunglasses
  * Confidence `number`: Confidence rating of Value.
  * Value `boolean`: True/False whether person has sunglasses.

### FilmographyResponse
* FilmographyResponse `object`: FilmographyResponse
  * Episodes `array`: List of Episode contributions.
    * items [EpisodeContribution](#episodecontribution)
  * Movies `array`: List of Movie contributions.
    * items [Contribution](#contribution)
  * Shows `array`: List of Show contributions.
    * items [Contribution](#contribution)

### FindMovie
* FindMovie `object`: FindMovie
  * Id **required** `string`: Required third party ID of Movie.
  * IdType **required** `integer`: Required third party ID type of MovieAlternateId.
  * Includes `array` (values: Genres, Releases, Contributors, AlternateTitles, Descriptions, Companies, Tags, Images, Videos, ExternalIds): List of additional objects to include in the movie object.
    * items `string`

### FindShow
* FindShow `object`: FindShow
  * Id **required** `string`: Required third party ID of Show.
  * IdType **required** `integer`: Required third party ID type of ShowAlternateId.
  * Includes `array` (values: Genres, Releases, Contributors, AlternateTitles, Descriptions, Companies, Tags, Images, Videos, Seasons, EpisodeVideos, SeasonVideos, ExternalIds): List of additional objects to include in the show response.
    * items `string`

### FlexDate
* FlexDate `object`: FlexDate
  * Date `string`
  * Estimated `boolean`
  * Type `string`

### GBUsageDay
* GBUsageDay `object`: GBUsageDay
  * Date `string`
  * FlashPlayerRequests `integer`
  * GB `integer`
  * ImageServiceGB `integer`
  * ImageServiceRequests `integer`

### GBUsageResponse
* GBUsageResponse `object`: GBUsageResponse
  * Detail `array`
    * items [GBUsageDay](#gbusageday)
  * MonthEncodeMinutes `string`
  * MonthlyStorageInMinutes `string`
  * TotalGB `integer`

### GetAllMovies
* GetAllMovies `object`: GetAllMovies
  * Includes `array` (values: Genres, Releases, Contributors, AlternateTitles, Descriptions, Companies, Tags, Images, Videos, ExternalIds): List of additional objects to include in the movie objectSearch movie by OriginalTitle.
    * items `string`
  * Skip `integer`: Skips records using for paging results.
  * Take **required** `integer`: Limits the total items returned. Maximum of 100 per request.

### GetAllPeople
* GetAllPeople `object`: GetAllPeople
  * Includes `array` (values: ExternalIds, AlternateNames, Images, Descriptions, Tags): List of additional objects to include in the person response.
    * items `string`
  * Skip `integer`: Skips records using for paging results.
  * Take **required** `integer`: Limits the total items returned. Maximum of 100 per request.

### GetAllShows
* GetAllShows `object`: GetAllShows
  * Includes `array` (values: Genres, Releases, Contributors, AlternateTitles, Descriptions, Companies, Tags, Images, Videos, Seasons, EpisodeVideos, SeasonVideos, ExternalIds): List of additional objects to include in the show object.
    * items `string`
  * Skip `integer`: Skips records using for paging results.
  * Take `integer`: Limits the total items returned. Maximum of 10 per request.

### GetAnalyticsCountry
* GetAnalyticsCountry `object`: GetAnalyticsCountry
  * DateValue `string` (values: today, yesterday, two_days_ago, last_7_days, last_14_days, last_28_days, last_60_days, last_90_days, last_365_days): Days spanned by report
  * End `string`: Report end date
  * Limit `integer`: Number of records returned from top of response.
  * ReportTag `string`: Report Tag filter.
  * Start `string`: Report start date

### GetChartMoviesBoxoffice
* GetChartMoviesBoxoffice `object`: GetChartMoviesBoxoffice
  * Skip **required** `integer`: Determines where to start page.  Ex: 0 starts at the beginning.
  * Take **required** `integer`: Determines the page size.  (Maximum of 100)

### GetChartMoviesMostAnticipated
* GetChartMoviesMostAnticipated `object`: GetChartMoviesMostAnticipated
  * Skip **required** `integer`: Determines where to start page.  Ex: 0 starts at the beginning.
  * Take **required** `integer`: Determines the page size.  (Maximum of 100)

### GetChartMoviesPopular
* GetChartMoviesPopular `object`: GetChartMoviesPopular
  * Skip **required** `integer`: Determines where to start page.  Ex: 0 starts at the beginning.
  * Take **required** `integer`: Determines the page size.  (Maximum of 100)

### GetChartPeoplePopular
* GetChartPeoplePopular `object`: GetChartPeoplePopular
  * Skip **required** `integer`: Determines where to start page.  Ex: 0 starts at the beginning.
  * Take **required** `integer`: Determines the page size.  (Maximum of 100)

### GetChartShowsPopular
* GetChartShowsPopular `object`: GetChartShowsPopular
  * Skip `integer`: Skips records using for paging results.
  * Take `integer`: Limits the total items returned. Maximum of 100 per request.

### GetCity
* GetCity `object`: GetCity
  * DateValue `string` (values: today, yesterday, two_days_ago, last_7_days, last_14_days, last_28_days, last_60_days, last_90_days, last_365_days): Days spanned by report
  * End `string`: Report end date
  * Limit `integer`: Number of records returned from top of response
  * ReportTag `string`: Report Tag filter.
  * Start `string`: Report start date

### GetCompanies
* GetCompanies `object`: GetCompanies
  * Skip **required** `integer`: Offset for paging. Default is 0.
  * Take **required** `integer`: Maximum number of rows returned. Default is 1,000.

### GetCountries
* GetCountries `object`: GetCountries

### GetDbShowCertifications
* GetDbShowCertifications `object`: GetDbShowCertifications

### GetDbShowReleaseTypes
* GetDbShowReleaseTypes `object`: GetDbShowReleaseTypes

### GetEngagementActions
* GetEngagementActions `object`: GetEngagementActions
  * DateValue `string` (values: today, yesterday, two_days_ago, last_7_days, last_14_days, last_28_days, last_60_days, last_90_days, last_365_days): Days spanned by report
  * End `string`: Report end date
  * Limit `integer`: Number of records returned from top of response
  * ReportTag `string`: Report Tag filter.
  * Start `string`: Report start date

### GetEngagementTimes
* GetEngagementTimes `object`: GetEngagementTimes
  * DateValue `string` (values: today, yesterday, two_days_ago, last_7_days, last_14_days, last_28_days, last_60_days, last_90_days, last_365_days): Days spanned by report
  * End `string`: Report end date
  * Limit `integer`: Number of records returned from top of response
  * ReportTag `string`: Report Tag filter.
  * Start `string`: Report start date

### GetEpisode
* GetEpisode `object`: GetEpisode
  * Id **required** `integer`: Required ID of an Episode.
  * Includes `array` (values: Releases, Contributors, AlternateTitles, Descriptions, Images, Videos, ExternalIds): List of additional objects to include in the episode response.
    * items `string`

### GetEpisodeByEpisodeNumber
* GetEpisodeByEpisodeNumber `object`: GetEpisodeByEpisodeNumber
  * EpisodeNumber **required** `integer`: Required EpisodeNumber.
  * Id **required** `integer`: Required Id of the Show.
  * Includes `array` (values: Releases, Contributors, AlternateTitles, Descriptions, Images, Videos, ExternalIds): List of additional objects to include in the episode response.
    * items `string`
  * SeasonNumber **required** `integer`: Required SeasonNumber.

### GetEpisodeByNumber
* GetEpisodeByNumber `object`: GetEpisodeByNumber
  * EpisodeNumber **required** `integer`: Required EpisodeNumber.
  * Id **required** `integer`: Required Id of the Show.
  * SeasonNumber **required** `integer`: Required SeasonNumber.

### GetEpisodeChangeHistory
* GetEpisodeChangeHistory `object`: GetEpisodeChangeHistory
  * Date **required** `string`: Starting date <= when record has changed (Maximum of 30 days back). ISO 8601 Format: yyyy-mm-dd hh:mm:ss.ffffff0Z
  * Skip **required** `integer`: Offset for paging. Default is 0.
  * Take **required** `integer`: Maximum number of rows returned. Default is 1,000.

### GetEpisodeChangeHistoryWithEntity
* GetEpisodeChangeHistoryWithEntity `object`: GetEpisodeChangeHistoryWithEntity
  * Date **required** `string`: Starting date <= when record has changed (Maximum of 30 days back). ISO 8601 Format: yyyy-mm-dd hh:mm:ss.ffffff0Z
  * Skip **required** `integer`: Offset for paging. Default is 0.
  * Take **required** `integer`: Maximum number of rows returned. Default is 1,000.

### GetFilmography
* GetFilmography `object`: GetFilmography
  * Id `integer`

### GetGBUsage
* GetGBUsage `object`: GetGBUsage
  * Month `integer` (values: January, February, March, April, May, June, July, August, September, October, November, December): Report month
  * ReportTag `string`: Report Tag filter.
  * Year `integer`: Report year

### GetGoWatchItEpisodeAvailabilities
* GetGoWatchItEpisodeAvailabilities `object`: GetGoWatchItEpisodeAvailabilities
  * ApiKey **required** `string`: Required GoWatchIt API key.
  * Id **required** `integer`: Required ID of Entertainment Episode.

### GetGoWatchItMovieAvailabilities
* GetGoWatchItMovieAvailabilities `object`: GetGoWatchItMovieAvailabilities
  * ApiKey **required** `string`: Required GoWatchIt API key.
  * Id **required** `integer`: Required ID of Entertainment Movie.

### GetGoWatchItSeasonAvailabilities
* GetGoWatchItSeasonAvailabilities `object`: GetGoWatchItSeasonAvailabilities
  * ApiKey **required** `string`: Required GoWatchIt API key.
  * Id **required** `integer`: Required ID of Entertainment Season.

### GetGoWatchItShowAvailabilities
* GetGoWatchItShowAvailabilities `object`: GetGoWatchItShowAvailabilities
  * ApiKey **required** `string`: Required GoWatchIt API key.
  * Id **required** `integer`: Required ID of Entertainment Show.

### GetGracenoteMovieIds
* GetGracenoteMovieIds `object`: GetGracenoteMovieIds
  * Skip **required** `integer`: Determines where to start page.  Ex: 0 starts at the beginning.
  * Take **required** `integer`: Determines the page size.  (Maximum of 1000)

### GetGracenoteShowIds
* GetGracenoteShowIds `object`: GetGracenoteShowIds
  * Skip **required** `integer`: Determines where to start page.  Ex: 0 starts at the beginning.
  * Take **required** `integer`: Determines the page size.  (Maximum of 1000)

### GetImageBatch
* GetImageBatch `object`: GetImageBatch
  * FilePath `array`: List of Filepaths.
    * items `string`

### GetImageRedirect
* GetImageRedirect `object`: GetImageRedirect
  * FilePath **required** `string`: Filepath of Image.
  * Redirect `boolean`: Redirect to the image. Default = true

### GetImageTypes
* GetImageTypes `object`: GetImageTypes

### GetImdbMovieIds
* GetImdbMovieIds `object`: GetImdbMovieIds
  * Skip **required** `integer`: Determines where to start page.  Ex: 0 starts at the beginning.
  * Take **required** `integer`: Determines the page size.  (Maximum of 1000)

### GetImdbShowIds
* GetImdbShowIds `object`: GetImdbShowIds
  * Skip **required** `integer`: Determines where to start page.  Ex: 0 starts at the beginning.
  * Take **required** `integer`: Determines the page size.  (Maximum of 1000)

### GetLanguages
* GetLanguages `object`: GetLanguages

### GetMetacriticMovie
* GetMetacriticMovie `object`: GetMetacriticMovie
  * Id **required** `integer`: Required ID of Entertainment Movie.

### GetMetacriticTv
* GetMetacriticTv `object`: GetMetacriticTv
  * Id **required** `integer`: Required ID of Entertainment Show.
  * SeasonNumber `integer`: Number of season.

### GetMostActive
* GetMostActive `object`: GetMostActive
  * DateValue `string` (values: today, yesterday, two_days_ago, last_7_days, last_14_days, last_28_days, last_60_days, last_90_days, last_365_days): Days spanned by report
  * Limit `integer`: Number of records returned from top of response
  * ReportTag `string`: Report Tag filter.

### GetMovie
* GetMovie `object`: GetMovie
  * Id **required** `integer`: Required ID of Movie.
  * Includes `array` (values: Genres, Releases, Contributors, AlternateTitles, Descriptions, Companies, Tags, Images, Videos, ExternalIds): List of additional objects to include in the movie response.
    * items `string`

### GetMovieAlternateIdTypes
* GetMovieAlternateIdTypes `object`: GetMovieAlternateIdTypes

### GetMovieCertifications
* GetMovieCertifications `object`: GetMovieCertifications

### GetMovieChangeHistory
* GetMovieChangeHistory `object`: GetMovieChangeHistory
  * Date **required** `string`: Starting date <= when record has changed (Maximum of 30 days back). ISO 8601 Format: yyyy-mm-dd hh:mm:ss.ffffff0Z
  * Skip **required** `integer`: Offset for paging. Default is 0.
  * Take **required** `integer`: Maximum number of rows returned. Default is 1,000.

### GetMovieChangeHistoryWithEntity
* GetMovieChangeHistoryWithEntity `object`: GetMovieChangeHistoryWithEntity
  * Date **required** `string`: Starting date <= when record has changed (Maximum of 30 days back). ISO 8601 Format: yyyy-mm-dd hh:mm:ss.ffffff0Z
  * Skip **required** `integer`: Offset for paging. Default is 0.
  * Take **required** `integer`: Maximum number of rows returned. Default is 1,000.

### GetMovieGenres
* GetMovieGenres `object`: GetMovieGenres

### GetMovieReleaseTypes
* GetMovieReleaseTypes `object`: GetMovieReleaseTypes

### GetMovieTicketsCultures
* GetMovieTicketsCultures `object`: GetMovieTicketsCultures

### GetMovieTicketsMoviesComingSoon
* GetMovieTicketsMoviesComingSoon `object`: GetMovieTicketsMoviesComingSoon
  * Culture `string`: Culture to retrieve response. Default en-us.
  * PageNumber `integer`: Page number for paging results. Used in conjunction with PageSize.
  * PageSize `integer`: Limits the total items returned. Maximum of 100 per request.

### GetMovieTicketsMoviesNowPlaying
* GetMovieTicketsMoviesNowPlaying `object`: GetMovieTicketsMoviesNowPlaying
  * Culture `string`: Culture to retrieve response. Default en-us.
  * PageNumber `integer`: Page number for paging results. Used in conjunction with PageSize.
  * PageSize `integer`: Limits the total items returned. Maximum of 100 per request.

### GetMovieTicketsPerformances
* GetMovieTicketsPerformances `object`: GetMovieTicketsPerformances
  * Culture `string`: Culture to retrieve response. Default en-us.
  * EntertainmentMovieIds **required** `string`: Required ID/IDs of Entertainment Movies. Comma-seperated for multiple.
  * ScheduleDate **required** `string`: Date to get scheduled performances.
  * TheaterIds **required** `string`: Required ID/IDs of MovieTickets Theaters. Comma-seperated for multiple.

### GetMovieTicketsTheaters
* GetMovieTicketsTheaters `object`: GetMovieTicketsTheaters
  * Culture `string`: Culture to retrieve response. Default en-us.
  * Distance **required** `integer`: Required distaince in meters.
  * Latitude `number`: Latitude coordinate. Used in conjunction with Longitude. Postal code not required if passed.
  * Longitude `number`: Longitude coordinate. Used in conjunction with Latitude. Postal code not required if passed.
  * PageNumber `integer`: Page number for paging results. Used in conjunction with PageSize.
  * PageSize `integer`: Limits the total items returned. Maximum of 100 per request.
  * PostalCode `string`: Postal code. Longitude/Latitude not required if passed.

### GetMoviesComingSoon
* GetMoviesComingSoon `object`: GetMoviesComingSoon
  * Includes `array` (values: Genres, Releases, Contributors, AlternateTitles, Descriptions, Companies, Tags, Images, Videos, ExternalIds): List of additional objects to include in the movie response.
    * items `string`
  * Skip **required** `integer`: Determines where to start page.  Ex: 0 starts at the beginning.
  * Take **required** `integer`: Determines the page size.  (Maximum of 10)

### GetMoviesInTheaters
* GetMoviesInTheaters `object`: GetMoviesInTheaters
  * Includes `array` (values: Genres, Releases, Contributors, AlternateTitles, Descriptions, Companies, Tags, Images, Videos, ExternalIds): List of additional objects to include in the movie response.
    * items `string`
  * Skip **required** `integer`: Determines where to start page.  Ex: 0 starts at the beginning.
  * Take **required** `integer`: Determines the page size.  (Maximum of 10)

### GetPerson
* GetPerson `object`: GetPerson
  * Id **required** `integer`: Required ID of Person.
  * Includes `array` (values: ExternalIds, AlternateNames, Images, Descriptions, Tags): List of additional objects to include in the person response.
    * items `string`

### GetPersonChangeHistory
* GetPersonChangeHistory `object`: GetPersonChangeHistory
  * Date **required** `string`: Starting date <= when record has changed (Maximum of 30 days back). ISO 8601 Format: yyyy-mm-dd hh:mm:ss.ffffff0Z
  * Skip **required** `integer`: Offset for paging. Default is 0.
  * Take **required** `integer`: Maximum number of rows returned. Default is 1,000.

### GetPersonChangeHistoryWithEntity
* GetPersonChangeHistoryWithEntity `object`: GetPersonChangeHistoryWithEntity
  * Date **required** `string`: Starting date <= when record has changed (Maximum of 30 days back). ISO 8601 Format: yyyy-mm-dd hh:mm:ss.ffffff0Z
  * Skip **required** `integer`: Offset for paging. Default is 0.
  * Take **required** `integer`: Maximum number of rows returned. Default is 1,000.

### GetPersonRanked
* GetPersonRanked `object`: GetPersonRanked
  * StartsWith `string`

### GetPlatformHardware
* GetPlatformHardware `object`: GetPlatformHardware
  * DateValue `string` (values: today, yesterday, two_days_ago, last_7_days, last_14_days, last_28_days, last_60_days, last_90_days, last_365_days): Days spanned by report
  * End `string`: Report end date
  * Limit `integer`: Number of records returned from top of response
  * ReportTag `string`: Report Tag filter.
  * Start `string`: Report start date

### GetPlatformOS
* GetPlatformOS `object`: GetPlatformOS
  * DateValue `string` (values: today, yesterday, two_days_ago, last_7_days, last_14_days, last_28_days, last_60_days, last_90_days, last_365_days): Days spanned by report
  * End `string`: Report end date
  * Limit `integer`: Number of records returned from top of response
  * ReportTag `string`: Report Tag filter.
  * Start `string`: Report start date

### GetRecentVisitors
* GetRecentVisitors `object`: GetRecentVisitors
  * Limit `integer`: Number of records returned from top of response
  * ReportTag `string`: Report Tag filter.

### GetRoviMovieIds
* GetRoviMovieIds `object`: GetRoviMovieIds
  * Skip **required** `integer`: Determines where to start page.  Ex: 0 starts at the beginning.
  * Take **required** `integer`: Determines the page size.  (Maximum of 1000)

### GetRoviShowIds
* GetRoviShowIds `object`: GetRoviShowIds
  * Skip **required** `integer`: Determines where to start page.  Ex: 0 starts at the beginning.
  * Take **required** `integer`: Determines the page size.  (Maximum of 1000)

### GetSDK
* GetSDK `object`: GetSDK
  * Client **required** `string` (values: akka_scala, android, async_scala, bash, clojure, cpprest, csharp, CsharpDotNet2, cwiki, dart, dynamic_html, elixir, flash, go, groovy, html, html2, java, javascript, javascript_closure_angular, jaxrs_cxf_client, jmeter, objc, perl, php, python, qt5cpp, ruby, scala, swagger, swagger_yaml, swift, swift3, tizen, typescript_angular, typescript_angular2, typescript_fetch, typescript_node): Client SDK
  * RedirectToFile **required** `boolean`: Redirect to download the zipped SDK.

### GetScreenCaptureBatch
* GetScreenCaptureBatch `object`: GetScreenCaptureBatch
  * FilePath `array`: List of Filepaths.
    * items `string`

### GetScreenCaptureRedirect
* GetScreenCaptureRedirect `object`: GetScreenCaptureRedirect
  * FilePath **required** `string`: Filepath of Image.
  * Redirect `boolean`: Redirect to the image. Default = true

### GetSeason
* GetSeason `object`: GetSeason
  * Id **required** `integer`: Id of a Season.
  * Includes `array` (values: Releases, Contributors, AlternateTitles, Descriptions, Episodes, Images, Videos, ExternalIds): List of additional objects to include in the season response.
    * items `string`

### GetSeasonByNumber
* GetSeasonByNumber `object`: GetSeasonByNumber
  * Id **required** `integer`: Id of a Show.
  * SeasonNumber **required** `integer`: Number of a Season belonging to a Show.

### GetSeasonBySeasonNumber
* GetSeasonBySeasonNumber `object`: GetSeasonBySeasonNumber
  * Id **required** `integer`: Id of a Show.
  * Includes `array` (values: Releases, Contributors, AlternateTitles, Descriptions, Episodes, Images, Videos, ExternalIds): List of additional objects to include in the season response.
    * items `string`
  * SeasonNumber **required** `integer`: Number of a Season belonging to a Show.

### GetSeasonChangeHistory
* GetSeasonChangeHistory `object`: GetSeasonChangeHistory
  * Date **required** `string`: Starting date <= when record has changed (Maximum of 30 days back). ISO 8601 Format: yyyy-mm-dd hh:mm:ss.ffffff0Z
  * Skip **required** `integer`: Offset for paging. Default is 0.
  * Take **required** `integer`: Maximum number of rows returned. Default is 1,000.

### GetSeasonChangeHistoryWithEntity
* GetSeasonChangeHistoryWithEntity `object`: GetSeasonChangeHistoryWithEntity
  * Date **required** `string`: Starting date <= when record has changed (Maximum of 30 days back). ISO 8601 Format: yyyy-mm-dd hh:mm:ss.ffffff0Z
  * Skip **required** `integer`: Offset for paging. Default is 0.
  * Take **required** `integer`: Maximum number of rows returned. Default is 1,000.

### GetShow
* GetShow `object`: GetShow
  * Id **required** `integer`: Required ID of Show.
  * Includes `array` (values: Genres, Releases, Contributors, AlternateTitles, Descriptions, Companies, Tags, Images, Videos, Seasons, EpisodeVideos, SeasonVideos, ExternalIds): List of additional objects to include in the show response.
    * items `string`

### GetShowAlternateIdTypes
* GetShowAlternateIdTypes `object`: GetShowAlternateIdTypes

### GetShowChangeHistory
* GetShowChangeHistory `object`: GetShowChangeHistory
  * Date **required** `string`: Starting date <= when record has changed (Maximum of 30 days back). ISO 8601 Format: yyyy-mm-dd hh:mm:ss.ffffff0Z
  * Skip **required** `integer`: Offset for paging. Default is 0.
  * Take **required** `integer`: Maximum number of rows returned. Default is 1,000.

### GetShowChangeHistoryWithEntity
* GetShowChangeHistoryWithEntity `object`: GetShowChangeHistoryWithEntity
  * Date **required** `string`: Starting date <= when record has changed (Maximum of 30 days back). ISO 8601 Format: yyyy-mm-dd hh:mm:ss.ffffff0Z
  * Skip **required** `integer`: Offset for paging. Default is 0.
  * Take **required** `integer`: Maximum number of rows returned. Default is 1,000.

### GetShowGenres
* GetShowGenres `object`: GetShowGenres

### GetSummary
* GetSummary `object`: GetSummary
  * DateValue `string` (values: today, yesterday, two_days_ago, last_7_days, last_14_days, last_28_days, last_60_days, last_90_days, last_365_days): Days spanned by report
  * ReportTag `string`: Report Tag filter.

### GetTags
* GetTags `object`: GetTags
  * Skip **required** `integer`: Offset for paging. Default is 0.
  * Take **required** `integer`: Maximum number of rows returned. Default is 1,000.

### GetTestDateTime
* GetTestDateTime `object`: GetTestDateTime
  * DateTime **required** `string`: DateTime to test format from API.

### GetTheatricalMovies
* GetTheatricalMovies `object`: GetTheatricalMovies
  * Includes `array` (values: Genres, Releases, Contributors, AlternateTitles, Descriptions, Companies, Tags, Images, Videos): List of additional objects to include in the movie response.
    * items `string`
  * Skip **required** `integer`: Determines where to start page.  Ex: 0 starts at the beginning.
  * Take **required** `integer`: Determines the page size.  (Maximum of 10)

### GetTitleReport
* GetTitleReport `object`: GetTitleReport
  * End `string`: Report end date
  * PublishedId **required** `string`: Title published ID.
  * Start `string`: Report start date

### GetTmdbMovieIds
* GetTmdbMovieIds `object`: GetTmdbMovieIds
  * Skip **required** `integer`: Determines where to start page.  Ex: 0 starts at the beginning.
  * Take **required** `integer`: Determines the page size.  (Maximum of 1000)

### GetTmdbShowIds
* GetTmdbShowIds `object`: GetTmdbShowIds
  * Skip **required** `integer`: Determines where to start page.  Ex: 0 starts at the beginning.
  * Take **required** `integer`: Determines the page size.  (Maximum of 1000)

### GetTvMediaCountries
* GetTvMediaCountries `object`: GetTvMediaCountries
  * TvMediaApiKey **required** `string`: API Key supplied by TvMedia.ca

### GetTvMediaGenericLineups
* GetTvMediaGenericLineups `object`: GetTvMediaGenericLineups
  * Detail `string` (values: full, brief): Set level of detail for response. values are 'full' or 'brief', defaults to 'brief'. 'full' will include all properties, 'brief' will exclude optional properties.
  * TvMediaApiKey **required** `string`: API Key supplied by TvMedia.ca

### GetTvMediaLeagueListings
* GetTvMediaLeagueListings `object`: GetTvMediaLeagueListings
  * AdultContent `boolean`: Defaults to 1 (allowed). Set to 0 to hide adult content.
  * Channel `array`: Include only channel(s) with this number, single or array values accepted. sub channel numbers can be hyphenated to the end of the string: e.g. 1-2 for sub channel 2 of channel 1 (use the channel.number property , NOT channel.channelNumber property).
    * items `string`
  * DescriptiveVideoOnly `boolean`: Only displays listings which are flagged as being broadcast with Descriptive Video. No value necessary.
  * Detail `string` (values: full, brief): Set level of detail for response. values are 'full' or 'brief', defaults to 'full'. 'full' will include all properties, 'brief' will exclude optional properties.
  * DisplayArtwork `boolean`: Displays the Artwork information. Set to 1 to include, 1 is default. 0 to hide (will improve performance).
  * End `string`: UTC end time in ISO8601. Defaults to 'start' time +4 hours.
  * EndChan `array`: Highest channel. sub channel numbers can be hyphenated to the end of the string: e.g. 1-2 for sub channel 2 of channel 1. In general this parameter should rarely be used, for shaping the grid size see the 'maxchan' parameter.
    * items `string`
  * ExcludeChan `array`: Exclude channels by number, single or array values accepted. sub channel numbers can be hyphenated to the end of the string: e.g. 1-2 for sub channel 2 of channel 1 (use the channel.number property, NOT the channel.channelNumber property).
    * items `string`
  * ExcludeShowType `array`: Exclude only these show type ID(s), array or single values accepted. Must be URL encoded. For a list of possible show type's and their ID's see /genres/shows, or the showTypeID property of a listing object.
    * items `string`
  * ExcludeStation `array`: Filter out station IDs; array or single value accepted. Station ID's can be found in listings, or by using the /lineups API.
    * items `integer`
  * Id `array`: ListingID, array or single values accepted. to return a single listing it should be used in combination with a stationID (station parameter).
    * items `string`
  * League `array`: Get only sports listings in the given league ID(s). Array or single values accepted. For a list of possible values see /leagues.
    * items `string`
  * LeagueID **required** `string`: League ID. See /leagues for a list of all available sports leagues.
  * LineupID **required** `string`: Lineup ID. Lineups can be found through the /TvMedia/lineups method.
  * LiveOnly `boolean`: Only displays live listings. No value necessary.
  * NewShowsOnly `boolean`: Get new shows only. No value necessary.
  * NotYetStarted `boolean`: Only displays listings which are starting on or after the given start time. No value necessary.
  * Search `string`: search value: can be a show, episode, movie, team, league, person, etc. Results will be sorted by relevance rather than time.
  * ShowType `array`: Include only these show type ID(s), array or single values accepted. Must be URL encoded. For a list of possible show type's and their ID's see /genres/shows, or the showTypeID property of a listing object.
    * items `string`
  * SportEventsOnly `boolean`: Get sporting events only. No value necessary.
  * SportType `array`: Get only sports listings of type sportTypeID. Array or single values accepted. For a list of possible values see /genres/sports.
    * items `string`
  * Start `string`: UTC start time in ISO8601. Defaults to current date and time.
  * StartChan `array`: Lowest channel. sub channel numbers can be hyphenated to the end of the string: e.g. 1-2 for sub channel 2 of channel 1.
    * items `string`
  * Station `array`: Filter by station ID. Array or single value accepted. Station ID's can be found in listings, or by using the /lineups API.
    * items `integer`
  * Team `array`: Filter by teams playing by name(teams.longName). Array or single values accepted, for a list of possible values see /leagues/teams. (NOTE: league parameter is required when using this parameter).
    * items `string`
  * TimeZone `integer`: Set a timezone or time offset for listing times (listDateTime property). Defaults to UTC, accepts time offsets (+/-HH:MM) or named time zones (see IANA Time Zone Database). If an invalid value is set, listDateTime will be returned as empty. NOTE: this parameter does not affect input values; start and end times must still be provided in UTC.
  * TvMediaApiKey **required** `string`: API Key supplied by TvMedia.ca

### GetTvMediaLeagues
* GetTvMediaLeagues `object`: GetTvMediaLeagues
  * TvMediaApiKey **required** `string`: API Key supplied by TvMedia.ca

### GetTvMediaLineupByID
* GetTvMediaLineupByID `object`: GetTvMediaLineupByID
  * Detail `string` (values: full, brief): Set level of detail for response. values are 'full' or 'brief', defaults to 'full'. 'full' will include all properties, 'brief' will exclude optional properties.
  * LineupID **required** `string`: Lineup ID.
  * TvMediaApiKey **required** `string`: API Key supplied by TvMedia.ca

### GetTvMediaLineupListings
* GetTvMediaLineupListings `object`: GetTvMediaLineupListings
  * AdultContent `boolean`: Defaults to 1 (allowed). Set to 0 to hide adult content.
  * Channel `array`: Include only channel(s) with this number, single or array values accepted. sub channel numbers can be hyphenated to the end of the string: e.g. 1-2 for sub channel 2 of channel 1 (use the channel.number property , NOT channel.channelNumber property).
    * items `string`
  * DescriptiveVideoOnly `boolean`: Only displays listings which are flagged as being broadcast with Descriptive Video. No value necessary.
  * Detail `string` (values: full, brief): Set level of detail for response. values are 'full' or 'brief', defaults to 'full'. 'full' will include all properties, 'brief' will exclude optional properties.
  * DisplayArtwork `boolean`: Displays the Artwork information. Set to 1 to include, 1 is default. 0 to hide (will improve performance).
  * End `string`: UTC end time in ISO8601. Defaults to 'start' time +4 hours.
  * EndChan `array`: Highest channel. sub channel numbers can be hyphenated to the end of the string: e.g. 1-2 for sub channel 2 of channel 1. In general this parameter should rarely be used, for shaping the grid size see the 'maxchan' parameter.
    * items `string`
  * ExcludeChan `array`: Exclude channels by number, single or array values accepted. sub channel numbers can be hyphenated to the end of the string: e.g. 1-2 for sub channel 2 of channel 1 (use the channel.number property, NOT the channel.channelNumber property).
    * items `string`
  * ExcludeShowType `array`: Exclude only these show type ID(s), array or single values accepted. Must be URL encoded. For a list of possible show type's and their ID's see /genres/shows, or the showTypeID property of a listing object.
    * items `string`
  * ExcludeStation `array`: Filter out station IDs; array or single value accepted. Station ID's can be found in listings, or by using the /lineups API.
    * items `integer`
  * Id `array`: ListingID, array or single values accepted. to return a single listing it should be used in combination with a stationID (station parameter).
    * items `string`
  * League `array`: Get only sports listings in the given league ID(s). Array or single values accepted. For a list of possible values see /leagues.
    * items `string`
  * LineupID **required** `string`: Lineup ID.
  * LiveOnly `boolean`: Only displays live listings. No value necessary.
  * NewShowsOnly `boolean`: Get new shows only. No value necessary.
  * NotYetStarted `boolean`: Only displays listings which are starting on or after the given start time. No value necessary.
  * Search `string`: search value: can be a show, episode, movie, team, league, person, etc. Results will be sorted by relevance rather than time.
  * ShowType `array`: Include only these show type ID(s), array or single values accepted. Must be URL encoded. For a list of possible show type's and their ID's see /genres/shows, or the showTypeID property of a listing object.
    * items `string`
  * SportEventsOnly `boolean`: Get sporting events only. No value necessary.
  * SportType `array`: Get only sports listings of type sportTypeID. Array or single values accepted. For a list of possible values see /genres/sports.
    * items `string`
  * Start `string`: UTC start time in ISO8601. Defaults to current date and time.
  * StartChan `array`: Lowest channel. sub channel numbers can be hyphenated to the end of the string: e.g. 1-2 for sub channel 2 of channel 1.
    * items `string`
  * Station `array`: Filter by station ID. Array or single value accepted. Station ID's can be found in listings, or by using the /lineups API.
    * items `integer`
  * Team `array`: Filter by teams playing by name(teams.longName). Array or single values accepted, for a list of possible values see /leagues/teams. (NOTE: league parameter is required when using this parameter).
    * items `string`
  * TimeZone `integer`: Set a timezone or time offset for listing times (listDateTime property). Defaults to UTC, accepts time offsets (+/-HH:MM) or named time zones (see IANA Time Zone Database). If an invalid value is set, listDateTime will be returned as empty. NOTE: this parameter does not affect input values; start and end times must still be provided in UTC.
  * TvMediaApiKey **required** `string`: API Key supplied by TvMedia.ca

### GetTvMediaLineupListingsGrid
* GetTvMediaLineupListingsGrid `object`: GetTvMediaLineupListingsGrid
  * AdultContent `boolean`: Defaults to 1 (allowed). Set to 0 to hide adult content.
  * Channel `array`: Include only channel(s) with this number, single or array values accepted. sub channel numbers can be hyphenated to the end of the string: e.g. 1-2 for sub channel 2 of channel 1 (use the channel.number property , NOT channel.channelNumber property).
    * items `string`
  * DescriptiveVideoOnly `boolean`: Only displays listings which are flagged as being broadcast with Descriptive Video. No value necessary.
  * Detail `string` (values: full, brief): Set level of detail for response. values are 'full' or 'brief', defaults to 'full'. 'full' will include all properties, 'brief' will exclude optional properties.
  * DisplayArtwork `boolean`: Displays the Artwork information. Set to 1 to include, 1 is default. 0 to hide (will improve performance).
  * End `string`: UTC end time in ISO8601. Defaults to 'start' time +4 hours.
  * EndChan `array`: Highest channel. sub channel numbers can be hyphenated to the end of the string: e.g. 1-2 for sub channel 2 of channel 1. In general this parameter should rarely be used, for shaping the grid size see the 'maxchan' parameter.
    * items `string`
  * ExcludeChan `array`: Exclude channels by number, single or array values accepted. sub channel numbers can be hyphenated to the end of the string: e.g. 1-2 for sub channel 2 of channel 1 (use the channel.number property, NOT the channel.channelNumber property).
    * items `string`
  * ExcludeShowType `array`: Exclude only these show type ID(s), array or single values accepted. Must be URL encoded. For a list of possible show type's and their ID's see /genres/shows, or the showTypeID property of a listing object.
    * items `string`
  * ExcludeStation `array`: Filter out station IDs; array or single value accepted. Station ID's can be found in listings, or by using the /lineups API.
    * items `integer`
  * Id `array`: ListingID, array or single values accepted. to return a single listing it should be used in combination with a stationID (station parameter).
    * items `string`
  * League `array`: Get only sports listings in the given league ID(s). Array or single values accepted. For a list of possible values see /leagues.
    * items `string`
  * LineupID **required** `string`: Lineup ID.
  * LiveOnly `boolean`: Only displays live listings. No value necessary.
  * NewShowsOnly `boolean`: Get new shows only. No value necessary.
  * NotYetStarted `boolean`: Only displays listings which are starting on or after the given start time. No value necessary.
  * Search `string`: search value: can be a show, episode, movie, team, league, person, etc. Results will be sorted by relevance rather than time.
  * ShowType `array`: Include only these show type ID(s), array or single values accepted. Must be URL encoded. For a list of possible show type's and their ID's see /genres/shows, or the showTypeID property of a listing object.
    * items `string`
  * SportEventsOnly `boolean`: Get sporting events only. No value necessary.
  * SportType `array`: Get only sports listings of type sportTypeID. Array or single values accepted. For a list of possible values see /genres/sports.
    * items `string`
  * Start `string`: UTC start time in ISO8601. Defaults to current date and time.
  * StartChan `array`: Lowest channel. sub channel numbers can be hyphenated to the end of the string: e.g. 1-2 for sub channel 2 of channel 1.
    * items `string`
  * Station `array`: Filter by station ID. Array or single value accepted. Station ID's can be found in listings, or by using the /lineups API.
    * items `integer`
  * Team `array`: Filter by teams playing by name(teams.longName). Array or single values accepted, for a list of possible values see /leagues/teams. (NOTE: league parameter is required when using this parameter).
    * items `string`
  * TimeZone `integer`: Set a timezone or time offset for listing times (listDateTime property). Defaults to UTC, accepts time offsets (+/-HH:MM) or named time zones (see IANA Time Zone Database). If an invalid value is set, listDateTime will be returned as empty. NOTE: this parameter does not affect input values; start and end times must still be provided in UTC.
  * TvMediaApiKey **required** `string`: API Key supplied by TvMedia.ca

### GetTvMediaLineupListingsHighlights
* GetTvMediaLineupListingsHighlights `object`: GetTvMediaLineupListingsHighlights
  * AdultContent `boolean`: Defaults to 1 (allowed). Set to 0 to hide adult content.
  * Channel `array`: Include only channel(s) with this number, single or array values accepted. sub channel numbers can be hyphenated to the end of the string: e.g. 1-2 for sub channel 2 of channel 1 (use the channel.number property , NOT channel.channelNumber property).
    * items `string`
  * DescriptiveVideoOnly `boolean`: Only displays listings which are flagged as being broadcast with Descriptive Video. No value necessary.
  * Detail `string` (values: full, brief): Set level of detail for response. values are 'full' or 'brief', defaults to 'full'. 'full' will include all properties, 'brief' will exclude optional properties.
  * DisplayArtwork `boolean`: Displays the Artwork information. Set to 1 to include, 1 is default. 0 to hide (will improve performance).
  * End `string`: UTC end time in ISO8601. Defaults to 'start' time +4 hours.
  * EndChan `array`: Highest channel. sub channel numbers can be hyphenated to the end of the string: e.g. 1-2 for sub channel 2 of channel 1. In general this parameter should rarely be used, for shaping the grid size see the 'maxchan' parameter.
    * items `string`
  * ExcludeChan `array`: Exclude channels by number, single or array values accepted. sub channel numbers can be hyphenated to the end of the string: e.g. 1-2 for sub channel 2 of channel 1 (use the channel.number property, NOT the channel.channelNumber property).
    * items `string`
  * ExcludeShowType `array`: Exclude only these show type ID(s), array or single values accepted. Must be URL encoded. For a list of possible show type's and their ID's see /genres/shows, or the showTypeID property of a listing object.
    * items `string`
  * ExcludeStation `array`: Filter out station IDs; array or single value accepted. Station ID's can be found in listings, or by using the /lineups API.
    * items `integer`
  * Id `array`: ListingID, array or single values accepted. to return a single listing it should be used in combination with a stationID (station parameter).
    * items `string`
  * League `array`: Get only sports listings in the given league ID(s). Array or single values accepted. For a list of possible values see /leagues.
    * items `string`
  * LineupID **required** `string`: Lineup ID.
  * LiveOnly `boolean`: Only displays live listings. No value necessary.
  * NewShowsOnly `boolean`: Get new shows only. No value necessary.
  * NotYetStarted `boolean`: Only displays listings which are starting on or after the given start time. No value necessary.
  * Search `string`: search value: can be a show, episode, movie, team, league, person, etc. Results will be sorted by relevance rather than time.
  * ShowType `array`: Include only these show type ID(s), array or single values accepted. Must be URL encoded. For a list of possible show type's and their ID's see /genres/shows, or the showTypeID property of a listing object.
    * items `string`
  * SportEventsOnly `boolean`: Get sporting events only. No value necessary.
  * SportType `array`: Get only sports listings of type sportTypeID. Array or single values accepted. For a list of possible values see /genres/sports.
    * items `string`
  * Start `string`: UTC start time in ISO8601. Defaults to current date and time.
  * StartChan `array`: Lowest channel. sub channel numbers can be hyphenated to the end of the string: e.g. 1-2 for sub channel 2 of channel 1.
    * items `string`
  * Station `array`: Filter by station ID. Array or single value accepted. Station ID's can be found in listings, or by using the /lineups API.
    * items `integer`
  * Team `array`: Filter by teams playing by name(teams.longName). Array or single values accepted, for a list of possible values see /leagues/teams. (NOTE: league parameter is required when using this parameter).
    * items `string`
  * TimeZone `integer`: Set a timezone or time offset for listing times (listDateTime property). Defaults to UTC, accepts time offsets (+/-HH:MM) or named time zones (see IANA Time Zone Database). If an invalid value is set, listDateTime will be returned as empty. NOTE: this parameter does not affect input values; start and end times must still be provided in UTC.
  * TvMediaApiKey **required** `string`: API Key supplied by TvMedia.ca

### GetTvMediaLineupsByAreaID
* GetTvMediaLineupsByAreaID `object`: GetTvMediaLineupsByAreaID
  * AreaID **required** `string`: Service area ID. See TvMedia/lineups/browse/{CountryID}/{RegionID} for a list of service areas.
  * CountryID **required** `string`: Country abbreviation. See TvMedia/lineups/browse for a list of supported countries.
  * Detail `string` (values: full, brief): Set level of detail for response. values are 'full' or 'brief', defaults to 'brief'. 'full' will include all properties, 'brief' will exclude optional properties.
  * LineupType `string` (values: OTA, SAT, CAB, IPTV): Filter by lineup type, valid types are OTA, SAT, CAB, IPTV.
  * ProviderId `string`: Filter by provider ID
  * RegionID **required** `string`: Region abbreviation. See TvMedia/lineups/browse/{CountryID} for a list of regions.
  * TvMediaApiKey **required** `string`: API Key supplied by TvMedia.ca

### GetTvMediaLineupsByLatitudeLongitude
* GetTvMediaLineupsByLatitudeLongitude `object`: GetTvMediaLineupsByLatitudeLongitude
  * Detail `string` (values: full, brief): Set level of detail for response. values are 'full' or 'brief', defaults to 'brief'. 'full' will include all properties, 'brief' will exclude optional properties.
  * Latitude **required** `number`: Latitude (geographic coordinate).
  * LineupType `string` (values: OTA, SAT, CAB, IPTV): Filter by lineup type, valid types are OTA, SAT, CAB, IPTV.
  * Longitude **required** `number`: Longitude (geographic coordinate).
  * ProviderId `string`: Filter by provider ID
  * TvMediaApiKey **required** `string`: API Key supplied by TvMedia.ca

### GetTvMediaLineupsByPostalCode
* GetTvMediaLineupsByPostalCode `object`: GetTvMediaLineupsByPostalCode
  * Detail `string` (values: full, brief): Set level of detail for response. values are 'full' or 'brief', defaults to 'brief'. 'full' will include all properties, 'brief' will exclude optional properties.
  * LineupType `string` (values: OTA, SAT, CAB, IPTV): Filter by lineup type, valid types are OTA, SAT, CAB, IPTV.
  * PostalCode **required** `string`: Postal code.
  * ProviderId `string`: Filter by provider ID
  * TvMediaApiKey **required** `string`: API Key supplied by TvMedia.ca

### GetTvMediaListingsByStation
* GetTvMediaListingsByStation `object`: GetTvMediaListingsByStation
  * AdultContent `boolean`: Defaults to 1 (allowed). Set to 0 to hide adult content.
  * Channel `array`: Include only channel(s) with this number, single or array values accepted. sub channel numbers can be hyphenated to the end of the string: e.g. 1-2 for sub channel 2 of channel 1 (use the channel.number property , NOT channel.channelNumber property).
    * items `string`
  * DescriptiveVideoOnly `boolean`: Only displays listings which are flagged as being broadcast with Descriptive Video. No value necessary.
  * Detail `string` (values: full, brief): Set level of detail for response. values are 'full' or 'brief', defaults to 'full'. 'full' will include all properties, 'brief' will exclude optional properties.
  * DisplayArtwork `boolean`: Displays the Artwork information. Set to 1 to include, 1 is default. 0 to hide (will improve performance).
  * End `string`: UTC end time in ISO8601. Defaults to 'start' time +4 hours.
  * EndChan `array`: Highest channel. sub channel numbers can be hyphenated to the end of the string: e.g. 1-2 for sub channel 2 of channel 1. In general this parameter should rarely be used, for shaping the grid size see the 'maxchan' parameter.
    * items `string`
  * ExcludeChan `array`: Exclude channels by number, single or array values accepted. sub channel numbers can be hyphenated to the end of the string: e.g. 1-2 for sub channel 2 of channel 1 (use the channel.number property, NOT the channel.channelNumber property).
    * items `string`
  * ExcludeShowType `array`: Exclude only these show type ID(s), array or single values accepted. Must be URL encoded. For a list of possible show type's and their ID's see /genres/shows, or the showTypeID property of a listing object.
    * items `string`
  * ExcludeStation `array`: Filter out station IDs; array or single value accepted. Station ID's can be found in listings, or by using the /lineups API.
    * items `integer`
  * Id `array`: ListingID, array or single values accepted. to return a single listing it should be used in combination with a stationID (station parameter).
    * items `string`
  * League `array`: Get only sports listings in the given league ID(s). Array or single values accepted. For a list of possible values see /leagues.
    * items `string`
  * LiveOnly `boolean`: Only displays live listings. No value necessary.
  * NewShowsOnly `boolean`: Get new shows only. No value necessary.
  * NotYetStarted `boolean`: Only displays listings which are starting on or after the given start time. No value necessary.
  * Search `string`: search value: can be a show, episode, movie, team, league, person, etc. Results will be sorted by relevance rather than time.
  * ShowType `array`: Include only these show type ID(s), array or single values accepted. Must be URL encoded. For a list of possible show type's and their ID's see /genres/shows, or the showTypeID property of a listing object.
    * items `string`
  * SportEventsOnly `boolean`: Get sporting events only. No value necessary.
  * SportType `array`: Get only sports listings of type sportTypeID. Array or single values accepted. For a list of possible values see /genres/sports.
    * items `string`
  * Start `string`: UTC start time in ISO8601. Defaults to current date and time.
  * StartChan `array`: Lowest channel. sub channel numbers can be hyphenated to the end of the string: e.g. 1-2 for sub channel 2 of channel 1.
    * items `string`
  * Station `array`: Filter by station ID. Array or single value accepted. Station ID's can be found in listings, or by using the /lineups API.
    * items `integer`
  * StationID **required** `integer`: Station ID. Station ID's can be found in listings, or by using the Tvmedia/lineups API
  * Team `array`: Filter by teams playing by name(teams.longName). Array or single values accepted, for a list of possible values see /leagues/teams. (NOTE: league parameter is required when using this parameter).
    * items `string`
  * TimeZone `integer`: Set a timezone or time offset for listing times (listDateTime property). Defaults to UTC, accepts time offsets (+/-HH:MM) or named time zones (see IANA Time Zone Database). If an invalid value is set, listDateTime will be returned as empty. NOTE: this parameter does not affect input values; start and end times must still be provided in UTC.
  * TvMediaApiKey **required** `string`: API Key supplied by TvMedia.ca

### GetTvMediaMovieGenres
* GetTvMediaMovieGenres `object`: GetTvMediaMovieGenres
  * TvMediaApiKey **required** `string`: API Key supplied by TvMedia.ca

### GetTvMediaRegions
* GetTvMediaRegions `object`: GetTvMediaRegions
  * CountryID **required** `string`: Country abbreviation. See TvMedia/lineups/browse for a list of supported countries.
  * TvMediaApiKey **required** `string`: API Key supplied by TvMedia.ca

### GetTvMediaServiceAreas
* GetTvMediaServiceAreas `object`: GetTvMediaServiceAreas
  * CountryID **required** `string`: Country abbreviation. See TvMedia/lineups/browse for a list of supported countries.
  * RegionID **required** `string`: Region abbreviation. See TvMedia/lineups/browse/{CountryID} for a list of regions.
  * TvMediaApiKey **required** `string`: API Key supplied by TvMedia.ca

### GetTvMediaShowGenres
* GetTvMediaShowGenres `object`: GetTvMediaShowGenres
  * TvMediaApiKey **required** `string`: API Key supplied by TvMedia.ca

### GetTvMediaSportGenres
* GetTvMediaSportGenres `object`: GetTvMediaSportGenres
  * TvMediaApiKey **required** `string`: API Key supplied by TvMedia.ca

### GetTvMediaStation
* GetTvMediaStation `object`: GetTvMediaStation
  * StationID **required** `integer`: Station ID. Station ID's can be found in listings, or by using the Tvmedia/lineups API
  * TvMediaApiKey **required** `string`: API Key supplied by TvMedia.ca

### GetTvMediaTeamById
* GetTvMediaTeamById `object`: GetTvMediaTeamById
  * TeamID **required** `integer`: Team ID.
  * TvMediaApiKey **required** `string`: API Key supplied by TvMedia.ca

### GetTvMediaTeamListings
* GetTvMediaTeamListings `object`: GetTvMediaTeamListings
  * AdultContent `boolean`: Defaults to 1 (allowed). Set to 0 to hide adult content.
  * Channel `array`: Include only channel(s) with this number, single or array values accepted. sub channel numbers can be hyphenated to the end of the string: e.g. 1-2 for sub channel 2 of channel 1 (use the channel.number property , NOT channel.channelNumber property).
    * items `string`
  * DescriptiveVideoOnly `boolean`: Only displays listings which are flagged as being broadcast with Descriptive Video. No value necessary.
  * Detail `string` (values: full, brief): Set level of detail for response. values are 'full' or 'brief', defaults to 'full'. 'full' will include all properties, 'brief' will exclude optional properties.
  * DisplayArtwork `boolean`: Displays the Artwork information. Set to 1 to include, 1 is default. 0 to hide (will improve performance).
  * End `string`: UTC end time in ISO8601. Defaults to 'start' time +4 hours.
  * EndChan `array`: Highest channel. sub channel numbers can be hyphenated to the end of the string: e.g. 1-2 for sub channel 2 of channel 1. In general this parameter should rarely be used, for shaping the grid size see the 'maxchan' parameter.
    * items `string`
  * ExcludeChan `array`: Exclude channels by number, single or array values accepted. sub channel numbers can be hyphenated to the end of the string: e.g. 1-2 for sub channel 2 of channel 1 (use the channel.number property, NOT the channel.channelNumber property).
    * items `string`
  * ExcludeShowType `array`: Exclude only these show type ID(s), array or single values accepted. Must be URL encoded. For a list of possible show type's and their ID's see /genres/shows, or the showTypeID property of a listing object.
    * items `string`
  * ExcludeStation `array`: Filter out station IDs; array or single value accepted. Station ID's can be found in listings, or by using the /lineups API.
    * items `integer`
  * Id `array`: ListingID, array or single values accepted. to return a single listing it should be used in combination with a stationID (station parameter).
    * items `string`
  * League `array`: Get only sports listings in the given league ID(s). Array or single values accepted. For a list of possible values see /leagues.
    * items `string`
  * LineupID **required** `string`: Lineup ID. Lineups can be found through the /TvMedia/lineups method.
  * LiveOnly `boolean`: Only displays live listings. No value necessary.
  * NewShowsOnly `boolean`: Get new shows only. No value necessary.
  * NotYetStarted `boolean`: Only displays listings which are starting on or after the given start time. No value necessary.
  * Search `string`: search value: can be a show, episode, movie, team, league, person, etc. Results will be sorted by relevance rather than time.
  * ShowType `array`: Include only these show type ID(s), array or single values accepted. Must be URL encoded. For a list of possible show type's and their ID's see /genres/shows, or the showTypeID property of a listing object.
    * items `string`
  * SportEventsOnly `boolean`: Get sporting events only. No value necessary.
  * SportType `array`: Get only sports listings of type sportTypeID. Array or single values accepted. For a list of possible values see /genres/sports.
    * items `string`
  * Start `string`: UTC start time in ISO8601. Defaults to current date and time.
  * StartChan `array`: Lowest channel. sub channel numbers can be hyphenated to the end of the string: e.g. 1-2 for sub channel 2 of channel 1.
    * items `string`
  * Station `array`: Filter by station ID. Array or single value accepted. Station ID's can be found in listings, or by using the /lineups API.
    * items `integer`
  * Team `array`: Filter by teams playing by name(teams.longName). Array or single values accepted, for a list of possible values see /leagues/teams. (NOTE: league parameter is required when using this parameter).
    * items `string`
  * TeamID **required** `integer`: Team ID. See /teams for a list of all available sports teams.
  * TimeZone `integer`: Set a timezone or time offset for listing times (listDateTime property). Defaults to UTC, accepts time offsets (+/-HH:MM) or named time zones (see IANA Time Zone Database). If an invalid value is set, listDateTime will be returned as empty. NOTE: this parameter does not affect input values; start and end times must still be provided in UTC.
  * TvMediaApiKey **required** `string`: API Key supplied by TvMedia.ca

### GetTvMediaTeams
* GetTvMediaTeams `object`: GetTvMediaTeams
  * LeagueID **required** `string`: League ID. See /TvMedia/leagues for a list of all available sports leagues.
  * TvMediaApiKey **required** `string`: API Key supplied by TvMedia.ca

### GetVideo
* GetVideo `object`: GetVideo
  * Expires **required** `string`: UTC Time to video link should expire. ISO 8601 Format: yyyy-mm-dd hh:mm:ss.ffffff0Z
  * Format **required** `string` (values: mp4, hls, hss, hds, dash): Video format.
  * Id **required** `integer`: Id of the Video from either MovieVideo, ShowVideo, SeasonVideo, EpisodeVideo object.
  * KbRate `string` (values: mp4_80, mp4_212, mp4_450, mp4_750, mp4_1500, mp4_2500, mp4_5000, mp4_8000): Video bitrate required for MP4 content.
  * MaxRate `string` (values: adap_212000, adap_350000, adap_600000, adap_1200000, adap_2000000, adap_2500000, adap_3500000): Adaptive Minimum rate.
  * MinRate `string` (values: adap_212000, adap_350000, adap_600000, adap_1200000, adap_2000000, adap_2500000, adap_3500000): Adaptive Maximum rate.
  * ReportTag `string`: Report tag used in video analytics.
  * end `integer`: Position in seconds to end video playback.
  * start `integer`: Position in seconds to start video playback.

### GetVideoLog
* GetVideoLog `object`: GetVideoLog
  * DateValue `string` (values: today, yesterday, two_days_ago, last_7_days, last_14_days, last_28_days, last_60_days, last_90_days, last_365_days): Days spanned by report
  * End `string`: Report end date
  * Limit `integer`: Number of records returned from top of response
  * ReportTag `string`: Report Tag filter.
  * Start `string`: Report start date

### GetVideoTypes
* GetVideoTypes `object`: GetVideoTypes

### GetViewers
* GetViewers `object`: GetViewers
  * DateValue `string` (values: today, yesterday, two_days_ago, last_7_days, last_14_days, last_28_days, last_60_days, last_90_days, last_365_days): Days spanned by report
  * ReportTag `string`: Report Tag filter.

### GetViews
* GetViews `object`: GetViews
  * DateValue `string` (values: today, yesterday, two_days_ago, last_7_days, last_14_days, last_28_days, last_60_days, last_90_days, last_365_days): Days spanned by report
  * ReportTag `string`: Report Tag filter.

### GetWebBrowsers
* GetWebBrowsers `object`: GetWebBrowsers
  * DateValue `string` (values: today, yesterday, two_days_ago, last_7_days, last_14_days, last_28_days, last_60_days, last_90_days, last_365_days): Days spanned by report
  * End `string`: Report end date
  * Limit `integer`: Number of records returned from top of response
  * ReportTag `string`: Report Tag filter.
  * Start `string`: Report start date

### GetWebediaMovieIds
* GetWebediaMovieIds `object`: GetWebediaMovieIds
  * Skip **required** `integer`: Determines where to start page.  Ex: 0 starts at the beginning.
  * Take **required** `integer`: Determines the page size.  (Maximum of 1000)

### GetXroadMediaRecommendations
* GetXroadMediaRecommendations `object`: GetXroadMediaRecommendations
  * MovieId `integer`: Source MovieId for recommendations.
  * ShowId `integer`: Source ShowId for recommendations.
  * Type `string` (values: similar, similarShowsOnly, similarMoviesOnly): Type of recommendation response.

### GoWatchItEpisodeAvailabilitiesAvailability
* GoWatchItEpisodeAvailabilitiesAvailability `object`: GoWatchItEpisodeAvailabilitiesAvailability
  * buy_line `string`
  * categories `array`
    * items `string`
  * category `string`
  * dma `boolean`
  * format_line `string`
  * formats `array`
    * items [GoWatchItEpisodeAvailabilitiesAvailabilityFormat](#gowatchitepisodeavailabilitiesavailabilityformat)
  * presale `boolean`
  * provider_format_id `integer`
  * provider_format_logos [GoWatchItEpisodeAvailabilitiesAvailabilityProvider_Format_Logos](#gowatchitepisodeavailabilitiesavailabilityprovider_format_logos)
  * provider_format_name `string`
  * provider_name `string`
  * rent_line `string`
  * suggested_line `string`
  * suggested_url `string`
  * ultraviolet `boolean`
  * watch_now_url `string`

### GoWatchItEpisodeAvailabilitiesAvailabilityFormat
* GoWatchItEpisodeAvailabilitiesAvailabilityFormat `object`: GoWatchItEpisodeAvailabilitiesAvailabilityFormat
  * annotation [Object](#object)
  * category `string`
  * delivery [Object](#object)
  * links `array`
    * items [GoWatchItEpisodeAvailabilitiesAvailabilityFormatLink](#gowatchitepisodeavailabilitiesavailabilityformatlink)
  * offer [Object](#object)
  * position `integer`
  * price [Object](#object)
  * quality `string`

### GoWatchItEpisodeAvailabilitiesAvailabilityFormatLink
* GoWatchItEpisodeAvailabilitiesAvailabilityFormatLink `object`: GoWatchItEpisodeAvailabilitiesAvailabilityFormatLink
  * logos [GoWatchItEpisodeAvailabilitiesAvailabilityFormatLinkLogos](#gowatchitepisodeavailabilitiesavailabilityformatlinklogos)
  * type `string`
  * url `string`

### GoWatchItEpisodeAvailabilitiesAvailabilityFormatLinkLogos
* GoWatchItEpisodeAvailabilitiesAvailabilityFormatLinkLogos `object`: GoWatchItEpisodeAvailabilitiesAvailabilityFormatLinkLogos
  * dark [Object](#object)
  * light [Object](#object)

### GoWatchItEpisodeAvailabilitiesAvailabilityProvider_Format_Logos
* GoWatchItEpisodeAvailabilitiesAvailabilityProvider_Format_Logos `object`: GoWatchItEpisodeAvailabilitiesAvailabilityProvider_Format_Logos
  * dark `string`
  * light `string`

### GoWatchItEpisodeAvailabilitiesResponse
* GoWatchItEpisodeAvailabilitiesResponse `object`: GoWatchItEpisodeAvailabilitiesResponse
  * GoWatchItId `integer`
  * availabilities `array`
    * items [GoWatchItEpisodeAvailabilitiesAvailability](#gowatchitepisodeavailabilitiesavailability)
  * available `boolean`

### GoWatchItMovieAvailabilitiesAvailability
* GoWatchItMovieAvailabilitiesAvailability `object`: GoWatchItMovieAvailabilitiesAvailability
  * buy_line `string`
  * categories `array`
    * items `string`
  * category `string`
  * dma `boolean`
  * format_line `string`
  * formats `array`
    * items [GoWatchItMovieAvailabilitiesAvailabilityFormat](#gowatchitmovieavailabilitiesavailabilityformat)
  * presale `boolean`
  * provider_format_id `integer`
  * provider_format_logos [GoWatchItMovieAvailabilitiesAvailabilityProvider_Format_Logos](#gowatchitmovieavailabilitiesavailabilityprovider_format_logos)
  * provider_format_name `string`
  * provider_name `string`
  * rent_line `string`
  * suggested_line `string`
  * suggested_url `string`
  * ultraviolet `boolean`
  * watch_now_url `string`

### GoWatchItMovieAvailabilitiesAvailabilityFormat
* GoWatchItMovieAvailabilitiesAvailabilityFormat `object`: GoWatchItMovieAvailabilitiesAvailabilityFormat
  * annotation [Object](#object)
  * category `string`
  * delivery [Object](#object)
  * links `array`
    * items [GoWatchItMovieAvailabilitiesAvailabilityFormatLink](#gowatchitmovieavailabilitiesavailabilityformatlink)
  * offer `string`
  * position `integer`
  * price `string`
  * quality `string`

### GoWatchItMovieAvailabilitiesAvailabilityFormatLink
* GoWatchItMovieAvailabilitiesAvailabilityFormatLink `object`: GoWatchItMovieAvailabilitiesAvailabilityFormatLink
  * logos [GoWatchItMovieAvailabilitiesAvailabilityFormatLinkLogos](#gowatchitmovieavailabilitiesavailabilityformatlinklogos)
  * type `string`
  * url `string`

### GoWatchItMovieAvailabilitiesAvailabilityFormatLinkLogos
* GoWatchItMovieAvailabilitiesAvailabilityFormatLinkLogos `object`: GoWatchItMovieAvailabilitiesAvailabilityFormatLinkLogos
  * dark [Object](#object)
  * light [Object](#object)

### GoWatchItMovieAvailabilitiesAvailabilityProvider_Format_Logos
* GoWatchItMovieAvailabilitiesAvailabilityProvider_Format_Logos `object`: GoWatchItMovieAvailabilitiesAvailabilityProvider_Format_Logos
  * dark `string`
  * light `string`

### GoWatchItMovieAvailabilitiesResponse
* GoWatchItMovieAvailabilitiesResponse `object`: GoWatchItMovieAvailabilitiesResponse
  * GoWatchItId `integer`
  * availabilities `array`
    * items [GoWatchItMovieAvailabilitiesAvailability](#gowatchitmovieavailabilitiesavailability)
  * available `boolean`

### GoWatchItSeasonAvailabilitiesAvailability
* GoWatchItSeasonAvailabilitiesAvailability `object`: GoWatchItSeasonAvailabilitiesAvailability
  * buy_line `string`
  * categories `array`
    * items `string`
  * category `string`
  * dma `boolean`
  * format_line `string`
  * formats `array`
    * items [GoWatchItSeasonAvailabilitiesAvailabilityFormat](#gowatchitseasonavailabilitiesavailabilityformat)
  * presale `boolean`
  * provider_format_id `integer`
  * provider_format_logos [GoWatchItSeasonAvailabilitiesAvailabilityProvider_Format_Logos](#gowatchitseasonavailabilitiesavailabilityprovider_format_logos)
  * provider_format_name `string`
  * provider_name `string`
  * rent_line `string`
  * suggested_line `string`
  * suggested_url `string`
  * ultraviolet `boolean`
  * watch_now_url `string`

### GoWatchItSeasonAvailabilitiesAvailabilityFormat
* GoWatchItSeasonAvailabilitiesAvailabilityFormat `object`: GoWatchItSeasonAvailabilitiesAvailabilityFormat
  * annotation [Object](#object)
  * category `string`
  * delivery [Object](#object)
  * links `array`
    * items [GoWatchItSeasonAvailabilitiesAvailabilityFormatLink](#gowatchitseasonavailabilitiesavailabilityformatlink)
  * offer `string`
  * position `integer`
  * price `string`
  * quality `string`

### GoWatchItSeasonAvailabilitiesAvailabilityFormatLink
* GoWatchItSeasonAvailabilitiesAvailabilityFormatLink `object`: GoWatchItSeasonAvailabilitiesAvailabilityFormatLink
  * logos [GoWatchItSeasonAvailabilitiesAvailabilityFormatLinkLogos](#gowatchitseasonavailabilitiesavailabilityformatlinklogos)
  * type `string`
  * url `string`

### GoWatchItSeasonAvailabilitiesAvailabilityFormatLinkLogos
* GoWatchItSeasonAvailabilitiesAvailabilityFormatLinkLogos `object`: GoWatchItSeasonAvailabilitiesAvailabilityFormatLinkLogos
  * dark [Object](#object)
  * light [Object](#object)

### GoWatchItSeasonAvailabilitiesAvailabilityProvider_Format_Logos
* GoWatchItSeasonAvailabilitiesAvailabilityProvider_Format_Logos `object`: GoWatchItSeasonAvailabilitiesAvailabilityProvider_Format_Logos
  * dark `string`
  * light `string`

### GoWatchItSeasonAvailabilitiesResponse
* GoWatchItSeasonAvailabilitiesResponse `object`: GoWatchItSeasonAvailabilitiesResponse
  * GoWatchItId `integer`
  * availabilities `array`
    * items [GoWatchItSeasonAvailabilitiesAvailability](#gowatchitseasonavailabilitiesavailability)
  * available `boolean`

### GoWatchItShowAvailabilitiesAvailability
* GoWatchItShowAvailabilitiesAvailability `object`: GoWatchItShowAvailabilitiesAvailability
  * buy_line `string`
  * categories `array`
    * items `string`
  * category `string`
  * dma `boolean`
  * format_line `string`
  * formats `array`
    * items [GoWatchItShowAvailabilitiesAvailabilityFormat](#gowatchitshowavailabilitiesavailabilityformat)
  * presale `boolean`
  * provider_format_id `integer`
  * provider_format_logos [GoWatchItShowAvailabilitiesAvailabilityProvider_Format_Logos](#gowatchitshowavailabilitiesavailabilityprovider_format_logos)
  * provider_format_name `string`
  * provider_name `string`
  * rent_line `string`
  * suggested_line `string`
  * suggested_url `string`
  * ultraviolet `boolean`
  * watch_now_url `string`

### GoWatchItShowAvailabilitiesAvailabilityFormat
* GoWatchItShowAvailabilitiesAvailabilityFormat `object`: GoWatchItShowAvailabilitiesAvailabilityFormat
  * annotation [Object](#object)
  * category `string`
  * delivery [Object](#object)
  * links `array`
    * items [GoWatchItShowAvailabilitiesAvailabilityFormatLink](#gowatchitshowavailabilitiesavailabilityformatlink)
  * offer [Object](#object)
  * position `integer`
  * price [Object](#object)
  * quality `string`

### GoWatchItShowAvailabilitiesAvailabilityFormatLink
* GoWatchItShowAvailabilitiesAvailabilityFormatLink `object`: GoWatchItShowAvailabilitiesAvailabilityFormatLink
  * logos [GoWatchItShowAvailabilitiesAvailabilityFormatLinkLogos](#gowatchitshowavailabilitiesavailabilityformatlinklogos)
  * type `string`
  * url `string`

### GoWatchItShowAvailabilitiesAvailabilityFormatLinkLogos
* GoWatchItShowAvailabilitiesAvailabilityFormatLinkLogos `object`: GoWatchItShowAvailabilitiesAvailabilityFormatLinkLogos
  * dark [Object](#object)
  * light [Object](#object)

### GoWatchItShowAvailabilitiesAvailabilityProvider_Format_Logos
* GoWatchItShowAvailabilitiesAvailabilityProvider_Format_Logos `object`: GoWatchItShowAvailabilitiesAvailabilityProvider_Format_Logos
  * dark `string`
  * light `string`

### GoWatchItShowAvailabilitiesResponse
* GoWatchItShowAvailabilitiesResponse `object`: GoWatchItShowAvailabilitiesResponse
  * GoWatchItId `integer`
  * availabilities `array`
    * items [GoWatchItShowAvailabilitiesAvailability](#gowatchitshowavailabilitiesavailability)
  * available `boolean`

### ImageBatchResponse
* ImageBatchResponse `object`: ImageBatchResponse
  * Expires `string`: Image URLs are hashed and expire. ISO 8601 Format: yyyy-mm-dd hh:mm:ss.ffffff0Z 
  * FilePath `string`: Requested FilePath of requested image.
  * Url `string`: URL to image request.

### ImageRedirectResponse
* ImageRedirectResponse `object`: ImageRedirectResponse
  * Expires `string`: Image URLs are hashed and expire. ISO 8601 Format: yyyy-mm-dd hh:mm:ss.ffffff0Z 
  * Url `string`: URL to image request.

### ImageTypeResponse
* ImageTypeResponse `object`: ImageTypeResponse
  * Id `integer`: Unique ID for the ImageType.
  * Type `string`: Name of the Type of the ImageType.

### LanguageResponse
* LanguageResponse `object`: LanguageResponse
  * Id `integer`: Unique ID of a Language.
  * IsoCode `string`: ISO code for this Language.
  * Name `string`: Name of the Language.

### List<AnalyticsCountryResponse>
* List<AnalyticsCountryResponse> `array`
  * items [AnalyticsCountryResponse](#analyticscountryresponse)

### List<ChartItem>
* List<ChartItem> `array`
  * items [ChartItem](#chartitem)

### List<CityResponse>
* List<CityResponse> `array`
  * items [CityResponse](#cityresponse)

### List<CompanyResponse>
* List<CompanyResponse> `array`
  * items [CompanyResponse](#companyresponse)

### List<CountryResponse>
* List<CountryResponse> `array`
  * items [CountryResponse](#countryresponse)

### List<EngagementActionsResponse>
* List<EngagementActionsResponse> `array`
  * items [EngagementActionsResponse](#engagementactionsresponse)

### List<EngagementTimesResponse>
* List<EngagementTimesResponse> `array`
  * items [EngagementTimesResponse](#engagementtimesresponse)

### List<EpisodeChangeHistoryResponse>
* List<EpisodeChangeHistoryResponse> `array`
  * items [EpisodeChangeHistoryResponse](#episodechangehistoryresponse)

### List<EpisodeChangeHistoryWithEntityResponse>
* List<EpisodeChangeHistoryWithEntityResponse> `array`
  * items [EpisodeChangeHistoryWithEntityResponse](#episodechangehistorywithentityresponse)

### List<ImageBatchResponse>
* List<ImageBatchResponse> `array`
  * items [ImageBatchResponse](#imagebatchresponse)

### List<ImageTypeResponse>
* List<ImageTypeResponse> `array`
  * items [ImageTypeResponse](#imagetyperesponse)

### List<LanguageResponse>
* List<LanguageResponse> `array`
  * items [LanguageResponse](#languageresponse)

### List<MostActiveResponse>
* List<MostActiveResponse> `array`
  * items [MostActiveResponse](#mostactiveresponse)

### List<MovieAlternateIdTypeResponse>
* List<MovieAlternateIdTypeResponse> `array`
  * items [MovieAlternateIdTypeResponse](#moviealternateidtyperesponse)

### List<MovieCertificationResponse>
* List<MovieCertificationResponse> `array`
  * items [MovieCertificationResponse](#moviecertificationresponse)

### List<MovieChangeHistoryResponse>
* List<MovieChangeHistoryResponse> `array`
  * items [MovieChangeHistoryResponse](#moviechangehistoryresponse)

### List<MovieChangeHistoryWithEntityResponse>
* List<MovieChangeHistoryWithEntityResponse> `array`
  * items [MovieChangeHistoryWithEntityResponse](#moviechangehistorywithentityresponse)

### List<MovieExternalIdMap>
* List<MovieExternalIdMap> `array`
  * items [MovieExternalIdMap](#movieexternalidmap)

### List<MovieGenreResponse>
* List<MovieGenreResponse> `array`
  * items [MovieGenreResponse](#moviegenreresponse)

### List<MovieReleaseTypeResponse>
* List<MovieReleaseTypeResponse> `array`
  * items [MovieReleaseTypeResponse](#moviereleasetyperesponse)

### List<MovieResponse>
* List<MovieResponse> `array`
  * items [MovieResponse](#movieresponse)

### List<MovieTicketsCultureResponse>
* List<MovieTicketsCultureResponse> `array`
  * items [MovieTicketsCultureResponse](#movieticketscultureresponse)

### List<MovieTicketsMovieComingSoonResponse>
* List<MovieTicketsMovieComingSoonResponse> `array`
  * items [MovieTicketsMovieComingSoonResponse](#movieticketsmoviecomingsoonresponse)

### List<MovieTicketsMovieNowPlayingResponse>
* List<MovieTicketsMovieNowPlayingResponse> `array`
  * items [MovieTicketsMovieNowPlayingResponse](#movieticketsmovienowplayingresponse)

### List<MovieTicketsTheaterResponse>
* List<MovieTicketsTheaterResponse> `array`
  * items [MovieTicketsTheaterResponse](#movieticketstheaterresponse)

### List<PersonChangeHistoryResponse>
* List<PersonChangeHistoryResponse> `array`
  * items [PersonChangeHistoryResponse](#personchangehistoryresponse)

### List<PersonChangeHistoryWithEntityResponse>
* List<PersonChangeHistoryWithEntityResponse> `array`
  * items [PersonChangeHistoryWithEntityResponse](#personchangehistorywithentityresponse)

### List<PlatformHardwareResponse>
* List<PlatformHardwareResponse> `array`
  * items [PlatformHardwareResponse](#platformhardwareresponse)

### List<PlatformOSResponse>
* List<PlatformOSResponse> `array`
  * items [PlatformOSResponse](#platformosresponse)

### List<RecentVisitorsResponse>
* List<RecentVisitorsResponse> `array`
  * items [RecentVisitorsResponse](#recentvisitorsresponse)

### List<SeasonChangeHistoryResponse>
* List<SeasonChangeHistoryResponse> `array`
  * items [SeasonChangeHistoryResponse](#seasonchangehistoryresponse)

### List<SeasonChangeHistoryWithEntityResponse>
* List<SeasonChangeHistoryWithEntityResponse> `array`
  * items [SeasonChangeHistoryWithEntityResponse](#seasonchangehistorywithentityresponse)

### List<ShowAlternateIdTypeResponse>
* List<ShowAlternateIdTypeResponse> `array`
  * items [ShowAlternateIdTypeResponse](#showalternateidtyperesponse)

### List<ShowCertificationResponse>
* List<ShowCertificationResponse> `array`
  * items [ShowCertificationResponse](#showcertificationresponse)

### List<ShowChangeHistoryResponse>
* List<ShowChangeHistoryResponse> `array`
  * items [ShowChangeHistoryResponse](#showchangehistoryresponse)

### List<ShowChangeHistoryWithEntityResponse>
* List<ShowChangeHistoryWithEntityResponse> `array`
  * items [ShowChangeHistoryWithEntityResponse](#showchangehistorywithentityresponse)

### List<ShowExternalIdMap>
* List<ShowExternalIdMap> `array`
  * items [ShowExternalIdMap](#showexternalidmap)

### List<ShowGenreResponse>
* List<ShowGenreResponse> `array`
  * items [ShowGenreResponse](#showgenreresponse)

### List<ShowReleaseTypeResponse>
* List<ShowReleaseTypeResponse> `array`
  * items [ShowReleaseTypeResponse](#showreleasetyperesponse)

### List<TagResponse>
* List<TagResponse> `array`
  * items [TagResponse](#tagresponse)

### List<TitleReportResponse>
* List<TitleReportResponse> `array`
  * items [TitleReportResponse](#titlereportresponse)

### List<TvMediaCountryResponse>
* List<TvMediaCountryResponse> `array`
  * items [TvMediaCountryResponse](#tvmediacountryresponse)

### List<TvMediaGenreResponse>
* List<TvMediaGenreResponse> `array`
  * items [TvMediaGenreResponse](#tvmediagenreresponse)

### List<TvMediaGridResponse>
* List<TvMediaGridResponse> `array`
  * items [TvMediaGridResponse](#tvmediagridresponse)

### List<TvMediaLeagueResponse>
* List<TvMediaLeagueResponse> `array`
  * items [TvMediaLeagueResponse](#tvmedialeagueresponse)

### List<TvMediaLineupResponse>
* List<TvMediaLineupResponse> `array`
  * items [TvMediaLineupResponse](#tvmedialineupresponse)

### List<TvMediaListingResponse>
* List<TvMediaListingResponse> `array`
  * items [TvMediaListingResponse](#tvmedialistingresponse)

### List<TvMediaRegionResponse>
* List<TvMediaRegionResponse> `array`
  * items [TvMediaRegionResponse](#tvmediaregionresponse)

### List<TvMediaServiceAreaResponse>
* List<TvMediaServiceAreaResponse> `array`
  * items [TvMediaServiceAreaResponse](#tvmediaservicearearesponse)

### List<TvMediaShortListingResponse>
* List<TvMediaShortListingResponse> `array`
  * items [TvMediaShortListingResponse](#tvmediashortlistingresponse)

### List<TvMediaTeamResponse>
* List<TvMediaTeamResponse> `array`
  * items [TvMediaTeamResponse](#tvmediateamresponse)

### List<VideoLogResponse>
* List<VideoLogResponse> `array`
  * items [VideoLogResponse](#videologresponse)

### List<VideoTypeResponse>
* List<VideoTypeResponse> `array`
  * items [VideoTypeResponse](#videotyperesponse)

### List<ViewersResponse>
* List<ViewersResponse> `array`
  * items [ViewersResponse](#viewersresponse)

### List<ViewsResponse>
* List<ViewsResponse> `array`
  * items [ViewsResponse](#viewsresponse)

### List<WebBrowsersResponse>
* List<WebBrowsersResponse> `array`
  * items [WebBrowsersResponse](#webbrowsersresponse)

### MatchToEntertainmentMovie
* MatchToEntertainmentMovie `object`: MatchToEntertainmentMovie
  * AlternateTitles `array`: Alternate Titles of movie to be matched.
    * items `string`
  * Cast `array`: Cast members of movie to be matched.
    * items `string`
  * Directors `array`: Directors of movie to be matched.
    * items `string`
  * StringDistance `integer`: For fuzzy title match, default is 4, set to 0 for no fuzzy match.
  * Title `string`: Title of movie to be matched.
  * Year `integer`: Release Year of movie to be matched.

### MatchToEntertainmentMovieResponse
* MatchToEntertainmentMovieResponse `object`: MatchToEntertainmentMovieResponse
  * Description `string`: Description of match operation result.
  * MovieMatches `array`: List of matched movies.
    * items [DiscoverMovie](#discovermovie)
  * Score `integer`: Score of the match to Entertainment.
  * Success `boolean`: Status of match operation.

### MatchToEntertainmentShow
* MatchToEntertainmentShow `object`: MatchToEntertainmentShow
  * AlternateTitles `array`: Alternate Titles of Show to be matched.
    * items `string`
  * Cast `array`: Cast members of Show to be matched.
    * items `string`
  * Directors `array`: Directors of Show to be matched.
    * items `string`
  * StringDistance `integer`: For fuzzy title match, default is 4, set to 0 for no fuzzy match.
  * Title `string`: Title of Show to be matched.
  * Year `integer`: Release Year of Show to be matched.

### MatchToEntertainmentShowResponse
* MatchToEntertainmentShowResponse `object`: MatchToEntertainmentShowResponse
  * Description `string`: Description of match operation result.
  * Score `integer`: Score of the match to Entertainment.
  * ShowMatches `array`: List of matched Shows.
    * items [DiscoverShow](#discovershow)
  * Success `boolean`: Status of match operation.

### MetacriticMovieResponse
* MetacriticMovieResponse `object`: MetacriticMovieResponse
  * response [MetacriticMovieResponseObj](#metacriticmovieresponseobj)

### MetacriticMovieResponseObj
* MetacriticMovieResponseObj `object`: MetacriticMovieResponseObj
  * Product [MetacriticMovieResponseProduct](#metacriticmovieresponseproduct)

### MetacriticMovieResponseProduct
* MetacriticMovieResponseProduct `object`: MetacriticMovieResponseProduct
  * Metascore [MetacriticMovieResponseProductMetascore](#metacriticmovieresponseproductmetascore)
  * ReleaseDate `string`
  * Reviews [MetacriticMovieResponseProductReviews](#metacriticmovieresponseproductreviews)
  * Title `string`
  * Url `string`
  * Userscore [MetacriticMovieResponseProductUserscore](#metacriticmovieresponseproductuserscore)
  * Year `integer`

### MetacriticMovieResponseProductMetascore
* MetacriticMovieResponseProductMetascore `object`: MetacriticMovieResponseProductMetascore
  * NegativeCount `integer`
  * NeutralCount `integer`
  * PositiveCount `integer`
  * ReviewCount `integer`
  * Score `integer`

### MetacriticMovieResponseProductReviews
* MetacriticMovieResponseProductReviews `object`: MetacriticMovieResponseProductReviews
  * Review `array`
    * items [MetacriticMovieResponseProductReviewsReview](#metacriticmovieresponseproductreviewsreview)

### MetacriticMovieResponseProductReviewsReview
* MetacriticMovieResponseProductReviewsReview `object`: MetacriticMovieResponseProductReviewsReview
  * Critic [MetacriticMovieResponseProductReviewsReviewCritic](#metacriticmovieresponseproductreviewsreviewcritic)
  * Date `string`
  * Publication [MetacriticMovieResponseProductReviewsReviewPublication](#metacriticmovieresponseproductreviewsreviewpublication)
  * Quote `string`
  * Score `integer`
  * Url `string`

### MetacriticMovieResponseProductReviewsReviewCritic
* MetacriticMovieResponseProductReviewsReviewCritic `object`: MetacriticMovieResponseProductReviewsReviewCritic
  * Name `string`

### MetacriticMovieResponseProductReviewsReviewPublication
* MetacriticMovieResponseProductReviewsReviewPublication `object`: MetacriticMovieResponseProductReviewsReviewPublication
  * Name `string`

### MetacriticMovieResponseProductUserscore
* MetacriticMovieResponseProductUserscore `object`: MetacriticMovieResponseProductUserscore
  * NegativeCount `integer`
  * NeutralCount `integer`
  * PositiveCount `integer`
  * RatingCount `integer`
  * Score `number`

### MetacriticTvResponse
* MetacriticTvResponse `object`: MetacriticTvResponse
  * response [MetacriticTvResponseObj](#metacritictvresponseobj)

### MetacriticTvResponseObj
* MetacriticTvResponseObj `object`: MetacriticTvResponseObj
  * Product [MetacriticTvResponseProduct](#metacritictvresponseproduct)

### MetacriticTvResponseProduct
* MetacriticTvResponseProduct `object`: MetacriticTvResponseProduct
  * Metascore [MetacriticTvResponseProductMetascore](#metacritictvresponseproductmetascore)
  * Reviews [MetacriticTvResponseProductReviews](#metacritictvresponseproductreviews)
  * StartDate `string`
  * Title `string`
  * Url `string`
  * Userscore [MetacriticTvResponseProductUserscore](#metacritictvresponseproductuserscore)

### MetacriticTvResponseProductMetascore
* MetacriticTvResponseProductMetascore `object`: MetacriticTvResponseProductMetascore
  * NegativeCount `integer`
  * NeutralCount `integer`
  * PositiveCount `integer`
  * ReviewCount `integer`
  * Score `integer`

### MetacriticTvResponseProductReviews
* MetacriticTvResponseProductReviews `object`: MetacriticTvResponseProductReviews
  * Review `array`
    * items [MetacriticTvResponseProductReviewsReview](#metacritictvresponseproductreviewsreview)

### MetacriticTvResponseProductReviewsReview
* MetacriticTvResponseProductReviewsReview `object`: MetacriticTvResponseProductReviewsReview
  * Critic [MetacriticTvResponseProductReviewsReviewCritic](#metacritictvresponseproductreviewsreviewcritic)
  * Date `string`
  * Publication [MetacriticTvResponseProductReviewsReviewPublication](#metacritictvresponseproductreviewsreviewpublication)
  * Quote `string`
  * Score `integer`
  * Url `string`

### MetacriticTvResponseProductReviewsReviewCritic
* MetacriticTvResponseProductReviewsReviewCritic `object`: MetacriticTvResponseProductReviewsReviewCritic
  * Name `string`

### MetacriticTvResponseProductReviewsReviewPublication
* MetacriticTvResponseProductReviewsReviewPublication `object`: MetacriticTvResponseProductReviewsReviewPublication
  * Name `string`

### MetacriticTvResponseProductUserscore
* MetacriticTvResponseProductUserscore `object`: MetacriticTvResponseProductUserscore
  * NegativeCount `integer`
  * NeutralCount `integer`
  * PositiveCount `integer`
  * RatingCount `integer`
  * Score `number`

### MostActiveResponse
* MostActiveResponse `object`: MostActiveResponse
  * UserIpAddress `string`
  * Visits `integer`

### Movie
* Movie `object`: Movie
  * AlternateTitles `array`: List of alternate titles for this Movie.
    * items [MovieAlternateTitle](#moviealternatetitle)
  * Budget `integer`: Movie budget
  * Companies `array`: List of companies (Production, Distribution, etc.) associated with Movie.
    * items [Company](#company)
  * Contributors `array`: List of contributors (Cast, Director, Writer, Production, etc.) for this Movie.
    * items [MovieContributor](#moviecontributor)
  * Created `string`: DateTime Movie record created.
  * Descriptions `array`: List of descriptions for this Movie.
    * items [MovieDescription](#moviedescription)
  * ExternalIds `array`: List of external Ids associated with Movie.
    * items [ExternalId](#externalid)
  * Genres `array`: List of genres associated with Movie.
    * items [MovieGenre](#moviegenre)
  * Id `integer`: Unique ID of the Movie.
  * Idx `string`: Index to differentiate movies with identical titles and year.
  * Images `array`: List of images associated with Movie.
    * items [MovieImage](#movieimage)
  * Modified `string`: DateTime Movie record last modified.
  * OfficialSiteUrl `string`: Movie website home page.
  * OriginalLanguage `string`: ID of Movie original language.
  * OriginalReleaseDate `string`: Original release date of Movie.
  * OriginalTitle **required** `string`
  * RedirectTo `string`: Redirect to.
  * Releases `array`: List of releases associated with Movie.
    * items [MovieRelease](#movierelease)
  * Revenue `integer`: Total revenue generated by Movie.
  * Runtime `integer`: Movie runtime in minutes.
  * Status `string`: Status of movie.
  * Tags `array`: List of tags associated with Movie.
    * items [MovieTag](#movietag)
  * Title `string`: English version of any foreign Original Title.
  * Type `string`: Type of movie. Ex: Tv Movie, Short, etc.
  * VersionId `integer`: Record Version Id
  * Videos `array`: List of videos associated with Movie.
    * items [MovieVideo](#movievideo)
  * Year **required** `integer`

### MovieAlternateIdTypeResponse
* MovieAlternateIdTypeResponse `object`: MovieAlternateIdTypeResponse
  * Id `integer`: ID of AlternateIdType.
  * Type `string`: Provider type of AlternateId.

### MovieAlternateTitle
* MovieAlternateTitle `object`: MovieAlternateTitle
  * Country `string`: Country associated with this alternate title.
  * Id `integer`: Unique ID of this MovieAlternateTitle
  * Title `string`: The alternate title.

### MovieCertificationResponse
* MovieCertificationResponse `object`: MovieCertificationResponse
  * Certification `string`: Movie certification or Rating.
  * Country [Country](#country)
  * Definition `string`: Definition of MovieCertification.
  * Id `integer`: Unique ID of MovieCertification.
  * Order `integer`: Rank of MovieCertification from youngest to oldest.

### MovieChangeHistoryResponse
* MovieChangeHistoryResponse `object`: MovieChangeHistoryResponse
  * MovieId `integer`: Unique ID of a Movie.

### MovieChangeHistoryWithEntityResponse
* MovieChangeHistoryWithEntityResponse `object`: MovieChangeHistoryWithEntityResponse
  * Entity `string`: Object belonging to Movie that has changed.
  * MovieId `integer`: Unique ID of a Movie.

### MovieContributor
* MovieContributor `object`: MovieContributor
  * Character `string`: Role played by MovieContributor.
  * Id `integer`: Unique ID of the MovieContributor object.
  * Job `string`: Job of Person associated with MovieContributor.
  * Order `integer`: Rank of MovieContributor in list for Movie (cast).
  * PersonId `integer`: ID of Person associated with MovieContributor.
  * PersonName `string`: Person's Name associated with MovieContributor.

### MovieDescription
* MovieDescription `object`: MovieDescription
  * Attribution `string`: Source of MovieDescription.
  * Description `string`: Movie Description.
  * Id `integer`: Unique ID of this MovieDescription
  * Language `string`: Language object for language of MovieDescription.

### MovieExternalIdMap
* MovieExternalIdMap `object`: MovieExternalIdMap
  * ExternalId `string`
  * MovieId `integer`

### MovieGenre
* MovieGenre `object`: MovieGenre
  * Id `integer`: Id of the Genre object.
  * Name `string`: Name of the Genre.

### MovieGenreResponse
* MovieGenreResponse `object`: MovieGenreResponse
  * Id `integer`: Id of the Genre object.
  * Name `string`: Name of the Genre.

### MovieImage
* MovieImage `object`: MovieImage
  * FilePath `string`: Filepath (location) of MovieImage.
  * Height `integer`: Height in pixels of MovieImage.
  * Id `integer`: Unique ID of this MovieImage
  * ImageId `integer`: ID of Image associated with MovieImage.
  * ImageType `string`: ImageType of MovieImage.
  * Language `string`: Language associated with MovieImage.
  * Official `boolean`: Determines if image is official.
  * Sexuality `integer`: 1-5 (Veru-Unlikely to Very-Likely) probability of sexual theme in image.
  * Tags `array`: List of Tags associated with this MovieImage
    * items [MovieTag](#movietag)
  * Violence `integer`: 1-5 (Veru-Unlikely to Very-Likely) probability of violent theme in image.
  * Width `integer`: Width in pixels of MovieImage.

### MovieRelease
* MovieRelease `object`: MovieRelease
  * Certification `string`: Certification for MovieRelease.
  * Country `string`: The Country Movie was released.
  * Date `string`: Date of this MovieRelease.
  * Id `integer`: Unique Id of this MovieRelease.
  * Type `string`: The type of this MovieRelease.

### MovieReleaseTypeResponse
* MovieReleaseTypeResponse `object`: MovieReleaseTypeResponse
  * Id `integer`: Unique ID of MovieReleaseType.
  * Type `string`: Name of MovieReleaseType.

### MovieResponse
* MovieResponse `object`: MovieResponse
  * AlternateTitles `array`: List of alternate titles for this Movie.
    * items [MovieAlternateTitle](#moviealternatetitle)
  * Budget `integer`: Movie budget
  * Companies `array`: List of companies (Production, Distribution, etc.) associated with Movie.
    * items [Company](#company)
  * Contributors `array`: List of contributors (Cast, Director, Writer, Production, etc.) for this Movie.
    * items [MovieContributor](#moviecontributor)
  * Created `string`: DateTime Movie record created.
  * Descriptions `array`: List of descriptions for this Movie.
    * items [MovieDescription](#moviedescription)
  * ExternalIds `array`: List of external Ids associated with Movie.
    * items [ExternalId](#externalid)
  * Genres `array`: List of genres associated with Movie.
    * items [MovieGenre](#moviegenre)
  * Id `integer`: Unique ID of the Movie.
  * Idx `string`: Index to differentiate movies with identical titles and year.
  * Images `array`: List of images associated with Movie.
    * items [MovieImage](#movieimage)
  * Modified `string`: DateTime Movie record last modified.
  * OfficialSiteUrl `string`: Movie website home page.
  * OriginalLanguage `string`: ID of Movie original language.
  * OriginalReleaseDate `string`: Original release date of Movie.
  * OriginalTitle **required** `string`
  * RedirectTo `string`: Redirect to.
  * Releases `array`: List of releases associated with Movie.
    * items [MovieRelease](#movierelease)
  * Revenue `integer`: Total revenue generated by Movie.
  * Runtime `integer`: Movie runtime in minutes.
  * Status `string`: Status of movie.
  * Tags `array`: List of tags associated with Movie.
    * items [MovieTag](#movietag)
  * Title `string`: English version of any foreign Original Title.
  * Type `string`: Type of movie. Ex: Tv Movie, Short, etc.
  * VersionId `integer`: Record Version Id
  * Videos `array`: List of videos associated with Movie.
    * items [MovieVideo](#movievideo)
  * Year **required** `integer`

### MovieResult
* MovieResult `object`: MovieResult
  * Document [DiscoverMovie](#discovermovie)
  * Score `number`: Score of this match in Movie search.

### MovieTag
* MovieTag `object`: MovieTag
  * Id `integer`: ID of the object.
  * Name `string`: Name of the Tag.
  * TagId `integer`: ID of the Tag.

### MovieTicketsCultureAttributes
* MovieTicketsCultureAttributes `object`: MovieTicketsCultureAttributes
  * IsoCulture `string`
  * Name `string`

### MovieTicketsCultureResponse
* MovieTicketsCultureResponse `object`: MovieTicketsCultureResponse
  * attributes [MovieTicketsCultureAttributes](#movieticketscultureattributes)
  * id `string`
  * type `string`

### MovieTicketsMovie
* MovieTicketsMovie `object`: MovieTicketsMovie
  * attributes [MovieTicketsMovieObjAttributes](#movieticketsmovieobjattributes)
  * id `string`
  * type `string`

### MovieTicketsMovieComingSoonAttributes
* MovieTicketsMovieComingSoonAttributes `object`: MovieTicketsMovieComingSoonAttributes
  * IsChild `boolean`
  * IsNew `boolean`
  * Name `string`
  * Popularity `integer`
  * Rating `string`
  * Releases `array`
    * items [MovieTicketsMovieComingSoonAttributesRelease](#movieticketsmoviecomingsoonattributesrelease)
  * Revision [Object](#object)
  * RuntimeInMinutes `integer`
  * Tags `array`
    * items [Object](#object)

### MovieTicketsMovieComingSoonAttributesRelease
* MovieTicketsMovieComingSoonAttributesRelease `object`: MovieTicketsMovieComingSoonAttributesRelease
  * Date `string`
  * Name `string`

### MovieTicketsMovieComingSoonResponse
* MovieTicketsMovieComingSoonResponse `object`: MovieTicketsMovieComingSoonResponse
  * EntertainmentMovieId `integer`
  * attributes [MovieTicketsMovieComingSoonAttributes](#movieticketsmoviecomingsoonattributes)
  * id `string`
  * type `string`

### MovieTicketsMovieNowPlayingObjAttributes
* MovieTicketsMovieNowPlayingObjAttributes `object`: MovieTicketsMovieNowPlayingObjAttributes
  * IsChild `boolean`
  * IsNew `boolean`
  * Name `string`
  * Popularity `integer`
  * Rating `string`
  * Releases `array`
    * items [MovieTicketsMovieNowPlayingObjAttributesRelease](#movieticketsmovienowplayingobjattributesrelease)
  * Revision [Object](#object)
  * RuntimeInMinutes `integer`
  * Tags `array`
    * items [Object](#object)

### MovieTicketsMovieNowPlayingObjAttributesRelease
* MovieTicketsMovieNowPlayingObjAttributesRelease `object`: MovieTicketsMovieNowPlayingObjAttributesRelease
  * Date `string`
  * Name `string`

### MovieTicketsMovieNowPlayingResponse
* MovieTicketsMovieNowPlayingResponse `object`: MovieTicketsMovieNowPlayingResponse
  * EntertainmentMovieId `integer`
  * attributes [MovieTicketsMovieNowPlayingObjAttributes](#movieticketsmovienowplayingobjattributes)
  * id `string`
  * type `string`

### MovieTicketsMovieObjAttributes
* MovieTicketsMovieObjAttributes `object`: MovieTicketsMovieObjAttributes
  * IsChild `boolean`
  * IsNew `boolean`
  * Name `string`
  * Popularity `integer`
  * Rating `string`
  * Releases `array`
    * items [MovieTicketsMovieObjAttributesRelease](#movieticketsmovieobjattributesrelease)
  * Revision [Object](#object)
  * RuntimeInMinutes `integer`
  * Tags `array`
    * items [Object](#object)

### MovieTicketsMovieObjAttributesRelease
* MovieTicketsMovieObjAttributesRelease `object`: MovieTicketsMovieObjAttributesRelease
  * Date `string`
  * Name `string`

### MovieTicketsPerformance
* MovieTicketsPerformance `object`: MovieTicketsPerformance
  * attributes [MovieTicketsPerformanceAttributes](#movieticketsperformanceattributes)
  * id `string`
  * type `string`

### MovieTicketsPerformanceAttributes
* MovieTicketsPerformanceAttributes `object`: MovieTicketsPerformanceAttributes
  * CutOffDateTime `string`
  * HasBestAvailable `boolean`
  * HasSelectASeat `boolean`
  * PerformanceDateTime `string`
  * Revision [Object](#object)
  * ScheduleDate `string`

### MovieTicketsPerformanceGroup
* MovieTicketsPerformanceGroup `object`: MovieTicketsPerformanceGroup
  * EntertainmentMovieId `integer`
  * Performances `array`
    * items [MovieTicketsPerformance](#movieticketsperformance)
  * Tags `array`
    * items `string`
  * TheaterId `integer`

### MovieTicketsPerformancesIncluded
* MovieTicketsPerformancesIncluded `object`: MovieTicketsPerformancesIncluded
  * Movies `array`
    * items [MovieTicketsMovie](#movieticketsmovie)
  * Theaters `array`
    * items [MovieTicketsTheater](#movieticketstheater)

### MovieTicketsPerformancesResponse
* MovieTicketsPerformancesResponse `object`: MovieTicketsPerformancesResponse
  * Included [MovieTicketsPerformancesIncluded](#movieticketsperformancesincluded)
  * PerformanceGroups `array`
    * items [MovieTicketsPerformanceGroup](#movieticketsperformancegroup)

### MovieTicketsTheater
* MovieTicketsTheater `object`: MovieTicketsTheater
  * TheaterFeatures `array`
    * items `string`
  * attributes [MovieTicketsTheaterAttributes](#movieticketstheaterattributes)
  * id `string`
  * type `string`

### MovieTicketsTheaterAttributes
* MovieTicketsTheaterAttributes `object`: MovieTicketsTheaterAttributes
  * Address [MovieTicketsTheaterAttributesAddress](#movieticketstheaterattributesaddress)
  * GeoCoordinates [MovieTicketsTheaterAttributesGeocoordinates](#movieticketstheaterattributesgeocoordinates)
  * IsTicketing `boolean`
  * Name `string`
  * Revision [Object](#object)
  * Telephone `string`

### MovieTicketsTheaterAttributesAddress
* MovieTicketsTheaterAttributesAddress `object`: MovieTicketsTheaterAttributesAddress
  * AddressCountry `string`
  * AddressLocality `string`
  * AddressRegion `string`
  * PostOfficeBoxNumber [Object](#object)
  * PostalCode `string`
  * StreetAddress `string`

### MovieTicketsTheaterAttributesGeocoordinates
* MovieTicketsTheaterAttributesGeocoordinates `object`: MovieTicketsTheaterAttributesGeocoordinates
  * Distance `number`
  * DistanceUnit `string`
  * Latitude `number`
  * Longitude `number`

### MovieTicketsTheaterResponse
* MovieTicketsTheaterResponse `object`: MovieTicketsTheaterResponse
  * TheaterFeatures `array`
    * items `string`
  * attributes [MovieTicketsTheaterAttributes](#movieticketstheaterattributes)
  * id `string`
  * type `string`

### MovieVideo
* MovieVideo `object`: MovieVideo
  * AllowAdvertising `boolean`: Flag denoting if pre-roll video ads are allowed in front of of content.
  * Certification `boolean`: Certification for MovieVideo.
  * Clean `boolean`: True if Certification, Theatrical, and HomeVideo are False.
  * Company `string`: Company associated with MovieVideo.
  * Duration `integer`: Runtime of MovieVideo.
  * Encoded `string`: Datetime MovieVideo was encoded.
  * Encodes `array`: List of Encodes (bitrate and type) for MovieVideo.
    * items [MovieVideoEncode](#movievideoencode)
  * ExpirationDate `string`: Date MovieVideo expires.
  * HomeVideo `boolean`: Flag for promoting Home Video.
  * Id `integer`: Unique ID of MovieVideo.
  * Language `string`: Language associated with MovieVideo.
  * LanguageSubtitled `string`: Subtitle language associated with MovieVideo.
  * Mature `boolean`: Flag for designating video content not suitable for children. Age gate required.
  * ScreenCaptures `array`: List of screen captures from MovieVideo.
    * items [MovieVideoScreenCapture](#movievideoscreencapture)
  * SourceVideoHeight `integer`: Height in pixels of MovieVideo.
  * SourceVideoWidth `integer`: Width in pixels of MovieVideo.
  * StartDate `string`: First date of MovieVideo availability.
  * TargetCountries `array`: List of countries targeted by MovieVideo.
    * items [TargetCountry](#targetcountry)
  * Theatrical `boolean`: Flag for promoting Theatrical release.
  * Title `string`: Title of MovieVideo, not Movie.
  * Type `string`: VideoType for the MovieVideo.

### MovieVideoEncode
* MovieVideoEncode `object`: MovieVideoEncode
  * BitRate `integer`: BitRate of MovieVideoEncode.
  * EncodeType `string`: Datetime when the MovieVideoEncode was encoded.
  * Id `integer`: Unique ID of the video encode

### MovieVideoScreenCapture
* MovieVideoScreenCapture `object`: MovieVideoScreenCapture
  * Aspect `string`: Aspect ratio of MovieVideoScreenCapture.
  * FilePath `string`: Filepath (location) of MovieVideoScreenCapture.
  * Height `integer`: Height in pixels of MovieVideoScreenCapture.
  * Id `integer`: Unique ID of the screen capture
  * Width `integer`: Width in pixels of MovieVideoScreenCapture.

### Object
* Object `object`: Object

### Person
* Person `object`: Person
  * AlternateNames `array`: List of PersonName associated with this Person.
    * items `string`
  * BirthDate [FlexDate](#flexdate)
  * BirthName `string`: Name of Person at birth.
  * DeathDate [FlexDate](#flexdate)
  * Descriptions `array`: List of descriptions for this Movie.
    * items [PersonDescription](#persondescription)
  * ExternalIds `array`: List of alternate Ids associated with this person.
    * items [PersonAlternateId](#personalternateid)
  * Gender `string`: Gender of Person.
  * Id `integer`: Unique ID of a Person.
  * Images `array`: List of Images associated with this Person.
    * items [PersonImage](#personimage)
  * Modified `string`: Datetime Person was last modified.
  * Name `string`: Full Name of this Person.
  * Tags `array`: List of tags associated with Movie.
    * items [PersonTag](#persontag)
  * VersionId `integer`: Record Version Id

### PersonAlternateId
* PersonAlternateId `object`: PersonAlternateId
  * AlternateId `string`
  * Modified `string`
  * Type `string`

### PersonChangeHistoryResponse
* PersonChangeHistoryResponse `object`: PersonChangeHistoryResponse
  * PersonId `integer`: ID of the Person.

### PersonChangeHistoryWithEntityResponse
* PersonChangeHistoryWithEntityResponse `object`: PersonChangeHistoryWithEntityResponse
  * Entity `string`: Object belonging to Person that has changed.
  * PersonId `integer`: ID of the Person.

### PersonDescription
* PersonDescription `object`: PersonDescription
  * Attribution `string`: Source of PersonDescription.
  * Description `string`: Person Description.
  * Id `integer`: Unique ID of this PersonDescription
  * Language `string`: Language object for language of PersonDescription.

### PersonImage
* PersonImage `object`: PersonImage
  * Attribution `string`: Source credit for PersonImage.
  * EpisodeId `integer`: Entertainment Episode ID of the episode this image is from.
  * FaceDetails [FaceDetails](#facedetails)
  * FilePath `string`: Filepath (location) of PersonImage.
  * Height `integer`: Height in pixels of PersonImage.
  * Id `integer`: Unique ID of this PersonImage
  * ImageType `string`: ImageType of PersonImage.
  * MovieId `integer`: Entertainment Movie ID of the movie this image is from.
  * Official `boolean`: Determines if image is official.
  * SeasonId `integer`: Entertainment Season ID of the season this image is from.
  * Sexuality `integer`: 1-5 (Very-Unlikely to Very-Likely) probability of sexual theme in image.
  * ShowId `integer`: Entertainment Show ID of the show this image is from.
  * Tags `array`: List of Tags associated with this PersonImage
    * items [PersonTag](#persontag)
  * Violence `integer`: 1-5 (Very-Unlikely to Very-Likely) probability of violent theme in image.
  * Width `integer`: Width in pixels of PersonImage.

### PersonRankedResponse
* PersonRankedResponse `object`: PersonRankedResponse
  * FilePath `string`
  * Id `integer`
  * Name `string`

### PersonResponse
* PersonResponse `object`: PersonResponse
  * AlternateNames `array`: List of PersonName associated with this Person.
    * items `string`
  * BirthDate [FlexDate](#flexdate)
  * BirthName `string`: Name of Person at birth.
  * DeathDate [FlexDate](#flexdate)
  * Descriptions `array`: List of descriptions for this Movie.
    * items [PersonDescription](#persondescription)
  * ExternalIds `array`: List of alternate Ids associated with this person.
    * items [PersonAlternateId](#personalternateid)
  * Gender `string`: Gender of Person.
  * Id `integer`: Unique ID of a Person.
  * Images `array`: List of Images associated with this Person.
    * items [PersonImage](#personimage)
  * Modified `string`: Datetime Person was last modified.
  * Name `string`: Full Name of this Person.
  * Tags `array`: List of tags associated with Movie.
    * items [PersonTag](#persontag)
  * VersionId `integer`: Record Version Id

### PersonTag
* PersonTag `object`: PersonTag
  * Id `integer`: ID of the object.
  * Name `string`: Name of the Tag.
  * TagId `integer`: ID of the Tag.

### PlatformHardwareResponse
* PlatformHardwareResponse `object`: PlatformHardwareResponse
  * DeviceType `string`
  * Percentage `number`
  * Viewers `integer`

### PlatformOSResponse
* PlatformOSResponse `object`: PlatformOSResponse
  * OS_Name `string`
  * Percentage `number`
  * Viewers `integer`

### Program
* Program `object`: Program
  * Id `integer`: The ID of the program (show or movie)
  * Type `string`: The type of IVA program (show or movie).

### RecentVisitorsResponse
* RecentVisitorsResponse `object`: RecentVisitorsResponse
  * Collector_Tstamp `string`
  * Referrer `string`
  * User_IpAddress `string`
  * Views `integer`

### Recommendation
* Recommendation `object`: Recommendation
  * businessScore `number`: Alternate score quality of the recommendation including IVA rules.
  * explanations `array`: List of reasons for recommendation.
    * items [Explanation](#explanation)
  * groupId `string`: An enumeration of grouped recommendations.
  * program [Program](#program)
  * score `number`: Quality of the recommendation relative to other recommendations.

### SDKResponse
* SDKResponse `object`: SDKResponse
  * Url `string`

### ScreenCaptureRedirectResponse
* ScreenCaptureRedirectResponse `object`: ScreenCaptureRedirectResponse
  * Expires `string`: Image URLs are hashed and expire. ISO 8601 Format: yyyy-mm-dd hh:mm:ss.ffffff0Z 
  * Url `string`: URL to image request.

### SearchMovie
* SearchMovie `object`: SearchMovie
  * Filter `string`: Expression to filter results.
  * IncludeTotalResultCount `boolean`: Includes total results in response. This will have a performance impact.
  * OrderBy `array`: List of field names to sort results.  Default is relevance.
    * items `string`
  * SearchFields `array`: List of field names to search using 'term.'
    * items `string`
  * SearchMode `string`: Specifies whether ANY or ALL of the search terms must be matched in order to count the item as a match.
  * SelectFields `array`: List of field names to be returned in the object.
    * items `string`
  * Skip `integer`: Skip number of results. Use this for paging results.
  * Top `integer`: Limit results.  Maximum returned is 1000.
  * term `string`: Term to search for. This can be combined with all other options. Use '*' to return any match.

### SearchMovieResponse
* SearchMovieResponse `object`: SearchMovieResponse
  * Count `integer`: Number iof Movies matched in search.
  * Results `array`: List of Match Results (Movies and their Match Scores).
    * items [MovieResult](#movieresult)

### SearchShow
* SearchShow `object`: SearchShow
  * Filter `string`: Expression to filter results.
  * IncludeTotalResultCount `boolean`: Includes total results in response. This will have a performance impact.
  * OrderBy `array`: List of field names to sort results.  Default is relevance.
    * items `string`
  * SearchFields `array`: List of field names to search using 'term.'
    * items `string`
  * SearchMode `string`: Specifies whether ANY or ALL of the search terms must be matched in order to count the item as a match.
  * SelectFields `array`: List of field names to be returned in the object.
    * items `string`
  * Skip `integer`: Skip number of results. Use this for paging results.
  * Top `integer`: Limit results.  Maximum returned is 1000.
  * term `string`: Term to search for. This can be combined with all other options. Use '*' to return any match.

### SearchShowResponse
* SearchShowResponse `object`: SearchShowResponse
  * Count `integer`: Number iof Shows matched in search.
  * Results `array`: List of Match Results (Shows and their Match Scores).
    * items [ShowResult](#showresult)

### Season
* Season `object`: Season
  * AlternateTitles `array`: List of alternate titles for this Season.
    * items [SeasonAlternateTitle](#seasonalternatetitle)
  * Contributors `array`: List of contributors (Cast, Director, Writer, Production, etc.) for this Season.
    * items [SeasonContributor](#seasoncontributor)
  * Created `string`: DateTime Season record created.
  * Descriptions `array`: List of descriptions for this Season.
    * items [SeasonDescription](#seasondescription)
  * Episodes `array`: List of Episodes associated with Season.
    * items [Episode](#episode)
  * ExternalIds `array`: List of external Ids associated with Season.
    * items [ExternalId](#externalid)
  * Id `integer`: Unique ID of the Season.
  * Images `array`: List of images associated with Season.
    * items [SeasonImage](#seasonimage)
  * Modified `string`: DateTime Season record last modified.
  * Modifier `integer`: User who last modified the Season record.
  * NumberOfEpisodes `integer`: Number of Episodes associated with Season.
  * OriginalLanguage `string`: Season original language.
  * OriginalReleaseDate `string`: Original release date of Season.
  * OriginalTitle `string`: Original title of Season
  * Releases `array`: List of releases associated with Season.
    * items [SeasonRelease](#seasonrelease)
  * SeasonNumber `integer`: Number of Season within its associated Show.
  * ShowId `integer`: ID of Show Season is associated with.
  * Title `string`: English version of any foreign Original Title.
  * VersionId `integer`: Record Version Id
  * Videos `array`: List of videos associated with Season.
    * items [SeasonVideo](#seasonvideo)
  * Year `integer`: Release year of Season.

### SeasonAlternateTitle
* SeasonAlternateTitle `object`: SeasonAlternateTitle
  * Country `string`: Country associated with this alternate title.
  * Id `integer`: Unique ID of this SeasonAlternateTitle
  * Modifier `integer`: ID of last user who modified the item.
  * Title `string`: The alternate title.

### SeasonChangeHistoryResponse
* SeasonChangeHistoryResponse `object`: SeasonChangeHistoryResponse
  * SeasonId `integer`: ID of the Season.

### SeasonChangeHistoryWithEntityResponse
* SeasonChangeHistoryWithEntityResponse `object`: SeasonChangeHistoryWithEntityResponse
  * Entity `string`: Object belonging to Season that has changed.
  * SeasonId `integer`: ID of the Season.

### SeasonContributor
* SeasonContributor `object`: SeasonContributor
  * Character `string`: Role played by SeasonContributor.
  * Id `integer`: Unique ID of the SeasonContributor object.
  * Job `string`: Job of Person associated with SeasonContributor.
  * NumberOfEpisodes `integer`: Count of episodes this person contributed to.
  * PersonId `integer`: ID of Person associated with SeasonContributor.
  * PersonName `string`: Person's Name associated with SeasonContributor.

### SeasonDescription
* SeasonDescription `object`: SeasonDescription
  * Attribution `string`: Source of SeasonDescription.
  * Description `string`: Season Description.
  * Id `integer`: Unique ID of this SeasonDescription
  * Language `string`: Language object for language of SeasonDescription.
  * Modifier `integer`: ID of last user who modified the item.

### SeasonImage
* SeasonImage `object`: SeasonImage
  * FilePath `string`: Filepath (location) of SeasonImage.
  * Height `integer`: Height in pixels of SeasonImage.
  * Id `integer`: Unique ID of this SeasonImage
  * ImageId `integer`: ID of Image associated with SeasonImage.
  * ImageType `string`: ImageType of SeasonImage.
  * Language `string`: Language associated with SeasonImage.
  * Modifier `integer`: ID of last user who modified the item.
  * Official `boolean`: Determines if image is official.
  * Sexuality `integer`: 1-5 (Very-Unlikely to Very-Likely) probability of sexual theme in image.
  * Tags `array`: List of Tags associated with this SeasonImage
    * items [Tag](#tag)
  * Violence `integer`: 1-5 (Very-Unlikely to Very-Likely) probability of violent theme in image.
  * Width `integer`: Width in pixels of SeasonImage.

### SeasonRelease
* SeasonRelease `object`: SeasonRelease
  * Certification `string`: Certification for SeasonRelease.
  * Country `string`: The Country Season was released.
  * Date `string`: Date of this SeasonRelease.
  * Id `integer`: Unique Id of this SeasonRelease.
  * Modifier `integer`: ID of last user who modified the item.
  * Type `string`: The type of this SeasonRelease.

### SeasonResponse
* SeasonResponse `object`: SeasonResponse
  * AlternateTitles `array`: List of alternate titles for this Season.
    * items [SeasonAlternateTitle](#seasonalternatetitle)
  * Contributors `array`: List of contributors (Cast, Director, Writer, Production, etc.) for this Season.
    * items [SeasonContributor](#seasoncontributor)
  * Created `string`: DateTime Season record created.
  * Descriptions `array`: List of descriptions for this Season.
    * items [SeasonDescription](#seasondescription)
  * Episodes `array`: List of Episodes associated with Season.
    * items [Episode](#episode)
  * ExternalIds `array`: List of external Ids associated with Season.
    * items [ExternalId](#externalid)
  * Id `integer`: Unique ID of the Season.
  * Images `array`: List of images associated with Season.
    * items [SeasonImage](#seasonimage)
  * Modified `string`: DateTime Season record last modified.
  * Modifier `integer`: User who last modified the Season record.
  * NumberOfEpisodes `integer`: Number of Episodes associated with Season.
  * OriginalLanguage `string`: Season original language.
  * OriginalReleaseDate `string`: Original release date of Season.
  * OriginalTitle `string`: Original title of Season
  * Releases `array`: List of releases associated with Season.
    * items [SeasonRelease](#seasonrelease)
  * SeasonNumber `integer`: Number of Season within its associated Show.
  * ShowId `integer`: ID of Show Season is associated with.
  * Title `string`: English version of any foreign Original Title.
  * VersionId `integer`: Record Version Id
  * Videos `array`: List of videos associated with Season.
    * items [SeasonVideo](#seasonvideo)
  * Year `integer`: Release year of Season.

### SeasonVideo
* SeasonVideo `object`: SeasonVideo
  * AllowAdvertising `boolean`: Flag denoting if pre-roll video ads are allowed in front of content.
  * Certification `boolean`: Certification for SeasonVideo.
  * Clean `boolean`: True if Certification, Theatrical, and HomeVideo are False.
  * Company `string`: Company associated with SeasonVideo.
  * Duration `integer`: Runtime of SeasonVideo.
  * Encoded `string`: Datetime SeasonVideo was encoded.
  * Encodes `array`: List of Encodes (bitrate and type) for SeasonVideo.
    * items [SeasonVideoEncode](#seasonvideoencode)
  * ExpirationDate `string`: Date SeasonVideo expires.
  * HomeVideo `boolean`: Flag for promoting Home Video.
  * Id `integer`: Unique ID of SeasonVideo.
  * Language `string`: Language associated with SeasonVideo.
  * LanguageSubtitled `string`: Subtitle language associated with SeasonVideo.
  * Mature `boolean`: Flag for designating video content not suitable for children. Age gate required.
  * Modifier `integer`: ID of last user who modified the item.
  * ScreenCaptures `array`: List of screen captures from SeasonVideo.
    * items [SeasonVideoScreenCapture](#seasonvideoscreencapture)
  * SourceVideoHeight `integer`: Height in pixels of SeasonVideo.
  * SourceVideoWidth `integer`: Width in pixels of SeasonVideo.
  * StartDate `string`: First date of SeasonVideo availability.
  * TargetCountries `array`: List of countries targeted by SeasonVideo.
    * items [TargetCountry](#targetcountry)
  * Title `string`: Title of SeasonVideo, not Season.
  * TuneIn `boolean`: Flag for promoting Tune In.
  * Type `string`: VideoType for the SeasonVideo.

### SeasonVideoEncode
* SeasonVideoEncode `object`: SeasonVideoEncode
  * BitRate `integer`: BitRate of VideoEncode.
  * EncodeType `string`: Datetime when the VideoEncode was encoded.
  * Id `integer`: Unique ID of the video encode
  * Modifier `integer`: ID of last user who modified the item.

### SeasonVideoExtended
* SeasonVideoExtended `object`: SeasonVideoExtended
  * AllowAdvertising `boolean`: Flag denoting if pre-roll video ads are allowed in front of content.
  * Certification `boolean`: Certification for SeasonVideo.
  * Clean `boolean`: True if Certification, Theatrical, and HomeVideo are False.
  * Company `string`: Company associated with SeasonVideo.
  * Duration `integer`: Runtime of SeasonVideo.
  * Encoded `string`: Datetime SeasonVideo was encoded.
  * Encodes `array`: List of Encodes (bitrate and type) for SeasonVideo.
    * items [SeasonVideoEncode](#seasonvideoencode)
  * ExpirationDate `string`: Date SeasonVideo expires.
  * HomeVideo `boolean`: Flag for promoting Home Video.
  * Id `integer`: Unique ID of SeasonVideo.
  * Language `string`: Language associated with SeasonVideo.
  * LanguageSubtitled `string`: Subtitle language associated with SeasonVideo.
  * Mature `boolean`: Flag for designating video content not suitable for children. Age gate required.
  * Modifier `integer`: ID of last user who modified the item.
  * ScreenCaptures `array`: List of screen captures from SeasonVideo.
    * items [SeasonVideoScreenCapture](#seasonvideoscreencapture)
  * SeasonNumber `integer`
  * SourceVideoHeight `integer`: Height in pixels of SeasonVideo.
  * SourceVideoWidth `integer`: Width in pixels of SeasonVideo.
  * StartDate `string`: First date of SeasonVideo availability.
  * TargetCountries `array`: List of countries targeted by SeasonVideo.
    * items [TargetCountry](#targetcountry)
  * Title `string`: Title of SeasonVideo, not Season.
  * TuneIn `boolean`: Flag for promoting Tune In.
  * Type `string`: VideoType for the SeasonVideo.

### SeasonVideoScreenCapture
* SeasonVideoScreenCapture `object`: SeasonVideoScreenCapture
  * Aspect `string`: Aspect ratio of VideoScreenCapture.
  * FilePath `string`: Filepath (location) of VideoScreenCapture.
  * Height `integer`: Height in pixels of VideoScreenCapture.
  * Id `integer`: Unique ID of the screen capture
  * Modifier `integer`: ID of last user who modified the item.
  * Width `integer`: Width in pixels of VideoScreenCapture.

### Show
* Show `object`: Show
  * AlternateTitles `array`: List of alternate titles for this Show.
    * items [ShowAlternateTitle](#showalternatetitle)
  * Companies `array`: List of companies (Production, Distribution, etc.) associated with Show.
    * items [Company](#company)
  * Contributors `array`: List of contributors (Cast, Director, Writer, Production, etc.) for this Show.
    * items [ShowContributor](#showcontributor)
  * Created `string`: DateTime Show record created.
  * Deleted `boolean`: Flag signifies if Show record is 'Deleted'.
  * Descriptions `array`: List of descriptions for this Show.
    * items [ShowDescription](#showdescription)
  * EpisodeVideos `array`: All EpisodesVideos including season and episode number.
    * items [EpisodeVideoExtended](#episodevideoextended)
  * ExternalIds `array`: List of external Ids associated with Show.
    * items [ExternalId](#externalid)
  * Genres `array`: List of genres associated with Show.
    * items [ShowGenre](#showgenre)
  * Id `integer`: Unique ID of the Show.
  * Idx `string`: Index to differentiate shows with identical titles and year.
  * Images `array`: List of images associated with Show.
    * items [ShowImage](#showimage)
  * Modified `string`: DateTime Show record last modified.
  * Modifier `integer`: ID of last user who modified the item.
  * OfficialSiteUrl `string`: Show website home page.
  * OriginalLanguage `string`: ID of Show original language.
  * OriginalReleaseDate `string`: Original release date of Show.
  * OriginalTitle **required** `string`
  * RedirectTo `string`: Redirect to.
  * Releases `array`: List of releases associated with Show.
    * items [ShowRelease](#showrelease)
  * SeasonVideos `array`: All SeasonVideos including season and episode number.
    * items [SeasonVideoExtended](#seasonvideoextended)
  * Seasons `array`
    * items [Season](#season)
  * Status `string`: Status of the show.
  * Tags `array`: List of tags associated with Show.
    * items [Tag](#tag)
  * Title `string`: English version of any foreign Original Title.
  * Type `string`: Type of show.
  * VersionId `integer`: Record Version Id
  * Videos `array`: List of videos associated with Show.
    * items [ShowVideo](#showvideo)
  * Year **required** `integer`

### ShowAlternateIdTypeResponse
* ShowAlternateIdTypeResponse `object`: ShowAlternateIdTypeResponse
  * Id `integer`: Unique ID of a ShowAlternateIdType.
  * Type `string`: Provider type of a ShowAlternateIdType.

### ShowAlternateTitle
* ShowAlternateTitle `object`: ShowAlternateTitle
  * Country `string`: Country associated with this alternate title.
  * Id `integer`: Unique ID of this ShowAlternateTitle
  * Modifier `integer`: ID of last user who modified the item.
  * Title `string`: The alternate title.

### ShowCertificationResponse
* ShowCertificationResponse `object`: ShowCertificationResponse
  * Certification `string`: Show certification or Rating.
  * Country [DbCountry](#dbcountry)
  * CountryId `integer`: ID of Country associated with ShowCertification.
  * Definition `string`: Definition of ShowCertification.
  * Id `integer`: Unique ID of a ShowCertification.
  * Order `integer`: Rank of ShowCertification from youngest to oldest.

### ShowChangeHistoryResponse
* ShowChangeHistoryResponse `object`: ShowChangeHistoryResponse
  * ShowId `integer`: ID of the Show.

### ShowChangeHistoryWithEntityResponse
* ShowChangeHistoryWithEntityResponse `object`: ShowChangeHistoryWithEntityResponse
  * Entity `string`: Object belonging to Show that has changed.
  * ShowId `integer`: ID of the Show.

### ShowContributor
* ShowContributor `object`: ShowContributor
  * Character `string`: Role played by ShowContributor.
  * Job `string`: Job of Person associated with ShowContributor.
  * NumberOfEpisodes `integer`: Number of episodes this actors contributed.
  * PersonId `integer`: ID of Person associated with ShowContributor.
  * PersonName `string`: Person's Name associated with ShowContributor.

### ShowDescription
* ShowDescription `object`: ShowDescription
  * Attribution `string`: Source of ShowDescription.
  * Description `string`: Show Description.
  * Id `integer`: Unique ID of this ShowDescription
  * Language `string`: Language object for language of ShowDescription.
  * Modifier `integer`: ID of last user who modified the item.

### ShowExternalIdMap
* ShowExternalIdMap `object`: ShowExternalIdMap
  * ExternalId `string`
  * ShowId `integer`

### ShowGenre
* ShowGenre `object`: ShowGenre
  * Id `integer`: Id of the Genre object.
  * Name `string`: Name of the Genre.

### ShowGenreResponse
* ShowGenreResponse `object`: ShowGenreResponse
  * Id `integer`: Id of the Genre object.
  * Name `string`: Name of the Genre.

### ShowImage
* ShowImage `object`: ShowImage
  * FilePath `string`: Filepath (location) of ShowImage.
  * Height `integer`: Height in pixels of ShowImage.
  * Id `integer`: Unique ID of this ShowImage
  * ImageId `integer`: ID of Image associated with ShowImage.
  * ImageType `string`: ImageType of ShowImage.
  * Language `string`: Language associated with ShowImage.
  * Official `boolean`: Determines if image is official.
  * Sexuality `integer`: 1-5 (Very-Unlikely to Very-Likely) probability of sexual theme in image.
  * Tags `array`: List of Tags associated with this ShowImage
    * items [Tag](#tag)
  * Violence `integer`: 1-5 (Very-Unlikely to Very-Likely) probability of violent theme in image.
  * Width `integer`: Width in pixels of ShowImage.

### ShowRelease
* ShowRelease `object`: ShowRelease
  * Certification `string`: Certification for ShowRelease.
  * Country `string`: The Country Show was released.
  * Date `string`: Date of this ShowRelease.
  * Id `integer`: Unique Id of this ShowRelease.
  * Modifier `integer`: ID of last user who modified the item.
  * Type `string`: The type of this ShowRelease.

### ShowReleaseTypeResponse
* ShowReleaseTypeResponse `object`: ShowReleaseTypeResponse
  * Id `integer`: Unique ID of ShowReleaseType.
  * Type `string`: Name of ShowReleaseType.

### ShowResponse
* ShowResponse `object`: ShowResponse
  * AlternateTitles `array`: List of alternate titles for this Show.
    * items [ShowAlternateTitle](#showalternatetitle)
  * Companies `array`: List of companies (Production, Distribution, etc.) associated with Show.
    * items [Company](#company)
  * Contributors `array`: List of contributors (Cast, Director, Writer, Production, etc.) for this Show.
    * items [ShowContributor](#showcontributor)
  * Created `string`: DateTime Show record created.
  * Deleted `boolean`: Flag signifies if Show record is 'Deleted'.
  * Descriptions `array`: List of descriptions for this Show.
    * items [ShowDescription](#showdescription)
  * EpisodeVideos `array`: All EpisodesVideos including season and episode number.
    * items [EpisodeVideoExtended](#episodevideoextended)
  * ExternalIds `array`: List of external Ids associated with Show.
    * items [ExternalId](#externalid)
  * Genres `array`: List of genres associated with Show.
    * items [ShowGenre](#showgenre)
  * Id `integer`: Unique ID of the Show.
  * Idx `string`: Index to differentiate shows with identical titles and year.
  * Images `array`: List of images associated with Show.
    * items [ShowImage](#showimage)
  * Modified `string`: DateTime Show record last modified.
  * Modifier `integer`: ID of last user who modified the item.
  * OfficialSiteUrl `string`: Show website home page.
  * OriginalLanguage `string`: ID of Show original language.
  * OriginalReleaseDate `string`: Original release date of Show.
  * OriginalTitle **required** `string`
  * RedirectTo `string`: Redirect to.
  * Releases `array`: List of releases associated with Show.
    * items [ShowRelease](#showrelease)
  * SeasonVideos `array`: All SeasonVideos including season and episode number.
    * items [SeasonVideoExtended](#seasonvideoextended)
  * Seasons `array`
    * items [Season](#season)
  * Status `string`: Status of the show.
  * Tags `array`: List of tags associated with Show.
    * items [Tag](#tag)
  * Title `string`: English version of any foreign Original Title.
  * Type `string`: Type of show.
  * VersionId `integer`: Record Version Id
  * Videos `array`: List of videos associated with Show.
    * items [ShowVideo](#showvideo)
  * Year **required** `integer`

### ShowResult
* ShowResult `object`: ShowResult
  * Document [DiscoverShow](#discovershow)
  * Score `number`: Score of this match in Show search.

### ShowVideo
* ShowVideo `object`: ShowVideo
  * AllowAdvertising `boolean`: Flag denoting if pre-roll video ads are allowed in front of of content.
  * Certification `boolean`: Certification for ShowVideo.
  * Clean `boolean`: True if Certification, Theatrical, and HomeVideo are False.
  * Company `string`: Company associated with ShowVideo.
  * Duration `integer`: Runtime of ShowVideo.
  * Encoded `string`: Datetime ShowVideo was encoded.
  * Encodes `array`: List of Encodes (bitrate and type) for ShowVideo.
    * items [ShowVideoEncode](#showvideoencode)
  * ExpirationDate `string`: Date ShowVideo expires.
  * HomeVideo `boolean`: Flag for promoting Home Video.
  * Id `integer`: Unique ID of ShowVideo.
  * Language `string`: Language associated with MovieVideo.
  * LanguageSubtitled `string`: Subtitle language associated with ShowVideo.
  * Mature `boolean`: Flag for designating video content not suitable for children. Age gate required.
  * Modifier `integer`: ID of last user who modified the item.
  * ScreenCaptures `array`: List of screen captures from ShowVideo.
    * items [ShowVideoScreenCapture](#showvideoscreencapture)
  * SourceVideoHeight `integer`: Height in pixels of ShowVideo.
  * SourceVideoWidth `integer`: Width in pixels of ShowVideo.
  * StartDate `string`: First date of ShowVideo availability.
  * TargetCountries `array`: List of countries targeted by ShowVideo.
    * items [TargetCountry](#targetcountry)
  * Title `string`: Title of ShowVideo, not Show.
  * TuneIn `boolean`: Flag for promoting tune in.
  * Type `string`: VideoType for the ShowVideo.

### ShowVideoEncode
* ShowVideoEncode `object`: ShowVideoEncode
  * BitRate `integer`: BitRate of ShowVideoEncode.
  * EncodeType `string`: Datetime when the ShowVideoEncode was encoded.
  * Id `integer`: Unique ID of the video encode
  * Modifier `integer`: ID of last user who modified the item.

### ShowVideoScreenCapture
* ShowVideoScreenCapture `object`: ShowVideoScreenCapture
  * Aspect `string`: Aspect ratio of ShowVideoScreenCapture.
  * FilePath `string`: Filepath (location) of ShowVideoScreenCapture.
  * Height `integer`: Height in pixels of ShowVideoScreenCapture.
  * Id `integer`: Unique ID of the screen capture
  * Modifier `integer`: ID of last user who modified the item.
  * Width `integer`: Width in pixels of ShowVideoScreenCapture.

### Station
* Station `object`: Station
  * DTV_TSID `integer`: In the case of broadcast stations, denotes the FCC/Industry Canada assigned TSID included within the transmission stream.
  * NTSC_TSID `integer`:  In the case of broadcast stations, denotes the FCC/Industry Canada assigned TSID included within the transmission stream.
  * Twitter `string`
  * callsign `string`: Station short name.
  * channelNumber `integer`: Channel number.
  * logoFilename `string`: Filename and extension for station's logo.
  * name `string`
  * network `string`: Network this station is on.
  * number `string`: ChannelNumber, hyphenated by subChannelNumber when present
  * stationHD `boolean`: Is this station hd?
  * stationID `integer`: Unique station ID.
  * stationType `string`
  * subChannelNumber `integer`: Sub channel number.
  * webLink `string`: URL to station's website.

### SummaryResponse
* SummaryResponse `object`: SummaryResponse
  * AverageViews `number`
  * UniqueViewers `integer`
  * Viewers `integer`
  * Views `integer`

### Tag
* Tag `object`: Tag
  * Id `integer`: ID of the object.
  * Modifier `integer`: ID of last user who modified the item.
  * Name `string`: Name of the Tag.
  * TagId `integer`: ID of the Tag.

### TagResponse
* TagResponse `object`: TagResponse
  * Id `integer`
  * Name `string`

### TargetCountry
* TargetCountry `object`: TargetCountry
  * CountryId `integer`: ID of the Country.
  * Id `integer`: ID of the TargetCountry.
  * Name `string`: Name of the country

### TestDateTimeResponse
* TestDateTimeResponse `object`: TestDateTimeResponse
  * DateTime `string`
  * DateTimeString `string`

### TitleReportResponse
* TitleReportResponse `object`: TitleReportResponse
  * Day `string`
  * PublishedId `integer`
  * Viewers `integer`
  * Views `integer`

### TvMediaChannelResponse
* TvMediaChannelResponse `object`: TvMediaChannelResponse
  * DTV_TSID `integer`
  * NTSC_TSID `integer`
  * Twitter `string`
  * callsign `string`
  * channelNumber `integer`
  * logoFilename `string`
  * name `string`
  * network `string`
  * number `string`
  * stationHD `boolean`
  * stationID `integer`
  * stationType `string`
  * subChannelNumber `integer`
  * webLink `string`

### TvMediaCountryResponse
* TvMediaCountryResponse `object`: TvMediaCountryResponse
  * countryID `string`
  * countryName `string`

### TvMediaExternalId
* TvMediaExternalId `object`: TvMediaExternalId
  * id `string`
  * name `string`

### TvMediaGenreResponse
* TvMediaGenreResponse `object`: TvMediaGenreResponse
  * genre `string`
  * genreID `string`

### TvMediaGridResponse
* TvMediaGridResponse `object`: TvMediaGridResponse
  * channel [TvMediaChannelResponse](#tvmediachannelresponse)
  * listings `array`
    * items [TvMediaShortListingResponse](#tvmediashortlistingresponse)

### TvMediaLeagueResponse
* TvMediaLeagueResponse `object`: TvMediaLeagueResponse
  * leagueID `string`
  * leagueName `string`
  * logo `string`

### TvMediaLineupResponse
* TvMediaLineupResponse `object`: TvMediaLineupResponse
  * country `string`
  * lineupID `string`
  * lineupName `string`
  * lineupType `string`
  * providerID `string`
  * providerName `string`
  * serviceArea `string`
  * stations `array`
    * items [Station](#station)

### TvMediaListingResponse
* TvMediaListingResponse `object`: TvMediaListingResponse
  * artwork [Artwork](#artwork)
  * blackWhite `boolean`
  * breakoutLevel `integer`
  * callsign `string`
  * captioned `boolean`
  * cast `string`
  * channelNumber `integer`
  * description `string`
  * descriptiveVideo `boolean`
  * director `string`
  * duration `integer`
  * educational `boolean`
  * episodeNumber `string`
  * episodeTitle `string`
  * eventName `string`
  * externalIds `array`
    * items [TvMediaExternalId](#tvmediaexternalid)
  * guest `string`
  * hd `boolean`
  * inProgress `boolean`
  * isNew `boolean`
  * league `string`
  * listDateTime `string`
  * listingID `integer`
  * live `boolean`
  * location `string`
  * logoFilename `string`
  * name `string`
  * network `string`
  * number `string`
  * partNum `integer`
  * parts `integer`
  * rating `string`
  * repeat `boolean`
  * seasonFinale `boolean`
  * seasonPremiere `boolean`
  * seriesFinale `boolean`
  * seriesID `integer`
  * seriesPremiere `boolean`
  * showHost `string`
  * showID `integer`
  * showName `string`
  * showPicture `string`
  * showType `string`
  * showTypeID `string`
  * starRating `integer`
  * stationID `integer`
  * stationType `string`
  * subChannelNumber `integer`
  * subtitled `boolean`
  * team1 `string`
  * team1ID `integer`
  * team2 `string`
  * team2ID `integer`
  * webLink `string`
  * year `string`

### TvMediaRegionResponse
* TvMediaRegionResponse `object`: TvMediaRegionResponse
  * regionID `string`
  * regionName `string`

### TvMediaServiceAreaResponse
* TvMediaServiceAreaResponse `object`: TvMediaServiceAreaResponse
  * areaID `string`
  * areaName `string`

### TvMediaShortListingResponse
* TvMediaShortListingResponse `object`: TvMediaShortListingResponse
  * artwork [Artwork](#artwork)
  * blackWhite `boolean`
  * breakoutLevel `integer`
  * captioned `boolean`
  * cast `string`
  * description `string`
  * descriptiveVideo `boolean`
  * director `string`
  * duration `integer`
  * educational `boolean`
  * episodeNumber `string`
  * episodeTitle `string`
  * eventName `string`
  * guest `string`
  * hd `boolean`
  * inProgress `boolean`
  * isNew `boolean`
  * league `string`
  * listDateTime `string`
  * listingID `integer`
  * live `boolean`
  * location `string`
  * partNum `integer`
  * parts `integer`
  * rating `string`
  * repeat `boolean`
  * seasonFinale `boolean`
  * seasonPremiere `boolean`
  * seriesFinale `boolean`
  * seriesID `integer`
  * seriesPremiere `boolean`
  * showHost `string`
  * showID `integer`
  * showName `string`
  * showPicture `string`
  * showType `string`
  * showTypeID `string`
  * starRating `integer`
  * subtitled `boolean`
  * team1 `string`
  * team1ID `integer`
  * team2 `string`
  * team2ID `integer`
  * year `string`

### TvMediaStationResponse
* TvMediaStationResponse `object`: TvMediaStationResponse
  * DTV_TSID `integer`
  * NTSC_TSID `integer`
  * Twitter `string`
  * callsign `string`
  * logoFilename `string`
  * name `string`
  * network `string`
  * stationHD `boolean`
  * stationID `integer`
  * stationType `string`
  * webLink `string`

### TvMediaTeamResponse
* TvMediaTeamResponse `object`: TvMediaTeamResponse
  * leagueID `string`
  * logo `string`
  * longName `string`
  * mediumName `string`
  * shortName `string`
  * teamID `integer`

### VideoLogResponse
* VideoLogResponse `object`: VideoLogResponse
  * Percentage `number`
  * UniqueViewers `integer`
  * VideoPublishedId `integer`
  * VideoTitle `string`
  * Viewers `integer`
  * Views `integer`

### VideoResponse
* VideoResponse `object`: VideoResponse
  * Expires `string`
  * Url `string`

### VideoTypeResponse
* VideoTypeResponse `object`: VideoTypeResponse
  * Id `integer`: Unique ID of VideoType.
  * Type `string`: Type of VideoType.

### ViewersResponse
* ViewersResponse `object`: ViewersResponse
  * Day `string`
  * Viewers `integer`

### ViewsResponse
* ViewsResponse `object`: ViewsResponse
  * Day `string`
  * Views `integer`

### WebBrowsersResponse
* WebBrowsersResponse `object`: WebBrowsersResponse
  * Browser `string`
  * Percentage `number`
  * Viewers `integer`

### XRoadMediaRecommendationResponse
* XRoadMediaRecommendationResponse `object`: XRoadMediaRecommendationResponse
  * recommendations `array`
    * items [Recommendation](#recommendation)


