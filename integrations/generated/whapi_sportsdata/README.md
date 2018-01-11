# @datafire/whapi_sportsdata

Client library for SportsData

## Installation and Usage
```bash
npm install --save @datafire/whapi_sportsdata
```
```js
let whapi_sportsdata = require('@datafire/whapi_sportsdata').create();

whapi_sportsdata.getCompetitionsForClass({}).then(data => {
  console.log(data);
})
```

## Description

The William Hill SportsData REST API is a collection of GET methods to provide William Hill product data such as sport, competition, event, market and selection data (including prices).

## Actions

### getCompetitionsForClass
Retrieves a list of competitions for a given class id.


```js
whapi_sportsdata.getCompetitionsForClass({
  "apiKey": "",
  "classId": ""
}, context)
```

#### Input
* input `object`
  * apiKey **required** `string`: Your API Key available from your developer portal
  * classId **required** `string`: The class id to retrieve information for.
  * isPublished `string`: Specify whether only active entities should be returned, according to the William Hill definition of active
  * fields `array`: Specify an absolute field list to return (Comma-Separated List)
  * include `array`: Specify fields in addition to the default to return (Comma-Separated List)
  * exclude `array`: Specify fields from the default to exclude (Comma-Separated List)
  * displayed `string`: Specify whether to return displayed entities or not
  * channel `string`: Specify a channel filter and only results from that channel will be returned
  * status `string`: Specify a status to filter results by. This is currently A (active) or S (suspended)
  * sort `string`: The field to order the response by, followed by the order. For example: name,desc
  * offset `integer`: Skip over a number of elements by specifying a start value for the query
  * limit `integer`: Specify the number of results to return
  * culture `string`: Code used to return responses in language other than English, acceptable values are de-DE|es-ES|fr-FR|nn-NO|fi-FI|ru-RU|pt-PT|hu-HU|sl-SL|ga-IE|en-CA|sr-Latn|sv-SE|el=GR|zh-CHS|it-IT|zh-CHT|cs-CZ|de-AT|ja-JP|pl-PL|da-DK|ro-RO|nl-NL|tr-TR

#### Output
* output [competitionsWrapper](#competitionswrapper)

### getEventsForClass
Retrieves a list of events for a given class id. 'includeAllDescendants' parameter should be accompanied with 'date' filter or one of 'dateFrom' and 'dateTo' filters.


```js
whapi_sportsdata.getEventsForClass({
  "apiKey": "",
  "classId": ""
}, context)
```

#### Input
* input `object`
  * apiKey **required** `string`: Your API Key available from your developer portal
  * classId **required** `string`: The class id to retrieve information for.
  * isPublished `string`: Specify whether only active entities should be returned, according to the William Hill definition of active
  * fields `array`: Specify an absolute field list to return (Comma-Separated List)
  * include `array`: Specify fields in addition to the default to return (Comma-Separated List)
  * exclude `array`: Specify fields from the default to exclude (Comma-Separated List)
  * displayed `string`: Specify whether to return displayed entities or not
  * channel `string`: Specify a channel filter and only results from that channel will be returned
  * settled `boolean`: Specify wether only settled entities should be returned
  * includeEmpty `boolean`: When declared as false it should exclude markets and events that have no selections / markets
  * status `string`: Specify a status to filter results by. This is currently A (active) or S (suspended)
  * sort `string`: The field to order the response by, followed by the order. For example: name,desc
  * offset `integer`: Skip over a number of elements by specifying a start value for the query
  * limit `integer`: Specify the number of results to return
  * headlineSummary `boolean`: Return only headline markets (Markets with the lowest display order) Either 1 InPlay and 1 Pre-Match, or the amount specified in marketCount, if available. Markets and Outcomes will be returned.
  * includeAllDescendants `boolean`: Include every descendant in the below heirarchy
  * isInPlay `boolean`: Show only events that are in-play
  * marketCount `integer`: Specify the number of markets to return when requesting headlineSummary. This count of InPlay and Pre-Match markets will be returned.For example, when specifying 1, 1 In Play and 1 Pre Match market will be returned.
  * date `string`: Return only events for the specified date (yyyy-MM-dd).
  * dateFrom `string`: The UTC datetime from the events to be returned. (yyyy-MM-ddTHH:mm:ss)
  * dateTo `string`: The UTC datetime TO the events to be returned. (yyyy-MM-ddTHH:mm:ss)
  * eventSort `string`: Filter event by event sort
  * culture `string`: Code used to return responses in language other than English, acceptable values are de-DE|es-ES|fr-FR|nn-NO|fi-FI|ru-RU|pt-PT|hu-HU|sl-SL|ga-IE|en-CA|sr-Latn|sv-SE|el=GR|zh-CHS|it-IT|zh-CHT|cs-CZ|de-AT|ja-JP|pl-PL|da-DK|ro-RO|nl-NL|tr-TR
  * marketPublished `string`: Specify whether only active entities should be returned, according to the William Hill definition of active
  * marketStatus `string`: Specify a status to filter results by. This is currently A (active) or S (suspended)
  * marketDisplayed `string`: Specify whether to return displayed entities or not
  * marketChannel `string`: Specify a channel filter and only results from that channel will be returned
  * marketSort `string`: Filter by market sort  (e.g. MR (match result) -- (Outright)).
  * marketEW `string`: Specify whether to return markets with each way betting or those without
  * selectionStatus `string`: Specify a status to filter results by. This is currently A (active) or S (suspended)
  * selectionChannel `string`: Specify a channel filter and only results from that channel will be returned
  * selectionPublished `string`: Specify whether only active entities should be returned, according to the William Hill definition of active

#### Output
* output [eventsWrapper](#eventswrapper)

### getCompetition
Retrieves a specific competition


```js
whapi_sportsdata.getCompetition({
  "apiKey": "",
  "competitionId": ""
}, context)
```

#### Input
* input `object`
  * apiKey **required** `string`: Your API Key available from your developer portal
  * competitionId **required** `string`: The competition id to retrieve information for.
  * fields `array`: Specify an absolute field list to return (Comma-Separated List)
  * include `array`: Specify fields in addition to the default to return (Comma-Separated List)
  * exclude `array`: Specify fields from the default to exclude (Comma-Separated List)
  * culture `string`: Code used to return responses in language other than English, acceptable values are de-DE|es-ES|fr-FR|nn-NO|fi-FI|ru-RU|pt-PT|hu-HU|sl-SL|ga-IE|en-CA|sr-Latn|sv-SE|el=GR|zh-CHS|it-IT|zh-CHT|cs-CZ|de-AT|ja-JP|pl-PL|da-DK|ro-RO|nl-NL|tr-TR

#### Output
* output [competition](#competition)

### getEventsForCompetition
Retrieves a list of events for a given competition id. 'headlineSummary' and includeAllDescendants parameters should be accompanied with 'date' filter or one of 'dateFrom' and 'dateTo' filters.


```js
whapi_sportsdata.getEventsForCompetition({
  "apiKey": "",
  "competitionId": ""
}, context)
```

#### Input
* input `object`
  * apiKey **required** `string`: Your API Key available from your developer portal
  * competitionId **required** `string`: The competition id to retrieve information for.
  * isPublished `string`: Specify whether only active entities should be returned, according to the William Hill definition of active
  * fields `array`: Specify an absolute field list to return (Comma-Separated List)
  * include `array`: Specify fields in addition to the default to return (Comma-Separated List)
  * exclude `array`: Specify fields from the default to exclude (Comma-Separated List)
  * displayed `string`: Specify whether to return displayed entities or not
  * channel `string`: Specify a channel filter and only results from that channel will be returned
  * settled `boolean`: Specify wether only settled entities should be returned
  * includeEmpty `boolean`: When declared as false it should exclude markets and events that have no selections / markets
  * status `string`: Specify a status to filter results by. This is currently A (active) or S (suspended)
  * sort `string`: The field to order the response by, followed by the order. For example: name,desc
  * offset `integer`: Skip over a number of elements by specifying a start value for the query
  * limit `integer`: Specify the number of results to return
  * headlineSummary `boolean`: Return only headline markets (Markets with the lowest display order) Either 1 InPlay and 1 Pre-Match, or the amount specified in marketCount, if available. Markets and Outcomes will be returned.
  * includeAllDescendants `boolean`: Include every descendant in the below heirarchy
  * isInPlay `boolean`: Show only events that are in-play
  * marketCount `integer`: Specify the number of markets to return when requesting headlineSummary. This count of InPlay and Pre-Match markets will be returned.For example, when specifying 1, 1 In Play and 1 Pre Match market will be returned.
  * date `string`: Return only events for the specified date (yyyy-MM-dd).
  * dateFrom `string`: The UTC datetime from the events to be returned. (yyyy-MM-ddTHH:mm:ss)
  * dateTo `string`: The UTC datetime TO the events to be returned. (yyyy-MM-ddTHH:mm:ss)
  * marketGroupId `string`: Filter by marketGroupId (e.g. OB_MG1276585).
  * eventSort `string`: Filter event by event sort
  * culture `string`: Code used to return responses in language other than English, acceptable values are de-DE|es-ES|fr-FR|nn-NO|fi-FI|ru-RU|pt-PT|hu-HU|sl-SL|ga-IE|en-CA|sr-Latn|sv-SE|el=GR|zh-CHS|it-IT|zh-CHT|cs-CZ|de-AT|ja-JP|pl-PL|da-DK|ro-RO|nl-NL|tr-TR
  * marketPublished `string`: Specify whether only active entities should be returned, according to the William Hill definition of active
  * marketStatus `string`: Specify a status to filter results by. This is currently A (active) or S (suspended)
  * marketDisplayed `string`: Specify whether to return displayed entities or not
  * marketChannel `string`: Specify a channel filter and only results from that channel will be returned
  * marketSort `string`: Filter by market sort  (e.g. MR (match result) -- (Outright)).
  * marketEW `string`: Specify whether to return markets with each way betting or those without
  * selectionStatus `string`: Specify a status to filter results by. This is currently A (active) or S (suspended)
  * selectionChannel `string`: Specify a channel filter and only results from that channel will be returned
  * selectionPublished `string`: Specify whether only active entities should be returned, according to the William Hill definition of active

#### Output
* output [eventsWrapper](#eventswrapper)

### getMarketGroupsForCompetition
Retrieves a list of market groups for a given competition id


```js
whapi_sportsdata.getMarketGroupsForCompetition({
  "apiKey": "",
  "competitionId": ""
}, context)
```

#### Input
* input `object`
  * apiKey **required** `string`: Your API Key available from your developer portal
  * competitionId **required** `string`: The competition id to retrieve information for.
  * fields `array`: Specify an absolute field list to return (Comma-Separated List)
  * include `array`: Specify fields in addition to the default to return (Comma-Separated List)
  * exclude `array`: Specify fields from the default to exclude (Comma-Separated List)
  * sort `string`: The field to order the response by, followed by the order. For example: name,desc
  * offset `integer`: Skip over a number of elements by specifying a start value for the query
  * limit `integer`: Specify the number of results to return
  * culture `string`: Code used to return responses in language other than English, acceptable values are de-DE|es-ES|fr-FR|nn-NO|fi-FI|ru-RU|pt-PT|hu-HU|sl-SL|ga-IE|en-CA|sr-Latn|sv-SE|el=GR|zh-CHS|it-IT|zh-CHT|cs-CZ|de-AT|ja-JP|pl-PL|da-DK|ro-RO|nl-NL|tr-TR
  * name `string`: Filter by market group name

#### Output
* output [marketGroupsWrapper](#marketgroupswrapper)

### getEvents
Retrieves a list of events for the provided IDs.


```js
whapi_sportsdata.getEvents({
  "apiKey": ""
}, context)
```

#### Input
* input `object`
  * apiKey **required** `string`: Your API Key available from your developer portal
  * ids `array`: A comma-separated list of selectionIds
  * isPublished `string`: Specify whether only active entities should be returned, according to the William Hill definition of active
  * includeAllDescendants `boolean`: Include every descendant in the below heirarchy
  * fields `array`: Specify an absolute field list to return (Comma-Separated List)
  * include `array`: Specify fields in addition to the default to return (Comma-Separated List)
  * exclude `array`: Specify fields from the default to exclude (Comma-Separated List)
  * channel `string`: Specify a channel filter and only results from that channel will be returned
  * settled `boolean`: Specify wether only settled entities should be returned
  * includeEmpty `boolean`: When declared as false it should exclude markets and events that have no selections / markets
  * headlineSummary `boolean`: Return only headline markets (Markets with the lowest display order) Either 1 InPlay and 1 Pre-Match, or the amount specified in marketCount, if available. Markets and Outcomes will be returned.
  * marketCount `integer`: Specify the number of markets to return when requesting headlineSummary. This count of InPlay and Pre-Match markets will be returned.For example, when specifying 1, 1 In Play and 1 Pre Match market will be returned.
  * sort `string`: The field to order the response by, followed by the order. For example: name,desc
  * offset `integer`: Skip over a number of elements by specifying a start value for the query
  * limit `integer`: Specify the number of results to return
  * marketIds `array`: Comma-seaerated list of market IDs to filter by
  * culture `string`: Code used to return responses in language other than English, acceptable values are de-DE|es-ES|fr-FR|nn-NO|fi-FI|ru-RU|pt-PT|hu-HU|sl-SL|ga-IE|en-CA|sr-Latn|sv-SE|el=GR|zh-CHS|it-IT|zh-CHT|cs-CZ|de-AT|ja-JP|pl-PL|da-DK|ro-RO|nl-NL|tr-TR
  * marketPublished `string`: Specify whether only active entities should be returned, according to the William Hill definition of active
  * marketStatus `string`: Specify a status to filter results by. This is currently A (active) or S (suspended)
  * marketDisplayed `string`: Specify whether to return displayed entities or not
  * marketChannel `string`: Specify a channel filter and only results from that channel will be returned
  * marketSort `string`: Filter by market sort  (e.g. MR (match result) -- (Outright)).
  * marketEW `string`: Specify whether to return markets with each way betting or those without
  * selectionStatus `string`: Specify a status to filter results by. This is currently A (active) or S (suspended)
  * selectionChannel `string`: Specify a channel filter and only results from that channel will be returned
  * selectionPublished `string`: Specify whether only active entities should be returned, according to the William Hill definition of active

#### Output
* output [eventsWrapper](#eventswrapper)

### getEvent
Retrieves a single event by ID.


```js
whapi_sportsdata.getEvent({
  "apiKey": "",
  "eventId": ""
}, context)
```

#### Input
* input `object`
  * apiKey **required** `string`: Your API Key available from your developer portal
  * eventId **required** `string`: The event ID to retrieve information for.
  * includeAllDescendants `boolean`: Include every descendant in the below heirarchy
  * fields `array`: Specify an absolute field list to return (Comma-Separated List)
  * include `array`: Specify fields in addition to the default to return (Comma-Separated List)
  * exclude `array`: Specify fields from the default to exclude (Comma-Separated List)
  * headlineSummary `boolean`: Return only headline markets (Markets with the lowest display order) Either 1 InPlay and 1 Pre-Match, or the amount specified in marketCount, if available. Markets and Outcomes will be returned.
  * marketCount `integer`: Specify the number of markets to return when requesting headlineSummary. This count of InPlay and Pre-Match markets will be returned.For example, when specifying 1, 1 In Play and 1 Pre Match market will be returned.
  * marketIds `array`: Comma-seaerated list of market IDs to filter by
  * includeEmpty `boolean`: When declared as false it should exclude markets and events that have no selections / markets
  * culture `string`: Code used to return responses in language other than English, acceptable values are de-DE|es-ES|fr-FR|nn-NO|fi-FI|ru-RU|pt-PT|hu-HU|sl-SL|ga-IE|en-CA|sr-Latn|sv-SE|el=GR|zh-CHS|it-IT|zh-CHT|cs-CZ|de-AT|ja-JP|pl-PL|da-DK|ro-RO|nl-NL|tr-TR
  * marketPublished `string`: Specify whether only active entities should be returned, according to the William Hill definition of active
  * marketStatus `string`: Specify a status to filter results by. This is currently A (active) or S (suspended)
  * marketDisplayed `string`: Specify whether to return displayed entities or not
  * marketChannel `string`: Specify a channel filter and only results from that channel will be returned
  * marketSort `string`: Filter by market sort  (e.g. MR (match result) -- (Outright)).
  * marketEW `string`: Specify whether to return markets with each way betting or those without
  * selectionStatus `string`: Specify a status to filter results by. This is currently A (active) or S (suspended)
  * selectionChannel `string`: Specify a channel filter and only results from that channel will be returned
  * selectionPublished `string`: Specify whether only active entities should be returned, according to the William Hill definition of active

#### Output
* output [eventsWrapper](#eventswrapper)

### getMarkets
Retrieves one or more specific markets. Markets with Live at the end are always In-Play markets. However, not ALL In-Play markets have Live at the end of the market name.


```js
whapi_sportsdata.getMarkets({
  "apiKey": "",
  "eventId": ""
}, context)
```

#### Input
* input `object`
  * apiKey **required** `string`: Your API Key available from your developer portal
  * eventId **required** `string`: The event ID to retrieve information for.
  * ids `array`: A comma-separated list of selectionIds
  * includeAllDescendants `boolean`: Include every descendant in the below heirarchy
  * fields `array`: Specify an absolute field list to return (Comma-Separated List)
  * include `array`: Specify fields in addition to the default to return (Comma-Separated List)
  * exclude `array`: Specify fields from the default to exclude (Comma-Separated List)
  * includeEmpty `boolean`: When declared as false it should exclude markets and events that have no selections / markets
  * culture `string`: Code used to return responses in language other than English, acceptable values are de-DE|es-ES|fr-FR|nn-NO|fi-FI|ru-RU|pt-PT|hu-HU|sl-SL|ga-IE|en-CA|sr-Latn|sv-SE|el=GR|zh-CHS|it-IT|zh-CHT|cs-CZ|de-AT|ja-JP|pl-PL|da-DK|ro-RO|nl-NL|tr-TR
  * marketPublished `string`: Specify whether only active entities should be returned, according to the William Hill definition of active
  * marketStatus `string`: Specify a status to filter results by. This is currently A (active) or S (suspended)
  * marketDisplayed `string`: Specify whether to return displayed entities or not
  * marketChannel `string`: Specify a channel filter and only results from that channel will be returned
  * marketSort `string`: Filter by market sort  (e.g. MR (match result) -- (Outright)).
  * marketEW `string`: Specify whether to return markets with each way betting or those without
  * selectionStatus `string`: Specify a status to filter results by. This is currently A (active) or S (suspended)
  * selectionChannel `string`: Specify a channel filter and only results from that channel will be returned
  * selectionPublished `string`: Specify whether only active entities should be returned, according to the William Hill definition of active

#### Output
* output [marketsWrapper](#marketswrapper)

### getSelections
Retrieves one or more selections for a market


```js
whapi_sportsdata.getSelections({
  "apiKey": "",
  "eventId": "",
  "marketId": ""
}, context)
```

#### Input
* input `object`
  * apiKey **required** `string`: Your API Key available from your developer portal
  * eventId **required** `string`: The event ID to retrieve information for.
  * marketId **required** `string`: The market id to retrieve information for
  * ids `array`: A comma-separated list of selectionIds
  * fields `array`: Specify an absolute field list to return (Comma-Separated List)
  * include `array`: Specify fields in addition to the default to return (Comma-Separated List)
  * exclude `array`: Specify fields from the default to exclude (Comma-Separated List)
  * culture `string`: Code used to return responses in language other than English, acceptable values are de-DE|es-ES|fr-FR|nn-NO|fi-FI|ru-RU|pt-PT|hu-HU|sl-SL|ga-IE|en-CA|sr-Latn|sv-SE|el=GR|zh-CHS|it-IT|zh-CHT|cs-CZ|de-AT|ja-JP|pl-PL|da-DK|ro-RO|nl-NL|tr-TR
  * selectionStatus `string`: Specify a status to filter results by. This is currently A (active) or S (suspended)
  * selectionChannel `string`: Specify a channel filter and only results from that channel will be returned
  * selectionPublished `string`: Specify whether only active entities should be returned, according to the William Hill definition of active

#### Output
* output [selectionsWrapper](#selectionswrapper)

### getSports
Gets a list of all sports


```js
whapi_sportsdata.getSports({
  "apiKey": ""
}, context)
```

#### Input
* input `object`
  * apiKey **required** `string`: Your API Key available from your developer portal
  * sort `string`: The field to order the response by, followed by the order. For example: name,desc
  * offset `integer`: Skip over a number of elements by specifying a start value for the query
  * isPublished `string`: Specify whether only active entities should be returned, according to the William Hill definition of active
  * limit `integer`: Specify the number of results to return
  * fields `array`: Specify an absolute field list to return (Comma-Separated List)
  * include `array`: Specify fields in addition to the default to return (Comma-Separated List)
  * exclude `array`: Specify fields from the default to exclude (Comma-Separated List)
  * culture `string`: Code used to return responses in language other than English, acceptable values are de-DE|es-ES|fr-FR|nn-NO|fi-FI|ru-RU|pt-PT|hu-HU|sl-SL|ga-IE|en-CA|sr-Latn|sv-SE|el=GR|zh-CHS|it-IT|zh-CHT|cs-CZ|de-AT|ja-JP|pl-PL|da-DK|ro-RO|nl-NL|tr-TR

#### Output
* output [sportsWrapper](#sportswrapper)

### getClassesForSport
Retrieves a list of classes for a given sport id.


```js
whapi_sportsdata.getClassesForSport({
  "apiKey": "",
  "sportId": ""
}, context)
```

#### Input
* input `object`
  * apiKey **required** `string`: Your API Key available from your developer portal
  * sportId **required** `string`: The sport id to retrieve information for.
  * isPublished `string`: Specify whether only active entities should be returned, according to the William Hill definition of active
  * fields `array`: Specify an absolute field list to return (Comma-Separated List)
  * include `array`: Specify fields in addition to the default to return (Comma-Separated List)
  * exclude `array`: Specify fields from the default to exclude (Comma-Separated List)
  * displayed `string`: Specify whether to return displayed entities or not
  * channel `string`: Specify a channel filter and only results from that channel will be returned
  * status `string`: Specify a status to filter results by. This is currently A (active) or S (suspended)
  * sort `string`: The field to order the response by, followed by the order. For example: name,desc
  * offset `integer`: Skip over a number of elements by specifying a start value for the query
  * limit `integer`: Specify the number of results to return
  * culture `string`: Code used to return responses in language other than English, acceptable values are de-DE|es-ES|fr-FR|nn-NO|fi-FI|ru-RU|pt-PT|hu-HU|sl-SL|ga-IE|en-CA|sr-Latn|sv-SE|el=GR|zh-CHS|it-IT|zh-CHT|cs-CZ|de-AT|ja-JP|pl-PL|da-DK|ro-RO|nl-NL|tr-TR

#### Output
* output [classesWrapper](#classeswrapper)

### getCompetitionsForSport
Retrieves a list of competitions for a given sport id.


```js
whapi_sportsdata.getCompetitionsForSport({
  "apiKey": "",
  "sportId": ""
}, context)
```

#### Input
* input `object`
  * apiKey **required** `string`: Your API Key available from your developer portal
  * sportId **required** `string`: The sport id to retrieve information for.
  * isPublished `string`: Specify whether only active entities should be returned, according to the William Hill definition of active
  * fields `array`: Specify an absolute field list to return (Comma-Separated List)
  * include `array`: Specify fields in addition to the default to return (Comma-Separated List)
  * exclude `array`: Specify fields from the default to exclude (Comma-Separated List)
  * displayed `string`: Specify whether to return displayed entities or not
  * channel `string`: Specify a channel filter and only results from that channel will be returned
  * status `string`: Specify a status to filter results by. This is currently A (active) or S (suspended)
  * sort `string`: The field to order the response by, followed by the order. For example: name,desc
  * offset `integer`: Skip over a number of elements by specifying a start value for the query
  * limit `integer`: Specify the number of results to return
  * culture `string`: Code used to return responses in language other than English, acceptable values are de-DE|es-ES|fr-FR|nn-NO|fi-FI|ru-RU|pt-PT|hu-HU|sl-SL|ga-IE|en-CA|sr-Latn|sv-SE|el=GR|zh-CHS|it-IT|zh-CHT|cs-CZ|de-AT|ja-JP|pl-PL|da-DK|ro-RO|nl-NL|tr-TR

#### Output
* output [competitionsWrapper](#competitionswrapper)

### getTopBets
Retrieves a weighted list of Selections.


```js
whapi_sportsdata.getTopBets({
  "apiKey": ""
}, context)
```

#### Input
* input `object`
  * apiKey **required** `string`: Your API Key available from your developer portal
  * sportIds `array`: A comma-separated list of sportsIds for which to retrieve topBets for
  * competitionIds `array`: A comma-separated list of competitionIds for which to retrieve topBets for
  * limit `integer`: Specify the number of results to return
  * fields `array`: Specify an absolute field list to return (Comma-Separated List)
  * include `array`: Specify fields in addition to the default to return (Comma-Separated List)
  * exclude `array`: Specify fields from the default to exclude (Comma-Separated List)
  * param_topBetEventId `string`: The event ID to retrieve top bet information for. Multiple events up to 5 may be used
  * sortName `string`: The market sort code used to further filter event results. Please note this can only be used with event id(s).
  * culture `string`: Code used to return responses in language other than English, acceptable values are de-DE|es-ES|fr-FR|nn-NO|fi-FI|ru-RU|pt-PT|hu-HU|sl-SL|ga-IE|en-CA|sr-Latn|sv-SE|el=GR|zh-CHS|it-IT|zh-CHT|cs-CZ|de-AT|ja-JP|pl-PL|da-DK|ro-RO|nl-NL|tr-TR
  * Locale `string`: Code used to select a set of top bets settings, default is "whapi" which allows events set in far future to be included, setting the value to "en-GB" will activate english sportsbook settings, mirroring top bets on the website, which restricts events returned to those taking place in next 36 hours.  Acceptable values (not all heve their own settings - if none currently available for that locale - en-GB will be used) are  de-DE|whapi|en-GB|es-ES|fr-FR|nn-NO|fi-FI|ru-RU|pt-PT|hu-HU|sl-SL|ga-IE|en-CA|sr-Latn|sv-SE|el=GR|zh-CHS|it-IT|zh-CHT|cs-CZ|de-AT|ja-JP|pl-PL|da-DK|ro-RO|nl-NL|tr-TR

#### Output
* output [topBetsWrapper](#topbetswrapper)



## Definitions

### class
* class `object`
  * id **required** `string`: The Id of the Class
  * isPublished `boolean`: Indicates if the item is published
  * name **required** `string`: The description of the Class
  * status `string`: Indicates if the class is (A)ctive or (S)uspended

### classesWrapper
* classesWrapper `object`
  * classes `array`
    * items [class](#class)

### competition
* competition `object`
  * betInRunningDelay `number`: Delay in seconds between bet being sent and bet being placed
  * cashinAvailable `boolean`: Indicates whether cashin is available on the events of this competition
  * channels `array`: A list of channels that apply to this competition
    * items `string`
  * description `string`: The description of the competition
  * displayed `boolean`: Whether the competition should be displayed or not
  * flags `array`: A list of flags that apply to this competition
    * items `string`
  * id **required** `string`: The Id of the Competition
  * isPublished `boolean`: Indicates if the item is published or not
  * name **required** `string`: The name of the competition
  * order `integer`: The display order of the competition
  * parentIds `array`: A list of IDs of parent entities
    * items `string`
  * status **required** `string`: The status of the competition (A for Active, S for Suspended)

### competitionsWrapper
* competitionsWrapper `object`
  * competitions `array`
    * items [competition](#competition)

### error
* error `object`
  * code `string`: The William Hill API Error Code
  * field `string`: Optional field to point to the field with an error
  * message `string`: A String describing the error

### errorsWrapper
* errorsWrapper `object`
  * errors `array`
    * items [error](#error)

### event
* event `object`
  * betInRunningDelay `number`: Delay in seconds between bet being sent and bet being placed
  * bettingStatus `string`: Betting status of the event
  * cashinAvailable `boolean`: Whether cashin is available on this event
  * channels `array`: A list of channels that apply to this event
    * items `string`
  * country `string`: A string indicating the country code of this event if available
  * description `string`: The description of the event
  * displayed `boolean`: whether the event should be displayed or not
  * eventSort `string`: What type of event is this? (e.g. MTCH, TRNMT)
  * flags `array`: A list of flags that apply to this event
    * items `string`
  * hasInPlayMarkets `boolean`: Whether this event has inplay markets
  * hasLivePrices `boolean`: Whether this event has Live Prices
  * id **required** `string`: The Id of the event
  * isInPlay `boolean`: Whether this event has started and therefore is inplay
  * isPublished `boolean`: Indicates if the item is published
  * marketCountActiveInPlay `number`: Count of active markets in play
  * marketCountActivePreMatch `number`: count of active market pre-match
  * marketCountActiveTotal `number`: Total market count
  * marketCountInPlay `number`: Total inplay markets
  * marketCountPreMatch `number`: Total prematch markets
  * markets `array`: A list of markets belonging to this event
    * items [market](#market)
  * name **required** `string`: The name of the event
  * order `number`: Display order of the event
  * parentIds `array`: A list of IDs of parent entities
    * items `string`
  * raceNum `string`: Race number for race events
  * settled `boolean`: Whether the event has been settled
  * startDateTime **required** `string`: The start date and time of the event
  * status **required** `string`: Status of the event (A for Active, S for Suspended)

### eventsWrapper
* eventsWrapper `object`
  * events `array`
    * items [event](#event)

### market
* market `object`
  * antepostMarket `boolean`: Antepost Market
  * bestOddsGuaranteed `boolean`: BOG Available
  * betInRunningDelay `number`
  * channels `string`: A channel indicates where an entry can be accessed. Its made up of a string containing a number of characters
  * description `string`: Additional market information
  * displayed `boolean`: Indicates if the item should be displayed
  * eachWay `boolean`: Indicates if each way betting is available
  * eachWayFactorDen `number`: Where each way terms are stored with the bet, this holds the denominator for the each way
  * eachWayFactorNum `number`: Where each way terms are stored with the bet, this holds the numerator for the each way
  * eachWayPlaces `number`: Where each way terms are stored with the bet, this holds the number of places paid. For
  * earlyPriceAvailable `boolean`: Early Pricing Active
  * firstFourAvailable `boolean`: Is firstFour betting available
  * firstPriceAvailable `boolean`: Is firstPrice betting available
  * flags `string`: Flags for the market
  * hcapMakeup `number`: Handicap score
  * hcapValue `number`: This value indicates the current handicap set on the Event Market, assuming it has a handicap type.
  * id **required** `string`: ID (e.g. OB_MA{id} (e.g. OB_MA1), OB_SP (Sport), OB_CL (Class), OB_TY (Competition / type), OB_EV (event) OB_MA (Market), OB_OU (Selection / outcome)
  * isInPlayMarket `boolean`: Is this an in-play market
  * isPublished `boolean`: Indicates if the item is published
  * livePriceAvailable `boolean`: Live Price
  * marketGroupCollectionId `string`: The collectionId of the Market Group inherited from
  * marketGroupId `string`: The group id the market was inherited from
  * marketGroupName `string`: The group name the market was inherited from
  * marketSort `string`: The sort defines the market template
  * name **required** `string`: Human-friendly name of the market
  * order `number`: Display order of the items (Ascending)
  * parentIds `array`: A list of IDs of parent entities
    * items `string`
  * quinellaAvailable `boolean`: Is firstFour betting available
  * selections `array`: A list of selections belonging to the market
    * items [selection](#selection)
  * settled `boolean`: Whether the market is settled or not
  * startingPriceAvailable `boolean`: Starting Price Available
  * status **required** `string`: Indicates the status of the Market (A = Active/S = Suspended)

### marketGroupsWrapper
* marketGroupsWrapper `object`
  * marketGroups `array`
    * items [marketgroup](#marketgroup)

### marketgroup
* marketgroup `object`
  * collectionId `string`: The collectionId of the Market Group, If it has one
  * competitionId `string`: The CompetitionId of the Market Group
  * id **required** `string`: The Id of the Market Group
  * name **required** `string`: The Name of the Market Group

### marketsWrapper
* marketsWrapper `object`
  * markets `array`
    * items [market](#market)

### priceFormatted
* priceFormatted `object`
  * american `string`: The price in American format
  * decimal `number`: The decimal format of the price
  * fractional `string`: The fractional format of the price or EVS when the price evens.

### selection
* selection `object`
  * cashinPriceDen `number`: The cashin price denominator
  * cashinPriceNum `number`: The cashin price numerator
  * channels `array`: A list of channels that applies to this selection
    * items `string`
  * csAway `number`: The away score in a correct score event
  * csHome `number`: The home score in a correct score event
  * currentPriceDen `number`: Denominator of the price
  * currentPriceNum `number`: Numerator of the price
  * description `string`: The description of the selection
  * displayed `boolean`: Wether this selection should be displayed or not
  * id **required** `string`: The Id of the selection
  * isPublished `boolean`: Indicates if the item is published
  * name **required** `string`: The name of the selection
  * oddsDecimal **required** `number`: The selection price, in decimal format
  * oddsFractional **required** `number`: The selection price, in fractional format
  * order `number`: The display order of the selection
  * parentIds `array`: A list of IDs of parent entities
    * items `string`
  * priceFormatted [priceFormatted](#priceformatted)
  * result `string`: The result of this selection
  * resultType `string`: football Result
  * runnerNum `number`: The runner number in race events
  * settled `boolean`: Wether this selection has been settled or not
  * status **required** `string`: The status of the selection (A for Active or S for Suspended)

### selectionsWrapper
* selectionsWrapper `object`
  * selections `array`
    * items [selection](#selection)

### sport
* sport `object`
  * id **required** `string`: The Id of the Sport
  * isPublished `boolean`: Indicates if the item is published
  * name **required** `string`: The description of the Sport

### sportsWrapper
* sportsWrapper `object`
  * sports `array`
    * items [sport](#sport)

### topBet
* topBet `object`
  * competition [competition](#competition)
  * event [event](#event)
  * market [market](#market)
  * selection [selection](#selection)
  * sport [sport](#sport)
  * weight `string`: The weighting of the bet in the Top bets ranking

### topBetsWrapper
* topBetsWrapper `object`
  * bets `array`
    * items [topBet](#topbet)


