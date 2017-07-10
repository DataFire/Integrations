# @datafire/bikewise
<p>This is an API for accessing information about bicycling related incidents. You can find the source code on <a href="https://github.com/bikeindex/bikewise">GitHub</a>.</p>


## Operation: v2.incidents.get

<p>If you’d like more detailed information about bike incidents, use this endpoint. For mapping, <code>locations</code> is probably a better bet.</p>

<p><strong>Notes on location searching</strong>: <br />
- <code>proximity</code> accepts an ip address, an address, zipcode, city, or latitude,longitude - i.e. <code>70.210.133.87</code>, <code>210 NW 11th Ave, Portland, OR</code>, <code>60647</code>, <code>Chicago, IL</code>, and <code>45.521728,-122.67326</code> are all acceptable<br />
- <code>proximity_square</code> sets the length of the sides of the square to find matches inside of. The square is centered on the location specified by <code>proximity</code>. It defaults to 100.</p>


### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "page": {
      "type": "integer",
      "format": "int32",
      "description": "<p>Page of results to fetch.</p>\n"
    },
    "per_page": {
      "type": "integer",
      "format": "int32",
      "description": "<p>Number of results to return per page.</p>\n"
    },
    "occurred_before": {
      "type": "integer",
      "format": "int32",
      "description": "<p>End of period</p>\n"
    },
    "occurred_after": {
      "type": "integer",
      "format": "int32",
      "description": "<p>Start of period</p>\n"
    },
    "incident_type": {
      "type": "string",
      "description": "<p>Only incidents of specific type</p>\n",
      "enum": [
        "crash",
        "hazard",
        "theft",
        "unconfirmed",
        "infrastructure_issue",
        "chop_shop"
      ]
    },
    "proximity": {
      "type": "string",
      "description": "<p>Center of location for proximity search</p>\n"
    },
    "proximity_square": {
      "type": "integer",
      "format": "int32",
      "description": "<p>Size of the proximity search</p>\n"
    },
    "query": {
      "type": "string",
      "description": "<p>Full text search of incidents</p>\n"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: v2.incidents.id.get


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "format": "int32",
      "description": "<p>Incident ID</p>\n"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: v2.locations.get
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


### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "occurred_before": {
      "type": "integer",
      "format": "int32",
      "description": "<p>End of period</p>\n"
    },
    "occurred_after": {
      "type": "integer",
      "format": "int32",
      "description": "<p>Start of period</p>\n"
    },
    "incident_type": {
      "type": "string",
      "description": "<p>Only incidents of specific type</p>\n",
      "enum": [
        "crash",
        "hazard",
        "theft",
        "unconfirmed",
        "infrastructure_issue",
        "chop_shop"
      ]
    },
    "proximity": {
      "type": "string",
      "description": "<p>Center of location for proximity search</p>\n"
    },
    "proximity_square": {
      "type": "integer",
      "format": "int32",
      "description": "<p>Size of the proximity search</p>\n"
    },
    "query": {
      "type": "string",
      "description": "<p>Full text search of incidents</p>\n"
    },
    "limit": {
      "type": "integer",
      "format": "int32",
      "description": "<p>Max number of results to return. Defaults to 100</p>\n"
    },
    "all": {
      "type": "boolean",
      "description": "<p>Give ‘em all to me. Will ignore limit</p>\n"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: v2.locations.markers.get
<p>This behaves exactly like the root <code>locations</code> endpoint, but returns <a href="https://github.com/mapbox/simplestyle-spec">simplestyled markers</a> (<a href="https://www.mapbox.com/guides/markers/#simple-style">mapbox styled markers</a>)</p>

<p><strong>Go forth and make maps!</strong></p>


### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "occurred_before": {
      "type": "integer",
      "format": "int32",
      "description": "<p>End of period</p>\n"
    },
    "occurred_after": {
      "type": "integer",
      "format": "int32",
      "description": "<p>Start of period</p>\n"
    },
    "incident_type": {
      "type": "string",
      "description": "<p>Only incidents of specific type</p>\n",
      "enum": [
        "crash",
        "hazard",
        "theft",
        "unconfirmed",
        "infrastructure_issue",
        "chop_shop"
      ]
    },
    "proximity": {
      "type": "string",
      "description": "<p>Center of location for proximity search</p>\n"
    },
    "proximity_square": {
      "type": "integer",
      "format": "int32",
      "description": "<p>Size of the proximity search</p>\n"
    },
    "query": {
      "type": "string",
      "description": "<p>Full text search of incidents</p>\n"
    },
    "limit": {
      "type": "integer",
      "format": "int32",
      "description": "<p>Max number of results to return. Defaults to 100</p>\n"
    },
    "all": {
      "type": "boolean",
      "description": "<p>Give ‘em all to me. Will ignore limit</p>\n"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
