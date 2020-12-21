# @datafire/azure_cdn_cdnwebapplicationfirewall

Client library for Azure CDN WebApplicationFirewallManagement

## Installation and Usage
```bash
npm install --save @datafire/azure_cdn_cdnwebapplicationfirewall
```
```js
let azure_cdn_cdnwebapplicationfirewall = require('@datafire/azure_cdn_cdnwebapplicationfirewall').create({
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

APIs to manage web application firewall rules for Azure CDN

## Actions

### ManagedRuleSets_List
Lists all available managed rule sets.


```js
azure_cdn_cdnwebapplicationfirewall.ManagedRuleSets_List({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure Subscription ID.
  * api-version **required** `string`: Version of the API to be used with the client request. Current version is 2017-04-02.

#### Output
* output [ManagedRuleSetDefinitionList](#managedrulesetdefinitionlist)

### Policies_List
Lists all of the protection policies within a resource group.


```js
azure_cdn_cdnwebapplicationfirewall.Policies_List({
  "resourceGroupName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the Resource group within the Azure subscription.
  * subscriptionId **required** `string`: Azure Subscription ID.
  * api-version **required** `string`: Version of the API to be used with the client request. Current version is 2017-04-02.

#### Output
* output [CdnWebApplicationFirewallPolicyList](#cdnwebapplicationfirewallpolicylist)

### Policies_Delete
Deletes Policy


```js
azure_cdn_cdnwebapplicationfirewall.Policies_Delete({
  "resourceGroupName": "",
  "policyName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the Resource group within the Azure subscription.
  * policyName **required** `string`: The name of the CdnWebApplicationFirewallPolicy.
  * subscriptionId **required** `string`: Azure Subscription ID.
  * api-version **required** `string`: Version of the API to be used with the client request. Current version is 2017-04-02.

#### Output
*Output schema unknown*

### Policies_Get
Retrieve protection policy with specified name within a resource group.


```js
azure_cdn_cdnwebapplicationfirewall.Policies_Get({
  "resourceGroupName": "",
  "policyName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the Resource group within the Azure subscription.
  * policyName **required** `string`: The name of the CdnWebApplicationFirewallPolicy.
  * subscriptionId **required** `string`: Azure Subscription ID.
  * api-version **required** `string`: Version of the API to be used with the client request. Current version is 2017-04-02.

#### Output
* output [CdnWebApplicationFirewallPolicy](#cdnwebapplicationfirewallpolicy)

### Policies_Update
Update an existing CdnWebApplicationFirewallPolicy with the specified policy name under the specified subscription and resource group


```js
azure_cdn_cdnwebapplicationfirewall.Policies_Update({
  "resourceGroupName": "",
  "policyName": "",
  "subscriptionId": "",
  "api-version": "",
  "cdnWebApplicationFirewallPolicyPatchParameters": {}
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the Resource group within the Azure subscription.
  * policyName **required** `string`: The name of the CdnWebApplicationFirewallPolicy.
  * subscriptionId **required** `string`: Azure Subscription ID.
  * api-version **required** `string`: Version of the API to be used with the client request. Current version is 2017-04-02.
  * cdnWebApplicationFirewallPolicyPatchParameters **required** [CdnWebApplicationFirewallPolicyPatchParameters](#cdnwebapplicationfirewallpolicypatchparameters)

#### Output
* output [CdnWebApplicationFirewallPolicy](#cdnwebapplicationfirewallpolicy)

### Policies_CreateOrUpdate
Create or update policy with specified rule set name within a resource group.


```js
azure_cdn_cdnwebapplicationfirewall.Policies_CreateOrUpdate({
  "resourceGroupName": "",
  "policyName": "",
  "subscriptionId": "",
  "api-version": "",
  "cdnWebApplicationFirewallPolicy": null
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the Resource group within the Azure subscription.
  * policyName **required** `string`: The name of the CdnWebApplicationFirewallPolicy.
  * subscriptionId **required** `string`: Azure Subscription ID.
  * api-version **required** `string`: Version of the API to be used with the client request. Current version is 2017-04-02.
  * cdnWebApplicationFirewallPolicy **required** [CdnWebApplicationFirewallPolicy](#cdnwebapplicationfirewallpolicy)

#### Output
* output [CdnWebApplicationFirewallPolicy](#cdnwebapplicationfirewallpolicy)



## Definitions

### ActionType
* ActionType `string` (values: Allow, Block, Log, Redirect): Defines the action to take on rule match.

### CdnEndpoint
* CdnEndpoint `object`: Defines the ARM Resource ID for the linked endpoints
  * id `string`: ARM Resource ID string.

### CdnWebApplicationFirewallPolicy
* CdnWebApplicationFirewallPolicy `object`: Defines web application firewall policy for Azure CDN.
  * etag `string`: Gets a unique read-only string that changes whenever the resource is updated.
  * properties [CdnWebApplicationFirewallPolicyProperties](#cdnwebapplicationfirewallpolicyproperties)
  * sku **required** `object`: The pricing tier (defines a CDN provider, feature list and rate) of the CDN profile.
    * name `string` (values: Standard_Verizon, Premium_Verizon, Custom_Verizon, Standard_Akamai, Standard_ChinaCdn, Standard_Microsoft, Premium_ChinaCdn): Name of the pricing tier.
  * location **required** `string`: Resource location.
  * tags `object`: Resource tags.
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type.

### CdnWebApplicationFirewallPolicyList
* CdnWebApplicationFirewallPolicyList `object`: Defines a list of WebApplicationFirewallPolicies for Azure CDN. It contains a list of WebApplicationFirewallPolicy objects and a URL link to get the next set of results.
  * nextLink `string`: URL to get the next set of WebApplicationFirewallPolicy objects if there are any.
  * value `array`: List of Azure CDN WebApplicationFirewallPolicies within a resource group.
    * items [CdnWebApplicationFirewallPolicy](#cdnwebapplicationfirewallpolicy)

### CdnWebApplicationFirewallPolicyPatchParameters
* CdnWebApplicationFirewallPolicyPatchParameters `object`: Properties required to update a CdnWebApplicationFirewallPolicy.
  * tags `object`: CdnWebApplicationFirewallPolicy tags

### CdnWebApplicationFirewallPolicyProperties
* CdnWebApplicationFirewallPolicyProperties `object`: Defines CDN web application firewall policy properties.
  * customRules [CustomRuleList](#customrulelist)
  * endpointLinks `array`: Describes Azure CDN endpoints associated with this Web Application Firewall policy.
    * items [CdnEndpoint](#cdnendpoint)
  * managedRules [ManagedRuleSetList](#managedrulesetlist)
  * policySettings [policySettings](#policysettings)
  * provisioningState `string` (values: Creating, Succeeded, Failed): Provisioning state of the WebApplicationFirewallPolicy.
  * rateLimitRules [RateLimitRuleList](#ratelimitrulelist)
  * resourceState `string` (values: Creating, Enabling, Enabled, Disabling, Disabled, Deleting)

### CustomRule
* CustomRule `object`: Defines the common attributes for a custom rule that can be included in a waf policy
  * action **required** [ActionType](#actiontype)
  * enabledState `string` (values: Disabled, Enabled): Describes if the custom rule is in enabled or disabled state. Defaults to Enabled if not specified.
  * matchConditions **required** `array`: List of match conditions.
    * items [MatchCondition](#matchcondition)
  * name **required** `string`: Defines the name of the custom rule
  * priority **required** `integer`: Defines in what order this rule be evaluated in the overall list of custom rules

### CustomRuleList
* CustomRuleList `object`: Defines contents of custom rules
  * rules `array`: List of rules
    * items [CustomRule](#customrule)

### ManagedRuleDefinition
* ManagedRuleDefinition `object`: Describes a managed rule definition.
  * description `string`: Describes the functionality of the managed rule.
  * ruleId `string`: Identifier for the managed rule.

### ManagedRuleGroupDefinition
* ManagedRuleGroupDefinition `object`: Describes a managed rule group.
  * description `string`: Description of the managed rule group.
  * ruleGroupName `string`: Name of the managed rule group.
  * rules `array`: List of rules within the managed rule group.
    * items [ManagedRuleDefinition](#managedruledefinition)

### ManagedRuleGroupOverride
* ManagedRuleGroupOverride `object`: Defines a managed rule group override setting.
  * ruleGroupName **required** `string`: Describes the managed rule group within the rule set to override
  * rules `array`: List of rules that will be disabled. If none specified, all rules in the group will be disabled.
    * items [ManagedRuleOverride](#managedruleoverride)

### ManagedRuleOverride
* ManagedRuleOverride `object`: Defines a managed rule group override setting.
  * action [ActionType](#actiontype)
  * enabledState `string` (values: Disabled, Enabled): Describes if the managed rule is in enabled or disabled state. Defaults to Disabled if not specified.
  * ruleId **required** `string`: Identifier for the managed rule.

### ManagedRuleSet
* ManagedRuleSet `object`: Defines a managed rule set.
  * anomalyScore `integer`: Verizon only : If the rule set supports anomaly detection mode, this describes the threshold for blocking requests.
  * ruleGroupOverrides `array`: Defines the rule overrides to apply to the rule set.
    * items [ManagedRuleGroupOverride](#managedrulegroupoverride)
  * ruleSetType **required** `string`: Defines the rule set type to use.
  * ruleSetVersion **required** `string`: Defines the version of the rule set to use.

### ManagedRuleSetDefinition
* ManagedRuleSetDefinition `object`: Describes a managed rule set definition.
  * properties [ManagedRuleSetDefinitionProperties](#managedrulesetdefinitionproperties)
  * sku `object`: The pricing tier (defines a CDN provider, feature list and rate) of the CDN profile.
    * name `string` (values: Standard_Verizon, Premium_Verizon, Custom_Verizon, Standard_Akamai, Standard_ChinaCdn, Standard_Microsoft, Premium_ChinaCdn): Name of the pricing tier.
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type.

### ManagedRuleSetDefinitionList
* ManagedRuleSetDefinitionList `object`: List of managed rule set definitions available for use in a policy.
  * nextLink `string`: URL to retrieve next set of managed rule set definitions.
  * value `array`: List of managed rule set definitions.
    * items [ManagedRuleSetDefinition](#managedrulesetdefinition)

### ManagedRuleSetDefinitionProperties
* ManagedRuleSetDefinitionProperties `object`: Properties for a managed rule set definition.
  * provisioningState `string`: Provisioning state of the managed rule set.
  * ruleGroups `array`: Rule groups of the managed rule set.
    * items [ManagedRuleGroupDefinition](#managedrulegroupdefinition)
  * ruleSetType `string`: Type of the managed rule set.
  * ruleSetVersion `string`: Version of the managed rule set type.

### ManagedRuleSetList
* ManagedRuleSetList `object`: Defines the list of managed rule sets for the policy.
  * managedRuleSets `array`: List of rule sets.
    * items [ManagedRuleSet](#managedruleset)

### MatchCondition
* MatchCondition `object`: Define match conditions
  * matchValue **required** `array`: List of possible match values.
    * items `string`
  * matchVariable **required** `string` (values: RemoteAddr, Country, RequestMethod, RequestHeader, RequestUri, QueryString, RequestBody, Cookies, PostArgs): Match variable to compare against.
  * negateCondition `boolean`: Describes if the result of this condition should be negated.
  * operator **required** `string` (values: Any, IPMatch, GeoMatch, Equal, Contains, LessThan, GreaterThan, LessThanOrEqual, GreaterThanOrEqual, BeginsWith, EndsWith, RegEx): Describes operator to be matched
  * selector `string`: Selector can used to match a specific key for QueryString, RequestUri, RequestHeaders or RequestBody.
  * transforms `array`: List of transforms.
    * items [TransformType](#transformtype)

### RateLimitRule
* RateLimitRule `object`: Defines a rate limiting rule that can be included in a waf policy
  * rateLimitDurationInMinutes **required** `integer`: Defines rate limit duration. Default is 1 minute.
  * rateLimitThreshold **required** `integer`: Defines rate limit threshold.
  * action **required** [ActionType](#actiontype)
  * enabledState `string` (values: Disabled, Enabled): Describes if the custom rule is in enabled or disabled state. Defaults to Enabled if not specified.
  * matchConditions **required** `array`: List of match conditions.
    * items [MatchCondition](#matchcondition)
  * name **required** `string`: Defines the name of the custom rule
  * priority **required** `integer`: Defines in what order this rule be evaluated in the overall list of custom rules

### RateLimitRuleList
* RateLimitRuleList `object`: Defines contents of rate limit rules
  * rules `array`: List of rules
    * items [RateLimitRule](#ratelimitrule)

### TransformType
* TransformType `string` (values: Lowercase, Uppercase, Trim, UrlDecode, UrlEncode, RemoveNulls): Describes what transforms were applied before matching.

### policySettings
* policySettings `object`: Defines contents of a web application firewall global configuration
  * defaultCustomBlockResponseBody `string`: If the action type is block, customer can override the response body. The body must be specified in base64 encoding.
  * defaultCustomBlockResponseStatusCode `integer`: If the action type is block, this field defines the default customer overridable http response status code.
  * defaultRedirectUrl `string`: If action type is redirect, this field represents the default redirect URL for the client.
  * enabledState `string` (values: Disabled, Enabled): describes if the policy is in enabled state or disabled state
  * mode `string` (values: Prevention, Detection): Describes if it is in detection mode or prevention mode at policy level.


