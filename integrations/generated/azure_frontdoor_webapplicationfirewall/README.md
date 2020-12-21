# @datafire/azure_frontdoor_webapplicationfirewall

Client library for WebApplicationFirewallManagement

## Installation and Usage
```bash
npm install --save @datafire/azure_frontdoor_webapplicationfirewall
```
```js
let azure_frontdoor_webapplicationfirewall = require('@datafire/azure_frontdoor_webapplicationfirewall').create({
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

APIs to manage web application firewall rules.

## Actions

### ManagedRuleSets_List
Lists all available managed rule sets.


```js
azure_frontdoor_webapplicationfirewall.ManagedRuleSets_List({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client API version.

#### Output
* output [ManagedRuleSetDefinitionList](#managedrulesetdefinitionlist)

### Policies_List
Lists all of the protection policies within a resource group.


```js
azure_frontdoor_webapplicationfirewall.Policies_List({
  "resourceGroupName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the Resource group within the Azure subscription.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client API version.

#### Output
* output [WebApplicationFirewallPolicyList](#webapplicationfirewallpolicylist)

### Policies_Delete
Deletes Policy


```js
azure_frontdoor_webapplicationfirewall.Policies_Delete({
  "resourceGroupName": "",
  "policyName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the Resource group within the Azure subscription.
  * policyName **required** `string`: The name of the Web Application Firewall Policy.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client API version.

#### Output
*Output schema unknown*

### Policies_Get
Retrieve protection policy with specified name within a resource group.


```js
azure_frontdoor_webapplicationfirewall.Policies_Get({
  "resourceGroupName": "",
  "policyName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the Resource group within the Azure subscription.
  * policyName **required** `string`: The name of the Web Application Firewall Policy.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client API version.

#### Output
* output [WebApplicationFirewallPolicy](#webapplicationfirewallpolicy)

### Policies_CreateOrUpdate
Create or update policy with specified rule set name within a resource group.


```js
azure_frontdoor_webapplicationfirewall.Policies_CreateOrUpdate({
  "resourceGroupName": "",
  "policyName": "",
  "subscriptionId": "",
  "api-version": "",
  "parameters": null
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the Resource group within the Azure subscription.
  * policyName **required** `string`: The name of the Web Application Firewall Policy.
  * subscriptionId **required** `string`: The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client API version.
  * parameters **required** [WebApplicationFirewallPolicy](#webapplicationfirewallpolicy)

#### Output
* output [WebApplicationFirewallPolicy](#webapplicationfirewallpolicy)



## Definitions

### ActionType
* ActionType `string` (values: Allow, Block, Log, Redirect): Defines the action to take on rule match.

### CustomRule
* CustomRule `object`: Defines contents of a web application rule
  * action **required** [ActionType](#actiontype)
  * enabledState `string` (values: Disabled, Enabled): Describes if the custom rule is in enabled or disabled state. Defaults to Enabled if not specified.
  * matchConditions **required** `array`: List of match conditions.
    * items [MatchCondition](#matchcondition)
  * name `string`: Describes the name of the rule.
  * priority **required** `integer`: Describes priority of the rule. Rules with a lower value will be evaluated before rules with a higher value.
  * rateLimitDurationInMinutes `integer`: Time window for resetting the rate limit count. Default is 1 minute.
  * rateLimitThreshold `integer`: Number of allowed requests per client within the time window.
  * ruleType **required** `string` (values: MatchRule, RateLimitRule): Describes type of rule.

### CustomRuleList
* CustomRuleList `object`: Defines contents of custom rules
  * rules `array`: List of rules
    * items [CustomRule](#customrule)

### ErrorResponse
* ErrorResponse `object`: Error response indicates Front Door service is not able to process the incoming request. The reason is provided in the error message.
  * code `string`: Error code.
  * message `string`: Error message indicating why the operation failed.

### FrontendEndpointLink
* FrontendEndpointLink `object`: Defines the Resource ID for a Frontend Endpoint.
  * id `string`: Resource ID.

### ManagedRuleDefinition
* ManagedRuleDefinition `object`: Describes a managed rule definition.
  * defaultAction [ActionType](#actiontype)
  * defaultState [ManagedRuleEnabledState](#managedruleenabledstate)
  * description `string`: Describes the functionality of the managed rule.
  * ruleId `string`: Identifier for the managed rule.

### ManagedRuleEnabledState
* ManagedRuleEnabledState `string` (values: Disabled, Enabled): Describes if the managed rule is in enabled or disabled state.

### ManagedRuleExclusion
* ManagedRuleExclusion `object`: Exclude variables from managed rule evaluation.
  * matchVariable **required** `string` (values: RequestHeaderNames, RequestCookieNames, QueryStringArgNames, RequestBodyPostArgNames): The variable type to be excluded.
  * selector **required** `string`: Selector value for which elements in the collection this exclusion applies to.
  * selectorMatchOperator **required** `string` (values: Equals, Contains, StartsWith, EndsWith, EqualsAny): Comparison operator to apply to the selector when specifying which elements in the collection this exclusion applies to.

### ManagedRuleGroupDefinition
* ManagedRuleGroupDefinition `object`: Describes a managed rule group.
  * description `string`: Description of the managed rule group.
  * ruleGroupName `string`: Name of the managed rule group.
  * rules `array`: List of rules within the managed rule group.
    * items [ManagedRuleDefinition](#managedruledefinition)

### ManagedRuleGroupOverride
* ManagedRuleGroupOverride `object`: Defines a managed rule group override setting.
  * exclusions `array`: Describes the exclusions that are applied to all rules in the group.
    * items [ManagedRuleExclusion](#managedruleexclusion)
  * ruleGroupName **required** `string`: Describes the managed rule group to override.
  * rules `array`: List of rules that will be disabled. If none specified, all rules in the group will be disabled.
    * items [ManagedRuleOverride](#managedruleoverride)

### ManagedRuleOverride
* ManagedRuleOverride `object`: Defines a managed rule group override setting.
  * action [ActionType](#actiontype)
  * enabledState [ManagedRuleEnabledState](#managedruleenabledstate)
  * exclusions `array`: Describes the exclusions that are applied to this specific rule.
    * items [ManagedRuleExclusion](#managedruleexclusion)
  * ruleId **required** `string`: Identifier for the managed rule.

### ManagedRuleSet
* ManagedRuleSet `object`: Defines a managed rule set.
  * exclusions `array`: Describes the exclusions that are applied to all rules in the set.
    * items [ManagedRuleExclusion](#managedruleexclusion)
  * ruleGroupOverrides `array`: Defines the rule group overrides to apply to the rule set.
    * items [ManagedRuleGroupOverride](#managedrulegroupoverride)
  * ruleSetType **required** `string`: Defines the rule set type to use.
  * ruleSetVersion **required** `string`: Defines the version of the rule set to use.

### ManagedRuleSetDefinition
* ManagedRuleSetDefinition `object`: Describes the a managed rule set definition.
  * properties [ManagedRuleSetDefinitionProperties](#managedrulesetdefinitionproperties)
  * id `string`: Resource ID.
  * location `string`: Resource location.
  * name `string`: Resource name.
  * tags `object`: Resource tags.
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
* MatchCondition `object`: Define a match condition.
  * matchValue **required** `array`: List of possible match values.
    * items `string`
  * matchVariable **required** `string` (values: RemoteAddr, RequestMethod, QueryString, PostArgs, RequestUri, RequestHeader, RequestBody, Cookies, SocketAddr): Request variable to compare with.
  * negateCondition `boolean`: Describes if the result of this condition should be negated.
  * operator **required** `string` (values: Any, IPMatch, GeoMatch, Equal, Contains, LessThan, GreaterThan, LessThanOrEqual, GreaterThanOrEqual, BeginsWith, EndsWith, RegEx): Comparison type to use for matching with the variable value.
  * selector `string`: Match against a specific key from the QueryString, PostArgs, RequestHeader or Cookies variables. Default is null.
  * transforms `array`: List of transforms.
    * items [TransformType](#transformtype)

### PolicySettings
* PolicySettings `object`: Defines top-level WebApplicationFirewallPolicy configuration settings.
  * customBlockResponseBody `string`: If the action type is block, customer can override the response body. The body must be specified in base64 encoding.
  * customBlockResponseStatusCode `integer`: If the action type is block, customer can override the response status code.
  * enabledState `string` (values: Disabled, Enabled): Describes if the policy is in enabled or disabled state. Defaults to Enabled if not specified.
  * mode `string` (values: Prevention, Detection): Describes if it is in detection mode or prevention mode at policy level.
  * redirectUrl `string`: If action type is redirect, this field represents redirect URL for the client.

### TransformType
* TransformType `string` (values: Lowercase, Uppercase, Trim, UrlDecode, UrlEncode, RemoveNulls): Describes what transforms applied before matching.

### WebApplicationFirewallPolicy
* WebApplicationFirewallPolicy `object`: Defines web application firewall policy.
  * etag `string`: Gets a unique read-only string that changes whenever the resource is updated.
  * properties [WebApplicationFirewallPolicyProperties](#webapplicationfirewallpolicyproperties)
  * id `string`: Resource ID.
  * location `string`: Resource location.
  * name `string`: Resource name.
  * tags `object`: Resource tags.
  * type `string`: Resource type.

### WebApplicationFirewallPolicyList
* WebApplicationFirewallPolicyList `object`: Defines a list of WebApplicationFirewallPolicies. It contains a list of WebApplicationFirewallPolicy objects and a URL link to get the next set of results.
  * nextLink `string`: URL to get the next set of WebApplicationFirewallPolicy objects if there are any.
  * value `array`: List of WebApplicationFirewallPolicies within a resource group.
    * items [WebApplicationFirewallPolicy](#webapplicationfirewallpolicy)

### WebApplicationFirewallPolicyProperties
* WebApplicationFirewallPolicyProperties `object`: Defines web application firewall policy properties.
  * customRules [CustomRuleList](#customrulelist)
  * frontendEndpointLinks `array`: Describes Frontend Endpoints associated with this Web Application Firewall policy.
    * items [FrontendEndpointLink](#frontendendpointlink)
  * managedRules [ManagedRuleSetList](#managedrulesetlist)
  * policySettings [PolicySettings](#policysettings)
  * provisioningState `string`: Provisioning state of the policy.
  * resourceState `string` (values: Creating, Enabling, Enabled, Disabling, Disabled, Deleting)


