# @datafire/google_gmailpostmastertools

Client library for Gmail Postmaster Tools API

## Installation and Usage
```bash
npm install --save @datafire/google_gmailpostmastertools
```
```js
let google_gmailpostmastertools = require('@datafire/google_gmailpostmastertools').create({
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

The Postmaster Tools API is a RESTful API that provides programmatic access to email traffic metrics (like spam reports, delivery errors etc) otherwise available through the Gmail Postmaster Tools UI currently.

## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_gmailpostmastertools.oauthCallback({
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
google_gmailpostmastertools.oauthRefresh(null, context)
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

### gmailpostmastertools.domains.list
Lists the domains that have been registered by the client. The order of domains in the response is unspecified and non-deterministic. Newly created domains will not necessarily be added to the end of this list.


```js
google_gmailpostmastertools.gmailpostmastertools.domains.list({}, context)
```

#### Input
* input `object`
  * pageSize `integer`: Requested page size. Server may return fewer domains than requested. If unspecified, server will pick an appropriate default.
  * pageToken `string`: The next_page_token value returned from a previous List request, if any. This is the value of ListDomainsResponse.next_page_token returned from the previous call to `ListDomains` method.
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
* output [ListDomainsResponse](#listdomainsresponse)

### gmailpostmastertools.domains.trafficStats.get
Get traffic statistics for a domain on a specific date. Returns PERMISSION_DENIED if user does not have permission to access TrafficStats for the domain.


```js
google_gmailpostmastertools.gmailpostmastertools.domains.trafficStats.get({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The resource name of the traffic statistics to get. E.g., domains/mymail.mydomain.com/trafficStats/20160807.
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
* output [TrafficStats](#trafficstats)

### gmailpostmastertools.domains.trafficStats.list
List traffic statistics for all available days. Returns PERMISSION_DENIED if user does not have permission to access TrafficStats for the domain.


```js
google_gmailpostmastertools.gmailpostmastertools.domains.trafficStats.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: The resource name of the domain whose traffic statistics we'd like to list. It should have the form `domains/{domain_name}`, where domain_name is the fully qualified domain name.
  * endDate.day `integer`: Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
  * endDate.month `integer`: Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
  * endDate.year `integer`: Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
  * pageSize `integer`: Requested page size. Server may return fewer TrafficStats than requested. If unspecified, server will pick an appropriate default.
  * pageToken `string`: The next_page_token value returned from a previous List request, if any. This is the value of ListTrafficStatsResponse.next_page_token returned from the previous call to `ListTrafficStats` method.
  * startDate.day `integer`: Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
  * startDate.month `integer`: Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
  * startDate.year `integer`: Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
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
* output [ListTrafficStatsResponse](#listtrafficstatsresponse)



## Definitions

### DeliveryError
* DeliveryError `object`: Metric on a particular delivery error type.
  * errorClass `string` (values: DELIVERY_ERROR_CLASS_UNSPECIFIED, PERMANENT_ERROR, TEMPORARY_ERROR): The class of delivery error.
  * errorRatio `number`: The ratio of messages where the error occurred vs all authenticated traffic.
  * errorType `string` (values: DELIVERY_ERROR_TYPE_UNSPECIFIED, RATE_LIMIT_EXCEEDED, SUSPECTED_SPAM, CONTENT_SPAMMY, BAD_ATTACHMENT, BAD_DMARC_POLICY, LOW_IP_REPUTATION, LOW_DOMAIN_REPUTATION, IP_IN_RBL, DOMAIN_IN_RBL, BAD_PTR_RECORD): The type of delivery error.

### Domain
* Domain `object`: A registered domain resource in the Postmaster API.
  * createTime `string`: Timestamp when the user registered this domain. Assigned by the server.
  * name `string`: The resource name of the Domain. Domain names have the form `domains/{domain_name}`, where domain_name is the fully qualified domain name (i.e., mymail.mydomain.com).
  * permission `string` (values: PERMISSION_UNSPECIFIED, OWNER, READER, NONE): User’s permission for this domain. Assigned by the server.

### FeedbackLoop
* FeedbackLoop `object`: [Feedback loop](https://support.google.com/mail/answer/6254652) identifier information.
  * id `string`: Feedback loop identifier that uniquely identifies individual campaigns.
  * spamRatio `number`: The ratio of user marked spam messages with the identifier vs the total number of inboxed messages with that identifier.

### IpReputation
* IpReputation `object`: IP Reputation information for a set of IPs in a specific reputation category.
  * ipCount `string`: Total number of unique IPs in this reputation category. This metric only pertains to traffic that passed [SPF](http://www.openspf.org/) or [DKIM](http://www.dkim.org/).
  * numIps `string`: Total number of unique IPs in this reputation category. This metric only pertains to traffic that passed [SPF](http://www.openspf.org/) or [DKIM](http://www.dkim.org/). Deprecated to be complied with ApiLinter for Quantities. Use ip_count instead.
  * reputation `string` (values: REPUTATION_CATEGORY_UNSPECIFIED, HIGH, MEDIUM, LOW, BAD): The reputation category this IP reputation represents.
  * sampleIps `array`: A sample of IPs in this reputation category.
    * items `string`

### ListDomainsResponse
* ListDomainsResponse `object`: Response message for ListDomains.
  * domains `array`: The list of domains.
    * items [Domain](#domain)
  * nextPageToken `string`: Token to retrieve the next page of results, or empty if there are no more results in the list.

### ListTrafficStatsResponse
* ListTrafficStatsResponse `object`: Response message for ListTrafficStats.
  * nextPageToken `string`: Token to retrieve the next page of results, or empty if there are no more results in the list.
  * trafficStats `array`: The list of TrafficStats.
    * items [TrafficStats](#trafficstats)

### TrafficStats
* TrafficStats `object`: Email traffic statistics pertaining to a specific date.
  * deliveryErrors `array`: Delivery errors for the domain. This metric only pertains to traffic that passed [SPF](http://www.openspf.org/) or [DKIM](http://www.dkim.org/).
    * items [DeliveryError](#deliveryerror)
  * dkimSuccessRatio `number`: The ratio of mail that successfully authenticated with DKIM vs. all mail that attempted to authenticate with [DKIM](http://www.dkim.org/). Spoofed mail is excluded.
  * dmarcSuccessRatio `number`: The ratio of mail that passed [DMARC](https://dmarc.org/) alignment checks vs all mail received from the domain that successfully authenticated with either of [SPF](http://www.openspf.org/) or [DKIM](http://www.dkim.org/).
  * domainReputation `string` (values: REPUTATION_CATEGORY_UNSPECIFIED, HIGH, MEDIUM, LOW, BAD): Reputation of the domain.
  * inboundEncryptionRatio `number`: The ratio of incoming mail (to Gmail), that passed secure transport (TLS) vs all mail received from that domain. This metric only pertains to traffic that passed [SPF](http://www.openspf.org/) or [DKIM](http://www.dkim.org/).
  * ipReputations `array`: Reputation information pertaining to the IP addresses of the email servers for the domain. There is exactly one entry for each reputation category except REPUTATION_CATEGORY_UNSPECIFIED.
    * items [IpReputation](#ipreputation)
  * name `string`: The resource name of the traffic statistics. Traffic statistic names have the form `domains/{domain}/trafficStats/{date}`, where domain_name is the fully qualified domain name (i.e., mymail.mydomain.com) of the domain this traffic statistics pertains to and date is the date in yyyymmdd format that these statistics corresponds to. For example: domains/mymail.mydomain.com/trafficStats/20160807
  * outboundEncryptionRatio `number`: The ratio of outgoing mail (from Gmail) that was accepted over secure transport (TLS).
  * spammyFeedbackLoops `array`: Spammy [Feedback loop identifiers] (https://support.google.com/mail/answer/6254652) with their individual spam rates. This metric only pertains to traffic that is authenticated by [DKIM](http://www.dkim.org/).
    * items [FeedbackLoop](#feedbackloop)
  * spfSuccessRatio `number`: The ratio of mail that successfully authenticated with SPF vs. all mail that attempted to authenticate with [SPF](http://www.openspf.org/). Spoofed mail is excluded.
  * userReportedSpamRatio `number`: The ratio of user-report spam vs. email that was sent to the inbox. This metric only pertains to emails authenticated by [DKIM](http://www.dkim.org/).


