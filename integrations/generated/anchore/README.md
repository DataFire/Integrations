# @datafire/anchore

Client library for Anchore Engine API Server

## Installation and Usage
```bash
npm install --save @datafire/anchore
```
```js
let anchore = require('@datafire/anchore').create({
  username: "",
  password: ""
});

anchore.post_system_feeds({}).then(data => {
  console.log(data);
});
```

## Description

This is the Anchore Engine API. Provides the primary external API for users of the service.

## Actions

### ping
Simple status check


```js
anchore.ping(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### import_image
Import and image analysis directly


```js
anchore.import_image({
  "analysis_report": {}
}, context)
```

#### Input
* input `object`
  * analysis_report **required** [ImageAnalysisReport](#imageanalysisreport)

#### Output
* output `array`
  * items [AnchoreImage](#anchoreimage)

### list_images
List all images visible to the user


```js
anchore.list_images({}, context)
```

#### Input
* input `object`
  * history `boolean`: Include image history in the response
  * image_to_get [ImageFilter](#imagefilter)
  * fulltag `string`: Full docker-pull string to filter results by (e.g. docker.io/library/nginx:latest, or myhost.com:5000/testimages:v1.1.1)

#### Output
* output `array`: List of AnchoreImage objects
  * items [AnchoreImage](#anchoreimage)

### add_image
Creates a new analysis task that is executed asynchronously


```js
anchore.add_image({
  "image": {}
}, context)
```

#### Input
* input `object`
  * force `boolean`: Override any existing entry in the system
  * autosubscribe `boolean`: Instruct engine to automatically begin watching the added tag for updates from registry
  * image **required** [ImageAnalysisRequest](#imageanalysisrequest)

#### Output
* output `array`: List of AnchoreImage objects, should be of length 1
  * items [AnchoreImage](#anchoreimage)

### delete_image_by_imageId
Delete image by docker imageId


```js
anchore.delete_image_by_imageId({
  "imageId": ""
}, context)
```

#### Input
* input `object`
  * imageId **required** `string`
  * force `boolean`

#### Output
*Output schema unknown*

### get_image_by_imageId
Lookup image by docker imageId


```js
anchore.get_image_by_imageId({
  "imageId": ""
}, context)
```

#### Input
* input `object`
  * imageId **required** `string`

#### Output
* output `array`
  * items [AnchoreImage](#anchoreimage)

### get_image_policy_check_by_imageId
Get the policy evaluation for the given image


```js
anchore.get_image_policy_check_by_imageId({
  "imageId": "",
  "tag": ""
}, context)
```

#### Input
* input `object`
  * imageId **required** `string`
  * policyId `string`
  * tag **required** `string`
  * detail `boolean`
  * history `boolean`

#### Output
* output [PolicyEvaluation](#policyevaluation)

### list_image_content_by_imageid
List image content types


```js
anchore.list_image_content_by_imageid({
  "imageId": ""
}, context)
```

#### Input
* input `object`
  * imageId **required** `string`

#### Output
* output `array`
  * items `string`

### get_image_content_by_type_imageId
Get the content of an image by type


```js
anchore.get_image_content_by_type_imageId({
  "imageId": "",
  "ctype": ""
}, context)
```

#### Input
* input `object`
  * imageId **required** `string`
  * ctype **required** `string`

#### Output
* output [ContentResponse](#contentresponse)

### get_image_vulnerability_types_by_imageId
Get vulnerability types


```js
anchore.get_image_vulnerability_types_by_imageId({
  "imageId": ""
}, context)
```

#### Input
* input `object`
  * imageId **required** `string`

#### Output
* output `array`
  * items `string`

### get_image_vulnerabilities_by_type_imageId
Get vulnerabilities by type


```js
anchore.get_image_vulnerabilities_by_type_imageId({
  "imageId": "",
  "vtype": ""
}, context)
```

#### Input
* input `object`
  * imageId **required** `string`
  * vtype **required** `string`

#### Output
* output [VulnerabilityList](#vulnerabilitylist)

### delete_image
Delete an image analysis


```js
anchore.delete_image({
  "imageDigest": ""
}, context)
```

#### Input
* input `object`
  * imageDigest **required** `string`

#### Output
*Output schema unknown*

### get_image
Get image metadata


```js
anchore.get_image({
  "imageDigest": ""
}, context)
```

#### Input
* input `object`
  * imageDigest **required** `string`

#### Output
* output `array`: List of length 1 of AnchoreImage
  * items [AnchoreImage](#anchoreimage)

### get_image_policy_check
Get the policy evaluation for the given image


```js
anchore.get_image_policy_check({
  "imageDigest": "",
  "tag": ""
}, context)
```

#### Input
* input `object`
  * imageDigest **required** `string`
  * policyId `string`
  * tag **required** `string`
  * detail `boolean`
  * history `boolean`

#### Output
* output [PolicyEvaluation](#policyevaluation)

### list_image_content
List image content types


```js
anchore.list_image_content({
  "imageDigest": ""
}, context)
```

#### Input
* input `object`
  * imageDigest **required** `string`

#### Output
* output `array`
  * items `string`

### get_image_content_by_type
Get the content of an image by type


```js
anchore.get_image_content_by_type({
  "imageDigest": "",
  "ctype": ""
}, context)
```

#### Input
* input `object`
  * imageDigest **required** `string`
  * ctype **required** `string`

#### Output
* output [ContentResponse](#contentresponse)

### list_image_metadata
List image metadata types


```js
anchore.list_image_metadata({
  "imageDigest": ""
}, context)
```

#### Input
* input `object`
  * imageDigest **required** `string`

#### Output
* output `array`
  * items `string`

### get_image_metadata_by_type
Get the metadata of an image by type


```js
anchore.get_image_metadata_by_type({
  "imageDigest": "",
  "mtype": ""
}, context)
```

#### Input
* input `object`
  * imageDigest **required** `string`
  * mtype **required** `string`

#### Output
* output [MetadataResponse](#metadataresponse)

### get_image_vulnerability_types
Get vulnerability types


```js
anchore.get_image_vulnerability_types({
  "imageDigest": ""
}, context)
```

#### Input
* input `object`
  * imageDigest **required** `string`

#### Output
* output `array`
  * items `string`

### get_image_vulnerabilities_by_type
Get vulnerabilities by type


```js
anchore.get_image_vulnerabilities_by_type({
  "imageDigest": "",
  "vtype": ""
}, context)
```

#### Input
* input `object`
  * imageDigest **required** `string`
  * vtype **required** `string`
  * force_refresh `boolean`
  * vendor_only `boolean`

#### Output
* output [VulnerabilityList](#vulnerabilitylist)

### list_policies
List all saved policy bundles


```js
anchore.list_policies({}, context)
```

#### Input
* input `object`
  * detail `boolean`: Include policy bundle detail in the form of the full bundle content for each entry

#### Output
* output [PolicyBundleList](#policybundlelist)

### add_policy
Adds a new policy bundle to the system


```js
anchore.add_policy({
  "bundle": {
    "id": "",
    "version": "",
    "policies": [],
    "mappings": []
  }
}, context)
```

#### Input
* input `object`
  * bundle **required** [PolicyBundle](#policybundle)

#### Output
* output [PolicyBundleRecord](#policybundlerecord)

### delete_policy
Delete the specified policy


```js
anchore.delete_policy({
  "policyId": ""
}, context)
```

#### Input
* input `object`
  * policyId **required** `string`

#### Output
*Output schema unknown*

### get_policy
Get the policy bundle content


```js
anchore.get_policy({
  "policyId": ""
}, context)
```

#### Input
* input `object`
  * policyId **required** `string`
  * detail `boolean`: Include policy bundle detail in the form of the full bundle content for each entry

#### Output
* output [PolicyBundleRecord](#policybundlerecord)

### update_policy
Update/replace and existing policy


```js
anchore.update_policy({
  "bundle": {},
  "policyId": ""
}, context)
```

#### Input
* input `object`
  * bundle **required** [PolicyBundleRecord](#policybundlerecord)
  * policyId **required** `string`
  * active `boolean`: Mark policy as active

#### Output
* output [PolicyBundleRecord](#policybundlerecord)

### list_registries
List all configured registries the system can/will watch


```js
anchore.list_registries(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [RegistryConfigurationList](#registryconfigurationlist)

### create_registry
Adds a new registry to the system


```js
anchore.create_registry({
  "registrydata": {}
}, context)
```

#### Input
* input `object`
  * validate `boolean`: flag to determine whether or not to validate registry/credential at registry add time
  * registrydata **required** [RegistryConfiguration](#registryconfiguration)

#### Output
* output [RegistryConfiguration](#registryconfiguration)

### delete_registry
Delete a registry configuration record from the system. Does not remove any images.


```js
anchore.delete_registry({
  "registry": ""
}, context)
```

#### Input
* input `object`
  * registry **required** `string`

#### Output
*Output schema unknown*

### get_registry
Get information on a specific registry


```js
anchore.get_registry({
  "registry": ""
}, context)
```

#### Input
* input `object`
  * registry **required** `string`

#### Output
* output [RegistryConfiguration](#registryconfiguration)

### update_registry
Replaces an existing registry record with the given record


```js
anchore.update_registry({
  "registry": "",
  "registrydata": {}
}, context)
```

#### Input
* input `object`
  * registry **required** `string`
  * validate `boolean`: flag to determine whether or not to validate registry/credential at registry update time
  * registrydata **required** [RegistryConfiguration](#registryconfiguration)

#### Output
* output [RegistryConfiguration](#registryconfiguration)

### add_repository
Add repository to watch


```js
anchore.add_repository({
  "repository": ""
}, context)
```

#### Input
* input `object`
  * repository **required** `string`: full repository to add e.g. docker.io/library/alpine
  * autosubscribe `boolean`: flag to enable/disable auto tag_update activation when new images from a repo are added
  * lookuptag `string`: use specified existing tag to perform repo scan (default is 'latest')

#### Output
* output [RepositoryTagList](#repositorytaglist)

### get_status
Get the API service status


```js
anchore.get_status(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [StatusResponse](#statusresponse)

### list_subscriptions
List all subscriptions


```js
anchore.list_subscriptions({}, context)
```

#### Input
* input `object`
  * subscription_key `string`: filter only subscriptions matching key
  * subscription_type `string`: filter only subscriptions matching type

#### Output
* output [SubscriptionList](#subscriptionlist)

### add_subscription
Create a new subscription to watch a tag and get notifications of changes


```js
anchore.add_subscription({
  "subscription": {}
}, context)
```

#### Input
* input `object`
  * subscription **required** [SubscriptionRequest](#subscriptionrequest)

#### Output
* output [Subscription](#subscription)

### delete_subscription
Delete subscriptions of a specific type


```js
anchore.delete_subscription({
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`

#### Output
*Output schema unknown*

### get_subscription
Get a specific subscription set


```js
anchore.get_subscription({
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`

#### Output
* output [SubscriptionList](#subscriptionlist)

### update_subscription
Update an existing and specific subscription


```js
anchore.update_subscription({
  "subscriptionId": "",
  "subscription": {}
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`
  * subscription **required** [SubscriptionUpdate](#subscriptionupdate)

#### Output
* output [Subscription](#subscription)

### list_imagetags
List all image tags visible to the user


```js
anchore.list_imagetags(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`: List of AnchoreImageTagSummary objects
  * items [AnchoreImageTagSummary](#anchoreimagetagsummary)

### get_service_detail
Get the system status including queue lengths


```js
anchore.get_service_detail(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [SystemStatusResponse](#systemstatusresponse)

### get_system_feeds
list feeds operations and information


```js
anchore.get_system_feeds(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [FeedMetadata](#feedmetadata)

### post_system_feeds
trigger feeds operations


```js
anchore.post_system_feeds({}, context)
```

#### Input
* input `object`
  * flush `boolean`: instruct system to flush existing data feeds records from anchore-engine
  * sync `boolean`: instruct system to re-sync data feeds

#### Output
*Output schema unknown*

### describe_policy
Get the policy language spec for this service


```js
anchore.describe_policy(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`: List of Gate specifications
  * items [GateSpec](#gatespec)

### get_system_prune_resourcetypes
Get list of resources that can be pruned


```js
anchore.get_system_prune_resourcetypes(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items `string`

### get_system_prune_candidates
Get list of candidates for pruning


```js
anchore.get_system_prune_candidates({
  "resourcetype": ""
}, context)
```

#### Input
* input `object`
  * resourcetype **required** `string`: resource type
  * dangling `boolean`: filter only disconnected resources
  * olderthan `integer`: filter only resources older than specified number of seconds

#### Output
* output [PruneCandidateList](#prunecandidatelist)

### post_system_prune_candidates
Perform pruning on input resource name


```js
anchore.post_system_prune_candidates({
  "resourcetype": "",
  "bodycontent": {}
}, context)
```

#### Input
* input `object`
  * resourcetype **required** `string`: resource type
  * bodycontent **required** [PruneCandidate](#prunecandidate)

#### Output
* output [PruneCandidateList](#prunecandidatelist)

### list_services
List system services


```js
anchore.list_services(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [ServiceList](#servicelist)

### get_services_by_name
Get a service configuration and state


```js
anchore.get_services_by_name({
  "servicename": ""
}, context)
```

#### Input
* input `object`
  * servicename **required** `string`

#### Output
* output [ServiceList](#servicelist)

### delete_service
Delete the service config


```js
anchore.delete_service({
  "servicename": "",
  "hostid": ""
}, context)
```

#### Input
* input `object`
  * servicename **required** `string`
  * hostid **required** `string`

#### Output
*Output schema unknown*

### get_services_by_name_and_host
Get service config for a specific host


```js
anchore.get_services_by_name_and_host({
  "servicename": "",
  "hostid": ""
}, context)
```

#### Input
* input `object`
  * servicename **required** `string`
  * hostid **required** `string`

#### Output
* output [ServiceList](#servicelist)



## Definitions

### AnchoreImage
* AnchoreImage `object`: A unique image in the engine. May have multiple tags or references. Unique to an image content across registries or repositories.
  * analysis_status `string` (values: not_analyzed, analyzing, analyzed, analysis_failed): A state value for the current status of the analysis progress of the image
  * created_at `string`
  * imageDigest `string`
  * image_content [ImageContent](#imagecontent)
  * image_detail `array`: Details specific to an image reference and type such as tag and image source
    * items [ImageDetail](#imagedetail)
  * image_status `string` (values: active, inactive, disabled): State of the image
  * last_updated `string`
  * userId `string`

### AnchoreImageList
* AnchoreImageList `array`: A list of Anchore Images
  * items [AnchoreImage](#anchoreimage)

### AnchoreImageTagSummary
* AnchoreImageTagSummary `object`: A unique image in the engine.
  * analysis_status `string`
  * created_at `integer`
  * fulltag `string`
  * imageDigest `string`
  * imageId `string`

### ApiErrorResponse
* ApiErrorResponse `object`: Generic HTTP API error response
  * code `integer`
  * detail `object`: Details structure for additional information about the error if available. Content and structure will be error specific.
  * error_type `string`
  * message `string`

### ContentResponse
* ContentResponse `object`: Generic wrapper for content listings from images
  * content `array`
    * items `object`
  * content_type `string`
  * imageDigest `string`

### FeedGroupMetadata
* FeedGroupMetadata `object`
  * created_at `string`
  * last_sync `string`
  * name `string`
  * record_count `integer`

### FeedMetadata
* FeedMetadata `object`: Metadata on a single feed based on what the engine finds from querying the endpoints
  * created_at `string`: Date the metadata record was created in engine (first seen on source)
  * groups `array`
    * items [FeedGroupMetadata](#feedgroupmetadata)
  * last_full_sync `string`
  * name `string`: name of the feed
  * updated_at `string`: Date the metadata was last updated

### GateSpec
* GateSpec `object`: A description of the set of gates available in this engine and the triggers and parameters supported
  * description `string`: Description of the gate
  * name `string`: Gate name, as it would appear in a policy document
  * state `string` (values: active, deprecated, eol): State of the gate and transitively all triggers it contains if not 'active'
  * superceded_by `string`: The name of another trigger that supercedes this on functionally if this is deprecated
  * triggers `array`: List of the triggers that can fire for this Gate
    * items [TriggerSpec](#triggerspec)

### ImageAnalysisReport
* ImageAnalysisReport `object`: Analysis report json to be imported

### ImageAnalysisRequest
* ImageAnalysisRequest `object`: A request to add an image to be watched and analyzed by the engine. Optionally include the dockerfile content. Either digest or tag must be present
  * annotations `object`: Annotations to be associated with the added image in key/value form
  * digest `string`: A full pullable digest reference for an image. e.g. docker.io/nginx@sha256:abc123
  * dockerfile `string`: Content of the dockerfile for the image, if available
  * image_type `string`: The type of image this is adding, defaults to "docker"
  * tag `string`: Full pullable tag reference for image. e.g. docker.io/nginx:latest

### ImageContent
* ImageContent `object`: A metadata content record for a specific image, containing different content type entries

### ImageDetail
* ImageDetail `object`: A metadata detail record for a specific image. Multiple detail records may map a single catalog image.
  * created_at `string`
  * dockerfile `string`
  * fullDigest `string`: Full docker-pullable digest string including the registry url and repository necessary get the image
  * fulltag `string`: Full docker-pullalbe tag string referencing the image
  * imageDigest `string`: The parent Anchore Image record to which this detail maps
  * imageId `string`
  * last_updated `string`
  * registry `string`
  * repo `string`
  * userId `string`

### ImageFilter
* ImageFilter `object`: Filter for an image list by id, tag, or digest, but not both
  * digest `string`
  * tag `string`

### ImageRef
* ImageRef `object`: A reference to an image
  * type **required** `string` (values: tag, digest, id)
  * value **required** `string`

### ImageSelectionRule
* ImageSelectionRule `object`
  * id `string`
  * image **required** [ImageRef](#imageref)
  * name **required** `string`
  * registry **required** `string`
  * repository **required** `string`

### MappingRule
* MappingRule `object`
  * id `string`
  * image **required** [ImageRef](#imageref)
  * name **required** `string`
  * policy_id `string`: Optional single policy to evalute, if set will override any value in policy_ids, for backwards compatibility. Generally, policy_ids should be used even with a array of length 1.
  * policy_ids `array`: List of policyIds to evaluate in order, to completion
    * items `string`: PolicyId to evaluate
  * registry **required** `string`
  * repository **required** `string`
  * whitelist_ids `array`
    * items `string`

### MetadataResponse
* MetadataResponse `object`: Generic wrapper for metadata listings from images
  * imageDigest `string`
  * metadata `object`
  * metadata_type `string`

### Policy
* Policy `object`
  * comment `string`
  * id **required** `string`
  * name `string`
  * rules `array`
    * items [PolicyRule](#policyrule)
  * version **required** `string`

### PolicyBundle
* PolicyBundle `object`: A bundle containing a set of policies, whitelists, and rules for mapping them to specific images
  * blacklisted_images `array`: List of mapping rules that define which images should always result in a STOP/FAIL policy result regardless of policy content or presence in whitelisted_images
    * items [ImageSelectionRule](#imageselectionrule)
  * comment `string`: Description of the bundle, human readable
  * id **required** `string`: Id of the bundle
  * mappings **required** `array`: Mapping rules for defining which policy and whitelist(s) to apply to an image based on a match of the image tag or id. Evaluated in order.
    * items [MappingRule](#mappingrule)
  * name `string`: Human readable name for the bundle
  * policies **required** `array`: Policies which define the go/stop/warn status of an image using rule matches on image properties
    * items [Policy](#policy)
  * version **required** `string`: Version id for this bundle format
  * whitelisted_images `array`: List of mapping rules that define which images should always be passed (unless also on the blacklist), regardless of policy result.
    * items [ImageSelectionRule](#imageselectionrule)
  * whitelists `array`: Whitelists which define which policy matches to disregard explicitly in the final policy decision
    * items [Whitelist](#whitelist)

### PolicyBundleList
* PolicyBundleList `array`: List of PolicyBundleRecord objects
  * items [PolicyBundleRecord](#policybundlerecord)

### PolicyBundleRecord
* PolicyBundleRecord `object`: A policy bundle plus some metadata
  * active `boolean`: True if the bundle is currently defined to be used automatically
  * created_at `string`
  * last_updated `string`
  * policyId `string`: The bundle's identifier
  * policy_source `string`: Source location of where the policy bundle originated
  * policybundle [PolicyBundle](#policybundle)
  * userId `string`: UserId of the user that owns the bundle

### PolicyEvaluation
* PolicyEvaluation `object`: Evaluation response object

### PolicyRule
* PolicyRule `object`: A rule that defines and decision value if the match is found true for a given image.
  * action **required** `string` (values: GO, STOP, WARN)
  * gate **required** `string`
  * id `string`
  * params `array`
    * items `object`
      * name **required** `string`
      * value **required** `string`
  * trigger **required** `string`

### PruneCandidate
* PruneCandidate `object`: A resource that can be pruned

### PruneCandidateList
* PruneCandidateList `array`: A list of prune candidate resources
  * items [PruneCandidate](#prunecandidate)

### RegistryConfiguration
* RegistryConfiguration `object`: A registry entry describing the endpoint and credentials for a registry to pull images from
  * created_at `string`
  * last_upated `string`
  * registry `string`: hostname:port string for accessing the registry, as would be used in a docker pull operation
  * registry_pass `string`: Password portion of credential to use for this registry
  * registry_type `string`: Type of registry
  * registry_user `string`: Username portion of credential to use for this registry
  * registry_verify `boolean`: Use TLS/SSL verification for the registry URL
  * userId `string`: Engine user that owns this registry entry

### RegistryConfigurationList
* RegistryConfigurationList `array`: List of registry configurations
  * items [RegistryConfiguration](#registryconfiguration)

### RepositoryTagList
* RepositoryTagList `array`: List of discovered tags in a repository
  * items `string`

### Service
* Service `object`: A service status record
  * base_url `string`: The url to reach the service, including port as needed
  * host_id `string`: The unique id of the host on which the service is executing
  * service_name `string`: Registered service name
  * status_message `string`: A state indicating the condition of the service. Normal operation is 'registered'
  * version `string`: The version of the service as reported by the service implementation on registration

### ServiceList
* ServiceList `array`: A list of service objects
  * items [Service](#service)

### StatusResponse
* StatusResponse `object`: System status response
  * busy `boolean`
  * message `string`
  * up `boolean`

### Subscription
* Subscription `object`: Subscription entry
  * active `boolean`: Is the subscription currently active
  * subscription_id `string`: the unique id for this subscription record
  * subscription_key `string`: The key value that the subscription references. E.g. a tag value or a repo name.
  * subscription_type `string` (values: policy_eval, tag_update, vuln_update, repo_update): The type of the subscription
  * subscription_value `string`: The value of the subscription target
  * userId `string`: The userId of the subscribed user

### SubscriptionList
* SubscriptionList `array`: List of subscriptions
  * items [Subscription](#subscription)

### SubscriptionRequest
* SubscriptionRequest `object`: A subscription entry to add to the system
  * subscription_key `string`
  * subscription_type `string` (values: policy_eval, tag_update, vuln_update, repo_update)
  * subscription_value `string`

### SubscriptionUpdate
* SubscriptionUpdate `object`: A modification to a subscription entry to change its status or value
  * active `boolean`: Toggle the subscription processing on or off
  * subscription_value `string`: The new subscription value, e.g. the new tag to be subscribed to

### SystemStatusResponse
* SystemStatusResponse `object`: System status response
  * busy `boolean`
  * detail `object`
  * message `string`
  * up `boolean`

### TriggerParamSpec
* TriggerParamSpec `object`
  * description `string`
  * example `string`: An example value for the parameter (encoded as a string if the parameter is an object or list type)
  * name `string`: Parameter name as it appears in policy document
  * required `boolean`: Is this a required parameter or optional
  * state `string` (values: active, deprecated, eol): State of the trigger parameter
  * superceded_by `string`: The name of another trigger that supercedes this on functionally if this is deprecated
  * validator `object`: If present, a definition for validation of input. Typically a jsonschema object that can be used to validate an input against.

### TriggerSpec
* TriggerSpec `object`: Definition of a trigger and its parameters
  * description `string`: Trigger description for what it tests and when it will fire during evaluation
  * name `string`: Name of the trigger as it would appear in a policy document
  * parameters `array`: The list of parameters that are valid for this trigger
    * items [TriggerParamSpec](#triggerparamspec)
  * state `string` (values: active, deprecated, eol): State of the trigger
  * superceded_by `string`: The name of another trigger that supercedes this on functionally if this is deprecated

### Vulnerability
* Vulnerability `object`
  * feed `string`: The name of the feed where vulnerability match was made
  * feed_group `string`: The name of the feed group where vulnerability match was made
  * fix `string`: The package containing a fix, if available
  * package `string`: The package name and version that are vulnerable in the image
  * package_cpe `string`: The CPE string (if applicable) describing the package to vulnerability match
  * package_name `string`: The name of the vulnerable package artifact
  * package_path `string`: The location (if applicable) of the vulnerable package in the container filesystem
  * package_type `string`: The type of vulnerable package
  * package_version `string`: The version of the vulnerable package artifact
  * severity `string`: The severity of the vulnerability
  * url `string`: The url for more information about the vulnerability
  * vuln `string`: The vulnerability identifier, such as CVE-2017-100, or RHSA-2017123

### VulnerabilityList
* VulnerabilityList `array`: List of Vulnerability objects
  * items [Vulnerability](#vulnerability)

### Whitelist
* Whitelist `object`: A collection of whitelist items to match a policy evaluation against.
  * comment `string`
  * id **required** `string`
  * items `array`
    * items [WhitelistItem](#whitelistitem)
  * name `string`
  * version **required** `string`

### WhitelistItem
* WhitelistItem `object`: Identifies a specific gate and trigger match from a policy against an image and indicates it should be ignored in final policy decisions
  * gate **required** `string`
  * id `string`
  * trigger_id **required** `string`


