# @datafire/globalwinescore

Client library for GlobalWineScore API Documentation

## Installation and Usage
```bash
npm install --save @datafire/globalwinescore
```
```js
let globalwinescore = require('@datafire/globalwinescore').create({
  TokenAuthentication: ""
});

.then(data => {
  console.log(data);
});
```

## Description



The GlobalWineScore API is designed as a RESTful API, providing several resources and methods depending on your usage plan.

For further information please refer to <a href="https://www.globalwinescore.com/plans" target="_blank">our plans</a>.

# Authentication
The API uses token-based authentication.
In order to authenticate your requests, you need to include a specific header in each of your requests:

```
Authorization: Token {YOUR-API-TOKEN}
```
The word <b>Token</b> must be written. Your requests must also use the <b>HTTPS</b> protocol.

If you don't have a token yet, you need to apply for one [here](https://www.globalwinescore.com/api/).

Your personal token can be found under the <a href="https://www.globalwinescore.com/account/api/" target="_blank">My account > API</a> section of the GlobalWineScore website

# Format
The API provides several rendering formats which you can control using the `Accept` header or `format` query parameter.

- JSON (default): no header or `Accept: application/json`
- XML: `Accept: application/xml`
# Rate limiting
For API requests, the rate limit allows for up to 10 requests per minute.

# Error handling

Whether a request succeeded is indicated by the HTTP status code. A 2xx status code indicates success, whereas a 4xx status code indicates failure.

When a request fails, the response body is still JSON, but always contains a `detail` field with a description of the error, which you can inspect for debugging.

For example, trying to access the API without proper authentication will return code 403 along with the message:

`{"detail": "Authentication credentials were not provided."}`

Found a bug ? send us an email at <a href="mailto:api@globalwinescore.com">api@globalwinescore.com</a>

# Ordering

At the moment, GlobalWineScores may be sorted by `date` and `score`. Use "-"
to sort in descending order.

# Continuous synchronization

If you need to synchronize your database with our API, you can query our API using `?ordering=-date` to get the newest scores first, which means you won't have to crawl the whole catalog every time :-)

# Quick search interface
If you need to search our catalog (e.g. to align it with yours), we're providing you with a handy interface accessible here: <a href="https://api.globalwinescore.com/search/" target="_blank">https://api.globalwinescore.com/search/</a>

You need to be logged in (email/password) to access this page, but other than that you can share it with anyone in your team and start searching right away !

# Resources

The details about available endpoints can be found below.
You can click on each endpoint to find information about their parameters.


## Actions

### listHistoricalGWS
Returns all available GWS


```js
globalwinescore.listHistoricalGWS({}, context)
```

#### Input
* input `object`
  * Authorization `string`
  * wine_id `array`: The exact `id` of the wine. Can be used multiple times (e.g `?wine_id=114959&wine_id=114952`) <br/> If you need to find the `wine_id` for your wines, use our <a href="https://api.globalwinescore.com/search/" target="_blank">search page</a>
  * vintage `string`: The vintage you want to search against.
  * color `string` (values: red, white, pink): The lowercase color of the wine.
  * is_primeurs `boolean`: Only show the <a href="See https://en.wikipedia.org/wiki/En_primeur">en primeur</a> GlobalWineScores
  * lwin `string`: L-WIN wine identifier (See definition <a href="https://www.liv-ex.com/lwin/" target="_blank">here</a>)
  * lwin_11 `string`: L-WIN wine/vintage identifier (See definition <a href="https://www.liv-ex.com/lwin/" target="_blank">here</a>)
  * limit `integer`: Number of results to return per page.
  * offset `integer`: The initial index from which to return the results.
  * ordering `string` (values: date, -date, score, -score): Which field to use when ordering the results.

#### Output
*Output schema unknown*

### globalwinescores.latest.get
Returns the latest GWS available per wine/vintage.


```js
globalwinescore.globalwinescores.latest.get({}, context)
```

#### Input
* input `object`
  * Authorization `string`
  * wine_id `array`: The exact `id` of the wine. Can be used multiple times (e.g `?wine_id=114959&wine_id=114952`) <br/> If you need to find the `wine_id` for your wines, use our <a href="https://api.globalwinescore.com/search/" target="_blank">search page</a>
  * vintage `string`: The vintage you want to search against.
  * color `string` (values: red, white, pink): The lowercase color of the wine.
  * is_primeurs `boolean`: Only show the <a href="See https://en.wikipedia.org/wiki/En_primeur">en primeur</a> GlobalWineScores
  * lwin `string`: L-WIN wine identifier (See definition <a href="https://www.liv-ex.com/lwin/" target="_blank">here</a>)
  * lwin_11 `string`: L-WIN wine/vintage identifier (See definition <a href="https://www.liv-ex.com/lwin/" target="_blank">here</a>)
  * limit `integer`: Number of results to return per page.
  * offset `integer`: The initial index from which to return the results.
  * ordering `string` (values: date, -date, score, -score): Which field to use when ordering the results.

#### Output
*Output schema unknown*



## Definitions

*This integration has no definitions*
