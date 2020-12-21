# @datafire/github

Client library for GitHub v3 REST API

## Installation and Usage
```bash
npm install --save @datafire/github
```
```js
let github = require('@datafire/github').create();

.then(data => {
  console.log(data);
});
```

## Description

GitHub's v3 REST API.

## Actions

### .get
Get Hypermedia links to resources accessible in GitHub's REST API


```js
github..get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * authorizations_url **required** `string`
  * code_search_url **required** `string`
  * commit_search_url **required** `string`
  * current_user_authorizations_html_url **required** `string`
  * current_user_repositories_url **required** `string`
  * current_user_url **required** `string`
  * emails_url **required** `string`
  * emojis_url **required** `string`
  * events_url **required** `string`
  * feeds_url **required** `string`
  * followers_url **required** `string`
  * following_url **required** `string`
  * gists_url **required** `string`
  * hub_url **required** `string`
  * issue_search_url **required** `string`
  * issues_url **required** `string`
  * keys_url **required** `string`
  * label_search_url **required** `string`
  * notifications_url **required** `string`
  * organization_repositories_url **required** `string`
  * organization_teams_url **required** `string`
  * organization_url **required** `string`
  * public_gists_url **required** `string`
  * rate_limit_url **required** `string`
  * repository_search_url **required** `string`
  * repository_url **required** `string`
  * starred_gists_url **required** `string`
  * starred_url **required** `string`
  * topic_search_url `string`
  * user_organizations_url **required** `string`
  * user_repositories_url **required** `string`
  * user_search_url **required** `string`
  * user_url **required** `string`

### app.get
Returns the GitHub App associated with the authentication credentials used. To see how many app installations are associated with this GitHub App, see the `installations_count` in the response. For more details about your app's installations, see the "[List installations for the authenticated app](https://developer.github.com/v3/apps/#list-installations-for-the-authenticated-app)" endpoint.

You must use a [JWT](https://developer.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.


```js
github.app.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [integration](#integration)

### app_manifests.code.conversions.post
Use this endpoint to complete the handshake necessary when implementing the [GitHub App Manifest flow](https://developer.github.com/apps/building-github-apps/creating-github-apps-from-a-manifest/). When you create a GitHub App with the manifest flow, you receive a temporary `code` used to retrieve the GitHub App's `id`, `pem` (private key), and `webhook_secret`.


```js
github.app_manifests.code.conversions.post({
  "code": ""
}, context)
```

#### Input
* input `object`
  * code **required** `string`: code parameter

#### Output
* output
  * client_id `string`
  * client_secret `string`
  * created_at **required** `string`
  * description **required** `string`
  * events **required** `array`: The list of events for the GitHub app
    * items `string`
  * external_url **required** `string`
  * html_url **required** `string`
  * id **required** `integer`: Unique identifier of the GitHub app
  * installations_count `integer`: The number of installations associated with the GitHub app
  * name **required** `string`: The name of the GitHub app
  * node_id **required** `string`
  * owner **required**
    * avatar_url **required** `string`
    * events_url **required** `string`
    * followers_url **required** `string`
    * following_url **required** `string`
    * gists_url **required** `string`
    * gravatar_id **required** `string`
    * html_url **required** `string`
    * id **required** `integer`
    * login **required** `string`
    * node_id **required** `string`
    * organizations_url **required** `string`
    * received_events_url **required** `string`
    * repos_url **required** `string`
    * site_admin **required** `boolean`
    * starred_at `string`
    * starred_url **required** `string`
    * subscriptions_url **required** `string`
    * type **required** `string`
    * url **required** `string`
  * pem `string`
  * permissions **required** `object`: The set of permissions for the GitHub app
    * checks `string`
    * contents `string`
    * deployments `string`
    * issues `string`
    * metadata `string`
  * slug `string`: The slug name of the GitHub app
  * updated_at **required** `string`
  * webhook_secret `string`
  * client_id **required** `string`
  * client_secret **required** `string`
  * pem **required** `string`
  * webhook_secret **required** `string`

### app.installations.get
You must use a [JWT](https://developer.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.

The permissions the installation has are included under the `permissions` key.


```js
github.app.installations.get({}, context)
```

#### Input
* input `object`
  * per_page `integer`: Results per page (max 100)
  * page `integer`: Page number of the results to fetch.
  * since `string`: Only show notifications updated after the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
  * outdated `string`

#### Output
* output `array`
  * items [installation](#installation)

### app.installations.installation_id.delete
Uninstalls a GitHub App on a user, organization, or business account. If you prefer to temporarily suspend an app's access to your account's resources, then we recommend the "[Suspend an app installation](https://developer.github.com/v3/apps/#suspend-an-app-installation)" endpoint.

You must use a [JWT](https://developer.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.


```js
github.app.installations.installation_id.delete({
  "installation_id": 0
}, context)
```

#### Input
* input `object`
  * installation_id **required** `integer`: installation_id parameter

#### Output
*Output schema unknown*

### app.installations.installation_id.get
Enables an authenticated GitHub App to find an installation's information using the installation id. The installation's account type (`target_type`) will be either an organization or a user account, depending which account the repository belongs to.

You must use a [JWT](https://developer.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.


```js
github.app.installations.installation_id.get({
  "installation_id": 0
}, context)
```

#### Input
* input `object`
  * installation_id **required** `integer`: installation_id parameter

#### Output
* output [installation](#installation)

### app.installations.installation_id.access_tokens.post
Creates an installation access token that enables a GitHub App to make authenticated API requests for the app's installation on an organization or individual account. Installation tokens expire one hour from the time you create them. Using an expired token produces a status code of `401 - Unauthorized`, and requires creating a new installation token. By default the installation token has access to all repositories that the installation can access. To restrict the access to specific repositories, you can provide the `repository_ids` when creating the token. When you omit `repository_ids`, the response does not contain the `repositories` key.

You must use a [JWT](https://developer.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.


```js
github.app.installations.installation_id.access_tokens.post({
  "installation_id": 0
}, context)
```

#### Input
* input `object`
  * installation_id **required** `integer`: installation_id parameter
  * body `object`
    * permissions `object`
      * contents `string`
      * def_not_a_repo `string`
      * deployments `string`
      * issues `string`
      * single_file `string`
    * repositories `array`: List of repository names that the token should have access to
      * items `string`
    * repository_ids `array`: List of repository IDs that the token should have access to
      * items `integer`

#### Output
* output [installation-token](#installation-token)

### app.installations.installation_id.suspended.delete
**Note:** Suspending a GitHub App installation is currently in beta and subject to change. Before you can suspend a GitHub App, the app owner must enable suspending installations for the app by opting-in to the beta. For more information, see "[Suspending a GitHub App installation](https://developer.github.com/apps/managing-github-apps/suspending-a-github-app-installation/)."

Removes a GitHub App installation suspension.

To unsuspend a GitHub App, you must be an account owner or have admin permissions in the repository or organization where the app is installed and suspended.

You must use a [JWT](https://developer.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.


```js
github.app.installations.installation_id.suspended.delete({
  "installation_id": 0
}, context)
```

#### Input
* input `object`
  * installation_id **required** `integer`: installation_id parameter

#### Output
*Output schema unknown*

### app.installations.installation_id.suspended.put
**Note:** Suspending a GitHub App installation is currently in beta and subject to change. Before you can suspend a GitHub App, the app owner must enable suspending installations for the app by opting-in to the beta. For more information, see "[Suspending a GitHub App installation](https://developer.github.com/apps/managing-github-apps/suspending-a-github-app-installation/)."

Suspends a GitHub App on a user, organization, or business account, which blocks the app from accessing the account's resources. When a GitHub App is suspended, the app's access to the GitHub API or webhook events is blocked for that account.

To suspend a GitHub App, you must be an account owner or have admin permissions in the repository or organization where the app is installed.

You must use a [JWT](https://developer.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.


```js
github.app.installations.installation_id.suspended.put({
  "installation_id": 0
}, context)
```

#### Input
* input `object`
  * installation_id **required** `integer`: installation_id parameter

#### Output
*Output schema unknown*

### applications.grants.get
**Deprecation Notice:** GitHub will discontinue the [OAuth Authorizations API](https://developer.github.com/v3/oauth_authorizations/), which is used by integrations to create personal access tokens and OAuth tokens, and you must now create these tokens using our [web application flow](https://developer.github.com/apps/building-oauth-apps/authorizing-oauth-apps/#web-application-flow). The [OAuth Authorizations API](https://developer.github.com/v3/oauth_authorizations/) will be removed on November, 13, 2020. For more information, including scheduled brownouts, see the [blog post](https://developer.github.com/changes/2020-02-14-deprecating-oauth-auth-endpoint/).

You can use this API to list the set of OAuth applications that have been granted access to your account. Unlike the [list your authorizations](https://developer.github.com/v3/oauth_authorizations/#list-your-authorizations) API, this API does not manage individual tokens. This API will return one entry for each OAuth application that has been granted access to your account, regardless of the number of tokens an application has generated for your user. The list of OAuth applications returned matches what is shown on [the application authorizations settings screen within GitHub](https://github.com/settings/applications#authorized). The `scopes` returned are the union of scopes authorized for the application. For example, if an application has one token with `repo` scope and another token with `user` scope, the grant will return `["repo", "user"]`.


```js
github.applications.grants.get({}, context)
```

#### Input
* input `object`
  * per_page `integer`: Results per page (max 100)
  * page `integer`: Page number of the results to fetch.

#### Output
* output `array`
  * items [application-grant](#application-grant)

### applications.grants.grant_id.delete
**Deprecation Notice:** GitHub will discontinue the [OAuth Authorizations API](https://developer.github.com/v3/oauth_authorizations/), which is used by integrations to create personal access tokens and OAuth tokens, and you must now create these tokens using our [web application flow](https://developer.github.com/apps/building-oauth-apps/authorizing-oauth-apps/#web-application-flow). The [OAuth Authorizations API](https://developer.github.com/v3/oauth_authorizations/) will be removed on November, 13, 2020. For more information, including scheduled brownouts, see the [blog post](https://developer.github.com/changes/2020-02-14-deprecating-oauth-auth-endpoint/).

Deleting an OAuth application's grant will also delete all OAuth tokens associated with the application for your user. Once deleted, the application has no access to your account and is no longer listed on [the application authorizations settings screen within GitHub](https://github.com/settings/applications#authorized).


```js
github.applications.grants.grant_id.delete({
  "grant_id": 0
}, context)
```

#### Input
* input `object`
  * grant_id **required** `integer`: grant_id parameter

#### Output
*Output schema unknown*

### applications.grants.grant_id.get
**Deprecation Notice:** GitHub will discontinue the [OAuth Authorizations API](https://developer.github.com/v3/oauth_authorizations/), which is used by integrations to create personal access tokens and OAuth tokens, and you must now create these tokens using our [web application flow](https://developer.github.com/apps/building-oauth-apps/authorizing-oauth-apps/#web-application-flow). The [OAuth Authorizations API](https://developer.github.com/v3/oauth_authorizations/) will be removed on November, 13, 2020. For more information, including scheduled brownouts, see the [blog post](https://developer.github.com/changes/2020-02-14-deprecating-oauth-auth-endpoint/).


```js
github.applications.grants.grant_id.get({
  "grant_id": 0
}, context)
```

#### Input
* input `object`
  * grant_id **required** `integer`: grant_id parameter

#### Output
* output [application-grant](#application-grant)

### applications.client_id.grant.delete
OAuth application owners can revoke a grant for their OAuth application and a specific user. You must use [Basic Authentication](https://developer.github.com/v3/auth#basic-authentication) when accessing this endpoint, using the OAuth application's `client_id` and `client_secret` as the username and password. You must also provide a valid OAuth `access_token` as an input parameter and the grant for the token's owner will be deleted.
Deleting an OAuth application's grant will also delete all OAuth tokens associated with the application for the user. Once deleted, the application will have no access to the user's account and will no longer be listed on [the application authorizations settings screen within GitHub](https://github.com/settings/applications#authorized).


```js
github.applications.client_id.grant.delete({
  "client_id": ""
}, context)
```

#### Input
* input `object`
  * client_id **required** `string`
  * body `object`
    * access_token `string`: The OAuth access token used to authenticate to the GitHub API.

#### Output
*Output schema unknown*

### applications.client_id.grants.access_token.delete
**Deprecation Notice:** GitHub will replace and discontinue OAuth endpoints containing `access_token` in the path parameter. We are introducing new endpoints that allow you to securely manage tokens for OAuth Apps by using `access_token` as an input parameter. The OAuth Application API will be removed on May 5, 2021. For more information, including scheduled brownouts, see the [blog post](https://developer.github.com/changes/2020-02-14-deprecating-oauth-app-endpoint/).

OAuth application owners can revoke a grant for their OAuth application and a specific user. You must use [Basic Authentication](https://developer.github.com/v3/auth#basic-authentication) when accessing this endpoint, using the OAuth application's `client_id` and `client_secret` as the username and password. You must also provide a valid token as `:access_token` and the grant for the token's owner will be deleted.

Deleting an OAuth application's grant will also delete all OAuth tokens associated with the application for the user. Once deleted, the application will have no access to the user's account and will no longer be listed on [the Applications settings page under "Authorized OAuth Apps" on GitHub](https://github.com/settings/applications#authorized).


```js
github.applications.client_id.grants.access_token.delete({
  "client_id": "",
  "access_token": ""
}, context)
```

#### Input
* input `object`
  * client_id **required** `string`
  * access_token **required** `string`

#### Output
*Output schema unknown*

### applications.client_id.token.delete
OAuth application owners can revoke a single token for an OAuth application. You must use [Basic Authentication](https://developer.github.com/v3/auth#basic-authentication) when accessing this endpoint, using the OAuth application's `client_id` and `client_secret` as the username and password.


```js
github.applications.client_id.token.delete({
  "client_id": ""
}, context)
```

#### Input
* input `object`
  * client_id **required** `string`
  * body `object`
    * access_token `string`: The OAuth access token used to authenticate to the GitHub API.

#### Output
*Output schema unknown*

### applications.client_id.token.patch
OAuth applications can use this API method to reset a valid OAuth token without end-user involvement. Applications must save the "token" property in the response because changes take effect immediately. You must use [Basic Authentication](https://developer.github.com/v3/auth#basic-authentication) when accessing this endpoint, using the OAuth application's `client_id` and `client_secret` as the username and password. Invalid tokens will return `404 NOT FOUND`.


```js
github.applications.client_id.token.patch({
  "client_id": ""
}, context)
```

#### Input
* input `object`
  * client_id **required** `string`
  * body `object`
    * access_token **required** `string`: The access_token of the OAuth application.

#### Output
* output [authorization](#authorization)

### applications.client_id.token.post
OAuth applications can use a special API method for checking OAuth token validity without exceeding the normal rate limits for failed login attempts. Authentication works differently with this particular endpoint. You must use [Basic Authentication](https://developer.github.com/v3/auth#basic-authentication) to use this endpoint, where the username is the OAuth application `client_id` and the password is its `client_secret`. Invalid tokens will return `404 NOT FOUND`.


```js
github.applications.client_id.token.post({
  "client_id": ""
}, context)
```

#### Input
* input `object`
  * client_id **required** `string`
  * body `object`
    * access_token **required** `string`: The access_token of the OAuth application.

#### Output
* output [authorization](#authorization)

### applications.client_id.tokens.access_token.delete
**Deprecation Notice:** GitHub will replace and discontinue OAuth endpoints containing `access_token` in the path parameter. We are introducing new endpoints that allow you to securely manage tokens for OAuth Apps by using `access_token` as an input parameter. The OAuth Application API will be removed on May 5, 2021. For more information, including scheduled brownouts, see the [blog post](https://developer.github.com/changes/2020-02-14-deprecating-oauth-app-endpoint/).

OAuth application owners can revoke a single token for an OAuth application. You must use [Basic Authentication](https://developer.github.com/v3/auth#basic-authentication) when accessing this endpoint, using the OAuth application's `client_id` and `client_secret` as the username and password.


```js
github.applications.client_id.tokens.access_token.delete({
  "client_id": "",
  "access_token": ""
}, context)
```

#### Input
* input `object`
  * client_id **required** `string`
  * access_token **required** `string`

#### Output
*Output schema unknown*

### applications.client_id.tokens.access_token.get
**Deprecation Notice:** GitHub will replace and discontinue OAuth endpoints containing `access_token` in the path parameter. We are introducing new endpoints that allow you to securely manage tokens for OAuth Apps by using `access_token` as an input parameter. The OAuth Application API will be removed on May 5, 2021. For more information, including scheduled brownouts, see the [blog post](https://developer.github.com/changes/2020-02-14-deprecating-oauth-app-endpoint/).

OAuth applications can use a special API method for checking OAuth token validity without exceeding the normal rate limits for failed login attempts. Authentication works differently with this particular endpoint. You must use [Basic Authentication](https://developer.github.com/v3/auth#basic-authentication) when accessing this endpoint, using the OAuth application's `client_id` and `client_secret` as the username and password. Invalid tokens will return `404 NOT FOUND`.


```js
github.applications.client_id.tokens.access_token.get({
  "client_id": "",
  "access_token": ""
}, context)
```

#### Input
* input `object`
  * client_id **required** `string`
  * access_token **required** `string`

#### Output
* output
  * app **required** `object`
    * client_id **required** `string`
    * name **required** `string`
    * url **required** `string`
  * created_at **required** `string`
  * fingerprint **required** `string`
  * hashed_token **required** `string`
  * id **required** `integer`
  * installation
    * account **required** [simple-user](#simple-user)
    * permissions **required** `object`
    * repositories_url **required** `string`
    * repository_selection **required** `string` (values: all, selected): Describe whether all repositories have been selected or there's a selection involved
    * single_file_name **required** `string`
  * note **required** `string`
  * note_url **required** `string`
  * scopes **required** `array`: A list of scopes that this authorization is in.
    * items `string`
  * token **required** `string`
  * token_last_eight **required** `string`
  * updated_at **required** `string`
  * url **required** `string`
  * user
    * avatar_url **required** `string`
    * events_url **required** `string`
    * followers_url **required** `string`
    * following_url **required** `string`
    * gists_url **required** `string`
    * gravatar_id **required** `string`
    * html_url **required** `string`
    * id **required** `integer`
    * login **required** `string`
    * node_id **required** `string`
    * organizations_url **required** `string`
    * received_events_url **required** `string`
    * repos_url **required** `string`
    * site_admin **required** `boolean`
    * starred_at `string`
    * starred_url **required** `string`
    * subscriptions_url **required** `string`
    * type **required** `string`
    * url **required** `string`

### applications.client_id.tokens.access_token.post
**Deprecation Notice:** GitHub will replace and discontinue OAuth endpoints containing `access_token` in the path parameter. We are introducing new endpoints that allow you to securely manage tokens for OAuth Apps by using `access_token` as an input parameter. The OAuth Application API will be removed on May 5, 2021. For more information, including scheduled brownouts, see the [blog post](https://developer.github.com/changes/2020-02-14-deprecating-oauth-app-endpoint/).

OAuth applications can use this API method to reset a valid OAuth token without end-user involvement. Applications must save the "token" property in the response because changes take effect immediately. You must use [Basic Authentication](https://developer.github.com/v3/auth#basic-authentication) when accessing this endpoint, using the OAuth application's `client_id` and `client_secret` as the username and password. Invalid tokens will return `404 NOT FOUND`.


```js
github.applications.client_id.tokens.access_token.post({
  "client_id": "",
  "access_token": ""
}, context)
```

#### Input
* input `object`
  * client_id **required** `string`
  * access_token **required** `string`

#### Output
* output [authorization](#authorization)

### apps.app_slug.get
**Note**: The `:app_slug` is just the URL-friendly name of your GitHub App. You can find this on the settings page for your GitHub App (e.g., `https://github.com/settings/apps/:app_slug`).

If the GitHub App you specify is public, you can access this endpoint without authenticating. If the GitHub App you specify is private, you must authenticate with a [personal access token](https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line/) or an [installation access token](https://developer.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-an-installation) to access this endpoint.


```js
github.apps.app_slug.get({
  "app_slug": ""
}, context)
```

#### Input
* input `object`
  * app_slug **required** `string`: app_slug parameter

#### Output
* output [integration](#integration)

### authorizations.get
**Deprecation Notice:** GitHub will discontinue the [OAuth Authorizations API](https://developer.github.com/v3/oauth_authorizations/), which is used by integrations to create personal access tokens and OAuth tokens, and you must now create these tokens using our [web application flow](https://developer.github.com/apps/building-oauth-apps/authorizing-oauth-apps/#web-application-flow). The [OAuth Authorizations API](https://developer.github.com/v3/oauth_authorizations/) will be removed on November, 13, 2020. For more information, including scheduled brownouts, see the [blog post](https://developer.github.com/changes/2020-02-14-deprecating-oauth-auth-endpoint/).


```js
github.authorizations.get({}, context)
```

#### Input
* input `object`
  * per_page `integer`: Results per page (max 100)
  * page `integer`: Page number of the results to fetch.

#### Output
* output `array`
  * items [authorization](#authorization)

### authorizations.post
**Deprecation Notice:** GitHub will discontinue the [OAuth Authorizations API](https://developer.github.com/v3/oauth_authorizations/), which is used by integrations to create personal access tokens and OAuth tokens, and you must now create these tokens using our [web application flow](https://developer.github.com/apps/building-oauth-apps/authorizing-oauth-apps/#web-application-flow). The [OAuth Authorizations API](https://developer.github.com/v3/oauth_authorizations/) will be removed on November, 13, 2020. For more information, including scheduled brownouts, see the [blog post](https://developer.github.com/changes/2020-02-14-deprecating-oauth-auth-endpoint/).

**Warning:** Apps must use the [web application flow](https://developer.github.com/apps/building-oauth-apps/authorizing-oauth-apps/#web-application-flow) to obtain OAuth tokens that work with GitHub SAML organizations. OAuth tokens created using the Authorizations API will be unable to access GitHub SAML organizations. For more information, see the [blog post](https://developer.github.com/changes/2019-11-05-deprecated-passwords-and-authorizations-api).

Creates OAuth tokens using [Basic Authentication](https://developer.github.com/v3/auth#basic-authentication). If you have two-factor authentication setup, Basic Authentication for this endpoint requires that you use a one-time password (OTP) and your username and password instead of tokens. For more information, see "[Working with two-factor authentication](https://developer.github.com/v3/auth/#working-with-two-factor-authentication)."

To create tokens for a particular OAuth application using this endpoint, you must authenticate as the user you want to create an authorization for and provide the app's client ID and secret, found on your OAuth application's settings page. If your OAuth application intends to create multiple tokens for one user, use `fingerprint` to differentiate between them.

You can also create tokens on GitHub from the [personal access tokens settings](https://github.com/settings/tokens) page. Read more about these tokens in [the GitHub Help documentation](https://help.github.com/articles/creating-an-access-token-for-command-line-use).

Organizations that enforce SAML SSO require personal access tokens to be allowed. Read more about allowing tokens in [the GitHub Help documentation](https://help.github.com/articles/about-identity-and-access-management-with-saml-single-sign-on).


```js
github.authorizations.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * client_id `string`: The OAuth app client key for which to create the token.
    * client_secret `string`: The OAuth app client secret for which to create the token.
    * fingerprint `string`: A unique string to distinguish an authorization from others created for the same client ID and user.
    * note `string`: A note to remind you what the OAuth token is for.
    * note_url `string`: A URL to remind you what app the OAuth token is for.
    * scopes `array`: A list of scopes that this authorization is in.
      * items `string`

#### Output
* output [authorization](#authorization)

### authorizations.clients.client_id.put
**Deprecation Notice:** GitHub will discontinue the [OAuth Authorizations API](https://developer.github.com/v3/oauth_authorizations/), which is used by integrations to create personal access tokens and OAuth tokens, and you must now create these tokens using our [web application flow](https://developer.github.com/apps/building-oauth-apps/authorizing-oauth-apps/#web-application-flow). The [OAuth Authorizations API](https://developer.github.com/v3/oauth_authorizations/) will be removed on November, 13, 2020. For more information, including scheduled brownouts, see the [blog post](https://developer.github.com/changes/2020-02-14-deprecating-oauth-auth-endpoint/).

**Warning:** Apps must use the [web application flow](https://developer.github.com/apps/building-oauth-apps/authorizing-oauth-apps/#web-application-flow) to obtain OAuth tokens that work with GitHub SAML organizations. OAuth tokens created using the Authorizations API will be unable to access GitHub SAML organizations. For more information, see the [blog post](https://developer.github.com/changes/2019-11-05-deprecated-passwords-and-authorizations-api).

Creates a new authorization for the specified OAuth application, only if an authorization for that application doesn't already exist for the user. The URL includes the 20 character client ID for the OAuth app that is requesting the token. It returns the user's existing authorization for the application if one is present. Otherwise, it creates and returns a new one.

If you have two-factor authentication setup, Basic Authentication for this endpoint requires that you use a one-time password (OTP) and your username and password instead of tokens. For more information, see "[Working with two-factor authentication](https://developer.github.com/v3/auth/#working-with-two-factor-authentication)."

**Deprecation Notice:** GitHub will discontinue the [OAuth Authorizations API](https://developer.github.com/v3/oauth_authorizations/), which is used by integrations to create personal access tokens and OAuth tokens, and you must now create these tokens using our [web application flow](https://developer.github.com/apps/building-oauth-apps/authorizing-oauth-apps/#web-application-flow). The [OAuth Authorizations API](https://developer.github.com/v3/oauth_authorizations/) will be removed on November, 13, 2020. For more information, including scheduled brownouts, see the [blog post](https://developer.github.com/changes/2020-02-14-deprecating-oauth-auth-endpoint/).


```js
github.authorizations.clients.client_id.put({
  "client_id": ""
}, context)
```

#### Input
* input `object`
  * client_id **required** `string`
  * body `object`
    * client_secret **required** `string`: The OAuth app client secret for which to create the token.
    * fingerprint `string`: A unique string to distinguish an authorization from others created for the same client ID and user.
    * note `string`: A note to remind you what the OAuth token is for.
    * note_url `string`: A URL to remind you what app the OAuth token is for.
    * scopes `array`: A list of scopes that this authorization is in.
      * items `string`

#### Output
* output [authorization](#authorization)

### authorizations.clients.client_id.fingerprint.put
**Deprecation Notice:** GitHub will discontinue the [OAuth Authorizations API](https://developer.github.com/v3/oauth_authorizations/), which is used by integrations to create personal access tokens and OAuth tokens, and you must now create these tokens using our [web application flow](https://developer.github.com/apps/building-oauth-apps/authorizing-oauth-apps/#web-application-flow). The [OAuth Authorizations API](https://developer.github.com/v3/oauth_authorizations/) will be removed on November, 13, 2020. For more information, including scheduled brownouts, see the [blog post](https://developer.github.com/changes/2020-02-14-deprecating-oauth-auth-endpoint/).

**Warning:** Apps must use the [web application flow](https://developer.github.com/apps/building-oauth-apps/authorizing-oauth-apps/#web-application-flow) to obtain OAuth tokens that work with GitHub SAML organizations. OAuth tokens created using the Authorizations API will be unable to access GitHub SAML organizations. For more information, see the [blog post](https://developer.github.com/changes/2019-11-05-deprecated-passwords-and-authorizations-api).

This method will create a new authorization for the specified OAuth application, only if an authorization for that application and fingerprint do not already exist for the user. The URL includes the 20 character client ID for the OAuth app that is requesting the token. `fingerprint` is a unique string to distinguish an authorization from others created for the same client ID and user. It returns the user's existing authorization for the application if one is present. Otherwise, it creates and returns a new one.

If you have two-factor authentication setup, Basic Authentication for this endpoint requires that you use a one-time password (OTP) and your username and password instead of tokens. For more information, see "[Working with two-factor authentication](https://developer.github.com/v3/auth/#working-with-two-factor-authentication)."


```js
github.authorizations.clients.client_id.fingerprint.put({
  "client_id": "",
  "fingerprint": ""
}, context)
```

#### Input
* input `object`
  * client_id **required** `string`
  * fingerprint **required** `string`: fingerprint parameter
  * body `object`
    * client_secret **required** `string`: The OAuth app client secret for which to create the token.
    * note `string`: A note to remind you what the OAuth token is for.
    * note_url `string`: A URL to remind you what app the OAuth token is for.
    * scopes `array`: A list of scopes that this authorization is in.
      * items `string`

#### Output
* output [authorization](#authorization)

### authorizations.authorization_id.delete
**Deprecation Notice:** GitHub will discontinue the [OAuth Authorizations API](https://developer.github.com/v3/oauth_authorizations/), which is used by integrations to create personal access tokens and OAuth tokens, and you must now create these tokens using our [web application flow](https://developer.github.com/apps/building-oauth-apps/authorizing-oauth-apps/#web-application-flow). The [OAuth Authorizations API](https://developer.github.com/v3/oauth_authorizations/) will be removed on November, 13, 2020. For more information, including scheduled brownouts, see the [blog post](https://developer.github.com/changes/2020-02-14-deprecating-oauth-auth-endpoint/).


```js
github.authorizations.authorization_id.delete({
  "authorization_id": 0
}, context)
```

#### Input
* input `object`
  * authorization_id **required** `integer`: authorization_id parameter

#### Output
*Output schema unknown*

### authorizations.authorization_id.get
**Deprecation Notice:** GitHub will discontinue the [OAuth Authorizations API](https://developer.github.com/v3/oauth_authorizations/), which is used by integrations to create personal access tokens and OAuth tokens, and you must now create these tokens using our [web application flow](https://developer.github.com/apps/building-oauth-apps/authorizing-oauth-apps/#web-application-flow). The [OAuth Authorizations API](https://developer.github.com/v3/oauth_authorizations/) will be removed on November, 13, 2020. For more information, including scheduled brownouts, see the [blog post](https://developer.github.com/changes/2020-02-14-deprecating-oauth-auth-endpoint/).


```js
github.authorizations.authorization_id.get({
  "authorization_id": 0
}, context)
```

#### Input
* input `object`
  * authorization_id **required** `integer`: authorization_id parameter

#### Output
* output [authorization](#authorization)

### authorizations.authorization_id.patch
**Deprecation Notice:** GitHub will discontinue the [OAuth Authorizations API](https://developer.github.com/v3/oauth_authorizations/), which is used by integrations to create personal access tokens and OAuth tokens, and you must now create these tokens using our [web application flow](https://developer.github.com/apps/building-oauth-apps/authorizing-oauth-apps/#web-application-flow). The [OAuth Authorizations API](https://developer.github.com/v3/oauth_authorizations/) will be removed on November, 13, 2020. For more information, including scheduled brownouts, see the [blog post](https://developer.github.com/changes/2020-02-14-deprecating-oauth-auth-endpoint/).

If you have two-factor authentication setup, Basic Authentication for this endpoint requires that you use a one-time password (OTP) and your username and password instead of tokens. For more information, see "[Working with two-factor authentication](https://developer.github.com/v3/auth/#working-with-two-factor-authentication)."

You can only send one of these scope keys at a time.


```js
github.authorizations.authorization_id.patch({
  "authorization_id": 0
}, context)
```

#### Input
* input `object`
  * authorization_id **required** `integer`: authorization_id parameter
  * body `object`
    * add_scopes `array`: A list of scopes to add to this authorization.
      * items `string`
    * fingerprint `string`: A unique string to distinguish an authorization from others created for the same client ID and user.
    * note `string`: A note to remind you what the OAuth token is for.
    * note_url `string`: A URL to remind you what app the OAuth token is for.
    * remove_scopes `array`: A list of scopes to remove from this authorization.
      * items `string`
    * scopes `array`: A list of scopes that this authorization is in.
      * items `string`

#### Output
* output [authorization](#authorization)

### codes_of_conduct.get
Get all codes of conduct


```js
github.codes_of_conduct.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [code-of-conduct](#code-of-conduct)

### codes_of_conduct.key.get
Get a code of conduct


```js
github.codes_of_conduct.key.get({
  "key": ""
}, context)
```

#### Input
* input `object`
  * key **required** `string`: key parameter

#### Output
* output [code-of-conduct](#code-of-conduct)

### content_references.content_reference_id.attachments.post
Creates an attachment under a content reference URL in the body or comment of an issue or pull request. Use the `id` of the content reference from the [`content_reference` event](https://developer.github.com/webhooks/event-payloads/#content_reference) to create an attachment.

The app must create a content attachment within six hours of the content reference URL being posted. See "[Using content attachments](https://developer.github.com/apps/using-content-attachments/)" for details about content attachments.

You must use an [installation access token](https://developer.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-an-installation) to access this endpoint.


```js
github.content_references.content_reference_id.attachments.post({
  "content_reference_id": 0
}, context)
```

#### Input
* input `object`
  * content_reference_id **required** `integer`: content_reference_id parameter
  * body `object`
    * body **required** `string`: The body of the attachment
    * title **required** `string`: The title of the attachment

#### Output
* output [content-reference-attachment](#content-reference-attachment)

### emojis.get
Lists all the emojis available to use on GitHub.


```js
github.emojis.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`

### enterprises.enterprise_id.settings.billing.actions.get
**Warning:** The Billing API is currently in public beta and subject to change.

Gets the summary of the free and paid GitHub Actions minutes used.

Paid minutes only apply to workflows in private repositories that use GitHub-hosted runners. Minutes used is listed for each GitHub-hosted runner operating system. Any job re-runs are also included in the usage. The usage does not include the multiplier for macOS and Windows runners and is not rounded up to the nearest whole minute. For more information, see "[Managing billing for GitHub Actions](https://help.github.com/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-actions)".

The authenticated user must be an enterprise admin.


```js
github.enterprises.enterprise_id.settings.billing.actions.get({
  "enterprise_id": ""
}, context)
```

#### Input
* input `object`
  * enterprise_id **required** `string`: Unique identifier of the GitHub Enterprise Cloud instance.

#### Output
* output [actions-billing-usage](#actions-billing-usage)

### enterprises.enterprise_id.settings.billing.packages.get
**Warning:** The Billing API is currently in public beta and subject to change.

Gets the free and paid storage used for GitHub Packages in gigabytes.

Paid minutes only apply to packages stored for private repositories. For more information, see "[Managing billing for GitHub Packages](https://help.github.com/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-packages)."

The authenticated user must be an enterprise admin.


```js
github.enterprises.enterprise_id.settings.billing.packages.get({
  "enterprise_id": ""
}, context)
```

#### Input
* input `object`
  * enterprise_id **required** `string`: Unique identifier of the GitHub Enterprise Cloud instance.

#### Output
* output [packages-billing-usage](#packages-billing-usage)

### enterprises.enterprise_id.settings.billing.shared_storage.get
**Warning:** The Billing API is currently in public beta and subject to change.

Gets the estimated paid and estimated total storage used for GitHub Actions and Github Packages.

Paid minutes only apply to packages stored for private repositories. For more information, see "[Managing billing for GitHub Packages](https://help.github.com/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-packages)."

The authenticated user must be an enterprise admin.


```js
github.enterprises.enterprise_id.settings.billing.shared_storage.get({
  "enterprise_id": ""
}, context)
```

#### Input
* input `object`
  * enterprise_id **required** `string`: Unique identifier of the GitHub Enterprise Cloud instance.

#### Output
* output [combined-billing-usage](#combined-billing-usage)

### events.get
We delay the public events feed by five minutes, which means the most recent event returned by the public events API actually occurred at least five minutes ago.


```js
github.events.get({}, context)
```

#### Input
* input `object`
  * per_page `integer`: Results per page (max 100)
  * page `integer`: Page number of the results to fetch.

#### Output
* output `array`
  * items [event](#event)

### feeds.get
GitHub provides several timeline resources in [Atom](http://en.wikipedia.org/wiki/Atom_(standard)) format. The Feeds API lists all the feeds available to the authenticated user:

*   **Timeline**: The GitHub global public timeline
*   **User**: The public timeline for any user, using [URI template](https://developer.github.com/v3/#hypermedia)
*   **Current user public**: The public timeline for the authenticated user
*   **Current user**: The private timeline for the authenticated user
*   **Current user actor**: The private timeline for activity created by the authenticated user
*   **Current user organizations**: The private timeline for the organizations the authenticated user is a member of.
*   **Security advisories**: A collection of public announcements that provide information about security-related vulnerabilities in software on GitHub.

**Note**: Private feeds are only returned when [authenticating via Basic Auth](https://developer.github.com/v3/#basic-authentication) since current feed URIs use the older, non revocable auth tokens.


```js
github.feeds.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [feed](#feed)

### gists.get
Lists the authenticated user's gists or if called anonymously, this endpoint returns all public gists:


```js
github.gists.get({}, context)
```

#### Input
* input `object`
  * since `string`: Only show notifications updated after the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
  * per_page `integer`: Results per page (max 100)
  * page `integer`: Page number of the results to fetch.

#### Output
* output `array`
  * items [base-gist](#base-gist)

### gists.post
Allows you to add a new gist with one or more files.

**Note:** Don't name your files "gistfile" with a numerical suffix. This is the format of the automatic naming scheme that Gist uses internally.


```js
github.gists.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * description `string`: Description of the gist
    * files **required** `object`: Names and content for the files that make up the gist

#### Output
* output [gist-full](#gist-full)

### gists.public.get
List public gists sorted by most recently updated to least recently updated.

Note: With [pagination](https://developer.github.com/v3/#pagination), you can fetch up to 3000 gists. For example, you can fetch 100 pages with 30 gists per page or 30 pages with 100 gists per page.


```js
github.gists.public.get({}, context)
```

#### Input
* input `object`
  * since `string`: Only show notifications updated after the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
  * per_page `integer`: Results per page (max 100)
  * page `integer`: Page number of the results to fetch.

#### Output
* output `array`
  * items [base-gist](#base-gist)

### gists.starred.get
List the authenticated user's starred gists:


```js
github.gists.starred.get({}, context)
```

#### Input
* input `object`
  * since `string`: Only show notifications updated after the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
  * per_page `integer`: Results per page (max 100)
  * page `integer`: Page number of the results to fetch.

#### Output
* output `array`
  * items [base-gist](#base-gist)

### gists.gist_id.delete
Delete a gist


```js
github.gists.gist_id.delete({
  "gist_id": ""
}, context)
```

#### Input
* input `object`
  * gist_id **required** `string`: gist_id parameter

#### Output
*Output schema unknown*

### gists.gist_id.get
Get a gist


```js
github.gists.gist_id.get({
  "gist_id": ""
}, context)
```

#### Input
* input `object`
  * gist_id **required** `string`: gist_id parameter

#### Output
* output [gist-full](#gist-full)

### gists.gist_id.patch
Allows you to update or delete a gist file and rename gist files. Files from the previous version of the gist that aren't explicitly changed during an edit are unchanged.


```js
github.gists.gist_id.patch({
  "gist_id": ""
}, context)
```

#### Input
* input `object`
  * gist_id **required** `string`: gist_id parameter
  * body `object`
    * description `string`: Description of the gist
    * files `object`: Names of files to be updated

#### Output
* output [gist-full](#gist-full)

### gists.gist_id.comments.get
List gist comments


```js
github.gists.gist_id.comments.get({
  "gist_id": ""
}, context)
```

#### Input
* input `object`
  * gist_id **required** `string`: gist_id parameter
  * per_page `integer`: Results per page (max 100)
  * page `integer`: Page number of the results to fetch.

#### Output
* output `array`
  * items [gist-comment](#gist-comment)

### gists.gist_id.comments.post
Create a gist comment


```js
github.gists.gist_id.comments.post({
  "gist_id": ""
}, context)
```

#### Input
* input `object`
  * gist_id **required** `string`: gist_id parameter
  * body `object`
    * body **required** `string`: The comment text.

#### Output
* output [gist-comment](#gist-comment)

### gists.gist_id.comments.comment_id.delete
Delete a gist comment


```js
github.gists.gist_id.comments.comment_id.delete({
  "gist_id": "",
  "comment_id": 0
}, context)
```

#### Input
* input `object`
  * gist_id **required** `string`: gist_id parameter
  * comment_id **required** `integer`: comment_id parameter

#### Output
*Output schema unknown*

### gists.gist_id.comments.comment_id.get
Get a gist comment


```js
github.gists.gist_id.comments.comment_id.get({
  "gist_id": "",
  "comment_id": 0
}, context)
```

#### Input
* input `object`
  * gist_id **required** `string`: gist_id parameter
  * comment_id **required** `integer`: comment_id parameter

#### Output
* output [gist-comment](#gist-comment)

### gists.gist_id.comments.comment_id.patch
Update a gist comment


```js
github.gists.gist_id.comments.comment_id.patch({
  "gist_id": "",
  "comment_id": 0
}, context)
```

#### Input
* input `object`
  * gist_id **required** `string`: gist_id parameter
  * comment_id **required** `integer`: comment_id parameter
  * body `object`
    * body **required** `string`: The comment text.

#### Output
* output [gist-comment](#gist-comment)

### gists.gist_id.commits.get
List gist commits


```js
github.gists.gist_id.commits.get({
  "gist_id": ""
}, context)
```

#### Input
* input `object`
  * gist_id **required** `string`: gist_id parameter
  * per_page `integer`: Results per page (max 100)
  * page `integer`: Page number of the results to fetch.

#### Output
* output `array`
  * items [gist-commit](#gist-commit)

### gists.gist_id.forks.get
List gist forks


```js
github.gists.gist_id.forks.get({
  "gist_id": ""
}, context)
```

#### Input
* input `object`
  * gist_id **required** `string`: gist_id parameter
  * per_page `integer`: Results per page (max 100)
  * page `integer`: Page number of the results to fetch.

#### Output
* output `array`
  * items [gist-full](#gist-full)

### gists.gist_id.forks.post
**Note**: This was previously `/gists/:gist_id/fork`.


```js
github.gists.gist_id.forks.post({
  "gist_id": ""
}, context)
```

#### Input
* input `object`
  * gist_id **required** `string`: gist_id parameter

#### Output
* output [base-gist](#base-gist)

### gists.gist_id.star.delete
Unstar a gist


```js
github.gists.gist_id.star.delete({
  "gist_id": ""
}, context)
```

#### Input
* input `object`
  * gist_id **required** `string`: gist_id parameter

#### Output
*Output schema unknown*

### gists.gist_id.star.get
Check if a gist is starred


```js
github.gists.gist_id.star.get({
  "gist_id": ""
}, context)
```

#### Input
* input `object`
  * gist_id **required** `string`: gist_id parameter

#### Output
*Output schema unknown*

### gists.gist_id.star.put
Note that you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP verbs](https://developer.github.com/v3/#http-verbs)."


```js
github.gists.gist_id.star.put({
  "gist_id": ""
}, context)
```

#### Input
* input `object`
  * gist_id **required** `string`: gist_id parameter

#### Output
*Output schema unknown*

### gists.gist_id.sha.get
Get a gist revision


```js
github.gists.gist_id.sha.get({
  "gist_id": "",
  "sha": ""
}, context)
```

#### Input
* input `object`
  * gist_id **required** `string`: gist_id parameter
  * sha **required** `string`: sha parameter

#### Output
* output [gist-full](#gist-full)

### gitignore.templates.get
List all templates available to pass as an option when [creating a repository](https://developer.github.com/v3/repos/#create-a-repository-for-the-authenticated-user).


```js
github.gitignore.templates.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items `string`

### gitignore.templates.name.get
The API also allows fetching the source of a single template.
Use the raw [media type](https://developer.github.com/v3/media/) to get the raw contents.


```js
github.gitignore.templates.name.get({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: name parameter

#### Output
* output [gitignore-template](#gitignore-template)

### installation.repositories.get
List repositories that an app installation can access.

You must use an [installation access token](https://developer.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-an-installation) to access this endpoint.


```js
github.installation.repositories.get({}, context)
```

#### Input
* input `object`
  * per_page `integer`: Results per page (max 100)
  * page `integer`: Page number of the results to fetch.

#### Output
* output `object`
  * repositories `array`
    * items [repository](#repository)
  * repository_selection `string`
  * total_count `integer`

### installation.token.delete
Revokes the installation token you're using to authenticate as an installation and access this endpoint.

Once an installation token is revoked, the token is invalidated and cannot be used. Other endpoints that require the revoked installation token must have a new installation token to work. You can create a new token using the "[Create an installation access token for an app](https://developer.github.com/v3/apps/#create-an-installation-access-token-for-an-app)" endpoint.

You must use an [installation access token](https://developer.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-an-installation) to access this endpoint.


```js
github.installation.token.delete(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### issues.get
List issues assigned to the authenticated user across all visible repositories including owned repositories, member
repositories, and organization repositories. You can use the `filter` query parameter to fetch issues that are not
necessarily assigned to you. See the [Parameters table](https://developer.github.com/v3/issues/#parameters) for more
information.


**Note**: GitHub's REST API v3 considers every pull request an issue, but not every issue is a pull request. For this
reason, "Issues" endpoints may return both issues and pull requests in the response. You can identify pull requests by
the `pull_request` key. Be aware that the `id` of a pull request returned from "Issues" endpoints will be an _issue id_. To find out the pull
request id, use the "[List pull requests](https://developer.github.com/v3/pulls/#list-pull-requests)" endpoint.


```js
github.issues.get({}, context)
```

#### Input
* input `object`
  * filter `string` (values: assigned, created, mentioned, subscribed, all): Indicates which sorts of issues to return. Can be one of:  
  * state `string` (values: open, closed, all): Indicates the state of the issues to return. Can be either `open`, `closed`, or `all`.
  * labels `string`: A list of comma separated label names. Example: `bug,ui,@high`
  * sort `string` (values: created, updated, comments): What to sort results by. Can be either `created`, `updated`, `comments`.
  * direction `string` (values: asc, desc): One of `asc` (ascending) or `desc` (descending).
  * since `string`: Only show notifications updated after the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
  * collab `boolean`
  * orgs `boolean`
  * owned `boolean`
  * pulls `boolean`
  * per_page `integer`: Results per page (max 100)
  * page `integer`: Page number of the results to fetch.

#### Output
* output `array`
  * items [issue](#issue)

### licenses.get
Get all commonly used licenses


```js
github.licenses.get({}, context)
```

#### Input
* input `object`
  * featured `boolean`
  * per_page `integer`: Results per page (max 100)

#### Output
* output `array`
  * items [license-simple](#license-simple)

### licenses.license.get
Get a license


```js
github.licenses.license.get({
  "license": ""
}, context)
```

#### Input
* input `object`
  * license **required** `string`: license parameter

#### Output
* output [license](#license)

### markdown.post
Render a Markdown document


```js
github.markdown.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * context `string`: The repository context to use when creating references in `gfm` mode.
    * mode `string` (values: markdown, gfm): The rendering mode.
    * text **required** `string`: The Markdown text to render in HTML.

#### Output
*Output schema unknown*

### markdown.raw.post
You must send Markdown as plain text (using a `Content-Type` header of `text/plain` or `text/x-markdown`) to this endpoint, rather than using JSON format. In raw mode, [GitHub Flavored Markdown](https://github.github.com/gfm/) is not supported and Markdown will be rendered in plain format like a README.md file. Markdown content must be 400 KB or less.


```js
github.markdown.raw.post({}, context)
```

#### Input
* input `object`
  * body `string`

#### Output
* output `string`

### marketplace_listing.accounts.account_id.get
Shows whether the user or organization account actively subscribes to a plan listed by the authenticated GitHub App. When someone submits a plan change that won't be processed until the end of their billing cycle, you will also see the upcoming pending change.

GitHub Apps must use a [JWT](https://developer.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint. OAuth Apps must use [basic authentication](https://developer.github.com/v3/auth/#basic-authentication) with their client ID and client secret to access this endpoint.


```js
github.marketplace_listing.accounts.account_id.get({
  "account_id": 0
}, context)
```

#### Input
* input `object`
  * account_id **required** `integer`: account_id parameter

#### Output
* output [marketplace-purchase](#marketplace-purchase)

### marketplace_listing.plans.get
Lists all plans that are part of your GitHub Marketplace listing.

GitHub Apps must use a [JWT](https://developer.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint. OAuth Apps must use [basic authentication](https://developer.github.com/v3/auth/#basic-authentication) with their client ID and client secret to access this endpoint.


```js
github.marketplace_listing.plans.get({}, context)
```

#### Input
* input `object`
  * per_page `integer`: Results per page (max 100)
  * page `integer`: Page number of the results to fetch.

#### Output
* output `array`
  * items [marketplace-listing-plan](#marketplace-listing-plan)

### marketplace_listing.plans.plan_id.accounts.get
Returns user and organization accounts associated with the specified plan, including free plans. For per-seat pricing, you see the list of accounts that have purchased the plan, including the number of seats purchased. When someone submits a plan change that won't be processed until the end of their billing cycle, you will also see the upcoming pending change.

GitHub Apps must use a [JWT](https://developer.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint. OAuth Apps must use [basic authentication](https://developer.github.com/v3/auth/#basic-authentication) with their client ID and client secret to access this endpoint.


```js
github.marketplace_listing.plans.plan_id.accounts.get({
  "plan_id": 0
}, context)
```

#### Input
* input `object`
  * plan_id **required** `integer`: plan_id parameter
  * sort `string` (values: created, updated): One of `created` (when the repository was starred) or `updated` (when it was last pushed to).
  * direction `string` (values: asc, desc): To return the oldest accounts first, set to `asc`. Can be one of `asc` or `desc`. Ignored without the `sort` parameter.
  * per_page `integer`: Results per page (max 100)
  * page `integer`: Page number of the results to fetch.

#### Output
* output `array`
  * items [marketplace-purchase](#marketplace-purchase)

### marketplace_listing.stubbed.accounts.account_id.get
Shows whether the user or organization account actively subscribes to a plan listed by the authenticated GitHub App. When someone submits a plan change that won't be processed until the end of their billing cycle, you will also see the upcoming pending change.

GitHub Apps must use a [JWT](https://developer.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint. OAuth Apps must use [basic authentication](https://developer.github.com/v3/auth/#basic-authentication) with their client ID and client secret to access this endpoint.


```js
github.marketplace_listing.stubbed.accounts.account_id.get({
  "account_id": 0
}, context)
```

#### Input
* input `object`
  * account_id **required** `integer`: account_id parameter

#### Output
* output [marketplace-purchase](#marketplace-purchase)

### marketplace_listing.stubbed.plans.get
Lists all plans that are part of your GitHub Marketplace listing.

GitHub Apps must use a [JWT](https://developer.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint. OAuth Apps must use [basic authentication](https://developer.github.com/v3/auth/#basic-authentication) with their client ID and client secret to access this endpoint.


```js
github.marketplace_listing.stubbed.plans.get({}, context)
```

#### Input
* input `object`
  * per_page `integer`: Results per page (max 100)
  * page `integer`: Page number of the results to fetch.

#### Output
* output `array`
  * items [marketplace-listing-plan](#marketplace-listing-plan)

### marketplace_listing.stubbed.plans.plan_id.accounts.get
Returns repository and organization accounts associated with the specified plan, including free plans. For per-seat pricing, you see the list of accounts that have purchased the plan, including the number of seats purchased. When someone submits a plan change that won't be processed until the end of their billing cycle, you will also see the upcoming pending change.

GitHub Apps must use a [JWT](https://developer.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint. OAuth Apps must use [basic authentication](https://developer.github.com/v3/auth/#basic-authentication) with their client ID and client secret to access this endpoint.


```js
github.marketplace_listing.stubbed.plans.plan_id.accounts.get({
  "plan_id": 0
}, context)
```

#### Input
* input `object`
  * plan_id **required** `integer`: plan_id parameter
  * sort `string` (values: created, updated): One of `created` (when the repository was starred) or `updated` (when it was last pushed to).
  * direction `string` (values: asc, desc): To return the oldest accounts first, set to `asc`. Can be one of `asc` or `desc`. Ignored without the `sort` parameter.
  * per_page `integer`: Results per page (max 100)
  * page `integer`: Page number of the results to fetch.

#### Output
* output `array`
  * items [marketplace-purchase](#marketplace-purchase)

### meta.get
This endpoint provides a list of GitHub's IP addresses. For more information, see "[About GitHub's IP addresses](https://help.github.com/articles/about-github-s-ip-addresses/)."


```js
github.meta.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [api-overview](#api-overview)

### networks.owner.repo.events.get
List public events for a network of repositories


```js
github.networks.owner.repo.events.get({
  "owner": "",
  "repo": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * per_page `integer`: Results per page (max 100)
  * page `integer`: Page number of the results to fetch.

#### Output
* output `array`
  * items [event](#event)

### notifications.get
List all notifications for the current user, sorted by most recently updated.


```js
github.notifications.get({}, context)
```

#### Input
* input `object`
  * all `boolean`: If `true`, show notifications marked as read.
  * participating `boolean`: If `true`, only shows notifications in which the user is directly participating or mentioned.
  * since `string`: Only show notifications updated after the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
  * before `string`: Only show notifications updated before the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
  * per_page `integer`: Results per page (max 100)
  * page `integer`: Page number of the results to fetch.

#### Output
* output `array`
  * items [thread](#thread)

### notifications.put
Marks all notifications as "read" removes it from the [default view on GitHub](https://github.com/notifications). If the number of notifications is too large to complete in one request, you will receive a `202 Accepted` status and GitHub will run an asynchronous process to mark notifications as "read." To check whether any "unread" notifications remain, you can use the [List notifications for the authenticated user](https://developer.github.com/v3/activity/notifications/#list-notifications-for-the-authenticated-user) endpoint and pass the query parameter `all=false`.


```js
github.notifications.put({}, context)
```

#### Input
* input `object`
  * body `object`
    * last_read_at `string`: Describes the last point that notifications were checked.
    * read `boolean`: Whether the notification has been read.

#### Output
* output `object`
  * message `string`

### notifications.threads.thread_id.get
Get a thread


```js
github.notifications.threads.thread_id.get({
  "thread_id": 0
}, context)
```

#### Input
* input `object`
  * thread_id **required** `integer`: thread_id parameter

#### Output
* output [thread](#thread)

### notifications.threads.thread_id.patch
Mark a thread as read


```js
github.notifications.threads.thread_id.patch({
  "thread_id": 0
}, context)
```

#### Input
* input `object`
  * thread_id **required** `integer`: thread_id parameter

#### Output
*Output schema unknown*

### notifications.threads.thread_id.subscription.delete
Mutes all future notifications for a conversation until you comment on the thread or get an **@mention**. If you are watching the repository of the thread, you will still receive notifications. To ignore future notifications for a repository you are watching, use the [Set a thread subscription](https://developer.github.com/v3/activity/notifications/#set-a-thread-subscription) endpoint and set `ignore` to `true`.


```js
github.notifications.threads.thread_id.subscription.delete({
  "thread_id": 0
}, context)
```

#### Input
* input `object`
  * thread_id **required** `integer`: thread_id parameter

#### Output
*Output schema unknown*

### notifications.threads.thread_id.subscription.get
This checks to see if the current user is subscribed to a thread. You can also [get a repository subscription](https://developer.github.com/v3/activity/watching/#get-a-repository-subscription).

Note that subscriptions are only generated if a user is participating in a conversation--for example, they've replied to the thread, were **@mentioned**, or manually subscribe to a thread.


```js
github.notifications.threads.thread_id.subscription.get({
  "thread_id": 0
}, context)
```

#### Input
* input `object`
  * thread_id **required** `integer`: thread_id parameter

#### Output
* output [thread-subscription](#thread-subscription)

### notifications.threads.thread_id.subscription.put
If you are watching a repository, you receive notifications for all threads by default. Use this endpoint to ignore future notifications for threads until you comment on the thread or get an **@mention**.

You can also use this endpoint to subscribe to threads that you are currently not receiving notifications for or to subscribed to threads that you have previously ignored.

Unsubscribing from a conversation in a repository that you are not watching is functionally equivalent to the [Delete a thread subscription](https://developer.github.com/v3/activity/notifications/#delete-a-thread-subscription) endpoint.


```js
github.notifications.threads.thread_id.subscription.put({
  "thread_id": 0
}, context)
```

#### Input
* input `object`
  * thread_id **required** `integer`: thread_id parameter
  * body `object`
    * ignored `boolean`: Whether to block all notifications from a thread.

#### Output
* output [thread-subscription](#thread-subscription)

### octocat.get
Get the octocat as ASCII art


```js
github.octocat.get({}, context)
```

#### Input
* input `object`
  * s `string`: The words to show in Octocat's speech bubble

#### Output
* output `string`

### organizations.get
Lists all organizations, in the order that they were created on GitHub.

**Note:** Pagination is powered exclusively by the `since` parameter. Use the [Link header](https://developer.github.com/v3/#link-header) to get the URL for the next page of organizations.


```js
github.organizations.get({}, context)
```

#### Input
* input `object`
  * since `string`: Only show notifications updated after the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
  * per_page `integer`: Results per page (max 100)

#### Output
* output `array`
  * items [organization-simple](#organization-simple)

### orgs.org.get
To see many of the organization response values, you need to be an authenticated organization owner with the `admin:org` scope. When the value of `two_factor_requirement_enabled` is `true`, the organization requires all members, billing managers, and outside collaborators to enable [two-factor authentication](https://help.github.com/articles/securing-your-account-with-two-factor-authentication-2fa/).

GitHub Apps with the `Organization plan` permission can use this endpoint to retrieve information about an organization's GitHub plan. See "[Authenticating with GitHub Apps](https://developer.github.com/apps/building-github-apps/authenticating-with-github-apps/)" for details. For an example response, see "[Response with GitHub plan information](https://developer.github.com/v3/orgs/#response-with-github-plan-information)."


```js
github.orgs.org.get({
  "org": ""
}, context)
```

#### Input
* input `object`
  * org **required** `string`

#### Output
* output [organization-full](#organization-full)

### orgs.org.patch
**Parameter Deprecation Notice:** GitHub will replace and discontinue `members_allowed_repository_creation_type` in favor of more granular permissions. The new input parameters are `members_can_create_public_repositories`, `members_can_create_private_repositories` for all organizations and `members_can_create_internal_repositories` for organizations associated with an enterprise account using GitHub Enterprise Cloud or GitHub Enterprise Server 2.20+. For more information, see the [blog post](https://developer.github.com/changes/2019-12-03-internal-visibility-changes).

Enables an authenticated organization owner with the `admin:org` scope to update the organization's profile and member privileges.


```js
github.orgs.org.patch({
  "org": ""
}, context)
```

#### Input
* input `object`
  * org **required** `string`
  * body `object`
    * billing_email `string`: Billing email address. This address is not publicized.
    * blog `string`
    * company `string`: The company name.
    * default_repository_permission `string` (values: read, write, admin, none): Default permission level members have for organization repositories:  
    * description `string`: The description of the company.
    * email `string`: The publicly visible email address.
    * has_organization_projects `boolean`: Toggles whether an organization can use organization projects.
    * has_repository_projects `boolean`: Toggles whether repositories that belong to the organization can use repository projects.
    * location `string`: The location.
    * members_allowed_repository_creation_type `string` (values: all, private, none): Specifies which types of repositories non-admin organization members can create. Can be one of:  
    * members_can_create_internal_repositories `boolean`: Toggles whether organization members can create internal repositories, which are visible to all enterprise members. You can only allow members to create internal repositories if your organization is associated with an enterprise account using GitHub Enterprise Cloud or GitHub Enterprise Server 2.20+. Can be one of:  
    * members_can_create_private_repositories `boolean`: Toggles whether organization members can create private repositories, which are visible to organization members with permission. Can be one of:  
    * members_can_create_public_repositories `boolean`: Toggles whether organization members can create public repositories, which are visible to anyone. Can be one of:  
    * members_can_create_repositories `boolean`: Toggles the ability of non-admin organization members to create repositories. Can be one of:  
    * name `string`: The shorthand name of the company.
    * twitter_username `string`: The Twitter username of the company.

#### Output
* output [organization-full](#organization-full)

### orgs.org.actions.runners.get
**Warning:** The self-hosted runners API for organizations is currently in public beta and subject to change.

Lists all self-hosted runners for an organization. You must authenticate using an access token with the `admin:org` scope to use this endpoint.


```js
github.orgs.org.actions.runners.get({
  "org": ""
}, context)
```

#### Input
* input `object`
  * org **required** `string`
  * per_page `integer`: Results per page (max 100)
  * page `integer`: Page number of the results to fetch.

#### Output
* output `object`
  * runners `array`
    * items [runner](#runner)
  * total_count `integer`

### orgs.org.actions.runners.downloads.get
**Warning:** The self-hosted runners API for organizations is currently in public beta and subject to change.

Lists binaries for the runner application that you can download and run. You must authenticate using an access token with the `admin:org` scope to use this endpoint.


```js
github.orgs.org.actions.runners.downloads.get({
  "org": ""
}, context)
```

#### Input
* input `object`
  * org **required** `string`

#### Output
* output `array`
  * items [runner-application](#runner-application)

### orgs.org.actions.runners.registration_token.post
**Warning:** The self-hosted runners API for organizations is currently in public beta and subject to change.


Returns a token that you can pass to the `config` script. The token expires after one hour. You must authenticate
using an access token with the `admin:org` scope to use this endpoint.

#### Example using registration token

Configure your self-hosted runner, replacing `TOKEN` with the registration token provided by this endpoint.

```
./config.sh --url https://github.com/octo-org --token TOKEN
```


```js
github.orgs.org.actions.runners.registration_token.post({
  "org": ""
}, context)
```

#### Input
* input `object`
  * org **required** `string`

#### Output
* output [authentication-token](#authentication-token)

### orgs.org.actions.runners.remove_token.post
**Warning:** The self-hosted runners API for organizations is currently in public beta and subject to change.


Returns a token that you can pass to the `config` script to remove a self-hosted runner from an organization. The
token expires after one hour. You must authenticate using an access token with the `admin:org` scope to use this
endpoint.

#### Example using remove token

To remove your self-hosted runner from an organization, replace `TOKEN` with the remove token provided by this
endpoint.

```
./config.sh remove --token TOKEN
```


```js
github.orgs.org.actions.runners.remove_token.post({
  "org": ""
}, context)
```

#### Input
* input `object`
  * org **required** `string`

#### Output
* output [authentication-token](#authentication-token)

### orgs.org.actions.runners.runner_id.delete
**Warning:** The self-hosted runners API for organizations is currently in public beta and subject to change.

Forces the removal of a self-hosted runner from an organization. You can use this endpoint to completely remove the runner when the machine you were using no longer exists. You must authenticate using an access token with the `admin:org` scope to use this endpoint.


```js
github.orgs.org.actions.runners.runner_id.delete({
  "org": "",
  "runner_id": 0
}, context)
```

#### Input
* input `object`
  * org **required** `string`
  * runner_id **required** `integer`: runner_id parameter

#### Output
*Output schema unknown*

### orgs.org.actions.runners.runner_id.get
**Warning:** The self-hosted runners API for organizations is currently in public beta and subject to change.

Gets a specific self-hosted runner for an organization. You must authenticate using an access token with the `admin:org` scope to use this endpoint.


```js
github.orgs.org.actions.runners.runner_id.get({
  "org": "",
  "runner_id": 0
}, context)
```

#### Input
* input `object`
  * org **required** `string`
  * runner_id **required** `integer`: runner_id parameter

#### Output
* output [runner](#runner)

### orgs.org.actions.secrets.get
Lists all secrets available in an organization without revealing their encrypted values. You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `secrets` organization permission to use this endpoint.


```js
github.orgs.org.actions.secrets.get({
  "org": ""
}, context)
```

#### Input
* input `object`
  * org **required** `string`
  * per_page `integer`: Results per page (max 100)
  * page `integer`: Page number of the results to fetch.

#### Output
* output `object`
  * secrets `array`
    * items [organization-actions-secret](#organization-actions-secret)
  * total_count `integer`

### orgs.org.actions.secrets.public_key.get
Gets your public key, which you need to encrypt secrets. You need to encrypt a secret before you can create or update secrets. You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `secrets` organization permission to use this endpoint.


```js
github.orgs.org.actions.secrets.public_key.get({
  "org": ""
}, context)
```

#### Input
* input `object`
  * org **required** `string`

#### Output
* output [actions-public-key](#actions-public-key)

### orgs.org.actions.secrets.secret_name.delete
Deletes a secret in an organization using the secret name. You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `secrets` organization permission to use this endpoint.


```js
github.orgs.org.actions.secrets.secret_name.delete({
  "org": "",
  "secret_name": ""
}, context)
```

#### Input
* input `object`
  * org **required** `string`
  * secret_name **required** `string`: secret_name parameter

#### Output
*Output schema unknown*

### orgs.org.actions.secrets.secret_name.get
Gets a single organization secret without revealing its encrypted value. You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `secrets` organization permission to use this endpoint.


```js
github.orgs.org.actions.secrets.secret_name.get({
  "org": "",
  "secret_name": ""
}, context)
```

#### Input
* input `object`
  * org **required** `string`
  * secret_name **required** `string`: secret_name parameter

#### Output
* output [organization-actions-secret](#organization-actions-secret)

### orgs.org.actions.secrets.secret_name.put
Creates or updates an organization secret with an encrypted value. Encrypt your secret using
[LibSodium](https://libsodium.gitbook.io/doc/bindings_for_other_languages). You must authenticate using an access
token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `secrets` organization permission to
use this endpoint.

#### Example encrypting a secret using Node.js

Encrypt your secret using the [tweetsodium](https://github.com/github/tweetsodium) library.

```
const sodium = require('tweetsodium');

const key = "base64-encoded-public-key";
const value = "plain-text-secret";

// Convert the message and key to Uint8Array's (Buffer implements that interface)
const messageBytes = Buffer.from(value);
const keyBytes = Buffer.from(key, 'base64');

// Encrypt using LibSodium.
const encryptedBytes = sodium.seal(messageBytes, keyBytes);

// Base64 the encrypted secret
const encrypted = Buffer.from(encryptedBytes).toString('base64');

console.log(encrypted);
```


#### Example encrypting a secret using Python

Encrypt your secret using [pynacl](https://pynacl.readthedocs.io/en/stable/public/#nacl-public-sealedbox) with Python 3.

```
from base64 import b64encode
from nacl import encoding, public

def encrypt(public_key: str, secret_value: str) -> str:
  """Encrypt a Unicode string using the public key."""
  public_key = public.PublicKey(public_key.encode("utf-8"), encoding.Base64Encoder())
  sealed_box = public.SealedBox(public_key)
  encrypted = sealed_box.encrypt(secret_value.encode("utf-8"))
  return b64encode(encrypted).decode("utf-8")
```

#### Example encrypting a secret using C#

Encrypt your secret using the [Sodium.Core](https://www.nuget.org/packages/Sodium.Core/) package.

```
var secretValue = System.Text.Encoding.UTF8.GetBytes("mySecret");
var publicKey = Convert.FromBase64String("2Sg8iYjAxxmI2LvUXpJjkYrMxURPc8r+dB7TJyvvcCU=");

var sealedPublicKeyBox = Sodium.SealedPublicKeyBox.Create(secretValue, publicKey);

Console.WriteLine(Convert.ToBase64String(sealedPublicKeyBox));
```

#### Example encrypting a secret using Ruby

Encrypt your secret using the [rbnacl](https://github.com/RubyCrypto/rbnacl) gem.

```ruby
require "rbnacl"
require "base64"

key = Base64.decode64("+ZYvJDZMHUfBkJdyq5Zm9SKqeuBQ4sj+6sfjlH4CgG0=")
public_key = RbNaCl::PublicKey.new(key)

box = RbNaCl::Boxes::Sealed.from_public_key(public_key)
encrypted_secret = box.encrypt("my_secret")

# Print the base64 encoded secret
puts Base64.strict_encode64(encrypted_secret)
```


```js
github.orgs.org.actions.secrets.secret_name.put({
  "org": "",
  "secret_name": ""
}, context)
```

#### Input
* input `object`
  * org **required** `string`
  * secret_name **required** `string`: secret_name parameter
  * body `object`
    * encrypted_value `string`: Value for your secret, encrypted with [LibSodium](https://libsodium.gitbook.io/doc/bindings_for_other_languages) using the public key retrieved from the [Get an organization public key](https://developer.github.com/v3/actions/secrets/#get-an-organization-public-key) endpoint.
    * key_id `string`: ID of the key you used to encrypt the secret.
    * selected_repository_ids `array`: An array of repository ids that can access the organization secret. You can only provide a list of repository ids when the `visibility` is set to `selected`. You can manage the list of selected repositories using the [List selected repositories for an organization secret](https://developer.github.com/v3/actions/secrets/#list-selected-repositories-for-an-organization-secret), [Set selected repositories for an organization secret](https://developer.github.com/v3/actions/secrets/#set-selected-repositories-for-an-organization-secret), and [Remove selected repository from an organization secret](https://developer.github.com/v3/actions/secrets/#remove-selected-repository-from-an-organization-secret) endpoints.
      * items `string`
    * visibility `string` (values: all, private, selected): Configures the access that repositories have to the organization secret. Can be one of:  

#### Output
*Output schema unknown*

### orgs.org.actions.secrets.secret_name.repositories.get
Lists all repositories that have been selected when the `visibility` for repository access to a secret is set to `selected`. You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `secrets` organization permission to use this endpoint.


```js
github.orgs.org.actions.secrets.secret_name.repositories.get({
  "org": "",
  "secret_name": ""
}, context)
```

#### Input
* input `object`
  * org **required** `string`
  * secret_name **required** `string`: secret_name parameter

#### Output
* output `object`
  * repositories `array`
    * items [minimal-repository](#minimal-repository)
  * total_count `integer`

### orgs.org.actions.secrets.secret_name.repositories.put
Replaces all repositories for an organization secret when the `visibility` for repository access is set to `selected`. The visibility is set when you [Create or update an organization secret](https://developer.github.com/v3/actions/secrets/#create-or-update-an-organization-secret). You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `secrets` organization permission to use this endpoint.


```js
github.orgs.org.actions.secrets.secret_name.repositories.put({
  "org": "",
  "secret_name": ""
}, context)
```

#### Input
* input `object`
  * org **required** `string`
  * secret_name **required** `string`: secret_name parameter
  * body `object`
    * selected_repository_ids `array`: An array of repository ids that can access the organization secret. You can only provide a list of repository ids when the `visibility` is set to `selected`. You can add and remove individual repositories using the [Set selected repositories for an organization secret](https://developer.github.com/v3/actions/secrets/#set-selected-repositories-for-an-organization-secret) and [Remove selected repository from an organization secret](https://developer.github.com/v3/actions/secrets/#remove-selected-repository-from-an-organization-secret) endpoints.
      * items `integer`

#### Output
*Output schema unknown*

### orgs.org.actions.secrets.secret_name.repositories.repository_id.delete
Removes a repository from an organization secret when the `visibility` for repository access is set to `selected`. The visibility is set when you [Create or update an organization secret](https://developer.github.com/v3/actions/secrets/#create-or-update-an-organization-secret). You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `secrets` organization permission to use this endpoint.


```js
github.orgs.org.actions.secrets.secret_name.repositories.repository_id.delete({
  "org": "",
  "secret_name": "",
  "repository_id": 0
}, context)
```

#### Input
* input `object`
  * org **required** `string`
  * secret_name **required** `string`: secret_name parameter
  * repository_id **required** `integer`: repository_id parameter

#### Output
*Output schema unknown*

### orgs.org.actions.secrets.secret_name.repositories.repository_id.put
Adds a repository to an organization secret when the `visibility` for repository access is set to `selected`. The visibility is set when you [Create or update an organization secret](https://developer.github.com/v3/actions/secrets/#create-or-update-an-organization-secret). You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `secrets` organization permission to use this endpoint.


```js
github.orgs.org.actions.secrets.secret_name.repositories.repository_id.put({
  "org": "",
  "secret_name": "",
  "repository_id": 0
}, context)
```

#### Input
* input `object`
  * org **required** `string`
  * secret_name **required** `string`: secret_name parameter
  * repository_id **required** `integer`: repository_id parameter

#### Output
*Output schema unknown*

### orgs.org.blocks.get
List the users blocked by an organization.


```js
github.orgs.org.blocks.get({
  "org": ""
}, context)
```

#### Input
* input `object`
  * org **required** `string`

#### Output
* output `array`
  * items [simple-user](#simple-user)

### orgs.org.blocks.username.delete
Unblock a user from an organization


```js
github.orgs.org.blocks.username.delete({
  "org": "",
  "username": ""
}, context)
```

#### Input
* input `object`
  * org **required** `string`
  * username **required** `string`

#### Output
*Output schema unknown*

### orgs.org.blocks.username.get
Check if a user is blocked by an organization


```js
github.orgs.org.blocks.username.get({
  "org": "",
  "username": ""
}, context)
```

#### Input
* input `object`
  * org **required** `string`
  * username **required** `string`

#### Output
*Output schema unknown*

### orgs.org.blocks.username.put
Block a user from an organization


```js
github.orgs.org.blocks.username.put({
  "org": "",
  "username": ""
}, context)
```

#### Input
* input `object`
  * org **required** `string`
  * username **required** `string`

#### Output
*Output schema unknown*

### orgs.org.credential_authorizations.get
Listing and deleting credential authorizations is available to organizations with GitHub Enterprise Cloud. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products).

An authenticated organization owner with the `read:org` scope can list all credential authorizations for an organization that uses SAML single sign-on (SSO). The credentials are either personal access tokens or SSH keys that organization members have authorized for the organization. For more information, see [About authentication with SAML single sign-on](https://help.github.com/en/articles/about-authentication-with-saml-single-sign-on).


```js
github.orgs.org.credential_authorizations.get({
  "org": ""
}, context)
```

#### Input
* input `object`
  * org **required** `string`

#### Output
* output `array`
  * items [credential-authorization](#credential-authorization)

### orgs.org.credential_authorizations.credential_id.delete
Listing and deleting credential authorizations is available to organizations with GitHub Enterprise Cloud. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products).

An authenticated organization owner with the `admin:org` scope can remove a credential authorization for an organization that uses SAML SSO. Once you remove someone's credential authorization, they will need to create a new personal access token or SSH key and authorize it for the organization they want to access.


```js
github.orgs.org.credential_authorizations.credential_id.delete({
  "org": "",
  "credential_id": 0
}, context)
```

#### Input
* input `object`
  * org **required** `string`
  * credential_id **required** `integer`: credential_id parameter

#### Output
*Output schema unknown*

### orgs.org.events.get
List public organization events


```js
github.orgs.org.events.get({
  "org": ""
}, context)
```

#### Input
* input `object`
  * org **required** `string`
  * per_page `integer`: Results per page (max 100)
  * page `integer`: Page number of the results to fetch.

#### Output
* output `array`
  * items [event](#event)

### orgs.org.hooks.get
List organization webhooks


```js
github.orgs.org.hooks.get({
  "org": ""
}, context)
```

#### Input
* input `object`
  * org **required** `string`
  * per_page `integer`: Results per page (max 100)
  * page `integer`: Page number of the results to fetch.

#### Output
* output `array`
  * items [org-hook](#org-hook)

### orgs.org.hooks.post
Here's how you can create a hook that posts payloads in JSON format:


```js
github.orgs.org.hooks.post({
  "org": ""
}, context)
```

#### Input
* input `object`
  * org **required** `string`
  * body `object`
    * active `boolean`: Determines if notifications are sent when the webhook is triggered. Set to `true` to send notifications.
    * config **required** `object`: Key/value pairs to provide settings for this webhook. [These are defined below](https://developer.github.com/v3/orgs/hooks/#create-hook-config-params).
      * content_type `string`: The media type used to serialize the payloads. Supported values include `json` and `form`. The default is `form`.
      * insecure_ssl `string`: Determines whether the SSL certificate of the host for `url` will be verified when delivering payloads. Supported values include `0` (verification is performed) and `1` (verification is not performed). The default is `0`. **We strongly recommend not setting this to `1` as you are subject to man-in-the-middle and other attacks.**
      * password `string`
      * secret `string`: If provided, the `secret` will be used as the `key` to generate the HMAC hex digest value in the [`X-Hub-Signature`](https://developer.github.com/webhooks/event-payloads/#delivery-headers) header.
      * url **required** `string`: The URL to which the payloads will be delivered.
      * username `string`
    * events `array`: Determines what [events](https://developer.github.com/webhooks/event-payloads) the hook is triggered for.
      * items `string`
    * name **required** `string`: Must be passed as "web".

#### Output
* output [org-hook](#org-hook)

### orgs.org.hooks.hook_id.delete
Delete an organization webhook


```js
github.orgs.org.hooks.hook_id.delete({
  "org": "",
  "hook_id": 0
}, context)
```

#### Input
* input `object`
  * org **required** `string`
  * hook_id **required** `integer`

#### Output
*Output schema unknown*

### orgs.org.hooks.hook_id.get
Get an organization webhook


```js
github.orgs.org.hooks.hook_id.get({
  "org": "",
  "hook_id": 0
}, context)
```

#### Input
* input `object`
  * org **required** `string`
  * hook_id **required** `integer`

#### Output
* output [org-hook](#org-hook)

### orgs.org.hooks.hook_id.patch
Update an organization webhook


```js
github.orgs.org.hooks.hook_id.patch({
  "org": "",
  "hook_id": 0
}, context)
```

#### Input
* input `object`
  * org **required** `string`
  * hook_id **required** `integer`
  * body `object`
    * active `boolean`: Determines if notifications are sent when the webhook is triggered. Set to `true` to send notifications.
    * config `object`: Key/value pairs to provide settings for this webhook. [These are defined below](https://developer.github.com/v3/orgs/hooks/#update-hook-config-params).
      * content_type `string`: The media type used to serialize the payloads. Supported values include `json` and `form`. The default is `form`.
      * insecure_ssl `string`: Determines whether the SSL certificate of the host for `url` will be verified when delivering payloads. Supported values include `0` (verification is performed) and `1` (verification is not performed). The default is `0`. **We strongly recommend not setting this to `1` as you are subject to man-in-the-middle and other attacks.**
      * secret `string`: If provided, the `secret` will be used as the `key` to generate the HMAC hex digest value in the [`X-Hub-Signature`](https://developer.github.com/webhooks/event-payloads/#delivery-headers) header.
      * url **required** `string`: The URL to which the payloads will be delivered.
    * events `array`: Determines what [events](https://developer.github.com/webhooks/event-payloads) the hook is triggered for.
      * items `string`
    * name `string`

#### Output
* output [org-hook](#org-hook)

### orgs.org.hooks.hook_id.pings.post
This will trigger a [ping event](https://developer.github.com/webhooks/#ping-event) to be sent to the hook.


```js
github.orgs.org.hooks.hook_id.pings.post({
  "org": "",
  "hook_id": 0
}, context)
```

#### Input
* input `object`
  * org **required** `string`
  * hook_id **required** `integer`

#### Output
*Output schema unknown*

### orgs.org.installation.get
Enables an authenticated GitHub App to find the organization's installation information.

You must use a [JWT](https://developer.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.


```js
github.orgs.org.installation.get({
  "org": ""
}, context)
```

#### Input
* input `object`
  * org **required** `string`

#### Output
* output [installation](#installation)

### orgs.org.installations.get
Lists all GitHub Apps in an organization. The installation count includes all GitHub Apps installed on repositories in the organization. You must be an organization owner with `admin:read` scope to use this endpoint.


```js
github.orgs.org.installations.get({
  "org": ""
}, context)
```

#### Input
* input `object`
  * org **required** `string`
  * per_page `integer`: Results per page (max 100)
  * page `integer`: Page number of the results to fetch.

#### Output
* output `object`
  * installations `array`
    * items [installation](#installation)
  * total_count `integer`

### orgs.org.interaction_limits.delete
Removes all interaction restrictions from public repositories in the given organization. You must be an organization owner to remove restrictions.


```js
github.orgs.org.interaction_limits.delete({
  "org": ""
}, context)
```

#### Input
* input `object`
  * org **required** `string`

#### Output
*Output schema unknown*

### orgs.org.interaction_limits.get
Shows which group of GitHub users can interact with this organization and when the restriction expires. If there are no restrictions, you will see an empty response.


```js
github.orgs.org.interaction_limits.get({
  "org": ""
}, context)
```

#### Input
* input `object`
  * org **required** `string`

#### Output
* output [interaction-limit](#interaction-limit)

### orgs.org.interaction_limits.put
Temporarily restricts interactions to certain GitHub users in any public repository in the given organization. You must be an organization owner to set these restrictions.


```js
github.orgs.org.interaction_limits.put({
  "org": ""
}, context)
```

#### Input
* input `object`
  * org **required** `string`
  * body `object`
    * limit **required** `string` (values: existing_users, contributors_only, collaborators_only): Specifies the group of GitHub users who can comment, open issues, or create pull requests in public repositories for the given organization. Must be one of: `existing_users`, `contributors_only`, or `collaborators_only`.

#### Output
* output [interaction-limit](#interaction-limit)

### orgs.org.invitations.get
The return hash contains a `role` field which refers to the Organization Invitation role and will be one of the following values: `direct_member`, `admin`, `billing_manager`, `hiring_manager`, or `reinstate`. If the invitee is not a GitHub member, the `login` field in the return hash will be `null`.


```js
github.orgs.org.invitations.get({
  "org": ""
}, context)
```

#### Input
* input `object`
  * org **required** `string`
  * per_page `integer`: Results per page (max 100)
  * page `integer`: Page number of the results to fetch.

#### Output
* output `array`
  * items [organization-invitation](#organization-invitation)

### orgs.org.invitations.post
Invite people to an organization by using their GitHub user ID or their email address. In order to create invitations in an organization, the authenticated user must be an organization owner.

This endpoint triggers [notifications](https://help.github.com/articles/about-notifications/). Creating content too quickly using this endpoint may result in abuse rate limiting. See "[Abuse rate limits](https://developer.github.com/v3/#abuse-rate-limits)" and "[Dealing with abuse rate limits](https://developer.github.com/v3/guides/best-practices-for-integrators/#dealing-with-abuse-rate-limits)" for details.


```js
github.orgs.org.invitations.post({
  "org": ""
}, context)
```

#### Input
* input `object`
  * org **required** `string`
  * body `object`
    * email `string`: **Required unless you provide `invitee_id`**. Email address of the person you are inviting, which can be an existing GitHub user.
    * invitee_id `integer`: **Required unless you provide `email`**. GitHub user ID for the person you are inviting.
    * role `string` (values: admin, direct_member, billing_manager): Specify role for new member. Can be one of:  
    * team_ids `array`: Specify IDs for the teams you want to invite new members to.
      * items `integer`

#### Output
* output [organization-invitation](#organization-invitation)

### orgs.org.invitations.invitation_id.teams.get
List all teams associated with an invitation. In order to see invitations in an organization, the authenticated user must be an organization owner.


```js
github.orgs.org.invitations.invitation_id.teams.get({
  "org": "",
  "invitation_id": 0
}, context)
```

#### Input
* input `object`
  * org **required** `string`
  * invitation_id **required** `integer`: invitation_id parameter
  * per_page `integer`: Results per page (max 100)
  * page `integer`: Page number of the results to fetch.

#### Output
* output `array`
  * items [team](#team)

### orgs.org.issues.get
List issues in an organization assigned to the authenticated user.

**Note**: GitHub's REST API v3 considers every pull request an issue, but not every issue is a pull request. For this
reason, "Issues" endpoints may return both issues and pull requests in the response. You can identify pull requests by
the `pull_request` key. Be aware that the `id` of a pull request returned from "Issues" endpoints will be an _issue id_. To find out the pull
request id, use the "[List pull requests](https://developer.github.com/v3/pulls/#list-pull-requests)" endpoint.


```js
github.orgs.org.issues.get({
  "org": ""
}, context)
```

#### Input
* input `object`
  * org **required** `string`
  * filter `string` (values: assigned, created, mentioned, subscribed, all): Indicates which sorts of issues to return. Can be one of:  
  * state `string` (values: open, closed, all): Indicates the state of the issues to return. Can be either `open`, `closed`, or `all`.
  * labels `string`: A list of comma separated label names. Example: `bug,ui,@high`
  * sort `string` (values: created, updated, comments): What to sort results by. Can be either `created`, `updated`, `comments`.
  * direction `string` (values: asc, desc): One of `asc` (ascending) or `desc` (descending).
  * since `string`: Only show notifications updated after the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
  * per_page `integer`: Results per page (max 100)
  * page `integer`: Page number of the results to fetch.

#### Output
* output `array`
  * items [issue](#issue)

### orgs.org.members.get
List all users who are members of an organization. If the authenticated user is also a member of this organization then both concealed and public members will be returned.


```js
github.orgs.org.members.get({
  "org": ""
}, context)
```

#### Input
* input `object`
  * org **required** `string`
  * filter `string` (values: 2fa_disabled, all): Filter members returned in the list. Can be one of:  
  * role `string` (values: all, admin, member): Filter members returned by their role. Can be one of:  
  * per_page `integer`: Results per page (max 100)
  * page `integer`: Page number of the results to fetch.

#### Output
* output `array`
  * items [simple-user](#simple-user)

### orgs.org.members.username.delete
Removing a user from this list will remove them from all teams and they will no longer have any access to the organization's repositories.


```js
github.orgs.org.members.username.delete({
  "org": "",
  "username": ""
}, context)
```

#### Input
* input `object`
  * org **required** `string`
  * username **required** `string`

#### Output
*Output schema unknown*

### orgs.org.members.username.get
Check if a user is, publicly or privately, a member of the organization.


```js
github.orgs.org.members.username.get({
  "org": "",
  "username": ""
}, context)
```

#### Input
* input `object`
  * org **required** `string`
  * username **required** `string`

#### Output
*Output schema unknown*

### orgs.org.memberships.username.delete
In order to remove a user's membership with an organization, the authenticated user must be an organization owner.

If the specified user is an active member of the organization, this will remove them from the organization. If the specified user has been invited to the organization, this will cancel their invitation. The specified user will receive an email notification in both cases.


```js
github.orgs.org.memberships.username.delete({
  "org": "",
  "username": ""
}, context)
```

#### Input
* input `object`
  * org **required** `string`
  * username **required** `string`

#### Output
*Output schema unknown*

### orgs.org.memberships.username.get
In order to get a user's membership with an organization, the authenticated user must be an organization member.


```js
github.orgs.org.memberships.username.get({
  "org": "",
  "username": ""
}, context)
```

#### Input
* input `object`
  * org **required** `string`
  * username **required** `string`

#### Output
* output [org-membership](#org-membership)

### orgs.org.memberships.username.put
Only authenticated organization owners can add a member to the organization or update the member's role.

*   If the authenticated user is _adding_ a member to the organization, the invited user will receive an email inviting them to the organization. The user's [membership status](https://developer.github.com/v3/orgs/members/#get-organization-membership-for-a-user) will be `pending` until they accept the invitation.
    
*   Authenticated users can _update_ a user's membership by passing the `role` parameter. If the authenticated user changes a member's role to `admin`, the affected user will receive an email notifying them that they've been made an organization owner. If the authenticated user changes an owner's role to `member`, no email will be sent.

**Rate limits**

To prevent abuse, the authenticated user is limited to 50 organization invitations per 24 hour period. If the organization is more than one month old or on a paid plan, the limit is 500 invitations per 24 hour period.


```js
github.orgs.org.memberships.username.put({
  "org": "",
  "username": ""
}, context)
```

#### Input
* input `object`
  * org **required** `string`
  * username **required** `string`
  * body `object`
    * role `string` (values: admin, member): The role to give the user in the organization. Can be one of:  

#### Output
* output [org-membership](#org-membership)

### orgs.org.migrations.get
Lists the most recent migrations.


```js
github.orgs.org.migrations.get({
  "org": ""
}, context)
```

#### Input
* input `object`
  * org **required** `string`
  * per_page `integer`: Results per page (max 100)
  * page `integer`: Page number of the results to fetch.

#### Output
* output `array`
  * items [migration](#migration)

### orgs.org.migrations.post
Initiates the generation of a migration archive.


```js
github.orgs.org.migrations.post({
  "org": ""
}, context)
```

#### Input
* input `object`
  * org **required** `string`
  * body `object`
    * exclude `array`
      * items `string`
    * exclude_attachments `boolean`: Indicates whether attachments should be excluded from the migration (to reduce migration archive file size).
    * lock_repositories `boolean`: Indicates whether repositories should be locked (to prevent manipulation) while migrating data.
    * repositories **required** `array`: A list of arrays indicating which repositories should be migrated.
      * items `string`

#### Output
* output [migration](#migration)

### orgs.org.migrations.migration_id.get
Fetches the status of a migration.

The `state` of a migration can be one of the following values:

*   `pending`, which means the migration hasn't started yet.
*   `exporting`, which means the migration is in progress.
*   `exported`, which means the migration finished successfully.
*   `failed`, which means the migration failed.


```js
github.orgs.org.migrations.migration_id.get({
  "org": "",
  "migration_id": 0
}, context)
```

#### Input
* input `object`
  * org **required** `string`
  * migration_id **required** `integer`: migration_id parameter

#### Output
* output [migration](#migration)

### orgs.org.migrations.migration_id.archive.delete
Deletes a previous migration archive. Migration archives are automatically deleted after seven days.


```js
github.orgs.org.migrations.migration_id.archive.delete({
  "org": "",
  "migration_id": 0
}, context)
```

#### Input
* input `object`
  * org **required** `string`
  * migration_id **required** `integer`: migration_id parameter

#### Output
*Output schema unknown*

### orgs.org.migrations.migration_id.archive.get
Fetches the URL to a migration archive.


```js
github.orgs.org.migrations.migration_id.archive.get({
  "org": "",
  "migration_id": 0
}, context)
```

#### Input
* input `object`
  * org **required** `string`
  * migration_id **required** `integer`: migration_id parameter

#### Output
*Output schema unknown*

### orgs.org.migrations.migration_id.repos.repo_name.lock.delete
Unlocks a repository that was locked for migration. You should unlock each migrated repository and [delete them](https://developer.github.com/v3/repos/#delete-a-repository) when the migration is complete and you no longer need the source data.


```js
github.orgs.org.migrations.migration_id.repos.repo_name.lock.delete({
  "org": "",
  "migration_id": 0,
  "repo_name": ""
}, context)
```

#### Input
* input `object`
  * org **required** `string`
  * migration_id **required** `integer`: migration_id parameter
  * repo_name **required** `string`: repo_name parameter

#### Output
*Output schema unknown*

### orgs.org.migrations.migration_id.repositories.get
List all the repositories for this organization migration.


```js
github.orgs.org.migrations.migration_id.repositories.get({
  "org": "",
  "migration_id": 0
}, context)
```

#### Input
* input `object`
  * org **required** `string`
  * migration_id **required** `integer`: migration_id parameter
  * per_page `integer`: Results per page (max 100)
  * page `integer`: Page number of the results to fetch.

#### Output
* output `array`
  * items [minimal-repository](#minimal-repository)

### orgs.org.outside_collaborators.get
List all users who are outside collaborators of an organization.


```js
github.orgs.org.outside_collaborators.get({
  "org": ""
}, context)
```

#### Input
* input `object`
  * org **required** `string`
  * filter `string` (values: 2fa_disabled, all): Filter the list of outside collaborators. Can be one of:  
  * per_page `integer`: Results per page (max 100)
  * page `integer`: Page number of the results to fetch.

#### Output
* output `array`
  * items [simple-user](#simple-user)

### orgs.org.outside_collaborators.username.delete
Removing a user from this list will remove them from all the organization's repositories.


```js
github.orgs.org.outside_collaborators.username.delete({
  "org": "",
  "username": ""
}, context)
```

#### Input
* input `object`
  * org **required** `string`
  * username **required** `string`

#### Output
*Output schema unknown*

### orgs.org.outside_collaborators.username.put
When an organization member is converted to an outside collaborator, they'll only have access to the repositories that their current team membership allows. The user will no longer be a member of the organization. For more information, see "[Converting an organization member to an outside collaborator](https://help.github.com/articles/converting-an-organization-member-to-an-outside-collaborator/)".


```js
github.orgs.org.outside_collaborators.username.put({
  "org": "",
  "username": ""
}, context)
```

#### Input
* input `object`
  * org **required** `string`
  * username **required** `string`

#### Output
*Output schema unknown*

### orgs.org.projects.get
Lists the projects in an organization. Returns a `404 Not Found` status if projects are disabled in the organization. If you do not have sufficient privileges to perform this action, a `401 Unauthorized` or `410 Gone` status is returned.


```js
github.orgs.org.projects.get({
  "org": ""
}, context)
```

#### Input
* input `object`
  * org **required** `string`
  * state `string` (values: open, closed, all): Indicates the state of the projects to return. Can be either `open`, `closed`, or `all`.
  * per_page `integer`: Results per page (max 100)
  * page `integer`: Page number of the results to fetch.

#### Output
* output `array`
  * items [project](#project)

### orgs.org.projects.post
Creates an organization project board. Returns a `404 Not Found` status if projects are disabled in the organization. If you do not have sufficient privileges to perform this action, a `401 Unauthorized` or `410 Gone` status is returned.


```js
github.orgs.org.projects.post({
  "org": ""
}, context)
```

#### Input
* input `object`
  * org **required** `string`
  * body `object`
    * body `string`: The description of the project.
    * name **required** `string`: The name of the project.

#### Output
* output [project](#project)

### orgs.org.public_members.get
Members of an organization can choose to have their membership publicized or not.


```js
github.orgs.org.public_members.get({
  "org": ""
}, context)
```

#### Input
* input `object`
  * org **required** `string`
  * per_page `integer`: Results per page (max 100)
  * page `integer`: Page number of the results to fetch.

#### Output
* output `array`
  * items [simple-user](#simple-user)

### orgs.org.public_members.username.delete
Remove public organization membership for the authenticated user


```js
github.orgs.org.public_members.username.delete({
  "org": "",
  "username": ""
}, context)
```

#### Input
* input `object`
  * org **required** `string`
  * username **required** `string`

#### Output
*Output schema unknown*

### orgs.org.public_members.username.get
Check public organization membership for a user


```js
github.orgs.org.public_members.username.get({
  "org": "",
  "username": ""
}, context)
```

#### Input
* input `object`
  * org **required** `string`
  * username **required** `string`

#### Output
*Output schema unknown*

### orgs.org.public_members.username.put
The user can publicize their own membership. (A user cannot publicize the membership for another user.)

Note that you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP verbs](https://developer.github.com/v3/#http-verbs)."


```js
github.orgs.org.public_members.username.put({
  "org": "",
  "username": ""
}, context)
```

#### Input
* input `object`
  * org **required** `string`
  * username **required** `string`

#### Output
*Output schema unknown*

### orgs.org.repos.get
Lists repositories for the specified organization.


```js
github.orgs.org.repos.get({
  "org": ""
}, context)
```

#### Input
* input `object`
  * org **required** `string`
  * type `string` (values: all, public, private, forks, sources, member, internal): Specifies the types of repositories you want returned. Can be one of `all`, `public`, `private`, `forks`, `sources`, `member`, `internal`. Default: `all`. If your organization is associated with an enterprise account using GitHub Enterprise Cloud or GitHub Enterprise Server 2.20+, `type` can also be `internal`.
  * sort `string` (values: created, updated, pushed, full_name): Can be one of `created`, `updated`, `pushed`, `full_name`.
  * direction `string` (values: asc, desc): Can be one of `asc` or `desc`. Default: when using `full_name`: `asc`, otherwise `desc`
  * per_page `integer`: Results per page (max 100)
  * page `integer`: Page number of the results to fetch.

#### Output
* output `array`
  * items [minimal-repository](#minimal-repository)

### orgs.org.repos.post
Creates a new repository in the specified organization. The authenticated user must be a member of the organization.

**OAuth scope requirements**

When using [OAuth](https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/), authorizations must include:

*   `public_repo` scope or `repo` scope to create a public repository
*   `repo` scope to create a private repository


```js
github.orgs.org.repos.post({
  "org": ""
}, context)
```

#### Input
* input `object`
  * org **required** `string`
  * body `object`
    * allow_merge_commit `boolean`: Either `true` to allow merging pull requests with a merge commit, or `false` to prevent merging pull requests with merge commits.
    * allow_rebase_merge `boolean`: Either `true` to allow rebase-merging pull requests, or `false` to prevent rebase-merging.
    * allow_squash_merge `boolean`: Either `true` to allow squash-merging pull requests, or `false` to prevent squash-merging.
    * auto_init `boolean`: Pass `true` to create an initial commit with empty README.
    * delete_branch_on_merge `boolean`: Either `true` to allow automatically deleting head branches when pull requests are merged, or `false` to prevent automatic deletion.
    * description `string`: A short description of the repository.
    * gitignore_template `string`: Desired language or platform [.gitignore template](https://github.com/github/gitignore) to apply. Use the name of the template without the extension. For example, "Haskell".
    * has_issues `boolean`: Either `true` to enable issues for this repository or `false` to disable them.
    * has_projects `boolean`: Either `true` to enable projects for this repository or `false` to disable them. **Note:** If you're creating a repository in an organization that has disabled repository projects, the default is `false`, and if you pass `true`, the API returns an error.
    * has_wiki `boolean`: Either `true` to enable the wiki for this repository or `false` to disable it.
    * homepage `string`: A URL with more information about the repository.
    * is_template `boolean`: Either `true` to make this repo available as a template repository or `false` to prevent it.
    * license_template `string`: Choose an [open source license template](https://choosealicense.com/) that best suits your needs, and then use the [license keyword](https://help.github.com/articles/licensing-a-repository/#searching-github-by-license-type) as the `license_template` string. For example, "mit" or "mpl-2.0".
    * name **required** `string`: The name of the repository.
    * private `boolean`: Either `true` to create a private repository or `false` to create a public one.
    * team_id `integer`: The id of the team that will be granted access to this repository. This is only valid when creating a repository in an organization.
    * visibility `string` (values: public, private, visibility, internal): Can be `public` or `private`. If your organization is associated with an enterprise account using GitHub Enterprise Cloud or GitHub Enterprise Server 2.20+, `visibility` can also be `internal`. For more information, see "[Creating an internal repository](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/about-repository-visibility#about-internal-repositories)" in the GitHub Help documentation.  

#### Output
* output [repository](#repository)

### orgs.org.settings.billing.actions.get
**Warning:** The Billing API is currently in public beta and subject to change.

Gets the summary of the free and paid GitHub Actions minutes used.

Paid minutes only apply to workflows in private repositories that use GitHub-hosted runners. Minutes used is listed for each GitHub-hosted runner operating system. Any job re-runs are also included in the usage. The usage does not include the multiplier for macOS and Windows runners and is not rounded up to the nearest whole minute. For more information, see "[Managing billing for GitHub Actions](https://help.github.com/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-actions)".

Access tokens must have the `read:org` scope.


```js
github.orgs.org.settings.billing.actions.get({
  "org": ""
}, context)
```

#### Input
* input `object`
  * org **required** `string`

#### Output
* output [actions-billing-usage](#actions-billing-usage)

### orgs.org.settings.billing.packages.get
**Warning:** The Billing API is currently in public beta and subject to change.

Gets the free and paid storage usued for GitHub Packages in gigabytes.

Paid minutes only apply to packages stored for private repositories. For more information, see "[Managing billing for GitHub Packages](https://help.github.com/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-packages)."

Access tokens must have the `read:org` scope.


```js
github.orgs.org.settings.billing.packages.get({
  "org": ""
}, context)
```

#### Input
* input `object`
  * org **required** `string`

#### Output
* output [packages-billing-usage](#packages-billing-usage)

### orgs.org.settings.billing.shared_storage.get
**Warning:** The Billing API is currently in public beta and subject to change.

Gets the estimated paid and estimated total storage used for GitHub Actions and Github Packages.

Paid minutes only apply to packages stored for private repositories. For more information, see "[Managing billing for GitHub Packages](https://help.github.com/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-packages)."

Access tokens must have the `read:org` scope.


```js
github.orgs.org.settings.billing.shared_storage.get({
  "org": ""
}, context)
```

#### Input
* input `object`
  * org **required** `string`

#### Output
* output [combined-billing-usage](#combined-billing-usage)

### orgs.org.team_sync.groups.get
Team synchronization is available for organizations using GitHub Enterprise Cloud. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

List IdP groups available in an organization. You can limit your page results using the `per_page` parameter. GitHub generates a url-encoded `page` token using a cursor value for where the next page begins. For more information on cursor pagination, see "[Offset and Cursor Pagination explained](https://dev.to/jackmarchant/offset-and-cursor-pagination-explained-b89)."

The `per_page` parameter provides pagination for a list of IdP groups the authenticated user can access in an organization. For example, if the user `octocat` wants to see two groups per page in `octo-org` via cURL, it would look like this:


```js
github.orgs.org.team_sync.groups.get({
  "org": ""
}, context)
```

#### Input
* input `object`
  * org **required** `string`
  * per_page `integer`: Results per page (max 100)
  * page `integer`: Page number of the results to fetch.

#### Output
* output [group-mapping](#group-mapping)

### orgs.org.teams.get
Lists all teams in an organization that are visible to the authenticated user.


```js
github.orgs.org.teams.get({
  "org": ""
}, context)
```

#### Input
* input `object`
  * org **required** `string`
  * per_page `integer`: Results per page (max 100)
  * page `integer`: Page number of the results to fetch.

#### Output
* output `array`
  * items [team](#team)

### orgs.org.teams.post
To create a team, the authenticated user must be a member or owner of `{org}`. By default, organization members can create teams. Organization owners can limit team creation to organization owners. For more information, see "[Setting team creation permissions](https://help.github.com/en/articles/setting-team-creation-permissions-in-your-organization)."

When you create a new team, you automatically become a team maintainer without explicitly adding yourself to the optional array of `maintainers`. For more information, see "[About teams](https://help.github.com/en/github/setting-up-and-managing-organizations-and-teams/about-teams)".


```js
github.orgs.org.teams.post({
  "org": ""
}, context)
```

#### Input
* input `object`
  * org **required** `string`
  * body `object`
    * description `string`: The description of the team.
    * maintainers `array`: List GitHub IDs for organization members who will become team maintainers.
      * items `string`
    * name **required** `string`: The name of the team.
    * parent_team_id `integer`: The ID of a team to set as the parent team.
    * permission `string` (values: pull, push, admin): **Deprecated**. The permission that new repositories will be added to the team with when none is specified. Can be one of:  
    * privacy `string` (values: secret, closed): The level of privacy this team should have. The options are:  
    * repo_names `array`: The full name (e.g., "organization-name/repository-name") of repositories to add the team to.
      * items `string`

#### Output
* output [team-full](#team-full)

### orgs.org.teams.team_slug.delete
To delete a team, the authenticated user must be an organization owner or team maintainer.

If you are an organization owner, deleting a parent team will delete all of its child teams as well.

**Note:** You can also specify a team by `org_id` and `team_id` using the route `DELETE /organizations/{org_id}/team/{team_id}`.


```js
github.orgs.org.teams.team_slug.delete({
  "org": "",
  "team_slug": ""
}, context)
```

#### Input
* input `object`
  * org **required** `string`
  * team_slug **required** `string`: team_slug parameter

#### Output
*Output schema unknown*

### orgs.org.teams.team_slug.get
Gets a team using the team's `slug`. GitHub generates the `slug` from the team `name`.

**Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}`.


```js
github.orgs.org.teams.team_slug.get({
  "org": "",
  "team_slug": ""
}, context)
```

#### Input
* input `object`
  * org **required** `string`
  * team_slug **required** `string`: team_slug parameter

#### Output
* output [team-full](#team-full)

### orgs.org.teams.team_slug.patch
To edit a team, the authenticated user must either be an organization owner or a team maintainer.

**Note:** You can also specify a team by `org_id` and `team_id` using the route `PATCH /organizations/{org_id}/team/{team_id}`.


```js
github.orgs.org.teams.team_slug.patch({
  "org": "",
  "team_slug": ""
}, context)
```

#### Input
* input `object`
  * org **required** `string`
  * team_slug **required** `string`: team_slug parameter
  * body `object`
    * description `string`: The description of the team.
    * name **required** `string`: The name of the team.
    * parent_team_id `integer`: The ID of a team to set as the parent team.
    * permission `string` (values: pull, push, admin): **Deprecated**. The permission that new repositories will be added to the team with when none is specified. Can be one of:  
    * privacy `string` (values: secret, closed): The level of privacy this team should have. Editing teams without specifying this parameter leaves `privacy` intact. When a team is nested, the `privacy` for parent teams cannot be `secret`. The options are:  

#### Output
* output [team-full](#team-full)

### orgs.org.teams.team_slug.discussions.get
List all discussions on a team's page. OAuth access tokens require the `read:discussion` [scope](https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

**Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}/discussions`.


```js
github.orgs.org.teams.team_slug.discussions.get({
  "org": "",
  "team_slug": ""
}, context)
```

#### Input
* input `object`
  * org **required** `string`
  * team_slug **required** `string`: team_slug parameter
  * direction `string` (values: asc, desc): One of `asc` (ascending) or `desc` (descending).
  * per_page `integer`: Results per page (max 100)
  * page `integer`: Page number of the results to fetch.

#### Output
* output `array`
  * items [team-discussion](#team-discussion)

### orgs.org.teams.team_slug.discussions.post
Creates a new discussion post on a team's page. OAuth access tokens require the `write:discussion` [scope](https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

This endpoint triggers [notifications](https://help.github.com/articles/about-notifications/). Creating content too quickly using this endpoint may result in abuse rate limiting. See "[Abuse rate limits](https://developer.github.com/v3/#abuse-rate-limits)" and "[Dealing with abuse rate limits](https://developer.github.com/v3/guides/best-practices-for-integrators/#dealing-with-abuse-rate-limits)" for details.

**Note:** You can also specify a team by `org_id` and `team_id` using the route `POST /organizations/{org_id}/team/{team_id}/discussions`.


```js
github.orgs.org.teams.team_slug.discussions.post({
  "org": "",
  "team_slug": ""
}, context)
```

#### Input
* input `object`
  * org **required** `string`
  * team_slug **required** `string`: team_slug parameter
  * body `object`
    * body **required** `string`: The discussion post's body text.
    * private `boolean`: Private posts are only visible to team members, organization owners, and team maintainers. Public posts are visible to all members of the organization. Set to `true` to create a private post.
    * title **required** `string`: The discussion post's title.

#### Output
* output [team-discussion](#team-discussion)

### orgs.org.teams.team_slug.discussions.discussion_number.delete
Delete a discussion from a team's page. OAuth access tokens require the `write:discussion` [scope](https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

**Note:** You can also specify a team by `org_id` and `team_id` using the route `DELETE /organizations/{org_id}/team/{team_id}/discussions/{discussion_number}`.


```js
github.orgs.org.teams.team_slug.discussions.discussion_number.delete({
  "org": "",
  "team_slug": "",
  "discussion_number": 0
}, context)
```

#### Input
* input `object`
  * org **required** `string`
  * team_slug **required** `string`: team_slug parameter
  * discussion_number **required** `integer`

#### Output
*Output schema unknown*

### orgs.org.teams.team_slug.discussions.discussion_number.get
Get a specific discussion on a team's page. OAuth access tokens require the `read:discussion` [scope](https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

**Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}/discussions/{discussion_number}`.


```js
github.orgs.org.teams.team_slug.discussions.discussion_number.get({
  "org": "",
  "team_slug": "",
  "discussion_number": 0
}, context)
```

#### Input
* input `object`
  * org **required** `string`
  * team_slug **required** `string`: team_slug parameter
  * discussion_number **required** `integer`

#### Output
* output [team-discussion](#team-discussion)

### orgs.org.teams.team_slug.discussions.discussion_number.patch
Edits the title and body text of a discussion post. Only the parameters you provide are updated. OAuth access tokens require the `write:discussion` [scope](https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

**Note:** You can also specify a team by `org_id` and `team_id` using the route `PATCH /organizations/{org_id}/team/{team_id}/discussions/{discussion_number}`.


```js
github.orgs.org.teams.team_slug.discussions.discussion_number.patch({
  "org": "",
  "team_slug": "",
  "discussion_number": 0
}, context)
```

#### Input
* input `object`
  * org **required** `string`
  * team_slug **required** `string`: team_slug parameter
  * discussion_number **required** `integer`
  * body `object`
    * body `string`: The discussion post's body text.
    * title `string`: The discussion post's title.

#### Output
* output [team-discussion](#team-discussion)

### orgs.org.teams.team_slug.discussions.discussion_number.comments.get
List all comments on a team discussion. OAuth access tokens require the `read:discussion` [scope](https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

**Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}/discussions/{discussion_number}/comments`.


```js
github.orgs.org.teams.team_slug.discussions.discussion_number.comments.get({
  "org": "",
  "team_slug": "",
  "discussion_number": 0
}, context)
```

#### Input
* input `object`
  * org **required** `string`
  * team_slug **required** `string`: team_slug parameter
  * discussion_number **required** `integer`
  * direction `string` (values: asc, desc): One of `asc` (ascending) or `desc` (descending).
  * per_page `integer`: Results per page (max 100)
  * page `integer`: Page number of the results to fetch.

#### Output
* output `array`
  * items [team-discussion-comment](#team-discussion-comment)

### orgs.org.teams.team_slug.discussions.discussion_number.comments.post
Creates a new comment on a team discussion. OAuth access tokens require the `write:discussion` [scope](https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

This endpoint triggers [notifications](https://help.github.com/articles/about-notifications/). Creating content too quickly using this endpoint may result in abuse rate limiting. See "[Abuse rate limits](https://developer.github.com/v3/#abuse-rate-limits)" and "[Dealing with abuse rate limits](https://developer.github.com/v3/guides/best-practices-for-integrators/#dealing-with-abuse-rate-limits)" for details.

**Note:** You can also specify a team by `org_id` and `team_id` using the route `POST /organizations/{org_id}/team/{team_id}/discussions/{discussion_number}/comments`.


```js
github.orgs.org.teams.team_slug.discussions.discussion_number.comments.post({
  "org": "",
  "team_slug": "",
  "discussion_number": 0
}, context)
```

#### Input
* input `object`
  * org **required** `string`
  * team_slug **required** `string`: team_slug parameter
  * discussion_number **required** `integer`
  * body `object`
    * body **required** `string`: The discussion comment's body text.

#### Output
* output [team-discussion-comment](#team-discussion-comment)

### orgs.org.teams.team_slug.discussions.discussion_number.comments.comment_number.delete
Deletes a comment on a team discussion. OAuth access tokens require the `write:discussion` [scope](https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

**Note:** You can also specify a team by `org_id` and `team_id` using the route `DELETE /organizations/{org_id}/team/{team_id}/discussions/{discussion_number}/comments/{comment_number}`.


```js
github.orgs.org.teams.team_slug.discussions.discussion_number.comments.comment_number.delete({
  "org": "",
  "team_slug": "",
  "discussion_number": 0,
  "comment_number": 0
}, context)
```

#### Input
* input `object`
  * org **required** `string`
  * team_slug **required** `string`: team_slug parameter
  * discussion_number **required** `integer`
  * comment_number **required** `integer`

#### Output
*Output schema unknown*

### orgs.org.teams.team_slug.discussions.discussion_number.comments.comment_number.get
Get a specific comment on a team discussion. OAuth access tokens require the `read:discussion` [scope](https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

**Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}/discussions/{discussion_number}/comments/{comment_number}`.


```js
github.orgs.org.teams.team_slug.discussions.discussion_number.comments.comment_number.get({
  "org": "",
  "team_slug": "",
  "discussion_number": 0,
  "comment_number": 0
}, context)
```

#### Input
* input `object`
  * org **required** `string`
  * team_slug **required** `string`: team_slug parameter
  * discussion_number **required** `integer`
  * comment_number **required** `integer`

#### Output
* output [team-discussion-comment](#team-discussion-comment)

### orgs.org.teams.team_slug.discussions.discussion_number.comments.comment_number.patch
Edits the body text of a discussion comment. OAuth access tokens require the `write:discussion` [scope](https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

**Note:** You can also specify a team by `org_id` and `team_id` using the route `PATCH /organizations/{org_id}/team/{team_id}/discussions/{discussion_number}/comments/{comment_number}`.


```js
github.orgs.org.teams.team_slug.discussions.discussion_number.comments.comment_number.patch({
  "org": "",
  "team_slug": "",
  "discussion_number": 0,
  "comment_number": 0
}, context)
```

#### Input
* input `object`
  * org **required** `string`
  * team_slug **required** `string`: team_slug parameter
  * discussion_number **required** `integer`
  * comment_number **required** `integer`
  * body `object`
    * body **required** `string`: The discussion comment's body text.

#### Output
* output [team-discussion-comment](#team-discussion-comment)

### orgs.org.teams.team_slug.discussions.discussion_number.comments.comment_number.reactions.get
List the reactions to a [team discussion comment](https://developer.github.com/v3/teams/discussion_comments/). OAuth access tokens require the `read:discussion` [scope](https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

**Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/:org_id/team/:team_id/discussions/:discussion_number/comments/:comment_number/reactions`.


```js
github.orgs.org.teams.team_slug.discussions.discussion_number.comments.comment_number.reactions.get({
  "org": "",
  "team_slug": "",
  "discussion_number": 0,
  "comment_number": 0
}, context)
```

#### Input
* input `object`
  * org **required** `string`
  * team_slug **required** `string`: team_slug parameter
  * discussion_number **required** `integer`
  * comment_number **required** `integer`
  * content `string` (values: +1, -1, laugh, confused, heart, hooray, rocket, eyes): Returns a single [reaction type](https://developer.github.com/v3/reactions/#reaction-types). Omit this parameter to list all reactions to a team discussion comment.
  * per_page `integer`: Results per page (max 100)
  * page `integer`: Page number of the results to fetch.

#### Output
* output `array`
  * items [reaction](#reaction)

### orgs.org.teams.team_slug.discussions.discussion_number.comments.comment_number.reactions.post
Create a reaction to a [team discussion comment](https://developer.github.com/v3/teams/discussion_comments/). OAuth access tokens require the `write:discussion` [scope](https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/). A response with a `Status: 200 OK` means that you already added the reaction type to this team discussion comment.

**Note:** You can also specify a team by `org_id` and `team_id` using the route `POST /organizations/:org_id/team/:team_id/discussions/:discussion_number/comments/:comment_number/reactions`.


```js
github.orgs.org.teams.team_slug.discussions.discussion_number.comments.comment_number.reactions.post({
  "org": "",
  "team_slug": "",
  "discussion_number": 0,
  "comment_number": 0
}, context)
```

#### Input
* input `object`
  * org **required** `string`
  * team_slug **required** `string`: team_slug parameter
  * discussion_number **required** `integer`
  * comment_number **required** `integer`
  * body `object`
    * content **required** `string` (values: +1, -1, laugh, confused, heart, hooray, rocket, eyes): The [reaction type](https://developer.github.com/v3/reactions/#reaction-types) to add to the team discussion comment.

#### Output
* output [reaction](#reaction)

### orgs.org.teams.team_slug.discussions.discussion_number.comments.comment_number.reactions.reaction_id.delete
**Note:** You can also specify a team or organization with `team_id` and `org_id` using the route `DELETE /organizations/:org_id/team/:team_id/discussions/:discussion_number/comments/:comment_number/reactions/:reaction_id`.

Delete a reaction to a [team discussion comment](https://developer.github.com/v3/teams/discussion_comments/). OAuth access tokens require the `write:discussion` [scope](https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).


```js
github.orgs.org.teams.team_slug.discussions.discussion_number.comments.comment_number.reactions.reaction_id.delete({
  "org": "",
  "team_slug": "",
  "discussion_number": 0,
  "comment_number": 0,
  "reaction_id": 0
}, context)
```

#### Input
* input `object`
  * org **required** `string`
  * team_slug **required** `string`: team_slug parameter
  * discussion_number **required** `integer`
  * comment_number **required** `integer`
  * reaction_id **required** `integer`

#### Output
*Output schema unknown*

### orgs.org.teams.team_slug.discussions.discussion_number.reactions.get
List the reactions to a [team discussion](https://developer.github.com/v3/teams/discussions/). OAuth access tokens require the `read:discussion` [scope](https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

**Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/:org_id/team/:team_id/discussions/:discussion_number/reactions`.


```js
github.orgs.org.teams.team_slug.discussions.discussion_number.reactions.get({
  "org": "",
  "team_slug": "",
  "discussion_number": 0
}, context)
```

#### Input
* input `object`
  * org **required** `string`
  * team_slug **required** `string`: team_slug parameter
  * discussion_number **required** `integer`
  * content `string` (values: +1, -1, laugh, confused, heart, hooray, rocket, eyes): Returns a single [reaction type](https://developer.github.com/v3/reactions/#reaction-types). Omit this parameter to list all reactions to a team discussion.
  * per_page `integer`: Results per page (max 100)
  * page `integer`: Page number of the results to fetch.

#### Output
* output `array`
  * items [reaction](#reaction)

### orgs.org.teams.team_slug.discussions.discussion_number.reactions.post
Create a reaction to a [team discussion](https://developer.github.com/v3/teams/discussions/). OAuth access tokens require the `write:discussion` [scope](https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/). A response with a `Status: 200 OK` means that you already added the reaction type to this team discussion.

**Note:** You can also specify a team by `org_id` and `team_id` using the route `POST /organizations/:org_id/team/:team_id/discussions/:discussion_number/reactions`.


```js
github.orgs.org.teams.team_slug.discussions.discussion_number.reactions.post({
  "org": "",
  "team_slug": "",
  "discussion_number": 0
}, context)
```

#### Input
* input `object`
  * org **required** `string`
  * team_slug **required** `string`: team_slug parameter
  * discussion_number **required** `integer`
  * body `object`
    * content **required** `string` (values: +1, -1, laugh, confused, heart, hooray, rocket, eyes): The [reaction type](https://developer.github.com/v3/reactions/#reaction-types) to add to the team discussion.

#### Output
* output [reaction](#reaction)

### orgs.org.teams.team_slug.discussions.discussion_number.reactions.reaction_id.delete
**Note:** You can also specify a team or organization with `team_id` and `org_id` using the route `DELETE /organizations/:org_id/team/:team_id/discussions/:discussion_number/reactions/:reaction_id`.

Delete a reaction to a [team discussion](https://developer.github.com/v3/teams/discussions/). OAuth access tokens require the `write:discussion` [scope](https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).


```js
github.orgs.org.teams.team_slug.discussions.discussion_number.reactions.reaction_id.delete({
  "org": "",
  "team_slug": "",
  "discussion_number": 0,
  "reaction_id": 0
}, context)
```

#### Input
* input `object`
  * org **required** `string`
  * team_slug **required** `string`: team_slug parameter
  * discussion_number **required** `integer`
  * reaction_id **required** `integer`

#### Output
*Output schema unknown*

### orgs.org.teams.team_slug.invitations.get
The return hash contains a `role` field which refers to the Organization Invitation role and will be one of the following values: `direct_member`, `admin`, `billing_manager`, `hiring_manager`, or `reinstate`. If the invitee is not a GitHub member, the `login` field in the return hash will be `null`.

**Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}/invitations`.


```js
github.orgs.org.teams.team_slug.invitations.get({
  "org": "",
  "team_slug": ""
}, context)
```

#### Input
* input `object`
  * org **required** `string`
  * team_slug **required** `string`: team_slug parameter
  * per_page `integer`: Results per page (max 100)
  * page `integer`: Page number of the results to fetch.

#### Output
* output `array`
  * items [organization-invitation](#organization-invitation)

### orgs.org.teams.team_slug.members.get
Team members will include the members of child teams.

To list members in a team, the team must be visible to the authenticated user.


```js
github.orgs.org.teams.team_slug.members.get({
  "org": "",
  "team_slug": ""
}, context)
```

#### Input
* input `object`
  * org **required** `string`
  * team_slug **required** `string`: team_slug parameter
  * role `string` (values: member, maintainer, all): Filters members returned by their role in the team. Can be one of:  
  * per_page `integer`: Results per page (max 100)
  * page `integer`: Page number of the results to fetch.

#### Output
* output `array`
  * items [simple-user](#simple-user)

### orgs.org.teams.team_slug.memberships.username.delete
Team synchronization is available for organizations using GitHub Enterprise Cloud. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

To remove a membership between a user and a team, the authenticated user must have 'admin' permissions to the team or be an owner of the organization that the team is associated with. Removing team membership does not delete the user, it just removes their membership from the team.

**Note:** When you have team synchronization set up for a team with your organization's identity provider (IdP), you will see an error if you attempt to use the API for making changes to the team's membership. If you have access to manage group membership in your IdP, you can manage GitHub team membership through your identity provider, which automatically adds and removes team members in an organization. For more information, see "[Synchronizing teams between your identity provider and GitHub](https://help.github.com/articles/synchronizing-teams-between-your-identity-provider-and-github/)."

**Note:** You can also specify a team by `org_id` and `team_id` using the route `DELETE /organizations/{org_id}/team/{team_id}/memberships/{username}`.


```js
github.orgs.org.teams.team_slug.memberships.username.delete({
  "org": "",
  "team_slug": "",
  "username": ""
}, context)
```

#### Input
* input `object`
  * org **required** `string`
  * team_slug **required** `string`: team_slug parameter
  * username **required** `string`

#### Output
*Output schema unknown*

### orgs.org.teams.team_slug.memberships.username.get
Team members will include the members of child teams.

To get a user's membership with a team, the team must be visible to the authenticated user.

**Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}/memberships/{username}`.

**Note:** The `role` for organization owners returns as `maintainer`. For more information about `maintainer` roles, see [Create a team](https://developer.github.com/v3/teams/#create-a-team).


```js
github.orgs.org.teams.team_slug.memberships.username.get({
  "org": "",
  "team_slug": "",
  "username": ""
}, context)
```

#### Input
* input `object`
  * org **required** `string`
  * team_slug **required** `string`: team_slug parameter
  * username **required** `string`

#### Output
* output [team-membership](#team-membership)

### orgs.org.teams.team_slug.memberships.username.put
Team synchronization is available for organizations using GitHub Enterprise Cloud. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

Adds an organization member to a team. An authenticated organization owner or team maintainer can add organization members to a team.

**Note:** When you have team synchronization set up for a team with your organization's identity provider (IdP), you will see an error if you attempt to use the API for making changes to the team's membership. If you have access to manage group membership in your IdP, you can manage GitHub team membership through your identity provider, which automatically adds and removes team members in an organization. For more information, see "[Synchronizing teams between your identity provider and GitHub](https://help.github.com/articles/synchronizing-teams-between-your-identity-provider-and-github/)."

An organization owner can add someone who is not part of the team's organization to a team. When an organization owner adds someone to a team who is not an organization member, this endpoint will send an invitation to the person via email. This newly-created membership will be in the "pending" state until the person accepts the invitation, at which point the membership will transition to the "active" state and the user will be added as a member of the team.

If the user is already a member of the team, this endpoint will update the role of the team member's role. To update the membership of a team member, the authenticated user must be an organization owner or a team maintainer.

**Note:** You can also specify a team by `org_id` and `team_id` using the route `PUT /organizations/{org_id}/team/{team_id}/memberships/{username}`.


```js
github.orgs.org.teams.team_slug.memberships.username.put({
  "org": "",
  "team_slug": "",
  "username": ""
}, context)
```

#### Input
* input `object`
  * org **required** `string`
  * team_slug **required** `string`: team_slug parameter
  * username **required** `string`
  * body `object`
    * role `string` (values: member, maintainer): The role that this user should have in the team. Can be one of:  

#### Output
* output [team-membership](#team-membership)

### orgs.org.teams.team_slug.projects.get
Lists the organization projects for a team.

**Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}/projects`.


```js
github.orgs.org.teams.team_slug.projects.get({
  "org": "",
  "team_slug": ""
}, context)
```

#### Input
* input `object`
  * org **required** `string`
  * team_slug **required** `string`: team_slug parameter
  * per_page `integer`: Results per page (max 100)
  * page `integer`: Page number of the results to fetch.

#### Output
* output `array`
  * items [team-project](#team-project)

### orgs.org.teams.team_slug.projects.project_id.delete
Removes an organization project from a team. An organization owner or a team maintainer can remove any project from the team. To remove a project from a team as an organization member, the authenticated user must have `read` access to both the team and project, or `admin` access to the team or project. This endpoint removes the project from the team, but does not delete the project.

**Note:** You can also specify a team by `org_id` and `team_id` using the route `DELETE /organizations/{org_id}/team/{team_id}/projects/{project_id}`.


```js
github.orgs.org.teams.team_slug.projects.project_id.delete({
  "org": "",
  "team_slug": "",
  "project_id": 0
}, context)
```

#### Input
* input `object`
  * org **required** `string`
  * team_slug **required** `string`: team_slug parameter
  * project_id **required** `integer`

#### Output
*Output schema unknown*

### orgs.org.teams.team_slug.projects.project_id.get
Checks whether a team has `read`, `write`, or `admin` permissions for an organization project. The response includes projects inherited from a parent team.

**Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}/projects/{project_id}`.


```js
github.orgs.org.teams.team_slug.projects.project_id.get({
  "org": "",
  "team_slug": "",
  "project_id": 0
}, context)
```

#### Input
* input `object`
  * org **required** `string`
  * team_slug **required** `string`: team_slug parameter
  * project_id **required** `integer`

#### Output
* output [team-project](#team-project)

### orgs.org.teams.team_slug.projects.project_id.put
Adds an organization project to a team. To add a project to a team or update the team's permission on a project, the authenticated user must have `admin` permissions for the project. The project and team must be part of the same organization.

**Note:** You can also specify a team by `org_id` and `team_id` using the route `PUT /organizations/{org_id}/team/{team_id}/projects/{project_id}`.


```js
github.orgs.org.teams.team_slug.projects.project_id.put({
  "org": "",
  "team_slug": "",
  "project_id": 0
}, context)
```

#### Input
* input `object`
  * org **required** `string`
  * team_slug **required** `string`: team_slug parameter
  * project_id **required** `integer`
  * body `object`
    * permission `string` (values: read, write, admin): The permission to grant to the team for this project. Can be one of:  

#### Output
*Output schema unknown*

### orgs.org.teams.team_slug.repos.get
Lists a team's repositories visible to the authenticated user.

**Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}/repos`.


```js
github.orgs.org.teams.team_slug.repos.get({
  "org": "",
  "team_slug": ""
}, context)
```

#### Input
* input `object`
  * org **required** `string`
  * team_slug **required** `string`: team_slug parameter
  * per_page `integer`: Results per page (max 100)
  * page `integer`: Page number of the results to fetch.

#### Output
* output `array`
  * items [minimal-repository](#minimal-repository)

### orgs.org.teams.team_slug.repos.owner.repo.delete
If the authenticated user is an organization owner or a team maintainer, they can remove any repositories from the team. To remove a repository from a team as an organization member, the authenticated user must have admin access to the repository and must be able to see the team. This does not delete the repository, it just removes it from the team.

**Note:** You can also specify a team by `org_id` and `team_id` using the route `DELETE /organizations/{org_id}/team/{team_id}/repos/{owner}/{repo}`.


```js
github.orgs.org.teams.team_slug.repos.owner.repo.delete({
  "org": "",
  "team_slug": "",
  "owner": "",
  "repo": ""
}, context)
```

#### Input
* input `object`
  * org **required** `string`
  * team_slug **required** `string`: team_slug parameter
  * owner **required** `string`
  * repo **required** `string`

#### Output
*Output schema unknown*

### orgs.org.teams.team_slug.repos.owner.repo.get
Checks whether a team has `admin`, `push`, `maintain`, `triage`, or `pull` permission for a repository. Repositories inherited through a parent team will also be checked.

You can also get information about the specified repository, including what permissions the team grants on it, by passing the following custom [media type](https://developer.github.com/v3/media/) via the `application/vnd.github.v3.repository+json` accept header.

If a team doesn't have permission for the repository, you will receive a `404 Not Found` response status.

**Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}/repos/{owner}/{repo}`.


```js
github.orgs.org.teams.team_slug.repos.owner.repo.get({
  "org": "",
  "team_slug": "",
  "owner": "",
  "repo": ""
}, context)
```

#### Input
* input `object`
  * org **required** `string`
  * team_slug **required** `string`: team_slug parameter
  * owner **required** `string`
  * repo **required** `string`

#### Output
* output [team-repository](#team-repository)

### orgs.org.teams.team_slug.repos.owner.repo.put
To add a repository to a team or update the team's permission on a repository, the authenticated user must have admin access to the repository, and must be able to see the team. The repository must be owned by the organization, or a direct fork of a repository owned by the organization. You will get a `422 Unprocessable Entity` status if you attempt to add a repository to a team that is not owned by the organization. Note that, if you choose not to pass any parameters, you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP verbs](https://developer.github.com/v3/#http-verbs)."

**Note:** You can also specify a team by `org_id` and `team_id` using the route `PUT /organizations/{org_id}/team/{team_id}/repos/{owner}/{repo}`.

For more information about the permission levels, see "[Repository permission levels for an organization](https://help.github.com/en/github/setting-up-and-managing-organizations-and-teams/repository-permission-levels-for-an-organization#permission-levels-for-repositories-owned-by-an-organization)".


```js
github.orgs.org.teams.team_slug.repos.owner.repo.put({
  "org": "",
  "team_slug": "",
  "owner": "",
  "repo": ""
}, context)
```

#### Input
* input `object`
  * org **required** `string`
  * team_slug **required** `string`: team_slug parameter
  * owner **required** `string`
  * repo **required** `string`
  * body `object`
    * permission `string` (values: pull, push, admin, maintain, triage): The permission to grant the team on this repository. Can be one of:  

#### Output
*Output schema unknown*

### orgs.org.teams.team_slug.team_sync.group_mappings.get
Team synchronization is available for organizations using GitHub Enterprise Cloud. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

List IdP groups connected to a team on GitHub.

**Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}/team-sync/group-mappings`.


```js
github.orgs.org.teams.team_slug.team_sync.group_mappings.get({
  "org": "",
  "team_slug": ""
}, context)
```

#### Input
* input `object`
  * org **required** `string`
  * team_slug **required** `string`: team_slug parameter

#### Output
* output [group-mapping](#group-mapping)

### orgs.org.teams.team_slug.team_sync.group_mappings.patch
Team synchronization is available for organizations using GitHub Enterprise Cloud. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

Creates, updates, or removes a connection between a team and an IdP group. When adding groups to a team, you must include all new and existing groups to avoid replacing existing groups with the new ones. Specifying an empty `groups` array will remove all connections for a team.

**Note:** You can also specify a team by `org_id` and `team_id` using the route `PATCH /organizations/{org_id}/team/{team_id}/team-sync/group-mappings`.


```js
github.orgs.org.teams.team_slug.team_sync.group_mappings.patch({
  "org": "",
  "team_slug": ""
}, context)
```

#### Input
* input `object`
  * org **required** `string`
  * team_slug **required** `string`: team_slug parameter
  * body `object`
    * groups **required** `array`: The IdP groups you want to connect to a GitHub team. When updating, the new `groups` object will replace the original one. You must include any existing groups that you don't want to remove.
      * items `object`
        * group_description **required** `string`: Description of the IdP group.
        * group_id **required** `string`: ID of the IdP group.
        * group_name **required** `string`: Name of the IdP group.

#### Output
* output [group-mapping](#group-mapping)

### orgs.org.teams.team_slug.teams.get
Lists the child teams of the team specified by `{team_slug}`.

**Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}/teams`.


```js
github.orgs.org.teams.team_slug.teams.get({
  "org": "",
  "team_slug": ""
}, context)
```

#### Input
* input `object`
  * org **required** `string`
  * team_slug **required** `string`: team_slug parameter
  * per_page `integer`: Results per page (max 100)
  * page `integer`: Page number of the results to fetch.

#### Output
* output `array`
  * items [team](#team)

### projects.columns.cards.card_id.delete
Delete a project card


```js
github.projects.columns.cards.card_id.delete({
  "card_id": 0
}, context)
```

#### Input
* input `object`
  * card_id **required** `integer`: card_id parameter

#### Output
*Output schema unknown*

### projects.columns.cards.card_id.get
Get a project card


```js
github.projects.columns.cards.card_id.get({
  "card_id": 0
}, context)
```

#### Input
* input `object`
  * card_id **required** `integer`: card_id parameter

#### Output
* output [project-card](#project-card)

### projects.columns.cards.card_id.patch
Update an existing project card


```js
github.projects.columns.cards.card_id.patch({
  "card_id": 0
}, context)
```

#### Input
* input `object`
  * card_id **required** `integer`: card_id parameter
  * body `object`
    * archived `boolean`: Whether or not the card is archived
    * note `string`: The project card's note

#### Output
* output [project-card](#project-card)

### projects.columns.cards.card_id.moves.post
Move a project card


```js
github.projects.columns.cards.card_id.moves.post({
  "card_id": 0
}, context)
```

#### Input
* input `object`
  * card_id **required** `integer`: card_id parameter
  * body `object`
    * column_id `integer`: The unique identifier of the column the card should be moved to
    * position **required** `string`: The position of the card in a column

#### Output
* output `object`

### projects.columns.column_id.delete
Delete a project column


```js
github.projects.columns.column_id.delete({
  "column_id": 0
}, context)
```

#### Input
* input `object`
  * column_id **required** `integer`: column_id parameter

#### Output
*Output schema unknown*

### projects.columns.column_id.get
Get a project column


```js
github.projects.columns.column_id.get({
  "column_id": 0
}, context)
```

#### Input
* input `object`
  * column_id **required** `integer`: column_id parameter

#### Output
* output [project-column](#project-column)

### projects.columns.column_id.patch
Update an existing project column


```js
github.projects.columns.column_id.patch({
  "column_id": 0
}, context)
```

#### Input
* input `object`
  * column_id **required** `integer`: column_id parameter
  * body `object`
    * name **required** `string`: Name of the project column

#### Output
* output [project-column](#project-column)

### projects.columns.column_id.cards.get
List project cards


```js
github.projects.columns.column_id.cards.get({
  "column_id": 0
}, context)
```

#### Input
* input `object`
  * column_id **required** `integer`: column_id parameter
  * archived_state `string` (values: all, archived, not_archived): Filters the project cards that are returned by the card's state. Can be one of `all`,`archived`, or `not_archived`.
  * per_page `integer`: Results per page (max 100)
  * page `integer`: Page number of the results to fetch.

#### Output
* output `array`
  * items [project-card](#project-card)

### projects.columns.column_id.cards.post
**Note**: GitHub's REST API v3 considers every pull request an issue, but not every issue is a pull request. For this reason, "Issues" endpoints may return both issues and pull requests in the response. You can identify pull requests by the `pull_request` key.

Be aware that the `id` of a pull request returned from "Issues" endpoints will be an _issue id_. To find out the pull request id, use the "[List pull requests](https://developer.github.com/v3/pulls/#list-pull-requests)" endpoint.


```js
github.projects.columns.column_id.cards.post({
  "column_id": 0
}, context)
```

#### Input
* input `object`
  * column_id **required** `integer`: column_id parameter

#### Output
* output [project-card](#project-card)

### projects.columns.column_id.moves.post
Move a project column


```js
github.projects.columns.column_id.moves.post({
  "column_id": 0
}, context)
```

#### Input
* input `object`
  * column_id **required** `integer`: column_id parameter
  * body `object`
    * position **required** `string`: The position of the column in a project

#### Output
* output `object`

### projects.project_id.delete
Deletes a project board. Returns a `404 Not Found` status if projects are disabled.


```js
github.projects.project_id.delete({
  "project_id": 0
}, context)
```

#### Input
* input `object`
  * project_id **required** `integer`

#### Output
*Output schema unknown*

### projects.project_id.get
Gets a project by its `id`. Returns a `404 Not Found` status if projects are disabled. If you do not have sufficient privileges to perform this action, a `401 Unauthorized` or `410 Gone` status is returned.


```js
github.projects.project_id.get({
  "project_id": 0
}, context)
```

#### Input
* input `object`
  * project_id **required** `integer`

#### Output
* output [project](#project)

### projects.project_id.patch
Updates a project board's information. Returns a `404 Not Found` status if projects are disabled. If you do not have sufficient privileges to perform this action, a `401 Unauthorized` or `410 Gone` status is returned.


```js
github.projects.project_id.patch({
  "project_id": 0
}, context)
```

#### Input
* input `object`
  * project_id **required** `integer`
  * body `object`
    * body `string`: Body of the project
    * name `string`: Name of the project
    * organization_permission `string` (values: read, write, admin, none): The baseline permission that all organization members have on this project
    * private `boolean`: Whether or not this project can be seen by everyone.
    * state `string`: State of the project; either 'open' or 'closed'

#### Output
* output [project](#project)

### projects.project_id.collaborators.get
Lists the collaborators for an organization project. For a project, the list of collaborators includes outside collaborators, organization members that are direct collaborators, organization members with access through team memberships, organization members with access through default organization permissions, and organization owners. You must be an organization owner or a project `admin` to list collaborators.


```js
github.projects.project_id.collaborators.get({
  "project_id": 0
}, context)
```

#### Input
* input `object`
  * project_id **required** `integer`
  * affiliation `string` (values: outside, direct, all): Filters the collaborators by their affiliation. Can be one of:  
  * per_page `integer`: Results per page (max 100)
  * page `integer`: Page number of the results to fetch.

#### Output
* output `array`
  * items [simple-user](#simple-user)

### projects.project_id.collaborators.username.delete
Removes a collaborator from an organization project. You must be an organization owner or a project `admin` to remove a collaborator.


```js
github.projects.project_id.collaborators.username.delete({
  "project_id": 0,
  "username": ""
}, context)
```

#### Input
* input `object`
  * project_id **required** `integer`
  * username **required** `string`

#### Output
*Output schema unknown*

### projects.project_id.collaborators.username.put
Adds a collaborator to an organization project and sets their permission level. You must be an organization owner or a project `admin` to add a collaborator.


```js
github.projects.project_id.collaborators.username.put({
  "project_id": 0,
  "username": ""
}, context)
```

#### Input
* input `object`
  * project_id **required** `integer`
  * username **required** `string`
  * body `object`
    * permission `string` (values: read, write, admin): The permission to grant the collaborator.

#### Output
*Output schema unknown*

### projects.project_id.collaborators.username.permission.get
Returns the collaborator's permission level for an organization project. Possible values for the `permission` key: `admin`, `write`, `read`, `none`. You must be an organization owner or a project `admin` to review a user's permission level.


```js
github.projects.project_id.collaborators.username.permission.get({
  "project_id": 0,
  "username": ""
}, context)
```

#### Input
* input `object`
  * project_id **required** `integer`
  * username **required** `string`

#### Output
* output [repository-collaborator-permission](#repository-collaborator-permission)

### projects.project_id.columns.get
List project columns


```js
github.projects.project_id.columns.get({
  "project_id": 0
}, context)
```

#### Input
* input `object`
  * project_id **required** `integer`
  * per_page `integer`: Results per page (max 100)
  * page `integer`: Page number of the results to fetch.

#### Output
* output `array`
  * items [project-column](#project-column)

### projects.project_id.columns.post
Create a project column


```js
github.projects.project_id.columns.post({
  "project_id": 0
}, context)
```

#### Input
* input `object`
  * project_id **required** `integer`
  * body `object`
    * name **required** `string`: Name of the project column

#### Output
* output [project-column](#project-column)

### rate_limit.get
**Note:** Accessing this endpoint does not count against your REST API rate limit.

**Note:** The `rate` object is deprecated. If you're writing new API client code or updating existing code, you should use the `core` object instead of the `rate` object. The `core` object contains the same information that is present in the `rate` object.


```js
github.rate_limit.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [rate-limit-overview](#rate-limit-overview)

### reactions.reaction_id.delete
**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Reactions API. We recommend migrating your existing code to use the new delete reactions endpoints. For more information, see this [blog post](https://developer.github.com/changes/2020-02-26-new-delete-reactions-endpoints/).

OAuth access tokens require the `write:discussion` [scope](https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/), when deleting a [team discussion](https://developer.github.com/v3/teams/discussions/) or [team discussion comment](https://developer.github.com/v3/teams/discussion_comments/).


```js
github.reactions.reaction_id.delete({
  "reaction_id": 0
}, context)
```

#### Input
* input `object`
  * reaction_id **required** `integer`

#### Output
*Output schema unknown*

### repos.owner.repo.delete
Deleting a repository requires admin access. If OAuth is used, the `delete_repo` scope is required.

If an organization owner has configured the organization to prevent members from deleting organization-owned
repositories, you will get a `403 Forbidden` response.


```js
github.repos.owner.repo.delete({
  "owner": "",
  "repo": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`

#### Output
*Output schema unknown*

### repos.owner.repo.get
When you pass the `scarlet-witch-preview` media type, requests to get a repository will also return the repository's code of conduct if it can be detected from the repository's code of conduct file.

The `parent` and `source` objects are present when the repository is a fork. `parent` is the repository this repository was forked from, `source` is the ultimate source for the network.


```js
github.repos.owner.repo.get({
  "owner": "",
  "repo": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`

#### Output
* output [full-repository](#full-repository)

### repos.owner.repo.patch
**Note**: To edit a repository's topics, use the [Replace all repository topics](https://developer.github.com/v3/repos/#replace-all-repository-topics) endpoint.


```js
github.repos.owner.repo.patch({
  "owner": "",
  "repo": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * body `object`
    * allow_merge_commit `boolean`: Either `true` to allow merging pull requests with a merge commit, or `false` to prevent merging pull requests with merge commits.
    * allow_rebase_merge `boolean`: Either `true` to allow rebase-merging pull requests, or `false` to prevent rebase-merging.
    * allow_squash_merge `boolean`: Either `true` to allow squash-merging pull requests, or `false` to prevent squash-merging.
    * archived `boolean`: `true` to archive this repository. **Note**: You cannot unarchive repositories through the API.
    * default_branch `string`: Updates the default branch for this repository.
    * delete_branch_on_merge `boolean`: Either `true` to allow automatically deleting head branches when pull requests are merged, or `false` to prevent automatic deletion.
    * description `string`: A short description of the repository.
    * has_issues `boolean`: Either `true` to enable issues for this repository or `false` to disable them.
    * has_projects `boolean`: Either `true` to enable projects for this repository or `false` to disable them. **Note:** If you're creating a repository in an organization that has disabled repository projects, the default is `false`, and if you pass `true`, the API returns an error.
    * has_wiki `boolean`: Either `true` to enable the wiki for this repository or `false` to disable it.
    * homepage `string`: A URL with more information about the repository.
    * is_template `boolean`: Either `true` to make this repo available as a template repository or `false` to prevent it.
    * name `string`: The name of the repository.
    * private `boolean`: Either `true` to make the repository private or `false` to make it public. Default: `false`.  
    * visibility `string` (values: public, private, visibility, internal): Can be `public` or `private`. If your organization is associated with an enterprise account using GitHub Enterprise Cloud or GitHub Enterprise Server 2.20+, `visibility` can also be `internal`. The `visibility` parameter overrides the `private` parameter when you use both along with the `nebula-preview` preview header.

#### Output
* output [full-repository](#full-repository)

### repos.owner.repo.actions.artifacts.get
Lists all artifacts for a repository. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.


```js
github.repos.owner.repo.actions.artifacts.get({
  "owner": "",
  "repo": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * per_page `integer`: Results per page (max 100)
  * page `integer`: Page number of the results to fetch.

#### Output
* output `object`
  * artifacts `array`
    * items [artifact](#artifact)
  * total_count `integer`

### repos.owner.repo.actions.artifacts.artifact_id.delete
Deletes an artifact for a workflow run. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `actions:write` permission to use this endpoint.


```js
github.repos.owner.repo.actions.artifacts.artifact_id.delete({
  "owner": "",
  "repo": "",
  "artifact_id": 0
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * artifact_id **required** `integer`: artifact_id parameter

#### Output
*Output schema unknown*

### repos.owner.repo.actions.artifacts.artifact_id.get
Gets a specific artifact for a workflow run. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.


```js
github.repos.owner.repo.actions.artifacts.artifact_id.get({
  "owner": "",
  "repo": "",
  "artifact_id": 0
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * artifact_id **required** `integer`: artifact_id parameter

#### Output
* output [artifact](#artifact)

### repos.owner.repo.actions.artifacts.artifact_id.archive_format.get
Gets a redirect URL to download an archive for a repository. This URL expires after 1 minute. Look for `Location:` in
the response header to find the URL for the download. The `:archive_format` must be `zip`. Anyone with read access to
the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope.
GitHub Apps must have the `actions:read` permission to use this endpoint.


```js
github.repos.owner.repo.actions.artifacts.artifact_id.archive_format.get({
  "owner": "",
  "repo": "",
  "artifact_id": 0,
  "archive_format": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * artifact_id **required** `integer`: artifact_id parameter
  * archive_format **required** `string`: archive_format parameter

#### Output
*Output schema unknown*

### repos.owner.repo.actions.jobs.job_id.get
Gets a specific job in a workflow run. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.


```js
github.repos.owner.repo.actions.jobs.job_id.get({
  "owner": "",
  "repo": "",
  "job_id": 0
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * job_id **required** `integer`: job_id parameter

#### Output
* output [job](#job)

### repos.owner.repo.actions.jobs.job_id.logs.get
Gets a redirect URL to download a plain text file of logs for a workflow job. This link expires after 1 minute. Look
for `Location:` in the response header to find the URL for the download. Anyone with read access to the repository can
use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must
have the `actions:read` permission to use this endpoint.


```js
github.repos.owner.repo.actions.jobs.job_id.logs.get({
  "owner": "",
  "repo": "",
  "job_id": 0
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * job_id **required** `integer`: job_id parameter

#### Output
*Output schema unknown*

### repos.owner.repo.actions.runners.get
Lists all self-hosted runners for a repository. You must authenticate using an access token with the `repo` scope to use this endpoint.


```js
github.repos.owner.repo.actions.runners.get({
  "owner": "",
  "repo": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * per_page `integer`: Results per page (max 100)
  * page `integer`: Page number of the results to fetch.

#### Output
* output `object`
  * runners `array`
    * items [runner](#runner)
  * total_count `integer`

### repos.owner.repo.actions.runners.downloads.get
Lists binaries for the runner application that you can download and run. You must authenticate using an access token with the `repo` scope to use this endpoint.


```js
github.repos.owner.repo.actions.runners.downloads.get({
  "owner": "",
  "repo": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`

#### Output
* output `array`
  * items [runner-application](#runner-application)

### repos.owner.repo.actions.runners.registration_token.post
Returns a token that you can pass to the `config` script. The token expires after one hour. You must authenticate
using an access token with the `repo` scope to use this endpoint.

#### Example using registration token
 
Configure your self-hosted runner, replacing `TOKEN` with the registration token provided by this endpoint.

```
./config.sh --url https://github.com/octo-org/octo-repo-artifacts --token TOKEN
```


```js
github.repos.owner.repo.actions.runners.registration_token.post({
  "owner": "",
  "repo": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`

#### Output
* output [authentication-token](#authentication-token)

### repos.owner.repo.actions.runners.remove_token.post
Returns a token that you can pass to remove a self-hosted runner from a repository. The token expires after one hour.
You must authenticate using an access token with the `repo` scope to use this endpoint.

#### Example using remove token
 
To remove your self-hosted runner from a repository, replace TOKEN with the remove token provided by this endpoint.

```
./config.sh remove --token TOKEN
```


```js
github.repos.owner.repo.actions.runners.remove_token.post({
  "owner": "",
  "repo": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`

#### Output
* output [authentication-token](#authentication-token)

### repos.owner.repo.actions.runners.runner_id.delete
Forces the removal of a self-hosted runner from a repository. You can use this endpoint to completely remove the runner when the machine you were using no longer exists. You must authenticate using an access token with the `repo` scope to use this endpoint.


```js
github.repos.owner.repo.actions.runners.runner_id.delete({
  "owner": "",
  "repo": "",
  "runner_id": 0
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * runner_id **required** `integer`: runner_id parameter

#### Output
*Output schema unknown*

### repos.owner.repo.actions.runners.runner_id.get
Gets a specific self-hosted runner. You must authenticate using an access token with the `repo` scope to use this endpoint.


```js
github.repos.owner.repo.actions.runners.runner_id.get({
  "owner": "",
  "repo": "",
  "runner_id": 0
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * runner_id **required** `integer`: runner_id parameter

#### Output
* output [runner](#runner)

### repos.owner.repo.actions.runs.get
Lists all workflow runs for a repository. You can use parameters to narrow the list of results. For more information about using parameters, see [Parameters](https://developer.github.com/v3/#parameters).

Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.


```js
github.repos.owner.repo.actions.runs.get({
  "owner": "",
  "repo": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * actor `string`: Returns someone's workflow runs. Use the login for the user who created the `push` associated with the check suite or workflow run.
  * branch `string`: Returns workflow runs associated with a branch. Use the name of the branch of the `push`.
  * event `string`: Returns workflow run triggered by the event you specify. For example, `push`, `pull_request` or `issue`. For more information, see "[Events that trigger workflows](https://help.github.com/en/actions/automating-your-workflow-with-github-actions/events-that-trigger-workflows)."
  * status `string` (values: completed, status, conclusion): Returns workflow runs associated with the check run `status` or `conclusion` you specify. For example, a conclusion can be `success` or a status can be `completed`. For more information, see the `status` and `conclusion` options available in "[Create a check run](https://developer.github.com/v3/checks/runs/#create-a-check-run)."
  * per_page `integer`: Results per page (max 100)
  * page `integer`: Page number of the results to fetch.

#### Output
* output `object`
  * total_count `integer`
  * workflow_runs `array`
    * items [workflow-run](#workflow-run)

### repos.owner.repo.actions.runs.run_id.delete
Delete a specific workflow run. Anyone with write access to the repository can use this endpoint. If the repository is
private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:write` permission to use
this endpoint.


```js
github.repos.owner.repo.actions.runs.run_id.delete({
  "owner": "",
  "repo": "",
  "run_id": 0
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * run_id **required** `integer`

#### Output
*Output schema unknown*

### repos.owner.repo.actions.runs.run_id.get
Gets a specific workflow run. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.


```js
github.repos.owner.repo.actions.runs.run_id.get({
  "owner": "",
  "repo": "",
  "run_id": 0
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * run_id **required** `integer`

#### Output
* output [workflow-run](#workflow-run)

### repos.owner.repo.actions.runs.run_id.artifacts.get
Lists artifacts for a workflow run. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.


```js
github.repos.owner.repo.actions.runs.run_id.artifacts.get({
  "owner": "",
  "repo": "",
  "run_id": 0
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * run_id **required** `integer`
  * per_page `integer`: Results per page (max 100)
  * page `integer`: Page number of the results to fetch.

#### Output
* output `object`
  * artifacts `array`
    * items [artifact](#artifact)
  * total_count `integer`

### repos.owner.repo.actions.runs.run_id.cancel.post
Cancels a workflow run using its `id`. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `actions:write` permission to use this endpoint.


```js
github.repos.owner.repo.actions.runs.run_id.cancel.post({
  "owner": "",
  "repo": "",
  "run_id": 0
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * run_id **required** `integer`

#### Output
*Output schema unknown*

### repos.owner.repo.actions.runs.run_id.jobs.get
Lists jobs for a workflow run. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint. You can use parameters to narrow the list of results. For more information about using parameters, see [Parameters](https://developer.github.com/v3/#parameters).


```js
github.repos.owner.repo.actions.runs.run_id.jobs.get({
  "owner": "",
  "repo": "",
  "run_id": 0
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * run_id **required** `integer`
  * filter `string` (values: latest, all): Filters jobs by their `completed_at` timestamp. Can be one of:  
  * per_page `integer`: Results per page (max 100)
  * page `integer`: Page number of the results to fetch.

#### Output
* output `object`
  * jobs `array`
    * items [job](#job)
  * total_count `integer`

### repos.owner.repo.actions.runs.run_id.logs.delete
Deletes all logs for a workflow run. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `actions:write` permission to use this endpoint.


```js
github.repos.owner.repo.actions.runs.run_id.logs.delete({
  "owner": "",
  "repo": "",
  "run_id": 0
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * run_id **required** `integer`

#### Output
*Output schema unknown*

### repos.owner.repo.actions.runs.run_id.logs.get
Gets a redirect URL to download an archive of log files for a workflow run. This link expires after 1 minute. Look for
`Location:` in the response header to find the URL for the download. Anyone with read access to the repository can use
this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have
the `actions:read` permission to use this endpoint.


```js
github.repos.owner.repo.actions.runs.run_id.logs.get({
  "owner": "",
  "repo": "",
  "run_id": 0
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * run_id **required** `integer`

#### Output
*Output schema unknown*

### repos.owner.repo.actions.runs.run_id.rerun.post
Re-runs your workflow run using its `id`. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `actions:write` permission to use this endpoint.


```js
github.repos.owner.repo.actions.runs.run_id.rerun.post({
  "owner": "",
  "repo": "",
  "run_id": 0
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * run_id **required** `integer`

#### Output
*Output schema unknown*

### repos.owner.repo.actions.runs.run_id.timing.get
**Warning:** This GitHub Actions usage endpoint is currently in public beta and subject to change. For more information, see "[GitHub Actions API workflow usage](https://developer.github.com/changes/2020-05-15-actions-api-workflow-usage)."

Gets the number of billable minutes and total run time for a specific workflow run. Billable minutes only apply to workflows in private repositories that use GitHub-hosted runners. Usage is listed for each GitHub-hosted runner operating system in milliseconds. Any job re-runs are also included in the usage. The usage does not include the multiplier for macOS and Windows runners and is not rounded up to the nearest whole minute. For more information, see "[Managing billing for GitHub Actions](https://help.github.com/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-actions)".

Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.


```js
github.repos.owner.repo.actions.runs.run_id.timing.get({
  "owner": "",
  "repo": "",
  "run_id": 0
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * run_id **required** `integer`

#### Output
* output [workflow-run-usage](#workflow-run-usage)

### repos.owner.repo.actions.secrets.get
Lists all secrets available in a repository without revealing their encrypted values. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `secrets` repository permission to use this endpoint.


```js
github.repos.owner.repo.actions.secrets.get({
  "owner": "",
  "repo": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * per_page `integer`: Results per page (max 100)
  * page `integer`: Page number of the results to fetch.

#### Output
* output `object`
  * secrets `array`
    * items [actions-secret](#actions-secret)
  * total_count `integer`

### repos.owner.repo.actions.secrets.public_key.get
Gets your public key, which you need to encrypt secrets. You need to encrypt a secret before you can create or update secrets. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `secrets` repository permission to use this endpoint.


```js
github.repos.owner.repo.actions.secrets.public_key.get({
  "owner": "",
  "repo": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`

#### Output
* output [actions-public-key](#actions-public-key)

### repos.owner.repo.actions.secrets.secret_name.delete
Deletes a secret in a repository using the secret name. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `secrets` repository permission to use this endpoint.


```js
github.repos.owner.repo.actions.secrets.secret_name.delete({
  "owner": "",
  "repo": "",
  "secret_name": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * secret_name **required** `string`: secret_name parameter

#### Output
*Output schema unknown*

### repos.owner.repo.actions.secrets.secret_name.get
Gets a single repository secret without revealing its encrypted value. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `secrets` repository permission to use this endpoint.


```js
github.repos.owner.repo.actions.secrets.secret_name.get({
  "owner": "",
  "repo": "",
  "secret_name": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * secret_name **required** `string`: secret_name parameter

#### Output
* output [actions-secret](#actions-secret)

### repos.owner.repo.actions.secrets.secret_name.put
Creates or updates a repository secret with an encrypted value. Encrypt your secret using
[LibSodium](https://libsodium.gitbook.io/doc/bindings_for_other_languages). You must authenticate using an access
token with the `repo` scope to use this endpoint. GitHub Apps must have the `secrets` repository permission to use
this endpoint.

#### Example encrypting a secret using Node.js

Encrypt your secret using the [tweetsodium](https://github.com/github/tweetsodium) library.

```
const sodium = require('tweetsodium');

const key = "base64-encoded-public-key";
const value = "plain-text-secret";

// Convert the message and key to Uint8Array's (Buffer implements that interface)
const messageBytes = Buffer.from(value);
const keyBytes = Buffer.from(key, 'base64');

// Encrypt using LibSodium.
const encryptedBytes = sodium.seal(messageBytes, keyBytes);

// Base64 the encrypted secret
const encrypted = Buffer.from(encryptedBytes).toString('base64');

console.log(encrypted);
```


#### Example encrypting a secret using Python

Encrypt your secret using [pynacl](https://pynacl.readthedocs.io/en/stable/public/#nacl-public-sealedbox) with Python 3.

```
from base64 import b64encode
from nacl import encoding, public

def encrypt(public_key: str, secret_value: str) -> str:
  """Encrypt a Unicode string using the public key."""
  public_key = public.PublicKey(public_key.encode("utf-8"), encoding.Base64Encoder())
  sealed_box = public.SealedBox(public_key)
  encrypted = sealed_box.encrypt(secret_value.encode("utf-8"))
  return b64encode(encrypted).decode("utf-8")
```

#### Example encrypting a secret using C#

Encrypt your secret using the [Sodium.Core](https://www.nuget.org/packages/Sodium.Core/) package.

```
var secretValue = System.Text.Encoding.UTF8.GetBytes("mySecret");
var publicKey = Convert.FromBase64String("2Sg8iYjAxxmI2LvUXpJjkYrMxURPc8r+dB7TJyvvcCU=");

var sealedPublicKeyBox = Sodium.SealedPublicKeyBox.Create(secretValue, publicKey);

Console.WriteLine(Convert.ToBase64String(sealedPublicKeyBox));
```

#### Example encrypting a secret using Ruby

Encrypt your secret using the [rbnacl](https://github.com/RubyCrypto/rbnacl) gem.

```ruby
require "rbnacl"
require "base64"

key = Base64.decode64("+ZYvJDZMHUfBkJdyq5Zm9SKqeuBQ4sj+6sfjlH4CgG0=")
public_key = RbNaCl::PublicKey.new(key)

box = RbNaCl::Boxes::Sealed.from_public_key(public_key)
encrypted_secret = box.encrypt("my_secret")

# Print the base64 encoded secret
puts Base64.strict_encode64(encrypted_secret)
```


```js
github.repos.owner.repo.actions.secrets.secret_name.put({
  "owner": "",
  "repo": "",
  "secret_name": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * secret_name **required** `string`: secret_name parameter
  * body `object`
    * encrypted_value `string`: Value for your secret, encrypted with [LibSodium](https://libsodium.gitbook.io/doc/bindings_for_other_languages) using the public key retrieved from the [Get a repository public key](https://developer.github.com/v3/actions/secrets/#get-a-repository-public-key) endpoint.
    * key_id `string`: ID of the key you used to encrypt the secret.

#### Output
*Output schema unknown*

### repos.owner.repo.actions.workflows.get
Lists the workflows in a repository. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.


```js
github.repos.owner.repo.actions.workflows.get({
  "owner": "",
  "repo": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * per_page `integer`: Results per page (max 100)
  * page `integer`: Page number of the results to fetch.

#### Output
* output `object`
  * total_count `integer`
  * workflows `array`
    * items [workflow](#workflow)

### repos.owner.repo.actions.workflows.workflow_id.get
Gets a specific workflow. You can also replace `:workflow_id` with `:workflow_file_name`. For example, you could use `main.yml`. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.


```js
github.repos.owner.repo.actions.workflows.workflow_id.get({
  "owner": "",
  "repo": "",
  "workflow_id": 0
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * workflow_id **required** `integer`

#### Output
* output [workflow](#workflow)

### repos.owner.repo.actions.workflows.workflow_id.dispatches.post
You can use this endpoint to manually trigger a GitHub Actions workflow run. You can also replace `{workflow_id}` with the workflow file name. For example, you could use `main.yml`.

You must configure your GitHub Actions workflow to run when the [`workflow_dispatch` webhook](/developers/webhooks-and-events/webhook-events-and-payloads#workflow_dispatch) event occurs. The `inputs` are configured in the workflow file. For more information about how to configure the `workflow_dispatch` event in the workflow file, see "[Events that trigger workflows](/actions/reference/events-that-trigger-workflows#workflow_dispatch)."

You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `actions:write` permission to use this endpoint. For more information, see "[Creating a personal access token for the command line](https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line)."


```js
github.repos.owner.repo.actions.workflows.workflow_id.dispatches.post({
  "owner": "",
  "repo": "",
  "workflow_id": 0
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * workflow_id **required** `integer`
  * body `object`
    * inputs `object`: Input keys and values configured in the workflow file. The maximum number of properties is 10. Any default properties configured in the workflow file will be used when `inputs` are omitted.
    * ref **required** `string`: The reference of the workflow run. The reference can be a branch, tag, or a commit SHA.

#### Output
*Output schema unknown*

### repos.owner.repo.actions.workflows.workflow_id.runs.get
List all workflow runs for a workflow. You can also replace `:workflow_id` with `:workflow_file_name`. For example, you could use `main.yml`. You can use parameters to narrow the list of results. For more information about using parameters, see [Parameters](https://developer.github.com/v3/#parameters).

Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope.


```js
github.repos.owner.repo.actions.workflows.workflow_id.runs.get({
  "owner": "",
  "repo": "",
  "workflow_id": 0
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * workflow_id **required** `integer`
  * actor `string`: Returns someone's workflow runs. Use the login for the user who created the `push` associated with the check suite or workflow run.
  * branch `string`: Returns workflow runs associated with a branch. Use the name of the branch of the `push`.
  * event `string`: Returns workflow run triggered by the event you specify. For example, `push`, `pull_request` or `issue`. For more information, see "[Events that trigger workflows](https://help.github.com/en/actions/automating-your-workflow-with-github-actions/events-that-trigger-workflows)."
  * status `string` (values: completed, status, conclusion): Returns workflow runs associated with the check run `status` or `conclusion` you specify. For example, a conclusion can be `success` or a status can be `completed`. For more information, see the `status` and `conclusion` options available in "[Create a check run](https://developer.github.com/v3/checks/runs/#create-a-check-run)."
  * per_page `integer`: Results per page (max 100)
  * page `integer`: Page number of the results to fetch.

#### Output
* output `object`
  * total_count `integer`
  * workflow_runs `array`
    * items [workflow-run](#workflow-run)

### repos.owner.repo.actions.workflows.workflow_id.timing.get
**Warning:** This GitHub Actions usage endpoint is currently in public beta and subject to change. For more information, see "[GitHub Actions API workflow usage](https://developer.github.com/changes/2020-05-15-actions-api-workflow-usage)."

Gets the number of billable minutes used by a specific workflow during the current billing cycle. Billable minutes only apply to workflows in private repositories that use GitHub-hosted runners. Usage is listed for each GitHub-hosted runner operating system in milliseconds. Any job re-runs are also included in the usage. The usage does not include the multiplier for macOS and Windows runners and is not rounded up to the nearest whole minute. For more information, see "[Managing billing for GitHub Actions](https://help.github.com/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-actions)".

You can also replace `:workflow_id` with `:workflow_file_name`. For example, you could use `main.yml`. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.


```js
github.repos.owner.repo.actions.workflows.workflow_id.timing.get({
  "owner": "",
  "repo": "",
  "workflow_id": 0
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * workflow_id **required** `integer`

#### Output
* output [workflow-usage](#workflow-usage)

### repos.owner.repo.assignees.get
Lists the [available assignees](https://help.github.com/articles/assigning-issues-and-pull-requests-to-other-github-users/) for issues in a repository.


```js
github.repos.owner.repo.assignees.get({
  "owner": "",
  "repo": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * per_page `integer`: Results per page (max 100)
  * page `integer`: Page number of the results to fetch.

#### Output
* output `array`
  * items [simple-user](#simple-user)

### repos.owner.repo.assignees.assignee.get
Checks if a user has permission to be assigned to an issue in this repository.

If the `assignee` can be assigned to issues in the repository, a `204` header with no content is returned.

Otherwise a `404` status code is returned.


```js
github.repos.owner.repo.assignees.assignee.get({
  "owner": "",
  "repo": "",
  "assignee": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * assignee **required** `string`: assignee parameter

#### Output
*Output schema unknown*

### repos.owner.repo.automated_security_fixes.delete
Disables automated security fixes for a repository. The authenticated user must have admin access to the repository. For more information, see "[Configuring automated security fixes](https://help.github.com/en/articles/configuring-automated-security-fixes)".


```js
github.repos.owner.repo.automated_security_fixes.delete({
  "owner": "",
  "repo": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`

#### Output
*Output schema unknown*

### repos.owner.repo.automated_security_fixes.put
Enables automated security fixes for a repository. The authenticated user must have admin access to the repository. For more information, see "[Configuring automated security fixes](https://help.github.com/en/articles/configuring-automated-security-fixes)".


```js
github.repos.owner.repo.automated_security_fixes.put({
  "owner": "",
  "repo": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`

#### Output
*Output schema unknown*

### repos.owner.repo.branches.get
List branches


```js
github.repos.owner.repo.branches.get({
  "owner": "",
  "repo": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * protected `boolean`: Setting to `true` returns only protected branches. When set to `false`, only unprotected branches are returned. Omitting this parameter returns all branches.
  * per_page `integer`: Results per page (max 100)
  * page `integer`: Page number of the results to fetch.

#### Output
* output `array`
  * items [short-branch](#short-branch)

### repos.owner.repo.branches.branch.get
Get a branch


```js
github.repos.owner.repo.branches.branch.get({
  "owner": "",
  "repo": "",
  "branch": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * branch **required** `string`: branch+ parameter

#### Output
* output [branch-with-protection](#branch-with-protection)

### repos.owner.repo.branches.branch.protection.delete
Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.


```js
github.repos.owner.repo.branches.branch.protection.delete({
  "owner": "",
  "repo": "",
  "branch": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * branch **required** `string`: branch+ parameter

#### Output
*Output schema unknown*

### repos.owner.repo.branches.branch.protection.get
Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.


```js
github.repos.owner.repo.branches.branch.protection.get({
  "owner": "",
  "repo": "",
  "branch": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * branch **required** `string`: branch+ parameter

#### Output
* output [branch-protection](#branch-protection)

### repos.owner.repo.branches.branch.protection.put
Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

Protecting a branch requires admin or owner permissions to the repository.

**Note**: Passing new arrays of `users` and `teams` replaces their previous values.

**Note**: The list of users, apps, and teams in total is limited to 100 items.


```js
github.repos.owner.repo.branches.branch.protection.put({
  "owner": "",
  "repo": "",
  "branch": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * branch **required** `string`: branch+ parameter
  * body `object`
    * allow_deletions `boolean`: Allows deletion of the protected branch by anyone with write access to the repository. Set to `false` to prevent deletion of the protected branch. Default: `false`. For more information, see "[Enabling force pushes to a protected branch](https://help.github.com/en/github/administering-a-repository/enabling-force-pushes-to-a-protected-branch)" in the GitHub Help documentation.
    * allow_force_pushes `boolean`: Permits force pushes to the protected branch by anyone with write access to the repository. Set to `true` to allow force pushes. Set to `false` or `null` to block force pushes. Default: `false`. For more information, see "[Enabling force pushes to a protected branch](https://help.github.com/en/github/administering-a-repository/enabling-force-pushes-to-a-protected-branch)" in the GitHub Help documentation."
    * enforce_admins **required** `boolean`: Enforce all configured restrictions for administrators. Set to `true` to enforce required status checks for repository administrators. Set to `null` to disable.
    * required_linear_history `boolean`: Enforces a linear commit Git history, which prevents anyone from pushing merge commits to a branch. Set to `true` to enforce a linear commit history. Set to `false` to disable a linear commit Git history. Your repository must allow squash merging or rebase merging before you can enable a linear commit history. Default: `false`. For more information, see "[Requiring a linear commit history](https://help.github.com/github/administering-a-repository/requiring-a-linear-commit-history)" in the GitHub Help documentation.
    * required_pull_request_reviews **required** `object`: Require at least one approving review on a pull request, before merging. Set to `null` to disable.
      * dismiss_stale_reviews `boolean`: Set to `true` if you want to automatically dismiss approving reviews when someone pushes a new commit.
      * dismissal_restrictions `object`: Specify which users and teams can dismiss pull request reviews. Pass an empty `dismissal_restrictions` object to disable. User and team `dismissal_restrictions` are only available for organization-owned repositories. Omit this parameter for personal repositories.
        * teams `array`: The list of team `slug`s with dismissal access
          * items `string`
        * users `array`: The list of user `login`s with dismissal access
          * items `string`
      * require_code_owner_reviews `boolean`: Blocks merging pull requests until [code owners](https://help.github.com/articles/about-code-owners/) review them.
      * required_approving_review_count `integer`: Specify the number of reviewers required to approve pull requests. Use a number between 1 and 6.
    * required_status_checks **required** `object`: Require status checks to pass before merging. Set to `null` to disable.
      * contexts **required** `array`: The list of status checks to require in order to merge into this branch
        * items `string`
      * strict **required** `boolean`: Require branches to be up to date before merging.
    * restrictions **required** `object`: Restrict who can push to the protected branch. User, app, and team `restrictions` are only available for organization-owned repositories. Set to `null` to disable.
      * apps `array`: The list of app `slug`s with push access
        * items `string`
      * teams **required** `array`: The list of team `slug`s with push access
        * items `string`
      * users **required** `array`: The list of user `login`s with push access
        * items `string`

#### Output
* output [protected-branch](#protected-branch)

### repos.owner.repo.branches.branch.protection.enforce_admins.delete
Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

Removing admin enforcement requires admin or owner permissions to the repository and branch protection to be enabled.


```js
github.repos.owner.repo.branches.branch.protection.enforce_admins.delete({
  "owner": "",
  "repo": "",
  "branch": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * branch **required** `string`: branch+ parameter

#### Output
*Output schema unknown*

### repos.owner.repo.branches.branch.protection.enforce_admins.get
Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.


```js
github.repos.owner.repo.branches.branch.protection.enforce_admins.get({
  "owner": "",
  "repo": "",
  "branch": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * branch **required** `string`: branch+ parameter

#### Output
* output [protected-branch-admin-enforced](#protected-branch-admin-enforced)

### repos.owner.repo.branches.branch.protection.enforce_admins.post
Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

Adding admin enforcement requires admin or owner permissions to the repository and branch protection to be enabled.


```js
github.repos.owner.repo.branches.branch.protection.enforce_admins.post({
  "owner": "",
  "repo": "",
  "branch": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * branch **required** `string`: branch+ parameter

#### Output
* output [protected-branch-admin-enforced](#protected-branch-admin-enforced)

### repos.owner.repo.branches.branch.protection.required_pull_request_reviews.delete
Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.


```js
github.repos.owner.repo.branches.branch.protection.required_pull_request_reviews.delete({
  "owner": "",
  "repo": "",
  "branch": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * branch **required** `string`: branch+ parameter

#### Output
*Output schema unknown*

### repos.owner.repo.branches.branch.protection.required_pull_request_reviews.get
Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.


```js
github.repos.owner.repo.branches.branch.protection.required_pull_request_reviews.get({
  "owner": "",
  "repo": "",
  "branch": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * branch **required** `string`: branch+ parameter

#### Output
* output [protected-branch-pull-request-review](#protected-branch-pull-request-review)

### repos.owner.repo.branches.branch.protection.required_pull_request_reviews.patch
Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

Updating pull request review enforcement requires admin or owner permissions to the repository and branch protection to be enabled.

**Note**: Passing new arrays of `users` and `teams` replaces their previous values.


```js
github.repos.owner.repo.branches.branch.protection.required_pull_request_reviews.patch({
  "owner": "",
  "repo": "",
  "branch": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * branch **required** `string`: branch+ parameter
  * body `object`
    * dismiss_stale_reviews `boolean`: Set to `true` if you want to automatically dismiss approving reviews when someone pushes a new commit.
    * dismissal_restrictions `object`: Specify which users and teams can dismiss pull request reviews. Pass an empty `dismissal_restrictions` object to disable. User and team `dismissal_restrictions` are only available for organization-owned repositories. Omit this parameter for personal repositories.
      * teams `array`: The list of team `slug`s with dismissal access
        * items `string`
      * users `array`: The list of user `login`s with dismissal access
        * items `string`
    * require_code_owner_reviews `boolean`: Blocks merging pull requests until [code owners](https://help.github.com/articles/about-code-owners/) have reviewed.
    * required_approving_review_count `integer`: Specifies the number of reviewers required to approve pull requests. Use a number between 1 and 6.

#### Output
* output [protected-branch-pull-request-review](#protected-branch-pull-request-review)

### repos.owner.repo.branches.branch.protection.required_signatures.delete
Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

When authenticated with admin or owner permissions to the repository, you can use this endpoint to disable required signed commits on a branch. You must enable branch protection to require signed commits.


```js
github.repos.owner.repo.branches.branch.protection.required_signatures.delete({
  "owner": "",
  "repo": "",
  "branch": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * branch **required** `string`: branch+ parameter

#### Output
*Output schema unknown*

### repos.owner.repo.branches.branch.protection.required_signatures.get
Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

When authenticated with admin or owner permissions to the repository, you can use this endpoint to check whether a branch requires signed commits. An enabled status of `true` indicates you must sign commits on this branch. For more information, see [Signing commits with GPG](https://help.github.com/articles/signing-commits-with-gpg) in GitHub Help.

**Note**: You must enable branch protection to require signed commits.


```js
github.repos.owner.repo.branches.branch.protection.required_signatures.get({
  "owner": "",
  "repo": "",
  "branch": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * branch **required** `string`: branch+ parameter

#### Output
* output [protected-branch-admin-enforced](#protected-branch-admin-enforced)

### repos.owner.repo.branches.branch.protection.required_signatures.post
Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

When authenticated with admin or owner permissions to the repository, you can use this endpoint to require signed commits on a branch. You must enable branch protection to require signed commits.


```js
github.repos.owner.repo.branches.branch.protection.required_signatures.post({
  "owner": "",
  "repo": "",
  "branch": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * branch **required** `string`: branch+ parameter

#### Output
* output [protected-branch-admin-enforced](#protected-branch-admin-enforced)

### repos.owner.repo.branches.branch.protection.required_status_checks.delete
Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.


```js
github.repos.owner.repo.branches.branch.protection.required_status_checks.delete({
  "owner": "",
  "repo": "",
  "branch": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * branch **required** `string`: branch+ parameter

#### Output
*Output schema unknown*

### repos.owner.repo.branches.branch.protection.required_status_checks.get
Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.


```js
github.repos.owner.repo.branches.branch.protection.required_status_checks.get({
  "owner": "",
  "repo": "",
  "branch": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * branch **required** `string`: branch+ parameter

#### Output
* output [status-check-policy](#status-check-policy)

### repos.owner.repo.branches.branch.protection.required_status_checks.patch
Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

Updating required status checks requires admin or owner permissions to the repository and branch protection to be enabled.


```js
github.repos.owner.repo.branches.branch.protection.required_status_checks.patch({
  "owner": "",
  "repo": "",
  "branch": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * branch **required** `string`: branch+ parameter
  * body `object`
    * contexts `array`: The list of status checks to require in order to merge into this branch
      * items `string`
    * strict `boolean`: Require branches to be up to date before merging.

#### Output
* output [status-check-policy](#status-check-policy)

### repos.owner.repo.branches.branch.protection.required_status_checks.contexts.delete
Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.


```js
github.repos.owner.repo.branches.branch.protection.required_status_checks.contexts.delete({
  "owner": "",
  "repo": "",
  "branch": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * branch **required** `string`: branch+ parameter
  * body `array`: contexts parameter
    * items `string`

#### Output
* output `array`
  * items `string`

### repos.owner.repo.branches.branch.protection.required_status_checks.contexts.get
Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.


```js
github.repos.owner.repo.branches.branch.protection.required_status_checks.contexts.get({
  "owner": "",
  "repo": "",
  "branch": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * branch **required** `string`: branch+ parameter

#### Output
* output `array`
  * items `string`

### repos.owner.repo.branches.branch.protection.required_status_checks.contexts.post
Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.


```js
github.repos.owner.repo.branches.branch.protection.required_status_checks.contexts.post({
  "owner": "",
  "repo": "",
  "branch": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * branch **required** `string`: branch+ parameter
  * body `array`: contexts parameter
    * items `string`

#### Output
* output `array`
  * items `string`

### repos.owner.repo.branches.branch.protection.required_status_checks.contexts.put
Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.


```js
github.repos.owner.repo.branches.branch.protection.required_status_checks.contexts.put({
  "owner": "",
  "repo": "",
  "branch": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * branch **required** `string`: branch+ parameter
  * body `array`: contexts parameter
    * items `string`

#### Output
* output `array`
  * items `string`

### repos.owner.repo.branches.branch.protection.restrictions.delete
Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

Disables the ability to restrict who can push to this branch.


```js
github.repos.owner.repo.branches.branch.protection.restrictions.delete({
  "owner": "",
  "repo": "",
  "branch": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * branch **required** `string`: branch+ parameter

#### Output
*Output schema unknown*

### repos.owner.repo.branches.branch.protection.restrictions.get
Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

Lists who has access to this protected branch.

**Note**: Users, apps, and teams `restrictions` are only available for organization-owned repositories.


```js
github.repos.owner.repo.branches.branch.protection.restrictions.get({
  "owner": "",
  "repo": "",
  "branch": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * branch **required** `string`: branch+ parameter

#### Output
* output [branch-restriction-policy](#branch-restriction-policy)

### repos.owner.repo.branches.branch.protection.restrictions.apps.delete
Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

Removes the ability of an app to push to this branch. Only installed GitHub Apps with `write` access to the `contents` permission can be added as authorized actors on a protected branch.

| Type    | Description                                                                                                                                                |
| ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `array` | The GitHub Apps that have push access to this branch. Use the app's `slug`. **Note**: The list of users, apps, and teams in total is limited to 100 items. |


```js
github.repos.owner.repo.branches.branch.protection.restrictions.apps.delete({
  "owner": "",
  "repo": "",
  "branch": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * branch **required** `string`: branch+ parameter
  * body `array`: apps parameter
    * items `string`

#### Output
* output `array`
  * items [integration](#integration)

### repos.owner.repo.branches.branch.protection.restrictions.apps.get
Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

Lists the GitHub Apps that have push access to this branch. Only installed GitHub Apps with `write` access to the `contents` permission can be added as authorized actors on a protected branch.


```js
github.repos.owner.repo.branches.branch.protection.restrictions.apps.get({
  "owner": "",
  "repo": "",
  "branch": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * branch **required** `string`: branch+ parameter

#### Output
* output `array`
  * items [integration](#integration)

### repos.owner.repo.branches.branch.protection.restrictions.apps.post
Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

Grants the specified apps push access for this branch. Only installed GitHub Apps with `write` access to the `contents` permission can be added as authorized actors on a protected branch.

| Type    | Description                                                                                                                                                |
| ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `array` | The GitHub Apps that have push access to this branch. Use the app's `slug`. **Note**: The list of users, apps, and teams in total is limited to 100 items. |


```js
github.repos.owner.repo.branches.branch.protection.restrictions.apps.post({
  "owner": "",
  "repo": "",
  "branch": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * branch **required** `string`: branch+ parameter
  * body `array`: apps parameter
    * items `string`

#### Output
* output `array`
  * items [integration](#integration)

### repos.owner.repo.branches.branch.protection.restrictions.apps.put
Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

Replaces the list of apps that have push access to this branch. This removes all apps that previously had push access and grants push access to the new list of apps. Only installed GitHub Apps with `write` access to the `contents` permission can be added as authorized actors on a protected branch.

| Type    | Description                                                                                                                                                |
| ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `array` | The GitHub Apps that have push access to this branch. Use the app's `slug`. **Note**: The list of users, apps, and teams in total is limited to 100 items. |


```js
github.repos.owner.repo.branches.branch.protection.restrictions.apps.put({
  "owner": "",
  "repo": "",
  "branch": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * branch **required** `string`: branch+ parameter
  * body `array`: apps parameter
    * items `string`

#### Output
* output `array`
  * items [integration](#integration)

### repos.owner.repo.branches.branch.protection.restrictions.teams.delete
Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

Removes the ability of a team to push to this branch. You can also remove push access for child teams.

| Type    | Description                                                                                                                                         |
| ------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| `array` | Teams that should no longer have push access. Use the team's `slug`. **Note**: The list of users, apps, and teams in total is limited to 100 items. |


```js
github.repos.owner.repo.branches.branch.protection.restrictions.teams.delete({
  "owner": "",
  "repo": "",
  "branch": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * branch **required** `string`: branch+ parameter
  * body `array`: teams parameter
    * items `string`

#### Output
* output `array`
  * items [team](#team)

### repos.owner.repo.branches.branch.protection.restrictions.teams.get
Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

Lists the teams who have push access to this branch. The list includes child teams.


```js
github.repos.owner.repo.branches.branch.protection.restrictions.teams.get({
  "owner": "",
  "repo": "",
  "branch": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * branch **required** `string`: branch+ parameter

#### Output
* output `array`
  * items [team](#team)

### repos.owner.repo.branches.branch.protection.restrictions.teams.post
Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

Grants the specified teams push access for this branch. You can also give push access to child teams.

| Type    | Description                                                                                                                                |
| ------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `array` | The teams that can have push access. Use the team's `slug`. **Note**: The list of users, apps, and teams in total is limited to 100 items. |


```js
github.repos.owner.repo.branches.branch.protection.restrictions.teams.post({
  "owner": "",
  "repo": "",
  "branch": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * branch **required** `string`: branch+ parameter
  * body `array`: teams parameter
    * items `string`

#### Output
* output `array`
  * items [team](#team)

### repos.owner.repo.branches.branch.protection.restrictions.teams.put
Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

Replaces the list of teams that have push access to this branch. This removes all teams that previously had push access and grants push access to the new list of teams. Team restrictions include child teams.

| Type    | Description                                                                                                                                |
| ------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `array` | The teams that can have push access. Use the team's `slug`. **Note**: The list of users, apps, and teams in total is limited to 100 items. |


```js
github.repos.owner.repo.branches.branch.protection.restrictions.teams.put({
  "owner": "",
  "repo": "",
  "branch": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * branch **required** `string`: branch+ parameter
  * body `array`: teams parameter
    * items `string`

#### Output
* output `array`
  * items [team](#team)

### repos.owner.repo.branches.branch.protection.restrictions.users.delete
Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

Removes the ability of a user to push to this branch.

| Type    | Description                                                                                                                                   |
| ------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `array` | Usernames of the people who should no longer have push access. **Note**: The list of users, apps, and teams in total is limited to 100 items. |


```js
github.repos.owner.repo.branches.branch.protection.restrictions.users.delete({
  "owner": "",
  "repo": "",
  "branch": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * branch **required** `string`: branch+ parameter
  * body `array`: users parameter
    * items `string`

#### Output
* output `array`
  * items [simple-user](#simple-user)

### repos.owner.repo.branches.branch.protection.restrictions.users.get
Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

Lists the people who have push access to this branch.


```js
github.repos.owner.repo.branches.branch.protection.restrictions.users.get({
  "owner": "",
  "repo": "",
  "branch": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * branch **required** `string`: branch+ parameter

#### Output
* output `array`
  * items [simple-user](#simple-user)

### repos.owner.repo.branches.branch.protection.restrictions.users.post
Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

Grants the specified people push access for this branch.

| Type    | Description                                                                                                                   |
| ------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `array` | Usernames for people who can have push access. **Note**: The list of users, apps, and teams in total is limited to 100 items. |


```js
github.repos.owner.repo.branches.branch.protection.restrictions.users.post({
  "owner": "",
  "repo": "",
  "branch": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * branch **required** `string`: branch+ parameter
  * body `array`: users parameter
    * items `string`

#### Output
* output `array`
  * items [simple-user](#simple-user)

### repos.owner.repo.branches.branch.protection.restrictions.users.put
Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

Replaces the list of people that have push access to this branch. This removes all people that previously had push access and grants push access to the new list of people.

| Type    | Description                                                                                                                   |
| ------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `array` | Usernames for people who can have push access. **Note**: The list of users, apps, and teams in total is limited to 100 items. |


```js
github.repos.owner.repo.branches.branch.protection.restrictions.users.put({
  "owner": "",
  "repo": "",
  "branch": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * branch **required** `string`: branch+ parameter
  * body `array`: users parameter
    * items `string`

#### Output
* output `array`
  * items [simple-user](#simple-user)

### repos.owner.repo.check_runs.post
**Note:** The Checks API only looks for pushes in the repository where the check suite or check run were created. Pushes to a branch in a forked repository are not detected and return an empty `pull_requests` array.

Creates a new check run for a specific commit in a repository. Your GitHub App must have the `checks:write` permission to create check runs.


```js
github.repos.owner.repo.check_runs.post({
  "owner": "",
  "repo": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * body `object`
    * actions `array`: Displays a button on GitHub that can be clicked to alert your app to do additional tasks. For example, a code linting app can display a button that automatically fixes detected errors. The button created in this object is displayed after the check run completes. When a user clicks the button, GitHub sends the [`check_run.requested_action` webhook](https://developer.github.com/webhooks/event-payloads/#check_run) to your app. Each action includes a `label`, `identifier` and `description`. A maximum of three actions are accepted. See the [`actions` object](https://developer.github.com/v3/checks/runs/#actions-object) description. To learn more about check runs and requested actions, see "[Check runs and requested actions](https://developer.github.com/v3/checks/runs/#check-runs-and-requested-actions)." To learn more about check runs and requested actions, see "[Check runs and requested actions](https://developer.github.com/v3/checks/runs/#check-runs-and-requested-actions)."
      * items `object`
        * description **required** `string`: A short explanation of what this action would do. The maximum size is 40 characters.
        * identifier **required** `string`: A reference for the action on the integrator's system. The maximum size is 20 characters.
        * label **required** `string`: The text to be displayed on a button in the web UI. The maximum size is 20 characters.
    * completed_at `string`: The time the check completed. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
    * conclusion `string` (values: success, failure, neutral, cancelled, skipped, timed_out, action_required): **Required if you provide `completed_at` or a `status` of `completed`**. The final conclusion of the check. Can be one of `success`, `failure`, `neutral`, `cancelled`, `skipped`, `timed_out`, or `action_required`. When the conclusion is `action_required`, additional details should be provided on the site specified by `details_url`.  
    * details_url `string`: The URL of the integrator's site that has the full details of the check. If the integrator does not provide this, then the homepage of the GitHub app is used.
    * external_id `string`: A reference for the run on the integrator's system.
    * head_sha **required** `string`: The SHA of the commit.
    * name **required** `string`: The name of the check. For example, "code-coverage".
    * output `object`: Check runs can accept a variety of data in the `output` object, including a `title` and `summary` and can optionally provide descriptive details about the run. See the [`output` object](https://developer.github.com/v3/checks/runs/#output-object) description.
      * annotations `array`: Adds information from your analysis to specific lines of code. Annotations are visible on GitHub in the **Checks** and **Files changed** tab of the pull request. The Checks API limits the number of annotations to a maximum of 50 per API request. To create more than 50 annotations, you have to make multiple requests to the [Update a check run](https://developer.github.com/v3/checks/runs/#update-a-check-run) endpoint. Each time you update the check run, annotations are appended to the list of annotations that already exist for the check run. For details about how you can view annotations on GitHub, see "[About status checks](https://help.github.com/articles/about-status-checks#checks)". See the [`annotations` object](https://developer.github.com/v3/checks/runs/#annotations-object) description for details about how to use this parameter.
        * items `object`
          * annotation_level **required** `string` (values: notice, warning, failure): The level of the annotation. Can be one of `notice`, `warning`, or `failure`.
          * end_column `integer`: The end column of the annotation. Annotations only support `start_column` and `end_column` on the same line. Omit this parameter if `start_line` and `end_line` have different values.
          * end_line **required** `integer`: The end line of the annotation.
          * message **required** `string`: A short description of the feedback for these lines of code. The maximum size is 64 KB.
          * path **required** `string`: The path of the file to add an annotation to. For example, `assets/css/main.css`.
          * raw_details `string`: Details about this annotation. The maximum size is 64 KB.
          * start_column `integer`: The start column of the annotation. Annotations only support `start_column` and `end_column` on the same line. Omit this parameter if `start_line` and `end_line` have different values.
          * start_line **required** `integer`: The start line of the annotation.
          * title `string`: The title that represents the annotation. The maximum size is 255 characters.
      * images `array`: Adds images to the output displayed in the GitHub pull request UI. See the [`images` object](https://developer.github.com/v3/checks/runs/#images-object) description for details.
        * items `object`
          * alt **required** `string`: The alternative text for the image.
          * caption `string`: A short image description.
          * image_url **required** `string`: The full URL of the image.
      * summary **required** `string`: The summary of the check run. This parameter supports Markdown.
      * text `string`: The details of the check run. This parameter supports Markdown.
      * title **required** `string`: The title of the check run.
    * started_at `string`: The time that the check run began. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
    * status `string` (values: queued, in_progress, completed): The current status. Can be one of `queued`, `in_progress`, or `completed`.

#### Output
* output [check-run](#check-run)

### repos.owner.repo.check_runs.check_run_id.get
**Note:** The Checks API only looks for pushes in the repository where the check suite or check run were created. Pushes to a branch in a forked repository are not detected and return an empty `pull_requests` array.

Gets a single check run using its `id`. GitHub Apps must have the `checks:read` permission on a private repository or pull access to a public repository to get check runs. OAuth Apps and authenticated users must have the `repo` scope to get check runs in a private repository.


```js
github.repos.owner.repo.check_runs.check_run_id.get({
  "owner": "",
  "repo": "",
  "check_run_id": 0
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * check_run_id **required** `integer`: check_run_id parameter

#### Output
* output [check-run](#check-run)

### repos.owner.repo.check_runs.check_run_id.patch
**Note:** The Checks API only looks for pushes in the repository where the check suite or check run were created. Pushes to a branch in a forked repository are not detected and return an empty `pull_requests` array.

Updates a check run for a specific commit in a repository. Your GitHub App must have the `checks:write` permission to edit check runs.


```js
github.repos.owner.repo.check_runs.check_run_id.patch({
  "owner": "",
  "repo": "",
  "check_run_id": 0
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * check_run_id **required** `integer`: check_run_id parameter
  * body `object`
    * actions `array`: Possible further actions the integrator can perform, which a user may trigger. Each action includes a `label`, `identifier` and `description`. A maximum of three actions are accepted. See the [`actions` object](https://developer.github.com/v3/checks/runs/#actions-object) description. To learn more about check runs and requested actions, see "[Check runs and requested actions](https://developer.github.com/v3/checks/runs/#check-runs-and-requested-actions)."
      * items `object`
        * description **required** `string`: A short explanation of what this action would do. The maximum size is 40 characters.
        * identifier **required** `string`: A reference for the action on the integrator's system. The maximum size is 20 characters.
        * label **required** `string`: The text to be displayed on a button in the web UI. The maximum size is 20 characters.
    * completed_at `string`: The time the check completed. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
    * conclusion `string` (values: success, failure, neutral, cancelled, skipped, timed_out, action_required): **Required if you provide `completed_at` or a `status` of `completed`**. The final conclusion of the check. Can be one of `success`, `failure`, `neutral`, `cancelled`, `skipped`, `timed_out`, or `action_required`.  
    * details_url `string`: The URL of the integrator's site that has the full details of the check.
    * external_id `string`: A reference for the run on the integrator's system.
    * name `string`: The name of the check. For example, "code-coverage".
    * output `object`: Check runs can accept a variety of data in the `output` object, including a `title` and `summary` and can optionally provide descriptive details about the run. See the [`output` object](https://developer.github.com/v3/checks/runs/#output-object-1) description.
      * annotations `array`: Adds information from your analysis to specific lines of code. Annotations are visible in GitHub's pull request UI. Annotations are visible in GitHub's pull request UI. The Checks API limits the number of annotations to a maximum of 50 per API request. To create more than 50 annotations, you have to make multiple requests to the [Update a check run](https://developer.github.com/v3/checks/runs/#update-a-check-run) endpoint. Each time you update the check run, annotations are appended to the list of annotations that already exist for the check run. For details about annotations in the UI, see "[About status checks](https://help.github.com/articles/about-status-checks#checks)". See the [`annotations` object](https://developer.github.com/v3/checks/runs/#annotations-object-1) description for details.
        * items `object`
          * annotation_level **required** `string` (values: notice, warning, failure): The level of the annotation. Can be one of `notice`, `warning`, or `failure`.
          * end_column `integer`: The end column of the annotation. Annotations only support `start_column` and `end_column` on the same line. Omit this parameter if `start_line` and `end_line` have different values.
          * end_line **required** `integer`: The end line of the annotation.
          * message **required** `string`: A short description of the feedback for these lines of code. The maximum size is 64 KB.
          * path **required** `string`: The path of the file to add an annotation to. For example, `assets/css/main.css`.
          * raw_details `string`: Details about this annotation. The maximum size is 64 KB.
          * start_column `integer`: The start column of the annotation. Annotations only support `start_column` and `end_column` on the same line. Omit this parameter if `start_line` and `end_line` have different values.
          * start_line **required** `integer`: The start line of the annotation.
          * title `string`: The title that represents the annotation. The maximum size is 255 characters.
      * images `array`: Adds images to the output displayed in the GitHub pull request UI. See the [`images` object](https://developer.github.com/v3/checks/runs/#annotations-object-1) description for details.
        * items `object`
          * alt **required** `string`: The alternative text for the image.
          * caption `string`: A short image description.
          * image_url **required** `string`: The full URL of the image.
      * summary **required** `string`: Can contain Markdown.
      * text `string`: Can contain Markdown.
      * title `string`: **Required**.
    * started_at `string`: This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
    * status `string` (values: queued, in_progress, completed): The current status. Can be one of `queued`, `in_progress`, or `completed`.

#### Output
* output [check-run](#check-run)

### repos.owner.repo.check_runs.check_run_id.annotations.get
Lists annotations for a check run using the annotation `id`. GitHub Apps must have the `checks:read` permission on a private repository or pull access to a public repository to get annotations for a check run. OAuth Apps and authenticated users must have the `repo` scope to get annotations for a check run in a private repository.


```js
github.repos.owner.repo.check_runs.check_run_id.annotations.get({
  "owner": "",
  "repo": "",
  "check_run_id": 0
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * check_run_id **required** `integer`: check_run_id parameter
  * per_page `integer`: Results per page (max 100)
  * page `integer`: Page number of the results to fetch.

#### Output
* output `array`
  * items [check-annotation](#check-annotation)

### repos.owner.repo.check_suites.post
**Note:** The Checks API only looks for pushes in the repository where the check suite or check run were created. Pushes to a branch in a forked repository are not detected and return an empty `pull_requests` array and a `null` value for `head_branch`.

By default, check suites are automatically created when you create a [check run](https://developer.github.com/v3/checks/runs/). You only need to use this endpoint for manually creating check suites when you've disabled automatic creation using "[Update repository preferences for check suites](https://developer.github.com/v3/checks/suites/#update-repository-preferences-for-check-suites)". Your GitHub App must have the `checks:write` permission to create check suites.


```js
github.repos.owner.repo.check_suites.post({
  "owner": "",
  "repo": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * body `object`
    * head_sha **required** `string`: The sha of the head commit.

#### Output
* output [check-suite](#check-suite)

### repos.owner.repo.check_suites.preferences.patch
Changes the default automatic flow when creating check suites. By default, a check suite is automatically created each time code is pushed to a repository. When you disable the automatic creation of check suites, you can manually [Create a check suite](https://developer.github.com/v3/checks/suites/#create-a-check-suite). You must have admin permissions in the repository to set preferences for check suites.


```js
github.repos.owner.repo.check_suites.preferences.patch({
  "owner": "",
  "repo": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * body `object`
    * auto_trigger_checks `array`: Enables or disables automatic creation of CheckSuite events upon pushes to the repository. Enabled by default. See the [`auto_trigger_checks` object](https://developer.github.com/v3/checks/suites/#auto_trigger_checks-object) description for details.
      * items `object`
        * app_id **required** `integer`: The `id` of the GitHub App.
        * setting **required** `boolean`: Set to `true` to enable automatic creation of CheckSuite events upon pushes to the repository, or `false` to disable them.

#### Output
* output [check-suite-preference](#check-suite-preference)

### repos.owner.repo.check_suites.check_suite_id.get
**Note:** The Checks API only looks for pushes in the repository where the check suite or check run were created. Pushes to a branch in a forked repository are not detected and return an empty `pull_requests` array and a `null` value for `head_branch`.

Gets a single check suite using its `id`. GitHub Apps must have the `checks:read` permission on a private repository or pull access to a public repository to get check suites. OAuth Apps and authenticated users must have the `repo` scope to get check suites in a private repository.


```js
github.repos.owner.repo.check_suites.check_suite_id.get({
  "owner": "",
  "repo": "",
  "check_suite_id": 0
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * check_suite_id **required** `integer`: check_suite_id parameter

#### Output
* output [check-suite](#check-suite)

### repos.owner.repo.check_suites.check_suite_id.check_runs.get
**Note:** The Checks API only looks for pushes in the repository where the check suite or check run were created. Pushes to a branch in a forked repository are not detected and return an empty `pull_requests` array.

Lists check runs for a check suite using its `id`. GitHub Apps must have the `checks:read` permission on a private repository or pull access to a public repository to get check runs. OAuth Apps and authenticated users must have the `repo` scope to get check runs in a private repository.


```js
github.repos.owner.repo.check_suites.check_suite_id.check_runs.get({
  "owner": "",
  "repo": "",
  "check_suite_id": 0
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * check_suite_id **required** `integer`: check_suite_id parameter
  * check_name `string`: Returns check runs with the specified `name`.
  * status `string` (values: queued, in_progress, completed): Returns check runs with the specified `status`. Can be one of `queued`, `in_progress`, or `completed`.
  * filter `string` (values: latest, all): Filters check runs by their `completed_at` timestamp. Can be one of `latest` (returning the most recent check runs) or `all`.
  * per_page `integer`: Results per page (max 100)
  * page `integer`: Page number of the results to fetch.

#### Output
* output `object`
  * check_runs `array`
    * items [check-run](#check-run)
  * total_count `integer`

### repos.owner.repo.check_suites.check_suite_id.rerequest.post
Triggers GitHub to rerequest an existing check suite, without pushing new code to a repository. This endpoint will trigger the [`check_suite` webhook](https://developer.github.com/webhooks/event-payloads/#check_suite) event with the action `rerequested`. When a check suite is `rerequested`, its `status` is reset to `queued` and the `conclusion` is cleared.

To rerequest a check suite, your GitHub App must have the `checks:read` permission on a private repository or pull access to a public repository.


```js
github.repos.owner.repo.check_suites.check_suite_id.rerequest.post({
  "owner": "",
  "repo": "",
  "check_suite_id": 0
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * check_suite_id **required** `integer`: check_suite_id parameter

#### Output
*Output schema unknown*

### repos.owner.repo.code_scanning.alerts.get
Lists all open code scanning alerts for the default branch (usually `master`) and protected branches in a repository. You must use an access token with the `security_events` scope to use this endpoint. GitHub Apps must have the `security_events` read permission to use this endpoint.


```js
github.repos.owner.repo.code_scanning.alerts.get({
  "owner": "",
  "repo": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * state `string`: Set to `closed` to list only closed code scanning alerts.
  * ref `string`: Returns a list of code scanning alerts for a specific brach reference. The `ref` must be formatted as `heads/<branch name>`.

#### Output
* output `array`
  * items [code-scanning-alert](#code-scanning-alert)

### repos.owner.repo.code_scanning.alerts.alert_id.get
Gets a single code scanning alert. You must use an access token with the `security_events` scope to use this endpoint. GitHub Apps must have the `security_events` read permission to use this endpoint.

The security `alert_id` is found at the end of the security alert's URL. For example, the security alert ID for `https://github.com/Octo-org/octo-repo/security/code-scanning/88` is `88`.


```js
github.repos.owner.repo.code_scanning.alerts.alert_id.get({
  "owner": "",
  "repo": "",
  "alert_id": 0
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * alert_id **required** `integer`: alert_id parameter

#### Output
* output [code-scanning-alert](#code-scanning-alert)

### repos.owner.repo.collaborators.get
For organization-owned repositories, the list of collaborators includes outside collaborators, organization members that are direct collaborators, organization members with access through team memberships, organization members with access through default organization permissions, and organization owners.

Team members will include the members of child teams.


```js
github.repos.owner.repo.collaborators.get({
  "owner": "",
  "repo": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * affiliation `string` (values: outside, direct, all): Filter collaborators returned by their affiliation. Can be one of:  
  * per_page `integer`: Results per page (max 100)
  * page `integer`: Page number of the results to fetch.

#### Output
* output `array`
  * items [collaborator](#collaborator)

### repos.owner.repo.collaborators.username.delete
Remove a repository collaborator


```js
github.repos.owner.repo.collaborators.username.delete({
  "owner": "",
  "repo": "",
  "username": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * username **required** `string`

#### Output
*Output schema unknown*

### repos.owner.repo.collaborators.username.get
For organization-owned repositories, the list of collaborators includes outside collaborators, organization members that are direct collaborators, organization members with access through team memberships, organization members with access through default organization permissions, and organization owners.

Team members will include the members of child teams.


```js
github.repos.owner.repo.collaborators.username.get({
  "owner": "",
  "repo": "",
  "username": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * username **required** `string`

#### Output
*Output schema unknown*

### repos.owner.repo.collaborators.username.put
This endpoint triggers [notifications](https://help.github.com/articles/about-notifications/). Creating content too quickly using this endpoint may result in abuse rate limiting. See "[Abuse rate limits](https://developer.github.com/v3/#abuse-rate-limits)" and "[Dealing with abuse rate limits](https://developer.github.com/v3/guides/best-practices-for-integrators/#dealing-with-abuse-rate-limits)" for details.

For more information the permission levels, see "[Repository permission levels for an organization](https://help.github.com/en/github/setting-up-and-managing-organizations-and-teams/repository-permission-levels-for-an-organization#permission-levels-for-repositories-owned-by-an-organization)".

Note that, if you choose not to pass any parameters, you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP verbs](https://developer.github.com/v3/#http-verbs)."

The invitee will receive a notification that they have been invited to the repository, which they must accept or decline. They may do this via the notifications page, the email they receive, or by using the [repository invitations API endpoints](https://developer.github.com/v3/repos/invitations/).

**Rate limits**

To prevent abuse, you are limited to sending 50 invitations to a repository per 24 hour period. Note there is no limit if you are inviting organization members to an organization repository.


```js
github.repos.owner.repo.collaborators.username.put({
  "owner": "",
  "repo": "",
  "username": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * username **required** `string`
  * body `object`
    * permission `string` (values: pull, push, admin, maintain, triage): The permission to grant the collaborator. **Only valid on organization-owned repositories.** Can be one of:  
    * permissions `string`

#### Output
* output [repository-invitation](#repository-invitation)

### repos.owner.repo.collaborators.username.permission.get
Checks the repository permission of a collaborator. The possible repository permissions are `admin`, `write`, `read`, and `none`.


```js
github.repos.owner.repo.collaborators.username.permission.get({
  "owner": "",
  "repo": "",
  "username": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * username **required** `string`

#### Output
* output [repository-collaborator-permission](#repository-collaborator-permission)

### repos.owner.repo.comments.get
Commit Comments use [these custom media types](https://developer.github.com/v3/repos/comments/#custom-media-types). You can read more about the use of media types in the API [here](https://developer.github.com/v3/media/).

Comments are ordered by ascending ID.


```js
github.repos.owner.repo.comments.get({
  "owner": "",
  "repo": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * per_page `integer`: Results per page (max 100)
  * page `integer`: Page number of the results to fetch.

#### Output
* output `array`
  * items [commit-comment](#commit-comment)

### repos.owner.repo.comments.comment_id.delete
Delete a commit comment


```js
github.repos.owner.repo.comments.comment_id.delete({
  "owner": "",
  "repo": "",
  "comment_id": 0
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * comment_id **required** `integer`: comment_id parameter

#### Output
*Output schema unknown*

### repos.owner.repo.comments.comment_id.get
Get a commit comment


```js
github.repos.owner.repo.comments.comment_id.get({
  "owner": "",
  "repo": "",
  "comment_id": 0
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * comment_id **required** `integer`: comment_id parameter

#### Output
* output [commit-comment](#commit-comment)

### repos.owner.repo.comments.comment_id.patch
Update a commit comment


```js
github.repos.owner.repo.comments.comment_id.patch({
  "owner": "",
  "repo": "",
  "comment_id": 0
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * comment_id **required** `integer`: comment_id parameter
  * body `object`
    * body **required** `string`: The contents of the comment

#### Output
* output [commit-comment](#commit-comment)

### repos.owner.repo.comments.comment_id.reactions.get
List the reactions to a [commit comment](https://developer.github.com/v3/repos/comments/).


```js
github.repos.owner.repo.comments.comment_id.reactions.get({
  "owner": "",
  "repo": "",
  "comment_id": 0
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * comment_id **required** `integer`: comment_id parameter
  * content `string` (values: +1, -1, laugh, confused, heart, hooray, rocket, eyes): Returns a single [reaction type](https://developer.github.com/v3/reactions/#reaction-types). Omit this parameter to list all reactions to a commit comment.
  * per_page `integer`: Results per page (max 100)
  * page `integer`: Page number of the results to fetch.

#### Output
* output `array`
  * items [reaction](#reaction)

### repos.owner.repo.comments.comment_id.reactions.post
Create a reaction to a [commit comment](https://developer.github.com/v3/repos/comments/). A response with a `Status: 200 OK` means that you already added the reaction type to this commit comment.


```js
github.repos.owner.repo.comments.comment_id.reactions.post({
  "owner": "",
  "repo": "",
  "comment_id": 0
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * comment_id **required** `integer`: comment_id parameter
  * body `object`
    * content **required** `string` (values: +1, -1, laugh, confused, heart, hooray, rocket, eyes): The [reaction type](https://developer.github.com/v3/reactions/#reaction-types) to add to the commit comment.

#### Output
* output [reaction](#reaction)

### repos.owner.repo.comments.comment_id.reactions.reaction_id.delete
**Note:** You can also specify a repository by `repository_id` using the route `DELETE /repositories/:repository_id/comments/:comment_id/reactions/:reaction_id`.

Delete a reaction to a [commit comment](https://developer.github.com/v3/repos/comments/).


```js
github.repos.owner.repo.comments.comment_id.reactions.reaction_id.delete({
  "owner": "",
  "repo": "",
  "comment_id": 0,
  "reaction_id": 0
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * comment_id **required** `integer`: comment_id parameter
  * reaction_id **required** `integer`

#### Output
*Output schema unknown*

### repos.owner.repo.commits.get
**Signature verification object**

The response will include a `verification` object that describes the result of verifying the commit's signature. The following fields are included in the `verification` object:

These are the possible values for `reason` in the `verification` object:

| Value                    | Description                                                                                                                       |
| ------------------------ | --------------------------------------------------------------------------------------------------------------------------------- |
| `expired_key`            | The key that made the signature is expired.                                                                                       |
| `not_signing_key`        | The "signing" flag is not among the usage flags in the GPG key that made the signature.                                           |
| `gpgverify_error`        | There was an error communicating with the signature verification service.                                                         |
| `gpgverify_unavailable`  | The signature verification service is currently unavailable.                                                                      |
| `unsigned`               | The object does not include a signature.                                                                                          |
| `unknown_signature_type` | A non-PGP signature was found in the commit.                                                                                      |
| `no_user`                | No user was associated with the `committer` email address in the commit.                                                          |
| `unverified_email`       | The `committer` email address in the commit was associated with a user, but the email address is not verified on her/his account. |
| `bad_email`              | The `committer` email address in the commit is not included in the identities of the PGP key that made the signature.             |
| `unknown_key`            | The key that made the signature has not been registered with any user's account.                                                  |
| `malformed_signature`    | There was an error parsing the signature.                                                                                         |
| `invalid`                | The signature could not be cryptographically verified using the key whose key-id was found in the signature.                      |
| `valid`                  | None of the above errors applied, so the signature is considered to be verified.                                                  |


```js
github.repos.owner.repo.commits.get({
  "owner": "",
  "repo": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * sha `string`: SHA or branch to start listing commits from. Default: the repository’s default branch (usually `master`).
  * path `string`: Only commits containing this file path will be returned.
  * author `string`: GitHub login or email address by which to filter by commit author.
  * since `string`: Only show notifications updated after the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
  * until `string`: Only commits before this date will be returned. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
  * per_page `integer`: Results per page (max 100)
  * page `integer`: Page number of the results to fetch.

#### Output
* output `array`
  * items [simple-commit](#simple-commit)

### repos.owner.repo.commits.commit_sha.branches_where_head.get
Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

Returns all branches where the given commit SHA is the HEAD, or latest commit for the branch.


```js
github.repos.owner.repo.commits.commit_sha.branches_where_head.get({
  "owner": "",
  "repo": "",
  "commit_sha": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * commit_sha **required** `string`: commit_sha+ parameter

#### Output
* output `array`
  * items [branch-short](#branch-short)

### repos.owner.repo.commits.commit_sha.comments.get
Use the `:commit_sha` to specify the commit that will have its comments listed.


```js
github.repos.owner.repo.commits.commit_sha.comments.get({
  "owner": "",
  "repo": "",
  "commit_sha": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * commit_sha **required** `string`: commit_sha+ parameter
  * per_page `integer`: Results per page (max 100)
  * page `integer`: Page number of the results to fetch.

#### Output
* output `array`
  * items [commit-comment](#commit-comment)

### repos.owner.repo.commits.commit_sha.comments.post
Create a comment for a commit using its `:commit_sha`.

This endpoint triggers [notifications](https://help.github.com/articles/about-notifications/). Creating content too quickly using this endpoint may result in abuse rate limiting. See "[Abuse rate limits](https://developer.github.com/v3/#abuse-rate-limits)" and "[Dealing with abuse rate limits](https://developer.github.com/v3/guides/best-practices-for-integrators/#dealing-with-abuse-rate-limits)" for details.


```js
github.repos.owner.repo.commits.commit_sha.comments.post({
  "owner": "",
  "repo": "",
  "commit_sha": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * commit_sha **required** `string`: commit_sha+ parameter
  * body `object`
    * body **required** `string`: The contents of the comment.
    * line `integer`: **Deprecated**. Use **position** parameter instead. Line number in the file to comment on.
    * path `string`: Relative path of the file to comment on.
    * position `integer`: Line index in the diff to comment on.

#### Output
* output [commit-comment](#commit-comment)

### repos.owner.repo.commits.commit_sha.pulls.get
Lists all pull requests containing the provided commit SHA, which can be from any point in the commit history. The results will include open and closed pull requests. Additional preview headers may be required to see certain details for associated pull requests, such as whether a pull request is in a draft state. For more information about previews that might affect this endpoint, see the [List pull requests](https://developer.github.com/v3/pulls/#list-pull-requests) endpoint.


```js
github.repos.owner.repo.commits.commit_sha.pulls.get({
  "owner": "",
  "repo": "",
  "commit_sha": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * commit_sha **required** `string`: commit_sha+ parameter
  * per_page `integer`: Results per page (max 100)
  * page `integer`: Page number of the results to fetch.

#### Output
* output `array`
  * items [pull-request-simple](#pull-request-simple)

### repos.owner.repo.commits.ref.get
Returns the contents of a single commit reference. You must have `read` access for the repository to use this endpoint.

You can pass the appropriate [media type](https://developer.github.com/v3/media/#commits-commit-comparison-and-pull-requests) to fetch `diff` and `patch` formats. Diffs with binary data will have no `patch` property.

To return only the SHA-1 hash of the commit reference, you can provide the `sha` custom [media type](https://developer.github.com/v3/media/#commits-commit-comparison-and-pull-requests) in the `Accept` header. You can use this endpoint to check if a remote reference's SHA-1 hash is the same as your local reference's SHA-1 hash by providing the local SHA-1 reference as the ETag.

**Signature verification object**

The response will include a `verification` object that describes the result of verifying the commit's signature. The following fields are included in the `verification` object:

These are the possible values for `reason` in the `verification` object:

| Value                    | Description                                                                                                                       |
| ------------------------ | --------------------------------------------------------------------------------------------------------------------------------- |
| `expired_key`            | The key that made the signature is expired.                                                                                       |
| `not_signing_key`        | The "signing" flag is not among the usage flags in the GPG key that made the signature.                                           |
| `gpgverify_error`        | There was an error communicating with the signature verification service.                                                         |
| `gpgverify_unavailable`  | The signature verification service is currently unavailable.                                                                      |
| `unsigned`               | The object does not include a signature.                                                                                          |
| `unknown_signature_type` | A non-PGP signature was found in the commit.                                                                                      |
| `no_user`                | No user was associated with the `committer` email address in the commit.                                                          |
| `unverified_email`       | The `committer` email address in the commit was associated with a user, but the email address is not verified on her/his account. |
| `bad_email`              | The `committer` email address in the commit is not included in the identities of the PGP key that made the signature.             |
| `unknown_key`            | The key that made the signature has not been registered with any user's account.                                                  |
| `malformed_signature`    | There was an error parsing the signature.                                                                                         |
| `invalid`                | The signature could not be cryptographically verified using the key whose key-id was found in the signature.                      |
| `valid`                  | None of the above errors applied, so the signature is considered to be verified.                                                  |


```js
github.repos.owner.repo.commits.ref.get({
  "owner": "",
  "repo": "",
  "ref": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * ref **required** `string`: ref+ parameter

#### Output
* output [commit](#commit)

### repos.owner.repo.commits.ref.check_runs.get
**Note:** The Checks API only looks for pushes in the repository where the check suite or check run were created. Pushes to a branch in a forked repository are not detected and return an empty `pull_requests` array.

Lists check runs for a commit ref. The `ref` can be a SHA, branch name, or a tag name. GitHub Apps must have the `checks:read` permission on a private repository or pull access to a public repository to get check runs. OAuth Apps and authenticated users must have the `repo` scope to get check runs in a private repository.


```js
github.repos.owner.repo.commits.ref.check_runs.get({
  "owner": "",
  "repo": "",
  "ref": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * ref **required** `string`: ref+ parameter
  * check_name `string`: Returns check runs with the specified `name`.
  * status `string` (values: queued, in_progress, completed): Returns check runs with the specified `status`. Can be one of `queued`, `in_progress`, or `completed`.
  * filter `string` (values: latest, all): Filters check runs by their `completed_at` timestamp. Can be one of `latest` (returning the most recent check runs) or `all`.
  * per_page `integer`: Results per page (max 100)
  * page `integer`: Page number of the results to fetch.

#### Output
* output `object`
  * check_runs `array`
    * items [check-run](#check-run)
  * total_count `integer`

### repos.owner.repo.commits.ref.check_suites.get
**Note:** The Checks API only looks for pushes in the repository where the check suite or check run were created. Pushes to a branch in a forked repository are not detected and return an empty `pull_requests` array and a `null` value for `head_branch`.

Lists check suites for a commit `ref`. The `ref` can be a SHA, branch name, or a tag name. GitHub Apps must have the `checks:read` permission on a private repository or pull access to a public repository to list check suites. OAuth Apps and authenticated users must have the `repo` scope to get check suites in a private repository.


```js
github.repos.owner.repo.commits.ref.check_suites.get({
  "owner": "",
  "repo": "",
  "ref": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * ref **required** `string`: ref+ parameter
  * app_id `integer`: Filters check suites by GitHub App `id`.
  * check_name `string`: Returns check runs with the specified `name`.
  * per_page `integer`: Results per page (max 100)
  * page `integer`: Page number of the results to fetch.

#### Output
* output `object`
  * check_suites `array`
    * items [check-suite](#check-suite)
  * total_count `integer`

### repos.owner.repo.commits.ref.status.get
Users with pull access in a repository can access a combined view of commit statuses for a given ref. The ref can be a SHA, a branch name, or a tag name.

The most recent status for each context is returned, up to 100. This field [paginates](https://developer.github.com/v3/#pagination) if there are over 100 contexts.

Additionally, a combined `state` is returned. The `state` is one of:

*   **failure** if any of the contexts report as `error` or `failure`
*   **pending** if there are no statuses or a context is `pending`
*   **success** if the latest status for all contexts is `success`


```js
github.repos.owner.repo.commits.ref.status.get({
  "owner": "",
  "repo": "",
  "ref": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * ref **required** `string`: ref+ parameter

#### Output
* output [combined-commit-status](#combined-commit-status)

### repos.owner.repo.commits.ref.statuses.get
Users with pull access in a repository can view commit statuses for a given ref. The ref can be a SHA, a branch name, or a tag name. Statuses are returned in reverse chronological order. The first status in the list will be the latest one.

This resource is also available via a legacy route: `GET /repos/:owner/:repo/statuses/:ref`.


```js
github.repos.owner.repo.commits.ref.statuses.get({
  "owner": "",
  "repo": "",
  "ref": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * ref **required** `string`: ref+ parameter
  * per_page `integer`: Results per page (max 100)
  * page `integer`: Page number of the results to fetch.

#### Output
* output `array`
  * items [status](#status)

### repos.owner.repo.community.code_of_conduct.get
This method returns the contents of the repository's code of conduct file, if one is detected.


```js
github.repos.owner.repo.community.code_of_conduct.get({
  "owner": "",
  "repo": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`

#### Output
* output [code-of-conduct](#code-of-conduct)

### repos.owner.repo.community.profile.get
This endpoint will return all community profile metrics, including an overall health score, repository description, the presence of documentation, detected code of conduct, detected license, and the presence of ISSUE\_TEMPLATE, PULL\_REQUEST\_TEMPLATE, README, and CONTRIBUTING files.


```js
github.repos.owner.repo.community.profile.get({
  "owner": "",
  "repo": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`

#### Output
* output [community-profile](#community-profile)

### repos.owner.repo.compare.base...head.get
Both `:base` and `:head` must be branch names in `:repo`. To compare branches across other repositories in the same network as `:repo`, use the format `<USERNAME>:branch`.

The response from the API is equivalent to running the `git log base..head` command; however, commits are returned in chronological order. Pass the appropriate [media type](https://developer.github.com/v3/media/#commits-commit-comparison-and-pull-requests) to fetch diff and patch formats.

The response also includes details on the files that were changed between the two commits. This includes the status of the change (for example, if a file was added, removed, modified, or renamed), and details of the change itself. For example, files with a `renamed` status have a `previous_filename` field showing the previous filename of the file, and files with a `modified` status have a `patch` field showing the changes made to the file.

**Working with large comparisons**

The response will include a comparison of up to 250 commits. If you are working with a larger commit range, you can use the [List commits](https://developer.github.com/v3/repos/commits/#list-commits) to enumerate all commits in the range.

For comparisons with extremely large diffs, you may receive an error response indicating that the diff took too long to generate. You can typically resolve this error by using a smaller commit range.

**Signature verification object**

The response will include a `verification` object that describes the result of verifying the commit's signature. The following fields are included in the `verification` object:

These are the possible values for `reason` in the `verification` object:

| Value                    | Description                                                                                                                       |
| ------------------------ | --------------------------------------------------------------------------------------------------------------------------------- |
| `expired_key`            | The key that made the signature is expired.                                                                                       |
| `not_signing_key`        | The "signing" flag is not among the usage flags in the GPG key that made the signature.                                           |
| `gpgverify_error`        | There was an error communicating with the signature verification service.                                                         |
| `gpgverify_unavailable`  | The signature verification service is currently unavailable.                                                                      |
| `unsigned`               | The object does not include a signature.                                                                                          |
| `unknown_signature_type` | A non-PGP signature was found in the commit.                                                                                      |
| `no_user`                | No user was associated with the `committer` email address in the commit.                                                          |
| `unverified_email`       | The `committer` email address in the commit was associated with a user, but the email address is not verified on her/his account. |
| `bad_email`              | The `committer` email address in the commit is not included in the identities of the PGP key that made the signature.             |
| `unknown_key`            | The key that made the signature has not been registered with any user's account.                                                  |
| `malformed_signature`    | There was an error parsing the signature.                                                                                         |
| `invalid`                | The signature could not be cryptographically verified using the key whose key-id was found in the signature.                      |
| `valid`                  | None of the above errors applied, so the signature is considered to be verified.                                                  |


```js
github.repos.owner.repo.compare.base...head.get({
  "owner": "",
  "repo": "",
  "base": "",
  "head": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * base **required** `string`: base parameter
  * head **required** `string`: head parameter

#### Output
* output [commit-comparison](#commit-comparison)

### repos.owner.repo.contents.path.delete
Deletes a file in a repository.

You can provide an additional `committer` parameter, which is an object containing information about the committer. Or, you can provide an `author` parameter, which is an object containing information about the author.

The `author` section is optional and is filled in with the `committer` information if omitted. If the `committer` information is omitted, the authenticated user's information is used.

You must provide values for both `name` and `email`, whether you choose to use `author` or `committer`. Otherwise, you'll receive a `422` status code.


```js
github.repos.owner.repo.contents.path.delete({
  "owner": "",
  "repo": "",
  "path": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * path **required** `string`: path+ parameter
  * body `object`
    * author `object`: object containing information about the author.
      * email `string`: The email of the author (or committer) of the commit
      * name `string`: The name of the author (or committer) of the commit
    * branch `string`: The branch name. Default: the repository’s default branch (usually `master`)
    * committer `object`: object containing information about the committer.
      * email `string`: The email of the author (or committer) of the commit
      * name `string`: The name of the author (or committer) of the commit
    * message **required** `string`: The commit message.
    * sha **required** `string`: The blob SHA of the file being replaced.

#### Output
* output [file-commit](#file-commit)

### repos.owner.repo.contents.path.get
Gets the contents of a file or directory in a repository. Specify the file path or directory in `:path`. If you omit
`:path`, you will receive the contents of all files in the repository.

Files and symlinks support [a custom media type](https://developer.github.com/v3/repos/contents/#custom-media-types) for
retrieving the raw content or rendered HTML (when supported). All content types support [a custom media
type](https://developer.github.com/v3/repos/contents/#custom-media-types) to ensure the content is returned in a consistent
object format.

**Note**:
*   To get a repository's contents recursively, you can [recursively get the tree](https://developer.github.com/v3/git/trees/).
*   This API has an upper limit of 1,000 files for a directory. If you need to retrieve more files, use the [Git Trees
API](https://developer.github.com/v3/git/trees/#get-a-tree).
*   This API supports files up to 1 megabyte in size.

#### If the content is a directory
The response will be an array of objects, one object for each item in the directory.
When listing the contents of a directory, submodules have their "type" specified as "file". Logically, the value
_should_ be "submodule". This behavior exists in API v3 [for backwards compatibility purposes](https://git.io/v1YCW).
In the next major version of the API, the type will be returned as "submodule".

#### If the content is a symlink 
If the requested `:path` points to a symlink, and the symlink's target is a normal file in the repository, then the
API responds with the content of the file (in the format shown in the example. Otherwise, the API responds with an object 
describing the symlink itself.

#### If the content is a submodule
The `submodule_git_url` identifies the location of the submodule repository, and the `sha` identifies a specific
commit within the submodule repository. Git uses the given URL when cloning the submodule repository, and checks out
the submodule at that specific commit.

If the submodule repository is not hosted on github.com, the Git URLs (`git_url` and `_links["git"]`) and the
github.com URLs (`html_url` and `_links["html"]`) will have null values.


```js
github.repos.owner.repo.contents.path.get({
  "owner": "",
  "repo": "",
  "path": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * path **required** `string`: path+ parameter
  * ref `string`: The name of the commit/branch/tag. Default: the repository’s default branch (usually `master`)

#### Output
*Output schema unknown*

### repos.owner.repo.contents.path.put
Creates a new file or replaces an existing file in a repository.


```js
github.repos.owner.repo.contents.path.put({
  "owner": "",
  "repo": "",
  "path": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * path **required** `string`: path+ parameter
  * body `object`
    * author `object`: The author of the file. Default: The `committer` or the authenticated user if you omit `committer`.
      * date `string`
      * email **required** `string`: The email of the author or committer of the commit. You'll receive a `422` status code if `email` is omitted.
      * name **required** `string`: The name of the author or committer of the commit. You'll receive a `422` status code if `name` is omitted.
    * branch `string`: The branch name. Default: the repository’s default branch (usually `master`)
    * committer `object`: The person that committed the file. Default: the authenticated user.
      * date `string`
      * email **required** `string`: The email of the author or committer of the commit. You'll receive a `422` status code if `email` is omitted.
      * name **required** `string`: The name of the author or committer of the commit. You'll receive a `422` status code if `name` is omitted.
    * content **required** `string`: The new file content, using Base64 encoding.
    * message **required** `string`: The commit message.
    * sha `string`: **Required if you are updating a file**. The blob SHA of the file being replaced.

#### Output
* output [file-commit](#file-commit)

### repos.owner.repo.contributors.get
Lists contributors to the specified repository and sorts them by the number of commits per contributor in descending order. This endpoint may return information that is a few hours old because the GitHub REST API v3 caches contributor data to improve performance.

GitHub identifies contributors by author email address. This endpoint groups contribution counts by GitHub user, which includes all associated email addresses. To improve performance, only the first 500 author email addresses in the repository link to GitHub users. The rest will appear as anonymous contributors without associated GitHub user information.


```js
github.repos.owner.repo.contributors.get({
  "owner": "",
  "repo": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * anon `string`: Set to `1` or `true` to include anonymous contributors in results.
  * per_page `integer`: Results per page (max 100)
  * page `integer`: Page number of the results to fetch.

#### Output
* output `array`
  * items [contributor](#contributor)

### repos.owner.repo.deployments.get
Simple filtering of deployments is available via query parameters:


```js
github.repos.owner.repo.deployments.get({
  "owner": "",
  "repo": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * sha `string`: The SHA recorded at creation time.
  * ref `string`: The name of the ref. This can be a branch, tag, or SHA.
  * task `string`: The name of the task for the deployment (e.g., `deploy` or `deploy:migrations`).
  * environment `string`: The name of the environment that was deployed to (e.g., `staging` or `production`).
  * per_page `integer`: Results per page (max 100)
  * page `integer`: Page number of the results to fetch.

#### Output
* output `array`
  * items [deployment](#deployment)

### repos.owner.repo.deployments.post
Deployments offer a few configurable parameters with certain defaults.

The `ref` parameter can be any named branch, tag, or SHA. At GitHub we often deploy branches and verify them
before we merge a pull request.

The `environment` parameter allows deployments to be issued to different runtime environments. Teams often have
multiple environments for verifying their applications, such as `production`, `staging`, and `qa`. This parameter
makes it easier to track which environments have requested deployments. The default environment is `production`.

The `auto_merge` parameter is used to ensure that the requested ref is not behind the repository's default branch. If
the ref _is_ behind the default branch for the repository, we will attempt to merge it for you. If the merge succeeds,
the API will return a successful merge commit. If merge conflicts prevent the merge from succeeding, the API will
return a failure response.

By default, [commit statuses](https://developer.github.com/v3/repos/statuses) for every submitted context must be in a `success`
state. The `required_contexts` parameter allows you to specify a subset of contexts that must be `success`, or to
specify contexts that have not yet been submitted. You are not required to use commit statuses to deploy. If you do
not require any contexts or create any commit statuses, the deployment will always succeed.

The `payload` parameter is available for any extra information that a deployment system might need. It is a JSON text
field that will be passed on when a deployment event is dispatched.

The `task` parameter is used by the deployment system to allow different execution paths. In the web world this might
be `deploy:migrations` to run schema changes on the system. In the compiled world this could be a flag to compile an
application with debugging enabled.

Users with `repo` or `repo_deployment` scopes can create a deployment for a given ref.

#### Merged branch response
You will see this response when GitHub automatically merges the base branch into the topic branch instead of creating
a deployment. This auto-merge happens when:
*   Auto-merge option is enabled in the repository
*   Topic branch does not include the latest changes on the base branch, which is `master` in the response example
*   There are no merge conflicts

If there are no new commits in the base branch, a new request to create a deployment should give a successful
response.

#### Merge conflict response
This error happens when the `auto_merge` option is enabled and when the default branch (in this case `master`), can't
be merged into the branch that's being deployed (in this case `topic-branch`), due to merge conflicts.

#### Failed commit status checks
This error happens when the `required_contexts` parameter indicates that one or more contexts need to have a `success`
status for the commit to be deployed, but one or more of the required contexts do not have a state of `success`.


```js
github.repos.owner.repo.deployments.post({
  "owner": "",
  "repo": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * body `object`
    * auto_merge `boolean`: Attempts to automatically merge the default branch into the requested ref, if it's behind the default branch.
    * created_at `string`
    * description `string`: Short description of the deployment.
    * environment `string`: Name for the target deployment environment (e.g., `production`, `staging`, `qa`).
    * payload `string`: JSON payload with extra information about the deployment.
    * production_environment `boolean`: Specifies if the given environment is one that end-users directly interact with. Default: `true` when `environment` is `production` and `false` otherwise.  
    * ref **required** `string`: The ref to deploy. This can be a branch, tag, or SHA.
    * required_contexts `array`: The [status](https://developer.github.com/v3/repos/statuses/) contexts to verify against commit status checks. If you omit this parameter, GitHub verifies all unique contexts before creating a deployment. To bypass checking entirely, pass an empty array. Defaults to all unique contexts.
      * items `string`
    * task `string`: Specifies a task to execute (e.g., `deploy` or `deploy:migrations`).
    * transient_environment `boolean`: Specifies if the given environment is specific to the deployment and will no longer exist at some point in the future. Default: `false`  

#### Output
* output [deployment](#deployment)

### repos.owner.repo.deployments.deployment_id.delete
To ensure there can always be an active deployment, you can only delete an _inactive_ deployment. Anyone with `repo` or `repo_deployment` scopes can delete an inactive deployment.

To set a deployment as inactive, you must:

*   Create a new deployment that is active so that the system has a record of the current state, then delete the previously active deployment.
*   Mark the active deployment as inactive by adding any non-successful deployment status.

For more information, see "[Create a deployment](https://developer.github.com/v3/repos/deployments/#create-a-deployment)" and "[Create a deployment status](https://developer.github.com/v3/repos/deployments/#create-a-deployment-status)."


```js
github.repos.owner.repo.deployments.deployment_id.delete({
  "owner": "",
  "repo": "",
  "deployment_id": 0
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * deployment_id **required** `integer`: deployment_id parameter

#### Output
*Output schema unknown*

### repos.owner.repo.deployments.deployment_id.get
Get a deployment


```js
github.repos.owner.repo.deployments.deployment_id.get({
  "owner": "",
  "repo": "",
  "deployment_id": 0
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * deployment_id **required** `integer`: deployment_id parameter

#### Output
* output [deployment](#deployment)

### repos.owner.repo.deployments.deployment_id.statuses.get
Users with pull access can view deployment statuses for a deployment:


```js
github.repos.owner.repo.deployments.deployment_id.statuses.get({
  "owner": "",
  "repo": "",
  "deployment_id": 0
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * deployment_id **required** `integer`: deployment_id parameter
  * per_page `integer`: Results per page (max 100)
  * page `integer`: Page number of the results to fetch.

#### Output
* output `array`
  * items [deployment-status](#deployment-status)

### repos.owner.repo.deployments.deployment_id.statuses.post
Users with `push` access can create deployment statuses for a given deployment.

GitHub Apps require `read & write` access to "Deployments" and `read-only` access to "Repo contents" (for private repos). OAuth Apps require the `repo_deployment` scope.


```js
github.repos.owner.repo.deployments.deployment_id.statuses.post({
  "owner": "",
  "repo": "",
  "deployment_id": 0
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * deployment_id **required** `integer`: deployment_id parameter
  * body `object`
    * auto_inactive `boolean`: Adds a new `inactive` status to all prior non-transient, non-production environment deployments with the same repository and `environment` name as the created status's deployment. An `inactive` status is only added to deployments that had a `success` state. Default: `true`  
    * description `string`: A short description of the status. The maximum description length is 140 characters.
    * environment `string` (values: production, staging, qa): Name for the target deployment environment, which can be changed when setting a deploy status. For example, `production`, `staging`, or `qa`. **Note:** This parameter requires you to use the [`application/vnd.github.flash-preview+json`](https://developer.github.com/v3/previews/#deployment-statuses) custom media type.
    * environment_url `string`: Sets the URL for accessing your environment. Default: `""`  
    * log_url `string`: The full URL of the deployment's output. This parameter replaces `target_url`. We will continue to accept `target_url` to support legacy uses, but we recommend replacing `target_url` with `log_url`. Setting `log_url` will automatically set `target_url` to the same value. Default: `""`  
    * state **required** `string` (values: error, failure, inactive, in_progress, queued, pending, success): The state of the status. Can be one of `error`, `failure`, `inactive`, `in_progress`, `queued` `pending`, or `success`. **Note:** To use the `inactive` state, you must provide the [`application/vnd.github.ant-man-preview+json`](https://developer.github.com/v3/previews/#enhanced-deployments) custom media type. To use the `in_progress` and `queued` states, you must provide the [`application/vnd.github.flash-preview+json`](https://developer.github.com/v3/previews/#deployment-statuses) custom media type. When you set a transient deployment to `inactive`, the deployment will be shown as `destroyed` in GitHub.
    * target_url `string`: The target URL to associate with this status. This URL should contain output to keep the user updated while the task is running or serve as historical information for what happened in the deployment. **Note:** It's recommended to use the `log_url` parameter, which replaces `target_url`.

#### Output
* output [deployment-status](#deployment-status)

### repos.owner.repo.deployments.deployment_id.statuses.status_id.get
Users with pull access can view a deployment status for a deployment:


```js
github.repos.owner.repo.deployments.deployment_id.statuses.status_id.get({
  "owner": "",
  "repo": "",
  "deployment_id": 0,
  "status_id": 0
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * deployment_id **required** `integer`: deployment_id parameter
  * status_id **required** `integer`: status_id parameter

#### Output
* output [deployment-status](#deployment-status)

### repos.owner.repo.dispatches.post
You can use this endpoint to trigger a webhook event called `repository_dispatch` when you want activity that happens outside of GitHub to trigger a GitHub Actions workflow or GitHub App webhook. You must configure your GitHub Actions workflow or GitHub App to run when the `repository_dispatch` event occurs. For an example `repository_dispatch` webhook payload, see "[RepositoryDispatchEvent](https://developer.github.com/webhooks/event-payloads/#repository_dispatch)."

The `client_payload` parameter is available for any extra information that your workflow might need. This parameter is a JSON payload that will be passed on when the webhook event is dispatched. For example, the `client_payload` can include a message that a user would like to send using a GitHub Actions workflow. Or the `client_payload` can be used as a test to debug your workflow. For a test example, see the [input example](https://developer.github.com/v3/repos/#example-4).

To give you write access to the repository, you must use a personal access token with the `repo` scope. For more information, see "[Creating a personal access token for the command line](https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line)" in the GitHub Help documentation.

This input example shows how you can use the `client_payload` as a test to debug your workflow.


```js
github.repos.owner.repo.dispatches.post({
  "owner": "",
  "repo": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * body `object`
    * client_payload `object`: JSON payload with extra information about the webhook event that your action or worklow may use.
    * event_type `string`: **Required:** A custom webhook event name.

#### Output
*Output schema unknown*

### repos.owner.repo.events.get
List repository events


```js
github.repos.owner.repo.events.get({
  "owner": "",
  "repo": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * per_page `integer`: Results per page (max 100)
  * page `integer`: Page number of the results to fetch.

#### Output
* output `array`
  * items [event](#event)

### repos.owner.repo.forks.get
List forks


```js
github.repos.owner.repo.forks.get({
  "owner": "",
  "repo": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * sort `string` (values: newest, oldest, stargazers): The sort order. Can be either `newest`, `oldest`, or `stargazers`.
  * per_page `integer`: Results per page (max 100)
  * page `integer`: Page number of the results to fetch.

#### Output
* output `array`
  * items [minimal-repository](#minimal-repository)

### repos.owner.repo.forks.post
Create a fork for the authenticated user.

**Note**: Forking a Repository happens asynchronously. You may have to wait a short period of time before you can access the git objects. If this takes longer than 5 minutes, be sure to contact [GitHub Support](https://github.com/contact) or [GitHub Premium Support](https://premium.githubsupport.com).


```js
github.repos.owner.repo.forks.post({
  "owner": "",
  "repo": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * body `object`
    * organization `string`: Optional parameter to specify the organization name if forking into an organization.

#### Output
* output [repository](#repository)

### repos.owner.repo.git.blobs.post
Create a blob


```js
github.repos.owner.repo.git.blobs.post({
  "owner": "",
  "repo": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * body `object`
    * content **required** `string`: The new blob's content.
    * encoding `string`: The encoding used for `content`. Currently, `"utf-8"` and `"base64"` are supported.

#### Output
* output [short-blob](#short-blob)

### repos.owner.repo.git.blobs.file_sha.get
The `content` in the response will always be Base64 encoded.

_Note_: This API supports blobs up to 100 megabytes in size.


```js
github.repos.owner.repo.git.blobs.file_sha.get({
  "owner": "",
  "repo": "",
  "file_sha": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * file_sha **required** `string`: file_sha parameter

#### Output
* output [blob](#blob)

### repos.owner.repo.git.commits.post
Creates a new Git [commit object](https://git-scm.com/book/en/v1/Git-Internals-Git-Objects#Commit-Objects).

In this example, the payload of the signature would be:



**Signature verification object**

The response will include a `verification` object that describes the result of verifying the commit's signature. The following fields are included in the `verification` object:

These are the possible values for `reason` in the `verification` object:

| Value                    | Description                                                                                                                       |
| ------------------------ | --------------------------------------------------------------------------------------------------------------------------------- |
| `expired_key`            | The key that made the signature is expired.                                                                                       |
| `not_signing_key`        | The "signing" flag is not among the usage flags in the GPG key that made the signature.                                           |
| `gpgverify_error`        | There was an error communicating with the signature verification service.                                                         |
| `gpgverify_unavailable`  | The signature verification service is currently unavailable.                                                                      |
| `unsigned`               | The object does not include a signature.                                                                                          |
| `unknown_signature_type` | A non-PGP signature was found in the commit.                                                                                      |
| `no_user`                | No user was associated with the `committer` email address in the commit.                                                          |
| `unverified_email`       | The `committer` email address in the commit was associated with a user, but the email address is not verified on her/his account. |
| `bad_email`              | The `committer` email address in the commit is not included in the identities of the PGP key that made the signature.             |
| `unknown_key`            | The key that made the signature has not been registered with any user's account.                                                  |
| `malformed_signature`    | There was an error parsing the signature.                                                                                         |
| `invalid`                | The signature could not be cryptographically verified using the key whose key-id was found in the signature.                      |
| `valid`                  | None of the above errors applied, so the signature is considered to be verified.                                                  |


```js
github.repos.owner.repo.git.commits.post({
  "owner": "",
  "repo": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * body `object`
    * author `object`: Information about the author of the commit. By default, the `author` will be the authenticated user and the current date. See the `author` and `committer` object below for details.
      * date `string`: Indicates when this commit was authored (or committed). This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
      * email `string`: The email of the author (or committer) of the commit
      * name `string`: The name of the author (or committer) of the commit
    * committer `object`: Information about the person who is making the commit. By default, `committer` will use the information set in `author`. See the `author` and `committer` object below for details.
      * date `string`: Indicates when this commit was authored (or committed). This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
      * email `string`: The email of the author (or committer) of the commit
      * name `string`: The name of the author (or committer) of the commit
    * message **required** `string`: The commit message
    * parents `array`: The SHAs of the commits that were the parents of this commit. If omitted or empty, the commit will be written as a root commit. For a single parent, an array of one SHA should be provided; for a merge commit, an array of more than one should be provided.
      * items `string`
    * signature `string`: The [PGP signature](https://en.wikipedia.org/wiki/Pretty_Good_Privacy) of the commit. GitHub adds the signature to the `gpgsig` header of the created commit. For a commit signature to be verifiable by Git or GitHub, it must be an ASCII-armored detached PGP signature over the string commit as it would be written to the object database. To pass a `signature` parameter, you need to first manually create a valid PGP signature, which can be complicated. You may find it easier to [use the command line](https://git-scm.com/book/id/v2/Git-Tools-Signing-Your-Work) to create signed commits.
    * tree **required** `string`: The SHA of the tree object this commit points to

#### Output
* output [git-commit](#git-commit)

### repos.owner.repo.git.commits.commit_sha.get
Gets a Git [commit object](https://git-scm.com/book/en/v1/Git-Internals-Git-Objects#Commit-Objects).

**Signature verification object**

The response will include a `verification` object that describes the result of verifying the commit's signature. The following fields are included in the `verification` object:

These are the possible values for `reason` in the `verification` object:

| Value                    | Description                                                                                                                       |
| ------------------------ | --------------------------------------------------------------------------------------------------------------------------------- |
| `expired_key`            | The key that made the signature is expired.                                                                                       |
| `not_signing_key`        | The "signing" flag is not among the usage flags in the GPG key that made the signature.                                           |
| `gpgverify_error`        | There was an error communicating with the signature verification service.                                                         |
| `gpgverify_unavailable`  | The signature verification service is currently unavailable.                                                                      |
| `unsigned`               | The object does not include a signature.                                                                                          |
| `unknown_signature_type` | A non-PGP signature was found in the commit.                                                                                      |
| `no_user`                | No user was associated with the `committer` email address in the commit.                                                          |
| `unverified_email`       | The `committer` email address in the commit was associated with a user, but the email address is not verified on her/his account. |
| `bad_email`              | The `committer` email address in the commit is not included in the identities of the PGP key that made the signature.             |
| `unknown_key`            | The key that made the signature has not been registered with any user's account.                                                  |
| `malformed_signature`    | There was an error parsing the signature.                                                                                         |
| `invalid`                | The signature could not be cryptographically verified using the key whose key-id was found in the signature.                      |
| `valid`                  | None of the above errors applied, so the signature is considered to be verified.                                                  |


```js
github.repos.owner.repo.git.commits.commit_sha.get({
  "owner": "",
  "repo": "",
  "commit_sha": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * commit_sha **required** `string`: commit_sha+ parameter

#### Output
* output [git-commit](#git-commit)

### repos.owner.repo.git.matching_refs.ref.get
Returns an array of references from your Git database that match the supplied name. The `:ref` in the URL must be formatted as `heads/<branch name>` for branches and `tags/<tag name>` for tags. If the `:ref` doesn't exist in the repository, but existing refs start with `:ref`, they will be returned as an array.

When you use this endpoint without providing a `:ref`, it will return an array of all the references from your Git database, including notes and stashes if they exist on the server. Anything in the namespace is returned, not just `heads` and `tags`.

**Note:** You need to explicitly [request a pull request](https://developer.github.com/v3/pulls/#get-a-pull-request) to trigger a test merge commit, which checks the mergeability of pull requests. For more information, see "[Checking mergeability of pull requests](https://developer.github.com/v3/git/#checking-mergeability-of-pull-requests)".

If you request matching references for a branch named `feature` but the branch `feature` doesn't exist, the response can still include other matching head refs that start with the word `feature`, such as `featureA` and `featureB`.


```js
github.repos.owner.repo.git.matching_refs.ref.get({
  "owner": "",
  "repo": "",
  "ref": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * ref **required** `string`: ref+ parameter
  * per_page `integer`: Results per page (max 100)
  * page `integer`: Page number of the results to fetch.

#### Output
* output `array`
  * items [git-ref](#git-ref)

### repos.owner.repo.git.ref.ref.get
Returns a single reference from your Git database. The `:ref` in the URL must be formatted as `heads/<branch name>` for branches and `tags/<tag name>` for tags. If the `:ref` doesn't match an existing ref, a `404` is returned.

**Note:** You need to explicitly [request a pull request](https://developer.github.com/v3/pulls/#get-a-pull-request) to trigger a test merge commit, which checks the mergeability of pull requests. For more information, see "[Checking mergeability of pull requests](https://developer.github.com/v3/git/#checking-mergeability-of-pull-requests)".


```js
github.repos.owner.repo.git.ref.ref.get({
  "owner": "",
  "repo": "",
  "ref": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * ref **required** `string`: ref+ parameter

#### Output
* output [git-ref](#git-ref)

### repos.owner.repo.git.refs.post
Creates a reference for your repository. You are unable to create new references for empty repositories, even if the commit SHA-1 hash used exists. Empty repositories are repositories without branches.


```js
github.repos.owner.repo.git.refs.post({
  "owner": "",
  "repo": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * body `object`
    * key `string`
    * ref **required** `string`: The name of the fully qualified reference (ie: `refs/heads/master`). If it doesn't start with 'refs' and have at least two slashes, it will be rejected.
    * sha **required** `string`: The SHA1 value for this reference.

#### Output
* output [git-ref](#git-ref)

### repos.owner.repo.git.refs.ref.delete
Delete a reference


```js
github.repos.owner.repo.git.refs.ref.delete({
  "owner": "",
  "repo": "",
  "ref": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * ref **required** `string`: ref+ parameter

#### Output
*Output schema unknown*

### repos.owner.repo.git.refs.ref.patch
Update a reference


```js
github.repos.owner.repo.git.refs.ref.patch({
  "owner": "",
  "repo": "",
  "ref": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * ref **required** `string`: ref+ parameter
  * body `object`
    * force `boolean`: Indicates whether to force the update or to make sure the update is a fast-forward update. Leaving this out or setting it to `false` will make sure you're not overwriting work.
    * sha **required** `string`: The SHA1 value to set this reference to

#### Output
* output [git-ref](#git-ref)

### repos.owner.repo.git.tags.post
Note that creating a tag object does not create the reference that makes a tag in Git. If you want to create an annotated tag in Git, you have to do this call to create the tag object, and then [create](https://developer.github.com/v3/git/refs/#create-a-reference) the `refs/tags/[tag]` reference. If you want to create a lightweight tag, you only have to [create](https://developer.github.com/v3/git/refs/#create-a-reference) the tag reference - this call would be unnecessary.

**Signature verification object**

The response will include a `verification` object that describes the result of verifying the commit's signature. The following fields are included in the `verification` object:

These are the possible values for `reason` in the `verification` object:

| Value                    | Description                                                                                                                       |
| ------------------------ | --------------------------------------------------------------------------------------------------------------------------------- |
| `expired_key`            | The key that made the signature is expired.                                                                                       |
| `not_signing_key`        | The "signing" flag is not among the usage flags in the GPG key that made the signature.                                           |
| `gpgverify_error`        | There was an error communicating with the signature verification service.                                                         |
| `gpgverify_unavailable`  | The signature verification service is currently unavailable.                                                                      |
| `unsigned`               | The object does not include a signature.                                                                                          |
| `unknown_signature_type` | A non-PGP signature was found in the commit.                                                                                      |
| `no_user`                | No user was associated with the `committer` email address in the commit.                                                          |
| `unverified_email`       | The `committer` email address in the commit was associated with a user, but the email address is not verified on her/his account. |
| `bad_email`              | The `committer` email address in the commit is not included in the identities of the PGP key that made the signature.             |
| `unknown_key`            | The key that made the signature has not been registered with any user's account.                                                  |
| `malformed_signature`    | There was an error parsing the signature.                                                                                         |
| `invalid`                | The signature could not be cryptographically verified using the key whose key-id was found in the signature.                      |
| `valid`                  | None of the above errors applied, so the signature is considered to be verified.                                                  |


```js
github.repos.owner.repo.git.tags.post({
  "owner": "",
  "repo": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * body `object`
    * message **required** `string`: The tag message.
    * object **required** `string`: The SHA of the git object this is tagging.
    * tag **required** `string`: The tag's name. This is typically a version (e.g., "v0.0.1").
    * tagger `object`: An object with information about the individual creating the tag.
      * date `string`: When this object was tagged. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
      * email `string`: The email of the author of the tag
      * name `string`: The name of the author of the tag
    * type **required** `string` (values: commit, tree, blob): The type of the object we're tagging. Normally this is a `commit` but it can also be a `tree` or a `blob`.

#### Output
* output [git-tag](#git-tag)

### repos.owner.repo.git.tags.tag_sha.get
**Signature verification object**

The response will include a `verification` object that describes the result of verifying the commit's signature. The following fields are included in the `verification` object:

These are the possible values for `reason` in the `verification` object:

| Value                    | Description                                                                                                                       |
| ------------------------ | --------------------------------------------------------------------------------------------------------------------------------- |
| `expired_key`            | The key that made the signature is expired.                                                                                       |
| `not_signing_key`        | The "signing" flag is not among the usage flags in the GPG key that made the signature.                                           |
| `gpgverify_error`        | There was an error communicating with the signature verification service.                                                         |
| `gpgverify_unavailable`  | The signature verification service is currently unavailable.                                                                      |
| `unsigned`               | The object does not include a signature.                                                                                          |
| `unknown_signature_type` | A non-PGP signature was found in the commit.                                                                                      |
| `no_user`                | No user was associated with the `committer` email address in the commit.                                                          |
| `unverified_email`       | The `committer` email address in the commit was associated with a user, but the email address is not verified on her/his account. |
| `bad_email`              | The `committer` email address in the commit is not included in the identities of the PGP key that made the signature.             |
| `unknown_key`            | The key that made the signature has not been registered with any user's account.                                                  |
| `malformed_signature`    | There was an error parsing the signature.                                                                                         |
| `invalid`                | The signature could not be cryptographically verified using the key whose key-id was found in the signature.                      |
| `valid`                  | None of the above errors applied, so the signature is considered to be verified.                                                  |


```js
github.repos.owner.repo.git.tags.tag_sha.get({
  "owner": "",
  "repo": "",
  "tag_sha": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * tag_sha **required** `string`: tag_sha parameter

#### Output
* output [git-tag](#git-tag)

### repos.owner.repo.git.trees.post
The tree creation API accepts nested entries. If you specify both a tree and a nested path modifying that tree, this endpoint will overwrite the contents of the tree with the new path contents, and create a new tree structure.

If you use this endpoint to add, delete, or modify the file contents in a tree, you will need to commit the tree and then update a branch to point to the commit. For more information see "[Create a commit](https://developer.github.com/v3/git/commits/#create-a-commit)" and "[Update a reference](https://developer.github.com/v3/git/refs/#update-a-reference)."


```js
github.repos.owner.repo.git.trees.post({
  "owner": "",
  "repo": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * body `object`
    * base_tree `string`: The SHA1 of the tree you want to update with new data. If you don't set this, the commit will be created on top of everything; however, it will only contain your change, the rest of your files will show up as deleted.
    * tree **required** `array`: Objects (of `path`, `mode`, `type`, and `sha`) specifying a tree structure.
      * items `object`
        * content `string`: The content you want this file to have. GitHub will write this blob out and use that SHA for this entry. Use either this, or `tree.sha`.  
        * mode `string` (values: 100644, 100755, 040000, 160000, 120000): The file mode; one of `100644` for file (blob), `100755` for executable (blob), `040000` for subdirectory (tree), `160000` for submodule (commit), or `120000` for a blob that specifies the path of a symlink.
        * path `string`: The file referenced in the tree.
        * sha `string`: The SHA1 checksum ID of the object in the tree. Also called `tree.sha`. If the value is `null` then the file will be deleted.  
        * type `string` (values: blob, tree, commit): Either `blob`, `tree`, or `commit`.

#### Output
* output [git-tree](#git-tree)

### repos.owner.repo.git.trees.tree_sha.get
Returns a single tree using the SHA1 value for that tree.

If `truncated` is `true` in the response then the number of items in the `tree` array exceeded our maximum limit. If you need to fetch more items, use the non-recursive method of fetching trees, and fetch one sub-tree at a time.


```js
github.repos.owner.repo.git.trees.tree_sha.get({
  "owner": "",
  "repo": "",
  "tree_sha": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * tree_sha **required** `string`: tree_sha parameter
  * recursive `string`: Setting this parameter to any value returns the objects or subtrees referenced by the tree specified in `:tree_sha`. For example, setting `recursive` to any of the following will enable returning objects or subtrees: `0`, `1`, `"true"`, and `"false"`. Omit this parameter to prevent recursively returning objects or subtrees.

#### Output
* output [git-tree](#git-tree)

### repos.owner.repo.hooks.get
List repository webhooks


```js
github.repos.owner.repo.hooks.get({
  "owner": "",
  "repo": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * per_page `integer`: Results per page (max 100)
  * page `integer`: Page number of the results to fetch.

#### Output
* output `array`
  * items [hook](#hook)

### repos.owner.repo.hooks.post
Repositories can have multiple webhooks installed. Each webhook should have a unique `config`. Multiple webhooks can
share the same `config` as long as those webhooks do not have any `events` that overlap.


```js
github.repos.owner.repo.hooks.post({
  "owner": "",
  "repo": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * body `object`
    * active `boolean`: Determines if notifications are sent when the webhook is triggered. Set to `true` to send notifications.
    * config **required** `object`: Key/value pairs to provide settings for this webhook. [These are defined below](https://developer.github.com/v3/repos/hooks/#create-hook-config-params).
      * content_type `string`: The media type used to serialize the payloads. Supported values include `json` and `form`. The default is `form`.
      * digest `string`
      * insecure_ssl `string`: Determines whether the SSL certificate of the host for `url` will be verified when delivering payloads. Supported values include `0` (verification is performed) and `1` (verification is not performed). The default is `0`. **We strongly recommend not setting this to `1` as you are subject to man-in-the-middle and other attacks.**
      * secret `string`: If provided, the `secret` will be used as the `key` to generate the HMAC hex digest value in the [`X-Hub-Signature`](https://developer.github.com/webhooks/event-payloads/#delivery-headers) header.
      * token `string`
      * url **required** `string`: The URL to which the payloads will be delivered.
    * events `array`: Determines what [events](https://developer.github.com/webhooks/event-payloads) the hook is triggered for.
      * items `string`
    * name `string`: Use `web` to create a webhook. Default: `web`. This parameter only accepts the value `web`.

#### Output
* output [hook](#hook)

### repos.owner.repo.hooks.hook_id.delete
Delete a repository webhook


```js
github.repos.owner.repo.hooks.hook_id.delete({
  "owner": "",
  "repo": "",
  "hook_id": 0
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * hook_id **required** `integer`

#### Output
*Output schema unknown*

### repos.owner.repo.hooks.hook_id.get
Get a repository webhook


```js
github.repos.owner.repo.hooks.hook_id.get({
  "owner": "",
  "repo": "",
  "hook_id": 0
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * hook_id **required** `integer`

#### Output
* output [hook](#hook)

### repos.owner.repo.hooks.hook_id.patch
Update a repository webhook


```js
github.repos.owner.repo.hooks.hook_id.patch({
  "owner": "",
  "repo": "",
  "hook_id": 0
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * hook_id **required** `integer`
  * body `object`
    * active `boolean`: Determines if notifications are sent when the webhook is triggered. Set to `true` to send notifications.
    * add_events `array`: Determines a list of events to be added to the list of events that the Hook triggers for.
      * items `string`
    * config `object`: Key/value pairs to provide settings for this webhook. [These are defined below](https://developer.github.com/v3/repos/hooks/#create-hook-config-params).
      * address `string`
      * content_type `string`: The media type used to serialize the payloads. Supported values include `json` and `form`. The default is `form`.
      * insecure_ssl `string`: Determines whether the SSL certificate of the host for `url` will be verified when delivering payloads. Supported values include `0` (verification is performed) and `1` (verification is not performed). The default is `0`. **We strongly recommend not setting this to `1` as you are subject to man-in-the-middle and other attacks.**
      * room `string`
      * secret `string`: If provided, the `secret` will be used as the `key` to generate the HMAC hex digest value in the [`X-Hub-Signature`](https://developer.github.com/webhooks/event-payloads/#delivery-headers) header.
      * url **required** `string`: The URL to which the payloads will be delivered.
    * events `array`: Determines what [events](https://developer.github.com/webhooks/event-payloads) the hook is triggered for. This replaces the entire array of events.
      * items `string`
    * remove_events `array`: Determines a list of events to be removed from the list of events that the Hook triggers for.
      * items `string`

#### Output
* output [hook](#hook)

### repos.owner.repo.hooks.hook_id.pings.post
This will trigger a [ping event](https://developer.github.com/webhooks/#ping-event) to be sent to the hook.


```js
github.repos.owner.repo.hooks.hook_id.pings.post({
  "owner": "",
  "repo": "",
  "hook_id": 0
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * hook_id **required** `integer`

#### Output
*Output schema unknown*

### repos.owner.repo.hooks.hook_id.tests.post
This will trigger the hook with the latest push to the current repository if the hook is subscribed to `push` events. If the hook is not subscribed to `push` events, the server will respond with 204 but no test POST will be generated.

**Note**: Previously `/repos/:owner/:repo/hooks/:hook_id/test`


```js
github.repos.owner.repo.hooks.hook_id.tests.post({
  "owner": "",
  "repo": "",
  "hook_id": 0
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * hook_id **required** `integer`

#### Output
*Output schema unknown*

### repos.owner.repo.import.delete
Stop an import for a repository.


```js
github.repos.owner.repo.import.delete({
  "owner": "",
  "repo": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`

#### Output
*Output schema unknown*

### repos.owner.repo.import.get
View the progress of an import.

**Import status**

This section includes details about the possible values of the `status` field of the Import Progress response.

An import that does not have errors will progress through these steps:

*   `detecting` - the "detection" step of the import is in progress because the request did not include a `vcs` parameter. The import is identifying the type of source control present at the URL.
*   `importing` - the "raw" step of the import is in progress. This is where commit data is fetched from the original repository. The import progress response will include `commit_count` (the total number of raw commits that will be imported) and `percent` (0 - 100, the current progress through the import).
*   `mapping` - the "rewrite" step of the import is in progress. This is where SVN branches are converted to Git branches, and where author updates are applied. The import progress response does not include progress information.
*   `pushing` - the "push" step of the import is in progress. This is where the importer updates the repository on GitHub. The import progress response will include `push_percent`, which is the percent value reported by `git push` when it is "Writing objects".
*   `complete` - the import is complete, and the repository is ready on GitHub.

If there are problems, you will see one of these in the `status` field:

*   `auth_failed` - the import requires authentication in order to connect to the original repository. To update authentication for the import, please see the [Update an import](https://developer.github.com/v3/migrations/source_imports/#update-an-import) section.
*   `error` - the import encountered an error. The import progress response will include the `failed_step` and an error message. Contact [GitHub Support](https://github.com/contact) or [GitHub Premium Support](https://premium.githubsupport.com) for more information.
*   `detection_needs_auth` - the importer requires authentication for the originating repository to continue detection. To update authentication for the import, please see the [Update an import](https://developer.github.com/v3/migrations/source_imports/#update-an-import) section.
*   `detection_found_nothing` - the importer didn't recognize any source control at the URL. To resolve, [Cancel the import](https://developer.github.com/v3/migrations/source_imports/#cancel-an-import) and [retry](https://developer.github.com/v3/migrations/source_imports/#start-an-import) with the correct URL.
*   `detection_found_multiple` - the importer found several projects or repositories at the provided URL. When this is the case, the Import Progress response will also include a `project_choices` field with the possible project choices as values. To update project choice, please see the [Update an import](https://developer.github.com/v3/migrations/source_imports/#update-an-import) section.

**The project_choices field**

When multiple projects are found at the provided URL, the response hash will include a `project_choices` field, the value of which is an array of hashes each representing a project choice. The exact key/value pairs of the project hashes will differ depending on the version control type.

**Git LFS related fields**

This section includes details about Git LFS related fields that may be present in the Import Progress response.

*   `use_lfs` - describes whether the import has been opted in or out of using Git LFS. The value can be `opt_in`, `opt_out`, or `undecided` if no action has been taken.
*   `has_large_files` - the boolean value describing whether files larger than 100MB were found during the `importing` step.
*   `large_files_size` - the total size in gigabytes of files larger than 100MB found in the originating repository.
*   `large_files_count` - the total number of files larger than 100MB found in the originating repository. To see a list of these files, make a "Get Large Files" request.


```js
github.repos.owner.repo.import.get({
  "owner": "",
  "repo": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`

#### Output
* output [import](#import)

### repos.owner.repo.import.patch
An import can be updated with credentials or a project choice by passing in the appropriate parameters in this API
request. If no parameters are provided, the import will be restarted.


```js
github.repos.owner.repo.import.patch({
  "owner": "",
  "repo": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * body `object`
    * tfvc_project `string`
    * vcs `string`
    * vcs_password `string`: The password to provide to the originating repository.
    * vcs_username `string`: The username to provide to the originating repository.

#### Output
* output [import](#import)

### repos.owner.repo.import.put
Start a source import to a GitHub repository using GitHub Importer.


```js
github.repos.owner.repo.import.put({
  "owner": "",
  "repo": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * body `object`
    * tfvc_project `string`: For a tfvc import, the name of the project that is being imported.
    * vcs `string` (values: subversion, git, mercurial, tfvc): The originating VCS type. Can be one of `subversion`, `git`, `mercurial`, or `tfvc`. Please be aware that without this parameter, the import job will take additional time to detect the VCS type before beginning the import. This detection step will be reflected in the response.
    * vcs_password `string`: If authentication is required, the password to provide to `vcs_url`.
    * vcs_url **required** `string`: The URL of the originating repository.
    * vcs_username `string`: If authentication is required, the username to provide to `vcs_url`.

#### Output
* output [import](#import)

### repos.owner.repo.import.authors.get
Each type of source control system represents authors in a different way. For example, a Git commit author has a display name and an email address, but a Subversion commit author just has a username. The GitHub Importer will make the author information valid, but the author might not be correct. For example, it will change the bare Subversion username `hubot` into something like `hubot <hubot@12341234-abab-fefe-8787-fedcba987654>`.

This endpoint and the [Map a commit author](https://developer.github.com/v3/migrations/source_imports/#map-a-commit-author) endpoint allow you to provide correct Git author information.


```js
github.repos.owner.repo.import.authors.get({
  "owner": "",
  "repo": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * since `string`: Only show notifications updated after the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.

#### Output
* output `array`
  * items [porter-author](#porter-author)

### repos.owner.repo.import.authors.author_id.patch
Update an author's identity for the import. Your application can continue updating authors any time before you push new commits to the repository.


```js
github.repos.owner.repo.import.authors.author_id.patch({
  "owner": "",
  "repo": "",
  "author_id": 0
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * author_id **required** `integer`: author_id parameter
  * body `object`
    * email `string`: The new Git author email.
    * name `string`: The new Git author name.
    * remote_id `string`

#### Output
* output [porter-author](#porter-author)

### repos.owner.repo.import.large_files.get
List files larger than 100MB found during the import


```js
github.repos.owner.repo.import.large_files.get({
  "owner": "",
  "repo": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`

#### Output
* output `array`
  * items [porter-large-file](#porter-large-file)

### repos.owner.repo.import.lfs.patch
You can import repositories from Subversion, Mercurial, and TFS that include files larger than 100MB. This ability is powered by [Git LFS](https://git-lfs.github.com). You can learn more about our LFS feature and working with large files [on our help site](https://help.github.com/articles/versioning-large-files/).


```js
github.repos.owner.repo.import.lfs.patch({
  "owner": "",
  "repo": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * body `object`
    * use_lfs **required** `string` (values: opt_in, opt_out): Can be one of `opt_in` (large files will be stored using Git LFS) or `opt_out` (large files will be removed during the import).

#### Output
* output [import](#import)

### repos.owner.repo.installation.get
Enables an authenticated GitHub App to find the repository's installation information. The installation's account type will be either an organization or a user account, depending which account the repository belongs to.

You must use a [JWT](https://developer.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.


```js
github.repos.owner.repo.installation.get({
  "owner": "",
  "repo": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`

#### Output
* output [installation](#installation)

### repos.owner.repo.interaction_limits.delete
Removes all interaction restrictions from the given repository. You must have owner or admin access to remove restrictions.


```js
github.repos.owner.repo.interaction_limits.delete({
  "owner": "",
  "repo": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`

#### Output
*Output schema unknown*

### repos.owner.repo.interaction_limits.get
Shows which group of GitHub users can interact with this repository and when the restriction expires. If there are no restrictions, you will see an empty response.


```js
github.repos.owner.repo.interaction_limits.get({
  "owner": "",
  "repo": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`

#### Output
* output [interaction-limit](#interaction-limit)

### repos.owner.repo.interaction_limits.put
Temporarily restricts interactions to certain GitHub users within the given repository. You must have owner or admin access to set restrictions.


```js
github.repos.owner.repo.interaction_limits.put({
  "owner": "",
  "repo": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * body `object`
    * limit **required** `string` (values: existing_users, contributors_only, collaborators_only): Specifies the group of GitHub users who can comment, open issues, or create pull requests for the given repository. Must be one of: `existing_users`, `contributors_only`, or `collaborators_only`.

#### Output
* output [interaction-limit](#interaction-limit)

### repos.owner.repo.invitations.get
When authenticating as a user with admin rights to a repository, this endpoint will list all currently open repository invitations.


```js
github.repos.owner.repo.invitations.get({
  "owner": "",
  "repo": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * per_page `integer`: Results per page (max 100)
  * page `integer`: Page number of the results to fetch.

#### Output
* output `array`
  * items [repository-invitation](#repository-invitation)

### repos.owner.repo.invitations.invitation_id.delete
Delete a repository invitation


```js
github.repos.owner.repo.invitations.invitation_id.delete({
  "owner": "",
  "repo": "",
  "invitation_id": 0
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * invitation_id **required** `integer`: invitation_id parameter

#### Output
*Output schema unknown*

### repos.owner.repo.invitations.invitation_id.patch
Update a repository invitation


```js
github.repos.owner.repo.invitations.invitation_id.patch({
  "owner": "",
  "repo": "",
  "invitation_id": 0
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * invitation_id **required** `integer`: invitation_id parameter
  * body `object`
    * permissions `string` (values: read, write, maintain, triage, admin): The permissions that the associated user will have on the repository. Valid values are `read`, `write`, `maintain`, `triage`, and `admin`.

#### Output
* output [repository-invitation](#repository-invitation)

### repos.owner.repo.issues.get
List issues in a repository.

**Note**: GitHub's REST API v3 considers every pull request an issue, but not every issue is a pull request. For this
reason, "Issues" endpoints may return both issues and pull requests in the response. You can identify pull requests by
the `pull_request` key. Be aware that the `id` of a pull request returned from "Issues" endpoints will be an _issue id_. To find out the pull
request id, use the "[List pull requests](https://developer.github.com/v3/pulls/#list-pull-requests)" endpoint.


```js
github.repos.owner.repo.issues.get({
  "owner": "",
  "repo": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * milestone `string`: If an `integer` is passed, it should refer to a milestone by its `number` field. If the string `*` is passed, issues with any milestone are accepted. If the string `none` is passed, issues without milestones are returned.
  * state `string` (values: open, closed, all): Indicates the state of the issues to return. Can be either `open`, `closed`, or `all`.
  * assignee `string`: Can be the name of a user. Pass in `none` for issues with no assigned user, and `*` for issues assigned to any user.
  * creator `string`: The user that created the issue.
  * mentioned `string`: A user that's mentioned in the issue.
  * labels `string`: A list of comma separated label names. Example: `bug,ui,@high`
  * sort `string` (values: created, updated, comments): What to sort results by. Can be either `created`, `updated`, `comments`.
  * direction `string` (values: asc, desc): One of `asc` (ascending) or `desc` (descending).
  * since `string`: Only show notifications updated after the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
  * per_page `integer`: Results per page (max 100)
  * page `integer`: Page number of the results to fetch.

#### Output
* output `array`
  * items [issue-simple](#issue-simple)

### repos.owner.repo.issues.post
Any user with pull access to a repository can create an issue. If [issues are disabled in the repository](https://help.github.com/articles/disabling-issues/), the API returns a `410 Gone` status.

This endpoint triggers [notifications](https://help.github.com/articles/about-notifications/). Creating content too quickly using this endpoint may result in abuse rate limiting. See "[Abuse rate limits](https://developer.github.com/v3/#abuse-rate-limits)" and "[Dealing with abuse rate limits](https://developer.github.com/v3/guides/best-practices-for-integrators/#dealing-with-abuse-rate-limits)" for details.


```js
github.repos.owner.repo.issues.post({
  "owner": "",
  "repo": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * body `object`
    * assignee `string`: Login for the user that this issue should be assigned to. _NOTE: Only users with push access can set the assignee for new issues. The assignee is silently dropped otherwise. **This field is deprecated.**_
    * assignees `array`: Logins for Users to assign to this issue. _NOTE: Only users with push access can set assignees for new issues. Assignees are silently dropped otherwise._
      * items `string`
    * body `string`: The contents of the issue.
    * labels `array`: Labels to associate with this issue. _NOTE: Only users with push access can set labels for new issues. Labels are silently dropped otherwise._
    * milestone `integer`: The `number` of the milestone to associate this issue with. _NOTE: Only users with push access can set the milestone for new issues. The milestone is silently dropped otherwise._
    * title **required** `string`: The title of the issue.

#### Output
* output [issue](#issue)

### repos.owner.repo.issues.comments.get
By default, Issue Comments are ordered by ascending ID.


```js
github.repos.owner.repo.issues.comments.get({
  "owner": "",
  "repo": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * sort `string` (values: created, updated): One of `created` (when the repository was starred) or `updated` (when it was last pushed to).
  * direction `string` (values: asc, desc): Either `asc` or `desc`. Ignored without the `sort` parameter.
  * since `string`: Only show notifications updated after the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
  * per_page `integer`: Results per page (max 100)
  * page `integer`: Page number of the results to fetch.

#### Output
* output `array`
  * items [issue-comment](#issue-comment)

### repos.owner.repo.issues.comments.comment_id.delete
Delete an issue comment


```js
github.repos.owner.repo.issues.comments.comment_id.delete({
  "owner": "",
  "repo": "",
  "comment_id": 0
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * comment_id **required** `integer`: comment_id parameter

#### Output
*Output schema unknown*

### repos.owner.repo.issues.comments.comment_id.get
Get an issue comment


```js
github.repos.owner.repo.issues.comments.comment_id.get({
  "owner": "",
  "repo": "",
  "comment_id": 0
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * comment_id **required** `integer`: comment_id parameter

#### Output
* output [issue-comment](#issue-comment)

### repos.owner.repo.issues.comments.comment_id.patch
Update an issue comment


```js
github.repos.owner.repo.issues.comments.comment_id.patch({
  "owner": "",
  "repo": "",
  "comment_id": 0
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * comment_id **required** `integer`: comment_id parameter
  * body `object`
    * body **required** `string`: The contents of the comment.

#### Output
* output [issue-comment](#issue-comment)

### repos.owner.repo.issues.comments.comment_id.reactions.get
List the reactions to an [issue comment](https://developer.github.com/v3/issues/comments/).


```js
github.repos.owner.repo.issues.comments.comment_id.reactions.get({
  "owner": "",
  "repo": "",
  "comment_id": 0
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * comment_id **required** `integer`: comment_id parameter
  * content `string` (values: +1, -1, laugh, confused, heart, hooray, rocket, eyes): Returns a single [reaction type](https://developer.github.com/v3/reactions/#reaction-types). Omit this parameter to list all reactions to an issue comment.
  * per_page `integer`: Results per page (max 100)
  * page `integer`: Page number of the results to fetch.

#### Output
* output `array`
  * items [reaction](#reaction)

### repos.owner.repo.issues.comments.comment_id.reactions.post
Create a reaction to an [issue comment](https://developer.github.com/v3/issues/comments/). A response with a `Status: 200 OK` means that you already added the reaction type to this issue comment.


```js
github.repos.owner.repo.issues.comments.comment_id.reactions.post({
  "owner": "",
  "repo": "",
  "comment_id": 0
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * comment_id **required** `integer`: comment_id parameter
  * body `object`
    * content **required** `string` (values: +1, -1, laugh, confused, heart, hooray, rocket, eyes): The [reaction type](https://developer.github.com/v3/reactions/#reaction-types) to add to the issue comment.

#### Output
* output [reaction](#reaction)

### repos.owner.repo.issues.comments.comment_id.reactions.reaction_id.delete
**Note:** You can also specify a repository by `repository_id` using the route `DELETE delete /repositories/:repository_id/issues/comments/:comment_id/reactions/:reaction_id`.

Delete a reaction to an [issue comment](https://developer.github.com/v3/issues/comments/).


```js
github.repos.owner.repo.issues.comments.comment_id.reactions.reaction_id.delete({
  "owner": "",
  "repo": "",
  "comment_id": 0,
  "reaction_id": 0
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * comment_id **required** `integer`: comment_id parameter
  * reaction_id **required** `integer`

#### Output
*Output schema unknown*

### repos.owner.repo.issues.events.get
List issue events for a repository


```js
github.repos.owner.repo.issues.events.get({
  "owner": "",
  "repo": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * per_page `integer`: Results per page (max 100)
  * page `integer`: Page number of the results to fetch.

#### Output
* output `array`
  * items [issue-event](#issue-event)

### repos.owner.repo.issues.events.event_id.get
Get an issue event


```js
github.repos.owner.repo.issues.events.event_id.get({
  "owner": "",
  "repo": "",
  "event_id": 0
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * event_id **required** `integer`: event_id parameter

#### Output
* output [issue-event](#issue-event)

### repos.owner.repo.issues.issue_number.get
The API returns a [`301 Moved Permanently` status](https://developer.github.com/v3/#http-redirects) if the issue was
[transferred](https://help.github.com/articles/transferring-an-issue-to-another-repository/) to another repository. If
the issue was transferred to or deleted from a repository where the authenticated user lacks read access, the API
returns a `404 Not Found` status. If the issue was deleted from a repository where the authenticated user has read
access, the API returns a `410 Gone` status. To receive webhook events for transferred and deleted issues, subscribe
to the [`issues`](https://developer.github.com/webhooks/event-payloads/#issues) webhook.

**Note**: GitHub's REST API v3 considers every pull request an issue, but not every issue is a pull request. For this
reason, "Issues" endpoints may return both issues and pull requests in the response. You can identify pull requests by
the `pull_request` key. Be aware that the `id` of a pull request returned from "Issues" endpoints will be an _issue id_. To find out the pull
request id, use the "[List pull requests](https://developer.github.com/v3/pulls/#list-pull-requests)" endpoint.


```js
github.repos.owner.repo.issues.issue_number.get({
  "owner": "",
  "repo": "",
  "issue_number": 0
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * issue_number **required** `integer`: issue_number parameter

#### Output
* output [issue](#issue)

### repos.owner.repo.issues.issue_number.patch
Issue owners and users with push access can edit an issue.


```js
github.repos.owner.repo.issues.issue_number.patch({
  "owner": "",
  "repo": "",
  "issue_number": 0
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * issue_number **required** `integer`: issue_number parameter
  * body `object`
    * assignee `string`: Login for the user that this issue should be assigned to. **This field is deprecated.**
    * assignees `array`: Logins for Users to assign to this issue. Pass one or more user logins to _replace_ the set of assignees on this Issue. Send an empty array (`[]`) to clear all assignees from the Issue. _NOTE: Only users with push access can set assignees for new issues. Assignees are silently dropped otherwise._
      * items `string`
    * body `string`: The contents of the issue.
    * labels `array`: Labels to associate with this issue. Pass one or more Labels to _replace_ the set of Labels on this Issue. Send an empty array (`[]`) to clear all Labels from the Issue. _NOTE: Only users with push access can set labels for issues. Labels are silently dropped otherwise._
    * milestone `integer`: The `number` of the milestone to associate this issue with or `null` to remove current. _NOTE: Only users with push access can set the milestone for issues. The milestone is silently dropped otherwise._
    * state `string` (values: open, closed): State of the issue. Either `open` or `closed`.
    * title `string`: The title of the issue.

#### Output
* output [issue](#issue)

### repos.owner.repo.issues.issue_number.assignees.delete
Removes one or more assignees from an issue.


```js
github.repos.owner.repo.issues.issue_number.assignees.delete({
  "owner": "",
  "repo": "",
  "issue_number": 0
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * issue_number **required** `integer`: issue_number parameter
  * body `object`
    * assignees `array`: Usernames of assignees to remove from an issue. _NOTE: Only users with push access can remove assignees from an issue. Assignees are silently ignored otherwise._
      * items `string`

#### Output
* output [issue-simple](#issue-simple)

### repos.owner.repo.issues.issue_number.assignees.post
Adds up to 10 assignees to an issue. Users already assigned to an issue are not replaced.


```js
github.repos.owner.repo.issues.issue_number.assignees.post({
  "owner": "",
  "repo": "",
  "issue_number": 0
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * issue_number **required** `integer`: issue_number parameter
  * body `object`
    * assignees `array`: Usernames of people to assign this issue to. _NOTE: Only users with push access can add assignees to an issue. Assignees are silently ignored otherwise._
      * items `string`

#### Output
* output [issue-simple](#issue-simple)

### repos.owner.repo.issues.issue_number.comments.get
Issue Comments are ordered by ascending ID.


```js
github.repos.owner.repo.issues.issue_number.comments.get({
  "owner": "",
  "repo": "",
  "issue_number": 0
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * issue_number **required** `integer`: issue_number parameter
  * since `string`: Only show notifications updated after the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
  * per_page `integer`: Results per page (max 100)
  * page `integer`: Page number of the results to fetch.

#### Output
* output `array`
  * items [issue-comment](#issue-comment)

### repos.owner.repo.issues.issue_number.comments.post
This endpoint triggers [notifications](https://help.github.com/articles/about-notifications/). Creating content too quickly using this endpoint may result in abuse rate limiting. See "[Abuse rate limits](https://developer.github.com/v3/#abuse-rate-limits)" and "[Dealing with abuse rate limits](https://developer.github.com/v3/guides/best-practices-for-integrators/#dealing-with-abuse-rate-limits)" for details.


```js
github.repos.owner.repo.issues.issue_number.comments.post({
  "owner": "",
  "repo": "",
  "issue_number": 0
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * issue_number **required** `integer`: issue_number parameter
  * body `object`
    * body **required** `string`: The contents of the comment.

#### Output
* output [issue-comment](#issue-comment)

### repos.owner.repo.issues.issue_number.events.get
List issue events


```js
github.repos.owner.repo.issues.issue_number.events.get({
  "owner": "",
  "repo": "",
  "issue_number": 0
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * issue_number **required** `integer`: issue_number parameter
  * per_page `integer`: Results per page (max 100)
  * page `integer`: Page number of the results to fetch.

#### Output
* output `array`
  * items [issue-event-for-issue](#issue-event-for-issue)

### repos.owner.repo.issues.issue_number.labels.delete
Remove all labels from an issue


```js
github.repos.owner.repo.issues.issue_number.labels.delete({
  "owner": "",
  "repo": "",
  "issue_number": 0
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * issue_number **required** `integer`: issue_number parameter

#### Output
*Output schema unknown*

### repos.owner.repo.issues.issue_number.labels.get
List labels for an issue


```js
github.repos.owner.repo.issues.issue_number.labels.get({
  "owner": "",
  "repo": "",
  "issue_number": 0
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * issue_number **required** `integer`: issue_number parameter
  * per_page `integer`: Results per page (max 100)
  * page `integer`: Page number of the results to fetch.

#### Output
* output `array`
  * items [label](#label)

### repos.owner.repo.issues.issue_number.labels.post
Add labels to an issue


```js
github.repos.owner.repo.issues.issue_number.labels.post({
  "owner": "",
  "repo": "",
  "issue_number": 0
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * issue_number **required** `integer`: issue_number parameter
  * body `object`
    * labels **required** `array`: The name of the label to add to the issue. Must contain at least one label. **Note:** Alternatively, you can pass a single label as a `string` or an `array` of labels directly, but GitHub recommends passing an object with the `labels` key.
      * items `string`

#### Output
* output `array`
  * items [label](#label)

### repos.owner.repo.issues.issue_number.labels.put
Removes any previous labels and sets the new labels for an issue.


```js
github.repos.owner.repo.issues.issue_number.labels.put({
  "owner": "",
  "repo": "",
  "issue_number": 0
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * issue_number **required** `integer`: issue_number parameter
  * body `object`
    * labels `array`: The names of the labels to add to the issue. You can pass an empty array to remove all labels. **Note:** Alternatively, you can pass a single label as a `string` or an `array` of labels directly, but GitHub recommends passing an object with the `labels` key.
      * items `string`

#### Output
* output `array`
  * items [label](#label)

### repos.owner.repo.issues.issue_number.labels.name.delete
Removes the specified label from the issue, and returns the remaining labels on the issue. This endpoint returns a `404 Not Found` status if the label does not exist.


```js
github.repos.owner.repo.issues.issue_number.labels.name.delete({
  "owner": "",
  "repo": "",
  "issue_number": 0,
  "name": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * issue_number **required** `integer`: issue_number parameter
  * name **required** `string`: name parameter

#### Output
* output `array`
  * items [label](#label)

### repos.owner.repo.issues.issue_number.lock.delete
Users with push access can unlock an issue's conversation.


```js
github.repos.owner.repo.issues.issue_number.lock.delete({
  "owner": "",
  "repo": "",
  "issue_number": 0
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * issue_number **required** `integer`: issue_number parameter

#### Output
*Output schema unknown*

### repos.owner.repo.issues.issue_number.lock.put
Users with push access can lock an issue or pull request's conversation.

Note that, if you choose not to pass any parameters, you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP verbs](https://developer.github.com/v3/#http-verbs)."


```js
github.repos.owner.repo.issues.issue_number.lock.put({
  "owner": "",
  "repo": "",
  "issue_number": 0
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * issue_number **required** `integer`: issue_number parameter
  * body `object`
    * lock_reason `string` (values: off-topic, too heated, resolved, spam): The reason for locking the issue or pull request conversation. Lock will fail if you don't use one of these reasons:  

#### Output
*Output schema unknown*

### repos.owner.repo.issues.issue_number.reactions.get
List the reactions to an [issue](https://developer.github.com/v3/issues/).


```js
github.repos.owner.repo.issues.issue_number.reactions.get({
  "owner": "",
  "repo": "",
  "issue_number": 0
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * issue_number **required** `integer`: issue_number parameter
  * content `string` (values: +1, -1, laugh, confused, heart, hooray, rocket, eyes): Returns a single [reaction type](https://developer.github.com/v3/reactions/#reaction-types). Omit this parameter to list all reactions to an issue.
  * per_page `integer`: Results per page (max 100)
  * page `integer`: Page number of the results to fetch.

#### Output
* output `array`
  * items [reaction](#reaction)

### repos.owner.repo.issues.issue_number.reactions.post
Create a reaction to an [issue](https://developer.github.com/v3/issues/). A response with a `Status: 200 OK` means that you already added the reaction type to this issue.


```js
github.repos.owner.repo.issues.issue_number.reactions.post({
  "owner": "",
  "repo": "",
  "issue_number": 0
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * issue_number **required** `integer`: issue_number parameter
  * body `object`
    * content **required** `string` (values: +1, -1, laugh, confused, heart, hooray, rocket, eyes): The [reaction type](https://developer.github.com/v3/reactions/#reaction-types) to add to the issue.

#### Output
* output [reaction](#reaction)

### repos.owner.repo.issues.issue_number.reactions.reaction_id.delete
**Note:** You can also specify a repository by `repository_id` using the route `DELETE /repositories/:repository_id/issues/:issue_number/reactions/:reaction_id`.

Delete a reaction to an [issue](https://developer.github.com/v3/issues/).


```js
github.repos.owner.repo.issues.issue_number.reactions.reaction_id.delete({
  "owner": "",
  "repo": "",
  "issue_number": 0,
  "reaction_id": 0
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * issue_number **required** `integer`: issue_number parameter
  * reaction_id **required** `integer`

#### Output
*Output schema unknown*

### repos.owner.repo.issues.issue_number.timeline.get
List timeline events for an issue


```js
github.repos.owner.repo.issues.issue_number.timeline.get({
  "owner": "",
  "repo": "",
  "issue_number": 0
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * issue_number **required** `integer`: issue_number parameter
  * per_page `integer`: Results per page (max 100)
  * page `integer`: Page number of the results to fetch.

#### Output
* output `array`
  * items [issue-event-for-issue](#issue-event-for-issue)

### repos.owner.repo.keys.get
List deploy keys


```js
github.repos.owner.repo.keys.get({
  "owner": "",
  "repo": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * per_page `integer`: Results per page (max 100)
  * page `integer`: Page number of the results to fetch.

#### Output
* output `array`
  * items [deploy-key](#deploy-key)

### repos.owner.repo.keys.post
You can create a read-only deploy key.


```js
github.repos.owner.repo.keys.post({
  "owner": "",
  "repo": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * body `object`
    * key **required** `string`: The contents of the key.
    * read_only `boolean`: If `true`, the key will only be able to read repository contents. Otherwise, the key will be able to read and write.  
    * title `string`: A name for the key.

#### Output
* output [deploy-key](#deploy-key)

### repos.owner.repo.keys.key_id.delete
Deploy keys are immutable. If you need to update a key, remove the key and create a new one instead.


```js
github.repos.owner.repo.keys.key_id.delete({
  "owner": "",
  "repo": "",
  "key_id": 0
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * key_id **required** `integer`: key_id parameter

#### Output
*Output schema unknown*

### repos.owner.repo.keys.key_id.get
Get a deploy key


```js
github.repos.owner.repo.keys.key_id.get({
  "owner": "",
  "repo": "",
  "key_id": 0
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * key_id **required** `integer`: key_id parameter

#### Output
* output [deploy-key](#deploy-key)

### repos.owner.repo.labels.get
List labels for a repository


```js
github.repos.owner.repo.labels.get({
  "owner": "",
  "repo": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * per_page `integer`: Results per page (max 100)
  * page `integer`: Page number of the results to fetch.

#### Output
* output `array`
  * items [label](#label)

### repos.owner.repo.labels.post
Create a label


```js
github.repos.owner.repo.labels.post({
  "owner": "",
  "repo": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * body `object`
    * color `string`: The [hexadecimal color code](http://www.color-hex.com/) for the label, without the leading `#`.
    * description `string`: A short description of the label.
    * name **required** `string`: The name of the label. Emoji can be added to label names, using either native emoji or colon-style markup. For example, typing `:strawberry:` will render the emoji ![:strawberry:](https://github.githubassets.com/images/icons/emoji/unicode/1f353.png ":strawberry:"). For a full list of available emoji and codes, see [emoji-cheat-sheet.com](http://emoji-cheat-sheet.com/).

#### Output
* output [label](#label)

### repos.owner.repo.labels.name.delete
Delete a label


```js
github.repos.owner.repo.labels.name.delete({
  "owner": "",
  "repo": "",
  "name": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * name **required** `string`: name parameter

#### Output
*Output schema unknown*

### repos.owner.repo.labels.name.get
Get a label


```js
github.repos.owner.repo.labels.name.get({
  "owner": "",
  "repo": "",
  "name": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * name **required** `string`: name parameter

#### Output
* output [label](#label)

### repos.owner.repo.labels.name.patch
Update a label


```js
github.repos.owner.repo.labels.name.patch({
  "owner": "",
  "repo": "",
  "name": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * name **required** `string`: name parameter
  * body `object`
    * color `string`: The [hexadecimal color code](http://www.color-hex.com/) for the label, without the leading `#`.
    * description `string`: A short description of the label.
    * new_name `string`: The new name of the label. Emoji can be added to label names, using either native emoji or colon-style markup. For example, typing `:strawberry:` will render the emoji ![:strawberry:](https://github.githubassets.com/images/icons/emoji/unicode/1f353.png ":strawberry:"). For a full list of available emoji and codes, see [emoji-cheat-sheet.com](http://emoji-cheat-sheet.com/).

#### Output
* output [label](#label)

### repos.owner.repo.languages.get
Lists languages for the specified repository. The value shown for each language is the number of bytes of code written in that language.


```js
github.repos.owner.repo.languages.get({
  "owner": "",
  "repo": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`

#### Output
* output [language](#language)

### repos.owner.repo.license.get
This method returns the contents of the repository's license file, if one is detected.

Similar to [Get repository content](https://developer.github.com/v3/repos/contents/#get-repository-content), this method also supports [custom media types](https://developer.github.com/v3/repos/contents/#custom-media-types) for retrieving the raw license content or rendered license HTML.


```js
github.repos.owner.repo.license.get({
  "owner": "",
  "repo": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`

#### Output
* output [license-content](#license-content)

### repos.owner.repo.merges.post
Merge a branch


```js
github.repos.owner.repo.merges.post({
  "owner": "",
  "repo": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * body `object`
    * base **required** `string`: The name of the base branch that the head will be merged into.
    * commit_message `string`: Commit message to use for the merge commit. If omitted, a default message will be used.
    * head **required** `string`: The head to merge. This can be a branch name or a commit SHA1.

#### Output
* output [commit](#commit)

### repos.owner.repo.milestones.get
List milestones


```js
github.repos.owner.repo.milestones.get({
  "owner": "",
  "repo": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * state `string` (values: open, closed, all): The state of the milestone. Either `open`, `closed`, or `all`.
  * sort `string` (values: due_on, completeness): What to sort results by. Either `due_on` or `completeness`.
  * direction `string` (values: asc, desc): The direction of the sort. Either `asc` or `desc`.
  * per_page `integer`: Results per page (max 100)
  * page `integer`: Page number of the results to fetch.

#### Output
* output `array`
  * items [milestone](#milestone)

### repos.owner.repo.milestones.post
Create a milestone


```js
github.repos.owner.repo.milestones.post({
  "owner": "",
  "repo": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * body `object`
    * description `string`: A description of the milestone.
    * due_on `string`: The milestone due date. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
    * state `string` (values: open, closed): The state of the milestone. Either `open` or `closed`.
    * title **required** `string`: The title of the milestone.

#### Output
* output [milestone](#milestone)

### repos.owner.repo.milestones.milestone_number.delete
Delete a milestone


```js
github.repos.owner.repo.milestones.milestone_number.delete({
  "owner": "",
  "repo": "",
  "milestone_number": 0
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * milestone_number **required** `integer`: milestone_number parameter

#### Output
*Output schema unknown*

### repos.owner.repo.milestones.milestone_number.get
Get a milestone


```js
github.repos.owner.repo.milestones.milestone_number.get({
  "owner": "",
  "repo": "",
  "milestone_number": 0
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * milestone_number **required** `integer`: milestone_number parameter

#### Output
* output [milestone](#milestone)

### repos.owner.repo.milestones.milestone_number.patch
Update a milestone


```js
github.repos.owner.repo.milestones.milestone_number.patch({
  "owner": "",
  "repo": "",
  "milestone_number": 0
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * milestone_number **required** `integer`: milestone_number parameter
  * body `object`
    * description `string`: A description of the milestone.
    * due_on `string`: The milestone due date. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
    * state `string` (values: open, closed): The state of the milestone. Either `open` or `closed`.
    * title `string`: The title of the milestone.

#### Output
* output [milestone](#milestone)

### repos.owner.repo.milestones.milestone_number.labels.get
List labels for issues in a milestone


```js
github.repos.owner.repo.milestones.milestone_number.labels.get({
  "owner": "",
  "repo": "",
  "milestone_number": 0
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * milestone_number **required** `integer`: milestone_number parameter
  * per_page `integer`: Results per page (max 100)
  * page `integer`: Page number of the results to fetch.

#### Output
* output `array`
  * items [label](#label)

### repos.owner.repo.notifications.get
List all notifications for the current user.


```js
github.repos.owner.repo.notifications.get({
  "owner": "",
  "repo": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * all `boolean`: If `true`, show notifications marked as read.
  * participating `boolean`: If `true`, only shows notifications in which the user is directly participating or mentioned.
  * since `string`: Only show notifications updated after the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
  * before `string`: Only show notifications updated before the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
  * per_page `integer`: Results per page (max 100)
  * page `integer`: Page number of the results to fetch.

#### Output
* output `array`
  * items [thread](#thread)

### repos.owner.repo.notifications.put
Marks all notifications in a repository as "read" removes them from the [default view on GitHub](https://github.com/notifications). If the number of notifications is too large to complete in one request, you will receive a `202 Accepted` status and GitHub will run an asynchronous process to mark notifications as "read." To check whether any "unread" notifications remain, you can use the [List repository notifications for the authenticated user](https://developer.github.com/v3/activity/notifications/#list-repository-notifications-for-the-authenticated-user) endpoint and pass the query parameter `all=false`.


```js
github.repos.owner.repo.notifications.put({
  "owner": "",
  "repo": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * body `object`
    * last_read_at `string`: Describes the last point that notifications were checked. Anything updated since this time will not be marked as read. If you omit this parameter, all notifications are marked as read. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`. Default: The current timestamp.

#### Output
*Output schema unknown*

### repos.owner.repo.pages.delete
Delete a GitHub Pages site


```js
github.repos.owner.repo.pages.delete({
  "owner": "",
  "repo": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`

#### Output
*Output schema unknown*

### repos.owner.repo.pages.get
Get a GitHub Pages site


```js
github.repos.owner.repo.pages.get({
  "owner": "",
  "repo": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`

#### Output
* output [page](#page)

### repos.owner.repo.pages.post
Create a GitHub Pages site


```js
github.repos.owner.repo.pages.post({
  "owner": "",
  "repo": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * body `object`
    * source `object`
      * branch `string` (values: master, gh-pages): The repository branch used to publish your [site's source files](https://help.github.com/articles/configuring-a-publishing-source-for-github-pages/). Can be either `master` or `gh-pages`.
      * path `string`: The repository directory that includes the source files for the Pages site. When `branch` is `master`, you can change `path` to `/docs`. When `branch` is `gh-pages`, you are unable to specify a `path` other than `/`.

#### Output
* output [page](#page)

### repos.owner.repo.pages.put
Update information about a GitHub Pages site


```js
github.repos.owner.repo.pages.put({
  "owner": "",
  "repo": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * body `object`
    * cname `string`: Specify a custom domain for the repository. Sending a `null` value will remove the custom domain. For more about custom domains, see "[Using a custom domain with GitHub Pages](https://help.github.com/articles/using-a-custom-domain-with-github-pages/)."

#### Output
*Output schema unknown*

### repos.owner.repo.pages.builds.get
List GitHub Pages builds


```js
github.repos.owner.repo.pages.builds.get({
  "owner": "",
  "repo": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * per_page `integer`: Results per page (max 100)
  * page `integer`: Page number of the results to fetch.

#### Output
* output `array`
  * items [page-build](#page-build)

### repos.owner.repo.pages.builds.post
You can request that your site be built from the latest revision on the default branch. This has the same effect as pushing a commit to your default branch, but does not require an additional commit. Manually triggering page builds can be helpful when diagnosing build warnings and failures.

Build requests are limited to one concurrent build per repository and one concurrent build per requester. If you request a build while another is still in progress, the second request will be queued until the first completes.


```js
github.repos.owner.repo.pages.builds.post({
  "owner": "",
  "repo": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`

#### Output
* output [page-build-status](#page-build-status)

### repos.owner.repo.pages.builds.latest.get
Get latest Pages build


```js
github.repos.owner.repo.pages.builds.latest.get({
  "owner": "",
  "repo": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`

#### Output
* output [page-build](#page-build)

### repos.owner.repo.pages.builds.build_id.get
Get GitHub Pages build


```js
github.repos.owner.repo.pages.builds.build_id.get({
  "owner": "",
  "repo": "",
  "build_id": 0
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * build_id **required** `integer`: build_id parameter

#### Output
* output [page-build](#page-build)

### repos.owner.repo.projects.get
Lists the projects in a repository. Returns a `404 Not Found` status if projects are disabled in the repository. If you do not have sufficient privileges to perform this action, a `401 Unauthorized` or `410 Gone` status is returned.


```js
github.repos.owner.repo.projects.get({
  "owner": "",
  "repo": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * state `string` (values: open, closed, all): Indicates the state of the projects to return. Can be either `open`, `closed`, or `all`.
  * per_page `integer`: Results per page (max 100)
  * page `integer`: Page number of the results to fetch.

#### Output
* output `array`
  * items [project](#project)

### repos.owner.repo.projects.post
Creates a repository project board. Returns a `404 Not Found` status if projects are disabled in the repository. If you do not have sufficient privileges to perform this action, a `401 Unauthorized` or `410 Gone` status is returned.


```js
github.repos.owner.repo.projects.post({
  "owner": "",
  "repo": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * body `object`
    * body `string`: The description of the project.
    * name **required** `string`: The name of the project.

#### Output
* output [project](#project)

### repos.owner.repo.pulls.get
Draft pull requests are available in public repositories with GitHub Free and GitHub Free for organizations, GitHub Pro, and legacy per-repository billing plans, and in public and private repositories with GitHub Team and GitHub Enterprise Cloud. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.


```js
github.repos.owner.repo.pulls.get({
  "owner": "",
  "repo": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * state `string` (values: open, closed, all): Either `open`, `closed`, or `all` to filter by state.
  * head `string`: Filter pulls by head user or head organization and branch name in the format of `user:ref-name` or `organization:ref-name`. For example: `github:new-script-format` or `octocat:test-branch`.
  * base `string`: Filter pulls by base branch name. Example: `gh-pages`.
  * sort `string` (values: created, updated, popularity, long-running): What to sort results by. Can be either `created`, `updated`, `popularity` (comment count) or `long-running` (age, filtering by pulls updated in the last month).
  * direction `string` (values: asc, desc): The direction of the sort. Can be either `asc` or `desc`. Default: `desc` when sort is `created` or sort is not specified, otherwise `asc`.
  * per_page `integer`: Results per page (max 100)
  * page `integer`: Page number of the results to fetch.

#### Output
* output `array`
  * items [pull-request-simple](#pull-request-simple)

### repos.owner.repo.pulls.post
Draft pull requests are available in public repositories with GitHub Free and GitHub Free for organizations, GitHub Pro, and legacy per-repository billing plans, and in public and private repositories with GitHub Team and GitHub Enterprise Cloud. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

To open or update a pull request in a public repository, you must have write access to the head or the source branch. For organization-owned repositories, you must be a member of the organization that owns the repository to open or update a pull request.

You can create a new pull request.

This endpoint triggers [notifications](https://help.github.com/articles/about-notifications/). Creating content too quickly using this endpoint may result in abuse rate limiting. See "[Abuse rate limits](https://developer.github.com/v3/#abuse-rate-limits)" and "[Dealing with abuse rate limits](https://developer.github.com/v3/guides/best-practices-for-integrators/#dealing-with-abuse-rate-limits)" for details.


```js
github.repos.owner.repo.pulls.post({
  "owner": "",
  "repo": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * body `object`
    * base **required** `string`: The name of the branch you want the changes pulled into. This should be an existing branch on the current repository. You cannot submit a pull request to one repository that requests a merge to a base of another repository.
    * body `string`: The contents of the pull request.
    * draft `boolean`: Indicates whether the pull request is a draft. See "[Draft Pull Requests](https://help.github.com/en/articles/about-pull-requests#draft-pull-requests)" in the GitHub Help documentation to learn more.
    * head **required** `string`: The name of the branch where your changes are implemented. For cross-repository pull requests in the same network, namespace `head` with a user like this: `username:branch`.
    * issue `integer`
    * maintainer_can_modify `boolean`: Indicates whether [maintainers can modify](https://help.github.com/articles/allowing-changes-to-a-pull-request-branch-created-from-a-fork/) the pull request.
    * title `string`: The title of the new pull request.

#### Output
* output [pull-request](#pull-request)

### repos.owner.repo.pulls.comments.get
**Note:** Multi-line comments on pull requests are currently in public beta and subject to change.

Lists review comments for all pull requests in a repository. By default, review comments are in ascending order by ID.

**Multi-line comment summary**

**Note:** New parameters and response fields are available for developers to preview. During the preview period, these response fields may change without advance notice. Please see the [blog post](https://developer.github.com/changes/2019-10-03-multi-line-comments) for full details.

Use the `comfort-fade` preview header and the `line` parameter to show multi-line comment-supported fields in the response.

If you use the `comfort-fade` preview header, your response will show:

*   For multi-line comments, values for `start_line`, `original_start_line`, `start_side`, `line`, `original_line`, and `side`.
*   For single-line comments, values for `line`, `original_line`, and `side` and a `null` value for `start_line`, `original_start_line`, and `start_side`.

If you don't use the `comfort-fade` preview header, multi-line and single-line comments will appear the same way in the response with a single `position` attribute. Your response will show:

*   For multi-line comments, the last line of the comment range for the `position` attribute.
*   For single-line comments, the diff-positioned way of referencing comments for the `position` attribute. For more information, see `position` in the [input parameters](https://developer.github.com/v3/pulls/comments/#parameters-2) table.

The `reactions` key will have the following payload where `url` can be used to construct the API location for [listing and creating](https://developer.github.com/v3/reactions) reactions.


```js
github.repos.owner.repo.pulls.comments.get({
  "owner": "",
  "repo": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * sort `string` (values: created, updated): One of `created` (when the repository was starred) or `updated` (when it was last pushed to).
  * direction `string` (values: asc, desc): Can be either `asc` or `desc`. Ignored without `sort` parameter.
  * since `string`: Only show notifications updated after the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
  * per_page `integer`: Results per page (max 100)
  * page `integer`: Page number of the results to fetch.

#### Output
* output `array`
  * items [pull-request-review-comment](#pull-request-review-comment)

### repos.owner.repo.pulls.comments.comment_id.delete
Deletes a review comment.


```js
github.repos.owner.repo.pulls.comments.comment_id.delete({
  "owner": "",
  "repo": "",
  "comment_id": 0
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * comment_id **required** `integer`: comment_id parameter

#### Output
*Output schema unknown*

### repos.owner.repo.pulls.comments.comment_id.get
**Note:** Multi-line comments on pull requests are currently in public beta and subject to change.

Provides details for a review comment.

**Multi-line comment summary**

**Note:** New parameters and response fields are available for developers to preview. During the preview period, these response fields may change without advance notice. Please see the [blog post](https://developer.github.com/changes/2019-10-03-multi-line-comments) for full details.

Use the `comfort-fade` preview header and the `line` parameter to show multi-line comment-supported fields in the response.

If you use the `comfort-fade` preview header, your response will show:

*   For multi-line comments, values for `start_line`, `original_start_line`, `start_side`, `line`, `original_line`, and `side`.
*   For single-line comments, values for `line`, `original_line`, and `side` and a `null` value for `start_line`, `original_start_line`, and `start_side`.

If you don't use the `comfort-fade` preview header, multi-line and single-line comments will appear the same way in the response with a single `position` attribute. Your response will show:

*   For multi-line comments, the last line of the comment range for the `position` attribute.
*   For single-line comments, the diff-positioned way of referencing comments for the `position` attribute. For more information, see `position` in the [input parameters](https://developer.github.com/v3/pulls/comments/#parameters-2) table.

The `reactions` key will have the following payload where `url` can be used to construct the API location for [listing and creating](https://developer.github.com/v3/reactions) reactions.


```js
github.repos.owner.repo.pulls.comments.comment_id.get({
  "owner": "",
  "repo": "",
  "comment_id": 0
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * comment_id **required** `integer`: comment_id parameter

#### Output
* output [pull-request-review-comment](#pull-request-review-comment)

### repos.owner.repo.pulls.comments.comment_id.patch
**Note:** Multi-line comments on pull requests are currently in public beta and subject to change.

Enables you to edit a review comment.

**Multi-line comment summary**

**Note:** New parameters and response fields are available for developers to preview. During the preview period, these response fields may change without advance notice. Please see the [blog post](https://developer.github.com/changes/2019-10-03-multi-line-comments) for full details.

Use the `comfort-fade` preview header and the `line` parameter to show multi-line comment-supported fields in the response.

If you use the `comfort-fade` preview header, your response will show:

*   For multi-line comments, values for `start_line`, `original_start_line`, `start_side`, `line`, `original_line`, and `side`.
*   For single-line comments, values for `line`, `original_line`, and `side` and a `null` value for `start_line`, `original_start_line`, and `start_side`.

If you don't use the `comfort-fade` preview header, multi-line and single-line comments will appear the same way in the response with a single `position` attribute. Your response will show:

*   For multi-line comments, the last line of the comment range for the `position` attribute.
*   For single-line comments, the diff-positioned way of referencing comments for the `position` attribute. For more information, see `position` in the [input parameters](https://developer.github.com/v3/pulls/comments/#parameters-2) table.


```js
github.repos.owner.repo.pulls.comments.comment_id.patch({
  "owner": "",
  "repo": "",
  "comment_id": 0
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * comment_id **required** `integer`: comment_id parameter
  * body `object`
    * body **required** `string`: The text of the reply to the review comment.

#### Output
* output [pull-request-review-comment](#pull-request-review-comment)

### repos.owner.repo.pulls.comments.comment_id.reactions.get
List the reactions to a [pull request review comment](https://developer.github.com/v3/pulls/comments/).


```js
github.repos.owner.repo.pulls.comments.comment_id.reactions.get({
  "owner": "",
  "repo": "",
  "comment_id": 0
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * comment_id **required** `integer`: comment_id parameter
  * content `string` (values: +1, -1, laugh, confused, heart, hooray, rocket, eyes): Returns a single [reaction type](https://developer.github.com/v3/reactions/#reaction-types). Omit this parameter to list all reactions to a pull request review comment.
  * per_page `integer`: Results per page (max 100)
  * page `integer`: Page number of the results to fetch.

#### Output
* output `array`
  * items [reaction](#reaction)

### repos.owner.repo.pulls.comments.comment_id.reactions.post
Create a reaction to a [pull request review comment](https://developer.github.com/v3/pulls/comments/). A response with a `Status: 200 OK` means that you already added the reaction type to this pull request review comment.


```js
github.repos.owner.repo.pulls.comments.comment_id.reactions.post({
  "owner": "",
  "repo": "",
  "comment_id": 0
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * comment_id **required** `integer`: comment_id parameter
  * body `object`
    * content **required** `string` (values: +1, -1, laugh, confused, heart, hooray, rocket, eyes): The [reaction type](https://developer.github.com/v3/reactions/#reaction-types) to add to the pull request review comment.

#### Output
* output [reaction](#reaction)

### repos.owner.repo.pulls.comments.comment_id.reactions.reaction_id.delete
**Note:** You can also specify a repository by `repository_id` using the route `DELETE /repositories/:repository_id/pulls/comments/:comment_id/reactions/:reaction_id.`

Delete a reaction to a [pull request review comment](https://developer.github.com/v3/pulls/comments/).


```js
github.repos.owner.repo.pulls.comments.comment_id.reactions.reaction_id.delete({
  "owner": "",
  "repo": "",
  "comment_id": 0,
  "reaction_id": 0
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * comment_id **required** `integer`: comment_id parameter
  * reaction_id **required** `integer`

#### Output
*Output schema unknown*

### repos.owner.repo.pulls.pull_number.get
Draft pull requests are available in public repositories with GitHub Free and GitHub Free for organizations, GitHub Pro, and legacy per-repository billing plans, and in public and private repositories with GitHub Team and GitHub Enterprise Cloud. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

Lists details of a pull request by providing its number.

When you get, [create](https://developer.github.com/v3/pulls/#create-a-pull-request), or [edit](https://developer.github.com/v3/pulls/#update-a-pull-request) a pull request, GitHub creates a merge commit to test whether the pull request can be automatically merged into the base branch. This test commit is not added to the base branch or the head branch. You can review the status of the test commit using the `mergeable` key. For more information, see "[Checking mergeability of pull requests](https://developer.github.com/v3/git/#checking-mergeability-of-pull-requests)".

The value of the `mergeable` attribute can be `true`, `false`, or `null`. If the value is `null`, then GitHub has started a background job to compute the mergeability. After giving the job time to complete, resubmit the request. When the job finishes, you will see a non-`null` value for the `mergeable` attribute in the response. If `mergeable` is `true`, then `merge_commit_sha` will be the SHA of the _test_ merge commit.

The value of the `merge_commit_sha` attribute changes depending on the state of the pull request. Before merging a pull request, the `merge_commit_sha` attribute holds the SHA of the _test_ merge commit. After merging a pull request, the `merge_commit_sha` attribute changes depending on how you merged the pull request:

*   If merged as a [merge commit](https://help.github.com/articles/about-merge-methods-on-github/), `merge_commit_sha` represents the SHA of the merge commit.
*   If merged via a [squash](https://help.github.com/articles/about-merge-methods-on-github/#squashing-your-merge-commits), `merge_commit_sha` represents the SHA of the squashed commit on the base branch.
*   If [rebased](https://help.github.com/articles/about-merge-methods-on-github/#rebasing-and-merging-your-commits), `merge_commit_sha` represents the commit that the base branch was updated to.

Pass the appropriate [media type](https://developer.github.com/v3/media/#commits-commit-comparison-and-pull-requests) to fetch diff and patch formats.


```js
github.repos.owner.repo.pulls.pull_number.get({
  "owner": "",
  "repo": "",
  "pull_number": 0
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * pull_number **required** `integer`

#### Output
* output [pull-request](#pull-request)

### repos.owner.repo.pulls.pull_number.patch
Draft pull requests are available in public repositories with GitHub Free and GitHub Free for organizations, GitHub Pro, and legacy per-repository billing plans, and in public and private repositories with GitHub Team and GitHub Enterprise Cloud. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

To open or update a pull request in a public repository, you must have write access to the head or the source branch. For organization-owned repositories, you must be a member of the organization that owns the repository to open or update a pull request.


```js
github.repos.owner.repo.pulls.pull_number.patch({
  "owner": "",
  "repo": "",
  "pull_number": 0
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * pull_number **required** `integer`
  * body `object`
    * base `string`: The name of the branch you want your changes pulled into. This should be an existing branch on the current repository. You cannot update the base branch on a pull request to point to another repository.
    * body `string`: The contents of the pull request.
    * maintainer_can_modify `boolean`: Indicates whether [maintainers can modify](https://help.github.com/articles/allowing-changes-to-a-pull-request-branch-created-from-a-fork/) the pull request.
    * state `string` (values: open, closed): State of this Pull Request. Either `open` or `closed`.
    * title `string`: The title of the pull request.

#### Output
* output [pull-request](#pull-request)

### repos.owner.repo.pulls.pull_number.comments.get
**Note:** Multi-line comments on pull requests are currently in public beta and subject to change.

Lists all review comments for a pull request. By default, review comments are in ascending order by ID.

**Multi-line comment summary**

**Note:** New parameters and response fields are available for developers to preview. During the preview period, these response fields may change without advance notice. Please see the [blog post](https://developer.github.com/changes/2019-10-03-multi-line-comments) for full details.

Use the `comfort-fade` preview header and the `line` parameter to show multi-line comment-supported fields in the response.

If you use the `comfort-fade` preview header, your response will show:

*   For multi-line comments, values for `start_line`, `original_start_line`, `start_side`, `line`, `original_line`, and `side`.
*   For single-line comments, values for `line`, `original_line`, and `side` and a `null` value for `start_line`, `original_start_line`, and `start_side`.

If you don't use the `comfort-fade` preview header, multi-line and single-line comments will appear the same way in the response with a single `position` attribute. Your response will show:

*   For multi-line comments, the last line of the comment range for the `position` attribute.
*   For single-line comments, the diff-positioned way of referencing comments for the `position` attribute. For more information, see `position` in the [input parameters](https://developer.github.com/v3/pulls/comments/#parameters-2) table.

The `reactions` key will have the following payload where `url` can be used to construct the API location for [listing and creating](https://developer.github.com/v3/reactions) reactions.


```js
github.repos.owner.repo.pulls.pull_number.comments.get({
  "owner": "",
  "repo": "",
  "pull_number": 0
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * pull_number **required** `integer`
  * sort `string` (values: created, updated): One of `created` (when the repository was starred) or `updated` (when it was last pushed to).
  * direction `string` (values: asc, desc): Can be either `asc` or `desc`. Ignored without `sort` parameter.
  * since `string`: Only show notifications updated after the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
  * per_page `integer`: Results per page (max 100)
  * page `integer`: Page number of the results to fetch.

#### Output
* output `array`
  * items [pull-request-review-comment](#pull-request-review-comment)

### repos.owner.repo.pulls.pull_number.comments.post
**Note:** Multi-line comments on pull requests are currently in public beta and subject to change.

Creates a review comment in the pull request diff. To add a regular comment to a pull request timeline, see "[Create an issue comment](https://developer.github.com/v3/issues/comments/#create-an-issue-comment)." We recommend creating a review comment using `line`, `side`, and optionally `start_line` and `start_side` if your comment applies to more than one line in the pull request diff.

You can still create a review comment using the `position` parameter. When you use `position`, the `line`, `side`, `start_line`, and `start_side` parameters are not required. For more information, see [Multi-line comment summary](https://developer.github.com/v3/pulls/comments/#multi-line-comment-summary-3).

**Note:** The position value equals the number of lines down from the first "@@" hunk header in the file you want to add a comment. The line just below the "@@" line is position 1, the next line is position 2, and so on. The position in the diff continues to increase through lines of whitespace and additional hunks until the beginning of a new file.

This endpoint triggers [notifications](https://help.github.com/articles/about-notifications/). Creating content too quickly using this endpoint may result in abuse rate limiting. See "[Abuse rate limits](https://developer.github.com/v3/#abuse-rate-limits)" and "[Dealing with abuse rate limits](https://developer.github.com/v3/guides/best-practices-for-integrators/#dealing-with-abuse-rate-limits)" for details.

**Multi-line comment summary**

**Note:** New parameters and response fields are available for developers to preview. During the preview period, these response fields may change without advance notice. Please see the [blog post](https://developer.github.com/changes/2019-10-03-multi-line-comments) for full details.

Use the `comfort-fade` preview header and the `line` parameter to show multi-line comment-supported fields in the response.

If you use the `comfort-fade` preview header, your response will show:

*   For multi-line comments, values for `start_line`, `original_start_line`, `start_side`, `line`, `original_line`, and `side`.
*   For single-line comments, values for `line`, `original_line`, and `side` and a `null` value for `start_line`, `original_start_line`, and `start_side`.

If you don't use the `comfort-fade` preview header, multi-line and single-line comments will appear the same way in the response with a single `position` attribute. Your response will show:

*   For multi-line comments, the last line of the comment range for the `position` attribute.
*   For single-line comments, the diff-positioned way of referencing comments for the `position` attribute. For more information, see `position` in the [input parameters](https://developer.github.com/v3/pulls/comments/#parameters-2) table.


```js
github.repos.owner.repo.pulls.pull_number.comments.post({
  "owner": "",
  "repo": "",
  "pull_number": 0
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * pull_number **required** `integer`
  * body `object`
    * body **required** `string`: The text of the review comment.
    * commit_id `string`: The SHA of the commit needing a comment. Not using the latest commit SHA may render your comment outdated if a subsequent commit modifies the line you specify as the `position`.
    * in_reply_to `integer`
    * line `integer`: **Required with `comfort-fade` preview**. The line of the blob in the pull request diff that the comment applies to. For a multi-line comment, the last line of the range that your comment applies to.
    * path **required** `string`: The relative path to the file that necessitates a comment.
    * position `integer`: **Required without `comfort-fade` preview**. The position in the diff where you want to add a review comment. Note this value is not the same as the line number in the file. For help finding the position value, read the note above.
    * side `string` (values: LEFT, RIGHT): **Required with `comfort-fade` preview**. In a split diff view, the side of the diff that the pull request's changes appear on. Can be `LEFT` or `RIGHT`. Use `LEFT` for deletions that appear in red. Use `RIGHT` for additions that appear in green or unchanged lines that appear in white and are shown for context. For a multi-line comment, side represents whether the last line of the comment range is a deletion or addition. For more information, see "[Diff view options](https://help.github.com/en/articles/about-comparing-branches-in-pull-requests#diff-view-options)" in the GitHub Help documentation.
    * start_line `integer`: **Required when using multi-line comments**. To create multi-line comments, you must use the `comfort-fade` preview header. The `start_line` is the first line in the pull request diff that your multi-line comment applies to. To learn more about multi-line comments, see "[Commenting on a pull request](https://help.github.com/en/articles/commenting-on-a-pull-request#adding-line-comments-to-a-pull-request)" in the GitHub Help documentation.
    * start_side `string` (values: LEFT, RIGHT, side): **Required when using multi-line comments**. To create multi-line comments, you must use the `comfort-fade` preview header. The `start_side` is the starting side of the diff that the comment applies to. Can be `LEFT` or `RIGHT`. To learn more about multi-line comments, see "[Commenting on a pull request](https://help.github.com/en/articles/commenting-on-a-pull-request#adding-line-comments-to-a-pull-request)" in the GitHub Help documentation. See `side` in this table for additional context.

#### Output
* output [pull-request-review-comment](#pull-request-review-comment)

### repos.owner.repo.pulls.pull_number.comments.comment_id.replies.post
Creates a reply to a review comment for a pull request. For the `comment_id`, provide the ID of the review comment you are replying to. This must be the ID of a _top-level review comment_, not a reply to that comment. Replies to replies are not supported.

This endpoint triggers [notifications](https://help.github.com/articles/about-notifications/). Creating content too quickly using this endpoint may result in abuse rate limiting. See "[Abuse rate limits](https://developer.github.com/v3/#abuse-rate-limits)" and "[Dealing with abuse rate limits](https://developer.github.com/v3/guides/best-practices-for-integrators/#dealing-with-abuse-rate-limits)" for details.


```js
github.repos.owner.repo.pulls.pull_number.comments.comment_id.replies.post({
  "owner": "",
  "repo": "",
  "pull_number": 0,
  "comment_id": 0
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * pull_number **required** `integer`
  * comment_id **required** `integer`: comment_id parameter
  * body `object`
    * body **required** `string`: The text of the review comment.

#### Output
* output [pull-request-review-comment](#pull-request-review-comment)

### repos.owner.repo.pulls.pull_number.commits.get
Lists a maximum of 250 commits for a pull request. To receive a complete commit list for pull requests with more than 250 commits, use the [List commits](https://developer.github.com/v3/repos/commits/#list-commits) endpoint.


```js
github.repos.owner.repo.pulls.pull_number.commits.get({
  "owner": "",
  "repo": "",
  "pull_number": 0
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * pull_number **required** `integer`
  * per_page `integer`: Results per page (max 100)
  * page `integer`: Page number of the results to fetch.

#### Output
* output `array`
  * items [simple-commit](#simple-commit)

### repos.owner.repo.pulls.pull_number.files.get
**Note:** Responses include a maximum of 3000 files. The paginated response returns 30 files per page by default.


```js
github.repos.owner.repo.pulls.pull_number.files.get({
  "owner": "",
  "repo": "",
  "pull_number": 0
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * pull_number **required** `integer`
  * per_page `integer`: Results per page (max 100)
  * page `integer`: Page number of the results to fetch.

#### Output
* output `array`
  * items [diff-entry](#diff-entry)

### repos.owner.repo.pulls.pull_number.merge.get
Check if a pull request has been merged


```js
github.repos.owner.repo.pulls.pull_number.merge.get({
  "owner": "",
  "repo": "",
  "pull_number": 0
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * pull_number **required** `integer`

#### Output
*Output schema unknown*

### repos.owner.repo.pulls.pull_number.merge.put
This endpoint triggers [notifications](https://help.github.com/articles/about-notifications/). Creating content too quickly using this endpoint may result in abuse rate limiting. See "[Abuse rate limits](https://developer.github.com/v3/#abuse-rate-limits)" and "[Dealing with abuse rate limits](https://developer.github.com/v3/guides/best-practices-for-integrators/#dealing-with-abuse-rate-limits)" for details.


```js
github.repos.owner.repo.pulls.pull_number.merge.put({
  "owner": "",
  "repo": "",
  "pull_number": 0
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * pull_number **required** `integer`
  * body `object`
    * commit_message `string`: Extra detail to append to automatic commit message.
    * commit_title `string`: Title for the automatic commit message.
    * merge_method `string` (values: merge, squash, rebase): Merge method to use. Possible values are `merge`, `squash` or `rebase`. Default is `merge`.
    * sha `string`: SHA that pull request head must match to allow merge.

#### Output
* output [pull-request-merge-result](#pull-request-merge-result)

### repos.owner.repo.pulls.pull_number.requested_reviewers.delete
Remove requested reviewers from a pull request


```js
github.repos.owner.repo.pulls.pull_number.requested_reviewers.delete({
  "owner": "",
  "repo": "",
  "pull_number": 0
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * pull_number **required** `integer`
  * body `object`
    * reviewers `array`: An array of user `login`s that will be removed.
      * items `string`
    * team_reviewers `array`: An array of team `slug`s that will be removed.
      * items `string`

#### Output
*Output schema unknown*

### repos.owner.repo.pulls.pull_number.requested_reviewers.get
List requested reviewers for a pull request


```js
github.repos.owner.repo.pulls.pull_number.requested_reviewers.get({
  "owner": "",
  "repo": "",
  "pull_number": 0
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * pull_number **required** `integer`
  * per_page `integer`: Results per page (max 100)
  * page `integer`: Page number of the results to fetch.

#### Output
* output [pull-request-review-request](#pull-request-review-request)

### repos.owner.repo.pulls.pull_number.requested_reviewers.post
This endpoint triggers [notifications](https://help.github.com/articles/about-notifications/). Creating content too quickly using this endpoint may result in abuse rate limiting. See "[Abuse rate limits](https://developer.github.com/v3/#abuse-rate-limits)" and "[Dealing with abuse rate limits](https://developer.github.com/v3/guides/best-practices-for-integrators/#dealing-with-abuse-rate-limits)" for details.


```js
github.repos.owner.repo.pulls.pull_number.requested_reviewers.post({
  "owner": "",
  "repo": "",
  "pull_number": 0
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * pull_number **required** `integer`
  * body `object`
    * reviewers `array`: An array of user `login`s that will be requested.
      * items `string`
    * team_reviewers `array`: An array of team `slug`s that will be requested.
      * items `string`

#### Output
* output [pull-request-simple](#pull-request-simple)

### repos.owner.repo.pulls.pull_number.reviews.get
The list of reviews returns in chronological order.


```js
github.repos.owner.repo.pulls.pull_number.reviews.get({
  "owner": "",
  "repo": "",
  "pull_number": 0
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * pull_number **required** `integer`
  * per_page `integer`: Results per page (max 100)
  * page `integer`: Page number of the results to fetch.

#### Output
* output `array`
  * items [pull-request-review](#pull-request-review)

### repos.owner.repo.pulls.pull_number.reviews.post
This endpoint triggers [notifications](https://help.github.com/articles/about-notifications/). Creating content too quickly using this endpoint may result in abuse rate limiting. See "[Abuse rate limits](https://developer.github.com/v3/#abuse-rate-limits)" and "[Dealing with abuse rate limits](https://developer.github.com/v3/guides/best-practices-for-integrators/#dealing-with-abuse-rate-limits)" for details.

Pull request reviews created in the `PENDING` state do not include the `submitted_at` property in the response.

**Note:** To comment on a specific line in a file, you need to first determine the _position_ of that line in the diff. The GitHub REST API v3 offers the `application/vnd.github.v3.diff` [media type](https://developer.github.com/v3/media/#commits-commit-comparison-and-pull-requests). To see a pull request diff, add this media type to the `Accept` header of a call to the [single pull request](https://developer.github.com/v3/pulls/#get-a-pull-request) endpoint.

The `position` value equals the number of lines down from the first "@@" hunk header in the file you want to add a comment. The line just below the "@@" line is position 1, the next line is position 2, and so on. The position in the diff continues to increase through lines of whitespace and additional hunks until the beginning of a new file.


```js
github.repos.owner.repo.pulls.pull_number.reviews.post({
  "owner": "",
  "repo": "",
  "pull_number": 0
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * pull_number **required** `integer`
  * body `object`
    * body `string`: **Required** when using `REQUEST_CHANGES` or `COMMENT` for the `event` parameter. The body text of the pull request review.
    * comments `array`: Use the following table to specify the location, destination, and contents of the draft review comment.
      * items `object`
        * body **required** `string`: Text of the review comment.
        * line `integer`
        * path **required** `string`: The relative path to the file that necessitates a review comment.
        * position `integer`: The position in the diff where you want to add a review comment. Note this value is not the same as the line number in the file. For help finding the position value, read the note below.
        * side `string`
        * start_line `integer`
        * start_side `string`
    * commit_id `string`: The SHA of the commit that needs a review. Not using the latest commit SHA may render your review comment outdated if a subsequent commit modifies the line you specify as the `position`. Defaults to the most recent commit in the pull request when you do not specify a value.
    * event `string` (values: APPROVE, REQUEST_CHANGES, COMMENT): The review action you want to perform. The review actions include: `APPROVE`, `REQUEST_CHANGES`, or `COMMENT`. By leaving this blank, you set the review action state to `PENDING`, which means you will need to [submit the pull request review](https://developer.github.com/v3/pulls/reviews/#submit-a-review-for-a-pull-request) when you are ready.

#### Output
* output [pull-request-review](#pull-request-review)

### repos.owner.repo.pulls.pull_number.reviews.review_id.delete
Delete a pending review for a pull request


```js
github.repos.owner.repo.pulls.pull_number.reviews.review_id.delete({
  "owner": "",
  "repo": "",
  "pull_number": 0,
  "review_id": 0
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * pull_number **required** `integer`
  * review_id **required** `integer`: review_id parameter

#### Output
* output [pull-request-review](#pull-request-review)

### repos.owner.repo.pulls.pull_number.reviews.review_id.get
Get a review for a pull request


```js
github.repos.owner.repo.pulls.pull_number.reviews.review_id.get({
  "owner": "",
  "repo": "",
  "pull_number": 0,
  "review_id": 0
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * pull_number **required** `integer`
  * review_id **required** `integer`: review_id parameter

#### Output
* output [pull-request-review](#pull-request-review)

### repos.owner.repo.pulls.pull_number.reviews.review_id.put
Update the review summary comment with new text.


```js
github.repos.owner.repo.pulls.pull_number.reviews.review_id.put({
  "owner": "",
  "repo": "",
  "pull_number": 0,
  "review_id": 0
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * pull_number **required** `integer`
  * review_id **required** `integer`: review_id parameter
  * body `object`
    * body **required** `string`: The body text of the pull request review.

#### Output
* output [pull-request-review](#pull-request-review)

### repos.owner.repo.pulls.pull_number.reviews.review_id.comments.get
List comments for a specific pull request review.


```js
github.repos.owner.repo.pulls.pull_number.reviews.review_id.comments.get({
  "owner": "",
  "repo": "",
  "pull_number": 0,
  "review_id": 0
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * pull_number **required** `integer`
  * review_id **required** `integer`: review_id parameter
  * per_page `integer`: Results per page (max 100)
  * page `integer`: Page number of the results to fetch.

#### Output
* output `array`
  * items [review-comment](#review-comment)

### repos.owner.repo.pulls.pull_number.reviews.review_id.dismissals.put
**Note:** To dismiss a pull request review on a [protected branch](https://developer.github.com/v3/repos/branches/), you must be a repository administrator or be included in the list of people or teams who can dismiss pull request reviews.


```js
github.repos.owner.repo.pulls.pull_number.reviews.review_id.dismissals.put({
  "owner": "",
  "repo": "",
  "pull_number": 0,
  "review_id": 0
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * pull_number **required** `integer`
  * review_id **required** `integer`: review_id parameter
  * body `object`
    * event `string`
    * message **required** `string`: The message for the pull request review dismissal

#### Output
* output [pull-request-review](#pull-request-review)

### repos.owner.repo.pulls.pull_number.reviews.review_id.events.post
Submit a review for a pull request


```js
github.repos.owner.repo.pulls.pull_number.reviews.review_id.events.post({
  "owner": "",
  "repo": "",
  "pull_number": 0,
  "review_id": 0
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * pull_number **required** `integer`
  * review_id **required** `integer`: review_id parameter
  * body `object`
    * body `string`: The body text of the pull request review
    * event **required** `string` (values: APPROVE, REQUEST_CHANGES, COMMENT): The review action you want to perform. The review actions include: `APPROVE`, `REQUEST_CHANGES`, or `COMMENT`. When you leave this blank, the API returns _HTTP 422 (Unrecognizable entity)_ and sets the review action state to `PENDING`, which means you will need to re-submit the pull request review using a review action.

#### Output
* output [pull-request-review](#pull-request-review)

### repos.owner.repo.pulls.pull_number.update_branch.put
Updates the pull request branch with the latest upstream changes by merging HEAD from the base branch into the pull request branch.


```js
github.repos.owner.repo.pulls.pull_number.update_branch.put({
  "owner": "",
  "repo": "",
  "pull_number": 0
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * pull_number **required** `integer`
  * body `object`
    * expected_head_sha `string`: The expected SHA of the pull request's HEAD ref. This is the most recent commit on the pull request's branch. If the expected SHA does not match the pull request's HEAD, you will receive a `422 Unprocessable Entity` status. You can use the "[List commits](https://developer.github.com/v3/repos/commits/#list-commits)" endpoint to find the most recent commit SHA. Default: SHA of the pull request's current HEAD ref.

#### Output
* output `object`
  * message `string`
  * url `string`

### repos.owner.repo.readme.get
Gets the preferred README for a repository.

READMEs support [custom media types](https://developer.github.com/v3/repos/contents/#custom-media-types) for retrieving the raw content or rendered HTML.


```js
github.repos.owner.repo.readme.get({
  "owner": "",
  "repo": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * ref `string`: The name of the commit/branch/tag. Default: the repository’s default branch (usually `master`)

#### Output
* output [content-file](#content-file)

### repos.owner.repo.releases.get
This returns a list of releases, which does not include regular Git tags that have not been associated with a release. To get a list of Git tags, use the [Repository Tags API](https://developer.github.com/v3/repos/#list-repository-tags).

Information about published releases are available to everyone. Only users with push access will receive listings for draft releases.


```js
github.repos.owner.repo.releases.get({
  "owner": "",
  "repo": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * per_page `integer`: Results per page (max 100)
  * page `integer`: Page number of the results to fetch.

#### Output
* output `array`
  * items [release](#release)

### repos.owner.repo.releases.post
Users with push access to the repository can create a release.

This endpoint triggers [notifications](https://help.github.com/articles/about-notifications/). Creating content too quickly using this endpoint may result in abuse rate limiting. See "[Abuse rate limits](https://developer.github.com/v3/#abuse-rate-limits)" and "[Dealing with abuse rate limits](https://developer.github.com/v3/guides/best-practices-for-integrators/#dealing-with-abuse-rate-limits)" for details.


```js
github.repos.owner.repo.releases.post({
  "owner": "",
  "repo": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * body `object`
    * body `string`: Text describing the contents of the tag.
    * draft `boolean`: `true` to create a draft (unpublished) release, `false` to create a published one.
    * name `string`: The name of the release.
    * prerelease `boolean`: `true` to identify the release as a prerelease. `false` to identify the release as a full release.
    * tag_name **required** `string`: The name of the tag.
    * target_commitish `string`: Specifies the commitish value that determines where the Git tag is created from. Can be any branch or commit SHA. Unused if the Git tag already exists. Default: the repository's default branch (usually `master`).

#### Output
* output [release](#release)

### repos.owner.repo.releases.assets.asset_id.delete
Delete a release asset


```js
github.repos.owner.repo.releases.assets.asset_id.delete({
  "owner": "",
  "repo": "",
  "asset_id": 0
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * asset_id **required** `integer`: asset_id parameter

#### Output
*Output schema unknown*

### repos.owner.repo.releases.assets.asset_id.get
To download the asset's binary content, set the `Accept` header of the request to [`application/octet-stream`](https://developer.github.com/v3/media/#media-types). The API will either redirect the client to the location, or stream it directly if possible. API clients should handle both a `200` or `302` response.


```js
github.repos.owner.repo.releases.assets.asset_id.get({
  "owner": "",
  "repo": "",
  "asset_id": 0
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * asset_id **required** `integer`: asset_id parameter

#### Output
* output [release-asset](#release-asset)

### repos.owner.repo.releases.assets.asset_id.patch
Users with push access to the repository can edit a release asset.


```js
github.repos.owner.repo.releases.assets.asset_id.patch({
  "owner": "",
  "repo": "",
  "asset_id": 0
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * asset_id **required** `integer`: asset_id parameter
  * body `object`
    * label `string`: An alternate short description of the asset. Used in place of the filename.
    * name `string`: The file name of the asset.
    * state `string`

#### Output
* output [release-asset](#release-asset)

### repos.owner.repo.releases.latest.get
View the latest published full release for the repository.

The latest release is the most recent non-prerelease, non-draft release, sorted by the `created_at` attribute. The `created_at` attribute is the date of the commit used for the release, and not the date when the release was drafted or published.


```js
github.repos.owner.repo.releases.latest.get({
  "owner": "",
  "repo": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`

#### Output
* output [release](#release)

### repos.owner.repo.releases.tags.tag.get
Get a published release with the specified tag.


```js
github.repos.owner.repo.releases.tags.tag.get({
  "owner": "",
  "repo": "",
  "tag": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * tag **required** `string`: tag+ parameter

#### Output
* output [release](#release)

### repos.owner.repo.releases.release_id.delete
Users with push access to the repository can delete a release.


```js
github.repos.owner.repo.releases.release_id.delete({
  "owner": "",
  "repo": "",
  "release_id": 0
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * release_id **required** `integer`: release_id parameter

#### Output
*Output schema unknown*

### repos.owner.repo.releases.release_id.get
**Note:** This returns an `upload_url` key corresponding to the endpoint for uploading release assets. This key is a [hypermedia resource](https://developer.github.com/v3/#hypermedia).


```js
github.repos.owner.repo.releases.release_id.get({
  "owner": "",
  "repo": "",
  "release_id": 0
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * release_id **required** `integer`: release_id parameter

#### Output
* output [release](#release)

### repos.owner.repo.releases.release_id.patch
Users with push access to the repository can edit a release.


```js
github.repos.owner.repo.releases.release_id.patch({
  "owner": "",
  "repo": "",
  "release_id": 0
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * release_id **required** `integer`: release_id parameter
  * body `object`
    * body `string`: Text describing the contents of the tag.
    * draft `boolean`: `true` makes the release a draft, and `false` publishes the release.
    * name `string`: The name of the release.
    * prerelease `boolean`: `true` to identify the release as a prerelease, `false` to identify the release as a full release.
    * tag_name `string`: The name of the tag.
    * target_commitish `string`: Specifies the commitish value that determines where the Git tag is created from. Can be any branch or commit SHA. Unused if the Git tag already exists. Default: the repository's default branch (usually `master`).

#### Output
* output [release](#release)

### repos.owner.repo.releases.release_id.assets.get
List release assets


```js
github.repos.owner.repo.releases.release_id.assets.get({
  "owner": "",
  "repo": "",
  "release_id": 0
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * release_id **required** `integer`: release_id parameter
  * per_page `integer`: Results per page (max 100)
  * page `integer`: Page number of the results to fetch.

#### Output
* output `array`
  * items [release-asset](#release-asset)

### repos.owner.repo.releases.release_id.assets.post
This endpoint makes use of [a Hypermedia relation](https://developer.github.com/v3/#hypermedia) to determine which URL to access. The endpoint you call to upload release assets is specific to your release. Use the `upload_url` returned in
the response of the [Create a release endpoint](https://developer.github.com/v3/repos/releases/#create-a-release) to upload a release asset.

You need to use an HTTP client which supports [SNI](http://en.wikipedia.org/wiki/Server_Name_Indication) to make calls to this endpoint.

Most libraries will set the required `Content-Length` header automatically. Use the required `Content-Type` header to provide the media type of the asset. For a list of media types, see [Media Types](https://www.iana.org/assignments/media-types/media-types.xhtml). For example: 

`application/zip`

GitHub expects the asset data in its raw binary form, rather than JSON. You will send the raw binary content of the asset as the request body. Everything else about the endpoint is the same as the rest of the API. For example,
you'll still need to pass your authentication to be able to upload an asset.

When an upstream failure occurs, you will receive a `502 Bad Gateway` status. This may leave an empty asset with a state of `starter`. It can be safely deleted.

**Notes:**
*   GitHub renames asset filenames that have special characters, non-alphanumeric characters, and leading or trailing periods. The "[List assets for a release](https://developer.github.com/v3/repos/releases/#list-assets-for-a-release)"
endpoint lists the renamed filenames. For more information and help, contact [GitHub Support](https://github.com/contact).
*   If you upload an asset with the same filename as another uploaded asset, you'll receive an error and must delete the old file before you can re-upload the new asset.


```js
github.repos.owner.repo.releases.release_id.assets.post({
  "owner": "",
  "repo": "",
  "release_id": 0
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * release_id **required** `integer`: release_id parameter
  * name `string`: name parameter
  * label `string`: label parameter
  * body `string`: The raw file data

#### Output
* output [release-asset](#release-asset)

### repos.owner.repo.stargazers.get
Lists the people that have starred the repository.

You can also find out _when_ stars were created by passing the following custom [media type](https://developer.github.com/v3/media/) via the `Accept` header:


```js
github.repos.owner.repo.stargazers.get({
  "owner": "",
  "repo": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * per_page `integer`: Results per page (max 100)
  * page `integer`: Page number of the results to fetch.

#### Output
* output `array`
  * items [simple-user](#simple-user)

### repos.owner.repo.stats.code_frequency.get
Returns a weekly aggregate of the number of additions and deletions pushed to a repository.


```js
github.repos.owner.repo.stats.code_frequency.get({
  "owner": "",
  "repo": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`

#### Output
* output `array`
  * items [code-frequency-stat](#code-frequency-stat)

### repos.owner.repo.stats.commit_activity.get
Returns the last year of commit activity grouped by week. The `days` array is a group of commits per day, starting on `Sunday`.


```js
github.repos.owner.repo.stats.commit_activity.get({
  "owner": "",
  "repo": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`

#### Output
* output `array`
  * items [commit-activity](#commit-activity)

### repos.owner.repo.stats.contributors.get

Returns the `total` number of commits authored by the contributor. In addition, the response includes a Weekly Hash (`weeks` array) with the following information:

*   `w` - Start of the week, given as a [Unix timestamp](http://en.wikipedia.org/wiki/Unix_time).
*   `a` - Number of additions
*   `d` - Number of deletions
*   `c` - Number of commits


```js
github.repos.owner.repo.stats.contributors.get({
  "owner": "",
  "repo": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`

#### Output
* output `array`
  * items [contributor-activity](#contributor-activity)

### repos.owner.repo.stats.participation.get
Returns the total commit counts for the `owner` and total commit counts in `all`. `all` is everyone combined, including the `owner` in the last 52 weeks. If you'd like to get the commit counts for non-owners, you can subtract `owner` from `all`.

The array order is oldest week (index 0) to most recent week.


```js
github.repos.owner.repo.stats.participation.get({
  "owner": "",
  "repo": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`

#### Output
* output [participation-stats](#participation-stats)

### repos.owner.repo.stats.punch_card.get
Each array contains the day number, hour number, and number of commits:

*   `0-6`: Sunday - Saturday
*   `0-23`: Hour of day
*   Number of commits

For example, `[2, 14, 25]` indicates that there were 25 total commits, during the 2:00pm hour on Tuesdays. All times are based on the time zone of individual commits.


```js
github.repos.owner.repo.stats.punch_card.get({
  "owner": "",
  "repo": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`

#### Output
* output `array`
  * items [code-frequency-stat](#code-frequency-stat)

### repos.owner.repo.statuses.sha.post
Users with push access in a repository can create commit statuses for a given SHA.

Note: there is a limit of 1000 statuses per `sha` and `context` within a repository. Attempts to create more than 1000 statuses will result in a validation error.


```js
github.repos.owner.repo.statuses.sha.post({
  "owner": "",
  "repo": "",
  "sha": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * sha **required** `string`: sha parameter
  * body `object`
    * context `string`: A string label to differentiate this status from the status of other systems.
    * description `string`: A short description of the status.
    * state **required** `string` (values: error, failure, pending, success): The state of the status. Can be one of `error`, `failure`, `pending`, or `success`.
    * target_url `string`: The target URL to associate with this status. This URL will be linked from the GitHub UI to allow users to easily see the source of the status.  

#### Output
* output [status](#status)

### repos.owner.repo.subscribers.get
Lists the people watching the specified repository.


```js
github.repos.owner.repo.subscribers.get({
  "owner": "",
  "repo": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * per_page `integer`: Results per page (max 100)
  * page `integer`: Page number of the results to fetch.

#### Output
* output `array`
  * items [simple-user](#simple-user)

### repos.owner.repo.subscription.delete
This endpoint should only be used to stop watching a repository. To control whether or not you wish to receive notifications from a repository, [set the repository's subscription manually](https://developer.github.com/v3/activity/watching/#set-a-repository-subscription).


```js
github.repos.owner.repo.subscription.delete({
  "owner": "",
  "repo": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`

#### Output
*Output schema unknown*

### repos.owner.repo.subscription.get
Get a repository subscription


```js
github.repos.owner.repo.subscription.get({
  "owner": "",
  "repo": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`

#### Output
* output [repository-subscription](#repository-subscription)

### repos.owner.repo.subscription.put
If you would like to watch a repository, set `subscribed` to `true`. If you would like to ignore notifications made within a repository, set `ignored` to `true`. If you would like to stop watching a repository, [delete the repository's subscription](https://developer.github.com/v3/activity/watching/#delete-a-repository-subscription) completely.


```js
github.repos.owner.repo.subscription.put({
  "owner": "",
  "repo": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * body `object`
    * ignored `boolean`: Determines if all notifications should be blocked from this repository.
    * subscribed `boolean`: Determines if notifications should be received from this repository.

#### Output
* output [repository-subscription](#repository-subscription)

### repos.owner.repo.tags.get
List repository tags


```js
github.repos.owner.repo.tags.get({
  "owner": "",
  "repo": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * per_page `integer`: Results per page (max 100)
  * page `integer`: Page number of the results to fetch.

#### Output
* output `array`
  * items [tag](#tag)

### repos.owner.repo.tarball.ref.get
Gets a redirect URL to download a tar archive for a repository. If you omit `:ref`, the repository’s default branch (usually
`master`) will be used. Please make sure your HTTP framework is configured to follow redirects or you will need to use
the `Location` header to make a second `GET` request.
**Note**: For private repositories, these links are temporary and expire after five minutes.


```js
github.repos.owner.repo.tarball.ref.get({
  "owner": "",
  "repo": "",
  "ref": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * ref **required** `string`: ref parameter

#### Output
*Output schema unknown*

### repos.owner.repo.teams.get
List repository teams


```js
github.repos.owner.repo.teams.get({
  "owner": "",
  "repo": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * per_page `integer`: Results per page (max 100)
  * page `integer`: Page number of the results to fetch.

#### Output
* output `array`
  * items [team](#team)

### repos.owner.repo.topics.get
Get all repository topics


```js
github.repos.owner.repo.topics.get({
  "owner": "",
  "repo": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`

#### Output
* output [topic](#topic)

### repos.owner.repo.topics.put
Replace all repository topics


```js
github.repos.owner.repo.topics.put({
  "owner": "",
  "repo": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * body `object`
    * names **required** `array`: An array of topics to add to the repository. Pass one or more topics to _replace_ the set of existing topics. Send an empty array (`[]`) to clear all topics from the repository. **Note:** Topic `names` cannot contain uppercase letters.
      * items `string`

#### Output
* output [topic](#topic)

### repos.owner.repo.traffic.clones.get
Get the total number of clones and breakdown per day or week for the last 14 days. Timestamps are aligned to UTC midnight of the beginning of the day or week. Week begins on Monday.


```js
github.repos.owner.repo.traffic.clones.get({
  "owner": "",
  "repo": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * per `string` (values: day, week): Must be one of: `day`, `week`.

#### Output
* output [clone-traffic](#clone-traffic)

### repos.owner.repo.traffic.popular.paths.get
Get the top 10 popular contents over the last 14 days.


```js
github.repos.owner.repo.traffic.popular.paths.get({
  "owner": "",
  "repo": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`

#### Output
* output `array`
  * items [content-traffic](#content-traffic)

### repos.owner.repo.traffic.popular.referrers.get
Get the top 10 referrers over the last 14 days.


```js
github.repos.owner.repo.traffic.popular.referrers.get({
  "owner": "",
  "repo": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`

#### Output
* output `array`
  * items [referrer-traffic](#referrer-traffic)

### repos.owner.repo.traffic.views.get
Get the total number of views and breakdown per day or week for the last 14 days. Timestamps are aligned to UTC midnight of the beginning of the day or week. Week begins on Monday.


```js
github.repos.owner.repo.traffic.views.get({
  "owner": "",
  "repo": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * per `string` (values: day, week): Must be one of: `day`, `week`.

#### Output
* output [view-traffic](#view-traffic)

### repos.owner.repo.transfer.post
A transfer request will need to be accepted by the new owner when transferring a personal repository to another user. The response will contain the original `owner`, and the transfer will continue asynchronously. For more details on the requirements to transfer personal and organization-owned repositories, see [about repository transfers](https://help.github.com/articles/about-repository-transfers/).


```js
github.repos.owner.repo.transfer.post({
  "owner": "",
  "repo": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * body `object`
    * new_owner `string`: **Required:** The username or organization name the repository will be transferred to.
    * team_ids `array`: ID of the team or teams to add to the repository. Teams can only be added to organization-owned repositories.
      * items `integer`

#### Output
* output [repository](#repository)

### repos.owner.repo.vulnerability_alerts.delete
Disables dependency alerts and the dependency graph for a repository. The authenticated user must have admin access to the repository. For more information, see "[About security alerts for vulnerable dependencies](https://help.github.com/en/articles/about-security-alerts-for-vulnerable-dependencies)".


```js
github.repos.owner.repo.vulnerability_alerts.delete({
  "owner": "",
  "repo": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`

#### Output
*Output schema unknown*

### repos.owner.repo.vulnerability_alerts.get
Shows whether dependency alerts are enabled or disabled for a repository. The authenticated user must have admin access to the repository. For more information, see "[About security alerts for vulnerable dependencies](https://help.github.com/en/articles/about-security-alerts-for-vulnerable-dependencies)".


```js
github.repos.owner.repo.vulnerability_alerts.get({
  "owner": "",
  "repo": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`

#### Output
*Output schema unknown*

### repos.owner.repo.vulnerability_alerts.put
Enables dependency alerts and the dependency graph for a repository. The authenticated user must have admin access to the repository. For more information, see "[About security alerts for vulnerable dependencies](https://help.github.com/en/articles/about-security-alerts-for-vulnerable-dependencies)".


```js
github.repos.owner.repo.vulnerability_alerts.put({
  "owner": "",
  "repo": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`

#### Output
*Output schema unknown*

### repos.owner.repo.zipball.ref.get
Gets a redirect URL to download a zip archive for a repository. If you omit `:ref`, the repository’s default branch (usually
`master`) will be used. Please make sure your HTTP framework is configured to follow redirects or you will need to use
the `Location` header to make a second `GET` request.
**Note**: For private repositories, these links are temporary and expire after five minutes.


```js
github.repos.owner.repo.zipball.ref.get({
  "owner": "",
  "repo": "",
  "ref": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`
  * ref **required** `string`: ref parameter

#### Output
*Output schema unknown*

### repos.template_owner.template_repo.generate.post
Creates a new repository using a repository template. Use the `template_owner` and `template_repo` route parameters to specify the repository to use as the template. The authenticated user must own or be a member of an organization that owns the repository. To check if a repository is available to use as a template, get the repository's information using the [Get a repository](https://developer.github.com/v3/repos/#get-a-repository) endpoint and check that the `is_template` key is `true`.

**OAuth scope requirements**

When using [OAuth](https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/), authorizations must include:

*   `public_repo` scope or `repo` scope to create a public repository
*   `repo` scope to create a private repository


```js
github.repos.template_owner.template_repo.generate.post({
  "template_owner": "",
  "template_repo": ""
}, context)
```

#### Input
* input `object`
  * template_owner **required** `string`: template_owner parameter
  * template_repo **required** `string`: template_repo parameter
  * body `object`
    * description `string`: A short description of the new repository.
    * name **required** `string`: The name of the new repository.
    * owner `string`: The organization or person who will own the new repository. To create a new repository in an organization, the authenticated user must be a member of the specified organization.
    * private `boolean`: Either `true` to create a new private repository or `false` to create a new public one.

#### Output
* output [repository](#repository)

### repositories.get
Lists all public repositories in the order that they were created.

Note: Pagination is powered exclusively by the `since` parameter. Use the [Link header](https://developer.github.com/v3/#link-header) to get the URL for the next page of repositories.


```js
github.repositories.get({}, context)
```

#### Input
* input `object`
  * per_page `integer`: Results per page (max 100)
  * since `string`: Only show notifications updated after the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
  * visibility `string`

#### Output
* output `array`
  * items [minimal-repository](#minimal-repository)

### scim.v2.organizations.org.Users.get
Retrieves a paginated list of all provisioned organization members, including pending invitations. If you provide the `filter` parameter, the resources for all matching provisions members are returned.

When a user with a SAML-provisioned external identity leaves (or is removed from) an organization, the account's metadata is immediately removed. However, the returned list of user accounts might not always match the organization or enterprise member list you see on GitHub. This can happen in certain cases where an external identity associated with an organization will not match an organization member:
  - When a user with a SCIM-provisioned external identity is removed from an organization, the account's metadata is preserved to allow the user to re-join the organization in the future.
  - When inviting a user to join an organization, you can expect to see their external identity in the results before they accept the invitation, or if the invitation is cancelled (or never accepted).
  - When a user is invited over SCIM, an external identity is created that matches with the invitee's email address. However, this identity is only linked to a user account when the user accepts the invitation by going through SAML SSO.

The returned list of external identities can include an entry for a `null` user. These are unlinked SAML identities that are created when a user goes through the following Single Sign-On (SSO) process but does not sign in to their GitHub account after completing SSO:

1. The user is granted access by the IdP and is not a member of the GitHub organization.

1. The user attempts to access the GitHub organization and initiates the SAML SSO process, and is not currently signed in to their GitHub account.

1. After successfully authenticating with the SAML SSO IdP, the `null` external identity entry is created and the user is prompted to sign in to their GitHub account:
   - If the user signs in, their GitHub account is linked to this entry.
   - If the user does not sign in (or does not create a new account when prompted), they are not added to the GitHub organization, and the external identity `null` entry remains in place.


```js
github.scim.v2.organizations.org.Users.get({
  "org": ""
}, context)
```

#### Input
* input `object`
  * org **required** `string`
  * startIndex `integer`: Used for pagination: the index of the first result to return.
  * count `integer`: Used for pagination: the number of results to return.
  * filter `string`: Filters results using the equals query parameter operator (`eq`). You can filter results that are equal to `id`, `userName`, `emails`, and `external_id`. For example, to search for an identity with the `userName` Octocat, you would use this query:

#### Output
* output [scim-user-list](#scim-user-list)

### scim.v2.organizations.org.Users.post
Provision organization membership for a user, and send an activation email to the email address.


```js
github.scim.v2.organizations.org.Users.post({
  "org": ""
}, context)
```

#### Input
* input `object`
  * org **required** `string`
  * body `object`
    * active `boolean`
    * displayName `string`: The name of the user, suitable for display to end-users
    * emails **required** `array`: user emails
      * items `object`
        * primary `boolean`
        * type `string`
        * value **required** `string`
    * externalId `string`
    * groups `array`
      * items `string`
    * name **required** `object`
      * familyName **required** `string`
      * formatted `string`
      * givenName **required** `string`
    * schemas `array`
      * items `string`
    * userName **required** `string`: Configured by the admin. Could be an email, login, or username

#### Output
* output [scim-user](#scim-user)

### scim.v2.organizations.org.Users.scim_user_id.delete
Delete a SCIM user from an organization


```js
github.scim.v2.organizations.org.Users.scim_user_id.delete({
  "org": "",
  "scim_user_id": ""
}, context)
```

#### Input
* input `object`
  * org **required** `string`
  * scim_user_id **required** `string`: scim_user_id parameter

#### Output
*Output schema unknown*

### scim.v2.organizations.org.Users.scim_user_id.get
Get SCIM provisioning information for a user


```js
github.scim.v2.organizations.org.Users.scim_user_id.get({
  "org": "",
  "scim_user_id": ""
}, context)
```

#### Input
* input `object`
  * org **required** `string`
  * scim_user_id **required** `string`: scim_user_id parameter

#### Output
* output [scim-user](#scim-user)

### scim.v2.organizations.org.Users.scim_user_id.patch
Allows you to change a provisioned user's individual attributes. To change a user's values, you must provide a specific `Operations` JSON format that contains at least one of the `add`, `remove`, or `replace` operations. For examples and more information on the SCIM operations format, see the [SCIM specification](https://tools.ietf.org/html/rfc7644#section-3.5.2).

**Note:** Complicated SCIM `path` selectors that include filters are not supported. For example, a `path` selector defined as `"path": "emails[type eq \"work\"]"` will not work.

**Warning:** If you set `active:false` using the `replace` operation (as shown in the JSON example below), it removes the user from the organization, deletes the external identity, and deletes the associated `:scim_user_id`.

```
{
  "Operations":[{
    "op":"replace",
    "value":{
      "active":false
    }
  }]
}
```


```js
github.scim.v2.organizations.org.Users.scim_user_id.patch({
  "org": "",
  "scim_user_id": ""
}, context)
```

#### Input
* input `object`
  * org **required** `string`
  * scim_user_id **required** `string`: scim_user_id parameter
  * body `object`
    * Operations **required** `array`: Set of operations to be performed
      * items `object`
        * op **required** `string` (values: add, remove, replace)
        * path `string`
    * schemas `array`
      * items `string`

#### Output
* output [scim-user](#scim-user)

### scim.v2.organizations.org.Users.scim_user_id.put
Replaces an existing provisioned user's information. You must provide all the information required for the user as if you were provisioning them for the first time. Any existing user information that you don't provide will be removed. If you want to only update a specific attribute, use the [Update an attribute for a SCIM user](https://developer.github.com/v3/scim/#update-an-attribute-for-a-scim-user) endpoint instead.

You must at least provide the required values for the user: `userName`, `name`, and `emails`.

**Warning:** Setting `active: false` removes the user from the organization, deletes the external identity, and deletes the associated `{scim_user_id}`.


```js
github.scim.v2.organizations.org.Users.scim_user_id.put({
  "org": "",
  "scim_user_id": ""
}, context)
```

#### Input
* input `object`
  * org **required** `string`
  * scim_user_id **required** `string`: scim_user_id parameter
  * body `object`
    * active `boolean`
    * displayName `string`: The name of the user, suitable for display to end-users
    * emails **required** `array`: user emails
      * items `object`
        * primary `boolean`
        * type `string`
        * value **required** `string`
    * externalId `string`
    * groups `array`
      * items `string`
    * name **required** `object`
      * familyName **required** `string`
      * formatted `string`
      * givenName **required** `string`
    * schemas `array`
      * items `string`
    * userName **required** `string`: Configured by the admin. Could be an email, login, or username

#### Output
* output [scim-user](#scim-user)

### search.code.get
Searches for query terms inside of a file. This method returns up to 100 results [per page](https://developer.github.com/v3/#pagination).

When searching for code, you can get text match metadata for the file **content** and file **path** fields when you pass the `text-match` media type. For more details about how to receive highlighted search results, see [Text match metadata](https://developer.github.com/v3/search/#text-match-metadata).

For example, if you want to find the definition of the `addClass` function inside [jQuery](https://github.com/jquery/jquery) repository, your query would look something like this:

`q=addClass+in:file+language:js+repo:jquery/jquery`

This query searches for the keyword `addClass` within a file's contents. The query limits the search to files where the language is JavaScript in the `jquery/jquery` repository.

#### Considerations for code search

Due to the complexity of searching code, there are a few restrictions on how searches are performed:

*   Only the _default branch_ is considered. In most cases, this will be the `master` branch.
*   Only files smaller than 384 KB are searchable.
*   You must always include at least one search term when searching source code. For example, searching for [`language:go`](https://github.com/search?utf8=%E2%9C%93&q=language%3Ago&type=Code) is not valid, while [`amazing
language:go`](https://github.com/search?utf8=%E2%9C%93&q=amazing+language%3Ago&type=Code) is.


```js
github.search.code.get({
  "q": ""
}, context)
```

#### Input
* input `object`
  * q **required** `string`: The query contains one or more search keywords and qualifiers. Qualifiers allow you to limit your search to specific areas of GitHub. The REST API supports the same qualifiers as GitHub.com. To learn more about the format of the query, see [Constructing a search query](https://developer.github.com/v3/search/#constructing-a-search-query). See "[Searching code](https://help.github.com/articles/searching-code/)" for a detailed list of qualifiers.
  * sort `string` (values: indexed): Sorts the results of your query. Can only be `indexed`, which indicates how recently a file has been indexed by the GitHub search infrastructure. Default: [best match](https://developer.github.com/v3/search/#ranking-search-results)
  * order `string` (values: desc, asc): Determines whether the first search result returned is the highest number of matches (`desc`) or lowest number of matches (`asc`). This parameter is ignored unless you provide `sort`.
  * per_page `integer`: Results per page (max 100)
  * page `integer`: Page number of the results to fetch.

#### Output
* output `object`
  * incomplete_results `boolean`
  * items `array`
    * items [code-search-result-item](#code-search-result-item)
  * total_count `integer`

### search.commits.get
Find commits via various criteria on the default branch (usually `master`). This method returns up to 100 results [per page](https://developer.github.com/v3/#pagination).

When searching for commits, you can get text match metadata for the **message** field when you provide the `text-match` media type. For more details about how to receive highlighted search results, see [Text match
metadata](https://developer.github.com/v3/search/#text-match-metadata).

For example, if you want to find commits related to CSS in the [octocat/Spoon-Knife](https://github.com/octocat/Spoon-Knife) repository. Your query would look something like this:

`q=repo:octocat/Spoon-Knife+css`


```js
github.search.commits.get({
  "q": ""
}, context)
```

#### Input
* input `object`
  * q **required** `string`: The query contains one or more search keywords and qualifiers. Qualifiers allow you to limit your search to specific areas of GitHub. The REST API supports the same qualifiers as GitHub.com. To learn more about the format of the query, see [Constructing a search query](https://developer.github.com/v3/search/#constructing-a-search-query). See "[Searching commits](https://help.github.com/articles/searching-commits/)" for a detailed list of qualifiers.
  * sort `string` (values: author-date, committer-date): Sorts the results of your query by `author-date` or `committer-date`. Default: [best match](https://developer.github.com/v3/search/#ranking-search-results)
  * order `string` (values: desc, asc): Determines whether the first search result returned is the highest number of matches (`desc`) or lowest number of matches (`asc`). This parameter is ignored unless you provide `sort`.
  * per_page `integer`: Results per page (max 100)
  * page `integer`: Page number of the results to fetch.

#### Output
* output `object`
  * incomplete_results `boolean`
  * items `array`
    * items [commit-search-result-item](#commit-search-result-item)
  * total_count `integer`

### search.issues.get
Find issues by state and keyword. This method returns up to 100 results [per page](https://developer.github.com/v3/#pagination).

When searching for issues, you can get text match metadata for the issue **title**, issue **body**, and issue **comment body** fields when you pass the `text-match` media type. For more details about how to receive highlighted
search results, see [Text match metadata](https://developer.github.com/v3/search/#text-match-metadata).

For example, if you want to find the oldest unresolved Python bugs on Windows. Your query might look something like this.

`q=windows+label:bug+language:python+state:open&sort=created&order=asc`

This query searches for the keyword `windows`, within any open issue that is labeled as `bug`. The search runs across repositories whose primary language is Python. The results are sorted by creation date in ascending order, whick means the oldest issues appear first in the search results.


```js
github.search.issues.get({
  "q": ""
}, context)
```

#### Input
* input `object`
  * q **required** `string`: The query contains one or more search keywords and qualifiers. Qualifiers allow you to limit your search to specific areas of GitHub. The REST API supports the same qualifiers as GitHub.com. To learn more about the format of the query, see [Constructing a search query](https://developer.github.com/v3/search/#constructing-a-search-query). See "[Searching issues and pull requests](https://help.github.com/articles/searching-issues-and-pull-requests/)" for a detailed list of qualifiers.
  * sort `string` (values: comments, reactions, reactions-+1, reactions--1, reactions-smile, reactions-thinking_face, reactions-heart, reactions-tada, interactions, created, updated): Sorts the results of your query by the number of `comments`, `reactions`, `reactions-+1`, `reactions--1`, `reactions-smile`, `reactions-thinking_face`, `reactions-heart`, `reactions-tada`, or `interactions`. You can also sort results by how recently the items were `created` or `updated`, Default: [best match](https://developer.github.com/v3/search/#ranking-search-results)
  * order `string` (values: desc, asc): Determines whether the first search result returned is the highest number of matches (`desc`) or lowest number of matches (`asc`). This parameter is ignored unless you provide `sort`.
  * per_page `integer`: Results per page (max 100)
  * page `integer`: Page number of the results to fetch.

#### Output
* output `object`
  * incomplete_results `boolean`
  * items `array`
    * items [issue-search-result-item](#issue-search-result-item)
  * total_count `integer`

### search.labels.get
Find labels in a repository with names or descriptions that match search keywords. Returns up to 100 results [per page](https://developer.github.com/v3/#pagination).

When searching for labels, you can get text match metadata for the label **name** and **description** fields when you pass the `text-match` media type. For more details about how to receive highlighted search results, see [Text match metadata](https://developer.github.com/v3/search/#text-match-metadata).

For example, if you want to find labels in the `linguist` repository that match `bug`, `defect`, or `enhancement`. Your query might look like this:

`q=bug+defect+enhancement&repository_id=64778136`

The labels that best match the query appear first in the search results.


```js
github.search.labels.get({
  "repository_id": 0,
  "q": ""
}, context)
```

#### Input
* input `object`
  * repository_id **required** `integer`: The id of the repository.
  * q **required** `string`: The search keywords. This endpoint does not accept qualifiers in the query. To learn more about the format of the query, see [Constructing a search query](https://developer.github.com/v3/search/#constructing-a-search-query).
  * sort `string` (values: created, updated): Sorts the results of your query by when the label was `created` or `updated`. Default: [best match](https://developer.github.com/v3/search/#ranking-search-results)
  * order `string` (values: desc, asc): Determines whether the first search result returned is the highest number of matches (`desc`) or lowest number of matches (`asc`). This parameter is ignored unless you provide `sort`.

#### Output
* output `object`
  * incomplete_results `boolean`
  * items `array`
    * items [label-search-result-item](#label-search-result-item)
  * total_count `integer`

### search.repositories.get
Find repositories via various criteria. This method returns up to 100 results [per page](https://developer.github.com/v3/#pagination).

When searching for repositories, you can get text match metadata for the **name** and **description** fields when you pass the `text-match` media type. For more details about how to receive highlighted search results, see [Text match metadata](https://developer.github.com/v3/search/#text-match-metadata).

For example, if you want to search for popular Tetris repositories written in assembly code, your query might look like this:

`q=tetris+language:assembly&sort=stars&order=desc`

This query searches for repositories with the word `tetris` in the name, the description, or the README. The results are limited to repositories where the primary language is assembly. The results are sorted by stars in descending order, so that the most popular repositories appear first in the search results.

When you include the `mercy` preview header, you can also search for multiple topics by adding more `topic:` instances. For example, your query might look like this:

`q=topic:ruby+topic:rails`


```js
github.search.repositories.get({
  "q": ""
}, context)
```

#### Input
* input `object`
  * q **required** `string`: The query contains one or more search keywords and qualifiers. Qualifiers allow you to limit your search to specific areas of GitHub. The REST API supports the same qualifiers as GitHub.com. To learn more about the format of the query, see [Constructing a search query](https://developer.github.com/v3/search/#constructing-a-search-query). See "[Searching for repositories](https://help.github.com/articles/searching-for-repositories/)" for a detailed list of qualifiers.
  * sort `string` (values: stars, forks, help-wanted-issues, updated): Sorts the results of your query by number of `stars`, `forks`, or `help-wanted-issues` or how recently the items were `updated`. Default: [best match](https://developer.github.com/v3/search/#ranking-search-results)
  * order `string` (values: desc, asc): Determines whether the first search result returned is the highest number of matches (`desc`) or lowest number of matches (`asc`). This parameter is ignored unless you provide `sort`.
  * per_page `integer`: Results per page (max 100)
  * page `integer`: Page number of the results to fetch.

#### Output
* output `object`
  * incomplete_results `boolean`
  * items `array`
    * items [repo-search-result-item](#repo-search-result-item)
  * total_count `integer`

### search.topics.get
Find topics via various criteria. Results are sorted by best match. This method returns up to 100 results [per page](https://developer.github.com/v3/#pagination). See "[Searching topics](https://help.github.com/articles/searching-topics/)" for a detailed list of qualifiers.

When searching for topics, you can get text match metadata for the topic's **short\_description**, **description**, **name**, or **display\_name** field when you pass the `text-match` media type. For more details about how to receive highlighted search results, see [Text match metadata](https://developer.github.com/v3/search/#text-match-metadata).

For example, if you want to search for topics related to Ruby that are featured on https://github.com/topics. Your query might look like this:

`q=ruby+is:featured`

This query searches for topics with the keyword `ruby` and limits the results to find only topics that are featured. The topics that are the best match for the query appear first in the search results.


```js
github.search.topics.get({
  "q": ""
}, context)
```

#### Input
* input `object`
  * q **required** `string`: The query contains one or more search keywords and qualifiers. Qualifiers allow you to limit your search to specific areas of GitHub. The REST API supports the same qualifiers as GitHub.com. To learn more about the format of the query, see [Constructing a search query](https://developer.github.com/v3/search/#constructing-a-search-query).

#### Output
* output `object`
  * incomplete_results `boolean`
  * items `array`
    * items [topic-search-result-item](#topic-search-result-item)
  * total_count `integer`

### search.users.get
Find users via various criteria. This method returns up to 100 results [per page](https://developer.github.com/v3/#pagination).

When searching for users, you can get text match metadata for the issue **login**, **email**, and **name** fields when you pass the `text-match` media type. For more details about highlighting search results, see [Text match metadata](https://developer.github.com/v3/search/#text-match-metadata). For more details about how to receive highlighted search results, see [Text match metadata](https://developer.github.com/v3/search/#text-match-metadata).

For example, if you're looking for a list of popular users, you might try this query:

`q=tom+repos:%3E42+followers:%3E1000`

This query searches for users with the name `tom`. The results are restricted to users with more than 42 repositories and over 1,000 followers.


```js
github.search.users.get({
  "q": ""
}, context)
```

#### Input
* input `object`
  * q **required** `string`: The query contains one or more search keywords and qualifiers. Qualifiers allow you to limit your search to specific areas of GitHub. The REST API supports the same qualifiers as GitHub.com. To learn more about the format of the query, see [Constructing a search query](https://developer.github.com/v3/search/#constructing-a-search-query). See "[Searching users](https://help.github.com/articles/searching-users/)" for a detailed list of qualifiers.
  * sort `string` (values: followers, repositories, joined): Sorts the results of your query by number of `followers` or `repositories`, or when the person `joined` GitHub. Default: [best match](https://developer.github.com/v3/search/#ranking-search-results)
  * order `string` (values: desc, asc): Determines whether the first search result returned is the highest number of matches (`desc`) or lowest number of matches (`asc`). This parameter is ignored unless you provide `sort`.
  * per_page `integer`: Results per page (max 100)
  * page `integer`: Page number of the results to fetch.

#### Output
* output `object`
  * incomplete_results `boolean`
  * items `array`
    * items [user-search-result-item](#user-search-result-item)
  * total_count `integer`

### teams.team_id.delete
**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Delete a team](https://developer.github.com/v3/teams/#delete-a-team) endpoint.

To delete a team, the authenticated user must be an organization owner or team maintainer.

If you are an organization owner, deleting a parent team will delete all of its child teams as well.


```js
github.teams.team_id.delete({
  "team_id": 0
}, context)
```

#### Input
* input `object`
  * team_id **required** `integer`

#### Output
*Output schema unknown*

### teams.team_id.get
**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the [Get a team by name](https://developer.github.com/v3/teams/#get-a-team-by-name) endpoint.


```js
github.teams.team_id.get({
  "team_id": 0
}, context)
```

#### Input
* input `object`
  * team_id **required** `integer`

#### Output
* output [team-full](#team-full)

### teams.team_id.patch
**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Update a team](https://developer.github.com/v3/teams/#update-a-team) endpoint.

To edit a team, the authenticated user must either be an organization owner or a team maintainer.

**Note:** With nested teams, the `privacy` for parent teams cannot be `secret`.


```js
github.teams.team_id.patch({
  "team_id": 0
}, context)
```

#### Input
* input `object`
  * team_id **required** `integer`
  * body `object`
    * description `string`: The description of the team.
    * name **required** `string`: The name of the team.
    * parent_team_id `integer`: The ID of a team to set as the parent team.
    * permission `string` (values: pull, push, admin): **Deprecated**. The permission that new repositories will be added to the team with when none is specified. Can be one of:  
    * privacy `string` (values: secret, closed): The level of privacy this team should have. Editing teams without specifying this parameter leaves `privacy` intact. The options are:  

#### Output
* output [team-full](#team-full)

### teams.team_id.discussions.get
**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [`List discussions`](https://developer.github.com/v3/teams/discussions/#list-discussions) endpoint.

List all discussions on a team's page. OAuth access tokens require the `read:discussion` [scope](https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).


```js
github.teams.team_id.discussions.get({
  "team_id": 0
}, context)
```

#### Input
* input `object`
  * team_id **required** `integer`
  * direction `string` (values: asc, desc): One of `asc` (ascending) or `desc` (descending).
  * per_page `integer`: Results per page (max 100)
  * page `integer`: Page number of the results to fetch.

#### Output
* output `array`
  * items [team-discussion](#team-discussion)

### teams.team_id.discussions.post
**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [`Create a discussion`](https://developer.github.com/v3/teams/discussions/#create-a-discussion) endpoint.

Creates a new discussion post on a team's page. OAuth access tokens require the `write:discussion` [scope](https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

This endpoint triggers [notifications](https://help.github.com/articles/about-notifications/). Creating content too quickly using this endpoint may result in abuse rate limiting. See "[Abuse rate limits](https://developer.github.com/v3/#abuse-rate-limits)" and "[Dealing with abuse rate limits](https://developer.github.com/v3/guides/best-practices-for-integrators/#dealing-with-abuse-rate-limits)" for details.


```js
github.teams.team_id.discussions.post({
  "team_id": 0
}, context)
```

#### Input
* input `object`
  * team_id **required** `integer`
  * body `object`
    * body **required** `string`: The discussion post's body text.
    * private `boolean`: Private posts are only visible to team members, organization owners, and team maintainers. Public posts are visible to all members of the organization. Set to `true` to create a private post.
    * title **required** `string`: The discussion post's title.

#### Output
* output [team-discussion](#team-discussion)

### teams.team_id.discussions.discussion_number.delete
**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [`Delete a discussion`](https://developer.github.com/v3/teams/discussions/#delete-a-discussion) endpoint.

Delete a discussion from a team's page. OAuth access tokens require the `write:discussion` [scope](https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).


```js
github.teams.team_id.discussions.discussion_number.delete({
  "team_id": 0,
  "discussion_number": 0
}, context)
```

#### Input
* input `object`
  * team_id **required** `integer`
  * discussion_number **required** `integer`

#### Output
*Output schema unknown*

### teams.team_id.discussions.discussion_number.get
**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Get a discussion](https://developer.github.com/v3/teams/discussions/#get-a-discussion) endpoint.

Get a specific discussion on a team's page. OAuth access tokens require the `read:discussion` [scope](https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).


```js
github.teams.team_id.discussions.discussion_number.get({
  "team_id": 0,
  "discussion_number": 0
}, context)
```

#### Input
* input `object`
  * team_id **required** `integer`
  * discussion_number **required** `integer`

#### Output
* output [team-discussion](#team-discussion)

### teams.team_id.discussions.discussion_number.patch
**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Update a discussion](https://developer.github.com/v3/teams/discussions/#update-a-discussion) endpoint.

Edits the title and body text of a discussion post. Only the parameters you provide are updated. OAuth access tokens require the `write:discussion` [scope](https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).


```js
github.teams.team_id.discussions.discussion_number.patch({
  "team_id": 0,
  "discussion_number": 0
}, context)
```

#### Input
* input `object`
  * team_id **required** `integer`
  * discussion_number **required** `integer`
  * body `object`
    * body `string`: The discussion post's body text.
    * title `string`: The discussion post's title.

#### Output
* output [team-discussion](#team-discussion)

### teams.team_id.discussions.discussion_number.comments.get
**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [List discussion comments](https://developer.github.com/v3/teams/discussion_comments/#list-discussion-comments) endpoint.

List all comments on a team discussion. OAuth access tokens require the `read:discussion` [scope](https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).


```js
github.teams.team_id.discussions.discussion_number.comments.get({
  "team_id": 0,
  "discussion_number": 0
}, context)
```

#### Input
* input `object`
  * team_id **required** `integer`
  * discussion_number **required** `integer`
  * direction `string` (values: asc, desc): One of `asc` (ascending) or `desc` (descending).
  * per_page `integer`: Results per page (max 100)
  * page `integer`: Page number of the results to fetch.

#### Output
* output `array`
  * items [team-discussion-comment](#team-discussion-comment)

### teams.team_id.discussions.discussion_number.comments.post
**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Create a discussion comment](https://developer.github.com/v3/teams/discussion_comments/#create-a-discussion-comment) endpoint.

Creates a new comment on a team discussion. OAuth access tokens require the `write:discussion` [scope](https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).

This endpoint triggers [notifications](https://help.github.com/articles/about-notifications/). Creating content too quickly using this endpoint may result in abuse rate limiting. See "[Abuse rate limits](https://developer.github.com/v3/#abuse-rate-limits)" and "[Dealing with abuse rate limits](https://developer.github.com/v3/guides/best-practices-for-integrators/#dealing-with-abuse-rate-limits)" for details.


```js
github.teams.team_id.discussions.discussion_number.comments.post({
  "team_id": 0,
  "discussion_number": 0
}, context)
```

#### Input
* input `object`
  * team_id **required** `integer`
  * discussion_number **required** `integer`
  * body `object`
    * body **required** `string`: The discussion comment's body text.

#### Output
* output [team-discussion-comment](#team-discussion-comment)

### teams.team_id.discussions.discussion_number.comments.comment_number.delete
**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Delete a discussion comment](https://developer.github.com/v3/teams/discussion_comments/#delete-a-discussion-comment) endpoint.

Deletes a comment on a team discussion. OAuth access tokens require the `write:discussion` [scope](https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).


```js
github.teams.team_id.discussions.discussion_number.comments.comment_number.delete({
  "team_id": 0,
  "discussion_number": 0,
  "comment_number": 0
}, context)
```

#### Input
* input `object`
  * team_id **required** `integer`
  * discussion_number **required** `integer`
  * comment_number **required** `integer`

#### Output
*Output schema unknown*

### teams.team_id.discussions.discussion_number.comments.comment_number.get
**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Get a discussion comment](https://developer.github.com/v3/teams/discussion_comments/#get-a-discussion-comment) endpoint.

Get a specific comment on a team discussion. OAuth access tokens require the `read:discussion` [scope](https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).


```js
github.teams.team_id.discussions.discussion_number.comments.comment_number.get({
  "team_id": 0,
  "discussion_number": 0,
  "comment_number": 0
}, context)
```

#### Input
* input `object`
  * team_id **required** `integer`
  * discussion_number **required** `integer`
  * comment_number **required** `integer`

#### Output
* output [team-discussion-comment](#team-discussion-comment)

### teams.team_id.discussions.discussion_number.comments.comment_number.patch
**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Update a discussion comment](https://developer.github.com/v3/teams/discussion_comments/#update-a-discussion-comment) endpoint.

Edits the body text of a discussion comment. OAuth access tokens require the `write:discussion` [scope](https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).


```js
github.teams.team_id.discussions.discussion_number.comments.comment_number.patch({
  "team_id": 0,
  "discussion_number": 0,
  "comment_number": 0
}, context)
```

#### Input
* input `object`
  * team_id **required** `integer`
  * discussion_number **required** `integer`
  * comment_number **required** `integer`
  * body `object`
    * body **required** `string`: The discussion comment's body text.

#### Output
* output [team-discussion-comment](#team-discussion-comment)

### teams.team_id.discussions.discussion_number.comments.comment_number.reactions.get
**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [`List reactions for a team discussion comment`](https://developer.github.com/v3/reactions/#list-reactions-for-a-team-discussion-comment) endpoint.

List the reactions to a [team discussion comment](https://developer.github.com/v3/teams/discussion_comments/). OAuth access tokens require the `read:discussion` [scope](https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).


```js
github.teams.team_id.discussions.discussion_number.comments.comment_number.reactions.get({
  "team_id": 0,
  "discussion_number": 0,
  "comment_number": 0
}, context)
```

#### Input
* input `object`
  * team_id **required** `integer`
  * discussion_number **required** `integer`
  * comment_number **required** `integer`
  * content `string` (values: +1, -1, laugh, confused, heart, hooray, rocket, eyes): Returns a single [reaction type](https://developer.github.com/v3/reactions/#reaction-types). Omit this parameter to list all reactions to a team discussion comment.
  * per_page `integer`: Results per page (max 100)
  * page `integer`: Page number of the results to fetch.

#### Output
* output `array`
  * items [reaction](#reaction)

### teams.team_id.discussions.discussion_number.comments.comment_number.reactions.post
**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [`Create reaction for a team discussion comment`](https://developer.github.com/v3/reactions/#create-reaction-for-a-team-discussion-comment) endpoint.

Create a reaction to a [team discussion comment](https://developer.github.com/v3/teams/discussion_comments/). OAuth access tokens require the `write:discussion` [scope](https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/). A response with a `Status: 200 OK` means that you already added the reaction type to this team discussion comment.


```js
github.teams.team_id.discussions.discussion_number.comments.comment_number.reactions.post({
  "team_id": 0,
  "discussion_number": 0,
  "comment_number": 0
}, context)
```

#### Input
* input `object`
  * team_id **required** `integer`
  * discussion_number **required** `integer`
  * comment_number **required** `integer`
  * body `object`
    * content **required** `string` (values: +1, -1, laugh, confused, heart, hooray, rocket, eyes): The [reaction type](https://developer.github.com/v3/reactions/#reaction-types) to add to the team discussion comment.

#### Output
* output [reaction](#reaction)

### teams.team_id.discussions.discussion_number.reactions.get
**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [`List reactions for a team discussion`](https://developer.github.com/v3/reactions/#list-reactions-for-a-team-discussion) endpoint.

List the reactions to a [team discussion](https://developer.github.com/v3/teams/discussions/). OAuth access tokens require the `read:discussion` [scope](https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).


```js
github.teams.team_id.discussions.discussion_number.reactions.get({
  "team_id": 0,
  "discussion_number": 0
}, context)
```

#### Input
* input `object`
  * team_id **required** `integer`
  * discussion_number **required** `integer`
  * content `string` (values: +1, -1, laugh, confused, heart, hooray, rocket, eyes): Returns a single [reaction type](https://developer.github.com/v3/reactions/#reaction-types). Omit this parameter to list all reactions to a team discussion.
  * per_page `integer`: Results per page (max 100)
  * page `integer`: Page number of the results to fetch.

#### Output
* output `array`
  * items [reaction](#reaction)

### teams.team_id.discussions.discussion_number.reactions.post
**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [`Create reaction for a team discussion`](https://developer.github.com/v3/reactions/#create-reaction-for-a-team-discussion) endpoint.

Create a reaction to a [team discussion](https://developer.github.com/v3/teams/discussions/). OAuth access tokens require the `write:discussion` [scope](https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/). A response with a `Status: 200 OK` means that you already added the reaction type to this team discussion.


```js
github.teams.team_id.discussions.discussion_number.reactions.post({
  "team_id": 0,
  "discussion_number": 0
}, context)
```

#### Input
* input `object`
  * team_id **required** `integer`
  * discussion_number **required** `integer`
  * body `object`
    * content **required** `string` (values: +1, -1, laugh, confused, heart, hooray, rocket, eyes): The [reaction type](https://developer.github.com/v3/reactions/#reaction-types) to add to the team discussion.

#### Output
* output [reaction](#reaction)

### teams.team_id.invitations.get
**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [`List pending team invitations`](https://developer.github.com/v3/teams/members/#list-pending-team-invitations) endpoint.

The return hash contains a `role` field which refers to the Organization Invitation role and will be one of the following values: `direct_member`, `admin`, `billing_manager`, `hiring_manager`, or `reinstate`. If the invitee is not a GitHub member, the `login` field in the return hash will be `null`.


```js
github.teams.team_id.invitations.get({
  "team_id": 0
}, context)
```

#### Input
* input `object`
  * team_id **required** `integer`
  * per_page `integer`: Results per page (max 100)
  * page `integer`: Page number of the results to fetch.

#### Output
* output `array`
  * items [organization-invitation](#organization-invitation)

### teams.team_id.members.get
**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [`List team members`](https://developer.github.com/v3/teams/members/#list-team-members) endpoint.

Team members will include the members of child teams.


```js
github.teams.team_id.members.get({
  "team_id": 0
}, context)
```

#### Input
* input `object`
  * team_id **required** `integer`
  * role `string` (values: member, maintainer, all): Filters members returned by their role in the team. Can be one of:  
  * per_page `integer`: Results per page (max 100)
  * page `integer`: Page number of the results to fetch.

#### Output
* output `array`
  * items [simple-user](#simple-user)

### teams.team_id.members.username.delete
The "Remove team member" endpoint (described below) is deprecated.

We recommend using the [Remove team membership for a user](https://developer.github.com/v3/teams/members/#remove-team-membership-for-a-user) endpoint instead. It allows you to remove both active and pending memberships.

Team synchronization is available for organizations using GitHub Enterprise Cloud. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

To remove a team member, the authenticated user must have 'admin' permissions to the team or be an owner of the org that the team is associated with. Removing a team member does not delete the user, it just removes them from the team.

**Note:** When you have team synchronization set up for a team with your organization's identity provider (IdP), you will see an error if you attempt to use the API for making changes to the team's membership. If you have access to manage group membership in your IdP, you can manage GitHub team membership through your identity provider, which automatically adds and removes team members in an organization. For more information, see "[Synchronizing teams between your identity provider and GitHub](https://help.github.com/articles/synchronizing-teams-between-your-identity-provider-and-github/)."


```js
github.teams.team_id.members.username.delete({
  "team_id": 0,
  "username": ""
}, context)
```

#### Input
* input `object`
  * team_id **required** `integer`
  * username **required** `string`

#### Output
*Output schema unknown*

### teams.team_id.members.username.get
The "Get team member" endpoint (described below) is deprecated.

We recommend using the [Get team membership for a user](https://developer.github.com/v3/teams/members/#get-team-membership-for-a-user) endpoint instead. It allows you to get both active and pending memberships.

To list members in a team, the team must be visible to the authenticated user.


```js
github.teams.team_id.members.username.get({
  "team_id": 0,
  "username": ""
}, context)
```

#### Input
* input `object`
  * team_id **required** `integer`
  * username **required** `string`

#### Output
*Output schema unknown*

### teams.team_id.members.username.put
The "Add team member" endpoint (described below) is deprecated.

We recommend using the [Add or update team membership for a user](https://developer.github.com/v3/teams/members/#add-or-update-team-membership-for-a-user) endpoint instead. It allows you to invite new organization members to your teams.

Team synchronization is available for organizations using GitHub Enterprise Cloud. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

To add someone to a team, the authenticated user must be an organization owner or a team maintainer in the team they're changing. The person being added to the team must be a member of the team's organization.

**Note:** When you have team synchronization set up for a team with your organization's identity provider (IdP), you will see an error if you attempt to use the API for making changes to the team's membership. If you have access to manage group membership in your IdP, you can manage GitHub team membership through your identity provider, which automatically adds and removes team members in an organization. For more information, see "[Synchronizing teams between your identity provider and GitHub](https://help.github.com/articles/synchronizing-teams-between-your-identity-provider-and-github/)."

Note that you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP verbs](https://developer.github.com/v3/#http-verbs)."


```js
github.teams.team_id.members.username.put({
  "team_id": 0,
  "username": ""
}, context)
```

#### Input
* input `object`
  * team_id **required** `integer`
  * username **required** `string`

#### Output
*Output schema unknown*

### teams.team_id.memberships.username.delete
**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Remove team membership for a user](https://developer.github.com/v3/teams/members/#remove-team-membership-for-a-user) endpoint.

Team synchronization is available for organizations using GitHub Enterprise Cloud. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

To remove a membership between a user and a team, the authenticated user must have 'admin' permissions to the team or be an owner of the organization that the team is associated with. Removing team membership does not delete the user, it just removes their membership from the team.

**Note:** When you have team synchronization set up for a team with your organization's identity provider (IdP), you will see an error if you attempt to use the API for making changes to the team's membership. If you have access to manage group membership in your IdP, you can manage GitHub team membership through your identity provider, which automatically adds and removes team members in an organization. For more information, see "[Synchronizing teams between your identity provider and GitHub](https://help.github.com/articles/synchronizing-teams-between-your-identity-provider-and-github/)."


```js
github.teams.team_id.memberships.username.delete({
  "team_id": 0,
  "username": ""
}, context)
```

#### Input
* input `object`
  * team_id **required** `integer`
  * username **required** `string`

#### Output
*Output schema unknown*

### teams.team_id.memberships.username.get
**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Get team membership for a user](https://developer.github.com/v3/teams/members/#get-team-membership-for-a-user) endpoint.

Team members will include the members of child teams.

To get a user's membership with a team, the team must be visible to the authenticated user.

**Note:** The `role` for organization owners returns as `maintainer`. For more information about `maintainer` roles, see [Create a team](https://developer.github.com/v3/teams/#create-a-team).


```js
github.teams.team_id.memberships.username.get({
  "team_id": 0,
  "username": ""
}, context)
```

#### Input
* input `object`
  * team_id **required** `integer`
  * username **required** `string`

#### Output
* output [team-membership](#team-membership)

### teams.team_id.memberships.username.put
**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Add or update team membership for a user](https://developer.github.com/v3/teams/members/#add-or-update-team-membership-for-a-user) endpoint.

Team synchronization is available for organizations using GitHub Enterprise Cloud. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

If the user is already a member of the team's organization, this endpoint will add the user to the team. To add a membership between an organization member and a team, the authenticated user must be an organization owner or a team maintainer.

**Note:** When you have team synchronization set up for a team with your organization's identity provider (IdP), you will see an error if you attempt to use the API for making changes to the team's membership. If you have access to manage group membership in your IdP, you can manage GitHub team membership through your identity provider, which automatically adds and removes team members in an organization. For more information, see "[Synchronizing teams between your identity provider and GitHub](https://help.github.com/articles/synchronizing-teams-between-your-identity-provider-and-github/)."

If the user is unaffiliated with the team's organization, this endpoint will send an invitation to the user via email. This newly-created membership will be in the "pending" state until the user accepts the invitation, at which point the membership will transition to the "active" state and the user will be added as a member of the team. To add a membership between an unaffiliated user and a team, the authenticated user must be an organization owner.

If the user is already a member of the team, this endpoint will update the role of the team member's role. To update the membership of a team member, the authenticated user must be an organization owner or a team maintainer.


```js
github.teams.team_id.memberships.username.put({
  "team_id": 0,
  "username": ""
}, context)
```

#### Input
* input `object`
  * team_id **required** `integer`
  * username **required** `string`
  * body `object`
    * role `string` (values: member, maintainer): The role that this user should have in the team. Can be one of:  

#### Output
* output [team-membership](#team-membership)

### teams.team_id.projects.get
**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [`List team projects`](https://developer.github.com/v3/teams/#list-team-projects) endpoint.

Lists the organization projects for a team.


```js
github.teams.team_id.projects.get({
  "team_id": 0
}, context)
```

#### Input
* input `object`
  * team_id **required** `integer`
  * per_page `integer`: Results per page (max 100)
  * page `integer`: Page number of the results to fetch.

#### Output
* output `array`
  * items [team-project](#team-project)

### teams.team_id.projects.project_id.delete
**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Remove a project from a team](https://developer.github.com/v3/teams/#remove-a-project-from-a-team) endpoint.

Removes an organization project from a team. An organization owner or a team maintainer can remove any project from the team. To remove a project from a team as an organization member, the authenticated user must have `read` access to both the team and project, or `admin` access to the team or project. **Note:** This endpoint removes the project from the team, but does not delete it.


```js
github.teams.team_id.projects.project_id.delete({
  "team_id": 0,
  "project_id": 0
}, context)
```

#### Input
* input `object`
  * team_id **required** `integer`
  * project_id **required** `integer`

#### Output
*Output schema unknown*

### teams.team_id.projects.project_id.get
**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Check team permissions for a project](https://developer.github.com/v3/teams/#check-team-permissions-for-a-project) endpoint.

Checks whether a team has `read`, `write`, or `admin` permissions for an organization project. The response includes projects inherited from a parent team.


```js
github.teams.team_id.projects.project_id.get({
  "team_id": 0,
  "project_id": 0
}, context)
```

#### Input
* input `object`
  * team_id **required** `integer`
  * project_id **required** `integer`

#### Output
* output [team-project](#team-project)

### teams.team_id.projects.project_id.put
**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Add or update team project permissions](https://developer.github.com/v3/teams/#add-or-update-team-project-permissions) endpoint.

Adds an organization project to a team. To add a project to a team or update the team's permission on a project, the authenticated user must have `admin` permissions for the project. The project and team must be part of the same organization.


```js
github.teams.team_id.projects.project_id.put({
  "team_id": 0,
  "project_id": 0
}, context)
```

#### Input
* input `object`
  * team_id **required** `integer`
  * project_id **required** `integer`
  * body `object`
    * permission `string` (values: read, write, admin): The permission to grant to the team for this project. Can be one of:  

#### Output
*Output schema unknown*

### teams.team_id.repos.get
**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [List team repositories](https://developer.github.com/v3/teams/#list-team-repositories) endpoint.


```js
github.teams.team_id.repos.get({
  "team_id": 0
}, context)
```

#### Input
* input `object`
  * team_id **required** `integer`
  * per_page `integer`: Results per page (max 100)
  * page `integer`: Page number of the results to fetch.

#### Output
* output `array`
  * items [minimal-repository](#minimal-repository)

### teams.team_id.repos.owner.repo.delete
**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Remove a repository from a team](https://developer.github.com/v3/teams/#remove-a-repository-from-a-team) endpoint.

If the authenticated user is an organization owner or a team maintainer, they can remove any repositories from the team. To remove a repository from a team as an organization member, the authenticated user must have admin access to the repository and must be able to see the team. NOTE: This does not delete the repository, it just removes it from the team.


```js
github.teams.team_id.repos.owner.repo.delete({
  "team_id": 0,
  "owner": "",
  "repo": ""
}, context)
```

#### Input
* input `object`
  * team_id **required** `integer`
  * owner **required** `string`
  * repo **required** `string`

#### Output
*Output schema unknown*

### teams.team_id.repos.owner.repo.get
**Note**: Repositories inherited through a parent team will also be checked.

**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Check team permissions for a repository](https://developer.github.com/v3/teams/#check-team-permissions-for-a-repository) endpoint.

You can also get information about the specified repository, including what permissions the team grants on it, by passing the following custom [media type](https://developer.github.com/v3/media/) via the `Accept` header:


```js
github.teams.team_id.repos.owner.repo.get({
  "team_id": 0,
  "owner": "",
  "repo": ""
}, context)
```

#### Input
* input `object`
  * team_id **required** `integer`
  * owner **required** `string`
  * repo **required** `string`

#### Output
* output [team-repository](#team-repository)

### teams.team_id.repos.owner.repo.put
**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Add or update team repository permissions](https://developer.github.com/v3/teams/#add-or-update-team-repository-permissions) endpoint.

To add a repository to a team or update the team's permission on a repository, the authenticated user must have admin access to the repository, and must be able to see the team. The repository must be owned by the organization, or a direct fork of a repository owned by the organization. You will get a `422 Unprocessable Entity` status if you attempt to add a repository to a team that is not owned by the organization.

Note that, if you choose not to pass any parameters, you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP verbs](https://developer.github.com/v3/#http-verbs)."


```js
github.teams.team_id.repos.owner.repo.put({
  "team_id": 0,
  "owner": "",
  "repo": ""
}, context)
```

#### Input
* input `object`
  * team_id **required** `integer`
  * owner **required** `string`
  * repo **required** `string`
  * body `object`
    * permission `string` (values: pull, push, admin): The permission to grant the team on this repository. Can be one of:  

#### Output
*Output schema unknown*

### teams.team_id.team_sync.group_mappings.get
**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [`List IdP groups for a team`](https://developer.github.com/v3/teams/team_sync/#list-idp-groups-for-a-team) endpoint.

Team synchronization is available for organizations using GitHub Enterprise Cloud. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

List IdP groups connected to a team on GitHub.


```js
github.teams.team_id.team_sync.group_mappings.get({
  "team_id": 0
}, context)
```

#### Input
* input `object`
  * team_id **required** `integer`

#### Output
* output [group-mapping](#group-mapping)

### teams.team_id.team_sync.group_mappings.patch
**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [`Create or update IdP group connections`](https://developer.github.com/v3/teams/team_sync/#create-or-update-idp-group-connections) endpoint.

Team synchronization is available for organizations using GitHub Enterprise Cloud. For more information, see [GitHub's products](https://help.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.

Creates, updates, or removes a connection between a team and an IdP group. When adding groups to a team, you must include all new and existing groups to avoid replacing existing groups with the new ones. Specifying an empty `groups` array will remove all connections for a team.


```js
github.teams.team_id.team_sync.group_mappings.patch({
  "team_id": 0
}, context)
```

#### Input
* input `object`
  * team_id **required** `integer`
  * body `object`
    * groups **required** `array`: The IdP groups you want to connect to a GitHub team. When updating, the new `groups` object will replace the original one. You must include any existing groups that you don't want to remove.
      * items `object`
        * description `string`
        * group_description **required** `string`: Description of the IdP group.
        * group_id **required** `string`: ID of the IdP group.
        * group_name **required** `string`: Name of the IdP group.
        * id `string`
        * name `string`
    * synced_at `string`

#### Output
* output [group-mapping](#group-mapping)

### teams.team_id.teams.get
**Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [`List child teams`](https://developer.github.com/v3/teams/#list-child-teams) endpoint.


```js
github.teams.team_id.teams.get({
  "team_id": 0
}, context)
```

#### Input
* input `object`
  * team_id **required** `integer`
  * per_page `integer`: Results per page (max 100)
  * page `integer`: Page number of the results to fetch.

#### Output
* output `array`
  * items [team](#team)

### user.get
If the authenticated user is authenticated through basic authentication or OAuth with the `user` scope, then the response lists public and private profile information.

If the authenticated user is authenticated through OAuth without the `user` scope, then the response lists only public profile information.


```js
github.user.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### user.patch
**Note:** If your email is set to private and you send an `email` parameter as part of this request to update your profile, your privacy settings are still enforced: the email address will not be displayed on your public profile or via the API.


```js
github.user.patch({}, context)
```

#### Input
* input `object`
  * body `object`
    * bio `string`: The new short biography of the user.
    * blog `string`: The new blog URL of the user.
    * company `string`: The new company of the user.
    * email `string`: The publicly visible email address of the user.
    * hireable `boolean`: The new hiring availability of the user.
    * location `string`: The new location of the user.
    * name `string`: The new name of the user.
    * twitter_username `string`: The new Twitter username of the user.

#### Output
* output [private-user](#private-user)

### user.blocks.get
List the users you've blocked on your personal account.


```js
github.user.blocks.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [simple-user](#simple-user)

### user.blocks.username.delete
Unblock a user


```js
github.user.blocks.username.delete({
  "username": ""
}, context)
```

#### Input
* input `object`
  * username **required** `string`

#### Output
*Output schema unknown*

### user.blocks.username.get
If the user is blocked:

If the user is not blocked:


```js
github.user.blocks.username.get({
  "username": ""
}, context)
```

#### Input
* input `object`
  * username **required** `string`

#### Output
*Output schema unknown*

### user.blocks.username.put
Block a user


```js
github.user.blocks.username.put({
  "username": ""
}, context)
```

#### Input
* input `object`
  * username **required** `string`

#### Output
*Output schema unknown*

### user.email.visibility.patch
Sets the visibility for your primary email addresses.


```js
github.user.email.visibility.patch({}, context)
```

#### Input
* input `object`
  * body `object`
    * email **required** `string`: An email address associated with the GitHub user account to manage.
    * visibility **required** `string` (values: public, private): Denotes whether an email is publically visible.

#### Output
* output `array`
  * items [email](#email)

### user.emails.delete
This endpoint is accessible with the `user` scope.


```js
github.user.emails.delete({}, context)
```

#### Input
* input `object`

#### Output
*Output schema unknown*

### user.emails.get
Lists all of your email addresses, and specifies which one is visible to the public. This endpoint is accessible with the `user:email` scope.


```js
github.user.emails.get({}, context)
```

#### Input
* input `object`
  * per_page `integer`: Results per page (max 100)
  * page `integer`: Page number of the results to fetch.

#### Output
* output `array`
  * items [email](#email)

### user.emails.post
This endpoint is accessible with the `user` scope.


```js
github.user.emails.post({}, context)
```

#### Input
* input `object`

#### Output
* output `array`
  * items [email](#email)

### user.followers.get
Lists the people following the authenticated user.


```js
github.user.followers.get({}, context)
```

#### Input
* input `object`
  * per_page `integer`: Results per page (max 100)
  * page `integer`: Page number of the results to fetch.

#### Output
* output `array`
  * items [simple-user](#simple-user)

### user.following.get
Lists the people who the authenticated user follows.


```js
github.user.following.get({}, context)
```

#### Input
* input `object`
  * per_page `integer`: Results per page (max 100)
  * page `integer`: Page number of the results to fetch.

#### Output
* output `array`
  * items [simple-user](#simple-user)

### user.following.username.delete
Unfollowing a user requires the user to be logged in and authenticated with basic auth or OAuth with the `user:follow` scope.


```js
github.user.following.username.delete({
  "username": ""
}, context)
```

#### Input
* input `object`
  * username **required** `string`

#### Output
*Output schema unknown*

### user.following.username.get
Check if a person is followed by the authenticated user


```js
github.user.following.username.get({
  "username": ""
}, context)
```

#### Input
* input `object`
  * username **required** `string`

#### Output
*Output schema unknown*

### user.following.username.put
Note that you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP verbs](https://developer.github.com/v3/#http-verbs)."

Following a user requires the user to be logged in and authenticated with basic auth or OAuth with the `user:follow` scope.


```js
github.user.following.username.put({
  "username": ""
}, context)
```

#### Input
* input `object`
  * username **required** `string`

#### Output
*Output schema unknown*

### user.gpg_keys.get
Lists the current user's GPG keys. Requires that you are authenticated via Basic Auth or via OAuth with at least `read:gpg_key` [scope](https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).


```js
github.user.gpg_keys.get({}, context)
```

#### Input
* input `object`
  * per_page `integer`: Results per page (max 100)
  * page `integer`: Page number of the results to fetch.

#### Output
* output `array`
  * items [gpg-key](#gpg-key)

### user.gpg_keys.post
Adds a GPG key to the authenticated user's GitHub account. Requires that you are authenticated via Basic Auth, or OAuth with at least `write:gpg_key` [scope](https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).


```js
github.user.gpg_keys.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * armored_public_key **required** `string`: A GPG key in ASCII-armored format.

#### Output
* output [gpg-key](#gpg-key)

### user.gpg_keys.gpg_key_id.delete
Removes a GPG key from the authenticated user's GitHub account. Requires that you are authenticated via Basic Auth or via OAuth with at least `admin:gpg_key` [scope](https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).


```js
github.user.gpg_keys.gpg_key_id.delete({
  "gpg_key_id": 0
}, context)
```

#### Input
* input `object`
  * gpg_key_id **required** `integer`: gpg_key_id parameter

#### Output
*Output schema unknown*

### user.gpg_keys.gpg_key_id.get
View extended details for a single GPG key. Requires that you are authenticated via Basic Auth or via OAuth with at least `read:gpg_key` [scope](https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).


```js
github.user.gpg_keys.gpg_key_id.get({
  "gpg_key_id": 0
}, context)
```

#### Input
* input `object`
  * gpg_key_id **required** `integer`: gpg_key_id parameter

#### Output
* output [gpg-key](#gpg-key)

### user.installations.get
Lists installations of your GitHub App that the authenticated user has explicit permission (`:read`, `:write`, or `:admin`) to access.

You must use a [user-to-server OAuth access token](https://developer.github.com/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/#identifying-users-on-your-site), created for a user who has authorized your GitHub App, to access this endpoint.

The authenticated user has explicit permission to access repositories they own, repositories where they are a collaborator, and repositories that they can access through an organization membership.

You can find the permissions for the installation under the `permissions` key.


```js
github.user.installations.get({}, context)
```

#### Input
* input `object`
  * per_page `integer`: Results per page (max 100)
  * page `integer`: Page number of the results to fetch.

#### Output
* output `object`
  * installations `array`
    * items [installation](#installation)
  * total_count `integer`

### user.installations.installation_id.repositories.get
List repositories that the authenticated user has explicit permission (`:read`, `:write`, or `:admin`) to access for an installation.

The authenticated user has explicit permission to access repositories they own, repositories where they are a collaborator, and repositories that they can access through an organization membership.

You must use a [user-to-server OAuth access token](https://developer.github.com/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/#identifying-users-on-your-site), created for a user who has authorized your GitHub App, to access this endpoint.

The access the user has to each repository is included in the hash under the `permissions` key.


```js
github.user.installations.installation_id.repositories.get({
  "installation_id": 0
}, context)
```

#### Input
* input `object`
  * installation_id **required** `integer`: installation_id parameter
  * per_page `integer`: Results per page (max 100)
  * page `integer`: Page number of the results to fetch.

#### Output
* output `object`
  * repositories `array`
    * items [repository](#repository)
  * repository_selection `string`
  * total_count `integer`

### user.installations.installation_id.repositories.repository_id.delete
Remove a single repository from an installation. The authenticated user must have admin access to the repository.

You must use a personal access token (which you can create via the [command line](https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line/) or the [OAuth Authorizations API](https://developer.github.com/v3/oauth_authorizations/#create-a-new-authorization)) or [Basic Authentication](https://developer.github.com/v3/auth/#basic-authentication) to access this endpoint.


```js
github.user.installations.installation_id.repositories.repository_id.delete({
  "installation_id": 0,
  "repository_id": 0
}, context)
```

#### Input
* input `object`
  * installation_id **required** `integer`: installation_id parameter
  * repository_id **required** `integer`: repository_id parameter

#### Output
*Output schema unknown*

### user.installations.installation_id.repositories.repository_id.put
Add a single repository to an installation. The authenticated user must have admin access to the repository.

You must use a personal access token (which you can create via the [command line](https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line/) or the [OAuth Authorizations API](https://developer.github.com/v3/oauth_authorizations/#create-a-new-authorization)) or [Basic Authentication](https://developer.github.com/v3/auth/#basic-authentication) to access this endpoint.


```js
github.user.installations.installation_id.repositories.repository_id.put({
  "installation_id": 0,
  "repository_id": 0
}, context)
```

#### Input
* input `object`
  * installation_id **required** `integer`: installation_id parameter
  * repository_id **required** `integer`: repository_id parameter

#### Output
*Output schema unknown*

### user.issues.get
List issues across owned and member repositories assigned to the authenticated user.

**Note**: GitHub's REST API v3 considers every pull request an issue, but not every issue is a pull request. For this
reason, "Issues" endpoints may return both issues and pull requests in the response. You can identify pull requests by
the `pull_request` key. Be aware that the `id` of a pull request returned from "Issues" endpoints will be an _issue id_. To find out the pull
request id, use the "[List pull requests](https://developer.github.com/v3/pulls/#list-pull-requests)" endpoint.


```js
github.user.issues.get({}, context)
```

#### Input
* input `object`
  * filter `string` (values: assigned, created, mentioned, subscribed, all): Indicates which sorts of issues to return. Can be one of:  
  * state `string` (values: open, closed, all): Indicates the state of the issues to return. Can be either `open`, `closed`, or `all`.
  * labels `string`: A list of comma separated label names. Example: `bug,ui,@high`
  * sort `string` (values: created, updated, comments): What to sort results by. Can be either `created`, `updated`, `comments`.
  * direction `string` (values: asc, desc): One of `asc` (ascending) or `desc` (descending).
  * since `string`: Only show notifications updated after the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
  * per_page `integer`: Results per page (max 100)
  * page `integer`: Page number of the results to fetch.

#### Output
* output `array`
  * items [issue](#issue)

### user.keys.get
Lists the public SSH keys for the authenticated user's GitHub account. Requires that you are authenticated via Basic Auth or via OAuth with at least `read:public_key` [scope](https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).


```js
github.user.keys.get({}, context)
```

#### Input
* input `object`
  * per_page `integer`: Results per page (max 100)
  * page `integer`: Page number of the results to fetch.

#### Output
* output `array`
  * items [key](#key)

### user.keys.post
Adds a public SSH key to the authenticated user's GitHub account. Requires that you are authenticated via Basic Auth, or OAuth with at least `write:public_key` [scope](https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).


```js
github.user.keys.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * key **required** `string`: The public SSH key to add to your GitHub account.
    * title `string`: A descriptive name for the new key.

#### Output
* output [key](#key)

### user.keys.key_id.delete
Removes a public SSH key from the authenticated user's GitHub account. Requires that you are authenticated via Basic Auth or via OAuth with at least `admin:public_key` [scope](https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).


```js
github.user.keys.key_id.delete({
  "key_id": 0
}, context)
```

#### Input
* input `object`
  * key_id **required** `integer`: key_id parameter

#### Output
*Output schema unknown*

### user.keys.key_id.get
View extended details for a single public SSH key. Requires that you are authenticated via Basic Auth or via OAuth with at least `read:public_key` [scope](https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).


```js
github.user.keys.key_id.get({
  "key_id": 0
}, context)
```

#### Input
* input `object`
  * key_id **required** `integer`: key_id parameter

#### Output
* output [key](#key)

### user.marketplace_purchases.get
Lists the active subscriptions for the authenticated user. You must use a [user-to-server OAuth access token](https://developer.github.com/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/#identifying-users-on-your-site), created for a user who has authorized your GitHub App, to access this endpoint. . OAuth Apps must authenticate using an [OAuth token](https://developer.github.com/apps/building-github-apps/authenticating-with-github-apps/).


```js
github.user.marketplace_purchases.get({}, context)
```

#### Input
* input `object`
  * per_page `integer`: Results per page (max 100)
  * page `integer`: Page number of the results to fetch.

#### Output
* output `array`
  * items [user-marketplace-purchase](#user-marketplace-purchase)

### user.marketplace_purchases.stubbed.get
Lists the active subscriptions for the authenticated user. You must use a [user-to-server OAuth access token](https://developer.github.com/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/#identifying-users-on-your-site), created for a user who has authorized your GitHub App, to access this endpoint. . OAuth Apps must authenticate using an [OAuth token](https://developer.github.com/apps/building-github-apps/authenticating-with-github-apps/).


```js
github.user.marketplace_purchases.stubbed.get({}, context)
```

#### Input
* input `object`
  * per_page `integer`: Results per page (max 100)
  * page `integer`: Page number of the results to fetch.

#### Output
* output `array`
  * items [user-marketplace-purchase](#user-marketplace-purchase)

### user.memberships.orgs.get
List organization memberships for the authenticated user


```js
github.user.memberships.orgs.get({}, context)
```

#### Input
* input `object`
  * state `string` (values: active, pending): Indicates the state of the memberships to return. Can be either `active` or `pending`. If not specified, the API returns both active and pending memberships.
  * per_page `integer`: Results per page (max 100)
  * page `integer`: Page number of the results to fetch.

#### Output
* output `array`
  * items [org-membership](#org-membership)

### user.memberships.orgs.org.get
Get an organization membership for the authenticated user


```js
github.user.memberships.orgs.org.get({
  "org": ""
}, context)
```

#### Input
* input `object`
  * org **required** `string`

#### Output
* output [org-membership](#org-membership)

### user.memberships.orgs.org.patch
Update an organization membership for the authenticated user


```js
github.user.memberships.orgs.org.patch({
  "org": ""
}, context)
```

#### Input
* input `object`
  * org **required** `string`
  * body `object`
    * state **required** `string` (values: active): The state that the membership should be in. Only `"active"` will be accepted.

#### Output
* output [org-membership](#org-membership)

### user.migrations.get
Lists all migrations a user has started.


```js
github.user.migrations.get({}, context)
```

#### Input
* input `object`
  * per_page `integer`: Results per page (max 100)
  * page `integer`: Page number of the results to fetch.

#### Output
* output `array`
  * items [migration](#migration)

### user.migrations.post
Initiates the generation of a user migration archive.


```js
github.user.migrations.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * exclude `array`: Exclude attributes from the API response to improve performance
      * items `string` (values: repositories): Allowed values that can be passed to the exclude param.
    * exclude_attachments `boolean`: Do not include attachments in the migration
    * lock_repositories `boolean`: Lock the repositories being migrated at the start of the migration
    * repositories **required** `array`
      * items `string`: Repository path, owner and name

#### Output
* output [migration](#migration)

### user.migrations.migration_id.get
Fetches a single user migration. The response includes the `state` of the migration, which can be one of the following values:

*   `pending` - the migration hasn't started yet.
*   `exporting` - the migration is in progress.
*   `exported` - the migration finished successfully.
*   `failed` - the migration failed.

Once the migration has been `exported` you can [download the migration archive](https://developer.github.com/v3/migrations/users/#download-a-user-migration-archive).


```js
github.user.migrations.migration_id.get({
  "migration_id": 0
}, context)
```

#### Input
* input `object`
  * migration_id **required** `integer`: migration_id parameter
  * exclude `array`

#### Output
* output [migration](#migration)

### user.migrations.migration_id.archive.delete
Deletes a previous migration archive. Downloadable migration archives are automatically deleted after seven days. Migration metadata, which is returned in the [List user migrations](https://developer.github.com/v3/migrations/users/#list-user-migrations) and [Get a user migration status](https://developer.github.com/v3/migrations/users/#get-a-user-migration-status) endpoints, will continue to be available even after an archive is deleted.


```js
github.user.migrations.migration_id.archive.delete({
  "migration_id": 0
}, context)
```

#### Input
* input `object`
  * migration_id **required** `integer`: migration_id parameter

#### Output
*Output schema unknown*

### user.migrations.migration_id.archive.get
Fetches the URL to download the migration archive as a `tar.gz` file. Depending on the resources your repository uses, the migration archive can contain JSON files with data for these objects:

*   attachments
*   bases
*   commit\_comments
*   issue\_comments
*   issue\_events
*   issues
*   milestones
*   organizations
*   projects
*   protected\_branches
*   pull\_request\_reviews
*   pull\_requests
*   releases
*   repositories
*   review\_comments
*   schema
*   users

The archive will also contain an `attachments` directory that includes all attachment files uploaded to GitHub.com and a `repositories` directory that contains the repository's Git data.


```js
github.user.migrations.migration_id.archive.get({
  "migration_id": 0
}, context)
```

#### Input
* input `object`
  * migration_id **required** `integer`: migration_id parameter

#### Output
*Output schema unknown*

### user.migrations.migration_id.repos.repo_name.lock.delete
Unlocks a repository. You can lock repositories when you [start a user migration](https://developer.github.com/v3/migrations/users/#start-a-user-migration). Once the migration is complete you can unlock each repository to begin using it again or [delete the repository](https://developer.github.com/v3/repos/#delete-a-repository) if you no longer need the source data. Returns a status of `404 Not Found` if the repository is not locked.


```js
github.user.migrations.migration_id.repos.repo_name.lock.delete({
  "migration_id": 0,
  "repo_name": ""
}, context)
```

#### Input
* input `object`
  * migration_id **required** `integer`: migration_id parameter
  * repo_name **required** `string`: repo_name parameter

#### Output
*Output schema unknown*

### user.migrations.migration_id.repositories.get
Lists all the repositories for this user migration.


```js
github.user.migrations.migration_id.repositories.get({
  "migration_id": 0
}, context)
```

#### Input
* input `object`
  * migration_id **required** `integer`: migration_id parameter
  * per_page `integer`: Results per page (max 100)
  * page `integer`: Page number of the results to fetch.

#### Output
* output `array`
  * items [minimal-repository](#minimal-repository)

### user.orgs.get
List organizations for the authenticated user.

**OAuth scope requirements**

This only lists organizations that your authorization allows you to operate on in some way (e.g., you can list teams with `read:org` scope, you can publicize your organization membership with `user` scope, etc.). Therefore, this API requires at least `user` or `read:org` scope. OAuth requests with insufficient scope receive a `403 Forbidden` response.


```js
github.user.orgs.get({}, context)
```

#### Input
* input `object`
  * per_page `integer`: Results per page (max 100)
  * page `integer`: Page number of the results to fetch.

#### Output
* output `array`
  * items [organization-simple](#organization-simple)

### user.projects.post
Create a user project


```js
github.user.projects.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * body `string`: Body of the project
    * name **required** `string`: Name of the project

#### Output
* output [project](#project)

### user.public_emails.get
Lists your publicly visible email address, which you can set with the [Set primary email visibility for the authenticated user](https://developer.github.com/v3/users/emails/#set-primary-email-visibility-for-the-authenticated-user) endpoint. This endpoint is accessible with the `user:email` scope.


```js
github.user.public_emails.get({}, context)
```

#### Input
* input `object`
  * per_page `integer`: Results per page (max 100)
  * page `integer`: Page number of the results to fetch.

#### Output
* output `array`
  * items [email](#email)

### user.repos.get
Lists repositories that the authenticated user has explicit permission (`:read`, `:write`, or `:admin`) to access.

The authenticated user has explicit permission to access repositories they own, repositories where they are a collaborator, and repositories that they can access through an organization membership.


```js
github.user.repos.get({}, context)
```

#### Input
* input `object`
  * visibility `string` (values: all, public, private): Can be one of `all`, `public`, or `private`.
  * affiliation `string`: Comma-separated list of values. Can include:  
  * type `string` (values: all, owner, public, private, member): Can be one of `all`, `owner`, `public`, `private`, `member`. Default: `all`  
  * sort `string` (values: created, updated, pushed, full_name): Can be one of `created`, `updated`, `pushed`, `full_name`.
  * direction `string` (values: asc, desc): Can be one of `asc` or `desc`. Default: `asc` when using `full_name`, otherwise `desc`
  * per_page `integer`: Results per page (max 100)
  * page `integer`: Page number of the results to fetch.
  * since `string`: Only show notifications updated after the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
  * before `string`: Only show notifications updated before the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.

#### Output
* output `array`
  * items [repository](#repository)

### user.repos.post
Creates a new repository for the authenticated user.

**OAuth scope requirements**

When using [OAuth](https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/), authorizations must include:

*   `public_repo` scope or `repo` scope to create a public repository
*   `repo` scope to create a private repository


```js
github.user.repos.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * allow_merge_commit `boolean`: Whether to allow merge commits for pull requests.
    * allow_rebase_merge `boolean`: Whether to allow rebase merges for pull requests.
    * allow_squash_merge `boolean`: Whether to allow squash merges for pull requests.
    * auto_init `boolean`: Whether the repository is initialized with a minimal README.
    * delete_branch_on_merge `boolean`: Whether to delete head branches when pull requests are merged
    * description `string`: A short description of the repository.
    * gitignore_template `string`: The desired language or platform to apply to the .gitignore.
    * has_downloads `boolean`: Whether downloads are enabled.
    * has_issues `boolean`: Whether issues are enabled.
    * has_projects `boolean`: Whether projects are enabled.
    * has_wiki `boolean`: Whether the wiki is enabled.
    * homepage `string`: A URL with more information about the repository.
    * is_template `boolean`: Whether this repository acts as a template that can be used to generate new repositories.
    * license_template `string`: The license keyword of the open source license for this repository.
    * name **required** `string`: The name of the repository.
    * private `boolean`: Whether the repository is private or public.
    * team_id `integer`: The id of the team that will be granted access to this repository. This is only valid when creating a repository in an organization.

#### Output
* output [repository](#repository)

### user.repository_invitations.get
When authenticating as a user, this endpoint will list all currently open repository invitations for that user.


```js
github.user.repository_invitations.get({}, context)
```

#### Input
* input `object`
  * per_page `integer`: Results per page (max 100)
  * page `integer`: Page number of the results to fetch.

#### Output
* output `array`
  * items [repository-invitation](#repository-invitation)

### user.repository_invitations.invitation_id.delete
Decline a repository invitation


```js
github.user.repository_invitations.invitation_id.delete({
  "invitation_id": 0
}, context)
```

#### Input
* input `object`
  * invitation_id **required** `integer`: invitation_id parameter

#### Output
*Output schema unknown*

### user.repository_invitations.invitation_id.patch
Accept a repository invitation


```js
github.user.repository_invitations.invitation_id.patch({
  "invitation_id": 0
}, context)
```

#### Input
* input `object`
  * invitation_id **required** `integer`: invitation_id parameter

#### Output
*Output schema unknown*

### user.starred.get
Lists repositories the authenticated user has starred.

You can also find out _when_ stars were created by passing the following custom [media type](https://developer.github.com/v3/media/) via the `Accept` header:


```js
github.user.starred.get({}, context)
```

#### Input
* input `object`
  * sort `string` (values: created, updated): One of `created` (when the repository was starred) or `updated` (when it was last pushed to).
  * direction `string` (values: asc, desc): One of `asc` (ascending) or `desc` (descending).
  * per_page `integer`: Results per page (max 100)
  * page `integer`: Page number of the results to fetch.

#### Output
* output `array`
  * items [repository](#repository)

### user.starred.owner.repo.delete
Unstar a repository for the authenticated user


```js
github.user.starred.owner.repo.delete({
  "owner": "",
  "repo": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`

#### Output
*Output schema unknown*

### user.starred.owner.repo.get
Check if a repository is starred by the authenticated user


```js
github.user.starred.owner.repo.get({
  "owner": "",
  "repo": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`

#### Output
*Output schema unknown*

### user.starred.owner.repo.put
Note that you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP verbs](https://developer.github.com/v3/#http-verbs)."


```js
github.user.starred.owner.repo.put({
  "owner": "",
  "repo": ""
}, context)
```

#### Input
* input `object`
  * owner **required** `string`
  * repo **required** `string`

#### Output
*Output schema unknown*

### user.subscriptions.get
Lists repositories the authenticated user is watching.


```js
github.user.subscriptions.get({}, context)
```

#### Input
* input `object`
  * per_page `integer`: Results per page (max 100)
  * page `integer`: Page number of the results to fetch.

#### Output
* output `array`
  * items [minimal-repository](#minimal-repository)

### user.teams.get
List all of the teams across all of the organizations to which the authenticated user belongs. This method requires `user`, `repo`, or `read:org` [scope](https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/) when authenticating via [OAuth](https://developer.github.com/apps/building-oauth-apps/).


```js
github.user.teams.get({}, context)
```

#### Input
* input `object`
  * per_page `integer`: Results per page (max 100)
  * page `integer`: Page number of the results to fetch.

#### Output
* output `array`
  * items [team-full](#team-full)

### users.get
Lists all users, in the order that they signed up on GitHub. This list includes personal user accounts and organization accounts.

Note: Pagination is powered exclusively by the `since` parameter. Use the [Link header](https://developer.github.com/v3/#link-header) to get the URL for the next page of users.


```js
github.users.get({}, context)
```

#### Input
* input `object`
  * since `string`: Only show notifications updated after the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
  * per_page `integer`: Results per page (max 100)

#### Output
* output `array`
  * items [simple-user](#simple-user)

### users.username.get
Provides publicly available information about someone with a GitHub account.

GitHub Apps with the `Plan` user permission can use this endpoint to retrieve information about a user's GitHub plan. The GitHub App must be authenticated as a user. See "[Identifying and authorizing users for GitHub Apps](https://developer.github.com/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/)" for details about authentication. For an example response, see "[Response with GitHub plan information](https://developer.github.com/v3/users/#response-with-github-plan-information)."

The `email` key in the following response is the publicly visible email address from your GitHub [profile page](https://github.com/settings/profile). When setting up your profile, you can select a primary email address to be “public” which provides an email entry for this endpoint. If you do not set a public email address for `email`, then it will have a value of `null`. You only see publicly visible email addresses when authenticated with GitHub. For more information, see [Authentication](https://developer.github.com/v3/#authentication).

The Emails API enables you to list all of your email addresses, and toggle a primary email to be visible publicly. For more information, see "[Emails API](https://developer.github.com/v3/users/emails/)".


```js
github.users.username.get({
  "username": ""
}, context)
```

#### Input
* input `object`
  * username **required** `string`

#### Output
*Output schema unknown*

### users.username.events.get
If you are authenticated as the given user, you will see your private events. Otherwise, you'll only see public events.


```js
github.users.username.events.get({
  "username": ""
}, context)
```

#### Input
* input `object`
  * username **required** `string`
  * per_page `integer`: Results per page (max 100)
  * page `integer`: Page number of the results to fetch.

#### Output
* output `array`
  * items [event](#event)

### users.username.events.orgs.org.get
This is the user's organization dashboard. You must be authenticated as the user to view this.


```js
github.users.username.events.orgs.org.get({
  "username": "",
  "org": ""
}, context)
```

#### Input
* input `object`
  * username **required** `string`
  * org **required** `string`
  * per_page `integer`: Results per page (max 100)
  * page `integer`: Page number of the results to fetch.

#### Output
* output `array`
  * items [event](#event)

### users.username.events.public.get
List public events for a user


```js
github.users.username.events.public.get({
  "username": ""
}, context)
```

#### Input
* input `object`
  * username **required** `string`
  * per_page `integer`: Results per page (max 100)
  * page `integer`: Page number of the results to fetch.

#### Output
* output `array`
  * items [event](#event)

### users.username.followers.get
Lists the people following the specified user.


```js
github.users.username.followers.get({
  "username": ""
}, context)
```

#### Input
* input `object`
  * username **required** `string`
  * per_page `integer`: Results per page (max 100)
  * page `integer`: Page number of the results to fetch.

#### Output
* output `array`
  * items [simple-user](#simple-user)

### users.username.following.get
Lists the people who the specified user follows.


```js
github.users.username.following.get({
  "username": ""
}, context)
```

#### Input
* input `object`
  * username **required** `string`
  * per_page `integer`: Results per page (max 100)
  * page `integer`: Page number of the results to fetch.

#### Output
* output `array`
  * items [simple-user](#simple-user)

### users.username.following.target_user.get
Check if a user follows another user


```js
github.users.username.following.target_user.get({
  "username": "",
  "target_user": ""
}, context)
```

#### Input
* input `object`
  * username **required** `string`
  * target_user **required** `string`: target_user parameter

#### Output
*Output schema unknown*

### users.username.gists.get
Lists public gists for the specified user:


```js
github.users.username.gists.get({
  "username": ""
}, context)
```

#### Input
* input `object`
  * username **required** `string`
  * since `string`: Only show notifications updated after the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
  * per_page `integer`: Results per page (max 100)
  * page `integer`: Page number of the results to fetch.

#### Output
* output `array`
  * items [base-gist](#base-gist)

### users.username.gpg_keys.get
Lists the GPG keys for a user. This information is accessible by anyone.


```js
github.users.username.gpg_keys.get({
  "username": ""
}, context)
```

#### Input
* input `object`
  * username **required** `string`
  * per_page `integer`: Results per page (max 100)
  * page `integer`: Page number of the results to fetch.

#### Output
* output `array`
  * items [gpg-key](#gpg-key)

### users.username.hovercard.get
Provides hovercard information when authenticated through basic auth or OAuth with the `repo` scope. You can find out more about someone in relation to their pull requests, issues, repositories, and organizations.

The `subject_type` and `subject_id` parameters provide context for the person's hovercard, which returns more information than without the parameters. For example, if you wanted to find out more about `octocat` who owns the `Spoon-Knife` repository via cURL, it would look like this:

```shell
 curl -u username:token
  https://api.github.com/users/octocat/hovercard?subject_type=repository&subject_id=1300192
```


```js
github.users.username.hovercard.get({
  "username": ""
}, context)
```

#### Input
* input `object`
  * username **required** `string`
  * subject_type `string` (values: organization, repository, issue, pull_request): Identifies which additional information you'd like to receive about the person's hovercard. Can be `organization`, `repository`, `issue`, `pull_request`. **Required** when using `subject_id`.
  * subject_id `string`: Uses the ID for the `subject_type` you specified. **Required** when using `subject_type`.

#### Output
* output [hovercard](#hovercard)

### users.username.installation.get
Enables an authenticated GitHub App to find the user’s installation information.

You must use a [JWT](https://developer.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.


```js
github.users.username.installation.get({
  "username": ""
}, context)
```

#### Input
* input `object`
  * username **required** `string`

#### Output
* output [installation](#installation)

### users.username.keys.get
Lists the _verified_ public SSH keys for a user. This is accessible by anyone.


```js
github.users.username.keys.get({
  "username": ""
}, context)
```

#### Input
* input `object`
  * username **required** `string`
  * per_page `integer`: Results per page (max 100)
  * page `integer`: Page number of the results to fetch.

#### Output
* output `array`
  * items [key-simple](#key-simple)

### users.username.orgs.get
List [public organization memberships](https://help.github.com/articles/publicizing-or-concealing-organization-membership) for the specified user.

This method only lists _public_ memberships, regardless of authentication. If you need to fetch all of the organization memberships (public and private) for the authenticated user, use the [List organizations for the authenticated user](https://developer.github.com/v3/orgs/#list-organizations-for-the-authenticated-user) API instead.


```js
github.users.username.orgs.get({
  "username": ""
}, context)
```

#### Input
* input `object`
  * username **required** `string`
  * per_page `integer`: Results per page (max 100)
  * page `integer`: Page number of the results to fetch.

#### Output
* output `array`
  * items [organization-simple](#organization-simple)

### users.username.projects.get
List user projects


```js
github.users.username.projects.get({
  "username": ""
}, context)
```

#### Input
* input `object`
  * username **required** `string`
  * state `string` (values: open, closed, all): Indicates the state of the projects to return. Can be either `open`, `closed`, or `all`.
  * per_page `integer`: Results per page (max 100)
  * page `integer`: Page number of the results to fetch.

#### Output
* output `array`
  * items [project](#project)

### users.username.received_events.get
These are events that you've received by watching repos and following users. If you are authenticated as the given user, you will see private events. Otherwise, you'll only see public events.


```js
github.users.username.received_events.get({
  "username": ""
}, context)
```

#### Input
* input `object`
  * username **required** `string`
  * per_page `integer`: Results per page (max 100)
  * page `integer`: Page number of the results to fetch.

#### Output
* output `array`
  * items [event](#event)

### users.username.received_events.public.get
List public events received by a user


```js
github.users.username.received_events.public.get({
  "username": ""
}, context)
```

#### Input
* input `object`
  * username **required** `string`
  * per_page `integer`: Results per page (max 100)
  * page `integer`: Page number of the results to fetch.

#### Output
* output `array`
  * items [event](#event)

### users.username.repos.get
Lists public repositories for the specified user.


```js
github.users.username.repos.get({
  "username": ""
}, context)
```

#### Input
* input `object`
  * username **required** `string`
  * type `string` (values: all, owner, member): Can be one of `all`, `owner`, `member`.
  * sort `string` (values: created, updated, pushed, full_name): Can be one of `created`, `updated`, `pushed`, `full_name`.
  * direction `string` (values: asc, desc): Can be one of `asc` or `desc`. Default: `asc` when using `full_name`, otherwise `desc`
  * per_page `integer`: Results per page (max 100)
  * page `integer`: Page number of the results to fetch.

#### Output
* output `array`
  * items [minimal-repository](#minimal-repository)

### users.username.settings.billing.actions.get
**Warning:** The Billing API is currently in public beta and subject to change.

Gets the summary of the free and paid GitHub Actions minutes used.

Paid minutes only apply to workflows in private repositories that use GitHub-hosted runners. Minutes used is listed for each GitHub-hosted runner operating system. Any job re-runs are also included in the usage. The usage does not include the multiplier for macOS and Windows runners and is not rounded up to the nearest whole minute. For more information, see "[Managing billing for GitHub Actions](https://help.github.com/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-actions)".

Access tokens must have the `user` scope.


```js
github.users.username.settings.billing.actions.get({
  "username": ""
}, context)
```

#### Input
* input `object`
  * username **required** `string`

#### Output
* output [actions-billing-usage](#actions-billing-usage)

### users.username.settings.billing.packages.get
**Warning:** The Billing API is currently in public beta and subject to change.

Gets the free and paid storage used for GitHub Packages in gigabytes.

Paid minutes only apply to packages stored for private repositories. For more information, see "[Managing billing for GitHub Packages](https://help.github.com/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-packages)."

Access tokens must have the `user` scope.


```js
github.users.username.settings.billing.packages.get({
  "username": ""
}, context)
```

#### Input
* input `object`
  * username **required** `string`

#### Output
* output [packages-billing-usage](#packages-billing-usage)

### users.username.settings.billing.shared_storage.get
**Warning:** The Billing API is currently in public beta and subject to change.

Gets the estimated paid and estimated total storage used for GitHub Actions and Github Packages.

Paid minutes only apply to packages stored for private repositories. For more information, see "[Managing billing for GitHub Packages](https://help.github.com/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-packages)."

Access tokens must have the `user` scope.


```js
github.users.username.settings.billing.shared_storage.get({
  "username": ""
}, context)
```

#### Input
* input `object`
  * username **required** `string`

#### Output
* output [combined-billing-usage](#combined-billing-usage)

### users.username.starred.get
Lists repositories a user has starred.

You can also find out _when_ stars were created by passing the following custom [media type](https://developer.github.com/v3/media/) via the `Accept` header:


```js
github.users.username.starred.get({
  "username": ""
}, context)
```

#### Input
* input `object`
  * username **required** `string`
  * sort `string` (values: created, updated): One of `created` (when the repository was starred) or `updated` (when it was last pushed to).
  * direction `string` (values: asc, desc): One of `asc` (ascending) or `desc` (descending).
  * per_page `integer`: Results per page (max 100)
  * page `integer`: Page number of the results to fetch.

#### Output
* output `array`
  * items [repository](#repository)

### users.username.subscriptions.get
Lists repositories a user is watching.


```js
github.users.username.subscriptions.get({
  "username": ""
}, context)
```

#### Input
* input `object`
  * username **required** `string`
  * per_page `integer`: Results per page (max 100)
  * page `integer`: Page number of the results to fetch.

#### Output
* output `array`
  * items [minimal-repository](#minimal-repository)

### zen.get
Get a random sentence from the Zen of GitHub


```js
github.zen.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `string`



## Definitions

### actions-billing-usage
* actions-billing-usage `object`
  * included_minutes `integer`: The amount of free GitHub Actions minutes available.
  * minutes_used_breakdown `object`
    * MACOS `integer`: Total minutes used on macOS runner machines.
    * UBUNTU `integer`: Total minutes used on Ubuntu runner machines.
    * WINDOWS `integer`: Total minutes used on Windows runner machines.
  * total_minutes_used `integer`: The sum of the free and paid GitHub Actions minutes used.
  * total_paid_minutes_used `integer`: The total paid GitHub Actions minutes used.

### actions-public-key
* ActionsPublicKey `object`: The public key used for setting Actions Secrets.
  * created_at `string`
  * id `integer`
  * key **required** `string`: The Base64 encoded public key.
  * key_id **required** `string`: The identifier for the key.
  * title `string`
  * url `string`

### actions-secret
* Actions Secret `object`: Set secrets for GitHub Actions.
  * created_at **required** `string`
  * name **required** `string`: The name of the secret.
  * updated_at **required** `string`

### actor
* Actor `object`: Actor
  * avatar_url **required** `string`
  * display_login `string`
  * gravatar_id **required** `string`
  * id **required** `integer`
  * login **required** `string`
  * url **required** `string`

### api-overview
* Api Overview `object`: Api Overview
  * api `array`
    * items `string`
  * git `array`
    * items `string`
  * github_services_sha `string`
  * hooks `array`
    * items `string`
  * importer `array`
    * items `string`
  * installed_version `string`
  * pages `array`
    * items `string`
  * ssh_key_fingerprints `object`
    * MD5_DSA `string`
    * MD5_RSA `string`
    * SHA256_DSA `string`
    * SHA256_RSA `string`
  * verifiable_password_authentication **required** `boolean`
  * web `array`
    * items `string`

### application-grant
* Application Grant `object`: The authorization associated with an OAuth Access.
  * app **required** `object`
    * client_id **required** `string`
    * name **required** `string`
    * url **required** `string`
  * created_at **required** `string`
  * id **required** `integer`
  * scopes **required** `array`
    * items `string`
  * updated_at **required** `string`
  * url **required** `string`
  * user
    * avatar_url **required** `string`
    * events_url **required** `string`
    * followers_url **required** `string`
    * following_url **required** `string`
    * gists_url **required** `string`
    * gravatar_id **required** `string`
    * html_url **required** `string`
    * id **required** `integer`
    * login **required** `string`
    * node_id **required** `string`
    * organizations_url **required** `string`
    * received_events_url **required** `string`
    * repos_url **required** `string`
    * site_admin **required** `boolean`
    * starred_at `string`
    * starred_url **required** `string`
    * subscriptions_url **required** `string`
    * type **required** `string`
    * url **required** `string`

### artifact
* Artifact `object`: An artifact
  * archive_download_url **required** `string`
  * created_at **required** `string`
  * expired **required** `boolean`: Whether or not the artifact has expired.
  * expires_at **required** `string`
  * id **required** `integer`
  * name **required** `string`: The name of the artifact.
  * node_id **required** `string`
  * size_in_bytes **required** `integer`: The size in bytes of the artifact.
  * updated_at **required** `string`
  * url **required** `string`

### authentication-token
* Authentication Token `object`: Authentication Token
  * expires_at **required** `string`: The time this token expires
  * permissions `object`
  * repositories `array`: The repositories this token has access to
    * items [repository](#repository)
  * repository_selection `string` (values: all, selected): Describe whether all repositories have been selected or there's a selection involved
  * single_file `string`
  * token **required** `string`: The token used for authentication

### authorization
* Authorization `object`: The authorization for an OAuth app, GitHub App, or a Personal Access Token.
  * app **required** `object`
    * client_id **required** `string`
    * name **required** `string`
    * url **required** `string`
  * created_at **required** `string`
  * fingerprint **required** `string`
  * hashed_token **required** `string`
  * id **required** `integer`
  * installation
    * account **required** [simple-user](#simple-user)
    * permissions **required** `object`
    * repositories_url **required** `string`
    * repository_selection **required** `string` (values: all, selected): Describe whether all repositories have been selected or there's a selection involved
    * single_file_name **required** `string`
  * note **required** `string`
  * note_url **required** `string`
  * scopes **required** `array`: A list of scopes that this authorization is in.
    * items `string`
  * token **required** `string`
  * token_last_eight **required** `string`
  * updated_at **required** `string`
  * url **required** `string`
  * user
    * avatar_url **required** `string`
    * events_url **required** `string`
    * followers_url **required** `string`
    * following_url **required** `string`
    * gists_url **required** `string`
    * gravatar_id **required** `string`
    * html_url **required** `string`
    * id **required** `integer`
    * login **required** `string`
    * node_id **required** `string`
    * organizations_url **required** `string`
    * received_events_url **required** `string`
    * repos_url **required** `string`
    * site_admin **required** `boolean`
    * starred_at `string`
    * starred_url **required** `string`
    * subscriptions_url **required** `string`
    * type **required** `string`
    * url **required** `string`

### base-gist
* Base Gist `object`: Base Gist
  * comments **required** `integer`
  * comments_url **required** `string`
  * commits_url **required** `string`
  * created_at **required** `string`
  * description **required** `string`
  * files **required** `object`
  * forks `array`
  * forks_url **required** `string`
  * git_pull_url **required** `string`
  * git_push_url **required** `string`
  * history `array`
  * html_url **required** `string`
  * id **required** `string`
  * node_id **required** `string`
  * owner
    * avatar_url **required** `string`
    * events_url **required** `string`
    * followers_url **required** `string`
    * following_url **required** `string`
    * gists_url **required** `string`
    * gravatar_id **required** `string`
    * html_url **required** `string`
    * id **required** `integer`
    * login **required** `string`
    * node_id **required** `string`
    * organizations_url **required** `string`
    * received_events_url **required** `string`
    * repos_url **required** `string`
    * site_admin **required** `boolean`
    * starred_at `string`
    * starred_url **required** `string`
    * subscriptions_url **required** `string`
    * type **required** `string`
    * url **required** `string`
  * public **required** `boolean`
  * truncated `boolean`
  * updated_at **required** `string`
  * url **required** `string`
  * user **required**
    * avatar_url **required** `string`
    * events_url **required** `string`
    * followers_url **required** `string`
    * following_url **required** `string`
    * gists_url **required** `string`
    * gravatar_id **required** `string`
    * html_url **required** `string`
    * id **required** `integer`
    * login **required** `string`
    * node_id **required** `string`
    * organizations_url **required** `string`
    * received_events_url **required** `string`
    * repos_url **required** `string`
    * site_admin **required** `boolean`
    * starred_at `string`
    * starred_url **required** `string`
    * subscriptions_url **required** `string`
    * type **required** `string`
    * url **required** `string`

### basic-error
* Basic Error `object`: Basic Error
  * documentation_url `string`
  * message `string`

### blob
* Blob `object`: Blob
  * content **required** `string`
  * encoding **required** `string`
  * highlighted_content `string`
  * node_id **required** `string`
  * sha **required** `string`
  * size **required** `integer`
  * url **required** `string`

### branch-protection
* Branch Protection `object`: Branch Protection
  * allow_deletions `object`
    * enabled `boolean`
  * allow_force_pushes `object`
    * enabled `boolean`
  * enabled **required** `boolean`
  * enforce_admins [protected-branch-admin-enforced](#protected-branch-admin-enforced)
  * name `string`
  * protection_url `string`
  * required_linear_history `object`
    * enabled `boolean`
  * required_pull_request_reviews [protected-branch-pull-request-review](#protected-branch-pull-request-review)
  * required_status_checks **required** `object`
    * contexts **required** `array`
      * items `string`
    * contexts_url `string`
    * enforcement_level **required** `string`
    * url `string`
  * restrictions [branch-restriction-policy](#branch-restriction-policy)
  * url `string`

### branch-restriction-policy
* Branch Restriction Policy `object`: Branch Restriction Policy
  * apps **required** `array`
    * items `object`
      * created_at `string`
      * description `string`
      * events `array`
        * items `string`
      * external_url `string`
      * html_url `string`
      * id `integer`
      * name `string`
      * node_id `string`
      * owner `object`
        * avatar_url `string`
        * description `string`
        * events_url `string`
        * followers_url `string`
        * following_url `string`
        * gists_url `string`
        * gravatar_id `string`
        * hooks_url `string`
        * html_url `string`
        * id `integer`
        * issues_url `string`
        * login `string`
        * members_url `string`
        * node_id `string`
        * organizations_url `string`
        * public_members_url `string`
        * received_events_url `string`
        * repos_url `string`
        * starred_url `string`
        * subscriptions_url `string`
        * type `string`
        * url `string`
      * permissions `object`
        * contents `string`
        * issues `string`
        * metadata `string`
        * single_file `string`
      * slug `string`
      * updated_at `string`
  * apps_url **required** `string`
  * teams **required** `array`
    * items `object`
      * description `string`
      * html_url `string`
      * id `integer`
      * members_url `string`
      * name `string`
      * node_id `string`
      * parent `string`
      * permission `string`
      * privacy `string`
      * repositories_url `string`
      * slug `string`
      * url `string`
  * teams_url **required** `string`
  * url **required** `string`
  * users **required** `array`
    * items `object`
      * avatar_url `string`
      * events_url `string`
      * followers_url `string`
      * following_url `string`
      * gists_url `string`
      * gravatar_id `string`
      * html_url `string`
      * id `integer`
      * login `string`
      * node_id `string`
      * organizations_url `string`
      * received_events_url `string`
      * repos_url `string`
      * site_admin `boolean`
      * starred_url `string`
      * subscriptions_url `string`
      * type `string`
      * url `string`
  * users_url **required** `string`

### branch-short
* Branch Short `object`: Branch Short
  * commit `object`
    * sha `string`
    * url `string`
  * name `string`
  * protected `boolean`

### branch-with-protection
* Branch With Protection `object`: Branch With Protection
  * _links **required** `object`
    * html **required** `string`
    * self **required** `string`
  * commit **required** [commit](#commit)
  * name **required** `string`
  * pattern `string`
  * protected **required** `boolean`
  * protection **required** [branch-protection](#branch-protection)
  * protection_url **required** `string`
  * required_approving_review_count `integer`

### check-annotation
* Check Annotation `object`: Check Annotation
  * annotation_level **required** `string`
  * blob_href **required** `string`
  * end_column **required** `integer`
  * end_line **required** `integer`
  * message **required** `string`
  * path **required** `string`
  * raw_details **required** `string`
  * start_column **required** `integer`
  * start_line **required** `integer`
  * title **required** `string`

### check-run
* CheckRun `object`: A check performed on the code of a given code change
  * app **required**
    * client_id `string`
    * client_secret `string`
    * created_at **required** `string`
    * description **required** `string`
    * events **required** `array`: The list of events for the GitHub app
      * items `string`
    * external_url **required** `string`
    * html_url **required** `string`
    * id **required** `integer`: Unique identifier of the GitHub app
    * installations_count `integer`: The number of installations associated with the GitHub app
    * name **required** `string`: The name of the GitHub app
    * node_id **required** `string`
    * owner **required**
      * avatar_url **required** `string`
      * events_url **required** `string`
      * followers_url **required** `string`
      * following_url **required** `string`
      * gists_url **required** `string`
      * gravatar_id **required** `string`
      * html_url **required** `string`
      * id **required** `integer`
      * login **required** `string`
      * node_id **required** `string`
      * organizations_url **required** `string`
      * received_events_url **required** `string`
      * repos_url **required** `string`
      * site_admin **required** `boolean`
      * starred_at `string`
      * starred_url **required** `string`
      * subscriptions_url **required** `string`
      * type **required** `string`
      * url **required** `string`
    * pem `string`
    * permissions **required** `object`: The set of permissions for the GitHub app
      * checks `string`
      * contents `string`
      * deployments `string`
      * issues `string`
      * metadata `string`
    * slug `string`: The slug name of the GitHub app
    * updated_at **required** `string`
    * webhook_secret `string`
  * check_suite **required** `object`
    * id **required** `integer`
  * completed_at **required** `string`
  * conclusion **required** `string`
  * details_url **required** `string`
  * external_id **required** `string`
  * head_sha **required** `string`: The SHA of the commit that is being checked.
  * html_url **required** `string`
  * id **required** `integer`: The id of the check.
  * name **required** `string`: The name of the check.
  * node_id **required** `string`
  * output **required** `object`
    * annotations_count **required** `integer`
    * annotations_url **required** `string`
    * summary **required** `string`
    * text **required** `string`
    * title **required** `string`
  * pull_requests **required**
    * items [pull-request-minimal](#pull-request-minimal)
  * started_at **required** `string`
  * status **required** `string` (values: queued, in_progress, completed): The phase of the lifecycle that the check is currently in.
  * url **required** `string`

### check-suite
* CheckSuite `object`: A suite of checks performed on the code of a given code change
  * after **required** `string`
  * app **required**
    * client_id `string`
    * client_secret `string`
    * created_at **required** `string`
    * description **required** `string`
    * events **required** `array`: The list of events for the GitHub app
      * items `string`
    * external_url **required** `string`
    * html_url **required** `string`
    * id **required** `integer`: Unique identifier of the GitHub app
    * installations_count `integer`: The number of installations associated with the GitHub app
    * name **required** `string`: The name of the GitHub app
    * node_id **required** `string`
    * owner **required**
      * avatar_url **required** `string`
      * events_url **required** `string`
      * followers_url **required** `string`
      * following_url **required** `string`
      * gists_url **required** `string`
      * gravatar_id **required** `string`
      * html_url **required** `string`
      * id **required** `integer`
      * login **required** `string`
      * node_id **required** `string`
      * organizations_url **required** `string`
      * received_events_url **required** `string`
      * repos_url **required** `string`
      * site_admin **required** `boolean`
      * starred_at `string`
      * starred_url **required** `string`
      * subscriptions_url **required** `string`
      * type **required** `string`
      * url **required** `string`
    * pem `string`
    * permissions **required** `object`: The set of permissions for the GitHub app
      * checks `string`
      * contents `string`
      * deployments `string`
      * issues `string`
      * metadata `string`
    * slug `string`: The slug name of the GitHub app
    * updated_at **required** `string`
    * webhook_secret `string`
  * before **required** `string`
  * check_runs_url **required** `string`
  * conclusion **required** `string`
  * created_at **required** `string`
  * head_branch **required** `string`
  * head_commit **required** [simple-commit](#simple-commit)
  * head_sha **required** `string`: The SHA of the head commit that is being checked.
  * id **required** `integer`
  * latest_check_runs_count **required** `integer`
  * node_id **required** `string`
  * pull_requests **required** `array`
    * items [pull-request-minimal](#pull-request-minimal)
  * repository **required** [minimal-repository](#minimal-repository)
  * status **required** `string`
  * updated_at **required** `string`
  * url **required** `string`

### check-suite-preference
* Check Suite Preference `object`: Check suite configuration preferences for a repository.
  * preferences `object`
    * auto_trigger_checks `array`
      * items `object`
        * app_id **required** `integer`
        * setting **required** `boolean`
  * repository [repository](#repository)

### clone-traffic
* Clone Traffic `object`: Clone Traffic
  * clones **required** `array`
    * items [traffic](#traffic)
  * count **required** `integer`
  * uniques **required** `integer`

### code-frequency-stat
* Code Frequency Stat `array`: Code Frequency Stat
  * items `integer`

### code-of-conduct
* Code Of Conduct `object`: Code Of Conduct
  * body `string`
  * html_url **required** `string`
  * key **required** `string`
  * name **required** `string`
  * url **required** `string`

### code-of-conduct-simple
* Code Of Conduct Simple `object`: Code of Conduct Simple
  * html_url **required** `string`
  * key **required** `string`
  * name **required** `string`
  * url **required** `string`

### code-scanning-alert
* Code Scanning Alert `object`: Code Scanning Alert
  * closed_at `string`
  * closed_by
    * avatar_url **required** `string`
    * events_url **required** `string`
    * followers_url **required** `string`
    * following_url **required** `string`
    * gists_url **required** `string`
    * gravatar_id **required** `string`
    * html_url **required** `string`
    * id **required** `integer`
    * login **required** `string`
    * node_id **required** `string`
    * organizations_url **required** `string`
    * received_events_url **required** `string`
    * repos_url **required** `string`
    * site_admin **required** `boolean`
    * starred_at `string`
    * starred_url **required** `string`
    * subscriptions_url **required** `string`
    * type **required** `string`
    * url **required** `string`
  * closed_reason `string` (values: false positive, won't fix, used in tests)
  * created_at `string`
  * html_url `string`
  * number `integer`
  * open `boolean`: Whether or not the alert is open.
  * rule_description `string`: A short description of the rule used to detect the alert.
  * rule_id `string`: A unique identifier for the rule used to detect the alert.
  * rule_severity `string` (values: none, note, warning, error): The severity of the alert.
  * tool `string`: The name of the tool used to detect the alert.
  * url `string`

### code-search-result-item
* Code Search Result Item `object`: Code Search Result Item
  * file_size `integer`
  * git_url **required** `string`
  * html_url **required** `string`
  * language `string`
  * last_modified_at `string`
  * line_numbers `array`
    * items `string`
  * name **required** `string`
  * path **required** `string`
  * repository **required** [minimal-repository](#minimal-repository)
  * score **required** `integer`
  * sha **required** `string`
  * text_matches [search-result-text-matches](#search-result-text-matches)
  * url **required** `string`

### collaborator
* Collaborator `object`: Collaborator
  * avatar_url **required** `string`
  * events_url **required** `string`
  * followers_url **required** `string`
  * following_url **required** `string`
  * gists_url **required** `string`
  * gravatar_id **required** `string`
  * html_url **required** `string`
  * id **required** `integer`
  * login **required** `string`
  * node_id **required** `string`
  * organizations_url **required** `string`
  * permissions `object`
    * admin **required** `boolean`
    * pull **required** `boolean`
    * push **required** `boolean`
  * received_events_url **required** `string`
  * repos_url **required** `string`
  * site_admin **required** `boolean`
  * starred_url **required** `string`
  * subscriptions_url **required** `string`
  * type **required** `string`
  * url **required** `string`

### combined-billing-usage
* combined-billing-usage `object`
  * days_left_in_billing_cycle `integer`: Numbers of days left in billing cycle.
  * estimated_paid_storage_for_month `integer`: Estimated storage space (GB) used in billing cycle.
  * estimated_storage_for_month `integer`: Estimated sum of free and paid storage space (GB) used in billing cycle.

### combined-commit-status
* Combined Commit Status `object`: Combined Commit Status
  * commit_url **required** `string`
  * repository **required** [minimal-repository](#minimal-repository)
  * sha **required** `string`
  * state **required** `string`
  * statuses **required** `array`
    * items [simple-commit-status](#simple-commit-status)
  * total_count **required** `integer`
  * url **required** `string`

### commit
* Commit `object`: Commit
  * author **required**
    * avatar_url **required** `string`
    * events_url **required** `string`
    * followers_url **required** `string`
    * following_url **required** `string`
    * gists_url **required** `string`
    * gravatar_id **required** `string`
    * html_url **required** `string`
    * id **required** `integer`
    * login **required** `string`
    * node_id **required** `string`
    * organizations_url **required** `string`
    * received_events_url **required** `string`
    * repos_url **required** `string`
    * site_admin **required** `boolean`
    * starred_at `string`
    * starred_url **required** `string`
    * subscriptions_url **required** `string`
    * type **required** `string`
    * url **required** `string`
  * comments_url **required** `string`
  * commit **required** `object`
    * author **required**
      * date `string`
      * email `string`
      * name `string`
    * comment_count **required** `integer`
    * committer **required**
      * date `string`
      * email `string`
      * name `string`
    * message **required** `string`
    * tree **required** `object`
      * sha **required** `string`
      * url **required** `string`
    * url **required** `string`
    * verification [verification](#verification)
  * committer **required**
    * avatar_url **required** `string`
    * events_url **required** `string`
    * followers_url **required** `string`
    * following_url **required** `string`
    * gists_url **required** `string`
    * gravatar_id **required** `string`
    * html_url **required** `string`
    * id **required** `integer`
    * login **required** `string`
    * node_id **required** `string`
    * organizations_url **required** `string`
    * received_events_url **required** `string`
    * repos_url **required** `string`
    * site_admin **required** `boolean`
    * starred_at `string`
    * starred_url **required** `string`
    * subscriptions_url **required** `string`
    * type **required** `string`
    * url **required** `string`
  * files `array`
    * items `object`
      * additions `integer`
      * blob_url `string`
      * changes `integer`
      * contents_url `string`
      * deletions `integer`
      * filename `string`
      * patch `string`
      * previous_filename `string`
      * raw_url `string`
      * sha `string`
      * status `string`
  * html_url **required** `string`
  * node_id **required** `string`
  * parents **required** `array`
    * items `object`
      * html_url `string`
      * sha **required** `string`
      * url **required** `string`
  * sha **required** `string`
  * stats `object`
    * additions `integer`
    * deletions `integer`
    * total `integer`
  * url **required** `string`

### commit-activity
* Commit Activity `object`: Commit Activity
  * days **required** `array`
    * items `integer`
  * total **required** `integer`
  * week **required** `integer`

### commit-comment
* Commit Comment `object`: Commit Comment
  * author_association **required** `string`
  * body **required** `string`
  * commit_id **required** `string`
  * created_at **required** `string`
  * html_url **required** `string`
  * id **required** `integer`
  * line **required** `integer`
  * node_id **required** `string`
  * path **required** `string`
  * position **required** `integer`
  * reactions [reaction-rollup](#reaction-rollup)
  * updated_at **required** `string`
  * url **required** `string`
  * user **required**
    * avatar_url **required** `string`
    * events_url **required** `string`
    * followers_url **required** `string`
    * following_url **required** `string`
    * gists_url **required** `string`
    * gravatar_id **required** `string`
    * html_url **required** `string`
    * id **required** `integer`
    * login **required** `string`
    * node_id **required** `string`
    * organizations_url **required** `string`
    * received_events_url **required** `string`
    * repos_url **required** `string`
    * site_admin **required** `boolean`
    * starred_at `string`
    * starred_url **required** `string`
    * subscriptions_url **required** `string`
    * type **required** `string`
    * url **required** `string`

### commit-comparison
* Commit Comparison `object`: Commit Comparison
  * ahead_by **required** `integer`
  * base_commit **required** [commit](#commit)
  * behind_by **required** `integer`
  * commits **required** `array`
    * items [commit](#commit)
  * diff_url **required** `string`
  * files **required** `array`
    * items [diff-entry](#diff-entry)
  * html_url **required** `string`
  * merge_base_commit **required** [commit](#commit)
  * patch_url **required** `string`
  * permalink_url **required** `string`
  * status **required** `string` (values: diverged, ahead, behind, identical)
  * total_commits **required** `integer`
  * url **required** `string`

### commit-search-result-item
* Commit Search Result Item `object`: Commit Search Result Item
  * author **required**
    * avatar_url **required** `string`
    * events_url **required** `string`
    * followers_url **required** `string`
    * following_url **required** `string`
    * gists_url **required** `string`
    * gravatar_id **required** `string`
    * html_url **required** `string`
    * id **required** `integer`
    * login **required** `string`
    * node_id **required** `string`
    * organizations_url **required** `string`
    * received_events_url **required** `string`
    * repos_url **required** `string`
    * site_admin **required** `boolean`
    * starred_at `string`
    * starred_url **required** `string`
    * subscriptions_url **required** `string`
    * type **required** `string`
    * url **required** `string`
  * comments_url **required** `string`
  * commit **required** `object`
    * author **required** `object`
      * date **required** `string`
      * email **required** `string`
      * name **required** `string`
    * comment_count **required** `integer`
    * committer **required**
      * date `string`
      * email `string`
      * name `string`
    * message **required** `string`
    * tree **required** `object`
      * sha **required** `string`
      * url **required** `string`
    * url **required** `string`
    * verification [verification](#verification)
  * committer **required**
    * date `string`
    * email `string`
    * name `string`
  * html_url **required** `string`
  * node_id **required** `string`
  * parents **required** `array`
    * items `object`
      * html_url `string`
      * sha `string`
      * url `string`
  * repository **required** [minimal-repository](#minimal-repository)
  * score **required** `integer`
  * sha **required** `string`
  * text_matches [search-result-text-matches](#search-result-text-matches)
  * url **required** `string`

### community-health-file
* Community Health File `object`
  * html_url **required** `string`
  * url **required** `string`

### community-profile
* Community Profile `object`: Community Profile
  * description **required** `string`
  * documentation **required** `string`
  * files **required** `object`
    * code_of_conduct **required**
      * html_url **required** `string`
      * key **required** `string`
      * name **required** `string`
      * url **required** `string`
    * contributing **required**
      * html_url **required** `string`
      * url **required** `string`
    * issue_template **required**
      * html_url **required** `string`
      * url **required** `string`
    * license **required**
      * html_url `string`
      * key **required** `string`
      * name **required** `string`
      * node_id **required** `string`
      * spdx_id **required** `string`
      * url **required** `string`
    * pull_request_template **required**
      * html_url **required** `string`
      * url **required** `string`
    * readme **required**
      * html_url **required** `string`
      * url **required** `string`
  * health_percentage **required** `integer`
  * updated_at **required** `string`

### content-directory
* Content Directory `array`: A list of directory items
  * items `object`
    * _links **required** `object`
      * git **required** `string`
      * html **required** `string`
      * self **required** `string`
    * content `string`
    * download_url **required** `string`
    * git_url **required** `string`
    * html_url **required** `string`
    * name **required** `string`
    * path **required** `string`
    * sha **required** `string`
    * size **required** `integer`
    * type **required** `string`
    * url **required** `string`

### content-file
* Content File `object`: Content File
  * _links **required** `object`
    * git **required** `string`
    * html **required** `string`
    * self **required** `string`
  * content **required** `string`
  * download_url **required** `string`
  * encoding **required** `string`
  * git_url **required** `string`
  * html_url **required** `string`
  * name **required** `string`
  * path **required** `string`
  * sha **required** `string`
  * size **required** `integer`
  * submodule_git_url `string`
  * target `string`
  * type **required** `string`
  * url **required** `string`

### content-reference-attachment
* ContentReferenceAttachment `object`: Content Reference attachments allow you to provide context around URLs posted in comments
  * body **required** `string`: The body of the attachment
  * id **required** `integer`: The ID of the attachment
  * node_id `string`: The node_id of the content attachment
  * title **required** `string`: The title of the attachment

### content-submodule
* Symlink Content `object`: An object describing a symlink
  * _links **required** `object`
    * git **required** `string`
    * html **required** `string`
    * self **required** `string`
  * download_url **required** `string`
  * git_url **required** `string`
  * html_url **required** `string`
  * name **required** `string`
  * path **required** `string`
  * sha **required** `string`
  * size **required** `integer`
  * submodule_git_url **required** `string`
  * type **required** `string`
  * url **required** `string`

### content-symlink
* Symlink Content `object`: An object describing a symlink
  * _links **required** `object`
    * git **required** `string`
    * html **required** `string`
    * self **required** `string`
  * download_url **required** `string`
  * git_url **required** `string`
  * html_url **required** `string`
  * name **required** `string`
  * path **required** `string`
  * sha **required** `string`
  * size **required** `integer`
  * target **required** `string`
  * type **required** `string`
  * url **required** `string`

### content-traffic
* Content Traffic `object`: Content Traffic
  * count **required** `integer`
  * path **required** `string`
  * title **required** `string`
  * uniques **required** `integer`

### content-tree
* Content Tree `object`: Content Tree
  * _links **required** `object`
    * git **required** `string`
    * html **required** `string`
    * self **required** `string`
  * download_url **required** `string`
  * entries `array`
    * items `object`
      * _links **required** `object`
        * git **required** `string`
        * html **required** `string`
        * self **required** `string`
      * content `string`
      * download_url **required** `string`
      * git_url **required** `string`
      * html_url **required** `string`
      * name **required** `string`
      * path **required** `string`
      * sha **required** `string`
      * size **required** `integer`
      * type **required** `string`
      * url **required** `string`
  * git_url **required** `string`
  * html_url **required** `string`
  * name **required** `string`
  * path **required** `string`
  * sha **required** `string`
  * size **required** `integer`
  * type **required** `string`
  * url **required** `string`

### contributor
* Contributor `object`: Contributor
  * avatar_url `string`
  * contributions **required** `integer`
  * email `string`
  * events_url `string`
  * followers_url `string`
  * following_url `string`
  * gists_url `string`
  * gravatar_id `string`
  * html_url `string`
  * id `integer`
  * login `string`
  * name `string`
  * node_id `string`
  * organizations_url `string`
  * received_events_url `string`
  * repos_url `string`
  * site_admin `boolean`
  * starred_url `string`
  * subscriptions_url `string`
  * type **required** `string`
  * url `string`

### contributor-activity
* Contributor Activity `object`: Contributor Activity
  * author **required**
    * avatar_url **required** `string`
    * events_url **required** `string`
    * followers_url **required** `string`
    * following_url **required** `string`
    * gists_url **required** `string`
    * gravatar_id **required** `string`
    * html_url **required** `string`
    * id **required** `integer`
    * login **required** `string`
    * node_id **required** `string`
    * organizations_url **required** `string`
    * received_events_url **required** `string`
    * repos_url **required** `string`
    * site_admin **required** `boolean`
    * starred_at `string`
    * starred_url **required** `string`
    * subscriptions_url **required** `string`
    * type **required** `string`
    * url **required** `string`
  * total **required** `integer`
  * weeks **required** `array`
    * items `object`
      * a `integer`
      * c `integer`
      * d `integer`
      * w `string`

### credential-authorization
* Credential Authorization `object`: Credential Authorization
  * credential_accessed_at `string`: Date when the credential was last accessed. May be null if it was never accessed
  * credential_authorized_at **required** `string`: Date when the credential was authorized for use.
  * credential_id **required** `integer`: Unique identifier for the credential.
  * credential_type **required** `string`: Human-readable description of the credential type.
  * fingerprint `string`: Unique string to distinguish the credential. Only included in responses with credential_type of SSH Key.
  * login **required** `string`: User login that owns the underlying credential.
  * scopes `array`: List of oauth scopes the token has been granted.
    * items `string`
  * token_last_eight `string`: Last eight characters of the credential. Only included in responses with credential_type of personal access token.

### deploy-key
* Deploy Key `object`: An SSH key granting access to a single repository.
  * created_at `string`
  * id `integer`
  * key `string`
  * read_only `boolean`
  * title `string`
  * url `string`
  * verified `boolean`

### deployment
* Deployment `object`: A request for a specific ref(branch,sha,tag) to be deployed
  * created_at **required** `string`
  * creator **required**
    * avatar_url **required** `string`
    * events_url **required** `string`
    * followers_url **required** `string`
    * following_url **required** `string`
    * gists_url **required** `string`
    * gravatar_id **required** `string`
    * html_url **required** `string`
    * id **required** `integer`
    * login **required** `string`
    * node_id **required** `string`
    * organizations_url **required** `string`
    * received_events_url **required** `string`
    * repos_url **required** `string`
    * site_admin **required** `boolean`
    * starred_at `string`
    * starred_url **required** `string`
    * subscriptions_url **required** `string`
    * type **required** `string`
    * url **required** `string`
  * description **required** `string`
  * environment **required** `string`: Name for the target deployment environment.
  * id **required** `integer`: Unique identifier of the deployment
  * node_id **required** `string`
  * original_environment `string`
  * payload **required** `object`
  * performed_via_github_app
    * client_id `string`
    * client_secret `string`
    * created_at **required** `string`
    * description **required** `string`
    * events **required** `array`: The list of events for the GitHub app
      * items `string`
    * external_url **required** `string`
    * html_url **required** `string`
    * id **required** `integer`: Unique identifier of the GitHub app
    * installations_count `integer`: The number of installations associated with the GitHub app
    * name **required** `string`: The name of the GitHub app
    * node_id **required** `string`
    * owner **required**
      * avatar_url **required** `string`
      * events_url **required** `string`
      * followers_url **required** `string`
      * following_url **required** `string`
      * gists_url **required** `string`
      * gravatar_id **required** `string`
      * html_url **required** `string`
      * id **required** `integer`
      * login **required** `string`
      * node_id **required** `string`
      * organizations_url **required** `string`
      * received_events_url **required** `string`
      * repos_url **required** `string`
      * site_admin **required** `boolean`
      * starred_at `string`
      * starred_url **required** `string`
      * subscriptions_url **required** `string`
      * type **required** `string`
      * url **required** `string`
    * pem `string`
    * permissions **required** `object`: The set of permissions for the GitHub app
      * checks `string`
      * contents `string`
      * deployments `string`
      * issues `string`
      * metadata `string`
    * slug `string`: The slug name of the GitHub app
    * updated_at **required** `string`
    * webhook_secret `string`
  * production_environment `boolean`: Specifies if the given environment is one that end-users directly interact with. Default: false.
  * ref **required** `string`: The ref to deploy. This can be a branch, tag, or sha.
  * repository_url **required** `string`
  * sha **required** `string`
  * statuses_url **required** `string`
  * task **required** `string`: Parameter to specify a task to execute
  * transient_environment `boolean`: Specifies if the given environment is will no longer exist at some point in hte future. Default: false.
  * updated_at **required** `string`
  * url **required** `string`

### deployment-status
* Deployment Status `object`: The status of a deployment.
  * created_at **required** `string`
  * creator **required**
    * avatar_url **required** `string`
    * events_url **required** `string`
    * followers_url **required** `string`
    * following_url **required** `string`
    * gists_url **required** `string`
    * gravatar_id **required** `string`
    * html_url **required** `string`
    * id **required** `integer`
    * login **required** `string`
    * node_id **required** `string`
    * organizations_url **required** `string`
    * received_events_url **required** `string`
    * repos_url **required** `string`
    * site_admin **required** `boolean`
    * starred_at `string`
    * starred_url **required** `string`
    * subscriptions_url **required** `string`
    * type **required** `string`
    * url **required** `string`
  * deployment_url **required** `string`
  * description **required** `string`: A short description of the status.
  * environment `string`: The environment of the deployment that the status is for.
  * environment_url `string`: The URL for accessing your environment.
  * id **required** `integer`
  * log_url `string`: The URL to associate with this status.
  * node_id **required** `string`
  * performed_via_github_app
    * client_id `string`
    * client_secret `string`
    * created_at **required** `string`
    * description **required** `string`
    * events **required** `array`: The list of events for the GitHub app
      * items `string`
    * external_url **required** `string`
    * html_url **required** `string`
    * id **required** `integer`: Unique identifier of the GitHub app
    * installations_count `integer`: The number of installations associated with the GitHub app
    * name **required** `string`: The name of the GitHub app
    * node_id **required** `string`
    * owner **required**
      * avatar_url **required** `string`
      * events_url **required** `string`
      * followers_url **required** `string`
      * following_url **required** `string`
      * gists_url **required** `string`
      * gravatar_id **required** `string`
      * html_url **required** `string`
      * id **required** `integer`
      * login **required** `string`
      * node_id **required** `string`
      * organizations_url **required** `string`
      * received_events_url **required** `string`
      * repos_url **required** `string`
      * site_admin **required** `boolean`
      * starred_at `string`
      * starred_url **required** `string`
      * subscriptions_url **required** `string`
      * type **required** `string`
      * url **required** `string`
    * pem `string`
    * permissions **required** `object`: The set of permissions for the GitHub app
      * checks `string`
      * contents `string`
      * deployments `string`
      * issues `string`
      * metadata `string`
    * slug `string`: The slug name of the GitHub app
    * updated_at **required** `string`
    * webhook_secret `string`
  * repository_url **required** `string`
  * state **required** `string` (values: error, failure, inactive, pending, success, queued, in_progress): The state of the status.
  * target_url **required** `string`: Deprecated: the URL to associate with this status.
  * updated_at **required** `string`
  * url **required** `string`

### diff-entry
* Diff Entry `object`: Diff Entry
  * additions **required** `integer`
  * blob_url **required** `string`
  * changes **required** `integer`
  * contents_url **required** `string`
  * deletions **required** `integer`
  * filename **required** `string`
  * patch `string`
  * previous_filename `string`
  * raw_url **required** `string`
  * sha **required** `string`
  * status **required** `string`

### email


### enterprise
* Enterprise `object`: An enterprise account
  * avatar_url **required** `string`
  * created_at **required** `string`
  * description `string`: A short description of the enterprise.
  * html_url **required** `string`
  * id **required** `integer`: Unique identifier of the enterprise
  * name **required** `string`: The name of the enterprise.
  * node_id **required** `string`
  * slug **required** `string`: The slug url identifier for the enterprise.
  * updated_at **required** `string`
  * website_url `string`: The enterprise's website URL.

### event
* Event `object`: Event
  * actor **required** [actor](#actor)
  * created_at **required** `string`
  * id **required** `string`
  * org [actor](#actor)
  * payload **required** `object`
    * action **required** `string`
    * comment [issue-comment](#issue-comment)
    * issue [issue-simple](#issue-simple)
    * pages `array`
      * items `object`
        * action `string`
        * html_url `string`
        * page_name `string`
        * sha `string`
        * summary `string`
        * title `string`
  * public **required** `boolean`
  * repo **required** `object`
    * id **required** `integer`
    * name **required** `string`
    * url **required** `string`
  * type **required** `string`

### feed
* Feed `object`: Feed
  * _links **required** `object`
    * current_user [link-with-type](#link-with-type)
    * current_user_actor [link-with-type](#link-with-type)
    * current_user_organization [link-with-type](#link-with-type)
    * current_user_organizations `array`
      * items [link-with-type](#link-with-type)
    * current_user_public [link-with-type](#link-with-type)
    * security_advisories [link-with-type](#link-with-type)
    * timeline **required** [link-with-type](#link-with-type)
    * user **required** [link-with-type](#link-with-type)
  * current_user_actor_url `string`
  * current_user_organization_url `string`
  * current_user_organization_urls `array`
    * items `string`
  * current_user_public_url `string`
  * current_user_url `string`
  * security_advisories_url `string`
  * timeline_url **required** `string`
  * user_url **required** `string`

### file-commit
* File Commit `object`: File Commit
  * commit `object`
    * author `object`
      * date `string`
      * email `string`
      * name `string`
    * committer `object`
      * date `string`
      * email `string`
      * name `string`
    * html_url `string`
    * message `string`
    * node_id `string`
    * parents `array`
      * items `object`
        * html_url `string`
        * sha `string`
        * url `string`
    * sha `string`
    * tree `object`
      * sha `string`
      * url `string`
    * url `string`
    * verification `object`
      * payload `string`
      * reason `string`
      * signature `string`
      * verified `boolean`
  * content `object`
    * _links `object`
      * git `string`
      * html `string`
      * self `string`
    * download_url `string`
    * git_url `string`
    * html_url `string`
    * name `string`
    * path `string`
    * sha `string`
    * size `integer`
    * type `string`
    * url `string`

### full-repository
* Full Repository `object`: Full Repository
  * allow_merge_commit `boolean`
  * allow_rebase_merge `boolean`
  * allow_squash_merge `boolean`
  * anonymous_access_enabled `boolean`: Whether anonymous git access is allowed.
  * archive_url **required** `string`
  * archived **required** `boolean`
  * assignees_url **required** `string`
  * blobs_url **required** `string`
  * branches_url **required** `string`
  * clone_url **required** `string`
  * collaborators_url **required** `string`
  * comments_url **required** `string`
  * commits_url **required** `string`
  * compare_url **required** `string`
  * contents_url **required** `string`
  * contributors_url **required** `string`
  * created_at **required** `string`
  * default_branch **required** `string`
  * delete_branch_on_merge `boolean`
  * deployments_url **required** `string`
  * description **required** `string`
  * disabled **required** `boolean`: Returns whether or not this repository disabled.
  * downloads_url **required** `string`
  * events_url **required** `string`
  * fork **required** `boolean`
  * forks **required** `integer`
  * forks_count **required** `integer`
  * forks_url **required** `string`
  * full_name **required** `string`
  * git_commits_url **required** `string`
  * git_refs_url **required** `string`
  * git_tags_url **required** `string`
  * git_url **required** `string`
  * has_downloads **required** `boolean`
  * has_issues **required** `boolean`
  * has_pages **required** `boolean`
  * has_projects **required** `boolean`
  * has_wiki **required** `boolean`
  * homepage **required** `string`
  * hooks_url **required** `string`
  * html_url **required** `string`
  * id **required** `integer`
  * is_template `boolean`
  * issue_comment_url **required** `string`
  * issue_events_url **required** `string`
  * issues_url **required** `string`
  * keys_url **required** `string`
  * labels_url **required** `string`
  * language **required** `string`
  * languages_url **required** `string`
  * license **required**
    * html_url `string`
    * key **required** `string`
    * name **required** `string`
    * node_id **required** `string`
    * spdx_id **required** `string`
    * url **required** `string`
  * master_branch `string`
  * merges_url **required** `string`
  * milestones_url **required** `string`
  * mirror_url **required** `string`
  * name **required** `string`
  * network_count **required** `integer`
  * node_id **required** `string`
  * notifications_url **required** `string`
  * open_issues **required** `integer`
  * open_issues_count **required** `integer`
  * organization
    * avatar_url **required** `string`
    * events_url **required** `string`
    * followers_url **required** `string`
    * following_url **required** `string`
    * gists_url **required** `string`
    * gravatar_id **required** `string`
    * html_url **required** `string`
    * id **required** `integer`
    * login **required** `string`
    * node_id **required** `string`
    * organizations_url **required** `string`
    * received_events_url **required** `string`
    * repos_url **required** `string`
    * site_admin **required** `boolean`
    * starred_at `string`
    * starred_url **required** `string`
    * subscriptions_url **required** `string`
    * type **required** `string`
    * url **required** `string`
  * owner **required**
    * avatar_url **required** `string`
    * events_url **required** `string`
    * followers_url **required** `string`
    * following_url **required** `string`
    * gists_url **required** `string`
    * gravatar_id **required** `string`
    * html_url **required** `string`
    * id **required** `integer`
    * login **required** `string`
    * node_id **required** `string`
    * organizations_url **required** `string`
    * received_events_url **required** `string`
    * repos_url **required** `string`
    * site_admin **required** `boolean`
    * starred_at `string`
    * starred_url **required** `string`
    * subscriptions_url **required** `string`
    * type **required** `string`
    * url **required** `string`
  * parent [repository](#repository)
  * permissions `object`
    * admin **required** `boolean`
    * pull **required** `boolean`
    * push **required** `boolean`
  * private **required** `boolean`
  * pulls_url **required** `string`
  * pushed_at **required** `string`
  * releases_url **required** `string`
  * size **required** `integer`
  * source [repository](#repository)
  * ssh_url **required** `string`
  * stargazers_count **required** `integer`
  * stargazers_url **required** `string`
  * statuses_url **required** `string`
  * subscribers_count **required** `integer`
  * subscribers_url **required** `string`
  * subscription_url **required** `string`
  * svn_url **required** `string`
  * tags_url **required** `string`
  * teams_url **required** `string`
  * temp_clone_token `string`
  * template_repository
    * allow_merge_commit `boolean`: Whether to allow merge commits for pull requests.
    * allow_rebase_merge `boolean`: Whether to allow rebase merges for pull requests.
    * allow_squash_merge `boolean`: Whether to allow squash merges for pull requests.
    * archive_url **required** `string`
    * archived **required** `boolean`: Whether the repository is archived.
    * assignees_url **required** `string`
    * blobs_url **required** `string`
    * branches_url **required** `string`
    * clone_url **required** `string`
    * collaborators_url **required** `string`
    * comments_url **required** `string`
    * commits_url **required** `string`
    * compare_url **required** `string`
    * contents_url **required** `string`
    * contributors_url **required** `string`
    * created_at **required** `string`
    * default_branch **required** `string`: The default branch of the repository.
    * delete_branch_on_merge `boolean`: Whether to delete head branches when pull requests are merged
    * deployments_url **required** `string`
    * description **required** `string`
    * disabled **required** `boolean`: Returns whether or not this repository disabled.
    * downloads_url **required** `string`
    * events_url **required** `string`
    * fork **required** `boolean`
    * forks **required** `integer`
    * forks_count **required** `integer`
    * forks_url **required** `string`
    * full_name **required** `string`
    * git_commits_url **required** `string`
    * git_refs_url **required** `string`
    * git_tags_url **required** `string`
    * git_url **required** `string`
    * has_downloads **required** `boolean`: Whether downloads are enabled.
    * has_issues **required** `boolean`: Whether issues are enabled.
    * has_pages **required** `boolean`
    * has_projects **required** `boolean`: Whether projects are enabled.
    * has_wiki **required** `boolean`: Whether the wiki is enabled.
    * homepage **required** `string`
    * hooks_url **required** `string`
    * html_url **required** `string`
    * id **required** `integer`: Unique identifier of the repository
    * is_template `boolean`: Whether this repository acts as a template that can be used to generate new repositories.
    * issue_comment_url **required** `string`
    * issue_events_url **required** `string`
    * issues_url **required** `string`
    * keys_url **required** `string`
    * labels_url **required** `string`
    * language **required** `string`
    * languages_url **required** `string`
    * license **required**
      * html_url `string`
      * key **required** `string`
      * name **required** `string`
      * node_id **required** `string`
      * spdx_id **required** `string`
      * url **required** `string`
    * master_branch `string`
    * merges_url **required** `string`
    * milestones_url **required** `string`
    * mirror_url **required** `string`
    * name **required** `string`: The name of the repository.
    * network_count `integer`
    * node_id **required** `string`
    * notifications_url **required** `string`
    * open_issues **required** `integer`
    * open_issues_count **required** `integer`
    * owner **required**
      * avatar_url **required** `string`
      * events_url **required** `string`
      * followers_url **required** `string`
      * following_url **required** `string`
      * gists_url **required** `string`
      * gravatar_id **required** `string`
      * html_url **required** `string`
      * id **required** `integer`
      * login **required** `string`
      * node_id **required** `string`
      * organizations_url **required** `string`
      * received_events_url **required** `string`
      * repos_url **required** `string`
      * site_admin **required** `boolean`
      * starred_at `string`
      * starred_url **required** `string`
      * subscriptions_url **required** `string`
      * type **required** `string`
      * url **required** `string`
    * permissions `object`
      * admin **required** `boolean`
      * maintain `boolean`
      * pull **required** `boolean`
      * push **required** `boolean`
      * triage `boolean`
    * private **required** `boolean`: Whether the repository is private or public.
    * pulls_url **required** `string`
    * pushed_at **required** `string`
    * releases_url **required** `string`
    * size **required** `integer`
    * ssh_url **required** `string`
    * stargazers_count **required** `integer`
    * stargazers_url **required** `string`
    * starred_at `string`
    * statuses_url **required** `string`
    * subscribers_count `integer`
    * subscribers_url **required** `string`
    * subscription_url **required** `string`
    * svn_url **required** `string`
    * tags_url **required** `string`
    * teams_url **required** `string`
    * temp_clone_token `string`
    * template_repository `object`
      * allow_merge_commit `boolean`
      * allow_rebase_merge `boolean`
      * allow_squash_merge `boolean`
      * archive_url `string`
      * archived `boolean`
      * assignees_url `string`
      * blobs_url `string`
      * branches_url `string`
      * clone_url `string`
      * collaborators_url `string`
      * comments_url `string`
      * commits_url `string`
      * compare_url `string`
      * contents_url `string`
      * contributors_url `string`
      * created_at `string`
      * default_branch `string`
      * delete_branch_on_merge `boolean`
      * deployments_url `string`
      * description `string`
      * disabled `boolean`
      * downloads_url `string`
      * events_url `string`
      * fork `boolean`
      * forks_count `integer`
      * forks_url `string`
      * full_name `string`
      * git_commits_url `string`
      * git_refs_url `string`
      * git_tags_url `string`
      * git_url `string`
      * has_downloads `boolean`
      * has_issues `boolean`
      * has_pages `boolean`
      * has_projects `boolean`
      * has_wiki `boolean`
      * homepage `string`
      * hooks_url `string`
      * html_url `string`
      * id `integer`
      * is_template `boolean`
      * issue_comment_url `string`
      * issue_events_url `string`
      * issues_url `string`
      * keys_url `string`
      * labels_url `string`
      * language `string`
      * languages_url `string`
      * merges_url `string`
      * milestones_url `string`
      * mirror_url `string`
      * name `string`
      * network_count `integer`
      * node_id `string`
      * notifications_url `string`
      * open_issues_count `integer`
      * owner `object`
        * avatar_url `string`
        * events_url `string`
        * followers_url `string`
        * following_url `string`
        * gists_url `string`
        * gravatar_id `string`
        * html_url `string`
        * id `integer`
        * login `string`
        * node_id `string`
        * organizations_url `string`
        * received_events_url `string`
        * repos_url `string`
        * site_admin `boolean`
        * starred_url `string`
        * subscriptions_url `string`
        * type `string`
        * url `string`
      * permissions `object`
        * admin `boolean`
        * pull `boolean`
        * push `boolean`
      * private `boolean`
      * pulls_url `string`
      * pushed_at `string`
      * releases_url `string`
      * size `integer`
      * ssh_url `string`
      * stargazers_count `integer`
      * stargazers_url `string`
      * statuses_url `string`
      * subscribers_count `integer`
      * subscribers_url `string`
      * subscription_url `string`
      * svn_url `string`
      * tags_url `string`
      * teams_url `string`
      * temp_clone_token `string`
      * template_repository `string`
      * topics `array`
        * items `string`
      * trees_url `string`
      * updated_at `string`
      * url `string`
      * visibility `string`
      * watchers_count `integer`
    * topics `array`
      * items `string`
    * trees_url **required** `string`
    * updated_at **required** `string`
    * url **required** `string`
    * visibility `string`: The repository visibility: public, private, or internal.
    * watchers **required** `integer`
    * watchers_count **required** `integer`
  * topics `array`
    * items `string`
  * trees_url **required** `string`
  * updated_at **required** `string`
  * url **required** `string`
  * visibility `string`: The repository visibility: public, private, or internal.
  * watchers **required** `integer`
  * watchers_count **required** `integer`

### gist-comment
* Gist Comment `object`: A comment made to a gist.
  * author_association **required** `string`
  * body **required** `string`: The comment text.
  * created_at **required** `string`
  * id **required** `integer`
  * node_id **required** `string`
  * updated_at **required** `string`
  * url **required** `string`
  * user **required**
    * avatar_url **required** `string`
    * events_url **required** `string`
    * followers_url **required** `string`
    * following_url **required** `string`
    * gists_url **required** `string`
    * gravatar_id **required** `string`
    * html_url **required** `string`
    * id **required** `integer`
    * login **required** `string`
    * node_id **required** `string`
    * organizations_url **required** `string`
    * received_events_url **required** `string`
    * repos_url **required** `string`
    * site_admin **required** `boolean`
    * starred_at `string`
    * starred_url **required** `string`
    * subscriptions_url **required** `string`
    * type **required** `string`
    * url **required** `string`

### gist-commit
* Gist Commit `object`: Gist Commit
  * change_status **required** `object`
    * additions `integer`
    * deletions `integer`
    * total `integer`
  * committed_at **required** `string`
  * url **required** `string`
  * user **required**
    * avatar_url **required** `string`
    * events_url **required** `string`
    * followers_url **required** `string`
    * following_url **required** `string`
    * gists_url **required** `string`
    * gravatar_id **required** `string`
    * html_url **required** `string`
    * id **required** `integer`
    * login **required** `string`
    * node_id **required** `string`
    * organizations_url **required** `string`
    * received_events_url **required** `string`
    * repos_url **required** `string`
    * site_admin **required** `boolean`
    * starred_at `string`
    * starred_url **required** `string`
    * subscriptions_url **required** `string`
    * type **required** `string`
    * url **required** `string`
  * version **required** `string`

### gist-full
* Gist Full: Gist Full
  * comments `integer`
  * comments_url `string`
  * commits_url `string`
  * created_at `string`
  * description `string`
  * files `object`
  * forks_url `string`
  * git_pull_url `string`
  * git_push_url `string`
  * html_url `string`
  * id `string`
  * node_id `string`
  * owner [simple-user](#simple-user)
  * public `boolean`
  * truncated `boolean`
  * updated_at `string`
  * url `string`
  * user `string`
  * comments `integer`
  * comments_url `string`
  * commits_url `string`
  * created_at `string`
  * description `string`
  * fork_of
    * comments `integer`
    * comments_url `string`
    * commits_url `string`
    * created_at `string`
    * description `string`
    * files `object`
    * forks_url `string`
    * git_pull_url `string`
    * git_push_url `string`
    * html_url `string`
    * id `string`
    * node_id `string`
    * owner [simple-user](#simple-user)
    * public `boolean`
    * truncated `boolean`
    * updated_at `string`
    * url `string`
    * user `string`
  * forks `array`
    * items `object`
      * created_at `string`
      * id `string`
      * updated_at `string`
      * url `string`
      * user `object`
        * avatar_url `string`
        * events_url `string`
        * followers_url `string`
        * following_url `string`
        * gists_url `string`
        * gravatar_id `string`
        * html_url `string`
        * id `integer`
        * login `string`
        * node_id `string`
        * organizations_url `string`
        * received_events_url `string`
        * repos_url `string`
        * site_admin `boolean`
        * starred_url `string`
        * subscriptions_url `string`
        * type `string`
        * url `string`
  * forks_url `string`
  * git_pull_url `string`
  * git_push_url `string`
  * history `array`
    * items `object`
      * change_status `object`
        * additions `integer`
        * deletions `integer`
        * total `integer`
      * committed_at `string`
      * url `string`
      * user `object`
        * avatar_url `string`
        * events_url `string`
        * followers_url `string`
        * following_url `string`
        * gists_url `string`
        * gravatar_id `string`
        * html_url `string`
        * id `integer`
        * login `string`
        * node_id `string`
        * organizations_url `string`
        * received_events_url `string`
        * repos_url `string`
        * site_admin `boolean`
        * starred_url `string`
        * subscriptions_url `string`
        * type `string`
        * url `string`
      * version `string`
  * html_url `string`
  * id `string`
  * node_id `string`
  * updated_at `string`
  * url `string`

### gist-simple
* Gist Simple `object`: Gist Simple
  * comments `integer`
  * comments_url `string`
  * commits_url `string`
  * created_at `string`
  * description `string`
  * files `object`
  * forks_url `string`
  * git_pull_url `string`
  * git_push_url `string`
  * html_url `string`
  * id `string`
  * node_id `string`
  * owner [simple-user](#simple-user)
  * public `boolean`
  * truncated `boolean`
  * updated_at `string`
  * url `string`
  * user `string`

### git-commit
* Git Commit `object`: Low-level Git commit operations within a repository
  * author `object`: Identifying information for the git-user
    * date `string`: Timestamp of the commit
    * email **required** `string`: Git email address of the user
    * name **required** `string`: Name of the git user
  * committer `object`: Identifying information for the git-user
    * date `string`: Timestamp of the commit
    * email **required** `string`: Git email address of the user
    * name **required** `string`: Name of the git user
  * html_url `string`
  * message `string`: Message describing the purpose of the commit
  * node_id `string`
  * parents `array`
    * items `object`
      * html_url `string`
      * sha `string`: SHA for the commit
      * url `string`
  * sha `string`: SHA for the commit
  * tree `object`
    * sha `string`: SHA for the commit
    * url `string`
  * url `string`
  * verification `object`
    * payload `string`
    * reason `string`
    * signature `string`
    * verified `boolean`

### git-ref
* Git Reference `object`: Git references within a repository
  * node_id `string`
  * object `object`
    * sha `string`: SHA for the reference
    * type `string`
    * url `string`
  * ref `string`
  * url `string`

### git-tag
* Git Tag `object`: Metadata for a Git tag
  * message **required** `string`: Message describing the purpose of the tag
  * node_id **required** `string`
  * object **required** `object`
    * sha **required** `string`
    * type **required** `string`
    * url **required** `string`
  * sha **required** `string`
  * tag **required** `string`: Name of the tag
  * tagger **required** `object`
    * date **required** `string`
    * email **required** `string`
    * name **required** `string`
  * url **required** `string`: URL for the tag
  * verification [verification](#verification)

### git-tree
* Git Tree `object`: The hierarchy between files in a Git repository.
  * sha **required** `string`
  * tree **required** `array`: Objects specifying a tree structure
    * items `object`
      * mode `string`
      * path `string`
      * sha `string`
      * size `integer`
      * type `string`
      * url `string`
  * truncated **required** `boolean`
  * url **required** `string`

### git-user
* Git User `object`: Metaproperties for Git author/committer information.
  * date `string`
  * email `string`
  * name `string`

### gitignore-template
* Gitignore Template `object`: Gitignore Template
  * name **required** `string`
  * source **required** `string`

### gpg-key
* GPG Key `object`: A unique encryption key
  * can_certify **required** `boolean`
  * can_encrypt_comms **required** `boolean`
  * can_encrypt_storage **required** `boolean`
  * can_sign **required** `boolean`
  * created_at **required** `string`
  * emails **required** `array`
    * items `object`
      * email `string`
      * verified `boolean`
  * expires_at **required** `string`
  * id **required** `integer`
  * key_id **required** `string`
  * primary_key_id **required** `integer`
  * public_key **required** `string`
  * raw_key **required** `string`
  * subkeys **required** `array`
    * items `object`
      * can_certify `boolean`
      * can_encrypt_comms `boolean`
      * can_encrypt_storage `boolean`
      * can_sign `boolean`
      * created_at `string`
      * emails `array`
      * expires_at `string`
      * id `integer`
      * key_id `string`
      * primary_key_id `integer`
      * public_key `string`
      * raw_key `string`
      * subkeys `array`

### group-mapping
* GroupMapping `object`: External Groups to be mapped to a team for membership
  * group_description `string`: a description of the group
  * group_id `string`: The ID of the group
  * group_name `string`: The name of the group
  * groups `array`: Array of groups to be mapped to this team
    * items `object`
      * group_description **required** `string`: a description of the group
      * group_id **required** `string`: The ID of the group
      * group_name **required** `string`: The name of the group
  * status `string`: synchronization status for this group mapping
  * synced_at `string`: the time of the last sync for this group-mapping

### hook
* Webook `object`: Webhooks for repositories.
  * active **required** `boolean`: Determines whether the hook is actually triggered on pushes.
  * config **required** `object`
    * content_type `string`
    * digest `string`
    * email `string`
    * insecure_ssl `string`
    * password `string`
    * room `string`
    * secret `string`
    * subdomain `string`
    * token `string`
    * url `string`
  * created_at **required** `string`
  * events **required** `array`: Determines what events the hook is triggered for. Default: ['push'].
    * items `string`
  * id **required** `integer`: Unique identifier of the webhook.
  * last_response **required** [hook-response](#hook-response)
  * name **required** `string`: The name of a valid service, use 'web' for a webhook.
  * ping_url **required** `string`
  * test_url **required** `string`
  * type **required** `string`
  * updated_at **required** `string`
  * url **required** `string`

### hook-response
* Hook Response `object`
  * code **required** `integer`
  * message **required** `string`
  * status **required** `string`

### hovercard
* Hovercard `object`: Hovercard
  * contexts **required** `array`
    * items `object`
      * message **required** `string`
      * octicon **required** `string`

### import
* Import `object`: A repository import from an external source.
  * authors_count `integer`
  * authors_url **required** `string`
  * commit_count `integer`
  * error_message `string`
  * failed_step `string`
  * has_large_files `boolean`
  * html_url **required** `string`
  * import_percent `integer`
  * large_files_count `integer`
  * large_files_size `integer`
  * message `string`
  * project_choices `array`
    * items `object`
      * human_name `string`
      * tfvc_project `string`
      * vcs `string`
  * push_percent `integer`
  * repository_url **required** `string`
  * status **required** `string` (values: auth, error, none, detecting, choose, auth_failed, importing, mapping, waiting_to_push, pushing, complete, setup, unknown, detection_found_multiple, detection_found_nothing, detection_needs_auth)
  * status_text `string`
  * svc_root `string`
  * svn_root `string`
  * tfvc_project `string`
  * url **required** `string`
  * use_lfs `string`
  * vcs **required** `string`
  * vcs_url **required** `string`: The URL of the originating repository.

### installation
* Installation `object`: Installation
  * access_tokens_url **required** `string`
  * app_id **required** `integer`
  * app_slug **required** `string`
  * contact_email `string`
  * created_at **required** `string`
  * events **required** `array`
    * items `string`
  * html_url **required** `string`
  * id **required** `integer`: The ID of the installation.
  * permissions **required** `object`
    * checks `string`
    * contents `string`
    * deployments `string`
    * issues `string`
    * metadata `string`
    * organization_administration `string`
    * pull_requests `string`
    * statuses `string`
  * repositories_url **required** `string`
  * repository_selection **required** `string` (values: all, selected): Describe whether all repositories have been selected or there's a selection involved
  * single_file_name **required** `string`
  * suspended_at `string`
  * suspended_by
    * avatar_url **required** `string`
    * events_url **required** `string`
    * followers_url **required** `string`
    * following_url **required** `string`
    * gists_url **required** `string`
    * gravatar_id **required** `string`
    * html_url **required** `string`
    * id **required** `integer`
    * login **required** `string`
    * node_id **required** `string`
    * organizations_url **required** `string`
    * received_events_url **required** `string`
    * repos_url **required** `string`
    * site_admin **required** `boolean`
    * starred_at `string`
    * starred_url **required** `string`
    * subscriptions_url **required** `string`
    * type **required** `string`
    * url **required** `string`
  * target_id **required** `integer`: The ID of the user or organization this token is being scoped to.
  * target_type **required** `string`
  * updated_at **required** `string`

### installation-token
* Installation Token `object`: Authentication token for a GitHub App installed on a user or org.
  * expires_at `string`
  * permissions `object`
    * contents `string`
    * issues `string`
    * metadata `string`
    * single_file `string`
  * repositories `array`
    * items [repository](#repository)
  * repository_selection `string` (values: all, selected)
  * single_file `string`
  * token `string`

### integration
* GitHub app `object`: GitHub apps are a new way to extend GitHub. They can be installed directly on organizations and user accounts and granted access to specific repositories. They come with granular permissions and built-in webhooks. GitHub apps are first class actors within GitHub.
  * client_id `string`
  * client_secret `string`
  * created_at **required** `string`
  * description **required** `string`
  * events **required** `array`: The list of events for the GitHub app
    * items `string`
  * external_url **required** `string`
  * html_url **required** `string`
  * id **required** `integer`: Unique identifier of the GitHub app
  * installations_count `integer`: The number of installations associated with the GitHub app
  * name **required** `string`: The name of the GitHub app
  * node_id **required** `string`
  * owner **required**
    * avatar_url **required** `string`
    * events_url **required** `string`
    * followers_url **required** `string`
    * following_url **required** `string`
    * gists_url **required** `string`
    * gravatar_id **required** `string`
    * html_url **required** `string`
    * id **required** `integer`
    * login **required** `string`
    * node_id **required** `string`
    * organizations_url **required** `string`
    * received_events_url **required** `string`
    * repos_url **required** `string`
    * site_admin **required** `boolean`
    * starred_at `string`
    * starred_url **required** `string`
    * subscriptions_url **required** `string`
    * type **required** `string`
    * url **required** `string`
  * pem `string`
  * permissions **required** `object`: The set of permissions for the GitHub app
    * checks `string`
    * contents `string`
    * deployments `string`
    * issues `string`
    * metadata `string`
  * slug `string`: The slug name of the GitHub app
  * updated_at **required** `string`
  * webhook_secret `string`

### interaction-limit
* Interaction Limits `object`: Interaction limit settings.
  * expires_at **required** `string`
  * limit **required** `string` (values: existing_users, contributors_only, collaborators_only): The interaction limit to enable.
  * origin **required** `string`

### issue
* Issue `object`: Issues are a great way to keep track of tasks, enhancements, and bugs for your projects.
  * active_lock_reason `string`
  * assignee **required**
    * avatar_url **required** `string`
    * events_url **required** `string`
    * followers_url **required** `string`
    * following_url **required** `string`
    * gists_url **required** `string`
    * gravatar_id **required** `string`
    * html_url **required** `string`
    * id **required** `integer`
    * login **required** `string`
    * node_id **required** `string`
    * organizations_url **required** `string`
    * received_events_url **required** `string`
    * repos_url **required** `string`
    * site_admin **required** `boolean`
    * starred_at `string`
    * starred_url **required** `string`
    * subscriptions_url **required** `string`
    * type **required** `string`
    * url **required** `string`
  * assignees `array`
    * items [simple-user](#simple-user)
  * author_association **required** `string`
  * body `string`: Contents of the issue
  * body_html `string`
  * body_text `string`
  * closed_at **required** `string`
  * closed_by
    * avatar_url **required** `string`
    * events_url **required** `string`
    * followers_url **required** `string`
    * following_url **required** `string`
    * gists_url **required** `string`
    * gravatar_id **required** `string`
    * html_url **required** `string`
    * id **required** `integer`
    * login **required** `string`
    * node_id **required** `string`
    * organizations_url **required** `string`
    * received_events_url **required** `string`
    * repos_url **required** `string`
    * site_admin **required** `boolean`
    * starred_at `string`
    * starred_url **required** `string`
    * subscriptions_url **required** `string`
    * type **required** `string`
    * url **required** `string`
  * comments **required** `integer`
  * comments_url **required** `string`
  * created_at **required** `string`
  * events_url **required** `string`
  * html_url **required** `string`
  * id **required** `integer`
  * labels **required** `array`: Labels to associate with this issue; pass one or more label names to replace the set of labels on this issue; send an empty array to clear all labels from the issue; note that the labels are silently dropped for users without push access to the repository
  * labels_url **required** `string`
  * locked **required** `boolean`
  * milestone **required**
    * closed_at **required** `string`
    * closed_issues **required** `integer`
    * created_at **required** `string`
    * creator **required**
      * avatar_url **required** `string`
      * events_url **required** `string`
      * followers_url **required** `string`
      * following_url **required** `string`
      * gists_url **required** `string`
      * gravatar_id **required** `string`
      * html_url **required** `string`
      * id **required** `integer`
      * login **required** `string`
      * node_id **required** `string`
      * organizations_url **required** `string`
      * received_events_url **required** `string`
      * repos_url **required** `string`
      * site_admin **required** `boolean`
      * starred_at `string`
      * starred_url **required** `string`
      * subscriptions_url **required** `string`
      * type **required** `string`
      * url **required** `string`
    * description **required** `string`
    * due_on **required** `string`
    * html_url **required** `string`
    * id **required** `integer`
    * labels_url **required** `string`
    * node_id **required** `string`
    * number **required** `integer`: The number of the milestone.
    * open_issues **required** `integer`
    * state **required** `string` (values: open, closed): The state of the milestone.
    * title **required** `string`: The title of the milestone.
    * updated_at **required** `string`
    * url **required** `string`
  * node_id **required** `string`
  * number **required** `integer`: Number uniquely identifying the issue within its repository
  * performed_via_github_app
    * client_id `string`
    * client_secret `string`
    * created_at **required** `string`
    * description **required** `string`
    * events **required** `array`: The list of events for the GitHub app
      * items `string`
    * external_url **required** `string`
    * html_url **required** `string`
    * id **required** `integer`: Unique identifier of the GitHub app
    * installations_count `integer`: The number of installations associated with the GitHub app
    * name **required** `string`: The name of the GitHub app
    * node_id **required** `string`
    * owner **required**
      * avatar_url **required** `string`
      * events_url **required** `string`
      * followers_url **required** `string`
      * following_url **required** `string`
      * gists_url **required** `string`
      * gravatar_id **required** `string`
      * html_url **required** `string`
      * id **required** `integer`
      * login **required** `string`
      * node_id **required** `string`
      * organizations_url **required** `string`
      * received_events_url **required** `string`
      * repos_url **required** `string`
      * site_admin **required** `boolean`
      * starred_at `string`
      * starred_url **required** `string`
      * subscriptions_url **required** `string`
      * type **required** `string`
      * url **required** `string`
    * pem `string`
    * permissions **required** `object`: The set of permissions for the GitHub app
      * checks `string`
      * contents `string`
      * deployments `string`
      * issues `string`
      * metadata `string`
    * slug `string`: The slug name of the GitHub app
    * updated_at **required** `string`
    * webhook_secret `string`
  * pull_request `object`
    * diff_url **required** `string`
    * html_url **required** `string`
    * merged_at `string`
    * patch_url **required** `string`
    * url **required** `string`
  * reactions [reaction-rollup](#reaction-rollup)
  * repository [repository](#repository)
  * repository_url **required** `string`
  * state **required** `string`: State of the issue; either 'open' or 'closed'
  * timeline_url `string`
  * title **required** `string`: Title of the issue
  * updated_at **required** `string`
  * url **required** `string`: URL for the issue
  * user **required**
    * avatar_url **required** `string`
    * events_url **required** `string`
    * followers_url **required** `string`
    * following_url **required** `string`
    * gists_url **required** `string`
    * gravatar_id **required** `string`
    * html_url **required** `string`
    * id **required** `integer`
    * login **required** `string`
    * node_id **required** `string`
    * organizations_url **required** `string`
    * received_events_url **required** `string`
    * repos_url **required** `string`
    * site_admin **required** `boolean`
    * starred_at `string`
    * starred_url **required** `string`
    * subscriptions_url **required** `string`
    * type **required** `string`
    * url **required** `string`

### issue-comment
* Issue Comment `object`: Comments provide a way for people to collaborate on an issue.
  * author_association **required** `string`
  * body `string`: Contents of the issue comment
  * body_html `string`
  * body_text `string`
  * created_at **required** `string`
  * html_url **required** `string`
  * id **required** `integer`: Unique identifier of the issue comment
  * issue_url **required** `string`
  * node_id **required** `string`
  * performed_via_github_app
    * client_id `string`
    * client_secret `string`
    * created_at **required** `string`
    * description **required** `string`
    * events **required** `array`: The list of events for the GitHub app
      * items `string`
    * external_url **required** `string`
    * html_url **required** `string`
    * id **required** `integer`: Unique identifier of the GitHub app
    * installations_count `integer`: The number of installations associated with the GitHub app
    * name **required** `string`: The name of the GitHub app
    * node_id **required** `string`
    * owner **required**
      * avatar_url **required** `string`
      * events_url **required** `string`
      * followers_url **required** `string`
      * following_url **required** `string`
      * gists_url **required** `string`
      * gravatar_id **required** `string`
      * html_url **required** `string`
      * id **required** `integer`
      * login **required** `string`
      * node_id **required** `string`
      * organizations_url **required** `string`
      * received_events_url **required** `string`
      * repos_url **required** `string`
      * site_admin **required** `boolean`
      * starred_at `string`
      * starred_url **required** `string`
      * subscriptions_url **required** `string`
      * type **required** `string`
      * url **required** `string`
    * pem `string`
    * permissions **required** `object`: The set of permissions for the GitHub app
      * checks `string`
      * contents `string`
      * deployments `string`
      * issues `string`
      * metadata `string`
    * slug `string`: The slug name of the GitHub app
    * updated_at **required** `string`
    * webhook_secret `string`
  * reactions [reaction-rollup](#reaction-rollup)
  * updated_at **required** `string`
  * url **required** `string`: URL for the issue comment
  * user **required**
    * avatar_url **required** `string`
    * events_url **required** `string`
    * followers_url **required** `string`
    * following_url **required** `string`
    * gists_url **required** `string`
    * gravatar_id **required** `string`
    * html_url **required** `string`
    * id **required** `integer`
    * login **required** `string`
    * node_id **required** `string`
    * organizations_url **required** `string`
    * received_events_url **required** `string`
    * repos_url **required** `string`
    * site_admin **required** `boolean`
    * starred_at `string`
    * starred_url **required** `string`
    * subscriptions_url **required** `string`
    * type **required** `string`
    * url **required** `string`

### issue-event
* Issue Event `object`: Issue Event
  * actor **required**
    * avatar_url **required** `string`
    * events_url **required** `string`
    * followers_url **required** `string`
    * following_url **required** `string`
    * gists_url **required** `string`
    * gravatar_id **required** `string`
    * html_url **required** `string`
    * id **required** `integer`
    * login **required** `string`
    * node_id **required** `string`
    * organizations_url **required** `string`
    * received_events_url **required** `string`
    * repos_url **required** `string`
    * site_admin **required** `boolean`
    * starred_at `string`
    * starred_url **required** `string`
    * subscriptions_url **required** `string`
    * type **required** `string`
    * url **required** `string`
  * assignee
    * avatar_url **required** `string`
    * events_url **required** `string`
    * followers_url **required** `string`
    * following_url **required** `string`
    * gists_url **required** `string`
    * gravatar_id **required** `string`
    * html_url **required** `string`
    * id **required** `integer`
    * login **required** `string`
    * node_id **required** `string`
    * organizations_url **required** `string`
    * received_events_url **required** `string`
    * repos_url **required** `string`
    * site_admin **required** `boolean`
    * starred_at `string`
    * starred_url **required** `string`
    * subscriptions_url **required** `string`
    * type **required** `string`
    * url **required** `string`
  * assigner
    * avatar_url **required** `string`
    * events_url **required** `string`
    * followers_url **required** `string`
    * following_url **required** `string`
    * gists_url **required** `string`
    * gravatar_id **required** `string`
    * html_url **required** `string`
    * id **required** `integer`
    * login **required** `string`
    * node_id **required** `string`
    * organizations_url **required** `string`
    * received_events_url **required** `string`
    * repos_url **required** `string`
    * site_admin **required** `boolean`
    * starred_at `string`
    * starred_url **required** `string`
    * subscriptions_url **required** `string`
    * type **required** `string`
    * url **required** `string`
  * author_association `string`
  * commit_id **required** `string`
  * commit_url **required** `string`
  * created_at **required** `string`
  * dismissed_review [issue-event-dismissed-review](#issue-event-dismissed-review)
  * event **required** `string`
  * id **required** `integer`
  * issue [issue-simple](#issue-simple)
  * label [issue-event-label](#issue-event-label)
  * lock_reason `string`
  * milestone [issue-event-milestone](#issue-event-milestone)
  * node_id **required** `string`
  * project_card [issue-event-project-card](#issue-event-project-card)
  * rename [issue-event-rename](#issue-event-rename)
  * requested_reviewer
    * avatar_url **required** `string`
    * events_url **required** `string`
    * followers_url **required** `string`
    * following_url **required** `string`
    * gists_url **required** `string`
    * gravatar_id **required** `string`
    * html_url **required** `string`
    * id **required** `integer`
    * login **required** `string`
    * node_id **required** `string`
    * organizations_url **required** `string`
    * received_events_url **required** `string`
    * repos_url **required** `string`
    * site_admin **required** `boolean`
    * starred_at `string`
    * starred_url **required** `string`
    * subscriptions_url **required** `string`
    * type **required** `string`
    * url **required** `string`
  * requested_team [team](#team)
  * review_requester
    * avatar_url **required** `string`
    * events_url **required** `string`
    * followers_url **required** `string`
    * following_url **required** `string`
    * gists_url **required** `string`
    * gravatar_id **required** `string`
    * html_url **required** `string`
    * id **required** `integer`
    * login **required** `string`
    * node_id **required** `string`
    * organizations_url **required** `string`
    * received_events_url **required** `string`
    * repos_url **required** `string`
    * site_admin **required** `boolean`
    * starred_at `string`
    * starred_url **required** `string`
    * subscriptions_url **required** `string`
    * type **required** `string`
    * url **required** `string`
  * url **required** `string`

### issue-event-dismissed-review
* Issue Event Dismissed Review `object`
  * dismissal_commit_id `string`
  * dismissal_message **required** `string`
  * review_id **required** `integer`
  * state **required** `string`

### issue-event-for-issue
* Issue Event for Issue `object`: Issue Event for Issue
  * actor [simple-user](#simple-user)
  * author_association `string`
  * body `string`
  * body_html `string`
  * body_text `string`
  * commit_id `string`
  * commit_url `string`
  * created_at `string`
  * event `string`
  * html_url `string`
  * id `integer`
  * issue_url `string`
  * lock_reason `string`
  * message `string`
  * node_id `string`
  * pull_request_url `string`
  * sha `string`
  * state `string`
  * submitted_at `string`
  * updated_at `string`
  * url `string`

### issue-event-label
* Issue Event Label `object`: Issue Event Label
  * color **required** `string`
  * name **required** `string`

### issue-event-milestone
* Issue Event Milestone `object`: Issue Event Milestone
  * title **required** `string`

### issue-event-project-card
* Issue Event Project Card `object`: Issue Event Project Card
  * column_name **required** `string`
  * id **required** `integer`
  * previous_column_name `string`
  * project_id **required** `integer`
  * project_url **required** `string`
  * url **required** `string`

### issue-event-rename
* Issue Event Rename `object`: Issue Event Rename
  * from **required** `string`
  * to **required** `string`

### issue-search-result-item
* Issue Search Result Item `object`: Issue Search Result Item
  * active_lock_reason `string`
  * assignee **required**
    * avatar_url **required** `string`
    * events_url **required** `string`
    * followers_url **required** `string`
    * following_url **required** `string`
    * gists_url **required** `string`
    * gravatar_id **required** `string`
    * html_url **required** `string`
    * id **required** `integer`
    * login **required** `string`
    * node_id **required** `string`
    * organizations_url **required** `string`
    * received_events_url **required** `string`
    * repos_url **required** `string`
    * site_admin **required** `boolean`
    * starred_at `string`
    * starred_url **required** `string`
    * subscriptions_url **required** `string`
    * type **required** `string`
    * url **required** `string`
  * assignees `array`
    * items [simple-user](#simple-user)
  * author_association **required** `string`
  * body `string`
  * body_html `string`
  * body_text `string`
  * closed_at **required** `string`
  * comments **required** `integer`
  * comments_url **required** `string`
  * created_at **required** `string`
  * draft `boolean`
  * events_url **required** `string`
  * html_url **required** `string`
  * id **required** `integer`
  * labels **required** `array`
    * items `object`
      * color `string`
      * default `boolean`
      * description `string`
      * id `integer`
      * name `string`
      * node_id `string`
      * url `string`
  * labels_url **required** `string`
  * locked **required** `boolean`
  * milestone **required**
    * closed_at **required** `string`
    * closed_issues **required** `integer`
    * created_at **required** `string`
    * creator **required**
      * avatar_url **required** `string`
      * events_url **required** `string`
      * followers_url **required** `string`
      * following_url **required** `string`
      * gists_url **required** `string`
      * gravatar_id **required** `string`
      * html_url **required** `string`
      * id **required** `integer`
      * login **required** `string`
      * node_id **required** `string`
      * organizations_url **required** `string`
      * received_events_url **required** `string`
      * repos_url **required** `string`
      * site_admin **required** `boolean`
      * starred_at `string`
      * starred_url **required** `string`
      * subscriptions_url **required** `string`
      * type **required** `string`
      * url **required** `string`
    * description **required** `string`
    * due_on **required** `string`
    * html_url **required** `string`
    * id **required** `integer`
    * labels_url **required** `string`
    * node_id **required** `string`
    * number **required** `integer`: The number of the milestone.
    * open_issues **required** `integer`
    * state **required** `string` (values: open, closed): The state of the milestone.
    * title **required** `string`: The title of the milestone.
    * updated_at **required** `string`
    * url **required** `string`
  * node_id **required** `string`
  * number **required** `integer`
  * performed_via_github_app
    * client_id `string`
    * client_secret `string`
    * created_at **required** `string`
    * description **required** `string`
    * events **required** `array`: The list of events for the GitHub app
      * items `string`
    * external_url **required** `string`
    * html_url **required** `string`
    * id **required** `integer`: Unique identifier of the GitHub app
    * installations_count `integer`: The number of installations associated with the GitHub app
    * name **required** `string`: The name of the GitHub app
    * node_id **required** `string`
    * owner **required**
      * avatar_url **required** `string`
      * events_url **required** `string`
      * followers_url **required** `string`
      * following_url **required** `string`
      * gists_url **required** `string`
      * gravatar_id **required** `string`
      * html_url **required** `string`
      * id **required** `integer`
      * login **required** `string`
      * node_id **required** `string`
      * organizations_url **required** `string`
      * received_events_url **required** `string`
      * repos_url **required** `string`
      * site_admin **required** `boolean`
      * starred_at `string`
      * starred_url **required** `string`
      * subscriptions_url **required** `string`
      * type **required** `string`
      * url **required** `string`
    * pem `string`
    * permissions **required** `object`: The set of permissions for the GitHub app
      * checks `string`
      * contents `string`
      * deployments `string`
      * issues `string`
      * metadata `string`
    * slug `string`: The slug name of the GitHub app
    * updated_at **required** `string`
    * webhook_secret `string`
  * pull_request `object`
    * diff_url **required** `string`
    * html_url **required** `string`
    * merged_at `string`
    * patch_url **required** `string`
    * url **required** `string`
  * repository [repository](#repository)
  * repository_url **required** `string`
  * score **required** `integer`
  * state **required** `string`
  * text_matches [search-result-text-matches](#search-result-text-matches)
  * timeline_url `string`
  * title **required** `string`
  * updated_at **required** `string`
  * url **required** `string`
  * user **required**
    * avatar_url **required** `string`
    * events_url **required** `string`
    * followers_url **required** `string`
    * following_url **required** `string`
    * gists_url **required** `string`
    * gravatar_id **required** `string`
    * html_url **required** `string`
    * id **required** `integer`
    * login **required** `string`
    * node_id **required** `string`
    * organizations_url **required** `string`
    * received_events_url **required** `string`
    * repos_url **required** `string`
    * site_admin **required** `boolean`
    * starred_at `string`
    * starred_url **required** `string`
    * subscriptions_url **required** `string`
    * type **required** `string`
    * url **required** `string`

### issue-simple
* Issue Simple `object`: Issue Simple
  * active_lock_reason `string`
  * assignee **required**
    * avatar_url **required** `string`
    * events_url **required** `string`
    * followers_url **required** `string`
    * following_url **required** `string`
    * gists_url **required** `string`
    * gravatar_id **required** `string`
    * html_url **required** `string`
    * id **required** `integer`
    * login **required** `string`
    * node_id **required** `string`
    * organizations_url **required** `string`
    * received_events_url **required** `string`
    * repos_url **required** `string`
    * site_admin **required** `boolean`
    * starred_at `string`
    * starred_url **required** `string`
    * subscriptions_url **required** `string`
    * type **required** `string`
    * url **required** `string`
  * assignees `array`
    * items [simple-user](#simple-user)
  * author_association **required** `string`
  * body `string`
  * body_html `string`
  * body_text `string`
  * closed_at **required** `string`
  * comments **required** `integer`
  * comments_url **required** `string`
  * created_at **required** `string`
  * events_url **required** `string`
  * html_url **required** `string`
  * id **required** `integer`
  * labels **required** `array`
    * items `object`
      * color `string`
      * default `boolean`
      * description `string`
      * id `integer`
      * name `string`
      * node_id `string`
      * url `string`
  * labels_url **required** `string`
  * locked **required** `boolean`
  * milestone **required**
    * closed_at **required** `string`
    * closed_issues **required** `integer`
    * created_at **required** `string`
    * creator **required**
      * avatar_url **required** `string`
      * events_url **required** `string`
      * followers_url **required** `string`
      * following_url **required** `string`
      * gists_url **required** `string`
      * gravatar_id **required** `string`
      * html_url **required** `string`
      * id **required** `integer`
      * login **required** `string`
      * node_id **required** `string`
      * organizations_url **required** `string`
      * received_events_url **required** `string`
      * repos_url **required** `string`
      * site_admin **required** `boolean`
      * starred_at `string`
      * starred_url **required** `string`
      * subscriptions_url **required** `string`
      * type **required** `string`
      * url **required** `string`
    * description **required** `string`
    * due_on **required** `string`
    * html_url **required** `string`
    * id **required** `integer`
    * labels_url **required** `string`
    * node_id **required** `string`
    * number **required** `integer`: The number of the milestone.
    * open_issues **required** `integer`
    * state **required** `string` (values: open, closed): The state of the milestone.
    * title **required** `string`: The title of the milestone.
    * updated_at **required** `string`
    * url **required** `string`
  * node_id **required** `string`
  * number **required** `integer`
  * performed_via_github_app
    * client_id `string`
    * client_secret `string`
    * created_at **required** `string`
    * description **required** `string`
    * events **required** `array`: The list of events for the GitHub app
      * items `string`
    * external_url **required** `string`
    * html_url **required** `string`
    * id **required** `integer`: Unique identifier of the GitHub app
    * installations_count `integer`: The number of installations associated with the GitHub app
    * name **required** `string`: The name of the GitHub app
    * node_id **required** `string`
    * owner **required**
      * avatar_url **required** `string`
      * events_url **required** `string`
      * followers_url **required** `string`
      * following_url **required** `string`
      * gists_url **required** `string`
      * gravatar_id **required** `string`
      * html_url **required** `string`
      * id **required** `integer`
      * login **required** `string`
      * node_id **required** `string`
      * organizations_url **required** `string`
      * received_events_url **required** `string`
      * repos_url **required** `string`
      * site_admin **required** `boolean`
      * starred_at `string`
      * starred_url **required** `string`
      * subscriptions_url **required** `string`
      * type **required** `string`
      * url **required** `string`
    * pem `string`
    * permissions **required** `object`: The set of permissions for the GitHub app
      * checks `string`
      * contents `string`
      * deployments `string`
      * issues `string`
      * metadata `string`
    * slug `string`: The slug name of the GitHub app
    * updated_at **required** `string`
    * webhook_secret `string`
  * pull_request `object`
    * diff_url **required** `string`
    * html_url **required** `string`
    * merged_at `string`
    * patch_url **required** `string`
    * url **required** `string`
  * repository [repository](#repository)
  * repository_url **required** `string`
  * state **required** `string`
  * timeline_url `string`
  * title **required** `string`
  * updated_at **required** `string`
  * url **required** `string`
  * user **required**
    * avatar_url **required** `string`
    * events_url **required** `string`
    * followers_url **required** `string`
    * following_url **required** `string`
    * gists_url **required** `string`
    * gravatar_id **required** `string`
    * html_url **required** `string`
    * id **required** `integer`
    * login **required** `string`
    * node_id **required** `string`
    * organizations_url **required** `string`
    * received_events_url **required** `string`
    * repos_url **required** `string`
    * site_admin **required** `boolean`
    * starred_at `string`
    * starred_url **required** `string`
    * subscriptions_url **required** `string`
    * type **required** `string`
    * url **required** `string`

### job
* Job `object`: Information of a job execution in a workflow run
  * check_run_url **required** `string`
  * completed_at **required** `string`: The time that the job finished, in ISO 8601 format.
  * conclusion **required** `string`: The outcome of the job.
  * head_sha **required** `string`: The SHA of the commit that is being run.
  * html_url **required** `string`
  * id **required** `integer`: The id of the job.
  * name **required** `string`: The name of the job.
  * node_id **required** `string`
  * run_id **required** `integer`: The id of the associated workflow run.
  * run_url **required** `string`
  * started_at **required** `string`: The time that the job started, in ISO 8601 format.
  * status **required** `string` (values: queued, in_progress, completed): The phase of the lifecycle that the job is currently in.
  * steps `array`: Steps in this job.
    * items `object`
      * completed_at `string`: The time that the job finished, in ISO 8601 format.
      * conclusion **required** `string`: The outcome of the job.
      * name **required** `string`: The name of the job.
      * number **required** `integer`
      * started_at `string`: The time that the step started, in ISO 8601 format.
      * status **required** `string` (values: queued, in_progress, completed): The phase of the lifecycle that the job is currently in.
  * url **required** `string`

### key
* Key `object`: Key
  * created_at `string`
  * id `integer`
  * key `string`
  * key_id `string`
  * read_only `boolean`
  * title `string`
  * url `string`
  * verified `boolean`

### key-simple
* Key Simple `object`: Key Simple
  * id **required** `integer`
  * key **required** `string`

### label
* Label `object`: Color-coded labels help you categorize and filter your issues (just like labels in Gmail).
  * color **required** `string`: 6-character hex code, without the leading #, identifying the color
  * default **required** `boolean`
  * description `string`
  * id **required** `integer`
  * name **required** `string`: The name of the label.
  * node_id **required** `string`
  * url **required** `string`: URL for the label

### label-search-result-item
* Label Search Result Item `object`: Label Search Result Item
  * color **required** `string`
  * default **required** `boolean`
  * description **required** `string`
  * id **required** `integer`
  * name **required** `string`
  * node_id **required** `string`
  * score **required** `integer`
  * text_matches [search-result-text-matches](#search-result-text-matches)
  * url **required** `string`

### language
* Language `object`: Language

### license
* License `object`: License
  * body **required** `string`
  * conditions **required** `array`
    * items `string`
  * description **required** `string`
  * featured **required** `boolean`
  * html_url **required** `string`
  * implementation **required** `string`
  * key **required** `string`
  * limitations **required** `array`
    * items `string`
  * name **required** `string`
  * node_id **required** `string`
  * permissions **required** `array`
    * items `string`
  * spdx_id **required** `string`
  * url **required** `string`

### license-content
* License Content `object`: License Content
  * _links **required** `object`
    * git **required** `string`
    * html **required** `string`
    * self **required** `string`
  * content **required** `string`
  * download_url **required** `string`
  * encoding **required** `string`
  * git_url **required** `string`
  * html_url **required** `string`
  * license **required**
    * html_url `string`
    * key **required** `string`
    * name **required** `string`
    * node_id **required** `string`
    * spdx_id **required** `string`
    * url **required** `string`
  * name **required** `string`
  * path **required** `string`
  * sha **required** `string`
  * size **required** `integer`
  * type **required** `string`
  * url **required** `string`

### license-simple
* License Simple `object`: License Simple
  * html_url `string`
  * key **required** `string`
  * name **required** `string`
  * node_id **required** `string`
  * spdx_id **required** `string`
  * url **required** `string`

### link
* Link `object`: Hypermedia Link
  * href **required** `string`

### link-with-type
* Link With Type `object`: Hypermedia Link with Type
  * href **required** `string`
  * type **required** `string`

### marketplace-account
* Marketplace Account `object`
  * email `string`
  * id **required** `integer`
  * login **required** `string`
  * node_id `string`
  * organization_billing_email `string`
  * type **required** `string`
  * url **required** `string`

### marketplace-listing-plan
* Marketplace Listing Plan `object`: Marketplace Listing Plan
  * accounts_url **required** `string`
  * bullets **required** `array`
    * items `string`
  * description **required** `string`
  * has_free_trial **required** `boolean`
  * id **required** `integer`
  * monthly_price_in_cents **required** `integer`
  * name **required** `string`
  * number **required** `integer`
  * price_model **required** `string`
  * state **required** `string`
  * unit_name **required** `string`
  * url **required** `string`
  * yearly_price_in_cents **required** `integer`

### marketplace-purchase
* Marketplace Purchase `object`: Marketplace Purchase
  * id **required** `integer`
  * login **required** `string`
  * marketplace_pending_change `object`
    * effective_date `string`
    * id `integer`
    * is_installed `boolean`
    * plan [marketplace-listing-plan](#marketplace-listing-plan)
    * unit_count `integer`
  * marketplace_purchase **required** `object`
    * billing_cycle `string`
    * free_trial_ends_on `string`
    * is_installed `boolean`
    * next_billing_date `string`
    * on_free_trial `boolean`
    * plan [marketplace-listing-plan](#marketplace-listing-plan)
    * unit_count `integer`
    * updated_at `string`
  * organization_billing_email `string`
  * type **required** `string`
  * url **required** `string`

### migration
* Migration `object`: A migration.
  * archive_url `string`
  * created_at **required** `string`
  * exclude `array`
  * exclude_attachments **required** `boolean`
  * guid **required** `string`
  * id **required** `integer`
  * lock_repositories **required** `boolean`
  * node_id **required** `string`
  * owner **required**
    * avatar_url **required** `string`
    * events_url **required** `string`
    * followers_url **required** `string`
    * following_url **required** `string`
    * gists_url **required** `string`
    * gravatar_id **required** `string`
    * html_url **required** `string`
    * id **required** `integer`
    * login **required** `string`
    * node_id **required** `string`
    * organizations_url **required** `string`
    * received_events_url **required** `string`
    * repos_url **required** `string`
    * site_admin **required** `boolean`
    * starred_at `string`
    * starred_url **required** `string`
    * subscriptions_url **required** `string`
    * type **required** `string`
    * url **required** `string`
  * repositories **required** `array`
    * items [repository](#repository)
  * state **required** `string`
  * updated_at **required** `string`
  * url **required** `string`

### milestone
* Milestone `object`: A collection of related issues and pull requests.
  * closed_at **required** `string`
  * closed_issues **required** `integer`
  * created_at **required** `string`
  * creator **required**
    * avatar_url **required** `string`
    * events_url **required** `string`
    * followers_url **required** `string`
    * following_url **required** `string`
    * gists_url **required** `string`
    * gravatar_id **required** `string`
    * html_url **required** `string`
    * id **required** `integer`
    * login **required** `string`
    * node_id **required** `string`
    * organizations_url **required** `string`
    * received_events_url **required** `string`
    * repos_url **required** `string`
    * site_admin **required** `boolean`
    * starred_at `string`
    * starred_url **required** `string`
    * subscriptions_url **required** `string`
    * type **required** `string`
    * url **required** `string`
  * description **required** `string`
  * due_on **required** `string`
  * html_url **required** `string`
  * id **required** `integer`
  * labels_url **required** `string`
  * node_id **required** `string`
  * number **required** `integer`: The number of the milestone.
  * open_issues **required** `integer`
  * state **required** `string` (values: open, closed): The state of the milestone.
  * title **required** `string`: The title of the milestone.
  * updated_at **required** `string`
  * url **required** `string`

### minimal-repository
* Minimal Repository `object`: Minimal Repository
  * archive_url **required** `string`
  * archived `boolean`
  * assignees_url **required** `string`
  * blobs_url **required** `string`
  * branches_url **required** `string`
  * clone_url `string`
  * collaborators_url **required** `string`
  * comments_url **required** `string`
  * commits_url **required** `string`
  * compare_url **required** `string`
  * contents_url **required** `string`
  * contributors_url **required** `string`
  * created_at `string`
  * default_branch `string`
  * delete_branch_on_merge `boolean`
  * deployments_url **required** `string`
  * description **required** `string`
  * disabled `boolean`
  * downloads_url **required** `string`
  * events_url **required** `string`
  * fork **required** `boolean`
  * forks `integer`
  * forks_count `integer`
  * forks_url **required** `string`
  * full_name **required** `string`
  * git_commits_url **required** `string`
  * git_refs_url **required** `string`
  * git_tags_url **required** `string`
  * git_url `string`
  * has_downloads `boolean`
  * has_issues `boolean`
  * has_pages `boolean`
  * has_projects `boolean`
  * has_wiki `boolean`
  * homepage `string`
  * hooks_url **required** `string`
  * html_url **required** `string`
  * id **required** `integer`
  * is_template `boolean`
  * issue_comment_url **required** `string`
  * issue_events_url **required** `string`
  * issues_url **required** `string`
  * keys_url **required** `string`
  * labels_url **required** `string`
  * language `string`
  * languages_url **required** `string`
  * license `object`
    * key `string`
    * name `string`
    * node_id `string`
    * spdx_id `string`
    * url `string`
  * merges_url **required** `string`
  * milestones_url **required** `string`
  * mirror_url `string`
  * name **required** `string`
  * network_count `integer`
  * node_id **required** `string`
  * notifications_url **required** `string`
  * open_issues `integer`
  * open_issues_count `integer`
  * owner **required**
    * avatar_url **required** `string`
    * events_url **required** `string`
    * followers_url **required** `string`
    * following_url **required** `string`
    * gists_url **required** `string`
    * gravatar_id **required** `string`
    * html_url **required** `string`
    * id **required** `integer`
    * login **required** `string`
    * node_id **required** `string`
    * organizations_url **required** `string`
    * received_events_url **required** `string`
    * repos_url **required** `string`
    * site_admin **required** `boolean`
    * starred_at `string`
    * starred_url **required** `string`
    * subscriptions_url **required** `string`
    * type **required** `string`
    * url **required** `string`
  * permissions `object`
    * admin `boolean`
    * pull `boolean`
    * push `boolean`
  * private **required** `boolean`
  * pulls_url **required** `string`
  * pushed_at `string`
  * releases_url **required** `string`
  * size `integer`
  * ssh_url `string`
  * stargazers_count `integer`
  * stargazers_url **required** `string`
  * statuses_url **required** `string`
  * subscribers_count `integer`
  * subscribers_url **required** `string`
  * subscription_url **required** `string`
  * svn_url `string`
  * tags_url **required** `string`
  * teams_url **required** `string`
  * temp_clone_token `string`
  * template_repository `string`
  * topics `array`
    * items `string`
  * trees_url **required** `string`
  * updated_at `string`
  * url **required** `string`
  * visibility `string`
  * watchers `integer`
  * watchers_count `integer`

### org-hook
* Org Hook `object`: Org Hook
  * active **required** `boolean`
  * config **required** `object`
    * content_type `string`
    * insecure_ssl `string`
    * secret `string`
    * url `string`
  * created_at **required** `string`
  * events **required** `array`
    * items `string`
  * id **required** `integer`
  * name **required** `string`
  * ping_url **required** `string`
  * type **required** `string`
  * updated_at **required** `string`
  * url **required** `string`

### org-membership
* Org Membership `object`: Org Membership
  * organization **required** [organization-simple](#organization-simple)
  * organization_url **required** `string`
  * permissions `object`
    * can_create_repository **required** `boolean`
  * role **required** `string`
  * state **required** `string`
  * url **required** `string`
  * user **required**
    * avatar_url **required** `string`
    * events_url **required** `string`
    * followers_url **required** `string`
    * following_url **required** `string`
    * gists_url **required** `string`
    * gravatar_id **required** `string`
    * html_url **required** `string`
    * id **required** `integer`
    * login **required** `string`
    * node_id **required** `string`
    * organizations_url **required** `string`
    * received_events_url **required** `string`
    * repos_url **required** `string`
    * site_admin **required** `boolean`
    * starred_at `string`
    * starred_url **required** `string`
    * subscriptions_url **required** `string`
    * type **required** `string`
    * url **required** `string`

### organization
* Organization `object`: GitHub account for managing multiple users, teams, and repositories
  * avatar_url **required** `string`
  * blog `string`: Display blog url for the organization
  * company `string`: Display company name for the organization
  * created_at **required** `string`
  * description **required** `string`
  * email `string`: Display email for the organization
  * events_url **required** `string`
  * followers **required** `integer`
  * following **required** `integer`
  * has_organization_projects **required** `boolean`: Specifies if organization projects are enabled for this org
  * has_repository_projects **required** `boolean`: Specifies if repository projects are enabled for repositories that belong to this org
  * hooks_url **required** `string`
  * html_url **required** `string`
  * id **required** `integer`
  * is_verified `boolean`
  * issues_url **required** `string`
  * location `string`: Display location for the organization
  * login **required** `string`: Unique login name of the organization
  * members_url **required** `string`
  * name `string`: Display name for the organization
  * node_id **required** `string`
  * plan `object`
    * filled_seats `integer`
    * name `string`
    * private_repos `integer`
    * seats `integer`
    * space `integer`
  * public_gists **required** `integer`
  * public_members_url **required** `string`
  * public_repos **required** `integer`
  * repos_url **required** `string`
  * type **required** `string`
  * updated_at **required** `string`
  * url **required** `string`: URL for the organization

### organization-actions-secret
* Actions Secret for an Organization `object`: Secrets for GitHub Actions for an organization.
  * created_at **required** `string`
  * name **required** `string`: The name of the secret.
  * selected_repositories_url `string`
  * updated_at **required** `string`
  * visibility **required** `string` (values: all, private, selected): Visibility of a secret

### organization-full
* Organization Full `object`: Organization Full
  * avatar_url **required** `string`
  * billing_email `string`
  * blog `string`
  * collaborators `integer`
  * company `string`
  * created_at **required** `string`
  * default_repository_permission `string`
  * description **required** `string`
  * disk_usage `integer`
  * email `string`
  * events_url **required** `string`
  * followers **required** `integer`
  * following **required** `integer`
  * has_organization_projects **required** `boolean`
  * has_repository_projects **required** `boolean`
  * hooks_url **required** `string`
  * html_url **required** `string`
  * id **required** `integer`
  * is_verified `boolean`
  * issues_url **required** `string`
  * location `string`
  * login **required** `string`
  * members_allowed_repository_creation_type `string`
  * members_can_create_internal_repositories `boolean`
  * members_can_create_private_repositories `boolean`
  * members_can_create_public_repositories `boolean`
  * members_can_create_repositories `boolean`
  * members_url **required** `string`
  * name `string`
  * node_id **required** `string`
  * owned_private_repos `integer`
  * plan `object`
    * filled_seats `integer`
    * name **required** `string`
    * private_repos **required** `integer`
    * seats `integer`
    * space **required** `integer`
  * private_gists `integer`
  * public_gists **required** `integer`
  * public_members_url **required** `string`
  * public_repos **required** `integer`
  * repos_url **required** `string`
  * total_private_repos `integer`
  * twitter_username `string`
  * two_factor_requirement_enabled `boolean`
  * type **required** `string`
  * updated_at **required** `string`
  * url **required** `string`

### organization-invitation
* Organization Invitation `object`: Organization Invitation
  * created_at `string`
  * email `string`
  * id `integer`
  * invitation_team_url `string`
  * invitation_teams_url `string`
  * inviter [simple-user](#simple-user)
  * login `string`
  * node_id `string`
  * role `string`
  * team_count `integer`

### organization-simple
* Organization Simple `object`: Organization Simple
  * avatar_url **required** `string`
  * description **required** `string`
  * events_url **required** `string`
  * hooks_url **required** `string`
  * id **required** `integer`
  * issues_url **required** `string`
  * login **required** `string`
  * members_url **required** `string`
  * node_id **required** `string`
  * public_members_url **required** `string`
  * repos_url **required** `string`
  * url **required** `string`

### packages-billing-usage
* packages-billing-usage `object`
  * included_gigabytes_bandwidth `integer`: Free storage space (GB) for GitHub Packages.
  * total_gigabytes_bandwidth_used `integer`: Sum of the free and paid storage space (GB) for GitHuub Packages.
  * total_paid_gigabytes_bandwidth_used `integer`: Total paid storage space (GB) for GitHuub Packages.

### page
* GitHub Pages `object`: The configuration for GitHub Pages for a repository.
  * cname **required** `string`: The Pages site's custom domain
  * custom_404 **required** `boolean`: Whether the Page has a custom 404 page.
  * html_url `string`: The web address the Page can be accessed from.
  * source [pages-source-hash](#pages-source-hash)
  * status **required** `string` (values: built, building, errored): The status of the most recent build of the Page.
  * url **required** `string`: The API address for accessing this Page resource.

### page-build
* Page Build `object`: Page Build
  * commit **required** `string`
  * created_at **required** `string`
  * duration **required** `integer`
  * error **required** `object`
    * message **required** `string`
  * pusher **required**
    * avatar_url **required** `string`
    * events_url **required** `string`
    * followers_url **required** `string`
    * following_url **required** `string`
    * gists_url **required** `string`
    * gravatar_id **required** `string`
    * html_url **required** `string`
    * id **required** `integer`
    * login **required** `string`
    * node_id **required** `string`
    * organizations_url **required** `string`
    * received_events_url **required** `string`
    * repos_url **required** `string`
    * site_admin **required** `boolean`
    * starred_at `string`
    * starred_url **required** `string`
    * subscriptions_url **required** `string`
    * type **required** `string`
    * url **required** `string`
  * status **required** `string`
  * updated_at **required** `string`
  * url **required** `string`

### page-build-status
* Page Build Status `object`: Page Build Status
  * status **required** `string`
  * url **required** `string`

### pages-source-hash
* Pages Source Hash `object`
  * branch **required** `string`
  * path **required** `string`

### participation-stats
* Participation Stats `object`
  * all `array`
    * items `integer`
  * owner `array`
    * items `integer`

### porter-author
* Porter Author `object`: Porter Author
  * email **required** `string`
  * id **required** `integer`
  * import_url **required** `string`
  * name **required** `string`
  * remote_id **required** `string`
  * remote_name **required** `string`
  * url **required** `string`

### porter-large-file
* Porter Large File `object`: Porter Large File
  * oid **required** `string`
  * path **required** `string`
  * ref_name **required** `string`
  * size **required** `integer`

### private-user
* Private User `object`: Private User
  * avatar_url **required** `string`
  * bio **required** `string`
  * blog **required** `string`
  * business_plus `boolean`
  * collaborators **required** `integer`
  * company **required** `string`
  * created_at **required** `string`
  * disk_usage **required** `integer`
  * email **required** `string`
  * events_url **required** `string`
  * followers **required** `integer`
  * followers_url **required** `string`
  * following **required** `integer`
  * following_url **required** `string`
  * gists_url **required** `string`
  * gravatar_id **required** `string`
  * hireable **required** `boolean`
  * html_url **required** `string`
  * id **required** `integer`
  * ldap_dn `string`
  * location **required** `string`
  * login **required** `string`
  * name **required** `string`
  * node_id **required** `string`
  * organizations_url **required** `string`
  * owned_private_repos **required** `integer`
  * plan `object`
    * collaborators **required** `integer`
    * name **required** `string`
    * private_repos **required** `integer`
    * space **required** `integer`
  * private_gists **required** `integer`
  * public_gists **required** `integer`
  * public_repos **required** `integer`
  * received_events_url **required** `string`
  * repos_url **required** `string`
  * site_admin **required** `boolean`
  * starred_url **required** `string`
  * subscriptions_url **required** `string`
  * suspended_at `string`
  * total_private_repos **required** `integer`
  * twitter_username `string`
  * two_factor_authentication **required** `boolean`
  * type **required** `string`
  * updated_at **required** `string`
  * url **required** `string`

### project
* Project `object`: Projects are a way to organize columns and cards of work.
  * body **required** `string`: Body of the project
  * cards_url `string`
  * columns_url **required** `string`
  * created_at **required** `string`
  * creator **required**
    * avatar_url **required** `string`
    * events_url **required** `string`
    * followers_url **required** `string`
    * following_url **required** `string`
    * gists_url **required** `string`
    * gravatar_id **required** `string`
    * html_url **required** `string`
    * id **required** `integer`
    * login **required** `string`
    * node_id **required** `string`
    * organizations_url **required** `string`
    * received_events_url **required** `string`
    * repos_url **required** `string`
    * site_admin **required** `boolean`
    * starred_at `string`
    * starred_url **required** `string`
    * subscriptions_url **required** `string`
    * type **required** `string`
    * url **required** `string`
  * html_url **required** `string`
  * id **required** `integer`
  * name **required** `string`: Name of the project
  * node_id **required** `string`
  * number **required** `integer`
  * organization_permission `string` (values: read, write, admin, none): The baseline permission that all organization members have on this project
  * owner_url **required** `string`
  * permissions `object`
    * admin **required** `boolean`
    * read **required** `boolean`
    * write **required** `boolean`
  * private `boolean`: Whether or not this project can be seen by everyone.
  * state **required** `string`: State of the project; either 'open' or 'closed'
  * updated_at **required** `string`
  * url **required** `string`

### project-card
* Project Card `object`: Project cards represent a scope of work.
  * archived `boolean`: Whether or not the card is archived
  * column_url **required** `string`
  * content_url `string`
  * created_at **required** `string`
  * creator **required**
    * avatar_url **required** `string`
    * events_url **required** `string`
    * followers_url **required** `string`
    * following_url **required** `string`
    * gists_url **required** `string`
    * gravatar_id **required** `string`
    * html_url **required** `string`
    * id **required** `integer`
    * login **required** `string`
    * node_id **required** `string`
    * organizations_url **required** `string`
    * received_events_url **required** `string`
    * repos_url **required** `string`
    * site_admin **required** `boolean`
    * starred_at `string`
    * starred_url **required** `string`
    * subscriptions_url **required** `string`
    * type **required** `string`
    * url **required** `string`
  * id **required** `integer`: The project card's ID
  * node_id **required** `string`
  * note **required** `string`
  * project_url **required** `string`
  * updated_at **required** `string`
  * url **required** `string`

### project-column
* Project Column `object`: Project columns contain cards of work.
  * cards_url **required** `string`
  * created_at **required** `string`
  * id **required** `integer`: The unique identifier of the project column
  * name **required** `string`: Name of the project column
  * node_id **required** `string`
  * project_url **required** `string`
  * updated_at **required** `string`
  * url **required** `string`

### protected-branch
* Protected Branch `object`: Branch protections protect branches
  * allow_deletions `object`
    * enabled **required** `boolean`
  * allow_force_pushes `object`
    * enabled **required** `boolean`
  * enforce_admins `object`
    * enabled **required** `boolean`
    * url **required** `string`
  * required_linear_history `object`
    * enabled **required** `boolean`
  * required_pull_request_reviews `object`
    * dismiss_stale_reviews `boolean`
    * dismissal_restrictions `object`
      * teams **required** `array`
        * items [team](#team)
      * teams_url **required** `string`
      * url **required** `string`
      * users **required** `array`
        * items [simple-user](#simple-user)
      * users_url **required** `string`
    * require_code_owner_reviews `boolean`
    * required_approving_review_count `integer`
    * url **required** `string`
  * required_signatures `object`
    * enabled **required** `boolean`
    * url **required** `string`
  * required_status_checks [status-check-policy](#status-check-policy)
  * restrictions [branch-restriction-policy](#branch-restriction-policy)
  * url **required** `string`

### protected-branch-admin-enforced
* Protected Branch Admin Enforced `object`: Protected Branch Admin Enforced
  * enabled **required** `boolean`
  * url **required** `string`

### protected-branch-pull-request-review
* Protected Branch Pull Request Review `object`: Protected Branch Pull Request Review
  * dismiss_stale_reviews **required** `boolean`
  * dismissal_restrictions `object`
    * teams `array`: The list of teams with review dismissal access.
      * items [team](#team)
    * teams_url `string`
    * url `string`
    * users `array`: The list of users with review dismissal access.
      * items [simple-user](#simple-user)
    * users_url `string`
  * require_code_owner_reviews **required** `boolean`
  * required_approving_review_count `integer`
  * url `string`

### public-user
* Public User `object`: Public User
  * avatar_url **required** `string`
  * bio **required** `string`
  * blog **required** `string`
  * collaborators `integer`
  * company **required** `string`
  * created_at **required** `string`
  * disk_usage `integer`
  * email **required** `string`
  * events_url **required** `string`
  * followers **required** `integer`
  * followers_url **required** `string`
  * following **required** `integer`
  * following_url **required** `string`
  * gists_url **required** `string`
  * gravatar_id **required** `string`
  * hireable **required** `boolean`
  * html_url **required** `string`
  * id **required** `integer`
  * location **required** `string`
  * login **required** `string`
  * name **required** `string`
  * node_id **required** `string`
  * organizations_url **required** `string`
  * owned_private_repos `integer`
  * plan `object`
    * collaborators **required** `integer`
    * name **required** `string`
    * private_repos **required** `integer`
    * space **required** `integer`
  * private_gists `integer`
  * public_gists **required** `integer`
  * public_repos **required** `integer`
  * received_events_url **required** `string`
  * repos_url **required** `string`
  * site_admin **required** `boolean`
  * starred_url **required** `string`
  * subscriptions_url **required** `string`
  * suspended_at `string`
  * total_private_repos `integer`
  * twitter_username `string`
  * type **required** `string`
  * updated_at **required** `string`
  * url **required** `string`

### pull-request
* Pull Request `object`: Pull requests let you tell others about changes you've pushed to a repository on GitHub. Once a pull request is sent, interested parties can review the set of changes, discuss potential modifications, and even push follow-up commits if necessary.
  * _links **required** `object`
    * comments **required** [link](#link)
    * commits **required** [link](#link)
    * html **required** [link](#link)
    * issue **required** [link](#link)
    * review_comment **required** [link](#link)
    * review_comments **required** [link](#link)
    * self **required** [link](#link)
    * statuses **required** [link](#link)
  * active_lock_reason `string`
  * additions **required** `integer`
  * assignee **required**
    * avatar_url **required** `string`
    * events_url **required** `string`
    * followers_url **required** `string`
    * following_url **required** `string`
    * gists_url **required** `string`
    * gravatar_id **required** `string`
    * html_url **required** `string`
    * id **required** `integer`
    * login **required** `string`
    * node_id **required** `string`
    * organizations_url **required** `string`
    * received_events_url **required** `string`
    * repos_url **required** `string`
    * site_admin **required** `boolean`
    * starred_at `string`
    * starred_url **required** `string`
    * subscriptions_url **required** `string`
    * type **required** `string`
    * url **required** `string`
  * assignees `array`
    * items [simple-user](#simple-user)
  * author_association **required** `string`
  * base **required** `object`
    * label **required** `string`
    * ref **required** `string`
    * repo **required** `object`
      * allow_merge_commit `boolean`
      * allow_rebase_merge `boolean`
      * allow_squash_merge `boolean`
      * archive_url **required** `string`
      * archived **required** `boolean`
      * assignees_url **required** `string`
      * blobs_url **required** `string`
      * branches_url **required** `string`
      * clone_url **required** `string`
      * collaborators_url **required** `string`
      * comments_url **required** `string`
      * commits_url **required** `string`
      * compare_url **required** `string`
      * contents_url **required** `string`
      * contributors_url **required** `string`
      * created_at **required** `string`
      * default_branch **required** `string`
      * deployments_url **required** `string`
      * description **required** `string`
      * disabled **required** `boolean`
      * downloads_url **required** `string`
      * events_url **required** `string`
      * fork **required** `boolean`
      * forks **required** `integer`
      * forks_count **required** `integer`
      * forks_url **required** `string`
      * full_name **required** `string`
      * git_commits_url **required** `string`
      * git_refs_url **required** `string`
      * git_tags_url **required** `string`
      * git_url **required** `string`
      * has_downloads **required** `boolean`
      * has_issues **required** `boolean`
      * has_pages **required** `boolean`
      * has_projects **required** `boolean`
      * has_wiki **required** `boolean`
      * homepage **required** `string`
      * hooks_url **required** `string`
      * html_url **required** `string`
      * id **required** `integer`
      * issue_comment_url **required** `string`
      * issue_events_url **required** `string`
      * issues_url **required** `string`
      * keys_url **required** `string`
      * labels_url **required** `string`
      * language **required** `string`
      * languages_url **required** `string`
      * license **required**
        * html_url `string`
        * key **required** `string`
        * name **required** `string`
        * node_id **required** `string`
        * spdx_id **required** `string`
        * url **required** `string`
      * master_branch `string`
      * merges_url **required** `string`
      * milestones_url **required** `string`
      * mirror_url **required** `string`
      * name **required** `string`
      * node_id **required** `string`
      * notifications_url **required** `string`
      * open_issues **required** `integer`
      * open_issues_count **required** `integer`
      * owner **required** `object`
        * avatar_url **required** `string`
        * events_url **required** `string`
        * followers_url **required** `string`
        * following_url **required** `string`
        * gists_url **required** `string`
        * gravatar_id **required** `string`
        * html_url **required** `string`
        * id **required** `integer`
        * login **required** `string`
        * node_id **required** `string`
        * organizations_url **required** `string`
        * received_events_url **required** `string`
        * repos_url **required** `string`
        * site_admin **required** `boolean`
        * starred_url **required** `string`
        * subscriptions_url **required** `string`
        * type **required** `string`
        * url **required** `string`
      * permissions `object`
        * admin **required** `boolean`
        * pull **required** `boolean`
        * push **required** `boolean`
      * private **required** `boolean`
      * pulls_url **required** `string`
      * pushed_at **required** `string`
      * releases_url **required** `string`
      * size **required** `integer`
      * ssh_url **required** `string`
      * stargazers_count **required** `integer`
      * stargazers_url **required** `string`
      * statuses_url **required** `string`
      * subscribers_url **required** `string`
      * subscription_url **required** `string`
      * svn_url **required** `string`
      * tags_url **required** `string`
      * teams_url **required** `string`
      * temp_clone_token `string`
      * topics `array`
        * items `string`
      * trees_url **required** `string`
      * updated_at **required** `string`
      * url **required** `string`
      * watchers **required** `integer`
      * watchers_count **required** `integer`
    * sha **required** `string`
    * user **required** `object`
      * avatar_url **required** `string`
      * events_url **required** `string`
      * followers_url **required** `string`
      * following_url **required** `string`
      * gists_url **required** `string`
      * gravatar_id **required** `string`
      * html_url **required** `string`
      * id **required** `integer`
      * login **required** `string`
      * node_id **required** `string`
      * organizations_url **required** `string`
      * received_events_url **required** `string`
      * repos_url **required** `string`
      * site_admin **required** `boolean`
      * starred_url **required** `string`
      * subscriptions_url **required** `string`
      * type **required** `string`
      * url **required** `string`
  * body **required** `string`
  * changed_files **required** `integer`
  * closed_at **required** `string`
  * comments **required** `integer`
  * comments_url **required** `string`
  * commits **required** `integer`
  * commits_url **required** `string`
  * created_at **required** `string`
  * deletions **required** `integer`
  * diff_url **required** `string`
  * draft `boolean`: Indicates whether or not the pull request is a draft.
  * head **required** `object`
    * label **required** `string`
    * ref **required** `string`
    * repo **required** `object`
      * allow_merge_commit `boolean`
      * allow_rebase_merge `boolean`
      * allow_squash_merge `boolean`
      * archive_url **required** `string`
      * archived **required** `boolean`
      * assignees_url **required** `string`
      * blobs_url **required** `string`
      * branches_url **required** `string`
      * clone_url **required** `string`
      * collaborators_url **required** `string`
      * comments_url **required** `string`
      * commits_url **required** `string`
      * compare_url **required** `string`
      * contents_url **required** `string`
      * contributors_url **required** `string`
      * created_at **required** `string`
      * default_branch **required** `string`
      * deployments_url **required** `string`
      * description **required** `string`
      * disabled **required** `boolean`
      * downloads_url **required** `string`
      * events_url **required** `string`
      * fork **required** `boolean`
      * forks **required** `integer`
      * forks_count **required** `integer`
      * forks_url **required** `string`
      * full_name **required** `string`
      * git_commits_url **required** `string`
      * git_refs_url **required** `string`
      * git_tags_url **required** `string`
      * git_url **required** `string`
      * has_downloads **required** `boolean`
      * has_issues **required** `boolean`
      * has_pages **required** `boolean`
      * has_projects **required** `boolean`
      * has_wiki **required** `boolean`
      * homepage **required** `string`
      * hooks_url **required** `string`
      * html_url **required** `string`
      * id **required** `integer`
      * issue_comment_url **required** `string`
      * issue_events_url **required** `string`
      * issues_url **required** `string`
      * keys_url **required** `string`
      * labels_url **required** `string`
      * language **required** `string`
      * languages_url **required** `string`
      * license **required** `object`
        * key **required** `string`
        * name **required** `string`
        * node_id **required** `string`
        * spdx_id **required** `string`
        * url **required** `string`
      * master_branch `string`
      * merges_url **required** `string`
      * milestones_url **required** `string`
      * mirror_url **required** `string`
      * name **required** `string`
      * node_id **required** `string`
      * notifications_url **required** `string`
      * open_issues **required** `integer`
      * open_issues_count **required** `integer`
      * owner **required** `object`
        * avatar_url **required** `string`
        * events_url **required** `string`
        * followers_url **required** `string`
        * following_url **required** `string`
        * gists_url **required** `string`
        * gravatar_id **required** `string`
        * html_url **required** `string`
        * id **required** `integer`
        * login **required** `string`
        * node_id **required** `string`
        * organizations_url **required** `string`
        * received_events_url **required** `string`
        * repos_url **required** `string`
        * site_admin **required** `boolean`
        * starred_url **required** `string`
        * subscriptions_url **required** `string`
        * type **required** `string`
        * url **required** `string`
      * permissions `object`
        * admin **required** `boolean`
        * pull **required** `boolean`
        * push **required** `boolean`
      * private **required** `boolean`
      * pulls_url **required** `string`
      * pushed_at **required** `string`
      * releases_url **required** `string`
      * size **required** `integer`
      * ssh_url **required** `string`
      * stargazers_count **required** `integer`
      * stargazers_url **required** `string`
      * statuses_url **required** `string`
      * subscribers_url **required** `string`
      * subscription_url **required** `string`
      * svn_url **required** `string`
      * tags_url **required** `string`
      * teams_url **required** `string`
      * temp_clone_token `string`
      * topics `array`
        * items `string`
      * trees_url **required** `string`
      * updated_at **required** `string`
      * url **required** `string`
      * watchers **required** `integer`
      * watchers_count **required** `integer`
    * sha **required** `string`
    * user **required** `object`
      * avatar_url **required** `string`
      * events_url **required** `string`
      * followers_url **required** `string`
      * following_url **required** `string`
      * gists_url **required** `string`
      * gravatar_id **required** `string`
      * html_url **required** `string`
      * id **required** `integer`
      * login **required** `string`
      * node_id **required** `string`
      * organizations_url **required** `string`
      * received_events_url **required** `string`
      * repos_url **required** `string`
      * site_admin **required** `boolean`
      * starred_url **required** `string`
      * subscriptions_url **required** `string`
      * type **required** `string`
      * url **required** `string`
  * html_url **required** `string`
  * id **required** `integer`
  * issue_url **required** `string`
  * labels **required** `array`
    * items `object`
      * color `string`
      * default `boolean`
      * description `string`
      * id `integer`
      * name `string`
      * node_id `string`
      * url `string`
  * locked **required** `boolean`
  * maintainer_can_modify **required** `boolean`: Indicates whether maintainers can modify the pull request.
  * merge_commit_sha **required** `string`
  * mergeable **required** `boolean`
  * mergeable_state **required** `string`
  * merged **required** `boolean`
  * merged_at **required** `string`
  * merged_by **required**
    * avatar_url **required** `string`
    * events_url **required** `string`
    * followers_url **required** `string`
    * following_url **required** `string`
    * gists_url **required** `string`
    * gravatar_id **required** `string`
    * html_url **required** `string`
    * id **required** `integer`
    * login **required** `string`
    * node_id **required** `string`
    * organizations_url **required** `string`
    * received_events_url **required** `string`
    * repos_url **required** `string`
    * site_admin **required** `boolean`
    * starred_at `string`
    * starred_url **required** `string`
    * subscriptions_url **required** `string`
    * type **required** `string`
    * url **required** `string`
  * milestone **required**
    * closed_at **required** `string`
    * closed_issues **required** `integer`
    * created_at **required** `string`
    * creator **required**
      * avatar_url **required** `string`
      * events_url **required** `string`
      * followers_url **required** `string`
      * following_url **required** `string`
      * gists_url **required** `string`
      * gravatar_id **required** `string`
      * html_url **required** `string`
      * id **required** `integer`
      * login **required** `string`
      * node_id **required** `string`
      * organizations_url **required** `string`
      * received_events_url **required** `string`
      * repos_url **required** `string`
      * site_admin **required** `boolean`
      * starred_at `string`
      * starred_url **required** `string`
      * subscriptions_url **required** `string`
      * type **required** `string`
      * url **required** `string`
    * description **required** `string`
    * due_on **required** `string`
    * html_url **required** `string`
    * id **required** `integer`
    * labels_url **required** `string`
    * node_id **required** `string`
    * number **required** `integer`: The number of the milestone.
    * open_issues **required** `integer`
    * state **required** `string` (values: open, closed): The state of the milestone.
    * title **required** `string`: The title of the milestone.
    * updated_at **required** `string`
    * url **required** `string`
  * node_id **required** `string`
  * number **required** `integer`: Number uniquely identifying the pull request within its repository.
  * patch_url **required** `string`
  * rebaseable `boolean`
  * requested_reviewers `array`
    * items [simple-user](#simple-user)
  * requested_teams `array`
    * items [team-simple](#team-simple)
  * review_comment_url **required** `string`
  * review_comments **required** `integer`
  * review_comments_url **required** `string`
  * state **required** `string` (values: open, closed): State of this Pull Request. Either `open` or `closed`.
  * statuses_url **required** `string`
  * title **required** `string`: The title of the pull request.
  * updated_at **required** `string`
  * url **required** `string`
  * user **required**
    * avatar_url **required** `string`
    * events_url **required** `string`
    * followers_url **required** `string`
    * following_url **required** `string`
    * gists_url **required** `string`
    * gravatar_id **required** `string`
    * html_url **required** `string`
    * id **required** `integer`
    * login **required** `string`
    * node_id **required** `string`
    * organizations_url **required** `string`
    * received_events_url **required** `string`
    * repos_url **required** `string`
    * site_admin **required** `boolean`
    * starred_at `string`
    * starred_url **required** `string`
    * subscriptions_url **required** `string`
    * type **required** `string`
    * url **required** `string`

### pull-request-merge-result
* Pull Request Merge Result `object`: Pull Request Merge Result
  * merged **required** `boolean`
  * message **required** `string`
  * sha **required** `string`

### pull-request-minimal
* Pull Request Minimal `object`
  * base **required** `object`
    * ref **required** `string`
    * repo **required** `object`
      * id **required** `integer`
      * name **required** `string`
      * url **required** `string`
    * sha **required** `string`
  * head **required** `object`
    * ref **required** `string`
    * repo **required** `object`
      * id **required** `integer`
      * name **required** `string`
      * url **required** `string`
    * sha **required** `string`
  * id **required** `integer`
  * number **required** `integer`
  * url **required** `string`

### pull-request-review
* Pull Request Review `object`: Pull Request Reviews are reviews on pull requests.
  * _links **required** `object`
    * html **required** `object`
      * href **required** `string`
    * pull_request **required** `object`
      * href **required** `string`
  * author_association **required** `string`
  * body **required** `string`: The text of the review.
  * body_html `string`
  * body_text `string`
  * commit_id **required** `string`: A commit SHA for the review.
  * html_url **required** `string`
  * id **required** `integer`: Unique identifier of the review
  * node_id **required** `string`
  * pull_request_url **required** `string`
  * state **required** `string`
  * submitted_at `string`
  * user **required**
    * avatar_url **required** `string`
    * events_url **required** `string`
    * followers_url **required** `string`
    * following_url **required** `string`
    * gists_url **required** `string`
    * gravatar_id **required** `string`
    * html_url **required** `string`
    * id **required** `integer`
    * login **required** `string`
    * node_id **required** `string`
    * organizations_url **required** `string`
    * received_events_url **required** `string`
    * repos_url **required** `string`
    * site_admin **required** `boolean`
    * starred_at `string`
    * starred_url **required** `string`
    * subscriptions_url **required** `string`
    * type **required** `string`
    * url **required** `string`

### pull-request-review-comment
* Pull Request Review Comment `object`: Pull Request Review Comments are comments on a portion of the Pull Request's diff.
  * _links **required** `object`
    * html **required** `object`
      * href **required** `string`
    * pull_request **required** `object`
      * href **required** `string`
    * self **required** `object`
      * href **required** `string`
  * author_association **required** `string`: How the author of the comment is associated with the pull request.
  * body **required** `string`: The text of the comment.
  * body_html `string`
  * body_text `string`
  * commit_id **required** `string`: The SHA of the commit to which the comment applies.
  * created_at **required** `string`
  * diff_hunk **required** `string`: The diff of the line that the comment refers to.
  * html_url **required** `string`: HTML URL for the pull request review comment.
  * id **required** `integer`: The ID of the pull request review comment.
  * in_reply_to_id `integer`: The comment ID to reply to.
  * line `integer`: The line of the blob to which the comment applies. The last line of the range for a multi-line comment
  * node_id **required** `string`: The node ID of the pull request review comment.
  * original_commit_id **required** `string`: The SHA of the original commit to which the comment applies.
  * original_line `integer`: The line of the blob to which the comment applies. The last line of the range for a multi-line comment
  * original_position **required** `integer`: The index of the original line in the diff to which the comment applies.
  * original_start_line `integer`: The first line of the range for a multi-line comment.
  * path **required** `string`: The relative path of the file to which the comment applies.
  * position **required** `integer`: The line index in the diff to which the comment applies.
  * pull_request_review_id **required** `integer`: The ID of the pull request review to which the comment belongs.
  * pull_request_url **required** `string`: URL for the pull request that the review comment belongs to.
  * reactions [reaction-rollup](#reaction-rollup)
  * side `string` (values: LEFT, RIGHT): The side of the diff to which the comment applies. The side of the last line of the range for a multi-line comment
  * start_line `integer`: The first line of the range for a multi-line comment.
  * start_side `string` (values: LEFT, RIGHT): The side of the first line of the range for a multi-line comment.
  * updated_at **required** `string`
  * url **required** `string`: URL for the pull request review comment
  * user **required** [simple-user](#simple-user)

### pull-request-review-request
* Pull Request Review Request `object`: Pull Request Review Request
  * teams `array`
    * items `object`
      * description `string`
      * html_url `string`
      * id `integer`
      * members_url `string`
      * name `string`
      * node_id `string`
      * parent `string`
      * permission `string`
      * privacy `string`
      * repositories_url `string`
      * slug `string`
      * url `string`
  * users `array`
    * items `object`
      * avatar_url `string`
      * events_url `string`
      * followers_url `string`
      * following_url `string`
      * gists_url `string`
      * gravatar_id `string`
      * html_url `string`
      * id `integer`
      * login `string`
      * node_id `string`
      * organizations_url `string`
      * received_events_url `string`
      * repos_url `string`
      * site_admin `boolean`
      * starred_url `string`
      * subscriptions_url `string`
      * type `string`
      * url `string`

### pull-request-simple
* Pull Request Simple `object`: Pull Request Simple
  * _links **required** `object`
    * comments **required** [link](#link)
    * commits **required** [link](#link)
    * html **required** [link](#link)
    * issue **required** [link](#link)
    * review_comment **required** [link](#link)
    * review_comments **required** [link](#link)
    * self **required** [link](#link)
    * statuses **required** [link](#link)
  * active_lock_reason `string`
  * assignee **required**
    * avatar_url **required** `string`
    * events_url **required** `string`
    * followers_url **required** `string`
    * following_url **required** `string`
    * gists_url **required** `string`
    * gravatar_id **required** `string`
    * html_url **required** `string`
    * id **required** `integer`
    * login **required** `string`
    * node_id **required** `string`
    * organizations_url **required** `string`
    * received_events_url **required** `string`
    * repos_url **required** `string`
    * site_admin **required** `boolean`
    * starred_at `string`
    * starred_url **required** `string`
    * subscriptions_url **required** `string`
    * type **required** `string`
    * url **required** `string`
  * assignees `array`
    * items [simple-user](#simple-user)
  * author_association **required** `string`
  * base **required** `object`
    * label **required** `string`
    * ref **required** `string`
    * repo **required** [repository](#repository)
    * sha **required** `string`
    * user **required**
      * avatar_url **required** `string`
      * events_url **required** `string`
      * followers_url **required** `string`
      * following_url **required** `string`
      * gists_url **required** `string`
      * gravatar_id **required** `string`
      * html_url **required** `string`
      * id **required** `integer`
      * login **required** `string`
      * node_id **required** `string`
      * organizations_url **required** `string`
      * received_events_url **required** `string`
      * repos_url **required** `string`
      * site_admin **required** `boolean`
      * starred_at `string`
      * starred_url **required** `string`
      * subscriptions_url **required** `string`
      * type **required** `string`
      * url **required** `string`
  * body **required** `string`
  * closed_at **required** `string`
  * comments_url **required** `string`
  * commits_url **required** `string`
  * created_at **required** `string`
  * diff_url **required** `string`
  * draft `boolean`: Indicates whether or not the pull request is a draft.
  * head **required** `object`
    * label **required** `string`
    * ref **required** `string`
    * repo **required** [repository](#repository)
    * sha **required** `string`
    * user **required**
      * avatar_url **required** `string`
      * events_url **required** `string`
      * followers_url **required** `string`
      * following_url **required** `string`
      * gists_url **required** `string`
      * gravatar_id **required** `string`
      * html_url **required** `string`
      * id **required** `integer`
      * login **required** `string`
      * node_id **required** `string`
      * organizations_url **required** `string`
      * received_events_url **required** `string`
      * repos_url **required** `string`
      * site_admin **required** `boolean`
      * starred_at `string`
      * starred_url **required** `string`
      * subscriptions_url **required** `string`
      * type **required** `string`
      * url **required** `string`
  * html_url **required** `string`
  * id **required** `integer`
  * issue_url **required** `string`
  * labels **required** `array`
    * items `object`
      * color `string`
      * default `boolean`
      * description `string`
      * id `integer`
      * name `string`
      * node_id `string`
      * url `string`
  * locked **required** `boolean`
  * merge_commit_sha **required** `string`
  * merged_at **required** `string`
  * milestone **required**
    * closed_at **required** `string`
    * closed_issues **required** `integer`
    * created_at **required** `string`
    * creator **required**
      * avatar_url **required** `string`
      * events_url **required** `string`
      * followers_url **required** `string`
      * following_url **required** `string`
      * gists_url **required** `string`
      * gravatar_id **required** `string`
      * html_url **required** `string`
      * id **required** `integer`
      * login **required** `string`
      * node_id **required** `string`
      * organizations_url **required** `string`
      * received_events_url **required** `string`
      * repos_url **required** `string`
      * site_admin **required** `boolean`
      * starred_at `string`
      * starred_url **required** `string`
      * subscriptions_url **required** `string`
      * type **required** `string`
      * url **required** `string`
    * description **required** `string`
    * due_on **required** `string`
    * html_url **required** `string`
    * id **required** `integer`
    * labels_url **required** `string`
    * node_id **required** `string`
    * number **required** `integer`: The number of the milestone.
    * open_issues **required** `integer`
    * state **required** `string` (values: open, closed): The state of the milestone.
    * title **required** `string`: The title of the milestone.
    * updated_at **required** `string`
    * url **required** `string`
  * node_id **required** `string`
  * number **required** `integer`
  * patch_url **required** `string`
  * requested_reviewers `array`
    * items [simple-user](#simple-user)
  * requested_teams `array`
    * items [team-simple](#team-simple)
  * review_comment_url **required** `string`
  * review_comments_url **required** `string`
  * state **required** `string`
  * statuses_url **required** `string`
  * title **required** `string`
  * updated_at **required** `string`
  * url **required** `string`
  * user **required**
    * avatar_url **required** `string`
    * events_url **required** `string`
    * followers_url **required** `string`
    * following_url **required** `string`
    * gists_url **required** `string`
    * gravatar_id **required** `string`
    * html_url **required** `string`
    * id **required** `integer`
    * login **required** `string`
    * node_id **required** `string`
    * organizations_url **required** `string`
    * received_events_url **required** `string`
    * repos_url **required** `string`
    * site_admin **required** `boolean`
    * starred_at `string`
    * starred_url **required** `string`
    * subscriptions_url **required** `string`
    * type **required** `string`
    * url **required** `string`

### rate-limit
* Rate Limit `object`
  * limit **required** `integer`
  * remaining **required** `integer`
  * reset **required** `integer`

### rate-limit-overview
* Rate Limit Overview `object`: Rate Limit Overview
  * rate **required** [rate-limit](#rate-limit)
  * resources **required** `object`
    * core **required** [rate-limit](#rate-limit)
    * graphql [rate-limit](#rate-limit)
    * integration_manifest [rate-limit](#rate-limit)
    * search **required** [rate-limit](#rate-limit)
    * source_import [rate-limit](#rate-limit)

### reaction
* Reaction `object`: Reactions to conversations provide a way to help people express their feelings more simply and effectively.
  * content **required** `string` (values: +1, -1, laugh, confused, heart, hooray, rocket, eyes): The reaction to use
  * created_at **required** `string`
  * id **required** `integer`
  * node_id **required** `string`
  * user **required**
    * avatar_url **required** `string`
    * events_url **required** `string`
    * followers_url **required** `string`
    * following_url **required** `string`
    * gists_url **required** `string`
    * gravatar_id **required** `string`
    * html_url **required** `string`
    * id **required** `integer`
    * login **required** `string`
    * node_id **required** `string`
    * organizations_url **required** `string`
    * received_events_url **required** `string`
    * repos_url **required** `string`
    * site_admin **required** `boolean`
    * starred_at `string`
    * starred_url **required** `string`
    * subscriptions_url **required** `string`
    * type **required** `string`
    * url **required** `string`

### reaction-rollup
* Reaction Rollup `object`
  * +1 **required** `integer`
  * -1 **required** `integer`
  * confused **required** `integer`
  * eyes **required** `integer`
  * heart **required** `integer`
  * hooray **required** `integer`
  * laugh **required** `integer`
  * rocket **required** `integer`
  * total_count **required** `integer`
  * url **required** `string`

### referrer-traffic
* Referrer Traffic `object`: Referrer Traffic
  * count **required** `integer`
  * referrer **required** `string`
  * uniques **required** `integer`

### release
* Release `object`: A release.
  * assets **required** `array`
    * items [release-asset](#release-asset)
  * assets_url **required** `string`
  * author **required** [simple-user](#simple-user)
  * body `string`
  * body_html `string`
  * body_text `string`
  * created_at **required** `string`
  * draft **required** `boolean`: true to create a draft (unpublished) release, false to create a published one.
  * html_url **required** `string`
  * id **required** `integer`
  * name **required** `string`
  * node_id **required** `string`
  * prerelease **required** `boolean`: Whether to identify the release as a prerelease or a full release.
  * published_at **required** `string`
  * tag_name **required** `string`: The name of the tag.
  * tarball_url **required** `string`
  * target_commitish **required** `string`: Specifies the commitish value that determines where the Git tag is created from.
  * upload_url **required** `string`
  * url **required** `string`
  * zipball_url **required** `string`

### release-asset
* Release Asset `object`: Data related to a release.
  * browser_download_url **required** `string`
  * content_type **required** `string`
  * created_at **required** `string`
  * download_count **required** `integer`
  * id **required** `integer`
  * label **required** `string`
  * name **required** `string`: The file name of the asset.
  * node_id **required** `string`
  * size **required** `integer`
  * state **required** `string` (values: uploaded): State of the release asset.
  * updated_at **required** `string`
  * uploader **required**
    * avatar_url **required** `string`
    * events_url **required** `string`
    * followers_url **required** `string`
    * following_url **required** `string`
    * gists_url **required** `string`
    * gravatar_id **required** `string`
    * html_url **required** `string`
    * id **required** `integer`
    * login **required** `string`
    * node_id **required** `string`
    * organizations_url **required** `string`
    * received_events_url **required** `string`
    * repos_url **required** `string`
    * site_admin **required** `boolean`
    * starred_at `string`
    * starred_url **required** `string`
    * subscriptions_url **required** `string`
    * type **required** `string`
    * url **required** `string`
  * url **required** `string`

### repo-search-result-item
* Repo Search Result Item `object`: Repo Search Result Item
  * allow_merge_commit `boolean`
  * allow_rebase_merge `boolean`
  * allow_squash_merge `boolean`
  * archive_url **required** `string`
  * archived **required** `boolean`
  * assignees_url **required** `string`
  * blobs_url **required** `string`
  * branches_url **required** `string`
  * clone_url **required** `string`
  * collaborators_url **required** `string`
  * comments_url **required** `string`
  * commits_url **required** `string`
  * compare_url **required** `string`
  * contents_url **required** `string`
  * contributors_url **required** `string`
  * created_at **required** `string`
  * default_branch **required** `string`
  * delete_branch_on_merge `boolean`
  * deployments_url **required** `string`
  * description **required** `string`
  * disabled **required** `boolean`: Returns whether or not this repository disabled.
  * downloads_url **required** `string`
  * events_url **required** `string`
  * fork **required** `boolean`
  * forks **required** `integer`
  * forks_count **required** `integer`
  * forks_url **required** `string`
  * full_name **required** `string`
  * git_commits_url **required** `string`
  * git_refs_url **required** `string`
  * git_tags_url **required** `string`
  * git_url **required** `string`
  * has_downloads **required** `boolean`
  * has_issues **required** `boolean`
  * has_pages **required** `boolean`
  * has_projects **required** `boolean`
  * has_wiki **required** `boolean`
  * homepage **required** `string`
  * hooks_url **required** `string`
  * html_url **required** `string`
  * id **required** `integer`
  * issue_comment_url **required** `string`
  * issue_events_url **required** `string`
  * issues_url **required** `string`
  * keys_url **required** `string`
  * labels_url **required** `string`
  * language **required** `string`
  * languages_url **required** `string`
  * license **required**
    * html_url `string`
    * key **required** `string`
    * name **required** `string`
    * node_id **required** `string`
    * spdx_id **required** `string`
    * url **required** `string`
  * master_branch `string`
  * merges_url **required** `string`
  * milestones_url **required** `string`
  * mirror_url **required** `string`
  * name **required** `string`
  * node_id **required** `string`
  * notifications_url **required** `string`
  * open_issues **required** `integer`
  * open_issues_count **required** `integer`
  * owner **required**
    * avatar_url **required** `string`
    * events_url **required** `string`
    * followers_url **required** `string`
    * following_url **required** `string`
    * gists_url **required** `string`
    * gravatar_id **required** `string`
    * html_url **required** `string`
    * id **required** `integer`
    * login **required** `string`
    * node_id **required** `string`
    * organizations_url **required** `string`
    * received_events_url **required** `string`
    * repos_url **required** `string`
    * site_admin **required** `boolean`
    * starred_at `string`
    * starred_url **required** `string`
    * subscriptions_url **required** `string`
    * type **required** `string`
    * url **required** `string`
  * permissions `object`
    * admin **required** `boolean`
    * pull **required** `boolean`
    * push **required** `boolean`
  * private **required** `boolean`
  * pulls_url **required** `string`
  * pushed_at **required** `string`
  * releases_url **required** `string`
  * score **required** `integer`
  * size **required** `integer`
  * ssh_url **required** `string`
  * stargazers_count **required** `integer`
  * stargazers_url **required** `string`
  * statuses_url **required** `string`
  * subscribers_url **required** `string`
  * subscription_url **required** `string`
  * svn_url **required** `string`
  * tags_url **required** `string`
  * teams_url **required** `string`
  * temp_clone_token `string`
  * text_matches [search-result-text-matches](#search-result-text-matches)
  * topics `array`
    * items `string`
  * trees_url **required** `string`
  * updated_at **required** `string`
  * url **required** `string`
  * watchers **required** `integer`
  * watchers_count **required** `integer`

### repository
* Repository `object`: A git repository
  * allow_merge_commit `boolean`: Whether to allow merge commits for pull requests.
  * allow_rebase_merge `boolean`: Whether to allow rebase merges for pull requests.
  * allow_squash_merge `boolean`: Whether to allow squash merges for pull requests.
  * archive_url **required** `string`
  * archived **required** `boolean`: Whether the repository is archived.
  * assignees_url **required** `string`
  * blobs_url **required** `string`
  * branches_url **required** `string`
  * clone_url **required** `string`
  * collaborators_url **required** `string`
  * comments_url **required** `string`
  * commits_url **required** `string`
  * compare_url **required** `string`
  * contents_url **required** `string`
  * contributors_url **required** `string`
  * created_at **required** `string`
  * default_branch **required** `string`: The default branch of the repository.
  * delete_branch_on_merge `boolean`: Whether to delete head branches when pull requests are merged
  * deployments_url **required** `string`
  * description **required** `string`
  * disabled **required** `boolean`: Returns whether or not this repository disabled.
  * downloads_url **required** `string`
  * events_url **required** `string`
  * fork **required** `boolean`
  * forks **required** `integer`
  * forks_count **required** `integer`
  * forks_url **required** `string`
  * full_name **required** `string`
  * git_commits_url **required** `string`
  * git_refs_url **required** `string`
  * git_tags_url **required** `string`
  * git_url **required** `string`
  * has_downloads **required** `boolean`: Whether downloads are enabled.
  * has_issues **required** `boolean`: Whether issues are enabled.
  * has_pages **required** `boolean`
  * has_projects **required** `boolean`: Whether projects are enabled.
  * has_wiki **required** `boolean`: Whether the wiki is enabled.
  * homepage **required** `string`
  * hooks_url **required** `string`
  * html_url **required** `string`
  * id **required** `integer`: Unique identifier of the repository
  * is_template `boolean`: Whether this repository acts as a template that can be used to generate new repositories.
  * issue_comment_url **required** `string`
  * issue_events_url **required** `string`
  * issues_url **required** `string`
  * keys_url **required** `string`
  * labels_url **required** `string`
  * language **required** `string`
  * languages_url **required** `string`
  * license **required**
    * html_url `string`
    * key **required** `string`
    * name **required** `string`
    * node_id **required** `string`
    * spdx_id **required** `string`
    * url **required** `string`
  * master_branch `string`
  * merges_url **required** `string`
  * milestones_url **required** `string`
  * mirror_url **required** `string`
  * name **required** `string`: The name of the repository.
  * network_count `integer`
  * node_id **required** `string`
  * notifications_url **required** `string`
  * open_issues **required** `integer`
  * open_issues_count **required** `integer`
  * owner **required**
    * avatar_url **required** `string`
    * events_url **required** `string`
    * followers_url **required** `string`
    * following_url **required** `string`
    * gists_url **required** `string`
    * gravatar_id **required** `string`
    * html_url **required** `string`
    * id **required** `integer`
    * login **required** `string`
    * node_id **required** `string`
    * organizations_url **required** `string`
    * received_events_url **required** `string`
    * repos_url **required** `string`
    * site_admin **required** `boolean`
    * starred_at `string`
    * starred_url **required** `string`
    * subscriptions_url **required** `string`
    * type **required** `string`
    * url **required** `string`
  * permissions `object`
    * admin **required** `boolean`
    * maintain `boolean`
    * pull **required** `boolean`
    * push **required** `boolean`
    * triage `boolean`
  * private **required** `boolean`: Whether the repository is private or public.
  * pulls_url **required** `string`
  * pushed_at **required** `string`
  * releases_url **required** `string`
  * size **required** `integer`
  * ssh_url **required** `string`
  * stargazers_count **required** `integer`
  * stargazers_url **required** `string`
  * starred_at `string`
  * statuses_url **required** `string`
  * subscribers_count `integer`
  * subscribers_url **required** `string`
  * subscription_url **required** `string`
  * svn_url **required** `string`
  * tags_url **required** `string`
  * teams_url **required** `string`
  * temp_clone_token `string`
  * template_repository `object`
    * allow_merge_commit `boolean`
    * allow_rebase_merge `boolean`
    * allow_squash_merge `boolean`
    * archive_url `string`
    * archived `boolean`
    * assignees_url `string`
    * blobs_url `string`
    * branches_url `string`
    * clone_url `string`
    * collaborators_url `string`
    * comments_url `string`
    * commits_url `string`
    * compare_url `string`
    * contents_url `string`
    * contributors_url `string`
    * created_at `string`
    * default_branch `string`
    * delete_branch_on_merge `boolean`
    * deployments_url `string`
    * description `string`
    * disabled `boolean`
    * downloads_url `string`
    * events_url `string`
    * fork `boolean`
    * forks_count `integer`
    * forks_url `string`
    * full_name `string`
    * git_commits_url `string`
    * git_refs_url `string`
    * git_tags_url `string`
    * git_url `string`
    * has_downloads `boolean`
    * has_issues `boolean`
    * has_pages `boolean`
    * has_projects `boolean`
    * has_wiki `boolean`
    * homepage `string`
    * hooks_url `string`
    * html_url `string`
    * id `integer`
    * is_template `boolean`
    * issue_comment_url `string`
    * issue_events_url `string`
    * issues_url `string`
    * keys_url `string`
    * labels_url `string`
    * language `string`
    * languages_url `string`
    * merges_url `string`
    * milestones_url `string`
    * mirror_url `string`
    * name `string`
    * network_count `integer`
    * node_id `string`
    * notifications_url `string`
    * open_issues_count `integer`
    * owner `object`
      * avatar_url `string`
      * events_url `string`
      * followers_url `string`
      * following_url `string`
      * gists_url `string`
      * gravatar_id `string`
      * html_url `string`
      * id `integer`
      * login `string`
      * node_id `string`
      * organizations_url `string`
      * received_events_url `string`
      * repos_url `string`
      * site_admin `boolean`
      * starred_url `string`
      * subscriptions_url `string`
      * type `string`
      * url `string`
    * permissions `object`
      * admin `boolean`
      * pull `boolean`
      * push `boolean`
    * private `boolean`
    * pulls_url `string`
    * pushed_at `string`
    * releases_url `string`
    * size `integer`
    * ssh_url `string`
    * stargazers_count `integer`
    * stargazers_url `string`
    * statuses_url `string`
    * subscribers_count `integer`
    * subscribers_url `string`
    * subscription_url `string`
    * svn_url `string`
    * tags_url `string`
    * teams_url `string`
    * temp_clone_token `string`
    * template_repository `string`
    * topics `array`
      * items `string`
    * trees_url `string`
    * updated_at `string`
    * url `string`
    * visibility `string`
    * watchers_count `integer`
  * topics `array`
    * items `string`
  * trees_url **required** `string`
  * updated_at **required** `string`
  * url **required** `string`
  * visibility `string`: The repository visibility: public, private, or internal.
  * watchers **required** `integer`
  * watchers_count **required** `integer`

### repository-collaborator-permission
* Repository Collaborator Permission `object`: Repository Collaborator Permission
  * permission **required** `string`
  * user **required**
    * avatar_url **required** `string`
    * events_url **required** `string`
    * followers_url **required** `string`
    * following_url **required** `string`
    * gists_url **required** `string`
    * gravatar_id **required** `string`
    * html_url **required** `string`
    * id **required** `integer`
    * login **required** `string`
    * node_id **required** `string`
    * organizations_url **required** `string`
    * received_events_url **required** `string`
    * repos_url **required** `string`
    * site_admin **required** `boolean`
    * starred_at `string`
    * starred_url **required** `string`
    * subscriptions_url **required** `string`
    * type **required** `string`
    * url **required** `string`

### repository-invitation
* Repository Invitation `object`: Repository invitations let you manage who you collaborate with.
  * created_at **required** `string`
  * html_url **required** `string`
  * id **required** `integer`: Unique identifier of the repository invitation.
  * invitee **required**
    * avatar_url **required** `string`
    * events_url **required** `string`
    * followers_url **required** `string`
    * following_url **required** `string`
    * gists_url **required** `string`
    * gravatar_id **required** `string`
    * html_url **required** `string`
    * id **required** `integer`
    * login **required** `string`
    * node_id **required** `string`
    * organizations_url **required** `string`
    * received_events_url **required** `string`
    * repos_url **required** `string`
    * site_admin **required** `boolean`
    * starred_at `string`
    * starred_url **required** `string`
    * subscriptions_url **required** `string`
    * type **required** `string`
    * url **required** `string`
  * inviter **required**
    * avatar_url **required** `string`
    * events_url **required** `string`
    * followers_url **required** `string`
    * following_url **required** `string`
    * gists_url **required** `string`
    * gravatar_id **required** `string`
    * html_url **required** `string`
    * id **required** `integer`
    * login **required** `string`
    * node_id **required** `string`
    * organizations_url **required** `string`
    * received_events_url **required** `string`
    * repos_url **required** `string`
    * site_admin **required** `boolean`
    * starred_at `string`
    * starred_url **required** `string`
    * subscriptions_url **required** `string`
    * type **required** `string`
    * url **required** `string`
  * node_id **required** `string`
  * permissions **required** `string` (values: read, write, admin): The permission associated with the invitation.
  * repository **required** [minimal-repository](#minimal-repository)
  * url **required** `string`: URL for the repository invitation

### repository-subscription
* Repository Invitation `object`: Repository invitations let you manage who you collaborate with.
  * created_at **required** `string`
  * ignored **required** `boolean`: Determines if all notifications should be blocked from this repository.
  * reason **required** `string`
  * repository_url **required** `string`
  * subscribed **required** `boolean`: Determines if notifications should be received from this repository.
  * url **required** `string`

### review-comment
* Legacy Review Comment `object`: Legacy Review Comment
  * _links **required** `object`
    * html **required** [link](#link)
    * pull_request **required** [link](#link)
    * self **required** [link](#link)
  * author_association **required** `string`
  * body **required** `string`
  * body_html `string`
  * body_text `string`
  * commit_id **required** `string`
  * created_at **required** `string`
  * diff_hunk **required** `string`
  * html_url **required** `string`
  * id **required** `integer`
  * in_reply_to_id `integer`
  * line `integer`: The line of the blob to which the comment applies. The last line of the range for a multi-line comment
  * node_id **required** `string`
  * original_commit_id **required** `string`
  * original_line `integer`: The original line of the blob to which the comment applies. The last line of the range for a multi-line comment
  * original_position **required** `integer`
  * original_start_line `integer`: The original first line of the range for a multi-line comment.
  * path **required** `string`
  * position **required** `integer`
  * pull_request_review_id **required** `integer`
  * pull_request_url **required** `string`
  * side `string` (values: LEFT, RIGHT): The side of the first line of the range for a multi-line comment.
  * start_line `integer`: The first line of the range for a multi-line comment.
  * start_side `string` (values: LEFT, RIGHT): The side of the first line of the range for a multi-line comment.
  * updated_at **required** `string`
  * url **required** `string`
  * user **required**
    * avatar_url **required** `string`
    * events_url **required** `string`
    * followers_url **required** `string`
    * following_url **required** `string`
    * gists_url **required** `string`
    * gravatar_id **required** `string`
    * html_url **required** `string`
    * id **required** `integer`
    * login **required** `string`
    * node_id **required** `string`
    * organizations_url **required** `string`
    * received_events_url **required** `string`
    * repos_url **required** `string`
    * site_admin **required** `boolean`
    * starred_at `string`
    * starred_url **required** `string`
    * subscriptions_url **required** `string`
    * type **required** `string`
    * url **required** `string`

### runner
* Self hosted runners `object`: A self hosted runner
  * id **required** `integer`: The id of the runner.
  * name **required** `string`: The name of the runner.
  * os **required** `string`: The Operating System of the runner.
  * status **required** `string`: The status of the runner.

### runner-application
* Runner Application `object`: Runner Application
  * architecture `string`
  * download_url `string`
  * filename `string`
  * os `string`

### scim-error
* Scim Error `object`: Scim Error
  * detail `string`
  * documentation_url `string`
  * message `string`
  * schemas `array`
    * items `string`
  * scimType `string`
  * status `integer`

### scim-user
* SCIM /Users `object`: SCIM /Users provisioning endpoints
  * active **required** `boolean`: The active status of the User.
  * displayName `string`: The name of the user, suitable for display to end-users
  * emails **required** `array`: user emails
    * items `object`
      * primary `boolean`
      * value **required** `string`
  * externalId **required** `string`: The ID of the User.
  * groups `array`: associated groups
    * items `object`
      * display `string`
      * value `string`
  * id **required** `string`: Unique identifier of an external identity
  * meta **required** `object`
    * created `string`
    * lastModified `string`
    * location `string`
    * resourceType `string`
  * name **required** `object`
    * familyName **required** `string`
    * formatted `string`
    * givenName **required** `string`
  * operations `array`: Set of operations to be performed
    * items `object`
      * op **required** `string` (values: add, remove, replace)
      * path `string`
  * organization_id `integer`: The ID of the organization.
  * schemas **required** `array`: SCIM schema used.
    * items `string`
  * userName **required** `string`: Configured by the admin. Could be an email, login, or username

### scim-user-list
* SCIM User List `object`: SCIM User List
  * Resources **required** `array`
    * items [scim-user](#scim-user)
  * itemsPerPage **required** `integer`
  * schemas **required** `array`: SCIM schema used.
    * items `string`
  * startIndex **required** `integer`
  * totalResults **required** `integer`

### scoped-installation
* Scoped Installation `object`
  * account **required** [simple-user](#simple-user)
  * permissions **required** `object`
  * repositories_url **required** `string`
  * repository_selection **required** `string` (values: all, selected): Describe whether all repositories have been selected or there's a selection involved
  * single_file_name **required** `string`

### search-result-text-matches
* Search Result Text Matches `array`
  * items `object`
    * fragment `string`
    * matches `array`
      * items `object`
        * indices `array`
          * items `integer`
        * text `string`
    * object_type `string`
    * object_url `string`
    * property `string`

### short-blob
* Short Blob `object`: Short Blob
  * sha `string`
  * url `string`

### short-branch
* Short Branch `object`: Short Branch
  * commit **required** `object`
    * sha **required** `string`
    * url **required** `string`
  * name **required** `string`
  * protected **required** `boolean`
  * protection [branch-protection](#branch-protection)
  * protection_url `string`

### simple-commit
* Simple Commit `object`: Simple Commit
  * author **required** `object`
    * email **required** `string`
    * name **required** `string`
  * committer **required** `object`
    * email **required** `string`
    * name **required** `string`
  * id **required** `string`
  * message **required** `string`
  * timestamp **required** `string`
  * tree_id **required** `string`

### simple-commit-status
* Simple Commit Status `object`
  * avatar_url **required** `string`
  * context **required** `string`
  * created_at **required** `string`
  * description **required** `string`
  * id **required** `integer`
  * node_id **required** `string`
  * required `boolean`
  * state **required** `string`
  * target_url **required** `string`
  * updated_at **required** `string`
  * url **required** `string`

### simple-user
* Simple User `object`: Simple User
  * avatar_url **required** `string`
  * events_url **required** `string`
  * followers_url **required** `string`
  * following_url **required** `string`
  * gists_url **required** `string`
  * gravatar_id **required** `string`
  * html_url **required** `string`
  * id **required** `integer`
  * login **required** `string`
  * node_id **required** `string`
  * organizations_url **required** `string`
  * received_events_url **required** `string`
  * repos_url **required** `string`
  * site_admin **required** `boolean`
  * starred_at `string`
  * starred_url **required** `string`
  * subscriptions_url **required** `string`
  * type **required** `string`
  * url **required** `string`

### stargazer
* Stargazer `object`: Stargazer
  * starred_at **required** `string`
  * user **required**
    * avatar_url **required** `string`
    * events_url **required** `string`
    * followers_url **required** `string`
    * following_url **required** `string`
    * gists_url **required** `string`
    * gravatar_id **required** `string`
    * html_url **required** `string`
    * id **required** `integer`
    * login **required** `string`
    * node_id **required** `string`
    * organizations_url **required** `string`
    * received_events_url **required** `string`
    * repos_url **required** `string`
    * site_admin **required** `boolean`
    * starred_at `string`
    * starred_url **required** `string`
    * subscriptions_url **required** `string`
    * type **required** `string`
    * url **required** `string`

### starred-repository
* Starred Repository `object`: Starred Repository
  * repo **required** [repository](#repository)
  * starred_at **required** `string`

### status
* Status `object`: The status of a commit.
  * avatar_url `string`
  * context `string`
  * created_at `string`
  * creator [simple-user](#simple-user)
  * description `string`
  * id `integer`
  * node_id `string`
  * state `string`
  * target_url `string`
  * updated_at `string`
  * url `string`

### status-check-policy
* Status Check Policy `object`: Status Check Policy
  * contexts **required** `array`
    * items `string`
  * contexts_url **required** `string`
  * strict **required** `boolean`
  * url **required** `string`

### tag
* Tag `object`: Tag
  * commit **required** `object`
    * sha **required** `string`
    * url **required** `string`
  * name **required** `string`
  * node_id **required** `string`
  * tarball_url **required** `string`
  * zipball_url **required** `string`

### team
* Team `object`: Groups of organization members that gives permissions on specified repositories.
  * description **required** `string`
  * html_url **required** `string`
  * id **required** `integer`
  * members_url **required** `string`
  * name **required** `string`
  * node_id **required** `string`
  * parent
    * description **required** `string`: Description of the team
    * html_url **required** `string`
    * id **required** `integer`: Unique identifier of the team
    * ldap_dn `string`: Distinguished Name (DN) that team maps to within LDAP environment
    * members_url **required** `string`
    * name **required** `string`: Name of the team
    * node_id **required** `string`
    * permission **required** `string`: Permission that the team will have for its repositories
    * privacy `string`: The level of privacy this team should have
    * repositories_url **required** `string`
    * slug **required** `string`
    * url **required** `string`: URL for the team
  * permission **required** `string`
  * privacy `string`
  * repositories_url **required** `string`
  * slug **required** `string`
  * url **required** `string`

### team-discussion
* Team Discussion `object`: A team discussion is a persistent record of a free-form conversation within a team.
  * author **required**
    * avatar_url **required** `string`
    * events_url **required** `string`
    * followers_url **required** `string`
    * following_url **required** `string`
    * gists_url **required** `string`
    * gravatar_id **required** `string`
    * html_url **required** `string`
    * id **required** `integer`
    * login **required** `string`
    * node_id **required** `string`
    * organizations_url **required** `string`
    * received_events_url **required** `string`
    * repos_url **required** `string`
    * site_admin **required** `boolean`
    * starred_at `string`
    * starred_url **required** `string`
    * subscriptions_url **required** `string`
    * type **required** `string`
    * url **required** `string`
  * body **required** `string`: The main text of the discussion.
  * body_html **required** `string`
  * body_version **required** `string`: The current version of the body content. If provided, this update operation will be rejected if the given version does not match the latest version on the server.
  * comments_count **required** `integer`
  * comments_url **required** `string`
  * created_at **required** `string`
  * html_url **required** `string`
  * last_edited_at **required** `string`
  * node_id **required** `string`
  * number **required** `integer`: The unique sequence number of a team discussion.
  * pinned **required** `boolean`: Whether or not this discussion should be pinned for easy retrieval.
  * private **required** `boolean`: Whether or not this discussion should be restricted to team members and organization administrators.
  * reactions [reaction-rollup](#reaction-rollup)
  * team_url **required** `string`
  * title **required** `string`: The title of the discussion.
  * updated_at **required** `string`
  * url **required** `string`

### team-discussion-comment
* Team Discussion Comment `object`: A reply to a discussion within a team.
  * author **required**
    * avatar_url **required** `string`
    * events_url **required** `string`
    * followers_url **required** `string`
    * following_url **required** `string`
    * gists_url **required** `string`
    * gravatar_id **required** `string`
    * html_url **required** `string`
    * id **required** `integer`
    * login **required** `string`
    * node_id **required** `string`
    * organizations_url **required** `string`
    * received_events_url **required** `string`
    * repos_url **required** `string`
    * site_admin **required** `boolean`
    * starred_at `string`
    * starred_url **required** `string`
    * subscriptions_url **required** `string`
    * type **required** `string`
    * url **required** `string`
  * body **required** `string`: The main text of the comment.
  * body_html **required** `string`
  * body_version **required** `string`: The current version of the body content. If provided, this update operation will be rejected if the given version does not match the latest version on the server.
  * created_at **required** `string`
  * discussion_url **required** `string`
  * html_url **required** `string`
  * last_edited_at **required** `string`
  * node_id **required** `string`
  * number **required** `integer`: The unique sequence number of a team discussion comment.
  * reactions [reaction-rollup](#reaction-rollup)
  * updated_at **required** `string`
  * url **required** `string`

### team-full
* Full Team `object`: Groups of organization members that gives permissions on specified repositories.
  * created_at **required** `string`
  * description **required** `string`
  * html_url **required** `string`
  * id **required** `integer`: Unique identifier of the team
  * ldap_dn `string`: Distinguished Name (DN) that team maps to within LDAP environment
  * members_count **required** `integer`
  * members_url **required** `string`
  * name **required** `string`: Name of the team
  * node_id **required** `string`
  * organization **required** [organization](#organization)
  * parent
    * description **required** `string`: Description of the team
    * html_url **required** `string`
    * id **required** `integer`: Unique identifier of the team
    * ldap_dn `string`: Distinguished Name (DN) that team maps to within LDAP environment
    * members_url **required** `string`
    * name **required** `string`: Name of the team
    * node_id **required** `string`
    * permission **required** `string`: Permission that the team will have for its repositories
    * privacy `string`: The level of privacy this team should have
    * repositories_url **required** `string`
    * slug **required** `string`
    * url **required** `string`: URL for the team
  * permission **required** `string`: Permission that the team will have for its repositories
  * privacy `string` (values: closed, secret): The level of privacy this team should have
  * repos_count **required** `integer`
  * repositories_url **required** `string`
  * slug **required** `string`
  * updated_at **required** `string`
  * url **required** `string`: URL for the team

### team-membership
* Team Membership `object`: Team Membership
  * role **required** `string` (values: member, maintainer): The role of the user in the team.
  * state **required** `string`
  * url **required** `string`

### team-project
* Team Project `object`: A team's access to a project.
  * body `string`
  * columns_url `string`
  * created_at `string`
  * creator [simple-user](#simple-user)
  * html_url `string`
  * id `integer`
  * name `string`
  * node_id `string`
  * number `integer`
  * organization_permission `string`
  * owner_url `string`
  * permissions `object`
    * admin `boolean`
    * read `boolean`
    * write `boolean`
  * private `boolean`
  * state `string`
  * updated_at `string`
  * url `string`

### team-repository
* Team Repository `object`: A team's access to a repository.
  * allow_merge_commit `boolean`: Whether to allow merge commits for pull requests.
  * allow_rebase_merge `boolean`: Whether to allow rebase merges for pull requests.
  * allow_squash_merge `boolean`: Whether to allow squash merges for pull requests.
  * archive_url **required** `string`
  * archived **required** `boolean`: Whether the repository is archived.
  * assignees_url **required** `string`
  * blobs_url **required** `string`
  * branches_url **required** `string`
  * clone_url **required** `string`
  * collaborators_url **required** `string`
  * comments_url **required** `string`
  * commits_url **required** `string`
  * compare_url **required** `string`
  * contents_url **required** `string`
  * contributors_url **required** `string`
  * created_at **required** `string`
  * default_branch **required** `string`: The default branch of the repository.
  * delete_branch_on_merge `boolean`: Whether to delete head branches when pull requests are merged
  * deployments_url **required** `string`
  * description **required** `string`
  * disabled **required** `boolean`: Returns whether or not this repository disabled.
  * downloads_url **required** `string`
  * events_url **required** `string`
  * fork **required** `boolean`
  * forks **required** `integer`
  * forks_count **required** `integer`
  * forks_url **required** `string`
  * full_name **required** `string`
  * git_commits_url **required** `string`
  * git_refs_url **required** `string`
  * git_tags_url **required** `string`
  * git_url **required** `string`
  * has_downloads **required** `boolean`: Whether downloads are enabled.
  * has_issues **required** `boolean`: Whether issues are enabled.
  * has_pages **required** `boolean`
  * has_projects **required** `boolean`: Whether projects are enabled.
  * has_wiki **required** `boolean`: Whether the wiki is enabled.
  * homepage **required** `string`
  * hooks_url **required** `string`
  * html_url **required** `string`
  * id **required** `integer`: Unique identifier of the repository
  * is_template `boolean`: Whether this repository acts as a template that can be used to generate new repositories.
  * issue_comment_url **required** `string`
  * issue_events_url **required** `string`
  * issues_url **required** `string`
  * keys_url **required** `string`
  * labels_url **required** `string`
  * language **required** `string`
  * languages_url **required** `string`
  * license **required**
    * html_url `string`
    * key **required** `string`
    * name **required** `string`
    * node_id **required** `string`
    * spdx_id **required** `string`
    * url **required** `string`
  * master_branch `string`
  * merges_url **required** `string`
  * milestones_url **required** `string`
  * mirror_url **required** `string`
  * name **required** `string`: The name of the repository.
  * network_count `integer`
  * node_id **required** `string`
  * notifications_url **required** `string`
  * open_issues **required** `integer`
  * open_issues_count **required** `integer`
  * owner **required**
    * avatar_url **required** `string`
    * events_url **required** `string`
    * followers_url **required** `string`
    * following_url **required** `string`
    * gists_url **required** `string`
    * gravatar_id **required** `string`
    * html_url **required** `string`
    * id **required** `integer`
    * login **required** `string`
    * node_id **required** `string`
    * organizations_url **required** `string`
    * received_events_url **required** `string`
    * repos_url **required** `string`
    * site_admin **required** `boolean`
    * starred_at `string`
    * starred_url **required** `string`
    * subscriptions_url **required** `string`
    * type **required** `string`
    * url **required** `string`
  * permissions `object`
    * admin **required** `boolean`
    * maintain `boolean`
    * pull **required** `boolean`
    * push **required** `boolean`
    * triage `boolean`
  * private **required** `boolean`: Whether the repository is private or public.
  * pulls_url **required** `string`
  * pushed_at **required** `string`
  * releases_url **required** `string`
  * size **required** `integer`
  * ssh_url **required** `string`
  * stargazers_count **required** `integer`
  * stargazers_url **required** `string`
  * statuses_url **required** `string`
  * subscribers_count `integer`
  * subscribers_url **required** `string`
  * subscription_url **required** `string`
  * svn_url **required** `string`
  * tags_url **required** `string`
  * teams_url **required** `string`
  * temp_clone_token `string`
  * template_repository `object`
    * allow_merge_commit `boolean`
    * allow_rebase_merge `boolean`
    * allow_squash_merge `boolean`
    * archive_url `string`
    * archived `boolean`
    * assignees_url `string`
    * blobs_url `string`
    * branches_url `string`
    * clone_url `string`
    * collaborators_url `string`
    * comments_url `string`
    * commits_url `string`
    * compare_url `string`
    * contents_url `string`
    * contributors_url `string`
    * created_at `string`
    * default_branch `string`
    * delete_branch_on_merge `boolean`
    * deployments_url `string`
    * description `string`
    * disabled `boolean`
    * downloads_url `string`
    * events_url `string`
    * fork `boolean`
    * forks_count `integer`
    * forks_url `string`
    * full_name `string`
    * git_commits_url `string`
    * git_refs_url `string`
    * git_tags_url `string`
    * git_url `string`
    * has_downloads `boolean`
    * has_issues `boolean`
    * has_pages `boolean`
    * has_projects `boolean`
    * has_wiki `boolean`
    * homepage `string`
    * hooks_url `string`
    * html_url `string`
    * id `integer`
    * is_template `boolean`
    * issue_comment_url `string`
    * issue_events_url `string`
    * issues_url `string`
    * keys_url `string`
    * labels_url `string`
    * language `string`
    * languages_url `string`
    * merges_url `string`
    * milestones_url `string`
    * mirror_url `string`
    * name `string`
    * network_count `integer`
    * node_id `string`
    * notifications_url `string`
    * open_issues_count `integer`
    * owner `object`
      * avatar_url `string`
      * events_url `string`
      * followers_url `string`
      * following_url `string`
      * gists_url `string`
      * gravatar_id `string`
      * html_url `string`
      * id `integer`
      * login `string`
      * node_id `string`
      * organizations_url `string`
      * received_events_url `string`
      * repos_url `string`
      * site_admin `boolean`
      * starred_url `string`
      * subscriptions_url `string`
      * type `string`
      * url `string`
    * permissions `object`
      * admin `boolean`
      * pull `boolean`
      * push `boolean`
    * private `boolean`
    * pulls_url `string`
    * pushed_at `string`
    * releases_url `string`
    * size `integer`
    * ssh_url `string`
    * stargazers_count `integer`
    * stargazers_url `string`
    * statuses_url `string`
    * subscribers_count `integer`
    * subscribers_url `string`
    * subscription_url `string`
    * svn_url `string`
    * tags_url `string`
    * teams_url `string`
    * temp_clone_token `string`
    * template_repository `string`
    * topics `array`
      * items `string`
    * trees_url `string`
    * updated_at `string`
    * url `string`
    * visibility `string`
    * watchers_count `integer`
  * topics `array`
    * items `string`
  * trees_url **required** `string`
  * updated_at **required** `string`
  * url **required** `string`
  * visibility `string`: The repository visibility: public, private, or internal.
  * watchers **required** `integer`
  * watchers_count **required** `integer`

### team-simple
* Team Simple `object`: Groups of organization members that gives permissions on specified repositories.
  * description **required** `string`: Description of the team
  * html_url **required** `string`
  * id **required** `integer`: Unique identifier of the team
  * ldap_dn `string`: Distinguished Name (DN) that team maps to within LDAP environment
  * members_url **required** `string`
  * name **required** `string`: Name of the team
  * node_id **required** `string`
  * permission **required** `string`: Permission that the team will have for its repositories
  * privacy `string`: The level of privacy this team should have
  * repositories_url **required** `string`
  * slug **required** `string`
  * url **required** `string`: URL for the team

### thread
* Thread `object`: Thread
  * id `string`
  * last_read_at `string`
  * reason `string`
  * repository [minimal-repository](#minimal-repository)
  * subject `object`
    * latest_comment_url `string`
    * title `string`
    * type `string`
    * url `string`
  * subscription_url `string`
  * unread `boolean`
  * updated_at `string`
  * url `string`

### thread-subscription
* Thread Subscription `object`: Thread Subscription
  * created_at **required** `string`
  * ignored **required** `boolean`
  * reason **required** `string`
  * repository_url `string`
  * subscribed **required** `boolean`
  * thread_url `string`
  * url **required** `string`

### topic
* Topic `object`: A topic aggregates entities that are related to a subject.
  * names `array`
    * items `string`

### topic-search-result-item
* Topic Search Result Item `object`: Topic Search Result Item
  * aliases `array`
    * items `object`
      * topic_relation `object`
        * id `integer`
        * name `string`
        * relation_type `string`
        * topic_id `integer`
  * created_at **required** `string`
  * created_by **required** `string`
  * curated **required** `boolean`
  * description **required** `string`
  * display_name **required** `string`
  * featured **required** `boolean`
  * logo_url `string`
  * name **required** `string`
  * related `array`
    * items `object`
      * topic_relation `object`
        * id `integer`
        * name `string`
        * relation_type `string`
        * topic_id `integer`
  * released **required** `string`
  * repository_count `integer`
  * score **required** `integer`
  * short_description **required** `string`
  * text_matches [search-result-text-matches](#search-result-text-matches)
  * updated_at **required** `string`

### traffic
* Traffic `object`
  * count **required** `integer`
  * timestamp **required** `string`
  * uniques **required** `integer`

### user-marketplace-purchase
* User Marketplace Purchase `object`: User Marketplace Purchase
  * account **required** [marketplace-account](#marketplace-account)
  * billing_cycle **required** `string`
  * free_trial_ends_on **required** `string`
  * next_billing_date **required** `string`
  * on_free_trial **required** `boolean`
  * plan **required** [marketplace-listing-plan](#marketplace-listing-plan)
  * unit_count **required** `integer`
  * updated_at **required** `string`

### user-search-result-item
* User Search Result Item `object`: User Search Result Item
  * avatar_url **required** `string`
  * bio `string`
  * blog `string`
  * company `string`
  * created_at `string`
  * email `string`
  * events_url **required** `string`
  * followers `integer`
  * followers_url **required** `string`
  * following `integer`
  * following_url **required** `string`
  * gists_url **required** `string`
  * gravatar_id **required** `string`
  * hireable `boolean`
  * html_url **required** `string`
  * id **required** `integer`
  * location `string`
  * login **required** `string`
  * name `string`
  * node_id **required** `string`
  * organizations_url **required** `string`
  * public_gists `integer`
  * public_repos `integer`
  * received_events_url **required** `string`
  * repos_url **required** `string`
  * score **required** `integer`
  * site_admin **required** `boolean`
  * starred_url **required** `string`
  * subscriptions_url **required** `string`
  * suspended_at `string`
  * text_matches [search-result-text-matches](#search-result-text-matches)
  * type **required** `string`
  * updated_at `string`
  * url **required** `string`

### validation-error
* Validation Error `object`: Validation Error
  * documentation_url **required** `string`
  * errors `array`
    * items `object`
      * code **required** `string`
      * field `string`
      * index `integer`
      * message `string`
      * resource `string`
  * message **required** `string`

### validation-error-simple
* Validation Error Simple `object`: Validation Error Simple
  * documentation_url **required** `string`
  * errors `array`
    * items `string`
  * message **required** `string`

### verification
* Verification `object`
  * payload **required** `string`
  * reason **required** `string`
  * signature **required** `string`
  * verified **required** `boolean`

### view-traffic
* View Traffic `object`: View Traffic
  * count **required** `integer`
  * uniques **required** `integer`
  * views **required** `array`
    * items [traffic](#traffic)

### workflow
* Workflow `object`: A GitHub Actions workflow
  * badge_url **required** `string`
  * created_at **required** `string`
  * deleted_at `string`
  * html_url **required** `string`
  * id **required** `integer`
  * name **required** `string`
  * node_id **required** `string`
  * path **required** `string`
  * state **required** `string` (values: active, deleted)
  * updated_at **required** `string`
  * url **required** `string`

### workflow-run
* Workflow Run `object`: An invocation of a workflow
  * artifacts_url **required** `string`: The URL to the artifacts for the workflow run.
  * cancel_url **required** `string`: The URL to cancel the workflow run.
  * check_suite_url **required** `string`: The URL to the associated check suite.
  * conclusion **required** `string`
  * created_at **required** `string`
  * event **required** `string`
  * head_branch **required** `string`
  * head_commit **required** [simple-commit](#simple-commit)
  * head_repository **required** [minimal-repository](#minimal-repository)
  * head_repository_id `integer`
  * head_sha **required** `string`: The SHA of the head commit that points to the version of the worflow being run.
  * html_url **required** `string`
  * id **required** `integer`: The ID of the workflow run.
  * jobs_url **required** `string`: The URL to the jobs for the workflow run.
  * logs_url **required** `string`: The URL to download the logs for the workflow run.
  * node_id **required** `string`
  * pull_requests **required** `array`
    * items [pull-request-minimal](#pull-request-minimal)
  * repository **required** [minimal-repository](#minimal-repository)
  * rerun_url **required** `string`: The URL to rerun the workflow run.
  * run_number **required** `integer`: The auto incrementing run number for the workflow run.
  * status **required** `string`
  * updated_at **required** `string`
  * url **required** `string`: The URL to the workflow run.
  * workflow_id **required** `integer`: The ID of the parent workflow.
  * workflow_url **required** `string`: The URL to the workflow.

### workflow-run-usage
* Workflow Run Usage `object`: Workflow Run Usage
  * billable `object`
    * MACOS `object`
      * jobs `integer`
      * total_ms `integer`
    * UBUNTU `object`
      * jobs `integer`
      * total_ms `integer`
    * WINDOWS `object`
      * jobs `integer`
      * total_ms `integer`
  * run_duration_ms `integer`

### workflow-usage
* Workflow Usage `object`: Workflow Usage
  * billable `object`
    * MACOS `object`
      * total_ms `integer`
    * UBUNTU `object`
      * total_ms `integer`
    * WINDOWS `object`
      * total_ms `integer`


