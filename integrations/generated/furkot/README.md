# @datafire/furkot

Client library for Furkot Trips

## Installation and Usage
```bash
npm install --save datafire @datafire/furkot
```

```js
let datafire = require('datafire');
let furkot = require('@datafire/furkot').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: "",
});

furkot.trip.get({}).then(data => {
  console.log(data);
})
```

## Description
Furkot provides Rest API to access user trip data.
Using Furkot API an application can list user trips and display stops for a specific trip.
Furkot API uses OAuth2 protocol to authorize applications to access data on behalf of users.


## Actions
### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
furkot.oauthCallback({
  "code": ""
}, context)
```

#### Parameters
* code (string) **required**

### oauthRefresh
Exchange a refresh_token for an access_token


```js
furkot.oauthRefresh(null, context)
```

#### Parameters
*This action has no parameters*

### trip.get
list user's trips


```js
furkot.trip.get(null, context)
```

#### Parameters
*This action has no parameters*

### trip.trip_id.stop.get
list stops for a trip identified by {trip_id}


```js
furkot.trip.trip_id.stop.get({
  "trip_id": ""
}, context)
```

#### Parameters
* trip_id (string) **required** - id of the trip

