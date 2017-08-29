# @datafire/amazonaws_organizations

Client library for AWS Organizations

## Installation and Usage
```bash
npm install --save datafire @datafire/amazonaws_organizations
```

```js
let datafire = require('datafire');
let amazonaws_organizations = require('@datafire/amazonaws_organizations').create();

amazonaws_organizations.AcceptHandshake({}).then(data => {
  console.log(data);
})
```

## Description
<fullname>AWS Organizations API Reference</fullname> <p>AWS Organizations is a web service that enables you to consolidate your multiple AWS accounts into an <i>organization</i> and centrally manage your accounts and their resources.</p> <p>This guide provides descriptions of the Organizations API. For more information about using this service, see the <a href="http://docs.aws.amazon.com/organizations/latest/userguide/orgs_introduction.html">AWS Organizations User Guide</a>.</p> <p> <b>API Version</b> </p> <p>This version of the Organizations API Reference documents the Organizations API version 2016-11-28.</p> <note> <p>As an alternative to using the API directly, you can use one of the AWS SDKs, which consist of libraries and sample code for various programming languages and platforms (Java, Ruby, .NET, iOS, Android, and more). The SDKs provide a convenient way to create programmatic access to AWS Organizations. For example, the SDKs take care of cryptographically signing requests, managing errors, and retrying requests automatically. For more information about the AWS SDKs, including how to download and install them, see <a href="http://aws.amazon.com/tools/">Tools for Amazon Web Services</a>.</p> </note> <p>We recommend that you use the AWS SDKs to make programmatic API calls to Organizations. However, you also can use the Organizations Query API to make direct calls to the Organizations web service. To learn more about the Organizations Query API, see <a href="http://docs.aws.amazon.com/organizations/latest/userguide/orgs_query-requests.html">Making Query Requests</a> in the <i>AWS Organizations User Guide</i>. Organizations supports GET and POST requests for all actions. That is, the API does not require you to use GET for some actions and POST for others. However, GET requests are subject to the limitation size of a URL. Therefore, for operations that require larger sizes, use a POST request.</p> <p> <b>Signing Requests</b> </p> <p>When you send HTTP requests to AWS, you must sign the requests so that AWS can identify who sent them. You sign requests with your AWS access key, which consists of an access key ID and a secret access key. We strongly recommend that you do not create an access key for your root account. Anyone who has the access key for your root account has unrestricted access to all the resources in your account. Instead, create an access key for an IAM user account that has administrative privileges. As another option, use AWS Security Token Service to generate temporary security credentials, and use those credentials to sign requests. </p> <p>To sign requests, we recommend that you use <a href="http://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4</a>. If you have an existing application that uses Signature Version 2, you do not have to update it to use Signature Version 4. However, some operations now require Signature Version 4. The documentation for operations that require version 4 indicate this requirement. </p> <p>When you use the AWS Command Line Interface (AWS CLI) or one of the AWS SDKs to make requests to AWS, these tools automatically sign the requests for you with the access key that you specify when you configure the tools.</p> <p>In this release, each organization can have only one root. In a future release, a single organization will support multiple roots.</p> <p> <b>Support and Feedback for AWS Organizations</b> </p> <p>We welcome your feedback. Send your comments to <a href="mailto:feedback-awsorganizations@amazon.com">feedback-awsorganizations@amazon.com</a> or post your feedback and questions in our private <a href="http://forums.aws.amazon.com/forum.jspa?forumID=219">AWS Organizations support forum</a>. If you don't have access to the forum, send a request for access to the email address, along with your forum user ID. For more information about the AWS support forums, see <a href="http://forums.aws.amazon.com/help.jspa">Forums Help</a>.</p> <p> <b>Endpoint to Call When Using the CLI or the AWS API</b> </p> <p>For the current release of Organizations, you must specify the <code>us-east-1</code> region for all AWS API and CLI calls. You can do this in the CLI by using these parameters and commands:</p> <ul> <li> <p>Use the following parameter with each command to specify both the endpoint and its region:</p> <p> <code>--endpoint-url https://organizations.us-east-1.amazonaws.com</code> </p> </li> <li> <p>Use the default endpoint, but configure your default region with this command:</p> <p> <code>aws configure set default.region us-east-1</code> </p> </li> <li> <p>Use the following parameter with each command to specify the endpoint:</p> <p> <code>--region us-east-1</code> </p> </li> </ul> <p>For the various SDKs used to call the APIs, see the documentation for the SDK of interest to learn how to direct the requests to a specific endpoint. For more information, see <a href="http://docs.aws.amazon.com/general/latest/gr/rande.html#sts_region">Regions and Endpoints</a> in the <i>AWS General Reference</i>. </p> <p> <b>How examples are presented</b> </p> <p>The JSON returned by the AWS Organizations service as response to your requests is returned as a single long string without line breaks or formatting whitespace. Both line breaks and whitespace are included in the examples in this guide to improve readability. When example input parameters also would result in long strings that would extend beyond the screen, we insert line breaks to enhance readability. You should always submit the input as a single JSON text string.</p> <p> <b>Recording API Requests</b> </p> <p>AWS Organizations supports AWS CloudTrail, a service that records AWS API calls for your AWS account and delivers log files to an Amazon S3 bucket. By using information collected by AWS CloudTrail, you can determine which requests were successfully made to Organizations, who made the request, when it was made, and so on. For more about AWS Organizations and its support for AWS CloudTrail, see <a href="http://docs.aws.amazon.com/organizations/latest/userguide/orgs_cloudtrail-integration.html">Logging AWS Organizations Events with AWS CloudTrail</a> in the <i>AWS Organizations User Guide</i>. To learn more about CloudTrail, including how to turn it on and find your log files, see the <a href="http://docs.aws.amazon.com/awscloudtrail/latest/userguide/what_is_cloud_trail_top_level.html">AWS CloudTrail User Guide</a>.</p>

## Actions
### AcceptHandshake



```js
amazonaws_organizations.AcceptHandshake({}, context)
```


### AttachPolicy



```js
amazonaws_organizations.AttachPolicy({}, context)
```


### CancelHandshake



```js
amazonaws_organizations.CancelHandshake({}, context)
```


### CreateAccount



```js
amazonaws_organizations.CreateAccount({}, context)
```


### CreateOrganization



```js
amazonaws_organizations.CreateOrganization({}, context)
```


### CreateOrganizationalUnit



```js
amazonaws_organizations.CreateOrganizationalUnit({}, context)
```


### CreatePolicy



```js
amazonaws_organizations.CreatePolicy({}, context)
```


### DeclineHandshake



```js
amazonaws_organizations.DeclineHandshake({}, context)
```


### DeleteOrganization



```js
amazonaws_organizations.DeleteOrganization({}, context)
```


### DeleteOrganizationalUnit



```js
amazonaws_organizations.DeleteOrganizationalUnit({}, context)
```


### DeletePolicy



```js
amazonaws_organizations.DeletePolicy({}, context)
```


### DescribeAccount



```js
amazonaws_organizations.DescribeAccount({}, context)
```


### DescribeCreateAccountStatus



```js
amazonaws_organizations.DescribeCreateAccountStatus({}, context)
```


### DescribeHandshake



```js
amazonaws_organizations.DescribeHandshake({}, context)
```


### DescribeOrganization



```js
amazonaws_organizations.DescribeOrganization({}, context)
```


### DescribeOrganizationalUnit



```js
amazonaws_organizations.DescribeOrganizationalUnit({}, context)
```


### DescribePolicy



```js
amazonaws_organizations.DescribePolicy({}, context)
```


### DetachPolicy



```js
amazonaws_organizations.DetachPolicy({}, context)
```


### DisablePolicyType



```js
amazonaws_organizations.DisablePolicyType({}, context)
```


### EnableAllFeatures



```js
amazonaws_organizations.EnableAllFeatures({}, context)
```


### EnablePolicyType



```js
amazonaws_organizations.EnablePolicyType({}, context)
```


### InviteAccountToOrganization



```js
amazonaws_organizations.InviteAccountToOrganization({}, context)
```


### LeaveOrganization



```js
amazonaws_organizations.LeaveOrganization({}, context)
```


### ListAccounts



```js
amazonaws_organizations.ListAccounts({}, context)
```

#### Parameters
* MaxResults (string)
* NextToken (string)

### ListAccountsForParent



```js
amazonaws_organizations.ListAccountsForParent({}, context)
```

#### Parameters
* MaxResults (string)
* NextToken (string)

### ListChildren



```js
amazonaws_organizations.ListChildren({}, context)
```

#### Parameters
* MaxResults (string)
* NextToken (string)

### ListCreateAccountStatus



```js
amazonaws_organizations.ListCreateAccountStatus({}, context)
```

#### Parameters
* MaxResults (string)
* NextToken (string)

### ListHandshakesForAccount



```js
amazonaws_organizations.ListHandshakesForAccount({}, context)
```

#### Parameters
* MaxResults (string)
* NextToken (string)

### ListHandshakesForOrganization



```js
amazonaws_organizations.ListHandshakesForOrganization({}, context)
```

#### Parameters
* MaxResults (string)
* NextToken (string)

### ListOrganizationalUnitsForParent



```js
amazonaws_organizations.ListOrganizationalUnitsForParent({}, context)
```

#### Parameters
* MaxResults (string)
* NextToken (string)

### ListParents



```js
amazonaws_organizations.ListParents({}, context)
```

#### Parameters
* MaxResults (string)
* NextToken (string)

### ListPolicies



```js
amazonaws_organizations.ListPolicies({}, context)
```

#### Parameters
* MaxResults (string)
* NextToken (string)

### ListPoliciesForTarget



```js
amazonaws_organizations.ListPoliciesForTarget({}, context)
```

#### Parameters
* MaxResults (string)
* NextToken (string)

### ListRoots



```js
amazonaws_organizations.ListRoots({}, context)
```

#### Parameters
* MaxResults (string)
* NextToken (string)

### ListTargetsForPolicy



```js
amazonaws_organizations.ListTargetsForPolicy({}, context)
```

#### Parameters
* MaxResults (string)
* NextToken (string)

### MoveAccount



```js
amazonaws_organizations.MoveAccount({}, context)
```


### RemoveAccountFromOrganization



```js
amazonaws_organizations.RemoveAccountFromOrganization({}, context)
```


### UpdateOrganizationalUnit



```js
amazonaws_organizations.UpdateOrganizationalUnit({}, context)
```


### UpdatePolicy



```js
amazonaws_organizations.UpdatePolicy({}, context)
```


