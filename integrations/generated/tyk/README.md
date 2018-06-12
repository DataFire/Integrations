# @datafire/tyk

Client library for Gateway

## Installation and Usage
```bash
npm install --save @datafire/tyk
```
```js
let tyk = require('@datafire/tyk').create();

tyk.tyk.apis.post({}).then(data => {
  console.log(data);
});
```

## Description



## Actions

### tyk.apis.get
Gets a list of *API Definition* objects that are currently live on the gateway 



```js
tyk.tyk.apis.get({
  "x-tyk-authorization": ""
}, context)
```

#### Input
* input `object`
  * x-tyk-authorization **required** `string`: tyk gateway shared secret

#### Output
* output [APIDefinitionList](#apidefinitionlist)

### tyk.apis.post
Create an *API Definition* object



```js
tyk.tyk.apis.post({}, context)
```

#### Input
* input `object`
  * api_definition [APIDefinition](#apidefinition)

#### Output
* output `object`
  * action `string` (values: updated)
  * key `string`
  * status `string` (values: ok, error)

### tyk.apis.apiID.delete
Deletes an *API Definition* object, if it exists



```js
tyk.tyk.apis.apiID.delete({
  "x-tyk-authorization": "",
  "apiID": ""
}, context)
```

#### Input
* input `object`
  * x-tyk-authorization **required** `string`: tyk gateway shared secret
  * apiID **required** `string`: API ID

#### Output
* output `object`
  * action `string` (values: deleted)
  * key `string`
  * status `string` (values: ok, error)

### tyk.apis.apiID.get
Gets an *API Definition* object, if it exists



```js
tyk.tyk.apis.apiID.get({
  "x-tyk-authorization": "",
  "apiID": ""
}, context)
```

#### Input
* input `object`
  * x-tyk-authorization **required** `string`: tyk gateway shared secret
  * apiID **required** `string`: API ID

#### Output
* output [APIDefinition](#apidefinition)

### tyk.apis.apiID.put
Updates an *API Definition* object, if it exists



```js
tyk.tyk.apis.apiID.put({
  "x-tyk-authorization": "",
  "apiID": ""
}, context)
```

#### Input
* input `object`
  * x-tyk-authorization **required** `string`: tyk gateway shared secret
  * apiID **required** `string`: API ID
  * api_definition [APIDefinition](#apidefinition)

#### Output
* output `object`
  * action `string` (values: updated)
  * key `string`
  * status `string` (values: ok, error)

### tyk.health.get
Gets the health check values for an API if it is being recorded



```js
tyk.tyk.health.get({
  "x-tyk-authorization": "",
  "api_id": ""
}, context)
```

#### Input
* input `object`
  * x-tyk-authorization **required** `string`: tyk gateway shared secret
  * api_id **required** `string`: API ID to query

#### Output
* output `object`
  * average_requests_per_second `number`
  * average_upstream_latency `number`
  * key_failures_per_second `number`
  * quota_violations_per_second `number`
  * throttle_requests_per_second `number`

### tyk.keys.get
Gets a list of *key* IDs (will only work with non-hashed installations)



```js
tyk.tyk.keys.get({
  "api_id": "",
  "x-tyk-authorization": ""
}, context)
```

#### Input
* input `object`
  * api_id **required** `string`: Back-end to target
  * x-tyk-authorization **required** `string`: tyk gateway shared secret

#### Output
* output `object`
  * keys `array`
    * items `string`

### tyk.keys.create.post
Create a new *API token* with the *session object* defined in the body



```js
tyk.tyk.keys.create.post({
  "x-tyk-authorization": ""
}, context)
```

#### Input
* input `object`
  * x-tyk-authorization **required** `string`: tyk gateway shared secret
  * suppress_reset `number`: Adding the `suppress_reset` parameter and setting it to `1`, will cause Tyk to not reset the quota limit that is in the current live quota manager. By default Tyk will reset the quota in the live quota manager (initialising it) when ADDing a key. Adding the `suppress_reset` flag to the URL parameters will avoid this behaviour.
  * session_object [SessionObject](#sessionobject)

#### Output
* output `object`
  * action `string` (values: create)
  * key `string`
  * status `string` (values: ok, error)

### tyk.keys.keyId.delete
Remove this *API token* from the gateway, this will completely destroy the token and metadata associated with the token and instantly stop access from being granted



```js
tyk.tyk.keys.keyId.delete({
  "x-tyk-authorization": "",
  "keyId": "",
  "api_id": ""
}, context)
```

#### Input
* input `object`
  * x-tyk-authorization **required** `string`: tyk gateway shared secret
  * keyId **required** `string`: Access Token
  * api_id **required** `string`: Back-end to target

#### Output
* output `object`
  * action `string` (values: deleted)
  * key `string`
  * status `string` (values: ok, error)

### tyk.keys.keyId.post
Add a pre-specified *API token* with the *session object* defined in the body, this operatin creates a custom token that dsoes not use the gateway naming convention for tokens



```js
tyk.tyk.keys.keyId.post({
  "x-tyk-authorization": "",
  "keyId": ""
}, context)
```

#### Input
* input `object`
  * x-tyk-authorization **required** `string`: tyk gateway shared secret
  * keyId **required** `string`: Access Token
  * session_object [SessionObject](#sessionobject)

#### Output
* output `object`
  * action `string` (values: added)
  * key `string`
  * status `string` (values: ok, error)

### tyk.keys.keyId.put
Update an *API token* with the *session object* defined in the body, this operatin overwrites the existing object



```js
tyk.tyk.keys.keyId.put({
  "x-tyk-authorization": "",
  "keyId": "",
  "api_id": ""
}, context)
```

#### Input
* input `object`
  * x-tyk-authorization **required** `string`: tyk gateway shared secret
  * keyId **required** `string`: Access Token
  * suppress_reset `number`: Adding the `suppress_reset` parameter and setting it to `1`, will cause Tyk to not reset the quota limit that is in the current live quota manager. By default Tyk will reset the quota in the live quota manager (initialising it) when ADDing a key. Adding the `suppress_reset` flag to the URL parameters will avoid this behaviour.
  * session_object [SessionObject](#sessionobject)
  * api_id **required** `string`: Back-end to target

#### Output
* output `object`
  * action `string` (values: modified)
  * key `string`
  * status `string` (values: ok, error)

### tyk.oauth.authorize_client.post
The final request from an authorising party for a redirect URI during the Tyk OAuth flow



```js
tyk.tyk.oauth.authorize_client.post({
  "x-tyk-authorization": "",
  "response_type": "",
  "client_id": "",
  "redirect_uri": "",
  "key_rules": ""
}, context)
```

#### Input
* input `object`
  * x-tyk-authorization **required** `string`: tyk gateway shared secret
  * response_type **required** `string`: Should be provided by requesting client as part of authorisation request, this should be either `code` or `token` depending on the methods you have specified for the API
  * client_id **required** `string`: Should be provided by requesting client as part of authorisation request. The Client ID that is making the request
  * redirect_uri **required** `string`: Should be provided by requesting client as part of authorisation request. Must match with the record stored with Tyk
  * key_rules **required** `string`: A string representation of a *Session Object (form-encoded)*. This should be provided by your application in order to apply any quotas or rules to the key

#### Output
* output `object`
  * access_token `string`
  * code `string`
  * expires_in `number`
  * redirect_to `string`
  * token_type `string`

### tyk.oauth.clients.create.post
Create a new OAuth client



```js
tyk.tyk.oauth.clients.create.post({
  "x-tyk-authorization": ""
}, context)
```

#### Input
* input `object`
  * x-tyk-authorization **required** `string`: tyk gateway shared secret
  * oauth_client `object`
    * api_id `string`
    * redirect_uri `string`

#### Output
* output [OAuthClient](#oauthclient)

### tyk.oauth.clients.apiId.get
Get a list of OAuth clients bound to this back end 



```js
tyk.tyk.oauth.clients.apiId.get({
  "x-tyk-authorization": "",
  "apiId": ""
}, context)
```

#### Input
* input `object`
  * x-tyk-authorization **required** `string`: tyk gateway shared secret
  * apiId **required** `string`: API ID that owns this client (back end)

#### Output
* output [OAuthClients](#oauthclients)

### tyk.oauth.clients.apiId.clientId.delete
Delete the OAuth client



```js
tyk.tyk.oauth.clients.apiId.clientId.delete({
  "x-tyk-authorization": "",
  "apiId": "",
  "clientId": ""
}, context)
```

#### Input
* input `object`
  * x-tyk-authorization **required** `string`: tyk gateway shared secret
  * apiId **required** `string`: API ID that owns this client (back end)
  * clientId **required** `string`: OAuth Client ID to delete

#### Output
* output `object`
  * action `string` (values: deleted)
  * key `string`
  * status `string` (values: ok, error)

### tyk.oauth.refresh.keyId.delete
Invalidate a refresh token



```js
tyk.tyk.oauth.refresh.keyId.delete({
  "x-tyk-authorization": "",
  "keyId": "",
  "apiID": ""
}, context)
```

#### Input
* input `object`
  * x-tyk-authorization **required** `string`: tyk gateway shared secret
  * keyId **required** `string`: Access Token
  * apiID **required** `string`: API ID

#### Output
* output `object`
  * action `string` (values: deleted)
  * key `string`
  * status `string` (values: ok, error)

### tyk.reload.get
Will reload the targetted gateway



```js
tyk.tyk.reload.get({
  "x-tyk-authorization": ""
}, context)
```

#### Input
* input `object`
  * x-tyk-authorization **required** `string`: tyk gateway shared secret

#### Output
* output `object`
  * error `string`
  * status `string`

### tyk.reload.group.get
Will reload the cluster via the targeted gateway



```js
tyk.tyk.reload.group.get({
  "x-tyk-authorization": ""
}, context)
```

#### Input
* input `object`
  * x-tyk-authorization **required** `string`: tyk gateway shared secret

#### Output
* output `object`
  * error `string`
  * status `string`



## Definitions

### APIDefinition
* APIDefinition `object`
  * api_id `string`
  * auth `object`
    * auth_header_name `string`
    * use_cookie `boolean`
    * use_param `boolean`
  * definition `object`
    * key `string`
    * location `string`
  * enable_jwt `boolean`
  * enable_signature_checking `boolean`
  * hmac_allowed_clock_skew `number`
  * id `string`
  * jwt_identity_base_field `string`
  * jwt_policy_field_name `string`
  * jwt_signing_method `string`
  * jwt_source `string`
  * name `string`
  * notifications `object`
    * oauth_on_keychange_url `string`
    * shared_secret `string`
  * oauth_meta `object`
    * allowed_access_types `array`
      * items `string`
    * allowed_authorize_types `array`
      * items `string`
    * auth_login_redirect `string`
  * org_id `string`
  * slug `string`
  * uptime_tests `object`
    * CORS `object`
      * allow_credentials `boolean`
      * allowed_headers `array`
        * items `string`
      * allowed_methods `array`
        * items `string`
      * allowed_origins `array`
        * items `string`
      * debug `boolean`
      * enable `boolean`
      * exposed_headers `array`
        * items `string`
      * max_age `number`
      * options_passthrough `boolean`
    * active `boolean`
    * allowed_ips `array`
      * items `string`
    * cache_options `object`
      * cache_all_safe_requests `boolean`
      * cache_timeout `number`
      * enable_cache `boolean`
      * enable_upstream_cache_control `boolean`
    * check_list `array`
      * items `object`
        * body `string`
        * headers `array`
          * items `object`
        * method `string`
        * url `string`
    * config `object`
      * expire_utime_after `number`
      * recheck_wait `number`
      * service_discovery [ServiceDiscoverConfiguration](#servicediscoverconfiguration)
    * custom_middleware `object`
      * post `array`
        * items [MiddlewareDefinition](#middlewaredefinition)
      * pre `array`
        * items [MiddlewareDefinition](#middlewaredefinition)
      * response `array`
        * items [MiddlewareDefinition](#middlewaredefinition)
    * do_not_track `string`
    * domain `string`
    * dont_set_quota_on_create `boolean`
    * enable_batch_request_support `boolean`
    * enable_ip_whitelisting `boolean`
    * event_handlers `object`
    * expire_analytics_after `number`
    * proxy `object`
      * check_host_against_uptime_tests `boolean`
      * enable_load_balancing `boolean`
      * listen_path `string`
      * preserve_host_header `boolean`
      * service_discovery [ServiceDiscoverConfiguration](#servicediscoverconfiguration)
      * strip_listen_path `boolean`
      * target_list `array`
        * items `string`
      * target_url `string`
    * response_processors `array`
      * items `object`
        * name `string`
        * options `object`
    * session_lifetime `number`
    * tags `array`
      * items `string`
  * use_basic_auth `boolean`
  * use_keyless `boolean`
  * use_oauth2 `boolean`
  * version_data `object`
    * not_versioned `boolean`
    * versions `object`

### APIDefinitionList
* APIDefinitionList `array`
  * items [APIDefinition](#apidefinition)

### AccessRights
* AccessRights `object`
  * api_id `string`
  * api_name `string`
  * versions `array`
    * items `string`

### EndPointMeta
* EndPointMeta `object`
  * method_actions `object`
  * path `string`

### EndpointMethodMeta
* EndpointMethodMeta `object`
  * action `string`
  * code `number`
  * data `string`
  * headers `object`

### HeaderInjectionMeta
* HeaderInjectionMeta `object`
  * add_headers `object`
  * delete_headers `array`
    * items `string`
  * method `string`
  * path `string`

### MiddlewareDefinition
* MiddlewareDefinition `object`
  * name `string`
  * path `string`
  * require_session `boolean`

### OAuthClient
* OAuthClient `object`
  * client_id `string`
  * redirect_uri `string`
  * secret `string`

### OAuthClients
* OAuthClients `array`
  * items [OAuthClient](#oauthclient)

### ServiceDiscoverConfiguration
* ServiceDiscoverConfiguration `object`
  * cache_timeout `number`
  * data_path `string`
  * endpoint_returns_list `boolean`
  * parent_data_path `string`
  * port_data_path `string`
  * query_endpoint `string`
  * use_discovery_service `string`
  * use_nested_query `boolean`
  * use_target_list `boolean`

### SessionObject
* SessionObject `object`
  * access_rights `object`
  * allowance `number`
  * apply_policy_id `string`
  * basic_auth_data `object`
    * hash_type `string` (values: , bcrypt)
    * password `string`
  * expires `number`
  * hmac_enabled `boolean`
  * hmac_string `string`
  * is_inactive `boolean`
  * jwt_data `object`
    * secret `string`
  * meta_data `object`
  * monitor `object`
    * trigger_limits `array`
      * items `string`
  * oauth_client_id `string`
  * org_id `string`
  * per `number`
  * quota_max `number`
  * quota_remaining `number`
  * quota_renewal_rate `string`
  * quota_renews `number`
  * rate `number`
  * tags `array`
    * items `string`

### TemplateMeta
* TemplateMeta `object`
  * method `string`
  * path `string`
  * template_data `object`
    * enable_session `boolean`
    * input_type `string`
    * template_mode `string`

### VersionDefinition
* VersionDefinition `object`
  * expires `string`
  * extended_paths `object`
    * black_list `array`
      * items [EndPointMeta](#endpointmeta)
    * cache `array`
      * items `string`
    * circuit_breakers `array`
      * items `object`
        * method `string`
        * path `string`
        * return_to_service_after `number`
        * samples `number`
        * threshold_percent `number`
    * hard_timeouts `array`
      * items `object`
        * method `string`
        * path `string`
        * timeout `number`
    * ignored `array`
      * items [EndPointMeta](#endpointmeta)
    * size_limits `array`
      * items `object`
        * method `string`
        * path `string`
        * size_limit `number`
    * transform `array`
      * items [TemplateMeta](#templatemeta)
    * transform_headers `array`
      * items [HeaderInjectionMeta](#headerinjectionmeta)
    * transform_response `array`
      * items [TemplateMeta](#templatemeta)
    * transform_response_headers `array`
      * items [HeaderInjectionMeta](#headerinjectionmeta)
    * url_rewrites `array`
      * items `object`
        * match_pattern `string`
        * method `string`
        * path `string`
        * rewrite_to `string`
    * virtual `array`
      * items `object`
        * function_source_type `string`
        * function_source_uri `string`
        * method `string`
        * path `string`
        * response_function_name `string`
        * use_session `boolean`
    * white_list `array`
      * items [EndPointMeta](#endpointmeta)
  * global_headers `object`
  * global_headers_remove `array`
    * items `string`
  * global_size_limit `number`
  * name `string`
  * override_target `string`
  * use_extended_paths `boolean`


