# @datafire/amazonaws_macie2

Client library for Amazon Macie 2

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_macie2
```
```js
let amazonaws_macie2 = require('@datafire/amazonaws_macie2').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

.then(data => {
  console.log(data);
});
```

## Description

Amazon Macie is a fully managed data security and data privacy service that uses machine learning and pattern matching to discover and protect your sensitive data in AWS. Macie automates the discovery of sensitive data, such as PII and intellectual property, to provide you with insight into the data that your organization stores in AWS. Macie also provides an inventory of your Amazon S3 buckets, which it continually monitors for you. If Macie detects sensitive data or potential data access issues, it generates detailed findings for you to review and act upon as necessary.

## Actions

### ListOrganizationAdminAccounts



```js
amazonaws_macie2.ListOrganizationAdminAccounts({}, context)
```

#### Input
* input `object`
  * maxResults `integer`
  * nextToken `string`

#### Output
* output [ListOrganizationAdminAccountsResponse](#listorganizationadminaccountsresponse)

### EnableOrganizationAdminAccount



```js
amazonaws_macie2.EnableOrganizationAdminAccount({
  "adminAccountId": ""
}, context)
```

#### Input
* input `object`
  * adminAccountId **required** `string`: The AWS account ID for the account to designate as the delegated Amazon Macie administrator account for the organization.
  * clientToken `string`: A unique, case-sensitive token that you provide to ensure the idempotency of the request.

#### Output
* output [EnableOrganizationAdminAccountResponse](#enableorganizationadminaccountresponse)

### DisableOrganizationAdminAccount



```js
amazonaws_macie2.DisableOrganizationAdminAccount({
  "adminAccountId": ""
}, context)
```

#### Input
* input `object`
  * adminAccountId **required** `string`

#### Output
* output [DisableOrganizationAdminAccountResponse](#disableorganizationadminaccountresponse)

### DescribeOrganizationConfiguration



```js
amazonaws_macie2.DescribeOrganizationConfiguration({}, context)
```

#### Input
* input `object`

#### Output
* output [DescribeOrganizationConfigurationResponse](#describeorganizationconfigurationresponse)

### UpdateOrganizationConfiguration



```js
amazonaws_macie2.UpdateOrganizationConfiguration({
  "autoEnable": true
}, context)
```

#### Input
* input `object`
  * autoEnable **required** `boolean`: Specifies whether Amazon Macie is enabled automatically for each account, when the account is added to the AWS organization.

#### Output
* output [UpdateOrganizationConfigurationResponse](#updateorganizationconfigurationresponse)

### GetClassificationExportConfiguration



```js
amazonaws_macie2.GetClassificationExportConfiguration({}, context)
```

#### Input
* input `object`

#### Output
* output [GetClassificationExportConfigurationResponse](#getclassificationexportconfigurationresponse)

### PutClassificationExportConfiguration



```js
amazonaws_macie2.PutClassificationExportConfiguration({
  "configuration": {}
}, context)
```

#### Input
* input `object`
  * configuration **required** `object`: Specifies where to store data classification results, and the encryption settings to use when storing results in that location. Currently, you can store classification results only in an S3 bucket.
    * s3Destination
      * bucketName **required**
      * keyPrefix
      * kmsKeyArn **required**

#### Output
* output [PutClassificationExportConfigurationResponse](#putclassificationexportconfigurationresponse)

### CreateCustomDataIdentifier



```js
amazonaws_macie2.CreateCustomDataIdentifier({}, context)
```

#### Input
* input `object`
  * tags `object`: A string-to-string map of key-value pairs that specifies the tags (keys and values) for a classification job, custom data identifier, findings filter, or member account.
  * clientToken `string`: A unique, case-sensitive token that you provide to ensure the idempotency of the request.
  * description `string`: <p>A custom description of the custom data identifier. The description can contain as many as 512 characters.</p> <p>We strongly recommend that you avoid including any sensitive data in the description of a custom data identifier. Other users of your account might be able to see the identifier's description, depending on the actions that they're allowed to perform in Amazon Macie.</p>
  * ignoreWords `array`: An array that lists specific character sequences (ignore words) to exclude from the results. If the text matched by the regular expression is the same as any string in this array, Amazon Macie ignores it. The array can contain as many as 10 ignore words. Each ignore word can contain 4 - 90 characters. Ignore words are case sensitive.
    * items [__string](#__string)
  * keywords `array`: An array that lists specific character sequences (keywords), one of which must be within proximity (maximumMatchDistance) of the regular expression to match. The array can contain as many as 50 keywords. Each keyword can contain 4 - 90 characters. Keywords aren't case sensitive.
    * items [__string](#__string)
  * maximumMatchDistance `integer`: The maximum number of characters that can exist between text that matches the regex pattern and the character sequences specified by the keywords array. Macie includes or excludes a result based on the proximity of a keyword to text that matches the regex pattern. The distance can be 1 - 300 characters. The default value is 50.
  * name `string`: <p>A custom name for the custom data identifier. The name can contain as many as 128 characters.</p> <p>We strongly recommend that you avoid including any sensitive data in the name of a custom data identifier. Other users of your account might be able to see the identifier's name, depending on the actions that they're allowed to perform in Amazon Macie.</p>
  * regex `string`: The regular expression (<i>regex</i>) that defines the pattern to match. The expression can contain as many as 512 characters.

#### Output
* output [CreateCustomDataIdentifierResponse](#createcustomdataidentifierresponse)

### BatchGetCustomDataIdentifiers



```js
amazonaws_macie2.BatchGetCustomDataIdentifiers({}, context)
```

#### Input
* input `object`
  * ids `array`: An array of strings that lists the unique identifiers for the custom data identifiers to retrieve information about.
    * items [__string](#__string)

#### Output
* output [BatchGetCustomDataIdentifiersResponse](#batchgetcustomdataidentifiersresponse)

### ListCustomDataIdentifiers



```js
amazonaws_macie2.ListCustomDataIdentifiers({}, context)
```

#### Input
* input `object`
  * maxResults `string`
  * nextToken `string`
  * maxResults `integer`: The maximum number of items to include in each page of the response.
  * nextToken `string`: The nextToken string that specifies which page of results to return in a paginated response.

#### Output
* output [ListCustomDataIdentifiersResponse](#listcustomdataidentifiersresponse)

### TestCustomDataIdentifier



```js
amazonaws_macie2.TestCustomDataIdentifier({
  "regex": "",
  "sampleText": ""
}, context)
```

#### Input
* input `object`
  * ignoreWords `array`: An array that lists specific character sequences (ignore words) to exclude from the results. If the text matched by the regular expression is the same as any string in this array, Amazon Macie ignores it. The array can contain as many as 10 ignore words. Each ignore word can contain 4 - 90 characters. Ignore words are case sensitive.
    * items [__string](#__string)
  * keywords `array`: An array that lists specific character sequences (keywords), one of which must be within proximity (maximumMatchDistance) of the regular expression to match. The array can contain as many as 50 keywords. Each keyword can contain 4 - 90 characters. Keywords aren't case sensitive.
    * items [__string](#__string)
  * maximumMatchDistance `integer`: The maximum number of characters that can exist between text that matches the regex pattern and the character sequences specified by the keywords array. Macie includes or excludes a result based on the proximity of a keyword to text that matches the regex pattern. The distance can be 1 - 300 characters. The default value is 50.
  * regex **required** `string`: The regular expression (<i>regex</i>) that defines the pattern to match. The expression can contain as many as 512 characters.
  * sampleText **required** `string`: The sample text to inspect by using the custom data identifier. The text can contain as many as 1,000 characters.

#### Output
* output [TestCustomDataIdentifierResponse](#testcustomdataidentifierresponse)

### DeleteCustomDataIdentifier



```js
amazonaws_macie2.DeleteCustomDataIdentifier({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
* output [DeleteCustomDataIdentifierResponse](#deletecustomdataidentifierresponse)

### GetCustomDataIdentifier



```js
amazonaws_macie2.GetCustomDataIdentifier({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
* output [GetCustomDataIdentifierResponse](#getcustomdataidentifierresponse)

### DescribeBuckets



```js
amazonaws_macie2.DescribeBuckets({}, context)
```

#### Input
* input `object`
  * maxResults `string`
  * nextToken `string`
  * criteria `object`: Specifies, as a map, one or more attribute-based conditions that filter the results of a query for information about S3 buckets.
  * maxResults `integer`: The maximum number of items to include in each page of the response. The default value is 50.
  * nextToken `string`: The nextToken string that specifies which page of results to return in a paginated response.
  * sortCriteria `object`: Specifies criteria for sorting the results of a query for information about S3 buckets.
    * attributeName
    * orderBy

#### Output
* output [DescribeBucketsResponse](#describebucketsresponse)

### GetBucketStatistics



```js
amazonaws_macie2.GetBucketStatistics({}, context)
```

#### Input
* input `object`
  * accountId `string`: The unique identifier for the AWS account.

#### Output
* output [GetBucketStatisticsResponse](#getbucketstatisticsresponse)

### ListFindings



```js
amazonaws_macie2.ListFindings({}, context)
```

#### Input
* input `object`
  * maxResults `string`
  * nextToken `string`
  * findingCriteria `object`: Specifies, as a map, one or more property-based conditions that filter the results of a query for findings.
    * criterion
  * maxResults `integer`: The maximum number of items to include in each page of the response.
  * nextToken `string`: The nextToken string that specifies which page of results to return in a paginated response.
  * sortCriteria `object`: Specifies criteria for sorting the results of a request for findings.
    * attributeName
    * orderBy

#### Output
* output [ListFindingsResponse](#listfindingsresponse)

### GetFindings



```js
amazonaws_macie2.GetFindings({
  "findingIds": []
}, context)
```

#### Input
* input `object`
  * findingIds **required** `array`: An array of strings that lists the unique identifiers for the findings to retrieve.
    * items [__string](#__string)
  * sortCriteria `object`: Specifies criteria for sorting the results of a request for findings.
    * attributeName
    * orderBy

#### Output
* output [GetFindingsResponse](#getfindingsresponse)

### CreateSampleFindings



```js
amazonaws_macie2.CreateSampleFindings({}, context)
```

#### Input
* input `object`
  * findingTypes `array`: <p>An array that lists one or more types of findings to include in the set of sample findings. Currently, the only supported value is Policy:IAMUser/S3BucketEncryptionDisabled.</p> 
    * items [FindingType](#findingtype)

#### Output
* output [CreateSampleFindingsResponse](#createsamplefindingsresponse)

### GetFindingStatistics



```js
amazonaws_macie2.GetFindingStatistics({
  "groupBy": ""
}, context)
```

#### Input
* input `object`
  * findingCriteria `object`: Specifies, as a map, one or more property-based conditions that filter the results of a query for findings.
    * criterion
  * groupBy **required** `string` (values: resourcesAffected.s3Bucket.name, type, classificationDetails.jobId, severity.description): <p>The finding property to use to group the query results. Valid values are:</p> <ul><li><p>classificationDetails.jobId - The unique identifier for the classification job that produced the finding.</p></li> <li><p>resourcesAffected.s3Bucket.name - The name of the S3 bucket that the finding applies to.</p></li> <li><p>severity.description - The severity level of the finding, such as High or Medium.</p></li> <li><p>type - The type of finding, such as Policy:IAMUser/S3BucketPublic and SensitiveData:S3Object/Personal.</p></li></ul>
  * size `integer`: The maximum number of items to include in each page of the response.
  * sortCriteria `object`: Specifies criteria for sorting the results of a query that retrieves aggregated statistical data about findings.
    * attributeName
    * orderBy

#### Output
* output [GetFindingStatisticsResponse](#getfindingstatisticsresponse)

### ListFindingsFilters



```js
amazonaws_macie2.ListFindingsFilters({}, context)
```

#### Input
* input `object`
  * maxResults `integer`
  * nextToken `string`

#### Output
* output [ListFindingsFiltersResponse](#listfindingsfiltersresponse)

### CreateFindingsFilter



```js
amazonaws_macie2.CreateFindingsFilter({
  "action": "",
  "findingCriteria": {},
  "name": ""
}, context)
```

#### Input
* input `object`
  * tags `object`: A string-to-string map of key-value pairs that specifies the tags (keys and values) for a classification job, custom data identifier, findings filter, or member account.
  * action **required** `string` (values: ARCHIVE, NOOP): The action to perform on findings that meet the filter criteria. To suppress (automatically archive) findings that meet the criteria, set this value to ARCHIVE. Valid values are:
  * clientToken `string`: A unique, case-sensitive token that you provide to ensure the idempotency of the request.
  * description `string`: <p>A custom description of the filter. The description can contain as many as 512 characters.</p> <p>We strongly recommend that you avoid including any sensitive data in the description of a filter. Other users of your account might be able to see the filter's description, depending on the actions that they're allowed to perform in Amazon Macie.</p>
  * findingCriteria **required** `object`: Specifies, as a map, one or more property-based conditions that filter the results of a query for findings.
    * criterion
  * name **required** `string`: <p>A custom name for the filter. The name must contain at least 3 characters and can contain as many as 64 characters.</p> <p>We strongly recommend that you avoid including any sensitive data in the name of a filter. Other users of your account might be able to see the filter's name, depending on the actions that they're allowed to perform in Amazon Macie.</p>
  * position `integer`: The position of the filter in the list of saved filters on the Amazon Macie console. This value also determines the order in which the filter is applied to findings, relative to other filters that are also applied to the findings.

#### Output
* output [CreateFindingsFilterResponse](#createfindingsfilterresponse)

### DeleteFindingsFilter



```js
amazonaws_macie2.DeleteFindingsFilter({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
* output [DeleteFindingsFilterResponse](#deletefindingsfilterresponse)

### GetFindingsFilter



```js
amazonaws_macie2.GetFindingsFilter({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
* output [GetFindingsFilterResponse](#getfindingsfilterresponse)

### UpdateFindingsFilter



```js
amazonaws_macie2.UpdateFindingsFilter({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * action `string` (values: ARCHIVE, NOOP): The action to perform on findings that meet the filter criteria. To suppress (automatically archive) findings that meet the criteria, set this value to ARCHIVE. Valid values are:
  * description `string`: <p>A custom description of the filter. The description can contain as many as 512 characters.</p> <p>We strongly recommend that you avoid including any sensitive data in the description of a filter. Other users might be able to see the filter's description, depending on the actions that they're allowed to perform in Amazon Macie.</p>
  * findingCriteria `object`: Specifies, as a map, one or more property-based conditions that filter the results of a query for findings.
    * criterion
  * name `string`: <p>A custom name for the filter. The name must contain at least 3 characters and can contain as many as 64 characters.</p> <p>We strongly recommend that you avoid including any sensitive data in the name of a filter. Other users might be able to see the filter's name, depending on the actions that they're allowed to perform in Amazon Macie.</p>
  * position `integer`: The position of the filter in the list of saved filters on the Amazon Macie console. This value also determines the order in which the filter is applied to findings, relative to other filters that are also applied to the findings.

#### Output
* output [UpdateFindingsFilterResponse](#updatefindingsfilterresponse)

### ListInvitations



```js
amazonaws_macie2.ListInvitations({}, context)
```

#### Input
* input `object`
  * maxResults `integer`
  * nextToken `string`

#### Output
* output [ListInvitationsResponse](#listinvitationsresponse)

### CreateInvitations



```js
amazonaws_macie2.CreateInvitations({
  "accountIds": []
}, context)
```

#### Input
* input `object`
  * accountIds **required** `array`: An array that lists AWS account IDs, one for each account to send the invitation to.
    * items [__string](#__string)
  * disableEmailNotification `boolean`: Specifies whether to send an email notification to the root user of each account that the invitation will be sent to. This notification is in addition to an alert that the root user receives in AWS Personal Health Dashboard. To send an email notification to the root user of each account, set this value to true.
  * message `string`: A custom message to include in the invitation. Amazon Macie adds this message to the standard content that it sends for an invitation.

#### Output
* output [CreateInvitationsResponse](#createinvitationsresponse)

### AcceptInvitation



```js
amazonaws_macie2.AcceptInvitation({
  "invitationId": "",
  "masterAccount": ""
}, context)
```

#### Input
* input `object`
  * invitationId **required** `string`: The unique identifier for the invitation to accept.
  * masterAccount **required** `string`: The AWS account ID for the account that sent the invitation.

#### Output
* output [AcceptInvitationResponse](#acceptinvitationresponse)

### GetInvitationsCount



```js
amazonaws_macie2.GetInvitationsCount({}, context)
```

#### Input
* input `object`

#### Output
* output [GetInvitationsCountResponse](#getinvitationscountresponse)

### DeclineInvitations



```js
amazonaws_macie2.DeclineInvitations({
  "accountIds": []
}, context)
```

#### Input
* input `object`
  * accountIds **required** `array`: An array that lists AWS account IDs, one for each account that sent an invitation to decline.
    * items [__string](#__string)

#### Output
* output [DeclineInvitationsResponse](#declineinvitationsresponse)

### DeleteInvitations



```js
amazonaws_macie2.DeleteInvitations({
  "accountIds": []
}, context)
```

#### Input
* input `object`
  * accountIds **required** `array`: An array that lists AWS account IDs, one for each account that sent an invitation to delete.
    * items [__string](#__string)

#### Output
* output [DeleteInvitationsResponse](#deleteinvitationsresponse)

### CreateClassificationJob



```js
amazonaws_macie2.CreateClassificationJob({
  "clientToken": "",
  "jobType": "",
  "name": "",
  "s3JobDefinition": {}
}, context)
```

#### Input
* input `object`
  * tags `object`: A string-to-string map of key-value pairs that specifies the tags (keys and values) for a classification job, custom data identifier, findings filter, or member account.
  * clientToken **required** `string`: A unique, case-sensitive token that you provide to ensure the idempotency of the request.
  * customDataIdentifierIds `array`: The custom data identifiers to use for data analysis and classification.
    * items [__string](#__string)
  * description `string`: A custom description of the job. The description can contain as many as 200 characters.
  * initialRun `boolean`: Specifies whether to analyze all existing, eligible objects immediately after the job is created.
  * jobType **required** `string` (values: ONE_TIME, SCHEDULED): The schedule for running a classification job. Valid values are:
  * name **required** `string`: A custom name for the job. The name can contain as many as 500 characters.
  * s3JobDefinition **required** `object`: Specifies which S3 buckets contain the objects that a classification job analyzes, and the scope of that analysis.
    * bucketDefinitions
      * items [S3BucketDefinitionForJob](#s3bucketdefinitionforjob)
    * scoping
      * excludes
        * and
          * items [JobScopeTerm](#jobscopeterm)
      * includes
        * and
          * items [JobScopeTerm](#jobscopeterm)
  * samplingPercentage `integer`: The sampling depth, as a percentage, to apply when processing objects. This value determines the percentage of eligible objects that the job analyzes. If this value is less than 100, Amazon Macie selects the objects to analyze at random, up to the specified percentage, and analyzes all the data in those objects.
  * scheduleFrequency `object`: Specifies the recurrence pattern for running a classification job.
    * dailySchedule
    * monthlySchedule
      * dayOfMonth
    * weeklySchedule
      * dayOfWeek

#### Output
* output [CreateClassificationJobResponse](#createclassificationjobresponse)

### ListClassificationJobs



```js
amazonaws_macie2.ListClassificationJobs({}, context)
```

#### Input
* input `object`
  * maxResults `string`
  * nextToken `string`
  * filterCriteria `object`: Specifies criteria for filtering the results of a request for information about classification jobs.
    * excludes
      * items [ListJobsFilterTerm](#listjobsfilterterm)
    * includes
      * items [ListJobsFilterTerm](#listjobsfilterterm)
  * maxResults `integer`: The maximum number of items to include in each page of the response.
  * nextToken `string`: The nextToken string that specifies which page of results to return in a paginated response.
  * sortCriteria `object`: Specifies criteria for sorting the results of a request for information about classification jobs.
    * attributeName
    * orderBy

#### Output
* output [ListClassificationJobsResponse](#listclassificationjobsresponse)

### DescribeClassificationJob



```js
amazonaws_macie2.DescribeClassificationJob({
  "jobId": ""
}, context)
```

#### Input
* input `object`
  * jobId **required** `string`

#### Output
* output [DescribeClassificationJobResponse](#describeclassificationjobresponse)

### UpdateClassificationJob



```js
amazonaws_macie2.UpdateClassificationJob({
  "jobId": "",
  "jobStatus": ""
}, context)
```

#### Input
* input `object`
  * jobId **required** `string`
  * jobStatus **required** `string` (values: RUNNING, PAUSED, CANCELLED, COMPLETE, IDLE, USER_PAUSED): The status of a classification job. Possible values are:

#### Output
* output [UpdateClassificationJobResponse](#updateclassificationjobresponse)

### DisableMacie



```js
amazonaws_macie2.DisableMacie({}, context)
```

#### Input
* input `object`

#### Output
* output [DisableMacieResponse](#disablemacieresponse)

### GetMacieSession



```js
amazonaws_macie2.GetMacieSession({}, context)
```

#### Input
* input `object`

#### Output
* output [GetMacieSessionResponse](#getmaciesessionresponse)

### UpdateMacieSession



```js
amazonaws_macie2.UpdateMacieSession({}, context)
```

#### Input
* input `object`
  * findingPublishingFrequency `string` (values: FIFTEEN_MINUTES, ONE_HOUR, SIX_HOURS): The frequency with which Amazon Macie publishes updates to policy findings for an account. This includes publishing updates to AWS Security Hub and Amazon EventBridge (formerly called Amazon CloudWatch Events). Valid values are:
  * status `string` (values: PAUSED, ENABLED): The status of an Amazon Macie account. Valid values are:

#### Output
* output [UpdateMacieSessionResponse](#updatemaciesessionresponse)

### EnableMacie



```js
amazonaws_macie2.EnableMacie({}, context)
```

#### Input
* input `object`
  * clientToken `string`: A unique, case-sensitive token that you provide to ensure the idempotency of the request.
  * findingPublishingFrequency `string` (values: FIFTEEN_MINUTES, ONE_HOUR, SIX_HOURS): The frequency with which Amazon Macie publishes updates to policy findings for an account. This includes publishing updates to AWS Security Hub and Amazon EventBridge (formerly called Amazon CloudWatch Events). Valid values are:
  * status `string` (values: PAUSED, ENABLED): The status of an Amazon Macie account. Valid values are:

#### Output
* output [EnableMacieResponse](#enablemacieresponse)

### UpdateMemberSession



```js
amazonaws_macie2.UpdateMemberSession({
  "id": "",
  "status": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * status **required** `string` (values: PAUSED, ENABLED): The status of an Amazon Macie account. Valid values are:

#### Output
* output [UpdateMemberSessionResponse](#updatemembersessionresponse)

### GetMasterAccount



```js
amazonaws_macie2.GetMasterAccount({}, context)
```

#### Input
* input `object`

#### Output
* output [GetMasterAccountResponse](#getmasteraccountresponse)

### DisassociateFromMasterAccount



```js
amazonaws_macie2.DisassociateFromMasterAccount({}, context)
```

#### Input
* input `object`

#### Output
* output [DisassociateFromMasterAccountResponse](#disassociatefrommasteraccountresponse)

### ListMembers



```js
amazonaws_macie2.ListMembers({}, context)
```

#### Input
* input `object`
  * maxResults `integer`
  * nextToken `string`
  * onlyAssociated `string`

#### Output
* output [ListMembersResponse](#listmembersresponse)

### CreateMember



```js
amazonaws_macie2.CreateMember({
  "account": {}
}, context)
```

#### Input
* input `object`
  * tags `object`: A string-to-string map of key-value pairs that specifies the tags (keys and values) for a classification job, custom data identifier, findings filter, or member account.
  * account **required** `object`: Specifies details for an account to associate with an Amazon Macie master account.
    * accountId
    * email

#### Output
* output [CreateMemberResponse](#creatememberresponse)

### DisassociateMember



```js
amazonaws_macie2.DisassociateMember({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
* output [DisassociateMemberResponse](#disassociatememberresponse)

### DeleteMember



```js
amazonaws_macie2.DeleteMember({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
* output [DeleteMemberResponse](#deletememberresponse)

### GetMember



```js
amazonaws_macie2.GetMember({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
* output [GetMemberResponse](#getmemberresponse)

### ListTagsForResource



```js
amazonaws_macie2.ListTagsForResource({
  "resourceArn": ""
}, context)
```

#### Input
* input `object`
  * resourceArn **required** `string`

#### Output
* output [ListTagsForResourceResponse](#listtagsforresourceresponse)

### TagResource



```js
amazonaws_macie2.TagResource({
  "resourceArn": "",
  "tags": {}
}, context)
```

#### Input
* input `object`
  * resourceArn **required** `string`
  * tags **required** `object`: A string-to-string map of key-value pairs that specifies the tags (keys and values) for a classification job, custom data identifier, findings filter, or member account.

#### Output
*Output schema unknown*

### UntagResource



```js
amazonaws_macie2.UntagResource({
  "resourceArn": "",
  "tagKeys": []
}, context)
```

#### Input
* input `object`
  * resourceArn **required** `string`
  * tagKeys **required** `array`

#### Output
*Output schema unknown*

### GetUsageTotals



```js
amazonaws_macie2.GetUsageTotals({}, context)
```

#### Input
* input `object`

#### Output
* output [GetUsageTotalsResponse](#getusagetotalsresponse)

### GetUsageStatistics



```js
amazonaws_macie2.GetUsageStatistics({}, context)
```

#### Input
* input `object`
  * maxResults `string`
  * nextToken `string`
  * filterBy `array`: An array of objects, one for each condition to use to filter the query results. If the array contains more than one object, Amazon Macie uses an AND operator to join the conditions specified by the objects.
    * items [UsageStatisticsFilter](#usagestatisticsfilter)
  * maxResults `integer`: The maximum number of items to include in each page of the response.
  * nextToken `string`: The nextToken string that specifies which page of results to return in a paginated response.
  * sortBy `object`: Specifies criteria for sorting the results of a query for account quotas and usage data.
    * key
    * orderBy

#### Output
* output [GetUsageStatisticsResponse](#getusagestatisticsresponse)



## Definitions

### AcceptInvitationRequest
* AcceptInvitationRequest `object`
  * invitationId **required**
  * masterAccount **required**

### AcceptInvitationResponse
* AcceptInvitationResponse `object`

### AccessControlList
* AccessControlList `object`: Provides information about the permissions settings of the bucket-level access control list (ACL) for an S3 bucket.
  * allowsPublicReadAccess
  * allowsPublicWriteAccess

### AccessDeniedException


### AccountDetail
* AccountDetail `object`: Specifies details for an account to associate with an Amazon Macie master account.
  * accountId **required**
  * email **required**

### AccountLevelPermissions
* AccountLevelPermissions `object`: Provides information about account-level permissions settings that apply to an S3 bucket.
  * blockPublicAccess
    * blockPublicAcls
    * blockPublicPolicy
    * ignorePublicAcls
    * restrictPublicBuckets

### AdminAccount
* AdminAccount `object`: Provides information about the delegated Amazon Macie administrator account for an AWS organization.
  * accountId
  * status

### AdminStatus
* AdminStatus `string` (values: ENABLED, DISABLING_IN_PROGRESS): The current status of an account as the delegated Amazon Macie administrator account for an AWS organization.

### ApiCallDetails
* ApiCallDetails `object`: Provides information about an API operation that an entity invoked for an affected resource.
  * api
  * apiServiceName
  * firstSeen
  * lastSeen

### AssumedRole
* AssumedRole `object`: Provides information about an identity that performed an action on an affected resource by using temporary security credentials. The credentials were obtained using the AssumeRole operation of the AWS Security Token Service (AWS STS) API.
  * accessKeyId
  * accountId
  * arn
  * principalId
  * sessionContext
    * attributes
      * creationDate
      * mfaAuthenticated
    * sessionIssuer
      * accountId
      * arn
      * principalId
      * type
      * userName

### AwsAccount
* AwsAccount `object`: Provides information about an AWS account and entity that performed an action on an affected resource. The action was performed using the credentials for an AWS account other than your own account.
  * accountId
  * principalId

### AwsService
* AwsService `object`: Provides information about an AWS service that performed an action on an affected resource.
  * invokedBy

### BatchGetCustomDataIdentifierSummary
* BatchGetCustomDataIdentifierSummary `object`: Provides information about a custom data identifier.
  * arn
  * createdAt
  * deleted
  * description
  * id
  * name

### BatchGetCustomDataIdentifiersRequest
* BatchGetCustomDataIdentifiersRequest `object`
  * ids
    * items [__string](#__string)

### BatchGetCustomDataIdentifiersResponse
* BatchGetCustomDataIdentifiersResponse `object`
  * customDataIdentifiers
    * items [BatchGetCustomDataIdentifierSummary](#batchgetcustomdataidentifiersummary)
  * notFoundIdentifierIds
    * items [__string](#__string)

### BlockPublicAccess
* BlockPublicAccess `object`: Provides information about the block public access settings for an S3 bucket. These settings can apply to a bucket at the account level or bucket level. For detailed information about each setting, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html">Using Amazon S3 block public access</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.
  * blockPublicAcls
  * blockPublicPolicy
  * ignorePublicAcls
  * restrictPublicBuckets

### BucketCountByEffectivePermission
* BucketCountByEffectivePermission `object`: Provides information about the number of S3 buckets that are publicly accessible based on a combination of permissions settings for each bucket.
  * publiclyAccessible
  * publiclyReadable
  * publiclyWritable
  * unknown

### BucketCountByEncryptionType
* BucketCountByEncryptionType `object`: Provides information about the number of S3 buckets that use certain types of server-side encryption or don't encrypt objects by default.
  * kmsManaged
  * s3Managed
  * unencrypted

### BucketCountBySharedAccessType
* BucketCountBySharedAccessType `object`: Provides information about the number of S3 buckets that are shared with other AWS accounts.
  * external
  * internal
  * notShared
  * unknown

### BucketCriteria
* BucketCriteria `object`: Specifies, as a map, one or more attribute-based conditions that filter the results of a query for information about S3 buckets.

### BucketCriteriaAdditionalProperties
* BucketCriteriaAdditionalProperties `object`: Specifies the operator to use in an attribute-based condition that filters the results of a query for information about S3 buckets.
  * eq
    * items [__string](#__string)
  * gt
  * gte
  * lt
  * lte
  * neq
    * items [__string](#__string)
  * prefix

### BucketLevelPermissions
* BucketLevelPermissions `object`: Provides information about the bucket-level permissions settings for an S3 bucket.
  * accessControlList
    * allowsPublicReadAccess
    * allowsPublicWriteAccess
  * blockPublicAccess
    * blockPublicAcls
    * blockPublicPolicy
    * ignorePublicAcls
    * restrictPublicBuckets
  * bucketPolicy
    * allowsPublicReadAccess
    * allowsPublicWriteAccess

### BucketMetadata
* BucketMetadata `object`: Provides information about an S3 bucket that Amazon Macie monitors and analyzes.
  * tags
    * items [KeyValuePair](#keyvaluepair)
  * accountId
  * bucketArn
  * bucketCreatedAt
  * bucketName
  * classifiableObjectCount
  * classifiableSizeInBytes
  * jobDetails
    * isDefinedInJob
    * isMonitoredByJob
    * lastJobId
    * lastJobRunTime
  * lastUpdated
  * objectCount
  * objectCountByEncryptionType
    * customerManaged
    * kmsManaged
    * s3Managed
    * unencrypted
  * publicAccess
    * effectivePermission
    * permissionConfiguration
      * accountLevelPermissions
        * blockPublicAccess
          * blockPublicAcls
          * blockPublicPolicy
          * ignorePublicAcls
          * restrictPublicBuckets
      * bucketLevelPermissions
        * accessControlList
          * allowsPublicReadAccess
          * allowsPublicWriteAccess
        * blockPublicAccess
          * blockPublicAcls
          * blockPublicPolicy
          * ignorePublicAcls
          * restrictPublicBuckets
        * bucketPolicy
          * allowsPublicReadAccess
          * allowsPublicWriteAccess
  * region
  * replicationDetails
    * replicated
    * replicatedExternally
    * replicationAccounts
      * items [__string](#__string)
  * sharedAccess
  * sizeInBytes
  * sizeInBytesCompressed
  * unclassifiableObjectCount
    * fileType
    * storageClass
    * total
  * unclassifiableObjectSizeInBytes
    * fileType
    * storageClass
    * total
  * versioning

### BucketPermissionConfiguration
* BucketPermissionConfiguration `object`: Provides information about the account-level and bucket-level permissions settings for an S3 bucket.
  * accountLevelPermissions
    * blockPublicAccess
      * blockPublicAcls
      * blockPublicPolicy
      * ignorePublicAcls
      * restrictPublicBuckets
  * bucketLevelPermissions
    * accessControlList
      * allowsPublicReadAccess
      * allowsPublicWriteAccess
    * blockPublicAccess
      * blockPublicAcls
      * blockPublicPolicy
      * ignorePublicAcls
      * restrictPublicBuckets
    * bucketPolicy
      * allowsPublicReadAccess
      * allowsPublicWriteAccess

### BucketPolicy
* BucketPolicy `object`: Provides information about the permissions settings of a bucket policy for an S3 bucket.
  * allowsPublicReadAccess
  * allowsPublicWriteAccess

### BucketPublicAccess
* BucketPublicAccess `object`: Provides information about the permissions settings that determine whether an S3 bucket is publicly accessible.
  * effectivePermission
  * permissionConfiguration
    * accountLevelPermissions
      * blockPublicAccess
        * blockPublicAcls
        * blockPublicPolicy
        * ignorePublicAcls
        * restrictPublicBuckets
    * bucketLevelPermissions
      * accessControlList
        * allowsPublicReadAccess
        * allowsPublicWriteAccess
      * blockPublicAccess
        * blockPublicAcls
        * blockPublicPolicy
        * ignorePublicAcls
        * restrictPublicBuckets
      * bucketPolicy
        * allowsPublicReadAccess
        * allowsPublicWriteAccess

### BucketSortCriteria
* BucketSortCriteria `object`: Specifies criteria for sorting the results of a query for information about S3 buckets.
  * attributeName
  * orderBy

### Cell
* Cell `object`: Specifies the location of an occurrence of sensitive data in a Microsoft Excel workbook, CSV file, or TSV file.
  * cellReference
  * column
  * columnName
  * row

### Cells
* Cells `array`: Specifies the location of occurrences of sensitive data in a Microsoft Excel workbook, CSV file, or TSV file.
  * items [Cell](#cell)

### ClassificationDetails
* ClassificationDetails `object`: Provides information about a sensitive data finding, including the classification job that produced the finding.
  * detailedResultsLocation
  * jobArn
  * jobId
  * result
    * additionalOccurrences
    * customDataIdentifiers
      * detections
        * items [CustomDetection](#customdetection)
      * totalCount
    * mimeType
    * sensitiveData
      * items [SensitiveDataItem](#sensitivedataitem)
    * sizeClassified
    * status
      * code
      * reason

### ClassificationExportConfiguration
* ClassificationExportConfiguration `object`: Specifies where to store data classification results, and the encryption settings to use when storing results in that location. Currently, you can store classification results only in an S3 bucket.
  * s3Destination
    * bucketName **required**
    * keyPrefix
    * kmsKeyArn **required**

### ClassificationResult
* ClassificationResult `object`: Provides the details of a sensitive data finding, including the types, number of occurrences, and locations of the sensitive data that was detected.
  * additionalOccurrences
  * customDataIdentifiers
    * detections
      * items [CustomDetection](#customdetection)
    * totalCount
  * mimeType
  * sensitiveData
    * items [SensitiveDataItem](#sensitivedataitem)
  * sizeClassified
  * status
    * code
    * reason

### ClassificationResultStatus
* ClassificationResultStatus `object`: Provides information about the status of a sensitive data finding.
  * code
  * reason

### ConflictException


### CreateClassificationJobRequest
* CreateClassificationJobRequest `object`
  * tags
  * clientToken **required**
  * customDataIdentifierIds
    * items [__string](#__string)
  * description
  * initialRun
  * jobType **required**
  * name **required**
  * s3JobDefinition **required**
    * bucketDefinitions
      * items [S3BucketDefinitionForJob](#s3bucketdefinitionforjob)
    * scoping
      * excludes
        * and
          * items [JobScopeTerm](#jobscopeterm)
      * includes
        * and
          * items [JobScopeTerm](#jobscopeterm)
  * samplingPercentage
  * scheduleFrequency
    * dailySchedule
    * monthlySchedule
      * dayOfMonth
    * weeklySchedule
      * dayOfWeek

### CreateClassificationJobResponse
* CreateClassificationJobResponse `object`
  * jobArn
  * jobId

### CreateCustomDataIdentifierRequest
* CreateCustomDataIdentifierRequest `object`
  * tags
  * clientToken
  * description
  * ignoreWords
    * items [__string](#__string)
  * keywords
    * items [__string](#__string)
  * maximumMatchDistance
  * name
  * regex

### CreateCustomDataIdentifierResponse
* CreateCustomDataIdentifierResponse `object`
  * customDataIdentifierId

### CreateFindingsFilterRequest
* CreateFindingsFilterRequest `object`
  * tags
  * action **required**
  * clientToken
  * description
  * findingCriteria **required**
    * criterion
  * name **required**
  * position

### CreateFindingsFilterResponse
* CreateFindingsFilterResponse `object`
  * arn
  * id

### CreateInvitationsRequest
* CreateInvitationsRequest `object`
  * accountIds **required**
    * items [__string](#__string)
  * disableEmailNotification
  * message

### CreateInvitationsResponse
* CreateInvitationsResponse `object`
  * unprocessedAccounts
    * items [UnprocessedAccount](#unprocessedaccount)

### CreateMemberRequest
* CreateMemberRequest `object`
  * tags
  * account **required**
    * accountId **required**
    * email **required**

### CreateMemberResponse
* CreateMemberResponse `object`
  * arn

### CreateSampleFindingsRequest
* CreateSampleFindingsRequest `object`
  * findingTypes
    * items [FindingType](#findingtype)

### CreateSampleFindingsResponse
* CreateSampleFindingsResponse `object`

### Criterion
* Criterion `object`: Specifies a condition that defines a property, operator, and value to use to filter the results of a query for findings.

### CriterionAdditionalProperties
* CriterionAdditionalProperties `object`: Specifies the operator to use in a property-based condition that filters the results of a query for findings.
  * eq
    * items [__string](#__string)
  * eqExactMatch
    * items [__string](#__string)
  * gt
  * gte
  * lt
  * lte
  * neq
    * items [__string](#__string)

### Currency
* Currency `string` (values: USD): The type of currency that data for a usage metric is reported in. Possible values are:

### CustomDataIdentifierSummary
* CustomDataIdentifierSummary `object`: Provides information about a custom data identifier.
  * arn
  * createdAt
  * description
  * id
  * name

### CustomDataIdentifiers
* CustomDataIdentifiers `object`: Provides information about custom data identifiers that produced a sensitive data finding, and the number of occurrences of the data that they detected for the finding.
  * detections
    * items [CustomDetection](#customdetection)
  * totalCount

### CustomDetection
* CustomDetection `object`: Provides information about a custom data identifier that produced a sensitive data finding, and the sensitive data that it detected for the finding.
  * arn
  * count
  * name
  * occurrences
    * cells
      * items [Cell](#cell)
    * lineRanges
      * items [Range](#range)
    * offsetRanges
      * items [Range](#range)
    * pages
      * items [Page](#page)
    * records
      * items [Record](#record)

### CustomDetections
* CustomDetections `array`: Provides information about custom data identifiers that produced a sensitive data finding, and the number of occurrences of the data that each identifier detected.
  * items [CustomDetection](#customdetection)

### DailySchedule
* DailySchedule `object`: Specifies that a classification job runs once a day, every day. This is an empty object.

### DayOfWeek
* DayOfWeek `string` (values: SUNDAY, MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY)

### DeclineInvitationsRequest
* DeclineInvitationsRequest `object`
  * accountIds **required**
    * items [__string](#__string)

### DeclineInvitationsResponse
* DeclineInvitationsResponse `object`
  * unprocessedAccounts
    * items [UnprocessedAccount](#unprocessedaccount)

### DefaultDetection
* DefaultDetection `object`: Provides information about a type of sensitive data that was detected by managed data identifiers and produced a sensitive data finding.
  * count
  * occurrences
    * cells
      * items [Cell](#cell)
    * lineRanges
      * items [Range](#range)
    * offsetRanges
      * items [Range](#range)
    * pages
      * items [Page](#page)
    * records
      * items [Record](#record)
  * type

### DefaultDetections
* DefaultDetections `array`: Provides information about sensitive data that was detected by managed data identifiers and produced a sensitive data finding, and the number of occurrences of each type of sensitive data that was detected.
  * items [DefaultDetection](#defaultdetection)

### DeleteCustomDataIdentifierRequest
* DeleteCustomDataIdentifierRequest `object`

### DeleteCustomDataIdentifierResponse
* DeleteCustomDataIdentifierResponse `object`

### DeleteFindingsFilterRequest
* DeleteFindingsFilterRequest `object`

### DeleteFindingsFilterResponse
* DeleteFindingsFilterResponse `object`

### DeleteInvitationsRequest
* DeleteInvitationsRequest `object`
  * accountIds **required**
    * items [__string](#__string)

### DeleteInvitationsResponse
* DeleteInvitationsResponse `object`
  * unprocessedAccounts
    * items [UnprocessedAccount](#unprocessedaccount)

### DeleteMemberRequest
* DeleteMemberRequest `object`

### DeleteMemberResponse
* DeleteMemberResponse `object`

### DescribeBucketsRequest
* DescribeBucketsRequest `object`
  * criteria
  * maxResults
  * nextToken
  * sortCriteria
    * attributeName
    * orderBy

### DescribeBucketsResponse
* DescribeBucketsResponse `object`
  * buckets
    * items [BucketMetadata](#bucketmetadata)
  * nextToken

### DescribeClassificationJobRequest
* DescribeClassificationJobRequest `object`

### DescribeClassificationJobResponse
* DescribeClassificationJobResponse `object`
  * tags
  * clientToken
  * createdAt
  * customDataIdentifierIds
    * items [__string](#__string)
  * description
  * initialRun
  * jobArn
  * jobId
  * jobStatus
  * jobType
  * lastRunErrorStatus
    * code
  * lastRunTime
  * name
  * s3JobDefinition
    * bucketDefinitions
      * items [S3BucketDefinitionForJob](#s3bucketdefinitionforjob)
    * scoping
      * excludes
        * and
          * items [JobScopeTerm](#jobscopeterm)
      * includes
        * and
          * items [JobScopeTerm](#jobscopeterm)
  * samplingPercentage
  * scheduleFrequency
    * dailySchedule
    * monthlySchedule
      * dayOfMonth
    * weeklySchedule
      * dayOfWeek
  * statistics
    * approximateNumberOfObjectsToProcess
    * numberOfRuns
  * userPausedDetails
    * jobExpiresAt
    * jobImminentExpirationHealthEventArn
    * jobPausedAt

### DescribeOrganizationConfigurationRequest
* DescribeOrganizationConfigurationRequest `object`

### DescribeOrganizationConfigurationResponse
* DescribeOrganizationConfigurationResponse `object`
  * autoEnable
  * maxAccountLimitReached

### DisableMacieRequest
* DisableMacieRequest `object`

### DisableMacieResponse
* DisableMacieResponse `object`

### DisableOrganizationAdminAccountRequest
* DisableOrganizationAdminAccountRequest `object`

### DisableOrganizationAdminAccountResponse
* DisableOrganizationAdminAccountResponse `object`

### DisassociateFromMasterAccountRequest
* DisassociateFromMasterAccountRequest `object`

### DisassociateFromMasterAccountResponse
* DisassociateFromMasterAccountResponse `object`

### DisassociateMemberRequest
* DisassociateMemberRequest `object`

### DisassociateMemberResponse
* DisassociateMemberResponse `object`

### DomainDetails
* DomainDetails `object`: Provides information about the domain name of the device that an entity used to perform an action on an affected resource.
  * domainName

### EffectivePermission
* EffectivePermission `string` (values: PUBLIC, NOT_PUBLIC, UNKNOWN)

### EnableMacieRequest
* EnableMacieRequest `object`
  * clientToken
  * findingPublishingFrequency
  * status

### EnableMacieResponse
* EnableMacieResponse `object`

### EnableOrganizationAdminAccountRequest
* EnableOrganizationAdminAccountRequest `object`
  * adminAccountId **required**
  * clientToken

### EnableOrganizationAdminAccountResponse
* EnableOrganizationAdminAccountResponse `object`

### EncryptionType
* EncryptionType `string` (values: NONE, AES256, aws:kms, UNKNOWN): The type of server-side encryption that's used to encrypt an S3 object or objects in an S3 bucket. Valid values are:

### ErrorCode
* ErrorCode `string` (values: ClientError, InternalError): The source of an error, issue, or delay. Possible values are:

### FederatedUser
* FederatedUser `object`: Provides information about an identity that performed an action on an affected resource by using temporary security credentials. The credentials were obtained using the GetFederationToken operation of the AWS Security Token Service (AWS STS) API.
  * accessKeyId
  * accountId
  * arn
  * principalId
  * sessionContext
    * attributes
      * creationDate
      * mfaAuthenticated
    * sessionIssuer
      * accountId
      * arn
      * principalId
      * type
      * userName

### Finding
* Finding `object`: Provides the details of a finding.
  * accountId
  * archived
  * category
  * classificationDetails
    * detailedResultsLocation
    * jobArn
    * jobId
    * result
      * additionalOccurrences
      * customDataIdentifiers
        * detections
          * items [CustomDetection](#customdetection)
        * totalCount
      * mimeType
      * sensitiveData
        * items [SensitiveDataItem](#sensitivedataitem)
      * sizeClassified
      * status
        * code
        * reason
  * count
  * createdAt
  * description
  * id
  * partition
  * policyDetails
    * action
      * actionType
      * apiCallDetails
        * api
        * apiServiceName
        * firstSeen
        * lastSeen
    * actor
      * domainDetails
        * domainName
      * ipAddressDetails
        * ipAddressV4
        * ipCity
          * name
        * ipCountry
          * code
          * name
        * ipGeoLocation
          * lat
          * lon
        * ipOwner
          * asn
          * asnOrg
          * isp
          * org
      * userIdentity
        * assumedRole
          * accessKeyId
          * accountId
          * arn
          * principalId
          * sessionContext
        * awsAccount
          * accountId
          * principalId
        * awsService
          * invokedBy
        * federatedUser
          * accessKeyId
          * accountId
          * arn
          * principalId
          * sessionContext
        * iamUser
          * accountId
          * arn
          * principalId
          * userName
        * root
          * accountId
          * arn
          * principalId
        * type
  * region
  * resourcesAffected
    * s3Bucket
      * tags
        * items [KeyValuePair](#keyvaluepair)
      * arn
      * createdAt
      * defaultServerSideEncryption
        * encryptionType
        * kmsMasterKeyId
      * name
      * owner
        * displayName
        * id
      * publicAccess
        * effectivePermission
        * permissionConfiguration
          * accountLevelPermissions
          * bucketLevelPermissions
    * s3Object
      * tags
        * items [KeyValuePair](#keyvaluepair)
      * bucketArn
      * eTag
      * extension
      * key
      * lastModified
      * path
      * publicAccess
      * serverSideEncryption
        * encryptionType
        * kmsMasterKeyId
      * size
      * storageClass
      * versionId
  * sample
  * schemaVersion
  * severity
    * description
    * score
  * title
  * type
  * updatedAt

### FindingAction
* FindingAction `object`: Provides information about an action that occurred for a resource and produced a policy finding.
  * actionType
  * apiCallDetails
    * api
    * apiServiceName
    * firstSeen
    * lastSeen

### FindingActionType
* FindingActionType `string` (values: AWS_API_CALL): The type of action that occurred for the resource and produced the policy finding:

### FindingActor
* FindingActor `object`: Provides information about an entity that performed an action that produced a policy finding for a resource.
  * domainDetails
    * domainName
  * ipAddressDetails
    * ipAddressV4
    * ipCity
      * name
    * ipCountry
      * code
      * name
    * ipGeoLocation
      * lat
      * lon
    * ipOwner
      * asn
      * asnOrg
      * isp
      * org
  * userIdentity
    * assumedRole
      * accessKeyId
      * accountId
      * arn
      * principalId
      * sessionContext
        * attributes
          * creationDate
          * mfaAuthenticated
        * sessionIssuer
          * accountId
          * arn
          * principalId
          * type
          * userName
    * awsAccount
      * accountId
      * principalId
    * awsService
      * invokedBy
    * federatedUser
      * accessKeyId
      * accountId
      * arn
      * principalId
      * sessionContext
        * attributes
          * creationDate
          * mfaAuthenticated
        * sessionIssuer
          * accountId
          * arn
          * principalId
          * type
          * userName
    * iamUser
      * accountId
      * arn
      * principalId
      * userName
    * root
      * accountId
      * arn
      * principalId
    * type

### FindingCategory
* FindingCategory `string` (values: CLASSIFICATION, POLICY): The category of the finding. Valid values are:

### FindingCriteria
* FindingCriteria `object`: Specifies, as a map, one or more property-based conditions that filter the results of a query for findings.
  * criterion

### FindingPublishingFrequency
* FindingPublishingFrequency `string` (values: FIFTEEN_MINUTES, ONE_HOUR, SIX_HOURS): The frequency with which Amazon Macie publishes updates to policy findings for an account. This includes publishing updates to AWS Security Hub and Amazon EventBridge (formerly called Amazon CloudWatch Events). Valid values are:

### FindingStatisticsSortAttributeName
* FindingStatisticsSortAttributeName `string` (values: groupKey, count): The grouping to sort the results by. Valid values are:

### FindingStatisticsSortCriteria
* FindingStatisticsSortCriteria `object`: Specifies criteria for sorting the results of a query that retrieves aggregated statistical data about findings.
  * attributeName
  * orderBy

### FindingType
* FindingType `string` (values: SensitiveData:S3Object/Multiple, SensitiveData:S3Object/Financial, SensitiveData:S3Object/Personal, SensitiveData:S3Object/Credentials, SensitiveData:S3Object/CustomIdentifier, Policy:IAMUser/S3BucketPublic, Policy:IAMUser/S3BucketSharedExternally, Policy:IAMUser/S3BucketReplicatedExternally, Policy:IAMUser/S3BucketEncryptionDisabled, Policy:IAMUser/S3BlockPublicAccessDisabled): The type of finding. For details about each type, see <a href="https://docs.aws.amazon.com/macie/latest/user/findings-types.html">Types of Amazon Macie findings</a> in the <i>Amazon Macie User Guide</i>. Valid values are:

### FindingsFilterAction
* FindingsFilterAction `string` (values: ARCHIVE, NOOP): The action to perform on findings that meet the filter criteria. To suppress (automatically archive) findings that meet the criteria, set this value to ARCHIVE. Valid values are:

### FindingsFilterListItem
* FindingsFilterListItem `object`: Provides information about a findings filter.
  * tags
  * action
  * arn
  * id
  * name

### GetBucketStatisticsRequest
* GetBucketStatisticsRequest `object`
  * accountId

### GetBucketStatisticsResponse
* GetBucketStatisticsResponse `object`
  * bucketCount
  * bucketCountByEffectivePermission
    * publiclyAccessible
    * publiclyReadable
    * publiclyWritable
    * unknown
  * bucketCountByEncryptionType
    * kmsManaged
    * s3Managed
    * unencrypted
  * bucketCountBySharedAccessType
    * external
    * internal
    * notShared
    * unknown
  * classifiableObjectCount
  * classifiableSizeInBytes
  * lastUpdated
  * objectCount
  * sizeInBytes
  * sizeInBytesCompressed
  * unclassifiableObjectCount
    * fileType
    * storageClass
    * total
  * unclassifiableObjectSizeInBytes
    * fileType
    * storageClass
    * total

### GetClassificationExportConfigurationRequest
* GetClassificationExportConfigurationRequest `object`

### GetClassificationExportConfigurationResponse
* GetClassificationExportConfigurationResponse `object`
  * configuration
    * s3Destination
      * bucketName **required**
      * keyPrefix
      * kmsKeyArn **required**

### GetCustomDataIdentifierRequest
* GetCustomDataIdentifierRequest `object`

### GetCustomDataIdentifierResponse
* GetCustomDataIdentifierResponse `object`
  * tags
  * arn
  * createdAt
  * deleted
  * description
  * id
  * ignoreWords
    * items [__string](#__string)
  * keywords
    * items [__string](#__string)
  * maximumMatchDistance
  * name
  * regex

### GetFindingStatisticsRequest
* GetFindingStatisticsRequest `object`
  * findingCriteria
    * criterion
  * groupBy **required**
  * size
  * sortCriteria
    * attributeName
    * orderBy

### GetFindingStatisticsResponse
* GetFindingStatisticsResponse `object`
  * countsByGroup
    * items [GroupCount](#groupcount)

### GetFindingsFilterRequest
* GetFindingsFilterRequest `object`

### GetFindingsFilterResponse
* GetFindingsFilterResponse `object`
  * tags
  * action
  * arn
  * description
  * findingCriteria
    * criterion
  * id
  * name
  * position

### GetFindingsRequest
* GetFindingsRequest `object`
  * findingIds **required**
    * items [__string](#__string)
  * sortCriteria
    * attributeName
    * orderBy

### GetFindingsResponse
* GetFindingsResponse `object`
  * findings
    * items [Finding](#finding)

### GetInvitationsCountRequest
* GetInvitationsCountRequest `object`

### GetInvitationsCountResponse
* GetInvitationsCountResponse `object`
  * invitationsCount

### GetMacieSessionRequest
* GetMacieSessionRequest `object`

### GetMacieSessionResponse
* GetMacieSessionResponse `object`
  * createdAt
  * findingPublishingFrequency
  * serviceRole
  * status
  * updatedAt

### GetMasterAccountRequest
* GetMasterAccountRequest `object`

### GetMasterAccountResponse
* GetMasterAccountResponse `object`
  * master
    * accountId
    * invitationId
    * invitedAt
    * relationshipStatus

### GetMemberRequest
* GetMemberRequest `object`

### GetMemberResponse
* GetMemberResponse `object`
  * tags
  * accountId
  * arn
  * email
  * invitedAt
  * masterAccountId
  * relationshipStatus
  * updatedAt

### GetUsageStatisticsRequest
* GetUsageStatisticsRequest `object`
  * filterBy
    * items [UsageStatisticsFilter](#usagestatisticsfilter)
  * maxResults
  * nextToken
  * sortBy
    * key
    * orderBy

### GetUsageStatisticsResponse
* GetUsageStatisticsResponse `object`
  * nextToken
  * records
    * items [UsageRecord](#usagerecord)

### GetUsageTotalsRequest
* GetUsageTotalsRequest `object`

### GetUsageTotalsResponse
* GetUsageTotalsResponse `object`
  * usageTotals
    * items [UsageTotal](#usagetotal)

### GroupBy
* GroupBy `string` (values: resourcesAffected.s3Bucket.name, type, classificationDetails.jobId, severity.description)

### GroupCount
* GroupCount `object`: Provides a group of results for a query that retrieved aggregated statistical data about findings.
  * count
  * groupKey

### IamUser
* IamUser `object`: Provides information about an AWS Identity and Access Management (IAM) user who performed an action on an affected resource.
  * accountId
  * arn
  * principalId
  * userName

### InternalServerException


### Invitation
* Invitation `object`: Provides information about an Amazon Macie membership invitation that was received by an account.
  * accountId
  * invitationId
  * invitedAt
  * relationshipStatus

### IpAddressDetails
* IpAddressDetails `object`: Provides information about the IP address of the device that an entity used to perform an action on an affected resource.
  * ipAddressV4
  * ipCity
    * name
  * ipCountry
    * code
    * name
  * ipGeoLocation
    * lat
    * lon
  * ipOwner
    * asn
    * asnOrg
    * isp
    * org

### IpCity
* IpCity `object`: Provides information about the city that an IP address originated from.
  * name

### IpCountry
* IpCountry `object`: Provides information about the country that an IP address originated from.
  * code
  * name

### IpGeoLocation
* IpGeoLocation `object`: Provides geographic coordinates that indicate where a specified IP address originated from.
  * lat
  * lon

### IpOwner
* IpOwner `object`: Provides information about the registered owner of an IP address.
  * asn
  * asnOrg
  * isp
  * org

### IsDefinedInJob
* IsDefinedInJob `string` (values: TRUE, FALSE, UNKNOWN)

### IsMonitoredByJob
* IsMonitoredByJob `string` (values: TRUE, FALSE, UNKNOWN)

### JobComparator
* JobComparator `string` (values: EQ, GT, GTE, LT, LTE, NE, CONTAINS): The operator to use in a condition. Valid values are:

### JobDetails
* JobDetails `object`: Specifies whether any one-time or recurring classification jobs are configured to analyze data in an S3 bucket, and, if so, the details of the job that ran most recently.
  * isDefinedInJob
  * isMonitoredByJob
  * lastJobId
  * lastJobRunTime

### JobScheduleFrequency
* JobScheduleFrequency `object`: Specifies the recurrence pattern for running a classification job.
  * dailySchedule
  * monthlySchedule
    * dayOfMonth
  * weeklySchedule
    * dayOfWeek

### JobScopeTerm
* JobScopeTerm `object`: Specifies a property- or tag-based condition that defines criteria for including or excluding objects from a classification job.
  * simpleScopeTerm
    * comparator
    * key
    * values
      * items [__string](#__string)
  * tagScopeTerm
    * comparator
    * key
    * tagValues
      * items [TagValuePair](#tagvaluepair)
    * target

### JobScopingBlock
* JobScopingBlock `object`: Specifies one or more property- and tag-based conditions that define criteria for including or excluding objects from a classification job. If you specify more than one condition, Amazon Macie uses an AND operator to join the conditions.
  * and
    * items [JobScopeTerm](#jobscopeterm)

### JobStatus
* JobStatus `string` (values: RUNNING, PAUSED, CANCELLED, COMPLETE, IDLE, USER_PAUSED): The status of a classification job. Possible values are:

### JobSummary
* JobSummary `object`: Provides information about a classification job, including the current status of the job.
  * bucketDefinitions
    * items [S3BucketDefinitionForJob](#s3bucketdefinitionforjob)
  * createdAt
  * jobId
  * jobStatus
  * jobType
  * lastRunErrorStatus
    * code
  * name
  * userPausedDetails
    * jobExpiresAt
    * jobImminentExpirationHealthEventArn
    * jobPausedAt

### JobType
* JobType `string` (values: ONE_TIME, SCHEDULED): The schedule for running a classification job. Valid values are:

### KeyValuePair
* KeyValuePair `object`: Provides information about the tags that are associated with an S3 bucket or object. Each tag consists of a required tag key and an associated tag value.
  * key
  * value

### KeyValuePairList
* KeyValuePairList `array`: Provides information about the tags that are associated with an S3 bucket or object. Each tag consists of a required tag key and an associated tag value.
  * items [KeyValuePair](#keyvaluepair)

### LastRunErrorStatus
* LastRunErrorStatus `object`: Specifies whether any account- or bucket-level access errors occurred when a classification job ran. For example, the job is configured to analyze data for a member account that was suspended, or the job is configured to analyze an S3 bucket that Amazon Macie isn't allowed to access.
  * code

### LastRunErrorStatusCode
* LastRunErrorStatusCode `string` (values: NONE, ERROR): Specifies whether any account- or bucket-level access errors occurred during the run of a one-time classification job or the most recent run of a recurring classification job. Possible values are:

### ListClassificationJobsRequest
* ListClassificationJobsRequest `object`
  * filterCriteria
    * excludes
      * items [ListJobsFilterTerm](#listjobsfilterterm)
    * includes
      * items [ListJobsFilterTerm](#listjobsfilterterm)
  * maxResults
  * nextToken
  * sortCriteria
    * attributeName
    * orderBy

### ListClassificationJobsResponse
* ListClassificationJobsResponse `object`
  * items
    * items [JobSummary](#jobsummary)
  * nextToken

### ListCustomDataIdentifiersRequest
* ListCustomDataIdentifiersRequest `object`
  * maxResults
  * nextToken

### ListCustomDataIdentifiersResponse
* ListCustomDataIdentifiersResponse `object`
  * items
    * items [CustomDataIdentifierSummary](#customdataidentifiersummary)
  * nextToken

### ListFindingsFiltersRequest
* ListFindingsFiltersRequest `object`

### ListFindingsFiltersResponse
* ListFindingsFiltersResponse `object`
  * findingsFilterListItems
    * items [FindingsFilterListItem](#findingsfilterlistitem)
  * nextToken

### ListFindingsRequest
* ListFindingsRequest `object`
  * findingCriteria
    * criterion
  * maxResults
  * nextToken
  * sortCriteria
    * attributeName
    * orderBy

### ListFindingsResponse
* ListFindingsResponse `object`
  * findingIds
    * items [__string](#__string)
  * nextToken

### ListInvitationsRequest
* ListInvitationsRequest `object`

### ListInvitationsResponse
* ListInvitationsResponse `object`
  * invitations
    * items [Invitation](#invitation)
  * nextToken

### ListJobsFilterCriteria
* ListJobsFilterCriteria `object`: Specifies criteria for filtering the results of a request for information about classification jobs.
  * excludes
    * items [ListJobsFilterTerm](#listjobsfilterterm)
  * includes
    * items [ListJobsFilterTerm](#listjobsfilterterm)

### ListJobsFilterKey
* ListJobsFilterKey `string` (values: jobType, jobStatus, createdAt, name): The property to use to filter the results. Valid values are:

### ListJobsFilterTerm
* ListJobsFilterTerm `object`: Specifies a condition that filters the results of a request for information about classification jobs. Each condition consists of a property, an operator, and one or more values.
  * comparator
  * key
  * values
    * items [__string](#__string)

### ListJobsSortAttributeName
* ListJobsSortAttributeName `string` (values: createdAt, jobStatus, name, jobType): The property to sort the results by. Valid values are:

### ListJobsSortCriteria
* ListJobsSortCriteria `object`: Specifies criteria for sorting the results of a request for information about classification jobs.
  * attributeName
  * orderBy

### ListMembersRequest
* ListMembersRequest `object`

### ListMembersResponse
* ListMembersResponse `object`
  * members
    * items [Member](#member)
  * nextToken

### ListOrganizationAdminAccountsRequest
* ListOrganizationAdminAccountsRequest `object`

### ListOrganizationAdminAccountsResponse
* ListOrganizationAdminAccountsResponse `object`
  * adminAccounts
    * items [AdminAccount](#adminaccount)
  * nextToken

### ListTagsForResourceRequest
* ListTagsForResourceRequest `object`

### ListTagsForResourceResponse
* ListTagsForResourceResponse `object`
  * tags

### MacieStatus
* MacieStatus `string` (values: PAUSED, ENABLED): The status of an Amazon Macie account. Valid values are:

### MaxResults
* MaxResults `integer`

### Member
* Member `object`: Provides information about an account that's associated with an Amazon Macie master account.
  * tags
  * accountId
  * arn
  * email
  * invitedAt
  * masterAccountId
  * relationshipStatus
  * updatedAt

### MonthlySchedule
* MonthlySchedule `object`: Specifies a monthly recurrence pattern for running a classification job.
  * dayOfMonth

### ObjectCountByEncryptionType
* ObjectCountByEncryptionType `object`: Provides information about the number of objects that are in an S3 bucket and use certain types of server-side encryption, use client-side encryption, or aren't encrypted.
  * customerManaged
  * kmsManaged
  * s3Managed
  * unencrypted

### ObjectLevelStatistics
* ObjectLevelStatistics `object`: Provides information about the total storage size (in bytes) or number of objects that Amazon Macie can't analyze in one or more S3 buckets. In a BucketMetadata object, this data is for a specific bucket. In a GetBucketStatisticsResponse object, this data is aggregated for all the buckets in the query results.
  * fileType
  * storageClass
  * total

### Occurrences
* Occurrences `object`: Provides the location of 1-15 occurrences of sensitive data that was detected by managed data identifiers or a custom data identifier and produced a sensitive data finding.
  * cells
    * items [Cell](#cell)
  * lineRanges
    * items [Range](#range)
  * offsetRanges
    * items [Range](#range)
  * pages
    * items [Page](#page)
  * records
    * items [Record](#record)

### OrderBy
* OrderBy `string` (values: ASC, DESC)

### Page
* Page `object`: Specifies the location of an occurrence of sensitive data in an Adobe Portable Document Format file.
  * lineRange
    * end
    * start
    * startColumn
  * offsetRange
    * end
    * start
    * startColumn
  * pageNumber

### Pages
* Pages `array`: Specifies the location of occurrences of sensitive data in an Adobe Portable Document Format file.
  * items [Page](#page)

### PolicyDetails
* PolicyDetails `object`: Provides the details of a policy finding.
  * action
    * actionType
    * apiCallDetails
      * api
      * apiServiceName
      * firstSeen
      * lastSeen
  * actor
    * domainDetails
      * domainName
    * ipAddressDetails
      * ipAddressV4
      * ipCity
        * name
      * ipCountry
        * code
        * name
      * ipGeoLocation
        * lat
        * lon
      * ipOwner
        * asn
        * asnOrg
        * isp
        * org
    * userIdentity
      * assumedRole
        * accessKeyId
        * accountId
        * arn
        * principalId
        * sessionContext
          * attributes
          * sessionIssuer
      * awsAccount
        * accountId
        * principalId
      * awsService
        * invokedBy
      * federatedUser
        * accessKeyId
        * accountId
        * arn
        * principalId
        * sessionContext
          * attributes
          * sessionIssuer
      * iamUser
        * accountId
        * arn
        * principalId
        * userName
      * root
        * accountId
        * arn
        * principalId
      * type

### PutClassificationExportConfigurationRequest
* PutClassificationExportConfigurationRequest `object`
  * configuration **required**
    * s3Destination
      * bucketName **required**
      * keyPrefix
      * kmsKeyArn **required**

### PutClassificationExportConfigurationResponse
* PutClassificationExportConfigurationResponse `object`
  * configuration
    * s3Destination
      * bucketName **required**
      * keyPrefix
      * kmsKeyArn **required**

### Range
* Range `object`: Provides details about the location of an occurrence of sensitive data in an Adobe Portable Document Format file, Microsoft Word document, or non-binary text file.
  * end
  * start
  * startColumn

### Ranges
* Ranges `array`: Provides details about the location of occurrences of sensitive data in an Adobe Portable Document Format file, Microsoft Word document, or non-binary text file.
  * items [Range](#range)

### Record
* Record `object`: Specifies the location of an occurrence of sensitive data in an Apache Avro object container or Apache Parquet file.
  * jsonPath
  * recordIndex

### Records
* Records `array`: Specifies the location of occurrences of sensitive data in an Apache Parquet file.
  * items [Record](#record)

### RelationshipStatus
* RelationshipStatus `string` (values: Enabled, Paused, Invited, Created, Removed, Resigned, EmailVerificationInProgress, EmailVerificationFailed, RegionDisabled, AccountSuspended): The current status of the relationship between an account and an associated Amazon Macie master account (<i>inviter account</i>). Possible values are:

### ReplicationDetails
* ReplicationDetails `object`: Provides information about settings that define whether one or more objects in an S3 bucket are replicated to S3 buckets for other AWS accounts and, if so, which accounts.
  * replicated
  * replicatedExternally
  * replicationAccounts
    * items [__string](#__string)

### ResourceNotFoundException


### ResourcesAffected
* ResourcesAffected `object`: Provides information about the resources that a finding applies to.
  * s3Bucket
    * tags
      * items [KeyValuePair](#keyvaluepair)
    * arn
    * createdAt
    * defaultServerSideEncryption
      * encryptionType
      * kmsMasterKeyId
    * name
    * owner
      * displayName
      * id
    * publicAccess
      * effectivePermission
      * permissionConfiguration
        * accountLevelPermissions
          * blockPublicAccess
        * bucketLevelPermissions
          * accessControlList
          * blockPublicAccess
          * bucketPolicy
  * s3Object
    * tags
      * items [KeyValuePair](#keyvaluepair)
    * bucketArn
    * eTag
    * extension
    * key
    * lastModified
    * path
    * publicAccess
    * serverSideEncryption
      * encryptionType
      * kmsMasterKeyId
    * size
    * storageClass
    * versionId

### S3Bucket
* S3Bucket `object`: Provides information about an S3 bucket that a finding applies to.
  * tags
    * items [KeyValuePair](#keyvaluepair)
  * arn
  * createdAt
  * defaultServerSideEncryption
    * encryptionType
    * kmsMasterKeyId
  * name
  * owner
    * displayName
    * id
  * publicAccess
    * effectivePermission
    * permissionConfiguration
      * accountLevelPermissions
        * blockPublicAccess
          * blockPublicAcls
          * blockPublicPolicy
          * ignorePublicAcls
          * restrictPublicBuckets
      * bucketLevelPermissions
        * accessControlList
          * allowsPublicReadAccess
          * allowsPublicWriteAccess
        * blockPublicAccess
          * blockPublicAcls
          * blockPublicPolicy
          * ignorePublicAcls
          * restrictPublicBuckets
        * bucketPolicy
          * allowsPublicReadAccess
          * allowsPublicWriteAccess

### S3BucketDefinitionForJob
* S3BucketDefinitionForJob `object`: Specifies which AWS account owns the S3 buckets that a classification job analyzes, and the buckets to analyze for the account.
  * accountId
  * buckets
    * items [__string](#__string)

### S3BucketOwner
* S3BucketOwner `object`: Provides information about the user who owns an S3 bucket.
  * displayName
  * id

### S3Destination
* S3Destination `object`: Specifies an S3 bucket to store data classification results in, and the encryption settings to use when storing results in that bucket.
  * bucketName **required**
  * keyPrefix
  * kmsKeyArn **required**

### S3JobDefinition
* S3JobDefinition `object`: Specifies which S3 buckets contain the objects that a classification job analyzes, and the scope of that analysis.
  * bucketDefinitions
    * items [S3BucketDefinitionForJob](#s3bucketdefinitionforjob)
  * scoping
    * excludes
      * and
        * items [JobScopeTerm](#jobscopeterm)
    * includes
      * and
        * items [JobScopeTerm](#jobscopeterm)

### S3Object
* S3Object `object`: Provides information about an S3 object that a finding applies to.
  * tags
    * items [KeyValuePair](#keyvaluepair)
  * bucketArn
  * eTag
  * extension
  * key
  * lastModified
  * path
  * publicAccess
  * serverSideEncryption
    * encryptionType
    * kmsMasterKeyId
  * size
  * storageClass
  * versionId

### ScopeFilterKey
* ScopeFilterKey `string` (values: BUCKET_CREATION_DATE, OBJECT_EXTENSION, OBJECT_LAST_MODIFIED_DATE, OBJECT_SIZE, TAG): The property to use in a condition that determines which objects are analyzed by a classification job. Valid values are:

### Scoping
* Scoping `object`: Specifies one or more property- and tag-based conditions that refine the scope of a classification job. These conditions define criteria that determine which objects a job analyzes. Exclude conditions take precedence over include conditions.
  * excludes
    * and
      * items [JobScopeTerm](#jobscopeterm)
  * includes
    * and
      * items [JobScopeTerm](#jobscopeterm)

### SensitiveData
* SensitiveData `array`: Provides information about the category and number of occurrences of sensitive data that produced a finding.
  * items [SensitiveDataItem](#sensitivedataitem)

### SensitiveDataItem
* SensitiveDataItem `object`: Provides information about the category, types, and occurrences of sensitive data that produced a sensitive data finding.
  * category
  * detections
    * items [DefaultDetection](#defaultdetection)
  * totalCount

### SensitiveDataItemCategory
* SensitiveDataItemCategory `string` (values: FINANCIAL_INFORMATION, PERSONAL_INFORMATION, CREDENTIALS, CUSTOM_IDENTIFIER): The category of sensitive data that was detected and produced the finding. Possible values are:

### ServerSideEncryption
* ServerSideEncryption `object`: Provides information about the server-side encryption settings for an S3 bucket or S3 object.
  * encryptionType
  * kmsMasterKeyId

### ServiceLimit
* ServiceLimit `object`: Specifies a current quota for an account.
  * isServiceLimited
  * unit
  * value

### ServiceQuotaExceededException


### SessionContext
* SessionContext `object`: Provides information about a session that was created for an entity that performed an action by using temporary security credentials.
  * attributes
    * creationDate
    * mfaAuthenticated
  * sessionIssuer
    * accountId
    * arn
    * principalId
    * type
    * userName

### SessionContextAttributes
* SessionContextAttributes `object`: Provides information about the context in which temporary security credentials were issued to an entity.
  * creationDate
  * mfaAuthenticated

### SessionIssuer
* SessionIssuer `object`: Provides information about the source and type of temporary security credentials that were issued to an entity.
  * accountId
  * arn
  * principalId
  * type
  * userName

### Severity
* Severity `object`: Provides the numerical and qualitative representations of a finding's severity.
  * description
  * score

### SeverityDescription
* SeverityDescription `string` (values: Low, Medium, High): The qualitative representation of the finding's severity. Possible values are:

### SharedAccess
* SharedAccess `string` (values: EXTERNAL, INTERNAL, NOT_SHARED, UNKNOWN)

### SimpleScopeTerm
* SimpleScopeTerm `object`: Specifies a property-based condition that determines whether an object is included or excluded from a classification job.
  * comparator
  * key
  * values
    * items [__string](#__string)

### SortCriteria
* SortCriteria `object`: Specifies criteria for sorting the results of a request for findings.
  * attributeName
  * orderBy

### Statistics
* Statistics `object`: Provides processing statistics for a classification job.
  * approximateNumberOfObjectsToProcess
  * numberOfRuns

### StorageClass
* StorageClass `string` (values: STANDARD, REDUCED_REDUNDANCY, STANDARD_IA, INTELLIGENT_TIERING, DEEP_ARCHIVE, ONEZONE_IA, GLACIER): The storage class of the S3 object. Possible values are:

### TagMap
* TagMap `object`: A string-to-string map of key-value pairs that specifies the tags (keys and values) for a classification job, custom data identifier, findings filter, or member account.

### TagResourceRequest
* TagResourceRequest `object`
  * tags **required**

### TagResourceResponse
* TagResourceResponse `object`

### TagScopeTerm
* TagScopeTerm `object`: Specifies a tag-based condition that determines whether an object is included or excluded from a classification job.
  * comparator
  * key
  * tagValues
    * items [TagValuePair](#tagvaluepair)
  * target

### TagTarget
* TagTarget `string` (values: S3_OBJECT): The type of object to apply a tag-based condition to. Valid values are:

### TagValuePair
* TagValuePair `object`: Specifies a tag key or tag key and value pair to use in a tag-based condition for a classification job.
  * key
  * value

### TestCustomDataIdentifierRequest
* TestCustomDataIdentifierRequest `object`
  * ignoreWords
    * items [__string](#__string)
  * keywords
    * items [__string](#__string)
  * maximumMatchDistance
  * regex **required**
  * sampleText **required**

### TestCustomDataIdentifierResponse
* TestCustomDataIdentifierResponse `object`
  * matchCount

### ThrottlingException


### Unit
* Unit `string` (values: TERABYTES)

### UnprocessedAccount
* UnprocessedAccount `object`:  <p>Provides information about an account-related request that hasn't been processed.</p>
  * accountId
  * errorCode
  * errorMessage

### UntagResourceRequest
* UntagResourceRequest `object`

### UntagResourceResponse
* UntagResourceResponse `object`

### UpdateClassificationJobRequest
* UpdateClassificationJobRequest `object`
  * jobStatus **required**

### UpdateClassificationJobResponse
* UpdateClassificationJobResponse `object`

### UpdateFindingsFilterRequest
* UpdateFindingsFilterRequest `object`
  * action
  * description
  * findingCriteria
    * criterion
  * name
  * position

### UpdateFindingsFilterResponse
* UpdateFindingsFilterResponse `object`
  * arn
  * id

### UpdateMacieSessionRequest
* UpdateMacieSessionRequest `object`
  * findingPublishingFrequency
  * status

### UpdateMacieSessionResponse
* UpdateMacieSessionResponse `object`

### UpdateMemberSessionRequest
* UpdateMemberSessionRequest `object`
  * status **required**

### UpdateMemberSessionResponse
* UpdateMemberSessionResponse `object`

### UpdateOrganizationConfigurationRequest
* UpdateOrganizationConfigurationRequest `object`
  * autoEnable **required**

### UpdateOrganizationConfigurationResponse
* UpdateOrganizationConfigurationResponse `object`

### UsageByAccount
* UsageByAccount `object`: Provides data for a specific usage metric and the corresponding quota for an account. The value for the metric is an aggregated value that reports usage during the past 30 days.
  * currency
  * estimatedCost
  * serviceLimit
    * isServiceLimited
    * unit
    * value
  * type

### UsageRecord
* UsageRecord `object`: Provides quota and aggregated usage data for an account.
  * accountId
  * freeTrialStartDate
  * usage
    * items [UsageByAccount](#usagebyaccount)

### UsageStatisticsFilter
* UsageStatisticsFilter `object`: Specifies a condition for filtering the results of a query for account quotas and usage data.
  * comparator
  * key
  * values
    * items [__string](#__string)

### UsageStatisticsFilterComparator
* UsageStatisticsFilterComparator `string` (values: GT, GTE, LT, LTE, EQ, NE, CONTAINS): The operator to use in a condition that filters the results of a query for account quotas and usage data. Valid values are:

### UsageStatisticsFilterKey
* UsageStatisticsFilterKey `string` (values: accountId, serviceLimit, freeTrialStartDate, total): The field to use in a condition that filters the results of a query for account quotas and usage data. Valid values are:

### UsageStatisticsSortBy
* UsageStatisticsSortBy `object`: Specifies criteria for sorting the results of a query for account quotas and usage data.
  * key
  * orderBy

### UsageStatisticsSortKey
* UsageStatisticsSortKey `string` (values: accountId, total, serviceLimitValue, freeTrialStartDate): The field to use to sort the results of a query for account quotas and usage data. Valid values are:

### UsageTotal
* UsageTotal `object`: Provides aggregated data for a usage metric. The value for the metric reports usage data for an account during the past 30 days.
  * currency
  * estimatedCost
  * type

### UsageType
* UsageType `string` (values: DATA_INVENTORY_EVALUATION, SENSITIVE_DATA_DISCOVERY): The name of a usage metric for an account. Possible values are:

### UserIdentity
* UserIdentity `object`: Provides information about the type and other characteristics of an entity that performed an action on an affected resource.
  * assumedRole
    * accessKeyId
    * accountId
    * arn
    * principalId
    * sessionContext
      * attributes
        * creationDate
        * mfaAuthenticated
      * sessionIssuer
        * accountId
        * arn
        * principalId
        * type
        * userName
  * awsAccount
    * accountId
    * principalId
  * awsService
    * invokedBy
  * federatedUser
    * accessKeyId
    * accountId
    * arn
    * principalId
    * sessionContext
      * attributes
        * creationDate
        * mfaAuthenticated
      * sessionIssuer
        * accountId
        * arn
        * principalId
        * type
        * userName
  * iamUser
    * accountId
    * arn
    * principalId
    * userName
  * root
    * accountId
    * arn
    * principalId
  * type

### UserIdentityRoot
* UserIdentityRoot `object`: Provides information about an AWS account and entity that performed an action on an affected resource. The action was performed using the credentials for your AWS account.
  * accountId
  * arn
  * principalId

### UserIdentityType
* UserIdentityType `string` (values: AssumedRole, IAMUser, FederatedUser, Root, AWSAccount, AWSService): The type of entity that performed the action on the affected resource. Possible values are:

### UserPausedDetails
* UserPausedDetails `object`: Provides information about when a classification job was paused and when it will expire and be cancelled if it isn't resumed. This object is present only if a job's current status (jobStatus) is USER_PAUSED. The information in this object applies only to a job that was paused while it had a status of RUNNING.
  * jobExpiresAt
  * jobImminentExpirationHealthEventArn
  * jobPausedAt

### ValidationException


### WeeklySchedule
* WeeklySchedule `object`: Specifies a weekly recurrence pattern for running a classification job.
  * dayOfWeek

### __boolean
* __boolean `boolean`

### __double
* __double `number`

### __integer
* __integer `integer`

### __listOfAdminAccount
* __listOfAdminAccount `array`
  * items [AdminAccount](#adminaccount)

### __listOfBatchGetCustomDataIdentifierSummary
* __listOfBatchGetCustomDataIdentifierSummary `array`
  * items [BatchGetCustomDataIdentifierSummary](#batchgetcustomdataidentifiersummary)

### __listOfBucketMetadata
* __listOfBucketMetadata `array`
  * items [BucketMetadata](#bucketmetadata)

### __listOfCustomDataIdentifierSummary
* __listOfCustomDataIdentifierSummary `array`
  * items [CustomDataIdentifierSummary](#customdataidentifiersummary)

### __listOfFinding
* __listOfFinding `array`
  * items [Finding](#finding)

### __listOfFindingType
* __listOfFindingType `array`
  * items [FindingType](#findingtype)

### __listOfFindingsFilterListItem
* __listOfFindingsFilterListItem `array`
  * items [FindingsFilterListItem](#findingsfilterlistitem)

### __listOfGroupCount
* __listOfGroupCount `array`
  * items [GroupCount](#groupcount)

### __listOfInvitation
* __listOfInvitation `array`
  * items [Invitation](#invitation)

### __listOfJobScopeTerm
* __listOfJobScopeTerm `array`
  * items [JobScopeTerm](#jobscopeterm)

### __listOfJobSummary
* __listOfJobSummary `array`
  * items [JobSummary](#jobsummary)

### __listOfKeyValuePair
* __listOfKeyValuePair `array`
  * items [KeyValuePair](#keyvaluepair)

### __listOfListJobsFilterTerm
* __listOfListJobsFilterTerm `array`
  * items [ListJobsFilterTerm](#listjobsfilterterm)

### __listOfMember
* __listOfMember `array`
  * items [Member](#member)

### __listOfS3BucketDefinitionForJob
* __listOfS3BucketDefinitionForJob `array`
  * items [S3BucketDefinitionForJob](#s3bucketdefinitionforjob)

### __listOfTagValuePair
* __listOfTagValuePair `array`
  * items [TagValuePair](#tagvaluepair)

### __listOfUnprocessedAccount
* __listOfUnprocessedAccount `array`
  * items [UnprocessedAccount](#unprocessedaccount)

### __listOfUsageByAccount
* __listOfUsageByAccount `array`
  * items [UsageByAccount](#usagebyaccount)

### __listOfUsageRecord
* __listOfUsageRecord `array`
  * items [UsageRecord](#usagerecord)

### __listOfUsageStatisticsFilter
* __listOfUsageStatisticsFilter `array`
  * items [UsageStatisticsFilter](#usagestatisticsfilter)

### __listOfUsageTotal
* __listOfUsageTotal `array`
  * items [UsageTotal](#usagetotal)

### __listOf__string
* __listOf__string `array`
  * items [__string](#__string)

### __long
* __long `integer`

### __string
* __string `string`

### __timestampIso8601
* __timestampIso8601 `string`


