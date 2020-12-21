# @datafire/azure_support

Client library for Microsoft.Support

## Installation and Usage
```bash
npm install --save @datafire/azure_support
```
```js
let azure_support = require('@datafire/azure_support').create({
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

Microsoft Azure Support Resource Provider.

## Actions

### Operations_List
This lists all the available Microsoft Support REST API operations.


```js
azure_support.Operations_List({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Api version

#### Output
* output [OperationsListResult](#operationslistresult)

### Services_List
Lists all the Azure services available for support ticket creation. Here are the Service Ids for **Billing**, **Subscription Management**, and **Service and subscription limits (Quotas)** issues: <br/><table><tr><td><u>Issue type</u></td><td><u>Service Id</u></td></tr><tr><td>Billing</td><td>'/providers/Microsoft.Support/services/517f2da6-78fd-0498-4e22-ad26996b1dfc'</td></tr><tr><td>Subscription Management</td><td>'/providers/Microsoft.Support/services/f3dc5421-79ef-1efa-41a5-42bf3cbb52c6'</td></tr><tr><td>Quota</td><td>'/providers/Microsoft.Support/services/06bfd9d3-516b-d5c6-5802-169c800dec89'</td></tr></table> <br/><br/> For **Technical** issues, select the Service Id that maps to the Azure service/product as displayed in the **Services** drop-down list on the Azure portal's <a target='_blank' href='https://portal.azure.com/#blade/Microsoft_Azure_Support/HelpAndSupportBlade/overview'>New support request</a> page. <br/><br/> Always use the service and it's corresponding problem classification(s) obtained programmatically for support ticket creation. This practice ensures that you always have the most recent set of service and problem classification Ids.


```js
azure_support.Services_List({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Api version

#### Output
* output [ServicesListResult](#serviceslistresult)

### Services_Get
Gets a specific Azure service for support ticket creation.


```js
azure_support.Services_Get({
  "serviceName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * serviceName **required** `string`: Name of Azure service
  * api-version **required** `string`: Api version

#### Output
* output [Service](#service)

### ProblemClassifications_List
Lists all the problem classifications (categories) available for a specific Azure service.<br/><br/> Always use the service and problem classifications obtained programmatically. This practice ensures that you always have the most recent set of service and problem classification Ids.


```js
azure_support.ProblemClassifications_List({
  "serviceName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * serviceName **required** `string`: Name of Azure service for which the problem classifications need to be retrieved.
  * api-version **required** `string`: Api version

#### Output
* output [ProblemClassificationsListResult](#problemclassificationslistresult)

### ProblemClassifications_Get
Gets the details of a specific problem classification for a specific Azure service.


```js
azure_support.ProblemClassifications_Get({
  "serviceName": "",
  "problemClassificationName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * serviceName **required** `string`: Name of Azure service available for support.
  * problemClassificationName **required** `string`: Name of problem classification.
  * api-version **required** `string`: Api version

#### Output
* output [ProblemClassification](#problemclassification)

### SupportTickets_CheckNameAvailability
Check the availability of a resource name. This API should to be used to check the uniqueness of the name for support ticket creation for the selected subscription.


```js
azure_support.SupportTickets_CheckNameAvailability({
  "checkNameAvailabilityInput": {
    "name": "",
    "type": ""
  },
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * checkNameAvailabilityInput **required** [CheckNameAvailabilityInput](#checknameavailabilityinput)
  * subscriptionId **required** `string`: Azure subscription id
  * api-version **required** `string`: Api version

#### Output
* output [CheckNameAvailabilityOutput](#checknameavailabilityoutput)

### SupportTickets_List
Lists all the support tickets for an Azure subscription. <br/><br/>You can also filter the support tickets by <i>Status</i> or <i>CreatedDate</i> using the $filter parameter. Output will be a paged result with <i>nextLink</i>, using which you can retrieve the next set of support tickets. <br/><br/>Support ticket data is available for 12 months after ticket creation. If a ticket was created more than 12 months ago, a request for data might cause an error.


```js
azure_support.SupportTickets_List({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * $top `integer`: The number of values to return in the collection. Default is 25 and max is 100.
  * $filter `string`: The filter to apply on the operation. We support 'odata v4.0' filter semantics. <a target='_blank' href='https://docs.microsoft.com/odata/concepts/queryoptions-overview'>Learn more</a> <br/><i>Status</i> filter can only be used with 'eq' operator. For <i>CreatedDate</i> filter, the supported operators are 'gt' and 'ge'. When using both filters, combine them using the logical 'AND'.
  * subscriptionId **required** `string`: Azure subscription id
  * api-version **required** `string`: Api version

#### Output
* output [SupportTicketsListResult](#supportticketslistresult)

### SupportTickets_Get
Gets details for a specific support ticket in an Azure subscription. <br/><br/>Support ticket data is available for 12 months after ticket creation. If a ticket was created more than 12 months ago, a request for data might cause an error.


```js
azure_support.SupportTickets_Get({
  "supportTicketName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * supportTicketName **required** `string`: Support ticket name
  * subscriptionId **required** `string`: Azure subscription id
  * api-version **required** `string`: Api version

#### Output
* output [SupportTicketDetails](#supportticketdetails)

### SupportTickets_Update
This API allows you to update the severity level or your contact information in the support ticket. <br/><br/> Note: The severity levels cannot be changed if a support ticket is actively being worked upon by an Azure support engineer. In such a case, contact your support engineer to request severity update by adding a new communication using the Communications API.


```js
azure_support.SupportTickets_Update({
  "supportTicketName": "",
  "updateSupportTicket": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * supportTicketName **required** `string`: Support ticket name
  * updateSupportTicket **required** [UpdateSupportTicket](#updatesupportticket)
  * subscriptionId **required** `string`: Azure subscription id
  * api-version **required** `string`: Api version

#### Output
* output [SupportTicketDetails](#supportticketdetails)

### SupportTickets_Create
Creates a new support ticket for Quota increase, Technical, Billing, and Subscription Management issues for the specified subscription. <br/><br/>A paid technical support plan is required to create a support ticket using this API. <a href='https://aka.ms/supportticketAPI'>Learn more</a> <br/><br/> Use the Services API to map the right Service Id to the issue type. For example: For billing tickets set *serviceId* to *'/providers/Microsoft.Support/services/517f2da6-78fd-0498-4e22-ad26996b1dfc'*. <br/> For Technical issues, the Service id will map to the Azure service you want to raise a support ticket for. <br/><br/>Always call the Services and ProblemClassifications API to get the most recent set of services and problem categories required for support ticket creation.


```js
azure_support.SupportTickets_Create({
  "supportTicketName": "",
  "createSupportTicketParameters": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * supportTicketName **required** `string`: Support ticket name.
  * createSupportTicketParameters **required** [SupportTicketDetails](#supportticketdetails)
  * subscriptionId **required** `string`: Azure subscription id
  * api-version **required** `string`: Api version

#### Output
* output [SupportTicketDetails](#supportticketdetails)

### Communications_CheckNameAvailability
Check the availability of a resource name. This API should to be used to check the uniqueness of the name for adding a new communication to the support ticket.


```js
azure_support.Communications_CheckNameAvailability({
  "supportTicketName": "",
  "checkNameAvailabilityInput": {
    "name": "",
    "type": ""
  },
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * supportTicketName **required** `string`: Support ticket name
  * checkNameAvailabilityInput **required** [CheckNameAvailabilityInput](#checknameavailabilityinput)
  * subscriptionId **required** `string`: Azure subscription id
  * api-version **required** `string`: Api version

#### Output
* output [CheckNameAvailabilityOutput](#checknameavailabilityoutput)

### Communications_List
Lists all communications (attachments not included) for a support ticket. <br/></br> You can also filter support ticket communications by <i>CreatedDate</i>�or <i>CommunicationType</i> using the $filter parameter. The only type of communication supported today is <i>Web</i>. Output will be a paged result with <i>nextLink</i>, using which you can retrieve the next set of Communication results. <br/><br/> Support ticket data is available for 12 months after ticket creation. If a ticket was created more than 12 months ago, a request for data might cause an error.


```js
azure_support.Communications_List({
  "supportTicketName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * supportTicketName **required** `string`: Support ticket name
  * $top `integer`: The number of values to return in the collection. Default is 10 and max is 10.
  * $filter `string`: The filter to apply on the operation. You can filter by communicationType and createdDate properties. CommunicationType supports Equals ('eq') operator and createdDate supports Greater Than ('gt') and Greater Than or Equals ('ge') operators. You may combine the CommunicationType and CreatedDate filters by Logical And ('and') operator.
  * subscriptionId **required** `string`: Azure subscription id
  * api-version **required** `string`: Api version

#### Output
* output [CommunicationsListResult](#communicationslistresult)

### Communications_Get
Returns details of a specific communication in a support ticket.


```js
azure_support.Communications_Get({
  "supportTicketName": "",
  "communicationName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * supportTicketName **required** `string`: Support ticket name
  * communicationName **required** `string`: Communication name
  * subscriptionId **required** `string`: Azure subscription id
  * api-version **required** `string`: Api version

#### Output
* output [CommunicationDetails](#communicationdetails)

### Communications_Create
Adds a new customer communication to an Azure support ticket. Adding attachments are not currently supported via the API. <br/>To add a file to a support ticket, visit the <a target='_blank' href='https://portal.azure.com/#blade/Microsoft_Azure_Support/HelpAndSupportBlade/managesupportrequest'>Manage support ticket</a> page in the Azure portal, select the support ticket, and use the file upload control to add a new file.


```js
azure_support.Communications_Create({
  "supportTicketName": "",
  "communicationName": "",
  "createCommunicationParameters": {},
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * supportTicketName **required** `string`: Support ticket name
  * communicationName **required** `string`: Communication name
  * createCommunicationParameters **required** [CommunicationDetails](#communicationdetails)
  * subscriptionId **required** `string`: Azure subscription id
  * api-version **required** `string`: Api version

#### Output
* output [CommunicationDetails](#communicationdetails)



## Definitions

### CheckNameAvailabilityInput
* CheckNameAvailabilityInput `object`: Input of CheckNameAvailability API.
  * name **required** `string`: The resource name to validate
  * type **required** `string` (values: Microsoft.Support/supportTickets, Microsoft.Support/communications): The type of resource

### CheckNameAvailabilityOutput
* CheckNameAvailabilityOutput `object`: Output of check name availability API.
  * message `string`: The detailed error message describing why the name is not available.
  * nameAvailable `boolean`: Indicates whether the name is available.
  * reason `string`: The reason why the name is not available.

### CommunicationDetails
* CommunicationDetails `object`: Object that represents Communication resource
  * id `string`: Id of the resource
  * name `string`: Name of the resource
  * properties [CommunicationDetailsProperties](#communicationdetailsproperties)
  * type `string`: Type of the resource 'Microsoft.Support/communications'

### CommunicationDetailsProperties
* CommunicationDetailsProperties `object`: Describes the properties of a communication resource.
  * body **required** `string`: Body of the communication
  * communicationDirection `string` (values: inbound, outbound): Direction of communication
  * communicationType `string` (values: web, phone): Communication type
  * createdDate `string`: Time in UTC (ISO 8601 format) when the communication was created.
  * sender `string`: Email address of the sender
  * subject **required** `string`: Subject of the communication

### CommunicationsListResult
* CommunicationsListResult `object`: Collection of Communication resources.
  * nextLink `string`: The URI to fetch the next page of Communication resources.
  * value `array`: List of Communication resources.
    * items [CommunicationDetails](#communicationdetails)

### ContactProfile
* ContactProfile `object`: Contact information associated with support ticket.
  * additionalEmailAddresses `array`: Additional email addresses listed will be copied on any correspondence about the support ticket.
    * items `string`
  * country **required** `string`: Country of the user. This is the ISO 3166-1 alpha-3 code.
  * firstName **required** `string`: First name.
  * lastName **required** `string`: Last name.
  * phoneNumber `string`: Phone number. This is required if preferred contact method is phone.
  * preferredContactMethod **required** `string` (values: email, phone): Preferred contact method.
  * preferredSupportLanguage **required** `string`: Preferred language of support from Azure. Support languages vary based on the severity you choose for your support ticket. Learn more at <a  target='_blank' href='https://azure.microsoft.com/support/plans/response/'>Azure Severity and responsiveness</a>. Use the standard language-country code. Valid values are 'en-us' for English, 'zh-hans' for Chinese, 'es-es' for Spanish, 'fr-fr' for French, 'ja-jp' for Japanese, 'ko-kr' for Korean, 'ru-ru' for Russian, 'pt-br' for Portuguese, 'it-it' for Italian, 'zh-tw' for Chinese and 'de-de' for German.
  * preferredTimeZone **required** `string`: Time zone of the user. This is the name of the time zone from <a  target='_blank' href='https://support.microsoft.com/en-us/help/973627/microsoft-time-zone-index-values'>Microsoft Time Zone Index Values</a>.
  * primaryEmailAddress **required** `string`: Primary email address.

### ExceptionResponse
* ExceptionResponse `object`: The api error.
  * error [ServiceError](#serviceerror)

### Operation
* Operation `object`: The operation supported by Microsoft Support RP.
  * display `object`: The object that describes the operation.
    * description `string`: The description of the operation
    * operation `string`: The action that users can perform, based on their permission level
    * provider `string`: Service provider: Microsoft Support
    * resource `string`: Resource on which the operation is performed
  * name `string`: Operation name: {provider}/{resource}/{operation}

### OperationsListResult
* OperationsListResult `object`: The list of operations supported by Microsoft Support resource provider.
  * value `array`: The list of operations supported by Microsoft Support resource provider.
    * items [Operation](#operation)

### ProblemClassification
* ProblemClassification `object`: ProblemClassification resource object
  * id `string`: Id of the resource
  * name `string`: Name of the resource
  * properties [ProblemClassificationProperties](#problemclassificationproperties)
  * type `string`: Type of the resource 'Microsoft.Support/problemClassification'

### ProblemClassificationProperties
* ProblemClassificationProperties `object`: Details about a problem classification available for an Azure service
  * displayName `string`: Localized name of problem classification.

### ProblemClassificationsListResult
* ProblemClassificationsListResult `object`: Collection of ProblemClassification resources
  * value `array`: List of ProblemClassification resources
    * items [ProblemClassification](#problemclassification)

### QuotaChangeRequest
* QuotaChangeRequest `object`: This property is required for providing the region and new quota limits
  * payload `string`: Payload of the quota increase request.
  * region `string`: Region for which the quota increase request is being made.

### QuotaTicketDetails
* QuotaTicketDetails `object`: Additional set of information required for quota increase support ticket for certain quota types, e.g.: Virtual machine cores. Get complete details about Quota payload support request along with examples at <a target='' href='https://aka.ms/supportrpquotarequestpayload'>Support quota request</a>.
  * quotaChangeRequestSubType `string`: Required for certain quota types when there is a sub type that you are requesting quota increase for. Example: Batch
  * quotaChangeRequestVersion `string`: Quota change request version
  * quotaChangeRequests `array`: This property is required for providing the region and new quota limits.
    * items [QuotaChangeRequest](#quotachangerequest)

### Service
* Service `object`: Object that represents a Service resource.
  * id `string`: Id of the resource
  * name `string`: Name of the resource
  * properties [ServiceProperties](#serviceproperties)
  * type `string`: Type of the resource 'Microsoft.Support/services'

### ServiceError
* ServiceError `object`: The api error details.
  * code `string`: The error code.
  * details `array`: The list of error details.
    * items [ServiceErrorDetail](#serviceerrordetail)
  * message `string`: The error message.
  * target `string`: The target of the error.

### ServiceErrorDetail
* ServiceErrorDetail `object`: The error details.
  * code `string`: The error code.
  * message `string`: The error message.
  * target `string`: The target of the error.

### ServiceLevelAgreement
* ServiceLevelAgreement `object`: Service Level Agreement details for a support ticket.
  * expirationTime `string`: Time in UTC (ISO 8601 format) when service level agreement expires.
  * slaMinutes `integer`: Service Level Agreement in minutes
  * startTime `string`: Time in UTC (ISO 8601 format) when service level agreement starts.

### ServiceProperties
* ServiceProperties `object`: Details about Azure service available for support ticket creation
  * displayName `string`: Localized name of Azure service

### ServicesListResult
* ServicesListResult `object`: Collection of Service resources.
  * value `array`: List of Service resources
    * items [Service](#service)

### SupportEngineer
* SupportEngineer `object`: Support engineer information.
  * emailAddress `string`: Email address of the Azure Support engineer assigned to the support ticket.

### SupportTicketDetails
* SupportTicketDetails `object`: Object that represents SupportTicketDetails resource
  * id `string`: Id of the resource
  * name `string`: Name of the resource
  * properties [SupportTicketDetailsProperties](#supportticketdetailsproperties)
  * type `string`: Type of the resource 'Microsoft.Support/supportTickets'

### SupportTicketDetailsProperties
* SupportTicketDetailsProperties `object`: Describes the properties of a support ticket.
  * contactDetails **required** [ContactProfile](#contactprofile)
  * createdDate `string`: Time in UTC (ISO 8601 format) when support ticket was created.
  * description **required** `string`: Detailed description of the question or issue.
  * enrollmentId `string`: Enrollment ID associated with the support ticket.
  * modifiedDate `string`: Time in UTC (ISO 8601 format) when support ticket was last modified.
  * problemClassificationDisplayName `string`: Localized name of problem classification.
  * problemClassificationId **required** `string`: Each Azure service has its own set of issue category called problem classification that corresponds to the type of problem you're experiencing. This parameter is the resource id of ProblemClassification resource.
  * problemStartTime `string`: Time in UTC (ISO 8601 format) when the problem started.
  * productionOutage `boolean`: Indicates if this issue is a production outage.
  * quotaTicketDetails [QuotaTicketDetails](#quotaticketdetails)
  * require24X7Response `boolean`: Indicates if this requires a 24x7 response from Azure.
  * serviceDisplayName `string`: Localized name of Azure service.
  * serviceId **required** `string`: This is the resource id of the Azure service resource associated with the support ticket.
  * serviceLevelAgreement [ServiceLevelAgreement](#servicelevelagreement)
  * severity **required** `string` (values: minimal, moderate, critical): A value that indicates the urgency of the case, which in turn determines the response time according to the service level agreement of the technical support plan you have with Azure.
  * status `string`: Status of the support ticket.
  * supportEngineer [SupportEngineer](#supportengineer)
  * supportPlanType `string`: Support plan type associated with the support ticket.
  * supportTicketId `string`: System generated support ticket id that is unique.
  * technicalTicketDetails [TechnicalTicketDetails](#technicalticketdetails)
  * title **required** `string`: Title of the support ticket.

### SupportTicketsListResult
* SupportTicketsListResult `object`: Object that represents a collection of SupportTicket resources.
  * nextLink `string`: The URI to fetch the next page of SupportTicket resources.
  * value `array`: List of SupportTicket resources.
    * items [SupportTicketDetails](#supportticketdetails)

### TechnicalTicketDetails
* TechnicalTicketDetails `object`: Additional information for technical support ticket.
  * resourceId `string`: This is the resource id of the Azure service resource (For example: A virtual machine resource or an HDInsight resource) for which the support ticket is created.

### UpdateContactProfile
* UpdateContactProfile `object`: Contact information associated with the support ticket.
  * additionalEmailAddresses `array`: Email addresses listed will be copied on any correspondence about the support ticket
    * items `string`
  * country `string`: Country of the user. This is the ISO 3166-1 alpha-3 code.
  * firstName `string`: First name
  * lastName `string`: Last name
  * phoneNumber `string`: Phone number. This is required if preferred contact method is phone.
  * preferredContactMethod `string` (values: email, phone): Preferred contact method
  * preferredSupportLanguage `string`: Preferred language of support from Azure. Support languages vary based on the severity you choose for your support ticket. Learn more at <a  target='_blank' href='https://azure.microsoft.com/support/plans/response/'>Azure Severity and responsiveness</a>. Use the standard language-country code. Valid values are 'en-us' for English, 'zh-hans' for Chinese, 'es-es' for Spanish, 'fr-fr' for French, 'ja-jp' for Japanese, 'ko-kr' for Korean, 'ru-ru' for Russian, 'pt-br' for Portuguese, 'it-it' for Italian, 'zh-tw' for Chinese and 'de-de' for German.
  * preferredTimeZone `string`: Time zone of the user. This is the name of the time zone from <a  target='_blank' href='https://support.microsoft.com/en-us/help/973627/microsoft-time-zone-index-values'>Microsoft Time Zone Index Values</a>.
  * primaryEmailAddress `string`: Primary email address

### UpdateSupportTicket
* UpdateSupportTicket `object`: Updates severity and contact details in the support ticket.
  * contactDetails [UpdateContactProfile](#updatecontactprofile)
  * severity `string` (values: minimal, moderate, critical): Severity level


