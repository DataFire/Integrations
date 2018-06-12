# @datafire/pims

Client library for Pims

## Installation and Usage
```bash
npm install --save @datafire/pims
```
```js
let pims = require('@datafire/pims').create({
  username: "",
  password: ""
});

pims.fetchAllVenues({}).then(data => {
  console.log(data);
});
```

## Description


Hereafter is the documentation of the private API of [Pims: Pointages Intelligents pour le Monde du Spectacle](https://pims.io). This API is designed for 3rd-party softwares, editors and partners. Its main purpose is to give access the core data of a Pims customer (i.e. events, ticket counts and promotions).

## Authentication
The API uses [basic access authentication](https://en.wikipedia.org/wiki/Basic_access_authentication), meaning you will need a username and password to get authorized.

As each customer in Pims has its own domain (e.g. caramba.pims.io, gdp.pims.io...), each credentials will be valid for one domain/customer only. If you need dedicated credentials for one domain, please contact us. (In any case, we will need an explicit agreement from the customer before we create these credentials.)

<div class="info">
To make your life easy, you can try all endpoints with the public credentials below, pointing to our [demo domain](https://demo.pims.io):
  <ul>
    <li>Base path: `https://demo.pims.io/api`</li>
    <li>Username: `demo`</li>
    <li>Password: `q83792db2GCvgYVdKpU3yG3R`</li>
  </ul>
</div>

## Response format
The API returns JSON and matches the [HAL specification](http://stateless.co/hal_specification.html). The `Content-Type` of each response will be `application/hal+json`, unless an error occurs.

Please note that this documentation describes all responses “as if” they were plain JSON. The specificities of HAL are ignored on purpose, in order to remain compact and avoid repetition.
<div style="-webkit-column-count: 2; -moz-column-count: 2; column-count: 2; -webkit-column-rule: 1px dotted #e0e0e0; -moz-column-rule: 1px dotted #e0e0e0; column-rule: 1px dotted #e0e0e0;">
	<div style="display: inline-block; width:100%;">
		<strong>So when you read in the doc:</strong>
<pre><code class="lang-json">{
	<span class="token string">"id"</span>: <span class="token number">123</span>,
	<span class="token string">"property1"</span>: <span class="token string">"Lorem ipsum"</span>,
	<span class="token string">"object"</span>: {
		<span class="token string">"id"</span>: <span class="token number">456</span>,
		<span class="token string">"property2"</span>: <span class="token number">7.89</span>
	}
}</code></pre>
	</div>
	<div style="display: inline-block; width:100%;">
		<strong>... you'll get in the Real World®:</strong>
<pre><code class="lang-json">{
	<span class="token string">"id"</span>: <span class="token number">123</span>,
	<span class="token string">"property2"</span>: <span class="token string">"Lorem ipsum"</span>,
	<span class="token string">"_embedded"</span>: {
		<span class="token string">"object"</span>: {
			<span class="token string">"id"</span>: <span class="token number">456</span>,
			<span class="token string">"property2"</span>: <span class="token number">7.89</span>,
			<span class="token string">"_links"</span>: {
				<span class="token string">"self"</span>: {
					<span class="token string">"href"</span>: <span class="token string">"https://api.mydomain.com/other-item/456"</span>
				}
			}
		}
	}
	<span class="token string">"_links"</span>: {
		<span class="token string">"self"</span>: {
			<span class="token string">"href"</span>: <span class="token string">"https://api.mydomain.com/item/123"</span>
		}
	}
}</code></pre>
	</div>
</div>

### Errors
Errors return JSON too and tries to match the [Problem Details for HTTP APIs specification](https://tools.ietf.org/html/rfc7807). If it does not match this spec, that's either a bug or a compatibility issue. Please contact us to solve the problem.

The `Content-Type` of errors will be `application/problem+json`.

## Versioning
The API is fully versionned, using an URL-versioning scheme: `https://demo.pims.io/api/v1/events`, `https://demo.pims.io/api/v2/events`,...

The version part of the URL is optional, and will be completed with the last stable version if omitted.

## Pagination
All responses corresponding to a collection of resources (e.g. `/venues` or `/series/:id/events`) are paginated. When so, you will only get the first 25 resources you asked for.

If you need to get more resources in one call, you can use the `page_size` query parameter. E.g. `/venues?page_size=50` to get the 50 first venues.

Also note that with HAL, the navigation in paginated responses is a piece of cake, as you can see below:
```json
{
	"_links": {
		"self": {
			"href": "https://demo.pims.io/api/v1/events?page=1"
		},
		"first": {
			"href": "https://demo.pims.io/api/v1/events"
		},
		"last": {
			"href": "https://demo.pims.io/api/v1/events?page=14"
		},
		"next": {
			"href": "https://demo.pims.io/api/v1/events?page=2"
		}
	},
	"_embedded": {
 		... // data content goes here
	},
	"page_count": 14,
	"page_size": 25,
	"total_items": 331,
	"page": 1
}
```

## Filtering and sorting
Every textual filter (e.g. `/events?label=U2`) and/or sort (e.g. `/events?sort=label`) performed with the API uses UTF8_UNICODE_CI collation, meaning it is:
- Case insensitive: “Chloé” will be considered the same as “CHLOÉ”;
- Diacritic insensitive: “Chloé” will be considered the same as “Chloe”.

When performing a sort, it will always be *ascending* by default. To make it *descending*, just use a minus sign (`-`) in front of the parameter value (e.g. `/events?sort=-label`).

## I18n
In responses, some labels can be translated (e.g. promotion types, event input types, etc.). These translatable labels are clearly indicated in the documentation below.

By default, they will be displayed in English, but you can change this behaviour via the `Accept-Language` header. E.g., use `fr` as a value for French.

## PHP SDK
We provide a simple yet convenient SDK for the PHP language, see [the Github page of the project](https://github.com/pimssas/pims-api-client-php).

## And now?
Generaly, you will start by [fetching one or more events](#tag/Events). An <span class="definition">event</span> can be anything that occurs in one venue at one given date and time: a concert, a play, a match, a conference, etc. Additionnally, you can explore the [series](#tag/Series): a <span class="definition">series</span> is just a group of events (e.g. a tour or a festival).

Once you retrieved the events you were interested in, you can look for the sales (<span class="definition">ticket counts</span>):
- Get a quick overview with [`/events/:id/ticket-counts`](#operation/fetchAllTicketCounts)
- Or get a full insight by calling these endpoints:
    1. [`/events/:id/categories`](#operation/fetchAllEventsCategories)
    2. [`/events/:id/channels`](#operation/fetchAllEventsChannels)
    3. [`/events/:id/ticket-counts/detailed`](#operation/fetchAllDetailedTicketCounts)

Eventually, you may also want to [fetch the promotions](#tag/Promotions). A <span class="definition">promotion</span> can be any leverage on the sales: ads, marketing campaigns, buzz or news around the event, etc. A promotion can be linked to any combination of events and/or series.

## Actions

### fetchAllEvents
Find all events


```js
pims.fetchAllEvents({}, context)
```

#### Input
* input `object`
  * label `string`: Find only the events whose label contains this value.
  * from_datetime `string`: Find only the events starting after this date.
  * to_datetime `string`: Find only the events starting before this date.
  * city `string`: Find only the events whose venue city (or metropolitan area) contains this value.
  * sort `string` (values: label, -label, datetime, -datetime, venue_label, -venue_label, city, -city): Sort the events in the corresponding order.
  * page_size `integer`: Pagination size, i.e. maximum number of items to be displayed in the response.
  * Accept-Language `string` (values: de, en, fr): Language used for the translatable labels.

#### Output
* output `array`
  * items [EventsEntity](#eventsentity)

### fetchOneEvent
Get one event by ID


```js
pims.fetchOneEvent({
  "event_id": 0
}, context)
```

#### Input
* input `object`
  * event_id **required** `integer`: ID of the targeted event.
  * Accept-Language `string` (values: de, en, fr): Language used for the translatable labels.

#### Output
* output [EventsEntity](#eventsentity)

### fetchAllEventsCapacities
Find all capacities for one event


```js
pims.fetchAllEventsCapacities({
  "event_id": 0
}, context)
```

#### Input
* input `object`
  * event_id **required** `integer`: ID of the targeted event.
  * sort `string` (values: date, -date): Sort the capacities in the corresponding order.
  * page_size `integer`: Pagination size, i.e. maximum number of items to be displayed in the response.

#### Output
* output `array`
  * items [EventsCapacitiesEntity](#eventscapacitiesentity)

### fetchOneEventCapacity
Get one capacity by ID


```js
pims.fetchOneEventCapacity({
  "event_id": 0,
  "capacity_id": 0
}, context)
```

#### Input
* input `object`
  * event_id **required** `integer`: ID of the targeted event.
  * capacity_id **required** `integer`: ID of the targeted capacity.

#### Output
* output [EventsCapacitiesEntity](#eventscapacitiesentity)

### fetchAllEventsCategories
Find all categories for one event


```js
pims.fetchAllEventsCategories({
  "event_id": 0
}, context)
```

#### Input
* input `object`
  * event_id **required** `integer`: ID of the targeted event.
  * page_size `integer`: Pagination size, i.e. maximum number of items to be displayed in the response.

#### Output
* output `array`
  * items [EventsCategoriesEntity](#eventscategoriesentity)

### fetchOneEventCategory
Get one event category by ID


```js
pims.fetchOneEventCategory({
  "event_id": 0,
  "category_id": 0
}, context)
```

#### Input
* input `object`
  * event_id **required** `integer`: ID of the targeted event.
  * category_id **required** `number`: ID of the targeted event category.

#### Output
* output [EventsCategoriesEntity](#eventscategoriesentity)

### fetchAllEventsChannels
Find all channels for one event


```js
pims.fetchAllEventsChannels({
  "event_id": 0
}, context)
```

#### Input
* input `object`
  * event_id **required** `integer`: ID of the targeted event.
  * page_size `integer`: Pagination size, i.e. maximum number of items to be displayed in the response.

#### Output
* output `array`
  * items [EventsChannelsEntity](#eventschannelsentity)

### fetchOneEventChannel
Get one event channel by ID


```js
pims.fetchOneEventChannel({
  "event_id": 0,
  "channel_id": 0
}, context)
```

#### Input
* input `object`
  * event_id **required** `integer`: ID of the targeted event.
  * channel_id **required** `integer`: ID of the targeted event channel.

#### Output
* output [EventsChannelsEntity](#eventschannelsentity)

### fetchAllEventsPromotions
Find all promotions for one event


```js
pims.fetchAllEventsPromotions({
  "event_id": 0
}, context)
```

#### Input
* input `object`
  * event_id **required** `integer`: ID of the targeted event.
  * label `string`: Find only the promotions whose label contains this value.
  * from_date `string`: Find only the promotions starting after this date.
  * to_date `string`: Find only the promotions ending before this date.
  * type `string`: Find only the promotions whose type is equal to this value.
  * family `string`: Find only the promotions whose family is equal to this value.
  * sort `string` (values: date, -date, total_cost, -total_cost): Sort the promotions in the corresponding order.
  * page_size `integer`: Pagination size, i.e. maximum number of items to be displayed in the response.
  * Accept-Language `string` (values: de, en, fr): Language used for the translatable labels.

#### Output
* output `array`
  * items [PromotionsEntity](#promotionsentity)

### fetchAllTicketCounts
Find all ticket counts for one event


```js
pims.fetchAllTicketCounts({
  "event_id": 0
}, context)
```

#### Input
* input `object`
  * event_id **required** `integer`: ID of the targeted event.
  * from_date `string`: Find only the ticket counts after this date.
  * to_date `string`: Find only the ticket counts before this date.
  * sort `string` (values: date, -date): Sort the ticket counts in the corresponding order.
  * page_size `integer`: Pagination size, i.e. maximum number of items to be displayed in the response.

#### Output
* output `array`
  * items [TicketCountsEntity](#ticketcountsentity)

### fetchAllDetailedTicketCounts
Find all detailed ticket counts for one event


```js
pims.fetchAllDetailedTicketCounts({
  "event_id": 0
}, context)
```

#### Input
* input `object`
  * event_id **required** `integer`: ID of the targeted event.
  * from_date `string`: Find only the ticket counts after this date.
  * to_date `string`: Find only the ticket counts before this date.
  * sort `string` (values: date, -date): Sort the ticket counts in the corresponding order.
  * page_size `integer`: Pagination size, i.e. maximum number of items to be displayed in the response.

#### Output
* output `array`
  * items [TicketCountsDetailedEntity](#ticketcountsdetailedentity)

### fetchOneDetailedTicketCoun
Get one detailed ticket count by ID


```js
pims.fetchOneDetailedTicketCoun({
  "event_id": 0,
  "ticket_count_id": 0
}, context)
```

#### Input
* input `object`
  * event_id **required** `integer`: ID of the targeted event.
  * ticket_count_id **required** `integer`: ID of the targeted ticket count.

#### Output
* output [TicketCountsDetailedEntity](#ticketcountsdetailedentity)

### fetchOneTicketCount
Get one ticket count by ID


```js
pims.fetchOneTicketCount({
  "event_id": 0,
  "ticket_count_id": 0
}, context)
```

#### Input
* input `object`
  * event_id **required** `integer`: ID of the targeted event.
  * ticket_count_id **required** `integer`: ID of the targeted ticket count.

#### Output
* output [TicketCountsEntity](#ticketcountsentity)

### fetchAllPromotions
Find all promotions


```js
pims.fetchAllPromotions({}, context)
```

#### Input
* input `object`
  * label `string`: Find only the promotions whose label contains this value.
  * from_date `string`: Find only the promotions starting after this date.
  * to_date `string`: Find only the promotions ending before this date.
  * type `string`: Find only the promotions whose type is equal to this value.
  * family `string`: Find only the promotions whose family is equal to this value.
  * sort `string` (values: date, -date, total_cost, -total_cost): Sort the promotions in the corresponding order.
  * page_size `integer`: Pagination size, i.e. maximum number of items to be displayed in the response.
  * Accept-Language `string` (values: de, en, fr): Language used for the translatable labels.

#### Output
* output `array`
  * items [PromotionsEntity](#promotionsentity)

### fetchOnePromotion
Get one promotion by ID


```js
pims.fetchOnePromotion({
  "promotion_id": 0
}, context)
```

#### Input
* input `object`
  * promotion_id **required** `integer`: ID of the targeted promotion.
  * Accept-Language `string` (values: de, en, fr): Language used for the translatable labels.

#### Output
* output [PromotionsEntity](#promotionsentity)

### fetchAllSeries
Find all series


```js
pims.fetchAllSeries({}, context)
```

#### Input
* input `object`
  * label `string`: Find only the venues whose label contains this value.
  * from_date `string`: Find only the series starting after this date.
  * to_date `string`: Find only the series ending before this date.
  * type `string` (values: TOU, LGS): Find only the series whose type is equal to this value.
  * sort `string` (values: label, -label, first_date, -first_date, last_date, -last_date): Sort the series in the corresponding order.
  * page_size `integer`: Pagination size, i.e. maximum number of items to be displayed in the response.
  * Accept-Language `string` (values: de, en, fr): Language used for the translatable labels.

#### Output
* output `array`
  * items [SeriesEntity](#seriesentity)

### fetchOneSeries
Get one series by ID


```js
pims.fetchOneSeries({
  "series_id": 0
}, context)
```

#### Input
* input `object`
  * series_id **required** `integer`: ID of the targeted series.
  * Accept-Language `string` (values: de, en, fr): Language used for the translatable labels.

#### Output
* output [SeriesEntity](#seriesentity)

### fetchAllSeriesEvents
Find all events for one series


```js
pims.fetchAllSeriesEvents({
  "series_id": 0
}, context)
```

#### Input
* input `object`
  * series_id **required** `integer`: ID of the targeted series.
  * from_datetime `string`: Find only the events starting after this date.
  * to_datetime `string`: Find only the events starting before this date.
  * city `string`: Find only the events whose venue city (or metropolitan area) contains this value.
  * sort `string` (values: label, -label, datetime, -datetime, venue_label, -venue_label, city, -city): Sort the events in the corresponding order.
  * page_size `integer`: Pagination size, i.e. maximum number of items to be displayed in the response.
  * Accept-Language `string` (values: de, en, fr): Language used for the translatable labels.

#### Output
* output `array`
  * items [EventsEntity](#eventsentity)

### fetchAllSeriesPromotions
Find all promotions for one series


```js
pims.fetchAllSeriesPromotions({
  "series_id": 0
}, context)
```

#### Input
* input `object`
  * series_id **required** `integer`: ID of the targeted series.
  * label `string`: Find only the promotions whose label contains this value.
  * from_date `string`: Find only the promotions starting after this date.
  * to_date `string`: Find only the promotions ending before this date.
  * type `string`: Find only the promotions whose type is equal to this value.
  * family `string`: Find only the promotions whose family is equal to this value.
  * sort `string` (values: date, -date, total_cost, -total_cost): Sort the promotions in the corresponding order.
  * page_size `integer`: Pagination size, i.e. maximum number of items to be displayed in the response.
  * Accept-Language `string` (values: de, en, fr): Language used for the translatable labels.

#### Output
* output `array`
  * items [PromotionsEntity](#promotionsentity)

### fetchAllVenues
Find all venues


```js
pims.fetchAllVenues({}, context)
```

#### Input
* input `object`
  * label `string`: Find only the venues whose label contains this value.
  * city `string`: Find only the venues whose city contains this value.
  * country_code `string`: Find only the venues whose country_code is equal to this value.
  * type `string` (values: SAL, FES): Find only the venues whose type is equal to this value.
  * sort `string` (values: label, -label, city, -city, country, -country): Sort the venues in the corresponding order.
  * page_size `integer`: Pagination size, i.e. maximum number of items to be displayed in the response.
  * Accept-Language `string` (values: de, en, fr): Language used for the translatable labels.

#### Output
* output `array`
  * items [VenuesEntity](#venuesentity)

### fetchOneVenue
Get one venue by ID


```js
pims.fetchOneVenue({
  "venue_id": 0
}, context)
```

#### Input
* input `object`
  * venue_id **required** `integer`: ID of the targeted venue.
  * Accept-Language `string` (values: de, en, fr): Language used for the translatable labels.

#### Output
* output [VenuesEntity](#venuesentity)

### fetchAllVenuesEvents
Find all events for one venue


```js
pims.fetchAllVenuesEvents({
  "venue_id": 0
}, context)
```

#### Input
* input `object`
  * venue_id **required** `integer`: ID of the targeted venue.
  * from_datetime `string`: Find only the events starting after this date.
  * to_datetime `string`: Find only the events starting before this date.
  * city `string`: Find only the events whose venue city (or metropolitan area) contains this value.
  * sort `string` (values: label, -label, datetime, -datetime, venue_label, -venue_label, city, -city): Sort the events in the corresponding order.
  * page_size `integer`: Pagination size, i.e. maximum number of items to be displayed in the response.
  * Accept-Language `string` (values: de, en, fr): Language used for the translatable labels.

#### Output
* output `array`
  * items [EventsEntity](#eventsentity)



## Definitions

### Error401
* Error401 `object`
  * detail **required** `string`: Description of the error.
  * status **required** `integer`: Status code of the error.
  * title **required** `string`: Message corresponding to the status code.
  * type **required** `string`: Link to RFC 2616 about status codes definitions.

### Error403
* Error403 `object`
  * detail **required** `string`: Description of the error.
  * status **required** `integer`: Status code of the error.
  * title **required** `string`: Message corresponding to the status code.
  * type **required** `string`: Link to RFC 2616 about status codes definitions.

### Error404
* Error404 `object`
  * detail **required** `string`: Description of the error.
  * status **required** `integer`: Status code of the error.
  * title **required** `string`: Message corresponding to the status code.
  * type **required** `string`: Link to RFC 2616 about status codes definitions.

### Error422
* Error422 `object`
  * detail **required** `string`: Description of the error.
  * status **required** `integer`: Status code of the error.
  * title **required** `string`: Message corresponding to the status code.
  * type **required** `string`: Link to RFC 2616 about status codes definitions.

### Error500
* Error500 `object`
  * detail **required** `string`: Description of the error.
  * status **required** `integer`: Status code of the error.
  * title **required** `string`: Message corresponding to the status code.
  * type **required** `string`: Link to RFC 2616 about status codes definitions.

### EventsCapacitiesEntity
* Event capacity `object`
  * categories **required** `array`: Array of categories with their detailed capacities.
    * items `object`
      * comps **required** `integer`: Number of comps in the category.
      * holds **required** `integer`: Number of *holds* in the category. <span class="definition">Holds</span> are seats/places that are not in sale at the date of the capacity, but will eventually be later.
      * id **required** `integer`: Unique ID of the event category.
      * kills **required** `integer`: Number of *kills* in the category. <span class="definition">Kills</span> are seats/places that will not be sold for technical reasons.
      * sellable_capacity **required** `integer`: Number of sellable seats/places in the category. This is calculated by the formula: `total_capacity - kills - comps - holds`.
      * total_capacity **required** `integer`: Total number of seats/places in the category.
  * date **required** `string`: Date from which the capacity is active.
  * id **required** `integer`: Unique ID of the event capacity.

### EventsCategoriesEntity
* Event category `object`
  * category_id **required** `integer`: Unique ID of the category.
  * id **required** `integer`: Unique ID of the event category.
  * label **required** `string`: Full label of the category.
  * price_ranges `array`: Array of price ranges.
    * items `object`
      * base_price **required** `number`: Base price of the price range (i.e. including VAT but excluding all commissions).
      * currency **required** `string`: Currency of the prices.
      * id **required** `integer`: ID of the price range.
      * label **required** `string`: Full label of the price range.
      * public_price **required** `number`: Public price of the price range (i.e. including VAT and all commissions).
      * short_label **required** `string`: Short label of the price range (generally less than 5 characters).
  * short_label **required** `string`: Short label of the category (generally less than 5 characters).

### EventsChannelsEntity
* Event channel `object`
  * id **required** `integer`: Unique ID of the event channel.
  * label **required** `string`: Full label of the channel.
  * short_label **required** `string`: Short label of the channel (generally less than 5 characters).

### EventsEntity
* Event `object`
  * break_even `integer`: Value of the break-even for the event.
  * cancellation_date `string`: Date the event was canceled.
  * contract **required** `object`: Contract of the series.
    * partner **required** `object`: Contract partner.
      * id **required** `integer`: Unique ID identifying the contract partner.
      * label **required** `string`: Label of the contract partner.
    * type **required** `object`: Contract type.
      * id **required** `string` (values: PRO, COP, PLO, COR, CES): String identifying the contract type.
      * label **required** `string`: Label of the contract type. This value is translated according to the 'Accept-Language' header.
  * costing_capacity `integer`: Costing capacity of the event.
  * creation_timestamp **required** `integer`: Timestamp for when the venue was created in the customer's database.
  * currency `string`: Currency of the prices.
  * datetime **required** `string`: Datetime of the event (relative to the timezone of the venue).
  * free **required** `boolean`: Whether this event is free or not.
  * general_sales_date `string`: Date the event went on general sales (relative to the timezone of the venue).
  * id **required** `integer`: Unique ID of the event.
  * input_type **required** `object`: Input type of the event.
    * id **required** `string` (values: DET, GLO): String identifying the input type of the event.
    * label **required** `string`: Label of the input type. This value is translated according to the 'Accept-Language' header.
  * label **required** `string`: Label of the event.
  * last_update_timestamp **required** `integer`: Timestamp for when the venue was last updated in the customer's database.
  * max_capacity `integer`: Maximum capacity for the venue in which the event occurs.
  * presales_date `string`: Date the event went on presales (relative to the timezone of the venue).
  * series_id **required** `integer`: ID of the series the event belongs to.
  * sold_out_date `string`: Date the event was sold out.
  * venue **required** [VenuesEntity](#venuesentity)

### PromotionsEntity
* Promotion `object`
  * applied_to **required** `array`: List of events and/or series where the promotion is applied. A promotion can be applied on several events, and its costs can be split between those events.
    * items `object`
      * event_id `integer`: ID of the event the promotion applies to. This property is exclusive with 'series_id': if defined, then 'series_id' will not be displayed.
      * quantity `number`: Quantity share of the promotion devoted to this event/series.
      * series_id `integer`: ID of the series the promotion applies to. This property is exclusive with 'event_id': if defined, then 'event_id' will not be displayed.
      * unit_cost `number`: Unit cost share of the promotion devoted to this event/series. The total cost of the share can be calculated with: quantity × unit_cost.
      * valorized_quantity `number`: Valorized quantity share of the promotion devoted to this event/series.
      * valorized_unit_cost `number`: Valorized unit cost share of the promotion devoted to this event/series. The total valorized cost of the share can be calculated with: valorized_quantity × valorized_unit_cost.
  * comments **required** `string`: Comments on the promotion.
  * cost **required** `object`: Cost of the promotion.
    * currency `string`: Currency of the unit_cost (<a href='https://en.wikipedia.org/wiki/ISO_4217#Active_codes'>ISO 4212 alphabetic code</a>).
    * exchange `string`: What was offered in exchange of the promotion.
    * quantity `number`: Quantity of the promotion (see unit_cost).
    * state `object`: State of the promotion cost.
      * id **required** `string` (values: PRE, ENG, FAC, PAY): String identifying the state of the promotion cost.
      * label **required** `string`: Label of the state of the promotion cost. This value is translated according to the 'Accept-Language' header.
    * type **required** `object`: Type of the promotion cost.
      * id **required** `string` (values: PAY, ECH, GRA): String identifying the type of the promotion cost.
      * label **required** `string`: Label of the type of the promotion cost. This value is translated according to the 'Accept-Language' header.
    * unit_cost `number`: Unit cost of the promotion. The total cost of the promotion can be calculated with: quantity × unit_cost.
    * valorized_quantity `number`: Valorized quantity of the promotion (see valorized_unit_cost).
    * valorized_unit_cost `number`: Valorized unit cost of the promotion. The total valorized cost of the promotion can be calculated with: valorized_quantity × valorized_unit_cost.
  * end_date **required** `string`: Date the promotion ends. (If null, has the same value as start_date.)
  * file `string`: File associated to the promotion.
  * id **required** `integer`: Unique ID of the promotion.
  * label **required** `string`: Label of the promotion.
  * start_date **required** `string`: Date the promotion begins.
  * supplier **required** `object`: Supplier of the promotion.
    * id **required** `integer`: Unique ID of the supplier.
    * label **required** `string`: Name of the supplier.
  * type **required** `object`: Type of the promotion.
    * family **required** `object`: Family the promotion type belongs to.
      * id **required** `string`: String identifying the promotion family.
      * label **required** `string`: Label of the promotion family. This value is translated according to the 'Accept-Language' header.
    * id **required** `string`: String identifying the promotion type.
    * label **required** `string`: Label of the promotion type. This value is translated according to the 'Accept-Language' header.

### SeriesEntity
* Series `object`
  * contract `object`: Contract of the series.
    * partner `object`: Contract partner.
      * id **required** `integer`: Unique ID identifying the contract partner.
      * label **required** `string`: Label of the contract partner.
    * type **required** `object`: Contract type.
      * id **required** `string` (values: PRO, COP, PLO, COR, CES): String identifying the contract type.
      * label **required** `string`: Label of the contract type. This value is translated according to the 'Accept-Language' header.
  * costing_capacity `integer`: Value of the costing capacity.
  * creation_timestamp **required** `integer`: Timestamp for when the series was created in the customer's database.
  * first_date **required** `string`: Date of the first event in the series.
  * id **required** `integer`: Unique ID of the series.
  * label **required** `string`: Label of the series.
  * last_date **required** `string`: Date of the last event in the series.
  * last_update_timestamp **required** `integer`: Timestamp for when the series was last updated in the customer's database.
  * type **required** `object`: Type of the series
    * id **required** `string` (values: TOU, LGS): String identifying the series type.
    * label **required** `string`: Label of the series type. This value is translated according to the 'Accept-Language' header.
  * venue [VenuesEntity](#venuesentity)

### TicketCountsDetailedEntity
* Detailed ticket count `object`
  * channels **required** `array`: Array of channels where the sales were made.
    * items `object`
      * categories **required** `array`: Array of categories which where sold.
        * items `object`
          * id **required** `integer`: ID of the category.
          * price_ranges **required** `array`: Array of price ranges which where sold.
            * items `object`
              * count **required** `integer`: Detailed ticket count (= number of sold tickets for the current channel/category/price range).
              * id **required** `integer`: ID the price range.
      * id **required** `integer`: ID of the channel.
  * comment **required** `string`: Comment for the ticket count.
  * date **required** `string`: Date of the ticket count.
  * final **required** `boolean`: Whether this ticket count is the last and final one of its event or not. If it is, it means that no further ticket counts will be added for the event it belongs to.
  * id **required** `integer`: Unique ID of the ticket count.

### TicketCountsEntity
* Ticket count `object`
  * comment **required** `string`: Comment for the ticket count.
  * count **required** `integer`: Ticket count (i.e. number of sold tickets).
  * currency `string`: Currency of the gross (<a href='https://en.wikipedia.org/wiki/ISO_4217#Active_codes'>ISO 4212 alphabetic code</a>).
  * date **required** `string`: Date of the ticket count.
  * final **required** `boolean`: Whether this ticket count is the last and final one of its event or not. If it is, it means that no further ticket counts will be added for the event it belongs to.
  * gross `number`: Gross (i.e. income for the sold tickets, including VAT but excluding all commissions).
  * id **required** `integer`: Unique ID of the ticket count.

### VenuesEntity
* Venue `object`
  * alternative_labels `array`: Array of alternative/old names of the venue.
    * items `string`
  * city **required** `string`: City in which the venue is.
  * country_code **required** `string`: Country in which the venue is (<a href='https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3'>ISO 3166-1 alpha-3 code</a>).
  * creation_timestamp **required** `integer`: Timestamp for when the venue was created in the customer's database.
  * first_address **required** `string`: First address field of the venue.
  * id **required** `integer`: Unique ID of the venue.
  * label **required** `string`: Name of the venue.
  * last_update_timestamp **required** `integer`: Timestamp for when the venue was last updated in the customer's database.
  * major_city **required** `string`: Major city or metropolitan area the venue belongs to.
  * second_address **required** `string`: Second address field of the venue.
  * type **required** `object`
    * id **required** `string` (values: SAL, FES): String identifying the venue type.
    * label **required** `string`: Label of the venue type. This value is translated according to the 'Accept-Language' header.
  * zip_code **required** `string`: ZIP code of the venue.


