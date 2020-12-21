# @datafire/turbinelabs

Client library for Turbine Labs API

## Installation and Usage
```bash
npm install --save @datafire/turbinelabs
```
```js
let turbinelabs = require('@datafire/turbinelabs').create({
  api_key: ""
});

.then(data => {
  console.log(data);
});
```

## Description

The Turbine Labs API provides CRUD operations for core object types, and is
mostly RESTy. The easiest way to interact with the API is with
[tbnctl](https://docs.turbinelabs.io/advanced/tbnctl.html).
If you want to make direct HTTP calls, however, you can obtain an access
token using tbnctl, and then pass it in the Authorization header,
prefixed by `Token `:
```console
curl -H "Authorization: Token <access token>" https://api.turbinelabs.io/v1.0/cluster
```


## Actions

### admin.user.self.get
Request the user object for an authorized requesting account.


```js
turbinelabs.admin.user.self.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [User](#user)

### admin.user.self.access_token.access_token_key.delete
Delete the specified access token.


```js
turbinelabs.admin.user.self.access_token.access_token_key.delete({
  "access-token-key": "",
  "checksum": ""
}, context)
```

#### Input
* input `object`
  * access-token-key **required** `string`: the key of the Access Token that should be deleted
  * checksum **required** `string`: the current checksum of the user to be modified

#### Output
*Output schema unknown*

### admin.user.self.access_tokens.get
Lists Access Tokens that are configured for the authenticated user.


```js
turbinelabs.admin.user.self.access_tokens.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [MultiAccessTokens](#multiaccesstokens)

### admin.user.self.access_tokens.post
Creates a new Access Token and associates it with the authenticated user.


```js
turbinelabs.admin.user.self.access_tokens.post({
  "description": {
    "description": ""
  }
}, context)
```

#### Input
* input `object`
  * description **required** [AccessTokenDescription](#accesstokendescription)

#### Output
* output [AccessToken](#accesstoken)

### changelog.adhoc.get
Perform an adhoc query against the change log for your org. The filter is a JSON encoded FilterSum as defined in this file.


```js
turbinelabs.changelog.adhoc.get({}, context)
```

#### Input
* input `object`
  * filter `string`: Encoded FilterSums representing the query you would like to execute. See object definition for details.

#### Output
* output [PaginatedChangeDescriptions](#paginatedchangedescriptions)

### changelog.cluster_graph.clusterKey.get
Gets all changes to a cluster.



```js
turbinelabs.changelog.cluster_graph.clusterKey.get({
  "clusterKey": ""
}, context)
```

#### Input
* input `object`
  * clusterKey **required** `string`: the cluster key to see an audit log for
  * start `number`: The beginning of the window we want to see changes for; measured in
  * end `number`: The end of the window we want to see changes for; measured in
  * max_results `number`: Determines how many ChangeDescription object should be returned to
  * ref_id `string`: When paginating a Changelog request start on the entry that comes
  * direction `string` (values: before, after): If set to "before" then changes will be returned that occurred before

#### Output
* output [PaginatedChangeDescriptions](#paginatedchangedescriptions)

### changelog.domain_graph.domainKey.get
Gets all changes to a domain, the proxies that front the specified domain,
routes within that domain, the shared rules of each route, the clusters
connected via route or shared rules.



```js
turbinelabs.changelog.domain_graph.domainKey.get({
  "domainKey": ""
}, context)
```

#### Input
* input `object`
  * domainKey **required** `string`: the domain key to see an audit log for
  * start `number`: The beginning of the window we want to see changes for; measured in
  * end `number`: The end of the window we want to see changes for; measured in
  * max_results `number`: Determines how many ChangeDescription object should be returned to
  * ref_id `string`: When paginating a Changelog request start on the entry that comes
  * direction `string` (values: before, after): If set to "before" then changes will be returned that occurred before

#### Output
* output [PaginatedChangeDescriptions](#paginatedchangedescriptions)

### changelog.route_graph.routeKey.get
Gets all changes to a route, the domains associated with it, the shared
rules it references, and the clusters connected to it.



```js
turbinelabs.changelog.route_graph.routeKey.get({
  "routeKey": ""
}, context)
```

#### Input
* input `object`
  * routeKey **required** `string`: the route key to see an audit log for
  * start `number`: The beginning of the window we want to see changes for; measured in
  * end `number`: The end of the window we want to see changes for; measured in
  * max_results `number`: Determines how many ChangeDescription object should be returned to
  * ref_id `string`: When paginating a Changelog request start on the entry that comes
  * direction `string` (values: before, after): If set to "before" then changes will be returned that occurred before

#### Output
* output [PaginatedChangeDescriptions](#paginatedchangedescriptions)

### changelog.shared_rules_graph.sharedRulesKey.get
Gets all changes associated with set of Shared Rules; the domains using
it and the clusters referenced by it.



```js
turbinelabs.changelog.shared_rules_graph.sharedRulesKey.get({
  "sharedRulesKey": ""
}, context)
```

#### Input
* input `object`
  * sharedRulesKey **required** `string`: the shared rules key to see an audit log for
  * start `number`: The beginning of the window we want to see changes for; measured in
  * end `number`: The end of the window we want to see changes for; measured in
  * max_results `number`: Determines how many ChangeDescription object should be returned to
  * ref_id `string`: When paginating a Changelog request start on the entry that comes
  * direction `string` (values: before, after): If set to "before" then changes will be returned that occurred before

#### Output
* output [PaginatedChangeDescriptions](#paginatedchangedescriptions)

### changelog.zone.zoneKey.get
Retrieve all changes in the specified zone.


```js
turbinelabs.changelog.zone.zoneKey.get({
  "zoneKey": ""
}, context)
```

#### Input
* input `object`
  * zoneKey **required** `string`: the zone key to see an audit log for
  * start `number`: The beginning of the window we want to see changes for; measured in
  * end `number`: The end of the window we want to see changes for; measured in
  * max_results `number`: Determines how many ChangeDescription object should be returned to
  * ref_id `string`: When paginating a Changelog request start on the entry that comes
  * direction `string` (values: before, after): If set to "before" then changes will be returned that occurred before

#### Output
* output [PaginatedChangeDescriptions](#paginatedchangedescriptions)

### cluster.get
Get a list of clusters


```js
turbinelabs.cluster.get({}, context)
```

#### Input
* input `object`
  * filters `string`: A JSON encoded array of ClusterFilter objects. The filter is taken

#### Output
* output [MultiClusterResult](#multiclusterresult)

### cluster.post
Create a new cluster


```js
turbinelabs.cluster.post({
  "cluster": {
    "zone_key": "",
    "name": ""
  }
}, context)
```

#### Input
* input `object`
  * cluster **required** [ClusterCreate](#clustercreate)

#### Output
* output [ClusterResult](#clusterresult)

### cluster.clusterKey.delete
Delete an existing cluster


```js
turbinelabs.cluster.clusterKey.delete({
  "clusterKey": "",
  "checksum": ""
}, context)
```

#### Input
* input `object`
  * clusterKey **required** `string`: the cluster key
  * checksum **required** `string`: the current checksum of the cluster to be deleted

#### Output
* output [Empty](#empty)

### cluster.clusterKey.get
Get details for an existing cluster


```js
turbinelabs.cluster.clusterKey.get({
  "clusterKey": ""
}, context)
```

#### Input
* input `object`
  * clusterKey **required** `string`: the cluster key

#### Output
* output [ClusterResult](#clusterresult)

### cluster.clusterKey.put
Modify an existing cluster


```js
turbinelabs.cluster.clusterKey.put({
  "clusterKey": "",
  "cluster": null
}, context)
```

#### Input
* input `object`
  * clusterKey **required** `string`: the cluster key
  * cluster **required** [Cluster](#cluster)

#### Output
* output [ClusterResult](#clusterresult)

### cluster.clusterKey.instances.post
Add a new instance to a cluster


```js
turbinelabs.cluster.clusterKey.instances.post({
  "clusterKey": "",
  "instance": {}
}, context)
```

#### Input
* input `object`
  * clusterKey **required** `string`: the cluster to add the instance to
  * instance **required** [Instance](#instance)

#### Output
* output [InstanceResult](#instanceresult)

### cluster.clusterKey.instances.instanceIdentifier.delete
Remove an instance from a cluster


```js
turbinelabs.cluster.clusterKey.instances.instanceIdentifier.delete({
  "checksum": "",
  "clusterKey": "",
  "instanceIdentifier": ""
}, context)
```

#### Input
* input `object`
  * checksum **required** `string`: the current checksum of the instance to be deleted
  * clusterKey **required** `string`: the cluster to remove an instance from
  * instanceIdentifier **required** `string`: the instance to remove, identified as <host>:<port>

#### Output
* output [Empty](#empty)

### domain.get
Get a list of domains


```js
turbinelabs.domain.get({}, context)
```

#### Input
* input `object`
  * filters `string`: A JSON encoded array of DomainFilter objects. The filter is taken

#### Output
* output [MultiDomainResult](#multidomainresult)

### domain.post
Create a new domain


```js
turbinelabs.domain.post({
  "domain": {
    "zone_key": "",
    "name": "",
    "port": 0
  }
}, context)
```

#### Input
* input `object`
  * domain **required** [DomainCreate](#domaincreate)

#### Output
* output [DomainResult](#domainresult)

### domain.domainKey.delete
Delete an existing domain


```js
turbinelabs.domain.domainKey.delete({
  "domainKey": "",
  "checksum": ""
}, context)
```

#### Input
* input `object`
  * domainKey **required** `string`: the domain key
  * checksum **required** `string`: the current checksum of the domain to be deleted

#### Output
* output [Empty](#empty)

### domain.domainKey.get
Get details for a single domain


```js
turbinelabs.domain.domainKey.get({
  "domainKey": ""
}, context)
```

#### Input
* input `object`
  * domainKey **required** `string`: the domain key

#### Output
* output [DomainResult](#domainresult)

### listener.get
Get a list of listeners


```js
turbinelabs.listener.get({}, context)
```

#### Input
* input `object`
  * filters `string`: A JSON encoded array of ListenerFilter objects. The filter is taken

#### Output
* output [MultiListenerResult](#multilistenerresult)

### listener.post
Create a new listener


```js
turbinelabs.listener.post({
  "listener": {
    "name": "",
    "port": 0,
    "protocol": ""
  }
}, context)
```

#### Input
* input `object`
  * listener **required** [ListenerCreate](#listenercreate)

#### Output
* output [ListenerResult](#listenerresult)

### listener.listenerKey.delete
Delete existing listener


```js
turbinelabs.listener.listenerKey.delete({
  "listenerKey": "",
  "checksum": ""
}, context)
```

#### Input
* input `object`
  * listenerKey **required** `string`: the listener key
  * checksum **required** `string`: the current checksum of the listener to be deleted

#### Output
* output [Listener](#listener)

### listener.listenerKey.get
Get details for a single listener


```js
turbinelabs.listener.listenerKey.get({
  "listenerKey": ""
}, context)
```

#### Input
* input `object`
  * listenerKey **required** `string`: the listener key

#### Output
* output [ListenerResult](#listenerresult)

### listener.listenerKey.put
Modify an existing listener


```js
turbinelabs.listener.listenerKey.put({
  "listenerKey": "",
  "listener": null
}, context)
```

#### Input
* input `object`
  * listenerKey **required** `string`: the listener key
  * listener **required** [Listener](#listener)

#### Output
* output [ListenerResult](#listenerresult)

### proxy.get
Get a list of proxies


```js
turbinelabs.proxy.get({}, context)
```

#### Input
* input `object`
  * filters `string`: A JSON encoded array of ProxyFilter objects. The filter is taken

#### Output
* output [MultiProxyResult](#multiproxyresult)

### proxy.post
Create a new proxy


```js
turbinelabs.proxy.post({
  "proxy": {
    "zone_key": "",
    "name": ""
  }
}, context)
```

#### Input
* input `object`
  * proxy **required** [ProxyCreate](#proxycreate)

#### Output
* output [ProxyResult](#proxyresult)

### proxy.proxyKey.delete
Delete existing proxy


```js
turbinelabs.proxy.proxyKey.delete({
  "proxyKey": "",
  "checksum": ""
}, context)
```

#### Input
* input `object`
  * proxyKey **required** `string`: the proxy key
  * checksum **required** `string`: the current checksum of the proxy to be deleted

#### Output
* output [Proxy](#proxy)

### proxy.proxyKey.get
Get details for a single proxy


```js
turbinelabs.proxy.proxyKey.get({
  "proxyKey": ""
}, context)
```

#### Input
* input `object`
  * proxyKey **required** `string`: the proxy key

#### Output
* output [ProxyResult](#proxyresult)

### route.get
Get a list of routes


```js
turbinelabs.route.get({}, context)
```

#### Input
* input `object`
  * filters `string`: A JSON encoded array of RouteFilter objects. The filter is taken

#### Output
* output [MultiRouteResult](#multirouteresult)

### route.post
Create a new route


```js
turbinelabs.route.post({
  "route": {
    "domain_key": "",
    "zone_key": "",
    "path": "",
    "shared_rules_key": ""
  }
}, context)
```

#### Input
* input `object`
  * route **required** [RouteCreate](#routecreate)

#### Output
* output [RouteResult](#routeresult)

### route.routeKey.delete
Delete an existing route


```js
turbinelabs.route.routeKey.delete({
  "routeKey": "",
  "checksum": ""
}, context)
```

#### Input
* input `object`
  * routeKey **required** `string`: the route key
  * checksum **required** `string`: the current checksum of the route to be deleted

#### Output
* output [Empty](#empty)

### route.routeKey.get
Get details for an existing route


```js
turbinelabs.route.routeKey.get({
  "routeKey": ""
}, context)
```

#### Input
* input `object`
  * routeKey **required** `string`: the route key

#### Output
* output [RouteResult](#routeresult)

### route.routeKey.put
Modify an existing route


```js
turbinelabs.route.routeKey.put({
  "routeKey": "",
  "route": null
}, context)
```

#### Input
* input `object`
  * routeKey **required** `string`: the route key
  * route **required** [Route](#route)

#### Output
* output [RouteResult](#routeresult)

### shared_rules.get
Get a list of shared_rules


```js
turbinelabs.shared_rules.get({}, context)
```

#### Input
* input `object`
  * filters `string`: A JSON encoded array of SharedRulesFilter objects. The filter is taken

#### Output
* output [MultiSharedRulesResult](#multisharedrulesresult)

### shared_rules.post
Create a new shared_rules object


```js
turbinelabs.shared_rules.post({
  "shared_rules": {
    "zone_key": "",
    "default": {
      "light": []
    }
  }
}, context)
```

#### Input
* input `object`
  * shared_rules **required** [SharedRulesCreate](#sharedrulescreate)

#### Output
* output [SharedRulesResult](#sharedrulesresult)

### shared_rules.sharedRulesKey.delete
Delete an existing shared_rules object


```js
turbinelabs.shared_rules.sharedRulesKey.delete({
  "sharedRulesKey": "",
  "checksum": ""
}, context)
```

#### Input
* input `object`
  * sharedRulesKey **required** `string`: the shared_rules key
  * checksum **required** `string`: the current checksum of the shared_rules to be deleted

#### Output
* output [Empty](#empty)

### shared_rules.sharedRulesKey.get
Get details for an existing shared_rules object


```js
turbinelabs.shared_rules.sharedRulesKey.get({
  "sharedRulesKey": ""
}, context)
```

#### Input
* input `object`
  * sharedRulesKey **required** `string`: the shared_rules key

#### Output
* output [SharedRulesResult](#sharedrulesresult)

### shared_rules.sharedRulesKey.put
Modify an existing shared_rules object


```js
turbinelabs.shared_rules.sharedRulesKey.put({
  "sharedRulesKey": "",
  "shared_rules": null
}, context)
```

#### Input
* input `object`
  * sharedRulesKey **required** `string`: the shared_rules key
  * shared_rules **required** [SharedRules](#sharedrules)

#### Output
* output [SharedRulesResult](#sharedrulesresult)

### zone.get
Get all zones. possibly with filters



```js
turbinelabs.zone.get({}, context)
```

#### Input
* input `object`
  * filters `string`: A JSON encoded array of ZoneFilter objects. The filter is taken

#### Output
* output [MultiZoneResult](#multizoneresult)

### zone.post
Create a new zone.



```js
turbinelabs.zone.post({
  "zone": {
    "name": ""
  }
}, context)
```

#### Input
* input `object`
  * zone **required** [ZoneCreate](#zonecreate)

#### Output
* output [ZoneResult](#zoneresult)

### zone.zoneKey.delete
Delete a zone.



```js
turbinelabs.zone.zoneKey.delete({
  "zoneKey": "",
  "checksum": ""
}, context)
```

#### Input
* input `object`
  * zoneKey **required** `string`: the zone key
  * checksum **required** `string`: the current checksum of the zone to be deleted

#### Output
* output [Empty](#empty)

### zone.zoneKey.get
Get details for a single zone



```js
turbinelabs.zone.zoneKey.get({
  "zoneKey": ""
}, context)
```

#### Input
* input `object`
  * zoneKey **required** `string`: the zone key

#### Output
* output [ZoneResult](#zoneresult)



## Definitions

### AccessToken
* AccessToken `object`
  * access_token_key **required** `string`
  * checksum **required** `string`
  * created_at **required** `string`: A timestamp that marks when a user was deleted. It is in the format
  * description **required** `string`
  * signed_token `string`: This will be set only when an AccessToken is initially created
  * user_key **required** `string`

### AccessTokenDescription
* AccessTokenDescription `object`
  * description **required** `string`

### AllConstraints
* AllConstraints `object`
  * dark [ClusterConstraints](#clusterconstraints)
  * light **required** [ClusterConstraints](#clusterconstraints)
  * tap [ClusterConstraints](#clusterconstraints)

### CORSConfig
* CORSConfig `object`: Experimental: Controls simple CORS responses for the associated domain.
  * allow_credentials `boolean`: Indicates whether the response to request can be exposed when the
  * allowed_headers `array`: Specifies what headers are allowed to be set when a request is made.
    * items `string`
  * allowed_methods **required** `array`: Indicates which HTTP request types may be used to call an endpoint.
    * items `string`
  * allowed_origins **required** `array`: Must contain a single element specifying the domain (origin) allowed
    * items `string`
  * exposed_headers `array`: Indicates which response headers may be accessed from the browser.
    * items `string`
  * max_age `integer`: Sets how long (in seconds) the response to a preflight request may be

### CertKeyPathPair
* CertKeyPathPair `object`: A key/cert pair that will be served when a domain terminates a SSL/TLS
  * certificate_path **required** `string`: Path to a certificate in the PEM format for the domain. If multiple
  * key_path **required** `string`: Path to a file with the secret key in the PEM format for the domain.

### ChangeDescription
* ChangeDescription `object`
  * actor_key `string`: The user who made the change.
  * at `number`: When the change took place in milliseconds since the Unix epoch.
  * comment `string`: A description of the change.
  * diffs `array`: A collection of attribute updates that compose this change.
    * items [ChangeEntry](#changeentry)
  * txn `string`: A unique identifier for all this transaction. It is shared by all

### ChangeEntry
* ChangeEntry `object`
  * change_type `string` (values: addition, removal): Whether the value was added or removed to the object.
  * object_key `string`: An ID uniquely identifying the object being changed.
  * object_type `string` (values: org, user, zone, proxy, domain, route, shared_rules, cluster): The name of the object being being altered.
  * path `string`: A dot-separated / bracket-indexed path to the field changed on the object.
  * value `string`: The value that has been added or removed to the object at the attribute
  * zone_key `string`: The zone this object is located in.

### CircuitBreakers
* CircuitBreakers `object`: Provides limits on various parameters to protect clusters against sudden
  * max_connections `integer`: Maximum number of connections that will be established to all
  * max_pending_requests `integer`: Maximum number of requests that will be queued while waiting on a
  * max_requests `integer`: Maximum number of requests that can be outstanding to all instances in
  * max_retries `integer`: Maximum number of retries that can be outstanding to all instances in

### Cluster
* Cluster
  * circuit_breakers [CircuitBreakers](#circuitbreakers)
  * health_checks [HealthChecks](#healthchecks)
  * instances [Instances](#instances)
  * name **required** `string`
  * outlier_detection [OutlierDetection](#outlierdetection)
  * require_tls `boolean`: If set, requests to this collection of hosts will be made via HTTPS.
  * zone_key **required** `string`
  * checksum **required** `string`
  * cluster_key **required** `string`

### ClusterConstraint
* ClusterConstraint `object`
  * cluster_key `string`
  * constraint_key `string`
  * metadata [Metadata](#metadata)
  * properties [Metadata](#metadata)
  * response_data: When a request is served by a cluster selected by this constraint annotate
    * cookies `array`
      * items [CookieDatum](#cookiedatum)
    * headers `array`
      * items [HeaderDatum](#headerdatum)
  * weight `integer`

### ClusterConstraints
* ClusterConstraints `array`
  * items [ClusterConstraint](#clusterconstraint)

### ClusterCreate
* ClusterCreate `object`
  * circuit_breakers [CircuitBreakers](#circuitbreakers)
  * health_checks [HealthChecks](#healthchecks)
  * instances [Instances](#instances)
  * name **required** `string`
  * outlier_detection [OutlierDetection](#outlierdetection)
  * require_tls `boolean`: If set, requests to this collection of hosts will be made via HTTPS.
  * zone_key **required** `string`

### ClusterFilter
* ClusterFilter `object`
  * cluster_key `string`
  * name `string`
  * zone_key `string`

### ClusterResult
* ClusterResult `object`
  * result [Cluster](#cluster)

### CohortSeed
* CohortSeed `object`
  * name `string`: The name of the cookie, the header field, or the query argument to
  * type `string` (values: header, cookie, query): Where a request's cohort seed will be drawn from.
  * use_zero_value_seed `boolean`: If true, requests with a seed source which resolves to an empty value

### CookieDatum
* CookieDatum `object`: This describes a cookie that should be set in response to a HTTP request.
  * domain `string`: Specifies the hosts to hich a cookie will be sent. Maps directly to a
  * expires_in_sec `integer`: This indicates how long a cookie will be valid, in seconds. If not set the
  * http_only `boolean`: If set the cookie value will not be accessible via Document.cookie. Maps
  * name `string`: The name of the cookie that will be attached to the response sent.
  * path `string`: Specifies the path a cookie will be associated with. Maps directly to
  * same_site `string` (values: Strict, Lax): Allows assertions how a cookie should behave wend making cross-site requests.
  * secure `boolean`: If set the cookie will only be sent on subsequent requests when accessing
  * value `string`: A literal value to send as the cookie value or a reference to
  * value_is_literal `boolean`: If true then the value attribute is treated as a literal and no attempt

### Domain
* Domain
  * aliases `array`: A set of alternate names that this Domain may be referenced by. May
    * items `string`
  * checksum `string`
  * cors_config [CORSConfig](#corsconfig)
  * domain_key `string`
  * force_https `boolean`: If set to true, requests must use TLS. If a request is not using TLS, (as determined by
  * gzip_enabled `boolean`: Experimental: if set to true will enable gzip compression on data that passes trough this domain
  * name **required** `string`
  * port **required** `integer`
  * redirects `array`
    * items [Redirect](#redirect)
  * ssl_config [SSLConfig](#sslconfig)
  * zone_key **required** `string`
  * checksum **required** `string`
  * domain_key **required** `string`

### DomainCreate
* DomainCreate `object`
  * aliases `array`: A set of alternate names that this Domain may be referenced by. May
    * items `string`
  * checksum `string`
  * cors_config [CORSConfig](#corsconfig)
  * domain_key `string`
  * force_https `boolean`: If set to true, requests must use TLS. If a request is not using TLS, (as determined by
  * gzip_enabled `boolean`: Experimental: if set to true will enable gzip compression on data that passes trough this domain
  * name **required** `string`
  * port **required** `integer`
  * redirects `array`
    * items [Redirect](#redirect)
  * ssl_config [SSLConfig](#sslconfig)
  * zone_key **required** `string`

### DomainFilter
* DomainFilter `object`
  * domain_key `string`
  * name `string`
  * proxy_keys `array`: matches Domains with a superset of the specified proxy_keys. A
    * items `string`
  * zone_key `string`

### DomainResult
* DomainResult `object`
  * result [Domain](#domain)

### Empty
* Empty `object`

### Error
* Error `object`
  * code `integer`
  * fields `string`
  * message `string`

### Filter
* Filter `object`
  * absolute_match_only `boolean`: If set this will return ChangeEntry values with a path that matches
  * actor_key `string`: The user who made the change.
  * attribute_path `string`: A dot-separated / bracket-indexed path to the field changed on the
  * attribute_value `string`: The value that has been added or removed to the object at the attribute
  * change_txn `string`: A unique identifier for all this transaction. It is shared by all
  * change_type `string` (values: addition, removal): Whether the value was added or removed to the object.
  * exclude_empty_values `boolean`: If set this will exclude ChangeEntry records that save the addition
  * negative_match `boolean`: If set this filter will match the all ChangeEntry records that do
  * object_key `string`: An ID uniquely identifying the object being changed.
  * object_type `string` (values: org, user, zone, proxy, domain, route, shared_rules, cluster): The name of the object being being altered.
  * org_key `string`: The organization the objects being updated belong to.
  * time_range [TimeRange](#timerange)
  * zone_key `string`: The zone this object is located in.

### FilterProducts
* FilterProducts `object`
  * and `array`: An array of changelog filters that will be joined via logical AND.
    * items [Filter](#filter)

### FilterSums
* FilterSums `object`
  * or `array`: An array of changelog filters that will be joined via logical OR.
    * items [FilterProducts](#filterproducts)

### HTTPHealthCheck
* HTTPHealthCheck `object`
  * host `string`: The value of the host header in the HTTP health check request.
  * path `string`: Specifies the HTTP path that will be requested during health
  * request_headers_to_add: Specifies a list of HTTP headers that should be added to each request
    * items [Metadatum](#metadatum)
  * service_name `string`: An optional service name parameter which is used to validate

### HeaderConstraint
* HeaderConstraint `object`: Indicates that a request's headers should meet some requirement before being
  * case_sensitive `boolean`: If set, the header value check will be case sensitive.
  * invert `boolean`: If set, the header constraint will succeed if the match described faile.
  * name **required** `string`: The header that is being checked. This must match the regexp "^[0-9a-zA-Z-]+$".
  * value `string`: If set the header's value will be compared to this. The default is to

### HeaderDatum
* HeaderDatum `object`: This describes a HTTP header that should be attached to requests.
  * name `string`: The name of the header that will be attached to the response sent.
  * value `string`: A literal value to send as the header value or a reference to
  * value_is_literal `boolean`: If true then the value attribute is treated as a literal and no attempt

### HealthCheck
* HealthCheck `object`: Configures active health checking for every instance in a cluster.
  * health_checker **required** `object`: Defines the type of health checker to use. Only a single health
    * http_health_check [HTTPHealthCheck](#httphealthcheck)
    * tcp_health_check [TCPHealthCheck](#tcphealthcheck)
  * healthy_edge_interval_msec `integer`: Interval used for the first health check right after a host is marked
  * healthy_threshold **required** `integer`: The number of healthy health checks required before a host is marked
  * interval_jitter_msec `integer`: An optional jitter amount that is added to each interval value
  * interval_msec **required** `integer`: The interval between health checks. The first round of health checks
  * no_traffic_interval_msec `integer`: Interval used when a cluster has never had traffic routed to it. It
  * reuse_connection `boolean`: Whether or not to reuse health check connections between health checks.
  * timeout_msec **required** `integer`: The time to wait for a health check response. If the timeout is
  * unhealthy_edge_interval_msec `integer`: Interval used for the first health check right after a host is marked
  * unhealthy_interval_msec `integer`: Interval used for hosts that are marked as unhealthy. As soon as the
  * unhealthy_threshold **required** `integer`: The number of unhealthy health checks required before a host is

### HealthChecks
* HealthChecks `array`
  * items [HealthCheck](#healthcheck)

### Instance
* Instance `object`
  * host `string`
  * metadata [Metadata](#metadata)
  * port `integer`

### InstanceResult
* InstanceResult `object`
  * result [Instance](#instance)

### Instances
* Instances `array`
  * items [Instance](#instance)

### Listener
* Listener
  * domain_keys `array`
    * items `string`
  * ip `string`: the interface this listener should bind to.
  * name **required** `string`
  * port **required** `integer`: the port this listener should bind to.
  * protocol **required** `string` (values: http, http2, http_auto, tcp): the protocol this listener will handle. http and http2 configure the listener to only
  * tracing_config [TracingConfig](#tracingconfig)
  * zone_key `string`
  * checksum **required** `string`
  * listener_key **required** `string`

### ListenerCreate
* ListenerCreate `object`
  * domain_keys `array`
    * items `string`
  * ip `string`: the interface this listener should bind to.
  * name **required** `string`
  * port **required** `integer`: the port this listener should bind to.
  * protocol **required** `string` (values: http, http2, http_auto, tcp): the protocol this listener will handle. http and http2 configure the listener to only
  * tracing_config [TracingConfig](#tracingconfig)
  * zone_key `string`

### ListenerResult
* ListenerResult `object`
  * result [Listener](#listener)

### Match
* Match `object`: Represents a mapping of request attributes to constraints on a cluster
  * behavior `string`: Defines how a request attribute should be matched. If not specified,
  * from: The request attribute key and value to match. `key` must always be
    * key `string`
    * value `string`
  * kind `string`: Defines the attribute by which a request should be matched on. Valid
  * to: The constraints on a cluster that a matched request should map to. If
    * key `string`
    * value `string`

### Matches
* Matches `array`
  * items [Match](#match)

### Metadata
* Metadata `array`
  * items [Metadatum](#metadatum)

### Metadatum
* Metadatum `object`
  * key `string`
  * value `string`

### MultiAccessTokens
* MultiAccessTokens `object`
  * result `array`
    * items [AccessToken](#accesstoken)

### MultiClusterResult
* MultiClusterResult `object`
  * result `array`
    * items [Cluster](#cluster)

### MultiDomainResult
* MultiDomainResult `object`
  * result `array`
    * items [Domain](#domain)

### MultiListenerResult
* MultiListenerResult `object`
  * result `array`
    * items [Listener](#listener)

### MultiProxyResult
* MultiProxyResult `object`
  * result `array`
    * items [Proxy](#proxy)

### MultiRouteResult
* MultiRouteResult `object`
  * result `array`
    * items [Route](#route)

### MultiSharedRulesResult
* MultiSharedRulesResult `object`
  * result `array`
    * items [SharedRules](#sharedrules)

### MultiZoneResult
* MultiZoneResult `object`
  * result `array`
    * items [Zone](#zone)

### OutlierDetection
* OutlierDetection `object`: A form of passive health checking that dynamically determines whether
  * base_ejection_time_msec `integer`: The base time that a host is ejected for. The real time is equal to
  * consecutive_5xx `integer`: The number of consecutive 5xx responses before a consecutive 5xx ejection
  * consecutive_gateway_failure `integer`: The number of consecutive gateway failures (502, 503, 504 status or
  * enforcing_consecutive_5xx `integer`: The % chance that a host will be actually ejected when an outlier status
  * enforcing_consecutive_gateway_failure `integer`: The % chance that a host will be actually ejected when an outlier status
  * enforcing_success_rate `integer`: The % chance that a host will be actually ejected when an outlier status
  * interval_msec `integer`: The time interval between ejection analysis sweeps. This can result in
  * max_ejection_percent `integer`: The maximum % of an upstream cluster that can be ejected due to
  * success_rate_minimum_hosts `integer`: The number of hosts in a cluster that must have enough request volume to
  * success_rate_request_volume `integer`: The minimum number of total requests that must be collected in one
  * success_rate_stdev_factor `integer`: This factor is used to determine the ejection threshold for success rate

### PageDetails
* PageDetails `object`
  * direction `string` (values: before, after): The direction walked from the ref_id when building this page.
  * has_more `boolean`: Whether or not there are more entries to be requested after this page.
  * ref_id `string`: The ID used as a reference when building this page.
  * total_entries `integer`: How many total entries would have been returned in the time window

### PaginatedChangeDescriptions
* PaginatedChangeDescriptions `object`
  * details [PaginationDetails](#paginationdetails)
  * result `array`
    * items [ChangeDescription](#changedescription)

### PaginationDetails
* PaginationDetails `object`
  * pagination [PageDetails](#pagedetails)

### Proxy
* Proxy
  * domain_keys `array`
    * items `string`
  * listener_keys `array`
    * items `string`
  * name **required** `string`
  * zone_key **required** `string`
  * checksum **required** `string`
  * proxy_key **required** `string`

### ProxyCreate
* ProxyCreate `object`
  * domain_keys `array`
    * items `string`
  * listener_keys `array`
    * items `string`
  * name **required** `string`
  * zone_key **required** `string`

### ProxyFilter
* ProxyFilter `object`
  * domain_keys `array`: matches Proxies with a superset of the specified domain_keys. A
    * items `string`
  * name `string`
  * proxy_key `string`
  * zone_key `string`

### ProxyResult
* ProxyResult `object`
  * result [Proxy](#proxy)

### Redirect
* Redirect `object`: Specifies how a URL within a domain should be rewritten when requested.
  * from **required** `string`: A regexp that will be matched against the URL (not including the host/port). May include capture groups for reference in "to."
  * header_constraints `array`
    * items [HeaderConstraint](#headerconstraint)
  * name **required** `string`: A unique (to this Domain) name for the Redirect. Must match the regexp "^[0-9a-zA-Z-]+$"
  * redirect_type **required** `string` (values: permanent, temporary): How this redirect should be presented via HTTP response code.
  * to **required** `string`: The new URL that will be constructed from the request. Capture groups from "from" may be referenced as "$&lt;group number&gt;" which begins at 1.

### ResponseData
* ResponseData `object`
  * cookies `array`
    * items [CookieDatum](#cookiedatum)
  * headers `array`
    * items [HeaderDatum](#headerdatum)

### RetryPolicy
* RetryPolicy `object`: Number of times to retry a request and how long to wait before timing out.
  * num_retries `integer`: Number of times to retry an upstream request. Note that the initial
  * per_try_timeout_msec `integer`: Time limit in milliseconds for a single attempt.
  * timeout_msec `integer`: Total time limit in milliseconds for all attempts (including the initial attempt)

### Route
* Route
  * checksum `string`
  * cohort_seed [CohortSeed](#cohortseed)
  * domain_key **required** `string`
  * path **required** `string`
  * response_data: When a request is served by this Route annotate the response with the
    * cookies `array`
      * items [CookieDatum](#cookiedatum)
    * headers `array`
      * items [HeaderDatum](#headerdatum)
  * retry_policy [RetryPolicy](#retrypolicy)
  * route_key `string`
  * rules `array`
    * items [Rule](#rule)
  * shared_rules_key **required** `string`
  * zone_key **required** `string`
  * checksum **required** `string`
  * route_key **required** `string`

### RouteCreate
* RouteCreate `object`
  * checksum `string`
  * cohort_seed [CohortSeed](#cohortseed)
  * domain_key **required** `string`
  * path **required** `string`
  * response_data: When a request is served by this Route annotate the response with the
    * cookies `array`
      * items [CookieDatum](#cookiedatum)
    * headers `array`
      * items [HeaderDatum](#headerdatum)
  * retry_policy [RetryPolicy](#retrypolicy)
  * route_key `string`
  * rules `array`
    * items [Rule](#rule)
  * shared_rules_key **required** `string`
  * zone_key **required** `string`

### RouteFilter
* RouteFilter `object`
  * domain_key `string`
  * path `string`
  * path_prefix `string`
  * route_key `string`
  * shared_rules_key `string`
  * zone_key `string`

### RouteResult
* RouteResult `object`
  * result [Route](#route)

### Rule
* Rule `object`
  * cohort_seed [CohortSeed](#cohortseed)
  * constraints [AllConstraints](#allconstraints)
  * matches [Matches](#matches)
  * methods `array`
    * items `string`
  * rule_key `string`

### SSLConfig
* SSLConfig `object`: Experimental: Specifies whether a domain should support SSL/TLS
  * cert_key_pairs **required** `array`: SSLConfig must have one cert_key_pairs entry specified.
    * items [CertKeyPathPair](#certkeypathpair)
  * cipher_filter `string`: An OpenSSL compatible filter string indicating the ciphers acceptable
  * protocols `array`: A list of acceptable SSL/TLS protocol. The default values are TLSv1,
    * items `string`

### SharedRules
* SharedRules
  * checksum `string`
  * cohort_seed [CohortSeed](#cohortseed)
  * default **required** [AllConstraints](#allconstraints)
  * properties [Metadata](#metadata)
  * response_data: When a request is served by a Route that is part of this SharedRules
    * cookies `array`
      * items [CookieDatum](#cookiedatum)
    * headers `array`
      * items [HeaderDatum](#headerdatum)
  * retry_policy [RetryPolicy](#retrypolicy)
  * rules `array`
    * items [Rule](#rule)
  * shared_rules_key `string`
  * zone_key **required** `string`
  * checksum **required** `string`
  * shared_rules_key **required** `string`

### SharedRulesCreate
* SharedRulesCreate `object`
  * checksum `string`
  * cohort_seed [CohortSeed](#cohortseed)
  * default **required** [AllConstraints](#allconstraints)
  * properties [Metadata](#metadata)
  * response_data: When a request is served by a Route that is part of this SharedRules
    * cookies `array`
      * items [CookieDatum](#cookiedatum)
    * headers `array`
      * items [HeaderDatum](#headerdatum)
  * retry_policy [RetryPolicy](#retrypolicy)
  * rules `array`
    * items [Rule](#rule)
  * shared_rules_key `string`
  * zone_key **required** `string`

### SharedRulesFilter
* SharedRulesFilter `object`
  * name `string`
  * shared_rules_key `string`
  * zone_key `string`

### SharedRulesResult
* SharedRulesResult `object`
  * result [SharedRules](#sharedrules)

### TCPHealthCheck
* TCPHealthCheck `object`
  * receive `array`: An array of base64 encoded strings, each representing array of
    * items `string`
  * send `string`: Base64 encoded string representing an array of bytes to be

### TimeRange
* TimeRange `object`
  * end `integer`: The end of the window we want to see changes for; measured in
  * start `integer`: The beginning of the window we want to see changes for; measured in microseconds since Unix Epoch.

### TracingConfig
* TracingConfig `object`: Configures tracing operations to be performed on the given listener
  * ingress `boolean`: Determines whether spans sent from this listener should be treated as ingress
  * request_headers_for_tags `array`: the headers specified here will be added to the generated spans as annotations
    * items `string`

### User
* User `object`
  * checksum **required** `string`
  * deleted_at `string`: A timestamp that marks when a user was deleted. It is in the format
  * login_email **required** `string`
  * user_key **required** `string`

### Zone
* Zone `object`
  * checksum **required** `string`
  * name **required** `string`
  * zone_key **required** `string`

### ZoneCreate
* ZoneCreate `object`
  * name **required** `string`

### ZoneFilter
* ZoneFilter `object`
  * name `string`
  * zone_key `string`

### ZoneResult
* ZoneResult `object`
  * result [Zone](#zone)


