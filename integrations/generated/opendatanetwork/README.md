# @datafire/opendatanetwork

Client library for ODN

## Installation and Usage
```bash
npm install --save @datafire/opendatanetwork
```
```js
let opendatanetwork = require('@datafire/opendatanetwork').create();

opendatanetwork.search.v1.dataset.get({}).then(data => {
  console.log(data);
});
```

## Description

The Socrata OpenDataNetwork (ODN) REST API exposes public data, often continuosly updated and enhanced, from many thousands of public
government and non profit agencies.

Much of this data originating from independent sources is fused together to create new, and often
powerful, entity level data. The API, in addition to search and autosuggest capabilities for finding datasets,
enables data based comparisons across geographical regions such as states, counties, metropolitan areas,
cities and zip codes using highly vetted data providers such as US Census, BEA, HUD and others. Comparison data
is preformatted for easy and efficient display on a chart, graph or interactive map.

The API also exposes data organized by narrative style questions a human might ask. The questions can
be rapidly found using an autosuggest style index, and then used to directly access all data needed to
thoroughly and authoritatively answer the question. Retrieved data includes time series (temporally aligned),
tabular, map heavy (includes spatial boundaries), and auto generated unstructured descriptive text.

The ODN API does not duplicate API endpoints or services provided by public sector agencies, but rather,
returns context relevant pre-populated REST URLs, when appropriate, so the caller can access data
directly from the source.

The [open source](http://github.com/socrata/odn-backend) API powers [OpenDataNetwork.com](http://OpenDataNetwork.com), an [open source](http://github.com/socrata/opendatanetwork.com)
site; the site highlights myriad uses and provides API badges with contextually relevant API example
REST endpoints and documentation pointers.

Finally, we continuously add new dat sources which appear automatically in the API, so if your favorite data
source is not available, check back soon. You can also join us [HERE](http://www.opendatanetwork.com/join-open-data-network)
and receive updates or let us know which data sources you are most interested in.

## App Tokens

Registering for and including a [Socrata application token](https://dev.socrata.com/docs/app-tokens.html)
is _required_ for the ODN API. They can be passed either using the `app_token` parameter
or the `X-App-Token` HTTP header.

## Actions

### data.v1.availability.get
Find all available data for some entities


```js
opendatanetwork.data.v1.availability.get({
  "entity_id": ""
}, context)
```

#### Input
* input `object`
  * entity_id **required** `string`: Comma separated list of entity IDs.
  * app_token `string`: The [Socrata App Token](https://dev.socrata.com/docs/app-tokens.html) to be

#### Output
*Output schema unknown*

### data.v1.constraint.variable.get
Get constraint permutations for entities


```js
opendatanetwork.data.v1.constraint.variable.get({
  "variable": "",
  "entity_id": "",
  "constraint": ""
}, context)
```

#### Input
* input `object`
  * variable **required** `string`: Full ID of the variable to retrieve.
  * entity_id **required** `string`: Comma separated list of entity IDs.
  * constraint **required** `string`: Constraint to use.
  * app_token `string`: The [Socrata App Token](https://dev.socrata.com/docs/app-tokens.html) to be

#### Output
*Output schema unknown*

### data.v1.map.new.get
Create a map


```js
opendatanetwork.data.v1.map.new.get({
  "variable": "",
  "entity_id": ""
}, context)
```

#### Input
* input `object`
  * variable **required** `string`: A single variable ID.
  * entity_id **required** `string`: A comma separated list of entity IDs.
  * constraint `string`: Values must be specified for each constraint in the dataset.
  * app_token `string`: The [Socrata App Token](https://dev.socrata.com/docs/app-tokens.html) to be

#### Output
*Output schema unknown*

### data.v1.values.get
Get values for variables


```js
opendatanetwork.data.v1.values.get({
  "variable": ""
}, context)
```

#### Input
* input `object`
  * variable **required** `string`: Comma separated list of variable IDs.
  * entity_id `string`: Comma separated list of entity IDs.
  * forecast `number`: Number of steps to forecast.
  * describe `boolean`: Whether or not to produce a description of the data.
  * format `string` (values: google): If format is set to `google`, the data frame will be formatted
  * app_token `string`: The [Socrata App Token](https://dev.socrata.com/docs/app-tokens.html) to be

#### Output
*Output schema unknown*

### entity.v1.get
Get Entities


```js
opendatanetwork.entity.v1.get({}, context)
```

#### Input
* input `object`
  * entity_id `string`: ID of the entity.
  * entity_name `string`: Name of the entity.
  * entity_type `string`: Type of the entity.
  * app_token `string`: The [Socrata App Token](https://dev.socrata.com/docs/app-tokens.html) to be

#### Output
*Output schema unknown*

### entity.v1.relation.get
Find the relatives of an entity


```js
opendatanetwork.entity.v1.relation.get({
  "relation": "",
  "entity_id": ""
}, context)
```

#### Input
* input `object`
  * relation **required** `string` (values: parent, child, sibling, peer): The type of relation to find.
  * entity_id **required** `string`: ID of the target entity.
  * variable_id `string`: If this parameter is included, only entities with data for the given
  * limit `number`: Maximum number of entities in each group.
  * app_token `string`: The [Socrata App Token](https://dev.socrata.com/docs/app-tokens.html) to be

#### Output
*Output schema unknown*

### search.v1.dataset.get
Get datasets


```js
opendatanetwork.search.v1.dataset.get({}, context)
```

#### Input
* input `object`
  * entity_id `string`: Entities to use in formulating the query.
  * dataset_id `string`: If included, the search terms of the dataset
  * limit `number`: Maximum number of results to return.
  * offset `number`: Number of results to skip.
  * app_token `string`: The [Socrata App Token](https://dev.socrata.com/docs/app-tokens.html) to be

#### Output
*Output schema unknown*

### search.v1.question.get
Get questions


```js
opendatanetwork.search.v1.question.get({
  "query": ""
}, context)
```

#### Input
* input `object`
  * query **required** `string`: String to search against.
  * limit `number`: Maximum number of results to return.
  * offset `number`: Number of results to skip.
  * app_token `string`: The [Socrata App Token](https://dev.socrata.com/docs/app-tokens.html) to be

#### Output
*Output schema unknown*

### suggest.v1.type.get
Get suggestions


```js
opendatanetwork.suggest.v1.type.get({
  "type": "",
  "query": ""
}, context)
```

#### Input
* input `object`
  * type **required** `string` (values: entity, category, publisher, dataset, question): Type of the object to find.
  * query **required** `string`: Query to match.
  * limit `number`: Maximum number of results to return.
  * variable_id `string`: This parameter is only available when suggesting entities with `type=entity`.
  * app_token `string`: The [Socrata App Token](https://dev.socrata.com/docs/app-tokens.html) to be

#### Output
*Output schema unknown*



## Definitions

### Data_Availability


### Data_Constraints


### Data_Values


### Entity_Lookup


### Entity_Relationships


### Map_Creation


### Search_Datasets


### Search_Questions


### Suggestions



