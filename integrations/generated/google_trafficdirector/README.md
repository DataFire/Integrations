# @datafire/google_trafficdirector

Client library for Traffic Director API

## Installation and Usage
```bash
npm install --save @datafire/google_trafficdirector
```
```js
let google_trafficdirector = require('@datafire/google_trafficdirector').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

.then(data => {
  console.log(data);
});
```

## Description



## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_trafficdirector.oauthCallback({
  "code": ""
}, context)
```

#### Input
* input `object`
  * code **required** `string`

#### Output
* output `object`
  * access_token `string`
  * refresh_token `string`
  * token_type `string`
  * scope `string`
  * expiration `string`

### oauthRefresh
Exchange a refresh_token for an access_token


```js
google_trafficdirector.oauthRefresh(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * access_token `string`
  * refresh_token `string`
  * token_type `string`
  * scope `string`
  * expiration `string`

### trafficdirector.discovery.client_status



```js
google_trafficdirector.trafficdirector.discovery.client_status({}, context)
```

#### Input
* input `object`
  * body [ClientStatusRequest](#clientstatusrequest)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [ClientStatusResponse](#clientstatusresponse)



## Definitions

### Address
* Address `object`: Addresses specify either a logical or physical address and port, which are used to tell Envoy where to bind/listen, connect to upstream and find management servers.
  * pipe [Pipe](#pipe)
  * socketAddress [SocketAddress](#socketaddress)

### BuildVersion
* BuildVersion `object`: BuildVersion combines SemVer version of extension with free-form build information (i.e. 'alpha', 'private-build') as a set of strings.
  * metadata `object`: Free-form build information. Envoy defines several well known keys in the source/common/version/version.h file
  * version [SemanticVersion](#semanticversion)

### ClientConfig
* ClientConfig `object`: All xds configs for a particular client.
  * node [Node](#node)
  * xdsConfig `array`
    * items [PerXdsConfig](#perxdsconfig)

### ClientStatusRequest
* ClientStatusRequest `object`: Request for client status of clients identified by a list of NodeMatchers.
  * nodeMatchers `array`: Management server can use these match criteria to identify clients. The match follows OR semantics.
    * items [NodeMatcher](#nodematcher)

### ClientStatusResponse
* ClientStatusResponse `object`
  * config `array`: Client configs for the clients specified in the ClientStatusRequest.
    * items [ClientConfig](#clientconfig)

### ClustersConfigDump
* ClustersConfigDump `object`: Envoy's cluster manager fills this message with all currently known clusters. Cluster configuration information can be used to recreate an Envoy configuration by populating all clusters as static clusters or by returning them in a CDS response.
  * dynamicActiveClusters `array`: The dynamically loaded active clusters. These are clusters that are available to service data plane traffic.
    * items [DynamicCluster](#dynamiccluster)
  * dynamicWarmingClusters `array`: The dynamically loaded warming clusters. These are clusters that are currently undergoing warming in preparation to service data plane traffic. Note that if attempting to recreate an Envoy configuration from a configuration dump, the warming clusters should generally be discarded.
    * items [DynamicCluster](#dynamiccluster)
  * staticClusters `array`: The statically loaded cluster configs.
    * items [StaticCluster](#staticcluster)
  * versionInfo `string`: This is the :ref:`version_info ` in the last processed CDS discovery response. If there are only static bootstrap clusters, this field will be "".

### DoubleMatcher
* DoubleMatcher `object`: Specifies the way to match a double value.
  * exact `number`: If specified, the input double value must be equal to the value specified here.
  * range [DoubleRange](#doublerange)

### DoubleRange
* DoubleRange `object`: Specifies the double start and end of the range using half-open interval semantics [start, end).
  * end `number`: end of the range (exclusive)
  * start `number`: start of the range (inclusive)

### DynamicCluster
* DynamicCluster `object`: Describes a dynamically loaded cluster via the CDS API.
  * cluster `object`: The cluster config.
  * lastUpdated `string`: The timestamp when the Cluster was last updated.
  * versionInfo `string`: This is the per-resource version information. This version is currently taken from the :ref:`version_info ` field at the time that the cluster was loaded. In the future, discrete per-cluster versions may be supported by the API.

### DynamicListener
* DynamicListener `object`: Describes a dynamically loaded listener via the LDS API. [#next-free-field: 6]
  * activeState [DynamicListenerState](#dynamiclistenerstate)
  * drainingState [DynamicListenerState](#dynamiclistenerstate)
  * errorState [UpdateFailureState](#updatefailurestate)
  * name `string`: The name or unique id of this listener, pulled from the DynamicListenerState config.
  * warmingState [DynamicListenerState](#dynamiclistenerstate)

### DynamicListenerState
* DynamicListenerState `object`
  * lastUpdated `string`: The timestamp when the Listener was last successfully updated.
  * listener `object`: The listener config.
  * versionInfo `string`: This is the per-resource version information. This version is currently taken from the :ref:`version_info ` field at the time that the listener was loaded. In the future, discrete per-listener versions may be supported by the API.

### DynamicRouteConfig
* DynamicRouteConfig `object`
  * lastUpdated `string`: The timestamp when the Route was last updated.
  * routeConfig `object`: The route config.
  * versionInfo `string`: This is the per-resource version information. This version is currently taken from the :ref:`version_info ` field at the time that the route configuration was loaded.

### DynamicScopedRouteConfigs
* DynamicScopedRouteConfigs `object`
  * lastUpdated `string`: The timestamp when the scoped route config set was last updated.
  * name `string`: The name assigned to the scoped route configurations.
  * scopedRouteConfigs `array`: The scoped route configurations.
    * items `object`
  * versionInfo `string`: This is the per-resource version information. This version is currently taken from the :ref:`version_info ` field at the time that the scoped routes configuration was loaded.

### Extension
* Extension `object`: Version and identification for an Envoy extension. [#next-free-field: 6]
  * category `string`: Category of the extension. Extension category names use reverse DNS notation. For instance "envoy.filters.listener" for Envoy's built-in listener filters or "com.acme.filters.http" for HTTP filters from acme.com vendor. [#comment:
  * disabled `boolean`: Indicates that the extension is present but was disabled via dynamic configuration.
  * name `string`: This is the name of the Envoy filter as specified in the Envoy configuration, e.g. envoy.filters.http.router, com.acme.widget.
  * typeDescriptor `string`: [#not-implemented-hide:] Type descriptor of extension configuration proto. [#comment:
  * version [BuildVersion](#buildversion)

### GoogleRE2
* GoogleRE2 `object`: Google's `RE2 `_ regex engine. The regex string must adhere to the documented `syntax `_. The engine is designed to complete execution in linear time as well as limit the amount of memory used. Envoy supports program size checking via runtime. The runtime keys `re2.max_program_size.error_level` and `re2.max_program_size.warn_level` can be set to integers as the maximum program size or complexity that a compiled regex can have before an exception is thrown or a warning is logged, respectively. `re2.max_program_size.error_level` defaults to 100, and `re2.max_program_size.warn_level` has no default if unset (will not check/log a warning). Envoy emits two stats for tracking the program size of regexes: the histogram `re2.program_size`, which records the program size, and the counter `re2.exceeded_warn_level`, which is incremented each time the program size exceeds the warn level threshold.
  * maxProgramSize `integer`: This field controls the RE2 "program size" which is a rough estimate of how complex a compiled regex is to evaluate. A regex that has a program size greater than the configured value will fail to compile. In this case, the configured max program size can be increased or the regex can be simplified. If not specified, the default is 100. This field is deprecated; regexp validation should be performed on the management server instead of being done by each individual client.

### InlineScopedRouteConfigs
* InlineScopedRouteConfigs `object`
  * lastUpdated `string`: The timestamp when the scoped route config set was last updated.
  * name `string`: The name assigned to the scoped route configurations.
  * scopedRouteConfigs `array`: The scoped route configurations.
    * items `object`

### ListMatcher
* ListMatcher `object`: Specifies the way to match a list value.
  * oneOf [ValueMatcher](#valuematcher)

### ListenersConfigDump
* ListenersConfigDump `object`: Envoy's listener manager fills this message with all currently known listeners. Listener configuration information can be used to recreate an Envoy configuration by populating all listeners as static listeners or by returning them in a LDS response.
  * dynamicListeners `array`: State for any warming, active, or draining listeners.
    * items [DynamicListener](#dynamiclistener)
  * staticListeners `array`: The statically loaded listener configs.
    * items [StaticListener](#staticlistener)
  * versionInfo `string`: This is the :ref:`version_info ` in the last processed LDS discovery response. If there are only static bootstrap listeners, this field will be "".

### Locality
* Locality `object`: Identifies location of where either Envoy runs or where upstream hosts run.
  * region `string`: Region this :ref:`zone ` belongs to.
  * subZone `string`: When used for locality of upstream hosts, this field further splits zone into smaller chunks of sub-zones so they can be load balanced independently.
  * zone `string`: Defines the local service zone where Envoy is running. Though optional, it should be set if discovery service routing is used and the discovery service exposes :ref:`zone data `, either in this message or via :option:`--service-zone`. The meaning of zone is context dependent, e.g. `Availability Zone (AZ) `_ on AWS, `Zone `_ on GCP, etc.

### Node
* Node `object`: Identifies a specific Envoy instance. The node identifier is presented to the management server, which may use this identifier to distinguish per Envoy configuration for serving. [#next-free-field: 12]
  * buildVersion `string`: This is motivated by informing a management server during canary which version of Envoy is being tested in a heterogeneous fleet. This will be set by Envoy in management server RPCs. This field is deprecated in favor of the user_agent_name and user_agent_version values.
  * clientFeatures `array`: Client feature support list. These are well known features described in the Envoy API repository for a given major version of an API. Client features use reverse DNS naming scheme, for example `com.acme.feature`. See :ref:`the list of features ` that xDS client may support.
    * items `string`
  * cluster `string`: Defines the local service cluster name where Envoy is running. Though optional, it should be set if any of the following features are used: :ref:`statsd `, :ref:`health check cluster verification `, :ref:`runtime override directory `, :ref:`user agent addition `, :ref:`HTTP global rate limiting `, :ref:`CDS `, and :ref:`HTTP tracing `, either in this message or via :option:`--service-cluster`.
  * extensions `array`: List of extensions and their versions supported by the node.
    * items [Extension](#extension)
  * id `string`: An opaque node identifier for the Envoy node. This also provides the local service node name. It should be set if any of the following features are used: :ref:`statsd `, :ref:`CDS `, and :ref:`HTTP tracing `, either in this message or via :option:`--service-node`.
  * listeningAddresses `array`: Known listening ports on the node as a generic hint to the management server for filtering :ref:`listeners ` to be returned. For example, if there is a listener bound to port 80, the list can optionally contain the SocketAddress `(0.0.0.0,80)`. The field is optional and just a hint.
    * items [Address](#address)
  * locality [Locality](#locality)
  * metadata `object`: Opaque metadata extending the node identifier. Envoy will pass this directly to the management server.
  * userAgentBuildVersion [BuildVersion](#buildversion)
  * userAgentName `string`: Free-form string that identifies the entity requesting config. E.g. "envoy" or "grpc"
  * userAgentVersion `string`: Free-form string that identifies the version of the entity requesting config. E.g. "1.12.2" or "abcd1234", or "SpecialEnvoyBuild"

### NodeMatcher
* NodeMatcher `object`: Specifies the way to match a Node. The match follows AND semantics.
  * nodeId [StringMatcher](#stringmatcher)
  * nodeMetadatas `array`: Specifies match criteria on the node metadata.
    * items [StructMatcher](#structmatcher)

### NullMatch
* NullMatch `object`: NullMatch is an empty message to specify a null value.

### PathSegment
* PathSegment `object`: Specifies the segment in a path to retrieve value from Struct.
  * key `string`: If specified, use the key to retrieve the value in a Struct.

### PerXdsConfig
* PerXdsConfig `object`: Detailed config (per xDS) with status. [#next-free-field: 6]
  * clusterConfig [ClustersConfigDump](#clustersconfigdump)
  * listenerConfig [ListenersConfigDump](#listenersconfigdump)
  * routeConfig [RoutesConfigDump](#routesconfigdump)
  * scopedRouteConfig [ScopedRoutesConfigDump](#scopedroutesconfigdump)
  * status `string` (values: UNKNOWN, SYNCED, NOT_SENT, STALE, ERROR)

### Pipe
* Pipe `object`
  * mode `integer`: The mode for the Pipe. Not applicable for abstract sockets.
  * path `string`: Unix Domain Socket path. On Linux, paths starting with '@' will use the abstract namespace. The starting '@' is replaced by a null byte by Envoy. Paths starting with '@' will result in an error in environments other than Linux.

### RegexMatcher
* RegexMatcher `object`: A regex matcher designed for safety when used with untrusted input.
  * googleRe2 [GoogleRE2](#googlere2)
  * regex `string`: The regex match string. The string must be supported by the configured engine.

### RoutesConfigDump
* RoutesConfigDump `object`: Envoy's RDS implementation fills this message with all currently loaded routes, as described by their RouteConfiguration objects. Static routes that are either defined in the bootstrap configuration or defined inline while configuring listeners are separated from those configured dynamically via RDS. Route configuration information can be used to recreate an Envoy configuration by populating all routes as static routes or by returning them in RDS responses.
  * dynamicRouteConfigs `array`: The dynamically loaded route configs.
    * items [DynamicRouteConfig](#dynamicrouteconfig)
  * staticRouteConfigs `array`: The statically loaded route configs.
    * items [StaticRouteConfig](#staticrouteconfig)

### ScopedRoutesConfigDump
* ScopedRoutesConfigDump `object`: Envoy's scoped RDS implementation fills this message with all currently loaded route configuration scopes (defined via ScopedRouteConfigurationsSet protos). This message lists both the scopes defined inline with the higher order object (i.e., the HttpConnectionManager) and the dynamically obtained scopes via the SRDS API.
  * dynamicScopedRouteConfigs `array`: The dynamically loaded scoped route configs.
    * items [DynamicScopedRouteConfigs](#dynamicscopedrouteconfigs)
  * inlineScopedRouteConfigs `array`: The statically loaded scoped route configs.
    * items [InlineScopedRouteConfigs](#inlinescopedrouteconfigs)

### SemanticVersion
* SemanticVersion `object`: Envoy uses SemVer (https://semver.org/). Major/minor versions indicate expected behaviors and APIs, the patch version field is used only for security fixes and can be generally ignored.
  * majorNumber `integer`
  * minorNumber `integer`
  * patch `integer`

### SocketAddress
* SocketAddress `object`: [#next-free-field: 7]
  * address `string`: The address for this socket. :ref:`Listeners ` will bind to the address. An empty address is not allowed. Specify ``0.0.0.0`` or ``::`` to bind to any address. [#comment:TODO(zuercher) reinstate when implemented: It is possible to distinguish a Listener address via the prefix/suffix matching in :ref:`FilterChainMatch `.] When used within an upstream :ref:`BindConfig `, the address controls the source address of outbound connections. For :ref:`clusters `, the cluster type determines whether the address must be an IP (*STATIC* or *EDS* clusters) or a hostname resolved by DNS (*STRICT_DNS* or *LOGICAL_DNS* clusters). Address resolution can be customized via :ref:`resolver_name `.
  * ipv4Compat `boolean`: When binding to an IPv6 address above, this enables `IPv4 compatibility `_. Binding to ``::`` will allow both IPv4 and IPv6 connections, with peer IPv4 addresses mapped into IPv6 space as ``::FFFF:``.
  * namedPort `string`: This is only valid if :ref:`resolver_name ` is specified below and the named resolver is capable of named port resolution.
  * portValue `integer`
  * protocol `string` (values: TCP, UDP)
  * resolverName `string`: The name of the custom resolver. This must have been registered with Envoy. If this is empty, a context dependent default applies. If the address is a concrete IP address, no resolution will occur. If address is a hostname this should be set for resolution other than DNS. Specifying a custom resolver with *STRICT_DNS* or *LOGICAL_DNS* will generate an error at runtime.

### StaticCluster
* StaticCluster `object`: Describes a statically loaded cluster.
  * cluster `object`: The cluster config.
  * lastUpdated `string`: The timestamp when the Cluster was last updated.

### StaticListener
* StaticListener `object`: Describes a statically loaded listener.
  * lastUpdated `string`: The timestamp when the Listener was last successfully updated.
  * listener `object`: The listener config.

### StaticRouteConfig
* StaticRouteConfig `object`
  * lastUpdated `string`: The timestamp when the Route was last updated.
  * routeConfig `object`: The route config.

### StringMatcher
* StringMatcher `object`: Specifies the way to match a string. [#next-free-field: 7]
  * exact `string`: The input string must match exactly the string specified here. Examples: * *abc* only matches the value *abc*.
  * ignoreCase `boolean`: If true, indicates the exact/prefix/suffix matching should be case insensitive. This has no effect for the safe_regex match. For example, the matcher *data* will match both input string *Data* and *data* if set to true.
  * prefix `string`: The input string must have the prefix specified here. Note: empty prefix is not allowed, please use regex instead. Examples: * *abc* matches the value *abc.xyz*
  * regex `string`: The input string must match the regular expression specified here. The regex grammar is defined `here `_. Examples: * The regex ``\d{3}`` matches the value *123* * The regex ``\d{3}`` does not match the value *1234* * The regex ``\d{3}`` does not match the value *123.456* .. attention:: This field has been deprecated in favor of `safe_regex` as it is not safe for use with untrusted input in all cases.
  * safeRegex [RegexMatcher](#regexmatcher)
  * suffix `string`: The input string must have the suffix specified here. Note: empty prefix is not allowed, please use regex instead. Examples: * *abc* matches the value *xyz.abc*

### StructMatcher
* StructMatcher `object`: StructMatcher provides a general interface to check if a given value is matched in google.protobuf.Struct. It uses `path` to retrieve the value from the struct and then check if it's matched to the specified value. For example, for the following Struct: .. code-block:: yaml fields: a: struct_value: fields: b: struct_value: fields: c: string_value: pro t: list_value: values: - string_value: m - string_value: n The following MetadataMatcher is matched as the path [a, b, c] will retrieve a string value "pro" from the Metadata which is matched to the specified prefix match. .. code-block:: yaml path: - key: a - key: b - key: c value: string_match: prefix: pr The following StructMatcher is matched as the code will match one of the string values in the list at the path [a, t]. .. code-block:: yaml path: - key: a - key: t value: list_match: one_of: string_match: exact: m An example use of StructMatcher is to match metadata in envoy.v*.core.Node.
  * path `array`: The path to retrieve the Value from the Struct.
    * items [PathSegment](#pathsegment)
  * value [ValueMatcher](#valuematcher)

### UpdateFailureState
* UpdateFailureState `object`
  * details `string`: Details about the last failed update attempt.
  * failedConfiguration `object`: What the component configuration would have been if the update had succeeded.
  * lastUpdateAttempt `string`: Time of the latest failed update attempt.

### ValueMatcher
* ValueMatcher `object`: Specifies the way to match a ProtobufWkt::Value. Primitive values and ListValue are supported. StructValue is not supported and is always not matched. [#next-free-field: 7]
  * boolMatch `boolean`: If specified, a match occurs if and only if the target value is a bool value and is equal to this field.
  * doubleMatch [DoubleMatcher](#doublematcher)
  * listMatch [ListMatcher](#listmatcher)
  * nullMatch [NullMatch](#nullmatch)
  * presentMatch `boolean`: If specified, value match will be performed based on whether the path is referring to a valid primitive value in the metadata. If the path is referring to a non-primitive value, the result is always not matched.
  * stringMatch [StringMatcher](#stringmatcher)


