# @datafire/postmark

Client library for Postmark

## Installation and Usage
```bash
npm install --save @datafire/postmark
```
```js
let postmark = require('@datafire/postmark').create();

postmark.email.post({}).then(data => {
  console.log(data);
})
```

## Description

Send emails, retrieve bounces and start accepting inbound emails, all via an easy-to-use HTTP API.

## Actions

### email.post
Sends e-mails. Currently Postmark supports JSON message format. The mail message format is:

{
    "From" : "sender@example.com",
    "To" : "receiver@example.com",
    "Cc" : "copied@example.com",
    "Bcc": "blank-copied@example.com",
    "Subject" : "Test",
    "Tag" : "Invitation",
    "HtmlBody" : "<b>Hello</b>",
    "TextBody" : "Hello",
    "ReplyTo" : "reply@example.com",
    "Headers" : [{ "Name" : "CUSTOM-HEADER", "Value" : "value" }],
    "Attachments": [
        {
             "Name": "readme.txt",
             "Content": "dGVzdCBjb250ZW50",
             "ContentType": "text/plain"
        },
        {
            "Name": "report.pdf",
            "Content": "dGVzdCBjb250ZW50",
            "ContentType": "application/octet-stream"
        }
    ]
}

You should pass the json encoded message in the body of the request. Both from and to accept name, in the format of John Doe <email@example.com>. You can provide HtmlBody for html formatted messages, TextBody for plain text, or both for multipart. Multipart sends html with a text version for clients that don’t support html. Passing headers is optional.

1. You should have a registered and confirmed sender signature with the sender email. Otherwise you will receive HTTP Response 422 (Unprocessable Entity).
2. It is possible to override the Name in the sender signature through the API. This is useful if you want to use member’s information in the email while keeping your from email address. just pass the name in the From parameter, From: "John Smith <sender@example.com>".
3. You can pass multiple recipient addresses in the ‘To’ field and the optional ‘Cc’ and ‘Bcc’ fields. Separate multiple addresses with a comma. Note that Postmark has a limit of twenty recipients per message in total. You need to take care not to exceed that limit. Otherwise you will get an error.
4. You can categorize outgoing email using the optional Tag property. If you use different tags for the different types of emails your application generates, you will be able to get detailed statistics for them through the Postmark user interface.

Attachments
Attachments are specified in the Attachments array property. An attachment is an object that has to provide the file name (via the Name property), the content type (ContentType property) and the actual binary data (Content property) that has to be sent with the message.

The name is the actual file name that will be displayed to the message recipient. Note that the file extension is important. To eliminate the possibility of spreading viruses or spyware we allow only a number of file types. That is, instead of using a list of forbidden files and risking an unanticipated file type spreading infections, we have taken the opposite approach — we whitelist document file types that we are certain are safe. Here is the list of allowed files:

- Media files: gif, jpg, jpeg, png, swf, flv, avi, mpg, mp3, mp4, ogv, wav, rm, mov, psd, ai, tif, tiff
- Documents: txt, rtf, htm, html, pdf, epub, mobi, doc, docx, ppt, pptx, xls, xlsx, ps, eps, iif
- Miscellaneous: log, csv, ics, xml, zip

Contact us if you feel we need to whitelist a file that your application needs.

The content type is the MIME content type that email clients use to interpret various attachments such as: text/plain, text/html, image/jpeg, etc. Your code can either detect it by the file extension, use a third party library to infer it, ask the user to provide it or just default to application/octet-stream.

The binary data has to be transmitted as a base64-encoded string. Most programming languages and libraries have this built in e.g. Java, .NET, PHP, Ruby.

You can use SSL encryption by issuing requests to https://api.postmarkapp.com/email.

Success
If all goes well, you will get back a JSON message looking a lot like:

{
    "ErrorCode" : 0,
    "Message" : "OK",
    "MessageID" : "b7bc2f4a-e38e-4336-af7d-e6c392c2f817",
    "SubmittedAt" : "2010-11-26T12:01:05.1794748-05:00",
    "To" : "receiver@example.com"
}

Note the MessageID property. You can log it in your system and use it to associate the message you just sent to a possible bounce that you obtained from a bounce web hook or the bounce API.


```js
postmark.email.post({
  "Content-Type": "",
  "Accept": ""
}, context)
```

#### Input
* input `object`
  * Content-Type **required** `string` (values: application/json, text/json, text/x-json): The content type of the request. Must be set to application/json, text/json, or text/x-json.
  * Accept **required** `string` (values: application/json, text/json, text/x-json): The accepted type for the response. Must be set to application/json, text/json, or text/x-json.

#### Output
*Output schema unknown*

### email.batch.post
While Postmark is focused on transactional email, we understand that developers with higher volumes or processing time constraints need to send their messages in batches. To facilitate this we provide a batching endpoint that permits you to send up to 500 well-formed Postmark messages in a single API call.
                    
The format of the batched message is a JSON array containing multiple message requests like the following example:
[
    {From: 'sender@example.com', To: 'receiver1@example.com', Subject: 'Postmark test #1', HtmlBody: '<html><body><strong>Hello</strong> dear Postmark user.</body></html>'},
    {From: 'sender@example.com', To: 'receiver2@example.com', Subject: 'Postmark test #2', HtmlBody: '<html><body><strong>Hello</strong> dear Postmark user.</body></html>'}
]

You can use SSL encryption by issuing requests to https://api.postmarkapp.com/email/batch.

Similarly, you will receive a matching JSON array containing each response for the messages you sent in your batched call:

[
    {
        "ErrorCode" : 0,
        "Message" : "OK",
        "MessageID" : "b7bc2f4a-e38e-4336-af7d-e6c392c2f817",
        "SubmittedAt" : "2010-11-26T12:01:05.1794748-05:00",
        "To" : "receiver1@example.com"
    },
    {
        "ErrorCode" : 0,
        "Message" : "OK",
        "MessageID" : "e2ecbbfc-fe12-463d-b933-9fe22915106d",
        "SubmittedAt" : "2010-11-26T12:01:05.1794748-05:00",
        "To" : "receiver2@example.com"
    },
]


```js
postmark.email.batch.post({
  "Content-Type": "",
  "Accept": ""
}, context)
```

#### Input
* input `object`
  * Content-Type **required** `string` (values: application/json, text/json, text/x-json): The content type of the request. Must be set to application/json, text/json, or text/x-json.
  * Accept **required** `string` (values: application/json, text/json, text/x-json): The accepted type for the response. Must be set to application/json, text/json, or text/x-json.

#### Output
*Output schema unknown*

### deliverystats.get
Returns a summary of inactive emails and bounces by type.


```js
postmark.deliverystats.get({
  "Content-Type": "",
  "Accept": ""
}, context)
```

#### Input
* input `object`
  * Content-Type **required** `string` (values: application/json, text/json, text/x-json): The content type of the request. Must be set to application/json, text/json, or text/x-json.
  * Accept **required** `string` (values: application/json, text/json, text/x-json): The accepted type for the response. Must be set to application/json, text/json, or text/x-json.

#### Output
*Output schema unknown*

### bounces.get
Fetches a portion of bounces according to the specified input criteria. Supported filters: type, inactive, email like, tag. Paging: page_size (count), page_start (offset). Bounces are sorted by BouncedAt in a descending order.


```js
postmark.bounces.get({
  "Content-Type": "",
  "Accept": "",
  "count": 0,
  "offset": 0
}, context)
```

#### Input
* input `object`
  * Content-Type **required** `string` (values: application/json, text/json, text/x-json): The content type of the request. Must be set to application/json, text/json, or text/x-json.
  * Accept **required** `string` (values: application/json, text/json, text/x-json): The accepted type for the response. Must be set to application/json, text/json, or text/x-json.
  * type `string` (values: HardBounce, Transient, Unsubscribe, Subscribe, AutoResponder, AddressChange, DnsError, SpamNotification, OpenRelayTest, Unknown, SoftBounce, VirusNotification, ChallengeVerification, BadEmailAddress, SpamComplaint, ManuallyDeactivated, Unconfirmed, Blocked): Filter by bounce type. Supported types are:
  * inactive `string` (values: true, false, ): Filter by active/inactive status. Note that we have three options here: true, false, and null (no value). To get all bounces no matter if they are active or inactive, do not pass a value.
  * emailFilter `string`: Return only bounces whose recipient address contains the provided string.
  * tag `string`: Filter by tag.
  * count **required** `integer`: The number of bounces to retrieve. A page has 25 bounces. To know how much your bounces are, you need to request a portion first, usually the first page, and the service will return the count in the TotalCount property in the response.
  * offset **required** `integer`: The offset from where to start retrieving bounces. Starts at 0.

#### Output
*Output schema unknown*

### bounces.bounceID.get
Gets details about a single bounce. Note that the bounce ID is a numeric value that you typically obtain after a getting a list of bounces.


```js
postmark.bounces.bounceID.get({
  "Content-Type": "",
  "Accept": "",
  "bounceID": 0
}, context)
```

#### Input
* input `object`
  * Content-Type **required** `string` (values: application/json, text/json, text/x-json): The content type of the request. Must be set to application/json, text/json, or text/x-json.
  * Accept **required** `string` (values: application/json, text/json, text/x-json): The accepted type for the response. Must be set to application/json, text/json, or text/x-json.
  * bounceID **required** `integer`: A bounce ID.

#### Output
*Output schema unknown*

### bounces.bounceID.dump.get
Returns the raw source of the bounce we accepted. If Postmark does not have a dump for that bounce, it will return an empty string.


```js
postmark.bounces.bounceID.dump.get({
  "Content-Type": "",
  "Accept": "",
  "bounceID": 0
}, context)
```

#### Input
* input `object`
  * Content-Type **required** `string` (values: application/json, text/json, text/x-json): The content type of the request. Must be set to application/json, text/json, or text/x-json.
  * Accept **required** `string` (values: application/json, text/json, text/x-json): The accepted type for the response. Must be set to application/json, text/json, or text/x-json.
  * bounceID **required** `integer`: A bounce ID.

#### Output
*Output schema unknown*

### bounces.tags.get
Returns a list of tags used for the current server.


```js
postmark.bounces.tags.get({
  "Content-Type": "",
  "Accept": ""
}, context)
```

#### Input
* input `object`
  * Content-Type **required** `string` (values: application/json, text/json, text/x-json): The content type of the request. Must be set to application/json, text/json, or text/x-json.
  * Accept **required** `string` (values: application/json, text/json, text/x-json): The accepted type for the response. Must be set to application/json, text/json, or text/x-json.

#### Output
*Output schema unknown*

### bounces.bounceID.activate.put
Activates a deactivated bounce. Note that you do not need to send anything in the request body.


```js
postmark.bounces.bounceID.activate.put({
  "Content-Type": "",
  "Accept": "",
  "bounceID": 0
}, context)
```

#### Input
* input `object`
  * Content-Type **required** `string` (values: application/json, text/json, text/x-json): The content type of the request. Must be set to application/json, text/json, or text/x-json.
  * Accept **required** `string` (values: application/json, text/json, text/x-json): The accepted type for the response. Must be set to application/json, text/json, or text/x-json.
  * bounceID **required** `integer`: A bounce ID.

#### Output
*Output schema unknown*

### server.get
Gets the server details and figures out your unique InboundHash where you can forward your email. This can be found in the web app in your server's Credentials tab or via the API.


```js
postmark.server.get({
  "Content-Type": "",
  "Accept": ""
}, context)
```

#### Input
* input `object`
  * Content-Type **required** `string` (values: application/json, text/json, text/x-json): The content type of the request. Must be set to application/json, text/json, or text/x-json.
  * Accept **required** `string` (values: application/json, text/json, text/x-json): The accepted type for the response. Must be set to application/json, text/json, or text/x-json.

#### Output
*Output schema unknown*

### server.post
Sets the URL where we should send JSON data. In order for your application receive the emails that we parse, you will need to tell Postmark where to send the JSON data for each inbound email it processes, which is done via an HTTP POST to a URL of your choice. You can set this URL in the Settings page for your Postmark server in the web app, or using the InboundHookUrl field in the API. It also lets you choose a domain that you would like to listen on for incoming email to be processed by Postmark. We recommend a separate subdomain, like inbound.yourdomain.com. Each server can listen to one unique domain, so make sure to set the X-Postmark-Server-Token to the correct server token in the API call below.


```js
postmark.server.post({
  "Content-Type": "",
  "Accept": ""
}, context)
```

#### Input
* input `object`
  * Content-Type **required** `string` (values: application/json, text/json, text/x-json): The content type of the request. Must be set to application/json, text/json, or text/x-json.
  * Accept **required** `string` (values: application/json, text/json, text/x-json): The accepted type for the response. Must be set to application/json, text/json, or text/x-json.

#### Output
*Output schema unknown*



## Definitions

**This integration has no definitions**
