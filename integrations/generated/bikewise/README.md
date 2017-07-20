# @datafire/bikewise

Client library for BikeWise API v2

## Installation and Usage
```bash
npm install --save datafire @datafire/bikewise
```

```js
let datafire = require('datafire');
let bikewise = require('@datafire/bikewise').actions;
let context = new datafire.Context();

bikewise.v2.locations.markers.get({}, context).then(data => {
  console.log(data);
})
```

## Description
<p>This is an API for accessing information about bicycling related incidents. You can find the source code on <a href="https://github.com/bikeindex/bikewise">GitHub</a>.</p>


## Actions
### v2.incidents.get

<p>If you’d like more detailed information about bike incidents, use this endpoint. For mapping, <code>locations</code> is probably a better bet.</p>

<p><strong>Notes on location searching</strong>: <br />
- <code>proximity</code> accepts an ip address, an address, zipcode, city, or latitude,longitude - i.e. <code>70.210.133.87</code>, <code>210 NW 11th Ave, Portland, OR</code>, <code>60647</code>, <code>Chicago, IL</code>, and <code>45.521728,-122.67326</code> are all acceptable<br />
- <code>proximity_square</code> sets the length of the sides of the square to find matches inside of. The square is centered on the location specified by <code>proximity</code>. It defaults to 100.</p>



```js
bikewise.v2.incidents.get({}, context)
```


### v2.incidents.id.get



```js
bikewise.v2.incidents.id.get({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - <p>Incident ID</p>

### v2.locations.get
<p><strong>This endpoint behaves exactly like</strong> <code>incidents</code>, but returns a valid geojson <code>FeatureCollection</code> that looks like this:</p>

<pre><code>{
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: {
      id: 4474199,
      type: "Theft",
      occurred_at: 1428536937
    },
      geometry: {
      type: "Point",
      coordinates: [ -122.6244177, 45.5164386 ]
    }
  }
}
</code></pre>

<p>It doesn’t paginate. If you pass the <code>all</code> parameter it returns all matches (which can be big, &gt; 4mb), otherwise it returns the 100 most recent.</p>

<p><strong>Go forth and make maps!</strong></p>



```js
bikewise.v2.locations.get({}, context)
```


### v2.locations.markers.get
<p>This behaves exactly like the root <code>locations</code> endpoint, but returns <a href="https://github.com/mapbox/simplestyle-spec">simplestyled markers</a> (<a href="https://www.mapbox.com/guides/markers/#simple-style">mapbox styled markers</a>)</p>

<p><strong>Go forth and make maps!</strong></p>



```js
bikewise.v2.locations.markers.get({}, context)
```


